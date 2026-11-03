// Hintere Kette und Hüfte mit der Dehnfigur: Kreuzheben, Rumänisches Kreuzheben, Good Morning, Hip Thrust,
// Beckenheben, Swings, Beinbeuger, Waden, Ab- und Adduktoren.
//
// Winkel im Raum: Oberschenkel = Hüftbeugung - Kippung des Beckens; Unterschenkel = Oberschenkel - Kniebeugung;
// Fuß flach, wenn Anziehen = -Unterschenkel. Arme hängen senkrecht, wenn Schulterbeugung = Kippung.
// Maschinen (Beinbeuger, Gesäß-, Waden-, Abduktorenmaschine, GHD, Rückenstrecker), Trap-Bar und Landmine
// hat das Heimstudio nicht; diese Übungen behalten die einfache Figur.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, B, H, RUECKENLAGE_AUF, SEITLAGE, STAND, VIERFUESSLER, folge, halte, mit, wdh } from "./basis"
import { FAUST, HAMMER, KH, OBERGRIFF, kabel, kabelstange } from "./kraftbasis"
import { ARME_RUECKEN, ARME_SEITE, RACK, STANGE_RUECKEN, STUHL, WAND_HINTEN, ansicht, stand } from "./kraft_beine"

// ---------------------------------------------------------------- Heben vom Boden
const LH: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
/** Arme hängen senkrecht, Hände im Obergriff */
const haengen = (kipp: number, breit = 8, dreh = OBERGRIFF): Winkel => ({ ...B("schulter", [kipp, breit, 0]), ...B("ellbogen", [4, dreh]), ...FAUST })
/**
 * Gebeugte Haltung: kipp = Oberkörper vor, ober = Oberschenkel vor, schien = Knie vor den Füßen (Grad).
 * Rücken gerade, Blick schräg nach vorn unten.
 */
const beuge = (kipp: number, ober: number, schien: number, arme: Winkel, breit = 10, w: Winkel = {}): Haltung =>
  H({ ...B("huefte", [ober + kipp, breit, -breit / 2]), ...B("knie", [ober + schien]), ...B("fuss", [schien, 0]), hals: [-kipp / 3, 0, 0], ...arme, ...w }, [kipp, 0, 0])
const oben = (arme: Winkel, breit = 10): Haltung => stand(arme, breit)

