// Eine Einheit durchführen: Vorgaben sehen, Sätze abhaken, Pause läuft automatisch, am Ende gibt es XP.

import { hatSport } from "../logik/auswahl"
import { Fragment, useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { alternativen, erlaubt, lastGeraet, lastenAn, mitAlltag, passtAnOrt, platzMit, verlauf } from "../logik/plan"
import { abrunden, BANDFARBEN, bandVonStufe, hoeher, lastText, niedriger, stufeVonBand } from "../logik/gewichte"
import { pauseNachSatz, satzAnpassung, type Anpassung } from "../logik/progression"
import { alsDropsatz, dropMoeglich, dropVorschlag, zweiZuEinem } from "../logik/dropsatz"
import { aufwaermSaetze, backoffLast, backoffNachTopsatz, neuerBestwert, satzformVon, scheibenProSeite, stangeVon, unplausibel } from "../logik/satzhilfen"
import { rehaAktiv, rehaAnpassung } from "../logik/reha"

/** Farbe der Schmerz-Ampel: 0 bis 2 grün, 3 bis 5 gelb, darüber rot. */
const ampel = (n: number) => (n > 5 ? "ampel rot" : n >= 3 ? "ampel gelb" : "ampel gruen")
import type { Daten, Einheit, Platz, Protokoll, Satz, Satzform, Uebung, Vorgabe } from "../logik/typen"
import { Blatt, Gruppe, Icon, Seite, useEbene, Zeile } from "./ios"
import { pauseStarten, pauseStoppen } from "./pausenTimer"
import { alleTage, formSchwach, tageswerte } from "../logik/gesundheit"
import { ebeneOeffnen } from "./navigation"
import { bruecke } from "./lebenswelt"
import { ROLLE, datumText, grundText, zahl } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"
import { Sym } from "./symbole"
import { FREI, uebung as uebungMit } from "../daten/uebungen/index"
import Figur from "./Figur"
import { wechselPause } from "../logik/wechsel"
import { beidseitigLast, beidseitigVorschlag, freieGruppe, gelerntAus, grosseVier, hauptPausenZuKurz, heuteFaktor, messen, pausenKuerzen, restDauer, satzMinuten, schaetzung, supersatzVorschlag, umbauMin, weglassenVorschlag, zeitBudget } from "../logik/zeitplan"
import { entwurfLesen, entwurfLoeschen, entwurfSchreiben } from "../logik/entwurf"
import { bandhilfeMoeglich, hilfeKg, hilfeText, hilfeVorschlag } from "../logik/bandhilfe"
import { Kurve, kurvenPunkte } from "./Fortschritt"
import { bestwert } from "../logik/spiel"
import { Scheiben } from "./Scheiben"
import { alsPuffer, taste, zahlAus, Zahlenfeld, type Eingabestand } from "./Zahlenfeld"
import { useWachHalten } from "./wachHalten"

type Eingabe = Satz & { fertig: boolean }
/** ort: Kennung des Orts (Name, Geräte, Gewichte), für den die Vorgaben gerechnet wurden */
/** Farben der Supersatz-Gruppen (A, B, C, …), gut unterscheidbar in hell und dunkel */
const SUPER_FARBEN = ["#7c5cff", "#ff8a3d", "#18a999", "#e2479b", "#3d8bff"]

type Entwurf = { schluessel: string; plaetze: Platz[]; saetze: Eingabe[][]; ort?: string; warm?: string[]; beginn?: number; geschaetzt?: number; angepasst?: string[]; budget?: number; entfernt?: Record<number, number>; aufraeumenAb?: number }
/** gemessene Zeit einer Einheit (Millisekunden) mit Zeitbudget und Schätzung in Minuten */
export type TrainingsZeit = { beginn: number; ende: number; budget: number; geschaetzt: number; messung: { tempo?: number; wechsel?: number; abschluss_min?: number } }
type Feld = "kg" | "wdh" | "sek" | "min"
type Pad = Eingabestand & { i: number; k: number; feld: Feld }

const mitte = (v: Vorgabe) => Math.round((v.wdh_von + v.wdh_bis) / 2)

/** Kennung eines Orts: ändern sich Geräte oder Gewichte, stimmen die Vorschläge eines Entwurfs nicht mehr. */
const ortKennung = (o: unknown) => JSON.stringify(o ?? null)

/**
 * Entwurf an einen geänderten Ort anpassen: Übungen bekommen die neu gerechneten Vorgaben, abgehakte Sätze bleiben,
 * offene Sätze bekommen die neuen Gewichtsvorschläge. Getauschte Übungen bleiben getauscht.
 */
export function entwurfAnpassen(e: Entwurf, neu: Platz[], start: (p: Platz) => Eingabe[]): { plaetze: Platz[]; saetze: Eingabe[][] } {
  const plaetze = e.plaetze.map((p, i) => neu.find((x, k) => x.uebung.id === p.uebung.id && (k === i || !e.plaetze.some((y, j) => j !== i && y.uebung.id === p.uebung.id))) ?? p)
  const saetze = e.saetze.map((liste, i) => {
    const frisch = start(plaetze[i])
    return liste.map((s, k) => (s.fertig ? s : (frisch[k] ?? { ...s, last: frisch[0]?.last ?? s.last })))
  })
  return { plaetze, saetze }
}

function ladeEntwurf(schluessel: string): Entwurf | null {
  try {
    return entwurfLesen<Entwurf>(localStorage, schluessel)
  } catch {
    return null
  }
}

/** Sätze zum Start. Mit Topsatz: Satz 1 mit dem vorgeschlagenen Gewicht, die übrigen etwa 10 % leichter. */
function startSaetze(p: Platz, daten: Daten, form: Satzform = "gleich", lasten: number[] = []): Eingabe[] {
  const v = p.vorgabe
  const letzte = verlauf(daten, p.uebung.id).slice(-1)[0]
  const last = v.last !== null && p.uebung.belastung === "gewicht" ? v.last : letzte && letzte.saetze[0] && p.uebung.belastung === "gewicht" ? letzte.saetze[0].last : null
  const saetze: Eingabe[] = Array.from({ length: v.saetze }, () => {
    if (p.uebung.belastung === "zeit") return { last: null, wdh: 1, rir: v.rir, sekunden: v.last || 30, fertig: false }
    if (p.uebung.belastung === "distanz") return { last: null, wdh: 1, rir: 4, fertig: false }
    // Vorbelegt mit der Mitte des Bereichs: Wer nur abhakt, trägt keine zu optimistischen Werte ein
    const band = bandhilfeMoeglich(p.uebung) ? daten.bandhilfe?.[p.uebung.id] : undefined
    return { last, wdh: mitte(v), rir: v.rir, fertig: false, ...(band ? { hilfe_band: band, hilfe_kg: hilfeKg(daten, band) } : {}) }
  })
  // Dropsatz: der letzte Satz bekommt die Drop-Stufen
  if (form === "drop") return saetze.map((s, k) => (k === saetze.length - 1 ? alsDropsatz(s, lasten) : s))
  if (form !== "topsatz" || last === null || saetze.length < 2) return saetze
  return saetze.map((s, k) => (k === 0 ? { ...s, art: "top" as const } : { ...s, last: backoffLast(last, lasten), art: "backoff" as const }))
}

function piep() {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctx()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.frequency.value = 880
    g.gain.value = 0.15
    o.connect(g)
    g.connect(ctx.destination)
    o.start()
    o.stop(ctx.currentTime + 0.35)
  } catch {
    /* ohne Ton */
  }
}

/** Für die Suche: klein, ohne Umlaute und Bindestriche */
const suchNormal = (t: string) => t.trim().toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss").replace(/[-\s]+/g, " ")


