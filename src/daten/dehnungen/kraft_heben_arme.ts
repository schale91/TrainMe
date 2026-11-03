// Seitheben, Frontheben, Y-Heben und aufrechtes Rudern mit Zielpunkten. Der Arm wird über zwei Winkel im Rahmen der
// Schultern beschrieben: Hebung (0 = hängt am Rumpf, 90 = waagerecht, 180 = über dem Kopf) und Ebene (0 = genau zur
// Seite, 90 = genau nach vorn). Der Ellbogen ist leicht gebeugt, der Unterarm hängt etwas tiefer als der Oberarm,
// so sind die Hände oben auf Ellbogenhöhe oder knapp darunter. Geprüft mit werkzeuge/messen.html gegen soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, BAUCHLAGE, H, folge, halte, mit, wdh } from "./basis"
import { BAND, BAUCH_LEHNE, BRUST_LEHNE, FAUST, HAMMER, KH, OBERGRIFF, UNTERGRIFF } from "./kraftbasis"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, rad } from "./ziele"

type P3 = [number, number, number]
const richtung = (hebung: number, ebene: number): P3 => [Math.sin(rad(hebung)) * Math.cos(rad(ebene)), -Math.cos(rad(hebung)), Math.sin(rad(hebung)) * Math.sin(rad(ebene))]
const plus = (a: P3, b: P3, s = 1): P3 => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s]
interface Arm {
  hebung: number
  ebene: number
  /** Unterarm tiefer als der Oberarm (Grad), ergibt die leichte Beugung im Ellbogen */
  knick?: number
}
/** Ellbogen und Hand (Handflächenmarke) einer Seite im Rahmen der Schultern */
const armPunkte = (a: Arm): { e: P3; h: P3 } => {
  const e = plus([SCHULTER_X, 0, 0], richtung(a.hebung, a.ebene), OBERARM)
  const h = plus(e, richtung(Math.max(0, a.hebung - (a.knick ?? 18)), a.ebene), UNTERARM)
  return { e, h }
}
const armZiele = (ziele: Ziele, a: Arm, seiten: (1 | -1)[] = [1, -1], hand?: P3) => {
  for (const sx of seiten) {
    const n = sx === 1 ? "l" : "r"
    const p = armPunkte(a)
    const h = hand ?? p.h
    ziele[`ellbogen_${n}`] = { pos: [sx * p.e[0], p.e[1], p.e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  return ziele
}
type Basis = "stand" | "sitz" | "schwung" | "vorgebeugt" | "sitzvor" | "brust"
const STAND_ZIELE: Ziele = {
  ferse_l: { pos: [0.1, 0.022, -0.05] },
  fuss_l: { pos: [0.11, 0.034, 0.07] },
  ferse_r: { pos: [-0.1, 0.022, -0.05] },
  fuss_r: { pos: [-0.11, 0.034, 0.07] },
}
const SITZ_ZIELE: Ziele = {
  ferse_l: { pos: [0.16, 0.022, 0.42] },
  fuss_l: { pos: [0.17, 0.034, 0.54] },
  ferse_r: { pos: [-0.16, 0.022, 0.42] },
  fuss_r: { pos: [-0.17, 0.034, 0.54] },
}
/** vorgebeugt: Becken und Füße so, dass die Schultern über den Füßen liegen (wie beim Rudern) */
const vorgebeugt = (kipp: number, knie: number, arme: Winkel, ziele: Ziele): Haltung => {
  const schien = knie * 0.5
  const knieY = 0.076 + 0.47 * Math.cos(rad(schien)), knieZ = 0.012 + 0.47 * Math.sin(rad(schien))
  const ober = rad(schien - knie)
  const hy = knieY + 0.383 * Math.cos(ober), hz = knieZ + 0.383 * Math.sin(ober)
  const sz = hz + Math.sin(rad(kipp)) * 0.352
  const dz = -0.05 - sz
  const fuesse: Ziele = {
    ferse_l: { pos: [0.1, 0.022, -0.05 + dz] },
    fuss_l: { pos: [0.11, 0.034, 0.07 + dz] },
    ferse_r: { pos: [-0.1, 0.022, -0.05 + dz] },
    fuss_r: { pos: [-0.11, 0.034, 0.07 + dz] },
  }
  return H({ ...B("huefte", [kipp + schien, 6, 0]), ...B("knie", [knie]), ...B("fuss", [schien, 0]), ...FAUST, hals: [-kipp * 0.4, 0, 0], ...arme }, [kipp, 0, 0], { pos: [0, hy + 0.003, hz + dz], boden: false, ziele: { ...fuesse, ...ziele } })
}
const koerper = (b: Basis, vor: number, arme: Winkel, ziele: Ziele): Haltung => {
  if (b === "vorgebeugt") return vorgebeugt(vor, 22, arme, ziele)
  if (b === "sitzvor")
    return H({ ...B("huefte", [90 + vor, 4, 0]), ...B("knie", [80]), ...B("fuss", [4, 0]), ...FAUST, hals: [-30, 0, 0], ...arme }, [vor, 0, 0], {
      pos: [0, 0.555, 0],
      boden: false,
      ziele: { ferse_l: { pos: [0.07, 0.022, 0.42] }, fuss_l: { pos: [0.07, 0.034, 0.54] }, ferse_r: { pos: [-0.07, 0.022, 0.42] }, fuss_r: { pos: [-0.07, 0.034, 0.54] }, ...ziele },
    })
  if (b === "brust") return mit(BRUST_LEHNE, { dreh: [vor, 0, 0], g: { ...BRUST_LEHNE.g, ...B("huefte", [2 + vor - 50, 6, 0]), ...arme }, ziele: { ...BRUST_LEHNE.ziele, ...ziele } })
  if (b === "sitz") return H({ ...B("huefte", [86 + vor, 8, 0]), ...B("knie", [86]), ...B("fuss", [4, 0]), ...FAUST, ...arme }, [vor, 0, 0], { pos: [0, 0.555, 0], boden: false, ziele: { ...SITZ_ZIELE, ...ziele } })
  const knie = b === "schwung" ? 16 : 6
  return H({ ...B("huefte", [vor + knie * 0.6, 6, 0]), ...B("knie", [knie]), ...B("fuss", [knie * 0.5, 0]), ...FAUST, ...arme }, [vor, 0, 0], { pos: [0, 0.93, 0], boden: false, beckenFrei: true, ziele: { ...STAND_ZIELE, ...ziele } })
}
const armWinkel = (a: Arm, dreh: number): Winkel => ({ ...B("schulter", [a.hebung * Math.sin(rad(a.ebene)), a.hebung * Math.cos(rad(a.ebene)), 0]), ...B("ellbogen", [a.knick ?? 18, dreh]) })
const haltung = (b: Basis, vor: number, a: Arm, dreh: number, hand?: P3, einarm?: boolean, extra: Ziele = {}): Haltung => {
  const ziele = armZiele({ ...extra }, a, einarm ? [-1] : [1, -1], hand)
  const w = armWinkel(a, dreh)
  const arme: Winkel = einarm ? { schulter_r: w.schulter_l, ellbogen_r: w.ellbogen_l, schulter_l: [10, 10, 0], ellbogen_l: [40, 0] } : w
  return koerper(b, vor, arme, ziele)
}

// ---------------------------------------------------------------- Seitheben
/** unten hängen die Hanteln seitlich vor den Oberschenkeln, oben ist der Oberarm waagerecht, 15 bis 30 Grad vor der Körperebene */
const SEIT_UNTEN: Arm = { hebung: 10, ebene: 40, knick: 8 }
const SEIT_OBEN: Arm = { hebung: 88, ebene: 22 }
const SEIT_HALB: Arm = { hebung: 45, ebene: 25, knick: 14 }
const SEIT_TEXTE: [string, string] = ["Seitlich und leicht nach vorn heben, die Ellbogen führen", "Über zwei bis drei Sekunden langsam absenken"]
const seit = (b: Basis, hilfsmittel: Hilfsmittel[], oben: Arm = SEIT_OBEN, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("vorn", haltung(b, 5, SEIT_UNTEN, HAMMER), haltung(b, 5, oben, HAMMER), 1.2, { aus: 2.5, halten: 0.5, texte: SEIT_TEXTE, hilfsmittel, ...extra })

// ---------------------------------------------------------------- Seitheben am Kabel
/** einarmig: seitlich zum Turm, der Griff in der äußeren Hand, das Kabel läuft vor dem Körper; die freie Hand hält sich am Turm */
const KABEL_UNTEN_VOR: P3 = [-0.02, -0.44, 0.13]
const kabelEinarm = (oben: boolean): Haltung => haltung("stand", 3, oben ? { hebung: 88, ebene: 12 } : { hebung: 10, ebene: 80, knick: 8 }, HAMMER, oben ? undefined : KABEL_UNTEN_VOR, true, { hand_l: { pos: [0.43, 1.05, 0.16] } })
/** beidarmig über Kreuz: die Hände kreuzen sich vor der Hüfte */
const KREUZ_UNTEN: P3 = [-0.03, -0.44, 0.15]
const kreuz = (oben: Arm, vor = 3): Dehnung =>
  wdh("vorn", haltung("stand", vor, { hebung: 12, ebene: 80, knick: 8 }, HAMMER, KREUZ_UNTEN), haltung("stand", vor, oben, HAMMER), 1.2, {
    aus: 2.2,
    halten: 0.5,
    texte: ["Beide Arme seitlich anheben, Ellbogen leicht gebeugt", "Langsam wieder vor den Körper absenken"],
    hilfsmittel: [{ art: "kabel", von: "hand_l", rolle: [-0.9, 0.12, 0.1] }, { art: "kabel", von: "hand_r", rolle: [0.9, 0.12, 0.1] }],
  })

// ---------------------------------------------------------------- Aufrechtes Rudern
/** Ellbogen seitlich nach oben bis auf Schulterhöhe, die Hände nah am Körper auf Höhe der unteren Brust */
const aufrecht = (griff: number, hilfsmittel: Hilfsmittel[], weit = false): Dehnung => {
  const unten: Arm = { hebung: 8, ebene: 50, knick: 6 }
  const e: P3 = weit ? [0.35, 0.0, 0.03] : [0.33, 0.0, 0.08]
  const h: P3 = weit ? [griff, -0.26, 0.1] : [griff, -0.24, 0.12]
  const oben = (): Haltung => {
    const ziele: Ziele = {}
    for (const sx of [1, -1] as const) {
      const n = sx === 1 ? "l" : "r"
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    }
    return koerper("stand", 2, { ...B("schulter", [10, 85, 0]), ...B("ellbogen", [100, OBERGRIFF]) }, ziele)
  }
  const u = haltung("stand", 2, unten, OBERGRIFF, [griff, -0.47, 0.12])
  return wdh("vorn", u, oben(), 1.2, { aus: 2.0, halten: 0.4, texte: ["Ellbogen seitlich nach oben bis auf Schulterhöhe, Last nah am Körper", "Langsam wieder absenken"], hilfsmittel })
}

// ---------------------------------------------------------------- Frontheben
const FRONT_UNTEN: Arm = { hebung: 8, ebene: 85, knick: 8 }
const front = (hilfsmittel: Hilfsmittel[], oben: Arm, dreh = HAMMER, hand?: [P3, P3], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", haltung("stand", 2, FRONT_UNTEN, dreh, hand?.[0]), haltung("stand", 2, oben, dreh, hand?.[1]), 1.2, {
    aus: 2.2,
    halten: 0.4,
    texte: ["Mit leicht gebeugtem Ellbogen nach vorn bis auf Schulterhöhe", "Langsam wieder absenken"],
    hilfsmittel,
    ...extra,
  })
/** Scheibe mit beiden Händen bei drei und neun Uhr, oben auf Augenhöhe */
const SCHEIBE_UNTEN: P3 = [0.1, -0.44, 0.17]
const SCHEIBE_OBEN: P3 = [0.1, 0.13, 0.42]

const SWING_UNTEN = haltung("schwung", 8, SEIT_UNTEN, HAMMER)
export const KRAFT_HEBEN_ARME: Record<string, Dehnung> = {
  seitheben: seit("stand", KH),
  seitheben_swing: folge("vorn", [[SWING_UNTEN, 0.8, "Hanteln vor den Oberschenkeln, Hüfte und Knie leicht gebeugt"], [haltung("stand", 3, SEIT_OBEN, HAMMER), 0.6, "Mit kurzem Impuls aus den Beinen bis auf Schulterhöhe"], [SWING_UNTEN, 3.0, "Über drei Sekunden langsam absenken, ohne Schwung"]], { hilfsmittel: KH }),
  seitheben_teilwdh_gedehnt: seit("stand", KH, SEIT_HALB, { ein: 0.8, aus: 1.2, halten: 0, texte: ["Seitlich nur bis etwa 45 Grad heben", "Kontrolliert absenken bis in die Dehnung"] }),
  seitheben_band: seit("stand", BAND, { hebung: 88, ebene: 12 }, { texte: ["Seitlich heben, bis die Oberarme waagerecht sind", "Langsam absenken, das Band bleibt gespannt"] }),
  seitheben_sitzend: wdh("vorn", haltung("sitz", 5, { hebung: 18, ebene: 0, knick: 8 }, HAMMER), haltung("sitz", 5, { hebung: 88, ebene: 20 }, HAMMER), 1.2, { aus: 2.5, halten: 0.5, texte: ["Seitlich und etwas nach vorn heben, bis die Oberarme waagerecht sind", "Langsam absenken, Oberkörper bleibt still"], hilfsmittel: [...KH, { art: "bank", unter: "gesaess", hoehe: 0.45 }] }),
  seitheben_isohold: halte("vorn", haltung("stand", 3, SEIT_UNTEN, HAMMER), haltung("stand", 3, { hebung: 88, ebene: 15 }, HAMMER), { texte: ["Arme seitlich bis waagerecht heben", "Ruhig halten, Nacken lang"], hilfsmittel: KH }),
  seitheben_21er: (() => {
    const u = haltung("stand", 3, SEIT_UNTEN, HAMMER), m = haltung("stand", 3, SEIT_HALB, HAMMER), o = haltung("stand", 3, SEIT_OBEN, HAMMER)
    return folge("vorn", [[u, 0.8, "Teil 1: von unten bis zur halben Höhe"], [m, 0.8], [u, 0.8], [m, 0.8, "Teil 2: von halber Höhe bis Schulterhöhe"], [o, 0.8], [m, 0.8], [u, 0.8, "Teil 3: volle Wiederholungen"], [o, 1.0], [u, 1.2]], { hilfsmittel: KH })
  })(),
  lu_raise: wdh("vorn", haltung("stand", 2, { hebung: 8, ebene: 20, knick: 4 }, HAMMER), haltung("stand", 2, { hebung: 155, ebene: 15, knick: 4 }, HAMMER), 1.6, { aus: 2.2, texte: ["Daumen nach oben, seitlich über Schulterhöhe bis in ein breites V", "Langsam auf demselben Weg absenken"], hilfsmittel: KH }),
  seitheben_kabel_einarmig: wdh("vorn", kabelEinarm(false), kabelEinarm(true), 1.2, { aus: 2.2, halten: 0.5, seiten: true, texte: ["Seitlich anheben, bis der Oberarm waagerecht ist", "Langsam absenken, bis die Hand vor der Hüfte ist"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [0.5, 0.12, 0.04] }] }),
  seitheben_kabel_beidarmig: kreuz({ hebung: 88, ebene: 12 }),
  kabel_y_raise: kreuz({ hebung: 128, ebene: 30, knick: 10 }, 8),
  aufrechtes_rudern_kh: aufrecht(0.2, KH),
  aufrechtes_rudern_kabel_weit: aufrecht(0.25, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }, { art: "kabel", von: "haende", rolle: [0, 0.12, 0.45] }], true),
  frontheben_kh: front(KH, { hebung: 92, ebene: 85, knick: 8 }),
  frontheben_scheibe: front([{ art: "hantelscheibe", an: "haende" }], { hebung: 105, ebene: 88 }, 90, [SCHEIBE_UNTEN, SCHEIBE_OBEN], { texte: ["Scheibe nach vorn bis auf Augenhöhe heben", "Langsam absenken, ohne an die Oberschenkel zu schlagen"] }),
  frontheben_kabel: wdh("seite", haltung("stand", 2, FRONT_UNTEN, HAMMER, undefined, true), haltung("stand", 2, { hebung: 90, ebene: 85, knick: 20 }, HAMMER, undefined, true), 1.2, { aus: 2.2, halten: 0.4, seiten: true, texte: ["Arm nach vorn bis auf Schulterhöhe heben", "Langsam absenken, bis die Hand vor der Hüfte ist"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.05, 0.12, -0.55] }] }),
}

