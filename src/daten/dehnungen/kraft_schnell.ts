// Schnellkraft mit der Dehnfigur: Sprünge (beid- und einbeinig, auf die Box, Tiefsprung, Weitsprung), Umsetzen und
// Reißen, Medizinballwürfe (10 kg) und Golf-Speed-Schwünge mit Schläger oder Stab.
//
// Sprünge brauchen die Höhe des Beckens in jeder Phase: Am Boden ergibt sie sich aus den Beinwinkeln
// (Oberschenkel 0,43 m, Unterschenkel 0,43 m, Knöchel 0,08 m), in der Luft kommt die Flughöhe dazu.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { ARME_VERSCHRAENKT, B, H, KNIESTAND, HALBKNIESTAND, RUECKENLAGE_AUF, folge, mit } from "./basis"
import { FAUST, HAMMER, KH, KH_R, OBERGRIFF } from "./kraftbasis"
import { ARME_FRONT, ARME_RUECKEN, ARME_SEITE, STANGE_RUECKEN } from "./kraft_beine"
import { beuge, haengen } from "./kraft_huefte"
import { DURCHSCHWUNG, GOLF_ARME, RUECKSCHWUNG, TREFFMOMENT, dreh, golf } from "./kraft_rumpf"

// ---------------------------------------------------------------- Höhe des Beckens aus den Beinen
const OBER = 0.43
const UNTER = 0.43
const KNOECHEL = 0.08
const rad = (g: number) => (g * Math.PI) / 180
/** Beckenhöhe, wenn der Fuß (Bein mit Hüftbeugung h, Kniebeugung k) bei Kippung kipp flach am Boden steht */
const beinHoehe = (h: number, k: number, kipp: number): number => OBER * Math.cos(rad(h - kipp)) + UNTER * Math.cos(rad(h - kipp - k)) + KNOECHEL

/**
 * Sprunghaltung: beide Beine gleich (Hüfte h, Knie k), Oberkörper kipp; luft = Flughöhe in Metern.
 * Füße flach am Boden, in der Luft gestreckt.
 */
const sprung = (h: number, k: number, kipp: number, arme: Winkel, luft = 0, z = 0, w: Winkel = {}): Haltung =>
  H({ ...B("huefte", [h, 8, 0]), ...B("knie", [k]), ...B("fuss", [luft > 0 ? -30 : k - h + kipp, 0]), ...arme, hals: [-kipp / 2, 0, 0], ...w }, [kipp, 0, 0], {
    pos: [0, beinHoehe(h, k, kipp) + luft, z],
    boden: false,
  })
const ARME_HINTEN: Winkel = { ...B("schulter", [-40, 10, 0]), ...B("ellbogen", [20, 0]) }
const ARME_OBEN: Winkel = { ...B("schulter", [160, 12, 0]), ...B("ellbogen", [10, 0]) }
const ARME_VORN: Winkel = { ...B("schulter", [70, 10, 0]), ...B("ellbogen", [30, 0]) }
const STAND = (arme: Winkel = {}, z = 0) => sprung(2, 2, 0, arme, 0, z)
const VIERTEL = (arme: Winkel, z = 0) => sprung(50, 60, 24, arme, 0, z)
const TIEF = (arme: Winkel, z = 0) => sprung(110, 110, 40, arme, 0, z)
const LUFT = (arme: Winkel, hoch = 0.35, z = 0) => sprung(4, 6, 0, arme, hoch, z)

/** Strecksprung: ausholen, abspringen, landen */
const strecksprung = (arme: { unten: Winkel; oben: Winkel }, hilfsmittel: Hilfsmittel[] = [], extra: Partial<Dehnung> = {}): Dehnung =>
  folge(
    "seite",
    [
      [STAND(arme.oben), 0.5, "Aufrecht stehen"],
      [VIERTEL(arme.unten), 0.35, "Schnell ausholen"],
      [LUFT(arme.oben), 0.3, "Explosiv nach oben springen"],
      [VIERTEL(arme.unten), 0.3, "Weich landen, Knie über den Zehen"],
      [STAND(arme.oben), 0.6],
    ],
    { hilfsmittel, ...extra },
  )
const SCHWUNG = { unten: ARME_HINTEN, oben: ARME_OBEN }

