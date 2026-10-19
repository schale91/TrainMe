// Brücke zum nativen Pausentimer (Android): läuft im Hintergrund weiter, zeigt die Restzeit in der Benachrichtigung
// und, wenn erlaubt, schwebend über anderen Apps. Im Browser passiert hier nichts, dort zählt die App selbst.

import { Capacitor, registerPlugin } from "@capacitor/core"

interface PausenTimerPlugin {
  start(o: { ende: number; titel: string; text: string }): Promise<void>
  stop(): Promise<void>
  status(): Promise<{ overlay: boolean; benachrichtigung: boolean }>
  overlayErlauben(): Promise<void>
  benachrichtigungErlauben(): Promise<void>
}

const nativ = Capacitor.isNativePlatform()
const Timer = registerPlugin<PausenTimerPlugin>("PausenTimer")
let gefragt = false

export async function pauseStarten(ende: number, titel: string, text: string): Promise<void> {
  if (!nativ) return
  try {
    if (!gefragt) {
      gefragt = true
      const s = await Timer.status()
      if (!s.benachrichtigung) await Timer.benachrichtigungErlauben()
    }
    await Timer.start({ ende, titel, text })
  } catch {
    /* ohne nativen Timer weiter */
  }
}

export async function pauseStoppen(): Promise<void> {
  if (!nativ) return
  try {
    await Timer.stop()
  } catch {
    /* egal */
  }
}

export async function timerStatus(): Promise<{ nativ: boolean; overlay: boolean; benachrichtigung: boolean }> {
  if (!nativ) return { nativ: false, overlay: false, benachrichtigung: false }
  try {
    return { nativ: true, ...(await Timer.status()) }
  } catch {
    return { nativ: true, overlay: false, benachrichtigung: false }
  }
}

export async function overlayErlauben(): Promise<void> {
  if (nativ) await Timer.overlayErlauben()
}

export async function benachrichtigungErlauben(): Promise<void> {
  if (nativ) await Timer.benachrichtigungErlauben()
}
