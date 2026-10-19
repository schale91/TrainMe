// Jahresplan: jeder 5-Wochen-Block bekommt eine Phase. Die Phasen bauen aufeinander auf (Blockperiodisierung nach
// Issurin 2010): erst Grundlage mit mehr Wiederholungen, dann Maximalkraft, dann Schnellkraft kurz vor der Saison,
// in der Saison Kraft erhalten, danach ein lockerer Übergangsblock.

import type { Jahresplan, Phase, Profil, Saison } from "./typen"

const TAG = 86400000
export const BLOCK_TAGE = 35
/** Blöcke im Jahresplan: 10 × 5 Wochen, etwa ein Jahr */
export const BLOECKE_JAHR = 10

export interface PhasenInfo {
  name: string
  /** Worum es geht, ein Satz */
  ziel: string
  /** Was sich im Training ändert */
  training: string
  /** Warum die Phase an dieser Stelle steht */
  aufbau: string
  farbe: string
}

export const PHASEN: Record<Phase, PhasenInfo> = {
  grundlage: {
    name: "Grundlage",
    ziel: "Muskeln, Sehnen und Technik aufbauen.",
    training: "Mehr Wiederholungen (8 bis 12) und mehr Sätze, mittlere Gewichte.",
    aufbau: "Mehr Muskelmasse und saubere Technik sind die Basis, auf der später schwere Gewichte sicher gehen.",
    farbe: "#2aa58a",
  },
  kraft: {
    name: "Kraft",
    ziel: "Maximalkraft steigern.",
    training: "Schwere Hauptübungen mit 4 bis 6 Wiederholungen, längere Pausen.",
    aufbau: "Nutzt die in der Grundlage aufgebaute Muskulatur. Mehr Maximalkraft ist die Voraussetzung für mehr Schnellkraft.",
    farbe: "#4f68f0",
  },
  schnellkraft: {
    name: "Schnellkraft",
    ziel: "Kraft schnell machen, zum Beispiel für Schlägerkopfgeschwindigkeit.",
    training: "Wenige, schwere Wiederholungen (3 bis 5) mit viel Reserve, explosive Übungen bekommen mehr Sätze.",
    aufbau: "Setzt die Maximalkraft in Tempo um. Steht direkt vor der Saison, damit die Form dann da ist.",
    farbe: "#e7792f",
  },
  erhalt: {
    name: "Erhalt",
    ziel: "Kraft in der Saison halten, frisch bleiben für Runden und Spiele.",
    training: "Schwer, aber weniger Sätze und immer etwa 3 Wiederholungen im Tank.",
    aufbau: "Zwei kurze, schwere Einheiten pro Woche reichen, um die Kraft über die Saison zu halten.",
    farbe: "#c98a1e",
  },
  uebergang: {
    name: "Übergang",
    ziel: "Erholen nach der Saison, kleine Beschwerden ausheilen lassen.",
    training: "Leichte Gewichte, 10 bis 15 Wiederholungen, viel Reserve, höchstens 2 Sätze.",
    aufbau: "Kurze Pause vom schweren Training, danach beginnt eine neue Grundlage.",
    farbe: "#7d7a99",
  },
}

/** Übliche Saison je Sport als Monate (Golf in Deutschland etwa April bis Oktober). */
export const SAISON_VORSCHLAG: Record<string, { von: number; bis: number } | null> = {
  golf: { von: 4, bis: 10 },
  fussball: { von: 8, bis: 5 },
  laufen: { von: 4, bis: 10 },
  allgemein: null,
}

/** Reihenfolge ohne feste Saison, je Ziel, wird wiederholt. */
const REIHE: Record<string, Phase[]> = {
  sport: ["grundlage", "grundlage", "kraft", "kraft", "schnellkraft"],
  kraft: ["grundlage", "kraft", "kraft", "kraft", "schnellkraft"],
  muskelaufbau: ["grundlage", "grundlage", "kraft"],
  fitness: ["grundlage", "grundlage", "kraft"],
  abnehmen: ["grundlage", "grundlage", "kraft"],
}

