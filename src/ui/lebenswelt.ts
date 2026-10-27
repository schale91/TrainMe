// Verbindung zur Lebenswelt. Drei Arten, TrainMe zu benutzen:
// - lokal: wie bisher, alles nur auf dem Gerät (für alle ohne Lebenswelt)
// - eingebettet: TrainMe läuft in der Lebenswelt (gleiche Adresse, eigenes Fenster). Die Lebenswelt stellt im
//   übergeordneten Fenster die Brücke lebensweltTrainme bereit: Anfragen an ihre Datenbank, Pausen-Wecker, Bescheid
//   nach dem Speichern (dann bucht sie die XP).
// - gekoppelt: die TrainMe-APK mit Geräteschlüssel aus dem QR-Code der Lebenswelt, über die Weiterleitung
//   lebenswelt_fit in Home Assistant (/api/lebenswelt_fit/… → /api/lebenswelt/…).

import { Capacitor, CapacitorHttp, registerPlugin, type PluginListenerHandle } from "@capacitor/core"
import type { Anfrage } from "../logik/abgleich"

export interface Bruecke {
  /** Anfrage an die Datenbank der Lebenswelt, Pfad ab /api/lebenswelt/… */
  anfrage(methode: string, pfad: string, koerper?: string): Promise<{ status: number; text: string }>
  /** Person in der Lebenswelt (für den Speicher auf dem Gerät) und ihr Name */
  person?: string
  name?: string
  /** Pause läuft bis ende (ms) oder ist vorbei (null) */
  pause?(ende: number | null, text: string): void
  /** Etwas wurde gespeichert und liegt in der Datenbank */
  gespeichert?(): void
  /** Maximum je Hauptübung, mit dem das Kraftbuch ohne eigenen Eintrag gerechnet hat */
  startwerte?: Record<string, number>
  /** TrainMe schließen und zurück in die Lebenswelt (die Lebenswelt zeigt dafür keine eigene Leiste) */
  schliessen?(): void
  /** Zeichnet die Übungsfigur in eine Canvas (sonst zeichnet TrainMe selbst) */
  figur?(canvas: HTMLCanvasElement, uebung: string, geraet: string): void
}

export interface Kopplung {
  adresse: string
  schluessel: string
  person: string
  name: string
}

export type Modus = "lokal" | "eingebettet" | "gekoppelt"

const KOPPLUNG = "trainme.kopplung"

/** Brücke der Lebenswelt, wenn TrainMe in ihr läuft. */
export function bruecke(): Bruecke | null {
  try {
    if (window.parent && window.parent !== window) return ((window.parent as unknown as { lebensweltTrainme?: Bruecke }).lebensweltTrainme as Bruecke) || null
  } catch {
    /* fremdes Fenster */
  }
  return null
}

export function kopplung(): Kopplung | null {
  try {
    const k = JSON.parse(localStorage.getItem(KOPPLUNG) || "null") as Kopplung | null
    return k && k.adresse && k.schluessel ? k : null
  } catch {
    return null
  }
}

export function kopplungSetzen(k: Kopplung | null): void {
  try {
    if (k) localStorage.setItem(KOPPLUNG, JSON.stringify(k))
    else localStorage.removeItem(KOPPLUNG)
  } catch {
    /* egal */
  }
}

export function modus(): Modus {
  if (bruecke()) return "eingebettet"
  if (kopplung()) return "gekoppelt"
  return "lokal"
}

/** Unter welchem Schlüssel die Daten auf dem Gerät liegen: lokale Daten bleiben von denen der Lebenswelt getrennt. */
export function speicherSchluessel(): string {
  const b = bruecke()
  if (b) return "trainme.lw." + (b.person || "ich")
  const k = kopplung()
  if (k) return "trainme.lw." + k.person
  return "trainme.daten"
}

const adresseNormal = (a: string) => {
  const s = a.trim().replace(/\/+$/, "")
  return /^https?:\/\//i.test(s) ? s : "https://" + s
}

