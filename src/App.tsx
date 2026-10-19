// Rahmen der App: Daten laden und speichern, Tabs, Einrichtung beim ersten Start, Belohnung nach dem Training.

import { useEffect, useRef, useState } from "react"
import { uebung } from "./daten/uebungen/index"
import { prozentMethode } from "./daten/fakten"
import { kisteOeffnen, kisteVerdienen, type Inhalt } from "./logik/abenteuer"
import { heute } from "./logik/plan"
import { blockWoche, istEntlastung } from "./logik/progression"
import { laden, leer, speichern } from "./logik/speicher"
import { ABZEICHEN, abschliessen, stufe, type Ergebnis } from "./logik/spiel"
import type { Daten, Einheit, Kiste, Profil, Protokoll } from "./logik/typen"
import Abenteuer, { KisteAufmachen } from "./ui/Abenteuer"
import Bibliothek from "./ui/Bibliothek"
import Einrichtung from "./ui/Einrichtung"
import Fortschritt from "./ui/Fortschritt"
import Heute from "./ui/Heute"
import { Icon } from "./ui/ios"
import ProfilSeite from "./ui/Profil"
import Training from "./ui/Training"
import Fehlergrenze from "./ui/Fehlergrenze"
import { gesundheitLesen } from "./ui/gesundheit"

type Tab = "heute" | "uebungen" | "abenteuer" | "fortschritt" | "profil"

const TABS: { id: Tab; name: string; icon: string }[] = [
  { id: "heute", name: "Heute", icon: "heute" },
  { id: "uebungen", name: "Übungen", icon: "uebungen" },
  { id: "abenteuer", name: "Abenteuer", icon: "abenteuer" },
  { id: "fortschritt", name: "Fortschritt", icon: "fortschritt" },
  { id: "profil", name: "Profil", icon: "profil" },
]

type Belohnung = Ergebnis & { stufeVorher: number; stufeNachher: number; kiste: Kiste | null; einheiten: number }

