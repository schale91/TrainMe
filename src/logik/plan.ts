// Wochenplanung: welche Einheit an welchem Tag, welche Übung jeden Platz füllt und wie viele Sätze in die Zeit passen.
// Alles ist deterministisch: gleiche Einstellungen und gleiches Protokoll ergeben den gleichen Plan.

import { AUFTEILUNG, ERSATZ, VORLAGEN, type PlatzVorlage } from "../daten/vorlagen"
import { UEBUNGEN, uebung } from "../daten/uebungen/index"
import { passendeGruppe, verfuegbar } from "./gewichte"
import { BLOCK_WOCHEN, ausdauerVorgabe, blockWoche, istEntlastung, plateau, vorgabe } from "./progression"
import { bewerte, testNach } from "../daten/tests"
import { PHASEN, mitPhase, type PlanProfil } from "./jahresplan"
import type { Daten, Einheit, Geraet, Grund, Messung, Muster, Ort, Platz, Profil, Protokoll, Rolle, Trainingsart, Uebung } from "./typen"

const TAG = 86400000
export const AUFWAERMEN_MIN = 8

const BEIN_MUSTER: Muster[] = ["kniebeuge", "hueftstreckung", "einbeinig", "schnellkraft_sprung", "sprint", "hamstring_praevention", "adduktoren"]

/** Datum plus n Tage. */
export function plusTage(datum: string, n: number): string {
  return new Date(Date.parse(datum + "T12:00:00Z") + n * TAG).toISOString().slice(0, 10)
}

/** Wochentag 0 = Montag bis 6 = Sonntag. */
export function wochentag(datum: string): number {
  return (new Date(datum + "T12:00:00Z").getUTCDay() + 6) % 7
}

export function montagVon(datum: string): string {
  return plusTage(datum, -wochentag(datum))
}

/** Lokales Datum JJJJ-MM-TT. */
export function heute(d = new Date()): string {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")
}

type Tagesplan = { tag: number; art: Trainingsart | "regeneration"; vorlage: string; einschraenkung: 0 | 1 | 2; hinweis?: string }

const istWettkampf = (t?: string) => t === "spiel" || t === "turnier"

/** Was an welchem Wochentag trainiert wird (ohne Übungsauswahl). */
export function wochenaufteilung(profil: Profil): Tagesplan[] {
  const w = profil.woche
  const arten = profil.arten.length ? profil.arten : (["kraft"] as Trainingsart[])
  const tage: Tagesplan[] = []
  // Einschränkung: 2 = Tag vor Spiel oder Turnier, 1 = zwei Tage davor (keine schweren Beine)
  const einschraenkung = (i: number): 0 | 1 | 2 => (istWettkampf(w[(i + 1) % 7]?.termin) ? 2 : istWettkampf(w[(i + 2) % 7]?.termin) ? 1 : 0)
  const nachSpiel = (i: number) => istWettkampf(w[(i + 6) % 7]?.termin)

  const kraftTage: number[] = []
  for (let i = 0; i < 7; i++) {
    const t = w[i]
    if (!t || t.art !== "training") continue
    let art: Trainingsart
    const sp = t.schwerpunkt || "automatisch"
    if (sp === "kraft" || sp === "mobilitaet" || sp === "ausdauer") art = sp === "mobilitaet" ? "mobilitaet" : sp
    else art = arten.indexOf("kraft") >= 0 ? "kraft" : arten[0]
    if (nachSpiel(i)) {
      tage.push({ tag: i, art: "regeneration", vorlage: "mobil", einschraenkung: 0, hinweis: "Tag nach dem Spiel: Regeneration statt Krafttraining." })
      continue
    }
    if (art === "kraft") kraftTage.push(i)
    else if (art === "mobilitaet") tage.push({ tag: i, art, vorlage: "mobil", einschraenkung: 0 })
    else {
      const intervall = einschraenkung(i) === 0 && tage.filter((x) => x.vorlage === "ausdauer_intervall").length === 0 && (t.minuten || 45) >= 30
      tage.push({ tag: i, art, vorlage: intervall ? "ausdauer_intervall" : "ausdauer_ruhig", einschraenkung: einschraenkung(i) })
    }
  }

  if (kraftTage.length) {
    const sport = AUFTEILUNG[profil.sport] ? profil.sport : "allgemein"
    const vorlagen = AUFTEILUNG[sport][Math.min(6, kraftTage.length)].slice()
    while (vorlagen.length < kraftTage.length) vorlagen.push(AUFTEILUNG.allgemein[3][vorlagen.length % 3])
    const beinlast = (id: string) => VORLAGEN[id].plaetze.filter((p) => BEIN_MUSTER.indexOf(p.muster) >= 0 && (p.rolle === "haupt" || p.rolle === "schnellkraft")).length
    // Eingeschränkte Tage bekommen die Vorlagen mit der wenigsten Beinarbeit, die anderen behalten die Reihenfolge
    const eng = kraftTage.filter((i) => einschraenkung(i) > 0).sort((a, b) => einschraenkung(b) - einschraenkung(a))
    const frei = vorlagen.slice()
    const zuteilung: Record<number, string> = {}
    for (const i of eng) {
      let best = 0
      for (let k = 1; k < frei.length; k++) if (beinlast(frei[k]) < beinlast(frei[best])) best = k
      zuteilung[i] = frei.splice(best, 1)[0]
    }
    for (const i of kraftTage) if (!zuteilung[i]) zuteilung[i] = frei.shift() as string
    for (const i of kraftTage) {
      const e = einschraenkung(i)
      tage.push({ tag: i, art: "kraft", vorlage: zuteilung[i], einschraenkung: e, hinweis: e === 2 ? "Morgen ist Wettkampf: keine schweren Beine, alles etwas lockerer." : e === 1 ? "Übermorgen ist Wettkampf: keine schweren Beinübungen." : undefined })
    }
  }
  return tage.sort((a, b) => a.tag - b.tag)
}

