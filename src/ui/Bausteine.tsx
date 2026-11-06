// Bausteine: feste Zusatzeinheiten neben dem Plan (z. B. morgens laufen). Anlegen und ändern in den Plan-Einstellungen,
// je Woche zusätzlich, statt Kraft oder aus in der Wochenübersicht.

import { useState } from "react"
import { BAUSTEIN_ARTEN, MODI, TAGESZEITEN, bausteinName, neueBausteinId, planEnde } from "../logik/bausteine"
import { heute, montagVon, plusTage } from "../logik/plan"
import type { Baustein, BausteinModus, Daten } from "../logik/typen"
import { Blatt, Gruppe, Segment, Zeile } from "./ios"
import { Feld, WertWahl } from "./teile"
import { WT, datumText } from "./texte"

const tageText = (b: Baustein) => b.tage.map((t) => WT[t]).join(", ")

/** Voraussichtliches Planende mit und ohne Bausteine, als Satz (nur beim eigenen Plan) */
export function planEndeText(daten: Daten): string | null {
  const p = daten.profil
  if (!p || p.planart !== "eigen" || !daten.eigenerPlan) return null
  const mit = planEnde(p, daten, heute(), true)
  const ohne = planEnde(p, daten, heute(), false)
  if (!mit) return null
  if (!ohne || mit === ohne) return "Dein Plan endet voraussichtlich am " + datumText(mit) + "."
  return "Dein Plan endet voraussichtlich am " + datumText(mit) + " statt am " + datumText(ohne) + ", weil Bausteine Krafttage ersetzen."
}

/** Liste der Bausteine mit Anlegen und Bearbeiten (Plan-Einstellungen) */
export function BausteinListe(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void }) {
  const liste = props.daten.profil?.bausteine || []
  const [offen, setOffen] = useState<Baustein | null>(null)
  const ende = planEndeText(props.daten)
  const neu = (): Baustein => ({ id: neueBausteinId(), art: "laufen_locker", tage: [0, 3], tageszeit: "morgens", minuten: 30, ab: montagVon(plusTage(heute(), 7)), modus: "zusatz" })
  const speichern = (b: Baustein) => {
    props.aendern((d) => {
      const alt = d.profil!.bausteine || []
      d.profil!.bausteine = alt.some((x) => x.id === b.id) ? alt.map((x) => (x.id === b.id ? b : x)) : [...alt, b]
    })
    setOffen(null)
  }
  const loeschen = (id: string) => {
    props.aendern((d) => void (d.profil!.bausteine = (d.profil!.bausteine || []).filter((x) => x.id !== id)))
    setOffen(null)
  }
  return (
    <>
      <Gruppe
        titel="Zusatzeinheiten"
        fuss={
          <>
            Feste Einheiten neben dem Plan, z. B. zweimal die Woche morgens locker laufen. Je Woche wählst du in der Übersicht: zusätzlich (Doppeltag, der Plan bleibt), statt Kraft (der Plan rückt nach hinten) oder aus.
            {ende ? " " + ende : ""}
          </>
        }
      >
        {liste.map((b) => (
          <Zeile key={b.id} titel={bausteinName(b)} untertitel={tageText(b) + " · " + b.minuten + " min · ab " + datumText(b.ab) + (b.bis ? " bis " + datumText(b.bis) : "") + " · " + (b.modus === "statt" ? "statt Kraft" : "zusätzlich")} pfeil onClick={() => setOffen(b)} />
        ))}
        <Zeile titel={<span className="akzent">Zusatzeinheit hinzufügen</span>} onClick={() => setOffen(neu())} />
      </Gruppe>
      <Blatt offen={!!offen} onClose={() => setOffen(null)} titel={offen && liste.some((x) => x.id === offen.id) ? "Zusatzeinheit ändern" : "Neue Zusatzeinheit"}>
        {offen ? <BausteinForm b={offen} speichern={speichern} loeschen={liste.some((x) => x.id === offen.id) ? () => loeschen(offen.id) : undefined} /> : null}
      </Blatt>
    </>
  )
}

