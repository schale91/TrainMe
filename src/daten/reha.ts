// Reha und Gelenke: Beschwerdebilder, Warnzeichen, Übungsfamilien mit Stufen, Funktionstests und Wissen.
//
// Aufbau nach dem neuromuskulären Programm NEMEX-TJR (Ageberg et al. 2010), auf dem GLA:D beruht: vier Kreise
// (Rumpf und Becken, Haltung und Gleichgewicht, Kraft der Beine, Alltagsbewegungen), je Übung mehrere Stufen,
// 2 bis 3 Sätze mit 10 bis 15 Wiederholungen. Weiter geht es, wenn die Übung sauber gelingt und kaum schmerzt.
// Schmerz-Ampel nach dem Schmerzmonitoring-Modell (Thomeé 1997): 0 bis 2 gut, bis 5 in Ordnung, wenn es bis zum
// nächsten Morgen abklingt, über 5 zu viel. Wie Reha-Apps (Vivira, Joint Academy) passt sich der Plan an die
// Rückmeldungen an: Schmerz je Satz, Reaktion am nächsten Morgen und Funktionstests alle fünf Wochen.

import type { Phase, RehaBild } from "../logik/typen"

export interface BildInfo {
  id: RehaBild
  name: string
  gelenk: "huefte" | "knie" | "ruecken"
  text: string
  /** Operation: Datum abfragen, Frühphase beachten */
  op?: boolean
  /** Übungsfamilien, wichtigste zuerst */
  familien: string[]
  /** Besondere Hinweise für die Einheit */
  hinweis?: string
}

export const BILDER: BildInfo[] = [
  {
    id: "huefte_arthrose",
    name: "Hüftarthrose",
    gelenk: "huefte",
    text: "Verschleiß im Hüftgelenk: Anlaufschmerz, Steifigkeit, Schmerzen in Leiste oder Oberschenkel. Kraft, Gleichgewicht und Alltagsbewegungen sind die wirksamste Behandlung.",
    familien: ["gesaess", "abspreizer", "aufstehen", "gleichgewicht", "rumpf", "stufe", "knie_ueber_fuss", "beweglich_huefte"],
  },
  {
    id: "huefte_tep",
    name: "Neues Hüftgelenk (Hüft-TEP)",
    gelenk: "huefte",
    op: true,
    text: "Nach der Operation: In den ersten Wochen gilt der Plan der Klinik und der Reha. Danach baut TrainMe Kraft und Gleichgewicht für den Alltag auf.",
    familien: ["gesaess", "abspreizer", "aufstehen", "gleichgewicht", "stufe", "rumpf", "knie_ueber_fuss", "beweglich_huefte"],
  },
  {
    id: "huefte_seitlich",
    name: "Seitlicher Hüftschmerz",
    gelenk: "huefte",
    text: "Schmerz außen am Hüftknochen, oft beim Liegen auf der Seite oder Treppensteigen (meist Sehnen der Gesäßmuskeln). Kräftigen ohne Druck auf die Sehne.",
    familien: ["abspreizer_sanft", "gesaess", "aufstehen", "stufe", "gleichgewicht", "rumpf"],
    hinweis: "Seitlicher Hüftschmerz: Beine nicht übereinanderschlagen, beim Stehen nicht in eine Hüfte hängen, nachts ein Kissen zwischen die Knie.",
  },
  {
    id: "huefte_leiste",
    name: "Leistenschmerz (z. B. Hüftimpingement)",
    gelenk: "huefte",
    text: "Schmerz in der Leiste bei tiefem Beugen, langem Sitzen oder Drehbewegungen. Kräftigen ja, tiefe Beugung unter Last vorerst meiden.",
    familien: ["gesaess", "abspreizer", "rumpf", "gleichgewicht", "aufstehen", "knie_ueber_fuss", "beweglich_huefte"],
  },
  {
    id: "knie_arthrose",
    name: "Kniearthrose",
    gelenk: "knie",
    text: "Verschleiß im Kniegelenk: Schmerzen beim Gehen, Treppen und Aufstehen. Kräftige Oberschenkel und Hüfte entlasten das Knie.",
    familien: ["knie_strecker", "aufstehen", "abspreizer", "stufe", "gleichgewicht", "kniebeuge", "wade", "rumpf"],
  },
  {
    id: "knie_tep",
    name: "Neues Kniegelenk (Knie-TEP)",
    gelenk: "knie",
    op: true,
    text: "Nach der Operation: erst Beweglichkeit und Strecken nach dem Plan der Klinik, danach Kraft und Alltagsbewegungen.",
    familien: ["knie_strecker", "aufstehen", "stufe", "gleichgewicht", "abspreizer", "kniebeuge", "wade"],
  },
  {
    id: "ruecken",
    name: "Kreuzschmerz",
    gelenk: "ruecken",
    text: "Schmerzen im unteren Rücken ohne bekannte Ursache wie Bruch oder Entzündung. Bewegung und Kräftigung helfen, Schonung eher nicht.",
    familien: ["beweglich_ruecken", "rumpf", "gesaess", "hueftbeuge", "aufstehen", "gleichgewicht"],
  },
]

