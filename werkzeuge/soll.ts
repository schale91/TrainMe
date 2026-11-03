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
  pr("Wand musste weichen (m)", Math.max(...m.alle.map((x) => p(x, "_wand")[0])), 0, 0.02, "Kontakt zur Wand"),
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

// ---------------------------------------------------------------- Drücken
const winkelBei = (a: V, b: V, c: V) => {
  const u = [a[0] - b[0], a[1] - b[1], a[2] - b[2]], v = [c[0] - b[0], c[1] - b[1], c[2] - b[2]]
  return grad(Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1] + u[2] * v[2]) / (Math.hypot(...u) * Math.hypot(...v))))))
}
/** Ellbogenwinkel: 180 = gestreckt */
export const ellbogenWinkel = (m: Punkte, s: "l" | "r") => winkelBei(p(m, `g:schulter_${s}`), p(m, `g:ellbogen_${s}`), p(m, `g:hand_${s}`))
/** Unterarm gegen die Senkrechte (Grad) */
export const unterarmLot = (m: Punkte, s: "l" | "r") => {
  const e = p(m, `g:ellbogen_${s}`), h = p(m, `g:hand_${s}`)
  return grad(Math.acos(Math.abs(h[1] - e[1]) / Math.hypot(h[0] - e[0], h[1] - e[1], h[2] - e[2])))
}
/** Oberarm vom Rumpf abgespreizt, gesehen senkrecht auf die Rumpfebene (Grad; 90 = waagerecht zur Seite) */
export const abspreizen = (m: Punkte, s: "l" | "r") => {
  const e = amRumpf(m, `g:ellbogen_${s}`), sh = amRumpf(m, `g:schulter_${s}`)
  return grad(Math.atan2(Math.abs(e[0] - sh[0]), sh[1] - e[1]))
}
/** Stange waagerecht von der Schultermitte entfernt (m) */
const ueberSchultern = (m: Punkte) => {
  const s = mitte(p(m, "g:schulter_l"), p(m, "g:schulter_r")), b = stange(m)
  return Math.hypot(b[0] - s[0], b[2] - s[2])
}
const SEITEN = ["l", "r"] as const
/** Höhe der Brust (vorderste Haut im Rahmen der Schultern) an der Stelle y den Rumpf hinauf */
export const brustBei = (m: Punkte, y: number) => {
  const b = (m as unknown as Record<string, number[]>)["_brust"]
  const i = Math.max(0, Math.min(13.999, (y + 0.3) / 0.025)), j = Math.floor(i)
  return b[j] + (b[j + 1] - b[j]) * (i - j)
}
interface BD {
  griff?: Bereich
  /** Stange unten im Rahmen der Schultern: den Rumpf hinauf, über dem Schultergelenk */
  untenY: Bereich
  untenZ: Bereich
  abspreizen: Bereich
  /** größte Abweichung der Unterarme von der Senkrechten unten (Grad) */
  lot?: number
  /** nur ein Arm arbeitet */
  arm?: "l" | "r"
  /** Handfläche über der Haut der Brust unten (m): Stange berührt die Brust */
  brust?: Bereich
  /** Abstand der Hände oben (m), z. B. Kurzhanteln eine Handbreit auseinander */
  griffOben?: Bereich
  /** Rücken gegen die Waagerechte (Grad), Schrägbank */
  neig?: Bereich
  /** Larsen: Fersen knapp über dem Boden, Beine gestreckt */
  larsen?: boolean
  /** Floor Press: Ellbogen unten am Boden (Höhe des Gelenks, m) */
  ellbogenBoden?: Bereich
  /** Füße am Boden (nicht bei Larsen) */
  fuesse?: boolean
  /** Fersenabstand (m), Standard etwas breiter als hüftbreit */
  fussBreit?: Bereich
  extra?: (m: Messung, o: Punkte, u: Punkte) => Pruefung[]
  quelle: Record<string, string>
}
const bankSoll = (k: BD) => (m: Messung): Pruefung[] => {
  const o = m.start, u = m.ziel
  const arme = k.arm ? [k.arm] : SEITEN
  const r = [...ruhig(m)]
  if (k.fuesse !== false) {
    r.push(pr("Füße bleiben stehen (m)", Math.max(...m.alle.map((x) => fersenWandern({ start: m.alle[0], ziel: x, alle: [] }))), 0, 0.02, "Füße fest auf dem Boden"))
    r.push(pr("Fersen am Boden (m)", Math.max(...m.alle.map(fersenhoehe)), 0, 0.04, "Füße stehen fest auf dem Boden"))
    r.push(pr("Fersenabstand (m)", fussbreite(o), (k.fussBreit ?? [0.25, 0.5])[0], (k.fussBreit ?? [0.25, 0.5])[1], k.quelle.fussBreit ?? "Füße etwas breiter als hüftbreit"))
  }
  if (k.larsen) {
    r.push(pr("Fersen knapp über dem Boden (m)", Math.min(p(u, "ferse_l")[1], p(u, "ferse_r")[1]), 0.02, 0.15, "heb die Füße knapp über den Boden"))
    r.push(pr("Beine gestreckt (°)", Math.min(kniewinkel(u, "l"), kniewinkel(u, "r")), 160, 180, "Streck die Beine nach vorn aus"))
  }
  if (k.neig) {
    const b = p(u, "g:becken"), h = p(u, "g:hals")
    r.push(pr("Rücken gegen die Waagerechte (°)", grad(Math.atan2(h[1] - b[1], Math.abs(h[2] - b[2]))), k.neig[0], k.neig[1], k.quelle.neig ?? "Bankwinkel"))
  }
  if (k.griffOben) r.push(pr("Hände oben auseinander (m)", griffbreite(o), k.griffOben[0], k.griffOben[1], k.quelle.griffOben ?? "Abstand oben"))
  if (k.ellbogenBoden) for (const a of arme) r.push(pr(`Oberarm ${a} am Boden (m)`, p(u, `g:ellbogen_${a}`)[1], k.ellbogenBoden[0], k.ellbogenBoden[1], "bis die Oberarme sanft den Boden berühren"))
  if (k.griff) r.push(pr("Griffbreite / Schulterbreite", griffbreite(u) / schulterbreite(u), k.griff[0], k.griff[1], k.quelle.griff ?? "Griff"))
  const s = k.arm ? amRumpf(u, `hand_${k.arm}`) : amRumpf(u, "stange")
  r.push(pr("Last unten den Rumpf hinauf (m)", s[1], k.untenY[0], k.untenY[1], k.quelle.unten))
  r.push(pr("Last unten über dem Schultergelenk (m)", s[2], k.untenZ[0], k.untenZ[1], k.quelle.unten))
  // Brust aus der oberen Haltung: unten liegen Hände und Hanteln selbst auf ihr
  if (k.brust) r.push(pr("Last unten über der Brust (m)", s[2] - brustBei(o, s[1]), k.brust[0], k.brust[1], k.quelle.brust ?? k.quelle.unten))
  for (const a of arme) {
    if ((k.lot ?? 15) < 90) r.push(pr(`Unterarm ${a} senkrecht unten (°)`, unterarmLot(u, a), 0, k.lot ?? 15, k.quelle.lot ?? "Unterarme unten etwa senkrecht"))
    r.push(pr(`Ellbogen ${a} abgespreizt unten (°)`, abspreizen(u, a), k.abspreizen[0], k.abspreizen[1], k.quelle.abspreizen))
    r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(o, a), 155, 180, "bis die Arme gestreckt sind, ohne die Ellbogen durchzuschlagen"))
  }
  if (!k.arm) r.push(pr("Stange oben über den Schultern (m)", ueberSchultern(o), 0, 0.06, "über die Schultern"))
  if (k.extra) r.push(...k.extra(m, o, u))
  return r
}
const LH_Q = { griff: "etwas breiter als schulterbreit", unten: "zur unteren Brust, etwa auf Höhe des Brustbeins", abspreizen: "Ellbogen etwa 45 bis 70 Grad vom Körper weg", lot: "Unterarme unten etwa senkrecht" }
const KH_Q = { griffOben: "oben etwa eine Handbreit auseinander", unten: "seitlich neben die Brust", abspreizen: "Ellbogen etwa 45 bis 60 Grad vom Körper weg" }
const KH_BD: BD = { griffOben: [0.26, 0.4], untenY: [-0.16, -0.04], untenZ: [0.04, 0.15], abspreizen: [45, 60], quelle: KH_Q }
const SCHRAEG_Q = { unten: "zur oberen Brust knapp unter dem Schlüsselbein", neig: "Bank auf etwa 30 Grad", abspreizen: "Ellbogen etwa 45 bis 70 Grad", lot: "Unterarme etwa senkrecht unter der Stange" }
const FLOOR_Q = { unten: "Stange über der Brust", abspreizen: "Ellbogen etwa 45 Grad abgespreizt", griff: "etwas breiter als schulterbreit" }
/** Alle Varianten des Drückens im Liegen */
const BANK_SOLL: Record<string, (m: Messung) => Pruefung[]> = {}
const LH_BD: BD = { griff: [1.35, 1.9], untenY: [-0.16, -0.06], untenZ: [0.1, 0.19], brust: [0, 0.045], abspreizen: [45, 70], quelle: { ...LH_Q, brust: "Berühr die Brust leicht" } }
const ENG_BD: BD = { griff: [0.95, 1.3], untenY: [-0.17, -0.06], untenZ: [0.1, 0.2], brust: [0, 0.045], abspreizen: [30, 45], quelle: { griff: "etwa schulterbreit, Zeigefinger über den Schultern", unten: "zur unteren Brust", brust: "zur unteren Brust", abspreizen: "Ellbogen 30 bis 45 Grad abgespreizt", lot: "Unterarme möglichst senkrecht unter der Stange" } }
Object.assign(BANK_SOLL, {
  bankdruecken_lh: bankSoll(LH_BD),
  bankdruecken_lh_pause: bankSoll(LH_BD),
  bankdruecken_baender: bankSoll(LH_BD),
  bankdruecken_multipresse: bankSoll(LH_BD),
  spoto_press: bankSoll({ ...LH_BD, untenZ: [0.13, 0.22], brust: [0.02, 0.065], quelle: { ...LH_Q, brust: "eine bis zwei Fingerbreiten über der Brust, ohne sie zu berühren" } }),
  larsen_press: bankSoll({ ...LH_BD, fuesse: false, larsen: true }),
  bankdruecken_eng: bankSoll(ENG_BD),
  bankdruecken_untergriff: bankSoll({ ...ENG_BD, griff: [1.0, 1.45], abspreizen: [15, 45], quelle: { ...ENG_BD.quelle, griff: "im Untergriff etwa schulterbreit oder etwas breiter", abspreizen: "Ellbogen bleiben eng am Körper" } }),
  bankdruecken_kh: bankSoll(KH_BD),
  kh_druecken_neutral: bankSoll({ ...KH_BD, griffOben: [0.28, 0.42], abspreizen: [10, 35], quelle: { ...KH_Q, griffOben: "Hanteln parallel zueinander", abspreizen: "Ellbogen streifen fast den Oberkörper" } }),
  squeeze_press: bankSoll({ ...KH_BD, untenZ: [0.14, 0.25], griffOben: [0.08, 0.16], brust: [0.03, 0.1], lot: 90, abspreizen: [3, 35], quelle: { griffOben: "die Hanteln berühren sich auf ganzer Länge", unten: "zur Brust", brust: "zur Brust", abspreizen: "Ellbogen bleiben nah am Körper" } }),
  kh_bankdruecken_einarmig: bankSoll({ ...KH_BD, griffOben: undefined, arm: "r" }),
  schraegbankdruecken_lh: bankSoll({ griff: [1.35, 1.9], untenY: [-0.05, 0.02], untenZ: [0.05, 0.16], brust: [0, 0.05], abspreizen: [35, 75], lot: 30, neig: [25, 35], quelle: { ...SCHRAEG_Q, griff: "etwas breiter als schulterbreit" } }),
  schraegbankdruecken_multipresse: bankSoll({ griff: [1.35, 1.9], untenY: [-0.05, 0.02], untenZ: [0.05, 0.16], brust: [0, 0.05], abspreizen: [35, 75], lot: 30, neig: [25, 35], quelle: { ...SCHRAEG_Q, griff: "etwas breiter als schulterbreit" } }),
  schraegbankdruecken_eng: bankSoll({ griff: [0.95, 1.3], untenY: [-0.06, 0.02], untenZ: [0.05, 0.16], brust: [0, 0.05], abspreizen: [15, 45], lot: 30, neig: [25, 40], quelle: { ...SCHRAEG_Q, neig: "Bank auf 30 bis 45 Grad", griff: "schulterbreit", abspreizen: "Ellbogen bleiben eng am Körper" } }),
  schraegbankdruecken_kh: bankSoll({ ...KH_BD, untenY: [-0.04, 0.045], untenZ: [0.02, 0.13], abspreizen: [35, 60], neig: [25, 35], quelle: { ...KH_Q, unten: "auf Höhe der oberen Brust neben dem Körper", abspreizen: "Ellbogen etwa 45 Grad vom Körper weg", lot: "die Unterarme stehen senkrecht", neig: "Bank auf etwa 30 Grad" } }),
  schraegbankdruecken_kh_pause: bankSoll({ ...KH_BD, untenY: [-0.04, 0.045], untenZ: [0.02, 0.13], abspreizen: [35, 60], neig: [25, 35], quelle: { ...KH_Q, unten: "zur oberen Brust", neig: "Bank auf etwa 30 Grad" } }),
  schraegbankdruecken_kh_einarmig: bankSoll({ ...KH_BD, griffOben: undefined, arm: "r", untenY: [-0.04, 0.045], untenZ: [0.02, 0.13], abspreizen: [35, 60], neig: [25, 35], quelle: { ...KH_Q, unten: "Hantel an der oberen Brust", neig: "Bank auf etwa 30 Grad" } }),
  schraegbankdruecken_kh_flach: bankSoll({ ...KH_BD, untenY: [-0.1, 0.02], abspreizen: [45, 60], neig: [14, 22], quelle: { ...KH_Q, neig: "etwa 15 bis 20 Grad", abspreizen: "Ellbogen etwa 45 bis 60 Grad abgespreizt", unten: "neben die Brust" } }),
  schraegbank_squeeze_press: bankSoll({ ...KH_BD, untenZ: [0.14, 0.25], griffOben: [0.08, 0.16], untenY: [-0.06, 0.02], untenZ: [0.08, 0.22], brust: [0.03, 0.1], lot: 90, abspreizen: [3, 35], neig: [25, 35], quelle: { griffOben: "Hanteln zusammen, fest gegeneinander", unten: "zur oberen Brust", brust: "zur oberen Brust", abspreizen: "Ellbogen nah am Körper", neig: "Bank auf etwa 30 Grad" } }),
  floor_press_lh: bankSoll({ griff: [1.35, 1.9], untenY: [-0.2, -0.08], untenZ: [0.15, 0.3], abspreizen: [35, 55], ellbogenBoden: [0.02, 0.08], quelle: FLOOR_Q }),
  floor_press_kh: bankSoll({ untenY: [-0.2, -0.08], untenZ: [0.15, 0.3], abspreizen: [35, 55], ellbogenBoden: [0.02, 0.08], quelle: FLOOR_Q }),
  floor_press_kh_einarmig: bankSoll({ arm: "r", untenY: [-0.2, -0.08], untenZ: [0.15, 0.3], abspreizen: [35, 55], ellbogenBoden: [0.02, 0.08], quelle: FLOOR_Q }),
})


