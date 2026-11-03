// Kniebeugen mit Zielpunkten: Die Füße stehen fest in Breite und Winkel aus der Ausführung, die Knie zeigen über
// die Zehen, die Last liegt dort, wo die Ausführung sie beschreibt (Trapez, Schultermulde, vor der Brust, über dem
// Kopf). Die Gelenkwinkel rechnet die Figur selbst aus (src/ui/dehnfigur.ts, loese); geprüft wird mit
// werkzeuge/messen.html gegen werkzeuge/soll.ts.
//
// Zielpunkte der Hände im Rahmen "schultern": Mitte der Schultergelenke, x nach links, y den Rumpf hinauf, z nach vorn.

import type { Dehnung, Haltung, Hilfsmittel, Winkel, Ziel, ZielPunkt } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, B, H, folge, halte, wdh } from "./basis"
import { FAUST, HAMMER, KH, OBERGRIFF } from "./kraftbasis"
import { ARME_FRONT, ARME_GOBLET, ARME_RUECKEN, ARME_SEITE, RACK, STANGE_RUECKEN, ansicht, fuesse } from "./kraft_beine"

type Ziele = Partial<Record<ZielPunkt, Ziel>>
const rad = (g: number) => (g * Math.PI) / 180
/** Rumpflänge Becken bis Schultergelenk der Figur (Meter) */
const RUMPF = 0.354

