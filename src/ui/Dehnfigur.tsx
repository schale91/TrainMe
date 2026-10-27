// Animierte Dehnfigur mit Phase und Mitzählen darunter. Three.js und das Modell werden erst geladen, wenn sie gebraucht werden;
// fehlt das Modell (z. B. Build ohne Zugang zum privaten Modell), zeichnet sie die einfache Figur. Ein Tipp auf die
// Figur öffnet sie im Vollbild; dort lässt sie sich bis zehnfach heranzoomen und verschieben.

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
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
  const [voll, setVoll] = useState(false)
  const pruefKnoepfe = dev ? (
    <div className="dehnpruef">
      {KNOEPFE.map(([k, text]) => (
        <button key={k} type="button" className={"gelenkknopf" + (pruef[k] ? " an" : "")} aria-pressed={pruef[k]} onClick={() => umschalten(k)}>
          {text}
        </button>
      ))}
    </div>
  ) : null
  return (
    <div className={"dehnfigur" + (props.klein ? " klein" : "")}>
      <div className="dehnbuehne">
        {/* Im Vollbild ruht die kleine Figur, damit nicht zwei Bühnen gleichzeitig rechnen */}
        {!voll ? <Leinwand dehnung={dehnung} haltenS={haltenS} breite={props.klein ? 300 : 480} hoehe={props.klein ? 300 : 420} klein={props.klein} melden={setPhase} antippen={() => setVoll(true)} /> : <div className={"figur" + (props.klein ? " klein" : "")} style={{ aspectRatio: props.klein ? "1" : "480 / 420" }} />}
        {!voll ? pruefKnoepfe : null}
        <button type="button" className="dehnvollknopf" aria-label="Vollbild" onClick={() => setVoll(true)}>
          ⤢
        </button>
      </div>
      {phase ? (
        <p className="dehnphase" aria-live="off">
          {phase}
        </p>
      ) : null}
      {!props.klein ? <p className="dehnhinweis">Antippen: Vollbild · Wischen dreht · zwei Finger zoomen</p> : null}
      {voll ? createPortal(<Vollbild dehnung={dehnung} haltenS={haltenS} phase={phase} melden={setPhase} schliessen={() => setVoll(false)} knoepfe={pruefKnoepfe} />, document.body) : null}
    </div>
  )
}

/** Phase und Restzeit als Text */
const phaseText = (st: { text: string; rest: number | null }) => st.text + (st.rest !== null ? " · " + Math.max(1, Math.ceil(st.rest)) + " s" : "")

/** Eine Canvas mit laufender Dehnung */
function Leinwand(props: { dehnung: Dehnung; haltenS?: number; breite: number; hoehe: number; klein?: boolean; melden: (t: string) => void; antippen?: () => void; voll?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const { dehnung, haltenS, melden, antippen } = props
  const tipp = useRef(antippen)
  tipp.current = antippen
  useEffect(() => {
    let aus = false
    let stopp: (() => void) | null = null
    void Promise.all([import("./dehnfigur"), import("./modellladen").then((m) => m.modellLaden())])
      .then(([f, modell]) => {
        if (aus || !ref.current) return
        f.modellSetzen(modell)
        f.pruefansicht(wirksam())
        stopp = f.zeigeDehnung(ref.current, dehnung, haltenS, (st) => melden(phaseText(st)), tipp.current ? () => tipp.current?.() : undefined)
      })
      .catch(() => melden(""))
    return () => {
      aus = true
      stopp?.()
    }
  }, [dehnung, haltenS, melden])
  return (
    <canvas
      ref={ref}
      className={props.voll ? "figurvoll" : "figur" + (props.klein ? " klein" : "")}
      width={props.breite}
      height={props.hoehe}
      aria-hidden="true"
      title={props.voll ? "Wischen dreht, zwei Finger zoomen und verschieben, doppelt tippen stellt die Ansicht zurück" : "Antippen für Vollbild"}
    />
  )
}

/** Vollbild: Figur über den ganzen Bildschirm in voller Auflösung, Schließen mit ✕ oder Escape */
function Vollbild(props: { dehnung: Dehnung; haltenS?: number; phase: string; melden: (t: string) => void; schliessen: () => void; knoepfe: React.ReactNode }) {
  const groesse = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    return { b: Math.round(window.innerWidth * dpr), h: Math.round(window.innerHeight * dpr) }
  }
  const [g, setG] = useState(groesse)
  const { schliessen } = props
  useEffect(() => {
    const neu = () => setG(groesse())
    const taste = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") schliessen()
    }
    window.addEventListener("resize", neu)
    window.addEventListener("keydown", taste)
    return () => {
      window.removeEventListener("resize", neu)
      window.removeEventListener("keydown", taste)
    }
  }, [schliessen])
  return (
    <div className="dehnvoll" role="dialog" aria-modal="true" aria-label="Dehnfigur im Vollbild">
      <Leinwand key={g.b + "x" + g.h} dehnung={props.dehnung} haltenS={props.haltenS} breite={g.b} hoehe={g.h} melden={props.melden} voll />
      <button type="button" className="dehnvollzu" aria-label="Vollbild schließen" onClick={schliessen}>
        ✕
      </button>
      {props.knoepfe}
      <div className="dehnvollunten">
        {props.phase ? <p className="dehnphase">{props.phase}</p> : null}
        <p className="dehnhinweis">Wischen dreht · zwei Finger zoomen und verschieben · Doppeltipp: zurück</p>
      </div>
    </div>
  )
}
