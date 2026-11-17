// Wochenjournal im Aufräumen: drei Skalen, Beschwerden, eine freiwillige Zeile. Pflicht ist alles außer der Zeile;
// wer nicht ausfüllen will, überspringt die Woche (siehe logik/wochenjournal.ts).

import { useState } from "react"
import { journalUebersprungen, journalVollstaendig, SKALEN, STELLEN } from "../logik/wochenjournal"
import type { Gelenk, Wochenjournal } from "../logik/typen"
import { GELENK_NAME } from "./texte"

const kurz = (d: string) => d.slice(8, 10) + "." + d.slice(5, 7) + "."
const plusTage = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * 86400000).toISOString().slice(0, 10)

export function WochenjournalKarte(props: {
  woche: string
  nachtrag: boolean
  datum: string
  /** Was die App schon weiß, z. B. „4 Einheiten, 52 Sätze“ */
  bekannt: string[]
  fertig: boolean
  onSpeichern: (e: Wochenjournal) => void
  onUeberspringen: (e: Wochenjournal) => void
}) {
  const [wert, setWert] = useState<Partial<Record<(typeof SKALEN)[number]["id"], number>>>({})
  const [stellen, setStellen] = useState<Gelenk[] | undefined>(undefined)
  const [notiz, setNotiz] = useState("")
  const eintrag: Wochenjournal = { woche: props.woche, datum: props.datum, ...wert, ...(stellen ? { stellen } : {}), ...(notiz.trim() ? { notiz: notiz.trim().slice(0, 200) } : {}) }
  const komplett = journalVollstaendig(eintrag)

  if (props.fertig) {
    return (
      <div className="journal fertig" role="status">
        <b>Wochenjournal gespeichert</b>
      </div>
    )
  }

  return (
    <div className="journal" role="group" aria-label="Wochenjournal">
      <h3>
        Wochenjournal
        <small>
          {props.nachtrag ? "Nachtrag für die Woche " : "Woche "}
          {kurz(props.woche)} bis {kurz(plusTage(props.woche, 6))}
        </small>
      </h3>
      {props.bekannt.length ? (
        <p className="journalbekannt">
          <small>Das weiß die App schon</small> {props.bekannt.join(" · ")}
        </p>
      ) : null}

      {SKALEN.map((s) => (
        <div key={s.id} className="skala" role="radiogroup" aria-label={s.frage}>
          <span className="frage">{s.frage}</span>
          <div className="stufen">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" role="radio" aria-checked={wert[s.id] === n} className={"stufe" + (wert[s.id] === n ? " an" : "")} onClick={() => setWert({ ...wert, [s.id]: n })}>
                {n}
              </button>
            ))}
          </div>
          <span className="enden">
            <small>1 {s.von}</small>
            <small>5 {s.bis}</small>
          </span>
        </div>
      ))}

      <div className="skala" role="group" aria-label="Beschwerden">
        <span className="frage">Beschwerden diese Woche?</span>
        <div className="chips">
          <button type="button" className={"chip" + (stellen && stellen.length === 0 ? " an" : "")} aria-pressed={!!stellen && stellen.length === 0} onClick={() => setStellen([])}>
            Keine
          </button>
          {STELLEN.map((g) => {
            const an = !!stellen && stellen.indexOf(g) >= 0
            return (
              <button key={g} type="button" className={"chip" + (an ? " an" : "")} aria-pressed={an} onClick={() => setStellen(an ? (stellen!.length > 1 ? stellen!.filter((x) => x !== g) : undefined) : [...(stellen || []), g])}>
                {GELENK_NAME[g]}
              </button>
            )
          })}
        </div>
      </div>

      <label className="skala">
        <span className="frage">
          Was soll sich nächste Woche ändern? <small>freiwillig</small>
        </span>
        <input type="text" value={notiz} maxLength={200} onChange={(e) => setNotiz(e.target.value)} placeholder="eine Zeile" />
      </label>

      <button type="button" className="knopf voll" disabled={!komplett} onClick={() => props.onSpeichern(eintrag)}>
        {komplett ? "Speichern" : "Erst alle Fragen beantworten"}
      </button>
      <button type="button" className="textknopf" onClick={() => props.onUeberspringen(journalUebersprungen(props.woche, props.datum))}>
        Diese Woche überspringen
      </button>
    </div>
  )
}
