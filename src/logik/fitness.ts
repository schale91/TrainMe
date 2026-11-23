// Fitness-Check (Wunsch von Alex, 23.11.2026): Bereiche, die für Gesundheit und Leistung belegt sind, mit den Werten der
// Uhr, aus TrainMe und selbst gemessenen Werten. Eine Skala (rot, gelb, grün, hellblau) gibt es nur, wo eine belegte
// Schwelle vorliegt; sonst zeigt der Check den Wert und seinen Verlauf.
//
// Schwellen und Quellen:
// - Fitnessalter (Uhr) gegen das echte Alter: Garmin rechnet die VO2max nach Alter und Geschlecht um.
// - Schritte: Sterberisiko sinkt bis etwa 8.000 bis 10.000 Schritte (unter 60) bzw. 6.000 bis 8.000 (ab 60), Paluch et al.
//   2022, Lancet Public Health 7.
// - Ruhepuls: höheres Risiko mit steigendem Ruhepuls, deutlich ab über 80, Zhang et al. 2016, CMAJ 188.
// - Schlaf: mindestens 7 Stunden für Erwachsene, Watson et al. 2015 (AASM und SRS), Sleep 38.
// - Taille zu Größe: unter 0,5 (NICE 2022).
// - Liegestütze am Stück: ab 40 deutlich weniger Herz-Kreislauf-Ereignisse als unter 10, Yang et al. 2019, JAMA Netw
//   Open 2 (Männer, Feuerwehrleute; für Frauen ohne Stufe).
// - Beweglichkeit: die Tests von TrainMe mit ihren Orientierungswerten.

import { maximum } from "./eigenerPlan"
import { alleTage } from "./gesundheit"
import { TESTS, bewerte } from "../daten/tests"
import type { Daten, Fitness, FitnessWert } from "./typen"

/** Farbe auf der Skala: rot ausbaufähig, gelb mittel, grün gut, blau überragend */
export type Farbe = "rot" | "gelb" | "gruen" | "blau"
export type Stufe = Farbe | null

export const STUFE_NAME: Record<Farbe, string> = { rot: "ausbaufähig", gelb: "mittel", gruen: "gut", blau: "überragend" }

/**
 * Skala zum Anzeigen: Abschnitte aufsteigend nach Zahlenwert (jeweils „kleiner als bis“), die Markierung bei wert.
 * umgekehrt: kleiner ist besser, die Skala wird gespiegelt, damit „gut“ immer rechts liegt.
 */
export interface Skala {
  min: number
  max: number
  wert: number
  abschnitte: { bis: number; farbe: Farbe }[]
  /** Grenzen mit Beschriftung unter der Skala */
  marken: { bei: number; text: string }[]
  umgekehrt?: boolean
}

export interface Kennzahl {
  id: string
  name: string
  /** angezeigter Wert, leer = fehlt */
  wert: string
  stufe: Stufe
  skala?: Skala
  /** Einordnung in einem Satz */
  text: string
}

/** Farbe des Abschnitts, in dem der Wert liegt */
export function farbeAuf(abschnitte: { bis: number; farbe: Farbe }[], wert: number): Farbe {
  return (abschnitte.find((a) => wert < a.bis) ?? abschnitte[abschnitte.length - 1]).farbe
}

/** Skala und Stufe aus Grenzen [bis, Farbe] (aufsteigend, die letzte gilt bis unendlich) */
function skala(wert: number, min: number, max: number, grenzen: [number, Farbe][], marken: (number | [number, string])[], umgekehrt = false): { stufe: Farbe; skala: Skala } {
  const abschnitte = grenzen.map(([bis, farbe]) => ({ bis, farbe }))
  return {
    stufe: farbeAuf(abschnitte, wert),
    skala: { min, max, wert, abschnitte, umgekehrt, marken: marken.map((m) => (typeof m === "number" ? { bei: m, text: zahl(m, m % 1 ? (Math.abs(m) < 1 ? 2 : 1) : 0) } : { bei: m[0], text: m[1] })) },
  }
}

export interface Bereich {
  id: string
  name: string
  kennzahlen: Kennzahl[]
}