export const bildInfo = (id: RehaBild) => BILDER.find((b) => b.id === id)!

/** Warnzeichen: Trifft eines zu, erst ärztlich abklären statt trainieren. */
export const WARNZEICHEN: string[] = [
  "Fieber oder Schüttelfrost zusammen mit Gelenk- oder Rückenschmerzen",
  "Gelenk ist rot, heiß oder plötzlich stark geschwollen",
  "Plötzlich starke Schmerzen, oder das Bein lässt sich nicht mehr belasten",
  "Schmerzen nach einem Sturz",
  "Nach einer Operation: Wunde nässt, rötet sich oder geht auf",
  "Wade dick, warm oder schmerzhaft (möglicher Blutpfropf)",
  "Bein plötzlich kürzer oder verdreht nach einer Hüft-OP",
  "Taubheit oder Schwäche im Bein, Probleme mit Blase oder Darm",
  "Starke Schmerzen in Ruhe und nachts, ungewollter Gewichtsverlust",
]

export const NOTRUF = "Atemnot, Brustschmerz oder plötzliche Lähmung: sofort 112 anrufen."

export type Kreis = "kraft" | "alltag" | "gleichgewicht" | "rumpf" | "beweglich" | "frueh"

export const KREIS_NAME: Record<Kreis, string> = {
  kraft: "Kraft",
  alltag: "Alltag",
  gleichgewicht: "Gleichgewicht",
  rumpf: "Rumpf",
  beweglich: "Beweglichkeit",
  frueh: "Frühphase",
}

export interface Stufe {
  id: string
  /** Übung am Boden: nur, wenn man sicher auf den Boden und wieder hoch kommt */
  boden?: boolean
  /** Freies Gleichgewicht ohne Halt: nicht für Menschen, die Halt brauchen */
  frei?: boolean
  /** Tiefe Hüftbeugung oder Bein über die Mitte: nicht bei Bewegungsgrenzen nach Hüft-OP */
  grenze?: boolean
}

export interface Familie {
  id: string
  name: string
  kreis: Kreis
  zweck: string
  stufen: Stufe[]
}

const s = (id: string, extra: Omit<Stufe, "id"> = {}): Stufe => ({ id, ...extra })

