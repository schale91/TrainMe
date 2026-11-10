// TrainMe in der Lebenswelt: Abgleich mit der Datenbank, Übernahme aus dem Kraftbuch, eigener Plan.
import { abgleichen, feldSummen, neuerStand, pruefsumme, stabil, stammMischen, tagZusammen, teilen, zusammensetzen, type Anfrage, type TagEintrag } from "../src/logik/abgleich"
import { einspielen, nameKey, prozent, uebernehmen, wiederholungen, zuordnen, type KbDok } from "../src/logik/kraftbuch"
import { einheitAusPlan, idVon, maximum, naechsterPlanTag, offenePlanTage, planAusText, planWoche, planZuEnde, planZuText, ueberspringen } from "../src/logik/eigenerPlan"
import { leer, neuesProfil, pruefen } from "../src/logik/speicher"
import { plusTage, wochenplan } from "../src/logik/plan"
import type { Daten, Protokoll } from "../src/logik/typen"

/** Kleiner Server nach den Regeln des Add-ons (trainme.js): Stamm neuere Zeit, Tage zusammenführen. */
function server() {
  let uhr = 0
  const db: { stamm: { zeit: number; daten: Record<string, unknown>; geaendert: number } | null; tage: Record<string, TagEintrag & { geaendert: number }> } = { stamm: null, tage: {} }
  let erreichbar = true
  const anfrage: Anfrage = async (m, pfad, koerper) => {
    if (!erreichbar) return { status: 0, daten: null }
    uhr++
    if (m === "GET") {
      const seit = Number(new URLSearchParams(pfad.split("?")[1] || "").get("seit") || 0)
      // wie bei der Datenbank: Objekte kommen in anderer Schlüsselreihenfolge zurück
      const dreh = (x: unknown) => JSON.parse(JSON.stringify(x, (_k, v) => (v && typeof v === "object" && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).reverse()) : v)))
      return {
        status: 200,
        daten: {
          jetzt: String(uhr),
          stamm: db.stamm && db.stamm.geaendert > seit ? dreh({ zeit: db.stamm.zeit, daten: db.stamm.daten }) : null,
          tage: Object.values(db.tage)
            .filter((t) => t.geaendert > seit)
            .map((t) => dreh({ tag: t.tag, zeit: t.zeit, protokoll: t.protokoll, erledigt: t.erledigt })),
          kraftbuch: false,
        },
      }
    }
    const k = koerper as { stamm?: { zeit: number; daten: Record<string, unknown> }; tage?: TagEintrag[] }
    const zurueck: { stamm: unknown; tage: TagEintrag[] } = { stamm: null, tage: [] }
    if (k.stamm) {
      if (db.stamm && db.stamm.zeit > k.stamm.zeit) zurueck.stamm = { zeit: db.stamm.zeit, daten: db.stamm.daten }
      else db.stamm = { ...k.stamm, geaendert: uhr }
    }
    for (const t of k.tage || []) {
      const alt = db.tage[t.tag] || null
      const z = tagZusammen(alt, t)
      db.tage[t.tag] = { ...z, geaendert: uhr }
      if (alt && (alt.zeit > t.zeit || z.protokoll.length !== t.protokoll.length || z.erledigt.length !== t.erledigt.length)) zurueck.tage.push(z)
    }
    return { status: 200, daten: { ok: true, zurueck } }
  }
  return { anfrage, db, aus: () => (erreichbar = false), an: () => (erreichbar = true) }
}

const satz = { last: 100, wdh: 5, rir: 2 }
const mitProfil = (): Daten => ({ ...leer(), profil: { ...neuesProfil("2026-10-19"), name: "Alex" } })

