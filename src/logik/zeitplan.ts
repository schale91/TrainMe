// Trainingszeit: Die Einheit läuft vom Knopf „Training starten“ bis „Training beenden“, Aufwärmen und Aufräumen
// eingeschlossen. Jeder abgehakte Satz bekommt einen Zeitstempel. Daraus wird gemessen, wie lange ein Satz samt
// Pause wirklich dauert, und vorhergesagt, wann die Einheit fertig ist. Passt das nicht ins Zeitbudget des Tages,
// werden zuerst die Pausen der Ergänzungsübungen kürzer (die Hauptübungen behalten ihre Pause); reicht das nicht,
// schlägt die App vor, optionale Übungen und je einen Satz der Ergänzungen wegzulassen.

import type { Daten, Platz, Profil } from "./typen"

/** Minuten für Abschluss und Aufräumen nach dem letzten Satz */
export const AUFRAEUMEN_MIN = 3
/** kürzeste Pause, auf die Ergänzungsübungen verkürzt werden (Sekunden) */
export const PAUSE_MIN_S = 60
/** längste Pause der Ergänzungsübungen nach dem Kürzen (Sekunden) */
export const PAUSE_KURZ_S = 90

/** Abstände unter 15 Sekunden sind nachträglich abgehakt, keine echten Sätze hintereinander: zählen nicht */
export const NACHTRAG_MIN = 0.25

interface MitZeit {
  fertig: boolean
  um?: number
}

/** Sekunden je Scheibe auflegen oder abnehmen (greifen, aufschieben, Verschluss) */
export const SCHEIBE_S = 8
/**
 * Auf- und Abbauen einer Übung in Minuten: an der Stange (Langhantel, SZ, Trap Bar) eine halbe Minute für Stange,
 * Verschlüsse und Platz und je Scheibe zweimal (auf und ab) auf beiden Seiten; sonst kurzes Umstellen (Hanteln
 * holen, Kabel umhängen). scheibenJeSeite: Scheiben für den schwersten Satz, null ohne Stange.
 */
export function umbauMin(scheibenJeSeite: number | null): number {
  if (scheibenJeSeite === null) return 0.3
  return 0.5 + (scheibenJeSeite * 2 * 2 * SCHEIBE_S) / 60
}

/** Arbeit je Satz in Sekunden: etwa 40, einseitig beide Seiten nacheinander (doppelt), außer beide gleichzeitig */
const arbeitS = (p: { uebung?: { einseitig?: boolean; id?: string; name?: string }; gleichzeitig?: boolean }) => (p.uebung?.einseitig && !p.gleichzeitig ? 80 : 40)

/** Geplante Dauer eines Satzes samt Pause in Minuten (etwa 40 Sekunden Arbeit, einseitig je Seite) */
export const satzMin = (p: Pick<Platz, "vorgabe"> & { uebung?: { einseitig?: boolean; id?: string; name?: string }; gleichzeitig?: boolean }) => (arbeitS(p) + p.vorgabe.pause_s) / 60

/** Sekunden für den Wechsel zwischen den Übungen eines Supersatzes (ohne Pause, nur hinübergehen) */
export const SUPERSATZ_WECHSEL_S = 20

type MitGruppe = Pick<Platz, "vorgabe"> & { gruppe?: string; uebung?: { einseitig?: boolean; id?: string; name?: string }; gleichzeitig?: boolean }

/**
 * Dauer eines Satzes samt Pause je Platz in Minuten. Im Supersatz folgt die nächste Übung der Gruppe ohne Pause
 * (nur der kurze Wechsel), die Pause kommt nach der letzten Übung der Gruppe.
 */
export function satzMinuten(plaetze: MitGruppe[]): number[] {
  return plaetze.map((p, i) => {
    if (!p.gruppe) return satzMin(p)
    const gruppe = plaetze.map((x, k) => (x.gruppe === p.gruppe ? k : -1)).filter((k) => k >= 0)
    if (gruppe.length < 2) return satzMin(p)
    return gruppe[gruppe.length - 1] === i ? satzMin(p) : (arbeitS(p) + SUPERSATZ_WECHSEL_S) / 60
  })
}

