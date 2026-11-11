// Übungsdatenbank: alle Dateien dieses Ordners, je Bereich eine Liste. Der Baustein werkzeuge/uebungstexte.ts teilt sie
// in zwei Pakete: Stammdaten mit Kurztext (sofort da) und die ausführlichen Anleitungen (werden nachgeladen).
import type { Muster, Uebung, UebungInfo } from "../../logik/typen"

import kern from "virtual:uebungen-kern"

export const UEBUNGEN: Uebung[] = kern

// Schlingentrainer heißt im Studio meist TRX: unter beiden Namen findbar
for (const u of UEBUNGEN)
  if (u.geraete.some((g) => g.indexOf("schlingentrainer") >= 0) && !(u.auch || []).some((a) => /trx/i.test(a))) u.auch = [...(u.auch || []), "TRX", "Schlingentrainer"]

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

let texte: Promise<Record<string, UebungInfo>> | null = null

/** Lädt das Paket mit den ausführlichen Anleitungen (einmal). Die App stößt das kurz nach dem Start an. */
export function texteLaden(): Promise<Record<string, UebungInfo>> {
  texte ??= import("virtual:uebungen-texte").then(
    (m) => m.default,
    (fehler) => {
      // Beim nächsten Versuch neu laden (z. B. nach einem Verbindungsabbruch in der Lebenswelt)
      texte = null
      throw fehler
    },
  )
  return texte
}

const LEER: Omit<UebungInfo, "kurz"> = { ausfuehrung: [], atmung: "", fehler: [], vorteile: [], tipps: [] }

/** Vollständige Anleitung einer Übung. Freie Übungen aus dem eigenen Plan haben nur ihren Kurztext. */
export async function infoVon(u: Uebung): Promise<UebungInfo> {
  if (u.id.startsWith(FREI)) return { ...LEER, ...u.info }
  return (await texteLaden())[u.id] ?? { ...LEER, ...u.info }
}
