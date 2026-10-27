// Steigerung: Blöcke mit Entlastungswoche, Ziel-RIR je Woche, Wiederholungsbereiche je Ziel und Rolle, und die
// Vorgabe für die nächste Einheit aus dem bisherigen Protokoll.
//
// Grundlagen (siehe docs/KONZEPT.md): RIR-Skala nach Zourdos et al. 2016, geschätztes Maximum nach Epley,
// Wochenvolumen nach Schoenfeld et al. 2017, Nähe zum Versagen eher für Muskelaufbau als für Kraft.

import { hatZiel } from "./auswahl"
import { abrunden, hoeher, niedriger } from "./gewichte"
import type { PlanProfil } from "./jahresplan"
import type { Phase, Profil, Ziel, Progressionsmodell, Protokoll, Rolle, Satz, Uebung, Vorgabe } from "./typen"

export const BLOCK_WOCHEN = 5 // 4 Aufbauwochen und eine Entlastungswoche

const TAG = 86400000

/** Woche im Block (0 bis 3 Aufbau, 4 Entlastung) für ein Datum JJJJ-MM-TT. */
export function blockWoche(profil: Profil, datum: string): number {
  const d = Math.floor((Date.parse(datum + "T12:00:00Z") - Date.parse(profil.block_start + "T12:00:00Z")) / (7 * TAG))
  return ((d % BLOCK_WOCHEN) + BLOCK_WOCHEN) % BLOCK_WOCHEN
}

export function istEntlastung(woche: number): boolean {
  return woche === BLOCK_WOCHEN - 1
}

/** Geschätztes Maximum (1RM) aus einem Satz nach Epley, mit den Wiederholungen im Tank. */
export function e1rm(s: Satz): number {
  // vermutlich vertippt und nicht bestätigt: zählt nicht
  if (!s.last || s.last <= 0 || s.wdh <= 0 || s.unplausibel) return 0
  return s.last * (1 + (s.wdh + Math.max(0, s.rir)) / 30)
}

/**
 * Belastbares Maximum aus den Sätzen einer Einheit: Mittel der beiden besten Schätzungen. Ein einzelner frischer Satz
 * überschätzt, was über mehrere Sätze mit kurzer Pause geht (z. B. 80 kg × 8, danach nur noch × 2); so zählt er nur
 * zur Hälfte. Mit nur einem Satz gilt dieser. Mit Topsatz gilt der Topsatz: Die Back-off-Sätze danach sind
 * absichtlich leichter und würden das Maximum sonst nach unten ziehen.
 */
export function belastbaresE1rm(saetze: Satz[]): number {
  const w = saetze
    .map(e1rm)
    .filter((x) => x > 0)
    .sort((a, b) => b - a)
  if (!w.length) return 0
  const mittel = w.length === 1 ? w[0] : (w[0] + w[1]) / 2
  const top = saetze.find((s) => s.art === "top")
  return top ? Math.max(e1rm(top), mittel) : mittel
}

/**
 * Obergrenze für das nächste Gewicht: höchstens 7,5 % über dem schwersten Gewicht, mit dem letztes Mal der
 * Wiederholungsbereich geschafft wurde (ACSM 2009 empfiehlt Steigerungen von 2 bis 10 %).
 */
export function steigerungsGrenze(saetze: Satz[], lo: number): number | null {
  const geschafft = saetze.filter((s) => s.last && s.wdh >= lo).map((s) => s.last as number)
  const alle = saetze.filter((s) => s.last).map((s) => s.last as number)
  const basis = geschafft.length ? Math.max(...geschafft) : alle.length ? Math.max(...alle) : 0
  return basis ? basis * 1.075 : null
}

/** Bestes geschätztes Maximum eines Protokolls. */
export function bestesE1rm(p: Protokoll): number {
  return Math.max(0, ...p.saetze.map(e1rm))
}

