// Laufendes Training sicher zwischenspeichern: je Einheit ein eigener Entwurf (Datum|Titel), damit das Öffnen einer
// anderen Einheit den Stand nicht überschreibt, und die gerade offene Einheit, damit die App nach einem Neustart
// (Android beendet sie im Hintergrund gern) direkt wieder im Training landet statt auf „Heute“.

export const ENTWUERFE = "trainme.entwuerfe"
/** früherer Speicherplatz für genau einen Entwurf, wird beim Lesen übernommen */
export const ENTWURF_ALT = "trainme.entwurf"
export const OFFEN = "trainme.offen"

type Speicher = Pick<Storage, "getItem" | "setItem" | "removeItem">
interface MitSaetzen {
  saetze?: { fertig?: boolean }[][]
}

function lies<T>(sp: Speicher, k: string, sonst: T): T {
  try {
    const x = JSON.parse(sp.getItem(k) || "null")
    return x === null || x === undefined ? sonst : (x as T)
  } catch {
    return sonst
  }
}

function alle(sp: Speicher): Record<string, unknown> {
  const map = lies<Record<string, unknown>>(sp, ENTWUERFE, {})
  const alt = lies<{ schluessel?: string } | null>(sp, ENTWURF_ALT, null)
  if (alt && typeof alt.schluessel === "string" && !map[alt.schluessel]) map[alt.schluessel] = alt
  return map
}

/** Entwurf einer Einheit (Schlüssel „JJJJ-MM-TT|Titel“) oder null. */
export function entwurfLesen<T>(sp: Speicher, schluessel: string): T | null {
  return (alle(sp)[schluessel] as T) ?? null
}

/** Entwurf speichern; Entwürfe, die älter als zwei Tage sind, fallen dabei weg. */
export function entwurfSchreiben(sp: Speicher, schluessel: string, entwurf: unknown, heute: string): void {
  const grenze = new Date(Date.parse(heute + "T12:00:00Z") - 2 * 864e5).toISOString().slice(0, 10)
  const map = alle(sp)
  map[schluessel] = entwurf
  for (const k of Object.keys(map)) if (k.slice(0, 10) < grenze) delete map[k]
  try {
    sp.setItem(ENTWUERFE, JSON.stringify(map))
    sp.removeItem(ENTWURF_ALT)
  } catch {
    /* Speicher voll oder gesperrt */
  }
}

export function entwurfLoeschen(sp: Speicher, schluessel: string): void {
  const map = alle(sp)
  delete map[schluessel]
  try {
    sp.setItem(ENTWUERFE, JSON.stringify(map))
    sp.removeItem(ENTWURF_ALT)
  } catch {
    /* egal */
  }
}

/** Hat der Entwurf mindestens einen abgehakten Satz? */
export function hatFortschritt(e: MitSaetzen | null): boolean {
  return !!e?.saetze?.some((l) => l.some((s) => s.fertig))
}

/** Die gerade offene Einheit merken (null: kein Training offen). */
export function offenMerken<E extends { datum: string; titel: string }>(sp: Speicher, e: E | null): void {
  try {
    if (e) sp.setItem(OFFEN, JSON.stringify(e))
    else sp.removeItem(OFFEN)
  } catch {
    /* egal */
  }
}

/** Nach einem Neustart: die zuletzt offene Einheit von heute, wenn es dazu schon abgehakte Sätze gibt. */
export function offenWiederherstellen<E extends { datum: string; titel: string }>(sp: Speicher, heute: string): E | null {
  const e = lies<E | null>(sp, OFFEN, null)
  if (!e || typeof e.datum !== "string" || typeof e.titel !== "string" || e.datum !== heute) return null
  return hatFortschritt(entwurfLesen<MitSaetzen>(sp, e.datum + "|" + e.titel)) ? e : null
}
