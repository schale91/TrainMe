// Übungsbibliothek: suchen, nach Bereich filtern, nur machbare zeigen, Golf-Fokus. Antippen öffnet die Info.

import { useMemo, useState } from "react"
import { UEBUNGEN } from "../daten/uebungen/index"
import { erlaubt, passtAnOrt } from "../logik/plan"
import type { Profil, Uebung } from "../logik/typen"
import { Gruppe, Icon, Seite, Zeile } from "./ios"
import { BEREICHE, MUSTER_NAME } from "./texte"
import { UebungInfoBlatt } from "./UebungInfo"

function normal(t: string): string {
  return t.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
}

export default function Bibliothek(props: { profil: Profil }) {
  const { profil } = props
  const [suche, setSuche] = useState("")
  const [bereich, setBereich] = useState<string>("alle")
  const [nurMachbar, setNurMachbar] = useState(true)
  const [nurGolf, setNurGolf] = useState(profil.sport === "golf")
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
      if (nurGolf && !u.golf) return false
      if (!q) return true
      return normal(u.name).includes(q) || (u.auch || []).some((a) => normal(a).includes(q)) || normal(MUSTER_NAME[u.muster]).includes(q)
    })
  }, [suche, bereich, nurMachbar, nurGolf, machbar])

  const gruppen = useMemo(() => {
    const g = new Map<string, Uebung[]>()
    for (const u of liste) {
      const k = MUSTER_NAME[u.muster]
      if (!g.has(k)) g.set(k, [])
      g.get(k)!.push(u)
    }
    for (const l of g.values()) l.sort((a, b) => (b.golf || 0) - (a.golf || 0) || a.name.localeCompare(b.name, "de"))
    return Array.from(g.entries())
  }, [liste])

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
        <button type="button" className={"filterchip golf" + (nurGolf ? " an" : "")} onClick={() => setNurGolf(!nurGolf)}>
          ⛳ Golf
        </button>
      </div>
      {gruppen.length === 0 ? <p className="leerhinweis">Keine Übung gefunden. Filter lockern?</p> : null}
      {gruppen.map(([titel, us]) => (
        <Gruppe key={titel} titel={titel + " · " + us.length}>
          {us.map((u) => (
            <Zeile
              key={u.id}
              titel={u.name}
              untertitel={u.info.kurz}
              symbol={u.golf ? <span className="golfpunkt" title="Golf">⛳</span> : undefined}
              onClick={() => setOffen(u)}
            />
          ))}
        </Gruppe>
      ))}
      <UebungInfoBlatt uebung={offen} onClose={() => setOffen(null)} />
    </Seite>
  )
}