describe("Abgleich mit der Lebenswelt", () => {
  test("Gleicher Inhalt gibt gleiche Prüfsumme, egal in welcher Reihenfolge die Schlüssel stehen", () => {
    expect(stabil({ b: 1, a: [{ d: 2, c: 3 }] })).toBe(stabil({ a: [{ c: 3, d: 2 }], b: 1 }))
    expect(pruefsumme({ a: 1 })).not.toBe(pruefsumme({ a: 2 }))
  })

  test("Teilen und Zusammensetzen ergibt wieder dieselben Daten", () => {
    const d = mitProfil()
    d.protokoll.push({ datum: "2026-10-20", uebung: "x", saetze: [satz] })
    d.erledigt.push({ datum: "2026-10-20", titel: "Beine", minuten: 60, saetze: 1, xp: 0, rekorde: [] })
    const { stamm, tage } = teilen(d)
    expect(Object.keys(tage)).toEqual(["2026-10-20"])
    expect(stamm.protokoll).toBeUndefined()
    const z = zusammensetzen(stamm, tage)
    expect(z.protokoll).toEqual(d.protokoll)
    expect(z.profil?.name).toBe("Alex")
  })

  test("Zwei Geräte: Training auf dem Handy erscheint in der Lebenswelt und umgekehrt", async () => {
    const s = server()
    let handy = mitProfil()
    let hStand = neuerStand()
    let r = await abgleichen(s.anfrage, handy, hStand, 1000)
    hStand = r.stand
    expect(s.db.stamm?.daten.profil).toBeTruthy()

    // Lebenswelt startet leer und bekommt das Profil
    let lw = leer()
    let lStand = neuerStand()
    r = await abgleichen(s.anfrage, lw, lStand, 2000)
    lw = r.daten
    lStand = r.stand
    expect(r.neu).toBe(true)
    expect(lw.profil?.name).toBe("Alex")

    // Handy trainiert
    handy = structuredClone(handy)
    handy.protokoll.push({ datum: "2026-10-26", uebung: "kniebeuge", saetze: [satz] })
    r = await abgleichen(s.anfrage, handy, hStand, 3000)
    hStand = r.stand
    // Lebenswelt holt es
    r = await abgleichen(s.anfrage, lw, lStand, 4000)
    lw = r.daten
    lStand = r.stand
    expect(lw.protokoll.map((p) => p.uebung)).toEqual(["kniebeuge"])
    // Danach ist nichts mehr offen: der nächste Abgleich ändert nichts
    r = await abgleichen(s.anfrage, lw, lStand, 5000)
    expect(r.neu).toBe(false)
    const vorher = Object.keys(s.db.tage).length
    expect(vorher).toBe(1)
  })

  test("Stamm auf beiden Seiten geändert: je Feld gemischt, keine Seite überschreibt die andere", async () => {
    const s = server()
    let handy = mitProfil()
    let r = await abgleichen(s.anfrage, handy, neuerStand(), 1000)
    let hStand = r.stand
    // Woanders (z. B. direkt in der Datenbank) kommen feste Tausche und der Aufräum-Timer dazu
    const dort = structuredClone(s.db.stamm!.daten) as Record<string, Record<string, unknown>>
    dort.ersatz = { rudern_helms: "rudern_schlingentrainer" }
    dort.profil.aufraeumen_min = 5
    s.db.stamm = { zeit: 2000, daten: dort, geaendert: 99 }
    // Auf dem Handy wurde inzwischen trainiert: Erfahrungspunkte und eine Bandfarbe haben sich geändert
    handy = structuredClone(handy)
    handy.spiel.xp = 56
    handy.bandfarben = { band_pull_apart: "rot" }
    handy.profil!.name = "Alex S."
    r = await abgleichen(s.anfrage, handy, hStand, 3000)
    hStand = r.stand
    handy = r.daten
    // Beides ist da, auf dem Handy und auf dem Server
    expect(handy.ersatz).toEqual({ rudern_helms: "rudern_schlingentrainer" })
    expect(handy.profil!.aufraeumen_min).toBe(5)
    expect(handy.spiel.xp).toBe(56)
    expect(handy.bandfarben).toEqual({ band_pull_apart: "rot" })
    expect(handy.profil!.name).toBe("Alex S.")
    const oben = s.db.stamm!.daten as Record<string, Record<string, unknown>>
    expect(oben.ersatz).toEqual({ rudern_helms: "rudern_schlingentrainer" })
    expect(oben.spiel.xp).toBe(56)
    expect(oben.profil.aufraeumen_min).toBe(5)
    expect(oben.profil.name).toBe("Alex S.")
    // danach ist Ruhe
    r = await abgleichen(s.anfrage, handy, hStand, 4000)
    expect(r.neu).toBe(false)
  })

  test("Mischen: hier Geändertes bleibt, hier Gelöschtes bleibt gelöscht, alles andere kommt vom Server", () => {
    const basis = { a: 1, b: 2, t: { x: 1, y: 2 } }
    const lokal = { a: 1, b: 3, t: { x: 1 } } // b geändert, t.y gelöscht
    const srv = { a: 9, b: 2, t: { x: 5, y: 2, z: 7 }, neu: true }
    expect(stammMischen(lokal, srv, feldSummen(basis))).toEqual({ a: 9, b: 3, t: { x: 5, z: 7 }, neu: true })
    // ohne Basis (alter Stand): Eigenes bleibt, was nur der Server hat, kommt dazu
    expect(stammMischen(lokal, srv)).toEqual({ a: 1, b: 3, t: { x: 1, y: 2, z: 7 }, neu: true })
  })

  test("Felder, die diese Version nicht kennt, überleben Laden und Abgleich", () => {
    const roh = { ...mitProfil(), ersatz: { a: "b" }, bandhilfe: { klimmzug: "grün" }, kommt_spaeter: { wert: 1 } }
    const d = pruefen(JSON.parse(JSON.stringify(roh))) as unknown as Record<string, unknown>
    expect(d.kommt_spaeter).toEqual({ wert: 1 })
    expect(d.bandhilfe).toEqual({ klimmzug: "grün" })
    const { stamm, tage } = teilen(d as unknown as Daten)
    expect((zusammensetzen(stamm, tage) as unknown as Record<string, unknown>).kommt_spaeter).toEqual({ wert: 1 })
  })

  test("Am selben Tag auf beiden Geräten trainiert: beide Übungen bleiben", async () => {
    const s = server()
    let a = mitProfil()
    let aStand = (await abgleichen(s.anfrage, a, neuerStand(), 1000)).stand
    let b = (await abgleichen(s.anfrage, leer(), neuerStand(), 1100))
    let bDaten = b.daten
    let bStand = b.stand
    a = structuredClone(a)
    a.protokoll.push({ datum: "2026-10-26", uebung: "kniebeuge", saetze: [satz] })
    bDaten = structuredClone(bDaten)
    bDaten.protokoll.push({ datum: "2026-10-26", uebung: "bankdruecken", saetze: [satz] })
    const ra = await abgleichen(s.anfrage, a, aStand, 2000)
    aStand = ra.stand
    const rb = await abgleichen(s.anfrage, bDaten, bStand, 3000)
    bStand = rb.stand
    expect(rb.daten.protokoll.map((p) => p.uebung).sort()).toEqual(["bankdruecken", "kniebeuge"])
    const ra2 = await abgleichen(s.anfrage, ra.daten, aStand, 4000)
    expect(ra2.daten.protokoll.map((p) => p.uebung).sort()).toEqual(["bankdruecken", "kniebeuge"])
  })

  test("Ohne Netz bleibt alles lokal und geht beim nächsten Mal mit", async () => {
    const s = server()
    const d = mitProfil()
    s.aus()
    const r = await abgleichen(s.anfrage, d, neuerStand(), 1000)
    expect(r.offline).toBe(true)
    expect(r.daten).toBe(d)
    s.an()
    const r2 = await abgleichen(s.anfrage, d, r.stand, 2000)
    expect(r2.offline).toBe(false)
    expect(s.db.stamm).toBeTruthy()
  })
})

