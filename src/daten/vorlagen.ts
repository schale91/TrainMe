// Vorlagen für Einheiten: allgemeine Aufteilungen und sportspezifische Wochen. Ein Platz ist ein Bewegungsmuster mit
// einer Rolle; welche Übung ihn füllt, entscheidet die Planung nach Geräten, Raumhöhe, Beschwerden und Ausnahmen.

import type { Muster, Rolle } from "../logik/typen"

export interface PlatzVorlage {
  rolle: Rolle
  muster: Muster
  /** Kommt von der gewählten Position (Football) */
  position?: boolean
}

export interface EinheitVorlage {
  id: string
  titel: string
  plaetze: PlatzVorlage[]
}

const p = (rolle: Rolle, muster: Muster): PlatzVorlage => ({ rolle, muster })

export const VORLAGEN: Record<string, EinheitVorlage> = {
  // Allgemein
  ganz_a: { id: "ganz_a", titel: "Ganzkörper A", plaetze: [p("haupt", "kniebeuge"), p("haupt", "druecken_horizontal"), p("neben", "ziehen_vertikal"), p("neben", "hueftstreckung"), p("isolation", "schulter_seitlich"), p("isolation", "rumpf"), p("isolation", "bizeps")] },
  ganz_b: { id: "ganz_b", titel: "Ganzkörper B", plaetze: [p("haupt", "hueftstreckung"), p("haupt", "ziehen_horizontal"), p("neben", "druecken_vertikal"), p("neben", "einbeinig"), p("isolation", "anti_rotation"), p("isolation", "trizeps"), p("isolation", "wade")] },
  ganz_c: { id: "ganz_c", titel: "Ganzkörper C", plaetze: [p("haupt", "einbeinig"), p("haupt", "ziehen_vertikal"), p("neben", "druecken_horizontal"), p("neben", "hueftstreckung"), p("isolation", "schulter_gesund"), p("isolation", "rumpf")] },
  ober_a: { id: "ober_a", titel: "Oberkörper A", plaetze: [p("haupt", "druecken_horizontal"), p("haupt", "ziehen_horizontal"), p("neben", "druecken_vertikal"), p("neben", "ziehen_vertikal"), p("isolation", "schulter_seitlich"), p("isolation", "bizeps"), p("isolation", "trizeps")] },
  unter_a: { id: "unter_a", titel: "Unterkörper A", plaetze: [p("haupt", "kniebeuge"), p("haupt", "hueftstreckung"), p("neben", "einbeinig"), p("isolation", "hamstring_praevention"), p("isolation", "wade"), p("isolation", "rumpf")] },
  ober_b: { id: "ober_b", titel: "Oberkörper B", plaetze: [p("haupt", "ziehen_vertikal"), p("haupt", "druecken_vertikal"), p("neben", "ziehen_horizontal"), p("neben", "druecken_horizontal"), p("isolation", "brust_iso"), p("isolation", "schulter_gesund"), p("isolation", "bizeps"), p("isolation", "trizeps")] },
  unter_b: { id: "unter_b", titel: "Unterkörper B", plaetze: [p("haupt", "hueftstreckung"), p("haupt", "einbeinig"), p("neben", "kniebeuge"), p("isolation", "adduktoren"), p("isolation", "wade"), p("isolation", "anti_rotation")] },

  // Golf: Kraft, Rotationskraft und Schnellkraft (Schlägerkopfgeschwindigkeit), Hüfte und Brustwirbelsäule beweglich
  golf_unter: { id: "golf_unter", titel: "Unterkörper Kraft", plaetze: [p("haupt", "kniebeuge"), p("haupt", "hueftstreckung"), p("neben", "einbeinig"), p("praevention", "anti_rotation"), p("isolation", "rumpf"), p("mobil", "mobilitaet_huefte")] },
  golf_ober: { id: "golf_ober", titel: "Oberkörper und Rotation", plaetze: [p("schnellkraft", "schnellkraft_wurf"), p("haupt", "ziehen_horizontal"), p("haupt", "druecken_horizontal"), p("neben", "rotation"), p("praevention", "schulter_gesund"), p("mobil", "mobilitaet_bws")] },
  golf_schnell: { id: "golf_schnell", titel: "Schnellkraft", plaetze: [p("schnellkraft", "schnellkraft_wurf"), p("schnellkraft", "schnellkraft_sprung"), p("haupt", "hueftstreckung"), p("neben", "rotation"), p("isolation", "anti_rotation"), p("mobil", "mobilitaet_bws")] },
  golf_einbein: { id: "golf_einbein", titel: "Einbeinig und Hüfte", plaetze: [p("haupt", "einbeinig"), p("neben", "hueftstreckung"), p("neben", "adduktoren"), p("praevention", "anti_rotation"), p("isolation", "balance"), p("mobil", "mobilitaet_huefte")] },
  golf_zug: { id: "golf_zug", titel: "Zug, Schulter und Griff", plaetze: [p("haupt", "ziehen_vertikal"), p("neben", "druecken_vertikal"), p("neben", "ziehen_horizontal"), p("praevention", "schulter_gesund"), p("isolation", "griff"), p("isolation", "anti_rotation"), p("mobil", "mobilitaet_handgelenk")] },

  // Fußball: Kraft, Schnelligkeit, Verletzungsvorbeugung (Beinbeuger, Adduktoren)
  fb_unter: { id: "fb_unter", titel: "Unterkörper und Prävention", plaetze: [p("haupt", "kniebeuge"), p("haupt", "hueftstreckung"), p("praevention", "hamstring_praevention"), p("praevention", "adduktoren"), p("isolation", "wade"), p("isolation", "anti_rotation")] },
  fb_schnell: { id: "fb_schnell", titel: "Schnell und explosiv", plaetze: [p("schnellkraft", "schnellkraft_sprung"), p("schnellkraft", "sprint"), p("schnellkraft", "schnellkraft_wurf"), p("neben", "einbeinig"), p("praevention", "hamstring_praevention"), p("isolation", "rumpf")] },
  fb_ober: { id: "fb_ober", titel: "Oberkörper und Rumpf", plaetze: [p("haupt", "druecken_horizontal"), p("haupt", "ziehen_vertikal"), p("neben", "ziehen_horizontal"), p("neben", "druecken_vertikal"), p("isolation", "anti_rotation"), p("praevention", "schulter_gesund")] },

  // American Football: Maximalkraft, Schnellkraft, Nacken und Beinbeuger; die Position ergänzt Plätze
  af_unter: { id: "af_unter", titel: "Unterkörper Kraft", plaetze: [p("haupt", "kniebeuge"), p("haupt", "hueftstreckung"), p("neben", "einbeinig"), p("praevention", "hamstring_praevention"), p("isolation", "nacken"), p("isolation", "anti_rotation")] },
  af_ober: { id: "af_ober", titel: "Oberkörper Kraft", plaetze: [p("haupt", "druecken_horizontal"), p("haupt", "ziehen_horizontal"), p("neben", "druecken_vertikal"), p("neben", "ziehen_vertikal"), p("praevention", "schulter_gesund"), p("isolation", "nacken")] },
  af_schnell: { id: "af_schnell", titel: "Schnellkraft und Antritt", plaetze: [p("schnellkraft", "schnellkraft_sprung"), p("schnellkraft", "sprint"), p("schnellkraft", "schnellkraft_wurf"), p("haupt", "hueftstreckung"), p("praevention", "hamstring_praevention"), p("isolation", "rumpf")] },
  af_ganz: { id: "af_ganz", titel: "Einbeinig, Griff und Rumpf", plaetze: [p("haupt", "einbeinig"), p("neben", "ziehen_vertikal"), p("neben", "druecken_vertikal"), p("praevention", "adduktoren"), p("isolation", "griff"), p("isolation", "anti_rotation")] },

  // Bodybuilding: viel Volumen je Muskel, Isolationsübungen für jeden Bereich
  bb_push: { id: "bb_push", titel: "Drücken: Brust, Schulter, Trizeps", plaetze: [p("haupt", "druecken_horizontal"), p("neben", "druecken_vertikal"), p("neben", "druecken_horizontal"), p("isolation", "brust_iso"), p("isolation", "schulter_seitlich"), p("isolation", "trizeps"), p("isolation", "trizeps")] },
  bb_pull: { id: "bb_pull", titel: "Ziehen: Rücken, Bizeps", plaetze: [p("haupt", "ziehen_vertikal"), p("neben", "ziehen_horizontal"), p("neben", "ziehen_horizontal"), p("isolation", "schulter_gesund"), p("isolation", "trapez"), p("isolation", "bizeps"), p("isolation", "bizeps")] },
  bb_beine: { id: "bb_beine", titel: "Beine und Po", plaetze: [p("haupt", "kniebeuge"), p("haupt", "hueftstreckung"), p("neben", "einbeinig"), p("isolation", "hamstring_praevention"), p("isolation", "adduktoren"), p("isolation", "wade"), p("isolation", "rumpf")] },
  bb_ober: { id: "bb_ober", titel: "Oberkörper", plaetze: [p("haupt", "druecken_horizontal"), p("haupt", "ziehen_horizontal"), p("neben", "druecken_vertikal"), p("neben", "ziehen_vertikal"), p("isolation", "schulter_seitlich"), p("isolation", "bizeps"), p("isolation", "trizeps")] },
  bb_unter: { id: "bb_unter", titel: "Unterkörper", plaetze: [p("haupt", "hueftstreckung"), p("haupt", "kniebeuge"), p("neben", "einbeinig"), p("isolation", "hamstring_praevention"), p("isolation", "abduktoren"), p("isolation", "wade")] },

  // Laufen: Kraft für Laufökonomie und Belastbarkeit (einbeinig, Waden, Beinbeuger)
  lauf_kraft: { id: "lauf_kraft", titel: "Kraft für Läufer", plaetze: [p("haupt", "einbeinig"), p("haupt", "hueftstreckung"), p("praevention", "hamstring_praevention"), p("isolation", "wade"), p("isolation", "anti_rotation"), p("mobil", "mobilitaet_beine")] },
  lauf_ganz: { id: "lauf_ganz", titel: "Ganzkörper und Rumpf", plaetze: [p("haupt", "kniebeuge"), p("neben", "ziehen_horizontal"), p("neben", "druecken_horizontal"), p("praevention", "adduktoren"), p("isolation", "wade"), p("isolation", "rumpf")] },

  // Mobilität und Ausdauer
  mobil: { id: "mobil", titel: "Mobilität", plaetze: [p("mobil", "mobilitaet_ganzkoerper"), p("mobil", "mobilitaet_bws"), p("mobil", "mobilitaet_huefte"), p("mobil", "mobilitaet_schulter"), p("mobil", "mobilitaet_beine"), p("mobil", "mobilitaet_sprunggelenk"), p("mobil", "mobilitaet_huefte"), p("mobil", "mobilitaet_bws")] },
  ausdauer_ruhig: { id: "ausdauer_ruhig", titel: "Ausdauer ruhig", plaetze: [p("ausdauer", "ausdauer_ruhig")] },
  ausdauer_intervall: { id: "ausdauer_intervall", titel: "Ausdauer Intervalle", plaetze: [p("ausdauer", "ausdauer_intervall")] },
}

