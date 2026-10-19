// Daten bleiben auf dem Gerät (localStorage der App). Export und Import als JSON-Datei für Sicherung und Gerätewechsel.

import { LEER } from "./gewichte"
import { GERAETE_IDS, type Daten, type Geraet, type Ort, type Profil, type Spielstand, type Wochentag } from "./typen"

const SCHLUESSEL = "trainme.daten"

export function leer(): Daten {
  return { version: 1, profil: null, protokoll: [], erledigt: [], spiel: neuesSpiel(), messungen: [] }
}

export function neuesSpiel(): Spielstand {
  return { xp: 0, abzeichen: {}, muenzen: 0, inventar: {}, ausgeruestet: {}, level: 1, kisten: [], zyklus: 0, saat: Math.floor(Math.random() * 2 ** 31) }
}

export function laden(speicher: Pick<Storage, "getItem"> | null = typeof localStorage !== "undefined" ? localStorage : null): Daten {
  try {
    const roh = speicher ? speicher.getItem(SCHLUESSEL) : null
    return roh ? pruefen(JSON.parse(roh)) : leer()
  } catch {
    return leer()
  }
}

export function speichern(d: Daten, speicher: Pick<Storage, "setItem"> | null = typeof localStorage !== "undefined" ? localStorage : null): void {
  if (speicher) speicher.setItem(SCHLUESSEL, JSON.stringify(d))
}

/** Prüft und vervollständigt importierte Daten. Wirft bei unbrauchbaren Dateien. */
export function pruefen(x: unknown): Daten {
  if (!x || typeof x !== "object") throw new Error("Keine TrainMe-Datei")
  const o = x as Partial<Daten>
  if (o.version !== 1) throw new Error("Unbekannte Version")
  const d = leer()
  d.profil = o.profil ? vervollstaendigen(o.profil) : null
  d.protokoll = Array.isArray(o.protokoll) ? o.protokoll.filter((p) => p && typeof p.uebung === "string" && typeof p.datum === "string" && Array.isArray(p.saetze)) : []
  d.erledigt = Array.isArray(o.erledigt) ? o.erledigt.filter((e) => e && typeof e.datum === "string") : []
  d.spiel = { ...neuesSpiel(), ...(o.spiel || {}), xp: Number(o.spiel?.xp) || 0, abzeichen: o.spiel && typeof o.spiel.abzeichen === "object" ? { ...o.spiel.abzeichen } : {} }
  if (o.maxwerte && typeof o.maxwerte === "object") d.maxwerte = { ...o.maxwerte }
  if (o.einstufung && typeof o.einstufung === "object") d.einstufung = { ...o.einstufung }
  if (o.gesundheit && typeof o.gesundheit === "object") d.gesundheit = { verbunden: !!o.gesundheit.verbunden, tage: { ...(o.gesundheit.tage || {}) } }
  d.messungen = Array.isArray(o.messungen) ? o.messungen.filter((m) => m && typeof m.test === "string" && typeof m.wert === "number") : []
  return d
}

function vervollstaendigen(p: Profil): Profil {
  const basis = neuesProfil()
  const orte =
    Array.isArray(p.orte) && p.orte.length
      ? p.orte.map((o) => ({
          ...neuerOrt(o.name || "Ort"),
          ...o,
          geraete: Array.from(new Set((o.geraete || []).flatMap((g) => ALT[g as string] || [g]))).filter((g) => (GERAETE_IDS as readonly string[]).includes(g)) as Geraet[],
          gewichte: { ...LEER, ...(o.gewichte || {}) },
        }))
      : basis.orte
  const woche = Array.isArray(p.woche) && p.woche.length === 7 ? p.woche : basis.woche
  return { ...basis, ...p, orte, woche, beschwerden: p.beschwerden || [], ausgeschlossen: p.ausgeschlossen || [], arten: p.arten && p.arten.length ? p.arten : ["kraft"] }
}

export function exportieren(d: Daten): string {
  return JSON.stringify(d, null, 1)
}

export function importieren(text: string): Daten {
  return pruefen(JSON.parse(text))
}

export function neuerOrt(name: string): Ort {
  return { name, geraete: ["matte", "wand"], gewichte: { ...LEER, kurzhanteln: [], scheiben: [] }, deckenhoehe_cm: 250 }
}

const frei = (): Wochentag => ({ art: "frei" })

