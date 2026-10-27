// Eine Einheit durchführen: Vorgaben sehen, Sätze abhaken, Pause läuft automatisch, am Ende gibt es XP.

import { hatSport } from "../logik/auswahl"
import { useEffect, useMemo, useRef, useState } from "react"
import { alternativen, lastGeraet, lastenAn, platzMit, verlauf } from "../logik/plan"
import { lastText } from "../logik/gewichte"
import { satzAnpassung, type Anpassung } from "../logik/progression"
import { rehaAktiv, rehaAnpassung } from "../logik/reha"

/** Farbe der Schmerz-Ampel: 0 bis 2 grün, 3 bis 5 gelb, darüber rot. */
const ampel = (n: number) => (n > 5 ? "ampel rot" : n >= 3 ? "ampel gelb" : "ampel gruen")
import type { Daten, Einheit, Platz, Protokoll, Satz, Uebung } from "../logik/typen"
import { Blatt, Gruppe, Icon, Seite, Zeile } from "./ios"
import { pauseStarten, pauseStoppen } from "./pausenTimer"
import { ROLLE, datumText, grundText, zahl } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"
import { Sym } from "./symbole"
import { FREI } from "../daten/uebungen/index"
import Figur from "./Figur"
import { wechselPause } from "../logik/wechsel"
import { Kurve, kurvenPunkte } from "./Fortschritt"
import { bestwert } from "../logik/spiel"

type Eingabe = Satz & { fertig: boolean }
/** ort: Kennung des Orts (Name, Geräte, Gewichte), für den die Vorgaben gerechnet wurden */
type Entwurf = { schluessel: string; plaetze: Platz[]; saetze: Eingabe[][]; ort?: string }

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

