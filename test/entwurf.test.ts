// Laufendes Training: Entwürfe je Einheit und Rückkehr ins Training nach einem Neustart der App.
import { describe, expect, test } from "vitest"
import { ENTWURF_ALT, entwurfLesen, entwurfLoeschen, entwurfSchreiben, hatFortschritt, offenMerken, offenWiederherstellen } from "../src/logik/entwurf"

const speicher = () => {
  const m = new Map<string, string>()
  return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v), removeItem: (k: string) => void m.delete(k), m }
}
const satz = (fertig: boolean) => ({ last: 60, wdh: 8, rir: 2, fertig })

describe("Entwurf des laufenden Trainings", () => {
  test("Eine andere Einheit zu öffnen überschreibt den Stand der ersten nicht", () => {
    const sp = speicher()
    entwurfSchreiben(sp, "2026-11-04|LEGS 1", { saetze: [[satz(true), satz(false)]] }, "2026-11-04")
    entwurfSchreiben(sp, "2026-11-05|PUSH 1", { saetze: [[satz(false)]] }, "2026-11-04")
    expect(hatFortschritt(entwurfLesen(sp, "2026-11-04|LEGS 1"))).toBe(true)
    entwurfLoeschen(sp, "2026-11-05|PUSH 1")
    expect(entwurfLesen(sp, "2026-11-05|PUSH 1")).toBeNull()
    expect(entwurfLesen(sp, "2026-11-04|LEGS 1")).not.toBeNull()
  })

  test("Der frühere einzelne Entwurf wird übernommen, alte Entwürfe fallen weg", () => {
    const sp = speicher()
    sp.setItem(ENTWURF_ALT, JSON.stringify({ schluessel: "2026-11-04|LEGS 1", saetze: [[satz(true)]] }))
    expect(hatFortschritt(entwurfLesen(sp, "2026-11-04|LEGS 1"))).toBe(true)
    entwurfSchreiben(sp, "2026-10-20|ALT", { saetze: [] }, "2026-10-20")
    entwurfSchreiben(sp, "2026-11-04|PUSH 1", { saetze: [] }, "2026-11-04")
    expect(entwurfLesen(sp, "2026-10-20|ALT")).toBeNull()
    expect(entwurfLesen(sp, "2026-11-04|LEGS 1")).not.toBeNull()
  })

  test("Nach einem Neustart geht es zurück ins Training, aber nur mit abgehakten Sätzen von heute", () => {
    const sp = speicher()
    const e = { datum: "2026-11-04", titel: "LEGS 1" }
    offenMerken(sp, e)
    expect(offenWiederherstellen(sp, "2026-11-04")).toBeNull()
    entwurfSchreiben(sp, "2026-11-04|LEGS 1", { saetze: [[satz(true), satz(false)]] }, "2026-11-04")
    expect(offenWiederherstellen(sp, "2026-11-04")).toEqual(e)
    expect(offenWiederherstellen(sp, "2026-11-05")).toBeNull()
    offenMerken(sp, null)
    expect(offenWiederherstellen(sp, "2026-11-04")).toBeNull()
  })
})
