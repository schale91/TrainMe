// Reha-Planung: Für jedes Beschwerdebild eine Auswahl an Übungsfamilien, je Familie die passende Stufe. Die Stufe
// steigt, wenn die Übung zweimal hintereinander vollständig und mit Schmerz höchstens 2 gelingt, und sinkt, wenn ein
// Satz über 5 lag. War es am Morgen nach dem Training schlechter, bleibt alles auf der Stufe und es gibt einen Satz
// weniger. Die ersten sechs Wochen nach einer Operation gibt es nur sanfte Übungen.

import { BILDER, FAMILIEN, FRUEHPHASE, KREIS_NAME, bildInfo, familie, type Familie, type Kreis, type Stufe } from "../daten/reha"
import { uebung } from "../daten/uebungen/index"
import { abrunden, hoeher } from "./gewichte"
import type { PlanProfil } from "./jahresplan"
import type { Anpassung } from "./progression"
import type { Daten, Einheit, Grund, Ort, Phase, Platz, Profil, Protokoll, RehaBild, Rolle, Satz, Uebung, Vorgabe } from "./typen"

const TAG = 86400000

export function rehaAktiv(profil: Profil | null | undefined): boolean {
  return !!profil && profil.sport === "reha" && !!profil.reha
}

/** Wochen seit der Operation, oder null ohne OP-Datum. */
export function opWochen(op?: string, datum?: string): number | null {
  if (!op || !datum) return null
  return Math.floor((Date.parse(datum + "T12:00:00Z") - Date.parse(op + "T12:00:00Z")) / (7 * TAG))
}

/** Jüngste Operation: Wochen danach (null ohne Operation). */
export function wochenNachOp(profil: Profil, datum: string): number | null {
  let min: number | null = null
  for (const b of profil.reha?.bilder || []) {
    const w = bildInfo(b.id)?.op ? opWochen(b.op_datum, datum) : null
    if (w !== null && w >= 0 && (min === null || w < min)) min = w
  }
  return min
}

/** Muss vor dem Training noch etwas geklärt werden? Rückgabe: Grund oder null. */
export function rehaSperre(profil: Profil, heute: string): string | null {
  const r = profil.reha
  if (!r) return null
  if (!r.warnzeichen || (Date.parse(heute) - Date.parse(r.warnzeichen)) / TAG > 30) return "warnzeichen"
  const w = wochenNachOp(profil, heute)
  if (w !== null && w < 12 && !r.freigabe) return "freigabe"
  return null
}

function verlaufVon(protokoll: Protokoll[], ids: string[], vor: string): Protokoll[] {
  return protokoll.filter((p) => ids.indexOf(p.uebung) >= 0 && p.datum < vor).sort((a, b) => (a.datum < b.datum ? -1 : 1))
}

const maxSchmerz = (p: Protokoll) => Math.max(0, ...p.saetze.map((s) => s.schmerz ?? 0))

/** Satz gilt als geschafft: obere Grenze erreicht (15 Wiederholungen oder 30 Sekunden). */
function geschafft(p: Protokoll, u: Uebung | undefined): boolean {
  const s = p.saetze.filter((x) => x.wdh > 0 || (x.sekunden || 0) > 0)
  if (!s.length) return false
  if (u?.belastung === "zeit") return s.every((x) => (x.sekunden || 0) >= 30)
  return s.every((x) => x.wdh >= 15)
}

/** Übungen einer Familie, die für dieses Profil und diesen Ort in Frage kommen. */
export function erlaubteStufen(f: Familie, profil: Profil, ort: Ort, passt: (u: Uebung, o: Ort) => boolean): Stufe[] {
  const r = profil.reha
  const grenzen = !!r?.tep_grenzen && !!r.bilder.some((b) => b.id === "huefte_tep")
  return f.stufen.filter((st) => {
    const u = uebung(st.id)
    if (!u || !passt(u, ort) || profil.ausgeschlossen.indexOf(u.id) >= 0) return false
    if (st.boden && !r?.boden) return false
    if (st.frei && r?.halt) return false
    if (st.grenze && grenzen) return false
    return true
  })
}

