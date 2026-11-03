// Punkte, die in der Ausführung fest bleiben (Hand an der Wand, Standfuß am Boden): Die Figur hält sie in allen Phasen
// dort, wo sie in der Zielhaltung sind (Dehnung.fest, gelöst in src/ui/dehnfigur.ts). So rutschen Füße nicht über
// den Boden und Hände bleiben an der Wand, während sich das andere Bein oder der Rumpf bewegt.

import type { ZielPunkt } from "../../logik/dehnbewegung"

const FUSS_L: ZielPunkt[] = ["fuss_l", "ferse_l"]
const FUESSE: ZielPunkt[] = ["fuss_l", "ferse_l", "fuss_r", "ferse_r"]
const HAENDE: ZielPunkt[] = ["hand_l", "hand_r"]

export const FESTE_PUNKTE: Record<string, ZielPunkt[]> = {
  // Seitlich an der Wand, linke Hand stützt, das rechte Bein bewegt sich
  beinpendel_vor_zurueck: ["hand_l", ...FUSS_L],
  reha_bein_pendeln: ["hand_l", ...FUSS_L],
  hip_cars_stehend: FUSS_L,
  tor_oeffnen_schliessen: FUSS_L,
  reha_hueftbeuger_dehnen: ["hand_l", ...FUESSE],
  tfl_dehnen_stehend: ["hand_l", ...FUESSE],
  // Frontal zur Wand, beide Hände stützen
  beinpendel_seitlich: [...HAENDE, ...FUSS_L],
  hip_airplane: ["hand_l", ...FUSS_L],
  wandlauf: HAENDE,
  // Knie seitlich an die Wand: das Standbein bleibt
  abduktion_wand_isometrisch: FUSS_L,
  querdehnung_wand: FUESSE,
  bizeps_dehnen_wand: ["hand_l", ...FUESSE],
  golf_wand_drehung_gesaess: FUESSE,
  wandsitzen_einbeinig: FUSS_L,
  tibialis_heben: ["ferse_l", "ferse_r"],
  couch_stretch_wand: ["fuss_l", "fuss_r"],
  tiefe_hocke_gestuetzt: FUESSE,
  // Gesicht zur Wand (die übrigen stehen mit Zielpunkten in wand.ts)
  trizeps_dehnen_wand: FUESSE,
  schulterblatt_liegestuetz_wand: HAENDE,
  // Rücken zur Wand
  wall_slide: FUESSE,
  wandengel: FUESSE,
  kinn_einziehen_wand: FUESSE,
  // Handstand: die Hände bleiben am Boden
  handstand_halten_wand: HAENDE,
  handstand_liegestuetz: HAENDE,
}
