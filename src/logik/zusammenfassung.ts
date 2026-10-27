// Nach der Einheit: geschätztes Maximum je Gewichtsübung im Vergleich zum bisherigen, und wo ein eingetragenes
// Maximum (Einstufung, Kraftbuch) überholt wurde, der Vorschlag, es zu übernehmen.

import { uebung } from "../daten/uebungen/index"
import { maximum } from "./eigenerPlan"
import { belastbaresE1rm } from "./progression"
import type { Daten, Protokoll } from "./typen"

export interface MaxZeile {
  uebung: string
  /** geschätztes Maximum aus den Sätzen von heute */
  heute: number
  /** bisher gültiges Maximum (eingetragen oder aus den letzten Einheiten) */
  vorher: number | null
  /** neuer Wert für das eingetragene Maximum, wenn heute mehr ging */
  vorschlag: number | null
}

const halb = (x: number) => Math.round(x * 2) / 2

/**
 * Nur Sätze bis 10 Wiederholungen: Je weniger Wiederholungen, desto genauer die Schätzung (Reynolds et al. 2006, am
 * genauesten aus 5 Wiederholungen).
 */
export function maxZusammenfassung(daten: Daten, protokolle: Protokoll[], datum: string): MaxZeile[] {
  const zeilen: MaxZeile[] = []
  for (const p of protokolle) {
    // Würfe und Sprünge: ein geschätztes Maximum sagt dort nichts aus
    if (uebung(p.uebung)?.muster.indexOf("schnellkraft") === 0) continue
    const heute = halb(belastbaresE1rm(p.saetze.filter((s) => s.last && s.wdh > 0 && s.wdh <= 10)))
    if (!heute) continue
    const vorher = maximum(daten, p.uebung, datum)
    const eingetragen = daten.maxwerte?.[p.uebung]?.kg
    zeilen.push({ uebung: p.uebung, heute, vorher: vorher ? halb(vorher.kg) : null, vorschlag: eingetragen && heute >= eingetragen + 0.5 ? heute : null })
  }
  return zeilen.sort((a, b) => b.heute - a.heute).slice(0, 8)
}
