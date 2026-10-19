import { einheitFuer, erlaubt, wochenaufteilung, wochenplan } from "../src/logik/plan"
import { beispielFussball, beispielGolf, leer, neuesProfil, neuerOrt } from "../src/logik/speicher"
import { uebung } from "../src/daten/uebungen"
import type { Daten, Profil } from "../src/logik/typen"

const MONTAG = "2026-10-19"
const daten = (profil: Profil): Daten => ({ ...leer(), profil })

describe("Golfer: 5 × Studio, Samstag Dehnen im Keller, kein Ausdauertraining", () => {
  const profil = beispielGolf(MONTAG)
  const plan = wochenplan(profil, daten(profil), MONTAG)

  it("plant sechs Einheiten, fünf Kraft und eine Mobilität", () => {
    expect(plan.map((e) => e.art)).toEqual(["kraft", "kraft", "kraft", "kraft", "kraft", "mobilitaet"])
    expect(plan.map((e) => e.titel)).toEqual(["Unterkörper Kraft", "Oberkörper und Rotation", "Schnellkraft", "Einbeinig und Hüfte", "Zug, Schulter und Griff", "Mobilität"])
  })

  it("bleibt in der Zeit", () => {
    for (const e of plan) expect(e.minuten).toBeLessThanOrEqual(e.art === "mobilitaet" ? 40 : 60)
    for (const e of plan.slice(0, 5)) expect(e.minuten).toBeGreaterThan(40)
  })

  it("kein Ausdauertraining", () => {
    expect(plan.flatMap((e) => e.plaetze).some((p) => p.uebung.art === "ausdauer")).toBe(false)
  })

  it("nutzt golfspezifische Übungen", () => {
    const ids = plan.flatMap((e) => e.plaetze.map((p) => p.uebung.id))
    expect(ids.some((id) => uebung(id)!.sport?.includes("golf") && uebung(id)!.muster === "schnellkraft_wurf")).toBe(true)
    expect(ids.some((id) => uebung(id)!.muster === "rotation")).toBe(true)
  })

  it("Keller: nur Übungen ohne Gerät oder mit Band, nichts über der Deckenhöhe", () => {
    const keller = plan[5]
    expect(keller.plaetze.length).toBeGreaterThanOrEqual(4)
    for (const p of keller.plaetze) {
      expect(p.uebung.hoehe_cm).toBeLessThanOrEqual(205)
      expect(p.uebung.art).toBe("mobilitaet")
    }
    expect(new Set(keller.plaetze.map((p) => p.uebung.id)).size).toBe(keller.plaetze.length)
  })
})

describe("Fußballer: 2 × Mannschaftstraining, Spiel am Samstag, 3 Zusatzeinheiten", () => {
  const profil = beispielFussball(MONTAG)
  const plan = wochenplan(profil, daten(profil), MONTAG)
  const beine = ["kniebeuge", "hueftstreckung", "einbeinig", "schnellkraft_sprung", "sprint"]

  it("trainiert Montag, Mittwoch und Freitag", () => {
    expect(plan.map((e) => e.datum)).toEqual(["2026-10-19", "2026-10-21", "2026-10-23"])
  })

  it("Freitag vor dem Spiel: keine Beine, höchstens zwei Sätze", () => {
    const fr = plan[2]
    expect(fr.plaetze.some((p) => beine.includes(p.muster))).toBe(false)
    for (const p of fr.plaetze) expect(p.vorgabe.saetze).toBeLessThanOrEqual(2)
    expect(fr.hinweise.join(" ")).toMatch(/Wettkampf/)
  })

  it("Montag: schwere Beine und Prävention (Beinbeuger)", () => {
    const mo = plan[0]
    expect(mo.plaetze.some((p) => p.rolle === "haupt" && beine.includes(p.muster))).toBe(true)
    expect(mo.plaetze.some((p) => p.muster === "hamstring_praevention")).toBe(true)
  })

  it("Wettkampfphase: weniger Sätze für Hauptübungen", () => {
    const haupt = plan.flatMap((e) => e.plaetze).filter((p) => p.rolle === "haupt")
    for (const p of haupt) expect(p.vorgabe.saetze).toBeLessThanOrEqual(4)
  })

  it("Tag nach dem Spiel wird Regeneration", () => {
    const p2 = { ...profil, woche: profil.woche.map((t, i) => (i === 6 ? { art: "training" as const, ort: 0, minuten: 40 } : t)) }
    const so = einheitFuer(p2, daten(p2), "2026-10-25")
    expect(so?.art).toBe("regeneration")
  })
})

describe("Einschränkungen", () => {
  it("Knie meiden: keine Übung mit Kniebelastung", () => {
    const profil: Profil = { ...neuesProfil(MONTAG), beschwerden: [{ gelenk: "knie", grad: "meiden" }], orte: [beispielGolf(MONTAG).orte[0]] }
    const plan = wochenplan(profil, daten(profil), MONTAG)
    const alle = plan.flatMap((e) => e.plaetze.map((p) => p.uebung))
    expect(alle.length).toBeGreaterThan(10)
    expect(alle.some((u) => u.gelenke.knie)).toBe(false)
    expect(plan[0].hinweise.join(" ")).toMatch(/ersetzt keine/)
  })

  it("Schulter schonen: keine hoch belastende Schulterübung", () => {
    const profil: Profil = { ...neuesProfil(MONTAG), beschwerden: [{ gelenk: "schulter", grad: "schonen" }] }
    expect(erlaubt(profil, uebung("bankdruecken_lh")!)).toBe(false)
  })

  it("niedrige Decke: kein Überkopfdrücken und keine Klimmzüge", () => {
    const ort = { ...neuerOrt("Keller"), geraete: ["kurzhantel", "bank", "matte", "klimmzugstange"] as never, gewichte: { ...neuerOrt("x").gewichte, kurzhanteln: [5, 10, 15] }, deckenhoehe_cm: 195 }
    const profil: Profil = { ...neuesProfil(MONTAG), orte: [ort] }
    const plan = wochenplan(profil, daten(profil), MONTAG)
    for (const p of plan.flatMap((e) => e.plaetze)) expect(p.uebung.hoehe_cm).toBeLessThanOrEqual(195)
  })

  it("ausgeschlossene Übungen tauchen nicht auf", () => {
    const studio = beispielGolf(MONTAG).orte[0]
    const profil: Profil = { ...neuesProfil(MONTAG), orte: [studio] }
    const vorher = wochenplan(profil, daten(profil), MONTAG).flatMap((e) => e.plaetze.map((p) => p.uebung.id))
    const raus = vorher[0]
    const p2 = { ...profil, ausgeschlossen: [raus] }
    const nachher = wochenplan(p2, daten(p2), MONTAG).flatMap((e) => e.plaetze.map((p) => p.uebung.id))
    expect(nachher).not.toContain(raus)
  })

  it("nur Mobilität und Ausdauer angewählt: keine Krafteinheit", () => {
    const profil: Profil = { ...neuesProfil(MONTAG), arten: ["ausdauer"], orte: [beispielGolf(MONTAG).orte[0]] }
    const tage = wochenaufteilung(profil)
    expect(tage.every((t) => t.art === "ausdauer")).toBe(true)
    expect(tage.filter((t) => t.vorlage === "ausdauer_intervall").length).toBe(1)
  })
})
