// Übungen an der Wand mit Zielpunkten: Die Wand steht fest in der Welt (Fläche bei z = WAND vor der Figur), Hände,
// Knie, Zehen und Füße liegen genau dort an ihr oder am Boden, wo die Ausführung sie hinsetzt. Geprüft mit
// werkzeuge/messen.html gegen werkzeuge/soll.ts. Die erste Seite arbeitet mit dem linken Bein bzw. Arm (gespiegelt
// folgt die andere Seite).

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, halte, wdh } from "./basis"
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

export const WAND_UEBUNGEN: Record<string, Dehnung> = {
  knie_zur_wand: wdh("seite", KZW_START, KZW_ZIEL, 2.5, { halten: 2, seiten: true, texte: ["Linkes Knie über die zweite Zehe zur Wand, Ferse bleibt am Boden", "Zurück"], hilfsmittel: [WAND_VORN] }),
  grosszehe_dehnen_wand: halte("seite", GZ_START, GZ_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Großzehe nach oben an der Wand, der Ballen bleibt am Boden, Knie langsam nach vorn." }),
  waden_dehnen: halte("seite", WADE_START, WADE_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Hintere Ferse fest am Boden, Knie gestreckt, Hüfte zur Wand schieben." }),
  waden_pnf_wand: halte("seite", WADE_START, WADE_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Ballen halb kräftig in den Boden drücken, dann lösen und die Hüfte weiter zur Wand." }),
  soleus_dehnen_wand: halte("seite", SOLEUS_START, SOLEUS_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Beide Knie gebeugt, hinteres Knie nach vorn unten, Ferse bleibt am Boden." }),
  waden_dehnen_zehen_wand: halte("seite", ZEHEN_START, ZEHEN_ZIEL, { seiten: true, hilfsmittel: [WAND_VORN], hinweis: "Ferse vor der Wand, Ballen an der Wand, Knie gestreckt, Körper zur Wand lehnen." }),
  fingerlaufen_wand: wdh("seite", flHaltung(1.12, 95), flHaltung(1.68, 5), 6, { halten: 2, aus: 3, seiten: true, texte: ["Fingerspitzen an der Wand nach oben laufen lassen", "Langsam wieder nach unten"], hilfsmittel: [WAND_VORN] }),
}
void (null as unknown as P3)
