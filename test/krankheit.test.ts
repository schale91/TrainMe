// Krankheit: Hals-Check, leichte Einheit, Rückkehr-Stufen, Brücke statt Testtag, Auswertungen
import { describe, expect, it } from "vitest"
import { planAusText, planWoche } from "../src/logik/eigenerPlan"
import { zuordnen } from "../src/logik/kraftbuch"
import { aktiveKrankheit, auffaelligeTage, krankMelden, pauseOhneKrankheit, krankZuruecknehmen, nachKrankheit, rueckkehrStufen, schonTage, verlaufMelden, wiederFit, wocheMitKrankheit } from "../src/logik/krankheit"
import { beispielReha, leer, neuesProfil } from "../src/logik/speicher"
import { rueckblick } from "../src/logik/rueckblick"
import { serie } from "../src/logik/spiel"
import { journalFaellig } from "../src/logik/wochenjournal"
import type { Daten, Einheit } from "../src/logik/typen"

const plus = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * 86400000).toISOString().slice(0, 10)
const MO = "2026-11-23"

function daten(an = true): Daten {
  const profil = { ...neuesProfil("2026-10-05"), planart: "eigen" as const, folge: "fortlaufend" as const, ziel: "muskelaufbau" as const, krankheit: an }
  profil.woche = profil.woche.map((_, i) => (i < 5 ? { art: "training" as const, ort: 0, minuten: 60, schwerpunkt: "kraft" as const } : { art: "frei" as const }))
  const text = "Tag 1: FULL BODY 1\nBench Press 4 x 6 80 %\nLateral Raise 3 x 15\nTag 2: FULL BODY 2\nLatzug 4 x 10\nTag 3: SQUAT-TEST\nSquat 1 x 3 90 %\nTag 4: FULL BODY 4\nLatzug 3 x 10\nTag 5: FULL BODY 5\nLateral Raise 3 x 15\nTag 6: FULL BODY 6\nLatzug 3 x 10"
  return { ...leer(), profil, eigenerPlan: { ...planAusText(text, "Test", zuordnen), start: "2026-11-01" }, einstufung: { kraft: "2026-11-01", mobil: "2026-11-01" } }
}
const woche = (d: Daten, heute: string, montag = MO) => planWoche(d.profil!, d, montag, heute, plus, () => [])
const kurz = (l: Einheit[]) => l.map((e) => e.datum.slice(8) + " " + e.titel + (e.plan_nr !== undefined ? " #" + e.plan_nr : ""))
const fertig = (d: Daten, e: Einheit) => d.erledigt.push({ datum: e.datum, titel: e.titel, minuten: 40, saetze: 10, xp: 10, rekorde: [], art: "kraft", ...(e.plan_nr !== undefined ? { plan_nr: e.plan_nr } : {}), ...(e.schon ? { schon: e.schon } : {}) })

describe("Krank melden", () => {
  it("nur Erkältung: heute eine leichte Einheit ohne Plantag, danach Rückkehr, Brücke statt Test, dann der Test", () => {
    const d = daten()
    krankMelden(d, MO, [])
    expect(aktiveKrankheit(d, MO)?.art).toBe("hals")
    expect(kurz(woche(d, MO))).toEqual([
      "23 Leicht trotz Erkältung · FULL BODY 1",
      "24 Rückkehr 1 · FULL BODY 1 #1",
      "25 FULL BODY 2 #2",
      "26 Aufbau statt Test · SQUAT-TEST",
      "27 SQUAT-TEST #3",
    ])
    const leicht = woche(d, MO)[0]
    expect(leicht.plan_nr).toBeUndefined()
    // halbe Sätze, mindestens 3 im Tank
    expect(leicht.plaetze.map((p) => p.vorgabe.saetze)).toEqual([2, 2])
    expect(leicht.plaetze.every((p) => p.vorgabe.rir >= 3)).toBe(true)
  })

  it("mit Fieber: heute Pause, keine Einheit", () => {
    const d = daten()
    krankMelden(d, MO, ["fieber"])
    expect(aktiveKrankheit(d, MO)).toMatchObject({ art: "allgemein", fieber: true })
    expect(woche(d, MO).find((e) => e.datum === MO)).toBeUndefined()
  })

  it("Allgemeinsymptome bleiben, auch wenn später nur noch Schnupfen gemeldet wird", () => {
    const d = daten()
    krankMelden(d, MO, ["glieder"])
    krankMelden(d, plus(MO, 1), [])
    expect(aktiveKrankheit(d, plus(MO, 1))?.art).toBe("allgemein")
    expect(d.krankheiten!.length).toBe(1)
  })

  it("Verlauf, wieder fit und Versehen zurücknehmen", () => {
    const d = daten()
    krankMelden(d, MO, [])
    verlaufMelden(d, MO, "besser")
    expect(d.krankheiten![0].verlauf).toEqual({ [MO]: "besser" })
    krankZuruecknehmen(d, MO)
    expect(d.krankheiten).toEqual([])
    krankMelden(d, MO, [])
    wiederFit(d, plus(MO, 2))
    expect(aktiveKrankheit(d, plus(MO, 2))).toBeNull()
    expect(d.krankheiten![0].fit_ab).toBe(plus(MO, 2))
  })

  it("aus oder in der Reha: keine Krankheit, der Plan bleibt", () => {
    const aus = daten(false)
    krankMelden(aus, MO, ["fieber"])
    expect(aktiveKrankheit(aus, MO)).toBeNull()
    expect(kurz(woche(aus, MO))[0]).toBe("23 FULL BODY 1 #1")
    const reha = daten()
    reha.profil = { ...beispielReha("2026-10-26"), krankheit: true }
    expect(aktiveKrankheit(reha, MO)).toBeNull()
  })
})

