// Zeichnet das Abenteuer auf ein Canvas: Landschaft mit Parallaxe, Held mit Ausrüstung, Gegner, Treffer und Zahlen.
// Alles aus einfachen Formen im Pixel-Stil, ohne Bilddateien.

import { WELTEN, type Kampf } from "../logik/abenteuer"

export interface Szene {
  welt: number
  /** ausgerüstete Gegenstände (ids) */
  waffe?: string
  ruestung?: string
  helm?: string
  schild?: string
  begleiter?: string
  gegnerArt: string
  boss: boolean
  kampf: Kampf | null
  /** Startzeit der Animation in ms */
  start: number
}

export const LAUFZEIT = 2.4 // Sekunden Anlauf bis zum Gegner
export const NACHLAUF = 2.2

const PX = 3 // Pixelgröße der Figuren

function px(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, farbe: string) {
  c.fillStyle = farbe
  c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h))
}

const WAFFEN: Record<string, { farbe: string; laenge: number; breite: number; griff: string; form?: "axt" | "hammer" | "speer" }> = {
  holzschwert: { farbe: "#b98a4f", laenge: 9, breite: 2, griff: "#6b4a2b" },
  eisenschwert: { farbe: "#cfd6e0", laenge: 11, breite: 2, griff: "#5a4630" },
  streitaxt: { farbe: "#b8c0cc", laenge: 10, breite: 2, griff: "#6b4a2b", form: "axt" },
  kriegshammer: { farbe: "#8d96a3", laenge: 10, breite: 2, griff: "#4f3a25", form: "hammer" },
  flammenklinge: { farbe: "#ff8a3d", laenge: 12, breite: 2, griff: "#5a2a1a" },
  donnerspeer: { farbe: "#ffe066", laenge: 15, breite: 1, griff: "#3c3f6b", form: "speer" },
}

const RUESTUNG: Record<string, string> = { lederwams: "#8a5a35", kettenhemd: "#9aa3b0", plattenruestung: "#c5ccd6", drachenschuppen: "#2f9e73" }
const HELME: Record<string, string> = { lederkappe: "#7a4e2d", eisenhelm: "#a7b0bd", kronenhelm: "#f2c94c" }
const SCHILDE: Record<string, string> = { holzschild: "#9b6b3c", eisenschild: "#a7b0bd", turmschild: "#6f7b8f" }

function held(c: CanvasRenderingContext2D, x: number, boden: number, t: number, s: Szene, laeuft: boolean, schlag: number, getroffen: boolean, besiegt: boolean) {
  const P = PX
  const schritt = laeuft ? Math.sin(t * 12) : 0
  const y = boden - 22 * P + (laeuft ? Math.abs(schritt) * -P : 0)
  if (besiegt) {
    c.save()
    c.translate(x + 6 * P, boden - 3 * P)
    c.rotate(-Math.PI / 2)
    c.translate(-(x + 6 * P), -(boden - 3 * P))
  }
  const haut = "#f3c9a0"
  const koerper = s.ruestung ? RUESTUNG[s.ruestung] : "#5a73ff"
  // Beine
  px(c, x + 3 * P, y + 16 * P + schritt * P, 2 * P, 6 * P, "#2d2a4a")
  px(c, x + 7 * P, y + 16 * P - schritt * P, 2 * P, 6 * P, "#2d2a4a")
  // Körper
  px(c, x + 2 * P, y + 8 * P, 8 * P, 9 * P, getroffen ? "#ffffff" : koerper)
  px(c, x + 2 * P, y + 15 * P, 8 * P, P, "#3b2a1a")
  // Kopf
  px(c, x + 3 * P, y + 2 * P, 6 * P, 6 * P, getroffen ? "#ffffff" : haut)
  px(c, x + 7 * P, y + 4 * P, P, P, "#1b1b2b")
  if (s.helm) px(c, x + 2 * P, y + P, 8 * P, 3 * P, HELME[s.helm] || "#999")
  else px(c, x + 3 * P, y + P, 6 * P, 2 * P, "#5b3a22")
  if (s.helm === "kronenhelm") {
    px(c, x + 3 * P, y - P, P, 2 * P, "#f2c94c")
    px(c, x + 5 * P, y - P, P, 2 * P, "#f2c94c")
    px(c, x + 7 * P, y - P, P, 2 * P, "#f2c94c")
  }
  // Schild am hinteren Arm
  if (s.schild) {
    px(c, x, y + 9 * P, 4 * P, 7 * P, SCHILDE[s.schild] || "#888")
    px(c, x + P, y + 11 * P, 2 * P, 3 * P, "#00000033")
  }
  // Waffenarm mit Schwung
  const w = s.waffe ? WAFFEN[s.waffe] : null
  const winkel = -0.6 + schlag * 2.2
  c.save()
  c.translate(x + 9 * P, y + 10 * P)
  c.rotate(winkel)
  px(c, 0, -P, 4 * P, 2 * P, haut)
  if (w) {
    px(c, 3 * P, -2 * P, P, 4 * P, w.griff)
    px(c, 4 * P, -w.breite * P * 0.5, w.laenge * P, w.breite * P, w.farbe)
    if (w.form === "axt") px(c, (4 + w.laenge - 3) * P, -3 * P, 3 * P, 5 * P, w.farbe)
    if (w.form === "hammer") px(c, (4 + w.laenge - 3) * P, -3 * P, 4 * P, 6 * P, w.farbe)
    if (w.form === "speer") px(c, (4 + w.laenge) * P, -1.5 * P, 3 * P, 3 * P, "#fff7b0")
    if (s.waffe === "flammenklinge" && schlag > 0.2) {
      c.globalAlpha = 0.6
      px(c, 6 * P, -3 * P, (w.laenge - 2) * P, P, "#ffd166")
      c.globalAlpha = 1
    }
  }
  c.restore()
  if (besiegt) c.restore()
}

