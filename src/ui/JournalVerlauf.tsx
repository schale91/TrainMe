// Wochenjournal unter Fortschritt: die letzten Wochen mit den Antworten, damit sich Erholung, Lust und Beschwerden
// neben dem Training ansehen lassen.

import { journalVerlauf } from "../logik/wochenjournal"
import type { Daten } from "../logik/typen"
import { Gruppe, Zeile } from "./ios"
import { GELENK_NAME } from "./texte"

const kurz = (d: string) => d.slice(8, 10) + "." + d.slice(5, 7) + "."
const plusTage = (d: string, n: number) => new Date(Date.parse(d + "T12:00:00Z") + n * 86400000).toISOString().slice(0, 10)

export function JournalVerlauf(props: { daten: Daten }) {
  const liste = journalVerlauf(props.daten, 6)
  if (!liste.length) return null
  return (
    <Gruppe titel="Wochenjournal" fuss="1 ist schlecht, 5 sehr gut. Beim Stress heißt 5: kaum Stress.">
      {liste.map((e) => (
        <Zeile
          key={e.woche}
          titel={kurz(e.woche) + " bis " + kurz(plusTage(e.woche, 6))}
          untertitel={
            e.uebersprungen
              ? "übersprungen"
              : "Erholung " + e.erholung + " · Lust " + e.lust + " · Stress " + e.stress + " · " + (e.stellen && e.stellen.length ? "Beschwerden: " + e.stellen.map((g) => GELENK_NAME[g]).join(", ") : "keine Beschwerden") + (e.notiz ? " · „" + e.notiz + "“" : "")
          }
        />
      ))}
    </Gruppe>
  )
}
