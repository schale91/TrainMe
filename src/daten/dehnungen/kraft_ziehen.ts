// Ziehen mit der Dehnfigur: Klimmzüge an der Stange des Racks, Latzug und Überzug am Turm, Rudern mit Lang- und
// Kurzhantel, am Kabel, mit Band und im Hang.

import type { Dehnung, Haltung, Hilfsmittel, V3, Winkel } from "../../logik/dehnbewegung"
import { B, H, HALBKNIESTAND, KNIESTAND, LANGSITZ, PLANK, STAND, folge, halte, mit, wdh } from "./basis"
import { latzug } from "./kraft"
import { FAUST, FLACHBANK, HAMMER, KH, KH_R, LH, OBERGRIFF, ROLLE_OBEN, SZ, UNTERGRIFF, banklage, kabel, kabelstange } from "./kraftbasis"

// ---------------------------------------------------------------- Klimmzug an der Stange des Wand-Racks (2,12 m)
const BEINE_HANG: Winkel = { ...B("huefte", [12, 4, 0]), ...B("knie", [45]), ...B("fuss", [-20, 0]) }
const hang = (dreh: number, ab: number, w: Winkel = {}): Haltung => H({ ...BEINE_HANG, ...B("schulter", [176, ab, 0]), ...B("ellbogen", [4, dreh]), ...FAUST, hals: [-8, 0, 0], ...w }, [0, 0, 0], { pos: [0, 0.98, 0], boden: false })
const oben = (dreh: number, ab: number, w: Winkel = {}): Haltung => H({ ...BEINE_HANG, ...B("schulter", [22, ab + 18, 0]), ...B("ellbogen", [132, dreh]), ...FAUST, hals: [-12, 0, 0], ...w }, [-6, 0, 0], { pos: [0, 1.6, 0.04], boden: false })
const STANGE: Hilfsmittel = { art: "rack", an: "becken", z: -0.08 }
const klimmzug = (dreh: number, ab = 14, extra: Partial<Dehnung> = {}, w: Winkel = {}): Dehnung =>
  wdh("schraeg", hang(dreh, ab, w), oben(dreh, ab, w), 1.4, { aus: 2.0, texte: ["Hochziehen, Kinn über die Stange", "Kontrolliert ablassen"], hilfsmittel: [STANGE], ...extra })
const L_SITZ: Winkel = { ...B("huefte", [92, 4, 0]), ...B("knie", [4]), ...B("fuss", [-10, 0]) }

// ---------------------------------------------------------------- Überzug mit gestreckten Armen
const UEBER_STAND: Haltung = mit(STAND, { dreh: [22, 0, 0], g: { ...B("huefte", [26, 6, 0]), ...B("knie", [12]), ...B("fuss", [8, 0]), ...FAUST } })
const ueberzug = (basis: Haltung, hilfsmittel: Hilfsmittel[], w: Winkel = {}): Dehnung =>
  wdh("seite", mit(basis, { g: { ...B("schulter", [150, 10, 0]), ...B("ellbogen", [14, OBERGRIFF]), ...w } }), mit(basis, { g: { ...B("schulter", [8, 10, 0]), ...B("ellbogen", [10, OBERGRIFF]), ...w } }), 1.4, {
    aus: 2.0,
    texte: ["Mit gestreckten Armen zu den Hüften ziehen", "Langsam nach oben zurück"],
    hilfsmittel,
  })

