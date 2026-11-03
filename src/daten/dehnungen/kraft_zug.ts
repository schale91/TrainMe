// Ziehen mit Zielpunkten: Klimmzüge an der Stange des Wand-Racks. Die Hände hängen in der beschriebenen Breite an der
// Stange, im Hang sind die Arme gestreckt und der Körper hängt ruhig senkrecht, oben ist das Kinn über der Stange und
// die Ellbogen sind so nach unten gezogen, wie die Ausführung es beschreibt. Geprüft mit werkzeuge/messen.html gegen
// werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, H, folge, halte, wdh } from "./basis"
import { FAUST, HAMMER, KH, LH, OBERGRIFF, UNTERGRIFF } from "./kraftbasis"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, ellbogenKreis, rad } from "./ziele"

type P3 = [number, number, number]
type YZ = [number, number]
const dreheYZ = (th: number, p: YZ): YZ => [Math.cos(rad(th)) * p[0] - Math.sin(rad(th)) * p[1], Math.sin(rad(th)) * p[0] + Math.cos(rad(th)) * p[1]]
/** Schultergelenk im Becken bei erhobenen Armen (gemessen) */
const SCHULTER_OBEN: YZ = [0.395, -0.004]

// ---------------------------------------------------------------- Klimmzug
/** Stange des Wand-Racks (Mitte 2,12 m); die Handflächenmarke liegt in der Faust knapp unter der Stange */
const STANGE_Y = 2.12
const HAND_Y = STANGE_Y - 0.03
/** Schulter bis Handflächenmarke bei gestrecktem Arm mit Faust */
const ARM_FAUST = 0.515
const RACK: Hilfsmittel = { art: "rack", an: "becken", z: -0.08 }
interface Zug {
  /** halber Griffabstand */
  griff: number
  dreh: number
  /** Ellbogen oben: Richtung (x nach außen, y, z) */
  ellbogen: P3
  /** Beine (Hang: leicht vor dem Körper; L-Sitz) */
  beine?: Winkel
}
const BEINE_HANG: Winkel = { ...B("huefte", [12, 3, 0]), ...B("knie", [12]), ...B("fuss", [-25, 0]) }
/** mit gebeugten Armen (oben) sitzt das Schultergelenk tiefer im Rumpf */
const SCHULTER_GEBEUGT: YZ = [0.37, -0.004]
const hangHaltung = (z: Zug, schulter: P3, kipp: number, gebeugt: boolean, w: Winkel = {}): Haltung => {
  const s = dreheYZ(kipp, gebeugt ? SCHULTER_GEBEUGT : SCHULTER_OBEN)
  const ziele: Ziele = {}
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    const hand: P3 = [sx * z.griff, HAND_Y, 0]
    ziele[`hand_${n}`] = { pos: hand }
    if (gebeugt) ziele[`ellbogen_${n}`] = { pos: ellbogenKreis([sx * SCHULTER_X, schulter[1], schulter[2]], hand, [sx * z.ellbogen[0], z.ellbogen[1], z.ellbogen[2]], OBERARM, UNTERARM) }
  }
  return H(
    { ...(z.beine ?? BEINE_HANG), ...B("schulter", gebeugt ? [30, 40, 0] : [170, 14, 0]), ...B("ellbogen", [gebeugt ? 120 : 4, z.dreh]), ...FAUST, hals: [gebeugt ? -10 : -4, 0, 0], ...w },
    [kipp, 0, 0],
    { pos: [0, schulter[1] - s[0], schulter[2] - s[1]], boden: false, ziele },
  )
}
/** Hang: Arme gestreckt, Schultern senkrecht unter den Händen */
const hang = (z: Zug, w: Winkel = {}, tiefer = 0): Haltung => {
  const dx = z.griff - SCHULTER_X
  return hangHaltung(z, [0, HAND_Y - Math.sqrt(ARM_FAUST ** 2 - dx * dx) - tiefer, 0], 0, false, w)
}
/** Oben: Kinn über der Stange, Brust zur Stange, Oberkörper leicht zurückgelehnt */
const oben = (z: Zug, w: Winkel = {}): Haltung => hangHaltung(z, [0, STANGE_Y - 0.03, -0.13], -10, true, w)
const ZUG_TEXTE: [string, string] = ["Schulterblätter nach unten, hochziehen bis das Kinn über der Stange ist", "In 2 bis 3 Sekunden ablassen, bis die Arme gestreckt sind"]
const klimmzug = (z: Zug, extra: Partial<Dehnung> = {}): Dehnung => wdh("schraeg", hang(z), oben(z), 1.4, { aus: 2.4, texte: ZUG_TEXTE, hilfsmittel: [RACK], ...extra })
/** Obergriff etwas breiter als schulterbreit: Ellbogen nach unten und hinten zu den Rippen */
const OBER: Zug = { griff: 0.21, dreh: OBERGRIFF, ellbogen: [0.35, -1, -0.6] }
/** Untergriff schulterbreit, Ellbogen eng am Körper */
const UNTER_G: Zug = { griff: 0.16, dreh: UNTERGRIFF, ellbogen: [0, -1, -0.5] }
/** Neutral, Hände schulterbreit, Ellbogen nah am Körper */
const NEUTRAL: Zug = { griff: 0.16, dreh: HAMMER, ellbogen: [0, -1, -0.5] }
/** Eineinhalbfach schulterbreit, Ellbogen seitlich nach unten zu den Hüften */
const WEIT: Zug = { griff: 0.25, dreh: OBERGRIFF, ellbogen: [1, -0.9, -0.15] }
/** L-Sitz: Beine gestreckt waagerecht nach vorn */
const L_SITZ: Winkel = { ...B("huefte", [92, 3, 0]), ...B("knie", [2]), ...B("fuss", [10, 0]) }
/** Füße auf der Box: unten im tiefen Hockstand, oben hilft das Bein */
const BOX: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: 0.5, versatz: [-0.09, 0.05] }