export const FAMILIEN: Familie[] = [
  {
    id: "gesaess",
    name: "Gesäß und Hüftstrecker",
    kreis: "kraft",
    zweck: "Kräftige Hüftstrecker stabilisieren das Becken beim Gehen und Aufstehen.",
    stufen: [s("reha_gesaess_anspannen"), s("reha_bein_hinten_stand"), s("glute_bridge", { boden: true }), s("reha_bein_hinten_band"), s("glute_bridge_marsch", { boden: true }), s("glute_bridge_einbeinig", { boden: true })],
  },
  {
    id: "abspreizer",
    name: "Seitliche Hüftmuskeln",
    kreis: "kraft",
    zweck: "Die seitlichen Gesäßmuskeln halten das Becken beim Gehen waagerecht und entlasten das Gelenk.",
    stufen: [s("reha_abspreizen_stand"), s("reha_abspreizen_band"), s("reha_seitschritte_band"), s("abduktion_seitlage", { boden: true })],
  },
  {
    id: "abspreizer_sanft",
    name: "Seitliche Hüftmuskeln ohne Druck",
    kreis: "kraft",
    zweck: "Bei seitlichem Hüftschmerz erst halten statt bewegen, dann ohne Druck auf die Sehne kräftigen.",
    stufen: [s("abduktion_wand_isometrisch"), s("reha_abspreizen_stand"), s("reha_abspreizen_band"), s("reha_seitschritte_band")],
  },
  {
    id: "knie_strecker",
    name: "Vorderer Oberschenkel",
    kreis: "kraft",
    zweck: "Ein kräftiger Oberschenkel fängt Stöße ab und entlastet das Knie.",
    stufen: [s("reha_oberschenkel_anspannen"), s("reha_knie_strecken_sitz"), s("reha_knie_strecken_band")],
  },
  {
    id: "wade",
    name: "Waden",
    kreis: "kraft",
    zweck: "Starke Waden helfen beim Abdrücken im Gehen und beim Gleichgewicht.",
    stufen: [s("reha_fersenheben_stuhl"), s("reha_fersenheben_einbeinig")],
  },
  {
    id: "hueftbeuge",
    name: "Bücken mit geradem Rücken",
    kreis: "kraft",
    zweck: "Aus der Hüfte beugen statt aus dem Rücken: schont den Rücken beim Heben im Alltag.",
    stufen: [s("reha_mini_kniebeuge"), s("hip_hinge_stab")],
  },
  {
    id: "aufstehen",
    name: "Aufstehen und Hinsetzen",
    kreis: "alltag",
    zweck: "Die wichtigste Alltagsbewegung: Aufstehen vom Stuhl, vom Sofa, von der Toilette.",
    stufen: [s("reha_aufstehen_arme"), s("reha_aufstehen"), s("reha_aufstehen_langsam"), s("reha_aufstehen_gewicht")],
  },
  {
    id: "kniebeuge",
    name: "Kniebeuge mit Halt",
    kreis: "alltag",
    zweck: "Kontrolliertes Beugen der Knie, Knie zeigen über die Füße.",
    stufen: [s("reha_mini_kniebeuge"), s("reha_ausfallschritt_halt", { grenze: true })],
  },
  {
    id: "stufe",
    name: "Treppe",
    kreis: "alltag",
    zweck: "Sicher Treppen steigen, hoch wie runter.",
    stufen: [s("reha_stufe_gelaender"), s("step_up"), s("reha_stufe_runter")],
  },
  {
    id: "knie_ueber_fuss",
    name: "Knie über dem Fuß",
    kreis: "gleichgewicht",
    zweck: "Bein richtig ausrichten: Knie bleibt über dem Fuß und kippt nicht nach innen.",
    stufen: [s("reha_schrittstellung_halten"), s("reha_ausfallschritt_halt", { grenze: true })],
  },
  {
    id: "gleichgewicht",
    name: "Gleichgewicht",
    kreis: "gleichgewicht",
    zweck: "Gleichgewicht schützt vor Stürzen und macht das Gehen sicherer.",
    stufen: [s("reha_stand_schmal_halt"), s("reha_gewicht_verlagern"), s("reha_einbeinstand_halt"), s("tandemstand", { frei: true }), s("einbeinstand", { frei: true })],
  },
  {
    id: "rumpf",
    name: "Rumpf und Becken",
    kreis: "rumpf",
    zweck: "Ein stabiler Rumpf hält das Becken ruhig, wenn die Beine arbeiten.",
    stufen: [s("reha_bauchspannung_sitz"), s("pallof_iso"), s("pallof_band"), s("bird_dog", { boden: true })],
  },
  {
    id: "beweglich_huefte",
    name: "Hüfte beweglich halten",
    kreis: "beweglich",
    zweck: "Sanfte Bewegung hält das Gelenk geschmeidig und lindert Steifigkeit.",
    stufen: [s("reha_bein_pendeln"), s("reha_hueftbeuger_dehnen"), s("reha_knie_zur_brust", { boden: true, grenze: true })],
  },
  {
    id: "beweglich_ruecken",
    name: "Rücken beweglich halten",
    kreis: "beweglich",
    zweck: "Kleine, schmerzarme Bewegungen lockern den Rücken.",
    stufen: [s("reha_becken_kippen_sitz"), s("reha_rumpf_drehen_sitz"), s("katze_kuh", { boden: true })],
  },
]

