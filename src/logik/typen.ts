// Gemeinsame Typen von TrainMe. Alles läuft auf dem Gerät, es gibt keinen Server.

export type Gelenk = "knie" | "schulter" | "ruecken" | "huefte" | "handgelenk" | "ellbogen" | "sprunggelenk" | "nacken"

/** Bewegungsmuster: daraus baut die Planung ihre Einheiten. */
export type Muster =
  | "kniebeuge"
  | "hueftstreckung"
  | "einbeinig"
  | "druecken_horizontal"
  | "druecken_vertikal"
  | "ziehen_horizontal"
  | "ziehen_vertikal"
  | "rotation"
  | "anti_rotation"
  | "rumpf"
  | "wade"
  | "adduktoren"
  | "hamstring_praevention"
  | "arme"
  | "schulter_gesund"
  | "griff"
  | "schnellkraft_wurf"
  | "schnellkraft_sprung"
  | "sprint"
  | "mobilitaet_huefte"
  | "mobilitaet_bws"
  | "mobilitaet_schulter"
  | "mobilitaet_beine"
  | "ausdauer_ruhig"
  | "ausdauer_intervall"

export type Geraet =
  | "kurzhantel"
  | "langhantel"
  | "kettlebell"
  | "kabelzug"
  | "maschine_beine"
  | "maschine_oberkoerper"
  | "klimmzugstange"
  | "bank"
  | "band"
  | "medizinball"
  | "box"
  | "matte"
  | "wand"
  | "laufband"
  | "fahrrad"
  | "rudergeraet"
  | "draussen"

/** Wie eine Übung gesteigert wird. */
export type Belastungsart = "gewicht" | "wiederholungen" | "zeit" | "distanz"

export type Trainingsart = "kraft" | "mobilitaet" | "ausdauer"

export interface Uebung {
  id: string
  name: string
  muster: Muster
  art: Trainingsart
  /** Muskeln für die Wochensätze je Muskel */
  muskeln: string[]
  /** Eine der Gruppen muss vollständig vorhanden sein (leere Gruppe: ohne Gerät). */
  geraete: Geraet[][]
  /** Gerät, dessen Gewichtsstufen die Last bestimmen */
  last?: "kurzhantel" | "langhantel" | "kettlebell" | "kabelzug" | "maschine_beine" | "maschine_oberkoerper" | "medizinball" | "band"
  belastung: Belastungsart
  /** Nötige Raumhöhe in cm (Arme über Kopf, Sprünge, Klimmzug) */
  hoehe_cm: number
  /** Belastung je Gelenk: 1 mäßig, 2 hoch. Fehlt ein Gelenk, ist es kaum belastet. */
  gelenke: Partial<Record<Gelenk, 1 | 2>>
  /** Schwierigkeit 1 (einfach) bis 3 (technisch anspruchsvoll) */
  stufe: 1 | 2 | 3
  /** Sportarten, für die die Übung besonders passt */
  sport?: string[]
  /** Für Übungen mit Körpergewicht: nächste schwerere Variante */
  schwerer?: string
  hinweis?: string
}

export type Ziel = "muskelaufbau" | "kraft" | "fitness" | "abnehmen" | "sport"
export type Erfahrung = "einsteiger" | "fortgeschritten" | "erfahren"
export type Saison = "vorbereitung" | "wettkampf" | "pause"

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
  /** Startdatum des aktuellen Blocks (JJJJ-MM-TT) */
  block_start: string
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
}

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

export interface Daten {
  version: 1
  profil: Profil | null
  protokoll: Protokoll[]
  erledigt: Erledigt[]
  spiel: Spielstand
}
