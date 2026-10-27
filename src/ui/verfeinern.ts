// Feinere, rundere Haut für das Modell: Loop-Unterteilung (jedes Dreieck wird zu vier, Ecken und Kanten werden
// geglättet) für Rumpf und Beine, die im Spielmodell am gröbsten sind. Arme, Kopf und Haare bleiben, wie sie sind.
// Nähte zu nicht unterteilten Netzen bleiben fest, damit keine Spalten entstehen.

import * as THREE from "three"

const TEILEN = /Skin_(Body|Leg)/
const HAUT = /Skin_(Body|Leg|Arm|Head)/

interface Netz {
  mesh: THREE.Mesh
  geo: THREE.BufferGeometry
  teilen: boolean
  /** Ecke → Eckpunkt im Netz */
  ecken: ArrayLike<number>
  /** Eckpunkt → verschweißter Punkt (gleiche Lage über alle Netze) */
  punkt: Int32Array
}

const matName = (m: THREE.Mesh) => ([] as THREE.Material[]).concat(m.material).map((x) => x.name).join(",")

/** Einfluss zweier Eckpunkte mischen: die vier stärksten Knochen behalten */
function gewichte(i1: number[], w1: number[], i2: number[], w2: number[]): [number[], number[]] {
  const summe = new Map<number, number>()
  for (let k = 0; k < 4; k++) {
    if (w1[k] > 0) summe.set(i1[k], (summe.get(i1[k]) ?? 0) + w1[k] * 0.5)
    if (w2[k] > 0) summe.set(i2[k], (summe.get(i2[k]) ?? 0) + w2[k] * 0.5)
  }
  const liste = [...summe].sort((a, b) => b[1] - a[1]).slice(0, 4)
  const ges = liste.reduce((s, x) => s + x[1], 0) || 1
  while (liste.length < 4) liste.push([0, 0])
  return [liste.map((x) => x[0]), liste.map((x) => x[1] / ges)]
}