// Erfundener kleiner Plan im Aufbau des Kraftbuchs (keine echten Planinhalte)
function kraftbuchDoks(): KbDok[] {
  const tag = (nr: number, typ: string, uebungen: object[], trainiert = false) => ({ typ: "plantag", schluessel: "tag" + nr, daten: { nr, tag: "Tag " + nr + " · " + typ, tagestyp: typ, woche: 1, phase: 2, phase_name: "Phase 2", phase_woche: 1, trainiert, uebungen } })
  const sq = { url: "https://example.org/uebung/back-squat", name: "Back Squat", arbeitssaetze: "3", wiederholungen: "5 Wdh", zielprozent: "75 %", rpe_vorgabe: "8" }
  const pin = { url: "https://example.org/uebung/pin-squat", name: "Pin Squat", arbeitssaetze: "2", wiederholungen: "4 Wdh", zielprozent: "70–75 %" }
  const curl = { url: "https://example.org/uebung/hammer", name: "A1: Hammer Curl", arbeitssaetze: "3", wiederholungen: "10–12 Wdh", rpe_vorgabe: "9" }
  const tri = { url: "https://example.org/uebung/pressdown", name: "A2: Triceps Pressdown", arbeitssaetze: "3", wiederholungen: "10–12 Wdh", rpe_vorgabe: "9" }
  const eigene = { url: "https://example.org/uebung/eigen", name: "Meine Spezialübung", arbeitssaetze: "2", wiederholungen: "10–20 Sek." }
  const ms = (tag: string, h = 18) => Date.parse(tag + "T" + h + ":00:00")
  return [
    tag(1, "Legs 1", [{ ...sq, protokoll: [{ satz: 1, gewicht: 100, rpe: 8 }, { satz: 2, gewicht: 100, rpe: 8 }] }, eigene], true),
    tag(2, "Arms 1", [curl, tri]),
    tag(3, "Legs 2", [pin, sq]),
    tag(4, "Arms 2", [curl, tri]),
    { typ: "trainingslog", schluessel: "day2", daten: { status: "trainiert", sets: { [("https://example.org/uebung/hammer").replace(/[^a-zA-Z0-9]/g, "").slice(-24)]: { "1": { gewicht: 16, reps: 11, rpedelta: 0, fertig: true, updatedAt: ms("2026-10-20") }, "2": { gewicht: 16, reps: 10, rpedelta: -1, fertig: true, updatedAt: ms("2026-10-20") }, "3": { gewicht: 16, reps: null, rpedelta: null, fertig: false } } } } },
    { typ: "trainingslog", schluessel: "day3", daten: { status: "uebersprungen", statusUpdatedAt: ms("2026-10-22") } },
    { typ: "maxwert", schluessel: "m1", daten: { uebung: "Back Squat", gewicht: 130, wdh: 3, einsrm: 143, datum: "2026-10-10" } },
    { typ: "verletzung", schluessel: "v1", daten: { region: "schulter", side: "links", severity: 4, status: "aktiv" } },
    { typ: "verletzung", schluessel: "v2", daten: { region: "knie", severity: 8, status: "abgeheilt" } },
    { typ: "bandfarbe", schluessel: nameKey("A1: Hammer Curl"), daten: { color: "rot" } },
    { typ: "geraet", schluessel: nameKey("Back Squat"), daten: { geraet: "olympiastange" } },
    { typ: "kraft_verlauf", schluessel: "phase1", daten: { verlauf: { "Back Squat": [{ tag: 3, value: 120 }, { tag: 10, value: 128 }] } } },
  ]
}