// ---------------------------------------------------------------- Rudern vorgebeugt
/** Hüfte gebeugt, Rücken gerade; die Arme hängen senkrecht, oben liegt die Last am Bauch */
const vorgebeugt = (kipp: number): Haltung => mit(STAND, { dreh: [kipp, 0, 0], g: { ...B("huefte", [kipp + 6, 8, 0]), ...B("knie", [20]), ...B("fuss", [14, 0]), hals: [-30, 0, 0], lws: [-4, 0, 0], ...FAUST } })
const ruderUnten = (kipp: number, dreh: number, ab = 10): Winkel => ({ ...B("schulter", [kipp - 2, ab, 0]), ...B("ellbogen", [8, dreh]) })
const ruderOben = (dreh: number, ab = 10): Winkel => ({ ...B("schulter", [-8, ab + 18, 0]), ...B("ellbogen", [102, dreh]) })
const rudern = (kipp: number, dreh: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", mit(vorgebeugt(kipp), { g: ruderUnten(kipp, dreh) }), mit(vorgebeugt(kipp), { g: ruderOben(dreh) }), 1.2, { aus: 2.0, texte: ["Zum Bauch ziehen, Schulterblätter zusammen", "Langsam ablassen"], hilfsmittel, ...extra })

/** Bauchlage auf der Schrägbank */
const BRUST_LEHNE: Haltung = mit(STAND, { dreh: [48, 0, 0], g: { ...B("huefte", [40, 10, 0]), ...B("knie", [20]), ...B("fuss", [10, 0]), hals: [-30, 0, 0], ...FAUST } })
const BAUCH_LEHNE: Hilfsmittel = { art: "schraegbank", unter: "becken", lehne: "kopf", hoehe: 0.45, bauch: true }

/** Einarmig mit Knie und Hand auf der Bank: Oberkörper waagerecht, rechter Arm zieht */
const KNIE_BANK: Winkel = { huefte_l: [86, 4, 0], knie_l: [90], fuss_l: [-60, 0], huefte_r: [80, 10, 0], knie_r: [12], fuss_r: [8, 0], schulter_l: [84, 6, 0], ellbogen_l: [4, 90], hand_l: [80, 0], hals: [-30, 0, 0], ...FAUST }
const einarmBank: [Haltung, Haltung] = [H({ ...KNIE_BANK, schulter_r: [84, 8, 0], ellbogen_r: [8, HAMMER] }, [84, 0, 0]), H({ ...KNIE_BANK, schulter_r: [8, 14, 0], ellbogen_r: [100, HAMMER] }, [84, 0, 0])]
/** Schrittstellung, freie Hand auf der Bank, Oberkörper etwa 45 Grad */
const SCHRITT_BANK: Winkel = { huefte_l: [62, 6, 0], knie_l: [30], fuss_l: [14, 0], huefte_r: [34, 8, 0], knie_r: [8], fuss_r: [-6, 0], schulter_l: [56, 8, 0], ellbogen_l: [4, 90], hand_l: [80, 0], hals: [-30, 0, 0], ...FAUST }
const einarmSchritt: [Haltung, Haltung] = [H({ ...SCHRITT_BANK, schulter_r: [52, 8, 0], ellbogen_r: [8, HAMMER] }, [52, 0, 0]), H({ ...SCHRITT_BANK, schulter_r: [-10, 14, 0], ellbogen_r: [100, HAMMER] }, [52, 0, 0])]

// ---------------------------------------------------------------- Kabelrudern im Sitzen (untere Rolle am Fußbrett)
const KABEL_SITZ: Winkel = { ...B("huefte", [92, 8, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...FAUST }
const ruderSitz = (vor: number, w: Winkel): Haltung => H({ ...KABEL_SITZ, ...w }, [vor, 0, 0], { pos: [0, 0.55, 0], boden: false })
const ROLLE_UNTEN_VORN: V3 = [0, 0.32, 1.05]
/** Sitz des Latzugs, etwas hinter dem Gesäß, damit die Füße vorn am Fußbrett stehen */
const SITZBANK: Hilfsmittel = { art: "bank", unter: "gesaess", hoehe: 0.45, versatz: [0, -0.3] }
const kabelRudern = (griff: Hilfsmittel[], dreh: number, ab: number, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(
    "seite",
    ruderSitz(14, { ...B("schulter", [80, ab, 0]), ...B("ellbogen", [6, dreh]) }),
    ruderSitz(-4, { ...B("schulter", [-24, ab + 14, 0]), ...B("ellbogen", [100, dreh]) }),
    1.2,
    { aus: 2.0, texte: ["Zum Bauch ziehen, aufrecht bleiben", "Arme langsam strecken"], hilfsmittel: [...griff, ...kabel("haende", ROLLE_UNTEN_VORN), SITZBANK], ...extra },
  )

// ---------------------------------------------------------------- Im Hang unter einer Stange
/** Körper gestreckt, Fersen am Boden, Hände an einer Stange auf Hüfthöhe */
const invers = (kipp: number, y: number, w: Winkel): Haltung => H({ ...B("huefte", [0, 6, 0]), ...B("knie", [4]), ...B("fuss", [20, 0]), ...FAUST, hals: [10, 0, 0], ...w }, [kipp, 0, 0], { pos: [0, y, 0], boden: false })
const rudernInvers = (fuesseHoch: boolean): Dehnung => {
  const k = fuesseHoch ? -88 : -60
  return wdh("seite", invers(k, fuesseHoch ? 0.55 : 0.5, { ...B("schulter", [180 + k, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]) }), invers(k + 4, fuesseHoch ? 0.78 : 0.74, { ...B("schulter", [180 + k - 60, 32, 0]), ...B("ellbogen", [105, OBERGRIFF]) }), 1.3, {
    aus: 2.0,
    texte: ["Brust zur Stange ziehen", "Langsam ablassen"],
    // Stange auf den J-Hooks des Wand-Racks
    hilfsmittel: [{ art: "stange", an: "hand_r" }, { art: "rack", an: "hand_r", z: 0.06 }, ...(fuesseHoch ? [{ art: "box" as const, unter: "ferse_l" as const, hoehe: 0.45, versatz: [-0.09, 0] as [number, number] }] : [])],
  })
}

// ---------------------------------------------------------------- Rudern mit Band
const STAND_ZUG: Haltung = mit(STAND, { g: { huefte_l: [24, 6, 0], knie_l: [16], huefte_r: [-6, 6, 0], ...FAUST } })
const bandRudern = (basis: Haltung, anker: V3, einarm = false): Dehnung => {
  const u: Winkel = einarm ? { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [84, 8, 0], ellbogen_r: [6, HAMMER] } : { ...B("schulter", [84, 8, 0]), ...B("ellbogen", [6, HAMMER]) }
  const o: Winkel = einarm ? { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [-20, 22, 0], ellbogen_r: [100, HAMMER] } : { ...B("schulter", [-20, 22, 0]), ...B("ellbogen", [100, HAMMER]) }
  return wdh("schraeg", mit(basis, { g: u }), mit(basis, { g: o }), 1.2, {
    aus: 2.0,
    seiten: einarm,
    texte: ["Zum Bauch ziehen, Schulterblätter zusammen", "Langsam zurück"],
    hilfsmittel: einarm ? [{ art: "bandanker", von: "hand_r", anker }] : [{ art: "bandanker", von: "hand_l", anker }, { art: "bandanker", von: "hand_r", anker }],
  })
}

export const KRAFT_ZIEHEN: Record<string, Dehnung> = {
  // Klimmzug
  klimmzug: klimmzug(OBERGRIFF),
  klimmzug_untergriff: klimmzug(UNTERGRIFF, 8),
  klimmzug_neutral: klimmzug(HAMMER, 8),
  klimmzug_weit: klimmzug(OBERGRIFF, 30),
  klimmzug_gewicht: klimmzug(OBERGRIFF),
  klimmzug_exzentrisch_betont: klimmzug(OBERGRIFF, 14, { ein: 1.4, aus: 4.5, texte: ["Hochziehen", "Sehr langsam ablassen (4 bis 5 s)"] }),
  klimmzug_l_sit: klimmzug(OBERGRIFF, 14, { texte: ["Beine waagerecht halten, hochziehen", "Ablassen, Beine bleiben vorn"] }, L_SITZ),
  klimmzug_band: klimmzug(OBERGRIFF, 14, { hilfsmittel: [STANGE, { art: "bandanker", von: "knie_l", anker: [0.05, 2.12, 0] }, { art: "bandanker", von: "knie_r", anker: [-0.05, 2.12, 0] }] }),
  klimmzug_negativ: folge("schraeg", [[oben(OBERGRIFF, 14), 1.0, "Oben (mit Sprung oder Stufe)"], [hang(OBERGRIFF, 14), 4.5, "Sehr langsam ablassen"], [hang(OBERGRIFF, 14), 0.8, "Absteigen"]], { hilfsmittel: [STANGE] }),
  klimmzug_exzentrisch_overload: folge("schraeg", [[oben(OBERGRIFF, 14), 1.0, "Oben (mit Sprung oder Box)"], [hang(OBERGRIFF, 14), 4.5, "Mit Zusatzgewicht sehr langsam ablassen"], [hang(OBERGRIFF, 14), 0.8, "Absteigen"]], { hilfsmittel: [STANGE] }),
  klimmzug_halten: halte("schraeg", hang(OBERGRIFF, 14), oben(OBERGRIFF, 14), { ein: 1.5, aus: 2, hilfsmittel: [STANGE] }),
  klimmzug_schulterblatt: wdh("schraeg", hang(OBERGRIFF, 14, B("schulterblatt", [12, 0])), mit(hang(OBERGRIFF, 14, B("schulterblatt", [-14, 0])), { pos: [0, 1.04, 0] }), 1.0, { aus: 1.4, texte: ["Nur die Schulterblätter nach unten ziehen", "Locker hängen"], hilfsmittel: [STANGE] }),
  klimmzug_box: wdh(
    "schraeg",
    H({ ...B("huefte", [70, 6, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...B("schulter", [176, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }, [0, 0, 0], { pos: [0, 1.0, 0], boden: false }),
    H({ ...B("huefte", [30, 6, 0]), ...B("knie", [40]), ...B("fuss", [10, 0]), ...B("schulter", [22, 32, 0]), ...B("ellbogen", [132, OBERGRIFF]), ...FAUST }, [-6, 0, 0], { pos: [0, 1.48, 0.04], boden: false }),
    1.4,
    { aus: 2.0, texte: ["Hochziehen, die Beine helfen nur so viel wie nötig", "Kontrolliert ablassen"], hilfsmittel: [STANGE, { art: "box", unter: "fuss_l", hoehe: 0.5, versatz: [-0.09, 0.05] }] },
  ),
  // Latzug
  latzug_neutral: latzug(HAMMER, 10, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }]),
  latzug_untergriff: latzug(UNTERGRIFF, 10, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }]),
  latzug_wechselnde_griffe: latzug(OBERGRIFF, 22, [{ art: "latstange", von: "hand_l", bis: "hand_r" }]),
  latzug_maschine: latzug(HAMMER, 18, []),
  latzug_kniend: wdh(
    "schraeg",
    mit(KNIESTAND, { dreh: [8, 0, 0], g: { ...B("schulter", [168, 20, 0]), ...B("ellbogen", [6, OBERGRIFF]), ...FAUST } }),
    mit(KNIESTAND, { dreh: [4, 0, 0], g: { ...B("schulter", [28, 50, 0]), ...B("ellbogen", [118, OBERGRIFF]), ...FAUST } }),
    1.4,
    { aus: 2.2, texte: ["Stange zur oberen Brust ziehen", "Kontrolliert nach oben lassen"], hilfsmittel: [{ art: "latstange", von: "hand_l", bis: "hand_r" }, ...kabel("haende", [0, 2.1, 0.45])] },
  ),
  latzug_kniend_einarmig: wdh(
    "schraeg",
    mit(KNIESTAND, { g: { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [168, 12, 0], ellbogen_r: [6, HAMMER], ...FAUST } }),
    mit(KNIESTAND, { g: { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [24, 34, 0], ellbogen_r: [118, HAMMER], ...FAUST } }),
    1.4,
    { aus: 2.2, seiten: true, texte: ["Ellbogen zur Hüfte ziehen", "Kontrolliert nach oben"], hilfsmittel: kabel("hand_r", [-0.15, 2.1, 0.45]) },
  ),
  latzug_band: wdh(
    "schraeg",
    mit(KNIESTAND, { g: { ...B("schulter", [168, 20, 0]), ...B("ellbogen", [6, OBERGRIFF]), ...FAUST } }),
    mit(KNIESTAND, { g: { ...B("schulter", [28, 50, 0]), ...B("ellbogen", [118, OBERGRIFF]), ...FAUST } }),
    1.4,
    { aus: 2.2, texte: ["Band zur Brust ziehen", "Kontrolliert nach oben"], hilfsmittel: [{ art: "bandanker", von: "hand_l", anker: [0.1, 2.1, 0.35] }, { art: "bandanker", von: "hand_r", anker: [-0.1, 2.1, 0.35] }] },
  ),
  // Überzug
  ueberzug_kabel_gestreckt: ueberzug(UEBER_STAND, [kabelstange(), ...kabel("haende", ROLLE_OBEN)]),
  ueberzug_band: ueberzug(UEBER_STAND, [{ art: "bandanker", von: "hand_l", anker: [0.1, 2.1, 0.5] }, { art: "bandanker", von: "hand_r", anker: [-0.1, 2.1, 0.5] }]),
  ueberzug_kabel_kniend: ueberzug(mit(KNIESTAND, { dreh: [14, 0, 0], g: FAUST }), [kabelstange(), ...kabel("haende", [0, 2.1, 0.5])]),
  ueberzug_kabel_einarmig: wdh("seite", mit(UEBER_STAND, { g: { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [150, 8, 0], ellbogen_r: [12, HAMMER] } }), mit(UEBER_STAND, { g: { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [-6, 8, 0], ellbogen_r: [10, HAMMER] } }), 1.4, {
    aus: 2.0,
    seiten: true,
    texte: ["Mit gestrecktem Arm zur Hüfte ziehen", "Langsam nach oben"],
    hilfsmittel: kabel("hand_r", [-0.15, 2.1, 0.42]),
  }),
  ueberzug_kh: wdh("seite", banklage({ ...B("schulter", [92, 2, 0]), ...B("ellbogen", [16, HAMMER]) }), banklage({ ...B("schulter", [168, 4, 0]), ...B("ellbogen", [22, HAMMER]) }), 2.2, { aus: 1.6, texte: ["Hantel im Bogen hinter den Kopf senken", "Zurück über die Brust"], hilfsmittel: [{ art: "hantel", an: "haende" }, FLACHBANK] }),
  ueberzug_sz: wdh("seite", banklage({ ...B("schulter", [88, 6, 0]), ...B("ellbogen", [60, OBERGRIFF]) }), banklage({ ...B("schulter", [160, 8, 0]), ...B("ellbogen", [75, OBERGRIFF]) }), 2.2, { aus: 1.6, texte: ["Stange hinter den Kopf senken", "Zurück über die Brust"], hilfsmittel: [...SZ, FLACHBANK] }),
  ueberzug_kabel_liegend: wdh("seite", banklage({ ...B("schulter", [170, 6, 0]), ...B("ellbogen", [16, OBERGRIFF]) }), banklage({ ...B("schulter", [86, 6, 0]), ...B("ellbogen", [12, OBERGRIFF]) }), 1.6, { aus: 2.2, texte: ["Mit fast gestreckten Armen über die Brust ziehen", "Langsam hinter den Kopf"], hilfsmittel: [kabelstange(), ...kabel("haende", [0, 0.15, -1.45]), FLACHBANK] }),
  // Rudern vorgebeugt
  rudern_lh: rudern(62, OBERGRIFF, LH),
  rudern_multipresse: rudern(62, OBERGRIFF, LH),
  rudern_lh_untergriff: rudern(48, UNTERGRIFF, LH),
  rudern_kh_vorgebeugt: rudern(62, HAMMER, KH),
  rudern_pendlay: folge(
    "schraeg",
    [
      [mit(vorgebeugt(84), { g: { ...ruderUnten(84, OBERGRIFF), ...B("knie", [32]) } }), 0.8, "Stange liegt am Boden"],
      [mit(vorgebeugt(84), { g: { ...ruderOben(OBERGRIFF), ...B("knie", [32]) } }), 0.6, "Explosiv zum Bauch ziehen"],
      [mit(vorgebeugt(84), { g: { ...ruderUnten(84, OBERGRIFF), ...B("knie", [32]) } }), 1.4, "Zurück auf den Boden"],
    ],
    { hilfsmittel: LH },
  ),
  rudern_helms: wdh("seite", mit(BRUST_LEHNE, { g: ruderUnten(48, HAMMER) }), mit(BRUST_LEHNE, { g: ruderOben(HAMMER) }), 1.2, { aus: 2.0, texte: ["Zum Bauch ziehen, Brust nur leicht an der Lehne", "Langsam ablassen"], hilfsmittel: [...KH, BAUCH_LEHNE] }),
  rudern_kh_brust: wdh("seite", mit(BRUST_LEHNE, { g: ruderUnten(48, HAMMER) }), mit(BRUST_LEHNE, { g: ruderOben(HAMMER) }), 1.2, { aus: 2.0, texte: ["Zum Bauch ziehen, Brust bleibt an der Lehne", "Langsam ablassen"], hilfsmittel: [...KH, BAUCH_LEHNE] }),
  rudern_kh_brust_einarmig: wdh(
    "seite",
    mit(BRUST_LEHNE, { g: { schulter_l: [46, 10, 0], ellbogen_l: [10, HAMMER], schulter_r: [46, 10, 0], ellbogen_r: [8, HAMMER] } }),
    mit(BRUST_LEHNE, { g: { schulter_l: [46, 10, 0], ellbogen_l: [10, HAMMER], schulter_r: [-8, 28, 0], ellbogen_r: [102, HAMMER] } }),
    1.2,
    { aus: 2.0, seiten: true, texte: ["Zum Bauch ziehen", "Langsam ablassen"], hilfsmittel: [...KH_R, BAUCH_LEHNE] },
  ),
  // Einarmig
  rudern_kh: wdh("seite", einarmBank[0], einarmBank[1], 1.2, { aus: 2.0, seiten: true, texte: ["Ellbogen zur Hüfte ziehen", "Langsam ablassen"], hilfsmittel: [...KH_R, { art: "bank", unter: "knie_l", hoehe: 0.45, versatz: [0, 0.1] }] }),
  rudern_kh_schwer: wdh("seite", einarmSchritt[0], einarmSchritt[1], 1.0, { aus: 1.8, seiten: true, texte: ["Kraftvoll zur Hüfte ziehen", "Ablassen"], hilfsmittel: [...KH_R, { art: "bank", unter: "hand_l", hoehe: 0.5 }] }),
  rudern_kroc: wdh("seite", einarmSchritt[0], einarmSchritt[1], 0.9, { aus: 1.4, seiten: true, texte: ["Kraftvoll zur Hüfte ziehen, viele Wiederholungen", "Ablassen"], hilfsmittel: [...KH_R, { art: "bank", unter: "hand_l", hoehe: 0.5 }] }),
  rudern_gorilla: (() => {
    const basis = mit(STAND, { dreh: [62, 0, 0], g: { ...B("huefte", [72, 22, 0]), ...B("knie", [40]), ...B("fuss", [20, 0]), hals: [-30, 0, 0], ...FAUST } })
    const u = mit(basis, { g: ruderUnten(62, HAMMER, 18) })
    return folge("seite", [[mit(u, { g: { schulter_l: [-8, 32, 0], ellbogen_l: [102, HAMMER] } }), 1.0, "Links ziehen"], [u, 1.2, "Ablassen"], [mit(u, { g: { schulter_r: [-8, 32, 0], ellbogen_r: [102, HAMMER] } }), 1.0, "Rechts ziehen"], [u, 1.2, "Ablassen"]], { hilfsmittel: KH })
  })(),
  rudern_renegade: folge(
    "seite",
    [
      [mit(PLANK, { g: { schulter_l: [10, 20, 0], ellbogen_l: [100, 0] } }), 1.0, "Links rudern, Hüfte bleibt ruhig"],
      [PLANK, 1.0, "Absetzen"],
      [mit(PLANK, { g: { schulter_r: [10, 20, 0], ellbogen_r: [100, 0] } }), 1.0, "Rechts rudern"],
      [PLANK, 1.0, "Absetzen"],
    ],
    { hilfsmittel: KH },
  ),
  // Kabelrudern im Sitzen
  rudern_kabel: kabelRudern([], HAMMER, 6),
  rudern_kabel_streng: kabelRudern([], HAMMER, 6, { halten: 1.0, texte: ["Oberkörper senkrecht, zum Bauch ziehen, Pause", "Arme langsam strecken"] }),
  rudern_kabel_weit: kabelRudern([kabelstange()], OBERGRIFF, 30),
  rudern_kabel_einarmig: wdh(
    "seite",
    ruderSitz(12, { schulter_l: [10, 10, 0], ellbogen_l: [40, 0], schulter_r: [80, 8, 0], ellbogen_r: [6, HAMMER] }),
    ruderSitz(-4, { schulter_l: [10, 10, 0], ellbogen_l: [40, 0], schulter_r: [-24, 18, 0], ellbogen_r: [100, HAMMER] }),
    1.2,
    { aus: 2.0, seiten: true, texte: ["Zum Bauch ziehen", "Arm langsam strecken"], hilfsmittel: [...kabel("hand_r", [-0.12, 0.32, 1.05]), SITZBANK] },
  ),
  rudern_schulterblatt: wdh("seite", ruderSitz(4, { ...B("schulter", [80, 6, 0]), ...B("ellbogen", [6, HAMMER]), ...B("schulterblatt", [0, 18]) }), ruderSitz(4, { ...B("schulter", [80, 6, 0]), ...B("ellbogen", [6, HAMMER]), ...B("schulterblatt", [0, -20]) }), 1.0, {
    aus: 1.4,
    halten: 0.8,
    texte: ["Nur die Schulterblätter zusammenziehen", "Wieder lösen"],
    hilfsmittel: [...kabel("haende", ROLLE_UNTEN_VORN), SITZBANK],
  }),
  rudern_kabel_stehend_einarmig: bandRudern(STAND_ZUG, [-0.15, 1.2, 0.95], true),
  rudern_kabel_hoch: wdh(
    "schraeg",
    mit(HALBKNIESTAND, { g: { ...B("schulter", [130, 12, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }),
    mit(HALBKNIESTAND, { g: { ...B("schulter", [30, 60, 0]), ...B("ellbogen", [115, HAMMER]), ...FAUST } }),
    1.2,
    { aus: 2.0, texte: ["Schräg nach unten zum Gesicht ziehen", "Langsam zurück"], hilfsmittel: kabel("haende", [0, 2.0, 0.9]) },
  ),
  // Band
  rudern_band: bandRudern(STAND_ZUG, [0, 1.2, 0.95]),
  rudern_band_einarmig: bandRudern(STAND_ZUG, [-0.15, 1.2, 0.95], true),
  rudern_band_sitzend: wdh(
    "seite",
    mit(LANGSITZ, { g: { ...B("schulter", [80, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }),
    mit(LANGSITZ, { g: { ...B("schulter", [-22, 22, 0]), ...B("ellbogen", [100, HAMMER]), ...FAUST } }),
    1.2,
    { aus: 2.0, texte: ["Zum Bauch ziehen, aufrecht sitzen", "Langsam zurück"], hilfsmittel: [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_r", bis: "hand_r" }] },
  ),
  // Im Hang
  rudern_invertiert: rudernInvers(false),
  rudern_tisch: rudernInvers(false),
  rudern_invertiert_erhoeht: rudernInvers(true),
}
