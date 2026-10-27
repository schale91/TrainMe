// Health Connect (Android): Schritte, Schlaf, Ruhepuls und HRV lesen. Nur lesen, nichts wird geschrieben oder versendet.

import { Capacitor } from "@capacitor/core"
import { Health } from "@capgo/capacitor-health"
import type { Tageswerte } from "../logik/typen"

const TYPEN = ["steps", "sleep", "restingHeartRate", "heartRateVariability"] as const

const tag = (d: Date) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")

export async function gesundheitVerfuegbar(): Promise<{ ok: boolean; grund?: string }> {
  if (!Capacitor.isNativePlatform()) return { ok: false, grund: "Nur in der Android-App" }
  try {
    const r = await Health.isAvailable()
    return { ok: r.available, grund: r.available ? undefined : r.reason || "Health Connect ist nicht installiert" }
  } catch (e) {
    return { ok: false, grund: String((e as Error).message || e) }
  }
}

export async function gesundheitVerbinden(): Promise<boolean> {
  const r = await Health.requestAuthorization({ read: [...TYPEN] })
  return r.readAuthorized.length > 0
}

export async function gesundheitEinstellungen(): Promise<void> {
  await Health.openHealthConnectSettings()
}

/** Werte der letzten Tage. Fehlende Berechtigungen oder Daten lassen einzelne Werte einfach leer. */
export async function gesundheitLesen(tage = 7): Promise<Record<string, Tageswerte>> {
  const ende = new Date()
  const start = new Date(ende.getFullYear(), ende.getMonth(), ende.getDate() - (tage - 1))
  const out: Record<string, Tageswerte> = {}
  const setze = (d: string, k: keyof Tageswerte, v: number) => {
    out[d] = { ...(out[d] || {}), [k]: Math.round(v) }
  }
  try {
    const { samples } = await Health.queryAggregated({ dataType: "steps", startDate: start.toISOString(), endDate: ende.toISOString(), bucket: "day", aggregation: "sum" })
    for (const s of samples) setze(tag(new Date(s.startDate)), "schritte", s.value)
  } catch {
    /* keine Schritte */
  }
  try {
    // Schlaf: Sitzungen der letzten Nächte, dem Tag des Aufwachens zugeordnet
    const { samples } = await Health.readSamples({ dataType: "sleep", startDate: new Date(start.getTime() - 86400000).toISOString(), endDate: ende.toISOString(), limit: 200 })
    const summe: Record<string, number> = {}
    for (const s of samples) {
      if (s.sleepState === "inBed") continue
      const d = tag(new Date(s.endDate))
      summe[d] = (summe[d] || 0) + s.value
    }
    for (const [d, m] of Object.entries(summe)) setze(d, "schlaf_min", m)
  } catch {
    /* kein Schlaf */
  }
  for (const [typ, feld] of [
    ["restingHeartRate", "ruhepuls"],
    ["heartRateVariability", "hrv"],
  ] as const) {
    try {
      const { samples } = await Health.readSamples({ dataType: typ, startDate: start.toISOString(), endDate: ende.toISOString(), limit: 200 })
      const je: Record<string, number[]> = {}
      for (const s of samples) (je[tag(new Date(s.startDate))] ||= []).push(s.value)
      for (const [d, l] of Object.entries(je)) setze(d, feld, l.reduce((a, b) => a + b, 0) / l.length)
    } catch {
      /* fehlt */
    }
  }
  return out
}

/** Kurzer Hinweis zur Tagesform aus Schlaf und Ruhepuls. */
export function tagesform(heute?: Tageswerte, verlauf: Tageswerte[] = []): string | null {
  if (!heute) return null
  if (heute.schlaf_min !== undefined && heute.schlaf_min < 360) return "Wenig Schlaf (" + Math.floor(heute.schlaf_min / 60) + " h " + (heute.schlaf_min % 60) + " min): Plan wie vorgesehen, aber lieber eine Wiederholung mehr im Tank lassen."
  const pulse = verlauf.map((t) => t.ruhepuls).filter((x): x is number => !!x)
  if (heute.ruhepuls && pulse.length >= 3) {
    const schnitt = pulse.reduce((a, b) => a + b, 0) / pulse.length
    if (heute.ruhepuls > schnitt + 6) return "Ruhepuls deutlich über deinem Schnitt: Vielleicht bahnt sich etwas an. Locker trainieren oder Pause."
  }
  return null
}
