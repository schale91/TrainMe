// Übungsdatenbank: alle Dateien dieses Ordners, je Bereich eine Liste.
import type { Muster, Uebung } from "../../logik/typen"

const module = import.meta.glob<Record<string, unknown>>(["./*.ts", "!./index.ts"], { eager: true })

export const UEBUNGEN: Uebung[] = Object.keys(module)
  .sort()
  .flatMap((pfad) => Object.values(module[pfad]).filter(Array.isArray).flat() as Uebung[])

const NACH_ID = new Map(UEBUNGEN.map((u) => [u.id, u]))

/** Freie Übungen aus einem eigenen Plan heißen „frei:<Name>“: Sie haben keinen Eintrag, aber einen Verlauf. */
export const FREI = "frei:"

/** Bewegungsmuster einer freien Übung grob aus dem Namen (für Tausch und Statistik). */
const MUSTER_NACH_NAME: [RegExp, Muster][] = [
  [/squat|kniebeuge|beinpresse|leg press|hack/i, "kniebeuge"],
  [/deadlift|kreuzheben|rack pull|rdl|hip thrust|good morning|hüftstrecken|glute/i, "hueftstreckung"],
  [/lunge|ausfallschritt|split squat|step.?up|einbeinig|single.?leg/i, "einbeinig"],
  [/overhead press|schulterdrücken|military|ohp/i, "druecken_vertikal"],
  [/bench|bankdrücken|push.?up|liegestütz|\bdip|chest press|brustpresse/i, "druecken_horizontal"],
  [/pulldown|latzug|pull.?up|klimmzug|chin/i, "ziehen_vertikal"],
  [/row|rudern/i, "ziehen_horizontal"],
  [/\bfly|flye|butterfly|crossover/i, "brust_iso"],
  [/lateral|seitheben/i, "schulter_seitlich"],
  [/face pull|reverse fly|rear delt/i, "schulter_gesund"],
  [/shrug|trapez/i, "trapez"],
  [/nordic|ham curl|beinbeuger|leg curl/i, "hamstring_praevention"],
  [/curl|bizeps/i, "bizeps"],
  [/tricep|trizeps|pushdown|extension|skull/i, "trizeps"],
  [/calf|wade/i, "wade"],
  [/nacken|neck/i, "nacken"],
  [/grip|griff|farmer|hang/i, "griff"],
]

function freieUebung(id: string): Uebung {
  const name = id.slice(FREI.length)
  return {
    id,
    name,
    muster: MUSTER_NACH_NAME.find(([re]) => re.test(name))?.[1] ?? "rumpf",
    art: "kraft",
    muskeln: [],
    geraete: [[]],
    belastung: "gewicht",
    hoehe_cm: 0,
    gelenke: {},
    stufe: 2,
    info: { kurz: "Übung aus deinem eigenen Plan. In der Übungsdatenbank gibt es dazu keine Anleitung.", ausfuehrung: [], atmung: "", fehler: [], vorteile: [], tipps: [] },
  }
}

export function uebung(id: string): Uebung | undefined {
  return NACH_ID.get(id) ?? (id.startsWith(FREI) && id.length > FREI.length ? freieUebung(id) : undefined)
}
