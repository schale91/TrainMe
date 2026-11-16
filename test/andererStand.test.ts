// Kreuzheben im anderen Stand: Prozente vom eigenen Maximum, sobald es eins gibt; Pausenvarianten bleiben bei der Grundübung
import { describe, expect, it } from "vitest"
import { uebung } from "../src/daten/uebungen/index"
import { planVorgabe } from "../src/logik/eigenerPlan"
import { zuordnen } from "../src/logik/kraftbuch"
import { leer } from "../src/logik/speicher"
import type { Daten, PlanUebung } from "../src/logik/typen"

const lasten = Array.from({ length: 80 }, (_, i) => 20 + i * 2.5)
const anders: PlanUebung = { name: "Opposite Stance Deadlift", id: "kreuzheben_gegenstand", basis: "kreuzheben_lh", saetze: 3, wdh_von: 3, wdh_bis: 3, prozent: [0.8, 0.8], rir: 4 }

describe("Kreuzheben im anderen Stand", () => {
  it("wird aus dem Kraftbuch richtig zugeordnet", () => {
    expect(zuordnen("Opposite Stance Deadlift")).toBe("kreuzheben_gegenstand")
    expect(uebung("kreuzheben_gegenstand")!.name).toBe("Kreuzheben im anderen Stand")
  })

  it("ohne eigene Sätze: Prozent vom normalen Kreuzheben, mit Hinweis", () => {
    const d: Daten = { ...leer(), maxwerte: { kreuzheben_lh: { kg: 178, datum: "2026-11-13" } } }
    const v = planVorgabe(d, anders, uebung("kreuzheben_gegenstand")!, lasten, "2026-11-16", "haupt")
    expect(v.last).toBe(140)
    expect(v.begruendung).toContain("noch keinen eigenen Wert")
  })

  it("mit eigenen Sätzen: Prozent vom eigenen Maximum, das normale Kreuzheben bleibt unberührt", () => {
    const d: Daten = {
      ...leer(),
      maxwerte: { kreuzheben_lh: { kg: 178, datum: "2026-11-13" } },
      protokoll: [{ datum: "2026-11-16", uebung: "kreuzheben_gegenstand", saetze: [{ last: 145, wdh: 1, rir: 0 }, { last: 120, wdh: 3, rir: 4 }, { last: 120, wdh: 3, rir: 4 }] }],
    }
    const v = planVorgabe(d, anders, uebung("kreuzheben_gegenstand")!, lasten, "2026-11-23", "haupt")
    expect(v.last).toBeLessThan(125)
    expect(v.begruendung).not.toContain("Kreuzheben mit der Langhantel")
    expect(v.begruendung).not.toContain("noch keinen eigenen Wert")
    const normal: PlanUebung = { name: "Deadlift", id: "kreuzheben_lh", saetze: 3, wdh_von: 3, wdh_bis: 3, prozent: [0.8, 0.8], rir: 2 }
    expect(planVorgabe(d, normal, uebung("kreuzheben_lh")!, lasten, "2026-11-23", "haupt").last).toBe(140)
  })

  it("Pausenbankdrücken rechnet weiter mit dem normalen Bankdrücken, auch mit eigenen Sätzen", () => {
    const pause: PlanUebung = { name: "Pause Barbell Bench Press", id: "bankdruecken_lh_pause", basis: "bankdruecken_lh", saetze: 3, wdh_von: 1, wdh_bis: 1, prozent: [0.9, 0.9], rir: 1 }
    const d: Daten = {
      ...leer(),
      maxwerte: { bankdruecken_lh: { kg: 125, datum: "2026-08-26" } },
      protokoll: [{ datum: "2026-10-29", uebung: "bankdruecken_lh_pause", saetze: [{ last: 100, wdh: 2, rir: 3 }] }],
    }
    expect(planVorgabe(d, pause, uebung("bankdruecken_lh_pause")!, lasten, "2026-11-17", "haupt").last).toBe(112.5)
  })
})
