// Griff, Unterarm und Nacken mit der Dehnfigur: Hängen, Tragen, Pinch, Handgelenk (sitzend, Unterarm auf dem
// Oberschenkel), Golf-Handgelenk mit dem Schläger, Nacken mit Scheibe auf der Bank, Isometrie und Band.
//
// hand_l/r: [strecken (Handrücken zum Unterarm), zur Daumenseite]; ellbogen_l/r[1]: 0 Hammer, -80 Untergriff, 90 Obergriff.
// hals: [beugen nach vorn, neigen nach links, drehen nach links]. Nackenmaschine und der Ball an der Wand fehlen
// im Heimstudio bzw. als Gerät; diese Übungen behalten die einfache Figur.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, RUECKENLAGE, SEITLAGE, STAND, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, KH_R, OBERGRIFF, UNTERGRIFF, banklage } from "./kraftbasis"
import { STANGE, gehen, hang } from "./kraft_rumpf"

const LH: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
const SEITE: Winkel = { ...B("schulter", [2, 8, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST }
const SEITE_R: Winkel = { schulter_r: [2, 8, 0], ellbogen_r: [6, HAMMER], ...FAUST, schulter_l: [4, 12, 0], ellbogen_l: [10, 0] }
const PINCH: Winkel = { ...B("schulter", [2, 10, 0]), ...B("ellbogen", [6, HAMMER]), ...B("finger", [40, 0]) }
const SCHEIBEN: Hilfsmittel[] = [{ art: "hantelscheibe", an: "hand_l" }, { art: "hantelscheibe", an: "hand_r" }]

/** Sitzend quer auf der Bank, Unterarme liegen auf den Oberschenkeln, Hände ragen über die Knie */
const SITZBANK: Hilfsmittel = { art: "bank", unter: "gesaess", hoehe: 0.45, quer: true }
const sitzUnterarm = (dreh: number, hand: number, w: Winkel = {}): Haltung =>
  H({ ...B("huefte", [90, 8, 0]), ...B("knie", [90]), ...B("schulter", [40, 8, 0]), ...B("ellbogen", [76, dreh]), ...B("hand", [hand, 0]), ...FAUST, ...w }, [26, 0, 0], { pos: [0, 0.5, 0], boden: false })
const handgelenk = (dreh: number, von: number, bis: number, hilfsmittel: Hilfsmittel[], texte: [string, string], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", sitzUnterarm(dreh, von), sitzUnterarm(dreh, bis), 1.0, { aus: 2.0, texte, hilfsmittel: [SITZBANK, ...hilfsmittel], ...extra })

/** Golfschläger in der rechten Hand: Stab von der Hand durch den Griff */
const SCHLAEGER: Hilfsmittel[] = [{ art: "stab", von: "hand_r", bis: "griff_r" }]
const ARM_VOR_R: Winkel = { schulter_r: [80, 6, 0], ellbogen_r: [6, HAMMER], ...FAUST, schulter_l: [4, 12, 0], ellbogen_l: [10, 0] }

/** Rückenlage auf der Bank, Kopf über dem Ende; Bauchlage entsprechend */
const BANK_KOPF_FREI: Hilfsmittel = { art: "bank", unter: "bws", hoehe: 0.45, versatz: [0, 0.43] }
/** Beine liegen gestreckt auf der Bank */
const BEINE_LANG: Winkel = { ...B("huefte", [0, 8, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]) }
const BAUCH_BANK = (hals: number): Haltung =>
  H({ ...B("huefte", [4, 8, 0]), ...B("knie", [4]), ...B("fuss", [-40, 0]), ...B("schulter", [150, 40, 0]), ...B("ellbogen", [130, 90]), hals: [hals, 0, 0] }, [90, 0, 0], { pos: [0, 0.52, 0], boden: false })

const STAND_W: Haltung = mit(STAND, { g: B("huefte", [0, 6, 0]) })
const handStirn = (w: Winkel): Haltung => mit(STAND_W, { g: { schulter_r: [130, 10, 0], ellbogen_r: [130, 90], schulter_l: [4, 12, 0], ellbogen_l: [10, 0], ...w } })

export const KRAFT_GRIFF: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Hängen und Tragen
  totes_haengen: halte("schraeg", mit(STAND, { g: B("schulter", [170, 14, 0]) }), hang(), { ein: 1.5, aus: 1.5, hinweis: "Gestreckte Arme, locker hängen, Schultern leicht aktiv.", hilfsmittel: [STANGE] }),
  handtuch_haengen: halte("schraeg", mit(STAND, { g: B("schulter", [170, 14, 0]) }), hang(B("ellbogen", [4, HAMMER])), { ein: 1.5, aus: 1.5, hinweis: "An zwei Handtüchern über der Stange hängen, dicker Griff.", hilfsmittel: [STANGE] }),
  haengen_einarmig: halte("schraeg", hang(), hang({ schulter_r: [20, 20, 0], ellbogen_r: [40, 0], lws: [0, 6, 0] }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "An einer Hand hängen, Schulter aktiv, Körper ruhig.", hilfsmittel: [STANGE] }),
  farmers_walk: gehen(SEITE, KH, 20, "Schwere Gewichte in beiden Händen, aufrecht gehen"),
  pinch_carry: gehen(PINCH, SCHEIBEN, 20, "Scheiben im Pinzettengriff, aufrecht gehen"),
  scheiben_pinch: halte("schraeg", mit(STAND_W, { g: { ...PINCH, ...B("finger", [10, 0]) } }), mit(STAND_W, { g: PINCH }), { ein: 1, aus: 1.5, hinweis: "Scheiben zwischen Daumen und Fingern halten.", hilfsmittel: SCHEIBEN }),
  hantelkopf_pinch: halte("schraeg", mit(STAND_W, { g: { ...SEITE_R, finger_r: [10, 0] } }), mit(STAND_W, { g: { ...SEITE_R, finger_r: [40, 0] } }), { ein: 1, aus: 1.5, seiten: true, hinweis: "Kurzhantel nur am Kopf greifen und halten.", hilfsmittel: KH_R }),
  isometrischer_halt_griff: halte("schraeg", mit(STAND_W, { g: { ...B("schulter", [2, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }), mit(STAND_W, { g: { ...B("schulter", [2, 8, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }), { ein: 1, aus: 1.5, hinweis: "Schwere Stange im Doppel-Obergriff halten, Arme gestreckt.", hilfsmittel: LH }),
  dicker_griff_halt: halte("schraeg", mit(STAND_W, { g: SEITE }), mit(STAND_W, { g: SEITE }), { ein: 1, aus: 1.5, hinweis: "Hanteln mit dickem Griff halten.", hilfsmittel: KH }),
  kb_bottoms_up_halt: halte("seite", mit(STAND_W, { g: SEITE_R }), mit(STAND_W, { g: { schulter_r: [20, 10, 0], ellbogen_r: [90, HAMMER], ...FAUST, schulter_l: [4, 12, 0], ellbogen_l: [10, 0] } }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Kettlebell umgedreht vor der Schulter halten, fester Griff.", hilfsmittel: KH_R }),
  // ------------------------------------------------------------ Handgelenk
  handgelenk_curl_hinter_ruecken: wdh(
    "schraeg",
    mit(STAND_W, { g: { ...B("schulter", [-28, 8, 0]), ...B("ellbogen", [4, UNTERGRIFF]), ...B("hand", [30, 0]), ...FAUST } }),
    mit(STAND_W, { g: { ...B("schulter", [-28, 8, 0]), ...B("ellbogen", [4, UNTERGRIFF]), ...B("hand", [-50, 0]), ...FAUST } }),
    1.0,
    { aus: 1.6, texte: ["Stange hinter dem Gesäß mit den Handgelenken hochcurlen", "Langsam senken"], hilfsmittel: LH },
  ),
  fingercurl: wdh("schraeg", sitzUnterarm(UNTERGRIFF, 30, B("finger", [10, 0])), sitzUnterarm(UNTERGRIFF, -30, B("finger", [90, 0])), 1.2, {
    aus: 1.8,
    texte: ["Stange aus den Fingerspitzen in die Faust rollen", "Langsam in die Finger abrollen"],
    hilfsmittel: [SITZBANK, ...LH],
  }),
  wrist_roller: folge(
    "seite",
    [
      [mit(STAND_W, { g: { ...B("schulter", [88, 6, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST } }), 0.6, "Arme gestreckt vor dem Körper"],
      [mit(STAND_W, { g: { ...B("schulter", [88, 6, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST, hand_l: [-40, 0], hand_r: [30, 0] } }), 0.6, "Stab abwechselnd drehen, Seil wickelt auf"],
      [mit(STAND_W, { g: { ...B("schulter", [88, 6, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST, hand_l: [30, 0], hand_r: [-40, 0] } }), 0.6],
    ],
    { hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }, { art: "bandanker", von: "haende", anker: [0, 0.35, 0.55] }] },
  ),
  radialduktion: wdh("vorn", mit(STAND_W, { g: { ...SEITE_R, hand_r: [0, -20] } }), mit(STAND_W, { g: { ...SEITE_R, hand_r: [0, 30] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Hantelkopf zur Daumenseite anheben", "Langsam senken"],
    hilfsmittel: KH_R,
  }),
  ulnarduktion: wdh("vorn", mit(STAND_W, { g: { ...SEITE_R, hand_r: [0, 20] } }), mit(STAND_W, { g: { ...SEITE_R, hand_r: [0, -30] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Zur Kleinfingerseite anheben, Gewicht hinten", "Langsam senken"],
    hilfsmittel: KH_R,
  }),
  pronation_supination: wdh("schraeg", sitzUnterarm(UNTERGRIFF, 0), sitzUnterarm(OBERGRIFF, 0), 1.6, { aus: 1.6, texte: ["Unterarm langsam nach innen drehen", "Langsam nach außen drehen"], hilfsmittel: [SITZBANK, ...KH] }),
  handgelenk_strecken_exzentrisch: handgelenk(OBERGRIFF, 40, -40, KH, ["Mit Hilfe der anderen Hand hochbringen", "Allein langsam absenken"], { ein: 1.0, aus: 4.0 }),
  handgelenk_beugen_exzentrisch: handgelenk(UNTERGRIFF, 40, -40, KH, ["Mit Hilfe der anderen Hand beugen", "Allein langsam absenken"], { ein: 1.0, aus: 4.0 }),
  handgelenk_strecken_isometrisch: halte("seite", sitzUnterarm(OBERGRIFF, 0), sitzUnterarm(OBERGRIFF, 10), { ein: 1, aus: 1.5, hinweis: "Handgelenk neutral halten, Handrücken oben, gegen das Gewicht.", hilfsmittel: [SITZBANK, ...KH] }),
  handgelenk_beugen_isometrisch: halte("seite", sitzUnterarm(UNTERGRIFF, 0), sitzUnterarm(UNTERGRIFF, -10), { ein: 1, aus: 1.5, hinweis: "Handfläche oben, Handgelenk neutral gegen das Gewicht halten.", hilfsmittel: [SITZBANK, ...KH] }),
  finger_strecken_band: wdh("seite", mit(STAND_W, { g: { ...B("schulter", [40, 6, 0]), ...B("ellbogen", [80, HAMMER]), ...B("finger", [50, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [40, 6, 0]), ...B("ellbogen", [80, HAMMER]), ...B("finger", [0, 20]) } }), 0.8, {
    aus: 1.2,
    texte: ["Finger gegen das Band auseinanderspreizen", "Langsam schließen"],
  }),
  handtuch_auswringen: folge(
    "vorn",
    [
      [mit(STAND_W, { g: { ...B("schulter", [50, -6, 0]), ...B("ellbogen", [60, HAMMER]), ...FAUST } }), 0.6, "Handtuch vor dem Körper greifen"],
      [mit(STAND_W, { g: { ...B("schulter", [50, -6, 0]), ...B("ellbogen", [60, HAMMER]), ...FAUST, hand_l: [40, 0], hand_r: [-40, 0] } }), 1.2, "Kräftig gegeneinander verdrehen"],
      [mit(STAND_W, { g: { ...B("schulter", [50, -6, 0]), ...B("ellbogen", [60, HAMMER]), ...FAUST, hand_l: [-40, 0], hand_r: [40, 0] } }), 1.2, "Andere Richtung"],
    ],
    { hilfsmittel: [{ art: "band", von: "hand_l", bis: "hand_r" }] },
  ),
  // ------------------------------------------------------------ Golf mit dem Schläger
  golf_handgelenk_anwinkeln_schlaeger: wdh("seite", mit(STAND_W, { g: { ...SEITE_R, hand_r: [0, -10] } }), mit(STAND_W, { g: { ...SEITE_R, hand_r: [0, 35] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Schlägerkopf nur aus dem Handgelenk anheben", "Langsam senken"],
    hilfsmittel: SCHLAEGER,
  }),
  golf_handgelenk_ulnar_schlaeger: wdh("seite", mit(STAND_W, { g: { ...SEITE_R, ellbogen_r: [6, 180], hand_r: [0, -10] } }), mit(STAND_W, { g: { ...SEITE_R, ellbogen_r: [6, 180], hand_r: [0, 35] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Schläger zeigt nach hinten, Kopf anheben", "Langsam senken"],
    hilfsmittel: SCHLAEGER,
  }),
  golf_schlaeger_achten: folge(
    "vorn",
    [
      [mit(STAND_W, { g: ARM_VOR_R }), 0.6, "Arm vor dem Körper"],
      [mit(STAND_W, { g: { ...ARM_VOR_R, hand_r: [20, 25] } }), 0.6, "Liegende Acht malen"],
      [mit(STAND_W, { g: { ...ARM_VOR_R, hand_r: [-20, -25] } }), 0.6],
      [mit(STAND_W, { g: { ...ARM_VOR_R, hand_r: [20, -25] } }), 0.6],
      [mit(STAND_W, { g: { ...ARM_VOR_R, hand_r: [-20, 25] } }), 0.6],
    ],
    { seiten: true, hilfsmittel: SCHLAEGER },
  ),
  golf_schlaeger_waagerecht_halten: halte("seite", mit(STAND_W, { g: SEITE_R }), mit(STAND_W, { g: { ...ARM_VOR_R, hand_r: [0, 10] } }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Schläger am Griffende waagerecht vor dem Körper halten.", hilfsmittel: SCHLAEGER }),
  // ------------------------------------------------------------ Nacken
  nacken_flexion_scheibe: wdh("seite", banklage({ ...BEINE_LANG, ...B("schulter", [100, 10, 0]), ...B("ellbogen", [120, 0]), hals: [-30, 0, 0] }), banklage({ ...BEINE_LANG, ...B("schulter", [100, 10, 0]), ...B("ellbogen", [120, 0]), hals: [30, 0, 0] }), 1.2, {
    aus: 1.8,
    texte: ["Kopf mit der Scheibe auf der Stirn anheben", "Langsam über das Bankende senken"],
    hilfsmittel: [BANK_KOPF_FREI, { art: "hantelscheibe", an: "kopf" }],
  }),
  nacken_extension_scheibe: wdh("seite", BAUCH_BANK(40), BAUCH_BANK(-30), 1.2, {
    aus: 1.8,
    texte: ["Kopf mit der Scheibe am Hinterkopf heben", "Langsam senken"],
    hilfsmittel: [{ art: "bank", unter: "becken", hoehe: 0.45, versatz: [0, 0.2] }, { art: "hantelscheibe", an: "kopf" }],
  }),
  nacken_seitneigung_scheibe: wdh("vorn", mit(SEITLAGE, { g: { hals: [0, -10, 0] } }), mit(SEITLAGE, { g: { hals: [0, 30, 0] } }), 1.2, {
    aus: 1.8,
    seiten: true,
    texte: ["Kopf mit der Scheibe seitlich anheben", "Langsam senken"],
    hilfsmittel: [{ art: "hantelscheibe", an: "kopf" }],
  }),
  nacken_isometrie_hand: folge(
    "seite",
    [
      [handStirn({}), 1.0, "Hand an die Stirn"],
      [handStirn({ hals: [4, 0, 0] }), 6, "Kopf gegen die Hand nach vorn drücken", true],
      [mit(STAND_W, { g: { schulter_r: [150, 30, 0], ellbogen_r: [140, 0], schulter_l: [4, 12, 0], ellbogen_l: [10, 0], hals: [-4, 0, 0] } }), 6, "Hand am Hinterkopf, nach hinten drücken", true],
      [mit(STAND_W, { g: { schulter_r: [90, 80, 0], ellbogen_r: [140, 0], schulter_l: [4, 12, 0], ellbogen_l: [10, 0], hals: [0, -4, 0] } }), 6, "Hand an der Schläfe, zur Seite drücken", true],
      [STAND_W, 1.0, "Lösen"],
    ],
  ),
  kinn_einziehen_band: wdh("seite", mit(STAND_W, { g: { hals: [-8, 0, 0], kopf: [-6] } }), mit(STAND_W, { g: { hals: [8, 0, 0], kopf: [6] } }), 1.0, {
    aus: 1.4,
    halten: 2,
    texte: ["Kopf gerade nach hinten gegen das Band", "Langsam lösen"],
    hilfsmittel: [{ art: "bandanker", von: "kopf", anker: [0, 1.6, 0.9] }],
  }),
  kinn_einziehen_liegend: wdh("seite", RUECKENLAGE, mit(RUECKENLAGE, { g: { hals: [18, 0, 0], kopf: [10] } }), 1.2, { aus: 1.6, halten: 5, texte: ["Kinn einziehen, Kopf wenige Zentimeter heben", "Langsam ablegen"] }),
  nacken_extension_band: wdh("seite", mit(STAND_W, { g: { hals: [20, 0, 0] } }), mit(STAND_W, { g: { hals: [-25, 0, 0] } }), 1.0, {
    aus: 1.6,
    texte: ["Nacken gegen das Band strecken", "Langsam zurück"],
    hilfsmittel: [{ art: "bandanker", von: "kopf", anker: [0, 1.6, 0.9] }],
  }),
}
