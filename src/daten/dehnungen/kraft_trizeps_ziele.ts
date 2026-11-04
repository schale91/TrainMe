// Trizeps mit Zielpunkten. Der Oberarm bleibt ruhig (an der Seite, nah am Kopf, über der Brust leicht zum Kopf
// geneigt oder parallel zum Oberkörper), nur der Unterarm bewegt sich bis zur vollen Streckung im Ellbogen.
// Geprüft mit werkzeuge/messen.html gegen werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, wdh } from "./basis"
import { HAMMER, KH, KH_R, OBERGRIFF, SZ, UNTERGRIFF } from "./kraftbasis"
import { koerper } from "./kraft_heben_arme"
import { FLACH, dipPaar, liegen, stuetzPaar } from "./kraft_druecken"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, rad } from "./ziele"

type P3 = [number, number, number]
const plus = (a: P3, b: P3, s = 1): P3 => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s]
const norm = (a: P3): P3 => {
  const l = Math.hypot(...a)
  return [a[0] / l, a[1] / l, a[2] / l]
}
/** Richtung im Rahmen der Schultern aus Winkel in der Ebene y-z (0 = nach unten, 90 = nach vorn, 180 = nach oben) */
const yz = (w: number, x = 0): P3 => norm([x, -Math.cos(rad(w)), Math.sin(rad(w))])
/** Arm aus Oberarmrichtung und Unterarmrichtung (beide im Rahmen der Schultern) */
const arm = (ziele: Ziele, ober: P3, unter: P3, seiten: (1 | -1)[] = [1, -1], ellX = 0.03, handX = 0) => {
  for (const sx of seiten) {
    const n = sx === 1 ? "l" : "r"
    const e = plus([SCHULTER_X + ellX, 0, 0], ober, OBERARM)
    const h = plus(plus(e, unter, UNTERARM), [handX, 0, 0])
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  return ziele
}

// ---------------------------------------------------------------- Trizepsdrücken am Kabel
// Ellbogen an den Seiten, Oberkörper leicht vorgeneigt; oben ist der Unterarm etwa waagerecht oder etwas höher,
// unten ist der Arm ganz gestreckt.
const OBER_SEITE = yz(6)
const drueck = (unterarm: number, dreh: number, einarm = false, handX = 0): Haltung => {
  const ziele = arm({}, OBER_SEITE, yz(unterarm), einarm ? [-1] : [1, -1], 0.03, handX)
  const w: Winkel = { ...B("schulter", [6, 8, 0]), ...B("ellbogen", [unterarm - 6, dreh]) }
  return koerper("stand", 8, einarm ? { schulter_r: w.schulter_r, ellbogen_r: w.ellbogen_r, schulter_l: [30, 20, 0], ellbogen_l: [60, 0] } : w, einarm ? { ...ziele, hand_l: { pos: [0.3, 1.25, 0.32] } } : ziele)
}
const KABEL_OBEN = (z = 0.32): Hilfsmittel => ({ art: "kabel", von: "haende", rolle: [0, 2.0, z] })
const DRUECK_TEXTE: [string, string] = ["Nach unten drücken, bis die Arme ganz gestreckt sind, nur die Unterarme bewegen sich", "Langsam zurück, bis die Unterarme etwa waagerecht sind"]
const pressdown = (dreh: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}, handOben = 0, handUnten = 0): Dehnung =>
  wdh("seite", drueck(100, dreh, false, handOben), drueck(4, dreh, false, handUnten), 1.1, { aus: 2.0, halten: 1.0, texte: DRUECK_TEXTE, hilfsmittel, ...extra })

