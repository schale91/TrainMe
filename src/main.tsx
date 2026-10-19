import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./stil.css"

// Fehler außerhalb von React sichtbar machen statt still abzubrechen
function zeigeFehler(text: string) {
  try {
    localStorage.setItem("trainme.letzterFehler", JSON.stringify({ zeit: new Date().toISOString(), bereich: "global", text }))
  } catch {
    /* egal */
  }
  const el = document.getElementById("fehlerhinweis") || Object.assign(document.createElement("pre"), { id: "fehlerhinweis" })
  el.textContent = "Fehler: " + text.slice(0, 600)
  document.body.appendChild(el)
}
window.addEventListener("error", (e) => zeigeFehler(String(e.error?.stack || e.message)))
window.addEventListener("unhandledrejection", (e) => zeigeFehler(String(e.reason?.stack || e.reason)))

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
