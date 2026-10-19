// Info-Fenster einer Übung: Ausführung Schritt für Schritt, Atmung, Fehler, Vorteile, Tipps, Varianten, Golfbezug.

import { MUSTER_NAME, MUSKEL_NAME, GERAET_NAME, GELENK_NAME } from "./texte"
import type { Uebung } from "../logik/typen"
import { Blatt, Plakette } from "./ios"

export function UebungInfoBlatt(props: { uebung: Uebung | null; onClose: () => void }) {
  const u = props.uebung
  return (
    <Blatt offen={!!u} onClose={props.onClose} titel={u ? u.name : ""} hoch>
      {u ? <UebungInfoInhalt u={u} /> : null}
    </Blatt>
  )
}

const STUFE = ["", "Einfach", "Mittel", "Anspruchsvoll"]

export function UebungInfoInhalt({ u }: { u: Uebung }) {
  const i = u.info
  const geraete = u.geraete.map((g) => (g.length ? g.map((x) => GERAET_NAME[x] || x).join(" + ") : "ohne Gerät")).join(" oder ")
  const gelenke = Object.entries(u.gelenke)
    .map(([g, w]) => GELENK_NAME[g] + (w === 2 ? " (hoch)" : ""))
    .join(", ")
  return (
    <div className="info">
      <div className="plaketten">
        <Plakette>{MUSTER_NAME[u.muster]}</Plakette>
        <Plakette farbe="var(--flaeche3)">{STUFE[u.stufe]}</Plakette>
        {u.einseitig ? <Plakette farbe="var(--flaeche3)">je Seite</Plakette> : null}
        {u.golf ? <Plakette farbe="#1f7a5a">{u.golf === 3 ? "Golf-spezifisch" : u.golf === 2 ? "Wichtig für Golf" : "Gut für Golf"}</Plakette> : null}
      </div>
      <p className="infokurz">{i.kurz}</p>
      {u.auch && u.auch.length ? <p className="infoauch">Auch bekannt als: {u.auch.join(", ")}</p> : null}

      <h4>So geht's</h4>
      <ol className="schritte">
        {i.ausfuehrung.map((s, k) => (
          <li key={k}>{s}</li>
        ))}
      </ol>

      <h4>Atmung</h4>
      <p>{i.atmung}</p>

      <h4>Typische Fehler</h4>
      <ul className="punkte fehler">
        {i.fehler.map((s, k) => (
          <li key={k}>{s}</li>
        ))}
      </ul>

      <h4>Das bringt's</h4>
      <ul className="punkte vorteile">
        {i.vorteile.map((s, k) => (
          <li key={k}>{s}</li>
        ))}
      </ul>

      {i.golf ? (
        <>
          <h4>Für deinen Golfschwung</h4>
          <p className="golftext">{i.golf}</p>
        </>
      ) : null}

      <h4>Profi-Tipps</h4>
      <ul className="punkte tipps">
        {i.tipps.map((s, k) => (
          <li key={k}>{s}</li>
        ))}
      </ul>

      {i.varianten ? (
        <>
          <h4>Leichter und schwerer</h4>
          <p>{i.varianten}</p>
        </>
      ) : null}

      {i.sicherheit ? (
        <>
          <h4>Vorsicht</h4>
          <p className="vorsicht">{i.sicherheit}</p>
        </>
      ) : null}

      <div className="steckbrief">
        <div>
          <span>Muskeln</span>
          <b>{u.muskeln.map((m) => MUSKEL_NAME[m] || m).join(", ")}</b>
        </div>
        {u.sekundaer && u.sekundaer.length ? (
          <div>
            <span>Unterstützend</span>
            <b>{u.sekundaer.map((m) => MUSKEL_NAME[m] || m).join(", ")}</b>
          </div>
        ) : null}
        <div>
          <span>Geräte</span>
          <b>{geraete}</b>
        </div>
        {gelenke ? (
          <div>
            <span>Gelenkbelastung</span>
            <b>{gelenke}</b>
          </div>
        ) : null}
        <div>
          <span>Raumhöhe</span>
          <b>{u.hoehe_cm ? "ab etwa " + (u.hoehe_cm / 100).toFixed(2).replace(".", ",") + " m" : "draußen"}</b>
        </div>
      </div>
    </div>
  )
}