export function neuesProfil(start = new Date().toISOString().slice(0, 10)): Profil {
  return {
    name: "",
    ziel: "fitness",
    erfahrung: "einsteiger",
    sport: "allgemein",
    saison: "vorbereitung",
    arten: ["kraft"],
    woche: [
      { art: "training", ort: 0, minuten: 60, schwerpunkt: "automatisch" },
      frei(),
      { art: "training", ort: 0, minuten: 60, schwerpunkt: "automatisch" },
      frei(),
      { art: "training", ort: 0, minuten: 60, schwerpunkt: "automatisch" },
      frei(),
      frei(),
    ],
    orte: [neuerOrt("Zuhause")],
    beschwerden: [],
    ausgeschlossen: [],
    block_start: montag(start),
  }
}

function montag(datum: string): string {
  const d = new Date(datum + "T12:00:00Z")
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7))
  return d.toISOString().slice(0, 10)
}

/** Was ein durchschnittliches Fitnessstudio meist hat. In der Einrichtung einmal durchgehen und anpassen. */
export const STUDIO_GERAETE: Geraet[] = ["kurzhantel", "langhantel", "sz_stange", "kettlebell", "hantelscheibe", "medizinball", "bank", "scottbank", "rack", "klimmzugstange", "dip_station", "multipresse", "kabelzug", "kabelturm", "latzug", "kabelrudern", "beinpresse", "beinstrecker", "beinbeuger_liegend", "beinbeuger_sitzend", "ab_adduktoren", "wadenmaschine_stehend", "rueckenstrecker", "brustpresse", "butterfly", "schulterpresse", "rudermaschine", "bauchmaschine", "dip_assistent", "band", "mini_band", "gymnastikball", "box", "matte", "faszienrolle", "stab", "wand", "laufband", "fahrrad", "rudergeraet"]

/** Alte Sammelbegriffe aus Version 0.2 in einzelne Maschinen übersetzen. */
const ALT: Record<string, Geraet[]> = {
  maschine_beine: ["beinpresse", "beinstrecker", "beinbeuger_liegend", "beinbeuger_sitzend", "ab_adduktoren", "wadenmaschine_stehend", "rueckenstrecker"],
  maschine_oberkoerper: ["brustpresse", "butterfly", "schulterpresse", "rudermaschine", "latzug", "kabelrudern", "bauchmaschine", "dip_assistent"],
}

/** Typisches Fitnessstudio. */
export function studio(): Ort {
  return {
    name: "Studio",
    geraete: [...STUDIO_GERAETE],
    gewichte: { kurzhanteln: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], stange: 20, sz_stange: 10, trap_bar: 0, multipresse_stange: 15, scheiben: [1.25, 2.5, 5, 10, 10, 15, 20, 20, 25], kettlebells: [8, 12, 16, 20, 24, 28, 32], medizinbaelle: [3, 5, 7], maschine_schritt: 5, maschine_max: 150, baender: 3 },
    deckenhoehe_cm: 400,
  }
}

/** Beispiel aus der Anfrage: Golfer, 5 × 1 Stunde Studio und einmal Dehnen im Keller, kein Ausdauertraining. */
export function beispielGolf(start: string): Profil {
  const p = neuesProfil(start)
  const studioTag: Wochentag = { art: "training", ort: 0, minuten: 60, schwerpunkt: "kraft" }
  return {
    ...p,
    name: "Golfer",
    ziel: "sport",
    erfahrung: "fortgeschritten",
    sport: "golf",
    saison: "vorbereitung",
    arten: ["kraft", "mobilitaet"],
    woche: [studioTag, studioTag, studioTag, studioTag, studioTag, { art: "training", ort: 1, minuten: 40, schwerpunkt: "mobilitaet" }, { art: "sporttermin", termin: "runde" }],
    orte: [studio(), { name: "Keller", geraete: ["matte", "wand", "band", "mini_band", "stab", "golfschlaeger", "faszienrolle"], gewichte: { ...LEER, baender: 2 }, deckenhoehe_cm: 205 }],
  }
}

/** Beispiel: Fußballer mit 2 × Mannschaftstraining, Spiel am Samstag und 3 zusätzlichen Einheiten. */
export function beispielFussball(start: string): Profil {
  const p = neuesProfil(start)
  const extra: Wochentag = { art: "training", ort: 0, minuten: 60, schwerpunkt: "automatisch" }
  return {
    ...p,
    name: "Fußballer",
    ziel: "sport",
    erfahrung: "fortgeschritten",
    sport: "fussball",
    saison: "wettkampf",
    arten: ["kraft", "mobilitaet", "ausdauer"],
    woche: [extra, { art: "sporttermin", termin: "mannschaftstraining" }, extra, { art: "sporttermin", termin: "mannschaftstraining" }, extra, { art: "sporttermin", termin: "spiel" }, frei()],
    orte: [studio()],
  }
}
