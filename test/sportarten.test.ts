import { AUFTEILUNG, POSITIONEN, VORLAGEN } from "../src/daten/vorlagen"
import { jahresplanVorschlag } from "../src/logik/jahresplan"
import { wochenplan } from "../src/logik/plan"
import { leer, neuesProfil, studio } from "../src/logik/speicher"
import { MUSTER, type Profil } from "../src/logik/typen"
import { aktuellerBlock, wegStand } from "../src/logik/weg"

function sportler(sport: string, position?: string): Profil {
  const p = neuesProfil("2026-10-19")
  const tag = { art: "training" as const, ort: 0, minuten: 60, schwerpunkt: "kraft" as const }
  return { ...p, sport, position, ziel: sport === "bodybuilding" ? "muskelaufbau" : "sport", erfahrung: "fortgeschritten", orte: [studio()], woche: [tag, tag, { art: "frei" }, tag, tag, { art: "frei" }, { art: "frei" }] }
}

describe("Football und Bodybuilding", () => {
  it("alle Vorlagen nutzen gültige Muster", () => {
    for (const v of Object.values(VORLAGEN)) for (const p of v.plaetze) expect(MUSTER).toContain(p.muster)
    for (const pos of POSITIONEN) for (const l of Object.values(pos.extra)) for (const p of l) expect(MUSTER).toContain(p.muster)
    for (const sport of ["football", "bodybuilding"]) for (let n = 1; n <= 6; n++) for (const id of AUFTEILUNG[sport][n]) expect(VORLAGEN[id]).toBeTruthy()
  })

  it("Quarterback bekommt Rotation und keine Nackenübung, Linie bekommt Nacken", () => {
    const qb = sportler("football", "qb")
    const plan = wochenplan(qb, { ...leer(), profil: qb }, "2026-10-19")
    const muster = plan.flatMap((e) => e.plaetze.map((p) => p.muster))
    expect(muster).toContain("rotation")
    expect(muster).not.toContain("nacken")
    const pos = plan.flatMap((e) => e.plaetze).find((p) => p.warum?.some((g) => g.art === "position"))
    expect(pos).toBeTruthy()
    const ol = sportler("football", "ol")
    expect(wochenplan(ol, { ...leer(), profil: ol }, "2026-10-19").flatMap((e) => e.plaetze.map((p) => p.muster))).toContain("nacken")
  })

  it("Bodybuilding: Drücken, Ziehen, Beine mit vielen Isolationsübungen und Reihe für Muskelaufbau", () => {
    const bb = sportler("bodybuilding")
    const plan = wochenplan(bb, { ...leer(), profil: bb }, "2026-10-19")
    expect(plan.length).toBe(4)
    expect(plan.flatMap((e) => e.plaetze).filter((p) => p.rolle === "isolation").length).toBeGreaterThan(6)
    expect(jahresplanVorschlag(bb, "2026-10-19").bloecke.slice(0, 3)).toEqual(["grundlage", "grundlage", "kraft"])
  })

  it("Football-Saison Mai bis September", () => {
    expect(jahresplanVorschlag(sportler("football"), "2026-10-19").saison).toEqual({ von: 5, bis: 9 })
  })
})

describe("Dein Weg", () => {
  it("zeigt Start, Einstufung, Blöcke, Kontrollen und Saisonstart, und zählt Einheiten im Block", () => {
    const p = { ...sportler("golf"), jahresplan: jahresplanVorschlag(sportler("golf"), "2026-10-19") }
    const d = { ...leer(), profil: p }
    d.erledigt = [{ datum: "2026-10-20", titel: "A", minuten: 60, saetze: 10, xp: 40, rekorde: ["x"] }]
    const s = wegStand(d, "2026-10-28")
    expect(s[0].art).toBe("start")
    expect(s[1]).toMatchObject({ art: "einstufung", status: "jetzt" })
    const b = aktuellerBlock(s)!
    expect(b).toMatchObject({ nr: 1, phase: "grundlage", einheiten: 1, geplant: 20, rekorde: 1, woche: 1, tageRest: 26 })
    expect(s.some((x) => x.art === "saison")).toBe(true)
    // Kontrolle vor dem Wechsel von Grundlage zu Kraft
    expect(s.filter((x) => x.art === "test").length).toBeGreaterThanOrEqual(3)
  })
})