/** Werte der Uhr (GET /api/lebenswelt/garmin/heute, nur in der Lebenswelt) */
export interface UhrWerte {
  vo2max?: number
  fitnessalter?: number
  schritte_wochenschnitt?: number
  intensiv_min?: number
  intensiv_ziel_woche?: number
  ruhepuls_7_tage?: number
  hrv_woche?: number
  hrv_basis?: number
}

/** Selbst gemessene Werte: Name, Einheit, so misst du es; reha: in der Reha nicht anbieten (Sprünge, Liegestütze) */
export const MESSWERTE: {
  id: FitnessWert
  name: string
  einheit: string
  anleitung: string
  min: number
  max: number
  reha?: false
  nurOhneUhr?: true
}[] = [
  {
    id: "taille_cm",
    name: "Taillenumfang",
    einheit: "cm",
    anleitung: "Morgens, im Stehen, nach dem Ausatmen, in Höhe des Bauchnabels.",
    min: 40,
    max: 200,
  },
  {
    id: "liegestuetze",
    name: "Liegestütze am Stück",
    einheit: "Wdh",
    anleitung: "Sauber, Körper gerade, Brust bis eine Faust über dem Boden, ohne Pause.",
    min: 0,
    max: 200,
    reha: false,
  },
  {
    id: "griffkraft_kg",
    name: "Griffkraft",
    einheit: "kg",
    anleitung: "Mit einem Handdynamometer, stärkere Hand, bester von drei Versuchen.",
    min: 5,
    max: 120,
  },
  {
    id: "weitsprung_cm",
    name: "Standweitsprung",
    einheit: "cm",
    anleitung: "Beidbeinig aus dem Stand, Landung auf beiden Füßen, gemessen bis zur hinteren Ferse, bester von drei.",
    min: 30,
    max: 400,
    reha: false,
  },
  {
    id: "sprunghoehe_cm",
    name: "Sprunghöhe",
    einheit: "cm",
    anleitung: "Neben einer Wand: Reichhöhe im Stand markieren, dann aus dem Stand hochspringen und anschlagen. Differenz, bester von drei.",
    min: 5,
    max: 120,
    reha: false,
  },
  {
    id: "vo2max",
    name: "VO2max",
    einheit: "ml/kg/min",
    anleitung: "Ohne Uhr in der Lebenswelt: Wert aus der Uhr-App oder einem Test eintragen.",
    min: 15,
    max: 90,
    nurOhneUhr: true,
  },
  {
    id: "fitnessalter",
    name: "Fitnessalter",
    einheit: "Jahre",
    anleitung: "Ohne Uhr in der Lebenswelt: Wert aus der Uhr-App eintragen.",
    min: 10,
    max: 110,
    nurOhneUhr: true,
  },
]

const zahl = (x: number, n = 0) => x.toFixed(n).replace(".", ",")

/** Letzter Messwert, oder null */
export function letzter(f: Fitness | undefined, id: FitnessWert): { datum: string; wert: number } | null {
  const l = f?.werte?.[id]
  return l && l.length ? l[l.length - 1] : null
}

/** Messwert eintragen; am selben Tag ersetzt ein neuer Wert den alten */
export function wertEintragen(d: Daten, id: FitnessWert, wert: number, datum: string): void {
  const f: Fitness = { ...(d.fitness || {}) }
  const alt = (f.werte?.[id] || []).filter((x) => x.datum !== datum)
  f.werte = {
    ...(f.werte || {}),
    [id]: [...alt, { datum, wert }].sort((a, b) => (a.datum < b.datum ? -1 : 1)),
  }
  d.fitness = f
}

/** Uhrwerte für den Verlauf merken (VO2max und Fitnessalter), höchstens einmal am Tag und nur bei Änderung */
export function uhrMerken(d: Daten, uhr: UhrWerte, datum: string): boolean {
  let neu = false
  for (const id of ["vo2max", "fitnessalter"] as const) {
    const w = uhr[id]
    if (typeof w !== "number" || !(w > 0)) continue
    const l = letzter(d.fitness, id)
    const rund = Math.round(w * 10) / 10
    if (l && (l.datum === datum || l.wert === rund)) continue
    wertEintragen(d, id, rund, datum)
    neu = true
  }
  return neu
}

