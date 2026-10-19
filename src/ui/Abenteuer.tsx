// Abenteuer: Held läuft nach rechts, trifft Gegner, kämpft automatisch. Dazu Kisten, Laden und Ausrüstung.

import { useEffect, useRef, useState } from "react"
import {
  AUFWERTEN,
  FREISCHALTEN,
  GEGENSTAENDE,
  KISTEN,
  LEVEL_JE_WELT,
  WELTEN,
  aufwerten,
  aufwertenKosten,
  ausruesten,
  gegenstand,
  gegnerFuer,
  held,
  kaufen,
  kisteOeffnen,
  kistenChancen,
  naechsterKampf,
  werte,
  type Gegenstand,
  type Inhalt,
  type Kampf,
} from "../logik/abenteuer"
import type { Daten, Kistenart, Slot } from "../logik/typen"
import { zeichne, type Szene } from "./abenteuerGrafik"
import { Blatt, Gruppe, Icon, Seite, Segment, Zeile } from "./ios"
import { Pixel, PixelWert } from "./pixel"

const SLOT_NAME: Record<Slot, string> = { waffe: "Waffe", ruestung: "Rüstung", helm: "Helm", schild: "Schild", begleiter: "Begleiter" }
const SELTEN_NAME = { gewoehnlich: "Gewöhnlich", selten: "Selten", episch: "Episch", legendaer: "Legendär" }
const SELTEN_FARBE = { gewoehnlich: "#9aa3b0", selten: "#ff9d42", episch: "#c26bff", legendaer: "#5ee6c4" }

export function KistenBild(props: { art: Kistenart; offen?: boolean; wackeln?: boolean; klein?: boolean }) {
  const k = KISTEN[props.art]
  return (
    <div className={"kistenbild" + (props.offen ? " offen" : "") + (props.wackeln ? " wackeln" : "") + (props.klein ? " klein" : "")} style={{ ["--kiste" as string]: k.farbe }}>
      <div className="deckel" />
      <div className="korpus">
        <div className="schloss" />
      </div>
      {props.offen ? <div className="strahlen" /> : null}
    </div>
  )
}

/** Kiste antippen, aufgehen lassen, Inhalt zeigen. */
export function KisteAufmachen(props: { art: Kistenart; oeffnen: () => Inhalt | null; fertig: () => void }) {
  const [phase, setPhase] = useState<"zu" | "wackelt" | "offen">("zu")
  const [inhalt, setInhalt] = useState<Inhalt | null>(null)
  const los = () => {
    if (phase !== "zu") return
    setPhase("wackelt")
    setTimeout(() => {
      setInhalt(props.oeffnen())
      setPhase("offen")
    }, 900)
  }
  return (
    <div className="kisteoeffnen">
      <button type="button" className="kistenknopf" onClick={los} aria-label="Kiste öffnen">
        <KistenBild art={props.art} wackeln={phase === "wackelt"} offen={phase === "offen"} />
      </button>
      <b className="kistenname">{KISTEN[props.art].name}</b>
      {phase === "zu" ? <p className="unterhinweis">Antippen zum Öffnen</p> : null}
      {phase === "offen" && inhalt ? (
        <div className="kisteninhalt">
          <div className="beute muenzen">
            <Pixel name="muenze" groesse={34} />
            <b>+{inhalt.muenzen}</b>
            <small>Münzen</small>
          </div>
          {inhalt.karten.map((k, i) => {
            const g = gegenstand(k.id)!
            return (
              <div key={k.id} className="beute" style={{ animationDelay: 0.15 * (i + 1) + "s", borderColor: SELTEN_FARBE[g.seltenheit] }}>
                <Pixel name={g.id} groesse={34} />
                <b>×{k.anzahl}</b>
                <small>{g.name}</small>
                {k.neu ? <em>Neu</em> : null}
              </div>
            )
          })}
          <button type="button" className="knopf voll" onClick={props.fertig}>
            Weiter
          </button>
        </div>
      ) : null}
    </div>
  )
}