// ---------------------------------------------------------------- Einbeinig (links springt)
const einbein = (h: number, k: number, kipp: number, arme: Winkel, luft = 0, x = 0, z = 0): Haltung =>
  H({ huefte_l: [h, 6, 0], knie_l: [k], fuss_l: [luft > 0 ? -30 : k - h + kipp, 0], huefte_r: [40, 6, 0], knie_r: [80], fuss_r: [-20, 0], ...arme, hals: [-kipp / 2, 0, 0] }, [kipp, 0, 0], {
    pos: [x, beinHoehe(h, k, kipp) + luft, z],
    boden: false,
  })
const einbeinSprung = (x: number, z: number, text: string): Dehnung =>
  folge(
    x ? "vorn" : "seite",
    [
      [einbein(40, 50, 20, ARME_HINTEN), 0.5, "Auf einem Bein ausholen"],
      [einbein(6, 8, 0, ARME_VORN, 0.25, x / 2, z / 2), 0.35, text],
      [einbein(50, 60, 24, ARME_VORN, 0, x, z), 0.35, "Auf demselben Bein stabil landen"],
      [einbein(50, 60, 24, ARME_VORN, 0, x, z), 1.0, "Halten", true],
    ],
    { seiten: true },
  )

// ---------------------------------------------------------------- Box (50 cm)
const BOX: Hilfsmittel = { art: "box", unter: "fuss_l", hoehe: 0.5, versatz: [-0.1, 0] }
const AUF_BOX = (arme: Winkel) => hoch(sprung(50, 60, 24, arme), 0.5, 0.55)
/** Haltung mit flachen Füßen um hoehe angehoben (auf der Box) und nach z verschoben */
function hoch(h: Haltung, hoehe: number, z: number): Haltung {
  return { ...h, pos: [0, (h.pos ? h.pos[1] : 0.94) + hoehe, z] }
}

// ---------------------------------------------------------------- Medizinball
const BALL: Hilfsmittel[] = [{ art: "medizinball", an: "haende" }]
const BRUST: Winkel = { ...B("schulter", [30, -4, 0]), ...B("ellbogen", [120, HAMMER]) }
const STOSS: Winkel = { ...B("schulter", [88, -4, 0]), ...B("ellbogen", [6, HAMMER]) }
const KOPF: Winkel = { ...B("schulter", [170, -4, 0]), ...B("ellbogen", [40, HAMMER]) }
const KOPF_GESTRECKT: Winkel = { ...B("schulter", [176, -4, 0]), ...B("ellbogen", [6, HAMMER]) }
const BALL_UNTEN: Winkel = { ...B("schulter", [40, -4, 0]), ...B("ellbogen", [6, HAMMER]) }
const BREIT = (arme: Winkel, kipp = 6, w: Winkel = {}): Haltung => H({ ...B("huefte", [14, 12, -6]), ...B("knie", [18]), ...B("fuss", [6, 0]), ...arme, ...w }, [kipp, 0, 0])
/** Rotationswurf seitlich zur Wand (Wand links): ausholen nach rechts, Wurf nach links */
const AUSHOLEN_R: Winkel = { ...B("schulter", [50, -6, 0]), ...B("ellbogen", [40, HAMMER]), ...dreh(-60), huefte_l: [30, 12, 15], huefte_r: [30, 12, -10] }
const WURF_L: Winkel = { ...B("schulter", [80, -6, 0]), ...B("ellbogen", [10, HAMMER]), ...dreh(60), huefte_l: [20, 12, -10], huefte_r: [20, 12, 15] }
const SCOOP_R: Winkel = { ...B("schulter", [20, -6, 0]), ...B("ellbogen", [10, HAMMER]), ...dreh(-50), huefte_l: [50, 12, 15], huefte_r: [60, 12, -10], knie_l: [40], knie_r: [50] }
const SCOOP_WURF: Winkel = { ...B("schulter", [120, -6, 0]), ...B("ellbogen", [10, HAMMER]), ...dreh(50), huefte_l: [10, 12, -10], huefte_r: [10, 12, 15] }
const rotWurf = (basis: (w: Winkel) => Haltung, aus: Winkel, wurf: Winkel, text: string, pause = false): Dehnung =>
  folge(
    "vorn",
    [
      [basis(BRUST), 0.5, "Ball vor der Brust, seitlich zur Wand"],
      [basis(aus), pause ? 0.8 : 0.5, "Ausholen zur hinteren Hüfte"],
      ...(pause ? ([[basis(aus), 2.5, "Still halten", true]] as [Haltung, number, string, boolean][]) : []),
      [basis(wurf), 0.35, text],
      [basis(BRUST), 0.8],
    ],
    { seiten: true, hilfsmittel: BALL },
  )
