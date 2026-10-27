// Bildschirm bleibt an, solange eine Einheit offen ist: In der APK über das Fensterflag (nativ), sonst über die
// Wake-Lock-Schnittstelle des Browsers. Ohne beides passiert nichts.

import { Capacitor, registerPlugin } from "@capacitor/core"
import { useEffect } from "react"

const Timer = registerPlugin<{ wachHalten(o: { an: boolean }): Promise<void> }>("PausenTimer")

type Sperre = { release: () => Promise<void> }
type MitWakeLock = Navigator & { wakeLock?: { request: (art: "screen") => Promise<Sperre> } }

export function useWachHalten(aktiv = true) {
  useEffect(() => {
    if (!aktiv || typeof window === "undefined") return
    let sperre: Sperre | null = null
    let aus = false
    const nativ = Capacitor.isNativePlatform()
    const holen = async () => {
      if (aus || document.visibilityState !== "visible") return
      // nativ über das Fensterflag; fehlt das Plugin (z. B. eingebettet in eine andere App), wie im Browser
      if (nativ && (await Timer.wachHalten({ an: true }).then(() => true, () => false))) return
      const wl = (navigator as MitWakeLock).wakeLock
      if (!wl || sperre) return
      try {
        sperre = await wl.request("screen")
        // Das System gibt die Sperre beim Wechsel in den Hintergrund frei
        ;(sperre as unknown as EventTarget).addEventListener?.("release", () => (sperre = null))
      } catch {
        sperre = null
      }
    }
    void holen()
    document.addEventListener("visibilitychange", holen)
    return () => {
      aus = true
      document.removeEventListener("visibilitychange", holen)
      if (nativ) void Timer.wachHalten({ an: false }).catch(() => undefined)
      void sperre?.release().catch(() => undefined)
    }
  }, [aktiv])
}