describe("Übernahme aus dem Kraftbuch", () => {
  test("Vorgaben im Wortlaut werden verstanden", () => {
    expect(wiederholungen("6–8 Wdh")).toEqual({ von: 6, bis: 8, zeit: false })
    expect(wiederholungen("4 Wdh")).toEqual({ von: 4, bis: 4, zeit: false })
    expect(wiederholungen("10–20 Sek.")).toEqual({ von: 10, bis: 20, zeit: true })
    expect(wiederholungen("10 (+3+3+3) Wdh")).toMatchObject({ von: 10, bis: 10, text: "10 (+3+3+3)" })
    expect(wiederholungen("12 / 20 Wdh").text).toBe("12 / 20")
    expect(prozent("72,5–77,5 %")).toEqual([0.725, 0.775])
    expect(prozent("nach RPE")).toBeUndefined()
  })

  test("Englische Namen aus dem Kraftbuch finden die TrainMe-Übung", () => {
    for (const n of ["Back Squat", "Barbell Bench Press", "Deadlift", "A1: Hammer Curl", "Seated Face Pull", "Latzug, Untergriff"]) expect(zuordnen(n), n).toBeTruthy()
    expect(zuordnen("Meine Spezialübung")).toBeUndefined()
  })

  test("Plan, Protokoll, Maxima, Beschwerden, Bandfarben und Archiv werden übernommen", () => {
    const u = uebernehmen(kraftbuchDoks(), "2026-10-26", { "Barbell Bench Press": 125 })
    expect(u.plan?.tage.map((t) => t.titel)).toEqual(["Legs 1", "Arms 1", "Legs 2", "Arms 2"])
    const t1 = u.plan!.tage[0]
    expect(t1.abschnitt).toBe("Phase 2")
    expect(t1.uebungen[0]).toMatchObject({ name: "Back Squat", saetze: 3, wdh_von: 5, prozent: [0.75, 0.75], rir: 2 })
    expect(t1.uebungen[1]).toMatchObject({ zeit: true, wdh_von: 10, wdh_bis: 20 })
    expect(t1.uebungen[1].id).toBeUndefined()
    expect(u.frei).toEqual(["Meine Spezialübung"])
    // Supersatz und Basis der Prozentangabe
    expect(u.plan!.tage[1].uebungen.map((x) => x.gruppe)).toEqual(["A", "A"])
    expect(u.plan!.tage[2].uebungen[0].basis).toBe(zuordnen("Back Squat"))
    // Tag 1 aus dem Plan selbst (geschätzt), Tag 2 aus dem Protokoll, Tag 3 übersprungen
    expect(u.erledigt.map((e) => [e.plan_nr, e.quelle])).toEqual([
      [1, "kraftbuch"],
      [2, "kraftbuch"],
      [3, "uebersprungen"],
    ])
    const curl = u.protokoll.find((p) => p.uebung === zuordnen("Hammer Curl")) as Protokoll
    expect(curl.datum).toBe("2026-10-20")
    expect(curl.saetze).toEqual([
      { last: 16, wdh: 11, rir: 1 },
      { last: 16, wdh: 10, rir: 0 },
    ])
    const kb = u.protokoll.find((p) => p.uebung === zuordnen("Back Squat")) as Protokoll
    expect(kb.geschaetzt).toBe(true)
    expect(kb.datum < "2026-10-20").toBe(true)
    expect(u.maxwerte[zuordnen("Back Squat")!]).toEqual({ kg: 143, datum: "2026-10-10" })
    expect(u.maxwerte[zuordnen("Barbell Bench Press")!].kg).toBe(125)
    expect(u.beschwerden).toEqual([{ gelenk: "schulter", grad: "schonen" }])
    expect(u.bandfarben[zuordnen("Hammer Curl")!]).toBe("rot")
    expect(u.archiv[zuordnen("Back Squat")!].map((p) => p.kg)).toEqual([120, 128])
    expect(u.ort?.geraete).toContain("langhantel")
    expect(u.ort?.gewichte.kurzhanteln).toContain(40)
  })

  test("Eingespielt geht es mit dem nächsten offenen Plantag weiter, ohne Einstufung", () => {
    const d = leer()
    einspielen(d, uebernehmen(kraftbuchDoks(), "2026-10-26"), "2026-10-26", "Alex")
    expect(d.profil?.planart).toBe("eigen")
    expect(d.profil?.folge).toBe("fortlaufend")
    expect(d.einstufung?.kraft).toBe("2026-10-26")
    expect(d.uebernahmen?.kraftbuch).toBe("2026-10-26")
    expect(naechsterPlanTag(d)?.nr).toBe(4)
    // Zweimal einspielen verdoppelt nichts
    const n = d.protokoll.length
    einspielen(d, uebernehmen(kraftbuchDoks(), "2026-10-26"), "2026-10-26")
    expect(d.protokoll.length).toBe(n)
  })
})

