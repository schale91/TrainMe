// Dein Weg: Jahresplan als Zeitleiste. Geschafftes abgehakt, der aktuelle Block hervorgehoben, Kommendes mit dem,
// was es aufbaut. So ist jederzeit sichtbar, wo man im Prozess steht.

import { hatSport } from "../logik/auswahl"
import { phaseInfo } from "../logik/jahresplan"
import { heute, wochenplan, montagVon } from "../logik/plan"
import { aktuellerBlock, jahresAnteil, planWeg, wegStand, type Schritt } from "../logik/weg"
import type { Daten, Einheit } from "../logik/typen"
import { istErledigt } from "./Heute"
import { Fortschrittsbalken, Icon, Seite } from "./ios"
import { PhasenStreifen } from "./Jahresplan"
import { Sym } from "./symbole"
import { datumText } from "./texte"

type Block = Extract<Schritt, { art: "block" }>

const WOCHEN = ["1", "2", "3", "4", "E"]

/** Stand im laufenden Block: Wochenpunkte, Einheiten, Tage bis zur nächsten Phase. */
export function BlockFortschritt(props: { stand: Block; klein?: boolean; sport?: string }) {
  const b = props.stand
  const info = phaseInfo(b.phase, props.sport)
  return (
    <div className={"blockstand" + (props.klein ? " klein" : "")} style={{ ["--phase" as string]: info.farbe }}>
      <div className="blockstandkopf">
        <span className="marke" style={{ background: info.farbe }}>
          Block {b.nr} · {info.name}
        </span>
        <small>{b.tageRest > 1 ? "noch " + b.tageRest + " Tage" : "letzter Tag"}</small>
      </div>
      <div className="wochenpunkte" aria-label={"Woche " + (b.woche + 1) + " von 5"}>
        {WOCHEN.map((w, i) => (
          <span key={w} className={i < b.woche ? "fertig" : i === b.woche ? "jetzt" : ""}>
            {i < b.woche ? <Icon name="haken" groesse={13} dick={3} /> : w}
          </span>
        ))}
      </div>
      <div className="blockzahlen">
        <span>
          <b>{b.einheiten}</b> von {b.geplant} Einheiten
        </span>
        {b.rekorde ? (
          <span className="mitsym">
            <Sym name="pokal" groesse={15} farbe="var(--gold)" /> {b.rekorde} Bestwerte
          </span>
        ) : null}
      </div>
      <Fortschrittsbalken wert={b.einheiten} max={Math.max(1, b.geplant)} farbe={info.farbe} hoehe={6} />
      {!props.klein ? <p className="leise">{b.naechste ? "Danach: " + phaseInfo(b.naechste, props.sport).name + ". " + phaseInfo(b.naechste, props.sport).aufbau : info.aufbau}</p> : null}
    </div>
  )
}

function knoten(status: string, erledigt = true) {
  if (status === "vorbei" && erledigt) return <Icon name="haken" groesse={14} dick={3} />
  if (status === "jetzt") return <i className="puls" />
  return null
}

