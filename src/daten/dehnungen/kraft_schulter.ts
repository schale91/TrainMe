// Schultern und Trapez mit der Dehnfigur: Drücken über Kopf, Seit- und Frontheben, hintere Schulter, Rotatoren,
// Schulterblatt, Schulterheben.
//
// Schulter [beugen, abspreizen, außen drehen, waagerecht öffnen]: Arm nach vorn [90, 0], zur Seite [0, 85],
// waagerecht geöffnet aus der Vorhalte [90, 4, 0, 85].

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, BAUCHLAGE, H, HALBKNIESTAND, HUND, LANGSITZ, PLANK, STAND, STUHLSITZ, folge, halte, mit, wdh } from "./basis"
import { BAND, FAUST, FLACHBANK, HAMMER, KH, KH_R, LH, OBERGRIFF, UNTERGRIFF, banklage, kabel, kabelstange } from "./kraftbasis"

const LEHNE: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }
const SITZ: Haltung = mit(STUHLSITZ, { g: { ...B("ellbogen", [0, 0]) } })
const RACK_STAND: Hilfsmittel = { art: "rack", an: "becken", haken: 1.4 }

// ---------------------------------------------------------------- Drücken über Kopf
/** Unten liegt die Last vor den Schultern, oben sind die Arme gestreckt über dem Kopf */
const druckUnten = (dreh: number, w: Winkel = {}): Winkel => ({ ...B("schulter", [32, 34, 0]), ...B("ellbogen", [138, dreh]), ...FAUST, ...w })
const druckOben = (dreh: number, w: Winkel = {}): Winkel => ({ ...B("schulter", [174, 12, 0]), ...B("ellbogen", [6, dreh]), ...FAUST, ...w })
const ueberKopf = (basis: Haltung, dreh: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", mit(basis, { g: druckUnten(dreh) }), mit(basis, { g: druckOben(dreh) }), 1.3, { aus: 2.0, texte: ["Über den Kopf drücken", "Kontrolliert zu den Schultern"], hilfsmittel, ...extra })
/** Einarmig: der freie Arm hängt locker oder stützt sich ab */
const einarmig = (basis: Haltung, hilfsmittel: Hilfsmittel[]): Dehnung =>
  wdh("schraeg", mit(basis, { g: { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [32, 34, 0], ellbogen_r: [138, HAMMER], ...FAUST } }), mit(basis, { g: { schulter_l: [4, 8, 0], ellbogen_l: [12, 0], schulter_r: [174, 10, 0], ellbogen_r: [6, HAMMER], ...FAUST } }), 1.3, {
    aus: 2.0,
    seiten: true,
    texte: ["Über den Kopf drücken", "Kontrolliert zur Schulter"],
    hilfsmittel,
  })

// ---------------------------------------------------------------- Seitheben, Frontheben
const seitUnten = (w: Winkel = {}): Winkel => ({ ...B("schulter", [6, 8, 0]), ...B("ellbogen", [14, HAMMER]), ...FAUST, ...w })
const seitOben = (w: Winkel = {}): Winkel => ({ ...B("schulter", [10, 86, 0]), ...B("ellbogen", [14, HAMMER]), ...FAUST, ...w })
const seitheben = (basis: Haltung, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("vorn", mit(basis, { g: seitUnten() }), mit(basis, { g: seitOben() }), 1.3, { aus: 2.2, texte: ["Seitlich bis Schulterhöhe heben", "Langsam ablassen"], hilfsmittel, ...extra })
const frontheben = (dreh: number, hilfsmittel: Hilfsmittel[], ab = 6): Dehnung =>
  wdh("seite", mit(STAND, { g: { ...B("schulter", [6, ab, 0]), ...B("ellbogen", [10, dreh]), ...FAUST } }), mit(STAND, { g: { ...B("schulter", [92, ab, 0]), ...B("ellbogen", [10, dreh]), ...FAUST } }), 1.3, {
    aus: 2.2,
    texte: ["Nach vorn bis Schulterhöhe heben", "Langsam ablassen"],
    hilfsmittel,
  })
/** Zwei Kabeltürme mit unteren Rollen; die Kabel kreuzen sich vor dem Körper (links liegt bei +x) */
const kabelGekreuzt = (hoehe: number, z = 0.1): Hilfsmittel[] => [...kabel("hand_l", [-0.9, hoehe, z]), ...kabel("hand_r", [0.9, hoehe, z])]

// ---------------------------------------------------------------- Hintere Schulter
const VORGEBEUGT: Haltung = mit(STAND, { dreh: [62, 0, 0], g: { ...B("huefte", [66, 8, 0]), ...B("knie", [18]), ...B("fuss", [14, 0]), hals: [-28, 0, 0], lws: [-4, 0, 0] } })
const reverseVorgebeugt = (basis: Haltung, hilfsmittel: Hilfsmittel[]): Dehnung =>
  wdh("schraeg", mit(basis, { g: { ...B("schulter", [64, 6, 0]), ...B("ellbogen", [16, HAMMER]), ...FAUST } }), mit(basis, { g: { ...B("schulter", [64, 6, 0, 84]), ...B("ellbogen", [16, HAMMER]), ...FAUST } }), 1.3, {
    aus: 2.2,
    texte: ["Arme seitlich öffnen, Schulterblätter zusammen", "Langsam zurück"],
    hilfsmittel,
  })
/** Bauchlage auf der Schrägbank: Brust an der Lehne, Füße am Boden */
const BRUST_LEHNE: Haltung = mit(STAND, { dreh: [48, 0, 0], g: { ...B("huefte", [40, 10, 0]), ...B("knie", [20]), ...B("fuss", [10, 0]), hals: [-30, 0, 0] } })
const BAUCH_LEHNE: Hilfsmittel = { art: "schraegbank", unter: "becken", lehne: "kopf", hoehe: 0.45, bauch: true }

// ---------------------------------------------------------------- Face Pull, Pull-Apart
const ARME_VOR: Winkel = { ...B("schulter", [90, 4, 0]), ...B("ellbogen", [6, OBERGRIFF]), ...FAUST }
const FACE_ZU: Winkel = { ...B("schulter", [80, 4, 0, 80]), ...B("ellbogen", [110, HAMMER]), ...FAUST }
const facePull = (basis: Haltung, hilfsmittel: Hilfsmittel[]): Dehnung =>
  wdh("schraeg", mit(basis, { g: { ...ARME_VOR, ...B("ellbogen", [6, HAMMER]) } }), mit(basis, { g: FACE_ZU }), 1.3, { aus: 2.0, halten: 0.6, texte: ["Seil zum Gesicht ziehen, Hände nach außen", "Langsam zurück"], hilfsmittel })
const pullApart = (dreh: number): Dehnung =>
  wdh("schraeg", mit(STAND, { g: { ...ARME_VOR, ...B("ellbogen", [6, dreh]) } }), mit(STAND, { g: { ...B("schulter", [90, 4, 0, 85]), ...B("ellbogen", [6, dreh]), ...FAUST } }), 1.2, {
    aus: 1.8,
    halten: 0.5,
    texte: ["Band auseinanderziehen bis zur Brust", "Langsam zurück"],
    hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }],
  })

