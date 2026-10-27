// Bewegungen der Dehnfigur ohne Grafik: Haltungen als Gelenkwinkel, Spiegeln auf die andere Seite und der Ablauf
// über die Zeit (langsam hinein, halten, lösen; bei Wiederholungen im echten Tempo). Die Grafik liegt in
// src/ui/dehnfigur.ts, die Übungen in src/daten/dehnungen.ts.
//
// Winkel in Grad, aus Sicht der Figur:
// - becken: Lage im Raum. pos [seitlich, Höhe des Hüftgelenks, vorn] in Metern, dreh [kippen nach vorn, drehen nach
//   links, neigen nach links]. Rückenlage: kippen -90, Bauchlage +90, Seitlage links: neigen -90.
// - lws, bws, hals: [beugen nach vorn, neigen nach links, drehen nach links]; kopf: [nicken]
// - schulterblatt_l/r: [heben, nach vorn schieben]
// - schulter_l/r: [beugen (Arm nach vorn und oben), abspreizen, außen drehen, waagerecht öffnen]
// - ellbogen_l/r: [beugen, Unterarm einwärts drehen]; hand_l/r: [strecken (Handrücken zum Unterarm), zur Daumenseite]
// - huefte_l/r: [beugen, abspreizen, innen drehen]; knie_l/r: [beugen]
// - fuss_l/r: [anziehen (Zehen zum Schienbein), nach innen kanten]; zehen_l/r: [strecken]
// - finger_l/r: [beugen (90 = Faust), strecken nach hinten]

export type Gelenk =
  | "lws"
  | "bws"
  | "hals"
  | "kopf"
  | "schulterblatt_l"
  | "schulterblatt_r"
  | "schulter_l"
  | "schulter_r"
  | "ellbogen_l"
  | "ellbogen_r"
  | "hand_l"
  | "hand_r"
  | "huefte_l"
  | "huefte_r"
  | "knie_l"
  | "knie_r"
  | "fuss_l"
  | "fuss_r"
  | "zehen_l"
  | "zehen_r"
  | "finger_l"
  | "finger_r"

export type V3 = [number, number, number]
export type Winkel = Partial<Record<Gelenk, number[]>>

export interface Haltung {
  /** Lage des Beckens; ohne pos steht die Figur und wird auf den Boden gesetzt */
  pos?: V3
  dreh?: V3
  g: Winkel
  /** false: Höhe kommt aus pos (z. B. Sitzen auf der Bank), sonst sitzt der tiefste Punkt auf dem Boden */
  boden?: boolean
}

/** Geräte und Hilfsmittel in der Szene, an Körperpunkten ausgerichtet */
export type Hilfsmittel =
  | { art: "wand"; an: Punkt; richtung: "vorn" | "hinten" | "links" | "rechts" | "unten" }
  | { art: "bank" | "stuhl" | "box"; unter: Punkt; hoehe: number }
  | { art: "stab"; von: Punkt; bis: Punkt }
  | { art: "band"; von: Punkt; bis: Punkt }
  | { art: "rolle" | "ball" | "kissen"; unter: Punkt; laengs?: boolean }
  | { art: "tuer"; an: Punkt }
  | { art: "stange"; an: Punkt }
  | { art: "hantel"; an: Punkt }

export type Punkt =
  | "hand_l"
  | "hand_r"
  | "haende"
  | "fuss_l"
  | "fuss_r"
  | "ferse_l"
  | "ferse_r"
  | "knie_l"
  | "knie_r"
  | "becken"
  | "gesaess"
  | "ruecken"
  | "bws"
  | "kopf"
  | "unterarm_l"
  | "unterarm_r"
  | "ellbogen_l"
  | "ellbogen_r"
  | "oberschenkel_l"
  | "oberschenkel_r"
  | "wade_l"
  | "wade_r"
  | "schulter_l"
  | "schulter_r"

export type Ansicht = "vorn" | "seite" | "schraeg" | "hinten" | "oben" | "seite_links"

export interface Schritt {
  /** Haltung am Ende des Schritts */
  h: Haltung
  /** Dauer in Sekunden; halten: so lange bleibt die Haltung stehen */
  s: number
  halten?: boolean
  /** Anzeige während des Schritts, z. B. „Anspannen“ */
  text?: string
}

export interface Dehnung {
  ansicht: Ansicht
  /** Ausgangshaltung */
  start: Haltung
  /**
   * halten: hinein, halten (Sekunden aus der Vorgabe), lösen. wdh: Wiederholungen hin und zurück im Tempo.
   * folge: feste Abfolge von Schritten (Flows, Anspannen und Entspannen).
   */
  art: "halten" | "wdh" | "folge"
  /** Endstellung (halten, wdh) */
  ziel?: Haltung
  /** Abfolge (folge) */
  schritte?: Schritt[]
  /** Sekunden hinein und zurück; bei wdh je Richtung */
  ein?: number
  aus?: number
  /** Halten in der Endstellung: Standard für halten 30 s, für wdh 0 bis 2 s */
  halten?: number
  /** beide Seiten nacheinander (gespiegelt) */
  seiten?: boolean
  hilfsmittel?: Hilfsmittel[]
  /** Kurzer Hinweis unter der Figur */
  hinweis?: string
}

const GELENKE: Gelenk[] = ["lws", "bws", "hals", "kopf", "schulterblatt_l", "schulterblatt_r", "schulter_l", "schulter_r", "ellbogen_l", "ellbogen_r", "hand_l", "hand_r", "huefte_l", "huefte_r", "knie_l", "knie_r", "fuss_l", "fuss_r", "zehen_l", "zehen_r", "finger_l", "finger_r"]