describe("Eigener Plan", () => {
  const mitPlan = () => {
    const d = leer()
    einspielen(d, uebernehmen(kraftbuchDoks(), "2026-10-26"), "2026-10-26", "Alex")
    return d
  }

  test("Prozent vom Maximum: Gewicht aus dem eingetragenen Maximum, auf vorhandene Scheiben abgerundet", () => {
    const d = mitPlan()
    const tag = d.eigenerPlan!.tage[2] // Pin Squat 70 bis 75 % der Kniebeuge
    const e = einheitAusPlan(d.profil!, d, tag, "2026-10-27", 0, () => [100, 102.5, 105, 107.5, 110])
    expect(e.plaetze[0].vorgabe.modell).toBe("prozent")
    expect(e.plaetze[0].vorgabe.last).toBe(102.5) // 143 × 0,725 = 103,7
    expect(e.plaetze[0].vorgabe.begruendung).toContain("143")
    expect(e.plan_nr).toBe(3)
  })

  test("Nach Reserve: Gewicht aus dem letzten Mal, Supersatz bleibt zusammen", () => {
    const d = mitPlan()
    const e = einheitAusPlan(d.profil!, d, d.eigenerPlan!.tage[3], "2026-10-27", 0, () => [])
    const curl = e.plaetze[0]
    expect(curl.gruppe).toBe("A")
    expect(e.plaetze[1].gruppe).toBe("A")
    expect(curl.vorgabe.last).toBeGreaterThan(14)
    expect(curl.vorgabe.last).toBeLessThanOrEqual(17)
  })

  test("Freie Übung: eigener Verlauf unter frei:<Name>, Maximum aus dem Verlauf", () => {
    const d = mitPlan()
    const id = idVon({ name: "Meine Spezialübung", saetze: 1, wdh_von: 1, wdh_bis: 1 })
    expect(id).toBe("frei:Meine Spezialübung")
    d.protokoll.push({ datum: "2026-10-25", uebung: "frei:Kurzhantel-Irgendwas", saetze: [{ last: 20, wdh: 10, rir: 2 }] })
    expect(maximum(d, "frei:Kurzhantel-Irgendwas")?.kg).toBeCloseTo(28, 0)
  })

  test("Wochenplan: der nächste Plantag am nächsten Trainingstag (fortlaufend, nicht an freien Tagen), Überspringen und Planende", () => {
    const d = mitPlan()
    const heute = new Date()
    const t = heute.getFullYear() + "-" + String(heute.getMonth() + 1).padStart(2, "0") + "-" + String(heute.getDate()).padStart(2, "0")
    const montag = new Date(Date.parse(t + "T12:00:00Z") - ((new Date(t + "T12:00:00Z").getUTCDay() + 6) % 7) * 86400000).toISOString().slice(0, 10)
    const naechsterMontag = new Date(Date.parse(montag + "T12:00:00Z") + 7 * 86400000).toISOString().slice(0, 10)
    const alle = [...wochenplan(d.profil!, d, montag), ...wochenplan(d.profil!, d, naechsterMontag)]
    const erste = alle.find((e) => e.plan_nr === 4)!
    expect(erste.datum >= t).toBe(true)
    // nie an einem freien Tag
    const wt = (new Date(erste.datum + "T12:00:00Z").getUTCDay() + 6) % 7
    expect(d.profil!.woche[wt].art).toBe("training")
    ueberspringen(d, d.eigenerPlan!.tage[3], t)
    expect(planZuEnde(d)).toBe(true)
  })
})

