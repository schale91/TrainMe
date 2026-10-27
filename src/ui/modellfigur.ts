// Steuert ein geriggtes 3D-Modell (Skelett nach dem Schema EM3D_Base_…) mit den Gelenkwinkeln der Dehnfigur. Die
// Dehnfigur rechnet die Haltung, das Modell übernimmt die Ausrichtung jedes Knochens im Raum. Kleidung wird per
// Shader auf die Haut gefärbt: Sport-Bustier, kurze Scrunch-Shorts (Saum etwa 5 cm unter dem Po), weiße Söckchen.

import * as THREE from "three"

export interface Gelenkquelle {
  k: Record<string, THREE.Object3D>
  becken: THREE.Object3D
  wurzel: THREE.Object3D
}

const P = "EM3D_Base_"
/** Gelenk der Dehnfigur → Knochen im Modell, mit dem Knochen bzw. Gelenk, auf das er zeigt */
const ZUORDNUNG: [string, string, string | null, string | null][] = [
  ["lws", "Waist", "bws", "Spine01"],
  ["bws", "Spine01", "hals", "NeckTwist01"],
  ["hals", "NeckTwist01", "kopf", "Head"],
  ["kopf", "Head", null, null],
  ...(["l", "r"] as const).flatMap((s): [string, string, string | null, string | null][] => {
    const S = s.toUpperCase()
    return [
      ["schulterblatt_" + s, S + "_Clavicle", "schulter_" + s, S + "_Upperarm"],
      ["schulter_" + s, S + "_Upperarm", "ellbogen_" + s, S + "_Forearm"],
      ["ellbogen_" + s, S + "_Forearm", "hand_" + s, S + "_Hand"],
      ["hand_" + s, S + "_Hand", "finger_" + s, S + "_Mid1"],
      ["huefte_" + s, S + "_Thigh", "knie_" + s, S + "_Calf"],
      ["knie_" + s, S + "_Calf", "fuss_" + s, S + "_Foot"],
      ["fuss_" + s, S + "_Foot", "zehen_" + s, S + "_ToeBase"],
    ]
  }),
]
const FINGER = ["Index", "Mid", "Ring", "Pinky"]

/**
 * Oberster Knoten mit diesem Namen. Nach dem Umwandeln in glb gibt es gleichnamige Knoten ineinander (Suffix „_1“
 * bis „_4“), an denen verschiedene Netze hängen (Gesicht an Head_1, Haare an Head_4). Nur der oberste bewegt alle mit.
 */
