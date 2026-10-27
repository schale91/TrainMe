// Profil: woher die Einheiten kommen (TrainMe plant oder eigener Plan, Tagesfolge, Plan als Text) und die Verbindung
// zur Lebenswelt (eingebettet, gekoppelt oder lokal).

import { useState } from "react"
import { planAusText, planZuText, letzterPlanTag } from "../logik/eigenerPlan"
import { zuordnen } from "../logik/kraftbuch"
import { heute } from "../logik/plan"
import type { Daten } from "../logik/typen"
import { Gruppe, Schalter, Seite, Segment, Zeile } from "./ios"
import { Feld } from "./teile"
import { bruecke, koppeln, kopplung, kopplungSetzen, modus } from "./lebenswelt"

type Zurueck = { text: string; onClick: () => void }

export function PlanSeite(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void; zurueck: Zurueck }) {
  const { daten } = props
  const profil = daten.profil!
  const eigen = profil.planart === "eigen"
  const [name, setName] = useState(daten.eigenerPlan?.name || "Eigener Plan")
  const [text, setText] = useState(() => (daten.eigenerPlan ? planZuText(daten.eigenerPlan) : ""))
  const [meldung, setMeldung] = useState<string | null>(null)
  const vorschau = text.trim() ? planAusText(text, name, zuordnen) : null
  const frei = vorschau ? Array.from(new Set(vorschau.tage.flatMap((t) => t.uebungen.filter((u) => !u.id).map((u) => u.name)))) : []

  const uebernehmen = () => {
    if (!vorschau || !vorschau.tage.length) return setMeldung("Im Text steht noch keine Übung.")
    props.aendern((d) => {
      // Neue Nummern nach dem zuletzt erledigten Tag, damit der Plan mit seinem ersten Tag weitergeht
      const ab = letzterPlanTag(d)
      d.eigenerPlan = { ...vorschau, name, start: heute(), wiederholen: d.eigenerPlan?.wiederholen, tage: vorschau.tage.map((t, i) => ({ ...t, nr: ab + i + 1 })) }
      d.profil!.planart = "eigen"
    })
    setMeldung("Plan gespeichert: " + vorschau.tage.length + " Tage. Es geht mit dem ersten Tag weiter.")
  }

  return (
    <Seite titel="Plan" zurueck={props.zurueck}>
      <Gruppe fuss={eigen ? "Der Plan gibt Tage, Übungen, Sätze und Wiederholungen vor. TrainMe rechnet das Gewicht (Prozent vom Maximum oder aus dem letzten Mal), führt Protokoll und Pausen." : "TrainMe plant Woche für Woche nach deinem Profil, mit Blöcken, Entlastung und Jahresplan."}>
        <div className="segmentzeile">
          <Segment
            werte={[
              { id: "trainme", name: "TrainMe plant" },
              { id: "eigen", name: "Eigener Plan" },
            ]}
            wert={eigen ? "eigen" : "trainme"}
            onChange={(x) => props.aendern((d) => void (d.profil!.planart = x === "eigen" && d.eigenerPlan ? "eigen" : "trainme"))}
          />
        </div>
      </Gruppe>
      <Gruppe titel="Reihenfolge" fuss={profil.folge === "fortlaufend" ? "Es kommt immer die nächste offene Einheit, auch an einem freien Tag. Verpasstes holst du einfach nach." : "Einheiten stehen an festen Wochentagen. Vorziehen geht, Verpasstes bleibt verpasst."}>
        <div className="segmentzeile">
          <Segment
            werte={[
              { id: "wochentage", name: "Feste Wochentage" },
              { id: "fortlaufend", name: "Fortlaufend" },
            ]}
            wert={profil.folge || "wochentage"}
            onChange={(x) => props.aendern((d) => void (d.profil!.folge = x))}
          />
        </div>
      </Gruppe>
      <Gruppe titel="Eigener Plan" fuss="Je Zeile eine Übung, z. B. „Brücke 3 x 12“, „Wandsitzen 3 x 30 s“, „Kniebeuge 4 x 5 75 %“, „Curl 3 x 10-12, 2 im Tank“. „Tag 1: Name“ beginnt einen Tag, „A1:“ und „A2:“ bilden einen Supersatz.">
        <Zeile titel="Nach dem letzten Tag von vorn" untertitel="Für Pläne, die sich wiederholen, z. B. von der Physiotherapie" rechts={<Schalter an={!!daten.eigenerPlan?.wiederholen} onChange={(an) => props.aendern((d) => void (d.eigenerPlan && (d.eigenerPlan.wiederholen = an)))} />} />
      </Gruppe>
      <Feld titel="Name">
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </Feld>
      <Feld titel="Plan">
        <textarea className="plantext" rows={14} value={text} placeholder={"Tag 1: Hüfte\nBrücke 3 x 12\nSeitlage Bein abspreizen 3 x 10 je Seite"} onChange={(e) => setText(e.target.value)} />
      </Feld>
      {vorschau ? (
        <p className="hinweistext klein">
          {vorschau.tage.length} Tage, {vorschau.tage.reduce((n, t) => n + t.uebungen.length, 0)} Übungen.
          {frei.length ? " Ohne Anleitung aus der Übungsdatenbank: " + frei.join(", ") + "." : " Alle Übungen haben eine Anleitung."}
        </p>
      ) : null}
      <button type="button" className="knopf voll" onClick={uebernehmen}>
        Plan speichern
      </button>
      {meldung ? <p className="hinweistext">{meldung}</p> : null}
      {profil.woche.some((t) => t.art === "training") && eigen ? <p className="hinweistext klein">Unter Woche kannst du einzelne Trainingstage auf „TrainMe zusätzlich“ stellen: Dort plant TrainMe neben dem Plan eigene Einheiten (in der Reha erst nach der Freigabe).</p> : null}
    </Seite>
  )
}

