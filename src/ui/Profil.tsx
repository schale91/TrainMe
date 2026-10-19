// Profil und Einstellungen im iOS-Stil: gruppierte Liste, jeder Punkt öffnet eine eigene Seite.

import { useEffect, useRef, useState } from "react"
import { UEBUNGEN } from "../daten/uebungen/index"
import { SPORTARTEN } from "../daten/vorlagen"
import { heute, montagVon } from "../logik/plan"
import { exportieren, importieren } from "../logik/speicher"
import type { Daten, Profil as ProfilT } from "../logik/typen"
import { Gruppe, Schalter, Seite, Zeile } from "./ios"
import { benachrichtigungErlauben, overlayErlauben, timerStatus } from "./pausenTimer"
import { AusnahmenEditor, Grunddaten, KoerperEditor, OrteEditor, SportWahl, WocheEditor } from "./Profilteile"
import { dateiTeilen } from "./teilen"
import Feedback from "./Feedback"
import { gesundheitEinstellungen, gesundheitLesen, gesundheitVerbinden, gesundheitVerfuegbar } from "./gesundheit"
import { ERFAHRUNG, GELENKE, ZIELE } from "./texte"

type Unterseite = null | "ziel" | "sport" | "orte" | "woche" | "koerper" | "ausnahmen" | "timer" | "sicherung" | "ueber" | "gesundheit" | "feedback"

export default function Profil(props: { daten: Daten; profilAendern: (p: ProfilT) => void; ersetzen: (d: Daten) => void; zuruecksetzen: () => void; aendern: (f: (d: Daten) => void) => void }) {
  const profil = props.daten.profil!
  const [seite, setSeite] = useState<Unterseite>(null)
  const teil = { profil, aendern: props.profilAendern }
  const zurueck = { text: "Profil", onClick: () => setSeite(null) }

  if (seite === "ziel")
    return (
      <Seite titel="Ziel und Erfahrung" zurueck={zurueck}>
        <Grunddaten {...teil} />
      </Seite>
    )
  if (seite === "sport")
    return (
      <Seite titel="Training und Sport" zurueck={zurueck}>
        <SportWahl {...teil} />
      </Seite>
    )
  if (seite === "orte")
    return (
      <Seite titel="Orte und Geräte" zurueck={zurueck}>
        <OrteEditor {...teil} />
      </Seite>
    )
  if (seite === "woche")
    return (
      <Seite titel="Deine Woche" zurueck={zurueck}>
        <WocheEditor {...teil} />
      </Seite>
    )
  if (seite === "koerper")
    return (
      <Seite titel="Beschwerden" zurueck={zurueck}>
        <KoerperEditor {...teil} />
      </Seite>
    )
  if (seite === "ausnahmen")
    return (
      <Seite titel="Ausnahmen" zurueck={zurueck}>
        <AusnahmenEditor {...teil} />
      </Seite>
    )
  if (seite === "timer") return <TimerSeite zurueck={zurueck} />
  if (seite === "sicherung") return <Sicherung daten={props.daten} ersetzen={props.ersetzen} zuruecksetzen={props.zuruecksetzen} zurueck={zurueck} />
  if (seite === "ueber") return <Ueber zurueck={zurueck} />
  if (seite === "feedback") return <Feedback zurueck={zurueck} />
  if (seite === "gesundheit") return <GesundheitSeite daten={props.daten} aendern={props.aendern} zurueck={zurueck} />

  const ziel = ZIELE.find((z) => z.id === profil.ziel)
  const sport = SPORTARTEN.find((s) => s.id === profil.sport)
  const tage = profil.woche.filter((t) => t.art === "training").length
  const beschwerden = profil.beschwerden.map((b) => GELENKE.find((g) => g.id === b.gelenk)?.name).join(", ")

  return (
    <Seite titel="Profil" untertitel={profil.name || undefined}>
      <Gruppe titel="Training">
        <Zeile symbol="🎯" titel="Ziel und Erfahrung" wert={ziel?.name + ", " + ERFAHRUNG.find((e) => e.id === profil.erfahrung)?.name} onClick={() => setSeite("ziel")} />
        <Zeile symbol="⛳" titel="Training und Sport" wert={sport?.name} onClick={() => setSeite("sport")} />
        <Zeile symbol="📅" titel="Woche" wert={tage + " Trainingstage"} onClick={() => setSeite("woche")} />
        <Zeile symbol="🏠" titel="Orte und Geräte" wert={profil.orte.map((o) => o.name).join(", ")} onClick={() => setSeite("orte")} />
      </Gruppe>
      <Gruppe titel="Körper">
        <Zeile symbol="🩹" titel="Beschwerden" wert={beschwerden || "keine"} onClick={() => setSeite("koerper")} />
        <Zeile symbol="🚫" titel="Ausnahmen" wert={profil.ausgeschlossen.length ? profil.ausgeschlossen.length + " Übungen" : "keine"} onClick={() => setSeite("ausnahmen")} />
      </Gruppe>
      <Gruppe titel="Plan" fuss="Ein Block hat 4 Aufbauwochen und eine Entlastungswoche. Nach Urlaub oder Krankheit neu starten: Der Plan beginnt dann wieder mit mehr Reserve.">
        <Zeile symbol="🔄" titel="Neuen Block ab dieser Woche" onClick={() => props.profilAendern({ ...profil, block_start: montagVon(heute()) })} pfeil={false} />
      </Gruppe>
      <Gruppe titel="App">
        <Zeile symbol="⏱️" titel="Pausentimer" wert="Hintergrund, über Apps" onClick={() => setSeite("timer")} />
        <Zeile symbol="❤️" titel="Gesundheitsdaten" wert={props.daten.gesundheit?.verbunden ? "verbunden" : "aus"} onClick={() => setSeite("gesundheit")} />
        <Zeile symbol="💬" titel="Feedback, Fehler, Ideen" onClick={() => setSeite("feedback")} />
        <Zeile symbol="💾" titel="Sicherung" onClick={() => setSeite("sicherung")} />
        <Zeile symbol="ℹ️" titel="Über TrainMe und Quellen" onClick={() => setSeite("ueber")} />
      </Gruppe>
    </Seite>
  )
}

