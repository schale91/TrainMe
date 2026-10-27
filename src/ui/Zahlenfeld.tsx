// Zahlenfeld für die Eingabe im Training: große Tasten, Plus und Minus in der Stufe des Geräts, Wechsel zwischen
// Gewicht und Wiederholungen und Abhaken direkt aus dem Feld. Schneller als die Handytastatur mit verschwitzten Fingern.

import type { ReactNode } from "react"
import { Icon } from "./ios"

export interface Eingabestand {
  puffer: string
  /** Die erste Ziffer ersetzt den alten Wert */
  frisch: boolean
}

/** Eine Taste verarbeiten. dezimal: Komma erlaubt (Gewicht). */
export function taste(st: Eingabestand, k: string, dezimal: boolean): Eingabestand {
  if (/^[0-9]$/.test(k)) {
    let p = st.frisch ? k : st.puffer === "0" ? k : st.puffer + k
    if (p.replace(",", "").length > 5) p = st.puffer
    return { puffer: p, frisch: false }
  }
  if (k === ",") {
    if (!dezimal) return st
    if (st.frisch) return { puffer: "0,", frisch: false }
    return st.puffer.includes(",") ? st : { puffer: (st.puffer || "0") + ",", frisch: false }
  }
  if (k === "del") return { puffer: st.puffer.slice(0, -1), frisch: false }
  if (k === "clr") return { puffer: "", frisch: false }
  return st
}

export const zahlAus = (puffer: string): number | null => {
  if (puffer === "" || puffer === ",") return null
  const n = parseFloat(puffer.replace(",", "."))
  return isFinite(n) ? n : null
}

export const alsPuffer = (x: number | null | undefined): string => (x === null || x === undefined ? "" : String(Math.round(x * 100) / 100).replace(".", ","))

export function Zahlenfeld(props: {
  uebung: string
  feld: string
  anzeige: string
  minusText: string
  plusText: string
  dezimal: boolean
  minus: () => void
  plus: () => void
  taste: (k: string) => void
  weiterText?: string
  weiter?: () => void
  okText: string
  ok: () => void
  schliessen: () => void
  /** z. B. Scheiben je Seite */
  zusatz?: ReactNode
  /** laufende Pause */
  pause?: string
}) {
  const t = (k: string, inhalt: ReactNode = k, klasse = "") => (
    <button type="button" className={klasse} onClick={() => props.taste(k)} aria-label={k === "del" ? "Löschen" : k === "clr" ? "Alles löschen" : undefined}>
      {inhalt}
    </button>
  )
  return (
    <div className="zahlenfeld" role="dialog" aria-label={props.feld + " eingeben"}>
      <div className="zfkopf">
        <div className="zftitel">
          <small>{props.uebung}</small>
          <b>{props.feld}</b>
        </div>
        {props.pause ? <span className="zfpause">Pause {props.pause}</span> : null}
        <button type="button" className="rundknopf" aria-label="Schließen" onClick={props.schliessen}>
          <Icon name="schliessen" groesse={16} />
        </button>
      </div>
      {props.zusatz ? <div className="zfzusatz">{props.zusatz}</div> : null}
      <div className="zftasten">
        <button type="button" className="op" onClick={props.minus}>
          {props.minusText}
        </button>
        <div className="zfanzeige" aria-live="polite">
          {props.anzeige || "0"}
        </div>
        <button type="button" className="op" onClick={props.plus}>
          {props.plusText}
        </button>
        {t("1")}
        {t("2")}
        {t("3")}
        {t("del", "⌫", "fn")}
        {t("4")}
        {t("5")}
        {t("6")}
        {props.weiter ? (
          <button type="button" className="fn" onClick={props.weiter}>
            {props.weiterText}
          </button>
        ) : (
          t("clr", "C", "fn")
        )}
        {t("7")}
        {t("8")}
        {t("9")}
        {props.weiter ? t("clr", "C", "fn") : <span />}
        {props.dezimal ? t(",", ",") : <span />}
        {t("0")}
        <button type="button" className="go" onClick={props.ok}>
          {props.okText}
        </button>
      </div>
    </div>
  )
}
