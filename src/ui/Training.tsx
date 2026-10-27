// Eine Einheit durchführen: Vorgaben sehen, Sätze abhaken, Pause läuft automatisch, am Ende gibt es XP.

import { hatSport } from "../logik/auswahl"
import { useEffect, useMemo, useRef, useState } from "react"
import { alternativen, lastGeraet, lastenAn, platzMit, verlauf } from "../logik/plan"
import { hoeher, lastText, niedriger } from "../logik/gewichte"
import { pauseNachSatz, satzAnpassung, type Anpassung } from "../logik/progression"
import { aufwaermSaetze, backoffLast, backoffNachTopsatz, neuerBestwert, satzformVon, scheibenProSeite, stangeVon, unplausibel } from "../logik/satzhilfen"
import { rehaAktiv, rehaAnpassung } from "../logik/reha"

/** Farbe der Schmerz-Ampel: 0 bis 2 grün, 3 bis 5 gelb, darüber rot. */
const ampel = (n: number) => (n > 5 ? "ampel rot" : n >= 3 ? "ampel gelb" : "ampel gruen")
import type { Daten, Einheit, Platz, Protokoll, Satz, Satzform, Uebung, Vorgabe } from "../logik/typen"
import { Blatt, Gruppe, Icon, Seite, useEbene, Zeile } from "./ios"
import { pauseStarten, pauseStoppen } from "./pausenTimer"
import { ROLLE, datumText, grundText, zahl } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"
import { Sym } from "./symbole"
import { FREI } from "../daten/uebungen/index"
import Figur from "./Figur"
import { wechselPause } from "../logik/wechsel"
import { Kurve, kurvenPunkte } from "./Fortschritt"
import { bestwert } from "../logik/spiel"
import { Scheiben } from "./Scheiben"
import { alsPuffer, taste, zahlAus, Zahlenfeld, type Eingabestand } from "./Zahlenfeld"
import { useWachHalten } from "./wachHalten"

type Eingabe = Satz & { fertig: boolean }
/** ort: Kennung des Orts (Name, Geräte, Gewichte), für den die Vorgaben gerechnet wurden */
type Entwurf = { schluessel: string; plaetze: Platz[]; saetze: Eingabe[][]; ort?: string; warm?: string[] }
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

const ENTWURF = "trainme.entwurf"

function ladeEntwurf(schluessel: string): Entwurf | null {
  try {
    const e = JSON.parse(localStorage.getItem(ENTWURF) || "null") as Entwurf | null
    return e && e.schluessel === schluessel ? e : null
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
    return { last, wdh: mitte(v), rir: v.rir, fertig: false }
  })
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

/** Übliche Kennfarben von Widerstandsbändern, leicht bis schwer (wie im Kraftbuch). */
const BANDFARBEN = [
  { id: "gelb", name: "Gelb", farbe: "#f2c94c" },
  { id: "rot", name: "Rot", farbe: "#e05252" },
  { id: "schwarz", name: "Schwarz", farbe: "#2b2b2b" },
  { id: "lila", name: "Lila", farbe: "#8e5bd6" },
  { id: "grün", name: "Grün", farbe: "#3fa65a" },
  { id: "blau", name: "Blau", farbe: "#3b7be0" },
]

