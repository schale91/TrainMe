// Fitness-Check unter „Fortschritt“: Karte mit Kurzfassung und Blatt mit den Bereichen, deinen Angaben und Feldern für
// selbst gemessene Werte (siehe logik/fitness.ts).

import { useEffect, useMemo, useState } from "react";
import {
  MESSWERTE,
  alterAm,
  fitnessBewertung,
  fitnessUebersicht,
  letzter,
  uhrMerken,
  wertEintragen,
  type Kennzahl,
  type UhrWerte,
} from "../logik/fitness";
import { heute } from "../logik/plan";
import { rehaAktiv } from "../logik/reha";
import type { Daten, Fitness, FitnessWert } from "../logik/typen";
import { Blatt, Gruppe, Icon } from "./ios";
import { anfrage } from "./lebenswelt";
import { Sym } from "./symbole";
import { datumText } from "./texte";

type Aendern = (f: (d: Daten) => void) => void;

const STUFE: Record<string, string> = {
  gut: "gut",
  mittel: "mittel",
  ausbaufaehig: "ausbaufähig",
};

/** Werte der Uhr aus der Lebenswelt holen; ohne Lebenswelt oder in der Fitness-Welt bleibt es bei null */
function useUhr(): UhrWerte | null {
  const [uhr, setUhr] = useState<UhrWerte | null>(null);
  useEffect(() => {
    let aktiv = true;
    void anfrage("GET", "/api/lebenswelt/garmin/heute").then((r) => {
      const w = (r.daten as { werte?: UhrWerte } | null)?.werte;
      if (aktiv && r.status === 200 && w) setUhr(w);
    });
    return () => {
      aktiv = false;
    };
  }, []);
  return uhr;
}

/** Karte ganz oben unter „Fortschritt“ */
export function FitnessKarte(props: { daten: Daten; aendern: Aendern }) {
  const [offen, setOffen] = useState(false);
  const uhr = useUhr();
  const tag = heute();
  const reha = !!props.daten.profil && rehaAktiv(props.daten.profil);
  const bereiche = useMemo(
    () => fitnessBewertung(props.daten, uhr, tag, reha),
    [props.daten, uhr, tag, reha],
  );
  const u = fitnessUebersicht(bereiche);
  // VO2max und Fitnessalter der Uhr für den Verlauf merken
  const { aendern, daten } = props;
  useEffect(() => {
    if (!uhr) return;
    const probe = { fitness: daten.fitness } as Daten;
    if (uhrMerken(probe, uhr, tag)) aendern((d) => void uhrMerken(d, uhr, tag));
  }, [uhr, tag, aendern, daten.fitness]);
  const teile = [
    u.gut ? u.gut + " gut" : "",
    u.mittel ? u.mittel + " mittel" : "",
    u.ausbaufaehig ? u.ausbaufaehig + " ausbaufähig" : "",
  ].filter(Boolean);
  return (
    <>
      <button
        type="button"
        className="mobilkarte"
        onClick={() => setOffen(true)}
      >
        <Sym name="herz" groesse={22} />
        <span>
          <b>Fitness-Check</b>
          <small>
            {teile.length ? teile.join(" · ") : "Noch kaum Werte"}
            {u.fehlt
              ? " · " +
                u.fehlt +
                (u.fehlt === 1 ? " Wert fehlt" : " Werte fehlen")
              : ""}
          </small>
        </span>
        <Icon name="weiter" groesse={16} />
      </button>
      <FitnessBlatt
        offen={offen}
        schliessen={() => setOffen(false)}
        daten={props.daten}
        aendern={props.aendern}
        uhr={uhr}
        reha={reha}
      />
    </>
  );
}

function Kennzeile(props: { k: Kennzahl }) {
  const k = props.k;
  return (
    <div className={"fitzeile" + (k.wert ? "" : " fehlt")}>
      <span className="fitkopf">
        <b>{k.name}</b>
        {k.stufe ? (
          <span className={"fitstufe " + k.stufe}>{STUFE[k.stufe]}</span>
        ) : null}
      </span>
      {k.wert ? <span className="fitwert">{k.wert}</span> : null}
      <small>{k.text}</small>
    </div>
  );
}

/** Zahl mit Komma oder Punkt lesen */
const lies = (t: string) => {
  const n = Number(t.trim().replace(",", "."));
  return t.trim() && isFinite(n) ? n : null;
};

function Eingabe(props: {
  label: string;
  einheit: string;
  min: number;
  max: number;
  wert?: number;
  speichern: (n: number) => void;
  knopf?: string;
}) {
  const [text, setText] = useState("");
  const n = lies(text);
  const gueltig = n !== null && n >= props.min && n <= props.max;
  const los = () => {
    if (!gueltig) return;
    props.speichern(n!);
    setText("");
  };
  return (
    <div className="koerpereingabe fiteingabe">
      <input
        aria-label={props.label + " in " + props.einheit}
        inputMode="decimal"
        placeholder={
          props.wert !== undefined
            ? String(props.wert).replace(".", ",") + " " + props.einheit
            : props.einheit
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && los()}
      />
      <button type="button" className="knopf" disabled={!gueltig} onClick={los}>
        {props.knopf || "Eintragen"}
      </button>
    </div>
  );
}

