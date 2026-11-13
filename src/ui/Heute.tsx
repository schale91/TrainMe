// Startseite: heutige Einheit mit einem Tipp starten, Woche im Überblick, Stufe, Serie, dein Weg, Fakt des Tages.

import { hatSport } from "../logik/auswahl"
import { useMemo, useState } from "react"
import { BausteinWoche } from "./Bausteine"
import { faktDesTages } from "../daten/fakten"
import { BLOCK_WOCHEN, blockWoche, istEntlastung } from "../logik/progression"
import { MOBIL_SCHWERPUNKTE, heute, mobilitaetsEinheit, montagVon, plusTage, schwachstellen, wochenplan, type MobilSchwerpunkt } from "../logik/plan"
import { serie, stufe, stufenName } from "../logik/spiel"
import type { Daten, Einheit } from "../logik/typen"
import { tagesform } from "./gesundheit"
import { alleTage, tageswerte } from "../logik/gesundheit"
import { letzterPlanTag, naechsterPlanTag, planZuEnde, ueberspringen } from "../logik/eigenerPlan"
import { jahresplanVorschlag } from "../logik/jahresplan"
import { offeneReaktion, rehaAktiv, rehaSperre } from "../logik/reha"
import { wissenFuer } from "../daten/reha"
import { Warnzeichen } from "./RehaTeile"
import { wischen } from "./navigation"
import { aenderungsText } from "../logik/auswahl"
import { phaseInfo, phaseAm } from "../logik/jahresplan"
import { BlockFortschritt } from "./Weg"
import { aktuellerBlock, jahresAnteil, wegStand } from "../logik/weg"
import { Sym } from "./symbole"
import { Blatt, Fortschrittsbalken, Gruppe, Icon, Seite, Zeile } from "./ios"
import { Chips, WertWahl } from "./teile"
import { ROLLE, TERMINE, WT, WT_LANG, datumText } from "./texte"
import { planWochen, tagMerkmal, wochenText } from "../logik/planphasen"
import { tagAngepasst } from "../logik/eigenerPlan"

export function istErledigt(daten: Daten, e: Einheit): boolean {
  if (e.plan_nr !== undefined) return daten.erledigt.some((x) => x.plan_nr === e.plan_nr)
  return daten.erledigt.some((x) => (x.geplant || x.datum) === e.datum && x.titel === e.titel)
}

const ART_SYMBOL: Record<string, string> = { kraft: "hantel", mobilitaet: "dehnen", ausdauer: "puls", regeneration: "blatt" }

