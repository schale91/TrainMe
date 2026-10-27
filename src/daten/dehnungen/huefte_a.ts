// Hüfte, Teil A: Golf-Hüftmobilität, Hüftbeuger, Gesäß (Taube, Figur 4), 90/90, Rollen, Hüftkreisen.
// Einseitige Übungen beginnen links (gespiegelt folgt die andere Seite). Hüfte: [beugen, abspreizen, drehen], drehen
// positiv = innen, negativ = außen. Bei 90° Abspreizen liegt der Oberschenkel waagerecht in der Beckenebene, Beugen gibt
// dann die Richtung an (0 = zur Seite, 90 = nach vorn); Drehen 180 legt den gebeugten Unterschenkel quer nach innen
// (Figur 4, Taube, vorderes Bein im 90/90), Drehen 0 legt ihn nach hinten (hinteres Bein im 90/90).
// Tempo: Dehnungen 4 s hinein, Mobilisationen 2 bis 3 s je Richtung.

import { spiegel, type Dehnung, type Haltung } from "../../logik/dehnbewegung"
import { ARME_LOCKER, ARME_VERSCHRAENKT, ATHLETISCH, B, BAUCHLAGE, H, HALBKNIESTAND, LANGSITZ, RUECKENLAGE, RUECKENLAGE_AUF, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, pnf, wdh } from "./basis"

const SITZ = mit(STUHLSITZ, { g: { ...B("schulter", [10, 8, 0]), ...B("ellbogen", [60, 60]) } })
const STUHL = [{ art: "stuhl" as const, unter: "gesaess" as const, hoehe: 0.42 }]
const WAND_LINKS = [{ art: "wand" as const, an: "hand_l" as const, richtung: "links" as const }]
const ARME_T = { ...B("schulter", [0, 88, 0]), ...B("ellbogen", [5, 0]) }
/** Im Sitz auf dem Ball: Hände liegen auf den Oberschenkeln */
const BALL_HAENDE = { ...B("schulter", [18, 16, 0]), ...B("ellbogen", [38, 0]), ...B("hand", [-10, 0]) }
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
      ...(aufrecht ? HAENDE_HUEFTE : { ...B("schulter", [38, 10, 0]), ...B("ellbogen", [48, 0]), ...B("hand", [-25, 0]) }),
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
/** Mit langem Rücken über das vordere Schienbein neigen (aus Lenden- und Brustwirbelsäule, das Becken bleibt liegen); die
 * Hände liegen auf dem vorderen Schienbein (per Suche, der Boden davor ist mit langem Rücken nicht erreichbar) */
const neunzigVor = (grad: number): Haltung =>
  mit(NEUNZIG, { g: { lws: [grad * 0.55, 0, 0], bws: [grad * 0.35, 0, 0], hals: [grad * 0.1, 0, 0], schulter_l: [8 + grad, -5, 0], ellbogen_l: [60, 0], schulter_r: [28 + grad, -45, 0], ellbogen_r: [20, 0] } })

// ---------------------------------------------------------------- 90/90-Wechsel: Fersen bleiben stehen, die Knie kippen wie Scheibenwischer
// Beinwinkel rückwärts gerechnet: Sprunggelenke fest gut hüftbreit vor dem Becken, das Knie läuft auf dem Kreis um die
// Achse Hüfte–Sprunggelenk von oben (Mitte) bis knapp über den Boden (links vorn). Zwischenstufen, damit die
// Überblendung dem Kreis folgt und kein Bein durch die Luft schwingt. Rechts vorn ist das Spiegelbild.
const wischBeine = (stufen: number[][][]) =>
  stufen.map(([hl, fl, hr, fr]) => ({ huefte_l: hl, knie_l: [95], fuss_l: fl, huefte_r: hr, knie_r: [95], fuss_r: fr }))
