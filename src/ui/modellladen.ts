// Lädt das 3D-Modell der Dehnfigur aus dem TrainMe-Paket (modell/figur.bin), falls es beim Build dabei war. Fehlt
// es, bleibt die gezeichnete Figur. Wird nur einmal geladen.

import type * as THREE from "three"

let laden: Promise<THREE.Object3D | null> | null = null

export function modellLaden(url = (import.meta.env?.BASE_URL ?? "./") + "modell/figur.bin"): Promise<THREE.Object3D | null> {
  laden ??= (async () => {
    try {
      const antwort = await fetch(url)
      if (!antwort.ok) return null
      const paket = new Uint8Array(await antwort.arrayBuffer())
      const [{ entpacken }, { GLTFLoader }] = await Promise.all([import("./modellpaket"), import("three/examples/jsm/loaders/GLTFLoader.js")])
      const glb = entpacken(paket)
      const gltf = await new GLTFLoader().parseAsync(glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength) as ArrayBuffer, "")
      return gltf.scene
    } catch {
      return null
    }
  })()
  return laden
}