describe("Plan als Text (z. B. vom Physio-Zettel)", () => {
  const text = `Tag 1: Hüfte
Brücke 3 x 12
Seitlage Bein abspreizen 3 x 10 je Seite
Wandsitzen 3 x 30 s

Tag 2: Kraft
A1: Kniebeuge 4 x 5 75 %
A2: Hammer Curl 3 x 10-12, 2 im Tank
Etwas Unbekanntes`

  test("Tage, Sätze, Zeiten, Prozent, Reserve und Supersatz werden gelesen", () => {
    const p = planAusText(text, "Physio", zuordnen)
    expect(p.tage.map((t) => t.titel)).toEqual(["Hüfte", "Kraft"])
    const [bruecke, seitlage, wand] = p.tage[0].uebungen
    expect(bruecke).toMatchObject({ name: "Brücke", saetze: 3, wdh_von: 12 })
    expect(seitlage.hinweis).toBe("je Seite")
    expect(wand).toMatchObject({ zeit: true, wdh_von: 30 })
    const [kb, curl, frei] = p.tage[1].uebungen
    expect(kb).toMatchObject({ gruppe: "A", prozent: [0.75, 0.75] })
    expect(curl).toMatchObject({ gruppe: "A", wdh_von: 10, wdh_bis: 12, rir: 2 })
    expect(curl.id).toBeTruthy()
    expect(frei).toMatchObject({ name: "Etwas Unbekanntes", wdh_text: "nach Vorgabe" })
    // Zurück in Text und wieder gelesen ergibt denselben Plan
    const wieder = planAusText(planZuText(p), "Physio", zuordnen)
    expect(wieder.tage.map((t) => t.uebungen.map((u) => [u.name, u.saetze, u.wdh_von, u.wdh_bis, u.gruppe, u.rir, u.prozent?.[0]]))).toEqual(p.tage.map((t) => t.uebungen.map((u) => [u.name, u.saetze, u.wdh_von, u.wdh_bis, u.gruppe, u.rir, u.prozent?.[0]])))
  })

  test("Ein Plan, der sich wiederholt, ist nie zu Ende und beginnt nach dem letzten Tag von vorn", () => {
    const d = mitProfil()
    d.eigenerPlan = { ...planAusText(text, "Physio", zuordnen), wiederholen: true }
    d.profil!.planart = "eigen"
    d.erledigt.push({ datum: "2026-10-20", titel: "Hüfte", minuten: 30, saetze: 9, xp: 0, rekorde: [], plan_nr: 1 }, { datum: "2026-10-21", titel: "Kraft", minuten: 30, saetze: 9, xp: 0, rekorde: [], plan_nr: 2 })
    expect(planZuEnde(d)).toBe(false)
    const [n3, n4] = offenePlanTage(d)
    expect([n3.nr, n3.titel, n4.nr, n4.titel]).toEqual([3, "Hüfte", 4, "Kraft"])
  })

  test("Spätere Wochen setzen den Plan fort, nach dem letzten Plantag bleibt die Woche leer", () => {
    const d = mitProfil()
    d.eigenerPlan = planAusText(["Tag 1: A", "Kniebeuge 3 x 5", "Tag 2: B", "Kniebeuge 3 x 5", "Tag 3: C", "Kniebeuge 3 x 5", "Tag 4: D", "Kniebeuge 3 x 5", "Tag 5: E", "Kniebeuge 3 x 5"].join("\n"), "Block", zuordnen)
    const p = d.profil!
    p.planart = "eigen"
    const trainingstage = p.woche.filter((t) => t.art === "training").length
    const woche = (montag: string) => planWoche(p, d, montag, "2026-10-26", plusTage, () => []).map((e) => e.titel)
    const alle = ["A", "B", "C", "D", "E"]
    expect(woche("2026-10-26")).toEqual(alle.slice(0, trainingstage))
    expect(woche("2026-11-02")).toEqual(alle.slice(trainingstage, 2 * trainingstage))
    // zehn Wochen später ist der Plan längst durch: keine Einheiten mehr, statt immer wieder dieselben Tage
    expect(woche("2027-01-04")).toEqual([])
    // ein Plan, der sich wiederholt, läuft in der zweiten Woche reihum weiter
    d.eigenerPlan.wiederholen = true
    expect(woche("2026-11-02")).toEqual([...alle, ...alle].slice(trainingstage, 2 * trainingstage))
  })

  test("Zusätzliche TrainMe-Tage neben dem Plan, in der Reha erst nach der Freigabe", () => {
    const d = mitProfil()
    d.eigenerPlan = { ...planAusText(text, "Physio", zuordnen), wiederholen: true }
    const p = d.profil!
    p.planart = "eigen"
    p.woche = p.woche.map((t, i) => (i === 6 ? { art: "training" as const, ort: 0, minuten: 30, schwerpunkt: "automatisch" as const, quelle: "trainme" as const } : t))
    const montag = "2026-10-26"
    const mitZusatz = wochenplan(p, d, montag).filter((e) => e.plan_nr === undefined)
    expect(mitZusatz.map((e) => e.datum)).toEqual(["2026-11-01"])
    p.reha = { bilder: [{ id: "huefte_arthrose", seite: "beide" }], boden: false, halt: true, freigabe: false, tep_grenzen: false }
    expect(wochenplan(p, d, montag).filter((e) => e.plan_nr === undefined)).toEqual([])
  })
})

