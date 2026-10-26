// Zurück wie auf dem Handy gewohnt: Android-Zurückgeste, Wischen vom linken Rand nach rechts und Escape schließen die
// oberste Ebene (Unterseite, Blatt, Tab). Solange eine Ebene offen ist, liegt genau ein Platzhalter im Browserverlauf.
// Zurück verbraucht ihn: Die oberste Ebene schließt sich, und ist danach noch eine offen, kommt ein neuer Platzhalter.
// Capacitor beendet die App erst, wenn kein Platzhalter mehr da ist. Ein Eintrag je Ebene wäre fehleranfällig, weil
// history.back() verzögert wirkt und sich mit neuen Einträgen überholt.

type Ebene = { id: number; zurueck: () => void }

const stapel: Ebene[] = []
let zaehler = 0
let ueberspringen = 0
let bereit = false
/** Platzhalter liegt im Verlauf */
let platzhalter = false

function platzhalterSetzen() {
  if (platzhalter) return
  history.pushState({ trainme: true }, "")
  platzhalter = true
}

function einrichten() {
  if (bereit || typeof window === "undefined") return
  bereit = true
  window.addEventListener("popstate", () => {
    if (ueberspringen > 0) {
      ueberspringen--
      return
    }
    platzhalter = false
    stapel.pop()?.zurueck()
    if (stapel.length) platzhalterSetzen()
  })
  // Wischen vom linken Rand nach rechts wie auf dem iPhone
  let start: { x: number; y: number; zeit: number } | null = null
  window.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0]
      start = e.touches.length === 1 && t.clientX < 32 ? { x: t.clientX, y: t.clientY, zeit: Date.now() } : null
    },
    { passive: true },
  )
  window.addEventListener("touchcancel", () => (start = null), { passive: true })
  window.addEventListener(
    "touchend",
    (e) => {
      if (!start) return
      const t = e.changedTouches[0]
      const dx = t.clientX - start.x
      const dy = Math.abs(t.clientY - start.y)
      if (dx > 70 && dy < dx / 2 && Date.now() - start.zeit < 800) zurueck()
      start = null
    },
    { passive: true },
  )
}

/** Eine Ebene öffnen. Rückgabe: zum Schließen über die eigene Schaltfläche (räumt den Verlaufseintrag auf). */
export function ebeneOeffnen(zurueck: () => void): () => void {
  if (typeof window === "undefined") return () => undefined
  einrichten()
  const id = ++zaehler
  stapel.push({ id, zurueck })
  platzhalterSetzen()
  return () => {
    const i = stapel.findIndex((x) => x.id === id)
    // schon über die Zurückgeste geschlossen
    if (i < 0) return
    stapel.splice(i, 1)
    // letzte Ebene über die eigene Schaltfläche geschlossen: Platzhalter wieder entfernen
    if (!stapel.length && platzhalter) {
      platzhalter = false
      ueberspringen++
      history.back()
    }
  }
}

/** Oberste Ebene schließen, als hätte man Zurück gedrückt. */
export function zurueck() {
  if (stapel.length && platzhalter) history.back()
}

type Punkte = { length: number; [i: number]: { clientX: number; clientY: number } }

/** Waagerechtes Wischen über einer Fläche, z. B. für Wochen vor und zurück. */
export function wischen(links: () => void, rechts: () => void) {
  let start: { x: number; y: number } | null = null
  return {
    onTouchStart: (e: { touches: Punkte }) => {
      const t = e.touches[0]
      // Vom Rand aus ist es die Zurückgeste, nicht das Blättern
      start = t && t.clientX >= 32 ? { x: t.clientX, y: t.clientY } : null
    },
    onTouchEnd: (e: { changedTouches: Punkte }) => {
      if (!start) return
      const t = e.changedTouches[0]
      const dx = t.clientX - start.x
      const dy = Math.abs(t.clientY - start.y)
      start = null
      if (Math.abs(dx) < 60 || dy > Math.abs(dx) / 2) return
      if (dx < 0) links()
      else rechts()
    },
  }
}
