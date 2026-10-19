// Einrichtung in sechs Schritten. Am Ende steht der erste Plan.

import { useState } from "react"
import { beispielGolf, neuesProfil } from "../logik/speicher"
import type { Profil } from "../logik/typen"
import { AusnahmenEditor, Grunddaten, KoerperEditor, OrteEditor, SportWahl, WocheEditor } from "./Profilteile"

const SCHRITTE = [
  { titel: "Hallo!", text: "Ein paar Fragen, dann baut TrainMe deinen Plan. Alles bleibt auf deinem Handy." },
  { titel: "Training und Sport", text: "Was willst du trainieren, und für welchen Sport?" },
  { titel: "Wo trainierst du?", text: "Geräte, Gewichte und Deckenhöhe je Ort. TrainMe schlägt nur vor, was es dort wirklich gibt." },
  { titel: "Deine Woche", text: "An welchen Tagen, wie lange, und wann sind feste Termine?" },
  { titel: "Körper", text: "Gibt es Gelenke, auf die TrainMe Rücksicht nehmen soll?" },
  { titel: "Ausnahmen", text: "Optional: Übungen, die nie vorkommen sollen." },
]

export default function Einrichtung(props: { fertig: (p: Profil) => void; start?: Profil }) {
  const [schritt, setSchritt] = useState(0)
  const [profil, setProfil] = useState<Profil>(props.start || neuesProfil())
  const s = SCHRITTE[schritt]
  const teil = { profil, aendern: setProfil }
  const letzter = schritt === SCHRITTE.length - 1
  const trainingstage = profil.woche.filter((t) => t.art === "training").length
  const kannWeiter = schritt !== 3 || trainingstage > 0

  return (
    <div className="einrichtung">
      <div className="fortschrittspunkte">
        {SCHRITTE.map((_, i) => (
          <span key={i} className={i <= schritt ? "an" : ""} />
        ))}
      </div>
      <h1>{s.titel}</h1>
      <p className="unter">{s.text}</p>
      <div className="schritt">
        {schritt === 0 ? (
          <>
            <button type="button" className="schnellstart" onClick={() => setProfil({ ...beispielGolf(new Date().toISOString().slice(0, 10)), name: profil.name })}>
              <span className="gross">⛳</span>
              <span>
                <b>Schnellstart Golf</b>
                <small>5 × 60 min Studio, Samstag Mobilität im Keller, kein Ausdauertraining. Alles lässt sich danach anpassen.</small>
              </span>
            </button>
            <Grunddaten {...teil} />
          </>
        ) : null}
        {schritt === 1 ? <SportWahl {...teil} /> : null}
        {schritt === 2 ? <OrteEditor {...teil} /> : null}
        {schritt === 3 ? <WocheEditor {...teil} /> : null}
        {schritt === 4 ? <KoerperEditor {...teil} /> : null}
        {schritt === 5 ? <AusnahmenEditor {...teil} /> : null}
      </div>
      <div className="fuss">
        {schritt > 0 ? (
          <button type="button" className="knopf leise" onClick={() => setSchritt(schritt - 1)}>
            Zurück
          </button>
        ) : (
          <span />
        )}
        <button type="button" className="knopf" disabled={!kannWeiter} onClick={() => (letzter ? props.fertig(profil) : setSchritt(schritt + 1))}>
          {letzter ? "Plan erstellen 🚀" : kannWeiter ? "Weiter" : "Mindestens ein Trainingstag"}
        </button>
      </div>
    </div>
  )
}
