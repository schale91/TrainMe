// Profil und Einstellungen im iOS-Stil: gruppierte Liste, jeder Punkt öffnet eine eigene Seite.

import { useEffect, useRef, useState } from "react"
import { UEBUNGEN } from "../daten/uebungen/index"
import { SPORTARTEN, positionVon } from "../daten/vorlagen"
import { bildInfo } from "../daten/reha"
import { heute, montagVon } from "../logik/plan"
import { exportieren, importieren } from "../logik/speicher"
import type { Daten, Profil as ProfilT } from "../logik/typen"
import { Blatt, Gruppe, Schalter, Seite, Zeile } from "./ios"
import { benachrichtigungErlauben, overlayErlauben, timerStatus } from "./pausenTimer"
import { AusnahmenEditor, Grunddaten, KoerperEditor, OrteEditor, SportWahl, WocheEditor } from "./Profilteile"
import { dateiTeilen } from "./teilen"
import Feedback from "./Feedback"
import { SymKachel } from "./symbole"
import { gesundheitEinstellungen, gesundheitLesen, gesundheitVerbinden, gesundheitVerfuegbar } from "./gesundheit"
import { ERFAHRUNG, GELENKE, ZIELE } from "./texte"
import JahresplanSeite from "./Jahresplan"
import { phaseInfo, blockNeuStarten, phaseAm } from "../logik/jahresplan"
import type { UpdateInfo } from "../logik/update"
import { RELEASES_SEITE } from "../logik/update"
import { updateSuchen } from "./update"
import { LebensweltSeite, PlanSeite } from "./PlanSeiten"
import EntwurfSeite from "./Entwurf"
import { aenderungsText, positionen, sporte, ziele } from "../logik/auswahl"
import { vorgemerktAnwenden } from "../logik/umstellen"
import { datumText } from "./texte"
import { kopplung, modus } from "./lebenswelt"
import { entwickler, entwicklerSetzen } from "./entwickler"

export type Unterseite = null | "ziel" | "sport" | "orte" | "woche" | "koerper" | "ausnahmen" | "timer" | "sicherung" | "ueber" | "gesundheit" | "feedback" | "jahresplan" | "update" | "plan" | "lebenswelt"

