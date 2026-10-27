// Steuert die MakeHuman-Figur (Grundnetz, Skelett und Gewichte von MakeHuman, CC0; gebaut mit
// werkzeuge/makehuman/figur_bauen.py) mit den Gelenkwinkeln der Dehnfigur. Die Dehnfigur rechnet die Haltung, das
// Modell übernimmt die Ausrichtung jedes Knochens im Raum. Kleidung, Augenbrauen und Kopfhaut liegen als vorberechnete
// Masken im Netz und werden per Shader gefärbt; die lockere Kleidung bringt ihren Versatz und ihre Normalen mit.

import * as THREE from "three"

export interface Gelenkquelle {
  k: Record<string, THREE.Object3D>
  becken: THREE.Object3D
  wurzel: THREE.Object3D
}

/** Gelenk der Dehnfigur → Knochen im Modell, mit dem Knochen bzw. Gelenk, auf das er zeigt */
const ZUORDNUNG: [string, string, string | null, string | null][] = [
  ["lws", "spine04", "bws", "spine02"],
  ["bws", "spine02", "hals", "neck01"],
  ["hals", "neck01", "kopf", "head"],
  ["kopf", "head", null, null],
  ...(["l", "r"] as const).flatMap((s): [string, string, string | null, string | null][] => {
    const S = "_" + s.toUpperCase()
    return [
      ["schulterblatt_" + s, "clavicle" + S, "schulter_" + s, "upperarm01" + S],
      ["schulter_" + s, "upperarm01" + S, "ellbogen_" + s, "lowerarm01" + S],
      ["ellbogen_" + s, "lowerarm01" + S, "hand_" + s, "wrist" + S],
      ["hand_" + s, "wrist" + S, "finger_" + s, "finger3-1" + S],
      ["huefte_" + s, "upperleg01" + S, "knie_" + s, "lowerleg01" + S],
      ["knie_" + s, "lowerleg01" + S, "fuss_" + s, "foot" + S],
      ["fuss_" + s, "foot" + S, "zehen_" + s, "toe3-1" + S],
    ]
  }),
]
/**
 * Knochen zwischen zwei Gelenken der Dehnfigur: Sie drehen anteilig mit, damit sich Wirbelsäule und Hals rund
 * biegen statt an einer Stelle zu knicken. [Knochen, von Gelenk, zu Gelenk, Anteil]
 */
const ZWISCHEN: [string, string, string, number][] = [
  ["spine05", "becken", "lws", 0.5],
  ["spine03", "lws", "bws", 0.5],
  ["spine01", "bws", "hals", 0.35],
  ["neck02", "hals", "kopf", 0.33],
  ["neck03", "hals", "kopf", 0.67],
]
/** Zeige-, Mittel-, Ring- und kleiner Finger; der Daumen folgt der Hand */
const FINGER = ["finger2", "finger3", "finger4", "finger5"]

function knochen(modell: THREE.Object3D, name: string): THREE.Bone | null {
  let best: THREE.Bone | null = null
  modell.traverse((o) => {
    if (!best && o.name === name && (o as THREE.Bone).isBone) best = o as THREE.Bone
  })
  return best
}

const weltQ = (o: THREE.Object3D) => o.getWorldQuaternion(new THREE.Quaternion())
const weltP = (o: THREE.Object3D) => o.getWorldPosition(new THREE.Vector3())

/** Ausrichtung aus Richtung und einer Nebenachse (vorn, bei Füßen oben). */
function basis(richtung: THREE.Vector3): THREE.Quaternion {
  const y = richtung.clone().normalize()
  const neben = Math.abs(y.z) > 0.7 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1)
  const x = new THREE.Vector3().crossVectors(y, neben).normalize()
  const z = new THREE.Vector3().crossVectors(x, y).normalize()
  return new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z))
}

interface Eintrag {
  gelenk: string
  bone: THREE.Bone
  /** Korrektur: Ruhelage der Dehnfigur → Ruhelage des Modells, mal Ruhe-Ausrichtung des Knochens */
  korrektur: THREE.Quaternion
  tiefe: number
  /** Zwischenknochen und Finger: Ausrichtung zwischen Gelenk „von“ und „gelenk“ zum Anteil */
  von?: string
  anteil?: number
}

