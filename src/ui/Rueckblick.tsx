// Wochenrückblick: Sätze je Muskelgruppe, Trend je Übung, Zeit, und Vorschläge zum direkten Übernehmen.

import { useMemo, useState } from "react"
import { uebung } from "../daten/uebungen/index"
import { alternativen, heute, plusTage } from "../logik/plan"
import { rehaAktiv } from "../logik/reha"
import { MUSKELGRUPPEN, SAETZE_BIS, SAETZE_MIN, ablehnen, anteil, montagVon, rueckblick, satzplusWeg, uebernehmen, wochenZahlen, type Rueckblick, type Vorschlag } from "../logik/rueckblick"
import type { Daten, Uebung } from "../logik/typen"
import { Kurve } from "./Fortschritt"
import { Blatt, Gruppe, Icon, Zeile } from "./ios"
import { Sym } from "./symbole"
import { datumText, zahl } from "./texte"

type Aendern = (f: (d: Daten) => void) => void

/** Woche, die der Rückblick zuerst zeigt: die letzte abgeschlossene mit Training, sonst die laufende */
function startWoche(daten: Daten, tag: string): string {
  const diese = montagVon(tag)
  const letzte = plusTage(diese, -7)
  return wochenZahlen(daten, letzte).einheiten > 0 ? letzte : diese
}

/** Karte auf „Heute“: öffnet den Rückblick. Erst sichtbar, wenn es eine Woche mit Training gibt. */
export function RueckblickKarte(props: { daten: Daten; onClick: () => void }) {
  const tag = heute()
  const r = useMemo(() => rueckblick(props.daten, startWoche(props.daten, tag), tag), [props.daten, tag])
  // In der Reha steuern Schmerz und Phase das Training, nicht Volumen und Bestwerte
  if (!r.woche.einheiten || (props.daten.profil && rehaAktiv(props.daten.profil))) return null
  const n = r.vorschlaege.length
  return (
    <button type="button" className="mobilkarte" onClick={props.onClick}>
      <Sym name="ziel" groesse={22} />
      <span>
        <b>Wochenrückblick{n ? " · " + n + (n === 1 ? " Vorschlag" : " Vorschläge") : ""}</b>
        <small>
          {r.laufend ? "Diese Woche bisher" : "Letzte Woche"}: {r.woche.einheiten} {r.woche.einheiten === 1 ? "Einheit" : "Einheiten"}, {r.woche.saetze} Sätze
        </small>
      </span>
      <Icon name="weiter" groesse={16} />
    </button>
  )
}

const STATUS: Record<string, { text: string; farbe: string }> = {
  steigt: { text: "steigt", farbe: "var(--gruen)" },
  haelt: { text: "hält", farbe: "var(--leise)" },
  faellt: { text: "fällt", farbe: "var(--rot)" },
  plateau: { text: "seit 3 Einheiten kein neuer Bestwert", farbe: "var(--gold)" },
  plan: { text: "Gewicht nach Plan", farbe: "var(--leise)" },
}

/** Andere Übungen für dieselbe Bewegung, zuerst die mit demselben Zielmuskel und denselben Geräten */
function varianten(daten: Daten, u: Uebung): Uebung[] {
  const profil = daten.profil!
  const ortNr = profil.woche.find((t) => t.art === "training")?.ort ?? 0
  const ort = profil.orte[ortNr] || profil.orte[0]
  if (!ort) return []
  const geraet = (x: Uebung) => (x.geraete[0] || []).join("+")
  return alternativen(profil, ort, u.muster, u.id)
    .filter((a) => a.belastung === u.belastung && a.muskeln[0] === u.muskeln[0])
    .sort((a, b) => Number(geraet(b) === geraet(u)) - Number(geraet(a) === geraet(u)) || a.stufe - b.stufe || a.name.localeCompare(b.name, "de"))
    .slice(0, 5)
}