// ---------------------------------------------------------------- Hintere Schulter
// Im Rahmen der Schultern hängt ein senkrechter Arm bei vorgeneigtem Rumpf (Neigung k) mit Hebung k nach vorn;
// oben ist der Oberarm in einer Linie mit dem Rücken (Hebung 90, Ebene 0).
const REVERSE_TEXTE: [string, string] = ["Arme mit leicht gebeugten Ellbogen seitlich heben, bis sie in Linie mit dem Rücken sind", "Langsam wieder unter die Schultern absenken"]
const reverse = (b: Basis, kipp: number, hilfsmittel: Hilfsmittel[], oben: Arm = { hebung: 88, ebene: 0, knick: 18 }, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", haltung(b, kipp, { hebung: kipp, ebene: b === "brust" ? 68 : 90, knick: 10 }, HAMMER), haltung(b, kipp, oben, HAMMER), 1.2, { aus: 2.2, halten: 0.5, texte: REVERSE_TEXTE, hilfsmittel, ...extra })
/** vor dem Körper gekreuzt bzw. gestreckt auf Schulterhöhe */
const VORN_GEKREUZT: P3 = [-0.05, -0.02, 0.44]
const VORN_SCHULTERBREIT: Arm = { hebung: 90, ebene: 88, knick: 8 }
const T_ARM: Arm = { hebung: 88, ebene: -4, knick: 10 }
const auseinander = (vorn: Arm | P3, ende: Arm, dreh: number, hilfsmittel: Hilfsmittel[], texte: [string, string], extra: Partial<Dehnung> = {}, endHand?: [P3, P3]): Dehnung => {
  const start = Array.isArray(vorn) ? haltung("stand", 2, VORN_SCHULTERBREIT, dreh, vorn as P3) : haltung("stand", 2, vorn, dreh)
  let ziel = haltung("stand", 2, ende, dreh)
  if (endHand) {
    const z: Ziele = {}
    for (const [i, sx] of [1, -1].entries()) {
      const n = sx === 1 ? "l" : "r", h = endHand[i]
      const p = armPunkte({ hebung: h[0], ebene: h[1], knick: h[2] })
      z[`ellbogen_${n}`] = { pos: [sx * p.e[0], p.e[1], p.e[2]], bezug: "schultern" }
      z[`hand_${n}`] = { pos: [sx * p.h[0], p.h[1], p.h[2]], bezug: "schultern" }
    }
    ziel = koerper("stand", 2, armWinkel(ende, dreh), z)
  }
  return wdh("vorn", start, ziel, 1.2, { aus: 2.0, halten: 0.6, texte, hilfsmittel, ...extra })
}
/** Face Pull: oben Ellbogen auf Schulterhöhe seitlich und etwas hinten, Unterarme senkrecht nach oben, Hände neben den Ohren */
const facePullEnde = (b: Basis): Haltung => {
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const e = plus([SCHULTER_X, 0, 0], richtung(88, -12), OBERARM)
    const h = plus(e, [-0.03, 1, 0], UNTERARM)
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  return koerper(b, 0, { ...B("schulter", [0, 88, 60]), ...B("ellbogen", [95, HAMMER]) }, ziele)
}
const facePull = (b: Basis, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", haltung(b, 0, { hebung: 100, ebene: 86, knick: 6 }, HAMMER), facePullEnde(b), 1.2, {
    aus: 2.0,
    halten: 1.0,
    texte: ["Zum Gesicht ziehen, Seilenden auseinander, Ellbogen hoch und nach außen", "Langsam zurück, bis die Arme gestreckt sind"],
    hilfsmittel,
    ...extra,
  })
