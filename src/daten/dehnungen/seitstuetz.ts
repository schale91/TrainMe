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
  // oben: Becken auf der Linie; abgesenkt hängt es 3,5 cm tiefer (Ellbogen und Auflage bleiben)
  const t = RUMPF_L / l
  const neig = (Math.atan2(dy, dz) * 180) / Math.PI
  // beim langen Hebel liegt der Fuß weit weg auf der Bank: dort hängt das Becken nur 2 cm tiefer
  const by = SCHULTER_MITTE_Y + dy * t - (hoch ? 0 : lang ? 0.02 : 0.035)
  const bz = SCHULTER_Z - dz * t
  const auflage = lang ? { fuss_l: { pos: [0.02, AUFLAGE_Y + 0.02, SCHULTER_Z - dz - 0.02] as [number, number, number] } } : { knie_l: { pos: [0, AUFLAGE_Y, SCHULTER_Z - dz] as [number, number, number] } }
  return H(
    { ...ARME, huefte_l: [hoch ? 0 : 14, 4, 0], knie_l: [lang ? 2 : 95], fuss_l: [-10, 0], ...unten, hals: [0, 8, 0] },
    // Bauchlage (Kopf nach +z), um die Längsachse auf die rechte Seite gedreht, Füße etwas höher als die Schultern
    [90 + neig, 90, 0],
    // abgesenkt darf sich das Becken neigen, damit Ellbogen und Auflage liegen bleiben
    { pos: [0, by, bz], boden: false, ziele: { ellbogen_r: { pos: [0, 0.05, SCHULTER_Z] }, ...auflage }, ...(hoch ? {} : { drehFrei: true }) },
  )
}
// ---------------------------------------------------------------- Seitstütz am Boden (rechte Seite unten)
/** Kniegelenk bzw. Knöchel des unten liegenden Beins über dem Boden (seitlich aufliegend) */
const GELENK_UNTEN_Y = 0.055
/** halber Abstand der Hüftgelenke: das obere Bein liegt so viel höher als die Körpermitte */
const HUEFTE_HALB = 0.078
/** Handgelenk über der Handfläche plus Arm bis zum Handgelenk (gestreckt) */
const ARM_GESTRECKT = 0.016 + 0.415
export interface SeitBoden {
  /** Stütz auf dem Unterarm (Ellbogen unter der Schulter) oder auf der gestreckten Hand */
  stuetz?: "unterarm" | "hand"
  /** Drehpunkt unten: Füße übereinander oder Knie (Unterschenkel nach hinten gebeugt) */
  unten?: "fuss" | "knie"
  /** Becken unter (+) bzw. über (-) der geraden Linie (m) */
  senken?: number
  /** freie Winkel (oberer Arm, oberes Bein, Rumpf) */
  w?: Winkel
  /** oberes Bein ohne Zielpunkt (frei nach w) */
  beinFrei?: boolean
  /** oberer Fuß vor den unteren gestellt (stabiler) */
  fussVor?: boolean
  /** Becken darf sich neigen (Drehung des Oberkörpers) */
  drehFrei?: boolean
  /** obere Hand an diesen Ort (Welt), auf die Hüfte oder senkrecht über der Schulter zur Decke */
  handOben?: [number, number, number] | "huefte" | "decke"
}
/**
 * Seitstütz auf dem Boden: rechte Seite unten, Ellbogen (bzw. Handgelenk) genau unter der Schulter, Füße bzw. Knie
 * übereinander am Boden. Der Körper bildet eine Linie von der Schultermitte bis zur Mitte der Knöchel (Knie).
 */
