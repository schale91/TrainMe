// Kreuzheben, Rumänisches Kreuzheben, Good Morning und Hüftbeugen mit Zielpunkten: Füße fest in Breite und Winkel
// aus der Ausführung, die Stange über dem Mittelfuß, die Arme hängen senkrecht, die Schultern leicht vor der Stange.
// Die Gelenkwinkel rechnet die Figur selbst aus; Prüfung mit werkzeuge/messen.html gegen werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, wdh } from "./basis"
import { FAUST, HAMMER, KH, OBERGRIFF, kabel, kabelstange } from "./kraftbasis"
import { ARME_RUECKEN, RACK, STANGE_RUECKEN, ansicht } from "./kraft_beine"
import {
  ARM, FERSE_Z, KNOECHEL_Y, KNOECHEL_Z, MITTELFUSS_Z, SCHULTER_X, beckenFuerSchulter, beinStart, fuesse, fuss, haendeSchultern, rad, stangeWelt, type Ziele,
} from "./ziele"

/** Mitte der Langhantel am Boden: Scheibenradius 22,5 cm */
const BODEN = 0.23
const LH: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
const GRIFF_AUSSEN = 0.2
const GRIFF_INNEN = 0.15
const greifen = (dreh = OBERGRIFF): Winkel => ({ ...B("ellbogen", [4, dreh]), ...FAUST })

interface Heben {
  /** halber Fersenabstand, Zehenwinkel */
  breit: number
  winkel: number
  /** Hände seitlich (halber Abstand) */
  griff: number
  /** Höhe der Stange unten (Mitte) und vor der Ferse */
  y: number
  z?: number
  /** Neigung des Oberkörpers unten */
  kipp: number
  /** Schultern vor der Stange (Meter) */
  vor?: number
  /** ganze Füße erhöht (Podest) */
  podest?: number
  dreh?: number
}
/** Haltung unten: Schultern senkrecht über den Händen (bzw. leicht davor), Becken daraus; Beine fest */
const hebUnten = (h: Heben): Haltung => {
  const z = h.z ?? MITTELFUSS_Z + 0.02
  const senk = Math.sqrt(ARM * ARM - (h.griff - SCHULTER_X) ** 2)
  const [py, pz] = beckenFuerSchulter(h.y + senk, z + (h.vor ?? 0.03), h.kipp)
  const ziele: Ziele = { ...fuesse(h.breit, h.winkel, FERSE_Z, h.podest ?? 0), ...stangeWelt(h.griff, h.y, z) }
  return H(
    { ...beinStart(py - 0.01, pz, h.kipp, KNOECHEL_Y + 0.022 + (h.podest ?? 0), FERSE_Z + KNOECHEL_Z, h.winkel), ...B("schulter", [h.kipp, 6, 0]), ...greifen(h.dreh), hals: [-h.kipp * 0.35, 0, 0] },
    [h.kipp, 0, 0],
    { pos: [0, py, pz], boden: false, ziele },
  )
}
/** Aufrecht, Stange vor den Oberschenkeln, Arme hängen */
const hebOben = (h: Heben): Haltung =>
  H({ ...B("huefte", [0, 6, -h.winkel * 0.5]), ...B("knie", [4]), ...B("schulter", [4, 6, 0]), ...greifen(h.dreh) }, [0, 0, 0], {
    pos: [0, 0.93 + (h.podest ?? 0), -0.01],
    boden: false,
    ziele: { ...fuesse(h.breit, h.winkel, FERSE_Z, h.podest ?? 0), ...haendeSchultern(h.griff, -0.47, 0.08) },
  })
const heben = (h: Heben, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), hebUnten(h), hebOben(h), 1.4, { aus: 1.8, texte: ["Boden wegdrücken, Stange nah am Körper", "Hüfte nach hinten, kontrolliert ablegen"], hilfsmittel, ...extra })

const KLASSISCH: Heben = { breit: 0.12, winkel: 10, griff: GRIFF_AUSSEN, y: BODEN, kipp: 63 }
const SUMO: Heben = { breit: 0.3, winkel: 38, griff: GRIFF_INNEN, y: BODEN, kipp: 55, vor: 0.0 }

