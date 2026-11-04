// Übungen an der Wand mit Zielpunkten: Die Wand steht fest in der Welt (Fläche bei z = WAND vor der Figur), Hände,
// Knie, Zehen und Füße liegen genau dort an ihr oder am Boden, wo die Ausführung sie hinsetzt. Geprüft mit
// werkzeuge/messen.html gegen werkzeuge/soll.ts. Die erste Seite arbeitet mit dem linken Bein bzw. Arm (gespiegelt
// folgt die andere Seite).

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, halte, wdh } from "./basis"
import { stuetzPaar } from "./kraft_druecken"
import { FUSSLAENGE, type Ziele, fuss } from "./ziele"

type P3 = [number, number, number]
/** Wandfläche vor der Figur */
export const WAND = 0.5
/** Handflächenmarke vor der Wandfläche, wenn die Hand flach anliegt */
const HAND_AB = 0.045
/** Kniegelenk vor der Wandfläche, wenn das Knie die Wand berührt */
const KNIE_AB = 0.055
const WAND_VORN: Hilfsmittel = { art: "wand", an: "becken", richtung: "vorn", ebene: WAND }
/** Beide Hände flach an der Wand in Höhe y, halber Abstand x */
const haendeWand = (y: number, x = 0.19): Ziele => ({
  hand_l: { pos: [x, y, WAND - HAND_AB] },
  hand_r: { pos: [-x, y, WAND - HAND_AB] },
})
const ARME_WAND: Winkel = { ...B("schulter", [80, 12, 0]), ...B("ellbogen", [40, 90]), ...B("hand", [70, 0]), ...B("finger", [0, 0]) }
/** Stand vor der Wand: Becken bei (y, z), um kipp vorgeneigt; Zielpunkte für Füße, Knie und Hände */
const vorWand = (y: number, z: number, kipp: number, ziele: Ziele, w: Winkel = {}): Haltung =>
  H({ ...B("huefte", [10, 4, 0]), ...B("knie", [10]), ...ARME_WAND, ...w }, [kipp, 0, 0], { pos: [0, y, z], boden: false, ziele })
/** Ferse z eines Fußes, dessen Fußspitze (Zehenspitzen, 10 cm vor der Ballenmarke) ab von der Wand ist */
const ferseVor = (ab: number) => WAND - ab - FUSSLAENGE - 0.1

// ---------------------------------------------------------------- Knie zur Wand (Sprunggelenk)
// Linker Fuß eine Handbreit vor der Wand, Fußspitze gerade zur Wand, Ferse am Boden; der rechte Fuß hinten.
const KZW_FERSE = ferseVor(0.1)
const kzwFuesse = (): Ziele => ({ ...fuss(1, 0.1, KZW_FERSE, 0), ...fuss(-1, 0.12, KZW_FERSE - 0.42, 6, 0.05) })
const KZW_START = vorWand(0.86, KZW_FERSE - 0.12, 4, { ...kzwFuesse(), ...haendeWand(1.18) })
const KZW_ZIEL = vorWand(0.74, KZW_FERSE - 0.04, 8, { ...kzwFuesse(), ...haendeWand(1.18), knie_l: { pos: [0.1, 0.48, WAND - KNIE_AB] } }, { huefte_l: [45, 3, 0], knie_l: [80] })

// ---------------------------------------------------------------- Großzehe an der Wand
// Die Großzehe steht an der Wand nach oben, der Ballen bleibt am Boden; das Knie schiebt zur Wand.
// Die Zehen der Figur beugen sich nicht: die Zehenspitzen berühren die Wand, der Ballen steht 10 cm davor
const GZ_FERSE = WAND - 0.12 - FUSSLAENGE
const gzFuesse = (): Ziele => ({ ...fuss(1, 0.1, GZ_FERSE, 0), ...fuss(-1, 0.12, GZ_FERSE - 0.4, 6, 0.04) })
const GZ_START = vorWand(0.86, GZ_FERSE - 0.14, 4, { ...gzFuesse(), ...haendeWand(1.2) }, { zehen_l: [60] })
const GZ_ZIEL = vorWand(0.78, WAND - 0.4, 8, { ...gzFuesse(), ...haendeWand(1.2), knie_l: { pos: [0.1, 0.54, WAND - 0.1] } }, { zehen_l: [70], huefte_l: [40, 3, 0], knie_l: [70] })

