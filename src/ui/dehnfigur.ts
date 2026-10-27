// Dehnfigur: eine Frau mit Gelenkskelett (Wirbelsäule in Abschnitten, Hals, Schulterblatt, Schulter, Ellbogen,
// Unterarm, Handgelenk, Hüfte, Knie, Sprunggelenk, Zehen), gerendert mit Three.js. Sie turnt Dehnungen und
// Beweglichkeitstests im echten Tempo vor. Kleidung: Sport-Bustier und kurze Radlerhose in Espresso, weiße Socken,
// helle Laufschuhe, damit Hüfte, Knie, Schultern und Rücken gut zu sehen sind.
//
// Achsen: Die Figur blickt nach +z, links ist +x, oben +y. Einheiten in Metern, Körpergröße etwa 1,68 m.
// Wird erst geladen, wenn eine Dehnfigur sichtbar wird (eigener Teil des Bundles).

import * as THREE from "three"
import { clone as skelettKlon } from "three/examples/jsm/utils/SkeletonUtils.js"
import { standZu, type Dehnung, type Haltung, type Hilfsmittel, type Punkt, type Stand } from "../logik/dehnbewegung"
import { Modellfigur } from "./modellfigur"

/** Geriggtes Modell, das statt der gezeichneten Figur gezeigt wird (falls geladen). */
let vorlage: THREE.Object3D | null = null
export function modellSetzen(m: THREE.Object3D | null) {
  vorlage = m
}

const FARBE = {
  haut: "#d6a07c",
  hautDunkel: "#c58d6a",
  stoff: "#5a362a",
  stoffHell: "#5a372b",
  socke: "#f4f4f2",
  schuh: "#e7e8ec",
  sohle: "#c9ccd3",
  haar: "#3a2318",
  auge: "#2b1c16",
  matte: "#8fa0b0",
  holz: "#b08a63",
  polster: "#3b4458",
  metall: "#a3acb8",
  wand: "#e4e8ee",
  band: "#e8623c",
  rolle: "#3d6fd6",
  ball: "#6fb3e8",
}

const MAT = new Map<string, THREE.MeshStandardMaterial>()
const mat = (farbe: string, rau = farbe === FARBE.haut || farbe === FARBE.hautDunkel ? 0.5 : 0.75) => {
  const k = farbe + rau
  let m = MAT.get(k)
  if (!m) MAT.set(k, (m = new THREE.MeshStandardMaterial({ color: farbe, roughness: rau, metalness: 0 })))
  return m
}

/**
 * Drehkörper entlang -y: Profil als [Abstand vom Gelenk nach unten, Radius]. Beide Enden sind abgerundet, damit
 * Gelenke ohne sichtbare Kugeln ineinander übergehen.
 */
function glied(profil: [number, number][], farbe: string, tiefe = 1, segmente = 20): THREE.Mesh {
  const [y0, r0] = profil[0]
  const [y1, r1] = profil[profil.length - 1]
  const kappe = (y: number, r: number, richtung: number) => [4, 3, 2, 1].map((i) => [y + richtung * r * Math.cos((i * Math.PI) / 10), r * Math.sin((i * Math.PI) / 10)] as [number, number])
  const voll = [...kappe(y0, r0, -1), ...profil, ...kappe(y1, r1, 1).reverse()]
  const punkte = [new THREE.Vector2(0.0005, -(y0 - r0)), ...voll.map(([y, r]) => new THREE.Vector2(Math.max(0.0005, r), -y)), new THREE.Vector2(0.0005, -(y1 + r1))]
  const geo = new THREE.LatheGeometry(punkte, segmente)
  const m = new THREE.Mesh(geo, mat(farbe))
  m.scale.z = tiefe
  m.castShadow = true
  return m
}

/** Rumpfteil entlang +y. */
function rumpf(profil: [number, number][], farbe: string, tiefe: number, breite = 1): THREE.Mesh {
  const punkte = profil.map(([y, r]) => new THREE.Vector2(Math.max(0.0005, r), y))
  const m = new THREE.Mesh(new THREE.LatheGeometry(punkte, 28), mat(farbe))
  m.scale.set(breite, 1, tiefe)
  m.castShadow = true
  return m
}