/** Augen: weißer Augapfel, braune Iris mit Pupille und Lichtreflex, aus der Lage im Auge berechnet. */
function augen(mesh: THREE.Mesh): THREE.Material {
  const pos = mesh.geometry.getAttribute("position") as THREE.BufferAttribute
  const mitte = (seite: number) => {
    const box = new THREE.Box3()
    const v = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      if (Math.sign(v.x) === seite) box.expandByPoint(v)
    }
    return box.getCenter(new THREE.Vector3())
  }
  const l = mitte(1), r = mitte(-1)
  const m = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.25 })
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uL = { value: l }
    sh.uniforms.uR = { value: r }
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vRuhe;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvRuhe = position;")
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vRuhe;\nuniform vec3 uL;\nuniform vec3 uR;").replace(
      "#include <color_fragment>",
      `#include <color_fragment>
      vec3 c = vRuhe.x > 0.0 ? uL : uR;
      vec3 d = normalize(vRuhe - c);
      // Blick geradeaus nach vorn (im Modell -y)
      vec3 blick = normalize(vec3(sign(vRuhe.x) * 0.03, -1.0, 0.03));
      float w = dot(d, blick);
      vec3 farbe = vec3(0.95, 0.94, 0.92);
      if (w > 0.80) farbe = mix(vec3(0.42, 0.25, 0.12), vec3(0.24, 0.13, 0.06), smoothstep(0.80, 0.97, w));
      if (w > 0.80 && w < 0.815) farbe = vec3(0.12, 0.07, 0.04);
      if (w > 0.955) farbe = vec3(0.03, 0.02, 0.02);
      // Lichtreflex oben außen
      if (dot(d, normalize(blick + vec3(0.12 * sign(vRuhe.x), 0.0, 0.16))) > 0.993) farbe = vec3(1.0);
      diffuseColor.rgb = farbe;`,
    )
  }
  m.customProgramCacheKey = () => "augen"
  return m
}

/** Haare: Wurzeln folgen dem Kopf, die Spitzen fallen mit der Schwerkraft und liegen nicht unter dem Boden. */
export interface Haarwerte {
  /** Drehung der Haarspitzen zur Schwerkraft hin (Quaternion im Netzraum) */
  uQ: { value: THREE.Vector4 }
  uDreh: { value: THREE.Vector3 }
  uBodenP: { value: THREE.Vector3 }
  uBodenN: { value: THREE.Vector3 }
}

function haarMaterial(name: string, w: Haarwerte): THREE.Material {
  const m = new THREE.MeshStandardMaterial({ name, color: "#3a2216", roughness: 0.45, metalness: 0.05, side: THREE.DoubleSide })
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, w)
    const kopf = `uniform vec4 uQ;
uniform vec3 uDreh;
uniform vec3 uBodenP;
uniform vec3 uBodenN;
// Anteil frei hängender Strähne (im Netz vorberechnet): 0 am Kopf, 1 an den Spitzen
attribute float _frei;
attribute vec2 _strang;
varying float vFrei;
varying vec2 vStrang;
vec3 haarDrehe(vec3 v) {
  vec4 q = normalize(mix(vec4(0.0, 0.0, 0.0, 1.0), uQ, _frei));
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}`
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\n" + kopf)
      .replace("#include <skinnormal_vertex>", "#include <skinnormal_vertex>\n objectNormal = haarDrehe(objectNormal);\n vFrei = _frei;\n vStrang = _strang;")
      .replace(
        "#include <skinning_vertex>",
        `#include <skinning_vertex>
        transformed = uDreh + haarDrehe(transformed - uDreh);
        float hb = dot(transformed - uBodenP, uBodenN);
        if (hb < 0.4) transformed += uBodenN * (0.4 - hb);`,
      )
    // Strähnen: feine helle und dunkle Linien entlang des Haars
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vFrei;\nvarying vec2 vStrang;").replace(
      "#include <color_fragment>",
      `#include <color_fragment>
      float u = vStrang.x + 0.35 * sin(vStrang.y * 0.45);
      float l = 0.5 + 0.5 * sin(u * 7.0) * sin(u * 2.3 + 1.7);
      diffuseColor.rgb *= 0.78 + 0.34 * l;`,
    )
  }
  m.customProgramCacheKey = () => "haar"
  return m
}

