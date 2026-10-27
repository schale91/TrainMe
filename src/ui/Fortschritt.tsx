// Fortschritt: Kraftkurven (geschätztes Maximum je Einheit), Beweglichkeitstests und die 1-%-Methode.

import { hatSport } from "../logik/auswahl"
import { useMemo, useState } from "react"
import { uebung } from "../daten/uebungen/index"
import { FAKTEN, faktDesTages, prozentMethode } from "../daten/fakten"
import { TESTS, bewerte, testTexte, type BeweglichkeitsTest } from "../daten/tests"
import { heute, montagVon, plusTage, schwachstellen } from "../logik/plan"
import { ABZEICHEN, bestwert } from "../logik/spiel"
import type { Daten, Messung, Protokoll } from "../logik/typen"
import { Blatt, Gruppe, Icon, Seite, Segment, Zeile } from "./ios"
import { MUSTER_NAME, datumText, zahl } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"
import { Sym, SymKachel } from "./symbole"
import Koerpergewicht from "./Koerper"
import Dehnfigur from "./Dehnfigur"
import { TEST_DEHNUNGEN } from "../daten/dehnungen/tests"

type Punkt = { datum: string; wert: number }

/** Kraftkurve im Stil des Kraftbuchs: Linie, Punkte, Bestwerte mit Pokal, erster und letzter Wert beschriftet. */
export function Kurve(props: { punkte: Punkt[]; einheit: string; hoehe?: number; mini?: boolean; ohneBestwerte?: boolean }) {
  const p = props.punkte
  const B = 320
  const H = props.hoehe || 150
  if (p.length === 0) return null
  const pad = props.mini ? { l: 4, r: 4, o: 6, u: 6 } : { l: 14, r: 14, o: 30, u: 22 }
  let min = Math.min(...p.map((q) => q.wert))
  let max = Math.max(...p.map((q) => q.wert))
  if (min === max) {
    min -= 1
    max += 1
  }
  const x = (i: number) => pad.l + (B - pad.l - pad.r) * (p.length === 1 ? 0.5 : i / (p.length - 1))
  const y = (v: number) => pad.o + (H - pad.o - pad.u) * (1 - (v - min) / (max - min))
  let lauf = -Infinity
  const rekord = p.map((q, i) => {
    const neu = q.wert > lauf
    if (neu) lauf = q.wert
    // beim Körpergewicht ist „höher“ kein Bestwert
    return i > 0 && neu && !props.ohneBestwerte
  })
  const pfad = p.map((q, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(q.wert).toFixed(1)).join(" ")
  const flaeche = pfad + ` L${x(p.length - 1).toFixed(1)} ${H - pad.u} L${x(0).toFixed(1)} ${H - pad.u} Z`
  const letzte = p[p.length - 1]
  return (
    <svg viewBox={`0 0 ${B} ${H}`} className={"kurve" + (props.mini ? " mini" : "")} role="img" aria-label="Verlauf">
      <defs>
        <linearGradient id="kurvenfuellung" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--akzent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--akzent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {!props.mini ? <line x1={pad.l} x2={B - pad.r} y1={H - pad.u} y2={H - pad.u} stroke="var(--linie)" /> : null}
      <path d={flaeche} fill="url(#kurvenfuellung)" />
      <path d={pfad} fill="none" stroke="var(--akzent)" strokeWidth={props.mini ? 2 : 2.5} strokeLinejoin="round" strokeLinecap="round" />
      {!props.mini
        ? p.map((q, i) => (
            <circle key={i} cx={x(i)} cy={y(q.wert)} r={rekord[i] ? 5.5 : 3.8} fill={rekord[i] ? "var(--gold)" : "var(--flaeche)"} stroke={rekord[i] ? "var(--gold)" : "var(--akzent)"} strokeWidth="2">
              <title>
                {datumText(q.datum)}: {zahl(q.wert)} {props.einheit}
                {rekord[i] ? " · Bestwert" : ""}
              </title>
            </circle>
          ))
        : null}
      {!props.mini && p.length > 2 ? (
        <text x={x(0)} y={Math.max(12, y(p[0].wert) - 9)} className="kurventext leise">
          {zahl(p[0].wert)}
        </text>
      ) : null}
      {!props.mini ? (
        <text x={x(p.length - 1)} y={Math.max(14, y(letzte.wert) - 10)} textAnchor="end" className="kurventext">
          {zahl(letzte.wert)} {props.einheit}
          {rekord[p.length - 1] ? " · Bestwert" : ""}
        </text>
      ) : null}
      {!props.mini ? (
        <>
          <text x={pad.l} y={H - 5} className="kurventext leise klein">
            {datumText(p[0].datum)}
          </text>
          <text x={B - pad.r} y={H - 5} textAnchor="end" className="kurventext leise klein">
            {datumText(letzte.datum)}
          </text>
        </>
      ) : null}
    </svg>
  )
}

function verlaufVon(protokoll: Protokoll[], id: string): Punkt[] {
  const proTag = new Map<string, number>()
  for (const p of protokoll) {
    if (p.uebung !== id) continue
    const w = Math.round(bestwert(p) * 2) / 2
    if (w > (proTag.get(p.datum) || 0)) proTag.set(p.datum, w)
  }
  return Array.from(proTag.entries())
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([datum, wert]) => ({ datum, wert }))
}

