import { describe, expect, it } from "vitest"
import { DEHNUNGEN, TEST_DEHNUNGEN } from "../src/daten/dehnungen"
import { TESTS } from "../src/daten/tests"
import { UEBUNGEN, uebung } from "../src/daten/uebungen/index"
import { ablauf, dauer, mische, standZu } from "../src/logik/dehnbewegung"

describe("Dehnfiguren", () => {
  it("jeder Beweglichkeitstest hat eine Animation", () => {
    for (const t of TESTS) expect(TEST_DEHNUNGEN[t.id], t.id).toBeDefined()
  })
  it("jede Mobilitätsübung hat eine Animation", () => {
    const fehlen = UEBUNGEN.filter((u) => u.muster.startsWith("mobilitaet") && !DEHNUNGEN[u.id]).map((u) => u.id)
    expect(fehlen).toEqual([])
  })
  it("jede Dehnfigur gehört zu einer echten Übung", () => {
    for (const id of Object.keys(DEHNUNGEN)) expect(uebung(id), id).toBeDefined()
  })
  it("Haltezeit aus der Vorgabe bestimmt die Haltephase", () => {
    const d = { ...Object.values(DEHNUNGEN).find((x) => x.art === "halten")!, seiten: false }
    expect(dauer(d, 45) - dauer(d, 30)).toBeCloseTo(15)
    expect(ablauf(d, 45).some((s) => s.text?.startsWith("Halten") && s.s === 45)).toBe(true)
  })
  it("Übergang aus dem Stand dreht das Becken mit, nicht sofort", () => {
    const d = TEST_DEHNUNGEN.finger_boden
    const z = mische(d.start, d.ziel!, 0.5)
    expect(z.dreh![0]).toBeCloseTo((d.ziel!.dreh![0]) / 2)
    expect(standZu(d, 0.5).haltung.dreh?.[0] ?? 0).toBeCloseTo(0)
  })
})

describe("Dehnfigur ohne Durchdringen", () => {
  it("geht in keiner Übung durch Boden oder Gegenstände (gezeichnete Figur)", async () => {
    const { _durchdringungen } = await import("../src/ui/dehnfigur")
    const funde: string[] = []
    for (const [id, d] of Object.entries({ ...DEHNUNGEN, ...TEST_DEHNUNGEN }))
      for (const f of _durchdringungen(d, 8, 1)) funde.push(`${id}: ${f.was} ${(f.tiefe * 100).toFixed(1)} cm bei t=${f.t}`)
    expect(funde).toEqual([])
  }, 60000)
})
