// Wochenjournal: wann es fällig ist, was Pflicht ist und der Verlauf
import { describe, expect, it } from "vitest"
import { journalFaellig, journalUebersprungen, journalVerlauf, journalVollstaendig } from "../src/logik/wochenjournal"
import { beispielReha, neuesProfil } from "../src/logik/speicher"
import type { Daten, Erledigt, Wochenjournal } from "../src/logik/typen"

const erl = (datum: string, art?: Erledigt["art"]): Erledigt => ({ datum, titel: "x", minuten: 50, saetze: 12, xp: 10, rekorde: [], ...(art ? { art } : {}) })

// Wochenplan wie bei Alex: Montag bis Freitag Training, letzter Trainingstag Freitag
function daten(extra: Partial<Daten> = {}, ab = "2026-11-16"): Pick<Daten, "profil" | "wochenjournal" | "erledigt"> {
  const profil = { ...neuesProfil("2026-10-05"), wochenjournal: ab }
  profil.woche = profil.woche.map((_, i) => (i < 5 ? { art: "training" as const, ort: 0, minuten: 60, schwerpunkt: "kraft" as const } : { art: "frei" as const }))
  return { profil, wochenjournal: {}, erledigt: [], ...extra }
}

describe("Wochenjournal fällig", () => {
  it("nur am letzten Trainingstag der Woche (Freitag) und später", () => {
    const d = daten()
    expect(journalFaellig(d, "2026-11-16")).toBeNull() // Montag
    expect(journalFaellig(d, "2026-11-19")).toBeNull() // Donnerstag
    expect(journalFaellig(d, "2026-11-20")).toEqual({ woche: "2026-11-16", nachtrag: false }) // Freitag
    expect(journalFaellig(d, "2026-11-22")).toEqual({ woche: "2026-11-16", nachtrag: false }) // Sonntag, nachgeholt
  })

  it("aus: nicht fällig; erst ab der Woche des Einschaltens", () => {
    const aus = daten()
    delete aus.profil!.wochenjournal
    expect(journalFaellig(aus, "2026-11-20")).toBeNull()
    // eingeschaltet am Mittwoch 18.11.: die Woche davor wird nicht nachgefragt
    const neu = daten({ erledigt: [erl("2026-11-10")] }, "2026-11-18")
    expect(journalFaellig(neu, "2026-11-16")).toBeNull()
    expect(journalFaellig(neu, "2026-11-20")).toEqual({ woche: "2026-11-16", nachtrag: false })
  })

  it("ein Eintrag je Woche: gemacht oder übersprungen, dann nicht wieder", () => {
    const e: Wochenjournal = { woche: "2026-11-16", datum: "2026-11-20", erholung: 4, lust: 3, stress: 4, stellen: [] }
    expect(journalFaellig(daten({ wochenjournal: { "2026-11-16": e } }), "2026-11-20")).toBeNull()
    expect(journalFaellig(daten({ wochenjournal: { "2026-11-16": journalUebersprungen("2026-11-16", "2026-11-20") } }), "2026-11-20")).toBeNull()
  })

  it("ausgefallener Freitag: die Vorwoche kommt beim nächsten Training als Nachtrag", () => {
    const d = daten({ erledigt: [erl("2026-11-16"), erl("2026-11-17", "kraft")] })
    expect(journalFaellig(d, "2026-11-23")).toEqual({ woche: "2026-11-16", nachtrag: true })
    // Vorwoche ohne Krafttraining (nur Mobilität): nichts nachzutragen
    expect(journalFaellig(daten({ erledigt: [erl("2026-11-17", "mobilitaet")] }), "2026-11-23")).toBeNull()
  })

  it("nicht in der Reha", () => {
    const d = daten()
    d.profil = { ...beispielReha("2026-10-26"), woche: d.profil!.woche, wochenjournal: "2026-11-16" }
    expect(journalFaellig(d, "2026-11-20")).toBeNull()
  })
})

describe("Pflichtangaben und Verlauf", () => {
  it("alle drei Skalen und die Beschwerden (auch „keine“) müssen entschieden sein", () => {
    expect(journalVollstaendig({ erholung: 4, lust: 3, stress: 5, stellen: [] })).toBe(true)
    expect(journalVollstaendig({ erholung: 4, lust: 3, stress: 5, stellen: ["knie"] })).toBe(true)
    expect(journalVollstaendig({ erholung: 4, lust: 3, stress: 5 })).toBe(false)
    expect(journalVollstaendig({ erholung: 4, lust: 3, stellen: [] })).toBe(false)
    expect(journalVollstaendig({ erholung: 6, lust: 3, stress: 5, stellen: [] })).toBe(false)
  })

  it("Verlauf: neueste Woche zuerst, höchstens n", () => {
    const eintrag = (w: string): Wochenjournal => ({ woche: w, datum: w })
    const v = journalVerlauf({ wochenjournal: { "2026-11-02": eintrag("2026-11-02"), "2026-11-16": eintrag("2026-11-16"), "2026-11-09": eintrag("2026-11-09") } }, 2)
    expect(v.map((x) => x.woche)).toEqual(["2026-11-16", "2026-11-09"])
  })
})
