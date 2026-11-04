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

/** Geplante Dauer eines Satzes samt Pause in Minuten (etwa 40 Sekunden Arbeit) */
export const satzMin = (p: Pick<Platz, "vorgabe">) => (40 + p.vorgabe.pause_s) / 60

/** Zeitbudget des Tages: die Minuten des Trainingstags im Wochenplan, sonst die geschätzte Dauer der Einheit */
export function zeitBudget(profil: Pick<Profil, "woche">, datum: string, sonst: number): number {
  const tag = profil.woche[(new Date(datum + "T12:00:00Z").getUTCDay() + 6) % 7]
  return tag && tag.art === "training" && tag.minuten && tag.minuten > 0 ? tag.minuten : sonst
}

/** Geschätzte Dauer der ganzen Einheit nach Plan in Minuten (wie die Anzeige in der Wochenübersicht) */
export function schaetzung(plaetze: Pick<Platz, "vorgabe">[], saetze: unknown[][]): number {
  return Math.round(8 + plaetze.reduce((s, p, i) => s + (saetze[i]?.length ?? p.vorgabe.saetze) * satzMin(p), 0))
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
 * Heute gemessen: Zeit zwischen zwei abgehakten Sätzen im Verhältnis zur geplanten Dauer (ab drei Messungen,
 * Abstände über zehn Minuten zählen nicht, etwa nach einem Gespräch). Ohne genug Messungen der gelernte Faktor.
 */
export function heuteFaktor(plaetze: Pick<Platz, "vorgabe">[], saetze: MitZeit[][], gelernt = 1): number {
  const ticks = saetze.flatMap((l, i) => l.filter((s) => s.fertig && s.um !== undefined).map((s) => ({ um: s.um as number, plan: satzMin(plaetze[i]) }))).sort((a, b) => a.um - b.um)
  let ist = 0, plan = 0, n = 0
  for (let k = 1; k < ticks.length; k++) {
    const d = (ticks[k].um - ticks[k - 1].um) / 60000
    if (d <= 0 || d > 10) continue
    ist += d
    plan += ticks[k].plan
    n++
  }
  return n >= 3 && plan > 0 ? Math.min(1.8, Math.max(0.5, ist / plan)) : gelernt
}

/** Vorhersage in Minuten: schon vergangen, noch offen (Sätze mal Faktor plus Aufräumen), zusammen */
export function prognose(beginn: number, jetzt: number, plaetze: Pick<Platz, "vorgabe">[], saetze: MitZeit[][], faktor: number): { vergangen: number; offen: number; gesamt: number } {
  const vergangen = Math.max(0, (jetzt - beginn) / 60000)
  const offen = plaetze.reduce((s, p, i) => s + saetze[i].filter((x) => !x.fertig).length * satzMin(p), 0) * faktor + AUFRAEUMEN_MIN
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