/** Zeitbudget des Tages: die Minuten des Trainingstags im Wochenplan, sonst die geschätzte Dauer der Einheit */
export function zeitBudget(profil: Pick<Profil, "woche">, datum: string, sonst: number): number {
  const tag = profil.woche[(new Date(datum + "T12:00:00Z").getUTCDay() + 6) % 7]
  return tag && tag.art === "training" && tag.minuten && tag.minuten > 0 ? tag.minuten : sonst
}

/**
 * Geschätzte Dauer der ganzen Einheit nach Plan in Minuten: Arbeitssätze mit Pause, Aufräumen und extra (Minuten für
 * Aufwärmsätze, in der Reha ein allgemeines Aufwärmen). Ohne extra wie die Anzeige in der Wochenübersicht (8 min).
 */
export function schaetzung(plaetze: MitGruppe[], saetze: unknown[][], extra?: number): number {
  const m = satzMinuten(plaetze)
  return Math.round((extra === undefined ? 8 : AUFRAEUMEN_MIN + extra) + plaetze.reduce((s, p, i) => s + (saetze[i]?.length ?? p.vorgabe.saetze) * m[i], 0))
}

const median = (x: number[]) => {
  if (!x.length) return NaN
  const s = [...x].sort((a, b) => a - b)
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2
}

/** Aus früheren Einheiten gelernt: tatsächliche Dauer geteilt durch die Schätzung (Median der letzten sechs) */
export function lernFaktor(daten: Pick<Daten, "erledigt">): number {
  const r = daten.erledigt
    .filter((e) => e.dauer_min && e.geschaetzt_min)
    .slice(-6)
    .map((e) => (e.dauer_min as number) / (e.geschaetzt_min as number))
  const m = median(r)
  return Number.isFinite(m) ? Math.min(1.6, Math.max(0.6, m)) : 1
}

/**
 * Heute gemessen: Zeit zwischen zwei Sätzen derselben Übung im Verhältnis zur geplanten Dauer (ab drei Messungen;
 * Wechsel zwischen Übungen zählen nicht, die deckt die Umbauzeit ab; Abstände über zehn Minuten zählen nicht). Im
 * Supersatz ist eine Runde aller Übungen der Gruppe geplant. Ohne genug Messungen der gelernte Faktor.
 */
export function heuteFaktor(plaetze: MitGruppe[], saetze: MitZeit[][], gelernt = 1): number {
  let ist = 0, plan = 0, n = 0
  const m = satzMinuten(plaetze)
  plaetze.forEach((p, i) => {
    const runde = p.gruppe ? plaetze.reduce((s, x, k) => s + (x.gruppe === p.gruppe ? m[k] : 0), 0) : m[i]
    const um = saetze[i].filter((s) => s.fertig && s.um !== undefined).map((s) => s.um as number).sort((a, b) => a - b)
    for (let k = 1; k < um.length; k++) {
      const d = (um[k] - um[k - 1]) / 60000
      if (d < NACHTRAG_MIN || d > 10) continue
      ist += d
      plan += runde
      n++
    }
  })
  return n >= 3 && plan > 0 ? Math.min(1.8, Math.max(0.5, ist / plan)) : gelernt
}

/** Vorhersage in Minuten: schon vergangen, noch offen (Sätze mal Faktor plus Aufräumen), zusammen */
export function prognose(beginn: number, jetzt: number, plaetze: MitGruppe[], saetze: MitZeit[][], faktor: number): { vergangen: number; offen: number; gesamt: number } {
  const vergangen = Math.max(0, (jetzt - beginn) / 60000)
  const m = satzMinuten(plaetze)
  const offen = plaetze.reduce((s, _p, i) => s + saetze[i].filter((x) => !x.fertig).length * m[i], 0) * faktor + AUFRAEUMEN_MIN
  return { vergangen, offen, gesamt: vergangen + offen }
}

/** Pausen der Ergänzungsübungen kürzen (Hauptübungen bleiben). Gibt die neuen Plätze und die gekürzten Übungen zurück. */
export function pausenKuerzen<P extends Pick<Platz, "vorgabe" | "rolle"> & { uebung: { name: string } }>(plaetze: P[]): { plaetze: P[]; gekuerzt: string[] } {
  const gekuerzt: string[] = []
  const neu = plaetze.map((p) => {
    if (p.rolle === "haupt" || p.vorgabe.pause_s <= PAUSE_KURZ_S) return p
    gekuerzt.push(p.uebung.name)
    return { ...p, vorgabe: { ...p.vorgabe, pause_s: Math.max(PAUSE_MIN_S, Math.min(PAUSE_KURZ_S, Math.round(p.vorgabe.pause_s * 0.6))) } }
  })
  return { plaetze: neu, gekuerzt }
}

