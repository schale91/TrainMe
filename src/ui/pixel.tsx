// Pixelgrafiken für das Abenteuer (16 × 16), im gleichen Stil wie die Spielszene. Jedes Bild wird aus wenigen
// Grundformen gezeichnet, damit alle Gegenstände dieselbe Handschrift haben.

type Raster = (string | null)[][]

function leer(): Raster {
  return Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => null as string | null))
}

function punkt(r: Raster, x: number, y: number, f: string) {
  if (x >= 0 && x < 16 && y >= 0 && y < 16) r[Math.round(y)][Math.round(x)] = f
}

function linie(r: Raster, x0: number, y0: number, x1: number, y1: number, f: string, dick = 1) {
  const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) || 1
  for (let i = 0; i <= n; i++) {
    const x = Math.round(x0 + ((x1 - x0) * i) / n)
    const y = Math.round(y0 + ((y1 - y0) * i) / n)
    punkt(r, x, y, f)
    if (dick > 1) {
      punkt(r, x + 1, y, f)
      if (dick > 2) punkt(r, x, y + 1, f)
    }
  }
}

function rechteck(r: Raster, x: number, y: number, b: number, h: number, f: string) {
  for (let j = y; j < y + h; j++) for (let i = x; i < x + b; i++) punkt(r, i, j, f)
}

function kreis(r: Raster, cx: number, cy: number, rad: number, f: string) {
  for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) if ((i - cx) ** 2 + (j - cy) ** 2 <= rad * rad + 0.3) punkt(r, i, j, f)
}

const F = {
  holz: "#c89a5a",
  holzDunkel: "#8a5a35",
  leder: "#a0683c",
  griff: "#4a3020",
  silber: "#dfe5ee",
  stahl: "#9aa3b0",
  stahlDunkel: "#6b7480",
  gold: "#ffbe55",
  goldDunkel: "#c98a1e",
  rot: "#ff6b81",
  rotDunkel: "#b0322a",
  orange: "#ff8a3d",
  gelb: "#ffe066",
  gruen: "#43d39e",
  gruenDunkel: "#2f9e73",
  lila: "#8b7bff",
  lilaDunkel: "#3c3f6b",
  weiss: "#f3f1ff",
  schwarz: "#1b1730",
}

function schwert(klinge: string, kante: string, parier: string, griff: string, lang = 10): Raster {
  const r = leer()
  linie(r, 4, 11, 4 + lang - 1, 11 - lang + 1, klinge, 2)
  linie(r, 5, 11, 4 + lang, 11 - lang + 1, kante)
  linie(r, 1, 9, 6, 14, parier, 2)
  linie(r, 1, 14, 3, 12, griff, 2)
  punkt(r, 0, 15, parier)
  return r
}

function ruestung(grund: string, akzent: string, muster?: (r: Raster) => void): Raster {
  const r = leer()
  rechteck(r, 4, 3, 8, 11, grund)
  rechteck(r, 2, 4, 2, 6, grund)
  rechteck(r, 12, 4, 2, 6, grund)
  rechteck(r, 6, 3, 4, 2, F.schwarz)
  rechteck(r, 4, 12, 8, 1, akzent)
  if (muster) muster(r)
  return r
}

function helm(grund: string, akzent: string): Raster {
  const r = leer()
  kreis(r, 7.5, 9, 5.5, grund)
  rechteck(r, 2, 9, 12, 5, null as unknown as string)
  for (let j = 9; j < 16; j++) for (let i = 0; i < 16; i++) r[j][i] = null
  rechteck(r, 2, 9, 12, 2, akzent)
  return r
}

function schild(grund: string, rand: string, form: "rund" | "spitz" | "turm"): Raster {
  const r = leer()
  if (form === "rund") {
    kreis(r, 7.5, 7.5, 6.5, rand)
    kreis(r, 7.5, 7.5, 5.2, grund)
    kreis(r, 7.5, 7.5, 1.4, rand)
  } else if (form === "spitz") {
    for (let j = 1; j < 15; j++) {
      const halb = j < 9 ? 6 : Math.max(0, 6 - (j - 8))
      rechteck(r, 8 - halb, j, halb * 2, 1, j === 1 || halb <= 1 ? rand : grund)
      punkt(r, 8 - halb, j, rand)
      punkt(r, 7 + halb, j, rand)
    }
    rechteck(r, 7, 3, 2, 8, rand)
    rechteck(r, 4, 6, 8, 2, rand)
  } else {
    rechteck(r, 3, 1, 10, 14, rand)
    rechteck(r, 4, 2, 8, 12, grund)
    rechteck(r, 7, 3, 2, 10, rand)
    rechteck(r, 5, 6, 6, 2, rand)
  }
  return r
}

