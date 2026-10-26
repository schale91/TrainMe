// Übungsfiguren aus der Lebenswelt (dort früher im Kraftbuch): eine Figur (Kapselkörper, Kugelkopf) turnt die Übung
// mit dem passenden Gerät vor, gerendert mit Three.js. Ein einziger WebGL-Renderer zeichnet nur, was gerade sichtbar
// ist, und kopiert das Bild in die Canvas. Wird erst geladen, wenn eine Figur gebraucht wird.
//
// Haltungen stehen als Gelenkwinkel in einer Seitenansicht (Figur blickt nach +x): 0° = nach unten,
// positiv = nach vorn. Einheiten: Figur steht 100 Einheiten hoch, Boden bei y = 86 (y wächst nach unten).
// ab/yaw drehen Arme seitlich weg (Seitheben) bzw. waagerecht auf (Butterfly), lg spreizt die Beine.
import * as THREE from 'three'

type V2 = [number, number]
type V3 = [number, number, number]
interface Pose {
  t: number
  th: number
  sh: number
  ua: number
  fa: number
  th2?: number
  sh2?: number
  ua2?: number
  fa2?: number
  ab?: number
  fab?: number
  yaw?: number
  lg?: number
  h?: number
  sy?: number
  toe?: number
  x?: number
  y?: number
  foot?: V2
  knee?: V2
  wrist?: V2
  shoulder?: V2
}
type Eq = 'bar' | 'sz' | 'db' | 'cable' | 'band' | 'none' | 'latbar' | 'plate' | 'rope'
interface Joints {
  hip: V3
  sh: V3
  head: V3
  knee: V3[]
  ankle: V3[]
  toe: V3[]
  hipL: V3[]
  shL: V3[]
  elbow: V3[]
  wrist: V3[]
}
interface Spec {
  a: Pose
  b: Pose
  eq: Eq
  /** Ausrüstung folgt dem im Kraftbuch gewählten Gerät */
  flex?: boolean
  /** nur der nahe Arm arbeitet */
  oneArm?: boolean
  /** Stange auf dem Rücken / vor dem Hals statt in den Händen */
  barAt?: 'back' | 'front'
  /** Zugpunkt(e) für Kabel oder Band (2D-Einheiten, z seitlich) */
  anchor?: V3
  anchors?: [V3, V3]
  /** feste Geräte: Bank, Rack usw. */
  props?: (A: Joints, B: Joints) => THREE.Object3D[]
  dur?: number
}

const LT = 19, LS = 19, LTO = 25, LU = 13, LF = 12, HR = 5.5, GROUND = 86
const SHZ = 8.5, HIPZ = 4.5
const rad = (d: number) => (d * Math.PI) / 180
// 2D-Einheiten -> Welt (Meter-ähnlich, y nach oben)
const W = (p: V3): THREE.Vector3 => new THREE.Vector3((p[0] - 60) / 50, (GROUND - p[1]) / 50, p[2] / 50)

// Richtung eines Glieds in 2D-Koordinaten (y nach unten) mit seitlicher Drehung
function gliedRichtung(a: number, ab: number, yaw: number, seite: number): V3 {
  // Seitenansicht: (sin a, cos a) mit y nach unten
  let x = Math.sin(rad(a)), y = Math.cos(rad(a)), z = 0
  // Abspreizen: um die Längsachse (x) zur Seite drehen
  if (ab) {
    const p = rad(ab) * seite
    const ny = y * Math.cos(p)
    const nz = y * Math.sin(p)
    y = ny
    z = nz
  }
  // Aufdrehen: um die Hochachse von vorn zur Seite
  if (yaw) {
    const q = rad(yaw) * seite
    const nx = x * Math.cos(q)
    const nz = z + x * Math.sin(q)
    x = nx
    z = nz
  }
  return [x, y, z]
}
const plus = (p: V3, v: V3, l: number): V3 => [p[0] + v[0] * l, p[1] + v[1] * l, p[2] + v[2] * l]

function gelenke(Q: Pose): Joints {
  const tv: V3 = [Math.sin(rad(Q.t)), -Math.cos(rad(Q.t)), 0]
  const ab = Q.ab ?? 0, fab = Q.fab ?? ab, yaw = Q.yaw ?? 0, lg = Q.lg ?? 0
  const arm = (ua: number, fa: number, s: number) => {
    const u = gliedRichtung(ua, ab, yaw, s), f = gliedRichtung(fa, fab, yaw, s)
    return [u, f] as const
  }
  const bein = (th: number, sh: number, s: number) => [gliedRichtung(th, lg, 0, s), gliedRichtung(sh, lg, 0, s)] as const
  const [bt, bs] = bein(Q.th, Q.sh, 1)
  let hip: V3
  if (Q.foot) hip = [Q.foot[0] - bt[0] * LT - bs[0] * LS, Q.foot[1] - bt[1] * LT - bs[1] * LS, 0]
  else if (Q.knee) hip = [Q.knee[0] - bt[0] * LT, Q.knee[1] - bt[1] * LT, 0]
  else if (Q.wrist) {
    const [u, f] = arm(Q.ua, Q.fa, 1)
    hip = [Q.wrist[0] - u[0] * LU - f[0] * LF - tv[0] * LTO, Q.wrist[1] - u[1] * LU - f[1] * LF - tv[1] * LTO, 0]
  } else if (Q.shoulder) hip = [Q.shoulder[0] - tv[0] * LTO, Q.shoulder[1] - tv[1] * LTO, 0]
  else hip = [Q.x ?? 60, Q.y ?? 48, 0]
  const sy = Q.sy ?? 0
  const sh = plus(hip, tv, LTO + sy)
  const hv: V3 = Q.h ? [Math.sin(rad(Q.t + Q.h)), -Math.cos(rad(Q.t + Q.h)), 0] : tv
  const head = plus(plus(sh, tv, 3 - sy), hv, HR + 1.5)
  const out: Joints = { hip, sh, head, knee: [], ankle: [], toe: [], hipL: [], shL: [], elbow: [], wrist: [] }
  for (const s of [1, -1]) {
    const near = s === 1
    const th = near ? Q.th : Q.th2 ?? Q.th, shn = near ? Q.sh : Q.sh2 ?? Q.sh
    const [t1, t2] = bein(th, shn, s)
    const hl: V3 = [hip[0], hip[1], HIPZ * s]
    const kn = plus(hl, t1, LT), an = plus(kn, t2, LS)
    // Fuß: auf dem Boden flach nach vorn (toe neigt ihn nach unten), sonst quer zum Schienbein
    const flach = !!Q.foot && (near || (Q.th2 == null && Q.sh2 == null))
    const fd: V3 = flach ? [Math.sin(rad(90 - (Q.toe ?? 0))), Math.cos(rad(90 - (Q.toe ?? 0))), 0] : gliedRichtung(shn + 90, 0, 0, s)
    out.hipL.push(hl)
    out.knee.push(kn)
    out.ankle.push(an)
    out.toe.push(plus(an, fd, 7))
    const ua = near ? Q.ua : Q.ua2 ?? Q.ua, fa = near ? Q.fa : Q.fa2 ?? Q.fa
    const [u, f] = arm(ua, fa, s)
    const sl: V3 = [sh[0], sh[1] + 1.5, SHZ * s]
    const el = plus(sl, u, LU), wr = plus(el, f, LF)
    out.shL.push(sl)
    out.elbow.push(el)
    out.wrist.push(wr)
  }
  return out
}

