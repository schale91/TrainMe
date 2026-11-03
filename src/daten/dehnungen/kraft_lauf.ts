// Laufen, Sprint, Lauf-ABC, Gleichgewicht und die Lauf- und Gehformen der Ausdauer mit der Dehnfigur. Gelaufen wird
// auf der Stelle: die Figur zeigt den Schrittzyklus (Stütz, Abdruck, Schwung), nicht den Weg.
//
// Rad, Ergometer, Rudergerät und Laufband stehen nicht im Heimstudio; diese Übungen behalten die einfache Figur.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, ATHLETISCH, B, BAUCHLAGE, H, PLANK, STAND, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER } from "./kraftbasis"
import { DURCHSCHWUNG, GOLF_ARME, RUECKSCHWUNG, dreh, golf } from "./kraft_rumpf"

// ---------------------------------------------------------------- Schrittzyklus
/** Stärke des Schritts: Gehen 0.4, lockerer Lauf 0.7, Sprint 1.0 */
const schritt = (s: number, links: boolean, kipp: number, w: Winkel = {}): Haltung => {
  const vor = links ? "l" : "r"
  const hin = links ? "r" : "l"
  const lauf = s > 0.5
  return H(
    {
      [`huefte_${vor}`]: [70 * s, 6, 0],
      [`knie_${vor}`]: [lauf ? 100 * s : 20],
      [`fuss_${vor}`]: [lauf ? 10 : 6, 0],
      [`huefte_${hin}`]: [-24 * s, 6, 0],
      [`knie_${hin}`]: [lauf ? 40 * s : 8],
      [`fuss_${hin}`]: [-30 * s, 0],
      [`schulter_${hin}`]: [60 * s, 8, 0],
      [`ellbogen_${hin}`]: [lauf ? 90 : 20, HAMMER],
      [`schulter_${vor}`]: [-40 * s, 8, 0],
      [`ellbogen_${vor}`]: [lauf ? 90 : 20, HAMMER],
      ...FAUST,
      hals: [-kipp / 2, 0, 0],
      ...w,
    },
    [kipp, 0, 0],
  )
}
/** Mitte des Schritts: beide Beine fast unter dem Körper, ein Knie schwingt durch */
const mitte = (s: number, links: boolean, kipp: number, w: Winkel = {}): Haltung => {
  const steh = links ? "l" : "r"
  const schwing = links ? "r" : "l"
  return H(
    {
      [`huefte_${steh}`]: [10, 6, 0],
      [`knie_${steh}`]: [20 * s],
      [`fuss_${steh}`]: [10, 0],
      [`huefte_${schwing}`]: [30 * s, 6, 0],
      [`knie_${schwing}`]: [s > 0.5 ? 120 * s : 40],
      [`fuss_${schwing}`]: [-10, 0],
      ...B("schulter", [10, 8, 0]),
      ...B("ellbogen", [s > 0.5 ? 90 : 20, HAMMER]),
      ...FAUST,
      hals: [-kipp / 2, 0, 0],
      ...w,
    },
    [kipp, 0, 0],
  )
}
const zyklus = (s: number, kipp: number, takt: number, text: string, extra: Partial<Dehnung> = {}, w: Winkel = {}): Dehnung =>
  folge(
    "seite",
    [
      [schritt(s, true, kipp, w), takt, text],
      [mitte(s, true, kipp, w), takt],
      [schritt(s, false, kipp, w), takt],
      [mitte(s, false, kipp, w), takt],
    ],
    extra,
  )
const GEHEN = (text: string, extra: Partial<Dehnung> = {}, w: Winkel = {}) => zyklus(0.4, 2, 0.4, text, extra, w)
const LAUFEN = (text: string, extra: Partial<Dehnung> = {}) => zyklus(0.7, 6, 0.18, text, extra)
const SPRINTEN = (text: string, kipp = 14, extra: Partial<Dehnung> = {}) => zyklus(1.0, kipp, 0.12, text, extra)

