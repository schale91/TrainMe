// Punkte, die in der Ausführung fest bleiben (Hand an der Wand, Standfuß am Boden): Die Figur hält sie in allen Phasen
// dort, wo sie in der Zielhaltung sind (Dehnung.fest, gelöst in src/ui/dehnfigur.ts). So rutschen Füße nicht über
// den Boden und Hände bleiben an der Wand, während sich das andere Bein oder der Rumpf bewegt.

import type { ZielPunkt } from "../../logik/dehnbewegung"

const FUSS_L: ZielPunkt[] = ["fuss_l", "ferse_l"]
const FUESSE: ZielPunkt[] = ["fuss_l", "ferse_l", "fuss_r", "ferse_r"]
const HAENDE: ZielPunkt[] = ["hand_l", "hand_r"]
const KNIE: ZielPunkt[] = ["knie_l", "knie_r"]

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
  // die Hand stützt nur anfangs leicht: beim Aufdrehen des Beckens löst sie sich
  hip_airplane: FUSS_L,
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
  // Auf der Faszienrolle: die Rolle hebt den Körper an, Hände, Unterarme, Knie oder Füße bleiben am Boden
  lat_ausrollen: FUESSE,
  trizeps_ausrollen: FUESSE,
  adduktoren_rolle: ["ellbogen_l", "ellbogen_r"],
  brust_ausrollen: ["fuss_l", "fuss_r"],
  unterarm_ausrollen: ["knie_l", "knie_r"],
  // Handstand: die Hände bleiben am Boden
  handstand_liegestuetz: HAENDE,
  // Prüfung der Fixpunkte (04.11.2026): Füße, Knie und Hände rutschten zwischen den Phasen über den Boden
  // Stand und Hocke: beide Füße bleiben
  tiefe_hocke: FUESSE,
  goblet_squat_pry: FUESSE,
  golf_tiefe_kniebeuge_schlaeger: FUESSE,
  reha_mini_kniebeuge: FUESSE,
  vorbeuge_stehend: FUESSE,
  reha_gewicht_verlagern: FUESSE,
  golf_beckenrotation: FUESSE,
  golf_huefte_innenrotation_band: FUESSE,
  tandemstand: FUESSE,
  rueckstreckung_stehend: FUESSE,
  seitdehnung_stange: FUESSE,
  brust_dehnen: FUESSE,
  brust_dehnen_hoch: FUESSE,
  aussenrotation_tuer: FUESSE,
  lat_dehnen_band: FUESSE,
  lat_dehnen_schlingentrainer: FUESSE,
  lat_dehnen_pnf: FUESSE,
  star_excursion: FUSS_L,
  // Kniestand und Halbkniestand: Füße bzw. Knie bleiben
  hueftbeuger_dehnen: FUESSE,
  hueftbeuger_dehnen_band: FUESSE,
  hueftbeuger_dehnen_seitneigung: FUESSE,
  hueftbeuger_kniestand_wippen: FUESSE,
  hueftbeuger_pnf: FUESSE,
  sprunggelenk_rocks_kniestand: FUSS_L,
  sprunggelenk_rocks_gewicht: FUSS_L,
  sprunggelenk_band: FUSS_L,
  bank_gebetsdehnung: KNIE,
  // Noch einzeln mit Zielpunkten umzubauen (festes Halten allein hebt die Figur an): lat_dehnen_bank_kniend,
  // golf_bws_streckung_bank_schlaeger, froschdehnung, vierfuessler_rock_back, adduktoren_rock_back, handgelenk_wippen,
  // scheibenwischer, huefte_9090_wechsel, rkc_plank
  frosch_wippen: KNIE,
  // Vierfüßler: Hände und Knie bleiben, nur das Becken geht nach hinten
  kindhaltung: [...HAENDE, ...KNIE],
  mckenzie_liegestuetz: HAENDE,
  oberschenkel_vorn_dehnen: ["fuss_r", "ferse_r"],
}
