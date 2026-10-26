// Rahmen der App: Daten laden und speichern, Tabs, Einrichtung beim ersten Start, Belohnung nach dem Training.

import { useEffect, useRef, useState } from "react"
import { uebung } from "./daten/uebungen/index"
import { prozentMethode } from "./daten/fakten"
import { heute } from "./logik/plan"
import { blockWoche, istEntlastung } from "./logik/progression"
import { laden, leer, speichern } from "./logik/speicher"
import { ABZEICHEN, abschliessen, stufe, type Ergebnis } from "./logik/spiel"
import type { Daten, Einheit, Profil, Protokoll } from "./logik/typen"
import Bibliothek from "./ui/Bibliothek"
import Weg, { BlockFortschritt } from "./ui/Weg"
import { aktuellerBlock, wegStand } from "./logik/weg"
import { rehaAktiv, rehaSperre } from "./logik/reha"
import Einrichtung from "./ui/Einrichtung"
import Fortschritt from "./ui/Fortschritt"
import Heute from "./ui/Heute"
import { Icon, useEbene } from "./ui/ios"
import { Sym, SymKachel } from "./ui/symbole"
import ProfilSeite, { type Unterseite } from "./ui/Profil"
import { jahresplanVorschlag } from "./logik/jahresplan"
import type { UpdateInfo } from "./logik/update"
import { updateAusblenden, updateAusgeblendet, updateBekannt, updateSuchen } from "./ui/update"
import Training from "./ui/Training"
import Einstufung from "./ui/Einstufung"
import Fehlergrenze from "./ui/Fehlergrenze"
import { gesundheitLesen } from "./ui/gesundheit"

type Tab = "heute" | "weg" | "uebungen" | "fortschritt" | "profil"

const TABS: { id: Tab; name: string; icon: string }[] = [
  { id: "heute", name: "Heute", icon: "heute" },
  { id: "weg", name: "Dein Weg", icon: "weg" },
  { id: "uebungen", name: "Übungen", icon: "uebungen" },
  { id: "fortschritt", name: "Fortschritt", icon: "fortschritt" },
  { id: "profil", name: "Profil", icon: "profil" },
]

type Belohnung = Ergebnis & { stufeVorher: number; stufeNachher: number; einheiten: number }

