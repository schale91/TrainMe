// Wochenrückblick: Was in der Woche trainiert wurde und was daraus folgt. Sätze je Muskelgruppe, Trend je Übung,
// Zeit gegen das Budget, und daraus Vorschläge, die sich mit einem Tipp übernehmen lassen (ein Satz mehr, Variante
// wechseln, neues Maximum, mehr Zeit je Trainingstag).
//
// Sätze je Muskelgruppe: Für den Muskelaufbau bringen mindestens 10 Sätze je Muskelgruppe und Woche mehr als weniger
// (Meta-Analyse Schoenfeld, Ogborn & Krieger 2017, J Sports Sci 35: 1073–1082); für Trainierte liegen 12 bis 20 im
// günstigen Bereich (Übersicht Baz-Valle et al. 2022, J Hum Kinet 81: 199–210). Gezählt wird ein Satz voll für den
// Zielmuskel der Übung und halb für die Muskeln, die deutlich mitarbeiten (siehe anteil).

import { uebung } from "../daten/uebungen/index"
import { idVon, mitErsatz, offenePlanTage } from "./eigenerPlan"
import { satzZahl } from "./dropsatz"
import { belastbaresE1rm, plateau } from "./progression"
import type { Daten, Muskel, Protokoll, Uebung } from "./typen"

export const MUSKELGRUPPEN: { id: string; name: string; muskeln: Muskel[] }[] = [
  { id: "brust", name: "Brust", muskeln: ["brust"] },
  { id: "ruecken", name: "Rücken", muskeln: ["latissimus", "oberer_ruecken", "trapez"] },
  { id: "schultern", name: "Schultern", muskeln: ["schulter_vorn", "schulter_seitlich", "schulter_hinten", "rotatorenmanschette"] },
  { id: "bizeps", name: "Bizeps", muskeln: ["bizeps"] },
  { id: "trizeps", name: "Trizeps", muskeln: ["trizeps"] },
  { id: "quadrizeps", name: "Oberschenkel vorn", muskeln: ["quadrizeps"] },
  { id: "beinbeuger", name: "Oberschenkel hinten", muskeln: ["beinbeuger"] },
  { id: "gesaess", name: "Gesäß", muskeln: ["gesaess", "gesaess_mittel"] },
  { id: "waden", name: "Waden", muskeln: ["waden"] },
  { id: "bauch", name: "Bauch", muskeln: ["bauch", "schraege_bauch"] },
]

/** Reihenfolge der Vorschläge für mehr Sätze: große Muskelgruppen vor kleinen */
const VORRANG = ["brust", "ruecken", "quadrizeps", "beinbeuger", "schultern", "gesaess", "bizeps", "trizeps", "waden", "bauch"]
/** Ab so vielen Sätzen je Muskelgruppe und Woche gilt das Volumen für den Muskelaufbau als ausreichend */
export const SAETZE_MIN = 10
/** Obere Marke der Anzeige (günstiger Bereich für Trainierte bis etwa 20) */
export const SAETZE_BIS = 20
/** Abgelehnte Vorschläge kommen frühestens nach so vielen Tagen wieder */
export const RUHE_TAGE = 28
/** Nach „mehr Sätze“ für eine Muskelgruppe kommt für sie so lange kein weiterer Vorschlag */
const WIRKT_TAGE = 21
/** Mehr als so viele Sätze je Übung bringen wenig: Dann lieber eine weitere Übung als noch ein Satz */
const SAETZE_JE_UEBUNG = 5
/** Höchstens so viele Sätze mehr je Übung in einem Schritt */
const PLUS_JE_SCHRITT = 2
/** Höchstens so viele Sätze je Woche mehr in einem Schritt: Große Sprünge im Umfang lieber verteilen */
const SCHRITT_JE_WOCHE = 4
/**
 * Höchstens so viele Sätze für eine Muskelgruppe an einem Trainingstag. Bei gleichem Wochenumfang ist es für den
 * Muskelaufbau gleich, auf wie viele Tage er sich verteilt (Meta-Analyse Schoenfeld, Grgic & Krieger 2019, J Sports
 * Sci 37: 1286–1295). Die Verteilung ist deshalb ein Mittel, die einzelnen Sätze gut zu halten: Viele Sätze für
 * denselben Muskel an einem Tag werden gegen Ende schwächer. Die Zahl selbst ist eine Faustregel, keine Messgröße.
 */
