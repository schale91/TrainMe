// Feedback, Fehler und Ideen: wird als GitHub-Issue vorbereitet. Claude sichtet die Berichte täglich.

import { useState } from "react"
import { Capacitor } from "@capacitor/core"
import { Gruppe, Seite, Segment } from "./ios"

type Art = "fehler" | "idee" | "feedback"
const TITEL: Record<Art, string> = { fehler: "Fehler", idee: "Idee", feedback: "Feedback" }
const HILFE: Record<Art, string> = {
  fehler: "Was hast du gemacht, was ist passiert, was hättest du erwartet?",
  idee: "Was fehlt dir? Wofür würdest du es nutzen?",
  feedback: "Was gefällt dir, was stört dich?",
}

export const ISSUE_URL = "https://github.com/schale91/TrainMe/issues/new"

export function feedbackUrl(art: Art, titel: string, text: string, seite: string): string {
  const geraet = "TrainMe " + __VERSION__ + " · " + Capacitor.getPlatform() + " · " + navigator.userAgent.replace(/\s+/g, " ").slice(0, 140)
  const q = new URLSearchParams({ template: art + ".yml", title: "[" + TITEL[art] + "] " + titel.trim(), beschreibung: text.trim(), bereich: seite, version: geraet })
  return ISSUE_URL + "?" + q.toString()
}

export default function Feedback(props: { zurueck: { text: string; onClick: () => void } }) {
  const [art, setArt] = useState<Art>("fehler")
  const [titel, setTitel] = useState("")
  const [text, setText] = useState("")
  const [seite, setSeite] = useState("Training")
  const [kopiert, setKopiert] = useState(false)
  const url = feedbackUrl(art, titel, text, seite)
  const bereit = titel.trim().length >= 3 && text.trim().length >= 5
  return (
    <Seite titel="Feedback" zurueck={props.zurueck}>
      <Segment
        werte={[
          { id: "fehler", name: "Fehler" },
          { id: "idee", name: "Idee" },
          { id: "feedback", name: "Feedback" },
        ]}
        wert={art}
        onChange={setArt}
      />
      <Gruppe fuss="Der Bericht wird als öffentliches GitHub-Issue angelegt (ein kostenloses GitHub-Konto ist nötig). Schreib bitte keine persönlichen oder Gesundheitsdaten hinein. Claude sichtet neue Berichte jeden Tag, behebt kleine Fehler direkt und fasst einmal pro Woche zusammen.">
        <div className="formular">
          <label>
            <span>Kurz in einem Satz</span>
            <input value={titel} placeholder={art === "fehler" ? "z. B. Timer piept nicht" : "z. B. Supersätze"} onChange={(e) => setTitel(e.target.value)} />
          </label>
          <label>
            <span>{HILFE[art]}</span>
            <textarea rows={6} value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <label>
            <span>Wo in der App?</span>
            <select value={seite} onChange={(e) => setSeite(e.target.value)}>
              {["Heute", "Training", "Pausentimer", "Übungen", "Abenteuer", "Fortschritt", "Beweglichkeitstests", "Profil", "Gesundheitsdaten", "Sonstiges"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        </div>
      </Gruppe>
      <a className={"knopf voll gross" + (bereit ? "" : " aus")} href={bereit ? url : undefined} target="_blank" rel="noreferrer" aria-disabled={!bereit}>
        Auf GitHub senden
      </a>
      <button
        type="button"
        className="knopf voll leise"
        disabled={!bereit}
        onClick={() => {
          void navigator.clipboard?.writeText("[" + TITEL[art] + "] " + titel + "\n\n" + text).then(() => setKopiert(true))
        }}
      >
        {kopiert ? "Kopiert" : "Text kopieren"}
      </button>
    </Seite>
  )
}