export default function Heute(props: { daten: Daten; oeffnen: (e: Einheit) => void; einstufen: () => void; zumWeg: () => void; aendern?: (f: (d: Daten) => void) => void; lebenswelt?: boolean }) {
  const { daten } = props
  const profil = daten.profil!
  const tag = heute()
  const [montag, setMontag] = useState(montagVon(tag))
  const [mobil, setMobil] = useState(false)
  // In der Wochenleiste angetippter Tag; ohne Wahl heute, in anderen Wochen der erste Tag mit einer Einheit
  const [gewaehlt, setGewaehlt] = useState<string | null>(null)
  const plan = useMemo(() => wochenplan(profil, daten, montag), [profil, daten, montag])
  const w = blockWoche(profil, montag)
  const s = stufe(daten.spiel.xp)
  const ser = serie(profil, daten.erledigt, tag)
  const aktuell = montag === montagVon(tag)
  const wahl = gewaehlt && gewaehlt >= montag && gewaehlt <= plusTage(montag, 6) ? gewaehlt : aktuell ? tag : (plan[0]?.datum ?? montag)
  // Zwei Einheiten an einem Tag: zuerst die noch offene
  const heutige = aktuell ? (plan.find((e) => e.datum === tag && !istErledigt(daten, e)) ?? plan.find((e) => e.datum === tag)) : undefined
  // Fortlaufend: auch Verpasstes aus dieser Woche nachholen, sonst nur ab heute
  const naechste = aktuell ? plan.find((e) => (profil.folge === "fortlaufend" || e.datum >= tag) && !istErledigt(daten, e)) : undefined
  const eigen = profil.planart === "eigen" && !!daten.eigenerPlan
  const planTag = eigen ? naechsterPlanTag(daten) : null
  const fakt = faktDesTages(tag, hatSport(profil, "golf") ? "golf" : undefined, hatSport(profil, "golf"))
  const reha = rehaAktiv(profil)
  const sperre = reha ? rehaSperre(profil, tag) : null
  const reaktion = reha ? offeneReaktion(daten, tag) : -1
  const wissen = reha ? wissenFuer(profil.reha!.bilder.map((b) => b.id), tag) : null
  const profilAendern = (p: typeof profil) => props.aendern?.((d) => void (d.profil = p))
  const stunde = new Date().getHours()
  const gruss = stunde < 11 ? "Guten Morgen" : stunde < 18 ? "Hallo" : "Guten Abend"
  const termin = profil.woche[(new Date().getDay() + 6) % 7]
  const fokus = heutige && !istErledigt(daten, heutige) ? heutige : naechste
  // Ruhetag ohne offene Einheit in dieser Woche: die nächste aus der kommenden Woche zum Vorziehen
  const vorziehen = useMemo(
    () => (aktuell && !fokus ? wochenplan(profil, daten, plusTage(montag, 7)).find((e) => !istErledigt(daten, e)) : undefined),
    [aktuell, fokus, profil, daten, montag],
  )
  const phase = phaseAm(profil, montag)
  const weg = aktuellerBlock(wegStand(daten, tag))
  const gesundheit = tageswerte(daten, tag)
  const form = tagesform(
    gesundheit,
    Object.entries(alleTage(daten))
      .filter(([d]) => d < tag)
      .map(([, w]) => w),
  )
  // Besondere Plantage (Test, schwer) sichtbar machen: in der Karte, in der Wochenleiste und in der Zeile des Tages
  const merkmal = (e: Einheit | undefined) => {
    const t = e && e.plan_nr !== undefined ? daten.eigenerPlan?.tage.find((x) => x.nr === e.plan_nr) : undefined
    return t ? tagMerkmal(t) : null
  }
  // Welche Planwochen liegen in der gezeigten Kalenderwoche, und was sind sie (schwer, Aufbau, Test)?
  const wochenphase = useMemo(() => {
    const aus: { abschnitte: string[]; wochen: string[] } = { abschnitte: [], wochen: [] }
    if (!daten.eigenerPlan) return aus
    const alle = planWochen(daten)
    for (const e of plan) {
      const t = e.plan_nr !== undefined ? daten.eigenerPlan.tage.find((x) => x.nr === e.plan_nr) : undefined
      if (!t || t.woche === undefined) continue
      const w = alle.find((x) => x.abschnitt === (t.abschnitt || daten.eigenerPlan!.name) && x.woche === String(t.woche))
      if (!w) continue
      const text = "Woche " + w.woche + ": " + wochenText(w)
      if (aus.abschnitte.indexOf(w.abschnitt) < 0) aus.abschnitte.push(w.abschnitt)
      if (aus.wochen.indexOf(text) < 0) aus.wochen.push(text)
    }
    return aus
  }, [daten, plan])
  const planUntertitel = eigen ? daten.eigenerPlan!.name + (planTag ? " · Tag " + planTag.nr + (planTag.abschnitt ? ", " + planTag.abschnitt : "") + (planTag.woche ? ", Woche " + planTag.woche : "") : " · geschafft") : null

  return (
    <Seite titel={gruss + (profil.name ? ", " + profil.name : "")} untertitel={planUntertitel ?? (phase ? phaseInfo(phase, profil.sport).name + " · " : "") + (istEntlastung(w) ? "Entlastungswoche: locker bleiben" : "Block-Woche " + (w + 1) + " von " + (BLOCK_WOCHEN - 1))}>
      <div className="statuszeile">
        {props.lebenswelt ? null : (
          <span className="statusmarke stufe">
            <small>Stufe {s.stufe}</small>
            <b>{stufenName(s.stufe)}</b>
            <Fortschrittsbalken wert={s.imLevel} max={s.noetig} farbe="var(--gold)" hoehe={4} />
          </span>
        )}
        <span className="statusmarke" title="Wochen-Serie: so viele Wochen in Folge hast du deine Einheiten geschafft">
          <Sym name="flamme" groesse={16} farbe="var(--orange)" />
          <b>{ser}</b>
          <small>{ser === 1 ? "Woche" : "Wochen"}</small>
        </span>
        <span className="statusmarke" title="Einheiten">
          <Sym name="haken" groesse={16} farbe="var(--gruen)" />
          <b>{daten.erledigt.length}</b>
          <small>{daten.erledigt.length === 1 ? "Einheit" : "Einheiten"}</small>
        </span>
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
      {profil.vorgemerkt ? (
        <p className="hinweistext">
          Ab {datumText(profil.vorgemerkt.ab)} gilt dein geänderter Plan ({aenderungsText(profil, { ...profil, ...profil.vorgemerkt.aenderung })}). Bis dahin läuft der Block wie gehabt.
        </p>
      ) : null}


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
      ) : eigen && planZuEnde(daten) && aktuell ? (
        <div className="heutekarte ruhig">
          <span className="heutetitel">
            <Sym name="pokal" groesse={26} /> Plan geschafft
          </span>
          <span className="heutevorschau">Alle {daten.eigenerPlan!.tage.length} Tage von „{daten.eigenerPlan!.name}“ sind erledigt. Wie geht es weiter?</span>
          <span className="tauschknoepfe">
            <button type="button" className="knopf klein" onClick={() => props.aendern?.((d) => {
              const p = d.profil!
              p.planart = "trainme"
              p.block_start = montagVon(tag)
              p.jahresplan = jahresplanVorschlag(p, p.block_start)
            })}>
              TrainMe plant ab jetzt
            </button>
            <button type="button" className="knopf klein leise" onClick={() => props.aendern?.((d) => {
              // Von vorn: die Tage bekommen neue Nummern nach dem letzten erledigten Tag
              const ab = letzterPlanTag(d)
              d.eigenerPlan = { ...d.eigenerPlan!, tage: d.eigenerPlan!.tage.map((t) => ({ ...t, nr: t.nr + ab })) }
            })}>
              Plan von vorn
            </button>
          </span>
        </div>
      ) : aktuell ? (
        fokus ? (
          <>
          <button type="button" className="heutekarte" onClick={() => props.oeffnen(fokus)}>
            <span className="heutekopf">
              <span className="marke">{fokus.datum === tag ? "Heute" : WT[(new Date(fokus.datum + "T12:00:00Z").getUTCDay() + 6) % 7] + " · vorziehen"}</span>
              {merkmal(fokus)?.art === "test" ? <span className="marke tagart test">Test</span> : merkmal(fokus)?.art === "schwer" ? <span className="marke tagart schwer">Schwer</span> : null}
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
            {merkmal(fokus)?.text ? <span className="heutemerkmal">{merkmal(fokus)!.text}</span> : null}
            <span className="losknopf">Zum Training</span>
          </button>
          {fokus.plan_nr !== undefined && planTag && fokus.plan_nr === planTag.nr ? (
            <button type="button" className="textknopf" onClick={() => props.aendern?.((d) => ueberspringen(d, planTag, tag))}>
              Diesen Plantag auslassen
            </button>
          ) : null}
          </>
        ) : (
          <div className="heutekarte ruhig">
            <span className="heutetitel">
              <Sym name={heutige ? "haken" : termin.art === "sporttermin" ? (hatSport(profil, "golf") ? "golf" : "ziel") : "mond"} groesse={26} />
              {heutige ? "Heute erledigt" : termin.art === "sporttermin" ? TERMINE.find((x) => x.id === termin.termin)?.name || "Sporttermin" : "Ruhetag"}
            </span>
            <span className="heutevorschau">Erholung gehört zum Training. {vorziehen ? "Weiter geht es am " + WT[(new Date(vorziehen.datum + "T12:00:00Z").getUTCDay() + 6) % 7] + " mit " + vorziehen.titel + "." : "Diese Woche ist alles geschafft."}</span>
            {vorziehen ? (
              <button type="button" className="textknopf" onClick={() => props.oeffnen(vorziehen)}>
                Trotzdem heute trainieren: {vorziehen.titel} vorziehen
              </button>
            ) : null}
          </div>
        )
      ) : null}

      <button type="button" className="mobilkarte" onClick={() => setMobil(true)}>
        <Sym name="dehnen" groesse={22} />
        <span>
          <b>Mobility-Einheit starten</b>
          <small>Dauer und Schwerpunkt wählst du selbst</small>
        </span>
        <Icon name="weiter" groesse={16} />
      </button>
      <MobilBlatt offen={mobil} schliessen={() => setMobil(false)} daten={daten} datum={tag} ortVorschlag={termin.ort || 0} starten={(e) => { setMobil(false); props.oeffnen(e) }} />

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
      {wochenphase.wochen.length ? (
        <p className="wochenphase">
          <small>{wochenphase.abschnitte.join(" und ")}</small>
          {wochenphase.wochen.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </p>
      ) : null}
      <div className="wochenwisch" {...wischen(() => setMontag(plusTage(montag, 7)), () => setMontag(plusTage(montag, -7)))}>
        <div className="wochenleiste" role="tablist" aria-label="Tage der Woche">
          {profil.woche.map((t, i) => {
            const datum = plusTage(montag, i)
            const am = plan.filter((x) => x.datum === datum)
            const fertig = am.length > 0 && am.every((e) => istErledigt(daten, e))
            const was = am.length ? am.map((e) => e.titel).join(" und ") : t.art === "sporttermin" ? TERMINE.find((x) => x.id === t.termin)?.name || "Termin" : "frei"
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={datum === wahl}
                aria-label={WT[i] + " " + datumText(datum) + ": " + was + (am.some((e) => merkmal(e)?.art === "test") ? ", Testtag" : am.some((e) => merkmal(e)?.art === "schwer") ? ", schwerer Tag" : "") + (fertig ? ", erledigt" : "")}
                className={"wochentag" + (datum === wahl ? " gewaehlt" : "") + (datum === tag ? " heute" : "") + (fertig ? " fertig" : "") + (am.length ? "" : " frei")}
                onClick={() => {
                  // zweites Antippen des gewählten Tages öffnet ihn: ansehen und anpassen, ohne zu starten
                  if (datum === wahl && am.length === 1) props.oeffnen(am[0])
                  else setGewaehlt(datum)
                }}
              >
                <small>{WT[i]}</small>
                <b>{Number(datum.slice(8))}</b>
                <span className="tagmarke">
                  {fertig ? (
                    <Sym name="haken" groesse={14} farbe="var(--gruen)" />
                  ) : am.length ? (
                    am.slice(0, 2).map((e, n) =>
                      merkmal(e)?.art === "test" ? (
                        <Sym key={n} name="pokal" groesse={14} farbe="var(--gold)" />
                      ) : merkmal(e)?.art === "schwer" ? (
                        <Sym key={n} name="blitz" groesse={14} farbe="var(--akzent)" />
                      ) : (
                        <Sym key={n} name={ART_SYMBOL[e.art]} groesse={14} farbe="var(--leise)" />
                      ),
                    )
                  ) : t.art === "sporttermin" ? (
                    <Sym name={hatSport(profil, "golf") ? "golf" : "ziel"} groesse={14} farbe="var(--gold)" />
                  ) : null}
                </span>
              </button>
            )
          })}
        </div>
        <Gruppe>
          {(() => {
            const i = Math.max(0, Math.min(6, Math.round((Date.parse(wahl + "T12:00:00Z") - Date.parse(montag + "T12:00:00Z")) / 86400000)))
            const t = profil.woche[i]
            // Jede Einheit des Tages bekommt eine eigene Zeile (zwei an einem Tag zum Nachholen); ohne Einheit eine Zeile
            const am = plan.filter((x) => x.datum === wahl)
            return (am.length ? am : [undefined]).map((e, n) => {
              const fertig = e && istErledigt(daten, e)
              const rollen = e ? Array.from(new Set(e.plaetze.map((p) => p.etikett || ROLLE[p.rolle]))).slice(0, 3).join(", ") : ""
              return (
                <Zeile
                  key={wahl + "-" + n}
                  titel={
                    e ? (
                      <span className="mitsym">
                        <Sym name={ART_SYMBOL[e.art]} groesse={18} farbe="var(--akzent)" /> {e.titel}
                      </span>
                    ) : t.art === "sporttermin" ? (
                      <span className="mitsym">
                        <Sym name={hatSport(profil, "golf") ? "golf" : "ziel"} groesse={18} farbe="var(--gold)" /> {TERMINE.find((x) => x.id === t.termin)?.name || "Termin"}
                      </span>
                    ) : (
                      <span className="leise">{WT_LANG[i]}: frei</span>
                    )
                  }
                  untertitel={e ? WT_LANG[i] + " · " + e.minuten + " min · " + (merkmal(e)?.text ?? rollen) + (tagAngepasst(daten, e.plan_nr) ? " · von dir angepasst" : "") : undefined}
                  rechts={fertig ? <Sym name="haken" groesse={20} farbe="var(--gruen)" /> : undefined}
                  onClick={e ? () => props.oeffnen(e) : undefined}
                />
              )
            })
          })()}
        </Gruppe>
      </div>
      <BausteinWoche daten={daten} montag={montag} aendern={props.aendern} />

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

