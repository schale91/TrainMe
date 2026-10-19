# Übungsdatenbank: Regeln für Einträge

Die Datenbank liegt in `src/daten/uebungen/<datei>.ts`, eine Datei je Bereich. Jede Datei exportiert genau eine Liste:

```ts
import type { Uebung } from "../../logik/typen"

export const SCHULTER: Uebung[] = [
  { ... },
]
```

Typen und erlaubte Werte stehen in `src/logik/typen.ts` (`MUSTER`, `GERAETE_IDS`, `MUSKELN`, `Uebung`, `UebungInfo`). Prüfen:

```bash
DATEI=schulter npx vitest run test/uebung_datei.test.ts
```

## Grundsätze

- **Einzelne Übungen statt Sammelbegriffe.** Seitheben mit Kurzhanteln, Seitheben am Kabel einarmig, Seitheben-Isohold, ägyptisches Seitheben, Seitheben vorgebeugt im Sitzen, Lean-away-Seitheben usw. sind je eigene Einträge, weil sie den Muskel unterschiedlich belasten (Kraftkurve, Dehnposition, Stabilität). Gerätevarianten, die sich in der Wirkung unterscheiden, sind eigene Einträge. Reine Griffbreiten-Varianten nur dann, wenn sie wirklich anders wirken (z. B. enges Bankdrücken).
- **Nur echte, etablierte Übungen**, wie sie in Trainerausbildung, Physiotherapie, Sportwissenschaft oder bekannten Programmen (z. B. Jeff Nippard, NSCA, TPI) vorkommen. Nichts erfinden.
- **Deutsch**, klar, freundlich, Du-Form, ganze Sätze. Umlaute und ß schreiben (ä, ö, ü, ß). **Keine Gedankenstriche** (weder — noch –). Stattdessen Komma, Doppelpunkt, Punkt oder „bis“. Bindestriche in Wörtern (Kurzhantel-Rudern) sind erlaubt.
- Namen kurz und eindeutig, so wie man sie im Studio sagt, z. B. „Seitheben am Kabel einarmig“. Gängige englische Namen in `auch` (z. B. `["Cable Lateral Raise"]`), damit die Suche sie findet.
- **Keine Heilversprechen.** Bei Beschwerden auf Abklärung verweisen. Vorteile sachlich und vorsichtig („stärkt“, „verbessert die Beweglichkeit“, „kann helfen“), keine Prozentzahlen ohne Quelle.

## Felder

| Feld | Bedeutung |
|---|---|
| `id` | eindeutig, `a-z0-9_`, sprechend (`seitheben_kabel_einarmig`). Vorhandene ids aus `werkzeuge/uebungen_alt.ts` beibehalten. |
| `muster` | Planungskategorie (siehe `MUSTER`). Dehnungen: `mobilitaet_*`, Ausdauer: `ausdauer_*`. |
| `art` | `kraft`, bei `mobilitaet_*` `mobilitaet`, bei `ausdauer_*` `ausdauer`. |
| `muskeln` / `sekundaer` | aus `MUSKELN`. Bei Dehnungen die gedehnten Muskeln. |
| `geraete` | Liste von Alternativen; jede Gruppe muss komplett vorhanden sein. `[[]]` = ohne Gerät. `[["wand"], []]` = an der Wand oder frei. Hat eine Übung mit und ohne Wand eine deutlich andere Ausführung, zwei Einträge anlegen. |
| `belastung` | `gewicht` (Zusatzlast; dann braucht **jede** Gerätegruppe ein Lastgerät: kurzhantel, langhantel, sz_stange, kettlebell, hantelscheibe, kabelzug, maschine_beine, maschine_oberkoerper, multipresse, medizinball, band), `wiederholungen` (Körpergewicht), `zeit` (Halten, Dehnen, Ausdauer), `distanz` (Sprints, Würfe auf Weite). |
| `hoehe_cm` | nötige Raumhöhe für eine Person um 1,80 m: liegend 130, stehend 200, Arme über Kopf 240, Klimmzug 250, Sprünge 250 bis 270, draußen 0. |
| `gelenke` | Belastung je Gelenk, 1 mäßig, 2 hoch (knie, schulter, ruecken, huefte, handgelenk, ellbogen, sprunggelenk, nacken). Nur eintragen, was nennenswert belastet wird. Wichtig für Schonung bei Beschwerden. |
| `stufe` | 1 einfach, 2 mittel, 3 technisch anspruchsvoll. |
| `sport` | z. B. `["golf", "fussball", "laufen"]`, nur wenn besonders passend. |
| `golf` | 1 hilfreich, 2 wichtig, 3 golfspezifisch. Ab 2 ist `info.golf` Pflicht. |
| `einseitig` | `true`, wenn je Seite ausgeführt wird. |
| `schwerer` | nur bei Körpergewicht: id der nächstschwereren Variante (muss existieren, möglichst in derselben Datei). |
| `hinweis` | ein kurzer Satz, der direkt in der Einheit steht (optional). |

