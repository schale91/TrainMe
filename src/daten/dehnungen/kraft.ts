// Kraftübungen mit der Dehnfigur: Curls und Latzug.
//: dieselbe Figur wie bei den Dehnungen, mit Kurzhantel, Lang- und SZ-Stange, Band
// und Kabelzug. Je Übung Ausgangs- und Umkehrstellung und das Tempo (hoch zügig, ablassen kontrolliert).
// Grundlage sind die Schritte der Ausführung in der Übungsdatenbank.
//

import type { Dehnung, Haltung, Hilfsmittel, V3, Winkel } from "../../logik/dehnbewegung"
import { B, H, STAND, STUHLSITZ, folge, halte, mit, wdh } from "./basis"
import { BAND, FAUST, HAMMER, KH, KH_R, LH, OBERGRIFF, SZ, SZ_GRIFF, UNTERGRIFF, kabel } from "./kraftbasis"

const HOCH: [string, string] = ["Hochcurlen", "Langsam ablassen"]

// ---------------------------------------------------------------- Curls im Stand
/** Arme hängen, Ellbogen fast gestreckt, Griff je nach Variante */
const curlUnten = (dreh: number, w: Winkel = {}): Haltung => mit(STAND, { g: { ...B("schulter", [2, 6, 0]), ...B("ellbogen", [8, dreh]), ...FAUST, ...w } })
/** Oben: Ellbogen bleiben am Körper, kommen nur leicht nach vorn */
const curlOben = (dreh: number, w: Winkel = {}): Haltung => mit(STAND, { g: { ...B("schulter", [14, 6, 0]), ...B("ellbogen", [140, dreh]), ...FAUST, ...w } })

