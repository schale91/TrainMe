// Jahresplan: Phasen je Block als Zeitstrahl, wo man gerade steht, was danach kommt, und jede Phase einzeln änderbar.

import { BLOCK_TAGE, MONATE, PHASEN, SAISON_VORSCHLAG, blockIndex, neuPlanen, phaseAm, plusTage } from "../logik/jahresplan"
import { BLOCK_WOCHEN, blockWoche, istEntlastung } from "../logik/progression"
import type { Jahresplan, Phase, Profil } from "../logik/typen"
import { Gruppe, Seite, Zeile } from "./ios"
import { datumText } from "./texte"

const MON = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
const REIHENFOLGE: Phase[] = ["grundlage", "kraft", "schnellkraft", "erhalt", "uebergang"]

/** Schmaler Zeitstrahl mit Markierung für heute. */
export function PhasenStreifen(props: { plan: Jahresplan; datum: string; beschriftung?: boolean }) {
  const { plan, datum } = props
  const jetzt = blockIndex(plan, datum)
  const anteil = Math.min(1, Math.max(0, (Date.parse(datum + "T12:00:00Z") - Date.parse(plusTage(plan.start, jetzt * BLOCK_TAGE) + "T12:00:00Z")) / (BLOCK_TAGE * 86400000)))
  return (
    <div className="phasenstreifen">
      <div className="phasenbalken">
        {plan.bloecke.map((ph, i) => (
          <span key={i} className={i === jetzt ? "jetzt" : i < jetzt ? "vorbei" : ""} style={{ background: PHASEN[ph].farbe }} title={PHASEN[ph].name}>
            {i === jetzt ? <i className="hier" style={{ left: anteil * 100 + "%" }} /> : null}
          </span>
        ))}
      </div>
      {props.beschriftung ? (
        <div className="phasenmonate">
          {plan.bloecke.map((_, i) => (
            <span key={i}>{i % 2 === 0 ? MON[Number(plusTage(plan.start, i * BLOCK_TAGE).slice(5, 7)) - 1] : ""}</span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function JahresplanSeite(props: { profil: Profil; heute: string; aendern: (p: Profil) => void; zurueck: { text: string; onClick: () => void } }) {
  const { profil, heute } = props
  const plan = profil.jahresplan
  const vorschlag = SAISON_VORSCHLAG[profil.sport] ?? null

  if (!plan) {
    return (
      <Seite titel="Jahresplan" zurueck={props.zurueck}>
        <p className="hinweistext">Ein grober Plan für das Jahr: Jeder Block (5 Wochen) bekommt eine Phase. Die Phasen bauen aufeinander auf, von der Grundlage über Kraft und Schnellkraft bis zur Saison.</p>
        <button type="button" className="knopf voll gross" onClick={() => props.aendern({ ...profil, jahresplan: neuPlanen(profil, heute, vorschlag) })}>
          Jahresplan anlegen
        </button>
      </Seite>
    )
  }

  const jetzt = blockIndex(plan, heute)
  const phase = phaseAm(profil, heute) || "grundlage"
  const info = PHASEN[phase]
  const w = blockWoche(profil, heute)
  const naechste = plan.bloecke.slice(Math.max(0, jetzt + 1)).find((p) => p !== phase)
  const setzePlan = (p: Jahresplan) => props.aendern({ ...profil, jahresplan: p })
  const saison = plan.saison

  return (
    <Seite titel="Jahresplan" untertitel={"Block " + (Math.min(jetzt, plan.bloecke.length - 1) + 1) + " von " + plan.bloecke.length + " · " + info.name} zurueck={props.zurueck}>
      <PhasenStreifen plan={plan} datum={heute} beschriftung />

      <div className="phasenkarte" style={{ borderColor: info.farbe }}>
        <span className="marke" style={{ background: info.farbe }}>
          Jetzt: {info.name}
        </span>
        <p>
          <b>{info.ziel}</b> {info.training}
        </p>
        <p className="leise">{info.aufbau}</p>
        <p className="leise">{istEntlastung(w) ? "Diese Woche: Entlastung, danach beginnt der nächste Block." : "Woche " + (w + 1) + " von " + (BLOCK_WOCHEN - 1) + " im Block, dann eine Entlastungswoche."}</p>
        {naechste ? <p className="leise">Danach: {PHASEN[naechste].name}. {PHASEN[naechste].aufbau}</p> : null}
      </div>

      <Gruppe titel="Saison" fuss="In der Saison hält der Plan die Kraft. Davor kommen Kraft und Schnellkraft, danach ein Übergangsblock. Nach einer Änderung „Ab jetzt neu planen“ antippen.">
        <Zeile
          titel="Feste Saison"
          untertitel={saison ? MONATE[saison.von - 1] + " bis " + MONATE[saison.bis - 1] : "ohne, Phasen wechseln regelmäßig"}
          rechts={
            <select aria-label="Saison" value={saison ? "ja" : "nein"} onChange={(e) => setzePlan({ ...plan, saison: e.target.value === "ja" ? vorschlag || { von: 4, bis: 10 } : null })}>
              <option value="ja">ja</option>
              <option value="nein">nein</option>
            </select>
          }
        />
        {saison ? (
          <>
            <Zeile
              titel="Beginn"
              rechts={
                <select aria-label="Saisonbeginn" value={saison.von} onChange={(e) => setzePlan({ ...plan, saison: { ...saison, von: Number(e.target.value) } })}>
                  {MONATE.map((m, i) => (
                    <option key={m} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>
              }
            />
            <Zeile
              titel="Ende"
              rechts={
                <select aria-label="Saisonende" value={saison.bis} onChange={(e) => setzePlan({ ...plan, saison: { ...saison, bis: Number(e.target.value) } })}>
                  {MONATE.map((m, i) => (
                    <option key={m} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>
              }
            />
          </>
        ) : null}
        <Zeile titel="Ab jetzt neu planen" onClick={() => setzePlan(neuPlanen(profil, heute, saison))} pfeil={false} />
      </Gruppe>

      <Gruppe titel="Blöcke" fuss="Jede Phase lässt sich einzeln ändern. Nach dem letzten Block geht der Plan nach derselben Regel weiter.">
        {plan.bloecke.map((ph, i) => {
          const von = plusTage(plan.start, i * BLOCK_TAGE)
          const bis = plusTage(von, BLOCK_TAGE - 1)
          return (
            <Zeile
              key={i}
              symbol={<span className="phasenpunkt" style={{ background: PHASEN[ph].farbe }} />}
              titel={
                <span>
                  Block {i + 1}
                  {i === jetzt ? <b className="jetztmarke"> jetzt</b> : null}
                </span>
              }
              untertitel={datumText(von) + " bis " + datumText(bis)}
              rechts={
                <select aria-label={"Phase Block " + (i + 1)} value={ph} disabled={i < jetzt} onChange={(e) => setzePlan({ ...plan, bloecke: plan.bloecke.map((x, k) => (k === i ? (e.target.value as Phase) : x)) })}>
                  {REIHENFOLGE.map((x) => (
                    <option key={x} value={x}>
                      {PHASEN[x].name}
                    </option>
                  ))}
                </select>
              }
            />
          )
        })}
      </Gruppe>

      <Gruppe titel="Phasen">
        {REIHENFOLGE.map((x) => (
          <Zeile key={x} symbol={<span className="phasenpunkt" style={{ background: PHASEN[x].farbe }} />} titel={PHASEN[x].name} untertitel={PHASEN[x].ziel} />
        ))}
      </Gruppe>
      <p className="hinweistext klein">Grundlage: Blockperiodisierung (Issurin 2010, Sports Medicine) und Krafterhalt in der Saison (Rønnestad et al. 2011, Journal of Strength and Conditioning Research).</p>
    </Seite>
  )
}