function begleiter(c: CanvasRenderingContext2D, id: string, x: number, boden: number, t: number, angriff: number) {
  const P = PX
  if (id === "falke") {
    const y = boden - 48 * P + Math.sin(t * 3) * 3 * P - angriff * 20 * P
    px(c, x, y, 5 * P, 3 * P, "#8a5a35")
    px(c, x - 2 * P, y - (Math.sin(t * 14) > 0 ? 2 : 0) * P, 3 * P, P, "#6b4426")
    px(c, x + 5 * P, y + P, 2 * P, P, "#f2c94c")
  } else if (id === "wolf") {
    const y = boden - 8 * P
    px(c, x + angriff * 10 * P, y, 9 * P, 5 * P, "#7d8794")
    px(c, x + 8 * P + angriff * 10 * P, y - 2 * P, 4 * P, 4 * P, "#7d8794")
    px(c, x + 10 * P + angriff * 10 * P, y - P, P, P, "#111")
    px(c, x + angriff * 10 * P, y + 5 * P, P, 3 * P, "#5f6874")
    px(c, x + 7 * P + angriff * 10 * P, y + 5 * P, P, 3 * P, "#5f6874")
  } else if (id === "drachenjunges") {
    const y = boden - 30 * P + Math.sin(t * 4) * 2 * P
    px(c, x, y, 7 * P, 5 * P, "#2f9e73")
    px(c, x + 6 * P, y - 2 * P, 4 * P, 4 * P, "#2f9e73")
    px(c, x + 2 * P, y - 2 * P - (Math.sin(t * 10) > 0 ? P : 0), 3 * P, 2 * P, "#5ee6c4")
    if (angriff > 0.3) px(c, x + 10 * P, y - P, 6 * P * angriff, 2 * P, "#ff8a3d")
  }
}

const GEGNER_FARBE: Record<string, [string, string]> = {
  Schleim: ["#6bd66b", "#3f9e3f"],
  Wildschwein: ["#7a5236", "#4f3422"],
  Riesenkäfer: ["#3b4a8f", "#28316b"],
  Wolf: ["#6d7682", "#4b525c"],
  Goblin: ["#7bbf4a", "#4f8a2b"],
  Waldgeist: ["#a4e3c9", "#6fb89a"],
  Fledermaus: ["#4d3a6b", "#2f2345"],
  Skelett: ["#e8e4d8", "#b9b4a4"],
  Steingolem: ["#8f8f99", "#62626b"],
  Skorpion: ["#c47a2c", "#8a521b"],
  Mumie: ["#e3d6b0", "#b3a47c"],
  Sandwurm: ["#d6a85a", "#a87b35"],
  Feuerkobold: ["#ff6b3d", "#c23f1a"],
  Lavatroll: ["#7a2b1f", "#4f1912"],
  Drache: ["#b0322a", "#7a1d18"],
}

