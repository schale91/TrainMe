// Lädt das 3D-Modell der Dehnfigur (src/figur/figur.glb, aus MakeHuman gebaut, CC0). Vite legt es als Datei neben die
// App, auch im flachen Lebenswelt-Build. Fehlt es oder lässt es sich nicht lesen, bleibt die gezeichnete Figur.
// Wird nur einmal geladen.

import type * as THREE from "three"

let laden: Promise<THREE.Object3D | null> | null = null

export function modellLaden(url = new URL("../figur/figur.glb", import.meta.url).href): Promise<THREE.Object3D | null> {
  laden ??= (async () => {
    try {
      const antwort = await fetch(url)
      if (!antwort.ok) return null
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js")
      const gltf = await new GLTFLoader().parseAsync(await antwort.arrayBuffer(), "")
      return gltf.scene
    } catch {
      return null
    }
  })()
  return laden
}