function kugel(r: number, farbe: string, pos: [number, number, number] = [0, 0, 0], skala: [number, number, number] = [1, 1, 1]): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), mat(farbe))
  m.position.set(...pos)
  m.scale.set(...skala)
  m.castShadow = true
  return m
}

function kapsel(r: number, laenge: number, farbe: string, pos: [number, number, number], dreh: [number, number, number] = [0, 0, 0], skala: [number, number, number] = [1, 1, 1]): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, laenge, 8, 16), mat(farbe))
  m.position.set(...pos)
  m.rotation.set(...dreh)
  m.scale.set(...skala)
  m.castShadow = true
  return m
}

const rad = (g: number) => (g * Math.PI) / 180

type Seite = "l" | "r"

/** Der Körper: Knochen als Gruppen, Formen hängen an den Knochen. */
class Koerper {
  wurzel = new THREE.Group()
  becken = new THREE.Group()
  k: Record<string, THREE.Group> = {}
  /** Körperpunkte für Boden und Hilfsmittel */
  marken: Record<string, THREE.Object3D> = {}
  /** Stichproben der Oberfläche je Form, für den tiefsten Punkt */
  proben: { mesh: THREE.Mesh; punkte: THREE.Vector3[] }[] = []
  brustkorb!: THREE.Mesh
  zopf!: THREE.Group

