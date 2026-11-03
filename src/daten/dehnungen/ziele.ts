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
      [`fuss_${n}`]: { pos: [s * (x + dx), SPITZE_Y + hoch, z + dz * Math.cos(neig)] },
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
