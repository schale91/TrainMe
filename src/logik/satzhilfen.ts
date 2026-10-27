// Hilfen während der Einheit: Topsatz mit Back-off-Sätzen, Aufwärmsätze, Scheiben je Seite, Plausibilität und
// Bestwerte. Grundlagen in docs/KONZEPT.md (Abschnitt „Im Training“).

import { abrunden, niedriger } from "./gewichte"
import { e1rm } from "./progression"
import { bestwert } from "./spiel"
import type { Geraet, Gewichte, Protokoll, Satz, Satzform, Vorgabe } from "./typen"

const rund = (x: number) => Math.round(x * 100) / 100

/** Back-off-Sätze liegen etwa 10 % unter dem Gewicht, das für den Topsatz passt (Helms et al. 2016). */
export const BACKOFF_ANTEIL = 0.9

/** Auf ein vorhandenes Gewicht abrunden; ohne bekannte Lasten auf 1,25 kg. */
export function lastAbrunden(x: number, lasten: number[]): number {
  if (lasten.length) return abrunden(x, lasten) ?? lasten[0]
  return Math.max(0, Math.floor(x / 1.25 + 1e-9) * 1.25)
}

/** Satzform einer Übung: gewählt, sonst aus der Vorgabe. Nur für Gewichtsübungen mit mindestens drei Sätzen. */
export function satzformVon(v: Vorgabe, gewaehlt: Satzform | undefined, gewicht: boolean): Satzform {
  if (!gewicht || v.saetze < 3) return "gleich"
  return gewaehlt ?? (v.topsatz ? "topsatz" : "gleich")
}

/** Vorhandenes Gewicht, das ziel am nächsten liegt (bei Gleichstand das leichtere); ohne Lasten auf 1,25 kg. */
function naechstes(ziel: number, lasten: number[]): number {
  if (!lasten.length) return Math.round(ziel / 1.25) * 1.25
  return lasten.reduce((best, x) => (Math.abs(x - ziel) < Math.abs(best - ziel) - 1e-9 ? x : best), lasten[0])
}

/** Gewicht der Back-off-Sätze: das vorhandene Gewicht am nächsten an 90 %, immer leichter als der Topsatz. */
export function backoffLast(top: number, lasten: number[]): number {
  const x = naechstes(top * BACKOFF_ANTEIL, lasten)
  if (x < top - 1e-9) return x
  return lasten.length ? niedriger(top, lasten) : lastAbrunden(top - 1.25, [])
}

/**
 * Nach dem Topsatz: Gewicht der Back-off-Sätze aus dem, was im Topsatz wirklich ging. Aus Gewicht, Wiederholungen
 * und Reserve das Maximum schätzen, daraus das Gewicht für die Zielwiederholungen und -reserve, davon 90 %.
 */
export function backoffNachTopsatz(top: Satz, zielWdh: number, zielRir: number, lasten: number[]): { last: number; max: number } | null {
  const max = e1rm(top)
  if (!max || !top.last) return null
  const passend = max / (1 + (zielWdh + zielRir) / 30)
  // War der Topsatz viel zu leicht, höchstens so schwer wie der Topsatz
  return { last: Math.min(backoffLast(passend, lasten), top.last), max }
}

/** Leergewicht der Stange, wenn die Last mit Scheiben auf einer Stange entsteht, sonst 0. */
export function stangeVon(geraet: Geraet | null, g: Gewichte): number {
  if (geraet === "langhantel") return g.stange
  if (geraet === "sz_stange") return g.sz_stange || 0
  if (geraet === "trap_bar") return g.trap_bar || 0
  if (geraet === "multipresse") return g.multipresse_stange || 0
  return 0
}

/** Übliche Scheiben im Studio, wenn zu Hause keine eingetragen sind. */
const STUDIO_SCHEIBEN = [25, 20, 15, 10, 5, 2.5, 1.25]

/**
 * Scheiben je Seite für ein Gesamtgewicht, möglichst wenige. scheiben: vorhandene Paare (jeder Eintrag ein Paar);
 * beliebig: von jeder Sorte genug; leer heißt Studio mit den üblichen Scheiben. null, wenn es nicht aufgeht.
 */
