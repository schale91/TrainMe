// Rahmen der App: Daten laden und speichern, Tabs, Einrichtung beim ersten Start, Belohnung nach dem Training.

import { useEffect, useState } from "react"
import { ABZEICHEN, abschliessen, stufe, type Ergebnis } from "./logik/spiel"
import { blockWoche, istEntlastung } from "./logik/progression"
import { heute } from "./logik/plan"
import { laden, leer, speichern } from "./logik/speicher"
import type { Daten, Einheit, Profil, Protokoll } from "./logik/typen"
import { uebung } from "./daten/uebungen"
import Einrichtung from "./ui/Einrichtung"
import Einstellungen from "./ui/Einstellungen"
import Erfolge from "./ui/Erfolge"
import Fortschritt from "./ui/Fortschritt"
import Training from "./ui/Training"
import Woche from "./ui/Woche"

type Tab = "woche" | "fortschritt" | "erfolge" | "einstellungen"

const TABS: { id: Tab; name: string; symbol: string }[] = [
  { id: "woche", name: "Plan", symbol: "📅" },
  { id: "fortschritt", name: "Fortschritt", symbol: "📈" },
  { id: "erfolge", name: "Erfolge", symbol: "🏆" },
  { id: "einstellungen", name: "Profil", symbol: "⚙️" },
]

export default function App() {
  const [daten, setDaten] = useState<Daten>(() => laden())
  const [tab, setTab] = useState<Tab>("woche")
  const [offen, setOffen] = useState<Einheit | null>(null)
  const [belohnung, setBelohnung] = useState<(Ergebnis & { stufeVorher: number; stufeNachher: number }) | null>(null)

  useEffect(() => speichern(daten), [daten])

  const aendern = (f: (d: Daten) => void) =>
    setDaten((alt) => {
      const neu = structuredClone(alt)
      f(neu)
      return neu
    })

  if (!daten.profil) {
    return <Einrichtung fertig={(p) => aendern((d) => void (d.profil = p))} />
  }
  const profil = daten.profil

  const fertig = (e: Einheit, protokolle: Protokoll[]) => {
    const tag = heute()
    // vor- oder nachgeholt: zählt am Tag, an dem trainiert wurde
    const echt = { ...e, datum: tag }
    const w = blockWoche(profil, e.datum)
    const neu = structuredClone(daten)
    const ergebnis = abschliessen(
      neu,
      echt,
      protokolle.map((p) => ({ ...p, datum: tag })),
      istEntlastung(w),
      w,
    )
    if (e.datum !== tag) neu.erledigt[neu.erledigt.length - 1].geplant = e.datum
    setDaten(neu)
    setOffen(null)
    setBelohnung({ ...ergebnis, stufeVorher: stufe(daten.spiel.xp).stufe, stufeNachher: stufe(neu.spiel.xp).stufe })
  }

  return (
    <div className="app">
      <main>
        {offen ? (
          <Training
            daten={daten}
            einheit={offen}
            zurueck={() => setOffen(null)}
            abschliessen={fertig}
            ausschliessen={(id) => aendern((d) => void (d.profil!.ausgeschlossen = [...d.profil!.ausgeschlossen, id]))}
          />
        ) : tab === "woche" ? (
          <Woche daten={daten} oeffnen={setOffen} />
        ) : tab === "fortschritt" ? (
          <Fortschritt daten={daten} />
        ) : tab === "erfolge" ? (
          <Erfolge daten={daten} />
        ) : (
          <Einstellungen
            daten={daten}
            profilAendern={(p: Profil) => aendern((d) => void (d.profil = p))}
            ersetzen={(d) => setDaten(d)}
            zuruecksetzen={() => {
              setDaten(leer())
              setTab("woche")
            }}
          />
        )}
      </main>
      {!offen ? (
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t.id} type="button" className={tab === t.id ? "an" : ""} onClick={() => setTab(t.id)}>
              <span>{t.symbol}</span>
              <small>{t.name}</small>
            </button>
          ))}
        </nav>
      ) : null}
      {belohnung ? (
        <div className="overlay" onClick={() => setBelohnung(null)}>
          <div className="belohnung" onClick={(e) => e.stopPropagation()}>
            <div className="konfetti" aria-hidden="true">
              {Array.from({ length: 24 }, (_, i) => (
                <i key={i} style={{ left: (i * 37) % 100 + "%", animationDelay: (i % 8) * 0.12 + "s" }} />
              ))}
            </div>
            <h1>Geschafft! 🎉</h1>
            <p className="xp">+{belohnung.xp} XP</p>
            {belohnung.stufeNachher > belohnung.stufeVorher ? <p className="stufeauf">⬆️ Stufe {belohnung.stufeNachher} erreicht!</p> : null}
            {belohnung.rekorde.length ? (
              <div>
                <h2>📈 Neue Bestwerte</h2>
                {belohnung.rekorde.map((id) => (
                  <p key={id}>{uebung(id)?.name}</p>
                ))}
              </div>
            ) : null}
            {belohnung.neueAbzeichen.map((id) => {
              const a = ABZEICHEN.find((x) => x.id === id)
              return a ? (
                <p key={id} className="neuabz">
                  <span>{a.symbol}</span> Abzeichen „{a.name}“
                </p>
              ) : null
            })}
            <button type="button" className="knopf gross" onClick={() => setBelohnung(null)}>
              Weiter
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
