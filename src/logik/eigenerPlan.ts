// Eigener Plan: ein fester Plan (vom Coach, aus einem Heft oder aus dem Kraftbuch der Lebenswelt) statt der Planung
// von TrainMe. Der Plan gibt Tage, Übungen, Sätze, Wiederholungen, Prozent vom Maximum oder Reserve vor; TrainMe
// rechnet daraus das Gewicht für heute, führt Protokoll, Pausen und Supersätze. Übungen ohne Gegenstück in der
// Übungsdatenbank laufen als freie Übung („frei:<Name>“) mit eigenem Verlauf.

import { FREI, uebung } from "../daten/uebungen/index"
import { abrunden } from "./gewichte"
import { stattAm } from "./bausteine"
import { belastbaresE1rm, steigerungsGrenze } from "./progression"
import type { Daten, EigenerPlan, Einheit, Erledigt, PlanTag, PlanUebung, Platz, Profil, Protokoll, Rolle, Uebung, Vorgabe } from "./typen"

export { FREI }

const kg = (x: number) => String(Math.round(x * 100) / 100).replace(".", ",")

/** Übung zu einer ID: aus der Datenbank oder als freie Übung aus dem Namen. */
export const planUebung = (id: string): Uebung | undefined => uebung(id)

/** ID, unter der eine Planübung protokolliert wird. */
export function idVon(pu: PlanUebung): string {
  return pu.id && !pu.id.startsWith(FREI) && uebung(pu.id) ? pu.id : FREI + pu.name.replace(/^[A-Z]\d+:\s*/, "").trim()
}

/**
 * Planübung nach einem dauerhaften Tausch („Immer“): unter der neuen Übung, mit Sätzen, Wiederholungen und Reserve aus
 * dem Plan. Prozent vom Maximum gelten für die alte Übung und entfallen, das Gewicht kommt dann aus dem Verlauf.
 */
export function mitErsatz(daten: Pick<Daten, "ersatz">, pu: PlanUebung): PlanUebung {
  const alt = idVon(pu)
  let id = alt
  const gesehen = new Set<string>()
  while (daten.ersatz?.[id] && !gesehen.has(id)) {
    gesehen.add(id)
    id = daten.ersatz[id]
  }
  const u = id !== alt ? uebung(id) : undefined
  if (!u) return pu
  const { prozent: _p, basis: _b, ...rest } = pu
  return { ...rest, id, name: u.name }
}

/** Ist dieser erledigte Eintrag ein Tag des eigenen Plans? */
export const planEintrag = (e: Erledigt) => typeof e.plan_nr === "number"

/** Nummer des zuletzt erledigten (trainierten oder übersprungenen) Plantags, 0 = noch keiner. */
export function letzterPlanTag(daten: Daten): number {
  let n = 0
  for (const e of daten.erledigt) if (planEintrag(e) && (e.plan_nr as number) > n) n = e.plan_nr as number
  return n
}

/**
 * Plantag zu einer Nummer. Ein Plan, der sich wiederholt, geht nach dem letzten Tag mit dem ersten weiter; die
 * Nummern zählen dabei weiter (Tag 8 eines Plans mit 7 Tagen ist wieder sein erster Tag).
 */
export function tagMitNr(plan: EigenerPlan, nr: number): PlanTag | undefined {
  const genau = plan.tage.find((t) => t.nr === nr)
  if (genau || !plan.wiederholen || !plan.tage.length) return genau
  const liste = [...plan.tage].sort((a, b) => a.nr - b.nr)
  const i = (((nr - liste[0].nr) % liste.length) + liste.length) % liste.length
  return { ...liste[i], nr }
}

/** Die nächsten offenen Tage des Plans, ab dem ersten nach dem zuletzt erledigten (sich wiederholende Pläne: anzahl Tage). */
export function offenePlanTage(daten: Daten, anzahl = 14): PlanTag[] {
  const plan = daten.eigenerPlan
  if (!plan || !plan.tage.length) return []
  const ab = letzterPlanTag(daten)
  if (plan.wiederholen) {
    const erste = Math.min(...plan.tage.map((t) => t.nr))
    const start = Math.max(ab + 1, erste)
    return Array.from({ length: anzahl }, (_, k) => tagMitNr(plan, start + k) as PlanTag)
  }
  return plan.tage.filter((t) => t.nr > ab).sort((a, b) => a.nr - b.nr)
}

