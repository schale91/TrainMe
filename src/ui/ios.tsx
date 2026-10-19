// Bausteine im Stil von iOS: große Titel, gruppierte Listen, Schalter, Segmente, Blätter von unten.

import { useEffect, useState, type ReactNode } from "react"

// ---------- Symbole (eigene, einfarbige Linien-Icons) ----------

const PFADE: Record<string, string> = {
  heute: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z",
  uebungen: "M3 9h2v6H3zM19 9h2v6h-2zM6 6h2.5v12H6zM15.5 6H18v12h-2.5zM8.5 11h7v2h-7z",
  abenteuer: "M14.5 3.5 20.5 9.5 11 19l-3 .5.5-3zM4 20l3.5-3.5M13 5l6 6",
  fortschritt: "M4 19h16M6 16l4-5 3 3 5-7",
  profil: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20a7.5 7.5 0 0 1 15 0",
  info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 11v6M12 7.5v.5",
  zurueck: "M15 5l-7 7 7 7",
  weiter: "M9 5l7 7-7 7",
  schliessen: "M6 6l12 12M18 6 6 18",
  suche: "M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM16 16l5 5",
  tauschen: "M4 8h13l-3-3M20 16H7l3 3",
  timer: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2.5 2M9.5 2.5h5",
  haken: "M5 12.5l4.5 4.5L19 7.5",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  kiste: "M3.5 9.5h17v10h-17zM3.5 9.5 6 5h12l2.5 4.5M12 9.5v10M10 13h4",
  muenze: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4M12 7.5v9",
  flamme: "M12 21c-4 0-6.5-2.6-6.5-6 0-3.5 3-5.5 3.5-9 2 1.5 3 3.5 3 5.5 1-.8 1.6-2 1.8-3.3C16 10 18.5 12.6 18.5 15c0 3.4-2.5 6-6.5 6z",
  golf: "M8 21V3l9 4-9 4M5 21h8",
  filter: "M4 6h16M7 12h10M10 18h4",
  test: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3",
  teilen: "M12 3v12M8 7l4-4 4 4M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6",
}

export function Icon(props: { name: keyof typeof PFADE | string; groesse?: number; dick?: number }) {
  const g = props.groesse || 22
  return (
    <svg width={g} height={g} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.dick || 1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PFADE[props.name] || ""} />
    </svg>
  )
}

// ---------- Seite ----------

/** leiste: bleibt mit der Navigationsleiste beim Scrollen oben stehen, z. B. ein Fortschrittsbalken. */
export function Seite(props: { titel: string; untertitel?: string; rechts?: ReactNode; zurueck?: { text: string; onClick: () => void }; leiste?: ReactNode; children: ReactNode }) {
  return (
    <div className="seite">
      {props.zurueck ? (
        <div className="navleiste">
          <button type="button" className="navzurueck" onClick={props.zurueck.onClick}>
            <Icon name="zurueck" groesse={24} dick={2.4} />
            <span>{props.zurueck.text}</span>
          </button>
          {props.rechts}
          {props.leiste ? <div className="navunten">{props.leiste}</div> : null}
        </div>
      ) : null}
      <header className="grosstitel">
        <div>
          <h1>{props.titel}</h1>
          {props.untertitel ? <p>{props.untertitel}</p> : null}
        </div>
        {!props.zurueck && props.rechts ? props.rechts : null}
      </header>
      {props.children}
    </div>
  )
}

// ---------- Gruppierte Liste ----------

export function Gruppe(props: { titel?: string; fuss?: ReactNode; children: ReactNode; klasse?: string }) {
  return (
    <section className={"gruppe " + (props.klasse || "")}>
      {props.titel ? <h3 className="gruppentitel">{props.titel}</h3> : null}
      <div className="gruppeninhalt">{props.children}</div>
      {props.fuss ? <p className="gruppenfuss">{props.fuss}</p> : null}
    </section>
  )
}