function GegenstandZeile(props: { daten: Daten; g: Gegenstand; aendern: (f: (d: Daten) => void) => void }) {
  const { g } = props
  const s = props.daten.spiel
  const e = s.inventar[g.id]
  const st = e?.stufe || 0
  const karten = e?.karten || 0
  const angelegt = s.ausgeruestet[g.slot] === g.id
  const kosten = st === 0 ? { karten: FREISCHALTEN[g.seltenheit], muenzen: 0 } : aufwertenKosten(g, st)
  const kannAufwerten = !!kosten && karten >= kosten.karten && s.muenzen >= kosten.muenzen
  const kannKaufen = st === 0 && !!g.preis && s.muenzen >= g.preis
  const w = werte(g, Math.max(1, st))
  const werteText = (
    <>
      {w.angriff ? <PixelWert name="angriff" wert={Math.round(w.angriff)} groesse={12} /> : null}
      {w.verteidigung ? <PixelWert name="verteidigung" wert={Math.round(w.verteidigung)} groesse={12} /> : null}
      {w.leben ? <PixelWert name="herz" wert={Math.round(w.leben)} groesse={12} /> : null}
    </>
  )
  return (
    <div className={"gegenstand" + (angelegt ? " angelegt" : "") + (st === 0 ? " gesperrt" : "")}>
      <span className="gsymbol" style={{ borderColor: SELTEN_FARBE[g.seltenheit] }}>
        <Pixel name={g.id} groesse={30} />
      </span>
      <div className="gtext">
        <b>
          {g.name} {st > 0 ? <small>Stufe {st}</small> : null}
        </b>
        <small className="gwerte">
          {SELTEN_NAME[g.seltenheit]} {werteText}
        </small>
        {kosten ? (
          <small className="karten">
            Karten {karten}/{kosten.karten}
            {kosten.muenzen ? <> · <PixelWert name="muenze" wert={kosten.muenzen} groesse={11} /></> : null}
          </small>
        ) : (
          <small className="karten">Höchste Stufe</small>
        )}
      </div>
      <div className="gknoepfe">
        {kannKaufen ? (
          <button type="button" className="knopf klein" onClick={() => props.aendern((d) => void kaufen(d.spiel, g.id))}>
            <PixelWert name="muenze" wert={g.preis || 0} groesse={14} />
          </button>
        ) : st === 0 && g.preis ? (
          <span className="preis">
            <PixelWert name="muenze" wert={g.preis} groesse={13} />
          </span>
        ) : null}
        {kannAufwerten ? (
          <button type="button" className="knopf klein gruen" onClick={() => props.aendern((d) => void aufwerten(d.spiel, g.id))}>
            {st === 0 ? "Freischalten" : "Aufwerten"}
          </button>
        ) : null}
        {st > 0 && !angelegt ? (
          <button type="button" className="knopf klein leise" onClick={() => props.aendern((d) => ausruesten(d.spiel, g.id))}>
            Anlegen
          </button>
        ) : null}
        {angelegt ? <span className="angelegtmarke">angelegt</span> : null}
      </div>
    </div>
  )
}

