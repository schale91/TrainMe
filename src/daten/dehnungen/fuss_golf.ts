// Sprunggelenk, Fuß und Zehen sowie die übrigen Golf- und Reha-Mobilisationen. Tempo: Mobilisationen 2 bis 3 s je
// Richtung, Fußkreisen und Fußalphabet langsam Schritt für Schritt. Erste Seite links (die Gegenseite wird gespiegelt).

import type { Dehnung, Haltung } from "../../logik/dehnbewegung"
import { ARME_LOCKER, ARME_VERSCHRAENKT, ATHLETISCH, B, FERSENSITZ, H, HALBKNIESTAND, KNIESTAND, RUECKENLAGE, STAND, STUHLSITZ, VIERFUESSLER, folge, halte, mit, wdh } from "./basis"

const STAND_W = mit(STAND, { g: B("huefte", [0, 7, 0]) })
const SITZ = mit(STUHLSITZ, { g: { ...B("schulter", [10, 8, 0]), ...B("ellbogen", [60, 60]) } })
const STUHL = [{ art: "stuhl" as const, unter: "gesaess" as const, hoehe: 0.42 }]
const HAENDE_WAND = { ...B("schulter", [80, 8, 0]), ...B("ellbogen", [35, 90]), ...B("hand", [70, 0]) }
const STAB_HAENDE = { art: "stab" as const, von: "hand_l" as const, bis: "hand_r" as const }

// Halber Kniestand mit dem linken Fuß vorn (Spiegelbild von HALBKNIESTAND): Schienbein senkrecht bzw. Knie über den Zehen
const HALB_VORN_L = (vor: number, haende: Record<string, number[]>): Haltung =>
  H({ huefte_r: [-5 - vor * 0.4, 4, 0], knie_r: [85], fuss_r: [-80, 0], huefte_l: [88 - vor * 0.3, 4, 0], knie_l: [88 + vor], fuss_l: [vor, 0], ...haende })
const HAENDE_KNIE = { ...B("schulter", [45, 10, 0]), ...B("ellbogen", [60, 60]) }

// Knie zur Wand: wie der Test, die Hände stützen an der Wand
const WAND_START = H({ huefte_l: [25, 3, 0], knie_l: [30], fuss_l: [5, 0], huefte_r: [-12, 3, 0], knie_r: [8], fuss_r: [12, 0], ...HAENDE_WAND })
const WAND_ZIEL = H({ huefte_l: [45, 3, 0], knie_l: [82], fuss_l: [37, 0], huefte_r: [-12, 3, 0], knie_r: [14], fuss_r: [14, 0], ...HAENDE_WAND }, [4, 0, 0])

// Sitzen mit angehobenem linken Bein, Hände halten den Unterschenkel
const BEIN_GEHALTEN = (fuss: number[]): Haltung => mit(SITZ, { g: { huefte_l: [118, 5, 0], knie_l: [95], fuss_l: fuss, ...B("schulter", [55, 12, 0]), ...B("ellbogen", [55, 70]), lws: [10, 0, 0] } })
// Sitzen, linkes Bein vorn angehoben, Fuß hängt frei
const BEIN_VORN = (fuss: number[]): Haltung => mit(SITZ, { g: { huefte_l: [98, 5, 0], knie_l: [18], fuss_l: fuss, ...B("schulter", [-10, 20, 0]), ...B("ellbogen", [10, 0]) } })

// Golfhaltung (Ansprechen) mit Schläger quer hinter den Schultern
const SCHULTERSTAB = { ...B("schulter", [25, 82, 55]), ...B("ellbogen", [120, 0]) }
const GOLF_SCHULTER = mit(ATHLETISCH, { g: SCHULTERSTAB })
const KINDARME = mit(FERSENSITZ, { dreh: [70, 0, 0], g: { ...B("huefte", [145, 8, 0]), ...B("schulter", [125, 12, 0]), ...B("ellbogen", [70, 90]), ...B("hand", [15, 0]), lws: [10, 0, 0], bws: [5, 0, 0], hals: [-10, 0, 0] } })

