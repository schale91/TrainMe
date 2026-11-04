// Trainingszeit: Die Einheit läuft vom Knopf „Training starten“ bis „Training beenden“, Aufwärmen und Aufräumen
// eingeschlossen. Jeder abgehakte Satz bekommt einen Zeitstempel. Daraus wird gemessen, wie lange ein Satz samt
// Pause wirklich dauert, und vorhergesagt, wann die Einheit fertig ist. Passt das nicht ins Zeitbudget des Tages,
// werden zuerst die Pausen der Ergänzungsübungen kürzer (die Hauptübungen behalten ihre Pause); reicht das nicht,
// schlägt die App vor, optionale Übungen und je einen Satz der Ergänzungen wegzulassen.

import type { Daten, Platz, Profil } from "./typen"

/** Minuten für Abschluss und Aufräumen nach dem letzten Satz */
export const AUFRAEUMEN_MIN = 3
/** kürzeste Pause, auf die Ergänzungsübungen verkürzt werden (Sekunden) */
export const PAUSE_MIN_S = 60
/** längste Pause der Ergänzungsübungen nach dem Kürzen (Sekunden) */
export const PAUSE_KURZ_S = 90

interface MitZeit {
  fertig: boolean
  um?: number
}

/** Sekunden je Scheibe auflegen oder abnehmen (greifen, aufschieben, Verschluss) */
export const SCHEIBE_S = 8
/**
 * Auf- und Abbauen einer Übung in Minuten: an der Stange (Langhantel, SZ, Trap Bar) eine halbe Minute für Stange,
 * Verschlüsse und Platz und je Scheibe zweimal (auf und ab) auf beiden Seiten; sonst kurzes Umstellen (Hanteln
 * holen, Kabel umhängen). scheibenJeSeite: Scheiben für den schwersten Satz, null ohne Stange.
 */
export function umbauMin(scheibenJeSeite: number | null): number {
  if (scheibenJeSeite === null) return 0.3
  return 0.5 + (scheibenJeSeite * 2 * 2 * SCHEIBE_S) / 60
}

/** Geplante Dauer eines Satzes samt Pause in Minuten (etwa 40 Sekunden Arbeit) */
export const satzMin = (p: Pick<Platz, "vorgabe">) => (40 + p.vorgabe.pause_s) / 60

/** Sekunden für den Wechsel zwischen den Übungen eines Supersatzes (ohne Pause, nur hinübergehen) */
export const SUPERSATZ_WECHSEL_S = 20

type MitGruppe = Pick<Platz, "vorgabe"> & { gruppe?: string }

/**
 * Dauer eines Satzes samt Pause je Platz in Minuten. Im Supersatz folgt die nächste Übung der Gruppe ohne Pause
 * (nur der kurze Wechsel), die Pause kommt nach der letzten Übung der Gruppe.
 */
export function satzMinuten(plaetze: MitGruppe[]): number[] {
  return plaetze.map((p, i) => {
    if (!p.gruppe) return satzMin(p)
    const gruppe = plaetze.map((x, k) => (x.gruppe === p.gruppe ? k : -1)).filter((k) => k >= 0)
    if (gruppe.length < 2) return satzMin(p)
    return gruppe[gruppe.length - 1] === i ? satzMin(p) : (40 + SUPERSATZ_WECHSEL_S) / 60
  })
}

/** Zeitbudget des Tages: die Minuten des Trainingstags im Wochenplan, sonst die geschätzte Dauer der Einheit */
export function zeitBudget(profil: Pick<Profil, "woche">, datum: string, sonst: number): number {
  const tag = profil.woche[(new Date(datum + "T12:00:00Z").getUTCDay() + 6) % 7]
  return tag && tag.art === "training" && tag.minuten && tag.minuten > 0 ? tag.minuten : sonst
}

/**
 * Geschätzte Dauer der ganzen Einheit nach Plan in Minuten: Arbeitssätze mit Pause, Aufräumen und extra (Minuten für
 * Aufwärmsätze, in der Reha ein allgemeines Aufwärmen). Ohne extra wie die Anzeige in der Wochenübersicht (8 min).
 */
export function schaetzung(plaetze: MitGruppe[], saetze: unknown[][], extra?: number): number {
  const m = satzMinuten(plaetze)
  return Math.round((extra === undefined ? 8 : AUFRAEUMEN_MIN + extra) + plaetze.reduce((s, p, i) => s + (saetze[i]?.length ?? p.vorgabe.saetze) * m[i], 0))
}

const median = (x: number[]) => {
  if (!x.length) return NaN
  const s = [...x].sort((a, b) => a - b)
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2
}