  constructor() {
    this.wurzel.add(this.becken)
    const knochen = (name: string, eltern: THREE.Object3D, pos: [number, number, number]) => {
      const g = new THREE.Group()
      g.position.set(...pos)
      eltern.add(g)
      this.k[name] = g
      return g
    }
    const marke = (name: string, eltern: THREE.Object3D, pos: [number, number, number]) => {
      const o = new THREE.Object3D()
      o.position.set(...pos)
      eltern.add(o)
      this.marken[name] = o
    }

    // ---------- Becken und Radlerhose
    const b = this.becken
    b.add(rumpf([[-0.115, 0.12], [-0.06, 0.145], [0, 0.152], [0.05, 0.145], [0.1, 0.126]], FARBE.stoff, 0.8))
    for (const s of [1, -1]) {
      b.add(kugel(0.07, FARBE.stoff, [0.058 * s, -0.035, -0.07], [1, 1.05, 0.88]))
      // Raffung der Scrunch-Leggings: V-Naht zur Mitte
      b.add(kapsel(0.003, 0.06, "#47291f", [0.022 * s, -0.005, -0.138], [rad(-15), 0, rad(-30 * s)]))
    }
    marke("becken", b, [0, 0, 0])
    marke("gesaess", b, [0, -0.08, -0.07])

    // ---------- Wirbelsäule, Rumpf
    const lws = knochen("lws", b, [0, 0.085, -0.015])
    lws.add(rumpf([[-0.03, 0.13], [0.02, 0.112], [0.08, 0.1], [0.14, 0.106], [0.17, 0.11]], FARBE.haut, 0.7))
    // hoher Bund der Radlerhose
    lws.add(rumpf([[-0.045, 0.136], [0.02, 0.118], [0.04, 0.116]], FARBE.stoff, 0.72))
    marke("ruecken", lws, [0, 0.06, -0.08])
    const bws = knochen("bws", lws, [0, 0.14, 0])
    this.brustkorb = rumpf([[-0.02, 0.11], [0.06, 0.118], [0.14, 0.125], [0.22, 0.122], [0.27, 0.1], [0.3, 0.05]], FARBE.haut, 0.68, 1.02)
    bws.add(this.brustkorb)
    // Sport-Bustier: Unterbrustband, zwei Körbchen mit Dekolleté dazwischen, Träger
    bws.add(rumpf([[0.035, 0.122], [0.06, 0.126], [0.1, 0.129], [0.115, 0.128]], FARBE.stoff, 0.72, 1.02))
    // Rücken des Bustiers (Ringerrücken)
    const ruecken = rumpf([[0.1, 0.129], [0.17, 0.13], [0.2, 0.122]], FARBE.stoff, 0.72, 1.02)
    ruecken.position.z = -0.012
    bws.add(ruecken)
    // Brust: natürliche Form unter dem Stoff, Haut im Ausschnitt
    bws.add(kapsel(0.003, 0.03, FARBE.hautDunkel, [0, 0.135, 0.092]))
    for (const s of [1, -1]) {
      bws.add(kugel(0.058, FARBE.stoff, [0.047 * s, 0.127, 0.062], [1, 0.86, 0.68]))
      bws.add(kapsel(0.007, 0.11, FARBE.stoff, [0.068 * s, 0.24, 0.032], [rad(-28), 0, rad(16 * s)]))
      // Nacken- und Trapezlinie zur Schulter
      bws.add(kapsel(0.032, 0.075, FARBE.haut, [0.075 * s, 0.268, -0.022], [0, 0, rad(-101 * s)]))
    }
    marke("bws", bws, [0, 0.16, -0.09])

    // ---------- Hals und Kopf
    const hals = knochen("hals", bws, [0, 0.28, -0.012])
    hals.add(rumpf([[-0.03, 0.046], [0.04, 0.04], [0.11, 0.038]], FARBE.haut, 0.95))
    const kopf = knochen("kopf", hals, [0, 0.085, 0.008])
    kopf.add(kugel(0.09, FARBE.haut, [0, 0.108, 0], [0.88, 1.05, 1]))
    kopf.add(kugel(0.068, FARBE.haut, [0, 0.062, 0.028], [0.85, 0.92, 0.95]))
    kopf.add(kapsel(0.009, 0.022, FARBE.hautDunkel, [0, 0.088, 0.094], [rad(-14), 0, 0]))
    kopf.add(kapsel(0.006, 0.02, "#a8584e", [0, 0.05, 0.088], [0, 0, rad(90)]))
    for (const s of [1, -1]) {
      kopf.add(kugel(0.0105, FARBE.auge, [0.03 * s, 0.108, 0.08], [1, 0.75, 0.5]))
      kopf.add(kapsel(0.004, 0.018, FARBE.haar, [0.03 * s, 0.126, 0.083], [0, 0, rad(90 + 8 * s)]))
      kopf.add(kugel(0.018, FARBE.haut, [0.08 * s, 0.096, -0.005], [0.45, 1, 0.75]))
    }
    // Haare: anliegend mit Pferdeschwanz
    kopf.add(kugel(0.093, FARBE.haar, [0, 0.128, -0.026], [0.95, 1, 0.98]))
    // Pferdeschwanz hängt mit der Schwerkraft
    const zopf = new THREE.Group()
    zopf.position.set(0, 0.15, -0.098)
    zopf.add(kapsel(0.023, 0.13, FARBE.haar, [0, -0.085, -0.008]))
    kopf.add(zopf)
    this.zopf = zopf
    kopf.add(kugel(0.015, FARBE.stoff, [0, 0.15, -0.096]))
    marke("kopf", kopf, [0, 0.11, 0])

    // ---------- Schultergürtel und Arme
    for (const seite of ["l", "r"] as Seite[]) {
      const s = seite === "l" ? 1 : -1
      const sb = knochen("schulterblatt_" + seite, bws, [0.022 * s, 0.252, -0.005])
      const sch = knochen("schulter_" + seite, sb, [0.158 * s, 0, -0.012])
      sch.add(kugel(0.042, FARBE.haut, [0.004 * s, -0.004, 0], [0.98, 1.08, 1.02]))
      sch.add(glied([[-0.02, 0.042], [0.05, 0.042], [0.15, 0.036], [0.26, 0.03], [0.3, 0.029]], FARBE.haut))
      marke("schulter_" + seite, sch, [0, 0, 0])
      const ell = knochen("ellbogen_" + seite, sch, [0, -0.29, 0])
      ell.add(glied([[0, 0.03], [0.05, 0.033], [0.14, 0.027], [0.23, 0.021], [0.25, 0.02]], FARBE.haut, 0.82))
      marke("ellbogen_" + seite, ell, [0, 0, -0.03])
      marke("unterarm_" + seite, ell, [0, -0.13, 0])
      const hand = knochen("hand_" + seite, ell, [0, -0.245, 0])
      hand.add(kugel(0.02, FARBE.haut, [0, 0, 0], [0.8, 1, 1.1]))
      // Handfläche zur Körpermitte, Daumen nach vorn
      hand.add(kugel(0.045, FARBE.haut, [0, -0.052, 0.002], [0.36, 1, 0.82]))
      const finger = knochen("finger_" + seite, hand, [0, -0.098, 0])
      for (const [dz, l] of [[-0.021, 0.045], [-0.007, 0.06], [0.008, 0.063], [0.022, 0.056]] as [number, number][]) finger.add(kapsel(0.0085, l, FARBE.haut, [0, -l / 2, dz]))
      hand.add(kapsel(0.01, 0.04, FARBE.haut, [-0.006 * s, -0.055, 0.04], [rad(32), 0, 0]))
      marke("hand_" + seite, hand, [0, -0.09, 0])
    }

    // ---------- Beine
    for (const seite of ["l", "r"] as Seite[]) {
      const s = seite === "l" ? 1 : -1
      const h = knochen("huefte_" + seite, b, [0.086 * s, 0, 0])
      // Scrunch-Leggings in 7/8-Länge
      h.add(glied([[-0.045, 0.087], [0.05, 0.082], [0.18, 0.071], [0.3, 0.059], [0.4, 0.05], [0.43, 0.048]], FARBE.stoff, 1, 26))
      marke("oberschenkel_" + seite, h, [0, -0.21, 0])
      const knie = knochen("knie_" + seite, h, [0, -0.42, 0])
      knie.add(glied([[0, 0.048], [0.08, 0.053], [0.16, 0.049], [0.28, 0.036], [0.33, 0.033]], FARBE.stoff, 1, 24))
      knie.add(glied([[0.32, 0.031], [0.39, 0.028]], FARBE.haut, 1, 20))
      // Socke über dem Knöchel
      knie.add(glied([[0.37, 0.031], [0.41, 0.031]], FARBE.socke, 1, 18))
      marke("knie_" + seite, knie, [0, 0, 0.05])
      marke("wade_" + seite, knie, [0, -0.12, -0.04])
      const fuss = knochen("fuss_" + seite, knie, [0, -0.41, 0])
      fuss.add(kugel(0.032, FARBE.socke))
      // Laufschuh: Ferse bis Ballen, Sohle
      fuss.add(kapsel(0.044, 0.13, FARBE.schuh, [0, -0.045, 0.05], [rad(90), 0, 0], [0.92, 1, 0.78]))
      fuss.add(kapsel(0.042, 0.15, FARBE.sohle, [0, -0.072, 0.05], [rad(90), 0, 0], [1, 1, 0.32]))
      marke("ferse_" + seite, fuss, [0, -0.07, -0.05])
      marke("fuss_" + seite, fuss, [0, -0.06, 0.07])
      const zehen = knochen("zehen_" + seite, fuss, [0, -0.06, 0.135])
      zehen.add(kapsel(0.037, 0.03, FARBE.schuh, [0, 0, 0.03], [rad(90), 0, 0], [0.98, 1, 0.75]))
    }

    // Stichproben der Oberfläche
    this.wurzel.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return
      const pos = o.geometry.getAttribute("position")
      const schritt = Math.max(1, Math.floor(pos.count / 48))
      const punkte: THREE.Vector3[] = []
      for (let i = 0; i < pos.count; i += schritt) punkte.push(new THREE.Vector3().fromBufferAttribute(pos, i))
      this.proben.push({ mesh: o, punkte })
    })
  }

  /** Haltung einnehmen und auf den Boden setzen. */
  stelle(h: Haltung, atem = 0) {
    const w = h.g
    const v = (name: keyof typeof w, i: number) => w[name]?.[i] ?? 0
    const setz = (name: string, e: THREE.Euler) => this.k[name].quaternion.setFromEuler(e)
    for (const seite of ["l", "r"] as Seite[]) {
      const s = seite === "l" ? 1 : -1
      const g = (n: string, i: number) => v((n + "_" + seite) as keyof typeof w, i)
      setz("huefte_" + seite, new THREE.Euler(rad(-g("huefte", 0)), rad(-s * g("huefte", 2)), rad(s * g("huefte", 1)), "ZXY"))
      setz("knie_" + seite, new THREE.Euler(rad(g("knie", 0)), 0, 0))
      setz("fuss_" + seite, new THREE.Euler(rad(-g("fuss", 0)), 0, rad(-s * g("fuss", 1)), "XZY"))
      setz("zehen_" + seite, new THREE.Euler(rad(-g("zehen", 0)), 0, 0))
      setz("schulterblatt_" + seite, new THREE.Euler(0, rad(-s * g("schulterblatt", 1)), rad(s * g("schulterblatt", 0)), "YZX"))
      setz("schulter_" + seite, new THREE.Euler(rad(-g("schulter", 0)), rad(s * g("schulter", 2)), rad(s * g("schulter", 1)), "ZXY"))
      // waagerechtes Öffnen (positiv nach außen) um die Längsachse des Rumpfs
      if (g("schulter", 3)) this.k["schulter_" + seite].quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rad(s * g("schulter", 3))))
      setz("ellbogen_" + seite, new THREE.Euler(rad(-g("ellbogen", 0)), rad(-s * g("ellbogen", 1)), 0, "XYZ"))
      setz("hand_" + seite, new THREE.Euler(rad(-g("hand", 1)), 0, rad(s * g("hand", 0)), "XZY"))
      // Finger beugen zur Handfläche (zur Körpermitte), strecken zum Handrücken
      setz("finger_" + seite, new THREE.Euler(0, 0, rad(-s * (g("finger", 0) - g("finger", 1))), "XYZ"))
    }
    for (const n of ["lws", "bws", "hals"] as const) setz(n, new THREE.Euler(rad(v(n, 0)), rad(v(n, 2)), rad(-v(n, 1)), "YXZ"))
    setz("kopf", new THREE.Euler(rad(v("kopf", 0)), 0, 0))
    const d = h.dreh || [0, 0, 0]
    // Neigen (Seitlage), dann Kippen (Rücken-, Bauchlage), dann Drehen um die eigene Längsachse
    this.becken.quaternion.setFromEuler(new THREE.Euler(rad(d[0]), rad(d[1]), rad(-d[2]), "ZXY"))
    const p = h.pos || [0, 0.94, 0]
    this.becken.position.set(p[0], p[1], p[2])
    this.brustkorb.scale.set(1 + atem * 0.018, 1, 0.7 * (1 + atem * 0.03))
    this.wurzel.updateMatrixWorld(true)
    // Pferdeschwanz nach unten, leicht vom Kopf weg
    const kopfQ = this.k.kopf.getWorldQuaternion(new THREE.Quaternion())
    const unten = new THREE.Vector3(0, -1, 0).applyQuaternion(kopfQ.clone().invert())
    const weg = new THREE.Vector3(0, 0, -0.35)
    this.zopf.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), unten.add(weg).normalize())
    this.wurzel.updateMatrixWorld(true)
    if (h.boden !== false) {
      const tief = this.tiefster()
      this.becken.position.y += MATTE - tief
      this.wurzel.updateMatrixWorld(true)
    }
  }

  tiefster(): number {
    let min = Infinity
    const v = new THREE.Vector3()
    for (const p of this.proben) for (const q of p.punkte) min = Math.min(min, v.copy(q).applyMatrix4(p.mesh.matrixWorld).y)
    return min
  }

  /** Umriss in Weltkoordinaten (für die Kamera). */
  umriss(box: THREE.Box3) {
    const v = new THREE.Vector3()
    for (const p of this.proben) for (const q of p.punkte) box.expandByPoint(v.copy(q).applyMatrix4(p.mesh.matrixWorld))
  }

  punkt(p: Punkt): THREE.Vector3 {
    if (p === "haende") return this.punkt("hand_l").add(this.punkt("hand_r")).multiplyScalar(0.5)
    const m = this.marken[p]
    return m ? m.getWorldPosition(new THREE.Vector3()) : this.becken.getWorldPosition(new THREE.Vector3())
  }
}

