// Prozentring: Anteil des Satzgewichts am Maximum
import { describe, expect, it } from "vitest"
import { uebung } from "../src/daten/uebungen/index"
import { prozentVomMaximum } from "../src/logik/prozentring"
import { leer } from "../src/logik/speicher"
import type { Daten } from "../src/logik/typen"

const bank = uebung("bankdruecken_lh")!
const curl = uebung("hammercurl")!
const klimm = uebung("klimmzug")

describe("Prozent vom Maximum", () => {
  const d: Daten = { ...leer(), maxwerte: { bankdruecken_lh: { kg: 125, datum: "2026-08-26" } } }

  it("aus dem eingetragenen Maximum, gerundet", () => {
    expect(prozentVomMaximum(d, bank, 100, 6)).toMatchObject({ prozent: 80, kg: 125, quelle: "max" })
    expect(prozentVomMaximum(d, bank, 112.5, 1)?.prozent).toBe(90)
    expect(prozentVomMaximum(d, bank, 130, 1)?.prozent).toBe(104)
  })

  it("ohne Gewicht, ohne Maximum oder bei Körpergewicht: nichts", () => {
    expect(prozentVomMaximum(d, bank, null, 6)).toBeNull()
    expect(prozentVomMaximum(d, bank, 0, 6)).toBeNull()
    expect(prozentVomMaximum(leer(), bank, 100, 6)).toBeNull()
    if (klimm) expect(prozentVomMaximum(d, klimm, 10, 6)).toBeNull()
  })

  it("aus den eigenen Sätzen geschätzt nur bis 12 Wiederholungen, ein eingetragenes Maximum immer", () => {
    const mitVerlauf: Daten = { ...leer(), protokoll: [{ datum: "2026-11-10", uebung: "hammercurl", saetze: [{ last: 20, wdh: 10, rir: 1 }, { last: 20, wdh: 10, rir: 1 }] }] }
    expect(prozentVomMaximum(mitVerlauf, curl, 20, 10)?.quelle).toBe("verlauf")
    expect(prozentVomMaximum(mitVerlauf, curl, 20, 15)).toBeNull()
    const eingetragen: Daten = { ...mitVerlauf, maxwerte: { hammercurl: { kg: 30, datum: "2026-11-01" } } }
    expect(prozentVomMaximum(eingetragen, curl, 20, 15)).toMatchObject({ prozent: 67, quelle: "max" })
  })
})