function gegner(c: CanvasRenderingContext2D, art: string, boss: boolean, x: number, boden: number, t: number, schlag: number, getroffen: boolean, besiegt: number) {
  const P = PX * (boss ? 1.5 : 1)
  const [f1, f2] = GEGNER_FARBE[art] || ["#c66", "#933"]
  const hell = getroffen ? "#ffffff" : f1
  c.save()
  c.globalAlpha = 1 - besiegt
  const ruck = -schlag * 6 * P
  const huepf = Math.abs(Math.sin(t * 4)) * P
  const bx = x + ruck
  if (art === "Schleim" || art === "Waldgeist") {
    const h = 9 + Math.sin(t * 5)
    px(c, bx, boden - h * P - huepf, 13 * P, h * P, hell)
    px(c, bx + P, boden - (h + 2) * P - huepf, 11 * P, 2 * P, hell)
    px(c, bx + 2 * P, boden - (h - 2) * P - huepf, 2 * P, 2 * P, "#1b1b2b")
    px(c, bx + 6 * P, boden - (h - 2) * P - huepf, 2 * P, 2 * P, "#1b1b2b")
  } else if (art === "Fledermaus") {
    const y = boden - 32 * P + Math.sin(t * 3) * 4 * P
    px(c, bx + 4 * P, y, 6 * P, 5 * P, hell)
    const fl = Math.sin(t * 16) > 0 ? -2 : 1
    px(c, bx - 2 * P, y + fl * P, 6 * P, 2 * P, f2)
    px(c, bx + 10 * P, y + fl * P, 6 * P, 2 * P, f2)
    px(c, bx + 5 * P, y + 2 * P, P, P, "#ff4d4d")
  } else if (art === "Drache" || art === "Sandwurm" || art === "Riesenkäfer" || art === "Skorpion" || art === "Wildschwein" || art === "Wolf") {
    const y = boden - 12 * P
    px(c, bx + 3 * P, y, 14 * P, 8 * P, hell)
    px(c, bx, y - 3 * P, 6 * P, 6 * P, hell)
    px(c, bx + P, y - 2 * P, P, P, "#1b1b2b")
    px(c, bx + 4 * P, y + 8 * P, 2 * P, 4 * P, f2)
    px(c, bx + 13 * P, y + 8 * P, 2 * P, 4 * P, f2)
    if (art === "Drache") {
      px(c, bx + 7 * P, y - 6 * P - (Math.sin(t * 6) > 0 ? 2 * P : 0), 7 * P, 4 * P, f2)
      if (schlag > 0.3) px(c, bx - 10 * P, y - P, 10 * P * schlag, 3 * P, "#ff9d42")
    }
    if (art === "Skorpion") px(c, bx + 16 * P, y - 6 * P, 2 * P, 7 * P, f2)
    if (art === "Wildschwein") px(c, bx - P, y + P, 2 * P, P, "#fff")
  } else {
    // aufrechte Gegner: Goblin, Skelett, Golem, Mumie, Kobold, Troll
    const gross = art === "Steingolem" || art === "Lavatroll" ? 1.3 : 1
    const Q = P * gross
    const y = boden - 22 * Q
    px(c, bx + 3 * Q, y + 16 * Q, 2 * Q, 6 * Q, f2)
    px(c, bx + 7 * Q, y + 16 * Q, 2 * Q, 6 * Q, f2)
    px(c, bx + 2 * Q, y + 8 * Q, 8 * Q, 9 * Q, hell)
    px(c, bx + 3 * Q, y + 2 * Q, 6 * Q, 6 * Q, hell)
    px(c, bx + 4 * Q, y + 4 * Q, Q, Q, art === "Feuerkobold" ? "#ffe066" : "#1b1b2b")
    px(c, bx - Q + ruck * 0.2, y + 10 * Q, 3 * Q, 2 * Q, f2)
    if (art === "Goblin") px(c, bx + Q, y + 3 * Q, Q, 2 * Q, hell)
    if (art === "Skelett") for (let i = 0; i < 3; i++) px(c, bx + 3 * Q, y + (10 + i * 2) * Q, 6 * Q, Q * 0.6, "#9d988a")
  }
  if (boss) {
    px(c, x + 4 * P, boden - 30 * P, 6 * P, 2 * P, "#f2c94c")
  }
  c.restore()
}