// ---------------------------------------------------------------- Über Kopf
// Oberarme nah am Kopf und nach oben, oben sind die Arme gestreckt, unten ist die Last hinter dem Kopf.
const OBER_OBEN = yz(175)
const ueberkopf = (gebeugt: boolean, handX: number, dreh: number, basis: "sitz" | "stand" = "sitz", einarm = false, vor = -4): Haltung => {
  // gebeugt zeigt der Unterarm hinter dem Kopf nach unten
  const unter = gebeugt ? yz(einarm ? -38 : -48, 0) : yz(einarm ? 170 : 178)
  const ziele = arm({}, OBER_OBEN, unter, einarm ? [-1] : [1, -1], -0.015, handX)
  // einarmig: die freie Hand stützt den Oberarm am Ellbogen
  if (einarm) {
    const e = ziele.ellbogen_r!.pos
    ziele.hand_l = { pos: [e[0] + 0.05, e[1] - 0.02, e[2] + 0.06], bezug: "schultern" }
  }
  const w: Winkel = { ...B("schulter", [175, 6, 0]), ...B("ellbogen", [gebeugt ? 135 : 4, dreh]) }
  const arme: Winkel = einarm ? { schulter_r: w.schulter_r, ellbogen_r: w.ellbogen_r, schulter_l: [150, -10, 0], ellbogen_l: [120, 0] } : w
  return koerper(basis, vor, arme, ziele)
}
const UEBER_TEXTE: [string, string] = ["Hinter dem Kopf absenken, nur die Ellbogen beugen", "Wieder nach oben strecken, Ellbogen bleiben eng"]
/** Lehne bis unter die Schultern: hinter dem Kopf bleibt Platz für die Last */
const LEHNE: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45, lang: 0.48 }
/** am Kabel mit dem Rücken zum Turm: Oberarme nach vorn oben, die Hände hinter dem Kopf, gestreckt nach vorn oben */
const kabelUeber = (gebeugt: boolean, einarm: boolean): Haltung => {
  const ober = yz(140)
  const ziele = arm({}, ober, gebeugt ? yz(-88, 0) : yz(146), einarm ? [-1] : [1, -1], -0.01, einarm ? 0 : -0.06)
  const w: Winkel = { ...B("schulter", [140, 6, 0]), ...B("ellbogen", [gebeugt ? 120 : 6, HAMMER]) }
  return koerper("stand", 12, einarm ? { schulter_r: w.schulter_r, ellbogen_r: w.ellbogen_r, schulter_l: [10, 10, 0], ellbogen_l: [40, 0] } : w, ziele)
}

// ---------------------------------------------------------------- Liegend (Skull Crusher und Verwandte)
// Rückenlage auf der Flachbank: im Rahmen der Schultern zeigt z nach oben (zur Decke), y zum Kopf.
const liegend = (ober: P3, unter: P3, dreh: number, handX: number, einarm = false, ziele0: Ziele = {}): Haltung => {
  const ziele = arm({ ...ziele0 }, ober, unter, einarm ? [-1] : [1, -1], 0.01, handX)
  return liegen(FLACH, ziele, { ...B("schulter", [100, 6, 0]), ...B("ellbogen", [90, dreh]) })
}
/** Oberarm leicht nach hinten zum Kopf geneigt: im Rahmen der Schultern etwa 15 Grad vor der Senkrechten zum Kopf hin */
const SKULL_OBER = norm([0, Math.sin(rad(15)), Math.cos(rad(15))])
const skullOben = (dreh: number, handX: number) => liegend(SKULL_OBER, SKULL_OBER, dreh, handX)
const skullUnten = (dreh: number, handX: number, tiefer = 0) => liegend(SKULL_OBER, norm([0, 0.9, -0.5 - tiefer]), dreh, handX)

// ---------------------------------------------------------------- Kickbacks (vorgebeugt, Oberarm parallel zum Oberkörper)
const kickback = (gestreckt: boolean, kabel: boolean): Haltung => {
  const kipp = 78
  // Oberarm parallel zum Rumpf nach hinten (im Rahmen: nach unten = zur Hüfte), Unterarm hängt senkrecht oder zeigt gestreckt nach hinten
  const ober = yz(kabel ? -8 : 0)
  const unterHaengt = yz(kipp)
  const ziele = arm({}, ober, gestreckt ? ober : unterHaengt, [-1], 0.02)
  return koerper("vorgebeugt", kipp, { schulter_r: [-4, 6, 0], ellbogen_r: [gestreckt ? 4 : 90, HAMMER], schulter_l: [kipp, 10, 0], ellbogen_l: [20, 90] }, { ...ziele, hand_l: { pos: [0.11, 0.65, -0.235] } })
}

