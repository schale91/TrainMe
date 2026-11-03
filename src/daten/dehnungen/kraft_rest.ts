// Restliche Kraftübungen mit der Dehnfigur: Bizeps-, Brust-, Schulter- und Zugvarianten, Liegestütz-Formen,
// Handstand an der Wand, seitliche Step-ups und Reha an der Stufe. Maschinen (Schulterpresse, Beinstrecker,
// Beinbeuger sitzend, Pendel- und Belt Squat, Dip-Assistent), die Scottbank und die Negativbank fehlen im Heimstudio.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, PLANK, RUECKENLAGE, SEITLAGE, STAND, STUHLSITZ, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, KH_R, OBERGRIFF, SZ, SZ_GRIFF, UNTERGRIFF, banklage, kabel, kabelstange } from "./kraftbasis"
import { latzug } from "./kraft"
import { dreh, golf } from "./kraft_rumpf"

const HOCH: [string, string] = ["Hochcurlen", "Langsam ablassen"]
const curlStand = (dreh_: number, beuge: number, w: Winkel = {}): Haltung => mit(STAND, { g: { ...B("schulter", [beuge > 60 ? 14 : 2, 6, 0]), ...B("ellbogen", [beuge, dreh_]), ...FAUST, ...w } })
const FLACHBANK: Hilfsmittel = { art: "bank", unter: "bws", hoehe: 0.45 }
const SCHRAEGBANK: Hilfsmittel = { art: "schraegbank", unter: "gesaess", lehne: "bws", hoehe: 0.45 }
const SCHRAEG_BEINE: Winkel = { ...B("huefte", [32, 14, 0]), ...B("knie", [84]), ...B("fuss", [6, 0]), hals: [5, 0, 0] }
const schraeg = (w: Winkel, kipp = -50): Haltung => H({ ...SCHRAEG_BEINE, ...FAUST, ...w }, [kipp, 0, 0], { pos: [0, 0.56, 0], boden: false })
const BRUST_LEHNE: Haltung = mit(STAND, { dreh: [48, 0, 0], g: { ...B("huefte", [40, 10, 0]), ...B("knie", [20]), ...B("fuss", [10, 0]), hals: [-30, 0, 0] } })
const BAUCH_LEHNE: Hilfsmittel = { art: "schraegbank", unter: "becken", lehne: "kopf", hoehe: 0.45, bauch: true }
const LINKS_FREI: Winkel = { schulter_l: [4, 12, 0], ellbogen_l: [10, 0] }
const seitUnten: Winkel = { schulter_r: [6, 8, 0], ellbogen_r: [14, HAMMER], ...FAUST }
const seitOben: Winkel = { schulter_r: [10, 86, 0], ellbogen_r: [14, HAMMER], ...FAUST }
/** Halber Kniestand fürs Golf: Schläger quer vor der Brust */
const SPLIT_TIEF: Winkel = { huefte_l: [88, 6, 0], knie_l: [92], fuss_l: [4, 0], huefte_r: [-12, 6, 0], knie_r: [76], fuss_r: [-40, 0], zehen_r: [60] }
const STAB_BRUST: Winkel = { ...B("schulter", [80, -4, 0]), ...B("ellbogen", [60, OBERGRIFF]), ...FAUST }

