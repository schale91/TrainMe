// Hüfte Teil B: Gehen und Pendeln, tiefe Hocke, Ausfallschritte, Adduktoren, Grätsche, Liegen und Reha.
// Tempo: dynamische Übungen 1 bis 3 s je Richtung, Dehnungen langsam hinein und mit der Haltezeit aus dem Plan.

import type { Dehnung, Haltung } from "../../logik/dehnbewegung"
import { AUSFALL, B, BAUCHLAGE, H, HOCKE, PLANK, RUECKENLAGE, RUECKENLAGE_AUF, STAND, VIERFUESSLER, VORBEUGE, folge, halte, mit, pnf, wdh } from "./basis"

const STAND_W = mit(STAND, { g: B("huefte", [0, 7, 0]) })
/** Auf den Zehenspitzen des linken Standbeins */
const ZEHENSTAND_L = { fuss_l: [-35, 0], zehen_l: [45] }
/** Hand an der Wand links, Arm seitlich */
const WAND_LINKS = { schulter_l: [10, 80, 0], ellbogen_l: [20, 0] }
const WAND_L = [{ art: "wand" as const, an: "hand_l" as const, richtung: "links" as const }]

// ---------- Tiefe Hocke
const HOCKE_TIEF: Haltung = mit(HOCKE, { dreh: [22, 0, 0], g: { ...B("huefte", [128, 24, -18]), ...B("knie", [148]), ...B("fuss", [38, 0]), bws: [-5, 0, 0], hals: [-10, 0, 0] } })
/** Hände vor der Brust zusammen, Ellbogen innen an den Knien */
const GEBET = { ...B("schulter", [45, 30, 0, -20]), ...B("ellbogen", [120, 80]), ...B("hand", [0, 60]) }
const GOBLET = { ...B("schulter", [35, 18, 0, -25]), ...B("ellbogen", [135, 80]) }
const STAND_BREIT = mit(STAND, { g: { ...B("huefte", [0, 16, -15]), ...B("fuss", [0, 0]) } })