// ---------------------------------------------------------------- Lauf-ABC
const KNIE_HOCH = (links: boolean, w: Winkel = {}): Haltung => {
  const hoch = links ? "l" : "r"
  const steh = links ? "r" : "l"
  return H({ [`huefte_${hoch}`]: [90, 6, 0], [`knie_${hoch}`]: [95], [`fuss_${hoch}`]: [20, 0], [`huefte_${steh}`]: [0, 6, 0], [`knie_${steh}`]: [4], [`fuss_${steh}`]: [-20, 0], [`schulter_${steh}`]: [70, 8, 0], [`ellbogen_${steh}`]: [90, HAMMER], [`schulter_${hoch}`]: [-30, 8, 0], [`ellbogen_${hoch}`]: [90, HAMMER], ...FAUST, ...w }, [4, 0, 0])
}
const abc = (takt: number, text: string, w: (links: boolean) => Winkel = () => ({})): Dehnung =>
  folge("seite", [[KNIE_HOCH(true, w(true)), takt, text], [mitte(0.5, true, 4), takt * 0.6], [KNIE_HOCH(false, w(false)), takt], [mitte(0.5, false, 4), takt * 0.6]])

// ---------------------------------------------------------------- Gleichgewicht (links steht)
const FREI: Winkel = { huefte_r: [40, 6, 0], knie_r: [80], fuss_r: [-10, 0] }
const HAENDE_HUEFTE: Winkel = { ...B("schulter", [10, 30, 0]), ...B("ellbogen", [100, 0]) }
const einbein = (w: Winkel = {}): Haltung => mit(STAND, { g: { ...HAENDE_HUEFTE, ...FREI, ...w } })
const STUHL_SEITE: Hilfsmittel = { art: "stuhl", unter: "hand_l", hoehe: 0.45, versatz: [0.15, 0] }
const HALT_SEITE: Winkel = { schulter_l: [10, 30, 0], ellbogen_l: [20, 90], hand_l: [40, 0] }
/** Standbein links leicht gebeugt, rechter Fuß tippt in eine Richtung */
const tippen = (hueft: number[], knie_r = 4): Haltung => H({ huefte_l: [40, 6, 0], knie_l: [50], fuss_l: [20, 0], huefte_r: hueft, knie_r: [knie_r], fuss_r: [0, 0], ...HAENDE_HUEFTE }, [16, 0, 0])

// ---------------------------------------------------------------- Richtungswechsel
const ABBREMSEN: Haltung = H({ huefte_l: [60, 30, 0], knie_l: [70], fuss_l: [20, 0], huefte_r: [40, 10, 0], knie_r: [50], fuss_r: [10, 0], ...B("schulter", [40, 20, 0]), ...B("ellbogen", [90, HAMMER]) }, [24, 0, 20])
const richtung = (text: string, extra: Partial<Dehnung> = {}): Dehnung =>
  folge(
    "schraeg",
    [
      [schritt(1, true, 12), 0.14, "Antreten"],
      [mitte(1, true, 12), 0.14],
      [schritt(1, false, 12), 0.14],
      [ABBREMSEN, 0.3, text],
      [mit(schritt(1, true, 16), { dreh: [16, 120, 0] }), 0.3, "Wenden und neu beschleunigen"],
    ],
    extra,
  )
const SHUFFLE_A: Haltung = H({ ...B("huefte", [50, 16, 0]), ...B("knie", [60]), ...B("fuss", [20, 0]), ...B("schulter", [30, 14, 0]), ...B("ellbogen", [80, HAMMER]) }, [26, 0, 0])
const SHUFFLE_B: Haltung = H({ huefte_l: [50, 30, 0], knie_l: [60], fuss_l: [20, 0], huefte_r: [50, 6, 0], knie_r: [60], fuss_r: [20, 0], ...B("schulter", [30, 14, 0]), ...B("ellbogen", [80, HAMMER]) }, [26, 0, 0])