// ---------------------------------------------------------------- Wade an der Wand
// Hinteres Bein gestreckt, Ferse fest am Boden, Fußspitze gerade; vorderes Knie gebeugt, Hände auf Schulterhöhe.
// Hinten gestreckt reicht das Bein von der Hüfte bis zur Ferse bei WAND - 0,94; vorn steht die Ferse bei WAND - 0,45
const wadeFuesse = (): Ziele => ({ ...fuss(1, 0.1, WAND - 0.45, 4), ...fuss(-1, 0.1, WAND - 0.94, 0) })
const WADE_START = vorWand(0.88, WAND - 0.6, 15, { ...wadeFuesse(), ...haendeWand(1.28) }, { knie_r: [2] })
const WADE_ZIEL = vorWand(0.865, WAND - 0.49, 12, { ...wadeFuesse(), ...haendeWand(1.28) }, { knie_r: [2], knie_l: [35] })
/** Soleus: hinterer Fuß nur eine Fußlänge hinter dem vorderen, beide Knie gebeugt */
const soleusFuesse = (): Ziele => ({ ...fuss(1, 0.1, WAND - 0.4, 4), ...fuss(-1, 0.1, WAND - 0.64, 0) })
const SOLEUS_START = vorWand(0.89, WAND - 0.54, 14, { ...soleusFuesse(), ...haendeWand(1.25) })
// hinteres Knie nach vorn unten: Schienbein um 15 Grad geneigt über dem Knöchel
const SOLEUS_ZIEL = vorWand(0.88, WAND - 0.57, 13, { ...soleusFuesse(), ...haendeWand(1.2), knie_r: { pos: [-0.1, 0.53, WAND - 0.46] } }, { knie_l: [35], knie_r: [30] })
/** Ballen an der Wand, Ferse am Boden direkt davor, Knie gestreckt */
const ZEHEN_FERSE = WAND - 0.18
const zehenFuesse = (): Ziele => ({ ferse_l: { pos: [0.1, 0.022, ZEHEN_FERSE] }, fuss_l: { pos: [0.1, 0.085, WAND - 0.09] }, ...fuss(-1, 0.12, ZEHEN_FERSE - 0.32, 4) })
// Knie gestreckt: das Becken liegt auf dem Kreis um den Knöchel, beim Vorlehnen rückt es nach vorn
const ZEHEN_START = vorWand(0.89, WAND - 0.5, 6, { ...zehenFuesse(), ...haendeWand(1.25) }, { knie_l: [2] })
const ZEHEN_ZIEL = vorWand(0.925, WAND - 0.41, 14, { ...zehenFuesse(), ...haendeWand(1.25) }, { knie_l: [2] })

// ---------------------------------------------------------------- Fingerlaufen
// Eine Unterarmlänge vor der Wand; die Fingerspitzen laufen von Brusthöhe nach oben, der Arm streckt sich.
const FL_Z = WAND - 0.33
const flHaltung = (y: number, beuge: number): Haltung =>
  H({ ...B("huefte", [0, 6, 0]), schulter_l: [y > 1.5 ? 160 : 40, 6, 0], ellbogen_l: [beuge, 90], hand_l: [40, 0], schulter_r: [4, 8, 0], ellbogen_r: [10, 0] }, [0, 0, 0], {
    pos: [0, 0.933, FL_Z],
    boden: false,
    ziele: { ...fuss(1, 0.1, FL_Z - 0.05, 8), ...fuss(-1, 0.1, FL_Z - 0.05, 8), hand_l: { pos: [0.17, y, WAND - 0.07] } },
  })