// Fehlt ein Wert in einer Haltung, gilt er dort als neutral: Zusatzwinkel 0, Gegenseite wie die nahe Seite
const NEUTRAL: Record<string, (p: Pose) => number> = {
  ab: () => 0,
  fab: (p) => p.ab ?? 0,
  yaw: () => 0,
  lg: () => 0,
  h: () => 0,
  sy: () => 0,
  toe: () => 0,
  th2: (p) => p.th,
  sh2: (p) => p.sh,
  ua2: (p) => p.ua,
  fa2: (p) => p.fa,
}
function misch(a: Pose, b: Pose, u: number): Pose {
  const o: Record<string, unknown> = {}
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])
  const ra = a as unknown as Record<string, unknown>, rb = b as unknown as Record<string, unknown>
  for (const k of keys) {
    const va = ra[k] ?? NEUTRAL[k]?.(a) ?? rb[k]
    const vb = rb[k] ?? NEUTRAL[k]?.(b) ?? va
    if (Array.isArray(va) && Array.isArray(vb)) o[k] = [va[0] + (vb[0] - va[0]) * u, va[1] + (vb[1] - va[1]) * u]
    else if (typeof va === 'number' && typeof vb === 'number') o[k] = va + (vb - va) * u
    else o[k] = va
  }
  return o as unknown as Pose
}
// Start kurz halten, weich zum Ende, kurz halten, zurück
function verlauf(t: number, dauer: number) {
  const x = (t % dauer) / dauer
  const s = x < 0.1 ? 0 : x < 0.48 ? (x - 0.1) / 0.38 : x < 0.6 ? 1 : x < 0.98 ? 1 - (x - 0.6) / 0.38 : 0
  return (1 - Math.cos(Math.PI * s)) / 2
}

// ---------------------------------------------------------------- Bausteine der Szene
const FARBE = {
  hose: '#2b3446',
  haut: '#f0c7a0',
  schuh: '#eef1f5',
  metall: '#9aa4b0',
  scheibe: '#2e3440',
  scheibeRand: '#e8746f',
  polster: '#3b4458',
  rahmen: '#8d97a5',
  kabel: '#4a5260',
  band: '#e8623c',
  hantel: '#5b6577',
}
const MAT: Record<string, THREE.MeshStandardMaterial> = {}
const mat = (c: string) => (MAT[c] ??= new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: c === FARBE.metall ? 0.35 : 0.05 }))
const ZYL = new THREE.CylinderGeometry(1, 1, 1, 12)
const KUGEL = new THREE.SphereGeometry(1, 16, 12)
const KISTE = new THREE.BoxGeometry(1, 1, 1)

class Glied {
  mesh: THREE.Mesh
  constructor(
    farbe: string,
    readonly r: number,
  ) {
    this.mesh = new THREE.Mesh(ZYL, mat(farbe))
  }
  setze(a: THREE.Vector3, b: THREE.Vector3) {
    const d = b.clone().sub(a)
    const l = Math.max(d.length(), 1e-4)
    this.mesh.position.copy(a).add(b).multiplyScalar(0.5)
    this.mesh.scale.set(this.r, l, this.r)
    this.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())
  }
}
const kugel = (farbe: string, r: number) => {
  const m = new THREE.Mesh(KUGEL, mat(farbe))
  m.scale.setScalar(r)
  return m
}
const kiste = (farbe: string, mitte: V3, gr: V3, drehZ = 0) => {
  const m = new THREE.Mesh(KISTE, mat(farbe))
  m.position.copy(W(mitte))
  m.scale.set(gr[0] / 50, gr[1] / 50, gr[2] / 50)
  m.rotation.z = drehZ
  return m
}
const stange = (farbe: string, a: V3, b: V3, r: number) => {
  const g = new Glied(farbe, r / 50)
  g.setze(W(a), W(b))
  return g.mesh
}

// Feste Geräte
const G = {
  bank(x1: number, x2: number, oben: number): THREE.Object3D[] {
    return [kiste(FARBE.polster, [(x1 + x2) / 2, oben + 2, 0], [x2 - x1, 4, 14]), stange(FARBE.rahmen, [x1 + 4, oben + 4, 0], [x1 + 4, GROUND, 0], 1.6), stange(FARBE.rahmen, [x2 - 4, oben + 4, 0], [x2 - 4, GROUND, 0], 1.6)]
  },
  schraeg(a: V2, b: V2): THREE.Object3D[] {
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2
    const l = Math.hypot(b[0] - a[0], b[1] - a[1])
    const w = Math.atan2(-(b[1] - a[1]), b[0] - a[0])
    return [kiste(FARBE.polster, [mx, my, 0], [l, 4, 14], w), stange(FARBE.rahmen, [mx, my + 2, 0], [mx, GROUND, 0], 1.8), stange(FARBE.rahmen, [a[0] + 3, a[1] + 2, 0], [a[0] + 3, GROUND, 0], 1.6)]
  },
  kasten(x1: number, x2: number, oben: number, unten = GROUND): THREE.Object3D[] {
    return [kiste(FARBE.polster, [(x1 + x2) / 2, (oben + unten) / 2, 0], [x2 - x1, unten - oben, 16])]
  },
  rack(x: number, pin?: number): THREE.Object3D[] {
    const o: THREE.Object3D[] = []
    for (const z of [-28, 28]) {
      o.push(stange(FARBE.rahmen, [x, -8, z], [x, GROUND, z], 1.4))
      if (pin != null) o.push(stange(FARBE.metall, [x - 9, pin, z], [x + 9, pin, z], 1.1))
    }
    return o
  },
  turm(p: V3): THREE.Object3D[] {
    const x = p[0], z = p[2]
    return [stange(FARBE.rahmen, [x, -10, z], [x, GROUND, z], 2.2), kugel(FARBE.kabel, 2.2 / 50).translateX(W(p).x).translateY(W(p).y).translateZ(W(p).z)]
  },
  klimmzug(y: number): THREE.Object3D[] {
    return [stange(FARBE.metall, [62, y, -30], [62, y, 30], 1.1), stange(FARBE.rahmen, [62, y, -30], [62, GROUND, -30], 1.4), stange(FARBE.rahmen, [62, y, 30], [62, GROUND, 30], 1.4)]
  },
  scheiben(x: number, y: number, n = 1): THREE.Object3D[] {
    return Array.from({ length: n }, (_, i) => kiste(FARBE.scheibe, [x, y - 1 - i * 2, 0], [12, 2, 12]))
  },
  wand(x: number): THREE.Object3D[] {
    return [kiste('#d8dee8', [x, 40, 0], [2, 92, 40])]
  },
}

// ---------------------------------------------------------------- Bewegungen
const STAND: Pose = { foot: [60, 86], th: 0, sh: 0, t: 0, ua: 0, fa: 0 }
const SITZ: Pose = { x: 52, y: 64, t: 0, th: 88, sh: 0, ua: 0, fa: 0 }
const LIEGE_BANK: Pose = { x: 62, y: 60, t: -90, th: 75, sh: -10, ua: 180, fa: 180 }
const s = (a: Pose, b: Pose, eq: Eq, rest: Partial<Spec> = {}): Spec => ({ a, b, eq, ...rest })
const mit = (p: Pose, q: Partial<Pose>): Pose => ({ ...p, ...q })

