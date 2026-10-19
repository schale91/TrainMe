// Abenteuer: Training bringt Kisten, Kisten bringen Münzen und Karten, Karten und Münzen machen den Helden stärker.
// Gekämpft wird automatisch, höchstens 30 Sekunden, ohne Steuerung. Wer stärker wird, kommt weiter.
//
// Kisten sind an den klassischen Kistenzyklus von Clash Royale angelehnt (240 Kisten: 180 Silber, 52 Gold, 4 Riesen,
// 4 Magisch; dazu seltene Sonderkisten außerhalb des Zyklus). Quelle der Verteilung: Spielerseiten, Supercell hat den
// Zyklus nie offiziell veröffentlicht. Hier ist er nur Vorbild, keine Kopie.

import type { Kiste, Kistenart, Slot, Spielstand } from "./typen"
import { stufe } from "./spiel"

// ---------- Zufall ----------

/** Kleiner, reproduzierbarer Zufallsgenerator (mulberry32). */
export function zufall(saat: number): () => number {
  let a = saat >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ---------- Gegenstände ----------

export type Seltenheit = "gewoehnlich" | "selten" | "episch" | "legendaer"

export interface Gegenstand {
  id: string
  name: string
  slot: Slot
  seltenheit: Seltenheit
  /** Werte auf Stufe 1 */
  angriff: number
  verteidigung: number
  leben: number
  /** Angriffe pro Sekunde (nur Waffen) */
  tempo?: number
  /** Preis im Laden (nur gewöhnliche und seltene), sonst nur über Karten */
  preis?: number
  symbol: string
  text: string
}

export const GEGENSTAENDE: Gegenstand[] = [
  { id: "holzschwert", name: "Holzschwert", slot: "waffe", seltenheit: "gewoehnlich", angriff: 7, verteidigung: 0, leben: 0, tempo: 1.2, preis: 100, symbol: "🗡️", text: "Leicht und schnell. Für den Anfang genau richtig." },
  { id: "eisenschwert", name: "Eisenschwert", slot: "waffe", seltenheit: "gewoehnlich", angriff: 12, verteidigung: 0, leben: 0, tempo: 1.1, preis: 350, symbol: "⚔️", text: "Solide Klinge aus der Dorfschmiede." },
  { id: "streitaxt", name: "Streitaxt", slot: "waffe", seltenheit: "selten", angriff: 20, verteidigung: 0, leben: 0, tempo: 0.8, preis: 900, symbol: "🪓", text: "Langsam, aber jeder Treffer sitzt." },
  { id: "kriegshammer", name: "Kriegshammer", slot: "waffe", seltenheit: "selten", angriff: 26, verteidigung: 2, leben: 0, tempo: 0.65, symbol: "🔨", text: "Zerlegt Rüstungen. Nur aus Kisten." },
  { id: "flammenklinge", name: "Flammenklinge", slot: "waffe", seltenheit: "episch", angriff: 30, verteidigung: 0, leben: 0, tempo: 1.15, symbol: "🔥", text: "Brennt bei jedem Treffer nach." },
  { id: "donnerspeer", name: "Donnerspeer", slot: "waffe", seltenheit: "legendaer", angriff: 42, verteidigung: 3, leben: 20, tempo: 1.0, symbol: "⚡", text: "Ein Blitz in Speerform." },
  { id: "lederwams", name: "Lederwams", slot: "ruestung", seltenheit: "gewoehnlich", angriff: 0, verteidigung: 3, leben: 25, preis: 150, symbol: "🦺", text: "Besser als ein T-Shirt." },
  { id: "kettenhemd", name: "Kettenhemd", slot: "ruestung", seltenheit: "selten", angriff: 0, verteidigung: 7, leben: 50, preis: 1000, symbol: "🛡️", text: "Klirrt, schützt aber gut." },
  { id: "plattenruestung", name: "Plattenrüstung", slot: "ruestung", seltenheit: "episch", angriff: 0, verteidigung: 13, leben: 90, symbol: "🥋", text: "Schwer wie eine Kniebeuge mit 140 kg." },
  { id: "drachenschuppen", name: "Drachenschuppen", slot: "ruestung", seltenheit: "legendaer", angriff: 4, verteidigung: 18, leben: 140, symbol: "🐉", text: "Aus den Schuppen eines alten Drachen." },
  { id: "lederkappe", name: "Lederkappe", slot: "helm", seltenheit: "gewoehnlich", angriff: 0, verteidigung: 1, leben: 15, preis: 80, symbol: "🧢", text: "Hält wenigstens die Sonne ab." },
  { id: "eisenhelm", name: "Eisenhelm", slot: "helm", seltenheit: "selten", angriff: 0, verteidigung: 4, leben: 30, preis: 700, symbol: "⛑️", text: "Ordentlicher Kopfschutz." },
  { id: "kronenhelm", name: "Kronenhelm", slot: "helm", seltenheit: "episch", angriff: 3, verteidigung: 7, leben: 50, symbol: "👑", text: "Für echte Könige des Studios." },
  { id: "holzschild", name: "Holzschild", slot: "schild", seltenheit: "gewoehnlich", angriff: 0, verteidigung: 2, leben: 20, preis: 120, symbol: "🪵", text: "Ein Brett mit Griff." },
  { id: "eisenschild", name: "Eisenschild", slot: "schild", seltenheit: "selten", angriff: 0, verteidigung: 6, leben: 35, preis: 800, symbol: "🛡️", text: "Fängt fast alles ab." },
  { id: "turmschild", name: "Turmschild", slot: "schild", seltenheit: "episch", angriff: 0, verteidigung: 10, leben: 70, symbol: "🏰", text: "Man kann sich dahinter verstecken." },
  { id: "wolf", name: "Wolf", slot: "begleiter", seltenheit: "selten", angriff: 8, verteidigung: 0, leben: 0, symbol: "🐺", text: "Beißt mit, sobald der Kampf beginnt." },
  { id: "falke", name: "Falke", slot: "begleiter", seltenheit: "episch", angriff: 12, verteidigung: 2, leben: 0, symbol: "🦅", text: "Greift aus der Luft an." },
  { id: "drachenjunges", name: "Drachenjunges", slot: "begleiter", seltenheit: "legendaer", angriff: 20, verteidigung: 3, leben: 30, symbol: "🐲", text: "Klein, aber spuckt Feuer." },
]

export const gegenstand = (id: string) => GEGENSTAENDE.find((g) => g.id === id)

/** Karten und Münzen für die nächste Stufe (angelehnt an das Aufwerten in Clash Royale). */
export const AUFWERTEN: Record<Seltenheit, { karten: number[]; muenzen: number[] }> = {
  gewoehnlich: { karten: [2, 4, 10, 20, 50, 100, 200, 400], muenzen: [5, 20, 50, 150, 400, 1000, 2000, 4000] },
  selten: { karten: [2, 4, 10, 20, 50, 100, 200], muenzen: [50, 150, 400, 1000, 2000, 4000, 8000] },
  episch: { karten: [2, 4, 10, 20, 40], muenzen: [400, 1000, 2000, 4000, 8000] },
  legendaer: { karten: [2, 4, 10, 20], muenzen: [5000, 10000, 20000, 40000] },
}

/** Karten zum Freischalten eines Gegenstands, den es nicht im Laden gibt (oder den man nicht kaufen will). */
export const FREISCHALTEN: Record<Seltenheit, number> = { gewoehnlich: 10, selten: 8, episch: 4, legendaer: 1 }

/** Werte eines Gegenstands auf einer Stufe: je Stufe 10 % mehr. */
export function werte(g: Gegenstand, st: number) {
  const f = Math.pow(1.15, Math.max(0, st - 1))
  return { angriff: g.angriff * f, verteidigung: g.verteidigung * f, leben: g.leben * f }
}

export function aufwertenKosten(g: Gegenstand, st: number): { karten: number; muenzen: number } | null {
  const t = AUFWERTEN[g.seltenheit]
  if (st < 1 || st > t.karten.length) return null
  return { karten: t.karten[st - 1], muenzen: t.muenzen[st - 1] }
}

// ---------- Held ----------

export interface Kaempfer {
  name: string
  leben: number
  angriff: number
  verteidigung: number
  /** Angriffe pro Sekunde */
  tempo: number
  /** Schaden des Begleiters pro Sekunde */
  begleiter: number
}

export function held(s: Spielstand): Kaempfer {
  const lv = stufe(s.xp).stufe
  const k: Kaempfer = { name: "Held", leben: 86 + 14 * lv, angriff: 2.6 + 1.0 * lv, verteidigung: 0.8 + 0.35 * lv, tempo: 1, begleiter: 0 }
  for (const slot of Object.keys(s.ausgeruestet) as Slot[]) {
    const id = s.ausgeruestet[slot]
    const g = id ? gegenstand(id) : undefined
    const st = id ? s.inventar[id]?.stufe || 0 : 0
    if (!g || st < 1) continue
    const w = werte(g, st)
    if (g.slot === "begleiter") k.begleiter += w.angriff * 0.5
    else k.angriff += w.angriff
    k.verteidigung += w.verteidigung
    k.leben += w.leben
    if (g.tempo) k.tempo = g.tempo
  }
  return k
}

// ---------- Welten und Gegner ----------

export const WELTEN = [
  { name: "Grüne Wiese", himmel: ["#7ec8f7", "#d6f0ff"], boden: "#5fae4b", huegel: "#4a8f3c", gegner: ["Schleim", "Wildschwein", "Riesenkäfer"] },
  { name: "Dunkler Wald", himmel: ["#33506b", "#7fa1b8"], boden: "#3e6b35", huegel: "#2b4d29", gegner: ["Wolf", "Goblin", "Waldgeist"] },
  { name: "Kristallhöhle", himmel: ["#1d1838", "#3c2f6e"], boden: "#4d4566", huegel: "#2f2a48", gegner: ["Fledermaus", "Skelett", "Steingolem"] },
  { name: "Wüstenburg", himmel: ["#f7c873", "#ffe9b8"], boden: "#d9a85a", huegel: "#b88942", gegner: ["Skorpion", "Mumie", "Sandwurm"] },
  { name: "Vulkan", himmel: ["#5a1e1e", "#c2532b"], boden: "#3b2a26", huegel: "#26191a", gegner: ["Feuerkobold", "Lavatroll", "Drache"] },
]

export const LEVEL_JE_WELT = 10

export interface Gegner extends Kaempfer {
  art: string
  boss: boolean
  welt: number
}

export function gegnerFuer(level: number): Gegner {
  const welt = Math.min(WELTEN.length - 1, Math.floor((level - 1) / LEVEL_JE_WELT))
  const imWelt = (level - 1) % LEVEL_JE_WELT
  const boss = imWelt === LEVEL_JE_WELT - 1
  const w = WELTEN[welt]
  const art = boss ? w.gegner[2] : w.gegner[imWelt % 2]
  // erst zügig, später langsamer steigend, damit Fortschritt auch nach Monaten spürbar bleibt
  const n = level - 1
  const f = 1 + 0.2 * n + 0.004 * n * n
  return {
    name: (boss ? "Boss: " : "") + art,
    art,
    boss,
    welt,
    leben: Math.round(110 * f * (boss ? 1.3 : 1)),
    angriff: 5 * (1 + 0.1 * n + 0.002 * n * n) * (boss ? 1.08 : 1),
    verteidigung: 1 + 0.12 * n,
    tempo: boss ? 0.8 : 1,
    begleiter: 0,
  }
}

// ---------- Kampf ----------

export const KAMPF_MAX_S = 30

export interface Treffer {
  t: number
  von: "held" | "gegner" | "begleiter"
  schaden: number
  krit: boolean
  heldLeben: number
  gegnerLeben: number
}

export interface Kampf {
  sieg: boolean
  dauer: number
  treffer: Treffer[]
  held: Kaempfer
  gegner: Gegner
  /** Grund bei Niederlage */
  grund?: "besiegt" | "zeit"
}

/** Simuliert einen Kampf in Zehntelsekunden. Reproduzierbar über die Saat. */
export function kaempfen(h: Kaempfer, g: Gegner, saat: number): Kampf {
  const r = zufall(saat)
  let hl = h.leben
  let gl = g.leben
  const treffer: Treffer[] = []
  const schaden = (a: number, v: number) => {
    const krit = r() < 0.12
    const roh = a * (0.85 + r() * 0.3) * (krit ? 1.8 : 1)
    return { s: Math.max(1, Math.round(roh - v * 0.6)), krit }
  }
  let naechsterHeld = 0.6
  let naechsterGegner = 1.0
  let naechsterBegleiter = 0.9
  for (let t = 0; t <= KAMPF_MAX_S + 1e-9; t = Math.round((t + 0.1) * 10) / 10) {
    if (t >= naechsterHeld) {
      const x = schaden(h.angriff, g.verteidigung)
      gl = Math.max(0, gl - x.s)
      treffer.push({ t, von: "held", schaden: x.s, krit: x.krit, heldLeben: hl, gegnerLeben: gl })
      naechsterHeld += 1 / h.tempo
      if (gl <= 0) return { sieg: true, dauer: t, treffer, held: h, gegner: g }
    }
    if (h.begleiter > 0 && t >= naechsterBegleiter) {
      const x = Math.max(1, Math.round(h.begleiter * 1.5 * (0.8 + r() * 0.4)))
      gl = Math.max(0, gl - x)
      treffer.push({ t, von: "begleiter", schaden: x, krit: false, heldLeben: hl, gegnerLeben: gl })
      naechsterBegleiter += 1.5
      if (gl <= 0) return { sieg: true, dauer: t, treffer, held: h, gegner: g }
    }
    if (t >= naechsterGegner) {
      const x = schaden(g.angriff, h.verteidigung)
      hl = Math.max(0, hl - x.s)
      treffer.push({ t, von: "gegner", schaden: x.s, krit: x.krit, heldLeben: hl, gegnerLeben: gl })
      naechsterGegner += 1 / g.tempo
      if (hl <= 0) return { sieg: false, dauer: t, treffer, held: h, gegner: g, grund: "besiegt" }
    }
  }
  return { sieg: false, dauer: KAMPF_MAX_S, treffer, held: h, gegner: g, grund: "zeit" }
}

/** Belohnung für ein gewonnenes Level. */
export function levelBelohnung(level: number): number {
  return Math.round(8 + level * 3 + (level % LEVEL_JE_WELT === 0 ? 40 * (level / LEVEL_JE_WELT) : 0))
}

/** Kampf um das aktuelle Level. Verändert den Spielstand bei Sieg. */
export function naechsterKampf(s: Spielstand): Kampf & { belohnung: number } {
  const k = kaempfen(held(s), gegnerFuer(s.level), s.saat + s.level * 7919)
  // jeder neue Versuch bekommt einen anderen Zufall
  s.saat = (s.saat * 1103515245 + 12345) >>> 0
  let belohnung = 0
  if (k.sieg) {
    belohnung = levelBelohnung(s.level)
    s.muenzen += belohnung
    s.level += 1
  }
  return { ...k, belohnung }
}

// ---------- Kisten ----------

export interface KistenInfo {
  art: Kistenart
  name: string
  farbe: string
  muenzen: [number, number]
  karten: number
  /** Mindestens so viele Karten dieser Seltenheit */
  garantiert: Partial<Record<Seltenheit, number>>
}

export const KISTEN: Record<Kistenart, KistenInfo> = {
  silber: { art: "silber", name: "Silberkiste", farbe: "#c9d1e0", muenzen: [18, 30], karten: 3, garantiert: {} },
  gold: { art: "gold", name: "Goldkiste", farbe: "#ffcf4a", muenzen: [60, 90], karten: 10, garantiert: { selten: 1 } },
  riesen: { art: "riesen", name: "Riesenkiste", farbe: "#ff9d42", muenzen: [220, 280], karten: 40, garantiert: { selten: 4 } },
  magisch: { art: "magisch", name: "Magische Kiste", farbe: "#c26bff", muenzen: [150, 200], karten: 30, garantiert: { selten: 6, episch: 1 } },
  episch: { art: "episch", name: "Epische Kiste", farbe: "#a64dff", muenzen: [0, 0], karten: 6, garantiert: { episch: 6 } },
  legendaer: { art: "legendaer", name: "Legendäre Kiste", farbe: "#5ee6c4", muenzen: [0, 0], karten: 1, garantiert: { legendaer: 1 } },
  supermagisch: { art: "supermagisch", name: "Supermagische Kiste", farbe: "#ff5fa2", muenzen: [600, 750], karten: 90, garantiert: { selten: 18, episch: 3 } },
}

/** Zyklus mit 240 Kisten: 180 Silber, 52 Gold, 4 Riesen, 4 Magisch, feste Positionen. */
export const ZYKLUS: Kistenart[] = (() => {
  const z: Kistenart[] = Array.from({ length: 240 }, () => "silber" as Kistenart)
  for (const i of [12, 84, 132, 203]) z[i - 1] = "magisch"
  for (const i of [52, 159, 190, 230]) z[i - 1] = "riesen"
  let gold = 0
  for (let i = 2; i < 240 && gold < 52; i += 4) {
    let k = i
    while (z[k] !== "silber") k++
    z[k] = "gold"
    gold++
  }
  return z
})()

/** Anteil der Kistenarten im Zyklus, für die Anzeige. */
export function kistenChancen(): Record<Kistenart, number> {
  const c = { silber: 0, gold: 0, riesen: 0, magisch: 0, episch: 1 / 500, legendaer: 1 / 500, supermagisch: 1 / 1000 } as Record<Kistenart, number>
  for (const k of ZYKLUS) c[k] += 1 / ZYKLUS.length
  return c
}

/** Nächste Kiste nach einem vollständig eingetragenen Training. Die allererste ist immer eine Goldkiste. */
export function kisteVerdienen(s: Spielstand, datum: string): Kiste {
  let art: Kistenart
  if (s.zyklus === 0 && s.kisten.length === 0 && Object.keys(s.inventar).length === 0) art = "gold"
  else {
    const r = zufall(s.saat + s.zyklus * 31)()
    art = r < 1 / 1000 ? "supermagisch" : r < 3 / 1000 ? "legendaer" : r < 5 / 1000 ? "episch" : ZYKLUS[s.zyklus % ZYKLUS.length]
  }
  s.zyklus += 1
  const k = { art, datum }
  s.kisten.push(k)
  return k
}

export interface Inhalt {
  muenzen: number
  karten: { id: string; anzahl: number; neu: boolean }[]
}

const SELTEN_GEWICHT: Record<Seltenheit, number> = { gewoehnlich: 0.78, selten: 0.2, episch: 0.019, legendaer: 0.001 }

/** Öffnet die älteste Kiste. Die erste Kiste überhaupt bringt genug Münzen für das Holzschwert. */
export function kisteOeffnen(s: Spielstand): Inhalt | null {
  const k = s.kisten.shift()
  if (!k) return null
  const info = KISTEN[k.art]
  const r = zufall(s.saat + s.zyklus * 977 + s.kisten.length * 13)
  const erste = Object.keys(s.inventar).length === 0 && s.muenzen < 100
  let muenzen = Math.round(info.muenzen[0] + r() * (info.muenzen[1] - info.muenzen[0]))
  if (erste) muenzen = Math.max(muenzen, 120)
  const karten: Record<string, number> = {}
  const nimm = (sel: Seltenheit, n: number) => {
    const pool = GEGENSTAENDE.filter((g) => g.seltenheit === sel)
    for (let i = 0; i < n; i++) {
      // Karten bündeln sich auf wenige Gegenstände, wie in Clash Royale
      const g = pool[Math.floor(r() * Math.min(pool.length, 1 + Math.floor(r() * pool.length)))]
      karten[g.id] = (karten[g.id] || 0) + 1
    }
  }
  let rest = info.karten
  for (const [sel, n] of Object.entries(info.garantiert) as [Seltenheit, number][]) {
    nimm(sel, n)
    rest -= n
  }
  for (let i = 0; i < rest; i++) {
    const x = r()
    let sel: Seltenheit = "gewoehnlich"
    let summe = 0
    for (const [s2, w] of Object.entries(SELTEN_GEWICHT) as [Seltenheit, number][]) {
      summe += w
      if (x < summe) {
        sel = s2
        break
      }
    }
    nimm(sel, 1)
  }
  s.muenzen += muenzen
  const liste = Object.entries(karten).map(([id, anzahl]) => {
    const vorher = s.inventar[id]
    const neu = !vorher
    s.inventar[id] = { stufe: vorher ? vorher.stufe : 0, karten: (vorher ? vorher.karten : 0) + anzahl }
    return { id, anzahl, neu }
  })
  return { muenzen, karten: liste }
}

// ---------- Laden und Aufwerten ----------

/** Kaufen im Laden: Gegenstand auf Stufe 1. Rüstet automatisch aus, wenn der Platz leer ist. */
export function kaufen(s: Spielstand, id: string): boolean {
  const g = gegenstand(id)
  if (!g || !g.preis || s.muenzen < g.preis) return false
  if ((s.inventar[id]?.stufe || 0) > 0) return false
  s.muenzen -= g.preis
  s.inventar[id] = { stufe: 1, karten: s.inventar[id]?.karten || 0 }
  if (!s.ausgeruestet[g.slot] || staerke(s, id) > staerke(s, s.ausgeruestet[g.slot] as string)) s.ausgeruestet[g.slot] = id
  return true
}

/** Freischalten (Stufe 0 → 1) oder Aufwerten mit Karten und Münzen. */
export function aufwerten(s: Spielstand, id: string): boolean {
  const g = gegenstand(id)
  const e = s.inventar[id]
  if (!g || !e) return false
  const kosten = e.stufe === 0 ? { karten: FREISCHALTEN[g.seltenheit], muenzen: 0 } : aufwertenKosten(g, e.stufe)
  if (!kosten || e.karten < kosten.karten || s.muenzen < kosten.muenzen) return false
  e.karten -= kosten.karten
  s.muenzen -= kosten.muenzen
  e.stufe += 1
  if (!s.ausgeruestet[g.slot] || staerke(s, id) > staerke(s, s.ausgeruestet[g.slot] as string)) s.ausgeruestet[g.slot] = id
  return true
}

export function ausruesten(s: Spielstand, id: string): void {
  const g = gegenstand(id)
  if (g && (s.inventar[id]?.stufe || 0) > 0) s.ausgeruestet[g.slot] = id
}

/** Grobe Stärke eines Gegenstands für den Vergleich. */
export function staerke(s: Spielstand, id: string): number {
  const g = gegenstand(id)
  const st = s.inventar[id]?.stufe || 0
  if (!g || st < 1) return 0
  const w = werte(g, st)
  return w.angriff * 3 * (g.tempo || 1) + w.verteidigung * 4 + w.leben * 0.3
}