/** Aus früheren Einheiten gelernt: tatsächliche Dauer geteilt durch die Schätzung (Median der letzten sechs) */
export function lernFaktor(daten: Pick<Daten, "erledigt">): number {
  const r = daten.erledigt
    .filter((e) => e.dauer_min && e.geschaetzt_min)
    .slice(-6)
    .map((e) => (e.dauer_min as number) / (e.geschaetzt_min as number))
  const m = median(r)
  return Number.isFinite(m) ? Math.min(1.6, Math.max(0.6, m)) : 1
}

/**
 * Heute gemessen: Zeit zwischen zwei Sätzen derselben Übung im Verhältnis zur geplanten Dauer (ab drei Messungen;
 * Wechsel zwischen Übungen zählen nicht, die deckt die Umbauzeit ab; Abstände über zehn Minuten zählen nicht). Im
 * Supersatz ist eine Runde aller Übungen der Gruppe geplant. Ohne genug Messungen der gelernte Faktor.
 */
export function heuteFaktor(plaetze: MitGruppe[], saetze: MitZeit[][], gelernt = 1): number {
  let ist = 0, plan = 0, n = 0
  const m = satzMinuten(plaetze)
  plaetze.forEach((p, i) => {
    const runde = p.gruppe ? plaetze.reduce((s, x, k) => s + (x.gruppe === p.gruppe ? m[k] : 0), 0) : m[i]
    const um = saetze[i].filter((s) => s.fertig && s.um !== undefined).map((s) => s.um as number).sort((a, b) => a - b)
    for (let k = 1; k < um.length; k++) {
      const d = (um[k] - um[k - 1]) / 60000
      if (d <= 0 || d > 10) continue
      ist += d
      plan += runde
      n++
    }
  })
  return n >= 3 && plan > 0 ? Math.min(1.8, Math.max(0.5, ist / plan)) : gelernt
}

/** Vorhersage in Minuten: schon vergangen, noch offen (Sätze mal Faktor plus Aufräumen), zusammen */
export function prognose(beginn: number, jetzt: number, plaetze: MitGruppe[], saetze: MitZeit[][], faktor: number): { vergangen: number; offen: number; gesamt: number } {
  const vergangen = Math.max(0, (jetzt - beginn) / 60000)
  const m = satzMinuten(plaetze)
  const offen = plaetze.reduce((s, _p, i) => s + saetze[i].filter((x) => !x.fertig).length * m[i], 0) * faktor + AUFRAEUMEN_MIN
  return { vergangen, offen, gesamt: vergangen + offen }
}

/** Pausen der Ergänzungsübungen kürzen (Hauptübungen bleiben). Gibt die neuen Plätze und die gekürzten Übungen zurück. */
export function pausenKuerzen<P extends Pick<Platz, "vorgabe" | "rolle"> & { uebung: { name: string } }>(plaetze: P[]): { plaetze: P[]; gekuerzt: string[] } {
  const gekuerzt: string[] = []
  const neu = plaetze.map((p) => {
    if (p.rolle === "haupt" || p.vorgabe.pause_s <= PAUSE_KURZ_S) return p
    gekuerzt.push(p.uebung.name)
    return { ...p, vorgabe: { ...p.vorgabe, pause_s: Math.max(PAUSE_MIN_S, Math.min(PAUSE_KURZ_S, Math.round(p.vorgabe.pause_s * 0.6))) } }
  })
  return { plaetze: neu, gekuerzt }
}

/** Vorschlag, wenn auch kürzere Pausen nicht reichen: optionale Übungen ganz und je ein offener Satz der Ergänzungen mit mindestens drei Sätzen */
export function weglassenVorschlag(plaetze: (Pick<Platz, "rolle"> & { uebung: { name: string } })[], saetze: MitZeit[][]): { ganz: number[]; einSatz: number[] } {
  const ganz: number[] = [], einSatz: number[] = []
  plaetze.forEach((p, i) => {
    const offen = saetze[i].filter((s) => !s.fertig).length
    if (!offen || p.rolle === "haupt") return
    if (/optional/i.test(p.uebung.name)) ganz.push(i)
    else if (saetze[i].length >= 3) einSatz.push(i)
  })
  return { ganz, einSatz }
}

/** Pausen der Hauptübungen deutlich kürzer als geplant? (Median der Abstände unter 60 % der geplanten Dauer) */
export function hauptPausenZuKurz(plaetze: Pick<Platz, "vorgabe" | "rolle">[], saetze: MitZeit[][]): boolean {
  const r: number[] = []
  plaetze.forEach((p, i) => {
    if (p.rolle !== "haupt") return
    const um = saetze[i].filter((s) => s.fertig && s.um !== undefined).map((s) => s.um as number).sort((a, b) => a - b)
    for (let k = 1; k < um.length; k++) r.push((um[k] - um[k - 1]) / 60000 / satzMin(p))
  })
  return r.length >= 2 && median(r) < 0.6
}