/** Seil: beide Enden laufen von den Händen zur Rolle */
const SEIL_STIRN = (z: number, y = 1.6): Hilfsmittel[] => [{ art: "kabel", von: "hand_l", rolle: [0, y, z] }, { art: "kabel", von: "hand_r", rolle: [0, y, z] }]
const BAND_ANKER = (y: number, z = 1.3): Hilfsmittel[] => [{ art: "bandanker", von: "hand_l", anker: [0.12, y, z] }, { art: "bandanker", von: "hand_r", anker: [-0.12, y, z] }]
export const KRAFT_HINTERE_SCHULTER: Record<string, Dehnung> = {
  reverse_flye_kh_vorgebeugt: reverse("vorgebeugt", 80, KH),
  reverse_flye_kh_sitzend: reverse("sitzvor", 62, [...KH, { art: "bank", unter: "gesaess", hoehe: 0.45 }], { hebung: 86, ebene: 0, knick: 12 }, { texte: ["Arme seitlich heben, bis sie etwa waagerecht sind, Schultern tief", "Langsam wieder unter die Knie senken"] }),
  reverse_flye_brustgestuetzt: reverse("brust", 55, [...KH, BAUCH_LEHNE], { hebung: 88, ebene: 0, knick: 12 }, { texte: ["Arme seitlich heben, bis die Oberarme in Linie mit dem Oberkörper sind", "Langsam wieder absenken"] }),
  reverse_flye_kabel: auseinander(VORN_GEKREUZT, T_ARM, HAMMER, [{ art: "kabel", von: "hand_l", rolle: [-0.9, 1.45, 0.6] }, { art: "kabel", von: "hand_r", rolle: [0.9, 1.45, 0.6] }], ["In einem weiten Bogen seitlich nach hinten auseinander", "Langsam zurück vor den Körper, bis sich die Kabel kreuzen"]),
  reverse_flye_kabel_einarmig: wdh("vorn", haltung("stand", 2, VORN_SCHULTERBREIT, HAMMER, [-0.06, -0.02, 0.43], true), haltung("stand", 2, T_ARM, HAMMER, undefined, true), 1.2, { aus: 2.0, halten: 0.5, seiten: true, texte: ["Arm im Bogen nach außen, bis er in Linie mit der Schulter ist", "Langsam zurück über die Körpermitte"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [0.8, 1.45, 0.4] }] }),
  reverse_flye_band: auseinander(VORN_SCHULTERBREIT, T_ARM, HAMMER, BAND_ANKER(1.4), ["Arme in einem weiten Bogen seitlich auseinander", "Langsam wieder nach vorn, ohne dass das Band zurückschnellt"]),
  face_pull: facePull("stand", SEIL_STIRN(1.15)),
  face_pull_sitzend: facePull("sitz", SEIL_STIRN(1.0, 1.15), { texte: ["Zum Gesicht ziehen, Ellbogen hoch und nach außen", "Langsam zurück, aufrecht sitzen bleiben"] }),
  face_pull_band: facePull("stand", BAND_ANKER(1.6, 1.15), { halten: 2.0 }),
  band_pull_apart: auseinander({ hebung: 90, ebene: 72, knick: 6 }, T_ARM, OBERGRIFF, BAND, ["Arme seitlich auseinander, bis sie ein T bilden", "Langsam wieder zusammen, ohne die Spannung ganz zu lösen"], { hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] }),
  band_pull_apart_untergriff: auseinander({ hebung: 82, ebene: 72, knick: 6 }, { hebung: 72, ebene: -4, knick: 8 }, UNTERGRIFF, [], ["Arme seitlich nach außen und leicht nach unten", "Langsam wieder zusammen, Handflächen bleiben oben"], { hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] }),
  band_pull_apart_diagonal: auseinander({ hebung: 90, ebene: 72, knick: 6 }, T_ARM, OBERGRIFF, [], ["Rechts schräg nach oben, links schräg nach unten auseinander", "Langsam wieder zusammen"], { hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] }, [[45, -4, 8], [132, -4, 8]]),
}

