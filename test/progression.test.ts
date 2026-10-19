import { blockWoche, e1rm, plateau, vorgabe, zielRir } from "../src/logik/progression"
import { beispielGolf, neuesProfil } from "../src/logik/speicher"
import { uebung } from "../src/daten/uebungen"
import type { Protokoll } from "../src/logik/typen"

const kh = [10, 12.5, 15, 17.5, 20, 22.5, 25]
const p = (datum: string, saetze: [number | null, number, number][]): Protokoll => ({ datum, uebung: "x", saetze: saetze.map(([last, wdh, rir]) => ({ last, wdh, rir })) })

describe("Block und RIR", () => {
  const profil = { ...neuesProfil("2026-10-05"), ziel: "muskelaufbau" as const, erfahrung: "fortgeschritten" as const }

  it("zählt Wochen im Block mit Entlastung in Woche 5", () => {
    expect(blockWoche(profil, "2026-10-05")).toBe(0)
    expect(blockWoche(profil, "2026-10-26")).toBe(3)
    expect(blockWoche(profil, "2026-11-02")).toBe(4)
    expect(blockWoche(profil, "2026-11-09")).toBe(0)
  })

  it("Muskelaufbau geht im Block näher ans Versagen, Isolation noch näher", () => {
    expect([0, 1, 2, 3].map((w) => zielRir(profil, "haupt", w))).toEqual([3, 2, 1, 1])
    expect(zielRir(profil, "isolation", 3)).toBe(0)
    expect(zielRir(profil, "haupt", 4)).toBe(4)
  })

  it("Einsteiger behalten mehr Reserve", () => {
    expect(zielRir({ ...profil, erfahrung: "einsteiger" }, "haupt", 3)).toBe(2)
  })

  it("Epley mit Reserve", () => {
    expect(e1rm({ last: 100, wdh: 5, rir: 1 })).toBeCloseTo(120)
  })
})

describe("Vorgaben", () => {
  const profil = { ...neuesProfil("2026-10-05"), ziel: "muskelaufbau" as const, erfahrung: "fortgeschritten" as const }
  const kurzhantelDruecken = uebung("bankdruecken_kh")!

  it("doppelte Progression: alle Sätze oben mit genug Reserve, dann eine Stufe schwerer", () => {
    const u = { ...kurzhantelDruecken, id: "x" }
    const v = vorgabe(profil, "neben", u, 3, [p("2026-10-06", [[20, 12, 2], [20, 12, 2], [20, 12, 2]])], kh, 1)
    expect(v.modell).toBe("doppelt")
    expect(v.last).toBe(22.5)
  })

  it("doppelte Progression: noch nicht oben, gleiches Gewicht", () => {
    const u = { ...kurzhantelDruecken, id: "x" }
    const v = vorgabe(profil, "neben", u, 3, [p("2026-10-06", [[20, 12, 2], [20, 10, 1], [20, 9, 1]])], kh, 1)
    expect(v.last).toBe(20)
  })

  it("zweimal zu schwer: eine Stufe zurück", () => {
    const u = { ...kurzhantelDruecken, id: "x" }
    const v = vorgabe(profil, "neben", u, 3, [p("2026-10-06", [[20, 6, 0]]), p("2026-10-09", [[20, 5, 0]])], kh, 1)
    expect(v.last).toBe(17.5)
  })

  it("RIR-Steuerung für Sportler: Gewicht aus dem geschätzten Maximum, auf echte Gewichte abgerundet", () => {
    const golf = beispielGolf("2026-10-05")
    const u = { ...uebung("kniebeuge_lh")!, id: "x" }
    const lh = Array.from({ length: 41 }, (_, i) => 20 + i * 2.5)
    const v = vorgabe(golf, "haupt", u, 4, [p("2026-10-06", [[100, 6, 2]])], lh, 1)
    expect(v.modell).toBe("rir")
    // e1RM 100*(1+8/30)=126,7; vorbereitung 6 bis 8, also 7 Wdh bei RIR 3: 126,7/(1+10/30)=95
    expect(v.wdh_von).toBe(7)
    expect(v.last).toBe(95)
  })

  it("Entlastung: halbe Sätze und etwa 10 % leichter", () => {
    const u = { ...kurzhantelDruecken, id: "x" }
    const v = vorgabe(profil, "neben", u, 4, [p("2026-10-06", [[20, 10, 2]])], kh, 4)
    expect(v.saetze).toBe(2)
    expect(v.last).toBe(17.5)
    expect(v.rir).toBe(4)
  })

  it("erste Einheit ohne Vorgabe-Gewicht, aber mit Anleitung", () => {
    const v = vorgabe(profil, "haupt", { ...kurzhantelDruecken, id: "x" }, 3, [], kh, 0)
    expect(v.last).toBeNull()
    expect(v.begruendung).toMatch(/Erstes Mal/)
  })

  it("erkennt ein Plateau", () => {
    const v = [p("1", [[100, 5, 1]]), p("2", [[100, 5, 1]]), p("3", [[100, 4, 1]]), p("4", [[100, 5, 1]])]
    expect(plateau(v)).toBe(true)
    expect(plateau([...v.slice(0, 3), p("4", [[105, 5, 1]])])).toBe(false)
  })
})
