// Ziehen mit Zielpunkten: Klimmzüge an der Stange des Wand-Racks. Die Hände hängen in der beschriebenen Breite an der
// Stange, im Hang sind die Arme gestreckt und der Körper hängt ruhig senkrecht, oben ist das Kinn über der Stange und
// die Ellbogen sind so nach unten gezogen, wie die Ausführung es beschreibt. Geprüft mit werkzeuge/messen.html gegen
// werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, halte, wdh } from "./basis"
import { FAUST, HAMMER, OBERGRIFF, UNTERGRIFF } from "./kraftbasis"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, ellbogenKreis, rad } from "./ziele"

type P3 = [number, number, number]
type YZ = [number, number]
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
/** Füße auf der Box: unten im tiefen Hockstand, oben hilft das Bein */
const BOX: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: 0.5, versatz: [-0.09, 0.05] }

/** Schulterblatt-Klimmzug: Schultern locker zu den Ohren; oben ziehen sie nach unten und heben den Körper an */
const SB_UNTEN = hang({ ...OBER, griff: 0.15 }, B("schulterblatt", [18, 0]), 0.02)

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
  klimmzug_box: wdh(
    "schraeg",
    hang(OBER, { ...B("huefte", [80, 6, 0]), ...B("knie", [110]), ...B("fuss", [10, 0]) }),
    oben(OBER, { ...B("huefte", [30, 6, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]) }),
    1.4,
    { aus: 2.0, texte: ["Hochziehen, die Beine helfen nur so viel wie nötig", "Kontrolliert ablassen"], hilfsmittel: [RACK, BOX] },
  ),
}