export const seitBoden = (k: SeitBoden = {}): Haltung => {
  const hand = k.stuetz === "hand"
  const knie = k.unten === "knie"
  // rechte Schulter über dem Stützpunkt, Mitte der Schultern 12,7 cm höher
  const sy = (hand ? 0.055 + ARM_GESTRECKT : 0.05 + 0.222) + 0.127
  const l = RUMPF_L + OBER + (knie ? 0 : UNTER)
  const endY = GELENK_UNTEN_Y + HUEFTE_HALB
  const dy = endY - sy
  const dz = Math.sqrt(l * l - dy * dy)
  const t = RUMPF_L / l
  const neig = (Math.atan2(dy, dz) * 180) / Math.PI
  const by = sy + dy * t - (k.senken ?? 0)
  const bz = SCHULTER_Z - dz * t
  const ez = SCHULTER_Z - dz
  // oberes Bein: rechtwinklig zur Körperlinie über dem unteren (bei schräger Linie etwas zu den Füßen hin)
  const oy = (2 * HUEFTE_HALB * dz) / l, oz = (2 * HUEFTE_HALB * dy) / l
  const ziele: NonNullable<Haltung["ziele"]> = hand
    ? { hand_r: { pos: [0.04, 0.055, SCHULTER_Z + 0.02] }, ellbogen_r: { pos: [0.02, 0.055 + 0.016 + 0.195 + 0.01, SCHULTER_Z] } }
    : { ellbogen_r: { pos: [0, 0.05, SCHULTER_Z] } }
  if (knie) {
    ziele.knie_r = { pos: [0, GELENK_UNTEN_Y, ez] }
    if (!k.beinFrei) ziele.knie_l = { pos: [0, GELENK_UNTEN_Y + oy, ez + oz] }
  } else {
    ziele.fuss_r = { pos: [0.02, GELENK_UNTEN_Y + 0.02, ez - 0.02] }
    if (!k.beinFrei) ziele.fuss_l = { pos: k.fussVor ? [0.1, GELENK_UNTEN_Y + 0.02, ez + 0.08] : [0.02, GELENK_UNTEN_Y + oy + 0.02, ez - 0.02 + oz] }
  }
  // rechtwinklig zur Körperlinie nach oben
  const ny = dz / l, nz = dy / l
  if (k.handOben === "huefte") ziele.hand_l = { pos: [0.02, by + 0.17 * ny, bz + 0.17 * nz] }
  else if (k.handOben === "decke") ziele.hand_l = { pos: [0, sy + 0.127 * ny + 0.49, SCHULTER_Z + 0.127 * nz] }
  else if (k.handOben) ziele.hand_l = { pos: k.handOben }
  const beine: Winkel = knie ? { huefte_l: [0, 2, 0], huefte_r: [0, 2, 0], knie_l: [90], knie_r: [90], fuss_l: [-20, 0], fuss_r: [-20, 0] } : { huefte_l: [0, 0, 0], huefte_r: [0, 0, 0], knie_l: [2], knie_r: [2], fuss_l: [-10, 0], fuss_r: [-10, 0] }
  const arme: Winkel = hand ? { schulter_r: [4, 88, 0], ellbogen_r: [4, 0], hand_r: [-80, 0] } : { schulter_r: [10, 85, 0], ellbogen_r: [90, 0] }
  return H({ ...arme, schulter_l: [10, 10, 0], ellbogen_l: [20, 0], ...beine, hals: [0, 8, 0], ...k.w }, [90 + neig, 90, 0], { pos: [0, by, bz], boden: false, ziele, ...(k.senken || k.drehFrei ? { drehFrei: true } : {}) })
}

/** unteres Bein: am Boden unter der Bank bzw. zum oberen Bein hochgezogen */
// rechts liegt unten: Abspreizen führt das untere Bein zum Boden
const UNTEN_BODEN: Winkel = { huefte_r: [4, 21, 0], knie_r: [4], fuss_r: [15, 0] }
// hochgezogen bleibt das untere Bein knapp unter dem Polster der Bank
const UNTEN_HOCH: Winkel = { huefte_r: [4, 14, 0], knie_r: [4], fuss_r: [-10, 0] }
// kurzer Hebel: das Becken liegt tiefer, das untere Bein liegt locker am Boden
const UNTEN_KURZ = (abd: number): Winkel => ({ huefte_r: [4, abd, 0], knie_r: [4], fuss_r: [15, 0] })
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
  copenhagen_kurz: halte("vorn", seitstuetz(false, false, UNTEN_KURZ(22)), seitstuetz(false, true, UNTEN_KURZ(22)), {
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
