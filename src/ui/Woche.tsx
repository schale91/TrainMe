// Startseite mit heutiger Einheit und Wochenübersicht.

import { useMemo, useState } from "react"
import { BLOCK_WOCHEN, blockWoche, istEntlastung } from "../logik/progression"
import { heute, montagVon, plusTage, wochenplan } from "../logik/plan"
import { serie, stufe, stufenName } from "../logik/spiel"
import type { Daten, Einheit } from "../logik/typen"
import { Balken } from "./teile"
import { ROLLE, TERMINE, WT, datumText } from "./texte"

export function istErledigt(daten: Daten, e: Einheit): boolean {
  return daten.erledigt.some((x) => (x.geplant || x.datum) === e.datum && x.titel === e.titel)
}

export default function Woche(props: { daten: Daten; oeffnen: (e: Einheit) => void }) {
  const { daten } = props
  const profil = daten.profil!
  const tag = heute()
  const [montag, setMontag] = useState(montagVon(tag))
  const plan = useMemo(() => wochenplan(profil, daten, montag), [profil, daten, montag])
  const w = blockWoche(profil, montag)
  const s = stufe(daten.spiel.xp)
  const heutige = plan.find((e) => e.datum === tag)
  const naechste = plan.find((e) => e.datum >= tag && !istErledigt(daten, e))
  const ser = serie(profil, daten.erledigt, tag)
  const aktuelleWoche = montag === montagVon(tag)

  return (
    <div className="woche">
      <div className="held">
        <div>
          <p className="unter">{profil.name ? "Hallo " + profil.name + "!" : "Hallo!"}</p>
          <h1>
            Stufe {s.stufe} <small>{stufenName(s.stufe)}</small>
          </h1>
          <Balken wert={s.imLevel} max={s.noetig} />
          <p className="unter klein">
            {s.imLevel} / {s.noetig} XP · 🔥 {ser} {ser === 1 ? "Woche" : "Wochen"} Serie
          </p>
        </div>
      </div>

      {aktuelleWoche ? (
        heutige && !istErledigt(daten, heutige) ? (
          <button type="button" className="karte heute" onClick={() => props.oeffnen(heutige)}>
            <span className="marke">Heute</span>
            <h2>{heutige.titel}</h2>
            <p>
              {heutige.plaetze.length} Übungen · etwa {heutige.minuten} min
            </p>
            <p className="vorschau">{heutige.plaetze.map((p) => p.uebung.name).join(" · ")}</p>
            <span className="los">Los geht's ▶</span>
          </button>
        ) : (
          <div className="karte heute ruhig">
            <span className="marke">Heute</span>
            <h2>{heutige ? "Erledigt ✅" : profil.woche[(new Date().getDay() + 6) % 7].art === "sporttermin" ? "Sporttermin" : "Ruhetag"}</h2>
            <p>{heutige ? "Stark! Erholung gehört zum Training." : "Erholung gehört zum Training."}</p>
            {naechste ? (
              <button type="button" className="knopf leise" onClick={() => props.oeffnen(naechste)}>
                {naechste.titel} ({WT[(new Date(naechste.datum + "T12:00:00Z").getUTCDay() + 6) % 7]}) jetzt machen
              </button>
            ) : null}
          </div>
        )
      ) : null}

      <div className="reihe zwischen wochenkopf">
        <button type="button" className="knopf klein leise" onClick={() => setMontag(plusTage(montag, -7))}>
          ◀
        </button>
        <div className="mitte">
          <b>
            {datumText(montag)} bis {datumText(plusTage(montag, 6))}
          </b>
          <small>{istEntlastung(w) ? "Entlastungswoche 🛌" : "Block-Woche " + (w + 1) + " von " + (BLOCK_WOCHEN - 1) + " · danach Entlastung"}</small>
        </div>
        <button type="button" className="knopf klein leise" onClick={() => setMontag(plusTage(montag, 7))}>
          ▶
        </button>
      </div>

      <div className="tage">
        {profil.woche.map((t, i) => {
          const datum = plusTage(montag, i)
          const e = plan.find((x) => x.datum === datum)
          const fertig = e && istErledigt(daten, e)
          return (
            <button type="button" key={i} className={"tag" + (datum === tag ? " heute" : "") + (fertig ? " fertig" : "") + (e ? " " + e.art : "")} disabled={!e} onClick={() => e && props.oeffnen(e)}>
              <span className="wt">
                {WT[i]}
                <small>{datumText(datum).slice(0, -3)}</small>
              </span>
              <span className="inhalt">
                {e ? (
                  <>
                    <b>{e.titel}</b>
                    <small>
                      {e.minuten} min · {e.plaetze.map((p) => ROLLE[p.rolle]).filter((x, k, a) => a.indexOf(x) === k).slice(0, 3).join(", ")}
                    </small>
                  </>
                ) : t.art === "sporttermin" ? (
                  <b className="termin">⚽ {TERMINE.find((x) => x.id === t.termin)?.name}</b>
                ) : (
                  <span className="frei">frei</span>
                )}
              </span>
              <span className="status">{fertig ? "✅" : e ? "›" : ""}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
