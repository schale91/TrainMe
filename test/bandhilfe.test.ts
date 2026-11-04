// Unterstützung mit Band bei Körpergewichtsübungen: als minus kg, Vorschlag für ein anderes Band, kein Rekord
import { describe, expect, test } from "vitest"
import { bandhilfeMoeglich, hilfeKg, hilfeText, hilfeVorschlag } from "../src/logik/bandhilfe"
import { bestwert } from "../src/logik/spiel"

describe("Bandhilfe", () => {
  test("Nur bei Körpergewichtsübungen, bei denen ein Band üblich ist", () => {
    expect(bandhilfeMoeglich({ id: "nordic", belastung: "wiederholungen" })).toBe(true)
    expect(bandhilfeMoeglich({ id: "klimmzug", belastung: "wiederholungen" })).toBe(true)
    expect(bandhilfeMoeglich({ id: "bankdruecken_lh", belastung: "gewicht" })).toBe(false)
    expect(bandhilfeMoeglich({ id: "plank", belastung: "zeit" })).toBe(false)
  })

  test("kg je Farbe: eigener Wert vor dem Startwert, Anzeige als minus kg", () => {
    expect(hilfeKg({}, "grün")).toBe(35)
    expect(hilfeKg({ bandhilfe_kg: { "grün": 28 } }, "grün")).toBe(28)
    expect(hilfeText(12.5)).toBe("−12,5 kg")
  })

  test("Zu leicht: schwächeres Band, viel zu schwer: stärkeres", () => {
    // Nordic 6 bis 8 Wiederholungen mit 1 im Tank: 10 Wiederholungen mit Grün sind zu leicht
    expect(hilfeVorschlag("grün", { wdh: 10, rir: 1 }, 6, 8, 1)).toEqual({ farbe: "lila", richtung: "weniger" })
    expect(hilfeVorschlag("grün", { wdh: 7, rir: 3 }, 6, 8, 1)).toEqual({ farbe: "lila", richtung: "weniger" })
    expect(hilfeVorschlag("grün", { wdh: 7, rir: 1 }, 6, 8, 1)).toBeNull()
    expect(hilfeVorschlag("rot", { wdh: 3, rir: 0 }, 6, 8, 1)).toEqual({ farbe: "schwarz", richtung: "mehr" })
    expect(hilfeVorschlag("gelb", { wdh: 12, rir: 3 }, 6, 8, 1)).toBeNull()
  })

  test("Sätze mit Band zählen nicht als Wiederholungsrekord", () => {
    const p = { datum: "2026-11-04", uebung: "nordic", saetze: [{ last: null, wdh: 12, rir: 1, hilfe_kg: 35, hilfe_band: "grün" }, { last: null, wdh: 4, rir: 1 }] }
    expect(bestwert(p)).toBe(4)
  })
})