/** Reserve je Woche im Block, wenn ein Jahresplan die Phase vorgibt. */
const PHASEN_RIR: Record<Phase, number[]> = {
  grundlage: [3, 2, 2, 1],
  kraft: [3, 3, 2, 2],
  schnellkraft: [3, 3, 3, 2],
  erhalt: [3, 3, 3, 3],
  uebergang: [4, 4, 4, 4],
}

/** Ziel-RIR je Woche im Block. */
export function zielRir(profil: PlanProfil, rolle: Rolle, woche: number): number {
  if (istEntlastung(woche)) return 4
  if (rolle === "schnellkraft") return 4
  let reihe = [3, 2, 2, 2]
  // Mehrere Ziele: Hauptübungen richten sich nach Kraft oder Sport, die übrigen nach Muskelaufbau
  const aufbau = hatZiel(profil, "muskelaufbau") && (rolle !== "haupt" || !(hatZiel(profil, "kraft") || hatZiel(profil, "sport")))
  if (aufbau) reihe = [3, 2, 1, 1]
  else if (hatZiel(profil, "kraft") || hatZiel(profil, "sport")) reihe = [3, 3, 2, 2]
  if (profil.saison === "wettkampf") reihe = [3, 3, 3, 3]
  if (profil.phase) reihe = PHASEN_RIR[profil.phase]
  let r = reihe[Math.min(3, woche)]
  // Isolationsübungen dürfen beim Muskelaufbau näher ans Versagen
  if (rolle === "isolation" && (hatZiel(profil, "muskelaufbau") || profil.phase === "grundlage") && profil.phase !== "uebergang") r -= 1
  if (profil.erfahrung === "einsteiger") r = Math.max(2, r + 1)
  return Math.max(0, r)
}

/** Wiederholungsbereich je Ziel und Rolle. */
export function bereich(profil: PlanProfil, rolle: Rolle, u: Uebung): [number, number] {
  if (u.belastung === "zeit") return [20, 60]
  if (rolle === "schnellkraft") return u.muster === "schnellkraft_wurf" ? [5, 6] : [4, 5]
  if (u.belastung === "wiederholungen") return u.stufe >= 2 ? [5, 10] : [8, 15]
  const ph = profil.phase
  if (ph && (rolle === "haupt" || rolle === "neben")) {
    const einsteiger = profil.erfahrung === "einsteiger"
    if (ph === "uebergang") return [10, 15]
    if (ph === "grundlage") return [8, 12]
    if (rolle === "neben") return [6, 10]
    if (ph === "schnellkraft") return einsteiger ? [5, 6] : [3, 5]
    return einsteiger ? [6, 8] : [4, 6]
  }
  if (ph === "uebergang") return [12, 15]
  // Mehrere Ziele: das anspruchsvollste bestimmt die Hauptübungen (Kraft vor Sport vor Muskelaufbau)
  const hat = (z: Ziel) => hatZiel(profil, z)
  if (rolle === "haupt") {
    if (hat("kraft")) return [4, 6]
    if (hat("sport")) return profil.saison === "vorbereitung" ? [6, 8] : [4, 6]
    if (hat("muskelaufbau")) return [6, 10]
    return [8, 12]
  }
  if (rolle === "neben") return (hat("kraft") || hat("sport")) && !hat("muskelaufbau") ? [6, 10] : [8, 12]
  if (rolle === "praevention") return [8, 12]
  return [10, 15]
}

/** Pause zwischen den Sätzen in Sekunden. */
export function pause(profil: PlanProfil, rolle: Rolle): number {
  if (profil.phase === "uebergang" && rolle !== "mobil") return rolle === "haupt" || rolle === "neben" ? 90 : 60
  if (rolle === "haupt" && profil.phase === "grundlage") return 120
  if (rolle === "haupt" && profil.phase) return 180
  if (rolle === "haupt") return hatZiel(profil, "kraft") || hatZiel(profil, "sport") ? 180 : 150
  if (rolle === "neben") return 120
  if (rolle === "schnellkraft") return 90
  if (rolle === "mobil") return 15
  return 75
}

