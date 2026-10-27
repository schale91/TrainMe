// Zurück wie auf dem Handy gewohnt: Android-Zurückgeste, Wischen vom linken Rand nach rechts und Escape schließen die
// oberste Ebene (Unterseite, Blatt, Tab). Solange eine Ebene offen ist, liegt genau ein Platzhalter im Browserverlauf.
// Zurück verbraucht ihn: Die oberste Ebene schließt sich, und ist danach noch eine offen, kommt ein neuer Platzhalter.
// Capacitor beendet die App erst, wenn kein Platzhalter mehr da ist. Ein Eintrag je Ebene wäre fehleranfällig, weil
// history.back() verzögert wirkt und sich mit neuen Einträgen überholt.

/** art: was beim Zurückwischen mitgeht (Blatt oder Seite); text: Ziel, das beim Wischen links erscheint */
type Ebene = { id: number; zurueck: () => void; art: "seite" | "blatt"; text?: string }

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
    verschiebungLoesen()
  })
  // Wischen vom linken Rand nach rechts wie auf dem iPhone: Die Seite folgt dem Finger. Beim Loslassen entscheiden
  // Strecke und Schwung, ob es zurückgeht oder die Seite an ihren Platz zurückfedert.
  window.addEventListener("touchstart", wischStart, { passive: true })
  window.addEventListener("touchmove", wischBewegen, { passive: true })
  window.addEventListener("touchend", wischEnde, { passive: true })
  window.addEventListener("touchcancel", () => wischEnde(null), { passive: true })
}

// ---------- Fließendes Zurückwischen ----------

type Zug = { x: number; y: number; zeit: number; ziel: HTMLElement | null; aktiv: boolean; dx: number; letzte: { x: number; zeit: number }[] }
let zug: Zug | null = null
let hinweis: HTMLDivElement | null = null
const RAND = 28
const ruhig = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches

/** Was beim Wischen mitgeht: ein offenes Blatt oder die Seite. */
function zielElement(): HTMLElement | null {
  const oben = stapel[stapel.length - 1]
  if (oben?.art === "blatt") {
    const b = document.querySelectorAll<HTMLElement>(".blatthintergrund.offen .blatt")
    return b[b.length - 1] || null
  }
  return document.querySelector<HTMLElement>(".app main") || document.querySelector<HTMLElement>("main")
}

function hinweisZeigen(dx: number) {
  const oben = stapel[stapel.length - 1]
  if (!hinweis) {
    hinweis = document.createElement("div")
    hinweis.className = "wischhinweis"
    document.body.appendChild(hinweis)
  }
  hinweis.textContent = "‹ " + (oben?.text || "Zurück")
  // mittig im frei werdenden Streifen links
  hinweis.style.left = Math.max(8, dx / 2) + "px"
  hinweis.style.opacity = String(Math.min(1, dx / 120))
}

function setzen(el: HTMLElement, dx: number, dauer: number) {
  el.style.transition = dauer && !ruhig() ? "transform " + dauer + "ms cubic-bezier(0.2, 0.8, 0.2, 1)" : "none"
  el.style.transform = dx ? "translateX(" + dx + "px)" : ""
  el.style.boxShadow = dx ? "-10px 0 28px rgba(0, 0, 0, 0.45)" : ""
  el.style.background = dx ? "var(--bg)" : ""
  if (hinweis && !dx) hinweis.style.opacity = "0"
}

function aufraeumen(el: HTMLElement | null) {
  if (!el) return
  el.style.transition = "none"
  el.style.transform = ""
  el.style.boxShadow = ""
  el.style.background = ""
  if (hinweis) hinweis.style.opacity = "0"
}

function wischStart(e: TouchEvent) {
  const t = e.touches[0]
  zug = e.touches.length === 1 && t.clientX < RAND && stapel.length && platzhalter ? { x: t.clientX, y: t.clientY, zeit: Date.now(), ziel: null, aktiv: false, dx: 0, letzte: [] } : null
}

function wischBewegen(e: TouchEvent) {
  if (!zug) return
  const t = e.touches[0]
  const dx = t.clientX - zug.x
  const dy = t.clientY - zug.y
  if (!zug.aktiv) {
    // erst entscheiden: waagerecht zurück oder doch senkrecht scrollen
    if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) {
      zug = null
      return
    }
    if (dx < 10) return
    zug.aktiv = true
    zug.ziel = zielElement()
  }
  zug.dx = Math.max(0, dx)
  zug.letzte = [...zug.letzte.filter((p) => Date.now() - p.zeit < 120), { x: t.clientX, zeit: Date.now() }]
  if (zug.ziel) setzen(zug.ziel, zug.dx, 0)
  hinweisZeigen(zug.dx)
}

function wischEnde(e: TouchEvent | null) {
  const z = zug
  zug = null
  if (!z || !z.aktiv || !z.ziel) return
  const el = z.ziel
  const breite = window.innerWidth
  const erst = z.letzte[0]
  const zuletzt = z.letzte[z.letzte.length - 1]
  const tempo = erst && zuletzt && zuletzt.zeit > erst.zeit ? (zuletzt.x - erst.x) / (zuletzt.zeit - erst.zeit) : 0
  // Abgebrochen (z. B. von der Systemgeste übernommen) oder zu kurz und zu langsam: zurückfedern
  const weiter = e !== null && (z.dx > breite * 0.35 || (tempo > 0.5 && z.dx > 40))
  if (!weiter) {
    setzen(el, 0, 220)
    setTimeout(() => aufraeumen(el), 240)
    return
  }
  setzen(el, breite, 180)
  setTimeout(() => {
    nachZurueck = el
    zurueck()
  }, ruhig() ? 0 : 170)
}

/** Nach dem Zurückwischen die Verschiebung lösen, sobald die vorige Seite gezeichnet ist. */
let nachZurueck: HTMLElement | null = null
function verschiebungLoesen() {
  const el = nachZurueck
  nachZurueck = null
  if (el) requestAnimationFrame(() => requestAnimationFrame(() => aufraeumen(el)))
}

/** Eine Ebene öffnen. Rückgabe: zum Schließen über die eigene Schaltfläche (räumt den Verlaufseintrag auf). */
export function ebeneOeffnen(zurueck: () => void, art: "seite" | "blatt" = "seite", text?: string): () => void {
  if (typeof window === "undefined") return () => undefined
  einrichten()
  const id = ++zaehler
  stapel.push({ id, zurueck, art, text })
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
