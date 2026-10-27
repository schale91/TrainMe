// Abschnitte des Profils. Die Einrichtung zeigt sie nacheinander, die Einstellungen als aufklappbare Liste.

import { useState } from "react"
import { POSITIONEN, SPORTARTEN, positionVon } from "../daten/vorlagen"
import { hatSport, hatZiel, mitPositionen, mitSporten, mitZielen, positionen, sporte, ziele } from "../logik/auswahl"
import { LAST_GERAETE } from "../logik/gewichte"
import { moeglicheUebungen } from "../logik/plan"
import { neuerOrt, studio } from "../logik/speicher"
import type { Beschwerde, Geraet, Gelenk, Gewichte, Ort, Profil, Wochentag } from "../logik/typen"
import { Chips, Feld, Karten, MehrKarten, WertWahl, Zahl, ZahlChips } from "./teile"
import { Segment } from "./ios"
import { ARTEN, ERFAHRUNG, GELENKE, GERAETE, GERAETE_GRUPPEN, SAISON, SCHWERPUNKT, TERMINE, WOCHENTAGE, ZIELE } from "./texte"
import { MASCHINEN } from "../logik/typen"
import { Sym } from "./symbole"
import { RehaEditor, leeresReha } from "./RehaTeile"

type Teil = { profil: Profil; aendern: (p: Profil) => void }

export function Grunddaten({ profil, aendern }: Teil) {
  return (
    <>
      <Feld titel="Wie dürfen wir dich nennen?">
        <input value={profil.name} placeholder="Name oder Spitzname" onChange={(e) => aendern({ ...profil, name: e.target.value })} />
      </Feld>
      <Feld titel="Erfahrung">
        <Karten werte={ERFAHRUNG} gewaehlt={profil.erfahrung} onChange={(erfahrung) => aendern({ ...profil, erfahrung })} />
      </Feld>
    </>
  )
}

export function SportWahl({ profil, aendern }: Teil) {
  const liste = sporte(profil)
  const pos = positionen(profil)
  return (
    <>
      <Feld titel="Was soll trainiert werden?" text="Mehrfachauswahl. Ohne Ausdauer gibt es auch keine Ausdauereinheiten.">
        <Chips werte={ARTEN} gewaehlt={profil.arten} onChange={(arten) => aendern({ ...profil, arten: arten.length ? arten : ["kraft"] })} />
      </Feld>
      <Feld titel="Sport" text={"Mehrfachauswahl. " + (liste.length > 1 ? "Die Krafttage wechseln zwischen den Sportarten." : SPORTARTEN.find((s) => s.id === liste[0])?.text || "")}>
        <Chips
          werte={SPORTARTEN.map((s) => ({ id: s.id, name: s.name }))}
          gewaehlt={liste}
          onChange={(neu) => {
            // „Kein bestimmter Sport“ schließt die anderen aus und umgekehrt
            const dazu = neu.find((s) => liste.indexOf(s) < 0)
            const auswahl = dazu === "allgemein" ? ["allgemein"] : neu.filter((s) => s !== "allgemein")
            let p = mitSporten(profil, auswahl)
            if (auswahl.indexOf("reha") >= 0 && !p.reha) p = { ...p, reha: leeresReha(), erfahrung: "einsteiger" }
            if (auswahl.indexOf("football") >= 0 && !positionen(p).length) p = mitPositionen(p, ["lb"])
            if (dazu === "bodybuilding" && !hatZiel(p, "muskelaufbau")) p = mitZielen(p, [...ziele(p).filter((z) => z !== "fitness"), "muskelaufbau"])
            if (dazu && dazu !== "allgemein" && dazu !== "reha" && dazu !== "bodybuilding" && ziele(p).join() === "fitness") p = mitZielen(p, ["sport"])
            aendern(p)
          }}
        />
      </Feld>
      <Feld titel="Ziele" text="Mehrfachauswahl. Das anspruchsvollste Ziel bestimmt die Hauptübungen (Kraft vor Sport vor Muskelaufbau), Muskelaufbau prägt die übrigen Übungen.">
        <MehrKarten werte={ZIELE} gewaehlt={ziele(profil)} onChange={(z) => aendern(mitZielen(profil, z))} />
      </Feld>
      {hatSport(profil, "football") ? (
        <Feld titel="Position" text={pos.length ? pos.map((id) => positionVon(id)?.text).join(" ") : "Wähle deine Positionen, danach richten sich die Schwerpunkte."}>
          <Chips werte={POSITIONEN.map((p) => ({ id: p.id, name: p.name }))} gewaehlt={pos} onChange={(p) => aendern(mitPositionen(profil, p.length ? p : pos))} />
        </Feld>
      ) : null}
      {hatSport(profil, "reha") ? <RehaEditor profil={profil} aendern={aendern} /> : null}
      {liste.some((s) => s !== "allgemein" && s !== "reha") && !profil.jahresplan ? (
        <Feld titel="Phase">
          <Karten werte={SAISON} gewaehlt={profil.saison} onChange={(saison) => aendern({ ...profil, saison })} />
        </Feld>
      ) : null}
    </>
  )
}

