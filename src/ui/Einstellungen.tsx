// Profil bearbeiten, Block neu starten, Sicherung exportieren und importieren.

import { useRef, useState } from "react"
import { heute, montagVon } from "../logik/plan"
import { exportieren, importieren } from "../logik/speicher"
import type { Daten, Profil } from "../logik/typen"
import { AusnahmenEditor, Grunddaten, KoerperEditor, OrteEditor, SportWahl, WocheEditor } from "./Profilteile"
import { Klappe } from "./teile"
import { dateiTeilen } from "./teilen"

export default function Einstellungen(props: { daten: Daten; profilAendern: (p: Profil) => void; ersetzen: (d: Daten) => void; zuruecksetzen: () => void }) {
  const profil = props.daten.profil!
  const teil = { profil, aendern: props.profilAendern }
  const datei = useRef<HTMLInputElement>(null)
  const [meldung, setMeldung] = useState("")

  return (
    <div className="einstellungen">
      <h1>Einstellungen</h1>
      <Klappe titel="👤 Ziel und Erfahrung">
        <Grunddaten {...teil} />
      </Klappe>
      <Klappe titel="🏅 Training und Sport">
        <SportWahl {...teil} />
      </Klappe>
      <Klappe titel="🏠 Orte, Geräte, Gewichte">
        <OrteEditor {...teil} />
      </Klappe>
      <Klappe titel="📅 Woche">
        <WocheEditor {...teil} />
      </Klappe>
      <Klappe titel="🩹 Beschwerden">
        <KoerperEditor {...teil} />
      </Klappe>
      <Klappe titel="🚫 Ausnahmen">
        <AusnahmenEditor {...teil} />
      </Klappe>
      <Klappe titel="🔄 Trainingsblock">
        <p className="hinweis">
          Ein Block hat 4 Aufbauwochen und eine Entlastungswoche. Neu starten, zum Beispiel nach Urlaub oder Krankheit: der Plan beginnt wieder mit mehr Reserve.
        </p>
        <button type="button" className="knopf" onClick={() => props.profilAendern({ ...profil, block_start: montagVon(heute()) })}>
          Neuen Block ab dieser Woche
        </button>
      </Klappe>
      <Klappe titel="💾 Sicherung">
        <p className="hinweis">Deine Daten liegen nur auf diesem Handy. Beim Deinstallieren oder Handywechsel sind sie weg, wenn du keine Sicherung hast.</p>
        <div className="reihe">
          <button
            type="button"
            className="knopf"
            onClick={() =>
              dateiTeilen("TrainMe-Sicherung-" + heute() + ".json", exportieren(props.daten))
                .then(() => setMeldung("Sicherung erstellt."))
                .catch((e) => setMeldung("Hat nicht geklappt: " + String(e?.message || e)))
            }
          >
            Sicherung erstellen
          </button>
          <button type="button" className="knopf leise" onClick={() => datei.current?.click()}>
            Sicherung laden
          </button>
        </div>
        <input
          ref={datei}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={async (e) => {
            const f = e.target.files?.[0]
            if (!f) return
            try {
              const d = importieren(await f.text())
              if (confirm("Alle aktuellen Daten durch die Sicherung ersetzen?")) {
                props.ersetzen(d)
                setMeldung("Sicherung geladen.")
              }
            } catch (err) {
              setMeldung("Keine gültige TrainMe-Sicherung: " + String((err as Error).message))
            }
            e.target.value = ""
          }}
        />
        {meldung ? <p className="hinweis">{meldung}</p> : null}
      </Klappe>
      <Klappe titel="⚠️ Zurücksetzen">
        <p className="hinweis">Löscht Profil, Protokoll und Erfolge auf diesem Handy.</p>
        <button
          type="button"
          className="knopf gefahr"
          onClick={() => {
            if (confirm("Wirklich alles löschen? Das lässt sich ohne Sicherung nicht rückgängig machen.")) props.zuruecksetzen()
          }}
        >
          Alles löschen
        </button>
      </Klappe>
      <p className="hinweis klein">
        TrainMe {__VERSION__} · offline, ohne Konto, ohne Werbung. Hinweise zur Trainingsplanung beruhen auf sportwissenschaftlichen Studien, ersetzen aber keine persönliche Beratung durch Trainer, Ärztin oder Physiotherapeut.
      </p>
    </div>
  )
}
