// App-Protokoll der eigenständigen TrainMe-App (siehe logik/appProtokoll.ts). Läuft nur in der Android-App, nicht im
// Browser und nicht eingebettet in der Lebenswelt (dort schreibt die Lebenswelt selbst mit). Gesendet wird nur, wenn
// TrainMe mit der Lebenswelt gekoppelt ist; sonst bleiben die Einträge auf dem Gerät (höchstens 500).

import { Capacitor, registerPlugin } from "@capacitor/core"
import { fehlerText, jeTag, nativeUebernehmen, neustartPruefen, tagVon, zufall, HERZ_MS, type Eintrag, type Lebenszeichen } from "../logik/appProtokoll"
import { anfrage, bruecke, kopplung } from "./lebenswelt"

const OFFEN = "trainme.protokoll"
const GERAET = "trainme.protokoll.geraet"
const LEBT = "trainme.protokoll.lebt"
const MAX_OFFEN = 500
const SENDEN_MS = 60_000
const MAX_FEHLER_JE_SITZUNG = 30

interface ProtokollPlugin {
  protokoll(): Promise<{ eintraege: unknown[] }>
}
const Nativ = registerPlugin<ProtokollPlugin>("PausenTimer")

const sitzung = zufall(8)
let aktiv = false
let gestartet = false
let fehlerZahl = 0
let letzterFehler = { t: "", z: 0 }
let pauseEnde: number | null = null

function lies<T>(k: string, sonst: T): T {
  try {
    const s = localStorage.getItem(k)
    return s ? (JSON.parse(s) as T) : sonst
  } catch {
    return sonst
  }
}
function schreib(k: string, v: unknown) {
  try {
    localStorage.setItem(k, JSON.stringify(v))
  } catch {
    /* voll oder gesperrt: dann ohne */
  }
}

/** Ein Ereignis merken. a: Art (klein, mit Unterstrich), t: kurzer Text, d: Kennzahlen */
export function merke(a: string, t = "", d?: Record<string, unknown>) {
  if (!aktiv) return
  const e: Eintrag = { i: zufall(12), z: Date.now(), a, t: t.slice(0, 300) }
  if (d) e.d = d
  schreib(OFFEN, [...lies<Eintrag[]>(OFFEN, []), e].slice(-MAX_OFFEN))
}

function fehler(f: unknown, ort?: string) {
  const t = fehlerText(f, ort)
  const jetzt = Date.now()
  // Dieselbe Meldung kurz hintereinander nur einmal, und nicht unbegrenzt viele je Sitzung
  if (t === letzterFehler.t && jetzt - letzterFehler.z < 10_000) return
  letzterFehler = { t, z: jetzt }
  if (++fehlerZahl > MAX_FEHLER_JE_SITZUNG) return
  merke("fehler", t)
}

/** Satzpause: Start (ende in ms) oder Stopp (null) */
export function pauseMerken(ende: number | null, titel = "") {
  if (!aktiv) return
  pauseEnde = ende
  herz()
  if (ende === null) return merke("pause_stopp_js")
  merke("pause_start_js", `${Math.round((ende - Date.now()) / 1000)} s ${titel}`.trim(), { sichtbar: document.visibilityState === "visible" })
}

/** Fehler beim Ansprechen des nativen Timers */
export function timerFehler(f: unknown, wo: string) {
  if (aktiv) fehler(f, "Pausentimer " + wo)
}

function herz(ende = false) {
  schreib(LEBT, { s: sitzung, z: Date.now(), sichtbar: document.visibilityState === "visible", pause: pauseEnde, ...(ende ? { ende: true } : {}) } satisfies Lebenszeichen)
}

function geraet(): string {
  let id = lies<string>(GERAET, "")
  if (!/^[A-Za-z0-9_-]{1,40}$/.test(id)) {
    id = "tm" + zufall(10)
    schreib(GERAET, id)
  }
  return id
}

/** Einträge aus dem Android-Teil abholen (der Dienst schreibt auch, wenn TrainMe im Hintergrund ist) */
async function nativeHolen() {
  try {
    const r = await Nativ.protokoll()
    schreib(OFFEN, nativeUebernehmen(lies<Eintrag[]>(OFFEN, []), r?.eintraege).slice(-MAX_OFFEN))
  } catch {
    /* ältere App ohne Protokoll im Android-Teil */
  }
}

let sendet = false
/** Offene Einträge an das Add-on; was angekommen ist, fällt aus dem Speicher */
async function senden() {
  if (sendet || !kopplung()) return
  const offen = lies<Eintrag[]>(OFFEN, [])
  if (!offen.length) return
  sendet = true
  try {
    const weg = new Set<string>()
    for (const [tag, eintraege] of Object.entries(jeTag(offen))) {
      for (let k = 0; k < eintraege.length; k += 200) {
        const teil = eintraege.slice(k, k + 200)
        const r = await anfrage("POST", "/api/lebenswelt/app-protokoll", { geraet: geraet(), name: "TrainMe " + __VERSION__, tag, eintraege: teil })
        // 400: ungültig, bleibt es auch; sonst (offline, älteres Add-on) später noch einmal
        if (r.status === 200 || r.status === 400) for (const e of teil) weg.add(e.i)
        else return
      }
    }
    schreib(OFFEN, lies<Eintrag[]>(OFFEN, []).filter((e) => !weg.has(e.i)))
  } catch {
    /* später noch einmal */
  } finally {
    sendet = false
  }
}

/** Einmal beim Start der App aufrufen */
export function protokollStarten() {
  if (gestartet) return
  gestartet = true
  if (!Capacitor.isNativePlatform() || bruecke()) return
  aktiv = true
  const jetzt = Date.now()
  const vorher = lies<Lebenszeichen | null>(LEBT, null)
  const neustart = neustartPruefen(vorher, jetzt)
  if (neustart) merke(neustart.a, neustart.t, neustart.d)
  merke("start", "TrainMe " + __VERSION__ + " gestartet", { tag: tagVon(jetzt), gekoppelt: !!kopplung() })
  herz()
  window.addEventListener("error", (e) => fehler(e.error ?? e.message, e.filename ? e.filename.replace(/^.*\//, "") + ":" + e.lineno : undefined))
  window.addEventListener("unhandledrejection", (e) => fehler(e.reason, "Promise"))
  document.addEventListener("visibilitychange", () => {
    const sichtbar = document.visibilityState === "visible"
    const rest = pauseEnde && pauseEnde > Date.now() ? Math.round((pauseEnde - Date.now()) / 1000) : null
    merke(sichtbar ? "vordergrund" : "hintergrund", sichtbar ? "TrainMe wieder im Vordergrund" : "TrainMe im Hintergrund", rest !== null ? { pause_rest_s: rest } : undefined)
    herz()
    if (sichtbar) void nativeHolen().then(senden)
    else void senden()
  })
  window.addEventListener("pagehide", () => {
    herz(true)
    void senden()
  })
  setInterval(() => herz(), HERZ_MS)
  setInterval(() => void nativeHolen().then(senden), SENDEN_MS)
  void nativeHolen().then(senden)
}