// ---------------------------------------------------------------- Rückenlage mit den Beinen an der Wand
// Rücken am Boden (Becken 11,8 cm hoch, gemessen), Kopf von der Wand weg (-z). Die Beine zeigen an der Wand nach oben:
// Knöchel auf der Beinachse, die Ferse liegt hinten (zur Wand) an.
const LIEGT_Y = 0.118
const HUEFTE_Y = LIEGT_Y - 0.003
const ARME_LOCKER_LIEGEND: Winkel = { ...B("schulter", [8, 25, 0]), ...B("ellbogen", [10, 0]) }
/** Bein von der Hüfte (x, z) in Richtung (dx, dy, dz) gestreckt an die Wand: Knie und Ferse als Zielpunkte */
const beinAnWand = (s: 1 | -1, hz: number, dir: P3): Ziele => {
  const l = Math.hypot(...dir), d: P3 = [dir[0] / l, dir[1] / l, dir[2] / l]
  const h: P3 = [s * 0.078, HUEFTE_Y, hz]
  const at = (k: number): P3 => [h[0] + d[0] * k, h[1] + d[1] * k, h[2] + d[2] * k]
  // Rückseite des Beins zeigt zur Wand (+z): senkrecht zur Beinachse in der Ebene y-z
  const hinten: P3 = [0, -d[2], d[1]]
  const knoechel = at(0.853)
  const ferse: P3 = [knoechel[0] + hinten[0] * 0.062 - d[0] * 0.054, knoechel[1] + hinten[1] * 0.062 - d[1] * 0.054, knoechel[2] + hinten[2] * 0.062 - d[2] * 0.054]
  // Fuß rechtwinklig zum Bein, die Zehen zeigen von der Wand weg (Fußsohle zur Decke)
  const vorn: P3 = [0, d[2], -d[1]]
  const ballen: P3 = [ferse[0] + vorn[0] * 0.115 + d[0] * 0.012, ferse[1] + vorn[1] * 0.115 + d[1] * 0.012, ferse[2] + vorn[2] * 0.115 + d[2] * 0.012]
  const n = s === 1 ? "l" : "r"
  return { [`knie_${n}`]: { pos: at(0.383) }, [`ferse_${n}`]: { pos: ferse }, [`fuss_${n}`]: { pos: ballen } }
}
/** Hüfte so weit von der Wand, dass die Ferse des um neig Grad zur Wand geneigten Beins die Wand berührt */
const hueftZFuerBein = (neig: number) => WAND - 0.06 - (0.853 - 0.054) * Math.sin((neig * Math.PI) / 180) - 0.062 * Math.cos((neig * Math.PI) / 180)
const liegtVorWand = (hz: number, ziele: Ziele, w: Winkel): Haltung =>
  H({ ...ARME_LOCKER_LIEGEND, ...B("fuss", [0, 0]), ...w }, [-90, 0, 0], { pos: [0, LIEGT_Y, hz - 0.01], boden: false, ziele })
const BW_NEIG = 6
const BW_HZ = hueftZFuerBein(BW_NEIG)
const bwRichtung = (spreiz = 0): P3 => [Math.sin((spreiz * Math.PI) / 180), Math.cos((BW_NEIG * Math.PI) / 180) * Math.cos((spreiz * Math.PI) / 180), Math.sin((BW_NEIG * Math.PI) / 180)]
const BEINE_WAND = liegtVorWand(BW_HZ, { ...beinAnWand(1, BW_HZ, bwRichtung()), ...beinAnWand(-1, BW_HZ, [-bwRichtung()[0], bwRichtung()[1], bwRichtung()[2]]) }, { ...B("huefte", [84, 2, 0]), ...B("knie", [2]) })
/** Ausgangsstellung: Knie angewinkelt, Füße flach an der Wand */
const BEINE_WAND_START = liegtVorWand(
  BW_HZ,
  { ferse_l: { pos: [0.09, 0.62, WAND - 0.035] }, ferse_r: { pos: [-0.09, 0.62, WAND - 0.035] } },
  { ...B("huefte", [80, 3, 0]), ...B("knie", [50]), ...B("fuss", [10, 0]) },
)
const GRAETSCHE_WAND = (spreiz: number) => {
  const r = bwRichtung(spreiz)
  return liegtVorWand(BW_HZ, { ...beinAnWand(1, BW_HZ, r), ...beinAnWand(-1, BW_HZ, [-r[0], r[1], r[2]]) }, { ...B("huefte", [80, spreiz, 0]), ...B("knie", [2]) })
}


