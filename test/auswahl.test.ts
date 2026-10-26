import { aenderungsText, hatZiel, mitPositionen, mitSporten, mitZielen, naechsterBlock, planGeaendert, sporte } from "../src/logik/auswahl"
import { jahresplanVorschlag } from "../src/logik/jahresplan"
import { bereich } from "../src/logik/progression"
import { profilAm, wochenplan } from "../src/logik/plan"
import { beispielGolf, beispielReha, leer } from "../src/logik/speicher"
import { umstellen, vorgemerktAnwenden } from "../src/logik/umstellen"
import { uebung } from "../src/daten/uebungen/index"
import type { Daten } from "../src/logik/typen"

describe("Mehrfachauswahl", () => {
  it("Hauptsport ist der erste Nicht-Reha-Sport, „Kein bestimmter Sport“ fällt bei mehreren weg", () => {
    const p = beispielGolf("2026-10-26")
    const q = mitSporten(p, ["reha", "golf", "allgemein"])
    expect(q.sport).toBe("golf")
    expect(sporte(q)).toEqual(["reha", "golf"])
    expect(mitSporten(p, []).sport).toBe("allgemein")
  })

  it("Golf und Football wechseln sich an den Krafttagen ab, beide Positionen ergänzen", () => {
    let p = mitSporten(beispielGolf("2026-10-26"), ["golf", "football"])
    p = mitPositionen(p, ["qb", "ol"])
    const plan = wochenplan(p, { ...leer(), profil: p }, "2026-10-26").filter((e) => e.art === "kraft")
    const titel = plan.map((e) => e.titel)
    expect(titel).toContain("Unterkörper Kraft")
    expect(titel).toContain("Oberkörper Kraft")
    const muster = plan.flatMap((e) => e.plaetze.map((x) => x.muster))
    expect(muster).toContain("rotation") // Quarterback
    expect(muster).toContain("nacken") // Linie braucht Nacken, nur QB würde ihn weglassen
  })

  it("mehrere Ziele: Hauptübungen nach Kraft, Ergänzungen nach Muskelaufbau", () => {
    const p = mitZielen(beispielGolf("2026-10-26"), ["kraft", "muskelaufbau"])
    expect(hatZiel(p, "muskelaufbau")).toBe(true)
    const kb = uebung("kniebeuge_lh")!
    expect(bereich(p, "haupt", kb)).toEqual([4, 6])
    expect(bereich(p, "neben", kb)).toEqual([8, 12])
    expect(jahresplanVorschlag(mitSporten(p, ["allgemein"]), "2026-10-26").bloecke[2]).toBe("kraft")
  })

  it("Reha mit Golf: Krafttage abwechselnd Reha und Golf, Golftage schonen die Hüfte", () => {
    const p = mitSporten(beispielReha("2026-10-26"), ["reha", "golf"])
    p.reha!.warnzeichen = "2026-10-26"
    const plan = wochenplan(p, { ...leer(), profil: p }, "2026-10-26").filter((e) => e.art === "kraft")
    expect(plan[0].titel).toContain("Gelenktraining")
    expect(plan[1].titel).not.toContain("Gelenktraining")
    expect(plan[1].hinweise.join(" ")).toContain("Hüfte")
    for (const pl of plan[1].plaetze) expect(pl.uebung.gelenke.huefte || 0).toBeLessThan(2)
  })
})

describe("Plan umstellen", () => {
  const golfer = () => ({ ...beispielGolf("2026-10-26"), jahresplan: jahresplanVorschlag(beispielGolf("2026-10-26"), "2026-10-26") })

  it("erkennt planrelevante Änderungen, nicht aber den Namen oder die Warnzeichen", () => {
    const p = golfer()
    expect(planGeaendert(p, { ...p, name: "Papa" })).toBe(false)
    expect(planGeaendert(p, mitSporten(p, ["golf", "football"]))).toBe(true)
    expect(aenderungsText(p, mitZielen(mitSporten(p, ["football"]), ["kraft"]))).toBe("Sport, Ziele")
  })

  it("ab jetzt: sofort, Jahresplan mit neuer Saison", () => {
    const p = golfer()
    const neu = umstellen(p, mitSporten(p, ["football"]), "jetzt", "2026-11-02")
    expect(neu.sport).toBe("football")
    expect(neu.jahresplan!.saison).toEqual({ von: 5, bis: 9 })
  })

  it("nach dem Block: vorgemerkt, Vorschau zeigt den neuen Plan, danach übernommen", () => {
    const p = golfer()
    const neu = umstellen(p, { ...mitSporten(p, ["football"]), name: "Neu" }, "block", "2026-11-02")
    expect(neu.sport).toBe("golf")
    expect(neu.name).toBe("Neu")
    expect(neu.vorgemerkt?.ab).toBe(naechsterBlock(p, "2026-11-02"))
    expect(neu.vorgemerkt?.ab).toBe("2026-11-30")
    expect(profilAm(neu, "2026-11-29").sport).toBe("golf")
    expect(profilAm(neu, "2026-11-30").sport).toBe("football")
    const d: Daten = { ...leer(), profil: neu }
    expect(wochenplan(neu, d, "2026-11-30").some((e) => e.titel === "Schnellkraft und Antritt" || e.titel === "Oberkörper Kraft")).toBe(true)
    expect(vorgemerktAnwenden(neu, "2026-11-10").sport).toBe("golf")
    const spaeter = vorgemerktAnwenden(neu, "2026-11-30")
    expect(spaeter.sport).toBe("football")
    expect(spaeter.vorgemerkt).toBeUndefined()
  })

  it("nicht verändern: nur Name bleibt, Plan wie bisher", () => {
    const p = golfer()
    const neu = umstellen(p, { ...mitSporten(p, ["football"]), name: "Papa" }, "nie", "2026-11-02")
    expect(neu.sport).toBe("golf")
    expect(neu.name).toBe("Papa")
    expect(neu.vorgemerkt).toBeUndefined()
  })
})
