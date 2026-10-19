import { renderToString } from "react-dom/server"
import Training from "../src/ui/Training"
import Heute from "../src/ui/Heute"
import { wochenplan } from "../src/logik/plan"
import { leer, neuesProfil, studio, neuerOrt } from "../src/logik/speicher"
import { zufall } from "../src/logik/abenteuer"
import type { Profil, Ziel, Erfahrung, Trainingsart, Gelenk } from "../src/logik/typen"

it("rendert Startseite und jede Einheit für 300 zufällige Profile ohne Fehler und ohne leere Einheiten", () => {
  const r = zufall(7)
  const w = <T,>(l: T[]) => l[Math.floor(r() * l.length)]
  const fehler: string[] = []
  for (let n = 0; n < 300; n++) {
    const p: Profil = neuesProfil("2026-10-19")
    p.ziel = w<Ziel>(["muskelaufbau", "kraft", "fitness", "abnehmen", "sport"])
    p.erfahrung = w<Erfahrung>(["einsteiger", "fortgeschritten", "erfahren"])
    p.sport = w(["allgemein", "golf", "fussball", "laufen"])
    p.saison = w(["vorbereitung", "wettkampf", "pause"])
    p.arten = (["kraft", "mobilitaet", "ausdauer"] as Trainingsart[]).filter(() => r() < 0.6)
    if (!p.arten.length) p.arten = ["kraft"]
    p.orte = r() < 0.5 ? [studio()] : [neuerOrt("Zuhause"), studio()]
    if (r() < 0.3) p.orte[0].deckenhoehe_cm = 200
    p.beschwerden = r() < 0.3 ? [{ gelenk: w<Gelenk>(["knie", "schulter", "ruecken", "huefte"]), grad: w(["schonen", "meiden"] as const) }] : []
    p.woche = p.woche.map(() => (r() < 0.55 ? { art: "training" as const, ort: Math.floor(r() * p.orte.length), minuten: w([20, 30, 45, 60, 90]), schwerpunkt: w(["automatisch", "kraft", "mobilitaet", "ausdauer"] as const) } : r() < 0.2 ? { art: "sporttermin" as const, termin: w(["spiel", "turnier", "mannschaftstraining"] as const) } : { art: "frei" as const }))
    const d = { ...leer(), profil: p }
    try {
      renderToString(<Heute daten={d} oeffnen={() => {}} zumAbenteuer={() => {}} />)
      for (const e of wochenplan(p, d, "2026-10-19")) {
        if (!e.plaetze.length) fehler.push(n + ": leere Einheit " + e.titel)
        renderToString(<Training daten={d} einheit={e} zurueck={() => {}} abschliessen={() => {}} ausschliessen={() => {}} />)
      }
    } catch (x) {
      fehler.push(n + ": " + (x as Error).message + " " + JSON.stringify({ ziel: p.ziel, sport: p.sport, arten: p.arten }) + "\n" + (x as Error).stack?.split("\n").slice(0, 5).join("\n"))
    }
  }
  expect(fehler.slice(0, 5)).toEqual([])
}, 60000)
