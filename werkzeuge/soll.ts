// Sollwerte der Dehnfigur aus der Ausführung der Übungen: Fußbreite, Fußwinkel, Tiefe, Lage der Stange, Griffbreite,
// Neigung des Oberkörpers. Jede Prüfung nennt den Satz der Ausführung, aus dem sie stammt. werkzeuge/messen.html
// misst die Figur (mit Modell) in Start- und Zielhaltung und meldet jede Abweichung.
//
// Koordinaten: x nach links (Seite _l), y nach oben, z nach vorn (Blickrichtung). Meter.

export type V = [number, number, number]
export type Punkte = Record<string, V>
export interface Messung {
  start: Punkte
  ziel: Punkte
  /** alle Haltungen (bei Abfolgen jeder Schritt) */
  alle: Punkte[]
}
export interface Pruefung {
  was: string
  wert: number
  min: number
  max: number
  quelle: string
}

// ---------------------------------------------------------------- Bausteine
const mitte = (a: V, b: V): V => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]
const grad = (r: number) => (r * 180) / Math.PI
const p = (m: Punkte, n: string): V => {
  const v = m[n]
  if (!v) throw new Error("Punkt fehlt: " + n)
  return v
}
/** Schulterbreite außen (Gelenkmitten plus je 4 cm bis zur Schulterhöhe) */
export const schulterbreite = (m: Punkte) => Math.abs(p(m, "g:schulter_l")[0] - p(m, "g:schulter_r")[0]) + 0.08
/** Abstand der Fersen seitlich (Mitte zu Mitte) */
export const fussbreite = (m: Punkte) => Math.abs(p(m, "ferse_l")[0] - p(m, "ferse_r")[0])
/** Fußwinkel nach außen in Grad (Ferse zur Fußspitze gegen die Blickrichtung) */
export const fusswinkel = (m: Punkte, s: "l" | "r") => {
  const f = p(m, "ferse_" + s), z = p(m, "fuss_" + s)
  const aussen = (z[0] - f[0]) * (s === "l" ? 1 : -1)
  return grad(Math.atan2(aussen, z[2] - f[2]))
}
/** Abstand der Hände seitlich */
export const griffbreite = (m: Punkte) => Math.abs(p(m, "hand_l")[0] - p(m, "hand_r")[0])
/** Neigung des Oberkörpers (Becken zur Brustwirbelsäule) gegen die Senkrechte, Grad, vorgeneigt positiv */
export const rumpfneigung = (m: Punkte) => {
  const b = p(m, "g:becken"), o = p(m, "g:hals")
  return grad(Math.atan2(o[2] - b[2], o[1] - b[1]))
}
/** Kniewinkel innen (180 = gestreckt) */
export const kniewinkel = (m: Punkte, s: "l" | "r") => {
  const h = p(m, "g:huefte_" + s), k = p(m, "g:knie_" + s), f = p(m, "g:fuss_" + s)
  const a = [h[0] - k[0], h[1] - k[1], h[2] - k[2]], b = [f[0] - k[0], f[1] - k[1], f[2] - k[2]]
  const c = (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / Math.hypot(...a) / Math.hypot(...b)
  return grad(Math.acos(Math.max(-1, Math.min(1, c))))
}
/** Hüftgelenk über (+) oder unter (-) dem Kniegelenk, Meter */
export const hueftUeberKnie = (m: Punkte) => (p(m, "g:huefte_l")[1] + p(m, "g:huefte_r")[1]) / 2 - (p(m, "g:knie_l")[1] + p(m, "g:knie_r")[1]) / 2
/** Höchste Ferse über dem Boden */
export const fersenhoehe = (m: Punkte) => Math.max(p(m, "ferse_l")[1], p(m, "ferse_r")[1])
/** Mitte zwischen den Händen (dort liegt die Stange) */
export const stange = (m: Punkte) => mitte(p(m, "hand_l"), p(m, "hand_r"))
/** Mittelfuß beider Füße */
export const mittelfuss = (m: Punkte) => mitte(mitte(p(m, "ferse_l"), p(m, "fuss_l")), mitte(p(m, "ferse_r"), p(m, "fuss_r")))
/** Knie seitlich über dem Fuß: Abstand Knie zu Knie geteilt durch Abstand Fußmitte zu Fußmitte */
export const knieUeberFuss = (m: Punkte) => {
  const kl = p(m, "g:knie_l"), kr = p(m, "g:knie_r")
  const fl = mitte(p(m, "ferse_l"), p(m, "fuss_l")), fr = mitte(p(m, "ferse_r"), p(m, "fuss_r"))
  return Math.abs(kl[0] - kr[0]) / Math.abs(fl[0] - fr[0])
}


/** Punkt im Rahmen des Rumpfs relativ zur Schultermitte: [seitlich, den Rumpf hinauf, nach vorn] */
export const amRumpf = (m: Punkte, n: string): V => {
  const b = p(m, "g:becken"), h = p(m, "g:hals")
  const lang = Math.hypot(h[1] - b[1], h[2] - b[2])
  const auf = [0, (h[1] - b[1]) / lang, (h[2] - b[2]) / lang]
  const vor = [0, -auf[2], auf[1]]
  const sm = mitte(p(m, "g:schulter_l"), p(m, "g:schulter_r"))
  const q = n === "stange" ? stange(m) : p(m, n)
  const d = [q[0] - sm[0], q[1] - sm[1], q[2] - sm[2]]
  return [d[0], d[1] * auf[1] + d[2] * auf[2], d[1] * vor[1] + d[2] * vor[2]]
}
/** Knie vor (+) dem Knöchel in Blickrichtung, Mittel beider Beine (Meter) */
export const knieVorKnoechel = (m: Punkte) => (p(m, "g:knie_l")[2] + p(m, "g:knie_r")[2] - p(m, "g:fuss_l")[2] - p(m, "g:fuss_r")[2]) / 2
/** Füße bleiben stehen: größte Verschiebung einer Ferse zwischen Start und Ziel (Meter) */
export const fersenWandern = (m: Messung) =>
  Math.max(...["ferse_l", "ferse_r", "fuss_l", "fuss_r"].map((n) => Math.hypot(...([0, 1, 2].map((i) => p(m.start, n)[i] - p(m.ziel, n)[i]) as V))))

const pr = (was: string, wert: number, min: number, max: number, quelle: string): Pruefung => ({ was, wert: Math.round(wert * 100) / 100, min, max, quelle })
type Bereich = [number, number]

// ---------------------------------------------------------------- Kniebeugen
interface KB {
  /** Fersenabstand / Schulterbreite */
  stand: Bereich
  /** Zehen nach außen (Grad) */
  zehen: Bereich
  /** Hüftgelenk über (+) Kniegelenk unten (Meter) */
  tiefe: Bereich
  /** Rumpfneigung unten (Grad) */
  rumpf: Bereich
  /** Fersen über dem Boden (Meter); erhöht bei Keil */
  ferse?: Bereich
  last?: "ruecken" | "lowbar" | "front" | "brust" | "ueberkopf" | "seite" | "zwischen"
  griff?: Bereich
  /** Knie vor dem Knöchel unten (Meter) */
  knieVor?: Bereich
  /** kleinster Kniewinkel oben (Grad) */
  knieOben?: number
  quelle: Record<string, string>
}
const kniebeuge = (k: KB) => (m0: Messung): Pruefung[] => {
  // oben: höchstes Becken, unten: tiefstes (bei Abfolgen aus allen Schritten)
  const hoch = (x: Punkte) => p(x, "g:becken")[1]
  const o = m0.alle.reduce((a, b) => (hoch(b) > hoch(a) ? b : a)), u = m0.alle.reduce((a, b) => (hoch(b) < hoch(a) ? b : a))
  const m: Messung = { start: o, ziel: u, alle: m0.alle }
  const sb = schulterbreite(o)
  const q = (n: string, d: string) => k.quelle[n] ?? d
  const r: Pruefung[] = [
    pr("Fußbreite / Schulterbreite", fussbreite(o) / sb, ...k.stand, q("stand", "Füße schulterbreit")),
    pr("Zehen nach außen links (°)", fusswinkel(o, "l"), ...k.zehen, q("zehen", "Zehen leicht nach außen")),
    pr("Zehen nach außen rechts (°)", fusswinkel(o, "r"), ...k.zehen, q("zehen", "Zehen leicht nach außen")),
    pr("Füße bleiben stehen (m)", fersenWandern(m), 0, 0.02, "Füße fest am Boden"),
    pr("Restfehler der Zielpunkte (m)", Math.max(...m.alle.map((x) => p(x, "_rest")[0])), 0, 0.02, "Zielpunkte erreicht"),
    pr("Verschiebung durch Boden oder Gerät (m)", Math.max(...m.alle.map((x) => Math.hypot(...p(x, "_schub")))), 0, 0.015, "Figur steht frei, ohne einzutauchen"),
    pr("Fersen unten (m)", fersenhoehe(u), ...(k.ferse ?? [0, 0.03]), q("ferse", "ganze Fußsohle am Boden")),
    pr("Hüfte über Knie unten (m)", hueftUeberKnie(u), ...k.tiefe, q("tiefe", "Tiefe")),
    pr("Rumpfneigung unten (°)", rumpfneigung(u), ...k.rumpf, q("rumpf", "Oberkörper")),
    pr("Knie über den Zehen unten", knieUeberFuss(u), 0.85, 1.6, q("knie", "Knie folgen den Zehen")),
    pr("Knie gestreckt oben (°)", Math.min(kniewinkel(o, "l"), kniewinkel(o, "r")), k.knieOben ?? 162, 180, q("knieOben", "aufrecht stehen")),
  ]
  if (k.knieVor) r.push(pr("Knie vor dem Knöchel unten (m)", knieVorKnoechel(u), ...k.knieVor, q("knieVor", "Schienbein")))
  const last = k.last
  if (last === "ruecken" || last === "lowbar") {
    for (const [h, n] of [[o, "oben"], [u, "unten"]] as [Punkte, string][]) {
      const s = amRumpf(h, "stange")
      r.push(pr(`Stange hinter der Schulter ${n} (m)`, -s[2], ...(last === "ruecken" ? [0.03, 0.1] : [0.07, 0.13]) as Bereich, q("stange", "Stange auf dem Trapez")))
      r.push(pr(`Stange über der Schulter ${n} (m)`, s[1], ...(last === "ruecken" ? [0.0, 0.08] : [-0.03, 0.03]) as Bereich, q("stange", "Stange auf dem Trapez")))
    }
    r.push(pr("Stange über Mittelfuß unten (m)", stange(u)[2] - mittelfuss(u)[2], -0.07, 0.07, "Stange bleibt über der Fußmitte"))
  }
  if (last === "front") {
    const s = amRumpf(u, "stange")
    r.push(pr("Stange vor der Schulter unten (m)", s[2], 0.05, 0.14, q("stange", "Stange in der Mulde zwischen Schultern und Hals")))
    r.push(pr("Ellbogen hoch unten (m)", (p(u, "g:ellbogen_l")[1] + p(u, "g:ellbogen_r")[1]) / 2 - mitte(p(u, "g:schulter_l"), p(u, "g:schulter_r"))[1], -0.1, 0.08, q("ellbogen", "Ellbogen oben, Oberarme fast waagerecht")))
    r.push(pr("Stange über Mittelfuß unten (m)", stange(u)[2] - mittelfuss(u)[2], -0.08, 0.08, "Gleichgewicht über dem Mittelfuß"))
  }
  if (last === "brust") {
    const s = amRumpf(u, "stange")
    r.push(pr("Hände vor der Brust unten (m)", s[2], 0.08, 0.26, q("last", "Hantel eng vor der Brust")))
    r.push(pr("Hände unter den Schultern unten (m)", -s[1], -0.06, 0.25, q("last", "Hantel vor der Brust")))
  }
  if (last === "ueberkopf") {
    r.push(pr("Hände über dem Kopf unten (m)", stange(u)[1] - p(u, "kopf")[1], 0.2, 0.6, q("last", "Arme gestreckt über dem Kopf")))
    r.push(pr("Stange über Mittelfuß unten (m)", stange(u)[2] - mittelfuss(u)[2], -0.07, 0.07, "Stange über der Fußmitte"))
  }
  if (last === "zwischen") r.push(pr("Hände tief unten (m)", stange(u)[1], 0, 0.4, q("last", "Hantel fast am Boden")))
  if (k.griff) r.push(pr("Griff / Schulterbreite", griffbreite(o) / sb, ...k.griff, q("griff", "Griffbreite")))
  return r
}
const HIGHBAR: KB = {
  stand: [0.95, 1.3],
  zehen: [15, 30],
  tiefe: [-0.15, 0],
  rumpf: [25, 45],
  last: "ruecken",
  griff: [1.25, 1.9],
  quelle: { stand: "Füße etwa schulterbreit", zehen: "Zehen 15 bis 30 Grad nach außen", tiefe: "Hüftfalte mindestens auf Höhe der Knie", rumpf: "Oberkörper bleibt relativ aufrecht", griff: "etwas weiter als schulterbreit" },
}

// ---------------------------------------------------------------- Kreuzheben und Hüftbeugen
const obenUnten = (m: Messung) => {
  const hoch = (x: Punkte) => p(x, "g:becken")[1]
  return { o: m.alle.reduce((a, b) => (hoch(b) > hoch(a) ? b : a)), u: m.alle.reduce((a, b) => (hoch(b) < hoch(a) ? b : a)) }
}
const grund = (m: Messung, o: Punkte): Pruefung[] => [
  pr("Füße bleiben stehen (m)", Math.max(...m.alle.map((x) => fersenWandern({ start: o, ziel: x, alle: [] }))), 0, 0.02, "Füße fest am Boden"),
  pr("Restfehler der Zielpunkte (m)", Math.max(...m.alle.map((x) => p(x, "_rest")[0])), 0, 0.02, "Zielpunkte erreicht"),
  pr("Verschiebung durch Boden oder Gerät (m)", Math.max(...m.alle.map((x) => Math.hypot(...p(x, "_schub")))), 0, 0.015, "Figur steht frei"),
  pr("Knie gestreckt oben (°)", Math.min(kniewinkel(o, "l"), kniewinkel(o, "r")), 160, 180, "oben aufrecht stehen"),
  pr("Rumpf aufrecht oben (°)", Math.abs(rumpfneigung(o)), 0, 10, "aufrecht stehen, nicht überstrecken"),
]
interface KH_ {
  stand: Bereich
  zehen: Bereich
  griff: Bereich
  /** Stange unten: Höhe der Mitte */
  stangeY: Bereich
  quelle: Record<string, string>
  /** Hüfte über Knie unten (m) */
  huefteKnie?: Bereich
  /** Hüfte unter der Schulter unten (m) */
  huefteSchulter?: Bereich
}
const heben = (k: KH_) => (m: Messung): Pruefung[] => {
  const { o, u } = obenUnten(m)
  const sb = schulterbreite(o), q = (n: string, d: string) => k.quelle[n] ?? d
  const sm = mitte(p(u, "g:schulter_l"), p(u, "g:schulter_r")), st = stange(u)
  return [
    ...grund(m, o),
    pr("Fußbreite / Schulterbreite", fussbreite(o) / sb, ...k.stand, q("stand", "hüftbreit")),
    pr("Zehen nach außen (°)", (fusswinkel(o, "l") + fusswinkel(o, "r")) / 2, ...k.zehen, q("zehen", "Zehen leicht nach außen")),
    pr("Griff / Schulterbreite", griffbreite(o) / sb, ...k.griff, q("griff", "Griff schulterbreit")),
    pr("Stange unten Höhe (m)", st[1], ...k.stangeY, q("stangeY", "Hantel liegt am Boden")),
    pr("Stange über Mittelfuß unten (m)", st[2] - mittelfuss(u)[2], -0.03, 0.06, q("mittelfuss", "Stange über der Fußmitte, 2 bis 3 cm vor dem Schienbein")),
    pr("Schultern vor der Stange unten (m)", sm[2] - st[2], -0.02, 0.08, q("schulter", "Schultern leicht vor der Stange, Arme hängen senkrecht")),
    pr("Hüfte über Knie unten (m)", hueftUeberKnie(u), ...(k.huefteKnie ?? [0.0, 0.4]), q("huefte", "Hüfte höher als die Knie")),
    pr("Hüfte unter Schulter unten (m)", sm[1] - (p(u, "g:huefte_l")[1] + p(u, "g:huefte_r")[1]) / 2, ...(k.huefteSchulter ?? [0.02, 0.4]), q("huefte2", "Hüfte tiefer als die Schultern")),
    pr("Stange vor den Oberschenkeln oben (m)", stange(o)[1], 0.65, 0.9, "oben hängt die Stange vor den Oberschenkeln"),
  ]
}
interface HG {
  /** Rumpfneigung unten */
  rumpf: Bereich
  /** kleinster Kniewinkel unten (innen, 180 gestreckt) */
  knie: Bereich
  stangeY?: Bereich
  stand?: Bereich
  last?: "ruecken"
  quelle: Record<string, string>
}
const hinge = (k: HG) => (m: Messung): Pruefung[] => {
  const o = m.start, u = m.ziel
  const q = (n: string, d: string) => k.quelle[n] ?? d
  const r: Pruefung[] = [
    ...grund(m, o).filter((x) => !x.was.startsWith("Knie gestreckt")),
    pr("Rumpfneigung unten (°)", rumpfneigung(u), ...k.rumpf, q("rumpf", "Oberkörper neigt sich nach vorn")),
    pr("Kniewinkel unten (°)", Math.min(kniewinkel(u, "l"), kniewinkel(u, "r")), ...k.knie, q("knie", "Knie locker gebeugt")),
    pr("Kniewinkel oben (°)", Math.min(kniewinkel(o, "l"), kniewinkel(o, "r")), 145, 178, q("knie", "Knie locker gebeugt")),
    pr("Knie bleiben im Winkel (°)", Math.abs(kniewinkel(o, "l") - kniewinkel(u, "l")), 0, 22, "Knie bleiben im gleichen leichten Winkel"),
    pr("Hüfte hinter der Ferse unten (m)", (p(u, "ferse_l")[2] + p(u, "ferse_r")[2]) / 2 - p(u, "g:becken")[2], 0.03, 0.4, "Hüfte nach hinten schieben"),
    pr("Schienbein fast senkrecht unten (m)", knieVorKnoechel(u), -0.04, 0.12, "Schienbeine fast senkrecht"),
  ]
  if (k.stand) r.push(pr("Fußbreite / Schulterbreite", fussbreite(o) / schulterbreite(o), ...k.stand, "hüftbreit"))
  if (k.stangeY) {
    r.push(pr("Stange unten Höhe (m)", stange(u)[1], ...k.stangeY, q("stangeY", "Stange am Bein entlang nach unten")))
    r.push(pr("Stange nah am Bein unten (m)", stange(u)[2] - (p(u, "g:knie_l")[2] + p(u, "g:knie_r")[2]) / 2, -0.05, 0.1, "die Stange gleitet an den Beinen entlang"))
  }
  if (k.last === "ruecken") {
    const s = amRumpf(u, "stange")
    r.push(pr("Stange hinter der Schulter unten (m)", -s[2], 0.03, 0.1, "Stange auf dem oberen Rücken"))
  }
  return r
}
// ---------------------------------------------------------------- Einbeinig
const ruhig = (m: Messung): Pruefung[] => [
  pr("Restfehler der Zielpunkte (m)", Math.max(...m.alle.map((x) => p(x, "_rest")[0])), 0, 0.02, "Zielpunkte erreicht"),
  pr("Verschiebung durch Boden oder Gerät (m)", Math.max(...m.alle.map((x) => Math.hypot(...p(x, "_schub")))), 0, 0.015, "Figur steht frei"),
]
const bleibt = (m: Messung, n: string[]) => Math.max(...m.alle.map((x) => Math.max(...n.map((k) => Math.hypot(...([0, 1, 2].map((i) => p(x, k)[i] - p(m.alle[0], k)[i]) as V))))))
interface SP {
  bank?: boolean
  /** vorderer Fuß erhöht */
  vornHoch?: number
  /** hinteres Knie über dem Boden unten */
  hintenKnie?: Bereich
  /** Fuß, der stehen bleibt */
  fest: "beide" | "vorn" | "hinten"
}
const splitSoll = (k: SP) => (m: Messung): Pruefung[] => {
  const { u } = obenUnten(m)
  const fl = mitte(p(u, "ferse_l"), p(u, "fuss_l"))
  const r: Pruefung[] = [
    ...ruhig(m),
    pr("Vorderes Knie über dem Fuß unten (m)", p(u, "g:knie_l")[2] - p(u, "g:fuss_l")[2], -0.06, 0.13, "vorderes Knie über dem Fuß oder leicht davor"),
    pr("Vorderes Knie seitlich über dem Fuß (m)", Math.abs(p(u, "g:knie_l")[0] - fl[0]), 0, 0.07, "das vordere Knie zeigt über die Zehen"),
    pr("Hinteres Knie über dem Boden unten (m)", p(u, "g:knie_r")[1], ...(k.hintenKnie ?? (k.bank ? [0.05, 0.25] : [0.05, 0.2])) as Bereich, "hinteres Knie knapp über dem Boden"),
    pr("Vorderer Kniewinkel unten (°)", kniewinkel(u, "l"), 72, 118, "vorderes Knie etwa 90 Grad"),
    pr("Rumpf aufrecht unten (°)", rumpfneigung(u), -3, 22, "Oberkörper aufrecht"),
    pr("Vordere Ferse am Boden (m)", p(u, "ferse_l")[1], 0, 0.036 + (k.vornHoch ?? 0), "die Ferse bleibt am Boden"),
    pr("Spur hüftbreit (m)", Math.abs(p(u, "ferse_l")[0] - p(u, k.bank ? "fuss_r" : "ferse_r")[0]), 0.12, 0.32, "Füße hüftbreit wie auf zwei Schienen"),
  ]
  if (!k.bank) {
    r.push(pr("Hinterer Kniewinkel unten (°)", kniewinkel(u, "r"), 62, 120, "beide Knie etwa 90 Grad"))
    r.push(pr("Schrittlänge (m)", p(u, "ferse_l")[2] - p(u, "fuss_r")[2], 0.7, 1.05, "eine große Schrittlänge auseinander"))
    r.push(pr("Hintere Ferse angehoben (m)", p(u, "ferse_r")[1], 0.06, 0.2, "die hintere Ferse ist angehoben"))
  }
  const fest = k.fest === "beide" ? ["ferse_l", "fuss_l", "fuss_r"] : k.fest === "vorn" ? ["ferse_l", "fuss_l"] : ["fuss_r"]
  r.push(pr("Fester Fuß bleibt stehen (m)", bleibt(m, fest), 0, 0.02, "der Fuß bleibt an seiner Stelle"))
  return r
}
const stepSoll = (box: number) => (m: Messung): Pruefung[] => {
  const o = m.ziel, u = m.start
  return [
    ...ruhig(m),
    pr("Fuß auf der Box (m)", p(u, "ferse_l")[1] - box, 0, 0.036, "einen Fuß komplett auf die Box"),
    pr("Oberes Knie über den Zehen unten (m)", Math.abs(p(u, "g:knie_l")[0] - mitte(p(u, "ferse_l"), p(u, "fuss_l"))[0]), 0, 0.07, "das Knie zeigt über die Zehen"),
    pr("Oberer Kniewinkel unten (°)", kniewinkel(u, "l"), 70, 120, "Fuß auf Kniehöhe"),
    pr("Oberkörper leicht vor unten (°)", rumpfneigung(u), 0, 28, "Oberkörper leicht nach vorn"),
    pr("Oben aufrecht auf der Box: Knie (°)", kniewinkel(o, "l"), 160, 180, "bis du aufrecht auf der Box stehst"),
    pr("Oben aufrecht: Rumpf (°)", Math.abs(rumpfneigung(o)), 0, 10, "aufrecht"),
    pr("Oberer Fuß bleibt (m)", bleibt(m, ["ferse_l", "fuss_l"]), 0, 0.02, "Fuß bleibt auf der Box"),
  ]
}
const pistolSoll = (m: Messung): Pruefung[] => {
  const o = m.start, u = m.ziel
  return [
    ...ruhig(m),
    pr("Hüfte unter dem Knie unten (m)", (p(u, "g:huefte_l")[1]) - p(u, "g:knie_l")[1], -0.35, -0.08, "bis die Rückseite des Oberschenkels die Wade berührt"),
    pr("Ferse am Boden unten (m)", p(u, "ferse_l")[1], 0, 0.036, "die Ferse bleibt am Boden"),
    pr("Knie über den Zehen (m)", Math.abs(p(u, "g:knie_l")[0] - mitte(p(u, "ferse_l"), p(u, "fuss_l"))[0]), 0, 0.07, "das Knie wandert über die Zehen"),
    pr("Freies Bein gestreckt (°)", kniewinkel(u, "r"), 150, 180, "das andere Bein streckst du nach vorn"),
    pr("Freier Fuß knapp über dem Boden (m)", Math.min(p(u, "ferse_r")[1], p(u, "fuss_r")[1]), 0.02, 0.35, "bis es knapp über dem Boden schwebt"),
    pr("Standfuß bleibt (m)", bleibt(m, ["ferse_l", "fuss_l"]), 0, 0.02, "Fuß bleibt stehen"),
    pr("Oben Knie gestreckt (°)", kniewinkel(o, "l"), 160, 180, "aufrecht auf einem Bein"),
  ]
}
const rdl1Soll = (m: Messung): Pruefung[] => {
  const o = m.start, u = m.ziel
  return [
    ...ruhig(m),
    pr("Rumpfneigung unten (°)", rumpfneigung(u), 60, 95, "Oberkörper kippt wie eine Wippe nach vorn"),
    pr("Hinteres Bein in Linie (m)", Math.abs(p(u, "g:fuss_r")[1] - p(u, "g:becken")[1]), 0, 0.2, "Oberkörper und hinteres Bein bilden eine Linie"),
    pr("Standbein locker gebeugt unten (°)", kniewinkel(u, "l"), 140, 175, "Knie leicht gebeugt"),
    pr("Standfuß bleibt (m)", bleibt(m, ["ferse_l", "fuss_l"]), 0, 0.02, "Fuß bleibt stehen"),
    pr("Oben aufrecht (°)", Math.abs(rumpfneigung(o)), 0, 10, "aufrecht stehen"),
  ]
}
const seitSoll = (m: Messung): Pruefung[] => {
  const { u } = obenUnten(m)
  return [
    ...ruhig(m),
    pr("Oberschenkel etwa waagerecht (m)", p(u, "g:huefte_l")[1] - p(u, "g:knie_l")[1], -0.06, 0.12, "bis der Oberschenkel etwa waagerecht ist"),
    pr("Anderes Bein gestreckt (°)", kniewinkel(u, "r"), 158, 180, "das andere Bein bleibt gestreckt"),
    pr("Fersen am Boden (m)", fersenhoehe(u), 0, 0.036, "die Ferse bleibt am Boden"),
    pr("Großer Schritt zur Seite", fussbreite(u) / schulterbreite(u), 1.6, 3.2, "ein großer Schritt zur Seite"),
    pr("Knie über den Zehen (m)", Math.abs(p(u, "g:knie_l")[0] - mitte(p(u, "ferse_l"), p(u, "fuss_l"))[0]), 0, 0.08, "Knie des Schrittbeins über dem Fuß"),
  ]
}

const KLASSISCH_Q = { stand: "Stell dich hüftbreit hin", zehen: "Zehen leicht nach außen", griff: "Greif die Stange schulterbreit, die Arme hängen direkt außen an den Beinen", huefte: "Hüfte höher als die Knie" }

export const SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  split_squat_kh: splitSoll({ fest: "beide" }),
  split_squat_kg: splitSoll({ fest: "beide" }),
  split_squat_lh: splitSoll({ fest: "beide" }),
  split_squat_band: splitSoll({ fest: "beide" }),
  split_squat_ffe: splitSoll({ fest: "beide", vornHoch: 0.1, hintenKnie: [0.03, 0.15] }),
  split_squat_iso: splitSoll({ fest: "beide", hintenKnie: [0.06, 0.22] }),
  bulgarisch_kh: splitSoll({ fest: "beide", bank: true }),
  bulgarisch_kg: splitSoll({ fest: "beide", bank: true }),
  bulgarisch_lh: splitSoll({ fest: "beide", bank: true }),
  bulgarisch_multipresse: splitSoll({ fest: "beide", bank: true }),
  ausfallschritt_kh: splitSoll({ fest: "vorn" }),
  ausfallschritt_rueck_lh: splitSoll({ fest: "vorn" }),
  ausfallschritt_rueck_kg: splitSoll({ fest: "vorn" }),
  ausfallschritt_goblet: splitSoll({ fest: "vorn" }),
  ausfallschritt_multipresse: splitSoll({ fest: "vorn" }),
  ausfallschritt_defizit: splitSoll({ fest: "vorn", vornHoch: 0.08, hintenKnie: [0.03, 0.2] }),
  ausfallschritt_gleitscheibe: splitSoll({ fest: "vorn" }),
  ausfallschritt_vor_kh: splitSoll({ fest: "hinten" }),
  ausfallschritt_vor_kg: splitSoll({ fest: "hinten" }),
  ausfallschritt_gehend_kh: splitSoll({ fest: "hinten" }),
  ausfallschritt_gehend_lh: splitSoll({ fest: "hinten" }),
  ausfallschritt_gehend_kg: splitSoll({ fest: "hinten" }),
  ausfallschritt_seit_kh: seitSoll,
  ausfallschritt_seit_kg: seitSoll,
  ausfallschritt_seit_gleitscheibe: seitSoll,
  step_up: stepSoll(0.5),
  step_up_kg: stepSoll(0.5),
  step_up_lh: stepSoll(0.5),
  step_up_kniehub: stepSoll(0.5),
  pistol: pistolSoll,
  pistol_gegengewicht: pistolSoll,
  einbein_kreuzheben: rdl1Soll,
  einbein_kreuzheben_kg: rdl1Soll,
  kreuzheben_lh: heben({ stand: [0.55, 0.9], zehen: [3, 20], griff: [1.0, 1.45], stangeY: [0.2, 0.26], quelle: KLASSISCH_Q }),
  kreuzheben_reset: heben({ stand: [0.55, 0.9], zehen: [3, 20], griff: [1.0, 1.45], stangeY: [0.2, 0.26], quelle: KLASSISCH_Q }),
  kreuzheben_defizit: heben({ stand: [0.55, 0.9], zehen: [3, 20], griff: [1.0, 1.45], stangeY: [0.2, 0.26], huefteKnie: [-0.1, 0.4], quelle: { ...KLASSISCH_Q, huefte: "Hüfte und Knie tiefer als beim normalen Kreuzheben" } }),
  kreuzheben_pause: heben({ stand: [0.55, 0.9], zehen: [3, 20], griff: [1.0, 1.45], stangeY: [0.2, 0.26], quelle: KLASSISCH_Q }),
  kreuzheben_sumo: heben({ stand: [1.6, 2.4], zehen: [30, 45], griff: [0.7, 1.05], stangeY: [0.2, 0.26], huefteKnie: [-0.05, 0.3], quelle: { stand: "deutlich breiter als schulterbreit", zehen: "Zehen 30 bis 45 Grad nach außen", griff: "schulterbreit innerhalb der Beine", huefte: "Hüfte senken, bis die Brust aufrecht ist" } }),
  kreuzheben_gegenstand: heben({ stand: [1.6, 2.4], zehen: [30, 45], griff: [0.7, 1.05], stangeY: [0.2, 0.26], huefteKnie: [-0.05, 0.3], quelle: { stand: "Sumo mit weitem Stand", griff: "Griff innen" } }),
  rack_pull: heben({ stand: [0.55, 0.9], zehen: [3, 20], griff: [1.0, 1.45], stangeY: [0.42, 0.6], quelle: { ...KLASSISCH_Q, stangeY: "Stange knapp unter oder über den Knien" } }),
  kreuzheben_gestreckt: heben({ stand: [0.55, 0.9], zehen: [3, 20], griff: [1.0, 1.45], stangeY: [0.2, 0.26], huefteKnie: [0.15, 0.6], huefteSchulter: [-0.12, 0.3], quelle: { ...KLASSISCH_Q, huefte: "Hüfte deutlich höher als beim klassischen Kreuzheben", huefte2: "Oberkörper mit geradem Rücken nach vorn gekippt, bis du die Stange greifen kannst" } }),
  kb_kreuzheben: heben({ stand: [0.8, 1.2], zehen: [5, 25], griff: [0, 0.6], stangeY: [0.22, 0.32], huefteKnie: [-0.05, 0.4], quelle: { stand: "etwas breiter als hüftbreit", stangeY: "Kettlebell zwischen den Füßen", griff: "Griff mit beiden Händen" } }),
  rdl_lh: hinge({ rumpf: [55, 90], knie: [138, 172], stangeY: [0.3, 0.56], stand: [0.55, 0.9], quelle: { rumpf: "Oberkörper neigt sich nach vorn, Rücken gerade", knie: "Knie locker gebeugt", stangeY: "so tief bis zur starken Dehnung, meist etwa Mitte Schienbein" } }),
  rdl_kh: hinge({ rumpf: [55, 90], knie: [138, 172], stangeY: [0.3, 0.56], stand: [0.55, 0.9], quelle: { stangeY: "bis zur deutlichen Dehnung, meist bis Mitte Schienbein" } }),
  rdl_kabel: hinge({ rumpf: [50, 90], knie: [138, 172], stand: [0.55, 0.9], quelle: {} }),
  good_morning_lh: hinge({ rumpf: [65, 95], knie: [140, 172], last: "ruecken", stand: [0.55, 0.9], quelle: { rumpf: "bis der Oberkörper fast waagerecht ist", knie: "Knie leicht gebeugt" } }),
  good_morning_band: hinge({ rumpf: [55, 90], knie: [140, 172], stand: [0.55, 0.9], quelle: {} }),
  hip_hinge_stab: hinge({ rumpf: [45, 85], knie: [140, 172], stand: [0.55, 0.9], quelle: {} }),

  kniebeuge_lh: kniebeuge(HIGHBAR),
  pausenkniebeuge_lh: kniebeuge(HIGHBAR),
  tempo_kniebeuge_lh: kniebeuge(HIGHBAR),
  pin_squat: kniebeuge(HIGHBAR),
  eineinhalb_kniebeuge: kniebeuge({ ...HIGHBAR, quelle: { ...HIGHBAR.quelle, stand: "schulterbreit hinstellen" } }),
  kniebeuge_multipresse: kniebeuge({ ...HIGHBAR, rumpf: [15, 35], quelle: { ...HIGHBAR.quelle, rumpf: "Rücken bleibt am Polster der Stange stabil" } }),
  kniebeuge_lh_lowbar: kniebeuge({ stand: [1.0, 1.4], zehen: [10, 30], tiefe: [-0.08, 0], rumpf: [40, 60], last: "lowbar", griff: [1.1, 1.6], quelle: { stand: "schulterbreit oder etwas breiter", zehen: "Zehen leicht nach außen", tiefe: "bis knapp unter die Parallele", rumpf: "Oberkörper neigt sich deutlich nach vorn", stange: "2 bis 3 cm tiefer auf der hinteren Schulter", griff: "Greif enger" } }),
  box_squat_lh: kniebeuge({ stand: [1.1, 1.5], zehen: [15, 35], tiefe: [-0.05, 0.06], rumpf: [30, 50], last: "ruecken", griff: [1.25, 1.9], knieVor: [-0.04, 0.12], quelle: { stand: "etwas breiterer Stand als gewohnt", tiefe: "Oberschenkel beim Sitzen etwa waagerecht", rumpf: "Oberkörper leicht nach vorn geneigt", knieVor: "Schienbeine bleiben eher senkrecht" } }),
  fersen_kniebeuge_lh: kniebeuge({ stand: [0.7, 1.15], zehen: [5, 25], tiefe: [-0.25, -0.03], rumpf: [5, 28], ferse: [0.04, 0.1], last: "ruecken", quelle: { stand: "hüftbreit bis schulterbreit", ferse: "Fersen auf der Erhöhung, Fußballen am Boden", tiefe: "bis die Oberschenkel die Waden fast berühren", rumpf: "der Oberkörper bleibt aufrecht" } }),
  frontkniebeuge_lh: kniebeuge({ stand: [0.95, 1.3], zehen: [8, 25], tiefe: [-0.2, -0.02], rumpf: [5, 25], last: "front", griff: [0.85, 1.3], quelle: { tiefe: "meist deutlich unter die Parallele", rumpf: "bei aufrechtem Oberkörper", griff: "Greif schulterbreit" } }),
  zercher_kniebeuge: kniebeuge({ stand: [1.0, 1.45], zehen: [10, 30], tiefe: [-0.15, 0], rumpf: [15, 40], quelle: { stand: "schulterbreit oder etwas breiter", tiefe: "tief, bis die Ellbogen fast die Oberschenkel berühren", rumpf: "der Rücken bleibt neutral" } }),
  goblet: kniebeuge({ stand: [0.95, 1.3], zehen: [15, 30], tiefe: [-0.2, -0.02], rumpf: [10, 32], last: "brust", quelle: { zehen: "Zehen 15 bis 30 Grad nach außen", tiefe: "tief, bis die Ellbogen die Innenseite der Knie fast berühren", rumpf: "Brust aufrecht" } }),
  kb_frontkniebeuge: kniebeuge({ stand: [0.95, 1.3], zehen: [8, 25], tiefe: [-0.15, 0.02], rumpf: [8, 30], last: "brust", quelle: { tiefe: "so tief, wie der Rücken neutral bleibt", rumpf: "die Brust bleibt aufrecht", last: "Griffe auf Brusthöhe" } }),
  frontkniebeuge_kh: kniebeuge({ stand: [0.95, 1.3], zehen: [8, 25], tiefe: [-0.15, 0.02], rumpf: [5, 28], quelle: { tiefe: "so tief, wie der Rücken neutral bleibt", rumpf: "Oberkörper aufrecht" } }),
  sumo_kniebeuge: kniebeuge({ stand: [1.6, 2.4], zehen: [30, 45], tiefe: [-0.12, 0.04], rumpf: [0, 25], last: "zwischen", quelle: { stand: "deutlich breiter als schulterbreit", zehen: "Zehen 30 bis 45 Grad nach außen", tiefe: "bis die Hantel fast den Boden berührt", rumpf: "der Oberkörper bleibt aufrecht", last: "Hantel fast am Boden" } }),
  cyclist_squat: kniebeuge({ stand: [0, 0.45], zehen: [0, 10], tiefe: [-0.3, -0.06], rumpf: [0, 14], ferse: [0.05, 0.12], last: "brust", quelle: { stand: "Füße eng nebeneinander, fast geschlossen", zehen: "Füße stehen gerade", ferse: "Fersen auf einem hohen Keil", tiefe: "bis die Oberschenkel auf den Waden fast aufliegen", rumpf: "Oberkörper ganz aufgerichtet" } }),
  fersen_kniebeuge_kh: kniebeuge({ stand: [0.7, 1.1], zehen: [5, 25], tiefe: [-0.25, -0.03], rumpf: [5, 28], ferse: [0.04, 0.1], quelle: { stand: "Füße hüftbreit", ferse: "Fersen auf der Erhöhung", tiefe: "bis die Oberschenkel die Waden fast berühren", rumpf: "der Oberkörper bleibt aufrecht" } }),
  ueberkopf_kniebeuge: kniebeuge({ stand: [0.95, 1.3], zehen: [10, 30], tiefe: [-0.15, 0.03], rumpf: [0, 22], last: "ueberkopf", griff: [1.8, 2.8], quelle: { rumpf: "der Oberkörper bleibt aufrecht", griff: "weit, etwa im Reißgriff", tiefe: "so tief, wie du die Position halten kannst" } }),
  kh_kniebeuge: kniebeuge({ stand: [0.75, 1.3], zehen: [8, 25], tiefe: [-0.1, 0.03], rumpf: [15, 40], quelle: { stand: "hüftbreit bis schulterbreit", tiefe: "bis die Oberschenkel waagerecht sind", rumpf: "Schultern zurück, gerade nach unten" } }),
  band_kniebeuge: kniebeuge({ stand: [0.6, 1.05], zehen: [5, 20], tiefe: [-0.1, 0.04], rumpf: [10, 35], knieOben: 158, quelle: { knieOben: "Hüfte und Knie oben fast ganz strecken", stand: "hüftbreit auf das Band", tiefe: "so tief wie möglich", rumpf: "Oberkörper aufrecht" } }),
  kniebeuge_kg: kniebeuge({ stand: [0.95, 1.3], zehen: [10, 30], tiefe: [-0.1, 0.03], rumpf: [20, 45], quelle: { tiefe: "Oberschenkel mindestens waagerecht", rumpf: "Brust aufrecht, Hüfte nach hinten" } }),
  box_kniebeuge: kniebeuge({ stand: [0.95, 1.3], zehen: [10, 30], tiefe: [-0.05, 0.08], rumpf: [20, 45], quelle: { tiefe: "bis das Gesäß die Sitzfläche berührt", rumpf: "leicht nach vorn lehnen" } }),
  ball_wandkniebeuge: kniebeuge({ stand: [0.95, 1.3], zehen: [0, 20], tiefe: [-0.05, 0.06], rumpf: [-5, 10], knieVor: [-0.06, 0.08], quelle: { tiefe: "bis die Oberschenkel etwa waagerecht sind", knieVor: "die Knie stehen über den Füßen", rumpf: "Rücken am Ball" } }),
  wandsitzen: kniebeuge({ stand: [0.6, 1.0], zehen: [0, 15], tiefe: [-0.05, 0.06], rumpf: [-5, 8], knieVor: [-0.06, 0.06], quelle: { stand: "hüftbreit", tiefe: "Oberschenkel etwa waagerecht, Knie etwa 90 Grad", knieVor: "die Knie stehen über den Fußgelenken", rumpf: "Rücken an der Wand" } }),
  spanish_squat: kniebeuge({ stand: [0.6, 1.0], zehen: [0, 15], tiefe: [-0.05, 0.08], rumpf: [0, 15], knieVor: [-0.06, 0.07], quelle: { stand: "Füße hüftbreit", tiefe: "bis die Oberschenkel etwa waagerecht sind", knieVor: "die Schienbeine bleiben senkrecht", rumpf: "der Oberkörper bleibt aufrecht" } }),
  spanish_squat_iso: kniebeuge({ stand: [0.6, 1.0], zehen: [0, 15], tiefe: [-0.02, 0.15], rumpf: [0, 15], knieVor: [-0.06, 0.07], quelle: { stand: "Füße hüftbreit", tiefe: "Knie etwa 60 bis 90 Grad gebeugt", knieVor: "die Schienbeine bleiben senkrecht", rumpf: "der Oberkörper bleibt aufrecht" } }),
}
