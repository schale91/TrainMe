// Welche Muskeln ein Trainingstag trainiert („Brust, Schultern, Trizeps“), Anregung aus dem Vergleich mit einer anderen
// Trainings-App (16.11.2026). Gezählt wird wie im Wochenrückblick: Der Zielmuskel einer Übung zählt je Satz voll,
// Muskeln, die deutlich mitarbeiten, halb (siehe anteil).

import { MUSKELGRUPPEN, anteil } from "./rueckblick"
import type { Platz } from "./typen"

/**
 * Muskelgruppen des Tages (die mit den meisten Sätzen, in der gewohnten Reihenfolge). Nur Krafttage (Mobilität und Ausdauer haben keine Muskelzeile),
 * nur Gruppen mit mindestens 2 gezählten Sätzen und mindestens einem Viertel der stärksten Gruppe, höchstens max.
 */
export function tagMuskeln(plaetze: Pick<Platz, "uebung" | "vorgabe">[], max = 4): string[] {
  const summe = MUSKELGRUPPEN.map((g) => ({
    name: g.name,
    wert: plaetze.reduce((s, p) => (p.uebung.art === "kraft" ? s + p.vorgabe.saetze * anteil(p.uebung, g) : s), 0),
  }))
  const top = Math.max(0, ...summe.map((x) => x.wert))
  if (top < 2) return []
  // Die stärksten Gruppen auswählen, dann in der gewohnten Reihenfolge zeigen (Brust, Rücken, Schultern, Arme, Beine …)
  return summe
    .map((x, k) => ({ ...x, k }))
    .filter((x) => x.wert >= 2 && x.wert >= top / 4)
    .sort((a, b) => b.wert - a.wert || a.k - b.k)
    .slice(0, max)
    .sort((a, b) => a.k - b.k)
    .map((x) => x.name)
}

/** Text für die Anzeige, leer ohne Muskeln */
export const tagMuskelnText = (plaetze: Pick<Platz, "uebung" | "vorgabe">[], max = 4): string => tagMuskeln(plaetze, max).join(", ")
