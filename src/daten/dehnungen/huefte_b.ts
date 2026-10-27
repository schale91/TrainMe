// Hüfte Teil B: Gehen und Pendeln, tiefe Hocke, Ausfallschritte, Adduktoren, Grätsche, Liegen und Reha.
// Tempo: dynamische Übungen 1 bis 3 s je Richtung, Dehnungen langsam hinein und mit der Haltezeit aus dem Plan.
// Bei gebeugter Hüfte öffnet Abspreizen das Bein kaum; gespreizte Knie (Frosch, Schmetterling, Grätsche) entstehen aus
// weniger Beugung, viel Abspreizen und Drehung im Hüftgelenk.

import type { Dehnung, Haltung, Winkel } from "../../logik/dehnbewegung"
import { B, BAUCHLAGE, H, PLANK, RUECKENLAGE, RUECKENLAGE_AUF, STAND, VIERFUESSLER, folge, halte, mit, pnf, wdh } from "./basis"

const STAND_W = mit(STAND, { g: B("huefte", [0, 7, 0]) })
/** Auf den Zehenspitzen des linken Standbeins */
const ZEHENSTAND_L = { fuss_l: [-35, 0], zehen_l: [45] }
/** Hand an der Wand links, Arm seitlich */
const WAND_LINKS = { schulter_l: [10, 80, 0], ellbogen_l: [20, 0] }
const WAND_L = [{ art: "wand" as const, an: "hand_l" as const, richtung: "links" as const }]