export function verfeinern(modell: THREE.Object3D) {
  const netze: Netz[] = []
  modell.traverse((o) => {
    const m = o as THREE.Mesh
    if (!m.isMesh || !HAUT.test(matName(m)) || m.geometry.userData.verfeinert) return
    const geo = m.geometry
    const pos = geo.getAttribute("position")
    const ecken = geo.index ? geo.index.array : Array.from({ length: pos.count }, (_, i) => i)
    netze.push({ mesh: m, geo, teilen: TEILEN.test(matName(m)), ecken, punkt: new Int32Array(pos.count).fill(-1) })
  })
  if (!netze.some((n) => n.teilen)) return

  // Verschweißen über die Lage (das Modell hat je Ecke eigene Eckpunkte)
  const schluessel = new Map<string, number>()
  const lage: THREE.Vector3[] = []
  const v = new THREE.Vector3()
  for (const n of netze) {
    const pos = n.geo.getAttribute("position")
    for (let e = 0; e < n.ecken.length; e++) {
      const i = n.ecken[e]
      if (n.punkt[i] >= 0) continue
      v.fromBufferAttribute(pos, i)
      const k = `${Math.round(v.x * 1000)},${Math.round(v.y * 1000)},${Math.round(v.z * 1000)}`
      let id = schluessel.get(k)
      if (id === undefined) {
        id = lage.length
        schluessel.set(k, id)
        lage.push(v.clone())
      }
      n.punkt[i] = id
    }
  }

  // Kanten mit ihren gegenüberliegenden Punkten, Nachbarn je Punkt, feste Punkte (Rand oder Naht)
  const kanten = new Map<string, { gegen: number[]; naht: boolean }>()
  const nachbarn: Set<number>[] = lage.map(() => new Set())
  const fest = new Uint8Array(lage.length)
  const kante = (a: number, b: number) => (a < b ? a + "_" + b : b + "_" + a)
  for (const n of netze)
    for (let e = 0; e < n.ecken.length; e += 3) {
      const p = [n.punkt[n.ecken[e]], n.punkt[n.ecken[e + 1]], n.punkt[n.ecken[e + 2]]]
      for (let k = 0; k < 3; k++) {
        const a = p[k], b = p[(k + 1) % 3], c = p[(k + 2) % 3]
        const x = kanten.get(kante(a, b)) ?? { gegen: [], naht: false }
        x.gegen.push(c)
        if (!n.teilen) x.naht = true
        kanten.set(kante(a, b), x)
        nachbarn[a].add(b)
        nachbarn[b].add(a)
        if (!n.teilen) fest[a] = fest[b] = 1
      }
    }
  for (const [k, x] of kanten)
    if (x.gegen.length !== 2) {
      const [a, b] = k.split("_").map(Number)
      fest[a] = fest[b] = 1
    }

  // Neue Lage der alten Punkte (Loop-Regel), feste bleiben
  const neu = lage.map((p, i) => {
    if (fest[i]) return p.clone()
    const nb = [...nachbarn[i]]
    const z = nb.length
    const beta = z === 3 ? 3 / 16 : 3 / (8 * z)
    const s = new THREE.Vector3()
    for (const j of nb) s.add(lage[j])
    return p.clone().multiplyScalar(1 - z * beta).addScaledVector(s, beta)
  })
  // Kantenpunkte: innen 3/8 + 3/8 + 1/8 + 1/8, an Nähten und Rändern genau die Mitte (sonst Spalten)
  const kantenpunkt = new Map<string, THREE.Vector3>()
  for (const [k, x] of kanten) {
    const [a, b] = k.split("_").map(Number)
    const m = lage[a].clone().add(lage[b]).multiplyScalar(0.5)
    if (!x.naht && x.gegen.length === 2) m.multiplyScalar(0.75).addScaledVector(lage[x.gegen[0]].clone().add(lage[x.gegen[1]]), 0.125)
    kantenpunkt.set(k, m)
  }

  for (const n of netze) {
    if (!n.teilen) continue
    const g = n.geo
    const namen = Object.keys(g.attributes)
    const quelle = namen.map((name) => g.getAttribute(name))
    const morph = (g.morphAttributes.position || []).map((a) => a)
    const anzahl = (n.ecken.length / 3) * 12
    const ziel = quelle.map((a) => new Float32Array(anzahl * a.itemSize))
    const morphZiel = morph.map(() => new Float32Array(anzahl * 3))
    const iSkin = namen.indexOf("skinIndex"), iGew = namen.indexOf("skinWeight"), iPos = namen.indexOf("position"), iNorm = namen.indexOf("normal")
    let o = 0
    // Ecke schreiben: aus einem Eckpunkt (b < 0) oder als Mitte zweier Eckpunkte a und b
    const schreibe = (a: number, b: number, lagePunkt: THREE.Vector3) => {
      for (let q = 0; q < quelle.length; q++) {
        const at = quelle[q], s = at.itemSize, z = ziel[q]
        if (q === iSkin || q === iGew) continue
        for (let c = 0; c < s; c++) z[o * s + c] = b < 0 ? at.getComponent(a, c) : (at.getComponent(a, c) + at.getComponent(b, c)) / 2
        if (q === iNorm && b >= 0) {
          v.set(z[o * 3], z[o * 3 + 1], z[o * 3 + 2]).normalize()
          z[o * 3] = v.x
          z[o * 3 + 1] = v.y
          z[o * 3 + 2] = v.z
        }
      }
      if (iPos >= 0) {
        ziel[iPos][o * 3] = lagePunkt.x
        ziel[iPos][o * 3 + 1] = lagePunkt.y
        ziel[iPos][o * 3 + 2] = lagePunkt.z
      }
      if (iSkin >= 0 && iGew >= 0) {
        const ia = [0, 1, 2, 3].map((c) => quelle[iSkin].getComponent(a, c)), wa = [0, 1, 2, 3].map((c) => quelle[iGew].getComponent(a, c))
        let [ii, ww] = [ia, wa]
        if (b >= 0) [ii, ww] = gewichte(ia, wa, [0, 1, 2, 3].map((c) => quelle[iSkin].getComponent(b, c)), [0, 1, 2, 3].map((c) => quelle[iGew].getComponent(b, c)))
        for (let c = 0; c < 4; c++) {
          ziel[iSkin][o * 4 + c] = ii[c]
          ziel[iGew][o * 4 + c] = ww[c]
        }
      }
      morph.forEach((m, k) => {
        for (let c = 0; c < 3; c++) morphZiel[k][o * 3 + c] = b < 0 ? m.getComponent(a, c) : (m.getComponent(a, c) + m.getComponent(b, c)) / 2
      })
      o++
    }
    for (let e = 0; e < n.ecken.length; e += 3) {
      const c = [n.ecken[e], n.ecken[e + 1], n.ecken[e + 2]]
      const p = c.map((i) => n.punkt[i])
      const m01 = kantenpunkt.get(kante(p[0], p[1]))!, m12 = kantenpunkt.get(kante(p[1], p[2]))!, m20 = kantenpunkt.get(kante(p[2], p[0]))!
      const ecke = (k: number) => schreibe(c[k], -1, neu[p[k]])
      const mitte = (k: number) => [() => schreibe(c[0], c[1], m01), () => schreibe(c[1], c[2], m12), () => schreibe(c[2], c[0], m20)][k]()
      // vier Dreiecke, gleiche Umlaufrichtung wie das alte
      ecke(0); mitte(0); mitte(2)
      mitte(0); ecke(1); mitte(1)
      mitte(2); mitte(1); ecke(2)
      mitte(0); mitte(1); mitte(2)
    }
    const fein = new THREE.BufferGeometry()
    namen.forEach((name, q) => fein.setAttribute(name, new THREE.BufferAttribute(ziel[q], quelle[q].itemSize, quelle[q].normalized)))
    if (morph.length) {
      fein.morphAttributes.position = morphZiel.map((z) => new THREE.BufferAttribute(z, 3))
      fein.morphTargetsRelative = g.morphTargetsRelative
    }
    fein.userData = { ...g.userData, verfeinert: true }
    fein.computeBoundingBox()
    fein.computeBoundingSphere()
    n.mesh.geometry = fein
  }
}