export default function App() {
  const [daten, setDatenRoh] = useState<Daten>(() => laden())
  const aktuell = useRef(daten)
  const [tab, setTab] = useState<Tab>("heute")
  const [offen, setOffen] = useState<Einheit | null>(null)
  const [belohnung, setBelohnung] = useState<Belohnung | null>(null)
  const [kisteAuf, setKisteAuf] = useState(false)

  useEffect(() => speichern(daten), [daten])
  useEffect(() => window.scrollTo(0, 0), [tab, offen])
  // Gesundheitswerte beim Start und beim Zurückkehren in die App auffrischen
  useEffect(() => {
    const auffrischen = () => {
      if (document.visibilityState !== "visible" || !aktuell.current.gesundheit?.verbunden) return
      void gesundheitLesen(3)
        .then((tage) => aendern((d) => void (d.gesundheit = { verbunden: true, tage: { ...(d.gesundheit?.tage || {}), ...tage } })))
        .catch(() => undefined)
    }
    auffrischen()
    document.addEventListener("visibilitychange", auffrischen)
    return () => document.removeEventListener("visibilitychange", auffrischen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setDaten = (d: Daten) => {
    aktuell.current = d
    setDatenRoh(d)
  }
  // Synchron ändern, damit Ergebnisse (Kampf, Kiste) sofort vorliegen
  const aendern = (f: (d: Daten) => void) => {
    const neu = structuredClone(aktuell.current)
    f(neu)
    setDaten(neu)
  }

  if (!daten.profil) return <Einrichtung fertig={(p) => aendern((d) => void (d.profil = p))} />
  const profil = daten.profil

  const fertig = (e: Einheit, protokolle: Protokoll[], vollstaendig: boolean) => {
    const tag = heute()
    const w = blockWoche(profil, e.datum)
    const vorher = stufe(aktuell.current.spiel.xp).stufe
    let ergebnis: Ergebnis | null = null
    let kiste: Kiste | null = null
    let einheiten = 0
    aendern((d) => {
      ergebnis = abschliessen(
        d,
        { ...e, datum: tag },
        protokolle.map((p) => ({ ...p, datum: tag })),
        istEntlastung(w),
        w,
      )
      if (e.datum !== tag) d.erledigt[d.erledigt.length - 1].geplant = e.datum
      if (vollstaendig) kiste = kisteVerdienen(d.spiel, tag)
      einheiten = d.erledigt.length
    })
    setOffen(null)
    const r = ergebnis as unknown as Ergebnis
    setBelohnung({ ...r, stufeVorher: vorher, stufeNachher: stufe(aktuell.current.spiel.xp).stufe, kiste, einheiten })
  }

  const pm = belohnung ? prozentMethode(belohnung.einheiten) : null

  return (
    <div className="app">
      <main>
        <Fehlergrenze key={(offen ? "t" : "") + tab} bereich={offen ? "Training" : tab} zurueck={() => {
          setOffen(null)
          setTab("heute")
        }}>
        {offen ? (
          <Training daten={daten} einheit={offen} zurueck={() => setOffen(null)} abschliessen={fertig} ausschliessen={(id) => aendern((d) => void (d.profil!.ausgeschlossen = [...d.profil!.ausgeschlossen, id]))} />
        ) : tab === "heute" ? (
          <Heute daten={daten} oeffnen={setOffen} zumAbenteuer={() => setTab("abenteuer")} />
        ) : tab === "uebungen" ? (
          <Bibliothek profil={profil} />
        ) : tab === "abenteuer" ? (
          <Abenteuer daten={daten} aendern={aendern} />
        ) : tab === "fortschritt" ? (
          <Fortschritt daten={daten} aendern={aendern} />
        ) : (
          <ProfilSeite
            daten={daten}
            profilAendern={(p: Profil) => aendern((d) => void (d.profil = p))}
            ersetzen={setDaten}
            aendern={aendern}
            zuruecksetzen={() => {
              setDaten(leer())
              setTab("heute")
            }}
          />
        )}
        </Fehlergrenze>
      </main>
      {!offen ? (
        <nav className="tableiste">
          {TABS.map((t) => (
            <button key={t.id} type="button" className={tab === t.id ? "an" : ""} onClick={() => setTab(t.id)}>
              <Icon name={t.icon} groesse={25} />
              <small>{t.name}</small>
              {t.id === "abenteuer" && daten.spiel.kisten.length ? <i className="badge">{daten.spiel.kisten.length}</i> : null}
            </button>
          ))}
        </nav>
      ) : null}
      {belohnung ? (
        <div className="overlay">
          <div className="belohnung">
            {!kisteAuf ? (
              <>
                <div className="konfetti" aria-hidden="true">
                  {Array.from({ length: 28 }, (_, i) => (
                    <i key={i} style={{ left: ((i * 37) % 100) + "%", animationDelay: (i % 9) * 0.1 + "s" }} />
                  ))}
                </div>
                <h1>Geschafft!</h1>
                <p className="xp">+{belohnung.xp} XP</p>
                {belohnung.stufeNachher > belohnung.stufeVorher ? <p className="stufeauf">Stufe {belohnung.stufeNachher} erreicht!</p> : null}
                {pm ? (
                  <p className="prozentzeile">
                    1-%-Methode: {belohnung.einheiten} {belohnung.einheiten === 1 ? "Einheit" : "Einheiten"}, also ×{String(Math.round(pm.faktor * 100) / 100).replace(".", ",")}
                  </p>
                ) : null}
                {belohnung.rekorde.length ? (
                  <div className="rekordliste">
                    <b>Neue Bestwerte 🏆</b>
                    {belohnung.rekorde.map((id) => (
                      <span key={id}>{uebung(id)?.name}</span>
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
                {belohnung.kiste ? (
                  <button type="button" className="knopf voll gross gold" onClick={() => setKisteAuf(true)}>
                    🎁 Kiste öffnen
                  </button>
                ) : (
                  <p className="hinweistext klein">Keine Kiste diesmal: Dafür bei jeder Übung mindestens einen Satz eintragen.</p>
                )}
                <button type="button" className="knopf voll leise" onClick={() => setBelohnung(null)}>
                  {belohnung.kiste ? "Später öffnen" : "Weiter"}
                </button>
              </>
            ) : (
              <KisteAufmachen
                art={belohnung.kiste!.art}
                oeffnen={() => {
                  let inhalt: Inhalt | null = null
                  aendern((d) => {
                    inhalt = kisteOeffnen(d.spiel)
                  })
                  return inhalt
                }}
                fertig={() => {
                  setKisteAuf(false)
                  setBelohnung(null)
                  setTab("abenteuer")
                }}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