/** Darf die Übung bei den Beschwerden und Ausnahmen gemacht werden? */
export function erlaubt(profil: Profil, u: Uebung): boolean {
  if (profil.ausgeschlossen.indexOf(u.id) >= 0) return false
  for (const b of profil.beschwerden) {
    const last = u.gelenke[b.gelenk]
    if (!last) continue
    if (b.grad === "meiden" || last >= 2) return false
  }
  if (profil.erfahrung === "einsteiger" && u.stufe >= 3) return false
  return true
}

/** Passt die Übung an den Ort (Geräte und Raumhöhe)? */
export function passtAnOrt(u: Uebung, ort: Ort): boolean {
  if (u.hoehe_cm > ort.deckenhoehe_cm && u.geraete.every((g) => g.indexOf("draussen") < 0)) return false
  // Nach draußen kann man von überall: Gehen, Laufen und Sprints gehen auch ohne eingetragenen Platz
  return passendeGruppe(u, ort.geraete.indexOf("draussen") >= 0 ? ort.geraete : [...ort.geraete, "draussen"]) !== null
}

function verlaufVon(protokoll: Protokoll[], id: string, vor: string): Protokoll[] {
  return protokoll.filter((p) => p.uebung === id && p.datum < vor).sort((a, b) => (a.datum < b.datum ? -1 : 1))
}

/** Hat jemand bei dieser Körpergewichtsübung den Bereich ausgereizt und darf auf die schwerere Variante? */
function aufgestiegen(u: Uebung, protokoll: Protokoll[], vor: string): boolean {
  const v = verlaufVon(protokoll, u.id, vor)
  if (!v.length) return false
  const s = v[v.length - 1].saetze.filter((x) => x.wdh > 0)
  return s.length >= 2 && s.every((x) => x.wdh >= 15)
}

/** Gleichmäßig verteilte Zahl 0 bis 1 aus einem Text. */
function streuung(text: string): number {
  let h = 2166136261
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619)
  return ((h >>> 0) % 1000) / 1000
}

function blockNummer(profil: Profil, datum: string): number {
  return Math.floor((Date.parse(datum + "T12:00:00Z") - Date.parse(profil.block_start + "T12:00:00Z")) / (7 * TAG * BLOCK_WOCHEN))
}

/** Schwache Bereiche aus den letzten Beweglichkeitstests, wichtigste zuerst. */
export function schwachstellen(daten: Daten): Muster[] {
  const letzte = new Map<string, Messung>()
  for (const m of daten.messungen || []) {
    const alt = letzte.get(m.test)
    if (!alt || alt.datum <= m.datum) letzte.set(m.test, m)
  }
  const punkte = new Map<Muster, number>()
  for (const m of letzte.values()) {
    const t = testNach(m.test)
    if (!t) continue
    const werte = [m.wert, ...(m.rechts !== undefined ? [m.rechts] : [])]
    const b = werte.map((w) => bewerte(t, w))
    const gewicht = b.includes("schwach") ? 2 : b.includes("mittel") ? 1 : 0
    if (!gewicht) continue
    for (const mu of t.muster) if (mu.startsWith("mobilitaet_") || mu === "balance") punkte.set(mu, (punkte.get(mu) || 0) + gewicht)
  }
  return Array.from(punkte.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([m]) => m)
}

