// Schulter, Nacken, Handgelenk und Finger. Dynamische Schulterübungen im Tempo der Anleitung: Armkreisen etwa 1,6 s
// je Kreis, kontrollierte Kreise (CARs) 8 bis 10 s, Gleiten an der Wand 2 bis 3 s je Richtung.

import type { Dehnung, Haltung, Winkel } from "../../logik/dehnbewegung"
import { B, BAUCHLAGE, H, KNIESTAND, LANGSITZ, RUECKENLAGE_AUF, SEITLAGE, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, pnf, wdh } from "./basis"

const SITZ = mit(STUHLSITZ, { g: { ...B("schulter", [10, 8, 0]), ...B("ellbogen", [60, 60]) } })
const SITZ_HILFE = [{ art: "bank" as const, unter: "gesaess" as const, hoehe: 0.42 }]
// Rechte Hand über den Kopf auf die linke Kopfseite
const HAND_AUF_KOPF_R = { schulter_r: [15, 145, 95], ellbogen_r: [120, 0] }
const STAND_W = mit(STAND, { g: B("huefte", [0, 7, 0]) })

// Türrahmen: Unterarm am Rahmen, Körper dreht weg
const tuer = (abd: number, ell: number, aussen: number): Dehnung =>
  halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, abd, aussen], ellbogen_l: [ell, 0] } }), mit(STAND_W, { g: { schulter_l: [0, abd, aussen, 25], ellbogen_l: [ell, 0], bws: [0, 0, -25], lws: [0, 0, -8], huefte_l: [12, 4, 0], knie_l: [10] } }), { hilfsmittel: [{ art: "tuer", an: "unterarm_l" }] })

