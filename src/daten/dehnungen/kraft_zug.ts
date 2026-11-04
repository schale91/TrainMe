// Ziehen mit Zielpunkten: Klimmzüge an der Stange des Wand-Racks. Die Hände hängen in der beschriebenen Breite an der
// Stange, im Hang sind die Arme gestreckt und der Körper hängt ruhig senkrecht, oben ist das Kinn über der Stange und
// die Ellbogen sind so nach unten gezogen, wie die Ausführung es beschreibt. Geprüft mit werkzeuge/messen.html gegen
// werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, HALBKNIESTAND, KNIESTAND, LANGSITZ, folge, halte, mit, wdh } from "./basis"
import { BAUCH_LEHNE, BRUST_LEHNE, FAUST, FLACHBANK, HAMMER, KH, KH_R, LH, OBERGRIFF, SZ, UNTERGRIFF, kabelstange } from "./kraftbasis"
import { FLACH, liegen, stuetzPaar } from "./kraft_druecken"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, ellbogenKreis, rad } from "./ziele"

type P3 = [number, number, number]
type YZ = [number, number]
/** Kniepolster des Latzugs: hält die Oberschenkel knapp vor den Knien fest */
const KNIEPOLSTER: Hilfsmittel = { art: "fixierung", an: "knie_l", ueber: 0.085 }
const dreheYZ = (th: number, p: YZ): YZ => [Math.cos(rad(th)) * p[0] - Math.sin(rad(th)) * p[1], Math.sin(rad(th)) * p[0] + Math.cos(rad(th)) * p[1]]
/** Schultergelenk im Becken bei erhobenen Armen (gemessen) */
const SCHULTER_OBEN: YZ = [0.395, -0.004]

// ---------------------------------------------------------------- Klimmzug
/** Stange des Wand-Racks (Mitte 2,12 m); die Handflächenmarke liegt in der Faust knapp unter der Stange */
const STANGE_Y = 2.12
const HAND_Y = STANGE_Y - 0.03
/** Schulter bis Handflächenmarke bei gestrecktem Arm mit Faust */
const ARM_FAUST = 0.515
const RACK: Hilfsmittel = { art: "rack", an: "becken", z: -0.08 }
interface Zug {
  /** halber Griffabstand */
  griff: number
  dreh: number
  /** Ellbogen oben: Richtung (x nach außen, y, z) */
  ellbogen: P3
  /** Beine (Hang: leicht vor dem Körper; L-Sitz) */
  beine?: Winkel
}
const BEINE_HANG: Winkel = { ...B("huefte", [12, 3, 0]), ...B("knie", [12]), ...B("fuss", [-25, 0]) }
/** mit gebeugten Armen (oben) sitzt das Schultergelenk tiefer im Rumpf */
const SCHULTER_GEBEUGT: YZ = [0.37, -0.004]
const hangHaltung = (z: Zug, schulter: P3, kipp: number, gebeugt: boolean, w: Winkel = {}): Haltung => {
  const s = dreheYZ(kipp, gebeugt ? SCHULTER_GEBEUGT : SCHULTER_OBEN)
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const hand: P3 = [sx * z.griff, HAND_Y, 0]
    ziele[`hand_${n}`] = { pos: hand }
    if (gebeugt) ziele[`ellbogen_${n}`] = { pos: ellbogenKreis([sx * SCHULTER_X, schulter[1], schulter[2]], hand, [sx * z.ellbogen[0], z.ellbogen[1], z.ellbogen[2]], OBERARM, UNTERARM) }
  }
  return H(
    { ...(z.beine ?? BEINE_HANG), ...B("schulter", gebeugt ? [30, 40, 0] : [170, 14, 0]), ...B("ellbogen", [gebeugt ? 120 : 4, z.dreh]), ...FAUST, hals: [gebeugt ? -10 : -4, 0, 0], ...w },
    [kipp, 0, 0],
    { pos: [0, schulter[1] - s[0], schulter[2] - s[1]], boden: false, ziele },
  )
}
/** Hang: Arme gestreckt, Schultern senkrecht unter den Händen */
const hang = (z: Zug, w: Winkel = {}, tiefer = 0): Haltung => {
  const dx = z.griff - SCHULTER_X
  return hangHaltung(z, [0, HAND_Y - Math.sqrt(ARM_FAUST ** 2 - dx * dx) - tiefer, 0], 0, false, w)
}
/** Oben: Kinn über der Stange, Brust zur Stange, Oberkörper leicht zurückgelehnt */
const oben = (z: Zug, w: Winkel = {}): Haltung => hangHaltung(z, [0, STANGE_Y - 0.03, -0.13], -10, true, w)
const ZUG_TEXTE: [string, string] = ["Schulterblätter nach unten, hochziehen bis das Kinn über der Stange ist", "In 2 bis 3 Sekunden ablassen, bis die Arme gestreckt sind"]
const klimmzug = (z: Zug, extra: Partial<Dehnung> = {}): Dehnung => wdh("schraeg", hang(z), oben(z), 1.4, { aus: 2.4, texte: ZUG_TEXTE, hilfsmittel: [RACK], ...extra })
/** Obergriff etwas breiter als schulterbreit: Ellbogen nach unten und hinten zu den Rippen */
const OBER: Zug = { griff: 0.21, dreh: OBERGRIFF, ellbogen: [0.35, -1, -0.6] }
/** Untergriff schulterbreit, Ellbogen eng am Körper */
const UNTER_G: Zug = { griff: 0.16, dreh: UNTERGRIFF, ellbogen: [0, -1, -0.5] }
/** Neutral, Hände schulterbreit, Ellbogen nah am Körper */
const NEUTRAL: Zug = { griff: 0.16, dreh: HAMMER, ellbogen: [0, -1, -0.5] }
/** Eineinhalbfach schulterbreit, Ellbogen seitlich nach unten zu den Hüften */
const WEIT: Zug = { griff: 0.25, dreh: OBERGRIFF, ellbogen: [1, -0.9, -0.15] }
/** L-Sitz: Beine gestreckt waagerecht nach vorn */
const L_SITZ: Winkel = { ...B("huefte", [92, 3, 0]), ...B("knie", [2]), ...B("fuss", [10, 0]) }
/** Box unter der Stange: im Hang berühren die Zehen die Box */
const BOX_HOCH = 0.2
const BOX: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: BOX_HOCH, versatz: [-0.1, 0.06] }
/** schulterbreit im Obergriff */
const SCHULTERBREIT: Zug = { griff: 0.17, dreh: OBERGRIFF, ellbogen: [0.2, -1, -0.6] }
const BOX_HANG: Haltung = (() => {
  const h = hang(SCHULTERBREIT, { ...B("huefte", [14, 3, 0]), ...B("knie", [22]), ...B("fuss", [-30, 0]) })
  return { ...h, ziele: { ...h.ziele, fuss_l: { pos: [0.1, BOX_HOCH + 0.08, 0.06] }, fuss_r: { pos: [-0.1, BOX_HOCH + 0.08, 0.06] } } }
})()

/** Schulterblatt-Klimmzug: Schultern locker zu den Ohren; oben ziehen sie nach unten und heben den Körper an */
const SB_UNTEN = hang({ ...OBER, griff: 0.15 }, B("schulterblatt", [18, 0]), 0.02)