// ---------------------------------------------------------------- Liegestütz
/** Punkt aus dem Rahmen des Rumpfs (seitlich, den Rumpf hinauf, nach vorn) in die Welt */
const rumpfWelt = (m: Punkte, q: V): V => {
  const b = p(m, "g:becken"), h = p(m, "g:hals")
  const lang = Math.hypot(h[1] - b[1], h[2] - b[2])
  const auf = [0, (h[1] - b[1]) / lang, (h[2] - b[2]) / lang]
  const vor = [0, -auf[2], auf[1]]
  const sm = mitte(p(m, "g:schulter_l"), p(m, "g:schulter_r"))
  return [sm[0] + q[0], sm[1] + q[1] * auf[1] + q[2] * vor[1], sm[2] + q[1] * auf[2] + q[2] * vor[2]]
}
/** Körperlinie: Winkel an der Hüfte zwischen Schulter und Knöchel (180 = gerade) */
const koerperLinie = (m: Punkte, unten: "knoechel" | "knie" = "knoechel") => {
  const s = mitte(p(m, "g:schulter_l"), p(m, "g:schulter_r")), h = mitte(p(m, "g:huefte_l"), p(m, "g:huefte_r"))
  const f = unten === "knie" ? mitte(p(m, "g:knie_l"), p(m, "g:knie_r")) : mitte(p(m, "g:fuss_l"), p(m, "g:fuss_r"))
  return winkelBei(s, h, f)
}
interface LSo {
  /** Handabstand / Schulterbreite */
  griff?: Bereich
  /** Brust unten über der Stützfläche der Hände (m) */
  brust: Bereich
  handHoch?: number
  abspreizen: Bereich
  knie?: boolean
  /** Hände oben unter den Schultern: Handgelenk waagerecht zur Schulter (m) */
  unterSchulter?: Bereich
  arme?: ("l" | "r")[]
  /** Arme, die sich beugen (Archer: nur einer) */
  beugeArme?: ("l" | "r")[]
  /** Hände, die am Boden bleiben (T-Liegestütz: die Stützhand) */
  stuetzArme?: ("l" | "r")[]
  /** ein Bein bewegt sich unten (Spiderman) */
  beinFrei?: boolean
  /** kleinster Winkel der Körperlinie */
  linie?: number
  /** Flugphase (explosiv) */
  flug?: (m: Messung) => Punkte
  extra?: (m: Messung, o: Punkte, u: Punkte) => Pruefung[]
  quelle: Record<string, string>
}
const schulterY = (x: Punkte) => (p(x, "g:schulter_l")[1] + p(x, "g:schulter_r")[1]) / 2
const lsSoll = (k: LSo) => (m: Messung): Pruefung[] => {
  // oben: Startlage; unten: tiefste Schulter
  const o = m.start, u = m.alle.reduce((a, b) => (schulterY(b) < schulterY(a) ? b : a))
  const arme = k.arme ?? SEITEN
  const r = [...ruhig(m)]
  const amBoden = k.flug ? m.alle.filter((x) => x !== k.flug!(m)) : m.alle
  r.push(pr("Hände bleiben am Boden (m)", bleibt({ ...m, alle: amBoden }, (k.stuetzArme ?? arme).map((a) => `hand_${a}`)), 0, 0.02, "Hände fest aufgesetzt"))
  if (k.flug) {
    const f = k.flug(m)
    r.push(pr("Hände heben ab (m)", Math.min(p(f, "hand_l")[1], p(f, "hand_r")[1]) - p(o, "hand_l")[1], 0.03, 0.12, "sodass die Hände vom Boden abheben"))
  }
  if (!k.knie && !k.beinFrei) r.push(pr("Füße bleiben stehen (m)", bleibt(m, ["fuss_l", "fuss_r"]), 0, 0.02, "die Füße stehen auf den Zehenspitzen"))
  for (const [x, w] of (k.beinFrei ? [[o, "oben"]] : [[o, "oben"], [u, "unten"]]) as [Punkte, string][])
    r.push(pr(`Körper gerade ${w} (°)`, koerperLinie(x, k.knie ? "knie" : "knoechel"), k.linie ?? 170, 180, k.quelle.linie ?? "Kopf, Schultern, Hüfte und Fersen bilden eine Linie"))
  if (k.griff) r.push(pr("Handabstand / Schulterbreite", griffbreite(o) / schulterbreite(o), k.griff[0], k.griff[1], k.quelle.griff ?? "Hände etwas breiter als schulterbreit"))
  if (k.unterSchulter) for (const a of arme) r.push(pr(`Hand ${a} oben unter der Schulter (m)`, p(o, `g:hand_${a}`)[2] - p(o, `g:schulter_${a}`)[2], k.unterSchulter[0], k.unterSchulter[1], k.quelle.unterSchulter ?? "die Schultern über den Händen"))
  for (const a of arme) r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(o, a), 160, 180, "bis die Arme gestreckt sind"))
  const c = rumpfWelt(u, [0, -0.1, brustBei(o, -0.1)])
  r.push(pr("Brust unten über der Stützfläche (m)", c[1] - (k.handHoch ?? 0), k.brust[0], k.brust[1], k.quelle.brust ?? "bis die Brust knapp über dem Boden ist"))
  for (const a of k.beugeArme ?? arme) r.push(pr(`Ellbogen ${a} unten (°)`, abspreizen(u, a), k.abspreizen[0], k.abspreizen[1], k.quelle.abspreizen ?? "Ellbogen etwa 45 Grad nach hinten"))
  if (k.extra) r.push(...k.extra(m, o, u))
  return r
}
const LS_SO: LSo = { griff: [1.05, 1.5], brust: [0.02, 0.08], abspreizen: [35, 60], unterSchulter: [-0.04, 0.04], quelle: {} }
const abstand = (a: V, b: V) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
const LS_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  liegestuetz: lsSoll(LS_SO),
  liegestuetz_gewicht: lsSoll(LS_SO),
  liegestuetz_band: lsSoll(LS_SO),
  liegestuetz_explosiv: lsSoll({ ...LS_SO, flug: (m) => m.alle[2] }),
  liegestuetz_knie: lsSoll({ ...LS_SO, knie: true, quelle: { linie: "Knie, Hüfte und Schultern bilden eine gerade Linie" } }),
  liegestuetz_diamant: lsSoll({ griff: [0.0, 0.4], brust: [0.05, 0.13], abspreizen: [3, 30], unterSchulter: [-0.15, -0.05], quelle: { griff: "Daumen und Zeigefinger berühren sich", brust: "bis die Brust die Hände fast berührt", abspreizen: "die Ellbogen streifen nah am Körper nach hinten", unterSchulter: "Hände unter der Brustmitte" } }),
  liegestuetz_erhoeht: lsSoll({ ...LS_SO, handHoch: 0.5, brust: [0.0, 0.06], quelle: { brust: "Berühr die Kante leicht mit der Brust" } }),
  liegestuetz_fuesse_hoch: lsSoll({ ...LS_SO, unterSchulter: [-0.07, 0.04], extra: (_m, o) => [pr("Füße auf der Box (m)", Math.min(p(o, "fuss_l")[1], p(o, "fuss_r")[1]), 0.4, 0.56, "Füße auf einer Box von 30 bis 50 Zentimetern")] }),
  liegestuetz_defizit: lsSoll({ ...LS_SO, handHoch: 0.1, brust: [-0.06, 0.0], quelle: { brust: "tiefer als bei einem normalen Liegestütz" } }),
  liegestuetz_archer: lsSoll({ linie: 160, griff: [1.8, 2.3], brust: [0.03, 0.11], abspreizen: [30, 70], beugeArme: ["r"], quelle: { griff: "etwa doppelt schulterbreit", brust: "bis die Brust knapp über der rechten Hand ist" }, extra: (_m, _o, u) => [pr("Linker Arm fast gestreckt (°)", ellbogenWinkel(u, "l"), 140, 180, "der linke Arm bleibt fast gestreckt"), pr("Brust über der rechten Hand (m)", mitte(p(u, "g:schulter_l"), p(u, "g:schulter_r"))[0] - p(u, "hand_r")[0], 0, 0.25, "zur rechten Hand absenken")] }),
  liegestuetz_einarmig: lsSoll({ brust: [0.04, 0.13], abspreizen: [5, 40], arme: ["r"], unterSchulter: [-0.05, 0.05], quelle: { brust: "ideal bis die Brust knapp über dem Boden ist", abspreizen: "der Ellbogen bleibt nah am Körper", unterSchulter: "etwa unter der Schulter" }, extra: (_m, o) => [pr("Füße deutlich breiter als schulterbreit", fussbreite(o) / schulterbreite(o), 1.4, 2.4, "Füße deutlich breiter als schulterbreit")] }),
  pseudo_planche_liegestuetz: lsSoll({ griff: [0.8, 1.3], brust: [0.03, 0.11], abspreizen: [0, 30], unterSchulter: [-0.26, -0.15], quelle: { unterSchulter: "die Schultern deutlich vor den Händen", abspreizen: "die Ellbogen bleiben eng am Körper" } }),
  liegestuetz_spiderman: lsSoll({ ...LS_SO, beinFrei: true, extra: (m) => {
    const u = m.alle[1]
    return [pr("Knie nah am Ellbogen unten (m)", abstand(p(u, "g:knie_r"), p(u, "g:ellbogen_r")), 0, 0.3, "das Knie nah am Ellbogen")]
  } }),
  liegestuetz_t: lsSoll({ ...LS_SO, beinFrei: true, griff: [0.95, 1.3], stuetzArme: ["l"], quelle: { griff: "Hände schulterbreit" }, extra: (m) => {
    const t = m.alle[2]
    const s = p(t, "g:schulter_r"), h = p(t, "g:hand_r")
    return [
      pr("Rechter Arm senkrecht zur Decke (°)", grad(Math.acos((h[1] - s[1]) / abstand(h, s))), 0, 20, "der rechte Arm zeigt gestreckt zur Decke"),
      pr("Körper gerade im Seitstütz (°)", koerperLinie(t), 165, 180, "der Körper bildet eine Linie"),
    ]
  } }),
}


