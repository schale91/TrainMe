// Gemeinsame Typen von TrainMe. Alles läuft auf dem Gerät, es gibt keinen Server.

export type Gelenk = "knie" | "schulter" | "ruecken" | "huefte" | "handgelenk" | "ellbogen" | "sprunggelenk" | "nacken"

/** Bewegungsmuster: daraus baut die Planung ihre Einheiten. */
export const MUSTER = [
  "kniebeuge",
  "hueftstreckung",
  "einbeinig",
  "druecken_horizontal",
  "druecken_vertikal",
  "ziehen_horizontal",
  "ziehen_vertikal",
  "brust_iso",
  "schulter_seitlich",
  "schulter_gesund",
  "trapez",
  "bizeps",
  "trizeps",
  "griff",
  "nacken",
  "rotation",
  "anti_rotation",
  "rumpf",
  "wade",
  "adduktoren",
  "abduktoren",
  "hamstring_praevention",
  "balance",
  "schnellkraft_wurf",
  "schnellkraft_sprung",
  "sprint",
  "mobilitaet_huefte",
  "mobilitaet_bws",
  "mobilitaet_schulter",
  "mobilitaet_beine",
  "mobilitaet_sprunggelenk",
  "mobilitaet_handgelenk",
  "mobilitaet_nacken",
  "mobilitaet_ganzkoerper",
  "ausdauer_ruhig",
  "ausdauer_intervall",
] as const
export type Muster = (typeof MUSTER)[number]

export const GERAETE_IDS = [
  // freie Gewichte
  "kurzhantel",
  "langhantel",
  "sz_stange",
  "trap_bar",
  "kettlebell",
  "hantelscheibe",
  "medizinball",
  // Bänke und Ständer
  "bank",
  "scottbank",
  "rack",
  "klimmzugstange",
  "dip_station",
  "landmine",
  "multipresse",
  // Kabel
  "kabelzug",
  "kabelturm",
  "latzug",
  "kabelrudern",
  // Maschinen Beine und Hüfte
  "beinpresse",
  "hackenschmidt",
  "pendelkniebeuge",
  "beltsquat",
  "beinstrecker",
  "beinbeuger_liegend",
  "beinbeuger_sitzend",
  "beinbeuger_stehend",
  "ab_adduktoren",
  "gesaessmaschine",
  "wadenmaschine_stehend",
  "wadenmaschine_sitzend",
  "rueckenstrecker",
  "ghd",
  // Maschinen Oberkörper
  "brustpresse",
  "butterfly",
  "schulterpresse",
  "seitheben_maschine",
  "rudermaschine",
  "t_bar_rudern",
  "iso_lateral",
  "ueberzugmaschine",
  "bizepsmaschine",
  "trizepsmaschine",
  "bauchmaschine",
  "nackenmaschine",
  "dip_assistent",
  // Kleingeräte
  "band",
  "mini_band",
  "schlingentrainer",
  "gymnastikball",
  "box",
  "matte",
  "wand",
  "stab",
  "golfschlaeger",
  "faszienrolle",
  "gleitscheiben",
  // Ausdauer und Raum
  "laufband",
  "fahrrad",
  "rudergeraet",
  "draussen",
] as const
export type Geraet = (typeof GERAETE_IDS)[number]

/** Geräte, deren Gewichtsstufen die Last bestimmen. */
export const MASCHINEN: readonly Geraet[] = ["kabelzug", "kabelturm", "latzug", "kabelrudern", "beinpresse", "hackenschmidt", "pendelkniebeuge", "beltsquat", "beinstrecker", "beinbeuger_liegend", "beinbeuger_sitzend", "beinbeuger_stehend", "ab_adduktoren", "gesaessmaschine", "wadenmaschine_stehend", "wadenmaschine_sitzend", "brustpresse", "butterfly", "schulterpresse", "seitheben_maschine", "rudermaschine", "t_bar_rudern", "iso_lateral", "ueberzugmaschine", "bizepsmaschine", "trizepsmaschine", "bauchmaschine", "nackenmaschine", "dip_assistent"]
export const FREIE_LASTEN: readonly Geraet[] = ["kurzhantel", "langhantel", "sz_stange", "trap_bar", "kettlebell", "hantelscheibe", "multipresse", "medizinball", "band"]
/** Geräte, deren Gewichtsstufen die Last bestimmen. */
export const LASTGERAETE: readonly Geraet[] = [...FREIE_LASTEN, ...MASCHINEN]

/** Wie eine Übung gesteigert wird. */
export type Belastungsart = "gewicht" | "wiederholungen" | "zeit" | "distanz"

export type Trainingsart = "kraft" | "mobilitaet" | "ausdauer"