/** Punkte der Kraftkurve einer Übung: ältere Werte (z. B. aus dem Kraftbuch) und das Protokoll. */
export function kurvenPunkte(daten: Daten, id: string): Punkt[] {
  return [...(daten.archiv?.[id] || []).map((x) => ({ datum: x.datum, wert: x.kg })), ...verlaufVon(daten.protokoll, id)].sort((a, b) => (a.datum < b.datum ? -1 : 1))
}

function Kraft(props: { daten: Daten }) {
  const { daten } = props
  const [offen, setOffen] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const uebungen = useMemo(() => {
    const letzte: Record<string, string> = {}
    for (const p of daten.protokoll) if (!letzte[p.uebung] || letzte[p.uebung] < p.datum) letzte[p.uebung] = p.datum
    return Object.keys(letzte)
      .filter((id) => uebung(id))
      .sort((a, b) => (letzte[a] < letzte[b] ? 1 : -1))
  }, [daten.protokoll])

  const wochen = Array.from({ length: 8 }, (_, i) => plusTage(montagVon(heute()), -7 * (7 - i)))
  const saetze = wochen.map((m) => daten.erledigt.filter((e) => e.datum >= m && e.datum < plusTage(m, 7)).reduce((s, e) => s + e.saetze, 0))
  const maxS = Math.max(1, ...saetze)

  if (!daten.protokoll.length) {
    return (
      <div className="leer">
        <Sym name="kurve" groesse={44} farbe="var(--akzent)" />
        <h2>Noch keine Daten</h2>
        <p>Nach dem ersten Training siehst du hier für jede Übung deine Kraftkurve.</p>
      </div>
    )
  }
  const sel = offen ? uebung(offen) : null
  // Ältere Werte (z. B. Phase 1 aus dem Kraftbuch) stehen davor in der Kurve
  const selPunkte = offen ? kurvenPunkte(daten, offen) : []
  const mitLast = offen ? daten.protokoll.some((p) => p.uebung === offen && p.saetze.some((s) => s.last)) : false
  const einheit = (id: string) => (daten.protokoll.some((p) => p.uebung === id && p.saetze.some((s) => s.last)) ? "kg" : uebung(id)?.belastung === "zeit" ? "s" : "Wdh")

  return (
    <>
      <Gruppe titel="Sätze pro Woche">
        <div className="saeulen">
          {saetze.map((s, i) => (
            <div key={i} className="saeule">
              <span className="saeulenwert">{s || ""}</span>
              <div style={{ height: (s / maxS) * 100 + "%" }} />
              <small>{datumText(wochen[i]).slice(0, -3)}</small>
            </div>
          ))}
        </div>
      </Gruppe>
      <Gruppe titel="Kraftkurven" fuss="Bei Gewichtsübungen: geschätztes Maximum für eine Wiederholung aus Gewicht, Wiederholungen und Reserve (Epley-Formel). Goldene Punkte sind neue Bestwerte.">
        {uebungen.map((id) => {
          const pk = verlaufVon(daten.protokoll, id)
          const erst = pk[0].wert
          const letzt = pk[pk.length - 1].wert
          const plus = erst > 0 ? Math.round(((letzt - erst) / erst) * 100) : 0
          return (
            <Zeile
              key={id}
              titel={uebung(id)!.name}
              untertitel={zahl(letzt) + " " + einheit(id) + (pk.length > 1 ? " · " + (plus >= 0 ? "+" : "") + plus + " % seit Start" : "")}
              rechts={
                <span className="minikurve">
                  <Kurve punkte={pk} einheit="" hoehe={60} mini />
                </span>
              }
              onClick={() => setOffen(id)}
            />
          )
        })}
      </Gruppe>
      <Blatt offen={!!sel} onClose={() => setOffen(null)} titel={sel ? sel.name : ""} hoch>
        {sel ? (
          <>
            <p className="infokurz">{mitLast ? "Geschätztes Maximum (1 Wiederholung) je Einheit" : "Bester Satz je Einheit"}</p>
            <Kurve punkte={selPunkte} einheit={einheit(sel.id)} hoehe={190} />
            <Gruppe titel="Einheiten">
              {daten.protokoll
                .filter((p) => p.uebung === sel.id)
                .slice(-12)
                .reverse()
                .map((p, i) => (
                  <Zeile
                    key={i}
                    titel={datumText(p.datum)}
                    untertitel={p.saetze.map((s) => (s.last ? zahl(s.last) + " kg × " + s.wdh : s.sekunden ? s.sekunden + " s" : s.wdh + " Wdh") + (sel.art === "kraft" && sel.muster.indexOf("schnellkraft") < 0 && (s.last || (!s.sekunden && s.wdh > 1)) ? " (" + s.rir + " im Tank)" : "")).join(" · ")}
                  />
                ))}
            </Gruppe>
            <button type="button" className="knopf leise voll" onClick={() => setInfo(sel.id)}>
              <Icon name="info" groesse={18} /> Anleitung zur Übung
            </button>
          </>
        ) : null}
      </Blatt>
      <UebungInfoBlatt uebung={info ? uebung(info) || null : null} onClose={() => setInfo(null)} />
    </>
  )
}