const SAETZE_JE_TAG = 10

const TAG = 86400000
const plus = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)
export const montagVon = (d: string) => plus(d, -((new Date(d + "T12:00:00Z").getUTCDay() + 6) % 7))
const tageZwischen = (a: string, b: string) => Math.round((Date.parse(b + "T12:00:00Z") - Date.parse(a + "T12:00:00Z")) / TAG)
const rund1 = (x: number) => Math.round(x * 10) / 10
const median = (x: number[]) => {
  const s = [...x].sort((a, b) => a - b)
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2
}

/** Hilfsmuskeln, die bei einem Bewegungsmuster wirklich mitarbeiten (nicht nur halten): zählen halb */
const SYNERGISTEN: Partial<Record<Uebung["muster"], Muskel[]>> = {
  ziehen_horizontal: ["bizeps", "schulter_hinten"],
  ziehen_vertikal: ["bizeps"],
  kniebeuge: ["gesaess"],
  einbeinig: ["gesaess"],
  hueftstreckung: ["gesaess", "beinbeuger"],
}

/**
 * Gewicht einer Übung für eine Muskelgruppe: 1 für den Zielmuskel (der erste Hauptmuskel), 0,5 für die weiteren
 * Hauptmuskeln und für mitarbeitende Hilfsmuskeln (Bizeps beim Rudern), 0 für alles andere. Haltemuskeln zählen
 * nicht: Der Latissimus stabilisiert beim Bankdrücken, wird davon aber nicht trainiert.
 */
export function anteil(u: Pick<Uebung, "muskeln" | "sekundaer" | "muster">, gruppe: { muskeln: Muskel[] }): number {
  const in_ = (m: Muskel) => gruppe.muskeln.indexOf(m) >= 0
  if (u.muskeln.length && in_(u.muskeln[0])) return 1
  if (u.muskeln.slice(1).some(in_)) return 0.5
  const syn = SYNERGISTEN[u.muster] || []
  if ((u.sekundaer || []).some((m) => in_(m) && syn.indexOf(m) >= 0)) return 0.5
  return 0
}

const kraftUebung = (id: string): Uebung | undefined => {
  const u = uebung(id)
  return u && u.art === "kraft" ? u : undefined
}
/** Gültige Sätze; ein Dropsatz zählt je Stufe einen weiteren Satz (wie in den Studien verglichen) */
const gueltig = (p: Protokoll) => p.saetze.filter((s) => s.wdh > 0 || (s.sekunden ?? 0) > 0).reduce((n, s) => n + satzZahl(s), 0)

export interface WochenZahl {
  montag: string
  /** Tage mit Krafttraining */
  einheiten: number
  saetze: number
  /** Sätze je Muskelgruppe (Hilfsmuskeln halb) */
  gruppen: Record<string, number>
}

/** Was in einer Woche (Montag bis Sonntag) an Kraft trainiert wurde */
export function wochenZahlen(daten: Pick<Daten, "protokoll">, montag: string): WochenZahl {
  const ende = plus(montag, 7)
  const gruppen: Record<string, number> = Object.fromEntries(MUSKELGRUPPEN.map((g) => [g.id, 0]))
  const tage = new Set<string>()
  let saetze = 0
  for (const p of daten.protokoll) {
    if (p.datum < montag || p.datum >= ende) continue
    const u = kraftUebung(p.uebung)
    const n = gueltig(p)
    if (!u || !n) continue
    tage.add(p.datum)
    saetze += n
    for (const g of MUSKELGRUPPEN) gruppen[g.id] += n * anteil(u, g)
  }
  return { montag, einheiten: tage.size, saetze, gruppen }
}

export interface Trend {
  uebung: string
  name: string
  /** geschätztes Maximum der letzten bis zu sechs Einheiten, älteste zuerst */
  werte: { datum: string; wert: number }[]
  /** plan: das Gewicht gibt der eigene Plan in Prozent vor, die Schätzung schwankt mit dem Plan */
  status: "steigt" | "haelt" | "faellt" | "plateau" | "plan"
}

