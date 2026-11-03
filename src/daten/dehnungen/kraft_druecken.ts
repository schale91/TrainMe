// Drücken mit Zielpunkten: Bankdrücken flach und schräg, Floor Press, Liegestütze und Dips. Die Füße stehen dort,
// wo die Ausführung sie hinstellt, die Hände greifen in der beschriebenen Breite, die Stange kommt unten an die
// beschriebene Stelle der Brust und die Unterarme stehen senkrecht unter ihr. Die Gelenkwinkel rechnet die Figur
// (src/ui/dehnfigur.ts, loese); geprüft wird mit werkzeuge/messen.html gegen werkzeuge/soll.ts.
//
// Rahmen "schultern": Mitte der Schultergelenke, x nach links, y den Rumpf hinauf (im Liegen zum Kopf), z nach vorn
// (im Liegen nach oben).

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, wdh } from "./basis"
import { FAUST, FLACHBANK, HAMMER, KH, KH_R, LH, OBERGRIFF, UNTERGRIFF } from "./kraftbasis"
import { HUEFTE_X, KNOECHEL_Y, KNOECHEL_Z, OBER, OBERARM, SCHULTER_X, UNTER, UNTERARM, type Ziele, beinStart, ellbogenKreis, fuesse, rad } from "./ziele"

type P3 = [number, number, number]
const DRUECKEN: [string, string] = ["Langsam zur Brust senken", "Kraftvoll hochdrücken"]

// ---------------------------------------------------------------- Liegen auf der Bank
interface Lage {
  /** Neigung des Beckens: -90 flach liegend, -60 auf der Schrägbank (Rücken 30 Grad) */
  kipp: number
  /** Höhe des Beckens */
  y: number
  /** Fersen in Blickrichtung (zum Fußende der Bank) */
  fersenZ: number
  /** halber Fersenabstand */
  breit: number
  /** Larsen Press: Beine gestreckt in der Luft */
  larsen?: boolean
  /** auf dem Boden liegend */
  boden?: boolean
  /** Gerät statt der passenden Bank */
  geraet?: Hilfsmittel[]
}
/** Flachbank: Füße etwas breiter als hüftbreit, Fersen etwa unter den Knien */
const FLACH: Lage = { kipp: -90, y: 0.56, fersenZ: 0.3, breit: 0.2 }
/** Hüftgelenk im Rahmen der Welt aus Becken und Kippung */
const huefte = (l: Lage): [number, number] => [l.y + Math.cos(rad(l.kipp)) * -0.01 + Math.sin(rad(l.kipp)) * 0.003, Math.sin(rad(l.kipp)) * -0.01 + Math.cos(rad(l.kipp)) * -0.003]
const beineLage = (l: Lage): { w: Winkel; z: Ziele } => {
  // Larsen: Beine gestreckt nach vorn unten, Fersen knapp über dem Boden
  if (l.larsen) return { w: { ...B("huefte", [-26, 8, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]) }, z: {} }
  const [hy, hz] = huefte(l)
  return { w: beinStart(hy, hz, l.kipp, KNOECHEL_Y + 0.022, l.fersenZ + KNOECHEL_Z, 16), z: fuesse(l.breit, 15, l.fersenZ) }
}
/** Weltrichtung oben im Rahmen der Schultern */
const oben = (kipp: number): P3 => [0, Math.cos(rad(kipp)), -Math.sin(rad(kipp))]
const runter = (kipp: number): P3 => oben(kipp).map((v) => -v) as P3
const S_L: P3 = [SCHULTER_X, 0, 0]
const spiegel = (p: P3): P3 => [-p[0], p[1], p[2]]
type Arm = "l" | "r" | "beide"
const armZiele = (hand: P3, ell: P3, arm: Arm): Ziele => {
  const z: Ziele = {}
  if (arm !== "r") Object.assign(z, { hand_l: { pos: hand, bezug: "schultern" }, ellbogen_l: { pos: ell, bezug: "schultern" } })
  if (arm !== "l") Object.assign(z, { hand_r: { pos: spiegel(hand), bezug: "schultern" }, ellbogen_r: { pos: spiegel(ell), bezug: "schultern" } })
  return z
}
/** Arme gestreckt senkrecht über den Schultern, Hände bei ±x, y zum Becken (-) hin versetzt */
const armeOben = (x: number, kipp: number, arm: Arm = "beide", y = 0, lang = 0.499): Ziele => {
  const u = oben(kipp)
  const dx = x - SCHULTER_X
  const l = -y * u[1] + Math.sqrt(Math.max(0, y * y * u[1] * u[1] - (dx * dx + y * y - lang * lang)))
  const hand: P3 = [x, y + u[1] * l, u[2] * l]
  return armZiele(hand, ellbogenKreis(S_L, hand, [1, 0, -0.3]), arm)
}
/** Unten: Hand (Stange) bei (x, y, z) im Rahmen, Unterarm senkrecht darunter */
const armeUnten = (x: number, y: number, z: number, kipp: number, arm: Arm = "beide", aussen = 0): Ziele => {
  const hand: P3 = [x, y, z]
  const r = runter(kipp)
  return armZiele(hand, ellbogenKreis(S_L, hand, [aussen, r[1], r[2]]), arm)
}
const ARM_OBEN = (dreh: number): Winkel => ({ ...B("schulter", [90, 12, 0]), ...B("ellbogen", [6, dreh]) })
const ARM_UNTEN = (dreh: number): Winkel => ({ ...B("schulter", [20, 60, 0]), ...B("ellbogen", [100, dreh]) })
const liegen = (l: Lage, arme: Ziele, w: Winkel): Haltung => {
  const b = beineLage(l)
  return H({ ...b.w, ...FAUST, hals: [8, 0, 0], ...w }, [l.kipp, 0, 0], { pos: [0, l.y, 0], boden: false, ziele: { ...b.z, ...arme } })
}

