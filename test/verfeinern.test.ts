import { describe, expect, it } from "vitest"
import * as THREE from "three"
import { verfeinern } from "../src/ui/verfeinern"

/** Kugel als Hautnetz mit Knochengewichten, ohne gemeinsame Eckpunkte (wie im Modell) */
function netz(name: string, geo: THREE.BufferGeometry) {
  const g = geo.toNonIndexed()
  const n = g.getAttribute("position").count
  g.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(new Uint16Array(n * 4).map((_, i) => (i % 4 === 1 ? 1 : 0)), 4))
  g.setAttribute("skinWeight", new THREE.Float32BufferAttribute(new Float32Array(n * 4).map((_, i) => (i % 4 === 0 ? 0.7 : i % 4 === 1 ? 0.3 : 0)), 4))
  return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ name }))
}

describe("Haut verfeinern", () => {
  it("unterteilt Rumpf in vierfach so viele Dreiecke, Gewichte bleiben gültig", () => {
    const wurzel = new THREE.Group()
    const rumpf = netz("EM3D_Skin_Body", new THREE.IcosahedronGeometry(10, 1))
    wurzel.add(rumpf)
    const vorher = rumpf.geometry.getAttribute("position").count / 3
    verfeinern(wurzel)
    const g = rumpf.geometry
    expect(g.getAttribute("position").count / 3).toBe(vorher * 4)
    const w = g.getAttribute("skinWeight")
    for (let i = 0; i < w.count; i += 37) expect(w.getX(i) + w.getY(i) + w.getZ(i) + w.getW(i)).toBeCloseTo(1)
    // geglättet, aber nah an der Kugel
    const p = new THREE.Vector3()
    for (let i = 0; i < g.getAttribute("position").count; i += 11) expect(p.fromBufferAttribute(g.getAttribute("position") as THREE.BufferAttribute, i).length()).toBeGreaterThan(8)
    // zweiter Aufruf ändert nichts
    verfeinern(wurzel)
    expect(rumpf.geometry).toBe(g)
  })

  it("lässt Arme und Haare unverändert", () => {
    const wurzel = new THREE.Group()
    const arm = netz("EM3D_Skin_Arm", new THREE.IcosahedronGeometry(5, 1))
    const haar = netz("Hair_Transparency", new THREE.IcosahedronGeometry(5, 1))
    wurzel.add(arm, haar)
    const a = arm.geometry, h = haar.geometry
    verfeinern(wurzel)
    expect(arm.geometry).toBe(a)
    expect(haar.geometry).toBe(h)
  })
})