/** Reihenfolge der Krafteinheiten je Anzahl Krafttage in der Woche. */
export const AUFTEILUNG: Record<string, Record<number, string[]>> = {
  allgemein: {
    1: ["ganz_a"],
    2: ["ganz_a", "ganz_b"],
    3: ["ganz_a", "ganz_b", "ganz_c"],
    4: ["ober_a", "unter_a", "ober_b", "unter_b"],
    5: ["ober_a", "unter_a", "ganz_c", "ober_b", "unter_b"],
    6: ["ober_a", "unter_a", "ganz_c", "ober_b", "unter_b", "ganz_a"],
  },
  golf: {
    1: ["golf_unter"],
    2: ["golf_unter", "golf_ober"],
    3: ["golf_unter", "golf_ober", "golf_schnell"],
    4: ["golf_unter", "golf_ober", "golf_einbein", "golf_zug"],
    5: ["golf_unter", "golf_ober", "golf_schnell", "golf_einbein", "golf_zug"],
    6: ["golf_unter", "golf_ober", "golf_schnell", "golf_einbein", "golf_zug", "ganz_c"],
  },
  fussball: {
    1: ["fb_unter"],
    2: ["fb_unter", "fb_ober"],
    3: ["fb_unter", "fb_schnell", "fb_ober"],
    4: ["fb_unter", "fb_ober", "fb_schnell", "ganz_c"],
    5: ["fb_unter", "fb_ober", "fb_schnell", "unter_b", "ober_b"],
    6: ["fb_unter", "fb_ober", "fb_schnell", "unter_b", "ober_b", "mobil"],
  },
  football: {
    1: ["af_ganz"],
    2: ["af_unter", "af_ober"],
    3: ["af_unter", "af_ober", "af_schnell"],
    4: ["af_unter", "af_ober", "af_schnell", "af_ganz"],
    5: ["af_unter", "af_ober", "af_schnell", "af_ganz", "ober_b"],
    6: ["af_unter", "af_ober", "af_schnell", "af_ganz", "ober_b", "unter_b"],
  },
  bodybuilding: {
    1: ["ganz_a"],
    2: ["bb_ober", "bb_unter"],
    3: ["bb_push", "bb_pull", "bb_beine"],
    4: ["bb_ober", "bb_unter", "ober_b", "unter_b"],
    5: ["bb_push", "bb_pull", "bb_beine", "bb_ober", "bb_unter"],
    6: ["bb_push", "bb_pull", "bb_beine", "bb_push", "bb_pull", "bb_beine"],
  },
  laufen: {
    1: ["lauf_kraft"],
    2: ["lauf_kraft", "lauf_ganz"],
    3: ["lauf_kraft", "lauf_ganz", "ober_a"],
    4: ["lauf_kraft", "ober_a", "lauf_ganz", "ober_b"],
    5: ["lauf_kraft", "ober_a", "lauf_ganz", "ober_b", "mobil"],
    6: ["lauf_kraft", "ober_a", "lauf_ganz", "ober_b", "mobil", "mobil"],
  },
}