export function naechsterPlanTag(daten: Daten): PlanTag | null {
  return offenePlanTage(daten)[0] ?? null
}

/** Plan zu Ende: Es gibt einen Plan, aber keinen offenen Tag mehr. */
export function planZuEnde(daten: Daten): boolean {
  return !!daten.eigenerPlan && !daten.eigenerPlan.wiederholen && daten.eigenerPlan.tage.length > 0 && !naechsterPlanTag(daten)
}

/** Maximum (1 Wiederholung) einer Übung: eingetragen (Einstufung, Kraftbuch) oder geschätzt aus den letzten drei Einheiten. */
export function maximum(daten: Daten, id: string, vor = "9999-12-31"): { kg: number; datum: string; quelle: "max" | "verlauf" } | null {
  const mw = daten.maxwerte?.[id]
  const verlauf = daten.protokoll.filter((p) => p.uebung === id && p.datum < vor).sort((a, b) => (a.datum < b.datum ? -1 : 1))
  const letzte = verlauf.slice(-3)
  let best = 0
  // je Einheit das belastbare Maximum, damit ein falsch eingetragener Satz nicht alles nach oben zieht
  for (const p of letzte) best = Math.max(best, belastbaresE1rm(p.saetze))
  const ausVerlauf = best > 0 ? { kg: Math.round(best * 10) / 10, datum: letzte[letzte.length - 1].datum, quelle: "verlauf" as const } : null
  const ausMax = mw && mw.kg > 0 ? { kg: mw.kg, datum: mw.datum, quelle: "max" as const } : null
  // Ein eingetragenes Maximum gilt, bis die Einheiten danach ein höheres ergeben
  if (ausVerlauf && ausMax) return ausVerlauf.datum > ausMax.datum && ausVerlauf.kg > ausMax.kg ? ausVerlauf : ausMax
  return ausVerlauf || ausMax
}

/** „AMRAP“, „max.“ oder „so viele wie möglich“: Wiederholungen bis kurz vor Schluss statt einer festen Zahl. */
export const istAmrap = (pu: PlanUebung) => /\bamrap\b|so viele wie m(ö|oe)glich|^max\.?(\s*wdh\.?)?$/i.test(pu.wdh_text || "")

/**
 * Erwartete Wiederholungen für einen AMRAP-Satz mit Prozent vom Maximum, nach derselben Formel wie das geschätzte
 * Maximum (Epley mit Reserve): bei 90 % und 1 im Tank etwa 2 bis 3. Ohne Prozentangabe null.
 */
