// Körpergewicht: Einzelwerte schwanken von Tag zu Tag (Wasser, Essen), aussagekräftig sind der 7-Tage-Schnitt und
// der Trend über vier Wochen (lineare Regression, kg pro Woche).

import type { Messpunkt } from "./typen"

const TAG = 86400000
const zeit = (d: string) => Date.parse(d + "T12:00:00Z")

/** Wert eines Tages eintragen oder ersetzen, nach Datum sortiert. */
export function eintragen(liste: Messpunkt[] | undefined, datum: string, kg: number): Messpunkt[] {
  const rest = (liste || []).filter((m) => m.datum !== datum)
  return [...rest, { datum, kg: Math.round(kg * 10) / 10 }].sort((a, b) => (a.datum < b.datum ? -1 : 1))
}

/**
 * Wert aus der Lebenswelt übernehmen. Ohne Messdatum zählt er für heute, aber nur, wenn er sich vom letzten Eintrag
 * unterscheidet: Sonst würde dieselbe alte Messung jeden Tag neu eingetragen und den Trend verfälschen.
 */
export function ausLebenswelt(liste: Messpunkt[] | undefined, heute: string, kg: number, datum?: string): Messpunkt[] {
  const alt = liste || []
  if (datum) return alt.some((m) => m.datum === datum && m.kg === Math.round(kg * 10) / 10) ? alt : eintragen(alt, datum, kg)
  const letzter = alt[alt.length - 1]
  if (letzter && Math.abs(letzter.kg - kg) < 0.05) return alt
  return eintragen(alt, heute, kg)
}

/** Schnitt der letzten tage Tage bis einschließlich datum, oder null ohne Werte. */
export function schnitt(liste: Messpunkt[], datum: string, tage = 7): number | null {
  const t = zeit(datum)
  const w = liste.filter((m) => zeit(m.datum) <= t && zeit(m.datum) > t - tage * TAG)
  return w.length ? w.reduce((s, m) => s + m.kg, 0) / w.length : null
}

/** Trend in kg pro Woche über die letzten 28 Tage. Braucht mindestens 3 Werte über mindestens 7 Tage. */
export function trend(liste: Messpunkt[]): number | null {
  if (liste.length < 3) return null
  const letzte = zeit(liste[liste.length - 1].datum)
  const w = liste.filter((m) => zeit(m.datum) > letzte - 28 * TAG)
  if (w.length < 3) return null
  const xs = w.map((m) => (zeit(m.datum) - letzte) / TAG)
  if (Math.max(...xs) - Math.min(...xs) < 7) return null
  const ys = w.map((m) => m.kg)
  const mx = xs.reduce((a, b) => a + b, 0) / xs.length
  const my = ys.reduce((a, b) => a + b, 0) / ys.length
  const nenner = xs.reduce((a, x) => a + (x - mx) ** 2, 0)
  if (nenner < 1e-9) return null
  return (xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0) / nenner) * 7
}

/** Verlauf als 7-Tage-Schnitt je Messtag (für die Kurve). */
export function schnittVerlauf(liste: Messpunkt[]): { datum: string; wert: number }[] {
  return liste.map((m) => ({ datum: m.datum, wert: Math.round((schnitt(liste, m.datum) ?? m.kg) * 10) / 10 }))
}