export const KRAFT_LAUF: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Sprint
  sprint: SPRINTEN("Maximal schnell, aktiver Armschwung"),
  beschleunigung: SPRINTEN("Stark vorgeneigt, kraftvoll abdrücken", 28),
  sprint_fliegend: SPRINTEN("Aufrecht, Höchstgeschwindigkeit halten", 8),
  steigerungslauf: folge("seite", [[schritt(0.6, true, 6), 0.22, "Locker anlaufen"], [schritt(0.6, false, 6), 0.22], [schritt(0.8, true, 8), 0.17, "Tempo steigern"], [schritt(0.8, false, 8), 0.17], [schritt(1, true, 10), 0.13, "Bis kurz vor Vollgas"], [schritt(1, false, 10), 0.13]]),
  bergsprint: SPRINTEN("Gegen die Steigung, Knie hoch", 22),
  sprintstart_liegend: folge("seite", [[BAUCHLAGE, 0.8, "Bauchlage"], [PLANK, 0.3, "Hochdrücken"], [schritt(1, true, 40), 0.2, "Explosiv antreten"], [schritt(1, false, 30), 0.15], [schritt(1, true, 22), 0.15]]),
  fallstart: folge("seite", [[mit(STAND, { g: ARME_VERSCHRAENKT }), 0.6, "Aufrecht, Körper gespannt"], [mit(STAND, { dreh: [18, 0, 0], g: { ...B("fuss", [-20, 0]), ...B("schulter", [0, 8, 0]) } }), 0.5, "Als Linie nach vorn fallen"], [schritt(1, true, 30), 0.15, "Im letzten Moment lossprinten"], [schritt(1, false, 26), 0.15]]),
  // ------------------------------------------------------------ Lauf-ABC
  a_march: abc(0.5, "Knie hoch, Fuß aktiv unter den Körper"),
  a_skip: abc(0.25, "Hopserlauf, Knie hoch, aktiver Fußaufsatz"),
  b_skip: folge("seite", [[KNIE_HOCH(true), 0.25, "Knie hoch"], [KNIE_HOCH(true, { knie_l: [20] }), 0.2, "Unterschenkel nach vorn ausschwingen"], [mitte(0.5, true, 4), 0.15, "Fuß greifend aufsetzen"], [KNIE_HOCH(false), 0.25], [KNIE_HOCH(false, { knie_r: [20] }), 0.2], [mitte(0.5, false, 4), 0.15]]),
  kniehebelauf: abc(0.14, "Schnell, Knie bis Hüfthöhe"),
  anfersen: folge("seite", [[H({ huefte_l: [10, 6, 0], knie_l: [130], fuss_l: [-30, 0], huefte_r: [0, 6, 0], knie_r: [6], ...B("ellbogen", [90, HAMMER]), schulter_r: [40, 8, 0], schulter_l: [-30, 8, 0], ...FAUST }, [4, 0, 0]), 0.15, "Ferse schnell zum Gesäß"], [H({ huefte_r: [10, 6, 0], knie_r: [130], fuss_r: [-30, 0], huefte_l: [0, 6, 0], knie_l: [6], ...B("ellbogen", [90, HAMMER]), schulter_l: [40, 8, 0], schulter_r: [-30, 8, 0], ...FAUST }, [4, 0, 0]), 0.15]]),
  fussgelenksarbeit: folge("seite", [[H({ huefte_l: [16, 6, 0], knie_l: [20], fuss_l: [10, 0], huefte_r: [0, 6, 0], knie_r: [4], fuss_r: [-30, 0], ...B("ellbogen", [80, HAMMER]), ...FAUST }), 0.15, "Kleine Schritte über den Vorfuß"], [H({ huefte_r: [16, 6, 0], knie_r: [20], fuss_r: [10, 0], huefte_l: [0, 6, 0], knie_l: [4], fuss_l: [-30, 0], ...B("ellbogen", [80, HAMMER]), ...FAUST }), 0.15]]),
  wandlauf: folge(
    "seite",
    [
      [H({ huefte_l: [80, 6, 0], knie_l: [90], fuss_l: [20, 0], huefte_r: [0, 6, 0], knie_r: [4], fuss_r: [-30, 0], zehen_r: [40], ...B("schulter", [80, 10, 0]), ...B("ellbogen", [10, 90]), ...B("hand", [70, 0]) }, [40, 0, 0]), 0.3, "Schräg an die Wand gelehnt, Knie hoch"],
      [H({ huefte_r: [80, 6, 0], knie_r: [90], fuss_r: [20, 0], huefte_l: [0, 6, 0], knie_l: [4], fuss_l: [-30, 0], zehen_l: [40], ...B("schulter", [80, 10, 0]), ...B("ellbogen", [10, 90]), ...B("hand", [70, 0]) }, [40, 0, 0]), 0.3, "Beine schnell wechseln"],
    ],
    { hilfsmittel: [{ art: "wand", an: "haende", richtung: "vorn" }] },
  ),
  // ------------------------------------------------------------ Richtungswechsel, seitlich, rückwärts
  richtungswechsel: richtung("Tief abbremsen, Gewicht nach innen"),
  pro_agility: richtung("Abbremsen, Linie berühren, wenden"),
  t_test: richtung("Abbremsen und seitlich nachstellen"),
  pendellauf: richtung("Abbremsen und 180 Grad wenden"),
  rueckwaertslauf: zyklus(0.6, -4, 0.16, "Rückwärts, kurze Schritte über den Vorfuß"),
  seitwaerts_shuffle: folge("vorn", [[SHUFFLE_A, 0.2, "Tief, athletisch"], [SHUFFLE_B, 0.2, "Schnell seitlich nachstellen, Füße kreuzen nicht"]]),
  ueberkreuzlauf: folge("vorn", [[H({ huefte_l: [30, -20, -20], knie_l: [40], fuss_l: [10, 0], huefte_r: [6, 10, 0], knie_r: [10], ...ARME_VERSCHRAENKT, ...dreh(20) }, [6, 0, 0]), 0.25, "Hinteres Bein vor dem führenden kreuzen"], [H({ ...B("huefte", [10, 14, 0]), ...B("knie", [16]), ...ARME_VERSCHRAENKT }, [6, 0, 0]), 0.2], [H({ huefte_l: [-14, -20, 20], knie_l: [30], fuss_l: [-20, 0], huefte_r: [6, 10, 0], knie_r: [10], ...ARME_VERSCHRAENKT, ...dreh(-20) }, [6, 0, 0]), 0.25, "Dann dahinter"], [H({ ...B("huefte", [10, 14, 0]), ...B("knie", [16]), ...ARME_VERSCHRAENKT }, [6, 0, 0]), 0.2]]),
  // ------------------------------------------------------------ Gleichgewicht
  tandemstand: halte("vorn", mit(STAND, { g: HAENDE_HUEFTE }), H({ huefte_l: [8, 0, 0], knie_l: [4], huefte_r: [-8, 0, 0], knie_r: [4], ...HAENDE_HUEFTE }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Füße hintereinander auf einer Linie, ruhig stehen." }),
  einbeinstand: halte("vorn", mit(STAND, { g: HAENDE_HUEFTE }), einbein(), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Auf einem Bein ruhig stehen, Blick nach vorn." }),
  einbeinstand_augen_zu: halte("vorn", mit(STAND, { g: HAENDE_HUEFTE }), einbein(), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Augen zu, so ruhig wie möglich stehen." }),
  einbeinstand_matte: halte("vorn", mit(STAND, { g: HAENDE_HUEFTE }), einbein(), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Auf der gefalteten Matte auf einem Bein stehen.", hilfsmittel: [{ art: "kissen", unter: "fuss_l" }] }),
  einbeinstand_kopfdrehen: folge("vorn", [[einbein(), 1.0, "Auf einem Bein"], [einbein({ hals: [0, 0, 50] }), 1.4, "Kopf langsam zur Seite drehen"], [einbein({ hals: [0, 0, -50] }), 2.4, "Zur anderen Seite"], [einbein(), 1.4]], { seiten: true }),
  einbeinstand_vorfuss: halte("seite", mit(STAND, { g: HAENDE_HUEFTE }), einbein({ fuss_l: [-40, 0], zehen_l: [-30] }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Auf dem Vorfuß eines Beins halten." }),
  einbeinstand_bandkicks: folge("vorn", [[einbein({ huefte_r: [10, 6, 0], knie_r: [6] }), 0.5, "Auf einem Bein"], [einbein({ huefte_r: [40, 6, 0], knie_r: [6] }), 0.3, "Freies Bein schnell nach vorn"], [einbein({ huefte_r: [0, 30, 0], knie_r: [6] }), 0.3, "Zur Seite"], [einbein({ huefte_r: [-20, 6, 0], knie_r: [6] }), 0.3, "Nach hinten"]], { seiten: true, hilfsmittel: [{ art: "bandanker", von: "fuss_r", anker: [-0.6, 0.1, 0] }] }),
  einbeinstand_ballfangen: folge("seite", [[einbein({ ...B("schulter", [30, -4, 0]), ...B("ellbogen", [120, HAMMER]) }), 0.6, "Auf einem Bein, Ball vor der Brust"], [einbein({ ...B("schulter", [88, -4, 0]), ...B("ellbogen", [6, HAMMER]) }), 0.3, "Gegen die Wand werfen"], [einbein({ ...B("schulter", [70, -4, 0]), ...B("ellbogen", [40, HAMMER]) }), 0.5, "Fangen, Stand halten"]], { seiten: true, hilfsmittel: [{ art: "medizinball", an: "haende" }] }),
  seiltaenzergang: folge("vorn", [[H({ huefte_l: [16, 0, 0], knie_l: [6], huefte_r: [-10, 0, 0], knie_r: [14], fuss_r: [-20, 0], ...B("schulter", [0, 60, 0]) }), 0.8, "Ferse direkt vor die Zehen"], [H({ huefte_r: [16, 0, 0], knie_r: [6], huefte_l: [-10, 0, 0], knie_l: [14], fuss_l: [-20, 0], ...B("schulter", [0, 60, 0]) }), 0.8, "Langsam auf der Linie gehen"]]),
  star_excursion: folge(
    "oben",
    [
      [einbein(), 0.6, "Auf einem Bein"],
      [tippen([60, 6, 0]), 1.0, "Nach vorn tippen"],
      [tippen([30, -30, 0]), 1.0, "Schräg nach vorn innen"],
      [tippen([0, 40, 0]), 1.0, "Zur Seite"],
      [tippen([-30, 30, 0]), 1.0, "Schräg nach hinten"],
      [tippen([-40, -10, 0]), 1.0, "Nach hinten"],
      [einbein(), 0.8],
    ],
    { seiten: true },
  ),
  y_balance: folge("oben", [[einbein(), 0.6, "Auf einem Bein"], [tippen([70, 6, 0]), 1.2, "Weit nach vorn schieben"], [tippen([-40, -30, 0]), 1.2, "Nach hinten innen"], [tippen([-40, 30, 0]), 1.2, "Nach hinten außen"], [einbein(), 0.8]], { seiten: true }),
  uhr_reichen: folge("vorn", [[einbein(), 0.6, "Auf einem Bein"], [einbein({ schulter_r: [170, 10, 0], ellbogen_r: [4, 0] }), 1.0, "Arm auf zwölf Uhr"], [einbein({ schulter_r: [90, 80, 0], ellbogen_r: [4, 0], ...dreh(-20) }), 1.0, "Auf drei Uhr"], [einbein({ schulter_r: [60, -40, 0], ellbogen_r: [4, 0], ...dreh(30) }), 1.0, "Quer über den Körper"], [einbein(), 0.8]], { seiten: true }),
  einbein_reach: wdh("seite", einbein({ ...B("schulter", [10, 8, 0]), ...B("ellbogen", [10, 0]), huefte_r: [0, 6, 0], knie_r: [10] }), H({ huefte_l: [80, 6, 0], knie_l: [20], fuss_l: [10, 0], huefte_r: [0, 6, 0], knie_r: [4], fuss_r: [-10, 0], ...B("schulter", [150, 8, 0]), ...B("ellbogen", [6, 0]), hals: [-20, 0, 0] }, [78, 0, 0]), 2.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Hüfte beugen, Hände nach vorn unten, Bein lang nach hinten", "Aufrichten"],
  }),
  hip_airplane: folge(
    "schraeg",
    [
      [H({ huefte_l: [80, 6, 0], knie_l: [20], fuss_l: [10, 0], huefte_r: [0, 6, 0], knie_r: [4], schulter_l: [90, 10, 0], ellbogen_l: [10, 90], schulter_r: [0, 30, 0] }, [78, 0, 0]), 1.0, "Standwaage, eine Hand an der Wand"],
      [H({ huefte_l: [80, 6, -30], knie_l: [20], fuss_l: [10, 0], huefte_r: [0, 6, 0], knie_r: [4], schulter_l: [90, 10, 0], ellbogen_l: [10, 90], schulter_r: [0, 30, 0] }, [78, -35, 0]), 1.6, "Becken über dem Standbein nach außen öffnen"],
      [H({ huefte_l: [80, 6, 20], knie_l: [20], fuss_l: [10, 0], huefte_r: [0, 6, 0], knie_r: [4], schulter_l: [90, 10, 0], ellbogen_l: [10, 90], schulter_r: [0, 30, 0] }, [78, 20, 0]), 1.6, "Und wieder schließen"],
    ],
    { seiten: true, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }] },
  ),
  // ------------------------------------------------------------ Golf-Gleichgewicht
  golf_einbeinstand_ansprechhaltung: halte("vorn", golf(), golf({ huefte_r: [40, 6, 0], knie_r: [80], fuss_r: [-10, 0] }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "In der Golfhaltung auf einem Bein stehen." }),
  golf_einbeinstand_rotation: folge("vorn", [[golf({ huefte_r: [40, 6, 0], knie_r: [80], ...ARME_VERSCHRAENKT }), 0.8, "Auf einem Bein, Schläger vor der Brust"], [golf({ huefte_r: [40, 6, 0], knie_r: [80], ...ARME_VERSCHRAENKT, ...dreh(40) }), 1.2, "Oberkörper zur einen Seite"], [golf({ huefte_r: [40, 6, 0], knie_r: [80], ...ARME_VERSCHRAENKT, ...dreh(-40) }), 2.0, "Zur anderen Seite"]], { seiten: true }),
  golf_finish_halten: halte("vorn", golf(), golf({ ...DURCHSCHWUNG, huefte_l: [10, 6, -20], knie_l: [10], huefte_r: [20, 6, 20], knie_r: [40], fuss_r: [-40, 0], zehen_r: [50] }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Finish auf dem vorderen Bein stabil halten." }),
  golf_rueckschwung_einbein_halten: halte("vorn", golf(), golf({ ...RUECKSCHWUNG, huefte_l: [40, 6, 0], knie_l: [70], fuss_l: [-10, 0] }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Am Ende des Rückschwungs den vorderen Fuß anheben und halten." }),
  golf_einbein_halbschwung: folge("vorn", [[golf({ ...GOLF_ARME, huefte_r: [40, 6, 0], knie_r: [80] }), 0.6, "Auf einem Bein"], [golf({ ...RUECKSCHWUNG, huefte_r: [40, 6, 0], knie_r: [80] }), 0.8, "Halber Rückschwung"], [golf({ ...DURCHSCHWUNG, huefte_r: [40, 6, 0], knie_r: [80] }), 0.8, "Halber Durchschwung, Stand halten"]], { seiten: true, hilfsmittel: [{ art: "stab", von: "hand_l", bis: "griff_l" }] }),
  // ------------------------------------------------------------ Reha am Stuhl
  reha_stand_schmal_halt: halte("vorn", mit(STAND, { g: HALT_SEITE }), H({ ...B("huefte", [0, 0, 0]), ...HALT_SEITE }), { ein: 1.5, aus: 1.5, hinweis: "Füße eng zusammen, eine Hand am Stuhl.", hilfsmittel: [STUHL_SEITE] }),
  reha_einbeinstand_halt: halte("vorn", mit(STAND, { g: HALT_SEITE }), mit(STAND, { g: { ...HALT_SEITE, ...FREI } }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Auf einem Bein, Fingerspitzen an der Stuhllehne.", hilfsmittel: [STUHL_SEITE] }),
  reha_gewicht_verlagern: folge("vorn", [[mit(STAND, { g: { ...HALT_SEITE, ...B("huefte", [0, 8, 0]) } }), 1.0, "Hüftbreit stehen"], [mit(STAND, { dreh: [0, 0, 6], g: { ...HALT_SEITE, huefte_l: [0, 2, 0], huefte_r: [0, 14, 0] } }), 1.6, "Gewicht langsam auf ein Bein"], [mit(STAND, { dreh: [0, 0, -6], g: { ...HALT_SEITE, huefte_l: [0, 14, 0], huefte_r: [0, 2, 0] } }), 2.4, "Auf das andere Bein"], [mit(STAND, { g: { ...HALT_SEITE, ...B("huefte", [0, 8, 0]) } }), 1.4]], { hilfsmittel: [STUHL_SEITE] }),
  reha_schrittstellung_halten: halte("seite", mit(STAND, { g: HALT_SEITE }), H({ huefte_l: [24, 6, 0], knie_l: [24], fuss_l: [0, 0], huefte_r: [-10, 6, 0], knie_r: [20], fuss_r: [-10, 0], ...HALT_SEITE }), { ein: 1.5, aus: 1.5, seiten: true, hinweis: "Kleine Schrittstellung, beide Knie leicht gebeugt.", hilfsmittel: [STUHL_SEITE] }),
  // ------------------------------------------------------------ Ausdauer: Laufen und Gehen
  lauf_locker: LAUFEN("Locker laufen, Unterhaltung möglich"),
  lauf_regeneration: LAUFEN("Sehr ruhig traben"),
  lauf_lang_langsam: LAUFEN("Lang und ruhig laufen"),
  lauf_gehen_wechsel: folge("seite", [[schritt(0.7, true, 6), 0.18, "Laufabschnitt"], [mitte(0.7, true, 6), 0.18], [schritt(0.7, false, 6), 0.18], [mitte(0.7, false, 6), 0.18], [schritt(0.4, true, 2), 0.4, "Gehpause"], [mitte(0.4, true, 2), 0.4], [schritt(0.4, false, 2), 0.4], [mitte(0.4, false, 2), 0.4]]),
  intervalle_lauf: LAUFEN("Zügig laufen, dann locker traben"),
  intervalle_4x4_lauf: zyklus(0.85, 8, 0.15, "Hart laufen, dann aktiv erholen"),
  intervalle_30_30_lauf: zyklus(0.9, 10, 0.14, "30 s schnell, 30 s locker"),
  tempodauerlauf: zyklus(0.8, 8, 0.16, "Gleichmäßig an der Schwelle laufen"),
  schwellenintervalle_lauf: zyklus(0.8, 8, 0.16, "Abschnitte an der Schwelle, kurze Pausen"),
  fahrtspiel: LAUFEN("Tempo frei und spielerisch wechseln"),
  berglauf_wiederholungen: zyklus(0.85, 18, 0.15, "Zügig den Hügel hinauf"),
  treppenlaeufe: zyklus(0.9, 16, 0.15, "Zügig die Treppe hoch"),
  pendellaeufe: richtung("Schnell abbremsen und wenden"),
  box_to_box_laeufe: zyklus(0.9, 10, 0.14, "Zügig von Strafraum zu Strafraum"),
  gehen_zuegig: GEHEN("Zügig gehen, Atmung steigt"),
  nordic_walking: GEHEN("Zügig gehen, Arme schieben mit den Stöcken", {}, {}),
  wandern: GEHEN("Gleichmäßig gehen, auch bergauf"),
  rucking: GEHEN("Mit beschwertem Rucksack zügig gehen", {}, ARME_VERSCHRAENKT),
  golfrunde_zu_fuss: GEHEN("Die Runde zu Fuß gehen"),
  reha_gehen: GEHEN("Spazieren, noch gut sprechen können"),
  treppensteigen: folge("seite", [[H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [6, 0], huefte_r: [-6, 6, 0], knie_r: [10], fuss_r: [-20, 0], ...B("schulter", [10, 10, 0]) }, [8, 0, 0]), 0.5, "Stufe hoch"], [H({ huefte_r: [60, 6, 0], knie_r: [70], fuss_r: [6, 0], huefte_l: [-6, 6, 0], knie_l: [10], fuss_l: [-20, 0], ...B("schulter", [10, 10, 0]) }, [8, 0, 0]), 0.5, "Gleichmäßig weiter"]]),
  step_ups_ausdauer: folge(
    "seite",
    [
      [H({ huefte_l: [70, 6, 0], knie_l: [80], fuss_l: [6, 0], huefte_r: [-4, 6, 0], knie_r: [4], fuss_r: [-8, 0], ...B("schulter", [10, 10, 0]) }, [8, 0, 0], { pos: [0, 0.86, -0.05], boden: false }), 0.6, "Rhythmisch auf die Box"],
      [H({ ...B("huefte", [2, 6, 0]), ...B("knie", [4]), ...B("fuss", [0, 0]), ...B("schulter", [10, 10, 0]) }, [0, 0, 0], { pos: [0, 1.24, 0.3], boden: false }), 0.6, "Oben ganz aufrichten"],
      [H({ huefte_l: [70, 6, 0], knie_l: [80], fuss_l: [6, 0], huefte_r: [-4, 6, 0], knie_r: [4], fuss_r: [-8, 0], ...B("schulter", [10, 10, 0]) }, [8, 0, 0], { pos: [0, 0.86, -0.05], boden: false }), 0.6, "Wieder herab"],
    ],
    { hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.3 }] },
  ),
  zirkel_koerpergewicht_locker: folge("seite", [[mit(STAND, { g: B("schulter", [88, 6, 0]) }), 0.8, "Kniebeugen, Ausfallschritte, Liegestütze im Wechsel"], [H({ ...B("huefte", [100, 12, -6]), ...B("knie", [110]), ...B("fuss", [30, 0]), ...B("schulter", [88, 6, 0]) }, [36, 0, 0]), 1.0], [mit(STAND, { g: B("schulter", [88, 6, 0]) }), 1.0], [PLANK, 1.2], [mit(STAND, { g: B("schulter", [88, 6, 0]) }), 1.0]]),
  emom_koerpergewicht: folge("seite", [[mit(STAND, { g: B("schulter", [88, 6, 0]) }), 0.6, "Zu Beginn jeder Minute die Wiederholungen"], [H({ ...B("huefte", [100, 12, -6]), ...B("knie", [110]), ...B("fuss", [30, 0]), ...B("schulter", [88, 6, 0]) }, [36, 0, 0]), 0.7], [mit(STAND, { g: B("schulter", [88, 6, 0]) }), 0.7], [mit(STAND, { g: ARME_VERSCHRAENKT }), 1.5, "Restzeit Pause", true]]),
  hiit_koerpergewicht: folge(
    "vorn",
    [
      [H({ ...B("huefte", [0, 30, 0]), ...B("knie", [6]), ...B("schulter", [0, 170, 0]), ...B("ellbogen", [10, 0]) }), 0.3, "Hampelmann"],
      [mit(STAND, { g: B("schulter", [0, 10, 0]) }), 0.3],
      [ATHLETISCH, 0.5, "Kniehebelauf, Mountain Climbers"],
      [mit(PLANK, { g: { huefte_l: [100, 6, 0], knie_l: [110] } }), 0.3],
      [PLANK, 0.3],
    ],
  ),
}
