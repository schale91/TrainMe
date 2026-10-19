// Abschnitte des Profils. Die Einrichtung zeigt sie nacheinander, die Einstellungen als aufklappbare Liste.

import { useState } from "react"
import { SPORTARTEN } from "../daten/vorlagen"
import { LAST_GERAETE } from "../logik/gewichte"
import { moeglicheUebungen } from "../logik/plan"
import { neuerOrt, studio } from "../logik/speicher"
import type { Beschwerde, Geraet, Gelenk, Ort, Profil, Wochentag } from "../logik/typen"
import { Chips, Feld, Karten, Zahl, Zahlenliste } from "./teile"
import { ARTEN, ERFAHRUNG, GELENKE, GERAETE, GERAETE_GRUPPEN, SAISON, SCHWERPUNKT, TERMINE, WOCHENTAGE, ZIELE } from "./texte"
import { MASCHINEN } from "../logik/typen"
import { Sym } from "./symbole"

type Teil = { profil: Profil; aendern: (p: Profil) => void }

export function Grunddaten({ profil, aendern }: Teil) {
  return (
    <>
      <Feld titel="Wie dürfen wir dich nennen?">
        <input value={profil.name} placeholder="Name oder Spitzname" onChange={(e) => aendern({ ...profil, name: e.target.value })} />
      </Feld>
      <Feld titel="Dein Ziel">
        <Karten werte={ZIELE} gewaehlt={profil.ziel} onChange={(ziel) => aendern({ ...profil, ziel })} />
      </Feld>
      <Feld titel="Erfahrung">
        <Karten werte={ERFAHRUNG} gewaehlt={profil.erfahrung} onChange={(erfahrung) => aendern({ ...profil, erfahrung })} />
      </Feld>
    </>
  )
}

