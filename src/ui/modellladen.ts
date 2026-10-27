// Lädt das 3D-Modell der Dehnfigur aus dem TrainMe-Paket (modell/figur.bin, in der Lebenswelt trainme-figur.bin),
// falls es beim Build dabei war. Fehlt es, bleibt die gezeichnete Figur. Wird nur einmal geladen.

import type * as THREE from "three"

let laden: Promise<THREE.Object3D | null> | null = null

/** Im Lebenswelt-Build liegen alle Dateien flach nebeneinander, das Modell heißt dort trainme-figur.bin */
const STANDARD = (import.meta.env?.BASE_URL ?? "./") + (import.meta.env?.MODE === "lebenswelt" ? "trainme-figur.bin" : "modell/figur.bin")

export function modellLaden(url = STANDARD): Promise<THREE.Object3D | null> {
  laden ??= (async () => {
    try {
      const antwort = await fetch(url)
      if (!antwort.ok) return null
      const paket = new Uint8Array(await antwort.arrayBuffer())
      const [{ entpacken }, { GLTFLoader }, { verfeinern }] = await Promise.all([import("./modellpaket"), import("three/examples/jsm/loaders/GLTFLoader.js"), import("./verfeinern")])
      const glb = entpacken(paket)
      const gltf = await new GLTFLoader().parseAsync(glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength) as ArrayBuffer, "")
      // Für die Nahansicht fein: alle Hautnetze einmal, Rumpf, Beine und Kopf ein zweites Mal (rund 325.000 Dreiecke)
      verfeinern(gltf.scene, /Skin_(Body|Leg|Arm|Head)/, 1)
      verfeinern(gltf.scene, /Skin_(Body|Leg|Head)/, 2)
      return gltf.scene
    } catch {
      return null
    }
  })()
  return laden
}