export function amrapSpanne(pu: PlanUebung): { von: number; bis: number } | null {
  if (!istAmrap(pu) || !pu.prozent || pu.zeit) return null
  const anteil = (pu.prozent[0] + pu.prozent[1]) / 2
  // auf Hundertstel, damit 75 % nicht an 7,999… scheitert
  const x = Math.max(1, Math.round((30 * (1 / anteil - 1) - (pu.rir ?? 2)) * 100) / 100)
  return { von: Math.max(1, Math.floor(x)), bis: Math.max(1, Math.ceil(x)) }
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

/** Übung nur mit Band als Last: Lasten sind Stufen 1, 2, 3 … */
function nurBand(u: Uebung, lasten: number[]): boolean {
  return u.geraete.length > 0 && u.geraete.every((g) => g.indexOf("band") >= 0) && lasten.length > 0 && lasten.every((x, i) => x === i + 1)
}

/**
 * Vorgabe für eine Planübung: Prozent vom Maximum, sonst aus dem letzten Mal bei der Ziel-Reserve, sonst offen.
 * lasten: verfügbare Gewichte am Ort (leer: frei eintragen).
 */
export function planVorgabe(daten: Daten, pu: PlanUebung, u: Uebung, lasten: number[], datum: string, rolle: Rolle): Vorgabe {
  const rir = pu.rir ?? 2
  // Ältere Übernahmen haben für AMRAP 8 bis 12 gespeichert: bei hohem Prozentsatz unmöglich
  const amrap = amrapSpanne(pu)
  if (amrap) pu = { ...pu, wdh_von: amrap.von, wdh_bis: amrap.bis }
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
    const pzt = (x: number) => String(Math.round(x * 1000) / 10).replace(".", ",")
    const pz = lo === hi ? pzt(lo) + " %" : pzt(lo) + " bis " + pzt(hi) + " %"
    if (max) {
      v.last = runde(max.kg * anteil, lasten)
      v.begruendung = pz + " von " + kg(max.kg) + " kg (" + (max.quelle === "max" ? "dein Maximum vom " + max.datum.split("-").reverse().join(".") : "geschätzt aus deinen letzten Einheiten") + (basis !== idVon(pu) ? ", " + (planUebung(basis)?.name || basis) : "") + ")."
    } else v.begruendung = pz + " von deinem Maximum. Unter Profil, „Kraftwerte neu einstufen“ kannst du es eintragen, dann rechnet TrainMe das Gewicht aus."
    if (amrap) v.begruendung += " AMRAP: so viele saubere Wiederholungen wie möglich, " + rir + " im Tank lassen; erwartet " + (amrap.von === amrap.bis ? "etwa " + amrap.von : "etwa " + amrap.von + " bis " + amrap.bis) + ". Trag ein, was du geschafft hast."
    return v
  }
  const verlauf = daten.protokoll.filter((p) => p.uebung === u.id && p.datum < datum).sort((a, b) => (a.datum < b.datum ? -1 : 1))
  const letzte = verlauf[verlauf.length - 1]
  const saetze = letzte ? letzte.saetze.filter((s) => s.last && s.wdh > 0) : []
  // Band: die Last ist eine Stufe (Farbe), keine kg. Ein Maximum daraus wäre Unsinn: gleiches Band wie zuletzt
  if (saetze.length && nurBand(u, lasten)) {
    v.last = Math.max(...saetze.map((s) => s.last as number))
    v.begruendung = "Gleiches Band wie beim letzten Mal. Schaffst du mehr als " + pu.wdh_bis + " Wiederholungen mit " + rir + " im Tank, nimm das nächststärkere."
    return v
  }
  if (saetze.length) {
    // belastbares Maximum (Ausreißer zählen nicht) und höchstens 7,5 % über dem zuletzt geschafften Gewicht
    const max = belastbaresE1rm(saetze)
    const grenze = steigerungsGrenze(saetze, pu.wdh_von)
    const roh = max / (1 + (mitte + rir) / 30)
    const ziel = grenze !== null ? Math.min(roh, grenze) : roh
    v.last = runde(ziel, lasten)
    const gedeckelt = grenze !== null && grenze < roh
    v.begruendung = "Geschätztes Maximum aus dem letzten Mal etwa " + kg(Math.round(max)) + " kg: für " + mitte + " Wiederholungen mit " + rir + " im Tank etwa " + kg(v.last) + " kg" + (gedeckelt ? " (höchstens 7,5 % mehr als zuletzt geschafft)" : "") + "."
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
  const plaetze: Platz[] = tag.uebungen.map((pu0, i) => {
    const pu = mitErsatz(daten, pu0)
    const u = planUebung(idVon(pu)) as Uebung
    const rolle = rolleVon(pu, i)
    const vorgabe = planVorgabe(daten, pu, u, u.id.startsWith(FREI) ? [] : lastenFuer(u), datum, rolle)
    const p: Platz = { rolle, muster: u.muster, uebung: u, vorgabe, warum: [], plantext: planText(pu) }
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
  return profil.woche.map((t, i) => (t.art === "training" && t.quelle !== "trainme" ? i : -1)).filter((i) => i >= 0)
}

/**
 * Einheiten einer Woche aus dem eigenen Plan. Erledigte Plantage stehen an ihrem Datum; die offenen Tage kommen der
 * Reihe nach auf die verbleibenden Trainingstage ab heute (fortlaufend: der nächste offene Tag auch heute, wenn heute
 * kein Trainingstag ist).
 */
export function planWoche(profil: Profil, daten: Daten, montag: string, heute: string, plusTage: (d: string, n: number) => string, lastenFuer: (u: Uebung, ort: number) => number[], zusatz?: (p: Profil) => Einheit[]): Einheit[] {
  const plan = daten.eigenerPlan
  if (!plan) return []
  const ende = plusTage(montag, 7)
  const aus: Einheit[] = []
  // Erledigtes aus dieser Woche
  for (const e of daten.erledigt) {
    if (!planEintrag(e) || e.datum < montag || e.datum >= ende || e.quelle === "uebersprungen") continue
    const tag = tagMitNr(plan, e.plan_nr as number)
    if (!tag) continue
    const ort = profil.woche[(new Date(e.datum + "T12:00:00Z").getUTCDay() + 6) % 7]?.ort ?? 0
    aus.push(einheitAusPlan(profil, daten, tag, e.datum, ort, (u) => lastenFuer(u, ort)))
  }
  // Tage, an denen TrainMe zusätzlich plant (z. B. leichte Einheiten neben einem Physio-Plan). In der Reha erst nach
  // der Freigabe durch Arzt oder Physiotherapie.
  const zusatzTage = profil.woche.map((t, i) => (t.art === "training" && t.quelle === "trainme" ? i : -1)).filter((i) => i >= 0)
  if (zusatz && zusatzTage.length && (!profil.reha || profil.reha.freigabe)) {
    const nur: Profil = { ...profil, planart: "trainme", woche: profil.woche.map((t, i) => (zusatzTage.indexOf(i) >= 0 ? t : { art: "frei" as const })) }
    aus.push(...zusatz(nur))
  }
  if (heute >= ende) return aus.sort((a, b) => (a.datum < b.datum ? -1 : 1))
  const heuteErledigt = daten.erledigt.some((e) => planEintrag(e) && e.datum === heute && e.quelle !== "uebersprungen")
  // offene Trainingstage einer Woche ab heute
  const termine = (mo: string): string[] => {
    const t = trainingsTage(profil)
      .map((i) => plusTage(mo, i))
      // Tage, an denen ein Baustein den Krafttag ersetzt, fallen weg: der Plan rückt nach hinten
      .filter((d) => d >= heute && !(d === heute && heuteErledigt) && !stattAm(profil, d))
    return profil.folge === "fortlaufend" && !heuteErledigt && heute >= mo && heute < plusTage(mo, 7) && t[0] !== heute && !stattAm(profil, heute) ? [heute, ...t] : t
  }
  // Spätere Wochen machen dort weiter, wo die Wochen davor (ab heute) aufhören; nach dem letzten Plantag bleibt es leer
  let vorher = 0
  for (let w = plusTage(montag, -7); plusTage(w, 7) > heute; w = plusTage(w, -7)) vorher += termine(w).length
  const tage = termine(montag)
  const offen = offenePlanTage(daten, vorher + tage.length + 1).slice(vorher)
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

/**
 * Plan aus Text, zum Beispiel vom Zettel der Physiotherapie:
 *   Tag 1: Hüfte
 *   Brücke 3 x 12
 *   Seitlage Bein abspreizen 3 x 10 je Seite
 *   Wandsitzen 3 x 30 s
 * Zeilen mit „Tag …“ oder „#“ beginnen einen Tag; „A1:“ und „A2:“ bilden einen Supersatz; „75 %“ und „2 im Tank“
 * (oder „RIR 2“, „@8“) gelten als Vorgabe. Ohne Tageszeile wird alles ein Tag.
 */
export function planAusText(text: string, name: string, zuordnen: (n: string) => string | undefined): EigenerPlan {
  const tage: PlanTag[] = []
  let tag: PlanTag | null = null
  for (const roh of text.split(/\r?\n/)) {
    const zeile = roh.trim()
    if (!zeile) continue
    const kopf = /^(?:#+\s*|tag\s*\d*\s*[:.)-]?\s*)(.*)$/i.exec(zeile)
    if (kopf && /^(#|tag\b)/i.test(zeile)) {
      tag = { nr: tage.length + 1, titel: kopf[1].trim() || "Tag " + (tage.length + 1), uebungen: [] }
      tage.push(tag)
      continue
    }
    if (!tag) {
      tag = { nr: 1, titel: name || "Plan", uebungen: [] }
      tage.push(tag)
    }
    tag.uebungen.push(uebungAusZeile(zeile, zuordnen))
  }
  return { name: name || "Eigener Plan", tage: tage.filter((t) => t.uebungen.length), start: new Date().toISOString().slice(0, 10) }
}


function uebungAusZeile(zeile: string, zuordnen: (n: string) => string | undefined): PlanUebung {
  let rest = zeile
  const gruppe = /^([A-Z])\d+\s*[:.)]\s*/.exec(rest)
  if (gruppe) rest = rest.slice(gruppe[0].length)
  const m = /^(.*?)\s+(\d+)\s*[x×]\s*(\d+)(?:\s*[-–]\s*(\d+))?\s*(s|sek\.?|sekunden|min\.?|minuten)?(?=[\s,;]|$)(.*)$/i.exec(rest)
  const name = (m ? m[1] : rest).replace(/[,;:]\s*$/, "").trim()
  const pu: PlanUebung = m ? { name, saetze: +m[2], wdh_von: +m[3], wdh_bis: m[4] ? +m[4] : +m[3] } : { name, saetze: 2, wdh_von: 10, wdh_bis: 10, wdh_text: "nach Vorgabe" }
  if (m && m[5]) {
    pu.zeit = true
    if (/^min/i.test(m[5])) {
      pu.wdh_von *= 60
      pu.wdh_bis *= 60
    }
  }
  const zusatz = (m ? m[6] : "").trim()
  const pz = /(\d+(?:[.,]\d+)?)\s*(?:[-–]\s*(\d+(?:[.,]\d+)?))?\s*%/.exec(zusatz)
  if (pz) pu.prozent = [parseFloat(pz[1].replace(",", ".")) / 100, parseFloat((pz[2] || pz[1]).replace(",", ".")) / 100]
  const rir = /(\d+)\s*im\s*tank|rir\s*(\d+)/i.exec(zusatz)
  const rpe = /@\s*(\d+(?:[.,]5)?)/.exec(zusatz)
  if (rir) pu.rir = +(rir[1] || rir[2])
  else if (rpe) pu.rir = Math.max(0, 10 - parseFloat(rpe[1].replace(",", ".")))
  const hinweis = zusatz.replace(pz?.[0] || "", "").replace(rir?.[0] || "", "").replace(rpe?.[0] || "", "").replace(/^[\s,;·-]+|[\s,;·-]+$/g, "")
  if (hinweis) pu.hinweis = hinweis
  if (gruppe) pu.gruppe = gruppe[1]
  const id = zuordnen(name)
  if (id) pu.id = id
  return pu
}

/** Plan als Text zum Bearbeiten (Gegenstück zu planAusText). */
export function planZuText(plan: EigenerPlan): string {
  const zahl = (x: number) => String(Math.round(x * 1000) / 10).replace(".", ",")
  return [...plan.tage]
    .sort((a, b) => a.nr - b.nr)
    .map((t) => {
      const gruppen: Record<string, number> = {}
      const zeilen = t.uebungen.map((u) => {
        const g = u.gruppe ? u.gruppe + (gruppen[u.gruppe] = (gruppen[u.gruppe] || 0) + 1) + ": " : ""
        const wdh = u.zeit ? (u.wdh_von === u.wdh_bis ? u.wdh_von : u.wdh_von + "-" + u.wdh_bis) + " s" : u.wdh_von === u.wdh_bis ? String(u.wdh_von) : u.wdh_von + "-" + u.wdh_bis
        const extra = [u.prozent ? (u.prozent[0] === u.prozent[1] ? zahl(u.prozent[0]) : zahl(u.prozent[0]) + "-" + zahl(u.prozent[1])) + " %" : "", u.rir !== undefined ? u.rir + " im Tank" : "", u.hinweis || ""].filter(Boolean).join(", ")
        return g + u.name + " " + u.saetze + " x " + wdh + (extra ? " " + extra : "")
      })
      return ["Tag " + t.nr + ": " + t.titel, ...zeilen].join("\n")
    })
    .join("\n\n")
}
