// Beine: Oberschenkelvorderseite, Beinrückseite, Spagat und Waden. Aktive Seite ist links, die zweite Seite wird
// gespiegelt (seiten). Statische Dehnungen: hinein etwa 4 s, Haltezeit aus dem Plan; dynamische 1,5 bis 3 s je Richtung.

import type { Dehnung, Haltung } from "../../logik/dehnbewegung"
import { B, BAUCHLAGE, FERSENSITZ, H, HALBKNIESTAND, HUND, LANGSITZ, RUECKENLAGE, SEITLAGE, STAND, STUHLSITZ, folge, halte, mit, pnf, wdh } from "./basis"

const STAND_H = mit(STAND, { g: B("huefte", [0, 6, 0]) })
/** Hände in den Hüften */
const HAENDE_HUEFTE = { ...B("schulter", [-15, 35, 0]), ...B("ellbogen", [105, 0]) }
/** Linke Hand greift den linken Fuß hinter dem Gesäß (Knie gebeugt) */
const FUSSGRIFF_L = { huefte_l: [-10, 2, 0], knie_l: [150], fuss_l: [-45, 0], schulter_l: [-62, 6, 0], ellbogen_l: [22, 0], hand_l: [-20, 0] }

// Stehend vorderer Oberschenkel: rechter Arm hält das Gleichgewicht
const QUAD_STEHEND: Haltung = mit(STAND_H, { g: { ...FUSSGRIFF_L, schulter_r: [60, 35, 0], ellbogen_r: [10, 0], knie_r: [6] } })

// Seitlage: unteres Knie zur Brust, oberes Bein nach hinten (hier liegt die Figur auf links, oben ist rechts)
const SEITLAGE_KOPF = { schulter_l: [165, 0, 0], ellbogen_l: [125, 0] }
const QUAD_SEITLAGE: Haltung = mit(SEITLAGE, { g: { ...SEITLAGE_KOPF, huefte_l: [115, 0, 0], knie_l: [115], huefte_r: [-15, 0, 0], knie_r: [140], fuss_r: [-45, 0], schulter_r: [-40, 8, 0], ellbogen_r: [15, 0] } })

// Bauchlage, Stirn auf dem rechten Unterarm, Band um den linken Fuß über die linke Schulter
const BAUCH_STIRN: Haltung = mit(BAUCHLAGE, { g: { schulter_r: [160, 30, 0], ellbogen_r: [120, 90], schulter_l: [150, 25, 0], ellbogen_l: [130, 0] } })