/** Zusätzliche Mobility-Einheit: erst fragen, wie lange und mit welchem Schwerpunkt, dann starten. */
function MobilBlatt(props: { offen: boolean; schliessen: () => void; daten: Daten; datum: string; ortVorschlag: number; starten: (e: Einheit) => void }) {
  const profil = props.daten.profil!
  const [minuten, setMinuten] = useState(20)
  const [schwerpunkt, setSchwerpunkt] = useState<MobilSchwerpunkt>("ganz")
  const [ort, setOrt] = useState(Math.min(props.ortVorschlag, Math.max(0, profil.orte.length - 1)))
  const schwach = useMemo(() => schwachstellen(props.daten).some((m) => m.startsWith("mobilitaet")), [props.daten])
  const auswahl = MOBIL_SCHWERPUNKTE.filter((x) => x.id !== "schwach" || schwach)
  const einheit = useMemo(() => (props.offen ? mobilitaetsEinheit(profil, props.daten, props.datum, minuten, schwerpunkt, ort) : null), [props.offen, profil, props.daten, props.datum, minuten, schwerpunkt, ort])
  return (
    <Blatt offen={props.offen} onClose={props.schliessen} titel="Mobility-Einheit" hoch>
      <h4>Wie lange möchtest du heute Mobility machen?</h4>
      <WertWahl werte={[10, 15, 20, 30, 45]} wert={minuten} onChange={setMinuten} einheit="min" min={5} max={90} />
      <h4>Schwerpunkt</h4>
      <Chips werte={auswahl} gewaehlt={[schwerpunkt]} onChange={(x) => x[0] && setSchwerpunkt(x[0])} einzeln />
      {profil.orte.length > 1 ? (
        <>
          <h4>Wo?</h4>
          <Chips werte={profil.orte.map((o, i) => ({ id: String(i), name: o.name || "Ort " + (i + 1) }))} gewaehlt={[String(ort)]} onChange={(x) => x[0] && setOrt(Number(x[0]))} einzeln />
        </>
      ) : null}
      {einheit ? (
        <>
          <h4>
            {einheit.plaetze.length} Übungen · etwa {einheit.minuten} min
          </h4>
          <ol className="schritte mobilvorschau">
            {einheit.plaetze.map((p, i) => (
              <li key={i}>
                {p.uebung.name}
                <small> · {p.vorgabe.saetze} × {p.uebung.belastung === "zeit" ? (p.vorgabe.last || 30) + " s" : p.vorgabe.wdh_von + (p.vorgabe.wdh_bis > p.vorgabe.wdh_von ? " bis " + p.vorgabe.wdh_bis : "")}</small>
              </li>
            ))}
          </ol>
          <button type="button" className="knopf voll gross" disabled={!einheit.plaetze.length} onClick={() => props.starten(einheit)}>
            Mobility starten
          </button>
        </>
      ) : null}
    </Blatt>
  )
}