describe("Rückkehr", () => {
  it("nach Fieber zwei Stufen: halbe Sätze und leichter, dann drei Viertel, dann normal", () => {
    const d = daten()
    krankMelden(d, plus(MO, -3), ["fieber"])
    wiederFit(d, MO)
    expect(rueckkehrStufen(d.krankheiten![0], MO).map((s) => s.anteil)).toEqual([0.5, 0.75])
    const l = woche(d, MO)
    expect(kurz(l).slice(0, 3)).toEqual(["23 Rückkehr 1 · FULL BODY 1 #1", "24 Rückkehr 2 · FULL BODY 2 #2", "25 Aufbau statt Test · SQUAT-TEST"])
    expect(l[0].plaetze.map((p) => p.vorgabe.saetze)).toEqual([2, 2])
    expect(l[1].plaetze.map((p) => p.vorgabe.saetze)).toEqual([3])
    // der Plantext („4 x 6“) passt nicht mehr und fällt weg, damit die Anzeige die neuen Sätze zeigt
    expect(l[0].plaetze.every((p) => p.plantext === undefined)).toBe(true)
  })

  it("am Sonntag „wieder fit“ gemeldet: der Montag ist schon die Rückkehr", () => {
    const d = daten()
    const so = plus(MO, -1)
    krankMelden(d, so, [])
    wiederFit(d, so)
    expect(d.krankheiten![0].fit_ab).toBe(MO)
    expect(kurz(woche(d, so))[0]).toBe("23 Rückkehr 1 · FULL BODY 1 #1")
  })

  it("gemachte Rückkehr-Einheiten zählen, nach einer Woche ist nichts mehr offen", () => {
    const d = daten()
    krankMelden(d, plus(MO, -3), ["fieber"])
    wiederFit(d, MO)
    fertig(d, woche(d, MO)[0])
    const n = nachKrankheit(d, plus(MO, 1))!
    expect(n.offen.map((s) => s.stufe)).toEqual([2])
    fertig(d, woche(d, plus(MO, 1)).find((e) => e.datum === plus(MO, 1))!)
    fertig(d, woche(d, plus(MO, 2)).find((e) => e.datum === plus(MO, 2))!)
    // Stufen gemacht, Brücke gemacht: nichts mehr offen, der Test kommt als Nächstes
    expect(nachKrankheit(d, plus(MO, 3))).toBeNull()
    expect(kurz(woche(d, plus(MO, 3))).find((t) => t.startsWith("26"))).toBe("26 SQUAT-TEST #3")
  })
})

describe("Auswertungen", () => {
  it("kranke Wochen und Schon-Einheiten sind erkennbar", () => {
    const d = daten()
    krankMelden(d, MO, [])
    wiederFit(d, plus(MO, 2))
    expect(wocheMitKrankheit(d, MO, plus(MO, 5))).toBe(true)
    expect(wocheMitKrankheit(d, plus(MO, 7), plus(MO, 10))).toBe(false)
    d.erledigt.push({ datum: plus(MO, 2), titel: "x", minuten: 1, saetze: 1, xp: 0, rekorde: [], schon: { art: "rueckkehr", stufe: 1, nr: 1 } })
    const schon = schonTage(d, plus(MO, 5))
    expect([MO, plus(MO, 1), plus(MO, 2), plus(MO, 3)].map(schon)).toEqual([true, true, true, false])
  })
})