// ---------------------------------------------------------------- Rudern vorgebeugt
// Füße hüftbreit, Knie leicht gebeugt, Oberkörper aus der Hüfte geneigt (kipp gegen die Senkrechte); unten hängen
// die Arme senkrecht unter den Schultern, oben ist die Last am Bauchnabel, am unteren Brustbein bzw. den unteren
// Rippen, die Ellbogen gehen nach hinten.
const SCHULTER_HAENGEND: YZ = [0.352, -0.004]
interface Row {
  kipp: number
  knie: number
  /** halber Fersenabstand */
  breit: number
  griff: number
  dreh: number
  /** Last oben im Rahmen der Schultern (den Rumpf hinauf, vor dem Rumpf) */
  oben: [number, number]
  /** Ellbogen eng am Körper */
  eng?: boolean
  /** Stange unten auf dem Boden (Pendlay): Höhe der Hand unten */
  unten?: number
  arme?: Winkel
}
const rowKoerper = (r: Row) => {
  const schien = r.knie * 0.5
  const knieY = 0.076 + 0.47 * Math.cos(rad(schien)), knieZ = -0.05 + 0.062 + 0.47 * Math.sin(rad(schien))
  const ober = rad(schien - r.knie)
  const hy = knieY + 0.383 * Math.cos(ober), hz = knieZ + 0.383 * Math.sin(ober)
  const s = dreheYZ(r.kipp, SCHULTER_HAENGEND)
  return { hy, hz, sy: hy + 0.003 + s[0], sz: hz + s[1] }
}
const rowHaltung = (r: Row, gezogen: boolean, nur?: "l" | "r"): Haltung => {
  const k = rowKoerper(r)
  // Stange (Hände) unten über dem Mittelfuß: die Füße stehen so, dass die Schultern darüber liegen
  const dz = 0.01 - k.sz
  const ziele: Ziele = {
    ferse_l: { pos: [r.breit, 0.022, -0.05 + dz] },
    fuss_l: { pos: [r.breit + 0.02, 0.034, 0.07 + dz] },
    ferse_r: { pos: [-r.breit, 0.022, -0.05 + dz] },
    fuss_r: { pos: [-r.breit - 0.02, 0.034, 0.07 + dz] },
  }
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    if (gezogen && (!nur || nur === n)) {
      const hand: P3 = [sx * r.griff, r.oben[0], r.oben[1]]
      ziele[`hand_${n}`] = { pos: hand, bezug: "schultern" }
      const e = ellbogenKreis([SCHULTER_X, 0, 0], [r.griff, r.oben[0], r.oben[1]], [r.eng ? 0 : 0.6, r.eng ? 0.15 : 0.3, -1])
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    } else ziele[`hand_${n}`] = { pos: [sx * r.griff, r.unten ?? k.sy - 0.5, 0.01] }
  }
  return H(
    { ...B("huefte", [r.kipp + r.knie * 0.5, r.breit > 0.15 ? 18 : 6, 0]), ...B("knie", [r.knie]), ...B("fuss", [r.knie * 0.5, 0]), ...B("schulter", gezogen && !nur ? [-20, 25, 0] : [r.kipp - 2, 8, 0]), ...B("ellbogen", [gezogen && !nur ? 100 : 6, r.dreh]), ...FAUST, hals: [-r.kipp * 0.4, 0, 0], ...(nur ? { [`schulter_${nur}`]: [-20, 25, 0], [`ellbogen_${nur}`]: [100, r.dreh] } : {}), ...r.arme },
    [r.kipp, 0, 0],
    { pos: [0, k.hy + 0.003, k.hz + dz], boden: false, ziele },
  )
}
const RUDERN: [string, string] = ["Zum Bauch ziehen, Ellbogen nach hinten", "Kontrolliert senken, bis die Arme gestreckt sind"]
const rudern = (r: Row, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", rowHaltung(r, false), rowHaltung(r, true), 1.2, { aus: 1.8, halten: 0.5, texte: RUDERN, hilfsmittel, ...extra })
/** Langhantel: Oberkörper etwa 30 bis 45 Grad über der Waagerechten, Griff etwas breiter als schulterbreit, zum Bauchnabel */
const ROW_LH: Row = { kipp: 52, knie: 22, breit: 0.1, griff: 0.21, dreh: OBERGRIFF, oben: [-0.27, 0.13] }


// ---------------------------------------------------------------- Latzug sitzend
// Oberschenkel unter dem Polster, Füße am Boden, Oberkörper leicht zurückgelehnt. Oben sind die Arme gestreckt
// (etwa senkrecht zur Stange), unten ist die Stange knapp unter dem Kinn an der oberen Brust bzw. die Griffe etwa
// auf Schulterhöhe; die Ellbogen zeigen nach unten, beim weiten Griff seitlich, sonst nah am Körper.
interface Lat {
  griff: number
  dreh: number
  /** Rücklage in Grad (positiv = zurück) */
  rueck: number
  /** Hände unten im Rahmen der Schultern (y den Rumpf hinauf, z vor dem Rumpf) */
  unten: [number, number]
  /** Ellbogen unten seitlich (weiter Griff) statt nah am Körper */
  weit?: boolean
  /** nur der rechte Arm zieht */
  einarm?: boolean
  /** Richtung der Ellbogen unten, wenn abweichend */
  ell?: P3
}
const LAT_FUESSE: Ziele = {
  ferse_l: { pos: [0.15, 0.022, 0.36] },
  fuss_l: { pos: [0.17, 0.034, 0.48] },
  ferse_r: { pos: [-0.15, 0.022, 0.36] },
  fuss_r: { pos: [-0.17, 0.034, 0.48] },
}
const LAT_BEINE: Winkel = { ...B("huefte", [84, 8, 0]), ...B("knie", [90]), ...B("fuss", [4, 0]), hals: [-8, 0, 0], ...FAUST }
const LAT_FREI: Winkel = { schulter_l: [8, 14, 0], ellbogen_l: [70, 0] }
const latHaltung = (l: Lat, gezogen: boolean, kniend?: number): Haltung => {
  const ziele: Ziele = kniend === undefined ? { ...LAT_FUESSE } : {}
  for (const sx of l.einarm ? ([-1] as const) : ([1, -1] as const)) {
    const n = sx === 1 ? "l" : "r"
    if (gezogen) {
      const h: P3 = [l.griff, l.unten[0], l.unten[1]]
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
      const e = ellbogenKreis([SCHULTER_X, 0, 0], h, l.ell ?? (l.weit ? [1, -0.6, -0.25] : [0.15, -1, -0.5]))
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    } else {
      // Arm gestreckt, in der Welt etwa senkrecht: im zurückgelehnten Rumpf nach vorn geneigt
      const dx = l.griff - SCHULTER_X, lang = Math.sqrt(ARM_FAUST * ARM_FAUST - dx * dx) * 0.975 + (l.einarm ? 0.03 : 0)
      ziele[`hand_${n}`] = { pos: [sx * l.griff, lang * Math.cos(rad(l.rueck)), lang * Math.sin(rad(l.rueck)) + 0.03], bezug: "schultern" }
    }
  }
  const arme: Winkel = gezogen
    ? { ...B("schulterblatt", [-12, -10]), ...B("schulter", [28, l.weit ? 60 : 25, 0]), ...B("ellbogen", [118, l.dreh]) }
    : { ...B("schulter", [168, l.weit ? 25 : 10, 0]), ...B("ellbogen", [6, l.dreh]) }
  if (kniend !== undefined) return mit(KNIESTAND, { dreh: [kniend, 0, 0], g: { ...KNIESTAND.g, ...B("huefte", [kniend, 4, 0]), ...arme, ...FAUST, ...(l.einarm ? LAT_FREI : {}) }, ziele })
  return H({ ...LAT_BEINE, ...arme, ...(l.einarm ? LAT_FREI : {}) }, [-l.rueck, 0, 0], { pos: [0, 0.57, 0], boden: false, ziele })
}
const LAT_KABEL: P3 = [0, 2.15, 0.12]
const latSitz = (l: Lat, griff: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", latHaltung(l, false), latHaltung(l, true), 1.4, {
    aus: 2.4,
    texte: ["Schulterblätter nach unten, Stange zur oberen Brust", "Kontrolliert nach oben, bis die Arme gestreckt sind"],
    hilfsmittel: [...griff, { art: "kabel", von: l.einarm ? "hand_r" : "haende", rolle: LAT_KABEL, turm: 0.72 }, { art: "bank", unter: "gesaess", hoehe: 0.42 }, KNIEPOLSTER],
    ...extra,
  })
