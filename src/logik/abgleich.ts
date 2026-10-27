// Abgleich mit der Lebenswelt: Eingebettet in die Lebenswelt oder als gekoppelte APK liegen die Daten zusätzlich in
// der Datenbank der Lebenswelt (Route /api/lebenswelt/trainme). Aufgeteilt in den Stamm (alles außer Protokoll und
// erledigten Einheiten) und je Trainingstag ein Eintrag. Das Gerät merkt sich, welchen Stand es zuletzt mit dem
// Server geteilt hat (Prüfsumme), und schickt nur, was sich seitdem geändert hat. Gleiche Regeln wie auf dem
// Server: beim Stamm gewinnt die neuere Zeit, Tage werden zusammengeführt.

import { pruefen } from "./speicher"
import type { Daten, Erledigt, Protokoll } from "./typen"

export interface TagEintrag {
  tag: string
  zeit: number
  protokoll: Protokoll[]
  erledigt: Erledigt[]
}

export interface Abgleichstand {
  /** Wert "jetzt" der letzten Antwort (für ?seit=) */
  seit: string
  /** zuletzt mit dem Server geteilter Stamm */
  stamm: { pruef: string; zeit: number }
  /** zuletzt geteilte Tage */
  tage: Record<string, string>
}

export const neuerStand = (): Abgleichstand => ({ seit: "", stamm: { pruef: "", zeit: 0 }, tage: {} })

/** Anfrage an die Lebenswelt: Methode, Pfad ab /api/lebenswelt/…, Inhalt. status 0 = nicht erreichbar. */
export type Anfrage = (methode: string, pfad: string, koerper?: unknown) => Promise<{ status: number; daten: unknown }>

/** JSON mit sortierten Schlüsseln, damit gleiche Inhalte gleich aussehen, egal in welcher Reihenfolge sie kamen. */
export function stabil(x: unknown): string {
  if (x === null || typeof x !== "object") return JSON.stringify(x) ?? "null"
  if (Array.isArray(x)) return "[" + x.map(stabil).join(",") + "]"
  const o = x as Record<string, unknown>
  return (
    "{" +
    Object.keys(o)
      .filter((k) => o[k] !== undefined)
      .sort()
      .map((k) => JSON.stringify(k) + ":" + stabil(o[k]))
      .join(",") +
    "}"
  )
}

/** Kurze Prüfsumme (FNV-1a) eines Inhalts. */
export function pruefsumme(x: unknown): string {
  const s = stabil(x)
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return (h >>> 0).toString(36) + ":" + s.length
}

const ordneP = (a: Protokoll, b: Protokoll) => (a.uebung < b.uebung ? -1 : a.uebung > b.uebung ? 1 : 0)
const ordneE = (a: Erledigt, b: Erledigt) => (a.titel < b.titel ? -1 : a.titel > b.titel ? 1 : (a.plan_nr || 0) - (b.plan_nr || 0))

/** Inhalt eines Tages ohne Zeit, in fester Reihenfolge (für die Prüfsumme). */
export const tagInhalt = (t: { protokoll: Protokoll[]; erledigt: Erledigt[] }) => ({ protokoll: [...t.protokoll].sort(ordneP), erledigt: [...t.erledigt].sort(ordneE) })

/** Daten in Stamm und Tage teilen. Gesundheitswerte bleiben auf dem Gerät. */
export function teilen(d: Daten): { stamm: Record<string, unknown>; tage: Record<string, { protokoll: Protokoll[]; erledigt: Erledigt[] }> } {
  const { protokoll, erledigt, gesundheit: _g, ...stamm } = d
  const tage: Record<string, { protokoll: Protokoll[]; erledigt: Erledigt[] }> = {}
  for (const p of protokoll) (tage[p.datum] ||= { protokoll: [], erledigt: [] }).protokoll.push(p)
  for (const e of erledigt) (tage[e.datum] ||= { protokoll: [], erledigt: [] }).erledigt.push(e)
  return { stamm: stamm as Record<string, unknown>, tage }
}

/** Stamm und Tage wieder zu Daten zusammensetzen (geprüft wie ein Import). */
export function zusammensetzen(stamm: Record<string, unknown>, tage: Record<string, { protokoll: Protokoll[]; erledigt: Erledigt[] }>, gesundheit?: Daten["gesundheit"]): Daten {
  const liste = Object.keys(tage).sort()
  const d = pruefen({ version: 1, ...stamm, protokoll: liste.flatMap((t) => tage[t].protokoll), erledigt: liste.flatMap((t) => tage[t].erledigt) })
  if (gesundheit) d.gesundheit = gesundheit
  return d
}

/** Zwei Stände eines Tages zusammenführen: je Übung und je Einheit gewinnt der neuere, sonst bleibt alles. */
export function tagZusammen(alt: TagEintrag | null, neu: TagEintrag): TagEintrag {
  if (!alt) return neu
  const [vorn, hinten] = neu.zeit >= alt.zeit ? [neu, alt] : [alt, neu]
  const vereine = <T,>(a: T[], b: T[], k: (x: T) => string) => {
    const da = new Set<string>()
    return a.concat(b).filter((x) => (da.has(k(x)) ? false : (da.add(k(x)), true)))
  }
  return {
    tag: neu.tag,
    zeit: Math.max(alt.zeit, neu.zeit),
    protokoll: vereine(vorn.protokoll, hinten.protokoll, (p) => p.uebung + "|" + p.datum),
    erledigt: vereine(vorn.erledigt, hinten.erledigt, (e) => e.titel + "|" + e.datum),
  }
}

