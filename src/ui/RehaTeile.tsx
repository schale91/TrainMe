// Reha im Profil: Beschwerden auswählen, Sicherheitsfragen, Warnzeichen. Wird in der Einrichtung, im Profil und auf
// „Heute“ benutzt.

import { BILDER, NOTRUF, WARNZEICHEN, bildInfo } from "../daten/reha"
import { heute } from "../logik/plan"
import type { Profil, RehaBild, RehaProfil } from "../logik/typen"
import { Gruppe, Schalter, Zeile } from "./ios"
import { Chips, Feld, Zahl } from "./teile"
import { datumText } from "./texte"

export function leeresReha(): RehaProfil {
  return { bilder: [], boden: true, halt: false, freigabe: false, tep_grenzen: false }
}

type Teil = { profil: Profil; aendern: (p: Profil) => void }

/** Warnzeichen mit Bestätigung. */
export function Warnzeichen(props: Teil & { kompakt?: boolean }) {
  const r = props.profil.reha || leeresReha()
  const setze = (neu: Partial<RehaProfil>) => props.aendern({ ...props.profil, reha: { ...r, ...neu } })
  return (
    <Gruppe titel="Warnzeichen" fuss={NOTRUF}>
      <div className="warnliste">
        <p>Trifft eines davon zu, bitte erst ärztlich abklären und heute nicht trainieren:</p>
        <ul>
          {WARNZEICHEN.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        {r.warnzeichen ? <p className="leise">Zuletzt geprüft am {datumText(r.warnzeichen)}. TrainMe fragt alle 30 Tage erneut.</p> : null}
        <button type="button" className="knopf voll" onClick={() => setze({ warnzeichen: heute() })}>
          Keins davon trifft zu
        </button>
      </div>
    </Gruppe>
  )
}

export function RehaEditor({ profil, aendern }: Teil) {
  const r = profil.reha || leeresReha()
  const setze = (neu: Partial<RehaProfil>) => aendern({ ...profil, reha: { ...r, ...neu } })
  const gewaehlt = r.bilder.map((b) => b.id)
  const setzeBild = (id: RehaBild, neu: Partial<RehaProfil["bilder"][number]>) => setze({ bilder: r.bilder.map((b) => (b.id === id ? { ...b, ...neu } : b)) })
  const tep = gewaehlt.indexOf("huefte_tep") >= 0
  return (
    <>
      <Feld titel="Welche Beschwerden?" text="Mehrfachauswahl. Danach richtet sich, welche Übungen in den Plan kommen.">
        <Chips
          werte={BILDER.map((b) => ({ id: b.id, name: b.name }))}
          gewaehlt={gewaehlt}
          onChange={(ids) => setze({ bilder: ids.map((id) => r.bilder.find((b) => b.id === id) || { id, seite: bildInfo(id).gelenk === "ruecken" ? undefined : "beide" }) })}
        />
      </Feld>
      {r.bilder.map((b) => {
        const info = bildInfo(b.id)
        return (
          <div key={b.id} className="rehabild">
            <b>{info.name}</b>
            <p>{info.text}</p>
            {info.gelenk !== "ruecken" ? (
              <Chips
                einzeln
                werte={[
                  { id: "links", name: "Links" },
                  { id: "rechts", name: "Rechts" },
                  { id: "beide", name: "Beide Seiten" },
                ]}
                gewaehlt={[b.seite || "beide"]}
                onChange={([seite]) => setzeBild(b.id, { seite: seite as "links" | "rechts" | "beide" })}
              />
            ) : null}
            {info.op ? (
              <label className="rehaop">
                <span>Datum der Operation</span>
                <input type="date" value={b.op_datum || ""} max={heute()} onChange={(e) => setzeBild(b.id, { op_datum: e.target.value || undefined })} />
              </label>
            ) : null}
          </div>
        )
      })}
      <Gruppe titel="Sicherheit" fuss="Ohne Freigabe trainiert TrainMe in den ersten 12 Wochen nach einer Operation nicht. Bei Arthrose oder Kreuzschmerz ist Bewegung ohne Rücksprache sicher, solange keine Warnzeichen vorliegen.">
        <Zeile titel="Sicher auf den Boden und wieder hoch" untertitel="Sonst nur Übungen im Stehen und Sitzen" rechts={<Schalter an={r.boden} onChange={(boden) => setze({ boden })} label="Boden" />} />
        <Zeile titel="Beim Gleichgewicht brauche ich Halt" untertitel="Gehhilfe, Unsicherheit oder Sturz im letzten Jahr" rechts={<Schalter an={r.halt} onChange={(halt) => setze({ halt })} label="Halt" />} />
        <Zeile titel="Mit Arzt oder Physiotherapie abgesprochen" rechts={<Schalter an={r.freigabe} onChange={(freigabe) => setze({ freigabe })} label="Freigabe" />} />
        {tep ? <Zeile titel="Bewegungsgrenzen vom Operateur" untertitel="z. B. Hüfte nicht über 90 Grad beugen, Beine nicht überkreuzen" rechts={<Schalter an={r.tep_grenzen} onChange={(tep_grenzen) => setze({ tep_grenzen })} label="Bewegungsgrenzen" />} /> : null}
      </Gruppe>
      <Feld titel="Für die Funktionstests" text="Damit TrainMe die Ergebnisse mit Gleichaltrigen vergleichen kann. Bleibt auf dem Handy.">
        <span className="rehazeile">
          <span>Geburtsjahr</span>
          <Zahl wert={r.geburtsjahr} min={1920} max={2010} onChange={(geburtsjahr) => setze({ geburtsjahr })} />
        </span>
        <Chips
          einzeln
          werte={[
            { id: "m", name: "Mann" },
            { id: "w", name: "Frau" },
          ]}
          gewaehlt={r.geschlecht ? [r.geschlecht] : []}
          onChange={([g]) => setze({ geschlecht: g as "m" | "w" })}
        />
      </Feld>
      <Warnzeichen profil={profil} aendern={aendern} />
    </>
  )
}
