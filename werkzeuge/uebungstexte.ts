// Vite-Baustein: teilt die Übungsdatenbank in zwei Pakete, damit die App schneller startet.
//
// Die Dateien in src/daten/uebungen enthalten je Übung die Stammdaten (Name, Muster, Geräte …) und die ausführliche
// Anleitung (info). Die Anleitungen machen den größten Teil aus, gebraucht werden sie erst im Info-Fenster.
//   virtual:uebungen-kern   alle Übungen mit info.kurz, im Hauptpaket
//   virtual:uebungen-texte  { id: info } vollständig, als eigenes Paket, wird nach dem Start nachgeladen
// Gilt für Entwicklung, Tests und Bau gleich, damit sich die App überall gleich verhält.

import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import ts from "typescript"
import type { Plugin } from "vite"

const KERN = "virtual:uebungen-kern"
const TEXTE = "virtual:uebungen-texte"

interface Eintrag {
  id: string
  info: Record<string, unknown> & { kurz: string }
}

async function lies(ordner: string): Promise<{ dateien: string[]; uebungen: Eintrag[] }> {
  const dateien = readdirSync(ordner)
    .filter((d) => d.endsWith(".ts") && d !== "index.ts")
    .sort()
    .map((d) => join(ordner, d))
  const uebungen: Eintrag[] = []
  for (const datei of dateien) {
    const js = ts.transpileModule(readFileSync(datei, "utf8"), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
    const modul = (await import("data:text/javascript;base64," + Buffer.from(js).toString("base64"))) as Record<string, unknown>
    for (const wert of Object.values(modul)) if (Array.isArray(wert)) uebungen.push(...(wert as Eintrag[]))
  }
  return { dateien, uebungen }
}

/** Als JSON.parse("…"): Das liest der Browser deutlich schneller ein als ein großes Objekt im Programmtext. */
const alsModul = (wert: unknown) => "export default JSON.parse(" + JSON.stringify(JSON.stringify(wert)) + ")"

export default function uebungsTexte(wurzel: string): Plugin {
  const ordner = join(wurzel, "src/daten/uebungen")
  return {
    name: "trainme-uebungstexte",
    resolveId(id) {
      return id === KERN || id === TEXTE ? "\0" + id : null
    },
    async load(id) {
      if (id !== "\0" + KERN && id !== "\0" + TEXTE) return null
      const { dateien, uebungen } = await lies(ordner)
      for (const d of dateien) this.addWatchFile(d)
      if (id === "\0" + KERN) return alsModul(uebungen.map((u) => ({ ...u, info: { kurz: u.info.kurz } })))
      return alsModul(Object.fromEntries(uebungen.map((u) => [u.id, u.info])))
    },
  }
}