// ---------------------------------------------------------------- Rotatoren
/** Ellbogen am Körper, 90 Grad gebeugt; der Unterarm dreht nach außen (oder innen) */
const ROT_INNEN: Winkel = { ...B("schulter", [4, 10, -30]), ...B("ellbogen", [90, HAMMER]), ...FAUST }
const ROT_AUSSEN: Winkel = { ...B("schulter", [4, 10, 60]), ...B("ellbogen", [90, HAMMER]), ...FAUST }
const rotation = (aussen: boolean, hilfsmittel: Hilfsmittel[]): Dehnung =>
  wdh("schraeg", mit(STAND, { g: aussen ? ROT_INNEN : ROT_AUSSEN }), mit(STAND, { g: aussen ? ROT_AUSSEN : ROT_INNEN }), 1.2, {
    aus: 1.8,
    seiten: true,
    texte: [aussen ? "Unterarm nach außen drehen" : "Unterarm nach innen drehen", "Langsam zurück"],
    hilfsmittel,
  })

// ---------------------------------------------------------------- Schulterheben
const SHRUG_U: Winkel = { ...B("schulter", [2, 8, 0]), ...B("ellbogen", [6, OBERGRIFF]), ...FAUST }
const SHRUG_O: Winkel = { ...SHRUG_U, ...B("schulterblatt", [24, 0]) }
const shrug = (basis: Haltung, hilfsmittel: Hilfsmittel[], w: Winkel = {}): Dehnung =>
  wdh("schraeg", mit(basis, { g: { ...SHRUG_U, ...w } }), mit(basis, { g: { ...SHRUG_O, ...w } }), 0.9, { aus: 1.6, halten: 0.8, texte: ["Schultern zu den Ohren ziehen", "Langsam senken"], hilfsmittel })

