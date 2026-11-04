// Rumpf mit der Dehnfigur: Stütz und Seitstütz, Dead Bug, Bird Dog, Hollow, Crunches, Hängen an der Stange, Stütz am
// Barren, Rollouts, Tragen, Pallof Press, Holzhacker und Rotation, Golf-Rumpfübungen am Kabel und Band.
//
// Kippung 90 = Bauchlage, -90 = Rückenlage. Arme hängen senkrecht, wenn Schulterbeugung = Kippung.
// Landmine, Schlingentrainer, Bauchmaschine und Negativbank hat das Heimstudio nicht; diese Übungen behalten die
// einfache Figur.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, ATHLETISCH, B, H, HALBKNIESTAND, KNIESTAND, RUECKENLAGE, RUECKENLAGE_AUF, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, KH_R, OBERGRIFF, kabel, kabelstange } from "./kraftbasis"
import { stuetzPaar, unterarmStuetz } from "./kraft_druecken"
import { seitBoden } from "./seitstuetz"
import { SCHULTER_X } from "./ziele"

// ---------------------------------------------------------------- Stütz
/** Unterarmstütz aus der Ausführung: Ellbogen unter den Schultern, Füße hüftbreit, Körper als Linie */
const UA: Haltung = unterarmStuetz()
/** Knie noch am Boden (Ausgangslage vor dem Abheben) */
const UA_KNIE: Haltung = unterarmStuetz({ art: "knie" })
/** Unterarme auf dem Gymnastikball (65 cm): Ellbogen auf der Rundung, Hände oben locker zusammen */
const ballUA = (k: { art?: "knie"; versatz?: [number, number] } = {}): Haltung =>
  unterarmStuetz({ ellY: 0.665, ellX: 0.11, hand: [0.05, 0.69, 0.25], fuss: 0.16, vor: 0.02, ...k })
type Z = NonNullable<Haltung["ziele"]>
/** ganze Haltung samt Zielpunkten längs verschieben */
const schieben = (h: Haltung, dz: number): Haltung => {
  const ziele: Z = {}
  for (const [k, v] of Object.entries(h.ziele ?? {}) as [keyof Z, Z[keyof Z]][]) {
    const p = v!.pos as number[]
    ziele[k] = { ...v!, pos: [p[0], p[1], p[2] + dz] } as Z[keyof Z]
  }
  return { ...h, pos: h.pos ? [h.pos[0], h.pos[1], h.pos[2] + dz] : h.pos, ziele }
}
const fussZ = (h: Haltung): number => (h.ziele?.fuss_l?.pos as number[])[2]
/** Zielpunkte weglassen (der Arm bzw. das Bein bewegt sich frei nach den Winkeln) */
const ohne = (h: Haltung, ...weg: (keyof Z)[]): Z => Object.fromEntries(Object.entries(h.ziele ?? {}).filter(([k]) => !weg.includes(k as keyof Z))) as Z
/** Füße etwas breiter als hüftbreit */
const UA_BREIT: Haltung = unterarmStuetz({ fuss: 0.16 })
const SP_BREIT = stuetzPaar({ hand: 0.16, fuss: 0.16 })
/** Stütz mit gestreckten Armen, Füße an derselben Stelle wie im Unterarmstütz */
const HOCH_BREIT: Haltung = schieben(SP_BREIT.o, fussZ(UA_BREIT) - fussZ(SP_BREIT.o))
/** Halb hoch: eine Seite auf der Hand, die andere noch auf dem Unterarm; der Rumpf darf sich dafür neigen */
const halbHoch = (hand: "l" | "r"): Haltung => {
  const u = hand === "l" ? "r" : "l"
  const a = UA_BREIT, b = HOCH_BREIT
  const ziele: Z = { ...ohne(a, `ellbogen_${hand}`, `hand_${hand}`), [`hand_${hand}`]: b.ziele![`hand_${hand}`], [`ellbogen_${hand}`]: b.ziele![`ellbogen_${hand}`], [`ellbogen_${u}`]: a.ziele![`ellbogen_${u}`] }
  const m = (x: number[], y: number[]): [number, number, number] => [(x[0] + y[0]) / 2, (x[1] + y[1]) / 2, (x[2] + y[2]) / 2]
  return { ...a, g: { ...a.g, [`schulter_${hand}`]: [80, 20, 0], [`ellbogen_${hand}`]: [4, 90], [`hand_${hand}`]: [80, 0] }, pos: m(a.pos!, b.pos!), dreh: m(a.dreh!, b.dreh!), ziele, beckenFrei: true, drehFrei: true }
}
/** Stütz: eine Hand tippt auf die gegenüberliegende Schulter */
const tippen = (hand: "l" | "r"): Haltung => {
  const o = SP_BREIT.o, l = SP_BREIT.linien.o
  const sx = hand === "r" ? SCHULTER_X : -SCHULTER_X
  return { ...o, g: { ...o.g, [`schulter_${hand}`]: [60, -40, 0], [`ellbogen_${hand}`]: [130, 90], [`hand_${hand}`]: [0, 0] }, ziele: { ...ohne(o, `hand_${hand}`, `ellbogen_${hand}`), [`hand_${hand}`]: { pos: [sx, l.schulter[0] + 0.07, l.schulter[1] + SP_BREIT.linien.dz] } }, drehFrei: true }
}
/** Ein Arm lang nach vorn in Verlängerung des Körpers (Daumen oben), freie Ziele: Rumpf darf leicht verlagern */
const armVor = (h: Haltung, arm: "l" | "r", bein?: "l" | "r"): Haltung => ({
  ...h,
  g: { ...h.g, [`schulter_${arm}`]: [172, 8, 0], [`ellbogen_${arm}`]: [4, 0], [`hand_${arm}`]: [0, 0], ...(bein ? { [`huefte_${bein}`]: [-4, 4, 0], [`knie_${bein}`]: [2], [`fuss_${bein}`]: [-20, 0] } : {}) },
  ziele: ohne(h, `hand_${arm}`, `ellbogen_${arm}`, ...(bein ? ([`fuss_${bein}`, `knie_${bein}`] as (keyof Z)[]) : [])),
  beckenFrei: true,
  drehFrei: true,
})
/** Seitstütz (rechts unten): obere Hand auf der Hüfte bzw. oberer Arm senkrecht zur Decke */
const HAND_HUEFTE: Winkel = { schulter_l: [-10, 14, 0], ellbogen_l: [100, 0] }
const ARM_DECKE: Winkel = { schulter_l: [0, 90, 0], ellbogen_l: [4, 0] }
/** Ball unter den Unterarmen: Mitte 12 cm hinter den Händen */
const BALL_UA: Hilfsmittel = { art: "gymnastikball", an: "haende", vor: -0.12 }
const STUETZ: Haltung = stuetzPaar({ hand: 0.16 }).o
/**
 * Bärenstütz: Hände unter den Schultern, Knie unter der Hüfte, Zehen aufgestellt; die Knie schweben 4 cm über dem
 * Boden, Rücken waagerecht. Hände und Ballen bleiben am Boden (gemessen am Vierfüßler).
 */
