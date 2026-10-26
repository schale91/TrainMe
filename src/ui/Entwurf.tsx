// Profilseite mit Entwurf: Änderungen an Sport, Zielen, Position, Erfahrung oder Reha wirken erst nach einer
// Rückfrage. Ab jetzt anpassen, erst nach dem laufenden Block oder den Plan gar nicht verändern.

import { useState, type ReactNode } from "react"
import { aenderungsText, naechsterBlock, nebensachen, planGeaendert } from "../logik/auswahl"
import { heute } from "../logik/plan"
import type { Profil } from "../logik/typen"
import { umstellen, type Wann } from "../logik/umstellen"
import { Blatt, Seite } from "./ios"
import { datumText } from "./texte"

export default function EntwurfSeite(props: { titel: string; profil: Profil; speichern: (p: Profil) => void; schliessen: () => void; children: (entwurf: Profil, aendern: (p: Profil) => void) => ReactNode }) {
  const [entwurf, setEntwurf] = useState(props.profil)
  const [frage, setFrage] = useState(false)
  // Neu einhängen, damit die Zurückgeste nach „Weiter bearbeiten“ wieder hier landet
  const [runde, setRunde] = useState(0)
  const tag = heute()

  const verlassen = () => {
    if (planGeaendert(props.profil, entwurf)) setFrage(true)
    else {
      props.speichern(nebensachen(props.profil, entwurf))
      props.schliessen()
    }
  }
  const entscheiden = (wann: Wann) => {
    props.speichern(umstellen(props.profil, entwurf, wann, tag))
    setFrage(false)
    props.schliessen()
  }

  return (
    <>
      <Seite key={runde} titel={props.titel} zurueck={{ text: "Profil", onClick: verlassen }}>
        {props.children(entwurf, setEntwurf)}
        {planGeaendert(props.profil, entwurf) ? (
          <button type="button" className="knopf voll gross" onClick={verlassen}>
            Übernehmen
          </button>
        ) : null}
      </Seite>
      <Blatt
        offen={frage}
        titel="Trainingsplan anpassen?"
        onClose={() => {
          setFrage(false)
          setRunde(runde + 1)
        }}
      >
        <p className="infokurz">Geändert: {aenderungsText(props.profil, entwurf)}. Wann soll das für deinen Plan gelten?</p>
        <div className="umstellknoepfe">
          <button type="button" className="umstellen" onClick={() => entscheiden("jetzt")}>
            <b>Ab jetzt anpassen</b>
            <small>Der laufende Block geht mit den neuen Einstellungen weiter, der Jahresplan wird von hier aus neu geplant.</small>
          </button>
          <button type="button" className="umstellen" onClick={() => entscheiden("block")}>
            <b>Nach diesem Block (ab {datumText(naechsterBlock(props.profil, tag))})</b>
            <small>Der laufende Block bleibt, wie er ist. Danach gilt der neue Plan, in der Wochenvorschau ist er schon zu sehen.</small>
          </button>
          <button type="button" className="umstellen" onClick={() => entscheiden("nie")}>
            <b>Plan nicht verändern</b>
            <small>Die Änderung wird verworfen, alles bleibt wie bisher.</small>
          </button>
        </div>
        <button
          type="button"
          className="knopf voll leise"
          onClick={() => {
            setFrage(false)
            setRunde(runde + 1)
          }}
        >
          Weiter bearbeiten
        </button>
      </Blatt>
    </>
  )
}