/** Messgitter auf Körper und Kleidung (Entwicklermodus): macht Rundungen und Verdrehungen sichtbar */
export const RASTER = { value: 0 }
/** Ohne Kleidung (Entwicklermodus): Kleidung und Socken weg, nur Haut */
export const NACKT = { value: 0 }
/**
 * Alltagskleidung für alle: weites, kurzes T-Shirt in Terrakotta und schwarze Leggings. Nur im
 * Entwicklermodus (0) die enge Sportkleidung zum genauen Prüfen.
 */
export const LOCKER = { value: 1 }

/** Farbe der Kleidung aus den Abstandsfeldern im Netz (cm, positiv bedeckt; vKleid: Shirt, Leggings; Top, Shorts eng) */
const KLEID_FARBE = `
if (uLocker > 0.5) {
  // weites Shirt in Terrakotta über schwarzen Leggings (Farben linear)
  if (vKleid.x > 0.0) { diffuseColor.rgb = vec3(0.42, 0.085, 0.045); stoffig = true; }
  else if (vKleid.y > 0.0) { diffuseColor.rgb = vec3(0.012, 0.012, 0.015); stoffig = true; }
  // Saum und Bündchen etwas dunkler
  if (stoffig && (vKleid.x > 0.0 ? vKleid.x : vKleid.y) < 0.7) diffuseColor.rgb *= 0.78;
} else {
  if (vKleid.z > 0.0 || vKleid.w > 0.0) { diffuseColor.rgb = uStoff; stoffig = true; }
}
// Söckchen
if (h < 10.5) diffuseColor.rgb = uSocke;`
const RASTER_GLSL = `
if (uRaster > 0.5) {
  // Linien alle 3 cm in der Ruhehaltung: waagerechte Ringe weiß, senkrechte Ebenen hellblau, Körpermitte rot
  vec3 q = vRuhe / 3.0;
  vec3 g = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec3(1e-4));
  float ring = 1.0 - clamp(g.z, 0.0, 1.0);
  float senk = 1.0 - clamp(min(g.x, g.y), 0.0, 1.0);
  float mitte = 1.0 - clamp(abs(vRuhe.x) / max(fwidth(vRuhe.x), 1e-4) * 0.5, 0.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.86, 1.0), senk * 0.75);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), ring * 0.85);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.25, 0.25), mitte);
}`

export class Modellfigur {
  /** Werte für den Haar-Shader, je Bild neu gesetzt */
  haar: Haarwerte = { uQ: { value: new THREE.Vector4(0, 0, 0, 1) }, uDreh: { value: new THREE.Vector3() }, uBodenP: { value: new THREE.Vector3(0, 0, -1e4) }, uBodenN: { value: new THREE.Vector3(0, 0, 1) } }
  haarNetz: THREE.SkinnedMesh | null = null
  kopf: THREE.Bone | null = null
  eintraege: Eintrag[] = []
  hueftknochen: THREE.Bone
  /** Netze mit Gesichtsausdrücken (Lächeln, Blinzeln) */
  gesichter: THREE.Mesh[] = []
  proben: { mesh: THREE.SkinnedMesh; index: number[] }[] = []