const MATTE = 0.006

// ---------------------------------------------------------------- Hilfsmittel
function zylinder(a: THREE.Vector3, b: THREE.Vector3, r: number, farbe: string): THREE.Mesh {
  const d = b.clone().sub(a)
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, Math.max(0.001, d.length()), 14), mat(farbe, 0.5))
  m.position.copy(a).add(b).multiplyScalar(0.5)
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())
  m.castShadow = true
  return m
}
const GLAS = new THREE.MeshStandardMaterial({ color: "#dfe6ef", roughness: 0.9, transparent: true, opacity: 0.28, depthWrite: false })

function kiste(mitte: THREE.Vector3, gr: [number, number, number], farbe: string): THREE.Mesh {
  // Wände und Türrahmen halb durchsichtig, damit sie die Figur nicht verdecken
  const m = new THREE.Mesh(new THREE.BoxGeometry(...gr), farbe === FARBE.wand ? GLAS : mat(farbe, 0.8))
  m.position.copy(mitte)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

/** Feste Hilfsmittel, ausgerichtet an der Zielhaltung. */
function festeHilfsmittel(k: Koerper, liste: Hilfsmittel[]): THREE.Object3D[] {
  const out: THREE.Object3D[] = []
  for (const h of liste) {
    if (h.art === "wand") {
      const p = k.punkt(h.an)
      const n = { vorn: [0, 0, 1], hinten: [0, 0, -1], links: [1, 0, 0], rechts: [-1, 0, 0], unten: [0, -1, 0] }[h.richtung]
      const dicke = 0.08
      const mitte = new THREE.Vector3(p.x + n[0] * (0.03 + dicke / 2), 1.2, p.z + n[2] * (0.03 + dicke / 2))
      const gr: [number, number, number] = n[0] ? [dicke, 2.4, 1.6] : [1.6, 2.4, dicke]
      out.push(kiste(mitte, gr, FARBE.wand))
    } else if (h.art === "bank" || h.art === "stuhl" || h.art === "box") {
      const p = k.punkt(h.unter)
      const gr: [number, number, number] = h.art === "bank" ? [0.3, h.hoehe, 1.1] : h.art === "stuhl" ? [0.42, h.hoehe, 0.42] : [0.45, h.hoehe, 0.4]
      out.push(kiste(new THREE.Vector3(p.x, h.hoehe / 2, p.z), gr, h.art === "box" ? FARBE.holz : FARBE.polster))
      if (h.art === "stuhl") out.push(kiste(new THREE.Vector3(p.x, h.hoehe + 0.22, p.z - 0.2), [0.42, 0.44, 0.03], FARBE.polster))
    } else if (h.art === "rolle") {
      const p = k.punkt(h.unter)
      const d = h.laengs ? new THREE.Vector3(0, 0, 0.45) : new THREE.Vector3(0.45, 0, 0)
      const m = zylinder(new THREE.Vector3(p.x, 0.075 + MATTE, p.z).sub(d), new THREE.Vector3(p.x, 0.075 + MATTE, p.z).add(d), 0.075, FARBE.rolle)
      out.push(m)
    } else if (h.art === "ball") {
      const p = k.punkt(h.unter)
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.32, 32, 24), mat(FARBE.ball, 0.4))
      m.position.set(p.x, 0.32, p.z)
      m.castShadow = true
      out.push(m)
    } else if (h.art === "kissen") {
      const p = k.punkt(h.unter)
      out.push(kiste(new THREE.Vector3(p.x, 0.03, p.z), [0.3, 0.05, 0.25], FARBE.polster))
    } else if (h.art === "tuer") {
      const p = k.punkt(h.an)
      for (const dz of [-0.04, 0.04]) out.push(kiste(new THREE.Vector3(p.x + (p.x >= 0 ? 0.04 : -0.04), 1.05, p.z + dz), [0.06, 2.1, 0.06], FARBE.wand))
    } else if (h.art === "stange") {
      const p = k.punkt(h.an)
      out.push(zylinder(new THREE.Vector3(-0.7, p.y + 0.02, p.z), new THREE.Vector3(0.7, p.y + 0.02, p.z), 0.016, FARBE.metall))
    }
  }
  return out
}