// ---------------------------------------------------------------- Bankdrücken
interface Bank {
  /** halber Griffabstand oben (Mitte der Hand) */
  griff: number
  /** halber Griffabstand unten, wenn anders (Kurzhanteln neben der Brust) */
  griffUnten?: number
  /** Last unten im Rahmen der Schultern: y den Rumpf hinauf (negativ zum Becken), z über dem Schultergelenk */
  unten: [number, number]
  /** Hand oben zum Becken hin versetzt (Kurzhanteln über der Brust) */
  obenY?: number
  dreh?: number
  lage?: Lage
  /** Ellbogen unten weiter nach außen statt genau unter die Hand (wenn der Unterarm nicht senkrecht stehen kann) */
  aussen?: number
  /** nur ein Arm drückt (rechts), der andere hält die Bank */
  einarmig?: boolean
}
/** freie Hand hält seitlich die Bank */
const FREI_BANK: Winkel = { schulter_l: [10, 40, 0], ellbogen_l: [30, 0] }
const bankHaltungen = (b: Bank) => {
  const l = b.lage ?? FLACH, dreh = b.dreh ?? OBERGRIFF
  const arm: Arm = b.einarmig ? "r" : "beide"
  const frei = b.einarmig ? FREI_BANK : {}
  const oz = armeOben(b.griff, l.kipp, arm, b.obenY ?? 0)
  return {
    o: liegen(l, oz, { ...ARM_OBEN(dreh), ...frei }),
    u: liegen(l, armeUnten(b.griffUnten ?? b.griff, b.unten[0], b.unten[1], l.kipp, arm, b.aussen), { ...ARM_UNTEN(dreh), ...frei }),
  }
}
const bankGeraet = (l: Lage): Hilfsmittel[] => (l.boden ? [] : l.kipp === -90 ? [FLACHBANK] : [SCHRAEGBANK])
const bank = (b: Bank, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung => {
  const { o, u } = bankHaltungen(b)
  const l = b.lage ?? FLACH
  return wdh("schraeg", o, u, 2.0, { aus: 1.3, texte: DRUECKEN, hilfsmittel: [...hilfsmittel, ...(l.geraet ?? bankGeraet(l))], ...(b.einarmig ? { seiten: true } : {}), ...extra })
}
const RACK: Hilfsmittel = { art: "rack", an: "kopf", haken: 1.2, ablage: 0.78 }
const RACK_SCHRAEG: Hilfsmittel = { art: "rack", an: "kopf", haken: 1.35 }
const SCHRAEGBANK: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }

/** Langhantel etwas breiter als schulterbreit, unten auf der unteren Brust, Höhe des Brustbeins */
const LH_BANK: Bank = { griff: 0.27, unten: [-0.1, 0.145] }
/** Eng: etwa schulterbreit, Ellbogen nah am Körper */
const ENG: Bank = { griff: 0.18, unten: [-0.08, 0.15] }
/** Kurzhanteln: oben eine Handbreit auseinander über der Brust, unten seitlich neben der Brust */
const KH_BANK: Bank = { griff: 0.165, obenY: -0.03, griffUnten: 0.25, unten: [-0.1, 0.1] }
/** Neutralgriff: Hanteln parallel, Ellbogen streifen fast den Oberkörper */
const KH_NEUTRAL: Bank = { griff: 0.17, obenY: -0.03, griffUnten: 0.2, unten: [-0.14, 0.13], dreh: HAMMER }
/** Squeeze Press: Hanteln berühren sich über der Brust und kommen gemeinsam zur Brust */
const SQUEEZE: Bank = { griff: 0.06, obenY: -0.05, unten: [-0.1, 0.2], dreh: HAMMER }