/** Beste Übung für einen Platz. benutzt: in dieser Woche schon gewählt (für Abwechslung). */
export function waehle(profil: Profil, ort: Ort, rolle: Rolle, muster: Muster, benutzt: Set<string>, schonBeiHeute: Set<string>, protokoll: Protokoll[], datum: string): Uebung | null {
  const kandidaten = UEBUNGEN.filter((u) => u.muster === muster && erlaubt(profil, u) && passtAnOrt(u, ort) && !schonBeiHeute.has(u.id))
  if (!kandidaten.length) return null
  const geraet = (u: Uebung) => passendeGruppe(u, ort.geraete)
  const punkte = (u: Uebung) => {
    let p = 0
    // Hauptübungen: die Grundübung zählt mehr als der Sportbezug
    if (u.sport && u.sport.indexOf(profil.sport) >= 0) p += rolle === "haupt" ? 1 : 3
    if (profil.sport === "golf" && u.golf) p += rolle === "haupt" ? u.golf * 0.5 : u.golf * 1.5
    // Abwechslung je Block: innerhalb eines Blocks bleiben die Übungen gleich, damit Fortschritt messbar ist
    p += streuung(u.id + "|" + blockNummer(profil, datum)) * 1.5
    const g = geraet(u)
    const lastbar = u.belastung === "gewicht" && g && g.last && verfuegbar(g.last, ort.gewichte).length > 0
    if (lastbar && (rolle === "haupt" || rolle === "neben")) p += 3
    else if (lastbar) p += 1
    if (u.belastung === "gewicht" && !lastbar && rolle !== "schnellkraft") p -= 4
    if (rolle === "haupt" && profil.erfahrung !== "einsteiger" && u.stufe >= 2) p += 1
    if (profil.erfahrung === "einsteiger" && u.stufe === 1) p += 1
    // Schonen: lieber gar keine Belastung auf dem Gelenk
    for (const b of profil.beschwerden) if (u.gelenke[b.gelenk]) p -= 2
    if (benutzt.has(u.id)) p -= 4
    // Körpergewicht: wer die leichte Variante ausgereizt hat, bekommt die schwerere
    if (u.schwerer && aufgestiegen(u, protokoll, datum)) p -= 5
    if (verlaufVon(protokoll, u.id, datum).length) p += 1
    return p
  }
  let best = kandidaten[0]
  let bestP = punkte(best)
  for (const u of kandidaten.slice(1)) {
    const p = punkte(u)
    if (p > bestP) {
      best = u
      bestP = p
    }
  }
  return best
}

/** Warum die gewählte Übung auf dem Platz steht, in der Reihenfolge, in der die Planung entscheidet. */
export function warum(profil: PlanProfil, ort: Ort, einheit: string, rolle: Rolle, vorlage: Muster, muster: Muster, u: Uebung, protokoll: Protokoll[], datum: string, schwach: Muster[]): Grund[] {
  const g: Grund[] = [{ art: "platz", einheit, rolle, muster }]
  if (muster !== vorlage) g.push({ art: "ersatz", statt: vorlage })
  if (rolle === "mobil" && schwach.indexOf(muster) >= 0) g.push({ art: "schwachstelle", muster })
  if (profil.sport === "golf" && u.golf) g.push({ art: "golf", stufe: u.golf })
  else if (profil.sport !== "allgemein" && u.sport && u.sport.indexOf(profil.sport) >= 0) g.push({ art: "sport", sport: profil.sport })
  const gr = passendeGruppe(u, ort.geraete)
  if (u.belastung === "gewicht" && gr && gr.last && verfuegbar(gr.last, ort.gewichte).length) g.push({ art: "geraet", geraet: gr.last })
  if ((profil.erfahrung === "einsteiger" && u.stufe === 1) || (rolle === "haupt" && profil.erfahrung !== "einsteiger" && u.stufe >= 2)) g.push({ art: "stufe", stufe: u.stufe, erfahrung: profil.erfahrung })
  const geschont = profil.beschwerden.filter((b) => !u.gelenke[b.gelenk]).map((b) => b.gelenk)
  if (geschont.length) g.push({ art: "schonung", gelenke: geschont })
  if (UEBUNGEN.some((x) => x.schwerer === u.id && aufgestiegen(x, protokoll, datum))) g.push({ art: "aufstieg" })
  const n = verlaufVon(protokoll, u.id, datum).length
  if (n) g.push({ art: "verlauf", einheiten: n })
  if (rolle !== "mobil" && rolle !== "ausdauer") g.push({ art: "block" })
  if (profil.phase && (rolle === "haupt" || rolle === "neben" || rolle === "schnellkraft")) g.push({ art: "phase", phase: profil.phase })
  return g
}