// Hände an der Stange auf dem Rücken bei Oberkörperneigung t
const ruecken = (t: number) => ({ ua: -35 + t, fa: -160 + t })

const KNIEBEUGE_A = mit(STAND, ruecken(0))
const KNIEBEUGE_B: Pose = { foot: [60, 86], th: 85, sh: -32, t: 42, ...ruecken(42) }
const KREUZHEBEN_UNTEN: Pose = { foot: [60, 86], th: 70, sh: -20, t: 64, ua: 2, fa: 2 }
const BANK_PROPS = () => G.bank(18, 70, 61)

const SPECS: Record<string, Spec> = {
  kniebeuge: s(KNIEBEUGE_A, KNIEBEUGE_B, 'bar', { barAt: 'back', props: () => G.rack(40) }),
  pinsquat: s(KNIEBEUGE_B, KNIEBEUGE_A, 'bar', { barAt: 'back', props: (_A, B) => G.rack(40, gelenkeBar(B, 'back')[1] + 9) }),
  boxsquat: s(KNIEBEUGE_A, mit(KNIEBEUGE_B, { th: 80, t: 30, ...ruecken(30) }), 'bar', { barAt: 'back', props: (_A, B) => G.kasten(B.hip[0] - 10, B.hip[0] + 6, B.hip[1] + 6) }),
  frontsquat: s(mit(STAND, { ua: 100, fa: -110 }), { foot: [60, 86], th: 88, sh: -35, t: 22, ua: 108, fa: -100 }, 'bar', { barAt: 'front' }),
  fersen: s(mit(STAND, { foot: [60, 84], ...ruecken(0) }), { foot: [60, 84], th: 90, sh: -42, t: 28, ...ruecken(28) }, 'bar', { barAt: 'back', props: () => G.scheiben(58, 86) }),
  kreuzheben: s(KREUZHEBEN_UNTEN, STAND, 'bar'),
  rackpull: s({ foot: [60, 86], th: 35, sh: -12, t: 48, ua: 2, fa: 2 }, STAND, 'bar', { props: (A) => G.rack(70, gelenkeBar(A, 'hands')[1] + 9) }),
  rdl: s(STAND, { foot: [60, 86], th: 14, sh: -10, t: 74, ua: 2, fa: 2 }, 'bar'),
  goodmorning: s(KNIEBEUGE_A, { foot: [60, 86], th: 12, sh: -12, t: 68, ...ruecken(68) }, 'bar', { barAt: 'back', props: (_A, B) => G.rack(44, gelenkeBar(B, 'back')[1] + 9) }),
  pullthrough: s({ foot: [62, 86], th: 18, sh: -14, t: 70, ua: -14, fa: -14 }, { ...STAND, foot: [62, 86], ua: 8, fa: 8 }, 'rope', { anchor: [6, 80, 0] }),
  bankdruecken: s(LIEGE_BANK, mit(LIEGE_BANK, { ua: 70, fa: 180 }), 'bar', { props: BANK_PROPS }),
  larsen: s(mit(LIEGE_BANK, { th: 95, sh: 95 }), mit(LIEGE_BANK, { th: 95, sh: 95, ua: 70, fa: 180 }), 'bar', { props: BANK_PROPS }),
  pinbench: s(mit(LIEGE_BANK, { ua: 70, fa: 180 }), LIEGE_BANK, 'bar', { props: (A) => [...BANK_PROPS(), ...G.rack(34, gelenkeBar(A, 'hands')[1] + 9)] }),
  schraegdruecken: s({ x: 58, y: 64, t: -58, th: 82, sh: -4, ua: 176, fa: 176 }, { x: 58, y: 64, t: -58, th: 82, sh: -4, ua: 80, fa: 178 }, 'bar', { flex: true, props: (A) => G.schraeg([A.hip[0] + 4, A.hip[1] + 5], [A.sh[0] - 6, A.sh[1] + 4]) }),
  bodendruecken: s({ x: 62, y: 79.5, t: -90, th: 128, sh: -18, ua: 180, fa: 180 }, { x: 62, y: 79.5, t: -90, th: 128, sh: -18, ua: 92, fa: 180 }, 'db'),
  skull: s(mit(LIEGE_BANK, { ua: -168, fa: -168 }), mit(LIEGE_BANK, { ua: -168, fa: -95 }), 'sz', { flex: true, props: BANK_PROPS }),
  flyliegend: s(mit(LIEGE_BANK, { ua: 180, fa: 180 }), mit(LIEGE_BANK, { ua: 180, fa: 180, ab: 72 }), 'db', { props: BANK_PROPS }),
  schulterdruecken: s(mit(STAND, { ua: 30, fa: 176 }), mit(STAND, { ua: 178, fa: 178 }), 'bar'),
  arnold: s(mit(SITZ, { ua: 20, fa: 176 }), mit(SITZ, { ua: 178, fa: 178 }), 'db', { props: () => G.kasten(42, 62, 66) }),
  rudernbrust: s({ foot: [36, 86], th: 22, sh: 6, t: 56, ua: 6, fa: 6 }, { foot: [36, 86], th: 22, sh: 6, t: 56, ua: -58, fa: 2 }, 'db', { flex: true, props: (A) => G.schraeg([A.hip[0] + 4, A.hip[1] + 8], [A.sh[0] + 9, A.sh[1] + 7]) }),
  rudernvertikal: s({ foot: [42, 86], th: 14, sh: 4, t: 26, ua: 40, fa: 40 }, { foot: [42, 86], th: 14, sh: 4, t: 26, ua: -42, fa: -4 }, 'db', { flex: true, props: (A) => G.schraeg([A.hip[0] + 7, A.hip[1] + 4], [A.sh[0] + 8, A.sh[1] + 2]) }),
  helms: s({ foot: [36, 86], th: 22, sh: 6, t: 58, ua: 6, fa: 6 }, { foot: [36, 86], th: 22, sh: 6, t: 58, ua: -50, fa: 4, ab: 30 }, 'db', { props: (A) => G.schraeg([A.hip[0] + 4, A.hip[1] + 8], [A.sh[0] + 9, A.sh[1] + 7]) }),
  einarmrudern: s({ foot: [44, 86], th: 18, sh: -10, th2: -12, sh2: -12, t: 78, ua: 0, fa: 0, ua2: 4, fa2: 4 }, { foot: [44, 86], th: 18, sh: -10, th2: -12, sh2: -12, t: 78, ua: -62, fa: 0, ua2: 4, fa2: 4 }, 'db', { oneArm: true, props: (A) => G.kasten(A.wrist[1][0] - 6, A.wrist[1][0] + 14, A.wrist[1][1] + 1) }),
  rudernvorgebeugt: s({ foot: [58, 86], th: 46, sh: -20, t: 78, ua: 0, fa: 0 }, { foot: [58, 86], th: 46, sh: -20, t: 78, ua: -55, fa: 10 }, 'bar'),
  kabelrudern: s({ x: 40, y: 75, t: 26, th: 78, sh: 70, ua: 86, fa: 86 }, { x: 40, y: 75, t: -6, th: 78, sh: 70, ua: -48, fa: 86 }, 'cable', { anchor: [104, 78, 0], props: () => [...G.kasten(30, 48, 77), ...G.turm([104, 78, 0])] }),
  latzug: s(mit(SITZ, { t: -8, ua: 172, fa: 172 }), mit(SITZ, { t: -12, ua: -12, fa: 168 }), 'latbar', { anchor: [58, -12, 0], props: () => [...G.kasten(42, 62, 66), ...G.turm([46, -12, 0])] }),
  latzugeinarm: s(mit(SITZ, { t: -6, ua: 172, fa: 172, ua2: 0, fa2: 60 }), mit(SITZ, { t: -10, ua: -14, fa: 168, ua2: 0, fa2: 60 }), 'cable', { oneArm: true, anchor: [60, -12, 8], props: () => [...G.kasten(42, 62, 66), ...G.turm([46, -12, 0])] }),
  klimmzug: s({ wrist: [64, 4], t: 4, th: 12, sh: -70, ua: 12, fa: 178 }, { wrist: [64, 4], t: 0, th: 8, sh: -75, ua: 178, fa: 178 }, 'none', { props: () => G.klimmzug(4), dur: 3.4 }),
  beinheben: s({ wrist: [64, -6], t: 0, th: 0, sh: 0, ua: 178, fa: 178 }, { wrist: [64, -6], t: -6, th: 95, sh: 60, ua: 178, fa: 178 }, 'none', { props: () => G.klimmzug(-6) }),
  curl: s(STAND, mit(STAND, { ua: 12, fa: 150 }), 'sz', { flex: true }),
  curlwand: s(mit(STAND, { foot: [62, 86] }), mit(STAND, { foot: [62, 86], ua: 8, fa: 150 }), 'sz', { flex: true, props: () => G.wand(48) }),
  cheatcurl: s(mit(STAND, { t: 6 }), mit(STAND, { t: -10, ua: 16, fa: 150 }), 'db', { dur: 2.4 }),
  kabelcurl: s(STAND, mit(STAND, { ua: 12, fa: 150 }), 'cable', { anchor: [86, 84, 0], props: () => G.turm([86, 84, 0]) }),
  bayesian: s(mit(STAND, { ua: -24, fa: -24, ua2: 0, fa2: 0 }), mit(STAND, { ua: -20, fa: 110, ua2: 0, fa2: 0 }), 'cable', { oneArm: true, anchor: [24, 52, 8], props: () => G.turm([24, 52, 8]) }),
  schraegcurl: s({ x: 56, y: 66, t: -35, th: 86, sh: 0, ua: -6, fa: -6 }, { x: 56, y: 66, t: -35, th: 86, sh: 0, ua: -6, fa: 130 }, 'db', { props: (A) => G.schraeg([A.hip[0] + 4, A.hip[1] + 4], [A.sh[0] - 4, A.sh[1] + 3]) }),
  konzentration: s(mit(SITZ, { t: 34, ua: 18, fa: 18, ua2: 40, fa2: 60 }), mit(SITZ, { t: 34, ua: 18, fa: 160, ua2: 40, fa2: 60 }), 'db', { oneArm: true, props: () => G.kasten(42, 62, 66) }),
  pressdown: s(mit(STAND, { t: 8, ua: 4, fa: 150 }), mit(STAND, { t: 8, ua: 4, fa: 6 }), 'rope', { flex: true, anchor: [80, -12, 0], props: () => G.turm([80, -12, 0]) }),
  ueberkopfkabel: s({ foot: [62, 86], th: 10, sh: -6, th2: -14, sh2: -10, t: 26, ua: 165, fa: -25 }, { foot: [62, 86], th: 10, sh: -6, th2: -14, sh2: -10, t: 26, ua: 165, fa: 165 }, 'rope', { anchor: [14, 70, 0], props: () => G.turm([14, 70, 0]) }),
  ueberkopfeinarm: s(mit(STAND, { ua: 176, fa: -10, ua2: 0, fa2: 0 }), mit(STAND, { ua: 176, fa: 176, ua2: 0, fa2: 0 }), 'db', { oneArm: true }),
  kickback: s({ foot: [56, 86], th: 26, sh: -16, t: 66, ua: -72, fa: 2, ua2: 30, fa2: 30 }, { foot: [56, 86], th: 26, sh: -16, t: 66, ua: -72, fa: -74, ua2: 30, fa2: 30 }, 'cable', { flex: true, oneArm: true, anchor: [96, 82, 6], props: () => G.turm([96, 82, 6]) }),
  seitheben: s(mit(STAND, { ab: 8 }), mit(STAND, { ab: 84 }), 'db', { flex: true }),
  seithebenhalten: s(mit(STAND, { ab: 78 }), mit(STAND, { ab: 86 }), 'db', { dur: 2.2 }),
  egyptian: s(mit(STAND, { ab: 6, ua2: 30, fa2: 60 }), mit(STAND, { ab: 84, ua2: 30, fa2: 60 }), 'cable', { oneArm: true, anchor: [60, 84, -40], props: () => G.turm([60, 84, -40]) }),
  pullapart: s(mit(STAND, { ua: 90, fa: 90, yaw: 4 }), mit(STAND, { ua: 90, fa: 90, yaw: 86 }), 'band'),
  reverseflye: s(mit(STAND, { t: 6, ua: 92, fa: 92, yaw: 8 }), mit(STAND, { t: 6, ua: 92, fa: 92, yaw: 84 }), 'cable', { flex: true, anchors: [[60, 26, -44], [60, 26, 44]], props: () => [...G.turm([60, 26, -44]), ...G.turm([60, 26, 44])] }),
  crossover: s(mit(STAND, { t: 12, ua: 120, fa: 116, yaw: 82 }), mit(STAND, { t: 12, ua: 72, fa: 76, yaw: 10 }), 'cable', { anchors: [[60, -8, 44], [60, -8, -44]], props: () => [...G.turm([60, -8, 44]), ...G.turm([60, -8, -44])] }),
  facepull: s(mit(SITZ, { ua: 94, fa: 94 }), mit(SITZ, { ua: 94, fa: 172, yaw: 72 }), 'rope', { anchor: [104, 16, 0], props: () => [...G.kasten(42, 62, 66), ...G.turm([104, 16, 0])] }),
  wallslide: s(mit(STAND, { foot: [62, 86], ua: 2, fa: 178, ab: 84, fab: 8 }), mit(STAND, { foot: [62, 86], ua: 2, fa: 178, ab: 150, fab: 160 }), 'none', { props: () => G.wand(46) }),
  traprise: s({ foot: [36, 86], th: 22, sh: 6, t: 56, ua: 10, fa: 10 }, { foot: [36, 86], th: 22, sh: 6, t: 56, ua: 150, fa: 150, ab: 28 }, 'db', { props: (A) => G.schraeg([A.hip[0] + 4, A.hip[1] + 8], [A.sh[0] + 9, A.sh[1] + 7]) }),
  shrug: s(mit(STAND, { ua: 0, fa: 0 }), mit(STAND, { sy: 5, ua: 0, fa: 0 }), 'db', { flex: true, dur: 2.2 }),
  shrugschraeg: s({ foot: [36, 86], th: 22, sh: 6, t: 56, ua: 4, fa: 4 }, { foot: [36, 86], th: 22, sh: 6, t: 56, ua: 4, fa: 4, sy: 5 }, 'db', { props: (A) => G.schraeg([A.hip[0] + 4, A.hip[1] + 8], [A.sh[0] + 9, A.sh[1] + 7]) }),
  shrugin: s(mit(STAND, { ab: 10 }), mit(STAND, { ab: 18, sy: 5 }), 'cable', { anchors: [[60, 84, 40], [60, 84, -40]], props: () => [...G.turm([60, 84, 40]), ...G.turm([60, 84, -40])] }),
  plateshrug: s(mit(STAND, { ua: 8, fa: 30 }), mit(STAND, { ua: 8, fa: 30, sy: 5 }), 'plate'),
  wade: s(mit(STAND, { foot: [58, 80] }), mit(STAND, { foot: [58, 73], toe: 38 }), 'db', { flex: true, props: () => G.kasten(54, 76, 80) }),
  wadeeinbeinig: s(mit(STAND, { foot: [58, 80], th2: -6, sh2: -70, ua2: 60, fa2: 70 }), mit(STAND, { foot: [58, 73], toe: 38, th2: -6, sh2: -70, ua2: 60, fa2: 70 }), 'db', { oneArm: true, props: () => G.kasten(54, 76, 80) }),
  ausfallschritt: s(STAND, { foot: [70, 86], th: 82, sh: -12, th2: -26, sh2: -84, t: 4, ua: 0, fa: 0 }, 'db'),
  bulgarisch: s({ foot: [70, 86], th: 26, sh: -6, th2: -16, sh2: -98, t: 4, ua: 0, fa: 0 }, { foot: [70, 86], th: 84, sh: -18, th2: -42, sh2: -112, t: 10, ua: 0, fa: 0 }, 'db', { props: (A) => G.kasten(A.ankle[1][0] - 14, A.ankle[1][0] + 4, A.ankle[1][1] + 2) }),
  sissy: s(mit(STAND, { ua: 70, fa: 70 }), { foot: [60, 86], th: 60, sh: -65, t: -44, toe: 30, ua: 80, fa: 80 }, 'none', { props: () => G.rack(88) }),
  nordic: s({ knee: [62, 82], th: 0, sh: -90, t: 0, ua: 30, fa: 60 }, { knee: [62, 82], th: -62, sh: -90, t: 62, ua: 110, fa: 120 }, 'none', { props: () => [...G.kasten(30, 74, 82), ...G.rack(36)], dur: 3.4 }),
  rueckenstrecken: s({ x: 58, y: 52, t: 150, th: -90, sh: -90, ua: 70, fa: -40 }, { x: 58, y: 52, t: 88, th: -90, sh: -90, ua: 132, fa: 22 }, 'none', { props: () => G.bank(14, 62, 54) }),
  hipthrust: s({ shoulder: [34, 59], t: -55, th: 110, sh: 0, th2: 150, sh2: 120, ua: -100, fa: -100 }, { shoulder: [34, 59], t: -90, th: 80, sh: -15, th2: 160, sh2: 150, ua: -100, fa: -100 }, 'none', { props: () => G.kasten(8, 36, 61) }),
  beincurl: s({ x: 52, y: 78, t: -107, th: 78, sh: 80, ua: 86, fa: 92 }, { x: 52, y: 70, t: -127, th: 105, sh: -15, ua: 70, fa: 96 }, 'none'),
  beincurleinbeinig: s({ x: 52, y: 78, t: -107, th: 78, sh: 80, th2: 150, sh2: 150, ua: 86, fa: 92 }, { x: 52, y: 70, t: -127, th: 105, sh: -15, th2: 150, sh2: 150, ua: 70, fa: 96 }, 'none'),
  beinhebenbank: s({ x: 56, y: 59, t: -90, th: 96, sh: 96, ua: -70, fa: -30 }, { x: 56, y: 59, t: -90, th: 174, sh: 174, ua: -70, fa: -30 }, 'none', { props: () => G.bank(14, 64, 62) }),
  hollow: s({ x: 60, y: 80, t: -80, th: 96, sh: 96, ua: -74, fa: -74 }, { x: 60, y: 80, t: -83, th: 99, sh: 99, ua: -78, fa: -78 }, 'none', { dur: 2.6 }),
  plank: s({ x: 60, y: 78, t: 80, th: -80, sh: -80, ua: 24, fa: 92 }, { x: 60, y: 77, t: 81, th: -81, sh: -81, ua: 26, fa: 92 }, 'none', { dur: 2.6 }),
  crunch: s({ x: 58, y: 80, t: -90, th: 135, sh: 10, ua: 150, fa: -100 }, { x: 58, y: 80, t: -55, th: 135, sh: 10, ua: 172, fa: -70 }, 'plate'),
  kabelcrunch: s({ knee: [56, 84], th: 0, sh: -90, t: 15, ua: 185, fa: 65 }, { knee: [56, 84], th: 0, sh: -90, t: 70, ua: 130, fa: 10, h: 20 }, 'rope', { anchor: [96, -12, 0], props: () => G.turm([96, -12, 0]) }),
  nacken: s(mit(STAND, { h: -24 }), mit(STAND, { h: 30 }), 'none', { dur: 2.6 }),
  halten: s(mit(STAND, { ua: 2, fa: 2 }), mit(STAND, { ua: 0, fa: 0, sy: 2 }), 'db', { dur: 2.4 }),
  liegestuetz: s({ foot: [24, 86], th: -70, sh: -70, t: 70, ua: 0, fa: 0 }, { foot: [24, 86], th: -82, sh: -82, t: 82, ua: -60, fa: 30 }, 'none', { props: (A) => G.scheiben(A.wrist[0][0], 86, 2) }),
  pullover: s({ knee: [52, 84], th: 0, sh: -90, t: 24, ua: 150, fa: 150 }, { knee: [52, 84], th: 0, sh: -90, t: 24, ua: 14, fa: 14 }, 'rope', { anchor: [100, -12, 0], props: () => G.turm([100, -12, 0]) }),
  pulloverstand: s({ foot: [56, 86], th: 14, sh: -10, t: 30, ua: 150, fa: 150 }, { foot: [56, 86], th: 14, sh: -10, t: 30, ua: 10, fa: 10 }, 'rope', { anchor: [104, -12, 0], props: () => G.turm([104, -12, 0]) }),
  abduktion: s(mit(STAND, { lg: 3 }), mit(STAND, { lg: 16 }), 'band'),
  stehen: s(STAND, mit(STAND, { sy: 1.5 }), 'none', { dur: 3 }),
}

