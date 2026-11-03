// Trizeps mit der Dehnfigur: Drücken am oberen Kabel, Strecken über Kopf, liegend auf der Bank, Kickbacks, Dips.

import type { Dehnung, Haltung, Hilfsmittel, V3, Winkel } from "../../logik/dehnbewegung"
import { B, H, PLANK, STAND, STUHLSITZ, folge, mit, wdh } from "./basis"
import { FAUST, FLACHBANK, HAMMER, KH, KH_R, OBERGRIFF, ROLLE_OBEN, SZ, UNTERGRIFF, banklage, kabel, kabelstange } from "./kraftbasis"


// ---------------------------------------------------------------- Drücken am oberen Kabel
/** Nah am Turm, Oberkörper leicht vor, Ellbogen an den Seiten; nur die Unterarme bewegen sich */
const druckOben = (dreh: number, w: Winkel = {}): Haltung => mit(STAND, { dreh: [10, 0, 0], g: { ...B("huefte", [10, 6, 0]), ...B("knie", [8]), ...B("schulter", [-4, 8, 0]), ...B("ellbogen", [100, dreh]), ...FAUST, ...w } })
const druckUnten = (dreh: number, w: Winkel = {}): Haltung => mit(druckOben(dreh, w), { g: { ...B("schulter", [-8, 8, 0]), ...B("ellbogen", [6, dreh]), ...w } })
const pushdown = (dreh: number, griff: Hilfsmittel[], amKabel = true): Dehnung =>
  wdh("schraeg", druckOben(dreh), druckUnten(dreh), 1.2, { aus: 2.2, texte: ["Nach unten strecken", "Langsam bis 90 Grad zurück"], hilfsmittel: amKabel ? [...griff, ...kabel("haende", ROLLE_OBEN)] : griff })

/** Einarmig: rechter Arm drückt, der linke hängt locker */
const EIN_O: Haltung = mit(druckOben(OBERGRIFF), { g: { schulter_l: [2, 7, 0], ellbogen_l: [10, 0] } })
const EIN_U: Haltung = mit(EIN_O, { g: { schulter_r: [-8, 8, 0], ellbogen_r: [6, OBERGRIFF] } })

function pushdown21(): Dehnung {
  const o = druckOben(OBERGRIFF), u = druckUnten(OBERGRIFF)
  const m = mit(o, { g: B("ellbogen", [50, OBERGRIFF]) })
  return folge(
    "schraeg",
    [
      [m, 1.0, "7 × untere Hälfte: von 90 Grad bis zur Mitte"],
      [o, 1.0, "7 × untere Hälfte: zurück"],
      [u, 1.2, "7 × ganz strecken"],
      [m, 1.0, "7 × obere Hälfte: zurück bis zur Mitte"],
      [u, 1.0, "7 × obere Hälfte: strecken"],
      [o, 2.0, "Langsam zurück bis 90 Grad"],
    ],
    { hilfsmittel: [kabelstange(), ...kabel("haende", ROLLE_OBEN)] },
  )
}

// ---------------------------------------------------------------- Über Kopf
/** Arme über dem Kopf, Oberarme nah am Kopf; unten liegt die Last hinter dem Nacken */
const ueberkopf = (unten: number, w: Winkel = {}, basis: Haltung = STAND): [Haltung, Haltung] => [
  mit(basis, { g: { ...B("schulter", [165, 6, 0]), ...B("ellbogen", [unten, HAMMER]), ...FAUST, hals: [-5, 0, 0], ...w } }),
  mit(basis, { g: { ...B("schulter", [170, 6, 0]), ...B("ellbogen", [8, HAMMER]), ...FAUST, hals: [-5, 0, 0], ...w } }),
]
const SITZ_LEHNE: Haltung = mit(STUHLSITZ, { g: { ...B("ellbogen", [0, 0]) } })
const LEHNE: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }

/** Am Seil mit dem Rücken zum Turm: Schrittstellung, Oberkörper vorgeneigt, Rolle auf Brusthöhe hinter dem Körper */
const SEIL_STAND: Haltung = mit(STAND, { dreh: [28, 0, 0], g: { huefte_l: [52, 6, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [14, 6, 0], knie_r: [8], fuss_r: [-10, 0], lws: [4, 0, 0] } })
const ROLLE_HINTEN: V3 = [0, 1.35, -0.75]

/** Einarmig über Kopf mit Kurzhantel: der freie Arm hängt locker */
const EINARM_KOPF: Winkel = { schulter_l: [2, 7, 0], ellbogen_l: [10, 0] }

// ---------------------------------------------------------------- Liegend auf der Flachbank
/** Skull Crusher: Arme leicht Richtung Kopf geneigt, die Last sinkt zur Stirn oder knapp dahinter */
const skull = (dreh: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", banklage({ ...B("schulter", [104, 6, 0]), ...B("ellbogen", [6, dreh]) }), banklage({ ...B("schulter", [112, 6, 0]), ...B("ellbogen", [115, dreh]) }), 2.0, {
    aus: 1.3,
    texte: ["Zur Stirn absenken", "Arme strecken"],
    hilfsmittel: [...hilfsmittel, FLACHBANK],
    ...extra,
  })

// ---------------------------------------------------------------- Kickback
/** Schrittstellung, Hand auf dem vorderen Oberschenkel, Oberkörper fast waagerecht; der Oberarm bleibt am Körper */
const KICK: Winkel = { huefte_l: [100, 6, 0], knie_l: [45], fuss_l: [15, 0], huefte_r: [62, 6, 0], knie_r: [10], fuss_r: [0, 0], schulter_l: [62, 10, 0], ellbogen_l: [40, 20], hals: [-25, 0, 0], ...FAUST }
const kickback = (hilfsmittel: Hilfsmittel[]): Dehnung =>
  wdh("seite", H({ ...KICK, schulter_r: [-20, 6, 0], ellbogen_r: [92, HAMMER] }, [68, 0, 0]), H({ ...KICK, schulter_r: [-24, 6, 0], ellbogen_r: [4, HAMMER] }, [68, 0, 0]), 1.1, {
    aus: 1.8,
    halten: 0.5,
    seiten: true,
    texte: ["Unterarm nach hinten strecken", "Langsam zurück"],
    hilfsmittel,
  })

// ---------------------------------------------------------------- Dips
/** Dips am Barren: aufrecht, Beine hängen leicht gebeugt; unten Oberarme etwa waagerecht */
const DIP_BEINE: Winkel = { ...B("huefte", [10, 4, 0]), ...B("knie", [55]), ...B("fuss", [-20, 0]) }
const DIP_OBEN: Haltung = H({ ...DIP_BEINE, ...B("schulter", [-8, 8, 0]), ...B("ellbogen", [4, 0]), ...B("hand", [80, 0]) }, [4, 0, 0], { pos: [0, 1.2, 0], boden: false })
const DIP_UNTEN: Haltung = H({ ...DIP_BEINE, ...B("schulter", [-62, 8, 0]), ...B("ellbogen", [95, 0]), ...B("hand", [80, 0]) }, [10, 0, 0], { pos: [0, 0.98, 0.04], boden: false })

/** Bankdips: Hände hinter dir auf der Box, Füße vorn, Gesäß sinkt senkrecht ab */
const BANKDIP_HAND: Winkel = { ...B("fuss", [8, 0]), ...B("hand", [80, 0]) }
// Oben Oberschenkel leicht abwärts; unten liegt die Hüfte tiefer als die Knie, die Unterschenkel bleiben senkrecht
const BANKDIP_OBEN: Haltung = H({ ...BANKDIP_HAND, ...B("huefte", [75, 6, 0]), ...B("knie", [75]), ...B("schulter", [-30, 8, 0]), ...B("ellbogen", [4, 0]) }, [0, 0, 0], { pos: [0, 0.52, 0], boden: false })
const BANKDIP_UNTEN: Haltung = H({ ...BANKDIP_HAND, ...B("huefte", [118, 6, 0]), ...B("knie", [110]), ...B("schulter", [-88, 8, 0]), ...B("ellbogen", [92, 0]) }, [8, 0, 0], { pos: [0, 0.29, 0], boden: false })

