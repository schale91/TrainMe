// Eigener Plan: ein fester Plan (vom Coach, aus einem Heft oder aus dem Kraftbuch der Lebenswelt) statt der Planung
// von TrainMe. Der Plan gibt Tage, Übungen, Sätze, Wiederholungen, Prozent vom Maximum oder Reserve vor; TrainMe
// rechnet daraus das Gewicht für heute, führt Protokoll, Pausen und Supersätze. Übungen ohne Gegenstück in der
// Übungsdatenbank laufen als freie Übung („frei:<Name>“) mit eigenem Verlauf.

import { FREI, uebung } from "../daten/uebungen/index"
import { abrunden } from "./gewichte"
import { e1rm } from "./progression"
import type { Daten, Einheit, Erledigt, PlanTag, PlanUebung, Platz, Profil, Protokoll, Rolle, Uebung, Vorgabe } from "./typen"

export { FREI }

const kg = (x: number) => String(Math.round(x * 100) / 100).replace(".", ",")

/** Übung zu einer ID: aus der Datenbank oder als freie Übung aus dem Namen. */
export const planUebung = (id: string): Uebung | undefined => uebung(id)

/** ID, unter der eine Planübung protokolliert wird. */
export function idVon(pu: PlanUebung): string {
  return pu.id && !pu.id.startsWith(FREI) && uebung(pu.id) ? pu.id : FREI + pu.name.replace(/^[A-Z]\d+:\s*/, "").trim()
}

/** Ist dieser erledigte Eintrag ein Tag des eigenen Plans? */
export const planEintrag = (e: Erledigt) => typeof e.plan_nr === "number"

/** Nummer des zuletzt erledigten (trainierten oder übersprungenen) Plantags, 0 = noch keiner. */
export function letzterPlanTag(daten: Daten): number {
  let n = 0
  for (const e of daten.erledigt) if (planEintrag(e) && (e.plan_nr as number) > n) n = e.plan_nr as number
  return n
}

/** Die nächsten offenen Tage des Plans, ab dem ersten nach dem zuletzt erledigten. */
export function offenePlanTage(daten: Daten): PlanTag[] {
  const plan = daten.eigenerPlan
  if (!plan) return []
  const ab = letzterPlanTag(daten)
  return plan.tage.filter((t) => t.nr > ab).sort((a, b) => a.nr - b.nr)
}

export function naechsterPlanTag(daten: Daten): PlanTag | null {
  return offenePlanTage(daten)[0] ?? null
}

/** Plan zu Ende: Es gibt einen Plan, aber keinen offenen Tag mehr. */
export function planZuEnde(daten: Daten): boolean {
  return !!daten.eigenerPlan && daten.eigenerPlan.tage.length > 0 && !naechsterPlanTag(daten)
}

/** Maximum (1 Wiederholung) einer Übung: eingetragen (Einstufung, Kraftbuch) oder geschätzt aus den letzten drei Einheiten. */
export function maximum(daten: Daten, id: string, vor = "9999-12-31"): { kg: number; datum: string; quelle: "max" | "verlauf" } | null {
  const mw = daten.maxwerte?.[id]
  const verlauf = daten.protokoll.filter((p) => p.uebung === id && p.datum < vor).sort((a, b) => (a.datum < b.datum ? -1 : 1))
  const letzte = verlauf.slice(-3)
  let best = 0
  for (const p of letzte) for (const s of p.saetze) best = Math.max(best, e1rm(s))
  const ausVerlauf = best > 0 ? { kg: Math.round(best * 10) / 10, datum: letzte[letzte.length - 1].datum, quelle: "verlauf" as const } : null
  const ausMax = mw && mw.kg > 0 ? { kg: mw.kg, datum: mw.datum, quelle: "max" as const } : null
  // Ein eingetragenes Maximum gilt, bis die Einheiten danach ein höheres ergeben
  if (ausVerlauf && ausMax) return ausVerlauf.datum > ausMax.datum && ausVerlauf.kg > ausMax.kg ? ausVerlauf : ausMax
  return ausVerlauf || ausMax
}

/** Auf vorhandene Lasten abrunden; ohne bekannte Lasten auf 0,5 kg. */
function runde(x: number, lasten: number[]): number {
  if (lasten.length) return abrunden(x, lasten) ?? lasten[0]
  return Math.round(x * 2) / 2
}

function rolleVon(pu: PlanUebung, i: number): Rolle {
  if (pu.prozent) return "haupt"
  if (i === 0 && !pu.gruppe) return "haupt"
  return "neben"
}

