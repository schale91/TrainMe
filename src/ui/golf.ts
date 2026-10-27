// Golfbezug nur für alle, die Golf gewählt haben. Die App setzt den Schalter bei jedem Zeichnen aus dem Profil, damit
// auch Teile ohne Profil (etwa das Info-Fenster einer Übung) ihn kennen.

let golf = false

export function golfSetzen(an: boolean) {
  golf = an
}

export function golfSichtbar(): boolean {
  return golf
}

const GOLFWORT = /golf|rückschwung|abschwung|durchschwung|schlägersport|schläger/i

/** Ohne Golf: Sätze mit Golfbezug weglassen. Bleibt nichts übrig, bleibt der Text, wie er ist. */
export function ohneGolf(text: string): string {
  if (golf || !GOLFWORT.test(text)) return text
  // „… oder Golfball“, „… oder Golfen“: nur den Zusatz weglassen, dann ganze Sätze mit Golfbezug
  const kurz = text.replace(/,? (oder|und) golf\w*/gi, "")
  const saetze = kurz.split(/(?<=[.!?])\s+/).filter((s) => !GOLFWORT.test(s))
  return saetze.length ? saetze.join(" ") : text
}

/** Ohne Golf: Listeneinträge mit Golfbezug weglassen. */
export function listeOhneGolf(liste: string[]): string[] {
  return golf ? liste : liste.filter((s) => !GOLFWORT.test(s))
}