function TimerSeite(props: { zurueck: { text: string; onClick: () => void } }) {
  const [status, setStatus] = useState<{ nativ: boolean; overlay: boolean; benachrichtigung: boolean } | null>(null)
  const pruefen = () => void timerStatus().then(setStatus)
  useEffect(() => {
    pruefen()
    const zurueck = () => document.visibilityState === "visible" && pruefen()
    document.addEventListener("visibilitychange", zurueck)
    return () => document.removeEventListener("visibilitychange", zurueck)
  }, [])
  return (
    <Seite titel="Pausentimer" zurueck={props.zurueck}>
      <p className="hinweistext">Nach jedem abgehakten Satz läuft die Pause. Sie läuft weiter, wenn du TrainMe verlässt, zum Beispiel für YouTube. Am Ende klingelt und vibriert es.</p>
      {status && !status.nativ ? <p className="hinweistext">Im Browser läuft der Timer nur, solange TrainMe offen ist. In der Android-App geht mehr.</p> : null}
      <Gruppe titel="Anzeigen" fuss="„Über anderen Apps“ zeigt eine kleine, verschiebbare Uhr über allem, auch über Videos. Android fragt dafür einmal nach der Erlaubnis „Über anderen Apps einblenden“. Antippen der Uhr öffnet TrainMe.">
        <Zeile titel="Benachrichtigung mit Restzeit" untertitel="Auch auf dem Sperrbildschirm" rechts={<Schalter an={!!status?.benachrichtigung} onChange={() => void benachrichtigungErlauben().then(pruefen)} label="Benachrichtigung" />} />
        <Zeile titel="Über anderen Apps" untertitel="Schwebende Uhr, z. B. über YouTube" rechts={<Schalter an={!!status?.overlay} onChange={() => void overlayErlauben()} label="Über anderen Apps" />} />
      </Gruppe>
    </Seite>
  )
}