/** Vorgabe im Wortlaut für die Anzeige, z. B. „3 × 6 bis 8 · 75 % · 2 im Tank“. */
export function planText(pu: PlanUebung): string {
  const wdh = pu.wdh_text || (pu.wdh_von === pu.wdh_bis ? String(pu.wdh_von) : pu.wdh_von + " bis " + pu.wdh_bis) + (pu.zeit ? " s" : "")
  return pu.saetze + " × " + wdh
}

/**
 * Vorgabe für eine Planübung: Prozent vom Maximum, sonst aus dem letzten Mal bei der Ziel-Reserve, sonst offen.
 * lasten: verfügbare Gewichte am Ort (leer: frei eintragen).
 */
export function planVorgabe(daten: Daten, pu: PlanUebung, u: Uebung, lasten: number[], datum: string, rolle: Rolle): Vorgabe {
  const rir = pu.rir ?? 2
  const mitte = Math.round((pu.wdh_von + pu.wdh_bis) / 2)
  const pause = pu.pause_s ?? (rolle === "haupt" ? 180 : pu.gruppe ? 90 : 120)
  const v: Vorgabe = { saetze: pu.saetze, wdh_von: pu.wdh_von, wdh_bis: pu.wdh_bis, rir, last: null, modell: "rir", pause_s: pause, begruendung: "" }
  if (pu.zeit) {
    v.modell = "zeit"
    v.last = mitte
    v.wdh_von = v.wdh_bis = 1
    v.begruendung = "Vorgabe aus deinem Plan: " + (pu.wdh_text || pu.wdh_von + " bis " + pu.wdh_bis + " s") + "."
    return v
  }
  if (u.belastung !== "gewicht") {
    v.modell = "doppelt"
    v.begruendung = "Vorgabe aus deinem Plan, Ziel " + (pu.wdh_text || pu.wdh_von + " bis " + pu.wdh_bis) + " Wiederholungen mit " + rir + " im Tank."
    return v
  }
  if (pu.prozent) {
    v.modell = "prozent"
    const basis = pu.basis || idVon(pu)
    const max = maximum(daten, basis, datum)
    const [lo, hi] = pu.prozent
    const anteil = (lo + hi) / 2
    const pz = lo === hi ? Math.round(lo * 100) + " %" : Math.round(lo * 100) + " bis " + Math.round(hi * 100) + " %"
    if (max) {
      v.last = runde(max.kg * anteil, lasten)
      v.begruendung = pz + " von " + kg(max.kg) + " kg (" + (max.quelle === "max" ? "dein Maximum vom " + max.datum.split("-").reverse().join(".") : "geschätzt aus deinen letzten Einheiten") + (basis !== idVon(pu) ? ", " + (planUebung(basis)?.name || basis) : "") + ")."
    } else v.begruendung = pz + " von deinem Maximum. Trag unter Fortschritt ein Maximum ein, dann rechnet TrainMe das Gewicht aus."
    return v
  }
  const verlauf = daten.protokoll.filter((p) => p.uebung === u.id && p.datum < datum).sort((a, b) => (a.datum < b.datum ? -1 : 1))
  const letzte = verlauf[verlauf.length - 1]
  const saetze = letzte ? letzte.saetze.filter((s) => s.last && s.wdh > 0) : []
  if (saetze.length) {
    const max = Math.max(...saetze.map(e1rm))
    const ziel = max / (1 + (mitte + rir) / 30)
    v.last = runde(ziel, lasten)
    const s = saetze[saetze.length - 1]
    v.begruendung = "Letztes Mal " + kg(s.last as number) + " kg × " + s.wdh + " mit " + s.rir + " im Tank: für " + mitte + " Wiederholungen mit " + rir + " im Tank etwa " + kg(v.last) + " kg."
    return v
  }
  const max = maximum(daten, u.id, datum)
  if (max) {
    v.last = runde(max.kg / (1 + (mitte + rir) / 30), lasten)
    v.begruendung = "Aus deinem Maximum (" + kg(max.kg) + " kg): etwa " + mitte + " Wiederholungen mit " + rir + " im Tank."
    return v
  }
  v.begruendung = "Erstes Mal: Gewicht so wählen, dass nach " + mitte + " Wiederholungen noch " + rir + " im Tank sind."
  return v
}

