// Prüft eine einzelne Datei der Übungsdatenbank: DATEI=kniebeuge npx vitest run test/uebung_datei.test.ts
import { pruefeUebungen } from "../werkzeuge/pruefe-uebungen"

const datei = (globalThis as unknown as { process: { env: Record<string, string | undefined> } }).process.env.DATEI

describe.skipIf(!datei)("Übungsdatei " + datei, () => {
  it("ist vollständig und gültig", async () => {
    const modul = (await import(`../src/daten/uebungen/${datei}.ts`)) as Record<string, unknown>
    const listen = Object.values(modul).filter(Array.isArray) as unknown[][]
    expect(listen.length).toBe(1)
    const fehler = pruefeUebungen(listen[0] as never)
    if (fehler.length) console.log(fehler.slice(0, 80).join("\n"))
    expect(fehler).toEqual([])
    console.log(datei + ": " + listen[0].length + " Übungen geprüft")
  })
})