const GRUND_SAETZE: Record<Rolle, number> = { haupt: 3, neben: 3, isolation: 2, praevention: 2, schnellkraft: 3, mobil: 2, ausdauer: 1 }
const MAX_SAETZE: Record<Rolle, number> = { haupt: 5, neben: 4, isolation: 3, praevention: 3, schnellkraft: 4, mobil: 3, ausdauer: 1 }
const ENTFERNEN: Rolle[] = ["isolation", "mobil", "praevention", "neben", "schnellkraft", "haupt"]

/** Geschätzte Minuten für einen Platz. */
export function platzMinuten(p: { rolle: Rolle; uebung: Uebung; vorgabe: { saetze: number; pause_s: number; last: number | null } }): number {
  const v = p.vorgabe
  if (p.rolle === "ausdauer") return v.saetze > 1 ? (v.saetze * 4 + 15) : Math.round((v.last || 0) / 60) + 10
  if (p.uebung.belastung === "zeit") return (v.saetze * (2 * (v.last || 40) + 20)) / 60
  const arbeit = p.uebung.belastung === "distanz" ? 10 : 40
  return (v.saetze * (arbeit + v.pause_s)) / 60
}

/** Eine Einheit für ein Datum, oder null an freien Tagen und Sportterminen. */
export function einheitFuer(profil: Profil, daten: Daten, datum: string): Einheit | null {
  const plan = wochenplan(profil, daten, montagVon(datum))
  return plan.find((e) => e.datum === datum) || null
}

