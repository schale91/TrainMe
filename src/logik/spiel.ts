// Spielerische Seite: Erfahrungspunkte, Stufen, Wochenserie und Abzeichen. Belohnt wird Regelmäßigkeit, nicht
// Quälerei: Entlastung und Mobilität zählen genauso.

import { e1rm, BLOCK_WOCHEN } from "./progression"
import { montagVon, plusTage } from "./plan"
import type { Daten, Einheit, Erledigt, Profil, Protokoll } from "./typen"

/** XP, die man für eine Stufe braucht (von Stufe n auf n+1). */
export function stufenXp(n: number): number {
  return Math.round(80 * Math.pow(n + 1, 1.35))
}

export function stufe(xp: number): { stufe: number; imLevel: number; noetig: number } {
  let n = 1
  let rest = xp
  while (rest >= stufenXp(n)) {
    rest -= stufenXp(n)
    n++
  }
  return { stufe: n, imLevel: rest, noetig: stufenXp(n) }
}

export const STUFEN_NAMEN = ["Neuling", "Anfänger", "Dranbleiber", "Stammgast", "Eisenfreund", "Routinier", "Kraftpaket", "Athlet", "Meister", "Legende"]

export function stufenName(n: number): string {
  return STUFEN_NAMEN[Math.min(STUFEN_NAMEN.length - 1, Math.floor((n - 1) / 3))]
}

/** Bestwert einer Übung in einem Protokoll: geschätztes Maximum, Wiederholungen oder Sekunden. */
export function bestwert(p: Protokoll): number {
  let best = 0
  for (const s of p.saetze) {
    const x = s.last ? e1rm(s) : s.sekunden ? s.sekunden : s.wdh
    if (x > best) best = x
  }
  return best
}

/** Neue Rekorde: Übungen, deren Bestwert heute über allem Bisherigen liegt (die erste Einheit zählt nicht). */
export function rekorde(heute: Protokoll[], vorher: Protokoll[]): string[] {
  const neu: string[] = []
  for (const p of heute) {
    const alt = vorher.filter((x) => x.uebung === p.uebung && x.datum < p.datum)
    if (!alt.length) continue
    const altBest = Math.max(...alt.map(bestwert))
    if (bestwert(p) > altBest + 1e-9) neu.push(p.uebung)
  }
  return neu
}

/** XP für eine erledigte Einheit. */
export function xpFuer(einheit: Einheit, saetze: number, rekordAnzahl: number, entlastung: boolean): number {
  let xp = 20 + 2 * saetze + 15 * rekordAnzahl
  if (einheit.art === "mobilitaet" || einheit.art === "regeneration") xp += 10
  if (entlastung) xp += 10
  return xp
}

/** Geplante Einheiten pro Woche laut Profil. */
export function geplantProWoche(profil: Profil): number {
  return profil.woche.filter((t) => t.art === "training").length
}

/** Wochenserie: wie viele Wochen hintereinander das Wochenziel erreicht wurde. Eine Einheit darf fehlen. */
export function serie(profil: Profil, erledigt: Erledigt[], heute: string): number {
  const ziel = Math.max(1, geplantProWoche(profil) - 1)
  const zaehle = (montag: string) => {
    const ende = plusTage(montag, 7)
    return new Set(erledigt.filter((e) => e.datum >= montag && e.datum < ende).map((e) => e.datum + e.titel)).size
  }
  let montag = montagVon(heute)
  let n = 0
  // die laufende Woche zählt mit, sobald sie geschafft ist, sonst bricht sie die Serie noch nicht
  if (zaehle(montag) >= ziel) n++
  montag = plusTage(montag, -7)
  for (let i = 0; i < 520; i++) {
    if (zaehle(montag) < ziel) break
    n++
    montag = plusTage(montag, -7)
  }
  return n
}

export interface Abzeichen {
  id: string
  name: string
  text: string
  symbol: string
}