/** Kreuzheben: vom Boden in den Stand, ablegen */
const kreuzheben = (kipp: number, ober: number, schien: number, hilfsmittel: Hilfsmittel[], breit = 10, arm = 8, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh(ansicht(hilfsmittel), beuge(kipp, ober, schien, haengen(kipp, arm), breit), oben(haengen(2, arm), breit), 1.4, {
    aus: 1.8,
    texte: ["Stange nah am Körper hochziehen, Hüfte nach vorn", "Kontrolliert ablegen"],
    hilfsmittel,
    ...extra,
  })
/** Hüftbeugen aus dem Stand (RDL, Good Morning): Hüfte nach hinten, Knie leicht gebeugt */
const hinge = (arme: (kipp: number) => Winkel, hilfsmittel: Hilfsmittel[], kipp = 72, knie = 18, extra: Partial<Dehnung> = {}, breit = 10): Dehnung =>
  wdh(ansicht(hilfsmittel), oben(arme(2), breit), beuge(kipp, 12, knie - 12, arme(kipp), breit), 2.0, {
    aus: 1.4,
    texte: ["Hüfte nach hinten schieben, Rücken gerade", "Hüfte nach vorn, aufrichten"],
    hilfsmittel,
    ...extra,
  })

// ---------------------------------------------------------------- Hip Thrust, Beckenheben
/** Oberer Rücken an der quer stehenden Bank, Füße flach am Boden unter den Knien */
const BANK_QUER: Hilfsmittel = { art: "bank", unter: "bws", hoehe: 0.42, quer: true }
const ARME_BANK: Winkel = { ...B("schulter", [-60, 40, 0]), ...B("ellbogen", [80, 0]) }
const ARME_STANGE_HUEFTE: Winkel = { ...B("schulter", [28, 34, 0]), ...B("ellbogen", [30, OBERGRIFF]), ...FAUST }
const thrustOben = (w: Winkel): Haltung => H({ ...B("huefte", [0, 10, 0]), ...B("knie", [92]), ...B("fuss", [2, 0]), hals: [22, 0, 0], ...w }, [-90, 0, 0], { pos: [0, 0.5, 0], boden: false })
const thrustUnten = (w: Winkel): Haltung => H({ ...B("huefte", [78, 10, 0]), ...B("knie", [100]), ...B("fuss", [-23, 0]), hals: [22, 0, 0], ...w }, [-45, 0, 0], { pos: [0, 0.25, -0.1], boden: false })
const thrust = (arme: Winkel, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", thrustUnten(arme), thrustOben(arme), 1.2, { aus: 1.8, halten: 1, texte: ["Hüfte nach oben strecken, Kinn zur Brust", "Becken kontrolliert absenken"], hilfsmittel: [BANK_QUER, ...hilfsmittel], ...extra })

/** Rückenlage, Füße aufgestellt; oben: Schultern, Hüfte und Knie in einer Linie */
const ARME_BODEN: Winkel = { ...B("schulter", [0, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]) }
const ARME_BODEN_OBEN: Winkel = { ...B("schulter", [-8, 14, 0]), ...B("ellbogen", [4, OBERGRIFF]) }
const brueckeUnten = (w: Winkel = {}): Haltung => mit(RUECKENLAGE_AUF, { g: { ...ARME_BODEN, ...w } })
const brueckeOben = (w: Winkel = {}): Haltung =>
  mit(RUECKENLAGE_AUF, { dreh: [-118, 0, 0], g: { ...ARME_BODEN_OBEN, ...B("huefte", [4, 4, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), bws: [22, 0, 0], hals: [6, 0, 0], ...w } })
const bruecke = (unten: Winkel, obenW: Winkel, extra: Partial<Dehnung> = {}): Dehnung =>
  wdh("seite", brueckeUnten(unten), brueckeOben(obenW), 1.2, { aus: 1.6, halten: 1, texte: ["Becken heben, Gesäß fest anspannen", "Langsam ablegen"], ...extra })
/** Freies rechtes Bein gestreckt in Verlängerung des Oberschenkels */
const EINBEIN_UNTEN: Winkel = { huefte_r: [60, 4, 0], knie_r: [0], fuss_r: [10, 0] }
/** Beine fast gestreckt, Fersen am Boden, Becken bleibt oben */
const GESTRECKT: Winkel = { ...B("huefte", [-24, 4, 0]), ...B("knie", [4]), ...B("fuss", [-10, 0]), bws: [10, 0, 0] }
const mit2 = (ansicht: Dehnung["ansicht"], d: Dehnung): Dehnung => ({ ...d, ansicht })
const EINBEIN_OBEN: Winkel = { huefte_r: [4, 4, 0], knie_r: [0], fuss_r: [10, 0] }
/** Füße erhöht auf dem Kasten (40 cm) */
const FUESSE_HOCH_UNTEN: Winkel = { ...B("huefte", [30, 4, 0]), ...B("knie", [40]), ...B("fuss", [-30, 0]) }
const FUESSE_HOCH_OBEN: Winkel = { ...B("huefte", [0, 4, 0]), ...B("knie", [60]), ...B("fuss", [-62, 0]), bws: [22, 0, 0], hals: [6, 0, 0] }
/** Beckenheben mit den Fersen auf dem Gymnastikball (oben gestreckte Beine, dann Knie beugen) */
const BALL_GESTRECKT: Haltung = mit(RUECKENLAGE_AUF, { dreh: [-112, 0, 0], g: { ...ARME_BODEN_OBEN, ...B("huefte", [0, 4, 0]), ...B("knie", [4]), ...B("fuss", [-10, 0]), bws: [10, 0, 0], hals: [8, 0, 0] } })
const BALL_GEBEUGT: Haltung = mit(RUECKENLAGE_AUF, { dreh: [-122, 0, 0], g: { ...ARME_BODEN_OBEN, ...B("huefte", [4, 4, 0]), ...B("knie", [100]), ...B("fuss", [20, 0]), bws: [24, 0, 0], hals: [6, 0, 0] } })

// ---------------------------------------------------------------- Bodenlage, Vierfüßler, Seitlage
const VIER: Haltung = VIERFUESSLER
/** Seitlage (links unten), Beine gestreckt übereinander, Kopf auf dem unteren Arm */
const SEITLAGE_GESTRECKT: Haltung = mit(SEITLAGE, { g: { ...B("huefte", [6, 0, 0]), ...B("knie", [4]), ...B("fuss", [0, 0]), schulter_l: [170, 0, 0], ellbogen_l: [120, 0], schulter_r: [20, 0, 0], ellbogen_r: [80, 0] } })
const SEITLAGE_GEBEUGT: Haltung = mit(SEITLAGE, { g: { ...B("huefte", [45, 0, 0]), ...B("knie", [90]), schulter_l: [170, 0, 0], ellbogen_l: [120, 0], schulter_r: [20, 0, 0], ellbogen_r: [80, 0] } })

/** Seitstütz auf dem linken Unterarm: Körper als Linie, linke Seite unten; w überschreibt Beine */
const SEITSTUETZ_ARME: Winkel = { schulter_l: [0, 84, 0], ellbogen_l: [90, 0], schulter_r: [0, 10, 0], ellbogen_r: [10, 0] }
const seitstuetz = (w: Winkel, neigen = 96): Haltung => H({ ...B("huefte", [0, 0, 0]), ...B("knie", [4]), ...B("fuss", [0, 0]), ...SEITSTUETZ_ARME, hals: [0, -10, 0], ...w }, [0, 0, neigen])

// ---------------------------------------------------------------- Wade
/** Fußballen auf der Kante der Box (20 cm), Ferse frei: tief = Ferse unter der Kante, hoch = auf den Zehen */
const STUFE: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: 0.2, versatz: [-0.1, -0.12] }
const wadeTief = (w: Winkel = {}): Haltung => H({ ...B("huefte", [0, 8, 0]), ...B("knie", [2]), ...B("fuss", [20, 0]), ...B("zehen", [-10]), ...w }, [0, 0, 0], { pos: [0, 1.15, 0], boden: false })
const wadeHoch = (w: Winkel = {}): Haltung => H({ ...B("huefte", [0, 8, 0]), ...B("knie", [2]), ...B("fuss", [-40, 0]), ...B("zehen", [-30]), ...w }, [0, 0, 0], { pos: [0, 1.29, 0], boden: false })
const wade = (w: Winkel, hilfsmittel: Hilfsmittel[], einbein = false, extra: Partial<Dehnung> = {}): Dehnung => {
  const frei: Winkel = einbein ? { huefte_r: [10, 8, 0], knie_r: [70], fuss_r: [-20, 0] } : {}
  return wdh(ansicht(hilfsmittel), wadeTief({ ...w, ...frei }), wadeHoch({ ...w, ...frei }), 1.0, {
    aus: 2.0,
    halten: 1,
    seiten: einbein,
    texte: ["Hoch auf die Zehenspitzen", "Ferse langsam unter die Kante"],
    hilfsmittel: [STUFE, ...hilfsmittel],
    ...extra,
  })
}
/** Wadenheben am Boden mit Halt an der Stuhllehne */
const STUHL_VORN: Hilfsmittel = { art: "stuhl", unter: "haende", hoehe: 0.45, versatz: [0, 0.28] }
const HALT_STUHL: Winkel = { ...B("schulter", [34, 8, 0]), ...B("ellbogen", [12, 90]), ...B("hand", [40, 0]) }

// ---------------------------------------------------------------- Stehend am Kabel oder Band (rechtes Bein arbeitet)
const STAND_HALT: Winkel = { ...B("schulter", [50, 10, 0]), ...B("ellbogen", [20, 90]) }
const standBein = (rechts: Winkel, kipp = 6): Haltung => H({ huefte_l: [4, 6, 0], knie_l: [6], fuss_l: [0, 0], ...STAND_HALT, ...rechts }, [kipp, 0, 0])

export const KRAFT_HUEFTE: Record<string, Dehnung> = {
  // Kreuzheben
  kreuzheben_lh: kreuzheben(50, 70, 22, LH),
  kreuzheben_sumo: kreuzheben(34, 72, 14, LH, 36, 2),
  kreuzheben_gegenstand: kreuzheben(34, 72, 14, LH, 36, 2),
  kreuzheben_reset: folge(
    "schraeg",
    [
      [beuge(50, 70, 22, haengen(50)), 0.8, "Stange liegt, Spannung neu aufbauen"],
      [oben(haengen(2)), 1.4, "Hochziehen"],
      [beuge(50, 70, 22, haengen(50)), 1.8, "Komplett ablegen"],
    ],
    { hilfsmittel: LH },
  ),
  kreuzheben_defizit: kreuzheben(54, 76, 24, [...LH, { art: "kissen", unter: "fuss_l" }, { art: "kissen", unter: "fuss_r" }], 10, 8, { texte: ["Von der Erhöhung aus tiefer starten, hochziehen", "Kontrolliert ablegen"] }),
  kreuzheben_pause: folge(
    "schraeg",
    [
      [beuge(50, 70, 22, haengen(50)), 0.6, "Start vom Boden"],
      [beuge(44, 40, 8, haengen(44)), 1.0, "Bis knapp unter das Knie"],
      [beuge(44, 40, 8, haengen(44)), 2.0, "Pause halten, Rücken fest", true],
      [oben(haengen(2)), 1.0, "Ganz aufrichten"],
      [beuge(50, 70, 22, haengen(50)), 1.8, "Ablegen"],
    ],
    { hilfsmittel: LH },
  ),
  rack_pull: wdh("schraeg", beuge(38, 30, 6, haengen(38)), oben(haengen(2)), 1.2, {
    aus: 1.6,
    texte: ["Von den Ablagen in den Stand ziehen", "Stange zurück auf die Ablagen"],
    hilfsmittel: [...LH, { art: "rack", an: "becken", z: 0.2, ablage: 0.5 }],
  }),
  kreuzheben_gestreckt: kreuzheben(84, 6, 0, LH, 10, 8, { texte: ["Mit fast gestreckten Knien hochziehen", "Hüfte nach hinten, ablegen"] }),
  kb_kreuzheben: wdh("schraeg", beuge(52, 86, 30, haengen(52, 0, HAMMER), 18), oben(haengen(2, 0, HAMMER), 18), 1.2, {
    aus: 1.6,
    texte: ["Kettlebell zwischen den Füßen hochziehen", "Hüfte nach hinten, abstellen"],
    hilfsmittel: [{ art: "hantel", an: "haende" }],
  }),
  // Hüftbeugen aus dem Stand
  rdl_lh: hinge((k) => haengen(k), LH),
  rdl_kh: hinge((k) => haengen(k, 10), KH),
  rdl_kabel: hinge((k) => haengen(k, 4), [kabelstange(), ...kabel("haende")], 66),
  rdl_b_stance: wdh(
    "seite",
    H({ huefte_l: [2, 8, 0], knie_l: [4], fuss_l: [0, 0], huefte_r: [-8, 8, 0], knie_r: [24], fuss_r: [-24, 0], zehen_r: [40], ...haengen(2, 10) }),
    H({ huefte_l: [82, 8, 0], knie_l: [18], fuss_l: [6, 0], huefte_r: [62, 8, 0], knie_r: [30], fuss_r: [-12, 0], zehen_r: [50], ...haengen(72, 10), hals: [-24, 0, 0] }, [72, 0, 0]),
    2.0,
    { aus: 1.4, seiten: true, texte: ["Vorderes Bein trägt, Hüfte nach hinten", "Aufrichten"], hilfsmittel: KH },
  ),
  good_morning_lh: hinge(() => ARME_RUECKEN, [...STANGE_RUECKEN, RACK], 70, 18, { texte: ["Hüfte nach hinten, Oberkörper fast waagerecht", "Hüfte nach vorn, aufrichten"] }),
  good_morning_band: hinge(() => ({ ...B("schulter", [-6, 50, 70]), ...B("ellbogen", [130, OBERGRIFF]), ...FAUST }), [{ art: "band", von: "fuss_l", bis: "hand_l" }, { art: "band", von: "fuss_r", bis: "hand_r" }], 70),
  hip_hinge_stab: hinge(() => ({ schulter_l: [-40, 20, 70], ellbogen_l: [100, 0], schulter_r: [160, 24, 0], ellbogen_r: [150, 0] }), [{ art: "stab", von: "hand_l", bis: "hand_r" }], 60, 18, {
    texte: ["Stab bleibt an Kopf, Brustwirbelsäule und Kreuzbein", "Aufrichten"],
  }),
  // Hip Thrust an der Bank
  hip_thrust_lh: thrust(ARME_STANGE_HUEFTE, LH),
  hip_thrust_multipresse: thrust(ARME_STANGE_HUEFTE, LH),
  hip_thrust_kh: thrust({ ...B("schulter", [-6, 30, 0]), ...B("ellbogen", [20, HAMMER]), ...FAUST }, [{ art: "hantel", an: "haende" }]),
  hip_thrust_band: thrust(ARME_BANK, [{ art: "bandanker", von: "becken", anker: [0.3, 0.02, 0.05] }, { art: "bandanker", von: "becken", anker: [-0.3, 0.02, 0.05] }]),
  hip_thrust_kg: thrust(ARME_BANK, []),
  hip_thrust_einbeinig: wdh("seite", thrustUnten({ ...ARME_BANK, huefte_r: [130, 10, 0], knie_r: [100] }), thrustOben({ ...ARME_BANK, huefte_r: [40, 10, 0], knie_r: [100] }), 1.2, {
    aus: 1.8,
    halten: 1,
    seiten: true,
    texte: ["Über die Ferse des Standbeins hochdrücken", "Becken kontrolliert absenken"],
    hilfsmittel: [BANK_QUER],
  }),
  // Beckenheben am Boden
  glute_bridge: bruecke({}, {}),
  glute_bridge_einbeinig: bruecke(EINBEIN_UNTEN, EINBEIN_OBEN, { seiten: true, texte: ["Über eine Ferse hochdrücken, Becken waagerecht", "Langsam ablegen"] }),
  glute_bridge_lh: bruecke(ARME_STANGE_HUEFTE, ARME_STANGE_HUEFTE, { hilfsmittel: LH }),
  glute_bridge_isohold: halte("seite", brueckeUnten(), brueckeOben(), { ein: 1.5, aus: 2, hinweis: "Becken oben halten, Gesäß bleibt angespannt." }),
  glute_bridge_miniband: bruecke(B("huefte", [60, 12, 0]), B("huefte", [4, 12, 0]), {
    texte: ["Becken heben, Knie gegen das Band nach außen", "Langsam ablegen"],
    hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }],
  }),
  glute_bridge_marsch: folge(
    "seite",
    [
      [brueckeOben(), 1.2, "Becken oben halten"],
      [brueckeOben({ huefte_r: [70, 4, 0], knie_r: [90] }), 0.8, "Ein Knie anheben, Becken bleibt ruhig"],
      [brueckeOben(), 0.6],
      [brueckeOben({ huefte_l: [70, 4, 0], knie_l: [90] }), 0.8, "Anderes Knie anheben"],
      [brueckeOben(), 0.6],
    ],
  ),
  glute_bridge_fuesse_erhoeht: wdh("seite", brueckeUnten(FUESSE_HOCH_UNTEN), mit(RUECKENLAGE_AUF, { dreh: [-125, 0, 0], g: { ...ARME_BODEN_OBEN, ...FUESSE_HOCH_OBEN } }), 1.2, {
    aus: 1.6,
    halten: 1,
    texte: ["Fersen auf den Kasten drücken, Becken heben", "Langsam ablegen"],
    hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.3, versatz: [-0.1, 0.05] }],
  }),
  frog_pump: mit2("schraeg", bruecke({ ...B("huefte", [50, 45, -40]), ...B("knie", [110]), ...B("fuss", [10, 30]) }, { ...B("huefte", [0, 45, -40]), ...B("knie", [110]), ...B("fuss", [10, 30]) }, {
    texte: ["Fußsohlen zusammen, Becken kurz und kräftig heben", "Ablegen"],
  })),
  golf_bruecke_beinstreckung: folge(
    "seite",
    [
      [brueckeUnten(), 0.8, "Rückenlage, Füße aufgestellt"],
      [brueckeOben(), 1.2, "Becken heben"],
      [brueckeOben(EINBEIN_OBEN), 1.0, "Ein Bein strecken, Becken bleibt waagerecht"],
      [brueckeOben(EINBEIN_OBEN), 2.0, "Halten", true],
      [brueckeOben(), 0.8, "Fuß zurück"],
      [brueckeUnten(), 1.2, "Ablegen"],
    ],
    { seiten: true },
  ),
  // Pull-Through und Swing
  pull_through_kabel: wdh(
    "seite",
    beuge(62, 30, 10, { ...B("schulter", [10, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 20),
    oben({ ...B("schulter", [10, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 20),
    1.2,
    { aus: 1.6, texte: ["Hüfte nach vorn strecken, Seil nach vorn", "Hüfte zurück, Seil zwischen die Beine"], hilfsmittel: kabel("haende", [0, 0.12, -0.75]) },
  ),
  pull_through_band: wdh(
    "seite",
    beuge(62, 30, 10, { ...B("schulter", [10, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 20),
    oben({ ...B("schulter", [10, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 20),
    1.2,
    { aus: 1.6, texte: ["Hüfte nach vorn strecken", "Hüfte zurück, Band zwischen die Beine"], hilfsmittel: [{ art: "bandanker", von: "haende", anker: [0, 0.1, -0.9] }] },
  ),
  kb_swing: folge(
    "seite",
    [
      [beuge(66, 30, 14, { ...B("schulter", [30, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 18), 0.5, "Kettlebell zwischen die Beine"],
      [oben({ ...B("schulter", [88, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 18), 0.6, "Hüfte explosiv nach vorn, Glocke auf Brusthöhe"],
      [oben({ ...B("schulter", [80, 2, 0]), ...B("ellbogen", [4, HAMMER]), ...FAUST }, 18), 0.3],
    ],
    { hilfsmittel: [{ art: "hantel", an: "haende" }] },
  ),
  kb_swing_einarmig: folge(
    "seite",
    [
      [beuge(66, 30, 14, { schulter_l: [30, 2, 0], ellbogen_l: [4, HAMMER], schulter_r: [40, 30, 0], ellbogen_r: [30, 0], ...FAUST }, 18), 0.5, "Kettlebell zwischen die Beine"],
      [oben({ schulter_l: [88, 4, 0], ellbogen_l: [4, HAMMER], schulter_r: [10, 20, 0], ellbogen_r: [20, 0], ...FAUST }, 18), 0.6, "Hüfte explosiv nach vorn, Schulter bleibt stabil"],
      [oben({ schulter_l: [80, 4, 0], ellbogen_l: [4, HAMMER], schulter_r: [10, 20, 0], ellbogen_r: [20, 0], ...FAUST }, 18), 0.3],
    ],
    { seiten: true, hilfsmittel: [{ art: "hantel", an: "hand_l" }] },
  ),
  // Kickbacks
  kickback_kabel: wdh("seite", standBein({ huefte_r: [4, 6, 0], knie_r: [6], fuss_r: [0, 0] }), standBein({ huefte_r: [-34, 6, 0], knie_r: [8], fuss_r: [10, 0] }, 14), 1.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Bein gestreckt nach hinten führen", "Kontrolliert zurück"],
    hilfsmittel: kabel("fuss_r", [-0.1, 0.12, 0.6]),
  }),
  kickback_vierfuessler: wdh("seite", VIER, mit(VIER, { g: { huefte_r: [0, 3, 0], knie_r: [90], fuss_r: [0, 0] } }), 1.0, {
    aus: 1.4,
    seiten: true,
    halten: 0.5,
    texte: ["Fußsohle Richtung Decke drücken", "Knie zurück unter die Hüfte"],
  }),
  rueckenstrecken_bank: wdh(
    "seite",
    H({ ...B("huefte", [80, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...ARME_VERSCHRAENKT, hals: [-10, 0, 0] }, [170, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    H({ ...B("huefte", [-6, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...ARME_VERSCHRAENKT, hals: [-10, 0, 0] }, [86, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    1.4,
    { aus: 1.8, texte: ["Oberkörper bis in die Waagerechte heben", "Langsam absenken"], hilfsmittel: [{ art: "bank", unter: "fuss_l", hoehe: 0.45, versatz: [-0.1, 0.1] }] },
  ),
  reverse_hyper_bank: wdh(
    "seite",
    H({ ...B("huefte", [50, 6, 0]), ...B("knie", [40]), ...B("fuss", [-30, 0]), ...B("schulter", [150, 20, 0]), ...B("ellbogen", [20, 0]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.6, 0], boden: false }),
    H({ ...B("huefte", [-4, 6, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), ...B("schulter", [150, 20, 0]), ...B("ellbogen", [20, 0]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.6, 0], boden: false }),
    1.2,
    { aus: 1.8, texte: ["Gestreckte Beine nach hinten oben heben", "Langsam absenken"], hilfsmittel: [{ art: "bank", unter: "bws", hoehe: 0.45, versatz: [0, 0.15] }] },
  ),
  // Reha im Stand am Stuhl
  reha_gesaess_anspannen: halte("seite", mit(STAND, { g: B("huefte", [0, 6, 0]) }), mit(STAND, { g: { ...B("huefte", [-3, 6, 4]) } }), { ein: 1, aus: 1.5, hinweis: "Beide Gesäßhälften fest anspannen und halten." }),
  reha_bein_hinten_stand: wdh("seite", mit(STAND, { g: HALT_STUHL }), mit(STAND, { g: { ...HALT_STUHL, huefte_r: [-22, 6, 0], knie_r: [4] } }), 1.6, {
    aus: 1.8,
    seiten: true,
    texte: ["Gestrecktes Bein langsam nach hinten", "Zurück"],
    hilfsmittel: [STUHL_VORN],
  }),
  reha_bein_hinten_band: wdh("seite", mit(STAND, { g: HALT_STUHL }), mit(STAND, { g: { ...HALT_STUHL, huefte_r: [-22, 6, 0], knie_r: [4] } }), 1.6, {
    aus: 1.8,
    seiten: true,
    texte: ["Bein gegen das Band nach hinten", "Langsam zurück"],
    hilfsmittel: [STUHL_VORN, { art: "bandanker", von: "fuss_r", anker: [-0.1, 0.1, 0.45] }],
  }),

  // ------------------------------------------------------------ Beinbeuger
  beinbeuger_kh: wdh(
    "seite",
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [10]), ...B("fuss", [20, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [80, 90]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [110]), ...B("fuss", [20, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [80, 90]), hals: [-20, 0, 0] }, [90, 0, 0], { pos: [0, 0.56, 0], boden: false }),
    1.2,
    { aus: 2.0, texte: ["Fersen mit der Hantel zum Gesäß", "Langsam strecken"], hilfsmittel: [{ art: "bank", unter: "becken", hoehe: 0.45, versatz: [0, -0.15] }, { art: "hantel", an: "fuesse" }] },
  ),
  beinbeuger_band: wdh(
    "seite",
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [6]), ...B("fuss", [0, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [110, 90]), hals: [-5, 0, 0] }, [90, 0, 0]),
    H({ ...B("huefte", [0, 4, 0]), ...B("knie", [110]), ...B("fuss", [0, 0]), ...B("schulter", [150, 30, 0]), ...B("ellbogen", [110, 90]), hals: [-5, 0, 0] }, [90, 0, 0]),
    1.2,
    { aus: 1.8, texte: ["Fersen gegen das Band zum Gesäß", "Langsam strecken"], hilfsmittel: [{ art: "bandanker", von: "fuesse", anker: [0, 0.1, -1.6] }] },
  ),
  beinbeuger_stehend_einbeinig: wdh("seite", standBein({ huefte_r: [2, 6, 0], knie_r: [6], fuss_r: [0, 0] }), standBein({ huefte_r: [2, 6, 0], knie_r: [100], fuss_r: [0, 0] }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Ferse zum Gesäß ziehen, Knie bleibt hinten", "Langsam strecken"],
    hilfsmittel: kabel("fuss_r", [-0.1, 0.12, 0.6]),
  }),
  nordic: wdh(
    "seite",
    H({ ...B("huefte", [0, 6, 0]), ...B("knie", [90]), ...B("fuss", [-80, 0]), ...B("schulter", [30, 20, 0]), ...B("ellbogen", [100, 90]) }),
    H({ ...B("huefte", [0, 6, 0]), ...B("knie", [20]), ...B("fuss", [-80, 0]), ...B("schulter", [80, 20, 0]), ...B("ellbogen", [80, 90]) }, [70, 0, 0]),
    3.0,
    { aus: 1.4, texte: ["Körper als Linie so langsam wie möglich nach vorn", "Mit den Händen abfangen, zurückdrücken"], hilfsmittel: [{ art: "kissen", unter: "knie_l" }, { art: "kissen", unter: "knie_r" }] },
  ),
  nordic_band: wdh(
    "seite",
    H({ ...B("huefte", [0, 6, 0]), ...B("knie", [90]), ...B("fuss", [-80, 0]), ...B("schulter", [30, 20, 0]), ...B("ellbogen", [100, 90]) }),
    H({ ...B("huefte", [0, 6, 0]), ...B("knie", [30]), ...B("fuss", [-80, 0]), ...B("schulter", [80, 20, 0]), ...B("ellbogen", [80, 90]) }, [60, 0, 0]),
    3.0,
    { aus: 1.6, texte: ["Langsam nach vorn, das Band unter der Brust hilft", "Zurück in den Kniestand"], hilfsmittel: [{ art: "kissen", unter: "knie_l" }, { art: "kissen", unter: "knie_r" }, { art: "bandanker", von: "bws", anker: [0, 1.9, -0.6] }] },
  ),
  beinbeuger_rutschen: wdh("seite", brueckeOben(), mit(brueckeOben(GESTRECKT), { dreh: [-108, 0, 0] }), 2.0, {
    aus: 1.4,
    texte: ["Becken oben, Fersen langsam nach vorn schieben", "Fersen zum Gesäß zurückziehen"],
    hilfsmittel: [{ art: "gleitscheibe", an: "ferse_l" }, { art: "gleitscheibe", an: "ferse_r" }],
  }),
  beinbeuger_rutschen_einbeinig: wdh("seite", brueckeOben(EINBEIN_OBEN), mit(brueckeOben({ ...GESTRECKT, huefte_r: [-24, 4, 0], knie_r: [0] }), { dreh: [-108, 0, 0] }), 2.0, {
    aus: 1.4,
    seiten: true,
    texte: ["Eine Ferse langsam nach vorn schieben, Becken oben", "Zurückziehen"],
    hilfsmittel: [{ art: "gleitscheibe", an: "ferse_l" }],
  }),
  beinbeuger_gymnastikball: wdh("seite", BALL_GESTRECKT, BALL_GEBEUGT, 1.2, {
    aus: 1.6,
    texte: ["Becken oben, Ball mit den Fersen heranrollen", "Beine wieder strecken"],
    hilfsmittel: [{ art: "gymnastikball", an: "fuesse" }],
  }),
  beinbeuger_gymnastikball_einbeinig: wdh("seite", mit(BALL_GESTRECKT, { g: { huefte_r: [-30, 4, 0], knie_r: [4] } }), mit(BALL_GEBEUGT, { g: { huefte_r: [-30, 4, 0], knie_r: [4] } }), 1.2, {
    aus: 1.6,
    seiten: true,
    texte: ["Eine Ferse rollt den Ball heran, Becken oben", "Strecken"],
    hilfsmittel: [{ art: "gymnastikball", an: "ferse_l" }],
  }),
  hamstring_bruecke_einbeinig: wdh(
    "seite",
    mit(RUECKENLAGE_AUF, { g: { ...ARME_BODEN, huefte_l: [40, 4, 0], knie_l: [35], fuss_l: [-10, 0], huefte_r: [80, 4, 0], knie_r: [10] } }),
    mit(RUECKENLAGE_AUF, { dreh: [-115, 0, 0], g: { ...ARME_BODEN_OBEN, huefte_l: [0, 4, 0], knie_l: [20], fuss_l: [-10, 0], huefte_r: [62, 4, 0], knie_r: [10], bws: [14, 0, 0] } }),
    1.2,
    { aus: 1.6, halten: 1, seiten: true, texte: ["Ferse in die Bank drücken, Becken heben", "Langsam ablegen"], hilfsmittel: [{ art: "box", unter: "ferse_l", hoehe: 0.45 }] },
  ),
  bridge_walkout: folge(
    "seite",
    [
      [brueckeOben(), 1.0, "Becken oben"],
      [mit(brueckeOben({ ...B("huefte", [-12, 4, 0]), ...B("knie", [50]), ...B("fuss", [-20, 0]) }), { dreh: [-110, 0, 0] }), 1.2, "Mit kleinen Fersenschritten nach vorn"],
      [mit(brueckeOben({ ...GESTRECKT, ...B("knie", [16]) }), { dreh: [-108, 0, 0] }), 1.2, "Fast gestreckt, Becken bleibt oben"],
      [mit(brueckeOben({ ...B("huefte", [-12, 4, 0]), ...B("knie", [50]), ...B("fuss", [-20, 0]) }), { dreh: [-110, 0, 0] }), 1.0, "Zurücklaufen"],
      [brueckeOben(), 1.0],
    ],
  ),

  // ------------------------------------------------------------ Adduktoren
  adduktoren_band: wdh("vorn", standBein({ huefte_r: [0, 24, 0], knie_r: [4], fuss_r: [0, 0] }, 0), standBein({ huefte_r: [6, -14, 0], knie_r: [4], fuss_r: [0, 0] }, 0), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Bein vor dem Standbein vorbei nach innen ziehen", "Kontrolliert zurück"],
    hilfsmittel: [{ art: "bandanker", von: "fuss_r", anker: [-0.9, 0.12, 0] }],
  }),
  adduktoren_kabel: wdh("vorn", standBein({ huefte_r: [0, 24, 0], knie_r: [4], fuss_r: [0, 0] }, 0), standBein({ huefte_r: [6, -14, 0], knie_r: [4], fuss_r: [0, 0] }, 0), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Bein am Standbein vorbei nach innen ziehen", "Kontrolliert zurück"],
    hilfsmittel: kabel("fuss_r", [-0.8, 0.12, 0]),
  }),
  adduktion_seitlage: wdh("vorn", mit(SEITLAGE_GESTRECKT, { g: { huefte_r: [70, 0, 0], knie_r: [90] } }), mit(SEITLAGE_GESTRECKT, { g: { huefte_r: [70, 0, 0], knie_r: [90], huefte_l: [6, -20, 0] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Unteres Bein gestreckt anheben", "Langsam ablegen"],
  }),
  adduktoren_ball_druecken: halte("schraeg", brueckeUnten(B("huefte", [60, 14, 0])), brueckeUnten(B("huefte", [60, 12, 0])), {
    ein: 1,
    aus: 1.5,
    hinweis: "Ball zwischen den Knien fest zusammendrücken.",
    hilfsmittel: [{ art: "medizinball", an: "knie_mitte" }],
  }),
  copenhagen: halte("vorn", seitstuetz({ huefte_l: [0, 24, 0] }, 90), seitstuetz({ huefte_l: [0, -6, 0] }), {
    ein: 1.5,
    aus: 2,
    seiten: true,
    hinweis: "Oberer Fuß auf der Bank, Unterarm am Boden, Körper als Linie, unteres Bein zur Bank heben.",
    hilfsmittel: [{ art: "bank", unter: "fuss_r", hoehe: 0.45, quer: true }],
  }),
  copenhagen_kurz: halte("vorn", seitstuetz({ huefte_l: [0, 24, 0], knie_r: [90] }, 90), seitstuetz({ huefte_l: [0, -6, 0], knie_r: [90] }), {
    ein: 1.5,
    aus: 2,
    seiten: true,
    hinweis: "Oberes Knie auf der Bank, Unterarm am Boden, Becken hoch, Körper als Linie.",
    hilfsmittel: [{ art: "bank", unter: "knie_r", hoehe: 0.45, quer: true }],
  }),
  copenhagen_dynamisch: wdh("vorn", seitstuetz({ huefte_l: [0, 24, 0] }, 84), seitstuetz({ huefte_l: [0, -6, 0] }), 1.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Becken heben, unteres Bein zur Bank", "Becken langsam absenken"],
    hilfsmittel: [{ art: "bank", unter: "fuss_r", hoehe: 0.45, quer: true }],
  }),

  // ------------------------------------------------------------ Abduktoren
  hip_abduction_band: wdh("vorn", H({ ...B("huefte", [90, 6, 0]), ...B("knie", [90]), ...B("schulter", [20, 10, 0]), ...B("ellbogen", [60, 60]) }, undefined, { pos: [0, 0.5, 0], boden: false }), H({ ...B("huefte", [90, 30, 0]), ...B("knie", [90]), ...B("schulter", [20, 10, 0]), ...B("ellbogen", [60, 60]) }, undefined, { pos: [0, 0.5, 0], boden: false }), 0.8, {
    aus: 1.4,
    halten: 0.5,
    texte: ["Knie gegen das Band nach außen drücken", "Langsam zurück"],
    hilfsmittel: [STUHL, { art: "band", von: "knie_l", bis: "knie_r" }],
  }),
  abduktion_seitlage: wdh("vorn", SEITLAGE_GESTRECKT, mit(SEITLAGE_GESTRECKT, { g: { huefte_r: [2, 34, 0] } }), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Oberes Bein gestreckt leicht nach hinten oben", "Langsam senken"],
  }),
  clamshell: wdh("vorn", SEITLAGE_GEBEUGT, mit(SEITLAGE_GEBEUGT, { g: { huefte_r: [45, 36, -30] } }), 0.9, {
    aus: 1.4,
    seiten: true,
    halten: 0.5,
    texte: ["Oberes Knie öffnen, Füße bleiben zusammen", "Langsam schließen"],
    hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }],
  }),
  monster_walk: folge(
    "schraeg",
    [
      [H({ ...B("huefte", [30, 14, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.6, "Leichte Kniebeuge, Band gespannt"],
      [H({ huefte_l: [44, 22, 0], knie_l: [36], fuss_l: [10, 0], huefte_r: [20, 12, 0], knie_r: [28], fuss_r: [10, 0], ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.8, "Schritt diagonal nach vorn außen"],
      [H({ ...B("huefte", [30, 14, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.6],
      [H({ huefte_r: [44, 22, 0], knie_r: [36], fuss_r: [10, 0], huefte_l: [20, 12, 0], knie_l: [28], fuss_l: [10, 0], ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.8, "Anderes Bein"],
    ],
    { hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] },
  ),
  seitwaerts_band: folge(
    "vorn",
    [
      [H({ ...B("huefte", [30, 12, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.6, "Leichte Kniebeuge"],
      [H({ huefte_l: [30, 26, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [30, 10, 0], knie_r: [30], fuss_r: [10, 0], ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.8, "Schritt zur Seite"],
      [H({ ...B("huefte", [30, 12, 0]), ...B("knie", [30]), ...B("fuss", [10, 0]), ...ARME_VERSCHRAENKT }, [20, 0, 0]), 0.8, "Anderes Bein nachziehen, Band bleibt gespannt"],
    ],
    { hilfsmittel: [{ art: "band", von: "knie_l", bis: "knie_r" }] },
  ),
  abduktion_kabel: wdh("vorn", standBein({ huefte_r: [0, 4, 0], knie_r: [4], fuss_r: [0, 0] }, 0), standBein({ huefte_r: [0, 36, 0], knie_r: [4], fuss_r: [0, 0] }, 0), 1.0, {
    aus: 1.6,
    seiten: true,
    texte: ["Bein gestreckt zur Seite führen", "Kontrolliert zurück"],
    hilfsmittel: kabel("fuss_r", [0.8, 0.12, 0]),
  }),
  seitstuetz_abduktion: wdh("vorn", seitstuetz({}), seitstuetz({ huefte_r: [0, 38, 0] }), 1.0, { aus: 1.6, seiten: true, texte: ["Im Seitstütz das obere Bein heben", "Langsam senken"] }),
  fire_hydrant: wdh("vorn", VIER, mit(VIER, { g: { huefte_r: [90, 60, 0], knie_r: [90] } }), 1.0, {
    aus: 1.4,
    seiten: true,
    halten: 0.5,
    texte: ["Gebeugtes Bein seitlich anheben", "Zurück"],
  }),
  hip_hike: wdh(
    "vorn",
    H({ huefte_l: [0, 4, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [0, -4, 0], knie_r: [2], fuss_r: [0, 0], ...B("schulter", [4, 10, 0]) }, [0, 0, -8], { pos: [0, 1.38, 0], boden: false }),
    H({ huefte_l: [0, -4, 0], knie_l: [2], fuss_l: [0, 0], huefte_r: [0, 4, 0], knie_r: [2], fuss_r: [0, 0], ...B("schulter", [4, 10, 0]) }, [0, 0, 6], { pos: [0, 1.4, 0], boden: false }),
    1.0,
    { aus: 1.4, seiten: true, texte: ["Hüfte der freien Seite anheben", "Freie Seite langsam absenken"], hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.45 }] },
  ),
  abduktion_wand_isometrisch: halte("vorn", mit(STAND, { g: B("huefte", [0, 4, 0]) }), H({ huefte_l: [0, 4, 0], knie_l: [2], huefte_r: [70, 4, 0], knie_r: [90], ...B("schulter", [4, 10, 0]) }), {
    ein: 1,
    aus: 1.5,
    seiten: true,
    hinweis: "Angehobenes Knie seitlich gegen die Wand drücken.",
    hilfsmittel: [{ art: "wand", an: "knie_r", richtung: "rechts" }],
  }),
  reha_abspreizen_stand: wdh("vorn", mit(STAND, { g: HALT_STUHL }), mit(STAND, { g: { ...HALT_STUHL, huefte_r: [0, 30, 0], knie_r: [4] } }), 1.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Bein langsam zur Seite heben", "Zurück"],
    hilfsmittel: [STUHL_VORN],
  }),
  reha_abspreizen_band: wdh("vorn", mit(STAND, { g: HALT_STUHL }), mit(STAND, { g: { ...HALT_STUHL, huefte_r: [0, 26, 0], knie_r: [4] } }), 1.4, {
    aus: 1.8,
    seiten: true,
    texte: ["Bein gegen das Band zur Seite", "Zurück"],
    hilfsmittel: [STUHL_VORN, { art: "band", von: "fuss_l", bis: "fuss_r" }],
  }),
  reha_seitschritte_band: folge(
    "vorn",
    [
      [H({ ...B("huefte", [14, 8, 0]), ...B("knie", [14]), ...B("fuss", [0, 0]), ...B("schulter", [4, 10, 0]) }, [6, 0, 0]), 0.6, "Leicht gebeugt stehen"],
      [H({ huefte_l: [14, 22, 0], knie_l: [14], fuss_l: [0, 0], huefte_r: [14, 6, 0], knie_r: [14], fuss_r: [0, 0], ...B("schulter", [4, 10, 0]) }, [6, 0, 0]), 1.0, "Kleiner Schritt zur Seite"],
      [H({ ...B("huefte", [14, 8, 0]), ...B("knie", [14]), ...B("fuss", [0, 0]), ...B("schulter", [4, 10, 0]) }, [6, 0, 0]), 1.0, "Nachstellen"],
    ],
    { hilfsmittel: [{ art: "band", von: "fuss_l", bis: "fuss_r" }] },
  ),

  // ------------------------------------------------------------ Wade
  wadenheben: wade({ schulter_l: [10, 10, 0], ellbogen_l: [10, 90], ...B("hand", [0, 0]), schulter_r: [2, 8, 0], ellbogen_r: [6, HAMMER], ...FAUST }, [{ art: "hantel", an: "hand_r" }], true),
  wadenheben_multipresse: wade(ARME_RUECKEN, [...STANGE_RUECKEN, RACK]),
  wadenheben_stepper: wade(ARME_SEITE, []),
  wadenheben_einbeinig_kg: wade({ schulter_l: [10, 10, 0], ellbogen_l: [10, 90], schulter_r: [4, 10, 0], ellbogen_r: [10, 0] }, [], true),
  wadenheben_exzentrisch: wade(ARME_SEITE, [], false, { ein: 1.0, aus: 4.0, texte: ["Mit beiden Beinen auf die Zehen", "Auf einem Bein langsam absenken (3 bis 5 s)"] }),
  wadenheben_sitzend_kh: wdh(
    "seite",
    H({ ...B("huefte", [90, 6, 0]), ...B("knie", [90]), ...B("fuss", [20, 0]), ...B("zehen", [-10]), ...B("schulter", [58, 12, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST }, undefined, { pos: [0, 0.5, 0], boden: false }),
    H({ ...B("huefte", [90, 6, 0]), ...B("knie", [90]), ...B("fuss", [-30, 0]), ...B("zehen", [-30]), ...B("schulter", [58, 12, 0]), ...B("ellbogen", [6, HAMMER]), ...FAUST }, undefined, { pos: [0, 0.56, 0], boden: false }),
    1.0,
    { aus: 2.0, halten: 1, texte: ["Fersen hoch, Hanteln liegen auf den Knien", "Fersen langsam senken"], hilfsmittel: [{ art: "bank", unter: "gesaess", hoehe: 0.45, quer: true }, ...KH] },
  ),
  wadenheben_isometrisch_gebeugt: halte("seite", mit(STAND, { g: { huefte_r: [10, 8, 0], knie_r: [70] } }), H({ huefte_l: [30, 8, 0], knie_l: [40], fuss_l: [-25, 0], zehen_l: [-30], huefte_r: [10, 8, 0], knie_r: [70], fuss_r: [-20, 0], schulter_l: [70, 10, 0], ellbogen_l: [10, 90] }, [4, 0, 0]), {
    ein: 1.5,
    aus: 2,
    seiten: true,
    hinweis: "Knie gebeugt, auf dem Fußballen halten, Fingerspitzen an der Wand.",
    hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }],
  }),
  tibialis_heben: wdh(
    "seite",
    H({ ...B("huefte", [24, 8, 0]), ...B("knie", [4]), ...B("fuss", [-20, 0]), ...B("schulter", [4, 10, 0]) }, [-6, 0, 0]),
    H({ ...B("huefte", [24, 8, 0]), ...B("knie", [4]), ...B("fuss", [14, 0]), ...B("schulter", [4, 10, 0]) }, [-6, 0, 0]),
    0.8,
    { aus: 1.4, texte: ["Fußspitzen zum Schienbein ziehen", "Langsam absenken"], hilfsmittel: [WAND_HINTEN] },
  ),
  tibialis_heben_gewicht: wdh(
    "seite",
    H({ ...B("huefte", [90, 6, 0]), ...B("knie", [40]), ...B("fuss", [-40, 0]), ...B("schulter", [10, 30, 0]), ...B("ellbogen", [10, 0]) }, undefined, { pos: [0, 0.5, 0], boden: false }),
    H({ ...B("huefte", [90, 6, 0]), ...B("knie", [40]), ...B("fuss", [20, 0]), ...B("schulter", [10, 30, 0]), ...B("ellbogen", [10, 0]) }, undefined, { pos: [0, 0.5, 0], boden: false }),
    0.8,
    { aus: 1.6, texte: ["Fußspitzen mit dem Gewicht anheben", "Langsam senken"], hilfsmittel: [{ art: "bank", unter: "gesaess", hoehe: 0.45, quer: true }, { art: "hantel", an: "fuesse" }] },
  ),
  reha_fersenheben_stuhl: wdh("seite", mit(STAND, { g: HALT_STUHL }), H({ ...B("huefte", [0, 6, 0]), ...B("fuss", [-30, 0]), ...B("zehen", [-30]), ...HALT_STUHL }), 1.0, {
    aus: 2.0,
    halten: 1,
    texte: ["Beide Fersen anheben", "Langsam senken"],
    hilfsmittel: [STUHL_VORN],
  }),
  reha_fersenheben_einbeinig: wdh("seite", mit(STAND, { g: { ...HALT_STUHL, huefte_r: [10, 6, 0], knie_r: [70] } }), H({ huefte_l: [0, 6, 0], fuss_l: [-30, 0], zehen_l: [-30], huefte_r: [10, 6, 0], knie_r: [70], ...HALT_STUHL }), 1.0, {
    aus: 2.0,
    halten: 1,
    seiten: true,
    texte: ["Auf einem Bein die Ferse heben", "Langsam senken"],
    hilfsmittel: [STUHL_VORN],
  }),
}