const baer = (vor: { hand?: "l" | "r"; fuss?: "l" | "r"; schritt?: number; knieAb?: boolean } = {}): Haltung => {
  const st = vor.schritt ?? 0.1
  const ziele: Z = {}
  for (const [n, x] of [["l", 1], ["r", -1]] as const) {
    const dh = vor.hand === n ? st : 0, df = vor.fuss === n ? st : 0
    ziele[`hand_${n}`] = { pos: [x * 0.121, 0.051, 0.46 + dh] }
    // Knie am Boden: kein Zielpunkt, die Höhe des Beckens legt sie ab
    if (!vor.knieAb) ziele[`knie_${n}`] = { pos: [x * 0.08, 0.12 + (df ? 0.02 : 0), 0.03 + df] }
    ziele[`fuss_${n}`] = { pos: [x * 0.1, 0.112, -0.43 + df] }
  }
  return H({ ...B("huefte", [88, 3, 0]), ...B("knie", [88]), ...B("fuss", [30, 0]), ...B("zehen", [60]), ...B("schulter", [86, 3, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [85, 0]), hals: [-10, 0, 0] }, [90, 0, 0], { pos: [0, vor.knieAb ? 0.47 : 0.495, 0.02 + ((vor.hand ? st : 0) + (vor.fuss ? st : 0)) / 4], boden: false, ziele, drehFrei: true })
}
const BAER: Haltung = baer()
/** Vierfüßler mit aufgestellten Zehen, Knie noch am Boden */
const BAER_AB: Haltung = baer({ knieAb: true })

// ---------------------------------------------------------------- Rückenlage
const TISCH: Winkel = { ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]) }
const ARME_DECKE: Winkel = { ...B("schulter", [90, 6, 0]), ...B("ellbogen", [4, 0]) }
const deadBug = (w: Winkel = {}): Haltung => mit(RUECKENLAGE, { g: { ...TISCH, ...ARME_DECKE, ...w } })
/** Gegengleich: rechter Arm über den Kopf, linkes Bein lang knapp über dem Boden */
const DB_STRECK: Winkel = { schulter_r: [172, 6, 0], huefte_l: [6, 4, 0], knie_l: [2], fuss_l: [-10, 0] }
const DB_STRECK_2: Winkel = { schulter_l: [172, 6, 0], huefte_r: [6, 4, 0], knie_r: [2], fuss_r: [-10, 0] }
/** Hüftbeugung, bei der die Ferse mit 90 Grad im Knie gerade den Boden berührt (gemessen: Oberschenkel 0,38 m, Unterschenkel 0,47 m) */
const FERSE_TIPP = 49
/** Fingerspitzen locker an den Schläfen, Ellbogen zur Seite (Zielpunkte im Rahmen der Schultern, gehen beim Einrollen mit) */
const HAENDE_KOPF: Winkel = { ...B("schulter", [15, 100, 0]), ...B("ellbogen", [130, 0]) }
const KOPF_HAENDE: NonNullable<Haltung["ziele"]> = { hand_l: { pos: [0.09, 0.25, 0.03], bezug: "schultern" }, hand_r: { pos: [-0.09, 0.25, 0.03], bezug: "schultern" } }
/** Beide Hände halten die Scheibe auf der Brust */
const HAENDE_BRUST: NonNullable<Haltung["ziele"]> = { hand_l: { pos: [0.05, -0.12, 0.15], bezug: "schultern" }, hand_r: { pos: [-0.05, -0.12, 0.15], bezug: "schultern" } }
/** McGill: beide Hände flach unter dem unteren Rücken, Ellbogen seitlich am Boden */
const unterRuecken = (oben: boolean): NonNullable<Haltung["ziele"]> => ({ ferse_l: { pos: [0.119, 0.07, 0.595] }, hand_l: { pos: [0.08, 0.072, -0.1] }, hand_r: { pos: [-0.08, 0.072, -0.1] }, ellbogen_l: { pos: [0.29, oben ? 0.105 : 0.08, -0.25] }, ellbogen_r: { pos: [-0.29, oben ? 0.105 : 0.08, -0.25] } })
const CRUNCH_UNTEN: Haltung = mit(RUECKENLAGE_AUF, { g: HAENDE_KOPF, ziele: KOPF_HAENDE })
/** Schräger Crunch: rechter Knöchel auf dem linken Knie, linke Hand an der Schläfe, rechter Arm seitlich am Boden */
const schraegCrunch = (oben: boolean): Haltung =>
  mit(RUECKENLAGE_AUF, {
    g: { huefte_r: [70, 30, 50], knie_r: [100], fuss_r: [0, 0], schulter_l: [15, 100, 0], ellbogen_l: [130, 0], schulter_r: [0, 60, 0], ellbogen_r: [6, 0], ...(oben ? { bws: [30, 0, -24], lws: [4, 0, -6], hals: [18, 0, 0] } : {}) },
    ziele: { hand_l: KOPF_HAENDE.hand_l, fuss_r: { pos: [0.2, 0.5, 0.22] }, hand_r: { pos: [-0.56, 0.05, -0.12] } },
    pos: [0, 0.119, 0],
    boden: false,
  })
/**
 * Crunch auf dem Gymnastikball (65 cm): unterer und mittlerer Rücken liegen oben auf dem Ball, Becken davor etwa auf
 * Kniehöhe, Füße hüftbreit flach am Boden, Knie etwa 90 Grad; unten sinkt der Oberkörper über den Ball nach hinten.
 */