export function OrteEditor({ profil, aendern }: Teil) {
  const setzeOrt = (i: number, o: Ort) => aendern({ ...profil, orte: profil.orte.map((x, k) => (k === i ? o : x)) })
  return (
    <>
      {profil.orte.map((o, i) => (
        <OrtKarte
          key={i + o.name}
          ort={o}
          aendern={(neu) => setzeOrt(i, neu)}
          entfernen={
            profil.orte.length > 1
              ? () =>
                  aendern({
                    ...profil,
                    orte: profil.orte.filter((_, k) => k !== i),
                    woche: profil.woche.map((t) => (t.ort === undefined ? t : { ...t, ort: t.ort === i ? 0 : t.ort > i ? t.ort - 1 : t.ort })),
                  })
              : undefined
          }
        />
      ))}
      <div className="reihe">
        <button type="button" className="knopf leise" onClick={() => aendern({ ...profil, orte: [...profil.orte, neuerOrt("Ort " + (profil.orte.length + 1))] })}>
          + Leerer Ort
        </button>
        <button type="button" className="knopf leise" onClick={() => aendern({ ...profil, orte: [...profil.orte, studio()] })}>
          + Fitnessstudio
        </button>
      </div>
    </>
  )
}

const kgText = (x: number) => String(Math.round(x * 100) / 100).replace(".", ",")
const gleich = (a: number, b: number) => Math.abs(a - b) < 1e-9
const reihe = (von: number, bis: number, schritt: number) => {
  const out: number[] = []
  for (let x = von; x <= bis + 1e-9 && out.length < 80; x += schritt) out.push(Math.round(x * 100) / 100)
  return out
}

/** Übliche Hantelscheiben (kg je Scheibe). */
const SCHEIBEN = [0.5, 1, 1.25, 2.5, 5, 10, 15, 20, 25]

/** Scheiben antippen. Im Studio gibt es von jeder Sorte genug, zu Hause zählt die Zahl der Paare. */
function ScheibenWahl(props: { g: Gewichte; setG: (neu: Partial<Gewichte>) => void }) {
  const { g, setG } = props
  const beliebig = !!g.scheiben_beliebig
  const sorten = Array.from(new Set(g.scheiben)).sort((a, b) => a - b)
  const anzahl = (x: number) => g.scheiben.filter((y) => gleich(x, y)).length
  const setAnzahl = (x: number, n: number) => setG({ scheiben: [...g.scheiben.filter((y) => !gleich(x, y)), ...Array.from({ length: n }, () => x)].sort((a, b) => a - b) })
  const kleinste = sorten[0]
  return (
    <>
      <Segment
        werte={[
          { id: "beliebig", name: "Genug von jeder Sorte" },
          { id: "gezaehlt", name: "Paare zählen" },
        ]}
        wert={beliebig ? "beliebig" : "gezaehlt"}
        onChange={(w) => setG(w === "beliebig" ? { scheiben_beliebig: true, scheiben: sorten } : { scheiben_beliebig: false })}
      />
      <ZahlChips
        vorschlaege={SCHEIBEN}
        wert={sorten}
        einheit="kg"
        onChange={(neu) => {
          const weg = sorten.filter((x) => !neu.some((y) => gleich(x, y)))
          const dazu = neu.filter((x) => !sorten.some((y) => gleich(x, y)))
          setG({ scheiben: [...g.scheiben.filter((y) => !weg.some((x) => gleich(x, y))), ...dazu].sort((a, b) => a - b) })
        }}
      />
      {!beliebig && sorten.length ? (
        <div className="paarliste">
          {sorten.map((x) => (
            <div key={x} className="paarzeile">
              <span>{kgText(x)} kg</span>
              <button type="button" className="rundknopf" aria-label={"Ein Paar " + kgText(x) + " kg weniger"} disabled={anzahl(x) <= 1} onClick={() => setAnzahl(x, anzahl(x) - 1)}>
                −
              </button>
              <b>
                {anzahl(x)} {anzahl(x) === 1 ? "Paar" : "Paare"}
              </b>
              <button type="button" className="rundknopf" aria-label={"Ein Paar " + kgText(x) + " kg mehr"} disabled={anzahl(x) >= 8} onClick={() => setAnzahl(x, anzahl(x) + 1)}>
                +
              </button>
            </div>
          ))}
        </div>
      ) : null}
      {kleinste ? <p className="hinweis">Kleinster Sprung an der Stange: {kgText(2 * kleinste)} kg.</p> : null}
    </>
  )
}

