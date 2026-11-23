// Fitness-Check: Stufen nur mit belegten Schwellen, Messwerte mit Verlauf, Uhrwerte merken, Reha ohne Sprünge
import { describe, expect, it } from "vitest"
import { alterAm, fitnessBewertung, fitnessUebersicht, letzter, uhrMerken, wertEintragen } from "../src/logik/fitness"
import { leer, neuesProfil } from "../src/logik/speicher"
import type { Daten } from "../src/logik/typen"

const HEUTE = "2026-11-23"
const k = (d: Daten, id: string, uhr: Parameters<typeof fitnessBewertung>[1] = null, reha = false) =>
  fitnessBewertung(d, uhr, HEUTE, reha)
    .flatMap((b) => b.kennzahlen)
    .find((x) => x.id === id)

function daten(): Daten {
  return {
    ...leer(),
    profil: { ...neuesProfil("2026-10-01"), koerpergewicht_kg: 93 },
  }
}

describe("Fitness-Check", () => {
  it("Alter aus dem Geburtsjahr, ohne Geburtsjahr kein Alter", () => {
    expect(alterAm(1990, HEUTE)).toBe(36)
    expect(alterAm(undefined, HEUTE)).toBeNull()
  })

  it("Fitnessalter gegen das echte Alter", () => {
    const d = daten()
    expect(k(d, "fitnessalter", { fitnessalter: 34.3 })?.stufe).toBeNull()
    d.fitness = { geburtsjahr: 1988 }
    expect(k(d, "fitnessalter", { fitnessalter: 34.3 })?.stufe).toBe("gruen")
    expect(k(d, "fitnessalter", { fitnessalter: 39 })?.stufe).toBe("gelb")
    expect(k(d, "fitnessalter", { fitnessalter: 45 })?.stufe).toBe("rot")
  })

  it("Schritte: unter 60 ab 8000 gut, ab 60 schon ab 6000", () => {
    const d = daten()
    d.fitness = { geburtsjahr: 1990 }
    expect(k(d, "schritte", { schritte_wochenschnitt: 5700 })?.stufe).toBe("gelb")
    expect(k(d, "schritte", { schritte_wochenschnitt: 8200 })?.stufe).toBe("gruen")
    d.fitness = { geburtsjahr: 1960 }
    expect(k(d, "schritte", { schritte_wochenschnitt: 6500 })?.stufe).toBe("gruen")
    expect(k(d, "schritte", { schritte_wochenschnitt: 3000 })?.stufe).toBe("rot")
  })

  it("Ruhepuls und Schlaf aus den Tageswerten der Uhr", () => {
    const d = daten()
    const tage: Record<string, { ruhepuls: number; schlaf_min: number }> = {}
    for (let i = 1; i <= 7; i++)
      tage["2026-11-" + String(23 - i).padStart(2, "0")] = {
        ruhepuls: 51,
        schlaf_min: 370,
      }
    tage[HEUTE] = { ruhepuls: 90, schlaf_min: 100 }
    d.gesundheit = { verbunden: false, tage: {}, garmin: { stand: "", tage } }
    expect(k(d, "ruhepuls")?.stufe).toBe("gruen")
    // heute zählt nicht, die Nacht ist noch nicht vorbei
    expect(k(d, "schlaf")?.wert).toBe("6 h 10 min im Schnitt")
    expect(k(d, "schlaf")?.stufe).toBe("gelb")
  })

  it("Taille zu Größe braucht beides, der BMI hat keine Stufe", () => {
    const d = daten()
    expect(k(d, "taille_groesse")?.wert).toBe("")
    d.fitness = { groesse_cm: 185 }
    wertEintragen(d, "taille_cm", 90, HEUTE)
    expect(k(d, "taille_groesse")?.stufe).toBe("gruen")
    expect(k(d, "taille_groesse")?.wert).toBe("0,49")
    expect(k(d, "bmi")?.stufe).toBeNull()
    expect(k(d, "bmi")?.wert).toBe("27,2")
  })

  it("Liegestütze nur für Männer mit Stufe", () => {
    const d = daten()
    wertEintragen(d, "liegestuetze", 42, HEUTE)
    expect(k(d, "liegestuetze")?.stufe).toBeNull()
    d.fitness = { ...d.fitness, geschlecht: "m" }
    expect(k(d, "liegestuetze")?.stufe).toBe("blau")
  })

  it("Messwert am selben Tag ersetzt, sonst entsteht ein Verlauf", () => {
    const d = daten()
    wertEintragen(d, "weitsprung_cm", 230, "2026-09-01")
    wertEintragen(d, "weitsprung_cm", 240, HEUTE)
    wertEintragen(d, "weitsprung_cm", 245, HEUTE)
    expect(d.fitness?.werte?.weitsprung_cm).toEqual([
      { datum: "2026-09-01", wert: 230 },
      { datum: HEUTE, wert: 245 },
    ])
    expect(k(d, "weitsprung_cm")?.text).toContain("+15 seit 01.09.")
  })

  it("Uhrwerte nur bei Änderung und höchstens einmal am Tag merken", () => {
    const d = daten()
    expect(uhrMerken(d, { vo2max: 46, fitnessalter: 34.3 }, "2026-11-20")).toBe(true)
    expect(uhrMerken(d, { vo2max: 46, fitnessalter: 34.3 }, "2026-11-21")).toBe(false)
    expect(uhrMerken(d, { vo2max: 47 }, "2026-11-21")).toBe(true)
    expect(uhrMerken(d, { vo2max: 48 }, "2026-11-21")).toBe(false)
    expect(letzter(d.fitness, "vo2max")).toEqual({
      datum: "2026-11-21",
      wert: 47,
    })
  })

  it("In der Reha keine Sprünge, keine Liegestütze und keine Kraftwerte", () => {
    const d = daten()
    const b = fitnessBewertung(d, null, HEUTE, true)
    expect(b.find((x) => x.id === "schnellkraft")).toBeUndefined()
    expect(b.flatMap((x) => x.kennzahlen).find((x) => x.id === "liegestuetze")).toBeUndefined()
  })

  it("Übersicht zählt Stufen und fehlende Werte", () => {
    const d = daten()
    const u = fitnessUebersicht(fitnessBewertung(d, { ruhepuls_7_tage: 51 }, HEUTE))
    expect(u.gruen).toBe(1)
    expect(u.fehlt).toBeGreaterThan(5)
  })
})