function VorschlagKarte(props: { v: Vorschlag; daten: Daten; aendern: Aendern; fertig: (text: string) => void }) {
  const { v, daten } = props
  const [wahl, setWahl] = useState(false)
  const tag = heute()
  const ja = (text: string, neu?: string) => {
    props.aendern((d) => uebernehmen(d, v, tag, neu))
    props.fertig(text)
  }
  const nein = () => props.aendern((d) => ablehnen(d, v, tag))
  let titel = ""
  let text = ""
  let knopf = "Übernehmen"
  let los = () => ja("Übernommen.")
  if (v.art === "saetze") {
    const summe = v.teile.reduce((n, t) => n + t.plus, 0)
    const saetze = (n: number) => (n === 1 ? "ein Satz" : n + " Sätze")
    const mal = (n: number) => (n === 1 ? "einmal" : n + "\u2011mal")
    titel = v.gruppenName + ": " + (v.teile.length === 1 ? saetze(summe) + " mehr bei " + v.teile[0].name : "mehr Sätze bei " + v.teile.length + " Übungen")
    text =
      "Im Schnitt " + zahl(v.schnitt) + " Sätze je Woche, für den Muskelaufbau sind mindestens " + SAETZE_MIN + " günstig. " +
      (v.teile.length === 1
        ? v.teile[0].name + " kommt in deinen nächsten zehn Plantagen " + mal(v.teile[0].vorkommen) + " vor. "
        : "Vorschlag: " + v.teile.map((t) => saetze(t.plus) + " mehr bei " + t.name + " (kommt " + mal(t.vorkommen) + " in den nächsten zehn Plantagen)").join(", ") + ". ") +
      "Das bringt etwa " + zahl(v.mehr) + " Sätze je Woche, also rund " + zahl(v.danach) + " statt " + zahl(v.schnitt) + "." +
      (v.tage > 1 ? " Die Sätze verteilen sich auf " + v.tage + " Trainingstage, damit kein Tag überladen wird: Bei gleichem Wochenumfang wächst der Muskel gleich gut, die einzelnen Sätze bleiben so aber stärker (Schoenfeld et al. 2019)." : "") +
      (v.rest === "plan" ? " Mehr geht mit den Übungen deines Plans nicht: Für die volle Zahl bräuchte der Plan eine weitere Übung für diese Muskelgruppe oder sie müsste öfter vorkommen." : v.rest === "schritt" ? " Der Rest folgt in einem zweiten Schritt in drei Wochen, damit der Umfang nicht auf einmal springt." : "")
    knopf = summe === 1 ? "Einen Satz mehr" : summe + " Sätze mehr"
    los = () => ja("Ab dem nächsten Mal: " + v.teile.map((t) => saetze(t.plus) + " mehr bei " + t.name).join(", ") + ".")
  } else if (v.art === "maximum") {
    titel = "Neues Maximum bei " + v.name
    text = "Aus deinen Sätzen geschätzt: " + zahl(v.neu) + " kg statt der eingetragenen " + zahl(v.alt) + " kg. Prozentvorgaben rechnen dann mit dem neuen Wert."
    knopf = zahl(v.neu) + " kg übernehmen"
    los = () => ja("Maximum " + v.name + ": " + zahl(v.neu) + " kg.")
  } else if (v.art === "zeit") {
    titel = "Mehr Zeit je Trainingstag einplanen"
    text = "Deine letzten Einheiten dauerten im Mittel " + v.ueber_min + " min länger als die geplanten " + v.budget + " min. Mit " + v.minuten_neu + " min fragt die App seltener, ob sie kürzen soll."
    knopf = "Auf " + v.minuten_neu + " min stellen"
    los = () => ja("Trainingstage stehen jetzt auf " + v.minuten_neu + " min.")
  } else {
    titel = v.name + ": Variante wechseln"
    text = "Seit drei Einheiten kein neuer Bestwert. Erst Schlaf, Essen und Technik prüfen; hilft das nicht, bringt eine andere Variante derselben Bewegung oft neuen Fortschritt."
    knopf = "Variante wählen"
    los = () => setWahl(!wahl)
  }
  const u = v.art === "tauschen" ? uebung(v.uebung) : undefined
  const liste = wahl && u ? varianten(daten, u) : []
  return (
    <div className="vorschlag">
      <b>{titel}</b>
      <small>{text}</small>
      <div className="reaktionsknoepfe">
        <button type="button" className="knopf klein" onClick={los}>
          {knopf}
        </button>
        <button type="button" className="knopf klein leise" onClick={nein}>
          Nicht jetzt
        </button>
      </div>
      {wahl ? (
        liste.length ? (
          <div className="variantenliste">
            {liste.map((a) => (
              <button key={a.id} type="button" className="variante" onClick={() => ja("Künftig " + a.name + " statt " + u!.name + ".", a.id)}>
                <span>
                  <b>{a.name}</b>
                  <small>{a.info.kurz}</small>
                </span>
                <span className="knopf klein">Nehmen</span>
              </button>
            ))}
          </div>
        ) : (
          <small>Mit deiner Ausrüstung gibt es keine passende Variante.</small>
        )
      ) : null}
    </div>
  )
}