/** Schulterblatt-Klimmzug: Schultern locker zu den Ohren; oben ziehen sie nach unten und heben den Körper an */
const SB_UNTEN = hang({ ...OBER, griff: 0.15 }, B("schulterblatt", [18, 0]), 0.02)


// ---------------------------------------------------------------- Rudern vorgebeugt
// Füße hüftbreit, Knie leicht gebeugt, Oberkörper aus der Hüfte geneigt (kipp gegen die Senkrechte); unten hängen
// die Arme senkrecht unter den Schultern, oben ist die Last am Bauchnabel, am unteren Brustbein bzw. den unteren
// Rippen, die Ellbogen gehen nach hinten.
const SCHULTER_HAENGEND: YZ = [0.352, -0.004]
interface Row {
  kipp: number
  knie: number
  /** halber Fersenabstand */
  breit: number
  griff: number
  dreh: number
  /** Last oben im Rahmen der Schultern (den Rumpf hinauf, vor dem Rumpf) */
  oben: [number, number]
  /** Ellbogen eng am Körper */
  eng?: boolean
  /** Stange unten auf dem Boden (Pendlay): Höhe der Hand unten */
  unten?: number
  arme?: Winkel
}
const rowKoerper = (r: Row) => {
  const schien = r.knie * 0.5
  const knieY = 0.076 + 0.47 * Math.cos(rad(schien)), knieZ = -0.05 + 0.062 + 0.47 * Math.sin(rad(schien))
  const ober = rad(schien - r.knie)
  const hy = knieY + 0.383 * Math.cos(ober), hz = knieZ + 0.383 * Math.sin(ober)
  const s = dreheYZ(r.kipp, SCHULTER_HAENGEND)
  return { hy, hz, sy: hy + 0.003 + s[0], sz: hz + s[1] }
}
const rowHaltung = (r: Row, gezogen: boolean): Haltung => {
  const k = rowKoerper(r)
  // Stange (Hände) unten über dem Mittelfuß: die Füße stehen so, dass die Schultern darüber liegen
  const dz = 0.01 - k.sz
  const ziele: Ziele = {
    ferse_l: { pos: [r.breit, 0.022, -0.05 + dz] },
    fuss_l: { pos: [r.breit + 0.02, 0.034, 0.07 + dz] },
    ferse_r: { pos: [-r.breit, 0.022, -0.05 + dz] },
    fuss_r: { pos: [-r.breit - 0.02, 0.034, 0.07 + dz] },
  }
  for (const sx of [1, -1] as const) {
    const n = sx === 1 ? "l" : "r"
    if (gezogen) {
      const hand: P3 = [sx * r.griff, r.oben[0], r.oben[1]]
      ziele[`hand_${n}`] = { pos: hand, bezug: "schultern" }
      const e = ellbogenKreis([SCHULTER_X, 0, 0], [r.griff, r.oben[0], r.oben[1]], [r.eng ? 0 : 0.6, r.eng ? 0.15 : 0.3, -1])
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    } else ziele[`hand_${n}`] = { pos: [sx * r.griff, r.unten ?? k.sy - 0.5, 0.01] }
  }
  return H(
    { ...B("huefte", [r.kipp + r.knie * 0.5, 6, 0]), ...B("knie", [r.knie]), ...B("fuss", [r.knie * 0.5, 0]), ...B("schulter", gezogen ? [-20, 25, 0] : [r.kipp - 2, 8, 0]), ...B("ellbogen", [gezogen ? 100 : 6, r.dreh]), ...FAUST, hals: [-r.kipp * 0.4, 0, 0], ...r.arme },
    [r.kipp, 0, 0],
    { pos: [0, k.hy + 0.003, k.hz + dz], boden: false, ziele },
  )
}
const RUDERN: [string, string] = ["Zum Bauch ziehen, Ellbogen nach hinten", "Kontrolliert senken, bis die Arme gestreckt sind"]
const rudern = (r: Row, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", rowHaltung(r, false), rowHaltung(r, true), 1.2, { aus: 1.8, halten: 0.5, texte: RUDERN, hilfsmittel, ...extra })
/** Langhantel: Oberkörper etwa 30 bis 45 Grad über der Waagerechten, Griff etwas breiter als schulterbreit, zum Bauchnabel */
const ROW_LH: Row = { kipp: 52, knie: 22, breit: 0.1, griff: 0.21, dreh: OBERGRIFF, oben: [-0.27, 0.13] }


// ---------------------------------------------------------------- Latzug sitzend
// Oberschenkel unter dem Polster, Füße am Boden, Oberkörper leicht zurückgelehnt. Oben sind die Arme gestreckt
// (etwa senkrecht zur Stange), unten ist die Stange knapp unter dem Kinn an der oberen Brust bzw. die Griffe etwa
// auf Schulterhöhe; die Ellbogen zeigen nach unten, beim weiten Griff seitlich, sonst nah am Körper.
interface Lat {
  griff: number
  dreh: number
  /** Rücklage in Grad (positiv = zurück) */
  rueck: number
  /** Hände unten im Rahmen der Schultern (y den Rumpf hinauf, z vor dem Rumpf) */
  unten: [number, number]
  /** Ellbogen unten seitlich (weiter Griff) statt nah am Körper */
  weit?: boolean
  /** nur der rechte Arm zieht */
  einarm?: boolean
}
const LAT_FUESSE: Ziele = {
  ferse_l: { pos: [0.15, 0.022, 0.36] },
  fuss_l: { pos: [0.17, 0.034, 0.48] },
  ferse_r: { pos: [-0.15, 0.022, 0.36] },
  fuss_r: { pos: [-0.17, 0.034, 0.48] },
}
const LAT_BEINE: Winkel = { ...B("huefte", [84, 8, 0]), ...B("knie", [90]), ...B("fuss", [4, 0]), hals: [-8, 0, 0], ...FAUST }
const LAT_FREI: Winkel = { schulter_l: [8, 14, 0], ellbogen_l: [70, 0] }
const latHaltung = (l: Lat, gezogen: boolean): Haltung => {
  const ziele: Ziele = { ...LAT_FUESSE }
  for (const sx of l.einarm ? ([-1] as const) : ([1, -1] as const)) {
    const n = sx === 1 ? "l" : "r"
    if (gezogen) {
      const h: P3 = [l.griff, l.unten[0], l.unten[1]]
      ziele[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
      const e = ellbogenKreis([SCHULTER_X, 0, 0], h, l.weit ? [1, -0.6, -0.25] : [0.15, -1, -0.5])
      ziele[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
    } else {
      // Arm gestreckt, in der Welt etwa senkrecht: im zurückgelehnten Rumpf nach vorn geneigt
      const dx = l.griff - SCHULTER_X, lang = Math.sqrt(ARM_FAUST * ARM_FAUST - dx * dx) * 0.975 + (l.einarm ? 0.03 : 0)
      ziele[`hand_${n}`] = { pos: [sx * l.griff, lang * Math.cos(rad(l.rueck)), lang * Math.sin(rad(l.rueck)) + 0.03], bezug: "schultern" }
    }
  }
  const arme: Winkel = gezogen
    ? { ...B("schulterblatt", [-12, -10]), ...B("schulter", [28, l.weit ? 60 : 25, 0]), ...B("ellbogen", [118, l.dreh]) }
    : { ...B("schulter", [168, l.weit ? 25 : 10, 0]), ...B("ellbogen", [6, l.dreh]) }
  return H({ ...LAT_BEINE, ...arme, ...(l.einarm ? LAT_FREI : {}) }, [-l.rueck, 0, 0], { pos: [0, 0.57, 0], boden: false, ziele })
}
const LAT_KABEL: P3 = [0, 2.15, 0.12]
const latSitz = (l: Lat, griff: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("schraeg", latHaltung(l, false), latHaltung(l, true), 1.4, {
    aus: 2.4,
    texte: ["Schulterblätter nach unten, Stange zur oberen Brust", "Kontrolliert nach oben, bis die Arme gestreckt sind"],
    hilfsmittel: [...griff, { art: "kabel", von: l.einarm ? "hand_r" : "haende", rolle: LAT_KABEL, turm: 0.72 }, { art: "bank", unter: "gesaess", hoehe: 0.42 }],
    ...extra,
  })
const LAT_STANGE: Hilfsmittel = { art: "latstange", von: "hand_l", bis: "hand_r" }
const LAT_WEIT: Lat = { griff: 0.25, dreh: OBERGRIFF, rueck: 15, unten: [-0.07, 0.15], weit: true }

export const KRAFT_ZUG: Record<string, Dehnung> = {
  klimmzug: klimmzug(OBER),
  klimmzug_gewicht: klimmzug(OBER, { texte: ["Mit Gewicht hochziehen, Kinn über die Stange", "Kontrolliert ablassen"] }),
  klimmzug_untergriff: klimmzug(UNTER_G, { texte: ["Ellbogen eng nach unten, Kinn über die Stange", "In 2 bis 3 Sekunden ablassen"] }),
  klimmzug_neutral: klimmzug(NEUTRAL, { texte: ["Ellbogen nah am Körper nach unten ziehen", "Kontrolliert ablassen"] }),
  klimmzug_weit: klimmzug(WEIT, { texte: ["Ellbogen seitlich zu den Hüften, obere Brust zur Stange", "Langsam ablassen"] }),
  klimmzug_exzentrisch_betont: klimmzug(OBER, { ein: 1.4, aus: 4.5, texte: ["Hochziehen", "Sehr langsam ablassen (4 bis 5 s)"] }),
  klimmzug_l_sit: wdh("schraeg", hang({ ...OBER, beine: L_SITZ }), oben({ ...OBER, beine: { ...L_SITZ, ...B("huefte", [82, 3, 0]) } }), 1.4, { aus: 2.4, texte: ["Beine waagerecht halten, hochziehen", "Ablassen, die Beine bleiben vorn"], hilfsmittel: [RACK] }),
  klimmzug_band: klimmzug(OBER, { hilfsmittel: [RACK, { art: "bandanker", von: "knie_l", anker: [0.05, STANGE_Y, 0] }, { art: "bandanker", von: "knie_r", anker: [-0.05, STANGE_Y, 0] }] }),
  klimmzug_negativ: folge("schraeg", [[oben(OBER), 1.0, "Oben, Kinn über der Stange (Sprung oder Stufe)"], [hang(OBER), 4.5, "In 3 bis 5 Sekunden ablassen"], [hang(OBER), 0.8, "Absteigen"]], { hilfsmittel: [RACK] }),
  klimmzug_exzentrisch_overload: folge("schraeg", [[oben(OBER), 1.0, "Oben (Sprung oder Box)"], [hang(OBER), 4.5, "Mit Zusatzgewicht sehr langsam ablassen"], [hang(OBER), 0.8, "Absteigen"]], { hilfsmittel: [RACK] }),
  klimmzug_halten: halte("schraeg", hang(OBER), oben(OBER), { ein: 1.5, aus: 2, hilfsmittel: [RACK] }),
  // Schulterblatt-Klimmzug: Arme bleiben gestreckt, die Schultern sinken erst zu den Ohren und ziehen dann nach unten
  klimmzug_schulterblatt: wdh("schraeg", SB_UNTEN, { ...SB_UNTEN, pos: [0, SB_UNTEN.pos![1] + 0.04, SB_UNTEN.pos![2]], g: { ...SB_UNTEN.g, ...B("schulterblatt", [-18, 0]) } }, 1.0, {
    aus: 1.4,
    halten: 1.2,
    texte: ["Schulterblätter nach unten ziehen, Arme gestreckt", "Locker in den Hang sinken"],
    hilfsmittel: [RACK],
  }),
  // Rudern vorgebeugt
  rudern_lh: rudern(ROW_LH, LH),
  rudern_multipresse: rudern(ROW_LH, LH),
  rudern_lh_untergriff: rudern({ ...ROW_LH, kipp: 45, griff: 0.17, dreh: UNTERGRIFF, eng: true }, LH, { texte: ["Zum Bauchnabel ziehen, Ellbogen eng am Körper", "Bis zur vollen Armstreckung senken"] }),
  // Pendlay: Oberkörper fast waagerecht, Stange über der Fußmitte am Boden, explosiv zum unteren Brustbein
  rudern_pendlay: rudern({ ...ROW_LH, kipp: 88, knie: 82, unten: 0.245, oben: [-0.14, 0.15] }, LH, { ein: 0.6, aus: 1.4, texte: ["Explosiv vom Boden zum unteren Brustbein", "Kontrolliert ablegen, Spannung neu aufbauen"] }),
  rudern_kh_vorgebeugt: rudern({ ...ROW_LH, kipp: 45, griff: 0.17, dreh: HAMMER, oben: [-0.24, 0.08] }, KH, { texte: ["Zu den unteren Rippen ziehen, Schulterblätter zusammen", "Senken, bis die Arme gestreckt sind"] }),
  // Latzug sitzend
  latzug: latSitz(LAT_WEIT, [LAT_STANGE]),
  latzug_wechselnde_griffe: latSitz(LAT_WEIT, [LAT_STANGE], { texte: ["Erster Satz weit: Ellbogen seitlich nach unten", "Oben ganz strecken"] }),
  latzug_neutral: latSitz({ griff: 0.17, dreh: HAMMER, rueck: 8, unten: [-0.08, 0.15] }, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }], { texte: ["Ellbogen nah am Körper zu den Hüften", "Langsam nach oben in die Dehnung"] }),
  latzug_untergriff: latSitz({ griff: 0.18, dreh: UNTERGRIFF, rueck: 12, unten: [-0.08, 0.15] }, [LAT_STANGE], { texte: ["Ellbogen nah am Körper nach unten, Stange zur oberen Brust", "Kontrolliert bis zur vollen Streckung"] }),
  latzug_maschine: latSitz({ griff: 0.22, dreh: HAMMER, rueck: 4, unten: [0.0, 0.12] }, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }], { texte: ["Ellbogen zu den Rippen, Hände auf Schulterhöhe", "Langsam zurück, bis die Arme gestreckt sind"] }),
  latzug_einarmig: latSitz({ griff: 0.15, dreh: HAMMER, rueck: 6, unten: [-0.1, 0.13], einarm: true }, [], { seiten: true, texte: ["Schulter nach unten, Ellbogen nah am Körper zur Hüfte", "Langsam zurück in die volle Dehnung"] }),
  klimmzug_box: wdh(
    "schraeg",
    hang(OBER, { ...B("huefte", [80, 6, 0]), ...B("knie", [110]), ...B("fuss", [10, 0]) }),
    oben(OBER, { ...B("huefte", [30, 6, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]) }),
    1.4,
    { aus: 2.0, texte: ["Hochziehen, die Beine helfen nur so viel wie nötig", "Kontrolliert ablassen"], hilfsmittel: [RACK, BOX] },
  ),
}
