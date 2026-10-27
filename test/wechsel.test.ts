import { uebung } from "../src/daten/uebungen/index"
import { wechselPause } from "../src/logik/wechsel"
import type { Platz, Rolle } from "../src/logik/typen"

const platz = (id: string, rolle: Rolle, pause_s: number): Platz => ({ rolle, muster: uebung(id)!.muster, uebung: uebung(id)!, vorgabe: { saetze: 3, wdh_von: 6, wdh_bis: 8, rir: 2, last: null, modell: "doppelt", pause_s, begruendung: "" } })

describe("Wechselpause", () => {
  it("vor einer schweren Hauptübung 2 bis 3 Minuten plus Umbau", () => {
    const w = wechselPause(platz("kniebeuge_lh", "haupt", 180), platz("bankdruecken_lh", "haupt", 180))
    expect(w.sekunden).toBe(210)
    expect(w.grund).toContain("Hauptübung")
  })
  it("andere Muskeln, leichtere Übung: kürzer", () => {
    const w = wechselPause(platz("kniebeuge_lh", "haupt", 180), platz("bizeps_kh_sitzend", "isolation", 75))
    expect(w.sekunden).toBeLessThanOrEqual(120)
    expect(w.grund).toContain("andere Muskeln")
  })
  it("dieselben Muskeln: die längere Pause gilt", () => {
    const w = wechselPause(platz("kniebeuge_lh", "haupt", 180), platz("kniebeuge_lh_lowbar", "neben", 120))
    expect(w.sekunden).toBeGreaterThanOrEqual(180)
    expect(w.grund).toContain("dieselben Muskeln")
  })
  it("Beweglichkeit danach: kurz", () => {
    expect(wechselPause(platz("kniebeuge_lh", "haupt", 180), platz("reha_bein_pendeln", "mobil", 15)).sekunden).toBe(30)
  })
  it("zwischen 1 und 5 Minuten", () => {
    expect(wechselPause(platz("kniebeuge_lh", "haupt", 600), platz("kniebeuge_lh_lowbar", "haupt", 600)).sekunden).toBe(300)
  })
})