async function http(methode: string, url: string, kopf: Record<string, string>, koerper?: unknown): Promise<{ status: number; daten: unknown }> {
  try {
    if (Capacitor.isNativePlatform()) {
      // Natives HTTP: Home Assistant schickt keine Freigabe für fremde Seiten (CORS)
      const r = await CapacitorHttp.request({ url, method: methode, headers: { "Content-Type": "application/json", ...kopf }, data: koerper, connectTimeout: 15000, readTimeout: 30000, responseType: "json" })
      return { status: r.status, daten: typeof r.data === "string" ? JSON.parse(r.data || "null") : r.data }
    }
    const r = await fetch(url, { method: methode, headers: { "Content-Type": "application/json", ...kopf }, body: koerper === undefined ? undefined : JSON.stringify(koerper) })
    return { status: r.status, daten: await r.json().catch(() => null) }
  } catch {
    return { status: 0, daten: null }
  }
}

/** Anfrage an die Lebenswelt je nach Modus. Ohne Verbindung status 0. */
export const anfrage: Anfrage = async (methode, pfad, koerper) => {
  const b = bruecke()
  if (b) {
    try {
      const r = await b.anfrage(methode, pfad, koerper === undefined ? undefined : JSON.stringify(koerper))
      return { status: r.status, daten: r.text ? JSON.parse(r.text) : null }
    } catch {
      return { status: 0, daten: null }
    }
  }
  const k = kopplung()
  if (!k) return { status: 0, daten: null }
  return http(methode, k.adresse + "/api/lebenswelt_fit/" + pfad.replace(/^\/api\/lebenswelt\//, ""), { Authorization: "Bearer " + k.schluessel }, koerper)
}

/** Mit Adresse und Code aus der Lebenswelt koppeln. Wirft mit lesbarer Meldung. */
export async function koppeln(adresse: string, code: string, geraet = "TrainMe"): Promise<Kopplung> {
  const a = adresseNormal(adresse)
  const r = await http("POST", a + "/api/lebenswelt_fit/fit/koppeln", {}, { code: code.trim(), name: geraet, ziel: "trainme" })
  const d = (r.daten || {}) as { schluessel?: string; person?: string; name?: string; fehler?: string }
  if (r.status === 0) throw new Error("Home Assistant ist unter dieser Adresse nicht erreichbar.")
  if (r.status === 404) throw new Error("Unter dieser Adresse gibt es die Weiterleitung „Lebenswelt Fit“ nicht. Ist die Integration in Home Assistant hinzugefügt?")
  if (r.status !== 200 || !d.schluessel || !d.person) throw new Error(d.fehler || "Koppeln hat nicht geklappt (HTTP " + r.status + ").")
  const k = { adresse: a, schluessel: d.schluessel, person: d.person, name: d.name || "" }
  kopplungSetzen(k)
  return k
}

/** Link aus dem QR-Code der Lebenswelt: trainme://koppeln?a=Adresse&c=Code */
export function linkLesen(url: string): { adresse: string; code: string } | null {
  const m = /^trainme:\/\/koppeln\?(.*)$/i.exec(url.trim())
  if (!m) return null
  const p = new URLSearchParams(m[1])
  const adresse = p.get("a") || ""
  const code = p.get("c") || ""
  return adresse && code ? { adresse, code } : null
}

interface KopplungPlugin {
  link(): Promise<{ url?: string | null }>
  addListener(e: "link", f: (d: { url?: string }) => void): Promise<PluginListenerHandle>
}
const Nativ = registerPlugin<KopplungPlugin>("Kopplung")

/** Hört auf Kopplungs-Links (beim Start und während die App läuft). */
export function aufLinkHoeren(f: (l: { adresse: string; code: string }) => void): () => void {
  if (!Capacitor.isNativePlatform()) return () => undefined
  let griff: PluginListenerHandle | null = null
  const pruefe = (url?: string | null) => {
    const l = url ? linkLesen(url) : null
    if (l) f(l)
  }
  void Nativ.link()
    .then((r) => pruefe(r.url))
    .catch(() => undefined)
  void Nativ.addListener("link", (d) => pruefe(d.url))
    .then((g) => (griff = g))
    .catch(() => undefined)
  return () => void griff?.remove()
}