  constructor(
    readonly modell: THREE.Object3D,
    readonly quelle: Gelenkquelle,
  ) {
    this.kleiden()
    const hip = knochen(modell, "root")
    if (!hip) throw new Error("Modell ohne Hüftknochen")
    this.hueftknochen = hip
    modell.updateMatrixWorld(true)
    quelle.wurzel.updateMatrixWorld(true)
    // Größe an die Dehnfigur anpassen (Hüfthöhe)
    const hoeheModell = weltP(hip).y
    const hoeheFigur = weltP(quelle.becken).y - new THREE.Box3().setFromObject(quelle.wurzel).min.y
    modell.scale.multiplyScalar(hoeheFigur / hoeheModell)
    modell.updateMatrixWorld(true)

    const tiefe = (o: THREE.Object3D) => {
      let t = 0
      for (let p = o.parent; p; p = p.parent) t++
      return t
    }
    const figur = (gelenk: string) => (gelenk === "becken" ? quelle.becken : quelle.k[gelenk])
    const korrekturen = new Map<string, THREE.Quaternion>()
    const eintrag = (gelenk: string, bone: THREE.Bone, kind: THREE.Bone | null, gelenkKind: string | null) => {
      const r0 = weltQ(bone)
      let korr = new THREE.Quaternion()
      if (kind && gelenkKind && quelle.k[gelenkKind]) {
        const dModell = weltP(kind).sub(weltP(bone))
        const dFigur = weltP(quelle.k[gelenkKind]).sub(weltP(quelle.k[gelenk]))
        korr = basis(dFigur).multiply(basis(dModell).invert())
      }
      korrekturen.set(gelenk, korr)
      // Zielausrichtung in Ruhe: Figur-Ruhe (meist Einheit) mal Korrektur mal Modell-Ruhe
      const k = weltQ(figur(gelenk)).invert().multiply(korr).multiply(r0)
      this.eintraege.push({ gelenk, bone, korrektur: k, tiefe: tiefe(bone) })
    }
    /**
     * Knochen, der anteilig zwischen zwei Gelenken dreht; er übernimmt die Korrektur des ersten. „ruhe“ dreht die
     * Ruhelage des Knochens vorher (im Raum, z. B. Finger zusammen).
     */
    const zwischen = (bone: THREE.Bone, von: string, gelenk: string, anteil: number, ruhe = new THREE.Quaternion()) => {
      const c = korrekturen.get(von) ?? new THREE.Quaternion()
      this.eintraege.push({ gelenk, von, bone, korrektur: weltQ(figur(von)).invert().multiply(c).multiply(ruhe).multiply(weltQ(bone)), tiefe: tiefe(bone), anteil })
    }
    eintrag("becken", hip, null, null)
    for (const [gelenk, name, gKind, nKind] of ZUORDNUNG) {
      const b = knochen(modell, name)
      if (!b) continue
      eintrag(gelenk, b, nKind ? knochen(modell, nKind) : null, gKind)
    }
    for (const [name, von, gelenk, anteil] of ZWISCHEN) {
      const b = knochen(modell, name)
      if (b && figur(von) && figur(gelenk)) zwischen(b, von, gelenk, anteil)
    }
    // Finger: Glieder 1 bis 3 teilen sich die Beugung. In der Ruhehaltung des Netzes sind sie weit gespreizt; sie
    // rücken zum Mittelfinger hin zusammen, der Daumen an die Hand.
    for (const s of ["l", "r"]) {
      if (!quelle.k["hand_" + s] || !quelle.k["finger_" + s]) continue
      const S = "_" + s.toUpperCase()
      const richtung = (f: string) => {
        const a = knochen(modell, f + "-1" + S), b = knochen(modell, f + "-2" + S)
        return a && b ? weltP(b).sub(weltP(a)).normalize() : null
      }
      const mitte = richtung("finger3")
      for (const f of ["finger1", ...FINGER]) {
        const d = richtung(f)
        const zu = d && mitte ? new THREE.Quaternion().setFromUnitVectors(d, d.clone().lerp(mitte, f === "finger1" ? 0.4 : 0.65).normalize()) : new THREE.Quaternion()
        for (let i = 1; i <= 3; i++) {
          const b = knochen(modell, f + "-" + i + S)
          if (!b) continue
          if (f === "finger1") zwischen(b, "hand_" + s, "hand_" + s, 0, zu)
          else zwischen(b, "hand_" + s, "finger_" + s, i / 3, zu)
        }
      }
    }
    this.eintraege.sort((a, b) => a.tiefe - b.tiefe)
    this.kopf = knochen(modell, "head")

    // Stichproben der Haut für den tiefsten Punkt
    modell.traverse((o) => {
      const m = o as THREE.SkinnedMesh
      if (!m.isSkinnedMesh || !m.visible || !/Haut/.test((m.material as THREE.Material).name)) return
      const n = m.geometry.getAttribute("position").count
      const schritt = Math.max(1, Math.floor(n / 900))
      const index: number[] = []
      for (let i = 0; i < n; i += schritt) index.push(i)
      this.proben.push({ mesh: m, index })
    })
  }