function Volumen(props: { r: Rueckblick; ziel: boolean }) {
  const { r } = props
  const max = Math.max(SAETZE_BIS, ...MUSKELGRUPPEN.map((g) => Math.max(r.schnitt[g.id], r.woche.gruppen[g.id])))
  return (
    <div className="volumen">
      {MUSKELGRUPPEN.map((g) => {
        const s = r.wochenImSchnitt ? r.schnitt[g.id] : r.woche.gruppen[g.id]
        const wenig = props.ziel && r.wochenImSchnitt >= 2 && s < SAETZE_MIN
        return (
          <div key={g.id} className="volumenzeile">
            <span className="volumenname">{g.name}</span>
            <span className="volumenbalken" role="img" aria-label={g.name + ": " + zahl(s) + " Sätze je Woche"}>
              <span className="fuellung" style={{ width: Math.min(100, (s / max) * 100) + "%", background: wenig ? "var(--gold)" : props.ziel ? "var(--gruen)" : "var(--akzent)" }} />
              {props.ziel ? <span className="zielstrich" style={{ left: (SAETZE_MIN / max) * 100 + "%" }} /> : null}
            </span>
            <span className="volumenzahl">
              <b>{zahl(s)}</b>
              <small>{zahl(r.woche.gruppen[g.id])}</small>
            </span>
          </div>
        )
      })}
      <div className="volumenzeile legende">
        <span className="volumenname" />
        <span className="volumenlegende">{props.ziel ? "Strich: " + SAETZE_MIN + " Sätze je Woche" : ""}</span>
        <span className="volumenzahl">
          <b>Ø</b>
          <small>Woche</small>
        </span>
      </div>
    </div>
  )
}

