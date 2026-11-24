// App-Protokoll: Neustart-Erkennung, Gruppierung je Tag, Fehlertext und Übernahme der Einträge aus dem Android-Teil
import { describe, expect, it } from "vitest"
import { fehlerText, jeTag, nativeUebernehmen, neustartPruefen, type Eintrag } from "../src/logik/appProtokoll"

const T = Date.parse("2026-11-24T12:00:00")

describe("App-Protokoll", () => {
  it("erkennt einen unerwarteten Neustart im Hintergrund während einer Pause", () => {
    const n = neustartPruefen({ s: "a", z: T - 60_000, sichtbar: false, pause: T - 30_000 }, T)
    expect(n?.a).toBe("neustart_unerwartet")
    expect(n?.d).toEqual({ her_s: 60, sichtbar: false, pause_lief: true })
    expect(n?.t).toContain("Hintergrund")
  })
  it("kein Neustart nach sauberem Ende, ohne Herzschlag oder bei zu altem Herzschlag", () => {
    expect(neustartPruefen({ s: "a", z: T - 1000, sichtbar: true, pause: null, ende: true }, T)).toBeNull()
    expect(neustartPruefen(null, T)).toBeNull()
    expect(neustartPruefen({ s: "a", z: T - 2 * 86400_000, sichtbar: true, pause: null }, T)).toBeNull()
  })
  it("gruppiert je Tag", () => {
    const e = (z: number): Eintrag => ({ i: "x" + z, z, a: "start", t: "" })
    const g = jeTag([e(Date.parse("2026-11-23T23:59:00")), e(Date.parse("2026-11-24T00:01:00"))])
    expect(Object.keys(g).sort()).toEqual(["2026-11-23", "2026-11-24"])
  })
  it("kurzer Fehlertext mit Ort", () => {
    expect(fehlerText(new TypeError("x ist undefined"), "Pausentimer start")).toMatch(/^TypeError: x ist undefined · Pausentimer start/)
    expect(fehlerText("kaputt").length).toBeLessThanOrEqual(300)
  })
  it("übernimmt gültige Einträge aus dem Android-Teil, ohne Doppelte und sortiert", () => {
    const offen: Eintrag[] = [{ i: "abc", z: T, a: "start", t: "TrainMe gestartet" }]
    const nativ = [
      { i: "n1", z: T - 5000, a: "blase_verborgen", t: "Schwebende Uhr vom System verborgen", d: { rest_s: 80 } },
      { i: "abc", z: T, a: "start", t: "doppelt" },
      { i: "bad id!", z: T, a: "x", t: "" },
      { i: "n2", z: T + 1, a: "Großbuchstaben", t: "" },
      null,
    ]
    const r = nativeUebernehmen(offen, nativ)
    expect(r.map((e) => e.i)).toEqual(["n1", "abc"])
    expect(r[0].d).toEqual({ rest_s: 80 })
    expect(nativeUebernehmen(offen, undefined)).toBe(offen)
  })
})
