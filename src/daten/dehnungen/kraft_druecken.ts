// Drücken mit Zielpunkten: Bankdrücken flach und schräg, Floor Press, Liegestütze und Dips. Die Füße stehen dort,
// wo die Ausführung sie hinstellt, die Hände greifen in der beschriebenen Breite, die Stange kommt unten an die
// beschriebene Stelle der Brust und die Unterarme stehen senkrecht unter ihr. Die Gelenkwinkel rechnet die Figur
// (src/ui/dehnfigur.ts, loese); geprüft wird mit werkzeuge/messen.html gegen werkzeuge/soll.ts.
//
// Rahmen "schultern": Mitte der Schultergelenke, x nach links, y den Rumpf hinauf (im Liegen zum Kopf), z nach vorn
// (im Liegen nach oben).

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, halte, wdh } from "./basis"
import { FAUST, FLACHBANK, HAMMER, KH, KH_R, LH, OBERGRIFF, UNTERGRIFF } from "./kraftbasis"
import { HUEFTE_X, KNOECHEL_Y, KNOECHEL_Z, OBER, OBERARM, SCHULTER_X, UNTER, UNTERARM, type Ziele, beinStart, ellbogenKreis, ellbogenSpreiz, fuss, fuesse, rad } from "./ziele"

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
  /** Slider Flys: halber Handabstand unten */
  handUnten?: number
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
  const haltung = (l: Linie, gestreckt: boolean, x0 = 0, hub = 0, handX = k.hand, ell = gestreckt ? 4 : 95): Haltung => {
    const z = (p: YZ): P3 => [0, p[0], p[1] + dz]
    const ziele: Ziele = {}
    for (const s of [1, -1] as const) {
      const n = s === 1 ? "l" : "r"
      if (k.einarmig && k.einarmig !== n) continue
      const schulter: P3 = [x0 + s * SCHULTER_X, l.schulter[0], l.schulter[1] + dz]
      const hand: P3 = [s * handX, palmeY + hub, palmeZ]
      const gelenk: P3 = [s * handX, palmeY + hub + HANDGELENK[1], handgelenkZ]
      // Ellbogen nach hinten oben, mit aussen weiter zur Seite
      // unten: zu den Füßen hin (entlang des Rumpfs), etwas nach oben und mit aussen zur Seite
      const wohin: P3 = gestreckt ? [s, 0, -0.2] : [s * (k.aussen ?? 0.8), 0.4 - Math.sin(rad(l.beta)), -Math.cos(rad(l.beta))]
      ziele[`hand_${n}`] = { pos: hand }
      // Slider: gestreckte Lage, aber Ellbogen leicht gebeugt nach außen hinten
      const leicht = gestreckt && ell > 10
      ziele[`ellbogen_${n}`] = { pos: ellbogenKreis(schulter, gelenk, leicht ? [s, 0.3, -0.6] : wohin, OBERARM, UNTERARM_GELENK) }
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
    return H(stuetzWinkel(k, ell), [90 - l.beta, 0, 0], { pos: [x0, b[1], b[2]], boden: false, ziele })
  }
  // Flugphase (explosiv): Körper 7 cm höher, Hände 6 cm über dem Boden
  const flug = () => haltung(suche((l) => l.schulter[0] - obenSY - 0.07, dreh, art), true, 0, 0.06)
  // Slider Flys: unten gleiten die Hände bei leicht gebeugten Armen seitlich auseinander
  const hu = k.handUnten
  if (hu) {
    // Schulter bis Handgelenk bei 160 Grad im Ellbogen
    const reich = Math.sqrt(OBERARM ** 2 + UNTERARM_GELENK ** 2 + 2 * OBERARM * UNTERARM_GELENK * Math.cos(rad(28)))
    const hoehe = (x: number) => palmeY + HANDGELENK[1] + Math.sqrt(reich ** 2 - (x - SCHULTER_X) ** 2)
    const ol = suche((l) => l.schulter[0] - hoehe(k.hand), dreh, art)
    const ul = suche((l) => l.schulter[0] - hoehe(hu), dreh, art)
    return { o: haltung(ol, true, 0, 0, k.hand, 22), u: haltung(ul, true, 0, 0, hu, 22), flug, linien: { o: ol, u: ul, dz }, palmeZ }
  }
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


// ---------------------------------------------------------------- Flys im Liegen
// Der Ellbogenwinkel bleibt gleich (leicht gebeugt, 160 Grad). Oben sind die Hände über der Brust kurz vor der
// Berührung, unten liegen die Oberarme auf Höhe des Oberkörpers, die Hände etwas höher als die Ellbogen.
const FLY_BEUGE = 20
const FLY_D = Math.sqrt(OBERARM ** 2 + UNTERARM ** 2 + 2 * OBERARM * UNTERARM * Math.cos(rad(FLY_BEUGE)))
/** Arme oben zusammen: Hände bei ±x über der Brust (y zum Becken versetzt), senkrecht in der Welt */
const flyZu = (kipp: number, y = -0.05, x = 0.07): Ziele => {
  const u = oben(kipp)
  const dx = x - SCHULTER_X
  const l = -y * u[1] + Math.sqrt(Math.max(0, y * y * u[1] * u[1] - (dx * dx + y * y - FLY_D * FLY_D)))
  const hand: P3 = [x, y + u[1] * l, u[2] * l]
  return armZiele(hand, ellbogenKreis(S_L, hand, [1, 0, -0.4]), "beide")
}
/** Arme offen: Oberarm seitlich auf Höhe des Oberkörpers (tief: unter ihn, bis zum Boden), Unterarm um FLY_BEUGE nach oben */
const flyAuf = (tief = 0, zumBecken = 10): Ziele => {
  const a = rad(zumBecken), d = Math.asin(Math.min(0.9, tief / OBERARM))
  const ell: P3 = [SCHULTER_X + OBERARM * Math.cos(a) * Math.cos(d), -OBERARM * Math.sin(a) * Math.cos(d), -OBERARM * Math.sin(d)]
  const w = rad(FLY_BEUGE) - d
  const hand: P3 = [ell[0] + UNTERARM * Math.cos(a) * Math.cos(w), ell[1] - UNTERARM * Math.sin(a) * Math.cos(w), ell[2] + UNTERARM * Math.sin(w)]
  return armZiele(hand, ell, "beide")
}
const FLY_W_ZU: Winkel = { ...B("schulter", [88, 10, 0]), ...B("ellbogen", [FLY_BEUGE, HAMMER]) }
const FLY_W_AUF: Winkel = { ...B("schulter", [6, 80, 0]), ...B("ellbogen", [FLY_BEUGE, HAMMER]) }
const flysLiegend = (l: Lage, hilfsmittel: Hilfsmittel[], y = -0.05, tief = 0, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", liegen(l, flyZu(l.kipp, y), FLY_W_ZU), liegen(l, flyAuf(tief), FLY_W_AUF), 2.2, {
    aus: 1.6,
    texte: ["Arme im weiten Bogen öffnen, Ellbogenwinkel bleibt", "Im gleichen Bogen über der Brust zusammenführen"],
    hilfsmittel: [...hilfsmittel, ...(l.geraet ?? bankGeraet(l))],
    ...extra,
  })