function startSaetze(p: Platz, daten: Daten): Eingabe[] {
  const v = p.vorgabe
  const letzte = verlauf(daten, p.uebung.id).slice(-1)[0]
  const last = v.last !== null && p.uebung.belastung === "gewicht" ? v.last : letzte && letzte.saetze[0] && p.uebung.belastung === "gewicht" ? letzte.saetze[0].last : null
  return Array.from({ length: v.saetze }, () => {
    if (p.uebung.belastung === "zeit") return { last: null, wdh: 1, rir: v.rir, sekunden: v.last || 30, fertig: false }
    if (p.uebung.belastung === "distanz") return { last: null, wdh: 1, rir: 4, fertig: false }
    // Vorbelegt mit der Mitte des Bereichs: Wer nur abhakt, trägt keine zu optimistischen Werte ein
    return { last, wdh: Math.round((v.wdh_von + v.wdh_bis) / 2), rir: v.rir, fertig: false }
  })
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

export default function Training(props: { daten: Daten; einheit: Einheit; zurueck: () => void; abschliessen: (e: Einheit, p: Protokoll[], vollstaendig: boolean, schmerzVor?: number) => void; ausschliessen: (id: string) => void; bandfarbe?: (id: string, farbe: string | null) => void }) {
  const { daten, einheit } = props
  const profil = daten.profil!
  // Reha: Schmerz je Satz statt Reserve, Schmerz vor dem Training
  const reha = rehaAktiv(profil)
  const [schmerzVor, setSchmerzVor] = useState<number | null>(null)
  const ort = profil.orte[einheit.ort] || profil.orte[0]
  const schluessel = einheit.datum + "|" + einheit.titel
  const kennung = ortKennung(ort)
  const gespeichert = useMemo(() => {
    const e = ladeEntwurf(schluessel)
    // Ort oder Ausstattung seitdem geändert: Vorschläge neu rechnen, Abgehaktes behalten
    return e && e.ort !== kennung ? { ...e, ...entwurfAnpassen(e, einheit.plaetze, (p) => startSaetze(p, daten)) } : e
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schluessel])
  const [plaetze, setPlaetze] = useState<Platz[]>(gespeichert ? gespeichert.plaetze : einheit.plaetze)
  const [saetze, setSaetze] = useState<Eingabe[][]>(gespeichert ? gespeichert.saetze : einheit.plaetze.map((p) => startSaetze(p, daten)))
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
      localStorage.setItem(ENTWURF, JSON.stringify({ schluessel, plaetze, saetze, ort: kennung }))
    } catch {
      /* Speicher voll oder gesperrt */
    }
  }, [schluessel, plaetze, saetze, kennung])

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
  const pauseSetzen = (bis: number | null, naechste?: string) => {
    setPauseBis(bis)
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
    const u = plaetze[i].uebung
    // Nach dem Haken: Vorschlag für die restlichen Sätze dieser Übung
    const a = s.fertig ? null : reha ? rehaAnpassung(s, plaetze[i].vorgabe, u.belastung) : satzAnpassung(s, plaetze[i].vorgabe, u.belastung, lastenAn(u, ort))
    setSaetze(
      saetze.map((ss, x) =>
        x !== i
          ? ss
          : ss.map((t, y) => {
              if (y === k) return { ...t, fertig: !t.fertig }
              if (y > k && !t.fertig && a) return { ...t, ...(a.last !== undefined ? { last: a.last } : {}), ...(a.wdh !== undefined ? { wdh: a.wdh } : {}) }
              return t
            }),
      ),
    )
    setAnpassungen({ ...anpassungen, [i]: a ? { ...a, satz: k + 1 } : undefined })
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
        if (offen) pauseSetzen(Date.now() + plaetze[i].vorgabe.pause_s * 1000, plaetze[erste].uebung.name + ", Satz " + (k + 2))
        else uebungFertig(i)
      } else {
        const letzterSatz = saetze[i].every((x, b) => b === k || x.fertig)
        if (letzterSatz) uebungFertig(i)
        else pauseSetzen(Date.now() + plaetze[i].vorgabe.pause_s * 1000, plaetze[i].uebung.name + ", Satz " + (k + 2))
      }
    }
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
    setSaetze(saetze.map((x, k) => (k === i ? startSaetze(p, daten) : x)))
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
      {einheit.art !== "ausdauer" ? <p className="hinweistext">{reha ? "Aufwärmen (5 bis 10 min): in der Wohnung gehen oder locker Rad fahren, bis du dich warm fühlst." : "Aufwärmen (etwa 8 min): locker bewegen, dann für die erste Übung zwei leichte Sätze."}</p> : null}

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
            <Figur uebung={u} geraet={geraet} klein />
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
              <span className="vorgabe">{vorgabeText(p)}</span>
              {v.last !== null && u.belastung === "gewicht" ? <span className="vorgabe gewicht">{lastText(v.last, geraet)}</span> : null}
              {zeigeRir ? (
                <button type="button" className="vorgabe tank" onClick={() => setRirHilfe(true)}>
                  {v.rir} im Tank
                </button>
              ) : null}
              {v.pause_s > 0 && p.rolle !== "ausdauer" ? <span className="vorgabe leise">Pause {v.pause_s >= 120 ? zahl(v.pause_s / 60) + " min" : v.pause_s + " s"}</span> : null}
            </div>
            <p className="begruendung">{v.begruendung}</p>
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
                <div key={k} className={"satz" + (s.fertig ? " fertig" : "")}>
                  <span className="nr">{k + 1}</span>
                  {u.belastung === "distanz" ? <span className="breit leise">{v.last} m</span> : null}
                  {u.belastung === "gewicht" && !lasten.length ? (
                    <label className="mini breit">
                      <input aria-label="Gewicht in kg" inputMode="decimal" placeholder="kg" value={s.last ?? ""} onChange={(e) => {
                        const n = parseFloat(e.target.value.replace(",", "."))
                        setSatz(i, k, { last: e.target.value === "" || !isFinite(n) ? null : n })
                      }} />
                    </label>
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
                    <label className="mini">
                      <input aria-label="Minuten" inputMode="numeric" value={Math.round((s.sekunden || 0) / 60)} onChange={(e) => setSatz(i, k, { sekunden: (Number(e.target.value) || 0) * 60 })} />
                    </label>
                  ) : u.belastung === "zeit" ? (
                    <label className="mini">
                      <input aria-label="Sekunden" inputMode="numeric" value={s.sekunden ?? ""} onChange={(e) => setSatz(i, k, { sekunden: Number(e.target.value) || 0 })} />
                    </label>
                  ) : null}
                  {u.belastung === "gewicht" || u.belastung === "wiederholungen" ? (
                    <label className="mini">
                      <input aria-label="Wiederholungen" inputMode="numeric" value={s.wdh} onChange={(e) => setSatz(i, k, { wdh: Number(e.target.value) || 0 })} />
                    </label>
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

      {pauseBis !== null && rest > 0 ? (
        <div className="pausenleiste">
          <div className="pausenring">
            <Icon name="timer" groesse={20} />
          </div>
          <div className="pausentext">
            <small>{wechsel && !saetze[wechsel.nach]?.some((x) => x.fertig) ? "Wechsel zu " + plaetze[wechsel.nach].uebung.name : "Pause"}</small>
            <b>
              {Math.floor(rest / 60)}:{String(rest % 60).padStart(2, "0")}
            </b>
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
    </Seite>
  )
}
