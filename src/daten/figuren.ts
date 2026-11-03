// Animation je Übung (Übungsfiguren in src/ui/figuren3d.ts): Bewegung und, wo sie vom Standard abweicht, das Gerät
// als "bewegung:gerät" (db Kurzhantel, bar Langhantel, sz SZ-Stange, cable Kabel, rope Seil, band Band, none ohne).
// Jede Zuordnung ist von Hand gegen Beschreibung und Ausführung geprüft: Haltung (Stehen, Sitzen, Liegen), Gerät und
// Bewegungsweg müssen passen. Übungen ohne Eintrag zeigen lieber keine Figur als eine falsche.

export const FIGUREN: Record<string, string> = {
  beinheben_haengend: "beinheben",
  beinheben_liegend: "beinhebenbank",
  crunch: "crunch:none",
  crunch_gewicht: "crunch",
  hollow_hold: "hollow",
  hollow_rocks: "hollow",
  isometrischer_halt_griff: "halten:bar",
  kabel_crunch: "kabelcrunch",
  knieheben_haengend: "beinheben",
  l_sitz_haengend: "beinheben",
  latzug_einarmig: "latzugeinarm",
  nacken_extension_band: "nacken",
  rkc_plank: "plank",
  rueckenstrecker_45: "rueckenstrecken",
  rueckenstrecker_45_gesaess: "rueckenstrecken",
  rueckenstrecker_horizontal: "rueckenstrecken",
  seitheben_aegyptisch: "egyptian:db",
  seitheben_lean_away_kabel: "egyptian",
  unterarmstuetz: "plank",
  unterarmstuetz_gewicht: "plank",
  unterarmstuetz_lang: "plank",
}