// Die Lendenwirbelsäule der Figur ist starr: auf dem Ball liegt das Becken höher als beim Menschen, die Knie bleiben bei etwa 120 Grad
const BALL_KIPP = -90, BALL_UNTEN = 0.8, BALL_OBEN = 0.73, BALL_FUSS = 0.45
const ballCrunch = (oben: boolean): Haltung =>
  H(
    { ...B("huefte", [20, 6, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...HAENDE_KOPF, ...(oben ? { lws: [12, 0, 0], bws: [32, 0, 0], hals: [18, 0, 0] } : { lws: [-8, 0, 0], bws: [-14, 0, 0], hals: [-10, 0, 0] }) },
    [BALL_KIPP, 0, 0],
    { pos: [0, oben ? BALL_OBEN : BALL_UNTEN, 0], boden: false, ziele: { ...KOPF_HAENDE, ferse_l: { pos: [0.15, 0.066, BALL_FUSS] }, ferse_r: { pos: [-0.15, 0.066, BALL_FUSS] } } },
  )
const crunchOben = (w: Winkel = {}, ziele: NonNullable<Haltung["ziele"]> = KOPF_HAENDE): Haltung => mit(RUECKENLAGE_AUF, { g: { ...HAENDE_KOPF, bws: [34, 0, 0], hals: [20, 0, 0], ...w }, ziele })
/** Bird Dog Crunch: rechter Ellbogen und linkes Knie treffen sich unter dem Bauch; linke Hand und rechtes Knie bleiben */
const BD_CRUNCH: Haltung = mit(VIERFUESSLER, {
  g: { schulter_r: [40, -10, 0], ellbogen_r: [120, 90], huefte_l: [125, -4, 0], knie_l: [140], fuss_l: [-40, 0], bws: [12, 0, 0], lws: [8, 0, 0], hals: [-10, 0, 0] },
  ziele: { ellbogen_r: { pos: [0.01, 0.34, 0.2] }, knie_l: { pos: [0.03, 0.31, 0.2] }, hand_l: { pos: [0.121, 0.051, 0.46] }, knie_r: { pos: [-0.078, 0.091, -0.01] } },
  pos: [0, 0.47, 0],
  boden: false,
})
/** Bird Dog Rudern auf der Flachbank (45 cm): linke Hand und rechtes Knie auf dem Polster, linkes Bein lang auf Hüfthöhe */
const BANK_H = 0.45
const bdRudern = (gezogen: boolean): Haltung =>
  H(
    { huefte_r: [90, 3, 0], knie_r: [90], fuss_r: [-45, 0], huefte_l: [0, 4, 0], knie_l: [2], fuss_l: [-20, 0], schulter_l: [90, 3, 0], ellbogen_l: [4, 90], hand_l: [85, 0], ...(gezogen ? { schulter_r: [30, 12, 0], ellbogen_r: [100, HAMMER] } : { schulter_r: [90, 16, 0], ellbogen_r: [4, HAMMER] }), ...FAUST, hals: [-15, 0, 0] },
    [90, 0, 0],
    { pos: [0, BANK_H + 0.09 + 0.385, 0], boden: false, ziele: { hand_l: { pos: [0.11, BANK_H + 0.055, 0.45] }, knie_r: { pos: [-0.03, BANK_H + 0.09, -0.01] }, ...(gezogen ? {} : { hand_r: { pos: [-0.22, 0.42, 0.39] } }) } },
  )
/** Hüftbeugung im Hollow Hold: Fersen gut 20 cm über dem Boden */
const HOLLOW_HUEFTE = 10
const HOLLOW: Haltung = mit(RUECKENLAGE, { g: { ...B("huefte", [HOLLOW_HUEFTE, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]), ...B("schulter", [176, 8, 0]), ...B("ellbogen", [4, 90]), lws: [4, 0, 0], bws: [14, 0, 0], hals: [10, 0, 0] } })

// ---------------------------------------------------------------- Hang und Stütz am Gerät
export const STANGE: Hilfsmittel = { art: "rack", an: "becken", z: -0.08 }
/**
 * Hang an der Klimmzugstange (2,12 m): die Fäuste greifen die Stange (Handflächen 3 cm unter der Mitte), die Schultern
 * hängen darunter; lehnt sich der Körper zurück (kipp < 0), bleiben die Hände an der Stange.
 */
const HAND_STANGE_Y = 2.09
/** Schulter bis Handflächenmarke bei gestrecktem Arm mit Faust (gemessen) */
const ARM_FAUST = 0.515
const GRIFF_X = 0.21
/** Becken bis Schultergelenk bei erhobenen Armen (gemessen, das Schultergelenk sitzt höher) */
const SCHULTER_RUMPF = 0.402
export const hang = (w: Winkel = {}, kipp = 0, haende: ("l" | "r")[] = ["l", "r"], laengs = 0): Haltung => {
  const r = (kipp * Math.PI) / 180
  const sy = HAND_STANGE_Y - Math.sqrt(ARM_FAUST ** 2 - (GRIFF_X - SCHULTER_X) ** 2)
  const ziele: NonNullable<Haltung["ziele"]> = {}
  for (const n of haende) ziele[`hand_${n}`] = { pos: [n === "l" ? GRIFF_X : -GRIFF_X, HAND_STANGE_Y, 0] }
  return H({ ...B("huefte", [6, 4, 0]), ...B("knie", [10]), ...B("fuss", [-20, 0]), ...B("schulter", [176 + kipp, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST, hals: [-8, 0, 0], ...w }, [kipp, laengs, 0], { pos: [0, sy - SCHULTER_RUMPF * Math.cos(r), -SCHULTER_RUMPF * Math.sin(r)], boden: false, ziele })
}
/** Ruhiges Hängen an der Stange (2,12 m): Knie leicht gebeugt, damit die Füße frei über dem Boden sind */
const HANG: Haltung = hang({ ...B("knie", [30]), ...B("fuss", [-30, 0]) })
/**
 * L-Sitz am Boden: Hände flach neben der Hüfte (Finger nach vorn), Arme gestreckt; oben schweben Gesäß und Fersen
 * knapp über dem Boden, die gestreckten Beine waagerecht. Unten sitzt die Figur mit gestreckten Beinen.
 */
const lSitzBoden = (oben: boolean): Haltung =>
  H(
    { ...B("huefte", [oben ? 99 : 88, 4, 0]), ...B("knie", [2]), ...B("fuss", [-30, 0]), ...B("schulter", [-6, 12, 0]), ...B("ellbogen", [2, 0]), ...B("hand", [80, 0]), bws: [oben ? 14 : 4, 0, 0], hals: [-10, 0, 0] },
    [oben ? 8 : -4, 0, 0],
    { pos: [0, oben ? 0.145 : 0.115, 0], boden: false, ziele: { hand_l: { pos: [0.2, 0.055, 0.04] }, hand_r: { pos: [-0.2, 0.055, 0.04] } } },
  )
const BARREN: Hilfsmittel = { art: "barren", an: "hand_r" }
const barren = (w: Winkel = {}): Haltung => H({ ...B("huefte", [6, 4, 0]), ...B("knie", [20]), ...B("fuss", [-20, 0]), ...B("schulter", [-8, 8, 0]), ...B("ellbogen", [4, 0]), ...B("hand", [80, 0]), ...w }, [0, 0, 0], { pos: [0, 1.2, 0], boden: false })

// ---------------------------------------------------------------- Stand: Tragen, Pallof, Rotation
const SEITE_R: Winkel = { schulter_r: [2, 8, 0], ellbogen_r: [6, HAMMER], ...FAUST }
const FRONT_RACK_L: Winkel = { schulter_l: [40, 20, 0], ellbogen_l: [140, HAMMER] }
const FRONT_RACK_R: Winkel = { schulter_r: [40, 20, 0], ellbogen_r: [140, HAMMER] }
const UEBERKOPF_R: Winkel = { schulter_r: [176, 10, 0], ellbogen_r: [4, HAMMER] }
const LOCKER_L: Winkel = { schulter_l: [4, 12, 0], ellbogen_l: [10, 0] }
/** Gehen auf der Stelle: arme bleiben, Beine wechseln */
export const gehen = (arme: Winkel, hilfsmittel: Hilfsmittel[], knie = 30, text = "Aufrecht gehen, Rumpf bleibt gerade"): Dehnung =>
  folge(
    "schraeg",
    [
      [mit(STAND, { g: { ...arme, huefte_l: [knie, 4, 0], knie_l: [knie * 1.2] } }), 0.6, text],
      [mit(STAND, { g: arme }), 0.4],
      [mit(STAND, { g: { ...arme, huefte_r: [knie, 4, 0], knie_r: [knie * 1.2] } }), 0.6],
      [mit(STAND, { g: arme }), 0.4],
    ],
    { hilfsmittel },
  )
/** Kabel seitlich links auf Brusthöhe; Hände vor der Brust oder gestreckt */
const PALLOF_BRUST: Winkel = { ...B("schulter", [30, -6, 0]), ...B("ellbogen", [110, 0]), ...FAUST }
const PALLOF_VOR: Winkel = { ...B("schulter", [88, -6, 0]), ...B("ellbogen", [4, 0]), ...FAUST }
const PALLOF_HOCH: Winkel = { ...B("schulter", [170, -4, 0]), ...B("ellbogen", [4, 0]), ...FAUST }
const BREIT: Winkel = { ...B("huefte", [12, 12, -6]), ...B("knie", [16]), ...B("fuss", [6, 0]) }
const pallofStand = (arme: Winkel, kipp = 6): Haltung => H({ ...BREIT, ...arme }, [kipp, 0, 0])
const ROLLE_SEITE: [number, number, number] = [0.9, 1.15, 0.2]
const pallof = (basis: (arme: Winkel) => Haltung, zug: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", basis(PALLOF_BRUST), basis(PALLOF_VOR), 1.2, { aus: 1.4, halten: 2, seiten: true, texte: ["Griff gerade nach vorn drücken, Rumpf dreht nicht mit", "Zurück zur Brust"], hilfsmittel: zug, ...extra })
const KABEL_SEITE = kabel("haende", ROLLE_SEITE)
const BAND_SEITE: Hilfsmittel[] = [{ art: "bandanker", von: "haende", anker: ROLLE_SEITE }]
const halbknie = (arme: Winkel): Haltung => mit(HALBKNIESTAND, { g: arme })
const kniend = (arme: Winkel): Haltung => mit(KNIESTAND, { g: arme })

/** Drehung des Oberkörpers (Brustwirbelsäule und Lendenwirbelsäule), positiv nach links */
export const dreh = (grad: number): Winkel => ({ lws: [0, 0, grad * 0.3], bws: [0, 0, grad * 0.7] })
/** Holzhacker: Hände von oben links nach unten rechts (bzw. umgekehrt beim Lift) */
const HACK_OBEN: Winkel = { schulter_l: [150, -30, 0], ellbogen_l: [8, 0], schulter_r: [130, 20, 0], ellbogen_r: [10, 0], ...FAUST, ...dreh(40) }
const HACK_UNTEN: Winkel = { schulter_l: [40, -30, 0], ellbogen_l: [8, 0], schulter_r: [30, 30, 0], ellbogen_r: [10, 0], ...FAUST, ...dreh(-40) }
const hacken = (basis: (w: Winkel) => Haltung, von: Winkel, bis: Winkel, rolle: [number, number, number], texte: [string, string], zug: "kabel" | "band" = "kabel"): Dehnung =>
  wdh("vorn", basis(von), basis(bis), 1.2, {
    aus: 1.6,
    seiten: true,
    texte,
    hilfsmittel: zug === "kabel" ? [kabelstange(), ...kabel("haende", rolle)] : [{ art: "bandanker", von: "haende", anker: rolle }],
  })
const STAND_HACK = (w: Winkel): Haltung => H({ ...BREIT, ...w }, [8, 0, 0])
const ROTATION_ARME: Winkel = { ...B("schulter", [86, -8, 0]), ...B("ellbogen", [6, 0]), ...FAUST }

// ---------------------------------------------------------------- Golf: Ansprechhaltung
export const GOLF_ARME: Winkel = { ...B("schulter", [38, -12, 0]), ...B("ellbogen", [6, 0]), ...FAUST }
export const golf = (w: Winkel = {}): Haltung => mit(ATHLETISCH, { g: { ...GOLF_ARME, ...w } })
/** Rückschwung: Oberkörper rechts gedreht, Hände hoch rechts; Treffmoment: Hüfte offen, Hände vor dem Körper */
export const RUECKSCHWUNG: Winkel = { schulter_l: [110, -40, 0], ellbogen_l: [6, 0], schulter_r: [90, 30, 0], ellbogen_r: [90, 0], ...dreh(-80), hals: [-20, 0, 50] }
export const TREFFMOMENT: Winkel = { ...GOLF_ARME, ...dreh(30), huefte_l: [40, 6, 20], huefte_r: [50, 6, -10] }
export const DURCHSCHWUNG: Winkel = { schulter_l: [90, 30, 0], ellbogen_l: [90, 0], schulter_r: [110, -40, 0], ellbogen_r: [6, 0], ...dreh(80), hals: [-20, 0, -50] }

export const KRAFT_RUMPF: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Stütz
  unterarmstuetz: halte("seite", UA_KNIE, UA, { ein: 1.5, aus: 1.5, hinweis: "Körper als Linie, Bauch und Gesäß fest, Ellbogen unter den Schultern." }),
  stuetz_gestreckt: halte("seite", VIERFUESSLER, STUETZ, { ein: 1.5, aus: 1.5, hinweis: "Hände unter den Schultern, Körper als Linie." }),
  unterarmstuetz_lang: halte("seite", UA, unterarmStuetz({ vor: 0.15 }), { ein: 1.5, aus: 1.5, hinweis: "Ellbogen deutlich vor dem Kopf, Becken bleibt in der Linie." }),
  rkc_plank: halte("seite", UA, unterarmStuetz({ vor: 0.05, ellX: 0.1, hand: [0.07, 0.075, 0.24], fuss: 0.05, w: FAUST }), { ein: 1.5, aus: 1.5, hinweis: "Fäuste, Ellbogen Richtung Zehen ziehen, alles maximal anspannen." }),
  unterarmstuetz_gewicht: halte("seite", UA_KNIE, UA, { ein: 1, aus: 1.5, hinweis: "Scheibe liegt auf dem oberen Rücken.", hilfsmittel: [{ art: "hantelscheibe", an: "bws" }] }),
  unterarmstuetz_ball: halte("seite", ballUA(), ballUA(), { ein: 1, aus: 1.5, hinweis: "Unterarme auf dem Ball, Körper als Linie.", hilfsmittel: [BALL_UA] }),
  stir_the_pot: folge(
    "schraeg",
    [
      [ballUA({ versatz: [0, 0.05] }), 0.8, "Unterarme auf dem Ball"],
      [ballUA({ versatz: [0.05, 0] }), 0.8, "Kleine Kreise mit den Unterarmen"],
      [ballUA({ versatz: [0, -0.05] }), 0.8],
      [ballUA({ versatz: [-0.05, 0] }), 0.8],
    ],
    { hilfsmittel: [BALL_UA] },
  ),
  body_saw: wdh("seite", UA, unterarmStuetz({ vor: 0.17, ellZ: (UA.ziele?.ellbogen_l?.pos as number[])[2] }), 1.6, {
    aus: 1.6,
    texte: ["Körper auf den Unterarmen nach hinten schieben", "Zurück nach vorn"],
    hilfsmittel: [{ art: "gleitscheibe", an: "fuss_l" }, { art: "gleitscheibe", an: "fuss_r" }],
  }),
  stuetz_wechsel: folge(
    "seite",
    [
      [UA_BREIT, 0.8, "Unterarmstütz"],
      [halbHoch("r"), 0.8, "Rechte Hand unter die Schulter und hochdrücken"],
      [HOCH_BREIT, 0.8, "Linke Hand nach, Becken bleibt ruhig"],
      [halbHoch("l"), 0.8, "Rechts zurück auf den Unterarm"],
      [UA_BREIT, 0.8, "Links zurück, dann Führungsarm wechseln"],
    ],
  ),
  stuetz_schultertippen: folge(
    "vorn",
    [
      [SP_BREIT.o, 0.6, "Stütz, Füße etwas breiter"],
      [tippen("l"), 0.7, "Linke Hand tippt die rechte Schulter"],
      [SP_BREIT.o, 0.5],
      [tippen("r"), 0.7, "Andere Seite, Becken bleibt waagerecht"],
      [SP_BREIT.o, 0.5],
    ],
  ),
  unterarmstuetz_armstrecken: folge(
    "seite",
    [
      [UA_BREIT, 0.8, "Unterarmstütz"],
      [armVor(UA_BREIT, "r"), 1.2, "Rechten Arm lang nach vorn, Daumen oben"],
      [UA_BREIT, 0.8],
      [armVor(UA_BREIT, "l"), 1.2, "Anderer Arm"],
    ],
  ),
  stuetz_diagonal: folge(
    "seite",
    [
      [SP_BREIT.o, 0.8, "Stütz, Füße etwas breiter"],
      [armVor(SP_BREIT.o, "r", "l"), 1.4, "Rechten Arm und linkes Bein auf Körperhöhe heben"],
      [SP_BREIT.o, 0.8],
      [armVor(SP_BREIT.o, "l", "r"), 1.4, "Andere Diagonale"],
    ],
  ),
  baerenstuetz: halte("seite", BAER_AB, BAER, { ein: 1.5, aus: 1.5, hinweis: "Knie schweben wenige Zentimeter über dem Boden, Rücken flach." }),
  baerengang: folge(
    "seite",
    [
      [BAER, 0.5, "Knie knapp über dem Boden"],
      [baer({ hand: "r", fuss: "l" }), 0.6, "Rechte Hand und linker Fuß eine Handbreite vor"],
      [BAER, 0.4],
      [baer({ hand: "l", fuss: "r" }), 0.6, "Andere Diagonale, Hüfte bleibt tief"],
      [BAER, 0.4],
    ],
  ),
  // ------------------------------------------------------------ Seitstütz (linker Unterarm unten)
  seitstuetz_knie: halte("seite", seitBoden({ unten: "knie", senken: 0.06 }), seitBoden({ unten: "knie", handOben: "huefte", w: HAND_HUEFTE }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Ellbogen unter der Schulter, Knie 90 Grad gebeugt, Becken hoch: Kopf bis Knie als Linie." }),
  seitstuetz: halte("seite", seitBoden({ senken: 0.12 }), seitBoden({ handOben: "huefte", w: HAND_HUEFTE }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Ellbogen unter der Schulter, Füße übereinander, Becken hoch, Körper als Linie." }),
  seitstuetz_gestreckt: halte("seite", seitBoden({ stuetz: "hand", senken: 0.18 }), seitBoden({ stuetz: "hand", handOben: "decke", w: ARM_DECKE }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Hand unter der Schulter, Arm gestreckt, oberer Arm zur Decke." }),
  seitstuetz_stern: halte("seite", seitBoden({ stuetz: "hand", handOben: "decke", w: ARM_DECKE }), seitBoden({ stuetz: "hand", beinFrei: true, handOben: "decke", w: { ...ARM_DECKE, huefte_l: [0, 22, 0], knie_l: [2], fuss_l: [-10, 0] } }), { ein: 2, aus: 2, seiten: true, hinweis: "Oberen Arm zur Decke, oberes Bein gestreckt abspreizen: der Körper bildet einen Stern." }),
  seitstuetz_hueftheben: wdh("seite", seitBoden({ senken: 0.1 }), seitBoden({ senken: -0.03 }), 1.0, { aus: 1.6, seiten: true, texte: ["Hüfte über die Linie hinaus hochdrücken", "Hüfte langsam bis knapp über den Boden senken"] }),
  seitstuetz_rotation: wdh("seite", seitBoden({ fussVor: true, handOben: "decke", w: ARM_DECKE }), seitBoden({ fussVor: true, drehFrei: true, handOben: [-0.02, 0.1, 0.5], w: { schulter_l: [70, -40, 0], ellbogen_l: [6, 0], bws: [0, 0, -20], lws: [0, 0, -5], hals: [0, 8, 0] } }), 1.4, {
    aus: 1.4,
    seiten: true,
    texte: ["Oberen Arm unter dem Körper hindurchfädeln, Hüfte bleibt oben", "Wieder aufdrehen, Arm zur Decke"],
  }),
  seitstuetz_rudern: wdh("vorn", seitBoden({ w: { schulter_l: [90, 0, 0], ellbogen_l: [4, 0], ...FAUST } }), seitBoden({ handOben: [0.13, 0.4, 0.47], w: { schulter_l: [-30, 10, 0], ellbogen_l: [100, 0], ...FAUST } }), 1.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Griff zur unteren Brust rudern, Becken bleibt oben", "Arm langsam wieder strecken"],
    hilfsmittel: kabel("hand_l", [0.9, 0.5, 0.6]),
  }),
  // ------------------------------------------------------------ Dead Bug, Bird Dog, Hollow
  dead_bug_fersentippen: folge(
    "seite",
    [
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]) } }), 0.8, "Beine in der Luft, Lendenwirbelsäule am Boden"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]), huefte_l: [FERSE_TIPP, 4, 0] } }), 1.0, "Ein Bein senken, Kniewinkel bleibt, Ferse tippt den Boden"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]) } }), 0.8],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]), huefte_r: [FERSE_TIPP, 4, 0] } }), 1.0, "Andere Ferse"],
    ],
  ),
  dead_bug: folge("seite", [[deadBug(), 0.8, "Arme zur Decke, Beine angewinkelt"], [deadBug(DB_STRECK), 1.6, "Arm und Gegenbein lang machen"], [deadBug(), 1.0], [deadBug(DB_STRECK_2), 1.6, "Andere Seite"], [deadBug(), 1.0]]),
  dead_bug_band: folge("seite", [[deadBug(), 0.8, "Arme gestreckt gegen den Zug des Bands"], [deadBug({ huefte_l: [6, 4, 0], knie_l: [2], fuss_l: [-10, 0] }), 1.6, "Ein Bein lang knapp über den Boden, Arme bleiben"], [deadBug(), 1.0], [deadBug({ huefte_r: [6, 4, 0], knie_r: [2], fuss_r: [-10, 0] }), 1.6, "Anderes Bein"], [deadBug(), 1.0]], {
    hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0, 0.3, -1.4] }],
  }),
  dead_bug_gewicht: folge("seite", [[deadBug(FAUST), 0.8, "Hanteln über den Schultern"], [deadBug({ ...DB_STRECK, ...FAUST }), 1.6, "Arm und Gegenbein lang"], [deadBug(FAUST), 1.0], [deadBug({ ...DB_STRECK_2, ...FAUST }), 1.6, "Andere Seite"], [deadBug(FAUST), 1.0]], { hilfsmittel: KH }),
  bird_dog: folge("seite", [[VIERFUESSLER, 0.8, "Vierfüßlerstand"], [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.6, "Arm und Gegenbein lang strecken"], [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.5, "Halten, Becken waagerecht", true], [VIERFUESSLER, 1.2], [mit(VIERFUESSLER, { g: { schulter_l: [178, 4, 0], ellbogen_l: [0, 90], hand_l: [0, 0], huefte_r: [0, 3, 0], knie_r: [4] } }), 1.6, "Andere Diagonale"], [VIERFUESSLER, 1.2]]),
  bird_dog_crunch: folge(
    "seite",
    [
      [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.2, "Arm und Gegenbein strecken"],
      [BD_CRUNCH, 1.0, "Ellbogen und Knie unter dem Bauch zusammen, Rücken rund"],
      [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.0, "Wieder strecken"],
    ],
    { seiten: true },
  ),
  bird_dog_rudern: wdh("seite", bdRudern(false), bdRudern(true), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Hantel zur Hüfte rudern, Ellbogen dicht am Körper, linkes Bein bleibt lang", "Hantel kontrolliert absenken"],
    hilfsmittel: [{ art: "bank", unter: "knie_r", hoehe: BANK_H, versatz: [0.09, 0.2] }, ...KH_R],
  }),
  hollow_hold: halte("seite", RUECKENLAGE, HOLLOW, { ein: 2, aus: 2, hinweis: "Lendenwirbelsäule fest am Boden, Schultern und gestreckte Beine angehoben." }),
  hollow_rocks: folge("seite", [[HOLLOW, 0.8, "Hollow-Position"], [mit(HOLLOW, { dreh: [-104, 0, 0] }), 0.6, "Nach hinten schaukeln, Füße höher"], [mit(HOLLOW, { dreh: [-79, 0, 0] }), 0.6, "Nach vorn schaukeln, Form bleibt"]]),
  // ------------------------------------------------------------ Am Barren und an der Stange
  l_sitz_dip: halte("seite", barren(), barren({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]) }), { ein: 1.5, aus: 1.5, hinweis: "Im Stütz die gestreckten Beine waagerecht halten.", hilfsmittel: [BARREN] }),
  knieheben_dip: wdh("seite", barren(), barren({ ...B("huefte", [110, 4, 0]), ...B("knie", [110]) }), 1.0, { aus: 1.6, texte: ["Knie zur Brust heben", "Langsam senken"], hilfsmittel: [BARREN] }),
  beinheben_dip: wdh("seite", barren(), barren({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]) }), 1.2, { aus: 1.8, texte: ["Gestreckte Beine bis waagerecht heben", "Langsam senken"], hilfsmittel: [BARREN] }),
  l_sitz_boden: halte("seite", lSitzBoden(false), lSitzBoden(true), {
    ein: 1.5,
    aus: 1.5,
    hinweis: "Hände flach neben der Hüfte, Arme gestreckt, Gesäß und gestreckte Beine vom Boden heben.",
  }),
  l_sitz_haengend: halte("schraeg", HANG, hang({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]) }, -6), { ein: 1.5, aus: 1.5, hinweis: "Im Hang die gestreckten Beine waagerecht halten.", hilfsmittel: [STANGE] }),
  knieheben_haengend: wdh("schraeg", HANG, hang({ ...B("huefte", [110, 4, 0]), ...B("knie", [110]) }, -8), 1.0, { aus: 1.6, texte: ["Knie zur Brust ziehen, nicht schwingen", "Langsam senken"], hilfsmittel: [STANGE] }),
  beinheben_haengend: wdh("schraeg", HANG, hang({ ...B("huefte", [110, 4, 0]), ...B("knie", [4]) }, -14), 1.4, { aus: 1.8, texte: ["Gestreckte Beine nach vorn oben heben", "Langsam senken"], hilfsmittel: [STANGE] }),
  toes_to_bar: wdh("schraeg", HANG, hang({ ...B("huefte", [150, 4, 0]), ...B("knie", [4]), lws: [20, 0, 0], bws: [10, 0, 0] }, -30), 1.4, { aus: 1.8, texte: ["Zehen bis an die Stange", "Langsam senken"], hilfsmittel: [STANGE] }),
  knieheben_haengend_schraeg: folge("schraeg", [[HANG, 0.6, "Hängen"], [hang({ ...B("huefte", [105, 4, 0]), ...B("knie", [110]), lws: [0, 0, 16], bws: [0, 0, 6] }, -8, ["l", "r"], -22), 1.0, "Knie schräg zur rechten Schulter, Becken dreht mit"], [HANG, 0.8], [hang({ ...B("huefte", [105, 4, 0]), ...B("knie", [110]), lws: [0, 0, -16], bws: [0, 0, -6] }, -8, ["l", "r"], 22), 1.0, "Zur anderen Seite"], [HANG, 0.8]], { hilfsmittel: [STANGE] }),
  scheibenwischer_haengend: folge(
    "vorn",
    [
      [hang({ ...B("huefte", [140, 4, 0]), ...B("knie", [4]) }, -30), 1.0, "Beine über Stangenhöhe heben"],
      [hang({ ...B("huefte", [140, 4, 0]), ...B("knie", [4]), lws: [0, 0, 26], bws: [0, 0, 10] }, -30, ["l", "r"], -36), 1.0, "Beine zur rechten Seite schwenken, Oberkörper bleibt zur Stange"],
      [hang({ ...B("huefte", [140, 4, 0]), ...B("knie", [4]), lws: [0, 0, -26], bws: [0, 0, -10] }, -30, ["l", "r"], 36), 1.6, "Über die Mitte zur linken Seite"],
      [HANG, 1.2, "Langsam senken"],
    ],
    { hilfsmittel: [STANGE] },
  ),
  // ------------------------------------------------------------ Crunches und Rückenlage
  crunch: wdh("seite", CRUNCH_UNTEN, crunchOben(), 1.0, { aus: 1.4, texte: ["Oberkörper einrollen, Schulterblätter heben", "Langsam ablegen"] }),
  crunch_gewicht: wdh("seite", mit(RUECKENLAGE_AUF, { g: ARME_VERSCHRAENKT, ziele: HAENDE_BRUST }), crunchOben(ARME_VERSCHRAENKT, HAENDE_BRUST), 1.0, { aus: 1.4, texte: ["Mit der Scheibe auf der Brust einrollen", "Langsam ablegen"], hilfsmittel: [{ art: "hantelscheibe", an: "bws" }] }),
  kabel_crunch: wdh(
    "seite",
    mit(KNIESTAND, { dreh: [16, 0, 0], pos: [0, 0.465, 0], boden: false, g: { ...B("schulter", [150, 20, 0]), ...B("ellbogen", [130, 0]), ...FAUST, ...B("huefte", [16, 4, 0]) } }),
    mit(KNIESTAND, { dreh: [26, 0, 0], pos: [0, 0.46, 0], boden: false, g: { ...B("schulter", [110, 20, 0]), ...B("ellbogen", [130, 0]), ...FAUST, ...B("huefte", [28, 4, 0]), lws: [26, 0, 0], bws: [36, 0, 0], hals: [20, 0, 0] } }),
    1.2,
    { aus: 1.6, texte: ["Oberkörper mit dem Seil einrollen, Ellbogen Richtung Oberschenkel", "Langsam aufrichten, bis der Bauch gedehnt ist"], hilfsmittel: kabel("haende", [0, 2.1, 0.75]) },
  ),
  crunch_ball: wdh("seite", ballCrunch(false), ballCrunch(true), 1.2, {
    aus: 1.6,
    texte: ["Oberkörper über den Ball einrollen, bis der Bauch maximal verkürzt ist", "Langsam über den Ball zurück in die Dehnung"],
    hilfsmittel: [{ art: "ball", unter: "ruecken" }],
  }),
  reverse_crunch: wdh("seite", mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]) } }), mit(RUECKENLAGE, { dreh: [-108, 0, 0], g: { ...B("huefte", [118, 4, 0]), ...B("knie", [100]), ...B("schulter", [-6, 14, 0]), bws: [14, 0, 0] } }), 1.2, {
    aus: 1.6,
    texte: ["Becken einrollen, Hüfte leicht vom Boden", "Langsam abrollen"],
  }),
  mcgill_curl_up: wdh(
    "seite",
    mit(RUECKENLAGE, { g: { huefte_l: [60, 4, 0], knie_l: [100], fuss_l: [10, 0], ...B("schulter", [-10, 30, 0]), ...B("ellbogen", [60, 0]), ...B("hand", [0, 0]) }, ziele: unterRuecken(false), pos: [0, 0.182, 0], boden: false }),
    mit(RUECKENLAGE, { g: { huefte_l: [60, 4, 0], knie_l: [100], fuss_l: [10, 0], ...B("schulter", [-10, 30, 0]), ...B("ellbogen", [60, 0]), ...B("hand", [0, 0]), bws: [12, 0, 0], hals: [2, 0, 0] }, ziele: unterRuecken(true), pos: [0, 0.182, 0], boden: false }),
    0.8,
    { aus: 1.2, halten: 8, texte: ["Kopf und Schultern minimal heben, Hals lang", "Ablegen"] },
  ),
  beinheben_liegend: wdh("seite", mit(RUECKENLAGE, { g: { ...B("huefte", [10, 4, 0]), ...B("schulter", [0, 14, 0]) } }), mit(RUECKENLAGE, { g: { ...B("huefte", [88, 4, 0]), ...B("schulter", [0, 14, 0]) } }), 1.4, {
    aus: 2.0,
    texte: ["Gestreckte Beine heben, unterer Rücken bleibt am Boden", "Langsam bis knapp über den Boden senken"],
  }),
  v_up: wdh("seite", mit(RUECKENLAGE, { g: { ...B("schulter", [170, 8, 0]), ...B("ellbogen", [4, 90]) } }), H({ ...B("huefte", [125, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]), ...B("schulter", [70, 8, 0]), ...B("ellbogen", [4, 90]), bws: [10, 0, 0] }, [-30, 0, 0], { pos: [0, 0.12, 0], boden: false, ziele: { hand_l: { pos: [0.09, 0.61, 0.23] }, hand_r: { pos: [-0.09, 0.61, 0.23] } } }), 1.0, {
    aus: 1.6,
    texte: ["Arme und Beine gleichzeitig heben, Hände zu den Füßen", "Langsam ablegen"],
  }),
  schraeger_crunch: wdh("seite", schraegCrunch(false), schraegCrunch(true), 1.0, { aus: 1.4, seiten: true, texte: ["Schulter zum gegenüberliegenden Knie", "Langsam ablegen"] }),
  fahrrad_crunch: folge(
    "seite",
    [
      [crunchOben({ huefte_r: [100, 4, 0], knie_r: [110], huefte_l: [30, 4, 0], knie_l: [4], bws: [30, 0, -26] }), 0.8, "Rechtes Knie zur Brust, linke Schulter zum rechten Knie, linkes Bein lang"],
      [crunchOben({ huefte_l: [100, 4, 0], knie_l: [110], huefte_r: [30, 4, 0], knie_r: [4], bws: [30, 0, 26] }), 0.8, "Seite wechseln, Schultern bleiben oben"],
    ],
  ),
  scheibenwischer_liegend_rumpf: folge(
    "oben",
    [
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 80, 0]) } }), 0.8, "Beine angewinkelt in der Luft, Arme seitlich"],
      [mit(RUECKENLAGE, { dreh: [-90, -50, 0], g: { ...TISCH, ...B("schulter", [0, 80, 0]), lws: [0, 0, 30], bws: [0, 0, 20] } }), 1.6, "Beine zur Seite kippen, Schultern bleiben am Boden"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 80, 0]) } }), 1.2],
      [mit(RUECKENLAGE, { dreh: [-90, 50, 0], g: { ...TISCH, ...B("schulter", [0, 80, 0]), lws: [0, 0, -30], bws: [0, 0, -20] } }), 1.6, "Zur anderen Seite"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 80, 0]) } }), 1.2],
    ],
  ),
  // ------------------------------------------------------------ Rollouts und Gleiten
  rollout_ball: wdh(
    "seite",
    mit(KNIESTAND, { dreh: [40, 0, 0], g: { ...B("huefte", [40, 4, 0]), ...B("schulter", [80, 8, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]) } }),
    mit(KNIESTAND, { dreh: [62, 0, 0], g: { ...B("huefte", [20, 4, 0]), ...B("knie", [48]), ...B("schulter", [130, 8, 0]), ...B("ellbogen", [70, 90]), ...B("hand", [0, 0]) } }),
    2.0,
    { aus: 1.6, texte: ["Ball mit den Unterarmen nach vorn rollen", "Zurückziehen, Rumpf fest"], hilfsmittel: [{ art: "gymnastikball", an: "haende" }] },
  ),
  rollout_kniend: wdh(
    "schraeg",
    mit(KNIESTAND, { dreh: [50, 0, 0], g: { ...B("huefte", [50, 6, 0]), ...B("schulter", [60, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }),
    mit(KNIESTAND, { dreh: [78, 0, 0], g: { ...B("huefte", [28, 6, 0]), ...B("knie", [50]), ...B("schulter", [160, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }),
    2.0,
    { aus: 1.6, texte: ["Stange weit nach vorn rollen, Rücken bleibt gerade", "Zurückziehen"], hilfsmittel: [{ art: "langhantel", von: "hand_l", bis: "hand_r" }] },
  ),
  rollout_stehend: wdh(
    "schraeg",
    H({ ...B("huefte", [100, 6, 0]), ...B("knie", [6]), ...B("schulter", [100, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }, [100, 0, 0]),
    H({ ...B("huefte", [10, 6, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]), ...B("zehen", [50]), ...B("schulter", [170, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }, [78, 0, 0]),
    2.4,
    { aus: 2.0, texte: ["Aus dem Stand weit nach vorn ausrollen", "Zurück in den Stand"], hilfsmittel: [{ art: "langhantel", von: "hand_l", bis: "hand_r" }] },
  ),
  pike_gleitscheiben: wdh("seite", STUETZ, H({ ...B("huefte", [100, 4, 0]), ...B("knie", [2]), ...B("fuss", [20, 0]), ...B("schulter", [150, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), hals: [-5, 0, 0] }, [130, 0, 0]), 1.4, {
    aus: 1.6,
    texte: ["Gestreckte Beine zu den Händen ziehen, Hüfte hoch", "Zurück in den Stütz"],
    hilfsmittel: [{ art: "gleitscheibe", an: "fuss_l" }, { art: "gleitscheibe", an: "fuss_r" }],
  }),
  // ------------------------------------------------------------ Seitbeugen, Tragen
  seitbeugen_kh: wdh("vorn", mit(STAND, { g: { ...SEITE_R, ...LOCKER_L } }), mit(STAND, { g: { ...SEITE_R, ...LOCKER_L, lws: [0, -12, 0], bws: [0, -14, 0] } }), 1.2, {
    aus: 1.4,
    seiten: true,
    texte: ["Zur Seite der Hantel neigen", "Über die Gegenseite aufrichten"],
    hilfsmittel: KH_R,
  }),
  seitbeugen_kabel: wdh("vorn", mit(STAND, { g: { ...SEITE_R, ...LOCKER_L } }), mit(STAND, { g: { ...SEITE_R, ...LOCKER_L, lws: [0, 12, 0], bws: [0, 14, 0] } }), 1.2, {
    aus: 1.4,
    seiten: true,
    texte: ["Gegen den Zug zur anderen Seite neigen", "Langsam zurück"],
    hilfsmittel: kabel("hand_r", [-0.6, 0.12, 0]),
  }),
  koffer_tragen: gehen({ ...SEITE_R, ...LOCKER_L }, KH_R, 20, "Gewicht in einer Hand, aufrecht gehen"),
  koffer_marsch: gehen({ ...SEITE_R, ...LOCKER_L }, KH_R, 90, "Knie bis Hüfthöhe, Rumpf neigt nicht"),
  rack_tragen_einarmig: gehen({ ...FRONT_RACK_R, ...LOCKER_L, ...FAUST }, KH_R, 20, "Gewicht vor der Schulter, aufrecht gehen"),
  rack_tragen: gehen({ ...FRONT_RACK_L, ...FRONT_RACK_R, ...FAUST }, KH, 20, "Zwei Gewichte vor den Schultern"),
  kellner_tragen: gehen({ ...UEBERKOPF_R, ...LOCKER_L, ...FAUST }, KH_R, 20, "Arm gestreckt über dem Kopf"),
  tragen_gemischt: gehen({ ...UEBERKOPF_R, schulter_l: [2, 8, 0], ellbogen_l: [6, HAMMER], ...FAUST }, KH, 20, "Ein Gewicht oben, eines unten"),
  // ------------------------------------------------------------ Pallof Press
  pallof_kabel: pallof(pallofStand, KABEL_SEITE),
  pallof_band: pallof(pallofStand, BAND_SEITE),
  pallof_halbkniend: pallof(halbknie, kabel("haende", [0.9, 0.8, 0.2])),
  pallof_kniend: pallof(kniend, kabel("haende", [0.9, 0.8, 0.2])),
  pallof_iso: halte("schraeg", pallofStand(PALLOF_BRUST), pallofStand(PALLOF_VOR), { ein: 1.2, aus: 1.4, seiten: true, hinweis: "Arme gestreckt vor der Brust halten, der Zug will Dich drehen.", hilfsmittel: KABEL_SEITE }),
  pallof_ueberkopf: folge(
    "schraeg",
    [
      [pallofStand(PALLOF_BRUST), 0.8, "Griff vor der Brust"],
      [pallofStand(PALLOF_VOR), 1.0, "Nach vorn drücken"],
      [pallofStand(PALLOF_HOCH), 1.2, "Gestreckt über den Kopf"],
      [pallofStand(PALLOF_VOR), 1.0, "Zurück nach vorn"],
      [pallofStand(PALLOF_BRUST), 1.0, "Zur Brust"],
    ],
    { seiten: true, hilfsmittel: KABEL_SEITE },
  ),
  pallof_walkout: folge(
    "schraeg",
    [
      [pallofStand(PALLOF_VOR), 0.8, "Arme gestreckt vor der Brust"],
      [H({ huefte_l: [12, 4, -6], huefte_r: [12, 20, -6], ...B("knie", [16]), ...B("fuss", [6, 0]), ...PALLOF_VOR }, [6, 0, 0]), 1.0, "Seitlich vom Kabel weg"],
      [pallofStand(PALLOF_VOR), 1.0, "Nachstellen, Rumpf dreht nicht"],
    ],
    { seiten: true, hilfsmittel: KABEL_SEITE },
  ),
  // ------------------------------------------------------------ Holzhacker und Rotation
  chop_halbkniend: hacken(halbknie, HACK_OBEN, HACK_UNTEN, [0.7, 2.0, 0.3], ["Stange diagonal von oben nach unten ziehen", "Kontrolliert zurück"]),
  lift_halbkniend: hacken(halbknie, HACK_UNTEN, HACK_OBEN, [-0.7, 0.12, 0.3], ["Stange diagonal von unten nach oben drücken", "Kontrolliert zurück"]),
  holzhacker_kabel: hacken(STAND_HACK, HACK_OBEN, HACK_UNTEN, [0.7, 2.0, 0.3], ["Griff diagonal nach unten ziehen, Rumpf dreht", "Kontrolliert zurück"]),
  holzhacker_kabel_tief: hacken(STAND_HACK, HACK_UNTEN, HACK_OBEN, [-0.7, 0.12, 0.3], ["Griff diagonal nach oben über die Schulter", "Kontrolliert zurück"]),
  holzhacker_band: hacken(STAND_HACK, HACK_OBEN, HACK_UNTEN, [0.7, 2.0, 0.3], ["Band diagonal nach unten ziehen", "Kontrolliert zurück"], "band"),
  kabel_rotation: wdh("oben", pallofStand({ ...ROTATION_ARME, ...dreh(30) }), pallofStand({ ...ROTATION_ARME, ...dreh(-50) }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Gestreckte Arme waagerecht vom Kabel weg drehen", "Kontrolliert zurück"],
    hilfsmittel: kabel("haende", ROLLE_SEITE),
  }),
  kabel_rotation_halbkniend: wdh("oben", halbknie({ ...ROTATION_ARME, ...dreh(30) }), halbknie({ ...ROTATION_ARME, ...dreh(-50) }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Brustkorb dreht, Becken bleibt fest", "Kontrolliert zurück"],
    hilfsmittel: kabel("haende", [0.9, 0.8, 0.2]),
  }),
  rotation_kh: folge("oben", [[pallofStand(PALLOF_BRUST), 0.6, "Gewicht vor der Brust"], [pallofStand({ ...PALLOF_BRUST, ...dreh(50) }), 1.0, "Oberkörper zur einen Seite drehen"], [pallofStand({ ...PALLOF_BRUST, ...dreh(-50) }), 1.6, "Zur anderen Seite"], [pallofStand(PALLOF_BRUST), 1.0]], { hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  russian_twist: folge(
    "schraeg",
    [
      [H({ ...B("huefte", [100, 6, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]), ...PALLOF_BRUST, bws: [10, 0, 0] }, [-40, 0, 0]), 0.6, "Zurückgelehnt, Ball vor der Brust"],
      [H({ ...B("huefte", [100, 6, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]), ...PALLOF_BRUST, bws: [10, 0, 40], lws: [0, 0, 10] }, [-40, 0, 0]), 0.8, "Ball zur einen Seite"],
      [H({ ...B("huefte", [100, 6, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]), ...PALLOF_BRUST, bws: [10, 0, -40], lws: [0, 0, -10] }, [-40, 0, 0]), 1.2, "Zur anderen Seite"],
    ],
    { hilfsmittel: [{ art: "medizinball", an: "haende" }] },
  ),
  // ------------------------------------------------------------ Golf
  golf_haltung_wand: halte("seite", mit(STAND, { g: GOLF_ARME }), golf(), { ein: 2, aus: 2, hinweis: "Gesäß leicht an der Wand, Rücken lang, Golfhaltung halten.", hilfsmittel: [{ art: "wand", an: "gesaess", richtung: "hinten" }] }),
  golf_kabel_rotation_ansprechhaltung: wdh("vorn", golf(dreh(20)), golf(dreh(-40)), 1.0, { aus: 1.6, seiten: true, texte: ["In der Golfhaltung gegen den Zug drehen", "Kontrolliert zurück"], hilfsmittel: kabel("haende", [0.9, 0.9, 0.2]) }),
  golf_kabel_rueckschwung: wdh("vorn", golf(), golf(RUECKSCHWUNG), 1.2, { aus: 1.6, seiten: true, texte: ["In den Rückschwung drehen", "Zurück in die Ansprechhaltung"], hilfsmittel: kabel("haende", [0.8, 0.12, 0.3]) }),
  golf_kabel_abschwung: wdh("vorn", golf(RUECKSCHWUNG), golf(TREFFMOMENT), 1.0, { aus: 1.8, seiten: true, texte: ["Aus dem Rückschwung bis zum Treffmoment ziehen", "Zurück in den Rückschwung"], hilfsmittel: kabel("haende", [-0.9, 1.6, 0.2]) }),
  golf_holzhacker_ausfallschritt: hacken((w) => H({ huefte_l: [40, 8, 0], knie_l: [40], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [20], fuss_r: [-20, 0], ...w }, [10, 0, 0]), HACK_OBEN, HACK_UNTEN, [0.7, 2.0, -0.2], ["Diagonal von oben hinten nach unten vorn", "Kontrolliert zurück"]),
  golf_lift_ausfallschritt: hacken((w) => H({ huefte_l: [40, 8, 0], knie_l: [40], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [20], fuss_r: [-20, 0], ...w }, [10, 0, 0]), HACK_UNTEN, HACK_OBEN, [-0.7, 0.12, 0.3], ["Diagonal von unten nach oben über die Schulter", "Kontrolliert zurück"]),
  golf_kabel_rudern_rotation: wdh(
    "oben",
    H({ huefte_l: [30, 8, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [16], fuss_r: [-20, 0], schulter_r: [88, 4, 0], ellbogen_r: [4, 0], ...LOCKER_L, ...FAUST, ...dreh(20) }, [10, 0, 0]),
    H({ huefte_l: [30, 8, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [16], fuss_r: [-20, 0], schulter_r: [40, 20, 0], ellbogen_r: [100, 0], ...LOCKER_L, ...FAUST, ...dreh(-30) }, [10, 0, 0]),
    1.0,
    { aus: 1.6, seiten: true, texte: ["Rudern, Oberkörper dreht mit", "Arm wieder strecken"], hilfsmittel: kabel("hand_r", [0, 1.1, 0.9]) },
  ),
  golf_pallof_ansprechhaltung: pallof((arme) => golf(arme), KABEL_SEITE),
  golf_pallof_einbeinig: pallof((arme) => H({ huefte_l: [12, 6, 0], knie_l: [16], fuss_l: [6, 0], huefte_r: [60, 6, 0], knie_r: [80], ...arme }, [6, 0, 0]), KABEL_SEITE),
  golf_iso_rueckschwung: halte("vorn", golf(), golf(RUECKSCHWUNG), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Position am Ende des Rückschwungs gegen den Zug halten.", hilfsmittel: [{ art: "bandanker", von: "haende", anker: [-0.9, 1.4, 0.2] }] }),
  golf_iso_treffmoment: halte("vorn", golf(), golf(TREFFMOMENT), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Treffmoment halten, das Band zieht zur Rückschwungseite.", hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0.9, 0.9, 0.2] }] }),
  golf_vorderes_bein_stemmen_band: wdh("vorn", golf(), golf({ ...TREFFMOMENT, ...DURCHSCHWUNG }), 1.2, { aus: 1.6, seiten: true, texte: ["Vordere Hüfte nach hinten drehen, gegen den Zug stemmen", "Zurück"], hilfsmittel: [{ art: "bandanker", von: "becken", anker: [-0.9, 0.9, 0] }] }),
  golf_hueftdrehung_band_rueckschwung: wdh("vorn", golf(), golf({ ...RUECKSCHWUNG, huefte_l: [50, 6, -10], huefte_r: [40, 6, 20] }), 1.2, { aus: 1.6, seiten: true, texte: ["Kontrolliert in die hintere Hüfte drehen", "Zurück"], hilfsmittel: [{ art: "bandanker", von: "becken", anker: [0.9, 0.9, 0] }] }),
  golf_beckenrotation_band: wdh("vorn", golf(), golf({ huefte_l: [40, 6, 20], huefte_r: [50, 6, -10], ...dreh(-20) }), 1.0, { aus: 1.6, seiten: true, texte: ["Becken gegen den Zug drehen, Oberkörper bleibt", "Zurück"], hilfsmittel: [{ art: "bandanker", von: "becken", anker: [-0.9, 0.9, 0] }] }),
  golf_ball_rotation_bruecke: wdh(
    "vorn",
    H({ ...B("huefte", [0, 8, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...B("schulter", [90, -10, 0]), ...B("ellbogen", [4, 0]), ...FAUST, hals: [20, 0, 0] }, [-90, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    H({ ...B("huefte", [0, 8, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...B("schulter", [90, -10, 0]), ...B("ellbogen", [4, 0]), ...FAUST, hals: [20, 0, 0], ...dreh(60) }, [-90, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    1.4,
    { aus: 1.4, seiten: true, texte: ["Schultern auf dem Ball, Oberkörper zur Seite drehen", "Zurück zur Mitte"], hilfsmittel: [{ art: "ball", unter: "bws" }] },
  ),
  // ------------------------------------------------------------ Reha
  reha_bauchspannung_sitz: halte("seite", STUHLSITZ, mit(STUHLSITZ, { g: { ...B("schulter", [40, 8, 0]), ...B("ellbogen", [20, 90]), ...B("hand", [40, 0]), bws: [4, 0, 0] } }), {
    ein: 1,
    aus: 1.5,
    hinweis: "Aufrecht auf der Stuhlkante, Bauch anspannen, Hände gegen die Knie drücken.",
    hilfsmittel: [{ art: "stuhl", unter: "gesaess", hoehe: 0.45 }],
  }),
}
