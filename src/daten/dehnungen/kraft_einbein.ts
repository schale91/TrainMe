// Einbeinige Übungen mit Zielpunkten: Split Squat, Bulgarische Kniebeuge, Ausfallschritte, Step-ups, Step-downs,
// Pistol, Skater, einbeiniges Kreuzheben. Linkes Bein vorn bzw. Standbein, die zweite Seite wird gespiegelt.
// Prüfung mit werkzeuge/messen.html gegen werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, B, H, folge, halte, wdh } from "./basis"
import { FAUST, HAMMER, KH, KH_R, OBERGRIFF } from "./kraftbasis"
import { ARME_FRONT, ARME_GOBLET, ARME_RUECKEN, ARME_SEITE, RACK, STANGE_RUECKEN, ansicht } from "./kraft_beine"
import { FERSE_Z, KNOECHEL_Z, beinStart, fuss, fuesse, haendeSchultern, type Ziele } from "./ziele"

// ---------------------------------------------------------------- Arme
type Last = "seite" | "vor" | "brust" | "ruecken" | "huefte" | "front" | "verschraenkt"
const ARME: Record<Last, Winkel> = {
  seite: ARME_SEITE,
  vor: { ...B("schulter", [88, 6, 0]), ...B("ellbogen", [4, 90]) },
  brust: ARME_GOBLET,
  ruecken: ARME_RUECKEN,
  huefte: { ...B("schulter", [10, 30, 0]), ...B("ellbogen", [100, 0]) },
  front: ARME_FRONT,
  verschraenkt: ARME_VERSCHRAENKT,
}
const HAENDE: Partial<Record<Last, Ziele>> = {
  ruecken: haendeSchultern(0.26, 0.04, -0.06),
  brust: { hand_l: { pos: [0.045, -0.16, 0.17], bezug: "schultern" }, hand_r: { pos: [-0.045, -0.16, 0.17], bezug: "schultern" }, ellbogen_l: { pos: [0.14, -0.2, 0.09], bezug: "schultern" }, ellbogen_r: { pos: [-0.14, -0.2, 0.09], bezug: "schultern" } },
  front: haendeSchultern(0.17, 0.0, 0.09),
}
/** Arme waagerecht nach vorn in der Welt bei Rumpfneigung kipp */
const vorWelt = (kipp: number): Winkel => ({ ...B("schulter", [88 + kipp, 6, 0]), ...B("ellbogen", [4, 90]) })

// ---------------------------------------------------------------- Schrittstellung (links vorn)
/** Spurbreite (halb) wie auf Schienen und Schrittlänge: vordere Ferse bis hintere Fußspitze */
const SPUR = 0.1
const SCHRITT = 0.88
/** hintere Ferse angehoben (Meter) */
const HINTEN_HOCH = 0.06
interface Split {
  /** vordere Ferse bei z0; die hintere Fußspitze SCHRITT dahinter */
  z0: number
  last: Last
  /** vorderer Fuß erhöht, hinterer Fuß auf der Bank */
  vornHoch?: number
  bank?: boolean
}
const splitFuesse = (s: Split): Ziele => {
  const vorn = fuss(1, SPUR, s.z0, 5, 0, s.vornHoch ?? 0)
  if (s.bank) {
    // Spann des hinteren Fußes auf der Kante der Bank (45 cm): Fußspitze unten auf dem Polster, Ferse darüber
    const zb = s.z0 - 0.85
    return { ...vorn, fuss_r: { pos: [-SPUR, 0.47, zb - 0.06] }, ferse_r: { pos: [-SPUR, 0.56, zb + 0.03] } }
  }
  // Fußspitze SCHRITT hinter der vorderen Ferse, Ferse angehoben
  const neig = Math.asin(HINTEN_HOCH / 0.12)
  return { ...vorn, ...fuss(-1, SPUR, s.z0 - SCHRITT - 0.12 * Math.cos(neig), 5, HINTEN_HOCH) }
}
/** Haltung in der Schrittstellung: tief (hinteres Knie knapp über dem Boden, beide Knie etwa 90°) oder oben */
const splitHaltung = (s: Split, tief: boolean, kipp = 4): Haltung => {
  const vh = s.vornHoch ?? 0
  const y = tief ? (s.bank ? 0.55 : 0.54) - vh * 0.3 : (s.bank ? 0.82 : 0.79) + vh * 0.5
  const z = s.z0 - (tief ? (s.bank ? 0.28 : 0.36) : 0.4)
  const arme = s.last === "vor" ? vorWelt(kipp) : ARME[s.last]
  const g: Winkel = {
    ...beinStart(y - 0.01, z, kipp, 0.076 + vh, s.z0 + KNOECHEL_Z, 5, "l"),
    huefte_r: [tief ? 4 : -14, 4, 0, 0],
    knie_r: [tief ? 100 : 30],
    fuss_r: [-40, 0],
    zehen_r: [-45],
    ...arme,
    hals: [-kipp * 0.5, 0, 0],
  }
  return H(g, [kipp, 0, 0], { pos: [0, y, z], boden: false, ziele: { ...splitFuesse(s), ...(HAENDE[s.last] ?? {}) } })
}
const split = (s: Split, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), splitHaltung(s, false), splitHaltung(s, true), 1.8, { aus: 1.4, seiten: true, texte: ["Gerade nach unten, hinteres Knie knapp über den Boden", "Aus dem vorderen Bein hoch"], hilfsmittel, ...extra })