// Hantelstange: Lage abhängig von Ort (Rücken, vorn, Hände)
function gelenkeBar(J: Joints, wo: 'back' | 'front' | 'hands'): V3 {
  if (wo === 'back') return [J.sh[0] - 4, J.sh[1] + 1, 0]
  if (wo === 'front') return [J.sh[0] + 5, J.sh[1] - 1, 0]
  return [(J.wrist[0][0] + J.wrist[1][0]) / 2, (J.wrist[0][1] + J.wrist[1][1]) / 2, 0]
}

// ---------------------------------------------------------------- Zuordnung Übung -> Bewegung
const REGELN: [RegExp, string][] = [
  [/fersenerh/i, 'fersen'],
  [/^back squat|kniebeuge$/i, 'kniebeuge'],
  [/pin squat|anderson/i, 'pinsquat'],
  [/box squat/i, 'boxsquat'],
  [/front squat/i, 'frontsquat'],
  [/sissy/i, 'sissy'],
  [/bulgarian/i, 'bulgarisch'],
  [/lunge|ausfall/i, 'ausfallschritt'],
  [/rdl|stiff/i, 'rdl'],
  [/rack pull/i, 'rackpull'],
  [/good morning/i, 'goodmorning'],
  [/pull-through/i, 'pullthrough'],
  [/deadlift/i, 'kreuzheben'],
  [/nordic/i, 'nordic'],
  [/rückenstrecken|back extension/i, 'rueckenstrecken'],
  [/hip thrust/i, 'hipthrust'],
  [/sliding leg curl einbeinig/i, 'beincurleinbeinig'],
  [/leg curl/i, 'beincurl'],
  [/hip abduction|abduktion/i, 'abduktion'],
  [/unilateral.*calf|einbeinig.*wade/i, 'wadeeinbeinig'],
  [/calf|wade/i, 'wade'],
  [/larsen/i, 'larsen'],
  [/pin bench/i, 'pinbench'],
  [/incline (bench|press)|pause db incline|schräg.*drück/i, 'schraegdruecken'],
  [/floor press/i, 'bodendruecken'],
  [/skull/i, 'skull'],
  [/bench press/i, 'bankdruecken'],
  [/deficit push|push-up|liegestütz/i, 'liegestuetz'],
  [/arnold/i, 'arnold'],
  [/overhead press|schulterdrück/i, 'schulterdruecken'],
  [/pull-up|klimmzug/i, 'klimmzug'],
  [/hanging leg raise|l-sit/i, 'beinheben'],
  [/single-arm pulldown/i, 'latzugeinarm'],
  [/latzug|pulldown/i, 'latzug'],
  [/vertical chest-supported/i, 'rudernvertikal'],
  [/helms/i, 'helms'],
  [/chest-supported row/i, 'rudernbrust'],
  [/one-arm row|einarmiges kh-rudern/i, 'einarmrudern'],
  [/pendlay|bent over/i, 'rudernvorgebeugt'],
  [/seated cable row|kabelrudern/i, 'kabelrudern'],
  [/face pull/i, 'facepull'],
  [/pull-apart/i, 'pullapart'],
  [/reverse flye/i, 'reverseflye'],
  [/crossover/i, 'crossover'],
  [/pec flye/i, 'flyliegend'],
  [/egyptian/i, 'egyptian'],
  [/iso-hold/i, 'seithebenhalten'],
  [/lateral raise/i, 'seitheben'],
  [/wall slide/i, 'wallslide'],
  [/prone trap/i, 'traprise'],
  [/incline db shrug/i, 'shrugschraeg'],
  [/plate shrug/i, 'plateshrug'],
  [/shrug-in/i, 'shrugin'],
  [/shrug/i, 'shrug'],
  [/bayesian/i, 'bayesian'],
  [/incline db curl/i, 'schraegcurl'],
  [/concentration/i, 'konzentration'],
  [/cheat/i, 'cheatcurl'],
  [/cable curl/i, 'kabelcurl'],
  [/strict curl/i, 'curlwand'],
  [/curl/i, 'curl'],
  [/pressdown/i, 'pressdown'],
  [/rope overhead|overhead triceps ext/i, 'ueberkopfkabel'],
  [/überkopf|overhead.*(db|kh)/i, 'ueberkopfeinarm'],
  [/kickback/i, 'kickback'],
  [/cable crunch/i, 'kabelcrunch'],
  [/crunch/i, 'crunch'],
  [/beinheben/i, 'beinhebenbank'],
  [/hollow/i, 'hollow'],
  [/plank/i, 'plank'],
  [/nacken/i, 'nacken'],
  [/isometrisch|griffkraft/i, 'halten'],
  [/kneeling pullover/i, 'pullover'],
  [/pullover/i, 'pulloverstand'],
]
const NAME_EQ: [RegExp, Eq][] = [
  [/\b(kh|db|dumbbell|hammer|zottman|pinch)\b|kh-|db /i, 'db'],
  [/\bsz\b|sz-|ez/i, 'sz'],
  [/kabel|cable/i, 'cable'],
  [/band/i, 'band'],
  [/barbell|\blh\b/i, 'bar'],
]
const GERAET_EQ: Record<string, Eq> = { kurzhantel: 'db', olympiastange: 'bar', footballbar: 'bar', szstange: 'sz', kabelturm: 'cable', band_kurz: 'band', band_lang: 'band', koerpergewicht: 'none' }

