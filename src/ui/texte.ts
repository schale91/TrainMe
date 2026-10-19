// Anzeigenamen für die Auswahllisten.

import type { Erfahrung, Gelenk, Geraet, Muskel, Muster, Rolle, Saison, Schwerpunkt, Termin, Trainingsart, Ziel } from "../logik/typen"

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

export const GERAETE: { id: Geraet; name: string; symbol: string; gruppe: string }[] = [
  { id: "kurzhantel", name: "Kurzhanteln", symbol: "🏋️", gruppe: "Freie Gewichte" },
  { id: "langhantel", name: "Langhantel", symbol: "➖", gruppe: "Freie Gewichte" },
  { id: "sz_stange", name: "SZ-Stange", symbol: "〰️", gruppe: "Freie Gewichte" },
  { id: "kettlebell", name: "Kettlebells", symbol: "🔔", gruppe: "Freie Gewichte" },
  { id: "hantelscheibe", name: "Hantelscheiben", symbol: "⚪", gruppe: "Freie Gewichte" },
  { id: "medizinball", name: "Medizinball", symbol: "🏐", gruppe: "Freie Gewichte" },
  { id: "bank", name: "Hantelbank", symbol: "🛋️", gruppe: "Studio" },
  { id: "klimmzugstange", name: "Klimmzugstange", symbol: "🧗", gruppe: "Studio" },
  { id: "dip_station", name: "Dip-Station", symbol: "🪜", gruppe: "Studio" },
  { id: "kabelzug", name: "Kabelzug", symbol: "🎚️", gruppe: "Studio" },
  { id: "maschine_beine", name: "Beinmaschinen", symbol: "🦵", gruppe: "Studio" },
  { id: "maschine_oberkoerper", name: "Oberkörpermaschinen", symbol: "🦾", gruppe: "Studio" },
  { id: "multipresse", name: "Multipresse", symbol: "🏗️", gruppe: "Studio" },
  { id: "landmine", name: "Landmine", symbol: "📐", gruppe: "Studio" },
  { id: "band", name: "Widerstandsbänder", symbol: "➰", gruppe: "Kleingeräte" },
  { id: "mini_band", name: "Mini-Bänder", symbol: "⭕", gruppe: "Kleingeräte" },
  { id: "schlingentrainer", name: "Schlingentrainer", symbol: "🪢", gruppe: "Kleingeräte" },
  { id: "gymnastikball", name: "Gymnastikball", symbol: "🔵", gruppe: "Kleingeräte" },
  { id: "box", name: "Box oder Stufe", symbol: "📦", gruppe: "Kleingeräte" },
  { id: "matte", name: "Matte", symbol: "🟩", gruppe: "Kleingeräte" },
  { id: "faszienrolle", name: "Faszienrolle", symbol: "🧻", gruppe: "Kleingeräte" },
  { id: "gleitscheiben", name: "Gleitscheiben oder Handtuch", symbol: "🧽", gruppe: "Kleingeräte" },
  { id: "stab", name: "Stab", symbol: "🥢", gruppe: "Kleingeräte" },
  { id: "golfschlaeger", name: "Golfschläger", symbol: "🏌️", gruppe: "Kleingeräte" },
  { id: "wand", name: "Freie Wand", symbol: "🧱", gruppe: "Raum" },
  { id: "draussen", name: "Platz draußen", symbol: "🌳", gruppe: "Raum" },
  { id: "laufband", name: "Laufband", symbol: "🏃", gruppe: "Ausdauer" },
  { id: "fahrrad", name: "Fahrrad oder Ergometer", symbol: "🚲", gruppe: "Ausdauer" },
  { id: "rudergeraet", name: "Rudergerät", symbol: "🚣", gruppe: "Ausdauer" },
]

export const GERAET_NAME: Record<string, string> = Object.fromEntries(GERAETE.map((g) => [g.id, g.name]))

