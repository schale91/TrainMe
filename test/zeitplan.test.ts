// Trainingszeit: Budget je Tag, Vorhersage aus gemessenen Sätzen, Kürzen der Pausen, Hinweis auf zu kurze Pausen
import { describe, expect, test } from "vitest"
import { hauptPausenZuKurz, heuteFaktor, lernFaktor, pausenKuerzen, prognose, schaetzung, weglassenVorschlag, zeitBudget } from "../src/logik/zeitplan"

const platz = (name: string, rolle: "haupt" | "neben", pause_s: number, saetze = 3) => ({ uebung: { name }, rolle, vorgabe: { pause_s, saetze } as { pause_s: number; saetze: number } as never as import("../src/logik/typen").Vorgabe })
const min = 60000

describe("Trainingszeit", () => {
  test("Zeitbudget kommt aus dem Trainingstag, sonst aus der Schätzung", () => {
    const woche = Array.from({ length: 7 }, (_, i) => (i === 2 ? { art: "training" as const, ort: 0, minuten: 55, schwerpunkt: "automatisch" as const } : { art: "frei" as const }))
    expect(zeitBudget({ woche } as never, "2026-11-04", 60)).toBe(55)
    expect(zeitBudget({ woche } as never, "2026-11-05", 60)).toBe(60)
  })

  test("Vorhersage: gemessen ab drei Sätzen, Abstände über zehn Minuten zählen nicht", () => {
    const p = [platz("Kniebeuge", "haupt", 180, 4)]
    // geplant je Satz 3:40 min, gemessen 5 min
    const s = [[{ fertig: true, um: 0 }, { fertig: true, um: 5 * min }, { fertig: true, um: 10 * min }, { fertig: true, um: 15 * min }, { fertig: false }]]
    const f = heuteFaktor(p, s, 1)
    expect(f).toBeCloseTo(5 / (220 / 60), 2)
    const v = prognose(0, 16 * min, p, s, f)
    expect(Math.round(v.gesamt)).toBe(16 + 5 + 3)
    expect(heuteFaktor(p, [[{ fertig: true, um: 0 }, { fertig: true, um: 30 * min }]], 1.2)).toBe(1.2)
  })

  test("Gelernt aus früheren Einheiten: Median von Dauer durch Schätzung", () => {
    const erledigt = [60, 66, 63].map((d) => ({ dauer_min: d, geschaetzt_min: 55 })) as never
    expect(lernFaktor({ erledigt })).toBeCloseTo(63 / 55, 3)
    expect(lernFaktor({ erledigt: [] })).toBe(1)
  })

  test("Zu lang: Pausen nur bei Ergänzungen kürzen, dann optionale Übungen und je einen Satz vorschlagen", () => {
    const p = [platz("Bankdrücken", "haupt", 180), platz("Arnold Press", "neben", 150), platz("Nacken (optional)", "neben", 90), platz("Seitheben", "neben", 60, 2)]
    const k = pausenKuerzen(p)
    expect(k.plaetze.map((x) => x.vorgabe.pause_s)).toEqual([180, 90, 90, 60])
    expect(k.gekuerzt).toEqual(["Arnold Press"])
    const saetze = p.map((x) => Array.from({ length: (x.vorgabe as { saetze: number }).saetze }, () => ({ fertig: false })))
    expect(weglassenVorschlag(p, saetze)).toEqual({ ganz: [2], einSatz: [1] })
    expect(schaetzung(p, saetze)).toBe(Math.round(8 + 3 * (220 / 60) + 3 * (190 / 60) + 3 * (130 / 60) + 2 * (100 / 60)))
  })

  test("Hauptübung mit viel zu kurzen Pausen wird erkannt", () => {
    const p = [platz("Kreuzheben", "haupt", 180, 3)]
    expect(hauptPausenZuKurz(p, [[{ fertig: true, um: 0 }, { fertig: true, um: 1.5 * min }, { fertig: true, um: 3 * min }]])).toBe(true)
    expect(hauptPausenZuKurz(p, [[{ fertig: true, um: 0 }, { fertig: true, um: 4 * min }, { fertig: true, um: 8 * min }]])).toBe(false)
  })
})