// ---------- Tiefe Hocke
const HOCKE_TIEF: Haltung = H({ ...B("huefte", [128, -22, 38]), ...B("knie", [148]), ...B("fuss", [38, 0]), bws: [-5, 0, 0], hals: [-10, 0, 0] }, [22, 0, 0])
/** Hände vor der Brust zusammen, Ellbogen innen an den Knien */
const GEBET = { ...B("schulter", [52, 4, -20]), ...B("ellbogen", [100, 90]) }
/** Gewicht senkrecht vor der Brust */
const GOBLET = { ...B("schulter", [52, 4, -20]), ...B("ellbogen", [100, 90]) }
const GOBLET_STAND = { ...B("schulter", [16, 4, -20]), ...B("ellbogen", [120, 90]) }
/** Tiefe Hocke, Oberkörper vorgeneigt, Hände an den Zehen (Ellbogen innen an den Knien) */
const HOCKE_ZEHEN: Haltung = H({ ...B("huefte", [148, -22, 38]), ...B("knie", [148]), ...B("fuss", [55, 0]), bws: [15, 0, 0], hals: [-10, 0, 0], ...B("schulter", [25, 8, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [30, 0]) }, [60, 0, 0])
/** Vorbeuge mit gehaltenen Zehen, Knie so weit gestreckt, wie es die Beinrückseite zulässt */
const VORBEUGE_ZEHEN: Haltung = H({ ...B("huefte", [115, 4, 0]), ...B("knie", [40]), ...B("fuss", [40, 0]), lws: [35, 0, 0], bws: [35, 0, 0], hals: [25, 0, 0], ...B("schulter", [140, 6, 0]), ...B("ellbogen", [5, 90]), ...B("hand", [30, 0]) }, [100, 0, 0])
const STAND_BREIT = mit(STAND, { g: { ...B("huefte", [0, 16, -15]), ...B("fuss", [0, 0]) } })

// ---------- Ausfallschritte (rechts vorn), Oberkörper 45 Grad vorgeneigt
/** Hinteres Bein lang auf den Zehen, vorderer Fuß flach, beide Hände innen neben dem vorderen Fuß am Boden */
const LUNGE_BEINE = { huefte_r: [140, -15, 0], knie_r: [75], fuss_r: [10, 0], huefte_l: [0, 4, 0], knie_l: [15], fuss_l: [-30, 0], zehen_l: [60] }
const LUNGE_TIEF: Haltung = H({ ...LUNGE_BEINE, ...B("schulter", [95, -5, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [75, 0]), lws: [30, 0, 0], bws: [30, 0, 0], hals: [-30, 0, 0] }, [55, 0, 0])
/** Rechter Ellbogen innen am rechten Fuß Richtung Boden, linke Hand bleibt am Boden */
const LUNGE_ELLBOGEN: Haltung = mit(LUNGE_TIEF, { g: { schulter_r: [140, 0, 0], ellbogen_r: [90, 90], bws: [45, 0, 0] } })
/** Aufgedreht: linke Hand innen am Fuß am Boden, rechter Arm senkrecht zur Decke */
const LUNGE_AUF: Haltung = H({ ...LUNGE_BEINE, schulter_l: [35, 75, 0], ellbogen_l: [0, 90], hand_l: [75, 0], schulter_r: [-70, 130, 0], ellbogen_r: [0, 90], lws: [20, 0, -10], bws: [30, 0, -40], hals: [-10, 0, -30] }, [55, 0, 0])
/** Gesäß zurück, vorderes Bein gestreckt mit angezogener Fußspitze, Hände am Boden */
const LUNGE_HINTEN: Haltung = H({ huefte_r: [120, -10, 0], knie_r: [5], fuss_r: [30, 0], huefte_l: [38, 4, 0], knie_l: [30], fuss_l: [-30, 0], zehen_l: [60], ...B("schulter", [100, -5, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [75, 0]), lws: [35, 0, 0], bws: [35, 0, 0], hals: [-10, 0, 0] }, [75, 0, 0])
/** Auf dem Weg vom Liegestütz nach vorn bleibt der Fuß in der Luft, die Hände bleiben am Boden */
const SPIDER_KNIE: Haltung = mit(PLANK, { g: { huefte_r: [30, -10, 0], knie_r: [110], fuss_r: [0, 0], zehen_r: [0] } })
const SPIDER_SCHWUNG: Haltung = mit(PLANK, { g: { huefte_r: [160, -30, 0], knie_r: [150], fuss_r: [30, 0], zehen_r: [0] } })
/** Spiderman: rechter Fuß weit außen neben der Hand, Becken tief, hinteres Bein lang, Hände unter den Schultern */
const SPIDER: Haltung = H({ huefte_r: [180, -40, 10], knie_r: [85], fuss_r: [15, 0], zehen_r: [0], huefte_l: [38, 4, 0], fuss_l: [-22, 0], zehen_l: [60], ...B("schulter", [100, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), hals: [-20, 0, 0] }, [100, 0, 0])
/** Vierfüßler, rechter Fuß außen neben die rechte Hand gesetzt (Weg in die Echse) */
const ECHSE_SCHRITT: Haltung = H({ huefte_r: [168, -30, 30], knie_r: [130], fuss_r: [40, 0], huefte_l: [83, 3, 0], knie_l: [85], fuss_l: [-45, 0], ...B("schulter", [88, 3, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [85, 0]), hals: [-15, 0, 0] }, [88, 0, 0])
/** Echse: vorderer Fuß außen neben dem Unterarm, Unterarme am Boden, hinteres Knie abgelegt, Becken tief */
const ECHSE: Haltung = H({ huefte_r: [178, -30, 30], knie_r: [130], fuss_r: [30, 0], huefte_l: [15, 0, 0], knie_l: [45], fuss_l: [-80, 0], ...B("schulter", [105, 4, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), lws: [25, 0, 0], bws: [20, 0, 0], hals: [-30, 0, 0] }, [60, 0, 0])

// ---------- Adduktoren und Grätsche
const GRAETSCHSITZ: Haltung = H({ ...B("huefte", [44, 80, 0]), ...B("fuss", [5, 0]), ...B("schulter", [28, 8, 0]), ...B("ellbogen", [5, 90]) }, [-5, 0, 0])
/** Pancake: Gesäß und Beine bleiben am Boden, der Oberkörper neigt sich weit nach vorn, Hände vorn am Boden */
const GRAETSCHE_VOR: Haltung = H({ ...B("huefte", [44, 80, 0]), ...B("fuss", [5, 0]), lws: [35, 0, 0], bws: [30, 0, 0], ...B("schulter", [105, -10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), hals: [0, 0, 0] }, [-5, 0, 0])
/** Hände an den Knöcheln, Rücken dafür leicht gerundet */
const SCHMETTERLING: Haltung = H({ ...B("huefte", [40, 84, -170]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...B("schulter", [80, -8, 0]), ...B("ellbogen", [0, 90]), lws: [12, 0, 0], bws: [18, 0, 0] })
/** Hände auf den Innenseiten der Knie (Anspannen und Entspannen) */
const PNF_HAENDE = { ...B("schulter", [35, 50, 0]), ...B("ellbogen", [10, 90]), lws: [10, 0, 0], bws: [5, 0, 0] }
const SCHMETTERLING_TIEF: Haltung = H({ ...B("huefte", [40, 96, -190]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...B("schulter", [64, 12, -20]), ...B("ellbogen", [25, 90]), lws: [10, 0, 0], bws: [10, 0, 0], hals: [5, 0, 0] }, [15, 0, 0])
/** Frosch auf den Unterarmen: Knie weit, Unterschenkel nach hinten, Füße nach außen (Rumpf leicht zum Kopf geneigt) */
const froschBeine = (vor: number) => ({ ...B("huefte", [55, vor, -90]), ...B("knie", [80]), ...B("fuss", [-30, 0]) })
const FROSCH_ARME = { ...B("schulter", [105, 4, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), hals: [-25, 0, 0] }
const FROSCH: Haltung = H({ ...froschBeine(88), ...FROSCH_ARME }, [105, 0, 0])
/** Hüfte vor über die Knie bzw. zurück Richtung Fersen (Frosch-Wippen) */
const FROSCH_VOR: Haltung = H({ ...froschBeine(74), ...FROSCH_ARME }, [105, 0, 0])
const FROSCH_HINTEN: Haltung = H({ ...froschBeine(102), ...FROSCH_ARME }, [105, 0, 0])

/** Kosaken-Kniebeuge: tief im rechten Bein, linkes Bein gestreckt zur Seite, Ferse am Boden, Fußspitze oben; Becken über dem rechten Fuß */
const KOSAK: Haltung = H({ huefte_r: [128, -22, 38], knie_r: [148], fuss_r: [38, 0], huefte_l: [10, 75, -70], knie_l: [0], fuss_l: [40, 0], bws: [-5, 0, 0] }, [22, 0, 0], { pos: [-0.38, 0.94, 0] })
/** Halb unten: Gewicht nach rechts, rechtes Knie gebeugt, linkes Bein wird lang */
const KOSAK_HALB: Haltung = H({ huefte_r: [65, 35, -10], knie_r: [85], fuss_r: [20, 0], huefte_l: [0, 49, -30], knie_l: [0], fuss_l: [10, 0] }, [15, 0, 0], { pos: [-0.22, 0.94, 0] })
const KOSAK_STAND: Haltung = mit(STAND, { g: B("huefte", [0, 32, -15]) })
/** Sehr breiter Stand, über das rechte Bein tief nach rechts und zurück; die Füße bleiben stehen */
const kosakenAblauf = (armeOben: Winkel, armeUnten: Winkel): [Haltung, number, string, boolean?][] => [
  [mit(KOSAK_STAND, { g: armeOben }), 1, "Sehr breiter Stand", true],
  [mit(KOSAK_HALB, { g: armeUnten }), 1.2, "Gewicht nach rechts verlagern"],
  [mit(KOSAK, { g: armeUnten }), 1.3, "Tief ins rechte Bein, linke Fußspitze zur Decke"],
  [mit(KOSAK, { g: armeUnten }), 1, "Kurz halten", true],
  [mit(KOSAK_HALB, { g: armeUnten }), 1.3, "Über das rechte Bein zurückdrücken"],
  [mit(KOSAK_STAND, { g: armeOben }), 1.2, "Zur Mitte"],
]
/** Auf dem Gymnastikball: Oberkörper leicht vor, Hände auf dem vorderen Oberschenkel am Knie */
const BALL_KNIE = { lws: [30, 0, 0], bws: [5, 0, 0], hals: [-15, 0, 0], ...B("schulter", [40, 0, 0]), ...B("ellbogen", [10, 90]) }

// ---------- Liegen
/** Bauchlage, Stirn auf den übereinandergelegten Händen */
const STIRN_AUF_HAENDEN = { ...B("schulter", [4, 132, 90]), ...B("ellbogen", [115, 90]), hals: [-5, 0, 0] }
/** Bauchlage auf den Unterarmen (Sphinx): Becken liegt, Oberarme senkrecht */
const UNTERARMSTUETZ = { ...B("schulter", [63, 4, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), lws: [-15, 0, 0], bws: [-10, 0, 0], hals: [-10, 0, 0] }
/** Knie zur Brust, beide Hände umfassen das Knie */
const KNIE_BRUST_R = { huefte_r: [144, 0, 0], knie_r: [125], fuss_r: [0, 0], ...B("schulter", [35, 0, -30]), ...B("ellbogen", [100, 90]) }
const KNIE_BRUST_L = { huefte_l: [144, 0, 0], knie_l: [125], fuss_l: [0, 0], ...B("schulter", [35, 0, -30]), ...B("ellbogen", [100, 90]) }

export const HUEFTE_B: Record<string, Dehnung> = {
  // ---------- Gehen und Pendeln: an Ort und Stelle
  knie_umarmen_gehen: folge("seite", [
    [STAND_W, 1, "Aufrecht stehen", true],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [120, 0, 0], knie_r: [140], fuss_r: [10, 0], schulter_l: [40, -32, -40], ellbogen_l: [15, 90], schulter_r: [44, -16, 10], ellbogen_r: [15, 90] } }), 2, "Knie zur Brust, auf die Zehen"],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [120, 0, 0], knie_r: [140], fuss_r: [10, 0], schulter_l: [40, -32, -40], ellbogen_l: [15, 90], schulter_r: [44, -16, 10], ellbogen_r: [15, 90] } }), 1, "Kurz halten", true],
    [STAND_W, 1.5, "Absetzen"],
  ], { seiten: true }),
  bein_wiegen_gehen: folge("vorn", [
    [STAND_W, 1, "Aufrecht stehen", true],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [56, 100, 160], knie_r: [115], fuss_r: [10, 0], schulter_r: [36, 20, -10], ellbogen_r: [20, 90], schulter_l: [40, 4, -30], ellbogen_l: [15, 90] } }), 2.5, "Bein wiegen, auf die Zehen"],
    [mit(STAND_W, { g: { ...ZEHENSTAND_L, huefte_r: [56, 100, 160], knie_r: [115], fuss_r: [10, 0], schulter_r: [36, 20, -10], ellbogen_r: [20, 90], schulter_l: [40, 4, -30], ellbogen_l: [15, 90] } }), 1, "Kurz halten", true],
    [STAND_W, 1.5, "Absetzen"],
  ], { seiten: true }),
  beinpendel_vor_zurueck: wdh("seite", mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [-25, 4, 0], knie_r: [10] } }), mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [70, 4, 0], knie_r: [5], fuss_r: [10, 0] } }), 1, { aus: 1, seiten: true, hilfsmittel: WAND_L }),
  beinpendel_seitlich: wdh("hinten", mit(STAND_W, { g: { ...B("schulter", [88, 12, 0]), ...B("ellbogen", [25, 90]), knie_l: [10], huefte_r: [12, -22, 0], knie_r: [5] } }), mit(STAND_W, { g: { ...B("schulter", [88, 12, 0]), ...B("ellbogen", [25, 90]), knie_l: [10], huefte_r: [8, 50, 0], knie_r: [5] } }), 1, { aus: 1, seiten: true, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  bein_kreisen_rueckenlage: folge("schraeg", [
    [mit(RUECKENLAGE, { g: { huefte_r: [88, 4, 0] } }), 1.5, "Bein senkrecht", true],
    [mit(RUECKENLAGE, { g: { huefte_r: [72, -22, 0] } }), 1.5, "Über die Mitte"],
    [mit(RUECKENLAGE, { g: { huefte_r: [45, 0, 0] } }), 1.5, "Nach unten"],
    [mit(RUECKENLAGE, { g: { huefte_r: [70, 32, 0] } }), 1.5, "Nach außen"],
    [mit(RUECKENLAGE, { g: { huefte_r: [88, 4, 0] } }), 1.5, "Zurück nach oben"],
  ], { seiten: true }),

  // ---------- Tiefe Hocke
  tiefe_hocke: halte("schraeg", mit(STAND_BREIT, { g: GOBLET_STAND }), mit(HOCKE_TIEF, { g: GEBET }), { ein: 4 }),
  tiefe_hocke_gestuetzt: halte("schraeg", mit(STAND_BREIT, { g: { ...B("schulter", [70, 55, 0]), ...B("ellbogen", [0, 90]) } }), mit(HOCKE_TIEF, { dreh: [10, 0, 0], g: { ...B("schulter", [70, 60, 0]), ...B("ellbogen", [0, 90]), bws: [-8, 0, 0] } }), { ein: 4, hilfsmittel: [{ art: "wand", an: "haende", richtung: "vorn" }] }),
  tiefe_hocke_rotation: wdh("vorn", mit(HOCKE_TIEF, { g: GEBET }), mit(HOCKE_TIEF, { g: { schulter_l: [45, -5, 0], ellbogen_l: [0, 90], hand_l: [70, 0], schulter_r: [-50, 150, 0], ellbogen_r: [0, 90], bws: [30, 0, -35], lws: [15, 0, -10], hals: [-25, 0, -30] } }), 2.5, { halten: 1, aus: 2.5, seiten: true }),
  goblet_squat_pry: folge("schraeg", [
    [mit(STAND_BREIT, { g: GOBLET_STAND }), 1.5, "Ausgangsstellung", true],
    [mit(HOCKE_TIEF, { g: GOBLET }), 3, "Tief setzen"],
    [mit(HOCKE_TIEF, { g: { ...GOBLET, huefte_l: [128, -34, 50], bws: [-5, 0, 6] } }), 2, "Linkes Knie nach außen hebeln"],
    [mit(HOCKE_TIEF, { g: { ...GOBLET, huefte_r: [128, -34, 50], bws: [-5, 0, -6] } }), 2.5, "Rechtes Knie nach außen hebeln"],
    [mit(HOCKE_TIEF, { g: GOBLET }), 2, "Mitte, Brust hoch", true],
    [mit(STAND_BREIT, { g: GOBLET_STAND }), 3, "Aufstehen"],
  ], { hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  hocke_zu_vorbeuge: wdh("seite", HOCKE_ZEHEN, VORBEUGE_ZEHEN, 3, { halten: 2, aus: 3 }),

  // ---------- Ausfallschritte
  worlds_greatest_stretch: folge("schraeg", [
    [STAND_W, 1, "Aufrecht stehen", true],
    [LUNGE_TIEF, 2.5, "Großer Ausfallschritt, Hände zum Boden"],
    [LUNGE_ELLBOGEN, 2, "Ellbogen zum Fuß"],
    [LUNGE_AUF, 2.5, "Aufdrehen, Arm zur Decke"],
    [LUNGE_TIEF, 2, "Hand zurück zum Boden"],
    [LUNGE_HINTEN, 3, "Gesäß zurück, vorderes Bein strecken"],
    [LUNGE_TIEF, 2, "Zurück in den Ausfallschritt"],
    [STAND_W, 2.5, "Aufstehen"],
  ], { seiten: true }),
  spiderman_ausfallschritt: folge("schraeg", [
    [PLANK, 1, "Hoher Liegestütz", true],
    [SPIDER_KNIE, 0.8, "Rechtes Knie anziehen"],
    [SPIDER_SCHWUNG, 0.8, "Fuß nach vorn außen führen"],
    [SPIDER, 1.2, "Fuß neben die Hand, Hüfte senken"],
    [SPIDER, 1.5, "Kurz halten", true],
    [SPIDER_SCHWUNG, 1, "Fuß zurückführen"],
    [SPIDER_KNIE, 0.8, "Bein nach hinten"],
    [PLANK, 0.8, "Zurück in den Liegestütz"],
  ], { seiten: true }),
  echse: halte("schraeg", ECHSE_SCHRITT, ECHSE, { seiten: true, ein: 5 }),

  // ---------- Liegen und Kniestand
  glueckliches_baby: halte("schraeg", mit(RUECKENLAGE, { g: { ...KNIE_BRUST_L, ...KNIE_BRUST_R } }), mit(RUECKENLAGE, { g: { ...B("huefte", [168, -30, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...B("schulter", [72, 40, 0]), ...B("ellbogen", [0, 90]) } })),
  froschdehnung: halte("hinten", VIERFUESSLER, FROSCH, { ein: 5 }),
  frosch_wippen: wdh("schraeg", FROSCH_VOR, FROSCH_HINTEN, 2.5, { aus: 2.5 }),
  schmetterling: halte("schraeg", SCHMETTERLING, SCHMETTERLING_TIEF),
  schmetterling_rueckenlage: halte("schraeg", RUECKENLAGE_AUF, mit(RUECKENLAGE_AUF, { g: { ...B("huefte", [24, 60, -70]), ...B("knie", [115]), ...B("fuss", [10, 0]), ...B("schulter", [0, 25, 0]) } }), { ein: 5 }),
  schmetterling_pnf: pnf("schraeg", SCHMETTERLING, mit(SCHMETTERLING, { g: PNF_HAENDE }), mit(SCHMETTERLING, { g: { ...PNF_HAENDE, ...B("huefte", [40, 90, -180]), lws: [14, 0, 0] } })),
  seitlicher_ausfallschritt_dehnung: halte("vorn", mit(STAND, { g: { ...B("huefte", [0, 24, -10]), ...B("fuss", [0, 0]) } }), H({ huefte_r: [100, -15, 25], knie_r: [100], fuss_r: [30, 0], huefte_l: [15, 55, 0], knie_l: [0], fuss_l: [0, 30], schulter_l: [40, -40, -20], ellbogen_l: [30, 90], schulter_r: [40, 0, 0], ellbogen_r: [50, 90], bws: [5, 0, 0] }, [30, 0, 0], { pos: [-0.28, 0.94, 0] }), { seiten: true }),
  kosaken_kniebeuge: folge("vorn", kosakenAblauf({ ...B("schulter", [80, 10, 0]), ...B("ellbogen", [5, 90]) }, { ...B("schulter", [90, 10, 0]), ...B("ellbogen", [5, 90]) }), { seiten: true }),
  kosaken_kniebeuge_gewicht: folge("vorn", kosakenAblauf(GOBLET_STAND, GOBLET), { seiten: true, hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  adduktoren_rock_back: wdh("schraeg", mit(VIERFUESSLER, { g: { huefte_r: [29, 88, -75], knie_r: [0], fuss_r: [25, 0] } }), H({ huefte_l: [102, 0, 0], knie_l: [130], fuss_l: [-70, 0], huefte_r: [24, 88, -75], knie_r: [0], fuss_r: [25, 0], ...B("schulter", [120, 3, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), lws: [20, 0, 0], bws: [20, 0, 0], hals: [-25, 0, 0] }, [55, 0, 0]), 2.5, { aus: 2.5, seiten: true }),
  adduktoren_kniestand: halte("vorn", H({ huefte_l: [0, 4, 0], knie_l: [90], fuss_l: [-80, 0], huefte_r: [0, 52, 0], knie_r: [0], fuss_r: [0, -60], ...B("schulter", [15, 25, 0]), ...B("ellbogen", [80, 60]) }), H({ huefte_l: [0, -16, 0], knie_l: [90], fuss_l: [-80, 0], huefte_r: [0, 64, 0], knie_r: [0], fuss_r: [0, -70], ...B("schulter", [15, 25, 0]), ...B("ellbogen", [80, 60]), lws: [0, 10, 0] }), { seiten: true }),
  adduktoren_band_rueckenlage: halte("schraeg", mit(RUECKENLAGE, { g: { huefte_r: [88, 4, 0], schulter_r: [60, 10, 0], ellbogen_r: [10, 90], schulter_l: [0, 20, 0], ellbogen_l: [30, 0] } }), mit(RUECKENLAGE, { g: { huefte_r: [36, 88, 0], schulter_r: [48, 40, 130], ellbogen_r: [5, 90], schulter_l: [0, 20, 0], ellbogen_l: [30, 0] } }), { seiten: true, hilfsmittel: [{ art: "band", von: "hand_r", bis: "fuss_r" }] }),
  adduktoren_rolle: wdh("oben", mit(BAUCHLAGE, { dreh: [88, 0, 0], pos: [0.12, 0.94, 0], g: { ...UNTERARMSTUETZ, huefte_r: [-25, 95, -105], knie_r: [110] } }), mit(BAUCHLAGE, { dreh: [88, 0, 0], g: { ...UNTERARMSTUETZ, huefte_r: [-25, 95, -105], knie_r: [110] } }), 3, { aus: 3, seiten: true, hilfsmittel: [{ art: "rolle", unter: "oberschenkel_r", laengs: true }] }),
  pancake: halte("vorn", GRAETSCHSITZ, GRAETSCHE_VOR, { ein: 5 }),
  pancake_gewicht: wdh("schraeg", mit(GRAETSCHSITZ, { g: GOBLET_STAND }), mit(GRAETSCHE_VOR, { g: { ...B("schulter", [80, 0, -10]), ...B("ellbogen", [70, 90]) } }), 3, { halten: 2.5, aus: 3, hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  graetsche_vorbeuge_stehend: halte("vorn", mit(STAND, { g: { ...B("huefte", [0, 22, 5]), ...B("schulter", [0, 30, 0]), ...B("ellbogen", [80, 60]) } }), H({ ...B("huefte", [65, 72, 0]), ...B("fuss", [0, 0]), ...B("schulter", [150, 6, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), lws: [35, 0, 0], bws: [35, 0, 0], hals: [15, 0, 0] }, [85, 0, 0]), { ein: 5, hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.12 }] }),
  graetsche_wand: halte("schraeg", mit(RUECKENLAGE, { g: { ...B("huefte", [88, 4, 0]), ...B("fuss", [0, 0]), ...B("schulter", [0, 25, 0]) } }), mit(RUECKENLAGE, { g: { ...B("huefte", [40, 88, 0]), ...B("fuss", [0, 0]), ...B("schulter", [0, 25, 0]) } }), { ein: 6, hilfsmittel: [{ art: "wand", an: "gesaess", richtung: "vorn" }] }),
  graetsche_seitbeuge: halte("vorn", GRAETSCHSITZ, mit(GRAETSCHSITZ, { g: { lws: [0, -15, -10], bws: [0, -25, -15], hals: [0, -10, 0], schulter_r: [24, 52, -20], ellbogen_r: [50, 90], schulter_l: [136, -16, 0], ellbogen_l: [0, 90] } }), { seiten: true }),
  seitspagat_gleiten: wdh("vorn", H({ ...B("huefte", [61, 24, 0]), ...B("schulter", [70, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) }, [65, 0, 0]), H({ ...B("huefte", [28, 52, 0]), ...B("schulter", [55, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) }, [40, 0, 0]), 3, { halten: 1, aus: 3, hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.57 }] }),
  seitspagat: halte("vorn", H({ ...B("huefte", [30, 50, 0]), ...B("schulter", [135, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), lws: [40, 0, 0], bws: [40, 0, 0], hals: [-15, 0, 0] }, [55, 0, 0]), H({ ...B("huefte", [20, 72, 0]), ...B("schulter", [105, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]), lws: [25, 0, 0], bws: [25, 0, 0], hals: [-15, 0, 0] }, [50, 0, 0]), { ein: 6, hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.08 }] }),
  pancake_beinheben: wdh("schraeg", mit(GRAETSCHSITZ, { dreh: [0, 0, 0], g: { ...B("huefte", [44, 84, 0]), lws: [8, 0, 0], ...B("schulter", [28, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), mit(GRAETSCHSITZ, { dreh: [0, 0, 0], g: { ...B("huefte", [44, 100, 0]), lws: [8, 0, 0], ...B("schulter", [28, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 1.5, { halten: 1, aus: 2 }),
  hueftbeuger_gymnastikball: halte("seite", H({ huefte_l: [70, 6, 0], knie_l: [80], fuss_l: [5, 0], huefte_r: [-38, 6, 0], knie_r: [20], fuss_r: [-35, 0], zehen_r: [60], ...BALL_KNIE }), H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [5, 0], huefte_r: [-50, 6, 0], knie_r: [0], fuss_r: [-35, 0], zehen_r: [60], ...BALL_KNIE }), { seiten: true, hilfsmittel: [{ art: "ball", unter: "gesaess" }] }),
  aussenrotation_bauchlage: halte("hinten", mit(BAUCHLAGE, { g: { ...STIRN_AUF_HAENDEN, ...B("huefte", [0, 10, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]) } }), mit(BAUCHLAGE, { g: { ...STIRN_AUF_HAENDEN, ...B("huefte", [0, 10, -40]), ...B("knie", [90]), ...B("fuss", [0, 0]) } })),
  knie_zur_brust_liegend: folge("seite", [
    [RUECKENLAGE, 1.5, "Ausgangsstellung", true],
    [mit(RUECKENLAGE, { g: KNIE_BRUST_R }), 4, "Rechtes Knie zur Brust"],
    [mit(RUECKENLAGE, { g: KNIE_BRUST_R }), 15, "Halten, ruhig atmen", true],
    [RUECKENLAGE, 3, "Ablegen"],
    [mit(RUECKENLAGE, { g: KNIE_BRUST_L }), 4, "Linkes Knie zur Brust"],
    [mit(RUECKENLAGE, { g: KNIE_BRUST_L }), 15, "Halten, ruhig atmen", true],
    [mit(RUECKENLAGE, { g: { ...KNIE_BRUST_L, ...KNIE_BRUST_R } }), 4, "Beide Knie zur Brust"],
    [mit(RUECKENLAGE, { g: { ...KNIE_BRUST_L, ...KNIE_BRUST_R } }), 15, "Halten, ruhig atmen", true],
    [RUECKENLAGE, 3, "Beine ablegen"],
  ]),
  vierfuessler_rock_back: wdh("seite", mit(VIERFUESSLER, { g: B("huefte", [90, 10, 0]) }), H({ ...B("huefte", [116, 10, 0]), ...B("knie", [145]), ...B("fuss", [-45, 0]), ...B("schulter", [90, 3, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), bws: [15, 0, 0], hals: [-10, 0, 0] }, [60, 0, 0]), 2.5, { aus: 2.5 }),

  // ---------- Reha
  reha_hueftbeuger_dehnen: halte("seite", mit(STAND_W, { g: { ...WAND_LINKS, huefte_r: [30, 4, 0], knie_r: [35], huefte_l: [-12, 4, 0], knie_l: [5] } }), mit(STAND_W, { g: { ...WAND_LINKS, huefte_r: [40, 4, 0], knie_r: [45], fuss_r: [10, 0], huefte_l: [-25, 4, 0], knie_l: [5], fuss_l: [-25, 0], zehen_l: [30] } }), { seiten: true, hilfsmittel: WAND_L }),
  reha_bein_pendeln: wdh("seite", mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [-15, 4, 0], knie_r: [10] } }), mit(STAND_W, { g: { ...WAND_LINKS, knie_l: [10], huefte_r: [35, 4, 0], knie_r: [10] } }), 1.2, { aus: 1.2, seiten: true, hilfsmittel: WAND_L }),
  reha_knie_zur_brust: halte("seite", RUECKENLAGE_AUF, mit(RUECKENLAGE_AUF, { g: KNIE_BRUST_R }), { seiten: true }),
  reha_fersengleiten: wdh("seite", RUECKENLAGE, mit(RUECKENLAGE, { g: { huefte_r: [40, 0, 0], knie_r: [85], fuss_r: [10, 0] } }), 3, { aus: 3, seiten: true }),
}
