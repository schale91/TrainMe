// Fängt Abstürze ab: statt eines dunklen Bildschirms erscheint die Fehlermeldung mit „Zurück“ und „Fehler melden“.

import { Component, type ReactNode } from "react"
import { feedbackUrl } from "./Feedback"

interface Zustand {
  fehler: Error | null
}

export function fehlerText(e: unknown): string {
  const x = e as Error
  return (x && (x.stack || x.message)) ? String(x.stack || x.message).split("\n").slice(0, 8).join("\n") : String(e)
}

export default class Fehlergrenze extends Component<{ children: ReactNode; bereich: string; zurueck: () => void }, Zustand> {
  state: Zustand = { fehler: null }

  static getDerivedStateFromError(fehler: Error): Zustand {
    return { fehler }
  }

  componentDidCatch(fehler: Error) {
    try {
      localStorage.setItem("trainme.letzterFehler", JSON.stringify({ zeit: new Date().toISOString(), bereich: this.props.bereich, text: fehlerText(fehler) }))
    } catch {
      /* egal */
    }
  }

  render() {
    const f = this.state.fehler
    if (!f) return this.props.children
    const text = fehlerText(f)
    return (
      <div className="fehlerseite">
        <h1>Da ist etwas schiefgelaufen</h1>
        <p>Das tut mir leid. Deine Daten sind sicher. Bitte schick den Fehler kurz ab, dann wird er behoben.</p>
        <pre>{text}</pre>
        <a className="knopf voll" href={feedbackUrl("fehler", "Absturz: " + f.message.slice(0, 60), "Die App ist abgestürzt.\n\n```\n" + text + "\n```", this.props.bereich)} target="_blank" rel="noreferrer">
          Fehler melden
        </a>
        <button
          type="button"
          className="knopf voll leise"
          onClick={() => {
            try {
              localStorage.removeItem("trainme.entwurf")
            } catch {
              /* egal */
            }
            this.setState({ fehler: null })
            this.props.zurueck()
          }}
        >
          Zurück zur Startseite
        </button>
      </div>
    )
  }
}
