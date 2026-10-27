import { FAMILIEN, FRUEHPHASE, BILDER, einordnen } from "../src/daten/reha"
import { uebung } from "../src/daten/uebungen/index"
import { jahresplanVorschlag } from "../src/logik/jahresplan"
import { passtAnOrt, wochenplan } from "../src/logik/plan"
import { auswahl, erlaubteStufen, familienFuer, rehaAnpassung, rehaSperre, stufeFuer } from "../src/logik/reha"
import { beispielReha, leer } from "../src/logik/speicher"
import type { Daten, Protokoll } from "../src/logik/typen"

const vater = () => {
  const p = beispielReha("2026-10-26")
  p.reha!.warnzeichen = "2026-10-26"
  p.jahresplan = jahresplanVorschlag(p, "2026-10-26")
  return p
}

describe("Reha", () => {
  it("jede Übung in Familien und Frühphase existiert", () => {
    for (const f of FAMILIEN) for (const s of f.stufen) expect(uebung(s.id), f.id + ": " + s.id).toBeTruthy()
    for (const id of FRUEHPHASE) expect(uebung(id), id).toBeTruthy()
    for (const b of BILDER) for (const f of b.familien) expect(FAMILIEN.some((x) => x.id === f), b.id + ": " + f).toBe(true)
  })

  it("Hüftarthrose zu Hause: drei Einheiten mit Kraft, Alltag, Gleichgewicht und Rumpf, zwei Mal Gehen, nichts am Boden", () => {
    const p = vater()
    const d: Daten = { ...leer(), profil: p, einstufung: { kraft: "2026-10-26", mobil: "2026-10-26" } }
    const plan = wochenplan(p, d, "2026-10-26")
    expect(plan.length).toBe(5)
    const kraft = plan.filter((e) => e.art === "kraft")
    expect(kraft.length).toBe(3)
    for (const e of kraft) {
      const etiketten = e.plaetze.map((x) => x.etikett)
      for (const k of ["Kraft", "Alltag", "Gleichgewicht", "Rumpf"]) expect(etiketten).toContain(k)
      expect(e.minuten).toBeLessThanOrEqual(40)
      for (const pl of e.plaetze) {
        expect(["glute_bridge", "glute_bridge_marsch", "bird_dog", "abduktion_seitlage", "tandemstand", "einbeinstand"]).not.toContain(pl.uebung.id)
        expect(pl.warum?.[0].art).toBe("reha")
      }
    }
    expect(plan.filter((e) => e.art === "ausdauer").every((e) => e.plaetze[0].uebung.id === "reha_gehen")).toBe(true)
    // Abwechslung zwischen den Einheiten
    expect(new Set(kraft.map((e) => e.plaetze.map((x) => x.uebung.id).join())).size).toBeGreaterThan(1)
  })

  it("Stufe steigt nach zweimal 15 Wiederholungen mit wenig Schmerz, sinkt bei Schmerz über 5", () => {
    const p = vater()
    const f = FAMILIEN.find((x) => x.id === "aufstehen")!
    const erlaubte = erlaubteStufen(f, p, p.orte[0], passtAnOrt)
    const satz = (wdh: number, schmerz: number) => ({ last: null, wdh, rir: 3, schmerz })
    const prot = (datum: string, wdh: number, schmerz: number): Protokoll => ({ datum, uebung: erlaubte[0].id, saetze: [satz(wdh, schmerz), satz(wdh, schmerz)] })
    expect(stufeFuer(erlaubte, [], "2026-11-01", 99, false).index).toBe(0)
    expect(stufeFuer(erlaubte, [prot("2026-10-27", 15, 1)], "2026-11-01", 99, false).index).toBe(0)
    expect(stufeFuer(erlaubte, [prot("2026-10-27", 15, 1), prot("2026-10-29", 15, 2)], "2026-11-01", 99, false).index).toBe(1)
    expect(stufeFuer(erlaubte, [prot("2026-10-27", 15, 1), prot("2026-10-29", 15, 4)], "2026-11-01", 99, false).index).toBe(0)
    // schlechter am Morgen danach: keine neue Stufe
    expect(stufeFuer(erlaubte, [prot("2026-10-27", 15, 1), prot("2026-10-29", 15, 2)], "2026-11-01", 99, true).index).toBe(0)
    const hoch: Protokoll = { datum: "2026-10-30", uebung: erlaubte[1].id, saetze: [satz(10, 7)] }
    expect(stufeFuer(erlaubte, [prot("2026-10-27", 15, 1), hoch], "2026-11-01", 99, false).index).toBe(0)
    // nach OP höchstens Stufe 2
    expect(stufeFuer(erlaubte, [{ ...hoch, uebung: erlaubte[2].id, saetze: [satz(10, 0)] }], "2026-11-01", 1, false).index).toBe(1)
  })

  it("Schmerz-Ampel nach dem Satz", () => {
    const v = { saetze: 2, wdh_von: 10, wdh_bis: 10, rir: 3, last: null, modell: "doppelt" as const, pause_s: 60, begruendung: "" }
    expect(rehaAnpassung({ last: null, wdh: 10, rir: 3, schmerz: 7 }, v, "wiederholungen")).toMatchObject({ richtung: "runter", wdh: 7 })
    expect(rehaAnpassung({ last: null, wdh: 10, rir: 3, schmerz: 4 }, v, "wiederholungen")?.richtung).toBe("gleich")
    expect(rehaAnpassung({ last: null, wdh: 10, rir: 3, schmerz: 1 }, v, "wiederholungen")).toMatchObject({ richtung: "hoch", wdh: 12 })
  })

  it("Frühphase nach Hüft-OP, Freigabe und Warnzeichen", () => {
    const p = vater()
    p.reha!.bilder = [{ id: "huefte_tep", seite: "rechts", op_datum: "2026-10-05" }]
    p.reha!.tep_grenzen = true
    expect(rehaSperre(p, "2026-10-26")).toBe("freigabe")
    p.reha!.freigabe = true
    expect(rehaSperre(p, "2026-10-26")).toBeNull()
    expect(rehaSperre({ ...p, reha: { ...p.reha!, warnzeichen: "2026-08-01" } }, "2026-10-26")).toBe("warnzeichen")
    const d: Daten = { ...leer(), profil: p }
    const frueh = wochenplan(p, d, "2026-10-26").filter((e) => e.art !== "ausdauer")
    expect(frueh[0].titel).toBe("Frühphase nach OP")
    expect(frueh[0].plaetze.every((x) => FRUEHPHASE.indexOf(x.uebung.id) >= 0)).toBe(true)
    // Woche 8: normale Familien, aber ohne Übungen über die Bewegungsgrenzen
    const spaeter = wochenplan(p, d, "2026-11-30").filter((e) => e.art === "kraft")
    expect(spaeter[0].titel).toContain("Gelenktraining")
    for (const e of spaeter) for (const pl of e.plaetze) expect(["reha_knie_zur_brust", "reha_ausfallschritt_halt"]).not.toContain(pl.uebung.id)
  })

  it("mehrere Beschwerdebilder werden gemischt, Auswahl deckt alle Kreise", () => {
    const fams = familienFuer(["huefte_seitlich", "knie_arthrose"])
    expect(fams.map((f) => f.id)).toContain("abspreizer_sanft")
    expect(fams.map((f) => f.id)).toContain("knie_strecker")
    expect(fams.map((f) => f.id)).not.toContain("abspreizer")
    const a = auswahl(fams, 5, 0)
    expect(new Set(a.map((f) => f.kreis)).size).toBeGreaterThanOrEqual(4)
  })

  it("Funktionstests einordnen", () => {
    expect(einordnen("reha_aufstehen_30s", 9, 72, "m")?.stufe).toBe("schwach")
    expect(einordnen("reha_aufstehen_30s", 14, 72, "m")?.stufe).toBe("mittel")
    expect(einordnen("reha_aufstehen_30s", 20, 72, "w")?.stufe).toBe("gut")
    expect(einordnen("reha_tug", 13)?.stufe).toBe("schwach")
    expect(einordnen("reha_einbeinstand", 3)?.stufe).toBe("schwach")
  })

  it("Jahresplan Reha: Einstieg, zweimal Aufbau, Festigen", () => {
    expect(jahresplanVorschlag(vater(), "2026-10-26").bloecke.slice(0, 5)).toEqual(["grundlage", "kraft", "kraft", "erhalt", "kraft"])
  })
})
