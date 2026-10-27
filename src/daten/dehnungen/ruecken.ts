// Wirbelsäule, Rumpf und Flows. Tempo: Mobilisationen 2 bis 3 s je Richtung, Flows Schritt für Schritt mit Atemzug.

import type { Dehnung, Haltung } from "../../logik/dehnbewegung"
import {
  ARME_HOCH, AUSFALL, B, BAUCHLAGE, CHATURANGA, FERSENSITZ, H, HALB_HOCH, HALBKNIESTAND, HOCKE, HUND, HUND_HOCH, KNIESTAND, LANGSITZ, PLANK, RUECKENLAGE, RUECKENLAGE_AUF, SEITLAGE, STAND, STUHLSITZ, STUHL_HALTUNG, VIERFUESSLER, VORBEUGE, folge, halte, mit, wdh,
} from "./basis"

const HAND_AM_KOPF = { schulter_r: [-10, 130, 110], ellbogen_r: [140, 0] }
const ARME_T = { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [5, 0]) }
const KINDHALTUNG: Haltung = H({ ...B("huefte", [156, 8, 0]), ...B("knie", [160]), ...B("fuss", [-85, 0]), ...B("schulter", [178, 12, 0]), ...B("ellbogen", [5, 90]), ...B("hand", [15, 0]), lws: [15, 0, 0], bws: [10, 0, 0] }, [80, 0, 0])
// Arme bleiben senkrecht unter den Schultern: Schulterbeugung = 90 + Beugung der Wirbelsäule
// Becken kippt mit, damit Hände und Knie am Boden bleiben
const KUH: Haltung = mit(VIERFUESSLER, { dreh: [112, 0, 0], g: { ...B("huefte", [112, 3, 0]), lws: [-20, 0, 0], bws: [-10, 0, 0], hals: [-25, 0, 0], ...B("schulter", [82, 3, 0]) } })
const KATZE: Haltung = mit(VIERFUESSLER, { dreh: [66, 0, 0], g: { ...B("huefte", [66, 3, 0]), lws: [15, 0, 0], bws: [22, 0, 0], hals: [25, 0, 0], ...B("schulter", [103, 3, 0]) } })
// Bauchlage: Arme seitlich am Boden; Rückenlage: Arme seitlich, über Kopf am Boden; Hände auf den unteren Rippen
const ARME_T_BAUCH = { ...B("schulter", [8, 84, 0]), ...B("ellbogen", [5, 90]) }
const ARME_T_RUECKEN = { ...B("schulter", [-9, 84, 0]), ...B("ellbogen", [5, 90]) }
const ARME_UEBER_KOPF = B("schulter", [185, 5, 0])
const HAENDE_RIPPEN = { ...B("schulter", [-20, 40, -60]), ...B("ellbogen", [130, 90]) }
// Hände flach neben der Brust (Start für Kobra und McKenzie)
const BAUCH_HAENDE: Haltung = mit(BAUCHLAGE, { g: { ...B("schulter", [-20, 40, -40]), ...B("ellbogen", [120, 90]), ...B("hand", [80, 0]) } })
// Hände übereinander unter der Stirn
// Seitenlage mit Knien aufeinander: Open Book und Windmühle (untere Hand hält das obere Knie)
// Leicht in die Taille sinken, damit die Beine aufliegen
const SL: Haltung = mit(SEITLAGE, { g: { lws: [0, -8, 0] } })
const OB_VORN: Haltung = mit(SL, { g: { schulter_r: [90, 0, 0, -30] } })
const WM: Haltung = mit(SL, { g: { schulter_l: [45, -30, 0], ellbogen_l: [0, 90] } })
// Auf der Bank sitzen, Stab im Nacken
const STAB_SITZ: Haltung = mit(STUHLSITZ, { g: { ...B("schulter", [0, 45, 150, -30]), ...B("ellbogen", [140, 0]) } })
// Rückenlage mit aufgestellten Füßen, Fußsohlen flach am Boden
const AUF: Haltung = mit(RUECKENLAGE_AUF, { g: { ...B("huefte", [45, 4, 0]), ...B("knie", [105]), ...B("fuss", [-25, 0]) } })
const UMARMEN = { ...B("schulter", [50, 0, -60, -20]), schulter_r: [60, 0, -60, -20], ...B("ellbogen", [120, 80]) }
// Grätschsitz etwas weiter als hüftbreit, Zehen zur Decke (bei gebeugter Hüfte spreizt erst viel Abspreizen das Bein)
const GRAETSCHE: Haltung = mit(LANGSITZ, { g: { ...B("huefte", [65, 76, -80]), ...B("schulter", [0, 88, 0]), ...B("ellbogen", [5, 90]) } })
// Seitsitz für die Meerjungfrau: beide Beine nach links, rechtes Schienbein vorn
const SEITSITZ = { huefte_r: [60, 90, 180], knie_r: [100], fuss_r: [0, 0], huefte_l: [10, 90, 0], knie_l: [100], fuss_l: [-30, 0] }
// Rücken auf dem Gymnastikball, Füße flach am Boden
const BALL_LIEGEN = { ...B("huefte", [10, 6, 0]), ...B("knie", [80]), ...B("fuss", [20, 0]) }
// Rechter Arm unter dem Körper durchgefädelt, Schulter und Schläfe am Boden, Hüfte über den Knien
const FADEN: Haltung = mit(VIERFUESSLER, { dreh: [130, 0, 0], g: { ...B("huefte", [130, 3, 0]), schulter_r: [70, -85, 0], ellbogen_r: [0, -90], bws: [0, 0, 50], hals: [0, 0, 30], schulter_l: [100, 10, 0, -30], ellbogen_l: [90, 0] } })
// Skin the Cat: die Hände bleiben an der Stange (pos so gewählt, dass die Hände auf 2,10 m liegen)
const STC_HAENGEN: Haltung = H({ ...B("schulter", [178, 15, 0]), ...B("ellbogen", [0, 0]) }, undefined, { pos: [0, 1.02, 0.01], boden: false })
const STC_KNIE: Haltung = H({ ...B("schulter", [178, 15, 0]), ...B("huefte", [130, 5, 0]), ...B("knie", [120]) }, undefined, { pos: [0, 1.02, 0.01], boden: false })
const STC_KOPFUEBER: Haltung = H({ ...B("schulter", [10, 15, 0]), ...B("huefte", [130, 5, 0]), ...B("knie", [120]) }, [-180, 0, 0], { pos: [0, 1.98, 0.08], boden: false })
const STC_HINTEN: Haltung = H({ ...B("schulter", [-150, 15, 0]), ...B("huefte", [20, 5, 0]), ...B("knie", [20]), hals: [-20, 0, 0] }, [-330, 0, 0], { pos: [0, 1.06, -0.2], boden: false })
const KROKODIL: Haltung = mit(BAUCHLAGE, { g: { ...B("schulter", [150, -60, -110]), ...B("ellbogen", [130, 90]), hals: [10, 0, 0] } })
const STAND_BREIT = mit(STAND, { g: B("huefte", [0, 9, 0]) })
const KRIEGER: Haltung = mit(AUSFALL, { g: { fuss_r: [10, 0], zehen_r: [0], huefte_r: [-25, 4, -30], ...B("schulter", [175, 8, 0]), ...B("ellbogen", [0, 90]) } })
// Bärenstand: Zehen aufgestellt, Knie schweben knapp über dem Boden
const BAER: Haltung = mit(VIERFUESSLER, { dreh: [95, 0, 0], g: { ...B("fuss", [10, 0]), ...B("zehen", [60]), ...B("schulter", [95, 3, 0]) } })
// Tiefe Hocke mit den Händen vorn am Boden (dort, wo sie im Bärenstand lagen) und aufgerichtet mit gehobenen Händen
const HOCKE_HAENDE: Haltung = mit(HOCKE, { dreh: [50, 0, 0], pos: [0, 0.4, -0.22], g: { ...B("huefte", [150, 18, -15]), lws: [20, 0, 0], bws: [20, 0, 0], hals: [-20, 0, 0], ...B("schulter", [120, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [70, 0]) } })
const HOCKE_AUF: Haltung = mit(HOCKE, { pos: [0, 0.4, -0.22], g: { ...B("schulter", [90, 10, 0]), ...B("ellbogen", [0, 90]) } })
// Vorbeuge mit gebeugten Knien, Hände flach vor den Füßen; pos hält die Füße bei der Raupe an ihrem Platz
const VORBEUGE_BODEN: Haltung = mit(VORBEUGE, { dreh: [90, 0, 0], pos: [0, 0.9, -0.13], g: { ...B("huefte", [130, 2, 0]), ...B("knie", [60]), ...B("fuss", [25, 0]), lws: [25, 0, 0], bws: [20, 0, 0], hals: [15, 0, 0], ...B("schulter", [120, 4, 0]), ...B("hand", [70, 0]) } })

export const RUECKEN: Record<string, Dehnung> = {
  open_book: wdh("schraeg", OB_VORN, mit(SL, { g: { schulter_r: [90, 0, 0, 150], schulter_l: [90, 0, 0, 50], bws: [0, 0, -45], lws: [0, -4, -5], hals: [0, 15, -30] } }), 3, { halten: 2, aus: 3, seiten: true }),
  windmuehle_seitenlage: folge("schraeg", [
    [mit(WM, { g: { schulter_r: [90, 0, 0, -30] } }), 1, "Arm vorn", true],
    [mit(WM, { g: { schulter_r: [170, 30, 0, -30], bws: [0, 0, -10] } }), 2, "Über den Kopf"],
    [mit(WM, { g: { schulter_r: [90, 0, 0, 170], schulter_l: [45, -30, 0, 30], bws: [0, 0, -30], lws: [0, -4, -5], hals: [0, 15, -30] } }), 2.5, "Nach hinten öffnen"],
    [mit(WM, { g: { schulter_r: [10, 0, 0], bws: [0, 0, -10] } }), 2, "Am Körper entlang"],
    [mit(WM, { g: { schulter_r: [90, 0, 0, -30] } }), 2, "Zurück nach vorn"],
  ], { seiten: true }),
  katze_kuh: wdh("seite", KUH, KATZE, 3, { aus: 3 }),
  katze_kuh_segmental: wdh("seite", KUH, KATZE, 5, { aus: 5, hinweis: "Wirbel für Wirbel, vom Becken bis zum Kopf." }),
  bws_rotation_kniend: wdh("schraeg", mit(VIERFUESSLER, { g: { ...HAND_AM_KOPF, bws: [0, 0, 10], schulter_l: [90, 15, 0] } }), mit(VIERFUESSLER, { g: { ...HAND_AM_KOPF, bws: [0, 0, -45], hals: [0, 0, -20], schulter_l: [80, 20, 0, 50], ellbogen_l: [70, 0] } }), 2.5, { halten: 1, seiten: true }),
  bws_rotation_lendenfixiert: wdh("schraeg", mit(FERSENSITZ, { dreh: [80, 0, 0], g: { ...B("huefte", [155, 10, 0]), schulter_l: [80, 10, 0], ellbogen_l: [90, 90], ...HAND_AM_KOPF, bws: [0, 0, 10] } }), mit(FERSENSITZ, { dreh: [62, 0, 0], g: { ...B("huefte", [137, 10, 0]), schulter_l: [60, 10, 0, 30], ellbogen_l: [90, 90], ...HAND_AM_KOPF, bws: [0, 0, -35], hals: [0, 0, -20] } }), 2.5, { halten: 1, seiten: true, hinweis: "Gesäß auf den Fersen, so bleibt die Lendenwirbelsäule ruhig." }),
  faden_einfaedeln: wdh("schraeg", mit(VIERFUESSLER, { g: { schulter_r: [10, 88, 0], ellbogen_r: [0, 0], bws: [0, 0, -40], hals: [0, 0, -25], schulter_l: [70, 0, 0, 40], ellbogen_l: [70, 0] } }), FADEN, 2.5, { halten: 1, seiten: true }),
  faden_einfaedeln_halten: halte("schraeg", VIERFUESSLER, FADEN, { seiten: true }),
  bws_rotation_sitzend_stab: folge("oben", [
    [STAB_SITZ, 1, "Aufrecht sitzen", true],
    [mit(STAB_SITZ, { g: { bws: [0, 0, 40], lws: [0, 0, 8], hals: [0, 0, 10] } }), 2.5, "Nach links drehen"],
    [mit(STAB_SITZ, { g: { bws: [0, 0, 40], lws: [0, 0, 8], hals: [0, 0, 10] } }), 1, "Halten", true],
    [STAB_SITZ, 2.5, "Zur Mitte"],
    [mit(STAB_SITZ, { g: { bws: [0, 0, -40], lws: [0, 0, -8], hals: [0, 0, -10] } }), 2.5, "Nach rechts drehen"],
    [mit(STAB_SITZ, { g: { bws: [0, 0, -40], lws: [0, 0, -8], hals: [0, 0, -10] } }), 1, "Halten", true],
    [STAB_SITZ, 2.5, "Zur Mitte"],
  ], { hilfsmittel: [{ art: "bank", unter: "gesaess", hoehe: 0.45 }, { art: "stab", von: "hand_l", bis: "hand_r" }] }),
  bws_rotation_halbkniend: wdh("oben", mit(HALBKNIESTAND, { g: ARME_T }), mit(HALBKNIESTAND, { g: { ...ARME_T, bws: [0, 0, -45], lws: [0, 0, -10], hals: [0, 0, -15] } }), 2.5, { halten: 1, seiten: true }),
  drehsitz: halte("schraeg", mit(LANGSITZ, { g: { huefte_r: [125, -20, -30], knie_r: [130], fuss_r: [10, 0], schulter_r: [-20, 20, 0], ellbogen_r: [0, 90] } }), mit(LANGSITZ, { g: { huefte_r: [125, -20, -30], knie_r: [130], fuss_r: [10, 0], lws: [10, 0, -20], bws: [0, 0, -65], hals: [0, 0, -25], schulter_r: [-20, 20, 0], ellbogen_r: [0, 90], schulter_l: [55, -50, 0, 60], ellbogen_l: [90, 0] } }), { seiten: true }),
  bretzel: halte("schraeg", SL, mit(SEITLAGE, { dreh: [0, 30, 90], g: { huefte_r: [110, 20, 0], knie_r: [90], huefte_l: [-15, 30, 0], knie_l: [130], lws: [0, 0, -25], bws: [0, 0, -40], hals: [0, 10, -30], schulter_l: [40, -20, 0, 60], ellbogen_l: [10, 90], schulter_r: [-40, 0, 0, -30], ellbogen_r: [20, 90] } }), { seiten: true }),
  bws_extension_rolle: wdh("seite", mit(AUF, { dreh: [-82, 0, 0], g: { ...B("huefte", [55, 4, 0]), ...B("schulter", [150, 55, 60]), ...B("ellbogen", [125, 0]), lws: [30, 0, 0], bws: [-10, 0, 0], hals: [25, 0, 0] } }), mit(AUF, { dreh: [-82, 0, 0], g: { ...B("huefte", [55, 4, 0]), ...B("schulter", [150, 55, 60]), ...B("ellbogen", [125, 0]), lws: [30, 0, 0], bws: [-30, 0, 0], hals: [0, 0, 0] } }), 3, { halten: 2, hilfsmittel: [{ art: "rolle", unter: "bws" }] }),
  bws_ausrollen: wdh("seite", mit(RUECKENLAGE_AUF, { dreh: [-95, 0, 0], pos: [0, 0.3, 0.18], g: { ...UMARMEN, ...B("huefte", [15, 4, 0]), ...B("knie", [90]), ...B("fuss", [-10, 0]), hals: [25, 0, 0] } }), mit(RUECKENLAGE_AUF, { dreh: [-95, 0, 0], g: { ...UMARMEN, ...B("huefte", [0, 4, 0]), ...B("knie", [50]), ...B("fuss", [-30, 0]), hals: [25, 0, 0] } }), 3, { hilfsmittel: [{ art: "rolle", unter: "bws" }], hinweis: "Gesäß angehoben, die Beine schieben den Körper über die Rolle." }),
  bank_gebetsdehnung: halte("seite", KNIESTAND, mit(KNIESTAND, { dreh: [90, 0, 0], pos: [0, 0.5, -0.29], g: { ...B("huefte", [135, 5, 0]), ...B("knie", [140]), ...B("fuss", [-85, 0]), lws: [-6, 0, 0], bws: [-10, 0, 0], hals: [-15, 0, 0], ...B("schulter", [165, 12, 0]), ...B("ellbogen", [140, 90]) } }), { hilfsmittel: [{ art: "box", unter: "kopf", hoehe: 0.45 }] }),
  kindhaltung: halte("seite", VIERFUESSLER, KINDHALTUNG),
  kindhaltung_seitlich: halte("schraeg", KINDHALTUNG, mit(KINDHALTUNG, { g: { schulter_l: [178, -5, 0], schulter_r: [178, 30, 0], bws: [10, -22, 0], lws: [15, -10, 0] } })),
  pilates_saege: folge("schraeg", [
    [GRAETSCHE, 1, "Grätsche, Arme seitlich", true],
    [mit(GRAETSCHE, { g: { bws: [0, 0, -40], lws: [0, 0, -10] } }), 2, "Nach rechts drehen"],
    [mit(GRAETSCHE, { dreh: [25, 0, 0], g: { ...B("huefte", [60, 125, -125]), lws: [15, 0, -15], bws: [15, 0, -45], hals: [10, 0, -10], schulter_l: [115, -30, 0], ellbogen_l: [0, 0], schulter_r: [-40, 70, 0], ellbogen_r: [0, 0] } }), 2.5, "Links zum rechten kleinen Zeh sägen"],
    [mit(GRAETSCHE, { g: { bws: [0, 0, -40], lws: [0, 0, -10] } }), 2.5, "Aufrichten"],
    [GRAETSCHE, 2, "Zur Mitte"],
    [mit(GRAETSCHE, { g: { bws: [0, 0, 40], lws: [0, 0, 10] } }), 2, "Nach links drehen"],
    [mit(GRAETSCHE, { dreh: [25, 0, 0], g: { ...B("huefte", [60, 125, -125]), lws: [15, 0, 15], bws: [15, 0, 45], hals: [10, 0, 10], schulter_r: [115, -30, 0], ellbogen_r: [0, 0], schulter_l: [-40, 70, 0], ellbogen_l: [0, 0] } }), 2.5, "Rechts zum linken kleinen Zeh sägen"],
    [mit(GRAETSCHE, { g: { bws: [0, 0, 40], lws: [0, 0, 10] } }), 2.5, "Aufrichten"],
    [GRAETSCHE, 2, "Zur Mitte"],
  ]),
  meerjungfrau: folge("vorn", [
    [H({ ...SEITSITZ, schulter_l: [170, 10, 0], ellbogen_l: [10, 0], schulter_r: [20, 20, 0], ellbogen_r: [15, 0] }), 1.5, "Rechte Hand am Boden, linker Arm hoch", true],
    [H({ ...SEITSITZ, schulter_l: [170, 10, 0], ellbogen_l: [10, 0], schulter_r: [15, 65, 0], ellbogen_r: [20, 0], lws: [0, -15, 0], bws: [0, -15, 0], hals: [0, -10, 0] }), 3, "Nach rechts neigen"],
    [H({ ...SEITSITZ, schulter_l: [170, 10, 0], ellbogen_l: [10, 0], schulter_r: [20, 20, 0], ellbogen_r: [15, 0] }), 2.5, "Aufrichten"],
    [H({ ...SEITSITZ, schulter_r: [170, 10, 0], ellbogen_r: [10, 0], schulter_l: [-20, 60, 0], ellbogen_l: [40, 0], lws: [0, 10, 0], bws: [0, 10, 0], hals: [0, 10, 0] }), 3, "Nach links neigen"],
    [H({ ...SEITSITZ, schulter_l: [170, 10, 0], ellbogen_l: [10, 0], schulter_r: [20, 20, 0], ellbogen_r: [15, 0] }), 2.5, "Aufrichten"],
  ], { seiten: true }),
  bws_extension_ball: halte("seite", H({ ...BALL_LIEGEN, ...B("schulter", [90, 10, 0]), lws: [-10, 0, 0], bws: [-5, 0, 0] }, [-55, 0, 0]), H({ ...BALL_LIEGEN, ...B("schulter", [175, 15, 0]), ...B("ellbogen", [0, 90]), lws: [-10, 0, 0], bws: [-25, 0, 0], hals: [-25, 0, 0] }, [-55, 0, 0]), { hilfsmittel: [{ art: "ball", unter: "bws" }] }),
  rumpfrotation_stehend: wdh("vorn", mit(STAND_BREIT, { g: { ...B("schulter", [15, 25, 0]), ...B("ellbogen", [30, 0]), bws: [0, 0, -40], lws: [0, 0, -12] } }), mit(STAND_BREIT, { g: { ...B("schulter", [15, 25, 0]), ...B("ellbogen", [30, 0]), bws: [0, 0, 40], lws: [0, 0, 12] } }), 1.2, { aus: 1.2 }),
  sonnengruss: folge("seite", [
    [STAND, 1.5, "Stand, einatmen", true],
    [ARME_HOCH, 2.5, "Arme hoch, einatmen"],
    [VORBEUGE_BODEN, 3, "Vorbeuge, ausatmen"],
    [HALB_HOCH, 2, "Halb aufrichten, einatmen"],
    [PLANK, 2.5, "Zurück in den Stütz"],
    [CHATURANGA, 2, "Tief, ausatmen"],
    [HUND_HOCH, 2.5, "Heraufschauender Hund, einatmen"],
    [HUND, 2.5, "Herabschauender Hund, ausatmen"],
    [HUND, 6, "Drei Atemzüge", true],
    [VORBEUGE_BODEN, 3, "Nach vorn kommen"],
    [ARME_HOCH, 3, "Aufrollen, Arme hoch"],
    [STAND, 2, "Stand"],
  ]),
  sonnengruss_b: folge("seite", [
    [STAND, 1.5, "Stand", true],
    [STUHL_HALTUNG, 2.5, "Stuhlhaltung, einatmen"],
    [VORBEUGE_BODEN, 3, "Vorbeuge, ausatmen"],
    [PLANK, 2.5, "Zurück in den Stütz"],
    [CHATURANGA, 2, "Tief"],
    [HUND_HOCH, 2.5, "Heraufschauender Hund"],
    [HUND, 2.5, "Herabschauender Hund"],
    [KRIEGER, 3, "Krieger I, links vorn"],
    [HUND, 3, "Zurück in den Hund"],
    [VORBEUGE_BODEN, 3, "Nach vorn kommen"],
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
    [VORBEUGE_BODEN, 2.5, "Hände zum Boden"],
    [mit(HUND, { pos: [0, 0.9, 0.56] }), 3, "Hände nach vorn laufen"],
    [mit(PLANK, { pos: [0, 0.9, 0.95] }), 2, "Bis in den Stütz"],
    [mit(PLANK, { pos: [0, 0.9, 0.95] }), 1, "Kurz halten", true],
    [mit(HUND, { pos: [0, 0.9, 0.56] }), 2, "Füße zu den Händen"],
    [VORBEUGE_BODEN, 3, "Hände laufen zurück"],
    [STAND, 2.5, "Aufrollen"],
  ]),
  baer_hocke_flow: folge("seite", [
    [BAER, 1.5, "Bärenstand, Knie schweben", true],
    [HOCKE_HAENDE, 3, "Gesäß zu den Fersen, Hände bleiben am Boden"],
    [HOCKE_AUF, 2, "Aufrichten, Hände heben"],
    [HOCKE_AUF, 1.5, "Halten", true],
    [HOCKE_HAENDE, 2, "Hände absetzen"],
    [BAER, 3, "Zurück in den Bärenstand"],
  ]),
  skorpion: wdh("oben", mit(BAUCHLAGE, { g: { ...ARME_T_BAUCH, hals: [0, 0, 30] } }), mit(BAUCHLAGE, { dreh: [90, -45, 0], g: { ...ARME_T_BAUCH, huefte_r: [-20, -45, 0], knie_r: [90], lws: [0, 0, 30], bws: [0, 0, 15], hals: [0, 0, 30] } }), 3, { halten: 1, seiten: true }),
  kobra: halte("seite", BAUCH_HAENDE, mit(BAUCHLAGE, { dreh: [86, 0, 0], g: { ...B("schulter", [15, 25, -40]), ...B("ellbogen", [50, 90]), ...B("hand", [80, 0]), lws: [-38, 0, 0], bws: [-18, 0, 0], hals: [-12, 0, 0] } })),
  sphinx: halte("seite", KROKODIL, mit(BAUCHLAGE, { dreh: [85, 0, 0], g: { ...B("schulter", [55, 15, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), lws: [-22, 0, 0], bws: [-12, 0, 0], hals: [-10, 0, 0] } })),
  welpe: halte("seite", VIERFUESSLER, mit(VIERFUESSLER, { dreh: [145, 0, 0], g: { ...B("huefte", [145, 3, 0]), ...B("schulter", [190, 10, 0]), ...B("hand", [15, 0]), lws: [-10, 0, 0], bws: [-10, 0, 0], hals: [10, 0, 0] } })),
  seitbeuge_stehend: halte("vorn", STAND_BREIT, mit(STAND_BREIT, { g: { schulter_l: [170, 12, 0], ellbogen_l: [10, 0], schulter_r: [0, 10, 0], bws: [0, -25, 0], lws: [0, -10, 0] } }), { seiten: true }),
  seitdehnung_stange: halte("vorn", STAND, mit(STAND, { g: { huefte_l: [0, 8, 0], huefte_r: [-12, -18, 0], lws: [0, 15, 0], bws: [0, 15, 0], schulter_l: [130, 10, 0, 60], ellbogen_l: [15, 0], schulter_r: [120, 10, 0, -80], ellbogen_r: [0, 0] } }), { seiten: true, hilfsmittel: [{ art: "tuer", an: "haende" }], hinweis: "Rechtes Bein hinter dem linken, die rechte Hüfte schiebt vom Pfosten weg." }),
  rueckenlage_drehdehnung: halte("oben", mit(RUECKENLAGE, { g: { ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...ARME_T_RUECKEN } }), mit(RUECKENLAGE, { dreh: [-90, -80, 0], g: { ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...ARME_T_RUECKEN, lws: [0, 0, 45], bws: [0, 0, 35], hals: [0, 0, 25] } }), { seiten: true }),
  scheibenwischer: wdh("oben", mit(RUECKENLAGE, { dreh: [-90, 20, 0], g: { huefte_l: [60, 35, 30], huefte_r: [60, -35, -30], ...B("knie", [90]), ...B("schulter", [-9, 60, 0]), lws: [0, 0, -20] } }), mit(RUECKENLAGE, { dreh: [-90, -20, 0], g: { huefte_l: [60, -35, -30], huefte_r: [60, 35, 30], ...B("knie", [90]), ...B("schulter", [-9, 60, 0]), lws: [0, 0, 20] } }), 3, { aus: 3 }),
  knie_zur_brust: halte("seite", AUF, mit(RUECKENLAGE, { g: { ...B("huefte", [125, 8, 0]), ...B("knie", [125]), ...B("schulter", [30, -5, 0]), ...B("ellbogen", [20, 0]), hals: [15, 0, 0] } })),
  krokodilatmung: halte("schraeg", KROKODIL, mit(KROKODIL, { g: { lws: [3, 0, 0], bws: [3, 0, 0] } }), { hinweis: "In den Bauch und die Flanken atmen, der Rücken hebt sich leicht." }),
  atmung_9090: halte("seite", mit(RUECKENLAGE, { g: { ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...HAENDE_RIPPEN } }), mit(RUECKENLAGE, { g: { ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...HAENDE_RIPPEN, lws: [8, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "fuss_l", richtung: "vorn" }], hinweis: "Fersen an die Wand drücken, ruhig ausatmen." }),
  mckenzie_liegestuetz: wdh("seite", BAUCH_HAENDE, mit(BAUCHLAGE, { dreh: [84, 0, 0], g: { ...B("schulter", [10, 25, -40]), ...B("ellbogen", [20, 90]), ...B("hand", [80, 0]), lws: [-48, 0, 0], bws: [-26, 0, 0], hals: [-10, 0, 0] } }), 2.5, { halten: 2, aus: 2.5 }),
  rueckstreckung_stehend: wdh("seite", mit(STAND, { g: { ...B("schulter", [-40, 25, -40]), ...B("ellbogen", [100, 0]) } }), mit(STAND, { dreh: [-5, 0, 0], g: { ...B("schulter", [-40, 25, -40]), ...B("ellbogen", [100, 0]), lws: [-22, 0, 0], bws: [-10, 0, 0], hals: [-10, 0, 0] } }), 2, { halten: 2 }),
  banane: halte("oben", mit(RUECKENLAGE, { g: ARME_UEBER_KOPF }), mit(RUECKENLAGE, { g: { ...ARME_UEBER_KOPF, lws: [0, -14, 0], bws: [0, -14, 0], huefte_l: [0, -12, 0], huefte_r: [0, 10, 0] } }), { seiten: true }),
  tor_haltung: halte("vorn", mit(KNIESTAND, { g: { huefte_r: [0, 55, 0], knie_r: [0], fuss_r: [-30, 0] } }), mit(KNIESTAND, { g: { huefte_r: [0, 55, 0], knie_r: [0], fuss_r: [-30, 0], schulter_l: [170, 15, 0], ellbogen_l: [10, 0], schulter_r: [5, 30, 0], bws: [0, -28, 0], lws: [0, -12, 0] } }), { seiten: true }),
  stoffpuppe: wdh("seite", mit(VORBEUGE, { g: { ...B("knie", [25]), ...B("huefte", [85, 2, 0]), ...B("schulter", [120, -20, -50]), ...B("ellbogen", [100, 80]), bws: [18, -8, 0] } }), mit(VORBEUGE, { g: { ...B("knie", [25]), ...B("huefte", [85, 2, 0]), ...B("schulter", [120, -20, -50]), ...B("ellbogen", [100, 80]), bws: [18, 8, 0] } }), 2.5),
  roll_down: wdh("seite", STAND, VORBEUGE, 5, { halten: 2, aus: 5, hinweis: "Langsam abrollen, Wirbel für Wirbel wieder aufrollen." }),
  bruecke_rad: halte("seite", mit(AUF, { g: { ...B("schulter", [175, 25, 0]), ...B("ellbogen", [140, 90]) } }), H({ ...B("huefte", [-10, 8, 0]), ...B("knie", [60]), ...B("fuss", [10, 0]), ...B("schulter", [170, 15, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), lws: [-45, 0, 0], bws: [-45, 0, 0], hals: [-25, 0, 0] }, [-60, 0, 0])),
  kamel: halte("seite", KNIESTAND, mit(KNIESTAND, { dreh: [-10, 0, 0], g: { ...B("huefte", [-15, 5, 0]), ...B("schulter", [-85, 15, 0]), ...B("ellbogen", [0, 0]), lws: [-35, 0, 0], bws: [-30, 0, 0], hals: [-30, 0, 0] } })),
  // Becken und Beine bleiben liegen, die Unterarme stützen, die Brust hebt sich, der Scheitel berührt den Boden leicht
  fisch: halte("seite", mit(RUECKENLAGE, { g: { ...B("schulter", [-5, 10, 0]), ...B("ellbogen", [0, 0]) } }), mit(RUECKENLAGE, { g: { lws: [38, 0, 0], bws: [-14, 0, 0], hals: [-48, 0, 0], kopf: [-12], ...B("schulter", [-62, 12, 0]), ...B("ellbogen", [92, 0]), ...B("hand", [0, 0]) } })),
  ball_seitdehnung: halte("vorn", H({ huefte_l: [15, 55, 0], huefte_r: [-15, -75, 0], ...B("knie", [5]), schulter_r: [60, 0, 0], schulter_l: [60, 0, 0] }, [0, 0, 90], { pos: [0, 0.72, 0], boden: false }), H({ huefte_l: [15, 55, 0], huefte_r: [-15, -75, 0], ...B("knie", [5]), lws: [0, 12, 0], bws: [0, 15, 0], schulter_r: [175, 10, 0], schulter_l: [60, 0, 0], hals: [0, 10, 0] }, [0, 0, 90], { pos: [0, 0.72, 0], boden: false }), { seiten: true, hilfsmittel: [{ art: "ball", unter: "ruecken" }] }),
  skin_the_cat: folge("seite", [
    [STC_HAENGEN, 1.5, "Hängen", true],
    [STC_KNIE, 2.5, "Knie zur Brust"],
    [STC_KOPFUEBER, 3, "Beine zwischen den Armen durch"],
    [STC_HINTEN, 3, "Weiter durchdrehen, Schultern dehnen"],
    [STC_HINTEN, 2, "Halten", true],
    [STC_KOPFUEBER, 3, "Langsam zurück"],
    [STC_KNIE, 2.5, "Knie zur Brust"],
    [STC_HAENGEN, 2, "Hängen"],
  ], { hilfsmittel: [{ art: "stange", an: "haende" }] }),
}
