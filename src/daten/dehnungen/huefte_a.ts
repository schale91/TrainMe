// Hüfte, Teil A: Golf-Hüftmobilität, Hüftbeuger, Gesäß (Taube, Figur 4), 90/90, Rollen, Hüftkreisen.
// Einseitige Übungen beginnen links (gespiegelt folgt die andere Seite). Hüfte: [beugen, abspreizen, drehen], drehen
// positiv = innen, negativ = außen. Bei 90° Abspreizen liegt der Oberschenkel waagerecht in der Beckenebene, Beugen gibt
// dann die Richtung an (0 = zur Seite, 90 = nach vorn); Drehen 180 legt den gebeugten Unterschenkel quer nach innen
// (Figur 4, Taube, vorderes Bein im 90/90), Drehen 0 legt ihn nach hinten (hinteres Bein im 90/90).
// Tempo: Dehnungen 4 s hinein, Mobilisationen 2 bis 3 s je Richtung.

import { spiegel, type Dehnung, type Haltung } from "../../logik/dehnbewegung"
import { ARME_LOCKER, ARME_VERSCHRAENKT, ATHLETISCH, B, BAUCHLAGE, H, HALBKNIESTAND, KNIESTAND, LANGSITZ, RUECKENLAGE, RUECKENLAGE_AUF, SEITLAGE, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, pnf, wdh } from "./basis"

const SITZ = mit(STUHLSITZ, { g: { ...B("schulter", [10, 8, 0]), ...B("ellbogen", [60, 60]) } })
const STUHL = [{ art: "stuhl" as const, unter: "gesaess" as const, hoehe: 0.42 }]
const WAND_LINKS = [{ art: "wand" as const, an: "hand_l" as const, richtung: "links" as const }]
const ARME_T = { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [5, 0]) }
/** Hände ruhen auf dem vorderen Oberschenkel */
const HAENDE_HUEFTE = { ...B("schulter", [28, 10, 0]), ...B("ellbogen", [25, 0]) }

// ---------------------------------------------------------------- Golfhaltung
const GOLF: Haltung = ATHLETISCH
const RAD = Math.PI / 180
/**
 * Becken vorgeneigt und um die senkrechte Achse gedreht (nicht um die eigene, schräge Längsachse): Umrechnung in die
 * Reihenfolge der Figur (erst Drehen, dann Kippen, dann Neigen).
 */
export function senkrechtGedreht(kippen: number, drehen: number): [number, number, number] {
  const c = Math.cos(drehen * RAD), s = Math.sin(drehen * RAD), cp = Math.cos(kippen * RAD), sp = Math.sin(kippen * RAD)
  const x = Math.asin(Math.max(-1, Math.min(1, c * sp)))
  const y = Math.atan2(s, c * cp)
  const z = Math.atan2(-s * sp, cp)
  return [x / RAD, y / RAD, -z / RAD]
}
/** Becken gedreht (positiv nach links), Füße bleiben stehen, die Schultern auf Wunsch still */
const golfDreh = (grad: number, schulternStill: boolean): Haltung =>
  mit(GOLF, {
    dreh: senkrechtGedreht(35, grad),
    g: { huefte_l: [45, 6, -grad], huefte_r: [45, 6, grad], ...(schulternStill ? { lws: [0, 0, -grad * 0.5], bws: [0, 0, -grad * 0.5] } : {}) },
  })

// ---------------------------------------------------------------- Halber Kniestand, links hinten
/** Hüftbeuger links gedehnt: Becken eingerollt, Hüfte nach vorn geschoben, Oberkörper aufrecht */
const kniestandVor = (vor: number, extra: Haltung["g"] = {}): Haltung => {
  const kippen = -8
  const hinten = -5 - vor // Oberschenkel hinten im Raum
  const vorn = 80 + vor * 0.3
  return mit(HALBKNIESTAND, {
    dreh: [kippen, 0, 0],
    g: {
      huefte_l: [hinten + kippen, 4, 0],
      knie_l: [hinten + 90],
      fuss_l: [-80, 0],
      huefte_r: [vorn + kippen, 4, 0],
      knie_r: [vorn - vor * 0.6],
      fuss_r: [-vor * 0.6, 0],
      lws: [-kippen, 0, 0],
      ...HAENDE_HUEFTE,
      ...extra,
    },
  })
}
const HKS = kniestandVor(0)
const HKS_DEHN = kniestandVor(18)