function knochen(modell: THREE.Object3D, name: string): THREE.Bone | null {
  let best: THREE.Bone | null = null
  let tiefe = Infinity
  const muster = new RegExp("^" + name + "(_\\d+)?$")
  modell.traverse((o) => {
    if (!muster.test(o.name) || (o as THREE.Mesh).isMesh) return
    let t = 0
    for (let p = o.parent; p; p = p.parent) t++
    if (t < tiefe) {
      tiefe = t
      best = o as THREE.Bone
    }
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
  /** Finger: Anteil der Fingerbeugung (Glied 1 bis 3) */
  anteil?: number
}

/**
 * Haare bis über die Schultern verlängern: Strähnen unterhalb des Scheitels an Seiten und Hinterkopf strecken und
 * leicht nach außen fallen lassen; der Pony bleibt. Einmal je Geometrie.
 */
function haareVerlaengern(geo: THREE.BufferGeometry) {
  if (geo.userData.verlaengert) return
  geo.userData.verlaengert = true
  const pos = geo.getAttribute("position") as THREE.BufferAttribute
  const oben = 151
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    let y = pos.getY(i), z = pos.getZ(i)
    // vorn (Gesicht, y < -6) nicht verlängern, ab den Seiten voll
    const f = THREE.MathUtils.smoothstep(y, -6, -2)
    if (f < 1 && z < 154) {
      // Pony kürzer und näher an der Stirn, sonst rutscht er bei gedrehtem Kopf vors Auge
      const v = 1 - f
      y += v * Math.min(2.5, (154 - z) * 0.35)
      z = 154 - (154 - z) * (1 - 0.55 * v)
      pos.setXYZ(i, x, y, z)
    }
    if (z >= oben) continue
    const d = oben - z
    const zNeu = oben - d * (1 + 1.25 * f)
    const weit = 1 + d * 0.012 * f
    pos.setXYZ(i, x * weit, y + (y + 1) * (weit - 1) * 0.6, zNeu)
  }
  pos.needsUpdate = true
  // Normalen bleiben die originalen (weich); neu berechnet würden die Strähnen kantig
  geo.computeBoundingBox()
  geo.computeBoundingSphere()
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
  const m = new THREE.MeshStandardMaterial({ name, color: "#4a2b1b", roughness: 0.42, metalness: 0.05, side: THREE.DoubleSide })
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, w)
    const kopf = `uniform vec4 uQ;
uniform vec3 uDreh;
uniform vec3 uBodenP;
uniform vec3 uBodenN;
// Anteil frei hängender Strähne: 0 am Scheitel, 1 an den Spitzen (Ruhehaltung, z = Höhe in cm)
// Pony und Strähnen vor dem Gesicht (vorn ist -y) bleiben am Kopf, nahe am Schädel kaum Bewegung
float haarFrei(vec3 p) { return smoothstep(147.0, 128.0, p.z) * smoothstep(-7.0, -2.0, p.y); }
vec3 haarDrehe(vec3 v, vec3 p) {
  vec4 q = normalize(mix(vec4(0.0, 0.0, 0.0, 1.0), uQ, haarFrei(p)));
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}`
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\n" + kopf)
      .replace("#include <skinnormal_vertex>", "#include <skinnormal_vertex>\n objectNormal = haarDrehe(objectNormal, position);")
      .replace(
        "#include <skinning_vertex>",
        `#include <skinning_vertex>
        transformed = uDreh + haarDrehe(transformed - uDreh, position);
        float hb = dot(transformed - uBodenP, uBodenN);
        if (hb < 0.4) transformed += uBodenN * (0.4 - hb);`,
      )
  }
  m.customProgramCacheKey = () => "haar"
  return m
}

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
    const hip = knochen(modell, P + "Hip")
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
    const korrekturen = new Map<string, THREE.Quaternion>()
    const eintrag = (gelenk: string, bone: THREE.Bone, kind: THREE.Bone | null, gelenkKind: string | null, anteil?: number) => {
      const r0 = weltQ(bone)
      const qFigur = weltQ(gelenk === "becken" ? quelle.becken : quelle.k[gelenk])
      let korr = new THREE.Quaternion()
      if (kind && gelenkKind && quelle.k[gelenkKind]) {
        const dModell = weltP(kind).sub(weltP(bone))
        const dFigur = weltP(quelle.k[gelenkKind]).sub(weltP(quelle.k[gelenk]))
        korr = basis(dFigur).multiply(basis(dModell).invert())
      }
      korrekturen.set(gelenk, korr)
      // Zielausrichtung in Ruhe: Figur-Ruhe (meist Einheit) mal Korrektur mal Modell-Ruhe
      const k = qFigur.clone().invert().multiply(korr).multiply(r0)
      this.eintraege.push({ gelenk, bone, korrektur: k, tiefe: tiefe(bone), anteil })
    }
    eintrag("becken", hip, null, null)
    for (const [gelenk, name, gKind, nKind] of ZUORDNUNG) {
      const b = knochen(modell, P + name)
      if (!b) continue
      eintrag(gelenk, b, nKind ? knochen(modell, P + nKind) : null, gKind)
    }
    // Finger: Glieder 1 bis 3 teilen sich die Beugung
    for (const s of ["L", "R"]) {
      const hand = this.eintraege.find((e) => e.gelenk === "hand_" + s.toLowerCase())
      if (!hand) continue
      for (const f of FINGER)
        for (let i = 1; i <= 3; i++) {
          const b = knochen(modell, P + s + "_" + f + i)
          // Finger übernehmen die Korrektur der Hand
          const c = korrekturen.get("hand_" + s.toLowerCase()) ?? new THREE.Quaternion()
          if (b) this.eintraege.push({ gelenk: "finger_" + s.toLowerCase(), bone: b, korrektur: weltQ(quelle.k["hand_" + s.toLowerCase()]).invert().multiply(c).multiply(weltQ(b)), tiefe: tiefe(b), anteil: i / 3 })
        }
    }
    this.eintraege.sort((a, b) => a.tiefe - b.tiefe)
    this.kopf = knochen(modell, P + "Head")
    // Haare hängen im Modell teils an Hals und Wirbelsäule: dreht der Kopf, wischen sie übers Gesicht.
    // Fest an den Kopf binden, das Fallen übernimmt der Haar-Shader.
    const netz = this.haarNetz
    const ki = netz && this.kopf ? netz.skeleton.bones.indexOf(this.kopf) : -1
    if (netz && ki >= 0 && !netz.geometry.userData.kopfFest) {
      netz.geometry.userData.kopfFest = true
      const idx = netz.geometry.getAttribute("skinIndex") as THREE.BufferAttribute
      const gew = netz.geometry.getAttribute("skinWeight") as THREE.BufferAttribute
      for (let i = 0; i < idx.count; i++) {
        idx.setXYZW(i, ki, 0, 0, 0)
        gew.setXYZW(i, 1, 0, 0, 0)
      }
      idx.needsUpdate = true
      gew.needsUpdate = true
    }

    // Stichproben der Haut für den tiefsten Punkt
    modell.traverse((o) => {
      const m = o as THREE.SkinnedMesh
      // Haut und Bustier, erkannt am Material (Netznamen ändern sich beim Umwandeln)
      const mat = !m.isMesh ? "" : [].concat(m.material as never).map((x: THREE.Material) => x.name).join(",")
      if (!m.isSkinnedMesh || !m.visible || !/Skin|Bra/.test(mat)) return
      const n = m.geometry.getAttribute("position").count
      const schritt = Math.max(1, Math.floor(n / (/Skin_(Body|Leg|Arm)/.test(mat) ? 500 : 150)))
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
    const zuletzt = new Map<string, THREE.Quaternion>()
    for (const e of this.eintraege) {
      const quelle = e.gelenk === "becken" ? this.quelle.becken : this.quelle.k[e.gelenk]
      let ziel = weltQ(quelle)
      if (e.anteil !== undefined) {
        // Finger: zwischen Hand und Fingergelenk der Figur verteilen
        const hand = zuletzt.get("hand_" + e.gelenk.slice(-1)) ?? weltQ(this.quelle.k["hand_" + e.gelenk.slice(-1)])
        ziel = hand.clone().slerp(ziel, e.anteil)
      }
      zuletzt.set(e.gelenk, weltQ(quelle))
      ziel.multiply(e.korrektur)
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

  /** Freundlicher Ausdruck mit leichtem Lächeln, Blinzeln etwa alle 4 Sekunden. */
  gesicht(t: number) {
    const phase = t % 4.2
    const blinzeln = phase < 0.08 ? phase / 0.08 : phase < 0.16 ? 1 - (phase - 0.08) / 0.08 : 0
    const werte: Record<string, number> = { Mouth_Smile: 0.5, Cheek_Raise_L: 0.3, Cheek_Raise_R: 0.3, Eye_Squint_L: 0.1, Eye_Squint_R: 0.1, Brow_Raise_Inner_Left: 0.15, Brow_Raise_Inner_Right: 0.15, Eyes_Blink: blinzeln }
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

  /** Farben und Kleidung. Grenzen in Modell-Einheiten (Zentimeter in der Ruhehaltung). */
  private kleiden() {
    this.modell.traverse((o) => {
      const m = o as THREE.Mesh
      const mat = m.isMesh ? [].concat(m.material as never).map((x: THREE.Material) => x.name).join(",") : ""
      if (m.isMesh && /HAIR/i.test(m.name + mat)) {
        haareVerlaengern(m.geometry)
        if ((m as THREE.SkinnedMesh).isSkinnedMesh) this.haarNetz = m as THREE.SkinnedMesh
      }
      // Slip unter den Shorts ausblenden, sonst zeichnet er sich ab
      if (m.isMesh && /Underwear/.test(m.name + mat)) m.visible = false
      if (m.isMesh && m.morphTargetDictionary) this.gesichter.push(m)
    })
    const haut = "#d9a07a"
    const stoff = new THREE.Color("#4e2e24")
    const socke = new THREE.Color("#f2f2f0")
    const kleid = (m: THREE.MeshStandardMaterial) => {
      m.onBeforeCompile = (sh) => {
        sh.uniforms.uStoff = { value: stoff }
        sh.uniforms.uSocke = { value: socke }
        sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vRuhe;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvRuhe = position;")
        sh.fragmentShader = sh.fragmentShader
          .replace("#include <common>", "#include <common>\nvarying vec3 vRuhe;\nuniform vec3 uStoff;\nuniform vec3 uSocke;")
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
            // Ruhehaltung: z ist hier die Höhe (Z-oben im Modell)
            float h = vRuhe.z;
            float seite = abs(vRuhe.x);
            bool stoffig = false;
            // Scrunch-Shorts: hoher Bund bis knapp über den Nabel, Bein endet etwa 5 cm unter der Gesäßfalte (bei 79 cm)
            if (h > 74.0 && h < 101.5 && seite < 19.0) { diffuseColor.rgb = uStoff; stoffig = true; }
            // Bustier-Unterbrustband
            if (h > 111.5 && h < 117.5 && seite < 15.0) { diffuseColor.rgb = uStoff; stoffig = true; }
            // Söckchen
            if (h < 11.0) diffuseColor.rgb = uSocke;
            // Raffnaht hinten über dem Gesäß
            if (h > 84.0 && h < 96.0 && vRuhe.y > 6.0 && abs(abs(vRuhe.x) - (96.0 - h) * 0.28) < 0.35) diffuseColor.rgb *= 0.7;`,
          )
          // Stoff matt wie das Bustier, Haut seidig
          .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n if (stoffig) roughnessFactor = 0.85;")
      }
      m.customProgramCacheKey = () => "kleidung"
    }
    this.modell.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (!mesh.isMesh) return
      mesh.castShadow = true
      mesh.frustumCulled = false
      const ersetze = (alt: THREE.Material): THREE.Material => {
        const n = alt.name || ""
        const std = (farbe: string, rau = 0.6) => new THREE.MeshStandardMaterial({ name: n, color: farbe, roughness: rau })
        if (/Skin_(Body|Leg)/.test(n)) {
          const m = std(haut, 0.55)
          kleid(m)
          return m
        }
        if (/Skin_Head/.test(n)) {
          // Kopfhaut unter den Haarsträhnen in Haarfarbe (Scheitel und Hinterkopf)
          const m = std(haut, 0.55)
          m.onBeforeCompile = (sh) => {
            sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vRuhe;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvRuhe = position;")
            sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vRuhe;").replace(
              "#include <color_fragment>",
              `#include <color_fragment>
              float h = vRuhe.z;
              // weiche Übergänge, Ohren und Schläfen bleiben Haut
              float k = max(smoothstep(154.5, 156.5, h), smoothstep(150.5, 152.5, h) * smoothstep(-7.5, -5.5, vRuhe.y));
              k = max(k, smoothstep(147.0, 150.0, h) * smoothstep(2.0, 4.0, vRuhe.y));
              diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.09, 0.06), k);`,
            )
          }
          m.customProgramCacheKey = () => "kopfhaut"
          return m
        }
        if (/Skin|Arm/.test(n)) return std(haut, 0.55)
        if (/Nails/.test(n)) return std("#c98f7c", 0.4)
        if (/Eyelash|Eyebrow/.test(n)) return new THREE.MeshStandardMaterial({ name: n, color: "#2a1a14", roughness: 0.8 })
        if (/Hair/.test(n)) return haarMaterial(n, this.haar)
        if (/Cornea/.test(n)) return new THREE.MeshStandardMaterial({ name: n, color: "#ffffff", roughness: 0.05, transparent: true, opacity: 0.08, depthWrite: false })
        if (/Eye_[LR]/.test(n)) return augen(mesh as THREE.Mesh)
        if (/Bra|Underwear/.test(n)) return std("#4e2e24", 0.8)
        if (/Teeth/.test(n)) return std("#f1ece4", 0.4)
        if (/Tongue/.test(n)) return std("#b0605a", 0.5)
        if (/Occlusion|OEM3Dlusion|Tearline/.test(n)) return new THREE.MeshBasicMaterial({ visible: false })
        return alt
      }
      mesh.material = Array.isArray(mesh.material) ? mesh.material.map(ersetze) : ersetze(mesh.material)
    })
  }
}