describe("Übungsfiguren", () => {
  test("Kraftbuch-Übungen finden ihre Figur, jede Zuordnung zeigt auf eine vorhandene Bewegung", async () => {
    const { _intern } = await import("../src/ui/figuren3d")
    const { FIGUREN } = await import("../src/daten/figuren")
    const { uebung } = await import("../src/daten/uebungen/index")
    const { DEHNUNGEN } = await import("../src/daten/dehnungen")
    for (const n of ["Back Squat", "Barbell Bench Press", "Deadlift", "Hammer Curl"]) expect(FIGUREN[zuordnen(n)!] || DEHNUNGEN[zuordnen(n)!], n).toBeTruthy()
    // Übungen mit Dehnfigur brauchen keine zweite Zuordnung
    for (const id of Object.keys(FIGUREN)) expect(DEHNUNGEN[id], id).toBeUndefined()
    for (const [id, k] of Object.entries(FIGUREN)) {
      expect(uebung(id), id).toBeTruthy()
      expect(_intern.SPECS[k.split(":")[0]], id + " → " + k).toBeTruthy()
      expect(k.split(":")[1] ?? "db", id).toMatch(/^(bar|sz|db|cable|rope|band|none|latbar|plate)$/)
    }
  })

  test("Konzentrationscurl sitzt einarmig mit Kurzhantel, Seil-Trizeps über Kopf zieht vom Kabel", async () => {
    const { FIGUREN } = await import("../src/daten/figuren")
    const { DEHNUNGEN } = await import("../src/daten/dehnungen")
    const k = DEHNUNGEN.konzentrationscurl
    expect(k.seiten).toBe(true)
    expect(k.start.boden).toBe(false)
    expect(k.hilfsmittel?.map((h) => h.art).sort()).toEqual(["bank", "hantel"])
    expect(DEHNUNGEN.trizeps_ueberkopf_seil.hilfsmittel?.some((h) => h.art === "kabel")).toBe(true)
    // Rudergerät, Maschinen und Seitstütz haben keine passende Bewegung: lieber keine Figur
    for (const id of ["rudern_500m", "hip_thrust_maschine", "seitstuetz"]) expect(FIGUREN[id], id).toBeUndefined()
  })
})