// ---------------------------------------------------------------- Figur 4 an der Wand
// Rückenlage, ein Fuß flach an der Wand mit Hüfte und Knie etwa im rechten Winkel (Schienbein waagerecht, Sohle zur
// Wand), der andere Knöchel liegt auf diesem Knie, das Knie zeigt nach außen. Danach rutscht das Gesäß näher heran.
const F4_KNIE_Y = HUEFTE_Y + 0.383
const F4_KNOECHEL_Z = WAND - 0.074
/** Fuß des Wandbeins (rechts) flach an der Wand: Ferse unter, Ballen über dem Knöchel */
const F4_FUSS: Ziele = { ferse_r: { pos: [-0.09, F4_KNIE_Y - 0.062, F4_KNOECHEL_Z + 0.054] }, fuss_r: { pos: [-0.09, F4_KNIE_Y + 0.058, F4_KNOECHEL_Z + 0.042] } }
const F4_VIER: Winkel = { huefte_l: [60, 75, 180], knie_l: [105] }
const figur4 = (naeher: number): Haltung =>
  liegtVorWand(F4_KNOECHEL_Z - 0.47 + naeher, naeher ? F4_FUSS : { ...F4_FUSS, knie_r: { pos: [-0.085, F4_KNIE_Y, F4_KNOECHEL_Z - 0.47] } }, { huefte_r: [90, 4, 0], knie_r: [90], fuss_r: [0, 0], ...F4_VIER })


// ---------------------------------------------------------------- Beinrückseite im Türrahmen
// Rückenlage im Türrahmen: das rechte Bein liegt gestreckt an der Wand neben der Öffnung, das linke Bein liegt lang
// durch die Öffnung am Boden. Die Wand endet 6 cm rechts der Körpermitte.
const TUER_WAND: Hilfsmittel = { art: "wand", an: "becken", richtung: "vorn", ebene: WAND, breite: 0.8, x: -0.46 }
const TR_NEIG = 4
const TR_HZ = hueftZFuerBein(TR_NEIG)
const beinBoden = (s: 1 | -1, hz: number): Ziele => {
  const n = s === 1 ? "l" : "r"
  // gestreckt durch die Tür: Ferse liegt am Boden 0,8 m vor der Hüfte
  return { [`ferse_${n}`]: { pos: [s * 0.1, 0.03, hz + 0.86] }, [`knie_${n}`]: { pos: [s * 0.09, 0.1, hz + 0.38] } }
}
const tuerrahmen = (gebeugt: boolean): Haltung => {
  const r = bwRichtung()
  const rechts = gebeugt ? { ferse_r: { pos: [-0.09, 0.62, WAND - 0.06] as P3 } } : beinAnWand(-1, TR_HZ, [-r[0] * 0, r[1], Math.sin((TR_NEIG * Math.PI) / 180)])
  return liegtVorWand(TR_HZ, { ...rechts, ...beinBoden(1, TR_HZ) }, { huefte_r: [84, 0, 0], knie_r: [gebeugt ? 50 : 2], huefte_l: [0, 3, 0], knie_l: [2], fuss_l: [-20, 0] })
}