/** Stand hüftbreit, beide Füße flach bei z (Ausgangsstellung der Ausfallschritte) */
const stand = (last: Last, z = FERSE_Z, hoch = 0): Haltung =>
  H({ ...B("huefte", [0, 4, 0]), ...B("knie", [4]), ...ARME[last] }, [0, 0, 0], { pos: [0, 0.935 + hoch, z + 0.04], boden: false, ziele: { ...fuesse(0.1, 5, z, hoch), ...(HAENDE[last] ?? {}) } })
/** Ausfallschritt rückwärts: der vordere (linke) Fuß bleibt stehen, der rechte tritt zurück */
const ausfallRueck = (last: Last, hilfsmittel: Hilfsmittel[], text = "Großer Schritt zurück, hinteres Knie knapp über den Boden", podest = 0): Dehnung =>
  folge(
    ansicht(hilfsmittel),
    [
      [stand(last, FERSE_Z, podest), 0.6, "Hüftbreit stehen"],
      [splitHaltung({ z0: FERSE_Z, last, vornHoch: podest }, true), 1.4, text],
      [stand(last, FERSE_Z, podest), 1.2, "Aus dem vorderen Bein zurück in den Stand"],
    ],
    { seiten: true, hilfsmittel },
  )
/** Ausfallschritt vorwärts: der hintere (rechte) Fuß bleibt stehen, der linke tritt nach vorn */
const ausfallVor = (last: Last, hilfsmittel: Hilfsmittel[], text = "Großer Schritt nach vorn, ganze Sohle aufsetzen, tief"): Dehnung =>
  folge(
    ansicht(hilfsmittel),
    [
      [stand(last, FERSE_Z - SCHRITT - 0.12), 0.6, "Hüftbreit stehen"],
      [splitHaltung({ z0: FERSE_Z, last }, true), 1.4, text],
      [stand(last, FERSE_Z - SCHRITT - 0.12), 1.2, "Kraftvoll zurück in den Stand"],
    ],
    { seiten: true, hilfsmittel },
  )

// ---------------------------------------------------------------- Step-up auf die Box (Kniehöhe, 50 cm)
const BOX = 0.5
const BOX_Z = 0.3
const stepUnten = (last: Last, kipp = 14): Haltung =>
  H({ ...beinStart(0.94, -0.1, kipp, 0.076 + BOX, BOX_Z + KNOECHEL_Z, 5, "l"), huefte_r: [0, 4, 0, 0], knie_r: [6], fuss_r: [0, 0], ...ARME[last] }, [kipp, 0, 0], {
    pos: [0, 0.95, -0.1],
    boden: false,
    ziele: { ...fuss(1, SPUR, BOX_Z, 5, 0, BOX), ...fuss(-1, SPUR, -0.3, 5), ...(HAENDE[last] ?? {}) },
  })