/** Fehlt für ein Muster jede passende Übung, nimmt die Planung das nächste aus dieser Liste. */
export const ERSATZ: Partial<Record<Muster, Muster[]>> = {
  ziehen_vertikal: ["ziehen_horizontal"],
  druecken_vertikal: ["druecken_horizontal"],
  kniebeuge: ["einbeinig"],
  hueftstreckung: ["einbeinig"],
  schnellkraft_wurf: ["schnellkraft_sprung", "rotation"],
  schnellkraft_sprung: ["schnellkraft_wurf", "einbeinig"],
  sprint: ["schnellkraft_sprung"],
  rotation: ["anti_rotation"],
  adduktoren: ["einbeinig"],
  griff: ["anti_rotation"],
  hamstring_praevention: ["hueftstreckung"],
  bizeps: ["ziehen_horizontal"],
  trizeps: ["druecken_horizontal"],
  brust_iso: ["druecken_horizontal"],
  schulter_seitlich: ["schulter_gesund", "druecken_vertikal"],
  trapez: ["ziehen_horizontal"],
  nacken: ["schulter_gesund"],
  abduktoren: ["einbeinig"],
  balance: ["einbeinig"],
  mobilitaet_sprunggelenk: ["mobilitaet_beine"],
  mobilitaet_handgelenk: ["mobilitaet_schulter"],
  mobilitaet_nacken: ["mobilitaet_bws"],
  mobilitaet_ganzkoerper: ["mobilitaet_huefte"],
  wade: ["einbeinig"],
  mobilitaet_huefte: ["mobilitaet_beine"],
  mobilitaet_schulter: ["mobilitaet_bws"],
  mobilitaet_beine: ["mobilitaet_huefte"],
  ausdauer_intervall: ["ausdauer_ruhig"],
}