const LAT_STANGE: Hilfsmittel = { art: "latstange", von: "hand_l", bis: "hand_r" }
const LAT_WEIT: Lat = { griff: 0.25, dreh: OBERGRIFF, rueck: 15, unten: [-0.07, 0.15], weit: true }


// ---------------------------------------------------------------- Überzug
// Arme mit gleichbleibend leicht gebeugten Ellbogen im Bogen von schräg oben bis zu den Oberschenkeln (stehend),
// von der Verlängerung des Rumpfes bis zur Stirn (kniend) bzw. liegend zwischen über der Brust und hinter dem Kopf.
/** Hand im Rahmen der Schultern bei Beugung phi des Arms (0 = am Rumpf nach unten, 90 = nach vorn, 180 = über Kopf) */
const armBogen = (x: number, phi: number, lang: number): P3 => {
  const l = Math.sqrt(Math.max(0, lang * lang - (x - SCHULTER_X) ** 2))
  return [x, -Math.cos(rad(phi)) * l, Math.sin(rad(phi)) * l]
}
const LEICHT = ARM_FAUST * 0.98
const armZiele = (ziele: Ziele, x: number, phi: number, lang = LEICHT, seiten: (1 | -1)[] = [1, -1], ellbogen?: P3) => {
  for (const sx of seiten) {
    const n = sx === 1 ? "l" : "r"
    const h = armBogen(x, phi, lang)
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    if (ellbogen) {
      const e = ellbogenKreis([SCHULTER_X, 0, 0], h, ellbogen)
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    }
  }
  return ziele
}
const UZ_KIPP = 25, UZ_KNIE = 14
const ueberStand = (phi: number, einarm = false): Haltung => {
  const k = rowKoerper({ kipp: UZ_KIPP, knie: UZ_KNIE } as Row)
  const dz = -0.05 - k.sz
  const ziele: Ziele = {
    ferse_l: { pos: [0.1, 0.022, -0.1 + dz] },
    fuss_l: { pos: [0.12, 0.034, 0.02 + dz] },
    ferse_r: { pos: [-0.1, 0.022, -0.1 + dz] },
    fuss_r: { pos: [-0.12, 0.034, 0.02 + dz] },
  }
  armZiele(ziele, einarm ? 0.12 : 0.15, phi, einarm ? LEICHT - 0.012 : LEICHT, einarm ? [-1] : [1, -1], [1, 0, phi > 90 ? 0.3 : -0.3])
  const frei: Winkel = einarm ? { schulter_l: [4, 8, 0], ellbogen_l: [12, 0] } : {}
  return H(
    { ...B("huefte", [UZ_KIPP + UZ_KNIE * 0.5, 6, 0]), ...B("knie", [UZ_KNIE]), ...B("fuss", [UZ_KNIE * 0.5, 0]), ...B("schulter", [phi, 10, 0]), ...B("ellbogen", [20, einarm ? HAMMER : OBERGRIFF]), ...FAUST, hals: [-10, 0, 0], ...frei },
    [UZ_KIPP, 0, 0],
    { pos: [0, k.hy + 0.003, k.hz + dz], boden: false, ziele },
  )
}
/** stehend: Start schräg oben (im Rumpf 160 Grad, in der Welt etwa 45 Grad über waagerecht), Ende an den Oberschenkeln */
const UZ_OBEN = 160, UZ_UNTEN = 22
const UZ_TEXTE: [string, string] = ["Im Bogen nach unten bis zu den Oberschenkeln, Ellbogen bleiben leicht gebeugt", "Langsam nach oben, bis du seitlich am Rücken die Dehnung spürst"]
const ueberzugStand = (hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", ueberStand(UZ_OBEN), ueberStand(UZ_UNTEN), 1.4, { aus: 2.0, halten: 0.4, texte: UZ_TEXTE, hilfsmittel, ...extra })
/** kniend: Oberkörper vorgeneigt, Arme in Verlängerung des Rumpfes; Ende Hände vor der Stirn, Rumpf leicht aufgerichtet */
const ueberKnie = (kipp: number, ziehen: boolean): Haltung => {
  const ziele: Ziele = {}
  if (ziehen)
    for (const sx of [1, -1] as const) {
      const n = sx === 1 ? "l" : "r"
      const h: P3 = [0.06, 0.15, 0.17]
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
      const e = ellbogenKreis([SCHULTER_X, 0, 0], h, [0.5, -0.4, 1])
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    }
  else armZiele(ziele, 0.12, 172)
  return mit(KNIESTAND, { dreh: [kipp, 0, 0], g: { ...B("huefte", [kipp, 4, 0]), ...B("schulter", ziehen ? [100, 30, 0] : [170, 8, 0]), ...B("ellbogen", [ziehen ? 110 : 20, HAMMER]), ...FAUST, hals: [-kipp * 0.3, 0, 0] }, ziele })
}
/** liegend auf der Flachbank: Rücken auf der Bank, Kopf am Ende, Füße fest am Boden */
const ueberLiegend = (phi: number, ellbogen: "leicht" | "rechtwinklig", x: number, dreh: number, lage = FLACH): Haltung => {
  const ziele: Ziele = {}
  if (ellbogen === "leicht") armZiele(ziele, x, phi, LEICHT, [1, -1], [1, 0, 0])
  else
    for (const sx of [1, -1] as const) {
      const n = sx === 1 ? "l" : "r"
      // Oberarm in Richtung phi, Unterarm im rechten Winkel Richtung Kopf
      const o: P3 = [SCHULTER_X + 0.01, -Math.cos(rad(phi)) * OBERARM, Math.sin(rad(phi)) * OBERARM]
      const u = 0.29
      const h: P3 = [x, o[1] + Math.sin(rad(phi)) * u, o[2] + Math.cos(rad(phi)) * u]
      ziele[`ellbogen_${n}`] = { pos: [sx * o[0], o[1], o[2]], bezug: "schultern" }
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    }
  return liegen(lage, ziele, { ...B("schulter", [phi, 6, 0]), ...B("ellbogen", [ellbogen === "leicht" ? 20 : 90, dreh]) })
}
/** Flachbank, der Kopf liegt am Ende: die Bank endet an den Schultern, Kopf und Arme sind hinten frei */
const FLACHBANK_KOPF: Hilfsmittel = FLACHBANK
/** SZ-Überzug: Kopf ganz am Ende der Bank, damit die Unterarme hinter dem Kopf frei unter die Bankhöhe gehen; Füße weiter vorn */
const SZ_BANK: Hilfsmittel = { art: "bank", unter: "bws", hoehe: 0.45, versatz: [0, 0.2] }
const SZ_LAGE = { ...FLACH, fersenZ: 0.58 }


// ---------------------------------------------------------------- Rudern mit Brustauflage (Schrägbank)
// Die Brust liegt auf der Lehne; unten hängen die Arme gestreckt senkrecht, oben ist die Hantel an den unteren
// Rippen bzw. an der Hüfte, die Ellbogen gehen nach hinten (Helms: leicht nach außen, sonst nach hinten oben).
const LEHNE_KIPP = 50
/** senkrecht nach unten hängender Arm im Rahmen der Schultern */
const haengend = (x: number, kipp: number, lang = ARM_FAUST * 0.99): P3 => {
  const l = Math.sqrt(lang * lang - (x - SCHULTER_X) ** 2)
  return [x, -Math.cos(rad(kipp)) * l, Math.sin(rad(kipp)) * l]
}
interface BR {
  oben: [number, number]
  ellbogen: P3
  einarm?: boolean
  /** Neigung des Oberkörpers gegen die Senkrechte (Bank 30 Grad = 60) */
  kipp?: number
}
const brustRudern = (b: BR, gezogen: boolean): Haltung => {
  const ziele: Ziele = { ...BRUST_LEHNE.ziele }
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const zieht = gezogen && (!b.einarm || sx === -1)
    const h: P3 = zieht ? [0.17, b.oben[0], b.oben[1]] : haengend(0.19, b.kipp ?? LEHNE_KIPP)
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    if (zieht) {
      const e = ellbogenKreis([SCHULTER_X, 0, 0], h, b.ellbogen)
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    }
  }
  const k = b.kipp ?? LEHNE_KIPP
  return mit(BRUST_LEHNE, { dreh: [k, 0, 0], g: { ...BRUST_LEHNE.g, ...B("huefte", [2 + k - LEHNE_KIPP, 6, 0]), ...B("schulter", gezogen ? [-10, 25, 0] : [k, 8, 0]), ...B("ellbogen", [gezogen ? 100 : 6, HAMMER]) }, ziele })
}
const brustRow = (b: BR, texte: [string, string], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", brustRudern(b, false), brustRudern(b, true), 1.2, { aus: 2.0, halten: 0.6, texte, hilfsmittel: b.einarm ? [...KH_R, BAUCH_LEHNE] : [...KH, BAUCH_LEHNE], ...extra })


// ---------------------------------------------------------------- Einarmiges Kurzhantelrudern mit Abstützen
// Rechts zieht, links stützt. Kniend: linkes Knie und linke Hand auf der Flachbank, das rechte Bein steht seitlich
// daneben, der Rücken ist etwa waagerecht. Schwer und Kroc: Schrittstellung neben der Bank, die freie Hand stützt.
interface ER {
  kipp: number
  ziele: Ziele
  /** Beine und Stützarm als Ausgangswinkel */
  w: Winkel
  pos: P3
  /** Hand oben im Rahmen der Schultern (zur Hüfte) */
  oben: [number, number]
  /** Neigung des Beckens frei (kniend auf der Bank) */
  drehFrei?: boolean
}
const einarmRudern = (e: ER, gezogen: boolean): Haltung => {
  const ziele: Ziele = { ...e.ziele }
  const h: P3 = gezogen ? [0.17, e.oben[0], e.oben[1]] : haengend(0.16, e.kipp)
  ziele.hand_r = { pos: [-h[0], h[1], h[2]], bezug: "schultern" }
  if (gezogen) {
    const el = ellbogenKreis([SCHULTER_X, 0, 0], h, [0.1, 0.1, -1])
    ziele.ellbogen_r = { pos: [-el[0], el[1], el[2]], bezug: "schultern" }
  }
  return H(
    { ...e.w, schulter_r: gezogen ? [-15, 12, 0] : [e.kipp, 6, 0], ellbogen_r: [gezogen ? 100 : 6, HAMMER], ...FAUST, hals: [-e.kipp * 0.35, 0, 0] },
    [e.kipp, 0, 0],
    { pos: e.pos, boden: false, beckenFrei: true, drehFrei: e.drehFrei, ziele },
  )
}
const EINARM_BANK_Y = 0.45
const ER_KNIE: ER = {
  kipp: 86,
  drehFrei: true,
  oben: [-0.32, 0.04],
  pos: [0.02, 0.9, 0],
  w: { huefte_l: [86, 2, 0], knie_l: [92], fuss_l: [-60, 0], huefte_r: [62, 14, 0], knie_r: [14], fuss_r: [10, 0], schulter_l: [86, 6, 0], ellbogen_l: [6, 90], hand_l: [80, 0] },
  ziele: {
    knie_l: { pos: [0.11, EINARM_BANK_Y + 0.05, 0.0] },
    // Schienbein liegt auf der Bank
    fuss_l: { pos: [0.11, EINARM_BANK_Y + 0.04, -0.56] },
    hand_l: { pos: [0.15, EINARM_BANK_Y + 0.03, 0.5] },
    ferse_r: { pos: [-0.3, 0.022, -0.02] },
    fuss_r: { pos: [-0.32, 0.034, 0.1] },
  },
}
const SCHRITT_HOCH = 0.5
const erSchritt = (kipp: number): ER => ({
  kipp,
  oben: [-0.32, 0.04],
  pos: [0, 0.9, 0],
  w: { huefte_l: [kipp + 15, 6, 0], knie_l: [25], fuss_l: [12, 0], huefte_r: [kipp - 15, 10, 0], knie_r: [10], fuss_r: [-4, 0], schulter_l: [kipp, 6, 0], ellbogen_l: [6, 90], hand_l: [80, 0] },
  ziele: {
    ferse_l: { pos: [0.1, 0.022, 0.18] },
    fuss_l: { pos: [0.1, 0.034, 0.3] },
    ferse_r: { pos: [-0.17, 0.022, -0.42] },
    fuss_r: { pos: [-0.18, 0.034, -0.3] },
    // die Bank steht längs links neben dem Körper
    hand_l: { pos: [0.4, SCHRITT_HOCH + 0.03, kipp > 75 ? 0.5 : 0.42] },
  },
})
const einarmRow = (e: ER, bank: Hilfsmittel, texte: [string, string], tempo = 1.2): Dehnung =>
  wdh("seite", einarmRudern(e, false), einarmRudern(e, true), tempo, { aus: tempo + 0.8, halten: 0.4, seiten: true, texte, hilfsmittel: [...KH_R, bank] })


// ---------------------------------------------------------------- Kabelrudern im Sitzen
// Gesäß auf dem Sitz, Füße fest auf der Plattform, Knie leicht gebeugt. Vorn sind die Arme gestreckt (der Oberkörper
// darf sich leicht nach vorn neigen), hinten ist der Griff am Bauch bzw. die Stange an der unteren Brust und die
// Ellbogen sind hinter dem Körper.
interface KR {
  /** Neigung vorn und hinten (positiv nach vorn) */
  vor: [number, number]
  griff: number
  dreh: number
  /** Hand hinten im Rahmen der Schultern */
  hinten: [number, number]
  /** Ellbogen hinten: Richtung */
  ellbogen: P3
  einarm?: boolean
  /** nur die Schulterblätter: Arme bleiben gestreckt */
  schulterblatt?: boolean
}
const KR_PLATTFORM = 0.12
const KR_FUESSE: Ziele = {
  ferse_l: { pos: [0.13, KR_PLATTFORM + 0.022, 0.68] },
  fuss_l: { pos: [0.14, KR_PLATTFORM + 0.034, 0.8] },
  ferse_r: { pos: [-0.13, KR_PLATTFORM + 0.022, 0.68] },
  fuss_r: { pos: [-0.14, KR_PLATTFORM + 0.034, 0.8] },
}
const krHaltung = (k: KR, gezogen: boolean): Haltung => {
  const vor = gezogen ? k.vor[1] : k.vor[0]
  const ziele: Ziele = { ...KR_FUESSE }
  for (const sx of k.einarm ? ([-1] as const) : ([1, -1] as const)) {
    const n = sx === 1 ? "l" : "r"
    if (gezogen && !k.schulterblatt) {
      const h: P3 = [k.griff, k.hinten[0], k.hinten[1]]
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
      const e = ellbogenKreis([SCHULTER_X, 0, 0], h, k.ellbogen)
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    } else {
      // Arme waagerecht nach vorn (im leicht geneigten Rumpf etwas nach oben), gestreckt
      // Schulterblätter zusammen: nur die Winkel der Schulterblätter ändern sich, die Arme bleiben gestreckt
      if (k.schulterblatt && gezogen) continue
      const h = armBogen(k.griff, 90 + vor - 8, ARM_FAUST * 0.99)
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    }
  }
  if (k.einarm) ziele.hand_l = { pos: [0.1, 0.62, 0.24] }
  const arme: Winkel = gezogen && !k.schulterblatt ? { ...B("schulter", [-20, 20, 0]), ...B("ellbogen", [100, k.dreh]) } : { ...B("schulter", [82, 8, 0]), ...B("ellbogen", [6, k.dreh]) }
  const blatt: Winkel = k.schulterblatt ? B("schulterblatt", [0, gezogen ? -20 : 18]) : gezogen ? B("schulterblatt", [0, -12]) : B("schulterblatt", [0, 10])
  const frei: Winkel = k.einarm ? { schulter_l: [30, 10, 0], ellbogen_l: [50, 0] } : {}
  return H({ ...B("huefte", [84, 8, 0]), ...B("knie", [40]), ...B("fuss", [10, 0]), ...FAUST, ...arme, ...blatt, ...frei }, [vor, 0, 0], { pos: [0, 0.55, 0], boden: false, ziele })
}
const KR_ROLLE: P3 = [0, 0.32, 1.05]
const KR_SITZ: Hilfsmittel = { art: "bank", unter: "gesaess", hoehe: 0.45, versatz: [0, -0.3] }
const KR_PLATTE: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: KR_PLATTFORM, versatz: [-0.14, -0.05] }
const kabelRow = (k: KR, griff: Hilfsmittel[], texte: [string, string], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", krHaltung(k, false), krHaltung(k, true), 1.2, {
    aus: 2.0,
    halten: 0.5,
    texte,
    hilfsmittel: [...griff, { art: "kabel", von: k.einarm ? "hand_r" : "haende", rolle: k.einarm ? [-0.12, KR_ROLLE[1], KR_ROLLE[2]] : KR_ROLLE }, KR_SITZ, KR_PLATTE],
    ...extra,
  })
