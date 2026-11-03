// Faszienrolle mit Zielpunkten: Die Rolle liegt fest bei z = 0 quer am Boden (Durchmesser 15 cm, Oberkante 15,6 cm).
// Das ausgerollte Körperteil liegt mit seiner Achse um seinen halben Querschnitt über der Oberkante; Hände, Unterarme
// oder Füße stützen fest am Boden, beim Rollen gleitet der Körper über die Rolle.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, wdh } from "./basis"
import { OBER, UNTER, type Ziele, fuss } from "./ziele"

type P3 = [number, number, number]
const ROLLE_OBEN = 0.156
const ROLLE: Hilfsmittel = { art: "rolle", unter: "becken", bei: [0, 0] }
/** Ferse bei waagerecht liegendem Unterschenkel (Richtung +z oder -z), Fuß neutral mit den Zehen nach oben */
const fersePlus = (knoechel: P3, richtung: 1 | -1): P3 => [knoechel[0], knoechel[1] - 0.062, knoechel[2] + richtung * 0.054]

// ---------------------------------------------------------------- Sitzend, Hände hinten am Boden
/** Becken vor (z) und Höhe der Beinachse; links ein Bein aufgestellt, rechts gestreckt auf der Rolle (beide: beide gestreckt) */
const sitzend = (hz: number, achseY: number, beide: boolean, handZ: number, w: Winkel = {}): Haltung => {
  const hy = achseY
  const ziele: Ziele = {
    hand_l: { pos: [0.2, 0.055, handZ] },
    hand_r: { pos: [-0.2, 0.055, handZ] },
  }
  for (const s of beide ? ([1, -1] as const) : ([-1] as const)) {
    const x = s * 0.09
    const kn: P3 = [x, hy, hz + OBER]
    const ak: P3 = [x, hy, hz + OBER + UNTER]
    ziele[s === 1 ? "knie_l" : "knie_r"] = { pos: kn }
    ziele[s === 1 ? "ferse_l" : "ferse_r"] = { pos: fersePlus(ak, 1) }
  }
  // aufgestelltes linkes Bein: Fuß hinter der Rolle
  if (!beide) Object.assign(ziele, fuss(1, 0.12, Math.min(hz + 0.5, -0.4), 6))
  return H(
    { ...B("huefte", [beide ? 55 : 60, 4, 0]), ...B("knie", [4]), ...B("fuss", [0, 0]), huefte_l: beide ? [55, 4, 0] : [95, 6, 0], knie_l: beide ? [4] : [95], ...B("schulter", [-40, 15, 0]), ...B("ellbogen", [5, 90]), ...B("hand", [80, 0]), ...w },
    [-55, 0, 0],
    { pos: [0, hy + 0.003, hz], boden: false, ziele },
  )
}

// ---------------------------------------------------------------- Bauchlage auf den Unterarmen
const bauchlage = (hz: number, achseY: number): Haltung => {
  const ziele: Ziele = {
    ellbogen_l: { pos: [0.15, 0.05, 0.58] },
    ellbogen_r: { pos: [-0.15, 0.05, 0.58] },
    // Unterarme liegen flach nach vorn
    hand_l: { pos: [0.13, 0.045, 0.84] },
    hand_r: { pos: [-0.13, 0.045, 0.84] },
  }
  for (const s of [1, -1] as const) {
    const x = s * 0.09
    ziele[s === 1 ? "knie_l" : "knie_r"] = { pos: [x, achseY, hz - OBER] }
  }
  return H({ ...B("huefte", [0, 4, 0]), ...B("knie", [4]), ...B("fuss", [-70, 0]), ...B("schulter", [80, 15, 0]), ...B("ellbogen", [90, 90]), hals: [-15, 0, 0] }, [86, 0, 0], { pos: [0, achseY + 0.01, hz], boden: false, ziele })
}

// ---------------------------------------------------------------- Vierfüßlerstand, Schienbeine auf der Rolle
const vierfuessler = (kz: number): Haltung => {
  const achse = ROLLE_OBEN + 0.045
  const ziele: Ziele = {
    hand_l: { pos: [0.17, 0.055, 0.6] },
    hand_r: { pos: [-0.17, 0.055, 0.6] },
  }
  for (const s of [1, -1] as const) {
    const x = s * 0.09
    ziele[s === 1 ? "knie_l" : "knie_r"] = { pos: [x, achse, kz] }
    const ak: P3 = [x, achse, kz - UNTER]
    // Fußrücken zeigt nach unten (Zehen nach hinten gestreckt)
    ziele[s === 1 ? "ferse_l" : "ferse_r"] = { pos: [x, achse + 0.06, kz - UNTER + 0.05] }
    void ak
  }
  // Kopf etwas tiefer als die Hüfte: mit gestreckten Armen reichen die Hände zum Boden
  return H({ ...B("huefte", [100, 4, 0]), ...B("knie", [90]), ...B("fuss", [-60, 0]), ...B("schulter", [86, 6, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), hals: [-20, 0, 0] }, [100, 0, 0], {
    pos: [0, achse + OBER + 0.003, kz],
    boden: false,
    ziele,
  })
}

const ROLL: [string, string] = ["Langsam über die Rolle rollen", "Zurückrollen, an festen Stellen kurz bleiben"]
export const ROLLEN: Record<string, Dehnung> = {
  // rechte Wade: von knapp über der Achillessehne bis unter die Kniekehle
  waden_rolle: wdh("seite", sitzend(-(OBER + UNTER * 0.8), ROLLE_OBEN + 0.1, false, -1.0), sitzend(-(OBER + UNTER * 0.15), ROLLE_OBEN + 0.12, false, -1.0), 3, { aus: 3, seiten: true, texte: ROLL, hilfsmittel: [ROLLE] }),
  // Oberschenkelrückseiten: von knapp über den Kniekehlen bis unter das Gesäß
  beinrueckseite_rolle: wdh("seite", sitzend(-OBER * 0.85, ROLLE_OBEN + 0.07, true, -0.62), sitzend(-OBER * 0.2, ROLLE_OBEN + 0.115, true, -0.62), 3, { aus: 3, texte: ROLL, hilfsmittel: [ROLLE] }),
  // Quadrizeps in Bauchlage: von knapp über den Knien Richtung Hüfte
  quadrizeps_rolle: wdh("seite", bauchlage(OBER * 0.85, ROLLE_OBEN + 0.085), bauchlage(OBER * 0.25, ROLLE_OBEN + 0.09), 3, { aus: 3, texte: ROLL, hilfsmittel: [ROLLE] }),
  // Schienbeine im Vierfüßlerstand: von knapp unter den Knien Richtung Sprunggelenk
  schienbein_rolle: wdh("seite", vierfuessler(0.08), vierfuessler(0.36), 3, { aus: 3, texte: ROLL, hilfsmittel: [ROLLE] }),
}