// ---------------------------------------------------------------- Dips
const dipSoll = (m: Messung): Pruefung[] => {
  const o = m.alle[0], u = m.alle.reduce((a, b) => (schulterY(b) < schulterY(a) && p(b, "fuss_l")[1] > 0.1 ? b : a))
  const r = [...ruhig(m)]
  r.push(pr("Hände bleiben auf den Holmen (m)", bleibt(m, ["hand_l", "hand_r"]), 0, 0.02, "Stütz dich auf die Holme"))
  r.push(pr("Griff / Schulterbreite", griffbreite(o) / schulterbreite(o), 1.0, 1.5, "Hände etwa schulterbreit oder etwas breiter"))
  for (const a of SEITEN) r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(o, a), 160, 180, "mit gestreckten Armen"))
  r.push(pr("Oberkörper vorgeneigt oben (°)", rumpfneigung(o), 18, 32, "neig den Oberkörper etwa 20 bis 30 Grad nach vorn"))
  r.push(pr("Oberkörper vorgeneigt unten (°)", rumpfneigung(u), 18, 35, "neig den Oberkörper etwa 20 bis 30 Grad nach vorn"))
  for (const a of SEITEN) {
    const e = p(u, `g:ellbogen_${a}`), sh = p(u, `g:schulter_${a}`)
    r.push(pr(`Oberarm ${a} unten waagerecht (m)`, e[1] - sh[1], -0.04, 0.04, "bis die Oberarme etwa waagerecht sind"))
    r.push(pr(`Ellbogen ${a} leicht nach außen (°)`, grad(Math.atan2(Math.abs(e[0]) - Math.abs(sh[0]), sh[2] - e[2])), 5, 35, "die Ellbogen zeigen leicht nach außen hinten"))
  }
  r.push(pr("Füße frei über dem Boden unten (m)", Math.min(p(u, "fuss_l")[1], p(u, "fuss_r")[1], p(u, "ferse_l")[1], p(u, "ferse_r")[1]), 0.05, 2, "Kreuz die Füße hinter dir"))
  return r
}
const DIP_SOLL: Record<string, (m: Messung) => Pruefung[]> = { dips_brust: dipSoll, dips_gewicht: dipSoll, dips_negativ: dipSoll }


// ---------------------------------------------------------------- Flys, Kabel, Drücken im Stand
const ellbogenAlle = (m: Messung, arme: readonly ("l" | "r")[]) => m.alle.flatMap((x) => arme.map((a) => ellbogenWinkel(x, a)))
const gleicherWinkel = (m: Messung, arme: readonly ("l" | "r")[] = SEITEN): Pruefung[] => {
  const w = ellbogenAlle(m, arme)
  return [
    pr("Ellbogen leicht gebeugt (°, kleinster)", Math.min(...w), 148, 172, "die Ellbogen sind leicht gebeugt"),
    pr("Ellbogen leicht gebeugt (°, größter)", Math.max(...w), 148, 174, "die Ellbogen sind leicht gebeugt"),
    pr("Ellbogenwinkel bleibt gleich (°)", Math.max(...w) - Math.min(...w), 0, 10, "Der Ellbogenwinkel bleibt die ganze Zeit gleich"),
  ]
}
interface FL {
  /** Hände oben über der Brust (Rahmen: den Rumpf hinauf) */
  obenY: Bereich
  neig?: Bereich
  /** Floor: Oberarme unten am Boden */
  boden?: boolean
  quelle: Record<string, string>
}
const flySoll = (k: FL) => (m: Messung): Pruefung[] => {
  const o = m.start, u = m.ziel
  const r = [...ruhig(m), ...gleicherWinkel(m)]
  r.push(pr("Füße bleiben stehen (m)", bleibt(m, ["ferse_l", "ferse_r", "fuss_l", "fuss_r"]), 0, 0.02, "die Füße fest am Boden"))
  r.push(pr("Hände oben kurz vor der Berührung (m)", griffbreite(o), 0.08, 0.25, "Stopp kurz bevor sie sich berühren"))
  // senkrecht über der Brust: waagerechter Abstand der Hände von der Schultermitte zum Becken hin
  const sm = mitte(p(o, "g:schulter_l"), p(o, "g:schulter_r")), bm = p(o, "g:becken"), st = stange(o)
  const zumBecken = [bm[0] - sm[0], 0, bm[2] - sm[2]], lz = Math.hypot(...zumBecken)
  r.push(pr("Hände oben über der Brust (m)", ((st[0] - sm[0]) * zumBecken[0] + (st[2] - sm[2]) * zumBecken[2]) / lz, k.obenY[0], k.obenY[1], k.quelle.oben ?? "über der Brust"))
  for (const a of SEITEN) {
    if (k.boden) r.push(pr(`Oberarm ${a} unten am Boden (m)`, p(u, `g:ellbogen_${a}`)[1], 0.02, 0.08, "bis die Oberarme sanft den Boden berühren"))
    else r.push(pr(`Oberarm ${a} unten auf Höhe des Oberkörpers (m)`, amRumpf(u, `g:ellbogen_${a}`)[2], -0.06, 0.05, "bis die Oberarme etwa auf Höhe des Oberkörpers sind"))
    r.push(pr(`Arm ${a} unten seitlich geöffnet (°)`, abspreizen(u, a), 65, 100, "in einem weiten Bogen seitlich"))
  }
  if (k.neig) {
    const b = p(u, "g:becken"), h = p(u, "g:hals")
    r.push(pr("Rücken gegen die Waagerechte (°)", grad(Math.atan2(h[1] - b[1], Math.abs(h[2] - b[2]))), k.neig[0], k.neig[1], "Bank auf etwa 30 Grad"))
  }
  return r
}
interface CR {
  /** Hände vorn zusammen in Höhe (Rahmen, den Rumpf hinauf) */
  zuY: Bereich
  /** Hände offen (Rahmen, den Rumpf hinauf) */
  aufY: Bereich
  rumpf: Bereich
  arme?: ("l" | "r")[]
  /** Hand vorn über die Mitte hinaus (einarmig) */
  ueberMitte?: boolean
  schritt?: boolean
  quelle: Record<string, string>
}
const standFest = (m: Messung, schritt = true): Pruefung[] => {
  const o = m.alle[0]
  const r = [...ruhig(m), pr("Füße bleiben stehen (m)", bleibt(m, ["ferse_l", "ferse_r", "fuss_l", "fuss_r"]), 0, 0.02, "die Füße bleiben stehen")]
  if (schritt) r.push(pr("Leichte Schrittstellung (m)", Math.abs(p(o, "ferse_l")[2] - p(o, "ferse_r")[2]), 0.25, 0.6, "Geh einen Schritt nach vorn in eine leichte Schrittstellung"))
  return r
}
const crossSoll = (k: CR) => (m: Messung): Pruefung[] => {
  const auf = m.start, zu = m.ziel
  const arme = k.arme ?? SEITEN
  const r = [...standFest(m, k.schritt !== false), ...gleicherWinkel(m, arme)]
  r.push(pr("Oberkörper (°)", rumpfneigung(zu), k.rumpf[0], k.rumpf[1], k.quelle.rumpf ?? "Oberkörper leicht nach vorn geneigt"))
  for (const a of arme) {
    r.push(pr(`Hand ${a} offen: Höhe (m)`, amRumpf(auf, `hand_${a}`)[1], k.aufY[0], k.aufY[1], k.quelle.auf))
    r.push(pr(`Hand ${a} offen: seitlich (m)`, Math.abs(amRumpf(auf, `hand_${a}`)[0]), 0.3, 0.7, k.quelle.auf))
    r.push(pr(`Hand ${a} vorn: Höhe (m)`, amRumpf(zu, `hand_${a}`)[1], k.zuY[0], k.zuY[1], k.quelle.zu))
    r.push(pr(`Hand ${a} vorn vor dem Körper (m)`, amRumpf(zu, `hand_${a}`)[2], 0.25, 0.55, k.quelle.zu))
  }
  if (k.ueberMitte) r.push(pr("Hand über die Körpermitte hinaus (m)", amRumpf(zu, "hand_r")[0], 0.03, 0.2, k.quelle.zu))
  else r.push(pr("Hände vorn zusammen (m)", griffbreite(zu), 0.06, 0.2, k.quelle.zu))
  return r
}
interface DS {
  arme?: ("l" | "r")[]
  quelle: Record<string, string>
}
const druckStandSoll = (k: DS) => (m: Messung): Pruefung[] => {
  const n = m.start, v = m.ziel
  const arme = k.arme ?? SEITEN
  const r = [...standFest(m), pr("Oberkörper leicht nach vorn (°)", rumpfneigung(v), 2, 15, "er neigt sich nur leicht nach vorn")]
  for (const a of arme) {
    r.push(pr(`Hand ${a} neben der Brust (m)`, amRumpf(n, `hand_${a}`)[1], -0.2, -0.04, "die Hände neben der Brust"))
    r.push(pr(`Ellbogen ${a} hinten außen (°)`, abspreizen(n, a), 45, 62, "die Ellbogen zeigen etwa 45 bis 60 Grad nach hinten außen"))
    r.push(pr(`Arm ${a} vorn fast gestreckt (°)`, ellbogenWinkel(v, a), 150, 178, "bis die Arme fast gestreckt sind"))
    r.push(pr(`Hand ${a} vorn auf Brusthöhe (m)`, amRumpf(v, `hand_${a}`)[1], -0.18, 0.02, "gerade nach vorn"))
  }
  if (!k.arme) r.push(pr("Hände vorn zusammen (m)", griffbreite(v), 0.06, 0.2, "die Hände treffen sich vor der Brust"))
  return r
}
const abwechselndSoll = (m: Messung): Pruefung[] => {
  // alle: links unten, beide oben, rechts unten
  const [l, o, rr] = m.alle
  const r = [...ruhig(m), pr("Füße bleiben stehen (m)", bleibt(m, ["ferse_l", "ferse_r", "fuss_l", "fuss_r"]), 0, 0.02, "Füße fest am Boden")]
  for (const [x, unten, oben] of [[l, "l", "r"], [rr, "r", "l"]] as const) {
    const h = amRumpf(x, `hand_${unten}`)
    r.push(pr(`Hantel ${unten} neben der Brust (m)`, h[2], 0.04, 0.15, "Senk eine Hantel kontrolliert neben die Brust ab"))
    r.push(pr(`Unterarm ${unten} senkrecht (°)`, unterarmLot(x, unten), 0, 15, "Unterarme etwa senkrecht"))
    r.push(pr(`Arm ${oben} bleibt oben gestreckt (°)`, ellbogenWinkel(x, oben), 155, 180, "die andere bleibt oben ruhig stehen"))
  }
  for (const a of SEITEN) r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(o, a), 155, 180, "die Arme sind fast gestreckt"))
  return r
}
const sliderSoll = (m: Messung): Pruefung[] => {
  const o = m.start, u = m.ziel
  return [
    ...ruhig(m),
    pr("Knie bleiben am Boden (m)", bleibt(m, ["g:knie_l", "g:knie_r"]), 0, 0.02, "Liegestützposition auf den Knien"),
    pr("Körper gerade oben (°)", koerperLinie(o, "knie"), 168, 180, "Spann Bauch und Gesäß an"),
    pr("Körper gerade unten (°)", koerperLinie(u, "knie"), 168, 180, "Spann Bauch und Gesäß an"),
    pr("Hände oben unter den Schultern", griffbreite(o) / schulterbreite(o), 0.85, 1.15, "die Hände unter den Schultern"),
    pr("Hände unten seitlich auseinander", griffbreite(u) / schulterbreite(u), 2.2, 3.0, "Lass die Hände langsam seitlich auseinandergleiten"),
    ...gleicherWinkel(m),
  ]
}
const FLY_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  liegestuetz_wand: (m) => {
    const o = m.start, u = m.ziel
    const wand = p(o, "hand_l")[2] + 0.05
    const c = rumpfWelt(u, [0, -0.1, brustBei(o, -0.1)])
    const r = [...ruhig(m), pr("Hände bleiben an der Wand (m)", bleibt(m, ["hand_l", "hand_r"]), 0, 0.02, "Leg die Hände flach an die Wand"), pr("Ballen bleiben stehen (m)", bleibt(m, ["fuss_l", "fuss_r"]), 0, 0.02, "die Füße hüftbreit")]
    r.push(pr("Handabstand / Schulterbreite", griffbreite(o) / schulterbreite(o), 1.05, 1.5, "etwas breiter als schulterbreit"))
    r.push(pr("Körper leicht schräg oben (°)", rumpfneigung(o), 8, 25, "sodass der Körper leicht schräg ist"))
    for (const [x, w] of [[o, "oben"], [u, "unten"]] as const) r.push(pr(`Körper gerade ${w} (°)`, koerperLinie(x), 170, 180, "Der Körper bleibt dabei gerade wie ein Brett"))
    for (const a of SEITEN) {
      r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(o, a), 160, 180, "bis die Arme gestreckt sind"))
      r.push(pr(`Hand ${a} auf Schulterhöhe (m)`, p(o, `g:hand_${a}`)[1] - p(o, `g:schulter_${a}`)[1], -0.06, 0.06, "auf Schulterhöhe"))
      r.push(pr(`Ellbogen ${a} unten (°)`, abspreizen(u, a), 35, 60, "Die Ellbogen zeigen etwa 45 Grad nach außen hinten"))
    }
    // Nasenspitze etwa 10 cm vor dem Kopfgelenk
    r.push(pr("Nase unten kurz vor der Wand (m)", wand - p(u, "g:kopf")[2] - 0.1, 0.0, 0.08, "Stopp kurz bevor die Nase die Wand berührt"))
    void c
    return r
  },
  flys_kh: flySoll({ obenY: [0.0, 0.1], quelle: { oben: "Drück die Hanteln über die Brust" } }),
  kabel_flys_flachbank: flySoll({ obenY: [0.0, 0.1], quelle: { oben: "die Arme über der Brust" } }),
  flys_kh_schraeg: flySoll({ obenY: [-0.02, 0.08], neig: [25, 35], quelle: { oben: "über die obere Brust" } }),
  kabel_flys_schraegbank: flySoll({ obenY: [-0.02, 0.08], neig: [25, 35], quelle: { oben: "die Arme über der oberen Brust" } }),
  flys_kh_boden: flySoll({ obenY: [0.0, 0.1], boden: true, quelle: { oben: "über die Brust" } }),
  kabel_crossover_oben: crossSoll({ zuY: [-0.38, -0.22], aufY: [0.1, 0.4], rumpf: [8, 25], quelle: { zu: "bis sie sich etwa vor dem Bauchnabel treffen", auf: "seitlich hinten oben geöffnet" } }),
  kabel_crossover_mehrere_hoehen: crossSoll({ zuY: [-0.38, -0.22], aufY: [0.1, 0.4], rumpf: [8, 25], quelle: { zu: "von oben nach unten vor den Bauch", auf: "Rollen ganz oben" } }),
  kabel_flys_mitte: crossSoll({ zuY: [-0.16, 0.0], aufY: [-0.08, 0.08], rumpf: [5, 22], quelle: { zu: "in einem waagerechten Bogen vor der Brust zusammen", auf: "Die Arme sind seitlich geöffnet" } }),
  band_flys: crossSoll({ zuY: [-0.16, 0.0], aufY: [-0.08, 0.08], rumpf: [0, 15], quelle: { zu: "in einem Bogen vor der Brust zusammen", auf: "die Arme sind seitlich geöffnet", rumpf: "der Bauch ist angespannt" } }),
  kabel_crossover_unten: crossSoll({ zuY: [0.05, 0.2], aufY: [-0.5, -0.25], rumpf: [-4, 10], quelle: { zu: "bis sie sich etwa auf Kinnhöhe treffen", auf: "Die Arme sind seitlich unten geöffnet", rumpf: "aufrechter Oberkörper" } }),
  kabel_flys_einarmig: crossSoll({ arme: ["r"], ueberMitte: true, schritt: false, zuY: [-0.16, 0.02], aufY: [-0.08, 0.08], rumpf: [-4, 10], quelle: { zu: "in einem Bogen vor die Brust und über die Körpermitte hinaus", auf: "Der Arm ist seitlich geöffnet", rumpf: "aufrecht" } }),
  kabel_brustdruecken_stehend: druckStandSoll({ quelle: {} }),
  band_brustdruecken: druckStandSoll({ quelle: {} }),
  kabel_drueck_einarmig: druckStandSoll({ arme: ["r"], quelle: {} }),
  kh_bankdruecken_abwechselnd: abwechselndSoll,
  slider_flys: sliderSoll,
  kabel_brustdruecken_bank: bankSoll(KH_BD),
  kh_druecken_gymnastikball: bankSoll({ ...KH_BD, untenY: [-0.06, 0.04], fussBreit: [0.18, 0.3], quelle: { ...KH_Q, fussBreit: "Die Füße stehen hüftbreit" }, extra: (_m, o) => {
    const s = mitte(p(o, "g:schulter_l"), p(o, "g:schulter_r")), h = mitte(p(o, "g:huefte_l"), p(o, "g:huefte_r")), k = mitte(p(o, "g:knie_l"), p(o, "g:knie_r")), f = mitte(p(o, "g:fuss_l"), p(o, "g:fuss_r"))
    return [
      pr("Knie, Hüfte und Schultern in einer Linie (°)", winkelBei(s, h, k), 168, 180, "bis Knie, Hüfte und Schultern eine Linie bilden"),
      pr("Knie über den Fersen (m)", Math.abs(k[2] - f[2]), 0, 0.05, "die Knie über den Fersen"),
    ]
  } }),
  svend_press: (m) => {
    const n = m.start, v = m.ziel
    return [
      ...standFest(m, false),
      pr("Scheibe an der Brust (m)", amRumpf(n, "stange")[2], 0.12, 0.26, "vor die Brust"),
      pr("Arme vorn fast gestreckt (°)", Math.min(ellbogenWinkel(v, "l"), ellbogenWinkel(v, "r")), 150, 180, "Streck die Arme langsam nach vorn"),
      pr("Handflächen zusammen (m)", griffbreite(v), 0.03, 0.1, "Drück die Handflächen fest gegeneinander"),
      pr("Auf Brusthöhe (m)", amRumpf(v, "stange")[1], -0.18, 0.0, "vor der Brust"),
      pr("Oberkörper aufrecht (°)", Math.abs(rumpfneigung(v)), 0, 8, "den Oberkörper aufrecht"),
    ]
  },
  brust_isometrisch: (m) => {
    const v = m.ziel
    const r = [...standFest(m, false), pr("Handflächen zusammen (m)", griffbreite(v), 0.03, 0.1, "bring die Handflächen vor der Brust zusammen")]
    for (const a of SEITEN) {
      r.push(pr(`Unterarm ${a} waagerecht (m)`, Math.abs(p(v, `g:ellbogen_${a}`)[1] - p(v, `g:hand_${a}`)[1]), 0, 0.05, "die Unterarme bilden etwa eine waagerechte Linie"))
      r.push(pr(`Ellbogen ${a} auf Brusthöhe (m)`, amRumpf(v, `g:ellbogen_${a}`)[1], -0.18, 0.0, "Die Ellbogen sind auf Brusthöhe seitlich angehoben"))
    }
    return r
  },
}