const KR_V: KR = { vor: [12, 0], griff: 0.06, dreh: HAMMER, hinten: [-0.32, 0.14], ellbogen: [0.15, 0, -1] }


// ---------------------------------------------------------------- Rudern im Stand, im Halbkniestand und im Langsitz
// Vorn sind die Arme gestreckt in Richtung der Befestigung, hinten die Hände neben den Rippen bzw. am Bauch, die
// Ellbogen nah am Körper hinter dem Rumpf (hohes Kabel: Ellbogen schräg nach unten hinten).
const handRumpf = (ziele: Ziele, sx: 1 | -1, h: P3, ell?: P3) => {
  const n = sx === 1 ? "l" : "r"
  ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
  if (ell) {
    const e = ellbogenKreis([SCHULTER_X, 0, 0], h, ell)
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
  }
}
const RIPPEN: P3 = [0.17, -0.24, 0.1]
const NAH: P3 = [0.15, 0, -1]
const standRudern = (einarm: boolean, gezogen: boolean): Haltung => {
  const ziele: Ziele = einarm
    ? { ferse_l: { pos: [0.1, 0.022, 0.2] }, fuss_l: { pos: [0.11, 0.034, 0.32] }, ferse_r: { pos: [-0.1, 0.022, -0.3] }, fuss_r: { pos: [-0.11, 0.034, -0.18] } }
    : { ferse_l: { pos: [0.1, 0.022, -0.05] }, fuss_l: { pos: [0.11, 0.034, 0.07] }, ferse_r: { pos: [-0.1, 0.022, -0.05] }, fuss_r: { pos: [-0.11, 0.034, 0.07] } }
  for (const sx of einarm ? ([-1] as const) : ([1, -1] as const)) handRumpf(ziele, sx, gezogen ? RIPPEN : armBogen(0.15, 92, ARM_FAUST * 0.99), gezogen ? NAH : undefined)
  const beine: Winkel = einarm ? { huefte_l: [22, 6, 0], knie_l: [22], fuss_l: [0, 0], huefte_r: [-14, 6, 0], knie_r: [10], fuss_r: [4, 0] } : { ...B("huefte", [6, 6, 0]), ...B("knie", [10]), ...B("fuss", [4, 0]) }
  const frei: Winkel = einarm ? { schulter_l: [4, 8, 0], ellbogen_l: [12, 0] } : {}
  const arme: Winkel = gezogen ? { ...B("schulter", [-20, 16, 0]), ...B("ellbogen", [100, HAMMER]) } : { ...B("schulter", [88, 8, 0]), ...B("ellbogen", [6, HAMMER]) }
  return H({ ...beine, ...arme, ...frei, ...FAUST }, [2, 0, 0], { pos: [0, 0.92, 0], boden: false, beckenFrei: true, ziele })
}
const STAND_ANKER: P3 = [0, 1.3, 1.25]
const standRow = (einarm: boolean, hilfsmittel: Hilfsmittel[], texte: [string, string], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", standRudern(einarm, false), standRudern(einarm, true), 1.2, { aus: 2.0, halten: 0.5, texte, hilfsmittel, ...(einarm ? { seiten: true } : {}), ...extra })
const hochRudern = (gezogen: boolean): Haltung => {
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) handRumpf(ziele, sx, gezogen ? [0.2, -0.1, 0.08] : armBogen(0.17, 135, ARM_FAUST * 0.99), gezogen ? [0.4, -1, -0.6] : undefined)
  return mit(HALBKNIESTAND, { g: { ...HALBKNIESTAND.g, ...B("schulter", gezogen ? [10, 40, 0] : [135, 10, 0]), ...B("ellbogen", [gezogen ? 115 : 6, HAMMER]), ...FAUST }, ziele })
}
const sitzRudern = (gezogen: boolean): Haltung => {
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) handRumpf(ziele, sx, gezogen ? [0.14, -0.32, 0.13] : armBogen(0.14, 80, ARM_FAUST * 0.99), gezogen ? NAH : undefined)
  return mit(LANGSITZ, { g: { ...LANGSITZ.g, ...B("knie", [10]), ...B("schulter", gezogen ? [-20, 16, 0] : [80, 8, 0]), ...B("ellbogen", [gezogen ? 100 : 6, HAMMER]), ...FAUST }, ziele })
}