/** Aktuelle Stufe einer Familie (Index in erlaubte) mit Begründung. */
export function stufeFuer(erlaubte: Stufe[], protokoll: Protokoll[], datum: string, obergrenze: number, schlechter: boolean): { index: number; grund: string } {
  const ids = erlaubte.map((x) => x.id)
  const v = verlaufVon(protokoll, ids, datum)
  if (!v.length) return { index: 0, grund: "Start auf der ersten Stufe." }
  const letzte = v[v.length - 1]
  let i = Math.max(0, ids.indexOf(letzte.uebung))
  const grenze = Math.min(obergrenze, erlaubte.length - 1)
  if (i > grenze) return { index: grenze, grund: "Nach der Operation vorerst höchstens Stufe " + (grenze + 1) + "." }
  if (maxSchmerz(letzte) > 5) {
    i = Math.max(0, i - 1)
    return { index: i, grund: "Zuletzt lag der Schmerz über 5: eine Stufe leichter." }
  }
  const gleiche = v.filter((p) => p.uebung === letzte.uebung).slice(-2)
  const gut = gleiche.length === 2 && gleiche.every((p) => geschafft(p, uebung(p.uebung)) && maxSchmerz(p) <= 2)
  if (gut && schlechter) return { index: i, grund: "Zweimal geschafft, aber nach dem letzten Training ging es schlechter: Stufe bleibt." }
  if (gut && i < grenze) return { index: i + 1, grund: "Zweimal vollständig und mit wenig Schmerz geschafft: nächste Stufe." }
  return { index: i, grund: maxSchmerz(letzte) >= 3 ? "Zuletzt im gelben Bereich: Stufe bleibt." : "Stufe bleibt, bis zweimal alle Sätze vollständig gelingen." }
}

/** Familien für die Beschwerdebilder, abwechselnd aus jedem Bild, ohne doppelte. */
export function familienFuer(bilder: RehaBild[]): Familie[] {
  // Seitlicher Hüftschmerz: auch für andere Bilder nur die druckarme Variante der Abspreizer
  const sanft = bilder.indexOf("huefte_seitlich") >= 0
  const listen = bilder.map((b) => (bildInfo(b)?.familien || []).map((f) => (sanft && f === "abspreizer" ? "abspreizer_sanft" : f)))
  const ids: string[] = []
  for (let k = 0; k < 12; k++) for (const l of listen) if (l[k] && ids.indexOf(l[k]) < 0) ids.push(l[k])
  return ids.map((id) => familie(id)).filter((f): f is Familie => !!f)
}

const KREIS_FOLGE: Kreis[] = ["rumpf", "gleichgewicht", "kraft", "alltag", "beweglich"]
const KREIS_ROLLE: Record<Kreis, Rolle> = { rumpf: "praevention", gleichgewicht: "praevention", kraft: "neben", alltag: "haupt", beweglich: "mobil", frueh: "mobil" }

/** Auswahl für eine Einheit: aus jedem Kreis eine Familie (reihum je Einheit), dann nach Wichtigkeit auffüllen. */
export function auswahl(fams: Familie[], anzahl: number, runde: number): Familie[] {
  const gewaehlt: Familie[] = []
  for (const k of KREIS_FOLGE) {
    const imKreis = fams.filter((f) => f.kreis === k)
    if (imKreis.length && gewaehlt.length < anzahl) gewaehlt.push(imKreis[runde % imKreis.length])
  }
  // zweite Kraftübung ist wichtiger als alles andere
  for (const f of fams) {
    if (gewaehlt.length >= anzahl) break
    if (gewaehlt.indexOf(f) < 0 && (f.kreis === "kraft" || f.kreis === "alltag")) gewaehlt.push(f)
  }
  for (const f of fams) if (gewaehlt.length < anzahl && gewaehlt.indexOf(f) < 0) gewaehlt.push(f)
  return KREIS_FOLGE.flatMap((k) => gewaehlt.filter((f) => f.kreis === k))
}

