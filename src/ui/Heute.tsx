// Startseite: heutige Einheit mit einem Tipp starten, Woche im Überblick, Stufe, Serie, dein Weg, Fakt des Tages.

import { useMemo, useState } from "react"
import { faktDesTages } from "../daten/fakten"
import { BLOCK_WOCHEN, blockWoche, istEntlastung } from "../logik/progression"
import { heute, montagVon, plusTage, wochenplan } from "../logik/plan"
import { serie, stufe, stufenName } from "../logik/spiel"
import type { Daten, Einheit } from "../logik/typen"
import { tagesform } from "./gesundheit"
import { offeneReaktion, rehaAktiv, rehaSperre } from "../logik/reha"
import { wissenFuer } from "../daten/reha"
import { Warnzeichen } from "./RehaTeile"
import { wischen } from "./navigation"
import { phaseInfo, phaseAm } from "../logik/jahresplan"
import { BlockFortschritt } from "./Weg"
import { aktuellerBlock, jahresAnteil, wegStand } from "../logik/weg"
import { Sym } from "./symbole"
import { Fortschrittsbalken, Gruppe, Icon, Seite, Zeile } from "./ios"
import { ROLLE, TERMINE, WT, datumText } from "./texte"

export function istErledigt(daten: Daten, e: Einheit): boolean {
  return daten.erledigt.some((x) => (x.geplant || x.datum) === e.datum && x.titel === e.titel)
}

const ART_SYMBOL: Record<string, string> = { kraft: "hantel", mobilitaet: "dehnen", ausdauer: "puls", regeneration: "blatt" }