export function SportWahl({ profil, aendern }: Teil) {
  const sport = SPORTARTEN.find((s) => s.id === profil.sport) || SPORTARTEN[0]
  return (
    <>
      <Feld titel="Was soll trainiert werden?" text="Mehrfachauswahl. Ohne Ausdauer gibt es auch keine Ausdauereinheiten.">
        <Chips werte={ARTEN} gewaehlt={profil.arten} onChange={(arten) => aendern({ ...profil, arten: arten.length ? arten : ["kraft"] })} />
      </Feld>
      <Feld titel="Sport" text={sport.text}>
        <Chips einzeln werte={SPORTARTEN.map((s) => ({ id: s.id, name: s.name }))} gewaehlt={[profil.sport]} onChange={([s]) => aendern({ ...profil, sport: s, ziel: s !== "allgemein" && profil.ziel === "fitness" ? "sport" : profil.ziel })} />
      </Feld>
      {profil.sport !== "allgemein" && !profil.jahresplan ? (
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
        <Zahl wert={o.deckenhoehe_cm} min={150} max={1000} einheit="cm" onChange={(deckenhoehe_cm) => props.aendern({ ...o, deckenhoehe_cm })} />
      </Feld>
      <GeraeteListe gewaehlt={o.geraete} aendern={(geraete) => props.aendern({ ...o, geraete })} />
      {hat("kurzhantel") ? (
        <Feld titel="Kurzhanteln je Hand (kg)" text="Alle Gewichte, die du hast, getrennt mit Semikolon. Verstellbare Hanteln: jede mögliche Stufe.">
          <Zahlenliste wert={g.kurzhanteln} platzhalter="z. B. 2; 4; 6; 8; 10" onChange={(kurzhanteln) => setG({ kurzhanteln })} />
        </Feld>
      ) : null}
      {hat("langhantel") ? (
        <>
          <Feld titel="Langhantelstange">
            <Zahl wert={g.stange} min={0} max={30} einheit="kg" onChange={(stange) => setG({ stange })} />
          </Feld>
          <Feld titel="Hantelscheiben (kg je Scheibe)" text="Jeden Eintrag gibt es als Paar. Zwei Paare 10 kg: „10; 10“.">
            <Zahlenliste wert={g.scheiben} platzhalter="z. B. 1,25; 2,5; 5; 10; 10; 20" onChange={(scheiben) => setG({ scheiben })} />
          </Feld>
        </>
      ) : null}
      {hat("trap_bar") ? (
        <Feld titel="Trap Bar" text="Nutzt dieselben Scheiben wie die Langhantel.">
          <Zahl wert={g.trap_bar || 0} min={0} max={40} einheit="kg" onChange={(trap_bar) => setG({ trap_bar })} />
        </Feld>
      ) : null}
      {hat("sz_stange") ? (
        <Feld titel="SZ-Stange" text="Nutzt dieselben Scheiben wie die Langhantel.">
          <Zahl wert={g.sz_stange || 0} min={0} max={20} einheit="kg" onChange={(sz_stange) => setG({ sz_stange })} />
        </Feld>
      ) : null}
      {hat("multipresse") ? (
        <Feld titel="Stange der Multipresse" text="Steht oft an der Maschine, sonst 15 kg schätzen.">
          <Zahl wert={g.multipresse_stange || 0} min={0} max={30} einheit="kg" onChange={(multipresse_stange) => setG({ multipresse_stange })} />
        </Feld>
      ) : null}
      {(hat("hantelscheibe") || hat("sz_stange") || hat("multipresse")) && !hat("langhantel") ? (
        <Feld titel="Hantelscheiben (kg je Scheibe)" text="Jeden Eintrag gibt es als Paar.">
          <Zahlenliste wert={g.scheiben} platzhalter="z. B. 1,25; 2,5; 5; 10" onChange={(scheiben) => setG({ scheiben })} />
        </Feld>
      ) : null}
      {hat("kettlebell") ? (
        <Feld titel="Kettlebells (kg)">
          <Zahlenliste wert={g.kettlebells} platzhalter="z. B. 8; 12; 16" onChange={(kettlebells) => setG({ kettlebells })} />
        </Feld>
      ) : null}
      {hat("medizinball") ? (
        <Feld titel="Medizinbälle (kg)">
          <Zahlenliste wert={g.medizinbaelle} platzhalter="z. B. 3; 5" onChange={(medizinbaelle) => setG({ medizinbaelle })} />
        </Feld>
      ) : null}
      {o.geraete.some((x) => MASCHINEN.indexOf(x) >= 0) ? (
        <div className="reihe">
          <Feld titel="Maschinen: Schritt">
            <Zahl wert={g.maschine_schritt} min={0.5} max={20} einheit="kg" onChange={(maschine_schritt) => setG({ maschine_schritt })} />
          </Feld>
          <Feld titel="bis">
            <Zahl wert={g.maschine_max} min={5} max={500} einheit="kg" onChange={(maschine_max) => setG({ maschine_max })} />
          </Feld>
        </div>
      ) : null}
      {hat("band") ? (
        <Feld titel="Anzahl Bänder (leicht bis schwer)">
          <Zahl wert={g.baender} min={1} max={8} onChange={(baender) => setG({ baender })} />
        </Feld>
      ) : null}
      {o.geraete.some((x) => LAST_GERAETE.indexOf(x) >= 0) ? null : <p className="hinweis">Ohne Gewichte plant TrainMe mit Körpergewicht und steigert über Wiederholungen und schwerere Varianten.</p>}
    </div>
  )
}

export function WocheEditor({ profil, aendern }: Teil) {
  const setTag = (i: number, t: Wochentag) => aendern({ ...profil, woche: profil.woche.map((x, k) => (k === i ? t : x)) })
  const sport = SPORTARTEN.find((s) => s.id === profil.sport)
  const termine = TERMINE.filter((t) => !sport || !sport.termine.length || sport.termine.some((x) => x.id === t.id))
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