export default function Profil(props: { daten: Daten; profilAendern: (p: ProfilT) => void; ersetzen: (d: Daten) => void; zuruecksetzen: () => void; aendern: (f: (d: Daten) => void) => void; einstufen: () => void; start?: Unterseite; update: UpdateInfo | null; updateGefunden: (u: UpdateInfo | null) => void }) {
  const profil = props.daten.profil!
  const [seite, setSeite] = useState<Unterseite>(props.start || null)
  const [vorOffen, setVorOffen] = useState(false)
  const teil = { profil, aendern: props.profilAendern }
  const zurueck = { text: "Profil", onClick: () => setSeite(null) }

  if (seite === "ziel")
    return (
      <EntwurfSeite titel="Name und Erfahrung" profil={profil} speichern={props.profilAendern} schliessen={() => setSeite(null)}>
        {(p, aendern) => <Grunddaten profil={p} aendern={aendern} />}
      </EntwurfSeite>
    )
  if (seite === "sport")
    return (
      <EntwurfSeite titel="Training und Sport" profil={profil} speichern={props.profilAendern} schliessen={() => setSeite(null)}>
        {(p, aendern) => <SportWahl profil={p} aendern={aendern} />}
      </EntwurfSeite>
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
  if (seite === "ueber") return <Ueber zurueck={zurueck} profil={profil} />
  if (seite === "feedback") return <Feedback zurueck={zurueck} />
  if (seite === "jahresplan") return <JahresplanSeite profil={profil} heute={heute()} aendern={props.profilAendern} zurueck={zurueck} />
  if (seite === "update") return <UpdateSeite update={props.update} gefunden={props.updateGefunden} zurueck={zurueck} />
  if (seite === "gesundheit") return <GesundheitSeite daten={props.daten} aendern={props.aendern} zurueck={zurueck} />
  if (seite === "plan") return <PlanSeite daten={props.daten} aendern={props.aendern} zurueck={zurueck} />
  if (seite === "lebenswelt") return <LebensweltSeite zurueck={zurueck} />

  const zielText = ziele(profil).map((z) => ZIELE.find((x) => x.id === z)?.name).join(", ")
  const sportText = sporte(profil).map((s) => (s === "reha" && profil.reha?.bilder.length ? profil.reha.bilder.map((b) => bildInfo(b.id).name).join(", ") : SPORTARTEN.find((x) => x.id === s)?.name) + (s === "football" && positionen(profil).length ? " (" + positionen(profil).map((id) => positionVon(id)?.kurz).join(", ") + ")" : "")).join(", ")
  const vorgemerkt = profil.vorgemerkt
  const tage = profil.woche.filter((t) => t.art === "training").length
  const phase = phaseAm(profil, heute())
  const beschwerden = profil.beschwerden.map((b) => GELENKE.find((g) => g.id === b.gelenk)?.name).join(", ")

  return (
    <Seite titel="Profil" untertitel={profil.name || undefined}>
      <Gruppe titel="Training">
        <Zeile symbol={<SymKachel name={sporte(profil).indexOf("golf") >= 0 ? "golf" : sporte(profil).indexOf("reha") >= 0 ? "herz" : "hantel"} farbe="#1f9e73" />} titel="Training und Sport" untertitel={sportText + " · " + zielText} onClick={() => setSeite("sport")} />
        <Zeile symbol={<SymKachel name="medaille" farbe="#e7792f" />} titel="Name und Erfahrung" wert={ERFAHRUNG.find((e) => e.id === profil.erfahrung)?.name} onClick={() => setSeite("ziel")} />
        <Zeile symbol={<SymKachel name="kalender" farbe="#d8506a" />} titel="Woche" wert={tage + " Trainingstage"} onClick={() => setSeite("woche")} />
        <Zeile symbol={<SymKachel name="haus" farbe="#4f68f0" />} titel="Orte und Geräte" wert={profil.orte.map((o) => o.name).join(", ")} onClick={() => setSeite("orte")} />
      </Gruppe>
      <Gruppe titel="Körper">
        <Zeile symbol={<SymKachel name="pflaster" farbe="#c9536a" />} titel="Beschwerden" wert={beschwerden || "keine"} onClick={() => setSeite("koerper")} />
        <Zeile symbol={<SymKachel name="verbot" farbe="#6b6593" />} titel="Ausnahmen" wert={profil.ausgeschlossen.length ? profil.ausgeschlossen.length + " Übungen" : "keine"} onClick={() => setSeite("ausnahmen")} />
      </Gruppe>
      <Gruppe titel="Plan" fuss={profil.planart === "eigen" ? "Mit eigenem Plan gibt der Plan Tage und Übungen vor. Kraftwerte zählen weiter für Prozentangaben." : "Ein Block hat 4 Aufbauwochen und eine Entlastungswoche. Nach Urlaub oder Krankheit neu starten: Die laufende Phase beginnt dann von vorn, der Jahresplan rückt nach hinten."}>
        <Zeile symbol={<SymKachel name="bausteine" farbe="#4f68f0" />} titel="Woher der Plan kommt" wert={profil.planart === "eigen" ? props.daten.eigenerPlan?.name || "Eigener Plan" : "TrainMe plant"} onClick={() => setSeite("plan")} />
        <Zeile symbol={<SymKachel name="kalender" farbe="#2aa58a" />} titel="Jahresplan" wert={phase ? phaseInfo(phase, profil.sport).name : "festlegen"} onClick={() => setSeite("jahresplan")} />
        {vorgemerkt ? (
          <Zeile
            symbol={<SymKachel name="wiederholen" farbe="#c98a1e" />}
            titel={"Vorgemerkt ab " + datumText(vorgemerkt.ab)}
            untertitel={aenderungsText(profil, { ...profil, ...vorgemerkt.aenderung })}
            onClick={() => setVorOffen(true)}
          />
        ) : null}
        <Zeile symbol={<SymKachel name="ziel" farbe="#c98a1e" />} titel="Kraftwerte und Mobilität neu einstufen" untertitel={props.daten.einstufung?.kraft ? "zuletzt " + props.daten.einstufung.kraft.split("-").reverse().join(".") : "noch nicht erledigt"} onClick={props.einstufen} />
        <Zeile symbol={<SymKachel name="wiederholen" farbe="#2b9cc2" />} titel="Neuen Block ab dieser Woche" onClick={() => props.profilAendern(blockNeuStarten(profil, montagVon(heute())))} pfeil={false} />
      </Gruppe>
      <Gruppe titel="App">
        <Zeile symbol={<SymKachel name="haus" farbe="#1f9e73" />} titel="Lebenswelt" wert={modus() === "eingebettet" ? "eingebettet" : kopplung() ? "gekoppelt" : "nicht gekoppelt"} onClick={() => setSeite("lebenswelt")} />
        {modus() === "eingebettet" ? null : <Zeile symbol={<SymKachel name="import" farbe="#8b7bff" />} titel="App-Update" wert={props.update ? props.update.version + " verfügbar" : "Version " + __VERSION__} onClick={() => setSeite("update")} />}
        <Zeile symbol={<SymKachel name="stoppuhr" farbe="#6a58f5" />} titel="Pausentimer" wert="Hintergrund, über Apps" onClick={() => setSeite("timer")} />
        <Zeile symbol={<SymKachel name="herz" farbe="#e0455f" />} titel="Gesundheitsdaten" wert={props.daten.gesundheit?.verbunden ? "verbunden" : "aus"} onClick={() => setSeite("gesundheit")} />
        <Zeile symbol={<SymKachel name="sprechblase" farbe="#2aa58a" />} titel="Feedback, Fehler, Ideen" onClick={() => setSeite("feedback")} />
        <Zeile symbol={<SymKachel name="archiv" farbe="#7d7a99" />} titel="Sicherung" onClick={() => setSeite("sicherung")} />
        <Zeile symbol={<SymKachel name="info" farbe="#5d5891" />} titel="Über TrainMe und Quellen" onClick={() => setSeite("ueber")} />
      </Gruppe>
      <Blatt offen={vorOffen} onClose={() => setVorOffen(false)} titel="Vorgemerkte Änderung">
        {vorgemerkt ? (
          <>
            <p className="infokurz">
              Ab {datumText(vorgemerkt.ab)} gilt: {aenderungsText(profil, { ...profil, ...vorgemerkt.aenderung })}. Bis dahin bleibt der Plan, wie er ist.
            </p>
            <button
              type="button"
              className="knopf voll"
              onClick={() => {
                props.profilAendern(vorgemerktAnwenden(profil, heute(), true))
                setVorOffen(false)
              }}
            >
              Schon ab jetzt übernehmen
            </button>
            <button
              type="button"
              className="knopf voll leise"
              onClick={() => {
                props.profilAendern({ ...profil, vorgemerkt: undefined })
                setVorOffen(false)
              }}
            >
              Verwerfen
            </button>
          </>
        ) : null}
      </Blatt>
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
          symbol={<SymKachel name="export" farbe="#4f68f0" />}
          titel="Sicherung erstellen"
          onClick={() =>
            dateiTeilen("TrainMe-Sicherung-" + heute() + ".json", exportieren(props.daten))
              .then((ok) => ok && setMeldung("Sicherung erstellt."))
              .catch((e) => setMeldung("Hat nicht geklappt: " + String(e?.message || e)))
          }
        />
        <Zeile symbol={<SymKachel name="import" farbe="#2aa58a" />} titel="Sicherung laden" onClick={() => datei.current?.click()} />
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
      <Gruppe titel="Zurücksetzen" fuss="Löscht Profil, Protokoll und Tests auf diesem Handy.">
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

function Ueber(props: { zurueck: { text: string; onClick: () => void }; profil: ProfilT }) {
  const sp = sporte(props.profil)
  const golf = sp.indexOf("golf") >= 0
  // Je gewählter Sportart ein Satz, was der Plan dafür tut
  const SPORT_SATZ: Record<string, string> = {
    golf: "Golf: Rotation, Schnellkraft, Hüfte und Brustwirbelsäule.",
    fussball: "Fußball: keine schweren Beine vor dem Spiel, Vorbeugung für Beinbeuger und Adduktoren.",
  }
  const sportSaetze = sp.map((s) => SPORT_SATZ[s]).filter(Boolean)
  return (
    <Seite titel="Über TrainMe" zurueck={props.zurueck}>
      <Gruppe fuss={"Version " + __VERSION__ + " · offline, ohne Konto, ohne Werbung"}>
        <Zeile titel="Übungen in der Datenbank" wert={String(UEBUNGEN.length)} />
        {golf ? <Zeile titel="Golf-Übungen" wert={String(UEBUNGEN.filter((u) => u.golf).length)} /> : null}
      </Gruppe>
      <Gruppe titel="Wie TrainMe plant">
        <Zeile titel="Jahresplan" untertitel="Jeder Block hat eine Phase: Grundlage, Kraft, Schnellkraft vor der Saison, Erhalt in der Saison, danach Übergang." />
        <Zeile titel="Blöcke mit Entlastung" untertitel="4 Aufbauwochen, dann eine leichtere Woche. Die Reserve (RIR) sinkt im Block, wie in evidenzbasierten Programmen, etwa von Jeff Nippard." />
        <Zeile titel="Steigerung" untertitel="Doppelte Progression, RIR-Steuerung über das geschätzte Maximum (Epley-Formel), Gewichte immer auf deine echten Stufen gerundet." />
        {sportSaetze.length ? <Zeile titel="Sport" untertitel={sportSaetze.join(" ")} /> : null}
      </Gruppe>
      <Gruppe titel="Quellen">
        <Zeile titel="Zourdos et al. 2016" untertitel="RIR-Skala, Journal of Strength and Conditioning Research" />
        <Zeile titel="Helms et al. 2016" untertitel="RIR in der Praxis, Strength and Conditioning Journal" />
        <Zeile titel="Robinson et al. 2024" untertitel="Nähe zum Versagen, Kraft und Muskelaufbau, Sports Medicine" />
        <Zeile titel="Schoenfeld et al. 2017" untertitel="Trainingsvolumen und Muskelaufbau, Journal of Sports Sciences" />
        <Zeile titel="Bell et al. 2023" untertitel="Entlastungswochen, Sports Medicine Open" />
        <Zeile titel="ACSM Position Stand 2009" untertitel="Pausen: 2 bis 3 min bei schweren Grundübungen, 1 bis 2 min bei Ergänzungen, Medicine and Science in Sports and Exercise" />
        <Zeile titel="Grgic et al. 2018" untertitel="Pausenlänge und Kraftzuwachs, Sports Medicine" />
        <Zeile titel="Issurin 2010" untertitel="Blockperiodisierung, Sports Medicine" />
        <Zeile titel="Rønnestad et al. 2011" untertitel="Krafterhalt in der Saison, Journal of Strength and Conditioning Research" />
        {golf ? <Zeile titel="Ehlert 2020" untertitel="Krafttraining und Golfleistung, Journal of Sports Sciences" /> : null}
        {sp.indexOf("fussball") >= 0 ? <Zeile titel="van der Horst et al. 2015, Harøy et al. 2019" untertitel="Verletzungsvorbeugung im Fußball" /> : null}
        <Zeile titel="Titleist Performance Institute" untertitel={golf ? "Golf-Screening, mytpi.com" : "Orientierungswerte für einige Beweglichkeitstests, mytpi.com"} />
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
              untertitel={[w.schritte !== undefined ? w.schritte.toLocaleString("de-DE") + " Schritte" : "", w.schlaf_min !== undefined ? "Schlaf " + Math.floor(w.schlaf_min / 60) + " h " + (w.schlaf_min % 60) + " min" : "", w.ruhepuls ? "Ruhepuls " + w.ruhepuls : "", w.hrv ? "HRV " + w.hrv : ""].filter(Boolean).join(" · ") || "keine Werte"}
            />
          ))}
        </Gruppe>
      ) : null}
    </Seite>
  )
}