/** Die ersten sechs Wochen nach einer Operation: nur sanfte Übungen, die Kliniken üblicherweise mitgeben. */
export const FRUEHPHASE: string[] = ["reha_fusswippe", "reha_oberschenkel_anspannen", "reha_gesaess_anspannen", "reha_fersengleiten", "reha_abspreizen_stand"]

export const familie = (id: string) => FAMILIEN.find((f) => f.id === id)

/** Phasen im Jahresplan, für Reha anders benannt. */
export const REHA_PHASEN: Record<Phase, { name: string; ziel: string; training: string; aufbau: string }> = {
  grundlage: {
    name: "Einstieg",
    ziel: "Übungen lernen und dem Körper zeigen: Bewegung ist sicher.",
    training: "2 Sätze, leichte Stufen, Schmerz-Ampel kennenlernen.",
    aufbau: "Wer die Übungen sauber beherrscht, kann sie danach sicher steigern.",
  },
  kraft: {
    name: "Aufbau",
    ziel: "Kraft und Gleichgewicht steigern.",
    training: "3 Sätze, die Stufen steigen, wenn zwei Einheiten sauber und fast schmerzfrei gelingen.",
    aufbau: "Mehr Kraft entlastet das Gelenk und macht Alltagsbewegungen leichter.",
  },
  schnellkraft: {
    name: "Aufbau",
    ziel: "Kraft und Gleichgewicht steigern.",
    training: "3 Sätze, die Stufen steigen, wenn zwei Einheiten sauber und fast schmerzfrei gelingen.",
    aufbau: "Mehr Kraft entlastet das Gelenk und macht Alltagsbewegungen leichter.",
  },
  erhalt: {
    name: "Festigen",
    ziel: "Das Erreichte im Alltag halten, mehr gehen.",
    training: "2 Sätze auf der erreichten Stufe, dazu Gehen oder Radfahren.",
    aufbau: "Dauerhaft dranbleiben sichert den Erfolg. Danach folgt wieder ein Aufbau.",
  },
  uebergang: {
    name: "Erholung",
    ziel: "Pause mit leichter Bewegung.",
    training: "Höchstens 2 Sätze, leichte Stufen, viel Gehen.",
    aufbau: "Danach geht es mit einem neuen Aufbau weiter.",
  },
}

// ---------- Funktionstests (OARSI-Empfehlung: Dobson et al. 2013) ----------

export interface FunktionsTest {
  id: string
  name: string
  einheit: "Wdh" | "s"
  hoeherBesser: boolean
  seiten?: boolean
  anleitung: string[]
  sicherheit: string
  quelle: string
}

