// Bizeps- und Unterarmcurls mit Zielpunkten. Der Ellbogen bleibt neben dem Körper (bzw. am Oberschenkel, hinter dem
// Körper an der Schrägbank), der Unterarm dreht im Bogen nach oben: unten ist der Arm gestreckt, oben steht der
// Unterarm fast senkrecht. Geprüft mit werkzeuge/messen.html gegen werkzeuge/soll.ts.

import type { Dehnung, Haltung, Hilfsmittel, Winkel } from "../../logik/dehnbewegung"
import { B, folge, halte, wdh } from "./basis"
import { BAND, HAMMER, KH, KH_R, LH, OBERGRIFF, SZ, SZ_GRIFF, UNTERGRIFF } from "./kraftbasis"
import { koerper } from "./kraft_heben_arme"
import { OBERARM, SCHULTER_X, UNTERARM, type Ziele, rad } from "./ziele"

type P3 = [number, number, number]
const plus = (a: P3, b: P3, s = 1): P3 => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s]

interface Curl {
  /** Unterarm gegen den hängenden Oberarm (0 = gestreckt nach unten, 90 = waagerecht, 150 = fast senkrecht) */
  winkel: number
  /** Oberarm: Neigung nach vorn (+) bzw. hinten (-) im Rahmen der Schultern, Grad */
  oberarm?: number
  /** Hand weiter außen (+) oder innen (-) als der Ellbogen (Meter) */
  aussen?: number
  /** Hand zur Gegenseite (Kreuz-Hammercurl): Unterarm schräg nach innen */
  quer?: number
  /** Ellbogen etwas weiter außen am Rumpf (Meter) */
  ellAussen?: number
}
/** Ellbogen und Hand einer Seite im Rahmen der Schultern */
const curlPunkte = (c: Curl): { e: P3; h: P3 } => {
  const o = rad(c.oberarm ?? 4)
  const e: P3 = [SCHULTER_X + 0.03 + (c.ellAussen ?? 0), -Math.cos(o) * OBERARM, Math.sin(o) * OBERARM]
  const w = rad(c.winkel) + o
  const quer = rad(c.quer ?? 0)
  const d: P3 = [Math.sin(quer) * -1, -Math.cos(w) * Math.cos(quer), Math.sin(w) * Math.cos(quer)]
  const h = plus(plus(e, d, UNTERARM), [c.aussen ?? 0, 0, 0])
  return { e, h }
}
type Seiten = "beide" | "l" | "r"
const curlZiele = (c: Curl, seiten: Seiten, ziele: Ziele = {}): Ziele => {
  for (const sx of seiten === "beide" ? ([1, -1] as const) : seiten === "l" ? ([1] as const) : ([-1] as const)) {
    const n = sx === 1 ? "l" : "r"
    const p = curlPunkte(c)
    ziele[`ellbogen_${n}`] = { pos: [sx * p.e[0], p.e[1], p.e[2]], bezug: "schultern" }
    ziele[`hand_${n}`] = { pos: [sx * p.h[0], p.h[1], p.h[2]], bezug: "schultern" }
  }
  return ziele
}
const curlWinkel = (c: Curl, dreh: number): Winkel => ({ ...B("schulter", [c.oberarm ?? 4, 8, 0]), ...B("ellbogen", [c.winkel, dreh]) })
/** Haltung im Stand (bzw. vorgeneigt) mit einer oder beiden Seiten im Curl; die andere Seite bleibt unten */
const stand = (c: Curl, dreh: number, seiten: Seiten = "beide", vor = 2, unten: Curl = UNTEN, extra: Ziele = {}): Haltung => {
  const ziele: Ziele = { ...extra }
  curlZiele(c, seiten, ziele)
  if (seiten !== "beide") curlZiele(unten, seiten === "l" ? "r" : "l", ziele)
  const w = curlWinkel(c, dreh), wu = curlWinkel(unten, dreh)
  const arme: Winkel = seiten === "beide" ? w : seiten === "l" ? { schulter_l: w.schulter_l, ellbogen_l: w.ellbogen_l, schulter_r: wu.schulter_r, ellbogen_r: wu.ellbogen_r } : { schulter_r: w.schulter_r, ellbogen_r: w.ellbogen_r, schulter_l: wu.schulter_l, ellbogen_l: wu.ellbogen_l }
  return koerper("stand", vor, arme, ziele)
}
const UNTEN: Curl = { winkel: 4 }
const OBEN: Curl = { winkel: 148 }
const MITTE: Curl = { winkel: 90 }
const HOCH: [string, string] = ["Hochcurlen, die Ellbogen bleiben neben dem Körper", "In zwei bis drei Sekunden ganz ablassen"]
const curl = (unten: number, oben: number, hilfsmittel: Hilfsmittel[], extra: Partial<Dehnung> = {}, c: Curl = OBEN, u: Curl = UNTEN): Dehnung =>
  wdh("schraeg", stand(u, unten), stand(c, oben), 1.3, { aus: 2.4, halten: 0.5, texte: HOCH, hilfsmittel, ...extra })