// Handstand: Kopf nach unten, Hände am Boden, Rücken zur Wand
const HANDSTAND: Haltung = H({ ...B("huefte", [4, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...B("schulter", [176, 12, 0]), ...B("ellbogen", [4, 90]), ...B("hand", [80, 0]), hals: [-20, 0, 0] }, [180, 0, 0])
const HANDSTAND_UNTEN: Haltung = mit(HANDSTAND, { g: { ...B("schulter", [150, 40, 0]), ...B("ellbogen", [90, 90]) } })
const WAND_HANDSTAND: Hilfsmittel = { art: "wand", an: "gesaess", richtung: "vorn" }

// Seitlicher Step-up: Box rechts neben dem rechten Fuß (Figur sieht nach vorn), links steht am Boden
const SEIT_BOX: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: 0.4 }
const seitUntenStep = (w: Winkel = {}): Haltung => H({ huefte_l: [70, 30, 0], knie_l: [90], fuss_l: [20, 0], huefte_r: [0, 4, 0], knie_r: [4], fuss_r: [0, 0], ...w }, [10, 0, 0], { pos: [-0.28, 0.92, 0], boden: false })
const seitObenStep = (w: Winkel = {}): Haltung => H({ huefte_l: [2, 6, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [10, 6, 0], knie_r: [60], fuss_r: [-10, 0], ...w }, [0, 0, 0], { pos: [0.05, 1.34, 0], boden: false })

export const KRAFT_REST: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Bizeps
  liegender_kh_curl: wdh("seite", banklage({ ...B("schulter", [-80, 16, 0]), ...B("ellbogen", [8, UNTERGRIFF]) }), banklage({ ...B("schulter", [-80, 16, 0]), ...B("ellbogen", [130, UNTERGRIFF]) }), 1.2, {
    aus: 2.2,
    texte: ["Aus der Dehnung neben der Bank hochcurlen", "Langsam ganz strecken"],
    hilfsmittel: [FLACHBANK, ...KH],
  }),
  kabel_curl_ueberkopf: wdh("vorn", mit(STAND, { g: { ...B("schulter", [10, 88, 0]), ...B("ellbogen", [10, UNTERGRIFF]), ...FAUST } }), mit(STAND, { g: { ...B("schulter", [10, 88, 0]), ...B("ellbogen", [125, UNTERGRIFF]), ...FAUST } }), 1.2, {
    aus: 2.0,
    texte: ["Arme seitlich auf Schulterhöhe, Hände zum Kopf curlen", "Langsam strecken"],
    hilfsmittel: [...kabel("hand_l", [1.0, 1.7, 0]), ...kabel("hand_r", [-1.0, 1.7, 0])],
  }),
  spider_curl: wdh("schraeg", mit(BRUST_LEHNE, { g: { ...B("schulter", [48, 8, 0]), ...B("ellbogen", [8, SZ_GRIFF]), ...FAUST } }), mit(BRUST_LEHNE, { g: { ...B("schulter", [60, 8, 0]), ...B("ellbogen", [130, SZ_GRIFF]), ...FAUST } }), 1.2, {
    aus: 2.0,
    texte: HOCH,
    hilfsmittel: [BAUCH_LEHNE, ...SZ],
  }),
  pinch_grip_curl: wdh("seite", curlStand(HAMMER, 8, B("finger", [40, 0])), curlStand(HAMMER, 140, B("finger", [40, 0])), 1.2, { aus: 2.0, texte: ["Scheibe im Pinzettengriff hochcurlen", "Langsam ablassen"], hilfsmittel: [{ art: "hantelscheibe", an: "hand_r" }, { art: "hantelscheibe", an: "hand_l" }] }),
  waiter_curl: wdh("seite", curlStand(UNTERGRIFF, 8, B("schulter", [2, -4, 0])), curlStand(UNTERGRIFF, 135, B("schulter", [14, -4, 0])), 1.2, { aus: 2.0, texte: ["Hantel flach in beiden Händen hochcurlen", "Langsam ablassen"], hilfsmittel: [{ art: "hantel", an: "haende" }] }),
  kabel_curl_liegend: wdh("seite", mit(RUECKENLAGE, { g: { ...B("schulter", [6, 10, 0]), ...B("ellbogen", [8, UNTERGRIFF]), ...FAUST } }), mit(RUECKENLAGE, { g: { ...B("schulter", [6, 10, 0]), ...B("ellbogen", [135, UNTERGRIFF]), ...FAUST } }), 1.2, {
    aus: 2.0,
    texte: ["Im Liegen zur Brust curlen, Ellbogen bleiben am Boden", "Langsam strecken"],
    hilfsmittel: [kabelstange(), ...kabel("haende", [0, 0.12, 1.4])],
  }),
  // ------------------------------------------------------------ Brust und Liegestütz
  // ------------------------------------------------------------ Handstand
  handstand_halten_wand: halte("seite", mit(PLANK, { dreh: [120, 0, 0] }), HANDSTAND, { ein: 2, aus: 2, hinweis: "Arme gestreckt, Körper als Linie, Rücken zur Wand.", hilfsmittel: [WAND_HANDSTAND] }),
  handstand_liegestuetz: wdh("seite", HANDSTAND, HANDSTAND_UNTEN, 2.0, { aus: 1.4, texte: ["Kopf kontrolliert zum Boden senken", "Hochdrücken"], hilfsmittel: [WAND_HANDSTAND] }),
  // ------------------------------------------------------------ Einbeinig
  step_up_seitlich: wdh("vorn", seitUntenStep(), seitObenStep(), 1.4, { aus: 1.8, seiten: true, texte: ["Seitlich auf die Box steigen", "Kontrolliert zurück"], hilfsmittel: [SEIT_BOX, ...KH] }),
  step_up_crossover: wdh("vorn", seitUntenStep({ huefte_l: [70, -10, 0] }), seitObenStep(), 1.4, { aus: 1.8, seiten: true, texte: ["Bein vor dem Standbein auf die Box kreuzen", "Kontrolliert zurück"], hilfsmittel: [SEIT_BOX] }),
  peterson_step_up: wdh(
    "seite",
    H({ huefte_l: [40, 6, 0], knie_l: [70], fuss_l: [30, 0], huefte_r: [-4, 6, 0], knie_r: [6], fuss_r: [-8, 0] }, [6, 0, 0], { pos: [0, 0.86, -0.05], boden: false }),
    H({ huefte_l: [2, 6, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [10, 6, 0], knie_r: [30], fuss_r: [-20, 0] }, [0, 0, 0], { pos: [0, 1.09, 0.12], boden: false }),
    1.4,
    { aus: 1.8, seiten: true, texte: ["Ferse hoch, Knie weit vor, auf die niedrige Stufe", "Langsam zurück"], hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.15 }] },
  ),
  step_down_seitlich: wdh(
    "vorn",
    H({ huefte_l: [4, 6, 0], knie_l: [4], fuss_l: [0, 0], huefte_r: [0, 6, 0], knie_r: [6], fuss_r: [-10, 0] }, [0, 0, 0], { pos: [0, 1.38, 0], boden: false }),
    H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [10, 0], huefte_r: [20, 6, 0], knie_r: [6], fuss_r: [-10, 0] }, [16, 0, 0], { pos: [0, 1.12, 0.06], boden: false }),
    2.4,
    { aus: 1.6, seiten: true, texte: ["Freien Fuß seitlich neben der Box langsam absenken", "Hochdrücken"], hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.45, versatz: [0.12, 0] }] },
  ),
  golf_ausfallschritt_rotation_schlaeger: folge("vorn", [[H({ ...SPLIT_TIEF, ...STAB_BRUST }, [4, 0, 0]), 0.8, "Ausfallschritt, Schläger vor der Brust"], [H({ ...SPLIT_TIEF, ...STAB_BRUST, ...dreh(45) }, [4, 0, 0]), 1.2, "Oberkörper zum vorderen Bein drehen"], [H({ ...SPLIT_TIEF, ...STAB_BRUST }, [4, 0, 0]), 1.0]], { seiten: true, hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  reha_ausfallschritt_halt: wdh("seite", H({ huefte_l: [24, 6, 0], knie_l: [10], fuss_l: [-10, 0], huefte_r: [-16, 6, 0], knie_r: [8], fuss_r: [-30, 0], zehen_r: [45], schulter_l: [10, 30, 0], ellbogen_l: [20, 90] }), H({ huefte_l: [60, 6, 0], knie_l: [60], fuss_l: [10, 0], huefte_r: [-6, 6, 0], knie_r: [50], fuss_r: [-40, 0], zehen_r: [60], schulter_l: [20, 30, 0], ellbogen_l: [20, 90] }, [4, 0, 0]), 2.0, {
    aus: 1.8,
    seiten: true,
    texte: ["Mit Halt am Stuhl ein kleines Stück tief", "Aufrichten"],
    hilfsmittel: [{ art: "stuhl", unter: "hand_l", hoehe: 0.45, versatz: [0.15, 0] }],
  }),
  reha_stufe_gelaender: wdh(
    "seite",
    H({ huefte_l: [40, 6, 0], knie_l: [50], fuss_l: [10, 0], huefte_r: [-4, 6, 0], knie_r: [4], fuss_r: [-8, 0], schulter_l: [20, 30, 0], ellbogen_l: [60, 90] }, [6, 0, 0], { pos: [0, 0.92, -0.05], boden: false }),
    H({ huefte_l: [2, 6, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [10, 6, 0], knie_r: [30], fuss_r: [-20, 0], schulter_l: [20, 30, 0], ellbogen_l: [60, 90] }, [0, 0, 0], { pos: [0, 1.12, 0.2], boden: false }),
    1.6,
    { aus: 2.0, seiten: true, texte: ["Mit Halt am Geländer eine Stufe hoch", "Langsam zurück"], hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.18 }] },
  ),
  reha_stufe_runter: wdh(
    "seite",
    H({ huefte_l: [2, 6, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [10, 6, 0], knie_r: [10], fuss_r: [-10, 0], schulter_l: [20, 30, 0], ellbogen_l: [60, 90] }, [0, 0, 0], { pos: [0, 1.12, 0], boden: false }),
    H({ huefte_l: [40, 6, 0], knie_l: [50], fuss_l: [10, 0], huefte_r: [20, 6, 0], knie_r: [6], fuss_r: [-10, 0], schulter_l: [20, 30, 0], ellbogen_l: [60, 90] }, [10, 0, 0], { pos: [0, 0.98, 0.04], boden: false }),
    2.0,
    { aus: 1.6, seiten: true, texte: ["Freie Ferse langsam zum Boden", "Zurück auf die Stufe"], hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.18 }] },
  ),
  reha_oberschenkel_anspannen: halte("seite", mit(STUHLSITZ, { g: { knie_r: [10], fuss_r: [10, 0] } }), mit(STUHLSITZ, { g: { knie_r: [2], fuss_r: [20, 0] } }), {
    ein: 1,
    aus: 1.5,
    seiten: true,
    hinweis: "Bein gestreckt, Oberschenkel fest anspannen, Kniekehle drückt nach unten.",
    hilfsmittel: [{ art: "stuhl", unter: "gesaess", hoehe: 0.45 }],
  }),
  // ------------------------------------------------------------ Schulter
  golf_schulterblatt_rudern_golfhaltung: wdh("seite", golf({ ...B("schulter", [38, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST }), golf({ ...B("schulter", [10, 30, 0]), ...B("ellbogen", [90, HAMMER]), ...B("schulterblatt", [0, -14]), ...FAUST }), 1.0, {
    aus: 1.6,
    texte: ["In der Golfhaltung rudern, Schulterblätter zusammen", "Arme wieder strecken"],
    hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0, 0.3, 0.9] }],
  }),
  golf_ytw_golfhaltung: folge("seite", [[golf({ ...B("schulter", [38, 8, 0]), ...B("ellbogen", [6, 0]) }), 0.6, "Golfhaltung, Arme hängen"], [golf({ ...B("schulter", [150, 30, 0]), ...B("ellbogen", [4, 0]) }), 1.0, "Y: Arme schräg nach vorn oben"], [golf({ ...B("schulter", [40, 8, 0, 85]), ...B("ellbogen", [4, 0]) }), 1.0, "T: Arme seitlich öffnen"], [golf({ ...B("schulter", [30, 60, 0, 40]), ...B("ellbogen", [90, 0]) }), 1.0, "W: Ellbogen zurück, Schulterblätter zusammen"]], { hilfsmittel: KH }),
  rear_delt_flye_seitlage: wdh("vorn", mit(SEITLAGE, { g: { schulter_r: [90, 0, 0], ellbogen_r: [10, HAMMER], ...FAUST } }), mit(SEITLAGE, { g: { schulter_r: [90, 0, 0, 80], ellbogen_r: [10, HAMMER], ...FAUST } }), 1.2, {
    aus: 2.0,
    seiten: true,
    texte: ["Oberen Arm im Bogen zur Decke führen", "Langsam senken"],
    hilfsmittel: KH_R,
  }),
  aussenrotation_seitlage: wdh("vorn", mit(SEITLAGE, { g: { schulter_r: [0, 4, -40], ellbogen_r: [90, HAMMER], ...FAUST } }), mit(SEITLAGE, { g: { schulter_r: [0, 4, 50], ellbogen_r: [90, HAMMER], ...FAUST } }), 1.2, {
    aus: 2.0,
    seiten: true,
    texte: ["Ellbogen am Körper, Unterarm nach oben drehen", "Langsam zurück"],
    hilfsmittel: KH_R,
  }),
  aussenrotation_kh_knie: wdh(
    "schraeg",
    H({ ...B("huefte", [90, 8, 0]), knie_l: [90], huefte_r: [120, 8, 0], knie_r: [110], schulter_r: [80, 20, -40], ellbogen_r: [90, HAMMER], ...FAUST }, [14, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    H({ ...B("huefte", [90, 8, 0]), knie_l: [90], huefte_r: [120, 8, 0], knie_r: [110], schulter_r: [80, 20, 50], ellbogen_r: [90, HAMMER], ...FAUST }, [14, 0, 0], { pos: [0, 0.5, 0], boden: false }),
    1.2,
    { aus: 2.0, seiten: true, texte: ["Ellbogen auf dem Knie, Hantel nach oben drehen", "Langsam zurück"], hilfsmittel: [{ art: "bank", unter: "gesaess", hoehe: 0.45, quer: true }, ...KH_R] },
  ),
  wall_slide_faszienrolle: wdh("seite", mit(STAND, { g: { ...B("schulter", [80, 10, 15]), ...B("ellbogen", [90, 90]) } }), mit(STAND, { g: { ...B("schulter", [150, 20, 0]), ...B("ellbogen", [30, 90]) } }), 2.0, {
    aus: 2.0,
    texte: ["Unterarme an der Wand nach oben schieben", "Langsam zurück"],
    hilfsmittel: [{ art: "wand", an: "haende", richtung: "vorn" }],
  }),
  kb_arm_bar: folge("oben", [[mit(RUECKENLAGE, { g: { schulter_r: [90, 6, 0], ellbogen_r: [4, HAMMER], ...FAUST } }), 1.0, "Rückenlage, Gewicht senkrecht über der Schulter"], [mit(RUECKENLAGE, { dreh: [-90, -60, 0], g: { schulter_r: [90, 6, 0], ellbogen_r: [4, HAMMER], ...FAUST, huefte_r: [70, -20, 0], knie_r: [90], lws: [0, 0, 20] } }), 2.0, "Zur Seite rollen, Arm bleibt senkrecht"], [mit(RUECKENLAGE, { dreh: [-90, -60, 0], g: { schulter_r: [90, 6, 0], ellbogen_r: [4, HAMMER], ...FAUST, huefte_r: [70, -20, 0], knie_r: [90], lws: [0, 0, 20] } }), 3.0, "Halten, Blick zum Gewicht", true], [mit(RUECKENLAGE, { g: { schulter_r: [90, 6, 0], ellbogen_r: [4, HAMMER], ...FAUST } }), 2.0, "Zurückrollen"]], { seiten: true, hilfsmittel: KH_R }),
  ball_wand_kreisen: folge("seite", [[mit(STAND, { g: { schulter_r: [90, 4, 0], ellbogen_r: [6, 0], ...LINKS_FREI } }), 0.8, "Arm gestreckt, Ball an der Wand"], [mit(STAND, { g: { schulter_r: [96, 10, 0], ellbogen_r: [6, 0], ...LINKS_FREI } }), 0.6, "Kleine Kreise"], [mit(STAND, { g: { schulter_r: [90, 16, 0], ellbogen_r: [6, 0], ...LINKS_FREI } }), 0.6], [mit(STAND, { g: { schulter_r: [84, 10, 0], ellbogen_r: [6, 0], ...LINKS_FREI } }), 0.6]], { seiten: true, hilfsmittel: [{ art: "medizinball", an: "hand_r" }] }),
  seitheben_aegyptisch: wdh("vorn", mit(STAND, { dreh: [0, 0, 14], g: { ...seitUnten, schulter_l: [10, 60, 0], ellbogen_l: [4, 0] } }), mit(STAND, { dreh: [0, 0, 14], g: { ...seitOben, schulter_l: [10, 60, 0], ellbogen_l: [4, 0] } }), 1.2, {
    aus: 2.0,
    seiten: true,
    texte: ["Vom Pfosten weg gelehnt seitlich heben", "Langsam senken"],
    hilfsmittel: [{ art: "rack", an: "hand_l", z: -0.05 }, ...KH_R],
  }),
  seitheben_lean_away_kabel: wdh("vorn", mit(STAND, { dreh: [0, 0, 14], g: { ...seitUnten, schulter_l: [10, 60, 0], ellbogen_l: [4, 0] } }), mit(STAND, { dreh: [0, 0, 14], g: { ...seitOben, schulter_l: [10, 60, 0], ellbogen_l: [4, 0] } }), 1.2, {
    aus: 2.0,
    seiten: true,
    texte: ["Vom Turm weg gelehnt seitlich heben", "Langsam senken"],
    hilfsmittel: kabel("hand_r", [0.5, 0.12, 0.1]),
  }),
  seitheben_kabel_hinter_ruecken: wdh("vorn", mit(STAND, { g: { ...seitUnten, ...LINKS_FREI } }), mit(STAND, { g: { ...seitOben, ...LINKS_FREI } }), 1.2, {
    aus: 2.0,
    seiten: true,
    texte: ["Kabel läuft hinter dem Rücken, seitlich heben", "Langsam senken"],
    hilfsmittel: kabel("hand_r", [0.45, 0.12, -0.35]),
  }),
  // ------------------------------------------------------------ Trizeps
  skull_crusher_schraeg: wdh("schraeg", schraeg({ ...B("schulter", [150, 10, 0]), ...B("ellbogen", [6, SZ_GRIFF]) }), schraeg({ ...B("schulter", [150, 10, 0]), ...B("ellbogen", [120, SZ_GRIFF]) }), 2.0, {
    aus: 1.4,
    texte: ["Stange hinter den Kopf senken, Oberarme bleiben", "Strecken"],
    hilfsmittel: [SCHRAEGBANK, ...SZ],
  }),
  tate_press: wdh("schraeg", banklage({ ...B("schulter", [90, 10, 0]), ...B("ellbogen", [6, OBERGRIFF]) }), banklage({ ...B("schulter", [80, 50, 0]), ...B("ellbogen", [110, OBERGRIFF]) }), 2.0, {
    aus: 1.4,
    texte: ["Ellbogen nach außen, Hanteln zur Brust senken", "Strecken"],
    hilfsmittel: [FLACHBANK, ...KH],
  }),
  trizeps_kabel_kreuz: wdh("vorn", mit(STAND, { g: { ...B("schulter", [60, -20, 0]), ...B("ellbogen", [100, HAMMER]), ...FAUST } }), mit(STAND, { g: { ...B("schulter", [10, 40, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST } }), 1.0, {
    aus: 1.6,
    texte: ["Aus der Kreuzung nach unten außen strecken", "Langsam zurück"],
    hilfsmittel: [...kabel("hand_l", [-0.9, 2.0, 0.1]), ...kabel("hand_r", [0.9, 2.0, 0.1])],
  }),
  // ------------------------------------------------------------ Ziehen
  rudern_tuer: wdh("seite", mit(STAND, { dreh: [-24, 0, 0], g: { ...B("huefte", [20, 6, 0]), ...B("knie", [30]), ...B("fuss", [20, 0]), ...B("schulter", [70, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST } }), mit(STAND, { dreh: [-24, 0, 0], g: { ...B("huefte", [20, 6, 0]), ...B("knie", [30]), ...B("fuss", [20, 0]), ...B("schulter", [10, 20, 0]), ...B("ellbogen", [110, HAMMER]), ...FAUST } }), 1.0, {
    aus: 1.6,
    texte: ["Am Türrahmen zurückgelehnt zum Rahmen ziehen", "Arme langsam strecken"],
    hilfsmittel: [{ art: "tuer", an: "hand_r" }],
  }),
  golf_vorderer_arm_kabelzug_gestreckt: wdh("vorn", golf({ schulter_l: [130, -20, 0], ellbogen_l: [4, 0], schulter_r: [40, 10, 0], ellbogen_r: [20, 0], ...FAUST }), golf({ schulter_l: [40, -20, 0], ellbogen_l: [4, 0], schulter_r: [40, 10, 0], ellbogen_r: [20, 0], ...FAUST }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Vorderen Arm gestreckt nach unten ziehen", "Kontrolliert zurück"],
    hilfsmittel: kabel("hand_l", [-0.6, 2.0, 0.3]),
  }),
  latzug_einarmig: (() => {
    const d = latzug(HAMMER, 14, [])
    const frei: Winkel = { schulter_l: [10, 20, 0], ellbogen_l: [60, 0] }
    return { ...d, start: mit(d.start, { g: frei }), ziel: mit(d.ziel!, { g: frei }), seiten: true, texte: ["Griff einarmig zur Schulter ziehen", "Kontrolliert nach oben lassen"], hilfsmittel: [...kabel("hand_r", [0, 2.15, 0.55]), { art: "bank", unter: "gesaess", hoehe: 0.42 }] }
  })(),
}
