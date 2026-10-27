import { uebung } from "../src/daten/uebungen/index"
import { planVorgabe } from "../src/logik/eigenerPlan"
import { belastbaresE1rm, satzAnpassung, steigerungsGrenze } from "../src/logik/progression"
import { leer } from "../src/logik/speicher"
import type { Daten, Satz } from "../src/logik/typen"

const s = (last: number, wdh: number, rir: number): Satz => ({ last, wdh, rir })
const lasten = Array.from({ length: 40 }, (_, i) => 20 + i * 2.5)

describe("Gewichtswahl aus dem letzten Mal", () => {
  it("ein frischer erster Satz (80 × 8, danach nur 80 × 2) zählt nur zur Hälfte", () => {
    const heute = [s(80, 8, 1), s(80, 2, 0), s(65, 8, 2), s(65, 5, 0)]
    // Mittel aus 104 kg (Satz 1) und 86,7 kg (Satz 3): etwa 95,3 kg statt 104 kg
    expect(Math.round(belastbaresE1rm(heute) * 10) / 10).toBe(95.3)
  })

  it("nächstes Mal nicht wieder 80 kg, sondern höchstens 7,5 % über dem zuletzt geschafften Gewicht", () => {
    const zuletzt = [s(80, 8, 1), s(80, 3, 0), s(65, 7, 0)]
    expect(steigerungsGrenze(zuletzt, 6)).toBeCloseTo(86, 0) // 80 × 8 zählt als geschafft
    const d: Daten = { ...leer(), protokoll: [{ datum: "2026-10-20", uebung: "bankdruecken_lh", saetze: [s(65, 7, 0), s(65, 6, 0)] }] }
    const v = planVorgabe(d, { name: "Bankdrücken", id: "bankdruecken_lh", saetze: 4, wdh_von: 6, wdh_bis: 8, rir: 2 }, uebung("bankdruecken_lh")!, lasten, "2026-10-27", "haupt")
    // 65 × 7 bis zum Versagen: Maximum etwa 80 kg, für 7 Wiederholungen mit 2 im Tank etwa 61,7 kg
    expect(v.last).toBe(60)
    expect(v.begruendung).toContain("Geschätztes Maximum")
  })

  it("Satz 1 mit weniger Reserve als geplant: nächste Sätze eine Stufe leichter", () => {
    const v = { saetze: 4, wdh_von: 6, wdh_bis: 8, rir: 2, last: 80, modell: "rir" as const, pause_s: 120, begruendung: "" }
    const a = satzAnpassung(s(80, 8, 1), v, "gewicht", lasten)
    expect(a?.richtung).toBe("runter")
    expect(a?.last).toBe(77.5)
  })
})