// ---------- Ausfallschritte (rechts vorn)
const LUNGE_TIEF: Haltung = H({ huefte_r: [105, 6, 0], knie_r: [105], fuss_r: [20, 0], huefte_l: [-20, 4, 0], knie_l: [8], fuss_l: [-30, 0], zehen_l: [60], ...B("schulter", [100, 6, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [75, 0]), hals: [-15, 0, 0] }, [62, 0, 0])

// ---------- Adduktoren und Grätsche
const GRAETSCHSITZ: Haltung = H({ ...B("huefte", [90, 42, 0]), ...B("fuss", [5, 0]), ...B("schulter", [35, 10, 0]), ...B("ellbogen", [5, 0]) })
const GRAETSCHE_VOR: Haltung = mit(GRAETSCHSITZ, { dreh: [40, 0, 0], g: { ...B("huefte", [130, 48, 0]), lws: [8, 0, 0], bws: [5, 0, 0], ...B("schulter", [120, 12, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), hals: [-15, 0, 0] } })
const SCHMETTERLING: Haltung = H({ ...B("huefte", [80, 48, -48]), ...B("knie", [140]), ...B("fuss", [10, 30]), ...B("schulter", [45, 15, 0]), ...B("ellbogen", [35, 70]) }, [-8, 0, 0])
const SCHMETTERLING_TIEF: Haltung = mit(SCHMETTERLING, { dreh: [18, 0, 0], g: { ...B("huefte", [100, 56, -52]), lws: [8, 0, 0], ...B("schulter", [55, 15, 0]), ...B("ellbogen", [30, 70]), hals: [-5, 0, 0] } })
const FROSCH: Haltung = mit(VIERFUESSLER, { dreh: [90, 0, 0], g: { ...B("huefte", [90, 55, 0]), ...B("knie", [90]), ...B("fuss", [-10, 40]), ...B("schulter", [90, 6, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]) } })
const FROSCH_HINTEN: Haltung = mit(FROSCH, { g: { ...B("huefte", [125, 55, 0]), ...B("schulter", [125, 6, 0]) } })

// ---------- Liegen
const KNIE_BRUST_R = { huefte_r: [125, 6, 0], knie_r: [125], fuss_r: [0, 0], ...B("schulter", [55, 12, -10]), ...B("ellbogen", [95, 80]) }

export const HUEFTE_B: Record<string, Dehnung> = {
  // ---------- Gehen und Pendeln: an Ort und Stelle
  knie_umarmen_gehen: folge("seite", [
    [STAND_W, 1, "Aufrecht stehen", true],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [118, 4, 0], knie_r: [125], fuss_r: [10, 0], ...B("schulter", [42, 12, 0, -20]), ...B("ellbogen", [105, 80]) } }), 2, "Knie zur Brust, auf die Zehen"],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [118, 4, 0], knie_r: [125], fuss_r: [10, 0], ...B("schulter", [42, 12, 0, -20]), ...B("ellbogen", [105, 80]) } }), 1, "Kurz halten", true],
    [STAND_W, 1.5, "Absetzen"],
  ], { seiten: true }),
  bein_wiegen_gehen: folge("vorn", [
    [STAND_W, 1, "Aufrecht stehen", true],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [95, 20, -60], knie_r: [110], fuss_r: [10, 0], schulter_r: [35, 20, 0], ellbogen_r: [80, 70], schulter_l: [45, -5, 0, -25], ellbogen_l: [100, 70] } }), 2.5, "Bein wiegen, auf die Zehen"],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [95, 20, -60], knie_r: [110], fuss_r: [10, 0], schulter_r: [35, 20, 0], ellbogen_r: [80, 70], schulter_l: [45, -5, 0, -25], ellbogen_l: [100, 70] } }), 1, "Kurz halten", true],
    [STAND_W, 1.5, "Absetzen"],
  ], { seiten: true }),
  beinpendel_vor_zurueck: wdh("seite", mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [-25, 4, 0], knie_r: [10] } }), mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [70, 4, 0], knie_r: [5], fuss_r: [10, 0] } }), 1, { aus: 1, seiten: true, hilfsmittel: WAND_L }),
  beinpendel_seitlich: wdh("hinten", mit(STAND_W, { g: { ...B("schulter", [88, 12, 0]), ...B("ellbogen", [25, 90]), ...B("hand", [80, 0]), knie_l: [10], huefte_r: [12, -22, 0], knie_r: [5] } }), mit(STAND_W, { g: { ...B("schulter", [88, 12, 0]), ...B("ellbogen", [25, 90]), ...B("hand", [80, 0]), knie_l: [10], huefte_r: [8, 50, 0], knie_r: [5] } }), 1, { aus: 1, seiten: true, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  bein_kreisen_rueckenlage: folge("schraeg", [
    [mit(RUECKENLAGE, { g: { huefte_r: [88, 4, 0] } }), 1.5, "Bein senkrecht", true],
    [mit(RUECKENLAGE, { g: { huefte_r: [72, -22, 0] } }), 1.5, "Über die Mitte"],
    [mit(RUECKENLAGE, { g: { huefte_r: [45, 0, 0] } }), 1.5, "Nach unten"],
    [mit(RUECKENLAGE, { g: { huefte_r: [70, 32, 0] } }), 1.5, "Nach außen"],
    [mit(RUECKENLAGE, { g: { huefte_r: [88, 4, 0] } }), 1.5, "Zurück nach oben"],
  ], { seiten: true }),

  // ---------- Tiefe Hocke
  tiefe_hocke: halte("schraeg", mit(STAND_BREIT, { g: GEBET }), mit(HOCKE_TIEF, { g: GEBET }), { ein: 4 }),
  tiefe_hocke_gestuetzt: halte("seite", mit(STAND_BREIT, { g: { ...B("schulter", [80, 12, 0]), ...B("ellbogen", [5, 90]) } }), mit(HOCKE_TIEF, { dreh: [10, 0, 0], g: { ...B("schulter", [95, 12, 0]), ...B("ellbogen", [0, 90]), bws: [-8, 0, 0] } }), { ein: 4 }),
  tiefe_hocke_rotation: wdh("vorn", mit(HOCKE_TIEF, { g: { ...GEBET } }), mit(HOCKE_TIEF, { g: { schulter_l: [100, 8, 0], ellbogen_l: [0, 90], hand_l: [70, 0], schulter_r: [170, 15, 0], ellbogen_r: [0, 90], bws: [0, 0, -40], lws: [0, 0, -10], hals: [-10, 0, -20] } }), 2.5, { halten: 1, aus: 2.5, seiten: true }),
  goblet_squat_pry: folge("schraeg", [
    [mit(STAND_BREIT, { g: GOBLET }), 1.5, "Ausgangsstellung", true],
    [mit(HOCKE_TIEF, { g: GOBLET }), 3, "Tief setzen"],
    [mit(HOCKE_TIEF, { dreh: [22, 0, 8], g: { ...GOBLET, huefte_l: [132, 30, -22], huefte_r: [126, 20, -14] } }), 2, "Knie nach außen hebeln"],
    [mit(HOCKE_TIEF, { dreh: [22, 0, -8], g: { ...GOBLET, huefte_r: [132, 30, -22], huefte_l: [126, 20, -14] } }), 2.5, "Zur anderen Seite"],
    [mit(HOCKE_TIEF, { g: GOBLET }), 2, "Mitte, Brust hoch", true],
    [mit(STAND_BREIT, { g: GOBLET }), 3, "Aufstehen"],
  ], { hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  hocke_zu_vorbeuge: wdh("seite", mit(HOCKE_TIEF, { g: { ...B("schulter", [55, 20, 0]), ...B("ellbogen", [10, 90]), hals: [-15, 0, 0] } }), mit(VORBEUGE, { dreh: [80, 0, 0], g: { ...B("huefte", [90, 4, 0]), ...B("knie", [8]), lws: [25, 0, 0], bws: [20, 0, 0], ...B("schulter", [128, 8, 0]), ...B("ellbogen", [10, 90]), hals: [20, 0, 0] } }), 3, { halten: 2, aus: 3 }),

  // ---------- Ausfallschritte
  worlds_greatest_stretch: folge("schraeg", [
    [STAND_W, 1, "Aufrecht stehen", true],
    [mit(LUNGE_TIEF, { g: { schulter_r: [80, 30, 0], ellbogen_r: [60, 0] } }), 2.5, "Großer Ausfallschritt, Hände zum Boden"],
    [mit(LUNGE_TIEF, { g: { schulter_r: [70, 25, 0], ellbogen_r: [110, 0], bws: [10, 0, 0] } }), 2, "Ellbogen zum Fuß"],
    [mit(LUNGE_TIEF, { g: { schulter_r: [170, 20, 0], ellbogen_r: [0, 90], bws: [0, 0, -50], lws: [0, 0, -10], hals: [-5, 0, -30] } }), 2.5, "Aufdrehen, Arm zur Decke"],
    [LUNGE_TIEF, 2, "Hand zurück zum Boden"],
    [mit(LUNGE_TIEF, { dreh: [80, 0, 0], g: { huefte_r: [95, 6, 0], knie_r: [10], fuss_r: [35, 0], huefte_l: [10, 4, 0], knie_l: [35], ...B("schulter", [92, 6, 0]) } }), 3, "Gesäß zurück, vorderes Bein strecken"],
    [LUNGE_TIEF, 2, "Zurück in den Ausfallschritt"],
    [STAND_W, 2.5, "Aufstehen"],
  ], { seiten: true }),
  spiderman_ausfallschritt: wdh("schraeg", PLANK, mit(PLANK, { dreh: [70, 0, 0], g: { huefte_r: [118, 28, -12], knie_r: [118], fuss_r: [28, 0], zehen_r: [0], huefte_l: [-10, 4, 0], ...B("schulter", [72, 4, 0]) } }), 2.5, { halten: 1.5, aus: 2.5, seiten: true }),
  echse: halte("schraeg", VIERFUESSLER, mit(LUNGE_TIEF, { dreh: [80, 0, 0], g: { huefte_r: [125, 24, -12], knie_r: [118], fuss_r: [25, 0], huefte_l: [-12, 4, 0], knie_l: [80], fuss_l: [-70, 0], zehen_l: [0], ...B("schulter", [70, 10, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), hals: [-20, 0, 0] } }), { seiten: true }),

  // ---------- Liegen und Kniestand
  glueckliches_baby: halte("schraeg", mit(RUECKENLAGE, { g: { ...B("huefte", [120, 8, 0]), ...B("knie", [120]), ...B("schulter", [60, 12, 0]), ...B("ellbogen", [90, 80]) } }), mit(RUECKENLAGE, { g: { ...B("huefte", [135, 42, -15]), ...B("knie", [88]), ...B("fuss", [0, 0]), ...B("schulter", [110, 28, 0]), ...B("ellbogen", [20, 90]) } })),
  froschdehnung: halte("schraeg", mit(VIERFUESSLER, { g: { ...B("huefte", [90, 20, 0]), ...B("fuss", [-10, 30]) } }), FROSCH, { ein: 5 }),
  frosch_wippen: wdh("schraeg", FROSCH, FROSCH_HINTEN, 2.5, { aus: 2.5 }),
  schmetterling: halte("schraeg", SCHMETTERLING, SCHMETTERLING_TIEF),
  schmetterling_rueckenlage: halte("schraeg", RUECKENLAGE_AUF, mit(RUECKENLAGE_AUF, { g: { ...B("huefte", [55, 55, -45]), ...B("knie", [115]), ...B("fuss", [10, 30]), ...B("schulter", [0, 25, 0]) } }), { ein: 5 }),
  schmetterling_pnf: pnf("schraeg", SCHMETTERLING, mit(SCHMETTERLING, { g: { ...B("huefte", [80, 54, -50]), ...B("schulter", [45, 20, 0]) } }), mit(SCHMETTERLING, { g: { ...B("huefte", [80, 62, -54]), ...B("schulter", [45, 24, 0]) } })),
  seitlicher_ausfallschritt_dehnung: halte("vorn", mit(STAND, { g: { ...B("huefte", [0, 24, -10]), ...B("fuss", [0, 0]) } }), H({ huefte_r: [85, 30, -25], knie_r: [95], fuss_r: [25, 0], huefte_l: [20, 45, 0], knie_l: [0], ...B("schulter", [40, 10, 0]), ...B("ellbogen", [40, 70]), bws: [5, 0, 0] }, [25, 0, 0]), { seiten: true }),
  kosaken_kniebeuge: wdh("vorn", mit(STAND, { g: { ...B("huefte", [0, 26, -15]), ...B("schulter", [80, 10, 0]), ...B("ellbogen", [5, 90]) } }), H({ huefte_r: [118, 30, -28], knie_r: [140], fuss_r: [35, 0], huefte_l: [40, 50, -40], knie_l: [0], fuss_l: [40, 0], ...B("schulter", [90, 8, 0]), ...B("ellbogen", [5, 90]) }, [25, 0, 0]), 2.5, { halten: 1, aus: 2.5, seiten: true }),
  kosaken_kniebeuge_gewicht: wdh("vorn", mit(STAND, { g: { ...B("huefte", [0, 26, -15]), ...GOBLET } }), H({ huefte_r: [118, 30, -28], knie_r: [140], fuss_r: [35, 0], huefte_l: [40, 50, -40], knie_l: [0], fuss_l: [40, 0], ...GOBLET }, [25, 0, 0]), 2.5, { halten: 1, aus: 2.5, seiten: true, hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  adduktoren_rock_back: wdh("schraeg", mit(VIERFUESSLER, { g: { huefte_r: [10, 80, 0], knie_r: [0], fuss_r: [0, 0] } }), mit(VIERFUESSLER, { dreh: [70, 0, 0], g: { huefte_l: [140, 3, 0], knie_l: [150], huefte_r: [55, 78, 0], knie_r: [0], fuss_r: [0, 0], ...B("schulter", [140, 6, 0]) } }), 2.5, { aus: 2.5, seiten: true }),
  adduktoren_kniestand: halte("vorn", mit(STAND, { g: { huefte_l: [0, 4, 0], knie_l: [90], fuss_l: [-80, 0], huefte_r: [0, 55, 0], knie_r: [0], fuss_r: [0, 0], ...B("schulter", [15, 25, 0]), ...B("ellbogen", [80, 60]) } }), mit(STAND, { dreh: [0, 0, -10], g: { huefte_l: [0, -8, 0], knie_l: [90], fuss_l: [-80, 0], huefte_r: [0, 72, 0], knie_r: [0], fuss_r: [0, 0], ...B("schulter", [15, 25, 0]), ...B("ellbogen", [80, 60]), lws: [0, 10, 0] } }), { seiten: true }),
  adduktoren_band_rueckenlage: halte("schraeg", mit(RUECKENLAGE, { g: { huefte_r: [88, 4, 0], schulter_r: [70, 15, 0], ellbogen_r: [20, 0], schulter_l: [0, 20, 0], ellbogen_l: [30, 0] } }), mit(RUECKENLAGE, { g: { huefte_r: [70, 62, 0], schulter_r: [60, 50, 0], ellbogen_r: [10, 0], schulter_l: [0, 20, 0], ellbogen_l: [30, 0] } }), { seiten: true, hilfsmittel: [{ art: "band", von: "hand_r", bis: "fuss_r" }] }),
  adduktoren_rolle: wdh("schraeg", mit(BAUCHLAGE, { g: { ...B("schulter", [100, 10, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), huefte_r: [45, 60, -20], knie_r: [90], hals: [-25, 0, 0] } }), mit(BAUCHLAGE, { g: { ...B("schulter", [100, 10, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), huefte_r: [55, 75, -25], knie_r: [90], hals: [-25, 0, 0] } }), 3, { aus: 3, seiten: true, hilfsmittel: [{ art: "rolle", unter: "oberschenkel_r", laengs: true }] }),
  pancake: halte("vorn", GRAETSCHSITZ, GRAETSCHE_VOR, { ein: 5 }),
  pancake_gewicht: wdh("schraeg", mit(GRAETSCHSITZ, { g: GOBLET }), mit(GRAETSCHE_VOR, { g: { ...B("schulter", [90, 12, 0]), ...B("ellbogen", [40, 80]) } }), 3, { halten: 2.5, aus: 3, hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  graetsche_vorbeuge_stehend: halte("vorn", mit(STAND, { g: { ...B("huefte", [0, 22, 5]), ...B("schulter", [0, 30, 0]), ...B("ellbogen", [80, 60]) } }), mit(VORBEUGE, { dreh: [90, 0, 0], g: { ...B("huefte", [90, 24, 5]), ...B("knie", [0]), ...B("schulter", [92, 12, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), lws: [20, 0, 0], bws: [15, 0, 0], hals: [15, 0, 0] } }), { ein: 5 }),
  graetsche_wand: halte("schraeg", mit(RUECKENLAGE, { g: { ...B("huefte", [88, 4, 0]), ...B("fuss", [0, 0]), ...B("schulter", [0, 25, 0]) } }), mit(RUECKENLAGE, { g: { ...B("huefte", [85, 48, 0]), ...B("fuss", [0, 0]), ...B("schulter", [0, 25, 0]) } }), { ein: 6, hilfsmittel: [{ art: "wand", an: "becken", richtung: "vorn" }] }),
  graetsche_seitbeuge: halte("vorn", mit(GRAETSCHSITZ, { g: { ...B("schulter", [20, 15, 0]) } }), mit(GRAETSCHSITZ, { g: { lws: [0, -15, -10], bws: [0, -25, -15], hals: [0, -10, 0], schulter_r: [40, -10, 0], ellbogen_r: [60, 0], schulter_l: [170, 20, 0], ellbogen_l: [10, 90] } }), { seiten: true }),
  seitspagat_gleiten: wdh("vorn", mit(STAND, { dreh: [40, 0, 0], g: { ...B("huefte", [40, 18, 0]), ...B("schulter", [70, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), mit(STAND, { dreh: [40, 0, 0], g: { ...B("huefte", [40, 50, 0]), ...B("schulter", [70, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 3, { halten: 1, aus: 3, hilfsmittel: [{ art: "bank", unter: "haende", hoehe: 0.45 }] }),
  seitspagat: halte("vorn", mit(STAND, { dreh: [50, 0, 0], g: { ...B("huefte", [50, 30, 0]), ...B("schulter", [70, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), mit(STAND, { dreh: [55, 0, 0], g: { ...B("huefte", [55, 70, 0]), ...B("schulter", [55, 12, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), hals: [-15, 0, 0] } }), { ein: 6 }),
  pancake_beinheben: wdh("schraeg", mit(GRAETSCHSITZ, { dreh: [12, 0, 0], g: { ...B("huefte", [102, 42, 0]), ...B("schulter", [55, 8, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), mit(GRAETSCHSITZ, { dreh: [12, 0, 0], g: { ...B("huefte", [114, 42, 0]), ...B("schulter", [55, 8, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 1.5, { halten: 1, aus: 2 }),
  hueftbeuger_gymnastikball: halte("seite", H({ huefte_l: [80, 8, 0], knie_l: [85], fuss_l: [0, 0], huefte_r: [-10, 8, 0], knie_r: [30], fuss_r: [-30, 0], zehen_r: [45], ...B("schulter", [30, 8, 0]), ...B("ellbogen", [60, 70]) }), H({ huefte_l: [85, 8, 0], knie_l: [95], fuss_l: [10, 0], huefte_r: [-30, 8, 0], knie_r: [12], fuss_r: [-35, 0], zehen_r: [60], ...B("schulter", [30, 8, 0]), ...B("ellbogen", [60, 70]), bws: [-5, 0, 0] }), { seiten: true, hilfsmittel: [{ art: "ball", unter: "gesaess" }] }),
  aussenrotation_bauchlage: halte("hinten", mit(BAUCHLAGE, { g: { ...B("huefte", [0, 10, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]) } }), mit(BAUCHLAGE, { g: { ...B("huefte", [0, 10, -42]), ...B("knie", [90]), ...B("fuss", [0, 0]) } })),
  knie_zur_brust_liegend: folge("seite", [
    [RUECKENLAGE, 1.5, "Ausgangsstellung", true],
    [mit(RUECKENLAGE, { g: KNIE_BRUST_R }), 4, "Rechtes Knie zur Brust"],
    [mit(RUECKENLAGE, { g: KNIE_BRUST_R }), 15, "Halten, ruhig atmen", true],
    [RUECKENLAGE, 3, "Ablegen"],
    [mit(RUECKENLAGE, { g: { huefte_l: [125, 6, 0], knie_l: [125], fuss_l: [0, 0], ...B("schulter", [55, 12, -10]), ...B("ellbogen", [95, 80]) } }), 4, "Linkes Knie zur Brust"],
    [mit(RUECKENLAGE, { g: { huefte_l: [125, 6, 0], knie_l: [125], fuss_l: [0, 0], ...B("schulter", [55, 12, -10]), ...B("ellbogen", [95, 80]) } }), 15, "Halten, ruhig atmen", true],
    [mit(RUECKENLAGE, { g: { ...B("huefte", [125, 8, 0]), ...B("knie", [125]), ...B("fuss", [0, 0]), ...B("schulter", [55, 12, -10]), ...B("ellbogen", [95, 80]) } }), 4, "Beide Knie zur Brust"],
    [mit(RUECKENLAGE, { g: { ...B("huefte", [125, 8, 0]), ...B("knie", [125]), ...B("fuss", [0, 0]), ...B("schulter", [55, 12, -10]), ...B("ellbogen", [95, 80]) } }), 15, "Halten, ruhig atmen", true],
    [RUECKENLAGE, 3, "Beine ablegen"],
  ]),
  vierfuessler_rock_back: wdh("seite", mit(VIERFUESSLER, { g: B("huefte", [90, 10, 0]) }), mit(VIERFUESSLER, { dreh: [65, 0, 0], g: { ...B("huefte", [140, 10, 0]), ...B("knie", [140]), ...B("schulter", [150, 3, 0]) } }), 2.5, { aus: 2.5 }),

  // ---------- Reha
  reha_hueftbeuger_dehnen: halte("seite", mit(STAND_W, { g: { ...WAND_LINKS, huefte_r: [30, 4, 0], knie_r: [35], huefte_l: [-12, 4, 0], knie_l: [5] } }), mit(STAND_W, { g: { ...WAND_LINKS, huefte_r: [40, 4, 0], knie_r: [45], fuss_r: [10, 0], huefte_l: [-25, 4, 0], knie_l: [5], fuss_l: [-25, 0], zehen_l: [30] } }), { seiten: true, hilfsmittel: WAND_L }),
  reha_bein_pendeln: wdh("seite", mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [-15, 4, 0], knie_r: [10] } }), mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [35, 4, 0], knie_r: [10] } }), 1.2, { aus: 1.2, seiten: true, hilfsmittel: WAND_L }),
  reha_knie_zur_brust: halte("seite", RUECKENLAGE_AUF, mit(RUECKENLAGE_AUF, { g: { ...KNIE_BRUST_R, ...B("schulter", [55, 12, -10]) } }), { seiten: true }),
  reha_fersengleiten: wdh("seite", RUECKENLAGE, mit(RUECKENLAGE, { g: { huefte_r: [60, 4, 0], knie_r: [100], fuss_r: [10, 0] } }), 3, { aus: 3, seiten: true }),
}