// ---------------------------------------------------------------- Couch Stretch: hinterer Unterschenkel an Wand oder Bank
const couch = (aufrecht: boolean, schienbein: number): Haltung => {
  const kippen = aufrecht ? -6 : 40
  const hinten = aufrecht ? -12 : 10
  return H(
    {
      huefte_l: [hinten + kippen, 4, 0],
      knie_l: [hinten + schienbein],
      fuss_l: [-85, 0],
      huefte_r: [85 + kippen, 4, 0],
      knie_r: [80],
      fuss_r: [-5, 0],
      lws: [aufrecht ? 6 : 0, 0, 0],
      ...(aufrecht ? HAENDE_HUEFTE : { ...B("schulter", [60, 8, 0]), ...B("ellbogen", [10, 0]) }),
    },
    [kippen, 0, 0],
  )
}

// ---------------------------------------------------------------- 90/90 im Sitz: links vorn, rechts seitlich hinten
const NEUNZIG: Haltung = H({
  huefte_l: [60, 90, 180],
  knie_l: [95],
  fuss_l: [0, 0],
  huefte_r: [10, 90, 0],
  knie_r: [95],
  fuss_r: [-30, 0],
  ...B("schulter", [12, 28, 0]),
  ...B("ellbogen", [10, 0]),
})
/** Mit langem Rücken über das vordere Schienbein neigen (aus Lenden- und Brustwirbelsäule, das Becken bleibt liegen) */
const neunzigVor = (grad: number): Haltung => mit(NEUNZIG, { g: { lws: [grad * 0.55, 0, 0], bws: [grad * 0.35, 0, 0], hals: [grad * 0.1, 0, 0], ...B("schulter", [35 + grad, 18, 0]), ...B("ellbogen", [20, 0]) } })
const NEUNZIG_HINTEN: Haltung = mit(NEUNZIG, { g: { lws: [-15, 0, 0], ...B("schulter", [-50, 20, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]) } })
const NEUNZIG_MITTE: Haltung = mit(NEUNZIG_HINTEN, { g: { ...B("huefte", [55, 22, 0]), ...B("knie", [110]), ...B("fuss", [10, 0]) } })
const NEUNZIG_FREI: Haltung = mit(NEUNZIG, { g: { ...ARME_VERSCHRAENKT } })
const NEUNZIG_FREI_MITTE: Haltung = mit(NEUNZIG_FREI, { g: { ...B("huefte", [55, 22, 0]), ...B("knie", [110]), ...B("fuss", [10, 0]), lws: [-5, 0, 0] } })

// ---------------------------------------------------------------- Figur 4: Außenknöchel links auf dem rechten Knie
/** Figur 4: Oberschenkel schräg nach vorn außen, Unterschenkel quer über dem anderen Bein */
const VIER = { huefte_l: [60, 45, -130], knie_l: [95] }
const figur4Liegend = (zug: number): Haltung =>
  mit(RUECKENLAGE_AUF, { g: { ...VIER, huefte_l: [60 + zug * 0.6, 45, -130], huefte_r: [60 + zug, 4, 0], knie_r: [95], ...B("schulter", [55 + zug * 0.4, 18, 0]), ...B("ellbogen", [70, 0]) } })

// ---------------------------------------------------------------- Stand auf einem Bein, Rumpf waagerecht (Airplane)
const flieger = (auf: number, gestuetzt = false): Haltung =>
  H(
    {
      huefte_r: [88, 4, -auf],
      knie_r: [15],
      fuss_r: [5, 0],
      huefte_l: [-8, 4, 0],
      knie_l: [5],
      fuss_l: [-20, 0],
      ...(gestuetzt ? { schulter_l: [95, 8, 0], ellbogen_l: [5, 0], schulter_r: [0, 85, 0], ellbogen_r: [5, 0] } : ARME_T),
      hals: [-20, 0, 0],
    },
    [78, auf, 0],
  )

// ---------------------------------------------------------------- Hüftkreisen
const STAND_W = mit(STAND, { g: { schulter_l: [0, 70, 0], ellbogen_l: [10, 0] } })
const stehKreis = (h: number[], knie: number): Haltung => mit(STAND_W, { g: { huefte_r: h, knie_r: [knie], fuss_r: [10, 0] } })
const vierKreis = (h: number[], knie: number): Haltung => mit(VIERFUESSLER, { g: { huefte_r: h, knie_r: [knie] } })