/** Geburtsjahr und Geschlecht: aus dem Fitness-Check, sonst aus der Reha-Einrichtung */
export function person(daten: Daten): { geburtsjahr?: number; geschlecht?: "m" | "w" } {
  const r = daten.profil?.reha
  return { geburtsjahr: daten.fitness?.geburtsjahr ?? r?.geburtsjahr, geschlecht: daten.fitness?.geschlecht ?? r?.geschlecht }
}

export function alterAm(geburtsjahr: number | undefined, heute: string): number | null {
  return geburtsjahr && geburtsjahr > 1900 ? Number(heute.slice(0, 4)) - geburtsjahr : null
}

/** Veränderung gegenüber dem ersten Wert der letzten 90 Tage, z. B. „+3 seit 25.08.“ */
function verlauf(l: { datum: string; wert: number }[] | undefined, heute: string, n = 0): string {
  if (!l || l.length < 2) return ""
  const ab = new Date(Date.parse(heute + "T12:00:00Z") - 90 * 86400000).toISOString().slice(0, 10)
  const erster = l.find((x) => x.datum >= ab) ?? l[0]
  const letzterW = l[l.length - 1]
  if (erster === letzterW) return ""
  const diff = letzterW.wert - erster.wert
  return (diff >= 0 ? "+" : "−") + zahl(Math.abs(diff), n) + " seit " + erster.datum.slice(8, 10) + "." + erster.datum.slice(5, 7) + "."
}

function koerpergewicht(daten: Daten): number | null {
  const k = daten.koerper?.length ? daten.koerper[daten.koerper.length - 1].kg : null
  return k || daten.profil?.koerpergewicht_kg || null
}

/** Mittelwert der letzten n Tage (ohne heute) eines Uhrwerts aus den Tageswerten */
function mittelTage(daten: Daten, feld: "schlaf_min" | "ruhepuls" | "schritte", heute: string, n = 7): number | null {
  const tage = Object.entries(alleTage(daten))
    .filter(([d]) => d < heute)
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .slice(0, n)
    .map(([, t]) => t[feld])
    .filter((x): x is number => typeof x === "number" && x > 0)
  return tage.length >= 3 ? tage.reduce((a, b) => a + b, 0) / tage.length : null
}

const leer = (id: string, name: string, text: string): Kennzahl => ({
  id,
  name,
  wert: "",
  stufe: null,
  text,
})

