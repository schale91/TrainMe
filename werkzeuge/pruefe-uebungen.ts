// Regeln für Einträge der Übungsdatenbank. Wird von den Tests genutzt.
import { GERAETE_IDS, LASTGERAETE, MUSKELN, MUSTER, type Uebung } from "../src/logik/typen"

const LAST: readonly string[] = LASTGERAETE
const GELENKE = ["knie", "schulter", "ruecken", "huefte", "handgelenk", "ellbogen", "sprunggelenk", "nacken"]

function texte(u: Uebung): string[] {
  const i = u.info
  return [u.name, u.hinweis || "", ...(u.auch || []), i.kurz, ...i.ausfuehrung, i.atmung, ...i.fehler, ...i.vorteile, ...i.tipps, i.varianten || "", i.sicherheit || "", i.golf || ""]
}

export function pruefeUebungen(liste: Uebung[]): string[] {
  const f: string[] = []
  const ids = new Set<string>()
  for (const u of liste) {
    const w = (t: string) => f.push((u && u.id) + ": " + t)
    if (!u || typeof u !== "object") {
      f.push("Eintrag ist kein Objekt")
      continue
    }
    if (!/^[a-z0-9_]+$/.test(u.id || "")) w("id nur a-z, 0-9 und _")
    if (ids.has(u.id)) w("id doppelt")
    ids.add(u.id)
    if (!u.name || u.name.length < 3) w("name fehlt")
    if (!(MUSTER as readonly string[]).includes(u.muster)) w("muster unbekannt: " + u.muster)
    const art = u.muster.startsWith("mobilitaet_") ? "mobilitaet" : u.muster.startsWith("ausdauer_") ? "ausdauer" : "kraft"
    if (u.art !== art) w("art muss " + art + " sein")
    if (!Array.isArray(u.muskeln) || !u.muskeln.length) w("muskeln fehlen")
    for (const m of [...(u.muskeln || []), ...(u.sekundaer || [])]) if (!(MUSKELN as readonly string[]).includes(m)) w("Muskel unbekannt: " + m)
    if (!Array.isArray(u.geraete) || !u.geraete.length) w("geraete fehlen (ohne Gerät: [[]])")
    for (const g of u.geraete || []) {
      if (!Array.isArray(g)) w("geraete muss Liste von Listen sein")
      else for (const x of g) if (!(GERAETE_IDS as readonly string[]).includes(x)) w("Gerät unbekannt: " + x)
      if (u.belastung === "gewicht" && Array.isArray(g) && !g.some((x) => LAST.includes(x))) w("belastung gewicht: jede Gerätegruppe braucht ein Lastgerät (" + LAST.join(", ") + ")")
    }
    if (!["gewicht", "wiederholungen", "zeit", "distanz"].includes(u.belastung)) w("belastung unbekannt")
    if (u.art === "mobilitaet" && u.belastung !== "zeit" && u.belastung !== "wiederholungen") w("Mobilität: belastung zeit oder wiederholungen")
    if (u.art === "ausdauer" && u.belastung !== "zeit") w("Ausdauer: belastung zeit")
    if (typeof u.hoehe_cm !== "number" || u.hoehe_cm < 0 || u.hoehe_cm > 500) w("hoehe_cm 0 bis 500")
    for (const k of Object.keys(u.gelenke || {})) if (!GELENKE.includes(k)) w("Gelenk unbekannt: " + k)
    for (const v of Object.values(u.gelenke || {})) if (v !== 1 && v !== 2) w("Gelenkbelastung 1 oder 2")
    if (![1, 2, 3].includes(u.stufe)) w("stufe 1 bis 3")
    if (u.golf !== undefined && ![1, 2, 3].includes(u.golf)) w("golf 1 bis 3")
    const i = u.info
    if (!i) {
      w("info fehlt")
      continue
    }
    if (!i.kurz || i.kurz.length < 40) w("info.kurz zu kurz")
    if (!Array.isArray(i.ausfuehrung) || i.ausfuehrung.length < 4) w("info.ausfuehrung: mindestens 4 Schritte")
    for (const s of i.ausfuehrung || []) if (s.length < 25) w("Ausführungsschritt zu kurz: " + s)
    if (!i.atmung || i.atmung.length < 20) w("info.atmung fehlt")
    if (!Array.isArray(i.fehler) || i.fehler.length < 3) w("info.fehler: mindestens 3")
    if (!Array.isArray(i.vorteile) || i.vorteile.length < 3) w("info.vorteile: mindestens 3")
    if (!Array.isArray(i.tipps) || i.tipps.length < 2) w("info.tipps: mindestens 2")
    if ((u.golf || 0) >= 2 && (!i.golf || i.golf.length < 30)) w("golf >= 2 braucht info.golf")
    for (const t of texte(u)) {
      if (/[—–]/.test(t)) w("Gedankenstrich (— oder –) nicht erlaubt: " + t.slice(0, 60))
      if (/\b(ae|oe|ue)\b/.test(t)) w("Umlaute ausschreiben")
    }
  }
  return f
}