function Sicherung(props: { daten: Daten; ersetzen: (d: Daten) => void; zuruecksetzen: () => void; zurueck: { text: string; onClick: () => void } }) {
  const datei = useRef<HTMLInputElement>(null)
  const [meldung, setMeldung] = useState("")
  return (
    <Seite titel="Sicherung" zurueck={props.zurueck}>
      <Gruppe fuss="Deine Daten liegen nur auf diesem Handy. Ohne Sicherung sind sie beim Deinstallieren oder Handywechsel weg.">
        <Zeile
          symbol="📤"
          titel="Sicherung erstellen"
          onClick={() =>
            dateiTeilen("TrainMe-Sicherung-" + heute() + ".json", exportieren(props.daten))
              .then(() => setMeldung("Sicherung erstellt."))
              .catch((e) => setMeldung("Hat nicht geklappt: " + String(e?.message || e)))
          }
        />
        <Zeile symbol="📥" titel="Sicherung laden" onClick={() => datei.current?.click()} />
      </Gruppe>
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
      {meldung ? <p className="hinweistext">{meldung}</p> : null}
      <Gruppe titel="Zurücksetzen" fuss="Löscht Profil, Protokoll, Tests und Abenteuer auf diesem Handy.">
        <Zeile
          titel="Alles löschen"
          gefahr
          pfeil={false}
          onClick={() => {
            if (confirm("Wirklich alles löschen? Ohne Sicherung lässt sich das nicht rückgängig machen.")) props.zuruecksetzen()
          }}
        />
      </Gruppe>
    </Seite>
  )
}

function Ueber(props: { zurueck: { text: string; onClick: () => void } }) {
  return (
    <Seite titel="Über TrainMe" zurueck={props.zurueck}>
      <Gruppe fuss={"Version " + __VERSION__ + " · offline, ohne Konto, ohne Werbung"}>
        <Zeile titel="Übungen in der Datenbank" wert={String(UEBUNGEN.length)} />
        <Zeile titel="Golf-Übungen" wert={String(UEBUNGEN.filter((u) => u.golf).length)} />
      </Gruppe>
      <Gruppe titel="Wie TrainMe plant">
        <Zeile titel="Blöcke mit Entlastung" untertitel="4 Aufbauwochen, dann eine leichtere Woche. Die Reserve (RIR) sinkt im Block, wie in evidenzbasierten Programmen, etwa von Jeff Nippard." />
        <Zeile titel="Steigerung" untertitel="Doppelte Progression, RIR-Steuerung über das geschätzte Maximum (Epley-Formel), Gewichte immer auf deine echten Stufen gerundet." />
        <Zeile titel="Sport" untertitel="Golf: Rotation, Schnellkraft, Hüfte und Brustwirbelsäule. Fußball: keine schweren Beine vor dem Spiel, Vorbeugung für Beinbeuger und Adduktoren." />
      </Gruppe>
      <Gruppe titel="Quellen">
        <Zeile titel="Zourdos et al. 2016" untertitel="RIR-Skala, Journal of Strength and Conditioning Research" />
        <Zeile titel="Helms et al. 2016" untertitel="RIR in der Praxis, Strength and Conditioning Journal" />
        <Zeile titel="Robinson et al. 2024" untertitel="Nähe zum Versagen, Kraft und Muskelaufbau, Sports Medicine" />
        <Zeile titel="Schoenfeld et al. 2017" untertitel="Trainingsvolumen und Muskelaufbau, Journal of Sports Sciences" />
        <Zeile titel="Bell et al. 2023" untertitel="Entlastungswochen, Sports Medicine Open" />
        <Zeile titel="Ehlert 2020" untertitel="Krafttraining und Golfleistung, Journal of Sports Sciences" />
        <Zeile titel="van der Horst et al. 2015, Harøy et al. 2019" untertitel="Verletzungsvorbeugung im Fußball" />
        <Zeile titel="Titleist Performance Institute" untertitel="Golf-Screening, mytpi.com" />
      </Gruppe>
      <p className="hinweistext">TrainMe nimmt bei Beschwerden Rücksicht, ersetzt aber keine ärztliche oder physiotherapeutische Behandlung.</p>
    </Seite>
  )
}

