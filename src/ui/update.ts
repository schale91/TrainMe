// Sucht online nach einer neueren APK. Ohne Netz passiert nichts, die App bleibt offline nutzbar.

import { RELEASES_API, neuestesUpdate, type Release, type UpdateInfo } from "../logik/update"

const SPEICHER = "trainme.update"
const ALTER_MS = 6 * 3600 * 1000

type Stand = { zeit: number; build: number; info: UpdateInfo | null }

function gemerkt(): Stand | null {
  try {
    const s = JSON.parse(localStorage.getItem(SPEICHER) || "null") as Stand | null
    return s && s.build === __BUILD__ ? s : null
  } catch {
    return null
  }
}

/** Letztes bekanntes Ergebnis, ohne Netz. */
export function updateBekannt(): UpdateInfo | null {
  return gemerkt()?.info ?? null
}

/** Höchstens alle 6 Stunden online nachsehen, außer jetzt ist ausdrücklich gewünscht. */
export async function updateSuchen(jetzt = false): Promise<UpdateInfo | null> {
  if (!__BUILD__ || __KANAL__ === "lokal") return null
  const alt = gemerkt()
  if (!jetzt && alt && Date.now() - alt.zeit < ALTER_MS) return alt.info
  const abbruch = new AbortController()
  const t = setTimeout(() => abbruch.abort(), 8000)
  try {
    const r = await fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" }, signal: abbruch.signal })
    if (!r.ok) throw new Error("GitHub antwortet mit " + r.status)
    const info = neuestesUpdate((await r.json()) as Release[], __BUILD__, __KANAL__)
    try {
      localStorage.setItem(SPEICHER, JSON.stringify({ zeit: Date.now(), build: __BUILD__, info } satisfies Stand))
    } catch {
      /* egal */
    }
    return info
  } finally {
    clearTimeout(t)
  }
}

/** Hinweis für diese Version weggeklickt? */
export function updateAusgeblendet(version: string): boolean {
  try {
    return localStorage.getItem(SPEICHER + ".weg") === version
  } catch {
    return false
  }
}

export function updateAusblenden(version: string) {
  try {
    localStorage.setItem(SPEICHER + ".weg", version)
  } catch {
    /* egal */
  }
}