// ---------------------------------------------------------------- Rotatoren
// Ellbogen 90 Grad gebeugt, Oberarm seitlich am Körper (ein Handtuch dazwischen), der Unterarm dreht um den Oberarm
// wie an einem Scharnier: 0 Grad = nach vorn, positiv nach außen.
const rotHaltung = (dreh: number, einarm = true): Haltung => {
  const e: P3 = [SCHULTER_X + 0.045, -OBERARM + 0.005, 0.0]
  const h: P3 = [e[0] + Math.sin(rad(dreh)) * UNTERARM, e[1] + 0.01, e[2] + Math.cos(rad(dreh)) * UNTERARM]
  const ziele: Ziele = {}
  for (const sx of einarm ? ([-1] as const) : ([1, -1] as const)) {
    const n = sx === 1 ? "l" : "r"
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  return koerper("stand", 0, { schulter_r: [4, 10, -dreh], ellbogen_r: [90, HAMMER], schulter_l: [4, 8, 0], ellbogen_l: [12, 0] }, ziele)
}
/** 90/90: Oberarm waagerecht und etwas vor der Körperebene, Ellbogen 90 Grad; der Unterarm dreht von vorn nach oben */
const rot9090 = (hoch: number, seiten: (1 | -1)[] = [-1]): Haltung => {
  const e = plus([SCHULTER_X, 0, 0], richtung(90, 15), OBERARM)
  const vorn = richtung(90, 90 + 15)
  const h = plus(e, [vorn[0] * Math.cos(rad(hoch)), Math.sin(rad(hoch)), vorn[2] * Math.cos(rad(hoch))], UNTERARM)
  const ziele: Ziele = {}
  for (const sx of seiten) {
    const n = sx === 1 ? "l" : "r"
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  const arm: Winkel = { schulter_r: [15, 88, hoch], ellbogen_r: [90, HAMMER] }
  return koerper("stand", 0, seiten.length === 2 ? { ...arm, schulter_l: [15, 88, hoch], ellbogen_l: [90, HAMMER] } : { ...arm, schulter_l: [4, 8, 0], ellbogen_l: [12, 0] }, ziele)
}
/** Cuban Press: Ellbogen seitlich auf Schulterhöhe mit hängenden Unterarmen */
const cubanHaengend = (): Haltung => {
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const e = plus([SCHULTER_X, 0, 0], richtung(88, 5), OBERARM)
    const h = plus(e, [0, -1, 0.05], UNTERARM)
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  return koerper("stand", 0, { ...B("schulter", [5, 88, -60]), ...B("ellbogen", [90, OBERGRIFF]) }, ziele)
}
const cubanOben = (): Haltung => haltung("stand", 0, { hebung: 168, ebene: 10, knick: 6 }, OBERGRIFF)

// ---------------------------------------------------------------- Y, T, W und Schwimmer in Bauchlage, auf der Schrägbank
// Bauchlage: die Vorderseite des Rumpfes zeigt zum Boden (z im Rahmen der Schultern), Arme heben heißt hier Ebene < 0.
const BAUCH: Ziele = {}
const bauchArm = (a: Arm, w?: Arm): Haltung => {
  const ziele = armZiele({ ...BAUCH }, a)
  if (w) {
    for (const sx of [1, -1] as const) {
      const n = sx === 1 ? "l" : "r"
      const e = plus([SCHULTER_X, 0, 0], richtung(w.hebung, w.ebene), OBERARM)
      const h = plus(e, [0.25, 1, -0.15], UNTERARM / Math.hypot(0.25, 1, 0.15))
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    }
  }
  // feste Beckenhöhe (gemessen): die Ausgangswinkel der Arme zeigen vor dem Lösen teils in den Boden und würden die
  // Figur sonst beim Aufsetzen auf den Boden anheben
  return mit(BAUCHLAGE, { g: { ...BAUCHLAGE.g, ...armWinkel(a, HAMMER), hals: [-5, 0, 0] }, pos: [0, 0.144, 0], boden: false, ziele })
}
const Y_BODEN: Arm = { hebung: 150, ebene: -8, knick: 4 }
const T_BODEN: Arm = { hebung: 90, ebene: -10, knick: 4 }
const W_BODEN: Arm = { hebung: 65, ebene: -16 }
const brustArm = (a: Arm, w = false): Haltung => {
  if (!w) return haltung("brust", 55, a, HAMMER)
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const e = plus([SCHULTER_X, 0, 0], richtung(60, -25), OBERARM)
    const h = plus(e, [0.2, 0.9, -0.4], UNTERARM / Math.hypot(0.2, 0.9, 0.4))
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  }
  return koerper("brust", 55, { ...B("schulter", [30, 60, 60]), ...B("ellbogen", [90, HAMMER]) }, ziele)
}
const BRUST_HAENGT: Arm = { hebung: 55, ebene: 68, knick: 6 }
export const KRAFT_ROTATOREN: Record<string, Dehnung> = {
  aussenrotation: wdh("vorn", rotHaltung(-20), rotHaltung(50), 1.2, { aus: 1.8, halten: 0.5, seiten: true, texte: ["Unterarm nach außen drehen, der Ellbogen bleibt am Körper", "Langsam zurück vor den Bauch"], hilfsmittel: [{ art: "bandanker", von: "hand_r", anker: [0.6, 1.0, 0.35] }] }),
  aussenrotation_kabel: wdh("vorn", rotHaltung(-20), rotHaltung(50), 1.2, { aus: 1.8, halten: 0.5, seiten: true, texte: ["Unterarm nach außen drehen, der Ellbogen bleibt fest an der Seite", "Langsam zurück vor den Bauch"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [0.65, 1.0, 0.35] }] }),
  innenrotation: wdh("vorn", rotHaltung(45), rotHaltung(-40), 1.2, { aus: 1.8, halten: 1.0, seiten: true, texte: ["Unterarm nach innen vor den Bauch drehen, Ellbogen am Körper", "Langsam zurück nach außen"], hilfsmittel: [{ art: "bandanker", von: "hand_r", anker: [-0.7, 1.0, 0.25] }] }),
  aussenrotation_90_90: wdh("vorn", rot9090(0), rot9090(88), 1.2, { aus: 2.0, halten: 1.0, seiten: true, texte: ["Unterarm nach oben drehen, bis er senkrecht steht, Ellbogen auf derselben Höhe", "Langsam wieder nach vorn bis etwa waagerecht"], hilfsmittel: [{ art: "bandanker", von: "hand_r", anker: [-0.25, 1.35, 1.2] }] }),
  cuban_press: folge("vorn", [[haltung("stand", 0, { hebung: 8, ebene: 50, knick: 6 }, OBERGRIFF, [0.17, -0.47, 0.12]), 1.0, "Hanteln vor den Oberschenkeln, Obergriff"], [cubanHaengend(), 1.0, "Ellbogen seitlich hoch, bis die Oberarme waagerecht sind"], [rot9090(88, [1, -1]), 1.0, "Unterarme nach oben drehen in die 90/90-Position"], [cubanOben(), 1.0, "Nach oben drücken, bis die Arme gestreckt sind"], [rot9090(88, [1, -1]), 1.0, "Zurück in die 90/90-Position"], [cubanHaengend(), 1.0, "Unterarme nach unten drehen"]], { hilfsmittel: KH }),
  prone_trap_raise: wdh("schraeg", haltung("brust", 55, BRUST_HAENGT, HAMMER), haltung("brust", 55, { hebung: 150, ebene: 5, knick: 4 }, HAMMER), 1.4, { aus: 2.0, halten: 1.0, texte: ["Gestreckte Arme schräg nach vorn oben in ein Y, bis in Linie mit dem Körper", "Langsam wieder absenken, Brust bleibt auf der Bank"], hilfsmittel: [...KH, BAUCH_LEHNE] }),
  ytw_schraegbank: (() => {
    const u = haltung("brust", 55, BRUST_HAENGT, HAMMER)
    return folge("schraeg", [[u, 0.8, "Arme hängen senkrecht"], [brustArm({ hebung: 150, ebene: 5, knick: 4 }), 1.2, "Y: schräg nach vorn oben bis auf Kopfhöhe"], [u, 1.2, "Langsam absenken"], [brustArm({ hebung: 90, ebene: 0, knick: 6 }), 1.2, "T: seitlich bis auf Schulterhöhe"], [u, 1.2, "Langsam absenken"], [brustArm({ hebung: 60, ebene: -25 }, true), 1.2, "W: Ellbogen nach hinten, Unterarme nach oben drehen"], [u, 1.2, "Zurück in die Ausgangsposition"]], { hilfsmittel: [...KH, BAUCH_LEHNE] })
  })(),
  ytw: folge("schraeg", [[bauchArm({ ...Y_BODEN, ebene: 2 }), 0.8, "Y: Arme schräg nach vorn oben"], [bauchArm(Y_BODEN), 1.0, "Arme einige Zentimeter vom Boden heben"], [bauchArm({ ...T_BODEN, ebene: 2 }), 1.0, "T: Arme seitlich"], [bauchArm(T_BODEN), 1.0, "Anheben, Schulterblätter sanft zusammen"], [bauchArm({ ...W_BODEN, ebene: 2 }, { ...W_BODEN, ebene: 2 }), 1.0, "W: Ellbogen gebeugt, Hände auf Kopfhöhe"], [bauchArm(W_BODEN, W_BODEN), 1.0, "Ellbogen und Hände anheben"]], {}),
  schwimmer_bauchlage: folge("schraeg", [[bauchArm({ hebung: 168, ebene: -6, knick: 4 }), 1.0, "Arme über dem Kopf einige Zentimeter vom Boden"], [bauchArm({ hebung: 90, ebene: -8, knick: 4 }), 2.0, "In einem großen Bogen seitlich nach unten"], [bauchArm({ hebung: 18, ebene: -40, knick: 30 }), 2.0, "Kurz vor der Hüfte Handflächen nach oben, Handrücken zum unteren Rücken"], [bauchArm({ hebung: 90, ebene: -8, knick: 4 }), 2.0, "Auf demselben Weg zurück"]], {}),
}