// ---------------------------------------------------------------- Rumänisch, Good Morning
interface Hinge {
  breit: number
  /** Neigung unten, Stange (bzw. Hände) unten auf Höhe y */
  kipp: number
  /** Kniebeugung, gleich oben und unten (locker) */
  knie: number
  /** Hände: an der Stange vor den Beinen (y unten) oder Zielpunkte im Rahmen der Schultern */
  y?: number
  griff?: number
  haende?: Ziele
  arme: Winkel
  b?: Partial<Record<"l" | "r", Ziele>>
}
/**
 * Hüftbeugen: Kniewinkel bleibt gleich; oben stehen Ober- und Unterschenkel je zur Hälfte geneigt (Hüfte über dem
 * Knöchel), unten ist das Schienbein fast senkrecht und der Oberschenkel kippt nach hinten (Hüfte nach hinten).
 * Die Stange gleitet an den Beinen entlang: unten knapp vor den Knien.
 */
const hingeHaltung = (h: Hinge, kipp: number): Haltung => {
  const unten = kipp > 5
  const schien = unten ? 3 : h.knie * 0.5
  const knieY = 0.076 + 0.47 * Math.cos(rad(schien)), knieZ = FERSE_Z + KNOECHEL_Z + 0.47 * Math.sin(rad(schien))
  const ober = rad(schien - h.knie)
  const hy = knieY + 0.383 * Math.cos(ober), hz = knieZ + 0.383 * Math.sin(ober)
  const z: Ziele = { ...fuesse(h.breit, 8), ...(h.haende ?? {}) }
  if (h.y !== undefined) Object.assign(z, unten ? stangeWelt(h.griff ?? 0.19, h.y, knieZ + 0.07) : haendeSchultern(h.griff ?? 0.19, -0.47, 0.08))
  return H({ ...beinStart(hy, hz, kipp, 0.076, FERSE_Z + KNOECHEL_Z, 8), ...h.arme, hals: [-kipp * 0.4, 0, 0] }, [kipp, 0, 0], { pos: [0, hy + 0.01, hz], boden: false, ziele: z })
}
const hinge = (h: Hinge, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), hingeHaltung(h, 2), hingeHaltung(h, h.kipp), 2.0, { aus: 1.4, texte: ["Hüfte nach hinten schieben, Rücken gerade", "Hüfte nach vorn, aufrichten"], hilfsmittel, ...extra })

// Stange unten etwa knapp unter dem Knie: mit den Armen der Figur bei locker gebeugten Knien der tiefste Punkt mit
// geradem Rücken (Ausführung: bis zur starken Dehnung, meist etwa Mitte Schienbein)
const RDL: Hinge = { breit: 0.12, kipp: 78, knie: 28, y: 0.5, griff: 0.19, arme: { ...B("schulter", [70, 6, 0]), ...greifen() } }