/** Becken 15 Grad nach hinten gekippt, Hände hinten am Boden */
const WISCH_HINTEN = wischBeine([
  [[123, -24, 33], [-40, 0], [123, -24, 33], [-40, 0]],
  [[136, -54, 34], [-40, -30], [113, 21, 15], [-40, 30]],
  [[149, -78, 28], [-40, -40], [114, 81, -18], [-40, 40]],
  [[157, -102, 17], [-35, -40], [125, 123, -34], [-35, 40]],
])
/** Becken fast aufrecht, ohne Hände */
const WISCH_FREI = wischBeine([
  [[134, -18, 27], [-40, 0], [134, -18, 27], [-40, 0]],
  [[143, -46, 23], [-40, -30], [124, 15, 22], [-40, 30]],
  [[151, -71, 16], [-40, -40], [118, 58, 6], [-40, 40]],
  [[155, -96, 5], [-35, -40], [120, 106, -15], [-35, 40]],
])
const NEUNZIG_ABHEBEN: Haltung = mit(NEUNZIG, { g: { lws: [8, 10, 0], schulter_l: [5, 40, 0], ellbogen_l: [50, 0], schulter_r: [15, 25, 0], ellbogen_r: [0, 0] } })
// Shin Box zum Kniestand: Knie bleiben am Boden und rutschen unter die Hüfte, der vordere Unterschenkel dreht flach am
// Boden nach hinten, das Becken steigt (Stufen rückwärts gerechnet, damit kein Bein durch die Luft schwingt)
const SHIN_BOX: Haltung[] = [
  H({ ...ARME_VERSCHRAENKT, huefte_l: [60, 90, 180], knie_l: [95], fuss_l: [0, 0], huefte_r: [10, 90, 0], knie_r: [95], fuss_r: [-30, 0] }),
  H({ ...ARME_VERSCHRAENKT, huefte_l: [61, 71, 202], knie_l: [122], fuss_l: [-20, 0], huefte_r: [13, 81, 1], knie_r: [99], fuss_r: [-42, 0] }, undefined, { pos: [-0.016, 1.005, 0.031] }),
  H({ ...ARME_VERSCHRAENKT, huefte_l: [46, 44, 265], knie_l: [142], fuss_l: [-40, 0], huefte_r: [8, 60, 1], knie_r: [96], fuss_r: [-55, 0] }, undefined, { pos: [-0.05, 1.149, 0.1] }),
  H({ ...ARME_VERSCHRAENKT, huefte_l: [21, 26, 330], knie_l: [121], fuss_l: [-60, 0], huefte_r: [0, 33, 1], knie_r: [89], fuss_r: [-67, 0] }, undefined, { pos: [-0.084, 1.294, 0.169] }),
  H({ ...ARME_VERSCHRAENKT, huefte_l: [0, 4, 360], knie_l: [90], fuss_l: [-80, 0], huefte_r: [0, 4, 0], knie_r: [90], fuss_r: [-80, 0] }, undefined, { pos: [-0.1, 1.359, 0.2] }),
]
// Seitlage halb auf dem Bauch über der Faszienrolle: auf den linken Unterarm gestützt (Ellbogen unter der Schulter),
// unteres Bein lang, oberes Bein angewinkelt vor dem unteren aufgestellt, rechte Hand vor der Brust am Boden (per
// Suche). Gerollt wird durch Verschieben des Körpers entlang der Rolle, dazu beugt und streckt sich das untere Knie.
const tflRolle = (knie: number, x: number): Haltung =>
  H(
    {
      lws: [0, -5, 0],
      bws: [0, -10, 0],
      hals: [0, -10, 0],
      schulter_l: [30, 70, 0],
      ellbogen_l: [90, -45],
      huefte_l: [0, 14, 0],
      knie_l: [knie],
      huefte_r: [60, 15, -60],
      knie_r: [80],
      fuss_r: [20, 0],
      schulter_r: [35, -60, 0],
      ellbogen_r: [10, 0],
    },
    [0, 30, 86],
    { pos: [x, 0.94, 0] },
  )