/** Schrägbank 30 Grad: Becken 60 Grad zurück, Füße fest vor der Bank */
const SCHRAEG30: Lage = { kipp: -60, y: 0.585, fersenZ: 0.36, breit: 0.2 }
const SCHRAEG18: Lage = { kipp: -72, y: 0.585, fersenZ: 0.34, breit: 0.2 }
/** obere Brust knapp unter dem Schlüsselbein */
const LH_SCHRAEG: Bank = { griff: 0.27, unten: [-0.03, 0.095], aussen: 0.9, lage: SCHRAEG30 }
const ENG_SCHRAEG: Bank = { griff: 0.18, unten: [-0.04, 0.1], aussen: 0.4, lage: SCHRAEG30 }
const KH_SCHRAEG: Bank = { griff: 0.165, obenY: -0.02, griffUnten: 0.26, unten: [0.03, 0.1], lage: SCHRAEG30 }
const SQUEEZE_SCHRAEG: Bank = { griff: 0.06, obenY: -0.04, unten: [-0.04, 0.14], dreh: HAMMER, lage: SCHRAEG30 }

/** Floor Press: Rücken am Boden, Knie angewinkelt, unten liegen die Oberarme 45 Grad abgespreizt am Boden */
const BODEN: Lage = { kipp: -90, y: 0.118, fersenZ: 0.42, breit: 0.19, boden: true }
const FLOOR: Bank = { griff: 0.28, unten: [-0.15, 0.24], lage: BODEN }
const FLOOR_KH: Bank = { griff: 0.2, obenY: -0.03, griffUnten: 0.28, unten: [-0.15, 0.24], lage: BODEN }

/** Larsen Press: Beine gestreckt, Fersen knapp über dem Boden; die Bank endet unter dem Gesäß */
const LARSEN: Lage = { ...FLACH, larsen: true, geraet: [{ art: "bank", unter: "bws", hoehe: 0.45, versatz: [0, -0.25] }] }

const abwechselnd = (b: Bank, hilfsmittel: Hilfsmittel[]): Dehnung => {
  const { o, u } = bankHaltungen(b)
  const halb = (s: "l" | "r"): Haltung => {
    const andere = s === "l" ? "r" : "l"
    const g = { ...u.g, [`schulter_${andere}`]: o.g[`schulter_${andere}`], [`ellbogen_${andere}`]: o.g[`ellbogen_${andere}`] }
    return { ...u, g, ziele: { ...u.ziele, [`hand_${andere}`]: o.ziele![`hand_${andere}`], [`ellbogen_${andere}`]: o.ziele![`ellbogen_${andere}`] } }
  }
  return folge("seite", [[halb("l"), 2.0, "Links senken, rechts bleibt oben"], [o, 1.3, "Links hochdrücken"], [halb("r"), 2.0, "Rechts senken, links bleibt oben"], [o, 1.3, "Rechts hochdrücken"]], {
    hilfsmittel: [...hilfsmittel, FLACHBANK],
  })
}