/** Welches Steigerungsmodell eine Übung bekommt. */
export function modellFuer(profil: Profil, rolle: Rolle, u: Uebung, einheitenBisher: number): Progressionsmodell {
  if (u.belastung === "zeit") return "zeit"
  if (rolle === "schnellkraft" || u.belastung === "distanz") return "qualitaet"
  if (u.belastung === "wiederholungen") return "doppelt"
  if (profil.erfahrung === "einsteiger" && einheitenBisher < 8) return "linear"
  if (rolle === "haupt" && profil.erfahrung !== "einsteiger" && (hatZiel(profil, "kraft") || hatZiel(profil, "sport") || profil.erfahrung === "erfahren")) return "rir"
  return "doppelt"
}

const kg = (x: number) => String(Math.round(x * 100) / 100).replace(".", ",")

/**
 * Vorgabe für die nächste Einheit. verlauf: bisherige Protokolle dieser Übung, älteste zuerst. lasten: verfügbare
 * Gewichte (leer: Körpergewicht, Zeit oder Strecke).
 */
export function vorgabe(profil: PlanProfil, rolle: Rolle, u: Uebung, saetze: number, verlauf: Protokoll[], lasten: number[], woche: number, max?: number): Vorgabe {
  const modell = modellFuer(profil, rolle, u, verlauf.length)
  const [lo, hi] = bereich(profil, rolle, u)
  const rir = zielRir(profil, rolle, woche)
  const entlastung = istEntlastung(woche)
  const letzte = verlauf.length ? verlauf[verlauf.length - 1] : null
  const vorletzte = verlauf.length > 1 ? verlauf[verlauf.length - 2] : null
  // ohne Zusatzgewicht reichen kürzere Pausen
  const p = u.belastung === "gewicht" ? pause(profil, rolle) : Math.min(90, pause(profil, rolle))
  const v: Vorgabe = { saetze, wdh_von: lo, wdh_bis: hi, rir, last: null, modell, pause_s: p, begruendung: "" }
  const gezaehlt = (p: Protokoll | null) => (p ? p.saetze.filter((s) => s.wdh > 0 || (s.sekunden || 0) > 0) : [])

  if (modell === "zeit") {
    const sek = gezaehlt(letzte).map((s) => s.sekunden || 0)
    const start = rolle === "mobil" ? 45 : 30
    const ziel = sek.length ? Math.min(rolle === "mobil" ? 60 : 90, Math.min(...sek) + 5) : start
    v.wdh_von = v.wdh_bis = 1
    v.last = entlastung ? Math.max(20, ziel - 10) : ziel
    v.begruendung = rolle === "mobil" ? "Je Seite halten, ruhig atmen, nicht in den Schmerz." : sek.length ? "Letztes Mal " + Math.min(...sek) + " s, jetzt 5 s mehr." : "Start mit " + ziel + " s."
    return v
  }

  if (modell === "qualitaet") {
    v.rir = 4
    if (u.belastung === "distanz") {
      v.wdh_von = v.wdh_bis = 1
      v.last = u.muster === "sprint" ? 25 : 20
      v.saetze = entlastung ? 3 : Math.min(8, saetze + 2)
      v.pause_s = 120
      v.begruendung = "Jeder Lauf mit voller Geschwindigkeit, volle Pause. Wird es langsamer, aufhören."
      return v
    }
    const leicht = letzte && gezaehlt(letzte).length && gezaehlt(letzte).every((s) => s.rir >= 5)
    if (lasten.length) {
      const alt = letzte && letzte.saetze[0] ? letzte.saetze[0].last : null
      v.last = alt === null ? lasten[0] : leicht ? hoeher(alt, lasten) : alt
    }
    v.begruendung = "Schnellkraft: jede Wiederholung so explosiv wie möglich, kein Satz bis zur Ermüdung." + (leicht ? " Fiel zuletzt leicht, deshalb schwerer." : "")
    if (entlastung) v.saetze = Math.max(2, Math.ceil(saetze / 2))
    return v
  }

  const saetzeLetzte = gezaehlt(letzte)
  if (!saetzeLetzte.length && max && lasten.length && u.belastung === "gewicht") {
    // Erstes Mal, aber das Maximum aus der Einstufung ist bekannt: Startgewicht daraus berechnen
    const wdh = Math.round((lo + hi) / 2)
    const ziel = max / (1 + (wdh + rir) / 30)
    v.last = abrunden(ziel * (entlastung ? 0.9 : 1), lasten)
    v.begruendung = "Aus deinem Maximum (" + kg(max) + " kg): etwa " + wdh + " Wiederholungen mit noch " + rir + " im Tank. Passt es nicht, korrigiert die App nach dem ersten Satz."
    if (entlastung) v.saetze = Math.max(1, Math.ceil(saetze / 2))
    return v
  }
  if (!saetzeLetzte.length) {
    v.last = null
    v.begruendung = lasten.length
      ? "Erstes Mal: wähle ein Gewicht, bei dem nach " + hi + " Wiederholungen noch etwa " + (rir + 1) + " gegangen wären."
      : "Erstes Mal: so sauber wie möglich, Ziel " + lo + " bis " + hi + " Wiederholungen."
    if (entlastung) v.saetze = Math.max(1, Math.ceil(saetze / 2))
    return v
  }

  const alleOben = saetzeLetzte.every((s) => s.wdh >= hi)
  const alleUnten = saetzeLetzte.every((s) => s.wdh >= lo)
  const minRir = Math.min(...saetzeLetzte.map((s) => s.rir))
  const zuSchwer = (p: Protokoll | null) => {
    const s = gezaehlt(p)
    return s.length > 0 && (s.some((x) => x.wdh < lo) || Math.min(...s.map((x) => x.rir)) < rir - 1)
  }
  const altLast = saetzeLetzte[0].last

  if (u.belastung === "wiederholungen" || !lasten.length || altLast === null) {
    // Körpergewicht: mehr Wiederholungen, dann die schwerere Variante
    v.last = null
    const bestWdh = Math.max(...saetzeLetzte.map((s) => s.wdh))
    v.begruendung = alleOben && u.schwerer ? "Ganz oben im Bereich: Zeit für die schwerere Variante." : alleOben ? "Alle Sätze am oberen Ende, ein Satz mehr wäre der nächste Schritt." : "Letztes Mal bis " + bestWdh + " Wiederholungen, heute eine mehr."
  } else if (modell === "linear") {
    v.wdh_von = v.wdh_bis = lo
    if (alleUnten && minRir >= rir) {
      v.last = hoeher(altLast, lasten)
      v.begruendung = "Alle Sätze geschafft: eine Stufe mehr (" + kg(v.last) + ")."
    } else if (zuSchwer(letzte) && zuSchwer(vorletzte)) {
      v.last = niedriger(altLast, lasten)
      v.begruendung = "Zweimal zu schwer: eine Stufe zurück und neu anlaufen."
    } else {
      v.last = altLast
      v.begruendung = "Gleiches Gewicht, Ziel: alle Sätze mit " + lo + " Wiederholungen."
    }
  } else if (modell === "doppelt") {
    if (alleOben && minRir >= rir) {
      v.last = hoeher(altLast, lasten)
      v.begruendung = v.last > altLast ? "Alle Sätze bei " + hi + " Wiederholungen: nächste Stufe, wieder ab " + lo + "." : "Oben angekommen, aber es gibt kein schwereres Gewicht: ein Satz mehr oder langsamer absenken."
    } else if (zuSchwer(letzte) && zuSchwer(vorletzte)) {
      v.last = niedriger(altLast, lasten)
      v.begruendung = "Zweimal unter dem Bereich: eine Stufe leichter."
    } else {
      v.last = altLast
      v.begruendung = "Gleiches Gewicht, eine Wiederholung mehr als letztes Mal anpeilen."
    }
  } else {
    // RIR-gesteuert: aus dem geschätzten Maximum das Gewicht für die Mitte des Bereichs beim Ziel-RIR
    const max = belastbaresE1rm(saetzeLetzte)
    const wdh = Math.round((lo + hi) / 2)
    const grenze = steigerungsGrenze(saetzeLetzte, lo)
    const roh = Math.min(max / (1 + (wdh + rir) / 30), grenze ?? Infinity)
    const gerundet = abrunden(roh, lasten)
    v.last = gerundet === null ? altLast : gerundet
    v.wdh_von = v.wdh_bis = wdh
    v.begruendung = "Geschätztes Maximum " + kg(max) + " kg: " + wdh + " Wiederholungen mit noch " + rir + " im Tank sind etwa " + Math.round((roh / max) * 100) + " % davon."
    if (topsatzPasst(profil, saetze, entlastung)) {
      v.topsatz = true
      v.begruendung += " Erster Satz als Topsatz, danach Back-off-Sätze mit etwa 10 % weniger, damit die Leistung nicht einbricht."
    }
  }

  if (entlastung && v.last !== null) {
    v.last = abrunden(v.last * 0.9, lasten) ?? v.last
    v.saetze = Math.max(1, Math.ceil(saetze / 2))
    v.begruendung = "Entlastungswoche: halbe Sätze, etwas leichter. Der Körper holt hier den Fortschritt ab."
  } else if (entlastung) {
    v.saetze = Math.max(1, Math.ceil(saetze / 2))
    v.begruendung = "Entlastungswoche: halbe Sätze, locker bleiben."
  }
  return v
}

