// Unterstützung mit Band bei Körpergewichtsübungen: als minus kg, Vorschlag für ein anderes Band, kein Rekord
import { describe, expect, test } from "vitest"
import { HILFE_KG_START, bandhilfeMoeglich, hilfeAusLetztemMal, hilfeKg, hilfeText, hilfeVorschlag } from "../src/logik/bandhilfe"
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
    // Orange ist das stärkste Band, Blau das nächstschwächere
    expect(hilfeVorschlag("orange", { wdh: 10, rir: 1 }, 6, 8, 1)).toEqual({ farbe: "blau", richtung: "weniger" })
    expect(hilfeVorschlag("blau", { wdh: 3, rir: 0 }, 6, 8, 1)).toEqual({ farbe: "orange", richtung: "mehr" })
    expect(hilfeVorschlag("orange", { wdh: 3, rir: 0 }, 6, 8, 1)).toBeNull()
  })

  test("Zu schwer auch mit Reserve: 2 statt 6 bis 8 Wiederholungen mit 1 im Tank braucht ein stärkeres Band", () => {
    // So war es im Training am 12.11.2026: Klimmzug mit Schwarz, 2 Wiederholungen, 1 im Tank, kein Vorschlag
    expect(hilfeVorschlag("schwarz", { wdh: 2, rir: 1 }, 6, 8, 1)).toEqual({ farbe: "lila", richtung: "mehr" })
    // Mehr Reserve als geplant: Dann war der Satz nicht zu schwer, sondern zu früh beendet
    expect(hilfeVorschlag("schwarz", { wdh: 4, rir: 2 }, 6, 8, 1)).toBeNull()
    // in der Vorgabe: nichts ändern
    expect(hilfeVorschlag("schwarz", { wdh: 6, rir: 1 }, 6, 8, 1)).toBeNull()
  })

  test("Mit Körpergewicht: so viel stärker, wie die Schätzformel für die untere Grenze verlangt", () => {
    const kg = (f: string) => HILFE_KG_START[f]
    // 85 kg, Schwarz (18 kg): 2 Wdh mit 1 im Tank → nötig etwa 27 kg Hilfe → Lila (25 kg, im Spielraum)
    expect(hilfeVorschlag("schwarz", { wdh: 2, rir: 1 }, 6, 8, 1, { uebung: "klimmzug", koerper_kg: 85, kg })).toEqual({ farbe: "lila", richtung: "mehr" })
    // 100 kg, Gelb (5 kg): 1 Wdh mit 0 im Tank bei Ziel 8 bis 10 → nötig etwa 24,5 kg → gleich Lila statt nur Rot
    expect(hilfeVorschlag("gelb", { wdh: 1, rir: 0 }, 8, 10, 1, { uebung: "klimmzug", koerper_kg: 100, kg })).toEqual({ farbe: "lila", richtung: "mehr" })
    // Liegestütz bewegt nicht das ganze Körpergewicht: nur einen Schritt
    expect(hilfeVorschlag("gelb", { wdh: 1, rir: 0 }, 8, 10, 1, { uebung: "liegestuetz", koerper_kg: 100, kg })).toEqual({ farbe: "rot", richtung: "mehr" })
  })

  test("Vor dem ersten Satz: Vorschlag aus dem besten Satz vom letzten Mal mit dem gewählten Band", () => {
    const letzte = [
      { wdh: 3, rir: 1, hilfe_band: "schwarz" },
      { wdh: 2, rir: 1, hilfe_band: "schwarz" },
    ]
    expect(hilfeAusLetztemMal(letzte, "schwarz", 6, 8, 1)).toEqual({ farbe: "lila", richtung: "mehr", wdh: 3 })
    // anderes Band gewählt als letztes Mal: kein Urteil möglich
    expect(hilfeAusLetztemMal(letzte, "lila", 6, 8, 1)).toBeNull()
    // letztes Mal passte es
    expect(hilfeAusLetztemMal([{ wdh: 7, rir: 1, hilfe_band: "schwarz" }], "schwarz", 6, 8, 1)).toBeNull()
  })

  test("Sätze mit Band zählen nicht als Wiederholungsrekord", () => {
    const p = { datum: "2026-11-04", uebung: "nordic", saetze: [{ last: null, wdh: 12, rir: 1, hilfe_kg: 35, hilfe_band: "grün" }, { last: null, wdh: 4, rir: 1 }] }
    expect(bestwert(p)).toBe(4)
  })
})