// ---------------------------------------------------------------- Stütz: der Körper als gerade Linie
// Seitenebene (y, z), Kopf in Blickrichtung +z. beta: Körperlinie gegen die Waagerechte; das Becken ist um 90 - beta
// gekippt. Gerechnet wird vom Drehpunkt (Ballen am Boden oder Knie) über Knöchel, Knie und Hüfte bis zur Schulter.
type YZ = [number, number]
const dreheYZ = (th: number, p: YZ): YZ => [Math.cos(rad(th)) * p[0] - Math.sin(rad(th)) * p[1], Math.sin(rad(th)) * p[0] + Math.cos(rad(th)) * p[1]]
/** Hüft- und Schultergelenk im Rahmen des Beckens (gemessen) */
const HUEFTE_LOKAL: YZ = [-0.01, -0.003]
const SCHULTER_LOKAL: YZ = [0.366, -0.004]
/** Handgelenk über und hinter der Handfläche, wenn die Hand flach am Boden liegt (Finger nach vorn) */
const HANDGELENK: P3 = [0, 0.016, -0.088]
/** Ellbogen bis Handgelenk */
const UNTERARM_GELENK = 0.195
interface Linie {
  beta: number
  becken: YZ
  huefte: YZ
  knie: YZ
  knoechel: YZ
  schulter: YZ
  /** untere Brust (Haut) */
  brust: YZ
  /** Nasenspitze */
  nase: YZ
}
const linie = (beta: number, dreh: YZ, art: "zehen" | "knie"): Linie => {
  const u: YZ = [Math.sin(rad(beta)), Math.cos(rad(beta))]
  // Brustseite zeigt zum Boden
  const f: YZ = [-Math.cos(rad(beta)), Math.sin(rad(beta))]
  const add = (a: YZ, b: YZ, k = 1): YZ => [a[0] + b[0] * k, a[1] + b[1] * k]
  let knie: YZ, knoechel: YZ
  if (art === "zehen") {
    // Ballen vor und unter dem Knöchel, Fuß rechtwinklig zum Schienbein
    const w = rad(54)
    const ab: YZ = [0.0716 * (Math.cos(w) * -u[0] + Math.sin(w) * f[0]), 0.0716 * (Math.cos(w) * -u[1] + Math.sin(w) * f[1])]
    knoechel = add(dreh, ab, -1)
    knie = add(knoechel, u, UNTER)
  } else {
    knie = dreh
    knoechel = add(knie, u, -UNTER)
  }
  const huefte = add(knie, u, OBER)
  const th = 90 - beta
  const becken = add(huefte, dreheYZ(th, HUEFTE_LOKAL), -1)
  const schulter = add(becken, dreheYZ(th, SCHULTER_LOKAL))
  return { beta, becken, huefte, knie, knoechel, schulter, brust: add(add(schulter, u, -0.1), f, 0.14), nase: add(add(schulter, u, 0.19), f, 0.12) }
}
/** beta so, dass bedingung(linie) = 0 (steigt mit beta) */
const suche = (bed: (l: Linie) => number, dreh: YZ, art: "zehen" | "knie", von = -40, bis = 80): Linie => {
  let a = von, b = bis
  for (let i = 0; i < 50; i++) {
    const m = (a + b) / 2
    if (bed(linie(m, dreh, art)) > 0) b = m
    else a = m
  }
  return linie((a + b) / 2, dreh, art)
}
interface Stuetz {
  /** halber Handabstand */
  hand: number
  /** Höhe der Stützfläche der Hände (Box, Erhöhung) */
  handHoch?: number
  /** Hände vor (+) oder hinter (-) den Schultern in der oberen Haltung (Handgelenk) */
  handVor?: number
  /** Drehpunkt: Ballen (Zehen) oder Knie */
  art?: "zehen" | "knie"
  /** Höhe der Stützfläche der Füße (Box) */
  fussHoch?: number
  /** halber Abstand der Füße */
  fuss?: number
  /** Brust unten über dem Boden bzw. über der Stützfläche der Hände */
  brustUnten?: number
  /** Ellbogen unten: Richtung nach außen (sonst nach hinten) */
  aussen?: number
  /** Becken unten seitlich versetzt (Archer) */
  seitlich?: number
  /** Unterarm gedreht (90 = Finger nach vorn) */
  dreh?: number
  /** nur diese Hand stützt */
  einarmig?: "l" | "r"
  /** Handflächenmarke über der Stützfläche, wenn der Unterarm stark schräg steht (Finger sonst im Boden) */
  palme?: number
}
/** Handflächenmarke über der Stützfläche, wenn die Hand flach aufliegt (gemessen) */
const PALME_Y = 0.055
/** Ballenmarke über dem Boden im Zehenstand: die Zehen der Figur beugen sich nicht, die Zehenspitzen berühren den Boden */
const BALLEN_Y = 0.112
const stuetzWinkel = (k: Stuetz, ell: number): Winkel => ({
  ...B("schulter", [ell > 60 ? 30 : 78, 30, 0]),
  ...B("ellbogen", [ell, k.dreh ?? 90]),
  ...B("hand", [80, 0]),
  ...B("zehen", [60]),
  ...B("knie", [k.art === "knie" ? 70 : 0]),
  ...B("fuss", [k.art === "knie" ? -60 : -22, 0]),
  hals: [-5, 0, 0],
})
/** Ober- und Unterhaltung eines Liegestützes aus der Ausführung */
const stuetzPaar = (k: Stuetz) => {
  const art = k.art ?? "zehen"
  const hh = k.handHoch ?? 0
  const palmeY = hh + (k.palme ?? PALME_Y)
  const dreh: YZ = art === "zehen" ? [(k.fussHoch ?? 0) + BALLEN_Y, 0] : [0.06, 0]
  const dx = k.hand - SCHULTER_X
  // oben: Arme gestreckt, Handgelenke unter (bzw. vor) den Schultern
  const obenSY = palmeY + HANDGELENK[1] + Math.sqrt((OBERARM + UNTERARM_GELENK - 0.002) ** 2 - dx * dx - (k.handVor ?? 0) ** 2)
  const o = suche((l) => l.schulter[0] - obenSY, dreh, art)
  // alles so verschieben, dass das Becken oben bei z = 0 liegt
  const dz = -o.becken[1]
  const handgelenkZ = o.schulter[1] + (k.handVor ?? 0) + dz
  const palmeZ = handgelenkZ - HANDGELENK[2]
  // unten: Brust knapp über dem Boden (bzw. der Stützfläche der Hände)
  const u = suche((l) => l.brust[0] - (hh + (k.brustUnten ?? 0.05)), dreh, art)
  const haltung = (l: Linie, gestreckt: boolean, x0 = 0, hub = 0): Haltung => {
    const z = (p: YZ): P3 => [0, p[0], p[1] + dz]
    const ziele: Ziele = {}
    for (const s of [1, -1] as const) {
      const n = s === 1 ? "l" : "r"
      if (k.einarmig && k.einarmig !== n) continue
      const schulter: P3 = [x0 + s * SCHULTER_X, l.schulter[0], l.schulter[1] + dz]
      const hand: P3 = [s * k.hand, palmeY + hub, palmeZ]
      const gelenk: P3 = [s * k.hand, palmeY + hub + HANDGELENK[1], handgelenkZ]
      // Ellbogen nach hinten oben, mit aussen weiter zur Seite
      // unten: zu den Füßen hin (entlang des Rumpfs), etwas nach oben und mit aussen zur Seite
      const wohin: P3 = gestreckt ? [s, 0, -0.2] : [s * (k.aussen ?? 0.8), 0.4 - Math.sin(rad(l.beta)), -Math.cos(rad(l.beta))]
      ziele[`hand_${n}`] = { pos: hand }
      ziele[`ellbogen_${n}`] = { pos: ellbogenKreis(schulter, gelenk, wohin, OBERARM, UNTERARM_GELENK) }
    }
    const fx = k.fuss ?? 0.1
    for (const s of [1, -1] as const) {
      const n = s === 1 ? "l" : "r"
      const kz = z(l.knie)
      // Knie auf der Geraden von der (seitlich verschobenen) Hüfte zum Fuß
      const hx = x0 + s * HUEFTE_X
      ziele[`knie_${n}`] = { pos: [hx + (s * fx - hx) * (art === "zehen" ? OBER / (OBER + UNTER) : 1), kz[1], kz[2]] }
      if (art === "zehen") ziele[`fuss_${n}`] = { pos: [s * fx, dreh[0], dreh[1] + dz] }
    }
    const b = z(l.becken)
    return H(stuetzWinkel(k, gestreckt ? 4 : 95), [90 - l.beta, 0, 0], { pos: [x0, b[1], b[2]], boden: false, ziele })
  }
  // Flugphase (explosiv): Körper 7 cm höher, Hände 6 cm über dem Boden
  const flug = () => haltung(suche((l) => l.schulter[0] - obenSY - 0.07, dreh, art), true, 0, 0.06)
  return { o: haltung(o, true), u: haltung(u, false, k.seitlich ?? 0), flug, linien: { o, u, dz }, palmeZ }
}
const LS_TEXTE: [string, string] = ["Brust zum Boden senken", "Hochdrücken"]
const liegestuetz = (k: Stuetz, extra: Partial<Dehnung> = {}): Dehnung => {
  const { o, u } = stuetzPaar(k)
  return wdh("seite", o, u, 1.8, { aus: 1.2, texte: LS_TEXTE, ...extra })
}
/** Normaler Liegestütz: Hände etwas breiter als schulterbreit, Füße hüftbreit auf den Zehen */
const LS: Stuetz = { hand: 0.2 }
/** Ein Bein unten angepasst: Knie seitlich zum Ellbogen (Spiderman) */
const knieZumEllbogen = (h: Haltung, s: "l" | "r"): Haltung => {
  const z = { ...h.ziele }
  const sx = s === "l" ? 1 : -1
  const k = z[`knie_${s}`]!.pos
  delete z[`fuss_${s}`]
  // Hüfte liegt etwa 38 cm hinter der Kniemarke der Linie: Knie 27 cm zur Seite und 26 cm nach vorn
  const huefteZ = k[2] + OBER * 0.99
  const knie: P3 = [sx * (HUEFTE_X + 0.27), k[1] + 0.03, huefteZ + 0.26]
  z[`knie_${s}`] = { pos: knie }
  // Fuß flach über dem Boden hinter dem Knie (Schienbein etwa waagerecht)
  z[`fuss_${s}`] = { pos: [knie[0] + sx * 0.05, 0.13, knie[2] - 0.44] }
  return { ...h, g: { ...h.g, [`knie_${s}`]: [110], [`fuss_${s}`]: [-20, 0] }, ziele: z }
}
/** Seitstütz auf der linken Hand, rechter Arm gestreckt zur Decke (T-Liegestütz) */
const seitstuetzT = (k: Stuetz): Haltung => {
  const { palmeZ } = stuetzPaar(k)
  const sinB = (PALME_Y + HANDGELENK[1] + OBERARM + UNTERARM_GELENK - 0.005 + SCHULTER_X - 0.09) / (OBER + UNTER + SCHULTER_LOKAL[0])
  const beta = (Math.asin(sinB) * 180) / Math.PI
  const sz = palmeZ + HANDGELENK[2]
  const sy = PALME_Y + HANDGELENK[1] + OBERARM + UNTERARM_GELENK - 0.005 + SCHULTER_X
  const by = sy - SCHULTER_LOKAL[0] * sinB, bz = sz - SCHULTER_LOKAL[0] * Math.cos(rad(beta))
  return H(
    { ...stuetzWinkel(k, 4), schulter_r: [0, 90, 0], ellbogen_r: [4, 0], ...B("huefte", [0, 4, 0]), ...B("fuss", [-10, 0]) },
    [90 - beta, 0, 90],
    { pos: [k.hand, by, bz], boden: false, ziele: { hand_l: { pos: [k.hand, PALME_Y, palmeZ] } } },
  )
}