export default function Training(props: { daten: Daten; einheit: Einheit; zurueck: () => void; abschliessen: (e: Einheit, p: Protokoll[], vollstaendig: boolean, schmerzVor?: number, zeit?: TrainingsZeit) => void; ausschliessen: (id: string, neu?: string) => void; bandfarbe?: (id: string, farbe: string | null) => void; satzform?: (id: string, form: Satzform) => void; bandhilfe?: (id: string, farbe: string | null) => void; bandhilfeKg?: (farbe: string, kg: number) => void }) {
  const { daten, einheit } = props
  const profil = daten.profil!
  // Reha: Schmerz je Satz statt Reserve, Schmerz vor dem Training
  const reha = rehaAktiv(profil)
  const [schmerzVor, setSchmerzVor] = useState<number | null>(null)
  const ort = profil.orte[einheit.ort] || profil.orte[0]
  const schluessel = einheit.datum + "|" + einheit.titel
  const kennung = ortKennung(ort)
  // Satzform je Übung: hier gewählt, sonst gespeichert, sonst aus der Vorgabe
  const [formWahl, setFormWahl] = useState<Record<string, Satzform>>({})
  const dropGeht = (p: Platz) => !reha && dropMoeglich(p.uebung, lastGeraet(p.uebung, ort), ort, p.rolle)
  const formVon = (p: Platz, anzahl = p.vorgabe.saetze): Satzform =>
    satzformVon({ ...p.vorgabe, saetze: anzahl }, formWahl[p.uebung.id] ?? daten.satzform?.[p.uebung.id], p.uebung.belastung === "gewicht" && !reha && (p.rolle === "haupt" || p.rolle === "neben") && lastGeraet(p.uebung, ort) !== "band", dropGeht(p))
  const start = (p: Platz) => startSaetze(p, daten, formVon(p), lastenAn(p.uebung, ort))
  const gespeichert = useMemo(() => {
    const e = ladeEntwurf(schluessel)
    // Ort oder Ausstattung seitdem geändert: Vorschläge neu rechnen, Abgehaktes behalten
    return e && e.ort !== kennung ? { ...e, ...entwurfAnpassen(e, einheit.plaetze, start) } : e
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schluessel])
  const [plaetze, setPlaetze] = useState<Platz[]>(gespeichert ? gespeichert.plaetze : einheit.plaetze)
  const [saetze, setSaetze] = useState<Eingabe[][]>(gespeichert ? gespeichert.saetze : einheit.plaetze.map(start))
  // abgehakte Aufwärmsätze („Übung-Satz“), Zahlenfeld, Hinweis auf neue Bestwerte, Grund für eine längere Pause
  const [warm, setWarm] = useState<string[]>(gespeichert?.warm || [])
  const [pad, setPad] = useState<Pad | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [pauseGrund, setPauseGrund] = useState<string | null>(null)
  const gefeiert = useRef<Record<number, number>>({})
  useWachHalten()
  useEbene(pad !== null, () => setPad(null), "blatt")
  const [pauseBis, setPauseBis] = useState<number | null>(null)
  const [jetzt, setJetzt] = useState(Date.now())
  const [tausch, setTausch] = useState<number | null>(null)
  const [tauschSuche, setTauschSuche] = useState("")
  const [info, setInfo] = useState<Uebung | null>(null)
  const [kurveOffen, setKurveOffen] = useState<number | null>(null)
  const [wechsel, setWechsel] = useState<{ nach: number; grund: string } | null>(null)
  const [rirHilfe, setRirHilfe] = useState(false)
  const [warumOffen, setWarumOffen] = useState<number | null>(null)
  const [anpassungen, setAnpassungen] = useState<Record<number, (Anpassung & { satz: number }) | undefined>>({})
  const gepiept = useRef(false)
  // Trainingszeit: läuft ab „Training starten“; vorher lassen sich keine Sätze abhaken
  const [beginn, setBeginn] = useState<number | null>(gespeichert?.beginn ?? null)
  // Schätzung beim Start (ohne gelernten Faktor): Grundlage, um aus der gemessenen Dauer zu lernen
  const [geschaetzt, setGeschaetzt] = useState<number>(() => gespeichert?.geschaetzt ?? schaetzung(einheit.plaetze, einheit.plaetze.map((p) => Array(p.vorgabe.saetze).fill(0))))
  const [angepasst, setAngepasst] = useState<string[]>(gespeichert?.angepasst || [])
  // Zeitbudget: aus dem Wochenplan, vor dem Start bestätigen oder in 5-Minuten-Schritten ändern
  const [budget, setBudget] = useState<number>(() => gespeichert?.budget ?? zeitBudget(profil, einheit.datum, einheit.minuten))
  // Aufräumen am Ende: feste Minuten aus dem Profil statt gelernt
  const aufrMin = profil.aufraeumen_min && profil.aufraeumen_min > 0 ? profil.aufraeumen_min : 0
  const gelernt = useMemo(() => {
    const l = gelerntAus(daten)
    return aufrMin ? { ...l, abschluss: aufrMin } : l
  }, [daten, aufrMin])
  const [aufraeumenAb, setAufraeumenAb] = useState<number | null>(gespeichert?.aufraeumenAb ?? null)
  // Weggelassene Sätze je Übung, damit sie zurückkommen können, wenn wieder Zeit ist
  const [entfernt, setEntfernt] = useState<Record<number, number>>(gespeichert?.entfernt || {})
  useEffect(() => {
    if (beginn === null) return
    const t = setInterval(() => setJetzt(Date.now()), 1000)
    return () => clearInterval(t)
  }, [beginn])
  const gesperrt = beginn === null
  const erstStarten = () => setToast("Erst oben „Training starten“ drücken, dann zählt die Zeit und die Sätze lassen sich abhaken.")

  useEffect(() => {
    try {
      entwurfSchreiben(localStorage, schluessel, { schluessel, plaetze, saetze, ort: kennung, warm, ...(beginn !== null ? { beginn } : {}), geschaetzt, angepasst, budget, entfernt, ...(aufraeumenAb !== null ? { aufraeumenAb } : {}) }, einheit.datum)
    } catch {
      /* Speicher voll oder gesperrt */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schluessel, plaetze, saetze, kennung, warm, beginn, angepasst, budget, entfernt, aufraeumenAb])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(t)
  }, [toast])

  useEffect(() => {
    if (pauseBis === null) return
    gepiept.current = false
    const t = setInterval(() => setJetzt(Date.now()), 250)
    return () => clearInterval(t)
  }, [pauseBis])

  const rest = pauseBis === null ? 0 : Math.ceil((pauseBis - jetzt) / 1000)
  useEffect(() => {
    if (pauseBis !== null && rest <= 0 && !gepiept.current) {
      gepiept.current = true
      piep()
      setPauseBis(null)
    }
  }, [rest, pauseBis])

  // Pause auch im Hintergrund und über anderen Apps (Android)
  const pauseSetzen = (bis: number | null, naechste?: string, grund?: string) => {
    setPauseBis(bis)
    setPauseGrund(grund ?? null)
    setJetzt(Date.now())
    if (bis === null) void pauseStoppen()
    else void pauseStarten(bis, "Pause", naechste ? "Danach: " + naechste : "")
  }

  const setSatz = (i: number, k: number, neu: Partial<Eingabe>) => setSaetze(saetze.map((ss, a) => (a === i ? ss.map((s, b) => (b === k ? { ...s, ...neu } : s)) : ss)))
  /**
   * Letzter Satz einer Übung (oder eines Supersatzes): die nächste offene Übung markieren, ins Bild holen und die
   * Wechselpause starten, die zur nächsten Übung passt.
   */
  const uebungFertig = (i: number) => {
    const offen = (x: number) => x !== i && saetze[x].some((s) => !s.fertig) && !(plaetze[i].gruppe && plaetze[x].gruppe === plaetze[i].gruppe)
    const kandidaten = plaetze.map((_, x) => x).filter(offen)
    const nach = kandidaten.find((x) => x > i) ?? kandidaten[0]
    if (nach === undefined) {
      pauseSetzen(null)
      setWechsel(null)
      return
    }
    const w = wechselPause(plaetze[i], plaetze[nach])
    pauseSetzen(Date.now() + w.sekunden * 1000, plaetze[nach].uebung.name)
    setWechsel({ nach, grund: w.grund })
    // kurz warten, bis der Haken gezeichnet ist, dann sanft zur nächsten Übung
    setTimeout(() => document.getElementById("uebung-" + nach)?.scrollIntoView({ behavior: "smooth", block: "start" }), 350)
  }

  /** Band als Unterstützung wählen: gilt für die offenen Sätze dieser Übung und wird für das nächste Mal gemerkt */
  const hilfeWaehlen = (i: number, farbe: string | null) => {
    props.bandhilfe?.(plaetze[i].uebung.id, farbe)
    const kg = farbe ? hilfeKg(daten, farbe) : 0
    setSaetze(saetze.map((ss, x) => (x !== i ? ss : ss.map((t) => (t.fertig ? t : farbe ? { ...t, hilfe_band: farbe, hilfe_kg: kg } : { ...t, hilfe_band: undefined, hilfe_kg: undefined })))))
  }
  /** kg des gewählten Bandes um 1 ändern (eigener Wert je Farbe) */
  const hilfeKgAendern = (i: number, d: number) => {
    const farbe = daten.bandhilfe?.[plaetze[i].uebung.id]
    if (!farbe) return
    const kg = Math.max(1, hilfeKg(daten, farbe) + d)
    props.bandhilfeKg?.(farbe, kg)
    setSaetze(saetze.map((ss, x) => (x !== i ? ss : ss.map((t) => (t.fertig || t.hilfe_band !== farbe ? t : { ...t, hilfe_kg: kg })))))
  }
  const abhaken = (i: number, k: number) => {
    if (gesperrt) return erstStarten()
    const s = saetze[i][k]
    const p = plaetze[i]
    const u = p.uebung
    const v = p.vorgabe
    const lasten = lastenAn(u, ort)
    const form = formVon(p, saetze[i].length)
    const bisher = verlauf(daten, u.id, einheit.datum)
    // Weit über allem Bisherigen: vermutlich vertippt, erst nach Bestätigung zählen und nichts daraus ableiten
    const pruefen = !s.fertig && u.belastung === "gewicht" && unplausibel(s, bisher)
    // Nach dem Haken: Vorschlag für die restlichen Sätze dieser Übung
    let a: Anpassung | null = null
    if (!s.fertig && !pruefen) {
      if (reha) a = rehaAnpassung(s, v, u.belastung)
      else if (form === "topsatz" && k === 0 && s.last) {
        // Topsatz: Back-off-Sätze aus dem, was heute wirklich ging
        const b = backoffNachTopsatz(s, mitte(v), v.rir, lasten)
        const geplant = saetze[i].find((t, y) => y > k && !t.fertig)?.last ?? null
        if (b) a = { richtung: geplant === null || b.last === geplant ? "gleich" : b.last > geplant ? "hoch" : "runter", text: "Topsatz geschafft, Maximum heute etwa " + zahl(Math.round(b.max * 2) / 2) + " kg. Back-off-Sätze: " + zahl(b.last) + " kg, wieder " + mitte(v) + " Wiederholungen.", last: b.last }
      } else {
        a = satzAnpassung(s, v, u.belastung, lasten)
        // Back-off-Sätze sind absichtlich leichter: nur leichter machen, nie schwerer
        if (form === "topsatz" && a?.richtung === "hoch" && s.last) a = { richtung: "gleich", text: "Back-off-Sätze bleiben bewusst leichter: " + zahl(s.last) + " kg beibehalten.", last: s.last }
      }
      // Mit Band als Unterstützung: zu leicht oder zu schwer? Dann ein anderes Band vorschlagen
      if (s.hilfe_band) {
        const h = hilfeVorschlag(s.hilfe_band, s, v.wdh_von, v.wdh_bis, v.rir)
        if (h) setToast((h.richtung === "weniger" ? "Mit diesem Band zu leicht. Nimm das nächstschwächere Band: " : "Noch zu schwer. Nimm das nächststärkere Band: ") + (BANDFARBEN.find((x) => x.id === h.farbe)?.name ?? h.farbe) + " (" + hilfeText(hilfeKg(daten, h.farbe)) + ").")
      }
      // Neuer Bestwert schon während der Einheit
      const heute = [...saetze[i].filter((t, y) => t.fertig && y !== k), s].map(({ fertig: _f, ...x }) => x)
      // bei Würfen und Sprüngen sagt ein geschätztes Maximum nichts aus
      const b = p.rolle === "schnellkraft" || u.muster.indexOf("schnellkraft") === 0 ? null : neuerBestwert(heute, bisher, u.id, einheit.datum)
      if (b && b.neu > (gefeiert.current[i] ?? 0) + 1e-9) {
        gefeiert.current[i] = b.neu
        setToast(
          "Neuer Bestwert: " + u.name + (s.last ? ", Maximum etwa " + zahl(Math.round(b.neu * 2) / 2) + " kg (bisher " + zahl(Math.round(b.alt * 2) / 2) + " kg)" : u.belastung === "zeit" ? ", " + b.neu + " s (bisher " + b.alt + " s)" : ", " + b.neu + " Wiederholungen (bisher " + b.alt + ")"),
        )
      }
    }
    setSaetze(
      saetze.map((ss, x) =>
        x !== i
          ? ss
          : ss.map((t, y) => {
              if (y === k) return { ...t, fertig: !t.fertig, unplausibel: pruefen || undefined, um: !t.fertig ? Date.now() : undefined }
              if (y > k && !t.fertig && a) return { ...t, ...(a.last !== undefined ? { last: a.last } : {}), ...(a.wdh !== undefined ? { wdh: a.wdh } : {}) }
              return t
            }),
      ),
    )
    setAnpassungen({ ...anpassungen, [i]: a ? { ...a, satz: k + 1 } : undefined })
    const pz = pauseNachSatz(v, s, u.belastung)
    if (!s.fertig && plaetze[i].vorgabe.pause_s > 0) {
      const g = plaetze[i].gruppe
      const gruppe = g ? plaetze.map((p, x) => (p.gruppe === g ? x : -1)).filter((x) => x >= 0) : []
      if (gruppe.length > 1) {
        // Supersatz: ohne Pause weiter zur nächsten Übung der Gruppe mit offenen Sätzen; die Pause kommt erst, wenn
        // die Runde wieder vorn beginnt. Hat eine Übung mehr Sätze, geht es mit ihr allein weiter.
        const pos = gruppe.indexOf(i)
        const offenNoch = (x: number) => saetze[x].some((y, b) => !y.fertig && !(x === i && b === k))
        const folge = [...gruppe.slice(pos + 1), ...gruppe.slice(0, pos + 1)].find(offenNoch)
        if (folge === undefined) uebungFertig(i)
        else if (gruppe.indexOf(folge) > pos) {
          pauseSetzen(null)
          setTimeout(() => document.getElementById("uebung-" + folge)?.scrollIntoView({ behavior: "smooth", block: "start" }), 350)
        } else {
          const satzNr = saetze[folge].findIndex((y, b) => !y.fertig && !(folge === i && b === k)) + 1
          pauseSetzen(Date.now() + pz.sekunden * 1000, plaetze[folge].uebung.name + ", Satz " + satzNr, pz.grund)
          if (folge !== i) setTimeout(() => document.getElementById("uebung-" + folge)?.scrollIntoView({ behavior: "smooth", block: "start" }), 350)
        }
      } else {
        const letzterSatz = saetze[i].every((x, b) => b === k || x.fertig)
        if (letzterSatz) uebungFertig(i)
        else pauseSetzen(Date.now() + pz.sekunden * 1000, plaetze[i].uebung.name + ", Satz " + (k + 2), pz.grund)
      }
    }
  }
  /** Satzform umstellen: offene Sätze bekommen die passenden Gewichte, Abgehaktes bleibt. */
  const formWechseln = (i: number, f: Satzform) => {
    const p = plaetze[i]
    const lasten = lastenAn(p.uebung, ort)
    setFormWahl({ ...formWahl, [p.uebung.id]: f })
    props.satzform?.(p.uebung.id, f)
    const erster = saetze[i][0]
    const topLast = erster?.last ?? p.vorgabe.last
    const backoff = erster?.fertig ? backoffNachTopsatz(erster, mitte(p.vorgabe), p.vorgabe.rir, lasten)?.last : topLast !== null && topLast !== undefined ? backoffLast(topLast, lasten) : undefined
    if (f === "drop") {
      // Offene Sätze gleich schwer, der letzte offene wird zum Dropsatz
      const offen = saetze[i].map((s, k) => (s.fertig ? -1 : k)).filter((k) => k >= 0)
      const letzter = offen[offen.length - 1]
      const neuD = saetze[i].map((s, k): Eingabe => {
        if (s.fertig) return s
        const gleich: Eingabe = { ...s, art: undefined, drops: undefined, last: k === 0 ? s.last : (p.vorgabe.last ?? topLast ?? s.last) }
        return k === letzter ? alsDropsatz(gleich, lasten) : gleich
      })
      setSaetze(saetze.map((ss, x) => (x === i ? neuD : ss)))
      setAnpassungen({ ...anpassungen, [i]: undefined })
      return
    }
    const neu = saetze[i].map((s0, k): Eingabe => {
      const s = s0.fertig ? s0 : { ...s0, drops: undefined }
      if (f === "gleich") return { ...s, art: undefined, last: s.fertig || k === 0 ? s.last : (p.vorgabe.last ?? topLast ?? s.last) }
      if (k === 0) return { ...s, art: "top" }
      return { ...s, art: "backoff", last: s.fertig ? s.last : (backoff ?? s.last) }
    })
    setSaetze(saetze.map((ss, x) => (x === i ? neu : ss)))
    setAnpassungen({ ...anpassungen, [i]: undefined })
  }

  /**
   * Aufwärmsätze aus dem Gewicht des ersten Arbeitssatzes: wie vorgesehen bei der ersten Hauptübung, oder (Profil
   * „nur große Langhantelübungen“) bei Kniebeuge, Bankdrücken, Überkopfdrücken und Kreuzheben mit der Langhantel,
   * jeweils nur bei der ersten ihrer Art am Tag.
   */
  const ersteHaupt = plaetze.findIndex((p) => p.rolle === "haupt" && p.uebung.belastung === "gewicht")
  const artVon = (i: number) => grosseVier(plaetze[i].uebung, lastGeraet(plaetze[i].uebung, ort))
  const ersteGrosse = plaetze.findIndex((_, i) => artVon(i) !== null)
  const aufwaermen = (i: number) => {
    const p = plaetze[i]
    const arbeit = saetze[i][0]?.last
    if (reha || p.uebung.belastung !== "gewicht" || !arbeit) return []
    if (profil.aufwaermen === "grosse_vier") {
      const art = artVon(i)
      if (!art || plaetze.findIndex((_, k) => artVon(k) === art) !== i) return []
      return aufwaermSaetze(arbeit, lastGeraet(p.uebung, ort), ort.gewichte, lastenAn(p.uebung, ort), i === ersteGrosse)
    }
    if (p.rolle !== "haupt") return []
    return aufwaermSaetze(arbeit, lastGeraet(p.uebung, ort), ort.gewichte, lastenAn(p.uebung, ort), i === ersteHaupt)
  }
  // Vorhersage: Tempo heute gemessen (ab drei Sätzen), sonst aus früheren Einheiten gelernt
  const faktor = heuteFaktor(plaetze, saetze, gelernt.tempo)
  // Offene Aufwärmsätze je Übung (vor dem ersten Arbeitssatz)
  const warmJe = plaetze.map((_, i) => (saetze[i].some((x) => x.fertig) ? 0 : aufwaermen(i).filter((_w, k) => warm.indexOf(i + "-" + k) < 0).length))
  // Auf- und Abbauen je Übung: noch nicht begonnene ganz, angefangene nur noch das Abbauen (die Hälfte)
  const umbauVoll = plaetze.map((p, i) => {
    const geraet = lastGeraet(p.uebung, ort)
    const stange = stangeVon(geraet, ort.gewichte)
    const schwer = Math.max(0, ...saetze[i].map((x) => x.last ?? 0))
    const sch = stange && schwer ? scheibenProSeite(schwer, stange, ort.gewichte.scheiben, ort.gewichte.scheiben_beliebig) : null
    return umbauMin(stange ? (sch ? sch.length : 0) : null)
  })
  const umbauJe = umbauVoll.map((min, i) => (!saetze[i].some((x) => !x.fertig) ? 0 : saetze[i].some((x) => x.fertig) ? min / 2 : min))
  const vergangen = beginn !== null ? Math.max(0, (jetzt - beginn) / 60000) : 0
  const offenMin = restDauer(plaetze, saetze, gelernt, warmJe, umbauJe, faktor) + (reha && beginn === null ? 7 : 0)
  const prog = { vergangen, offen: offenMin, gesamt: vergangen + offenMin }
  const zuLang = prog.gesamt > budget + 1
  // Zu lang: die App fragt jedes Mal nach, Schritt für Schritt. Zuerst kürzere Pausen bei den Ergänzungsübungen (die
  // Hauptübungen behalten ihre Pause), dann Supersätze (auch später noch, sobald neue Paare passen), zuletzt Weglassen.
  // „Nein“ gilt für diese Einheit. Wird es wieder locker, fragt sie, ob Weggelassenes und volle Pausen zurückkommen.
  const gefragt = (k: string) => angepasst.indexOf(k) >= 0 || angepasst.indexOf(k + "-nein") >= 0
  const minJeSatz = satzMinuten(plaetze)
  const kuerzen = pausenKuerzen(plaetze)
  const kuerzenSpart = Math.round(plaetze.reduce((n, p, i) => n + (saetze[i].filter((x) => !x.fertig).length * (p.vorgabe.pause_s - kuerzen.plaetze[i].vorgabe.pause_s)) / 60, 0) * faktor)
  const pausenKuerzenJa = () => {
    setPlaetze(kuerzen.plaetze)
    setAngepasst([...angepasst, "pausen"])
  }
  // Ergänzungsübungen mit verschiedenen Muskeln als Supersatz im Wechsel; schon gefragte Paare nicht noch einmal
  const gefragtePaare = angepasst.filter((k) => k.startsWith("paar:")).map((k) => k.slice(5))
  const superVorschlag = zuLang ? supersatzVorschlag(plaetze, saetze, plaetze.map((p) => lastGeraet(p.uebung, ort)), prog.gesamt - budget, gefragtePaare) : { paare: [], spart_min: 0 }
  const paarMarken = superVorschlag.paare.map(([a, b]) => "paar:" + a + "-" + b)
  const alsSupersatz = () => {
    const neu = plaetze.map((p) => ({ ...p }))
    const vergeben: string[] = []
    for (const [a, b] of superVorschlag.paare) {
      const g = freieGruppe(neu, vergeben)
      vergeben.push(g)
      neu[a].gruppe = g
      neu[b].gruppe = g
    }
    setPlaetze(neu)
    setAngepasst([...angepasst, "supersatz", ...paarMarken])
    setToast("Im Wechsel ohne Pause dazwischen, die Pause kommt nach der zweiten Übung.")
  }
  // Einseitige Übungen, die noch nicht begonnen sind, einmalig beidseitig: spart je Satz die Arbeit einer Seite
  const gefragteSeiten = angepasst.filter((k) => k.startsWith("seiten:")).map((k) => Number(k.slice(7)))
  const seiten = zuLang
    ? beidseitigVorschlag(
        plaetze,
        saetze,
        (id) => {
          const u = uebungMit(id)
          return u && erlaubt(profil, u) && passtAnOrt(u, ort) ? u : undefined
        },
        (g) => mitAlltag(ort.geraete).indexOf(g as (typeof ort.geraete)[number]) >= 0,
        prog.gesamt - budget,
        gefragteSeiten,
      )
    : { tausch: [], spart_min: 0 }
  const seitenSpart = Math.max(1, Math.round(seiten.spart_min * faktor))
  // Mit Drop-Pins: die letzten zwei Sätze einer Ergänzungsübung am Stapel als ein Dropsatz (spart eine Pause)
  const gefragteDrops = angepasst.filter((k) => k.startsWith("drop:")).map((k) => Number(k.slice(5)))
  const drops = zuLang && !reha ? dropVorschlag(plaetze, saetze, plaetze.map((p) => lastGeraet(p.uebung, ort)), ort, prog.gesamt - budget, gefragteDrops) : { plaetze: [], spart_min: 0 }
  const dropMarken = drops.plaetze.map((i) => "drop:" + i)
  const dropsJa = () => {
    setSaetze(saetze.map((ss, i) => (drops.plaetze.indexOf(i) >= 0 ? zweiZuEinem(ss, lastenAn(plaetze[i].uebung, ort)) : ss)))
    setAngepasst([...angepasst, "drops", ...dropMarken])
    setToast("Letzter Satz als Dropsatz: Drop-Pins stecken wie angezeigt, am Ende ohne Pause weiter.")
  }
  const seitenMarken = seiten.tausch.map((t) => "seiten:" + t.i)
  const seitenText = (t: (typeof seiten.tausch)[number]) => {
    const alt = plaetze[t.i]
    const last = Math.max(0, ...saetze[t.i].map((x) => x.last ?? 0))
    if (!t.ersatz) return alt.uebung.name + " mit beiden Seiten gleichzeitig" + (last ? " (" + lastText(last, lastGeraet(alt.uebung, ort)) + " je Seite)" : "")
    const neu = runde(beidseitigLast(last || null, t.art), t.ersatz)
    const g = lastGeraet(t.ersatz, ort)
    return alt.uebung.name + " → " + t.ersatz.name + (neu ? " mit " + lastText(neu, g) + (t.art === "jeHand" && g !== "kurzhantel" ? " je Seite" : "") : "")
  }
  // auf vorhandene Gewichte abrunden (lieber etwas leichter), ohne Liste unverändert
  function runde(last: number | null, u: Uebung): number | null {
    if (last == null) return null
    const l = lastenAn(u, ort)
    return l.length ? (abrunden(last, l) ?? l[0]) : Math.round(last)
  }
  const beidseitigJa = () => {
    const neuP = [...plaetze]
    const neuS = [...saetze]
    for (const t of seiten.tausch) {
      const alt = plaetze[t.i]
      const text = alt.plantext ? alt.plantext.replace(/\s*je Seite/g, "") : undefined
      if (!t.ersatz) {
        neuP[t.i] = { ...alt, gleichzeitig: true, plantext: text ? text + ", beide Seiten gleichzeitig" : undefined }
        continue
      }
      const p = platzMit(profil, daten, einheit.datum, ort, alt, t.ersatz)
      neuP[t.i] = { ...p, plantext: text, vorgabe: { ...p.vorgabe, saetze: alt.vorgabe.saetze } }
      neuS[t.i] = saetze[t.i].map((x) => ({ ...x, last: t.art === "ohne" ? null : runde(beidseitigLast(x.last, t.art), t.ersatz!) }))
    }
    setPlaetze(neuP)
    setSaetze(neuS)
    setAngepasst([...angepasst, "seiten", ...seitenMarken])
    setToast("Heute beidseitig, der Plan bleibt einseitig. Passt das Gewicht nicht, im ersten Satz anpassen.")
  }
  const vorschlag = weglassenVorschlag(plaetze, saetze)
  const weglassenSpart = Math.round(
    (vorschlag.ganz.reduce((n, i) => n + saetze[i].filter((x) => !x.fertig).length * minJeSatz[i], 0) + vorschlag.einSatz.reduce((n, i) => n + minJeSatz[i], 0)) * faktor,
  )
  const weglassen = () => {
    const weg: Record<number, number> = { ...entfernt }
    setSaetze(
      saetze.map((ss, i) => {
        if (vorschlag.ganz.indexOf(i) >= 0) {
          weg[i] = (weg[i] || 0) + ss.filter((s) => !s.fertig).length
          return ss.filter((s) => s.fertig)
        }
        if (vorschlag.einSatz.indexOf(i) >= 0) {
          weg[i] = (weg[i] || 0) + 1
          const k = ss.map((s) => s.fertig).lastIndexOf(false)
          return ss.filter((_, x) => x !== k)
        }
        return ss
      }),
    )
    setEntfernt(weg)
    setAngepasst([...angepasst, "weglassen"])
  }
  // Wieder Luft: Weggelassenes zurückholen, danach volle Pausen
  const zurueckIdx = Object.keys(entfernt).map(Number).filter((i) => entfernt[i] > 0 && saetze[i])
  const zurueckKosten = Math.round(zurueckIdx.reduce((n, i) => n + entfernt[i] * minJeSatz[i], 0) * faktor)
  const vollePausen = plaetze.map((p, i) => ({ ...p, vorgabe: { ...p.vorgabe, pause_s: Math.max(p.vorgabe.pause_s, einheit.plaetze[i]?.uebung.id === p.uebung.id ? einheit.plaetze[i].vorgabe.pause_s : p.vorgabe.pause_s) } }))
  const pausenKosten = Math.round(plaetze.reduce((n, p, i) => n + (saetze[i].filter((x) => !x.fertig).length * (vollePausen[i].vorgabe.pause_s - p.vorgabe.pause_s)) / 60, 0) * faktor)
  const luft = beginn !== null && !zuLang ? budget - prog.gesamt : 0
  const zurueckHolen = () => {
    setSaetze(saetze.map((ss, i) => (entfernt[i] ? [...ss, ...Array.from({ length: entfernt[i] }, () => ({ ...(ss[ss.length - 1] ?? start(plaetze[i])[0]), fertig: false, um: undefined, unplausibel: undefined }))] : ss)))
    setEntfernt({})
    setAngepasst([...angepasst, "zurueck"])
  }
  // Tagesform aus der Uhr (Schlaf, Ruhepuls, HRV): deutlich schwach → vor dem Start fragen, ob die Gewichte heute
  // nicht steigen (höchstens wie beim letzten Mal) und eine Wiederholung mehr im Tank bleibt
  const form = useMemo(() => {
    if (reha) return { punkte: 0, gruende: [] as string[] }
    const vorher = Object.entries(alleTage(daten)).filter(([d]) => d < einheit.datum).sort(([a], [b]) => (a < b ? -1 : 1)).map(([, w]) => w)
    return formSchwach(tageswerte(daten, einheit.datum), vorher)
  }, [daten, einheit.datum, reha])
  const formAnpassen = () => {
    setPlaetze(plaetze.map((p) => (p.uebung.belastung === "gewicht" ? { ...p, vorgabe: { ...p.vorgabe, rir: Math.min(4, (p.vorgabe.rir ?? 2) + 1) } } : p)))
    setSaetze(
      saetze.map((ss, i) => {
        const p = plaetze[i]
        if (p.uebung.belastung !== "gewicht") return ss
        const v = verlauf(daten, p.uebung.id, einheit.datum)
        const vorige = v.length ? Math.max(0, ...v[v.length - 1].saetze.map((x) => x.last ?? 0)) : 0
        return ss.map((x) => (x.fertig ? x : { ...x, ...(vorige > 0 && x.last && x.last > vorige ? { last: vorige } : {}), rir: Math.min(4, (x.rir ?? 2) + 1) }))
      }),
    )
    setAngepasst([...angepasst, "form"])
    setToast("Heute ohne Steigerung und mit einer Wiederholung mehr im Tank. Fühlt es sich gut an, darfst du trotzdem nach oben anpassen.")
  }
  const frage: "form" | "pausen" | "seiten" | "drops" | "supersatz" | "weglassen" | "zurueck" | "vollepausen" | null =
    beginn === null
      ? !gefragt("form") && form.punkte >= 2 && !saetze.some((ss) => ss.some((x) => x.fertig))
        ? "form"
        : null
      : zuLang
        ? !gefragt("pausen") && kuerzen.gekuerzt.length && kuerzenSpart >= 1
          ? "pausen"
          : seiten.tausch.length
            ? "seiten"
            : drops.plaetze.length && drops.spart_min >= 1
              ? "drops"
              : superVorschlag.paare.length
            ? "supersatz"
            : !gefragt("weglassen") && (vorschlag.ganz.length || vorschlag.einSatz.length)
              ? "weglassen"
              : null
        : !gefragt("zurueck") && zurueckIdx.length && zurueckKosten <= luft - 1
          ? "zurueck"
          : !gefragt("vollepausen") && angepasst.indexOf("pausen") >= 0 && pausenKosten >= 1 && pausenKosten <= luft - 1
            ? "vollepausen"
            : null
  const frageAntwort = (ja: boolean) => {
    if (!frage) return
    if (!ja) return setAngepasst([...angepasst, ...(frage === "supersatz" ? paarMarken : frage === "seiten" ? seitenMarken : frage === "drops" ? dropMarken : []), frage + "-nein"])
    if (frage === "form") formAnpassen()
    else if (frage === "pausen") pausenKuerzenJa()
    else if (frage === "seiten") beidseitigJa()
    else if (frage === "drops") dropsJa()
    else if (frage === "supersatz") alsSupersatz()
    else if (frage === "weglassen") weglassen()
    else if (frage === "zurueck") zurueckHolen()
    else {
      setPlaetze(vollePausen)
      setAngepasst([...angepasst, "vollepausen"])
    }
  }
  const starten = () => {
    const t = Date.now()
    setGeschaetzt(Math.round(offenMin))
    setBeginn(t)
    setJetzt(t)
  }
  const superKnopf = superVorschlag.paare.length ? (
    <button type="button" className="knopf klein leise" onClick={alsSupersatz}>
      Zeit sparen (etwa {superVorschlag.spart_min} min): {superVorschlag.paare.map(([a, b]) => plaetze[a].uebung.name + " + " + plaetze[b].uebung.name).join(" und ")} als Supersatz, die Muskeln sind verschieden
    </button>
  ) : null
  const uhr = (min: number) => Math.floor(min) + ":" + String(Math.floor((min * 60) % 60)).padStart(2, "0")

  const warmHaken = (i: number, k: number, anzahl: number) => {
    if (gesperrt) return erstStarten()
    const key = i + "-" + k
    const an = warm.indexOf(key) >= 0
    setWarm(an ? warm.filter((x) => x !== key) : [...warm, key])
    // kurze Pausen beim Aufwärmen, vor dem ersten Arbeitssatz etwas länger
    if (!an) pauseSetzen(Date.now() + (k === anzahl - 1 ? 90 : 60) * 1000, k === anzahl - 1 ? plaetze[i].uebung.name + ", Satz 1" : "Nächster Aufwärmsatz", "Aufwärmpause")
  }

  // ---------- Zahlenfeld ----------
  const padOeffnen = (i: number, k: number, feld: Feld) => {
    if (gesperrt) return erstStarten()
    const s = saetze[i][k]
    const wert = feld === "kg" ? s.last : feld === "wdh" ? s.wdh : feld === "sek" ? (s.sekunden ?? 0) : Math.round((s.sekunden || 0) / 60)
    setPad({ i, k, feld, puffer: alsPuffer(wert), frisch: true })
    // Zeile über das Zahlenfeld holen
    setTimeout(() => {
      const r = document.getElementById("satz-" + i + "-" + k)?.getBoundingClientRect()
      const grenze = window.innerHeight - 400
      if (r && r.bottom > grenze) window.scrollBy({ top: r.bottom - grenze + 16, behavior: "smooth" })
    }, 30)
  }
  const padSchreiben = (pd: Pad, puffer: string) => {
    const x = zahlAus(puffer)
    const s = saetze[pd.i][pd.k]
    let neu: Partial<Eingabe> = {}
    if (pd.feld === "kg") neu = { last: x }
    else if (pd.feld === "wdh") neu = { wdh: x === null ? 0 : Math.round(x) }
    else if (pd.feld === "sek") neu = { sekunden: x === null ? 0 : Math.round(x) }
    else neu = { sekunden: Math.round((x ?? 0) * 60) }
    // Abgehakten Satz korrigiert: Plausibilität neu prüfen
    if (s.fertig && plaetze[pd.i].uebung.belastung === "gewicht" && (pd.feld === "kg" || pd.feld === "wdh")) neu.unplausibel = unplausibel({ ...s, ...neu }, verlauf(daten, plaetze[pd.i].uebung.id, einheit.datum)) || undefined
    setSatz(pd.i, pd.k, neu)
  }
  const padTaste = (k: string) => {
    if (!pad) return
    const st = taste(pad, k, pad.feld === "kg")
    setPad({ ...pad, ...st })
    padSchreiben(pad, st.puffer)
  }
  /** Schritt für Plus und Minus: beim Gewicht die nächste vorhandene Stufe. */
  const padSchritt = (pd: Pad, richtung: 1 | -1): number => {
    const x = zahlAus(pd.puffer)
    if (pd.feld !== "kg") {
      const schritt = pd.feld === "sek" ? 5 : 1
      return Math.max(0, (x ?? 0) + richtung * schritt)
    }
    const u = plaetze[pd.i].uebung
    const lasten = lastenAn(u, ort)
    const basis = x ?? plaetze[pd.i].vorgabe.last ?? lasten[0] ?? 0
    if (lasten.length) return richtung > 0 ? (x === null ? basis : hoeher(basis, lasten)) : niedriger(basis, lasten)
    const schritt = stangeVon(lastGeraet(u, ort), ort.gewichte) ? 2.5 : 1
    return Math.max(0, basis + richtung * schritt)
  }
  const padPlus = (richtung: 1 | -1) => {
    if (!pad) return
    const neu = alsPuffer(padSchritt(pad, richtung))
    setPad({ ...pad, puffer: neu, frisch: true })
    padSchreiben(pad, neu)
  }

  const erledigt = saetze.reduce((n, ss) => n + ss.filter((s) => s.fertig).length, 0)
  const gesamt = saetze.reduce((n, ss) => n + ss.length, 0)
  const ersteOffene = saetze.findIndex((ss) => ss.length > 0 && ss.some((s) => !s.fertig))
  // Nach einem Wechsel ist die angesteuerte Übung dran, sonst die erste mit offenen Sätzen
  const aktiveUebung = wechsel && saetze[wechsel.nach]?.some((s) => !s.fertig) ? wechsel.nach : ersteOffene
  /** Kurve einer Übung mit dem heutigen Stand aus den schon abgehakten Sätzen. */
  const kurveMitHeute = (i: number) => {
    const u = plaetze[i].uebung
    const punkte = kurvenPunkte(daten, u.id).filter((x) => x.datum !== einheit.datum)
    const fertig = saetze[i].filter((s) => s.fertig).map(({ fertig: _f, ...s }) => s)
    const wert = fertig.length ? Math.round(bestwert({ datum: einheit.datum, uebung: u.id, saetze: fertig }) * 2) / 2 : 0
    const kg = fertig.some((s) => s.last) || daten.protokoll.some((p) => p.uebung === u.id && p.saetze.some((s) => s.last))
    return { punkte: wert > 0 ? [...punkte, { datum: einheit.datum, wert }] : punkte, heute: wert > 0, kg, einheit: kg ? "kg" : u.belastung === "zeit" ? "s" : "Wdh" }
  }
  const vollstaendig = saetze.every((ss) => ss.some((s) => s.fertig))

  // Aufräumen: nach dem letzten Satz (oder mit „Training beenden“) beginnt ein Countdown; erst danach lässt sich das
  // Training beenden. Zurück geht nur, um doch noch weiterzutrainieren.
  const alleFertig = erledigt > 0 && saetze.every((ss) => ss.every((s) => s.fertig))
  const aufrRest = aufraeumenAb !== null ? Math.max(0, aufraeumenAb + aufrMin * 60000 - jetzt) : 0
  const aufraeumenStarten = () => {
    const t = Date.now()
    setAufraeumenAb(t)
    setJetzt(t)
    setPauseBis(null)
    setWechsel(null)
    void pauseStarten(t + aufrMin * 60000, "Aufräumen", "Danach Training beenden")
  }
  useEffect(() => {
    if (beginn !== null && aufrMin > 0 && alleFertig && aufraeumenAb === null) aufraeumenStarten()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleFertig])
  const zurueckZumTraining = () => {
    setAufraeumenAb(null)
    void pauseStoppen()
    if (!alleFertig) return
    // sonst den zuletzt abgehakten Satz wieder öffnen, damit das Aufräumen nicht sofort neu beginnt
    let bi = -1, bk = -1, bu = -Infinity
    saetze.forEach((ss, i) => ss.forEach((x, k) => {
      const u = x.um ?? 0
      if (x.fertig && u >= bu) [bi, bk, bu] = [i, k, u]
    }))
    if (bi >= 0) setSaetze(saetze.map((ss, i) => (i !== bi ? ss : ss.map((x, k) => (k === bk ? { ...x, fertig: false, um: undefined } : x)))))
  }
  // Pausenanzeige über anderen Apps (Lebenswelt-App): erlaubt? Nach der Rückkehr aus den Einstellungen neu prüfen
  const [ueberApps, setUeberApps] = useState<boolean | undefined>(() => bruecke()?.ueberApps?.())
  useEffect(() => {
    const f = () => document.visibilityState === "visible" && setUeberApps(bruecke()?.ueberApps?.())
    document.addEventListener("visibilitychange", f)
    return () => document.removeEventListener("visibilitychange", f)
  }, [])
  const [sperrNr, setSperrNr] = useState(0)
  useEffect(() => {
    if (aufraeumenAb === null) return
    // Zurückgeste schließt das Aufräumen nicht: Hinweis zeigen und die Ebene neu öffnen
    return ebeneOeffnen(() => {
      setToast("Erst aufräumen, dann lässt sich das Training beenden.")
      setSperrNr((n) => n + 1)
    }, "blatt")
  }, [aufraeumenAb, sperrNr])
  const beendenDruecken = () => {
    if (beginn !== null && aufrMin > 0 && aufraeumenAb === null) return aufraeumenStarten()
    fertig()
  }
  const fertig = () => {
    if (aufrMin > 0 && aufraeumenAb !== null && aufrRest > 0) return
    const protokolle: Protokoll[] = plaetze
      .map((p, i) => ({ datum: einheit.datum, uebung: p.uebung.id, saetze: saetze[i].filter((s) => s.fertig).map(({ fertig: _f, ...s }) => s), ...(p.uebung.id.startsWith(FREI) ? { name: p.uebung.name } : {}) }))
      .filter((p) => p.saetze.length > 0)
    try {
      entwurfLoeschen(localStorage, schluessel)
    } catch {
      /* egal */
    }
    void pauseStoppen()
    const ende = Date.now()
    // Zum Lernen: geplante Aufwärmsätze und Umbau je Übung, wie sie vor dem ersten Satz galten
    const warmPlan = plaetze.map((_, i) => aufwaermen(i).length)
    const messung = beginn !== null ? messen(plaetze, saetze, beginn, ende, warmPlan, umbauVoll) : {}
    props.abschliessen({ ...einheit, plaetze }, protokolle, vollstaendig, schmerzVor ?? undefined, beginn !== null ? { beginn, ende, budget, geschaetzt, messung } : undefined)
  }

  const tauschen = (i: number, id: string, nieWieder: boolean) => {
    const u = alternativen(profil, ort, plaetze[i].muster, plaetze[i].uebung.id).find((x) => x.id === id)
    if (!u) return
    const p = platzMit(profil, daten, einheit.datum, ort, plaetze[i], u)
    setPlaetze(plaetze.map((x, k) => (k === i ? p : x)))
    setSaetze(saetze.map((x, k) => (k === i ? start(p) : x)))
    if (nieWieder) props.ausschliessen(plaetze[i].uebung.id, id)
    setTausch(null)
    setTauschSuche("")
  }

  const vorgabeText = (p: Platz) => {
    const u = p.uebung
    const v = p.vorgabe
    if (p.plantext) return p.plantext
    if (p.rolle === "ausdauer") return v.saetze > 1 ? v.saetze + " Runden" : Math.round((v.last || 0) / 60) + " Minuten"
    const seite = u.einseitig ? (p.gleichzeitig ? " (beide Seiten gleichzeitig)" : " je Seite") : ""
    if (u.belastung === "zeit") return v.saetze + " × " + v.last + " s" + seite
    if (u.belastung === "distanz") return v.saetze + " × " + v.last + " m"
    return v.saetze + " × " + (v.wdh_von === v.wdh_bis ? v.wdh_von : v.wdh_von + " bis " + v.wdh_bis) + seite
  }

  const padAnzeige = (pd: Pad) => {
    const p = plaetze[pd.i]
    const u = p.uebung
    const s = saetze[pd.i][pd.k]
    const geraet = lastGeraet(u, ort)
    const stange = stangeVon(geraet, ort.gewichte)
    const wert = zahlAus(pd.puffer)
    const sch = pd.feld === "kg" && stange && wert ? scheibenProSeite(wert, stange, ort.gewichte.scheiben, ort.gewichte.scheiben_beliebig) : null
    const schritt = (r: 1 | -1) => {
      const d = Math.abs(padSchritt(pd, r) - (wert ?? 0))
      return (r > 0 ? "+" : "−") + (d ? zahl(d) : "")
    }
    const feldName = pd.feld === "kg" ? (geraet === "kurzhantel" ? "Gewicht je Hand (kg)" : "Gewicht (kg)") : pd.feld === "wdh" ? "Wiederholungen" : pd.feld === "sek" ? "Sekunden" : "Minuten"
    const gewicht = u.belastung === "gewicht"
    return (
      <Zahlenfeld
        uebung={u.name + " · Satz " + (pd.k + 1)}
        feld={feldName}
        anzeige={pd.puffer}
        minusText={schritt(-1)}
        plusText={schritt(1)}
        dezimal={pd.feld === "kg"}
        minus={() => padPlus(-1)}
        plus={() => padPlus(1)}
        taste={padTaste}
        weiterText={pd.feld === "kg" ? "Wdh →" : "← kg"}
        weiter={gewicht && (pd.feld === "kg" || pd.feld === "wdh") ? () => padOeffnen(pd.i, pd.k, pd.feld === "kg" ? "wdh" : "kg") : undefined}
        okText={s.fertig ? "OK" : "✓ Satz " + (pd.k + 1)}
        ok={() => {
          setPad(null)
          if (!s.fertig) abhaken(pd.i, pd.k)
        }}
        schliessen={() => setPad(null)}
        zusatz={sch && sch.length ? <Scheiben liste={sch} klein /> : undefined}
        pause={pauseBis !== null && rest > 0 ? Math.floor(rest / 60) + ":" + String(rest % 60).padStart(2, "0") : undefined}
      />
    )
  }

  return (
    <Seite titel={einheit.titel} untertitel={datumText(einheit.datum) + " · " + ort.name + " · etwa " + einheit.minuten + " min"} zurueck={{ text: "Zurück", onClick: props.zurueck }} rechts={<span className="satzzaehler">{erledigt}/{gesamt}</span>}
      leiste={
        <div className="pbalken dick" role="progressbar" aria-valuenow={erledigt} aria-valuemax={gesamt}>
          <div style={{ width: (gesamt ? (erledigt / gesamt) * 100 : 0) + "%" }} />
        </div>
      }>
      <div className={"zeitkarte" + (beginn !== null && zuLang ? " knapp" : "")}>
        {beginn === null ? (
          <>
            <div className="zeitwahl" role="group" aria-label="Zeit für heute">
              <span>Zeit für heute</span>
              <button type="button" className="textknopf" aria-label="5 Minuten weniger" onClick={() => setBudget(Math.max(15, budget - 5))}>
                −
              </button>
              <b>{budget} min</b>
              <button type="button" className="textknopf" aria-label="5 Minuten mehr" onClick={() => setBudget(Math.min(180, budget + 5))}>
                +
              </button>
            </div>
            <button type="button" className="knopf voll gross" onClick={starten}>
              Training starten
            </button>
            <p className="hinweistext klein">
              Ab dem Start zählt die Zeit, mit Aufwärmen und Aufräumen. Nach Plan brauchst du voraussichtlich etwa {Math.round(prog.gesamt)} min{prog.gesamt > budget + 1 ? ". Das ist mehr als deine Zeit: Nach dem Start fragt dich die App, ob sie zuerst die Pausen der Ergänzungsübungen kürzen soll." : "."}
            </p>
            {superKnopf}
          </>
        ) : (
          <>
            <div className="zeitzeile" role="timer">
              <b>{uhr(prog.vergangen)}</b> <span>von {budget} min</span> <span className="leise">· fertig nach etwa {Math.round(prog.gesamt)} min</span>
            </div>
            {angepasst.indexOf("pausen") >= 0 ? <small className="leise">Pausen der Ergänzungsübungen gekürzt, damit es in {budget} min passt. Die Hauptübungen behalten ihre Pause.</small> : null}
            {angepasst.indexOf("weglassen") >= 0 ? <small className="leise">Wie besprochen gekürzt, damit es in {budget} min passt.</small> : null}
            {zuLang && !frage && angepasst.some((k) => k.endsWith("-nein")) ? <small className="leise">Es wird etwas länger als {budget} min. Du hast entschieden, nichts weiter zu ändern.</small> : null}
            {ueberApps === false ? (
              <button type="button" className="knopf klein leise" onClick={() => bruecke()?.ueberAppsErlauben?.()}>
                Pausen-Timer auch über YouTube und anderen Apps anzeigen: erlauben
              </button>
            ) : null}
            {hauptPausenZuKurz(plaetze, saetze) ? <small className="leise">Deine Pausen bei den Hauptübungen sind deutlich kürzer als vorgesehen. Für die Kraft lieber die volle Pause nehmen.</small> : null}
          </>
        )}
      </div>
      {einheit.hinweise.map((h, i) => (
        <p key={i} className="hinweistext">
          {h}
        </p>
      ))}
      {reha ? (
        <div className="schmerzvorher">
          <span>
            <b>Schmerz gerade</b>
            <small>0 keiner, 10 der stärkste vorstellbare</small>
          </span>
          <select aria-label="Schmerz vor dem Training" className={schmerzVor === null ? "" : ampel(schmerzVor)} value={schmerzVor ?? ""} onChange={(e) => setSchmerzVor(e.target.value === "" ? null : Number(e.target.value))}>
            <option value="">wählen</option>
            {Array.from({ length: 11 }, (_, k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {reha && schmerzVor !== null && schmerzVor >= 7 ? <p className="hinweistext warnung">Heute sind die Schmerzen stark. Mach nur die Beweglichkeit und kurzes Gehen, oder leg einen Ruhetag ein. Bleibt es mehrere Tage so, bitte ärztlich abklären.</p> : null}
      {/* Aufwärmen: die Aufwärmsätze stehen bei den Übungen; nur in der Reha zusätzlich ein allgemeines Aufwärmen */}
      {reha && einheit.art !== "ausdauer" && einheit.art !== "mobilitaet" ? <p className="hinweistext">Aufwärmen (5 bis 10 min): in der Wohnung gehen oder locker Rad fahren, bis du dich warm fühlst.</p> : null}

      {plaetze.map((p, i) => {
        const u = p.uebung
        // Kraftkurve nur bei der Übung, an der gerade gearbeitet wird (erste mit offenen Sätzen)
        // Bei Schnellkraft (Würfe, Sprünge) sagt ein geschätztes Maximum nichts aus
        const kurve = i === aktiveUebung && p.rolle !== "mobil" && p.rolle !== "ausdauer" && p.rolle !== "schnellkraft" && u.muster.indexOf("schnellkraft") < 0 ? kurveMitHeute(i) : null
        const v = p.vorgabe
        const geraet = lastGeraet(u, ort)
        const lasten = lastenAn(u, ort)
        const alle = saetze[i].every((s) => s.fertig)
        const zeigeRir = !reha && p.rolle !== "mobil" && p.rolle !== "ausdauer" && u.belastung !== "zeit" && u.belastung !== "distanz"
        const zeigeSchmerz = reha && p.rolle !== "ausdauer"
        const form = formVon(p, saetze[i].length)
        const formWaehlbar = satzformVon({ ...v, saetze: saetze[i].length, topsatz: true }, undefined, u.belastung === "gewicht" && !reha && (p.rolle === "haupt" || p.rolle === "neben") && geraet !== "band") === "topsatz"
        const dropWaehlbar = dropGeht(p) && saetze[i].some((x) => !x.fertig)
        const dropOffen = saetze[i].find((x) => !x.fertig && x.drops?.length)
        const stange = stangeVon(geraet, ort.gewichte)
        const offenerSatz = saetze[i].find((x) => !x.fertig)
        const scheiben = stange && offenerSatz?.last ? scheibenProSeite(offenerSatz.last, stange, ort.gewichte.scheiben, ort.gewichte.scheiben_beliebig) : null
        const warmups = saetze[i].some((x) => x.fertig) ? [] : aufwaermen(i)
        // Supersatz: Karten der Gruppe farbig verbunden, Kopfzeile über der ersten, „ohne Pause weiter“ dazwischen
        const gr = p.gruppe ? plaetze.map((x, k) => (x.gruppe === p.gruppe ? k : -1)).filter((k) => k >= 0) : []
        const imSuper = gr.length > 1
        const grPos = gr.indexOf(i)
        const nachbarVorn = imSuper && grPos > 0 && gr[grPos - 1] === i - 1
        const nachbarHinten = imSuper && grPos < gr.length - 1 && gr[grPos + 1] === i + 1
        const farbe = imSuper ? SUPER_FARBEN[(p.gruppe as string).charCodeAt(0) % SUPER_FARBEN.length] : undefined
        return (
          <Fragment key={i + u.id}>
          {imSuper && grPos === 0 ? (
            <div className="superkopf" style={{ "--superfarbe": farbe } as CSSProperties}>
              <b>
                Supersatz {p.gruppe}
                {(() => {
                  const runden = Math.max(...gr.map((k) => saetze[k].length))
                  const fertigeRunden = Math.min(...gr.map((k) => saetze[k].filter((x) => x.fertig).length))
                  return runden > 0 ? " · Runde " + Math.min(runden, fertigeRunden + 1) + " von " + runden : ""
                })()}
              </b>
              <span>
                {gr.map((k) => plaetze[k].uebung.name).join(" ↔ ")}: im Wechsel, ohne Pause dazwischen. Pause erst nach {plaetze[gr[gr.length - 1]].uebung.name}, dann wieder {u.name}.
              </span>
            </div>
          ) : null}
          <section id={"uebung-" + i} style={imSuper ? ({ "--superfarbe": farbe } as CSSProperties) : undefined} className={"uebungskarte" + (alle ? " geschafft" : "") + (i === aktiveUebung && erledigt > 0 ? " dran" : "") + (imSuper ? " imsuper" + (nachbarVorn ? " supermitte-oben" : "") + (nachbarHinten ? " supermitte-unten" : "") : "")}>
            {i === aktiveUebung && erledigt > 0 ? <span className="dranmarke">Jetzt dran</span> : null}
            {wechsel && wechsel.nach === i && !saetze[i].some((x) => x.fertig) ? (
              <p className="wechselgrund">
                <Icon name="timer" groesse={15} /> {wechsel.grund}
              </p>
            ) : null}
            <div className="uebungskopf">
              <span className={"marke " + p.rolle}>{p.gruppe ? "Supersatz " + p.gruppe + (plaetze.slice(0, i + 1).filter((x) => x.gruppe === p.gruppe).length) : p.etikett || ROLLE[p.rolle]}</span>
              {u.golf && hatSport(profil, "golf") ? (
                <span className="marke golf mitsym">
                  <Sym name="golf" groesse={13} /> Golf
                </span>
              ) : null}
              <span className="flex" />
              {p.rolle !== "ausdauer" ? (
                <button type="button" className="rundknopf" aria-label="Übung tauschen" onClick={() => setTausch(i)}>
                  <Icon name="tauschen" groesse={17} />
                </button>
              ) : null}
              <button type="button" className="rundknopf info" aria-label="Anleitung" onClick={() => setInfo(u)}>
                <Icon name="info" groesse={18} />
              </button>
            </div>
            <h2 className="uebungsname" onClick={() => setInfo(u)}>
              {u.name}
            </h2>
            <Figur uebung={u} geraet={geraet} klein haltenS={u.belastung === "zeit" ? p.vorgabe.last || 30 : undefined} />
            {kurve && kurve.punkte.length ? (
              <button type="button" className="trainingskurve" onClick={() => setKurveOffen(i)} aria-label={"Kraftkurve " + u.name}>
                <span className="trainingskurvetext">
                  <small>{kurve.kg ? "Geschätztes Maximum" : "Bester Satz"}</small>
                  <b>
                    {zahl(kurve.punkte[kurve.punkte.length - 1].wert)} {kurve.einheit}
                  </b>
                  {kurve.heute ? <small className="heute">mit deinen Sätzen von heute</small> : null}
                </span>
                <span className="minikurve">
                  <Kurve punkte={kurve.punkte} einheit="" hoehe={56} mini />
                </span>
              </button>
            ) : null}
            <div className="vorgabezeile">
              <span className="vorgabe">{form === "topsatz" && !p.plantext ? "1 Topsatz + " + (saetze[i].length - 1) + " Back-off × " + mitte(v) : vorgabeText(p)}</span>
              {v.last !== null && u.belastung === "gewicht" ? <span className="vorgabe gewicht">{(form === "topsatz" ? "Top " : "") + lastText(v.last, geraet)}</span> : null}
              {form === "topsatz" && v.last !== null ? <span className="vorgabe gewicht leise">Back-off {lastText(backoffLast(v.last, lasten), geraet)}</span> : null}
              {zeigeRir ? (
                <button type="button" className="vorgabe tank" onClick={() => setRirHilfe(true)}>
                  {v.rir} im Tank
                </button>
              ) : null}
              {v.pause_s > 0 && p.rolle !== "ausdauer" ? <span className="vorgabe leise">Pause {v.pause_s >= 120 ? zahl(v.pause_s / 60) + " min" : v.pause_s + " s"}</span> : null}
            </div>
            <p className="begruendung">{v.begruendung}</p>
            {formWaehlbar || dropWaehlbar ? (
              <div className="satzform" role="group" aria-label="Satzform">
                <button type="button" className={form === "gleich" ? "an" : ""} aria-pressed={form === "gleich"} onClick={() => formWechseln(i, "gleich")}>
                  Gleiche Sätze
                </button>
                {formWaehlbar ? (
                  <button type="button" className={form === "topsatz" ? "an" : ""} aria-pressed={form === "topsatz"} onClick={() => formWechseln(i, "topsatz")}>
                    Topsatz + Back-off
                  </button>
                ) : null}
                {dropWaehlbar ? (
                  <button type="button" className={form === "drop" ? "an" : ""} aria-pressed={form === "drop"} onClick={() => formWechseln(i, "drop")}>
                    Dropsatz am Ende
                  </button>
                ) : null}
              </div>
            ) : null}
            {dropOffen && dropOffen.last ? (
              <div className="dropsteck">
                <small>Drop-Pins stecken{saetze[i].filter((x) => !x.fertig).length > 1 ? " (letzter Satz)" : ""}</small>
                <span>
                  Stift <b>{zahl(dropOffen.last)} kg</b>
                  {dropOffen.drops!.map((d, n) => (
                    <Fragment key={n}>
                      {" · "}Pin {n + 1} <b>{zahl(d.last)} kg</b>
                    </Fragment>
                  ))}
                </span>
                <small className="leise">Am Satzende an der Schnur ziehen und ohne Pause weiter, jede Stufe bis kurz vor dem Muskelversagen.</small>
              </div>
            ) : null}
            {form === "drop" ? <p className="leise klein satzformtext">Ein Dropsatz bringt etwa so viel Muskelaufbau wie mehrere normale Sätze, in deutlich weniger Zeit (Sødal et al. 2023). Im Wochenrückblick zählt jede Stufe als Satz.</p> : null}
            {form === "topsatz" ? <p className="leise klein satzformtext">Satz 1 schwer, danach etwa 10 % leichter. So bleiben die Wiederholungen in allen Sätzen stabil, statt nach dem ersten Satz einzubrechen (Helms et al. 2016).</p> : null}
            {scheiben && scheiben.length ? (
              <div className="scheibenzeile">
                <small>
                  Je Seite für {zahl(offenerSatz!.last!)} kg (Stange {zahl(stange)} kg)
                </small>
                <Scheiben liste={scheiben} />
              </div>
            ) : null}
            {geraet === "band" || daten.bandfarben?.[u.id] ? (
              <div className="bandwahl" role="group" aria-label="Bandfarbe">
                <small>Band{geraet === "band" && offenerSatz ? ": " + (bandVonStufe(offenerSatz.last)?.name ?? "wählen") : ""}</small>
                {(geraet === "band" ? BANDFARBEN.filter((_f, k) => !lasten.length || lasten.indexOf(k + 1) >= 0) : BANDFARBEN).map((f) => {
                  // Mit Band als Last ist die Farbe die Last der offenen Sätze, sonst nur ein Merker zur Übung
                  const an = geraet === "band" ? bandVonStufe(offenerSatz?.last)?.id === f.id : daten.bandfarben?.[u.id] === f.id
                  return (
                    <button
                      key={f.id}
                      type="button"
                      className={"bandfarbe" + (an ? " an" : "")}
                      style={{ background: f.farbe }}
                      aria-label={f.name}
                      aria-pressed={an}
                      onClick={() => {
                        if (geraet === "band") {
                          const st = stufeVonBand(f.id)
                          setSaetze(saetze.map((ss, x) => (x === i ? ss.map((y) => (y.fertig ? y : { ...y, last: st })) : ss)))
                          props.bandfarbe?.(u.id, f.id)
                        } else props.bandfarbe?.(u.id, an ? null : f.id)
                      }}
                    />
                  )
                })}
              </div>
            ) : null}
            {bandhilfeMoeglich(u) ? (
              <div className="bandwahl" role="group" aria-label="Unterstützung mit Band">
                <small>Unterstützung mit Band</small>
                {BANDFARBEN.map((f) => {
                  const an = daten.bandhilfe?.[u.id] === f.id
                  return <button key={f.id} type="button" className={"bandfarbe" + (an ? " an" : "")} style={{ background: f.farbe }} aria-label={f.name + ", " + hilfeText(hilfeKg(daten, f.id))} aria-pressed={an} onClick={() => hilfeWaehlen(i, an ? null : f.id)} />
                })}
                {daten.bandhilfe?.[u.id] ? (
                  <span className="hilfewert">
                    <button type="button" className="textknopf" aria-label="Weniger Unterstützung" onClick={() => hilfeKgAendern(i, -1)}>−</button>
                    <b>{hilfeText(hilfeKg(daten, daten.bandhilfe[u.id]))}</b>
                    <button type="button" className="textknopf" aria-label="Mehr Unterstützung" onClick={() => hilfeKgAendern(i, 1)}>+</button>
                    {daten.bandhilfe_kg?.[daten.bandhilfe[u.id]] === undefined ? <small> geschätzt</small> : null}
                  </span>
                ) : null}
              </div>
            ) : null}
            {p.warum?.length ? (
              <>
                <button type="button" className="textknopf warumknopf" aria-expanded={warumOffen === i} onClick={() => setWarumOffen(warumOffen === i ? null : i)}>
                  <Sym name="info" groesse={16} /> {warumOffen === i ? "Weniger" : "Warum diese Übung?"}
                </button>
                {warumOffen === i ? (
                  <ul className="warumliste">
                    {p.warum.map((g, k) => (
                      <li key={k}>{grundText(g)}</li>
                    ))}
                  </ul>
                ) : null}
              </>
            ) : null}
            {u.hinweis ? (
              <p className="tipp">
                <Sym name="gluehbirne" groesse={18} farbe="var(--gold)" />
                <span>{u.hinweis}</span>
              </p>
            ) : null}

            {warmups.length ? (
              <div className="aufwaermen">
                <div className="aufwaermkopf">
                  <b>Aufwärmen</b>
                  <small>zählt nicht als Arbeitssatz</small>
                </div>
                {warmups.map((w, k) => {
                  const an = warm.indexOf(i + "-" + k) >= 0
                  const sch = stange ? scheibenProSeite(w.last, stange, ort.gewichte.scheiben, ort.gewichte.scheiben_beliebig) : null
                  return (
                    <div key={k} className={"aufwaermsatz" + (an ? " fertig" : "")}>
                      <span className="aw">
                        {w.text ? "Leere Stange" : lastText(w.last, geraet)} × {w.wdh}
                      </span>
                      {sch && sch.length ? <Scheiben liste={sch} klein /> : <span className="flex" />}
                      <button type="button" className={"haken klein" + (an ? " an" : "")} onClick={() => warmHaken(i, k, warmups.length)} aria-label={"Aufwärmsatz " + (k + 1) + " erledigt"}>
                        <Icon name="haken" groesse={16} dick={3} />
                      </button>
                    </div>
                  )
                })}
              </div>
            ) : null}

            <div className="saetze">
              <div className="satzkopf">
                <span className="nr">Satz</span>
                {u.belastung === "gewicht" ? <span className="breit">{geraet === "band" ? "Band" : "Gewicht"}</span> : null}
                {u.belastung === "zeit" ? <span>{p.rolle === "ausdauer" && v.saetze === 1 ? "Minuten" : "Sekunden"}</span> : null}
                {u.belastung === "wiederholungen" && saetze[i].some((s) => s.hilfe_kg) ? <span>Hilfe</span> : null}
                {u.belastung === "gewicht" || u.belastung === "wiederholungen" ? <span>Wdh</span> : null}
                {zeigeRir ? <span>im Tank</span> : null}
                {zeigeSchmerz ? <span>Schmerz</span> : null}
                {u.belastung === "distanz" ? <span className="breit">Lauf</span> : null}
                <span className="hakenplatz" />
              </div>
              {saetze[i].map((s, k) => (
                <div key={k} id={"satz-" + i + "-" + k} className={"satz" + (s.fertig ? " fertig" : "") + (pad && pad.i === i && pad.k === k ? " bearbeitet" : "")}>
                  <span className={"nr" + (s.art === "top" ? " top" : "")}>{s.art === "top" ? "Top" : k + 1}</span>
                  {u.belastung === "distanz" ? <span className="breit leise">{v.last} m</span> : null}
                  {u.belastung === "gewicht" && geraet !== "band" ? (
                    <button type="button" className={"feldknopf breit" + (pad && pad.i === i && pad.k === k && pad.feld === "kg" ? " an" : "")} aria-label={"Gewicht Satz " + (k + 1)} onClick={() => padOeffnen(i, k, "kg")}>
                      {s.last === null ? <span className="leise">kg</span> : zahl(s.last) + " kg"}
                    </button>
                  ) : u.belastung === "gewicht" ? (
                    <select aria-label={geraet === "band" ? "Band" : "Gewicht"} className={geraet === "band" ? "bandauswahl" : undefined} style={geraet === "band" && bandVonStufe(s.last) ? { borderLeft: "10px solid " + bandVonStufe(s.last)!.farbe } : undefined} value={s.last ?? ""} onChange={(e) => setSatz(i, k, { last: e.target.value === "" ? null : Number(e.target.value) })}>
                      <option value="">{geraet === "band" ? "Band" : lasten.length ? "Gewicht" : "frei"}</option>
                      {lasten.map((x) => (
                        <option key={x} value={x}>
                          {lastText(x, geraet)}
                        </option>
                      ))}
                    </select>
                  ) : null}
                  {u.belastung === "zeit" && p.rolle === "ausdauer" && v.saetze === 1 ? (
                    <button type="button" className={"feldknopf" + (pad && pad.i === i && pad.k === k ? " an" : "")} aria-label="Minuten" onClick={() => padOeffnen(i, k, "min")}>
                      {Math.round((s.sekunden || 0) / 60)}
                    </button>
                  ) : u.belastung === "zeit" ? (
                    <button type="button" className={"feldknopf" + (pad && pad.i === i && pad.k === k ? " an" : "")} aria-label="Sekunden" onClick={() => padOeffnen(i, k, "sek")}>
                      {s.sekunden ?? 0}
                    </button>
                  ) : null}
                  {u.belastung === "wiederholungen" && saetze[i].some((x) => x.hilfe_kg) ? <span className="hilfekg">{s.hilfe_kg ? hilfeText(s.hilfe_kg) : "ohne"}</span> : null}
                  {u.belastung === "gewicht" || u.belastung === "wiederholungen" ? (
                    <button type="button" className={"feldknopf" + (pad && pad.i === i && pad.k === k && pad.feld === "wdh" ? " an" : "")} aria-label={"Wiederholungen Satz " + (k + 1)} onClick={() => padOeffnen(i, k, "wdh")}>
                      {s.wdh}
                    </button>
                  ) : null}
                  {zeigeRir ? (
                    <label className="mini">
                      <select aria-label="Wiederholungen im Tank" value={s.rir} onChange={(e) => setSatz(i, k, { rir: Number(e.target.value) })}>
                        {[0, 1, 2, 3, 4, 5].map((r) => (
                          <option key={r} value={r}>
                            {r === 5 ? "5+" : r}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}
                  {zeigeSchmerz ? (
                    <label className="mini">
                      <select aria-label="Schmerz 0 bis 10" className={ampel(s.schmerz ?? 0)} value={s.schmerz ?? 0} onChange={(e) => setSatz(i, k, { schmerz: Number(e.target.value) })}>
                        {Array.from({ length: 11 }, (_, n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}
                  <button type="button" className={"haken" + (s.fertig ? " an" : "")} onClick={() => abhaken(i, k)} aria-label={"Satz " + (k + 1) + " erledigt"}>
                    <Icon name="haken" groesse={20} dick={3} />
                  </button>
                  {s.drops?.length ? (
                    <div className="dropstufen">
                      {s.drops.map((d, n) => (
                        <span key={n} className="dropstufe">
                          <span className="leise">↓ Pin {n + 1}</span>
                          <b>{zahl(d.last)} kg</b>
                          <span className="leise">×</span>
                          <input
                            type="number"
                            inputMode="numeric"
                            min={0}
                            max={60}
                            aria-label={"Wiederholungen Drop " + (n + 1) + " Satz " + (k + 1)}
                            value={d.wdh}
                            onChange={(e) => setSatz(i, k, { drops: s.drops!.map((x, m) => (m === n ? { ...x, wdh: Math.max(0, Math.min(60, Number(e.target.value) || 0)) } : x)) })}
                          />
                        </span>
                      ))}
                      <button type="button" className="textknopf klein" aria-label={"Drops entfernen Satz " + (k + 1)} onClick={() => setSatz(i, k, { drops: undefined })}>
                        ohne Drops
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
              {saetze[i].map((s, k) =>
                s.fertig && s.unplausibel ? (
                  <div key={"p" + k} className="pruefhinweis">
                    <span>
                      <b>Satz {k + 1} prüfen:</b> {zahl(s.last || 0)} kg × {s.wdh} liegt weit über deinem bisherigen Maximum. Vertippt? Bis du es bestätigst, zählt der Satz nicht für Maximum und Steigerung.
                    </span>
                    <span className="pruefknoepfe">
                      <button type="button" className="knopf klein" onClick={() => padOeffnen(i, k, "kg")}>
                        Korrigieren
                      </button>
                      <button type="button" className="knopf klein leise" onClick={() => setSatz(i, k, { unplausibel: undefined })}>
                        Stimmt so
                      </button>
                    </span>
                  </div>
                ) : null,
              )}
              {anpassungen[i] ? (
                <p className={"anpassung " + anpassungen[i]!.richtung}>
                  <Sym name={anpassungen[i]!.richtung === "hoch" ? "kurve" : anpassungen[i]!.richtung === "runter" ? "pflaster" : "haken"} groesse={18} />
                  <span>
                    <b>Nach Satz {anpassungen[i]!.satz}:</b> {anpassungen[i]!.text}
                  </span>
                </p>
              ) : null}
              <div className="satzknoepfe">
                <button type="button" className="textknopf" onClick={() => setSaetze(saetze.map((ss, a) => (a === i ? [...ss, { ...ss[ss.length - 1], fertig: false }] : ss)))}>
                  + Satz
                </button>
                {saetze[i].length > 1 ? (
                  <button type="button" className="textknopf" onClick={() => setSaetze(saetze.map((ss, a) => (a === i ? ss.slice(0, -1) : ss)))}>
                    − Satz
                  </button>
                ) : null}
              </div>
            </div>
          </section>
          {nachbarHinten ? (
            <div className="superband" style={{ "--superfarbe": farbe } as CSSProperties} aria-hidden="true">
              ↓ ohne Pause weiter
            </div>
          ) : null}
          </Fragment>
        )
      })}

      <button type="button" className="knopf voll gross" disabled={erledigt === 0} onClick={beendenDruecken}>
        Training beenden
      </button>
      {!vollstaendig && erledigt > 0 ? <p className="hinweistext klein mitte">Noch nicht jede Übung eingetragen. Abschließen geht trotzdem, fehlende Übungen zählen dann nicht für den Fortschritt.</p> : null}

      {pauseBis !== null && rest > 0 && !pad ? (
        <div className="pausenleiste">
          <div className="pausenring">
            <Icon name="timer" groesse={20} />
          </div>
          <div className="pausentext">
            <small>{pauseGrund === "Aufwärmpause" ? pauseGrund : wechsel && !saetze[wechsel.nach]?.some((x) => x.fertig) ? "Wechsel zu " + plaetze[wechsel.nach].uebung.name : "Pause"}</small>
            <b>
              {Math.floor(rest / 60)}:{String(rest % 60).padStart(2, "0")}
            </b>
            {pauseGrund && pauseGrund !== "Aufwärmpause" ? <small className="pausengrund">{pauseGrund}</small> : null}
          </div>
          <button type="button" className="knopf klein leise" onClick={() => pauseSetzen(pauseBis + 30000)}>
            +30 s
          </button>
          <button type="button" className="knopf klein" onClick={() => pauseSetzen(null)}>
            Weiter
          </button>
        </div>
      ) : null}

      {aufraeumenAb !== null ? (
        <div className="aufraeumen" role="dialog" aria-modal="true" aria-label="Aufräumen">
          <div className="aufraeumenkarte">
            <h2>Aufräumen</h2>
            <div className="aufraeumenuhr" role="timer">
              {Math.floor(aufrRest / 60000)}:{String(Math.floor((aufrRest % 60000) / 1000)).padStart(2, "0")}
            </div>
            <p>Scheiben abnehmen, Hanteln und Stange zurück, Bank und Griffe abwischen. Erst danach lässt sich das Training beenden.</p>
            <button type="button" className="knopf voll gross" disabled={aufrRest > 0} onClick={fertig}>
              {aufrRest > 0 ? "Training beenden geht nach dem Aufräumen" : "Training beenden"}
            </button>
            <button type="button" className="textknopf" onClick={zurueckZumTraining}>
              Doch noch nicht fertig: zurück zum Training
            </button>
          </div>
        </div>
      ) : null}

      {/* Rückfrage bei knapper Zeit: erst nach dem Satz zeigen, nicht während Zahlen eingetippt werden */}
      <Blatt offen={frage !== null && !pad && aufraeumenAb === null} onClose={() => frageAntwort(false)} titel={frage === "form" ? "Tagesform heute schwach" : (frage === "zurueck" || frage === "vollepausen" ? "Du liegst gut in der Zeit: etwa " : "Es wird knapp: etwa ") + Math.round(prog.gesamt) + " von " + budget + " min"}>
        {frage === "form" ? (
          <p className="infokurz">
            Laut Uhr: {form.gruende.join(", ")}. Soll ich die Gewichte heute nicht steigern (höchstens wie beim letzten Mal) und eine Wiederholung mehr im Tank lassen? Die Sätze und Pausen bleiben wie geplant.
          </p>
        ) : null}
        {frage === "pausen" ? (
          <>
            <p className="infokurz">
              Soll ich die Pausen bei {kuerzen.gekuerzt.join(", ")} kürzen (auf 60 bis 90 s)? Das spart etwa {kuerzenSpart} min. Die Hauptübungen behalten ihre volle Pause.
            </p>
          </>
        ) : frage === "seiten" ? (
          <p className="infokurz">
            Soll ich heute einmalig beidseitig statt einseitig machen: {seiten.tausch.map(seitenText).join("; ")}? Beide Seiten in einem Satz spart etwa {seitenSpart} min. Das Gewicht ist umgerechnet (beidseitig schafft jede Seite etwas weniger als allein). Dein Plan bleibt einseitig.
          </p>
        ) : frage === "drops" ? (
          <p className="infokurz">
            Soll ich bei {drops.plaetze.map((i) => plaetze[i].uebung.name).join(" und ")} die letzten zwei Sätze als einen Dropsatz mit den Drop-Pins machen? Das spart etwa {Math.max(1, Math.round(drops.spart_min * faktor))} min und bringt laut Studien etwa gleich viel (Sødal et al. 2023).
          </p>
        ) : frage === "supersatz" ? (
          <p className="infokurz">
            Soll ich {superVorschlag.paare.map(([a, b]) => plaetze[a].uebung.name + " und " + plaetze[b].uebung.name).join(" sowie ")} als Supersatz im Wechsel machen? Die Muskelgruppen sind verschieden, das spart etwa {superVorschlag.spart_min} min.
          </p>
        ) : frage === "weglassen" ? (
          <p className="infokurz">
            Soll ich {[...vorschlag.ganz.map((i) => plaetze[i].uebung.name), ...(vorschlag.einSatz.length ? ["je einen Satz bei " + vorschlag.einSatz.map((i) => plaetze[i].uebung.name).join(", ")] : [])].join(" und ")} weglassen? Das spart etwa {weglassenSpart} min. Die Hauptübungen bleiben vollständig.
          </p>
        ) : frage === "zurueck" ? (
          <p className="infokurz">
            Die Zeit reicht doch: Soll {zurueckIdx.map((i) => (entfernt[i] > 1 ? entfernt[i] + " Sätze " : "der Satz ") + "bei " + plaetze[i].uebung.name).join(" und ")} wieder dazukommen, wie im Plan? Das kostet etwa {Math.max(1, zurueckKosten)} min.
          </p>
        ) : frage === "vollepausen" ? (
          <p className="infokurz">Die Zeit reicht doch: Sollen die Ergänzungsübungen wieder ihre volle Pause bekommen? Das kostet etwa {pausenKosten} min.</p>
        ) : null}
        <div className="knopfreihe">
          <button type="button" className="knopf voll" onClick={() => frageAntwort(true)}>
            Ja, so machen
          </button>
          <button type="button" className="knopf voll leise" onClick={() => frageAntwort(false)}>
            Nein, so lassen
          </button>
        </div>
      </Blatt>

      <Blatt offen={tausch !== null} onClose={() => { setTausch(null); setTauschSuche("") }} titel="Übung tauschen">
        {tausch !== null ? (
          <>
            <label className="suchfeld">
              <Icon name="suche" groesse={18} />
              <input type="search" placeholder="Suchen, z. B. TRX oder Kabel" value={tauschSuche} onChange={(e) => setTauschSuche(e.target.value)} />
            </label>
            <p className="infokurz">„Heute“ tauscht nur für diese Einheit. „Immer“ nimmt künftig statt {plaetze[tausch].uebung.name} die neue Übung, auch in deinem eigenen Plan.</p>
            <Gruppe>
              {alternativen(profil, ort, plaetze[tausch].muster, plaetze[tausch].uebung.id)
                .filter((a) => {
                  const q = suchNormal(tauschSuche)
                  return !q || [a.name, ...(a.auch || [])].some((t) => suchNormal(t).includes(q))
                })
                .sort((a, b) => (hatSport(profil, "golf") ? (b.golf || 0) - (a.golf || 0) : 0) || a.name.localeCompare(b.name, "de"))
                .map((a) => (
                  <Zeile
                    key={a.id}
                    titel={a.name}
                    untertitel={a.info.kurz}
                    rechts={
                      <span className="tauschknoepfe">
                        <button type="button" className="knopf klein" onClick={() => tauschen(tausch, a.id, false)}>
                          Heute
                        </button>
                        <button type="button" className="knopf klein leise" onClick={() => tauschen(tausch, a.id, true)}>
                          Immer
                        </button>
                      </span>
                    }
                  />
                ))}
            </Gruppe>
          </>
        ) : null}
      </Blatt>

      <Blatt offen={rirHilfe} onClose={() => setRirHilfe(false)} titel="Was heißt „im Tank“?">
        <p className="infokurz">Wie viele saubere Wiederholungen du am Ende des Satzes noch geschafft hättest (englisch RIR, reps in reserve).</p>
        <Gruppe>
          <Zeile titel="0 im Tank" untertitel="Keine einzige mehr möglich, Muskelversagen." />
          <Zeile titel="1 im Tank" untertitel="Eine wäre noch gegangen, sehr hart." />
          <Zeile titel="2 bis 3 im Tank" untertitel="Fordernd, aber mit Reserve. Hier liegt das meiste Training." />
          <Zeile titel="4 und mehr" untertitel="Locker, zum Aufwärmen oder in der Entlastungswoche." />
        </Gruppe>
        <p className="gruppenfuss">Ehrlich schätzen: Danach richtet sich das Gewicht der nächsten Einheit. Die Schätzung wird mit Übung genauer (Zourdos et al. 2016).</p>
      </Blatt>

      <Blatt offen={kurveOffen !== null} onClose={() => setKurveOffen(null)} titel={kurveOffen !== null ? plaetze[kurveOffen].uebung.name : ""}>
        {kurveOffen !== null ? (
          <>
            <p className="infokurz">{kurveMitHeute(kurveOffen).kg ? "Geschätztes Maximum (1 Wiederholung) je Einheit, der letzte Punkt mit deinen Sätzen von heute." : "Bester Satz je Einheit, der letzte Punkt mit deinen Sätzen von heute."}</p>
            <Kurve punkte={kurveMitHeute(kurveOffen).punkte} einheit={kurveMitHeute(kurveOffen).einheit} hoehe={190} />
          </>
        ) : null}
      </Blatt>
      <UebungInfoBlatt uebung={info} onClose={() => setInfo(null)} />

      {toast ? (
        <div className="toast" role="status" onClick={() => setToast(null)}>
          <Sym name="pokal" groesse={20} farbe="var(--gold)" />
          <span>{toast}</span>
        </div>
      ) : null}
      {pad ? <div className="zfplatz" aria-hidden="true" /> : null}
      {pad ? padAnzeige(pad) : null}
    </Seite>
  )
}
