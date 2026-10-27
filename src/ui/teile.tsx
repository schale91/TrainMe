// Kleine Bausteine, die mehrere Seiten nutzen.

import { useState, type ReactNode } from "react"
import { Sym } from "./symbole"

export function Chips<T extends string>(props: { werte: { id: T; name: string; symbol?: string }[]; gewaehlt: T[]; onChange: (x: T[]) => void; einzeln?: boolean }) {
  return (
    <div className="chips">
      {props.werte.map((w) => {
        const an = props.gewaehlt.indexOf(w.id) >= 0
        return (
          <button
            key={w.id}
            type="button"
            className={"chip" + (an ? " an" : "")}
            onClick={() => {
              if (props.einzeln) props.onChange([w.id])
              else props.onChange(an ? props.gewaehlt.filter((x) => x !== w.id) : [...props.gewaehlt, w.id])
            }}
          >
            {w.symbol ? <Sym name={w.symbol} groesse={18} /> : null}
            {w.name}
          </button>
        )
      })}
    </div>
  )
}

export function Karten<T extends string>(props: { werte: { id: T; name: string; text?: string; symbol?: string }[]; gewaehlt: T; onChange: (x: T) => void }) {
  return (
    <div className="karten">
      {props.werte.map((w) => (
        <button key={w.id} type="button" className={"auswahl" + (props.gewaehlt === w.id ? " an" : "")} onClick={() => props.onChange(w.id)}>
          {w.symbol ? <Sym name={w.symbol} groesse={30} farbe="var(--akzent)" /> : null}
          <b>{w.name}</b>
          {w.text ? <small>{w.text}</small> : null}
        </button>
      ))}
    </div>
  )
}

/** Karten mit Mehrfachauswahl; mindestens eine bleibt gewählt. */
export function MehrKarten<T extends string>(props: { werte: { id: T; name: string; text?: string; symbol?: string }[]; gewaehlt: T[]; onChange: (x: T[]) => void }) {
  return (
    <div className="karten">
      {props.werte.map((w) => {
        const an = props.gewaehlt.indexOf(w.id) >= 0
        return (
          <button key={w.id} type="button" aria-pressed={an} className={"auswahl" + (an ? " an" : "")} onClick={() => props.onChange(an ? (props.gewaehlt.length > 1 ? props.gewaehlt.filter((x) => x !== w.id) : props.gewaehlt) : [...props.gewaehlt, w.id])}>
            {w.symbol ? <Sym name={w.symbol} groesse={30} farbe="var(--akzent)" /> : null}
            <b>{w.name}</b>
            {w.text ? <small>{w.text}</small> : null}
          </button>
        )
      })}
    </div>
  )
}

const zahlText = (x: number) => String(Math.round(x * 100) / 100).replace(".", ",")

/** Ein Wert zum Antippen; „Andere“ öffnet ein Zahlenfeld für Werte, die nicht in der Liste stehen. */
export function WertWahl(props: { werte: number[]; wert: number; onChange: (x: number) => void; einheit?: string; text?: (x: number) => string; min?: number; max?: number }) {
  const inListe = props.werte.some((x) => Math.abs(x - props.wert) < 1e-9)
  const [andere, setAndere] = useState(!inListe)
  const name = props.text || ((x: number) => zahlText(x) + (props.einheit ? " " + props.einheit : ""))
  return (
    <div className="chips">
      {props.werte.map((x) => (
        <button key={x} type="button" aria-pressed={!andere && Math.abs(x - props.wert) < 1e-9} className={"chip" + (!andere && Math.abs(x - props.wert) < 1e-9 ? " an" : "")} onClick={() => {
          setAndere(false)
          props.onChange(x)
        }}>
          {name(x)}
        </button>
      ))}
      <button type="button" aria-pressed={andere} className={"chip" + (andere ? " an" : "")} onClick={() => setAndere(true)}>
        Andere
      </button>
      {andere ? <Zahl wert={props.wert} min={props.min} max={props.max} einheit={props.einheit} onChange={props.onChange} /> : null}
    </div>
  )
}

/** Mehrere Werte zum Antippen, z. B. vorhandene Kettlebells. Werte außerhalb der Vorschläge bleiben als Chips sichtbar. */
export function ZahlChips(props: { vorschlaege: number[]; wert: number[]; onChange: (x: number[]) => void; einheit?: string }) {
  const alle = Array.from(new Set([...props.vorschlaege, ...props.wert])).sort((a, b) => a - b)
  return (
    <div className="chips">
      {alle.map((x) => {
        const an = props.wert.some((y) => Math.abs(x - y) < 1e-9)
        return (
          <button key={x} type="button" aria-pressed={an} className={"chip zahlchip" + (an ? " an" : "")} onClick={() => props.onChange(an ? props.wert.filter((y) => Math.abs(x - y) > 1e-9) : [...props.wert, x].sort((a, b) => a - b))}>
            {zahlText(x)}
            {props.einheit ? <small>{props.einheit}</small> : null}
          </button>
        )
      })}
    </div>
  )
}

/** Eingabe einer Zahlenliste wie „2, 4, 6,5“. */
export function Zahlenliste(props: { wert: number[]; onChange: (x: number[]) => void; platzhalter?: string }) {
  const [text, setText] = useState(props.wert.map((x) => String(x).replace(".", ",")).join("; "))
  return (
    <input
      inputMode="decimal"
      value={text}
      placeholder={props.platzhalter}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => {
        const liste = text
          .split(/[;\s]+/)
          .map((x) => Number(x.replace(",", ".")))
          .filter((x) => isFinite(x) && x > 0)
          .sort((a, b) => a - b)
        props.onChange(liste)
        setText(liste.map((x) => String(x).replace(".", ",")).join("; "))
      }}
    />
  )
}

export function Zahl(props: { wert: number | undefined; onChange: (x: number) => void; min?: number; max?: number; schritt?: number; einheit?: string }) {
  const [text, setText] = useState(props.wert === undefined ? "" : String(props.wert).replace(".", ","))
  return (
    <span className="zahl">
      <input
        inputMode="decimal"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => {
          let x = Number(text.replace(",", "."))
          if (!isFinite(x)) x = props.min ?? 0
          if (props.min !== undefined) x = Math.max(props.min, x)
          if (props.max !== undefined) x = Math.min(props.max, x)
          props.onChange(x)
          setText(String(x).replace(".", ","))
        }}
      />
      {props.einheit ? <span className="einheit">{props.einheit}</span> : null}
    </span>
  )
}

export function Feld(props: { titel: string; text?: string; children: ReactNode }) {
  return (
    <label className="feld">
      <span className="feldtitel">{props.titel}</span>
      {props.text ? <small>{props.text}</small> : null}
      {props.children}
    </label>
  )
}

export function Balken(props: { wert: number; max: number; farbe?: string }) {
  const p = props.max > 0 ? Math.min(100, (props.wert / props.max) * 100) : 0
  return (
    <div className="balken">
      <div style={{ width: p + "%", background: props.farbe }} />
    </div>
  )
}

export function Klappe(props: { titel: string; children: ReactNode; offen?: boolean }) {
  const [offen, setOffen] = useState(!!props.offen)
  return (
    <section className={"klappe" + (offen ? " offen" : "")}>
      <button type="button" className="klappkopf" onClick={() => setOffen(!offen)}>
        <span>{props.titel}</span>
        <span>{offen ? "▲" : "▼"}</span>
      </button>
      {offen ? <div className="klappinhalt">{props.children}</div> : null}
    </section>
  )
}
