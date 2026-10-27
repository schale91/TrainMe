// Animierte Dehnfigur mit Phase und Mitzählen darunter. Three.js und das Modell werden erst geladen, wenn sie gebraucht werden;
// fehlt das Modell (z. B. Build ohne Zugang zum privaten Modell), zeichnet sie die einfache Figur.

import { useEffect, useRef, useState } from "react"
import type { Dehnung } from "../logik/dehnbewegung"
import { entwickler, entwicklerBeobachten } from "./entwickler"

/** Prüfansichten im Entwicklermodus: Gelenke, Messgitter, ohne Kleidung */
interface Pruef {
  gelenke: boolean
  raster: boolean
  nackt: boolean
}
const SCHLUESSEL = "trainme.dehnfigur.pruef"
const AUS: Pruef = { gelenke: false, raster: false, nackt: false }
function gespeichert(): Pruef {
  try {
    return { ...AUS, ...JSON.parse(localStorage.getItem(SCHLUESSEL) || "{}") }
  } catch {
    return AUS
  }
}
/** Was gerade gilt: ohne Entwicklermodus alles aus und Alltagskleidung; im Entwicklermodus enge Sportkleidung */
const wirksam = () => (entwickler() ? { ...gespeichert(), eng: true } : { ...AUS, eng: false })
/** Alle sichtbaren Figuren teilen sich die Schalter */
const hoerer = new Set<(p: Pruef) => void>()
const KNOEPFE: [keyof Pruef, string][] = [
  ["gelenke", "Gelenke"],
  ["raster", "Raster"],
  ["nackt", "Ohne Kleidung"],
]

export default function Dehnfigur(props: { dehnung: Dehnung; haltenS?: number; klein?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState("")
  const [pruef, setPruef] = useState(gespeichert)
  // Die Prüfansichten sind Werkzeuge und erscheinen nur im Entwicklermodus
  const [dev, setDev] = useState(entwickler)
  useEffect(() => {
    hoerer.add(setPruef)
    const ab = entwicklerBeobachten((an) => {
      setDev(an)
      void import("./dehnfigur").then((f) => f.pruefansicht(wirksam()))
    })
    return () => {
      hoerer.delete(setPruef)
      ab()
    }
  }, [])
  const umschalten = (k: keyof Pruef) => {
    const neu = { ...pruef, [k]: !pruef[k] }
    try {
      localStorage.setItem(SCHLUESSEL, JSON.stringify(neu))
    } catch {
      // ohne Speicher gilt die Einstellung bis zum Neustart
    }
    for (const h of hoerer) h(neu)
    void import("./dehnfigur").then((f) => f.pruefansicht({ ...neu, eng: entwickler() }))
  }
  const { dehnung, haltenS } = props
  useEffect(() => {
    let aus = false
    let stopp: (() => void) | null = null
    void Promise.all([import("./dehnfigur"), import("./modellladen").then((m) => m.modellLaden())])
      .then(([f, modell]) => {
        if (aus || !ref.current) return
        f.modellSetzen(modell)
        f.pruefansicht(wirksam())
        stopp = f.zeigeDehnung(ref.current, dehnung, haltenS, (st) => setPhase(st.text + (st.rest !== null ? " · " + Math.max(1, Math.ceil(st.rest)) + " s" : "")))
      })
      .catch(() => setPhase(""))
    return () => {
      aus = true
      stopp?.()
    }
  }, [dehnung, haltenS])
  return (
    <div className={"dehnfigur" + (props.klein ? " klein" : "")}>
      <div className="dehnbuehne">
        <canvas ref={ref} className={"figur" + (props.klein ? " klein" : "")} width={props.klein ? 300 : 480} height={props.klein ? 300 : 420} aria-hidden="true" title="Wischen dreht die Ansicht, doppelt tippen stellt sie zurück" />
        {dev ? (
          <div className="dehnpruef">
            {KNOEPFE.map(([k, text]) => (
              <button key={k} type="button" className={"gelenkknopf" + (pruef[k] ? " an" : "")} aria-pressed={pruef[k]} onClick={() => umschalten(k)}>
                {text}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {phase ? (
        <p className="dehnphase" aria-live="off">
          {phase}
        </p>
      ) : null}
      {!props.klein ? <p className="dehnhinweis">Wischen dreht · zwei Finger zoomen · Doppeltipp: zurück</p> : null}
    </div>
  )
}
