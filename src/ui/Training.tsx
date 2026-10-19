// Eine Einheit durchführen: Vorgaben sehen, Sätze abhaken, Pause läuft automatisch, am Ende gibt es XP.

import { useEffect, useMemo, useRef, useState } from "react"
import { alternativen, lastGeraet, lastenAn, platzMit, verlauf } from "../logik/plan"
import { lastText } from "../logik/gewichte"
import type { Daten, Einheit, Platz, Protokoll, Satz } from "../logik/typen"
import { ROLLE, datumText, zahl } from "./texte"

type Eingabe = Satz & { fertig: boolean }
type Entwurf = { schluessel: string; plaetze: Platz[]; saetze: Eingabe[][] }

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
    return { last, wdh: v.wdh_bis, rir: v.rir, fertig: false }
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

export default function Training(props: { daten: Daten; einheit: Einheit; zurueck: () => void; abschliessen: (e: Einheit, p: Protokoll[]) => void; ausschliessen: (id: string) => void }) {
  const { daten, einheit } = props
  const profil = daten.profil!
  const ort = profil.orte[einheit.ort] || profil.orte[0]
  const schluessel = einheit.datum + "|" + einheit.titel
  const gespeichert = useMemo(() => ladeEntwurf(schluessel), [schluessel])
  const [plaetze, setPlaetze] = useState<Platz[]>(gespeichert ? gespeichert.plaetze : einheit.plaetze)
  const [saetze, setSaetze] = useState<Eingabe[][]>(gespeichert ? gespeichert.saetze : einheit.plaetze.map((p) => startSaetze(p, daten)))
  const [pauseBis, setPauseBis] = useState<number | null>(null)
  const [jetzt, setJetzt] = useState(Date.now())
  const [tausch, setTausch] = useState<number | null>(null)
  const gepiept = useRef(false)

  useEffect(() => {
    try {
      localStorage.setItem(ENTWURF, JSON.stringify({ schluessel, plaetze, saetze }))
    } catch {
      /* Speicher voll oder gesperrt */
    }
  }, [schluessel, plaetze, saetze])

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

  const setSatz = (i: number, k: number, neu: Partial<Eingabe>) => setSaetze(saetze.map((ss, a) => (a === i ? ss.map((s, b) => (b === k ? { ...s, ...neu } : s)) : ss)))
  const abhaken = (i: number, k: number) => {
    const s = saetze[i][k]
    setSatz(i, k, { fertig: !s.fertig })
    if (!s.fertig && plaetze[i].vorgabe.pause_s > 0) {
      setPauseBis(Date.now() + plaetze[i].vorgabe.pause_s * 1000)
      setJetzt(Date.now())
    }
  }
  const erledigt = saetze.reduce((n, ss) => n + ss.filter((s) => s.fertig).length, 0)
  const gesamt = saetze.reduce((n, ss) => n + ss.length, 0)

  const fertig = () => {
    const protokolle: Protokoll[] = plaetze
      .map((p, i) => ({ datum: einheit.datum, uebung: p.uebung.id, saetze: saetze[i].filter((s) => s.fertig).map(({ fertig: _f, ...s }) => s) }))
      .filter((p) => p.saetze.length > 0)
    try {
      localStorage.removeItem(ENTWURF)
    } catch {
      /* egal */
    }
    props.abschliessen({ ...einheit, plaetze }, protokolle)
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

  return (
    <div className="training">
      <div className="kopf">
        <button type="button" className="knopf klein leise" onClick={props.zurueck}>
          ← Zurück
        </button>
        <div>
          <h1>{einheit.titel}</h1>
          <p className="unter">
            {datumText(einheit.datum)} · {ort.name} · etwa {einheit.minuten} min
          </p>
        </div>
      </div>
      <div className="fortschritt-leiste">
        <div style={{ width: (gesamt ? (erledigt / gesamt) * 100 : 0) + "%" }} />
      </div>
      {einheit.hinweise.map((h, i) => (
        <p key={i} className="hinweis">
          {h}
        </p>
      ))}
      {einheit.art !== "ausdauer" ? <p className="hinweis">Aufwärmen (etwa 8 min): locker bewegen, dann für die erste Übung zwei leichte Sätze.</p> : null}

      {plaetze.map((p, i) => {
        const u = p.uebung
        const v = p.vorgabe
        const geraet = lastGeraet(u, ort)
        const lasten = lastenAn(u, ort)
        const alle = saetze[i].every((s) => s.fertig)
        return (
          <div key={i + u.id} className={"karte uebung" + (alle ? " geschafft" : "")}>
            <div className="reihe zwischen">
              <span className={"marke " + p.rolle}>{ROLLE[p.rolle]}</span>
              {p.rolle !== "ausdauer" ? (
                <button type="button" className="knopf klein leise" onClick={() => setTausch(tausch === i ? null : i)}>
                  ⇄ Tauschen
                </button>
              ) : null}
            </div>
            <h2>{u.name}</h2>
            <p className="vorgabe">
              {v.modell === "zeit" && p.rolle === "ausdauer"
                ? v.saetze > 1
                  ? v.saetze + " Runden"
                  : Math.round((v.last || 0) / 60) + " Minuten"
                : u.belastung === "zeit"
                  ? v.saetze + " × " + v.last + " s"
                  : u.belastung === "distanz"
                    ? v.saetze + " × " + v.last + " m"
                    : v.saetze + " × " + (v.wdh_von === v.wdh_bis ? v.wdh_von : v.wdh_von + " bis " + v.wdh_bis) + " Wdh"}
              {v.last !== null && u.belastung === "gewicht" ? " · " + lastText(v.last, geraet) : ""}
              {p.rolle !== "mobil" && p.rolle !== "ausdauer" && u.belastung !== "zeit" ? " · noch " + v.rir + " im Tank" : ""}
              {v.pause_s > 0 && p.rolle !== "ausdauer" ? " · Pause " + (v.pause_s >= 120 ? zahl(v.pause_s / 60) + " min" : v.pause_s + " s") : ""}
            </p>
            <p className="begruendung">{v.begruendung}</p>
            {u.hinweis ? <p className="tipp">💡 {u.hinweis}</p> : null}

            {tausch === i ? (
              <div className="tauschliste">
                {alternativen(profil, ort, p.muster, u.id).map((a) => (
                  <div key={a.id} className="reihe zwischen">
                    <span>{a.name}</span>
                    <span className="reihe">
                      <button type="button" className="knopf klein" onClick={() => tauschen(i, a.id, false)}>
                        Heute
                      </button>
                      <button type="button" className="knopf klein leise" onClick={() => tauschen(i, a.id, true)} title="Die alte Übung nie wieder vorschlagen">
                        Immer
                      </button>
                    </span>
                  </div>
                ))}
                {alternativen(profil, ort, p.muster, u.id).length === 0 ? <p className="hinweis">Hier gibt es keine passende Alternative.</p> : null}
              </div>
            ) : null}

            <div className="saetze">
              {saetze[i].map((s, k) => (
                <div key={k} className={"satz" + (s.fertig ? " fertig" : "")}>
                  <span className="nr">{k + 1}</span>
                  {u.belastung === "gewicht" ? (
                    <select value={s.last ?? ""} onChange={(e) => setSatz(i, k, { last: e.target.value === "" ? null : Number(e.target.value) })}>
                      <option value="">{lasten.length ? "Gewicht?" : "frei"}</option>
                      {lasten.map((x) => (
                        <option key={x} value={x}>
                          {lastText(x, geraet)}
                        </option>
                      ))}
                    </select>
                  ) : null}
                  {u.belastung === "zeit" && p.rolle === "ausdauer" && v.saetze === 1 ? (
                    <label className="mini">
                      <input inputMode="numeric" value={Math.round((s.sekunden || 0) / 60)} onChange={(e) => setSatz(i, k, { sekunden: (Number(e.target.value) || 0) * 60 })} />
                      min
                    </label>
                  ) : u.belastung === "zeit" ? (
                    <label className="mini">
                      <input inputMode="numeric" value={s.sekunden ?? ""} onChange={(e) => setSatz(i, k, { sekunden: Number(e.target.value) || 0 })} />s
                    </label>
                  ) : null}
                  {u.belastung === "gewicht" || u.belastung === "wiederholungen" ? (
                    <label className="mini">
                      <input inputMode="numeric" value={s.wdh} onChange={(e) => setSatz(i, k, { wdh: Number(e.target.value) || 0 })} />
                      Wdh
                    </label>
                  ) : null}
                  {p.rolle !== "mobil" && p.rolle !== "ausdauer" && u.belastung !== "zeit" ? (
                    <label className="mini">
                      <select value={s.rir} onChange={(e) => setSatz(i, k, { rir: Number(e.target.value) })}>
                        {[0, 1, 2, 3, 4, 5].map((r) => (
                          <option key={r} value={r}>
                            {r === 5 ? "5+" : r}
                          </option>
                        ))}
                      </select>
                      im Tank
                    </label>
                  ) : null}
                  <button type="button" className={"haken" + (s.fertig ? " an" : "")} onClick={() => abhaken(i, k)} aria-label="Satz erledigt">
                    ✓
                  </button>
                </div>
              ))}
              <div className="reihe">
                <button type="button" className="knopf klein leise" onClick={() => setSaetze(saetze.map((ss, a) => (a === i ? [...ss, { ...ss[ss.length - 1], fertig: false }] : ss)))}>
                  + Satz
                </button>
                {saetze[i].length > 1 ? (
                  <button type="button" className="knopf klein leise" onClick={() => setSaetze(saetze.map((ss, a) => (a === i ? ss.slice(0, -1) : ss)))}>
                    − Satz
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )
      })}

      <details className="erklaerung">
        <summary>Was heißt „im Tank“?</summary>
        <p>
          Wie viele saubere Wiederholungen du am Ende des Satzes noch geschafft hättest (englisch RIR, reps in reserve). 0 heißt: keine einzige mehr. Ehrlich schätzen, danach richtet sich das Gewicht der nächsten
          Einheit.
        </p>
      </details>

      <button type="button" className="knopf gross" disabled={erledigt === 0} onClick={fertig}>
        Einheit abschließen ({erledigt}/{gesamt} Sätze)
      </button>

      {pauseBis !== null && rest > 0 ? (
        <div className="pause">
          <span>Pause</span>
          <b>
            {Math.floor(rest / 60)}:{String(rest % 60).padStart(2, "0")}
          </b>
          <button type="button" className="knopf klein leise" onClick={() => setPauseBis(pauseBis + 30000)}>
            +30 s
          </button>
          <button type="button" className="knopf klein" onClick={() => setPauseBis(null)}>
            Weiter
          </button>
        </div>
      ) : null}
    </div>
  )
}