describe("Krankheit in Rückblick und Journal", () => {
  it("eine Woche mit Krankheit zählt nicht in den Sätzeschnitt", () => {
    const d = daten()
    for (const mo of ["2026-11-02", "2026-11-09", "2026-11-16"]) d.protokoll.push({ datum: mo, uebung: "latzug", saetze: [{ last: 60, wdh: 10, rir: 2 }] })
    expect(rueckblick(d, "2026-11-16", "2026-11-23").wochenImSchnitt).toBe(3)
    d.krankheiten = [{ seit: "2026-11-10", art: "hals", fit_ab: "2026-11-12" }]
    expect(rueckblick(d, "2026-11-16", "2026-11-23").wochenImSchnitt).toBe(2)
  })

  it("das Wochenjournal fragt eine Woche mit Krankheit nicht ab", () => {
    const d = daten()
    d.profil!.wochenjournal = "2026-11-02"
    expect(journalFaellig(d, "2026-11-27")).toEqual({ woche: MO, nachtrag: false })
    d.krankheiten = [{ seit: "2026-11-24", art: "hals", fit_ab: "2026-11-26" }]
    expect(journalFaellig(d, "2026-11-27")).toBeNull()
  })
})

describe("Nachtragen beim Öffnen", () => {
  it("nachträglich eintragen: seit in der Vergangenheit, wieder fit ab heute, die Rückkehr beginnt heute", () => {
    const d = daten()
    const heute = MO
    krankMelden(d, heute, ["fieber"], plus(heute, -4))
    wiederFit(d, heute)
    expect(d.krankheiten![0]).toMatchObject({ seit: plus(heute, -4), fit_ab: heute, art: "allgemein", fieber: true })
    // vier Tage krank mit Fieber: zwei Stufen, heute die erste
    expect(kurz(woche(d, heute))[0]).toBe("23 Rückkehr 1 · FULL BODY 1 #1")
    // seit in der Zukunft wird auf heute begrenzt
    const z = daten()
    krankMelden(z, heute, [], plus(heute, 3))
    expect(z.krankheiten![0].seit).toBe(heute)
  })

  it("längere Pause ohne Krankheit wird erkannt, eingetragen nicht mehr", () => {
    const d = daten()
    // letztes Training Mittwoch 18.11., heute Montag 23.11.: Do und Fr fehlen
    d.erledigt.push({ datum: "2026-11-18", titel: "FULL BODY 3", minuten: 50, saetze: 12, xp: 10, rekorde: [], art: "kraft", plan_nr: 3 })
    expect(pauseOhneKrankheit(d, MO)).toEqual({ seit: "2026-11-19", letzte: "2026-11-18", tage: 2 })
    // nur ein fehlender Tag: keine Nachfrage
    expect(pauseOhneKrankheit(d, "2026-11-20")).toBeNull()
    krankMelden(d, MO, [], "2026-11-19")
    wiederFit(d, MO)
    expect(pauseOhneKrankheit(d, MO)).toBeNull()
  })

  it("auffällige Uhrtage in der Pause", () => {
    const tage: Record<string, { ruhepuls: number; hrv: number; schlaf_min: number }> = {}
    for (let k = 10; k >= 1; k--) tage[plus("2026-11-19", -k)] = { ruhepuls: 49, hrv: 55, schlaf_min: 420 }
    tage["2026-11-19"] = { ruhepuls: 50, hrv: 54, schlaf_min: 410 }
    tage["2026-11-20"] = { ruhepuls: 57, hrv: 36, schlaf_min: 223 }
    const a = auffaelligeTage(tage, "2026-11-19", "2026-11-22")
    expect(a.map((x) => x.datum)).toEqual(["2026-11-20"])
    expect(a[0].gruende.join(" ")).toContain("Ruhepuls 57")
  })

  it("eine Woche mit Krankheit bricht die Wochenserie nicht", () => {
    const d = daten()
    const woche3 = (mo: string) => [0, 1, 2, 3].forEach((k) => d.erledigt.push({ datum: plus(mo, k), titel: "T" + k, minuten: 50, saetze: 12, xp: 10, rekorde: [], art: "kraft" }))
    woche3("2026-11-02")
    woche3("2026-11-16")
    // Woche ab 9.11. ohne Training
    expect(serie(d.profil!, d.erledigt, "2026-11-23")).toBe(1)
    d.krankheiten = [{ seit: "2026-11-09", art: "allgemein", fit_ab: "2026-11-15" }]
    expect(serie(d.profil!, d.erledigt, "2026-11-23", (m) => wocheMitKrankheit(d, m, "2026-11-23"))).toBe(2)
  })
})