type FuerSupersatz = Pick<Platz, "vorgabe" | "rolle"> & { gruppe?: string; uebung: { muskeln: string[]; sekundaer?: string[]; art?: string } }

/** Geräte, von denen es mehrere gibt (Hantelständer, Bänder): zwei Übungen damit gehen im Wechsel */
const MEHRFACH = new Set(["kurzhantel", "kettlebell", "hantelscheibe", "band", "medizinball"])

/** Muskeln zu Muskelgruppen zusammengefasst: Latzug und Rudern sind beide Rücken, auch wenn die Hauptmuskeln verschieden heißen */
const REGION: Record<string, string> = {
  schulter_vorn: "schulter",
  schulter_seitlich: "schulter",
  schulter_hinten: "schulter",
  rotatorenmanschette: "schulter",
  latissimus: "ruecken",
  oberer_ruecken: "ruecken",
  trapez: "ruecken",
  nacken: "ruecken",
  bizeps: "armbeuger",
  unterarm: "armbeuger",
  bauch: "rumpf",
  schraege_bauch: "rumpf",
  hueftbeuger: "rumpf",
  gesaess: "beinrueckseite",
  gesaess_mittel: "beinrueckseite",
  beinbeuger: "beinrueckseite",
  quadrizeps: "beinvorderseite",
  adduktoren: "beinvorderseite",
  waden: "unterschenkel",
  schienbein: "unterschenkel",
}

/** Rollen, die sich für einen Supersatz zum Zeitsparen eignen (Hauptübungen behalten ihre volle Pause) */
const SUPERSATZ_ROLLEN = new Set(["neben", "isolation", "praevention"])

/**
 * Supersatz zum Zeitsparen: zwei aufeinanderfolgende Ergänzungsübungen, die verschiedene Muskelgruppen beanspruchen
 * (keine Hauptmuskelgruppe der einen ist Haupt- oder Hilfsmuskelgruppe der anderen), abwechselnd mit einer Pause je Runde.
 * Agonist und Antagonist im Wechsel erhalten die Leistung (Robbins et al. 2010; Paz et al. 2017) und sparen etwa die
 * Hälfte der Zeit (Weakley et al. 2017). Nicht mit demselben Gerät (eine Stange, ein Kabelzug), sonst wird ständig
 * umgebaut. geraet: das Lastgerät je Platz. Gibt Paare zurück, bis die Ersparnis fehlt_min erreicht.
 */
export function supersatzVorschlag(plaetze: FuerSupersatz[], saetze: MitZeit[][], geraet: (string | null)[], fehlt_min: number): { paare: [number, number][]; spart_min: number } {
  const paare: [number, number][] = []
  let spart = 0
  const geeignet = (i: number) => !plaetze[i].gruppe && SUPERSATZ_ROLLEN.has(plaetze[i].rolle) && plaetze[i].uebung.art !== "mobilitaet" && saetze[i].some((s) => !s.fertig)
  const getrennt = (a: FuerSupersatz["uebung"], b: FuerSupersatz["uebung"]) => {
    const r = (m: string[]) => m.map((x) => REGION[x] ?? x)
    if ([...a.muskeln, ...b.muskeln].some((m) => m === "ganzkoerper" || m === "herz_kreislauf")) return false
    const alleB = new Set(r([...b.muskeln, ...(b.sekundaer || [])]))
    const alleA = new Set(r([...a.muskeln, ...(a.sekundaer || [])]))
    return !r(a.muskeln).some((m) => alleB.has(m)) && !r(b.muskeln).some((m) => alleA.has(m))
  }
  for (let i = 0; i + 1 < plaetze.length && spart < fehlt_min; i++) {
    const j = i + 1
    if (!geeignet(i) || !geeignet(j) || !getrennt(plaetze[i].uebung, plaetze[j].uebung)) continue
    if (geraet[i] && geraet[i] === geraet[j] && !MEHRFACH.has(geraet[i] as string)) continue
    const runden = Math.min(saetze[i].filter((s) => !s.fertig).length, saetze[j].filter((s) => !s.fertig).length)
    const s = (runden * (Math.min(plaetze[i].vorgabe.pause_s, plaetze[j].vorgabe.pause_s) - SUPERSATZ_WECHSEL_S)) / 60
    if (s < 1) continue
    paare.push([i, j])
    spart += s
    i++
  }
  return { paare, spart_min: Math.round(spart) }
}

/** Freier Buchstabe für eine neue Supersatz-Gruppe (A, B, …), der im Plan noch nicht vorkommt */
export function freieGruppe(plaetze: { gruppe?: string }[], schon: string[] = []): string {
  const belegt = new Set([...plaetze.map((p) => p.gruppe).filter(Boolean), ...schon])
  for (const b of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") if (!belegt.has(b)) return b
  return "S" + belegt.size
}