// ---------------------------------------------------------------- Gesicht zur Wand: Hände und Unterarme an der Wand
/** Füße hüftbreit flach bei z (Fersen) */
const stehtBei = (z: number, breit = 0.1): Ziele => ({ ...fuss(1, breit, z, 6), ...fuss(-1, breit, z, 6) })
const haendeAn = (y: number, x = 0.19): Ziele => haendeWand(y, x)
const STRECK: Winkel = { ...B("schulter", [90, 10, 0]), ...B("ellbogen", [6, 90]), ...B("hand", [70, 0]), ...B("finger", [0, 0]) }
/** Lat an der Wand: Hände auf Hüfthöhe, Füße weit zurück; Hüfte nach hinten, bis Oberkörper und Arme eine Linie bilden */
const LAT_FERSE = WAND - 1.0
const latHaltung = (y: number, z: number, kipp: number, knie: number): Haltung =>
  H({ ...B("huefte", [kipp, 5, 0]), ...B("knie", [knie]), ...STRECK, hals: [-10, 0, 0] }, [kipp, 0, 0], { pos: [0, y, z], boden: false, ziele: { ...stehtBei(LAT_FERSE), ...haendeAn(0.92) } })
/** Überkopf an der Wand: Hände so hoch wie möglich, kleiner Schritt zurück, Brust sinkt zur Wand */
const UK_FERSE = WAND - 0.46
const ukHaltung = (y: number, z: number, kipp: number): Haltung =>
  H({ ...B("huefte", [kipp, 5, 0]), ...B("knie", [4]), ...B("schulter", [170, 12, 0]), ...B("ellbogen", [6, 90]), ...B("hand", [60, 0]), ...B("finger", [0, 0]), bws: [-10, 0, 0] }, [kipp, 0, 0], {
    pos: [0, y, z],
    boden: false,
    ziele: { ...stehtBei(UK_FERSE), ...haendeAn(1.66, 0.17) },
  })
/** Wall Slide: Unterarme schulterbreit an der Wand (Kleinfingerseite) bzw. an der Rolle, gleiten in ein Y nach oben */
const unterarmeAn = (ebene: number, ellY: number, ellX: number, handY: number, handX: number, ab = 0): Ziele => ({
  ellbogen_l: { pos: [ellX, ellY, ebene - 0.05 - ab] },
  ellbogen_r: { pos: [-ellX, ellY, ebene - 0.05 - ab] },
  hand_l: { pos: [handX, handY, ebene - 0.035 - ab] },
  hand_r: { pos: [-handX, handY, ebene - 0.035 - ab] },
})
const slideHaltung = (ebene: number, oben: boolean, ab = 0): Haltung => {
  // ohne Rolle 2,5 cm weiter weg: sonst berührt die Brust oben die Wand
  const z = ebene - (ebene < WAND ? 0.2 : 0.225)
  return H(
    { ...B("huefte", [0, 5, 0]), ...B("knie", [4]), ...B("schulter", oben ? [150, 30, 0] : [80, 25, 0]), ...B("ellbogen", [oben ? 20 : 95, 0]), ...B("hand", [0, 0]), ...B("finger", [0, 0]) },
    // oben lehnt sich der Oberkörper etwas zur Wand, damit die Unterarme bei fast gestreckten Armen an ihr bleiben
    // ohne Rolle steht der Kopf nah an der Wand: weniger Vorlage, die Ellbogen bleiben oben etwas tiefer
    [oben ? (ebene < WAND ? 12 : 2) : 2, 0, 0],
    { pos: [0, 0.933, z], boden: false, ziele: { ...stehtBei(z - 0.04), ...(oben ? unterarmeAn(ebene, ebene < WAND ? 1.48 : 1.45, ebene < WAND ? 0.24 : 0.22, ebene < WAND ? 1.74 : 1.71, 0.33, ab) : unterarmeAn(ebene, ebene < WAND ? 1.15 : 1.2, 0.2, ebene < WAND ? 1.43 : 1.48, 0.2)) } },
  )
}
/** Faszienrolle zwischen Wand und Unterarmen (Durchmesser 15 cm) */
const ROLLE_D = 0.15