/** Bewegliche Hilfsmittel, folgen den Händen (Stab, Band, Kurzhantel). */
function beweglicheHilfsmittel(k: Koerper, liste: Hilfsmittel[]): THREE.Object3D[] {
  const out: THREE.Object3D[] = []
  for (const h of liste) {
    if (h.art === "stab") {
      const a = k.punkt(h.von), b = k.punkt(h.bis)
      const d = b.clone().sub(a).normalize()
      out.push(zylinder(a.clone().addScaledVector(d, -0.25), b.clone().addScaledVector(d, 0.25), 0.012, FARBE.holz))
    } else if (h.art === "band") out.push(zylinder(k.punkt(h.von), k.punkt(h.bis), 0.008, FARBE.band))
    else if (h.art === "hantel") {
      const p = k.punkt(h.an)
      out.push(zylinder(p.clone().add(new THREE.Vector3(-0.1, 0, 0)), p.clone().add(new THREE.Vector3(0.1, 0, 0)), 0.04, FARBE.polster))
    }
  }
  return out
}

// ---------------------------------------------------------------- Szene und Kamera
const BLICK: Record<string, [number, number, number]> = {
  vorn: [0, 0.25, 1],
  seite: [1, 0.22, 0.12],
  seite_links: [-1, 0.22, 0.12],
  schraeg: [0.78, 0.3, 0.72],
  hinten: [0.15, 0.3, -1],
  oben: [0.55, 1.1, 0.55],
}

