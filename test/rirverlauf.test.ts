// RIR-Ziel je Satz: bei Isolation und Maschinen der letzte Satz eins näher am Limit, überall sonst gleich
import { describe, expect, it } from "vitest"
import { uebung } from "../src/daten/uebungen/index"
import { rirNeuZielen, rirText, rirVerlaufMoeglich, rirZiele } from "../src/logik/rirverlauf"
import { vorgabe, zielRir } from "../src/logik/progression"
import { neuesProfil } from "../src/logik/speicher"
import type { Protokoll, Vorgabe } from "../src/logik/typen"

const v = (rir: number, extra: Partial<Vorgabe> = {}): Pick<Vorgabe, "rir" | "modell" | "topsatz" | "rir_fest"> => ({ rir, modell: "doppelt", ...extra })
const curl = uebung("hammercurl")!
const seitheben = uebung("seitheben")!
const kniebeuge = uebung("kniebeuge_lh")!
const latzug = uebung("latzug")!

describe("RIR-Ziel je Satz", () => {
  it("Isolation: der letzte Satz eine Wiederholung näher am Limit", () => {
    expect(rirZiele(curl, v(1), 3)).toEqual([1, 1, 0])
    expect(rirZiele(seitheben, v(2), 4)).toEqual([2, 2, 2, 1])
    expect(rirText([1, 1, 0])).toBe("1 im Tank, letzter Satz 0")
    expect(rirText([2, 2])).toBe("2 im Tank")
  })

  it("nicht bei einem Satz, nicht unter 0, nicht bei 0 als Ziel", () => {
    expect(rirZiele(curl, v(1), 1)).toEqual([1])
    expect(rirZiele(curl, v(0), 3)).toEqual([0, 0, 0])
  })

  it("Grundübungen und schwere Gelenke bleiben bei einem Ziel für alle Sätze", () => {
    expect(rirZiele(kniebeuge, v(1), 3)).toEqual([1, 1, 1])
    expect(rirZiele(latzug, v(1), 3)).toEqual([1, 1, 1])
    expect(rirVerlaufMoeglich({ ...curl, gelenke: { ellbogen: 2 } }, v(1))).toBe(false)
  })

  it("nicht, wenn der Plan das RIR oder Prozent vorgibt, bei Topsatz und in der Reha", () => {
    expect(rirZiele(curl, v(1, { rir_fest: true }), 3)).toEqual([1, 1, 1])
    expect(rirZiele(curl, v(1, { modell: "prozent" }), 3)).toEqual([1, 1, 1])
    expect(rirZiele(curl, v(1, { topsatz: true }), 3)).toEqual([1, 1, 1])
    expect(rirZiele(curl, v(1), 3, true)).toEqual([1, 1, 1])
  })

  it("+ Satz und − Satz: das tiefere Ziel wandert mit, von Hand Verstelltes bleibt", () => {
    const s = (rir: number, fertig = false) => ({ rir, fertig })
    // drei Sätze [1,1,0] + Satz: der bisher letzte geht auf 1 zurück, der neue bekommt 0
    const mehr = rirNeuZielen([s(1), s(1), s(0), s(0)], rirZiele(curl, v(1), 3), rirZiele(curl, v(1), 4))
    expect(mehr.map((x) => x.rir)).toEqual([1, 1, 1, 0])
    // von Hand auf 3 gestellt: bleibt
    const hand = rirNeuZielen([s(1), s(3), s(0), s(0)], rirZiele(curl, v(1), 3), rirZiele(curl, v(1), 4))
    expect(hand.map((x) => x.rir)).toEqual([1, 3, 1, 0])
    // abgehakter Satz bleibt unangetastet
    const fertig = rirNeuZielen([s(1), s(1), s(0, true), s(0)], rirZiele(curl, v(1), 3), rirZiele(curl, v(1), 4))
    expect(fertig.map((x) => x.rir)).toEqual([1, 1, 0, 0])
    // − Satz: der neue letzte bekommt das tiefere Ziel
    const weniger = rirNeuZielen([s(1), s(1)], rirZiele(curl, v(1), 3), rirZiele(curl, v(1), 2))
    expect(weniger.map((x) => x.rir)).toEqual([1, 0])
  })
})

describe("Steigerung mit RIR je Satz", () => {
  const profil = { ...neuesProfil("2026-10-05"), ziel: "muskelaufbau" as const, erfahrung: "fortgeschritten" as const }
  const kh = [10, 12.5, 15, 17.5, 20, 22.5, 25]
  const p = (saetze: [number, number, number][]): Protokoll => ({ datum: "2026-10-06", uebung: "x", saetze: saetze.map(([last, wdh, rir]) => ({ last, wdh, rir })) })

  it("Isolation: ist der letzte Satz wie geplant eins näher am Limit, steigt das Gewicht trotzdem", () => {
    const start = vorgabe(profil, "isolation", curl, 3, [], kh, 0)
    const hi = start.wdh_bis
    const r = zielRir(profil, "isolation", 0)
    expect(r).toBeGreaterThanOrEqual(1)
    const neu = vorgabe(profil, "isolation", curl, 3, [p([[15, hi, r], [15, hi, r], [15, hi, r - 1]])], kh, 0)
    expect(neu.last).toBe(17.5)
  })

  it("Isolation: war schon der erste Satz zu nah am Limit, bleibt es beim Gewicht", () => {
    const start = vorgabe(profil, "isolation", curl, 3, [], kh, 0)
    const hi = start.wdh_bis
    const r = zielRir(profil, "isolation", 0)
    const neu = vorgabe(profil, "isolation", curl, 3, [p([[15, hi, r - 1], [15, hi, r], [15, hi, r - 1]])], kh, 0)
    expect(neu.last).toBe(15)
  })
})
