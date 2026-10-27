// Scheiben je Seite der Stange, in den üblichen Wettkampffarben (25 rot, 20 blau, 15 gelb, 10 grün, 5 weiß).

import { zahl } from "./texte"

const FARBE: Record<string, string> = { "25": "#d33b3b", "20": "#2f6fd6", "15": "#e5b622", "10": "#2f9e55", "5": "#f2f2f2", "2.5": "#d33b3b", "1.25": "#b8bcc4" }

export function Scheiben(props: { liste: number[]; klein?: boolean }) {
  const groesste = Math.max(...props.liste, 1)
  return (
    <span className={"scheiben" + (props.klein ? " klein" : "")} aria-label={"Je Seite: " + props.liste.map(zahl).join(", ") + " kg"}>
      {props.liste.map((x, i) => (
        <span
          key={i}
          className="scheibe"
          style={{ background: FARBE[String(x)] || "#8a8f98", color: x === 5 || x === 15 || x === 1.25 ? "#1c1c1e" : "#fff", height: Math.round(40 + 60 * Math.min(1, x / Math.max(20, groesste))) + "%" }}>
          {zahl(x)}
        </span>
      ))}
    </span>
  )
}
