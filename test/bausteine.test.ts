// Bausteine: Zusatzeinheiten neben dem Plan, je Woche zusätzlich, statt Kraft oder aus
import { describe, expect, it } from "vitest"
import { modusAm, planEnde, stattAm } from "../src/logik/bausteine"
import { planAusText, planWoche } from "../src/logik/eigenerPlan"
import { zuordnen } from "../src/logik/kraftbuch"
import { heute, montagVon, plusTage, wochenplan } from "../src/logik/plan"
import { leer, neuesProfil } from "../src/logik/speicher"
import type { Baustein, Daten, Profil } from "../src/logik/typen"

const lauf: Baustein = { id: "b1", art: "laufen_locker", tage: [0, 3], tageszeit: "morgens", minuten: 30, ab: "2026-11-09", modus: "zusatz" }

function aufbau(b: Baustein[]): { p: Profil; d: Daten } {
  const p: Profil = { ...neuesProfil("2026-11-02"), planart: "eigen", folge: "fortlaufend", bausteine: b }
  // Mo, Mi, Fr Kraft
  p.woche = p.woche.map((_t, i) => (i === 0 || i === 2 || i === 4 ? { art: "training", ort: 0, minuten: 55, schwerpunkt: "kraft" } : { art: "frei" }))
  const text = Array.from({ length: 12 }, (_, i) => "Tag " + (i + 1) + ": Tag " + (i + 1) + "\nKniebeuge 3 x 5\nLatzug 3 x 10").join("\n")
  const d: Daten = { ...leer(), profil: p, eigenerPlan: planAusText(text, "Test", zuordnen), einstufung: { kraft: "2026-11-01", mobil: "2026-11-01" } }
  return { p, d }
}

describe("Bausteine", () => {
  it("gelten ab dem Datum an den Wochentagen; je Woche abweichend", () => {
    expect(modusAm(lauf, "2026-11-02")).toBe(null) // vor dem Start
    expect(modusAm(lauf, "2026-11-09")).toBe("zusatz") // Montag
    expect(modusAm(lauf, "2026-11-10")).toBe(null) // Dienstag
    const b = { ...lauf, wochen: { "2026-11-16": "statt" as const, "2026-11-23": "aus" as const } }
    expect(modusAm(b, "2026-11-16")).toBe("statt")
    expect(modusAm(b, "2026-11-19")).toBe("statt")
    expect(modusAm(b, "2026-11-23")).toBe(null)
    expect(stattAm({ bausteine: [b] }, "2026-11-16")).toBe(true)
  })

  // wochenplan rechnet mit dem heutigen Datum: die Tests nehmen deshalb die kommende Woche
  const kommend = montagVon(plusTage(heute(), 7))

  it("zusätzlich: Doppeltag, morgens zuerst, der Plan bleibt", () => {
    const { p, d } = aufbau([{ ...lauf, ab: kommend }])
    const w = wochenplan(p, d, kommend)
    const montag = w.filter((e) => e.datum === kommend)
    expect(montag.map((e) => e.art)).toEqual(["ausdauer", "kraft"])
    expect(montag[0].titel).toBe("Laufen locker (morgens)")
    expect(montag[0].hinweise.join(" ")).toMatch(/Doppeltag/)
    // Donnerstag nur der Lauf
    expect(w.filter((e) => e.datum === plusTage(kommend, 3)).map((e) => e.art)).toEqual(["ausdauer"])
    expect(w.filter((e) => e.art === "kraft").length).toBe(3)
  })

  it("statt Kraft: der Krafttag fällt weg, der Plan rückt nach hinten und endet später", () => {
    const statt = { ...lauf, modus: "statt" as const }
    const { p, d } = aufbau([statt])
    const heute = "2026-11-09"
    const kraft = planWoche(p, d, heute, heute, plusTage, () => [], undefined)
    // Montag ersetzt: Mittwoch und Freitag bleiben
    expect(kraft.map((e) => e.datum)).toEqual(["2026-11-11", "2026-11-13"])
    expect(kraft[0].titel).toBe("Tag 1")
    const ohne = planEnde(p, d, heute, false)
    const mit = planEnde(p, d, heute, true)
    expect(ohne).toBe("2026-12-04")
    expect(mit! > ohne!).toBe(true)
    expect(stattAm(p, "2026-11-09")).toBe(true)
  })

  it("Intervalle vor einem Beintag bekommen einen Hinweis", () => {
    const { p, d } = aufbau([{ ...lauf, art: "laufen_intervall", tage: [1], ab: kommend }])
    const w = wochenplan(p, d, kommend)
    const dienstag = w.find((e) => e.datum === plusTage(kommend, 1))!
    expect(dienstag.titel).toBe("Laufintervalle (morgens)")
    expect(dienstag.hinweise.join(" ")).toMatch(/Beintag/)
  })
})
