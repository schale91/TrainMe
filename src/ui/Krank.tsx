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

/** Hals-Check: vier Fragen, ein Ja heißt Pause */
export function KrankCheck(props: { offen: boolean; schliessen: () => void; tag: string; laeuft: boolean; aendern?: Aendern }) {
  const [ja, setJa] = useState<string[]>([])
  const melden = () => {
    props.aendern?.((d) => krankMelden(d, props.tag, ja))
    setJa([])
    props.schliessen()
  }
  return (
    <Blatt offen={props.offen} onClose={props.schliessen} titel={props.laeuft ? "Symptome ändern" : "Ich bin krank"}>
      <p className="infokurz">Hast du eines davon? Wenn ja, ist heute Pause. Wenn nicht (nur Schnupfen, Halskratzen, verstopfte Nase), ist eine leichte Einheit möglich.</p>
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
        {ja.length ? "Krank melden: Pause" : "Nur Erkältung: krank melden"}
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
