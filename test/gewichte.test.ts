import { abrunden, hoeher, niedriger, verfuegbar, passendeGruppe } from "../src/logik/gewichte"
import { LEER } from "../src/logik/gewichte"
import { uebung } from "../src/daten/uebungen/index"

describe("Gewichte", () => {
  const g = { ...LEER, kurzhanteln: [5, 10, 12.5, 15], stange: 20, scheiben: [2.5, 5, 10], maschine_schritt: 7, maschine_max: 35 }

  it("Langhantel: Stange plus jede Auswahl der Scheibenpaare", () => {
    expect(verfuegbar("langhantel", g)).toEqual([20, 25, 30, 35, 40, 45, 50, 55])
  })

  it("Maschine in Schritten bis zum Maximum", () => {
    expect(verfuegbar("beinpresse", g)).toEqual([7, 14, 21, 28, 35])
  })

  it("rundet nur auf vorhandene Gewichte", () => {
    const kh = verfuegbar("kurzhantel", g)
    expect(abrunden(14, kh)).toBe(12.5)
    expect(abrunden(3, kh)).toBe(5)
    expect(hoeher(12.5, kh)).toBe(15)
    expect(hoeher(15, kh)).toBe(15)
    expect(niedriger(12.5, kh)).toBe(10)
  })

  it("wählt die Gerätegruppe, die vorhanden ist", () => {
    const u = uebung("goblet")!
    expect(passendeGruppe(u, ["kettlebell"])).toEqual({ gruppe: ["kettlebell"], last: "kettlebell" })
    expect(passendeGruppe(u, ["matte"])).toBeNull()
  })
})