const zweiKabel = (hoehe: number, z = -0.25): Hilfsmittel[] => [
  { art: "kabel", von: "hand_l", rolle: [0.95, hoehe, z] },
  { art: "kabel", von: "hand_r", rolle: [-0.95, hoehe, z] },
]

// ---------------------------------------------------------------- Im Stand: leichte Schrittstellung
/** Linker Fuß vorn, rechter hinten mit leicht angehobener Ferse, Knie leicht gebeugt, Oberkörper um kipp vorgeneigt */
const schritt = (kipp: number, arme: Ziele, w: Winkel, rechtsVorn = false): Haltung => {
  const vorn = rechtsVorn ? -1 : 1
  const ziele: Ziele = { ...fuss(vorn as 1 | -1, 0.12, 0.1, 10), ...fuss(-vorn as 1 | -1, 0.12, -0.3, 10, 0.03), ...arme }
  return H(
    { [`huefte_${rechtsVorn ? "r" : "l"}`]: [22, 4, -4, 4], [`knie_${rechtsVorn ? "r" : "l"}`]: [16], [`huefte_${rechtsVorn ? "l" : "r"}`]: [-8, 4, -4, 4], [`knie_${rechtsVorn ? "l" : "r"}`]: [12], ...FAUST, ...w },
    [kipp, 0, 0],
    { pos: [0, 0.91, -0.06], boden: false, ziele },
  )
}
/** Hand im Rahmen der Schultern, Ellbogen auf dem Kreis in Richtung wohin (Rahmen); arm: beide oder eine Seite */
const armRahmen = (hand: P3, wohin: P3, arm: Arm = "beide", unter = UNTERARM): Ziele => armZiele(hand, ellbogenKreis(S_L, hand, wohin, OBERARM, unter), arm)
/** Konstanter Ellbogenwinkel: Hand im Abstand FLY_D von der Schulter, Richtung (Rahmen) */
const flyHand = (richtung: P3): P3 => {
  const l = Math.hypot(...richtung)
  return [SCHULTER_X + (FLY_D * richtung[0]) / l, (FLY_D * richtung[1]) / l, (FLY_D * richtung[2]) / l]
}
/** Hände zusammen vor dem Körper in Höhe y (Rahmen), Abstand der Hände 2·x */
const flyVorn = (y: number, x = 0.06): P3 => {
  const dx = x - SCHULTER_X
  return [x, y, Math.sqrt(FLY_D * FLY_D - dx * dx - y * y)]
}
const crossover = (auf: P3, zu: P3, kipp: number, hoehe: number, texte: [string, string]): Dehnung =>
  wdh(
    "schraeg",
    schritt(kipp, armRahmen(auf, [0, -0.6, -1]), { ...B("schulter", [10, 70, 0]), ...B("ellbogen", [FLY_BEUGE, HAMMER]) }),
    schritt(kipp, armRahmen(zu, [1, -0.6, 0]), { ...B("schulter", [70, 10, 0]), ...B("ellbogen", [FLY_BEUGE, HAMMER]) }),
    1.4,
    { aus: 2.2, halten: 1.0, texte, hilfsmittel: zweiKabel(hoehe) },
  )
