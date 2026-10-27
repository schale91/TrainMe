// Animierte Dehnfigur mit Phase und Mitzählen darunter. Three.js und das Modell werden erst geladen, wenn sie gebraucht werden;
// fehlt das Modell (z. B. Build ohne Zugang zum privaten Modell), zeichnet sie die einfache Figur.

import { useEffect, useRef, useState } from "react"
import type { Dehnung } from "../logik/dehnbewegung"

export default function Dehnfigur(props: { dehnung: Dehnung; haltenS?: number; klein?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState("")
  const { dehnung, haltenS } = props
  useEffect(() => {
    let aus = false
    let stopp: (() => void) | null = null
    void Promise.all([import("./dehnfigur"), import("./modellladen").then((m) => m.modellLaden())])
      .then(([f, modell]) => {
        if (aus || !ref.current) return
        f.modellSetzen(modell)
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
      <canvas ref={ref} className={"figur" + (props.klein ? " klein" : "")} width={props.klein ? 300 : 480} height={props.klein ? 300 : 420} aria-hidden="true" title="Wischen dreht die Ansicht, doppelt tippen stellt sie zurück" />
      {phase ? (
        <p className="dehnphase" aria-live="off">
          {phase}
        </p>
      ) : null}
      {!props.klein ? <p className="dehnhinweis">Wischen dreht · zwei Finger zoomen · Doppeltipp: zurück</p> : null}
    </div>
  )
}