class Buehne {
  szene = new THREE.Scene()
  koerper = new Koerper()
  kamera = new THREE.PerspectiveCamera(28, 4 / 3, 0.05, 30)
  fest: THREE.Object3D[] = []
  beweglich: THREE.Object3D[] = []
  modell: Modellfigur | null = null
  mitte = new THREE.Vector3()
  abstand = 3

  constructor(
    readonly d: Dehnung,
    readonly haltenS?: number,
  ) {
    const s = this.szene
    s.add(new THREE.HemisphereLight("#ffffff", "#9b8a7a", 1.25))
    const sonne = new THREE.DirectionalLight("#fff6ea", 2.1)
    sonne.position.set(2.2, 4.5, 3)
    sonne.castShadow = true
    sonne.shadow.mapSize.set(1024, 1024)
    const sc = sonne.shadow.camera
    sc.left = -2
    sc.right = 2
    sc.top = 2
    sc.bottom = -2
    sc.far = 12
    s.add(sonne)
    const gegen = new THREE.DirectionalLight("#d8e6ff", 0.7)
    gegen.position.set(-3, 2.5, -2)
    s.add(gegen)
    const boden = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.ShadowMaterial({ opacity: 0.22 }))
    boden.rotation.x = -Math.PI / 2
    boden.receiveShadow = true
    s.add(boden)
    const matte = kiste(new THREE.Vector3(0, MATTE / 2, 0), [0.62, MATTE, 1.85], FARBE.matte)
    s.add(matte)
    s.add(this.koerper.wurzel)
    if (vorlage) {
      // Die gezeichnete Figur rechnet die Haltung unsichtbar weiter, das Modell zeigt sie
      this.koerper.stelle({ g: {} })
      this.modell = new Modellfigur(skelettKlon(vorlage), this.koerper)
      this.koerper.wurzel.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).visible = false
      })
      s.add(this.modell.modell)
    }

    // Hilfsmittel an der Zielhaltung ausrichten, Kamera auf den ganzen Ablauf
    const box = new THREE.Box3()
    const proben = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9]
    const gesamt = this.laenge()
    const ziel = d.ziel || d.schritte?.[Math.floor((d.schritte.length - 1) / 2)]?.h || d.start
    this.koerper.stelle(ziel)
    this.fest = festeHilfsmittel(this.koerper, d.hilfsmittel || [])
    for (const o of this.fest) s.add(o)
    for (const u of proben) {
      const st = standZu(d, u * gesamt, haltenS)
      this.koerper.stelle(st.haltung)
      if (this.modell) {
        this.modell.uebernehmen(st.haltung.boden !== false)
        this.modell.umriss(box)
      } else this.koerper.umriss(box)
    }
    for (const o of this.fest) if (o instanceof THREE.Mesh && !(o.geometry instanceof THREE.BoxGeometry && o.scale.y > 2)) box.expandByObject(o)
    box.getCenter(this.mitte)
    const gr = box.getSize(new THREE.Vector3())
    this.radius = Math.max(gr.x, gr.y, gr.z) / 2
  }

  radius = 1

  laenge(): number {
    let n = 0
    const d = this.d
    const t = (x: number) => standZu(d, x, this.haltenS)
    // Länge einer Seite aus der Abfolge (über standZu nicht direkt erreichbar)
    void t
    if (d.art === "folge") n = (d.schritte || []).reduce((a, s) => a + s.s, 0)
    else if (d.art === "halten") n = 1.5 + (d.ein ?? 4) + (this.haltenS ?? d.halten ?? 30) + (d.aus ?? 3)
    else n = (d.ein ?? 2) + (d.halten ?? 0) + (d.aus ?? d.ein ?? 2)
    return d.seiten ? 2 * n : n
  }

  stelle(t: number): Stand {
    const st = standZu(this.d, t, this.haltenS)
    this.koerper.stelle(st.haltung, st.atem)
    this.modell?.uebernehmen(st.haltung.boden !== false)
    this.modell?.gesicht(t)
    for (const o of this.beweglich) this.szene.remove(o)
    this.beweglich = beweglicheHilfsmittel(this.koerper, this.d.hilfsmittel || [])
    for (const o of this.beweglich) this.szene.add(o)
    return st
  }

  rahme(seiten: number) {
    const r = BLICK[this.d.ansicht] || BLICK.schraeg
    const dir = new THREE.Vector3(...r).normalize()
    const fov = rad(this.kamera.fov)
    const noetig = (this.radius * 1.12) / Math.sin(fov / 2) / Math.min(1, seiten)
    this.kamera.aspect = seiten
    this.kamera.position.copy(this.mitte).addScaledVector(dir, Math.max(1.6, noetig))
    this.kamera.lookAt(this.mitte)
    this.kamera.updateProjectionMatrix()
  }
}