/** Vorschlag, wenn auch kürzere Pausen nicht reichen: optionale Übungen ganz und je ein offener Satz der Ergänzungen mit mindestens drei Sätzen */
export function weglassenVorschlag(plaetze: (Pick<Platz, "rolle"> & { uebung: { name: string } })[], saetze: MitZeit[][]): { ganz: number[]; einSatz: number[] } {
  const ganz: number[] = [], einSatz: number[] = []
  plaetze.forEach((p, i) => {
    const offen = saetze[i].filter((s) => !s.fertig).length
    if (!offen || p.rolle === "haupt") return
    if (/optional/i.test(p.uebung.name)) ganz.push(i)
    else if (saetze[i].length >= 3) einSatz.push(i)
  })
  return { ganz, einSatz }
}

/** Pausen der Hauptübungen deutlich kürzer als geplant? (Median der Abstände unter 60 % der geplanten Dauer) */
export function hauptPausenZuKurz(plaetze: (Pick<Platz, "vorgabe" | "rolle"> & { uebung?: { einseitig?: boolean; id?: string; name?: string } })[], saetze: MitZeit[][]): boolean {
  const r: number[] = []
  plaetze.forEach((p, i) => {
    if (p.rolle !== "haupt") return
    const um = saetze[i].filter((s) => s.fertig && s.um !== undefined).map((s) => s.um as number).sort((a, b) => a - b)
    for (let k = 1; k < um.length; k++) if ((um[k] - um[k - 1]) / 60000 >= NACHTRAG_MIN) r.push((um[k] - um[k - 1]) / 60000 / satzMin(p))
  })
  return r.length >= 2 && median(r) < 0.6
}

type FuerSupersatz = Pick<Platz, "vorgabe" | "rolle"> & { gruppe?: string; uebung: { muskeln: string[]; sekundaer?: string[]; art?: string } }

/** Geräte, von denen es mehrere gibt (Hantelständer, Bänder): zwei Übungen damit gehen im Wechsel */
const MEHRFACH = new Set(["kurzhantel", "kettlebell", "hantelscheibe", "band", "medizinball"])

/** Muskeln zu Muskelgruppen zusammengefasst: Latzug und Rudern sind beide Rücken, auch wenn die Hauptmuskeln verschieden heißen */
const REGION: Record<string, string> = {
  schulter_vorn: "schulter",
  schulter_seitlich: "schulter",
  schulter_hinten: "schulter",
  rotatorenmanschette: "schulter",
  latissimus: "ruecken",
  oberer_ruecken: "ruecken",
  trapez: "ruecken",
  nacken: "ruecken",
  bizeps: "armbeuger",
  unterarm: "armbeuger",
  bauch: "rumpf",
  schraege_bauch: "rumpf",
  hueftbeuger: "rumpf",
  gesaess: "beinrueckseite",
  gesaess_mittel: "beinrueckseite",
  beinbeuger: "beinrueckseite",
  quadrizeps: "beinvorderseite",
  adduktoren: "beinvorderseite",
  waden: "unterschenkel",
  schienbein: "unterschenkel",
}

/** Rollen, die sich für einen Supersatz zum Zeitsparen eignen (Hauptübungen behalten ihre volle Pause) */
const SUPERSATZ_ROLLEN = new Set(["neben", "isolation", "praevention"])

/**
 * Supersatz zum Zeitsparen: zwei aufeinanderfolgende Ergänzungsübungen, die verschiedene Muskelgruppen beanspruchen
 * (keine Hauptmuskelgruppe der einen ist Haupt- oder Hilfsmuskelgruppe der anderen), abwechselnd mit einer Pause je Runde.
 * Agonist und Antagonist im Wechsel erhalten die Leistung (Robbins et al. 2010; Paz et al. 2017) und sparen etwa die
 * Hälfte der Zeit (Weakley et al. 2017). Nicht mit demselben Gerät (eine Stange, ein Kabelzug), sonst wird ständig
 * umgebaut. geraet: das Lastgerät je Platz. Gibt Paare zurück, bis die Ersparnis fehlt_min erreicht; Paare in
 * ausgenommen („i-j“) wurden schon gefragt.
 */