/**
 * Topsatz mit Back-off-Sätzen als Standard: schwere Hauptübungen in den Phasen Kraft und Schnellkraft (ohne
 * Jahresplan beim Ziel Kraft), ab drei Sätzen und nicht in der Entlastungswoche (Helms et al. 2016).
 */
export function topsatzPasst(profil: PlanProfil, saetze: number, entlastung: boolean): boolean {
  if (entlastung || saetze < 3) return false
  if (profil.phase) return profil.phase === "kraft" || profil.phase === "schnellkraft"
  return hatZiel(profil, "kraft")
}

/**
 * Pause nach einem Satz: Fehlten Wiederholungen oder ging der Satz ans Limit, 30 Sekunden länger. Längere Pausen
 * halten die Wiederholungen in den Folgesätzen (de Salles et al. 2009, Willardson 2006). Höchstens 5 Minuten.
 */
export function pauseNachSatz(v: Vorgabe, satz: Satz, belastung: Uebung["belastung"]): { sekunden: number; grund?: string } {
  if (v.pause_s <= 0 || (belastung !== "gewicht" && belastung !== "wiederholungen")) return { sekunden: v.pause_s }
  const lang = (grund: string) => ({ sekunden: Math.min(300, v.pause_s + 30), grund })
  if (satz.wdh < v.wdh_von) return lang("30 s länger, weil Wiederholungen fehlten")
  if (satz.rir === 0 && v.rir > 0) return lang("30 s länger, weil der Satz bis ans Limit ging")
  return { sekunden: v.pause_s }
}