export const ABZEICHEN: Abzeichen[] = [
  { id: "erste_einheit", name: "Losgelegt", text: "Die erste Einheit ist geschafft.", symbol: "rakete" },
  { id: "einheiten_10", name: "Zehner", text: "10 Einheiten erledigt.", symbol: "zahl:10" },
  { id: "einheiten_50", name: "Fünfzig", text: "50 Einheiten erledigt.", symbol: "zahl:50" },
  { id: "einheiten_100", name: "Hundert", text: "100 Einheiten erledigt.", symbol: "zahl:100" },
  { id: "rekord", name: "Neuer Bestwert", text: "Zum ersten Mal einen persönlichen Rekord aufgestellt.", symbol: "kurve" },
  { id: "rekorde_25", name: "Rekordjäger", text: "25 persönliche Rekorde.", symbol: "pokal" },
  { id: "serie_4", name: "Ein Monat dran", text: "4 Wochen hintereinander das Wochenziel erreicht.", symbol: "flamme" },
  { id: "serie_12", name: "Gewohnheit", text: "12 Wochen hintereinander das Wochenziel erreicht.", symbol: "blitz" },
  { id: "mobil_10", name: "Geschmeidig", text: "10 Mobilitäts- oder Regenerationseinheiten.", symbol: "dehnen" },
  { id: "entlastung", name: "Klug pausiert", text: "Eine Entlastungswoche durchgezogen statt übersprungen.", symbol: "bett" },
  { id: "block", name: "Block geschafft", text: "Einen ganzen Block mit " + BLOCK_WOCHEN + " Wochen trainiert.", symbol: "bausteine" },
  { id: "vielseitig", name: "Vielseitig", text: "Kraft, Mobilität und Ausdauer in einer Woche.", symbol: "ziel" },
]

export interface Ergebnis {
  xp: number
  rekorde: string[]
  neueAbzeichen: string[]
}

/** Trägt eine erledigte Einheit ein und vergibt XP und Abzeichen. Verändert daten. */
export function abschliessen(daten: Daten, einheit: Einheit, protokolle: Protokoll[], entlastung: boolean, blockWoche: number): Ergebnis {
  const profil = daten.profil as Profil
  const saetze = protokolle.reduce((s, p) => s + p.saetze.filter((x) => x.wdh > 0 || (x.sekunden || 0) > 0).length, 0)
  const neu = rekorde(protokolle, daten.protokoll)
  const xp = xpFuer(einheit, saetze, neu.length, entlastung)
  daten.protokoll.push(...protokolle)
  const eintrag: Erledigt = { datum: einheit.datum, titel: einheit.titel, minuten: einheit.minuten, saetze, xp, rekorde: neu, art: einheit.art, entlastung }
  if (einheit.plan_nr !== undefined) eintrag.plan_nr = einheit.plan_nr
  daten.erledigt.push(eintrag)
  daten.spiel.xp += xp

  const vorher = new Set(Object.keys(daten.spiel.abzeichen))
  const gib = (id: string, bedingung: boolean) => {
    if (bedingung && !daten.spiel.abzeichen[id]) daten.spiel.abzeichen[id] = einheit.datum
  }
  const n = daten.erledigt.length
  const alleRekorde = daten.erledigt.reduce((s, e) => s + e.rekorde.length, 0)
  const s = serie(profil, daten.erledigt, einheit.datum)
  const mobil = daten.erledigt.filter((e) => e.art === "mobilitaet" || e.art === "regeneration").length
  const montag = montagVon(einheit.datum)
  const dieseWoche = daten.erledigt.filter((e) => e.datum >= montag && e.datum < plusTage(montag, 7))
  const artenWoche = new Set(dieseWoche.map((e) => (e.art === "regeneration" ? "mobilitaet" : e.art)))
  gib("erste_einheit", n >= 1)
  gib("einheiten_10", n >= 10)
  gib("einheiten_50", n >= 50)
  gib("einheiten_100", n >= 100)
  gib("rekord", alleRekorde >= 1)
  gib("rekorde_25", alleRekorde >= 25)
  gib("serie_4", s >= 4)
  gib("serie_12", s >= 12)
  gib("mobil_10", mobil >= 10)
  gib("entlastung", entlastung && dieseWoche.filter((e) => e.entlastung).length >= Math.max(1, geplantProWoche(profil) - 1))
  gib("block", entlastung && blockWoche === BLOCK_WOCHEN - 1 && s >= BLOCK_WOCHEN)
  gib("vielseitig", artenWoche.has("kraft") && artenWoche.has("mobilitaet") && artenWoche.has("ausdauer"))
  const neueAbzeichen = Object.keys(daten.spiel.abzeichen).filter((id) => !vorher.has(id))
  return { xp, rekorde: neu, neueAbzeichen }
}
