// Pause beim Wechsel von einer Übung zur nächsten. Die Erholung richtet sich nach der Übung, die als Nächstes kommt:
// schwere Hauptübungen brauchen 2 bis 3 Minuten, Ergänzungsübungen 1 bis 2 Minuten (ACSM Position Stand 2009; für
// Kraft wirken Pausen über 2 Minuten besser, Grgic et al. 2018). Arbeiten dieselben Muskeln weiter, gilt die längere
// der beiden Pausen, weil sie noch ermüdet sind. Für Umbau und Gerätewechsel kommen 30 Sekunden dazu.

import type { Platz } from "./typen"

export interface Wechsel {
  sekunden: number
  grund: string
}

const minuten = (s: number) => (s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") + " min" : s + " s")

export function wechselPause(von: Platz, nach: Platz): Wechsel {
  const u = nach.uebung
  if (nach.rolle === "mobil" || u.art === "mobilitaet") return { sekunden: 30, grund: "Beweglichkeit braucht kaum Erholung: kurz durchatmen, dann weiter." }
  if (nach.rolle === "ausdauer" || u.art === "ausdauer") return { sekunden: 60, grund: "Kurz trinken, dann locker in die Ausdauer starten." }
  const muskelnVon = new Set([...von.uebung.muskeln, ...(von.uebung.sekundaer || [])])
  const gleich = u.muskeln.some((m) => muskelnVon.has(m))
  let s = nach.vorgabe.pause_s || 90
  const gruende: string[] = []
  if (gleich && von.vorgabe.pause_s > s) {
    s = von.vorgabe.pause_s
    gruende.push("dieselben Muskeln arbeiten weiter und brauchen volle Erholung")
  } else if (nach.rolle === "haupt") gruende.push("schwere Hauptübung als Nächstes, dafür 2 bis 3 Minuten")
  else if (!gleich) gruende.push("andere Muskeln als eben, eine kürzere Pause reicht")
  else gruende.push("Pause wie zwischen den Sätzen dieser Übung")
  const anderesGeraet = JSON.stringify(von.uebung.geraete[0] || []) !== JSON.stringify(u.geraete[0] || [])
  if (anderesGeraet) {
    s += 30
    gruende.push("30 s zum Umbauen")
  }
  s = Math.max(60, Math.min(300, s))
  return { sekunden: s, grund: "Wechsel zu " + u.name + ": " + minuten(s) + ", " + gruende.join(", ") + "." }
}