/** Sportprofile für die Einrichtung. */
export const SPORTARTEN: { id: string; name: string; termine: { id: string; name: string }[]; text: string }[] = [
  { id: "allgemein", name: "Kein bestimmter Sport", termine: [], text: "Ausgewogener Plan nach deinem Ziel." },
  { id: "golf", name: "Golf", termine: [{ id: "runde", name: "Runde" }, { id: "turnier", name: "Turnier" }], text: "Kraft, Rotationskraft und Schnellkraft für mehr Schlägerkopfgeschwindigkeit, dazu Hüfte und Brustwirbelsäule beweglich halten." },
  { id: "fussball", name: "Fußball", termine: [{ id: "mannschaftstraining", name: "Mannschaftstraining" }, { id: "spiel", name: "Spiel" }], text: "Kraft, Schnelligkeit und Vorbeugung (Beinbeuger, Adduktoren). Schwere Beine nie direkt vor dem Spiel." },
  { id: "football", name: "Football", termine: [{ id: "mannschaftstraining", name: "Teamtraining" }, { id: "spiel", name: "Spiel" }], text: "American Football: Maximalkraft, Antritt und Schnellkraft, dazu Nacken, Beinbeuger und Adduktoren. Die Position bestimmt die Schwerpunkte." },
  { id: "laufen", name: "Laufen", termine: [{ id: "lauf", name: "Lauf" }, { id: "turnier", name: "Wettkampf" }], text: "Einbeinige Kraft, Waden und Beinbeuger für Laufökonomie und Belastbarkeit." },
  { id: "bodybuilding", name: "Bodybuilding", termine: [], text: "Muskelaufbau für jeden Bereich: viel Volumen, Isolationsübungen, Sätze nah ans Muskelversagen. Splits wie Drücken, Ziehen, Beine." },
]

