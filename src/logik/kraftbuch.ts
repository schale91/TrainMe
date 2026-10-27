// Übernahme aus dem Kraftbuch der Lebenswelt (einmalig, wenn TrainMe dort das Kraftbuch ersetzt). Das Kraftbuch hat
// seine Daten als Dokumente in der Datenbank der Lebenswelt abgelegt; diese Datei liest nur deren Aufbau. Inhalte
// (Plan, Übungen, Gewichte) kommen zur Laufzeit aus der Datenbank der Person und stehen nicht im Repository.
//
// - plantag: Tage des Plans mit Übungen (Sätze, Wiederholungen, Prozent vom Maximum, RPE-Vorgabe, Supersätze A1/A2)
// - trainingslog: je Tag die Sätze (Gewicht, Wiederholungen, Abweichung vom RIR-Ziel) und der Status des Tages
// - maxwert, verletzung, geraet, bandfarbe, kraft_verlauf: Maxima, Beschwerden, Gerätewahl, Bandfarbe, ältere 1RM-Werte

import { UEBUNGEN, uebung } from "../daten/uebungen/index"
import { neuerOrt, neuesProfil } from "./speicher"
import { idVon } from "./eigenerPlan"
import { e1rm } from "./progression"
import type { Beschwerde, Daten, EigenerPlan, Erledigt, Gelenk, Geraet, Ort, PlanTag, PlanUebung, Protokoll, Satz } from "./typen"

/** Ein Dokument der Lebenswelt, wie es /api/lebenswelt/trainme/kraftbuch liefert. */
export interface KbDok {
  typ: string
  schluessel?: string
  daten: Record<string, unknown>
  geaendert?: string
}

interface KbUebung {
  url?: string
  name?: string
  arbeitssaetze?: string | number
  wiederholungen?: string
  zielprozent?: string
  rpe_vorgabe?: string | number
  aufwaermsaetze?: string
  pause?: string
  notiz?: string
  protokoll?: { satz?: number; gewicht?: number | null; rpe?: number | null; notiz?: string }[]
}
interface KbTag {
  nr: number
  tag?: string
  tagestyp?: string
  woche?: number
  phase?: number
  phase_name?: string
  phase_woche?: number
  trainiert?: boolean
  uebungen?: KbUebung[]
}
interface KbSatz {
  gewicht?: number | null
  reps?: number | null
  rpedelta?: number | null
  fertig?: boolean
  updatedAt?: number
}
interface KbLog {
  status?: string
  statusUpdatedAt?: number
  sets?: Record<string, Record<string, KbSatz>>
  subs?: Record<string, { name?: string; skip?: boolean }>
}

export interface Uebernahme {
  plan: EigenerPlan | null
  protokoll: Protokoll[]
  erledigt: Erledigt[]
  maxwerte: Record<string, { kg: number; datum: string }>
  beschwerden: Beschwerde[]
  bandfarben: Record<string, string>
  archiv: Record<string, { datum: string; kg: number; text?: string }[]>
  ort: Ort | null
  /** Wochentage (0 = Montag), an denen meist trainiert wurde */
  trainingstage: number[]
  /** Planübungen ohne Gegenstück in der Übungsdatenbank */
  frei: string[]
}

const TAG = 86400000

/** Schlüssel einer Übung im Kraftbuch (aus der Adresse ihrer Anleitung). */
export const exKey = (url: string) => url.replace(/[^a-zA-Z0-9]/g, "").slice(-24)

/** Schlüssel für Gerätewahl und Bandfarbe im Kraftbuch (Hash des Namens). */
export function nameKey(name: string): string {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0
  return "n" + Math.abs(h).toString(36)
}

const ohnePrefix = (n: string) => n.replace(/^[A-Z]\d+:\s*/, "").trim()

