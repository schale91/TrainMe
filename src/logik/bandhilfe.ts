// Unterstützung mit einem Widerstandsband bei Körpergewichtsübungen (Klimmzug, Dips, Nordic Curl, Pistol, Liegestütz):
// Das Band nimmt einen Teil des Körpergewichts ab. Im Protokoll steht das als „minus kg“ (hilfe_kg je Satz), damit man
// sieht, wie die Hilfe über die Wochen kleiner wird. Wie viel ein Band abnimmt, hängt vom Hersteller und von der
// Dehnung ab: Die Werte hier sind grobe Startwerte und lassen sich je Farbe anpassen.

import type { Daten, Satz, Uebung } from "./typen"

/** Farben von leicht (wenig Hilfe) bis schwer (viel Hilfe), wie in der Bandwahl des Trainings */
export const HILFE_FARBEN = ["gelb", "rot", "schwarz", "lila", "grün", "blau", "orange"] as const

/** Grobe Startwerte in kg, die ein Band im gedehnten Zustand etwa abnimmt (je nach Hersteller sehr verschieden) */
export const HILFE_KG_START: Record<string, number> = { gelb: 5, rot: 11, schwarz: 18, lila: 25, "grün": 35, blau: 45, orange: 55 }

/** Körpergewichtsübungen, bei denen ein Band als Unterstützung üblich ist */
const MIT_BANDHILFE = new Set([
  "klimmzug",
  "klimmzug_untergriff",
  "klimmzug_neutral",
  "klimmzug_weit",
  "klimmzug_band",
  "klimmzug_exzentrisch_betont",
  "klimmzug_archer",
  "klimmzug_l_sit",
  "dips_brust",
  "dips_trizeps",
  "dips_schlingentrainer",
  "nordic",
  "nordic_band",
  "razor_curl",
  "pistol",
  "liegestuetz",
  "liegestuetz_diamant",
  "liegestuetz_archer",
  "liegestuetz_einarmig",
  "handstand_liegestuetz",
])

export function bandhilfeMoeglich(u: Pick<Uebung, "id" | "belastung">): boolean {
  return u.belastung === "wiederholungen" && MIT_BANDHILFE.has(u.id)
}

/** kg, die ein Band dieser Farbe abnimmt: eigener Wert oder Startwert */
export function hilfeKg(daten: Pick<Daten, "bandhilfe_kg">, farbe: string): number {
  return daten.bandhilfe_kg?.[farbe] ?? HILFE_KG_START[farbe] ?? 0
}

/** Text für die Anzeige, z. B. „−35 kg“ */
export function hilfeText(kg: number): string {
  return "−" + String(Math.round(kg * 10) / 10).replace(".", ",") + " kg"
}

/** Übungen, bei denen (fast) das ganze Körpergewicht bewegt wird: Dort lässt sich die nötige Hilfe ausrechnen */
const GANZES_GEWICHT = /^(klimmzug|dips_)/

/**
 * Vorschlag nach einem Satz mit Band.
 * - Zu leicht (mehr Wiederholungen als vorgegeben oder mindestens zwei mehr im Tank als geplant): das nächstschwächere Band.
 * - Zu schwer (weniger Wiederholungen als vorgegeben und nicht mehr im Tank als geplant): ein stärkeres Band. Die
 *   Reserve muss dafür nicht 0 sein: Wer bei „6 bis 8 mit 1 im Tank“ nach 2 Wiederholungen aufhört, braucht mehr Hilfe.
 * Wie viel stärker: Ist das Körpergewicht bekannt und wird es bei der Übung ganz bewegt (Klimmzug, Dips), rechnet die
 * Schätzformel (Epley mit Reserve) aus, wie viel Hilfe für die untere Grenze der Vorgabe nötig wäre; gewählt wird das
 * schwächste Band, das so viel abnimmt. Sonst das nächststärkere.
 */
export function hilfeVorschlag(
  farbe: string,
  s: Pick<Satz, "wdh" | "rir">,
  wdh_von: number,
  wdh_bis: number,
  rir: number,
  rechnen?: { uebung: string; koerper_kg?: number; kg: (farbe: string) => number },
): { farbe: string; richtung: "weniger" | "mehr" } | null {
  const i = HILFE_FARBEN.indexOf(farbe as (typeof HILFE_FARBEN)[number])
  if (i < 0) return null
  if ((s.wdh > wdh_bis || s.rir >= rir + 2) && i > 0) return { farbe: HILFE_FARBEN[i - 1], richtung: "weniger" }
  if (s.wdh < wdh_von && s.rir <= rir && i < HILFE_FARBEN.length - 1) {
    let ziel = i + 1
    const koerper = rechnen?.koerper_kg
    if (rechnen && koerper && koerper > 0 && GANZES_GEWICHT.test(rechnen.uebung)) {
      const bewegt = koerper - rechnen.kg(farbe)
      if (bewegt > 0) {
        const max = bewegt * (1 + (s.wdh + s.rir) / 30)
        const noetig = koerper - max / (1 + (wdh_von + rir) / 30)
        // 2 kg Spielraum: Die kg je Band sind ohnehin nur geschätzt
        while (ziel < HILFE_FARBEN.length - 1 && rechnen.kg(HILFE_FARBEN[ziel]) < noetig - 2) ziel++
      }
    }
    return { farbe: HILFE_FARBEN[ziel], richtung: "mehr" }
  }
  return null
}

/**
 * Vorschlag schon vor dem ersten Satz, aus dem letzten Mal: Gemessen wird am besten Satz mit dem Band, das gerade
 * gewählt ist. So steht das passendere Band da, bevor der erste Satz wieder zu schwer oder zu leicht ist.
 */
export function hilfeAusLetztemMal(
  letzte: Pick<Satz, "wdh" | "rir" | "hilfe_band">[],
  farbe: string,
  wdh_von: number,
  wdh_bis: number,
  rir: number,
  rechnen?: { uebung: string; koerper_kg?: number; kg: (farbe: string) => number },
): { farbe: string; richtung: "weniger" | "mehr"; wdh: number } | null {
  const mit = letzte.filter((x) => x.hilfe_band === farbe && x.wdh > 0)
  if (!mit.length) return null
  const bester = mit.reduce((a, b) => (b.wdh > a.wdh ? b : a))
  const h = hilfeVorschlag(farbe, bester, wdh_von, wdh_bis, rir, rechnen)
  return h ? { ...h, wdh: bester.wdh } : null
}