export function Zeile(props: { titel: ReactNode; untertitel?: ReactNode; wert?: ReactNode; symbol?: ReactNode; onClick?: () => void; pfeil?: boolean; gefahr?: boolean; rechts?: ReactNode }) {
  const inhalt = (
    <>
      {props.symbol ? <span className="zeilensymbol">{props.symbol}</span> : null}
      <span className="zeilentext">
        <span className={"zeilentitel" + (props.gefahr ? " gefahr" : "")}>{props.titel}</span>
        {props.untertitel ? <span className="zeilenunter">{props.untertitel}</span> : null}
      </span>
      {props.wert !== undefined ? <span className="zeilenwert">{props.wert}</span> : null}
      {props.rechts}
      {props.onClick && props.pfeil !== false ? (
        <span className="chevron">
          <Icon name="weiter" groesse={16} dick={2.4} />
        </span>
      ) : null}
    </>
  )
  return props.onClick ? (
    <button type="button" className="zeile klickbar" onClick={props.onClick}>
      {inhalt}
    </button>
  ) : (
    <div className="zeile">{inhalt}</div>
  )
}

export function Schalter(props: { an: boolean; onChange: (an: boolean) => void; label?: string }) {
  return (
    <button type="button" role="switch" aria-checked={props.an} aria-label={props.label} className={"schalter" + (props.an ? " an" : "")} onClick={() => props.onChange(!props.an)}>
      <span />
    </button>
  )
}

export function Segment<T extends string>(props: { werte: { id: T; name: string }[]; wert: T; onChange: (x: T) => void }) {
  return (
    <div className="segmente" role="tablist">
      {props.werte.map((w) => (
        <button key={w.id} type="button" role="tab" aria-selected={props.wert === w.id} className={props.wert === w.id ? "an" : ""} onClick={() => props.onChange(w.id)}>
          {w.name}
        </button>
      ))}
    </div>
  )
}

// ---------- Blatt von unten ----------

export function Blatt(props: { offen: boolean; onClose: () => void; titel?: string; children: ReactNode; hoch?: boolean }) {
  const [sichtbar, setSichtbar] = useState(props.offen)
  useEffect(() => {
    if (props.offen) setSichtbar(true)
    else {
      const t = setTimeout(() => setSichtbar(false), 220)
      return () => clearTimeout(t)
    }
  }, [props.offen])
  useEffect(() => {
    if (!props.offen) return
    const zu = (e: KeyboardEvent) => e.key === "Escape" && props.onClose()
    window.addEventListener("keydown", zu)
    return () => window.removeEventListener("keydown", zu)
  }, [props.offen, props.onClose])
  if (!sichtbar) return null
  return (
    <div className={"blatthintergrund" + (props.offen ? " offen" : "")} onClick={props.onClose}>
      <div className={"blatt" + (props.hoch ? " hoch" : "")} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="griff" />
        <div className="blattkopf">
          <b>{props.titel}</b>
          <button type="button" className="rundknopf" onClick={props.onClose} aria-label="Schließen">
            <Icon name="schliessen" groesse={16} dick={2.6} />
          </button>
        </div>
        <div className="blattinhalt">{props.children}</div>
      </div>
    </div>
  )
}

// ---------- Kleinteile ----------

export function Fortschrittsbalken(props: { wert: number; max: number; farbe?: string; hoehe?: number }) {
  const p = props.max > 0 ? Math.max(0, Math.min(100, (props.wert / props.max) * 100)) : 0
  return (
    <div className="pbalken" style={{ height: props.hoehe || 8 }}>
      <div style={{ width: p + "%", background: props.farbe }} />
    </div>
  )
}

export function Plakette(props: { children: ReactNode; farbe?: string }) {
  return (
    <span className="plakette" style={props.farbe ? { background: props.farbe } : undefined}>
      {props.children}
    </span>
  )
}
