// Anzeigenamen für die Auswahllisten.

import type { Erfahrung, Gelenk, Geraet, Rolle, Saison, Schwerpunkt, Termin, Trainingsart, Ziel } from "../logik/typen"

export const ZIELE: { id: Ziel; name: string; text: string; symbol: string }[] = [
  { id: "muskelaufbau", name: "Muskelaufbau", text: "Mehr Muskeln, mittlere Wiederholungen, nah an die Grenze.", symbol: "💪" },
  { id: "kraft", name: "Kraft", text: "Schwerer werden, wenige Wiederholungen, lange Pausen.", symbol: "🏋️" },
  { id: "sport", name: "Leistung im Sport", text: "Kraft und Schnellkraft für deinen Sport, abgestimmt auf Termine.", symbol: "⚽" },
  { id: "fitness", name: "Fit und gesund", text: "Ausgewogen, alltagstauglich, nicht zu hart.", symbol: "🌱" },
  { id: "abnehmen", name: "Abnehmen", text: "Kraft erhalten, viel Bewegung. Der Rest passiert in der Küche.", symbol: "🔥" },
]

export const ERFAHRUNG: { id: Erfahrung; name: string; text: string }[] = [
  { id: "einsteiger", name: "Einsteiger", text: "Unter einem Jahr regelmäßiges Krafttraining" },
  { id: "fortgeschritten", name: "Fortgeschritten", text: "1 bis 3 Jahre" },
  { id: "erfahren", name: "Erfahren", text: "Über 3 Jahre, Technik sitzt" },
]

export const SAISON: { id: Saison; name: string; text: string }[] = [
  { id: "vorbereitung", name: "Vorbereitung", text: "Mehr Volumen, Aufbau" },
  { id: "wettkampf", name: "Saison", text: "Weniger Sätze, frisch bleiben" },
  { id: "pause", name: "Pause", text: "Zwischen den Saisons" },
]

export const ARTEN: { id: Trainingsart; name: string; symbol: string }[] = [
  { id: "kraft", name: "Kraft", symbol: "🏋️" },
  { id: "mobilitaet", name: "Mobilität", symbol: "🧘" },
  { id: "ausdauer", name: "Ausdauer", symbol: "🏃" },
]

export const SCHWERPUNKT: { id: Schwerpunkt; name: string }[] = [
  { id: "automatisch", name: "Automatisch" },
  { id: "kraft", name: "Kraft" },
  { id: "mobilitaet", name: "Mobilität" },
  { id: "ausdauer", name: "Ausdauer" },
]

export const TERMINE: { id: Termin; name: string }[] = [
  { id: "mannschaftstraining", name: "Mannschaftstraining" },
  { id: "spiel", name: "Spiel" },
  { id: "turnier", name: "Turnier oder Wettkampf" },
  { id: "runde", name: "Golfrunde" },
  { id: "lauf", name: "Lauf" },
]

export const GERAETE: { id: Geraet; name: string; symbol: string }[] = [
  { id: "kurzhantel", name: "Kurzhanteln", symbol: "🏋️" },
  { id: "langhantel", name: "Langhantel", symbol: "➖" },
  { id: "kettlebell", name: "Kettlebells", symbol: "🔔" },
  { id: "bank", name: "Hantelbank", symbol: "🛋️" },
  { id: "klimmzugstange", name: "Klimmzugstange", symbol: "🧗" },
  { id: "kabelzug", name: "Kabelzug", symbol: "🎚️" },
  { id: "maschine_beine", name: "Beinmaschinen", symbol: "🦵" },
  { id: "maschine_oberkoerper", name: "Oberkörpermaschinen", symbol: "🦾" },
  { id: "band", name: "Widerstandsbänder", symbol: "➰" },
  { id: "medizinball", name: "Medizinball", symbol: "🏐" },
  { id: "box", name: "Box oder Stufe", symbol: "📦" },
  { id: "matte", name: "Matte", symbol: "🟩" },
  { id: "wand", name: "Freie Wand", symbol: "🧱" },
  { id: "laufband", name: "Laufband", symbol: "🏃" },
  { id: "fahrrad", name: "Fahrrad oder Ergometer", symbol: "🚲" },
  { id: "rudergeraet", name: "Rudergerät", symbol: "🚣" },
  { id: "draussen", name: "Platz draußen", symbol: "🌳" },
]

export const GELENKE: { id: Gelenk; name: string }[] = [
  { id: "schulter", name: "Schulter" },
  { id: "ellbogen", name: "Ellbogen" },
  { id: "handgelenk", name: "Handgelenk" },
  { id: "nacken", name: "Nacken" },
  { id: "ruecken", name: "Rücken" },
  { id: "huefte", name: "Hüfte" },
  { id: "knie", name: "Knie" },
  { id: "sprunggelenk", name: "Sprunggelenk" },
]

export const ROLLE: Record<Rolle, string> = {
  haupt: "Hauptübung",
  neben: "Ergänzung",
  isolation: "Zusatz",
  praevention: "Vorbeugung",
  schnellkraft: "Schnellkraft",
  mobil: "Mobilität",
  ausdauer: "Ausdauer",
}

export const WOCHENTAGE = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
export const WT = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]

export function datumText(d: string): string {
  const [j, m, t] = d.split("-")
  return Number(t) + "." + Number(m) + "." + j.slice(2)
}

export const zahl = (x: number) => String(Math.round(x * 100) / 100).replace(".", ",")