// ---------------------------------------------------------------- Handstand an der Wand (Bauch zur Wand)
// Die Wand steht hinter der Ausgangslage (Fläche bei z = -WAND). Aus dem Liegestütz mit den Füßen an der Wand laufen
// die Füße die Wand hoch und die Hände zur Wand, bis die Hände eine Handbreit vor ihr stehen und der Bauch sie fast
// berührt; Arme gestreckt, Körper als Linie.
const WAND_HINTEN_FEST: Hilfsmittel = { art: "wand", an: "becken", richtung: "hinten", ebene: -WAND }
const verschiebe = (h: Haltung, dz: number): Haltung => ({
  ...h,
  pos: h.pos ? [h.pos[0], h.pos[1], h.pos[2] + dz] : h.pos,
  ziele: h.ziele ? Object.fromEntries(Object.entries(h.ziele).map(([n, z]) => [n, { ...z, pos: [z!.pos[0], z!.pos[1], z!.pos[2] + dz] }])) : h.ziele,
})
const HS_STUETZ = stuetzPaar({ hand: 0.17 })
/** Liegestütz, Kopf von der Wand weg, die Zehen an der Wand */
const HS_START = (() => {
  const fz = HS_STUETZ.o.ziele!.fuss_l!.pos[2]
  return verschiebe(HS_STUETZ.o, -WAND + 0.09 - fz)
})()
/** Handstand: Handflächen 17 cm vor der Wand (Finger zur Wand), Schultern senkrecht darüber, Körper gestreckt */
const HS_PALME_Z = -WAND + 0.17
const HS_SCHULTER_Y = 0.055 + 0.016 + 0.411
/** Zwischenschritt: Füße auf Hüfthöhe an der Wand, Hände weit vor ihr, Körper im rechten Winkel (L) */
const HS_L_HAND_Z = -WAND + 1.09
const HS_L: Haltung = H(
  { ...B("huefte", [95, 4, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]), ...B("schulter", [170, 10, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), hals: [-25, 0, 0] },
  [155, 0, 0],
  {
    pos: [0, HS_SCHULTER_Y + 0.37 * Math.cos((25 * Math.PI) / 180), HS_L_HAND_Z + 0.088 - 0.37 * Math.sin((25 * Math.PI) / 180)],
    boden: false,
    ziele: { hand_l: { pos: [0.17, 0.055, HS_L_HAND_Z] }, hand_r: { pos: [-0.17, 0.055, HS_L_HAND_Z] }, fuss_l: { pos: [0.1, 0.92, -WAND + 0.1] }, fuss_r: { pos: [-0.1, 0.92, -WAND + 0.1] } },
  },
)
/** Zwischenschritt: Füße höher an der Wand, Hände näher */
const HS_M_HAND_Z = -WAND + 0.6
const HS_M: Haltung = H(
  { ...B("huefte", [40, 4, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...B("schulter", [172, 10, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), hals: [-25, 0, 0] },
  [165, 0, 0],
  {
    pos: [0, HS_SCHULTER_Y + 0.37 * Math.cos((15 * Math.PI) / 180), HS_M_HAND_Z + 0.088 - 0.37 * Math.sin((15 * Math.PI) / 180)],
    boden: false,
    ziele: { hand_l: { pos: [0.17, 0.055, HS_M_HAND_Z] }, hand_r: { pos: [-0.17, 0.055, HS_M_HAND_Z] }, fuss_l: { pos: [0.1, 1.45, -WAND + 0.11] }, fuss_r: { pos: [-0.1, 1.45, -WAND + 0.11] } },
  },
)
const HANDSTAND_WAND: Haltung = H(
  { ...B("huefte", [2, 4, 0]), ...B("knie", [2]), ...B("fuss", [-35, 0]), ...B("schulter", [176, 10, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), hals: [-25, 0, 0] },
  // kopfüber, die Bauchseite zeigt zur Wand (-z)
  [180, 0, 0],
  {
    pos: [0, HS_SCHULTER_Y + 0.37, HS_PALME_Z + 0.088],
    boden: false,
    ziele: { hand_l: { pos: [0.17, 0.055, HS_PALME_Z] }, hand_r: { pos: [-0.17, 0.055, HS_PALME_Z] } },
  },
)


// ---------------------------------------------------------------- Wall Slide mit dem Rücken zur Wand
// Wand hinter dem Körper (z = -WAND), Füße eine Fußlänge davor, Knie leicht gebeugt; Gesäß, oberer Rücken und
// Hinterkopf an der Wand. Unterarme und Handrücken liegen an der Wand: unten W (Ellbogen 90 Grad auf Schulterhöhe),
// oben so weit nach oben geschoben, wie es mit Rücken und Armen an der Wand geht.
const RUECKEN_WAND = -WAND
const rueckenSlide = (oben: boolean): Haltung => {
  const w = RUECKEN_WAND + 0.045
  const e: [number, number] = oben ? [0.27, 1.49] : [0.33, 1.32]
  const h: [number, number] = oben ? [0.31, 1.76] : [0.35, 1.6]
  const ziele: Ziele = { ...stehtBei(RUECKEN_WAND + 0.27) }
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], w] }
    ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], w + 0.01] }
  }
  return H({ ...B("huefte", [8, 5, 0]), ...B("knie", [10]), ...B("fuss", [2, 0]), ...B("schulter", oben ? [10, 150, 70] : [10, 88, 80]), ...B("ellbogen", [oben ? 70 : 92, 0]), hals: [-14, 0, 0] }, [-3, 0, 0], { pos: [0, 0.92, RUECKEN_WAND + 0.09], boden: false, ziele })
}