export function LebensweltSeite(props: { zurueck: Zurueck }) {
  const art = modus()
  const k = kopplung()
  const [adresse, setAdresse] = useState("")
  const [code, setCode] = useState("")
  const [meldung, setMeldung] = useState<string | null>(null)
  const [laeuft, setLaeuft] = useState(false)

  if (art === "eingebettet") {
    const b = bruecke()
    return (
      <Seite titel="Lebenswelt" zurueck={props.zurueck}>
        <p className="hinweistext">TrainMe läuft in deiner Lebenswelt{b?.name ? " (" + b.name + ")" : ""}. Deine Daten liegen in ihrer Datenbank in Home Assistant, XP bucht die Lebenswelt. Mit der gekoppelten TrainMe-App auf dem Handy siehst du dieselben Daten.</p>
      </Seite>
    )
  }
  if (art === "gekoppelt" && k) {
    return (
      <Seite titel="Lebenswelt" zurueck={props.zurueck}>
        <Gruppe fuss="Ohne Netz arbeitet TrainMe weiter und überträgt alles, sobald die Lebenswelt wieder erreichbar ist.">
          <Zeile titel="Gekoppelt" wert={k.name || "verbunden"} />
          <Zeile titel="Adresse" wert={k.adresse.replace(/^https?:\/\//, "")} />
        </Gruppe>
        <button type="button" className="knopf voll leise" onClick={() => {
          kopplungSetzen(null)
          location.reload()
        }}>
          Entkoppeln
        </button>
        <p className="hinweistext klein">Danach zeigt TrainMe wieder die Daten, die nur auf diesem Handy liegen. Die Daten der Lebenswelt bleiben dort.</p>
      </Seite>
    )
  }
  const los = () => {
    setLaeuft(true)
    setMeldung(null)
    koppeln(adresse, code)
      .then(() => location.reload())
      .catch((e: Error) => setMeldung(e.message))
      .finally(() => setLaeuft(false))
  }
  return (
    <Seite titel="Mit Lebenswelt koppeln" zurueck={props.zurueck}>
      <p className="hinweistext">Wer die Lebenswelt in Home Assistant nutzt, kann TrainMe damit koppeln: Training, Plan und Fortschritt liegen dann dort, und die Lebenswelt vergibt die XP. In der Lebenswelt unter „Handy koppeln“ TrainMe wählen und den QR-Code mit der Kamera scannen. Ohne Kamera Adresse und Code hier eingeben.</p>
      <Feld titel="Adresse von Home Assistant" text="Die Adresse, unter der Home Assistant von außen erreichbar ist.">
        <input value={adresse} inputMode="url" placeholder="https://…" onChange={(e) => setAdresse(e.target.value)} />
      </Feld>
      <Feld titel="Code">
        <input value={code} placeholder="8 Zeichen" autoCapitalize="characters" onChange={(e) => setCode(e.target.value)} />
      </Feld>
      <button type="button" className="knopf voll" disabled={laeuft || !adresse.trim() || code.trim().length < 6} onClick={los}>
        {laeuft ? "Kopple …" : "Koppeln"}
      </button>
      {meldung ? <p className="hinweistext warnung">{meldung}</p> : null}
      <p className="hinweistext klein">Deine bisherigen Daten auf diesem Handy bleiben erhalten und kommen nach dem Entkoppeln wieder.</p>
    </Seite>
  )
}