const nurBand = (u: Uebung) => u.geraete.length > 0 && u.geraete.every((g) => g.indexOf("band") >= 0 || g.indexOf("mini_band") >= 0)
/** Nur mit Gewicht in kg sinnvoll: nicht Bänder (Last = Stufe) und keine Würfe oder Sprünge */
const mitMaximum = (u: Uebung) => u.belastung === "gewicht" && u.muster.indexOf("schnellkraft") !== 0 && !nurBand(u)

/** Übungen, deren Gewicht der eigene Plan als Prozent vom Maximum vorgibt: dort sagt ein Plateau nichts */
function prozentUebungen(daten: Pick<Daten, "eigenerPlan">): Set<string> {
  const s = new Set<string>()
  for (const t of daten.eigenerPlan?.tage || []) for (const pu of t.uebungen) if (pu.prozent) s.add(idVon(pu))
  return s
}

/** Trend je Gewichtsübung, die in der Woche trainiert wurde (mindestens drei Einheiten im Verlauf) */
export function trends(daten: Pick<Daten, "protokoll" | "eigenerPlan">, montag: string): Trend[] {
  const ende = plus(montag, 7)
  const aus: Trend[] = []
  const ids = Array.from(new Set(daten.protokoll.filter((p) => p.datum >= montag && p.datum < ende).map((p) => p.uebung)))
  const nachPlan = prozentUebungen(daten)
  for (const id of ids) {
    const u = kraftUebung(id)
    if (!u || !mitMaximum(u)) continue
    // je Tag ein Wert (zwei Einträge am selben Tag zählen zusammen)
    const jeTag = new Map<string, Protokoll>()
    for (const p of daten.protokoll) {
      if (p.uebung !== id || p.datum >= ende) continue
      const da = jeTag.get(p.datum)
      jeTag.set(p.datum, da ? { ...da, saetze: [...da.saetze, ...p.saetze] } : p)
    }
    const verlauf = Array.from(jeTag.values())
      .filter((p) => belastbaresE1rm(p.saetze) > 0)
      .sort((a, b) => (a.datum < b.datum ? -1 : 1))
    if (verlauf.length < 3) continue
    const werte = verlauf.slice(-6).map((p) => ({ datum: p.datum, wert: rund1(belastbaresE1rm(p.saetze)) }))
    const letzt = werte[werte.length - 1].wert
    const davor = (werte[werte.length - 2].wert + werte[werte.length - 3].wert) / 2
    let status: Trend["status"] = letzt > davor * 1.01 ? "steigt" : letzt < davor * 0.97 ? "faellt" : "haelt"
    if (nachPlan.has(id)) status = "plan"
    else if (plateau(verlauf)) status = "plateau"
    aus.push({ uebung: id, name: u.name, werte, status })
  }
  const rang = { plateau: 0, faellt: 1, haelt: 2, steigt: 3, plan: 4 }
  return aus.sort((a, b) => rang[a.status] - rang[b.status] || b.werte[b.werte.length - 1].wert - a.werte[a.werte.length - 1].wert)
}

export type Vorschlag =
  /**
   * Muskelgruppe unter dem Zielvolumen: mehr Sätze bei Übungen des eigenen Plans, so viele, dass die Lücke möglichst
   * schließt. teile: je Übung plus Sätze und wie oft sie in den nächsten zehn Plantagen vorkommt; mehr: was das je
   * Woche bringt; danach: Schnitt mit dem Vorschlag; tage: auf so viele der nächsten zehn Plantage verteilt sich das
   * Mehr; rest: warum es nicht bis zum Ziel reicht („schritt“: bewusst begrenzt, der nächste Schritt kommt später;
   * „plan“: der Plan hat nicht genug passende Übungen).
   */
  | { art: "saetze"; schluessel: string; gruppe: string; gruppenName: string; teile: SatzTeil[]; schnitt: number; mehr: number; danach: number; tage: number; rest: null | "schritt" | "plan" }
  /** Seit drei Einheiten kein neuer Bestwert: Variante wechseln */
  | { art: "tauschen"; schluessel: string; uebung: string; name: string }
  /** Eingetragenes Maximum überholt */
  | { art: "maximum"; schluessel: string; uebung: string; name: string; alt: number; neu: number }
  /** Einheiten dauern regelmäßig länger als das Zeitbudget */
  | { art: "zeit"; schluessel: string; ueber_min: number; budget: number; minuten_neu: number }