// ---------------------------------------------------------------- Klimmzug
const STANGE_Y = 2.12
interface KZ {
  griff: Bereich
  /** Ellbogen oben: seitlich (weit) oder nah am Körper (Grad, gesehen von vorn) */
  ellbogenSeite: Bereich
  lSitz?: boolean
  /** nur Schulterblätter: Arme bleiben gestreckt, Körper hebt sich einige Zentimeter */
  schulterblatt?: boolean
  quelle: Record<string, string>
}
const kinnY = (m: Punkte) => p(m, "g:kopf")[1] - 0.06
const zugSoll = (k: KZ) => (m: Messung): Pruefung[] => {
  // Schulterblatt-Klimmzug: die Schultergelenke sinken oben im Rumpf, daher Start und Ziel statt der Höhe
  const h = k.schulterblatt ? m.start : m.alle.reduce((a, b) => (schulterY(b) < schulterY(a) ? b : a))
  const o = k.schulterblatt ? m.ziel : m.alle.reduce((a, b) => (schulterY(b) > schulterY(a) ? b : a))
  const r = [...ruhig(m), pr("Hände bleiben an der Stange (m)", bleibt(m, ["hand_l", "hand_r"]), 0, 0.02, "Greif die Stange")]
  r.push(pr("Griffbreite / Schulterbreite", griffbreite(h) / schulterbreite(h), k.griff[0], k.griff[1], k.quelle.griff))
  for (const a of SEITEN) r.push(pr(`Arm ${a} im Hang gestreckt (°)`, ellbogenWinkel(h, a), 160, 180, "Häng dich mit gestreckten Armen aus"))
  r.push(pr("Körper hängt ruhig (°)", Math.abs(rumpfneigung(h)), 0, 10, "ohne Schwung"))
  r.push(pr("Füße frei (m)", Math.min(...m.alle.map((x) => Math.min(p(x, "fuss_l")[1], p(x, "fuss_r")[1], p(x, "ferse_l")[1], p(x, "ferse_r")[1]))), 0.05, 3, "im Hang"))
  if (k.lSitz) for (const x of [h, o]) r.push(pr("Beine waagerecht (m)", Math.abs(p(x, "g:fuss_l")[1] - p(x, "g:huefte_l")[1]), 0, 0.1, "Heb die gestreckten Beine nach vorn, bis sie etwa waagerecht sind"))
  if (k.schulterblatt) {
    for (const a of SEITEN) r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(o, a), 160, 180, "ohne die Ellbogen zu beugen"))
    r.push(pr("Körper hebt sich (m)", p(o, "g:becken")[1] - p(h, "g:becken")[1], 0.03, 0.1, "Dein Körper hebt sich dabei einige Zentimeter"))
    return r
  }
  r.push(pr("Kinn oben über der Stange (m)", kinnY(o) - STANGE_Y, 0.0, 0.1, k.quelle.oben ?? "bis das Kinn über der Stange ist"))
  for (const a of SEITEN) {
    const e = p(o, `g:ellbogen_${a}`), sh = p(o, `g:schulter_${a}`)
    r.push(pr(`Ellbogen ${a} oben unten (m)`, sh[1] - e[1], 0.08, 0.25, "Zieh die Ellbogen nach unten"))
    r.push(pr(`Ellbogen ${a} oben seitlich (°)`, grad(Math.atan2(Math.abs(e[0]) - Math.abs(sh[0]), sh[1] - e[1])), k.ellbogenSeite[0], k.ellbogenSeite[1], k.quelle.ellbogen))
  }
  return r
}
const KZ_OBER: KZ = { griff: [1.1, 1.45], ellbogenSeite: [15, 45], quelle: { griff: "etwas breiter als schulterbreit im Obergriff", ellbogen: "die Ellbogen nach unten und hinten zu den Rippen" } }
const KZ_ENG: KZ = { griff: [0.9, 1.2], ellbogenSeite: [0, 25], quelle: { griff: "schulterbreit", ellbogen: "die Ellbogen eng am Körper nach unten" } }
const klimmzugBoxSoll = (m: Messung): Pruefung[] => {
  const h = m.start, o = m.ziel
  const r = [...ruhig(m), pr("Hände bleiben an der Stange (m)", bleibt(m, ["hand_l", "hand_r"]), 0, 0.02, "Greif die Stange")]
  r.push(pr("Griff schulterbreit", griffbreite(h) / schulterbreite(h), 0.85, 1.25, "Greif die Stange schulterbreit"))
  for (const a of SEITEN) {
    r.push(pr(`Arm ${a} im Hang gestreckt (°)`, ellbogenWinkel(h, a), 160, 180, "mit gestreckten Armen hängen"))
    r.push(pr(`Zehen ${a} auf der Box (m)`, p(h, `fuss_${a}`)[1], 0.2 + 0.03, 0.2 + 0.1, "die Füße oder Zehen berühren die Box"))
    r.push(pr(`Knie ${a} im Hang leicht gebeugt (°)`, kniewinkel(h, a), 140, 175, "Knie leicht gebeugt"))
  }
  r.push(pr("Kinn oben über der Stange (m)", kinnY(o) - STANGE_Y, 0.0, 0.1, "um das Kinn über die Stange zu bringen"))
  return r
}
const ZUG_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  klimmzug: zugSoll(KZ_OBER),
  klimmzug_gewicht: zugSoll(KZ_OBER),
  klimmzug_exzentrisch_betont: zugSoll(KZ_OBER),
  klimmzug_band: zugSoll(KZ_OBER),
  klimmzug_negativ: zugSoll(KZ_OBER),
  klimmzug_exzentrisch_overload: zugSoll(KZ_OBER),
  klimmzug_halten: zugSoll(KZ_OBER),
  klimmzug_untergriff: zugSoll(KZ_ENG),
  klimmzug_neutral: zugSoll({ ...KZ_ENG, quelle: { griff: "die Hände etwa schulterbreit", ellbogen: "die Ellbogen nah am Körper nach unten" } }),
  klimmzug_weit: zugSoll({ griff: [1.4, 1.7], ellbogenSeite: [35, 70], quelle: { griff: "etwa eineinhalbfach schulterbreit", ellbogen: "die Ellbogen seitlich nach unten zu den Hüften", oben: "bis die obere Brust nah an der Stange ist" } }),
  klimmzug_l_sit: zugSoll({ ...KZ_OBER, griff: [0.9, 1.45], lSitz: true }),
  klimmzug_schulterblatt: zugSoll({ ...KZ_ENG, schulterblatt: true }),
  klimmzug_box: klimmzugBoxSoll,
}


