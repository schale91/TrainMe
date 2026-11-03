// Übungsfigur in 3D, wenn es für die Übung eine gibt. Three.js wird erst geladen, wenn eine Figur sichtbar wird.

import { useEffect, useRef, useState } from "react"
import type { Dehnung } from "../logik/dehnbewegung"
import type { Uebung } from "../logik/typen"
import { FIGUREN } from "../daten/figuren"
import Dehnfigur from "./Dehnfigur"
import { bruecke } from "./lebenswelt"

/** Gerätewahl der Figur aus dem Lastgerät am Ort (Kurzhantel, Stange, Kabel, Band). */
const GERAET: Record<string, string> = { kurzhantel: "kurzhantel", langhantel: "olympiastange", sz_stange: "szstange", kabelzug: "kabelturm", kabelturm: "kabelturm", band: "band_lang" }

/** haltenS: Haltezeit aus der Vorgabe, damit die Dehnfigur genau so lange hält. */
export default function Figur(props: { uebung: Uebung; geraet?: string | null; klein?: boolean; haltenS?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [da, setDa] = useState(false)
  // Mobilitätsübungen mit eigener Dehnfigur; undefined = wird noch nachgesehen
  const [dehnung, setDehnung] = useState<Dehnung | null | undefined>(undefined)
  const id = props.uebung.id
  // Nur Übungen mit geprüfter Zuordnung bekommen eine Figur
  const figur = FIGUREN[id]
  const schluessel = (figur || "") + "|" + (props.geraet || "")
  useEffect(() => {
    let aus = false
    void import("../daten/dehnungen")
      .then((m) => !aus && setDehnung(m.DEHNUNGEN[id] ?? null))
      .catch(() => !aus && setDehnung(null))
    return () => {
      aus = true
    }
  }, [id])
  useEffect(() => {
    if (dehnung !== null) return
    let aus = false
    void import("./figuren3d")
      .then((m) => {
        if (aus || !figur || !ref.current) return setDa(false)
        setDa(true)
        // In der Lebenswelt mit der Hoodie-Farbe aus dem Shop
        m.zeige(ref.current, figur, GERAET[props.geraet || ""] || "", bruecke()?.figurFarbe?.())
      })
      .catch(() => setDa(false))
    return () => {
      aus = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schluessel, dehnung])
  if (dehnung) return <Dehnfigur dehnung={dehnung} haltenS={props.haltenS} klein={props.klein} />
  return <canvas ref={ref} className={"figur" + (props.klein ? " klein" : "")} width={props.klein ? 240 : 360} height={props.klein ? 180 : 270} style={da ? undefined : { display: "none" }} aria-hidden="true" />
}
