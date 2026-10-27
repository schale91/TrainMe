// Schulter, Nacken, Handgelenk und Finger. Dynamische Schulterübungen im Tempo der Anleitung: Armkreisen etwa 1,6 s
// je Kreis, kontrollierte Kreise (CARs) 8 bis 10 s, Gleiten an der Wand 2 bis 3 s je Richtung.

import type { Dehnung, Haltung } from "../../logik/dehnbewegung"
import { B, BAUCHLAGE, H, KNIESTAND, LANGSITZ, RUECKENLAGE_AUF, SEITLAGE, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, pnf, wdh } from "./basis"

const SITZ = mit(STUHLSITZ, { g: { ...B("schulter", [10, 8, 0]), ...B("ellbogen", [60, 60]) } })
const SITZ_HILFE = [{ art: "bank" as const, unter: "gesaess" as const, hoehe: 0.42 }]
const HAND_AUF_KOPF_R = { schulter_r: [150, 50, 30], ellbogen_r: [130, 0] }
const STAND_W = mit(STAND, { g: B("huefte", [0, 7, 0]) })

// Türrahmen: Unterarm am Rahmen, Körper dreht weg
const tuer = (abd: number, ell: number, aussen: number): Dehnung =>
  halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, abd, aussen], ellbogen_l: [ell, 0] } }), mit(STAND_W, { g: { schulter_l: [0, abd, aussen, 25], ellbogen_l: [ell, 0], bws: [0, 0, -25], lws: [0, 0, -8], huefte_l: [12, 4, 0], knie_l: [10] } }), { hilfsmittel: [{ art: "tuer", an: "unterarm_l" }] })

