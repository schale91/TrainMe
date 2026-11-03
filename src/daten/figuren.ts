// Animation je Übung (Übungsfiguren in src/ui/figuren3d.ts): Bewegung und, wo sie vom Standard abweicht, das Gerät
// als "bewegung:gerät" (db Kurzhantel, bar Langhantel, sz SZ-Stange, cable Kabel, rope Seil, band Band, none ohne).
// Jede Zuordnung ist von Hand gegen Beschreibung und Ausführung geprüft: Haltung (Stehen, Sitzen, Liegen), Gerät und
// Bewegungsweg müssen passen. Übungen ohne Eintrag zeigen lieber keine Figur als eine falsche.

export const FIGUREN: Record<string, string> = {
  rueckenstrecker_45: "rueckenstrecken",
  rueckenstrecker_45_gesaess: "rueckenstrecken",
  rueckenstrecker_horizontal: "rueckenstrecken",
}
