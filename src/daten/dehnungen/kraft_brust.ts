// Brust mit der Dehnfigur: Bankdrücken flach und schräg, Floor Press, Liegestütze, Dips, Flys und Kabel.

import type { Dehnung, Haltung, Hilfsmittel, V3, Winkel } from "../../logik/dehnbewegung"
import { B, H, PLANK, RUECKENLAGE_AUF, STAND, folge, halte, mit, wdh } from "./basis"
import { FAUST, FLACHBANK, HAMMER, KH, KH_R, LH, OBERGRIFF, UNTERGRIFF, banklage, kabel } from "./kraftbasis"

const DRUECKEN: [string, string] = ["Langsam zur Brust senken", "Kraftvoll hochdrücken"]

// ---------------------------------------------------------------- Bankdrücken auf der Flachbank
/** Oben Arme senkrecht über der Brust; unten die Stange auf der Brust, Ellbogen etwa 45 bis 60 Grad vom Körper */
const bankOben = (ab: number, dreh: number, w: Winkel = {}): Haltung => banklage({ ...B("schulter", [90, ab, 0]), ...B("ellbogen", [6, dreh]), ...w })
const bankUnten = (ab: number, dreh: number, w: Winkel = {}): Haltung => banklage({ ...B("schulter", [24, ab + 46, 0]), ...B("ellbogen", [100, dreh]), ...w })
/** Rack am Kopfende mit J-Hooks in Ablagehöhe */
const RACK: Hilfsmittel = { art: "rack", an: "kopf", haken: 1.2, ablage: 0.78 }
const bank = (ab: number, dreh: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}, w: Winkel = {}): Dehnung =>
  wdh("schraeg", bankOben(ab, dreh, w), bankUnten(ab, dreh, w), 2.0, { aus: 1.3, texte: DRUECKEN, hilfsmittel: [...hilfsmittel, FLACHBANK], ...extra })

/** Larsen Press: Beine gestreckt angehoben, kein Beinantrieb */
const LARSEN: Winkel = { ...B("huefte", [0, 8, 0]), ...B("knie", [4]), ...B("fuss", [-10, 0]) }

// ---------------------------------------------------------------- Schrägbank
/** Schrägbank 30 bis 45 Grad: Becken zurückgekippt, Füße am Boden */
const SCHRAEG_BEINE: Winkel = { ...B("huefte", [32, 14, 0]), ...B("knie", [84]), ...B("fuss", [6, 0]), hals: [5, 0, 0] }
const schraeg = (w: Winkel, kipp = -50): Haltung => H({ ...SCHRAEG_BEINE, ...FAUST, ...w }, [kipp, 0, 0], { pos: [0, 0.56, 0], boden: false })
const SCHRAEGBANK: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }
const schraegDruecken = (dreh: number, hilfsmittel: Hilfsmittel[], kipp = -50, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(
    "schraeg",
    // Arme senkrecht nach oben: Schulterbeugung = 180 + Kippung des Beckens
    schraeg({ ...B("schulter", [180 + kipp, 12, 0]), ...B("ellbogen", [6, dreh]) }, kipp),
    schraeg({ ...B("schulter", [94 + kipp, 58, 0]), ...B("ellbogen", [100, dreh]) }, kipp),
    2.0,
    { aus: 1.3, texte: ["Zur oberen Brust senken", "Schräg nach oben drücken"], hilfsmittel: [...hilfsmittel, SCHRAEGBANK], ...extra },
  )
// ---------------------------------------------------------------- Boden
const bodenOben = (dreh: number, w: Winkel = {}): Haltung => mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [90, 12, 0]), ...B("ellbogen", [6, dreh]), ...FAUST, ...w } })
const bodenUnten = (dreh: number, w: Winkel = {}): Haltung => mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [8, 52, 0]), ...B("ellbogen", [92, dreh]), ...FAUST, ...w } })