/** Hand neben der Brust, Ellbogen 45 bis 60 Grad nach hinten außen (Drücken im Stand) */
const DRUECK_NEBEN: P3 = [0.2, -0.12, 0.06]
const DRUECK_VORN = (x = 0.06): P3 => {
  const dx = x - SCHULTER_X
  return [x, -0.1, Math.sqrt(0.492 ** 2 - dx * dx - 0.01)]
}
const druckStand = (arm: Arm, hilfsmittel: Hilfsmittel[], rechtsVorn = false, extra: Partial<Dehnung> = {}): Dehnung => {
  const frei: Winkel = arm === "r" ? { schulter_l: [8, 10, 0], ellbogen_l: [20, 0] } : {}
  return wdh(
    "schraeg",
    schritt(8, armZiele(DRUECK_NEBEN, ellbogenSpreiz(S_L, DRUECK_NEBEN, 52), arm), { ...B("schulter", [20, 50, 0]), ...B("ellbogen", [110, OBERGRIFF]), ...frei }, rechtsVorn),
    schritt(8, armRahmen(DRUECK_VORN(arm === "beide" ? 0.06 : -0.06), [1, -0.5, 0], arm), { ...B("schulter", [80, 6, 0]), ...B("ellbogen", [10, OBERGRIFF]), ...frei }, rechtsVorn),
    1.4,
    { aus: 2.0, texte: ["Nach vorn drücken, bis die Arme fast gestreckt sind", "Langsam zurück neben die Brust"], hilfsmittel, ...(arm !== "beide" ? { seiten: true } : {}), ...extra },
  )
}
/** Aufrechter Stand, Hände im Rahmen der Schultern */
const aufrecht = (arme: Ziele, w: Winkel): Haltung =>
  H({ ...B("huefte", [0, 4, -4, 4]), ...B("knie", [4]), ...w }, [2, 0, 0], { pos: [0, 0.93, 0], boden: false, ziele: { ...fuesse(0.12, 12), ...arme } })

