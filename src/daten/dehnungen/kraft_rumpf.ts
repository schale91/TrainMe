// Rumpf mit der Dehnfigur: Stütz und Seitstütz, Dead Bug, Bird Dog, Hollow, Crunches, Hängen an der Stange, Stütz am
// Barren, Rollouts, Tragen, Pallof Press, Holzhacker und Rotation, Golf-Rumpfübungen am Kabel und Band.
//
// Kippung 90 = Bauchlage, -90 = Rückenlage. Arme hängen senkrecht, wenn Schulterbeugung = Kippung.
// Landmine, Schlingentrainer, Bauchmaschine und Negativbank hat das Heimstudio nicht; diese Übungen behalten die
// einfache Figur.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, ATHLETISCH, B, H, HALBKNIESTAND, KNIESTAND, PLANK, RUECKENLAGE, RUECKENLAGE_AUF, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, KH_R, OBERGRIFF, ROLLE_OBEN, kabel, kabelstange } from "./kraftbasis"
import { seitstuetz } from "./kraft_huefte"

// ---------------------------------------------------------------- Stütz
/** Unterarmstütz: Ellbogen unter den Schultern, Körper als Linie */
const unterarm = (schulter = 78, w: Winkel = {}, kipp = 78): Haltung =>
  H({ ...B("schulter", [schulter, 6, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]), ...B("fuss", [-20, 0]), ...B("zehen", [60]), hals: [-8, 0, 0], ...w }, [kipp, 0, 0])
const UNTERARM: Haltung = unterarm()
const STUETZ: Haltung = PLANK
const stuetz = (w: Winkel): Haltung => mit(PLANK, { g: w })
/** Bärenstütz: Vierfüßler, Knie knapp über dem Boden, Zehen aufgestellt */
const BAER: Haltung = mit(VIERFUESSLER, { g: { ...B("huefte", [84, 6, 0]), ...B("knie", [66]), ...B("fuss", [36, 0]), ...B("zehen", [60]) } })

// ---------------------------------------------------------------- Rückenlage
const TISCH: Winkel = { ...B("huefte", [90, 4, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]) }
const ARME_DECKE: Winkel = { ...B("schulter", [90, 6, 0]), ...B("ellbogen", [4, 0]) }
const deadBug = (w: Winkel = {}): Haltung => mit(RUECKENLAGE, { g: { ...TISCH, ...ARME_DECKE, ...w } })
/** Gegengleich: rechter Arm über den Kopf, linkes Bein lang knapp über dem Boden */
const DB_STRECK: Winkel = { schulter_r: [170, 6, 0], huefte_l: [12, 4, 0], knie_l: [2], fuss_l: [-10, 0] }
const DB_STRECK_2: Winkel = { schulter_l: [170, 6, 0], huefte_r: [12, 4, 0], knie_r: [2], fuss_r: [-10, 0] }
const HAENDE_KOPF: Winkel = { ...B("schulter", [150, 60, 0]), ...B("ellbogen", [140, 0]) }
const CRUNCH_UNTEN: Haltung = mit(RUECKENLAGE_AUF, { g: HAENDE_KOPF })
const crunchOben = (w: Winkel = {}): Haltung => mit(RUECKENLAGE_AUF, { g: { ...HAENDE_KOPF, bws: [34, 0, 0], hals: [20, 0, 0], ...w } })
const HOLLOW: Haltung = mit(RUECKENLAGE, { g: { ...B("huefte", [22, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]), ...B("schulter", [165, 8, 0]), ...B("ellbogen", [4, 90]), lws: [4, 0, 0], bws: [14, 0, 0], hals: [10, 0, 0] } })

