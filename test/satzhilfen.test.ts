import { uebung } from "../src/daten/uebungen/index"
import { LEER } from "../src/logik/gewichte"
import { ausLebenswelt, eintragen, schnitt, trend } from "../src/logik/koerper"
import { belastbaresE1rm, e1rm, pauseNachSatz, topsatzPasst, vorgabe } from "../src/logik/progression"
import { aufwaermSaetze, backoffLast, backoffNachTopsatz, neuerBestwert, satzformVon, scheibenProSeite, unplausibel } from "../src/logik/satzhilfen"
import { leer, neuesProfil } from "../src/logik/speicher"
import type { Protokoll, Satz, Vorgabe } from "../src/logik/typen"
import { maxZusammenfassung } from "../src/logik/zusammenfassung"

const s = (last: number, wdh: number, rir: number, mehr: Partial<Satz> = {}): Satz => ({ last, wdh, rir, ...mehr })
const lasten = Array.from({ length: 60 }, (_, i) => 20 + i * 2.5)
const v = (mehr: Partial<Vorgabe> = {}): Vorgabe => ({ saetze: 4, wdh_von: 5, wdh_bis: 5, rir: 2, last: 80, modell: "rir", pause_s: 180, begruendung: "", ...mehr })

describe("Topsatz mit Back-off-Sätzen", () => {
  it("Back-off etwa 10 % leichter, immer unter dem Topsatz", () => {
    expect(backoffLast(80, lasten)).toBe(72.5)
    expect(backoffLast(100, lasten)).toBe(90)
    // grobe Stufen: trotzdem eine Stufe leichter
    expect(backoffLast(24, [16, 20, 24])).toBe(20)
  })

  it("Back-off richtet sich nach dem, was im Topsatz wirklich ging", () => {
    // 80 × 5 mit 2 im Tank wie geplant: Maximum etwa 98,7 kg, passend 80 kg, Back-off 72,5 kg
    expect(backoffNachTopsatz(s(80, 5, 2), 5, 2, lasten)?.last).toBe(72.5)
    // Topsatz schwerer als gedacht (0 im Tank): Back-off leichter
    expect(backoffNachTopsatz(s(80, 5, 0), 5, 2, lasten)!.last).toBeLessThan(72.5)
    // Topsatz viel zu leicht: Back-off höchstens so schwer wie der Topsatz
    expect(backoffNachTopsatz(s(60, 12, 5), 5, 2, lasten)!.last).toBeLessThanOrEqual(60)
  })

  it("das Maximum kommt aus dem Topsatz, die leichteren Back-off-Sätze ziehen es nicht nach unten", () => {
    const saetze = [s(80, 5, 2, { art: "top" }), s(72.5, 5, 3, { art: "backoff" }), s(72.5, 5, 2, { art: "backoff" })]
    expect(belastbaresE1rm(saetze)).toBeCloseTo(e1rm(saetze[0]), 5)
  })

  it("Standard nur in Kraft und Schnellkraft, ab drei Sätzen, nicht in der Entlastung", () => {
    const p = { ...neuesProfil(), phase: "kraft" as const }
    expect(topsatzPasst(p, 4, false)).toBe(true)
    expect(topsatzPasst(p, 2, false)).toBe(false)
    expect(topsatzPasst(p, 4, true)).toBe(false)
    expect(topsatzPasst({ ...p, phase: "grundlage" }, 4, false)).toBe(false)
  })

  it("die Vorgabe der Hauptübung in der Kraftphase schlägt den Topsatz vor", () => {
    const p = { ...neuesProfil(), erfahrung: "erfahren" as const, ziel: "kraft" as const, phase: "kraft" as const }
    const u = uebung("bankdruecken_lh")!
    const verlauf: Protokoll[] = [{ datum: "2026-10-20", uebung: u.id, saetze: [s(80, 5, 2), s(80, 5, 1), s(80, 4, 1)] }]
    const x = vorgabe(p, "haupt", u, 4, verlauf, lasten, 1)
    expect(x.topsatz).toBe(true)
    expect(x.begruendung).toContain("Topsatz")
    expect(satzformVon(x, undefined, true)).toBe("topsatz")
    expect(satzformVon(x, "gleich", true)).toBe("gleich")
    expect(satzformVon({ ...x, saetze: 2 }, "topsatz", true)).toBe("gleich")
  })
})

