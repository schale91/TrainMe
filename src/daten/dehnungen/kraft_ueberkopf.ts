// Drücken über Kopf mit Zielpunkten. Unten liegt die Langhantel vor den Schultern auf Höhe des Schlüsselbeins
// (Unterarme von vorn gesehen senkrecht, Ellbogen leicht vor der Stange), Kurzhanteln sind neben den Ohren auf
// Schulterhöhe (Ellbogen etwas vor dem Körper), oben sind die Arme (fast) gestreckt und die Last steht über den
// Schultern. Geprüft mit werkzeuge/messen.html gegen werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, HALBKNIESTAND, LANGSITZ, folge, mit, wdh } from "./basis"
import { BAND, FAUST, HAMMER, KH, KH_R, LH, OBERGRIFF } from "./kraftbasis"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, ellbogenKreis } from "./ziele"

type P3 = [number, number, number]
/** Schulter bis Handflächenmarke bei gestrecktem Arm mit Faust */
const ARM_FAUST = 0.515

type Basis = "stand" | "sitz" | "boden" | "halbknie"
interface OK {
  basis: Basis
  /** halber Griffabstand unten und oben */
  griff: number
  griffOben?: number
  /** Hand unten im Rahmen der Schultern: y den Rumpf hinauf, z vor dem Rumpf */
  unten: [number, number]
  /** Richtung der Ellbogen unten (x nach außen, y, z nach vorn) */
  ell: P3
  dreh: number
  drehOben?: number
  /** Arm oben fast gestreckt: Anteil der vollen Länge */
  streck?: number
  /** nur der rechte (bzw. beim Halbkniestand der linke) Arm drückt */
  einarm?: "l" | "r"
  /** Ellbogen über die Vorzugsrichtung statt mit senkrechtem Unterarm (von vorn) */
  frei?: boolean
}
/**
 * Ellbogen so, dass der Unterarm von vorn gesehen senkrecht steht (gleiches x wie die Hand) und unter der Hand liegt:
 * Schnitt der Kreise um Schulter und Hand in der Ebene x = Hand.x. vor: der vordere oder hintere Schnittpunkt.
 */