export function specFuer(name: string): string {
  const n = name.replace(/^[A-Z]\d+:\s*/, '')
  for (const [re, k] of REGELN) if (re.test(n)) return k
  return 'stehen'
}

/** Name, unter dem eine Übung eine eigene Figur hat (Name oder Zweitname), oder null, wenn es keine gibt. */
export function figurName(namen: string[]): string | null {
  for (const n of namen) {
    const r = n.replace(/^[A-Z]\d+:\s*/, '')
    if (REGELN.some(([re]) => re.test(r))) return n
  }
  return null
}
function ausruestung(spec: Spec, name: string, geraet: string): Eq {
  if (!spec.flex) return spec.eq
  if (geraet && GERAET_EQ[geraet]) return GERAET_EQ[geraet]
  for (const [re, e] of NAME_EQ) if (re.test(name)) return e
  return spec.eq
}

// ---------------------------------------------------------------- Figur mit Gerät
class Szene {
  gruppe = new THREE.Group()
  private glieder: Record<string, Glied> = {}
  private kugeln: Record<string, THREE.Mesh> = {}
  private torso: THREE.Mesh
  private kopf: THREE.Mesh
  private dynamisch: THREE.Object3D[] = []
  private A: Joints
  private B: Joints
  constructor(
    readonly spec: Spec,
    readonly eq: Eq,
    koerper: string,
  ) {
    this.A = gelenke(spec.a)
    this.B = gelenke(spec.b)
    this.torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.32, 4, 12), mat(koerper))
    // Ärmel einen Hauch dunkler, damit die Arme vor dem Rumpf lesbar bleiben
    const aermel = '#' + new THREE.Color(koerper).offsetHSL(0, 0, -0.09).getHexString()
    this.kopf = kugel(FARBE.haut, 0.12)
    this.gruppe.add(this.torso, this.kopf)
    const g = (k: string, f: string, r: number) => {
      this.glieder[k] = new Glied(f, r)
      this.gruppe.add(this.glieder[k].mesh)
    }
    const k = (n: string, f: string, r: number) => {
      this.kugeln[n] = kugel(f, r)
      this.gruppe.add(this.kugeln[n])
    }
    for (const i of [0, 1]) {
      g('ob' + i, FARBE.hose, 0.075)
      g('un' + i, FARBE.hose, 0.062)
      k('knie' + i, FARBE.hose, 0.068)
      g('fuss' + i, FARBE.schuh, 0.05)
      g('oa' + i, aermel, 0.055)
      g('ua' + i, aermel, 0.048)
      k('ell' + i, aermel, 0.052)
      k('hand' + i, FARBE.haut, 0.05)
    }
    if (spec.props) for (const o of spec.props(this.A, this.B)) this.gruppe.add(o)
    // Anker der Kabel als Rolle
    // Weicher Schatten wie bei den Shop-Bildern
    const schatten = new THREE.Mesh(new THREE.CircleGeometry(0.55, 32), new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.14, depthWrite: false }))
    schatten.rotation.x = -Math.PI / 2
    schatten.position.y = 0.002
    schatten.scale.set(1.3, 0.6, 1)
    schatten.name = 'schatten'
    this.gruppe.add(schatten)
  }

  /** Ausschnitt in Kamerakoordinaten, der Start- und Umkehrhaltung samt Geräten fasst */
  private rahmenCache?: { x0: number; x1: number; y0: number; y1: number }
  rahmen(kam: THREE.Camera) {
    if (this.rahmenCache) return this.rahmenCache
    const r = { x0: Infinity, x1: -Infinity, y0: Infinity, y1: -Infinity }
    kam.updateMatrixWorld()
    const sicht = kam.matrixWorldInverse
    const box = new THREE.Box3()
    const p = new THREE.Vector3()
    for (const u of [0, 0.5, 1]) {
      this.stelle(u)
      this.gruppe.updateMatrixWorld(true)
      for (const o of this.gruppe.children) {
        if (o.name === 'schatten') continue
        box.setFromObject(o)
        for (let i = 0; i < 8; i++) {
          p.set(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z).applyMatrix4(sicht)
          r.x0 = Math.min(r.x0, p.x)
          r.x1 = Math.max(r.x1, p.x)
          r.y0 = Math.min(r.y0, p.y)
          r.y1 = Math.max(r.y1, p.y)
        }
      }
    }
    // Der Schatten soll auf dem Boden noch zu sehen sein
    r.y0 -= 0.08
    return (this.rahmenCache = r)
  }

  stelle(u: number) {
    const J = gelenke(misch(this.spec.a, this.spec.b, u))
    const hip = W(J.hip), sh = W(J.sh)
    const d = sh.clone().sub(hip)
    this.torso.position.copy(hip).addScaledVector(d, 0.5)
    this.torso.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize())
    this.torso.scale.set(1, d.length() / 0.5, 1)
    this.kopf.position.copy(W(J.head))
    for (const i of [0, 1]) {
      const hl = W(J.hipL[i]), kn = W(J.knee[i]), an = W(J.ankle[i]), to = W(J.toe[i])
      this.glieder['ob' + i].setze(hl, kn)
      this.glieder['un' + i].setze(kn, an)
      this.kugeln['knie' + i].position.copy(kn)
      this.glieder['fuss' + i].setze(an, to)
      const sl = W(J.shL[i]), el = W(J.elbow[i]), wr = W(J.wrist[i])
      this.glieder['oa' + i].setze(sl, el)
      this.glieder['ua' + i].setze(el, wr)
      this.kugeln['ell' + i].position.copy(el)
      this.kugeln['hand' + i].position.copy(wr)
    }
    // Bewegliche Geräte neu setzen
    for (const o of this.dynamisch) this.gruppe.remove(o)
    this.dynamisch = this.geraete(J)
    for (const o of this.dynamisch) this.gruppe.add(o)
  }

  private geraete(J: Joints): THREE.Object3D[] {
    const o: THREE.Object3D[] = []
    const eq = this.eq, spec = this.spec
    const lang = (mitte: V3, halb: number, rS: number, scheibeR: number, n = 2) => {
      o.push(stange(FARBE.metall, [mitte[0], mitte[1], -halb], [mitte[0], mitte[1], halb], rS))
      for (const z of [-1, 1]) {
        for (let i = 0; i < n; i++) o.push(stange(i === 0 ? FARBE.scheibeRand : FARBE.scheibe, [mitte[0], mitte[1], z * (halb - 8 - i * 2.4)], [mitte[0], mitte[1], z * (halb - 10.2 - i * 2.4)], scheibeR - i * 1.2))
      }
    }
    if (eq === 'bar' || eq === 'sz') {
      const wo = spec.barAt ?? 'hands'
      const m = gelenkeBar(J, wo)
      if (eq === 'bar') lang(m, 46, 0.9, 9)
      else lang(m, 26, 0.8, 5.5, 1)
    } else if (eq === 'latbar') {
      const m = gelenkeBar(J, 'hands')
      o.push(stange(FARBE.metall, [m[0], m[1], -24], [m[0], m[1], 24], 0.8))
      if (spec.anchor) o.push(stange(FARBE.kabel, spec.anchor, m, 0.35))
    } else if (eq === 'db') {
      for (const i of spec.oneArm ? [0] : [0, 1]) {
        const w = J.wrist[i]
        o.push(stange(FARBE.metall, [w[0], w[1], w[2] - 4.5], [w[0], w[1], w[2] + 4.5], 0.7))
        for (const z of [-1, 1]) o.push(stange(FARBE.hantel, [w[0], w[1], w[2] + z * 3], [w[0], w[1], w[2] + z * 7], 4.2))
      }
    } else if (eq === 'plate') {
      const m = gelenkeBar(J, 'hands')
      o.push(stange(FARBE.scheibe, [m[0] - 1, m[1], 0], [m[0] + 1.6, m[1], 0], 8))
    } else if (eq === 'cable' || eq === 'rope' || eq === 'band') {
      const farbe = eq === 'band' ? FARBE.band : FARBE.kabel
      const r = eq === 'band' ? 0.7 : 0.35
      if (eq === 'band' && !spec.anchor && !spec.anchors) {
        if (spec.b.lg != null) o.push(stange(FARBE.band, [J.knee[0][0], J.knee[0][1], J.knee[0][2]], [J.knee[1][0], J.knee[1][1], J.knee[1][2]], 0.9))
        else o.push(stange(farbe, J.wrist[0], J.wrist[1], r))
      } else if (spec.anchors) {
        o.push(stange(farbe, spec.anchors[0], J.wrist[0], r), stange(farbe, spec.anchors[1], J.wrist[1], r))
      } else if (spec.anchor) {
        const ziel: V3 = spec.oneArm ? J.wrist[0] : eq === 'rope' ? [(J.wrist[0][0] + J.wrist[1][0]) / 2, (J.wrist[0][1] + J.wrist[1][1]) / 2, 0] : J.wrist[0]
        o.push(stange(farbe, spec.anchor, ziel, r))
        if (!spec.oneArm && eq === 'cable') o.push(stange(farbe, spec.anchor, J.wrist[1], r))
      }
    }
    return o
  }
}

