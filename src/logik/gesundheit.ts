// Gesundheitswerte aus zwei Quellen: Health Connect auf dem Handy und die Garmin-Uhr über die Lebenswelt. Je Wert
// gilt, was gerade aussagekräftiger ist: Schritte zählen Handy und Uhr, also der höhere Wert (wer die Uhr nicht trägt,
// hat dort wenige); Schlaf, Ruhepuls und HRV misst nur die Uhr gut, also die Uhr, wenn sie für den Tag etwas hat,
// sonst Health Connect.

import type { Daten, Tageswerte } from "./typen"

export function mischen(hc?: Tageswerte, uhr?: Tageswerte): Tageswerte | undefined {
  if (!hc && !uhr) return undefined
  const t: Tageswerte = {}
  const s = Math.max(hc?.schritte || 0, uhr?.schritte || 0)
  if (s > 0) t.schritte = s
  for (const k of ["schlaf_min", "ruhepuls", "hrv"] as const) {
    const v = uhr?.[k] || hc?.[k]
    if (v) t[k] = v
  }
  return Object.keys(t).length ? t : undefined
}

/** Werte eines Tages aus allen Quellen, oder undefined. */
export function tageswerte(daten: Daten, tag: string): Tageswerte | undefined {
  const g = daten.gesundheit
  if (!g) return undefined
  return mischen(g.verbunden ? g.tage[tag] : undefined, g.garmin?.tage[tag])
}

/** Alle Tage mit Werten, für Verläufe (z. B. Ruhepuls-Schnitt). */
export function alleTage(daten: Daten): Record<string, Tageswerte> {
  const g = daten.gesundheit
  if (!g) return {}
  const aus: Record<string, Tageswerte> = {}
  for (const tag of new Set([...(g.verbunden ? Object.keys(g.tage) : []), ...Object.keys(g.garmin?.tage || {})])) {
    const t = tageswerte(daten, tag)
    if (t) aus[tag] = t
  }
  return aus
}

/**
 * Schwache Tagesform aus den Werten der Uhr, gegen die eigenen letzten Tage: wenig Schlaf, Ruhepuls deutlich über
 * dem Schnitt, HRV deutlich unter dem Schnitt. Je Zeichen ein oder zwei Punkte; ab zwei Punkten gilt die Form als
 * schwach. Schlafmangel senkt die Leistung nachweislich (Craven et al. 2022); ein erhöhter Ruhepuls und eine niedrige
 * HRV gegenüber dem eigenen Schnitt deuten auf unvollständige Erholung (Plews et al. 2013). Für die Last selbst bleibt
 * die Reserve im Tank das Maß, deshalb ist das nur ein Vorschlag.
 */
export function formSchwach(heute?: Tageswerte, vorher: Tageswerte[] = []): { punkte: number; gruende: string[] } {
  const gruende: string[] = []
  let punkte = 0
  if (!heute) return { punkte, gruende }
  const schnitt = (k: "ruhepuls" | "hrv") => {
    const l = vorher.slice(-7).map((t) => t[k]).filter((x): x is number => !!x)
    return l.length >= 3 ? l.reduce((a, b) => a + b, 0) / l.length : undefined
  }
  if (heute.schlaf_min !== undefined && heute.schlaf_min < 360) {
    punkte += heute.schlaf_min < 300 ? 2 : 1
    gruende.push("nur " + Math.floor(heute.schlaf_min / 60) + " h " + (heute.schlaf_min % 60) + " min Schlaf")
  }
  const puls = schnitt("ruhepuls")
  if (heute.ruhepuls && puls && heute.ruhepuls > puls + 5) {
    punkte += heute.ruhepuls > puls + 8 ? 2 : 1
    gruende.push("Ruhepuls " + heute.ruhepuls + " statt sonst etwa " + Math.round(puls))
  }
  const hrv = schnitt("hrv")
  if (heute.hrv && hrv && heute.hrv < hrv * 0.85) {
    punkte += heute.hrv < hrv * 0.75 ? 2 : 1
    gruende.push("HRV " + heute.hrv + " ms statt sonst etwa " + Math.round(hrv))
  }
  return { punkte, gruende }
}