const ellbogenFrontal = (s: P3, h: P3, vor = true): P3 | undefined => {
  const r1 = Math.sqrt(Math.max(0, OBERARM ** 2 - (h[0] - s[0]) ** 2)), r2 = UNTERARM
  const dy = h[1] - s[1], dz = h[2] - s[2], d = Math.hypot(dy, dz)
  if (d > r1 + r2 || d < Math.abs(r1 - r2)) return undefined
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d), q = Math.sqrt(Math.max(0, r1 * r1 - a * a))
  const my = s[1] + (a * dy) / d, mz = s[2] + (a * dz) / d
  const k = [[my + (q * dz) / d, mz - (q * dy) / d], [my - (q * dz) / d, mz + (q * dy) / d]].filter((p) => p[0] < h[1])
  const p = k.sort((x, y) => (vor ? y[1] - x[1] : x[1] - y[1]))[0]
  return p ? [h[0], p[0], p[1]] : undefined
}
const STAND_ZIELE: Ziele = {
  ferse_l: { pos: [0.1, 0.022, -0.05] },
  fuss_l: { pos: [0.11, 0.034, 0.07] },
  ferse_r: { pos: [-0.1, 0.022, -0.05] },
  fuss_r: { pos: [-0.11, 0.034, 0.07] },
}
/** Sitz auf der Bank mit fast senkrechter Lehne, Füße fest am Boden */
const SITZ_ZIELE: Ziele = {
  ferse_l: { pos: [0.16, 0.022, 0.42] },
  fuss_l: { pos: [0.17, 0.034, 0.54] },
  ferse_r: { pos: [-0.16, 0.022, 0.42] },
  fuss_r: { pos: [-0.17, 0.034, 0.54] },
}
const basisHaltung = (b: Basis, arme: Winkel, ziele: Ziele): Haltung => {
  if (b === "stand") return H({ ...B("huefte", [4, 6, 0]), ...B("knie", [6]), ...B("fuss", [2, 0]), ...FAUST, ...arme }, [0, 0, 0], { pos: [0, 0.93, 0], boden: false, beckenFrei: true, ziele: { ...STAND_ZIELE, ...ziele } })
  if (b === "sitz") return H({ ...B("huefte", [86, 8, 0]), ...B("knie", [86]), ...B("fuss", [4, 0]), ...FAUST, ...arme }, [-4, 0, 0], { pos: [0, 0.555, 0], boden: false, ziele: { ...SITZ_ZIELE, ...ziele } })
  if (b === "boden") return mit(LANGSITZ, { g: { ...LANGSITZ.g, ...B("huefte", [90, 12, 0]), ...B("knie", [2]), ...FAUST, ...arme }, ziele })
  return mit(HALBKNIESTAND, { g: { ...HALBKNIESTAND.g, ...FAUST, ...arme }, ziele })
}
const druckHaltung = (k: OK, oben: boolean): Haltung => {
  const ziele: Ziele = {}
  const seiten = k.einarm ? [k.einarm === "l" ? 1 : -1] : [1, -1]
  for (const sx of seiten) {
    const n = sx === 1 ? "l" : "r"
    if (oben) {
      const x = k.griffOben ?? k.griff
      const l = Math.sqrt((ARM_FAUST * (k.streck ?? 0.99) + (k.einarm ? 0.03 : 0)) ** 2 - (x - SCHULTER_X) ** 2)
      ziele[`hand_${n}`] = { pos: [sx * x, l, -0.01], bezug: "schultern" }
    } else {
      const h: P3 = [k.griff, k.unten[0], k.unten[1]]
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
      const e = (!k.frei && ellbogenFrontal([SCHULTER_X, 0, 0], h, k.ell[2] >= 0)) || ellbogenKreis([SCHULTER_X, 0, 0], h, k.ell)
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    }
  }
  const arm = (dreh: number): Winkel => (oben ? { ...B("schulter", [172, 14, 0]), ...B("ellbogen", [8, dreh]) } : { ...B("schulter", [40, 40, 0]), ...B("ellbogen", [130, dreh]) })
  let arme: Winkel = arm(oben ? (k.drehOben ?? k.dreh) : k.dreh)
  if (k.einarm) {
    const n = k.einarm, frei = n === "l" ? "r" : "l"
    arme = { [`schulter_${n}`]: arme[`schulter_${n}`], [`ellbogen_${n}`]: arme[`ellbogen_${n}`], [`schulter_${frei}`]: [4, 8, 0], [`ellbogen_${frei}`]: [12, 0] } as Winkel
  }
  return basisHaltung(k.basis, arme, ziele)
}
const DRUCK_TEXTE: [string, string] = ["Senkrecht nach oben drücken, bis die Arme gestreckt sind", "Kontrolliert zurück zu den Schultern"]
const druecken = (k: OK, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", druckHaltung(k, false), druckHaltung(k, true), 1.3, { aus: 2.0, halten: 0.3, texte: DRUCK_TEXTE, hilfsmittel, ...(k.einarm ? { seiten: true } : {}), ...extra })

/** Langhantel: knapp schulterbreit, unten am Schlüsselbein, Unterarme senkrecht, Ellbogen leicht vor der Stange */
const LH_DRUCK: OK = { basis: "stand", griff: 0.19, unten: [0.03, 0.11], ell: [0.05, -1, 0.45], dreh: OBERGRIFF }
/** Kurzhanteln neben den Ohren auf Schulterhöhe, Ellbogen etwas vor dem Körper; oben leicht nach innen */
const KH_DRUCK: OK = { basis: "sitz", griff: 0.25, griffOben: 0.17, unten: [0.12, 0.05], ell: [0.5, -1, 0.35], dreh: OBERGRIFF, streck: 0.97 }
/** neutral: Handflächen zueinander, Ellbogen nach vorn und leicht nach außen, Hanteln bleiben parallel */
const KH_NEUTRAL: OK = { ...KH_DRUCK, griff: 0.2, griffOben: 0.2, unten: [0.16, 0.17], ell: [0.3, -1, 0.8], dreh: HAMMER }
const SCHRAEG_LEHNE: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }
const RACK_STAND: Hilfsmittel = { art: "rack", an: "becken", haken: 1.4 }

/** Push Press: Dip der Knie um 10 bis 15 cm bei senkrechtem Oberkörper, dann explosiv strecken und durchdrücken */
const pushPress = (): Dehnung => {
  const rack = druckHaltung(LH_DRUCK, false)
  const dip: Haltung = { ...rack, g: { ...rack.g, ...B("huefte", [22, 6, 0]), ...B("knie", [34]), ...B("fuss", [16, 0]) }, pos: [0, 0.81, 0.02] }
  return folge("schraeg", [[rack, 1.0, "Stange vorn auf den Schultern, Füße hüftbreit"], [dip, 0.5, "Knie kurz 10 bis 15 cm gerade nach unten"], [druckHaltung(LH_DRUCK, true), 0.5, "Beine explosiv strecken und durchdrücken"], [rack, 1.4, "Kontrolliert auf die Schultern absenken, leicht abfedern"]], { hilfsmittel: [...LH, RACK_STAND] })
}

