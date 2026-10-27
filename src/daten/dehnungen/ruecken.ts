// Wirbelsäule, Rumpf und Flows. Tempo: Mobilisationen 2 bis 3 s je Richtung, Flows Schritt für Schritt mit Atemzug.

import type { Dehnung, Haltung } from "../../logik/dehnbewegung"
import {
  ARME_HOCH, ARME_LOCKER, AUSFALL, B, BAUCHLAGE, CHATURANGA, FERSENSITZ, H, HALB_HOCH, HALBKNIESTAND, HOCKE, HUND, HUND_HOCH, KNIESTAND, LANGSITZ, PLANK, RUECKENLAGE, RUECKENLAGE_AUF, SCHNEIDERSITZ, SEITLAGE, STAND, STUHL_HALTUNG, VIERFUESSLER, VORBEUGE, folge, halte, mit, wdh,
} from "./basis"

const HAND_AM_KOPF = { schulter_r: [20, 80, 60], ellbogen_r: [140, 0] }
const ARME_T = { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [5, 0]) }
const KINDHALTUNG: Haltung = H({ ...B("huefte", [156, 8, 0]), ...B("knie", [160]), ...B("fuss", [-85, 0]), ...B("schulter", [178, 12, 0]), ...B("ellbogen", [5, 90]), ...B("hand", [15, 0]), lws: [15, 0, 0], bws: [10, 0, 0] }, [80, 0, 0])
// Arme bleiben senkrecht unter den Schultern: Schulterbeugung = 90 + Beugung der Wirbelsäule
const KUH: Haltung = mit(VIERFUESSLER, { g: { lws: [-15, 0, 0], bws: [-12, 0, 0], hals: [-25, 0, 0], ...B("schulter", [63, 3, 0]) } })
const KATZE: Haltung = mit(VIERFUESSLER, { g: { lws: [18, 0, 0], bws: [22, 0, 0], hals: [25, 0, 0], ...B("schulter", [130, 3, 0]) } })
const STAND_BREIT = mit(STAND, { g: B("huefte", [0, 9, 0]) })
const KRIEGER: Haltung = mit(AUSFALL, { g: { fuss_r: [10, 0], zehen_r: [0], huefte_r: [-25, 4, -30], ...B("schulter", [175, 8, 0]), ...B("ellbogen", [0, 90]) } })
const BAER: Haltung = mit(VIERFUESSLER, { g: { ...B("knie", [80]), ...B("fuss", [-15, 0]), ...B("zehen", [60]) }, dreh: [80, 0, 0] })