  /** Haltung der Dehnfigur übernehmen (die Dehnfigur ist schon gestellt). */
  uebernehmen(boden: boolean, matte = 0.006) {
    const m = this.modell
    m.position.set(0, 0, 0)
    m.updateMatrixWorld(true)
    const figur = (gelenk: string) => (gelenk === "becken" ? this.quelle.becken : this.quelle.k[gelenk])
    for (const e of this.eintraege) {
      let ziel = weltQ(figur(e.gelenk))
      if (e.von && e.anteil !== undefined) ziel = weltQ(figur(e.von)).slerp(ziel, e.anteil)
      ziel.multiply(e.korrektur)
      if (e.gelenk.startsWith("schulterblatt_")) ziel.premultiply(this.schulterRhythmus(e.gelenk.slice(-1)))
      const eltern = e.bone.parent ? weltQ(e.bone.parent) : new THREE.Quaternion()
      e.bone.quaternion.copy(eltern.invert().multiply(ziel))
      e.bone.updateMatrixWorld(true)
    }
    // Becken an die Stelle der Dehnfigur
    m.updateMatrixWorld(true)
    const versatz = weltP(this.quelle.becken).sub(weltP(this.hueftknochen))
    m.position.add(versatz)
    m.updateMatrixWorld(true)
    if (boden) {
      m.position.y += matte - this.tiefster()
      m.updateMatrixWorld(true)
    }
    this.haareFallen(matte)
  }