const ARME_HINTEN = { ...B("schulter", [-50, 0, 0]), ...B("ellbogen", [40, 0]), ...B("hand", [60, 0]) }
const wischHinten = (i: number): Haltung => H({ ...ARME_HINTEN, ...WISCH_HINTEN[i] }, [-15, 0, 0])
const wischFrei = (i: number): Haltung => H({ ...ARME_VERSCHRAENKT, lws: [8, 0, 0], ...WISCH_FREI[i] }, [-5, 0, 0])

// ---------------------------------------------------------------- Figur 4: Außenknöchel links auf dem rechten Knie
/** Figur 4: Oberschenkel schräg nach vorn außen, Unterschenkel quer über dem anderen Bein */
// Winkel des überschlagenen Beins per Suche bestimmt, sodass der Außenknöchel knapp über dem Knie des Stützbeins liegt
// (Lage relativ zum Becken, gilt im Sitzen, Liegen und Stehen gleich). Je nach Beugung des Stützbeins:
/** Stützbein-Hüfte etwa 85 bis 100 Grad gebeugt (Sitz, Knie zur Brust, Füße an der Wand) */
const VIER = { huefte_l: [60, 75, 180], knie_l: [105] }
/** Stützbein-Hüfte etwa 60 bis 70 Grad (Füße aufgestellt, Sitz auf der Rolle) */
const VIER_FLACH = { huefte_l: [60, 110, 180], knie_l: [108] }

// ---------------------------------------------------------------- Stand auf einem Bein, Rumpf waagerecht (Airplane)
// Becken und Rumpf drehen um die eigene Längsachse auf und zu; das Standbein bleibt dabei senkrecht über dem Fuß
// (Hüftwinkel je Drehung rückwärts gerechnet, sonst schwingt der Fuß mit dem Becken zur Seite). [88, -86, 90] ist bei
// fast 90 Grad Beugen dieselbe Stellung wie [88, 4, 0], so ändert sich beim Drehen nur das Beugen.
// Dazu der Fußwinkel, der die Sohle flach am Boden hält.
const STANDBEIN: Record<number, [number[], number, number]> = {
  0: [[88, -86, 90], 15, -1],
  [-35]: [[57, -90, 90], 18, 2],
  25: [[117, -71, 74], 37, 12],
  [-30]: [[61, -90, 90], 18, 1],
  22: [[114, -71, 73], 35, 12],
}
const flieger = (auf: number, gestuetzt = false): Haltung =>
  H(
    {
      huefte_r: STANDBEIN[auf][0],
      knie_r: [STANDBEIN[auf][1]],
      fuss_r: [STANDBEIN[auf][2], 0],
      huefte_l: [-8, 4, 0],
      knie_l: [5],
      fuss_l: [-20, 0],
      ...(gestuetzt ? { schulter_l: [95, 8, 0], ellbogen_l: [5, 0], schulter_r: [0, 85, 0], ellbogen_r: [5, 0] } : ARME_T),
      hals: [-20, 0, 0],
    },
    [78, auf, 0],
  )