export const KRAFT_TRIZEPS: Record<string, Dehnung> = {
  // Oberes Kabel
  trizeps_kabel: pushdown(OBERGRIFF, [kabelstange()]),
  trizeps_kabel_untergriff: pushdown(UNTERGRIFF, [kabelstange()]),
  trizeps_kabel_seil: wdh("schraeg", druckOben(HAMMER), druckUnten(HAMMER, B("schulter", [-8, 16, 0])), 1.2, { aus: 2.2, texte: ["Nach unten strecken, Seil auseinander", "Langsam bis 90 Grad zurück"], hilfsmittel: kabel("haende", ROLLE_OBEN) }),
  trizeps_kabel_einarmig: wdh("schraeg", EIN_O, EIN_U, 1.2, { aus: 2.2, seiten: true, texte: ["Nach unten strecken", "Langsam zurück"], hilfsmittel: kabel("hand_r", [0.18, 2.1, 0.42]) }),
  trizeps_pressdown_21er: pushdown21(),
  trizeps_band: pushdown(OBERGRIFF, [{ art: "bandanker", von: "hand_l", anker: [-0.1, 2.0, 0.4] }, { art: "bandanker", von: "hand_r", anker: [0.1, 2.0, 0.4] }], false),
  // Über Kopf
  trizeps_ueberkopf: (() => {
    const [u, o] = ueberkopf(140, { schulter_l: [165, -2, 0], schulter_r: [165, -2, 0] })
    return wdh("schraeg", u, mit(o, { g: { schulter_l: [170, -2, 0], schulter_r: [170, -2, 0] } }), 1.2, { aus: 2.4, texte: ["Nach oben strecken", "Hinter den Kopf absenken"], hilfsmittel: [{ art: "hantel", an: "haende" }] })
  })(),
  trizeps_ueberkopf_sz: (() => {
    const [u, o] = ueberkopf(140, {}, SITZ_LEHNE)
    return wdh("schraeg", u, o, 1.2, { aus: 2.4, texte: ["Nach oben strecken", "Hinter den Kopf absenken"], hilfsmittel: [...SZ, LEHNE] })
  })(),
  trizeps_ueberkopf_kh_einarmig: wdh(
    "schraeg",
    mit(STAND, { g: { ...EINARM_KOPF, schulter_r: [168, 4, 0], ellbogen_r: [140, HAMMER], ...FAUST } }),
    mit(STAND, { g: { ...EINARM_KOPF, schulter_r: [172, 4, 0], ellbogen_r: [8, HAMMER], ...FAUST } }),
    1.2,
    { aus: 2.4, seiten: true, texte: ["Nach oben strecken", "Hinter den Kopf absenken"], hilfsmittel: KH_R },
  ),
  trizeps_ueberkopf_seil: wdh(
    "seite",
    mit(SEIL_STAND, { g: { ...B("schulter", [150, 10, 0]), ...B("ellbogen", [125, HAMMER]), ...FAUST } }),
    mit(SEIL_STAND, { g: { ...B("schulter", [158, 10, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }),
    1.2,
    { aus: 2.2, texte: ["Nach vorn oben strecken", "Langsam hinter den Kopf"], hilfsmittel: kabel("haende", ROLLE_HINTEN) },
  ),
  trizeps_ueberkopf_kabel_einarmig: wdh(
    "seite",
    mit(SEIL_STAND, { g: { schulter_l: [10, 8, 0], ellbogen_l: [15, 0], schulter_r: [150, 6, 0], ellbogen_r: [125, HAMMER], ...FAUST } }),
    mit(SEIL_STAND, { g: { schulter_l: [10, 8, 0], ellbogen_l: [15, 0], schulter_r: [158, 6, 0], ellbogen_r: [6, HAMMER], ...FAUST } }),
    1.2,
    { aus: 2.2, seiten: true, texte: ["Nach vorn oben strecken", "Langsam hinter den Kopf"], hilfsmittel: kabel("hand_r", [0.15, 1.1, -0.75]) },
  ),
  trizeps_ueberkopf_band: (() => {
    const basis = mit(STAND, { g: { huefte_l: [22, 6, 0], knie_l: [10], huefte_r: [-14, 6, 0], fuss_r: [-6, 0] } })
    const [u, o] = ueberkopf(140, {}, basis)
    return wdh("seite", u, o, 1.2, { aus: 2.2, texte: ["Nach oben strecken", "Hinter den Kopf absenken"], hilfsmittel: [{ art: "band", von: "fuss_r", bis: "haende" }] })
  })(),
  // Liegend
  skull_crusher_sz: skull(OBERGRIFF, SZ),
  skull_crusher_exzentrisch: skull(OBERGRIFF, SZ, { ein: 4.5, texte: ["Sehr langsam zur Stirn (4 bis 5 s)", "Arme strecken"] }),
  skull_crusher_kh: skull(HAMMER, KH),
  skull_crusher_kabel: skull(OBERGRIFF, [kabelstange(), ...kabel("haende", [0, 0.15, -1.45])]),
  rolling_extension: wdh(
    "seite",
    banklage({ ...B("schulter", [90, 8, 0]), ...B("ellbogen", [6, HAMMER]) }),
    banklage({ ...B("schulter", [140, 8, 0]), ...B("ellbogen", [118, HAMMER]) }),
    2.0,
    { aus: 1.4, texte: ["Hanteln neben den Kopf senken", "Zurückrollen und strecken"], hilfsmittel: [...KH, FLACHBANK] },
  ),
  jm_press: wdh(
    "seite",
    banklage({ ...B("schulter", [90, 6, 0]), ...B("ellbogen", [6, OBERGRIFF]) }),
    banklage({ ...B("schulter", [58, 6, 0]), ...B("ellbogen", [105, OBERGRIFF]) }),
    1.8,
    { aus: 1.2, texte: ["Stange Richtung Kinn senken, Ellbogen zu den Füßen", "Nach oben drücken"], hilfsmittel: [...SZ, FLACHBANK] },
  ),
  trizeps_kreuz_kh_liegend: wdh(
    "seite",
    banklage({ schulter_l: [70, -10, 0], ellbogen_l: [60, 0], schulter_r: [92, -6, 0], ellbogen_r: [6, OBERGRIFF] }),
    banklage({ schulter_l: [70, -10, 0], ellbogen_l: [60, 0], schulter_r: [92, -16, 0], ellbogen_r: [110, OBERGRIFF] }),
    1.8,
    { aus: 1.2, seiten: true, texte: ["Quer vor dem Gesicht absenken", "Strecken"], hilfsmittel: [...KH_R, FLACHBANK] },
  ),
  // Kickbacks
  trizeps_kickback_kh: kickback(KH_R),
  trizeps_kickback_kabel: kickback(kabel("hand_r", [0.2, 0.25, 0.85])),
  // Dips
  dips_trizeps: wdh("seite", DIP_OBEN, DIP_UNTEN, 2.0, { aus: 1.3, texte: ["Langsam absenken", "Hochdrücken"], hilfsmittel: [{ art: "barren", an: "hand_r" }] }),
  bankdips: wdh("seite", BANKDIP_OBEN, BANKDIP_UNTEN, 2.0, { aus: 1.3, texte: ["Gesäß senkrecht absenken", "Hochdrücken"], hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.4, versatz: [0, -0.18] }] }),
  // Körpergewicht
  sphinx_liegestuetz: wdh(
    "seite",
    mit(PLANK, { dreh: [80, 0, 0], g: { ...B("schulter", [70, 4, 0]), ...B("ellbogen", [100, 90]) } }),
    PLANK,
    1.6,
    { aus: 1.6, texte: ["Über die Hände hochdrücken", "Zurück auf die Unterarme"] },
  ),
}