export const RUECKEN: Record<string, Dehnung> = {
  open_book: wdh("schraeg", mit(SEITLAGE, { g: { schulter_r: [90, -10, 0] } }), mit(SEITLAGE, { g: { schulter_r: [90, 0, 0, 140], schulter_l: [90, 0, 0, -35], bws: [0, 0, -35], lws: [0, 0, -10], hals: [0, 15, -30] } }), 3, { halten: 2, aus: 3 }),
  windmuehle_seitenlage: folge("schraeg", [
    [mit(SEITLAGE, { g: { schulter_r: [90, -10, 0] } }), 1, "Arm vorn", true],
    [mit(SEITLAGE, { g: { schulter_r: [170, 10, 0], bws: [0, 0, -15] } }), 2, "Über den Kopf"],
    [mit(SEITLAGE, { g: { schulter_r: [90, 0, 0, 150], schulter_l: [90, 0, 0, -35], bws: [0, 0, -35], lws: [0, 0, -10], hals: [0, 15, -25] } }), 2.5, "Nach hinten öffnen"],
    [mit(SEITLAGE, { g: { schulter_r: [-30, 30, 0], bws: [0, 0, -30] } }), 2, "Am Körper entlang"],
    [mit(SEITLAGE, { g: { schulter_r: [90, -10, 0] } }), 2, "Zurück nach vorn"],
  ]),
  katze_kuh: wdh("seite", KUH, KATZE, 3, { aus: 3 }),
  katze_kuh_segmental: wdh("seite", KUH, KATZE, 5, { aus: 5, hinweis: "Wirbel für Wirbel, vom Becken bis zum Kopf." }),
  bws_rotation_kniend: wdh("schraeg", mit(VIERFUESSLER, { g: { ...HAND_AM_KOPF, bws: [0, 0, 25] } }), mit(VIERFUESSLER, { g: { ...HAND_AM_KOPF, bws: [0, 0, -45], hals: [0, 0, -20] } }), 2.5, { halten: 1 }),
  bws_rotation_lendenfixiert: wdh("schraeg", mit(FERSENSITZ, { dreh: [70, 0, 0], g: { ...B("huefte", [140, 10, 0]), schulter_l: [100, 0, 0], ellbogen_l: [90, 90], ...HAND_AM_KOPF, bws: [0, 0, 20] } }), mit(FERSENSITZ, { dreh: [70, 0, 0], g: { ...B("huefte", [140, 10, 0]), schulter_l: [100, 0, 0], ellbogen_l: [90, 90], ...HAND_AM_KOPF, bws: [0, 0, -40], hals: [0, 0, -20] } }), 2.5, { halten: 1, hinweis: "Gesäß auf den Fersen, so bleibt die Lendenwirbelsäule ruhig." }),
  faden_einfaedeln: wdh("schraeg", mit(VIERFUESSLER, { g: { schulter_r: [10, 88, 0], ellbogen_r: [0, 0], bws: [0, 0, -40], hals: [0, 0, -25] } }), mit(VIERFUESSLER, { g: { schulter_r: [85, -75, 0], ellbogen_r: [0, -90], bws: [0, 0, 50], hals: [0, 0, 30], ...B("huefte", [100, 3, 0]) } }), 2.5, { halten: 1 }),
  faden_einfaedeln_halten: halte("schraeg", VIERFUESSLER, mit(VIERFUESSLER, { g: { schulter_r: [85, -75, 0], ellbogen_r: [0, -90], bws: [0, 0, 50], hals: [0, 0, 30], ...B("huefte", [105, 3, 0]) } })),
  bws_rotation_sitzend_stab: wdh("oben", mit(SCHNEIDERSITZ, { g: { ...B("schulter", [150, 60, 60]), ...B("ellbogen", [115, 0]) } }), mit(SCHNEIDERSITZ, { g: { ...B("schulter", [150, 60, 60]), ...B("ellbogen", [115, 0]), bws: [0, 0, 45], lws: [0, 0, 10] } }), 2.5, { halten: 1, hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  bws_rotation_halbkniend: wdh("oben", mit(HALBKNIESTAND, { g: ARME_T }), mit(HALBKNIESTAND, { g: { ...ARME_T, bws: [0, 0, -45], lws: [0, 0, -10], hals: [0, 0, -15] } }), 2.5, { halten: 1 }),
  drehsitz: halte("schraeg", mit(LANGSITZ, { g: { huefte_r: [110, -15, 0], knie_r: [120] } }), mit(LANGSITZ, { g: { huefte_r: [115, -20, 0], knie_r: [125], bws: [0, 0, -50], lws: [0, 0, -15], hals: [0, 0, -25], schulter_l: [70, -35, 0], ellbogen_l: [80, 0], schulter_r: [-30, 30, 0], ellbogen_r: [0, 0] } })),
  bretzel: halte("schraeg", SEITLAGE, mit(SEITLAGE, { g: { huefte_r: [95, -10, 0], knie_r: [90], huefte_l: [-20, 0, 0], knie_l: [130], schulter_r: [-10, 60, 0], bws: [0, 0, -60], lws: [0, 0, -20], hals: [0, 0, -30] } })),
  bws_extension_rolle: wdh("seite", mit(RUECKENLAGE_AUF, { dreh: [-78, 0, 0], g: { ...B("schulter", [150, 55, 60]), ...B("ellbogen", [125, 0]), hals: [20, 0, 0] } }), mit(RUECKENLAGE_AUF, { dreh: [-78, 0, 0], g: { ...B("schulter", [150, 55, 60]), ...B("ellbogen", [125, 0]), bws: [-28, 0, 0], hals: [5, 0, 0] } }), 3, { halten: 1, hilfsmittel: [{ art: "rolle", unter: "bws" }] }),
  bws_ausrollen: wdh("seite", mit(RUECKENLAGE_AUF, { dreh: [-80, 0, 0], g: { ...B("schulter", [150, 55, 60]), ...B("ellbogen", [125, 0]), ...B("huefte", [40, 4, 0]), ...B("knie", [90]), hals: [20, 0, 0] } }), mit(RUECKENLAGE_AUF, { dreh: [-80, 0, 0], g: { ...B("schulter", [150, 55, 60]), ...B("ellbogen", [125, 0]), ...B("huefte", [15, 4, 0]), ...B("knie", [70]), hals: [20, 0, 0] } }), 2.5, { hilfsmittel: [{ art: "rolle", unter: "bws" }] }),
  bank_gebetsdehnung: halte("seite", KNIESTAND, mit(KNIESTAND, { dreh: [90, 0, 0], g: { ...B("huefte", [90, 5, 0]), ...B("schulter", [178, 10, 60]), ...B("ellbogen", [125, 0]), bws: [-18, 0, 0], hals: [5, 0, 0] } }), { hilfsmittel: [{ art: "bank", unter: "ellbogen_l", hoehe: 0.45 }] }),
  kindhaltung: halte("seite", VIERFUESSLER, KINDHALTUNG),
  kindhaltung_seitlich: halte("schraeg", KINDHALTUNG, mit(KINDHALTUNG, { g: { schulter_l: [178, -5, 0], schulter_r: [178, 30, 0], bws: [10, -22, 0], lws: [15, -10, 0] } })),
  pilates_saege: wdh("schraeg", mit(LANGSITZ, { g: { ...B("huefte", [90, 35, 0]), ...ARME_T } }), mit(LANGSITZ, { dreh: [25, 0, 0], g: { ...B("huefte", [115, 35, 0]), ...ARME_T, schulter_r: [120, -25, 0], schulter_l: [-15, 70, 0], bws: [15, 0, 45], lws: [12, 0, 10] } }), 3, { halten: 1, aus: 3 }),
  meerjungfrau: halte("vorn", H({ huefte_l: [70, 15, -40], knie_l: [130], huefte_r: [45, 40, 40], knie_r: [140], ...ARME_LOCKER }), H({ huefte_l: [70, 15, -40], knie_l: [130], huefte_r: [45, 40, 40], knie_r: [140], schulter_l: [175, 20, 0], ellbogen_l: [10, 0], schulter_r: [25, 45, 0], ellbogen_r: [10, 0], bws: [0, -25, 0], lws: [0, -12, 0] })),
  bws_extension_ball: halte("seite", H({ ...B("huefte", [-10, 6, 0]), ...B("knie", [90]), ...B("schulter", [90, 10, 0]) }, [-100, 0, 0]), H({ ...B("huefte", [-10, 6, 0]), ...B("knie", [90]), ...B("schulter", [175, 15, 0]), ...B("ellbogen", [0, 90]), bws: [-20, 0, 0], hals: [-20, 0, 0] }, [-100, 0, 0]), { hilfsmittel: [{ art: "ball", unter: "bws" }] }),
  rumpfrotation_stehend: wdh("vorn", mit(STAND_BREIT, { g: { ...B("schulter", [30, 55, 0]), ...B("ellbogen", [40, 0]), bws: [0, 0, -40], lws: [0, 0, -12] } }), mit(STAND_BREIT, { g: { ...B("schulter", [30, 55, 0]), ...B("ellbogen", [40, 0]), bws: [0, 0, 40], lws: [0, 0, 12] } }), 1.2, { aus: 1.2 }),
  sonnengruss: folge("seite", [
    [STAND, 1.5, "Stand, einatmen", true],
    [ARME_HOCH, 2.5, "Arme hoch, einatmen"],
    [VORBEUGE, 3, "Vorbeuge, ausatmen"],
    [HALB_HOCH, 2, "Halb aufrichten, einatmen"],
    [PLANK, 2.5, "Zurück in den Stütz"],
    [CHATURANGA, 2, "Tief, ausatmen"],
    [HUND_HOCH, 2.5, "Heraufschauender Hund, einatmen"],
    [HUND, 2.5, "Herabschauender Hund, ausatmen"],
    [HUND, 6, "Drei Atemzüge", true],
    [VORBEUGE, 3, "Nach vorn kommen"],
    [ARME_HOCH, 3, "Aufrollen, Arme hoch"],
    [STAND, 2, "Stand"],
  ]),
  sonnengruss_b: folge("seite", [
    [STAND, 1.5, "Stand", true],
    [STUHL_HALTUNG, 2.5, "Stuhlhaltung, einatmen"],
    [VORBEUGE, 3, "Vorbeuge, ausatmen"],
    [PLANK, 2.5, "Zurück in den Stütz"],
    [CHATURANGA, 2, "Tief"],
    [HUND_HOCH, 2.5, "Heraufschauender Hund"],
    [HUND, 2.5, "Herabschauender Hund"],
    [KRIEGER, 3, "Krieger I, links vorn"],
    [HUND, 3, "Zurück in den Hund"],
    [VORBEUGE, 3, "Nach vorn kommen"],
    [STUHL_HALTUNG, 3, "Stuhlhaltung"],
    [STAND, 2, "Stand"],
  ]),
  herabschauender_hund: halte("seite", VIERFUESSLER, HUND),
  hund_kobra_flow: folge("seite", [
    [HUND, 2, "Herabschauender Hund", true],
    [PLANK, 2.5, "Nach vorn in den Stütz"],
    [HUND_HOCH, 2.5, "Brust nach vorn oben"],
    [HUND_HOCH, 1.5, "Kurz halten", true],
    [HUND, 3, "Zurück in den Hund"],
  ]),
  inchworm: folge("seite", [
    [STAND, 1, "Stand", true],
    [VORBEUGE, 2.5, "Hände zum Boden"],
    [mit(VORBEUGE, { dreh: [100, 0, 0], g: { ...B("huefte", [95, 2, 0]), ...B("schulter", [150, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 2.5, "Hände nach vorn laufen"],
    [PLANK, 2.5, "Bis in den Stütz"],
    [PLANK, 1, "Kurz halten", true],
    [mit(VORBEUGE, { dreh: [100, 0, 0], g: { ...B("huefte", [95, 2, 0]), ...B("schulter", [150, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 2.5, "Füße zu den Händen"],
    [VORBEUGE, 2, "Vorbeuge"],
    [STAND, 2.5, "Aufrollen"],
  ]),
  baer_hocke_flow: folge("seite", [
    [BAER, 1.5, "Bärenstand, Knie schweben", true],
    [mit(HOCKE, { g: { ...B("schulter", [90, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 3, "Gesäß zu den Fersen, tiefe Hocke"],
    [mit(HOCKE, { g: { ...B("schulter", [90, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } }), 1.5, "Halten", true],
    [BAER, 3, "Zurück in den Bärenstand"],
  ]),
  skorpion: wdh("oben", mit(BAUCHLAGE, { g: { ...ARME_T, hals: [0, 0, 30] } }), mit(BAUCHLAGE, { g: { ...ARME_T, huefte_r: [-35, -50, 0], knie_r: [90], lws: [0, 0, 40], bws: [0, 0, 15], hals: [0, 0, 30] } }), 3, { halten: 1 }),
  kobra: halte("seite", mit(BAUCHLAGE, { g: { ...B("schulter", [20, 15, 0]), ...B("ellbogen", [115, 90]), ...B("hand", [80, 0]) } }), mit(BAUCHLAGE, { dreh: [80, 0, 0], g: { ...B("schulter", [30, 15, 0]), ...B("ellbogen", [25, 90]), ...B("hand", [80, 0]), lws: [-28, 0, 0], bws: [-20, 0, 0], hals: [-15, 0, 0] } })),
  sphinx: halte("seite", BAUCHLAGE, mit(BAUCHLAGE, { dreh: [85, 0, 0], g: { ...B("schulter", [55, 15, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), lws: [-22, 0, 0], bws: [-12, 0, 0], hals: [-10, 0, 0] } })),
  welpe: halte("seite", VIERFUESSLER, mit(VIERFUESSLER, { dreh: [115, 0, 0], g: { ...B("huefte", [115, 3, 0]), ...B("schulter", [178, 10, 0]), ...B("hand", [15, 0]), lws: [-10, 0, 0], bws: [-12, 0, 0], hals: [-10, 0, 0] } })),
  seitbeuge_stehend: halte("vorn", STAND_BREIT, mit(STAND_BREIT, { g: { schulter_l: [170, 12, 0], ellbogen_l: [10, 0], schulter_r: [0, 10, 0], bws: [0, -25, 0], lws: [0, -10, 0] } })),
  seitdehnung_stange: halte("vorn", mit(STAND_BREIT, { g: { ...B("schulter", [170, 15, 0]), ...B("ellbogen", [5, 0]) } }), mit(STAND_BREIT, { g: { ...B("schulter", [165, 15, 0]), ...B("ellbogen", [5, 0]), huefte_l: [0, 18, 0], huefte_r: [0, -5, 0], bws: [0, -22, 0], lws: [0, -15, 0] } }), { hilfsmittel: [{ art: "stange", an: "haende" }] }),
  rueckenlage_drehdehnung: halte("oben", mit(RUECKENLAGE, { g: { ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...ARME_T } }), mit(RUECKENLAGE, { dreh: [-90, 55, 0], g: { ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...ARME_T, lws: [0, 0, -30], bws: [0, 0, -25], hals: [0, 0, -25] } })),
  scheibenwischer: wdh("oben", mit(RUECKENLAGE, { dreh: [-90, -45, 0], g: { ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...ARME_T, lws: [0, 0, 25], bws: [0, 0, 20] } }), mit(RUECKENLAGE, { dreh: [-90, 45, 0], g: { ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...ARME_T, lws: [0, 0, -25], bws: [0, 0, -20] } }), 3, { aus: 3 }),
  knie_zur_brust: halte("seite", RUECKENLAGE_AUF, mit(RUECKENLAGE, { g: { ...B("huefte", [125, 8, 0]), ...B("knie", [125]), ...B("schulter", [70, 12, 0]), ...B("ellbogen", [80, 0]), hals: [15, 0, 0] } })),
  krokodilatmung: halte("schraeg", mit(BAUCHLAGE, { g: { ...B("schulter", [160, 50, 0]), ...B("ellbogen", [130, 90]) } }), mit(BAUCHLAGE, { g: { ...B("schulter", [160, 50, 0]), ...B("ellbogen", [130, 90]) } }), { hinweis: "In den Bauch und die Flanken atmen, der Rücken hebt sich leicht." }),
  atmung_9090: halte("seite", mit(RUECKENLAGE, { g: { ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]) } }), mit(RUECKENLAGE, { g: { ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), lws: [8, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "fuss_l", richtung: "vorn" }], hinweis: "Fersen an die Wand drücken, ruhig ausatmen." }),
  mckenzie_liegestuetz: wdh("seite", mit(BAUCHLAGE, { g: { ...B("schulter", [20, 15, 0]), ...B("ellbogen", [115, 90]), ...B("hand", [80, 0]) } }), mit(BAUCHLAGE, { dreh: [75, 0, 0], g: { ...B("schulter", [32, 15, 0]), ...B("ellbogen", [10, 90]), ...B("hand", [80, 0]), lws: [-32, 0, 0], bws: [-18, 0, 0] } }), 2.5, { halten: 2, aus: 2.5 }),
  rueckstreckung_stehend: wdh("seite", mit(STAND, { g: { ...B("schulter", [-40, 25, -40]), ...B("ellbogen", [100, 0]) } }), mit(STAND, { dreh: [-5, 0, 0], g: { ...B("schulter", [-40, 25, -40]), ...B("ellbogen", [100, 0]), lws: [-22, 0, 0], bws: [-10, 0, 0], hals: [-10, 0, 0] } }), 2, { halten: 2 }),
  banane: halte("oben", mit(RUECKENLAGE, { g: { ...B("schulter", [175, 10, 0]) } }), mit(RUECKENLAGE, { g: { schulter_l: [175, 0, 0], schulter_r: [175, 25, 0], lws: [0, -14, 0], bws: [0, -14, 0], huefte_l: [0, -12, 0], huefte_r: [0, 10, 0] } })),
  tor_haltung: halte("vorn", mit(KNIESTAND, { g: { huefte_r: [0, 55, 0], knie_r: [0], fuss_r: [-30, 0] } }), mit(KNIESTAND, { g: { huefte_r: [0, 55, 0], knie_r: [0], fuss_r: [-30, 0], schulter_l: [170, 15, 0], ellbogen_l: [10, 0], schulter_r: [5, 30, 0], bws: [0, -28, 0], lws: [0, -12, 0] } })),
  stoffpuppe: wdh("seite", mit(VORBEUGE, { g: { ...B("knie", [25]), ...B("huefte", [85, 2, 0]), ...B("schulter", [120, -20, -50]), ...B("ellbogen", [100, 80]), bws: [18, -8, 0] } }), mit(VORBEUGE, { g: { ...B("knie", [25]), ...B("huefte", [85, 2, 0]), ...B("schulter", [120, -20, -50]), ...B("ellbogen", [100, 80]), bws: [18, 8, 0] } }), 2.5),
  roll_down: wdh("seite", STAND, VORBEUGE, 5, { halten: 2, aus: 5, hinweis: "Langsam abrollen, Wirbel für Wirbel wieder aufrollen." }),
  bruecke_rad: halte("seite", mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [175, 25, 0]), ...B("ellbogen", [140, 90]) } }), H({ ...B("huefte", [-25, 8, 0]), ...B("knie", [80]), ...B("fuss", [10, 0]), ...B("schulter", [200, 15, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), lws: [-45, 0, 0], bws: [-45, 0, 0], hals: [-25, 0, 0] }, [-60, 0, 0])),
  kamel: halte("seite", KNIESTAND, mit(KNIESTAND, { dreh: [-10, 0, 0], g: { ...B("huefte", [-15, 5, 0]), ...B("schulter", [-85, 15, 0]), ...B("ellbogen", [0, 0]), lws: [-35, 0, 0], bws: [-30, 0, 0], hals: [-30, 0, 0] } })),
  fisch: halte("seite", RUECKENLAGE, mit(RUECKENLAGE, { g: { ...B("schulter", [-25, 15, 0]), ...B("ellbogen", [90, 0]), bws: [-35, 0, 0], hals: [-40, 0, 0] } })),
  ball_seitdehnung: halte("vorn", mit(SEITLAGE, { g: { ...B("huefte", [10, 0, 0]), ...B("knie", [10]) } }), mit(SEITLAGE, { g: { ...B("huefte", [10, 0, 0]), ...B("knie", [10]), schulter_r: [175, 0, 0], schulter_l: [175, 0, 0], lws: [0, -15, 0], bws: [0, -18, 0] } }), { hilfsmittel: [{ art: "ball", unter: "ruecken" }] }),
  skin_the_cat: folge("seite", [
    [H({ ...B("schulter", [178, 15, 0]), ...B("ellbogen", [0, 0]) }, undefined, { pos: [0, 0.8, 0], boden: false }), 1.5, "Hängen", true],
    [H({ ...B("schulter", [178, 15, 0]), ...B("huefte", [130, 5, 0]), ...B("knie", [120]) }, undefined, { pos: [0, 0.8, 0], boden: false }), 2.5, "Knie zur Brust"],
    [H({ ...B("schulter", [120, 15, 0]), ...B("huefte", [140, 5, 0]), ...B("knie", [110]) }, [-150, 0, 0], { pos: [0, 1.15, 0], boden: false }), 3, "Durchdrehen, Schultern dehnen"],
    [H({ ...B("schulter", [178, 15, 0]), ...B("huefte", [130, 5, 0]), ...B("knie", [120]) }, undefined, { pos: [0, 0.8, 0], boden: false }), 3, "Langsam zurück"],
    [H({ ...B("schulter", [178, 15, 0]), ...B("ellbogen", [0, 0]) }, undefined, { pos: [0, 0.8, 0], boden: false }), 2, "Hängen"],
  ], { hilfsmittel: [{ art: "stange", an: "haende" }] }),
}