export const KRAFT_HEBEN: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Kreuzheben vom Boden
  kreuzheben_lh: heben(KLASSISCH, LH),
  kreuzheben_reset: folge(
    "schraeg",
    [
      [hebUnten(KLASSISCH), 0.8, "Stange liegt, Fuß, Griff und Rücken prüfen"],
      [hebOben(KLASSISCH), 1.4, "Gleichmäßig anheben bis aufrecht"],
      [hebUnten(KLASSISCH), 1.8, "Kontrolliert ganz ablegen"],
    ],
    { hilfsmittel: LH },
  ),
  kreuzheben_pause: folge(
    "schraeg",
    [
      [hebUnten(KLASSISCH), 0.6, "Start vom Boden, volle Spannung"],
      [hebUnten({ ...KLASSISCH, y: 0.45, kipp: 48 }), 1.0, "Bis zwei bis fünf Zentimeter unter die Knie"],
      [hebUnten({ ...KLASSISCH, y: 0.45, kipp: 48 }), 2.0, "Still halten, Schultern vor der Stange", true],
      [hebOben(KLASSISCH), 1.0, "Ohne Schwung ganz aufrichten"],
      [hebUnten(KLASSISCH), 1.8, "Ablegen"],
    ],
    { hilfsmittel: LH },
  ),
  kreuzheben_defizit: heben({ ...KLASSISCH, podest: 0.05, kipp: 56 }, [...LH, { art: "box", unter: "fuesse", hoehe: 0.05, versatz: [0, 0] }], { texte: ["Vom Podest abdrücken, Stange eng am Körper", "Kontrolliert ablegen"] }),
  kreuzheben_sumo: heben(SUMO, LH, { ansicht: "vorn", texte: ["Knie nach außen, Stange senkrecht hoch", "Hüfte und Knie gleichzeitig beugen"] }),
  kreuzheben_gegenstand: heben(SUMO, LH, { ansicht: "vorn", texte: ["Im ungewohnten Stand hochziehen", "Mit derselben Technik ablegen"] }),
  rack_pull: wdh("schraeg", hebUnten({ ...KLASSISCH, y: 0.52, kipp: 45, z: 0.06 }), hebOben(KLASSISCH), 1.2, {
    aus: 1.6,
    texte: ["Hüfte kraftvoll nach vorn bis aufrecht", "Stange zurück auf die Ablagen"],
    hilfsmittel: [...LH, { art: "rack", an: "becken", z: -0.2, ablage: 0.5 }],
  }),
  kreuzheben_gestreckt: heben({ ...KLASSISCH, kipp: 92 }, LH, { texte: ["Hüfte nach vorn, Knie bleiben im Winkel", "Am Bein entlang ablegen"] }),
  kb_kreuzheben: wdh("schraeg", hebUnten({ breit: 0.16, winkel: 15, griff: 0.04, y: 0.27, z: MITTELFUSS_Z, kipp: 45, vor: 0.0, dreh: HAMMER }), hebOben({ breit: 0.16, winkel: 15, griff: 0.04, y: 0.27, kipp: 45, dreh: HAMMER }), 1.2, {
    aus: 1.6,
    texte: ["Aus den Beinen hoch, Hüfte strecken", "Hüfte nach hinten, Knie beugen, abstellen"],
    hilfsmittel: [{ art: "hantel", an: "haende" }],
  }),
  // ------------------------------------------------------------ Hüftbeugen aus dem Stand
  rdl_lh: hinge(RDL, LH),
  rdl_kh: hinge({ ...RDL, arme: { ...B("schulter", [70, 10, 0]), ...greifen() } }, KH),
  rdl_kabel: hinge({ ...RDL, kipp: 72, y: 0.54 }, [kabelstange(), ...kabel("haende", [0, 0.12, 0.6])]),
  good_morning_lh: hinge({ breit: 0.12, kipp: 80, knie: 28, haende: haendeSchultern(0.26, 0.04, -0.06), arme: ARME_RUECKEN }, [...STANGE_RUECKEN, RACK], { texte: ["Hüfte nach hinten, Oberkörper fast waagerecht", "Hüfte nach vorn, aufrichten"] }),
  good_morning_band: hinge({ breit: 0.12, kipp: 70, knie: 28, haende: haendeSchultern(0.15, 0.02, 0.1), arme: { ...B("schulter", [10, 30, 0]), ...B("ellbogen", [140, OBERGRIFF]), ...FAUST } }, [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_r", bis: "hand_r" }], {
    texte: ["Hüfte nach hinten, Oberkörper nach vorn", "Gegen den Zug aufrichten, Gesäß fest"],
  }),
  hip_hinge_stab: hinge(
    {
      breit: 0.12,
      kipp: 60,
      knie: 28,
      // eine Hand im Nacken, die andere am unteren Rücken: der Stab liegt an Hinterkopf, Brustwirbelsäule und Kreuzbein
      haende: { hand_r: { pos: [-0.02, 0.14, -0.1], bezug: "schultern" }, hand_l: { pos: [0.02, -0.3, -0.13], bezug: "schultern" } },
      arme: { schulter_l: [-40, 20, 70], ellbogen_l: [100, 0], schulter_r: [160, 24, 0], ellbogen_r: [150, 0], ...FAUST },
    },
    [{ art: "stab", von: "hand_l", bis: "hand_r" }],
    { texte: ["Stab bleibt an Kopf, Brustwirbelsäule und Kreuzbein", "Hüfte nach vorn, aufrichten"] },
  ),
  rdl_b_stance: (() => {
    // vorderer Fuß links flach, hinterer rechts: Zehen auf Höhe der vorderen Ferse, Ferse angehoben
    const fuesseB: Ziele = { ...fuss(1, 0.12, FERSE_Z, 8), ...fuss(-1, 0.12, FERSE_Z - 0.12, 8, 0.07) }
    const mitB = (h: Haltung): Haltung => ({ ...h, ziele: { ...h.ziele, ...fuesseB } })
    return wdh("seite", mitB(hingeHaltung({ ...RDL, arme: { ...B("schulter", [70, 10, 0]), ...greifen() } }, 2)), mitB(hingeHaltung({ ...RDL, arme: { ...B("schulter", [70, 10, 0]), ...greifen() } }, 76)), 2.0, {
      aus: 1.4,
      seiten: true,
      texte: ["Vorderes Bein trägt, Hüfte nach hinten", "Vordere Ferse in den Boden, aufrichten"],
      hilfsmittel: KH,
    })
  })(),
}
