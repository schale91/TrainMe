// Dropsatz mit Drop-Pins am Gewichtsstapel: Am Ende des Satzes an der Schnur ziehen, das Gewicht fällt um eine Stufe,
// ohne Pause weiter. Zwei Pins geben zwei Stufen.
//
// Studienlage: Dropsätze bauen etwa gleich viel Muskel und Kraft auf wie normale Sätze, brauchen aber deutlich weniger
// Zeit (Meta-Analysen Sødal et al. 2023, Sports Medicine – Open 9: 66; Coleman et al. 2022, Int J Strength Cond 2(1)).
// In den Studien ersetzte ein Dropsatz mit mehreren Stufen mehrere normale Sätze. Die Daten sind noch dünn (fünf bis
// sechs Studien), deshalb nur als Wahl und als Zeitsparer, nicht als Standard. Nicht für Hauptübungen: Bei schweren
// Grundübungen leidet die Technik, wenn ohne Pause bis zur Erschöpfung weitergemacht wird.

import { abrunden } from "./gewichte"
import { MASCHINEN, type Geraet, type Ort, type Rolle, type Satz, type Uebung } from "./typen"

/** Gewicht je Stufe: etwa 20 % leichter als die vorige (übliche Spanne 20 bis 30 %) */
export const DROP_ANTEIL = 0.8
/** Stufen mit zwei Drop-Pins */
export const DROP_STUFEN = 2

/**
 * Geht ein Dropsatz bei dieser Übung? Gewicht vom Stapel (Kabel, Latzug, Maschine), Drop-Pins am Ort, keine
 * Hauptübung.
 */
export function dropMoeglich(u: Pick<Uebung, "belastung">, geraet: Geraet | null, ort: Pick<Ort, "geraete">, rolle: Rolle): boolean {
  return u.belastung === "gewicht" && !!geraet && MASCHINEN.indexOf(geraet) >= 0 && ort.geraete.indexOf("drop_pins") >= 0 && rolle !== "haupt"
}

/**
 * Gewichte der Drop-Stufen zum Startgewicht: je etwa 20 % leichter, auf vorhandene Stufen abgerundet, immer echt
 * leichter als die Stufe davor. Weniger Stufen, wenn der Stapel nicht weiter nach unten reicht.
 */
export function dropStufen(last: number, lasten: number[], n = DROP_STUFEN): number[] {
  const aus: number[] = []
  let vor = last
  for (let k = 0; k < n; k++) {
    const ziel = vor * DROP_ANTEIL
    let neu = lasten.length ? abrunden(ziel, lasten) : Math.floor(ziel / 2.5) * 2.5
    // abrunden gibt die kleinste Stufe zurück, wenn keine kleiner ist: dann nicht echt leichter
    if (neu === null || neu >= vor || neu <= 0) break
    if (lasten.length && neu > ziel + 1e-9) break
    aus.push(neu)
    vor = neu
  }
  return aus
}

/** Wiederholungen je Drop-Stufe als Vorschlag: etwa die Hälfte der vorigen (mindestens 4) */
export const dropWdh = (wdh: number) => Math.max(4, Math.round(wdh / 2))

/** Satz zum Dropsatz machen (Stufen nach dem Gewicht des Satzes); ohne Gewicht oder ohne leichtere Stufe unverändert */
export function alsDropsatz<S extends Satz>(s: S, lasten: number[]): S {
  if (!s.last) return s
  const stufen = dropStufen(s.last, lasten)
  if (!stufen.length) return s
  let w = s.wdh
  return { ...s, drops: stufen.map((last) => ({ last, wdh: (w = dropWdh(w)) })) }
}

/** Wie viele Sätze ein Satz zählt: ein Dropsatz zählt je Stufe einen weiteren (wie in den Studien verglichen) */
export const satzZahl = (s: Pick<Satz, "drops">) => 1 + (s.drops?.length ?? 0)

/**
 * Bei knapper Zeit: Übungen, bei denen die letzten zwei offenen Sätze zu einem Dropsatz werden können. Spart je
 * Übung etwa eine Pause (zwei Sätze mit Pause werden ein Satz mit zwei kurzen Drops). ausgenommen: schon gefragt.
 */
export function dropVorschlag(
  plaetze: { uebung: Pick<Uebung, "belastung" | "name">; rolle: Rolle; gruppe?: string; vorgabe: { pause_s: number } }[],
  saetze: (Satz & { fertig: boolean })[][],
  geraet: (Geraet | null)[],
  ort: Pick<Ort, "geraete">,
  fehlt_min: number,
  ausgenommen: number[] = [],
): { plaetze: number[]; spart_min: number } {
  const aus: number[] = []
  let spart = 0
  for (let i = 0; i < plaetze.length && spart < fehlt_min; i++) {
    const p = plaetze[i]
    if (ausgenommen.indexOf(i) >= 0 || p.gruppe || !dropMoeglich(p.uebung, geraet[i], ort, p.rolle)) continue
    const offen = saetze[i].filter((s) => !s.fertig)
    if (offen.length < 2 || offen.some((s) => s.drops?.length) || !offen[offen.length - 1].last) continue
    aus.push(i)
    spart += p.vorgabe.pause_s / 60
  }
  return { plaetze: aus, spart_min: Math.round(spart) }
}

/** Die letzten zwei offenen Sätze zu einem Dropsatz zusammenlegen */
export function zweiZuEinem<S extends Satz & { fertig: boolean }>(ss: S[], lasten: number[]): S[] {
  const offen = ss.map((s, k) => (s.fertig ? -1 : k)).filter((k) => k >= 0)
  if (offen.length < 2) return ss
  const weg = offen[offen.length - 1]
  const bleibt = offen[offen.length - 2]
  return ss.filter((_, k) => k !== weg).map((s, k) => (k === bleibt ? alsDropsatz(s, lasten) : s))
}
