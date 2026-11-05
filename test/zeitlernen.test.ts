// Lernen aus der gemessenen Trainingszeit: Tempo, Wechsel und Abschluss getrennt (echte Zeitstempel vom 05.11.2026)
import { describe, expect, test } from "vitest"
import type { Vorgabe } from "../src/logik/typen"
import { bloecke, gelerntAus, GELERNT_START, grosseVier, heuteFaktor, messen, restDauer } from "../src/logik/zeitplan"

const pl = (pause_s: number, gruppe?: string) => ({ vorgabe: { pause_s } as never as Vorgabe, ...(gruppe ? { gruppe } : {}) })
const sz = (...um: number[]) => um.map((u) => ({ fertig: true, um: u }))

// PUSH 1: Larsen (Hauptübung 180 s), Arnold, Schrägbank, Trizeps + Seitheben im Supersatz, Nacken (je 120 s, Supersatz 90 s)
const beginn = 1793851495260
const ende = beginn + 45.1 * 60000
const plaetze = [pl(180), pl(120), pl(120), pl(90, "A"), pl(90, "A"), pl(120)]
const saetze = [
  sz(1793851757850, 1793851945282, 1793852168897, 1793852445493),
  sz(1793852541133, 1793852722698, 1793852867132),
  sz(1793852946195, 1793853111819, 1793853292250),
  sz(1793853414415, 1793853559761, 1793853803065),
  sz(1793853420269, 1793853598683, 1793853809592),
  sz(1793853894416, 1793854046756, 1793854195969),
]
const warm = [3, 0, 0, 0, 0, 0]
const umbau = [2.1, 0.3, 0.3, 0.3, 0.3, 0.3]

describe("Trainingszeit lernen", () => {
  test("Messung einer echten Einheit: Tempo etwa wie geplant, Wechsel kürzer als geschätzt, sofort beendet", () => {
    const m = messen(plaetze, saetze, beginn, ende, warm, umbau)
    expect(m.tempo).toBeGreaterThan(0.8)
    expect(m.tempo).toBeLessThan(1.2)
    expect(m.wechsel).toBeGreaterThan(0.5)
    expect(m.wechsel).toBeLessThan(1)
    expect(m.abschluss_min).toBeLessThan(0.5)
  })

  test("Mit dem Gelernten passt die Schätzung der ganzen Einheit auf wenige Minuten", () => {
    const m = messen(plaetze, saetze, beginn, ende, warm, umbau)
    const l = gelerntAus({ erledigt: [{ ...m } as never] })
    const offen = saetze.map((s) => s.map(() => ({ fertig: false })))
    const schaetzung = restDauer(plaetze, offen, l, warm, umbau)
    expect(Math.abs(schaetzung - 45.1)).toBeLessThan(3)
    // ohne Gelerntes deutlich mehr, aber nicht mehr 73 min
    const vorher = restDauer(plaetze, offen, GELERNT_START, warm, umbau)
    expect(vorher).toBeLessThan(65)
  })

  test("Nachträglich abgehakte Sätze (Abstand unter 15 s) zählen nicht fürs Tempo", () => {
    const p = [pl(120)]
    const mitNachtrag = heuteFaktor(p, [sz(0, 160000, 320000, 480000, 483000)], 1)
    const ohne = heuteFaktor(p, [sz(0, 160000, 320000, 480000)], 1)
    expect(mitNachtrag).toBeCloseTo(ohne, 5)
  })

  test("Supersatz ist ein Block, nach dem letzten Satz keine Pause", () => {
    expect(bloecke([{}, { gruppe: "A" }, {}, { gruppe: "A" }])).toEqual([[0], [1, 3], [2]])
    const eins = restDauer([pl(120)], [[{ fertig: false }]], { tempo: 1, wechsel: 1, abschluss: 0 }, [0], [0])
    expect(eins).toBeCloseTo(1.5, 5)
    // begonnen: zwei offene Sätze je Pause und Arbeit
    const zwei = restDauer([pl(120)], [[{ fertig: true }, { fertig: false }, { fertig: false }]], { tempo: 1, wechsel: 1, abschluss: 0 }, [0], [0])
    expect(zwei).toBeCloseTo((2 * 160) / 60, 5)
  })

  test("Gelernt: Median der letzten sechs, sonst Startwerte", () => {
    expect(gelerntAus({ erledigt: [] })).toEqual(GELERNT_START)
    const l = gelerntAus({ erledigt: [{ tempo: 1.1, wechsel: 0.7, abschluss_min: 4 }, { tempo: 0.9, wechsel: 0.8, abschluss_min: 2 }, { tempo: 1 }] as never })
    expect(l.tempo).toBeCloseTo(1, 5)
    expect(l.wechsel).toBeCloseTo(0.75, 5)
    expect(l.abschluss).toBeCloseTo(3, 5)
  })

  test("Die vier großen Langhantelübungen", () => {
    expect(grosseVier({ id: "larsen_press", name: "Larsen Press", muster: "druecken_horizontal" }, "langhantel")).toBe("bank")
    expect(grosseVier({ id: "schraegbank_squeeze_press", name: "Squeeze Press", muster: "druecken_horizontal" }, "kurzhantel")).toBeNull()
    expect(grosseVier({ id: "pin_squat", name: "Pin Squat", muster: "kniebeuge" }, "langhantel")).toBe("kniebeuge")
    expect(grosseVier({ id: "rdl_lh", name: "Rumänisches Kreuzheben", muster: "hueftstreckung" }, "langhantel")).toBe("kreuzheben")
    expect(grosseVier({ id: "hip_thrust", name: "Hip Thrust", muster: "hueftstreckung" }, "langhantel")).toBeNull()
    expect(grosseVier({ id: "military_press", name: "Military Press", muster: "druecken_vertikal" }, "langhantel")).toBe("ueberkopf")
  })
})
