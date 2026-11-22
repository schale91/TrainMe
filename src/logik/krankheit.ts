// Krankheit (Wunsch von Alex, 22.11.2026, nur für sein Profil, nicht in der Reha): krank melden mit Hals-Check,
// leichte Einheit bei reiner Erkältung, Rückkehr in Stufen und Brücke statt Testtag in der ersten Woche danach.
// Schon-Einheiten verbrauchen keinen Plantag: Der eigene Plan geht danach genau dort weiter, wo er stand.
//
// Grundlagen: Moderates Training während einer Erkältung (Rhinovirus) veränderte Schwere und Dauer nicht (Weidner et al.
// 1998, Med Sci Sports Exerc 30). Bei Fieber und Allgemeinsymptomen rät die Sportmedizin zur Pause und schrittweisen
// Rückkehr (IOC-Konsens zu Atemwegsinfekten, Schwellnus et al. 2022, Br J Sports Med 56). Kraft hält sich bis etwa drei
// Wochen ohne Training (McMaster et al. 2013, Sports Med 43). Die Stufen selbst sind eine Faustregel, keine Studienvorgabe.

import { abrunden } from "./gewichte"
import { rehaAktiv } from "./reha"
import type { Daten, Einheit, Krankheit, Platz, Schonung, Uebung } from "./typen"

export const SYMPTOME = [
  { id: "fieber", text: "Fieber (ab 38 °C)" },
  { id: "glieder", text: "Gliederschmerzen oder Schüttelfrost" },
  { id: "brust", text: "Husten mit Druck auf der Brust oder Atemnot" },
  { id: "magen", text: "Magen-Darm (Übelkeit, Erbrechen, Durchfall)" },
] as const

export const WARNZEICHEN =
  "Brustschmerz, Atemnot, Herzstolpern oder ein ungewöhnlich hoher Ruhepuls während oder nach dem Infekt: nicht trainieren und ärztlich abklären lassen."

const TAG = 86400000
const plus = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)
const tageZwischen = (a: string, b: string) => Math.round((Date.parse(b + "T12:00:00Z") - Date.parse(a + "T12:00:00Z")) / TAG)

/** Stufe einer Schon-Einheit: Anteil der Sätze, Faktor fürs Gewicht, mehr Wiederholungen im Tank */
export interface Stufe extends Schonung {
  anteil: number
  faktor: number
  rirPlus: number
  /** mindestens so viele im Tank */
  rirMin?: number
}

/** Eingeschaltet (Profil) und nicht in der Reha */
export function krankheitAn(daten: Pick<Daten, "profil">): boolean {
  return !!daten.profil && !!daten.profil.krankheit && !rehaAktiv(daten.profil)
}

const letzte = (daten: Pick<Daten, "krankheiten">): Krankheit | undefined => (daten.krankheiten || [])[(daten.krankheiten || []).length - 1]

/** Die laufende Krankheit an diesem Tag, sonst null */
export function aktiveKrankheit(daten: Pick<Daten, "profil" | "krankheiten">, datum: string): Krankheit | null {
  if (!krankheitAn(daten)) return null
  const k = letzte(daten)
  return k && !k.fit_ab && k.seit <= datum ? k : null
}

/**
 * Krank melden oder die Symptome der laufenden Krankheit ändern. Ein Ja bei einem der Allgemeinsymptome macht daraus
 * „allgemein“ (Pause); das bleibt, auch wenn es später besser wird, weil es die Rückkehr bestimmt.
 */
export function krankMelden(d: Daten, datum: string, symptome: string[]): void {
  const allgemein = symptome.length > 0
  const fieber = symptome.indexOf("fieber") >= 0
  const k = aktiveKrankheit(d, datum)
  const liste = [...(d.krankheiten || [])]
  if (k) {
    liste[liste.length - 1] = { ...k, art: k.art === "allgemein" || allgemein ? "allgemein" : "hals", ...(k.fieber || fieber ? { fieber: true } : {}) }
  } else {
    liste.push({ seit: datum, art: allgemein ? "allgemein" : "hals", ...(fieber ? { fieber: true } : {}) })
  }
  d.krankheiten = liste
}