export default function App() {
  const [daten, setDatenRoh] = useState<Daten>(() => laden())
  const aktuell = useRef(daten)
  const [tab, setTab] = useState<Tab>("heute")
  const [offen, setOffen] = useState<Einheit | null>(null)
  const [belohnung, setBelohnung] = useState<Belohnung | null>(null)
  const [einstufen, setEinstufen] = useState(false)
  const [profilStart, setProfilStart] = useState<Unterseite>(null)
  const [update, setUpdate] = useState<UpdateInfo | null>(() => updateBekannt())
  const [updateZu, setUpdateZu] = useState(false)
  // Zurückgeste auf einem anderen Tab führt erst zu „Heute“, dann aus der App
  useEbene(tab !== "heute" && !!daten.profil, () => setTab("heute"))

  // Beim Start still nach einer neueren APK suchen (ohne Netz passiert nichts)
  useEffect(() => {
    updateSuchen()
      .then(setUpdate)
      .catch(() => undefined)
  }, [])

  // Effekte geben bewusst nichts zurück: Manche Android-WebViews liefern bei scrollTo einen Wert, den React sonst als
  // Aufräumfunktion aufrufen würde
  useEffect(() => {
    speichern(daten)
  }, [daten])

  // Lebenszeichen: Wurde eine Seite geöffnet, aber nie fertig angezeigt, hing die App beim letzten Mal dort
  const [haenger] = useState<{ ziel: string; zeit: string } | null>(() => {
    try {
      const n = JSON.parse(localStorage.getItem("trainme.navigation") || "null")
      return n && !n.fertig ? n : null
    } catch {
      return null
    }
  })
  const [haengerZu, setHaengerZu] = useState(false)
  const ziel = einstufen ? "Einstufung" : offen ? "Training" : tab
  useEffect(() => {
    try {
      localStorage.setItem("trainme.navigation", JSON.stringify({ ziel, zeit: new Date().toISOString(), fertig: false }))
    } catch {
      /* egal */
    }
    // nach dem ersten gezeichneten Bild gilt die Seite als angekommen
    const t = requestAnimationFrame(() =>
      setTimeout(() => {
        try {
          localStorage.setItem("trainme.navigation", JSON.stringify({ ziel, zeit: new Date().toISOString(), fertig: true }))
        } catch {
          /* egal */
        }
      }, 300),
    )
    return () => cancelAnimationFrame(t)
  }, [ziel])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tab, offen, einstufen])
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
  // Synchron ändern, damit Ergebnisse (XP, Rekorde) sofort vorliegen
  const aendern = (f: (d: Daten) => void) => {
    const neu = structuredClone(aktuell.current)
    f(neu)
    setDaten(neu)
  }

  if (!daten.profil) return <Einrichtung fertig={(p) => aendern((d) => void (d.profil = { ...p, jahresplan: p.jahresplan || jahresplanVorschlag(p, p.block_start) }))} />
  const profil = daten.profil

  const fertig = (e: Einheit, protokolle: Protokoll[], _vollstaendig?: boolean, schmerzVor?: number) => {
    const tag = heute()
    const w = blockWoche(profil, e.datum)
    const vorher = stufe(aktuell.current.spiel.xp).stufe
    let ergebnis: Ergebnis | null = null
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
      if (schmerzVor !== undefined) d.erledigt[d.erledigt.length - 1].schmerz_vor = schmerzVor
      einheiten = d.erledigt.length
    })
    setOffen(null)
    const r = ergebnis as unknown as Ergebnis
    setBelohnung({ ...r, stufeVorher: vorher, stufeNachher: stufe(aktuell.current.spiel.xp).stufe, einheiten })
  }

  const zeigeProfil = (u: Unterseite) => {
    setProfilStart(u)
    setTab("profil")
  }

  const pm = belohnung ? prozentMethode(belohnung.einheiten) : null
  const weg = belohnung ? aktuellerBlock(wegStand(daten, heute())) : null
  // Vor dem ersten Training erst Kraftwerte und Mobilität erfassen
  const eingestuft = !!daten.einstufung?.kraft && !!daten.einstufung?.mobil
  const oeffnen = (e: Einheit) => {
    // Reha: erst Warnzeichen und Freigabe, die Karte dazu steht auf „Heute“
    if (rehaAktiv(profil) && rehaSperre(profil, heute())) {
      setTab("heute")
      window.scrollTo(0, 0)
    } else if (!eingestuft) setEinstufen(true)
    else setOffen(e)
  }

  return (
    <div className="app">
      <main>
        {haenger && !haengerZu ? (
          <div className="hinweistext haenger">
            <b>Beim letzten Mal hing die App beim Öffnen von „{haenger.ziel}“.</b> Wenn das wieder passiert, schick bitte diese Meldung über Profil, Feedback (Bereich: {haenger.ziel}, Zeit: {haenger.zeit.slice(0, 16).replace("T", " ")}).
            <button type="button" className="textknopf" onClick={() => setHaengerZu(true)}>
              Ausblenden
            </button>
          </div>
        ) : null}
        <Fehlergrenze key={(offen ? "t" : "") + tab} bereich={offen ? "Training" : tab} zurueck={() => {
          setOffen(null)
          setTab("heute")
        }}>
        {update && !updateZu && !offen && !einstufen && tab === "heute" && !updateAusgeblendet(update.version) ? (
          <div className="updatebanner">
            <Sym name="import" groesse={26} farbe="var(--akzent)" />
            <span>
              <b>Update {update.version} verfügbar</b>
              <small>Deine Daten bleiben erhalten.</small>
            </span>
            <button type="button" className="knopf klein" onClick={() => zeigeProfil("update")}>
              Ansehen
            </button>
            <button type="button" className="rundknopf" aria-label="Ausblenden" onClick={() => {
              updateAusblenden(update.version)
              setUpdateZu(true)
            }}>
              <Icon name="schliessen" groesse={16} />
            </button>
          </div>
        ) : null}
        {einstufen ? (
          <Einstufung daten={daten} aendern={aendern} fertig={() => setEinstufen(false)} zurueck={() => setEinstufen(false)} />
        ) : offen ? (
          <Training daten={daten} einheit={offen} zurueck={() => setOffen(null)} abschliessen={fertig} ausschliessen={(id) => aendern((d) => void (d.profil!.ausgeschlossen = [...d.profil!.ausgeschlossen, id]))} />
        ) : tab === "heute" ? (
          <Heute daten={daten} aendern={aendern} oeffnen={oeffnen} einstufen={() => setEinstufen(true)} zumWeg={() => setTab("weg")} />
        ) : tab === "weg" ? (
          <Weg daten={daten} einstufen={() => setEinstufen(true)} zumJahresplan={() => zeigeProfil("jahresplan")} oeffnen={oeffnen} />
        ) : tab === "uebungen" ? (
          <Bibliothek profil={profil} />
        ) : tab === "fortschritt" ? (
          <Fortschritt daten={daten} aendern={aendern} />
        ) : (
          <ProfilSeite
            key={profilStart || "profil"}
            start={profilStart}
            update={update}
            updateGefunden={setUpdate}
            daten={daten}
            profilAendern={(p: Profil) => aendern((d) => void (d.profil = p))}
            ersetzen={setDaten}
            aendern={aendern}
            einstufen={() => setEinstufen(true)}
            zuruecksetzen={() => {
              setDaten(leer())
              setTab("heute")
            }}
          />
        )}
        </Fehlergrenze>
      </main>
      {!offen && !einstufen ? (
        <nav className="tableiste">
          {TABS.map((t) => (
            <button key={t.id} type="button" className={tab === t.id ? "an" : ""} onClick={() => {
              setProfilStart(null)
              setTab(t.id)
            }}>
              <Icon name={t.icon} groesse={25} />
              <small>{t.name}</small>
            </button>
          ))}
        </nav>
      ) : null}
      {belohnung ? (
        <div className="overlay">
          <div className="belohnung">
            <div className="konfetti" aria-hidden="true">
              {Array.from({ length: 28 }, (_, i) => (
                <i key={i} style={{ left: ((i * 37) % 100) + "%", animationDelay: (i % 9) * 0.1 + "s" }} />
              ))}
            </div>
            <h1>Geschafft!</h1>
            <p className="xp">+{belohnung.xp} XP</p>
            {belohnung.stufeNachher > belohnung.stufeVorher ? <p className="stufeauf">Stufe {belohnung.stufeNachher} erreicht!</p> : null}
            {weg ? <BlockFortschritt stand={weg} sport={daten.profil?.sport} /> : null}
            {pm ? (
              <p className="prozentzeile">
                1-%-Methode: {belohnung.einheiten} {belohnung.einheiten === 1 ? "Einheit" : "Einheiten"}, also ×{String(Math.round(pm.faktor * 100) / 100).replace(".", ",")}
              </p>
            ) : null}
            {belohnung.rekorde.length ? (
              <div className="rekordliste">
                <b className="mitsym mitte">
                  <Sym name="pokal" groesse={20} farbe="var(--gold)" /> Neue Bestwerte
                </b>
                {belohnung.rekorde.map((id) => (
                  <span key={id}>{uebung(id)?.name}</span>
                ))}
              </div>
            ) : null}
            {belohnung.neueAbzeichen.map((id) => {
              const a = ABZEICHEN.find((x) => x.id === id)
              return a ? (
                <p key={id} className="neuabz">
                  <SymKachel name={a.symbol} farbe="#c98a1e" groesse={28} /> Abzeichen „{a.name}“
                </p>
              ) : null
            })}
            <button type="button" className="knopf voll gross" onClick={() => setBelohnung(null)}>
              Weiter
            </button>
            <button type="button" className="knopf voll leise" onClick={() => {
              setBelohnung(null)
              setTab("weg")
            }}>
              Dein Weg ansehen
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