/** Alle Bereiche mit Kennzahlen. uhr: Werte der Uhr (oder null), heute: Datum. reha: Sprünge und Liegestütze weglassen. */
export function fitnessBewertung(daten: Daten, uhr: UhrWerte | null, heute: string, reha = false): Bereich[] {
  const f = daten.fitness
  const wer = person(daten)
  const alter = alterAm(wer.geburtsjahr, heute)
  const aus: Bereich[] = []

  // Ausdauer
  const vo2 = uhr?.vo2max ?? letzter(f, "vo2max")?.wert
  const fa = uhr?.fitnessalter ?? letzter(f, "fitnessalter")?.wert
  const ausdauer: Kennzahl[] = []
  ausdauer.push(
    vo2
      ? {
          id: "vo2max",
          name: "VO2max",
          wert: zahl(vo2) + " ml/kg/min",
          stufe: null,
          text: "Der stärkste einzelne Gesundheitsmarker. " + (verlauf(f?.werte?.vo2max, heute) || "Der Verlauf füllt sich mit der Zeit."),
        }
      : leer("vo2max", "VO2max", "Kommt von der Uhr; ohne Uhr unten eintragen."),
  )
  if (fa) {
    const d = alter !== null ? fa - alter : null
    ausdauer.push({
      id: "fitnessalter",
      name: "Fitnessalter",
      wert: zahl(fa) + " Jahre",
      ...(d === null || alter === null
        ? { stufe: null }
        : skala(d, -15, 10, [[-9.95, "blau"], [-2.95, "gruen"], [3.05, "gelb"], [Infinity, "rot"]], [[-10, String(alter - 10)], [-3, String(alter - 3)], [3, String(alter + 3)]], true)),
      text:
        (d === null
          ? "Für den Vergleich fehlt dein Geburtsjahr."
          : d <= -3
            ? zahl(-d) + " Jahre jünger als du: Deine Ausdauer liegt über dem Schnitt deines Alters."
            : d <= 3
              ? "Etwa dein Alter: Ausdauer im Schnitt deines Alters."
              : zahl(d) + " Jahre älter als du: Ausdauertraining lohnt sich besonders.") +
        (d !== null ? " Die Grenzen (3 und 10 Jahre) sind eine Orientierung, keine Norm." : ""),
    })
  } else ausdauer.push(leer("fitnessalter", "Fitnessalter", "Kommt von der Uhr; ohne Uhr unten eintragen."))
  aus.push({ id: "ausdauer", name: "Ausdauer", kennzahlen: ausdauer })

  // Kraft: geschätztes Maximum je Grundübung im Verhältnis zum Körpergewicht
  const kg = koerpergewicht(daten)
  const kraft: Kennzahl[] = []
  if (!reha) {
    for (const [id, name] of [
      ["kniebeuge_lh", "Kniebeuge"],
      ["bankdruecken_lh", "Bankdrücken"],
      ["kreuzheben_lh", "Kreuzheben"],
      ["schulterdruecken_lh", "Schulterdrücken"],
    ] as const) {
      const m = maximum(daten, id)
      if (!m) continue
      kraft.push({
        id,
        name,
        wert: zahl(m.kg, m.kg % 1 ? 1 : 0) + " kg" + (kg ? " · " + zahl(m.kg / kg, 2) + " × Körpergewicht" : ""),
        stufe: null,
        text: m.quelle === "max" ? "Eingetragenes oder geschätztes Maximum." : "Aus deinen letzten Sätzen geschätzt.",
      })
    }
    const lg = letzter(f, "liegestuetze")
    const mann = wer.geschlecht === "m"
    kraft.push(
      lg
        ? {
            id: "liegestuetze",
            name: "Liegestütze am Stück",
            wert: lg.wert + " Wdh",
            ...(mann ? skala(lg.wert, 0, 60, [[11, "rot"], [21, "gelb"], [40, "gruen"], [Infinity, "blau"]], [11, 21, 40]) : { stufe: null }),
            text: mann
              ? "Je mehr am Stück, desto seltener waren Herz-Kreislauf-Ereignisse; ab 40 am seltensten, deutlich seltener als unter 10 (Yang et al. 2019, Männer)."
              : "Verlauf; Vergleichswerte gibt es nur für Männer.",
          }
        : leer("liegestuetze", "Liegestütze am Stück", "Unten eintragen."),
    )
  }
  const gk = letzter(f, "griffkraft_kg")
  kraft.push(
    gk
      ? {
          id: "griffkraft_kg",
          name: "Griffkraft",
          wert: zahl(gk.wert) + " kg",
          stufe: null,
          text: "Geringe Griffkraft geht mit höherem Sterberisiko einher. " + (verlauf(f?.werte?.griffkraft_kg, heute) || "Verlauf folgt."),
        }
      : leer("griffkraft_kg", "Griffkraft", "Braucht ein Handdynamometer; unten eintragen."),
  )
  aus.push({ id: "kraft", name: "Kraft", kennzahlen: kraft })

  // Schnellkraft: nur Verlauf
  if (!reha) {
    const sk: Kennzahl[] = []
    for (const id of ["weitsprung_cm", "sprunghoehe_cm"] as const) {
      const m = MESSWERTE.find((x) => x.id === id)!
      const l = letzter(f, id)
      sk.push(
        l
          ? {
              id,
              name: m.name,
              wert: zahl(l.wert) + " cm",
              stufe: null,
              text: "Verlässliche Vergleichswerte für Erwachsene gibt es nicht, es zählt dein eigener Verlauf. " + verlauf(f?.werte?.[id], heute),
            }
          : leer(id, m.name, "Unten eintragen."),
      )
    }
    aus.push({ id: "schnellkraft", name: "Schnellkraft", kennzahlen: sk })
  }

  // Bewegung im Alltag
  const schritte = uhr?.schritte_wochenschnitt ?? mittelTage(daten, "schritte", heute)
  const alt60 = alter !== null && alter >= 60
  const [mittel, gut, plateau] = alt60 ? [4000, 6000, 8000] : [5000, 8000, 10000]
  const bewegung: Kennzahl[] = [
    schritte
      ? {
          id: "schritte",
          name: "Schritte am Tag",
          wert: (Math.round(schritte / 100) * 100).toLocaleString("de-DE") + " im Schnitt",
          ...skala(schritte, 0, plateau + 4000, [[mittel, "rot"], [gut, "gelb"], [plateau, "gruen"], [Infinity, "blau"]], [[mittel, mittel / 1000 + "k"], [gut, gut / 1000 + "k"], [plateau, plateau / 1000 + "k"]]),
          text: "Das Sterberisiko sinkt bis etwa " + (alt60 ? "6.000 bis 8.000" : "8.000 bis 10.000") + " Schritte am Tag, darüber kaum noch (Paluch et al. 2022).",
        }
      : leer("schritte", "Schritte am Tag", "Kommt von der Uhr oder Health Connect."),
  ]
  if (typeof uhr?.intensiv_min === "number")
    bewegung.push({
      id: "intensiv",
      name: "Intensitätsminuten diese Woche",
      wert: uhr.intensiv_min + " von " + (uhr.intensiv_ziel_woche || 150),
      stufe: null,
      text: "Die WHO empfiehlt 150 bis 300 Minuten mäßige oder 75 bis 150 Minuten intensive Bewegung je Woche; die Woche läuft noch.",
    })
  aus.push({
    id: "bewegung",
    name: "Bewegung im Alltag",
    kennzahlen: bewegung,
  })

  // Erholung
  const puls = uhr?.ruhepuls_7_tage ?? mittelTage(daten, "ruhepuls", heute)
  const schlaf = mittelTage(daten, "schlaf_min", heute)
  const erholung: Kennzahl[] = [
    puls
      ? {
          id: "ruhepuls",
          name: "Ruhepuls",
          wert: Math.round(puls) + " Schläge/min",
          ...skala(puls, 35, 100, [[50, "blau"], [60, "gruen"], [81, "gelb"], [Infinity, "rot"]], [50, 60, 80], true),
          text: "Ein niedriger Ruhepuls spricht für ein trainiertes Herz, unter 50 ist typisch für Ausdauertrainierte; über 80 steigt das Risiko deutlich (Zhang et al. 2016).",
        }
      : leer("ruhepuls", "Ruhepuls", "Kommt von der Uhr."),
    schlaf
      ? {
          id: "schlaf",
          name: "Schlaf",
          wert: Math.floor(schlaf / 60) + " h " + Math.round(schlaf % 60) + " min im Schnitt",
          ...skala(schlaf, 240, 660, [[360, "rot"], [420, "gelb"], [541, "gruen"], [Infinity, "gelb"]], [[360, "6 h"], [420, "7 h"], [540, "9 h"]]),
          text: "Für Erwachsene werden mindestens 7 Stunden empfohlen; ob mehr als 9 Stunden nützt, ist offen, deshalb wird die Skala dort wieder gelb (Watson et al. 2015).",
        }
      : leer("schlaf", "Schlaf", "Kommt von der Uhr."),
  ]
  if (uhr?.hrv_woche && uhr.hrv_basis)
    erholung.push({
      id: "hrv",
      name: "HRV",
      wert: uhr.hrv_woche + " ms (dein Grundwert " + uhr.hrv_basis + ")",
      stufe: null,
      text: "Zählt nur im Vergleich mit dir selbst: deutlich unter dem Grundwert heißt oft Stress oder ein Infekt.",
    })
  aus.push({ id: "erholung", name: "Erholung", kennzahlen: erholung })

  // Körper
  const groesse = f?.groesse_cm
  const taille = letzter(f, "taille_cm")
  const koerper: Kennzahl[] = [
    kg
      ? {
          id: "gewicht",
          name: "Gewicht",
          wert: zahl(kg, kg % 1 ? 1 : 0) + " kg",
          stufe: null,
          text: "Allein wenig aussagekräftig, erst mit Größe und Taille.",
        }
      : leer("gewicht", "Gewicht", "Unter Fortschritt, Gewicht eintragen."),
  ]
  if (taille && groesse) {
    const q = taille.wert / groesse
    koerper.push({
      id: "taille_groesse",
      name: "Taille zu Größe",
      wert: zahl(q, 2),
      ...skala(q, 0.35, 0.7, [[0.4, "gelb"], [0.5, "gruen"], [0.6, "gelb"], [Infinity, "rot"]], [0.4, 0.5, 0.6], true),
      text: "Die Taille sollte weniger als die halbe Körpergröße messen, ab 0,6 ist das Risiko hoch (NICE 2022). Sehr niedrige Werte können auf Untergewicht hinweisen. Bei viel Muskulatur besser als der BMI.",
    })
  } else koerper.push(leer("taille_groesse", "Taille zu Größe", "Braucht Größe und Taillenumfang, beides unten eintragen."))
  if (kg && groesse)
    koerper.push({
      id: "bmi",
      name: "BMI",
      wert: zahl(kg / (groesse / 100) ** 2, 1),
      stufe: null,
      text: "Bei viel Muskelmasse überschätzt der BMI das Fett; ohne Stufe.",
    })
  aus.push({ id: "koerper", name: "Körper", kennzahlen: koerper })

  // Beweglichkeit: letzter Wert je Test
  const bew: Kennzahl[] = []
  for (const t of TESTS) {
    const m = [...daten.messungen].reverse().find((x) => x.test === t.id)
    if (!m) continue
    // bei zwei Seiten zählt die schwächere
    const w = t.seiten && typeof m.rechts === "number" ? (t.hoeherBesser ? Math.min(m.wert, m.rechts) : Math.max(m.wert, m.rechts)) : m.wert
    const b = bewerte(t, w)
    const stufe: Farbe = b === "gut" ? "gruen" : b === "mittel" ? "gelb" : "rot"
    // Skala nur für Messwerte, nicht für Stufen zum Antippen; die Farbe kommt aus bewerte
    const lo = Math.min(t.gut, t.schwach)
    const hi = Math.max(t.gut, t.schwach)
    const span = hi - lo || 1
    const sk: Skala | undefined =
      t.einheit === "stufe"
        ? undefined
        : {
            min: lo - span,
            max: hi + span,
            wert: w,
            abschnitte: t.hoeherBesser
              ? [
                  { bis: t.schwach, farbe: "rot" },
                  { bis: t.gut, farbe: "gelb" },
                  { bis: Infinity, farbe: "gruen" },
                ]
              : [
                  { bis: t.gut + 1e-9, farbe: "gruen" },
                  { bis: t.schwach + 1e-9, farbe: "gelb" },
                  { bis: Infinity, farbe: "rot" },
                ],
            marken: [lo, hi].map((x) => ({ bei: x, text: zahl(x) })),
            umgekehrt: !t.hoeherBesser,
          }
    bew.push({
      id: t.id,
      name: t.name,
      wert: zahl(w) + " " + t.einheit,
      stufe,
      skala: sk,
      text: t.bereich,
    })
  }
  aus.push({
    id: "beweglichkeit",
    name: "Beweglichkeit",
    kennzahlen: bew.length ? bew : [leer("tests", "Beweglichkeitstests", "Noch keine Werte: unter Fortschritt, Mobilität, die Tests machen.")],
  })
  return aus
}

/** Kurzfassung für die Karte: wie viele Kennzahlen je Farbe, wie viele fehlen */
export function fitnessUebersicht(b: Bereich[]): Record<Farbe, number> & { fehlt: number } {
  const alle = b.flatMap((x) => x.kennzahlen)
  const n = (f: Farbe) => alle.filter((k) => k.stufe === f).length
  return { rot: n("rot"), gelb: n("gelb"), gruen: n("gruen"), blau: n("blau"), fehlt: alle.filter((k) => !k.wert).length }
}