// ---------------------------------------------------------------- Hüftkreisen
/** Linke Hand flach an der Wand (Handgelenk gestreckt, Finger nach oben), Standbein leicht gebeugt */
const STAND_W = mit(STAND, { g: { schulter_l: [0, 82, 0], ellbogen_l: [10, 0], hand_l: [60, 0], huefte_l: [8, 3, 0], knie_l: [12], fuss_l: [4, 0] } })
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
  golf_beckenrotation: wdh("vorn", golfDreh(-30, true), golfDreh(30, true), 2.5, { hinweis: "Schultern und Kopf bleiben ruhig, nur das Becken dreht.", hilfsmittel: [{ art: "stab", von: "hand_l", bis: "hand_r" }] }),
  golf_ball_beckenkippen: wdh(
    "seite",
    H({ ...B("huefte", [82, 6, 0]), ...B("knie", [70]), ...B("fuss", [0, 0]), lws: [-14, 0, 0], ...BALL_HAENDE }, [12, 0, 0], { pos: [0, 0.74, 0], boden: false }),
    H({ ...B("huefte", [58, 6, 0]), ...B("knie", [70]), ...B("fuss", [0, 0]), lws: [12, 0, 0], ...BALL_HAENDE }, [-12, 0, 0], { pos: [0, 0.74, 0], boden: false }),
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
    // Bein waagerecht quer auf der Bank (Winkel per Suche: Unterschenkel liegt knapp unter Hüfthöhe flach auf)
    H({ huefte_l: [50, 60, 210], knie_l: [110], huefte_r: [-8, 4, 0], knie_r: [8], schulter_l: [25, 10, 0], ellbogen_l: [5, 0], schulter_r: [0, 8, 0], ellbogen_r: [10, 0] }),
    // Vorneigen aus der Hüfte mit langem Rücken: das Becken kippt, die Hüftwinkel gleichen aus, damit der Unterschenkel
    // an derselben Stelle auf der Bank liegen bleibt (Winkel per Suche); Hände vor dem Unterschenkel auf der Bank
    H({ huefte_l: [55, 95, 170], knie_l: [110], huefte_r: [17, 4, 0], knie_r: [8], lws: [12, 0, 0], bws: [20, 0, 0], hals: [8, 0, 0], schulter_l: [80, 30, 0], ellbogen_l: [0, 0], schulter_r: [70, -65, 0], ellbogen_r: [0, 0] }, [25, 0, 0]),
    { seiten: true, hilfsmittel: [{ art: "bank", unter: "wade_l", hoehe: 0.8 }] },
  ),
  figur4_rueckenlage: halte(
    "schraeg",
    mit(RUECKENLAGE_AUF, { g: VIER_FLACH }),
    // Stützbein zur Brust, beide Hände greifen hinter den Oberschenkel
    mit(RUECKENLAGE_AUF, { g: { ...VIER, huefte_r: [95, 4, 0], knie_r: [90], fuss_r: [0, 0], ...B("schulter", [25, -8, 0]), ...B("ellbogen", [25, 0]) } }),
    { seiten: true },
  ),
  figur4_sitzend: halte(
    "schraeg",
    mit(SITZ, { g: { ...VIER } }),
    // Vorneigen aus Becken und Rücken; das gekreuzte Bein behält seine Winkel (mehr Abspreizen würde den Unterschenkel kippen)
    mit(SITZ, { dreh: [6, 0, 0], g: { ...VIER, huefte_r: [96, 5, 0], lws: [16, 0, 0], bws: [14, 0, 0], hals: [5, 0, 0], ...B("schulter", [40, 12, 0]), ...B("ellbogen", [25, 0]), ...B("hand", [-15, 0]) } }),
    { seiten: true, hilfsmittel: STUHL },
  ),
  figur4_wand: halte(
    "seite",
    mit(RUECKENLAGE, { g: { huefte_r: [85, 5, 0], knie_r: [90], fuss_r: [0, 0], ...VIER } }),
    mit(RUECKENLAGE, { g: { huefte_r: [100, 5, 0], knie_r: [100], fuss_r: [0, 0], ...VIER } }),
    { seiten: true, hilfsmittel: [{ art: "wand", an: "fuss_r", richtung: "vorn" }] },
  ),
  figur4_stehend: halte(
    "schraeg",
    // Knöchel auf das leicht gebeugte Standbein legen, dann das Gesäß nach hinten schieben und vorneigen
    H({ huefte_r: [25, 4, 0], knie_r: [30], fuss_r: [5, 0], huefte_l: [20, 30, 240], knie_l: [115], schulter_r: [0, 60, 0], ellbogen_r: [10, 0], schulter_l: [20, 12, 0], ellbogen_l: [40, 0] }),
    H({ huefte_r: [55, 4, 0], knie_r: [60], fuss_r: [20, 0], huefte_l: [50, 50, 230], knie_l: [110], lws: [15, 0, 0], bws: [10, 0, 0], ...B("schulter", [45, 12, 0]), ...B("ellbogen", [35, 0]) }, [15, 0, 0]),
    { seiten: true },
  ),
  knie_zur_gegenschulter: halte(
    "oben",
    RUECKENLAGE,
    // Knie diagonal zur Gegenschulter, die Gegenhand außen am Knie, die andere Hand am Unterschenkel (Winkel per Suche)
    mit(RUECKENLAGE, { g: { huefte_l: [130, 20, -20], knie_l: [125], schulter_r: [20, -50, 0], ellbogen_r: [60, 0], schulter_l: [30, -20, 0], ellbogen_l: [10, 0] } }),
    { seiten: true },
  ),
  piriformis_dehnen_sitzend: halte(
    "schraeg",
    // Fuß außen neben dem anderen Knie aufgestellt (Winkel per Suche), Hände zuerst neben dem Becken
    mit(LANGSITZ, { g: { huefte_l: [140, 15, -40], knie_l: [110] } }),
    // Gegenarm umarmt das Knie, die andere Hand stützt hinten, Oberkörper dreht zum aufgestellten Bein
    mit(LANGSITZ, { g: { huefte_l: [140, 15, -40], knie_l: [110], lws: [0, 0, 10], bws: [0, 0, 30], schulter_r: [20, -10, 0], ellbogen_r: [90, 0], schulter_l: [-30, 15, 0], ellbogen_l: [10, 0] } }),
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
      [mit(NEUNZIG, { g: { bws: [12, 0, -30], lws: [8, 0, -10], schulter_l: [5, 30, 0], ellbogen_l: [60, 0], schulter_r: [15, 20, 0], ellbogen_r: [40, 0] } }), 4, "Zum hinteren Bein drehen"],
      [mit(NEUNZIG, { g: { bws: [12, 0, -30], lws: [8, 0, -10], schulter_l: [5, 30, 0], ellbogen_l: [60, 0], schulter_r: [15, 20, 0], ellbogen_r: [40, 0] } }), 20, "Halten", true],
      [NEUNZIG, 3, "Lösen"],
    ],
    { seiten: true },
  ),
  huefte_9090_wechsel: folge("schraeg", [
    [wischHinten(3), 1, "90/90 links vorn", true],
    [wischHinten(2), 0.7, "Knie zur Mitte"],
    [wischHinten(1), 0.6, "Knie zur Mitte"],
    [wischHinten(0), 0.7, "Knie zur Mitte"],
    [spiegel(wischHinten(1)), 0.7, "Zur anderen Seite sinken"],
    [spiegel(wischHinten(2)), 0.6, "Zur anderen Seite sinken"],
    [spiegel(wischHinten(3)), 0.7, "Zur anderen Seite sinken"],
    [mit(spiegel(wischHinten(3)), { g: { lws: [10, 0, 0] } }), 1, "Kurz aufrichten", true],
    [spiegel(wischHinten(2)), 0.7, "Knie zur Mitte"],
    [spiegel(wischHinten(1)), 0.6, "Knie zur Mitte"],
    [wischHinten(0), 0.7, "Knie zur Mitte"],
    [wischHinten(1), 0.7, "Zurück"],
    [wischHinten(2), 0.6, "Zurück"],
    [wischHinten(3), 0.7, "Zurück"],
  ]),
  huefte_9090_wechsel_ohne_haende: folge("schraeg", [
    [wischFrei(3), 1, "90/90 links vorn", true],
    [wischFrei(2), 0.9, "Knie zur Mitte, aufrecht bleiben"],
    [wischFrei(1), 0.8, "Knie zur Mitte, aufrecht bleiben"],
    [wischFrei(0), 0.8, "Knie zur Mitte, aufrecht bleiben"],
    [spiegel(wischFrei(1)), 0.8, "Zur anderen Seite sinken"],
    [spiegel(wischFrei(2)), 0.8, "Zur anderen Seite sinken"],
    [spiegel(wischFrei(3)), 0.9, "Zur anderen Seite sinken"],
    [mit(spiegel(wischFrei(3)), { g: { lws: [2, 0, 0], bws: [-6, 0, 0] } }), 1, "Brustbein nach vorn", true],
    [spiegel(wischFrei(2)), 0.9, "Knie zur Mitte"],
    [spiegel(wischFrei(1)), 0.8, "Knie zur Mitte"],
    [wischFrei(0), 0.8, "Knie zur Mitte"],
    [wischFrei(1), 0.8, "Zurück"],
    [wischFrei(2), 0.8, "Zurück"],
    [wischFrei(3), 0.9, "Zurück"],
  ]),
  // Von vorn, damit das hintere Bein beim Abheben zu sehen ist
  huefte_9090_innenrotation_abheben: wdh(
    "vorn",
    // Leicht zum vorderen Bein geneigt, die Hände stützen neben dem Körper (Arme per Suche, damit keine Hand die Figur anhebt)
    NEUNZIG_ABHEBEN,
    // Mehr Abspreizen hebt Knie und Fuß gleich hoch, der Unterschenkel bleibt waagerecht
    mit(NEUNZIG_ABHEBEN, { g: { huefte_r: [10, 106, 0] } }),
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
      // Knie und Fuß gleich hoch abheben (Winkel per Suche), die Hände gehen mit dem Schienbein
      [mit(neunzigVor(30), { g: { huefte_l: [60, 104, 168], schulter_l: [40, -10, 0], ellbogen_l: [70, 0], schulter_r: [50, -55, 0], ellbogen_r: [40, 0] } }), 2, "Knie und Fuß aktiv abheben"],
      [mit(neunzigVor(30), { g: { huefte_l: [60, 104, 168], schulter_l: [40, -10, 0], ellbogen_l: [70, 0], schulter_r: [50, -55, 0], ellbogen_r: [40, 0] } }), 10, "Abgehoben halten", true],
      [neunzigVor(38), 3, "Lösen, tiefer sinken"],
      [neunzigVor(38), 10, "Halten, ruhig atmen", true],
      [neunzigVor(38), 10, "Hinteres Knie in den Boden drücken", true],
      [mit(neunzigVor(38), { g: { huefte_r: [10, 106, 0] } }), 2, "Hinteres Knie und Fuß abheben"],
      [mit(neunzigVor(38), { g: { huefte_r: [10, 106, 0] } }), 10, "Abgehoben halten", true],
      [NEUNZIG, 3, "Aufrichten"],
    ],
    { seiten: true },
  ),
  shin_box_aufstehen: folge("schraeg", [
    [SHIN_BOX[0], 1, "Shin Box, aufrecht", true],
    [SHIN_BOX[1], 0.6, "Hüfte nach vorn oben schieben"],
    [SHIN_BOX[2], 0.6, "Hüfte nach vorn oben schieben"],
    [SHIN_BOX[3], 0.6, "Hüfte nach vorn oben schieben"],
    [SHIN_BOX[4], 0.7, "Hüfte nach vorn oben schieben"],
    [SHIN_BOX[4], 1, "Oben: Hüfte strecken, Gesäß fest", true],
    [SHIN_BOX[3], 0.8, "Langsam zurück in die Shin Box"],
    [SHIN_BOX[2], 0.7, "Langsam zurück in die Shin Box"],
    [SHIN_BOX[1], 0.7, "Langsam zurück in die Shin Box"],
    [SHIN_BOX[0], 0.8, "Langsam zurück in die Shin Box"],
  ]),

  // ---------- Rolle
  gesaess_rolle: wdh(
    "schraeg",
    H({ huefte_r: [70, 6, 0], knie_r: [100], fuss_r: [10, 0], ...VIER_FLACH, ...B("schulter", [-45, 22, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]) }, [-18, 0, 8]),
    H({ huefte_r: [60, 6, 0], knie_r: [95], fuss_r: [10, 0], ...VIER_FLACH, ...B("schulter", [-50, 22, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]) }, [-28, 0, 8]),
    2.5,
    { seiten: true, hilfsmittel: [{ art: "rolle", unter: "gesaess" }] },
  ),
  tfl_rolle: wdh("vorn", tflRolle(5, -0.03), tflRolle(55, 0.04), 2.5, { seiten: true, hilfsmittel: [{ art: "rolle", unter: "oberschenkel_l", laengs: true }] }),

  // ---------- Seitliche Hüfte
  tfl_dehnen_stehend: halte(
    "vorn",
    // Linke Hand auf Schulterhöhe an der Wand, in beiden Haltungen an derselben Stelle
    mit(STAND, { g: { schulter_l: [0, 75, 0], ellbogen_l: [20, 0] } }),
    // Rechtes Bein hinter dem linken gekreuzt, beide Füße am Boden, Hüfte nach rechts geschoben (Becken versetzt und
    // geneigt, Beinwinkel per Suche), Oberkörper zur Wand geneigt, rechter Arm über dem Kopf
    H(
      { schulter_l: [-5, 100, 0], ellbogen_l: [30, 0], huefte_l: [3, -12, 0], knie_l: [3], huefte_r: [-8, -3, 0], knie_r: [3], schulter_r: [170, 20, 0], ellbogen_r: [10, 90], lws: [0, 14, 0], bws: [0, 16, 0] },
      [0, 0, -12],
      { pos: [-0.06, 0.94, 0] },
    ),
    { seiten: true, hilfsmittel: WAND_LINKS },
  ),
  it_band_dehnen_band: halte(
    "oben",
    // Bein senkrecht; [f, 86, -86] legt den Oberschenkel in die Querebene des Beckens (Kniescheibe zum Kopf), dann
    // führt allein das Beugen das gestreckte Bein quer über den Körper (Winkel rückwärts gerechnet)
    mit(RUECKENLAGE, { g: { huefte_l: [92, 86, -86], knie_l: [5], schulter_r: [40, -25, 0], ellbogen_r: [40, 0], schulter_l: [0, 88, 0], ellbogen_l: [5, 0] } }),
    mit(RUECKENLAGE, { dreh: [-90, 0, -8], g: { huefte_l: [137, 86, -86], knie_l: [5], schulter_r: [30, 35, 0], ellbogen_r: [40, 0], schulter_l: [0, 88, 0], ellbogen_l: [5, 0] } }),
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
  // Hüftwinkel durchgehend in einer Darstellung (bei 90 Grad Beugen ist [90, -177, 180] dieselbe Stellung wie [90, 3, 0]),
  // der Bogen vom Knie an der Brust zur Seite rückwärts gerechnet, damit das Knie nicht durch den Boden schwingt
  hip_cars_vierfuessler: folge(
    "schraeg",
    [
      [vierKreis([90, -177, 180], 90), 1, "Ausgangsstellung", true],
      [vierKreis([55, -177, 180], 130), 2.5, "Knie zur Brust"],
      [vierKreis([48, -215, 227], 126), 0.6, "Seitlich nach oben"],
      [vierKreis([33, -239, 255], 116), 0.6, "Seitlich nach oben"],
      [vierKreis([15, -256, 268], 103), 0.6, "Seitlich nach oben"],
      [vierKreis([-5, -270, 270], 90), 0.7, "Seitlich nach oben"],
      [vierKreis([10, -270, 360], 90), 2.5, "Unterschenkel nach oben drehen"],
      [vierKreis([-10, -356, 360], 5), 2.5, "Nach hinten strecken"],
      [vierKreis([90, -357, 360], 90), 2, "Zurück"],
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
