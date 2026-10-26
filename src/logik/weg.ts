// Dein Weg: der Jahresplan als Folge von Schritten mit Status, damit sichtbar ist, was geschafft ist, wo man steht und
// was als Nächstes kommt. Kontrolltests liegen am Ende eines Blocks, wenn danach die Phase wechselt.

import { BLOCK_TAGE, blockIndex, phaseAm, plusTage } from "./jahresplan"
import type { Daten, Phase } from "./typen"

export type Status = "vorbei" | "jetzt" | "kommt"

export type Schritt =
  | { art: "start"; datum: string; status: Status }
  | { art: "einstufung"; datum?: string; status: Status }
  | { art: "block"; nr: number; phase: Phase; naechste: Phase | null; von: string; bis: string; status: Status; einheiten: number; geplant: number; rekorde: number; woche: number; tageRest: number }
  | { art: "test"; datum: string; status: Status; erledigt: boolean }
  | { art: "saison"; datum: string; status: Status }

const zwischen = (d: string, von: string, bis: string) => d >= von && d <= bis

/** Alle Schritte des Wegs für heute. Ohne Profil oder Jahresplan: leer. */
export function wegStand(daten: Daten, heute: string): Schritt[] {
  const profil = daten.profil
  const plan = profil?.jahresplan
  // Mit eigenem Plan gibt es keinen Jahresplan von TrainMe; den Weg zeigt dann der Plan selbst (planWeg)
  if (!profil || !plan || (profil.planart === "eigen" && daten.eigenerPlan)) return []
  const tage = profil.woche.filter((t) => t.art === "training").length
  const jetzt = blockIndex(plan, heute)
  const anzahl = Math.max(plan.bloecke.length, jetzt + 3)
  const eingestuft = daten.einstufung?.kraft && daten.einstufung?.mobil ? daten.einstufung.mobil : undefined
  const schritte: Schritt[] = [
    { art: "start", datum: plan.start, status: "vorbei" },
    { art: "einstufung", datum: eingestuft, status: eingestuft ? "vorbei" : "jetzt" },
  ]
  const phase = (i: number) => phaseAm(profil, plusTage(plan.start, i * BLOCK_TAGE + 1)) || "grundlage"
  for (let i = 0; i < anzahl; i++) {
    const von = plusTage(plan.start, i * BLOCK_TAGE)
    const bis = plusTage(von, BLOCK_TAGE - 1)
    const status: Status = i < jetzt ? "vorbei" : i === jetzt ? "jetzt" : "kommt"
    const erledigt = daten.erledigt.filter((e) => zwischen(e.geplant || e.datum, von, bis))
    const ph = phase(i)
    const naechste = phase(i + 1)
    if (plan.saison && ph === "erhalt" && (i === 0 || phase(i - 1) !== "erhalt")) schritte.push({ art: "saison", datum: von, status: i <= jetzt ? "vorbei" : "kommt" })
    const tageRein = Math.round((Date.parse(heute + "T12:00:00Z") - Date.parse(von + "T12:00:00Z")) / 86400000)
    schritte.push({
      art: "block",
      nr: i + 1,
      phase: ph,
      naechste: naechste !== ph ? naechste : null,
      von,
      bis,
      status,
      einheiten: erledigt.length,
      geplant: tage * 5,
      rekorde: erledigt.reduce((n, e) => n + e.rekorde.length, 0),
      woche: status === "jetzt" ? Math.min(4, Math.floor(tageRein / 7)) : status === "vorbei" ? 5 : 0,
      tageRest: status === "jetzt" ? BLOCK_TAGE - tageRein : status === "kommt" ? Math.round((Date.parse(von + "T12:00:00Z") - Date.parse(heute + "T12:00:00Z")) / 86400000) : 0,
    })
    // Kontrolltest in der Entlastungswoche, bevor eine neue Phase beginnt (Reha: nach jedem Block)
    if (naechste !== ph || profil.sport === "reha") {
      const test = plusTage(von, 4 * 7)
      const fertig = (daten.messungen || []).some((m) => zwischen(m.datum, test, plusTage(bis, 7))) || [daten.einstufung?.kraft, daten.einstufung?.mobil].some((d) => !!d && zwischen(d, test, plusTage(bis, 7)))
      schritte.push({ art: "test", datum: test, erledigt: fertig, status: heute > bis ? "vorbei" : heute >= test ? "jetzt" : "kommt" })
    }
  }
  return schritte
}

export function aktuellerBlock(s: Schritt[]): Extract<Schritt, { art: "block" }> | null {
  return (s.find((x) => x.art === "block" && x.status === "jetzt") as Extract<Schritt, { art: "block" }>) || null
}

/** Anteil des Jahresplans, der schon hinter einem liegt (0 bis 1). */
export function jahresAnteil(daten: Daten, heute: string): number {
  const plan = daten.profil?.jahresplan
  if (!plan) return 0
  const tage = (Date.parse(heute + "T12:00:00Z") - Date.parse(plan.start + "T12:00:00Z")) / 86400000
  return Math.min(1, Math.max(0, tage / (plan.bloecke.length * BLOCK_TAGE)))
}

/** Abschnitte eines eigenen Plans (z. B. Phasen) mit geschafften und offenen Tagen. */
export function planWeg(daten: Daten): { name: string; tage: number; erledigt: number; status: Status }[] {
  const plan = daten.eigenerPlan
  if (!plan) return []
  const fertig = new Set(daten.erledigt.filter((e) => typeof e.plan_nr === "number").map((e) => e.plan_nr))
  const abschnitte: { name: string; tage: number; erledigt: number; status: Status }[] = []
  for (const t of [...plan.tage].sort((a, b) => a.nr - b.nr)) {
    const name = t.abschnitt || plan.name
    let a = abschnitte[abschnitte.length - 1]
    if (!a || a.name !== name) abschnitte.push((a = { name, tage: 0, erledigt: 0, status: "kommt" }))
    a.tage++
    if (fertig.has(t.nr)) a.erledigt++
  }
  let jetzt = false
  for (const a of abschnitte) {
    a.status = a.erledigt >= a.tage ? "vorbei" : jetzt ? "kommt" : "jetzt"
    if (a.status === "jetzt") jetzt = true
  }
  return abschnitte
}