const DIP_T = dipPaar(6, 0.2, 0.05)
/** Bankdips: Hände neben der Hüfte auf der Bankkante, das Gesäß vor der Bank, Füße vor dir, Knie gebeugt */
const BANK_KANTE = 0.45
const bankdip = (unten: boolean): Haltung => {
  const ziele: Ziele = {
    hand_l: { pos: [0.19, BANK_KANTE + 0.03, -0.05] },
    hand_r: { pos: [-0.19, BANK_KANTE + 0.03, -0.05] },
    ferse_l: { pos: [0.12, 0.022, 0.58] },
    fuss_l: { pos: [0.13, 0.034, 0.7] },
    ferse_r: { pos: [-0.12, 0.022, 0.58] },
    fuss_r: { pos: [-0.13, 0.034, 0.7] },
  }
  // unten: Unterarm senkrecht über der Hand, Oberarm waagerecht nach vorn zur Schulter; das Becken bleibt vor der Bankkante
  if (unten) for (const sx of [1, -1] as const) ziele[sx === 1 ? "ellbogen_l" : "ellbogen_r"] = { pos: [sx * 0.2, BANK_KANTE + 0.29, -0.06] }
  return H({ ...B("huefte", [unten ? 80 : 70, 6, 0]), ...B("knie", [unten ? 75 : 80]), ...B("fuss", [5, 0]), ...B("schulter", [unten ? -70 : -25, 10, 0]), ...B("ellbogen", [unten ? 95 : 4, 90]), ...B("hand", [80, 0]) }, [0, 0, 0], { pos: [0, unten ? 0.37 : 0.6, unten ? 0.17 : 0.08], boden: false, beckenFrei: !unten, ziele })
}
/** Sphinx: vom Unterarmstütz in den hohen Stütz, die Hände flach etwas vor den Schultern */
const SPHINX = stuetzPaar({ hand: 0.15, handVor: 0.12 })
const sphinxUnten = (): Haltung => {
  const o = SPHINX.o
  const ziele: Ziele = { ...o.ziele }
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const h = o.ziele![`hand_${n}`]!.pos
    ziele[`ellbogen_${n}`] = { pos: [sx * 0.15, 0.12, h[2] - UNTERARM + 0.03] }
  }
  return { ...o, g: { ...o.g, ...B("ellbogen", [120, 90]), ...B("schulter", [80, 10, 0]) }, ziele, beckenFrei: true, drehFrei: true }
}