// Kachelfarbe je Muskelgruppe, im Ton der Shop-Kacheln
const KACHEL: Record<string, [string, string]> = {
  beine: ['#e3f4ea', '#73c08f'],
  huefte: ['#ffe3d6', '#f3a37c'],
  druecken: ['#ffd9d9', '#e8746f'],
  ziehen: ['#e1e9ff', '#7f9be8'],
  schulter: ['#dff6f1', '#5cc4ad'],
  arme: ['#ede4ff', '#a68ae6'],
  rumpf: ['#fff1c9', '#f0b94a'],
}
const GRUPPE: Record<string, string[]> = {
  beine: ['kniebeuge', 'pinsquat', 'boxsquat', 'frontsquat', 'fersen', 'ausfallschritt', 'bulgarisch', 'sissy', 'wade', 'wadeeinbeinig', 'abduktion'],
  huefte: ['kreuzheben', 'rackpull', 'rdl', 'goodmorning', 'pullthrough', 'nordic', 'rueckenstrecken', 'hipthrust', 'beincurl', 'beincurleinbeinig'],
  druecken: ['bankdruecken', 'larsen', 'pinbench', 'schraegdruecken', 'bodendruecken', 'flyliegend', 'crossover', 'liegestuetz'],
  ziehen: ['rudernbrust', 'rudernvertikal', 'helms', 'einarmrudern', 'rudernvorgebeugt', 'kabelrudern', 'latzug', 'latzugeinarm', 'klimmzug', 'pullover', 'pulloverstand'],
  schulter: ['schulterdruecken', 'arnold', 'seitheben', 'seithebenhalten', 'egyptian', 'pullapart', 'reverseflye', 'facepull', 'wallslide', 'traprise', 'shrug', 'shrugschraeg', 'shrugin', 'plateshrug', 'nacken'],
  arme: ['curl', 'curlwand', 'cheatcurl', 'kabelcurl', 'bayesian', 'schraegcurl', 'konzentration', 'pressdown', 'ueberkopfkabel', 'ueberkopfeinarm', 'kickback', 'skull', 'halten'],
  rumpf: ['beinheben', 'beinhebenbank', 'hollow', 'plank', 'crunch', 'kabelcrunch', 'stehen'],
}
const kachelFuer = (specKey: string): [string, string] => {
  for (const g in GRUPPE) if (GRUPPE[g].includes(specKey)) return KACHEL[g]
  return ['#e2f3ff', '#6cb1e6']
}