export const NULL: Haltung = { g: {} }

/** Haltung ergänzen: b überschreibt a gelenkweise. */
export function mit(a: Haltung, b: Partial<Haltung> & { g?: Winkel }): Haltung {
  return { ...a, ...b, g: { ...a.g, ...(b.g || {}) } }
}

const wert = (w: Winkel, g: Gelenk, i: number) => w[g]?.[i] ?? 0

/** Zwischen zwei Haltungen überblenden (u von 0 bis 1). */
export function mische(a: Haltung, b: Haltung, u: number): Haltung {
  const g: Winkel = {}
  for (const k of GELENKE) {
    const n = Math.max(a.g[k]?.length ?? 0, b.g[k]?.length ?? 0)
    if (!n) continue
    g[k] = Array.from({ length: n }, (_, i) => wert(a.g, k, i) + (wert(b.g, k, i) - wert(a.g, k, i)) * u)
  }
  const v = (x: V3 | undefined, y: V3 | undefined): V3 | undefined => (x || y ? [0, 1, 2].map((i) => (x?.[i] ?? y?.[i] ?? 0) + ((y?.[i] ?? x?.[i] ?? 0) - (x?.[i] ?? y?.[i] ?? 0)) * u) as V3 : undefined)
  return { pos: v(a.pos, b.pos), dreh: v(a.dreh, b.dreh), g, boden: u < 0.5 ? a.boden : b.boden }
}

/** Gegenseite: links und rechts tauschen, seitliche Bewegungen umkehren. */
export function spiegel(h: Haltung): Haltung {
  const g: Winkel = {}
  for (const [k, w] of Object.entries(h.g) as [Gelenk, number[]][]) {
    if (!w) continue
    const ziel = (k.endsWith("_l") ? k.slice(0, -2) + "_r" : k.endsWith("_r") ? k.slice(0, -2) + "_l" : k) as Gelenk
    // Wirbelsäule und Hals: Neigen und Drehen wechseln die Richtung
    g[ziel] = k === "lws" || k === "bws" || k === "hals" ? [w[0] ?? 0, -(w[1] ?? 0), -(w[2] ?? 0)] : [...w]
  }
  return { ...h, g, pos: h.pos ? [-h.pos[0], h.pos[1], h.pos[2]] : undefined, dreh: h.dreh ? [h.dreh[0], -h.dreh[1], -h.dreh[2]] : undefined }
}

/** Weiches Anfahren und Abbremsen, wie bei einer kontrollierten Bewegung. */
const weich = (x: number) => (1 - Math.cos(Math.PI * Math.min(1, Math.max(0, x)))) / 2

export interface Stand {
  haltung: Haltung
  /** Phase für die Anzeige */
  text: string
  /** Restsekunden der Phase (zum Mitzählen), sonst null */
  rest: number | null
  /** gespiegelt (andere Seite) */
  gespiegelt: boolean
  /** Atmung 0 bis 1 */
  atem: number
}

/** Die Abfolge einer Dehnung als Schritte, eine Seite. haltenS: Haltezeit aus der Vorgabe. */
export function ablauf(d: Dehnung, haltenS?: number): Schritt[] {
  if (d.art === "folge") return d.schritte || []
  const ziel = d.ziel || d.start
  if (d.art === "halten") {
    const h = haltenS ?? d.halten ?? 30
    return [
      { h: d.start, s: 1.5, halten: true, text: "Ausgangsstellung" },
      { h: ziel, s: d.ein ?? 4, text: "Langsam hinein" },
      { h: ziel, s: h, halten: true, text: "Halten, ruhig atmen" },
      { h: d.start, s: d.aus ?? 3, text: "Lösen" },
    ]
  }
  // Wiederholungen: hin, kurz halten, zurück
  return [
    { h: ziel, s: d.ein ?? 2, text: "Hin" },
    ...(d.halten ? [{ h: ziel, s: d.halten, halten: true, text: "Kurz halten" }] : []),
    { h: d.start, s: d.aus ?? d.ein ?? 2, text: "Zurück" },
  ]
}

/** Dauer einer Seite in Sekunden. */
export function dauer(d: Dehnung, haltenS?: number): number {
  return ablauf(d, haltenS).reduce((n, s) => n + s.s, 0)
}

/** Stand der Dehnung zur Zeit t (Sekunden, läuft in Schleife; mit seiten abwechselnd links und rechts). */
export function standZu(d: Dehnung, t: number, haltenS?: number): Stand {
  const schritte = ablauf(d, haltenS)
  const eine = Math.max(0.1, schritte.reduce((n, s) => n + s.s, 0))
  const runde = Math.floor(t / eine)
  const gespiegelt = !!d.seiten && runde % 2 === 1
  let x = t - runde * eine
  let vorher = d.art === "folge" ? schritte[schritte.length - 1]?.h || d.start : d.start
  let haltung = vorher
  let text = ""
  let rest: number | null = null
  for (const s of schritte) {
    if (x <= s.s) {
      haltung = s.halten ? s.h : mische(vorher, s.h, weich(x / s.s))
      text = s.text || ""
      rest = s.halten && s.s >= 3 ? Math.ceil(s.s - x) : null
      break
    }
    x -= s.s
    vorher = s.h
    haltung = s.h
  }
  // Ruhige Atmung, etwa 5 Sekunden je Atemzug
  const atem = (1 - Math.cos((2 * Math.PI * t) / 5)) / 2
  return { haltung: gespiegelt ? spiegel(haltung) : haltung, text: (d.seiten ? (gespiegelt ? "Andere Seite: " : "Erste Seite: ") : "") + text, rest, gespiegelt, atem }
}
