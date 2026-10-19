// Übungsdatenbank: alle Dateien dieses Ordners, je Bereich eine Liste.
import type { Uebung } from "../../logik/typen"

const module = import.meta.glob<Record<string, unknown>>(["./*.ts", "!./index.ts"], { eager: true })

export const UEBUNGEN: Uebung[] = Object.keys(module)
  .sort()
  .flatMap((pfad) => Object.values(module[pfad]).filter(Array.isArray).flat() as Uebung[])

const NACH_ID = new Map(UEBUNGEN.map((u) => [u.id, u]))

export function uebung(id: string): Uebung | undefined {
  return NACH_ID.get(id)
}