// ---------------------------------------------------------------- Studio: ein Renderer für alle Canvas
let renderer: THREE.WebGLRenderer | null = null
const welt = new THREE.Scene()
const kamera = new THREE.OrthographicCamera(-1.6, 1.6, 1.2, -1.2, 0.1, 50)
function studio() {
  if (renderer) return renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(1)
  renderer.setClearColor(0x000000, 0)
  welt.add(new THREE.AmbientLight('#ffffff', 0.95))
  welt.add(new THREE.HemisphereLight('#ffffff', '#b9a68f', 0.6))
  const sonne = new THREE.DirectionalLight('#ffffff', 1.9)
  sonne.position.set(3, 8, 6)
  welt.add(sonne)
  const gegen = new THREE.DirectionalLight('#cfe0ff', 0.6)
  gegen.position.set(-5, 3, -4)
  welt.add(gegen)
  // Schräg von vorn oben wie die Shop-Bilder, seitlich genug, um die Bewegung zu sehen; die Hantelscheiben
  // liegen so links und rechts neben der Figur statt vor ihrem Gesicht
  kamera.position.set(2.25, 1.95, 2.9)
  kamera.lookAt(0.05, 0.92, 0)
  return renderer
}

interface Eintrag {
  canvas: HTMLCanvasElement
  key: string
  sichtbar: boolean
  start: number
  still: boolean
  io?: IntersectionObserver
}
const eintraege: Eintrag[] = []
const szenen = new Map<string, Szene>()
let laeuft = false
let zuletzt = 0