// ---------------------------------------------------------------- Latzug sitzend
interface LZ {
  rueck: Bereich
  griff?: Bereich
  untenY: Bereich
  ellbogenSeite: Bereich
  einarm?: boolean
  quelle: { rueck: string; griff?: string; unten: string; ellbogen: string }
}
const latSoll = (k: LZ) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Sitz und Füße bleiben (m)", bleibt(m, ["g:becken", "ferse_l", "ferse_r"]), 0, 0.03, "Bleib dabei ruhig sitzen, die Oberschenkel klemmen unter dem Polster")]
  for (const [x, w] of [[s, "oben"], [z, "unten"]] as const) r.push(pr(`Rücklage ${w} (°)`, -rumpfneigung(x), k.rueck[0], k.rueck[1], k.quelle.rueck))
  r.push(pr("Kein Schaukeln (°)", Math.abs(rumpfneigung(z) - rumpfneigung(s)), 0, 8, "ohne mit dem Oberkörper zu schaukeln"))
  for (const a of SEITEN) r.push(pr(`Oberschenkel ${a} waagerecht (m)`, Math.abs(p(s, `g:knie_${a}`)[1] - p(s, `g:huefte_${a}`)[1]), 0, 0.08, "die Oberschenkel klemmen unter dem Polster"))
  if (k.griff) r.push(pr("Griff / Schulterbreite", griffbreite(s) / schulterbreite(s), k.griff[0], k.griff[1], k.quelle.griff ?? ""))
  for (const a of k.einarm ? (["r"] as const) : SEITEN) {
    r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "die Arme sind oben gestreckt"))
    r.push(pr(`Hand ${a} oben über der Schulter (m)`, p(s, `hand_${a}`)[1] - p(s, `g:schulter_${a}`)[1], 0.42, 0.6, "Arm lang über dem Kopf"))
    r.push(pr(`Arm ${a} oben senkrecht (°)`, Math.abs(grad(Math.atan2(p(s, `hand_${a}`)[2] - p(s, `g:schulter_${a}`)[2], p(s, `hand_${a}`)[1] - p(s, `g:schulter_${a}`)[1]))), 0, 15, "die Stange hängt über dir"))
    const h = amRumpf(z, `hand_${a}`)
    r.push(pr(`Hand ${a} unten am Rumpf entlang (m)`, h[1], k.untenY[0], k.untenY[1], k.quelle.unten))
    r.push(pr(`Hand ${a} unten vor dem Rumpf (m)`, h[2], 0.04, 0.22, k.quelle.unten))
    const e = p(z, `g:ellbogen_${a}`), sh = p(z, `g:schulter_${a}`)
    r.push(pr(`Ellbogen ${a} unten nach unten (m)`, sh[1] - e[1], 0.1, 0.3, "die Ellbogen zeigen nach unten"))
    r.push(pr(`Ellbogen ${a} unten seitlich (°)`, grad(Math.atan2(Math.abs(e[0]) - Math.abs(sh[0]), sh[1] - e[1])), k.ellbogenSeite[0], k.ellbogenSeite[1], k.quelle.ellbogen))
  }
  return r
}
const LZ_WEIT: LZ = { rueck: [8, 22], griff: [1.35, 1.75], untenY: [-0.14, 0.02], ellbogenSeite: [30, 70], quelle: { rueck: "Lehn den Oberkörper leicht zurück, etwa 10 bis 20 Grad", griff: "etwa eineinhalbfach schulterbreit", unten: "bis knapp unter das Kinn oder zur oberen Brust", ellbogen: "die Ellbogen seitlich nach unten zu den Rippen" } }
const LZ_ENG: LZ = { rueck: [3, 18], untenY: [-0.15, -0.02], ellbogenSeite: [-10, 28], quelle: { rueck: "leicht zurückgelehnt", unten: "bis zur oberen Brust", ellbogen: "die Ellbogen nah am Körper nach unten" } }
const LAT_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  latzug: latSoll(LZ_WEIT),
  latzug_wechselnde_griffe: latSoll(LZ_WEIT),
  latzug_neutral: latSoll({ ...LZ_ENG, rueck: [2, 14], griff: [0.6, 1.2], quelle: { ...LZ_ENG.quelle, rueck: "Lehn dich minimal zurück", griff: "V-Griff oder Parallelgriffe", unten: "etwa auf Höhe der oberen Brust" } }),
  latzug_untergriff: latSoll({ ...LZ_ENG, griff: [0.9, 1.25], quelle: { ...LZ_ENG.quelle, griff: "schulterbreit im Untergriff" } }),
  latzug_maschine: latSoll({ ...LZ_ENG, rueck: [-3, 10], untenY: [-0.08, 0.06], ellbogenSeite: [-10, 35], quelle: { ...LZ_ENG.quelle, rueck: "die Brust ist aufgerichtet, der Rücken liegt nicht nach hinten durch", unten: "bis die Hände etwa auf Schulterhöhe sind", ellbogen: "die Ellbogen zu den Rippen" } }),
  latzug_einarmig: latSoll({ ...LZ_ENG, rueck: [0, 14], untenY: [-0.18, -0.03], einarm: true, quelle: { ...LZ_ENG.quelle, rueck: "mit fixierten Oberschenkeln sitzen", unten: "bis der Griff neben der Brust ist", ellbogen: "den Ellbogen nah am Körper nach unten zur Hüfte" } }),
}

// ---------------------------------------------------------------- Überzug
/** Winkel zwischen Oberarm und Rumpfachse (0 = am Rumpf nach unten, 180 = in Verlängerung über dem Kopf) */
const armBeugung = (m: Punkte, a: "l" | "r") => {
  const b = p(m, "g:becken"), h = p(m, "g:hals"), s = p(m, `g:schulter_${a}`), e = p(m, `g:ellbogen_${a}`)
  const ab: V = [b[0] - h[0], b[1] - h[1], b[2] - h[2]], oa: V = [e[0] - s[0], e[1] - s[1], e[2] - s[2]]
  return grad(Math.acos((ab[0] * oa[0] + ab[1] * oa[1] + ab[2] * oa[2]) / (Math.hypot(...ab) * Math.hypot(...oa))))
}
/** Höhe der Hand über der Schulter in Grad (Welt, 90 = senkrecht nach oben) */
const armHoehe = (m: Punkte, a: "l" | "r") => {
  const s = p(m, `g:schulter_${a}`), h = p(m, `hand_${a}`)
  return grad(Math.atan2(h[1] - s[1], Math.hypot(h[0] - s[0], h[2] - s[2])))
}
interface UZ {
  art: "stand" | "einarm" | "knie" | "liegend"
  ellbogen: Bereich
  /** Start und Ende als Beugung des Oberarms gegen den Rumpf */
  start: Bereich
  ende: Bereich
  quelle: { start: string; ende: string; ellbogen: string }
}
const ueberSoll = (k: UZ) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const arme = k.art === "einarm" ? (["r"] as const) : SEITEN
  const r = [...ruhig(m)]
  if (k.art !== "knie") r.push(pr("Füße bleiben stehen (m)", bleibt(m, ["ferse_l", "ferse_r"]), 0, 0.02, k.art === "liegend" ? "die Füße fest am Boden" : "Stand fest"))
  else r.push(pr("Knie bleiben (m)", bleibt(m, ["knie_l", "knie_r"]), 0, 0.03, "Knie dich vor den Turm"))
  if (k.art === "stand" || k.art === "einarm") {
    for (const [x, w] of [[s, "oben"], [z, "unten"]] as const) r.push(pr(`Oberkörper vorgeneigt ${w} (°)`, rumpfneigung(x), 15, 35, "der Oberkörper ist etwa 20 bis 30 Grad nach vorn geneigt"))
    for (const a of arme) r.push(pr(`Arm ${a} oben schräg nach oben (°)`, armHoehe(s, a), 20, 65, "die Arme sind schräg nach oben gestreckt"))
  }
  if (k.art === "knie") r.push(pr("Oberkörper richtet sich auf (°)", rumpfneigung(s) - rumpfneigung(z), 8, 30, "während sich der Oberkörper leicht aufrichtet"))
  if (k.art === "liegend") r.push(pr("Rücken auf der Bank (°)", Math.abs(Math.abs(rumpfneigung(s)) - 90), 0, 10, "Leg dich auf eine Flachbank"))
  for (const a of arme) {
    r.push(pr(`Arm ${a} am Anfang (°)`, armBeugung(s, a), k.start[0], k.start[1], k.quelle.start))
    r.push(pr(`Arm ${a} am Ende (°)`, armBeugung(z, a), k.ende[0], k.ende[1], k.quelle.ende))
    if (k.art !== "knie") for (const [x, w] of [[s, "Anfang"], [z, "Ende"]] as const) r.push(pr(`Ellbogen ${a} ${w} (°)`, ellbogenWinkel(x, a), k.ellbogen[0], k.ellbogen[1], k.quelle.ellbogen))
    if (k.art !== "knie") r.push(pr(`Ellbogenwinkel ${a} bleibt (°)`, Math.abs(ellbogenWinkel(s, a) - ellbogenWinkel(z, a)), 0, 12, "halte diesen Winkel während des ganzen Satzes"))
    else r.push(pr(`Ellbogen ${a} am Anfang leicht gebeugt (°)`, ellbogenWinkel(s, a), 145, 178, k.quelle.ellbogen))
  }
  if (k.art === "stand") for (const a of SEITEN) {
    const h = p(z, `hand_${a}`), hu = p(z, `g:huefte_${a}`), kn = p(z, `g:knie_${a}`)
    r.push(pr(`Hand ${a} unten an den Oberschenkeln (m)`, h[1] - (hu[1] + kn[1]) / 2, -0.15, 0.15, "bis zu den Oberschenkeln"))
    r.push(pr(`Hand ${a} unten vor dem Oberschenkel (m)`, h[2] - (hu[2] + kn[2]) / 2, -0.02, 0.18, "bis zu den Oberschenkeln"))
  }
  if (k.art === "einarm") {
    const h = p(z, "hand_r"), hu = p(z, "g:huefte_r")
    r.push(pr("Hand unten neben der Hüfte (m)", Math.abs(h[1] - hu[1]), 0, 0.15, "bis neben die Hüfte"))
    r.push(pr("Hand unten etwas hinter der Hüfte (m)", hu[2] - h[2], 0.0, 0.15, "und etwas dahinter"))
  }
  if (k.art === "knie") for (const a of SEITEN) {
    r.push(pr(`Arm ${a} am Anfang in Verlängerung des Rumpfes (°)`, armBeugung(s, a), 160, 185, "bis die Arme über dem Kopf in Verlängerung des Rumpfes sind"))
    const kopf = p(z, "g:kopf"), h = p(z, `hand_${a}`)
    r.push(pr(`Hand ${a} am Ende an Stirn oder Hals (m)`, Math.hypot(h[0] - kopf[0], h[1] - kopf[1], h[2] - kopf[2]), 0, 0.22, "bis zur Stirn oder zum Hals"))
  }
  return r
}
const UZ_STAND: UZ = { art: "stand", ellbogen: [145, 176], start: [140, 172], ende: [0, 35], quelle: { start: "die Arme sind schräg nach oben gestreckt", ende: "in einem Bogen nach unten bis zu den Oberschenkeln", ellbogen: "die Ellbogen sind leicht gebeugt und bleiben so" } }
const UEBER_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  ueberzug_kabel_gestreckt: ueberSoll(UZ_STAND),
  ueberzug_band: ueberSoll({ ...UZ_STAND, quelle: { ...UZ_STAND.quelle, ellbogen: "mit leicht gebeugten Ellbogen" } }),
  ueberzug_kabel_einarmig: ueberSoll({ ...UZ_STAND, art: "einarm", ende: [0, 25], quelle: { ...UZ_STAND.quelle, ende: "bis neben die Hüfte und etwas dahinter" } }),
  ueberzug_kabel_kniend: ueberSoll({ art: "knie", ellbogen: [145, 178], start: [160, 185], ende: [55, 140], quelle: { start: "Arme über dem Kopf in Verlängerung des Rumpfes", ende: "in einem Bogen nach unten bis zur Stirn oder zum Hals", ellbogen: "die Ellbogen sind leicht gebeugt" } }),
  ueberzug_kh: ueberSoll({ art: "liegend", ellbogen: [145, 176], start: [75, 100], ende: [155, 185], quelle: { start: "die Arme sind über der Brust", ende: "bis die Oberarme etwa neben den Ohren sind", ellbogen: "Beuge die Ellbogen leicht und halte diesen Winkel" } }),
  ueberzug_sz: ueberSoll({ art: "liegend", ellbogen: [80, 105], start: [65, 100], ende: [155, 185], quelle: { start: "die Stange ist über dem Gesicht", ende: "bis die Oberarme neben den Ohren sind", ellbogen: "Beuge die Ellbogen auf etwa 90 Grad" } }),
  ueberzug_kabel_liegend: ueberSoll({ art: "liegend", ellbogen: [145, 178], start: [155, 185], ende: [30, 100], quelle: { start: "mit gestreckten Armen hinter dem Kopf in der Dehnung", ende: "in einem Bogen über das Gesicht bis über die Brust oder zur Hüfte", ellbogen: "Ellbogen leicht gebeugt" } }),
}

