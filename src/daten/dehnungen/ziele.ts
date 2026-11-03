// Bausteine für Haltungen mit Zielpunkten (siehe Haltung.ziele): Maße der Figur, Füße am Boden, Startwerte der Beine
// aus der Geometrie, Hände an einer Stange. Koordinaten: x nach links, y nach oben, z nach vorn (Meter).

import type { Winkel, Ziel, ZielPunkt } from "../../logik/dehnbewegung"
import { B } from "./basis"

export type Ziele = Partial<Record<ZielPunkt, Ziel>>
export const rad = (g: number) => (g * Math.PI) / 180
export const grad = (r: number) => (r * 180) / Math.PI

// ---------------------------------------------------------------- Maße der angezeigten Figur (gemessen)
/** Oberschenkel (Hüft- bis Kniegelenk) und Unterschenkel (Knie- bis Fußgelenk) */
export const OBER = 0.383
export const UNTER = 0.47
/** Becken bis Schultergelenk */
export const RUMPF = 0.354
/** Schultergelenk bis Handfläche bei gestrecktem Arm */
export const ARM = 0.5
/** Schultergelenke seitlich (halber Abstand) und Hüftgelenke */
export const SCHULTER_X = 0.127
export const HUEFTE_X = 0.078
/** Fußgelenk über der Fersenmarke, vor ihr; Fersen- und Spitzenmarke bei flachem Fuß */
export const KNOECHEL_Y = 0.054
export const KNOECHEL_Z = 0.062
export const FERSE_Y = 0.022
export const SPITZE_Y = 0.034
export const FUSSLAENGE = 0.12
/** Fersen stehen bei z = -0.05, der Mittelfuß bei etwa 0.01 */
export const FERSE_Z = -0.05
export const MITTELFUSS_Z = 0.01

// ---------------------------------------------------------------- Füße
/** Beide Füße flach: Fersen im Abstand 2·breit, Zehen um winkel nach außen; hoch hebt den ganzen Fuß (Podest) */
export const fuesse = (breit = 0.17, winkel = 22, z = FERSE_Z, hoch = 0): Ziele => {
  const dx = FUSSLAENGE * Math.sin(rad(winkel)), dz = FUSSLAENGE * Math.cos(rad(winkel))
  return {
    ferse_l: { pos: [breit, FERSE_Y + hoch, z] },
    fuss_l: { pos: [breit + dx, SPITZE_Y + hoch, z + dz] },
    ferse_r: { pos: [-breit, FERSE_Y + hoch, z] },
    fuss_r: { pos: [-breit - dx, SPITZE_Y + hoch, z + dz] },
  }
}
/** Ein Fuß (s = 1 links, -1 rechts) flach oder mit angehobener Ferse (Zehen am Boden) */
export const fuss = (s: 1 | -1, x: number, z: number, winkel = 10, ferseHoch = 0, hoch = 0): Ziele => {
  const dx = FUSSLAENGE * Math.sin(rad(winkel)), dz = FUSSLAENGE * Math.cos(rad(winkel))
  const n = s === 1 ? "l" : "r"
  if (ferseHoch) {
    // Ferse angehoben: die Spitze bleibt am Boden, der Fuß kippt nach vorn
    const neig = Math.asin(Math.min(0.9, ferseHoch / FUSSLAENGE))
    return {
      [`ferse_${n}`]: { pos: [s * x, FERSE_Y + hoch + ferseHoch, z] },
      // die Marke liegt über dem Ballen; bei gekipptem Fuß liegt die Sohle darunter tiefer
      [`fuss_${n}`]: { pos: [s * (x + dx), SPITZE_Y + hoch + 0.45 * ferseHoch, z + dz * Math.cos(neig)] },
    }
  }
  return {
    [`ferse_${n}`]: { pos: [s * x, FERSE_Y + hoch, z] },
    [`fuss_${n}`]: { pos: [s * (x + dx), SPITZE_Y + hoch, z + dz] },
  }
}

// ---------------------------------------------------------------- Startwerte der Beine
/**
 * Hüfte, Knie und Fuß in der Seitenebene aus der Lage von Hüftgelenk (hy, hz) und Knöchel (ay, az): Zwei-Glieder-Kette,
 * Knie nach vorn, Fuß flach. aussen dreht das Knie über die Zehen. Gilt für ein Bein (seite) oder beide.
 */
export const beinStart = (hy: number, hz: number, kipp: number, ay: number, az: number, aussen = 10, seite?: "l" | "r"): Winkel => {
  const dy = hy - ay, dz = az - hz
  const d = Math.min(OBER + UNTER - 0.002, Math.max(0.1, Math.hypot(dy, dz)))
  const phi = Math.atan2(dz, dy)
  const alpha = Math.acos(Math.min(1, (OBER * OBER + d * d - UNTER * UNTER) / (2 * OBER * d)))
  const ober = grad(phi + alpha)
  const knie = 180 - grad(Math.acos(Math.max(-1, Math.min(1, (OBER * OBER + UNTER * UNTER - d * d) / (2 * OBER * UNTER)))))
  const werte = { huefte: [ober + kipp, 0, -aussen * 0.5, aussen * 0.5], knie: [knie], fuss: [-(ober - knie), 0] }
  if (seite) return { [`huefte_${seite}`]: werte.huefte, [`knie_${seite}`]: werte.knie, [`fuss_${seite}`]: werte.fuss }
  return { ...B("huefte", werte.huefte), ...B("knie", werte.knie), ...B("fuss", werte.fuss) }
}