export const KRAFT_TRIZEPS_ZIELE: Record<string, Dehnung> = {
  trizeps_kabel: pressdown(OBERGRIFF, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }, KABEL_OBEN()]),
  trizeps_kabel_untergriff: pressdown(UNTERGRIFF, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }, KABEL_OBEN()], { texte: ["Im Untergriff nach unten drücken, Handgelenke gerade", "Langsam zurückführen"] }),
  trizeps_kabel_seil: pressdown(HAMMER, [{ art: "kabel", von: "hand_l", rolle: [0, 2.0, 0.32] }, { art: "kabel", von: "hand_r", rolle: [0, 2.0, 0.32] }], { texte: ["Nach unten drücken und die Seilenden unten nach außen ziehen", "Langsam zurück, bis die Unterarme etwa waagerecht sind"] }, -0.03, 0.05),
  trizeps_kabel_einarmig: wdh("seite", drueck(95, HAMMER, true), drueck(4, HAMMER, true), 1.1, { aus: 2.0, halten: 0.6, seiten: true, texte: ["Nach unten drücken, bis der Arm ganz gestreckt ist", "Langsam zurück, bis der Unterarm etwa waagerecht ist"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.15, 2.0, 0.32] }] }),
  trizeps_pressdown_21er: (() => {
    const o = drueck(95, OBERGRIFF), m = drueck(45, OBERGRIFF), u = drueck(4, OBERGRIFF)
    return folge("seite", [[u, 0.9, "Sieben Mal von gestreckt bis zur Mitte"], [m, 0.9], [o, 0.9, "Sieben Mal von oben bis zur Mitte"], [m, 0.9], [o, 1.0, "Sieben volle Wiederholungen"], [u, 1.2]], { hilfsmittel: [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }, KABEL_OBEN()] })
  })(),
  trizeps_band: pressdown(HAMMER, [{ art: "bandanker", von: "hand_l", anker: [0.08, 2.0, 0.3] }, { art: "bandanker", von: "hand_r", anker: [-0.08, 2.0, 0.3] }], { texte: ["Nach unten drücken, bis die Arme ganz gestreckt sind", "Langsam zurückführen, die Oberarme bleiben ruhig"] }),
  trizeps_ueberkopf: wdh("seite", ueberkopf(false, -0.09, HAMMER), ueberkopf(true, -0.09, HAMMER), 1.5, { aus: 1.5, texte: UEBER_TEXTE, hilfsmittel: [{ art: "hantel", an: "haende" }, LEHNE] }),
  trizeps_ueberkopf_sz: wdh("seite", ueberkopf(false, -0.06, OBERGRIFF), ueberkopf(true, -0.06, OBERGRIFF), 1.5, { aus: 1.5, texte: ["Hinter dem Kopf absenken, bis die Dehnung deutlich ist", "Ganz nach oben strecken, Ellbogen etwa schulterbreit"], hilfsmittel: [...SZ, LEHNE] }),
  trizeps_ueberkopf_kh_einarmig: wdh("seite", ueberkopf(false, 0.0, HAMMER, "sitz", true), ueberkopf(true, 0.1, HAMMER, "sitz", true), 1.5, { aus: 1.5, seiten: true, texte: ["Hinter dem Kopf absenken", "Wieder nach oben strecken, der Oberarm bleibt ruhig"], hilfsmittel: [...KH_R, LEHNE] }),
  trizeps_ueberkopf_seil: wdh("seite", kabelUeber(true, false), kabelUeber(false, false), 1.2, { aus: 2.0, texte: ["Arme nach vorn oben strecken", "Langsam zurück hinter den Kopf in die Dehnung"], hilfsmittel: [{ art: "kabel", von: "hand_l", rolle: [0, 1.35, -0.7] }, { art: "kabel", von: "hand_r", rolle: [0, 1.35, -0.7] }] }),
  trizeps_ueberkopf_kabel_einarmig: wdh("seite", kabelUeber(true, true), kabelUeber(false, true), 1.2, { aus: 2.0, seiten: true, texte: ["Arm nach oben vorn strecken", "Langsam zurück hinter den Kopf"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.12, 1.1, -0.7] }] }),
  trizeps_ueberkopf_band: wdh("seite", ueberkopf(true, -0.02, HAMMER, "stand"), ueberkopf(false, -0.02, HAMMER, "stand"), 1.2, { aus: 2.0, texte: ["Arme nach oben strecken", "Langsam zurück hinter den Kopf, Oberarme nah am Kopf"], hilfsmittel: [{ art: "band", von: "hand_l", bis: "ferse_r" }, { art: "band", von: "hand_r", bis: "ferse_r" }] }),
  skull_crusher_sz: wdh("seite", skullOben(OBERGRIFF, -0.04), skullUnten(OBERGRIFF, -0.04), 1.6, { aus: 1.4, texte: ["Nur die Ellbogen beugen, bis knapp hinter den Kopf", "Wieder strecken, die Neigung der Oberarme bleibt"], hilfsmittel: [...SZ, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  skull_crusher_exzentrisch: wdh("seite", skullOben(OBERGRIFF, -0.04), skullUnten(OBERGRIFF, -0.04), 4.5, { aus: 1.4, texte: ["In vier bis fünf Sekunden hinter den Kopf absenken", "In normalem Tempo wieder strecken"], hilfsmittel: [...SZ, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  skull_crusher_kh: wdh("seite", skullOben(HAMMER, 0.0), skullUnten(HAMMER, 0.03), 1.6, { aus: 1.4, texte: ["Hanteln neben den Kopf absenken, nur die Ellbogen beugen", "Wieder strecken, bis die Arme fast gestreckt sind"], hilfsmittel: [...KH, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  skull_crusher_kabel: wdh("seite", liegend(norm([0, 0.45, 0.9]), norm([0, 0.45, 0.9]), OBERGRIFF, -0.04), liegend(norm([0, 0.45, 0.9]), norm([0, 0.75, -0.65]), OBERGRIFF, -0.04), 1.5, { aus: 1.5, texte: ["Ellbogen beugen und den Griff hinter den Kopf führen", "Arme strecken, das Kabel zieht gleichmäßig nach hinten"], hilfsmittel: [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }, { art: "kabel", von: "haende", rolle: [0, 0.12, -1.3] }, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  rolling_extension: wdh("seite", liegend(yz(90), yz(90), HAMMER, 0.0), liegend(norm([0, 0.55, 0.83]), norm([0, 0.7, -0.7]), HAMMER, 0.04), 1.6, { aus: 1.6, texte: ["Ellbogen beugen, Hanteln neben den Kopf, Oberarme neigen sich nach hinten", "Oberarme zurückrollen und strecken, bis die Hanteln über der Brust sind"], hilfsmittel: [...KH, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  jm_press: wdh("seite", liegend(yz(90), yz(90), OBERGRIFF, -0.03), liegend(norm([0, -0.4, 0.92]), norm([0, 0.9, -0.43]), OBERGRIFF, -0.03), 1.5, { aus: 1.4, texte: ["Stange Richtung Kinn senken, die Ellbogen wandern nach vorn zu den Füßen", "Auf dem gleichen Weg nach oben drücken"], hilfsmittel: [{ art: "langhantel", von: "hand_l", bis: "hand_r" }, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  trizeps_kreuz_kh_liegend: wdh("seite", liegend(yz(90), yz(90), HAMMER, 0, true), liegend(yz(90), norm([-0.85, 0.1, -0.5]), HAMMER, 0, true), 1.4, { aus: 1.4, seiten: true, texte: ["Quer vor dem Gesicht zur Gegenschulter senken, Oberarm bleibt senkrecht", "Wieder ganz nach oben strecken"], hilfsmittel: [...KH_R, { art: "bank", unter: "bws", hoehe: 0.45 }] }),
  trizeps_kickback_kh: wdh("seite", kickback(false, false), kickback(true, false), 1.0, { aus: 1.8, halten: 1.0, seiten: true, texte: ["Ellbogen strecken, bis der Arm gerade nach hinten zeigt", "Unterarm langsam absenken, der Oberarm bleibt parallel zum Oberkörper"], hilfsmittel: KH_R }),
  trizeps_kickback_kabel: wdh("seite", kickback(false, true), kickback(true, true), 1.0, { aus: 1.8, halten: 0.8, seiten: true, texte: ["Ellbogen ganz strecken, Arm zeigt gerade nach hinten", "Unterarm langsam zurückführen"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.15, 0.45, 0.8] }] }),
  dips_trizeps: wdh("seite", DIP_T.o, DIP_T.u, 2.0, { aus: 1.3, texte: ["Absenken, Ellbogen nach hinten nah am Körper, bis die Oberarme waagerecht sind", "Hochdrücken, bis die Ellbogen gestreckt sind"], hilfsmittel: [DIP_T.holme] }),
  bankdips: wdh("seite", bankdip(false), bankdip(true), 2.0, { aus: 1.3, texte: ["Absenken, bis die Oberarme etwa waagerecht sind, Rücken dicht an der Bank", "Über das Strecken der Arme hochdrücken"], hilfsmittel: [{ art: "bank", unter: "hand_l", hoehe: BANK_KANTE, quer: true, versatz: [-0.19, -0.12], griff: true }] }),
  sphinx_liegestuetz: wdh("seite", sphinxUnten(), SPHINX.o, 1.4, { aus: 1.6, texte: ["Handflächen in den Boden drücken und die Ellbogen strecken", "Unterarme langsam wieder auf den Boden absenken"] }),
}