const stand = (w: Winkel) => BREIT(w)
const schmal = (w: Winkel) => H({ huefte_l: [30, 6, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [-6, 6, 0], knie_r: [16], fuss_r: [-16, 0], ...w }, [10, 0, 0])
const kniend = (w: Winkel) => mit(KNIESTAND, { g: w })
const halbknie = (w: Winkel) => mit(HALBKNIESTAND, { g: w })
const SITZ = (w: Winkel) => H({ ...B("huefte", [90, 10, 0]), ...B("knie", [10]), ...B("fuss", [-10, 0]), ...w }, [-6, 0, 0])

// ---------------------------------------------------------------- Golf-Schwung mit Schläger oder Stab
const STAB: Hilfsmittel[] = [{ art: "stab", von: "hand_l", bis: "griff_l" }]
const schwung = (basis: (w: Winkel) => Haltung, hilfsmittel: Hilfsmittel[], text: string, gegen = false): Dehnung =>
  folge(
    "vorn",
    [
      [basis(GOLF_ARME), 0.6, "Ansprechhaltung"],
      [basis(gegen ? DURCHSCHWUNG : RUECKSCHWUNG), 0.7, "Ausholen"],
      [basis(TREFFMOMENT), 0.25, text],
      [basis(gegen ? RUECKSCHWUNG : DURCHSCHWUNG), 0.35, "Durchschwingen bis ins Finish"],
      [basis(GOLF_ARME), 0.8],
    ],
    { hilfsmittel },
  )

// ---------------------------------------------------------------- Umsetzen und Reißen
const LH: Hilfsmittel[] = [{ art: "langhantel", von: "hand_l", bis: "hand_r" }]
const ZUG: Haltung = H({ ...B("huefte", [-4, 12, 0]), ...B("knie", [4]), ...B("fuss", [-40, 0]), ...B("zehen", [-30]), ...B("schulter", [10, 10, 0]), ...B("ellbogen", [20, OBERGRIFF]), ...B("schulterblatt", [20, 0]), ...FAUST }, [-4, 0, 0])
const FANG: Haltung = H({ ...B("huefte", [60, 14, -6]), ...B("knie", [70]), ...B("fuss", [26, 0]), ...ARME_FRONT, ...FAUST }, [14, 0, 0])
const FANG_TIEF: Haltung = H({ ...B("huefte", [130, 14, -6]), ...B("knie", [130]), ...B("fuss", [34, 0]), ...ARME_FRONT, ...FAUST }, [24, 0, 0])
const HANG: Haltung = beuge(40, 30, 10, haengen(40))
const VOM_BODEN: Haltung = beuge(50, 70, 22, haengen(50))
const STEHEN_FRONT: Haltung = H({ ...B("huefte", [2, 10, -4]), ...B("knie", [2]), ...ARME_FRONT, ...FAUST })

export const KRAFT_SCHNELL: Record<string, Dehnung> = {
  // ------------------------------------------------------------ Beidbeinig
  strecksprung: strecksprung(SCHWUNG),
  squat_jump_pause: folge("seite", [[STAND(ARME_VERSCHRAENKT), 0.5, "Aufrecht"], [TIEF(ARME_VERSCHRAENKT), 0.8, "In die Hocke"], [TIEF(ARME_VERSCHRAENKT), 2.0, "Halten, kein Ausholen", true], [LUFT(ARME_VERSCHRAENKT), 0.3, "Explosiv nach oben"], [VIERTEL(ARME_VERSCHRAENKT), 0.4, "Weich landen"]]),
  snap_down: folge("seite", [[sprung(2, 2, 0, ARME_OBEN, 0, 0, { ...B("fuss", [-40, 0]), ...B("zehen", [-30]) }), 0.6, "Auf den Zehen, Arme hoch"], [VIERTEL(ARME_HINTEN), 0.25, "Blitzschnell in die Landeposition"], [VIERTEL(ARME_HINTEN), 1.2, "Stabil halten", true]]),
  hocksprung: folge("seite", [[STAND(ARME_OBEN), 0.5, "Aufrecht"], [VIERTEL(ARME_HINTEN), 0.35, "Ausholen"], [sprung(110, 120, 10, ARME_VORN, 0.5), 0.35, "Knie in der Luft zur Brust"], [VIERTEL(ARME_VORN), 0.35, "Weich landen"], [STAND(ARME_OBEN), 0.6]]),
  pogo_spruenge: folge("seite", [[sprung(4, 8, 0, ARME_VERSCHRAENKT, 0, 0, { ...B("fuss", [-20, 0]) }), 0.25, "Federn aus den Fußgelenken"], [sprung(2, 4, 0, ARME_VERSCHRAENKT, 0.12), 0.25, "Kurzer Bodenkontakt, Knie fast gestreckt"]]),
  pogo_einbeinig: folge("seite", [[einbein(4, 8, 0, ARME_VERSCHRAENKT), 0.3, "Auf einem Bein federn"], [einbein(2, 4, 0, ARME_VERSCHRAENKT, 0.1), 0.25, "Aus dem Fußgelenk"]], { seiten: true }),
  linienspruenge_seitlich: folge("vorn", [[sprung(30, 40, 14, ARME_VORN, 0, 0), 0.25, "Flach seitlich über die Linie"], [sprung(20, 30, 10, ARME_VORN, 0.1, 0), 0.2], [mit(sprung(30, 40, 14, ARME_VORN), { pos: [0.3, beinHoehe(30, 40, 14), 0] }), 0.25, "Und zurück"], [sprung(20, 30, 10, ARME_VORN, 0.1, 0), 0.2]]),
  weitsprung: folge("seite", [[STAND(ARME_OBEN), 0.5, "Aufrecht"], [VIERTEL(ARME_HINTEN), 0.35, "Ausholen, Arme nach hinten"], [sprung(40, 60, 20, ARME_VORN, 0.35, 0.8), 0.45, "Weit nach vorn springen"], [VIERTEL(ARME_VORN, 1.6), 0.35, "Weich landen"], [STAND(ARME_VORN, 1.6), 0.6]]),
  weitsprung_serie: folge("seite", [[VIERTEL(ARME_HINTEN), 0.35, "Ausholen"], [sprung(40, 60, 20, ARME_VORN, 0.3, 0.7), 0.4, "Weit springen"], [VIERTEL(ARME_HINTEN, 1.4), 0.3, "Landen und sofort wieder abspringen"]]),
  split_jump: folge("seite", [[H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [10, 0], huefte_r: [-14, 6, 0], knie_r: [70], fuss_r: [-30, 0], zehen_r: [50], ...ARME_HINTEN }, [6, 0, 0]), 0.5, "Ausfallschritt"], [H({ huefte_l: [30, 6, 0], knie_l: [20], fuss_l: [-20, 0], huefte_r: [-20, 6, 0], knie_r: [30], fuss_r: [-30, 0], ...ARME_OBEN }, [0, 0, 0], { pos: [0, 1.15, 0], boden: false }), 0.35, "Senkrecht hoch, Beinstellung bleibt"], [H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [10, 0], huefte_r: [-14, 6, 0], knie_r: [70], fuss_r: [-30, 0], zehen_r: [50], ...ARME_HINTEN }, [6, 0, 0]), 0.4, "Weich landen"]], { seiten: true }),
  wechselsprung_ausfallschritt: folge("seite", [[H({ huefte_l: [60, 6, 0], knie_l: [70], fuss_l: [10, 0], huefte_r: [-14, 6, 0], knie_r: [70], fuss_r: [-30, 0], zehen_r: [50], ...ARME_VORN }, [6, 0, 0]), 0.5, "Ausfallschritt"], [H({ ...B("huefte", [10, 6, 0]), ...B("knie", [30]), ...B("fuss", [-30, 0]), ...ARME_OBEN }, [0, 0, 0], { pos: [0, 1.15, 0], boden: false }), 0.3, "Hochspringen, Beine wechseln"], [H({ huefte_r: [60, 6, 0], knie_r: [70], fuss_r: [10, 0], huefte_l: [-14, 6, 0], knie_l: [70], fuss_l: [-30, 0], zehen_l: [50], ...ARME_VORN }, [6, 0, 0]), 0.4, "Im Ausfallschritt landen"]]),
  drehsprung_180: folge("schraeg", [[STAND(ARME_OBEN), 0.5, "Aufrecht"], [VIERTEL(ARME_HINTEN), 0.35, "Ausholen"], [mit(LUFT(ARME_VERSCHRAENKT), { dreh: [0, 90, 0] }), 0.25, "Hochspringen und halb drehen"], [mit(VIERTEL(ARME_VORN), { dreh: [24, 180, 0] }), 0.3, "Stabil landen"], [mit(STAND(ARME_VORN), { dreh: [0, 180, 0] }), 0.8]]),
  kh_sprungkniebeuge: strecksprung({ unten: ARME_SEITE, oben: ARME_SEITE }, KH),
  lh_sprungkniebeuge: strecksprung({ unten: ARME_RUECKEN, oben: ARME_RUECKEN }, STANGE_RUECKEN, { ansicht: "schraeg" }),
  // ------------------------------------------------------------ Box
  box_sprung: folge("seite", [[STAND(ARME_OBEN), 0.5, "Vor der Box"], [VIERTEL(ARME_HINTEN), 0.35, "Ausholen"], [sprung(70, 90, 10, ARME_VORN, 0.55, 0.3), 0.35, "Explosiv auf die Box"], [AUF_BOX(ARME_VORN), 0.35, "Weich und leise landen"], [AUF_BOX(ARME_VORN), 0.8, "Halten, dann herabsteigen", true]], { hilfsmittel: [BOX] }),
  box_sprung_sitzend: folge("seite", [[sprung(90, 90, 10, ARME_HINTEN, -0.02), 0.8, "Auf der Bank sitzen"], [sprung(70, 90, 10, ARME_VORN, 0.55, 0.3), 0.4, "Ohne Ausholen auf die Box"], [AUF_BOX(ARME_VORN), 0.4, "Landen"], [AUF_BOX(ARME_VORN), 0.8, "Halten", true]], { hilfsmittel: [BOX, { art: "bank", unter: "gesaess", hoehe: 0.45, quer: true }] }),
  box_sprung_seitlich: folge("vorn", [[STAND(ARME_HINTEN), 0.5, "Seitlich neben der Box"], [VIERTEL(ARME_HINTEN), 0.35, "Ausholen"], [mit(sprung(60, 80, 10, ARME_VORN), { pos: [0.3, beinHoehe(60, 80, 10) + 0.55, 0] }), 0.35, "Seitlich auf die Box"], [mit(VIERTEL(ARME_VORN), { pos: [0.6, beinHoehe(50, 60, 24) + 0.5, 0] }), 0.4, "Stabil landen"]], { seiten: true, hilfsmittel: [{ art: "box", unter: "becken", hoehe: 0.5, versatz: [0.6, 0] }] }),
  box_sprung_einbeinig: folge("seite", [[einbein(40, 50, 20, ARME_HINTEN), 0.5, "Auf einem Bein ausholen"], [einbein(50, 70, 10, ARME_VORN, 0.38, 0, 0.25), 0.35, "Auf die niedrige Box"], [einbein(50, 60, 24, ARME_VORN, 0.3, 0, 0.5), 0.35, "Auf demselben Bein landen"], [einbein(50, 60, 24, ARME_VORN, 0.3, 0, 0.5), 0.8, "Halten", true]], { seiten: true, hilfsmittel: [{ art: "box", unter: "fuss_l", hoehe: 0.3 }] }),
  niedersprung_landung: folge("seite", [[hoch(STAND(ARME_VORN), 0.4, -0.4), 0.6, "Auf der Box"], [sprung(10, 20, 0, ARME_VORN, 0.25, -0.05), 0.3, "Nach vorn fallen lassen"], [VIERTEL(ARME_VORN, 0.2), 0.3, "Sofort stabil landen"], [VIERTEL(ARME_VORN, 0.2), 1.0, "Halten", true]], {
    hilfsmittel: [{ art: "box", unter: "becken", hoehe: 0.4, versatz: [0, -0.6] }],
  }),
  drop_jump: folge("seite", [[hoch(STAND(ARME_VORN), 0.4, -0.4), 0.6, "Auf der Box"], [sprung(10, 20, 0, ARME_VORN, 0.25, -0.05), 0.3, "Fallen lassen"], [VIERTEL(ARME_HINTEN, 0.2), 0.15, "Kürzester Bodenkontakt"], [LUFT(ARME_OBEN, 0.4, 0.25), 0.35, "Sofort maximal hoch"], [VIERTEL(ARME_VORN, 0.3), 0.4, "Weich landen"]], {
    hilfsmittel: [{ art: "box", unter: "becken", hoehe: 0.4, versatz: [0, -0.6] }],
  }),
  // ------------------------------------------------------------ Einbeinig, seitlich
  einbeinsprung_vor: einbeinSprung(0, 0.6, "Auf einem Bein nach vorn springen"),
  einbeinsprung_seitlich: einbeinSprung(0.5, 0, "Zur Seite des Standbeins springen"),
  einbeinsprung_medial: einbeinSprung(-0.4, 0, "Über die Körpermitte nach innen springen"),
  skater: folge("vorn", [[einbein(50, 60, 30, { schulter_l: [-30, 10, 0], schulter_r: [60, -20, 0] }), 0.5, "Auf einem Bein, tief"], [einbein(10, 20, 10, ARME_VORN, 0.2, -0.5), 0.35, "Seitlich abspringen"], [mit(einbein(50, 60, 30, { schulter_r: [-30, 10, 0], schulter_l: [60, -20, 0] }), { pos: [-1.0, beinHoehe(50, 60, 30), 0] }), 0.4, "Auf dem anderen Bein landen und kurz halten"]], { seiten: true }),
  seitliche_bounds: folge("vorn", [[einbein(50, 60, 30, ARME_VORN), 0.4, "Abdrücken"], [einbein(10, 20, 10, ARME_VORN, 0.25, -0.5), 0.35, "Weit zur Seite"], [mit(einbein(50, 60, 30, ARME_VORN), { pos: [-1.0, beinHoehe(50, 60, 30), 0] }), 0.3, "Landen und sofort weiter"]], { seiten: true }),
  bounding: folge("seite", [[H({ huefte_l: [70, 6, 0], knie_l: [80], fuss_l: [-10, 0], huefte_r: [-20, 6, 0], knie_r: [20], fuss_r: [-30, 0], schulter_l: [-40, 10, 0], schulter_r: [70, 10, 0], ...B("ellbogen", [80, 0]) }, [10, 0, 0], { pos: [0, 1.1, 0], boden: false }), 0.4, "Lange Flugphase, Knie hoch"], [H({ huefte_r: [70, 6, 0], knie_r: [80], fuss_r: [-10, 0], huefte_l: [-20, 6, 0], knie_l: [20], fuss_l: [-30, 0], schulter_r: [-40, 10, 0], schulter_l: [70, 10, 0], ...B("ellbogen", [80, 0]) }, [10, 0, 0], { pos: [0, 1.1, 0.8], boden: false }), 0.4, "Von Bein zu Bein"]]),
  // ------------------------------------------------------------ Umsetzen, Reißen
  power_clean: folge("schraeg", [[VOM_BODEN, 0.6, "Stange am Boden, Rücken gerade"], [HANG, 0.4, "Über die Knie ziehen"], [ZUG, 0.25, "Explosiv strecken, Schultern hoch"], [FANG, 0.3, "In der Viertelhocke auf den Schultern fangen"], [STEHEN_FRONT, 0.8, "Aufrichten"]], { hilfsmittel: LH }),
  hang_power_clean: folge("schraeg", [[oben(), 0.6, "Stange vor den Oberschenkeln"], [HANG, 0.5, "Bis über die Knie absenken"], [ZUG, 0.25, "Explosiv strecken"], [FANG, 0.3, "Fangen"], [STEHEN_FRONT, 0.8, "Aufrichten"]], { hilfsmittel: LH }),
  hang_clean: folge("schraeg", [[oben(), 0.6, "Stange vor den Oberschenkeln"], [HANG, 0.5, "Bis über die Knie"], [ZUG, 0.25, "Explosiv strecken"], [FANG_TIEF, 0.35, "In der tiefen Frontkniebeuge fangen"], [STEHEN_FRONT, 1.0, "Aufstehen"]], { hilfsmittel: LH }),
  kh_reissen_einarmig: folge(
    "schraeg",
    [
      [beuge(50, 70, 22, { schulter_r: [50, 8, 0], ellbogen_r: [4, OBERGRIFF], schulter_l: [40, 20, 0], ellbogen_l: [40, 0], ...FAUST }), 0.6, "Hantel zwischen den Füßen"],
      [H({ ...B("huefte", [-4, 10, 0]), ...B("knie", [4]), ...B("fuss", [-30, 0]), schulter_r: [60, 20, 0], ellbogen_r: [90, OBERGRIFF], schulter_l: [10, 20, 0], ellbogen_l: [20, 0], ...FAUST }), 0.3, "Explosiv strecken, Hantel nah am Körper"],
      [H({ ...B("huefte", [40, 12, 0]), ...B("knie", [50]), ...B("fuss", [20, 0]), schulter_r: [176, 10, 0], ellbogen_r: [4, OBERGRIFF], schulter_l: [10, 20, 0], ellbogen_l: [20, 0], ...FAUST }, [14, 0, 0]), 0.3, "Mit gestrecktem Arm über dem Kopf fangen"],
      [H({ ...B("huefte", [2, 10, 0]), ...B("knie", [2]), schulter_r: [176, 10, 0], ellbogen_r: [4, OBERGRIFF], schulter_l: [10, 20, 0], ellbogen_l: [20, 0], ...FAUST }), 0.8, "Aufrichten"],
    ],
    { seiten: true, hilfsmittel: KH_R },
  ),
  // ------------------------------------------------------------ Medizinball
  mb_brustwurf: folge("seite", [[stand(BRUST), 0.5, "Ball vor der Brust"], [BREIT(BRUST, 20, { ...B("huefte", [40, 12, -6]), ...B("knie", [40]) }), 0.4, "Leicht ausholen"], [stand(STOSS), 0.3, "Explosiv von der Brust stoßen"], [stand(BRUST), 0.8]], { hilfsmittel: BALL }),
  mb_brustwurf_schritt: folge("seite", [[stand(BRUST), 0.5, "Ball vor der Brust"], [schmal(STOSS), 0.35, "Schritt nach vorn und stoßen"], [stand(BRUST), 0.8]], { hilfsmittel: BALL }),
  mb_brustwurf_kniend: folge("seite", [[kniend(BRUST), 0.6, "Aufrecht kniend"], [kniend(STOSS), 0.3, "Explosiv von der Brust stoßen"], [kniend(BRUST), 0.8]], { hilfsmittel: BALL }),
  mb_brustwurf_liegend: folge("seite", [[mit(RUECKENLAGE_AUF, { g: BRUST }), 0.6, "Ball über der Brust"], [mit(RUECKENLAGE_AUF, { g: { ...B("schulter", [90, -4, 0]), ...B("ellbogen", [6, HAMMER]) } }), 0.3, "Senkrecht nach oben stoßen"], [mit(RUECKENLAGE_AUF, { g: BRUST }), 0.8, "Fangen und absenken"]], { hilfsmittel: BALL }),
  mb_slam: folge("seite", [[stand(KOPF_GESTRECKT), 0.6, "Ball über den Kopf, auf die Zehen"], [beuge(60, 60, 20, { ...B("schulter", [70, -4, 0]), ...B("ellbogen", [6, HAMMER]) }, 18), 0.3, "Mit voller Kraft auf den Boden schmettern"], [beuge(60, 60, 20, { ...B("schulter", [70, -4, 0]), ...B("ellbogen", [6, HAMMER]) }, 18), 0.6, "Ball aufnehmen", true]], { hilfsmittel: BALL }),
  mb_slam_rotation: folge("vorn", [[stand({ ...KOPF_GESTRECKT, ...dreh(-30) }), 0.6, "Ball über die eine Schulter"], [beuge(50, 50, 20, { ...B("schulter", [70, -4, 0]), ...B("ellbogen", [6, HAMMER]), ...dreh(40) }, 18), 0.35, "Diagonal neben den Fuß schmettern"], [beuge(50, 50, 20, { ...B("schulter", [70, -4, 0]), ...B("ellbogen", [6, HAMMER]), ...dreh(40) }, 18), 0.6, "Aufnehmen", true]], { seiten: true, hilfsmittel: BALL }),
  mb_rotationswurf: rotWurf(stand, AUSHOLEN_R, WURF_L, "Aus der Hüfte drehen und werfen"),
  mb_scoop_toss: rotWurf(stand, SCOOP_R, SCOOP_WURF, "Von unten schräg nach oben werfen"),
  mb_kugelstoss_rotation: rotWurf(stand, { ...AUSHOLEN_R, schulter_r: [60, 60, 0], ellbogen_r: [130, HAMMER] }, { ...WURF_L, schulter_r: [100, 10, 0], ellbogen_r: [6, HAMMER] }, "Von der hinteren Schulter stoßen"),
  mb_rotationswurf_kniend: rotWurf(halbknie, AUSHOLEN_R, WURF_L, "Aus dem Oberkörper drehen und werfen"),
  mb_rotationswurf_schritt: rotWurf(schmal, AUSHOLEN_R, WURF_L, "Mit Anlaufschritt werfen"),
  mb_ueberkopf_rueckwaerts: folge("seite", [[beuge(60, 70, 22, { ...B("schulter", [60, -4, 0]), ...B("ellbogen", [6, HAMMER]) }, 18), 0.5, "Aus der Hocke, Ball zwischen den Knien"], [sprung(-4, 4, -10, KOPF_GESTRECKT, 0.15), 0.4, "Explosiv strecken, über den Kopf nach hinten"], [stand(KOPF_GESTRECKT), 0.8]], { hilfsmittel: BALL }),
  mb_unterhand_vorwaerts: folge("seite", [[beuge(60, 70, 22, { ...B("schulter", [60, -4, 0]), ...B("ellbogen", [6, HAMMER]) }, 18), 0.5, "Aus der Hocke, Arme gestreckt"], [sprung(-4, 4, 0, { ...B("schulter", [130, -4, 0]), ...B("ellbogen", [6, HAMMER]) }, 0.12), 0.4, "Nach vorn oben werfen"], [stand(BALL_UNTEN), 0.8]], { hilfsmittel: BALL }),
  mb_ueberkopf_vorwaerts: folge("seite", [[stand(KOPF), 0.5, "Ball hinter den Kopf"], [schmal({ ...B("schulter", [120, -4, 0]), ...B("ellbogen", [10, HAMMER]) }), 0.3, "Über den Kopf nach vorn werfen"], [stand(BRUST), 0.8]], { hilfsmittel: BALL }),
  wall_ball: folge("seite", [[stand(BRUST), 0.5, "Ball vor der Brust"], [H({ ...B("huefte", [110, 14, -6]), ...B("knie", [110]), ...B("fuss", [30, 0]), ...BRUST }, [40, 0, 0]), 0.8, "In die Kniebeuge"], [stand(KOPF_GESTRECKT), 0.35, "Aufstehen und den Ball hoch an die Wand werfen"], [stand(BRUST), 0.8, "Fangen"]], { hilfsmittel: BALL }),
  mb_situp_wurf: folge("seite", [[mit(RUECKENLAGE_AUF, { g: KOPF }), 0.6, "Rückenlage, Ball über dem Kopf"], [H({ ...B("huefte", [70, 8, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]), ...B("schulter", [130, -4, 0]), ...B("ellbogen", [10, HAMMER]) }, [-20, 0, 0]), 0.4, "Aufrichten und über den Kopf werfen"], [mit(RUECKENLAGE_AUF, { g: KOPF }), 0.9, "Fangen und abrollen"]], { hilfsmittel: BALL }),
  // ------------------------------------------------------------ Golf-Medizinball
  golf_mb_ausfallschritt_wurf: rotWurf(schmal, SCOOP_R, SCOOP_WURF, "Aus dem Ausfallschritt drehen und werfen"),
  golf_mb_kniend_wurf: rotWurf(kniend, AUSHOLEN_R, WURF_L, "Aus dem Oberkörper werfen"),
  golf_mb_sitzend_wurf: rotWurf(SITZ, AUSHOLEN_R, WURF_L, "Im Sitzen aus der Brustwirbelsäule werfen"),
  golf_mb_wurf_aus_pause: rotWurf(stand, SCOOP_R, SCOOP_WURF, "Ohne Schwung explosiv werfen", true),
  golf_mb_schritt_wurf: rotWurf(schmal, SCOOP_R, SCOOP_WURF, "Mit dem vorderen Fuß treten und werfen"),
  golf_mb_einbeinig_wurf: rotWurf((w) => H({ huefte_l: [30, 6, 0], knie_l: [30], fuss_l: [10, 0], huefte_r: [40, 6, 0], knie_r: [80], fuss_r: [-20, 0], ...w }, [12, 0, 0]), SCOOP_R, SCOOP_WURF, "Auf dem vorderen Bein werfen"),
  golf_mb_seitsprung_wurf: rotWurf(stand, SCOOP_R, SCOOP_WURF, "Auf das hintere Bein springen, sofort werfen"),
  // ------------------------------------------------------------ Golf-Speed
  golf_kabel_rotation_explosiv: folge("vorn", [[golf(dreh(-30)), 0.6, "Golfhaltung, leicht gedreht"], [golf(dreh(40)), 0.3, "So schnell wie möglich zum Ziel drehen"], [golf(dreh(-30)), 1.0, "Kontrolliert zurück"]], { seiten: true, hilfsmittel: [{ art: "bandanker", von: "haende", anker: [-0.9, 0.9, 0.2] }] }),
  golf_overspeed_leicht: schwung(golf, STAB, "Mit leichtem Gerät maximal schnell durch"),
  golf_overspeed_gegenseite: schwung(golf, STAB, "In die ungewohnte Richtung schnell durch", true),
  golf_whoosh_umgedreht: schwung(golf, STAB, "Umgedreht schwingen, Whoosh vorn hören"),
  golf_overload_schwer: schwung(golf, STAB, "Mit schwerem Gerät kontrolliert schnell"),
  golf_overspeed_schritt: schwung(schmal, STAB, "Mit Schritt zum Ziel schnell durch"),
  golf_speed_kniend: schwung(kniend, STAB, "Im Kniestand schnell schwingen"),
  golf_speed_einarmig: schwung(golf, STAB, "Mit einem Arm schnell schwingen"),
}

function oben(): Haltung {
  return H({ ...B("huefte", [2, 10, -4]), ...B("knie", [2]), ...haengen(2) })
}