export const MUSKELN = [
  "brust",
  "schulter_vorn",
  "schulter_seitlich",
  "schulter_hinten",
  "rotatorenmanschette",
  "latissimus",
  "oberer_ruecken",
  "trapez",
  "ruecken_unten",
  "bizeps",
  "trizeps",
  "unterarm",
  "bauch",
  "schraege_bauch",
  "gesaess",
  "gesaess_mittel",
  "hueftbeuger",
  "quadrizeps",
  "beinbeuger",
  "adduktoren",
  "waden",
  "schienbein",
  "nacken",
  "ganzkoerper",
  "herz_kreislauf",
] as const
export type Muskel = (typeof MUSKELN)[number]

/** Ausführliche Anleitung für das Info-Fenster. */
export interface UebungInfo {
  /** Ein Satz: was die Übung ist und wofür */
  kurz: string
  /** Schritte von der Ausgangsposition bis zum Ende, je ein ganzer Satz */
  ausfuehrung: string[]
  atmung: string
  /** Typische Fehler und wie man sie vermeidet */
  fehler: string[]
  /** Wirkung und Nutzen */
  vorteile: string[]
  tipps: string[]
  /** Leichter oder schwerer machen */
  varianten?: string
  /** Wer vorsichtig sein sollte */
  sicherheit?: string
  /** Nutzen für Golfer, wenn golf >= 2 */
  golf?: string
}

export interface Uebung {
  id: string
  name: string
  /** Weitere Namen zum Suchen (englische Bezeichnung, Studio-Jargon) */
  auch?: string[]
  muster: Muster
  art: Trainingsart
  /** Hauptsächlich beanspruchte Muskeln */
  muskeln: Muskel[]
  sekundaer?: Muskel[]
  /** Eine der Gruppen muss vollständig vorhanden sein (leere Gruppe: ohne Gerät). */
  geraete: Geraet[][]
  belastung: Belastungsart
  /** Nötige Raumhöhe in cm (Arme über Kopf, Sprünge, Klimmzug) */
  hoehe_cm: number
  /** Belastung je Gelenk: 1 mäßig, 2 hoch. Fehlt ein Gelenk, ist es kaum belastet. */
  gelenke: Partial<Record<Gelenk, 1 | 2>>
  /** Schwierigkeit 1 (einfach) bis 3 (technisch anspruchsvoll) */
  stufe: 1 | 2 | 3
  /** Sportarten, für die die Übung besonders passt */
  sport?: string[]
  /** Bedeutung für Golf: 1 hilfreich, 2 wichtig, 3 golfspezifisch */
  golf?: 1 | 2 | 3
  /** Einseitig ausgeführt (Zeiten und Wiederholungen je Seite) */
  einseitig?: boolean
  /** Für Übungen mit Körpergewicht: nächste schwerere Variante */
  schwerer?: string
  /** Kurzer Hinweis direkt in der Einheit */
  hinweis?: string
  info: UebungInfo
}

export type Ziel = "muskelaufbau" | "kraft" | "fitness" | "abnehmen" | "sport"
export type Erfahrung = "einsteiger" | "fortgeschritten" | "erfahren"
export type Saison = "vorbereitung" | "wettkampf" | "pause"

/** Trainingsphase eines Blocks im Jahresplan. Die Phasen bauen aufeinander auf: Grundlage, Kraft, Schnellkraft, Erhalt, Übergang. */
export type Phase = "grundlage" | "kraft" | "schnellkraft" | "erhalt" | "uebergang"

export interface Jahresplan {
  /** Montag, an dem der erste Block des Plans beginnt */
  start: string
  /** Phase je Block (ein Block = 5 Wochen) */
  bloecke: Phase[]
  /** Wettkampf- oder Spielsaison als Monate 1 bis 12, null ohne feste Saison */
  saison: { von: number; bis: number } | null
}

/** Was an einem Wochentag ansteht. */
export type Tagesart = "frei" | "training" | "sporttermin"
export type Schwerpunkt = "automatisch" | "kraft" | "mobilitaet" | "ausdauer"
export type Termin = "mannschaftstraining" | "spiel" | "turnier" | "runde" | "lauf"

export interface Wochentag {
  art: Tagesart
  /** Index in profil.orte */
  ort?: number
  minuten?: number
  schwerpunkt?: Schwerpunkt
  termin?: Termin
}

export interface Gewichte {
  /** Kurzhanteln je Hand in kg */
  kurzhanteln: number[]
  /** Langhantelstange in kg (0: keine) */
  stange: number
  /** SZ-Stange in kg (0: keine), nutzt dieselben Scheiben */
  sz_stange: number
  /** Trap Bar (Sechseckstange) in kg (0: keine) */
  trap_bar: number
  /** Stange der Multipresse in kg (0: keine) */
  multipresse_stange: number
  /** Hantelscheiben, die paarweise vorhanden sind (kg je Scheibe) */
  scheiben: number[]
  kettlebells: number[]
  medizinbaelle: number[]
  /** Schrittweite an Maschinen und am Kabelzug */
  maschine_schritt: number
  maschine_max: number
  /** Widerstandsbänder, leicht bis schwer (Stufen) */
  baender: number
}

