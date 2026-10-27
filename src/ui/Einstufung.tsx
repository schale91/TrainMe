// Einstufung vor dem ersten Training: Kraftwerte (Maximum für eine Wiederholung, direkt oder aus einem schweren Satz
// geschätzt) und Mobilitätsprofil. Danach rechnet der Plan Startgewichte aus und richtet die Mobilität auf
// Schwachstellen aus.

import { useMemo, useState } from "react"
import { e1rm } from "../logik/progression"
import { heute, lastGeraet, lastenAn, montagVon, wochenplan } from "../logik/plan"
import { lastText } from "../logik/gewichte"
import type { Daten, Uebung } from "../logik/typen"
import { Beweglichkeit } from "./Fortschritt"
import { Gruppe, Seite, Segment } from "./ios"
import { zahl } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"
import { rehaAktiv } from "../logik/reha"
import RehaTests from "./RehaTests"

type Eintrag = { last: string; wdh: string; rir: string }

export default function Einstufung(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void; fertig: () => void; zurueck?: () => void }) {
  const { daten } = props
  const profil = daten.profil!
  const [schritt, setSchritt] = useState<"kraft" | "mobil">(daten.einstufung?.kraft && !daten.einstufung?.mobil ? "mobil" : "kraft")
  const [info, setInfo] = useState<Uebung | null>(null)

  // Hauptübungen mit Gewicht aus dem aktuellen Plan, jede einmal
  const uebungen = useMemo(() => {
    const plan = wochenplan(profil, daten, montagVon(heute()))
    const gesehen = new Set<string>()
    const liste: { u: Uebung; ort: number }[] = []
    for (const e of plan)
      for (const p of e.plaetze)
        if (p.rolle === "haupt" && p.uebung.belastung === "gewicht" && !gesehen.has(p.uebung.id)) {
          gesehen.add(p.uebung.id)
          liste.push({ u: p.uebung, ort: e.ort })
        }
    return liste.slice(0, 10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profil])

  const [werte, setWerte] = useState<Record<string, Eintrag>>(() => {
    const w: Record<string, Eintrag> = {}
    for (const [id, m] of Object.entries(daten.maxwerte || {})) w[id] = { last: String(m.kg), wdh: "1", rir: "0" }
    return w
  })
  const setze = (id: string, neu: Partial<Eintrag>) => setWerte({ ...werte, [id]: { ...{ last: "", wdh: "", rir: "1" }, ...werte[id], ...neu } })
  const maxVon = (e?: Eintrag) => {
    if (!e || !e.last) return 0
    const last = Number(e.last)
    const wdh = Number(e.wdh || "1")
    if (!(last > 0) || !(wdh > 0) || wdh > 20) return 0
    return Math.round(e1rm({ last, wdh, rir: Number(e.rir) || 0 }) * 2) / 2
  }

  const kraftFertig = () => {
    props.aendern((d) => {
      const m = { ...(d.maxwerte || {}) }
      for (const { u } of uebungen) {
        const x = maxVon(werte[u.id])
        if (x > 0) m[u.id] = { kg: x, datum: heute() }
      }
      d.maxwerte = m
      d.einstufung = { ...(d.einstufung || {}), kraft: heute() }
    })
    setSchritt("mobil")
    window.scrollTo(0, 0)
  }

  const mobilFertig = () => {
    props.aendern((d) => {
      d.einstufung = { ...(d.einstufung || {}), mobil: heute() }
    })
    props.fertig()
  }

  if (rehaAktiv(profil)) return <RehaTests daten={daten} aendern={props.aendern} fertig={props.fertig} zurueck={props.zurueck} />

  return (
    <Seite titel="Einstufung" untertitel="Einmal vor dem ersten Training. Danach passen Startgewichte und Mobilität zu dir." zurueck={props.zurueck ? { text: "Zurück", onClick: props.zurueck } : undefined}>
      <Segment
        werte={[
          { id: "kraft", name: "1. Kraftwerte" },
          { id: "mobil", name: "2. Mobilität" },
        ]}
        wert={schritt}
        onChange={setSchritt}
      />
      {schritt === "kraft" ? (
        <>
          <p className="hinweistext">
            Trag zu jeder Übung einen schweren Satz ein, den du in letzter Zeit sauber geschafft hast: Gewicht, Wiederholungen und wie viele noch gegangen wären. Bei 1 Wiederholung ohne Reserve ist das direkt dein
            Maximum. Kein Maximaltest nötig, eine ehrliche Schätzung reicht. Übungen, die du nicht kennst, lässt du leer: Dann tastet sich die App im ersten Training heran.
          </p>
          {uebungen.map(({ u, ort }) => {
            const o = profil.orte[ort] || profil.orte[0]
            const lasten = lastenAn(u, o)
            const g = lastGeraet(u, o)
            const e = werte[u.id]
            const max = maxVon(e)
            return (
              <div key={u.id} className="einstufkarte">
                <button type="button" className="einstufname" onClick={() => setInfo(u)}>
                  {u.name}
                </button>
                <div className="einstufzeile">
                  <label>
                    <span>Gewicht</span>
                    <select value={e?.last || ""} onChange={(x) => setze(u.id, { last: x.target.value })}>
                      <option value="">nicht bekannt</option>
                      {lasten.map((l) => (
                        <option key={l} value={l}>
                          {lastText(l, g)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Wdh</span>
                    <input inputMode="numeric" value={e?.wdh || ""} placeholder="1" onChange={(x) => setze(u.id, { wdh: x.target.value.replace(/[^0-9]/g, "") })} />
                  </label>
                  <label>
                    <span>im Tank</span>
                    <select value={e?.rir ?? "1"} onChange={(x) => setze(u.id, { rir: x.target.value })}>
                      {[0, 1, 2, 3].map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <small className={"einstufmax" + (max ? " an" : "")}>{max ? "Geschätztes Maximum: " + zahl(max) + " kg" + (g === "kurzhantel" ? " je Hand" : "") : "Leer lassen, wenn du es nicht weißt"}</small>
              </div>
            )
          })}
          {uebungen.length === 0 ? <p className="hinweistext">In deinem Plan gibt es keine Übungen mit Zusatzgewicht. Weiter zur Mobilität.</p> : null}
          <button type="button" className="knopf voll gross" onClick={kraftFertig}>
            Weiter zur Mobilität
          </button>
        </>
      ) : (
        <>
          <p className="hinweistext">Miss dich einmal durch, das dauert etwa 15 Minuten. Tests, die du gerade nicht machen kannst, lässt du aus. Schwache Bereiche bekommen danach mehr Mobilität im Plan.</p>
          <Beweglichkeit daten={daten} aendern={props.aendern} />
          <Gruppe fuss={daten.messungen.length + " Tests gemessen"}>
            <div />
          </Gruppe>
          <button type="button" className="knopf voll gross" onClick={mobilFertig}>
            {daten.messungen.length ? "Fertig, Plan starten" : "Ohne Messung starten"}
          </button>
        </>
      )}
      <UebungInfoBlatt uebung={info} onClose={() => setInfo(null)} />
    </Seite>
  )
}