// Latissimus an Wand oder Stange: Hüfte nach hinten, Brust sinkt
const LAT: Haltung = mit(STAND_W, { dreh: [88, 0, 0], g: { ...B("huefte", [88, 7, 0]), ...B("schulter", [172, -8, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [60, 0]), bws: [-12, 0, 0], hals: [-5, 0, 0] } })
const LAT_START: Haltung = mit(STAND_W, { dreh: [30, 0, 0], g: { ...B("huefte", [30, 7, 0]), ...B("schulter", [120, -8, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [60, 0]) } })

const BRUST_ROLLE = (arm: number, kippen: number): Haltung =>
  mit(BAUCHLAGE, { dreh: [88, 0, kippen], g: { schulter_l: [0, arm, 0, 25], ellbogen_l: [5, 0], schulter_r: [88, 10, 0], ellbogen_r: [90, 90], hand_r: [80, 0], huefte_r: [30, 5, 0], knie_r: [60] } })

// Querdehnung: linker Arm quer vor der Brust, rechte Hand oberhalb des Ellbogens
const QUER = mit(STAND_W, { g: { schulter_l: [90, 0, 0, -45], ellbogen_l: [5, 0], schulter_r: [30, 0, -35, -20], ellbogen_r: [120, 0] } })

const UNTERARM_ROLLE = (neigung: number, schulter: number, ellbogen: number): Haltung =>
  mit(KNIESTAND, { dreh: [neigung, 0, 0], g: { ...B("huefte", [neigung, 5, 0]), schulter_l: [schulter, 5, 0], ellbogen_l: [ellbogen, -90], schulter_r: [50, 0, 0, -52], ellbogen_r: [100, 0] } })

// Einarmig am Pfosten: Hand auf Brusthöhe, die Hüfte schiebt nach hinten, der freie Arm hängt
const LAT_PNF = (neigung: number): Haltung =>
  mit(STAND_W, { dreh: [neigung, 0, 0], g: { ...B("huefte", [neigung, 7, 0]), ...B("knie", [12]), schulter_l: [neigung + 95, -5, 0], ellbogen_l: [0, 90], hand_l: [20, 0], schulter_r: [neigung, 8, 0], ellbogen_r: [15, 0], bws: [0, 0, 8] } })

// Arm über Kopf in Seitlage auf der Rolle (Ausrollen)
const ROLLE_SEITE = (wo: "schulter_l" | "ellbogen_l"): Dehnung =>
  wdh("schraeg", mit(SEITLAGE, { g: { schulter_l: [175, 0, 0], ...B("huefte", [30, 0, 0]), ...B("knie", [60]) } }), mit(SEITLAGE, { g: { schulter_l: [165, 0, 0], ...B("huefte", [45, 0, 0]), ...B("knie", [80]) } }), 2.5, { hilfsmittel: [{ art: "rolle", unter: wo }] })

// Rücken an der Wand: Ellbogen und Handrücken liegen an (W, dann Y)
const WAND_W = mit(STAND_W, { g: { ...B("schulter", [0, 80, 85, 20]), ...B("ellbogen", [90, 0]) } })
const WAND_Y = mit(STAND_W, { g: { ...B("schulter", [0, 155, 85, 45]), ...B("ellbogen", [25, 0]) } })
// Gesicht zur Wand, Unterarme schulterbreit senkrecht an der Wand, dann nach oben und außen ins Y
const UNTERARME_WAND = mit(STAND_W, { g: { ...B("schulter", [80, 10, 15]), ...B("ellbogen", [90, 90]) } })
const UNTERARME_HOCH = mit(STAND_W, { g: { ...B("schulter", [125, -20, 0]), ...B("ellbogen", [40, 90]) } })

const NACKEN = (hals: number[], haende: Winkel = HAND_AUF_KOPF_R): Dehnung =>
  halte("vorn", SITZ, mit(SITZ, { g: { hals, schulter_l: [-5, 12, 0], ellbogen_l: [5, 0], ...haende } }), { hilfsmittel: SITZ_HILFE })
// Linke Hand flach unter dem linken Schlüsselbein, die rechte darüber
const HAND_SCHLUESSELBEIN_L = { schulter_l: [10, 10, -25], ellbogen_l: [145, 0] }

// Linker Arm vorn auf Schulterhöhe, Ellbogen fast gestreckt, Handfläche nach vorn; die rechte Hand greift die Finger
const UNTERARM_VORN = { schulter_l: [88, 5, 0], ellbogen_l: [20, 90] }
const ANDERE_HAND_ZIEHT = { schulter_r: [95, 0, 0, -28], ellbogen_r: [5, 0], bws: [0, 0, 12] }
const HAENDE_VORN = { ...B("schulter", [40, 10, 0]), ...B("ellbogen", [80, 90]) }

const BODEN_START: Haltung = mit(BAUCHLAGE, { g: { schulter_l: [0, 90, 0], ellbogen_l: [5, 0], schulter_r: [20, 10, 0], ellbogen_r: [90, 90], hand_r: [80, 0], hals: [0, 0, -40] } })
const TWIST = 60
const ARMKOMP = 60

/** Einseitige Übung ohne feste Hilfsmittel an der Seite: danach dieselbe Übung gespiegelt */
const beide = (d: Dehnung): Dehnung => ({ ...d, seiten: true })

export const SCHULTER: Record<string, Dehnung> = {
  // ---------- Brust
  brust_dehnen: tuer(90, 90, 85),
  // Ellbogen 30 bis 45 Grad über Schulterhöhe am Rahmen, Schritt nach vorn, Oberkörper lehnt nach vorn unten weg
  brust_dehnen_hoch: halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, 130, 80], ellbogen_l: [85, 0] } }), mit(STAND_W, { dreh: [14, 0, 0], g: { schulter_l: [0, 130, 80, 20], ellbogen_l: [85, 0], bws: [0, 0, -15], huefte_l: [30, 4, 0], knie_l: [18], huefte_r: [8, 4, 0] } }), { hilfsmittel: [{ art: "tuer", an: "unterarm_l" }] }),
  brust_dehnen_tief: tuer(60, 15, 20),
  brust_dehnen_pnf: pnf("schraeg", mit(STAND_W, { g: { schulter_l: [0, 90, 85], ellbogen_l: [90, 0] } }), mit(STAND_W, { g: { schulter_l: [0, 90, 85, 20], ellbogen_l: [90, 0], bws: [0, 0, -20] } }), mit(STAND_W, { g: { schulter_l: [0, 90, 85, 32], ellbogen_l: [90, 0], bws: [0, 0, -30] } }), { hilfsmittel: [{ art: "tuer", an: "unterarm_l" }] }),
  // linker Arm seitlich am Boden, rechte Hand stützt neben der Brust, Körper rollt auf die linke Seite (rechte Seite hebt sich)
  brust_dehnen_boden: beide(halte("vorn", BODEN_START, mit(BODEN_START, { dreh: [90, 0, TWIST], g: { schulter_l: [0, 90, 0, ARMKOMP], ellbogen_l: [5, 0], schulter_r: [85, -25, 0], ellbogen_r: [35, 90], hand_r: [80, 0], huefte_r: [70, 5, 0], knie_r: [90], fuss_r: [10, 0], hals: [0, 0, -30] } }))),
  // Kopf und Gesäß auf der längs liegenden Rolle, Füße aufgestellt, Arme sinken in U-Form seitlich zum Boden
  brustoeffner_rolle: halte("schraeg", mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [20, 30, 0]), ...B("huefte", [35, 6, 0]), ...B("knie", [115]), ...B("fuss", [25, 0]) } }), mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [0, 85, 25]), ...B("ellbogen", [40, 0]), ...B("huefte", [35, 6, 0]), ...B("knie", [115]), ...B("fuss", [25, 0]) } }), { hilfsmittel: [{ art: "rolle", unter: "bws", laengs: true }] }),
  haende_verschraenkt_ruecken: halte("seite", mit(STAND_W, { g: { ...B("schulter", [-25, -11, 0]), ...B("ellbogen", [10, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [-55, -11, 0]), ...B("ellbogen", [0, 0]), bws: [-10, 0, 0], ...B("schulterblatt", [0, -15]) } })),
  // Arme seitlich auf Schulterhöhe, Schrittstellung, Körper lehnt als Linie nach vorn, die Arme gehen nach hinten
  brust_dehnen_schlingentrainer: halte("seite", mit(STAND_W, { g: { ...B("schulter", [0, 88, 10, 0]), ...B("ellbogen", [10, 0]) } }), mit(STAND_W, { dreh: [20, 0, 0], g: { huefte_l: [45, 7, 0], knie_l: [40], fuss_l: [20, 0], huefte_r: [-4, 7, 0], fuss_r: [-30, 0], zehen_r: [45], ...B("schulter", [0, 88, 10, 45]), ...B("ellbogen", [10, 0]) } })),
  // ---------- Latissimus
  lat_dehnen_wand: halte("seite", LAT_START, LAT, { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  // Kniestand vor der Bank, linker Arm gestreckt mit der Kleinfingerseite auf der Bank, Gesäß zu den Fersen, Brust sinkt
  lat_dehnen_bank_kniend: halte("seite", mit(KNIESTAND, { dreh: [40, 0, 0], g: { ...B("huefte", [45, 5, 0]), schulter_l: [130, -5, 0], ellbogen_l: [0, 0], schulter_r: [40, 10, 0] } }), mit(KNIESTAND, { dreh: [85, 0, 0], g: { ...B("huefte", [100, 5, 0]), ...B("knie", [115]), ...B("fuss", [-75, 0]), schulter_l: [168, -5, 0], ellbogen_l: [0, 0], schulter_r: [80, 10, 0], ellbogen_r: [10, 90], hand_r: [80, 0], bws: [-5, 0, 15] } }), { hilfsmittel: [{ art: "bank", unter: "ellbogen_l", hoehe: 0.55 }] }),
  // Band am Rack: die Hand in der Schlaufe, der Pfosten steht vor der Hand
  lat_dehnen_band: halte("seite", LAT_START, mit(LAT, { g: { schulter_r: [60, 10, 0], ellbogen_r: [30, 0], bws: [0, -10, 0] } }), { hilfsmittel: [{ art: "tuer", an: "hand_l" }] }),
  // Hände auf dem Ball, Ball nach vorn, Gesäß Richtung Fersen, Brust sinkt zwischen die Arme
  lat_dehnen_ball: halte("seite", mit(KNIESTAND, { dreh: [62, 0, 0], g: { ...B("huefte", [80, 5, 0]), ...B("knie", [105]), ...B("fuss", [-75, 0]), ...B("schulter", [150, -5, 0]), ...B("ellbogen", [0, 90]) } }), mit(KNIESTAND, { dreh: [85, 0, 0], g: { ...B("huefte", [100, 5, 0]), ...B("knie", [110]), ...B("fuss", [-80, 0]), ...B("schulter", [170, -5, 0]), ...B("ellbogen", [0, 90]), bws: [-12, 0, 0] } }), { hilfsmittel: [{ art: "ball", unter: "haende" }] }),
  // Einarmig an Pfosten oder Stange auf Brusthöhe, Hüfte nach hinten: halten, gegen den Griff ziehen, tiefer
  lat_dehnen_pnf: pnf("seite", LAT_PNF(35), LAT_PNF(58), LAT_PNF(68), { hilfsmittel: [{ art: "tuer", an: "hand_l" }] }),
  lat_dehnen_schlingentrainer: halte("seite", LAT_START, LAT),
  lat_ausrollen: ROLLE_SEITE("schulter_l"),
  // Bauchlage leicht auf die linke Seite gedreht, Rolle unter der Brust neben der Achsel, Arm seitlich, rechter Unterarm und rechtes Knie stützen
  brust_ausrollen: wdh("schraeg", BRUST_ROLLE(85, 30), BRUST_ROLLE(110, 30), 2.5, { hilfsmittel: [{ art: "rolle", unter: "schulter_l", laengs: true }] }),
  trizeps_ausrollen: ROLLE_SEITE("ellbogen_l"),
  // ---------- Rotation und Kapsel
  // Weiter Griff mit gestreckten Armen: vor den Oberschenkeln, vorn, über Kopf, hinter den Körper und zurück.
  // Über 90 Grad Beugung öffnet ein negativer Abspreizwert die Arme nach außen.
  schulterpassen: folge("schraeg", [
    [mit(STAND_W, { g: { ...B("schulter", [10, 35, 0]), ...B("ellbogen", [0, 90]) } }), 1, "Stab vor den Oberschenkeln", true],
    [mit(STAND_W, { g: { ...B("schulter", [90, 0, 0, 32]), ...B("ellbogen", [0, 90]) } }), 1.5, "Nach vorn"],
    [mit(STAND_W, { g: { ...B("schulter", [175, -40, 0]), ...B("ellbogen", [0, 90]) } }), 1.5, "Über den Kopf"],
    [mit(STAND_W, { g: { ...B("schulter", [205, -48, 0]), ...B("ellbogen", [0, 90]) } }), 2, "Hinter den Körper"],
    [mit(STAND_W, { g: { ...B("schulter", [175, -40, 0]), ...B("ellbogen", [0, 90]) } }), 2, "Zurück nach oben"],
    [mit(STAND_W, { g: { ...B("schulter", [90, 0, 0, 32]), ...B("ellbogen", [0, 90]) } }), 1.5, "Nach vorn"],
    [mit(STAND_W, { g: { ...B("schulter", [10, 35, 0]), ...B("ellbogen", [0, 90]) } }), 1.5, "Nach unten"],
  ], { hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  // Seitlage auf der linken Seite, Oberarm vor dem Körper, Finger zur Decke; die rechte Hand drückt das Handgelenk Richtung Boden
  sleeper_stretch: beide(halte("schraeg", mit(SEITLAGE, { g: { schulter_l: [90, 0, -90], ellbogen_l: [90, 0], schulter_r: [10, 0, 0], ellbogen_r: [10, 0] } }), mit(SEITLAGE, { g: { schulter_l: [90, 0, -145], ellbogen_l: [90, 0], schulter_r: [15, 0, -10, -20], ellbogen_r: [80, 0] } }))),
  // Oberarm seitlich am Boden, Unterarm sinkt nach vorn; die rechte Hand liegt vorn auf der linken Schulter
  innenrotation_rueckenlage: beide(halte("schraeg", mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 90, 0], ellbogen_l: [90, 0], schulter_r: [35, 0, 0, -75], ellbogen_r: [90, 0] } }), mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 90, -60], ellbogen_l: [90, 0], schulter_r: [35, 0, 0, -75], ellbogen_r: [90, 0] } }))),
  // Linker Arm quer vor der Brust, die rechte Hand zieht oberhalb des Ellbogens
  querdehnung: beide(halte("vorn", STAND_W, QUER)),
  querdehnung_wand: halte("vorn", STAND_W, mit(QUER, { g: { bws: [0, 0, -8] } }), { hilfsmittel: [{ art: "wand", an: "schulter_l", richtung: "links" }] }),
  // Linke Hand hinter dem Kopf hält das Tuch, die rechte Hand am unteren Rücken wird nach oben gezogen
  handtuch_innenrotation: beide(wdh("hinten", mit(STAND_W, { g: { schulter_l: [175, 10, -30], ellbogen_l: [125, 0], schulter_r: [-25, 20, -80], ellbogen_r: [90, 0] } }), mit(STAND_W, { g: { schulter_l: [175, 10, -30], ellbogen_l: [100, 0], schulter_r: [-45, 25, -95], ellbogen_r: [125, 0] } }), 3, { halten: 3, hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] })),
  // Linke Hand von oben zwischen die Schulterblätter, rechte Hand von unten den Rücken hinauf
  kuhgesicht_arme: beide(halte("hinten", STAND_W, mit(STAND_W, { g: { schulter_l: [175, 10, -30], ellbogen_l: [155, 0], schulter_r: [-45, 25, -95], ellbogen_r: [125, 0], hals: [-5, 0, 0] } }))),
  // Oberarm seitlich am Boden, Unterarm senkrecht; der Stab schiebt ihn nach hinten Richtung Kopf
  aussenrotation_stab: beide(halte("schraeg", mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 90, 0], ellbogen_l: [90, 0], schulter_r: [55, 0, 0, -25], ellbogen_r: [40, 0] } }), mit(RUECKENLAGE_AUF, { g: { schulter_l: [0, 90, 70], ellbogen_l: [90, 0], schulter_r: [80, 0, 0, -10], ellbogen_r: [20, 0] } }), { hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] })),
  // 90-90 am Rahmen, Schritt nach vorn, der Oberkörper lehnt durch die Tür
  aussenrotation_tuer: halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, 90, 85], ellbogen_l: [90, 0] } }), mit(STAND_W, { dreh: [10, 0, 0], g: { schulter_l: [0, 90, 85, 22], ellbogen_l: [90, 0], huefte_l: [25, 4, 0], knie_l: [15], huefte_r: [0, 4, 0], bws: [-6, 0, 0] } }), { hilfsmittel: [{ art: "tuer", an: "unterarm_l" }] }),
  schulter_cars: beide(folge("schraeg", [
    [mit(STAND_W, { g: { schulter_l: [0, 8, 0] } }), 1, "Arm unten", true],
    [mit(STAND_W, { g: { schulter_l: [90, 0, 0] } }), 2, "Nach vorn"],
    [mit(STAND_W, { g: { schulter_l: [178, 10, 40] } }), 2.5, "Nach oben, Daumen nach hinten"],
    [mit(STAND_W, { g: { schulter_l: [0, 100, 60, 30] } }), 2.5, "Seitlich nach hinten"],
    [mit(STAND_W, { g: { schulter_l: [-40, 15, -60] } }), 2.5, "Hinter den Rücken"],
    [mit(STAND_W, { g: { schulter_l: [0, 8, 0] } }), 1.5, "Zurück"],
  ], { hinweis: "Langsam und mit Spannung, der Rumpf bleibt ruhig." })),
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
  wall_slide_abheben: folge("seite", [[UNTERARME_WAND, 1, "Unterarme an der Wand", true], [UNTERARME_HOCH, 2.5, "Nach oben gleiten"], [mit(UNTERARME_HOCH, { g: B("schulter", [137, -20, 0]) }), 1.5, "Kurz abheben"], [UNTERARME_HOCH, 1, "Zurück an die Wand"], [UNTERARME_WAND, 2.5, "Nach unten gleiten"]], { hilfsmittel: [{ art: "wand", an: "unterarm_l", richtung: "vorn" }] }),
  wall_slide_rolle: wdh("seite", UNTERARME_WAND, UNTERARME_HOCH, 2.5, { aus: 2.5, hilfsmittel: [{ art: "wand", an: "unterarm_l", richtung: "vorn" }] }),
  // Hände hoch an der Wand, aus der Hüfte beugen, Brust und Achseln sinken zur Wand
  ueberkopf_wand: halte("seite", mit(STAND_W, { dreh: [10, 0, 0], g: { ...B("huefte", [10, 7, 0]), ...B("schulter", [150, -5, 0]), ...B("ellbogen", [0, 90]) } }), mit(STAND_W, { dreh: [35, 0, 0], g: { ...B("huefte", [35, 7, 0]), ...B("schulter", [185, -5, 0]), ...B("ellbogen", [0, 90]), bws: [-10, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  fingerlaufen_wand: beide(wdh("seite", mit(STAND_W, { g: { schulter_l: [25, 5, 0], ellbogen_l: [95, 90] } }), mit(STAND_W, { g: { schulter_l: [160, 8, 0], ellbogen_l: [5, 90] } }), 6, { halten: 2, aus: 3, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }], hinweis: "Mit den Fingern langsam die Wand hinauflaufen." })),
  schulterflexion_stab_liegend: wdh("seite", mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [10, 15, 0]), ...B("ellbogen", [0, 90]) } }), mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [170, 15, 0]), ...B("ellbogen", [0, 90]) } }), 3, { halten: 1, aus: 3, hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  pendel_codman: folge("seite", [
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, 0, 0] } }), 1, "Arm hängen lassen", true],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [82, 0, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, 12, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [58, 0, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, -10, 0] } }), 1],
    [mit(STAND_W, { dreh: [70, 0, 0], g: { ...B("huefte", [70, 7, 0]), ...B("knie", [10]), schulter_r: [70, 0, 0], ellbogen_r: [0, 0], schulter_l: [70, 0, 0] } }), 1],
  ], { hilfsmittel: [{ art: "bank", unter: "hand_r", hoehe: 0.6 }], hinweis: "Der Arm schwingt locker durch die Bewegung des Körpers." }),
  // Obergriff etwas weiter als schulterbreit, Körper hängt lang, die Zehen berühren den Boden
  haengen_passiv: halte("vorn", H({ ...B("schulter", [150, -12, 0]), ...B("ellbogen", [20, 0]), ...B("huefte", [5, 3, 0]), ...B("fuss", [-45, 0]) }, undefined, { pos: [0, 0.98, 0], boden: false }), H({ ...B("schulter", [178, -12, 0]), ...B("ellbogen", [0, 0]), ...B("huefte", [5, 3, 0]), ...B("fuss", [-60, 0]) }, undefined, { pos: [0, 1.02, 0], boden: false }), { hilfsmittel: [{ art: "stange", an: "haende" }] }),
  german_hang: halte("seite", H({ ...B("schulter", [-40, 15, 0]), ...B("huefte", [90, 5, 0]), ...B("knie", [90]) }, [20, 0, 0]), H({ ...B("schulter", [-80, 15, 0]), ...B("huefte", [100, 5, 0]), ...B("knie", [80]), hals: [10, 0, 0] }, [50, 0, 0]), { hilfsmittel: [{ art: "stange", an: "haende" }] }),
  // Rücken zur Kiste, Hände hinter dem Körper aufgestützt; Ellbogen beugen, bis die Schultern unter den Ellbogen sind
  dip_dehnung: halte("seite", H({ ...B("huefte", [95, 5, 0]), ...B("knie", [95]), ...B("schulter", [-42, 12, 0]), ...B("ellbogen", [5, 90]), ...B("hand", [80, 0]) }), H({ ...B("huefte", [125, 5, 0]), ...B("knie", [125]), ...B("fuss", [15, 0]), ...B("schulter", [-90, 12, 0]), ...B("ellbogen", [70, 90]), ...B("hand", [80, 0]) }), { hilfsmittel: [{ art: "box", unter: "haende", hoehe: 0.45 }] }),
  schulterextension_band: beide(halte("seite", mit(STAND_W, { g: { schulter_l: [-30, 10, 0], ellbogen_l: [0, 0] } }), mit(STAND_W, { dreh: [12, 0, 0], g: { ...B("huefte", [12, 7, 0]), schulter_l: [-60, 10, 0], ellbogen_l: [0, 0], bws: [0, 0, -12] } }))),
  pullover_dehnung: halte("seite", H({ ...B("huefte", [0, 8, 0]), ...B("knie", [95]), ...B("schulter", [100, 10, 0]), ...B("ellbogen", [20, 0]) }, [-90, 0, 0], { pos: [0, 0.52, 0], boden: false }), H({ ...B("huefte", [0, 8, 0]), ...B("knie", [95]), ...B("schulter", [165, 10, 0]), ...B("ellbogen", [20, 0]), bws: [-8, 0, 0] }, [-90, 0, 0], { pos: [0, 0.52, 0], boden: false }), { hilfsmittel: [{ art: "bank", unter: "ruecken", hoehe: 0.42 }, { art: "hantel", an: "haende" }] }),
  hund_wand: halte("seite", LAT_START, LAT, { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] }),
  // Linke Hand zwischen die Schulterblätter, die rechte Hand fasst den linken Ellbogen über dem Kopf
  trizeps_dehnen_ueberkopf: beide(halte("vorn", STAND_W, mit(STAND_W, { g: { schulter_l: [175, 10, -30], ellbogen_l: [155, 0], schulter_r: [140, 45, 0], ellbogen_r: [85, 0] } }))),
  // Gesicht zur Wand, Ellbogen über dem Kopf an der Wand, die Hand hinter dem Kopf; Brust lehnt zur Wand
  trizeps_dehnen_wand: beide(halte("seite", mit(STAND_W, { g: { schulter_l: [145, 10, -30], ellbogen_l: [150, 0] } }), mit(STAND_W, { dreh: [15, 0, 0], g: { huefte_l: [15, 7, 0], huefte_r: [15, 7, 0], schulter_l: [162, 10, -30], ellbogen_l: [150, 0], bws: [-5, 0, 0] } }), { hilfsmittel: [{ art: "wand", an: "ellbogen_l", richtung: "vorn" }] })),
  // Hand hinter dem Körper auf Schulterhöhe an der Wand, Arm gestreckt, Oberkörper dreht von der Wand weg
  bizeps_dehnen_wand: halte("schraeg", mit(STAND_W, { g: { schulter_l: [0, 82, 0, 15], ellbogen_l: [0, -20], hand_l: [70, 0] } }), mit(STAND_W, { g: { schulter_l: [0, 85, 0, 50], ellbogen_l: [0, -20], hand_l: [70, 0], bws: [0, 0, -25] } }), { hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "links" }] }),
  // Sitz mit aufgestellten Beinen, Hände hinter dem Körper am Boden; das Gesäß rutscht nach vorn
  bizeps_dehnen_sitzend: halte("seite", mit(LANGSITZ, { dreh: [-15, 0, 0], g: { ...B("schulter", [-38, 15, 0]), ...B("ellbogen", [5, -90]), ...B("hand", [85, 0]), ...B("knie", [105]), ...B("huefte", [120, 5, 0]), ...B("fuss", [0, 0]) } }), mit(LANGSITZ, { dreh: [-30, 0, 0], g: { ...B("schulter", [-55, 15, 0]), ...B("ellbogen", [5, -90]), ...B("hand", [85, 0]), ...B("knie", [105]), ...B("huefte", [105, 5, 0]), ...B("fuss", [0, 0]) } })),

  // ---------- Nacken (im Sitzen)
  trapez_oben_dehnen: beide(NACKEN([8, -38, 5])),
  trapez_oben_dehnen_pnf: beide(pnf("vorn", SITZ, mit(SITZ, { g: { hals: [8, -32, 5], ...HAND_AUF_KOPF_R, schulter_l: [-5, 12, 0] } }), mit(SITZ, { g: { hals: [8, -42, 5], ...HAND_AUF_KOPF_R, schulter_l: [-5, 12, 0] } }), { hilfsmittel: SITZ_HILFE })),
  // Hand auf dem Hinterkopf
  levator_dehnen: beide(NACKEN([32, -22, -35], { schulter_r: [15, 130, 95], ellbogen_r: [125, 0] })),
  skalenus_dehnen: beide(NACKEN([-15, -30, 10], { ...HAND_SCHLUESSELBEIN_L, schulter_r: [40, 10, -70], ellbogen_r: [120, 0] })),
  // Kopf von der Dehnseite weg drehen, Kinn schräg nach oben
  kopfwender_dehnen: beide(NACKEN([-22, -15, -40], HAND_SCHLUESSELBEIN_L)),
  nackenstrecker_dehnen: halte("seite", SITZ, mit(SITZ, { g: { hals: [40, 0, 0], kopf: [15], ...B("schulter", [100, 60, 40]), ...B("ellbogen", [125, 0]) } }), { hilfsmittel: SITZ_HILFE }),
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
  handgelenkbeuger_dehnen: beide(halte("schraeg", mit(STAND_W, { g: UNTERARM_VORN }), mit(STAND_W, { g: { ...UNTERARM_VORN, hand_l: [75, 0], finger_l: [0, 30], ...ANDERE_HAND_ZIEHT } }))),
  handgelenkstrecker_dehnen: beide(halte("schraeg", mit(STAND_W, { g: UNTERARM_VORN }), mit(STAND_W, { g: { ...UNTERARM_VORN, hand_l: [-70, 0], finger_l: [40, 0], ...ANDERE_HAND_ZIEHT, schulter_r: [82, 0, 0, -28] } }))),
  handgelenkbeuger_vierfuessler: halte("seite", VIERFUESSLER, mit(VIERFUESSLER, { dreh: [80, 0, 0], g: { ...B("ellbogen", [0, -90]), ...B("hand", [90, 0]), ...B("schulter", [72, 3, 0]), ...B("huefte", [80, 3, 0]) } })),
  handgelenkstrecker_vierfuessler: halte("seite", VIERFUESSLER, mit(VIERFUESSLER, { dreh: [82, 0, 0], g: { ...B("ellbogen", [0, 90]), ...B("hand", [-80, 0]), ...B("schulter", [75, 3, 0]), ...B("huefte", [82, 3, 0]) } })),
  handgelenk_finger_seitlich: wdh("vorn", VIERFUESSLER, mit(VIERFUESSLER, { g: { ...B("hand", [85, 25]), ...B("ellbogen", [0, 60]) } }), 2, { halten: 1 }),
  // Handflächen vor der Brust aneinander, dann Richtung Bauchnabel senken, Ellbogen gehen zur Seite
  gebetsdehnung: halte("vorn", mit(STAND_W, { g: { ...B("schulter", [45, 40, -70, -6]), ...B("ellbogen", [105, 0]), ...B("hand", [70, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [35, 40, -70, -15]), ...B("ellbogen", [100, 0]), ...B("hand", [85, 0]) } })),
  // Handrücken vor dem Bauch aneinander, Finger nach unten, dann Richtung Brust heben
  umgekehrte_gebetsdehnung: halte("vorn", mit(STAND_W, { g: { ...B("schulter", [25, 45, -60, -20]), ...B("ellbogen", [95, 0]), ...B("hand", [-55, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [40, 45, -60, -20]), ...B("ellbogen", [100, 0]), ...B("hand", [-85, 0]) } })),
  handgelenk_cars: folge("schraeg", [
    [mit(STAND_W, { g: HAENDE_VORN }), 0.8],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [60, 0]) } }), 0.9],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [0, 25]) } }), 0.9],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [-60, 0]) } }), 0.9],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("hand", [0, -30]) } }), 0.9],
    [mit(STAND_W, { g: HAENDE_VORN }), 0.8],
  ]),
  handgelenk_wippen: wdh("seite", VIERFUESSLER, mit(VIERFUESSLER, { g: { ...B("schulter", [70, 3, 0]), ...B("hand", [100, 0]) } }), 1.5),
  // Im Stand, Ellbogen 90 Grad am Körper, Daumen oben: zur Daumenseite und zur Kleinfingerseite kippen
  handgelenk_radial_ulnar: beide(wdh("schraeg", mit(STAND_W, { g: { schulter_l: [5, 5, 0], ellbogen_l: [90, 0], finger_l: [70, 0], hand_l: [0, -25] } }), mit(STAND_W, { g: { schulter_l: [5, 5, 0], ellbogen_l: [90, 0], finger_l: [70, 0], hand_l: [0, 25] } }), 1.5)),
  unterarm_rotation_stab: beide(wdh("vorn", mit(SITZ, { g: { schulter_l: [20, 5, 0], ellbogen_l: [90, -80], finger_l: [85, 0] } }), mit(SITZ, { g: { schulter_l: [20, 5, 0], ellbogen_l: [90, 80], finger_l: [85, 0] } }), 2, { hilfsmittel: SITZ_HILFE })),
  finger_spreizen: wdh("vorn", mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [35, 0]) } }), mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [0, 10]) } }), 1.2, { halten: 1 }),
  sehnengleiten: folge("vorn", [
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [0, 0]) } }), 1, "Finger gestreckt", true],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [45, 0]) } }), 1.5, "Hakenfaust"],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [90, 0]) } }), 1.5, "Faust"],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [60, 0]) } }), 1.5, "Tischposition"],
    [mit(STAND_W, { g: { ...HAENDE_VORN, ...B("finger", [0, 0]) } }), 1.5, "Strecken"],
  ]),
  fingerdehnung: beide(halte("schraeg", mit(STAND_W, { g: { ...UNTERARM_VORN, hand_l: [30, 0] } }), mit(STAND_W, { g: { ...UNTERARM_VORN, hand_l: [30, 0], finger_l: [0, 45], ...ANDERE_HAND_ZIEHT } }))),
  // Kniend, linker Unterarm mit der Handfläche nach oben quer über der Rolle, die rechte Hand gibt Druck
  unterarm_ausrollen: beide(wdh("seite", UNTERARM_ROLLE(85, 62, 80), UNTERARM_ROLLE(90, 80, 95), 2.5, { hilfsmittel: [{ art: "rolle", unter: "unterarm_l" }] })),
}
