// Körpergewicht im Fortschritt: 7-Tage-Schnitt statt Tageswert, Trend in kg pro Woche, Einordnung je Ziel.

import { useState } from "react"
import { hatZiel } from "../logik/auswahl"
import { eintragen, schnitt, schnittVerlauf, trend } from "../logik/koerper"
import { heute } from "../logik/plan"
import type { Daten } from "../logik/typen"
import { Kurve } from "./Fortschritt"
import { Gruppe, Zeile } from "./ios"
import { datumText, zahl } from "./texte"

export default function Koerpergewicht(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void }) {
  const liste = props.daten.koerper || []
  const profil = props.daten.profil
  const tag = heute()
  const [text, setText] = useState("")
  const letzter = liste[liste.length - 1]
  const s7 = letzter ? schnitt(liste, letzter.datum) : null
  const tr = trend(liste)
  const prozent = tr !== null && s7 ? (tr / s7) * 100 : null
  const kg = parseFloat(text.replace(",", "."))
  const gueltig = isFinite(kg) && kg >= 25 && kg <= 350

  const speichern = () => {
    if (!gueltig) return
    props.aendern((d) => {
      d.koerper = eintragen(d.koerper, tag, kg)
      if (d.profil) d.profil.koerpergewicht_kg = Math.round(kg * 10) / 10
    })
    setText("")
  }

  // Einordnung nach Ziel: Abnehmen 0,5 bis 1 % pro Woche (Helms et al. 2014), Aufbau 0,25 bis 0,5 % (Iraki et al. 2019)
  let einordnung: string | null = null
  if (profil && prozent !== null) {
    const p = zahl(Math.round(Math.abs(prozent) * 100) / 100)
    if (hatZiel(profil, "abnehmen"))
      einordnung = prozent <= -0.5 && prozent >= -1 ? "Passt zum Abnehmen: " + p + " % pro Woche." : prozent < -1 ? "Schneller als empfohlen (" + p + " % pro Woche). Mehr als 1 % pro Woche kostet eher Muskulatur." : "Langsamer als die empfohlenen 0,5 bis 1 % pro Woche."
    else if (hatZiel(profil, "muskelaufbau"))
      einordnung = prozent >= 0.25 && prozent <= 0.5 ? "Passt zum Muskelaufbau: " + p + " % pro Woche." : prozent > 0.5 ? "Schneller als empfohlen (" + p + " % pro Woche). Mehr als etwa 0,5 % pro Woche ist meist zusätzliches Fett." : "Für Muskelaufbau eher zu wenig: empfohlen sind etwa 0,25 bis 0,5 % pro Woche."
  }

  return (
    <>
      <Gruppe titel="Körpergewicht" fuss="Der Tageswert schwankt vor allem durch Wasser und Mageninhalt. Aussagekräftig sind der Schnitt der letzten 7 Tage und der Trend über 4 Wochen. Am besten morgens nach dem Aufstehen wiegen.">
        <div className="koerperkopf">
          <div>
            <small>7-Tage-Schnitt</small>
            <b>{s7 !== null ? zahl(Math.round(s7 * 10) / 10) + " kg" : "noch kein Wert"}</b>
          </div>
          <div>
            <small>Trend</small>
            <b className={tr === null ? "leise" : ""}>{tr === null ? "ab 3 Werten über 1 Woche" : Math.abs(tr) < 0.05 ? "stabil" : (tr > 0 ? "+" : "−") + zahl(Math.round(Math.abs(tr) * 10) / 10) + " kg pro Woche"}</b>
          </div>
        </div>
        {einordnung ? <p className="hinweistext klein">{einordnung}</p> : null}
        {liste.length > 1 ? <Kurve punkte={schnittVerlauf(liste.slice(-90))} einheit="kg" hoehe={170} ohneBestwerte /> : null}
        <div className="koerpereingabe">
          <input aria-label="Körpergewicht heute in kg" inputMode="decimal" placeholder="Heute, z. B. 81,4" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && speichern()} />
          <button type="button" className="knopf" disabled={!gueltig} onClick={speichern}>
            Eintragen
          </button>
        </div>
      </Gruppe>
      {liste.length ? (
        <Gruppe titel="Letzte Werte" fuss={profil && (hatZiel(profil, "abnehmen") || hatZiel(profil, "muskelaufbau")) ? "Empfehlungen: Helms et al. 2014 (Abnehmen, J Int Soc Sports Nutr) und Iraki et al. 2019 (Aufbau, Sports)." : undefined}>
          {liste
            .slice(-7)
            .reverse()
            .map((m) => (
              <Zeile key={m.datum} titel={zahl(m.kg) + " kg"} untertitel={datumText(m.datum)} />
            ))}
        </Gruppe>
      ) : null}
    </>
  )
}