export function supersatzVorschlag(plaetze: FuerSupersatz[], saetze: MitZeit[][], geraet: (string | null)[], fehlt_min: number, ausgenommen: string[] = []): { paare: [number, number][]; spart_min: number } {
  const paare: [number, number][] = []
  let spart = 0
  const geeignet = (i: number) => !plaetze[i].gruppe && SUPERSATZ_ROLLEN.has(plaetze[i].rolle) && plaetze[i].uebung.art !== "mobilitaet" && saetze[i].some((s) => !s.fertig)
  const getrennt = (a: FuerSupersatz["uebung"], b: FuerSupersatz["uebung"]) => {
    const r = (m: string[]) => m.map((x) => REGION[x] ?? x)
    // Ohne bekannte Muskeln (frei eingetragene Übung) lässt sich nichts sicher sagen
    if (!a.muskeln.length || !b.muskeln.length) return false
    if ([...a.muskeln, ...b.muskeln].some((m) => m === "ganzkoerper" || m === "herz_kreislauf")) return false
    const alleB = new Set(r([...b.muskeln, ...(b.sekundaer || [])]))
    const alleA = new Set(r([...a.muskeln, ...(a.sekundaer || [])]))
    return !r(a.muskeln).some((m) => alleB.has(m)) && !r(b.muskeln).some((m) => alleA.has(m))
  }
  for (let i = 0; i + 1 < plaetze.length && spart < fehlt_min; i++) {
    const j = i + 1
    if (ausgenommen.indexOf(i + "-" + j) >= 0 || !geeignet(i) || !geeignet(j) || !getrennt(plaetze[i].uebung, plaetze[j].uebung)) continue
    if (geraet[i] && geraet[i] === geraet[j] && !MEHRFACH.has(geraet[i] as string)) continue
    const runden = Math.min(saetze[i].filter((s) => !s.fertig).length, saetze[j].filter((s) => !s.fertig).length)
    const s = (runden * (Math.min(plaetze[i].vorgabe.pause_s, plaetze[j].vorgabe.pause_s) - SUPERSATZ_WECHSEL_S)) / 60
    if (s < 1) continue
    paare.push([i, j])
    spart += s
    i++
  }
  return { paare, spart_min: Math.round(spart) }
}

/**
 * Einseitige Übung einmalig beidseitig, wenn die Zeit knapp wird: beide Seiten in einem Satz statt nacheinander spart
 * je Satz etwa die Arbeitszeit einer Seite. art: wie sich das Gewicht umrechnet.
 * - stapel: eine Last für beide Seiten (Kabel, Maschine, Stange): etwa doppelt so viel, abzüglich des bilateralen
 *   Defizits (beidseitig gleichzeitig bringt jede Seite etwas weniger Kraft auf als allein, Übersicht: Škarabot et al.
 *   2016, Eur J Appl Physiol), also gut 1,8-fach.
 * - jeHand: je Hand eine Hantel bzw. ein Griff wie vorher, wegen des Defizits etwa 10 % weniger.
 * - gleich: dasselbe Gerät mit gleicher Last (Band, Kettlebell).
 * - ohne: Körpergewicht, nichts umzurechnen.
 * - gleichzeitig: dieselbe Übung mit beiden Seiten zugleich (zwei Kabel am Turm, zwei Hanteln), je Seite die Last wie vorher.
 */