// ---------------------------------------------------------------- Hang und Stütz am Gerät
const STANGE: Hilfsmittel = { art: "rack", an: "becken", z: -0.08 }
const RICHTUNG = -1
/** Hang an der Klimmzugstange (2,12 m): lehnt sich der Körper zurück (kipp < 0), bleiben die Hände an der Stange */
const RUMPF_LANG = 0.52
const ARM_LANG = 0.62
const hang = (w: Winkel = {}, kipp = 0): Haltung => {
  const r = (kipp * Math.PI) / 180
  const pos: [number, number, number] = [0, 2.12 - RUMPF_LANG * Math.cos(r) - ARM_LANG, RICHTUNG * RUMPF_LANG * Math.sin(r)]
  return H({ ...B("huefte", [6, 4, 0]), ...B("knie", [10]), ...B("fuss", [-20, 0]), ...B("schulter", [176 + kipp, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST, hals: [-8, 0, 0], ...w }, [kipp, 0, 0], { pos, boden: false })
}
const BARREN: Hilfsmittel = { art: "barren", an: "hand_r" }
const barren = (w: Winkel = {}): Haltung => H({ ...B("huefte", [6, 4, 0]), ...B("knie", [20]), ...B("fuss", [-20, 0]), ...B("schulter", [-8, 8, 0]), ...B("ellbogen", [4, 0]), ...B("hand", [80, 0]), ...w }, [0, 0, 0], { pos: [0, 1.2, 0], boden: false })

// ---------------------------------------------------------------- Stand: Tragen, Pallof, Rotation
const SEITE_R: Winkel = { schulter_r: [2, 8, 0], ellbogen_r: [6, HAMMER], ...FAUST }
const FRONT_RACK_L: Winkel = { schulter_l: [40, 20, 0], ellbogen_l: [140, HAMMER] }
const FRONT_RACK_R: Winkel = { schulter_r: [40, 20, 0], ellbogen_r: [140, HAMMER] }
const UEBERKOPF_R: Winkel = { schulter_r: [176, 10, 0], ellbogen_r: [4, HAMMER] }
const LOCKER_L: Winkel = { schulter_l: [4, 12, 0], ellbogen_l: [10, 0] }
/** Gehen auf der Stelle: arme bleiben, Beine wechseln */
const gehen = (arme: Winkel, hilfsmittel: Hilfsmittel[], knie = 30, text = "Aufrecht gehen, Rumpf bleibt gerade"): Dehnung =>
  folge(
    "schraeg",
    [
      [mit(STAND, { g: { ...arme, huefte_l: [knie, 4, 0], knie_l: [knie * 1.2] } }), 0.6, text],
      [mit(STAND, { g: arme }), 0.4],
      [mit(STAND, { g: { ...arme, huefte_r: [knie, 4, 0], knie_r: [knie * 1.2] } }), 0.6],
      [mit(STAND, { g: arme }), 0.4],
    ],
    { hilfsmittel },
  )
/** Kabel seitlich links auf Brusthöhe; Hände vor der Brust oder gestreckt */
const PALLOF_BRUST: Winkel = { ...B("schulter", [30, -6, 0]), ...B("ellbogen", [110, 0]), ...FAUST }
const PALLOF_VOR: Winkel = { ...B("schulter", [88, -6, 0]), ...B("ellbogen", [4, 0]), ...FAUST }
const PALLOF_HOCH: Winkel = { ...B("schulter", [170, -4, 0]), ...B("ellbogen", [4, 0]), ...FAUST }
const BREIT: Winkel = { ...B("huefte", [12, 12, -6]), ...B("knie", [16]), ...B("fuss", [6, 0]) }
const pallofStand = (arme: Winkel, kipp = 6): Haltung => H({ ...BREIT, ...arme }, [kipp, 0, 0])
const ROLLE_SEITE: [number, number, number] = [0.9, 1.15, 0.2]
const pallof = (basis: (arme: Winkel) => Haltung, zug: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", basis(PALLOF_BRUST), basis(PALLOF_VOR), 1.2, { aus: 1.4, halten: 2, seiten: true, texte: ["Griff gerade nach vorn drücken, Rumpf dreht nicht mit", "Zurück zur Brust"], hilfsmittel: zug, ...extra })
const KABEL_SEITE = kabel("haende", ROLLE_SEITE)
const BAND_SEITE: Hilfsmittel[] = [{ art: "bandanker", von: "haende", anker: ROLLE_SEITE }]
const halbknie = (arme: Winkel): Haltung => mit(HALBKNIESTAND, { g: arme })
const kniend = (arme: Winkel): Haltung => mit(KNIESTAND, { g: arme })

/** Drehung des Oberkörpers (Brustwirbelsäule und Lendenwirbelsäule), positiv nach links */
const dreh = (grad: number): Winkel => ({ lws: [0, 0, grad * 0.3], bws: [0, 0, grad * 0.7] })
/** Holzhacker: Hände von oben links nach unten rechts (bzw. umgekehrt beim Lift) */
const HACK_OBEN: Winkel = { schulter_l: [150, -30, 0], ellbogen_l: [8, 0], schulter_r: [130, 20, 0], ellbogen_r: [10, 0], ...FAUST, ...dreh(40) }
const HACK_UNTEN: Winkel = { schulter_l: [40, -30, 0], ellbogen_l: [8, 0], schulter_r: [30, 30, 0], ellbogen_r: [10, 0], ...FAUST, ...dreh(-40) }
const hacken = (basis: (w: Winkel) => Haltung, von: Winkel, bis: Winkel, rolle: [number, number, number], texte: [string, string], zug: "kabel" | "band" = "kabel"): Dehnung =>
  wdh("vorn", basis(von), basis(bis), 1.2, {
    aus: 1.6,
    seiten: true,
    texte,
    hilfsmittel: zug === "kabel" ? [kabelstange(), ...kabel("haende", rolle)] : [{ art: "bandanker", von: "haende", anker: rolle }],
  })
const STAND_HACK = (w: Winkel): Haltung => H({ ...BREIT, ...w }, [8, 0, 0])
const ROTATION_ARME: Winkel = { ...B("schulter", [86, -8, 0]), ...B("ellbogen", [6, 0]), ...FAUST }

// ---------------------------------------------------------------- Golf: Ansprechhaltung
const GOLF_ARME: Winkel = { ...B("schulter", [38, -12, 0]), ...B("ellbogen", [6, 0]), ...FAUST }
const golf = (w: Winkel = {}): Haltung => mit(ATHLETISCH, { g: { ...GOLF_ARME, ...w } })
/** Rückschwung: Oberkörper rechts gedreht, Hände hoch rechts; Treffmoment: Hüfte offen, Hände vor dem Körper */
const RUECKSCHWUNG: Winkel = { schulter_l: [110, -40, 0], ellbogen_l: [6, 0], schulter_r: [90, 30, 0], ellbogen_r: [90, 0], ...dreh(-80), hals: [-20, 0, 50] }
const TREFFMOMENT: Winkel = { ...GOLF_ARME, ...dreh(30), huefte_l: [40, 6, 20], huefte_r: [50, 6, -10] }
const DURCHSCHWUNG: Winkel = { schulter_l: [90, 30, 0], ellbogen_l: [90, 0], schulter_r: [110, -40, 0], ellbogen_r: [6, 0], ...dreh(80), hals: [-20, 0, -50] }

export const KRAFT_RUMPF: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Stütz
  unterarmstuetz: halte("seite", mit(VIERFUESSLER, { g: { ...B("schulter", [90, 6, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]) } }), UNTERARM, { ein: 1.5, aus: 1.5, hinweis: "Körper als Linie, Bauch und Gesäß fest, Ellbogen unter den Schultern." }),
  stuetz_gestreckt: halte("seite", VIERFUESSLER, STUETZ, { ein: 1.5, aus: 1.5, hinweis: "Hände unter den Schultern, Körper als Linie." }),
  unterarmstuetz_lang: halte("seite", UNTERARM, unterarm(112, {}, 82), { ein: 1.5, aus: 1.5, hinweis: "Ellbogen deutlich vor dem Kopf, Becken bleibt in der Linie." }),
  rkc_plank: halte("seite", UNTERARM, unterarm(70, { ...B("hand", [0, 0]), ...FAUST }), { ein: 1.5, aus: 1.5, hinweis: "Fäuste, Ellbogen Richtung Zehen ziehen, alles maximal anspannen." }),
  unterarmstuetz_gewicht: halte("seite", UNTERARM, UNTERARM, { ein: 1, aus: 1.5, hinweis: "Scheibe liegt auf dem oberen Rücken.", hilfsmittel: [{ art: "hantelscheibe", an: "bws" }] }),
  unterarmstuetz_ball: halte("seite", unterarm(60, {}, 58), unterarm(60, {}, 58), { ein: 1, aus: 1.5, hinweis: "Unterarme auf dem Ball, Körper als Linie.", hilfsmittel: [{ art: "gymnastikball", an: "haende" }] }),
  stir_the_pot: folge(
    "schraeg",
    [
      [unterarm(60, {}, 58), 0.8, "Unterarme auf dem Ball"],
      [unterarm(66, { bws: [0, 0, 6] }, 58), 0.8, "Kleine Kreise mit den Unterarmen"],
      [unterarm(54, {}, 58), 0.8],
      [unterarm(66, { bws: [0, 0, -6] }, 58), 0.8],
    ],
    { hilfsmittel: [{ art: "gymnastikball", an: "haende" }] },
  ),
  body_saw: wdh("seite", UNTERARM, unterarm(112, {}, 80), 1.6, {
    aus: 1.6,
    texte: ["Körper auf den Unterarmen nach hinten schieben", "Zurück nach vorn"],
    hilfsmittel: [{ art: "gleitscheibe", an: "fuss_l" }, { art: "gleitscheibe", an: "fuss_r" }],
  }),
  stuetz_wechsel: folge(
    "seite",
    [
      [UNTERARM, 0.8, "Unterarmstütz"],
      [unterarm(78, { schulter_l: [78, 6, 0], ellbogen_l: [0, 90], hand_l: [80, 0] }, 70), 0.8, "Ein Arm auf die Hand"],
      [STUETZ, 0.8, "Zweiter Arm, Becken bleibt ruhig"],
      [unterarm(78, { schulter_r: [78, 6, 0], ellbogen_r: [0, 90], hand_r: [80, 0] }, 70), 0.8, "Zurück auf den Unterarm"],
    ],
  ),
  stuetz_schultertippen: folge(
    "vorn",
    [
      [STUETZ, 0.6, "Stütz, Füße etwas breiter"],
      [stuetz({ schulter_r: [80, -30, 0], ellbogen_r: [120, 90], hand_r: [0, 0] }), 0.7, "Hand tippt die andere Schulter"],
      [STUETZ, 0.5],
      [stuetz({ schulter_l: [80, -30, 0], ellbogen_l: [120, 90], hand_l: [0, 0] }), 0.7, "Andere Seite, Hüfte bleibt ruhig"],
      [STUETZ, 0.5],
    ],
  ),
  unterarmstuetz_armstrecken: folge(
    "seite",
    [
      [UNTERARM, 0.8, "Unterarmstütz"],
      [unterarm(78, { schulter_r: [170, 6, 0], ellbogen_r: [4, 90] }), 1.2, "Einen Arm weit nach vorn strecken"],
      [UNTERARM, 0.8],
      [unterarm(78, { schulter_l: [170, 6, 0], ellbogen_l: [4, 90] }), 1.2, "Anderer Arm"],
    ],
  ),
  stuetz_diagonal: folge(
    "seite",
    [
      [STUETZ, 0.8, "Stütz"],
      [stuetz({ schulter_r: [170, 6, 0], ellbogen_r: [4, 90], hand_r: [0, 0], huefte_l: [-14, 4, 0] }), 1.4, "Arm und gegenüberliegendes Bein heben"],
      [STUETZ, 0.8],
      [stuetz({ schulter_l: [170, 6, 0], ellbogen_l: [4, 90], hand_l: [0, 0], huefte_r: [-14, 4, 0] }), 1.4, "Andere Diagonale"],
    ],
  ),
  baerenstuetz: halte("seite", VIERFUESSLER, BAER, { ein: 1.5, aus: 1.5, hinweis: "Knie schweben wenige Zentimeter über dem Boden, Rücken flach." }),
  baerengang: folge(
    "seite",
    [
      [BAER, 0.5, "Knie knapp über dem Boden"],
      [mit(BAER, { g: { schulter_r: [104, 6, 0], huefte_l: [96, 6, 0], knie_l: [96] } }), 0.6, "Rechte Hand und linker Fuß vor"],
      [BAER, 0.4],
      [mit(BAER, { g: { schulter_l: [104, 6, 0], huefte_r: [96, 6, 0], knie_r: [96] } }), 0.6, "Andere Diagonale"],
      [BAER, 0.4],
    ],
  ),
  // ------------------------------------------------------------ Seitstütz (linker Unterarm unten)
  seitstuetz_knie: halte("vorn", seitstuetz({ ...B("knie", [90]), ...B("fuss", [-30, 0]) }, 80), seitstuetz({ ...B("knie", [90]), ...B("fuss", [-30, 0]) }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Auf Unterarm und Knien, Becken hoch, Körper von Kopf bis Knie als Linie." }),
  seitstuetz: halte("vorn", seitstuetz({}, 82), seitstuetz({}), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Ellbogen unter der Schulter, Becken hoch, Körper als Linie." }),
  seitstuetz_gestreckt: halte("vorn", seitstuetz({}, 82), seitstuetz({ schulter_l: [0, 74, 0], ellbogen_l: [4, 0], hand_l: [-70, 0] }, 70), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Hand unter der Schulter, Arm gestreckt." }),
  seitstuetz_stern: halte("vorn", seitstuetz({}), seitstuetz({ schulter_l: [0, 74, 0], ellbogen_l: [4, 0], hand_l: [-70, 0], huefte_r: [0, 40, 0], schulter_r: [0, 160, 0], ellbogen_r: [4, 0] }, 70), { ein: 2, aus: 2, seiten: true, hinweis: "Oberes Bein und oberen Arm abspreizen, der Körper bildet einen Stern." }),
  seitstuetz_hueftheben: wdh("vorn", seitstuetz({ lws: [0, 24, 0], bws: [0, 8, 0] }), seitstuetz({}), 1.0, { aus: 1.6, seiten: true, texte: ["Becken hochdrücken", "Becken langsam absenken"] }),
  seitstuetz_rotation: wdh("vorn", seitstuetz({ schulter_r: [0, 170, 0], ellbogen_r: [4, 0] }), seitstuetz({ schulter_r: [80, -40, 0], ellbogen_r: [10, 0], bws: [0, 0, -40], lws: [0, 0, -10] }), 1.4, {
    aus: 1.4,
    seiten: true,
    texte: ["Oberen Arm unter dem Körper durchführen", "Wieder öffnen, Blick zur Hand"],
  }),
  seitstuetz_rudern: wdh("vorn", seitstuetz({ schulter_r: [90, 0, 0], ellbogen_r: [4, 0], ...FAUST }), seitstuetz({ schulter_r: [40, 10, 0], ellbogen_r: [100, 0], ...FAUST }), 1.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Griff zum Körper rudern, Becken bleibt oben", "Arm wieder strecken"],
    hilfsmittel: kabel("hand_r", [0, 0.5, 0.9]),
  }),
  // ------------------------------------------------------------ Dead Bug, Bird Dog, Hollow
  dead_bug_fersentippen: folge(
    "seite",
    [
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]) } }), 0.8, "Beine in der Luft, Lendenwirbelsäule am Boden"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]), huefte_l: [36, 4, 0] } }), 1.0, "Eine Ferse langsam zum Boden tippen"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]) } }), 0.8],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]), huefte_r: [36, 4, 0] } }), 1.0, "Andere Ferse"],
    ],
  ),
  dead_bug: folge("seite", [[deadBug(), 0.8, "Arme zur Decke, Beine angewinkelt"], [deadBug(DB_STRECK), 1.6, "Arm und Gegenbein lang machen"], [deadBug(), 1.0], [deadBug(DB_STRECK_2), 1.6, "Andere Seite"], [deadBug(), 1.0]]),
  dead_bug_band: folge("seite", [[deadBug(), 0.8, "Arme gestreckt gegen den Zug des Bands"], [deadBug({ huefte_l: [12, 4, 0], knie_l: [2] }), 1.6, "Ein Bein lang, Arme bleiben"], [deadBug(), 1.0], [deadBug({ huefte_r: [12, 4, 0], knie_r: [2] }), 1.6, "Anderes Bein"], [deadBug(), 1.0]], {
    hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0, 0.3, -1.4] }],
  }),
  dead_bug_gewicht: folge("seite", [[deadBug(FAUST), 0.8, "Hanteln über den Schultern"], [deadBug({ ...DB_STRECK, ...FAUST }), 1.6, "Arm und Gegenbein lang"], [deadBug(FAUST), 1.0], [deadBug({ ...DB_STRECK_2, ...FAUST }), 1.6, "Andere Seite"], [deadBug(FAUST), 1.0]], { hilfsmittel: KH }),
  bird_dog: folge("seite", [[VIERFUESSLER, 0.8, "Vierfüßlerstand"], [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.6, "Arm und Gegenbein lang strecken"], [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.5, "Halten, Becken waagerecht", true], [VIERFUESSLER, 1.2], [mit(VIERFUESSLER, { g: { schulter_l: [178, 4, 0], ellbogen_l: [0, 90], hand_l: [0, 0], huefte_r: [0, 3, 0], knie_r: [4] } }), 1.6, "Andere Diagonale"], [VIERFUESSLER, 1.2]]),
  bird_dog_crunch: folge(
    "seite",
    [
      [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.2, "Arm und Gegenbein strecken"],
      [mit(VIERFUESSLER, { g: { schulter_r: [60, -10, 0], ellbogen_r: [130, 90], huefte_l: [120, -6, 0], knie_l: [120], bws: [18, 0, 0], lws: [10, 0, 0] } }), 1.0, "Ellbogen und Knie unter dem Bauch zusammen"],
      [mit(VIERFUESSLER, { g: { schulter_r: [178, 4, 0], ellbogen_r: [0, 90], hand_r: [0, 0], huefte_l: [0, 3, 0], knie_l: [4] } }), 1.0, "Wieder strecken"],
    ],
    { seiten: true },
  ),
  bird_dog_rudern: wdh(
    "seite",
    H({ huefte_l: [90, 4, 0], knie_l: [90], fuss_l: [-40, 0], huefte_r: [0, 4, 0], knie_r: [4], fuss_r: [-20, 0], schulter_l: [90, 6, 0], ellbogen_l: [30, 90], schulter_r: [90, 8, 0], ellbogen_r: [4, HAMMER], ...FAUST, hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.98, 0], boden: false }),
    H({ huefte_l: [90, 4, 0], knie_l: [90], fuss_l: [-40, 0], huefte_r: [0, 4, 0], knie_r: [4], fuss_r: [-20, 0], schulter_l: [90, 6, 0], ellbogen_l: [30, 90], schulter_r: [40, 10, 0], ellbogen_r: [96, HAMMER], ...FAUST, hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.98, 0], boden: false }),
    1.0,
    { aus: 1.6, seiten: true, texte: ["Hantel zur Hüfte rudern, freies Bein bleibt lang", "Arm wieder strecken"], hilfsmittel: [{ art: "bank", unter: "knie_l", hoehe: 0.45, versatz: [0, 0.25] }, ...KH_R] },
  ),
  hollow_hold: halte("seite", RUECKENLAGE, HOLLOW, { ein: 2, aus: 2, hinweis: "Lendenwirbelsäule fest am Boden, Schultern und gestreckte Beine angehoben." }),
  hollow_rocks: folge("seite", [[HOLLOW, 0.8, "Hollow-Position"], [mit(HOLLOW, { dreh: [-100, 0, 0] }), 0.6, "Nach hinten schaukeln"], [mit(HOLLOW, { dreh: [-80, 0, 0] }), 0.6, "Nach vorn schaukeln, Form bleibt"]]),
  // ------------------------------------------------------------ Am Barren und an der Stange
  l_sitz_dip: halte("seite", barren(), barren({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]) }), { ein: 1.5, aus: 1.5, hinweis: "Im Stütz die gestreckten Beine waagerecht halten.", hilfsmittel: [BARREN] }),
  knieheben_dip: wdh("seite", barren(), barren({ ...B("huefte", [110, 4, 0]), ...B("knie", [110]) }), 1.0, { aus: 1.6, texte: ["Knie zur Brust heben", "Langsam senken"], hilfsmittel: [BARREN] }),
  beinheben_dip: wdh("seite", barren(), barren({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]) }), 1.2, { aus: 1.8, texte: ["Gestreckte Beine bis waagerecht heben", "Langsam senken"], hilfsmittel: [BARREN] }),
  l_sitz_boden: halte("seite", H({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]), ...B("schulter", [0, 8, 0]), ...B("ellbogen", [4, 0]), ...B("hand", [80, 0]) }), H({ ...B("huefte", [96, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]), ...B("schulter", [-4, 8, 0]), ...B("ellbogen", [2, 0]), ...B("hand", [80, 0]), bws: [10, 0, 0] }, [-6, 0, 0]), {
    ein: 1.5,
    aus: 1.5,
    hinweis: "Hände neben der Hüfte, Gesäß und gestreckte Beine vom Boden heben.",
  }),
  l_sitz_haengend: halte("schraeg", hang(), hang({ ...B("huefte", [90, 4, 0]), ...B("knie", [2]) }, -6), { ein: 1.5, aus: 1.5, hinweis: "Im Hang die gestreckten Beine waagerecht halten.", hilfsmittel: [STANGE] }),
  knieheben_haengend: wdh("schraeg", hang(), hang({ ...B("huefte", [110, 4, 0]), ...B("knie", [110]) }, -8), 1.0, { aus: 1.6, texte: ["Knie zur Brust ziehen, nicht schwingen", "Langsam senken"], hilfsmittel: [STANGE] }),
  beinheben_haengend: wdh("schraeg", hang(), hang({ ...B("huefte", [110, 4, 0]), ...B("knie", [4]) }, -14), 1.4, { aus: 1.8, texte: ["Gestreckte Beine nach vorn oben heben", "Langsam senken"], hilfsmittel: [STANGE] }),
  toes_to_bar: wdh("schraeg", hang(), hang({ ...B("huefte", [150, 4, 0]), ...B("knie", [4]), lws: [20, 0, 0], bws: [10, 0, 0] }, -30), 1.4, { aus: 1.8, texte: ["Zehen bis an die Stange", "Langsam senken"], hilfsmittel: [STANGE] }),
  knieheben_haengend_schraeg: folge("schraeg", [[hang(), 0.6, "Hängen"], [hang({ ...B("huefte", [100, 4, -20]), ...B("knie", [110]), lws: [0, 0, 14] }, -8), 1.0, "Knie schräg zur einen Seite"], [hang(), 0.8], [hang({ ...B("huefte", [100, 4, 20]), ...B("knie", [110]), lws: [0, 0, -14] }, -8), 1.0, "Zur anderen Seite"], [hang(), 0.8]], { hilfsmittel: [STANGE] }),
  scheibenwischer_haengend: folge(
    "vorn",
    [
      [hang({ ...B("huefte", [140, 4, 0]), ...B("knie", [4]) }, -30), 1.0, "Beine über Stangenhöhe heben"],
      [hang({ ...B("huefte", [140, 4, 0]), ...B("knie", [4]), lws: [0, 0, 30], bws: [0, 0, 10] }, -30), 1.0, "Zur einen Seite schwenken"],
      [hang({ ...B("huefte", [140, 4, 0]), ...B("knie", [4]), lws: [0, 0, -30], bws: [0, 0, -10] }, -30), 1.6, "Zur anderen Seite"],
      [hang(), 1.2, "Langsam senken"],
    ],
    { hilfsmittel: [STANGE] },
  ),
  // ------------------------------------------------------------ Crunches und Rückenlage
  crunch: wdh("seite", CRUNCH_UNTEN, crunchOben(), 1.0, { aus: 1.4, texte: ["Oberkörper einrollen, Schulterblätter heben", "Langsam ablegen"] }),
  crunch_gewicht: wdh("seite", mit(RUECKENLAGE_AUF, { g: ARME_VERSCHRAENKT }), crunchOben(ARME_VERSCHRAENKT), 1.0, { aus: 1.4, texte: ["Mit der Scheibe auf der Brust einrollen", "Langsam ablegen"], hilfsmittel: [{ art: "hantelscheibe", an: "bws" }] }),
  kabel_crunch: wdh(
    "seite",
    kniend({ ...B("schulter", [150, 20, 0]), ...B("ellbogen", [130, 0]), ...FAUST, ...B("huefte", [30, 4, 0]) }),
    mit(KNIESTAND, { dreh: [30, 0, 0], g: { ...B("schulter", [120, 20, 0]), ...B("ellbogen", [130, 0]), ...FAUST, ...B("huefte", [50, 4, 0]), lws: [20, 0, 0], bws: [30, 0, 0], hals: [20, 0, 0] } }),
    1.2,
    { aus: 1.6, texte: ["Oberkörper mit dem Seil nach unten einrollen", "Langsam aufrichten"], hilfsmittel: kabel("haende", ROLLE_OBEN) },
  ),
  crunch_ball: wdh(
    "seite",
    H({ ...B("huefte", [10, 8, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...HAENDE_KOPF, lws: [-10, 0, 0], bws: [-10, 0, 0] }, [-80, 0, 0], { pos: [0, 0.62, 0], boden: false }),
    H({ ...B("huefte", [30, 8, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...HAENDE_KOPF, lws: [10, 0, 0], bws: [30, 0, 0], hals: [20, 0, 0] }, [-60, 0, 0], { pos: [0, 0.62, 0], boden: false }),
    1.2,
    { aus: 1.6, texte: ["Über den Ball einrollen", "Langsam über den Ball zurück"], hilfsmittel: [{ art: "ball", unter: "becken" }] },
  ),
  reverse_crunch: wdh("seite", mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 14, 0]) } }), mit(RUECKENLAGE, { dreh: [-120, 0, 0], g: { ...B("huefte", [110, 4, 0]), ...B("knie", [100]), ...B("schulter", [-20, 14, 0]), bws: [26, 0, 0] } }), 1.2, {
    aus: 1.6,
    texte: ["Becken einrollen, Hüfte leicht vom Boden", "Langsam abrollen"],
  }),
  mcgill_curl_up: wdh(
    "seite",
    mit(RUECKENLAGE, { g: { huefte_l: [60, 4, 0], knie_l: [100], fuss_l: [10, 0], ...B("schulter", [-10, 30, 0]), ...B("ellbogen", [60, 0]) } }),
    mit(RUECKENLAGE, { g: { huefte_l: [60, 4, 0], knie_l: [100], fuss_l: [10, 0], ...B("schulter", [-10, 30, 0]), ...B("ellbogen", [60, 0]), bws: [14, 0, 0], hals: [4, 0, 0] } }),
    0.8,
    { aus: 1.2, halten: 8, texte: ["Kopf und Schultern minimal heben, Hals lang", "Ablegen"] },
  ),
  beinheben_liegend: wdh("seite", mit(RUECKENLAGE, { g: { ...B("huefte", [10, 4, 0]), ...B("schulter", [0, 14, 0]) } }), mit(RUECKENLAGE, { g: { ...B("huefte", [88, 4, 0]), ...B("schulter", [0, 14, 0]) } }), 1.4, {
    aus: 2.0,
    texte: ["Gestreckte Beine heben, unterer Rücken bleibt am Boden", "Langsam bis knapp über den Boden senken"],
  }),
  v_up: wdh("seite", mit(RUECKENLAGE, { g: { ...B("schulter", [170, 8, 0]), ...B("ellbogen", [4, 90]) } }), H({ ...B("huefte", [96, 4, 0]), ...B("knie", [2]), ...B("fuss", [-20, 0]), ...B("schulter", [92, 8, 0]), ...B("ellbogen", [4, 90]), bws: [10, 0, 0] }, [-46, 0, 0]), 1.0, {
    aus: 1.6,
    texte: ["Arme und Beine gleichzeitig heben, Hände zu den Füßen", "Langsam ablegen"],
  }),
  schraeger_crunch: wdh("seite", CRUNCH_UNTEN, crunchOben({ bws: [30, 0, 22], lws: [4, 0, 6] }), 1.0, { aus: 1.4, seiten: true, texte: ["Schulter zum gegenüberliegenden Knie", "Langsam ablegen"] }),
  fahrrad_crunch: folge(
    "seite",
    [
      [crunchOben({ huefte_l: [100, 4, 0], knie_l: [110], huefte_r: [30, 4, 0], knie_r: [4], bws: [30, 0, 26] }), 0.8, "Ellbogen zum Gegenknie"],
      [crunchOben({ huefte_r: [100, 4, 0], knie_r: [110], huefte_l: [30, 4, 0], knie_l: [4], bws: [30, 0, -26] }), 0.8, "Seite wechseln, Beine radeln"],
    ],
  ),
  scheibenwischer_liegend_rumpf: folge(
    "oben",
    [
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 80, 0]) } }), 0.8, "Beine angewinkelt in der Luft, Arme seitlich"],
      [mit(RUECKENLAGE, { dreh: [-90, -50, 0], g: { ...TISCH, ...B("schulter", [0, 80, 0]), lws: [0, 0, 30], bws: [0, 0, 20] } }), 1.6, "Beine zur Seite kippen, Schultern bleiben am Boden"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 80, 0]) } }), 1.2],
      [mit(RUECKENLAGE, { dreh: [-90, 50, 0], g: { ...TISCH, ...B("schulter", [0, 80, 0]), lws: [0, 0, -30], bws: [0, 0, -20] } }), 1.6, "Zur anderen Seite"],
      [mit(RUECKENLAGE, { g: { ...TISCH, ...B("schulter", [0, 80, 0]) } }), 1.2],
    ],
  ),
  // ------------------------------------------------------------ Rollouts und Gleiten
  rollout_ball: wdh(
    "seite",
    mit(KNIESTAND, { dreh: [40, 0, 0], g: { ...B("huefte", [40, 4, 0]), ...B("schulter", [80, 8, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [0, 0]) } }),
    mit(KNIESTAND, { dreh: [62, 0, 0], g: { ...B("huefte", [20, 4, 0]), ...B("knie", [48]), ...B("schulter", [130, 8, 0]), ...B("ellbogen", [70, 90]), ...B("hand", [0, 0]) } }),
    2.0,
    { aus: 1.6, texte: ["Ball mit den Unterarmen nach vorn rollen", "Zurückziehen, Rumpf fest"], hilfsmittel: [{ art: "gymnastikball", an: "haende" }] },
  ),
  rollout_kniend: wdh(
    "schraeg",
    mit(KNIESTAND, { dreh: [50, 0, 0], g: { ...B("huefte", [50, 6, 0]), ...B("schulter", [60, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }),
    mit(KNIESTAND, { dreh: [78, 0, 0], g: { ...B("huefte", [28, 6, 0]), ...B("knie", [50]), ...B("schulter", [160, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }),
    2.0,
    { aus: 1.6, texte: ["Stange weit nach vorn rollen, Rücken bleibt gerade", "Zurückziehen"], hilfsmittel: [{ art: "langhantel", von: "hand_l", bis: "hand_r" }] },
  ),
  rollout_stehend: wdh(
    "schraeg",
    H({ ...B("huefte", [100, 6, 0]), ...B("knie", [6]), ...B("schulter", [100, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }, [100, 0, 0]),
    H({ ...B("huefte", [10, 6, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]), ...B("zehen", [50]), ...B("schulter", [170, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }, [78, 0, 0]),
    2.4,
    { aus: 2.0, texte: ["Aus dem Stand weit nach vorn ausrollen", "Zurück in den Stand"], hilfsmittel: [{ art: "langhantel", von: "hand_l", bis: "hand_r" }] },
  ),
  pike_gleitscheiben: wdh("seite", STUETZ, H({ ...B("huefte", [100, 4, 0]), ...B("knie", [2]), ...B("fuss", [20, 0]), ...B("schulter", [150, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), hals: [-5, 0, 0] }, [130, 0, 0]), 1.4, {
    aus: 1.6,
    texte: ["Gestreckte Beine zu den Händen ziehen, Hüfte hoch", "Zurück in den Stütz"],
    hilfsmittel: [{ art: "gleitscheibe", an: "fuss_l" }, { art: "gleitscheibe", an: "fuss_r" }],
  }),
  // ------------------------------------------------------------ Seitbeugen, Tragen
  seitbeugen_kh: wdh("vorn", mit(STAND, { g: { ...SEITE_R, ...LOCKER_L } }), mit(STAND, { g: { ...SEITE_R, ...LOCKER_L, lws: [0, -12, 0], bws: [0, -14, 0] } }), 1.2, {
    aus: 1.4,
    seiten: true,
    texte: ["Zur Seite der Hantel neigen", "Über die Gegenseite aufrichten"],
    hilfsmittel: KH_R,
  }),
  seitbeugen_kabel: wdh("vorn", mit(STAND, { g: { ...SEITE_R, ...LOCKER_L } }), mit(STAND, { g: { ...SEITE_R, ...LOCKER_L, lws: [0, 12, 0], bws: [0, 14, 0] } }), 1.2, {
    aus: 1.4,
    seiten: true,
    texte: ["Gegen den Zug zur anderen Seite neigen", "Langsam zurück"],
    hilfsmittel: kabel("hand_r", [-0.6, 0.12, 0]),
  }),
  koffer_tragen: gehen({ ...SEITE_R, ...LOCKER_L }, KH_R, 20, "Gewicht in einer Hand, aufrecht gehen"),
  koffer_marsch: gehen({ ...SEITE_R, ...LOCKER_L }, KH_R, 90, "Knie bis Hüfthöhe, Rumpf neigt nicht"),
  rack_tragen_einarmig: gehen({ ...FRONT_RACK_R, ...LOCKER_L, ...FAUST }, KH_R, 20, "Gewicht vor der Schulter, aufrecht gehen"),
  rack_tragen: gehen({ ...FRONT_RACK_L, ...FRONT_RACK_R, ...FAUST }, KH, 20, "Zwei Gewichte vor den Schultern"),
  kellner_tragen: gehen({ ...UEBERKOPF_R, ...LOCKER_L, ...FAUST }, KH_R, 20, "Arm gestreckt über dem Kopf"),
  tragen_gemischt: gehen({ ...UEBERKOPF_R, schulter_l: [2, 8, 0], ellbogen_l: [6, HAMMER], ...FAUST }, KH, 20, "Ein Gewicht oben, eines unten"),
  // ------------------------------------------------------------ Pallof Press
  pallof_kabel: pallof(pallofStand, KABEL_SEITE),
  pallof_band: pallof(pallofStand, BAND_SEITE),
  pallof_halbkniend: pallof(halbknie, kabel("haende", [0.9, 0.8, 0.2])),
  pallof_kniend: pallof(kniend, kabel("haende", [0.9, 0.8, 0.2])),
  pallof_iso: halte("schraeg", pallofStand(PALLOF_BRUST), pallofStand(PALLOF_VOR), { ein: 1.2, aus: 1.4, seiten: true, hinweis: "Arme gestreckt vor der Brust halten, der Zug will Dich drehen.", hilfsmittel: KABEL_SEITE }),
  pallof_ueberkopf: folge(
    "schraeg",
    [
      [pallofStand(PALLOF_BRUST), 0.8, "Griff vor der Brust"],
      [pallofStand(PALLOF_VOR), 1.0, "Nach vorn drücken"],
      [pallofStand(PALLOF_HOCH), 1.2, "Gestreckt über den Kopf"],
      [pallofStand(PALLOF_VOR), 1.0, "Zurück nach vorn"],
      [pallofStand(PALLOF_BRUST), 1.0, "Zur Brust"],
    ],
    { seiten: true, hilfsmittel: KABEL_SEITE },
  ),
  pallof_walkout: folge(
    "schraeg",
    [
      [pallofStand(PALLOF_VOR), 0.8, "Arme gestreckt vor der Brust"],
      [H({ huefte_l: [12, 4, -6], huefte_r: [12, 20, -6], ...B("knie", [16]), ...B("fuss", [6, 0]), ...PALLOF_VOR }, [6, 0, 0]), 1.0, "Seitlich vom Kabel weg"],
      [pallofStand(PALLOF_VOR), 1.0, "Nachstellen, Rumpf dreht nicht"],
    ],
    { seiten: true, hilfsmittel: KABEL_SEITE },
  ),
  // ------------------------------------------------------------ Holzhacker und Rotation
  chop_halbkniend: hacken(halbknie, HACK_OBEN, HACK_UNTEN, [0.7, 2.0, 0.3], ["Stange diagonal von oben nach unten ziehen", "Kontrolliert zurück"]),
  lift_halbkniend: hacken(halbknie, HACK_UNTEN, HACK_OBEN, [-0.7, 0.12, 0.3], ["Stange diagonal von unten nach oben drücken", "Kontrolliert zurück"]),
  holzhacker_kabel: hacken(STAND_HACK, HACK_OBEN, HACK_UNTEN, [0.7, 2.0, 0.3], ["Griff diagonal nach unten ziehen, Rumpf dreht", "Kontrolliert zurück"]),
  holzhacker_kabel_tief: hacken(STAND_HACK, HACK_UNTEN, HACK_OBEN, [-0.7, 0.12, 0.3], ["Griff diagonal nach oben über die Schulter", "Kontrolliert zurück"]),
  holzhacker_band: hacken(STAND_HACK, HACK_OBEN, HACK_UNTEN, [0.7, 2.0, 0.3], ["Band diagonal nach unten ziehen", "Kontrolliert zurück"], "band"),
  kabel_rotation: wdh("oben", pallofStand({ ...ROTATION_ARME, ...dreh(30) }), pallofStand({ ...ROTATION_ARME, ...dreh(-50) }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Gestreckte Arme waagerecht vom Kabel weg drehen", "Kontrolliert zurück"],
    hilfsmittel: kabel("haende", ROLLE_SEITE),
  }),
  kabel_rotation_halbkniend: wdh("oben", halbknie({ ...ROTATION_ARME, ...dreh(30) }), halbknie({ ...ROTATION_ARME, ...dreh(-50) }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Brustkorb dreht, Becken bleibt fest", "Kontrolliert zurück"],
    hilfsmittel: kabel("haende", [0.9, 0.8, 0.2]),
  }),
  rotation_kh: folge("oben", [[pallofStand(PALLOF_BRUST), 0.6, "Gewicht vor der Brust"], [pallofStand({ ...PALLOF_BRUST, ...dreh(50) }), 1.0, "Oberkörper zur einen Seite drehen"], [pallofStand({ ...PALLOF_BRUST, ...dreh(-50) }), 1.6, "Zur anderen Seite"], [pallofStand(PALLOF_BRUST), 1.0]], { hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  russian_twist: folge(
    "schraeg",
    [
      [H({ ...B("huefte", [100, 6, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]), ...PALLOF_BRUST, bws: [10, 0, 0] }, [-40, 0, 0]), 0.6, "Zurückgelehnt, Ball vor der Brust"],
      [H({ ...B("huefte", [100, 6, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]), ...PALLOF_BRUST, bws: [10, 0, 40], lws: [0, 0, 10] }, [-40, 0, 0]), 0.8, "Ball zur einen Seite"],
      [H({ ...B("huefte", [100, 6, 0]), ...B("knie", [90]), ...B("fuss", [10, 0]), ...PALLOF_BRUST, bws: [10, 0, -40], lws: [0, 0, -10] }, [-40, 0, 0]), 1.2, "Zur anderen Seite"],
    ],
    { hilfsmittel: [{ art: "medizinball", an: "haende" }] },
  ),
  // ------------------------------------------------------------ Golf
  golf_haltung_wand: halte("seite", mit(STAND, { g: GOLF_ARME }), golf(), { ein: 2, aus: 2, hinweis: "Gesäß leicht an der Wand, Rücken lang, Golfhaltung halten.", hilfsmittel: [{ art: "wand", an: "gesaess", richtung: "hinten" }] }),
  golf_kabel_rotation_ansprechhaltung: wdh("vorn", golf(dreh(20)), golf(dreh(-40)), 1.0, { aus: 1.6, seiten: true, texte: ["In der Golfhaltung gegen den Zug drehen", "Kontrolliert zurück"], hilfsmittel: kabel("haende", [0.9, 0.9, 0.2]) }),
  golf_kabel_rueckschwung: wdh("vorn", golf(), golf(RUECKSCHWUNG), 1.2, { aus: 1.6, seiten: true, texte: ["In den Rückschwung drehen", "Zurück in die Ansprechhaltung"], hilfsmittel: kabel("haende", [0.8, 0.12, 0.3]) }),
  golf_kabel_abschwung: wdh("vorn", golf(RUECKSCHWUNG), golf(TREFFMOMENT), 1.0, { aus: 1.8, seiten: true, texte: ["Aus dem Rückschwung bis zum Treffmoment ziehen", "Zurück in den Rückschwung"], hilfsmittel: kabel("haende", [-0.9, 1.6, 0.2]) }),
  golf_holzhacker_ausfallschritt: hacken((w) => H({ huefte_l: [40, 8, 0], knie_l: [40], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [20], fuss_r: [-20, 0], ...w }, [10, 0, 0]), HACK_OBEN, HACK_UNTEN, [0.7, 2.0, -0.2], ["Diagonal von oben hinten nach unten vorn", "Kontrolliert zurück"]),
  golf_lift_ausfallschritt: hacken((w) => H({ huefte_l: [40, 8, 0], knie_l: [40], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [20], fuss_r: [-20, 0], ...w }, [10, 0, 0]), HACK_UNTEN, HACK_OBEN, [-0.7, 0.12, 0.3], ["Diagonal von unten nach oben über die Schulter", "Kontrolliert zurück"]),
  golf_kabel_rudern_rotation: wdh(
    "oben",
    H({ huefte_l: [30, 8, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [16], fuss_r: [-20, 0], schulter_r: [88, 4, 0], ellbogen_r: [4, 0], ...LOCKER_L, ...FAUST, ...dreh(20) }, [10, 0, 0]),
    H({ huefte_l: [30, 8, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [-10, 8, 0], knie_r: [16], fuss_r: [-20, 0], schulter_r: [40, 20, 0], ellbogen_r: [100, 0], ...LOCKER_L, ...FAUST, ...dreh(-30) }, [10, 0, 0]),
    1.0,
    { aus: 1.6, seiten: true, texte: ["Rudern, Oberkörper dreht mit", "Arm wieder strecken"], hilfsmittel: kabel("hand_r", [0, 1.1, 0.9]) },
  ),
  golf_pallof_ansprechhaltung: pallof((arme) => golf(arme), KABEL_SEITE),
  golf_pallof_einbeinig: pallof((arme) => H({ huefte_l: [12, 6, 0], knie_l: [16], fuss_l: [6, 0], huefte_r: [60, 6, 0], knie_r: [80], ...arme }, [6, 0, 0]), KABEL_SEITE),
  golf_iso_rueckschwung: halte("vorn", golf(), golf(RUECKSCHWUNG), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Position am Ende des Rückschwungs gegen den Zug halten.", hilfsmittel: [{ art: "bandanker", von: "haende", anker: [-0.9, 1.4, 0.2] }] }),
  golf_iso_treffmoment: halte("vorn", golf(), golf(TREFFMOMENT), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Treffmoment halten, das Band zieht zur Rückschwungseite.", hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0.9, 0.9, 0.2] }] }),
  golf_vorderes_bein_stemmen_band: wdh("vorn", golf(), golf({ ...TREFFMOMENT, ...DURCHSCHWUNG }), 1.2, { aus: 1.6, seiten: true, texte: ["Vordere Hüfte nach hinten drehen, gegen den Zug stemmen", "Zurück"], hilfsmittel: [{ art: "bandanker", von: "becken", anker: [-0.9, 0.9, 0] }] }),
  golf_hueftdrehung_band_rueckschwung: wdh("vorn", golf(), golf({ ...RUECKSCHWUNG, huefte_l: [50, 6, -10], huefte_r: [40, 6, 20] }), 1.2, { aus: 1.6, seiten: true, texte: ["Kontrolliert in die hintere Hüfte drehen", "Zurück"], hilfsmittel: [{ art: "bandanker", von: "becken", anker: [0.9, 0.9, 0] }] }),
  golf_beckenrotation_band: wdh("vorn", golf(), golf({ huefte_l: [40, 6, 20], huefte_r: [50, 6, -10], ...dreh(-20) }), 1.0, { aus: 1.6, seiten: true, texte: ["Becken gegen den Zug drehen, Oberkörper bleibt", "Zurück"], hilfsmittel: [{ art: "bandanker", von: "becken", anker: [-0.9, 0.9, 0] }] }),
  golf_ball_rotation_bruecke: wdh(
    "vorn",
    H({ ...B("huefte", [0, 8, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...B("schulter", [90, -10, 0]), ...B("ellbogen", [4, 0]), ...FAUST, hals: [20, 0, 0] }, [-90, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    H({ ...B("huefte", [0, 8, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]), ...B("schulter", [90, -10, 0]), ...B("ellbogen", [4, 0]), ...FAUST, hals: [20, 0, 0], ...dreh(60) }, [-90, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    1.4,
    { aus: 1.4, seiten: true, texte: ["Schultern auf dem Ball, Oberkörper zur Seite drehen", "Zurück zur Mitte"], hilfsmittel: [{ art: "ball", unter: "bws" }] },
  ),
  // ------------------------------------------------------------ Reha
  reha_bauchspannung_sitz: halte("seite", STUHLSITZ, mit(STUHLSITZ, { g: { ...B("schulter", [40, 8, 0]), ...B("ellbogen", [20, 90]), ...B("hand", [40, 0]), bws: [4, 0, 0] } }), {
    ein: 1,
    aus: 1.5,
    hinweis: "Aufrecht auf der Stuhlkante, Bauch anspannen, Hände gegen die Knie drücken.",
    hilfsmittel: [{ art: "stuhl", unter: "gesaess", hoehe: 0.45 }],
  }),
}
