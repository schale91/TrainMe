// Funktionstests für die Reha (OARSI-Empfehlung): vor dem ersten Training und am Ende jedes Blocks. Zeigt die
// Einordnung und den Verlauf, damit Fortschritt sichtbar wird.

import { useState } from "react"
import { FUNKTIONSTESTS, einordnen } from "../daten/reha"
import { heute } from "../logik/plan"
import type { Daten, Messung } from "../logik/typen"
import { Gruppe, Seite } from "./ios"
import { datumText, zahl } from "./texte"

type Eingabe = { wert: string; rechts: string }

export default function RehaTests(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void; fertig: () => void; zurueck?: () => void }) {
  const { daten } = props
  const r = daten.profil!.reha!
  const alter = r.geburtsjahr ? Number(heute().slice(0, 4)) - r.geburtsjahr : undefined
  const [werte, setWerte] = useState<Record<string, Eingabe>>({})
  const setze = (id: string, neu: Partial<Eingabe>) => setWerte({ ...werte, [id]: { ...{ wert: "", rechts: "" }, ...werte[id], ...neu } })
  const zahlVon = (t: string) => {
    const x = Number(t.replace(",", "."))
    return t.trim() !== "" && isFinite(x) && x >= 0 ? x : null
  }
  const verlauf = (id: string) => (daten.messungen || []).filter((m) => m.test === id).sort((a, b) => (a.datum < b.datum ? -1 : 1))

  const speichern = () => {
    props.aendern((d) => {
      const neu: Messung[] = []
      for (const t of FUNKTIONSTESTS) {
        const e = werte[t.id]
        const w = e ? zahlVon(e.wert) : null
        if (w === null) continue
        const re = t.seiten && e ? zahlVon(e.rechts) : null
        neu.push({ test: t.id, datum: heute(), wert: w, ...(re !== null ? { rechts: re } : {}) })
      }
      d.messungen = [...(d.messungen || []), ...neu]
      d.einstufung = { ...(d.einstufung || {}), kraft: heute(), mobil: heute() }
    })
    props.fertig()
  }

  return (
    <Seite titel="Funktionstests" untertitel="Vor dem Start und am Ende jedes Blocks. Was du nicht sicher machen kannst, lässt du leer." zurueck={props.zurueck ? { text: "Zurück", onClick: props.zurueck } : undefined}>
      {!alter || !r.geschlecht ? <p className="hinweistext">Tipp: Mit Geburtsjahr und Geschlecht (Profil, Training und Sport) vergleicht TrainMe das Aufstehen mit Gleichaltrigen.</p> : null}
      {FUNKTIONSTESTS.map((t) => {
        const v = verlauf(t.id)
        const letzte = v[v.length - 1]
        const erste = v[0]
        const e = werte[t.id]
        const w = e ? zahlVon(e.wert) : null
        const einordnung = w !== null ? einordnen(t.id, t.seiten && e && zahlVon(e.rechts) !== null ? Math.min(w, zahlVon(e.rechts)!) : w, alter, r.geschlecht) : letzte ? einordnen(t.id, letzte.rechts !== undefined ? Math.min(letzte.wert, letzte.rechts) : letzte.wert, alter, r.geschlecht) : null
        return (
          <Gruppe key={t.id} titel={t.name} fuss={t.quelle}>
            <div className="rehatest">
              <ol>
                {t.anleitung.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
              <p className="leise">{t.sicherheit}</p>
              <div className="rehatestwerte">
                <label>
                  <span>{t.seiten ? "Links" : "Ergebnis"}</span>
                  <input inputMode="decimal" aria-label={t.name + (t.seiten ? " links" : "")} value={e?.wert || ""} placeholder={t.einheit} onChange={(x) => setze(t.id, { wert: x.target.value })} />
                </label>
                {t.seiten ? (
                  <label>
                    <span>Rechts</span>
                    <input inputMode="decimal" aria-label={t.name + " rechts"} value={e?.rechts || ""} placeholder={t.einheit} onChange={(x) => setze(t.id, { rechts: x.target.value })} />
                  </label>
                ) : null}
              </div>
              {einordnung ? <p className={"einordnung " + einordnung.stufe}>{einordnung.text}</p> : null}
              {letzte ? (
                <p className="leise">
                  Zuletzt {datumText(letzte.datum)}: {zahl(letzte.wert)}
                  {letzte.rechts !== undefined ? " / " + zahl(letzte.rechts) : ""} {t.einheit}
                  {erste && erste !== letzte ? " · am Anfang " + zahl(erste.wert) + (erste.rechts !== undefined ? " / " + zahl(erste.rechts) : "") + " " + t.einheit : ""}
                </p>
              ) : null}
            </div>
          </Gruppe>
        )
      })}
      <button type="button" className="knopf voll gross" onClick={speichern}>
        Speichern und weiter
      </button>
    </Seite>
  )
}
