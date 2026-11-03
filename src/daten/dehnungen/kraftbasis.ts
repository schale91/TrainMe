// Gemeinsame Bausteine der Kraftübungen mit der Dehnfigur: Griffe, Geräte, Grundhaltungen.
//
// Unterarm drehen (ellbogen_l/r[1]): 0 = Daumen nach vorn (Hammergriff), -80 = Handflächen nach vorn (Untergriff),
// 90 = Handrücken nach vorn (Obergriff).

import type { Haltung, Hilfsmittel, Punkt, V3, Winkel } from "../../logik/dehnbewegung"
import { B, H } from "./basis"

// ---------------------------------------------------------------- Griffe und Geräte
export const UNTERGRIFF = -80
export const HAMMER = 0
export const OBERGRIFF = 90
export const SZ_GRIFF = -50

export const FAUST: Winkel = B("finger", [90, 0])
export const KH: Hilfsmittel[] = [
  { art: "hantel", an: "hand_l" },
  { art: "hantel", an: "hand_r" },
]
export const KH_R: Hilfsmittel[] = [{ art: "hantel", an: "hand_r" }]
export const LH: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
export const SZ: Hilfsmittel[] = [{ art: "sz", von: "hand_l", bis: "hand_r" }]
export const BAND: Hilfsmittel[] = [
  { art: "band", von: "fuss_l", bis: "hand_l" },
  { art: "band", von: "fuss_r", bis: "hand_r" },
]
/** Kabel von der unteren Rolle vor dem Körper */
export const kabel = (von: Punkt, rolle: V3 = [0, 0.12, 0.75]): Hilfsmittel[] => [{ art: "kabel", von, rolle }]

/** Rückenlage auf der Flachbank (Sitzhöhe 0,45 m), Füße fest am Boden */
export const BANKLAGE_BEINE: Winkel = { ...B("huefte", [-12, 16, 0]), ...B("knie", [82]), ...B("fuss", [10, 0]), hals: [8, 0, 0] }
export const banklage = (w: Winkel): Haltung => H({ ...BANKLAGE_BEINE, ...FAUST, ...w }, [-90, 0, 0], { pos: [0, 0.56, 0], boden: false })
export const FLACHBANK: Hilfsmittel = { art: "bank", unter: "bws", hoehe: 0.45 }
/** Oberes Kabel des Latzug-Turms vor dem Körper */
export const ROLLE_OBEN: V3 = [0, 2.1, 0.42]
export const kabelstange = (): Hilfsmittel => ({ art: "kabelstange", von: "hand_l", bis: "hand_r" })
