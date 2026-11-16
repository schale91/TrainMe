// RIR-Ziel je Satz (Anregung aus dem Vergleich mit einer anderen Trainings-App, 16.11.2026): Bei Isolationsübungen
// und Maschinen geht der letzte Satz bis eine Wiederholung näher ans Versagen als die davor. Dort ist das Risiko
// klein (wenig Gelenklast, kein freies Gewicht über dem Körper), und gerade die letzten Wiederholungen vor dem
// Versagen setzen den Wachstumsreiz. Bei Grundübungen bleibt das Ziel für alle Sätze gleich.

import type { Muster, Uebung, Vorgabe } from "./typen"

/** Muster, bei denen der letzte Satz tiefer ins Limit darf */
const ISOLATION: ReadonlySet<Muster> = new Set<Muster>(["brust_iso", "schulter_seitlich", "schulter_gesund", "trapez", "bizeps", "trizeps", "wade", "adduktoren", "abduktoren"])

type Quelle = Pick<Uebung, "muster" | "belastung" | "gelenke">
type Regel = Pick<Vorgabe, "modell" | "topsatz" | "rir_fest">

/** Darf diese Übung ein tieferes Ziel im letzten Satz bekommen? */
export function rirVerlaufMoeglich(u: Quelle, v: Regel, reha = false): boolean {
  if (reha || u.belastung !== "gewicht" || !ISOLATION.has(u.muster)) return false
  // Der Plan gibt Prozent oder ein eigenes RIR vor: dann gilt das für alle Sätze, wie im Kraftbuch
  if (v.modell === "prozent" || v.rir_fest || v.topsatz) return false
  // Hohe Gelenklast (Stufe 2) auch bei Isolation: lieber nicht bis ans Limit
  return !Object.values(u.gelenke).some((x) => x === 2)
}

/**
 * Ziel-RIR für jeden Satz einer Übung mit der angegebenen Satzzahl: der letzte Satz eins niedriger (nicht unter 0),
 * wenn es mehr als einen Satz gibt und das Ziel mindestens 1 ist.
 */
export function rirZiele(u: Quelle, v: Regel & Pick<Vorgabe, "rir">, saetze: number, reha = false): number[] {
  const ziele = Array.from({ length: Math.max(0, saetze) }, () => v.rir)
  if (saetze >= 2 && v.rir >= 1 && rirVerlaufMoeglich(u, v, reha)) ziele[saetze - 1] = v.rir - 1
  return ziele
}

/**
 * Nach „+ Satz“ oder „− Satz“: noch nicht abgehakte Sätze, deren RIR dem alten Ziel entsprach, bekommen das neue.
 * Was von Hand verstellt wurde, bleibt. vorher/nachher: Ziele bei alter und neuer Satzzahl.
 */
export function rirNeuZielen<T extends { rir: number; fertig: boolean }>(saetze: T[], vorher: number[], nachher: number[]): T[] {
  return saetze.map((s, k) => {
    if (s.fertig || nachher[k] === undefined) return s
    // neu angehängter Satz (kein altes Ziel) bekommt das neue Ziel
    if (vorher[k] === undefined || s.rir === vorher[k]) return s.rir === nachher[k] ? s : { ...s, rir: nachher[k] }
    return s
  })
}

/** Text für die Vorgabezeile: „1 im Tank“ oder „1 im Tank, letzter Satz 0“ */
export function rirText(ziele: number[]): string {
  if (!ziele.length) return ""
  const erst = ziele[0]
  const letzt = ziele[ziele.length - 1]
  return letzt === erst ? erst + " im Tank" : erst + " im Tank, letzter Satz " + letzt
}
