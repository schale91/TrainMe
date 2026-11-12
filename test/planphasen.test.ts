// Phasen im eigenen Plan: schwere Wochen, Aufbauwochen und Tests aus den Vorgaben des Plans gelesen
import { describe, expect, it } from "vitest"
import { ausblick, planWochen, tagMerkmal, wochenText } from "../src/logik/planphasen"
import { leer } from "../src/logik/speicher"
import type { Daten, PlanTag, PlanUebung } from "../src/logik/typen"

const ue = (name: string, id: string, saetze: number, wdh: number, prozent?: [number, number], wdh_text?: string): PlanUebung => ({ name, id, saetze, wdh_von: wdh, wdh_bis: wdh, prozent, wdh_text })
const tag = (nr: number, titel: string, abschnitt: string, woche: number | string, uebungen: PlanUebung[]): PlanTag => ({ nr, titel, abschnitt, woche: woche as number, uebungen })

// Aufbau wie in einem Powerbuilding-Plan: Woche 9 schwer mit einem Test, Woche 10 Aufbau, am Ende eine Testwoche
const TAGE: PlanTag[] = [
  tag(1, "FULL BODY 1", "Block A", 9, [ue("Back Squat", "kniebeuge_lh", 4, 2, [0.85, 0.9]), ue("Barbell Bench Press", "bankdruecken_lh", 3, 6, [0.775, 0.775])]),
  tag(2, "FULL BODY 2", "Block A", 9, [ue("Lateral Raise", "seitheben", 3, 15)]),
  tag(3, "FULL BODY 4", "Block A", 9, [ue("Deadlift", "kreuzheben_lh", 1, 8, [0.9, 0.9], "AMRAP")]),
  tag(4, "LEGS 1", "Block A", 10, [ue("Pin Squat", "kniebeuge_lh", 2, 5, [0.725, 0.725])]),
  tag(5, "PUSH 1", "Block A", 10, [ue("Lateral Raise", "seitheben", 3, 15)]),
  tag(6, "SQUAT-TEST", "Block B", "10B", [ue("Back Squat", "kniebeuge_lh", 1, 8, [0.9, 0.9], "AMRAP")]),
  tag(7, "BENCH-TEST", "Block B", "10B", [ue("Barbell Bench Press", "bankdruecken_lh", 1, 8, [0.9, 0.9], "AMRAP")]),
]
const daten = (erledigt: number[]): Daten => ({ ...leer(), eigenerPlan: { name: "Plan", start: "2026-11-01", tage: TAGE }, erledigt: erledigt.map((nr) => ({ datum: "2026-11-0" + nr, titel: "x", minuten: 60, saetze: 10, xp: 0, rekorde: [], plan_nr: nr })) })

describe("Phasen im eigenen Plan", () => {
  it("erkennt schwere Tage, Tests und Aufbautage aus den Vorgaben", () => {
    expect(tagMerkmal(TAGE[0])).toMatchObject({ art: "schwer", spitze: 0.9 })
    expect(tagMerkmal(TAGE[0]).text).toMatch(/^Schwer: .* bis 90 %$/)
    // Bankdrücken mit 6 Wiederholungen bei 77,5 % macht den Tag nicht schwer und steht nicht im Text
    expect(tagMerkmal(TAGE[0]).text).not.toMatch(/Bank/)
    expect(tagMerkmal(TAGE[1])).toEqual({ art: "aufbau", spitze: null, text: null })
    expect(tagMerkmal(TAGE[2]).art).toBe("test")
    expect(tagMerkmal(TAGE[2]).text).toMatch(/^Test: .*so viele Wiederholungen wie möglich bei 90 %$/)
    expect(tagMerkmal(TAGE[3])).toMatchObject({ art: "aufbau", spitze: 0.725, text: null })
    // der Titel reicht: auch ohne lesbare Vorgabe ist ein „TEST“-Tag ein Test
    expect(tagMerkmal({ nr: 9, titel: "DEADLIFT-TEST", uebungen: [] })).toMatchObject({ art: "test", text: "Testtag" })
  })

  it("fasst Wochen zusammen: schwer mit Test, Aufbau, Testwoche; mit Stand", () => {
    const w = planWochen(daten([1, 2]))
    expect(w.map((x) => x.abschnitt + " W" + x.woche + " " + x.art + " " + x.status + " " + x.erledigt + "/" + x.tage)).toEqual(["Block A W9 schwer jetzt 2/3", "Block A W10 aufbau kommt 0/2", "Block B W10B test kommt 0/2"])
    expect(wochenText(w[0])).toBe("Schwer, bis 90 %, mit Test")
    expect(wochenText(w[1])).toBe("Aufbau, bis 72,5 %")
    expect(wochenText(w[2])).toBe("Test, bis 90 %")
    // alles erledigt: keine Woche ist mehr „jetzt“
    expect(planWochen(daten([1, 2, 3, 4, 5, 6, 7])).every((x) => x.status === "vorbei")).toBe(true)
    // Plan ohne Wochenangaben: keine Wochen, statt etwas zu erfinden
    expect(planWochen({ ...leer(), eigenerPlan: { name: "P", start: "2026-11-01", tage: [{ nr: 1, titel: "A", uebungen: [] }] } })).toEqual([])
  })

  it("Ausblick: die nächsten besonderen Tage unter den offenen, mit Abstand in Trainingstagen", () => {
    const a = ausblick(daten([1, 2]), 3)
    expect(a.map((x) => x.nr + ":" + x.davor)).toEqual(["3:0", "6:3", "7:4"])
    expect(a[0].text).toMatch(/^Test: /)
    // nur Tests, auch wenn vorher schwere Tage kommen
    expect(ausblick(daten([]), 1, true).map((x) => x.nr)).toEqual([3])
    expect(ausblick(daten([1, 2, 3, 4, 5, 6, 7]))).toEqual([])
  })
})
