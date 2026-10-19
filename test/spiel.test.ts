import { abschliessen, serie, stufe, stufenXp } from "../src/logik/spiel"
import { wochenplan } from "../src/logik/plan"
import { beispielGolf, exportieren, importieren, leer } from "../src/logik/speicher"
import type { Erledigt } from "../src/logik/typen"

const e = (datum: string): Erledigt => ({ datum, titel: "T" + datum, minuten: 60, saetze: 10, xp: 40, rekorde: [] })

describe("Stufen", () => {
  it("steigen mit wachsendem Abstand", () => {
    expect(stufe(0).stufe).toBe(1)
    expect(stufe(stufenXp(1)).stufe).toBe(2)
    expect(stufenXp(10)).toBeGreaterThan(stufenXp(2))
  })
})

describe("Wochenserie", () => {
  const profil = beispielGolf("2026-10-05") // 6 geplant, Ziel 5

  it("zählt Wochen mit erreichtem Ziel, eine Einheit darf fehlen", () => {
    const tage = ["2026-10-05", "2026-10-06", "2026-10-07", "2026-10-08", "2026-10-09", "2026-10-12", "2026-10-13", "2026-10-14", "2026-10-15", "2026-10-16"]
    expect(serie(profil, tage.map(e), "2026-10-19")).toBe(2)
  })

  it("eine schwache Woche beendet die Serie", () => {
    expect(serie(profil, ["2026-10-12", "2026-10-13"].map(e), "2026-10-19")).toBe(0)
  })
})

describe("Abschließen", () => {
  it("gibt XP, erkennt Rekorde und vergibt Abzeichen", () => {
    const profil = beispielGolf("2026-10-05")
    const d = { ...leer(), profil }
    const [mo] = wochenplan(profil, d, "2026-10-05")
    const id = mo.plaetze[0].uebung.id
    const r1 = abschliessen(d, mo, [{ datum: mo.datum, uebung: id, saetze: [{ last: 80, wdh: 6, rir: 2 }] }], false, 0)
    expect(r1.neueAbzeichen).toContain("erste_einheit")
    expect(r1.rekorde).toEqual([])
    const [mo2] = wochenplan(profil, d, "2026-10-12")
    const r2 = abschliessen(d, mo2, [{ datum: mo2.datum, uebung: id, saetze: [{ last: 85, wdh: 6, rir: 2 }] }], false, 1)
    expect(r2.rekorde).toEqual([id])
    expect(r2.xp).toBe(20 + 2 + 15)
    expect(r2.neueAbzeichen).toContain("rekord")
    expect(d.spiel.xp).toBe(r1.xp + r2.xp)
  })
})

describe("Export und Import", () => {
  it("bleibt verlustfrei und weist Fremddateien ab", () => {
    const d = { ...leer(), profil: beispielGolf("2026-10-05") }
    d.spiel.xp = 123
    expect(importieren(exportieren(d))).toEqual(d)
    expect(() => importieren("{\"a\":1}")).toThrow()
  })
})
