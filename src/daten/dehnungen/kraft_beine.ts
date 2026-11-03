// Beine mit der Dehnfigur: Kniebeugen (Stange im Rack, Kurzhantel, Körpergewicht), Split Squats, Ausfallschritte,
// Step-ups, einbeinige Kniebeugen und Kreuzheben, Wandsitzen, Reha am Stuhl.
//
// Winkel im Raum: Oberschenkel = Hüftbeugung - Kippung des Beckens; Unterschenkel = Oberschenkel - Kniebeugung;
// Fuß flach, wenn Anziehen = -Unterschenkel.

import type { Dehnung, Haltung, Hilfsmittel, Winkel, Ziel, ZielPunkt } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, B, H, STAND, STUHLSITZ, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, OBERGRIFF } from "./kraftbasis"

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

// ---------------------------------------------------------------- Split Squat, Ausfallschritt (links vorn)
const splitOben = (w: Winkel = {}): Haltung => H({ huefte_l: [28, 6, 0], knie_l: [10], fuss_l: [-18, 0], huefte_r: [-24, 6, 0], knie_r: [6], fuss_r: [-30, 0], zehen_r: [45], ...w })
// Hinten: Oberschenkel fast senkrecht, Knie knapp über dem Boden, Unterschenkel liegt zu den Zehen nach hinten
const splitUnten = (w: Winkel = {}): Haltung => H({ huefte_l: [88, 6, 0], knie_l: [92], fuss_l: [4, 0], huefte_r: [-12, 6, 0], knie_r: [76], fuss_r: [-40, 0], zehen_r: [60], ...w }, [4, 0, 0])
const split = (arme: Winkel, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), splitOben(arme), splitUnten(arme), 1.8, { aus: 1.4, seiten: true, texte: ["Hinteres Knie Richtung Boden", "Hochdrücken"], hilfsmittel, ...extra })
/** Ausfallschritt: aus dem Stand in den Schritt und zurück */
const ausfall = (arme: Winkel, hilfsmittel: Hilfsmittel[], text = "Schritt nach vorn, tief"): Dehnung =>
  folge(ansicht(hilfsmittel), [[stand(arme, 6), 0.6, "Aufrecht stehen"], [splitUnten(arme), 1.4, text], [stand(arme, 6), 1.2, "Zurück in den Stand"]], { seiten: true, hilfsmittel })
/** Bulgarisch: hinterer Fuß auf der Bank */
// Der hintere Fuß liegt mit dem Spann auf der Box (45 cm): oben fast waagerechter, unten steil ansteigender Unterschenkel
const bulgOben = (w: Winkel = {}): Haltung => H({ huefte_l: [26, 6, 0], knie_l: [8], fuss_l: [-16, 0], huefte_r: [-18, 6, 0], knie_r: [62], fuss_r: [-75, 0], ...w })
const bulgUnten = (w: Winkel = {}): Haltung => H({ huefte_l: [92, 6, 0], knie_l: [96], fuss_l: [6, 0], huefte_r: [-8, 6, 0], knie_r: [108], fuss_r: [-80, 0], ...w }, [10, 0, 0])
const BANK_HINTEN: Hilfsmittel = { art: "box", unter: "fuss_r", hoehe: 0.45, versatz: [0, -0.1] }
const bulgarisch = (arme: Winkel, hilfsmittel: Hilfsmittel[]): Dehnung =>
  wdh(ansicht(hilfsmittel), bulgOben(arme), bulgUnten(arme), 1.8, { aus: 1.4, seiten: true, texte: ["Senkrecht nach unten sinken", "Über das vordere Bein hochdrücken"], hilfsmittel: [...hilfsmittel, BANK_HINTEN] })
/** Seitlicher Ausfallschritt nach links: linkes Knie beugt, rechtes Bein gestreckt */
const seitlich = (arme: Winkel): Haltung => H({ huefte_l: [70, 40, -10], knie_l: [100], fuss_l: [25, 0], huefte_r: [20, 38, 0], knie_r: [4], fuss_r: [0, 0], ...arme }, [30, 0, 0])