const BILDER: Record<string, () => Raster> = {
  holzschwert: () => schwert(F.holz, "#e2bd85", F.holzDunkel, F.griff, 9),
  eisenschwert: () => schwert(F.stahl, F.silber, F.gold, F.griff, 11),
  flammenklinge: () => {
    const r = schwert(F.orange, F.gelb, F.rotDunkel, F.schwarz, 11)
    punkt(r, 9, 2, F.gelb)
    punkt(r, 13, 5, F.orange)
    punkt(r, 11, 1, F.rot)
    return r
  },
  streitaxt: () => {
    const r = leer()
    linie(r, 2, 14, 11, 5, F.holzDunkel, 2)
    kreis(r, 11.5, 4.5, 3.6, F.stahl)
    kreis(r, 13.5, 2.5, 1.5, null as unknown as string)
    linie(r, 9, 2, 14, 7, F.silber)
    return r
  },
  kriegshammer: () => {
    const r = leer()
    linie(r, 2, 14, 10, 6, F.holzDunkel, 2)
    for (let i = 0; i < 6; i++) linie(r, 7 + i, 4 + i - 3, 10 + i, 7 + i - 3, F.stahlDunkel, 2)
    linie(r, 8, 0, 14, 6, F.stahl)
    return r
  },
  donnerspeer: () => {
    const r = leer()
    linie(r, 1, 14, 11, 4, F.lilaDunkel, 2)
    rechteck(r, 11, 1, 3, 3, F.gelb)
    punkt(r, 14, 0, F.gelb)
    punkt(r, 10, 4, F.gelb)
    linie(r, 3, 7, 5, 9, F.gelb)
    linie(r, 5, 9, 4, 10, F.gelb)
    return r
  },
  lederwams: () => ruestung(F.leder, F.griff, (r) => rechteck(r, 7, 5, 2, 7, F.holzDunkel)),
  kettenhemd: () =>
    ruestung(F.stahl, F.stahlDunkel, (r) => {
      for (let j = 5; j < 12; j += 2) for (let i = 5; i < 11; i += 2) punkt(r, i + (j % 4 === 1 ? 1 : 0), j, F.stahlDunkel)
    }),
  plattenruestung: () =>
    ruestung(F.silber, F.stahl, (r) => {
      rechteck(r, 4, 8, 8, 1, F.stahl)
      rechteck(r, 4, 10, 8, 1, F.stahl)
      rechteck(r, 2, 4, 2, 2, F.stahl)
      rechteck(r, 12, 4, 2, 2, F.stahl)
    }),
  drachenschuppen: () =>
    ruestung(F.gruenDunkel, F.gold, (r) => {
      for (let j = 5; j < 12; j += 2) for (let i = 4 + (j % 4 === 1 ? 1 : 0); i < 12; i += 2) punkt(r, i, j, F.gruen)
    }),
  lederkappe: () => helm(F.leder, F.griff),
  eisenhelm: () => {
    const r = helm(F.stahl, F.stahlDunkel)
    rechteck(r, 4, 7, 8, 1, F.schwarz)
    rechteck(r, 7, 3, 2, 6, F.silber)
    return r
  },
  kronenhelm: () => {
    const r = leer()
    rechteck(r, 2, 7, 12, 5, F.gold)
    for (const x of [2, 7, 12]) rechteck(r, x, 3, 2, 4, F.gold)
    rechteck(r, 2, 11, 12, 1, F.goldDunkel)
    punkt(r, 4, 9, F.rot)
    punkt(r, 8, 9, F.lila)
    punkt(r, 11, 9, F.gruen)
    return r
  },
  holzschild: () => {
    const r = schild(F.holz, F.holzDunkel, "rund")
    linie(r, 5, 2, 5, 13, F.holzDunkel)
    linie(r, 10, 2, 10, 13, F.holzDunkel)
    return r
  },
  eisenschild: () => schild(F.stahl, F.stahlDunkel, "spitz"),
  turmschild: () => schild(F.stahlDunkel, F.silber, "turm"),
  wolf: () => {
    const r = leer()
    rechteck(r, 3, 6, 9, 6, F.stahl)
    rechteck(r, 9, 4, 5, 5, F.stahl)
    rechteck(r, 13, 6, 3, 2, F.stahl)
    punkt(r, 10, 3, F.stahl)
    punkt(r, 12, 3, F.stahl)
    punkt(r, 12, 5, F.schwarz)
    punkt(r, 15, 6, F.schwarz)
    rechteck(r, 3, 12, 2, 3, F.stahlDunkel)
    rechteck(r, 9, 12, 2, 3, F.stahlDunkel)
    linie(r, 1, 5, 3, 7, F.stahl)
    return r
  },
  falke: () => {
    const r = leer()
    rechteck(r, 6, 6, 5, 4, F.leder)
    rechteck(r, 10, 4, 3, 3, F.leder)
    punkt(r, 13, 5, F.gold)
    punkt(r, 11, 5, F.schwarz)
    linie(r, 1, 3, 7, 7, F.holzDunkel, 2)
    linie(r, 4, 12, 8, 9, F.holzDunkel, 2)
    rechteck(r, 7, 10, 2, 3, F.weiss)
    return r
  },
  drachenjunges: () => {
    const r = leer()
    rechteck(r, 3, 7, 8, 5, F.gruenDunkel)
    rechteck(r, 9, 4, 5, 5, F.gruenDunkel)
    rechteck(r, 13, 6, 2, 2, F.gruenDunkel)
    punkt(r, 11, 5, F.gelb)
    linie(r, 4, 6, 7, 2, F.gruen, 2)
    rechteck(r, 3, 12, 2, 2, F.gruen)
    rechteck(r, 8, 12, 2, 2, F.gruen)
    punkt(r, 15, 7, F.orange)
    linie(r, 1, 9, 3, 9, F.gruen)
    return r
  },
  muenze: () => {
    const r = leer()
    kreis(r, 7.5, 7.5, 6.5, F.goldDunkel)
    kreis(r, 7.5, 7.5, 5.5, F.gold)
    rechteck(r, 7, 4, 2, 8, F.goldDunkel)
    punkt(r, 5, 4, "#fff2c4")
    punkt(r, 4, 5, "#fff2c4")
    return r
  },
  herz: () => {
    const r = leer()
    kreis(r, 5, 6, 3.3, F.rot)
    kreis(r, 10.5, 6, 3.3, F.rot)
    for (let j = 7; j < 15; j++) rechteck(r, 2 + (j - 7), j, 12 - 2 * (j - 7), 1, F.rot)
    punkt(r, 4, 4, "#ffc2cc")
    return r
  },
  angriff: () => schwert(F.stahl, F.silber, F.gold, F.griff, 11),
  verteidigung: () => schild(F.lila, F.weiss, "spitz"),
}

const CACHE = new Map<string, { x: number; y: number; f: string }[]>()

function pixel(name: string) {
  if (!CACHE.has(name)) {
    const r = (BILDER[name] || BILDER.muenze)()
    const liste: { x: number; y: number; f: string }[] = []
    r.forEach((zeile, y) => zeile.forEach((f, x) => f && liste.push({ x, y, f })))
    CACHE.set(name, liste)
  }
  return CACHE.get(name)!
}

export function Pixel(props: { name: string; groesse?: number; titel?: string }) {
  const g = props.groesse || 24
  return (
    <svg width={g} height={g} viewBox="0 0 16 16" shapeRendering="crispEdges" role={props.titel ? "img" : undefined} aria-label={props.titel} aria-hidden={props.titel ? undefined : true} className="pixel">
      {pixel(props.name).map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width="1.02" height="1.02" fill={p.f} />
      ))}
    </svg>
  )
}

/** Name, Zahl und Pixelsymbol nebeneinander, z. B. für Münzen. */
export function PixelWert(props: { name: string; wert: string | number; groesse?: number }) {
  return (
    <span className="pixelwert">
      <Pixel name={props.name} groesse={props.groesse || 16} />
      <b>{props.wert}</b>
    </span>
  )
}