// ---------------------------------------------------------------- Dips
// Stütz auf den Holmen: oben Arme gestreckt senkrecht unter den Schultern, unten Oberarme waagerecht nach hinten,
// Unterarme senkrecht. Der Oberkörper ist 20 bis 30 Grad vorgeneigt, die Füße gekreuzt hinter dem Körper.
/** Handflächenmarke auf den Holmen (Barren etwa hüfthoch für die Figur), halber Griffabstand */
const HOLM_Y = 1.0
const DIP_HAND = 0.24
/** Schultergelenk im Becken bei hängenden Armen (gemessen; mit erhobenen Armen 0,366) */
const DIP_SCHULTER: YZ = [0.352, -0.004]
const DIP_BEINE: Winkel = { huefte_l: [22, 4, 0], huefte_r: [18, -2, 0], ...B("knie", [75]), ...B("fuss", [-25, 0]) }
const dipHaltung = (kipp: number, schulter: P3, ell: boolean): Haltung => {
  const [by, bz] = [schulter[1] - dreheYZ(kipp, DIP_SCHULTER)[0], schulter[2] - dreheYZ(kipp, DIP_SCHULTER)[1]]
  const ziele: Ziele = {}
  for (const s of [1, -1] as const) {
    const n = s === 1 ? "l" : "r"
    const hand: P3 = [s * DIP_HAND, HOLM_Y, 0]
    ziele[`hand_${n}`] = { pos: hand }
    // unten: Ellbogen leicht nach außen hinten, Unterarm senkrecht über der Hand
    if (ell) ziele[`ellbogen_${n}`] = { pos: ellbogenKreis([s * SCHULTER_X, schulter[1], schulter[2]], hand, [s * 0.35, 0, -1]) }
  }
  return H(
    { ...DIP_BEINE, ...B("schulter", ell ? [-60, 20, 0] : [-8, 12, 0]), ...B("ellbogen", [ell ? 95 : 4, HAMMER]), ...B("hand", [0, 0]), ...FAUST, hals: [-kipp * 0.5, 0, 0] },
    [kipp, 0, 0],
    { pos: [0, by, bz], boden: false, ziele },
  )
}
const DIP_DX = DIP_HAND - SCHULTER_X
/** oben: Schultern senkrecht über den Händen, 25 Grad vorgeneigt */
const DIP_OBEN = dipHaltung(25, [0, HOLM_Y + Math.sqrt(0.497 ** 2 - DIP_DX ** 2), 0], false)
/** unten: Oberarm waagerecht (Ellbogen auf Schulterhöhe), Schultern um die Oberarmlänge vor den Händen */
const DIP_UNTEN = dipHaltung(30, [0, HOLM_Y + UNTERARM - 0.005, Math.sqrt(OBERARM ** 2 - (DIP_DX - 0.005) ** 2) - 0.005], true)
/** Füße unten abgestellt: aufrecht zwischen den Holmen, Hände bleiben auf den Holmen */
const DIP_STEHEN: Haltung = H(
  { ...B("schulter", [-6, 14, 0]), ...B("ellbogen", [20, HAMMER]), ...FAUST, ...B("huefte", [4, 4, -5, 5]), ...B("knie", [8]) },
  [4, 0, 0],
  { pos: [0, 0.93, -0.04], boden: false, ziele: { ...fuesse(0.12, 10, -0.09), hand_l: { pos: [DIP_HAND, HOLM_Y, 0] }, hand_r: { pos: [-DIP_HAND, HOLM_Y, 0] } } },
)
const HOLME: Hilfsmittel = { art: "barren", an: "hand_r", breit: DIP_HAND }
const DIP_TEXTE: [string, string] = ["Vorgeneigt absenken, bis die Oberarme waagerecht sind", "Hochdrücken"]