// ---------------------------------------------------------------- Ein Renderer für alle Canvas
let renderer: THREE.WebGLRenderer | null = null
function studio() {
  if (renderer) return renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(1)
  renderer.setClearColor(0x000000, 0)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  return renderer
}

interface Eintrag {
  canvas: HTMLCanvasElement
  buehne: Buehne
  start: number
  sichtbar: boolean
  still: boolean
  melden?: (st: Stand) => void
  io?: IntersectionObserver
}
const eintraege: Eintrag[] = []
let laeuft = false
let zuletzt = 0

function zeichne(e: Eintrag, t: number) {
  const r = studio()
  const { width, height } = e.canvas
  const g = r.getSize(new THREE.Vector2())
  if (g.x !== width || g.y !== height) r.setSize(width, height, false)
  const st = e.buehne.stelle(e.still ? e.buehne.laenge() * 0.3 : t - e.start)
  e.buehne.rahme(width / height)
  r.render(e.buehne.szene, e.buehne.kamera)
  const ctx = e.canvas.getContext("2d")
  if (ctx) {
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(r.domElement, 0, 0, width, height)
  }
  e.melden?.(st)
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
  // etwa 30 Bilder pro Sekunde reichen für ruhige Dehnungen
  if (ms - zuletzt > 33) {
    zuletzt = ms
    for (const e of eintraege) if (e.sichtbar && !e.still) zeichne(e, ms / 1000)
  }
  requestAnimationFrame(schleife)
}

