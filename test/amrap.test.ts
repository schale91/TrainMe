import { uebung } from "../src/daten/uebungen/index"
import { amrapSpanne, istAmrap, planVorgabe } from "../src/logik/eigenerPlan"
import { e1rm } from "../src/logik/progression"
import { leer } from "../src/logik/speicher"
import type { Daten, PlanUebung } from "../src/logik/typen"

const lasten = Array.from({ length: 80 }, (_, i) => 20 + i * 2.5)
// So kommt „1 × AMRAP, 90 %, RPE 9“ aus dem Kraftbuch an (ältere Übernahme: pauschal 8 bis 12)
const kreuzheben: PlanUebung = { name: "Deadlift", id: "kreuzheben_lh", saetze: 1, wdh_von: 8, wdh_bis: 12, wdh_text: "AMRAP", prozent: [0.9, 0.9], rir: 1 }

describe("AMRAP mit Prozent vom Maximum", () => {
  it("erkennt AMRAP-Schreibweisen", () => {
    for (const t of ["AMRAP", "1 AMRAP", "amrap", "so viele wie möglich", "max.", "Max Wdh"]) expect(istAmrap({ ...kreuzheben, wdh_text: t })).toBe(true)
    for (const t of ["10 (+3+3+3)", "12 / 20", undefined]) expect(istAmrap({ ...kreuzheben, wdh_text: t })).toBe(false)
  })

  it("bei 90 % und 1 im Tank etwa 2 bis 3 Wiederholungen, nicht 10", () => {
    expect(amrapSpanne(kreuzheben)).toEqual({ von: 2, bis: 3 })
    // passt zur Formel des geschätzten Maximums: 3 × 90 % mit 1 im Tank ergibt wieder etwa 100 %
    expect(e1rm({ last: 90, wdh: 3, rir: 1 })).toBeCloseTo(102, 0)
    expect(amrapSpanne({ ...kreuzheben, prozent: [0.75, 0.75], rir: 2 })).toEqual({ von: 8, bis: 8 })
    expect(amrapSpanne({ ...kreuzheben, prozent: undefined })).toBeNull()
  })

  it("Vorgabe für heute: Wiederholungen aus Prozent und Reserve, Hinweis zum Eintragen", () => {
    const d: Daten = { ...leer(), maxwerte: { kreuzheben_lh: { kg: 177.5, datum: "2026-10-20" } } }
    const v = planVorgabe(d, kreuzheben, uebung("kreuzheben_lh")!, lasten, "2026-11-02", "haupt")
    expect([v.wdh_von, v.wdh_bis]).toEqual([2, 3])
    expect(v.last).toBe(157.5)
    expect(v.begruendung).toContain("AMRAP")
    expect(v.begruendung).toContain("etwa 2 bis 3")
  })
})
