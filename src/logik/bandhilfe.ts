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

/**
 * Vorschlag nach einem Satz mit Band: deutlich mehr Wiederholungen als vorgegeben oder mehr als zwei über der
 * Reserve übrig → nächstes Mal das nächstschwächere Band; weit unter der Vorgabe → das nächststärkere.
 */
export function hilfeVorschlag(farbe: string, s: Pick<Satz, "wdh" | "rir">, wdh_von: number, wdh_bis: number, rir: number): { farbe: string; richtung: "weniger" | "mehr" } | null {
  const i = HILFE_FARBEN.indexOf(farbe as (typeof HILFE_FARBEN)[number])
  if (i < 0) return null
  if ((s.wdh > wdh_bis || s.rir >= rir + 2) && i > 0) return { farbe: HILFE_FARBEN[i - 1], richtung: "weniger" }
  if (s.wdh < wdh_von && s.rir <= 0 && i < HILFE_FARBEN.length - 1) return { farbe: HILFE_FARBEN[i + 1], richtung: "mehr" }
  return null
}
