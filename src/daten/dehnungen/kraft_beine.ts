// Beine mit der Dehnfigur: Kniebeugen (Stange im Rack, Kurzhantel, Körpergewicht), Split Squats, Ausfallschritte,
// Step-ups, einbeinige Kniebeugen und Kreuzheben, Wandsitzen, Reha am Stuhl.
//
// Winkel im Raum: Oberschenkel = Hüftbeugung - Kippung des Beckens; Unterschenkel = Oberschenkel - Kniebeugung;
// Fuß flach, wenn Anziehen = -Unterschenkel.

import type { Dehnung, Haltung, Hilfsmittel, Winkel, Ziel, ZielPunkt } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, B, H, STAND, STUHLSITZ, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, OBERGRIFF } from "./kraftbasis"

// ---------------------------------------------------------------- Arme und Last
/** Stange auf dem oberen Rücken: Hände knapp außerhalb der Schultern hinter dem Nacken */
export const ARME_RUECKEN: Winkel = { ...B("schulter", [-6, 62, 70]), ...B("ellbogen", [118, OBERGRIFF]), ...FAUST }
/** Front Rack: Ellbogen hoch, Stange vorn auf den Schultern */
export const ARME_FRONT: Winkel = { ...B("schulter", [92, 18, 0]), ...B("ellbogen", [150, -60]), ...FAUST }
/** Hantel eng vor der Brust (Goblet) */
export const ARME_GOBLET: Winkel = { ...B("schulter", [26, 6, 0]), ...B("ellbogen", [138, HAMMER]), ...FAUST }
/** Kurzhanteln hängen neben dem Körper */
export const ARME_SEITE: Winkel = { ...B("schulter", [2, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST }
/** Arme zum Ausgleich nach vorn */
export const ARME_VOR: Winkel = { ...B("schulter", [88, 6, 0]), ...B("ellbogen", [4, 90]) }
export const ARME_HOCH: Winkel = { ...B("schulter", [172, 16, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }

/** Mit Langhantel schräg von vorn, sonst verdecken die Scheiben in der Seitenansicht die Figur */
export const ansicht = (hilfsmittel: Hilfsmittel[]): Dehnung["ansicht"] => (hilfsmittel.some((h) => h.art === "langhantel") ? "schraeg" : "seite")
export const STANGE_RUECKEN: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
export const RACK: Hilfsmittel = { art: "rack", an: "becken", haken: 1.4, ablage: 0.62 }

// ---------------------------------------------------------------- Zielpunkte
type Ziele = Partial<Record<ZielPunkt, Ziel>>
const FUSSLAENGE = 0.12
export const FERSE_Y = 0.022
export const SPITZE_Y = 0.034
/**
 * Füße fest am Boden: Fersen im Abstand 2·breit (Meter, Mitte zu Mitte), Zehen um winkel Grad nach außen, Fersen bei z.
 * Das Knie zeigt dabei von selbst über die Zehen.
 */
export const fuesse = (breit = 0.17, winkel = 22, z = -0.05): Ziele => {
  const r = (winkel * Math.PI) / 180
  const dx = FUSSLAENGE * Math.sin(r), dz = FUSSLAENGE * Math.cos(r)
  // Marken der Figur bei flach stehendem Fuß: Ferse 2,2 cm, Fußspitze 3,4 cm über dem Boden
  return {
    ferse_l: { pos: [breit, FERSE_Y, z] },
    fuss_l: { pos: [breit + dx, SPITZE_Y, z + dz] },
    ferse_r: { pos: [-breit, FERSE_Y, z] },
    fuss_r: { pos: [-breit - dx, SPITZE_Y, z + dz] },
  }
}
/** Stange auf dem oberen Trapez (High Bar): 4 cm über und 6 cm hinter der Schultermitte, Hände im Abstand 2·griff */
export const stangeHinten = (griff = 0.26, hoch = 0.04, hinten = 0.06): Ziele => ({
  hand_l: { pos: [griff, hoch, -hinten], bezug: "schultern" },
  hand_r: { pos: [-griff, hoch, -hinten], bezug: "schultern" },
})

// ---------------------------------------------------------------- Stand (Kniebeugen: kraft_kniebeuge.ts)
export const stand = (w: Winkel = {}, breit = 12): Haltung => mit(STAND, { g: { ...B("huefte", [0, breit, -breit / 2]), ...w } })




// ---------------------------------------------------------------- Wandsitzen, Stuhl
const WANDSITZ: Haltung = H({ ...B("huefte", [90, 8, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...B("schulter", [4, 10, 0]), ...B("ellbogen", [20, 0]) }, [0, 0, 0], { pos: [0, 0.52, 0], boden: false })
export const WAND_HINTEN: Hilfsmittel = { art: "wand", an: "ruecken", richtung: "hinten" }
export const STUHL: Hilfsmittel = { art: "stuhl", unter: "gesaess", hoehe: 0.45 }
const AUFSTEHEN_VOR: Haltung = H({ ...B("huefte", [110, 8, 0]), ...B("knie", [95]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, [30, 0, 0], { pos: [0, 0.58, 0.06], boden: false })
const aufstehen = (sitz: Haltung, vor: Haltung, oben: Haltung, extra: Partial<Dehnung> = {}): Dehnung =>
  folge("seite", [[vor, 1.0, "Oberkörper nach vorn, Füße unter die Knie"], [oben, 1.4, "Aufstehen"], [oben, 0.8, "Kurz stehen"], [vor, 1.6, "Langsam hinsetzen"], [sitz, 0.8, "Sitzen"]], { hilfsmittel: [STUHL], ...extra })

export const KRAFT_BEINE: Record<string, Dehnung> = {
  // Kniebeuge mit der Stange im Rack
  // Kurzhantel und Körpergewicht
  // aus dem normalen Wandsitz (beide Füße) das rechte Bein gestreckt abheben
  wandsitzen_einbeinig: halte("seite", WANDSITZ, mit(WANDSITZ, { g: { huefte_r: [90, 8, 0], knie_r: [6] } }), { ein: 2, aus: 2, seiten: true, hilfsmittel: [WAND_HINTEN] }),
  // Knie
  sissy_squat: wdh("seite", mit(STAND, { g: { ...B("schulter", [80, 10, 0]), ...B("fuss", [-30, 0]), ...B("zehen", [40]) } }), H({ ...B("huefte", [0, 6, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...B("zehen", [50]), ...B("schulter", [100, 10, 0]) }, [-35, 0, 0]), 2.0, {
    aus: 1.6,
    texte: ["Knie nach vorn, Körper lehnt als Linie zurück", "Zurück in den Stand"],
    hilfsmittel: [{ art: "rack", an: "becken", z: 0.3 }],
  }),
  reverse_nordic: wdh("seite", H({ ...B("huefte", [0, 6, 0]), ...B("knie", [90]), ...B("fuss", [-80, 0]), ...ARME_VERSCHRAENKT }), H({ ...B("huefte", [0, 6, 0]), ...B("knie", [140]), ...B("fuss", [-80, 0]), ...ARME_VERSCHRAENKT }, [-50, 0, 0]), 2.5, {
    aus: 2.0,
    texte: ["Mit gestreckter Hüfte nach hinten lehnen", "Zurück in den Kniestand"],
  }),
  terminale_knieextension: wdh("seite", H({ huefte_l: [20, 6, 0], knie_l: [30], fuss_l: [-10, 0], huefte_r: [-8, 6, 0], knie_r: [10], fuss_r: [-6, 0], ...ARME_SEITE }), H({ huefte_l: [6, 6, 0], knie_l: [2], fuss_l: [-4, 0], huefte_r: [-8, 6, 0], knie_r: [10], fuss_r: [-6, 0], ...ARME_SEITE }), 1.0, {
    aus: 1.4,
    halten: 1,
    seiten: true,
    texte: ["Knie gegen das Band ganz strecken", "Leicht lösen"],
    hilfsmittel: [{ art: "bandanker", von: "knie_l", anker: [0.1, 0.45, 0.9] }],
  }),
  // Bulgarisch, Split Squat
  // Ausfallschritte
  // Step-ups
  // Einbeinig
  shrimp_squat: wdh("seite", mit(STAND, { g: { huefte_r: [-10, 6, 0], knie_r: [110], schulter_l: [88, 6, 0], ellbogen_l: [4, 90], schulter_r: [-30, 10, 0], ellbogen_r: [60, 0] } }), H({ huefte_l: [118, 6, 0], knie_l: [122], fuss_l: [30, 0], huefte_r: [36, 6, 0], knie_r: [140], fuss_r: [-40, 0], schulter_l: [100, 6, 0], ellbogen_l: [4, 90], schulter_r: [-50, 10, 0], ellbogen_r: [40, 0] }, [40, 0, 0]), 2.2, {
    aus: 1.6,
    seiten: true,
    texte: ["Fuß hinten halten, Knie zum Boden", "Aufstehen"],
  }),
  // Reha am Stuhl
  reha_aufstehen: aufstehen(mit(STUHLSITZ, { g: ARME_VERSCHRAENKT }), AUFSTEHEN_VOR, mit(STAND, { g: ARME_VERSCHRAENKT })),
  reha_aufstehen_arme: aufstehen(mit(STUHLSITZ, { g: { ...B("schulter", [30, 10, 0]), ...B("ellbogen", [70, 80]) } }), mit(AUFSTEHEN_VOR, { g: { ...B("schulter", [30, 10, 0]), ...B("ellbogen", [40, 80]) } }), STAND),
  reha_aufstehen_langsam: aufstehen(mit(STUHLSITZ, { g: ARME_VERSCHRAENKT }), AUFSTEHEN_VOR, mit(STAND, { g: ARME_VERSCHRAENKT })),
  reha_aufstehen_gewicht: aufstehen(mit(STUHLSITZ, { g: ARME_GOBLET }), mit(AUFSTEHEN_VOR, { g: ARME_GOBLET }), mit(STAND, { g: ARME_GOBLET }), { hilfsmittel: [STUHL, { art: "hantel", an: "haende" }] }),
  reha_knie_strecken_sitz: wdh("seite", STUHLSITZ, mit(STUHLSITZ, { g: { knie_r: [4], fuss_r: [10, 0] } }), 2.0, { aus: 2.0, halten: 2, seiten: true, texte: ["Knie langsam ganz strecken", "Langsam beugen"], hilfsmittel: [STUHL] }),
  reha_knie_strecken_band: wdh("seite", STUHLSITZ, mit(STUHLSITZ, { g: { knie_r: [4], fuss_r: [10, 0] } }), 2.0, { aus: 2.0, halten: 2, seiten: true, texte: ["Knie gegen das Band strecken", "Langsam beugen"], hilfsmittel: [STUHL, { art: "bandanker", von: "fuss_r", anker: [-0.1, 0.1, -0.2] }] }),
}

// Mini-Kniebeuge mit den Händen an der Stuhllehne
KRAFT_BEINE.reha_mini_kniebeuge = wdh(
  "seite",
  mit(STAND, { g: { ...B("schulter", [34, 8, 0]), ...B("ellbogen", [12, 90]), ...B("hand", [40, 0]) } }),
  H({ ...B("huefte", [40, 10, 0]), ...B("knie", [45]), ...B("fuss", [20, 0]), ...B("schulter", [44, 8, 0]), ...B("ellbogen", [20, 90]), ...B("hand", [40, 0]) }, [14, 0, 0]),
  2.0,
  // Hände auf der Lehne eines Stuhls, der mit der Sitzfläche von der Figur weg steht
  { aus: 1.6, texte: ["Knie ein kleines Stück beugen", "Aufrichten"], hilfsmittel: [{ art: "stuhl", unter: "haende", hoehe: 0.45, versatz: [0, 0.28] }] },
)