describe("Fitness-Check mit Reha-Angaben", () => {
  it("nimmt Geburtsjahr und Geschlecht aus der Reha, eigene Angaben gehen vor", () => {
    const d = daten()
    d.profil = { ...d.profil!, reha: { ...d.profil!.reha!, geburtsjahr: 1950, geschlecht: "m" } }
    expect(k(d, "schritte", { schritte_wochenschnitt: 6500 })?.stufe).toBe("gruen")
    d.fitness = { geburtsjahr: 1990 }
    expect(k(d, "schritte", { schritte_wochenschnitt: 6500 })?.stufe).toBe("gelb")
  })
})

describe("Fitness-Check: Skala rot, gelb, grün, hellblau", () => {
  it("hellblau nur, wo mehr wirklich besser ist", () => {
    const d = daten()
    d.fitness = { geburtsjahr: 1990 }
    expect(k(d, "schritte", { schritte_wochenschnitt: 11000 })?.stufe).toBe("blau")
    expect(k(d, "ruhepuls", { ruhepuls_7_tage: 45 })?.stufe).toBe("blau")
    expect(k(d, "fitnessalter", { fitnessalter: 24 })?.stufe).toBe("blau")
  })

  it("Schlaf über 9 Stunden und sehr schmale Taille werden wieder gelb", () => {
    const d = daten()
    const tage: Record<string, { schlaf_min: number }> = {}
    for (let i = 1; i <= 7; i++) tage["2026-11-" + String(23 - i).padStart(2, "0")] = { schlaf_min: 580 }
    d.gesundheit = { verbunden: false, tage: {}, garmin: { stand: "", tage } }
    expect(k(d, "schlaf")?.stufe).toBe("gelb")
    d.fitness = { groesse_cm: 190 }
    wertEintragen(d, "taille_cm", 72, HEUTE)
    expect(k(d, "taille_groesse")?.stufe).toBe("gelb")
  })

  it("die Skala trägt Wert und Abschnitte, gut liegt rechts", () => {
    const d = daten()
    const r = k(d, "ruhepuls", { ruhepuls_7_tage: 51 })
    expect(r?.skala?.wert).toBe(51)
    expect(r?.skala?.umgekehrt).toBe(true)
    expect(r?.skala?.abschnitte.map((a) => a.farbe)).toEqual(["blau", "gruen", "gelb", "rot"])
  })
})