export interface SatzTeil {
  uebung: string
  name: string
  plus: number
  vorkommen: number
}

export interface Rueckblick {
  montag: string
  /** die Woche läuft noch */
  laufend: boolean
  woche: WochenZahl
  /** Ø Sätze je Muskelgruppe über die letzten bis zu vier abgeschlossenen Wochen mit Training */
  schnitt: Record<string, number>
  wochenImSchnitt: number
  trends: Trend[]
  /** Einheiten mit gemessener Zeit in der Woche: wie viele, und im Mittel wie viele Minuten über (+) oder unter (−) dem Budget */
  zeit: { einheiten: number; ueber_min: number } | null
  vorschlaege: Vorschlag[]
}

const halb = (x: number) => Math.round(x * 2) / 2

/** Rückblick auf die Woche ab montag. heute: für „läuft noch“ und für abgelehnte Vorschläge. */
export function rueckblick(daten: Daten, montag: string, heute: string): Rueckblick {
  const laufend = heute < plus(montag, 7)
  const woche = wochenZahlen(daten, montag)
  // Durchschnitt: abgeschlossene Wochen (die laufende würde den Schnitt nach unten ziehen), nur Wochen mit Training
  const letzte = laufend ? plus(montag, -7) : montag
  const wochen = [0, 1, 2, 3].map((k) => wochenZahlen(daten, plus(letzte, -7 * k))).filter((w) => w.einheiten > 0)
  const schnitt: Record<string, number> = {}
  for (const g of MUSKELGRUPPEN) schnitt[g.id] = wochen.length ? rund1(wochen.reduce((s, w) => s + w.gruppen[g.id], 0) / wochen.length) : 0
  const tr = trends(daten, montag)

  const ende = plus(montag, 7)
  const gemessen = daten.erledigt.filter((e) => e.datum >= montag && e.datum < ende && e.dauer_min && e.budget_min)
  const zeit = gemessen.length ? { einheiten: gemessen.length, ueber_min: Math.round(gemessen.reduce((s, e) => s + (e.dauer_min as number) - (e.budget_min as number), 0) / gemessen.length) } : null

  const profil = daten.profil
  const weg = daten.rueckblick?.weg || {}
  const ruht = (k: string) => !!weg[k] && tageZwischen(weg[k], heute) < RUHE_TAGE
  const vorschlaege: Vorschlag[] = []

  // 1. Neues Maximum
  const eingetragen = daten.maxwerte || {}
  const beste = new Map<string, number>()
  for (const p of daten.protokoll) {
    if (p.datum < montag || p.datum >= ende || !eingetragen[p.uebung]) continue
    const u = kraftUebung(p.uebung)
    if (!u || !mitMaximum(u)) continue
    // bis 10 Wiederholungen: je weniger, desto genauer die Schätzung
    const w = halb(belastbaresE1rm(p.saetze.filter((s) => s.last && s.wdh > 0 && s.wdh <= 10)))
    if (w > (beste.get(p.uebung) ?? 0)) beste.set(p.uebung, w)
  }
  for (const [id, neu] of beste) {
    const alt = eingetragen[id].kg
    const k = "maximum:" + id
    if (neu >= alt + 0.5 && !ruht(k)) vorschlaege.push({ art: "maximum", schluessel: k, uebung: id, name: uebung(id)!.name, alt, neu })
  }

  // 2. Muskelgruppen unter dem Zielvolumen (nur Ziel Muskelaufbau, eigener Plan, genug Wochen zum Urteilen)
  if (profil && profil.ziel === "muskelaufbau" && profil.planart === "eigen" && daten.eigenerPlan && wochen.length >= 2) {
    const kommend = offenePlanTage(daten, 10).slice(0, 10)
    const satzplus = daten.satzplus || {}
    const tageJeWoche = profil.woche.filter((t) => t.art === "training" && t.quelle !== "trainme").length
    // große Muskelgruppen zuerst: dort bringt mehr Volumen am meisten
    const wenig = [...MUSKELGRUPPEN].sort((a, b) => VORRANG.indexOf(a.id) - VORRANG.indexOf(b.id)).filter((g) => schnitt[g.id] < SAETZE_MIN)
    let n = 0
    for (const g of wenig) {
      const k = "saetze:" + g.id
      if (ruht(k) || n >= 3) continue
      // schon mehr Sätze für diese Gruppe unterwegs: erst wirken lassen
      const unterwegs = Object.entries(satzplus).some(([id, x]) => x.n > 0 && tageZwischen(x.seit, heute) < WIRKT_TAGE && !!uebung(id) && anteil(uebung(id)!, g) === 1)
      if (unterwegs) continue
      // Übungen der nächsten zehn Plantage, die die Gruppe direkt trainieren, und wie voll jeder Tag für sie schon ist
      const zahl = new Map<string, { n: number; saetze: number; tage: number[] }>()
      const tagSaetze = kommend.map(() => 0)
      kommend.forEach((t, ti) => {
        for (const pu0 of t.uebungen) {
          const pu = mitErsatz(daten, pu0)
          const id = idVon(pu)
          const u = kraftUebung(id)
          if (!u) continue
          const jetzt = pu.saetze + (pu.prozent || pu.zeit ? 0 : (satzplus[id]?.n ?? 0))
          tagSaetze[ti] += jetzt * anteil(u, g)
          // Prozent vom Maximum gibt der Plan fest vor
          if (pu.prozent || pu.zeit || nurBand(u) || anteil(u, g) !== 1) continue
          const z = zahl.get(id) || { n: 0, saetze: jetzt, tage: [] }
          z.n++
          z.tage.push(ti)
          zahl.set(id, z)
        }
      })
      // Ein Satz mehr bei einer Übung, die n-mal in den nächsten zehn Plantagen vorkommt, bringt je Woche n × Trainingstage / 10
      const jeWoche = (n: number) => (n * Math.max(1, tageJeWoche)) / Math.max(1, kommend.length)
      const mitLast = (id: string) => Number(uebung(id)!.belastung === "gewicht")
      const luecke = SAETZE_MIN - schnitt[g.id]
      const ziel = Math.min(luecke, SCHRITT_JE_WOCHE)
      const plus = new Map<string, number>()
      let mehr = 0
      /** vollster Tag einer Übung für diese Gruppe, wenn sie einen Satz mehr bekäme */
      const vollsterTag = (z: { tage: number[] }) => Math.max(...z.tage.map((ti) => tagSaetze[ti])) + 1
      const moeglich = ([id, z]: [string, { n: number; saetze: number; tage: number[] }]) =>
        z.saetze + (plus.get(id) ?? 0) < SAETZE_JE_UEBUNG && (plus.get(id) ?? 0) < PLUS_JE_SCHRITT && vollsterTag(z) <= SAETZE_JE_TAG
      // Satz für Satz dorthin, wo der Trainingstag für diese Gruppe am leersten ist: So verteilt sich der Umfang über die
      // Woche, statt sich an einem Tag zu stapeln. Bei Gleichstand lieber eine Übung mit Gewicht (lässt sich steigern),
      // dann die mit den wenigsten Sätzen. Ein Satz kommt nur dazu, wenn er höchstens zur Hälfte über das Ziel schießt.
      for (;;) {
        const wahl = Array.from(zahl.entries())
          .filter((e) => moeglich(e) && ziel - mehr >= jeWoche(e[1].n) / 2)
          .sort((a, b) => vollsterTag(a[1]) - vollsterTag(b[1]) || (plus.get(a[0]) ?? 0) - (plus.get(b[0]) ?? 0) || mitLast(b[0]) - mitLast(a[0]) || a[1].saetze - b[1].saetze || a[0].localeCompare(b[0]))[0]
        if (!wahl) break
        plus.set(wahl[0], (plus.get(wahl[0]) ?? 0) + 1)
        for (const ti of wahl[1].tage) tagSaetze[ti] += 1
        mehr += jeWoche(wahl[1].n)
      }
      if (!plus.size) continue
      const teile = Array.from(zahl.entries())
        .filter(([id]) => plus.has(id))
        .sort((a, b) => a[1].tage[0] - b[1].tage[0])
        .map(([id, z]) => ({ uebung: id, name: uebung(id)!.name, plus: plus.get(id)!, vorkommen: z.n }))
      const danach = rund1(schnitt[g.id] + mehr)
      // Reicht es nicht bis zum Ziel: Liegt es am Plan (jede passende Übung ist bei fünf Sätzen oder ihr Tag ist voll)
      // oder nur daran, dass ein Schritt begrenzt ist?
      const ausgereizt = Array.from(zahl.entries()).every(([id, z]) => z.saetze + (plus.get(id) ?? 0) >= SAETZE_JE_UEBUNG || vollsterTag(z) > SAETZE_JE_TAG)
      const trainingstage = new Set(Array.from(zahl.entries()).filter(([id]) => plus.has(id)).flatMap(([, z]) => z.tage)).size
      vorschlaege.push({ art: "saetze", schluessel: k, gruppe: g.id, gruppenName: g.name, teile, schnitt: schnitt[g.id], mehr: rund1(mehr), danach, tage: trainingstage, rest: danach >= SAETZE_MIN - 0.5 ? null : ausgereizt ? "plan" : "schritt" })
      n++
    }
  }

  // 3. Plateau: Variante wechseln
  for (const t of tr) {
    const k = "tauschen:" + t.uebung
    if (t.status === "plateau" && !ruht(k) && !daten.ersatz?.[t.uebung]) vorschlaege.push({ art: "tauschen", schluessel: k, uebung: t.uebung, name: t.name })
  }

  // 4. Zeit: die letzten vier gemessenen Einheiten bis zum Ende der Woche dauern im Mittel deutlich länger als geplant
  if (profil) {
    const mess = daten.erledigt.filter((e) => e.datum < ende && e.dauer_min && e.budget_min).slice(-4)
    if (mess.length >= 3) {
      const ueber = median(mess.map((e) => (e.dauer_min as number) - (e.budget_min as number)))
      const budget = median(mess.map((e) => e.budget_min as number))
      const neu = Math.ceil((budget + ueber) / 5) * 5
      const jetzt = Math.max(0, ...profil.woche.filter((t) => t.art === "training").map((t) => t.minuten || 0))
      if (ueber >= 5 && neu > jetzt && !ruht("zeit")) vorschlaege.push({ art: "zeit", schluessel: "zeit", ueber_min: Math.round(ueber), budget: Math.round(budget), minuten_neu: neu })
    }
  }
  return { montag, laufend, woche, schnitt, wochenImSchnitt: wochen.length, trends: tr, zeit, vorschlaege }
}