function landschaft(c: CanvasRenderingContext2D, B: number, H: number, welt: number, versatz: number) {
  const w = WELTEN[welt]
  const g = c.createLinearGradient(0, 0, 0, H)
  g.addColorStop(0, w.himmel[0])
  g.addColorStop(1, w.himmel[1])
  c.fillStyle = g
  c.fillRect(0, 0, B, H)
  // ferne Berge
  c.fillStyle = w.huegel + "88"
  for (let i = -1; i < 6; i++) {
    const x = i * 140 - ((versatz * 0.2) % 140)
    c.beginPath()
    c.moveTo(x, H * 0.72)
    c.lineTo(x + 70, H * 0.38)
    c.lineTo(x + 140, H * 0.72)
    c.fill()
  }
  // Hügel
  c.fillStyle = w.huegel
  for (let i = -1; i < 8; i++) {
    const x = i * 90 - ((versatz * 0.5) % 90)
    c.beginPath()
    c.ellipse(x + 45, H * 0.78, 60, 34, 0, Math.PI, 0)
    c.fill()
  }
  // Bäume, Säulen oder Kristalle je Welt
  for (let i = -1; i < 7; i++) {
    const x = i * 110 - ((versatz * 0.75) % 110) + 30
    const y = H * 0.78
    if (welt === 0 || welt === 1) {
      px(c, x, y - 26, 6, 26, "#6b4a2b")
      c.fillStyle = welt === 0 ? "#3f8f3a" : "#24502a"
      c.beginPath()
      c.arc(x + 3, y - 32, 16, 0, Math.PI * 2)
      c.fill()
    } else if (welt === 2) {
      c.fillStyle = "#8f7cff"
      c.beginPath()
      c.moveTo(x, y)
      c.lineTo(x + 8, y - 30)
      c.lineTo(x + 16, y)
      c.fill()
    } else if (welt === 3) {
      px(c, x, y - 34, 10, 34, "#c99a52")
      px(c, x - 3, y - 36, 16, 4, "#b88942")
    } else {
      c.fillStyle = "#ff6b3d"
      px(c, x, y - 8, 18, 8, "#2a1a17")
      c.globalAlpha = 0.6 + 0.4 * Math.sin(versatz * 0.05 + i)
      px(c, x + 4, y - 10, 10, 3, "#ff8a3d")
      c.globalAlpha = 1
    }
  }
  // Boden mit Kacheln
  const by = H * 0.78
  px(c, 0, by, B, H - by, w.boden)
  c.fillStyle = "#00000022"
  for (let i = -1; i < B / 24 + 2; i++) {
    const x = i * 24 - (versatz % 24)
    c.fillRect(x, by, 12, 4)
    c.fillRect(x + 12, by + 10, 12, 3)
  }
}

export interface Zahl {
  t: number
  text: string
  farbe: string
  ziel: "held" | "gegner"
}

