// Seitheben, Frontheben, Y-Heben und aufrechtes Rudern mit Zielpunkten. Der Arm wird über zwei Winkel im Rahmen der
// Schultern beschrieben: Hebung (0 = hängt am Rumpf, 90 = waagerecht, 180 = über dem Kopf) und Ebene (0 = genau zur
// Seite, 90 = genau nach vorn). Der Ellbogen ist leicht gebeugt, der Unterarm hängt etwas tiefer als der Oberarm,
// so sind die Hände oben auf Ellbogenhöhe oder knapp darunter. Geprüft mit werkzeuge/messen.html gegen soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, halte, wdh } from "./basis"
import { BAND, FAUST, HAMMER, KH, OBERGRIFF } from "./kraftbasis"
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
type Basis = "stand" | "sitz" | "schwung"
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
const koerper = (b: Basis, vor: number, arme: Winkel, ziele: Ziele): Haltung => {
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
