// App-Protokoll der eigenständigen TrainMe-App (Wunsch von Alex, 16.11. und 24.11.2026): technische Ereignisse,
// damit Claude nachvollziehen kann, warum der schwebende Pausentimer nicht über anderen Apps erscheint oder die App
// abbricht. Nur Technik: Art, kurzer Text, ein paar Kennzahlen, keine Trainingsinhalte. Die Einträge gehen an
// denselben Speicher wie die der Lebenswelt-App (POST /api/lebenswelt/app-protokoll, 14 Tage aufbewahrt).
// Hier stehen die reinen Funktionen; Speicher, Senden und die Anbindung an Android stehen in ui/appProtokoll.ts.

export interface Eintrag {
  i: string
  z: number
  a: string
  t: string
  d?: Record<string, unknown>
}

/** Letzter Herzschlag der vorigen Sitzung */
export interface Lebenszeichen {
  s: string
  z: number
  sichtbar: boolean
  /** Ende der laufenden Satzpause (ms) oder null */
  pause: number | null
  /** sauber beendet (pagehide) */
  ende?: boolean
}

export const HERZ_MS = 20_000
/** So frisch muss der letzte Herzschlag sein, damit ein fehlendes Ende als unerwarteter Neustart zählt */
export const FRISCH_MS = 24 * 3600_000

export const zufall = (n: number) => {
  const z = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let s = ""
  for (let k = 0; k < n; k++) s += z[Math.floor(Math.random() * z.length)]
  return s
}

/** Tag (JJJJ-MM-TT) in der Zeit des Geräts */
export const tagVon = (z: number) => {
  const d = new Date(z)
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")
}

/** War die vorige Sitzung ein unerwarteter Neustart? Ergebnis null oder ein Eintrag ohne i und z. */
export function neustartPruefen(vorher: Lebenszeichen | null, jetzt: number): Omit<Eintrag, "i" | "z"> | null {
  if (!vorher || vorher.ende || !(vorher.z > 0)) return null
  const her = jetzt - vorher.z
  if (her < 0 || her > FRISCH_MS) return null
  const pause = vorher.pause !== null && vorher.pause > vorher.z - HERZ_MS
  return {
    a: "neustart_unerwartet",
    t: (vorher.sichtbar ? "TrainMe im Vordergrund beendet (meist Absturz der Webansicht)" : "TrainMe im Hintergrund beendet (von Android oder weggewischt)") + (pause ? ", während eine Pause lief" : ""),
    d: { her_s: Math.round(her / 1000), sichtbar: vorher.sichtbar, pause_lief: pause },
  }
}

/** Einträge je Tag gruppieren (eine Anfrage je Tag) */
export function jeTag(eintraege: Eintrag[]): Record<string, Eintrag[]> {
  const aus: Record<string, Eintrag[]> = {}
  for (const e of eintraege) (aus[tagVon(e.z)] ||= []).push(e)
  return aus
}

/** Kurze, technische Beschreibung eines Fehlers: Meldung und Ort, ohne lange Stapel */
export function fehlerText(f: unknown, ort?: string): string {
  const e = f as { message?: unknown; name?: unknown; stack?: unknown } | null
  const meldung = e && typeof e === "object" && e.message !== undefined ? String(e.name ? e.name + ": " : "") + String(e.message) : String(f)
  const stapel = e && typeof e === "object" && typeof e.stack === "string" ? e.stack.split("\n").slice(1, 3).map((z) => z.trim().replace(/https?:\/\/[^/]+/g, "")).join(" | ") : ""
  return [meldung, ort, stapel].filter(Boolean).join(" · ").slice(0, 300)
}

/**
 * Einträge aus dem Android-Teil (Pausentimer-Dienst) übernehmen: nur gültige Felder, wie sie das Add-on annimmt
 * (Art klein mit Unterstrich, Kennung bis 16 Zeichen), ohne Doppelte.
 */
export function nativeUebernehmen(offen: Eintrag[], nativ: unknown): Eintrag[] {
  if (!Array.isArray(nativ)) return offen
  const da = new Set(offen.map((e) => e.i))
  const neu: Eintrag[] = []
  for (const x of nativ) {
    const e = x as Partial<Eintrag> | null
    if (!e || typeof e !== "object") continue
    const i = String(e.i ?? "")
    const z = Number(e.z)
    const a = String(e.a ?? "")
    if (!/^[A-Za-z0-9]{1,16}$/.test(i) || !(z > 0) || !/^[a-z_]{1,30}$/.test(a) || da.has(i)) continue
    da.add(i)
    const ein: Eintrag = { i, z, a, t: String(e.t ?? "").slice(0, 300) }
    if (e.d && typeof e.d === "object" && !Array.isArray(e.d)) ein.d = e.d as Record<string, unknown>
    neu.push(ein)
  }
  return [...offen, ...neu].sort((x, y) => x.z - y.z)
}
