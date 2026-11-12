// Wo stehe ich im eigenen Plan? Viele Pläne (z. B. aus dem Kraftbuch) haben schwere Wochen, Aufbauwochen und am Ende
// Tests, schreiben das aber nicht an jeden Tag. Diese Datei liest es aus dem, was der Plan vorgibt:
// - Test: Der Tag heißt so („SQUAT-TEST“) oder eine Übung mit Prozent vom Maximum wird „so viele wie möglich“ (AMRAP)
//   gemacht. Daraus schätzt sich das neue Maximum.
// - Schwer: eine Übung ab 90 % vom Maximum mit höchstens drei Wiederholungen (Einzel- bis Dreierwiederholungen).
// - Aufbau: alles andere (mehr Wiederholungen bei weniger Gewicht).
// Nur Anzeige: An Vorgaben, Gewichten und Reihenfolge ändert das nichts.

import { uebung } from "../daten/uebungen/index"
import { idVon, istAmrap } from "./eigenerPlan"
import type { Daten, PlanTag, PlanUebung } from "./typen"

export type TagArt = "test" | "schwer" | "aufbau"

export interface TagMerkmal {
  art: TagArt
  /** höchster Anteil am Maximum an diesem Tag (0 bis 1), null ohne Prozentvorgabe */
  spitze: number | null
  /** kurzer Text für die Anzeige, null an Aufbautagen */
  text: string | null
}

const SCHWER_AB = 0.9
const SCHWER_WDH = 3

const nameVon = (pu: PlanUebung) => uebung(pu.basis || idVon(pu))?.name ?? pu.name
const prozent = (x: number) => String(Math.round(x * 1000) / 10).replace(".", ",") + " %"
const liste = (namen: string[]) => (namen.length <= 1 ? namen.join("") : namen.slice(0, -1).join(", ") + " und " + namen[namen.length - 1])

export function tagMerkmal(t: PlanTag): TagMerkmal {
  const mitProzent = t.uebungen.filter((u) => u.prozent && !u.zeit)
  const spitze = mitProzent.length ? Math.max(...mitProzent.map((u) => u.prozent![1])) : null
  const tests = mitProzent.filter(istAmrap)
  if (tests.length || /\btest/i.test(t.titel)) {
    const was = Array.from(new Set(tests.map(nameVon)))
    const bei = tests.length ? prozent(Math.max(...tests.map((u) => u.prozent![1]))) : null
    return { art: "test", spitze, text: was.length ? "Test: " + liste(was) + ", so viele Wiederholungen wie möglich bei " + bei : "Testtag" }
  }
  const schwer = mitProzent.filter((u) => u.prozent![1] >= SCHWER_AB && u.wdh_von <= SCHWER_WDH)
  if (schwer.length) {
    const oben = Math.max(...schwer.map((u) => u.prozent![1]))
    return { art: "schwer", spitze, text: "Schwer: " + liste(Array.from(new Set(schwer.map(nameVon)))) + " bis " + prozent(oben) }
  }
  return { art: "aufbau", spitze, text: null }
}

export interface PlanWoche {
  abschnitt: string
  /** Woche im Abschnitt, wie der Plan sie nennt (z. B. 9 oder „10B“) */
  woche: string
  tage: number
  erledigt: number
  /** Test, wenn mindestens die Hälfte der Tage Tests sind; schwer, wenn ein Tag schwer ist */
  art: TagArt
  /** einzelne Tests in der Woche (auch in einer schweren Woche) */
  tests: number
  spitze: number | null
  status: "vorbei" | "jetzt" | "kommt"
}

/** Wochen des eigenen Plans in Planreihenfolge, mit Art und Stand. Ohne Wochenangaben im Plan leer. */
export function planWochen(daten: Pick<Daten, "eigenerPlan" | "erledigt">): PlanWoche[] {
  const plan = daten.eigenerPlan
  if (!plan) return []
  const fertig = new Set(daten.erledigt.filter((e) => typeof e.plan_nr === "number").map((e) => e.plan_nr))
  const wochen: (PlanWoche & { arten: TagArt[] })[] = []
  for (const t of [...plan.tage].sort((a, b) => a.nr - b.nr)) {
    if (t.woche === undefined || t.woche === null) continue
    const abschnitt = t.abschnitt || plan.name
    const woche = String(t.woche)
    let w = wochen[wochen.length - 1]
    if (!w || w.abschnitt !== abschnitt || w.woche !== woche) wochen.push((w = { abschnitt, woche, tage: 0, erledigt: 0, art: "aufbau", tests: 0, spitze: null, status: "kommt", arten: [] }))
    const m = tagMerkmal(t)
    w.tage++
    if (fertig.has(t.nr)) w.erledigt++
    w.arten.push(m.art)
    if (m.art === "test") w.tests++
    if (m.spitze !== null && (w.spitze === null || m.spitze > w.spitze)) w.spitze = m.spitze
  }
  let jetzt = false
  return wochen.map(({ arten, ...w }) => {
    const status = w.erledigt >= w.tage ? "vorbei" : jetzt ? "kommt" : "jetzt"
    if (status === "jetzt") jetzt = true
    const art: TagArt = w.tests * 2 >= w.tage ? "test" : arten.includes("schwer") ? "schwer" : "aufbau"
    return { ...w, art, status }
  })
}

export interface Ausblick {
  nr: number
  titel: string
  abschnitt: string
  woche: string
  text: string
  /** so viele offene Plantage liegen davor (0: der nächste Trainingstag) */
  davor: number
}

/** Die nächsten Tests und schweren Tage unter den offenen Plantagen: Tests zuerst nicht, sondern in Planreihenfolge. */
export function ausblick(daten: Pick<Daten, "eigenerPlan" | "erledigt">, anzahl = 3, nurTests = false): Ausblick[] {
  const plan = daten.eigenerPlan
  if (!plan) return []
  const fertig = new Set(daten.erledigt.filter((e) => typeof e.plan_nr === "number").map((e) => e.plan_nr))
  const aus: Ausblick[] = []
  let davor = 0
  for (const t of [...plan.tage].sort((a, b) => a.nr - b.nr)) {
    if (fertig.has(t.nr)) continue
    const m = tagMerkmal(t)
    if (m.text && (m.art === "test" || !nurTests)) aus.push({ nr: t.nr, titel: t.titel, abschnitt: t.abschnitt || plan.name, woche: t.woche === undefined ? "" : String(t.woche), text: m.text, davor })
    if (aus.length >= anzahl) break
    davor++
  }
  return aus
}

export const ART_NAME: Record<TagArt, string> = { test: "Test", schwer: "Schwer", aufbau: "Aufbau" }

/** Kurztext einer Woche, z. B. „Schwer, bis 95 %“ oder „Aufbau, bis 82,5 %, mit Test“ */
export function wochenText(w: Pick<PlanWoche, "art" | "spitze" | "tests">): string {
  return ART_NAME[w.art] + (w.spitze !== null ? ", bis " + prozent(w.spitze) : "") + (w.art !== "test" && w.tests ? ", mit Test" : "")
}