function szeneFuer(key: string): Szene {
  let sz = szenen.get(key)
  if (!sz) {
    const [specKey, eq, koerper] = key.split('|')
    sz = new Szene(SPECS[specKey], eq as Eq, koerper)
    szenen.set(key, sz)
  }
  return sz
}
// Kamera auf die Szene ausrichten: Seitenverhältnis der Canvas, kleine Bilder enger
function rahme(sz: Szene, seiten: number, luft: number) {
  const r = sz.rahmen(kamera)
  const cx = (r.x0 + r.x1) / 2, cy = (r.y0 + r.y1) / 2
  let h = Math.max(r.y1 - r.y0, (r.x1 - r.x0) / seiten) * luft
  h = Math.max(h, 1.4)
  kamera.left = cx - (h * seiten) / 2
  kamera.right = cx + (h * seiten) / 2
  kamera.top = cy + h / 2
  kamera.bottom = cy - h / 2
  kamera.updateProjectionMatrix()
}
function zeichne(e: Eintrag, zeit: number) {
  const r = studio()
  const { width, height } = e.canvas
  const groesse = r.getSize(new THREE.Vector2())
  if (groesse.x !== width || groesse.y !== height) r.setSize(width, height, false)
  const sz = szeneFuer(e.key)
  rahme(sz, width / height, width < 200 ? 1.06 : 1.45)
  const dauer = sz.spec.dur ?? 3
  sz.stelle(e.still ? 0.55 : verlauf(zeit - e.start, dauer))
  welt.add(sz.gruppe)
  r.render(welt, kamera)
  welt.remove(sz.gruppe)
  const ctx = e.canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, e.canvas.width, e.canvas.height)
  ctx.drawImage(r.domElement, 0, 0, e.canvas.width, e.canvas.height)
}
function schleife(ms: number) {
  for (let i = eintraege.length - 1; i >= 0; i--)
    if (!eintraege[i].canvas.isConnected) {
      eintraege[i].io?.disconnect()
      eintraege.splice(i, 1)
    }
  if (!eintraege.length) {
    laeuft = false
    return
  }
  if (ms - zuletzt > 40) {
    zuletzt = ms
    const t = ms / 1000
    // nach Größe sortiert, damit der Renderer seine Fläche selten wechseln muss
    const dran = eintraege.filter((e) => e.sichtbar && !e.still).sort((a, b) => a.canvas.width - b.canvas.width)
    for (const e of dran) zeichne(e, t)
  }
  requestAnimationFrame(schleife)
}

/**
 * Meldet eine Canvas aus dem Kraftbuch an. Sie zeigt die Übung als Animation, solange sie im Bild ist;
 * bei "Bewegung reduzieren" ein Standbild. Abmelden passiert von selbst, sobald die Canvas aus dem Dokument fällt.
 */
export function zeige(canvas: HTMLCanvasElement, uebung: string, geraet = '', farbe = '#2f6fe4'): [string, string] {
  const specKey = specFuer(uebung)
  const spec = SPECS[specKey]
  const key = [specKey, ausruestung(spec, uebung, geraet), farbe].join('|')
  const fenster = canvas.ownerDocument.defaultView ?? window
  const still = !!fenster.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const e: Eintrag = { canvas, key, sichtbar: true, start: performance.now() / 1000 - Math.random() * 0.8, still }
  eintraege.push(e)
  zeichne(e, performance.now() / 1000)
  if ('IntersectionObserver' in fenster) {
    e.io = new fenster.IntersectionObserver((es) => {
      for (const x of es) e.sichtbar = x.isIntersecting
    })
    e.io.observe(canvas)
  }
  if (!laeuft) {
    laeuft = true
    requestAnimationFrame(schleife)
  }
  return kachelFuer(specKey)
}

/** Für Tests: alle Bewegungen und ihre Zuordnung. */
export const _intern = {
  SPECS,
  GRUPPE,
  specFuer,
  gelenke,
  misch,
  /** Standbild an Stelle u (0 = Start, 1 = Umkehrpunkt) */
  standbild(canvas: HTMLCanvasElement, uebung: string, u: number, geraet = '') {
    const specKey = specFuer(uebung)
    const e: Eintrag = { canvas, key: [specKey, ausruestung(SPECS[specKey], uebung, geraet), '#2f6fe4'].join('|'), sichtbar: true, start: 0, still: true }
    const sz = szeneFuer(e.key)
    const r = studio()
    r.setSize(canvas.width, canvas.height, false)
    rahme(sz, canvas.width / canvas.height, canvas.width < 200 ? 1.06 : 1.45)
    sz.stelle(u)
    welt.add(sz.gruppe)
    r.render(welt, kamera)
    welt.remove(sz.gruppe)
    canvas.getContext('2d')?.drawImage(r.domElement, 0, 0)
    return kachelFuer(specKey)
  },
}