export const MUSTER_NAME: Record<Muster, string> = {
  kniebeuge: "Kniebeuge",
  hueftstreckung: "Hüftstreckung",
  einbeinig: "Einbeinig",
  druecken_horizontal: "Drücken waagerecht",
  druecken_vertikal: "Drücken über Kopf",
  ziehen_horizontal: "Rudern",
  ziehen_vertikal: "Ziehen von oben",
  brust_iso: "Brust isoliert",
  schulter_seitlich: "Seitliche Schulter",
  schulter_gesund: "Schultergesundheit",
  trapez: "Nacken und Trapez",
  bizeps: "Bizeps",
  trizeps: "Trizeps",
  griff: "Griff und Unterarm",
  nacken: "Nacken",
  rotation: "Rotation",
  anti_rotation: "Anti-Rotation",
  rumpf: "Rumpf",
  wade: "Waden",
  adduktoren: "Adduktoren",
  abduktoren: "Abduktoren",
  hamstring_praevention: "Beinbeuger",
  balance: "Gleichgewicht",
  schnellkraft_wurf: "Würfe",
  schnellkraft_sprung: "Sprünge",
  sprint: "Sprints",
  mobilitaet_huefte: "Mobilität Hüfte",
  mobilitaet_bws: "Mobilität Brustwirbelsäule",
  mobilitaet_schulter: "Mobilität Schulter",
  mobilitaet_beine: "Dehnen Beine",
  mobilitaet_sprunggelenk: "Mobilität Sprunggelenk",
  mobilitaet_handgelenk: "Mobilität Handgelenk",
  mobilitaet_nacken: "Mobilität Nacken",
  mobilitaet_ganzkoerper: "Ganzkörper-Mobilität",
  ausdauer_ruhig: "Ausdauer ruhig",
  ausdauer_intervall: "Intervalle",
}

export const MUSKEL_NAME: Record<Muskel, string> = {
  brust: "Brust",
  schulter_vorn: "vordere Schulter",
  schulter_seitlich: "seitliche Schulter",
  schulter_hinten: "hintere Schulter",
  rotatorenmanschette: "Rotatorenmanschette",
  latissimus: "Latissimus",
  oberer_ruecken: "oberer Rücken",
  trapez: "Trapez",
  ruecken_unten: "unterer Rücken",
  bizeps: "Bizeps",
  trizeps: "Trizeps",
  unterarm: "Unterarm",
  bauch: "Bauch",
  schraege_bauch: "schräge Bauchmuskeln",
  gesaess: "Gesäß",
  gesaess_mittel: "mittlerer Gesäßmuskel",
  hueftbeuger: "Hüftbeuger",
  quadrizeps: "Oberschenkel vorn",
  beinbeuger: "Beinbeuger",
  adduktoren: "Adduktoren",
  waden: "Waden",
  schienbein: "Schienbein",
  nacken: "Nacken",
  ganzkoerper: "Ganzkörper",
  herz_kreislauf: "Herz-Kreislauf",
}

/** Bereiche für die Bibliothek */
export const BEREICHE: { id: string; name: string; muster: Muster[] }[] = [
  { id: "beine", name: "Beine", muster: ["kniebeuge", "einbeinig", "hueftstreckung", "hamstring_praevention", "adduktoren", "abduktoren", "wade"] },
  { id: "brust", name: "Brust", muster: ["druecken_horizontal", "brust_iso"] },
  { id: "ruecken", name: "Rücken", muster: ["ziehen_horizontal", "ziehen_vertikal", "trapez"] },
  { id: "schulter", name: "Schultern", muster: ["druecken_vertikal", "schulter_seitlich", "schulter_gesund", "nacken"] },
  { id: "arme", name: "Arme", muster: ["bizeps", "trizeps", "griff"] },
  { id: "rumpf", name: "Rumpf", muster: ["rumpf", "rotation", "anti_rotation"] },
  { id: "athletik", name: "Athletik", muster: ["schnellkraft_wurf", "schnellkraft_sprung", "sprint", "balance"] },
  { id: "mobil", name: "Mobilität", muster: ["mobilitaet_huefte", "mobilitaet_bws", "mobilitaet_schulter", "mobilitaet_beine", "mobilitaet_sprunggelenk", "mobilitaet_handgelenk", "mobilitaet_nacken", "mobilitaet_ganzkoerper"] },
  { id: "ausdauer", name: "Ausdauer", muster: ["ausdauer_ruhig", "ausdauer_intervall"] },
]

export const GELENK_NAME: Record<string, string> = { knie: "Knie", schulter: "Schulter", ruecken: "Rücken", huefte: "Hüfte", handgelenk: "Handgelenk", ellbogen: "Ellbogen", sprunggelenk: "Sprunggelenk", nacken: "Nacken" }

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