/** Wie geht es heute? */
export function verlaufMelden(d: Daten, datum: string, wert: "schlechter" | "gleich" | "besser"): void {
  const k = aktiveKrankheit(d, datum)
  if (!k) return
  const liste = [...(d.krankheiten || [])]
  liste[liste.length - 1] = { ...k, verlauf: { ...(k.verlauf || {}), [datum]: wert } }
  d.krankheiten = liste
}

/** Wieder fit ab diesem Tag (heute geht schon die erste Rückkehr-Einheit) */
export function wiederFit(d: Daten, datum: string): void {
  const k = aktiveKrankheit(d, datum)
  if (!k) return
  const liste = [...(d.krankheiten || [])]
  liste[liste.length - 1] = { ...k, fit_ab: datum > k.seit ? datum : plus(k.seit, 1) }
  d.krankheiten = liste
}

/** Versehentlich krank gemeldet: die laufende Meldung entfernen */
export function krankZuruecknehmen(d: Daten, datum: string): void {
  if (!aktiveKrankheit(d, datum)) return
  d.krankheiten = (d.krankheiten || []).slice(0, -1)
}

/** Kranke Tage einer Krankheit (bis gestern, wenn sie noch läuft) */
export function krankeTage(k: Krankheit, heute: string): number {
  return Math.max(1, tageZwischen(k.seit, k.fit_ab ?? plus(heute, 1)))
}

/**
 * Rückkehr-Stufen nach einer Krankheit (Faustregel): Nur Erkältung oberhalb des Halses bis 3 Tage: eine Einheit mit
 * einem Viertel weniger Sätzen und einer Wiederholung mehr im Tank. Länger oder mit Fieber/Allgemeinsymptomen: halbe
 * Sätze, 10 % leichter, 2 mehr im Tank; dann drei Viertel, 5 % leichter, 1 mehr; dann wieder normal.
 */
export function rueckkehrStufen(k: Krankheit, heute: string): Stufe[] {
  const schwer = k.art === "allgemein" || !!k.fieber || krankeTage(k, heute) > 3
  if (!schwer) return [{ art: "rueckkehr", stufe: 1, anteil: 0.75, faktor: 1, rirPlus: 1 }]
  return [
    { art: "rueckkehr", stufe: 1, anteil: 0.5, faktor: 0.9, rirPlus: 2 },
    { art: "rueckkehr", stufe: 2, anteil: 0.75, faktor: 0.95, rirPlus: 1 },
  ]
}

/** Leichte Einheit während einer reinen Erkältung: halbe Sätze, 15 % leichter, mindestens 3 im Tank, keine Tests */
export const LEICHT: Stufe = { art: "leicht", stufe: 1, anteil: 0.5, faktor: 0.85, rirPlus: 2, rirMin: 3 }
/** Brücke statt Testtag in der ersten Woche nach der Krankheit: alle Sätze, 10 % leichter, 2 mehr im Tank, kein AMRAP */
export const BRUECKE: Stufe = { art: "bruecke", stufe: 1, anteil: 1, faktor: 0.9, rirPlus: 2 }
/** So lange nach „wieder fit“ kommt kein Testtag */
export const TESTSPERRE_TAGE = 7

/**
 * Stand nach der letzten Krankheit an diesem Tag: noch offene Rückkehr-Stufen (gemacht zählt jede Rückkehr-Einheit seit
 * fit_ab) und bis wann Testtage durch eine Brücke ersetzt werden. null, wenn nichts mehr gilt.
 */
export function nachKrankheit(daten: Pick<Daten, "profil" | "krankheiten" | "erledigt">, datum: string): { krankheit: Krankheit; offen: Stufe[]; testAb: string; brueckeFrei: boolean } | null {
  if (!krankheitAn(daten)) return null
  const k = letzte(daten)
  // auch vor fit_ab (heute „wieder fit“ gemeldet, fit ab morgen): Die Vorschau zeigt dann schon die Rückkehr
  if (!k || !k.fit_ab) return null
  // Rückkehr-Einheiten und eine Brücke zählen als Stufe
  const seither = daten.erledigt.filter((e) => (e.schon?.art === "rueckkehr" || e.schon?.art === "bruecke") && e.datum >= k.fit_ab!)
  const offen = rueckkehrStufen(k, datum).slice(seither.length)
  const testAb = plus(k.fit_ab, TESTSPERRE_TAGE)
  const brueckeFrei = !seither.some((e) => e.schon?.art === "bruecke")
  return offen.length || (datum < testAb && brueckeFrei) ? { krankheit: k, offen, testAb, brueckeFrei } : null
}