/** Name vergleichbar machen: klein, ohne Umlaute, Klammern und Satzzeichen. */
export function normal(n: string): string {
  return ohnePrefix(n)
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[„“"'.,:;/–-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

let INDEX: Map<string, string> | null = null
function index(): Map<string, string> {
  if (INDEX) return INDEX
  INDEX = new Map()
  for (const u of UEBUNGEN) for (const n of [u.name, ...(u.auch || [])]) if (!INDEX.has(normal(n))) INDEX.set(normal(n), u.id)
  return INDEX
}

/** TrainMe-Übung zu einem Namen aus dem Kraftbuch: gleicher Name oder gleicher Zweitname, sonst keine. */
export function zuordnen(name: string): string | undefined {
  const n = normal(name)
  if (!n) return undefined
  const direkt = index().get(n)
  if (direkt) return direkt
  // Vorsichtig: nur wenn alle Wörter des Namens in genau einem Eintrag vorkommen
  const woerter = n.split(" ").filter((w) => w.length > 2)
  if (woerter.length < 2) return undefined
  const treffer: string[] = []
  for (const [k, id] of index()) {
    const kw = new Set(k.split(" "))
    if (woerter.every((w) => kw.has(w)) && kw.size <= woerter.length + 1 && treffer.indexOf(id) < 0) treffer.push(id)
  }
  return treffer.length === 1 ? treffer[0] : undefined
}

/** Wiederholungsvorgabe: „6–8 Wdh“, „4 Wdh“, „10–20 Sek.“, „12 / 20 Wdh“, „10 (+3+3+3) Wdh“, „10+ Wdh“. */
export function wiederholungen(text: string | undefined): { von: number; bis: number; zeit: boolean; text?: string } {
  const s = String(text || "").trim()
  const zeit = /\b(sek|sekunden|min|minuten|s)\b/i.test(s.replace(/\./g, " "))
  const faktor = /\bmin/i.test(s) ? 60 : 1
  const spanne = /(\d+)\s*[–-]\s*(\d+)/.exec(s)
  if (spanne) {
    const v = { von: +spanne[1] * faktor, bis: +spanne[2] * faktor, zeit }
    return /^\d+\s*[–-]\s*\d+\s*(wdh|sek|s|min)\.?$/i.test(s) ? v : { ...v, text: s.replace(/\s*Wdh\.?$/i, "") }
  }
  const zahl = /(\d+)/.exec(s)
  if (!zahl) return { von: 8, bis: 12, zeit: false, text: s || undefined }
  const n = +zahl[1] * faktor
  const rein = /^\d+\s*(wdh|sek|s|min)\.?$/i.test(s)
  return rein ? { von: n, bis: n, zeit } : { von: n, bis: n, zeit, text: s.replace(/\s*Wdh\.?$/i, "") }
}

/** Prozentangabe „75 %“ oder „72,5–77,5 %“ als Anteil. */
export function prozent(text: string | undefined): [number, number] | undefined {
  const m = /(\d+(?:[.,]\d+)?)(?:\s*[–-]\s*(\d+(?:[.,]\d+)?))?\s*%/.exec(String(text || ""))
  if (!m) return undefined
  const lo = parseFloat(m[1].replace(",", ".")) / 100
  const hi = m[2] ? parseFloat(m[2].replace(",", ".")) / 100 : lo
  return [lo, hi]
}

/** RPE-Vorgabe in Wiederholungen im Tank. */
function rirAus(rpe: string | number | undefined): number | undefined {
  const n = parseFloat(String(rpe ?? "").replace(",", "."))
  return isFinite(n) && n > 0 ? Math.max(0, Math.round((10 - n) * 2) / 2) : undefined
}

/** Hauptübung, auf deren Maximum sich eine Prozentangabe bezieht. */
const GRUNDUEBUNG: [RegExp, string][] = [
  [/squat/i, "Back Squat"],
  [/bench|larsen/i, "Barbell Bench Press"],
  [/deadlift|rack pull/i, "Deadlift"],
  [/overhead press/i, "Barbell Overhead Press"],
]

const REGION: Record<string, Gelenk> = { fuss: "sprunggelenk", sprung: "sprunggelenk", knie: "knie", huefte: "huefte", ruecken: "ruecken", schulter: "schulter", ellbogen: "ellbogen", hand: "handgelenk", nacken: "nacken" }

/** Gerätewahl im Kraftbuch → Geräte in TrainMe. */
const GERAET: Record<string, Geraet[]> = {
  kurzhantel: ["kurzhantel"],
  olympiastange: ["langhantel", "hantelscheibe"],
  footballbar: ["langhantel", "hantelscheibe"],
  szstange: ["sz_stange", "hantelscheibe"],
  kabelturm: ["kabelturm", "kabelzug"],
  band_kurz: ["band", "mini_band"],
  band_lang: ["band"],
}

const tagVon = (ms: number) => {
  const d = new Date(ms)
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")
}
const plus = (datum: string, n: number) => new Date(Date.parse(datum + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)

function planUebungAus(e: KbUebung): PlanUebung {
  const roh = String(e.name || "Übung")
  const name = ohnePrefix(roh)
  const w = wiederholungen(e.wiederholungen)
  const pu: PlanUebung = { name, saetze: Math.max(1, parseInt(String(e.arbeitssaetze ?? ""), 10) || 1), wdh_von: w.von, wdh_bis: w.bis }
  const id = zuordnen(name)
  if (id) pu.id = id
  if (w.text) pu.wdh_text = w.text
  if (w.zeit) pu.zeit = true
  const pz = prozent(e.zielprozent)
  if (pz) {
    pu.prozent = pz
    const g = GRUNDUEBUNG.find(([re]) => re.test(name))
    if (g && normal(g[1]) !== normal(name)) pu.basis = idVon({ name: g[1], id: zuordnen(g[1]), saetze: 1, wdh_von: 1, wdh_bis: 1 })
  }
  const rir = rirAus(e.rpe_vorgabe)
  if (rir !== undefined) pu.rir = rir
  const gruppe = /^([A-Z])\d+:/.exec(roh)
  if (gruppe) pu.gruppe = gruppe[1]
  if (e.aufwaermsaetze && e.aufwaermsaetze !== "–") pu.aufwaermsaetze = String(e.aufwaermsaetze)
  if (e.notiz) pu.hinweis = String(e.notiz)
  return pu
}

const satzFertig = (s: KbSatz | undefined) => !!s && (s.gewicht != null || s.reps != null) && (s.fertig != null ? s.fertig : s.rpedelta != null)

/**
 * Liest alle Kraftbuch-Dokumente einer Person. heute: Datum der Übernahme; startwerte: Maximum je Hauptübung, wenn
 * im Kraftbuch noch keins eingetragen war (Name wie im Kraftbuch → kg).
 */
export function uebernehmen(doks: KbDok[], heute: string, startwerte: Record<string, number> = {}): Uebernahme {
  const nach = (typ: string) => doks.filter((d) => d.typ === typ && d.daten)
  const tage = nach("plantag")
    .map((d) => d.daten as unknown as KbTag)
    .filter((t) => typeof t.nr === "number" && Array.isArray(t.uebungen))
    .sort((a, b) => a.nr - b.nr)
  const logs = new Map<number, KbLog>()
  for (const d of nach("trainingslog")) {
    const nr = Number(String(d.schluessel || "").replace(/^day/, ""))
    if (Number.isFinite(nr)) logs.set(nr, d.daten as KbLog)
  }

  // Plan
  const planTage: PlanTag[] = tage.map((t) => ({
    nr: t.nr,
    titel: ((t.tag || "").split("·")[1] || t.tagestyp || "Tag " + t.nr).trim(),
    woche: t.phase_woche ?? t.woche,
    abschnitt: t.phase_name || (t.phase ? "Phase " + t.phase : undefined),
    uebungen: (t.uebungen || []).map(planUebungAus),
  }))
  const frei = Array.from(new Set(planTage.flatMap((t) => t.uebungen.filter((u) => !u.id).map((u) => u.name)))).sort()

  // Datum je Plantag: aus den Zeitstempeln der Sätze, sonst geschätzt zwischen bekannten Tagen
  const datumVon = new Map<number, { datum: string; geschaetzt: boolean }>()
  for (const t of tage) {
    const log = logs.get(t.nr)
    let ms = 0
    for (const s of Object.values(log?.sets || {})) for (const x of Object.values(s || {})) if (x && satzFertig(x) && (x.updatedAt || 0) > 0) ms = ms ? Math.min(ms, x.updatedAt as number) : (x.updatedAt as number)
    if (!ms && log?.statusUpdatedAt) ms = log.statusUpdatedAt
    if (ms) datumVon.set(t.nr, { datum: tagVon(ms), geschaetzt: false })
  }
  const bekannt = Array.from(datumVon.entries()).sort((a, b) => a[0] - b[0])
  const schaetze = (nr: number) => {
    const davor = [...bekannt].reverse().find(([n]) => n < nr)
    const danach = bekannt.find(([n]) => n > nr)
    if (davor) return plus(davor[1].datum, 2 * (nr - davor[0]))
    if (danach) return plus(danach[1].datum, -2 * (danach[0] - nr))
    return plus(heute, -2 * (tage.length - tage.findIndex((t) => t.nr === nr)))
  }

  const protokoll: Protokoll[] = []
  const erledigt: Erledigt[] = []
  for (const t of tage) {
    const log = logs.get(t.nr) || {}
    const status = String(log.status || "")
    const pt = planTage.find((x) => x.nr === t.nr) as PlanTag
    let anzahl = 0
    const eintraege: Protokoll[] = []
    const d = datumVon.get(t.nr)
    const datum = d ? d.datum : schaetze(t.nr)
    ;(t.uebungen || []).forEach((e, i) => {
      const pu = pt.uebungen[i]
      const zielRir = pu.rir ?? 2
      const wdhPlan = pu.wdh_bis === pu.wdh_von ? pu.wdh_von : Math.round((pu.wdh_von + pu.wdh_bis) / 2)
      const saetze: Satz[] = []
      let geschaetzt = !d
      if (e.protokoll && e.protokoll.length) {
        // Älterer Stand: im Plan selbst festgehalten, ohne Wiederholungen
        for (const s of [...e.protokoll].sort((a, b) => (a.satz || 0) - (b.satz || 0))) {
          if (s.gewicht == null) continue
          saetze.push(pu.zeit ? { last: null, wdh: 1, rir: zielRir, sekunden: wdhPlan } : { last: s.gewicht, wdh: wdhPlan, rir: s.rpe != null ? Math.max(0, 10 - s.rpe) : zielRir })
          geschaetzt = true
        }
      } else {
        const sets = (log.sets || {})[e.url ? exKey(e.url) : ""] || {}
        for (const k of Object.keys(sets).sort((a, b) => +a - +b)) {
          const s = sets[k]
          if (!satzFertig(s)) continue
          const rir = Math.max(0, zielRir + (s.rpedelta ?? 0))
          if (pu.zeit) saetze.push({ last: null, wdh: 1, rir, sekunden: s.reps ?? wdhPlan })
          else saetze.push({ last: s.gewicht ?? null, wdh: s.reps ?? wdhPlan, rir })
          if (s.reps == null) geschaetzt = true
        }
      }
      if (!saetze.length) return
      // Ersatzübung an diesem Tag: unter ihrem Namen protokollieren
      const ersatz = e.url ? log.subs?.[exKey(e.url)]?.name : undefined
      const id = ersatz ? idVon({ name: ersatz, id: zuordnen(ersatz), saetze: 1, wdh_von: 1, wdh_bis: 1 }) : idVon(pu)
      const p: Protokoll = { datum, uebung: id, saetze, quelle: "kraftbuch" }
      if (id.startsWith("frei:")) p.name = id.slice(5)
      if (geschaetzt) p.geschaetzt = true
      const doppelt = eintraege.find((x) => x.uebung === id)
      if (doppelt) doppelt.saetze.push(...saetze)
      else eintraege.push(p)
      anzahl += saetze.length
    })
    protokoll.push(...eintraege)
    const geplant = pt.uebungen.reduce((n, u) => n + u.saetze, 0)
    const trainiert = status === "trainiert" || (!status && (t.trainiert || (anzahl > 0 && anzahl >= Math.max(1, geplant / 2))))
    if (trainiert) erledigt.push({ datum, titel: pt.titel, minuten: 60, saetze: anzahl, xp: 0, rekorde: [], art: "kraft", plan_nr: t.nr, quelle: "kraftbuch" })
    else if (status) erledigt.push({ datum, titel: pt.titel, minuten: 0, saetze: anzahl, xp: 0, rekorde: [], art: "kraft", plan_nr: t.nr, quelle: "uebersprungen" })
  }
  // Ein Tag mitten im Plan ohne Eintrag gilt nicht als offen, wenn danach schon trainiert wurde
  const letzter = Math.max(0, ...erledigt.map((e) => e.plan_nr as number))
  for (const t of planTage) if (t.nr < letzter && !erledigt.some((e) => e.plan_nr === t.nr)) erledigt.push({ datum: schaetze(t.nr), titel: t.titel, minuten: 0, saetze: 0, xp: 0, rekorde: [], art: "kraft", plan_nr: t.nr, quelle: "uebersprungen" })
  erledigt.sort((a, b) => (a.datum < b.datum ? -1 : a.datum > b.datum ? 1 : (a.plan_nr || 0) - (b.plan_nr || 0)))

  // Maxima: zuletzt eingetragener Wert je Hauptübung, sonst Startwert
  const maxwerte: Record<string, { kg: number; datum: string }> = {}
  const maxe = nach("maxwert")
    .map((d) => d.daten as { uebung?: string; einsrm?: number; gewicht?: number; wdh?: number; datum?: string; deleted?: boolean })
    .filter((m) => !m.deleted && m.uebung)
    .sort((a, b) => String(a.datum || "").localeCompare(String(b.datum || "")))
  for (const m of maxe) {
    const kg = m.einsrm && m.einsrm > 0 ? m.einsrm : m.gewicht ? e1rm({ last: m.gewicht, wdh: m.wdh || 1, rir: 0 }) : 0
    if (kg > 0) maxwerte[idVon({ name: m.uebung as string, id: zuordnen(m.uebung as string), saetze: 1, wdh_von: 1, wdh_bis: 1 })] = { kg: Math.round(kg * 10) / 10, datum: m.datum || heute }
  }
  const ersterTag = erledigt.length ? erledigt[0].datum : heute
  for (const [name, kg] of Object.entries(startwerte)) {
    const id = idVon({ name, id: zuordnen(name), saetze: 1, wdh_von: 1, wdh_bis: 1 })
    if (!maxwerte[id] && kg > 0) maxwerte[id] = { kg, datum: ersterTag }
  }

  // Beschwerden: aktive Einträge, stark = meiden, sonst schonen
  const beschwerden: Beschwerde[] = []
  for (const d of nach("verletzung")) {
    const v = d.daten as { region?: string; severity?: number; status?: string; deleted?: boolean }
    const gelenk = REGION[String(v.region || "")]
    if (v.deleted || v.status !== "aktiv" || !gelenk || beschwerden.some((b) => b.gelenk === gelenk)) continue
    beschwerden.push({ gelenk, grad: (v.severity || 0) >= 7 ? "meiden" : "schonen" })
  }

  // Bandfarbe und Gerätewahl je Übung (Schlüssel = Hash des Namens im Plan)
  const namen = new Map<string, PlanUebung>()
  tage.forEach((t, i) => (t.uebungen || []).forEach((e, k) => e.name && namen.set(nameKey(e.name), planTage[i].uebungen[k])))
  const bandfarben: Record<string, string> = {}
  for (const d of nach("bandfarbe")) {
    const pu = namen.get(String(d.schluessel || ""))
    if (pu && d.daten.color) bandfarben[idVon(pu)] = String(d.daten.color)
  }
  const geraete = new Set<Geraet>(["bank", "rack", "matte", "wand", "latzug", "kabelrudern"])
  for (const d of nach("geraet")) for (const g of GERAET[String(d.daten.geraet || "")] || []) geraete.add(g)
  for (const t of planTage)
    for (const pu of t.uebungen) {
      const u = pu.id ? uebung(pu.id) : undefined
      if (u && u.geraete.length) for (const g of u.geraete[0]) geraete.add(g)
    }
  const ort: Ort | null = planTage.length
    ? {
        ...neuerOrt("Kraftraum (aus dem Kraftbuch)"),
        geraete: Array.from(geraete).sort(),
        // Ausstattung, mit der das Kraftbuch gerechnet hat: Olympiastange 20 kg, SZ-Stange 10 kg, Scheiben 1 bis 10 kg
        // je ein Paar und vier Paar 20 kg, Kurzhanteln 2 bis 40 kg, Kabelturm in 5-kg-Schritten bis 155 kg
        gewichte: { kurzhanteln: Array.from({ length: 20 }, (_, i) => 2 + 2 * i), stange: 20, sz_stange: 10, trap_bar: 0, multipresse_stange: 0, scheiben: [1, 2.5, 5, 10, 20, 20, 20, 20], kettlebells: [], medizinbaelle: [], maschine_schritt: 5, maschine_max: 155, baender: 6 },
        deckenhoehe_cm: 240,
      }
    : null

  // Ältere 1RM-Werte (Phase 1) für die Kurven, Datum vor dem ersten Plantag geschätzt
  const archiv: Record<string, { datum: string; kg: number; text?: string }[]> = {}
  for (const d of nach("kraft_verlauf")) {
    const verlauf = (d.daten.verlauf || {}) as Record<string, { tag: number; value: number }[]>
    for (const [name, punkte] of Object.entries(verlauf)) {
      if (!Array.isArray(punkte) || !punkte.length) continue
      const id = idVon({ name, id: zuordnen(name), saetze: 1, wdh_von: 1, wdh_bis: 1 })
      const maxTag = Math.max(...punkte.map((p) => p.tag || 0))
      archiv[id] = punkte
        .filter((p) => p && p.value > 0)
        .map((p) => ({ datum: plus(ersterTag, -7 - 2 * (maxTag - (p.tag || 0))), kg: Math.round(p.value * 10) / 10, text: "Phase 1 · Tag " + p.tag }))
    }
  }

  // Trainingstage: Wochentage mit mindestens zwei Einheiten in den letzten acht Wochen
  const zaehler = [0, 0, 0, 0, 0, 0, 0]
  for (const e of erledigt) if (e.quelle === "kraftbuch" && e.datum >= plus(heute, -56)) zaehler[(new Date(e.datum + "T12:00:00Z").getUTCDay() + 6) % 7]++
  const trainingstage = zaehler.map((n, i) => (n >= 2 ? i : -1)).filter((i) => i >= 0)

  return {
    plan: planTage.length ? { name: "Kraftbuch", quelle: "kraftbuch", tage: planTage, start: heute } : null,
    protokoll,
    erledigt,
    maxwerte,
    beschwerden,
    bandfarben,
    archiv,
    ort,
    trainingstage: trainingstage.length ? trainingstage : [0, 2, 4],
    frei,
  }
}

/** Übernahme in die Daten einspielen. Vorhandenes bleibt; der Plan wird zum eigenen Plan, fortlaufend. */
export function einspielen(d: Daten, u: Uebernahme, heute: string, name = ""): void {
  if (!d.profil) {
    const p = neuesProfil(heute)
    p.name = name
    p.ziel = "kraft"
    p.erfahrung = "erfahren"
    p.orte = u.ort ? [u.ort] : p.orte
    p.woche = p.woche.map((_, i) => (u.trainingstage.indexOf(i) >= 0 ? { art: "training" as const, ort: 0, minuten: 75, schwerpunkt: "kraft" as const } : { art: "frei" as const }))
    d.profil = p
    d.einstufung = { kraft: heute, mobil: heute }
  } else {
    // Vorhandenes Profil (z. B. vor der Übernahme schon eingerichtet): Kraftraum dazu und als Ort der Trainingstage,
    // Einstufung gilt mit den Maxima aus dem Kraftbuch als erledigt
    if (u.ort && !d.profil.orte.some((o) => o.name === u.ort!.name)) d.profil.orte = [...d.profil.orte, u.ort]
    const k = u.ort ? d.profil.orte.findIndex((o) => o.name === u.ort!.name) : -1
    if (k >= 0) d.profil.woche = d.profil.woche.map((t) => (t.art === "training" ? { ...t, ort: k } : t))
    d.einstufung = { kraft: d.einstufung?.kraft || heute, mobil: d.einstufung?.mobil || heute }
  }
  if (u.plan) {
    d.eigenerPlan = u.plan
    d.profil.planart = "eigen"
    d.profil.folge = "fortlaufend"
  }
  for (const b of u.beschwerden) if (!d.profil.beschwerden.some((x) => x.gelenk === b.gelenk)) d.profil.beschwerden.push(b)
  const schonDa = new Set(d.protokoll.map((p) => p.datum + "|" + p.uebung))
  d.protokoll.push(...u.protokoll.filter((p) => !schonDa.has(p.datum + "|" + p.uebung)))
  d.protokoll.sort((a, b) => (a.datum < b.datum ? -1 : a.datum > b.datum ? 1 : 0))
  const erledigtDa = new Set(d.erledigt.map((e) => e.plan_nr))
  d.erledigt.push(...u.erledigt.filter((e) => !erledigtDa.has(e.plan_nr)))
  d.erledigt.sort((a, b) => (a.datum < b.datum ? -1 : a.datum > b.datum ? 1 : 0))
  d.maxwerte = { ...u.maxwerte, ...(d.maxwerte || {}) }
  d.bandfarben = { ...u.bandfarben, ...(d.bandfarben || {}) }
  d.archiv = { ...u.archiv, ...(d.archiv || {}) }
  d.uebernahmen = { ...(d.uebernahmen || {}), kraftbuch: heute }
}