/** Alle Einheiten der Woche ab Montag. */
export function wochenplan(grundprofil: Profil, daten: Daten, montag: string): Einheit[] {
  const benutzt = new Set<string>()
  const ergebnis: Einheit[] = []
  const schwach = schwachstellen(daten)
  for (const t of wochenaufteilung(grundprofil)) {
    const datum = plusTage(montag, t.tag)
    // Phase aus dem Jahresplan: steuert Wiederholungen, Reserve, Pausen und Sätze
    const profil = mitPhase(grundprofil, datum)
    const phase = profil.phase
    const tag = profil.woche[t.tag]
    const ortIndex = Math.min(Math.max(0, tag.ort || 0), Math.max(0, profil.orte.length - 1))
    const ort = profil.orte[ortIndex]
    if (!ort) continue
    const minuten = Math.max(15, tag.minuten || 60)
    const woche = blockWoche(profil, datum)
    const hinweise: string[] = []
    if (t.hinweis) hinweise.push(t.hinweis)
    if (phase && t.art === "kraft") hinweise.push("Phase " + PHASEN[phase].name + ": " + PHASEN[phase].training)
    if (istEntlastung(woche)) hinweise.push("Entlastungswoche: weniger Sätze, mehr Reserve. Danach beginnt ein neuer Block.")
    if (profil.beschwerden.length) hinweise.push("Schonung bei Beschwerden: Übungen mit Belastung auf " + profil.beschwerden.map((b) => GELENK_NAME[b.gelenk]).join(", ") + " sind angepasst. Das ersetzt keine ärztliche oder physiotherapeutische Behandlung. Bei Schmerz aufhören.")

    let plaetze: PlatzVorlage[] = VORLAGEN[t.vorlage].plaetze.slice()
    if (t.einschraenkung > 0) plaetze = plaetze.filter((p) => BEIN_MUSTER.indexOf(p.muster) < 0 || (t.einschraenkung === 1 && p.rolle !== "haupt" && p.rolle !== "schnellkraft"))
    if (t.art === "regeneration" && profil.arten.indexOf("ausdauer") >= 0) plaetze.push({ rolle: "ausdauer", muster: "ausdauer_ruhig" })
    // Mobilität angewählt, aber kein eigener Tag: kurze Mobilität am Ende jeder Krafteinheit
    if (t.art === "kraft" && profil.arten.indexOf("mobilitaet") >= 0 && !profil.woche.some((w) => w.art === "training" && w.schwerpunkt === "mobilitaet") && !plaetze.some((p) => p.rolle === "mobil")) {
      plaetze.push({ rolle: "mobil", muster: profil.sport === "golf" ? "mobilitaet_bws" : "mobilitaet_huefte" })
    }
    // Ohne gewählte Mobilität keine Mobilitätsplätze, außer die Vorlage besteht nur daraus (ganzer Mobilitätstag)
    if (t.art === "kraft" && profil.arten.indexOf("mobilitaet") < 0 && plaetze.some((p) => p.rolle !== "mobil")) plaetze = plaetze.filter((p) => p.rolle !== "mobil")
    // Schwachstellen aus den Tests: Mobilitätsplätze gezielt darauf ausrichten
    if (schwach.length) {
      let k = t.tag
      plaetze = plaetze.map((p) => (p.rolle === "mobil" && (t.art !== "mobilitaet" || k % 2 === 0) ? { ...p, muster: schwach[k++ % schwach.length] } : (k++, p)))
      if (t.art === "kraft" && profil.arten.indexOf("mobilitaet") >= 0 && !plaetze.some((p) => p.rolle === "mobil")) plaetze.push({ rolle: "mobil", muster: schwach[t.tag % schwach.length] })
    }

    const heuteBenutzt = new Set<string>()
    const gewaehlt: Platz[] = []
    for (const pv of plaetze) {
      let u: Uebung | null = null
      let muster = pv.muster
      for (const m of [pv.muster, ...(ERSATZ[pv.muster] || [])]) {
        if (t.einschraenkung > 0 && BEIN_MUSTER.indexOf(m) >= 0 && pv.rolle === "haupt") continue
        u = waehle(profil, ort, pv.rolle, m, benutzt, heuteBenutzt, daten.protokoll, datum)
        if (u) {
          muster = m
          break
        }
      }
      if (!u) continue
      heuteBenutzt.add(u.id)
      benutzt.add(u.id)
      const titel = t.art === "regeneration" ? "Regeneration" : VORLAGEN[t.vorlage].titel
      gewaehlt.push({ rolle: pv.rolle, muster, uebung: u, vorgabe: null as never, warum: warum(profil, ort, titel, pv.rolle, pv.muster, muster, u, daten.protokoll, datum, schwach) })
    }

    // Sätze verteilen, bis die Zeit voll ist
    let saetze = gewaehlt.map((p) => {
      let n = GRUND_SAETZE[p.rolle]
      if (profil.saison === "wettkampf" && (p.rolle === "haupt" || p.rolle === "neben")) n -= 1
      if (phase === "schnellkraft" && p.rolle === "schnellkraft") n += 1
      if (phase === "schnellkraft" && p.rolle === "isolation") n -= 1
      if (phase === "uebergang" || t.einschraenkung === 2) n = Math.min(n, 2)
      return Math.max(1, n)
    })
    const lastenVon = (p: Platz) => {
      const g = passendeGruppe(p.uebung, ort.geraete)
      return p.uebung.belastung === "gewicht" && g && g.last ? verfuegbar(g.last, ort.gewichte) : []
    }
    const baue = () =>
      gewaehlt.map((p, i) => {
        if (p.rolle === "ausdauer") {
          const rest = gewaehlt.length > 1 ? Math.max(20, minuten - 25) : minuten
          return { ...p, vorgabe: ausdauerVorgabe(p.uebung, rest, woche) }
        }
        const verlauf = verlaufVon(daten.protokoll, p.uebung.id, datum)
        const v = vorgabe(profil, p.rolle, p.uebung, saetze[i], verlauf, lastenVon(p), woche, daten.maxwerte?.[p.uebung.id]?.kg)
        if (t.einschraenkung === 2) v.rir = Math.max(v.rir, 3)
        if (plateau(verlauf) && !istEntlastung(woche)) v.begruendung += " Seit drei Einheiten kein neuer Bestwert: Schlaf, Essen und Technik prüfen, sonst nach dem Block die Übung tauschen."
        return { ...p, vorgabe: v }
      })
    const dauer = (ps: Platz[]) => AUFWAERMEN_MIN + ps.reduce((s, p) => s + platzMinuten(p), 0)
    let fertig = baue()
    if (t.art === "kraft" || t.art === "mobilitaet") {
      // zu lang: erst Sätze kürzen, dann Plätze streichen
      let schutz = 0
      while (dauer(fertig) > minuten && schutz++ < 60) {
        let k = -1
        for (const r of ENTFERNEN) {
          for (let i = gewaehlt.length - 1; i >= 0; i--) if (gewaehlt[i].rolle === r && saetze[i] > 2) { k = i; break }
          if (k >= 0) break
        }
        if (k >= 0) saetze[k]--
        else {
          let weg = -1
          for (const r of ENTFERNEN) {
            for (let i = gewaehlt.length - 1; i >= 0; i--) if (gewaehlt[i].rolle === r) { weg = i; break }
            if (weg >= 0) break
          }
          if (weg < 0 || gewaehlt.length <= 2) break
          gewaehlt.splice(weg, 1)
          saetze.splice(weg, 1)
        }
        fertig = baue()
      }
      // Zeit übrig: Hauptübungen zuerst, dann Nebenübungen
      const reihe: Rolle[] = ["haupt", "neben", "schnellkraft", "praevention", "isolation", "mobil"]
      let mehr = true
      while (mehr && !istEntlastung(woche) && t.einschraenkung < 2 && phase !== "uebergang") {
        mehr = false
        for (const r of reihe) {
          for (let i = 0; i < gewaehlt.length; i++) {
            if (gewaehlt[i].rolle !== r || saetze[i] >= MAX_SAETZE[r]) continue
            saetze[i]++
            const versuch = baue()
            if (dauer(versuch) <= minuten) {
              fertig = versuch
              mehr = true
            } else saetze[i]--
          }
        }
      }
      saetze = saetze.slice()
    }

    const titel = t.art === "regeneration" ? "Regeneration" : VORLAGEN[t.vorlage].titel
    ergebnis.push({ datum, titel, art: t.art, ort: ortIndex, minuten: Math.round(dauer(fertig)), plaetze: fertig, hinweise })
  }
  return ergebnis
}