/** Zeichnet die Szene zum Zeitpunkt jetzt (ms). Gibt zurück, ob die Animation fertig ist. */
export function zeichne(c: CanvasRenderingContext2D, B: number, H: number, s: Szene, jetzt: number): boolean {
  const t = (jetzt - s.start) / 1000
  const boden = Math.round(H * 0.78) + 2
  const k = s.kampf
  const kampfZeit = Math.max(0, t - LAUFZEIT)
  const dauer = k ? k.dauer : 0
  const nach = kampfZeit - dauer
  const laeuft = t < LAUFZEIT || (k && k.sieg && nach > 0.6)
  const versatz = Math.min(t, LAUFZEIT) * 90 + (k && k.sieg && nach > 0.6 ? (nach - 0.6) * 90 : 0)
  landschaft(c, B, H, s.welt, versatz)

  const heldX = B * 0.22
  const gegnerZiel = B * 0.58
  const gegnerX = t < LAUFZEIT ? B + 40 - (B + 40 - gegnerZiel) * (t / LAUFZEIT) : gegnerZiel

  // aktueller Stand aus den Treffern
  let heldLeben = k ? k.held.leben : 1
  let gegnerLeben = k ? k.gegner.leben : 1
  let heldSchlag = 0
  let gegnerSchlag = 0
  let begleiterSchlag = 0
  let heldGetroffen = false
  let gegnerGetroffen = false
  const zahlen: Zahl[] = []
  if (k && t >= LAUFZEIT) {
    for (const tr of k.treffer) {
      if (tr.t > kampfZeit) break
      heldLeben = tr.heldLeben
      gegnerLeben = tr.gegnerLeben
      const alt = kampfZeit - tr.t
      if (alt < 0.25) {
        if (tr.von === "held") heldSchlag = 1 - alt / 0.25
        if (tr.von === "gegner") gegnerSchlag = 1 - alt / 0.25
        if (tr.von === "begleiter") begleiterSchlag = 1 - alt / 0.25
        if (tr.von === "gegner") heldGetroffen = alt < 0.1
        else gegnerGetroffen = alt < 0.1
      }
      if (alt < 0.9) zahlen.push({ t: alt, text: (tr.krit ? "💥 " : "") + tr.schaden, farbe: tr.von === "gegner" ? "#ff6b81" : tr.krit ? "#ffd166" : "#ffffff", ziel: tr.von === "gegner" ? "held" : "gegner" })
    }
  }
  const heldBesiegt = !!k && !k.sieg && k.grund === "besiegt" && nach > 0
  const gegnerWeg = k && k.sieg && nach > 0 ? Math.min(1, nach / 0.6) : 0
  const rueckzug = k && !k.sieg && k.grund === "zeit" && nach > 0 ? nach * 120 : 0

  if (s.begleiter) begleiter(c, s.begleiter, heldX - 40 - rueckzug, boden, t, begleiterSchlag)
  held(c, heldX - rueckzug, boden, t, s, !!laeuft || rueckzug > 0, heldSchlag, heldGetroffen, heldBesiegt)
  if (!(k && k.sieg && nach > 1.2)) gegner(c, s.gegnerArt, s.boss, gegnerX - (k && k.sieg && nach > 0.6 ? (nach - 0.6) * 90 : 0), boden, t, gegnerSchlag, gegnerGetroffen, gegnerWeg)

  // Lebensbalken
  if (k && t >= LAUFZEIT - 0.3) {
    const balken = (x: number, y: number, wert: number, max: number, farbe: string, name: string) => {
      px(c, x, y, 110, 9, "#00000088")
      px(c, x + 1, y + 1, 108 * Math.max(0, wert / max), 7, farbe)
      c.fillStyle = "#fff"
      c.font = "600 11px system-ui, sans-serif"
      c.fillText(name, x, y - 4)
    }
    balken(12, 22, heldLeben, k.held.leben, "#5ee6c4", "Du")
    balken(B - 122, 22, gegnerLeben, k.gegner.leben, "#ff6b81", k.gegner.name)
    // Kampfuhr
    const rest = Math.max(0, Math.ceil(30 - Math.min(kampfZeit, dauer)))
    c.fillStyle = "#ffffffdd"
    c.font = "700 13px system-ui, sans-serif"
    c.textAlign = "center"
    c.fillText(rest + " s", B / 2, 31)
    c.textAlign = "left"
  }
  // Schadenszahlen
  for (const z of zahlen) {
    const x = z.ziel === "held" ? heldX + 10 : gegnerZiel + 15
    const y = boden - 80 - z.t * 40
    c.globalAlpha = 1 - z.t / 0.9
    c.fillStyle = z.farbe
    c.font = "800 16px system-ui, sans-serif"
    c.fillText(z.text, x, y)
    c.globalAlpha = 1
  }
  return !!k && nach > NACHLAUF
}