  /**
   * Haarspitzen zum Boden hin neigen wie unter Schwerkraft (Wurzeln folgen dem Kopf), damit sie bei gesenktem Kopf
   * nicht nach oben stehen. Alles im Raum des Haarnetzes (Ruhehaltung, Zentimeter).
   */
  haareFallen(matte: number) {
    const netz = this.haarNetz, kopf = this.kopf
    if (!netz || !kopf) return
    const sk = netz.skeleton
    const i = sk.bones.indexOf(kopf)
    if (i < 0) return
    const hk = new THREE.Matrix4().copy(netz.bindMatrixInverse).multiply(kopf.matrixWorld).multiply(sk.boneInverses[i]).multiply(netz.bindMatrix)
    const qk = new THREE.Quaternion().setFromRotationMatrix(hk)
    // Richtung der hängenden Haare (in Ruhe nach unten) und Schwerkraft, beide im Netzraum
    const haengt = new THREE.Vector3(0, 0, -1).applyQuaternion(qk)
    const unten = new THREE.Vector3(0, -1, 0).applyQuaternion(netz.getWorldQuaternion(new THREE.Quaternion()).invert()).normalize()
    const q = new THREE.Quaternion().slerp(new THREE.Quaternion().setFromUnitVectors(haengt, unten), 0.9)
    if (q.w < 0) q.set(-q.x, -q.y, -q.z, -q.w)
    this.haar.uQ.value.set(q.x, q.y, q.z, q.w)
    // Drehpunkt: Kopfgelenk (Schädelbasis) in seiner aktuellen Lage. bindMatrixInverse folgt dem Netz (attached),
    // die Ruhelage braucht die Bindung zum Zeitpunkt des Ladens.
    const ruhe = new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().copy(sk.boneInverses[i]).invert())
    ruhe.applyMatrix4(netz.bindMatrix.clone().invert())
    this.haar.uDreh.value.copy(ruhe.applyMatrix4(hk))
    // Boden als Ebene im Netzraum
    this.haar.uBodenP.value.set(0, matte, 0).applyMatrix4(new THREE.Matrix4().copy(netz.matrixWorld).invert())
    this.haar.uBodenN.value.copy(unten).negate()
  }

  /**
   * Schulterblatt-Rhythmus: Wird der Arm über etwa 60 Grad gehoben, hebt sich das Schlüsselbein mit (bis 35 Grad,
   * gut ein Drittel der weiteren Hebung). Sonst knickt die Haut an Schulter und Achsel ein, weil nur der Oberarm dreht.
   */
  private schulterRhythmus(seite: string): THREE.Quaternion {
    const k = this.quelle.k
    const sch = k["schulter_" + seite], ell = k["ellbogen_" + seite], rumpf = k["bws"]
    if (!sch || !ell || !rumpf) return new THREE.Quaternion()
    const arm = weltP(ell).sub(weltP(sch)).normalize()
    const rq = weltQ(rumpf)
    const unten = new THREE.Vector3(0, -1, 0).applyQuaternion(rq)
    const hebung = THREE.MathUtils.radToDeg(arm.angleTo(unten))
    const winkel = THREE.MathUtils.clamp((hebung - 60) * 0.38, 0, 35)
    if (!winkel) return new THREE.Quaternion()
    const vorn = new THREE.Vector3(0, 0, 1).applyQuaternion(rq)
    return new THREE.Quaternion().setFromAxisAngle(vorn, THREE.MathUtils.degToRad(seite === "l" ? winkel : -winkel))
  }

  /** Freundlicher Ausdruck mit leichtem Lächeln, Blinzeln etwa alle 4 Sekunden. */
  gesicht(t: number) {
    const phase = t % 4.2
    const blinzeln = phase < 0.08 ? phase / 0.08 : phase < 0.16 ? 1 - (phase - 0.08) / 0.08 : 0
    const werte: Record<string, number> = { Mouth_Smile: 0.35, Eyes_Blink: blinzeln }
    for (const m of this.gesichter) {
      const dict = m.morphTargetDictionary!
      const inf = m.morphTargetInfluences!
      for (const [schluessel, i] of Object.entries(dict)) {
        const name = schluessel.slice(schluessel.lastIndexOf(".") + 1)
        if (name in werte) inf[i] = werte[name]
      }
    }
  }

  /**
   * Stelle einer Marke der Dehnfigur (Hand, Ellbogen, Fuß …) am Modell: gleicher Versatz vom Gelenk, aber vom
   * Gelenk des Modells aus. So liegen Stab, Stange und Wand an den Händen des Modells, nicht an denen der Rechenfigur.
   */
  punkt(marke: THREE.Object3D): THREE.Vector3 | null {
    const eltern = marke.parent
    if (!eltern) return null
    let bone: THREE.Object3D | undefined
    if (eltern === this.quelle.becken) bone = this.hueftknochen
    else {
      const gelenk = Object.keys(this.quelle.k).find((k) => this.quelle.k[k] === eltern)
      bone = this.eintraege.find((e) => e.gelenk === gelenk && e.anteil === undefined)?.bone
    }
    if (!bone) return null
    return weltP(bone).add(marke.position.clone().applyQuaternion(weltQ(eltern)))
  }

  /** Gelenkmitte am Modell (für die Gelenk-Einblendung) */
  gelenkPunkt(gelenk: string): THREE.Vector3 | null {
    if (gelenk === "becken") return weltP(this.hueftknochen)
    const e = this.eintraege.find((x) => x.gelenk === gelenk && x.anteil === undefined)
    return e ? weltP(e.bone) : null
  }

  tiefster(): number {
    let min = Infinity
    const v = new THREE.Vector3()
    for (const p of this.proben) {
      for (const i of p.index) {
        p.mesh.getVertexPosition(i, v)
        p.mesh.localToWorld(v)
        if (v.y < min) min = v.y
      }
    }
    return min
  }

  umriss(box: THREE.Box3) {
    const v = new THREE.Vector3()
    for (const p of this.proben) for (const i of p.index) box.expandByPoint(p.mesh.localToWorld(p.mesh.getVertexPosition(i, v)))
  }

  /** Farben und Kleidung. Masken, Versatz und Stoffnormalen kommen aus dem Netz (siehe figur_bauen.py). */
  private kleiden() {
    this.modell.traverse((o) => {
      const m = o as THREE.Mesh
      if (!m.isMesh) return
      if (m.morphTargetDictionary) this.gesichter.push(m)
      if ((m as THREE.SkinnedMesh).isSkinnedMesh && (m.material as THREE.Material).name === "Hair") this.haarNetz = m as THREE.SkinnedMesh
    })
    const haut = "#d9a07a"
    const stoff = new THREE.Color("#4e2e24")
    const socke = new THREE.Color("#3b3d42")
    const hautMaterial = () => {
      const m = new THREE.MeshStandardMaterial({ name: "Haut", color: haut, roughness: 0.55 })
      m.onBeforeCompile = (sh) => {
        sh.uniforms.uStoff = { value: stoff }
        sh.uniforms.uSocke = { value: socke }
        sh.uniforms.uRaster = RASTER
        sh.uniforms.uNackt = NACKT
        sh.uniforms.uLocker = LOCKER
        const an = "(uLocker > 0.5 && uNackt < 0.5)"
        sh.vertexShader = sh.vertexShader
          .replace(
            "#include <common>",
            "#include <common>\nattribute vec4 _kleid;\nattribute vec4 _tuch;\nattribute vec4 _tuchn;\nattribute vec4 _gesicht;\nvarying vec3 vRuhe;\nvarying vec4 vKleid;\nvarying vec3 vGesicht;\nuniform float uLocker;\nuniform float uNackt;",
          )
          // Lockere Kleidung: Stoff steht ab, fällt von Brust und Schulterblättern, Normalen glatt wie Stoff
          .replace("#include <beginnormal_vertex>", `#include <beginnormal_vertex>\nif ${an} objectNormal = normalize(mix(objectNormal, normalize(_tuchn.xyz), smoothstep(-1.0, 0.5, 6.0 * _kleid.x)));`)
          .replace("#include <begin_vertex>", `#include <begin_vertex>\nvRuhe = position;\nvKleid = _kleid * 6.0;\nvGesicht = vec3(_gesicht.xy, _gesicht.z * 6.0);\nif ${an} transformed += _tuch.xyz * 10.0;`)
        sh.fragmentShader = sh.fragmentShader
          .replace(
            "#include <common>",
            "#include <common>\nvarying vec3 vRuhe;\nvarying vec4 vKleid;\nvarying vec3 vGesicht;\nuniform vec3 uStoff;\nuniform vec3 uSocke;\nuniform float uRaster;\nuniform float uNackt;\nuniform float uLocker;",
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
            // Ruhehaltung: z ist die Höhe in cm
            float h = vRuhe.z;
            bool stoffig = false;
            // Kopfhaut unter den Haaren, Augenbrauen, Lippen (Farben linear)
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.06, 0.03, 0.016), smoothstep(-0.6, 0.1, vGesicht.z));
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.03, 0.02), smoothstep(0.25, 0.75, vGesicht.x) * 0.85);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.13, 0.12), smoothstep(0.3, 0.8, vGesicht.y) * 0.45);
            if (uNackt < 0.5) {
            ${KLEID_FARBE}
            }
            ${RASTER_GLSL}`,
          )
          // Stoff matt, Haut seidig
          .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n if (stoffig) roughnessFactor = 0.85;")
      }
      m.customProgramCacheKey = () => "haut"
      return m
    }
    this.modell.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.castShadow = true
      mesh.frustumCulled = false
      const ersetze = (alt: THREE.Material): THREE.Material => {
        const n = alt.name || ""
        if (n === "Haut") return hautMaterial()
        if (n === "Hair") return haarMaterial(n, this.haar)
        if (n === "Eye_L") return augen(mesh)
        if (n === "Eyelash") return new THREE.MeshStandardMaterial({ name: n, color: "#2a1a14", roughness: 0.8, side: THREE.DoubleSide })
        return alt
      }
      mesh.material = Array.isArray(mesh.material) ? mesh.material.map(ersetze) : ersetze(mesh.material)
    })
  }
}
