// Anteil des Satzgewichts am Maximum (für den Ring neben dem Gewicht im Training, Anregung aus dem Vergleich mit einer
// anderen Trainings-App, 16.11.2026). Das Maximum ist das eingetragene oder, wenn das Training danach ein höheres
// ergibt, das aus den eigenen Sätzen geschätzte (siehe maximum in eigenerPlan).

import { maximum } from "./eigenerPlan"
import type { Daten, Uebung } from "./typen"

export interface ProzentVomMax {
  /** ganze Prozent, auch über 100 */
  prozent: number
  /** das Maximum, mit dem gerechnet wurde, in kg */
  kg: number
  quelle: "max" | "verlauf"
  datum: string
}

const nurBand = (u: Uebung) => u.geraete.length > 0 && u.geraete.every((g) => g.indexOf("band") >= 0 || g.indexOf("mini_band") >= 0)

/**
 * Prozent vom Maximum für ein Satzgewicht, oder null, wenn der Wert nichts sagt: ohne Gewicht, Körpergewichtsübungen,
 * Bänder, Schnellkraft, ohne bekanntes Maximum, und bei hohen Wiederholungen (über 12), wo ein aus den Sätzen
 * geschätztes Maximum zu ungenau ist (ein eingetragenes Maximum gilt immer).
 */
export function prozentVomMaximum(daten: Daten, u: Uebung, last: number | null | undefined, wdhBis: number): ProzentVomMax | null {
  if (!last || last <= 0 || u.belastung !== "gewicht" || u.muster.indexOf("schnellkraft") === 0 || nurBand(u)) return null
  const m = maximum(daten, u.id)
  if (!m || m.kg <= 0) return null
  if (m.quelle === "verlauf" && wdhBis > 12) return null
  return { prozent: Math.round((last / m.kg) * 100), kg: m.kg, quelle: m.quelle, datum: m.datum }
}