export const KRAFT_DRUECKEN: Record<string, Dehnung> = {
  // Langhantel flach
  bankdruecken_lh: bank(LH_BANK, [...LH, RACK]),
  bankdruecken_lh_pause: bank(LH_BANK, [...LH, RACK], { halten: 1.5, texte: ["Zur Brust senken, 1 bis 3 s Pause", "Hochdrücken"] }),
  spoto_press: bank({ ...LH_BANK, unten: [-0.1, 0.175] }, [...LH, RACK], { halten: 1.0, texte: ["Senken, 1 bis 2 Finger über der Brust anhalten", "Hochdrücken"] }),
  larsen_press: bank({ ...LH_BANK, lage: LARSEN }, [...LH, RACK], { texte: ["Zur unteren Brust senken, Beine gestreckt", "Hochdrücken ohne Beinantrieb"] }),
  bankdruecken_eng: bank(ENG, [...LH, RACK], { texte: ["Zur unteren Brust senken, Ellbogen eng", "Hochdrücken"] }),
  bankdruecken_untergriff: bank({ ...ENG, griff: 0.2, dreh: UNTERGRIFF }, [...LH, RACK], { texte: ["Zur unteren Brust senken, Ellbogen eng", "Leicht Richtung Gesicht hochdrücken"] }),
  bankdruecken_baender: bank(LH_BANK, [...LH, RACK, { art: "band", von: "hand_l", bis: "fuss_l" }, { art: "band", von: "hand_r", bis: "fuss_r" }]),
  bankdruecken_multipresse: bank(LH_BANK, [...LH, RACK]),
  // Kurzhantel flach
  bankdruecken_kh: bank(KH_BANK, KH, { texte: ["Seitlich neben die Brust senken", "Im leichten Bogen hochdrücken"] }),
  kh_druecken_neutral: bank(KH_NEUTRAL, KH, { texte: ["Neben die Brust senken, Ellbogen nah am Körper", "Gerade hochdrücken"] }),
  squeeze_press: bank(SQUEEZE, KH, { texte: ["Hanteln aneinanderpressen, zur Brust senken", "Hochdrücken, weiter pressen"] }),
  kh_bankdruecken_einarmig: bank({ ...KH_BANK, einarmig: true }, KH_R, { texte: DRUECKEN }),
  kh_bankdruecken_abwechselnd: abwechselnd(KH_BANK, KH),
  // Schrägbank
  schraegbankdruecken_lh: bank(LH_SCHRAEG, [...LH, RACK_SCHRAEG], { texte: ["Zur oberen Brust senken", "Senkrecht hochdrücken"] }),
  schraegbankdruecken_eng: bank(ENG_SCHRAEG, [...LH, RACK_SCHRAEG], { texte: ["Zur oberen Brust senken, Ellbogen eng", "Senkrecht hochdrücken"] }),
  schraegbankdruecken_multipresse: bank(LH_SCHRAEG, [...LH, RACK_SCHRAEG], { texte: ["Zur oberen Brust senken", "Senkrecht hochdrücken"] }),
  schraegbankdruecken_kh: bank(KH_SCHRAEG, KH, { texte: ["Neben die obere Brust senken", "Hochdrücken"] }),
  schraegbankdruecken_kh_pause: bank(KH_SCHRAEG, KH, { halten: 1.5, texte: ["Senken, unten 1 bis 2 s Pause", "Hochdrücken"] }),
  schraegbankdruecken_kh_flach: bank({ ...KH_SCHRAEG, lage: SCHRAEG18, unten: [-0.01, 0.12] }, KH, { texte: ["Neben die Brust senken", "Hochdrücken"] }),
  schraegbankdruecken_kh_einarmig: bank({ ...KH_SCHRAEG, einarmig: true }, KH_R, { texte: ["Hantel langsam zur oberen Brust senken", "Hochdrücken, Rumpf dreht nicht mit"] }),
  schraegbank_squeeze_press: bank(SQUEEZE_SCHRAEG, KH, { texte: ["Hanteln aneinanderpressen, zur oberen Brust senken", "Hochdrücken"] }),
  // Boden
  floor_press_lh: bank(FLOOR, LH, { halten: 0.8, texte: ["Senken, bis die Oberarme den Boden berühren", "Ohne Schwung hochdrücken"] }),
  floor_press_kh: bank(FLOOR_KH, KH, { halten: 0.8, texte: ["Senken, bis die Oberarme den Boden berühren", "Ohne Schwung hochdrücken"] }),
  floor_press_kh_einarmig: bank({ ...FLOOR_KH, einarmig: true }, KH_R, { halten: 0.6, texte: ["Senken, bis der Oberarm den Boden berührt", "Hochdrücken"] }),
  // Liegestütze
  liegestuetz: liegestuetz(LS),
  liegestuetz_gewicht: liegestuetz(LS, { hilfsmittel: [{ art: "hantelscheibe", an: "bws", hoch: 0.03 }] }),
  liegestuetz_band: liegestuetz(LS, { texte: ["Gegen das Band senken", "Gegen den Bandwiderstand hochdrücken"] }),
  liegestuetz_explosiv: (() => {
    const p = stuetzPaar(LS)
    return folge("seite", [[p.o, 0.5, "Oben, Körper gerade"], [p.u, 1.4, "Kontrolliert senken"], [p.flug(), 0.35, "Explosiv hoch, Hände heben ab"], [p.o, 0.45, "Weich landen"]])
  })(),
  liegestuetz_knie: liegestuetz({ hand: 0.2, art: "knie" }, { texte: ["Brust zum Boden senken, Knie bis Schultern gerade", "Hochdrücken"] }),
  liegestuetz_diamant: liegestuetz({ hand: 0.045, handVor: -0.1, brustUnten: 0.08, aussen: 0.35 }, { texte: ["Brust zu den Händen senken, Ellbogen nah am Körper", "Hochdrücken"] }),
  liegestuetz_erhoeht: liegestuetz({ hand: 0.2, handHoch: 0.5, brustUnten: 0.03 }, { texte: ["Brust zur Kante senken", "Zurückdrücken"], hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.5 }] }),
  liegestuetz_fuesse_hoch: liegestuetz({ hand: 0.2, fussHoch: 0.4, handVor: -0.05, aussen: 0.35, palme: 0.075 }, { hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.4, versatz: [-0.1, 0.05] }] }),
  liegestuetz_defizit: liegestuetz({ hand: 0.22, handHoch: 0.1, brustUnten: -0.02 }, { halten: 0.8, texte: ["Brust tief zwischen die Hände senken", "Kraftvoll hochdrücken"], hilfsmittel: KH }),
  liegestuetz_archer: liegestuetz({ hand: 0.31, fuss: 0.14, seitlich: -0.18, brustUnten: 0.09, palme: 0.075 }, { seiten: true, ein: 2.0, texte: ["Zur rechten Hand senken, linker Arm fast gestreckt", "In die Mitte hochdrücken"] }),
  liegestuetz_einarmig: (() => {
    const p = stuetzPaar({ hand: 0.13, fuss: 0.3, brustUnten: 0.09, aussen: 0.25, einarmig: "r" })
    const ruecken: Winkel = { schulter_l: [-30, 20, 0], ellbogen_l: [90, 0] }
    return wdh("vorn", { ...p.o, g: { ...p.o.g, ...ruecken } }, { ...p.u, g: { ...p.u.g, ...ruecken } }, 2.0, { aus: 1.6, seiten: true, texte: ["Langsam absenken, Ellbogen nah am Körper", "Kraftvoll hochdrücken"] })
  })(),
  pseudo_planche_liegestuetz: liegestuetz({ hand: 0.17, handVor: -0.2, aussen: 0.15, brustUnten: 0.07 }, { ein: 2.0, texte: ["Vorlage halten und absenken", "Hochdrücken, Schultern vor den Händen"] }),
  liegestuetz_spiderman: (() => {
    const p = stuetzPaar(LS)
    return folge("schraeg", [[p.o, 0.6, "Liegestütz oben"], [knieZumEllbogen(p.u, "r"), 1.4, "Senken, rechtes Knie zum Ellbogen"], [p.o, 1.0, "Hochdrücken"], [knieZumEllbogen(p.u, "l"), 1.4, "Senken, linkes Knie zum Ellbogen"], [p.o, 1.0, "Hochdrücken"]])
  })(),
  // Dips
  dips_brust: wdh("seite", DIP_OBEN, DIP_UNTEN, 2.0, { aus: 1.3, texte: DIP_TEXTE, hilfsmittel: [HOLME] }),
  dips_gewicht: wdh("seite", DIP_OBEN, DIP_UNTEN, 2.0, { aus: 1.3, texte: DIP_TEXTE, hilfsmittel: [HOLME] }),
  dips_negativ: folge("seite", [[DIP_OBEN, 1.0, "Oben stützen, Arme gestreckt"], [DIP_UNTEN, 4.5, "In 3 bis 5 Sekunden absenken"], [DIP_STEHEN, 0.8, "Füße abstellen"], [DIP_OBEN, 1.2, "Wieder in den Stütz steigen"]], { hilfsmittel: [HOLME] }),
  liegestuetz_t: (() => {
    const k: Stuetz = { hand: 0.17 }
    const p = stuetzPaar(k)
    return folge("vorn", [[p.o, 0.6, "Liegestütz oben"], [p.u, 1.2, "Senken"], [p.o, 0.8, "Hochdrücken"], [seitstuetzT(k), 1.2, "Auf die linke Hand aufdrehen, rechter Arm zur Decke"], [p.o, 1.0, "Zurückdrehen"]], { seiten: true })
  })(),
}