export default function Abenteuer(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void }) {
  const { daten } = props
  const s = daten.spiel
  const canvas = useRef<HTMLCanvasElement>(null)
  const [szene, setSzene] = useState<Szene | null>(null)
  const [ergebnis, setErgebnis] = useState<(Kampf & { belohnung: number }) | null>(null)
  const [fertig, setFertig] = useState(true)
  const [reiter, setReiter] = useState<"laden" | "ausruestung" | "kisten">(s.kisten.length ? "kisten" : "laden")
  const [kisteOffen, setKisteOffen] = useState(false)
  const [chancen, setChancen] = useState(false)
  const [kampfGegner, setKampfGegner] = useState<ReturnType<typeof gegnerFuer> | null>(null)

  const level = s.level
  const g = gegnerFuer(level)
  const anzeige = !fertig && kampfGegner ? kampfGegner : g
  const h = held(s)
  const welt = WELTEN[g.welt]
  const ausg = s.ausgeruestet

  // Ruhebild oder laufender Kampf
  useEffect(() => {
    const el = canvas.current
    if (!el) return
    const c = el.getContext("2d")
    if (!c) return
    const dpr = window.devicePixelRatio || 1
    const B = el.clientWidth
    const H = el.clientHeight
    el.width = B * dpr
    el.height = H * dpr
    c.setTransform(dpr, 0, 0, dpr, 0, 0)
    c.imageSmoothingEnabled = false
    const sz: Szene = szene || { welt: g.welt, ...ausg, gegnerArt: g.art, boss: g.boss, kampf: null, start: performance.now() - 10000 }
    let lauf = 0
    const schleife = (jetzt: number) => {
      const ende = zeichne(c, B, H, sz, szene ? jetzt : sz.start + 10000 + (jetzt % 100000))
      if (szene && ende) {
        setFertig(true)
        setSzene(null)
        return
      }
      lauf = requestAnimationFrame(schleife)
    }
    lauf = requestAnimationFrame(schleife)
    return () => cancelAnimationFrame(lauf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [szene, level, ausg.waffe, ausg.ruestung, ausg.helm, ausg.schild, ausg.begleiter])

  const kaempfen = () => {
    if (!fertig) return
    const vor = { welt: g.welt, art: g.art, boss: g.boss }
    setKampfGegner(g)
    let k: (Kampf & { belohnung: number }) | null = null
    props.aendern((d) => {
      k = naechsterKampf(d.spiel)
    })
    const kampf = k as unknown as Kampf & { belohnung: number }
    setErgebnis(null)
    setFertig(false)
    setSzene({ welt: vor.welt, ...ausg, gegnerArt: vor.art, boss: vor.boss, kampf, start: performance.now() })
    setTimeout(() => setErgebnis(kampf), (2.4 + kampf.dauer + 0.8) * 1000)
  }

  const gruppen: Slot[] = ["waffe", "ruestung", "helm", "schild", "begleiter"]
  const imLaden = GEGENSTAENDE.filter((x) => x.preis)

  return (
    <Seite
      titel="Abenteuer"
      untertitel={welt.name + " · Level " + level + (g.boss ? " · Boss" : "")}
      rechts={
        <span className="muenzanzeige">
          <PixelWert name="muenze" wert={s.muenzen} groesse={18} />
        </span>
      }
    >
      <div className="buehne">
        <canvas ref={canvas} className="spielfeld" />
        <div className="buehnenfuss">
          <span>
            <PixelWert name="herz" wert={Math.round(h.leben)} groesse={14} />
            <PixelWert name="angriff" wert={Math.round(h.angriff)} groesse={14} />
            <PixelWert name="verteidigung" wert={Math.round(h.verteidigung)} groesse={14} />
          </span>
          <span>
            {anzeige.name} <PixelWert name="herz" wert={anzeige.leben} groesse={14} />
          </span>
        </div>
      </div>
      {ergebnis ? (
        <div className={"kampfergebnis " + (ergebnis.sieg ? "sieg" : "niederlage")}>
          {ergebnis.sieg ? (
            <>
              <b>Sieg nach {Math.round(ergebnis.dauer)} s!</b> +{ergebnis.belohnung} Münzen{(level - 1) % LEVEL_JE_WELT === 0 && level > 1 ? " · Neue Welt: " + WELTEN[Math.min(WELTEN.length - 1, Math.floor((level - 1) / LEVEL_JE_WELT))].name : ""}
            </>
          ) : ergebnis.grund === "zeit" ? (
            <b>Nach 30 Sekunden noch nicht besiegt. Rückzug! Mehr Training, bessere Ausrüstung, dann klappt es.</b>
          ) : (
            <b>Besiegt. Trainiere, öffne Kisten und rüste auf, dann versuch es wieder.</b>
          )}
        </div>
      ) : null}
      <button type="button" className="knopf voll gross" disabled={!fertig} onClick={kaempfen}>
        {fertig ? "Weiterziehen" : "Kampf läuft …"}
      </button>
      {!ausg.waffe ? <p className="hinweistext">Tipp: Ohne Waffe wird es schwer. Das Holzschwert gibt es im Laden für 100 Münzen, deine erste Kiste nach dem Training reicht dafür.</p> : null}

      <Segment
        werte={[
          { id: "kisten", name: "Kisten" + (s.kisten.length ? " (" + s.kisten.length + ")" : "") },
          { id: "laden", name: "Laden" },
          { id: "ausruestung", name: "Ausrüstung" },
        ]}
        wert={reiter}
        onChange={setReiter}
      />

      {reiter === "kisten" ? (
        <Gruppe
          fuss={
            <button type="button" className="linkknopf" onClick={() => setChancen(true)}>
              Wie oft kommt welche Kiste?
            </button>
          }
        >
          {s.kisten.length === 0 ? <Zeile titel="Keine Kiste da" untertitel="Nach jedem Training, bei dem du jede Übung einträgst, gibt es eine Kiste." /> : null}
          {s.kisten.map((k, i) => (
            <Zeile key={i} titel={KISTEN[k.art].name} untertitel={"verdient am " + k.datum.split("-").reverse().join(".")} symbol={<KistenBild art={k.art} klein />} onClick={i === 0 ? () => setKisteOffen(true) : undefined} wert={i === 0 ? "Öffnen" : undefined} />
          ))}
        </Gruppe>
      ) : null}

      {reiter === "laden" ? (
        <Gruppe titel="Laden" fuss="Seltene Gegenstände gibt es nur über Karten aus Kisten. Episches und Legendäres nur mit Glück.">
          {imLaden.map((x) => (
            <GegenstandZeile key={x.id} daten={daten} g={x} aendern={props.aendern} />
          ))}
        </Gruppe>
      ) : null}

      {reiter === "ausruestung"
        ? gruppen.map((slot) => (
            <Gruppe key={slot} titel={SLOT_NAME[slot]}>
              {GEGENSTAENDE.filter((x) => x.slot === slot).map((x) => (
                <GegenstandZeile key={x.id} daten={daten} g={x} aendern={props.aendern} />
              ))}
            </Gruppe>
          ))
        : null}

      <Blatt offen={kisteOffen} onClose={() => setKisteOffen(false)} titel="Kiste">
        {kisteOffen && s.kisten[0] ? (
          <KisteAufmachen
            art={s.kisten[0].art}
            oeffnen={() => {
              let inhalt: Inhalt | null = null
              props.aendern((d) => {
                inhalt = kisteOeffnen(d.spiel)
              })
              return inhalt
            }}
            fertig={() => setKisteOffen(false)}
          />
        ) : null}
      </Blatt>

      <Blatt offen={chancen} onClose={() => setChancen(false)} titel="Kistenchancen">
        <p className="infokurz">Die Kisten kommen in einem festen Zyklus von 240 Kisten, wie beim Vorbild Clash Royale. Dazu gibt es sehr selten Sonderkisten.</p>
        <Gruppe>
          {Object.entries(kistenChancen()).map(([art, p]) => (
            <Zeile key={art} titel={KISTEN[art as Kistenart].name} symbol={<KistenBild art={art as Kistenart} klein />} wert={(p * 100).toFixed(p < 0.01 ? 2 : 1).replace(".", ",") + " %"} />
          ))}
        </Gruppe>
        <Gruppe titel="Aufwerten">
          {(Object.keys(AUFWERTEN) as (keyof typeof AUFWERTEN)[]).map((sel) => (
            <Zeile key={sel} titel={SELTEN_NAME[sel]} untertitel={"Freischalten mit " + FREISCHALTEN[sel] + " Karten, dann " + AUFWERTEN[sel].karten.slice(0, 4).join(", ") + " … Karten je Stufe"} />
          ))}
        </Gruppe>
        <p className="gruppenfuss">
          <Icon name="info" groesse={14} /> Die Verteilung des Vorbilds stammt von Spielerseiten, Supercell hat den Zyklus nie offiziell veröffentlicht.
        </p>
      </Blatt>
    </Seite>
  )
}
