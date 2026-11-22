// Krankheit auf „Heute“: Karte während der Krankheit, Hals-Check zum Melden und der Vorschlag aus den Uhrwerten
// (siehe logik/krankheit.ts).

import { useState } from "react"
import { SYMPTOME, WARNZEICHEN, krankMelden, krankZuruecknehmen, verlaufMelden, wiederFit } from "../logik/krankheit"
import type { Daten, Krankheit } from "../logik/typen"
import { Blatt } from "./ios"
import { Sym } from "./symbole"

type Aendern = (f: (d: Daten) => void) => void

const WT = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
const tagText = (d: string) => WT[(new Date(d + "T12:00:00Z").getUTCDay() + 6) % 7] + ", " + d.slice(8, 10) + "." + d.slice(5, 7) + "."

/** Karte während der Krankheit: Art, Tagesfrage, wieder fit */
export function KrankKarte(props: { krankheit: Krankheit; tag: string; aendern?: Aendern; symptome: () => void }) {
  const k = props.krankheit
  const heute = k.verlauf?.[props.tag]
  const a = props.aendern
  return (
    <div className="heutekarte ruhig krankkarte">
      <span className="heutekopf">
        <span className="marke krank">Krank</span>
        <span className="dauer">seit {tagText(k.seit)}</span>
      </span>
      <span className="heutetitel">
        <Sym name="blatt" groesse={26} /> {k.art === "hals" ? "Erkältet" : "Pause"}
      </span>
      <span className="heutevorschau">
        {k.art === "hals"
          ? "Nur oberhalb des Halses: Eine leichte Einheit ist möglich, Pause ist genauso in Ordnung. Der Plan wartet."
          : "Mit Fieber oder Allgemeinsymptomen: heute kein Training. Der Plan wartet, nichts gilt als verpasst."}
      </span>
      <span className="krankfrage">Wie geht es dir heute?</span>
      <span className="krankverlauf" role="radiogroup" aria-label="Wie geht es dir heute?">
        {(["schlechter", "gleich", "besser"] as const).map((w) => (
          <button key={w} type="button" role="radio" aria-checked={heute === w} className={"chip" + (heute === w ? " an" : "")} onClick={() => a?.((d) => verlaufMelden(d, props.tag, w))}>
            {w === "schlechter" ? "Schlechter" : w === "gleich" ? "Gleich" : "Besser"}
          </button>
        ))}
      </span>
      <button type="button" className="knopf voll" onClick={() => a?.((d) => wiederFit(d, props.tag))}>
        Wieder fit
      </button>
      <span className="tauschknoepfe">
        <button type="button" className="textknopf" onClick={props.symptome}>
          Symptome ändern
        </button>
        {k.seit === props.tag ? (
          <button type="button" className="textknopf" onClick={() => a?.((d) => krankZuruecknehmen(d, props.tag))}>
            Versehentlich gemeldet
          </button>
        ) : null}
      </span>
      <small className="krankwarnung">{WARNZEICHEN}</small>
    </div>
  )
}

const plusT = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * 86400000).toISOString().slice(0, 10)

/**
 * Hals-Check: seit wann (auch nachträglich), noch krank oder wieder fit, und vier Fragen; ein Ja heißt Pause. Wer die
 * App erst nach der Krankheit wieder öffnet, trägt sie hier nach: Der Plan rückt nach, und es geht mit der Rückkehr weiter.
 */