const curl = (dreh: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", curlUnten(dreh), curlOben(dreh), 1.4, { aus: 2.4, texte: HOCH, hilfsmittel, ...extra })

/** Abwechselnd: erst links hoch und runter, dann rechts */
function wechselnd(dreh: number, hilfsmittel: Hilfsmittel[]): Dehnung {
  const u = curlUnten(dreh)
  const l = mit(u, { g: { schulter_l: [14, 6, 0], ellbogen_l: [140, dreh] } })
  const r = mit(u, { g: { schulter_r: [14, 6, 0], ellbogen_r: [140, dreh] } })
  return folge("schraeg", [[l, 1.4, "Links hochcurlen"], [u, 2.2, "Langsam ablassen"], [r, 1.4, "Rechts hochcurlen"], [u, 2.2, "Langsam ablassen"]], { hilfsmittel })
}

/** Zottman: im Untergriff hoch, oben drehen, im Obergriff ablassen (invers umgekehrt) */
function zottman(hoch: number, runter: number): Dehnung {
  return folge(
    "schraeg",
    [
      [curlOben(hoch), 1.4, "Hochcurlen"],
      [curlOben(runter), 0.8, "Oben die Hände drehen"],
      [curlUnten(runter), 2.6, "Langsam ablassen"],
      [curlUnten(hoch), 0.8, "Unten zurückdrehen"],
    ],
    { hilfsmittel: KH },
  )
}

/** Mit Schwung: kleiner Hüftimpuls nach vorn, dann kontrolliert ablassen */
function cheat(dreh: number, hilfsmittel: Hilfsmittel[]): Dehnung {
  const unten = mit(curlUnten(dreh), { dreh: [8, 0, 0], g: { ...B("huefte", [12, 3, 0]), ...B("knie", [12]), ...B("fuss", [8, 0]) } })
  const oben = mit(curlOben(dreh), { dreh: [-6, 0, 0], g: { ...B("huefte", [-4, 3, 0]) } })
  return wdh("schraeg", unten, oben, 1.0, { aus: 2.6, texte: ["Mit Hüftimpuls hoch", "Langsam ablassen"], hilfsmittel })
}

// ---------------------------------------------------------------- Curls im Sitzen
const SITZ_AUFRECHT: Haltung = mit(STUHLSITZ, { g: { ...B("schulter", [0, 12, 0]), ...B("ellbogen", [8, UNTERGRIFF]), ...FAUST } })
const BANK: Hilfsmittel = { art: "bank", unter: "gesaess", hoehe: 0.42 }

/**
 * Konzentrationscurl: breit sitzend, Oberkörper vorgeneigt, der Oberarm liegt an der Innenseite des rechten
 * Oberschenkels und bleibt dort; die freie Hand stützt sich auf den linken Oberschenkel. Beide Seiten nacheinander.
 */
const KONZ_BASIS: Winkel = {
  ...B("huefte", [118, 24, 0]),
  ...B("knie", [95]),
  lws: [16, 0, 0],
  bws: [14, 0, 0],
  hals: [-12, 0, 0],
  schulter_l: [62, 14, 0],
  ellbogen_l: [55, 30],
  schulter_r: [40, -8, 0],
  ...FAUST,
}
const KONZ_UNTEN: Haltung = H({ ...KONZ_BASIS, ellbogen_r: [12, UNTERGRIFF] }, [24, 0, 0], { pos: [0, 0.5, 0], boden: false })
const KONZ_OBEN: Haltung = H({ ...KONZ_BASIS, ellbogen_r: [138, UNTERGRIFF] }, [24, 0, 0], { pos: [0, 0.5, 0], boden: false })

/** 21er: sieben untere Hälften, sieben obere Hälften, sieben ganze Wiederholungen (hier je eine gezeigt) */
function einundzwanzig(dreh: number, hilfsmittel: Hilfsmittel[]): Dehnung {
  const u = curlUnten(dreh), o = curlOben(dreh)
  const m = mit(u, { g: { ...B("schulter", [6, 6, 0]), ...B("ellbogen", [90, dreh]) } })
  return folge(
    "schraeg",
    [
      [m, 1.0, "7 × untere Hälfte: bis Unterarm waagerecht"],
      [u, 1.2, "7 × untere Hälfte: zurück"],
      [m, 1.2, "7 × obere Hälfte: von waagerecht"],
      [o, 1.0, "7 × obere Hälfte: ganz hoch"],
      [m, 1.0, "7 × obere Hälfte: zurück bis waagerecht"],
      [o, 1.0, "7 × ganz: hochcurlen"],
      [u, 2.2, "7 × ganz: langsam ablassen"],
    ],
    { hilfsmittel },
  )
}

/** Hammercurl über Kreuz: abwechselnd diagonal vor dem Körper zur Gegenschulter */
function kreuz(): Dehnung {
  const u = curlUnten(HAMMER)
  const l = mit(u, { g: { schulter_l: [24, -22, 0], ellbogen_l: [128, HAMMER] } })
  const r = mit(u, { g: { schulter_r: [24, -22, 0], ellbogen_r: [128, HAMMER] } })
  return folge("vorn", [[l, 1.4, "Links zur rechten Schulter"], [u, 2.2, "Langsam ablassen"], [r, 1.4, "Rechts zur linken Schulter"], [u, 2.2, "Langsam ablassen"]], { hilfsmittel: KH })
}

/** Einarmig am Kabel: rechter Arm arbeitet, der linke hängt locker; danach die andere Seite */
const EINARM_U: Haltung = mit(STAND, { g: { ...B("schulter", [2, 7, 0]), ellbogen_l: [10, 0], ellbogen_r: [8, UNTERGRIFF], ...FAUST } })
const EINARM_O: Haltung = mit(EINARM_U, { g: { schulter_r: [14, 6, 0], ellbogen_r: [140, UNTERGRIFF] } })

/** Bayesian Curl: Rücken zum Kabel, Schrittstellung, der rechte Arm wird hinter den Körper gezogen */
const BAYES_U: Haltung = mit(STAND, { g: { huefte_l: [22, 4, 0], knie_l: [12], huefte_r: [-12, 4, 0], fuss_r: [-8, 0], schulter_l: [2, 7, 0], ellbogen_l: [10, 0], schulter_r: [-32, 6, 0], ellbogen_r: [6, UNTERGRIFF], ...FAUST }, dreh: [6, 0, 0] })
const BAYES_O: Haltung = mit(BAYES_U, { g: { schulter_r: [-26, 6, 0], ellbogen_r: [128, UNTERGRIFF] } })

/** Handgelenkcurl: sitzend, Unterarme auf den Oberschenkeln, nur das Handgelenk bewegt sich */
const HANDGELENK: Winkel = { ...B("huefte", [100, 8, 0]), ...B("knie", [90]), lws: [10, 0, 0], bws: [12, 0, 0], hals: [-10, 0, 0], ...B("schulter", [38, 4, 0]), ...FAUST }
const handgelenk = (dreh: number): Dehnung =>
  wdh(
    "schraeg",
    H({ ...HANDGELENK, ...B("ellbogen", [70, dreh]), ...B("hand", [-55, 0]) }, [12, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    H({ ...HANDGELENK, ...B("ellbogen", [70, dreh]), ...B("hand", [45, 0]) }, [12, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    1.0,
    { aus: 1.6, texte: ["Handgelenk beugen", "Langsam absenken"], hilfsmittel: [...LH, { art: "bank", unter: "gesaess", hoehe: 0.42 }] },
  )

/**
 * Schrägbank-Curl: rücklings auf der Lehne (etwa 45 Grad), die Arme hängen senkrecht hinter dem Körper, die Oberarme
 * bleiben dort stehen, nur die Unterarme bewegen sich.
 */
const SCHRAEG: Winkel = { ...B("huefte", [50, 8, 0]), ...B("knie", [88]), ...B("fuss", [0, 0]), ...B("schulter", [-44, 8, 0]), hals: [12, 0, 0], ...FAUST }
const schraegbankCurl = (dreh: number): Dehnung =>
  wdh(
    "seite",
    H({ ...SCHRAEG, ...B("ellbogen", [6, dreh]) }, [-45, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    H({ ...SCHRAEG, ...B("ellbogen", [132, dreh]) }, [-45, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    1.4,
    { aus: 2.6, texte: ["Hochcurlen, Oberarme bleiben hinten", "Langsam ganz ablassen"], hilfsmittel: [...KH, { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }] },
  )

// ---------------------------------------------------------------- Latzug (ATX LMSW-700)
/** Sitz am Latzug, Knie unter dem Polster, Oberkörper leicht zurückgelehnt; oben Arme gestreckt und weit gegriffen */
const LAT_SITZ: Winkel = { ...B("huefte", [82, 8, 0]), ...B("knie", [95]), ...B("fuss", [5, 0]), hals: [-8, 0, 0], ...FAUST }
const latzugOben = (dreh: number, breit: number): Haltung => H({ ...LAT_SITZ, ...B("schulter", [168, breit, 0]), ...B("ellbogen", [6, dreh]) }, [-12, 0, 0], { pos: [0, 0.55, 0], boden: false })
const latzugUnten = (dreh: number, breit: number): Haltung =>
  H({ ...LAT_SITZ, bws: [-10, 0, 0], ...B("schulterblatt", [-12, -10]), ...B("schulter", [28, breit + 30, 0]), ...B("ellbogen", [118, dreh]) }, [-16, 0, 0], { pos: [0, 0.55, 0], boden: false })
const LAT_ROLLE: V3 = [0, 2.15, 0.55]
const latzug = (dreh: number, breit: number, griff: Hilfsmittel[]): Dehnung =>
  wdh("schraeg", latzugOben(dreh, breit), latzugUnten(dreh, breit), 1.4, { aus: 2.4, texte: ["Stange zur oberen Brust ziehen", "Kontrolliert nach oben lassen"], hilfsmittel: [...griff, ...kabel("haende", LAT_ROLLE), BANK] })

export const KRAFT: Record<string, Dehnung> = {
  // Kurzhantel im Stand
  bizeps_kh: curl(UNTERGRIFF, KH),
  bizeps_kh_wechselnd: wechselnd(UNTERGRIFF, KH),
  hammercurl: curl(HAMMER, KH),
  supinations_curl: wdh("schraeg", curlUnten(HAMMER), curlOben(UNTERGRIFF), 1.4, { aus: 2.4, texte: ["Hoch und dabei aufdrehen", "Langsam ablassen"], hilfsmittel: KH }),
  zottman_curl: zottman(UNTERGRIFF, OBERGRIFF),
  zottman_curl_invers: zottman(HAMMER, UNTERGRIFF),
  hammer_cheat_curl: cheat(HAMMER, KH),
  // Stange im Stand
  langhantel_curl: curl(UNTERGRIFF, LH),
  sz_curl_untergriff: curl(SZ_GRIFF, SZ),
  sz_curl_obergriff: curl(OBERGRIFF, SZ, { texte: ["Im Obergriff hochcurlen", "Langsam ablassen"] }),
  curl_exzentrisch: curl(SZ_GRIFF, SZ, { ein: 1.2, aus: 4.5, texte: ["Hochcurlen", "Sehr langsam ablassen (4 bis 5 s)"] }),
  cheat_curl_langhantel: cheat(UNTERGRIFF, LH),
  // Band und Kabel
  bizeps_band: curl(UNTERGRIFF, BAND),
  kabel_curl_sz: curl(SZ_GRIFF, [...SZ, ...kabel("haende")]),
  kabel_reverse_curl: curl(OBERGRIFF, [...SZ, ...kabel("haende")]),
  hammercurl_seil: curl(HAMMER, kabel("haende")),
  kabel_curl_einarmig: wdh("schraeg", EINARM_U, EINARM_O, 1.4, { aus: 2.4, seiten: true, texte: HOCH, hilfsmittel: kabel("hand_r", [0.15, 0.12, 0.75]) }),
  bayesian_curl: wdh("seite", BAYES_U, BAYES_O, 1.4, { aus: 2.4, seiten: true, texte: HOCH, hilfsmittel: kabel("hand_r", [0.2, 0.15, -0.85]) }),
  // Weitere Varianten im Stand
  hammercurl_kreuz: kreuz(),
  curl_21er: einundzwanzig(SZ_GRIFF, SZ),
  drag_curl: wdh("schraeg", curlUnten(UNTERGRIFF), mit(curlUnten(UNTERGRIFF), { g: { ...B("schulter", [-34, 8, 0]), ...B("ellbogen", [118, UNTERGRIFF]) } }), 1.4, { aus: 2.4, texte: ["Stange am Körper hochziehen, Ellbogen nach hinten", "Langsam ablassen"], hilfsmittel: LH }),
  bizeps_isohold: halte("schraeg", curlUnten(UNTERGRIFF), mit(curlUnten(UNTERGRIFF), { g: { ...B("schulter", [4, 6, 0]), ...B("ellbogen", [90, UNTERGRIFF]) } }), { ein: 1.5, aus: 2, hilfsmittel: KH }),
  handgelenk_curl: handgelenk(UNTERGRIFF),
  handgelenk_curl_revers: handgelenk(OBERGRIFF),
  schraegbank_curl: schraegbankCurl(UNTERGRIFF),
  hammercurl_schraegbank: schraegbankCurl(HAMMER),
  // Latzug
  latzug: latzug(OBERGRIFF, 22, [{ art: "latstange", von: "hand_l", bis: "hand_r" }]),
  // Sitzen
  bizeps_kh_sitzend: wdh("schraeg", SITZ_AUFRECHT, mit(SITZ_AUFRECHT, { g: { ...B("schulter", [12, 12, 0]), ...B("ellbogen", [140, UNTERGRIFF]) } }), 1.4, { aus: 2.4, texte: HOCH, hilfsmittel: [...KH, BANK] }),
  konzentrationscurl: wdh("schraeg", KONZ_UNTEN, KONZ_OBEN, 1.4, { aus: 2.4, seiten: true, texte: HOCH, hilfsmittel: [...KH_R, BANK] }),
}