/** Hat die Übung in den letzten drei Einheiten kein neues Maximum gebracht? Dann Hinweis auf Plateau. */
export function plateau(verlauf: Protokoll[]): boolean {
  if (verlauf.length < 4) return false
  const besteVorher = Math.max(...verlauf.slice(0, -3).map(bestesE1rm))
  return besteVorher > 0 && verlauf.slice(-3).every((p) => bestesE1rm(p) <= besteVorher)
}

/** Ausdauer in Minuten: ruhig als ein Block, Intervalle als Wechsel aus 2 Minuten zügig und 2 Minuten locker. */
export function ausdauerVorgabe(u: Uebung, minuten: number, woche: number): Vorgabe {
  const entlastung = istEntlastung(woche)
  const netto = Math.max(15, minuten - 10)
  if (u.muster === "ausdauer_intervall") {
    const runden = Math.max(3, Math.min(8, Math.floor((netto - 10) / 4) + Math.min(2, woche)))
    return { saetze: entlastung ? 3 : runden, wdh_von: 1, wdh_bis: 1, rir: 2, last: 120, modell: "zeit", pause_s: 120, begruendung: "10 Minuten locker einlaufen, dann je 2 Minuten zügig (sprechen fällt schwer) und 2 Minuten locker." }
  }
  const min = entlastung ? Math.round(netto * 0.7) : netto
  return { saetze: 1, wdh_von: 1, wdh_bis: 1, rir: 4, last: min * 60, modell: "zeit", pause_s: 0, begruendung: "Ruhig: du kannst dabei noch ganze Sätze sprechen." }
}