export type BeidseitigArt = "stapel" | "jeHand" | "gleich" | "ohne" | "gleichzeitig"
export const BEIDSEITIG: Record<string, { ids: string[]; art: BeidseitigArt; geraet?: string }> = {
  latzug_einarmig: { ids: ["latzug"], art: "stapel" },
  latzug_kniend_einarmig: { ids: ["latzug_kniend"], art: "stapel" },
  rudern_kabel_einarmig: { ids: ["rudern_kabel"], art: "stapel" },
  trizeps_kabel_einarmig: { ids: ["trizeps_kabel"], art: "stapel" },
  trizeps_ueberkopf_kabel_einarmig: { ids: ["trizeps_ueberkopf_seil"], art: "stapel" },
  trizeps_ueberkopf_kh_einarmig: { ids: ["trizeps_ueberkopf"], art: "stapel" },
  kabel_curl_einarmig: { ids: ["kabel_curl_sz"], art: "stapel" },
  scottcurl_kh: { ids: ["scottcurl_sz"], art: "stapel" },
  brustpresse_einarmig: { ids: ["brustpresse"], art: "stapel" },
  butterfly_einarmig: { ids: ["butterfly_maschine"], art: "stapel" },
  beinpresse_einbeinig: { ids: ["beinpresse"], art: "stapel" },
  beinstrecker_einbeinig: { ids: ["beinstrecker"], art: "stapel" },
  rudern_kh: { ids: ["rudern_kh_brust", "rudern_kh_vorgebeugt"], art: "jeHand" },
  rudern_kh_schwer: { ids: ["rudern_kh_brust", "rudern_kh_vorgebeugt"], art: "jeHand" },
  rudern_kh_brust_einarmig: { ids: ["rudern_kh_brust"], art: "jeHand" },
  floor_press_kh_einarmig: { ids: ["floor_press_kh"], art: "jeHand" },
  schraegbankdruecken_kh_einarmig: { ids: ["schraegbankdruecken_kh"], art: "jeHand" },
  kh_bankdruecken_einarmig: { ids: ["bankdruecken_kh"], art: "jeHand" },
  schulterdruecken_kh_einarmig: { ids: ["schulterdruecken_kh_stehend"], art: "jeHand" },
  reverse_flye_kabel_einarmig: { ids: ["reverse_flye_kabel"], art: "jeHand" },
  kabel_flys_einarmig: { ids: ["kabel_flys_mitte"], art: "jeHand" },
  seitheben_kabel_einarmig: { ids: ["seitheben_kabel_beidarmig"], art: "jeHand" },
  rudern_band_einarmig: { ids: ["rudern_band"], art: "gleich" },
  kb_swing_einarmig: { ids: ["kb_swing"], art: "gleich" },
  rudern_schlingentrainer_einarmig: { ids: ["rudern_schlingentrainer"], art: "ohne" },
  glute_bridge_einbeinig: { ids: ["glute_bridge"], art: "ohne" },
  beinbeuger_rutschen_einbeinig: { ids: ["beinbeuger_rutschen"], art: "ohne" },
  beinbeuger_gymnastikball_einbeinig: { ids: ["beinbeuger_gymnastikball"], art: "ohne" },
  // beide Seiten zugleich: an zwei Kabeln (Kabelturm) oder mit zwei Hanteln
  bayesian_curl: { ids: [], art: "gleichzeitig", geraet: "kabelturm" },
  trizeps_kickback_kabel: { ids: [], art: "gleichzeitig", geraet: "kabelturm" },
  seitheben_lean_away_kabel: { ids: [], art: "gleichzeitig", geraet: "kabelturm" },
  trizeps_kickback_kh: { ids: [], art: "gleichzeitig" },
  hammercurl_kreuz: { ids: [], art: "gleichzeitig" },
}

/** Bilaterales Defizit: beidseitig gleichzeitig etwa 90 % der Summe beider Seiten allein */
export const BILATERAL = 0.9

/** Last nach dem Wechsel auf beidseitig (vor dem Runden auf vorhandene Gewichte) */
export function beidseitigLast(last: number | null | undefined, art: BeidseitigArt): number | null {
  if (last == null || art === "ohne") return last ?? null
  if (art === "stapel") return last * 2 * BILATERAL
  if (art === "jeHand") return last * BILATERAL
  return last
}

/**
 * Vorschlag bei knapper Zeit: noch nicht begonnene einseitige Übungen einmalig beidseitig. finde: die Übung, wenn sie
 * erlaubt und am Ort machbar ist; geraetDa: ob ein Gerät am Ort steht. Gibt die Tausche zurück, bis fehlt_min erreicht
 * ist; Plätze in ausgenommen wurden schon gefragt.
 */