/** Vorgabe für eine Reha-Übung aus dem bisherigen Verlauf. */
export function rehaVorgabe(u: Uebung, verlauf: Protokoll[], saetze: number, lasten: number[], beweglich: boolean): Vorgabe {
  const letzte = verlauf.length ? verlauf[verlauf.length - 1] : null
  const gezaehlt = letzte ? letzte.saetze.filter((s) => s.wdh > 0 || (s.sekunden || 0) > 0) : []
  const rot = letzte ? maxSchmerz(letzte) > 5 : false
  const ampel = " Schmerz-Ampel: bis 2 gut, bis 5 in Ordnung, wenn es bis morgen früh abklingt, darüber kleiner und langsamer bewegen."
  const v: Vorgabe = { saetze, wdh_von: 10, wdh_bis: 10, rir: 3, last: null, modell: "doppelt", pause_s: 60, begruendung: "" }
  if (u.belastung === "zeit") {
    const best = gezaehlt.length ? Math.min(...gezaehlt.map((s) => s.sekunden || 0)) : 0
    const ziel = beweglich ? 30 : best ? Math.min(30, rot ? best : best + 5) : 20
    v.modell = "zeit"
    v.wdh_von = v.wdh_bis = 1
    v.last = ziel
    v.pause_s = 30
    v.begruendung = (beweglich ? "Sanft in die Dehnung, ruhig atmen, nicht wippen." : "Ziel: " + ziel + " Sekunden ruhig halten, Halt in Reichweite.") + ampel
    return v
  }
  const best = gezaehlt.length ? Math.max(...gezaehlt.map((s) => s.wdh)) : 0
  const ziel = !best ? 10 : rot ? Math.max(6, best - 3) : Math.min(15, best + 1)
  v.wdh_von = v.wdh_bis = ziel
  if (u.belastung === "gewicht" && lasten.length) {
    const alt = gezaehlt.length ? gezaehlt[0].last : null
    const voll = gezaehlt.length > 0 && gezaehlt.every((s) => s.wdh >= 15) && !rot && maxSchmerz(letzte!) <= 2
    v.last = alt === null ? lasten[0] : voll ? hoeher(alt, lasten) : rot ? abrunden(alt * 0.8, lasten) ?? alt : alt
    if (voll) v.wdh_von = v.wdh_bis = 10
  }
  v.begruendung = (best ? "Letztes Mal bis " + best + " Wiederholungen, heute " + ziel + "." : "Start mit " + ziel + " ruhigen, sauberen Wiederholungen.") + ampel
  return v
}

/** Ausdauer in der Reha: Gehen oder Rad, von Woche zu Woche ein paar Minuten mehr. */
export function rehaAusdauer(verlauf: Protokoll[], phase: Phase | null): Vorgabe {
  const letzte = verlauf.length ? verlauf[verlauf.length - 1] : null
  const alt = letzte ? Math.round((letzte.saetze[0]?.sekunden || 0) / 60) : 0
  const start = phase === "erhalt" ? 15 : 10
  const min = alt ? Math.min(30, alt + 2) : start
  return { saetze: 1, wdh_von: 1, wdh_bis: 1, rir: 4, last: min * 60, modell: "zeit", pause_s: 0, begruendung: "Im eigenen Tempo, du kannst dabei noch sprechen. Jede Woche ein paar Minuten mehr." }
}