export default function Training(props: { daten: Daten; einheit: Einheit; zurueck: () => void; abschliessen: (e: Einheit, p: Protokoll[], vollstaendig: boolean, schmerzVor?: number) => void; ausschliessen: (id: string) => void; bandfarbe?: (id: string, farbe: string | null) => void; satzform?: (id: string, form: Satzform) => void }) {
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
  const formVon = (p: Platz, anzahl = p.vorgabe.saetze): Satzform =>
    satzformVon({ ...p.vorgabe, saetze: anzahl }, formWahl[p.uebung.id] ?? daten.satzform?.[p.uebung.id], p.uebung.belastung === "gewicht" && !reha && (p.rolle === "haupt" || p.rolle === "neben") && lastGeraet(p.uebung, ort) !== "band")
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
  const [info, setInfo] = useState<Uebung | null>(null)
  const [kurveOffen, setKurveOffen] = useState<number | null>(null)
  const [wechsel, setWechsel] = useState<{ nach: number; grund: string } | null>(null)
  const [rirHilfe, setRirHilfe] = useState(false)
  const [warumOffen, setWarumOffen] = useState<number | null>(null)
  const [anpassungen, setAnpassungen] = useState<Record<number, (Anpassung & { satz: number }) | undefined>>({})
  const gepiept = useRef(false)

  useEffect(() => {
    try {
      localStorage.setItem(ENTWURF, JSON.stringify({ schluessel, plaetze, saetze, ort: kennung, warm }))
    } catch {
      /* Speicher voll oder gesperrt */
    }
  }, [schluessel, plaetze, saetze, kennung, warm])

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

  const abhaken = (i: number, k: number) => {
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
              if (y === k) return { ...t, fertig: !t.fertig, unplausibel: pruefen || undefined }
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
      if (gruppe.length > 1 && gruppe.indexOf(i) < gruppe.length - 1) {
        // Supersatz: ohne Pause weiter zur nächsten Übung der Gruppe
        pauseSetzen(null)
      } else if (gruppe.length > 1) {
        // Letzte Übung der Gruppe: Pause, danach wieder die erste
        const erste = gruppe[0]
        const offen = saetze[erste].some((x) => !x.fertig)
        if (offen) pauseSetzen(Date.now() + pz.sekunden * 1000, plaetze[erste].uebung.name + ", Satz " + (k + 2), pz.grund)
        else uebungFertig(i)
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
    const neu = saetze[i].map((s, k): Eingabe => {
      if (f === "gleich") return { ...s, art: undefined, last: s.fertig || k === 0 ? s.last : (p.vorgabe.last ?? topLast ?? s.last) }
      if (k === 0) return { ...s, art: "top" }
      return { ...s, art: "backoff", last: s.fertig ? s.last : (backoff ?? s.last) }
    })
    setSaetze(saetze.map((ss, x) => (x === i ? neu : ss)))
    setAnpassungen({ ...anpassungen, [i]: undefined })
  }

  /** Aufwärmsätze einer Hauptübung mit Gewicht, aus dem Gewicht des ersten Arbeitssatzes. */
  const ersteHaupt = plaetze.findIndex((p) => p.rolle === "haupt" && p.uebung.belastung === "gewicht")
  const aufwaermen = (i: number) => {
    const p = plaetze[i]
    const arbeit = saetze[i][0]?.last
    if (reha || p.rolle !== "haupt" || p.uebung.belastung !== "gewicht" || !arbeit) return []
    return aufwaermSaetze(arbeit, lastGeraet(p.uebung, ort), ort.gewichte, lastenAn(p.uebung, ort), i === ersteHaupt)
  }
  const warmHaken = (i: number, k: number, anzahl: number) => {
    const key = i + "-" + k
    const an = warm.indexOf(key) >= 0
    setWarm(an ? warm.filter((x) => x !== key) : [...warm, key])
    // kurze Pausen beim Aufwärmen, vor dem ersten Arbeitssatz etwas länger
    if (!an) pauseSetzen(Date.now() + (k === anzahl - 1 ? 90 : 60) * 1000, k === anzahl - 1 ? plaetze[i].uebung.name + ", Satz 1" : "Nächster Aufwärmsatz", "Aufwärmpause")
  }

  // ---------- Zahlenfeld ----------
  const padOeffnen = (i: number, k: number, feld: Feld) => {
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

  const fertig = () => {
    const protokolle: Protokoll[] = plaetze
      .map((p, i) => ({ datum: einheit.datum, uebung: p.uebung.id, saetze: saetze[i].filter((s) => s.fertig).map(({ fertig: _f, ...s }) => s), ...(p.uebung.id.startsWith(FREI) ? { name: p.uebung.name } : {}) }))
      .filter((p) => p.saetze.length > 0)
    try {
      localStorage.removeItem(ENTWURF)
    } catch {
      /* egal */
    }
    void pauseStoppen()
    props.abschliessen({ ...einheit, plaetze }, protokolle, vollstaendig, schmerzVor ?? undefined)
  }

  const tauschen = (i: number, id: string, nieWieder: boolean) => {
    const u = alternativen(profil, ort, plaetze[i].muster, plaetze[i].uebung.id).find((x) => x.id === id)
    if (!u) return
    const p = platzMit(profil, daten, einheit.datum, ort, plaetze[i], u)
    setPlaetze(plaetze.map((x, k) => (k === i ? p : x)))
    setSaetze(saetze.map((x, k) => (k === i ? start(p) : x)))
    if (nieWieder) props.ausschliessen(plaetze[i].uebung.id)
    setTausch(null)
  }

  const vorgabeText = (p: Platz) => {
    const u = p.uebung
    const v = p.vorgabe
    if (p.plantext) return p.plantext
    if (p.rolle === "ausdauer") return v.saetze > 1 ? v.saetze + " Runden" : Math.round((v.last || 0) / 60) + " Minuten"
    if (u.belastung === "zeit") return v.saetze + " × " + v.last + " s" + (u.einseitig ? " je Seite" : "")
    if (u.belastung === "distanz") return v.saetze + " × " + v.last + " m"
    return v.saetze + " × " + (v.wdh_von === v.wdh_bis ? v.wdh_von : v.wdh_von + " bis " + v.wdh_bis) + (u.einseitig ? " je Seite" : "")
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
      {einheit.art !== "ausdauer" ? <p className="hinweistext">{reha ? "Aufwärmen (5 bis 10 min): in der Wohnung gehen oder locker Rad fahren, bis du dich warm fühlst." : "Aufwärmen (etwa 5 min): locker bewegen. Die Aufwärmsätze mit Gewicht stehen bei den Hauptübungen."}</p> : null}

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
        const stange = stangeVon(geraet, ort.gewichte)
        const offenerSatz = saetze[i].find((x) => !x.fertig)
        const scheiben = stange && offenerSatz?.last ? scheibenProSeite(offenerSatz.last, stange, ort.gewichte.scheiben, ort.gewichte.scheiben_beliebig) : null
        const warmups = saetze[i].some((x) => x.fertig) ? [] : aufwaermen(i)
        return (
          <section key={i + u.id} id={"uebung-" + i} className={"uebungskarte" + (alle ? " geschafft" : "") + (i === aktiveUebung && erledigt > 0 ? " dran" : "")}>
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
            {formWaehlbar ? (
              <div className="satzform" role="group" aria-label="Satzform">
                <button type="button" className={form === "gleich" ? "an" : ""} aria-pressed={form === "gleich"} onClick={() => formWechseln(i, "gleich")}>
                  Gleiche Sätze
                </button>
                <button type="button" className={form === "topsatz" ? "an" : ""} aria-pressed={form === "topsatz"} onClick={() => formWechseln(i, "topsatz")}>
                  Topsatz + Back-off
                </button>
              </div>
            ) : null}
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
                <small>Band</small>
                {BANDFARBEN.map((f) => (
                  <button key={f.id} type="button" className={"bandfarbe" + (daten.bandfarben?.[u.id] === f.id ? " an" : "")} style={{ background: f.farbe }} aria-label={f.name} aria-pressed={daten.bandfarben?.[u.id] === f.id} onClick={() => props.bandfarbe?.(u.id, daten.bandfarben?.[u.id] === f.id ? null : f.id)} />
                ))}
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
                {u.belastung === "gewicht" ? <span className="breit">Gewicht</span> : null}
                {u.belastung === "zeit" ? <span>{p.rolle === "ausdauer" && v.saetze === 1 ? "Minuten" : "Sekunden"}</span> : null}
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
                    <select aria-label="Gewicht" value={s.last ?? ""} onChange={(e) => setSatz(i, k, { last: e.target.value === "" ? null : Number(e.target.value) })}>
                      <option value="">{lasten.length ? "Gewicht" : "frei"}</option>
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
        )
      })}

      <button type="button" className="knopf voll gross" disabled={erledigt === 0} onClick={fertig}>
        Einheit abschließen
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

      <Blatt offen={tausch !== null} onClose={() => setTausch(null)} titel="Übung tauschen">
        {tausch !== null ? (
          <>
            <p className="infokurz">„Heute“ tauscht nur für diese Einheit. „Immer“ schließt {plaetze[tausch].uebung.name} künftig aus.</p>
            <Gruppe>
              {alternativen(profil, ort, plaetze[tausch].muster, plaetze[tausch].uebung.id)
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