/** Vorschlag übernehmen. wahl: bei „tauschen“ die neue Übung. */
export function uebernehmen(d: Daten, v: Vorschlag, heute: string, wahl?: string): void {
  if (v.art === "saetze") {
    const neu = { ...(d.satzplus || {}) }
    for (const t of v.teile) neu[t.uebung] = { n: (neu[t.uebung]?.n ?? 0) + t.plus, seit: heute }
    d.satzplus = neu
  } else if (v.art === "maximum") {
    d.maxwerte = { ...(d.maxwerte || {}), [v.uebung]: { kg: v.neu, datum: heute } }
  } else if (v.art === "tauschen") {
    if (!wahl || wahl === v.uebung || !uebung(wahl)) return
    const e = { ...(d.ersatz || {}), [v.uebung]: wahl }
    if (e[wahl] === v.uebung) delete e[wahl]
    d.ersatz = e
    if (d.profil) d.profil.ausgeschlossen = [...d.profil.ausgeschlossen.filter((x) => x !== v.uebung && x !== wahl), v.uebung]
  } else if (v.art === "zeit" && d.profil) {
    d.profil.woche = d.profil.woche.map((t) => (t.art === "training" && (t.minuten || 0) < v.minuten_neu ? { ...t, minuten: v.minuten_neu } : t))
  }
}

/** Vorschlag für vier Wochen ausblenden */
export function ablehnen(d: Daten, v: Vorschlag, heute: string): void {
  d.rueckblick = { ...(d.rueckblick || {}), weg: { ...(d.rueckblick?.weg || {}), [v.schluessel]: heute } }
}

/** Zusätzlichen Satz wieder zurücknehmen */
export function satzplusWeg(d: Daten, id: string): void {
  const s = { ...(d.satzplus || {}) }
  delete s[id]
  d.satzplus = s
}