// Latissimus an Wand oder Stange: Hüfte nach hinten, Brust sinkt
const LAT: Haltung = mit(STAND_W, { dreh: [88, 0, 0], g: { ...B("huefte", [88, 7, 0]), ...B("schulter", [172, 12, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [60, 0]), bws: [-12, 0, 0], hals: [-5, 0, 0] } })
const LAT_START: Haltung = mit(STAND_W, { dreh: [30, 0, 0], g: { ...B("huefte", [30, 7, 0]), ...B("schulter", [120, 12, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [60, 0]) } })

// Arm über Kopf in Seitlage auf der Rolle (Ausrollen)
const ROLLE_SEITE = (wo: "schulter_l" | "ellbogen_l"): Dehnung =>
  wdh("schraeg", mit(SEITLAGE, { g: { schulter_l: [175, 0, 0], ...B("huefte", [30, 0, 0]), ...B("knie", [60]) } }), mit(SEITLAGE, { g: { schulter_l: [165, 0, 0], ...B("huefte", [45, 0, 0]), ...B("knie", [80]) } }), 2.5, { hilfsmittel: [{ art: "rolle", unter: wo }] })

const WAND_W = mit(STAND_W, { g: { ...B("schulter", [0, 85, 85]), ...B("ellbogen", [90, 0]) } })
const WAND_Y = mit(STAND_W, { g: { ...B("schulter", [0, 160, 85]), ...B("ellbogen", [25, 0]) } })
const UNTERARME_WAND = mit(STAND_W, { g: { ...B("schulter", [90, 10, 0]), ...B("ellbogen", [90, 90]) } })
const UNTERARME_HOCH = mit(STAND_W, { g: { ...B("schulter", [160, 15, 0]), ...B("ellbogen", [25, 90]) } })

const NACKEN = (hals: number[], hand = true): Dehnung =>
  halte("vorn", SITZ, mit(SITZ, { g: { hals, ...(hand ? HAND_AUF_KOPF_R : {}), schulter_l: [-5, 12, 0], ellbogen_l: [5, 0] } }), { hilfsmittel: SITZ_HILFE })

const UNTERARM_VORN = { schulter_l: [80, 5, 0], ellbogen_l: [0, 0] }
const ANDERE_HAND_ZIEHT = { schulter_r: [70, -10, 0, -25], ellbogen_r: [70, 0] }
const HAENDE_VORN = { ...B("schulter", [40, 10, 0]), ...B("ellbogen", [80, 90]) }

export const SCHULTER: Record<string, Dehnung> = {
  // ---------- Brust
  brust_dehnen: tuer(90, 90, 85),
  brust_dehnen_hoch: tuer(130, 90, 85),
  brust_dehnen_tief: tuer(60, 15, 20),
  brust_dehnen_pnf: pnf("schraeg", mit(STAND_W, { g: { schulter_l: [0, 90, 85], ellbogen_l: [90, 0] } }), mit(STAND_W, { g: { schulter_l: [0, 90, 85, 20], ellbogen_l: [90, 0], bws: [0, 0, -20] } }), mit(STAND_W, { g: { schulter_l: [0, 90, 85, 32], ellbogen_l: [90, 0], bws: [0, 0, -30] } }), { hilfsmittel: [{ art: "tuer", an: "unterarm_l" }] }),
  brust_dehnen_boden: halte("schraeg", mit(BAUCHLAGE, { g: { schulter_l: [0, 90, 0], ellbogen_l: [5, 0], schulter_r: [30, 30, 0], ellbogen_r: [110, 90] } }), mit(BAUCHLAGE, { dreh: [90, 0, -40], g: { schulter_l: [0, 90, 0], ellbogen_l: [5, 0], schulter_r: [30, 30, 0], ellbogen_r: [80, 90], huefte_r: [40, 0, 0], knie_r: [90], hals: [0, 0, -20] } })),
  brustoeffner_rolle: halte("schraeg", mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [20, 30, 0]) } }), mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [10, 80, 60]), ...B("ellbogen", [20, 0]) } }), { hilfsmittel: [{ art: "rolle", unter: "ruecken", laengs: true }] }),
  haende_verschraenkt_ruecken: halte("seite", mit(STAND_W, { g: { ...B("schulter", [-30, -8, 0]), ...B("ellbogen", [5, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [-60, -10, 0]), ...B("ellbogen", [0, 0]), bws: [-12, 0, 0], ...B("schulterblatt", [0, -15]) } })),
  brust_dehnen_schlingentrainer: halte("seite", STAND_W, mit(STAND_W, { dreh: [20, 0, 0], g: { ...B("huefte", [5, 7, 0]), ...B("schulter", [0, 90, 20, 25]), ...B("ellbogen", [10, 0]), bws: [-8, 0, 0] } })),
  // ---------- Latissimus
  lat_dehnen_wand: halte("seite", LAT_START, LAT, { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  lat_dehnen_bank_kniend: halte("seite", KNIESTAND, mit(KNIESTAND, { dreh: [80, 0, 0], g: { ...B("huefte", [95, 5, 0]), schulter_l: [178, 12, 60], ellbogen_l: [10, 0], schulter_r: [90, 10, 0], ellbogen_r: [0, 90], hand_r: [80, 0], bws: [-10, 0, 20] } }), { hilfsmittel: [{ art: "bank", unter: "ellbogen_l", hoehe: 0.45 }] }),
  lat_dehnen_band: halte("seite", LAT_START, mit(LAT, { g: { schulter_r: [60, 10, 0], ellbogen_r: [30, 0], bws: [0, -10, 0] } })),
  lat_dehnen_ball: halte("seite", mit(KNIESTAND, { dreh: [40, 0, 0], g: { ...B("huefte", [40, 5, 0]), ...B("schulter", [120, 10, 0]) } }), mit(KNIESTAND, { dreh: [80, 0, 0], g: { ...B("huefte", [80, 5, 0]), ...B("schulter", [175, 10, 0]), ...B("ellbogen", [0, 90]), bws: [-12, 0, 0] } }), { hilfsmittel: [{ art: "ball", unter: "haende" }] }),
  lat_dehnen_pnf: pnf("seite", LAT_START, LAT, mit(LAT, { g: { bws: [-20, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  lat_dehnen_schlingentrainer: halte("seite", LAT_START, LAT),
  lat_ausrollen: ROLLE_SEITE("schulter_l"),
  brust_ausrollen: wdh("schraeg", mit(BAUCHLAGE, { g: { schulter_l: [0, 90, 0], ellbogen_l: [5, 0], schulter_r: [30, 25, 0], ellbogen_r: [100, 90] } }), mit(BAUCHLAGE, { g: { schulter_l: [0, 110, 0], ellbogen_l: [5, 0], schulter_r: [30, 25, 0], ellbogen_r: [80, 90] } }), 2.5, { hilfsmittel: [{ art: "rolle", unter: "schulter_l", laengs: true }] }),
  trizeps_ausrollen: ROLLE_SEITE("ellbogen_l"),
  // ---------- Rotation und Kapsel
  schulterpassen: folge("vorn", [
    [mit(STAND_W, { g: { ...B("schulter", [10, 35, 0]), ...B("ellbogen", [0, 90]) } }), 1, "Stab vor dem Körper", true],
    [mit(STAND_W, { g: { ...B("schulter", [175, 40, 0]), ...B("ellbogen", [0, 90]) } }), 2.5, "Über den Kopf"],
    [mit(STAND_W, { g: { ...B("schulter", [200, 45, 0]), ...B("ellbogen", [0, 90]) } }), 2, "Hinter den Körper"],
    [mit(STAND_W, { g: { ...B("schulter", [175, 40, 0]), ...B("ellbogen", [0, 90]) } }), 2, "Zurück nach oben"],
    [mit(STAND_W, { g: { ...B("schulter", [10, 35, 0]), ...B("ellbogen", [0, 90]) } }), 2.5, "Nach vorn"],
  ], { hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  sleeper_stretch: halte("schraeg", mit(SEITLAGE, { g: { schulter_l: [90, 0, 0], ellbogen_l: [90, 0], schulter_r: [60, 0, 0], ellbogen_r: [90, 0] } }), mit(SEITLAGE, { g: { schulter_l: [90, 0, -55], ellbogen_l: [90, 0], schulter_r: [55, -10, 0], ellbogen_r: [70, 0] } })),
  innenrotation_rueckenlage: halte("schraeg", mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 90, 0], ellbogen_l: [90, 0] } }), mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 90, -60], ellbogen_l: [90, 0], schulter_r: [40, -10, 0], ellbogen_r: [60, 0] } })),
  querdehnung: halte("vorn", STAND_W, mit(STAND_W, { g: { schulter_l: [90, 0, 0, -45], ellbogen_l: [5, 0], schulter_r: [75, 0, 0, -15], ellbogen_r: [95, 0] } })),
  querdehnung_wand: halte("vorn", STAND_W, mit(STAND_W, { g: { schulter_l: [90, 0, 0, -45], ellbogen_l: [5, 0], schulter_r: [75, 0, 0, -15], ellbogen_r: [95, 0], bws: [0, 0, 10] } }), { hilfsmittel: [{ art: "wand", an: "schulter_r", richtung: "rechts" }] }),
  handtuch_innenrotation: wdh("hinten", STAND_W, mit(STAND_W, { g: { schulter_r: [165, 15, 70], ellbogen_r: [120, 0], schulter_l: [-30, 25, -80], ellbogen_l: [120, 0] } }), 3, { halten: 3, hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] }),
  kuhgesicht_arme: halte("hinten", STAND_W, mit(STAND_W, { g: { schulter_l: [170, 10, 70], ellbogen_l: [150, 0], schulter_r: [-35, 30, -80], ellbogen_r: [125, 0] } })),
  aussenrotation_stab: halte("schraeg", mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 12, 0], ellbogen_l: [90, 0], schulter_r: [30, -10, 0], ellbogen_r: [80, 0] } }), mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 15, 65], ellbogen_l: [90, 0], schulter_r: [40, -15, 0], ellbogen_r: [70, 0] } }), { hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  aussenrotation_tuer: halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, 10, 20], ellbogen_l: [90, 0] } }), mit(STAND_W, { g: { schulter_l: [0, 10, 55], ellbogen_l: [90, 0], bws: [0, 0, -25] } }), { hilfsmittel: [{ art: "tuer", an: "hand_l" }] }),
  schulter_cars: folge("schraeg", [
    [mit(STAND_W, { g: { schulter_l: [0, 8, 0] } }), 1, "Arm unten", true],
    [mit(STAND_W, { g: { schulter_l: [90, 0, 0] } }), 2, "Nach vorn"],
    [mit(STAND_W, { g: { schulter_l: [178, 10, 40] } }), 2.5, "Nach oben, Daumen nach hinten"],
    [mit(STAND_W, { g: { schulter_l: [90, 90, 60, 40] } }), 2.5, "Seitlich nach hinten"],
    [mit(STAND_W, { g: { schulter_l: [-40, 15, -60] } }), 2.5, "Hinter den Rücken"],
    [mit(STAND_W, { g: { schulter_l: [0, 8, 0] } }), 1.5, "Zurück"],
  ], { hinweis: "Langsam und mit Spannung, der Rumpf bleibt ruhig." }),
  armkreisen: folge("seite", [
    [mit(STAND_W, { g: B("schulter", [0, 15, 0]) }), 0.4],
    [mit(STAND_W, { g: B("schulter", [90, 15, 0]) }), 0.4],
    [mit(STAND_W, { g: B("schulter", [180, 15, 0]) }), 0.4],
    [mit(STAND_W, { g: B("schulter", [270, 15, 0]) }), 0.4],
    [mit(STAND_W, { g: B("schulter", [360, 15, 0]) }), 0.4],
  ]),
  armschwingen: wdh("vorn", mit(STAND_W, { g: { ...B("schulter", [90, 0, 0, -25]), ...B("ellbogen", [5, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [90, 0, 0, 95]), ...B("ellbogen", [5, 0]) } }), 0.8),
  schulterblattkreisen: folge("seite", [
    [STAND_W, 0.6],
    [mit(STAND_W, { g: B("schulterblatt", [18, 0]) }), 0.6],
    [mit(STAND_W, { g: B("schulterblatt", [8, -15]) }), 0.6],
    [mit(STAND_W, { g: B("schulterblatt", [-8, 0]) }), 0.6],
    [mit(STAND_W, { g: B("schulterblatt", [5, 15]) }), 0.6],
    [STAND_W, 0.6],
  ]),
  wandengel: wdh("vorn", WAND_W, WAND_Y, 2.5, { aus: 2.5, hilfsmittel: [{ art: "wand", an: "bws", richtung: "hinten" }] }),
  bodenengel: wdh("oben", mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [0, 85, 85]), ...B("ellbogen", [90, 0]) } }), mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [0, 160, 85]), ...B("ellbogen", [25, 0]) } }), 2.5, { aus: 2.5 }),
  wandgleiten_mobil: wdh("seite", UNTERARME_WAND, UNTERARME_HOCH, 2.5, { aus: 2.5, hilfsmittel: [{ art: "wand", an: "unterarm_l", richtung: "vorn" }] }),
  wall_slide_abheben: folge("seite", [[UNTERARME_WAND, 1, "Unterarme an der Wand", true], [UNTERARME_HOCH, 2.5, "Nach oben gleiten"], [mit(UNTERARME_HOCH, { g: B("schulter", [172, 15, 0]) }), 1.5, "Kurz abheben"], [UNTERARME_HOCH, 1, "Zurück an die Wand"], [UNTERARME_WAND, 2.5, "Nach unten gleiten"]], { hilfsmittel: [{ art: "wand", an: "unterarm_l", richtung: "vorn" }] }),
  wall_slide_rolle: wdh("seite", UNTERARME_WAND, UNTERARME_HOCH, 2.5, { aus: 2.5, hilfsmittel: [{ art: "wand", an: "unterarm_l", richtung: "vorn" }] }),
  ueberkopf_wand: halte("seite", mit(STAND_W, { g: B("schulter", [150, 12, 0]) }), mit(STAND_W, { dreh: [12, 0, 0], g: { ...B("huefte", [12, 7, 0]), ...B("schulter", [185, 12, 0]), ...B("ellbogen", [0, 90]), bws: [-18, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  fingerlaufen_wand: wdh("seite", mit(STAND_W, { g: { schulter_l: [70, 5, 0], ellbogen_l: [10, 90] } }), mit(STAND_W, { g: { schulter_l: [160, 8, 0], ellbogen_l: [5, 90] } }), 6, { halten: 2, aus: 3, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }], hinweis: "Mit den Fingern langsam die Wand hinauflaufen." }),
  schulterflexion_stab_liegend: wdh("seite", mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [10, 15, 0]), ...B("ellbogen", [0, 90]) } }), mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [170, 15, 0]), ...B("ellbogen", [0, 90]) } }), 3, { halten: 1, aus: 3, hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  pendel_codman: folge("seite", [
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, 0, 0] } }), 1, "Arm hängen lassen", true],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [82, 0, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, 12, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [58, 0, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, -10, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, 0, 0] } }), 1],
  ], { hilfsmittel: [{ art: "bank", unter: "hand_r", hoehe: 0.6 }], hinweis: "Der Arm schwingt locker durch die Bewegung des Körpers." }),
  haengen_passiv: halte("vorn", H({ ...B("schulter", [150, 20, 0]), ...B("ellbogen", [20, 0]), ...B("huefte", [5, 3, 0]) }, undefined, { pos: [0, 0.75, 0], boden: false }), H({ ...B("schulter", [178, 15, 0]), ...B("ellbogen", [0, 0]), ...B("huefte", [5, 3, 0]), ...B("fuss", [-20, 0]) }, undefined, { pos: [0, 0.75, 0], boden: false }), { hilfsmittel: [{ art: "stange", an: "haende" }] }),
  german_hang: halte("seite", H({ ...B("schulter", [-40, 15, 0]), ...B("huefte", [90, 5, 0]), ...B("knie", [90]) }, [20, 0, 0]), H({ ...B("schulter", [-80, 15, 0]), ...B("huefte", [100, 5, 0]), ...B("knie", [80]), hals: [10, 0, 0] }, [50, 0, 0]), { hilfsmittel: [{ art: "stange", an: "haende" }] }),
  dip_dehnung: halte("seite", mit(STUHLSITZ, { g: { ...B("schulter", [-30, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), ...B("knie", [80]) } }), H({ ...B("schulter", [-75, 12, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [80, 0]), ...B("huefte", [90, 5, 0]), ...B("knie", [80]) }), { hilfsmittel: [{ art: "bank", unter: "haende", hoehe: 0.42 }] }),
  schulterextension_band: halte("seite", STAND_W, mit(STAND_W, { g: { schulter_l: [-55, 10, 0], ellbogen_l: [0, 0], bws: [-5, 0, 0] } })),
  pullover_dehnung: halte("seite", H({ ...B("huefte", [60, 6, 0]), ...B("knie", [100]), ...B("schulter", [100, 10, 0]), ...B("ellbogen", [20, 0]) }, [-90, 0, 0], { pos: [0, 0.52, 0], boden: false }), H({ ...B("huefte", [60, 6, 0]), ...B("knie", [100]), ...B("schulter", [195, 10, 0]), ...B("ellbogen", [20, 0]), bws: [-8, 0, 0] }, [-90, 0, 0], { pos: [0, 0.52, 0], boden: false }), { hilfsmittel: [{ art: "bank", unter: "ruecken", hoehe: 0.42 }, { art: "hantel", an: "haende" }] }),
  hund_wand: halte("seite", LAT_START, LAT, { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  trizeps_dehnen_ueberkopf: halte("vorn", STAND_W, mit(STAND_W, { g: { schulter_l: [172, 8, 30], ellbogen_l: [150, 0], schulter_r: [150, -25, 0], ellbogen_r: [110, 0] } })),
  trizeps_dehnen_wand: halte("seite", STAND_W, mit(STAND_W, { dreh: [10, 0, 0], g: { schulter_l: [178, 8, 30], ellbogen_l: [150, 0], bws: [-8, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "ellbogen_l", richtung: "vorn" }] }),
  bizeps_dehnen_wand: halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, 85, 0], ellbogen_l: [0, -20], hand_l: [70, 0] } }), mit(STAND_W, { g: { schulter_l: [0, 85, 0, -25], ellbogen_l: [0, -20], hand_l: [70, 0], bws: [0, 0, -25] } }), { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "links" }] }),
  bizeps_dehnen_sitzend: halte("seite", mit(LANGSITZ, { g: { ...B("schulter", [-30, 15, 0]), ...B("ellbogen", [0, -90]), ...B("hand", [80, 0]), ...B("knie", [80]), ...B("huefte", [100, 5, 0]) } }), mit(LANGSITZ, { dreh: [-15, 0, 0], g: { ...B("schulter", [-60, 15, 0]), ...B("ellbogen", [0, -90]), ...B("hand", [85, 0]), ...B("knie", [70]), ...B("huefte", [95, 5, 0]) } })),

  // ---------- Nacken (im Sitzen)
  trapez_oben_dehnen: NACKEN([8, -38, 5]),
  trapez_oben_dehnen_pnf: pnf("vorn", SITZ, mit(SITZ, { g: { hals: [8, -32, 5], ...HAND_AUF_KOPF_R, schulter_l: [-5, 12, 0] } }), mit(SITZ, { g: { hals: [8, -42, 5], ...HAND_AUF_KOPF_R, schulter_l: [-5, 12, 0] } }), { hilfsmittel: SITZ_HILFE }),
  levator_dehnen: NACKEN([32, -22, -35]),
  skalenus_dehnen: NACKEN([-15, -30, 10]),
  kopfwender_dehnen: NACKEN([-22, -25, 25], false),
  nackenstrecker_dehnen: halte("seite", SITZ, mit(SITZ, { g: { hals: [40, 0, 0], kopf: [15], ...B("schulter", [150, 45, 60]), ...B("ellbogen", [130, 0]) } }), { hilfsmittel: SITZ_HILFE }),
  kinn_einziehen: wdh("seite", STAND_W, mit(STAND_W, { g: { hals: [-8, 0, 0], kopf: [14] } }), 1.5, { halten: 3, aus: 1.5, hinweis: "Kinn waagerecht nach hinten schieben, nicht nicken." }),
  kinn_einziehen_wand: wdh("seite", STAND_W, mit(STAND_W, { g: { hals: [-8, 0, 0], kopf: [14] } }), 1.5, { halten: 3, aus: 1.5, hilfsmittel: [{ art: "wand", an: "bws", richtung: "hinten" }] }),
  nacken_cars: folge("vorn", [
    [STAND_W, 1, "Kopf gerade", true],
    [mit(STAND_W, { g: { hals: [35, 0, 0] } }), 2, "Kinn zur Brust"],
    [mit(STAND_W, { g: { hals: [10, 35, 10] } }), 2, "Zur Seite"],
    [mit(STAND_W, { g: { hals: [-30, 0, 0] } }), 2, "Nach hinten oben"],
    [mit(STAND_W, { g: { hals: [10, -35, -10] } }), 2, "Zur anderen Seite"],
    [mit(STAND_W, { g: { hals: [35, 0, 0] } }), 2, "Kinn zur Brust"],
    [STAND_W, 1.5, "Aufrichten"],
  ]),
  nacken_rotation: wdh("vorn", mit(STAND_W, { g: { hals: [0, 0, -70] } }), mit(STAND_W, { g: { hals: [0, 0, 70] } }), 2.5, { halten: 1, aus: 2.5 }),
  nacken_seitneigung: wdh("vorn", mit(STAND_W, { g: { hals: [0, -35, 0] } }), mit(STAND_W, { g: { hals: [0, 35, 0] } }), 2.5, { halten: 1, aus: 2.5 }),
  nacken_retraktion_extension: folge("seite", [[STAND_W, 1, "Kopf gerade", true], [mit(STAND_W, { g: { hals: [-8, 0, 0], kopf: [14] } }), 1.5, "Kinn einziehen"], [mit(STAND_W, { g: { hals: [-35, 0, 0], kopf: [-10] } }), 2, "Kopf nach hinten strecken"], [mit(STAND_W, { g: { hals: [-8, 0, 0], kopf: [14] } }), 2, "Zurück"], [STAND_W, 1.5, "Lösen"]]),

  // ---------- Handgelenk und Finger
  handgelenkbeuger_dehnen: halte("schraeg", mit(STAND_W, { g: { ...UNTERARM_VORN, ellbogen_l: [0, -90] } }), mit(STAND_W, { g: { ...UNTERARM_VORN, ellbogen_l: [0, -90], hand_l: [75, 0], finger_l: [0, 30], ...ANDERE_HAND_ZIEHT } })),
  handgelenkstrecker_dehnen: halte("schraeg", mit(STAND_W, { g: { ...UNTERARM_VORN, ellbogen_l: [0, 90] } }), mit(STAND_W, { g: { ...UNTERARM_VORN, ellbogen_l: [0, 90], hand_l: [-70, 0], finger_l: [40, 0], ...ANDERE_HAND_ZIEHT } })),
  handgelenkbeuger_vierfuessler: halte("seite", VIERFUESSLER, mit(VIERFUESSLER, { dreh: [80, 0, 0], g: { ...B("ellbogen", [0, -90]), ...B("hand", [90, 0]), ...B("schulter", [72, 3, 0]), ...B("huefte", [80, 3, 0]) } })),
  handgelenkstrecker_vierfuessler: halte("seite", VIERFUESSLER, mit(VIERFUESSLER, { dreh: [82, 0, 0], g: { ...B("ellbogen", [0, 90]), ...B("hand", [-80, 0]), ...B("schulter", [75, 3, 0]), ...B("huefte", [82, 3, 0]) } })),
  handgelenk_finger_seitlich: wdh("vorn", VIERFUESSLER, mit(VIERFUESSLER, { g: { ...B("hand", [85, 25]), ...B("ellbogen", [0, 60]) } }), 2, { halten: 1 }),
  gebetsdehnung: halte("vorn", mit(STAND_W, { g: { ...B("schulter", [30, 30, -40]), ...B("ellbogen", [110, 0]), ...B("hand", [60, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [25, 45, -40]), ...B("ellbogen", [95, 0]), ...B("hand", [88, 0]) } })),
  umgekehrte_gebetsdehnung: halte("vorn", mit(STAND_W, { g: { ...B("schulter", [30, 30, -40]), ...B("ellbogen", [110, 0]), ...B("hand", [-50, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [35, 40, -40]), ...B("ellbogen", [100, 0]), ...B("hand", [-80, 0]) } })),
  handgelenk_cars: folge("schraeg", [
    [mit(STAND_W, { g: HAENDE_VORN }), 0.8],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [60, 0]) } }), 0.9],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [0, 25]) } }), 0.9],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [-60, 0]) } }), 0.9],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [0, -30]) } }), 0.9],
    [mit(STAND_W, { g: HAENDE_VORN }), 0.8],
  ]),
  handgelenk_wippen: wdh("seite", VIERFUESSLER, mit(VIERFUESSLER, { g: { ...B("schulter", [70, 3, 0]), ...B("hand", [100, 0]) } }), 1.5),
  handgelenk_radial_ulnar: wdh("vorn", mit(SITZ, { g: { schulter_l: [20, 5, 0], ellbogen_l: [90, 0], hand_l: [0, -25] } }), mit(SITZ, { g: { schulter_l: [20, 5, 0], ellbogen_l: [90, 0], hand_l: [0, 25] } }), 1.5, { hilfsmittel: SITZ_HILFE }),
  unterarm_rotation_stab: wdh("vorn", mit(SITZ, { g: { schulter_l: [20, 5, 0], ellbogen_l: [90, -80], finger_l: [85, 0] } }), mit(SITZ, { g: { schulter_l: [20, 5, 0], ellbogen_l: [90, 80], finger_l: [85, 0] } }), 2, { hilfsmittel: SITZ_HILFE }),
  finger_spreizen: wdh("vorn", mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [35, 0]) } }), mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [0, 10]) } }), 1.2, { halten: 1 }),
  sehnengleiten: folge("vorn", [
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [0, 0]) } }), 1, "Finger gestreckt", true],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [45, 0]) } }), 1.5, "Hakenfaust"],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [90, 0]) } }), 1.5, "Faust"],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [60, 0]) } }), 1.5, "Tischposition"],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [0, 0]) } }), 1.5, "Strecken"],
  ]),
  fingerdehnung: halte("schraeg", mit(STAND_W, { g: { ...UNTERARM_VORN, ellbogen_l: [20, -60] } }), mit(STAND_W, { g: { ...UNTERARM_VORN, ellbogen_l: [20, -60], hand_l: [30, 0], finger_l: [0, 45], ...ANDERE_HAND_ZIEHT } })),
  unterarm_ausrollen: wdh("seite", mit(KNIESTAND, { dreh: [55, 0, 0], g: { ...B("huefte", [55, 5, 0]), schulter_l: [70, 0, 0], ellbogen_l: [10, 90], schulter_r: [60, -10, 0], ellbogen_r: [70, 0] } }), mit(KNIESTAND, { dreh: [62, 0, 0], g: { ...B("huefte", [62, 5, 0]), schulter_l: [85, 0, 0], ellbogen_l: [10, 90], schulter_r: [70, -10, 0], ellbogen_r: [60, 0] } }), 2.5, { hilfsmittel: [{ art: "rolle", unter: "unterarm_l", laengs: true }] }),
}