export function beidseitigVorschlag<U extends { id: string; einseitig?: boolean }>(
  plaetze: { uebung: U; gleichzeitig?: boolean; rolle: string }[],
  saetze: MitZeit[][],
  finde: (id: string) => U | undefined,
  geraetDa: (g: string) => boolean,
  fehlt_min: number,
  ausgenommen: number[] = [],
): { tausch: { i: number; ersatz: U | null; art: BeidseitigArt }[]; spart_min: number } {
  const tausch: { i: number; ersatz: U | null; art: BeidseitigArt }[] = []
  let spart = 0
  for (let i = 0; i < plaetze.length && spart < fehlt_min; i++) {
    const p = plaetze[i]
    const b = BEIDSEITIG[p.uebung.id]
    if (!b || !p.uebung.einseitig || p.gleichzeitig || ausgenommen.indexOf(i) >= 0) continue
    const offen = saetze[i].filter((s) => !s.fertig).length
    if (!offen || saetze[i].some((s) => s.fertig)) continue
    let ersatz: U | null = null
    if (b.art === "gleichzeitig") {
      if (b.geraet && !geraetDa(b.geraet)) continue
    } else {
      ersatz = b.ids.map(finde).find((u): u is U => !!u && !u.einseitig) ?? null
      if (!ersatz) continue
    }
    tausch.push({ i, ersatz, art: b.art })
    // je Satz entfällt die Arbeit einer Seite (etwa 40 s)
    spart += (offen * 40) / 60
  }
  return { tausch, spart_min: Math.round(spart) }
}