export function KrankCheck(props: { offen: boolean; schliessen: () => void; tag: string; laeuft: boolean; aendern?: Aendern; seitVorschlag?: string; fitVorschlag?: boolean }) {
  const [ja, setJa] = useState<string[]>([])
  const [seit, setSeit] = useState(props.seitVorschlag ?? props.tag)
  const [fit, setFit] = useState(!!props.fitVorschlag)
  const vergangen = seit < props.tag && !props.laeuft
  const melden = () => {
    props.aendern?.((d) => {
      krankMelden(d, props.tag, ja, seit)
      if (vergangen && fit) wiederFit(d, props.tag)
    })
    setJa([])
    props.schliessen()
  }
  const schnell = [
    { name: "Heute", d: props.tag },
    { name: "Gestern", d: plusT(props.tag, -1) },
    { name: "Vorgestern", d: plusT(props.tag, -2) },
  ]
  return (
    <Blatt offen={props.offen} onClose={props.schliessen} titel={props.laeuft ? "Symptome ändern" : "Krankheit eintragen"}>
      <span className="krankfrage">Seit wann?</span>
      <div className="krankseit">
        {schnell.map((x) => (
          <button key={x.d} type="button" className={"chip" + (seit === x.d ? " an" : "")} aria-pressed={seit === x.d} onClick={() => setSeit(x.d)}>
            {x.name}
          </button>
        ))}
        <input type="date" aria-label="Erster kranker Tag" value={seit} max={props.tag} min={plusT(props.tag, -30)} onChange={(e) => e.target.value && setSeit(e.target.value > props.tag ? props.tag : e.target.value)} />
      </div>
      {vergangen ? (
        <>
          <span className="krankfrage">Und jetzt?</span>
          <div className="krankseit" role="radiogroup" aria-label="Und jetzt?">
            <button type="button" role="radio" aria-checked={!fit} className={"chip" + (!fit ? " an" : "")} onClick={() => setFit(false)}>
              Noch krank
            </button>
            <button type="button" role="radio" aria-checked={fit} className={"chip" + (fit ? " an" : "")} onClick={() => setFit(true)}>
              Wieder fit
            </button>
          </div>
        </>
      ) : null}
      <p className="infokurz">
        {vergangen && fit ? "Hattest du eines davon? Davon hängt ab, wie vorsichtig der Wiedereinstieg ist." : "Hast du eines davon? Wenn ja, ist Pause. Wenn nicht (nur Schnupfen, Halskratzen, verstopfte Nase), ist eine leichte Einheit möglich."}
      </p>
      <div className="krankcheck">
        {SYMPTOME.map((s) => {
          const an = ja.indexOf(s.id) >= 0
          return (
            <button key={s.id} type="button" className={"chip" + (an ? " an" : "")} aria-pressed={an} onClick={() => setJa(an ? ja.filter((x) => x !== s.id) : [...ja, s.id])}>
              {s.text}
            </button>
          )
        })}
      </div>
      <button type="button" className="knopf voll gross" onClick={melden}>
        {vergangen && fit ? "Nachtragen: wieder fit ab heute" : ja.length ? "Krank melden: Pause" : "Nur Erkältung: krank melden"}
      </button>
      <p className="gruppenfuss">
        {WARNZEICHEN} Moderates Training bei reiner Erkältung veränderte in Studien Schwere und Dauer nicht (Weidner et al. 1998). Bei Fieber und Allgemeinsymptomen rät die Sportmedizin zur Pause und schrittweisen Rückkehr (IOC-Konsens 2022).
      </p>
    </Blatt>
  )
}

/** Vorschlag auf „Heute“, wenn die Uhr deutlich auffällig ist */
export function KrankVorschlag(props: { gruende: string[]; ja: () => void; nein: () => void }) {
  return (
    <div className="heutekarte ruhig krankvorschlag">
      <span className="heutetitel">
        <Sym name="herz" groesse={24} /> Bist du angeschlagen?
      </span>
      <span className="heutevorschau">Deine Uhr zeigt heute: {props.gruende.join(", ")}.</span>
      <span className="tauschknoepfe">
        <button type="button" className="knopf klein" onClick={props.ja}>
          Ja, Hals-Check
        </button>
        <button type="button" className="knopf klein leise" onClick={props.nein}>
          Nein, alles gut
        </button>
      </span>
    </div>
  )
}

/** Beim Öffnen nach einer längeren Pause: War das eine Krankheit? */
export function KrankNachfrage(props: { letzte: string; tage: number; auffaellig: { datum: string; gruende: string[] }[]; ja: () => void; nein: () => void }) {
  const a = props.auffaellig[0]
  return (
    <div className="heutekarte ruhig krankvorschlag">
      <span className="heutetitel">
        <Sym name="blatt" groesse={24} /> Warst du krank?
      </span>
      <span className="heutevorschau">
        Seit {tagText(props.letzte)} kein Training, {props.tage} Trainingstage fehlen.
        {a ? " Deine Uhr zeigte am " + tagText(a.datum) + ": " + a.gruende.join(", ") + "." : ""} Nachgetragen rückt der Plan einfach nach, die Serie bleibt, und du steigst vorsichtig wieder ein.
      </span>
      <span className="tauschknoepfe">
        <button type="button" className="knopf klein" onClick={props.ja}>
          Ja, nachtragen
        </button>
        <button type="button" className="knopf klein leise" onClick={props.nein}>
          Nein, nur Pause
        </button>
      </span>
    </div>
  )
}
