import { ZYKLUS, gegnerFuer, held, kaempfen, kaufen, kisteOeffnen, kisteVerdienen, naechsterKampf, aufwerten, kistenChancen, KAMPF_MAX_S } from "../src/logik/abenteuer"
import { neuesSpiel } from "../src/logik/speicher"

describe("Kisten", () => {
  it("Zyklus wie das Vorbild: 180 Silber, 52 Gold, 4 Riesen, 4 Magisch", () => {
    const z: Record<string, number> = {}
    for (const k of ZYKLUS) z[k] = (z[k] || 0) + 1
    expect(z).toEqual({ silber: 180, gold: 52, riesen: 4, magisch: 4 })
    const c = kistenChancen()
    expect(c.silber).toBeCloseTo(0.75)
  })

  it("erste Kiste ist Gold und reicht für das Holzschwert", () => {
    const s = { ...neuesSpiel(), saat: 42 }
    expect(kisteVerdienen(s, "2026-10-20").art).toBe("gold")
    const inhalt = kisteOeffnen(s)!
    expect(inhalt.muenzen).toBeGreaterThanOrEqual(100)
    expect(inhalt.karten.reduce((n, k) => n + k.anzahl, 0)).toBe(10)
    expect(kaufen(s, "holzschwert")).toBe(true)
    expect(s.ausgeruestet.waffe).toBe("holzschwert")
  })
})

describe("Kampf", () => {
  it("dauert höchstens 30 Sekunden", () => {
    for (let l = 1; l < 60; l += 7) {
      const k = kaempfen(held(neuesSpiel()), gegnerFuer(l), l)
      expect(k.dauer).toBeLessThanOrEqual(KAMPF_MAX_S)
    }
  })

  it("ohne Schwert kein Sieg im ersten Level, mit Holzschwert schon", () => {
    for (let saat = 1; saat < 20; saat++) {
      const s = { ...neuesSpiel(), saat }
      expect(naechsterKampf(s).sieg).toBe(false)
      s.muenzen = 100
      kaufen(s, "holzschwert")
      expect(naechsterKampf(s).sieg).toBe(true)
      expect(s.level).toBe(2)
    }
  })

  it("Gegner werden stärker: ohne neue Ausrüstung ist bald Schluss", () => {
    const s = { ...neuesSpiel(), saat: 7, muenzen: 100 }
    kaufen(s, "holzschwert")
    let siege = 0
    for (let i = 0; i < 40; i++) if (naechsterKampf(s).sieg) siege++
    expect(siege).toBeGreaterThan(1)
    expect(siege).toBeLessThan(8)
  })

  it("Training macht stark: mit XP und aufgewerteter Ausrüstung geht es weiter", () => {
    const s = { ...neuesSpiel(), saat: 3, muenzen: 5000, xp: 3000 }
    for (const id of ["holzschwert", "eisenschwert", "lederwams", "lederkappe", "holzschild"]) kaufen(s, id)
    s.inventar.eisenschwert.karten = 30
    while (aufwerten(s, "eisenschwert"));
    let siege = 0
    for (let i = 0; i < 40; i++) if (naechsterKampf(s).sieg) siege++
    expect(siege).toBeGreaterThan(8)
  })
})