/** Stange: Hände schulterbreit, unten vor den Oberschenkeln */
const STANGE_U: Curl = { winkel: 6, aussen: 0.02 }
const STANGE_O: Curl = { winkel: 146, aussen: 0.02 }
/** Kurzhantel im Untergriff: oben dreht der kleine Finger leicht nach außen */
const KH_O: Curl = { winkel: 148, aussen: 0.03 }

/** Cheat-Curl: kleiner Impuls aus Hüfte und Knien, oben wieder ganz aufgerichtet, streng absenken */
const cheat = (dreh: number, hilfsmittel: Hilfsmittel[], u: Curl, o: Curl): Dehnung => {
  const unten = stand(u, dreh)
  const impuls = { ...stand({ winkel: 40 }, dreh, "beide", 10), g: { ...stand({ winkel: 40 }, dreh, "beide", 10).g, ...B("huefte", [18, 6, 0]), ...B("knie", [16]) } }
  return folge("schraeg", [[unten, 0.8, "Knie leicht gebeugt, Bauch und Gesäß fest"], [impuls, 0.4, "Kurzer Impuls aus Hüfte und Knien"], [stand(o, dreh), 0.6, "Oben ganz aufrichten und stabilisieren"], [unten, 3.5, "Streng in drei bis vier Sekunden absenken"]], { hilfsmittel })
}
/** Zottman: im Untergriff hoch, oben in den Obergriff drehen und so absenken, unten zurückdrehen */
const zottman = (hoch: number, runter: number): Dehnung =>
  folge("schraeg", [[stand(UNTEN, hoch), 0.5, "Unten im Ausgangsgriff"], [stand(KH_O, hoch), 1.3, "Sauber hochcurlen"], [stand(KH_O, runter), 0.5, "Oben die Hände drehen"], [stand(UNTEN, runter), 3.0, "In drei Sekunden absenken"]], { hilfsmittel: KH })
/** 21er: sieben untere Hälften, sieben obere Hälften, sieben ganze Wiederholungen (je eine gezeigt) */
const curl21 = (): Dehnung => {
  const u = stand(STANGE_U, UNTERGRIFF), m = stand({ winkel: 90, aussen: 0.02 }, UNTERGRIFF), o = stand(STANGE_O, UNTERGRIFF)
  return folge("schraeg", [[u, 1.0, "Sieben Mal von unten bis die Unterarme waagerecht sind"], [m, 1.0], [o, 1.0, "Sieben Mal von der Mitte bis ganz oben"], [m, 1.0], [u, 1.2, "Sieben volle Wiederholungen"], [o, 1.4]], { hilfsmittel: LH })
}
/** Wechselnd: ein Arm curlt und dreht von neutral nach oben, erst wenn er unten ist, startet der andere */
const wechselnd = (): Dehnung => {
  const u = stand(UNTEN, HAMMER)
  return folge("schraeg", [[u, 0.6, "Beide Hanteln neutral"], [stand(KH_O, UNTERGRIFF, "l"), 1.2, "Links hoch, Handfläche zur Schulter drehen"], [u, 1.6, "Kontrolliert ablassen"], [stand(KH_O, UNTERGRIFF, "r"), 1.2, "Rechts hoch"], [u, 1.6, "Ablassen"]], { hilfsmittel: KH })
}
/** Drag Curl: die Ellbogen gehen nach hinten, die Stange gleitet am Körper hoch bis zum Bauchnabel */
const drag = (): Dehnung => {
  const ziele = (oben: boolean): Ziele => {
    const z: Ziele = {}
    for (const sx of [1, -1] as const) {
      const n = sx === 1 ? "l" : "r"
      const e: P3 = oben ? [0.17, -0.17, -0.12] : [SCHULTER_X + 0.03, -OBERARM, 0.02]
      const h: P3 = oben ? [0.17, -0.31, 0.11] : [0.17, -0.47, 0.1]
      z[`ellbogen_${n}`] = { pos: [sx * e[0], e[1], e[2]], bezug: "schultern" }
      z[`hand_${n}`] = { pos: [sx * h[0], h[1], h[2]], bezug: "schultern" }
    }
    return z
  }
  return wdh("schraeg", stand(STANGE_U, UNTERGRIFF), koerper("stand", 2, { ...B("schulter", [-35, 12, 0]), ...B("ellbogen", [110, UNTERGRIFF]) }, ziele(true)), 1.4, { aus: 2.0, halten: 0.5, texte: ["Ellbogen nach hinten, die Stange gleitet am Körper hoch", "Auf dem gleichen Weg langsam zurück"], hilfsmittel: LH })
}

