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
/** Wandsitz: Füße hüftbreit flach am Boden, Fersen unter den Knien */
const WANDSITZ_FUESSE = fuesse(0.13, 0, 0.33)
export const WAND_HINTEN: Hilfsmittel = { art: "wand", an: "ruecken", richtung: "hinten" }
export const STUHL: Hilfsmittel = { art: "stuhl", unter: "gesaess", hoehe: 0.45 }
/** Aufstehen vom Stuhl: Füße hüftbreit, etwas hinter den Knien, bleiben in allen Phasen stehen */
const AUFSTEH_FUESSE: Ziele = fuesse(0.13, 8, 0.25)
/** Hände liegen auf der Mitte der Oberschenkel */
const HAENDE_OBERSCHENKEL: Ziele = { hand_l: { pos: [0.13, 0.64, 0.3] }, hand_r: { pos: [-0.13, 0.64, 0.3] } }
const AUFSTEHEN_VOR: Haltung = H({ ...B("huefte", [110, 8, 0]), ...B("knie", [95]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, [30, 0, 0], { pos: [0, 0.58, 0.1], boden: false, ziele: AUFSTEH_FUESSE })
/** sitzen bzw. aufrecht stehen mit festen Füßen (stehend über den Füßen) */
// der Stuhl steht fest hinter den Fersen (Vorderkante 4 cm hinter den Fersen), man sitzt auf der vorderen Hälfte
const STUHL_AUF: Hilfsmittel = { art: "stuhl", unter: "ferse_l", hoehe: 0.45, versatz: [-0.13, -0.25] }
const festSitz = (h: Haltung): Haltung => mit(h, { pos: [0, 0.565, 0.05], boden: false, ziele: { ...h.ziele, ...AUFSTEH_FUESSE } })
const festStand = (h: Haltung): Haltung => mit(h, { pos: [0, 0.93, 0.29], boden: false, beckenFrei: true, ziele: { ...h.ziele, ...AUFSTEH_FUESSE } })
/** Sissy Squat: auf den Fußballen (fest), rechte Hand hält sich seitlich an der Wand; unten schieben sich die Knie weit vor, Hüfte bleibt gestreckt */
const SISSY_FUESSE: Ziele = { fuss_l: { pos: [0.12, 0.07, 0.03] }, ferse_l: { pos: [0.12, 0.12, -0.08] }, fuss_r: { pos: [-0.12, 0.07, 0.03] }, ferse_r: { pos: [-0.12, 0.12, -0.08] } }
const sissy = (unten: boolean): Haltung =>
  H(
    { ...B("huefte", [0, 6, 0]), ...B("knie", [unten ? 100 : 2]), ...B("fuss", [unten ? 10 : -30, 0]), schulter_l: [unten ? 100 : 80, 10, 0], ellbogen_l: [10, 0], schulter_r: [10, 60, 0], ellbogen_r: [40, 90] },
    [unten ? -35 : 0, 0, 0],
    { pos: [0, unten ? 0.7 : 1.02, unten ? -0.05 : 0], boden: false, beckenFrei: true, ziele: { ...SISSY_FUESSE, hand_r: { pos: [-0.42, 1.0, 0.1] } } },
  )
/** Reverse Nordic: Knie und Fußrücken bleiben auf der Matte, der Körper lehnt als Linie zurück */
const KNIESTAND_FEST: Ziele = { knie_l: { pos: [0.12, 0.05, 0] }, knie_r: { pos: [-0.12, 0.05, 0] }, fuss_l: { pos: [0.11, 0.1, -0.55] }, fuss_r: { pos: [-0.11, 0.1, -0.55] } }
/** Terminale Knieextension: Band-Bein (links) leicht vorn, beide Fersen bleiben am Boden */
const TKE_FUESSE: Ziele = { ferse_l: { pos: [0.12, FERSE_Y, 0.02] }, fuss_l: { pos: [0.12, SPITZE_Y, 0.14] }, ferse_r: { pos: [-0.12, FERSE_Y, -0.2] }, fuss_r: { pos: [-0.12, SPITZE_Y, -0.08] } }
/** Shrimp Squat: links Standbein flach, rechte Hand hält den rechten Fuß hinter dem Körper, linker Arm als Gegengewicht vorn */
const SHRIMP_STAND: Ziele = { ferse_l: { pos: [0.08, FERSE_Y, -0.05] }, fuss_l: { pos: [0.1, SPITZE_Y, 0.07] } }
const shrimp = (unten: boolean): Haltung =>
  unten
    ? H({ huefte_l: [100, 4, 0], knie_l: [110], fuss_l: [30, 0], huefte_r: [0, 4, 0], knie_r: [150], fuss_r: [-20, 0], schulter_l: [110, 6, 0], ellbogen_l: [4, 90], schulter_r: [-50, 10, 0], ellbogen_r: [20, 0] }, [22, 0, 0], {
        pos: [0.02, 0.5, -0.15],
        boden: false,
        beckenFrei: true,
        ziele: { ...SHRIMP_STAND, knie_r: { pos: [-0.08, 0.12, -0.12] }, fuss_r: { pos: [-0.1, 0.46, -0.36] }, hand_r: { pos: [-0.15, 0.5, -0.3] } },
      })
    : H({ ...B("huefte", [0, 4, 0]), knie_l: [4], huefte_r: [-15, 4, 0], knie_r: [130], fuss_r: [-20, 0], schulter_l: [88, 6, 0], ellbogen_l: [4, 90], schulter_r: [-40, 10, 0], ellbogen_r: [20, 0] }, [0, 0, 0], {
        pos: [0.03, 0.935, 0],
        boden: false,
        beckenFrei: true,
        ziele: { ...SHRIMP_STAND, fuss_r: { pos: [-0.1, 0.95, -0.36] }, hand_r: { pos: [-0.15, 0.98, -0.31] } },
      })
const aufstehen = (sitz: Haltung, vor: Haltung, oben: Haltung, extra: Partial<Dehnung> = {}): Dehnung =>
  folge("seite", [[mit(vor, { ziele: { ...vor.ziele, ...AUFSTEH_FUESSE } }), 1.0, "Oberkörper nach vorn, Nase über die Zehen"], [festStand(oben), 1.4, "Aufstehen"], [festStand(oben), 0.8, "Kurz stehen"], [mit(vor, { ziele: { ...vor.ziele, ...AUFSTEH_FUESSE } }), 1.6, "Langsam hinsetzen"], [festSitz(sitz), 0.8, "Sitzen"]], { hilfsmittel: [STUHL_AUF], ...extra })

export const KRAFT_BEINE: Record<string, Dehnung> = {
  // Kniebeuge mit der Stange im Rack
  // Kurzhantel und Körpergewicht
  // aus dem normalen Wandsitz (beide Füße) das rechte Bein gestreckt abheben
  wandsitzen_einbeinig: halte("seite", mit(WANDSITZ, { ziele: WANDSITZ_FUESSE }), mit(WANDSITZ, { g: { huefte_r: [90, 8, 0], knie_r: [6] }, ziele: { ferse_l: WANDSITZ_FUESSE.ferse_l, fuss_l: WANDSITZ_FUESSE.fuss_l } }), { ein: 2, aus: 2, seiten: true, hilfsmittel: [WAND_HINTEN] }),
  // Knie
  sissy_squat: wdh("seite", sissy(false), sissy(true), 2.0, {
    aus: 1.6,
    texte: ["Knie nach vorn, Körper lehnt als Linie zurück", "Zurück in den Stand"],
    hilfsmittel: [{ art: "wand", an: "hand_r", richtung: "rechts" }],
  }),
  reverse_nordic: wdh("seite", H({ ...B("huefte", [0, 6, 0]), ...B("knie", [90]), ...B("fuss", [-80, 0]), ...ARME_VERSCHRAENKT }, [0, 0, 0], { pos: [0, 0.44, 0], boden: false, beckenFrei: true, ziele: KNIESTAND_FEST }), H({ ...B("huefte", [0, 6, 0]), ...B("knie", [130]), ...B("fuss", [-80, 0]), ...ARME_VERSCHRAENKT }, [-40, 0, 0], { pos: [0, 0.33, -0.24], boden: false, beckenFrei: true, ziele: KNIESTAND_FEST }), 2.5, {
    aus: 2.0,
    texte: ["Mit gestreckter Hüfte nach hinten lehnen", "Zurück in den Kniestand"],
  }),
  terminale_knieextension: wdh("seite", H({ huefte_l: [20, 4, 0], knie_l: [30], fuss_l: [-10, 0], huefte_r: [-8, 4, 0], knie_r: [10], fuss_r: [-6, 0], ...ARME_SEITE }, [0, 0, 0], { pos: [0, 0.9, -0.03], boden: false, beckenFrei: true, ziele: { ...TKE_FUESSE, knie_l: { pos: [0.11, 0.53, 0.18] } } }), H({ huefte_l: [6, 4, 0], knie_l: [2], fuss_l: [-4, 0], huefte_r: [-8, 4, 0], knie_r: [10], fuss_r: [-6, 0], ...ARME_SEITE }, [0, 0, 0], { pos: [0, 0.95, -0.05], boden: false, beckenFrei: true, ziele: TKE_FUESSE }), 1.0, {
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
  shrimp_squat: wdh("seite", shrimp(false), shrimp(true), 2.2, {
    aus: 1.6,
    seiten: true,
    texte: ["Fuß hinten halten, Knie zum Boden", "Aufstehen"],
    hilfsmittel: [{ art: "kissen", unter: "knie_r" }],
  }),

  // Reha am Stuhl
  reha_aufstehen: aufstehen(mit(STUHLSITZ, { g: ARME_VERSCHRAENKT }), AUFSTEHEN_VOR, mit(STAND, { g: ARME_VERSCHRAENKT })),
  reha_aufstehen_arme: aufstehen(mit(STUHLSITZ, { g: { ...B("schulter", [30, 10, 0]), ...B("ellbogen", [70, 80]) }, ziele: HAENDE_OBERSCHENKEL }), mit(AUFSTEHEN_VOR, { g: { ...B("schulter", [30, 10, 0]), ...B("ellbogen", [40, 80]) }, ziele: { ...AUFSTEH_FUESSE, ...HAENDE_OBERSCHENKEL } }), STAND),
  reha_aufstehen_langsam: aufstehen(mit(STUHLSITZ, { g: ARME_VERSCHRAENKT }), AUFSTEHEN_VOR, mit(STAND, { g: ARME_VERSCHRAENKT })),
  reha_aufstehen_gewicht: aufstehen(mit(STUHLSITZ, { g: ARME_GOBLET }), mit(AUFSTEHEN_VOR, { g: ARME_GOBLET }), mit(STAND, { g: ARME_GOBLET }), { hilfsmittel: [STUHL_AUF, { art: "hantel", an: "haende" }] }),
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
