// Tagesform aus der Uhr: Schlaf, Ruhepuls und HRV gegen die eigenen letzten Tage
import { describe, expect, test } from "vitest"
import { formSchwach } from "../src/logik/gesundheit"

const normal = Array.from({ length: 6 }, () => ({ schlaf_min: 450, ruhepuls: 52, hrv: 60 }))

describe("Tagesform", () => {
  test("Normale Nacht: keine Punkte", () => {
    expect(formSchwach({ schlaf_min: 440, ruhepuls: 53, hrv: 58 }, normal).punkte).toBe(0)
  })
  test("Wenig Schlaf allein reicht erst unter 5 Stunden", () => {
    expect(formSchwach({ schlaf_min: 330, ruhepuls: 52, hrv: 60 }, normal).punkte).toBe(1)
    expect(formSchwach({ schlaf_min: 280, ruhepuls: 52, hrv: 60 }, normal).punkte).toBe(2)
  })
  test("Kurz geschlafen und Ruhepuls hoch: schwach, mit Gründen", () => {
    const f = formSchwach({ schlaf_min: 340, ruhepuls: 59, hrv: 58 }, normal)
    expect(f.punkte).toBe(2)
    expect(f.gruende.join(" ")).toMatch(/Schlaf.*Ruhepuls 59 statt sonst etwa 52/)
  })
  test("HRV deutlich unter dem Schnitt zählt, ohne Verlauf nicht", () => {
    expect(formSchwach({ hrv: 42 }, normal).punkte).toBe(2)
    expect(formSchwach({ hrv: 42, ruhepuls: 70 }, normal.slice(0, 2)).punkte).toBe(0)
  })
})