describe("Aufwärmsätze", () => {
  const g = { ...LEER, stange: 20, scheiben: [1.25, 2.5, 5, 10, 10, 20, 20] }
  it("Langhantel, erste Übung: leere Stange, dann steigend bis etwa 85 %", () => {
    const a = aufwaermSaetze(100, "langhantel", g, lasten, true)
    expect(a.map((x) => x.last)).toEqual([20, 50, 70, 85])
    expect(a.map((x) => x.wdh)).toEqual([10, 8, 5, 3])
    expect(a[0].text).toBe("leere Stange")
  })
  it("spätere Hauptübung: zwei kurze Sätze", () => {
    expect(aufwaermSaetze(100, "langhantel", g, lasten, false).map((x) => x.last)).toEqual([60, 85])
  })
  it("leichtes Gewicht ohne schweren Annäherungssatz, Kurzhanteln kürzer", () => {
    expect(aufwaermSaetze(30, "langhantel", g, lasten, true).every((x) => x.last < 30)).toBe(true)
    expect(aufwaermSaetze(30, "langhantel", g, lasten, true).some((x) => x.wdh === 3)).toBe(false)
    expect(aufwaermSaetze(24, "kurzhantel", g, [8, 10, 12, 14, 16, 18, 20, 22, 24], true).map((x) => x.last)).toEqual([12, 18])
  })
  it("Bänder und ohne Gewicht: keine Aufwärmsätze", () => {
    expect(aufwaermSaetze(3, "band", g, [1, 2, 3], true)).toEqual([])
    expect(aufwaermSaetze(0, "langhantel", g, lasten, true)).toEqual([])
  })
})

describe("Scheibenrechner", () => {
  it("mit den eigenen Scheiben, möglichst wenige", () => {
    expect(scheibenProSeite(100, 20, [1.25, 2.5, 5, 10, 10, 20, 20])).toEqual([20, 20])
    expect(scheibenProSeite(72.5, 20, [1.25, 2.5, 5, 10, 10, 20, 20])).toEqual([20, 5, 1.25])
    expect(scheibenProSeite(20, 20, [5])).toEqual([])
  })
  it("geht es mit den vorhandenen Scheiben nicht auf: null", () => {
    expect(scheibenProSeite(200, 20, [5, 10])).toBeNull()
  })
  it("im Studio ohne Liste mit üblichen Scheiben", () => {
    expect(scheibenProSeite(142.5, 20, [])).toEqual([25, 25, 10, 1.25])
  })
})

describe("Pause nach dem Satz", () => {
  it("30 s länger, wenn Wiederholungen fehlten oder der Satz ans Limit ging", () => {
    expect(pauseNachSatz(v(), s(80, 5, 2), "gewicht").sekunden).toBe(180)
    expect(pauseNachSatz(v(), s(80, 3, 0), "gewicht")).toEqual({ sekunden: 210, grund: "30 s länger, weil Wiederholungen fehlten" })
    expect(pauseNachSatz(v(), s(80, 5, 0), "gewicht").sekunden).toBe(210)
    expect(pauseNachSatz(v({ pause_s: 290 }), s(80, 2, 0), "gewicht").sekunden).toBe(300)
    expect(pauseNachSatz(v({ pause_s: 40 }), s(0, 1, 0), "zeit").sekunden).toBe(40)
  })
})

describe("Plausibilität und Bestwerte", () => {
  const verlauf: Protokoll[] = [
    { datum: "2026-10-13", uebung: "bankdruecken_lh", saetze: [s(80, 5, 2)] },
    { datum: "2026-10-20", uebung: "bankdruecken_lh", saetze: [s(82.5, 5, 2)] },
  ]
  it("800 statt 80 kg fällt auf, normale Steigerung nicht", () => {
    expect(unplausibel(s(800, 5, 2), verlauf)).toBe(true)
    expect(unplausibel(s(85, 5, 2), verlauf)).toBe(false)
    expect(unplausibel(s(800, 5, 2), verlauf.slice(0, 1))).toBe(false)
  })
  it("unplausible Sätze zählen nicht für das Maximum", () => {
    expect(e1rm(s(800, 5, 2, { unplausibel: true }))).toBe(0)
  })
  it("neuer Bestwert in der Einheit", () => {
    expect(neuerBestwert([s(85, 5, 2)], verlauf, "bankdruecken_lh", "2026-10-27")).not.toBeNull()
    expect(neuerBestwert([s(80, 5, 2)], verlauf, "bankdruecken_lh", "2026-10-27")).toBeNull()
    expect(neuerBestwert([s(80, 5, 2)], [], "bankdruecken_lh", "2026-10-27")).toBeNull()
  })
})

describe("Zusammenfassung nach der Einheit", () => {
  it("schlägt ein neues Maximum vor, wenn das eingetragene überholt ist", () => {
    const d = { ...leer(), maxwerte: { bankdruecken_lh: { kg: 90, datum: "2026-09-01" } } }
    const z = maxZusammenfassung(d, [{ datum: "2026-10-27", uebung: "bankdruecken_lh", saetze: [s(85, 5, 2, { art: "top" }), s(75, 5, 3)] }], "2026-10-27")
    // 85 × 5 mit 2 im Tank: etwa 104,8 kg, auf 0,5 kg gerundet
    expect(z[0].heute).toBe(105)
    expect(z[0].vorher).toBe(90)
    expect(z[0].vorschlag).toBe(105)
  })
  it("Sätze über 10 Wiederholungen zählen nicht, ohne eingetragenes Maximum kein Vorschlag", () => {
    const z = maxZusammenfassung(leer(), [{ datum: "2026-10-27", uebung: "bankdruecken_lh", saetze: [s(50, 15, 2), s(60, 8, 2)] }], "2026-10-27")
    expect(z[0].heute).toBe(80)
    expect(z[0].vorschlag).toBeNull()
  })
})