function UpdateSeite(props: { update: UpdateInfo | null; gefunden: (u: UpdateInfo | null) => void; zurueck: { text: string; onClick: () => void } }) {
  // Siebenmal auf „Installiert“ tippen schaltet den Entwicklermodus frei (wie bei Android)
  const [dev, setDev] = useState(entwickler)
  const tipps = useRef<number[]>([])
  const tippen = () => {
    const jetzt = Date.now()
    tipps.current = [...tipps.current.filter((t) => jetzt - t < 3000), jetzt]
    if (tipps.current.length >= 7 && !dev) {
      tipps.current = []
      entwicklerSetzen(true)
      setDev(true)
    }
  }
  const [laeuft, setLaeuft] = useState(false)
  const [meldung, setMeldung] = useState("")
  const u = props.update
  const suchen = () => {
    setLaeuft(true)
    setMeldung("")
    updateSuchen(true)
      .then((neu) => {
        props.gefunden(neu)
        if (!neu) setMeldung(__BUILD__ ? "Du hast die neueste Version." : "Diese Version wurde nicht über GitHub gebaut und sucht keine Updates.")
      })
      .catch(() => setMeldung("Keine Verbindung zu GitHub. Später noch einmal versuchen."))
      .finally(() => setLaeuft(false))
  }
  return (
    <Seite titel="App-Update" zurueck={props.zurueck}>
      <Gruppe>
        <Zeile titel="Installiert" wert={__VERSION__ + (__KANAL__ === "vorschau" ? " (Vorschau)" : "")} onClick={tippen} pfeil={false} />
        <Zeile titel="Neueste" wert={u ? u.version + (u.vorschau ? " (Vorschau)" : "") : "keine neuere"} />
        <Zeile titel={laeuft ? "Suche …" : "Nach Updates suchen"} onClick={laeuft ? undefined : suchen} pfeil={false} />
      </Gruppe>
      {meldung ? <p className="hinweistext">{meldung}</p> : null}
      {dev ? (
        <Gruppe titel="Entwicklermodus" fuss="Nur auf diesem Gerät. Zeigt Prüfwerkzeuge, z. B. den Schalter „Gelenke“ an der Dehnfigur.">
          <Zeile titel="Entwicklermodus" rechts={<Schalter an={dev} onChange={(an) => { entwicklerSetzen(an); setDev(an) }} label="Entwicklermodus" />} />
        </Gruppe>
      ) : null}
      {u ? (
        <>
          <a className="knopf voll gross" href={u.apk} target="_blank" rel="noreferrer">
            Version {u.version} herunterladen
          </a>
          <Gruppe titel="So geht es" fuss="Deine Daten bleiben erhalten: Das Update wird einfach über die alte Version installiert.">
            <Zeile titel="1. Herunterladen" untertitel="Der Link öffnet den Browser (am besten Chrome), dort lädt die APK." />
            <Zeile titel="2. Öffnen" untertitel="Benachrichtigung „Download abgeschlossen“ antippen oder im Ordner Downloads öffnen." />
            <Zeile titel="3. Installieren" untertitel="Beim ersten Mal fragt Android, ob der Browser Apps installieren darf: erlauben." />
          </Gruppe>
          {u.notizen ? (
            <Gruppe titel={"Neu in " + u.version}>
              <p className="updatenotizen">{u.notizen}</p>
            </Gruppe>
          ) : null}
        </>
      ) : null}
      <p className="hinweistext klein">
        Alle Versionen: <a href={RELEASES_SEITE} target="_blank" rel="noreferrer">GitHub Releases</a>. TrainMe sucht beim Start höchstens alle 6 Stunden nach Updates, nur mit Internet.
      </p>
    </Seite>
  )
}
