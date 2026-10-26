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