describe("Ort geändert, Einheit schon offen", () => {
  test("offene Sätze bekommen die neuen Gewichte, abgehakte bleiben", async () => {
    const { entwurfAnpassen } = await import("../src/ui/Training")
    const d = leer()
    einspielen(d, uebernehmen(kraftbuchDoks(), "2026-10-26"), "2026-10-26", "Alex")
    const tag = d.eigenerPlan!.tage[2]
    const alt = einheitAusPlan(d.profil!, d, tag, "2026-10-27", 0, () => [20])
    const neu = einheitAusPlan(d.profil!, d, tag, "2026-10-27", 0, () => [100, 102.5, 105])
    const s = (last: number | null, fertig: boolean) => ({ last, wdh: 4, rir: 2, fertig })
    const e = { schluessel: "x", plaetze: alt.plaetze, saetze: alt.plaetze.map((_, i) => (i === 0 ? [s(20, true), s(20, false)] : [s(null, false)])) }
    const r = entwurfAnpassen(e, neu.plaetze, (p) => [{ last: p.vorgabe.last, wdh: 4, rir: 2, fertig: false }, { last: p.vorgabe.last, wdh: 4, rir: 2, fertig: false }])
    expect(r.plaetze[0].vorgabe.last).toBe(102.5)
    expect(r.saetze[0].map((x) => x.last)).toEqual([20, 102.5])
    expect(r.saetze[0][0].fertig).toBe(true)
  })

  test("Übernahme in ein schon eingerichtetes Profil: Kraftraum für die Trainingstage, Einstufung erledigt", () => {
    const d = mitProfil()
    einspielen(d, uebernehmen(kraftbuchDoks(), "2026-10-26"), "2026-10-26")
    const k = d.profil!.orte.findIndex((o) => o.name.startsWith("Kraftraum"))
    expect(k).toBeGreaterThan(0)
    expect(d.profil!.woche.filter((t) => t.art === "training").every((t) => t.ort === k)).toBe(true)
    expect(d.einstufung).toEqual({ kraft: "2026-10-26", mobil: "2026-10-26" })
  })
})
