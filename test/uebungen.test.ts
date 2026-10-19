import { UEBUNGEN } from "../src/daten/uebungen/index"
import { pruefeUebungen } from "../werkzeuge/pruefe-uebungen"
import { MUSTER } from "../src/logik/typen"

describe("Übungsdatenbank", () => {
  it("alle Einträge sind gültig", () => {
    const f = pruefeUebungen(UEBUNGEN)
    expect(f.slice(0, 20)).toEqual([])
  })

  it("ids sind eindeutig und Verweise existieren", () => {
    const ids = new Map<string, number>()
    for (const u of UEBUNGEN) ids.set(u.id, (ids.get(u.id) || 0) + 1)
    expect([...ids].filter(([, n]) => n > 1).map(([id]) => id)).toEqual([])
    expect(UEBUNGEN.filter((u) => u.schwerer && !ids.has(u.schwerer)).map((u) => u.id + " → " + u.schwerer)).toEqual([])
  })

  it("Namen sind eindeutig", () => {
    const namen = new Map<string, string[]>()
    for (const u of UEBUNGEN) namen.set(u.name.toLowerCase(), [...(namen.get(u.name.toLowerCase()) || []), u.id])
    expect([...namen].filter(([, l]) => l.length > 1)).toEqual([])
  })

  it("jedes Muster hat Übungen", () => {
    for (const m of MUSTER) expect(UEBUNGEN.filter((u) => u.muster === m).length, m).toBeGreaterThan(2)
  })

  it("viele Übungen für Golfer", () => {
    expect(UEBUNGEN.filter((u) => u.golf === 3).length).toBeGreaterThanOrEqual(40)
    expect(UEBUNGEN.filter((u) => (u.golf || 0) >= 2).length).toBeGreaterThanOrEqual(120)
  })
})