export const FUNKTIONSTESTS: FunktionsTest[] = [
  {
    id: "reha_aufstehen_30s",
    name: "Aufstehen in 30 Sekunden",
    einheit: "Wdh",
    hoeherBesser: true,
    anleitung: [
      "Stuhl ohne Armlehnen (Sitzhöhe etwa 43 cm) an die Wand stellen.",
      "Setz dich in die Mitte, Füße flach, Arme vor der Brust verschränkt.",
      "Auf „Los“ so oft wie möglich ganz aufstehen und wieder ganz hinsetzen, 30 Sekunden lang.",
      "Gezählt wird jedes vollständige Aufstehen. Wer die Arme braucht, notiert 0 und übt mit Armen.",
    ],
    sicherheit: "Nur, wenn du sicher aufstehen kannst. Jemand sollte dabei sein, wenn du unsicher bist.",
    quelle: "30-Second Chair Stand Test, Normwerte nach Rikli und Jones (1999, 2013); OARSI-Kernset (Dobson et al. 2013)",
  },
  {
    id: "reha_tug",
    name: "Aufstehen und Gehen (Timed Up and Go)",
    einheit: "s",
    hoeherBesser: false,
    anleitung: [
      "Stuhl mit Lehne, drei Meter davor eine Markierung auf dem Boden.",
      "Setz dich mit dem Rücken an die Lehne. Gehhilfe wie im Alltag benutzen.",
      "Auf „Los“ aufstehen, in deinem normalen Tempo zur Markierung gehen, umdrehen, zurückgehen und hinsetzen.",
      "Eine zweite Person stoppt die Zeit vom „Los“ bis du wieder sitzt.",
    ],
    sicherheit: "Normales, sicheres Tempo, nicht rennen.",
    quelle: "CDC STEADI: ab 12 Sekunden erhöhtes Sturzrisiko",
  },
  {
    id: "reha_einbeinstand",
    name: "Einbeinstand",
    einheit: "s",
    hoeherBesser: true,
    seiten: true,
    anleitung: [
      "Stell dich neben einen Stuhl oder eine Arbeitsplatte, Hand knapp darüber.",
      "Heb einen Fuß etwas vom Boden, Arme locker.",
      "Gestoppt wird, sobald der Fuß den Boden berührt oder du dich festhältst. Höchstens 30 Sekunden.",
      "Beide Seiten messen.",
    ],
    sicherheit: "Nur mit Halt in Reichweite. Wer schon beim normalen Stehen unsicher ist, lässt diesen Test aus.",
    quelle: "Unter 5 Sekunden erhöhtes Sturzrisiko (Vellas et al. 1997, Journal of the American Geriatrics Society)",
  },
  {
    id: "reha_gehen_40m",
    name: "40 Meter zügig gehen",
    einheit: "s",
    hoeherBesser: false,
    anleitung: [
      "Strecke von 10 Metern abmessen, zum Beispiel im Flur oder auf dem Gehweg.",
      "Zügig, aber sicher gehen: hin, umdrehen, zurück, zweimal, also 40 Meter.",
      "Die Zeit stoppen. Gehhilfe wie im Alltag benutzen.",
    ],
    sicherheit: "Ebener, rutschfester Boden, nicht rennen.",
    quelle: "40 m Fast-Paced Walk Test, OARSI-Kernset (Dobson et al. 2013)",
  },
]

// Rikli und Jones: Aufstehen in 30 Sekunden, Bereich „durchschnittlich“ je Altersgruppe
const STUHL_NORM: { ab: number; m: [number, number]; w: [number, number] }[] = [
  { ab: 60, m: [14, 19], w: [12, 17] },
  { ab: 65, m: [12, 18], w: [11, 16] },
  { ab: 70, m: [12, 17], w: [10, 15] },
  { ab: 75, m: [11, 17], w: [10, 15] },
  { ab: 80, m: [10, 15], w: [9, 14] },
  { ab: 85, m: [8, 14], w: [8, 13] },
  { ab: 90, m: [7, 12], w: [4, 11] },
]

export type Einordnung = { stufe: "gut" | "mittel" | "schwach"; text: string }

