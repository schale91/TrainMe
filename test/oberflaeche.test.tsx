import { renderToString } from "react-dom/server"
import Training from "../src/ui/Training"
import Heute from "../src/ui/Heute"
import JahresplanSeite from "../src/ui/Jahresplan"
import { jahresplanVorschlag } from "../src/logik/jahresplan"
import { wochenplan } from "../src/logik/plan"
import { leer, neuesProfil, studio, neuerOrt } from "../src/logik/speicher"
import Weg from "../src/ui/Weg"
import type { Profil, Ziel, Erfahrung, Trainingsart, Gelenk, Phase } from "../src/logik/typen"

/** Kleiner reproduzierbarer Zufall (mulberry32). */
function zufall(saat: number): () => number {
  let a = saat >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

it("rendert Startseite und jede Einheit für 300 zufällige Profile ohne Fehler und ohne leere Einheiten", () => {
  const r = zufall(7)
  const w = <T,>(l: T[]) => l[Math.floor(r() * l.length)]
  const fehler: string[] = []
  for (let n = 0; n < 300; n++) {
    const p: Profil = neuesProfil("2026-10-19")
    p.ziel = w<Ziel>(["muskelaufbau", "kraft", "fitness", "abnehmen", "sport"])
    p.erfahrung = w<Erfahrung>(["einsteiger", "fortgeschritten", "erfahren"])
    p.sport = w(["allgemein", "golf", "fussball", "laufen", "football", "bodybuilding", "reha"])
    if (p.sport === "reha") p.reha = { bilder: [{ id: w(["huefte_arthrose", "huefte_tep", "huefte_seitlich", "huefte_leiste", "knie_arthrose", "knie_tep", "ruecken"] as const), op_datum: w([undefined, "2026-10-01", "2026-08-01", "2025-01-01"]) }], boden: r() < 0.5, halt: r() < 0.5, freigabe: r() < 0.5, tep_grenzen: r() < 0.5, warnzeichen: r() < 0.7 ? "2026-10-19" : undefined }
    if (p.sport === "football") p.position = w(["qb", "rb", "wr", "te", "ol", "dl", "lb", "db", "k"])
    // Mehrfachauswahl: manchmal ein zweiter Sport, ein zweites Ziel und mehrere Positionen
    if (r() < 0.3) p.sporte = [p.sport, w(["golf", "football", "bodybuilding", "reha", "laufen"])].filter((x, i, l) => l.indexOf(x) === i)
    if (r() < 0.3) p.ziele = [p.ziel, w(["muskelaufbau", "kraft", "sport"] as const)].filter((x, i, l) => l.indexOf(x) === i)
    if (p.sporte?.includes("football")) p.positionen = [w(["qb", "rb", "wr", "te"]), w(["ol", "dl", "lb", "db", "k"])]
    if (p.sporte?.includes("reha") && !p.reha) p.reha = { bilder: [{ id: "huefte_arthrose" }], boden: false, halt: true, freigabe: true, tep_grenzen: false, warnzeichen: "2026-10-19" }
    p.saison = w(["vorbereitung", "wettkampf", "pause"])
    p.arten = (["kraft", "mobilitaet", "ausdauer"] as Trainingsart[]).filter(() => r() < 0.6)
    if (!p.arten.length) p.arten = ["kraft"]
    p.orte = r() < 0.5 ? [studio()] : [neuerOrt("Zuhause"), studio()]
    if (r() < 0.3) p.orte[0].deckenhoehe_cm = 200
    p.beschwerden = r() < 0.3 ? [{ gelenk: w<Gelenk>(["knie", "schulter", "ruecken", "huefte"]), grad: w(["schonen", "meiden"] as const) }] : []
    p.woche = p.woche.map(() => (r() < 0.55 ? { art: "training" as const, ort: Math.floor(r() * p.orte.length), minuten: w([20, 30, 45, 60, 90]), schwerpunkt: w(["automatisch", "kraft", "mobilitaet", "ausdauer"] as const) } : r() < 0.2 ? { art: "sporttermin" as const, termin: w(["spiel", "turnier", "mannschaftstraining"] as const) } : { art: "frei" as const }))
    // Jahresplan mit zufälligen Phasen, damit jede Phase vorkommt
    if (r() < 0.8) p.jahresplan = { ...jahresplanVorschlag(p, p.block_start), bloecke: Array.from({ length: 10 }, () => w<Phase>(["grundlage", "kraft", "schnellkraft", "erhalt", "uebergang"])) }
    const d = { ...leer(), profil: p }
    try {
      renderToString(<Heute daten={d} oeffnen={() => {}} einstufen={() => {}} zumWeg={() => {}} />)
      renderToString(<Weg daten={d} oeffnen={() => {}} einstufen={() => {}} zumJahresplan={() => {}} />)
      renderToString(<JahresplanSeite profil={p} heute="2026-10-21" aendern={() => {}} zurueck={{ text: "Profil", onClick: () => {} }} />)
      for (const e of wochenplan(p, d, "2026-10-19")) {
        if (!e.plaetze.length) fehler.push(n + ": leere Einheit " + e.titel + " " + JSON.stringify({ ziel: p.ziel, sport: p.sport, arten: p.arten }))
        renderToString(<Training daten={d} einheit={e} zurueck={() => {}} abschliessen={() => {}} ausschliessen={() => {}} />)
      }
    } catch (x) {
      fehler.push(n + ": " + (x as Error).message + " " + JSON.stringify({ ziel: p.ziel, sport: p.sport, arten: p.arten }) + "\n" + (x as Error).stack?.split("\n").slice(0, 5).join("\n"))
    }
  }
  expect(fehler.slice(0, 5)).toEqual([])
}, 60000)