export default function Heute(props: { daten: Daten; oeffnen: (e: Einheit) => void; einstufen: () => void; zumWeg: () => void; aendern?: (f: (d: Daten) => void) => void }) {
  const { daten } = props
  const profil = daten.profil!
  const tag = heute()
  const [montag, setMontag] = useState(montagVon(tag))
  const plan = useMemo(() => wochenplan(profil, daten, montag), [profil, daten, montag])
  const w = blockWoche(profil, montag)
  const s = stufe(daten.spiel.xp)
  const ser = serie(profil, daten.erledigt, tag)
  const aktuell = montag === montagVon(tag)
  const heutige = aktuell ? plan.find((e) => e.datum === tag) : undefined
  const naechste = aktuell ? plan.find((e) => e.datum >= tag && !istErledigt(daten, e)) : undefined
  const fakt = faktDesTages(tag, profil.sport === "golf" ? "golf" : undefined)
  const reha = rehaAktiv(profil)
  const sperre = reha ? rehaSperre(profil, tag) : null
  const reaktion = reha ? offeneReaktion(daten, tag) : -1
  const wissen = reha ? wissenFuer(profil.reha!.bilder.map((b) => b.id), tag) : null
  const profilAendern = (p: typeof profil) => props.aendern?.((d) => void (d.profil = p))
  const stunde = new Date().getHours()
  const gruss = stunde < 11 ? "Guten Morgen" : stunde < 18 ? "Hallo" : "Guten Abend"
  const termin = profil.woche[(new Date().getDay() + 6) % 7]
  const fokus = heutige && !istErledigt(daten, heutige) ? heutige : naechste
  const phase = phaseAm(profil, montag)
  const weg = aktuellerBlock(wegStand(daten, tag))
  const gesundheit = daten.gesundheit?.verbunden ? daten.gesundheit.tage[tag] : undefined
  const form = tagesform(
    gesundheit,
    Object.entries(daten.gesundheit?.tage || {})
      .filter(([d]) => d < tag)
      .map(([, w]) => w),
  )

  return (
    <Seite titel={gruss + (profil.name ? ", " + profil.name : "")} untertitel={(phase ? phaseInfo(phase, profil.sport).name + " · " : "") + (istEntlastung(w) ? "Entlastungswoche: locker bleiben" : "Block-Woche " + (w + 1) + " von " + (BLOCK_WOCHEN - 1))}>
      <div className="statusreihe">
        <div className="statuskachel">
          <small>Stufe {s.stufe}</small>
          <b>{stufenName(s.stufe)}</b>
          <Fortschrittsbalken wert={s.imLevel} max={s.noetig} farbe="var(--gold)" hoehe={6} />
        </div>
        <div className="statuskachel">
          <small>Wochen-Serie</small>
          <b className="mitsym">
            <Sym name="flamme" groesse={18} farbe="var(--orange)" /> {ser}
          </b>
        </div>
        <div className="statuskachel">
          <small>Einheiten</small>
          <b className="mitsym">
            <Sym name="haken" groesse={18} farbe="var(--gruen)" /> {daten.erledigt.length}
          </b>
        </div>
      </div>

      {gesundheit ? (
        <div className="gesundheitsreihe">
          {gesundheit.schritte !== undefined ? (
            <div className="statuskachel">
              <small>Schritte heute</small>
              <b className="mitsym">
                <Sym name="schuh" groesse={18} farbe="var(--akzent2)" /> {gesundheit.schritte.toLocaleString("de-DE")}
              </b>
            </div>
          ) : null}
          {gesundheit.schlaf_min !== undefined ? (
            <div className="statuskachel">
              <small>Schlaf</small>
              <b className="mitsym">
                <Sym name="mond" groesse={18} farbe="var(--akzent)" /> {Math.floor(gesundheit.schlaf_min / 60)} h {gesundheit.schlaf_min % 60}
              </b>
            </div>
          ) : null}
          {gesundheit.ruhepuls ? (
            <div className="statuskachel">
              <small>Ruhepuls</small>
              <b className="mitsym">
                <Sym name="herz" groesse={18} farbe="var(--rot)" /> {gesundheit.ruhepuls}
              </b>
            </div>
          ) : null}
        </div>
      ) : null}
      {form ? <p className="hinweistext">{form}</p> : null}


      {reaktion >= 0 ? (
        <div className="reaktionskarte">
          <b>Wie geht es dir heute früh?</b>
          <small>Verglichen mit vor dem letzten Training ({daten.erledigt[reaktion].titel})</small>
          <div className="reaktionsknoepfe">
            {(
              [
                ["besser", "Besser"],
                ["gleich", "Gleich"],
                ["schlechter", "Schlechter"],
              ] as const
            ).map(([id, name]) => (
              <button key={id} type="button" className={"knopf klein" + (id === "schlechter" ? " leise" : "")} onClick={() => props.aendern?.((d) => void (d.erledigt[reaktion].reaktion = id))}>
                {name}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {sperre === "warnzeichen" ? (
        <Warnzeichen profil={profil} aendern={profilAendern} />
      ) : sperre === "freigabe" ? (
        <div className="heutekarte ruhig">
          <span className="heutetitel">
            <Sym name="pflaster" groesse={26} /> Erst absprechen
          </span>
          <span className="heutevorschau">Die Operation ist weniger als 12 Wochen her. Bitte den Plan mit Arzt oder Physiotherapie besprechen und dann unter Profil, Training und Sport „Mit Arzt oder Physiotherapie abgesprochen“ einschalten.</span>
        </div>
      ) : !daten.einstufung?.kraft || !daten.einstufung?.mobil ? (
        reha ? (
          <button type="button" className="heutekarte" onClick={props.einstufen}>
            <span className="heutekopf">
              <span className="marke">Vor dem ersten Training</span>
              <span className="dauer">
                <Icon name="timer" groesse={15} /> etwa 10 min
              </span>
            </span>
            <span className="heutetitel">
              <Sym name="ziel" groesse={26} /> Funktionstests
            </span>
            <span className="heutevorschau">Aufstehen in 30 Sekunden, Aufstehen und Gehen, Einbeinstand mit Halt. So siehst du später schwarz auf weiß, was das Training bringt.</span>
            <span className="losknopf">Tests starten</span>
          </button>
        ) : (

        <button type="button" className="heutekarte" onClick={props.einstufen}>
          <span className="heutekopf">
            <span className="marke">Vor dem ersten Training</span>
            <span className="dauer">
              <Icon name="timer" groesse={15} /> etwa 20 min
            </span>
          </span>
          <span className="heutetitel">
            <Sym name="ziel" groesse={26} /> Einstufung
          </span>
          <span className="heutevorschau">
            {daten.einstufung?.kraft ? "Kraftwerte erledigt. " : "1. Kraftwerte: dein Maximum je Hauptübung, geschätzt aus einem schweren Satz. "}
            2. Mobilitätsprofil: kurze Tests für Hüfte, Brustwirbelsäule, Schulter und Gleichgewicht. Danach passen Startgewichte und Mobilität zu dir.
          </span>
          <span className="losknopf">{daten.einstufung?.kraft ? "Mobilität messen" : "Einstufung starten"}</span>
        </button>
        )
      ) : aktuell ? (
        fokus ? (
          <button type="button" className="heutekarte" onClick={() => props.oeffnen(fokus)}>
            <span className="heutekopf">
              <span className="marke">{fokus.datum === tag ? "Heute" : WT[(new Date(fokus.datum + "T12:00:00Z").getUTCDay() + 6) % 7] + " · vorziehen"}</span>
              <span className="dauer">
                <Icon name="timer" groesse={15} /> {fokus.minuten} min
              </span>
            </span>
            <span className="heutetitel">
              <Sym name={ART_SYMBOL[fokus.art]} groesse={26} /> {fokus.titel}
            </span>
            <span className="heutevorschau">
              {fokus.plaetze
                .slice(0, 5)
                .map((p) => p.uebung.name)
                .join(" · ")}
              {fokus.plaetze.length > 5 ? " · +" + (fokus.plaetze.length - 5) : ""}
            </span>
            <span className="losknopf">Training starten</span>
          </button>
        ) : (
          <div className="heutekarte ruhig">
            <span className="heutetitel">
              <Sym name={heutige ? "haken" : termin.art === "sporttermin" ? "golf" : "mond"} groesse={26} />
              {heutige ? "Heute erledigt" : termin.art === "sporttermin" ? TERMINE.find((x) => x.id === termin.termin)?.name || "Sporttermin" : "Ruhetag"}
            </span>
            <span className="heutevorschau">Erholung gehört zum Training. Diese Woche ist alles geschafft.</span>
          </div>
        )
      ) : null}

      {weg ? (
        <button type="button" className="wegkarte" onClick={props.zumWeg}>
          <span className="wegkopf">
            <b>Dein Weg</b>
            <small>
              {Math.round(jahresAnteil(daten, tag) * 100)} % des Jahres <Icon name="weiter" groesse={12} />
            </small>
          </span>
          <BlockFortschritt stand={weg} klein sport={profil.sport} />
        </button>
      ) : null}

      <div className="wochenkopf">
        <button type="button" className="rundknopf" aria-label="Vorige Woche" onClick={() => setMontag(plusTage(montag, -7))}>
          <Icon name="zurueck" groesse={18} dick={2.4} />
        </button>
        <span>
          {datumText(montag)} bis {datumText(plusTage(montag, 6))}
        </span>
        <button type="button" className="rundknopf" aria-label="Nächste Woche" onClick={() => setMontag(plusTage(montag, 7))}>
          <Icon name="weiter" groesse={18} dick={2.4} />
        </button>
      </div>
      <div className="wochenwisch" {...wischen(() => setMontag(plusTage(montag, 7)), () => setMontag(plusTage(montag, -7)))}>
      <Gruppe fuss="Nach links oder rechts wischen für die nächste oder vorige Woche.">
        {profil.woche.map((t, i) => {
          const datum = plusTage(montag, i)
          const e = plan.find((x) => x.datum === datum)
          const fertig = e && istErledigt(daten, e)
          const rollen = e ? Array.from(new Set(e.plaetze.map((p) => p.etikett || ROLLE[p.rolle]))).slice(0, 3).join(", ") : ""
          return (
            <Zeile
              key={i}
              symbol={
                <span className={"tagkreis" + (datum === tag ? " heute" : "") + (fertig ? " fertig" : "")}>
                  <b>{WT[i]}</b>
                  <small>{datum.slice(8)}</small>
                </span>
              }
              titel={
                e ? (
                  <span className="mitsym">
                    <Sym name={ART_SYMBOL[e.art]} groesse={18} farbe="var(--akzent)" /> {e.titel}
                  </span>
                ) : t.art === "sporttermin" ? (
                  <span className="mitsym">
                    <Sym name="golf" groesse={18} farbe="var(--gold)" /> {TERMINE.find((x) => x.id === t.termin)?.name || "Termin"}
                  </span>
                ) : (
                  <span className="leise">frei</span>
                )
              }
              untertitel={e ? e.minuten + " min · " + rollen : undefined}
              rechts={fertig ? <Sym name="haken" groesse={20} farbe="var(--gruen)" /> : undefined}
              onClick={e ? () => props.oeffnen(e) : undefined}
            />
          )
        })}
      </Gruppe>
      </div>

      {wissen ? (
        <Gruppe titel={"Gut zu wissen: " + wissen.titel} fuss={wissen.quelle}>
          <Zeile titel={wissen.text} />
        </Gruppe>
      ) : (
        <Gruppe titel="Wusstest du?" fuss={<a href={fakt.url} target="_blank" rel="noreferrer">{fakt.quelle}</a>}>
          <Zeile titel={fakt.text} />
        </Gruppe>
      )}
    </Seite>
  )
}