describe("Körpergewicht", () => {
  it("Schnitt und Trend in kg pro Woche", () => {
    let l = eintragen(undefined, "2026-10-01", 82)
    for (let i = 1; i <= 21; i += 2) l = eintragen(l, "2026-10-" + String(1 + i).padStart(2, "0"), 82 - i * (0.5 / 7))
    expect(trend(l)).toBeCloseTo(-0.5, 2)
    expect(schnitt(l, "2026-10-22")).toBeLessThan(82)
  })
  it("zu wenige Werte oder zu kurzer Zeitraum: kein Trend", () => {
    expect(trend(eintragen(eintragen(undefined, "2026-10-01", 80), "2026-10-02", 80))).toBeNull()
    const l = eintragen(eintragen(eintragen(undefined, "2026-10-01", 80), "2026-10-02", 80), "2026-10-03", 81)
    expect(trend(l)).toBeNull()
  })
  it("Lebenswelt: derselbe alte Wert wird nicht jeden Tag neu eingetragen", () => {
    const l = ausLebenswelt(undefined, "2026-10-26", 81.4)
    expect(ausLebenswelt(l, "2026-10-27", 81.4)).toBe(l)
    expect(ausLebenswelt(l, "2026-10-27", 81.0)).toHaveLength(2)
    expect(ausLebenswelt(l, "2026-10-27", 81.0, "2026-10-25").map((m) => m.datum)).toEqual(["2026-10-25", "2026-10-26"])
  })
})

import { taste, zahlAus } from "../src/ui/Zahlenfeld"

describe("Zahlenfeld", () => {
  it("erste Ziffer ersetzt, Komma nur beim Gewicht, Löschen", () => {
    let st = { puffer: "80", frisch: true }
    st = taste(st, "8", true)
    st = taste(st, "2", true)
    st = taste(st, ",", true)
    st = taste(st, "5", true)
    expect(st.puffer).toBe("82,5")
    expect(zahlAus(st.puffer)).toBe(82.5)
    expect(taste({ puffer: "8", frisch: false }, ",", false).puffer).toBe("8")
    expect(taste(st, "del", true).puffer).toBe("82,")
    expect(zahlAus(taste(st, "clr", true).puffer)).toBeNull()
  })
})

import { summenBeliebig, verfuegbar } from "../src/logik/gewichte"

describe("Scheiben: von jeder Sorte genug", () => {
  it("Langhantel mit beliebig vielen 1,25-, 2,5-, 5-, 10- und 20-kg-Scheiben", () => {
    const g = { ...LEER, stange: 20, scheiben: [1.25, 2.5, 5, 10, 20], scheiben_beliebig: true }
    const l = verfuegbar("langhantel", g)
    expect(l[0]).toBe(20)
    expect(l).toContain(142.5)
    expect(l).toContain(220)
    expect(l[1] - l[0]).toBe(2.5)
    expect(summenBeliebig([5], 20)).toEqual([0, 5, 10, 15, 20])
  })
  it("Scheibenrechner nutzt mehrere gleiche Scheiben", () => {
    expect(scheibenProSeite(180, 20, [5, 10, 20], true)).toEqual([20, 20, 20, 20])
    expect(scheibenProSeite(170, 20, [5, 10, 20], true)).toEqual([20, 20, 20, 10, 5])
    expect(scheibenProSeite(181, 20, [5, 10, 20], true)).toBeNull()
  })
})

import { erlaubt, golfUebung } from "../src/logik/plan"
import { UEBUNGEN } from "../src/daten/uebungen/index"

describe("Ohne Golf nichts Golfspezifisches", () => {
  it("Golfübungen sind nur mit Golf erlaubt, allgemeine Übungen mit Golfbezug bleiben", () => {
    const ohne = { ...neuesProfil(), sport: "allgemein" as const, sporte: ["allgemein" as const] }
    const mit = { ...neuesProfil(), sport: "golf" as const, sporte: ["golf" as const] }
    const golfrunde = UEBUNGEN.find((u) => u.id === "golfrunde_zu_fuss")!
    expect(golfUebung(golfrunde)).toBe(true)
    expect(erlaubt(ohne, golfrunde)).toBe(false)
    expect(erlaubt(mit, golfrunde)).toBe(true)
    const radial = UEBUNGEN.find((u) => u.id === "radialduktion")!
    expect(golfUebung(radial)).toBe(false)
  })
})

import { golfSetzen, ohneGolf } from "../src/ui/golf"

describe("Texte ohne Golf", () => {
  it("Zusätze und Sätze mit Golfbezug fallen weg", () => {
    golfSetzen(false)
    expect(ohneGolf("Mit einem Tennisball oder Golfball. Belebt die Füße vor dem Training oder Golfen.")).toBe("Mit einem Tennisball. Belebt die Füße vor dem Training.")
    expect(ohneGolf("Dehnt die Hüfte. Wichtig im Golfschwung.")).toBe("Dehnt die Hüfte.")
    golfSetzen(true)
    expect(ohneGolf("Wichtig im Golfschwung.")).toBe("Wichtig im Golfschwung.")
    golfSetzen(false)
  })
})