/** Rückmeldung nach einem Satz: Schmerz-Ampel statt Reserve. */
export function rehaAnpassung(satz: Satz, v: Vorgabe, belastung: Uebung["belastung"]): Anpassung | null {
  const sch = satz.schmerz ?? 0
  if (sch > 5) {
    const wdh = belastung === "wiederholungen" || belastung === "gewicht" ? Math.max(5, satz.wdh - 3) : undefined
    return { richtung: "runter", text: "Rot (" + sch + " von 10): nächsten Satz kleiner und langsamer bewegen" + (wdh ? ", " + wdh + " Wiederholungen" : "") + ". Bleibt es so hoch, die Übung heute auslassen.", wdh }
  }
  if (sch >= 3) return { richtung: "gleich", text: "Gelb (" + sch + " von 10): in Ordnung, wenn es bis morgen früh wieder wie vorher ist." }
  if (belastung === "zeit") return { richtung: "gleich", text: "Grün: gut so." }
  if (satz.wdh >= v.wdh_bis && satz.wdh < 15) return { richtung: "hoch", text: "Grün und geschafft: nächster Satz gern " + Math.min(15, satz.wdh + 2) + " Wiederholungen.", wdh: Math.min(15, satz.wdh + 2) }
  return { richtung: "gleich", text: "Grün: gut so." }
}

/** Letzte Rückmeldung vom Morgen danach. */
export function letzteReaktion(daten: Daten, vor: string): "besser" | "gleich" | "schlechter" | undefined {
  const e = daten.erledigt.filter((x) => x.datum < vor && x.reaktion).sort((a, b) => (a.datum < b.datum ? -1 : 1))
  return e.length ? e[e.length - 1].reaktion : undefined
}

/** Training, für das noch die Rückmeldung vom Morgen danach fehlt (gestern oder vorgestern). */
export function offeneReaktion(daten: Daten, heute: string): number {
  for (let i = daten.erledigt.length - 1; i >= 0; i--) {
    const e = daten.erledigt[i]
    const tage = (Date.parse(heute) - Date.parse(e.datum)) / TAG
    if (tage < 1) continue
    if (tage > 2) return -1
    return e.reaktion ? -1 : i
  }
  return -1
}

export interface RehaTag {
  datum: string
  art: "kraft" | "mobilitaet" | "regeneration" | "ausdauer"
  ort: Ort
  ortIndex: number
  minuten: number
  runde: number
  hinweise: string[]
  entlastung: boolean
}