export function plusTage(datum: string, n: number): string {
  return new Date(Date.parse(datum + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)
}

function tageZwischen(von: string, bis: string): number {
  return Math.round((Date.parse(bis + "T12:00:00Z") - Date.parse(von + "T12:00:00Z")) / TAG)
}

export function inSaison(monat: number, s: { von: number; bis: number }): boolean {
  return s.von <= s.bis ? monat >= s.von && monat <= s.bis : monat >= s.von || monat <= s.bis
}

/** Monat (1 bis 12) in der Mitte eines Blocks. */
function blockMonat(start: string, i: number): number {
  return Number(plusTage(start, i * BLOCK_TAGE + 17).slice(5, 7))
}

/** Phase eines Blocks nach der Regel: Saison bestimmt, was davor und danach kommt. */
export function phaseNachRegel(start: string, i: number, saison: Jahresplan["saison"], ziel: string): Phase {
  if (!saison) {
    const r = REIHE[ziel] || REIHE.fitness
    return r[((i % r.length) + r.length) % r.length]
  }
  if (inSaison(blockMonat(start, i), saison)) return "erhalt"
  // Der allererste Block beginnt nie mit Übergang: Wer gerade anfängt, braucht keine Erholung
  if (i > 0 && inSaison(blockMonat(start, i - 1), saison)) return "uebergang"
  let bis = 1
  while (bis < 12 && !inSaison(blockMonat(start, i + bis), saison)) bis++
  if (bis === 1) return "schnellkraft"
  if (bis <= 3) return "kraft"
  return "grundlage"
}

/** Vorschlag für ein Jahr ab einem Blockbeginn. */
export function jahresplanVorschlag(profil: Pick<Profil, "ziel" | "sport">, start: string, saison: Jahresplan["saison"] = SAISON_VORSCHLAG[profil.sport] ?? null): Jahresplan {
  const ziel = profil.sport !== "allgemein" && profil.ziel !== "muskelaufbau" ? "sport" : profil.ziel
  return { start, saison, bloecke: Array.from({ length: BLOECKE_JAHR }, (_, i) => phaseNachRegel(start, i, saison, ziel)) }
}

/** Nummer des Blocks im Jahresplan (0 = erster Block, über das Planende hinaus weiterzählend). */
export function blockIndex(plan: Jahresplan, datum: string): number {
  return Math.floor(tageZwischen(plan.start, datum) / BLOCK_TAGE)
}

/** Phase an einem Datum, oder null ohne Jahresplan. Nach dem Planende geht es nach der Regel weiter. */
export function phaseAm(profil: Profil, datum: string): Phase | null {
  const plan = profil.jahresplan
  if (!plan || !plan.bloecke.length) return null
  const i = blockIndex(plan, datum)
  if (i < 0) return plan.bloecke[0]
  if (i < plan.bloecke.length) return plan.bloecke[i]
  const ziel = profil.sport !== "allgemein" && profil.ziel !== "muskelaufbau" ? "sport" : profil.ziel
  return phaseNachRegel(plan.start, i, plan.saison, ziel)
}

/** Saison-Einstellung, die zu einer Phase passt (für ältere Teile der Planung). */
export function saisonVon(phase: Phase | null, sonst: Saison): Saison {
  if (!phase) return sonst
  return phase === "erhalt" ? "wettkampf" : phase === "uebergang" ? "pause" : "vorbereitung"
}

/** Profil mit der Phase des Datums, so wie die Planung es braucht. */
export type PlanProfil = Profil & { phase?: Phase | null }

export function mitPhase(profil: Profil, datum: string): PlanProfil {
  const phase = phaseAm(profil, datum)
  return phase ? { ...profil, phase, saison: saisonVon(phase, profil.saison) } : profil
}

/**
 * Neuer Block ab einem Montag (nach Urlaub oder Krankheit): Die laufende Phase beginnt von vorn, alle späteren Blöcke
 * rücken entsprechend nach hinten.
 */
export function blockNeuStarten(profil: Profil, montag: string): Profil {
  const plan = profil.jahresplan
  if (!plan) return { ...profil, block_start: montag }
  const i = Math.max(0, Math.min(blockIndex(plan, montag), plan.bloecke.length - 1))
  return { ...profil, block_start: montag, jahresplan: { ...plan, start: plusTage(montag, -i * BLOCK_TAGE) } }
}

/** Neu planen ab dem laufenden Block: Vergangenes fällt weg, ab jetzt gilt der Vorschlag. */
export function neuPlanen(profil: Profil, heute: string, saison: Jahresplan["saison"]): Jahresplan {
  const ab = Math.floor(tageZwischen(profil.block_start, heute) / BLOCK_TAGE)
  return jahresplanVorschlag(profil, plusTage(profil.block_start, Math.max(0, ab) * BLOCK_TAGE), saison)
}

export const MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
