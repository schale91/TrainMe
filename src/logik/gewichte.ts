// Welche Lasten es mit der vorhandenen Ausrüstung wirklich gibt. Die App schlägt nie ein Gewicht vor, das man nicht
// zusammenstecken kann.

import type { Geraet, Gewichte, Uebung } from "./typen"

export const LAST_GERAETE: Geraet[] = ["kurzhantel", "langhantel", "kettlebell", "kabelzug", "maschine_beine", "maschine_oberkoerper", "medizinball", "band"]

export const LEER: Gewichte = { kurzhanteln: [], stange: 0, scheiben: [], kettlebells: [], medizinbaelle: [], maschine_schritt: 5, maschine_max: 100, baender: 0 }

const rund = (x: number) => Math.round(x * 100) / 100

/** Alle Gesamtgewichte einer Langhantel: Stange plus beliebige Auswahl der Scheibenpaare. */
function langhantelGewichte(g: Gewichte): number[] {
  if (!g.stange) return []
  const scheiben = g.scheiben.slice(0, 14)
  const summen = new Set<number>([0])
  for (const s of scheiben) for (const x of Array.from(summen)) summen.add(rund(x + 2 * s))
  return Array.from(summen).map((x) => rund(g.stange + x))
}

/** Verfügbare Lasten für ein Lastgerät, aufsteigend. */
export function verfuegbar(geraet: Geraet, g: Gewichte): number[] {
  let liste: number[] = []
  if (geraet === "kurzhantel") liste = g.kurzhanteln
  else if (geraet === "langhantel") liste = langhantelGewichte(g)
  else if (geraet === "kettlebell") liste = g.kettlebells
  else if (geraet === "medizinball") liste = g.medizinbaelle
  else if (geraet === "band") liste = Array.from({ length: g.baender }, (_, i) => i + 1)
  else if (geraet === "kabelzug" || geraet === "maschine_beine" || geraet === "maschine_oberkoerper") {
    const schritt = g.maschine_schritt > 0 ? g.maschine_schritt : 5
    for (let x = schritt; x <= g.maschine_max + 1e-9; x += schritt) liste.push(rund(x))
  }
  return Array.from(new Set(liste.filter((x) => x > 0))).sort((a, b) => a - b)
}

/** Das schwerste verfügbare Gewicht bis höchstens ziel, sonst das leichteste. */
export function abrunden(ziel: number, liste: number[]): number | null {
  if (!liste.length) return null
  let best = liste[0]
  for (const x of liste) if (x <= ziel + 1e-9) best = x
  return best
}

/** Nächste Stufe über der aktuellen Last (oder die aktuelle, wenn es keine höhere gibt). */
export function hoeher(last: number, liste: number[]): number {
  for (const x of liste) if (x > last + 1e-9) return x
  return last
}

/** Nächste Stufe unter der aktuellen Last. */
export function niedriger(last: number, liste: number[]): number {
  let best = liste.length ? liste[0] : last
  for (const x of liste) if (x < last - 1e-9) best = x
  return best
}

/** Welche Gerätegruppe einer Übung an einem Ort passt, und welches Gerät die Last bestimmt. */
export function passendeGruppe(u: Uebung, vorhanden: Geraet[]): { gruppe: Geraet[]; last: Geraet | null } | null {
  for (const gruppe of u.geraete) {
    if (gruppe.every((x) => vorhanden.indexOf(x) >= 0)) {
      return { gruppe, last: gruppe.find((x) => LAST_GERAETE.indexOf(x) >= 0) || null }
    }
  }
  return null
}

/** Anzeige einer Last mit Einheit. */
export function lastText(last: number | null, geraet: Geraet | null): string {
  if (last === null) return "Körpergewicht"
  if (geraet === "band") return "Band Stufe " + last
  const zahl = String(last).replace(".", ",")
  return geraet === "kurzhantel" ? zahl + " kg je Hand" : zahl + " kg"
}