export const KRAFT_SCHULTER: Record<string, Dehnung> = {
  // Drücken über Kopf
  schulterdruecken_lh: ueberKopf(STAND, OBERGRIFF, [...LH, RACK_STAND]),
  push_press: folge(
    "schraeg",
    [
      [mit(STAND, { g: { ...druckUnten(OBERGRIFF), ...B("huefte", [22, 6, 0]), ...B("knie", [28]), ...B("fuss", [14, 0]) } }), 0.7, "Kurz in die Knie"],
      [mit(STAND, { g: druckOben(OBERGRIFF) }), 0.7, "Beine strecken, Stange über den Kopf"],
      [mit(STAND, { g: druckOben(OBERGRIFF) }), 0.6, "Oben halten"],
      [mit(STAND, { g: druckUnten(OBERGRIFF) }), 1.6, "Kontrolliert zu den Schultern"],
    ],
    { hilfsmittel: [...LH, RACK_STAND] },
  ),
  schulterdruecken_lh_sitzend: ueberKopf(SITZ, OBERGRIFF, [...LH, LEHNE]),
  schulterdruecken_multipresse: ueberKopf(SITZ, OBERGRIFF, [...LH, LEHNE]),
  schulterdruecken_kh_sitzend: ueberKopf(SITZ, OBERGRIFF, [...KH, LEHNE]),
  schulterdruecken_kh_neutral: ueberKopf(SITZ, HAMMER, [...KH, LEHNE]),
  schulterdruecken_kh_stehend: ueberKopf(STAND, OBERGRIFF, KH),
  schulterdruecken_band: ueberKopf(STAND, OBERGRIFF, BAND),
  schulterdruecken_kabel: ueberKopf(SITZ, OBERGRIFF, [...kabel("hand_l", [0.85, 0.12, 0]), ...kabel("hand_r", [-0.85, 0.12, 0]), { art: "bank", unter: "gesaess", hoehe: 0.45 }]),
  z_press: ueberKopf(mit(LANGSITZ, { g: { ...B("ellbogen", [0, 0]) } }), OBERGRIFF, LH),
  arnold_press_sitzend: wdh(
    "schraeg",
    mit(SITZ, { g: { ...B("schulter", [44, 6, 0]), ...B("ellbogen", [140, UNTERGRIFF]), ...FAUST } }),
    mit(SITZ, { g: druckOben(OBERGRIFF) }),
    1.6,
    { aus: 2.2, texte: ["Drücken und dabei die Hände nach außen drehen", "Zurück, Handflächen zu dir"], hilfsmittel: [...KH, LEHNE] },
  ),
  schulterdruecken_kh_einarmig: einarmig(STAND, KH_R),
  kb_druecken: einarmig(STAND, KH_R),
  kb_bottoms_up_druecken: einarmig(STAND, KH_R),
  schulterdruecken_kh_halbkniend: einarmig(HALBKNIESTAND, KH_R),
  pike_liegestuetz: wdh("seite", HUND, mit(HUND, { g: { ...B("schulter", [158, 20, 0]), ...B("ellbogen", [80, 90]) } }), 1.8, { aus: 1.2, texte: ["Kopf Richtung Boden senken", "Hochdrücken"] }),
  pike_liegestuetz_erhoeht: wdh("seite", mit(HUND, { dreh: [150, 0, 0], g: B("huefte", [95, 4, 0]) }), mit(HUND, { dreh: [155, 0, 0], g: { ...B("huefte", [95, 4, 0]), ...B("schulter", [150, 20, 0]), ...B("ellbogen", [100, 90]) } }), 1.8, {
    aus: 1.2,
    texte: ["Kopf Richtung Boden senken", "Hochdrücken"],
    hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.5, versatz: [-0.09, 0] }],
  }),
  // Seitheben
  seitheben: seitheben(STAND, KH),
  seitheben_swing: seitheben(STAND, KH, { ein: 0.9 }),
  seitheben_teilwdh_gedehnt: wdh("vorn", mit(STAND, { g: seitUnten() }), mit(STAND, { g: seitUnten(B("schulter", [8, 38, 0])) }), 0.9, { aus: 1.2, texte: ["Nur bis etwa 30 Grad heben", "Langsam zurück"], hilfsmittel: KH }),
  seitheben_band: seitheben(STAND, BAND),
  seitheben_sitzend: seitheben(SITZ, [...KH, { art: "bank", unter: "gesaess", hoehe: 0.45, versatz: [0, -0.42] }]),
  seitheben_isohold: halte("vorn", mit(STAND, { g: seitUnten() }), mit(STAND, { g: seitOben() }), { ein: 1.5, aus: 2, hilfsmittel: KH }),
  seitheben_21er: (() => {
    const u = mit(STAND, { g: seitUnten() }), o = mit(STAND, { g: seitOben() })
    const m = mit(STAND, { g: seitUnten(B("schulter", [8, 45, 0])) })
    return folge("vorn", [[m, 0.9, "7 × unten bis zur Hälfte"], [u, 1.0, "zurück"], [o, 1.2, "7 × von der Hälfte bis oben"], [m, 1.0, "zurück zur Hälfte"], [o, 1.0, "7 × ganz"], [u, 2.0, "Langsam ablassen"]], { hilfsmittel: KH })
  })(),
  lu_raise: wdh("vorn", mit(STAND, { g: seitUnten(B("ellbogen", [4, HAMMER])) }), mit(STAND, { g: { ...B("schulter", [10, 168, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST } }), 1.6, { aus: 2.2, texte: ["Seitlich bis über den Kopf heben", "Langsam ablassen"], hilfsmittel: KH }),
  seitheben_kabel_einarmig: wdh("vorn", mit(STAND, { g: { ...seitUnten(), schulter_r: [8, -6, 0] } }), mit(STAND, { g: { ...seitUnten(), schulter_r: [10, 86, 0] } }), 1.3, { aus: 2.2, seiten: true, texte: ["Seitlich bis Schulterhöhe heben", "Langsam zurück"], hilfsmittel: kabel("hand_r", [0.4, 0.12, 0.15]) }),
  seitheben_kabel_beidarmig: seitheben(STAND, kabelGekreuzt(0.12)),
  kabel_y_raise: wdh("vorn", mit(STAND, { g: { ...B("schulter", [10, -4, 0]), ...B("ellbogen", [8, HAMMER]), ...FAUST } }), mit(STAND, { g: { ...B("schulter", [150, 40, 0]), ...B("ellbogen", [8, HAMMER]), ...FAUST } }), 1.4, { aus: 2.2, texte: ["Arme schräg nach oben in ein Y", "Langsam zurück"], hilfsmittel: kabelGekreuzt(0.12) }),
  aufrechtes_rudern_kh: wdh("vorn", mit(STAND, { g: { ...SHRUG_U, ...B("ellbogen", [10, OBERGRIFF]) } }), mit(STAND, { g: { ...B("schulter", [20, 82, -50]), ...B("ellbogen", [120, OBERGRIFF]), ...FAUST } }), 1.2, { aus: 2.0, texte: ["Ellbogen seitlich nach oben ziehen", "Langsam ablassen"], hilfsmittel: KH }),
  aufrechtes_rudern_kabel_weit: wdh("vorn", mit(STAND, { g: { ...SHRUG_U, ...B("schulter", [4, 14, 0]), ...B("ellbogen", [10, OBERGRIFF]) } }), mit(STAND, { g: { ...B("schulter", [20, 86, -50]), ...B("ellbogen", [110, OBERGRIFF]), ...FAUST } }), 1.2, { aus: 2.0, texte: ["Stange bis zur Brust ziehen, Ellbogen hoch", "Langsam ablassen"], hilfsmittel: [kabelstange(), ...kabel("haende", [0, 0.12, 0.45])] }),
  // Frontheben
  frontheben_kh: frontheben(OBERGRIFF, KH),
  frontheben_scheibe: frontheben(HAMMER, [{ art: "hantelscheibe", an: "haende" }], -3),
  frontheben_kabel: frontheben(OBERGRIFF, [kabelstange(), ...kabel("haende", [0, 0.12, -0.4])]),
  // Hintere Schulter
  reverse_flye_kh_vorgebeugt: reverseVorgebeugt(VORGEBEUGT, KH),
  reverse_flye_kh_sitzend: reverseVorgebeugt(H({ ...B("huefte", [130, 10, 0]), ...B("knie", [95]), hals: [-25, 0, 0] }, [44, 0, 0], { pos: [0, 0.5, 0], boden: false }), [...KH, { art: "bank", unter: "gesaess", hoehe: 0.45, versatz: [0, -0.42] }]),
  reverse_flye_brustgestuetzt: reverseVorgebeugt(BRUST_LEHNE, [...KH, BAUCH_LEHNE]),
  reverse_flye_kabel: wdh("schraeg", mit(STAND, { g: { ...B("schulter", [90, -6, 0]), ...B("ellbogen", [8, HAMMER]), ...FAUST } }), mit(STAND, { g: { ...B("schulter", [90, 4, 0, 88]), ...B("ellbogen", [8, HAMMER]), ...FAUST } }), 1.2, { aus: 2.0, texte: ["Arme gekreuzt nach außen ziehen", "Langsam zurück"], hilfsmittel: kabelGekreuzt(1.45, 0.55) }),
  reverse_flye_kabel_einarmig: wdh("schraeg", mit(STAND, { g: { ...SHRUG_U, schulter_r: [90, -14, 0], ellbogen_r: [8, HAMMER] } }), mit(STAND, { g: { ...SHRUG_U, schulter_r: [90, 4, 0, 88], ellbogen_r: [8, HAMMER] } }), 1.2, { aus: 2.0, seiten: true, texte: ["Quer vor dem Körper nach außen ziehen", "Langsam zurück"], hilfsmittel: kabel("hand_r", [0.9, 1.45, 0.55]) }),
  reverse_flye_band: wdh("schraeg", mit(STAND, { g: ARME_VOR }), mit(STAND, { g: { ...B("schulter", [90, 4, 0, 85]), ...B("ellbogen", [6, OBERGRIFF]), ...FAUST } }), 1.2, { aus: 2.0, texte: ["Arme nach außen öffnen", "Langsam zurück"], hilfsmittel: [{ art: "bandanker", von: "hand_l", anker: [0, 1.4, 0.9] }, { art: "bandanker", von: "hand_r", anker: [0, 1.4, 0.9] }] }),
  // Face Pull, Pull-Apart
  face_pull: facePull(STAND, kabel("haende", [0, 1.6, 0.7])),
  face_pull_sitzend: facePull(SITZ, [...kabel("haende", [0, 1.15, 0.75]), { art: "bank", unter: "gesaess", hoehe: 0.45 }]),
  face_pull_band: facePull(STAND, [{ art: "bandanker", von: "hand_l", anker: [0, 1.6, 0.8] }, { art: "bandanker", von: "hand_r", anker: [0, 1.6, 0.8] }]),
  band_pull_apart: pullApart(OBERGRIFF),
  band_pull_apart_untergriff: pullApart(UNTERGRIFF),
  band_pull_apart_diagonal: wdh(
    "vorn",
    mit(STAND, { g: { ...ARME_VOR, schulter_l: [120, -4, 0], schulter_r: [60, -4, 0] } }),
    mit(STAND, { g: { ...FAUST, ...B("ellbogen", [6, OBERGRIFF]), schulter_l: [150, 70, 0], schulter_r: [20, 70, 0] } }),
    1.2,
    { aus: 1.8, texte: ["Diagonal auseinanderziehen", "Zurück"], hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] },
  ),
  // Bauchlage
  prone_trap_raise: wdh("schraeg", mit(BRUST_LEHNE, { g: { ...B("schulter", [48, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), mit(BRUST_LEHNE, { g: { ...B("schulter", [160, 40, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), 1.4, { aus: 2.0, halten: 0.6, texte: ["Arme in ein Y anheben", "Langsam senken"], hilfsmittel: [...KH, BAUCH_LEHNE] }),
  ytw_schraegbank: folge(
    "schraeg",
    [
      [mit(BRUST_LEHNE, { g: { ...B("schulter", [160, 40, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), 1.4, "Y: Arme schräg nach vorn oben"],
      [mit(BRUST_LEHNE, { g: { ...B("schulter", [48, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), 1.2, "Senken"],
      [mit(BRUST_LEHNE, { g: { ...B("schulter", [48, 6, 0, 86]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), 1.4, "T: Arme zur Seite"],
      [mit(BRUST_LEHNE, { g: { ...B("schulter", [48, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), 1.2, "Senken"],
      [mit(BRUST_LEHNE, { g: { ...B("schulter", [30, 50, 50, 40]), ...B("ellbogen", [95, HAMMER]), ...FAUST } }), 1.4, "W: Ellbogen nach hinten unten"],
      [mit(BRUST_LEHNE, { g: { ...B("schulter", [48, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), 1.2, "Senken"],
    ],
    { hilfsmittel: [...KH, BAUCH_LEHNE] },
  ),
  ytw: folge(
    "schraeg",
    [
      [mit(BAUCHLAGE, { g: { ...B("schulter", [165, 35, 0]), ...B("ellbogen", [4, HAMMER]), hals: [-12, 0, 0] } }), 1.4, "Y: Arme schräg nach vorn anheben"],
      [mit(BAUCHLAGE, { g: { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [4, HAMMER]), hals: [-12, 0, 0] } }), 1.4, "T: Arme zur Seite anheben"],
      [mit(BAUCHLAGE, { g: { ...B("schulter", [10, 60, 60]), ...B("ellbogen", [95, HAMMER]), hals: [-12, 0, 0] } }), 1.4, "W: Ellbogen nach hinten unten ziehen"],
      [mit(BAUCHLAGE, { g: { ...B("schulter", [165, 35, 0]), ...B("ellbogen", [4, HAMMER]) } }), 1.2, "Locker ablegen"],
    ],
  ),
  schwimmer_bauchlage: folge(
    "schraeg",
    [
      [mit(BAUCHLAGE, { g: { ...B("schulter", [170, 20, 0]), ...B("ellbogen", [4, OBERGRIFF]), hals: [-10, 0, 0] } }), 1.0, "Arme vorn schweben"],
      [mit(BAUCHLAGE, { g: { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [4, OBERGRIFF]), hals: [-10, 0, 0] } }), 1.4, "Im Bogen zur Seite"],
      [mit(BAUCHLAGE, { g: { ...B("schulter", [-10, 12, 0]), ...B("ellbogen", [4, OBERGRIFF]), hals: [-10, 0, 0] } }), 1.4, "Zu den Hüften"],
      [mit(BAUCHLAGE, { g: { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [4, OBERGRIFF]), hals: [-10, 0, 0] } }), 1.4, "Zurück nach vorn"],
    ],
  ),
  // Rotatoren
  aussenrotation: rotation(true, [{ art: "bandanker", von: "hand_r", anker: [0.5, 1.0, 0.35] }]),
  aussenrotation_kabel: rotation(true, kabel("hand_r", [0.6, 1.0, 0.35])),
  innenrotation: rotation(false, [{ art: "bandanker", von: "hand_r", anker: [-0.6, 1.0, 0.35] }]),
  aussenrotation_90_90: wdh("vorn", mit(STAND, { g: { ...SHRUG_U, schulter_r: [0, 88, 0], ellbogen_r: [90, HAMMER] } }), mit(STAND, { g: { ...SHRUG_U, schulter_r: [0, 88, 85], ellbogen_r: [90, HAMMER] } }), 1.2, { aus: 1.8, seiten: true, texte: ["Unterarm nach oben drehen", "Langsam zurück"], hilfsmittel: [{ art: "bandanker", von: "hand_r", anker: [-0.2, 1.4, 0.9] }] }),
  cuban_press: folge(
    "vorn",
    [
      [mit(STAND, { g: { ...B("schulter", [10, 82, -50]), ...B("ellbogen", [110, OBERGRIFF]), ...FAUST } }), 1.2, "Ellbogen seitlich hoch"],
      [mit(STAND, { g: { ...B("schulter", [10, 85, 80]), ...B("ellbogen", [90, OBERGRIFF]), ...FAUST } }), 1.0, "Unterarme nach oben drehen"],
      [mit(STAND, { g: druckOben(OBERGRIFF) }), 1.0, "Über den Kopf drücken"],
      [mit(STAND, { g: { ...B("schulter", [10, 85, 80]), ...B("ellbogen", [90, OBERGRIFF]), ...FAUST } }), 1.2, "Zurück"],
      [mit(STAND, { g: { ...SHRUG_U, ...B("ellbogen", [10, OBERGRIFF]) } }), 1.4, "Ablassen"],
    ],
    { hilfsmittel: KH },
  ),
  // Schulterblatt
  schulterblatt_liegestuetz: wdh("seite", mit(PLANK, { g: B("schulterblatt", [0, -18]) }), mit(PLANK, { g: B("schulterblatt", [0, 22]) }), 1.2, { aus: 1.2, texte: ["Schulterblätter auseinander, Brust weg vom Boden", "Schulterblätter zusammen"] }),
  liegestuetz_plus: folge(
    "seite",
    [
      [mit(PLANK, { dreh: [88, 0, 0], g: { ...B("schulter", [30, 32, 0]), ...B("ellbogen", [98, 90]) } }), 1.6, "Brust zum Boden senken"],
      [PLANK, 1.2, "Hochdrücken"],
      [mit(PLANK, { g: B("schulterblatt", [0, 22]) }), 0.8, "Plus: noch weiter wegdrücken"],
      [PLANK, 0.6, "Zurück"],
    ],
  ),
  schulterblatt_liegestuetz_wand: wdh(
    "seite",
    mit(STAND, { dreh: [18, 0, 0], g: { ...B("fuss", [-18, 0]), ...B("schulter", [72, 10, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), ...B("schulterblatt", [0, -18]) } }),
    mit(STAND, { dreh: [18, 0, 0], g: { ...B("fuss", [-18, 0]), ...B("schulter", [72, 10, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), ...B("schulterblatt", [0, 22]) } }),
    1.2,
    { aus: 1.2, texte: ["Schulterblätter auseinander", "Schulterblätter zusammen"], hilfsmittel: [{ art: "wand", an: "hand_r", richtung: "vorn" }] },
  ),
  wall_slide: wdh(
    "vorn",
    mit(STAND, { g: { ...B("schulter", [10, 80, 80]), ...B("ellbogen", [95, HAMMER]) } }),
    mit(STAND, { g: { ...B("schulter", [10, 150, 80]), ...B("ellbogen", [25, HAMMER]) } }),
    1.6,
    { aus: 1.6, texte: ["Arme an der Wand nach oben schieben", "Zurück in die W-Position"], hilfsmittel: [{ art: "wand", an: "ruecken", richtung: "hinten" }] },
  ),
  serratus_punch_liegend: wdh("seite", banklage({ schulter_l: [20, 30, 0], ellbogen_l: [60, 0], schulter_r: [90, 8, 0], ellbogen_r: [4, HAMMER], schulterblatt_r: [0, -10] }), banklage({ schulter_l: [20, 30, 0], ellbogen_l: [60, 0], schulter_r: [90, 8, 0], ellbogen_r: [4, HAMMER], schulterblatt_r: [0, 28] }), 1.0, { aus: 1.4, seiten: true, texte: ["Hantel zur Decke schieben", "Zurück"], hilfsmittel: [...KH_R, FLACHBANK] }),
  serratus_punch_kabel: wdh("schraeg", mit(STAND, { g: { ...SHRUG_U, schulter_r: [92, 6, 0], ellbogen_r: [6, HAMMER], schulterblatt_r: [0, -10] } }), mit(STAND, { g: { ...SHRUG_U, schulter_r: [92, 6, 0], ellbogen_r: [6, HAMMER], schulterblatt_r: [0, 28] } }), 1.0, { aus: 1.4, seiten: true, texte: ["Arm nach vorn schieben", "Zurück"], hilfsmittel: kabel("hand_r", [-0.15, 1.4, -0.7]) }),
  // Trapez
  shrug_lh: shrug(STAND, LH),
  shrug_multipresse: shrug(STAND, LH),
  shrug_trapbar: shrug(STAND, LH),
  shrug_kh: shrug(STAND, KH, B("ellbogen", [6, HAMMER])),
  shrug_band: shrug(STAND, BAND),
  shrug_scheibe: shrug(STAND, [], B("finger", [70, 0])),
  shrug_kabel: shrug(STAND, [kabelstange(), ...kabel("haende", [0, 0.12, 0.4])]),
  shrug_kabel_in: shrug(STAND, [...kabel("hand_l", [0.9, 0.12, 0]), ...kabel("hand_r", [-0.9, 0.12, 0])], B("schulter", [2, 14, 0])),
  shrug_hinter_ruecken: shrug(STAND, LH, B("schulter", [-16, 8, 0])),
  shrug_ueberkopf: shrug(STAND, LH, { ...B("schulter", [174, 14, 0]) }),
  shrug_kh_schraeg: shrug(BRUST_LEHNE, [...KH, BAUCH_LEHNE], { ...B("schulter", [48, 8, 0]), ...B("ellbogen", [6, HAMMER]) }),
  shrug_explosiv: folge(
    "schraeg",
    [
      [mit(STAND, { dreh: [20, 0, 0], g: { ...SHRUG_U, ...B("schulter", [18, 8, 0]), ...B("huefte", [30, 6, 0]), ...B("knie", [25]), ...B("fuss", [12, 0]) } }), 0.8, "Leicht in die Knie, Stange über den Knien"],
      [mit(STAND, { g: { ...SHRUG_O, ...B("fuss", [-20, 0]) } }), 0.5, "Explosiv strecken, Schultern hoch"],
      [mit(STAND, { g: SHRUG_U }), 1.2, "Kontrolliert zurück"],
    ],
    { hilfsmittel: LH },
  ),
  high_pull_lh: folge(
    "schraeg",
    [
      [mit(STAND, { dreh: [30, 0, 0], g: { ...SHRUG_U, ...B("schulter", [28, 8, 0]), ...B("huefte", [42, 6, 0]), ...B("knie", [30]), ...B("fuss", [14, 0]) } }), 0.9, "Stange vor den Oberschenkeln, leicht gebeugt"],
      [mit(STAND, { g: { ...B("schulter", [20, 84, -50]), ...B("ellbogen", [110, OBERGRIFF]), ...FAUST, ...B("fuss", [-18, 0]) } }), 0.5, "Explosiv strecken, Ellbogen hoch"],
      [mit(STAND, { g: SHRUG_U }), 1.3, "Zurück vor die Oberschenkel"],
    ],
    { hilfsmittel: LH },
  ),
}