// ---------------------------------------------------------------- Rückenlage, Scheibenwischer
const wischer = (seite: 1 | -1): Haltung =>
  mit(RUECKENLAGE_AUF, {
    g: {
      ...ARME_T,
      huefte_l: [60, 14 + 22 * seite, -32 * seite],
      huefte_r: [60, 14 - 22 * seite, 32 * seite],
      lws: [0, 0, 10 * seite],
    },
  })

export const HUEFTE_A: Record<string, Dehnung> = {
  // ---------- Golf
  golf_huefte_innenrotation_band: wdh("vorn", GOLF, mit(GOLF, { dreh: [35, -12, 0], g: { huefte_l: [45, 2, 28], huefte_r: [45, 6, -12] } }), 2, { halten: 1, seiten: true, hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] }),
  golf_huefte_aussenrotation_band: wdh("vorn", GOLF, mit(GOLF, { g: { huefte_l: [45, 12, -25] } }), 2, { halten: 1, seiten: true, hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] }),
  golf_beckenkippen: wdh(
    "seite",
    mit(GOLF, { dreh: [45, 0, 0], g: { ...B("huefte", [55, 6, 0]), lws: [-10, 0, 0] } }),
    mit(GOLF, { dreh: [25, 0, 0], g: { ...B("huefte", [35, 6, 0]), lws: [10, 0, 0] } }),
    2.5,
  ),
  golf_beckenrotation: wdh("vorn", golfDreh(-30, true), golfDreh(30, true), 2.5, { hinweis: "Schultern und Kopf bleiben ruhig, nur das Becken dreht." }),
  golf_ball_beckenkippen: wdh(
    "seite",
    H({ ...B("huefte", [82, 6, 0]), ...B("knie", [70]), ...B("fuss", [0, 0]), lws: [-14, 0, 0], ...B("schulter", [25, 12, 0]), ...B("ellbogen", [40, 0]) }, [12, 0, 0], { pos: [0, 0.74, 0], boden: false }),
    H({ ...B("huefte", [58, 6, 0]), ...B("knie", [70]), ...B("fuss", [0, 0]), lws: [12, 0, 0], ...B("schulter", [25, 12, 0]), ...B("ellbogen", [40, 0]) }, [-12, 0, 0], { pos: [0, 0.74, 0], boden: false }),
    2.5,
    { hilfsmittel: [{ art: "ball", unter: "gesaess" }] },
  ),
  golf_huefte_rotation_einbeinig: wdh(
    "vorn",
    H({ huefte_l: [30, 4, 18], knie_l: [20], fuss_l: [15, 0], huefte_r: [75, 4, 0], knie_r: [95], schulter_r: [20, 25, 0], ellbogen_r: [30, 0], schulter_l: [10, 10, 0] }, [20, -18, 0]),
    H({ huefte_l: [30, 4, -22], knie_l: [20], fuss_l: [15, 0], huefte_r: [75, 4, 0], knie_r: [95], schulter_r: [20, 25, 0], ellbogen_r: [30, 0], schulter_l: [10, 10, 0] }, [20, 22, 0]),
    2.5,
    { seiten: true },
  ),
  golf_wand_drehung_gesaess: wdh("seite", golfDreh(-28, false), golfDreh(28, false), 2.5, { hilfsmittel: [{ art: "wand", an: "gesaess", richtung: "hinten" }], hinweis: "Abwechselnd bleibt eine Gesäßhälfte an der Wand." }),

  // ---------- Hüftbeuger im halben Kniestand
  hueftbeuger_dehnen: halte("seite", HKS, HKS_DEHN, { seiten: true }),
  hueftbeuger_dehnen_seitneigung: halte("schraeg", HKS, kniestandVor(14, { schulter_l: [172, 8, 0], ellbogen_l: [0, 90], lws: [8, -10, 0], bws: [0, -20, 0] }), { seiten: true }),
  hueftbeuger_dehnen_rotation: wdh("oben", kniestandVor(14, ARME_VERSCHRAENKT), kniestandVor(14, { ...ARME_VERSCHRAENKT, bws: [0, 0, -40], lws: [8, 0, -8], hals: [0, 0, -10] }), 2.5, { halten: 1, seiten: true }),
  hueftbeuger_dehnen_stehend: halte(
    "seite",
    H({ huefte_l: [-12, 4, 0], knie_l: [8], fuss_l: [-25, 0], zehen_l: [40], huefte_r: [30, 4, 0], knie_r: [25], fuss_r: [-5, 0], ...ARME_LOCKER }),
    H({ huefte_l: [-30, 4, 0], knie_l: [5], fuss_l: [-35, 0], zehen_l: [50], huefte_r: [42, 4, 0], knie_r: [45], fuss_r: [-15, 0], lws: [8, 0, 0], schulter_l: [172, 8, 0], ellbogen_l: [0, 90], schulter_r: [0, 8, 0] }, [-8, 0, 0]),
    { seiten: true },
  ),
  hueftbeuger_dehnen_band: wdh("seite", HKS, HKS_DEHN, 2.5, { halten: 1, seiten: true, hinweis: "Das Band in der Leiste zieht die Hüfte sanft nach vorn." }),
  hueftbeuger_pnf: pnf("seite", HKS, kniestandVor(14), kniestandVor(22), { seiten: true }),
  hueftbeuger_kniestand_wippen: wdh("seite", HKS, HKS_DEHN, 2, { halten: 1, seiten: true }),
  couch_stretch_wand: halte("seite", couch(false, 160), couch(true, 160), { seiten: true, ein: 5, hilfsmittel: [{ art: "wand", an: "fuss_l", richtung: "hinten" }] }),
  couch_stretch_bank: halte("seite", couch(false, 140), couch(true, 140), { seiten: true, ein: 5, hilfsmittel: [{ art: "bank", unter: "fuss_l", hoehe: 0.6 }] }),
  thomas_dehnung_bank: halte(
    "seite",
    H({ ...B("huefte", [120, 5, 0]), ...B("knie", [115]), ...B("schulter", [55, 15, 0]), ...B("ellbogen", [80, 0]) }, [-90, 0, 0], { pos: [0, 0.52, 0], boden: false }),
    H({ huefte_r: [130, 5, 0], knie_r: [120], huefte_l: [-25, 5, 0], knie_l: [75], fuss_l: [-25, 0], ...B("schulter", [55, 15, 0]), ...B("ellbogen", [80, 0]) }, [-90, 0, 0], { pos: [0, 0.52, 0], boden: false }),
    { seiten: true, hilfsmittel: [{ art: "bank", unter: "kopf", hoehe: 0.42 }] },
  ),

  // ---------- Gesäß
  taube: halte(
    "schraeg",
    VIERFUESSLER,
    H({ huefte_l: [55, 90, 180], knie_l: [100], fuss_l: [10, 0], huefte_r: [-45, 4, 0], knie_r: [0], fuss_r: [-80, 0], lws: [-8, 0, 0], ...B("schulter", [24, 10, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]) }, [30, 0, 0]),
    { seiten: true, ein: 5 },
  ),
  taube_bank: halte(
    "schraeg",
    H({ huefte_l: [70, 90, 180], knie_l: [95], huefte_r: [-8, 4, 0], knie_r: [8], ...B("schulter", [25, 12, 0]), ...B("ellbogen", [30, 0]) }),
    H({ huefte_l: [70, 90, 180], knie_l: [95], huefte_r: [30, 4, 0], knie_r: [8], ...B("schulter", [80, 12, 0]), ...B("ellbogen", [40, 0]) }, [38, 0, 0]),
    { seiten: true, hilfsmittel: [{ art: "bank", unter: "wade_l", hoehe: 0.72 }] },
  ),
  figur4_rueckenlage: halte("seite", mit(RUECKENLAGE_AUF, { g: VIER }), figur4Liegend(40), { seiten: true }),
  figur4_sitzend: halte(
    "schraeg",
    mit(SITZ, { g: { huefte_l: [60, 45, -130], knie_l: [95] } }),
    mit(SITZ, { dreh: [28, 0, 0], g: { huefte_l: [60, 45, -130], knie_l: [95], huefte_r: [118, 5, 0], ...B("schulter", [50, 12, 0]), ...B("ellbogen", [40, 0]) } }),
    { seiten: true, hilfsmittel: STUHL },
  ),
  figur4_wand: halte(
    "seite",
    mit(RUECKENLAGE, { g: { huefte_r: [85, 5, 0], knie_r: [90], fuss_r: [0, 0], huefte_l: [60, 45, -130], knie_l: [95] } }),
    mit(RUECKENLAGE, { g: { huefte_r: [100, 5, 0], knie_r: [100], fuss_r: [0, 0], huefte_l: [65, 45, -130], knie_l: [95] } }),
    { seiten: true, hilfsmittel: [{ art: "wand", an: "fuss_r", richtung: "vorn" }] },
  ),
  figur4_stehend: halte(
    "schraeg",
    mit(STAND, { g: { huefte_l: [60, 45, -130], knie_l: [95], schulter_r: [0, 60, 0] } }),
    H({ huefte_r: [72, 4, 0], knie_r: [45], fuss_r: [20, 0], huefte_l: [60, 45, -130], knie_l: [95], ...B("schulter", [70, 12, 0]), ...B("ellbogen", [20, 0]) }, [38, 0, 0]),
    { seiten: true },
  ),
  knie_zur_gegenschulter: halte(
    "oben",
    mit(RUECKENLAGE, { g: { huefte_l: [100, 4, 0], knie_l: [110] } }),
    mit(RUECKENLAGE, { g: { huefte_l: [120, -28, -15], knie_l: [115], schulter_r: [70, -30, 0], ellbogen_r: [60, 0], schulter_l: [55, 15, 0], ellbogen_l: [80, 0] } }),
    { seiten: true },
  ),
  piriformis_dehnen_sitzend: halte(
    "schraeg",
    mit(LANGSITZ, { g: { huefte_l: [110, -15, 0], knie_l: [120] } }),
    mit(LANGSITZ, { g: { huefte_l: [125, -25, 0], knie_l: [125], bws: [0, 0, 35], lws: [0, 0, 10], schulter_r: [80, -40, 0], ellbogen_r: [95, 0], schulter_l: [-35, 25, 0], ellbogen_l: [0, 0] } }),
    { seiten: true },
  ),

  // ---------- 90/90
  huefte_9090: folge(
    "schraeg",
    [
      [NEUNZIG, 1.5, "Ausgangsstellung", true],
      [neunzigVor(32), 4, "Über das vordere Schienbein neigen"],
      [neunzigVor(32), 25, "Halten, ruhig atmen", true],
      [NEUNZIG, 3, "Aufrichten"],
      [mit(NEUNZIG, { g: { bws: [0, 0, -30], lws: [6, 0, -10], ...B("schulter", [30, 20, 0]) } }), 4, "Zum hinteren Bein drehen"],
      [mit(NEUNZIG, { g: { bws: [0, 0, -30], lws: [6, 0, -10], ...B("schulter", [30, 20, 0]) } }), 20, "Halten", true],
      [NEUNZIG, 3, "Lösen"],
    ],
    { seiten: true },
  ),
  huefte_9090_wechsel: folge("schraeg", [
    [NEUNZIG_HINTEN, 1, "90/90 links vorn", true],
    [NEUNZIG_MITTE, 2, "Knie zur Mitte"],
    [spiegel(NEUNZIG_HINTEN), 2, "Zur anderen Seite sinken"],
    [spiegel(NEUNZIG_HINTEN), 1, "Kurz aufrichten", true],
    [NEUNZIG_MITTE, 2, "Knie zur Mitte"],
    [NEUNZIG_HINTEN, 2, "Zurück"],
  ]),
  huefte_9090_wechsel_ohne_haende: folge("schraeg", [
    [NEUNZIG_FREI, 1, "90/90 links vorn", true],
    [NEUNZIG_FREI_MITTE, 2.5, "Knie zur Mitte, aufrecht bleiben"],
    [spiegel(NEUNZIG_FREI), 2.5, "Zur anderen Seite sinken"],
    [spiegel(NEUNZIG_FREI), 1, "Brustbein nach vorn", true],
    [NEUNZIG_FREI_MITTE, 2.5, "Knie zur Mitte"],
    [NEUNZIG_FREI, 2.5, "Zurück"],
  ]),
  huefte_9090_innenrotation_abheben: wdh(
    "schraeg",
    mit(NEUNZIG, { g: { lws: [8, 10, 0] } }),
    mit(NEUNZIG, { g: { lws: [8, 14, 0], huefte_r: [10, 112, 12] } }),
    2,
    { halten: 1.5, seiten: true },
  ),
  huefte_9090_pails: folge(
    "schraeg",
    [
      [NEUNZIG, 1.5, "Ausgangsstellung", true],
      [neunzigVor(30), 4, "Über das vordere Schienbein neigen"],
      [neunzigVor(30), 20, "Halten", true],
      [neunzigVor(30), 12, "Vorderes Bein in den Boden drücken", true],
      [mit(neunzigVor(30), { g: { huefte_l: [60, 102, 180] } }), 2, "Knie und Fuß aktiv abheben"],
      [mit(neunzigVor(30), { g: { huefte_l: [60, 102, 180] } }), 10, "Abgehoben halten", true],
      [neunzigVor(38), 3, "Lösen, tiefer sinken"],
      [neunzigVor(38), 15, "Halten, ruhig atmen", true],
      [NEUNZIG, 3, "Aufrichten"],
    ],
    { seiten: true },
  ),
  shin_box_aufstehen: wdh("schraeg", mit(NEUNZIG, { g: { ...ARME_VERSCHRAENKT } }), mit(KNIESTAND, { g: { ...ARME_VERSCHRAENKT, ...B("huefte", [0, 6, 0]) } }), 2.5, { halten: 1 }),

  // ---------- Rolle
  gesaess_rolle: wdh(
    "schraeg",
    H({ huefte_r: [70, 6, 0], knie_r: [100], fuss_r: [10, 0], huefte_l: [60, 45, -130], knie_l: [95], ...B("schulter", [-45, 22, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]) }, [-18, 0, 8]),
    H({ huefte_r: [60, 6, 0], knie_r: [95], fuss_r: [10, 0], huefte_l: [60, 45, -130], knie_l: [95], ...B("schulter", [-50, 22, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]) }, [-28, 0, 8]),
    2.5,
    { seiten: true, hilfsmittel: [{ art: "rolle", unter: "gesaess" }] },
  ),
  tfl_rolle: wdh(
    "vorn",
    mit(SEITLAGE, { dreh: [15, 0, 72], g: { huefte_l: [5, 0, 0], knie_l: [5], huefte_r: [80, 10, 0], knie_r: [90], schulter_l: [25, 72, 0], ellbogen_l: [90, 0], schulter_r: [60, 10, 0], ellbogen_r: [20, 0], hals: [0, -25, 0] } }),
    mit(SEITLAGE, { dreh: [15, 0, 72], g: { huefte_l: [5, 0, 0], knie_l: [60], huefte_r: [70, 10, 0], knie_r: [90], schulter_l: [25, 72, 0], ellbogen_l: [90, 0], schulter_r: [60, 10, 0], ellbogen_r: [20, 0], hals: [0, -25, 0] } }),
    2.5,
    { seiten: true, hilfsmittel: [{ art: "rolle", unter: "oberschenkel_l" }] },
  ),

  // ---------- Seitliche Hüfte
  tfl_dehnen_stehend: halte(
    "vorn",
    mit(STAND, { g: { schulter_l: [0, 75, 0], ellbogen_l: [15, 0], huefte_r: [0, -18, 0] } }),
    H({ schulter_l: [0, 80, 0], ellbogen_l: [40, 0], huefte_l: [0, -8, 0], huefte_r: [3, -28, 0], schulter_r: [170, 20, 0], ellbogen_r: [10, 90], lws: [0, 10, 0], bws: [0, 18, 0] }, [0, 0, -10]),
    { seiten: true, hilfsmittel: WAND_LINKS },
  ),
  it_band_dehnen_band: halte(
    "oben",
    mit(RUECKENLAGE, { g: { huefte_l: [88, 4, 0], knie_l: [5], schulter_r: [70, 5, 0], ellbogen_r: [10, 0], schulter_l: [0, 88, 0], ellbogen_l: [5, 0] } }),
    mit(RUECKENLAGE, { dreh: [-90, 0, -8], g: { huefte_l: [85, -40, 0], knie_l: [5], schulter_r: [65, -20, 0], ellbogen_r: [10, 0], schulter_l: [0, 88, 0], ellbogen_l: [5, 0] } }),
    { seiten: true, hilfsmittel: [{ art: "band", von: "hand_r", bis: "fuss_l" }] },
  ),

  // ---------- Hüftkreisen
  hip_cars_stehend: folge(
    "vorn",
    [
      [stehKreis([0, 3, 0], 5), 1, "Ausgangsstellung", true],
      [stehKreis([100, 4, 0], 100), 2.5, "Knie hoch nach vorn"],
      [stehKreis([75, 60, -10], 95), 2.5, "Zur Seite öffnen"],
      [stehKreis([15, 45, 55], 90), 2.5, "Oberschenkel nach innen drehen"],
      [stehKreis([-18, 8, 20], 90), 2.5, "Nach hinten strecken"],
      [stehKreis([0, 3, 0], 5), 2, "Zurück"],
    ],
    { seiten: true, hilfsmittel: WAND_LINKS },
  ),
  hip_cars_vierfuessler: folge(
    "schraeg",
    [
      [VIERFUESSLER, 1, "Ausgangsstellung", true],
      [vierKreis([135, 3, 0], 120), 2.5, "Knie zur Brust"],
      [vierKreis([15, 90, -90], 90), 2.5, "Seitlich nach oben"],
      [vierKreis([10, 90, 0], 90), 2.5, "Unterschenkel nach oben drehen"],
      [vierKreis([-10, 4, 0], 5), 2.5, "Nach hinten strecken"],
      [VIERFUESSLER, 2, "Zurück"],
    ],
    { seiten: true },
  ),
  huefte_airplane: folge(
    "schraeg",
    [
      [mit(STAND, { g: ARME_T }), 1, "Auf einem Bein", true],
      [flieger(0), 2.5, "Oberkörper nach vorn"],
      [flieger(-35), 2.5, "Becken aufdrehen"],
      [flieger(25), 3, "Zudrehen"],
      [flieger(0), 2, "Zur Mitte"],
      [mit(STAND, { g: ARME_T }), 2.5, "Aufrichten"],
    ],
    { seiten: true },
  ),
  huefte_airplane_gestuetzt: folge(
    "schraeg",
    [
      [flieger(0, true), 1.5, "Abstützen", true],
      [flieger(-30, true), 2.5, "Becken aufdrehen"],
      [flieger(22, true), 3, "Zudrehen"],
      [flieger(0, true), 2, "Zur Mitte"],
    ],
    { seiten: true, hilfsmittel: [{ art: "box", unter: "hand_l", hoehe: 0.55 }] },
  ),

  // ---------- Rotation in Lage
  scheibenwischer_liegend: wdh("oben", wischer(-1), wischer(1), 2.5, { halten: 1 }),
  innenrotation_bauchlage: halte(
    "hinten",
    mit(BAUCHLAGE, { g: { ...B("huefte", [0, 6, 0]), ...B("knie", [90]), ...B("fuss", [0, 0]) } }),
    mit(BAUCHLAGE, { g: { ...B("huefte", [0, 6, 40]), ...B("knie", [90]), ...B("fuss", [0, 0]) } }),
  ),
  aussenrotation_sitzend_aktiv: wdh("vorn", SITZ, mit(SITZ, { g: { huefte_l: [90, 5, -35] } }), 2, { halten: 2, seiten: true, hilfsmittel: STUHL }),
  hueft_distraktion_band: wdh(
    "seite",
    VIERFUESSLER,
    mit(VIERFUESSLER, { dreh: [80, 0, 0], g: { ...B("huefte", [125, 3, 0]), ...B("knie", [135]), ...B("schulter", [120, 3, 0]) } }),
    2.5,
    { seiten: true, hinweis: "Das Band in der Leiste zieht die Hüfte nach außen." },
  ),
  tor_oeffnen_schliessen: folge(
    "vorn",
    [
      [stehKreis([0, 3, 0], 5), 1, "Aufrecht stehen", true],
      [stehKreis([90, 4, 0], 95), 2, "Knie nach vorn heben"],
      [stehKreis([70, 65, -15], 95), 2.5, "Tor öffnen"],
      [stehKreis([0, 3, 0], 5), 2, "Fuß absetzen"],
    ],
    { seiten: true, hilfsmittel: WAND_LINKS },
  ),
}