export function scheibenProSeite(gesamt: number, stange: number, scheiben: number[], beliebig = false): number[] | null {
  const seite = rund((gesamt - stange) / 2)
  if (seite < -1e-9) return null
  if (seite < 1e-9) return []
  if (!scheiben.length || beliebig) {
    // Von jeder Sorte genug: wenigste Scheiben über alle Sorten (in 0,05-kg-Schritten)
    const sorten = Array.from(new Set((scheiben.length ? scheiben : STUDIO_SCHEIBEN).map((x) => Math.round(x * 20)))).filter((x) => x > 0)
    const ziel = Math.round(seite * 20)
    const anzahl = new Array<number>(ziel + 1).fill(Infinity)
    const letzte = new Array<number>(ziel + 1).fill(0)
    anzahl[0] = 0
    for (let x = 1; x <= ziel; x++)
      for (const e of sorten)
        if (e <= x && anzahl[x - e] + 1 < anzahl[x]) {
          anzahl[x] = anzahl[x - e] + 1
          letzte[x] = e
        }
    if (!isFinite(anzahl[ziel])) return null
    const out: number[] = []
    for (let x = ziel; x > 0; x -= letzte[x]) out.push(letzte[x] / 20)
    return out.sort((a, b) => b - a)
  }
  // Wenigste Scheiben für jede erreichbare Summe (Rucksack über die vorhandenen Paare)
  const best = new Map<number, number[]>([[0, []]])
  for (const s of [...scheiben].sort((a, b) => b - a)) {
    for (const [summe, liste] of Array.from(best.entries())) {
      const neu = rund(summe + s)
      if (neu > seite + 1e-9) continue
      const alt = best.get(neu)
      if (!alt || alt.length > liste.length + 1) best.set(neu, [...liste, s])
    }
  }
  const treffer = best.get(seite)
  return treffer ? [...treffer].sort((a, b) => b - a) : null
}

export interface Aufwaermsatz {
  last: number
  wdh: number
  /** z. B. „leere Stange“ */
  text?: string
}

/**
 * Aufwärmsätze vor dem ersten Arbeitssatz: spezifisch, mit steigender Last und wenigen Wiederholungen, damit sie
 * nicht ermüden (Fradkin et al. 2010; NSCA, Haff & Triplett 2016). voll: erste schwere Übung der Einheit, sonst
 * reichen zwei kurze Sätze, weil der Körper schon warm ist.
 */
export function aufwaermSaetze(arbeit: number, geraet: Geraet | null, g: Gewichte, lasten: number[], voll: boolean): Aufwaermsatz[] {
  if (!arbeit || arbeit <= 0 || geraet === "band" || geraet === "medizinball" || geraet === "hantelscheibe") return []
  const stange = stangeVon(geraet, g)
  const kurz = geraet === "kurzhantel" || geraet === "kettlebell"
  const stufen: [number, number][] = kurz ? (voll ? [[0.5, 10], [0.75, 5]] : [[0.6, 6]]) : voll ? [[0.5, 8], [0.7, 5], [0.85, 3]] : [[0.6, 5], [0.85, 2]]
  const out: Aufwaermsatz[] = []
  if (stange && voll && arbeit >= stange * 1.6) out.push({ last: stange, wdh: 10, text: "leere Stange" })
  for (const [anteil, wdh] of stufen) {
    // leichte Arbeitsgewichte brauchen den schweren Annäherungssatz nicht
    if (anteil > 0.8 && arbeit < 40) continue
    const last = lastAbrunden(arbeit * anteil, lasten)
    const vorher = out.length ? out[out.length - 1].last : 0
    if (last <= vorher + 1e-9 || last >= arbeit - 1e-9 || last < stange - 1e-9 || last <= 0) continue
    out.push({ last, wdh })
  }
  return out
}

/** Bestes geschätztes Maximum der bisherigen Einheiten (vertippte Sätze zählen nicht). */
function bisherBest(verlauf: Protokoll[]): { best: number; einheiten: number } {
  const werte = verlauf.map((p) => Math.max(0, ...p.saetze.map(e1rm))).filter((x) => x > 0)
  return { best: werte.length ? Math.max(...werte) : 0, einheiten: werte.length }
}

/**
 * Unplausibel: mehr als 20 % über dem bisher besten geschätzten Maximum, bei mindestens zwei Einheiten Verlauf.
 * Meist ein Tippfehler (z. B. 800 statt 80 kg). Der Satz zählt dann erst nach Bestätigung.
 */
export function unplausibel(satz: Satz, verlauf: Protokoll[]): boolean {
  const x = e1rm({ ...satz, unplausibel: false })
  if (!x) return false
  const { best, einheiten } = bisherBest(verlauf)
  return einheiten >= 2 && x > best * 1.2
}

/** Neuer Bestwert in der laufenden Einheit? Mit dem bisherigen und dem neuen Wert, sonst null. */
export function neuerBestwert(heute: Satz[], verlauf: Protokoll[], uebung: string, datum: string): { alt: number; neu: number } | null {
  const vorher = verlauf.filter((p) => p.datum < datum)
  if (!vorher.length || !heute.length) return null
  const alt = Math.max(...vorher.map(bestwert))
  const neu = bestwert({ datum, uebung, saetze: heute })
  return alt > 0 && neu > alt + 1e-9 ? { alt, neu } : null
}