export const FUSS_GOLF: Record<string, Dehnung> = {
  // ---------- Sprunggelenk
  knie_zur_wand: wdh("seite", WAND_START, WAND_ZIEL, 2.5, { halten: 2, seiten: true, hilfsmittel: [{ art: "wand", an: "knie_l", richtung: "vorn" }], hinweis: "Knie über die zweite Zehe zur Wand, die Ferse bleibt am Boden." }),
  sprunggelenk_band: wdh("seite", HALB_VORN_L(0, HAENDE_KNIE), HALB_VORN_L(22, HAENDE_KNIE), 2, { halten: 2, seiten: true, hilfsmittel: [{ art: "band", von: "fuss_l", bis: "ferse_r" }], hinweis: "Das Band zieht das Sprunggelenk nach hinten, das Knie wandert nach vorn." }),
  sprunggelenk_cars: folge(
    "schraeg",
    [
      [BEIN_GEHALTEN([0, 0]), 1.5, "Ausgangsstellung", true],
      [BEIN_GEHALTEN([25, 0]), 2, "Fußspitze heranziehen"],
      [BEIN_GEHALTEN([5, -25]), 2, "Nach außen"],
      [BEIN_GEHALTEN([-40, 0]), 2, "Nach unten strecken"],
      [BEIN_GEHALTEN([5, 25]), 2, "Nach innen"],
      [BEIN_GEHALTEN([25, 0]), 2, "Wieder heran"],
      [BEIN_GEHALTEN([0, 0]), 1.5, "Lösen"],
    ],
    { seiten: true, hilfsmittel: STUHL, hinweis: "Nur der Fuß kreist, der Unterschenkel bleibt ruhig." },
  ),
  sprunggelenk_rocks_gewicht: wdh("seite", mit(HALB_VORN_L(0, {}), { g: { ...B("schulter", [55, 12, 0]), ...B("ellbogen", [45, 60]), bws: [12, 0, 0] } }), mit(HALB_VORN_L(24, {}), { g: { ...B("schulter", [60, 12, 0]), ...B("ellbogen", [40, 60]), bws: [14, 0, 0] } }), 2, { halten: 2.5, seiten: true, hilfsmittel: [{ art: "hantel", an: "knie_l" }], hinweis: "Das Gewicht auf dem Oberschenkel drückt das Knie nach vorn, die Ferse bleibt unten." }),
  sprunggelenk_rocks_kniestand: wdh("seite", HALB_VORN_L(0, HAENDE_KNIE), HALB_VORN_L(24, HAENDE_KNIE), 2, { halten: 1, seiten: true, hinweis: "Knie über die Zehen schieben, die Ferse bleibt am Boden." }),
  schienbein_dehnen_kniend: halte("seite", mit(FERSENSITZ, { g: { ...B("schulter", [10, 10, 0]), ...B("ellbogen", [30, 60]) } }), mit(FERSENSITZ, { dreh: [-28, 0, 0], g: { ...B("huefte", [40, 4, 0]), ...B("knie", [150]), ...B("fuss", [-75, 0]), ...B("schulter", [-55, 12, 0]), ...B("ellbogen", [5, 0]), ...B("hand", [80, 0]) } }), { hinweis: "Zurücklehnen und die Knie leicht anheben, Dehnung vorn am Schienbein." }),
  schienbein_dehnen_stehend: halte("seite", STAND_W, mit(STAND_W, { g: { huefte_r: [8, 7, 0], knie_r: [18], fuss_r: [8, 0], huefte_l: [-12, 5, 0], knie_l: [40], fuss_l: [-100, 0], zehen_l: [-30] } }), { seiten: true, hinweis: "Zehenoberseite am Boden, das Knie sanft nach vorn schieben." }),
  schienbein_rolle: wdh("seite", mit(VIERFUESSLER, { pos: [0, 0.94, 0.06], g: { ...B("huefte", [95, 3, 0]), ...B("schulter", [82, 3, 0]) } }), mit(VIERFUESSLER, { pos: [0, 0.94, -0.1], g: { ...B("huefte", [85, 3, 0]), ...B("schulter", [100, 3, 0]) } }), 3, { aus: 3, seiten: true, hilfsmittel: [{ art: "rolle", unter: "wade_l" }], hinweis: "Langsam vom Knie zum Sprunggelenk rollen, nicht auf der Schienbeinkante." }),
  fusssohle_rollen: wdh("seite", mit(SITZ, { g: { huefte_l: [92, 5, 0], knie_l: [55], fuss_l: [-8, 0] } }), mit(SITZ, { g: { huefte_l: [92, 5, 0], knie_l: [35], fuss_l: [-15, 0] } }), 3, { aus: 3, seiten: true, hilfsmittel: [...STUHL, { art: "rolle", unter: "fuss_l" }], hinweis: "Von der Ferse bis zum Ballen rollen, an empfindlichen Stellen kurz bleiben." }),
  fusssohle_dehnen_hand: halte("schraeg", mit(SITZ, { g: { huefte_l: [105, 35, -55], knie_l: [110], fuss_l: [0, 0], schulter_l: [55, 10, -30], ellbogen_l: [55, 60], schulter_r: [40, 10, 0], ellbogen_r: [70, 60] } }), mit(SITZ, { g: { huefte_l: [105, 35, -55], knie_l: [110], fuss_l: [25, 0], zehen_l: [55], schulter_l: [60, 10, -30], ellbogen_l: [50, 60], schulter_r: [45, 10, 0], ellbogen_r: [70, 60], bws: [10, 0, 0] } }), { seiten: true, hilfsmittel: STUHL, hinweis: "Zehen zum Schienbein ziehen, die Sehnenplatte der Fußsohle ist gespannt." }),
  zehen_dehnen_kniend: halte("seite", mit(KNIESTAND, { g: { ...B("fuss", [0, 0]), ...B("zehen", [85]) } }), mit(FERSENSITZ, { g: { ...B("fuss", [-5, 0]), ...B("zehen", [85]), ...B("huefte", [70, 4, 0]), ...B("knie", [150]), ...B("schulter", [15, 8, 0]), ...B("ellbogen", [50, 60]) } }), { hinweis: "Alle Zehen aufgestellt, langsam auf die Fersen setzen." }),
  grosszehe_dehnen_wand: halte("seite", mit(WAND_START, { g: { zehen_l: [50] } }), mit(WAND_ZIEL, { g: { zehen_l: [65] } }), { seiten: true, hilfsmittel: [{ art: "wand", an: "fuss_l", richtung: "vorn" }], hinweis: "Großzehe an der Wand, der Ballen bleibt am Boden, Knie nach vorn." }),
  fussalphabet: folge(
    "schraeg",
    [
      [BEIN_VORN([0, 0]), 1.5, "Ausgangsstellung", true],
      [BEIN_VORN([-30, -15]), 1.2, "A"],
      [BEIN_VORN([20, 0]), 1.2, "A"],
      [BEIN_VORN([-30, 15]), 1.2, "A"],
      [BEIN_VORN([-8, -10]), 1, "A"],
      [BEIN_VORN([-8, 10]), 1, "A"],
      [BEIN_VORN([20, -15]), 1.2, "B"],
      [BEIN_VORN([-30, -15]), 1.2, "B"],
      [BEIN_VORN([-15, 15]), 1.2, "B"],
      [BEIN_VORN([-5, -15]), 1, "B"],
      [BEIN_VORN([10, 15]), 1.2, "B"],
      [BEIN_VORN([20, -15]), 1, "B"],
      [BEIN_VORN([0, 0]), 1.5, "Und so weiter bis Z"],
    ],
    { seiten: true, hilfsmittel: STUHL, hinweis: "Große Buchstaben, die Bewegung kommt aus dem Sprunggelenk." },
  ),
  zehen_yoga: folge(
    "seite",
    [
      [SITZ, 1.5, "Füße flach am Boden", true],
      [mit(SITZ, { g: B("zehen", [35]) }), 1.5, "Großzehe heben"],
      [SITZ, 1.5, "Absenken"],
      [mit(SITZ, { g: B("zehen", [25]) }), 1.5, "Kleine Zehen heben"],
      [SITZ, 1.5, "Absenken"],
      [mit(SITZ, { g: B("zehen", [15]) }), 2, "Alle Zehen spreizen", true],
      [SITZ, 1.5, "Lösen"],
    ],
    { hilfsmittel: STUHL, hinweis: "Langsam wechseln, der Rest des Fußes bleibt am Boden." },
  ),
  reha_fusswippe: wdh("seite", mit(RUECKENLAGE, { g: B("fuss", [25, 0]) }), mit(RUECKENLAGE, { g: B("fuss", [-45, 0]) }), 1, { hinweis: "Fußspitzen kräftig heranziehen und wegstrecken, zügig und gleichmäßig." }),

  // ---------- Golf und Reha
  golf_reach_roll_lift: folge(
    "seite",
    [
      [KINDARME, 1.5, "Ausgangsstellung", true],
      [mit(KINDARME, { g: { schulter_l: [168, 8, 0], ellbogen_l: [0, 90] } }), 2, "Arm nach vorn schieben"],
      [mit(KINDARME, { g: { schulter_l: [168, 8, 0], ellbogen_l: [0, 0] } }), 1, "Daumen nach oben drehen"],
      [mit(KINDARME, { g: { schulter_l: [190, 8, 0], ellbogen_l: [0, 0] } }), 1.5, "Arm anheben"],
      [mit(KINDARME, { g: { schulter_l: [190, 8, 0], ellbogen_l: [0, 0] } }), 1, "Halten", true],
      [mit(KINDARME, { g: { schulter_l: [168, 8, 0], ellbogen_l: [0, 0] } }), 1.5, "Absenken"],
      [KINDARME, 2, "Zurückführen"],
    ],
    { seiten: true, hinweis: "Gesäß bleibt auf den Fersen, der Oberkörper dreht nicht mit." },
  ),
  golf_bws_streckung_bank_schlaeger: halte("seite", mit(KNIESTAND, { g: { ...B("schulter", [100, 10, 0]), ...B("ellbogen", [100, 90]) } }), mit(KNIESTAND, { dreh: [90, 0, 0], g: { ...B("huefte", [110, 5, 0]), ...B("knie", [120]), ...B("schulter", [178, 10, 60]), ...B("ellbogen", [130, 90]), bws: [-18, 0, 0], hals: [5, 0, 0] } }), { hilfsmittel: [{ art: "bank", unter: "ellbogen_l", hoehe: 0.45 }, STAB_HAENDE], hinweis: "Ellbogen bleiben auf der Bank, der Schläger wandert hinter den Kopf." }),
  bws_rotation_golfhaltung: wdh("vorn", mit(ATHLETISCH, { g: ARME_VERSCHRAENKT }), mit(ATHLETISCH, { g: { ...ARME_VERSCHRAENKT, bws: [0, 0, 40], lws: [0, 0, 8], hals: [-25, 0, -15] } }), 2.5, { halten: 1, seiten: true, hilfsmittel: [{ art: "stab", von: "schulter_l", bis: "schulter_r" }], hinweis: "Neigung des Oberkörpers bleibt, Becken und Knie zeigen nach vorn." }),
  reha_rumpf_drehen_sitz: wdh("oben", mit(SITZ, { g: { ...B("huefte", [90, 0, 0]), ...B("schulter", [60, -20, -70]), ...B("ellbogen", [140, 80]) } }), mit(SITZ, { g: { ...B("huefte", [90, 0, 0]), ...B("schulter", [60, -20, -70]), ...B("ellbogen", [140, 80]), lws: [0, 0, 8], bws: [0, 0, 35], hals: [0, 0, 15] } }), 2.5, { halten: 1, seiten: true, hilfsmittel: STUHL, hinweis: "Langsam drehen, der Kopf dreht mit, die Knie bleiben vorn." }),
  golf_tiefe_kniebeuge_schlaeger: wdh("schraeg", H({ ...B("huefte", [0, 12, -15]), ...B("schulter", [160, 60, 0]), ...B("ellbogen", [0, 0]) }), H({ ...B("huefte", [118, 18, -18]), ...B("knie", [125]), ...B("fuss", [32, 0]), ...B("schulter", [160, 60, 0]), ...B("ellbogen", [0, 0]), bws: [-5, 0, 0] }, [24, 0, 0]), 3, { halten: 2, aus: 3, hilfsmittel: [STAB_HAENDE], hinweis: "Fersen am Boden, der Schläger bleibt über den Füßen." }),
  golf_seitneigung_schlaeger: wdh("vorn", mit(STAND_W, { g: { ...B("schulter", [170, 25, 0]), ...B("ellbogen", [5, 0]) } }), mit(STAND_W, { g: { ...B("schulter", [170, 25, 0]), ...B("ellbogen", [5, 0]), huefte_l: [0, 14, 0], huefte_r: [0, 0, 0], lws: [0, -14, 0], bws: [0, -22, 0], hals: [0, -5, 0] } }, ), 2.5, { halten: 1, seiten: true, hilfsmittel: [STAB_HAENDE], hinweis: "Lang machen, die Hüfte schiebt leicht zur Gegenseite." }),
  golf_schulterdrehung_schlaeger: folge(
    "vorn",
    [
      [GOLF_SCHULTER, 1.5, "Golfhaltung", true],
      [mit(GOLF_SCHULTER, { g: { ...SCHULTERSTAB, bws: [0, 0, 45], lws: [0, 0, 12], hals: [-25, 0, -30], huefte_l: [45, 6, -10], huefte_r: [45, 6, 15] } }), 2, "Rückschwung"],
      [GOLF_SCHULTER, 1.2, "Durch die Mitte"],
      [mit(GOLF_SCHULTER, { dreh: [10, -30, 0], g: { ...SCHULTERSTAB, huefte_l: [10, 6, 25], knie_l: [5], huefte_r: [15, 6, -10], knie_r: [30], fuss_r: [-30, 0], zehen_r: [50], bws: [0, 0, -40], lws: [0, 0, -12], hals: [-5, 0, 25] } }), 2, "Finish, hintere Ferse löst sich"],
      [mit(GOLF_SCHULTER, { dreh: [10, -30, 0], g: { ...SCHULTERSTAB, huefte_l: [10, 6, 25], knie_l: [5], huefte_r: [15, 6, -10], knie_r: [30], fuss_r: [-30, 0], zehen_r: [50], bws: [0, 0, -40], lws: [0, 0, -12], hals: [-5, 0, 25] } }), 1, "Halten", true],
      [GOLF_SCHULTER, 2, "Zurück in die Golfhaltung"],
    ],
    { hilfsmittel: [{ art: "stab", von: "schulter_l", bis: "schulter_r" }], hinweis: "Golfhaltung halten, Gewicht wandert vom hinteren auf das vordere Bein." },
  ),
  golf_zehenberuehrung_progression: wdh("seite", mit(STAND, { g: { ...B("fuss", [12, 0]), ...B("huefte", [0, 2, 0]) } }), H({ ...B("huefte", [78, 2, 0]), ...B("fuss", [12, 0]), lws: [22, 0, 0], bws: [18, 0, 0], hals: [15, 0, 0], ...B("schulter", [118, 4, 0]), ...B("ellbogen", [0, 0]) }, [78, 0, 0]), 3, { halten: 1, aus: 3, hilfsmittel: [{ art: "kissen", unter: "fuss_l" }, { art: "kissen", unter: "fuss_r" }], hinweis: "Hüfte nach hinten schieben, Knie leicht zusammendrücken, Zehen berühren." }),
  reha_becken_kippen_sitz: wdh("seite", mit(SITZ, { dreh: [-10, 0, 0], g: { ...B("huefte", [80, 5, 0]), lws: [18, 0, 0], bws: [8, 0, 0], ...B("schulter", [30, 10, 0]), ...B("ellbogen", [40, 60]) } }), mit(SITZ, { dreh: [10, 0, 0], g: { ...B("huefte", [100, 5, 0]), lws: [-14, 0, 0], bws: [-4, 0, 0], ...B("schulter", [30, 10, 0]), ...B("ellbogen", [40, 60]) } }), 2.5, { hilfsmittel: STUHL, hinweis: "Becken langsam nach hinten und vorn kippen, fließend wechseln." }),
  golf_handgelenk_beugen_strecken_schlaeger: wdh("seite", mit(STAND_W, { g: { schulter_l: [70, 10, 0], ellbogen_l: [0, 0], hand_l: [0, -35] } }), mit(STAND_W, { g: { schulter_l: [70, 10, 0], ellbogen_l: [0, 0], hand_l: [0, 45] } }), 2, { halten: 0.5, seiten: true, hinweis: "Nur das Handgelenk bewegt sich, der Arm bleibt gestreckt." }),
  golf_kopf_schulter_trennung: wdh("vorn", mit(ATHLETISCH, { g: { ...ARME_VERSCHRAENKT, bws: [0, 0, 35], lws: [0, 0, 8], hals: [-25, 0, -40] } }), mit(ATHLETISCH, { g: { ...ARME_VERSCHRAENKT, bws: [0, 0, -35], lws: [0, 0, -8], hals: [-25, 0, 40] } }), 2.5, { halten: 0.5, hinweis: "Die Schultern drehen unter dem Kinn durch, der Kopf bleibt ruhig." }),
}

void ARME_LOCKER
void HALBKNIESTAND
