// Sicherung als Datei: auf dem Handy über das Teilen-Menü (Drive, Mail, Dateien), im Browser als Download.

import { Capacitor } from "@capacitor/core"
import { Directory, Encoding, Filesystem } from "@capacitor/filesystem"
import { Share } from "@capacitor/share"

export async function dateiTeilen(name: string, inhalt: string): Promise<void> {
  if (Capacitor.isNativePlatform()) {
    const r = await Filesystem.writeFile({ path: name, data: inhalt, directory: Directory.Cache, encoding: Encoding.UTF8 })
    await Share.share({ title: name, url: r.uri, dialogTitle: "Sicherung speichern oder senden" })
    return
  }
  const a = document.createElement("a")
  a.href = URL.createObjectURL(new Blob([inhalt], { type: "application/json" }))
  a.download = name
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}