// ---------------------------------------------------------------- Latzug kniend und mit Band
const knieLatSoll = (k: LZ & { neig: Bereich; quelleNeig: string }) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Knie bleiben (m)", bleibt(m, ["knie_l", "knie_r"]), 0, 0.02, "Knie dich vor den Turm")]
  for (const [x, w] of [[s, "oben"], [z, "unten"]] as const) r.push(pr(`Oberkörper ${w} (°)`, rumpfneigung(x), k.neig[0], k.neig[1], k.quelleNeig))
  if (k.griff) r.push(pr("Griff / Schulterbreite", griffbreite(s) / schulterbreite(s), k.griff[0], k.griff[1], k.quelle.griff ?? ""))
  for (const a of k.einarm ? (["r"] as const) : SEITEN) {
    r.push(pr(`Arm ${a} oben gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "Arme gestreckt"))
    r.push(pr(`Hand ${a} oben über der Schulter (m)`, p(s, `hand_${a}`)[1] - p(s, `g:schulter_${a}`)[1], 0.4, 0.6, "Arm lang über dem Kopf"))
    const h = amRumpf(z, `hand_${a}`)
    r.push(pr(`Hand ${a} unten am Rumpf entlang (m)`, h[1], k.untenY[0], k.untenY[1], k.quelle.unten))
    r.push(pr(`Hand ${a} unten vor dem Rumpf (m)`, h[2], 0.04, 0.22, k.quelle.unten))
    const e = p(z, `g:ellbogen_${a}`), sh = p(z, `g:schulter_${a}`)
    r.push(pr(`Ellbogen ${a} unten nach unten (m)`, sh[1] - e[1], 0.1, 0.3, "die Ellbogen gehen nach unten"))
    r.push(pr(`Ellbogen ${a} unten seitlich (°)`, grad(Math.atan2(Math.abs(e[0]) - Math.abs(sh[0]), sh[1] - e[1])), k.ellbogenSeite[0], k.ellbogenSeite[1], k.quelle.ellbogen))
  }
  return r
}
const KNIE_LAT_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  latzug_kniend: knieLatSoll({ ...LZ_WEIT, rueck: [0, 0], griff: [1.2, 1.6], neig: [3, 18], quelleNeig: "Oberkörper leicht nach vorn geneigt", quelle: { ...LZ_WEIT.quelle, griff: "etwas breiter als schulterbreit", unten: "Zieh die Stange zur oberen Brust", ellbogen: "die Ellbogen gehen nach unten zu den Rippen" } }),
  latzug_kniend_einarmig: knieLatSoll({ ...LZ_ENG, untenY: [-0.18, -0.03], einarm: true, neig: [-4, 15], quelleNeig: "der Oberkörper bleibt aufrecht oder leicht nach vorn geneigt", quelle: { ...LZ_ENG.quelle, unten: "bis die Hand neben der Brust ist", ellbogen: "den Ellbogen nah am Körper nach unten zur Hüfte" } }),
  latzug_band: knieLatSoll({ ...LZ_ENG, untenY: [-0.18, -0.03], neig: [-6, 10], quelleNeig: "die Brust ist aufgerichtet", quelle: { ...LZ_ENG.quelle, unten: "bis die Hände neben der Brust sind", ellbogen: "die Ellbogen zu den Rippen" } }),
}

// ---------------------------------------------------------------- Rudern vorgebeugt
interface RW {
  neig: Bereich
  knie: Bereich
  griff: Bereich
  /** Last oben am Rumpf: entlang des Rumpfes ab den Schultern (negativ = Richtung Becken) */
  obenY: Bereich
  eng?: boolean
  boden?: boolean
  quelle: { neig: string; knie: string; griff: string; oben: string }
}
const rowSoll = (k: RW) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Füße bleiben stehen (m)", bleibt(m, ["ferse_l", "ferse_r", "fuss_l", "fuss_r"]), 0, 0.02, "Stell dich hüftbreit hin")]
  r.push(pr("Oberkörperneigung (°)", rumpfneigung(s), k.neig[0], k.neig[1], k.quelle.neig))
  r.push(pr("Oberkörper bleibt geneigt (°)", Math.abs(rumpfneigung(z) - rumpfneigung(s)), 0, 5, "ohne dass sich der Oberkörper aufrichtet"))
  r.push(pr("Kniewinkel (°)", Math.min(kniewinkel(s, "l"), kniewinkel(s, "r")), k.knie[0], k.knie[1], k.quelle.knie))
  r.push(pr("Fußabstand / Hüftbreite", fussbreite(s) / Math.abs(p(s, "g:huefte_l")[0] - p(s, "g:huefte_r")[0]), 0.8, 1.6, "hüftbreit"))
  r.push(pr("Griff / Schulterbreite", griffbreite(s) / schulterbreite(s), k.griff[0], k.griff[1], k.quelle.griff))
  for (const a of SEITEN) {
    r.push(pr(`Arm ${a} unten gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "bis die Arme gestreckt sind"))
    r.push(pr(`Hand ${a} unten unter der Schulter (m)`, Math.abs(p(s, `hand_${a}`)[2] - p(s, `g:schulter_${a}`)[2]), 0, 0.07, "die Arme hängen senkrecht unter den Schultern"))
    r.push(pr(`Ellbogen ${a} oben hinter dem Rumpf (m)`, amRumpf(z, `g:ellbogen_${a}`)[2], -0.25, k.eng ? -0.02 : 0.0, "die Ellbogen gehen nach hinten"))
    if (k.eng) r.push(pr(`Ellbogen ${a} eng am Körper (m)`, Math.abs(p(z, `g:ellbogen_${a}`)[0]) - Math.abs(p(z, `g:schulter_${a}`)[0]), -0.1, 0.06, "die Ellbogen streichen eng am Körper nach hinten"))
  }
  const o = amRumpf(z, "stange")
  r.push(pr("Last oben am Rumpf entlang (m)", o[1], k.obenY[0], k.obenY[1], k.quelle.oben))
  r.push(pr("Last oben nah am Rumpf (m)", o[2], 0.03, 0.2, k.quelle.oben))
  if (k.boden) r.push(pr("Stange unten am Boden (Handhöhe, m)", stange(s)[1], 0.2, 0.27, "vom Boden, vollständig ablegen"))
  return r
}
const ROW_LH_Q = { neig: "etwa 30 bis 45 Grad über der Waagerechten", knie: "die Knie sind leicht gebeugt", griff: "etwas breiter als schulterbreit", oben: "zum Bauchnabel oder zum unteren Brustbein" }
const ROW_LH: RW = { neig: [43, 62], knie: [145, 172], griff: [1.05, 1.5], obenY: [-0.36, -0.16], quelle: ROW_LH_Q }
const ROW_45: RW = { ...ROW_LH, neig: [38, 55], quelle: { ...ROW_LH_Q, neig: "etwa 45 Grad geneigt" } }
const ROW_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  rudern_lh: rowSoll(ROW_LH),
  rudern_multipresse: rowSoll({ ...ROW_45, quelle: { ...ROW_45.quelle, oben: "zum Bauchnabel" }, obenY: [-0.36, -0.22] }),
  rudern_lh_untergriff: rowSoll({ ...ROW_45, griff: [0.85, 1.2], eng: true, obenY: [-0.36, -0.22], quelle: { ...ROW_45.quelle, griff: "schulterbreit im Untergriff", oben: "zum Bauchnabel" } }),
  rudern_pendlay: rowSoll({ ...ROW_LH, neig: [75, 95], knie: [88, 150], obenY: [-0.24, -0.1], boden: true, quelle: { ...ROW_LH_Q, neig: "der Oberkörper ist fast waagerecht", knie: "die Knie sind gebeugt", oben: "zum unteren Brustbein" } }),
  rudern_kh_vorgebeugt: rowSoll({ ...ROW_45, griff: [0.8, 1.25], obenY: [-0.32, -0.16], quelle: { ...ROW_45.quelle, griff: "die Arme hängen senkrecht unter den Schultern", oben: "zu den unteren Rippen" } }),
}

// ---------------------------------------------------------------- Rudern auf der Schrägbank (Bauchlage)
const brustRowSoll = (einarm: boolean) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Füße bleiben (m)", bleibt(m, ["fuss_l", "fuss_r"]), 0, 0.02, "Die Füße stehen auf dem Boden"), pr("Brust bleibt auf der Bank (m)", bleibt(m, ["g:hals", "g:becken"]), 0, 0.02, "die Brust bleibt auf der Bank")]
  r.push(pr("Lehne etwa 30 Grad (Rumpf gegen die Senkrechte, °)", rumpfneigung(s), 55, 65, "Stell eine Bank auf etwa 30 Grad Schräge"))
  for (const a of einarm ? (["r"] as const) : SEITEN) {
    const sh = p(s, `g:schulter_${a}`), h = p(s, `hand_${a}`)
    r.push(pr(`Arm ${a} unten gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "die Arme hängen gestreckt"))
    r.push(pr(`Arm ${a} hängt senkrecht (°)`, grad(Math.atan2(Math.hypot(h[2] - sh[2]), sh[1] - h[1])), 0, 12, "die Arme hängen senkrecht nach unten"))
    const o = amRumpf(z, `hand_${a}`)
    r.push(pr(`Hand ${a} oben am Rumpf entlang (m)`, o[1], einarm ? -0.4 : -0.3, einarm ? -0.24 : -0.14, einarm ? "Zieh die Hantel zur Hüfte" : "Zieh die Hanteln zu den unteren Rippen"))
    r.push(pr(`Ellbogen ${a} oben hinter dem Rumpf (m)`, amRumpf(z, `g:ellbogen_${a}`)[2], -0.25, -0.02, einarm ? "der Ellbogen streicht am Körper vorbei" : "die Ellbogen gehen nach hinten oben"))
    if (einarm) r.push(pr("Ellbogen eng am Körper (m)", Math.abs(p(z, "g:ellbogen_r")[0]) - Math.abs(p(z, "g:schulter_r")[0]), -0.1, 0.08, "der Ellbogen streicht am Körper vorbei"))
  }
  return r
}
const BRUST_ROW_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  rudern_kh_brust: brustRowSoll(false),
  rudern_kh_brust_einarmig: brustRowSoll(true),
  rudern_helms: rowSoll({ neig: [42, 62], knie: [150, 176], griff: [0.9, 1.45], obenY: [-0.28, -0.12], quelle: { neig: "Bank auf etwa 30 bis 45 Grad, die Brust an der Kante der Lehne", knie: "die Knie sind leicht gebeugt", griff: "je eine Kurzhantel mit neutralem Griff", oben: "zum unteren Brustkorb" } }),
}

// ---------------------------------------------------------------- Einarmiges Rudern mit Abstützen (rechts zieht)
const einarmRowSoll = (art: "knie" | "schwer" | "kroc") => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const stuetz = art === "knie" ? ["knie_l", "hand_l", "ferse_r"] : ["hand_l", "ferse_l", "ferse_r"]
  const r = [...ruhig(m), pr("Abstützen bleibt (m)", bleibt(m, stuetz), 0, 0.02, art === "knie" ? "linke Hand und linkes Knie auf der Bank" : "die freie Hand stützt sich fest ab")]
  const neig: Bereich = art === "knie" ? [78, 95] : art === "schwer" ? [72, 90] : [58, 77]
  const q = art === "knie" ? "Der Rücken ist gerade und etwa waagerecht" : art === "schwer" ? "bis der Oberkörper fast waagerecht ist" : "etwa 15 bis 30 Grad über der Waagerechten"
  for (const [x, w] of [[s, "unten"], [z, "oben"]] as const) r.push(pr(`Oberkörperneigung ${w} (°)`, rumpfneigung(x), neig[0], neig[1], q))
  if (art === "knie") {
    r.push(pr("Knie auf der Bank (m)", p(s, "knie_l")[1], 0.45, 0.56, "Stütz dich mit dem linken Knie auf einer Flachbank ab"))
    r.push(pr("Hand auf der Bank (m)", p(s, "hand_l")[1], 0.45, 0.53, "mit der linken Hand auf einer Flachbank"))
    r.push(pr("Rechter Fuß am Boden (m)", p(s, "ferse_r")[1], 0.0, 0.04, "das rechte Bein steht seitlich daneben"))
  } else r.push(pr("Füße versetzt (m)", Math.abs(p(s, "ferse_l")[2] - p(s, "ferse_r")[2]), 0.25, 0.8, "ein Fuß vorn, ein Fuß hinten"))
  const sh = p(s, "g:schulter_r"), h = p(s, "hand_r")
  r.push(pr("Arm unten gestreckt (°)", ellbogenWinkel(s, "r"), 160, 180, "der Arm hängt gestreckt"))
  r.push(pr("Arm hängt senkrecht (°)", grad(Math.atan2(Math.hypot(h[0] - sh[0], h[2] - sh[2]), sh[1] - h[1])), 0, 12, "der Arm hängt gestreckt"))
  r.push(pr("Hand oben an der Hüfte (m)", amRumpf(z, "hand_r")[1], -0.42, -0.24, "Zieh die Hantel zur Hüfte"))
  r.push(pr("Ellbogen oben hinter dem Rumpf (m)", amRumpf(z, "g:ellbogen_r")[2], -0.25, -0.02, "der Ellbogen geht nach hinten"))
  r.push(pr("Ellbogen nah am Körper (m)", Math.abs(p(z, "g:ellbogen_r")[0]) - Math.abs(p(z, "g:schulter_r")[0]), -0.1, 0.08, "der Ellbogen geht nah am Körper nach hinten"))
  r.push(pr("Oberkörper dreht nicht auf (m)", Math.abs(p(z, "g:schulter_l")[1] - p(z, "g:schulter_r")[1]), 0, 0.07, "ohne den Oberkörper aufzudrehen"))
  return r
}
const EINARM_SOLL: Record<string, (m: Messung) => Pruefung[]> = { rudern_kh: einarmRowSoll("knie"), rudern_kh_schwer: einarmRowSoll("schwer"), rudern_kroc: einarmRowSoll("kroc") }

// ---------------------------------------------------------------- Kabelrudern im Sitzen
interface KRS {
  vorn: Bereich
  hinten: Bereich
  untenY: Bereich
  einarm?: boolean
  weit?: boolean
  schulterblatt?: boolean
  quelle: { vorn: string; hinten: string; unten: string }
}
const kabelRowSoll = (k: KRS) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Sitz und Füße bleiben (m)", bleibt(m, ["g:becken", "ferse_l", "ferse_r"]), 0, 0.02, "die Füße stehen fest auf der Plattform")]
  r.push(pr("Oberkörper vorn (°)", rumpfneigung(s), k.vorn[0], k.vorn[1], k.quelle.vorn))
  r.push(pr("Oberkörper hinten (°)", rumpfneigung(z), k.hinten[0], k.hinten[1], k.quelle.hinten))
  for (const a of SEITEN) r.push(pr(`Knie ${a} leicht gebeugt (°)`, kniewinkel(s, a), 120, 172, "die Knie sind leicht gebeugt"))
  for (const a of k.einarm ? (["r"] as const) : SEITEN) {
    r.push(pr(`Arm ${a} vorn gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "die Arme sind gestreckt"))
    if (k.schulterblatt) {
      r.push(pr(`Arm ${a} bleibt gestreckt (°)`, ellbogenWinkel(z, a), 160, 180, "die Ellbogen bleiben gestreckt"))
      r.push(pr(`Hand ${a} geht mit den Schulterblättern zurück (m)`, p(s, `hand_${a}`)[2] - p(z, `hand_${a}`)[2], 0.03, 0.12, "Zieh nun nur die Schulterblätter nach hinten zusammen"))
      continue
    }
    const h = amRumpf(z, `hand_${a}`)
    r.push(pr(`Hand ${a} hinten am Rumpf entlang (m)`, h[1], k.untenY[0], k.untenY[1], k.quelle.unten))
    r.push(pr(`Hand ${a} hinten nah am Rumpf (m)`, h[2], 0.03, 0.2, k.quelle.unten))
    r.push(pr(`Ellbogen ${a} hinter dem Körper (m)`, amRumpf(z, `g:ellbogen_${a}`)[2], -0.25, -0.02, "bis die Ellbogen hinter dem Körper sind"))
    if (k.weit) r.push(pr(`Ellbogen ${a} abgespreizt (°)`, abspreizen(z, a), 55, 80, "die Ellbogen gehen etwa 60 bis 75 Grad vom Körper abgespreizt nach hinten"))
    else r.push(pr(`Ellbogen ${a} nah am Körper (m)`, Math.abs(p(z, `g:ellbogen_${a}`)[0]) - Math.abs(p(z, `g:schulter_${a}`)[0]), -0.1, 0.07, "die Ellbogen gehen nah am Körper nach hinten"))
  }
  if (k.einarm) {
    r.push(pr("Freie Hand auf dem Oberschenkel (m)", Math.min(...m.alle.map((x) => abstand(p(x, "hand_l"), p(x, "oberschenkel_l")))), 0, 0.12, "die freie Hand liegt auf dem Oberschenkel"))
    r.push(pr("Oberkörper dreht nicht auf (m)", Math.abs(p(z, "g:schulter_l")[2] - p(z, "g:schulter_r")[2]), 0, 0.07, "ohne den Oberkörper aufzudrehen"))
  }
  return r
}
const KRS_V: KRS = { vorn: [3, 18], hinten: [-6, 5], untenY: [-0.38, -0.24], quelle: { vorn: "er darf sich in der Dehnung leicht nach vorn neigen", hinten: "Richte den Oberkörper auf", unten: "Zieh den Griff zum Bauch" } }
const KABEL_ROW_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  rudern_kabel: kabelRowSoll(KRS_V),
  rudern_kabel_streng: kabelRowSoll({ ...KRS_V, vorn: [-4, 4], hinten: [-4, 4], quelle: { ...KRS_V.quelle, vorn: "richte den Oberkörper senkrecht auf, er bewegt sich während des ganzen Satzes nicht", hinten: "der Oberkörper bewegt sich nicht" } }),
  rudern_kabel_weit: kabelRowSoll({ ...KRS_V, vorn: [-4, 10], untenY: [-0.26, -0.12], weit: true, quelle: { ...KRS_V.quelle, vorn: "Richte den Oberkörper auf", unten: "Zieh die Stange zur unteren Brust" } }),
  rudern_kabel_einarmig: kabelRowSoll({ ...KRS_V, untenY: [-0.42, -0.26], einarm: true, quelle: { ...KRS_V.quelle, unten: "Zieh den Ellbogen nah am Körper nach hinten zur Hüfte" } }),
  rudern_schulterblatt: kabelRowSoll({ ...KRS_V, vorn: [-4, 6], hinten: [-4, 6], schulterblatt: true, quelle: { ...KRS_V.quelle, vorn: "der Oberkörper ist aufrecht", hinten: "ohne den Oberkörper zu bewegen" } }),
}