export const KRAFT_CURLS: Record<string, Dehnung> = {
  bizeps_kh: curl(UNTERGRIFF, UNTERGRIFF, KH, {}, KH_O),
  bizeps_kh_wechselnd: wechselnd(),
  hammercurl: curl(HAMMER, HAMMER, KH, { texte: ["Hochcurlen, die Daumen bleiben oben", "In zwei bis drei Sekunden ablassen"] }),
  supinations_curl: curl(HAMMER, UNTERGRIFF, KH, { texte: ["Hochcurlen, ab der Hälfte die Handfläche nach oben drehen", "Langsam ablassen und zurück in den neutralen Griff"] }, KH_O),
  zottman_curl: zottman(UNTERGRIFF, OBERGRIFF),
  zottman_curl_invers: zottman(HAMMER, UNTERGRIFF),
  hammer_cheat_curl: cheat(HAMMER, KH, UNTEN, OBEN),
  langhantel_curl: curl(UNTERGRIFF, UNTERGRIFF, LH, {}, STANGE_O, STANGE_U),
  sz_curl_untergriff: curl(SZ_GRIFF, SZ_GRIFF, SZ, {}, STANGE_O, STANGE_U),
  sz_curl_obergriff: curl(OBERGRIFF, OBERGRIFF, SZ, { texte: ["Im Obergriff hochcurlen, Handgelenke gerade", "In zwei bis drei Sekunden ablassen"] }, STANGE_O, STANGE_U),
  curl_exzentrisch: curl(SZ_GRIFF, SZ_GRIFF, SZ, { ein: 1.2, halten: 1.0, aus: 4.5, texte: ["In normalem Tempo hochcurlen, oben eine Sekunde halten", "In vier bis fünf Sekunden absenken"] }, STANGE_O, STANGE_U),
  cheat_curl_langhantel: cheat(UNTERGRIFF, LH, STANGE_U, STANGE_O),
  bizeps_band: curl(UNTERGRIFF, UNTERGRIFF, BAND, { texte: ["Hochcurlen, die Ellbogen bleiben neben dem Körper", "Langsam ablassen, das Band bleibt gespannt"] }),
  kabel_curl_sz: curl(SZ_GRIFF, SZ_GRIFF, [...SZ, { art: "kabel", von: "haende", rolle: [0, 0.12, 0.55] }], {}, STANGE_O, STANGE_U),
  kabel_reverse_curl: curl(OBERGRIFF, OBERGRIFF, [{ art: "kabelstange", von: "hand_l", bis: "hand_r" }, { art: "kabel", von: "haende", rolle: [0, 0.12, 0.55] }], { texte: ["Im Obergriff hochcurlen, Handgelenke stabil", "Langsam ablassen, die Spannung bleibt"] }, STANGE_O, STANGE_U),
  hammercurl_seil: curl(HAMMER, HAMMER, [{ art: "kabel", von: "hand_l", rolle: [0, 0.12, 0.55] }, { art: "kabel", von: "hand_r", rolle: [0, 0.12, 0.55] }], { texte: ["Hochcurlen, die Seilenden oben leicht auseinander", "Langsam ablassen"] }, { winkel: 146, aussen: 0.04 }, { winkel: 6, aussen: -0.03 }),
  kabel_curl_einarmig: wdh("schraeg", stand({ winkel: 6, oberarm: 14 }, UNTERGRIFF, "r"), stand({ winkel: 140, oberarm: 14, aussen: 0.03 }, UNTERGRIFF, "r"), 1.3, { aus: 2.2, halten: 0.6, seiten: true, texte: ["Hochcurlen, den kleinen Finger leicht nach außen drehen", "Langsam bis zur vollen Streckung"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.15, 0.12, 0.6] }] }),
  bayesian_curl: wdh("schraeg", stand({ winkel: 6, oberarm: -22 }, UNTERGRIFF, "r", 8), stand({ winkel: 125, oberarm: -18 }, UNTERGRIFF, "r", 8), 1.3, { aus: 2.4, halten: 0.6, seiten: true, texte: ["Nach vorn oben curlen, der Oberarm bleibt hinter dem Körper", "Langsam zurück in die Dehnung"], hilfsmittel: [{ art: "kabel", von: "hand_r", rolle: [-0.15, 0.35, -0.75] }] }),
  hammercurl_kreuz: wdh("schraeg", stand(UNTEN, HAMMER, "r"), stand({ winkel: 130, quer: 35, ellAussen: -0.02 }, HAMMER, "r"), 1.3, { aus: 2.2, halten: 0.5, seiten: true, texte: ["Diagonal vor dem Körper zur Gegenschulter, Daumen oben", "Langsam auf dem gleichen Weg zurück"], hilfsmittel: KH_R }),
  curl_21er: curl21(),
  drag_curl: drag(),
  bizeps_isohold: halte("schraeg", stand(UNTEN, UNTERGRIFF), stand(MITTE, UNTERGRIFF), { texte: ["Bis die Unterarme waagerecht sind", "Ruhig halten, Oberarme an der Seite"], hilfsmittel: KH }),
}