export function FitnessBlatt(props: {
  offen: boolean;
  schliessen: () => void;
  daten: Daten;
  aendern: Aendern;
  uhr: UhrWerte | null;
  reha: boolean;
}) {
  const tag = heute();
  const f: Fitness = props.daten.fitness || {};
  const bereiche = useMemo(
    () => fitnessBewertung(props.daten, props.uhr, tag, props.reha),
    [props.daten, props.uhr, tag, props.reha],
  );
  const angabe = (
    feld: "geburtsjahr" | "groesse_cm" | "geschlecht",
    w: number | "m" | "w",
  ) =>
    props.aendern((d) => {
      d.fitness = { ...(d.fitness || {}), [feld]: w };
    });
  const messen = (id: FitnessWert, n: number) =>
    props.aendern((d) => wertEintragen(d, id, n, tag));
  const alter = alterAm(f.geburtsjahr, tag);
  const jahr = Number(tag.slice(0, 4));
  const felder = MESSWERTE.filter(
    (m) =>
      !(props.reha && m.reha === false) &&
      !(m.nurOhneUhr && props.uhr?.[m.id as "vo2max" | "fitnessalter"]),
  );
  return (
    <Blatt
      offen={props.offen}
      onClose={props.schliessen}
      titel="Fitness-Check"
      hoch
    >
      <p className="infokurz">
        Eine Einordnung gibt es nur, wo es belegte Grenzwerte gibt. Alles andere
        zählt im Vergleich mit dir selbst: Trag die Werte alle paar Monate neu
        ein.
      </p>
      {bereiche.map((b) => (
        <Gruppe key={b.id} titel={b.name}>
          {b.kennzahlen.map((k) => (
            <Kennzeile key={k.id} k={k} />
          ))}
        </Gruppe>
      ))}
      <Gruppe
        titel="Deine Angaben"
        fuss="Alter und Geschlecht brauchen die Vergleiche (Fitnessalter, Schritte, Liegestütze), die Größe das Verhältnis von Taille zu Größe."
      >
        <div className="fitzeile">
          <span className="fitkopf">
            <b>Geburtsjahr</b>
            {f.geburtsjahr ? (
              <span className="fitwert">
                {f.geburtsjahr +
                  (alter !== null ? " · " + alter + " Jahre" : "")}
              </span>
            ) : null}
          </span>
          <Eingabe
            label="Geburtsjahr"
            einheit="Jahr"
            min={jahr - 100}
            max={jahr - 10}
            wert={f.geburtsjahr}
            speichern={(n) => angabe("geburtsjahr", Math.round(n))}
            knopf="Speichern"
          />
        </div>
        <div className="fitzeile">
          <span className="fitkopf">
            <b>Geschlecht</b>
          </span>
          <div className="chips" role="radiogroup" aria-label="Geschlecht">
            {(
              [
                ["m", "Mann"],
                ["w", "Frau"],
              ] as const
            ).map(([id, name]) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={f.geschlecht === id}
                className={"chip" + (f.geschlecht === id ? " an" : "")}
                onClick={() => angabe("geschlecht", id)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="fitzeile">
          <span className="fitkopf">
            <b>Größe</b>
            {f.groesse_cm ? (
              <span className="fitwert">{f.groesse_cm} cm</span>
            ) : null}
          </span>
          <Eingabe
            label="Größe"
            einheit="cm"
            min={100}
            max={230}
            wert={f.groesse_cm}
            speichern={(n) => angabe("groesse_cm", Math.round(n))}
            knopf="Speichern"
          />
        </div>
      </Gruppe>
      <Gruppe
        titel="Messwerte eintragen"
        fuss="Ein neuer Wert gilt ab heute; am selben Tag ersetzt er den alten. Das Gewicht trägst du unter Fortschritt, Gewicht ein, die Beweglichkeit über die Tests unter Mobilität."
      >
        {felder.map((m) => {
          const l = letzter(f, m.id);
          return (
            <div key={m.id} className="fitzeile">
              <span className="fitkopf">
                <b>{m.name}</b>
                {l ? (
                  <span className="fitwert">
                    {String(l.wert).replace(".", ",")} {m.einheit} ·{" "}
                    {datumText(l.datum)}
                  </span>
                ) : null}
              </span>
              <small>{m.anleitung}</small>
              <Eingabe
                label={m.name}
                einheit={m.einheit}
                min={m.min}
                max={m.max}
                speichern={(n) => messen(m.id, n)}
              />
            </div>
          );
        })}
      </Gruppe>
      <p className="gruppenfuss">
        Quellen: Paluch et al. 2022 (Schritte, Lancet Public Health), Zhang et
        al. 2016 (Ruhepuls, CMAJ), Watson et al. 2015 (Schlaf, Sleep), NICE 2022
        (Taille zu Größe), Yang et al. 2019 (Liegestütze, JAMA Netw Open), WHO
        2020 (Bewegung). Das Fitnessalter berechnet die Uhr aus der VO2max. Kein
        Ersatz für eine ärztliche Untersuchung.
      </p>
    </Blatt>
  );
}