export const KRAFT_UEBERKOPF: Record<string, Dehnung> = {
  schulterdruecken_lh: druecken(LH_DRUCK, [...LH, RACK_STAND], { texte: ["Senkrecht nach oben, Kopf kurz zurück und oben durch die Arme", "Auf demselben Weg zum Schlüsselbein"] }),
  push_press: pushPress(),
  schulterdruecken_lh_sitzend: druecken({ ...LH_DRUCK, basis: "sitz", streck: 0.97 }, [...LH, SCHRAEG_LEHNE], { texte: ["Senkrecht nach oben, Kopf kommt zwischen die Arme", "Bis etwa Kinn- oder Schlüsselbeinhöhe absenken"] }),
  schulterdruecken_multipresse: druecken({ ...LH_DRUCK, basis: "sitz", griff: 0.22, unten: [0.07, 0.13], ell: [0.2, -1, 0.15], streck: 0.97 }, [...LH, SCHRAEG_LEHNE], { texte: ["Gleichmäßig nach oben, bis die Arme fast gestreckt sind", "Bis etwa Kinnhöhe absenken, Unterarme senkrecht"] }),
  schulterdruecken_kh_sitzend: druecken(KH_DRUCK, [...KH, SCHRAEG_LEHNE], { texte: ["Nach oben und leicht nach innen, Hanteln berühren sich nicht", "Langsam auf Ohr- oder Schulterhöhe absenken"] }),
  schulterdruecken_kh_neutral: druecken(KH_NEUTRAL, [...KH, SCHRAEG_LEHNE], { texte: ["Senkrecht nach oben, Hanteln bleiben parallel", "Vor die Schultern absenken, Ellbogen vor dem Körper"] }),
  schulterdruecken_kh_stehend: druecken({ ...KH_DRUCK, basis: "stand" }, KH, { texte: ["Senkrecht nach oben, bis die Hanteln über den Schultern stehen", "Kontrolliert auf Ohr- oder Schulterhöhe, Beine ruhig"] }),
  schulterdruecken_band: druecken({ ...KH_DRUCK, basis: "stand", griff: 0.23, griffOben: 0.2 }, BAND, { texte: ["Senkrecht nach oben, bis die Arme fast gestreckt sind", "Langsam zu den Schultern, das Band bleibt gespannt"] }),
  schulterdruecken_kabel: druecken({ ...KH_DRUCK, griffOben: 0.15 }, [{ art: "kabel", von: "hand_l", rolle: [0.85, 0.12, 0] }, { art: "kabel", von: "hand_r", rolle: [-0.85, 0.12, 0] }, SCHRAEG_LEHNE], { texte: ["Nach oben und leicht zusammen drücken", "Langsam auf Schulterhöhe, Rücken an der Lehne"] }),
  z_press: druecken({ ...LH_DRUCK, basis: "boden", streck: 0.98 }, LH, { texte: ["Senkrecht nach oben, ohne dich nach hinten zu lehnen", "Langsam zu den Schultern, aufrecht bleiben"] }),
  arnold_press_sitzend: (() => {
    const vorn = druckHaltung({ ...KH_DRUCK, griff: 0.12, unten: [0.12, 0.17], ell: [0.0, -0.6, 1], dreh: -60 }, false)
    const mitte = druckHaltung({ ...KH_DRUCK, griff: 0.24, unten: [0.2, 0.06], ell: [0.8, -1, 0.1], dreh: OBERGRIFF }, false)
    const oben = druckHaltung(KH_DRUCK, true)
    return folge("schraeg", [[vorn, 1.0, "Hanteln vor den Schultern, Handflächen zu dir"], [mitte, 0.8, "Ellbogen öffnen, Hände drehen nach vorn"], [oben, 0.7, "Weiter nach oben, bis die Arme fast gestreckt sind"], [mitte, 0.8, "Auf demselben Weg zurückdrehen"], [vorn, 0.8, "Ellbogen wieder vor dem Körper"]], { hilfsmittel: [...KH, SCHRAEG_LEHNE] })
  })(),
  schulterdruecken_kh_einarmig: druecken({ ...KH_DRUCK, basis: "stand", einarm: "r", griffOben: 0.15 }, KH_R, { texte: ["Senkrecht nach oben, Oberkörper kippt nicht weg", "Kontrolliert bis zur Schulter"] }),
  kb_druecken: druecken({ basis: "stand", einarm: "r", griff: 0.14, unten: [0.0, 0.19], ell: [0.0, -0.8, 1], frei: true, dreh: HAMMER, drehOben: OBERGRIFF, griffOben: 0.15 }, [{ art: "kettlebell", an: "hand_r" }], { texte: ["Aus der Rack-Position nach oben, Unterarm dreht leicht ein", "Aktiv zurück in die Rack-Position ziehen"] }),
  kb_bottoms_up_druecken: druecken({ basis: "stand", einarm: "r", griff: 0.16, unten: [0.14, 0.12], ell: [0.2, -1, 0.1], dreh: HAMMER, griffOben: 0.15 }, [{ art: "kettlebell", an: "hand_r", kopfueber: true }], { texte: ["Langsam senkrecht nach oben, ohne dass sie kippt", "Genauso langsam vor die Schulter"] }),
  schulterdruecken_kh_halbkniend: druecken({ ...KH_DRUCK, basis: "halbknie", einarm: "l", griffOben: 0.15 }, [{ art: "hantel", an: "hand_l" }], { texte: ["Senkrecht nach oben, ohne nach hinten zu lehnen", "Langsam zur Schulter"] }),
}
