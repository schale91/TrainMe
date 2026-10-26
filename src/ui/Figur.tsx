// Übungsfigur in 3D, wenn es für die Übung eine gibt. Three.js wird erst geladen, wenn eine Figur sichtbar wird.

import { useEffect, useRef, useState } from "react"
import type { Uebung } from "../logik/typen"
import { bruecke } from "./lebenswelt"

/** Gerätewahl der Figur aus dem Lastgerät am Ort (Kurzhantel, Stange, Kabel, Band). */
const GERAET: Record<string, string> = { kurzhantel: "kurzhantel", langhantel: "olympiastange", sz_stange: "szstange", kabelzug: "kabelturm", kabelturm: "kabelturm", band: "band_lang" }

export default function Figur(props: { uebung: Uebung; geraet?: string | null; klein?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [da, setDa] = useState(false)
  const namen = [props.uebung.name, ...(props.uebung.auch || [])]
  const schluessel = namen.join("|") + "|" + (props.geraet || "")
  useEffect(() => {
    let aus = false
    void import("./figuren3d")
      .then((m) => {
        const name = m.figurName(namen)
        if (aus || !name || !ref.current) return setDa(false)
        setDa(true)
        const g = GERAET[props.geraet || ""] || ""
        const b = bruecke()
        // In der Lebenswelt zeichnet sie die Figur in ihrem Stil (mit der Farbe aus dem Shop)
        if (b?.figur) b.figur(ref.current, name, g)
        else m.zeige(ref.current, name, g)
      })
      .catch(() => setDa(false))
    return () => {
      aus = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schluessel])
  return <canvas ref={ref} className={"figur" + (props.klein ? " klein" : "")} width={props.klein ? 240 : 360} height={props.klein ? 180 : 270} style={da ? undefined : { display: "none" }} aria-hidden="true" />
}