export interface Position {
  id: string
  name: string
  kurz: string
  /** Was die Position braucht, ein Satz */
  text: string
  /** Zusätzliche Plätze je Vorlage */
  extra: Record<string, PlatzVorlage[]>
  /** Muster, die für die Position wegfallen */
  ohne: Muster[]
}

const x = (rolle: Rolle, muster: Muster): PlatzVorlage => ({ rolle, muster, position: true })

// Gruppen nach Anforderung: Linie (Kraft und Masse), Kraft und Tempo, Tempo, Quarterback, Kicker
const LINIE = { extra: { af_ober: [x("isolation", "trapez")], af_unter: [x("neben", "kniebeuge")], af_ganz: [x("isolation", "nacken")] }, ohne: [] as Muster[] }
const KRAFT_TEMPO = { extra: { af_ganz: [x("isolation", "nacken")], af_schnell: [x("schnellkraft", "schnellkraft_sprung")] }, ohne: [] as Muster[] }
const TEMPO = { extra: { af_unter: [x("praevention", "adduktoren")], af_schnell: [x("schnellkraft", "sprint")], af_ganz: [x("praevention", "hamstring_praevention")] }, ohne: [] as Muster[] }

export const POSITIONEN: Position[] = [
  { id: "qb", name: "Quarterback", kurz: "QB", text: "Wurfarm und Schulter gesund halten, Rotation aus der Hüfte, bewegliche Brustwirbelsäule, stabile Beine.", extra: { af_ober: [x("neben", "rotation"), x("mobil", "mobilitaet_bws")], af_ganz: [x("praevention", "schulter_gesund")], af_schnell: [x("neben", "rotation")] }, ohne: ["nacken"] },
  { id: "rb", name: "Running Back", kurz: "RB", text: "Antritt, Richtungswechsel und Kontakt: Beinkraft, Schnellkraft und ein starker Nacken.", ...KRAFT_TEMPO },
  { id: "wr", name: "Wide Receiver", kurz: "WR", text: "Sprinttempo und Richtungswechsel: Schnellkraft, Beinbeuger und Adduktoren schützen, Griff für den Fang.", ...TEMPO },
  { id: "te", name: "Tight End", kurz: "TE", text: "Blocken und Fangen: Kraft wie die Linie, dazu Antritt.", ...KRAFT_TEMPO },
  { id: "ol", name: "Offensive Line", kurz: "OL", text: "Maximalkraft und Masse, Druck aus der Hüfte, kräftiger Oberkörper und Nacken.", ...LINIE },
  { id: "dl", name: "Defensive Line", kurz: "DL", text: "Explosiver erster Schritt, Maximalkraft, Hände und Griff, Nacken.", ...LINIE },
  { id: "lb", name: "Linebacker", kurz: "LB", text: "Tackeln und Laufen: Kraft und Schnellkraft im Gleichgewicht, starker Nacken.", ...KRAFT_TEMPO },
  { id: "db", name: "Defensive Back", kurz: "CB, S", text: "Rückwärtslaufen, Drehen, Sprinten: Tempo, Beinbeuger und Adduktoren schützen.", ...TEMPO },
  { id: "k", name: "Kicker oder Punter", kurz: "K, P", text: "Schussbein: Hüftbeuger, Adduktoren und Beinbeuger kräftig und beweglich, einbeiniges Gleichgewicht.", extra: { af_unter: [x("praevention", "adduktoren"), x("mobil", "mobilitaet_huefte")], af_ganz: [x("isolation", "balance")], af_schnell: [x("mobil", "mobilitaet_beine")] }, ohne: ["nacken"] },
]

export function positionVon(id?: string): Position | null {
  return POSITIONEN.find((p) => p.id === id) || null
}
