// Stufe, Serie, Abzeichen und die letzten Einheiten.

import { heute } from "../logik/plan"
import { ABZEICHEN, serie, stufe, stufenName } from "../logik/spiel"
import type { Daten } from "../logik/typen"
import { Balken } from "./teile"
import { datumText } from "./texte"

export default function Erfolge(props: { daten: Daten }) {
  const { daten } = props
  const s = stufe(daten.spiel.xp)
  const ser = serie(daten.profil!, daten.erledigt, heute())
  const minuten = daten.erledigt.reduce((x, e) => x + e.minuten, 0)
  const rekorde = daten.erledigt.reduce((x, e) => x + e.rekorde.length, 0)
  return (
    <div className="erfolge">
      <div className="held mitte">
        <div className="ring">
          <b>{s.stufe}</b>
          <small>Stufe</small>
        </div>
        <h1>{stufenName(s.stufe)}</h1>
        <Balken wert={s.imLevel} max={s.noetig} />
        <p className="unter klein">
          noch {s.noetig - s.imLevel} XP bis Stufe {s.stufe + 1} · insgesamt {daten.spiel.xp} XP
        </p>
      </div>
      <div className="kacheln">
        <div className="kachel">
          <b>🔥 {ser}</b>
          <small>Wochen Serie</small>
        </div>
        <div className="kachel">
          <b>{daten.erledigt.length}</b>
          <small>Einheiten</small>
        </div>
        <div className="kachel">
          <b>{Math.round(minuten / 60)} h</b>
          <small>Training</small>
        </div>
        <div className="kachel">
          <b>📈 {rekorde}</b>
          <small>Rekorde</small>
        </div>
      </div>
      <h2>Abzeichen</h2>
      <div className="abzeichen">
        {ABZEICHEN.map((a) => {
          const am = daten.spiel.abzeichen[a.id]
          return (
            <div key={a.id} className={"abz" + (am ? " an" : "")}>
              <span className="sym">{am ? a.symbol : "🔒"}</span>
              <b>{a.name}</b>
              <small>{am ? datumText(am) : a.text}</small>
            </div>
          )
        })}
      </div>
      {daten.erledigt.length ? (
        <>
          <h2>Zuletzt</h2>
          <div className="liste">
            {daten.erledigt
              .slice(-10)
              .reverse()
              .map((e, i) => (
                <div key={i} className="listzeile">
                  <span>
                    {datumText(e.datum)} · {e.titel}
                  </span>
                  <span>
                    +{e.xp} XP{e.rekorde.length ? " · 📈" + e.rekorde.length : ""}
                  </span>
                </div>
              ))}
          </div>
        </>
      ) : null}
      <p className="hinweis">Serie: eine Woche zählt, wenn du alle geplanten Einheiten bis auf eine geschafft hast. Entlastung und Mobilität geben extra XP, Regeneration ist Teil des Plans.</p>
    </div>
  )
}
