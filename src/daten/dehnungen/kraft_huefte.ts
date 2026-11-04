// Hintere Kette und Hüfte mit der Dehnfigur: Kreuzheben, Rumänisches Kreuzheben, Good Morning, Hip Thrust,
// Beckenheben, Swings, Beinbeuger, Waden, Ab- und Adduktoren.
//
// Winkel im Raum: Oberschenkel = Hüftbeugung - Kippung des Beckens; Unterschenkel = Oberschenkel - Kniebeugung;
// Fuß flach, wenn Anziehen = -Unterschenkel. Arme hängen senkrecht, wenn Schulterbeugung = Kippung.
// Maschinen (Beinbeuger, Gesäß-, Waden-, Abduktorenmaschine, GHD, Rückenstrecker), Trap-Bar und Landmine
// hat das Heimstudio nicht; diese Übungen behalten die einfache Figur.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { seitBoden } from "./seitstuetz"
import { haendeSchultern } from "./ziele"
import { ARME_VERSCHRAENKT, B, H, RUECKENLAGE_AUF, SEITLAGE, STAND, VIERFUESSLER, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, OBERGRIFF, kabel } from "./kraftbasis"
import { ARME_RUECKEN, RACK, STANGE_RUECKEN, STUHL, WAND_HINTEN, ansicht, stand } from "./kraft_beine"

