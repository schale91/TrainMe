// Einen Plantag vorab ansehen und anpassen: Tausch und Satzzahl gelten nur für diesen Tag
import { describe, expect, it } from "vitest"
import { einheitAusPlan, planAusText, tagAngepasst, tagAnpassen, tagZuruecksetzen } from "../src/logik/eigenerPlan"
import { zuordnen } from "../src/logik/kraftbuch"
import { leer, neuesProfil } from "../src/logik/speicher"
import type { Daten } from "../src/logik/typen"

function aufbau(): Daten {
  const profil = { ...neuesProfil("2026-11-02"), planart: "eigen" as const, folge: "fortlaufend" as const }
  const text = "Tag 1: PUSH\nBench Press 3 x 5 80 %\nLateral Raise 3 x 12-15\nTag 2: PUSH\nBench Press 3 x 5 80 %\nLateral Raise 3 x 12-15"
  return { ...leer(), profil, eigenerPlan: planAusText(text, "Test", zuordnen) }
}
const tag = (d: Daten, i: number) => einheitAusPlan(d.profil!, d, d.eigenerPlan!.tage[i], "2026-11-16", 0, () => []).plaetze.map((p) => p.uebung.id + ":" + p.vorgabe.saetze)

describe("Plantag vorab anpassen", () => {
  it("Tausch und Satzzahl gelten nur für den einen Tag", () => {
    const d = aufbau()
    expect(tag(d, 0)).toEqual(["bankdruecken_lh:3", "seitheben:3"])
    tagAnpassen(d, 1, { stelle: 0, tausch: "bankdruecken_kh" })
    tagAnpassen(d, 1, { stelle: 1, saetze: 5 })
    expect(tag(d, 0)).toEqual(["bankdruecken_kh:3", "seitheben:5"])
    // der andere Tag mit denselben Übungen bleibt, wie der Plan ihn vorgibt
    expect(tag(d, 1)).toEqual(["bankdruecken_lh:3", "seitheben:3"])
    expect(tagAngepasst(d, 1)).toBe(true)
    expect(tagAngepasst(d, 2)).toBe(false)
  })

  it("Getauschte Übung verliert die Prozentvorgabe der alten, eine neue Übung setzt die Satzzahl zurück", () => {
    const d = aufbau()
    tagAnpassen(d, 1, { stelle: 0, saetze: 5 })
    expect(tag(d, 0)[0]).toBe("bankdruecken_lh:5")
    tagAnpassen(d, 1, { stelle: 0, tausch: "bankdruecken_kh" })
    const e = einheitAusPlan(d.profil!, d, d.eigenerPlan!.tage[0], "2026-11-16", 0, () => [])
    expect(e.plaetze[0].uebung.id).toBe("bankdruecken_kh")
    expect(e.plaetze[0].vorgabe.saetze).toBe(3)
    // 80 % vom Bankdrück-Maximum mit der Langhantel gilt nicht für Kurzhanteln
    expect(e.plaetze[0].plantext || "").not.toMatch(/%/)
  })

  it("Der dauerhafte Ersatz gilt weiter, der Tausch für den Tag geht vor; Zurücknehmen stellt den Plan wieder her", () => {
    const d = aufbau()
    d.ersatz = { seitheben: "seitheben_sitzend" }
    expect(tag(d, 0)[1]).toBe("seitheben_sitzend:3")
    tagAnpassen(d, 1, { stelle: 1, tausch: "seitheben" })
    expect(tag(d, 0)[1]).toBe("seitheben:3")
    expect(tag(d, 1)[1]).toBe("seitheben_sitzend:3")
    tagZuruecksetzen(d, 1)
    expect(tag(d, 0)[1]).toBe("seitheben_sitzend:3")
    expect(d.tagplan).toEqual({})
    // unbekannte Übung im Tausch (z. B. aus einer neueren Version): der Plan bleibt, nichts stürzt ab
    d.tagplan = { "1": { tausch: { "0": "gibt_es_nicht" } } }
    expect(tag(d, 0)[0]).toBe("bankdruecken_lh:3")
  })
})
