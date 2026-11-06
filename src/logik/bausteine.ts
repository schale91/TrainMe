// Bausteine: feste Zusatzeinheiten neben dem Plan, z. B. zweimal die Woche morgens locker laufen. Ein Baustein gilt ab
// einem Datum an bestimmten Wochentagen, zu einer Tageszeit. Je Woche lässt sich wählen, ob er zusätzlich zum
// Krafttag kommt (Doppeltag, der Plan bleibt), statt des Krafttags (der Plan rückt nach hinten, der Block dauert
// länger) oder in dieser Woche ausfällt.
//
// Kraft und Ausdauer zusammen: Muskelaufbau und Maximalkraft leiden kaum, die Schnellkraft schon, besonders wenn beides
// in derselben Einheit stattfindet (Meta-Analyse Schumann et al. 2022, Sports Medicine 52: 601–612). Deshalb locker
// laufen, Abstand zur Krafteinheit, harte Intervalle nicht direkt vor oder an einem Beintag.

import { uebung } from "../daten/uebungen/index"
import type { Baustein, BausteinArt, BausteinModus, Daten, Einheit, Profil, Tageszeit } from "./typen"

export const BAUSTEIN_ARTEN: { id: BausteinArt; name: string; uebung?: string; art: Einheit["art"] }[] = [
  { id: "laufen_locker", name: "Laufen locker", uebung: "lauf_locker", art: "ausdauer" },
  { id: "laufen_intervall", name: "Laufintervalle", uebung: "intervalle_lauf", art: "ausdauer" },
  { id: "gehen", name: "Zügig gehen", uebung: "gehen_zuegig", art: "ausdauer" },
  { id: "rad_locker", name: "Rad locker", uebung: "rad_locker", art: "ausdauer" },
  { id: "mobility", name: "Mobility", art: "mobilitaet" },
]

export const TAGESZEITEN: { id: Tageszeit; name: string }[] = [
  { id: "morgens", name: "morgens" },
  { id: "mittags", name: "mittags" },
  { id: "abends", name: "abends" },
]

export const MODI: { id: BausteinModus; name: string }[] = [
  { id: "zusatz", name: "Zusätzlich" },
  { id: "statt", name: "Statt Kraft" },
  { id: "aus", name: "Aus" },
]

const TAG = 86400000
const plus = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)
const wt = (d: string) => (new Date(d + "T12:00:00Z").getUTCDay() + 6) % 7
const montagVon = (d: string) => plus(d, -wt(d))

export const bausteinName = (b: Pick<Baustein, "art" | "tageszeit">) => (BAUSTEIN_ARTEN.find((a) => a.id === b.art)?.name ?? "Baustein") + " (" + b.tageszeit + ")"

/** Gilt der Baustein an diesem Tag, und wie (zusätzlich oder statt Kraft)? null: nicht an diesem Tag oder diese Woche aus */
export function modusAm(b: Baustein, datum: string): Exclude<BausteinModus, "aus"> | null {
  if (datum < b.ab || (b.bis && datum > b.bis) || b.tage.indexOf(wt(datum)) < 0) return null
  const m = b.wochen?.[montagVon(datum)] ?? b.modus
  return m === "aus" ? null : m
}

/** Bausteine an einem Tag */
export function bausteineAm(profil: Pick<Profil, "bausteine">, datum: string): { b: Baustein; modus: "zusatz" | "statt" }[] {
  const aus: { b: Baustein; modus: "zusatz" | "statt" }[] = []
  for (const b of profil.bausteine || []) {
    const m = modusAm(b, datum)
    if (m) aus.push({ b, modus: m })
  }
  return aus
}

/** Fällt der Krafttag an diesem Tag weg, weil ein Baustein ihn ersetzt? */
export const stattAm = (profil: Pick<Profil, "bausteine">, datum: string) => bausteineAm(profil, datum).some((x) => x.modus === "statt")

/** Reihenfolge am Tag: morgens vor dem Plan, abends danach */
export const ZEIT_RANG: Record<string, number> = { morgens: 0, mittags: 1, abends: 2 }
export const rang = (e: Pick<Einheit, "tageszeit">) => ZEIT_RANG[e.tageszeit ?? "mittags"]

/** Beintag: Kniebeuge, Hüftstrecken oder einbeinig als Hauptübung */
const beintag = (e: Einheit) => e.art === "kraft" && e.plaetze.some((p) => p.rolle === "haupt" && (p.muster === "kniebeuge" || p.muster === "hueftstreckung" || p.muster === "einbeinig"))

/**
 * Einheiten der Bausteine einer Woche. plan: die Krafteinheiten derselben Woche (für Hinweise zu Doppeltagen und
 * Beintagen); mobility: baut eine Mobility-Einheit (aus der Planung).
 */