function BausteinForm(props: { b: Baustein; speichern: (b: Baustein) => void; loeschen?: () => void }) {
  const [b, setB] = useState(props.b)
  const setze = (x: Partial<Baustein>) => setB({ ...b, ...x })
  return (
    <div className="bausteinform">
      <Feld titel="Art">
        <div className="chips">
          {BAUSTEIN_ARTEN.map((a) => (
            <button key={a.id} type="button" className={"chip" + (b.art === a.id ? " an" : "")} aria-pressed={b.art === a.id} onClick={() => setze({ art: a.id })}>
              {a.name}
            </button>
          ))}
        </div>
      </Feld>
      <Feld titel="Wochentage">
        <div className="chips">
          {WT.map((t, i) => {
            const an = b.tage.indexOf(i) >= 0
            return (
              <button key={t} type="button" className={"chip" + (an ? " an" : "")} aria-pressed={an} onClick={() => setze({ tage: an ? b.tage.filter((x) => x !== i) : [...b.tage, i].sort() })}>
                {t}
              </button>
            )
          })}
        </div>
      </Feld>
      <Feld titel="Tageszeit">
        <Segment werte={TAGESZEITEN} wert={b.tageszeit} onChange={(x) => setze({ tageszeit: x })} />
      </Feld>
      <Feld titel="Dauer">
        <WertWahl werte={[20, 30, 40, 45, 60]} wert={b.minuten} min={10} max={180} einheit="min" onChange={(minuten) => setze({ minuten })} />
      </Feld>
      <Feld titel="Ab">
        <input type="date" value={b.ab} onChange={(e) => e.target.value && setze({ ab: e.target.value })} />
      </Feld>
      <Feld titel="Bis (leer: ohne Ende)">
        <input type="date" value={b.bis || ""} onChange={(e) => setze({ bis: e.target.value || undefined })} />
      </Feld>
      <Feld titel="Meistens">
        <Segment
          werte={[
            { id: "zusatz", name: "Zusätzlich" },
            { id: "statt", name: "Statt Kraft" },
          ]}
          wert={b.modus}
          onChange={(x) => setze({ modus: x as Baustein["modus"] })}
        />
      </Feld>
      <p className="hinweistext klein">
        {b.modus === "statt"
          ? "An diesen Tagen fällt das Krafttraining weg. Dein Plan geht danach mit dem nächsten Tag weiter und dauert dadurch länger."
          : "Doppeltag: Kraft bleibt wie geplant. Locker laufen und einige Stunden Abstand halten, dann leiden Muskelaufbau und Kraft kaum (Schumann et al. 2022)."}{" "}
        Je Woche kannst du es in der Übersicht ändern.
      </p>
      <div className="knopfreihe">
        <button type="button" className="knopf voll" disabled={!b.tage.length} onClick={() => props.speichern(b)}>
          Speichern
        </button>
        {props.loeschen ? (
          <button type="button" className="knopf voll leise" onClick={props.loeschen}>
            Löschen
          </button>
        ) : null}
      </div>
    </div>
  )
}

/** Bausteine einer Woche mit Wahl je Woche (Wochenübersicht) */
export function BausteinWoche(props: { daten: Daten; montag: string; aendern?: (f: (d: Daten) => void) => void }) {
  const p = props.daten.profil
  const ende = plusTage(props.montag, 6)
  const aktiv = (p?.bausteine || []).filter((b) => b.ab <= ende && (!b.bis || b.bis >= props.montag) && b.tage.length)
  if (!aktiv.length || !props.aendern) return null
  const setze = (id: string, m: BausteinModus) =>
    props.aendern!((d) => {
      d.profil!.bausteine = (d.profil!.bausteine || []).map((b) => {
        if (b.id !== id) return b
        const wochen = { ...(b.wochen || {}) }
        if (m === b.modus) delete wochen[props.montag]
        else wochen[props.montag] = m
        return { ...b, wochen }
      })
    })
  const text = planEndeText(props.daten)
  return (
    <Gruppe titel="Zusatzeinheiten diese Woche" fuss={text ?? undefined}>
      {aktiv.map((b) => (
        <div key={b.id} className="bausteinzeile">
          <span>
            <b>{bausteinName(b)}</b>
            <small>{tageText(b) + " · " + b.minuten + " min"}</small>
          </span>
          <Segment werte={MODI} wert={b.wochen?.[props.montag] ?? b.modus} onChange={(m) => setze(b.id, m)} />
        </div>
      ))}
    </Gruppe>
  )
}
