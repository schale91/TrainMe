// Rahmen der App: Daten laden und speichern, Tabs, Einrichtung beim ersten Start, Belohnung nach dem Training.

import { useEffect, useRef, useState } from "react"
import { uebung } from "./daten/uebungen/index"
import { prozentMethode } from "./daten/fakten"
import { heute } from "./logik/plan"
import { blockWoche, istEntlastung } from "./logik/progression"
import { laden, leer, speichern } from "./logik/speicher"
import { ABZEICHEN, abschliessen, stufe, type Ergebnis } from "./logik/spiel"
import type { Daten, Einheit, Profil, Protokoll, Tageswerte } from "./logik/typen"
import Bibliothek from "./ui/Bibliothek"
import Weg, { BlockFortschritt } from "./ui/Weg"
import { aktuellerBlock, wegStand } from "./logik/weg"
import { rehaAktiv, rehaSperre } from "./logik/reha"
import { vorgemerktAnwenden } from "./logik/umstellen"
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
import { anfrage, aufLinkHoeren, bruecke, koppeln, modus, speicherSchluessel } from "./ui/lebenswelt"
import { abgleichen, neuerStand, type Abgleichstand } from "./logik/abgleich"
import { einspielen, uebernehmen, type KbDok } from "./logik/kraftbuch"
import { maxZusammenfassung, type MaxZeile } from "./logik/zusammenfassung"
import { ausLebenswelt } from "./logik/koerper"

type Tab = "heute" | "weg" | "uebungen" | "fortschritt" | "profil"

const TABS: { id: Tab; name: string; icon: string }[] = [
  { id: "heute", name: "Heute", icon: "heute" },
  { id: "weg", name: "Dein Weg", icon: "weg" },
  { id: "uebungen", name: "Übungen", icon: "uebungen" },
  { id: "fortschritt", name: "Fortschritt", icon: "fortschritt" },
  { id: "profil", name: "Profil", icon: "profil" },
]

type Belohnung = Ergebnis & { stufeVorher: number; stufeNachher: number; einheiten: number; maxima: MaxZeile[]; datum: string }

/** Stand des Abgleichs mit der Lebenswelt auf diesem Gerät. */
function ladeStand(schluessel: string): Abgleichstand {
  try {
    return { ...neuerStand(), ...JSON.parse(localStorage.getItem(schluessel + ".abgleich") || "{}") }
  } catch {
    return neuerStand()
  }
}