// ---------------------------------------------------------------- Gorilla-Rudern und Renegade Row
/** Gorilla: Stand breiter als schulterbreit, Hüfte und Knie gebeugt, Oberkörper fast waagerecht, Kettlebells zwischen den Füßen */
const GORILLA: Row = { kipp: 80, knie: 82, breit: 0.27, griff: 0.12, dreh: HAMMER, oben: [-0.32, 0.06], unten: 0.285 }
const gorilla = (): Dehnung => {
  const u = rowHaltung(GORILLA, false)
  return folge("seite", [[u, 1.2, "Beide Kettlebells greifen, Arme gestreckt"], [rowHaltung(GORILLA, true, "l"), 1.0, "Links zur Hüfte ziehen, rechts in den Boden drücken"], [u, 1.2, "Kontrolliert absenken"], [rowHaltung(GORILLA, true, "r"), 1.0, "Rechts zur Hüfte ziehen, Oberkörper bleibt ruhig"]], { hilfsmittel: [{ art: "kettlebell", an: "hand_l" }, { art: "kettlebell", an: "hand_r" }] })
}
/** Renegade: hoher Liegestütz auf zwei Kurzhanteln, Hände schulterbreit, Füße etwas mehr als hüftbreit */
const RENEGADE = stuetzPaar({ hand: 0.15, handHoch: 0.07, fuss: 0.13 })
const renegadeZug = (n: "l" | "r"): Haltung => {
  const o = RENEGADE.o
  const sx = n === "l" ? 1 : -1
  const h: P3 = [0.15, -0.36, 0.02]
  const e = ellbogenKreis([SCHULTER_X, 0, 0], h, [0.1, 0, -1])
  return mit(o, { g: { ...o.g, [`schulter_${n}`]: [-20, 12, 0], [`ellbogen_${n}`]: [100, HAMMER] }, ziele: { ...o.ziele, [`hand_${n}`]: { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }, [`ellbogen_${n}`]: { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" } } })
}


// ---------------------------------------------------------------- Rudern im Hang (invertiert, Tisch, Füße erhöht)
// Der Körper ist von den Fersen (Tisch: von den Knien) bis zu den Schultern gerade und dreht sich um diesen Punkt.
// Unten sind die Arme gestreckt, oben liegt die untere Brust an der Stange bzw. Tischkante.
interface Hang {
  /** Drehpunkt (Knöchel bzw. Knie) in der Welt: y, z */
  dreh: YZ
  /** Drehpunkt bis Schultergelenk entlang des Körpers */
  lang: number
  /** Drehpunkt bis Becken */
  becken: number
  /** Höhe der Stange (Mitte) */
  stange: number
  griff: number
  dreh_: number
  knie?: boolean
  /** zusätzliche Reichweite unten */
  reich?: number
}
/** Kontakt oben: untere Brust, 8 cm zum Becken hin und 15,5 cm vor dem Schultergelenk */
const HANG_BRUST: YZ = [0.08, 0.155]
/** unten gleiten die Schulterblätter nach vorn: die Hand reicht weiter als der gestreckte Arm */
const HANG_REICH = ARM_FAUST * 0.99 + 0.03
/** Körperrichtung (zum Kopf) und Senkrechte (zur Brust) bei Neigung th über der Waagerechten */
const hangU = (th: number): YZ => [Math.sin(rad(th)), -Math.cos(rad(th))]
const hangN = (th: number): YZ => [Math.cos(rad(th)), Math.sin(rad(th))]
const hangPunkt = (h: Hang, th: number, a: number, b: number): YZ => {
  const u = hangU(th), n = hangN(th)
  return [h.dreh[0] + a * u[0] + b * n[0], h.dreh[1] + a * u[1] + b * n[1]]
}
const hangGeometrie = (h: Hang) => {
  // oben: untere Brust an der Stange
  let th = 0
  for (let i = 0; i < 60; i++) {
    const y = hangPunkt(h, th, h.lang - HANG_BRUST[0], HANG_BRUST[1])[0]
    th += (h.stange - y) * 40
  }
  const stangeZ = hangPunkt(h, th, h.lang - HANG_BRUST[0], HANG_BRUST[1])[1]
  const hand: YZ = [h.stange - 0.03, stangeZ]
  // unten: Schulter auf dem Kreis um den Drehpunkt, gestreckter Arm bis zur Hand
  let tu = th
  for (let i = 0; i < 80; i++) {
    const s = hangPunkt(h, tu, h.lang, 0)
    const d = Math.hypot(s[0] - hand[0], s[1] - hand[1])
    tu -= (HANG_REICH + (h.reich ?? 0) - d) * 30
  }
  return { oben: th, unten: tu, hand }
}
const invHaltung = (h: Hang, gezogen: boolean): Haltung => {
  const g = hangGeometrie(h)
  const th = gezogen ? g.oben : g.unten
  const b = hangPunkt(h, th, h.becken, 0)
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    ziele[`hand_${n}`] = { pos: [sx * h.griff, g.hand[0], g.hand[1]] }
    if (h.knie) {
      ziele[`ferse_${n}`] = { pos: [sx * 0.12, 0.022, h.dreh[1] + 0.1] }
      ziele[`fuss_${n}`] = { pos: [sx * 0.13, 0.034, h.dreh[1] + 0.22] }
    } else ziele[`ferse_${n}`] = { pos: [sx * 0.1, h.dreh[0] - 0.045, h.dreh[1] + 0.06] }
  }
  const beine: Winkel = h.knie ? { ...B("huefte", [0, 6, 0]), ...B("knie", [95]), ...B("fuss", [0, 0]) } : { ...B("huefte", [0, 6, 0]), ...B("knie", [3]), ...B("fuss", [20, 0]) }
  const arme: Winkel = gezogen ? { ...B("schulter", [30, 40, 0]), ...B("ellbogen", [105, h.dreh_]), ...B("schulterblatt", [0, -15]) } : { ...B("schulter", [90, 12, 0]), ...B("ellbogen", [4, h.dreh_]), ...B("schulterblatt", [0, 30]) }
  return H({ ...beine, ...arme, ...FAUST, hals: [h.knie && gezogen ? -30 : 10, 0, 0] }, [th - 90, 0, 0], { pos: [0, b[0], b[1]], boden: false, ziele })
}
const INVERS: Hang = { dreh: [0.07, 0.95], lang: 1.23, becken: 0.86, stange: 0.95, griff: 0.21, dreh_: OBERGRIFF }
const hangRow = (h: Hang, hilfsmittel: Hilfsmittel[], texte: [string, string], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", invHaltung(h, false), invHaltung(h, true), 1.3, { aus: 2.0, halten: 0.5, texte, hilfsmittel, ...extra })
const HANG_STANGE = (h: Hang): Hilfsmittel[] => [{ art: "stange", an: "hand_r" }, { art: "rack", an: "hand_r", z: hangGeometrie(h).hand[1] }]
const INVERS_HOCH: Hang = { ...INVERS, dreh: [0.52, 1.0] }
const TISCH: Hang = { dreh: [0.53, 0.75], lang: 0.76, becken: 0.38, stange: 0.75, griff: 0.17, dreh_: OBERGRIFF, knie: true, reich: 0.012 }


/** Latzug kniend: Oberkörper leicht nach vorn geneigt, das Kabel kommt leicht schräg von oben vorn */
const latKnie = (l: Lat, vor: number, hilfsmittel: Hilfsmittel[], texte: [string, string], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", latHaltung({ ...l, rueck: -vor }, false, vor), latHaltung({ ...l, rueck: -vor }, true, vor), 1.4, { aus: 2.2, halten: 0.4, texte, hilfsmittel, ...extra })

export const KRAFT_ZUG: Record<string, Dehnung> = {
  klimmzug: klimmzug(OBER),
  klimmzug_gewicht: klimmzug(OBER, { texte: ["Mit Gewicht hochziehen, Kinn über die Stange", "Kontrolliert ablassen"] }),
  klimmzug_untergriff: klimmzug(UNTER_G, { texte: ["Ellbogen eng nach unten, Kinn über die Stange", "In 2 bis 3 Sekunden ablassen"] }),
  klimmzug_neutral: klimmzug(NEUTRAL, { texte: ["Ellbogen nah am Körper nach unten ziehen", "Kontrolliert ablassen"] }),
  klimmzug_weit: klimmzug(WEIT, { texte: ["Ellbogen seitlich zu den Hüften, obere Brust zur Stange", "Langsam ablassen"] }),
  klimmzug_exzentrisch_betont: klimmzug(OBER, { ein: 1.4, aus: 4.5, texte: ["Hochziehen", "Sehr langsam ablassen (4 bis 5 s)"] }),
  klimmzug_l_sit: wdh("schraeg", hang({ ...OBER, beine: L_SITZ }), oben({ ...OBER, beine: { ...L_SITZ, ...B("huefte", [82, 3, 0]) } }), 1.4, { aus: 2.4, texte: ["Beine waagerecht halten, hochziehen", "Ablassen, die Beine bleiben vorn"], hilfsmittel: [RACK] }),
  klimmzug_band: klimmzug(OBER, { hilfsmittel: [RACK, { art: "bandanker", von: "knie_l", anker: [0.05, STANGE_Y, 0] }, { art: "bandanker", von: "knie_r", anker: [-0.05, STANGE_Y, 0] }] }),
  klimmzug_negativ: folge("schraeg", [[oben(OBER), 1.0, "Oben, Kinn über der Stange (Sprung oder Stufe)"], [hang(OBER), 4.5, "In 3 bis 5 Sekunden ablassen"], [hang(OBER), 0.8, "Absteigen"]], { hilfsmittel: [RACK] }),
  klimmzug_exzentrisch_overload: folge("schraeg", [[oben(OBER), 1.0, "Oben (Sprung oder Box)"], [hang(OBER), 4.5, "Mit Zusatzgewicht sehr langsam ablassen"], [hang(OBER), 0.8, "Absteigen"]], { hilfsmittel: [RACK] }),
  klimmzug_halten: halte("schraeg", hang(OBER), oben(OBER), { ein: 1.5, aus: 2, hilfsmittel: [RACK] }),
  // Schulterblatt-Klimmzug: Arme bleiben gestreckt, die Schultern sinken erst zu den Ohren und ziehen dann nach unten
  klimmzug_schulterblatt: wdh("schraeg", SB_UNTEN, { ...SB_UNTEN, pos: [0, SB_UNTEN.pos![1] + 0.04, SB_UNTEN.pos![2]], g: { ...SB_UNTEN.g, ...B("schulterblatt", [-18, 0]) } }, 1.0, {
    aus: 1.4,
    halten: 1.2,
    texte: ["Schulterblätter nach unten ziehen, Arme gestreckt", "Locker in den Hang sinken"],
    hilfsmittel: [RACK],
  }),
  // Rudern vorgebeugt
  rudern_lh: rudern(ROW_LH, LH),
  rudern_multipresse: rudern(ROW_LH, LH),
  rudern_lh_untergriff: rudern({ ...ROW_LH, kipp: 45, griff: 0.17, dreh: UNTERGRIFF, eng: true }, LH, { texte: ["Zum Bauchnabel ziehen, Ellbogen eng am Körper", "Bis zur vollen Armstreckung senken"] }),
  // Pendlay: Oberkörper fast waagerecht, Stange über der Fußmitte am Boden, explosiv zum unteren Brustbein
  rudern_pendlay: rudern({ ...ROW_LH, kipp: 88, knie: 82, unten: 0.245, oben: [-0.14, 0.15] }, LH, { ein: 0.6, aus: 1.4, texte: ["Explosiv vom Boden zum unteren Brustbein", "Kontrolliert ablegen, Spannung neu aufbauen"] }),
  rudern_kh_vorgebeugt: rudern({ ...ROW_LH, kipp: 45, griff: 0.17, dreh: HAMMER, oben: [-0.24, 0.08] }, KH, { texte: ["Zu den unteren Rippen ziehen, Schulterblätter zusammen", "Senken, bis die Arme gestreckt sind"] }),
  // Latzug sitzend
  latzug: latSitz(LAT_WEIT, [LAT_STANGE]),
  latzug_wechselnde_griffe: latSitz(LAT_WEIT, [LAT_STANGE], { texte: ["Erster Satz weit: Ellbogen seitlich nach unten", "Oben ganz strecken"] }),
  latzug_neutral: latSitz({ griff: 0.17, dreh: HAMMER, rueck: 8, unten: [-0.08, 0.15] }, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }], { texte: ["Ellbogen nah am Körper zu den Hüften", "Langsam nach oben in die Dehnung"] }),
  latzug_untergriff: latSitz({ griff: 0.18, dreh: UNTERGRIFF, rueck: 12, unten: [-0.08, 0.15] }, [LAT_STANGE], { texte: ["Ellbogen nah am Körper nach unten, Stange zur oberen Brust", "Kontrolliert bis zur vollen Streckung"] }),
  latzug_maschine: latSitz({ griff: 0.22, dreh: HAMMER, rueck: 4, unten: [0.0, 0.12] }, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }], { texte: ["Ellbogen zu den Rippen, Hände auf Schulterhöhe", "Langsam zurück, bis die Arme gestreckt sind"] }),
  latzug_einarmig: latSitz({ griff: 0.15, dreh: HAMMER, rueck: 6, unten: [-0.1, 0.13], einarm: true }, [], { seiten: true, texte: ["Schulter nach unten, Ellbogen nah am Körper zur Hüfte", "Langsam zurück in die volle Dehnung"] }),
  // Überzug
  ueberzug_kabel_gestreckt: ueberzugStand([kabelstange(), { art: "kabel", von: "haende", rolle: [0, 2.15, 0.95] }]),
  ueberzug_band: ueberzugStand([{ art: "bandanker", von: "hand_l", anker: [0.12, 2.05, 1.0] }, { art: "bandanker", von: "hand_r", anker: [-0.12, 2.05, 1.0] }]),
  ueberzug_kabel_einarmig: wdh("seite", ueberStand(UZ_OBEN, true), ueberStand(-8, true), 1.4, {
    aus: 2.0,
    halten: 0.4,
    seiten: true,
    texte: ["Im Bogen bis neben die Hüfte und etwas dahinter", "Langsam zurück, bis du oben die Dehnung spürst"],
    hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.15, 2.15, 0.95] }],
  }),
  ueberzug_kabel_kniend: wdh("seite", ueberKnie(48, false), ueberKnie(30, true), 1.4, {
    aus: 2.0,
    texte: ["Seil im Bogen bis zur Stirn, Oberkörper richtet sich leicht auf", "Langsam zurück in die tiefe Dehnung"],
    hilfsmittel: [kabelstange(), { art: "kabel", von: "haende", rolle: [0, 2.15, 0.85] }],
  }),
  ueberzug_kh: wdh("seite", ueberLiegend(88, "leicht", 0.05, HAMMER), ueberLiegend(172, "leicht", 0.05, HAMMER), 2.2, {
    aus: 1.6,
    texte: ["Hantel im Bogen hinter den Kopf senken, bis die Oberarme neben den Ohren sind", "Im selben Bogen zurück über die Brust"],
    hilfsmittel: [{ art: "hantel", an: "haende" }, FLACHBANK_KOPF],
  }),
  ueberzug_sz: wdh("seite", ueberLiegend(80, "rechtwinklig", 0.1, OBERGRIFF, SZ_LAGE), ueberLiegend(168, "rechtwinklig", 0.1, OBERGRIFF, SZ_LAGE), 2.2, {
    aus: 1.6,
    texte: ["Mit 90 Grad im Ellbogen hinter den Kopf senken, Oberarme neben die Ohren", "Mit dem Rücken zurück bis über die Stirn"],
    hilfsmittel: [...SZ, SZ_BANK],
  }),
  ueberzug_kabel_liegend: wdh("seite", ueberLiegend(170, "leicht", 0.15, OBERGRIFF), ueberLiegend(80, "leicht", 0.15, OBERGRIFF), 1.6, {
    aus: 2.2,
    texte: ["Im Bogen über das Gesicht bis über die Brust ziehen", "Langsam hinter den Kopf zurück in die Dehnung"],
    hilfsmittel: [kabelstange(), { art: "kabel", von: "haende", rolle: [0, 0.15, -1.45] }, FLACHBANK_KOPF],
  }),
  // Rudern mit Brustauflage
  rudern_helms: rudern({ kipp: 48, knie: 18, breit: 0.1, griff: 0.19, dreh: HAMMER, oben: [-0.2, 0.03] }, [...KH, { art: "schraegbank", unter: "becken", lehne: "kopf", hoehe: 0.45, bauch: true, kante: true }], {
    halten: 0.6,
    texte: ["Zum unteren Brustkorb, Ellbogen nach hinten und leicht nach außen", "Langsam bis zur vollen Streckung senken"],
  }),
  rudern_kh_brust: brustRow({ oben: [-0.22, -0.01], ellbogen: [0.35, 0.3, -1], kipp: 60 }, ["Zu den unteren Rippen, Schulterblätter zusammen", "Langsam senken, Schulterblätter gehen auseinander"]),
  rudern_kh_brust_einarmig: brustRow({ oben: [-0.3, 0.0], ellbogen: [0.1, 0, -1], einarm: true, kipp: 60 }, ["Zur Hüfte ziehen, Ellbogen streicht am Körper vorbei", "Langsam in die volle Dehnung"], { seiten: true }),
  // Einarmig mit Abstützen
  rudern_kh: einarmRow(ER_KNIE, { art: "bank", unter: "knie_l", hoehe: EINARM_BANK_Y, versatz: [0, 0.1] }, ["Ellbogen nah am Körper zur Hüfte, ohne aufzudrehen", "Langsam senken, bis der Arm gestreckt ist"]),
  rudern_kh_schwer: einarmRow(erSchritt(80), { art: "bank", unter: "hand_l", hoehe: SCHRITT_HOCH }, ["Kraftvoll zur Hüfte, Rücken bleibt gerade", "Kontrolliert bis zur vollen Streckung"], 1.0),
  rudern_kroc: einarmRow(erSchritt(66), { art: "bank", unter: "hand_l", hoehe: SCHRITT_HOCH }, ["Kraftvoll zur Hüfte, leichter Schwung erlaubt", "In voller Länge absenken"], 0.9),
  // Kabelrudern im Sitzen
  rudern_kabel: kabelRow(KR_V, [], ["Zum Bauch ziehen, Ellbogen nah am Körper, Brust offen", "Kontrolliert nach vorn, Schulterblätter gleiten auseinander"]),
  rudern_kabel_streng: kabelRow({ ...KR_V, vor: [0, 0] }, [], ["Oberkörper bleibt senkrecht, zum Bauch, eine Sekunde halten", "Langsam nach vorn, nur die Schulterblätter gleiten mit"], { halten: 1.0 }),
  rudern_kabel_weit: kabelRow({ vor: [6, 0], griff: 0.26, dreh: OBERGRIFF, hinten: [-0.2, 0.14], ellbogen: [1, -0.25, -0.5] }, [kabelstange()], ["Zur unteren Brust, Ellbogen etwa 60 bis 75 Grad abgespreizt", "Kontrolliert nach vorn, bis die Arme gestreckt sind"]),
  rudern_kabel_einarmig: kabelRow({ ...KR_V, vor: [10, 0], griff: 0.15, hinten: [-0.34, 0.1], einarm: true }, [], ["Ellbogen nah am Körper zur Hüfte, ohne aufzudrehen", "Langsam zurück in die Dehnung"], { seiten: true }),
  rudern_schulterblatt: kabelRow({ ...KR_V, vor: [2, 2], schulterblatt: true }, [], ["Nur die Schulterblätter zusammenziehen, Arme bleiben gestreckt", "Schulterblätter langsam nach vorn gleiten lassen"], { halten: 2.0 }),
  // Rudern im Stand, Halbkniestand, Langsitz
  rudern_band: standRow(false, [{ art: "bandanker", von: "hand_l", anker: [0.06, STAND_ANKER[1], STAND_ANKER[2]] }, { art: "bandanker", von: "hand_r", anker: [-0.06, STAND_ANKER[1], STAND_ANKER[2]] }], ["Hände zu den Rippen, Ellbogen nah am Körper", "Arme kontrolliert wieder nach vorn"]),
  rudern_band_einarmig: standRow(true, [{ art: "bandanker", von: "hand_r", anker: [-0.1, STAND_ANKER[1], STAND_ANKER[2]] }], ["Ellbogen nah am Körper nach hinten, Hand neben die Rippen", "Langsam zurück, ohne aufzudrehen"]),
  rudern_kabel_stehend_einarmig: standRow(true, [{ art: "kabel", von: "hand_r", rolle: [-0.1, 1.25, 1.2] }], ["Ellbogen nah am Körper nach hinten, Hand neben die Rippen", "Kontrolliert nach vorn, Hüfte und Schultern drehen nicht mit"]),
  rudern_kabel_hoch: wdh("schraeg", hochRudern(false), hochRudern(true), 1.2, {
    aus: 2.0,
    halten: 0.4,
    texte: ["Ellbogen schräg nach unten hinten, Hände neben die Brust", "Kontrolliert zurück nach vorn oben"],
    hilfsmittel: [kabelstange(), { art: "kabel", von: "haende", rolle: [0, 2.0, 1.0] }],
  }),
  rudern_band_sitzend: wdh("seite", sitzRudern(false), sitzRudern(true), 1.2, {
    aus: 2.0,
    halten: 0.4,
    texte: ["Hände zum Bauch, Ellbogen nah am Körper", "Arme kontrolliert nach vorn"],
    hilfsmittel: [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_r", bis: "hand_r" }],
  }),
  rudern_gorilla: gorilla(),
  rudern_renegade: folge("seite", [[RENEGADE.o, 1.0, "Hoher Liegestütz auf den Hanteln, Körper gerade"], [renegadeZug("l"), 1.0, "Links zur Hüfte ziehen, Hüfte bleibt waagerecht"], [RENEGADE.o, 1.0, "Kontrolliert abstellen"], [renegadeZug("r"), 1.0, "Rechts zur Hüfte ziehen"]], { hilfsmittel: [{ art: "hantel", an: "hand_l" }, { art: "hantel", an: "hand_r" }] }),
  // Rudern im Hang
  rudern_invertiert: hangRow(INVERS, HANG_STANGE(INVERS), ["Brust zur Stange, Körper bleibt gerade", "Kontrolliert ablassen, bis die Arme gestreckt sind"]),
  rudern_invertiert_erhoeht: hangRow(INVERS_HOCH, [...HANG_STANGE(INVERS_HOCH), { art: "box", unter: "ferse_l", hoehe: 0.45, versatz: [-0.1, 0] }], ["Brust zur Stange, eine Sekunde halten", "Kontrolliert ablassen, Hüfte hängt nicht durch"], { halten: 1.0 }),
  rudern_tisch: hangRow(TISCH, [{ art: "tisch", an: "hand_r" }], ["Brust zur Tischkante ziehen, Körper von Knie bis Schulter gerade", "Langsam ablassen, bis die Arme gestreckt sind"]),
  latzug_kniend: latKnie({ ...LAT_WEIT, griff: 0.22, unten: [-0.08, 0.15], ell: [0.6, -1, -0.3] }, 10, [LAT_STANGE, { art: "kabel", von: "haende", rolle: [0, 2.15, 0.45] }], ["Schulterblätter nach unten, Stange zur oberen Brust", "Kontrolliert nach oben, bis die Arme gestreckt sind"]),
  latzug_kniend_einarmig: latKnie({ griff: 0.14, dreh: HAMMER, rueck: 0, unten: [-0.1, 0.13], einarm: true }, 4, [{ art: "kabel", von: "hand_r", rolle: [-0.14, 2.15, 0.4] }], ["Ellbogen nah am Körper zur Hüfte, Hand neben die Brust", "Langsam zurück in die volle Dehnung"], { seiten: true }),
  latzug_band: latKnie({ griff: 0.2, dreh: OBERGRIFF, rueck: 0, unten: [-0.1, 0.12] }, 2, [{ art: "bandanker", von: "hand_l", anker: [0.1, 2.1, 0.3] }, { art: "bandanker", von: "hand_r", anker: [-0.1, 2.1, 0.3] }], ["Schulterblätter nach unten, Ellbogen zu den Rippen", "Langsam zurück, bis die Arme wieder lang sind"]),
  // Box unter der Stange: im Hang berühren die Zehen die Box bei leicht gebeugten Knien, die Beine helfen nur beim Abdrücken
  klimmzug_box: wdh("schraeg", BOX_HANG, oben(SCHULTERBREIT, { ...B("huefte", [-6, 3, 0]), ...B("knie", [14]), ...B("fuss", [-25, 0]) }), 1.4, {
    aus: 2.0,
    texte: ["Schulterblätter nach unten, ziehen und nur so viel mit den Beinen abdrücken wie nötig", "Langsam absenken, die Beine helfen so wenig wie möglich"],
    hilfsmittel: [RACK, BOX],
  }),
}