interface Antwort {
  jetzt?: string
  stamm?: { zeit: number; daten: Record<string, unknown> } | null
  tage?: (TagEintrag & { geloescht?: boolean })[]
  kraftbuch?: boolean
  zurueck?: { stamm?: { zeit: number; daten: Record<string, unknown> } | null; tage?: TagEintrag[] }
}

export interface Ergebnis {
  daten: Daten
  stand: Abgleichstand
  /** Vom Server kam etwas Neues (die Oberfläche soll neu zeichnen) */
  neu: boolean
  /** Es gibt ein Kraftbuch zum Übernehmen */
  kraftbuch: boolean
  /** Nicht erreichbar: alles bleibt lokal und geht beim nächsten Mal mit */
  offline: boolean
}

/**
 * Einmal abgleichen: Änderungen holen, mit dem eigenen Stand zusammenführen, Eigenes hochladen. jetzt: Uhrzeit in
 * ms (als Zeit der lokalen Änderungen). Wirft nie; ohne Verbindung kommt offline zurück.
 */
export async function abgleichen(anfrage: Anfrage, lokal: Daten, stand: Abgleichstand, jetzt: number): Promise<Ergebnis> {
  const s: Abgleichstand = { seit: stand.seit, stamm: { ...stand.stamm }, tage: { ...stand.tage } }
  let { stamm, tage } = teilen(lokal)
  let neu = false
  const pTag = (t: { protokoll: Protokoll[]; erledigt: Erledigt[] }) => pruefsumme(tagInhalt(t))

  const r = await anfrage("GET", "/api/lebenswelt/trainme" + (s.seit ? "?seit=" + encodeURIComponent(s.seit) : ""))
  if (r.status === 0 || r.status >= 300) return { daten: lokal, stand, neu: false, kraftbuch: false, offline: true }
  const a = (r.daten || {}) as Antwort

  // Stamm vom Server übernehmen, wenn er neuer ist und hier nichts Ungeteiltes wartet. Beim allerersten Abgleich
  // gewinnt der Server, damit ein neues Gerät nie einen vorhandenen Stand mit leeren Daten überschreibt.
  const stammGeaendert = s.stamm.pruef !== "" && pruefsumme(stamm) !== s.stamm.pruef
  if (a.stamm && a.stamm.zeit > s.stamm.zeit && !stammGeaendert) {
    stamm = a.stamm.daten
    s.stamm = { pruef: pruefsumme(stamm), zeit: a.stamm.zeit }
    neu = true
  }
  for (const t of a.tage || []) {
    if (t.geloescht) continue
    const hier = tage[t.tag]
    const server = { protokoll: t.protokoll || [], erledigt: t.erledigt || [] }
    const unverteilt = hier && pTag(hier) !== s.tage[t.tag]
    const ziel = unverteilt ? tagZusammen({ tag: t.tag, zeit: jetzt, ...hier }, { ...t, ...server }) : { ...t, ...server }
    const inhalt = { protokoll: ziel.protokoll, erledigt: ziel.erledigt }
    if (!hier || pTag(hier) !== pTag(inhalt)) neu = true
    tage[t.tag] = inhalt
    if (pTag(inhalt) === pTag(server)) s.tage[t.tag] = pTag(inhalt)
  }
  if (a.jetzt) s.seit = a.jetzt

  // Eigenes hochladen
  const koerper: { stamm?: { zeit: number; daten: Record<string, unknown> }; tage?: TagEintrag[] } = {}
  const pStamm = pruefsumme(stamm)
  if (pStamm !== s.stamm.pruef) koerper.stamm = { zeit: Math.max(jetzt, s.stamm.zeit + 1), daten: stamm }
  const hoch = Object.keys(tage).filter((t) => pTag(tage[t]) !== s.tage[t])
  if (hoch.length) koerper.tage = hoch.slice(0, 400).map((t) => ({ tag: t, zeit: jetzt, ...tage[t] }))
  if (koerper.stamm || koerper.tage) {
    const p = await anfrage("PUT", "/api/lebenswelt/trainme", koerper)
    // Hochladen ging nicht: Übernommenes bleibt, das Eigene gilt weiter als ungeteilt und geht beim nächsten Mal mit
    if (p.status === 0 || p.status >= 300) return { daten: neu ? zusammensetzen(stamm, tage, lokal.gesundheit) : lokal, stand: s, neu, kraftbuch: !!a.kraftbuch, offline: p.status === 0 }
    const z = ((p.daten || {}) as Antwort).zurueck || {}
    if (koerper.stamm) s.stamm = { pruef: pStamm, zeit: koerper.stamm.zeit }
    if (z.stamm) {
      stamm = z.stamm.daten
      s.stamm = { pruef: pruefsumme(stamm), zeit: z.stamm.zeit }
      neu = true
    }
    for (const t of koerper.tage || []) s.tage[t.tag] = pTag(t)
    for (const t of z.tage || []) {
      tage[t.tag] = { protokoll: t.protokoll || [], erledigt: t.erledigt || [] }
      s.tage[t.tag] = pTag(tage[t.tag])
      neu = true
    }
  }
  return { daten: neu ? zusammensetzen(stamm, tage, lokal.gesundheit) : lokal, stand: s, neu, kraftbuch: !!a.kraftbuch, offline: false }
}