/** Eine Reha-Einheit. */
export function rehaEinheit(profil: PlanProfil, daten: Daten, t: RehaTag, passt: (u: Uebung, o: Ort) => boolean, lastenAn: (u: Uebung, o: Ort) => number[]): Einheit {
  const r = profil.reha!
  const bilder = r.bilder.map((b) => b.id)
  const namen = bilder.map((b) => bildInfo(b).name).join(", ")
  const opW = wochenNachOp(profil, t.datum)
  const schlechter = letzteReaktion(daten, t.datum) === "schlechter"
  const phase = profil.phase || null
  const hinweise = t.hinweise.slice()
  const plaetze: Platz[] = []
  const gehen = ["reha_gehen", "reha_rad"].map((id) => uebung(id)).find((u): u is Uebung => !!u && passt(u, t.ort))

  if (opW !== null && opW < 6) {
    hinweise.unshift("Frühphase nach der Operation (Woche " + (opW + 1) + "): Es gilt der Plan deiner Klinik. Diese sanften Übungen nur, wenn sie dort erlaubt wurden.")
    for (const id of FRUEHPHASE) {
      const u = uebung(id)
      if (!u || !passt(u, t.ort)) continue
      plaetze.push({ rolle: "mobil", muster: u.muster, uebung: u, etikett: KREIS_NAME.frueh, vorgabe: rehaVorgabe(u, verlaufVon(daten.protokoll, [u.id], t.datum), 2, [], false), warum: [{ art: "reha", familie: "Frühphase nach OP", stufe: 1, stufen: 1, bild: namen }] })
    }
  } else if (t.art === "ausdauer") {
    if (gehen) plaetze.push({ rolle: "ausdauer", muster: gehen.muster, uebung: gehen, etikett: "Ausdauer", vorgabe: rehaAusdauer(verlaufVon(daten.protokoll, [gehen.id], t.datum), phase), warum: [{ art: "reha", familie: "Ausdauer", stufe: 1, stufen: 1, bild: namen }] })
  } else {
    const obergrenze = opW !== null && opW < 12 ? 1 : 99
    if (opW !== null && opW < 12) hinweise.unshift("Woche " + (opW + 1) + " nach der Operation: vorerst nur die ersten beiden Stufen.")
    const extra = BILDER.filter((b) => bilder.indexOf(b.id) >= 0 && b.hinweis).map((b) => b.hinweis!)
    hinweise.push(...extra)
    if (schlechter) hinweise.unshift("Nach dem letzten Training ging es am Morgen schlechter: heute ein Satz weniger, keine neue Stufe.")
    let fams = familienFuer(bilder)
    if (t.art === "mobilitaet" || t.art === "regeneration") fams = fams.filter((f) => f.kreis === "beweglich" || f.kreis === "gleichgewicht" || f.kreis === "rumpf")
    const anzahl = Math.max(4, Math.min(8, Math.floor((t.minuten - 6) / 4.5)))
    let saetze = phase === "kraft" || phase === "schnellkraft" ? 3 : 2
    if (t.entlastung) saetze = Math.min(saetze, 2)
    if (schlechter) saetze = Math.max(1, saetze - 1)
    for (const f of auswahl(fams, anzahl, t.runde)) {
      const erlaubte = erlaubteStufen(f, profil, t.ort, passt)
      if (!erlaubte.length) continue
      const st = stufeFuer(erlaubte, daten.protokoll, t.datum, obergrenze, schlechter)
      const u = uebung(erlaubte[st.index].id)!
      const beweglich = f.kreis === "beweglich"
      const v = rehaVorgabe(u, verlaufVon(daten.protokoll, [u.id], t.datum), beweglich ? 2 : saetze, lastenAn(u, t.ort), beweglich)
      const warum: Grund[] = [
        { art: "reha", familie: f.name, stufe: st.index + 1, stufen: erlaubte.length, bild: namen },
        { art: "reha_schmerz", text: f.zweck + " " + st.grund },
      ]
      plaetze.push({ rolle: KREIS_ROLLE[f.kreis], muster: u.muster, uebung: u, etikett: KREIS_NAME[f.kreis], vorgabe: v, warum })
    }
    if (gehen && t.art === "kraft" && t.minuten >= 45) plaetze.push({ rolle: "ausdauer", muster: gehen.muster, uebung: gehen, etikett: "Ausdauer", vorgabe: rehaAusdauer(verlaufVon(daten.protokoll, [gehen.id], t.datum), phase), warum: [{ art: "reha", familie: "Ausdauer", stufe: 1, stufen: 1, bild: namen }] })
  }
  const gelenke = Array.from(new Set(bilder.map((b) => bildInfo(b).gelenk)))
  const titel = opW !== null && opW < 6 ? "Frühphase nach OP" : t.art === "ausdauer" ? "Gehen" : (t.art === "kraft" ? "Gelenktraining " : "Beweglich bleiben ") + gelenke.map((g) => ({ huefte: "Hüfte", knie: "Knie", ruecken: "Rücken" })[g]).join(" und ")
  const minuten = Math.round(8 + plaetze.reduce((s, p) => s + (p.rolle === "ausdauer" ? (p.vorgabe.last || 0) / 60 : (p.vorgabe.saetze * ((p.uebung.belastung === "zeit" ? (p.vorgabe.last || 30) * (p.uebung.einseitig ? 2 : 1) : 45 * (p.uebung.einseitig ? 2 : 1)) + p.vorgabe.pause_s)) / 60), 0))
  return { datum: t.datum, titel, art: t.art === "ausdauer" ? "ausdauer" : t.art === "kraft" ? "kraft" : "mobilitaet", ort: t.ortIndex, minuten, plaetze, hinweise }
}

export { BILDER, FAMILIEN }
