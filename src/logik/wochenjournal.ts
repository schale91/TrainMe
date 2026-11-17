// Wochenjournal (Wunsch von Alex, 17.11.2026): Am letzten Trainingstag der Woche gibt es im Aufräumen, also in der
// ohnehin verlorenen Wartezeit, vier kurze Fragen. Gefragt wird nur, was kein Sensor weiß; Schlaf, Ruhepuls, Sätze
// und Einheiten zeigt die App vorausgefüllt an. Das Journal ist Pflicht, lässt sich aber für diese Woche
// überspringen (eine Woche kommt nur einmal dran, also gibt es höchstens ein Überspringen je Woche).
// Grundlage: Das Festhalten des eigenen Fortschritts fördert das Erreichen von Zielen (Harkin et al. 2016,
// Psychological Bulletin 142), kurze Selbsteinschätzungen bilden die Trainingsbelastung empfindlich ab
// (Saw et al. 2016, Br J Sports Med 50).

import { rehaAktiv } from "./reha"
import { montagVon } from "./rueckblick"
import type { Daten, Gelenk, Wochenjournal } from "./typen"

export const SKALEN = [
  { id: "erholung", frage: "Wie erholt warst du diese Woche?", von: "erschöpft", bis: "topfit" },
  { id: "lust", frage: "Wie viel Lust hattest du aufs Training?", von: "kaum", bis: "sehr viel" },
  { id: "stress", frage: "Wie war der Stress im Alltag?", von: "sehr hoch", bis: "kaum" },
] as const

export const STELLEN: Gelenk[] = ["knie", "schulter", "ruecken", "huefte", "handgelenk", "ellbogen", "sprunggelenk", "nacken"]

const TAG = 86400000
const plus = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)
const wochentag = (d: string) => (new Date(d + "T12:00:00Z").getUTCDay() + 6) % 7

/**
 * Ist für die Einheit an diesem Datum ein Wochenjournal fällig? Ergebnis: für welche Woche (Montag) und ob es ein
 * Nachtrag für die Vorwoche ist, sonst null.
 * - Nur mit eingeschaltetem Journal, nicht in der Reha (dort zählt der Schmerz je Satz) und nur für Wochen ab dem
 *   Einschalten.
 * - Vorwoche mit Krafttraining, aber ohne Eintrag: Nachtrag (so holt sich eine ausgefallene Woche von selbst nach).
 * - Sonst die laufende Woche, wenn dies der letzte Trainingstag laut Wochenplan ist oder später (Nachholen).
 */
export function journalFaellig(daten: Pick<Daten, "profil" | "wochenjournal" | "erledigt">, datum: string): { woche: string; nachtrag: boolean } | null {
  const p = daten.profil
  if (!p || !p.wochenjournal || rehaAktiv(p)) return null
  const ab = montagVon(p.wochenjournal)
  const j = daten.wochenjournal || {}
  const diese = montagVon(datum)
  const vorige = plus(diese, -7)
  if (vorige >= ab && !j[vorige] && daten.erledigt.some((e) => e.datum >= vorige && e.datum < diese && (e.art === undefined || e.art === "kraft"))) return { woche: vorige, nachtrag: true }
  if (diese < ab || j[diese]) return null
  const tage = p.woche.map((t, i) => (t.art === "training" ? i : -1)).filter((i) => i >= 0)
  if (!tage.length) return null
  return wochentag(datum) >= Math.max(...tage) ? { woche: diese, nachtrag: false } : null
}

/** Alle Pflichtangaben gemacht? Erholung, Lust und Stress je 1 bis 5, Beschwerden entschieden (keine oder mindestens eine Stelle). */
export function journalVollstaendig(e: Partial<Wochenjournal>): boolean {
  const ok = (x?: number) => typeof x === "number" && x >= 1 && x <= 5
  return ok(e.erholung) && ok(e.lust) && ok(e.stress) && Array.isArray(e.stellen)
}

/** Eintrag für das Überspringen */
export const journalUebersprungen = (woche: string, datum: string): Wochenjournal => ({ woche, datum, uebersprungen: true })

/** Die letzten Einträge, neueste zuerst */
export function journalVerlauf(daten: Pick<Daten, "wochenjournal">, n = 6): Wochenjournal[] {
  return Object.values(daten.wochenjournal || {})
    .sort((a, b) => (a.woche < b.woche ? 1 : -1))
    .slice(0, n)
}