export function bausteinWoche(profil: Profil, montag: string, plan: Einheit[], mobility: (datum: string, minuten: number, ort: number) => Einheit): Einheit[] {
  const aus: Einheit[] = []
  if (!profil.bausteine?.length) return aus
  for (let i = 0; i < 7; i++) {
    const datum = plus(montag, i)
    for (const { b, modus } of bausteineAm(profil, datum)) {
      const a = BAUSTEIN_ARTEN.find((x) => x.id === b.art)
      if (!a) continue
      const titel = bausteinName(b)
      const hinweise: string[] = []
      const kraftHeute = plan.filter((e) => e.datum === datum && e.art === "kraft")
      if (modus === "statt") hinweise.push("Statt des Krafttags: Dein Plan geht beim nächsten Trainingstag weiter, der Block dauert dadurch etwas länger.")
      else if (kraftHeute.length && a.art === "ausdauer")
        hinweise.push("Doppeltag: Locker bleiben (du kannst dabei sprechen) und möglichst einige Stunden Abstand zur Krafteinheit. Muskelaufbau und Kraft leiden so kaum, nur die Schnellkraft, besonders in derselben Einheit (Schumann et al. 2022).")
      if (b.art === "laufen_intervall") {
        const morgen = plan.filter((e) => e.datum === plus(datum, 1))
        if ([...kraftHeute, ...morgen].some(beintag)) hinweise.push("Heute oder morgen ist ein Beintag: Intervalle dann lieber locker laufen oder auf einen anderen Tag legen, damit die Beine frisch sind.")
      }
      let e: Einheit
      if (a.art === "mobilitaet") {
        e = { ...mobility(datum, b.minuten, 0), titel }
        e.hinweise = [...hinweise, ...e.hinweise]
      } else {
        const u = uebung(a.uebung as string)
        if (!u) continue
        const intervall = u.muster === "ausdauer_intervall"
        const runden = Math.max(3, Math.min(8, Math.floor((b.minuten - 10) / 4)))
        e = {
          datum,
          titel,
          art: "ausdauer",
          ort: 0,
          minuten: b.minuten,
          plaetze: [
            {
              rolle: "ausdauer",
              muster: u.muster,
              uebung: u,
              vorgabe: intervall
                ? { saetze: runden, wdh_von: 1, wdh_bis: 1, rir: 2, last: 120, modell: "zeit", pause_s: 120, begruendung: "10 Minuten locker einlaufen, dann je 2 Minuten zügig (sprechen fällt schwer) und 2 Minuten locker." }
                : { saetze: 1, wdh_von: 1, wdh_bis: 1, rir: 4, last: b.minuten * 60, modell: "zeit", pause_s: 0, begruendung: "Locker: du kannst dabei noch ganze Sätze sprechen." },
            },
          ],
          hinweise,
        }
      }
      e.tageszeit = b.tageszeit
      e.baustein = b.id
      aus.push(e)
    }
  }
  return aus
}

/**
 * Voraussichtliches Ende des eigenen Plans: die offenen Plantage der Reihe nach auf die Trainingstage ab heute,
 * mit Bausteinen (Tage „statt Kraft“ fallen weg) oder ohne. null ohne eigenen Plan oder wenn alles erledigt ist.
 */
export function planEnde(profil: Profil, daten: Pick<Daten, "eigenerPlan" | "erledigt">, heute: string, mitBausteinen = true): string | null {
  const plan = daten.eigenerPlan
  if (!plan) return null
  const erledigt = new Set(daten.erledigt.filter((e) => typeof e.plan_nr === "number").map((e) => e.plan_nr as number))
  let offen = plan.tage.filter((t) => !erledigt.has(t.nr)).length
  if (!offen) return null
  const tage = profil.woche.map((t, i) => (t.art === "training" && t.quelle !== "trainme" ? i : -1)).filter((i) => i >= 0)
  if (!tage.length) return null
  const heuteErledigt = daten.erledigt.some((e) => typeof e.plan_nr === "number" && e.datum === heute && e.quelle !== "uebersprungen")
  // Fortlaufend: auch heute, wenn heute kein Trainingstag ist und noch nichts erledigt wurde
  let d = heute
  if (profil.folge === "fortlaufend" && !heuteErledigt && tage.indexOf(wt(heute)) < 0 && !(mitBausteinen && stattAm(profil, heute))) {
    offen--
    if (!offen) return heute
  }
  for (let n = 0; n < 3 * 366; n++, d = plus(d, 1)) {
    if (tage.indexOf(wt(d)) < 0 || (d === heute && heuteErledigt) || (mitBausteinen && stattAm(profil, d))) continue
    if (--offen <= 0) return d
  }
  return null
}

/** Neue Baustein-ID */
export const neueBausteinId = () => "b" + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36)
