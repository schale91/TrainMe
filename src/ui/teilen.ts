// Sicherung als Datei: auf dem Handy über das Teilen-Menü (Drive, Mail, Dateien), auch in der Web-App auf dem iPhone;
// am Computer als Download.

import { Capacitor } from "@capacitor/core"
import { Directory, Encoding, Filesystem } from "@capacitor/filesystem"
import { Share } from "@capacitor/share"

/** Gibt false zurück, wenn das Teilen-Menü ohne Auswahl geschlossen wurde. */
export async function dateiTeilen(name: string, inhalt: string): Promise<boolean> {
  if (Capacitor.isNativePlatform()) {
    const r = await Filesystem.writeFile({ path: name, data: inhalt, directory: Directory.Cache, encoding: Encoding.UTF8 })
    await Share.share({ title: name, url: r.uri, dialogTitle: "Sicherung speichern oder senden" })
    return true
  }
  // Web-App auf dem Handy: Downloads landen dort (vor allem auf dem iPhone vom Home-Bildschirm) oft nirgends sichtbar
  const datei = new File([inhalt], name, { type: "application/json" })
  const handy = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches
  if (handy && navigator.canShare?.({ files: [datei] })) {
    try {
      await navigator.share({ files: [datei], title: name })
      return true
    } catch (e) {
      if ((e as Error)?.name === "AbortError") return false
      // sonst unten als Download
    }
  }
  const a = document.createElement("a")
  a.href = URL.createObjectURL(new Blob([inhalt], { type: "application/json" }))
  a.download = name
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  return true
}