/** Pull-Through und Swing unten: Hände eng zusammen zwischen den Beinen nach hinten, Unterarme an den Oberschenkeln */
const ZWISCHEN_BEINEN: Winkel = { ...B("schulter", [12, -14, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }
/** oben: Arme hängen gestreckt vor dem Körper, Hände zusammen */
const SEIL_VORN: Winkel = { ...B("schulter", [10, -12, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }
// ---------------------------------------------------------------- Heben vom Boden
const LH: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
/** Arme hängen senkrecht, Hände im Obergriff */
export const haengen = (kipp: number, breit = 8, dreh = OBERGRIFF): Winkel => ({ ...B("schulter", [kipp, breit, 0]), ...B("ellbogen", [4, dreh]), ...FAUST })
/**
 * Gebeugte Haltung: kipp = Oberkörper vor, ober = Oberschenkel vor, schien = Knie vor den Füßen (Grad).
 * Rücken gerade, Blick schräg nach vorn unten.
 */
export const beuge = (kipp: number, ober: number, schien: number, arme: Winkel, breit = 10, w: Winkel = {}): Haltung =>
  H({ ...B("huefte", [ober + kipp, breit, -breit / 2]), ...B("knie", [ober + schien]), ...B("fuss", [schien, 0]), hals: [-kipp / 3, 0, 0], ...arme, ...w }, [kipp, 0, 0])
const oben = (arme: Winkel, breit = 10): Haltung => stand(arme, breit)

/** Kreuzheben: vom Boden in den Stand, ablegen */
/** Hüftbeugen aus dem Stand (RDL, Good Morning): Hüfte nach hinten, Knie leicht gebeugt */

// ---------------------------------------------------------------- Hip Thrust, Beckenheben
/** Oberer Rücken an der quer stehenden Bank, Füße flach am Boden unter den Knien */
// die Kante liegt unter der Unterkante der Schulterblätter, die Bank selbst steht dahinter
const BANK_QUER: Hilfsmittel = { art: "bank", unter: "bws", hoehe: 0.45, quer: true, versatz: [0, -0.16] }
/** Füße flach und hüftbreit, oben senkrecht unter den Knien (Ferse und Ballen am Boden) */
const THRUST_FUESSE = (frei?: "r"): NonNullable<Haltung["ziele"]> => {
  const z: NonNullable<Haltung["ziele"]> = { ferse_l: { pos: [0.12, 0.0, THRUST_FERSE_Z] }, fuss_l: { pos: [0.13, 0.02, THRUST_FERSE_Z + 0.12] } }
  if (!frei) Object.assign(z, { ferse_r: { pos: [-0.12, 0.0, THRUST_FERSE_Z] }, fuss_r: { pos: [-0.13, 0.02, THRUST_FERSE_Z + 0.12] } })
  return z
}
const THRUST_FERSE_Z = 0.36
const THRUST_OBEN_Y = 0.55
/** Arme seitlich ausgestreckt auf der Bank */
const ARME_BANK: Winkel = { ...B("schulter", [0, 80, 0]), ...B("ellbogen", [10, 0]) }
const ARME_STANGE_HUEFTE: Winkel = { ...B("schulter", [28, 34, 0]), ...B("ellbogen", [30, OBERGRIFF]), ...FAUST }
/** Oben: Oberkörper und Oberschenkel waagerecht in einer Linie, Schienbeine senkrecht, Kinn zur Brust */
const thrustOben = (w: Winkel, frei?: "r", haende?: NonNullable<Haltung["ziele"]>): Haltung => H({ ...B("huefte", [0, 10, 0]), ...B("knie", [92]), ...B("fuss", [2, 0]), hals: [22, 0, 0], ...w }, [-90, 0, 0], { pos: [0, THRUST_OBEN_Y, 0], boden: false, ziele: { ...THRUST_FUESSE(frei), ...haende } })
/** Unten: der Oberkörper dreht um die Bankkante, das Gesäß sinkt Richtung Boden */
const thrustUnten = (w: Winkel, frei?: "r", haende?: NonNullable<Haltung["ziele"]>): Haltung => H({ ...B("huefte", [70, 10, 0]), ...B("knie", [100]), ...B("fuss", [-23, 0]), hals: [22, 0, 0], ...w }, [THRUST_UNTEN_KIPP, 0, 0], { pos: THRUST_UNTEN_POS, boden: false, ziele: { ...THRUST_FUESSE(frei), ...haende } })
// unten dreht der Rumpf um die Unterkante der Schulterblätter auf der Bankkante (gemessen: oben y 0,453, z -0,248)
const THRUST_UNTEN_KIPP = -40
const THRUST_UNTEN_POS: [number, number, number] = [0, 0.311, -0.03]
/** Hände an der Stange bzw. Hantel in der Hüftbeuge (im Rahmen des Beckens) */
const haendeHuefte = (x: number): NonNullable<Haltung["ziele"]> => ({ hand_l: { pos: [x, -0.07, 0.15], bezug: "becken" }, hand_r: { pos: [-x, -0.07, 0.15], bezug: "becken" } })
const thrust = (arme: Winkel, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}, haende?: NonNullable<Haltung["ziele"]>): Dehnung =>
  wdh("seite", thrustUnten(arme, undefined, haende), thrustOben(arme, undefined, haende), 1.2, { aus: 1.8, halten: 1, texte: ["Hüfte nach oben strecken, Kinn zur Brust", "Becken kontrolliert absenken"], hilfsmittel: [BANK_QUER, ...hilfsmittel], ...extra })

/** Rückenlage, Füße aufgestellt; oben: Schultern, Hüfte und Knie in einer Linie */
const ARME_BODEN: Winkel = { ...B("schulter", [0, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]) }
const ARME_BODEN_OBEN: Winkel = { ...B("schulter", [-8, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]) }
const brueckeUnten = (w: Winkel = {}): Haltung => mit(RUECKENLAGE_AUF, { g: { ...ARME_BODEN, ...w } })
/** Rückenlage mit festen Fersen (wie oben) und optional Händen an der Stange in der Hüftbeuge */
const brueckeUntenFest = (w: Winkel = {}, haende: NonNullable<Haltung["ziele"]> = {}): Haltung =>
  mit(RUECKENLAGE_AUF, { pos: [0, 0.119, 0], boden: false, g: { ...ARME_BODEN, ...w }, ziele: { ferse_l: { pos: [0.119, 0.066, 0.595] }, ferse_r: { pos: [-0.119, 0.066, 0.595] }, ...haende } })
/**
 * Brücke oben: die Schultern bleiben am Boden (Schultergelenk 11 cm hoch, wie in der Rückenlage), das Becken steigt auf
 * die Höhe h, der Rumpf kippt um die Schultern; die Fersen bleiben, wo sie in der Rückenlage stehen.
 */
const SCHULTER_BODEN = 0.112
const SCHULTER_RUHE_Z = -0.353
const RUMPF_HS = 0.355
const brueckeLage = (h: number, fersen: [number, number] = [0.066, 0.595], frei?: "l" | "r", fx = 0.119): Partial<Haltung> => {
  const th = Math.asin(Math.min(0.99, (h - SCHULTER_BODEN) / RUMPF_HS))
  const ziele: NonNullable<Haltung["ziele"]> = {}
  for (const [n, x] of [["l", 1], ["r", -1]] as const) if (n !== frei) ziele[`ferse_${n}`] = { pos: [x * fx, fersen[0], fersen[1]] }
  return { dreh: [-90 - (th * 180) / Math.PI, 0, 0], pos: [0, h, SCHULTER_RUHE_Z + RUMPF_HS * Math.cos(th)], boden: false, ziele }
}
/** Hals nickt um den Kippwinkel des Rumpfs, damit der Kopf am Boden liegen bleibt */
const halsBruecke = (h: number): Winkel => ({ hals: [(Math.asin(Math.min(0.99, (h - SCHULTER_BODEN) / RUMPF_HS)) * 180) / Math.PI + 6, 0, 0] })
const BRUECKE_H = 0.3
/** Brücke mit beliebiger Fersenlage (Gleiten, Ball, Bank): Schultern am Boden, Becken auf h, Kopf nickt mit */
const brueckeFersen = (h: number, fersen: [number, number], w: Winkel = {}, frei?: "l" | "r"): Haltung =>
  mit(RUECKENLAGE_AUF, { ...brueckeLage(h, fersen, frei), g: { ...ARME_BODEN_OBEN, ...B("huefte", [0, 4, 0]), ...B("knie", [40]), ...B("fuss", [10, 0]), ...halsBruecke(h), ...w } })
const brueckeOben = (w: Winkel = {}, frei?: "l" | "r", frosch = false): Haltung =>
  mit(RUECKENLAGE_AUF, { ...(frosch ? brueckeLage(BRUECKE_H, [0.05, 0.42], undefined, 0.05) : brueckeLage(BRUECKE_H, undefined, frei)), g: { ...ARME_BODEN_OBEN, ...B("huefte", [4, 4, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...halsBruecke(BRUECKE_H), ...w } })
const bruecke = (unten: Winkel, obenW: Winkel, extra: Partial<Dehnung> = {}, frei?: "r", frosch = false): Dehnung =>
  wdh("seite", brueckeUnten(unten), brueckeOben(obenW, frei, frosch), 1.2, { aus: 1.6, halten: 1, texte: ["Becken heben, Gesäß fest anspannen", "Langsam ablegen"], ...extra })
/** freies rechtes Bein gestreckt senkrecht nach oben */
const BEIN_HOCH: Winkel = { huefte_r: [75, 4, 0], knie_r: [2], fuss_r: [-20, 0] }
/** Freies rechtes Bein gestreckt in Verlängerung des Oberschenkels */
const EINBEIN_UNTEN: Winkel = { huefte_r: [60, 4, 0], knie_r: [0], fuss_r: [10, 0] }
const mit2 = (ansicht: Dehnung["ansicht"], d: Dehnung): Dehnung => ({ ...d, ansicht })
const EINBEIN_OBEN: Winkel = { huefte_r: [4, 4, 0], knie_r: [0], fuss_r: [10, 0] }
/** Fersen hüftbreit auf der Kante der quer stehenden Flachbank (45 cm), Knie etwa 90 Grad */
const BANK_FERSE_Z = 0.62
const fuesseBank = (oben: boolean): Haltung =>
  H(
    { ...B("huefte", [oben ? 20 : 80, 4, 0]), ...B("knie", [90]), ...B("fuss", [20, 0]), ...(oben ? { ...ARME_BODEN_OBEN, ...halsBruecke(0.39) } : ARME_BODEN) },
    [-90, 0, 0],
    oben ? brueckeLage(0.39, [0.47, BANK_FERSE_Z]) : { pos: [0, 0.13, 0], boden: false, ziele: { ferse_l: { pos: [0.119, 0.47, BANK_FERSE_Z] }, ferse_r: { pos: [-0.119, 0.47, BANK_FERSE_Z] } } },
  )

// ---------------------------------------------------------------- Bodenlage, Vierfüßler, Seitlage
const VIER: Haltung = VIERFUESSLER
/** Seitlage (links unten), Beine gestreckt übereinander, Kopf auf dem unteren Arm */
const SEITLAGE_GESTRECKT: Haltung = mit(SEITLAGE, { g: { ...B("huefte", [6, 0, 0]), ...B("knie", [4]), ...B("fuss", [0, 0]), schulter_l: [170, 0, 0], ellbogen_l: [120, 0], schulter_r: [20, 0, 0], ellbogen_r: [80, 0] } })
const SEITLAGE_GEBEUGT: Haltung = mit(SEITLAGE, { g: { ...B("huefte", [45, 0, 0]), ...B("knie", [90]), schulter_l: [170, 0, 0], ellbogen_l: [120, 0], schulter_r: [20, 0, 0], ellbogen_r: [80, 0] } })

/** Clamshell: oberer Fuß bleibt auf dem unteren liegen, das obere Knie öffnet sich */
// Knie um die Achse Hüfte–Ferse um 40 Grad nach oben gedreht
const KNIE_AUF: NonNullable<Haltung["ziele"]> = { ferse_r: { pos: [-0.627, 0.229, -0.151] }, knie_r: { pos: [-0.262, 0.438, 0.193] } }
/** Seitlage links: oberes (rechtes) Bein gebeugt, Fuß vor dem unteren Bein flach am Boden */
const OBERER_FUSS_VORN: NonNullable<Haltung["ziele"]> = { ferse_r: { pos: [-0.5, 0.03, 0.3] } }

// ---------------------------------------------------------------- Wade
/** Fußballen auf der hinteren Kante der Box (20 cm), Ferse frei dahinter: tief = Ferse unter der Kante, hoch = auf den Zehen */
const KANTE_Y = 0.2
const WADE_X = 0.13
const WADE_Z = 0.06
const STUFE: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: KANTE_Y, versatz: [-WADE_X, 0.2] }
/** Ballen- und Fersenmarke auf der Kante: Ferse 25 Grad unter bzw. 40 Grad über dem Ballen (Abstand der Marken 12 cm) */
const fussAufKante = (s: "l" | "r", hoch: boolean, y = KANTE_Y, x = WADE_X, z = WADE_Z): NonNullable<Haltung["ziele"]> => {
  const sx = s === "l" ? x : -x
  // der Fuß ist starr: auf den Zehenspitzen liegt die Marke so hoch, dass die Zehenspitzen gerade aufliegen
  const by = y + 0.017 + (hoch ? 0.065 : 0)
  const w = ((hoch ? 38 : -25) * Math.PI) / 180
  return { [`fuss_${s}`]: { pos: [sx, by, z] }, [`ferse_${s}`]: { pos: [sx, by + 0.12 * Math.sin(w), z - 0.12 * Math.cos(w)] } }
}
/** freies Bein (rechts) angehoben, Fuß hinter dem Standbein */
/** auf den Zehenspitzen liegen die Zehen flach auf (Zehengelenk gestreckt) */
const ZEHEN_HOCH = 35
const FREI_BEIN: Winkel = { huefte_r: [10, 4, 0], knie_r: [70], fuss_r: [-20, 0] }
const wadeStufe = (hoch: boolean, w: Winkel, einbein: boolean, ziele: NonNullable<Haltung["ziele"]> = {}): Haltung =>
  H({ ...B("huefte", [0, 2, 0]), ...B("knie", [2]), ...B("fuss", [hoch ? -40 : 20, 0]), ...B("zehen", [hoch ? ZEHEN_HOCH : 0]), ...w, ...(einbein ? FREI_BEIN : {}) }, [0, 0, 0], {
    pos: [0, hoch ? 1.24 : 1.11, 0],
    boden: false,
    beckenFrei: true,
    ziele: { ...fussAufKante("l", hoch), ...(einbein ? {} : fussAufKante("r", hoch)), ...ziele },
  })
/** Halt mit der rechten Hand an der Wand vor dem Körper */
const HALT_WAND_R: Winkel = { schulter_r: [70, 10, 0], ellbogen_r: [10, 90], hand_r: [-70, 0] }
const WAND_R: Hilfsmittel = { art: "wand", an: "hand_r", richtung: "vorn" }
/** Sitz vorn auf der Bank, Fußballen auf einer Scheibe (5 cm), Hanteln senkrecht auf den Oberschenkeln knapp über den Knien */
const wadeSitz = (hoch: boolean): Haltung => {
  const ky = hoch ? 0.6 : 0.56
  return H({ ...B("huefte", [86, 6, 0]), ...B("knie", [80]), ...B("fuss", [hoch ? -30 : 20, 0]), ...B("zehen", [hoch ? ZEHEN_HOCH : 0]), ...B("schulter", [40, 12, 0]), ...B("ellbogen", [40, HAMMER]), ...FAUST }, undefined, {
    pos: [0, 0.578, 0],
    boden: false,
    ziele: {
      ...fussAufKante("l", hoch, 0.05, WADE_X, 0.46),
      ...fussAufKante("r", hoch, 0.05, WADE_X, 0.46),
      hand_l: { pos: [0.12, ky + 0.14, 0.33] },
      hand_r: { pos: [-0.12, ky + 0.14, 0.33] },
    },
  })
}
/** Tibialis an der Wand: Fersen fest am Boden, eineinhalb Fußlängen vor der Wand; oben zeigen die Zehen zum Schienbein */
const TIB_UNTEN: NonNullable<Haltung["ziele"]> = { ferse_l: { pos: [0.13, 0.007, 0.4] }, ferse_r: { pos: [-0.13, 0.007, 0.4] }, fuss_l: { pos: [0.13, 0.025, 0.518] }, fuss_r: { pos: [-0.13, 0.025, 0.518] } }
const TIB_OBEN: NonNullable<Haltung["ziele"]> = { ferse_l: { pos: [0.13, 0.007, 0.4] }, ferse_r: { pos: [-0.13, 0.007, 0.4] }, fuss_l: { pos: [0.13, 0.085, 0.5] }, fuss_r: { pos: [-0.13, 0.085, 0.5] } }
/** Hände stützen neben dem Gesäß auf dem Kasten (60 cm) */
const KASTEN_HAENDE: NonNullable<Haltung["ziele"]> = { hand_l: { pos: [0.24, 0.625, -0.02] }, hand_r: { pos: [-0.24, 0.625, -0.02] } }
const wade = (w: Winkel, hilfsmittel: Hilfsmittel[], einbein = false, extra: Partial<Dehnung> = {}, untenEinbein = einbein, ziele: NonNullable<Haltung["ziele"]> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), wadeStufe(false, w, untenEinbein, ziele), wadeStufe(true, w, einbein, ziele), 1.0, {
    aus: 2.0,
    halten: 1,
    seiten: untenEinbein,
    texte: ["Hoch auf die Zehenspitzen", "Ferse langsam unter die Kante"],
    hilfsmittel: [STUFE, ...hilfsmittel],
    ...extra,
  })
/** Wadenheben am Boden mit Halt an der Stuhllehne */
// die Hände liegen oben auf der Lehne (Lehne 44 cm über der Sitzfläche, Stuhl steht vor dem Körper)
const STUHL_VORN: Hilfsmittel = { art: "stuhl", unter: "haende", hoehe: 0.48, versatz: [0, 0.2] }
/** Standbein (links) leicht gebeugt */
const STANDBEIN_WEICH: Winkel = { huefte_l: [8, 4, 0], knie_l: [12], fuss_l: [6, 0] }
/** Fersenheben hinter dem Stuhl: Ballen bleiben am Boden, Hände bleiben auf der Lehne */
const fersenStuhl = (hoch: boolean, einbein: boolean): Haltung => {
  const fuss = (s: "l" | "r"): NonNullable<Haltung["ziele"]> => {
    const x = s === "l" ? 0.126 : -0.126
    return hoch ? { [`fuss_${s}`]: { pos: [x, 0.088, 0.067] }, [`ferse_${s}`]: { pos: [x, 0.163, -0.03] } } : { [`fuss_${s}`]: { pos: [x, 0.017, 0.067] }, [`ferse_${s}`]: { pos: [x, 0.007, -0.053] } }
  }
  return H({ ...B("huefte", [0, 4, 0]), ...B("knie", [2]), ...B("fuss", [hoch ? -30 : 0, 0]), ...B("zehen", [hoch ? ZEHEN_HOCH : 0]), ...HALT_STUHL, ...(einbein ? { huefte_r: [10, 6, 0], knie_r: [70], fuss_r: [-20, 0] } : {}) }, [0, 0, 0], {
    pos: [0, hoch ? 1.03 : 0.937, 0],
    boden: false,
    beckenFrei: true,
    ziele: { ...fuss("l"), ...(einbein ? {} : fuss("r")), hand_l: { pos: [0.172, 0.97, 0.349] }, hand_r: { pos: [-0.172, 0.97, 0.349] } },
  })
}
const HALT_STUHL: Winkel = { ...B("schulter", [34, 8, 0]), ...B("ellbogen", [12, 90]), ...B("hand", [40, 0]) }

// ---------------------------------------------------------------- Stehend am Kabel oder Band (rechtes Bein arbeitet)
const STAND_HALT: Winkel = { ...B("schulter", [50, 10, 0]), ...B("ellbogen", [20, 90]) }
/** Standbein links bleibt senkrecht, auch wenn sich das Becken mit dem Oberkörper nach vorn neigt */
/** Sitz vorn auf dem Stuhl (45 cm), Füße hüftbreit fest am Boden, Knie 90 Grad; abd: Knie nach außen */
const SITZ_FERSEN: NonNullable<Haltung["ziele"]> = { ferse_l: { pos: [0.12, 0.01, 0.329] }, ferse_r: { pos: [-0.12, 0.01, 0.329] } }
// Fußballen in der Ausgangsstellung; beim Abspreizen bleiben die Fersen stehen und die Fußspitzen drehen leicht mit nach außen
const SITZ_BALLEN: NonNullable<Haltung["ziele"]> = { fuss_l: { pos: [0.125, 0.05, 0.445] }, fuss_r: { pos: [-0.125, 0.05, 0.445] } }
const sitzAbd = (abd: number): Haltung => {
  const x = 0.078 + 0.381 * Math.sin((abd * Math.PI) / 180), z = -0.003 + 0.381 * Math.cos((abd * Math.PI) / 180)
  return H({ ...B("huefte", [90, abd, 0]), ...B("knie", [90]), ...B("schulter", [20, 10, 0]), ...B("ellbogen", [60, 60]) }, undefined, {
    pos: [0, 0.575, 0],
    boden: false,
    ziele: { ...SITZ_FERSEN, ...(abd > 10 ? { knie_l: { pos: [x, 0.53, z] }, knie_r: { pos: [-x, 0.53, z] }, fuss_l: { pos: [0.16, 0.05, 0.44] }, fuss_r: { pos: [-0.16, 0.05, 0.44] } } : SITZ_BALLEN) },
  })
}
/** Hip Hike: links auf der Box (45 cm), beide Knie gestreckt; die rechte Beckenseite sinkt (-1) bzw. steigt (1) */
const hipHike = (rich: -1 | 1): Haltung =>
  H({ huefte_l: [0, 4 + rich * 10, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [0, 4 - rich * 10, 0], knie_r: [2], fuss_r: [-10, 0], ...B("schulter", [4, 10, 0]) }, [0, 0, rich * 10], {
    pos: [0, 1.373 + rich * 0.007, 0],
    boden: false,
    ziele: { ferse_l: { pos: [0.12, 0.457, -0.06] }, fuss_l: { pos: [0.13, 0.45, 0.05] } },
    drehFrei: false,
  })
/** Bandlauf: Grundhaltung, Beckenhöhe, Fersenmarke über dem Boden und Fersen-z in der Grundstellung */
interface BandLauf { w: Winkel; kipp: number; y: number; fy: number; fz: number }
const MONSTER: BandLauf = { w: { ...B("huefte", [30, 14, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, kipp: 20, y: 0.914, fy: 0.052, fz: -0.153 }
const SEITWAERTS: BandLauf = { w: { ...B("huefte", [30, 12, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, kipp: 20, y: 0.919, fy: 0.051, fz: -0.156 }
const REHA_SEIT: BandLauf = { w: { ...B("huefte", [14, 8, 0]), ...B("knie", [14]), ...B("fuss", [0, 0]), ...B("schulter", [4, 10, 0]) }, kipp: 6, y: 0.943, fy: 0.032, fz: -0.057 }
/** Becken wandert mit: x seitlich (Seitschritte) bzw. z nach vorn (Monster Walk); Fersen [x, z-Versatz] fest am Boden */
const bandSchritt = (b: BandLauf, weg: number, l: [number, number], r: [number, number]): Haltung => {
  const vor = b === MONSTER
  return H(b.w, [b.kipp, 0, 0], {
    pos: vor ? [0, b.y, weg] : [weg, b.y, 0],
    boden: false,
    ziele: { ferse_l: { pos: [l[0], b.fy, b.fz + l[1]] }, ferse_r: { pos: [r[0], b.fy, b.fz + r[1]] } },
  })
}
const standBein = (rechts: Winkel, kipp = 6): Haltung => H({ huefte_l: [kipp - 2, 6, 0], knie_l: [6], fuss_l: [0, 0], ...STAND_HALT, ...rechts }, [kipp, 0, 0])

/**
 * Nordic: Knie auf dem Kissen (5 cm), Fersen fixiert, Schienbeine am Boden; der Körper bleibt von Knie bis Kopf eine
 * Linie und kippt um die Knie nach vorn (vor = Neigung aus der Senkrechten), Hände vor der Brust.
 */
const KNIE_KISSEN_Y = 0.091 + 0.05
const nordicLage = (vor: number): Haltung => {
  const r = (vor * Math.PI) / 180
  const ziele: NonNullable<Haltung["ziele"]> = {}
  for (const [n, x] of [["l", 1], ["r", -1]] as const) {
    ziele[`knie_${n}`] = { pos: [x * 0.1, KNIE_KISSEN_Y, 0] }
    ziele[`fuss_${n}`] = { pos: [x * 0.12, 0.08, -0.556] }
  }
  return H(
    { ...B("huefte", [0, 6, 0]), ...B("knie", [90 - vor]), ...B("fuss", [-80, 0]), ...B("schulter", [30 + vor * 0.6, 20, 0]), ...B("ellbogen", [100, 90]) },
    [vor, 0, 0],
    { pos: [0, KNIE_KISSEN_Y + 0.38 * Math.cos(r), 0.38 * Math.sin(r)], boden: false, ziele, beckenFrei: true },
  )
}
const WALK_MITTE: Haltung = brueckeFersen(0.26, [0.05, 0.76], { ...B("knie", [60]) })

export const KRAFT_HUEFTE: Record<string, Dehnung> = {
  // Kreuzheben
  // Hüftbeugen aus dem Stand
  // Hip Thrust an der Bank
  hip_thrust_lh: thrust(ARME_STANGE_HUEFTE, LH, {}, haendeHuefte(0.3)),
  hip_thrust_multipresse: thrust(ARME_STANGE_HUEFTE, LH, {}, haendeHuefte(0.3)),
  hip_thrust_kh: thrust({ ...B("schulter", [-6, 30, 0]), ...B("ellbogen", [60, HAMMER]), ...FAUST }, [{ art: "hantel", an: "haende" }], {}, haendeHuefte(0.13)),
  hip_thrust_band: thrust(ARME_BANK, [{ art: "bandanker", von: "becken", anker: [0.3, 0.02, 0.05] }, { art: "bandanker", von: "becken", anker: [-0.3, 0.02, 0.05] }]),
  hip_thrust_kg: thrust(ARME_BANK, []),
  hip_thrust_einbeinig: wdh("seite", thrustUnten({ ...ARME_BANK, huefte_r: [130, 10, 0], knie_r: [100] }, "r"), thrustOben({ ...ARME_BANK, huefte_r: [40, 10, 0], knie_r: [100] }, "r"), 1.2, {
    aus: 1.8,
    halten: 1,
    seiten: true,
    texte: ["Über die Ferse des Standbeins hochdrücken", "Becken kontrolliert absenken"],
    hilfsmittel: [BANK_QUER],
  }),
  // Beckenheben am Boden
  glute_bridge: bruecke({}, {}),
  glute_bridge_einbeinig: bruecke(EINBEIN_UNTEN, EINBEIN_OBEN, { seiten: true, texte: ["Über die Ferse des Standbeins hochdrücken, Becken waagerecht", "Langsam ablegen"] }, "r"),
  glute_bridge_lh: wdh("seite", brueckeUntenFest(ARME_STANGE_HUEFTE, haendeHuefte(0.3)), mit(brueckeOben(ARME_STANGE_HUEFTE), { ziele: { ...brueckeLage(BRUECKE_H).ziele, ...haendeHuefte(0.3) } }), 1.2, { aus: 1.6, halten: 1, texte: ["Becken mit der Stange in der Hüftbeuge heben, Gesäß anspannen", "Absenken, bis das Gesäß den Boden leicht berührt"], hilfsmittel: LH }),
  glute_bridge_isohold: halte("seite", brueckeUnten(), brueckeOben(), { ein: 1.5, aus: 2, hinweis: "Becken oben halten, Gesäß bleibt angespannt." }),
  glute_bridge_miniband: wdh("seite", brueckeUntenFest(B("huefte", [60, 12, 0])), brueckeOben(B("huefte", [4, 12, 0])), 1.2, {
    aus: 1.6,
    halten: 1,
    texte: ["Becken heben, Knie gegen das Band nach außen", "Langsam ablegen"],
    hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }],
  }),
  glute_bridge_marsch: folge(
    "seite",
    [
      [brueckeOben(), 1.2, "Becken oben halten"],
      [brueckeOben({ huefte_r: [70, 4, 0], knie_r: [90] }, "r"), 0.8, "Rechtes Knie anheben, bis der Oberschenkel senkrecht ist, Becken bleibt ruhig"],
      [brueckeOben(), 0.6],
      [brueckeOben({ huefte_l: [70, 4, 0], knie_l: [90] }, "l"), 0.8, "Anderes Knie anheben"],
      [brueckeOben(), 0.6],
    ],
  ),
  glute_bridge_fuesse_erhoeht: wdh("seite", fuesseBank(false), fuesseBank(true), 1.2, {
    aus: 1.6,
    halten: 1,
    texte: ["Fersen in die Bank drücken, Becken heben, bis Schultern, Hüfte und Knie eine Linie bilden", "Langsam absenken, bis das Gesäß fast den Boden berührt"],
    hilfsmittel: [{ art: "bank", unter: "ferse_l", hoehe: 0.45, quer: true, versatz: [-0.12, 0.1] }],
  }),
  frog_pump: mit2("schraeg", wdh("seite", mit(brueckeUnten({ ...B("huefte", [60, 45, -40]), ...B("knie", [125]), ...B("fuss", [10, 30]) }), { pos: [0, 0.119, 0], boden: false, ziele: { ferse_l: { pos: [0.05, 0.05, 0.42] }, ferse_r: { pos: [-0.05, 0.05, 0.42] } } }), brueckeOben({ ...B("huefte", [10, 45, -40]), ...B("knie", [125]), ...B("fuss", [10, 30]) }, undefined, true), 1.2, {
    aus: 1.6,
    halten: 1,
    texte: ["Fußsohlen zusammen, Becken schnell und kräftig heben, oben Gesäß anspannen", "Ablegen und direkt weiter"],
  })),
  golf_bruecke_beinstreckung: folge(
    "seite",
    [
      [brueckeUnten(), 0.8, "Rückenlage, Füße aufgestellt"],
      [brueckeOben(), 1.2, "Becken heben"],
      [brueckeOben(EINBEIN_OBEN, "r"), 1.0, "Ein Bein strecken, Becken bleibt waagerecht"],
      [brueckeOben(EINBEIN_OBEN, "r"), 2.0, "Halten", true],
      [brueckeOben(), 0.8, "Fuß zurück"],
      [brueckeUnten(), 1.2, "Ablegen"],
    ],
    { seiten: true },
  ),
  // Pull-Through und Swing
  pull_through_kabel: wdh(
    "seite",
    mit(beuge(62, 30, 10, ZWISCHEN_BEINEN, 20), { pos: [0, 0.872, -0.102], boden: false }),
    oben(SEIL_VORN, 3),
    1.2,
    { aus: 1.6, texte: ["Hüfte nach vorn strecken, Seil nach vorn", "Hüfte zurück, Seil zwischen die Beine"], hilfsmittel: kabel("haende", [0, 0.12, -0.75]) },
  ),
  pull_through_band: wdh(
    "seite",
    mit(beuge(62, 30, 10, ZWISCHEN_BEINEN, 20), { pos: [0, 0.872, -0.102], boden: false }),
    oben(SEIL_VORN, 3),
    1.2,
    { aus: 1.6, texte: ["Hüfte nach vorn strecken", "Hüfte zurück, Band zwischen die Beine"], hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0, 0.1, -0.9] }] },
  ),
  kb_swing: folge(
    "seite",
    [
      [mit(beuge(66, 26, 10, ZWISCHEN_BEINEN, 18), { pos: [0, 0.875, -0.07], boden: false }), 0.5, "Kettlebell zwischen den Beinen nach hinten, Unterarme an den Oberschenkeln"],
      [oben({ ...B("schulter", [88, -12, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 3), 0.6, "Hüfte explosiv nach vorn, Glocke schwingt bis Brusthöhe"],
      [oben({ ...B("schulter", [80, -12, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 3), 0.3],
    ],
    { hilfsmittel: [{ art: "hantel", an: "haende" }] },
  ),
  kb_swing_einarmig: folge(
    "seite",
    [
      [mit(beuge(66, 26, 10, { schulter_l: [12, -10, 0], ellbogen_l: [4, HAMMER], schulter_r: [40, 30, 0], ellbogen_r: [30, 0], ...FAUST }, 18), { pos: [0, 0.875, -0.07], boden: false }), 0.5, "Kettlebell zwischen den Beinen nach hinten, Schultern parallel zum Boden"],
      [oben({ schulter_l: [88, 4, 0], ellbogen_l: [4, HAMMER], schulter_r: [10, 20, 0], ellbogen_r: [20, 0], ...FAUST }, 3), 0.6, "Hüfte explosiv nach vorn, Schulter bleibt stabil"],
      [oben({ schulter_l: [80, 4, 0], ellbogen_l: [4, HAMMER], schulter_r: [10, 20, 0], ellbogen_r: [20, 0], ...FAUST }, 3), 0.3],
    ],
    { seiten: true, hilfsmittel: [{ art: "hantel", an: "hand_l" }] },
  ),
  // Kickbacks
  kickback_kabel: wdh("seite", standBein({ huefte_r: [4, 6, 0], knie_r: [6], fuss_r: [0, 0] }), standBein({ huefte_r: [-34, 6, 0], knie_r: [8], fuss_r: [10, 0] }, 14), 1.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Bein gestreckt nach hinten führen", "Kontrolliert zurück"],
    hilfsmittel: kabel("fuss_r", [-0.1, 0.12, 0.6]),
  }),
  kickback_vierfuessler: wdh("seite", VIER, mit(VIER, { g: { huefte_r: [0, 3, 0], knie_r: [90], fuss_r: [0, 0] } }), 1.0, {
    aus: 1.4,
    seiten: true,
    halten: 0.5,
    texte: ["Fußsohle Richtung Decke drücken", "Knie zurück unter die Hüfte"],
  }),
  rueckenstrecken_bank: wdh(
    "seite",
    H({ ...B("huefte", [48, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...ARME_VERSCHRAENKT, hals: [-10, 0, 0] }, [136, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    H({ ...B("huefte", [-6, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...ARME_VERSCHRAENKT, hals: [-10, 0, 0] }, [86, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    1.4,
    { aus: 1.8, texte: ["Oberkörper bis in die Waagerechte heben", "Langsam absenken"], hilfsmittel: [{ art: "bank", unter: "fuss_l", hoehe: 0.45, versatz: [-0.1, 0.3] }] },
  ),
  reverse_hyper_bank: wdh(
    "seite",
    H({ ...B("huefte", [50, 6, 0]), ...B("knie", [40]), ...B("fuss", [-30, 0]), ...B("schulter", [150, 20, 0]), ...B("ellbogen", [20, 0]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.6, 0], boden: false }),
    H({ ...B("huefte", [-4, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...B("schulter", [150, 20, 0]), ...B("ellbogen", [20, 0]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.6, 0], boden: false }),
    1.2,
    { aus: 1.8, texte: ["Gestreckte Beine nach hinten oben heben", "Langsam absenken"], hilfsmittel: [{ art: "bank", unter: "bws", hoehe: 0.45, versatz: [0, 0.35] }] },
  ),
  // Reha im Stand am Stuhl
  reha_gesaess_anspannen: halte("seite", mit(STAND, { g: B("huefte", [0, 6, 0]) }), mit(STAND, { g: { ...B("huefte", [-2, 6, 0]) } }), { ein: 1, aus: 1.5, hinweis: "Beide Gesäßhälften fest anspannen und halten." }),
  reha_bein_hinten_stand: wdh("seite", mit(STAND, { g: HALT_STUHL }), mit(STAND, { g: { ...HALT_STUHL, huefte_r: [-22, 6, 0], knie_r: [4] } }), 1.6, {
    aus: 1.8,
    seiten: true,
    texte: ["Gestrecktes Bein langsam nach hinten", "Zurück"],
    hilfsmittel: [STUHL_VORN],
  }),
  reha_bein_hinten_band: wdh("seite", mit(STAND, { g: HALT_STUHL }), mit(STAND, { g: { ...HALT_STUHL, huefte_r: [-22, 6, 0], knie_r: [4] } }), 1.6, {
    aus: 1.8,
    seiten: true,
    texte: ["Bein gegen das Band nach hinten", "Langsam zurück"],
    hilfsmittel: [STUHL_VORN, { art: "bandanker", von: "fuss_r", anker: [-0.1, 0.1, 0.45] }],
  }),

  // ------------------------------------------------------------ Beinbeuger
  beinbeuger_kh: wdh(
    "seite",
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [10]), ...B("fuss", [20, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [80, 90]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [84]), ...B("fuss", [20, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [80, 90]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    1.2,
    { aus: 2.0, texte: ["Fersen mit der Hantel zum Gesäß", "Langsam strecken"], hilfsmittel: [{ art: "bank", unter: "becken", hoehe: 0.45, versatz: [0, 0.2] }, { art: "hantel", an: "fuesse" }] },
  ),
  beinbeuger_band: wdh(
    "seite",
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [6]), ...B("fuss", [0, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [110, 90]), hals: [-5, 0, 0] }, [90, 0, 0]),
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [100]), ...B("fuss", [0, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [110, 90]), hals: [-5, 0, 0] }, [90, 0, 0]),
    1.2,
    { aus: 1.8, texte: ["Fersen gegen das Band zum Gesäß", "Langsam strecken"], hilfsmittel: [{ art: "bandanker", von: "fuesse", anker: [0, 0.1, -1.6] }] },
  ),
  beinbeuger_stehend_einbeinig: wdh("seite", standBein({ huefte_r: [2, 6, 0], knie_r: [6], fuss_r: [0, 0] }), standBein({ huefte_r: [2, 6, 0], knie_r: [100], fuss_r: [0, 0] }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Ferse zum Gesäß ziehen, Knie bleibt hinten", "Langsam strecken"],
    hilfsmittel: kabel("fuss_r", [-0.1, 0.12, 0.6]),
  }),
  nordic: wdh("seite", nordicLage(0), nordicLage(70), 3.0, {
    aus: 1.4,
    texte: ["Körper als Linie so langsam wie möglich nach vorn sinken lassen, mit den Beinbeugern bremsen", "Mit den Händen abfangen und zurückdrücken"],
    hilfsmittel: [{ art: "kissen", unter: "knie_l" }, { art: "kissen", unter: "knie_r" }],
  }),
  nordic_band: wdh("seite", nordicLage(0), nordicLage(62), 3.0, {
    aus: 1.6,
    texte: ["Langsam nach vorn sinken, das Band unter den Achseln hilft beim Bremsen", "Mit den Beinbeugern und dem Band zurück in den Kniestand"],
    hilfsmittel: [{ art: "kissen", unter: "knie_l" }, { art: "kissen", unter: "knie_r" }, { art: "bandanker", von: "bws", anker: [0, 1.9, -0.6] }],
  }),
  beinbeuger_rutschen: wdh("seite", brueckeOben(), brueckeFersen(0.2, [0.04, 0.925], { ...B("knie", [8]), ...B("fuss", [-10, 0]) }), 2.0, {
    aus: 1.4,
    texte: ["Becken oben, Fersen langsam nach vorn schieben", "Fersen zum Gesäß zurückziehen"],
    hilfsmittel: [{ art: "gleitscheibe", an: "ferse_l" }, { art: "gleitscheibe", an: "ferse_r" }],
  }),
  beinbeuger_rutschen_einbeinig: wdh("seite", brueckeOben(BEIN_HOCH, "r"), brueckeFersen(0.2, [0.04, 0.925], { knie_l: [8], fuss_l: [-10, 0], ...BEIN_HOCH }, "r"), 2.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Eine Ferse langsam nach vorn schieben, Becken oben", "Zurückziehen"],
    hilfsmittel: [{ art: "gleitscheibe", an: "ferse_l" }],
  }),
  beinbeuger_gymnastikball: wdh("seite", brueckeFersen(0.24, [0.51, 0.88], { ...B("knie", [4]), ...B("fuss", [-10, 0]) }), brueckeFersen(0.34, [0.46, 0.58], B("knie", [100])), 1.2, {
    aus: 1.6,
    texte: ["Becken oben, Ball mit den Fersen heranrollen", "Beine wieder strecken"],
    hilfsmittel: [{ art: "gymnastikball", an: "fuesse" }],
  }),
  beinbeuger_gymnastikball_einbeinig: wdh("seite", brueckeFersen(0.24, [0.51, 0.88], { knie_l: [4], fuss_l: [-10, 0], ...BEIN_HOCH }, "r"), brueckeFersen(0.34, [0.46, 0.58], { knie_l: [100], ...BEIN_HOCH }, "r"), 1.2, {
    aus: 1.6,
    seiten: true,
    texte: ["Eine Ferse rollt den Ball heran, Becken oben", "Strecken"],
    hilfsmittel: [{ art: "gymnastikball", an: "ferse_l" }],
  }),
  hamstring_bruecke_einbeinig: wdh(
    "seite",
    mit(RUECKENLAGE_AUF, { pos: [0, 0.13, 0.06], boden: false, g: { ...ARME_VERSCHRAENKT, huefte_l: [30, 4, 0], knie_l: [20], fuss_l: [-10, 0], ...BEIN_HOCH }, ziele: { ferse_l: { pos: [0.119, 0.47, 0.84] } } }),
    brueckeFersen(0.21, [0.47, 0.84], { ...ARME_VERSCHRAENKT, knie_l: [4], fuss_l: [-10, 0], ...BEIN_HOCH }, "r"),
    1.2,
    { aus: 1.6, halten: 1, seiten: true, texte: ["Ferse kräftig in die Bank drücken, Becken heben, bis Hüfte und Knie gestreckt sind", "Absenken, bis das Gesäß den Boden leicht berührt"], hilfsmittel: [{ art: "box", unter: "ferse_l", hoehe: 0.45 }] },
  ),
  bridge_walkout: folge(
    "seite",
    [
      [brueckeOben(), 1.0, "Becken oben"],
      [WALK_MITTE, 1.2, "Mit kleinen Fersenschritten nach vorn"],
      [brueckeFersen(0.2, [0.04, 0.92], { ...B("knie", [14]), ...B("fuss", [-10, 0]) }), 1.2, "Fast gestreckt, Becken bleibt oben"],
      [WALK_MITTE, 1.0, "Mit kleinen Schritten zurück"],
      [brueckeOben(), 1.0],
    ],
  ),

  // ------------------------------------------------------------ Adduktoren
  adduktoren_band: wdh("vorn", standBein({ huefte_r: [0, 24, 0], knie_r: [4], fuss_r: [0, 0] }, 0), standBein({ huefte_r: [6, -14, 0], knie_r: [4], fuss_r: [0, 0] }, 0), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Bein vor dem Standbein vorbei nach innen ziehen", "Kontrolliert zurück"],
    hilfsmittel: [{ art: "bandanker", von: "fuss_r", anker: [-0.9, 0.12, 0] }],
  }),
  adduktoren_kabel: wdh("vorn", standBein({ huefte_r: [0, 24, 0], knie_r: [4], fuss_r: [0, 0] }, 0), standBein({ huefte_r: [6, -14, 0], knie_r: [4], fuss_r: [0, 0] }, 0), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Bein am Standbein vorbei nach innen ziehen", "Kontrolliert zurück"],
    hilfsmittel: kabel("fuss_r", [-0.8, 0.12, 0]),
  }),
  adduktion_seitlage: wdh("vorn", mit(SEITLAGE_GESTRECKT, { pos: [0, 0.168, 0], boden: false, g: { huefte_r: [70, 0, 0], knie_r: [90], fuss_r: [25, 0] }, ziele: OBERER_FUSS_VORN }), mit(SEITLAGE_GESTRECKT, { pos: [0, 0.168, 0], boden: false, g: { huefte_r: [70, 0, 0], knie_r: [90], fuss_r: [25, 0], huefte_l: [6, -20, 0] }, ziele: OBERER_FUSS_VORN }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Unteres Bein gestreckt anheben", "Langsam ablegen"],
  }),
  adduktoren_ball_druecken: halte("schraeg", brueckeUnten(B("huefte", [60, 6, 0])), brueckeUnten(B("huefte", [60, 4, 0])), {
    ein: 1,
    aus: 1.5,
    hinweis: "Ball zwischen den Knien fest zusammendrücken.",
    hilfsmittel: [{ art: "medizinball", an: "knie_mitte" }],
  }),
  // Copenhagen-Varianten: siehe seitstuetz.ts

  // ------------------------------------------------------------ Abduktoren
  hip_abduction_band: wdh("vorn", sitzAbd(6), sitzAbd(24), 0.8, {
    aus: 1.4,
    halten: 0.5,
    texte: ["Knie gegen das Band nach außen drücken", "Langsam zurück"],
    hilfsmittel: [STUHL, { art: "band", von: "knie_l", bis: "knie_r" }],
  }),
  abduktion_seitlage: wdh("vorn", mit(SEITLAGE_GESTRECKT, { g: { huefte_l: [20, 0, 0], knie_l: [30], huefte_r: [-4, 0, 0] } }), mit(SEITLAGE_GESTRECKT, { g: { huefte_l: [20, 0, 0], knie_l: [30], huefte_r: [-4, 34, 0] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Oberes Bein gestreckt leicht nach hinten oben", "Langsam senken"],
  }),
  clamshell: wdh("vorn", mit(SEITLAGE_GEBEUGT, { pos: [0, 0.151, 0], boden: false }), mit(SEITLAGE_GEBEUGT, { pos: [0, 0.151, 0], boden: false, g: { huefte_r: [45, 36, -30] }, ziele: KNIE_AUF }), 0.9, {
    aus: 1.4,
    seiten: true,
    halten: 0.5,
    texte: ["Oberes Knie öffnen, Füße bleiben zusammen", "Langsam schließen"],
    hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }],
  }),
  monster_walk: folge(
    "schraeg",
    [
      [bandSchritt(MONSTER, 0, [0.291, 0], [-0.291, 0]), 0.6, "Leichte Kniebeuge, Füße weiter als hüftbreit, Band gespannt"],
      [bandSchritt(MONSTER, 0.12, [0.291, 0.24], [-0.291, 0]), 0.8, "Schritt diagonal nach vorn außen"],
      [bandSchritt(MONSTER, 0.24, [0.291, 0.24], [-0.291, 0.24]), 0.8, "Anderes Bein diagonal nach vorn, Knie zeigen nach außen"],
      [bandSchritt(MONSTER, 0.12, [0.291, 0], [-0.291, 0.24]), 0.8, "Rückwärts zurück, Band bleibt gespannt"],
      [bandSchritt(MONSTER, 0, [0.291, 0], [-0.291, 0]), 0.8],
    ],
    { hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] },
  ),

  seitwaerts_band: folge(
    "vorn",
    [
      [bandSchritt(SEITWAERTS, 0, [0.261, 0], [-0.261, 0]), 0.6, "Leichte Kniebeuge, Band gespannt"],
      [bandSchritt(SEITWAERTS, 0.1, [0.461, 0], [-0.261, 0]), 0.8, "Schritt zur Seite"],
      [bandSchritt(SEITWAERTS, 0.2, [0.461, 0], [-0.061, 0]), 0.8, "Anderes Bein nachziehen, Band bleibt gespannt"],
      [bandSchritt(SEITWAERTS, 0.1, [0.461, 0], [-0.261, 0]), 0.8, "Zurück: Schritt zur anderen Seite"],
      [bandSchritt(SEITWAERTS, 0, [0.261, 0], [-0.261, 0]), 0.8, "Nachziehen"],
    ],
    { hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] },
  ),

  abduktion_kabel: wdh("vorn", standBein({ huefte_r: [4, -8, 0], knie_r: [4], fuss_r: [0, 0] }, 0), standBein({ huefte_r: [0, 36, 0], knie_r: [4], fuss_r: [0, 0] }, 0), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Bein gestreckt zur Seite führen", "Kontrolliert zurück"],
    hilfsmittel: kabel("fuss_r", [0.8, 0.12, 0]),
  }),
  seitstuetz_abduktion: wdh("vorn", seitBoden({ fussVor: false }), seitBoden({ beinFrei: true, w: { huefte_l: [0, 30, 0], knie_l: [2], fuss_l: [-10, 0] } }), 1.0, { aus: 1.6, seiten: true, texte: ["Im Seitstütz auf dem Unterarm das obere Bein gestreckt anheben, Becken bleibt oben", "Langsam senken"] }),
  fire_hydrant: wdh("vorn", VIER, mit(VIER, { g: { huefte_r: [0, 70, -90], knie_r: [90], fuss_r: [0, 0] } }), 1.0, {
    aus: 1.4,
    seiten: true,
    halten: 0.5,
    texte: ["Bein mit 90 Grad im Knie seitlich anheben, bis der Oberschenkel etwa waagerecht ist, Becken und Rumpf bleiben ruhig", "Langsam absenken"],
  }),
  hip_hike: wdh("vorn", hipHike(-1), hipHike(1), 1.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Hüfte der freien Seite anheben, etwas höher als die Standbeinseite", "Freie Seite langsam absenken, Standbein bleibt gestreckt"],
    hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.45, versatz: [0.15, 0] }],
  }),
  abduktion_wand_isometrisch: halte("vorn", mit(STAND, { g: B("huefte", [0, 4, 0]) }), H({ huefte_l: [6, 4, 0], knie_l: [12], fuss_l: [6, 0], huefte_r: [90, 4, 0], knie_r: [90], ...B("schulter", [4, 10, 0]) }), {
    ein: 1,
    aus: 1.5,
    seiten: true,
    hinweis: "Angehobenes Knie seitlich gegen die Wand drücken.",
    hilfsmittel: [{ art: "wand", an: "knie_r", richtung: "rechts" }],
  }),
  reha_abspreizen_stand: wdh("vorn", mit(STAND, { g: { ...HALT_STUHL, ...STANDBEIN_WEICH } }), mit(STAND, { g: { ...HALT_STUHL, ...STANDBEIN_WEICH, huefte_r: [0, 22, 0], knie_r: [4] } }), 1.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Bein langsam zur Seite heben", "Zurück"],
    hilfsmittel: [STUHL_VORN],
  }),
  reha_abspreizen_band: wdh("vorn", mit(STAND, { g: { ...HALT_STUHL, ...STANDBEIN_WEICH } }), mit(STAND, { g: { ...HALT_STUHL, ...STANDBEIN_WEICH, huefte_r: [0, 26, 0], knie_r: [4] } }), 1.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Bein gegen das Band zur Seite", "Zurück"],
    hilfsmittel: [STUHL_VORN, { art: "band", von: "fuss_l", bis: "fuss_r" }],
  }),
  reha_seitschritte_band: folge(
    "vorn",
    [
      [bandSchritt(REHA_SEIT, 0, [0.205, 0], [-0.205, 0]), 0.6, "Leicht gebeugt stehen"],
      [bandSchritt(REHA_SEIT, 0.075, [0.355, 0], [-0.205, 0]), 1.0, "Kleiner Schritt zur Seite"],
      [bandSchritt(REHA_SEIT, 0.15, [0.355, 0], [-0.055, 0]), 1.0, "Nachstellen"],
      [bandSchritt(REHA_SEIT, 0.075, [0.355, 0], [-0.205, 0]), 1.0, "Schritt zurück"],
      [bandSchritt(REHA_SEIT, 0, [0.205, 0], [-0.205, 0]), 1.0, "Nachstellen"],
    ],
    { hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] },
  ),


  // ------------------------------------------------------------ Wade
  wadenheben: wade({ ...HALT_WAND_R, schulter_l: [2, 8, 0], ellbogen_l: [6, HAMMER], ...B("finger", [90, 0]) }, [{ art: "hantel", an: "hand_l" }, WAND_R], true),
  wadenheben_multipresse: wade(ARME_RUECKEN, [...STANGE_RUECKEN, RACK], false, {}, false, haendeSchultern(0.26, 0.04, -0.06)),
  wadenheben_stepper: wade({ ...HALT_WAND_R, schulter_l: [2, 8, 0], ellbogen_l: [6, HAMMER] }, [WAND_R]),
  wadenheben_einbeinig_kg: wade({ ...HALT_WAND_R, schulter_l: [4, 10, 0], ellbogen_l: [10, 0] }, [WAND_R], true),
  wadenheben_exzentrisch: wade({ ...HALT_WAND_R, schulter_l: [2, 8, 0], ellbogen_l: [6, HAMMER] }, [WAND_R], false, { ein: 1.0, aus: 4.0, texte: ["Mit beiden Beinen auf die Zehen", "Auf einem Bein langsam absenken (3 bis 5 s)"] }, true),
  wadenheben_sitzend_kh: wdh("seite", wadeSitz(false), wadeSitz(true), 1.0, {
    aus: 2.0,
    halten: 1,
    texte: ["Fersen hoch, Hanteln liegen auf den Knien", "Fersen langsam senken"],
    hilfsmittel: [{ art: "bank", unter: "gesaess", hoehe: 0.45, quer: true }, { art: "box", unter: "fuss_l", hoehe: 0.05, versatz: [-WADE_X, 0.2] }, ...KH],
  }),
  wadenheben_isometrisch_gebeugt: halte("seite", mit(STAND, { g: { huefte_r: [10, 8, 0], knie_r: [70] } }), H({ huefte_l: [30, 4, 0], knie_l: [40], fuss_l: [-12, 0], zehen_l: [20], huefte_r: [10, 8, 0], knie_r: [70], fuss_r: [-20, 0], schulter_l: [70, 10, 0], ellbogen_l: [10, 90] }, [4, 0, 0], { pos: [0, 0.9, 0], boden: false, beckenFrei: true, ziele: { fuss_l: { pos: [0.126, 0.062, 0.067] }, ferse_l: { pos: [0.126, 0.112, -0.044] } } }), {
    ein: 1.5,
    aus: 2,
    seiten: true,
    hinweis: "Knie gebeugt, auf dem Fußballen halten, Fingerspitzen an der Wand.",
    hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }],
  }),
  tibialis_heben: wdh(
    "seite",
    H({ ...B("huefte", [24, 4, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]), ...B("schulter", [4, 10, 0]) }, [-6, 0, 0], { pos: [0, 0.81, 0.02], boden: false, beckenFrei: true, ziele: TIB_UNTEN }),
    H({ ...B("huefte", [24, 4, 0]), ...B("knie", [4]), ...B("fuss", [14, 0]), ...B("schulter", [4, 10, 0]) }, [-6, 0, 0], { pos: [0, 0.81, 0.02], boden: false, beckenFrei: true, ziele: TIB_OBEN }),
    0.8,
    { aus: 1.4, texte: ["Fußspitzen zum Schienbein ziehen", "Langsam absenken"], hilfsmittel: [WAND_HINTEN] },
  ),
  tibialis_heben_gewicht: wdh(
    "seite",
    H({ ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [-40, 0]), ...B("schulter", [10, 30, 0]), ...B("ellbogen", [10, 0]) }, undefined, { pos: [0, 0.725, 0], boden: false, ziele: KASTEN_HAENDE }),
    H({ ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [20, 0]), ...B("schulter", [10, 30, 0]), ...B("ellbogen", [10, 0]) }, undefined, { pos: [0, 0.725, 0], boden: false, ziele: KASTEN_HAENDE }),
    0.8,
    { aus: 1.6, texte: ["Fußspitzen mit dem Gewicht anheben", "Langsam senken"], hilfsmittel: [{ art: "box", unter: "gesaess", hoehe: 0.6, versatz: [0, -0.06] }, { art: "hantel", an: "fuesse" }] },
  ),
  reha_fersenheben_stuhl: wdh("seite", fersenStuhl(false, false), fersenStuhl(true, false), 1.0, {
    aus: 2.0,
    halten: 1,
    texte: ["Beide Fersen anheben", "Langsam senken"],
    hilfsmittel: [STUHL_VORN],
  }),
  reha_fersenheben_einbeinig: wdh("seite", fersenStuhl(false, true), fersenStuhl(true, true), 1.0, {
    aus: 2.0,
    halten: 1,
    seiten: true,
    texte: ["Auf einem Bein die Ferse heben", "Langsam senken"],
    hilfsmittel: [STUHL_VORN],
  }),
}