## Info (für das „i“-Fenster, sehr ausführlich)

- `kurz`: 1 bis 2 Sätze, was die Übung ist und wofür.
- `ausfuehrung`: 5 bis 8 Schritte, von Einrichten und Ausgangsposition über die Bewegung bis zum Ende des Satzes. Konkret: Fußstellung, Griff, Winkel, Tempo, Bewegungsumfang, wo man die Spannung spürt.
- `atmung`: wann ein- und ausatmen (bei Dehnungen: ruhig weiteratmen, mit dem Ausatmen tiefer).
- `fehler`: 3 bis 5 typische Fehler, je mit der Korrektur.
- `vorteile`: 3 bis 5 Punkte zur Wirkung (Muskeln, Kraftkurve, Alltag, Sport, Gelenkschonung).
- `tipps`: 2 bis 4 Profi-Tipps (Gewichtswahl, Gefühl, Setup, Kombination).
- `varianten`: wie man es leichter und schwerer macht.
- `sicherheit`: wer aufpassen sollte (z. B. Schulterbeschwerden, Bluthochdruck bei Pressatmung).
- `golf`: bei `golf >= 2`, wie die Übung dem Golfschwung hilft (Rotation, Stabilität im Rückschwung, Schlägerkopfgeschwindigkeit, Haltung, Verletzungsvorbeugung Rücken, Ellbogen, Handgelenk).

## Beispiel

```ts
{
  id: "seitheben_isohold",
  name: "Seitheben-Isohold mit Kurzhanteln",
  auch: ["Lateral Raise Iso Hold", "DB Lateral Raise Iso-Hold"],
  muster: "schulter_seitlich",
  art: "kraft",
  muskeln: ["schulter_seitlich"],
  sekundaer: ["trapez", "schulter_vorn"],
  geraete: [["kurzhantel"]],
  belastung: "zeit",
  hoehe_cm: 200,
  gelenke: { schulter: 1 },
  stufe: 1,
  info: {
    kurz: "Statisches Halten der Kurzhanteln auf Schulterhöhe. Trainiert die seitliche Schulter dort, wo sie am längsten unter Spannung steht, und eignet sich gut als Abschluss nach dynamischem Seitheben.",
    ausfuehrung: [
      "Stell dich hüftbreit hin, Knie locker, je eine leichte Kurzhantel seitlich neben den Oberschenkeln.",
      "Spann den Bauch leicht an und zieh die Schulterblätter sanft nach hinten unten, ohne die Brust herauszustrecken.",
      "Hebe die Arme mit leicht gebeugten Ellbogen seitlich an, bis die Oberarme etwa waagerecht sind. Die Ellbogen führen, die Hände bleiben auf Höhe der Ellbogen oder knapp darunter.",
      "Halte diese Position ruhig, die Daumen zeigen nach vorn oder leicht nach unten, der Nacken bleibt lang.",
      "Halte die vorgegebene Zeit. Wenn die Arme zu sinken beginnen, zähle noch drei Sekunden und senke dann langsam ab.",
      "Lege die Hanteln kontrolliert ab und schüttle die Arme kurz aus."
    ],
    atmung: "Atme während des Haltens ruhig und gleichmäßig weiter, nicht die Luft anhalten.",
    fehler: [
      "Schultern ziehen zu den Ohren: bewusst lang machen und das Gewicht senken.",
      "Arme über die Waagerechte heben: dann übernimmt der Trapezmuskel, auf Schulterhöhe bleiben.",
      "Oberkörper lehnt sich nach hinten: Bauch anspannen, eventuell mit dem Rücken an eine Wand stellen.",
      "Zu schwere Hanteln: Die Position muss mindestens 20 Sekunden sauber haltbar sein."
    ],
    vorteile: [
      "Lange Spannungszeit für die seitliche Schulter bei geringer Gelenkbelastung.",
      "Verbessert die Kraftausdauer und Stabilität der Schulter in Abduktion.",
      "Ermöglicht nach dem dynamischen Seitheben weitere Reize ohne Schwung.",
      "Gut steuerbar, auch für Einsteiger."
    ],
    tipps: [
      "Stell dir vor, du drückst die Hanteln nach außen zu den Wänden statt nach oben.",
      "Etwa 30 bis 50 Prozent des Gewichts, das du beim normalen Seitheben nimmst, reichen.",
      "Als Finisher direkt nach dem letzten Satz Seitheben besonders wirksam."
    ],
    varianten: "Leichter: mit Band oder nur einem Arm. Schwerer: länger halten oder am Ende kleine Pulsbewegungen.",
    sicherheit: "Bei Schulterschmerzen in der Abduktion nur bis unter Schulterhöhe heben oder auslassen."
  }
}
```