// ---------------------------------------------------------------- Kurzhanteldrücken auf dem Gymnastikball
// Schultern und oberer Rücken liegen auf dem Ball, Knie, Hüfte und Schultern bilden eine Linie, die Knie stehen über
// den Fersen (Schienbein senkrecht). Die Neigung der Linie ergibt sich aus der Höhe des Balls (65 cm).
const BALL_R = 0.32
const ballBruecke = (() => {
  const knieY = KNOECHEL_Y + 0.022 + UNTER
  const lage = (phi: number) => {
    const k = -(90 - phi)
    const hy = knieY + OBER * Math.sin(rad(phi))
    const by = hy + 0.003
    const s = dreheYZ(k, SCHULTER_LOKAL)
    const sy = by + s[0], sz = s[1]
    // Auflage am oberen Rücken: 8 cm unter den Schultern, Haut 7,7 cm hinter dem Schultergelenk
    const u: YZ = [Math.cos(rad(k)), Math.sin(rad(k))], n: YZ = [-Math.sin(rad(k)), Math.cos(rad(k))]
    // Auflage mit 5 cm Luft gerechnet: die Haut am Schulterblatt steht weiter hinten als am Brustwirbel
    const c: YZ = [sy - 0.08 * u[0] - 0.127 * n[0], sz - 0.08 * u[1] - 0.127 * n[1]]
    return { k, by, mitte: [c[0] - BALL_R * n[0], c[1] - BALL_R * n[1]] as YZ, knieZ: OBER * Math.cos(rad(phi)) }
  }
  let a = 0, b = 60
  for (let i = 0; i < 40; i++) {
    const m = (a + b) / 2
    if (lage(m).mitte[0] > BALL_R) b = m
    else a = m
  }
  return lage((a + b) / 2)
})()
const BALL_LAGE: Lage = { kipp: ballBruecke.k, y: ballBruecke.by, fersenZ: ballBruecke.knieZ - KNOECHEL_Z, breit: 0.11, geraet: [{ art: "ball", unter: "becken", versatz: [0, ballBruecke.mitte[1]] }] }