// ---------------------------------------------------------------- Last und Arme
type Last = "ruecken" | "lowbar" | "front" | "kbfront" | "khfront" | "goblet" | "sumo" | "zercher" | "ueberkopf" | "seite" | "vor" | "verschraenkt"
const paar = (l: [number, number, number], bezug: Ziel["bezug"] = "schultern"): [Ziel, Ziel] => [
  { pos: l, bezug },
  { pos: [-l[0], l[1], l[2]], bezug },
]
const haende = (l: [number, number, number], ell?: [number, number, number]): Ziele => {
  const [hl, hr] = paar(l)
  const z: Ziele = { hand_l: hl, hand_r: hr }
  if (ell) [z.ellbogen_l, z.ellbogen_r] = paar(ell)
  return z
}
/** Zielpunkte der Hände je Last; kipp nur für Überkopf (Arme senkrecht in der Welt) */
const lastZiele = (last: Last, kipp: number): Ziele => {
  switch (last) {
    // Stange oben auf dem Trapez unter C7, Griff etwas weiter als schulterbreit
    case "ruecken":
      return haende([0.26, 0.04, -0.06])
    // 2 bis 3 cm tiefer auf der hinteren Schulter, enger gegriffen, Ellbogen nach hinten oben
    case "lowbar":
      return haende([0.22, 0.005, -0.095])
    // Stange in der Mulde zwischen Schulter und Hals, schulterbreit, Oberarme fast waagerecht nach vorn
    case "front":
      return haende([0.16, 0.03, 0.12], [0.15, -0.04, 0.21])
    // Kettlebells im Front Rack: Griffe auf Brusthöhe, Ellbogen eng am Körper
    case "kbfront":
      return haende([0.1, -0.05, 0.14], [0.15, -0.2, 0.09])
    // Kurzhanteln auf dem vorderen Schultermuskel, Ellbogen nach vorn
    case "khfront":
      return haende([0.17, 0.0, 0.09], [0.15, -0.04, 0.21])
    // Hantel senkrecht eng vor der Brust, Ellbogen zeigen nach unten
    case "goblet":
      return haende([0.045, -0.16, 0.17], [0.14, -0.2, 0.09])
    // Hantel mit gestreckten Armen vor dem Körper zwischen den Beinen
    case "sumo":
      return haende([0.05, -0.49, 0.06])
    // Stange in den Ellenbeugen, Fäuste vor der Brust
    case "zercher":
      return haende([0.05, -0.02, 0.2], [0.12, -0.15, 0.16])
    // Gestreckt über dem Kopf, weit gegriffen, senkrecht in der Welt (über dem Mittelfuß)
    case "ueberkopf": {
      const hoch = 0.43
      return haende([0.36, hoch * Math.cos(rad(kipp)), -hoch * Math.sin(rad(kipp))])
    }
    default:
      return {}
  }
}
const lastArme = (last: Last, kipp: number): Winkel => {
  switch (last) {
    case "ruecken":
    case "lowbar":
      return ARME_RUECKEN
    case "front":
    case "khfront":
      return ARME_FRONT
    case "kbfront":
      return { ...B("schulter", [40, 20, 0]), ...B("ellbogen", [140, HAMMER]), ...FAUST }
    case "goblet":
      return ARME_GOBLET
    case "sumo":
      return { ...B("schulter", [10, -4, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST }
    case "zercher":
      return { ...B("schulter", [36, 8, 0]), ...B("ellbogen", [130, -70]), ...FAUST }
    case "ueberkopf":
      return { ...B("schulter", [170, 30, 0]), ...B("ellbogen", [4, OBERGRIFF]), ...FAUST }
    case "seite":
      return ARME_SEITE
    // Arme waagerecht nach vorn (in der Welt): Beugung = 90 + Neigung des Rumpfs
    case "vor":
      return { ...B("schulter", [88 + kipp, 6, 0]), ...B("ellbogen", [4, 90]) }
    case "verschraenkt":
      return ARME_VERSCHRAENKT
  }
}

// ---------------------------------------------------------------- Haltungen
interface Beuge {
  last: Last
  /** Neigung des Oberkörpers unten (Grad) */
  kipp: number
  /** Höhe des Beckens unten (Meter); Hüftgelenk etwa 1 cm darunter */
  tiefe: number
  /** halber Fersenabstand (Meter) und Zehenwinkel (Grad) */
  breit?: number
  winkel?: number
  /** Fersen erhöht (Meter, Keil oder Scheiben) */
  ferse?: number
  /** Becken unten weiter hinten (Meter), z. B. Box-Kniebeuge mit senkrechten Schienbeinen */
  zurueck?: number
}
/** Mittelfuß bei Fersen auf z = -0.05 */
const MITTELFUSS = 0.01
const fuesseVon = (b: Beuge): Ziele => {
  const z = fuesse(b.breit ?? 0.17, b.winkel ?? 22)
  if (b.ferse) {
    // Ferse auf dem Keil; die Fußspitze etwas höher, damit die Zehen auf und nicht im Boden liegen
    z.ferse_l = { pos: [z.ferse_l!.pos[0], z.ferse_l!.pos[1] + b.ferse, z.ferse_l!.pos[2]] }
    z.ferse_r = { pos: [z.ferse_r!.pos[0], z.ferse_r!.pos[1] + b.ferse, z.ferse_r!.pos[2]] }
    z.fuss_l = { pos: [z.fuss_l!.pos[0], z.fuss_l!.pos[1] + b.ferse * 0.5, z.fuss_l!.pos[2]] }
    z.fuss_r = { pos: [z.fuss_r!.pos[0], z.fuss_r!.pos[1] + b.ferse * 0.5, z.fuss_r!.pos[2]] }
  }
  return z
}
/** Schultern über dem Mittelfuß (Stange auf dem Rücken: Stange darüber, also Schultern etwas davor) */
const beckenZ = (b: Beuge, kipp: number) => {
  // Last vor der Brust: Schultern etwas hinter dem Mittelfuß, damit die Last darüber liegt
  const vorn = ["front", "khfront", "kbfront", "goblet", "zercher"].includes(b.last) ? -0.09 : 0
  const vor = (b.last === "ruecken" || b.last === "lowbar" ? 0.05 : 0) + vorn * Math.sin(rad(kipp)) / Math.sin(rad(35))
  return MITTELFUSS + vor - RUMPF * Math.sin(rad(kipp)) - (b.zurueck ?? 0)
}
/** Aufrecht: Becken so hoch, dass die Beine vom Hüftgelenk zum Knöchel fast gestreckt sind (Knie etwa 172°) */
const oben = (b: Beuge): Haltung => {
  const z = Math.max(-0.02, beckenZ(b, 0))
  const dx = (b.breit ?? 0.17) - 0.02 - 0.078, dz = 0.012 - z
  const bein = (OBER + UNTER) * 0.999
  const hoch = 0.076 + (b.ferse ?? 0) + Math.sqrt(bein * bein - dx * dx - dz * dz) + 0.01
  return H({ ...B("huefte", [0, 6, -(b.winkel ?? 22) * 0.5]), ...B("knie", [4]), ...lastArme(b.last, 0) }, [0, 0, 0], { pos: [0, hoch, z], boden: false, ziele: { ...fuesseVon(b), ...lastZiele(b.last, 0) } })
}
/** Oberschenkel und Unterschenkel der Figur, Knöchel über der Fersenmarke (Meter) */
const OBER = 0.383, UNTER = 0.47
/**
 * Startwert der Beine für den Löser: Hüfte, Knie und Fuß in der Seitenebene aus der Lage von Hüftgelenk und Knöchel
 * (Zwei-Glieder-Kette, Knie nach vorn).
 */
const beinStart = (b: Beuge, tiefe: number, kipp: number): Winkel => {
  const hy = tiefe - 0.01, hz = beckenZ(b, kipp)
  const ay = 0.076 + (b.ferse ?? 0), az = -0.05 + 0.062
  const dy = hy - ay, dz = az - hz
  const d = Math.min(OBER + UNTER - 0.001, Math.hypot(dy, dz))
  const phi = Math.atan2(dz, dy)
  const alpha = Math.acos((OBER * OBER + d * d - UNTER * UNTER) / (2 * OBER * d))
  const ober = (phi + alpha) * 180 / Math.PI
  const knie = 180 - (Math.acos((OBER * OBER + UNTER * UNTER - d * d) / (2 * OBER * UNTER)) * 180) / Math.PI
  const schien = ober - knie
  // Außendrehung der Hüfte etwa wie die Zehen, damit die Knie über die Zehen zeigen
  const w = (b.winkel ?? 22) * ((b.breit ?? 0.17) > 0.25 ? 0.3 : 0.5)
  return { ...B("huefte", [ober + kipp, 0, -w, w]), ...B("knie", [knie]), ...B("fuss", [-schien, 0]) }
}
const unten = (b: Beuge, tiefe = b.tiefe, kipp = b.kipp): Haltung =>
  H({ ...beinStart(b, tiefe, kipp), hals: [-kipp * 0.6, 0, 0], ...lastArme(b.last, kipp) }, [kipp, 0, 0], {
    pos: [0, tiefe, beckenZ(b, kipp)],
    boden: false,
    ziele: { ...fuesseVon(b), ...lastZiele(b.last, kipp) },
  })
const beuge = (b: Beuge, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), oben(b), unten(b), 2.0, { aus: 1.5, texte: ["Kontrolliert in die Hocke", "Kraftvoll aufstehen"], hilfsmittel, ...extra })

const STANGE: Hilfsmittel[] = [...STANGE_RUECKEN, RACK]
const HANTEL: Hilfsmittel[] = [{ art: "hantel", an: "haende" }]
// Keil nur unter der Ferse, der Fußballen steht am Boden
const KEIL: Hilfsmittel[] = [{ art: "kissen", unter: "ferse_l", versatz: [0, -0.1] }, { art: "kissen", unter: "ferse_r", versatz: [0, -0.1] }]

const HIGH: Beuge = { last: "ruecken", kipp: 35, tiefe: 0.43 }
const LOW: Beuge = { last: "lowbar", kipp: 48, tiefe: 0.465, breit: 0.19, winkel: 20 }
const FRONT: Beuge = { last: "front", kipp: 16, tiefe: 0.39, winkel: 18 }
const GOBLET: Beuge = { last: "goblet", kipp: 22, tiefe: 0.38, winkel: 22 }
const BOX_HOEHE = 0.45

export const KRAFT_KNIEBEUGE: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Stange auf dem Rücken
  kniebeuge_lh: beuge(HIGH, STANGE),
  pausenkniebeuge_lh: beuge(HIGH, STANGE, { halten: 2, texte: ["In die Hocke, unten 1 bis 3 s still halten", "Explosiv aufstehen"] }),
  tempo_kniebeuge_lh: beuge(HIGH, STANGE, { ein: 4, halten: 1, texte: ["Gleichmäßig in 3 bis 5 s absenken", "Zügig aufstehen"] }),
  kniebeuge_multipresse: beuge({ ...HIGH, kipp: 24, zurueck: 0.06 }, STANGE, { texte: ["Kontrolliert absenken, Rücken bleibt stabil", "Aus der ganzen Fußsohle hochdrücken"] }),
  kniebeuge_lh_lowbar: beuge(LOW, STANGE, { texte: ["Hüfte nach hinten, Knie nach außen", "Hüfte nach oben und vorn, Brust mitführen"] }),
  pin_squat: folge(
    "schraeg",
    [
      [unten(HIGH), 1.0, "Stange ruht auf den Ablagen"],
      [oben(HIGH), 1.4, "Aus dem Stillstand aufstehen"],
      [unten(HIGH), 2.0, "Kontrolliert absenken, bis die Stange aufsetzt"],
    ],
    { hilfsmittel: [...STANGE_RUECKEN, { art: "rack", an: "becken", haken: 1.4, ablage: 0.72 }] },
  ),
  box_squat_lh: beuge({ last: "ruecken", kipp: 36, tiefe: 0.56, breit: 0.21, winkel: 25, zurueck: 0.08 }, [...STANGE, { art: "box", unter: "gesaess", hoehe: BOX_HOEHE - 0.03, versatz: [0, -0.16] }], {
    halten: 1,
    texte: ["Hüfte nach hinten, auf die Box setzen", "Kraftvoll aufstehen, Hüfte nach vorn"],
  }),
  eineinhalb_kniebeuge: folge(
    "schraeg",
    [
      [unten(HIGH), 2.0, "In die volle Tiefe"],
      [unten(HIGH, 0.62, 28), 1.0, "Bis etwa zur Hälfte hoch"],
      [unten(HIGH), 1.0, "Wieder in die volle Tiefe"],
      [oben(HIGH), 1.4, "Ganz aufstehen"],
    ],
    { hilfsmittel: STANGE },
  ),
  fersen_kniebeuge_lh: beuge({ last: "ruecken", kipp: 18, tiefe: 0.38, breit: 0.15, winkel: 15, ferse: 0.06 }, [...STANGE, ...KEIL], { texte: ["Gerade nach unten, Knie weit nach vorn", "Aus dem ganzen Fuß hochdrücken"] }),
  // ------------------------------------------------------------ Last vorn
  frontkniebeuge_lh: beuge(FRONT, STANGE, { texte: ["Gerade nach unten, Ellbogen bleiben oben", "Gleichmäßig hoch, Ellbogen nach oben"] }),
  zercher_kniebeuge: beuge({ last: "zercher", kipp: 28, tiefe: 0.42, breit: 0.19, winkel: 22 }, [{ art: "langhantel", von: "ellbogen_l", bis: "ellbogen_r" }], { texte: ["Zwischen die Beine absenken, Ellbogen nach unten", "Kraftvoll hoch, Stange eng am Körper"] }),
  goblet: beuge(GOBLET, HANTEL, { texte: ["Zwischen die Fersen absenken, Ellbogen an die Knie", "Aus der ganzen Fußsohle hoch"] }),
  kb_frontkniebeuge: beuge({ last: "kbfront", kipp: 20, tiefe: 0.41, winkel: 18 }, KH, { texte: ["Gerade absenken, Brust aufrecht", "Kraftvoll hoch"] }),
  frontkniebeuge_kh: beuge({ last: "khfront", kipp: 18, tiefe: 0.41, winkel: 18 }, KH, { texte: ["Gerade absenken, Ellbogen hoch", "Hochdrücken"] }),
  sumo_kniebeuge: beuge({ last: "sumo", kipp: 14, tiefe: 0.44, breit: 0.3, winkel: 40 }, HANTEL, { ansicht: "vorn", texte: ["Gerade nach unten, Knie nach außen", "Hoch, oben das Gesäß anspannen"] }),
  cyclist_squat: beuge({ last: "goblet", kipp: 6, tiefe: 0.36, breit: 0.06, winkel: 4, ferse: 0.07 }, [...HANTEL, ...KEIL], { texte: ["Langsam gerade nach unten, Knie weit vor", "Hoch bis kurz vor dem Strecken"] }),
  fersen_kniebeuge_kh: beuge({ last: "seite", kipp: 16, tiefe: 0.38, breit: 0.13, winkel: 15, ferse: 0.06 }, [...KH, ...KEIL], { texte: ["Gerade nach unten, Knie weit nach vorn", "Gleichmäßig hoch"] }),
  ueberkopf_kniebeuge: beuge({ last: "ueberkopf", kipp: 12, tiefe: 0.42, winkel: 20 }, [{ art: "langhantel", von: "hand_l", bis: "hand_r" }], { texte: ["Kontrolliert absenken, Stange über dem Mittelfuß", "Gleichmäßig aufstehen"] }),
  // ------------------------------------------------------------ Kurzhantel, Band, Körpergewicht
  kh_kniebeuge: beuge({ last: "seite", kipp: 28, tiefe: 0.44, breit: 0.15, winkel: 15 }, KH, { texte: ["Gerade nach unten, Hanteln seitlich", "Aus der ganzen Fußsohle hoch"] }),
  band_kniebeuge: beuge({ last: "khfront", kipp: 24, tiefe: 0.44, breit: 0.12, winkel: 12 }, [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_r", bis: "hand_r" }], { texte: ["So tief wie möglich", "Gegen den Widerstand hoch"] }),
  kniebeuge_kg: beuge({ last: "vor", kipp: 32, tiefe: 0.44 }, [], { texte: ["Hüfte nach hinten, Knie nach vorn außen", "Aufstehen"] }),
  box_kniebeuge: beuge({ last: "vor", kipp: 30, tiefe: 0.55, zurueck: 0.08 }, [{ art: "box", unter: "gesaess", hoehe: BOX_HOEHE - 0.03, versatz: [0, -0.16] }], {
    halten: 0.6,
    texte: ["Hüfte nach hinten, kurz auf die Bank setzen", "Leicht nach vorn, aufstehen"],
  }),
  // ------------------------------------------------------------ An der Wand, Spanische Kniebeuge
  ball_wandkniebeuge: beuge({ last: "vor", kipp: 0, tiefe: 0.555, breit: 0.17, winkel: 10, zurueck: 0.38 }, [{ art: "gymnastikball", an: "ruecken", hinter: true }, { art: "wand", an: "ruecken", richtung: "hinten", abstand: 0.62 }], { texte: ["Am Ball nach unten rollen", "Aus den Fersen hochdrücken"] }),
  wandsitzen: halte("seite", oben({ last: "verschraenkt", kipp: 0, tiefe: 0.555, breit: 0.12, winkel: 6, zurueck: 0.38 }), unten({ last: "verschraenkt", kipp: 0, tiefe: 0.555, breit: 0.12, winkel: 6, zurueck: 0.38 }), { ein: 2, aus: 2, hilfsmittel: [{ art: "wand", an: "gesaess", richtung: "hinten", abstand: 0.04 }] }),
  spanish_squat: beuge({ last: "vor", kipp: 6, tiefe: 0.555, breit: 0.12, winkel: 8, zurueck: 0.34 }, [{ art: "bandanker", von: "knie_l", anker: [0.2, 0.45, 0.9] }, { art: "bandanker", von: "knie_r", anker: [-0.2, 0.45, 0.9] }], {
    texte: ["Hüfte nach hinten setzen, Schienbeine senkrecht", "Hochdrücken, Band bleibt gespannt"],
  }),
  spanish_squat_iso: halte("seite", oben({ last: "vor", kipp: 6, tiefe: 0.6, breit: 0.12, winkel: 8, zurueck: 0.3 }), unten({ last: "vor", kipp: 6, tiefe: 0.6, breit: 0.12, winkel: 8, zurueck: 0.3 }), {
    ein: 2,
    aus: 2,
    hinweis: "Knie 60 bis 90 Grad gebeugt, Schienbeine senkrecht, das Band hält die Knie.",
    hilfsmittel: [{ art: "bandanker", von: "knie_l", anker: [0.2, 0.45, 0.9] }, { art: "bandanker", von: "knie_r", anker: [-0.2, 0.45, 0.9] }],
  }),
}