/** Kurzhanteln: Reihe von, bis, Schritt wählen, fehlende Gewichte abwählen. */
function KurzhantelWahl(props: { wert: number[]; onChange: (x: number[]) => void }) {
  const w = props.wert
  const abstaende = w.slice(1).map((x, i) => Math.round((x - w[i]) * 100) / 100)
  const haeufig = abstaende.sort((a, b) => abstaende.filter((x) => x === b).length - abstaende.filter((x) => x === a).length)[0]
  const [von, setVon] = useState(w[0] ?? 2)
  const [schritt, setSchritt] = useState([1, 2, 2.5, 5].indexOf(haeufig) >= 0 ? haeufig : 2)
  const [bis, setBis] = useState(w[w.length - 1] ?? 20)
  const setzen = (v: number, b: number, sch: number) => {
    setVon(v)
    setBis(b)
    setSchritt(sch)
    props.onChange(reihe(v, b, sch))
  }
  const bisWerte = reihe(von + schritt, 60, schritt)
  return (
    <>
      <div className="reihenwahl">
        <label>
          <small>von</small>
          <select value={von} onChange={(e) => setzen(Number(e.target.value), Math.max(bis, Number(e.target.value)), schritt)}>
            {[0.5, 1, 1.25, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((x) => (
              <option key={x} value={x}>
                {kgText(x)} kg
              </option>
            ))}
          </select>
        </label>
        <label>
          <small>bis</small>
          <select value={bis} onChange={(e) => setzen(von, Number(e.target.value), schritt)}>
            {(bisWerte.some((x) => gleich(x, bis)) ? bisWerte : [...bisWerte, bis].sort((a, b) => a - b)).map((x) => (
              <option key={x} value={x}>
                {kgText(x)} kg
              </option>
            ))}
          </select>
        </label>
        <label>
          <small>Schritt</small>
          <select value={schritt} onChange={(e) => setzen(von, bis, Number(e.target.value))}>
            {[1, 2, 2.5, 5].map((x) => (
              <option key={x} value={x}>
                {kgText(x)} kg
              </option>
            ))}
          </select>
        </label>
      </div>
      <ZahlChips vorschlaege={reihe(von, bis, schritt)} wert={w} onChange={props.onChange} />
    </>
  )
}

function OrtKarte(props: { ort: Ort; aendern: (o: Ort) => void; entfernen?: () => void }) {
  const o = props.ort
  const g = o.gewichte
  const hat = (x: Geraet) => o.geraete.indexOf(x) >= 0
  const setG = (neu: Partial<Ort["gewichte"]>) => props.aendern({ ...o, gewichte: { ...g, ...neu } })
  return (
    <div className="karte">
      <div className="reihe zwischen">
        <input className="titelfeld" value={o.name} onChange={(e) => props.aendern({ ...o, name: e.target.value })} />
        {props.entfernen ? (
          <button type="button" className="knopf klein gefahr" onClick={props.entfernen}>
            Entfernen
          </button>
        ) : null}
      </div>
      <Feld titel="Deckenhöhe" text="Unter etwa 2,40 m fallen Überkopfübungen, Klimmzüge und Sprünge weg.">
        <WertWahl werte={[220, 240, 260, 300, 400]} wert={o.deckenhoehe_cm} min={150} max={1000} einheit="cm" text={(x) => (x >= 400 ? "4 m und mehr" : kgText(x / 100) + " m")} onChange={(deckenhoehe_cm) => props.aendern({ ...o, deckenhoehe_cm })} />
      </Feld>
      <GeraeteListe gewaehlt={o.geraete} aendern={(geraete) => props.aendern({ ...o, geraete })} />
      {hat("kurzhantel") ? (
        <Feld titel="Kurzhanteln je Hand (kg)" text="Reihe wählen und Gewichte abwählen, die fehlen. Verstellbare Hanteln: jede mögliche Stufe.">
          <KurzhantelWahl wert={g.kurzhanteln} onChange={(kurzhanteln) => setG({ kurzhanteln })} />
        </Feld>
      ) : null}
      {hat("langhantel") ? (
        <>
          <Feld titel="Langhantelstange" text="Olympiastange 20 kg, Damenstange 15 kg, kurze Stangen oft 10 kg.">
            <WertWahl werte={[10, 15, 20]} wert={g.stange} min={0} max={30} einheit="kg" onChange={(stange) => setG({ stange })} />
          </Feld>
          <Feld titel="Hantelscheiben">
            <ScheibenWahl g={g} setG={setG} />
          </Feld>
        </>
      ) : null}
      {hat("trap_bar") ? (
        <Feld titel="Trap Bar" text="Nutzt dieselben Scheiben wie die Langhantel.">
          <WertWahl werte={[20, 25, 30]} wert={g.trap_bar || 0} min={0} max={40} einheit="kg" onChange={(trap_bar) => setG({ trap_bar })} />
        </Feld>
      ) : null}
      {hat("sz_stange") ? (
        <Feld titel="SZ-Stange" text="Nutzt dieselben Scheiben wie die Langhantel.">
          <WertWahl werte={[7, 8, 10, 12]} wert={g.sz_stange || 0} min={0} max={20} einheit="kg" onChange={(sz_stange) => setG({ sz_stange })} />
        </Feld>
      ) : null}
      {hat("multipresse") ? (
        <Feld titel="Stange der Multipresse" text="Steht oft an der Maschine, sonst 15 kg schätzen.">
          <WertWahl werte={[0, 7, 10, 15, 20]} wert={g.multipresse_stange || 0} min={0} max={30} einheit="kg" text={(x) => (x ? kgText(x) + " kg" : "ausgeglichen")} onChange={(multipresse_stange) => setG({ multipresse_stange })} />
        </Feld>
      ) : null}
      {(hat("hantelscheibe") || hat("sz_stange") || hat("multipresse")) && !hat("langhantel") ? (
        <Feld titel="Hantelscheiben">
          <ScheibenWahl g={g} setG={setG} />
        </Feld>
      ) : null}
      {hat("kettlebell") ? (
        <Feld titel="Kettlebells (kg)">
          <ZahlChips vorschlaege={[4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40]} wert={g.kettlebells} onChange={(kettlebells) => setG({ kettlebells })} />
        </Feld>
      ) : null}
      {hat("medizinball") ? (
        <Feld titel="Medizinbälle (kg)">
          <ZahlChips vorschlaege={[1, 2, 3, 4, 5, 6, 7, 8, 10, 12]} wert={g.medizinbaelle} onChange={(medizinbaelle) => setG({ medizinbaelle })} />
        </Feld>
      ) : null}
      {o.geraete.some((x) => MASCHINEN.indexOf(x) >= 0) ? (
        <>
          <Feld titel="Maschinen und Kabelzug: Schritt">
            <WertWahl werte={[1, 2.5, 5, 7, 10]} wert={g.maschine_schritt} min={0.5} max={20} einheit="kg" onChange={(maschine_schritt) => setG({ maschine_schritt })} />
          </Feld>
          <Feld titel="Maschinen: schwerste Stufe">
            <WertWahl werte={[50, 75, 100, 125, 150, 200]} wert={g.maschine_max} min={5} max={500} einheit="kg" onChange={(maschine_max) => setG({ maschine_max })} />
          </Feld>
        </>
      ) : null}
      {hat("band") ? (
        <Feld titel="Anzahl Bänder (leicht bis schwer)">
          <WertWahl werte={[1, 2, 3, 4, 5, 6]} wert={g.baender} min={1} max={8} onChange={(baender) => setG({ baender })} />
        </Feld>
      ) : null}
      {o.geraete.some((x) => LAST_GERAETE.indexOf(x) >= 0) ? null : <p className="hinweis">Ohne Gewichte plant TrainMe mit Körpergewicht und steigert über Wiederholungen und schwerere Varianten.</p>}
    </div>
  )
}

export function WocheEditor({ profil, aendern }: Teil) {
  const setTag = (i: number, t: Wochentag) => aendern({ ...profil, woche: profil.woche.map((x, k) => (k === i ? t : x)) })
  // Termine aller gewählten Sportarten
  const erlaubt = SPORTARTEN.filter((s) => hatSport(profil, s.id)).flatMap((s) => s.termine.map((x) => x.id))
  const termine = TERMINE.filter((t) => !erlaubt.length || erlaubt.indexOf(t.id) >= 0)
  return (
    <div className="woche-edit">
      {profil.woche.map((t, i) => (
        <div key={i} className={"tagzeile " + t.art}>
          <b>{WOCHENTAGE[i]}</b>
          <select value={t.art} onChange={(e) => setTag(i, e.target.value === "training" ? { art: "training", ort: 0, minuten: 60, schwerpunkt: "automatisch" } : e.target.value === "sporttermin" ? { art: "sporttermin", termin: termine[0]?.id || "spiel" } : { art: "frei" })}>
            <option value="frei">Frei</option>
            <option value="training">Training</option>
            <option value="sporttermin">Sporttermin</option>
          </select>
          {t.art === "training" ? (
            <div className="tagdetails">
              <select value={t.ort || 0} onChange={(e) => setTag(i, { ...t, ort: Number(e.target.value) })}>
                {profil.orte.map((o, k) => (
                  <option key={k} value={k}>
                    {o.name}
                  </option>
                ))}
              </select>
              <select value={t.minuten || 60} onChange={(e) => setTag(i, { ...t, minuten: Number(e.target.value) })}>
                {[20, 30, 40, 45, 50, 60, 75, 90, 120].map((m) => (
                  <option key={m} value={m}>
                    {m} min
                  </option>
                ))}
              </select>
              {profil.planart === "eigen" ? (
                <select value={t.quelle || "plan"} aria-label="Woher die Einheit kommt" onChange={(e) => setTag(i, { ...t, quelle: e.target.value as Wochentag["quelle"] })}>
                  <option value="plan">Plan</option>
                  <option value="trainme">TrainMe zusätzlich</option>
                </select>
              ) : null}
              <select value={t.schwerpunkt || "automatisch"} onChange={(e) => setTag(i, { ...t, schwerpunkt: e.target.value as Wochentag["schwerpunkt"] })}>
                {SCHWERPUNKT.filter((s) => s.id === "automatisch" || profil.arten.indexOf(s.id as never) >= 0).map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {t.art === "sporttermin" ? (
            <div className="tagdetails">
              <select value={t.termin} onChange={(e) => setTag(i, { ...t, termin: e.target.value as Wochentag["termin"] })}>
                {termine.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      ))}
      <p className="hinweis">Vor Spielen und Turnieren plant TrainMe keine schweren Beine, am Tag danach Regeneration.</p>
    </div>
  )
}

export function KoerperEditor({ profil, aendern }: Teil) {
  const grad = (g: Gelenk) => profil.beschwerden.find((b) => b.gelenk === g)?.grad || "keine"
  const setze = (g: Gelenk, x: string) => {
    const rest = profil.beschwerden.filter((b) => b.gelenk !== g)
    aendern({ ...profil, beschwerden: x === "keine" ? rest : [...rest, { gelenk: g, grad: x as Beschwerde["grad"] }] })
  }
  return (
    <>
      <p className="hinweis warn">
        TrainMe nimmt bei Beschwerden Rücksicht, ersetzt aber keine ärztliche oder physiotherapeutische Behandlung. Bei frischen Verletzungen, starken oder zunehmenden Schmerzen bitte erst abklären lassen.
      </p>
      <div className="gelenke">
        {GELENKE.map((g) => (
          <div key={g.id} className="gelenkzeile">
            <b>{g.name}</b>
            <div className="segment">
              {[
                ["keine", "Okay"],
                ["schonen", "Schonen"],
                ["meiden", "Meiden"],
              ].map(([id, name]) => (
                <button key={id} type="button" className={grad(g.id) === id ? "an " + id : ""} onClick={() => setze(g.id, id)}>
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="hinweis">Schonen: keine Übungen mit hoher Belastung auf dem Gelenk. Meiden: gar keine Belastung.</p>
      <Feld titel="Körpergewicht (optional)">
        <Zahl wert={profil.koerpergewicht_kg} min={0} max={300} einheit="kg" onChange={(koerpergewicht_kg) => aendern({ ...profil, koerpergewicht_kg: koerpergewicht_kg || undefined })} />
      </Feld>
    </>
  )
}

export function AusnahmenEditor({ profil, aendern }: Teil) {
  const [suche, setSuche] = useState("")
  const ids = new Set<string>()
  const alle = profil.orte.flatMap(moeglicheUebungen).filter((u) => (ids.has(u.id) ? false : (ids.add(u.id), true)))
  const liste = alle.filter((u) => u.name.toLowerCase().indexOf(suche.toLowerCase()) >= 0).sort((a, b) => a.name.localeCompare(b.name))
  const aus = (id: string) => profil.ausgeschlossen.indexOf(id) >= 0
  return (
    <>
      <p className="hinweis">Übungen, die du nicht machen willst oder kannst. TrainMe sucht dann eine andere für dasselbe Bewegungsmuster.</p>
      <input placeholder="Übung suchen" value={suche} onChange={(e) => setSuche(e.target.value)} />
      <div className="liste">
        {liste.map((u) => (
          <button
            key={u.id}
            type="button"
            className={"listzeile" + (aus(u.id) ? " aus" : "")}
            onClick={() => aendern({ ...profil, ausgeschlossen: aus(u.id) ? profil.ausgeschlossen.filter((x) => x !== u.id) : [...profil.ausgeschlossen, u.id] })}
          >
            <span>{u.name}</span>
            <span className="mitsym leise">{aus(u.id) ? <><Sym name="verbot" groesse={16} farbe="var(--rot)" /> aus</> : ""}</span>
          </button>
        ))}
      </div>
    </>
  )
}

/** Geräte als abhakbare Liste je Gruppe, mit „alle“ je Gruppe. */
export function GeraeteListe(props: { gewaehlt: Geraet[]; aendern: (g: Geraet[]) => void }) {
  const hat = (x: Geraet) => props.gewaehlt.indexOf(x) >= 0
  const umschalten = (x: Geraet) => props.aendern(hat(x) ? props.gewaehlt.filter((y) => y !== x) : [...props.gewaehlt, x])
  return (
    <>
      {GERAETE_GRUPPEN.map((gr) => {
        const liste = GERAETE.filter((g) => g.gruppe === gr.id)
        const alle = liste.every((g) => hat(g.id))
        return (
          <div key={gr.id} className="geraetegruppe">
            <div className="geraetekopf">
              <Sym name={gr.symbol} groesse={22} />
              <b>{gr.name}</b>
              <button type="button" className="textknopf" onClick={() => props.aendern(alle ? props.gewaehlt.filter((x) => !liste.some((g) => g.id === x)) : Array.from(new Set([...props.gewaehlt, ...liste.map((g) => g.id)])))}>
                {alle ? "keine" : "alle"}
              </button>
            </div>
            {gr.text ? <small className="geraetehinweis">{gr.text}</small> : null}
            <div className="geraeteliste">
              {liste.map((g) => (
                <button key={g.id} type="button" className={"geraetzeile" + (hat(g.id) ? " an" : "")} onClick={() => umschalten(g.id)} aria-pressed={hat(g.id)}>
                  <span className="kasten">{hat(g.id) ? <Sym name="haken" groesse={16} /> : null}</span>
                  <span className="geraettext">
                    <span>{g.name}</span>
                    {g.text ? <small>{g.text}</small> : null}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}