export interface Ort {
  name: string
  geraete: Geraet[]
  gewichte: Gewichte
  deckenhoehe_cm: number
}

export interface Beschwerde {
  gelenk: Gelenk
  /** schonen: keine hoch belastenden Übungen; meiden: gar keine Belastung */
  grad: "schonen" | "meiden"
}

export interface Profil {
  name: string
  ziel: Ziel
  erfahrung: Erfahrung
  sport: string
  saison: Saison
  arten: Trainingsart[]
  woche: Wochentag[] // 0 = Montag … 6 = Sonntag
  orte: Ort[]
  beschwerden: Beschwerde[]
  ausgeschlossen: string[]
  koerpergewicht_kg?: number
  /** Position im Football (qb, rb, wr, te, ol, dl, lb, db, k) */
  position?: string
  /** Startdatum des aktuellen Blocks (JJJJ-MM-TT) */
  block_start: string
  /** Grober Plan für das Jahr, Phase je Block */
  jahresplan?: Jahresplan
}

/** Ein Platz in einer Einheit, bevor eine Übung gewählt ist. */
export type Rolle = "haupt" | "neben" | "isolation" | "praevention" | "schnellkraft" | "mobil" | "ausdauer"

export interface Vorgabe {
  saetze: number
  wdh_von: number
  wdh_bis: number
  /** Ziel-Wiederholungen im Tank */
  rir: number
  /** kg, Sekunden oder Meter, je nach Belastungsart; null = Körpergewicht oder frei */
  last: number | null
  modell: Progressionsmodell
  pause_s: number
  begruendung: string
}

export type Progressionsmodell = "linear" | "doppelt" | "rir" | "prozent" | "qualitaet" | "zeit"

export interface Platz {
  rolle: Rolle
  muster: Muster
  uebung: Uebung
  vorgabe: Vorgabe
  /** Warum genau diese Übung auf diesem Platz steht */
  warum?: Grund[]
}

/** Ein Grund für die Auswahl einer Übung, als Text aufbereitet in der Oberfläche. */
export type Grund =
  | { art: "platz"; einheit: string; rolle: Rolle; muster: Muster }
  | { art: "ersatz"; statt: Muster }
  | { art: "schwachstelle"; muster: Muster }
  | { art: "golf"; stufe: number }
  | { art: "sport"; sport: string }
  | { art: "geraet"; geraet: string }
  | { art: "stufe"; stufe: number; erfahrung: Erfahrung }
  | { art: "schonung"; gelenke: string[] }
  | { art: "verlauf"; einheiten: number }
  | { art: "block" }
  | { art: "abwechslung" }
  | { art: "aufstieg" }
  | { art: "phase"; phase: Phase }
  | { art: "getauscht" }
  | { art: "position"; position: string }

export interface Einheit {
  datum: string
  titel: string
  art: Trainingsart | "regeneration"
  ort: number
  minuten: number
  plaetze: Platz[]
  hinweise: string[]
}

export interface Satz {
  last: number | null
  wdh: number
  rir: number
  sekunden?: number
}

export interface Protokoll {
  datum: string
  uebung: string
  saetze: Satz[]
}

export interface Erledigt {
  datum: string
  titel: string
  minuten: number
  saetze: number
  xp: number
  rekorde: string[]
  art?: Trainingsart | "regeneration"
  /** geplanter Tag, falls vor- oder nachgeholt */
  geplant?: string
  entlastung?: boolean
}

export interface Spielstand {
  xp: number
  abzeichen: Record<string, string> // id → Datum
}


/** Ergebnis eines Beweglichkeitstests */
export interface Messung {
  test: string
  datum: string
  /** Messwert je Seite oder ein Wert (links, rechts) */
  wert: number
  rechts?: number
}

export interface Daten {
  version: 1
  profil: Profil | null
  protokoll: Protokoll[]
  erledigt: Erledigt[]
  spiel: Spielstand
  messungen: Messung[]
  /** Werte aus Health Connect, je Tag */
  gesundheit?: { verbunden: boolean; tage: Record<string, Tageswerte> }
  /** Geschätztes oder gemessenes Maximum (1 Wiederholung) je Übung aus der Einstufung */
  maxwerte?: Record<string, { kg: number; datum: string }>
  /** Wann die Einstufung erledigt wurde */
  einstufung?: { kraft?: string; mobil?: string }
}

export interface Tageswerte {
  schritte?: number
  /** Schlaf der Nacht vor diesem Tag in Minuten */
  schlaf_min?: number
  ruhepuls?: number
  hrv?: number
}