/** Andere Übungen für denselben Platz (zum Tauschen während der Einheit). */
export function alternativen(profil: Profil, ort: Ort, muster: Muster, ohne: string): Uebung[] {
  return UEBUNGEN.filter((u) => u.muster === muster && u.id !== ohne && erlaubt(profil, u) && passtAnOrt(u, ort))
}

/** Platz mit neuer Übung, z. B. nach einem Tausch. */
export function platzMit(grundprofil: Profil, daten: Daten, datum: string, ort: Ort, alt: Platz, u: Uebung): Platz {
  const profil = mitPhase(grundprofil, datum)
  const g = passendeGruppe(u, ort.geraete)
  const lasten = u.belastung === "gewicht" && g && g.last ? verfuegbar(g.last, ort.gewichte) : []
  const v = vorgabe(profil, alt.rolle, u, alt.vorgabe.saetze, verlaufVon(daten.protokoll, u.id, datum), lasten, blockWoche(profil, datum), daten.maxwerte?.[u.id]?.kg)
  if (istEntlastung(blockWoche(profil, datum))) v.saetze = alt.vorgabe.saetze
  return { ...alt, uebung: u, vorgabe: v, warum: [{ art: "getauscht" }, ...(alt.warum || []).filter((x) => x.art === "platz" || x.art === "phase")] }
}

/** Lastgerät einer Übung an einem Ort (für die Anzeige der Einheit). */
export function lastGeraet(u: Uebung, ort: Ort): Geraet | null {
  const g = passendeGruppe(u, ort.geraete)
  return g ? g.last : null
}

/** Verfügbare Lasten einer Übung an einem Ort. */
export function lastenAn(u: Uebung, ort: Ort): number[] {
  const g = lastGeraet(u, ort)
  return u.belastung === "gewicht" && g ? verfuegbar(g, ort.gewichte) : []
}

export function verlauf(daten: Daten, id: string, vor = "9999-12-31"): Protokoll[] {
  return verlaufVon(daten.protokoll, id, vor)
}

export const GELENK_NAME: Record<string, string> = { knie: "Knie", schulter: "Schulter", ruecken: "Rücken", huefte: "Hüfte", handgelenk: "Handgelenk", ellbogen: "Ellbogen", sprunggelenk: "Sprunggelenk", nacken: "Nacken" }

/** Übungen, die an einem Ort grundsätzlich möglich sind (für die Ausnahmen-Liste). */
export function moeglicheUebungen(ort: Ort): Uebung[] {
  return UEBUNGEN.filter((u) => passtAnOrt(u, ort))
}

export { uebung }
export type { Geraet }