/** Einheit für einen Plantag an einem Datum. lastenFuer: verfügbare Gewichte einer Übung am Ort. */
export function einheitAusPlan(profil: Profil, daten: Daten, tag: PlanTag, datum: string, ortIndex: number, lastenFuer: (u: Uebung) => number[]): Einheit {
  const plaetze: Platz[] = tag.uebungen.map((pu, i) => {
    const u = planUebung(idVon(pu)) as Uebung
    const rolle = rolleVon(pu, i)
    const vorgabe = planVorgabe(daten, pu, u, u.id.startsWith(FREI) ? [] : lastenFuer(u), datum, rolle)
    const p: Platz = { rolle, muster: u.muster, uebung: u, vorgabe, warum: [], plantext: planText(pu) + (pu.rir !== undefined ? " · " + pu.rir + " im Tank" : "") }
    if (pu.gruppe) p.gruppe = pu.gruppe
    return p
  })
  const hinweise: string[] = []
  if (tag.abschnitt || tag.woche) hinweise.push([daten.eigenerPlan?.name, tag.abschnitt, tag.woche ? "Woche " + tag.woche : ""].filter(Boolean).join(" · "))
  for (const pu of tag.uebungen) if (pu.hinweis) hinweise.push(pu.name + ": " + pu.hinweis)
  if (profil.beschwerden.length) hinweise.push("Du hast Beschwerden eingetragen. Der eigene Plan wird dafür nicht angepasst: Übungen, die wehtun, tauschen oder auslassen.")
  const minuten = Math.round(8 + plaetze.reduce((s, p) => s + (p.vorgabe.saetze * (40 + (p.gruppe ? p.vorgabe.pause_s / 2 : p.vorgabe.pause_s))) / 60, 0))
  return { datum, titel: tag.titel, art: "kraft", ort: ortIndex, minuten, plaetze, hinweise, plan_nr: tag.nr }
}

/** Trainingstage der Woche (0 = Montag) laut Profil. */
function trainingsTage(profil: Profil): number[] {
  return profil.woche.map((t, i) => (t.art === "training" ? i : -1)).filter((i) => i >= 0)
}

/**
 * Einheiten einer Woche aus dem eigenen Plan. Erledigte Plantage stehen an ihrem Datum; die offenen Tage kommen der
 * Reihe nach auf die verbleibenden Trainingstage ab heute (fortlaufend: der nächste offene Tag auch heute, wenn heute
 * kein Trainingstag ist).
 */
export function planWoche(profil: Profil, daten: Daten, montag: string, heute: string, plusTage: (d: string, n: number) => string, lastenFuer: (u: Uebung, ort: number) => number[]): Einheit[] {
  const plan = daten.eigenerPlan
  if (!plan) return []
  const ende = plusTage(montag, 7)
  const aus: Einheit[] = []
  // Erledigtes aus dieser Woche
  for (const e of daten.erledigt) {
    if (!planEintrag(e) || e.datum < montag || e.datum >= ende || e.quelle === "uebersprungen") continue
    const tag = plan.tage.find((t) => t.nr === e.plan_nr)
    if (!tag) continue
    const ort = profil.woche[(new Date(e.datum + "T12:00:00Z").getUTCDay() + 6) % 7]?.ort ?? 0
    aus.push(einheitAusPlan(profil, daten, tag, e.datum, ort, (u) => lastenFuer(u, ort)))
  }
  if (heute >= ende) return aus
  const offen = offenePlanTage(daten)
  const heuteErledigt = daten.erledigt.some((e) => planEintrag(e) && e.datum === heute && e.quelle !== "uebersprungen")
  let tage = trainingsTage(profil)
    .map((i) => plusTage(montag, i))
    .filter((d) => d >= heute && !(d === heute && heuteErledigt))
  if (profil.folge === "fortlaufend" && !heuteErledigt && heute >= montag && tage[0] !== heute) tage = [heute, ...tage]
  tage.forEach((datum, k) => {
    const tag = offen[k]
    if (!tag) return
    const ort = profil.woche[(new Date(datum + "T12:00:00Z").getUTCDay() + 6) % 7]?.ort ?? 0
    aus.push(einheitAusPlan(profil, daten, tag, datum, Math.min(Math.max(0, ort), Math.max(0, profil.orte.length - 1)), (u) => lastenFuer(u, ort)))
  })
  return aus.sort((a, b) => (a.datum < b.datum ? -1 : 1))
}

/** Einen Plantag bewusst auslassen (zählt nicht als Training, der Plan geht mit dem nächsten Tag weiter). */
export function ueberspringen(daten: Daten, tag: PlanTag, datum: string): void {
  daten.erledigt.push({ datum, titel: tag.titel, minuten: 0, saetze: 0, xp: 0, rekorde: [], art: "kraft", plan_nr: tag.nr, quelle: "uebersprungen" })
}

/** Protokolle einer Übung, für Gewichtsvorschläge im Training. */
export function planVerlauf(daten: Daten, id: string, vor: string): Protokoll[] {
  return daten.protokoll.filter((p) => p.uebung === id && p.datum < vor)
}