const stepOben = (last: Last, frei: Winkel = { huefte_r: [12, 4, 0], knie_r: [40], fuss_r: [-20, 0] }): Haltung =>
  H({ huefte_l: [2, 4, 0, 0], knie_l: [4], fuss_l: [0, 0], ...frei, ...ARME[last] }, [0, 0, 0], { pos: [0.05, 0.95 + BOX, BOX_Z + 0.06], boden: false, ziele: { ...fuss(1, SPUR, BOX_Z, 5, 0, BOX), ...(HAENDE[last] ?? {}) } })
const BOX_VORN: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: BOX, versatz: [-0.05, 0] }
const stepUp = (last: Last, hilfsmittel: Hilfsmittel[], frei?: Winkel, text = "Nur mit dem oberen Bein hoch bis aufrecht"): Dehnung =>
  wdh(ansicht(hilfsmittel), stepUnten(last), stepOben(last, frei), 1.4, { aus: 1.8, seiten: true, texte: [text, "Kontrolliert absteigen, das obere Bein bremst"], hilfsmittel: [...hilfsmittel, BOX_VORN] })

// ---------------------------------------------------------------- Auf einem Bein (links)
const einbeinFuss = (z = FERSE_Z): Ziele => fuss(1, 0.08, z, 8)
/** Pistol: tief, Ferse am Boden, freies Bein gestreckt vorn knapp über dem Boden */
const PISTOL_OBEN: Haltung = H({ ...B("huefte", [0, 4, 0, 0]), huefte_r: [30, 4, 0], knie_r: [6], ...vorWelt(0) }, [0, 0, 0], { pos: [0.03, 0.95, 0.02], boden: false, ziele: einbeinFuss() })
const pistolUnten = (w: Winkel = {}): Haltung =>
  H({ ...beinStart(0.31, -0.22, 38, 0.076, FERSE_Z + KNOECHEL_Z, 8, "l"), huefte_r: [128, 4, 0], knie_r: [4], fuss_r: [0, 0], ...vorWelt(38), ...w }, [38, 0, 0], { pos: [0.03, 0.32, -0.22], boden: false, ziele: einbeinFuss() })
/** Einbeiniges Kreuzheben: Oberkörper und hinteres Bein als Linie fast waagerecht, Standbein locker gebeugt */
const einbeinRdlUnten = (w: Winkel, ziele: Ziele = {}): Haltung =>
  H({ huefte_l: [86, 6, 0], knie_l: [22], fuss_l: [8, 0], huefte_r: [-2, 4, 0], knie_r: [4], fuss_r: [-30, 0], ...w, hals: [-25, 0, 0] }, [80, 0, 0], { pos: [0.02, 0.9, -0.14], boden: false, ziele: { ...einbeinFuss(), ...ziele } })
const einbeinRdlOben = (w: Winkel): Haltung => H({ huefte_l: [2, 6, 0], knie_l: [8], huefte_r: [-8, 4, 0], knie_r: [45], fuss_r: [-20, 0], ...w }, [0, 0, 0], { pos: [0.03, 0.93, -0.01], boden: false, ziele: einbeinFuss() })

// ---------------------------------------------------------------- Seitlicher Ausfallschritt (links zur Seite)
const SEIT_BREIT = 0.8
const seitlich = (last: Last): Haltung =>
  H({ ...beinStart(0.59, -0.15, 30, 0.076, FERSE_Z + KNOECHEL_Z, 8, "l"), huefte_l: [80, 30, 0, 20], huefte_r: [30, -40, 0], knie_r: [4], fuss_r: [0, 20], ...(last === "vor" ? vorWelt(30) : ARME[last]) }, [30, 0, 0], {
    pos: [0.6, 0.6, -0.15],
    boden: false,
    ziele: { ...fuss(1, SEIT_BREIT, FERSE_Z, 10), ...fuss(-1, 0.06, FERSE_Z, 5), ...(HAENDE[last] ?? {}) },
  })
const geschlossen = (last: Last): Haltung =>
  H({ ...B("huefte", [0, 2, 0]), ...B("knie", [4]), ...ARME[last] }, [0, 0, 0], { pos: [0, 0.935, -0.01], boden: false, ziele: { ...fuesse(0.06, 5), ...(HAENDE[last] ?? {}) } })
