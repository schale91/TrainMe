// Mehrfachauswahl im Profil: mehrere Sportarten, Ziele und Positionen. Das erste Element bleibt in sport, ziel und
// position stehen, damit ältere Stände und einfache Abfragen weiter funktionieren.

import type { Profil, Ziel } from "./typen"

export function sporte(p: Pick<Profil, "sport" | "sporte">): string[] {
  return p.sporte && p.sporte.length ? p.sporte : [p.sport]
}

export function hatSport(p: Pick<Profil, "sport" | "sporte">, s: string): boolean {
  return sporte(p).indexOf(s) >= 0
}

/** Nur Reha gewählt (dann heißen die Phasen Einstieg, Aufbau, Festigen). */
export function nurReha(p: Pick<Profil, "sport" | "sporte">): boolean {
  const l = sporte(p)
  return l.length === 1 && l[0] === "reha"
}

export function ziele(p: Pick<Profil, "ziel" | "ziele">): Ziel[] {
  return p.ziele && p.ziele.length ? p.ziele : [p.ziel]
}

export function hatZiel(p: Pick<Profil, "ziel" | "ziele">, z: Ziel): boolean {
  return ziele(p).indexOf(z) >= 0
}

export function positionen(p: Pick<Profil, "position" | "positionen">): string[] {
  return p.positionen && p.positionen.length ? p.positionen : p.position ? [p.position] : []
}

/** Auswahl setzen: Liste speichern, das wichtigste Element (Reha zuletzt) als Hauptsport. */
export function mitSporten(p: Profil, liste: string[]): Profil {
  const l = liste.length ? liste : ["allgemein"]
  const ohneAllgemein = l.length > 1 ? l.filter((s) => s !== "allgemein") : l
  const haupt = ohneAllgemein.find((s) => s !== "reha") || ohneAllgemein[0]
  return { ...p, sport: haupt, sporte: ohneAllgemein }
}

export function mitZielen(p: Profil, liste: Ziel[]): Profil {
  const l = liste.length ? liste : [p.ziel]
  return { ...p, ziel: l[0], ziele: l }
}

export function mitPositionen(p: Profil, liste: string[]): Profil {
  return { ...p, position: liste[0], positionen: liste }
}

// ---------- Änderungen am Plan: ab jetzt, ab dem nächsten Block oder gar nicht ----------

/** Felder, die den Trainingsplan bestimmen. Name und Sicherheitsangaben gelten immer sofort. */
const PLAN_FELDER = ["sport", "sporte", "ziel", "ziele", "position", "positionen", "arten", "erfahrung", "saison"] as const

function rehaKern(p: Profil) {
  const r = p.reha
  return r ? { bilder: r.bilder, boden: r.boden, halt: r.halt, tep_grenzen: r.tep_grenzen } : null
}

/** Nur die planrelevanten Teile, für den Vergleich und zum Vormerken. */
export function planTeil(p: Profil): Partial<Profil> {
  const t: Partial<Profil> = {}
  for (const f of PLAN_FELDER) (t as Record<string, unknown>)[f] = p[f]
  if (p.reha) t.reha = p.reha
  return t
}

export function planGeaendert(alt: Profil, neu: Profil): boolean {
  return PLAN_FELDER.some((f) => JSON.stringify(alt[f] ?? null) !== JSON.stringify(neu[f] ?? null)) || JSON.stringify(rehaKern(alt)) !== JSON.stringify(rehaKern(neu))
}

/** Was sich geändert hat, für die Rückfrage. */
export function aenderungsText(alt: Profil, neu: Profil): string {
  const t: string[] = []
  if (JSON.stringify(sporte(alt)) !== JSON.stringify(sporte(neu))) t.push("Sport")
  if (JSON.stringify(ziele(alt)) !== JSON.stringify(ziele(neu))) t.push("Ziele")
  if (JSON.stringify(positionen(alt)) !== JSON.stringify(positionen(neu))) t.push("Position")
  if (JSON.stringify(alt.arten) !== JSON.stringify(neu.arten)) t.push("Trainingsarten")
  if (alt.erfahrung !== neu.erfahrung) t.push("Erfahrung")
  if (alt.saison !== neu.saison) t.push("Saisonphase")
  if (JSON.stringify(rehaKern(alt)) !== JSON.stringify(rehaKern(neu))) t.push("Reha-Angaben")
  return t.join(", ")
}

/** Erster Tag des nächsten Blocks. */
export function naechsterBlock(p: Profil, heute: string): string {
  const tage = Math.round((Date.parse(heute + "T12:00:00Z") - Date.parse(p.block_start + "T12:00:00Z")) / 86400000)
  const n = Math.floor(tage / 35) + 1
  return new Date(Date.parse(p.block_start + "T12:00:00Z") + n * 35 * 86400000).toISOString().slice(0, 10)
}

/** Sofort geltende Teile aus dem Entwurf übernehmen (Name, Freigabe, Warnzeichen, Angaben für die Tests). */
export function nebensachen(p: Profil, entwurf: Profil): Profil {
  const r = p.reha && entwurf.reha ? { ...p.reha, freigabe: entwurf.reha.freigabe, warnzeichen: entwurf.reha.warnzeichen, geburtsjahr: entwurf.reha.geburtsjahr, geschlecht: entwurf.reha.geschlecht } : p.reha
  return { ...p, name: entwurf.name, reha: r }
}