const FARBE = { gut: "var(--gruen)", mittel: "var(--gold)", schwach: "var(--rot)" }
const WORT = { gut: "gut", mittel: "mittel", schwach: "ausbaufähig" }

function wertText(t: BeweglichkeitsTest, w: number): string {
  if (t.einheit === "stufe") return t.stufen?.find((s) => s.wert === w) ? ["schwach", "mittel", "gut"][w] : String(w)
  return zahl(w) + " " + t.einheit
}

export function Beweglichkeit(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void }) {
  const { daten } = props
  const golf = (!!daten.profil && hatSport(daten.profil, "golf"))
  const [test, setTest] = useState<BeweglichkeitsTest | null>(null)
  const [links, setLinks] = useState<string>("")
  const [rechts, setRechts] = useState<string>("")
  const letzte = (id: string): Messung | undefined => daten.messungen.filter((m) => m.test === id).sort((a, b) => (a.datum < b.datum ? 1 : -1))[0]
  const sortiert = [...TESTS].sort((a, b) => (golf ? Number(b.golf) - Number(a.golf) : 0))
  const schwach = schwachstellen(daten)

  const oeffne = (t: BeweglichkeitsTest) => {
    const m = letzte(t.id)
    setLinks(m ? String(m.wert).replace(".", ",") : "")
    setRechts(m && m.rechts !== undefined ? String(m.rechts).replace(".", ",") : "")
    setTest(t)
  }
  const zahlVon = (x: string) => Number(x.replace(",", "."))
  const speichern = () => {
    if (!test) return
    const w = zahlVon(links)
    if (!isFinite(w) || links === "") return
    const r = test.seiten ? zahlVon(rechts) : undefined
    props.aendern((d) => {
      d.messungen.push({ test: test.id, datum: heute(), wert: w, ...(r !== undefined && isFinite(r) && rechts !== "" ? { rechts: r } : {}) })
    })
    setTest(null)
  }

  return (
    <>
      {schwach.length ? (
        <Gruppe titel="Dein Fokus" fuss="Diese Bereiche bekommen in deinem Plan zusätzliche Mobilitätsübungen, bis die Tests besser ausfallen.">
          {schwach.slice(0, 4).map((m) => (
            <Zeile key={m} titel={MUSTER_NAME[m]} symbol={<span className="punkt" style={{ background: "var(--gold)" }} />} />
          ))}
        </Gruppe>
      ) : (
        <p className="hinweistext">Miss deine Beweglichkeit einmal im Monat. Schwache Bereiche bekommen dann automatisch mehr Mobilität im Plan.</p>
      )}
      <Gruppe titel={golf ? "Tests (Golf-Screening zuerst)" : "Tests"} fuss={"Orientierungswerte aus Fachliteratur" + (golf ? " und dem öffentlich beschriebenen TPI-Screening" : "") + ". Keine Diagnose: bei Schmerzen bitte ärztlich oder physiotherapeutisch abklären lassen."}>
        {sortiert.map((t) => {
          const m = letzte(t.id)
          const b = m ? [bewerte(t, m.wert), ...(m.rechts !== undefined ? [bewerte(t, m.rechts)] : [])] : []
          const schlecht = b.includes("schwach") ? "schwach" : b.includes("mittel") ? "mittel" : b.length ? "gut" : null
          return (
            <Zeile
              key={t.id}
              titel={t.name}
              untertitel={m ? (t.seiten ? "L " + wertText(t, m.wert) + (m.rechts !== undefined ? " · R " + wertText(t, m.rechts) : "") : wertText(t, m.wert)) + " · " + datumText(m.datum) : t.bereich + (golf && t.golf ? " · Golf-Screening" : "")}
              symbol={<span className="punkt" style={{ background: schlecht ? FARBE[schlecht] : "var(--linie)" }} />}
              wert={schlecht ? WORT[schlecht] : "messen"}
              onClick={() => oeffne(t)}
            />
          )
        })}
      </Gruppe>
      <Blatt offen={!!test} onClose={() => setTest(null)} titel={test ? test.name : ""} hoch>
        {test ? (
          <div className="testblatt">
            <p className="infokurz">{testTexte(test, golf).bedeutung}</p>
            {TEST_DEHNUNGEN[test.id] ? <Dehnfigur dehnung={TEST_DEHNUNGEN[test.id]} /> : null}
            <h4>So misst du</h4>
            <ol className="schritte">
              {test.anleitung.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="infoauch">Hilfsmittel: {testTexte(test, golf).hilfsmittel}</p>
            <h4>Dein Ergebnis</h4>
            {test.einheit === "stufe" ? (
              (test.seiten ? (["links", "rechts"] as const) : (["links"] as const)).map((seite) => (
                <div key={seite} className="stufenwahl">
                  {test.seiten ? <b>{seite === "links" ? "Links" : "Rechts"}</b> : null}
                  {test.stufen!.map((s) => {
                    const an = (seite === "links" ? links : rechts) === String(s.wert)
                    return (
                      <button key={s.wert} type="button" className={"stufenknopf" + (an ? " an" : "")} onClick={() => (seite === "links" ? setLinks(String(s.wert)) : setRechts(String(s.wert)))}>
                        {s.text}
                      </button>
                    )
                  })}
                </div>
              ))
            ) : (
              <div className="messfelder">
                <label>
                  <span>{test.seiten ? "Links" : "Wert"}</span>
                  <input inputMode="decimal" value={links} onChange={(e) => setLinks(e.target.value)} placeholder="0" />
                  <em>{test.einheit}</em>
                </label>
                {test.seiten ? (
                  <label>
                    <span>Rechts</span>
                    <input inputMode="decimal" value={rechts} onChange={(e) => setRechts(e.target.value)} placeholder="0" />
                    <em>{test.einheit}</em>
                  </label>
                ) : null}
              </div>
            )}
            <p className="infoauch">
              Ziel: {test.hoeherBesser ? "ab " : "bis "}
              {test.einheit === "stufe" ? "der besten Stufe" : zahl(test.gut) + " " + test.einheit}
            </p>
            <button type="button" className="knopf voll" disabled={links === "" || (test.seiten && test.einheit === "stufe" && rechts === "")} onClick={speichern}>
              Speichern
            </button>
            {daten.messungen.filter((m) => m.test === test.id).length > 1 ? (
              <>
                <h4>Verlauf</h4>
                <Kurve
                  punkte={daten.messungen
                    .filter((m) => m.test === test.id)
                    .sort((a, b) => (a.datum < b.datum ? -1 : 1))
                    .map((m) => ({ datum: m.datum, wert: m.rechts !== undefined ? (m.wert + m.rechts) / 2 : m.wert }))}
                  einheit={test.einheit === "stufe" ? "" : test.einheit}
                />
              </>
            ) : null}
            <p className="quelle">Quelle: {testTexte(test, golf).quelle}</p>
          </div>
        ) : null}
      </Blatt>
    </>
  )
}

function EinProzent(props: { daten: Daten }) {
  const { daten } = props
  const n = daten.erledigt.length
  const { faktor, prozent } = prozentMethode(n)
  const ziel = prozentMethode(n + 52 * Math.max(1, daten.profil ? daten.profil.woche.filter((t) => t.art === "training").length : 3))
  const tag = heute()
  const montag = montagVon(tag)
  const kraftWoche = daten.erledigt.filter((e) => e.datum >= montag && (e.art === "kraft" || e.art === undefined)).length
  const golf = !!daten.profil && hatSport(daten.profil, "golf")
  const fakt = faktDesTages(tag, golf ? "golf" : undefined, golf)
  const kurve = Array.from({ length: 21 }, (_, i) => {
    const x = Math.round((i / 20) * Math.max(n, 20) * 1.5)
    return { datum: "", wert: Math.pow(1.01, x) }
  })
  const B = 320
  const H = 140
  const maxX = Math.max(n, 20) * 1.5
  const maxY = Math.pow(1.01, maxX)
  const px = (x: number) => 14 + (x / maxX) * (B - 28)
  const py = (v: number) => H - 16 - ((v - 1) / (maxY - 1)) * (H - 36)

  return (
    <>
      <div className="prozentkarte">
        <small>Jede Einheit 1 % besser</small>
        <b>×{zahl(Math.round(faktor * 100) / 100)}</b>
        <p>
          {n} {n === 1 ? "Einheit" : "Einheiten"} = 1,01<sup>{n}</sup>, also {prozent} % besser als am ersten Tag.
        </p>
        <svg viewBox={`0 0 ${B} ${H}`} className="kurve">
          <path d={kurve.map((q, i) => (i ? "L" : "M") + px((i / 20) * maxX).toFixed(1) + " " + py(q.wert).toFixed(1)).join(" ")} fill="none" stroke="var(--linie)" strokeWidth="2" strokeDasharray="4 4" />
          <path
            d={Array.from({ length: n + 1 }, (_, x) => (x ? "L" : "M") + px(x).toFixed(1) + " " + py(Math.pow(1.01, x)).toFixed(1)).join(" ")}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx={px(n)} cy={py(faktor)} r="6" fill="var(--gold)" />
        </svg>
        <p className="leise">In einem Jahr mit deinem Wochenplan: ×{zahl(Math.round(ziel.faktor * 10) / 10)}. Kleine Schritte, die sich aufsummieren.</p>
      </div>
      <Gruppe titel="Du gehörst dazu">
        <Zeile titel={n > 0 ? "Du bewegst dich. Weltweit tun das 31 % der Erwachsenen zu wenig." : "Starte dein erstes Training"} untertitel="WHO 2024" />
        {kraftWoche >= 2 ? <Zeile titel="Diese Woche 2 oder mehr Krafteinheiten: Damit gehörst du zu den etwa 36 % in Deutschland, die die Empfehlung für Muskeltraining erfüllen." untertitel="Robert Koch-Institut, GEDA 2019/2020" /> : <Zeile titel={"Noch " + (2 - kraftWoche) + " Krafteinheit" + (2 - kraftWoche === 1 ? "" : "en") + " diese Woche, dann gehörst du zu den etwa 36 % in Deutschland, die ihre Muskeln ausreichend trainieren."} untertitel="Robert Koch-Institut, GEDA 2019/2020" />}
      </Gruppe>
      <Gruppe titel="Fakt des Tages" fuss={<a href={fakt.url} target="_blank" rel="noreferrer">Quelle: {fakt.quelle}</a>}>
        <Zeile titel={fakt.text} />
      </Gruppe>
      <Gruppe titel="Abzeichen">
        {ABZEICHEN.map((a) => {
          const am = daten.spiel.abzeichen[a.id]
          return <Zeile key={a.id} symbol={<SymKachel name={am ? a.symbol : "schloss"} farbe={am ? "#c98a1e" : "#3a3570"} groesse={34} />} titel={a.name} untertitel={am ? "erreicht am " + datumText(am) : a.text} />
        })}
      </Gruppe>
      <Gruppe titel="Alle Fakten">
        {FAKTEN.filter((f) => golf || f.thema !== "golf").map((f, i) => (
          <Zeile key={i} titel={f.text} untertitel={f.quelle} />
        ))}
      </Gruppe>
    </>
  )
}

type Reiter = "kraft" | "beweglichkeit" | "prozent" | "koerper"

export default function Fortschritt(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void; start?: Reiter }) {
  const [reiter, setReiter] = useState<Reiter>(props.start || "kraft")
  return (
    <Seite titel="Fortschritt">
      <Segment
        werte={[
          { id: "kraft", name: "Kraft" },
          { id: "beweglichkeit", name: "Mobilität" },
          { id: "prozent", name: "1 %" },
          { id: "koerper", name: "Gewicht" },
        ]}
        wert={reiter}
        onChange={setReiter}
      />
      {reiter === "kraft" ? <Kraft daten={props.daten} /> : reiter === "beweglichkeit" ? <Beweglichkeit daten={props.daten} aendern={props.aendern} /> : reiter === "koerper" ? <Koerpergewicht daten={props.daten} aendern={props.aendern} /> : <EinProzent daten={props.daten} />}
    </Seite>
  )
}