const seitAusfall = (last: Last, hilfsmittel: Hilfsmittel[], text: string): Dehnung =>
  folge("vorn", [[geschlossen(last), 0.6, "Füße geschlossen"], [seitlich(last), 1.4, text], [geschlossen(last), 1.2, "Aus dem gebeugten Bein zurück"]], { seiten: true, hilfsmittel })

export const KRAFT_EINBEIN: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Split Squat, Bulgarisch
  split_squat_kh: split({ z0: 0.3, last: "seite" }, KH),
  split_squat_kg: split({ z0: 0.3, last: "huefte" }, []),
  split_squat_lh: split({ z0: 0.3, last: "ruecken" }, [...STANGE_RUECKEN, RACK]),
  split_squat_band: split({ z0: 0.3, last: "front" }, [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_l", bis: "hand_r" }], { texte: ["Kontrolliert tief", "Gegen den Widerstand hoch"] }),
  split_squat_ffe: split({ z0: 0.3, last: "seite", vornHoch: 0.1 }, [...KH, { art: "box", unter: "fuss_l", hoehe: 0.1 }], { texte: ["Tief, hinteres Knie unter den vorderen Fuß", "Aus dem vorderen Bein hoch"] }),
  split_squat_iso: halte("seite", splitHaltung({ z0: 0.3, last: "seite" }, false), splitHaltung({ z0: 0.3, last: "seite" }, true), { ein: 2, aus: 2, seiten: true, hinweis: "Hinteres Knie eine Handbreit über dem Boden halten, vorderes Knie über dem Fuß.", hilfsmittel: KH }),
  bulgarisch_kh: split({ z0: 0.35, last: "seite", bank: true }, [...KH, { art: "bank", unter: "fuss_r", hoehe: 0.45, quer: true }], { texte: ["Senkrecht nach unten sinken", "Aus der ganzen vorderen Fußsohle hoch"] }),
  bulgarisch_kg: split({ z0: 0.35, last: "huefte", bank: true }, [{ art: "bank", unter: "fuss_r", hoehe: 0.45, quer: true }], { texte: ["Gerade nach unten sinken", "Aus dem vorderen Fuß hoch"] }),
  bulgarisch_lh: split({ z0: 0.35, last: "ruecken", bank: true }, [...STANGE_RUECKEN, { art: "bank", unter: "fuss_r", hoehe: 0.45, quer: true }], { texte: ["Kontrolliert absenken, Oberkörper aufrecht", "Aus dem vorderen Fuß hoch"] }),
  bulgarisch_multipresse: split({ z0: 0.35, last: "ruecken", bank: true }, [...STANGE_RUECKEN, RACK, { art: "bank", unter: "fuss_r", hoehe: 0.45, quer: true }], { texte: ["Kontrolliert absenken", "Hochdrücken, Knie oben nicht blockieren"] }),
  // ------------------------------------------------------------ Ausfallschritte
  ausfallschritt_kh: ausfallRueck("seite", KH),
  ausfallschritt_rueck_lh: ausfallRueck("ruecken", [...STANGE_RUECKEN, RACK]),
  ausfallschritt_rueck_kg: ausfallRueck("huefte", []),
  ausfallschritt_goblet: ausfallRueck("brust", [{ art: "hantel", an: "haende" }]),
  ausfallschritt_multipresse: ausfallRueck("ruecken", [...STANGE_RUECKEN, RACK], "Nach hinten treten, gerade absenken"),
  ausfallschritt_defizit: ausfallRueck("seite", [...KH, { art: "box", unter: "fuss_l", hoehe: 0.08 }], "Vom Podest zurück auf den Boden, tiefer als sonst", 0.08),
  ausfallschritt_gleitscheibe: ausfallRueck("huefte", [{ art: "gleitscheibe", an: "fuss_r" }], "Hinteren Fuß nach hinten gleiten lassen"),
  ausfallschritt_vor_kh: ausfallVor("seite", KH),
  ausfallschritt_vor_kg: ausfallVor("huefte", []),
  ausfallschritt_gehend_kh: ausfallVor("seite", KH, "Großer Schritt nach vorn, tief, dann direkt weiter"),
  ausfallschritt_gehend_lh: ausfallVor("ruecken", STANGE_RUECKEN, "Großer Schritt nach vorn, tief, dann direkt weiter"),
  ausfallschritt_gehend_kg: ausfallVor("huefte", [], "Großer Schritt nach vorn, tief, dann direkt weiter"),
  ausfallschritt_seit_kh: seitAusfall("brust", [{ art: "hantel", an: "haende" }], "Großer Schritt zur Seite, Hüfte nach hinten"),
  ausfallschritt_seit_kg: seitAusfall("vor", [], "Großer Schritt zur Seite, Hüfte nach hinten"),
  ausfallschritt_seit_gleitscheibe: seitAusfall("vor", [{ art: "gleitscheibe", an: "fuss_l" }], "Bein gestreckt zur Seite gleiten lassen"),
  curtsy_lunge: folge(
    "vorn",
    [
      [stand("brust"), 0.6, "Hüftbreit stehen"],
      [
        H({ ...beinStart(0.5, -0.3, 6, 0.076, FERSE_Z + KNOECHEL_Z, 5, "l"), huefte_r: [-6, -22, 0], knie_r: [95], fuss_r: [-40, 0], zehen_r: [50], ...ARME_GOBLET }, [6, 0, 0], {
          pos: [0.05, 0.5, -0.36],
          boden: false,
          ziele: { ...fuss(1, SPUR, FERSE_Z, 5), ...fuss(-1, -0.2, -0.95, -5, HINTEN_HOCH), ...(HAENDE.brust ?? {}) },
        }),
        1.4,
        "Bein diagonal hinter das Standbein, tief",
      ],
      [stand("brust"), 1.2, "Zurück in den Stand"],
    ],
    { seiten: true, hilfsmittel: [{ art: "hantel", an: "haende" }] },
  ),
  kickstand_kniebeuge: wdh(
    "seite",
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [6]), ...ARME_GOBLET }, [0, 0, 0], { pos: [0, 0.925, -0.04], boden: false, ziele: { ...fuss(1, SPUR, FERSE_Z, 8), ...fuss(-1, SPUR, FERSE_Z - 0.16, 5, 0.06), ...(HAENDE.brust ?? {}) } }),
    H({ ...beinStart(0.5, -0.3, 30, 0.076, FERSE_Z + KNOECHEL_Z, 8, "l"), huefte_r: [70, 4, 0], knie_r: [90], ...ARME_GOBLET }, [30, 0, 0], { pos: [0, 0.5, -0.3], boden: false, ziele: { ...fuss(1, SPUR, FERSE_Z, 8), ...fuss(-1, SPUR, FERSE_Z - 0.16, 5, 0.06), ...(HAENDE.brust ?? {}) } }),
    2.0,
    { aus: 1.5, seiten: true, texte: ["Hüfte nach hinten, das vordere Bein trägt", "Aus dem flachen Fuß hoch"], hilfsmittel: [{ art: "hantel", an: "haende" }] },
  ),
  // ------------------------------------------------------------ Step-ups
  step_up: stepUp("seite", KH),
  step_up_kg: stepUp("huefte", []),
  step_up_lh: stepUp("ruecken", STANGE_RUECKEN),
  step_up_kniehub: stepUp("huefte", [], { huefte_r: [92, 4, 0], knie_r: [90], fuss_r: [10, 0] }, "Hoch, freies Knie auf Hüfthöhe, kurz halten"),
  step_down: wdh(
    "seite",
    H({ huefte_l: [2, 4, 0, 0], knie_l: [4], fuss_l: [0, 0], huefte_r: [24, 4, 0], knie_r: [10], fuss_r: [-20, 0], ...vorWelt(0) }, [0, 0, 0], { pos: [0.04, 0.935 + 0.25, -0.01], boden: false, ziele: fuss(1, SPUR, FERSE_Z, 5, 0, 0.25) }),
    H({ ...beinStart(0.93, -0.12, 14, 0.076 + 0.25, FERSE_Z + KNOECHEL_Z, 5, "l"), huefte_r: [36, 4, 0], knie_r: [4], fuss_r: [0, 0], ...vorWelt(14) }, [14, 0, 0], {
      pos: [0.04, 0.93, -0.12],
      boden: false,
      ziele: { ...fuss(1, SPUR, FERSE_Z, 5, 0, 0.25), ferse_r: { pos: [-SPUR, 0.03, 0.36] } },
    }),
    3.0,
    { aus: 1.6, seiten: true, texte: ["Standbein in 3 s beugen, freie Ferse tippt vorn auf den Boden", "Aus dem Standbein hoch"], hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.25 }] },
  ),
  // ------------------------------------------------------------ Einbeinig tief
  pistol: wdh("seite", PISTOL_OBEN, pistolUnten(), 2.4, { aus: 1.8, seiten: true, texte: ["Auf einem Bein ganz tief, Ferse bleibt am Boden", "Ohne Schwung hoch"] }),
  pistol_gegengewicht: wdh("seite", { ...PISTOL_OBEN, g: { ...PISTOL_OBEN.g, ...B("ellbogen", [4, HAMMER]), ...FAUST } }, pistolUnten({ ...B("ellbogen", [4, HAMMER]), ...FAUST }), 2.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Tief, das Gewicht weiter nach vorn schieben", "Gleichmäßig hoch"],
    hilfsmittel: [{ art: "hantel", an: "haende" }],
  }),
  einbein_box_kniebeuge: wdh("seite", PISTOL_OBEN, H({ ...beinStart(0.55, -0.24, 34, 0.076, FERSE_Z + KNOECHEL_Z, 8, "l"), huefte_r: [100, 4, 0], knie_r: [4], ...vorWelt(34) }, [34, 0, 0], { pos: [0.03, 0.56, -0.24], boden: false, ziele: einbeinFuss() }), 2.2, {
    aus: 1.6,
    seiten: true,
    halten: 0.5,
    texte: ["Auf einem Bein bis auf die Bank", "Leicht nach vorn, aus dem Standbein hoch"],
    hilfsmittel: [{ art: "box", unter: "gesaess", hoehe: 0.45, versatz: [0, -0.12] }],
  }),
  skater_squat: wdh(
    "seite",
    H({ ...B("huefte", [0, 4, 0]), huefte_r: [-10, 4, 0], knie_r: [80], ...vorWelt(0) }, [0, 0, 0], { pos: [0.03, 0.935, 0], boden: false, ziele: einbeinFuss() }),
    H({ ...beinStart(0.42, -0.2, 40, 0.076, FERSE_Z + KNOECHEL_Z, 8, "l"), huefte_r: [20, 4, 0], knie_r: [110], fuss_r: [-40, 0], ...vorWelt(40) }, [40, 0, 0], { pos: [0.03, 0.43, -0.2], boden: false, ziele: { ...einbeinFuss(), knie_r: { pos: [-0.08, 0.06, -0.12] } } }),
    2.2,
    { aus: 1.6, seiten: true, texte: ["Hinteres Knie tippt die Matte", "Aus dem Standbein hoch"], hilfsmittel: [{ art: "kissen", unter: "knie_r" }] },
  ),
  // ------------------------------------------------------------ Einbeiniges Kreuzheben
  einbein_kreuzheben: wdh(
    "seite",
    einbeinRdlOben({ schulter_l: [10, 10, 0], ellbogen_l: [20, 0], schulter_r: [4, 8, 0], ellbogen_r: [6, OBERGRIFF], ...FAUST }),
    einbeinRdlUnten({ schulter_l: [70, 20, 0], ellbogen_l: [20, 0], schulter_r: [80, 4, 0], ellbogen_r: [6, OBERGRIFF], ...FAUST }),
    2.0,
    { aus: 1.6, seiten: true, texte: ["Wie eine Wippe nach vorn, Bein lang nach hinten", "Hüfte nach vorn, aufrichten"], hilfsmittel: KH_R },
  ),
  einbein_kreuzheben_kg: wdh(
    "seite",
    einbeinRdlOben(B("schulter", [4, 30, 0])),
    einbeinRdlUnten({ ...B("schulter", [80, 60, 0]), ...B("ellbogen", [6, 0]) }),
    2.0,
    { aus: 1.6, seiten: true, texte: ["Oberkörper und Bein fast waagerecht", "Mit dem Gesäß aufrichten"] },
  ),
}