// ---------------------------------------------------------------- Step-up auf die Box (50 cm)
const BOX_VORN: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: 0.5 }
const stepUnten = (w: Winkel = {}): Haltung => H({ huefte_l: [92, 6, 0], knie_l: [96], fuss_l: [4, 0], huefte_r: [-4, 6, 0], knie_r: [4], fuss_r: [-8, 0], ...w }, [8, 0, 0], { pos: [0, 0.94, -0.05], boden: false })
const stepOben = (w: Winkel = {}): Haltung => H({ huefte_l: [2, 6, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [2, 6, 0], knie_r: [6], fuss_r: [-6, 0], ...w }, [0, 0, 0], { pos: [0, 1.44, 0.34], boden: false })
const stepUp = (arme: Winkel, hilfsmittel: Hilfsmittel[], oben: Winkel = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), stepUnten(arme), stepOben({ ...arme, ...oben }), 1.4, { aus: 1.8, seiten: true, texte: ["Über das vordere Bein auf die Box", "Kontrolliert zurück"], hilfsmittel: [...hilfsmittel, BOX_VORN] })

// ---------------------------------------------------------------- Einbeinig
/** Pistol: links tief, rechtes Bein gestreckt vorn */
const PISTOL_TIEF: Haltung = H({ huefte_l: [135, 6, 0], knie_l: [145], fuss_l: [38, 0], huefte_r: [128, 6, 0], knie_r: [6], fuss_r: [0, 0], ...ARME_VOR }, [40, 0, 0])
const EINBEIN_STAND: Haltung = mit(STAND, { g: { huefte_r: [40, 6, 0], knie_r: [10], ...ARME_VOR } })
/** Einbeiniges Kreuzheben: Hüfte beugt, das freie Bein geht gestreckt nach hinten */
const kreuzhebenEinbein = (hilfsmittel: Hilfsmittel[], arme: Winkel): Dehnung =>
  wdh("seite", mit(STAND, { g: { ...arme, huefte_r: [-4, 6, 0], knie_r: [10] } }), H({ huefte_l: [80, 6, 0], knie_l: [16], fuss_l: [10, 0], huefte_r: [-2, 6, 0], knie_r: [4], fuss_r: [-10, 0], ...arme, ...B("schulter", [78, 6, 0]), hals: [-20, 0, 0] }, [78, 0, 0]), 2.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Hüfte nach hinten, Bein lang nach hinten", "Aufrichten"],
    hilfsmittel,
  })

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
  wandsitzen_einbeinig: halte("seite", mit(STAND, { g: B("schulter", [4, 10, 0]) }), mit(WANDSITZ, { g: { huefte_r: [90, 8, 0], knie_r: [6] } }), { ein: 2, aus: 2, seiten: true, hilfsmittel: [WAND_HINTEN] }),
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
  bulgarisch_kh: bulgarisch(ARME_SEITE, KH),
  bulgarisch_kg: bulgarisch(ARME_VOR, []),
  bulgarisch_lh: bulgarisch(ARME_RUECKEN, STANGE_RUECKEN),
  bulgarisch_multipresse: bulgarisch(ARME_RUECKEN, STANGE_RUECKEN),
  split_squat_kh: split(ARME_SEITE, KH),
  split_squat_kg: split({ ...B("schulter", [10, 30, 0]), ...B("ellbogen", [90, 0]) }, []),
  split_squat_lh: split(ARME_RUECKEN, [...STANGE_RUECKEN, RACK]),
  split_squat_band: split(ARME_FRONT, [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_l", bis: "hand_r" }]),
  split_squat_ffe: split(ARME_SEITE, [...KH, { art: "kissen", unter: "fuss_l" }]),
  split_squat_iso: halte("seite", splitOben(ARME_SEITE), splitUnten(ARME_SEITE), { ein: 2, aus: 2, seiten: true, hilfsmittel: KH }),
  kickstand_kniebeuge: wdh("seite", H({ huefte_l: [8, 8, 0], knie_l: [4], fuss_l: [0, 0], huefte_r: [-6, 8, 0], knie_r: [14], fuss_r: [-35, 0], zehen_r: [45], ...ARME_GOBLET }), H({ huefte_l: [118, 8, 0], knie_l: [115], fuss_l: [28, 0], huefte_r: [96, 8, 0], knie_r: [100], fuss_r: [-20, 0], zehen_r: [50], ...ARME_GOBLET }, [32, 0, 0]), 2.0, {
    aus: 1.5,
    seiten: true,
    texte: ["Hüfte nach hinten, das vordere Bein trägt", "Aufstehen"],
    hilfsmittel: [{ art: "hantel", an: "haende" }],
  }),
  // Ausfallschritte
  ausfallschritt_kh: ausfall(ARME_SEITE, KH, "Schritt nach hinten, tief"),
  ausfallschritt_rueck_lh: ausfall(ARME_RUECKEN, [...STANGE_RUECKEN, RACK], "Schritt nach hinten, tief"),
  ausfallschritt_multipresse: ausfall(ARME_RUECKEN, [...STANGE_RUECKEN, RACK], "Schritt nach hinten, tief"),
  ausfallschritt_rueck_kg: ausfall({ ...B("schulter", [10, 30, 0]), ...B("ellbogen", [90, 0]) }, [], "Schritt nach hinten, tief"),
  ausfallschritt_goblet: ausfall(ARME_GOBLET, [{ art: "hantel", an: "haende" }], "Schritt nach hinten, tief"),
  ausfallschritt_defizit: ausfall(ARME_SEITE, KH, "Von der Erhöhung nach hinten, tief"),
  ausfallschritt_gleitscheibe: ausfall({ ...B("schulter", [10, 30, 0]), ...B("ellbogen", [90, 0]) }, [], "Hinteren Fuß nach hinten gleiten lassen"),
  ausfallschritt_vor_kh: ausfall(ARME_SEITE, KH),
  ausfallschritt_vor_kg: ausfall({ ...B("schulter", [10, 30, 0]), ...B("ellbogen", [90, 0]) }, []),
  ausfallschritt_gehend_kh: ausfall(ARME_SEITE, KH, "Großer Schritt nach vorn, tief, dann weitergehen"),
  ausfallschritt_gehend_lh: ausfall(ARME_RUECKEN, STANGE_RUECKEN, "Großer Schritt nach vorn, tief, dann weitergehen"),
  ausfallschritt_gehend_kg: ausfall({ ...B("schulter", [10, 30, 0]), ...B("ellbogen", [90, 0]) }, [], "Großer Schritt nach vorn, tief, dann weitergehen"),
  ausfallschritt_seit_kh: folge("vorn", [[stand(ARME_GOBLET, 8), 0.6, "Aufrecht stehen"], [seitlich(ARME_GOBLET), 1.4, "Großer Schritt zur Seite, Hüfte nach hinten"], [stand(ARME_GOBLET, 8), 1.2, "Zurück"]], { seiten: true, hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  ausfallschritt_seit_kg: folge("vorn", [[stand(ARME_VOR, 8), 0.6, "Aufrecht stehen"], [seitlich(ARME_VOR), 1.4, "Großer Schritt zur Seite, Hüfte nach hinten"], [stand(ARME_VOR, 8), 1.2, "Zurück"]], { seiten: true }),
  ausfallschritt_seit_gleitscheibe: folge("vorn", [[stand(ARME_VOR, 8), 0.6, "Aufrecht stehen"], [seitlich(ARME_VOR), 1.6, "Bein zur Seite gleiten lassen"], [stand(ARME_VOR, 8), 1.4, "Zurückziehen"]], { seiten: true }),
  curtsy_lunge: folge(
    "vorn",
    [
      [stand(ARME_GOBLET, 6), 0.6, "Aufrecht stehen"],
      [H({ huefte_l: [80, -6, 0], knie_l: [92], fuss_l: [8, 0], huefte_r: [-10, -28, 0], knie_r: [92], fuss_r: [-60, 0], zehen_r: [60], ...ARME_GOBLET }, [6, 0, 0]), 1.4, "Bein diagonal hinter das Standbein, tief"],
      [stand(ARME_GOBLET, 6), 1.2, "Zurück"],
    ],
    { seiten: true, hilfsmittel: [{ art: "hantel", an: "haende" }] },
  ),
  // Step-ups
  step_up: stepUp(ARME_SEITE, KH),
  step_up_kg: stepUp(ARME_SEITE, []),
  step_up_lh: stepUp(ARME_RUECKEN, STANGE_RUECKEN),
  step_up_kniehub: stepUp(ARME_SEITE, [], { huefte_r: [90, 6, 0], knie_r: [90], fuss_r: [10, 0] }),
  step_down: wdh("seite", H({ huefte_l: [4, 6, 0], knie_l: [4], fuss_l: [0, 0], huefte_r: [20, 6, 0], knie_r: [10], fuss_r: [-30, 0], ...ARME_VOR }, [0, 0, 0], { pos: [0, 1.38, 0], boden: false }), H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [10, 0], huefte_r: [30, 6, 0], knie_r: [8], fuss_r: [-10, 0], ...ARME_VOR }, [16, 0, 0], { pos: [0, 1.12, 0.06], boden: false }), 2.4, {
    aus: 1.6,
    seiten: true,
    texte: ["Ferse langsam Richtung Boden senken", "Über das Standbein hochdrücken"],
    hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.45 }],
  }),
  // Einbeinig
  pistol: wdh("seite", EINBEIN_STAND, PISTOL_TIEF, 2.4, { aus: 1.8, seiten: true, texte: ["Auf einem Bein tief in die Hocke", "Aufstehen"] }),
  pistol_gegengewicht: wdh("seite", mit(EINBEIN_STAND, { g: { ...B("schulter", [88, 4, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST } }), mit(PISTOL_TIEF, { g: { ...B("schulter", [88, 4, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST } }), 2.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Mit Gewicht vorn tief in die Hocke", "Aufstehen"],
    hilfsmittel: [{ art: "hantel", an: "haende" }],
  }),
  einbein_box_kniebeuge: wdh("seite", EINBEIN_STAND, mit(PISTOL_TIEF, { dreh: [36, 0, 0], g: { huefte_l: [118, 6, 0], knie_l: [105], fuss_l: [25, 0], huefte_r: [110, 6, 0] } }), 2.2, {
    aus: 1.6,
    seiten: true,
    halten: 0.5,
    texte: ["Auf einem Bein auf die Box setzen", "Aufstehen"],
    hilfsmittel: [{ art: "box", unter: "gesaess", hoehe: 0.45 }],
  }),
  skater_squat: wdh("seite", mit(STAND, { g: { huefte_r: [-10, 6, 0], knie_r: [80], ...ARME_VOR } }), H({ huefte_l: [118, 6, 0], knie_l: [118], fuss_l: [30, 0], huefte_r: [30, 6, 0], knie_r: [110], fuss_r: [-40, 0], ...ARME_VOR }, [42, 0, 0]), 2.2, {
    aus: 1.6,
    seiten: true,
    texte: ["Hinteres Knie Richtung Boden", "Aufstehen"],
  }),
  shrimp_squat: wdh("seite", mit(STAND, { g: { huefte_r: [-10, 6, 0], knie_r: [110], schulter_l: [88, 6, 0], ellbogen_l: [4, 90], schulter_r: [-30, 10, 0], ellbogen_r: [60, 0] } }), H({ huefte_l: [118, 6, 0], knie_l: [122], fuss_l: [30, 0], huefte_r: [36, 6, 0], knie_r: [140], fuss_r: [-40, 0], schulter_l: [100, 6, 0], ellbogen_l: [4, 90], schulter_r: [-50, 10, 0], ellbogen_r: [40, 0] }, [40, 0, 0]), 2.2, {
    aus: 1.6,
    seiten: true,
    texte: ["Fuß hinten halten, Knie zum Boden", "Aufstehen"],
  }),
  einbein_kreuzheben: kreuzhebenEinbein([{ art: "hantel", an: "hand_r" }], { schulter_l: [10, 10, 0], ellbogen_l: [20, 0], schulter_r: [4, 8, 0], ellbogen_r: [6, HAMMER], ...FAUST }),
  einbein_kreuzheben_kg: kreuzhebenEinbein([], { ...B("schulter", [4, 30, 0]), ...B("ellbogen", [10, 0]) }),
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
