// Muskelzeile am Trainingstag
import { describe, expect, it } from "vitest"
import { uebung } from "../src/daten/uebungen/index"
import { tagMuskeln, tagMuskelnText } from "../src/logik/tagmuskeln"
import type { Vorgabe } from "../src/logik/typen"

const platz = (id: string, saetze: number) => ({ uebung: uebung(id)!, vorgabe: { saetze } as Vorgabe })

describe("Muskeln des Tages", () => {
  it("Pushtag: Brust, Schultern, Trizeps in der gewohnten Reihenfolge, auch wenn Schultern mehr Sätze haben", () => {
    expect(tagMuskeln([platz("bankdruecken_lh", 4), platz("seitheben", 3), platz("trizeps_pressdown_21er", 3)])).toEqual(["Brust", "Schultern", "Trizeps"])
  })

  it("Nicht mehr als max: die Gruppen mit den meisten Sätzen bleiben", () => {
    const tag = [platz("bankdruecken_lh", 4), platz("seitheben", 3), platz("trizeps_pressdown_21er", 3)]
    expect(tagMuskeln(tag, 2)).toEqual(["Schultern", "Trizeps"])
  })

  it("Beintag: Oberschenkel und Gesäß, keine Brust", () => {
    const m = tagMuskeln([platz("kniebeuge_lh", 4), platz("rdl_lh", 3), platz("wadenheben_stepper", 3)])
    expect(m).toContain("Oberschenkel vorn")
    expect(m).not.toContain("Brust")
  })

  it("Nebenmuskeln zählen halb: wenig Sätze reichen nicht für die Zeile", () => {
    // ein Satz Seitheben allein ergibt keine Muskelzeile (unter 2 gezählten Sätzen)
    expect(tagMuskeln([platz("seitheben", 1)])).toEqual([])
    // Bankdrücken, 4 Sätze: Brust 4, vordere Schulter und Trizeps je halb = 2, beide kommen gerade noch dazu
    expect(tagMuskeln([platz("bankdruecken_lh", 4)])).toEqual(["Brust", "Schultern", "Trizeps"])
    // 3 Sätze: halb sind 1,5, das reicht nicht
    expect(tagMuskeln([platz("bankdruecken_lh", 3)])).toEqual(["Brust"])
  })

  it("Text, Höchstzahl und leerer Tag", () => {
    expect(tagMuskelnText([platz("bankdruecken_lh", 4), platz("seitheben", 1)], 1)).toBe("Brust")
    expect(tagMuskelnText([])).toBe("")
  })
})