// Langsitz-Rücklage: Hände hinter dem Körper aufgestützt (Rolle unter den Beinen)
const RUECKSTUETZ: Haltung = H({ ...B("huefte", [60, 6, 0]), ...B("schulter", [-62, 12, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [70, 0]), ...B("fuss", [0, 0]) }, [-30, 0, 0])

// Rückenlage mit Band um den linken Fuß
const BAND_RUECKEN = { ...B("schulter", [55, 10, 0]), ...B("ellbogen", [25, 0]) }
const BEIN_HOCH = (beugung: number): Haltung => mit(RUECKENLAGE, { g: { ...BAND_RUECKEN, huefte_l: [beugung, 0, 0], fuss_l: [10, 0], fuss_r: [5, 0] } })

// Wand vor dem Körper, Hände auf Schulterhöhe
const HAENDE_WAND = { ...B("schulter", [90, 8, 0]), ...B("ellbogen", [25, 0]), ...B("hand", [70, 0]) }
/** Wadendehnung: links hinten gestreckt, Ferse am Boden, rechts vorn gebeugt, Körper zur Wand geneigt */
const WADE = (vor: number): Haltung =>
  H({ ...HAENDE_WAND, schulter_l: [90 + vor, 8, 0], schulter_r: [90 + vor, 8, 0], huefte_l: [-24 + vor, 4, 0], knie_l: [0], fuss_l: [24, 0], huefte_r: [36 + vor, 4, 0], knie_r: [44], fuss_r: [8, 0] }, [vor, 0, 0])

// Kniestand, Hände neben dem vorderen Bein am Boden
const HAENDE_BODEN = (rumpf: number): Partial<Record<string, number[]>> => ({ ...B("schulter", [rumpf + 8, 14, 0]), ...B("ellbogen", [5, 0]), ...B("hand", [80, 0]) })

/** Spagat vorwärts, rechts vorn (spiegelt zur anderen Seite): tiefe 0 = halber Kniestand, 1 = ganz unten */
function spagat(tiefe: number, rumpf = 8): Haltung {
  const vorn = 50 + 40 * tiefe
  const hinten = -15 - 70 * tiefe
  return H(
    {
      huefte_r: [vorn + rumpf, 4, 0],
      knie_r: [50 * (1 - tiefe)],
      fuss_r: [15, 0],
      huefte_l: [hinten + rumpf, 4, 0],
      knie_l: [90 * (1 - tiefe) + 5],
      fuss_l: [-75, 0],
      ...B("schulter", [rumpf + 5, 28, 0]),
      ...B("ellbogen", [10 + 10 * tiefe, 0]),
      ...B("hand", [80, 0]),
    },
    [rumpf, 0, 0],
  )
}

/**
 * Kniend gleiten: hinteres Knie bleibt am Boden (Schienbein flach), vorderes Bein gestreckt mit der Ferse am Boden.
 * b: Winkel des hinteren Oberschenkels hinter der Senkrechten. Das vordere Bein folgt aus der Beckenhöhe.
 */
function kniespagat(b: number, rumpf = 30): Haltung {
  const f = (Math.acos(0.53 * Math.cos((b * Math.PI) / 180)) * 180) / Math.PI
  return H(
    {
      huefte_l: [-b + rumpf, 4, 0],
      knie_l: [90 - b],
      fuss_l: [-80, 0],
      huefte_r: [f + rumpf, 4, 0],
      knie_r: [0],
      fuss_r: [18, 0],
      ...B("schulter", [rumpf + 4, 22, 0]),
      ...B("ellbogen", [5, 0]),
      ...B("hand", [80, 0]),
      lws: [8, 0, 0],
    },
    [rumpf, 0, 0],
  )
}

export const BEINE: Record<string, Dehnung> = {
  // ---------- Vorderer Oberschenkel
  oberschenkel_vorn_dehnen: halte("seite", STAND_H, QUAD_STEHEND, { seiten: true, hinweis: "Knie nebeneinander, Becken leicht nach hinten kippen." }),
  quadrizeps_dehnen_seitlage: halte("oben", mit(SEITLAGE, { g: SEITLAGE_KOPF }), QUAD_SEITLAGE, { seiten: true, hinweis: "Unteres Knie zur Brust, oberes Knie hinter die Körperlinie." }),
  quadrizeps_dehnen_bauchlage_band: halte("seite", BAUCH_STIRN, mit(BAUCH_STIRN, { g: { knie_l: [125], fuss_l: [-45, 0] } }), {
    seiten: true,
    hilfsmittel: [{ art: "band", von: "hand_l", bis: "fuss_l" }],
    hinweis: "Hüfte bleibt am Boden, kein Hohlkreuz.",
  }),
  quadrizeps_dehnen_fersensitz: halte(
    "seite",
    mit(FERSENSITZ, { g: { ...B("schulter", [-35, 15, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [70, 0]) } }),
    mit(FERSENSITZ, { dreh: [-38, 0, 0], g: { ...B("huefte", [42, 8, 0]), ...B("schulter", [-62, 15, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [70, 0]), hals: [10, 0, 0] } }),
    { hinweis: "Knie bleiben am Boden, Bauch leicht anspannen." },
  ),
  quadrizeps_dehnen_gehen: wdh("seite", STAND_H, mit(STAND_H, { g: { ...FUSSGRIFF_L, schulter_r: [175, 10, 0], ellbogen_r: [0, 90], fuss_r: [-30, 0], zehen_r: [55] } }), 1.5, {
    halten: 1.5,
    seiten: true,
    hinweis: "Ferse zum Gesäß, Gegenarm hoch, auf die Zehenspitzen.",
  }),
  quadrizeps_rolle: wdh(
    "seite",
    H({ ...B("schulter", [85, 12, 0]), ...B("ellbogen", [90, 90]), ...B("fuss", [-55, 0]), hals: [-15, 0, 0] }, [85, 0, 0], { pos: [0, 0.94, -0.16] }),
    H({ ...B("schulter", [85, 12, 0]), ...B("ellbogen", [90, 90]), ...B("fuss", [-55, 0]), hals: [-15, 0, 0] }, [85, 0, 0], { pos: [0, 0.94, 0.08] }),
    3,
    { halten: 1, hilfsmittel: [{ art: "rolle", unter: "oberschenkel_l" }], hinweis: "Langsam vor und zurück, Bauch leicht angespannt." },
  ),
  quadrizeps_dehnen_kniestand: halte(
    "seite",
    HALBKNIESTAND,
    mit(HALBKNIESTAND, { g: { huefte_l: [-18, 4, 0], knie_l: [135], fuss_l: [-55, 0], schulter_l: [-42, 14, 0], ellbogen_l: [25, 0], huefte_r: [80, 4, 0], knie_r: [75], fuss_r: [5, 0], schulter_r: [45, 6, 0], ellbogen_r: [35, 0] } }),
    { seiten: true, hinweis: "Gesäß anspannen, Hüfte minimal nach vorn schieben." },
  ),

  // ---------- Kompression
  kompression_beinheben_sitzend: wdh(
    "seite",
    mit(LANGSITZ, { dreh: [5, 0, 0], g: { ...B("huefte", [95, 4, 0]), ...B("schulter", [32, 12, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]), ...B("fuss", [-35, 0]) } }),
    mit(LANGSITZ, { dreh: [5, 0, 0], g: { ...B("huefte", [104, 4, 0]), ...B("schulter", [32, 12, 0]), ...B("ellbogen", [0, 0]), ...B("hand", [80, 0]), ...B("fuss", [-35, 0]) } }),
    1.5,
    { halten: 1, hinweis: "Beine gestreckt einige Zentimeter anheben, Oberkörper aufrecht." },
  ),

  // ---------- Beinrückseite
  beinrueckseite_dehnen: halte(
    "schraeg",
    mit(LANGSITZ, { g: { huefte_r: [85, 55, 22], knie_r: [130], fuss_l: [12, 0], ...B("schulter", [20, 15, 0]) } }),
    mit(LANGSITZ, { dreh: [32, 0, 0], g: { huefte_l: [122, 4, 0], fuss_l: [12, 0], huefte_r: [117, 55, 22], knie_r: [130], lws: [14, 0, 0], bws: [12, 0, 8], hals: [5, 0, 0], ...B("schulter", [128, 8, 0]), ...B("ellbogen", [10, 0]) } }),
    { seiten: true, hinweis: "Langer Rücken, aus der Hüfte nach vorn." },
  ),
  beinrueckseite_dehnen_band: halte("seite", BEIN_HOCH(20), BEIN_HOCH(78), {
    seiten: true,
    hilfsmittel: [{ art: "band", von: "haende", bis: "fuss_l" }],
    hinweis: "Knie gestreckt, Becken bleibt am Boden.",
  }),
  beinrueckseite_pnf_band: pnf("seite", BEIN_HOCH(20), BEIN_HOCH(72), BEIN_HOCH(84), {
    seiten: true,
    hilfsmittel: [{ art: "band", von: "haende", bis: "fuss_l" }],
    hinweis: "Mit halber Kraft gegen das Band drücken, dann weiter heranziehen.",
  }),
  beinrueckseite_dehnen_box: halte(
    "seite",
    mit(STAND_H, { g: { huefte_l: [58, 4, 0], knie_l: [0], fuss_l: [15, 0], ...HAENDE_HUEFTE } }),
    mit(STAND_H, { dreh: [38, 0, 0], g: { huefte_l: [96, 4, 0], knie_l: [0], fuss_l: [15, 0], huefte_r: [38, 4, 0], knie_r: [4], ...HAENDE_HUEFTE, hals: [-10, 0, 0] } }),
    { seiten: true, hilfsmittel: [{ art: "box", unter: "ferse_l", hoehe: 0.45 }], hinweis: "Hüfte zeigt nach vorn, Rücken lang." },
  ),
  beinrueckseite_dehnen_tuerrahmen: halte(
    "seite",
    mit(RUECKENLAGE, { g: { huefte_l: [80, 0, 0], knie_l: [40], fuss_l: [5, 0] } }),
    mit(RUECKENLAGE, { g: { huefte_l: [86, 0, 0], knie_l: [0], fuss_l: [5, 0], fuss_r: [5, 0] } }),
    // Ohne automatischen Seitenwechsel: die Wand steht fest, für die andere Seite legt man sich anders herum hin
    { hilfsmittel: [{ art: "wand", an: "knie_l", richtung: "links" }], hinweis: "Bein an Türrahmen oder Wandkante, das andere Bein liegt lang am Boden. Danach die Seite wechseln." },
  ),
  beinrueckseite_dehnen_stehend_ferse: halte(
    "seite",
    mit(STAND_H, { g: { huefte_l: [22, 4, 0], knie_l: [0], fuss_l: [22, 0], huefte_r: [-6, 4, 0], knie_r: [12], fuss_r: [6, 0], ...HAENDE_HUEFTE } }),
    mit(STAND_H, { dreh: [45, 0, 0], g: { huefte_l: [67, 4, 0], knie_l: [0], fuss_l: [22, 0], huefte_r: [42, 4, 0], knie_r: [22], fuss_r: [16, 0], ...HAENDE_HUEFTE, hals: [-12, 0, 0] } }),
    { seiten: true, hinweis: "Gesäß nach hinten, Rücken gerade." },
  ),
  vorbeuge_stehend: halte(
    "seite",
    mit(STAND_H, { g: B("knie", [12]) }),
    H({ ...B("huefte", [76, 6, 0]), ...B("knie", [4]), ...B("fuss", [4, 0]), lws: [22, 0, 0], bws: [20, 0, 0], hals: [18, 0, 0], ...B("schulter", [122, 6, 0]), ...B("ellbogen", [0, 0]) }, [74, 0, 0]),
    { ein: 5, aus: 5, hinweis: "Kopf und Arme hängen lassen, zum Lösen Knie beugen und aufrollen." },
  ),
  vorbeuge_sitzend: halte(
    "seite",
    mit(LANGSITZ, { g: { ...B("schulter", [172, 10, 0]), ...B("ellbogen", [0, 90]), ...B("fuss", [12, 0]) } }),
    mit(LANGSITZ, { dreh: [34, 0, 0], g: { ...B("huefte", [124, 4, 0]), lws: [20, 0, 0], bws: [18, 0, 0], hals: [6, 0, 0], ...B("schulter", [140, 8, 0]), ...B("ellbogen", [8, 90]), ...B("fuss", [12, 0]) } }),
    { hinweis: "Becken kippen, langer Rücken, Hände an Schienbeine oder Füße." },
  ),
  hamstring_sweep: folge(
    "seite",
    [
      [STAND_H, 1, "Ausgangsstellung", true],
      [mit(STAND_H, { g: { huefte_l: [24, 4, 0], knie_l: [0], fuss_l: [25, 0], huefte_r: [-6, 4, 0], knie_r: [15], fuss_r: [9, 0] } }), 1.2, "Ferse vorn aufsetzen"],
      [H({ huefte_l: [80, 4, 0], knie_l: [0], fuss_l: [25, 0], huefte_r: [50, 4, 0], knie_r: [22], fuss_r: [16, 0], ...B("schulter", [20, 10, 0]), ...B("ellbogen", [5, 0]) }, [56, 0, 0]), 1.5, "Gesäß nach hinten"],
      [H({ huefte_l: [82, 4, 0], knie_l: [0], fuss_l: [25, 0], huefte_r: [52, 4, 0], knie_r: [22], fuss_r: [16, 0], ...B("schulter", [118, 10, 0]), ...B("ellbogen", [5, 0]) }, [58, 0, 0]), 1.5, "Arme schaufeln nach vorn"],
      [mit(STAND_H, { g: { huefte_l: [10, 4, 0], fuss_l: [10, 0], ...B("schulter", [170, 10, 0]), ...B("ellbogen", [0, 90]) } }), 1.5, "Aufrichten"],
      [STAND_H, 1, "Schritt nach vorn"],
    ],
    { seiten: true },
  ),
  beinrueckseite_rolle: wdh(
    "seite",
    mit(RUECKSTUETZ, { pos: [0, 0.94, 0.12], g: { huefte_r: [64, -6, 0], knie_r: [5] } }),
    mit(RUECKSTUETZ, { pos: [0, 0.94, -0.1], g: { huefte_r: [64, -6, 0], knie_r: [5] } }),
    3,
    { seiten: true, hilfsmittel: [{ art: "rolle", unter: "oberschenkel_l" }], hinweis: "Gesäß anheben, langsam zwischen Kniekehle und Gesäß rollen." },
  ),
  jefferson_curl: wdh(
    "seite",
    H({ ...B("huefte", [0, 2, 0]), ...B("schulter", [8, 4, 0]), ...B("ellbogen", [0, 0]) }, undefined, { pos: [0, 1.24, 0], boden: false }),
    H({ ...B("huefte", [52, 2, 0]), lws: [34, 0, 0], bws: [40, 0, 0], hals: [35, 0, 0], ...B("schulter", [126, 4, 0]), ...B("ellbogen", [0, 0]) }, [52, 0, 0], { pos: [0, 1.24, 0], boden: false }),
    6,
    { halten: 1, aus: 6, hilfsmittel: [{ art: "box", unter: "becken", hoehe: 0.3 }, { art: "hantel", an: "haende" }], hinweis: "Wirbel für Wirbel ab- und aufrollen, Kopf zuerst runter und zuletzt hoch." },
  ),
  halber_spagat: halte(
    "seite",
    mit(HALBKNIESTAND, { g: HAENDE_BODEN(0) }),
    H({ huefte_l: [45, 4, 0], knie_l: [92], fuss_l: [-80, 0], huefte_r: [125, 4, 0], knie_r: [0], fuss_r: [22, 0], lws: [10, 0, 0], bws: [10, 0, 0], ...HAENDE_BODEN(65) }, [45, 0, 0]),
    { seiten: true, hinweis: "Hüfte über dem hinteren Knie, vordere Ferse am Boden." },
  ),
  beinheben_aktiv: wdh("seite", mit(RUECKENLAGE, { g: B("fuss", [10, 0]) }), mit(RUECKENLAGE, { g: { ...B("fuss", [10, 0]), huefte_l: [75, 0, 0] } }), 2, {
    halten: 1.5,
    seiten: true,
    hinweis: "Knie gestreckt, das andere Bein drückt in den Boden.",
  }),
  aktive_kniestreckung: wdh(
    "seite",
    mit(RUECKENLAGE, { g: { huefte_l: [90, 0, 0], knie_l: [90], fuss_l: [0, 0], ...B("schulter", [30, 14, 0]), ...B("ellbogen", [10, 0]) } }),
    mit(RUECKENLAGE, { g: { huefte_l: [90, 0, 0], knie_l: [15], fuss_l: [12, 0], ...B("schulter", [30, 14, 0]), ...B("ellbogen", [10, 0]) } }),
    2,
    { halten: 2.5, seiten: true, hinweis: "Oberschenkel bleibt senkrecht, nur das Knie streckt." },
  ),
  beinrueckseite_stuhl: halte(
    "seite",
    mit(STUHLSITZ, { g: { huefte_l: [56, 4, 0], knie_l: [0], fuss_l: [20, 0], ...B("schulter", [35, 10, 0]), ...B("ellbogen", [40, 0]) } }),
    mit(STUHLSITZ, { dreh: [34, 0, 0], g: { huefte_l: [90, 4, 0], knie_l: [0], fuss_l: [20, 0], huefte_r: [124, 5, 0], ...B("schulter", [70, 10, 0]), ...B("ellbogen", [30, 0]), hals: [-8, 0, 0] } }),
    { seiten: true, hilfsmittel: [{ art: "stuhl", unter: "gesaess", hoehe: 0.42 }], hinweis: "Langer Rücken, aus der Hüfte nach vorn." },
  ),
  slump_mobilisation: wdh(
    "seite",
    mit(STUHLSITZ, { g: { lws: [12, 0, 0], bws: [22, 0, 0], hals: [35, 0, 0], ...B("schulter", [-35, 18, 0]), ...B("ellbogen", [95, 0]) } }),
    mit(STUHLSITZ, { g: { lws: [12, 0, 0], bws: [22, 0, 0], hals: [-25, 0, 0], ...B("schulter", [-35, 18, 0]), ...B("ellbogen", [95, 0]), knie_l: [12], fuss_l: [18, 0] } }),
    2,
    { halten: 0.5, seiten: true, hilfsmittel: [{ art: "stuhl", unter: "gesaess", hoehe: 0.42 }], hinweis: "Knie strecken und hochschauen, Knie beugen und Kinn zur Brust." },
  ),
  beine_an_wand: halte(
    "seite",
    mit(RUECKENLAGE, { g: { ...B("huefte", [85, 3, 0]), ...B("knie", [60]), ...B("fuss", [0, 0]), ...B("schulter", [10, 25, 0]) } }),
    mit(RUECKENLAGE, { g: { ...B("huefte", [86, 2, 0]), ...B("knie", [0]), ...B("fuss", [0, 0]), ...B("schulter", [10, 25, 0]) } }),
    { hilfsmittel: [{ art: "wand", an: "knie_l", richtung: "vorn" }], hinweis: "Gesäß nah an die Wand, ganzer Körper wird schwer." },
  ),

  // ---------- Spagat
  spagat_gleiten: wdh("seite", kniespagat(8), kniespagat(42), 3, { halten: 1, aus: 3, seiten: true, hinweis: "Ferse gleitet vor, dann aus der Beinrückseite zurückziehen." }),
  spagat_gestuetzt: halte("seite", kniespagat(8), spagat(0.7), {
    seiten: true,
    hilfsmittel: [{ art: "box", unter: "hand_l", hoehe: 0.15 }, { art: "box", unter: "hand_r", hoehe: 0.15 }],
    hinweis: "Becken gerade nach vorn, Hände auf Blöcken.",
  }),
  spagat: halte("seite", kniespagat(8), spagat(1), { ein: 8, seiten: true, hinweis: "Nur so tief, wie es kontrolliert geht, die Hände stützen." }),

  // ---------- Waden
  waden_dehnen: halte("seite", WADE(0), WADE(14), { seiten: true, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }], hinweis: "Hintere Ferse am Boden, Knie gestreckt." }),
  waden_pnf_wand: pnf("seite", WADE(0), WADE(12), WADE(18), { seiten: true, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }], hinweis: "Fußballen in den Boden drücken, die Ferse bleibt unten." }),
  soleus_dehnen_wand: halte(
    "seite",
    H({ ...HAENDE_WAND, huefte_l: [-4, 4, 0], knie_l: [10], fuss_l: [14, 0], huefte_r: [12, 4, 0], knie_r: [14], fuss_r: [2, 0] }, [4, 0, 0]),
    H({ ...HAENDE_WAND, huefte_l: [-2, 4, 0], knie_l: [38], fuss_l: [40, 0], huefte_r: [30, 4, 0], knie_r: [42], fuss_r: [14, 0] }, [4, 0, 0]),
    { seiten: true, hilfsmittel: [{ art: "wand", an: "hand_l", richtung: "vorn" }], hinweis: "Beide Knie beugen, die hintere Ferse bleibt am Boden." },
  ),
  waden_dehnen_stufe: halte(
    "seite",
    H({ ...HAENDE_WAND, huefte_l: [0, 3, 0], fuss_l: [-5, 0], huefte_r: [-20, 3, 0], knie_r: [60], fuss_r: [-30, 0] }),
    H({ ...HAENDE_WAND, huefte_l: [0, 3, 0], fuss_l: [28, 0], huefte_r: [-20, 3, 0], knie_r: [60], fuss_r: [-30, 0] }),
    { seiten: true, hilfsmittel: [{ art: "rolle", unter: "fuss_l" }, { art: "wand", an: "hand_l", richtung: "vorn" }], hinweis: "Auf einer Stufe: Ferse langsam unter die Kante sinken lassen." },
  ),
  waden_dehnen_zehen_wand: halte(
    "seite",
    H({ ...HAENDE_WAND, schulter_l: [95, 8, 0], schulter_r: [95, 8, 0], ...B("ellbogen", [70, 0]), huefte_l: [12, 4, 0], knie_l: [0], fuss_l: [38, 0], huefte_r: [-8, 4, 0], fuss_r: [8, 0] }),
    H({ ...HAENDE_WAND, schulter_l: [105, 8, 0], schulter_r: [105, 8, 0], ...B("ellbogen", [80, 0]), huefte_l: [22, 4, 0], knie_l: [0], fuss_l: [52, 0], huefte_r: [2, 4, 0], knie_r: [6], fuss_r: [18, 0] }, [10, 0, 0]),
    { seiten: true, hilfsmittel: [{ art: "wand", an: "fuss_l", richtung: "vorn" }], hinweis: "Ferse am Boden, Fußballen an der Wand, Körper zur Wand lehnen." },
  ),
  waden_dehnen_band_sitzend: halte(
    "seite",
    mit(LANGSITZ, { g: { ...B("schulter", [62, 10, 0]), ...B("ellbogen", [20, 0]), fuss_l: [0, 0] } }),
    mit(LANGSITZ, { g: { ...B("schulter", [55, 10, 0]), ...B("ellbogen", [40, 0]), fuss_l: [28, 0] } }),
    { seiten: true, hilfsmittel: [{ art: "band", von: "haende", bis: "fuss_l" }], hinweis: "Knie gestreckt, Fußspitze zu dir ziehen." },
  ),
  hund_wadendehnung: wdh("seite", mit(HUND, { g: { huefte_l: [105, 4, 0], knie_l: [42], fuss_l: [-20, 0], zehen_l: [50] } }), mit(HUND, { g: { huefte_r: [105, 4, 0], knie_r: [42], fuss_r: [-20, 0], zehen_r: [50] } }), 1.5, {
    halten: 1.5,
    aus: 1.5,
    hinweis: "Abwechselnd ein Knie beugen, die andere Ferse zum Boden.",
  }),
  waden_rolle: wdh(
    "seite",
    mit(RUECKSTUETZ, { pos: [0, 0.94, 0.1], g: { huefte_l: [60, 6, 0], huefte_r: [100, 8, 0], knie_r: [95], fuss_r: [10, 0] } }),
    mit(RUECKSTUETZ, { pos: [0, 0.94, -0.08], g: { huefte_l: [60, 6, 0], huefte_r: [100, 8, 0], knie_r: [95], fuss_r: [10, 0] } }),
    3,
    { seiten: true, hilfsmittel: [{ art: "rolle", unter: "wade_l" }], hinweis: "Gesäß leicht anheben, von der Achillessehne bis unter die Kniekehle." },
  ),

  // ---------- Dynamisch im Stand
  hueftbeugen_stab: wdh(
    "seite",
    mit(STAND_H, { g: { schulter_r: [165, 12, 70], ellbogen_r: [150, 0], schulter_l: [-35, 30, -80], ellbogen_l: [110, 0] } }),
    H({ ...B("huefte", [62, 6, 0]), ...B("knie", [20]), ...B("fuss", [10, 0]), schulter_r: [165, 12, 70], ellbogen_r: [150, 0], schulter_l: [-35, 30, -80], ellbogen_l: [110, 0] }, [52, 0, 0]),
    2.5,
    { halten: 1, hilfsmittel: [{ art: "stab", von: "bws", bis: "gesaess" }], hinweis: "Hinterkopf, Brustwirbelsäule und Kreuzbein bleiben am Stab." },
  ),
  zinnsoldat_gehen: wdh(
    "seite",
    STAND_H,
    mit(STAND_H, { g: { huefte_l: [80, 4, 0], knie_l: [0], fuss_l: [10, 0], knie_r: [10], schulter_r: [90, 5, 0], ellbogen_r: [0, 90], schulter_l: [-20, 8, 0] } }),
    1,
    { halten: 0.3, aus: 1, seiten: true, hinweis: "Gestrecktes Bein zur Gegenhand, Oberkörper aufrecht." },
  ),
}