export const WAND_UEBUNGEN: Record<string, Dehnung> = {
  wall_slide: wdh("vorn", rueckenSlide(false), rueckenSlide(true), 1.8, { aus: 1.8, fest: [], texte: ["Arme langsam an der Wand nach oben schieben, Rücken bleibt an der Wand", "Zurück, Ellbogen knapp unter Schulterhöhe"], hilfsmittel: [WAND_HINTEN_FEST] }),
  knie_zur_wand: wdh("seite", KZW_START, KZW_ZIEL, 2.5, { halten: 2, seiten: true, texte: ["Linkes Knie über die zweite Zehe zur Wand, Ferse bleibt am Boden", "Zurück"], hilfsmittel: [WAND_VORN] }),
  grosszehe_dehnen_wand: halte("seite", GZ_START, GZ_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Großzehe nach oben an der Wand, der Ballen bleibt am Boden, Knie langsam nach vorn." }),
  waden_dehnen: halte("seite", WADE_START, WADE_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Hintere Ferse fest am Boden, Knie gestreckt, Hüfte zur Wand schieben." }),
  waden_pnf_wand: halte("seite", WADE_START, WADE_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Ballen halb kräftig in den Boden drücken, dann lösen und die Hüfte weiter zur Wand." }),
  soleus_dehnen_wand: halte("seite", SOLEUS_START, SOLEUS_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Beide Knie gebeugt, hinteres Knie nach vorn unten, Ferse bleibt am Boden." }),
  waden_dehnen_zehen_wand: halte("seite", ZEHEN_START, ZEHEN_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Ferse vor der Wand, Ballen an der Wand, Knie gestreckt, Körper zur Wand lehnen." }),
  beine_an_wand: halte("seite", BEINE_WAND_START, BEINE_WAND, { hilfsmittel: [WAND_VORN], hinweis: "Gesäß nah an der Wand, die Beine liegen gestreckt und geschlossen an ihr, der ganze Körper wird schwer." }),
  graetsche_wand: halte("schraeg", GRAETSCHE_WAND(4), GRAETSCHE_WAND(36), { hilfsmittel: [WAND_VORN], hinweis: "Gesäß an der Wand, die gestreckten Beine gleiten an der Wand zur Seite." }),
  figur4_wand: halte("seite", figur4(0), figur4(0.09), { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Fuß an der Wand, Außenknöchel auf dem Knie, Knie nach außen; mit dem Gesäß näher zur Wand rutschen." }),
  beinrueckseite_dehnen_tuerrahmen: halte("seite_links", tuerrahmen(true), tuerrahmen(false), {
    hilfsmittel: [TUER_WAND],
    hinweis: "Rechtes Bein gestreckt am Türrahmen, das linke Bein liegt lang durch die Tür am Boden. Danach die Seite wechseln.",
  }),
  lat_dehnen_wand: halte("seite", latHaltung(0.93, WAND - 0.81, 70, 4), latHaltung(0.9, WAND - 0.92, 86, 8), { hilfsmittel: [WAND_VORN], hinweis: "Hände auf Hüfthöhe an der Wand, Hüfte nach hinten, Oberkörper und Arme bilden eine Linie, Brust sinkt zum Boden." }),
  hund_wand: halte("seite", latHaltung(0.93, WAND - 0.83, 70, 6), latHaltung(0.89, WAND - 0.91, 86, 14), { hilfsmittel: [WAND_VORN], hinweis: "Arme gestreckt, Oberkörper waagerecht, Knie leicht gebeugt, Hüfte nach hinten." }),
  ueberkopf_wand: halte("seite", ukHaltung(0.93, UK_FERSE + 0.06, 10), ukHaltung(0.92, UK_FERSE + 0.08, 25), { hilfsmittel: [WAND_VORN], hinweis: "Hände so hoch wie möglich an der Wand, Brust und Achseln sinken zur Wand, Rippen unten." }),
  wandgleiten_mobil: wdh("seite", slideHaltung(WAND, false), slideHaltung(WAND, true), 2.5, { aus: 2.5, texte: ["Unterarme an der Wand nach oben in ein Y schieben", "Kontrolliert zurückgleiten"], hilfsmittel: [WAND_VORN] }),
  wall_slide_rolle: wdh("seite", slideHaltung(WAND - ROLLE_D, false), slideHaltung(WAND - ROLLE_D, true), 2.5, { aus: 2.5, texte: ["Rolle mit den Unterarmen nach oben rollen, bis die Arme ein Y bilden", "Kontrolliert zurück"], hilfsmittel: [WAND_VORN] }),
  wall_slide_faszienrolle: wdh("seite", slideHaltung(WAND - ROLLE_D, false), slideHaltung(WAND - ROLLE_D, true), 2.5, { aus: 2.5, texte: ["Rolle nach oben rollen, die Arme gehen in ein Y", "Langsam zurück, Druck bleibt"], hilfsmittel: [WAND_VORN] }),
  wall_slide_abheben: folge("seite", [[slideHaltung(WAND, false), 1.0, "Unterarme an der Wand"], [slideHaltung(WAND, true), 2.5, "Nach oben in die Y-Position schieben"], [slideHaltung(WAND, true), 0.3, "Oben"], [slideHaltung(WAND, true, 0.04), 1.2, "Unterarme oben einige Zentimeter abheben"], [slideHaltung(WAND, true), 0.8, "Wieder anlegen"], [slideHaltung(WAND, false), 2.5, "Kontrolliert nach unten gleiten"]], { hilfsmittel: [WAND_VORN] }),
  handstand_halten_wand: folge(
    "seite",
    [
      [HS_START, 1.5, "Liegestütz, Füße an der Wand", true],
      [HS_L, 2.5, "Füße die Wand hoch, Hände zur Wand"],
      [HS_M, 2.0, "Weiter hochlaufen"],
      [HANDSTAND_WAND, 2.0, "Hände eine Handbreit vor der Wand, Bauch fast an der Wand"],
      [HANDSTAND_WAND, 10, "Halten: Arme gestreckt, Körper als Linie"],
      [HS_M, 2.0, "Hände weg von der Wand"],
      [HS_L, 2.0, "Füße herunter"],
      [HS_START, 2],
    ],
    { hilfsmittel: [WAND_HINTEN_FEST] },
  ),
  fingerlaufen_wand: wdh("seite", flHaltung(1.12, 95), flHaltung(1.68, 5), 6, { halten: 2, aus: 3, seiten: true, texte: ["Fingerspitzen an der Wand nach oben laufen lassen", "Langsam wieder nach unten"], hilfsmittel: [WAND_VORN] }),
}
void (null as unknown as P3)