/**
 * Zeigt eine Dehnung in der Canvas, solange sie sichtbar ist. haltenS: Haltezeit aus der Vorgabe. melden bekommt
 * Phase und Restzeit für die Anzeige unter der Figur. Bei „Bewegung reduzieren“ ein Standbild in der Dehnung.
 */
export function zeigeDehnung(canvas: HTMLCanvasElement, d: Dehnung, haltenS?: number, melden?: (st: Stand) => void): () => void {
  const fenster = canvas.ownerDocument.defaultView ?? window
  const still = !!fenster.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  const e: Eintrag = { canvas, buehne: new Buehne(d, haltenS), start: performance.now() / 1000, sichtbar: true, still, melden }
  eintraege.push(e)
  zeichne(e, performance.now() / 1000)
  if ("IntersectionObserver" in fenster) {
    e.io = new fenster.IntersectionObserver((es) => {
      for (const x of es) e.sichtbar = x.isIntersecting
    })
    e.io.observe(canvas)
  }
  if (!laeuft) {
    laeuft = true
    requestAnimationFrame(schleife)
  }
  return () => {
    e.io?.disconnect()
    const i = eintraege.indexOf(e)
    if (i >= 0) eintraege.splice(i, 1)
  }
}

/** Standbild zu einer Zeit t (für Prüfungen und Vorschaubilder). */
export function standbild(canvas: HTMLCanvasElement, d: Dehnung, t: number, haltenS?: number): Stand {
  const e: Eintrag = { canvas, buehne: new Buehne(d, haltenS), start: 0, sichtbar: true, still: false }
  let st: Stand | null = null
  e.melden = (x) => (st = x)
  zeichne(e, t)
  return st!
}
export const _koerper = () => new Koerper()