export function RueckblickBlatt(props: { offen: boolean; onClose: () => void; daten: Daten; aendern?: Aendern }) {
  const { daten } = props
  const tag = heute()
  const [montag, setMontag] = useState(() => startWoche(daten, tag))
  const [meldung, setMeldung] = useState<string | null>(null)
  const r = useMemo(() => rueckblick(daten, montag, tag), [daten, montag, tag])
  const aendern: Aendern = props.aendern || (() => undefined)
  const ziel = daten.profil?.ziel === "muskelaufbau"
  const plus = Object.entries(daten.satzplus || {}).filter(([id, x]) => x.n > 0 && uebung(id))
  const diese = montagVon(tag)
  const gruppeVon = (id: string) => MUSKELGRUPPEN.find((g) => anteil(uebung(id)!, g) === 1)?.name
  return (
    <Blatt offen={props.offen} onClose={props.onClose} titel="Wochenrückblick" hoch>
      <div className="wochenkopf">
        <button type="button" className="rundknopf" aria-label="Vorige Woche" onClick={() => setMontag(plusTage(montag, -7))}>
          <Icon name="zurueck" groesse={18} dick={2.4} />
        </button>
        <span>
          {datumText(montag)} bis {datumText(plusTage(montag, 6))}
          {r.laufend ? " · läuft noch" : ""}
        </span>
        <button type="button" className="rundknopf" aria-label="Nächste Woche" disabled={montag >= diese} onClick={() => setMontag(plusTage(montag, 7))}>
          <Icon name="weiter" groesse={18} dick={2.4} />
        </button>
      </div>
      <div className="statusreihe">
        <div className="statuskachel">
          <small>Einheiten</small>
          <b>{r.woche.einheiten}</b>
        </div>
        <div className="statuskachel">
          <small>Sätze</small>
          <b>{r.woche.saetze}</b>
        </div>
        <div className="statuskachel">
          <small>Zeit zum Plan</small>
          <b>{r.zeit ? (r.zeit.ueber_min > 0 ? "+" : "") + r.zeit.ueber_min + " min" : "–"}</b>
        </div>
      </div>
      {meldung ? <p className="hinweistext">{meldung}</p> : null}

      {r.vorschlaege.length && props.aendern ? (
        <>
          <h3 className="abschnitt">Vorschläge</h3>
          {r.vorschlaege.map((v) => (
            <VorschlagKarte key={v.schluessel} v={v} daten={daten} aendern={aendern} fertig={setMeldung} />
          ))}
        </>
      ) : r.woche.einheiten ? (
        <p className="hinweistext klein">Keine offenen Vorschläge: weiter so.</p>
      ) : (
        <p className="hinweistext klein">In dieser Woche ist kein Krafttraining eingetragen.</p>
      )}

      {plus.length && props.aendern ? (
        <Gruppe titel="Übernommen" fuss="Gilt in deinem eigenen Plan, bis du es zurücknimmst.">
          {plus.map(([id, x]) => (
            <Zeile
              key={id}
              titel={uebung(id)!.name}
              untertitel={"+" + x.n + (x.n === 1 ? " Satz" : " Sätze") + (gruppeVon(id) ? " für " + gruppeVon(id) : "") + " · seit " + datumText(x.seit)}
              rechts={
                <button type="button" className="knopf klein leise" onClick={() => aendern((d) => satzplusWeg(d, id))}>
                  Zurücknehmen
                </button>
              }
            />
          ))}
        </Gruppe>
      ) : null}

      <h3 className="abschnitt">Sätze je Muskelgruppe</h3>
      <Volumen r={r} ziel={ziel} />
      <p className="hinweistext klein">
        Ø: Durchschnitt der letzten {r.wochenImSchnitt || 0} abgeschlossenen Wochen mit Training. Ein Satz zählt voll für den Zielmuskel der Übung und halb für Muskeln, die deutlich mitarbeiten.
        {ziel ? " Für den Muskelaufbau bringen mindestens " + SAETZE_MIN + " Sätze je Muskelgruppe und Woche mehr als weniger (Schoenfeld u. a. 2017), günstig sind für Trainierte etwa 12 bis 20 (Baz-Valle u. a. 2022)." : ""}
      </p>

      {r.trends.length ? (
        <Gruppe titel="Deine Übungen dieser Woche" fuss="Geschätztes Maximum (1 Wiederholung) der letzten Einheiten. Bei Übungen, deren Gewicht dein Plan in Prozent vorgibt, steigt es mit dem Plan.">
          {r.trends.map((t) => {
            const letzt = t.werte[t.werte.length - 1].wert
            // Vergleich wie beim Urteil: gegen den Mittelwert der beiden Einheiten davor
            const davor = Math.round(((t.werte[t.werte.length - 2].wert + t.werte[t.werte.length - 3].wert) / 2) * 10) / 10
            return (
              <Zeile
                key={t.uebung}
                titel={t.name}
                untertitel={
                  <>
                    {zahl(letzt)} kg · <span style={{ color: STATUS[t.status].farbe }}>{STATUS[t.status].text}</span>
                    {t.status !== "plateau" && t.status !== "plan" ? " (davor " + zahl(davor) + " kg)" : ""}
                  </>
                }
                rechts={
                  <span className="minikurve">
                    <Kurve punkte={t.werte} einheit="" hoehe={60} mini />
                  </span>
                }
              />
            )
          })}
        </Gruppe>
      ) : null}
    </Blatt>
  )
}