export default function Weg(props: { daten: Daten; einstufen: () => void; zumJahresplan: () => void; oeffnen: (e: Einheit) => void }) {
  const { daten } = props
  const tag = heute()
  const schritte = wegStand(daten, tag)
  const jetzt = aktuellerBlock(schritte)
  const plan = daten.profil?.jahresplan
  const anteil = jahresAnteil(daten, tag)
  const naechste = daten.profil ? wochenplan(daten.profil, daten, montagVon(tag)).find((e) => e.datum >= tag && !istErledigt(daten, e)) : undefined

  const eigen = daten.profil?.planart === "eigen" && daten.eigenerPlan
  if (eigen) {
    const abschnitte = planWeg(daten)
    const gesamt = abschnitte.reduce((n, x) => n + x.tage, 0)
    const fertig = abschnitte.reduce((n, x) => n + x.erledigt, 0)
    return (
      <Seite titel="Dein Weg" untertitel={daten.eigenerPlan!.name + " · " + fertig + " von " + gesamt + " Tagen"}>
        {naechste ? (
          <button type="button" className="knopf voll" onClick={() => props.oeffnen(naechste)}>
            Nächster Schritt: {naechste.titel} {naechste.datum === tag ? "heute" : datumText(naechste.datum)}
          </button>
        ) : null}
        <ol className="zeitleiste">
          {abschnitte.map((x, i) => (
            <li key={i} className={x.status}>
              <span className="knoten">{knoten(x.status)}</span>
              <div>
                <b>{x.name}</b>
                <small>
                  {x.erledigt} von {x.tage} Tagen
                </small>
                <Fortschrittsbalken wert={x.erledigt} max={x.tage} hoehe={6} />
              </div>
            </li>
          ))}
        </ol>
        <p className="hinweistext klein">Eigener Plan: TrainMe rechnet die Gewichte, die Tage und Übungen gibt der Plan vor. Unter Profil, Plan kannst du zurück zur Planung von TrainMe wechseln.</p>
      </Seite>
    )
  }

  if (!plan || !jetzt) {
    return (
      <Seite titel="Dein Weg">
        <p className="hinweistext">Lege einen Jahresplan an, dann siehst du hier, wo du stehst und was als Nächstes kommt.</p>
        <button type="button" className="knopf voll gross" onClick={props.zumJahresplan}>
          Jahresplan anlegen
        </button>
      </Seite>
    )
  }

  return (
    <Seite titel="Dein Weg" untertitel={"Block " + jetzt.nr + " von " + plan.bloecke.length + " · " + Math.round(anteil * 100) + " % des Jahres geschafft"}>
      <PhasenStreifen plan={plan} datum={tag} beschriftung sport={daten.profil?.sport} />
      <BlockFortschritt stand={jetzt} sport={daten.profil?.sport} />
      {naechste ? (
        <button type="button" className="knopf voll" onClick={() => props.oeffnen(naechste)}>
          Nächster Schritt: {naechste.titel} {naechste.datum === tag ? "heute" : datumText(naechste.datum)}
        </button>
      ) : null}

      <ol className="zeitleiste">
        {schritte.map((s, i) => {
          if (s.art === "start")
            return (
              <li key={i} className="vorbei">
                <span className="knoten">{knoten("vorbei")}</span>
                <div>
                  <b>Start</b>
                  <small>{datumText(s.datum)} · Profil und Plan angelegt</small>
                </div>
              </li>
            )
          if (s.art === "einstufung")
            return (
              <li key={i} className={s.status}>
                <span className="knoten">{knoten(s.status)}</span>
                <div>
                  <b>Einstufung</b>
                  <small>{s.datum ? datumText(s.datum) + " · Kraftwerte und Mobilität gemessen" : "Kraftwerte und Mobilität messen, dann passen die Startgewichte"}</small>
                  {s.status === "jetzt" ? (
                    <button type="button" className="knopf klein" onClick={props.einstufen}>
                      Jetzt einstufen
                    </button>
                  ) : null}
                </div>
              </li>
            )
          if (s.art === "saison")
            return (
              <li key={i} className={s.status + " meilenstein"}>
                <span className="knoten">
                  <Sym name={(!!daten.profil && hatSport(daten.profil, "golf")) ? "golf" : "ziel"} groesse={14} />
                </span>
                <div>
                  <b>Saisonstart</b>
                  <small>{datumText(s.datum)} · Ab hier gilt: Kraft halten, frisch bleiben</small>
                </div>
              </li>
            )
          if (s.art === "test")
            return (
              <li key={i} className={s.status + (s.erledigt ? "" : " offen")}>
                <span className="knoten">{knoten(s.status, s.erledigt)}</span>
                <div>
                  <b>{(!!daten.profil && hatSport(daten.profil, "reha")) ? "Funktionstests" : "Kontrolle"}</b>
                  <small>
                    {datumText(s.datum)} · {s.erledigt ? "Erledigt" : s.status === "vorbei" ? "Ausgelassen" : (!!daten.profil && hatSport(daten.profil, "reha")) ? "Aufstehen, Aufstehen und Gehen, Einbeinstand: Was hat der Block gebracht?" : "In der Entlastungswoche Kraft und Mobilität neu messen"}
                  </small>
                  {s.status === "jetzt" && !s.erledigt ? (
                    <button type="button" className="knopf klein" onClick={props.einstufen}>
                      Jetzt messen
                    </button>
                  ) : null}
                </div>
              </li>
            )
          const info = phaseInfo(s.phase, daten.profil?.sport)
          return (
            <li key={i} className={s.status} style={{ ["--phase" as string]: info.farbe }}>
              <span className="knoten phase">{knoten(s.status)}</span>
              <div>
                <b>
                  Block {s.nr}: {info.name}
                  {s.status === "jetzt" ? <em> du bist hier</em> : null}
                </b>
                <small>
                  {datumText(s.von)} bis {datumText(s.bis)}
                  {s.status === "vorbei" ? " · " + s.einheiten + " Einheiten" + (s.rekorde ? ", " + s.rekorde + " Bestwerte" : "") : s.status === "kommt" ? " · in " + s.tageRest + " Tagen" : ""}
                </small>
                {s.status !== "vorbei" ? <small className="ziel">{info.ziel}</small> : null}
              </div>
            </li>
          )
        })}
      </ol>
      <button type="button" className="knopf voll leise" onClick={props.zumJahresplan}>
        Jahresplan anpassen
      </button>
    </Seite>
  )
}