/** Freier Buchstabe für eine neue Supersatz-Gruppe (A, B, …), der im Plan noch nicht vorkommt */
export function freieGruppe(plaetze: { gruppe?: string }[], schon: string[] = []): string {
  const belegt = new Set([...plaetze.map((p) => p.gruppe).filter(Boolean), ...schon])
  for (const b of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") if (!belegt.has(b)) return b
  return "S" + belegt.size
}

/** Die vier großen Langhantelübungen samt Varianten: Kniebeuge, Bankdrücken, Überkopfdrücken, Kreuzheben */
export type GrosseVier = "kniebeuge" | "bank" | "ueberkopf" | "kreuzheben"
export function grosseVier(u: { id: string; name: string; muster: string }, geraet: string | null): GrosseVier | null {
  if (geraet !== "langhantel" && geraet !== "trap_bar") return null
  if (u.muster === "hueftstreckung" && /kreuzheben|rdl|rack_pull|deadlift/i.test(u.id + " " + u.name)) return "kreuzheben"
  if (geraet !== "langhantel") return null
  if (u.muster === "kniebeuge") return "kniebeuge"
  if (u.muster === "druecken_horizontal") return "bank"
  if (u.muster === "druecken_vertikal") return "ueberkopf"
  return null
}

/** Grundzeit eines Übungswechsels ohne Aufwärmen und Umbau: hingehen, einstellen, Pause vor dem ersten Satz */
export const WECHSEL_MIN = 1.5
/** Minuten je Aufwärmsatz samt kurzer Pause */
export const AUFWAERM_MIN = 1.5

/**
 * Aus früheren Einheiten gelernt, getrennt nach dem, was wirklich verschieden ist: das Tempo von Satz zu Satz
 * (gemessen gegen die geplante Pause), die Wechsel zwischen den Übungen (samt Aufwärmen und Umbau, gegen die
 * Schätzung) und die Minuten vom letzten Satz bis „Training beenden“ (Aufräumen).
 */
export interface Gelernt {
  tempo: number
  wechsel: number
  abschluss: number
}
export const GELERNT_START: Gelernt = { tempo: 1, wechsel: 1, abschluss: AUFRAEUMEN_MIN }

/** Median der letzten sechs gemessenen Einheiten, sonst die Startwerte */
export function gelerntAus(daten: Pick<Daten, "erledigt">): Gelernt {
  const letzte = (k: "tempo" | "wechsel" | "abschluss_min") => daten.erledigt.map((e) => e[k]).filter((x): x is number => typeof x === "number" && Number.isFinite(x)).slice(-6)
  const m = (k: "tempo" | "wechsel" | "abschluss_min", sonst: number, von: number, bis: number) => {
    const x = median(letzte(k))
    return Number.isFinite(x) ? Math.min(bis, Math.max(von, x)) : sonst
  }
  return { tempo: m("tempo", 1, 0.6, 1.6), wechsel: m("wechsel", 1, 0.3, 2), abschluss: m("abschluss_min", AUFRAEUMEN_MIN, 0, 10) }
}

/** Blöcke in der Reihenfolge des Plans: eine Übung allein oder alle Übungen eines Supersatzes zusammen */
export function bloecke(plaetze: { gruppe?: string }[]): number[][] {
  const aus: number[][] = []
  const gesehen = new Set<string>()
  plaetze.forEach((p, i) => {
    if (!p.gruppe) return void aus.push([i])
    if (gesehen.has(p.gruppe)) return
    gesehen.add(p.gruppe)
    aus.push(plaetze.map((x, k) => (x.gruppe === p.gruppe ? k : -1)).filter((k) => k >= 0))
  })
  return aus
}

/**
 * Restdauer in Minuten (vor dem Start: die ganze Einheit). Je Block, der noch nicht begonnen hat, ein Wechsel bis
 * zum ersten Satz (Grundzeit, Aufwärmsätze und Umbau, mal dem gelernten Wechselfaktor); dann die übrigen Sätze samt
 * Pause davor mal dem Tempo; die Pause nach dem letzten Satz steckt im nächsten Wechsel; am Ende der Abschluss. warm: offene Aufwärmsätze je Übung,
 * umbau: Minuten Auf- und Abbau je Übung (bei begonnenen nur noch das Abbauen).
 */
export function restDauer(plaetze: MitGruppe[], saetze: MitZeit[][], l: Gelernt, warm: number[], umbau: number[], tempo = l.tempo): number {
  const m = satzMinuten(plaetze)
  let t = 0
  for (const b of bloecke(plaetze)) {
    const offen = b.reduce((n, i) => n + saetze[i].filter((x) => !x.fertig).length, 0)
    const begonnen = b.some((i) => saetze[i].some((x) => x.fertig))
    if (!offen) continue
    // Der Wechsel reicht bis zum ersten abgehakten Satz des Blocks (samt dessen Arbeit); danach je Satz Pause und
    // Arbeit. Bei begonnenen Blöcken zählt nur noch das Abbauen.
    const saetzeZeit = b.reduce((n, i) => n + saetze[i].filter((x) => !x.fertig).length * m[i], 0)
    if (!begonnen) t += (WECHSEL_MIN + b.reduce((n, i) => n + (warm[i] || 0) * AUFWAERM_MIN + (umbau[i] || 0), 0)) * l.wechsel + (saetzeZeit - m[b[b.length - 1]]) * tempo
    else t += b.reduce((n, i) => n + (umbau[i] || 0), 0) * l.wechsel + saetzeZeit * tempo
  }
  return t + l.abschluss
}

/**
 * Messwerte einer fertigen Einheit zum Lernen: Tempo (ab drei Messungen), Wechselfaktor (tatsächlicher Wechsel bis
 * zum ersten Satz eines Blocks gegen die Schätzung, ab zwei Wechseln) und Minuten vom letzten Satz bis zum Ende.
 * warm: geplante Aufwärmsätze je Übung, umbau: Minuten Auf- und Abbau je Übung.
 */
export function messen(plaetze: MitGruppe[], saetze: MitZeit[][], beginn: number, ende: number, warm: number[], umbau: number[]): { tempo?: number; wechsel?: number; abschluss_min?: number } {
  const aus: { tempo?: number; wechsel?: number; abschluss_min?: number } = {}
  const t = heuteFaktor(plaetze, saetze, NaN)
  if (Number.isFinite(t)) aus.tempo = Math.round(t * 100) / 100
  const zeiten = (b: number[]) => b.flatMap((i) => saetze[i].filter((x) => x.fertig && x.um !== undefined).map((x) => x.um as number))
  const reihe = bloecke(plaetze)
    .map((b) => ({ b, z: zeiten(b) }))
    .filter((x) => x.z.length)
    .sort((a, c) => Math.min(...a.z) - Math.min(...c.z))
  const r: number[] = []
  let vorher = beginn
  for (const { b, z } of reihe) {
    const ist = (Math.min(...z) - vorher) / 60000
    const plan = WECHSEL_MIN + b.reduce((n, i) => n + (warm[i] || 0) * AUFWAERM_MIN + (umbau[i] || 0), 0)
    if (ist > 0 && ist < 20) r.push(ist / plan)
    vorher = Math.max(...z)
  }
  if (r.length >= 2) aus.wechsel = Math.round(median(r) * 100) / 100
  if (reihe.length && ende >= vorher) aus.abschluss_min = Math.round(Math.min(15, (ende - vorher) / 60000) * 10) / 10
  return aus
}