// ---------------------------------------------------------------- Rudern im Stand, Halbkniestand, Langsitz
interface SRS {
  art: "stand" | "einarm" | "hoch" | "sitz"
  untenY: Bereich
  armVorn: Bereich
  quelle: { unten: string; vorn: string }
}
const standRowSoll = (k: SRS) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const fuesse = k.art === "hoch" ? ["knie_l", "fuss_r"] : ["ferse_l", "ferse_r"]
  const r = [...ruhig(m), pr("Stand bleibt (m)", bleibt(m, fuesse), 0, 0.02, k.art === "hoch" ? "ein Knie unten, ein Fuß vorn" : k.art === "sitz" ? "das Band liegt um die Fußsohlen" : "Stand fest")]
  for (const [x, w] of [[s, "vorn"], [z, "hinten"]] as const) r.push(pr(`Oberkörper aufrecht ${w} (°)`, Math.abs(rumpfneigung(x)), 0, 10, k.art === "sitz" ? "Richte den Oberkörper auf" : "der Oberkörper ist aufrecht, der Bauch fest"))
  if (k.art === "stand") for (const a of SEITEN) r.push(pr(`Knie ${a} locker (°)`, kniewinkel(s, a), 150, 180, "die Knie sind locker"))
  if (k.art === "einarm") r.push(pr("Ausfallschritt, Zugseite hinten (m)", p(s, "ferse_l")[2] - p(s, "ferse_r")[2], 0.3, 0.9, "im Ausfallschritt, das Bein der Zugseite ist hinten"))
  if (k.art === "sitz") for (const a of SEITEN) r.push(pr(`Bein ${a} gestreckt oder leicht gebeugt (°)`, kniewinkel(s, a), 150, 180, "die Beine sind gestreckt oder leicht gebeugt"))
  for (const a of k.art === "einarm" ? (["r"] as const) : SEITEN) {
    r.push(pr(`Arm ${a} vorn gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "die Arme sind gestreckt"))
    r.push(pr(`Arm ${a} vorn Richtung Befestigung (°)`, armHoehe(s, a), k.armVorn[0], k.armVorn[1], k.quelle.vorn))
    const h = amRumpf(z, `hand_${a}`)
    r.push(pr(`Hand ${a} hinten am Rumpf entlang (m)`, h[1], k.untenY[0], k.untenY[1], k.quelle.unten))
    r.push(pr(`Hand ${a} hinten nah am Rumpf (m)`, h[2], 0.02, 0.2, k.quelle.unten))
    if (k.art === "hoch") r.push(pr(`Ellbogen ${a} schräg unten (m)`, p(z, `g:schulter_${a}`)[1] - p(z, `g:ellbogen_${a}`)[1], 0.08, 0.3, "Zieh die Ellbogen schräg nach unten hinten"))
    else r.push(pr(`Ellbogen ${a} nah am Körper (m)`, Math.abs(p(z, `g:ellbogen_${a}`)[0]) - Math.abs(p(z, `g:schulter_${a}`)[0]), -0.1, 0.07, "die Ellbogen gehen nah am Körper nach hinten"))
    r.push(pr(`Ellbogen ${a} hinter dem Rumpf (m)`, amRumpf(z, `g:ellbogen_${a}`)[2], -0.25, -0.01, "die Ellbogen gehen nach hinten"))
  }
  if (k.art === "einarm") r.push(pr("Hüfte und Schultern drehen nicht (m)", Math.max(Math.abs(p(z, "g:schulter_l")[2] - p(z, "g:schulter_r")[2]), Math.abs(p(z, "g:huefte_l")[2] - p(z, "g:huefte_r")[2])), 0, 0.07, "Hüfte und Schultern zeigen zur Befestigung"))
  return r
}
const STAND_ROW_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  rudern_band: standRowSoll({ art: "stand", untenY: [-0.32, -0.14], armVorn: [-20, 15], quelle: { unten: "Zieh die Hände zu den Rippen", vorn: "Band auf Brusthöhe, Arme gestreckt" } }),
  rudern_band_einarmig: standRowSoll({ art: "einarm", untenY: [-0.32, -0.14], armVorn: [-20, 15], quelle: { unten: "bis die Hand neben den Rippen ist", vorn: "Der Arm ist nach vorn gestreckt" } }),
  rudern_kabel_stehend_einarmig: standRowSoll({ art: "einarm", untenY: [-0.32, -0.14], armVorn: [-25, 15], quelle: { unten: "bis die Hand neben den Rippen ist", vorn: "Kabel etwa auf Brust- oder Bauchhöhe" } }),
  rudern_kabel_hoch: standRowSoll({ art: "hoch", untenY: [-0.2, 0.02], armVorn: [25, 60], quelle: { unten: "bis die Hände neben der Brust sind", vorn: "mit gestreckten Armen schräg nach oben vorn" } }),
  rudern_band_sitzend: standRowSoll({ art: "sitz", untenY: [-0.4, -0.24], armVorn: [-25, 5], quelle: { unten: "Zieh die Hände zum Bauch", vorn: "die Arme sind gestreckt, das Band ist leicht gespannt" } }),
}

// ---------------------------------------------------------------- Gorilla-Rudern und Renegade Row (abwechselnd)
const zugSeite = (r: Pruefung[], x: Punkte, a: "l" | "r", quelle: string) => {
  r.push(pr(`Hand ${a} gezogen an der Hüfte (m)`, amRumpf(x, `hand_${a}`)[1], -0.44, -0.24, quelle))
  r.push(pr(`Ellbogen ${a} gezogen hinter dem Rumpf (m)`, amRumpf(x, `g:ellbogen_${a}`)[2], -0.3, -0.02, "der Ellbogen geht nach hinten"))
}
const gorillaSoll = (m: Messung): Pruefung[] => {
  const [u, l, rr] = m.alle
  const r = [...ruhig(m), pr("Füße bleiben (m)", bleibt(m, ["ferse_l", "ferse_r"]), 0, 0.02, "Stand fest")]
  r.push(pr("Stand breiter als schulterbreit", fussbreite(u) / schulterbreite(u), 1.1, 2.0, "der Stand ist breiter als schulterbreit"))
  for (const x of m.alle) r.push(pr("Oberkörper fast waagerecht (°)", rumpfneigung(x), 72, 92, "bis der Oberkörper fast waagerecht ist"))
  for (const a of SEITEN) {
    r.push(pr(`Arm ${a} unten gestreckt (°)`, ellbogenWinkel(u, a), 160, 180, "die Arme sind gestreckt"))
    r.push(pr(`Hand ${a} unten an der Kettlebell am Boden (m)`, p(u, `hand_${a}`)[1], 0.25, 0.31, "Stell zwei Kettlebells zwischen die Füße"))
    r.push(pr(`Hand ${a} zwischen den Füßen (m)`, Math.abs(p(u, `ferse_${a}`)[0]) - Math.abs(p(u, `hand_${a}`)[0]), 0.05, 0.4, "zwischen die Füße"))
  }
  zugSeite(r, l, "l", "zieh die andere zur Hüfte")
  zugSeite(r, rr, "r", "wechsle die Seite")
  r.push(pr("Andere Kettlebell bleibt am Boden (m)", Math.max(p(l, "hand_r")[1], p(rr, "hand_l")[1]), 0.25, 0.31, "Drück eine Kettlebell aktiv in den Boden"))
  for (const x of [l, rr]) r.push(pr("Oberkörper dreht nicht auf (m)", Math.abs(p(x, "g:schulter_l")[1] - p(x, "g:schulter_r")[1]), 0, 0.06, "Der Oberkörper bleibt ruhig und dreht nicht auf"))
  return r
}
const renegadeSoll = (m: Messung): Pruefung[] => {
  const [o, l, rr] = m.alle
  const r = [...ruhig(m), pr("Füße bleiben (m)", bleibt(m, ["fuss_l", "fuss_r"]), 0, 0.02, "Füße fest")]
  r.push(pr("Hände schulterbreit", griffbreite(o) / schulterbreite(o), 0.8, 1.25, "zwei Kurzhanteln schulterbreit"))
  r.push(pr("Füße etwas mehr als hüftbreit", Math.abs(p(o, "fuss_l")[0] - p(o, "fuss_r")[0]) / Math.abs(p(o, "g:huefte_l")[0] - p(o, "g:huefte_r")[0]), 1.0, 2.0, "die Füße etwas mehr als hüftbreit"))
  for (const a of SEITEN) r.push(pr(`Arm ${a} gestreckt im Stütz (°)`, ellbogenWinkel(o, a), 160, 180, "hoher Liegestütz"))
  for (const x of m.alle) r.push(pr("Körper in einer Linie (°)", koerperLinie(x), 165, 185, "der Körper bildet eine gerade Linie"))
  zugSeite(r, l, "l", "Zieh eine Hantel zur Hüfte")
  zugSeite(r, rr, "r", "wechsle die Seite")
  r.push(pr("Stützhand bleibt auf der Hantel (m)", Math.max(abstand(p(l, "hand_r"), p(o, "hand_r")), abstand(p(rr, "hand_l"), p(o, "hand_l"))), 0, 0.02, "während du dich auf die andere stützt"))
  for (const x of [l, rr]) r.push(pr("Hüfte bleibt waagerecht (m)", Math.abs(p(x, "g:huefte_l")[1] - p(x, "g:huefte_r")[1]), 0, 0.03, "Die Hüfte bleibt waagerecht und dreht nicht mit"))
  return r
}
const WECHSEL_SOLL: Record<string, (m: Messung) => Pruefung[]> = { rudern_gorilla: gorillaSoll, rudern_renegade: renegadeSoll }

// ---------------------------------------------------------------- Rudern im Hang
const hangRowSoll = (art: "stange" | "hoch" | "tisch") => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Hände bleiben an der Stange (m)", bleibt(m, ["hand_l", "hand_r"]), 0, 0.02, art === "tisch" ? "Greif die Kante" : "greif die Stange"), pr("Fersen bleiben (m)", bleibt(m, ["ferse_l", "ferse_r"]), 0, 0.02, art === "tisch" ? "Stell die Füße auf" : "die Fersen liegen am Boden")]
  r.push(art === "tisch" ? pr("Griff schulterbreit", griffbreite(s) / schulterbreite(s), 0.85, 1.25, "Greif die Kante schulterbreit") : pr("Griff etwas breiter als schulterbreit", griffbreite(s) / schulterbreite(s), 1.05, 1.5, "etwas breiter als schulterbreit im Obergriff"))
  for (const [x, w] of [[s, "unten"], [z, "oben"]] as const) r.push(pr(`Körper gerade ${w} (°)`, koerperLinie(x, art === "tisch" ? "knie" : "knoechel"), 166, 185, art === "tisch" ? "der Körper ist von Knie bis Schulter gerade" : "der Körper bildet eine gerade Linie von Kopf bis Fuß"))
  if (art === "hoch") r.push(pr("Fersen auf der Erhöhung (m)", p(s, "ferse_l")[1], 0.4, 0.55, "leg die Fersen auf die Erhöhung"))
  if (art === "tisch") for (const a of SEITEN) r.push(pr(`Knie ${a} gebeugt (°)`, kniewinkel(s, a), 70, 120, "die Knie sind gebeugt"))
  for (const a of SEITEN) {
    r.push(pr(`Arm ${a} unten gestreckt (°)`, ellbogenWinkel(s, a), 160, 180, "bis die Arme gestreckt sind"))
    r.push(pr(`Ellbogen ${a} oben hinter dem Rumpf (m)`, amRumpf(z, `g:ellbogen_${a}`)[2], -0.3, -0.02, "die Ellbogen gehen nach hinten"))
  }
  const o = amRumpf(z, "stange")
  r.push(pr("Stange oben an der Brust: entlang (m)", o[1], -0.2, 0.02, "zieh die Brust zur Stange"))
  r.push(pr("Stange oben an der Brust: Abstand (m)", o[2], 0.1, 0.22, "zieh die Brust zur Stange"))
  return r
}
const HANG_ROW_SOLL: Record<string, (m: Messung) => Pruefung[]> = { rudern_invertiert: hangRowSoll("stange"), rudern_invertiert_erhoeht: hangRowSoll("hoch"), rudern_tisch: hangRowSoll("tisch") }

// ---------------------------------------------------------------- An der Wand (Fläche bei z = 0,5)
const WAND_Z = 0.5
const anWand = (m: Punkte, n: string, ab = 0.07) => WAND_Z - p(m, n)[2] <= ab
interface WS {
  /** Hände flach an der Wand (beide oder eine) */
  haende?: ("l" | "r")[]
  extra: (m: Messung, s: Punkte, z: Punkte) => Pruefung[]
}
const wandSoll = (k: WS) => (m: Messung): Pruefung[] => {
  const s = m.start, z = m.ziel
  const r = [...ruhig(m), pr("Füße bleiben stehen (m)", bleibt(m, ["fuss_l", "fuss_r"]), 0, 0.02, "die Füße stehen fest")]
  for (const a of k.haende ?? SEITEN) r.push(pr(`Hand ${a} an der Wand (m)`, Math.max(...m.alle.map((x) => WAND_Z - p(x, `hand_${a}`)[2])), 0.02, 0.08, "die Hände stützen sich an der Wand ab"))
  r.push(...k.extra(m, s, z))
  return r
}
const fersAm = (x: Punkte, a: "l" | "r") => p(x, `ferse_${a}`)[1]
const beineWandSoll = (spreiz: Bereich) => (m: Messung): Pruefung[] => {
  const z = m.ziel
  const r = [...ruhig(m)]
  for (const a of SEITEN) {
    r.push(pr(`Ferse ${a} an der Wand (m)`, WAND_Z - p(z, `ferse_${a}`)[2], 0.0, 0.06, "Die Beine liegen an der Wand"))
    r.push(pr(`Bein ${a} gestreckt (°)`, kniewinkel(z, a), 168, 180, "Die Beine liegen gestreckt"))
  }
  r.push(pr("Gesäß nah an der Wand (m)", WAND_Z - p(z, "g:huefte_l")[2], 0.08, 0.25, "Rück mit dem Gesäß so nah an die Wand"))
  r.push(pr("Rücken am Boden (m)", p(z, "g:becken")[1], 0.08, 0.16, "Rückenlage"))
  r.push(pr("Beine gespreizt (m)", Math.abs(p(z, "ferse_l")[0] - p(z, "ferse_r")[0]), spreiz[0], spreiz[1], spreiz[0] > 0.3 ? "Lass die Beine zur Seite auseinandergleiten" : "gestreckt und geschlossen"))
  return r
}
const WAND_SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  beine_an_wand: beineWandSoll([0, 0.25]),
  beinrueckseite_dehnen_tuerrahmen: (m) => {
    const z = m.ziel
    return [
      ...ruhig(m),
      pr("Rechte Ferse an der Wand (m)", WAND_Z - p(z, "ferse_r")[2], 0, 0.06, "Leg das rechte Bein gestreckt an die Wand"),
      pr("Rechtes Knie gestreckt (°)", kniewinkel(z, "r"), 168, 180, "Das Knie bleibt gestreckt"),
      pr("Linkes Bein lang am Boden (m)", Math.max(p(z, "ferse_l")[1], p(z, "g:knie_l")[1] - 0.06), 0, 0.06, "das linke Bein liegt lang am Boden"),
      pr("Linkes Knie gestreckt (°)", kniewinkel(z, "l"), 165, 180, "das linke Bein liegt lang"),
      pr("Linkes Bein durch die Öffnung (m)", p(z, "ferse_l")[2] - WAND_Z, 0.4, 0.85, "lang durch die Türöffnung"),
      pr("Gesäß nah an der Wand (m)", WAND_Z - p(z, "g:huefte_r")[2], 0.08, 0.25, "Rutsch mit dem Gesäß so nah an die Wand"),
    ]
  },
  figur4_wand: (m) => {
    const s0 = m.start, z = m.ziel
    return [
      ...ruhig(m),
      pr("Fuß flach an der Wand (m)", Math.max(WAND_Z - p(s0, "ferse_r")[2], WAND_Z - p(z, "ferse_r")[2]), 0, 0.05, "Stell den Fuß an die Wand"),
      pr("Fuß bleibt an der Wand (m)", bleibt(m, ["ferse_r", "fuss_r"]), 0, 0.02, "der Fuß bleibt an der Wand"),
      pr("Hüfte etwa rechtwinklig (m)", Math.abs(p(s0, "g:knie_r")[2] - p(s0, "g:huefte_r")[2]), 0, 0.06, "Hüfte und Knie etwa im rechten Winkel"),
      pr("Knie etwa rechtwinklig (°)", kniewinkel(s0, "r"), 80, 100, "Hüfte und Knie etwa im rechten Winkel"),
      pr("Gesäß eine Oberschenkellänge von der Wand (m)", WAND_Z - p(s0, "g:huefte_r")[2], 0.45, 0.65, "etwa eine Oberschenkellänge von der Wand"),
      pr("Gesäß rutscht näher (m)", p(z, "g:huefte_r")[2] - p(s0, "g:huefte_r")[2], 0.05, 0.15, "Rutsch mit dem Gesäß ein Stück näher an die Wand"),
      pr("Knöchel auf dem Knie (m)", abstand(p(z, "g:fuss_l"), p(z, "g:knie_r")), 0, 0.15, "Leg den Außenknöchel auf das Knie"),
    ]
  },
  graetsche_wand: beineWandSoll([0.8, 1.4]),
  knie_zur_wand: wandSoll({ extra: (_m, s, z) => [
    pr("Fußspitze eine Handbreit vor der Wand (m)", WAND_Z - (p(s, "fuss_l")[2] + 0.1), 0.06, 0.14, "den Fuß etwa eine Handbreit vor der Wand"),
    pr("Ferse bleibt am Boden (m)", Math.max(fersAm(s, "l"), fersAm(z, "l")), 0, 0.04, "Die Ferse bleibt fest am Boden"),
    pr("Knie berührt die Wand (m)", WAND_Z - p(z, "g:knie_l")[2], 0.03, 0.08, "Berühr die Wand kurz mit dem Knie"),
    pr("Knie über der zweiten Zehe (m)", Math.abs(p(z, "g:knie_l")[0] - p(z, "fuss_l")[0]), 0, 0.05, "über die zweite Zehe"),
  ] }),
  grosszehe_dehnen_wand: wandSoll({ extra: (_m, _s, z) => [
    pr("Ballen am Boden (m)", p(z, "fuss_l")[1], 0, 0.05, "der Fußballen bleibt am Boden"),
    // Zehenspitzen etwa 10 cm vor der Ballenmarke (die Zehen der Figur beugen sich nicht)
    pr("Zehen an der Wand (m)", WAND_Z - p(z, "fuss_l")[2], 0.06, 0.14, "Setz die Großzehe an die Wand"),
    pr("Knie nach vorn zur Wand (m)", p(z, "g:knie_l")[2] - p(z, "g:fuss_l")[2], 0.03, 0.3, "Schiebe das Knie langsam nach vorn zur Wand"),
  ] }),
  waden_dehnen: wandSoll({ extra: (_m, _s, z) => [
    pr("Hintere Ferse am Boden (m)", fersAm(z, "r"), 0, 0.04, "Drück die Ferse fest in den Boden"),
    pr("Hinteres Knie gestreckt (°)", kniewinkel(z, "r"), 168, 180, "halte das Knie gestreckt"),
    pr("Vorderes Knie gebeugt (°)", kniewinkel(z, "l"), 120, 165, "Das vordere Bein steht mit gebeugtem Knie"),
    pr("Hinterer Fuß weit hinten (m)", p(z, "ferse_l")[2] - p(z, "ferse_r")[2], 0.4, 0.8, "Stell den Fuß weit nach hinten"),
  ] }),
  waden_pnf_wand: wandSoll({ extra: (_m, _s, z) => [
    pr("Hintere Ferse am Boden (m)", fersAm(z, "r"), 0, 0.04, "die Ferse am Boden"),
    pr("Hinteres Knie gestreckt (°)", kniewinkel(z, "r"), 168, 180, "mit gestrecktem Knie"),
  ] }),
  soleus_dehnen_wand: wandSoll({ extra: (_m, _s, z) => [
    pr("Hintere Ferse am Boden (m)", fersAm(z, "r"), 0, 0.04, "die Ferse bleibt fest am Boden"),
    pr("Hinterer Fuß eine Fußlänge hinter dem vorderen (m)", p(z, "ferse_l")[2] - p(z, "ferse_r")[2], 0.15, 0.32, "nur etwa eine Fußlänge hinter den linken"),
    pr("Beide Knie gebeugt (°)", Math.max(kniewinkel(z, "l"), kniewinkel(z, "r")), 110, 160, "Beuge beide Knie"),
  ] }),
  waden_dehnen_zehen_wand: wandSoll({ extra: (_m, _s, z) => [
    pr("Ferse am Boden vor der Wand (m)", fersAm(z, "l"), 0, 0.04, "die Ferse am Boden direkt vor der Wand"),
    pr("Ballen an der Wand (m)", WAND_Z - p(z, "fuss_l")[2], 0, 0.1, "den Fußballen an die Wand"),
    pr("Knie gestreckt (°)", kniewinkel(z, "l"), 165, 180, "Das Knie ist gestreckt"),
  ] }),
  fingerlaufen_wand: wandSoll({ haende: ["l"], extra: (_m, s, z) => [
    pr("Fingerspitzen anfangs auf Brusthöhe (m)", p(s, "hand_l")[1] - p(s, "g:schulter_l")[1], -0.4, 0.0, "auf Hüft- bis Brusthöhe"),
    pr("Hand läuft nach oben (m)", p(z, "hand_l")[1] - p(s, "hand_l")[1], 0.4, 0.8, "die Finger an der Wand nach oben laufen"),
    pr("Abstand eine Unterarmlänge (m)", WAND_Z - p(s, "g:schulter_l")[2], 0.25, 0.4, "etwa eine Unterarmlänge entfernt"),
  ] }),
}

const KLASSISCH_Q = { stand: "Stell dich hüftbreit hin", zehen: "Zehen leicht nach außen", griff: "Greif die Stange schulterbreit, die Arme hängen direkt außen an den Beinen", huefte: "Hüfte höher als die Knie" }

export const SOLL: Record<string, (m: Messung) => Pruefung[]> = {
  ...BANK_SOLL,
  ...LS_SOLL,
  ...DIP_SOLL,
  ...FLY_SOLL,
  ...ZUG_SOLL,
  ...ROW_SOLL,
  ...LAT_SOLL,
  ...KNIE_LAT_SOLL,
  ...UEBER_SOLL,
  ...BRUST_ROW_SOLL,
  ...EINARM_SOLL,
  ...KABEL_ROW_SOLL,
  ...STAND_ROW_SOLL,
  ...WECHSEL_SOLL,
  ...HANG_ROW_SOLL,
  ...WAND_SOLL,
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