function GesundheitSeite(props: { daten: Daten; aendern: (f: (d: Daten) => void) => void; zurueck: { text: string; onClick: () => void } }) {
  const g = props.daten.gesundheit
  const [meldung, setMeldung] = useState("")
  const [laeuft, setLaeuft] = useState(false)
  const aktualisieren = async () => {
    setLaeuft(true)
    try {
      const tage = await gesundheitLesen(14)
      props.aendern((d) => {
        d.gesundheit = { verbunden: true, tage: { ...(d.gesundheit?.tage || {}), ...tage } }
      })
      setMeldung(Object.keys(tage).length ? "Aktualisiert." : "Verbunden, aber noch keine Werte gefunden. Zeichnet eine Uhr oder App (z. B. Garmin Connect, Samsung Health, Google Fit) in Health Connect auf?")
    } catch (e) {
      setMeldung("Lesen hat nicht geklappt: " + String((e as Error).message || e))
    }
    setLaeuft(false)
  }
  const verbinden = async () => {
    const v = await gesundheitVerfuegbar()
    if (!v.ok) {
      setMeldung((v.grund || "Health Connect ist nicht verfügbar") + ". Ab Android 14 ist Health Connect eingebaut, sonst im Play Store „Health Connect“ installieren.")
      return
    }
    try {
      const ok = await gesundheitVerbinden()
      if (!ok) {
        setMeldung("Keine Berechtigung erteilt.")
        return
      }
      await aktualisieren()
    } catch (e) {
      setMeldung("Verbinden hat nicht geklappt: " + String((e as Error).message || e))
    }
  }
  const tage = Object.entries(g?.tage || {})
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .slice(0, 7)
  return (
    <Seite titel="Gesundheitsdaten" zurueck={props.zurueck}>
      <p className="hinweistext">TrainMe liest über Health Connect Schritte, Schlaf, Ruhepuls und HRV, zum Beispiel von deiner Garmin-Uhr, Samsung Health oder Google Fit. Die Werte bleiben auf dem Handy und dienen nur für Hinweise zur Tagesform.</p>
      <Gruppe>
        <Zeile titel="Mit Health Connect verbinden" untertitel={g?.verbunden ? "Verbunden" : "Nur lesen, nichts wird geschrieben"} rechts={<Schalter an={!!g?.verbunden} onChange={(an) => (an ? void verbinden() : props.aendern((d) => void (d.gesundheit = { verbunden: false, tage: {} })))} label="Health Connect" />} />
        {g?.verbunden ? <Zeile titel={laeuft ? "Lese …" : "Jetzt aktualisieren"} onClick={() => void aktualisieren()} pfeil={false} /> : null}
        <Zeile titel="Berechtigungen in Health Connect" onClick={() => void gesundheitEinstellungen().catch(() => setMeldung("Health Connect lässt sich hier nicht öffnen."))} />
      </Gruppe>
      {meldung ? <p className="hinweistext">{meldung}</p> : null}
      {tage.length ? (
        <Gruppe titel="Letzte Tage">
          {tage.map(([d, w]) => (
            <Zeile
              key={d}
              titel={d.split("-").reverse().join(".")}
              untertitel={[w.schritte !== undefined ? "👟 " + w.schritte.toLocaleString("de-DE") : "", w.schlaf_min !== undefined ? "😴 " + Math.floor(w.schlaf_min / 60) + " h " + (w.schlaf_min % 60) + " min" : "", w.ruhepuls ? "❤️ " + w.ruhepuls : "", w.hrv ? "HRV " + w.hrv : ""].filter(Boolean).join(" · ") || "keine Werte"}
            />
          ))}
        </Gruppe>
      ) : null}
    </Seite>
  )
}