export default function App() {
  // Lokal, eingebettet in die Lebenswelt oder als gekoppelte APK; Daten der Lebenswelt liegen getrennt von lokalen
  const [art] = useState(modus)
  const lw = art !== "lokal"
  const [schluessel] = useState(speicherSchluessel)
  const [daten, setDatenRoh] = useState<Daten>(() => laden(typeof localStorage !== "undefined" ? localStorage : null, schluessel))
  const aktuell = useRef(daten)
  const [tab, setTab] = useState<Tab>("heute")
  const [offen, setOffen] = useState<Einheit | null>(null)
  const [belohnung, setBelohnung] = useState<Belohnung | null>(null)
  const [einstufen, setEinstufen] = useState(false)
  const [profilStart, setProfilStart] = useState<Unterseite>(null)
  const [update, setUpdate] = useState<UpdateInfo | null>(() => (art === "eingebettet" ? null : updateBekannt()))
  // Lebenswelt: erster Abgleich gelaufen, Verbindung, Hinweis nach der Übernahme aus dem Kraftbuch
  const [bereit, setBereit] = useState(!lw)
  const [offline, setOffline] = useState(false)
  const [uebernommen, setUebernommen] = useState<string | null>(null)
  const [koppelHinweis, setKoppelHinweis] = useState<string | null>(null)
  const [updateZu, setUpdateZu] = useState(false)
  // Zurückgeste auf einem anderen Tab führt erst zu „Heute“, dann aus der App
  useEbene(tab !== "heute" && !!daten.profil, () => setTab("heute"), "seite", "Heute")

  // Vorgemerkte Planänderung übernehmen, sobald der neue Block begonnen hat
  useEffect(() => {
    const pruefen = () => {
      const p = aktuell.current.profil
      if (p?.vorgemerkt && heute() >= p.vorgemerkt.ab) aendern((d) => void (d.profil = vorgemerktAnwenden(d.profil!, heute())))
    }
    pruefen()
    document.addEventListener("visibilitychange", pruefen)
    return () => document.removeEventListener("visibilitychange", pruefen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Beim Start still nach einer neueren APK suchen (ohne Netz passiert nichts); eingebettet kommt das Update mit der Lebenswelt
  useEffect(() => {
    if (art === "eingebettet") return
    updateSuchen()
      .then(setUpdate)
      .catch(() => undefined)
  }, [])

  // Effekte geben bewusst nichts zurück: Manche Android-WebViews liefern bei scrollTo einen Wert, den React sonst als
  // Aufräumfunktion aufrufen würde
  useEffect(() => {
    speichern(daten, typeof localStorage !== "undefined" ? localStorage : null, schluessel)
  }, [daten, schluessel])

  // Abgleich mit der Lebenswelt: beim Start, kurz nach jeder Änderung, jede Minute und beim Zurückkehren in die App
  const laeuft = useRef(false)
  const nochmal = useRef(false)
  const abgleich = async () => {
    if (!lw) return
    if (laeuft.current) {
      nochmal.current = true
      return
    }
    laeuft.current = true
    try {
      const vorher = aktuell.current
      const r = await abgleichen(anfrage, vorher, ladeStand(schluessel), Date.now())
      setOffline(r.offline)
      // Hat sich inzwischen hier etwas geändert, gilt dieser Durchgang nicht; der nächste nimmt alles mit
      if (aktuell.current !== vorher) nochmal.current = true
      else {
        try {
          localStorage.setItem(schluessel + ".abgleich", JSON.stringify(r.stand))
        } catch {
          /* voll */
        }
        if (r.neu) setDaten(r.daten)
        if (!r.offline) bruecke()?.gespeichert?.()
        // Einmal das Kraftbuch übernehmen, wenn die Lebenswelt eins hat und es noch niemand übernommen hat
        if (r.kraftbuch && !r.daten.uebernahmen?.kraftbuch) {
          const kb = await anfrage("GET", "/api/lebenswelt/trainme/kraftbuch")
          const doks = ((kb.daten || {}) as { dokumente?: KbDok[] }).dokumente || []
          if (kb.status === 200 && doks.length && aktuell.current === (r.neu ? r.daten : vorher)) {
            const u = uebernehmen(doks, heute(), bruecke()?.startwerte)
            aendern((d) => einspielen(d, u, heute(), bruecke()?.name || ""))
            setUebernommen(
              "Aus dem Kraftbuch übernommen: Plan mit " + (u.plan?.tage.length || 0) + " Tagen, " + u.erledigt.filter((e) => e.quelle === "kraftbuch").length + " trainierte Tage, " + Object.keys(u.maxwerte).length + " Maxima" + (u.beschwerden.length ? ", " + u.beschwerden.length + " Beschwerde(n)" : "") + ". Bitte unter Profil, Orte und Geräte den Kraftraum prüfen" + (u.frei.length ? "; ohne Anleitung bleiben: " + u.frei.join(", ") : "") + ".",
            )
            nochmal.current = true
          }
        }
      }
    } finally {
      laeuft.current = false
      setBereit(true)
      if (nochmal.current) {
        nochmal.current = false
        setTimeout(() => void abgleich(), 500)
      }
    }
  }
  useEffect(() => {
    if (!lw) return
    void abgleich()
    const takt = setInterval(() => document.visibilityState === "visible" && void abgleich(), 60000)
    const sichtbar = () => document.visibilityState === "visible" && void abgleich()
    document.addEventListener("visibilitychange", sichtbar)
    // Garmin-Werte und Körpergewicht aus der Lebenswelt
    void anfrage("GET", "/api/lebenswelt/trainme/gesundheit").then((r) => {
      const g = r.status === 200 ? (r.daten as { stand?: string; tage?: Record<string, Tageswerte>; gewicht?: { kg: number; datum?: string } | null }) : null
      if (!g) return
      aendern((d) => {
        d.gesundheit = { verbunden: d.gesundheit?.verbunden ?? false, tage: d.gesundheit?.tage || {}, garmin: { stand: g.stand || "", tage: g.tage || {} } }
        if (g.gewicht?.kg && d.profil && d.profil.koerpergewicht_kg !== g.gewicht.kg) d.profil.koerpergewicht_kg = g.gewicht.kg
        // Verlauf für den Trend (dieselbe alte Messung wird nicht jeden Tag neu eingetragen)
        if (g.gewicht?.kg) d.koerper = ausLebenswelt(d.koerper, heute(), g.gewicht.kg, typeof g.gewicht.datum === "string" ? g.gewicht.datum.slice(0, 10) : undefined)
      })
    })
    return () => {
      clearInterval(takt)
      document.removeEventListener("visibilitychange", sichtbar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (!lw || !bereit) return
    const t = setTimeout(() => void abgleich(), 2500)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daten])
  // Noch nie abgeglichen und die Lebenswelt antwortet (noch) nicht, etwa weil sie gerade selbst erst startet: bald
  // wieder versuchen statt erst nach einer Minute, und so lange keine Einrichtung zeigen
  const nieAbgeglichen = lw && !daten.profil && !ladeStand(schluessel).seit
  useEffect(() => {
    if (!nieAbgeglichen || !offline) return
    const t = setInterval(() => void abgleich(), 3000)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nieAbgeglichen, offline])

  // Koppeln über den Link aus dem QR-Code der Lebenswelt (nur in der APK)
  useEffect(
    () =>
      aufLinkHoeren((l) => {
        if (art === "eingebettet") return
        setKoppelHinweis("Kopple mit der Lebenswelt …")
        koppeln(l.adresse, l.code)
          .then(() => location.reload())
          .catch((e: Error) => setKoppelHinweis(e.message))
      }),
    [art],
  )

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

  if (lw && !daten.profil && (!bereit || (offline && nieAbgeglichen)))
    return (
      <div className="app">
        <main>
          <p className="hinweistext mitte">Lade deine Daten aus der Lebenswelt …</p>
          {offline ? <p className="hinweistext mitte klein">Die Lebenswelt antwortet noch nicht. TrainMe versucht es alle paar Sekunden wieder.</p> : null}
        </main>
      </div>
    )
  if (!daten.profil) return <Einrichtung fertig={(p) => aendern((d) => void (d.profil = { ...p, jahresplan: p.jahresplan || jahresplanVorschlag(p, p.block_start) }))} />
  const profil = daten.profil

  const fertig = (e: Einheit, protokolle: Protokoll[], _vollstaendig?: boolean, schmerzVor?: number) => {
    const tag = heute()
    const w = blockWoche(profil, e.datum)
    const vorher = stufe(aktuell.current.spiel.xp).stufe
    let ergebnis: Ergebnis | null = null
    let einheiten = 0
    // Maxima vor dem Eintragen vergleichen, sonst stünde das heutige schon im Verlauf
    const maxima = maxZusammenfassung(aktuell.current, protokolle.map((p) => ({ ...p, datum: tag })), tag)
    aendern((d) => {
      ergebnis = abschliessen(
        d,
        { ...e, datum: tag },
        protokolle.map((p) => ({ ...p, datum: tag })),
        profil.planart !== "eigen" && istEntlastung(w),
        w,
      )
      if (e.datum !== tag) d.erledigt[d.erledigt.length - 1].geplant = e.datum
      if (schmerzVor !== undefined) d.erledigt[d.erledigt.length - 1].schmerz_vor = schmerzVor
      einheiten = d.erledigt.length
    })
    setOffen(null)
    const r = ergebnis as unknown as Ergebnis
    setBelohnung({ ...r, stufeVorher: vorher, stufeNachher: stufe(aktuell.current.spiel.xp).stufe, einheiten, maxima, datum: tag })
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
        {art === "eingebettet" && bruecke()?.schliessen && !offen && !einstufen ? (
          <div className="navleiste zurlebenswelt">
            <button type="button" className="navzurueck" onClick={() => bruecke()?.schliessen?.()}>
              <Icon name="zurueck" groesse={24} dick={2.4} />
              <span>Lebenswelt</span>
            </button>
          </div>
        ) : null}
        {koppelHinweis ? (
          <div className="hinweistext">
            {koppelHinweis}{" "}
            <button type="button" className="textknopf" onClick={() => setKoppelHinweis(null)}>
              Ausblenden
            </button>
          </div>
        ) : null}
        {uebernommen && !offen ? (
          <div className="hinweistext">
            <b>{uebernommen}</b>{" "}
            <button type="button" className="textknopf" onClick={() => {
              setUebernommen(null)
              zeigeProfil("orte")
            }}>
              Geräte prüfen
            </button>{" "}
            <button type="button" className="textknopf" onClick={() => setUebernommen(null)}>
              Später
            </button>
          </div>
        ) : null}
        {lw && offline && !offen && tab === "heute" ? <p className="hinweistext klein">Gerade keine Verbindung zur Lebenswelt. Alles bleibt hier gespeichert und geht beim nächsten Mal mit.</p> : null}
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
          <Training daten={daten} einheit={offen} zurueck={() => setOffen(null)} abschliessen={fertig} ausschliessen={(id) => aendern((d) => void (d.profil!.ausgeschlossen = [...d.profil!.ausgeschlossen, id]))} bandfarbe={(id, f) => aendern((d) => {
            const b = { ...(d.bandfarben || {}) }
            if (f) b[id] = f
            else delete b[id]
            d.bandfarben = b
          })} satzform={(id, f) => aendern((d) => void (d.satzform = { ...(d.satzform || {}), [id]: f }))} />
        ) : tab === "heute" ? (
          <Heute daten={daten} aendern={aendern} oeffnen={oeffnen} einstufen={() => setEinstufen(true)} zumWeg={() => setTab("weg")} lebenswelt={lw} />
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
            {lw ? <p className="prozentzeile">Deine XP holst du in der Lebenswelt ab.</p> : <p className="xp">+{belohnung.xp} XP</p>}
            {!lw && belohnung.stufeNachher > belohnung.stufeVorher ? <p className="stufeauf">Stufe {belohnung.stufeNachher} erreicht!</p> : null}
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
            {belohnung.maxima.length ? (
              <div className="maxliste">
                <b>Geschätztes Maximum heute</b>
                {belohnung.maxima.map((m) => {
                  const diff = m.vorher !== null ? Math.round((m.heute - m.vorher) * 2) / 2 : null
                  const uebernommen = daten.maxwerte?.[m.uebung]?.kg === m.vorschlag && daten.maxwerte?.[m.uebung]?.datum === belohnung.datum
                  return (
                    <div key={m.uebung} className="maxzeile">
                      <span className="maxname">{uebung(m.uebung)?.name || m.uebung}</span>
                      <span className="maxwert">
                        {String(m.heute).replace(".", ",")} kg
                        {diff ? <small className={diff > 0 ? "plus" : "minus"}>{(diff > 0 ? " +" : " −") + String(Math.abs(diff)).replace(".", ",")}</small> : null}
                      </span>
                      {m.vorschlag !== null ? (
                        uebernommen ? (
                          <small className="maxok">als Maximum übernommen</small>
                        ) : (
                          <button type="button" className="knopf klein" onClick={() => aendern((d) => void (d.maxwerte = { ...(d.maxwerte || {}), [m.uebung]: { kg: m.vorschlag!, datum: belohnung.datum } }))}>
                            Als Maximum übernehmen
                          </button>
                        )
                      ) : null}
                    </div>
                  )
                })}
                <small className="leise">Aus Sätzen bis 10 Wiederholungen. Ein übernommenes Maximum nutzt der Plan für Prozentangaben.</small>
              </div>
            ) : null}
            {(lw ? [] : belohnung.neueAbzeichen).map((id) => {
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
