// Wochenrückblick: Sätze je Muskelgruppe, Trend, Vorschläge und ihre Übernahme
import { describe, expect, it } from "vitest"
import { einheitAusPlan, planAusText } from "../src/logik/eigenerPlan"
import { zuordnen } from "../src/logik/kraftbuch"
import { ablehnen, anteil, MUSKELGRUPPEN, rueckblick, satzplusWeg, trends, uebernehmen, wochenZahlen } from "../src/logik/rueckblick"
import { leer, neuesProfil } from "../src/logik/speicher"
import type { Daten, Protokoll, Satz } from "../src/logik/typen"
import { uebung } from "../src/daten/uebungen/index"

const s = (last: number, wdh: number, rir = 1): Satz => ({ last, wdh, rir })
const p = (datum: string, id: string, saetze: Satz[]): Protokoll => ({ datum, uebung: id, saetze })
const gruppe = (id: string) => MUSKELGRUPPEN.find((g) => g.id === id)!

function aufbau(): Daten {
  const profil = { ...neuesProfil("2026-10-05"), ziel: "muskelaufbau" as const, planart: "eigen" as const, folge: "fortlaufend" as const }
  const text = Array.from({ length: 12 }, (_, i) => "Tag " + (i + 1) + ": Tag " + (i + 1) + "\nBench Press 3 x 5 80 %\nLatzug 3 x 10-12\nLateral Raise 2 x 12-15").join("\n")
  return { ...leer(), profil, eigenerPlan: planAusText(text, "Test", zuordnen) }
}

describe("Sätze je Muskelgruppe", () => {
  it("Zielmuskel zählt voll, mitarbeitende Muskeln halb, Haltemuskeln und Unbeteiligtes nicht", () => {
    const latzug = uebung("latzug")!
    expect(anteil(latzug, gruppe("ruecken"))).toBe(1)
    expect(anteil(latzug, gruppe("bizeps"))).toBe(0.5)
    expect(anteil(latzug, gruppe("waden"))).toBe(0)
    const bank = uebung("bankdruecken_lh")!
    expect(anteil(bank, gruppe("brust"))).toBe(1)
    expect(anteil(bank, gruppe("trizeps"))).toBe(0.5)
    // der Latissimus hält beim Bankdrücken nur: kein Rückentraining
    expect(anteil(bank, gruppe("ruecken"))).toBe(0)
    expect(anteil(uebung("kniebeuge_lh")!, gruppe("bauch"))).toBe(0)
  })
  it("zählt die Woche von Montag bis Sonntag, ohne Mobilität und ohne leere Sätze", () => {
    const d = { protokoll: [p("2026-11-02", "latzug", [s(60, 10), s(60, 10), s(60, 9)]), p("2026-11-04", "bankdruecken_lh", [s(80, 5), s(80, 5), { last: 80, wdh: 0, rir: 0 }]), p("2026-11-09", "latzug", [s(60, 10)])] }
    const w = wochenZahlen(d, "2026-11-02")
    expect(w.einheiten).toBe(2)
    expect(w.saetze).toBe(5)
    expect(w.gruppen.ruecken).toBe(3)
    expect(w.gruppen.bizeps).toBe(1.5)
    expect(w.gruppen.brust).toBe(2)
  })
})

describe("Trend je Übung", () => {
  it("erkennt Steigerung und Plateau (drei Einheiten ohne neuen Bestwert)", () => {
    const d = aufbau()
    d.protokoll = [
      ...["2026-10-06", "2026-10-13", "2026-10-20", "2026-10-27", "2026-11-03"].map((t, i) => p(t, "latzug", [s(60 + 2.5 * i, 10), s(60 + 2.5 * i, 10)])),
      p("2026-10-06", "seitheben", [s(12, 12), s(12, 12)]),
      ...["2026-10-13", "2026-10-20", "2026-10-27", "2026-11-03"].map((t) => p(t, "seitheben", [s(10, 12), s(10, 12)])),
    ]
    const t = trends(d, "2026-11-02")
    expect(t.find((x) => x.uebung === "latzug")!.status).toBe("steigt")
    expect(t.find((x) => x.uebung === "seitheben")!.status).toBe("plateau")
    // Plateau steht vorn
    expect(t[0].uebung).toBe("seitheben")
  })
})

