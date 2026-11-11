// Übungsbibliothek: suchen, nach Bereich filtern, nur machbare zeigen, Golf-Fokus. Antippen öffnet die Info.

import { hatSport } from "../logik/auswahl"
import { useEffect, useMemo, useRef, useState } from "react"
import { UEBUNGEN } from "../daten/uebungen/index"
import { erlaubt, golfUebung, passtAnOrt } from "../logik/plan"
import { ohneGolf } from "./golf"
import type { Profil, Uebung } from "../logik/typen"
import { Gruppe, Icon, Seite, Zeile } from "./ios"
import { BEREICHE, MUSTER_NAME } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"
import { Sym } from "./symbole"

/** So viele Übungen zeichnet die Liste zuerst und holt beim Scrollen jeweils nach, statt alle auf einmal */
const STUECK = 40

function normal(t: string): string {
  return t.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
}

export default function Bibliothek(props: { profil: Profil }) {
  const { profil } = props
  const [suche, setSuche] = useState("")
  const [bereich, setBereich] = useState<string>("alle")
  const [nurMachbar, setNurMachbar] = useState(true)
  const golf = hatSport(profil, "golf")
  const [nurGolf, setNurGolf] = useState(golf)
  const [offen, setOffen] = useState<Uebung | null>(null)

  const machbar = useMemo(() => {
    const m = new Set<string>()
    for (const u of UEBUNGEN) if (profil.orte.some((o) => passtAnOrt(u, o)) && erlaubt(profil, u)) m.add(u.id)
    return m
  }, [profil])

  const liste = useMemo(() => {
    const q = normal(suche.trim())
    const b = BEREICHE.find((x) => x.id === bereich)
    return UEBUNGEN.filter((u) => {
      if (b && b.muster.indexOf(u.muster) < 0) return false
      if (nurMachbar && !machbar.has(u.id)) return false
      if (golf && nurGolf && !u.golf) return false
      // Ohne Golf keine reinen Golfübungen
      if (!golf && golfUebung(u)) return false
      if (!q) return true
      return normal(u.name).includes(q) || (u.auch || []).some((a) => normal(a).includes(q)) || normal(MUSTER_NAME[u.muster]).includes(q)
    })
  }, [suche, bereich, nurMachbar, nurGolf, machbar, golf])

  const gruppen = useMemo(() => {
    const g = new Map<string, Uebung[]>()
    for (const u of liste) {
      const k = MUSTER_NAME[u.muster]
      if (!g.has(k)) g.set(k, [])
      g.get(k)!.push(u)
    }
    for (const l of g.values()) l.sort((a, b) => (golf ? (b.golf || 0) - (a.golf || 0) : 0) || a.name.localeCompare(b.name, "de"))
    return Array.from(g.entries())
  }, [liste, golf])

  // Nur ein Stück der Liste zeichnen; kurz vor dem Ende kommt das nächste dazu. Neue Suche oder Filter: wieder von vorn.
  const [gezeigt, setGezeigt] = useState(STUECK)
  useEffect(() => {
    setGezeigt(STUECK)
  }, [liste])
  const ende = useRef<HTMLDivElement | null>(null)
  const mehr = gezeigt < liste.length
  useEffect(() => {
    const e = ende.current
    if (!mehr || !e) return
    if (typeof IntersectionObserver === "undefined") {
      setGezeigt(liste.length)
      return
    }
    const io = new IntersectionObserver(
      (x) => {
        if (x.some((y) => y.isIntersecting)) setGezeigt((n) => n + STUECK * 2)
      },
      { rootMargin: "800px" },
    )
    io.observe(e)
    return () => io.disconnect()
  }, [mehr, gezeigt, liste.length])
  const sichtbar = useMemo(() => {
    const aus: [string, Uebung[], number][] = []
    let rest = gezeigt
    for (const [titel, us] of gruppen) {
      if (rest <= 0) break
      aus.push([titel, us.slice(0, rest), us.length])
      rest -= us.length
    }
    return aus
  }, [gruppen, gezeigt])

  return (
    <Seite titel="Übungen" untertitel={UEBUNGEN.length + " Übungen, " + machbar.size + " mit deiner Ausrüstung machbar"}>
      <label className="suchfeld">
        <Icon name="suche" groesse={18} />
        <input type="search" placeholder="Suchen, auch englisch" value={suche} onChange={(e) => setSuche(e.target.value)} />
      </label>
      <div className="filterleiste">
        {[{ id: "alle", name: "Alle" }, ...BEREICHE].map((b) => (
          <button key={b.id} type="button" className={"filterchip" + (bereich === b.id ? " an" : "")} onClick={() => setBereich(b.id)}>
            {b.name}
          </button>
        ))}
      </div>
      <div className="filterleiste">
        <button type="button" className={"filterchip" + (nurMachbar ? " an" : "")} onClick={() => setNurMachbar(!nurMachbar)}>
          Nur machbar
        </button>
        {golf ? (
          <button type="button" className={"filterchip golf" + (nurGolf ? " an" : "")} onClick={() => setNurGolf(!nurGolf)}>
            <Sym name="golf" groesse={15} /> Golf
          </button>
        ) : null}
      </div>
      {gruppen.length === 0 ? <p className="leerhinweis">Keine Übung gefunden. Filter lockern?</p> : null}
      {sichtbar.map(([titel, us, alle]) => (
        <Gruppe key={titel} titel={titel + " · " + alle}>
          {us.map((u) => (
            <Zeile
              key={u.id}
              titel={u.name}
              untertitel={ohneGolf(u.info.kurz)}
              symbol={golf && u.golf ? <Sym name="golf" groesse={18} farbe="var(--gruen)" titel="Golf" /> : undefined}
              onClick={() => setOffen(u)}
            />
          ))}
        </Gruppe>
      ))}
      {mehr ? <div ref={ende} className="listenende" aria-hidden="true" /> : null}
      <UebungInfoBlatt uebung={offen} onClose={() => setOffen(null)} />
    </Seite>
  )
}