const AMRAP = /\bamrap\b|so viele wie m(ö|oe)glich|^max\.?(\s*wdh\.?)?$/i

/**
 * Eine Einheit schonend umbauen. Rückkehr-Einheiten bleiben der Plantag (reduziert, der Plan geht weiter); leichte
 * Einheiten und die Brücke verbrauchen keinen Plantag, der Tag kommt danach noch einmal. lasten: Gewichte je Übung.
 */
export function schonEinheit(e: Einheit, s: Stufe, lasten: (u: Uebung) => number[]): Einheit {
  const titel = s.art === "leicht" ? "Leicht trotz Erkältung" : s.art === "bruecke" ? "Aufbau statt Test" : "Rückkehr " + s.stufe
  const grund =
    s.art === "leicht"
      ? "Erkältung: halbe Sätze, leichter, mindestens 3 im Tank. Wird es schlechter, aufhören."
      : s.art === "bruecke"
        ? "Kurz nach der Krankheit kein Maximaltest, sonst wird das Maximum zu niedrig gemessen. Der Testtag kommt danach."
        : "Rückkehr nach Krankheit, Stufe " + s.stufe + ": " + (s.anteil < 1 ? "weniger Sätze, " : "") + (s.faktor < 1 ? "etwas leichter, " : "") + s.rirPlus + " mehr im Tank."
  const plaetze: Platz[] = e.plaetze.map((p) => {
    const v = p.vorgabe
    const amrap = AMRAP.test(p.plantext || "")
    const rir = Math.min(5, Math.max(s.rirMin ?? 0, v.rir + s.rirPlus))
    const last = v.last !== null && p.uebung.belastung === "gewicht" && s.faktor < 1 ? (abrunden(v.last * s.faktor, lasten(p.uebung)) ?? Math.round(v.last * s.faktor * 2) / 2) : v.last
    const wdh = amrap ? { wdh_von: Math.max(1, v.wdh_von - 1), wdh_bis: Math.max(1, v.wdh_von - 1) } : {}
    const saetze = Math.max(1, Math.round(v.saetze * s.anteil))
    return {
      ...p,
      // Der Text aus dem Plan („4 x 6“, „AMRAP“) stimmt nicht mehr, wenn sich Sätze oder Wiederholungen ändern
      ...(amrap || saetze !== v.saetze ? { plantext: undefined } : {}),
      vorgabe: { ...v, ...wdh, saetze, rir, last, rir_fest: true, begruendung: grund + (v.begruendung ? " " + v.begruendung : "") },
    }
  })
  const { plan_nr, ...rest } = e
  return {
    ...rest,
    ...(s.art === "rueckkehr" && plan_nr !== undefined ? { plan_nr } : {}),
    titel: titel + " · " + e.titel,
    minuten: Math.max(15, Math.round(e.minuten * (0.4 + 0.6 * s.anteil))),
    plaetze,
    hinweise: [grund, ...e.hinweise],
    schon: { art: s.art, stufe: s.stufe, ...(plan_nr !== undefined ? { nr: plan_nr } : {}) },
  }
}

/** Fällt dieser Tag in eine Krankheit (bis zum Tag vor fit_ab, laufende bis heute)? */
export function warKrank(daten: Pick<Daten, "krankheiten">, datum: string, heute: string): boolean {
  return (daten.krankheiten || []).some((k) => datum >= k.seit && datum < (k.fit_ab ?? plus(heute, 1)))
}

/** Berührt eine Krankheit diese Woche (Montag bis Sonntag)? */
export function wocheMitKrankheit(daten: Pick<Daten, "krankheiten">, montag: string, heute: string): boolean {
  const ende = plus(montag, 7)
  return (daten.krankheiten || []).some((k) => k.seit < ende && (k.fit_ab ?? plus(heute, 1)) > montag)
}

/** Tage, deren Training wegen Krankheit nicht zählen soll (kranke Tage und Schon-Einheiten) */
export function schonTage(daten: Pick<Daten, "krankheiten" | "erledigt">, heute: string): (datum: string) => boolean {
  const schon = new Set(daten.erledigt.filter((e) => e.schon).map((e) => e.datum))
  return (d) => schon.has(d) || warKrank(daten, d, heute)
}
