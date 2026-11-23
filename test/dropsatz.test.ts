// Dropsatz mit Drop-Pins: Stufen, Eignung, Zeitsparen, Zählung im Rückblick, Maximum nur aus der ersten Stufe
import { describe, expect, it } from "vitest"
import { alsDropsatz, dropMoeglich, dropStufen, dropVorschlag, khDrop, satzZahl, zweiZuEinem } from "../src/logik/dropsatz"
import { wochenZahlen } from "../src/logik/rueckblick"
import { e1rm } from "../src/logik/progression"
import { satzformVon } from "../src/logik/satzhilfen"
import type { Satz, Vorgabe } from "../src/logik/typen"

const stapel = Array.from({ length: 31 }, (_, k) => k * 5).filter((x) => x > 0)
const mitPins = { geraete: ["kabelzug", "drop_pins"] as never[] }
const satz = (last: number, wdh = 12): Satz & { fertig: boolean } => ({ last, wdh, rir: 1, fertig: false })

describe("Drop-Stufen", () => {
  it("je etwa 20 % leichter, auf den Stapel abgerundet, immer echt leichter", () => {
    expect(dropStufen(25, stapel)).toEqual([20, 15])
    expect(dropStufen(50, stapel)).toEqual([40, 30])
    // Stapel reicht nicht weiter nach unten: weniger Stufen
    expect(dropStufen(10, stapel)).toEqual([5])
    expect(dropStufen(5, stapel)).toEqual([])
  })
  it("Satz wird Dropsatz mit vorgeschlagenen Wiederholungen", () => {
    expect(alsDropsatz(satz(25, 12), stapel).drops).toEqual([
      { last: 20, wdh: 6 },
      { last: 15, wdh: 4 },
    ])
  })
})

describe("Wann Dropsätze gehen", () => {
  it("nur am Stapel, nur mit Drop-Pins, nicht bei Hauptübungen", () => {
    const u = { belastung: "gewicht" as const }
    expect(dropMoeglich(u, "kabelzug", mitPins, "isolation")).toBe(true)
    expect(dropMoeglich(u, "kabelzug", { geraete: ["kabelzug"] as never[] }, "isolation")).toBe(false)
    expect(dropMoeglich(u, "kurzhantel", mitPins, "isolation")).toBe(false)
    expect(dropMoeglich(u, "latzug", mitPins, "haupt")).toBe(false)
    expect(dropMoeglich({ belastung: "wiederholungen" }, "kabelzug", mitPins, "neben")).toBe(false)
  })
  it("Satzform Dropsatz nur, wo er geht", () => {
    const v = { saetze: 3 } as Vorgabe
    expect(satzformVon(v, "drop", true, true)).toBe("drop")
    expect(satzformVon(v, "drop", true, false)).toBe("gleich")
  })
})

describe("Zeit knapp", () => {
  it("die letzten zwei offenen Sätze werden ein Dropsatz und sparen eine Pause", () => {
    const plaetze = [
      { uebung: { belastung: "gewicht" as const, name: "Kniebeuge" }, rolle: "haupt" as const, vorgabe: { pause_s: 180 } },
      { uebung: { belastung: "gewicht" as const, name: "Trizeps am Kabel" }, rolle: "isolation" as const, vorgabe: { pause_s: 90 } },
      { uebung: { belastung: "gewicht" as const, name: "Face Pull" }, rolle: "praevention" as const, vorgabe: { pause_s: 90 }, gruppe: "A" },
    ]
    const ss = [[satz(100), satz(100)], [{ ...satz(25), fertig: true }, satz(25), satz(25)], [satz(30), satz(30)]]
    const v = dropVorschlag(plaetze, ss, ["langhantel", "kabelzug", "kabelzug"], mitPins, 10)
    expect(v.plaetze).toEqual([1])
    expect(v.spart_min).toBe(2)
    const neu = zweiZuEinem(ss[1], stapel)
    expect(neu.length).toBe(2)
    expect(neu[0].fertig).toBe(true)
    expect(neu[1].drops?.map((d) => d.last)).toEqual([20, 15])
  })
})

describe("Zählung", () => {
  it("ein Dropsatz zählt je Stufe einen Satz, das Maximum kommt nur aus der ersten Stufe", () => {
    const s = alsDropsatz(satz(25, 12), stapel)
    expect(satzZahl(s)).toBe(3)
    expect(e1rm(s)).toBe(e1rm(satz(25, 12)))
    const w = wochenZahlen({ protokoll: [{ datum: "2026-11-10", uebung: "trizeps_kabel", saetze: [satz(25), s] }] }, "2026-11-09")
    expect(w.saetze).toBe(4)
    expect(w.gruppen.trizeps).toBe(4)
  })
})

describe("Dropsatz mit Kurzhanteln", () => {
  const staender = { geraete: ["kurzhantel"] as never[], gewichte: { kurzhanteln: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] } }
  const curl = { belastung: "gewicht" as const, geraete: [["kurzhantel"]] as never[][] }
  const bankdruecken = { belastung: "gewicht" as const, geraete: [["kurzhantel", "bank"]] as never[][] }

  it("geht mit einem Ständer fester Paare, ohne Drop-Pins", () => {
    expect(dropMoeglich(curl, "kurzhantel", staender, "isolation")).toBe(true)
    expect(khDrop(curl, "kurzhantel", staender)).toBe(true)
  })
  it("nicht mit wenigen Hanteln, nicht auf der Bank, nicht bei Hauptübungen", () => {
    expect(dropMoeglich(curl, "kurzhantel", { ...staender, gewichte: { kurzhanteln: [10, 12.5, 15] } }, "isolation")).toBe(false)
    expect(dropMoeglich(bankdruecken, "kurzhantel", staender, "neben")).toBe(false)
    expect(dropMoeglich(curl, "kurzhantel", staender, "haupt")).toBe(false)
  })
  it("Stufen kommen aus den vorhandenen Paaren", () => {
    expect(alsDropsatz(satz(16, 10), staender.gewichte.kurzhanteln).drops).toEqual([
      { last: 12, wdh: 5 },
      { last: 8, wdh: 4 },
    ])
  })
  it("wird bei knapper Zeit vorgeschlagen", () => {
    const plaetze = [{ uebung: { ...curl, name: "Hammercurl" }, rolle: "isolation" as const, vorgabe: { pause_s: 90 } }]
    expect(dropVorschlag(plaetze, [[satz(16), satz(16)]], ["kurzhantel"], staender, 5).plaetze).toEqual([0])
  })
})
