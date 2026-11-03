// Copenhagen-Seitstütz mit Zielpunkten: Unterarm am Boden, Ellbogen unter der Schulter, das obere Bein liegt mit dem
// Knie (kurz) oder dem Fuß (lang) auf der quer stehenden Bank, oben bildet der Körper eine gerade Linie.
// Die Figur liegt auf der rechten Seite, Kopf in Blickrichtung +z; die Bank steht quer unter dem oberen (linken) Bein.

import type { Dehnung, Haltung, Winkel } from "../../logik/dehnbewegung"
import { H, halte, wdh } from "./basis"
import { OBER, UNTER } from "./ziele"

/** Mitte der Schultern über dem Boden, rechte Schulter 12,7 cm tiefer genau über dem Ellbogen */
const SCHULTER_MITTE_Y = 0.4
const SCHULTER_Z = 0.6
const RUMPF_L = 0.354
/** Bank 45 cm: Kniegelenk bzw. Knöchel des oben aufliegenden Beins (Innenseite liegt auf dem Polster) */
const AUFLAGE_Y = 0.57
const ARME: Winkel = { schulter_r: [10, 85, 0], ellbogen_r: [90, 0], schulter_l: [10, 10, 0], ellbogen_l: [20, 0] }
const seitstuetz = (lang: boolean, hoch: boolean, unten: Winkel): Haltung => {
  // Länge Schultermitte bis Auflage (Knie oder Knöchel) entlang der Körperlinie
  const l = RUMPF_L + OBER + (lang ? UNTER : 0)
  const oben = AUFLAGE_Y - 0.078
  const dy = oben - SCHULTER_MITTE_Y
  const dz = Math.sqrt(l * l - dy * dy)
  // oben: Becken auf der Linie; abgesenkt hängt es 5 cm tiefer (Ellbogen und Auflage bleiben)
  const t = RUMPF_L / l
  const neig = (Math.atan2(dy, dz) * 180) / Math.PI
  // beim langen Hebel liegt der Fuß weit weg auf der Bank: dort hängt das Becken nur 2 cm tiefer
  const by = SCHULTER_MITTE_Y + dy * t - (hoch ? 0 : lang ? 0.02 : 0.05)
  const bz = SCHULTER_Z - dz * t
  const auflage = lang ? { fuss_l: { pos: [0.02, AUFLAGE_Y + 0.02, SCHULTER_Z - dz - 0.02] as [number, number, number] } } : { knie_l: { pos: [0, AUFLAGE_Y, SCHULTER_Z - dz] as [number, number, number] } }
  return H(
    { ...ARME, huefte_l: [hoch ? 0 : 14, 4, 0], knie_l: [lang ? 2 : 95], fuss_l: [-10, 0], ...unten, hals: [0, 8, 0] },
    // Bauchlage (Kopf nach +z), um die Längsachse auf die rechte Seite gedreht, Füße etwas höher als die Schultern
    [90 + neig, 90, 0],
    { pos: [0, by, bz], boden: false, ziele: { ellbogen_r: { pos: [0, 0.05, SCHULTER_Z] }, ...auflage } },
  )
}
/** unteres Bein: am Boden unter der Bank bzw. zum oberen Bein hochgezogen */
// rechts liegt unten: Abspreizen führt das untere Bein zum Boden
const UNTEN_BODEN: Winkel = { huefte_r: [4, 22, 0], knie_r: [4], fuss_r: [-10, 0] }
const UNTEN_HOCH: Winkel = { huefte_r: [4, 2, 0], knie_r: [4], fuss_r: [-10, 0] }
const BANK_KNIE = { art: "bank" as const, unter: "knie_l" as const, hoehe: 0.45, quer: true }
const BANK_FUSS = { art: "bank" as const, unter: "fuss_l" as const, hoehe: 0.45, quer: true }

export const SEITSTUETZ: Record<string, Dehnung> = {
  copenhagen: halte("vorn", seitstuetz(true, false, UNTEN_BODEN), seitstuetz(true, true, UNTEN_HOCH), {
    ein: 1.5,
    aus: 2,
    seiten: true,
    hinweis: "Oberer Fuß auf der Bank, Unterarm am Boden, Körper als Linie, unteres Bein zur Bank heben.",
    hilfsmittel: [BANK_FUSS],
  }),
  copenhagen_kurz: halte("vorn", seitstuetz(false, false, UNTEN_BODEN), seitstuetz(false, true, UNTEN_BODEN), {
    ein: 1.5,
    aus: 2,
    seiten: true,
    hinweis: "Oberes Knie auf der Bank, Unterarm am Boden, Becken hoch, Körper von Kopf bis Knie als Linie.",
    hilfsmittel: [BANK_KNIE],
  }),
  copenhagen_dynamisch: wdh("vorn", seitstuetz(true, false, UNTEN_BODEN), seitstuetz(true, true, UNTEN_HOCH), 1.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Becken heben, unteres Bein zur Bank", "Becken und unteres Bein langsam absenken"],
    hilfsmittel: [BANK_FUSS],
  }),
}
