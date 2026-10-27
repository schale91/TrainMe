import { mobilitaetsEinheit, MOBIL_SCHWERPUNKTE } from "../src/logik/plan"
import { beispielGolf, leer } from "../src/logik/speicher"
import type { Daten } from "../src/logik/typen"

const TAG = "2026-10-21"
const profil = beispielGolf("2026-10-19")
const daten: Daten = { ...leer(), profil }

describe("Zusätzliche Mobility-Einheit", () => {
  it("passt in die gewünschte Zeit und wird mit mehr Zeit länger", () => {
    const kurz = mobilitaetsEinheit(profil, daten, TAG, 10, "ganz")
    const lang = mobilitaetsEinheit(profil, daten, TAG, 40, "ganz")
    expect(kurz.plaetze.length).toBeGreaterThanOrEqual(2)
    expect(kurz.minuten).toBeLessThanOrEqual(12)
    expect(lang.minuten).toBeLessThanOrEqual(40)
    expect(lang.minuten).toBeGreaterThan(kurz.minuten)
    expect(lang.plaetze.length).toBeGreaterThan(kurz.plaetze.length)
  })

  it("nur Mobilitätsübungen, keine doppelt, passend zum Schwerpunkt", () => {
    for (const s of MOBIL_SCHWERPUNKTE) {
      const e = mobilitaetsEinheit(profil, daten, TAG, 20, s.id)
      expect(e.art).toBe("mobilitaet")
      expect(e.plaetze.every((p) => p.rolle === "mobil" && p.muster.startsWith("mobilitaet"))).toBe(true)
      expect(new Set(e.plaetze.map((p) => p.uebung.id)).size).toBe(e.plaetze.length)
    }
    const huefte = mobilitaetsEinheit(profil, daten, TAG, 20, "huefte")
    expect(huefte.plaetze[0].muster).toBe("mobilitaet_huefte")
    expect(huefte.titel).toBe("Mobility · Hüfte")
  })
})
