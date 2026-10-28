import { afterEach, describe, expect, it, vi } from "vitest"
import { dateiTeilen } from "../src/ui/teilen"

/** Web-Umgebung nachbauen: Zeigerart, Teilen-Menü und Download-Link */
function umgebung(o: { handy: boolean; teilen?: (d: ShareData) => Promise<void>; kannTeilen?: boolean }) {
  const klicks: string[] = []
  vi.stubGlobal("matchMedia", (q: string) => ({ matches: q === "(pointer: coarse)" && o.handy }))
  vi.stubGlobal("navigator", { canShare: o.kannTeilen === false ? undefined : () => true, share: o.teilen })
  vi.stubGlobal("document", {
    createElement: () => {
      const a = { download: "", href: "", click: () => klicks.push(a.download) }
      return a
    },
  })
  vi.stubGlobal("URL", { createObjectURL: () => "blob:x", revokeObjectURL: () => {} })
  return klicks
}

afterEach(() => vi.unstubAllGlobals())

describe("Sicherung teilen (Web)", () => {
  it("nutzt auf dem Handy das Teilen-Menü mit der Datei", async () => {
    const teilen = vi.fn(async () => {})
    const klicks = umgebung({ handy: true, teilen })
    expect(await dateiTeilen("s.json", "{}")).toBe(true)
    const datei = (teilen.mock.calls[0] as unknown as [ShareData])[0].files![0]
    expect(datei.name).toBe("s.json")
    expect(await datei.text()).toBe("{}")
    expect(klicks).toEqual([])
  })

  it("meldet ein geschlossenes Teilen-Menü als abgebrochen, ohne Download", async () => {
    const klicks = umgebung({ handy: true, teilen: async () => { throw Object.assign(new Error("weg"), { name: "AbortError" }) } })
    expect(await dateiTeilen("s.json", "{}")).toBe(false)
    expect(klicks).toEqual([])
  })

  it("lädt herunter, wenn Teilen scheitert, nicht geht oder am Computer", async () => {
    let klicks = umgebung({ handy: true, teilen: async () => { throw new Error("NotAllowedError") } })
    expect(await dateiTeilen("a.json", "{}")).toBe(true)
    expect(klicks).toEqual(["a.json"])
    vi.unstubAllGlobals()
    klicks = umgebung({ handy: true, kannTeilen: false })
    await dateiTeilen("b.json", "{}")
    expect(klicks).toEqual(["b.json"])
    vi.unstubAllGlobals()
    const teilen = vi.fn(async () => {})
    klicks = umgebung({ handy: false, teilen })
    await dateiTeilen("c.json", "{}")
    expect(klicks).toEqual(["c.json"])
    expect(teilen).not.toHaveBeenCalled()
  })
})