// ---------------------------------------------------------------- Liegestütz an der Wand
// Gerade Linie vom Knöchel (fest) bis zur Schulter, um theta gegen die Senkrechte zur Wand geneigt. Oben liegen die
// Hände auf Schulterhöhe flach an der Wand (Finger nach oben), die Arme gestreckt; unten stoppt die Nase kurz vor der Wand.
const wandLinie = (theta: number) => {
  const u: YZ = [Math.cos(rad(theta)), Math.sin(rad(theta))]
  const f: YZ = [-Math.sin(rad(theta)), Math.cos(rad(theta))]
  const a: YZ = [KNOECHEL_Y + 0.022, 0]
  const knie: YZ = [a[0] + UNTER * u[0], a[1] + UNTER * u[1]]
  const huefte: YZ = [a[0] + (OBER + UNTER) * u[0], a[1] + (OBER + UNTER) * u[1]]
  const ho = dreheYZ(theta, HUEFTE_LOKAL), so = dreheYZ(theta, SCHULTER_LOKAL)
  const becken: YZ = [huefte[0] - ho[0], huefte[1] - ho[1]]
  const schulter: YZ = [becken[0] + so[0], becken[1] + so[1]]
  // vorderster Punkt zur Wand: Nase oder Brust
  const vorn = Math.max(schulter[1] + 0.19 * u[1] + 0.12 * f[1], schulter[1] - 0.1 * u[1] + 0.15 * f[1])
  return { knie, becken, schulter, vorn }
}
const wandLiegestuetz = (): Dehnung => {
  const x = 0.2, dx = x - SCHULTER_X
  const o = wandLinie(16)
  // Handgelenk auf Schulterhöhe, Arm waagerecht gestreckt; die Handfläche liegt darüber an der Wand
  // Handgelenk knapp unter Schulterhöhe (die Handfläche liegt auf Schulterhöhe), Arm gestreckt
  const gy = o.schulter[0] - 0.05
  const gz = o.schulter[1] + Math.sqrt((OBERARM + UNTERARM_GELENK + 0.012) ** 2 - dx * dx - 0.05 ** 2)
  const wand = gz + 0.016
  let a = 16, b = 60
  for (let i = 0; i < 40; i++) {
    const m = (a + b) / 2
    if (wandLinie(m).vorn > wand - 0.005) b = m
    else a = m
  }
  const u = wandLinie((a + b) / 2)
  const haltung = (l: ReturnType<typeof wandLinie>, theta: number, gestreckt: boolean): Haltung => {
    const ziele: Ziele = { ...fuss(1, 0.1, KNOECHEL_Z * -1 + 0.0, 8), ...fuss(-1, 0.1, -KNOECHEL_Z, 8) }
    if (!gestreckt) {
      // unten hebt die Ferse leicht ab: nur der Ballen bleibt
      delete ziele.ferse_l
      delete ziele.ferse_r
    }
    for (const s of [1, -1] as const) {
      const n = s === 1 ? "l" : "r"
      ziele[`hand_${n}`] = { pos: [s * x, gy + 0.088, wand - 0.016] }
      ziele[`knie_${n}`] = { pos: [s * HUEFTE_X + s * 0.01, l.knie[0], l.knie[1]] }
      if (!gestreckt) {
        // im Rahmen des Rumpfs rechnen (y den Rumpf hinauf, z zur Brust), damit der Oberarm 45 bis 50 Grad abgespreizt ist
        const c = Math.cos(rad(theta)), sn = Math.sin(rad(theta))
        const hin = (p: P3): P3 => [p[0], p[1] * c + p[2] * sn, -p[1] * sn + p[2] * c]
        const her = (p: P3): P3 => [p[0], p[1] * c - p[2] * sn, p[1] * sn + p[2] * c]
        const e = ellbogenSpreiz(hin([s * SCHULTER_X, l.schulter[0], l.schulter[1]]), hin([s * x, gy, gz]), 48, OBERARM, UNTERARM_GELENK)
        ziele[`ellbogen_${n}`] = { pos: her(e) }
      }
    }
    return H(
      { ...B("schulter", [gestreckt ? 80 : 40, 20, 0]), ...B("ellbogen", [gestreckt ? 4 : 100, 90]), ...B("hand", [80, 0]), ...B("huefte", [0, 3, 0]), ...B("fuss", [-theta, 0]) },
      [theta, 0, 0],
      { pos: [0, l.becken[0], l.becken[1]], boden: false, ziele },
    )
  }
  return wdh("seite", haltung(o, 16, true), haltung(u, (a + b) / 2, false), 1.6, { aus: 1.2, texte: ["Brust zur Wand, Körper gerade wie ein Brett", "Zurückdrücken, bis die Arme gestreckt sind"], hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn", abstand: 0.05 }] })
}

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
  liegestuetz_wand: wandLiegestuetz(),
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
  kh_druecken_gymnastikball: bank({ ...KH_BANK, griffUnten: 0.26, unten: [-0.02, 0.1], lage: BALL_LAGE }, KH, { texte: ["Hanteln neben die Brust senken, Hüfte bleibt oben", "Hochdrücken"] }),
  kabel_brustdruecken_bank: bank({ ...KH_BANK, griff: 0.15 }, zweiKabel(0.12, -0.37), { texte: ["Griffe neben die Brust", "Nach oben und leicht zur Mitte drücken"] }),
  // Flys
  flys_kh: flysLiegend(FLACH, KH),
  flys_kh_schraeg: flysLiegend(SCHRAEG30, KH, 0.0),
  flys_kh_boden: flysLiegend(BODEN, KH, -0.05, 0.07, { halten: 0.6 }),
  kabel_flys_flachbank: flysLiegend(FLACH, zweiKabel(0.12, -0.37)),
  kabel_flys_schraegbank: flysLiegend(SCHRAEG30, zweiKabel(0.12, -0.3), 0.0),
  kabel_crossover_oben: crossover(flyHand([0.75, 0.55, -0.25]), flyVorn(-0.3), 15, 2.0, ["Im Bogen nach vorn unten vor den Bauchnabel", "Langsam zurück in die Dehnung"]),
  kabel_crossover_mehrere_hoehen: crossover(flyHand([0.75, 0.55, -0.25]), flyVorn(-0.3), 15, 2.0, ["Satz 1 von oben: vor den Bauch zusammenführen", "Langsam öffnen"]),
  kabel_flys_mitte: crossover(flyHand([1, 0, -0.25]), flyVorn(-0.1), 12, 1.35, ["Im waagerechten Bogen vor der Brust zusammenführen", "Langsam zurück in die Dehnung"]),
  band_flys: (() => {
    const d = crossover(flyHand([1, 0, -0.25]), flyVorn(-0.1), 6, 1.35, ["Im Bogen vor der Brust zusammenführen", "Langsam zurück, Band nicht schnappen lassen"])
    return { ...d, hilfsmittel: [{ art: "bandanker", von: "hand_l", anker: [0.25, 1.3, -0.5] }, { art: "bandanker", von: "hand_r", anker: [-0.25, 1.3, -0.5] }] }
  })(),
  kabel_crossover_unten: crossover(flyHand([0.6, -0.75, 0.1]), flyVorn(0.12), 3, 0.2, ["Im Bogen nach vorn oben bis Kinnhöhe", "Langsam nach unten außen öffnen"]),
  kabel_flys_einarmig: wdh(
    "vorn",
    aufrecht(armRahmen(flyHand([1, 0, -0.25]), [0, -0.6, -1], "r"), { schulter_r: [10, 80, 0], ellbogen_r: [FLY_BEUGE, HAMMER], schulter_l: [4, 12, 0], ellbogen_l: [10, 0], ...FAUST }),
    // rechte Hand über die Körpermitte hinaus nach links (im Rahmen der linken Seite gerechnet und gespiegelt)
    aufrecht(armRahmen([-0.1, -0.06, Math.sqrt(FLY_D ** 2 - 0.227 ** 2 - 0.0036)], [1, -0.6, 0], "r"), { schulter_r: [80, -10, 0], ellbogen_r: [FLY_BEUGE, HAMMER], schulter_l: [4, 12, 0], ellbogen_l: [10, 0], ...FAUST }),
    1.2,
    { aus: 1.8, halten: 0.8, seiten: true, texte: ["Griff im Bogen vor die Brust, über die Mitte hinaus", "Langsam zurück"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.95, 1.35, -0.1] }] },
  ),
  // Drücken im Stand
  kabel_brustdruecken_stehend: druckStand("beide", zweiKabel(1.3, -0.45)),
  band_brustdruecken: druckStand("beide", [{ art: "bandanker", von: "hand_l", anker: [0.3, 1.3, -0.7] }, { art: "bandanker", von: "hand_r", anker: [-0.3, 1.3, -0.7] }]),
  kabel_drueck_einarmig: druckStand("r", [{ art: "kabel", von: "hand_r", rolle: [-0.4, 1.3, -0.7] }], false),
  svend_press: wdh(
    "schraeg",
    aufrecht(armRahmen([0.03, -0.1, 0.2], [1, -0.4, -0.3]), { ...B("schulter", [30, 0, 0]), ...B("ellbogen", [110, 0]), ...B("finger", [0, 0]) }),
    aufrecht(armRahmen(flyVorn(-0.1, 0.03), [1, -0.4, 0]), { ...B("schulter", [86, -6, 0]), ...B("ellbogen", [8, 0]), ...B("finger", [0, 0]) }),
    1.6,
    { aus: 1.6, halten: 1.0, texte: ["Scheibe zusammenpressen, Arme nach vorn strecken", "Unter Druck zurück zur Brust"], hilfsmittel: [{ art: "hantelscheibe", an: "haende" }] },
  ),
  brust_isometrisch: halte(
    "schraeg",
    aufrecht({}, { ...B("schulter", [4, 10, 0]), ...B("ellbogen", [10, 0]) }),
    aufrecht({ hand_l: { pos: [0.035, -0.1, 0.2], bezug: "schultern" }, hand_r: { pos: [-0.035, -0.1, 0.2], bezug: "schultern" }, ellbogen_l: { pos: [0.3, -0.1, 0.11], bezug: "schultern" }, ellbogen_r: { pos: [-0.3, -0.1, 0.11], bezug: "schultern" } }, { ...B("schulter", [40, 70, 0]), ...B("ellbogen", [100, 0]), ...B("finger", [0, 0]) }),
    { ein: 1.5, aus: 1.5 },
  ),
  slider_flys: liegestuetz({ hand: 0.16, art: "knie", handUnten: 0.42, palme: 0.072 }, { ein: 2.0, aus: 1.6, texte: ["Hände langsam seitlich auseinandergleiten lassen", "Mit der Brust wieder zusammenziehen"], hilfsmittel: [{ art: "gleitscheibe", an: "hand_l" }, { art: "gleitscheibe", an: "hand_r" }] }),
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