/** Becken so, dass die Schultermitte bei (sy, sz) liegt, Oberkörper um kipp vorgeneigt: [y, z] */
export const beckenFuerSchulter = (sy: number, sz: number, kipp: number): [number, number] => [sy - RUMPF * Math.cos(rad(kipp)), sz - RUMPF * Math.sin(rad(kipp))]

// ---------------------------------------------------------------- Hände
/** Beide Hände an einer Stange in der Welt: Mitte bei (y, z), Hände bei ±x */
export const stangeWelt = (x: number, y: number, z: number): Ziele => ({
  hand_l: { pos: [x, y, z] },
  hand_r: { pos: [-x, y, z] },
})
/** Beide Hände im Rahmen der Schultern (z. B. Stange auf dem Trapez) */
export const haendeSchultern = (x: number, y: number, z: number): Ziele => ({
  hand_l: { pos: [x, y, z], bezug: "schultern" },
  hand_r: { pos: [-x, y, z], bezug: "schultern" },
})

// ---------------------------------------------------------------- Arme
/** Schultergelenk bis Ellbogen und Ellbogen bis Handfläche (gestreckte Hand) */
export const OBERARM = 0.22
export const UNTERARM = 0.28
type P3 = [number, number, number]
const plus = (a: P3, b: P3, f = 1): P3 => [a[0] + b[0] * f, a[1] + b[1] * f, a[2] + b[2] * f]
const minus = (a: P3, b: P3): P3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const punkt = (a: P3, b: P3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const norm = (a: P3): P3 => {
  const l = Math.hypot(...a) || 1
  return [a[0] / l, a[1] / l, a[2] / l]
}
/**
 * Ellbogen zwischen Schulter s und Hand h: Schnitt der Kugeln um beide Punkte (Oberarm, Unterarm), auf dem Kreis der
 * Punkt, der am weitesten in Richtung wohin liegt (z. B. nach unten: Unterarm senkrecht unter der Stange).
 * ober und unter sind die Längen, unter verkürzt sich bei abgeknickter Hand (Liegestütz).
 */
export const ellbogenKreis = (s: P3, h: P3, wohin: P3, ober = OBERARM, unter = UNTERARM): P3 => {
  const sh = minus(h, s)
  const d = Math.min(ober + unter - 0.001, Math.max(Math.abs(ober - unter) + 0.001, Math.hypot(...sh)))
  const u = norm(sh)
  const a = (d * d + ober * ober - unter * unter) / (2 * d)
  const r = Math.sqrt(Math.max(0, ober * ober - a * a))
  const mitte = plus(s, u, a)
  const w = norm(minus(wohin, plus([0, 0, 0], u, punkt(wohin, u))))
  return plus(mitte, w, r)
}
/**
 * Ellbogen zwischen Schulter s und Hand h so, dass der Oberarm um spreiz Grad vom Rumpf abgespreizt ist (gesehen
 * senkrecht auf die Rumpfebene x-y im Rahmen der Schultern; 0 = am Rumpf nach unten, 90 = waagerecht zur Seite).
 * Von den beiden Lösungen auf dem Kreis gilt die mit dem Ellbogen weiter hinten (kleineres z).
 */
export const ellbogenSpreiz = (s: P3, h: P3, spreiz: number, ober = OBERARM, unter = UNTERARM): P3 => {
  const sh = minus(h, s)
  const d = Math.min(ober + unter - 0.001, Math.max(Math.abs(ober - unter) + 0.001, Math.hypot(...sh)))
  const u = norm(sh)
  const a = (d * d + ober * ober - unter * unter) / (2 * d)
  const r = Math.sqrt(Math.max(0, ober * ober - a * a))
  const mitte = plus(s, u, a)
  const e1 = norm(Math.abs(u[2]) < 0.9 ? minus([0, 0, 1], plus([0, 0, 0], u, u[2])) : minus([1, 0, 0], plus([0, 0, 0], u, u[0])))
  const e2: P3 = [u[1] * e1[2] - u[2] * e1[1], u[2] * e1[0] - u[0] * e1[2], u[0] * e1[1] - u[1] * e1[0]]
  let best: P3 = mitte, fehler = Infinity
  for (let i = 0; i < 360; i += 2) {
    const w = (i * Math.PI) / 180
    const p = plus(plus(mitte, e1, r * Math.cos(w)), e2, r * Math.sin(w))
    const f = Math.abs((Math.atan2(Math.abs(p[0] - s[0]), s[1] - p[1]) * 180) / Math.PI - spreiz) + Math.max(0, p[2] - h[2]) * 100
    if (f < fehler) [best, fehler] = [p, f]
  }
  return best
}
