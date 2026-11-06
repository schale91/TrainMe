// Dauerhafter Tausch („Immer“) gilt auch im eigenen Plan; Bänder heißen nach ihrer Farbe
import { describe, expect, it } from "vitest"
import { mitErsatz } from "../src/logik/eigenerPlan"
import { bandVonStufe, lastText, stufeVonBand } from "../src/logik/gewichte"

describe("dauerhafter Tausch im eigenen Plan", () => {
  const pu = { id: "rudern_helms", name: "Helms Row", saetze: 3, wdh_von: 15, wdh_bis: 20, rir: 1, prozent: [0.7, 0.75] as [number, number] }
  it("nimmt die neue Übung mit Sätzen und Wiederholungen aus dem Plan, ohne Prozent der alten", () => {
    const neu = mitErsatz({ ersatz: { rudern_helms: "rudern_schlingentrainer" } }, pu)
    expect(neu.id).toBe("rudern_schlingentrainer")
    expect(neu.name).toBe("Rudern am Schlingentrainer (TRX)")
    expect([neu.saetze, neu.wdh_von, neu.wdh_bis, neu.rir]).toEqual([3, 15, 20, 1])
    expect(neu.prozent).toBeUndefined()
  })
  it("folgt Ketten, bricht bei Kreisen ab und lässt unbekannte Ziele stehen", () => {
    expect(mitErsatz({ ersatz: { rudern_helms: "rudern_tisch", rudern_tisch: "rudern_schlingentrainer" } }, pu).id).toBe("rudern_schlingentrainer")
    expect(mitErsatz({ ersatz: { rudern_helms: "rudern_tisch", rudern_tisch: "rudern_helms" } }, pu).id).toBe("rudern_helms")
    expect(mitErsatz({ ersatz: { rudern_helms: "gibt_es_nicht" } }, pu)).toBe(pu)
    expect(mitErsatz({}, pu)).toBe(pu)
  })
})

describe("Bänder nach Farbe", () => {
  it("Stufe und Farbe gehören zusammen, leicht bis schwer", () => {
    expect(bandVonStufe(2)?.name).toBe("Rot")
    expect(stufeVonBand("rot")).toBe(2)
    expect(lastText(2, "band")).toBe("Band Rot")
    expect(lastText(6, "band")).toBe("Band Blau")
  })
})
