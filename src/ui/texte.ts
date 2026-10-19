// Anzeigenamen für die Auswahllisten.

import { PHASEN } from "../logik/jahresplan"
import type { Erfahrung, Gelenk, Geraet, Grund, Muskel, Muster, Rolle, Saison, Schwerpunkt, Termin, Trainingsart, Ziel } from "../logik/typen"

export const ZIELE: { id: Ziel; name: string; text: string; symbol: string }[] = [
  { id: "muskelaufbau", name: "Muskelaufbau", text: "Mehr Muskeln, mittlere Wiederholungen, nah an die Grenze.", symbol: "muskel" },
  { id: "kraft", name: "Kraft", text: "Schwerer werden, wenige Wiederholungen, lange Pausen.", symbol: "kraft" },
  { id: "sport", name: "Leistung im Sport", text: "Kraft und Schnellkraft für deinen Sport, abgestimmt auf Termine.", symbol: "ball" },
  { id: "fitness", name: "Fit und gesund", text: "Ausgewogen, alltagstauglich, nicht zu hart.", symbol: "spross" },
  { id: "abnehmen", name: "Abnehmen", text: "Kraft erhalten, viel Bewegung. Der Rest passiert in der Küche.", symbol: "flamme" },
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
  { id: "kraft", name: "Kraft", symbol: "hantel" },
  { id: "mobilitaet", name: "Mobilität", symbol: "dehnen" },
  { id: "ausdauer", name: "Ausdauer", symbol: "puls" },
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

export const GERAETE_GRUPPEN: { id: string; name: string; symbol: string; text?: string }[] = [
  { id: "frei", name: "Freie Gewichte", symbol: "hantel" },
  { id: "staender", name: "Bänke und Ständer", symbol: "rack" },
  { id: "kabel", name: "Kabelzüge", symbol: "kabel", text: "Kabelturm heißt: zwei Kabelzüge nebeneinander, z. B. für Crossover." },
  { id: "beine", name: "Maschinen für Beine und Hüfte", symbol: "beinpresse" },
  { id: "oben", name: "Maschinen für den Oberkörper", symbol: "maschine" },
  { id: "klein", name: "Kleingeräte", symbol: "band" },
  { id: "ausdauer", name: "Ausdauergeräte", symbol: "fahrrad" },
  { id: "raum", name: "Raum", symbol: "wand" },
]

export const GERAETE: { id: Geraet; name: string; gruppe: string; text?: string; symbol?: string }[] = [
  { id: "kurzhantel", name: "Kurzhanteln", gruppe: "frei" },
  { id: "langhantel", name: "Langhantel", gruppe: "frei" },
  { id: "sz_stange", name: "SZ-Stange", gruppe: "frei" },
  { id: "trap_bar", name: "Trap Bar (Sechseckstange)", gruppe: "frei" },
  { id: "kettlebell", name: "Kettlebells", gruppe: "frei" },
  { id: "hantelscheibe", name: "Hantelscheiben", gruppe: "frei" },
  { id: "medizinball", name: "Medizinball", gruppe: "frei" },
  { id: "bank", name: "Verstellbare Hantelbank", gruppe: "staender" },
  { id: "scottbank", name: "Scottbank (Curlpult)", gruppe: "staender" },
  { id: "rack", name: "Rack oder Kniebeugenständer", gruppe: "staender", text: "Für Kniebeugen und Bankdrücken mit der Langhantel" },
  { id: "klimmzugstange", name: "Klimmzugstange", gruppe: "staender" },
  { id: "dip_station", name: "Dip-Station oder Barren", gruppe: "staender" },
  { id: "landmine", name: "Landmine", gruppe: "staender" },
  { id: "multipresse", name: "Multipresse (Smith-Maschine)", gruppe: "staender" },
  { id: "kabelzug", name: "Kabelzug, höhenverstellbar", gruppe: "kabel" },
  { id: "kabelturm", name: "Kabelturm mit zwei Seiten", gruppe: "kabel" },
  { id: "latzug", name: "Latzugstation", gruppe: "kabel" },
  { id: "kabelrudern", name: "Ruderzug sitzend", gruppe: "kabel" },
  { id: "beinpresse", name: "Beinpresse", gruppe: "beine" },
  { id: "hackenschmidt", name: "Hackenschmidt", gruppe: "beine" },
  { id: "pendelkniebeuge", name: "Pendel-Kniebeuge", gruppe: "beine" },
  { id: "beltsquat", name: "Belt Squat", gruppe: "beine" },
  { id: "beinstrecker", name: "Beinstrecker", gruppe: "beine" },
  { id: "beinbeuger_liegend", name: "Beinbeuger liegend", gruppe: "beine" },
  { id: "beinbeuger_sitzend", name: "Beinbeuger sitzend", gruppe: "beine" },
  { id: "beinbeuger_stehend", name: "Beinbeuger stehend", gruppe: "beine" },
  { id: "ab_adduktoren", name: "Adduktoren- und Abduktorenmaschine", gruppe: "beine" },
  { id: "gesaessmaschine", name: "Gesäßmaschine (Hip Thrust, Kickback)", gruppe: "beine" },
  { id: "wadenmaschine_stehend", name: "Wadenmaschine stehend", gruppe: "beine" },
  { id: "wadenmaschine_sitzend", name: "Wadenmaschine sitzend", gruppe: "beine" },
  { id: "rueckenstrecker", name: "Rückenstrecker (45-Grad-Bank)", gruppe: "beine" },
  { id: "ghd", name: "Glute-Ham-Gerät (GHD)", gruppe: "beine" },
  { id: "brustpresse", name: "Brustpresse", gruppe: "oben" },
  { id: "butterfly", name: "Butterfly mit Reverse-Funktion", gruppe: "oben" },
  { id: "schulterpresse", name: "Schulterpresse", gruppe: "oben" },
  { id: "seitheben_maschine", name: "Seitheben-Maschine", gruppe: "oben" },
  { id: "rudermaschine", name: "Rudermaschine mit Brustpolster", gruppe: "oben" },
  { id: "t_bar_rudern", name: "T-Bar-Rudern", gruppe: "oben" },
  { id: "iso_lateral", name: "Iso-Lateral-Maschinen (Scheiben)", gruppe: "oben", text: "Brustpresse, Latzug und Rudern mit Hantelscheiben" },
  { id: "ueberzugmaschine", name: "Überzugmaschine (Pullover)", gruppe: "oben" },
  { id: "bizepsmaschine", name: "Bizepsmaschine", gruppe: "oben" },
  { id: "trizepsmaschine", name: "Trizepsmaschine", gruppe: "oben" },
  { id: "bauchmaschine", name: "Bauchmaschine", gruppe: "oben" },
  { id: "nackenmaschine", name: "Nackenmaschine", gruppe: "oben" },
  { id: "dip_assistent", name: "Klimmzug- und Dip-Assistent", gruppe: "oben" },
  { id: "band", name: "Widerstandsbänder", gruppe: "klein" },
  { id: "mini_band", name: "Mini-Bänder", gruppe: "klein" },
  { id: "schlingentrainer", name: "Schlingentrainer (TRX)", gruppe: "klein" },
  { id: "gymnastikball", name: "Gymnastikball", gruppe: "klein" },
  { id: "box", name: "Box oder Stufe", gruppe: "klein" },
  { id: "matte", name: "Matte", gruppe: "klein" },
  { id: "faszienrolle", name: "Faszienrolle", gruppe: "klein" },
  { id: "gleitscheiben", name: "Gleitscheiben oder Handtuch", gruppe: "klein" },
  { id: "stab", name: "Stab", gruppe: "klein" },
  { id: "golfschlaeger", name: "Golfschläger", gruppe: "klein" },
  { id: "laufband", name: "Laufband", gruppe: "ausdauer" },
  { id: "fahrrad", name: "Fahrrad oder Ergometer", gruppe: "ausdauer" },
  { id: "rudergeraet", name: "Rudergerät", gruppe: "ausdauer" },
  { id: "wand", name: "Freie Wand", gruppe: "raum" },
  { id: "draussen", name: "Platz draußen", gruppe: "raum" },
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

/** Ein Grund aus der Planung als Satz. */
export function grundText(g: Grund): string {
  switch (g.art) {
    case "platz":
      return "„" + g.einheit + "“ sieht hier eine " + ROLLE[g.rolle] + " für " + MUSTER_NAME[g.muster] + " vor."
    case "ersatz":
      return "Für " + MUSTER_NAME[g.statt] + " passt an diesem Ort nichts, deshalb ein verwandtes Muster."
    case "schwachstelle":
      return "Dein Beweglichkeitstest zeigte hier Nachholbedarf (" + MUSTER_NAME[g.muster] + ")."
    case "golf":
      return g.stufe >= 3 ? "Starker Golfbezug: trainiert direkt Bewegungen aus dem Schwung." : g.stufe === 2 ? "Guter Golfbezug: unterstützt Rotation, Stabilität oder Schnellkraft im Schwung." : "Leichter Golfbezug."
    case "sport":
      return "Passt besonders zu deinem Sport."
    case "geraet":
      return "Mit " + (GERAET_NAME[g.geraet] || g.geraet) + " an diesem Ort genau steigerbar."
    case "stufe":
      return g.erfahrung === "einsteiger" ? "Technisch einfach, passend für den Einstieg." : "Anspruchsvolle Variante, passend zu deiner Erfahrung."
    case "schonung":
      return "Belastet " + g.gelenke.map((x) => GELENK_NAME[x] || x).join(" und ") + " nicht, wegen deiner Beschwerden."
    case "aufstieg":
      return "Die leichtere Variante hast du ausgereizt: Das hier ist der nächste Schritt."
    case "verlauf":
      return "Schon " + g.einheiten + " Mal trainiert, so bleibt dein Fortschritt vergleichbar."
    case "block":
      return "Bleibt den ganzen Block gleich, damit Fortschritt messbar ist. Im nächsten Block kann eine andere Übung kommen."
    case "abwechslung":
      return "Diese Woche noch nicht dran gewesen, für Abwechslung."
    case "phase":
      return "Phase " + PHASEN[g.phase].name + ": " + PHASEN[g.phase].training
    case "getauscht":
      return "Von dir getauscht."
  }
}
