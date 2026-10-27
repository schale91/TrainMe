import { blockNeuStarten, jahresplanVorschlag, mitPhase, neuPlanen, phaseAm, plusTage } from "../src/logik/jahresplan"
import { bereich, zielRir } from "../src/logik/progression"
import { wochenplan } from "../src/logik/plan"
import { beispielGolf, leer, neuesProfil } from "../src/logik/speicher"
import { uebung } from "../src/daten/uebungen/index"

describe("Jahresplan", () => {
  it("Golf ab Oktober: Grundlage, dann Kraft und Schnellkraft vor der Saison im April, in der Saison Erhalt", () => {
    const p = { ...neuesProfil("2026-10-19"), sport: "golf", ziel: "sport" as const }
    const plan = jahresplanVorschlag(p, "2026-10-19")
    expect(plan.saison).toEqual({ von: 4, bis: 10 })
    expect(plan.bloecke).toEqual(["grundlage", "grundlage", "kraft", "kraft", "schnellkraft", "erhalt", "erhalt", "erhalt", "erhalt", "erhalt"])
  })

  it("nach der Saison folgt ein Übergang, aber nie als allererster Block", () => {
    const p = { ...neuesProfil("2026-08-31"), sport: "golf", ziel: "sport" as const }
    const plan = jahresplanVorschlag(p, "2026-08-31")
    expect(plan.bloecke[0]).toBe("erhalt")
    expect(plan.bloecke[2]).toBe("uebergang")
    const start = jahresplanVorschlag(p, "2026-10-19")
    expect(start.bloecke[0]).not.toBe("uebergang")
  })

  it("ohne Saison wiederholt sich eine Reihe je Ziel", () => {
    const p = { ...neuesProfil("2026-10-19"), ziel: "muskelaufbau" as const }
    expect(jahresplanVorschlag(p, "2026-10-19").bloecke.slice(0, 6)).toEqual(["grundlage", "grundlage", "kraft", "grundlage", "grundlage", "kraft"])
  })

  it("Phase am Datum, auch nach dem Planende", () => {
    const p = { ...neuesProfil("2026-10-19"), sport: "golf", ziel: "sport" as const }
    p.jahresplan = jahresplanVorschlag(p, "2026-10-19")
    expect(phaseAm(p, "2026-10-21")).toBe("grundlage")
    expect(phaseAm(p, plusTage("2026-10-19", 4 * 35 + 3))).toBe("schnellkraft")
    // Block 11 liegt im Oktober des nächsten Jahres, Block 12 danach: Übergang
    expect(phaseAm(p, plusTage("2026-10-19", 11 * 35 + 3))).toBe("uebergang")
  })

  it("neuer Block nach Urlaub: laufende Phase beginnt von vorn, der Rest rückt nach hinten", () => {
    const p = { ...neuesProfil("2026-10-19"), sport: "golf", ziel: "sport" as const }
    p.jahresplan = jahresplanVorschlag(p, "2026-10-19")
    const montag = plusTage("2026-10-19", 2 * 35 + 14) // mitten in Block 3 (Kraft)
    const neu = blockNeuStarten(p, montag)
    expect(neu.block_start).toBe(montag)
    expect(phaseAm(neu, montag)).toBe("kraft")
    expect(phaseAm(neu, plusTage(montag, 35))).toBe("kraft")
    expect(phaseAm(neu, plusTage(montag, 70))).toBe("schnellkraft")
  })

  it("neu planen beginnt mit dem laufenden Block", () => {
    const p = neuesProfil("2026-10-19")
    const plan = neuPlanen(p, "2026-12-01", null)
    expect(plan.start).toBe("2026-11-23")
  })

  it("die Phase steuert Wiederholungen und Reserve", () => {
    const p = { ...neuesProfil("2026-10-19"), ziel: "sport" as const, erfahrung: "fortgeschritten" as const }
    const kb = uebung("kniebeuge_lh")!
    expect(kb).toBeTruthy()
    expect(bereich({ ...p, phase: "grundlage" }, "haupt", kb)).toEqual([8, 12])
    expect(bereich({ ...p, phase: "kraft" }, "haupt", kb)).toEqual([4, 6])
    expect(bereich({ ...p, phase: "schnellkraft" }, "haupt", kb)).toEqual([3, 5])
    expect(zielRir({ ...p, phase: "uebergang" }, "haupt", 3)).toBe(4)
    expect(zielRir({ ...p, phase: "erhalt" }, "haupt", 3)).toBe(3)
    expect(mitPhase({ ...p, jahresplan: { start: "2026-10-19", saison: null, bloecke: ["erhalt"] } }, "2026-10-20").saison).toBe("wettkampf")
  })

  it("jede Übung im Plan hat Gründe, und im Übergang höchstens 2 Sätze", () => {
    const p = beispielGolf("2026-10-19")
    p.jahresplan = { start: "2026-10-19", saison: null, bloecke: ["uebergang"] }
    const d = { ...leer(), profil: p }
    const plan = wochenplan(p, d, "2026-10-19")
    expect(plan.length).toBeGreaterThan(0)
    for (const e of plan)
      for (const pl of e.plaetze) {
        expect(pl.warum?.[0]?.art).toBe("platz")
        if (pl.rolle !== "ausdauer") expect(pl.vorgabe.saetze).toBeLessThanOrEqual(2)
      }
  })
})