// ---------------------------------------------------------------- Liegestütz
/** Oben: hoher Stütz; unten: Brust knapp über dem Boden, Ellbogen etwa 45 Grad vom Körper */
const LS_UNTEN: Haltung = mit(PLANK, { dreh: [88, 0, 0], g: { ...B("schulter", [30, 32, 0]), ...B("ellbogen", [98, 90]) } })
const liegestuetz = (oben: Haltung = PLANK, unten: Haltung = LS_UNTEN, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", oben, unten, 1.8, { aus: 1.2, texte: ["Brust zum Boden senken", "Hochdrücken"], ...extra })
const LS_KNIE: Winkel = { ...B("knie", [95]), ...B("fuss", [-60, 0]) }
const LS_ENG: Winkel = { ...B("schulter", [78, -4, 0]) }
const LS_ENG_UNTEN: Winkel = { ...B("schulter", [24, 6, 0]), ...B("ellbogen", [110, 90]) }

// ---------------------------------------------------------------- Dips (Brust: Oberkörper vorgeneigt)
const DIP_BEINE: Winkel = { ...B("huefte", [20, 4, 0]), ...B("knie", [70]), ...B("fuss", [-20, 0]) }
const DIP_OBEN: Haltung = H({ ...DIP_BEINE, ...B("schulter", [-6, 14, 0]), ...B("ellbogen", [4, 0]), ...B("hand", [80, 0]) }, [14, 0, 0], { pos: [0, 1.2, 0], boden: false })
const DIP_UNTEN: Haltung = H({ ...DIP_BEINE, ...B("schulter", [-55, 26, 0]), ...B("ellbogen", [95, 0]), ...B("hand", [80, 0]) }, [30, 0, 0], { pos: [0, 0.98, 0.06], boden: false })
const BARREN: Hilfsmittel = { art: "barren", an: "hand_r" }

// ---------------------------------------------------------------- Flys
/** Liegend: Arme leicht gebeugt, öffnen sich in einem weiten Bogen zur Seite */
const flyZu = (w: Winkel = {}): Winkel => ({ ...B("schulter", [90, 8, 0]), ...B("ellbogen", [18, HAMMER]), ...w })
const flyAuf = (w: Winkel = {}): Winkel => ({ ...B("schulter", [4, 80, 0]), ...B("ellbogen", [22, HAMMER]), ...w })

/** Stehend zwischen zwei Kabeltürmen; links liegt bei +x */
const zweiKabel = (hoehe: number, z = -0.25): Hilfsmittel[] => [...kabel("hand_l", [0.95, hoehe, z]), ...kabel("hand_r", [-0.95, hoehe, z])]
const STAND_VOR: Haltung = mit(STAND, { dreh: [12, 0, 0], g: { huefte_l: [28, 6, 0], knie_l: [14], huefte_r: [-4, 6, 0], ...FAUST } })
const crossover = (oben: Winkel, zu: Winkel, hoehe: number): Dehnung =>
  wdh("schraeg", mit(STAND_VOR, { g: oben }), mit(STAND_VOR, { g: zu }), 1.4, { aus: 2.2, texte: ["Arme im Bogen zusammenführen", "Langsam öffnen"], hilfsmittel: zweiKabel(hoehe) })

export const KRAFT_BRUST: Record<string, Dehnung> = {
  // Langhantel flach
  bankdruecken_lh: bank(12, OBERGRIFF, [...LH, RACK]),
  bankdruecken_lh_pause: bank(12, OBERGRIFF, [...LH, RACK], { halten: 1.5, texte: ["Zur Brust senken, 1 bis 3 s Pause", "Hochdrücken"] }),
  spoto_press: bank(12, OBERGRIFF, [...LH, RACK], { halten: 1.2, texte: ["Senken, 2 bis 3 cm über der Brust anhalten", "Hochdrücken"] }),
  larsen_press: bank(12, OBERGRIFF, [...LH, RACK], {}, LARSEN),
  bankdruecken_eng: bank(4, OBERGRIFF, [...LH, RACK]),
  bankdruecken_untergriff: bank(8, UNTERGRIFF, [...LH, RACK]),
  bankdruecken_baender: bank(12, OBERGRIFF, [...LH, RACK, { art: "band", von: "hand_l", bis: "fuss_l" }, { art: "band", von: "hand_r", bis: "fuss_r" }]),
  bankdruecken_multipresse: bank(12, OBERGRIFF, [...LH, RACK]),
  // Kurzhantel flach
  bankdruecken_kh: bank(12, OBERGRIFF, KH),
  kh_druecken_neutral: bank(8, HAMMER, KH),
  squeeze_press: wdh("seite", bankOben(-6, HAMMER), banklage({ ...B("schulter", [30, 6, 0]), ...B("ellbogen", [95, HAMMER]) }), 2.0, { aus: 1.3, texte: ["Hanteln aneinanderpressen, zur Brust senken", "Hochdrücken"], hilfsmittel: [...KH, FLACHBANK] }),
  kh_bankdruecken_einarmig: wdh(
    "seite",
    banklage({ schulter_l: [20, 30, 0], ellbogen_l: [60, 0], schulter_r: [90, 12, 0], ellbogen_r: [6, OBERGRIFF] }),
    banklage({ schulter_l: [20, 30, 0], ellbogen_l: [60, 0], schulter_r: [24, 58, 0], ellbogen_r: [100, OBERGRIFF] }),
    2.0,
    { aus: 1.3, seiten: true, texte: DRUECKEN, hilfsmittel: [...KH_R, FLACHBANK] },
  ),
  kh_bankdruecken_abwechselnd: (() => {
    const o = bankOben(12, OBERGRIFF)
    const l = mit(o, { g: { schulter_l: [24, 58, 0], ellbogen_l: [100, OBERGRIFF] } })
    const r = mit(o, { g: { schulter_r: [24, 58, 0], ellbogen_r: [100, OBERGRIFF] } })
    return folge("seite", [[l, 2.0, "Links senken, rechts bleibt oben"], [o, 1.3, "Links hochdrücken"], [r, 2.0, "Rechts senken, links bleibt oben"], [o, 1.3, "Rechts hochdrücken"]], { hilfsmittel: [...KH, FLACHBANK] })
  })(),
  // Schräg
  schraegbankdruecken_lh: schraegDruecken(OBERGRIFF, [...LH, { art: "rack", an: "kopf", haken: 1.35 }]),
  schraegbankdruecken_eng: schraegDruecken(OBERGRIFF, [...LH, { art: "rack", an: "kopf", haken: 1.35 }]),
  schraegbankdruecken_multipresse: schraegDruecken(OBERGRIFF, [...LH, { art: "rack", an: "kopf", haken: 1.35 }]),
  schraegbankdruecken_kh: schraegDruecken(OBERGRIFF, KH),
  schraegbankdruecken_kh_pause: schraegDruecken(OBERGRIFF, KH, -50, { halten: 1.5, texte: ["Senken, unten 1 bis 2 s Pause", "Hochdrücken"] }),
  schraegbankdruecken_kh_flach: schraegDruecken(OBERGRIFF, KH, -72),
  schraegbank_squeeze_press: wdh(
    "seite",
    schraeg({ ...B("schulter", [140, -4, 0]), ...B("ellbogen", [6, HAMMER]) }, -60),
    schraeg({ ...B("schulter", [64, 4, 0]), ...B("ellbogen", [100, HAMMER]) }, -60),
    2.0,
    { aus: 1.3, texte: ["Hanteln aneinanderpressen, senken", "Hochdrücken"], hilfsmittel: [...KH, SCHRAEGBANK] },
  ),
  // Boden
  floor_press_lh: wdh("seite", bodenOben(OBERGRIFF), bodenUnten(OBERGRIFF), 1.8, { aus: 1.2, halten: 0.6, texte: ["Senken, bis die Oberarme den Boden berühren", "Hochdrücken"], hilfsmittel: LH }),
  floor_press_kh: wdh("seite", bodenOben(OBERGRIFF), bodenUnten(OBERGRIFF), 1.8, { aus: 1.2, halten: 0.6, texte: ["Senken, bis die Oberarme den Boden berühren", "Hochdrücken"], hilfsmittel: KH }),
  floor_press_kh_einarmig: wdh(
    "seite",
    mit(bodenOben(OBERGRIFF), { g: { schulter_l: [10, 40, 0], ellbogen_l: [20, 0] } }),
    mit(bodenUnten(OBERGRIFF), { g: { schulter_l: [10, 40, 0], ellbogen_l: [20, 0] } }),
    1.8,
    { aus: 1.2, halten: 0.6, seiten: true, texte: ["Senken, bis der Oberarm den Boden berührt", "Hochdrücken"], hilfsmittel: KH_R },
  ),
  // Liegestütze
  liegestuetz: liegestuetz(),
  liegestuetz_explosiv: liegestuetz(PLANK, LS_UNTEN, { ein: 1.6, aus: 0.6, texte: ["Senken", "Explosiv hochdrücken"] }),
  liegestuetz_gewicht: liegestuetz(),
  liegestuetz_band: liegestuetz(),
  liegestuetz_knie: liegestuetz(mit(PLANK, { dreh: [62, 0, 0], g: LS_KNIE }), mit(LS_UNTEN, { dreh: [78, 0, 0], g: LS_KNIE })),
  liegestuetz_diamant: liegestuetz(mit(PLANK, { g: LS_ENG }), mit(LS_UNTEN, { g: LS_ENG_UNTEN })),
  liegestuetz_erhoeht: liegestuetz(mit(PLANK, { dreh: [55, 0, 0], g: B("schulter", [60, 4, 0]) }), mit(LS_UNTEN, { dreh: [62, 0, 0], g: { ...B("schulter", [10, 32, 0]) } }), { hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.5 }] }),
  liegestuetz_fuesse_hoch: liegestuetz(mit(PLANK, { dreh: [100, 0, 0], g: B("schulter", [98, 4, 0]) }), mit(LS_UNTEN, { dreh: [104, 0, 0], g: { ...B("schulter", [46, 32, 0]) } }), { hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.5, versatz: [-0.09, 0] }] }),
  liegestuetz_defizit: liegestuetz(PLANK, mit(LS_UNTEN, { g: B("ellbogen", [112, 90]) }), { hilfsmittel: KH }),
  liegestuetz_wand: wdh("seite", mit(STAND, { dreh: [18, 0, 0], g: { ...B("fuss", [-18, 0]), ...B("schulter", [72, 10, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]) } }), mit(STAND, { dreh: [30, 0, 0], g: { ...B("fuss", [-30, 0]), ...B("schulter", [40, 34, 0]), ...B("ellbogen", [110, 90]), ...B("hand", [80, 0]) } }), 1.8, { aus: 1.2, texte: ["Brust zur Wand senken", "Wegdrücken"], hilfsmittel: [{ art: "wand", an: "hand_r", richtung: "vorn" }] }),
  // Dips
  dips_brust: wdh("seite", DIP_OBEN, DIP_UNTEN, 2.0, { aus: 1.3, texte: ["Vorgeneigt absenken", "Hochdrücken"], hilfsmittel: [BARREN] }),
  dips_gewicht: wdh("seite", DIP_OBEN, DIP_UNTEN, 2.0, { aus: 1.3, texte: ["Vorgeneigt absenken", "Hochdrücken"], hilfsmittel: [BARREN] }),
  dips_negativ: folge("seite", [[DIP_OBEN, 1.0, "Oben stützen"], [DIP_UNTEN, 4.5, "Sehr langsam absenken"], [DIP_UNTEN, 0.6, "Absteigen"], [DIP_OBEN, 1.2, "Wieder hoch (Sprung oder Stufe)"]], { hilfsmittel: [BARREN] }),
  // Flys
  flys_kh: wdh("schraeg", banklage(flyZu()), banklage(flyAuf()), 2.2, { aus: 1.6, texte: ["Arme im weiten Bogen öffnen", "Über der Brust zusammenführen"], hilfsmittel: [...KH, FLACHBANK] }),
  flys_kh_schraeg: wdh("schraeg", schraeg(flyZu(B("schulter", [130, 8, 0])), -50), schraeg(flyAuf(), -50), 2.2, { aus: 1.6, texte: ["Arme im weiten Bogen öffnen", "Zusammenführen"], hilfsmittel: [...KH, SCHRAEGBANK] }),
  flys_kh_boden: wdh("schraeg", mit(RUECKENLAGE_AUF, { g: { ...flyZu(), ...FAUST } }), mit(RUECKENLAGE_AUF, { g: { ...flyAuf(B("schulter", [0, 84, 0])), ...FAUST } }), 2.2, { aus: 1.6, halten: 0.5, texte: ["Öffnen, bis die Oberarme den Boden berühren", "Zusammenführen"], hilfsmittel: KH }),
  kabel_flys_flachbank: wdh("schraeg", banklage(flyZu()), banklage(flyAuf()), 2.2, { aus: 1.6, texte: ["Arme im weiten Bogen öffnen", "Über der Brust zusammenführen"], hilfsmittel: [...kabel("hand_l", [0.95, 0.15, -0.25]), ...kabel("hand_r", [-0.95, 0.15, -0.25]), FLACHBANK] }),
  kabel_flys_schraegbank: wdh("schraeg", schraeg(flyZu(B("schulter", [125, 8, 0])), -55), schraeg(flyAuf(), -55), 2.2, { aus: 1.6, texte: ["Arme im weiten Bogen öffnen", "Zusammenführen"], hilfsmittel: [...kabel("hand_l", [0.95, 0.15, -0.2]), ...kabel("hand_r", [-0.95, 0.15, -0.2]), SCHRAEGBANK] }),
  kabel_crossover_oben: crossover({ ...B("schulter", [70, 72, 0]), ...B("ellbogen", [16, HAMMER]) }, { ...B("schulter", [38, -6, 0]), ...B("ellbogen", [16, HAMMER]) }, 2.0),
  kabel_crossover_mehrere_hoehen: crossover({ ...B("schulter", [70, 72, 0]), ...B("ellbogen", [16, HAMMER]) }, { ...B("schulter", [38, -6, 0]), ...B("ellbogen", [16, HAMMER]) }, 2.0),
  kabel_crossover_unten: crossover({ ...B("schulter", [10, 50, 0]), ...B("ellbogen", [16, HAMMER]) }, { ...B("schulter", [100, -6, 0]), ...B("ellbogen", [16, HAMMER]) }, 0.2),
  kabel_flys_mitte: crossover({ ...B("schulter", [40, 84, 0]), ...B("ellbogen", [16, HAMMER]) }, { ...B("schulter", [82, -4, 0]), ...B("ellbogen", [16, HAMMER]) }, 1.35),
  band_flys: wdh("schraeg", mit(STAND, { g: { ...B("schulter", [40, 84, 0]), ...B("ellbogen", [16, HAMMER]), ...FAUST } }), mit(STAND, { g: { ...B("schulter", [82, -4, 0]), ...B("ellbogen", [16, HAMMER]), ...FAUST } }), 1.4, { aus: 2.0, texte: ["Arme vor der Brust zusammenführen", "Langsam öffnen"], hilfsmittel: [{ art: "bandanker", von: "hand_l", anker: [0.5, 1.35, -0.8] }, { art: "bandanker", von: "hand_r", anker: [-0.5, 1.35, -0.8] }] }),
  // Drücken im Stand
  kabel_brustdruecken_stehend: wdh(
    "schraeg",
    mit(STAND_VOR, { g: { ...B("schulter", [30, 55, 0]), ...B("ellbogen", [100, OBERGRIFF]) } }),
    mit(STAND_VOR, { g: { ...B("schulter", [82, 4, 0]), ...B("ellbogen", [8, OBERGRIFF]) } }),
    1.4,
    { aus: 2.0, texte: ["Nach vorn drücken", "Langsam zurück"], hilfsmittel: zweiKabel(1.3, -0.45) },
  ),
  band_brustdruecken: wdh(
    "schraeg",
    mit(STAND_VOR, { g: { ...B("schulter", [30, 55, 0]), ...B("ellbogen", [100, OBERGRIFF]) } }),
    mit(STAND_VOR, { g: { ...B("schulter", [82, 4, 0]), ...B("ellbogen", [8, OBERGRIFF]) } }),
    1.4,
    { aus: 2.0, texte: ["Nach vorn drücken", "Langsam zurück"], hilfsmittel: [{ art: "bandanker", von: "hand_l", anker: [0.3, 1.3, -0.7] }, { art: "bandanker", von: "hand_r", anker: [-0.3, 1.3, -0.7] }] },
  ),
  kabel_drueck_einarmig: wdh(
    "schraeg",
    mit(STAND_VOR, { g: { schulter_l: [10, 8, 0], ellbogen_l: [20, 0], schulter_r: [30, 55, 0], ellbogen_r: [100, OBERGRIFF] } }),
    mit(STAND_VOR, { g: { schulter_l: [10, 8, 0], ellbogen_l: [20, 0], schulter_r: [84, 4, 0], ellbogen_r: [8, OBERGRIFF] } }),
    1.4,
    { aus: 2.0, seiten: true, texte: ["Nach vorn drücken", "Langsam zurück"], hilfsmittel: kabel("hand_r", [-0.5, 1.3, -0.6] as V3) },
  ),
  svend_press: wdh(
    "schraeg",
    mit(STAND, { g: { ...B("schulter", [30, 0, 0]), ...B("ellbogen", [110, 0]), ...B("finger", [0, 0]) } }),
    mit(STAND, { g: { ...B("schulter", [86, -6, 0]), ...B("ellbogen", [8, 0]), ...B("finger", [0, 0]) } }),
    1.6,
    { aus: 1.6, texte: ["Scheibe zusammenpressen, nach vorn strecken", "Zurück zur Brust"], hilfsmittel: [{ art: "hantelscheibe", an: "haende" }] },
  ),
  brust_isometrisch: halte("schraeg", STAND, mit(STAND, { g: { ...B("schulter", [40, -2, 0]), ...B("ellbogen", [100, 0]), ...B("finger", [0, 0]) } }), { ein: 1.5, aus: 1.5 }),
}