/** Einordnung eines Testergebnisses. alter und geschlecht nur für den Aufsteh-Test nötig. */
export function einordnen(test: string, wert: number, alter?: number, geschlecht?: "m" | "w"): Einordnung | null {
  if (test === "reha_aufstehen_30s") {
    if (!alter || !geschlecht || alter < 60) return null
    const n = [...STUHL_NORM].reverse().find((x) => alter >= x.ab)!
    const [lo, hi] = n[geschlecht]
    if (wert < lo) return { stufe: "schwach", text: "Unter dem Durchschnitt deiner Altersgruppe (" + lo + " bis " + hi + "). Genau hier hilft das Training." }
    if (wert > hi) return { stufe: "gut", text: "Über dem Durchschnitt deiner Altersgruppe (" + lo + " bis " + hi + ")." }
    return { stufe: "mittel", text: "Im Durchschnitt deiner Altersgruppe (" + lo + " bis " + hi + ")." }
  }
  if (test === "reha_tug") return wert >= 12 ? { stufe: "schwach", text: "12 Sekunden oder mehr: erhöhtes Sturzrisiko. Gleichgewicht und Beinkraft haben Vorrang, bitte auch ärztlich ansprechen." } : { stufe: "gut", text: "Unter 12 Sekunden: kein Hinweis auf ein erhöhtes Sturzrisiko." }
  if (test === "reha_einbeinstand") return wert < 5 ? { stufe: "schwach", text: "Unter 5 Sekunden: erhöhtes Sturzrisiko. Gleichgewicht nur mit Halt üben." } : wert >= 20 ? { stufe: "gut", text: "Sicherer Einbeinstand." } : { stufe: "mittel", text: "Ausbaufähig, Gleichgewicht weiter üben." }
  return null
}

// ---------- Wissen in kleinen Happen (wie die Lerneinheiten von Reha-Apps) ----------

export interface Wissen {
  id: string
  titel: string
  text: string
  quelle: string
  /** nur für bestimmte Beschwerdebilder */
  fuer?: RehaBild[]
}