export interface Anpassung {
  richtung: "hoch" | "runter" | "gleich"
  text: string
  last?: number | null
  wdh?: number
}

/**
 * Nach einem abgehakten Satz: passt das Gewicht, oder sollen die nächsten Sätze schwerer oder leichter werden?
 * Grundlage ist das geschätzte Maximum aus Gewicht, Wiederholungen und Reserve (Epley mit RIR).
 */
export function satzAnpassung(satz: Satz, v: Vorgabe, belastung: Uebung["belastung"], lasten: number[]): Anpassung | null {
  const lo = v.wdh_von
  const hi = v.wdh_bis
  const zuLeicht = satz.rir >= v.rir + 2 || satz.wdh > hi + 1
  // Schon eine Wiederholung weniger im Tank als geplant: bei kurzer Pause fallen die nächsten Sätze sonst stark ab
  const zuSchwer = satz.rir < v.rir || satz.wdh < lo
  if (belastung === "gewicht" && satz.last && lasten.length) {
    const max = e1rm(satz)
    const zielWdh = Math.round((lo + hi) / 2)
    const roh = max / (1 + (zielWdh + v.rir) / 30)
    let neu = abrunden(roh, lasten) ?? satz.last
    if (!zuLeicht && !zuSchwer) return { richtung: "gleich", text: "Passt genau: " + kg(satz.last) + " kg für die nächsten Sätze beibehalten.", last: satz.last }
    if (zuLeicht && neu <= satz.last) neu = hoeher(satz.last, lasten)
    if (zuSchwer && neu >= satz.last) neu = niedriger(satz.last, lasten)
    if (neu === satz.last) return { richtung: "gleich", text: "Kein passenderes Gewicht vorhanden: " + kg(satz.last) + " kg beibehalten.", last: satz.last }
    const grund = zuLeicht ? "leichter als geplant" : "schwerer als geplant"
    return {
      richtung: neu > satz.last ? "hoch" : "runter",
      text: "War " + grund + " (" + satz.wdh + " Wdh, " + (satz.rir >= 5 ? "5+" : satz.rir) + " im Tank, Maximum etwa " + kg(Math.round(max)) + " kg). Nächste Sätze: " + kg(neu) + " kg.",
      last: neu,
    }
  }
  if (belastung === "wiederholungen") {
    if (zuLeicht) return { richtung: "hoch", text: "Noch viel im Tank: nächster Satz " + (satz.wdh + 2) + " Wiederholungen oder langsamer absenken.", wdh: satz.wdh + 2 }
    if (zuSchwer) return { richtung: "runter", text: "Sehr knapp: nächster Satz " + Math.max(1, satz.wdh - 2) + " Wiederholungen, dafür sauber.", wdh: Math.max(1, satz.wdh - 2) }
    return { richtung: "gleich", text: "Passt: so weitermachen." }
  }
  return null
}
