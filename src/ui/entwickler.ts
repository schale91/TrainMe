// Entwicklermodus: Werkzeuge zum Prüfen der App (z. B. Gelenk-Einblendung der Dehnfigur). Versteckt; wird durch
// siebenmaliges Tippen auf „Installiert“ unter App-Update freigeschaltet und gilt nur auf diesem Gerät.

const SCHLUESSEL = "trainme.entwickler"
const EREIGNIS = "trainme-entwickler"

export function entwickler(): boolean {
  try {
    return localStorage.getItem(SCHLUESSEL) === "1"
  } catch {
    return false
  }
}

export function entwicklerSetzen(an: boolean) {
  try {
    localStorage.setItem(SCHLUESSEL, an ? "1" : "0")
  } catch {
    // ohne Speicher bleibt der Modus aus
  }
  window.dispatchEvent(new Event(EREIGNIS))
}

/** Meldet Änderungen; liefert die Abmeldung */
export function entwicklerBeobachten(f: (an: boolean) => void): () => void {
  const h = () => f(entwickler())
  window.addEventListener(EREIGNIS, h)
  return () => window.removeEventListener(EREIGNIS, h)
}