export const WISSEN: Wissen[] = [
  {
    id: "bewegung",
    titel: "Bewegung ist die wichtigste Behandlung",
    text: "Bei Arthrose empfehlen alle aktuellen Leitlinien an erster Stelle Übungen: Kraft für die Muskeln um das Gelenk und Ausdauer, zum Beispiel Gehen oder Radfahren. Das lindert Schmerzen und macht den Alltag leichter, ganz ohne Nebenwirkungen.",
    quelle: "NICE-Leitlinie NG226 Osteoarthritis (2022); AWMF S2k-Leitlinie Koxarthrose (2019, in Überarbeitung)",
  },
  {
    id: "ampel",
    titel: "Die Schmerz-Ampel",
    text: "Während der Übungen darf es etwas wehtun. Grün (0 bis 2): alles gut. Gelb (3 bis 5): in Ordnung, wenn es bis zum nächsten Morgen wieder so ist wie vorher. Rot (über 5): Übung kleiner, langsamer oder leichter machen. TrainMe fragt deshalb nach jedem Satz und am Morgen danach.",
    quelle: "Schmerzmonitoring-Modell nach Thomeé (1997); NEMEX-TJR, Ageberg et al. (2010)",
  },
  {
    id: "anfang",
    titel: "Am Anfang kann es mehr wehtun",
    text: "Wenn Muskeln und Gelenk wieder Belastung bekommen, können die Beschwerden in den ersten Wochen etwas zunehmen. Das ist kein Schaden. Wer regelmäßig weitermacht, hat nach einigen Wochen meist weniger Schmerzen und kommt im Alltag besser zurecht.",
    quelle: "NICE-Leitlinie NG226 (2022)",
  },
  {
    id: "stuerze",
    titel: "Gleichgewicht schützt vor Stürzen",
    text: "Übungen für Gleichgewicht und Beinkraft senken bei älteren Menschen die Zahl der Stürze um etwa ein Viertel. Darum steckt in jeder Einheit eine Gleichgewichtsübung, anfangs immer mit Halt.",
    quelle: "Sherrington et al. (2019), Cochrane Review „Exercise for preventing falls in older people living in the community“",
  },
  {
    id: "druck",
    titel: "Seitlicher Hüftschmerz: Druck meiden",
    text: "Die Sehnen außen an der Hüfte mögen keinen Druck. Beine nicht übereinanderschlagen, beim Stehen das Gewicht gleich verteilen statt in eine Hüfte zu hängen, nachts mit einem Kissen zwischen den Knien liegen und nicht auf der schmerzhaften Seite. Kräftigen hilft, Dehnen über die Mitte eher nicht.",
    quelle: "LEAP-Studie, Mellor et al. (2018), BMJ",
    fuer: ["huefte_seitlich"],
  },
  {
    id: "gewicht",
    titel: "Jedes Kilo zählt",
    text: "Wer Übergewicht hat, entlastet Hüfte und Knie mit jedem Kilo weniger. Schon wenige Prozent Gewichtsverlust bessern Schmerzen und Beweglichkeit, zehn Prozent meist deutlich mehr als fünf.",
    quelle: "NICE-Leitlinie NG226 (2022)",
  },
  {
    id: "tep_grenzen",
    titel: "Nach der Hüft-OP: Bewegungsgrenzen",
    text: "Früher galten nach jeder Hüft-OP strenge Regeln (nicht tief sitzen, Beine nicht überkreuzen). Neuere Auswertungen fanden ohne diese Regeln nicht mehr Ausrenkungen. Entscheidend ist, was dein Operateur sagt: Hat er Grenzen vorgegeben, trag sie im Profil ein, dann lässt TrainMe solche Übungen weg.",
    quelle: "Crompton et al. (2020) und Korfitsen et al. (2023), Acta Orthopaedica",
    fuer: ["huefte_tep"],
  },
  {
    id: "gehen",
    titel: "Gehen ist Training",
    text: "Gehen ist die einfachste Ausdauer. Langsam steigern: jede Woche ein paar Minuten mehr. Du solltest dabei noch sprechen können. Gehstöcke oder Nordic-Walking-Stöcke entlasten und sind kein Zeichen von Schwäche.",
    quelle: "NICE-Leitlinie NG226 (2022): Ausdauer als Teil der Bewegungstherapie",
  },
  {
    id: "messen",
    titel: "Warum TrainMe misst",
    text: "Alle fünf Wochen gibt es kurze Tests: Aufstehen in 30 Sekunden, Aufstehen und Gehen, Einbeinstand. So siehst du schwarz auf weiß, was das Training bringt, auch wenn der Fortschritt im Alltag schleichend kommt.",
    quelle: "OARSI-Empfehlung für Funktionstests bei Hüft- und Kniearthrose, Dobson et al. (2013)",
  },
  {
    id: "rueckenschmerz",
    titel: "Rücken: in Bewegung bleiben",
    text: "Bei Kreuzschmerz ohne Warnzeichen hilft es, so normal wie möglich aktiv zu bleiben. Bettruhe verlängert die Beschwerden eher. Übungen und Gehen sind sicher, auch wenn es anfangs etwas zieht.",
    quelle: "Nationale VersorgungsLeitlinie Nicht-spezifischer Kreuzschmerz (2017)",
    fuer: ["ruecken"],
  },
]

/** Wissenshappen des Tages, passend zu den Beschwerdebildern. */
export function wissenFuer(bilder: RehaBild[], tag: string): Wissen {
  const passend = WISSEN.filter((w) => !w.fuer || w.fuer.some((b) => bilder.indexOf(b) >= 0))
  const n = Math.floor(Date.parse(tag + "T12:00:00Z") / 86400000)
  return passend[n % passend.length]
}
