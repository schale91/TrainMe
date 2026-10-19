// Fortschritt je Übung (Bestwerte über die Zeit) und Trainingsumfang pro Woche.

import { useMemo, useState } from "react"
import { uebung } from "../daten/uebungen"
import { montagVon, plusTage, heute } from "../logik/plan"
import { bestwert } from "../logik/spiel"
import type { Daten } from "../logik/typen"
import { datumText, zahl } from "./texte"

function Linie(props: { punkte: { x: string; y: number }[]; einheit: string }) {
  const p = props.punkte
  if (p.length < 2) return <p className="hinweis">Ab zwei Einheiten erscheint hier eine Kurve.</p>
  const B = 320
  const H = 140
  const min = Math.min(...p.map((q) => q.y))
  const max = Math.max(...p.map((q) => q.y))
  const spanne = max - min || 1
  const xs = (i: number) => 10 + (i / (p.length - 1)) * (B - 20)
  const ys = (y: number) => H - 15 - ((y - min) / spanne) * (H - 35)
  const pfad = p.map((q, i) => (i ? "L" : "M") + xs(i).toFixed(1) + " " + ys(q.y).toFixed(1)).join(" ")
  return (
    <svg viewBox={`0 0 ${B} ${H}`} className="kurve" role="img" aria-label="Verlauf">
      <path d={pfad} fill="none" stroke="var(--akzent)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      {p.map((q, i) => (
        <circle key={i} cx={xs(i)} cy={ys(q.y)} r="4" fill="var(--gold)" />
      ))}
      <text x="10" y="14" className="achse">
        {zahl(max)} {props.einheit}
      </text>
      <text x="10" y={H - 2} className="achse">
        {zahl(min)} {props.einheit}
      </text>
    </svg>
  )
}

export default function Fortschritt(props: { daten: Daten }) {
  const { daten } = props
  const uebungen = useMemo(() => {
    const zaehler: Record<string, number> = {}
    for (const p of daten.protokoll) zaehler[p.uebung] = (zaehler[p.uebung] || 0) + 1
    return Object.keys(zaehler)
      .filter((id) => uebung(id))
      .sort((a, b) => zaehler[b] - zaehler[a])
  }, [daten.protokoll])
  const [gewaehlt, setGewaehlt] = useState<string>(uebungen[0] || "")

  // Sätze pro Woche, letzte 8 Wochen
  const wochen = Array.from({ length: 8 }, (_, i) => plusTage(montagVon(heute()), -7 * (7 - i)))
  const saetzeProWoche = wochen.map((m) => daten.erledigt.filter((e) => e.datum >= m && e.datum < plusTage(m, 7)).reduce((s, e) => s + e.saetze, 0))
  const maxS = Math.max(1, ...saetzeProWoche)

  if (!daten.protokoll.length) {
    return (
      <div className="leer">
        <span className="gross">📈</span>
        <h2>Noch keine Daten</h2>
        <p>Nach der ersten Einheit siehst du hier deine Entwicklung.</p>
      </div>
    )
  }

  const u = uebung(gewaehlt)
  const verlauf = daten.protokoll.filter((p) => p.uebung === gewaehlt).sort((a, b) => (a.datum < b.datum ? -1 : 1))
  const mitLast = verlauf.some((p) => p.saetze.some((s) => s.last))
  const einheit = mitLast ? "kg" : u?.belastung === "zeit" ? "s" : "Wdh"

  return (
    <div className="fortschritt">
      <h1>Fortschritt</h1>
      <div className="karte">
        <h2>Sätze pro Woche</h2>
        <div className="saeulen">
          {saetzeProWoche.map((s, i) => (
            <div key={i} className="saeule">
              <div style={{ height: (s / maxS) * 100 + "%" }} />
              <small>{datumText(wochen[i]).slice(0, -3)}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="karte">
        <select value={gewaehlt} onChange={(e) => setGewaehlt(e.target.value)}>
          {uebungen.map((id) => (
            <option key={id} value={id}>
              {uebung(id)?.name}
            </option>
          ))}
        </select>
        <p className="unter klein">{mitLast ? "Geschätztes Maximum (1 Wiederholung) aus Gewicht, Wiederholungen und Reserve" : "Bester Satz je Einheit"}</p>
        <Linie punkte={verlauf.map((p) => ({ x: p.datum, y: bestwert(p) }))} einheit={einheit} />
        <table className="tabelle">
          <tbody>
            {verlauf
              .slice(-8)
              .reverse()
              .map((p, i) => (
                <tr key={i}>
                  <td>{datumText(p.datum)}</td>
                  <td>
                    {p.saetze
                      .map((s) => (s.last ? zahl(s.last) + "×" + s.wdh : s.sekunden ? s.sekunden + " s" : s.wdh + " Wdh") + (s.last || (!s.sekunden && s.wdh > 1) ? " @" + s.rir : ""))
                      .join("  ")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