describe("Vorschläge", () => {
  const mitWochen = () => {
    const d = aufbau()
    // drei Wochen: Rücken 6 Sätze, Schultern 2 Sätze Seitheben und 6 halbe aus dem Bankdrücken (8), Brust 12
    for (const mo of ["2026-10-12", "2026-10-19", "2026-10-26"]) {
      d.protokoll.push(p(mo, "latzug", Array.from({ length: 6 }, () => s(60, 10))))
      d.protokoll.push(p(mo, "seitheben", Array.from({ length: 2 }, () => s(10, 12))))
      d.protokoll.push(p(mo, "bankdruecken_lh", Array.from({ length: 12 }, () => s(80, 5))))
    }
    return d
  }

  it("Muskelgruppe unter 10 Sätzen: ein Satz mehr bei einer Übung aus dem Plan, nicht bei Prozent-Übungen", () => {
    const d = mitWochen()
    const r = rueckblick(d, "2026-10-26", "2026-11-02")
    expect(r.wochenImSchnitt).toBe(3)
    expect(r.schnitt.ruecken).toBe(6)
    const v = r.vorschlaege.filter((x) => x.art === "saetze")
    const teile = v.map((x) => (x.art === "saetze" ? x.gruppe + ":" + x.teile.map((t) => t.uebung).join("+") : ""))
    expect(teile).toContain("ruecken:latzug")
    expect(teile).toContain("schultern:seitheben")
    // Brust ist im Ziel; Bankdrücken gibt der Plan in Prozent vor und wird nie verändert
    expect(v.some((x) => x.art === "saetze" && (x.gruppe === "brust" || x.teile.some((t) => t.uebung === "bankdruecken_lh")))).toBe(false)
    expect(v.length).toBeLessThanOrEqual(3)
  })

  it("Übernehmen wirkt im Plan, lässt sich zurücknehmen und kommt für die Gruppe nicht gleich wieder", () => {
    const d = mitWochen()
    const v = rueckblick(d, "2026-10-26", "2026-11-02").vorschlaege.find((x) => x.art === "saetze" && x.gruppe === "ruecken")!
    uebernehmen(d, v, "2026-11-02")
    const e = einheitAusPlan(d.profil!, d, d.eigenerPlan!.tage[0], "2026-11-02", 0, () => [])
    expect(e.plaetze.find((x) => x.uebung.id === "latzug")!.vorgabe.saetze).toBe(4)
    expect(e.hinweise.join(" ")).toMatch(/Mehr Sätze als im Plan bei .*\(\+1\)/)
    expect(rueckblick(d, "2026-10-26", "2026-11-03").vorschlaege.some((x) => x.art === "saetze" && x.gruppe === "ruecken")).toBe(false)
    satzplusWeg(d, "latzug")
    expect(einheitAusPlan(d.profil!, d, d.eigenerPlan!.tage[0], "2026-11-02", 0, () => []).plaetze.find((x) => x.uebung.id === "latzug")!.vorgabe.saetze).toBe(3)
  })

  it("Der Vorschlag schließt die Lücke, statt nur einen Satz zu bringen, und sagt ehrlich, was er bringt", () => {
    // So war es am 12.11.2026: Brust im Schnitt 6 Sätze, Ziel 10, vorgeschlagen wurde ein einziger Satz bei einer
    // Übung, die in zehn Plantagen einmal vorkommt (bei fünf Trainingstagen ein halber Satz je Woche).
    const profil = { ...neuesProfil("2026-10-05"), ziel: "muskelaufbau" as const, planart: "eigen" as const, folge: "fortlaufend" as const }
    profil.woche = profil.woche.map((t, i) => (i < 5 ? { ...t, art: "training" as const, ort: 0, minuten: 60 } : { ...t, art: "frei" as const }))
    const tage = Array.from({ length: 10 }, (_, i) => "Tag " + (i + 1) + ": Tag " + (i + 1) + "\nLatzug 4 x 10-12" + (i === 0 ? "\nBench Press 3 x 6-8" : i === 2 ? "\nIncline Dumbbell Press 3 x 8-10" : i === 5 ? "\nButterfly 3 x 12" : ""))
    const d: Daten = { ...leer(), profil, eigenerPlan: planAusText(tage.join("\n"), "Test", zuordnen) }
    for (const mo of ["2026-10-12", "2026-10-19", "2026-10-26"]) {
      d.protokoll.push(p(mo, "bankdruecken_lh", Array.from({ length: 6 }, () => s(80, 6))))
      d.protokoll.push(p(mo, "latzug", Array.from({ length: 12 }, () => s(60, 10))))
    }
    const v = rueckblick(d, "2026-10-26", "2026-11-02").vorschlaege.find((x) => x.art === "saetze" && x.gruppe === "brust")
    if (!v || v.art !== "saetze") throw new Error("kein Vorschlag für die Brust")
    expect(v.schnitt).toBe(6)
    // drei Brustübungen, jede einmal in zehn Plantagen: je zwei Sätze mehr (bis fünf je Übung), zusammen 3 je Woche
    expect(v.teile.map((t) => t.uebung + "+" + t.plus).sort()).toEqual(["bankdruecken_lh+2", "butterfly_maschine+2", "schraegbankdruecken_kh+2"])
    expect(v.mehr).toBe(3)
    expect(v.danach).toBe(9)
    // mehr gibt der Plan nicht her: Das steht im Vorschlag, statt es zu verschweigen
    expect(v.rest).toBe("plan")
    uebernehmen(d, v, "2026-11-02")
    expect(einheitAusPlan(d.profil!, d, d.eigenerPlan!.tage[0], "2026-11-02", 0, () => []).plaetze.find((x) => x.uebung.id === "bankdruecken_lh")!.vorgabe.saetze).toBe(5)
  })

  it("Verteilt über die Woche: zuerst der Tag, der für die Muskelgruppe am leersten ist, und nie eine Übung an einem fremden Tag", () => {
    const profil = { ...neuesProfil("2026-10-05"), ziel: "muskelaufbau" as const, planart: "eigen" as const, folge: "fortlaufend" as const }
    profil.woche = profil.woche.map((t, i) => (i < 5 ? { ...t, art: "training" as const, ort: 0, minuten: 60 } : { ...t, art: "frei" as const }))
    // Tag 1: zwei Brustübungen (6 Sätze), Tag 3: eine (3 Sätze), Tag 2 ist ein Beintag ohne Brust
    const tage = Array.from({ length: 10 }, (_, i) => "Tag " + (i + 1) + ": Tag " + (i + 1) + "\n" + (i === 0 ? "Bench Press 3 x 6-8\nButterfly 3 x 12" : i === 2 ? "Incline Dumbbell Press 3 x 8-10" : i === 1 ? "Squat 4 x 6" : "Latzug 4 x 10-12"))
    const d: Daten = { ...leer(), profil, eigenerPlan: planAusText(tage.join("\n"), "Test", zuordnen) }
    for (const mo of ["2026-10-12", "2026-10-19", "2026-10-26"]) {
      d.protokoll.push(p(mo, "bankdruecken_lh", Array.from({ length: 9 }, () => s(80, 6))))
      d.protokoll.push(p(mo, "latzug", Array.from({ length: 12 }, () => s(60, 10))))
      d.protokoll.push(p(mo, "kniebeuge_lh", Array.from({ length: 12 }, () => s(100, 6))))
    }
    const v = rueckblick(d, "2026-10-26", "2026-11-02").vorschlaege.find((x) => x.art === "saetze" && x.gruppe === "brust")
    if (!v || v.art !== "saetze") throw new Error("kein Vorschlag für die Brust")
    // Lücke 1 Satz je Woche = zwei Sätze in zehn Plantagen: beide an den leeren Brusttag (3 → 5), nicht an den vollen (6)
    expect(v.teile.map((t) => t.uebung + "+" + t.plus)).toEqual(["schraegbankdruecken_kh+2"])
    const vorher = d.eigenerPlan!.tage.map((t) => einheitAusPlan(d.profil!, d, t, "2026-11-02", 0, () => []).plaetze.map((x) => x.uebung.id + ":" + x.vorgabe.saetze).join(","))
    uebernehmen(d, v, "2026-11-02")
    const nachher = d.eigenerPlan!.tage.map((t) => einheitAusPlan(d.profil!, d, t, "2026-11-02", 0, () => []).plaetze.map((x) => x.uebung.id + ":" + x.vorgabe.saetze).join(","))
    // nur der Tag mit der Übung ändert sich; der Beintag und alle anderen bleiben, wie der Plan sie vorgibt
    expect(nachher[2]).toBe("schraegbankdruecken_kh:5")
    expect(nachher.filter((_, i) => i !== 2)).toEqual(vorher.filter((_, i) => i !== 2))
    expect(nachher[1]).not.toMatch(/bankdruecken|butterfly/)
  })

  it("Kommt die Übung oft vor, reicht ein Satz: nicht über das Ziel hinaus, der Rest im nächsten Schritt", () => {
    const d = mitWochen()
    const v = rueckblick(d, "2026-10-26", "2026-11-02").vorschlaege.find((x) => x.art === "saetze" && x.gruppe === "ruecken")
    if (!v || v.art !== "saetze") throw new Error("kein Vorschlag für den Rücken")
    // Latzug an jedem der drei Trainingstage: ein Satz mehr bringt 3 je Woche (6 → 9), ein zweiter schösse auf 12
    expect(v.teile).toEqual([{ uebung: "latzug", name: uebung("latzug")!.name, plus: 1, vorkommen: 10 }])
    expect(v.mehr).toBe(3)
    expect(v.danach).toBe(9)
    expect(v.rest).toBe("schritt")
  })

  it("Ablehnen blendet vier Wochen aus", () => {
    const d = mitWochen()
    const v = rueckblick(d, "2026-10-26", "2026-11-02").vorschlaege.find((x) => x.art === "saetze" && x.gruppe === "ruecken")!
    ablehnen(d, v, "2026-11-02")
    expect(rueckblick(d, "2026-10-26", "2026-11-20").vorschlaege.some((x) => x.schluessel === v.schluessel)).toBe(false)
    expect(rueckblick(d, "2026-10-26", "2026-12-01").vorschlaege.some((x) => x.schluessel === v.schluessel)).toBe(true)
  })

  it("Plateau: Variante wechseln setzt den dauerhaften Tausch; neues Maximum wird übernommen", () => {
    const d = aufbau()
    d.protokoll = [p("2026-10-06", "seitheben", [s(12, 12), s(12, 12)]), ...["2026-10-13", "2026-10-20", "2026-10-27", "2026-11-03"].map((t) => p(t, "seitheben", [s(10, 12), s(10, 12)])), p("2026-11-03", "bankdruecken_lh", [s(100, 5, 1), s(100, 5, 1)])]
    d.maxwerte = { bankdruecken_lh: { kg: 110, datum: "2026-10-01" } }
    const r = rueckblick(d, "2026-11-02", "2026-11-09")
    const t = r.vorschlaege.find((x) => x.art === "tauschen")!
    expect(t.uebung).toBe("seitheben")
    uebernehmen(d, t, "2026-11-09", "seitheben_kabel_einarmig")
    expect(d.ersatz).toEqual({ seitheben: "seitheben_kabel_einarmig" })
    expect(d.profil!.ausgeschlossen).toContain("seitheben")
    const m = r.vorschlaege.find((x) => x.art === "maximum")!
    expect(m.art === "maximum" && m.neu).toBe(120)
    uebernehmen(d, m, "2026-11-09")
    expect(d.maxwerte.bankdruecken_lh.kg).toBe(120)
    // danach sind beide erledigt
    const danach = rueckblick(d, "2026-11-02", "2026-11-09").vorschlaege
    expect(danach.some((x) => x.art === "maximum" || x.art === "tauschen")).toBe(false)
  })

  it("Zeit: dauern die Einheiten regelmäßig länger, mehr Zeit je Trainingstag", () => {
    const d = aufbau()
    d.profil!.woche = d.profil!.woche.map((t) => (t.art === "training" ? { ...t, minuten: 55 } : t))
    d.erledigt = ["2026-10-27", "2026-10-29", "2026-11-03", "2026-11-05"].map((t, i) => ({ datum: t, titel: "x" + i, minuten: 60, saetze: 18, xp: 0, rekorde: [], dauer_min: 62 + i, budget_min: 55 }))
    const r = rueckblick(d, "2026-11-02", "2026-11-09")
    expect(r.zeit).toEqual({ einheiten: 2, ueber_min: 10 })
    const z = r.vorschlaege.find((x) => x.art === "zeit")!
    expect(z.art === "zeit" && z.minuten_neu).toBe(65)
    uebernehmen(d, z, "2026-11-09")
    expect(d.profil!.woche.filter((t) => t.art === "training").every((t) => t.minuten === 65)).toBe(true)
    expect(rueckblick(d, "2026-11-02", "2026-11-09").vorschlaege.some((x) => x.art === "zeit")).toBe(false)
  })

  it("Laufende Woche: der Schnitt kommt aus den abgeschlossenen Wochen", () => {
    const d = mitWochen()
    d.protokoll.push(p("2026-11-02", "latzug", [s(60, 10)]))
    const r = rueckblick(d, "2026-11-02", "2026-11-03")
    expect(r.laufend).toBe(true)
    expect(r.woche.gruppen.ruecken).toBe(1)
    expect(r.schnitt.ruecken).toBe(6)
  })
})

describe("Testplan", () => {
  it("ordnet die Übungen des Testplans der Datenbank zu", () => {
    const ids = aufbau().eigenerPlan!.tage[0].uebungen.map((u) => u.id)
    expect(ids).toEqual(["bankdruecken_lh", "latzug", "seitheben"])
  })
})
