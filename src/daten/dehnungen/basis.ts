// Animierte Dehnungen und Beweglichkeitstests für die Dehnfigur. Jede Übung: Ausgangshaltung, Zielhaltung, Art und
// Tempo. Haltezeiten bei statischen Dehnungen kommen aus der Vorgabe des Plans (sonst 30 s). Dynamische Übungen
// laufen im Tempo der Anleitung (kontrolliert, meist 2 bis 3 Sekunden je Richtung).
//
// Winkel im Raum (Seitenansicht, 0 = nach unten, positiv = nach vorn):
//   Rumpfneigung N = Becken + LWS + BWS; Arm = Schulterbeugung - N; Oberschenkel = Hüftbeugung - Beckenkippung;
//   Unterschenkel = Oberschenkel - Kniebeugung; Fuß = Unterschenkel + 90 + Anziehen (90 = flach nach vorn).

import { mit, type Dehnung, type Haltung, type Schritt, type Winkel } from "../../logik/dehnbewegung"

export const H = (g: Winkel, dreh?: [number, number, number], extra: Partial<Haltung> = {}): Haltung => ({ g, ...(dreh ? { dreh } : {}), ...extra })
/** Beide Seiten gleich */
export const B = (name: "schulter" | "ellbogen" | "hand" | "huefte" | "knie" | "fuss" | "zehen" | "schulterblatt" | "finger", w: number[]): Winkel => ({ [name + "_l"]: w, [name + "_r"]: w })

// ---------------------------------------------------------------- Grundhaltungen
export const ARME_LOCKER: Winkel = { ...B("schulter", [0, 7, 0]), ...B("ellbogen", [10, 0]) }
export const ARME_VERSCHRAENKT: Winkel = { ...B("schulter", [40, -15, -60]), ...B("ellbogen", [100, 80]) }
export const STAND: Haltung = H({ ...ARME_LOCKER, ...B("huefte", [0, 3, 0]) })
export const HUEFTBREIT: Winkel = B("huefte", [0, 6, 0])
export const LANGSITZ: Haltung = H({ ...B("huefte", [90, 4, 0]), ...B("schulter", [10, 25, 0]), ...B("ellbogen", [5, 0]), ...B("fuss", [5, 0]) })
export const VIERFUESSLER: Haltung = H({ ...B("huefte", [90, 3, 0]), ...B("knie", [90]), ...B("fuss", [-45, 0]), ...B("schulter", [90, 3, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [85, 0]), hals: [-10, 0, 0] }, [90, 0, 0])
export const RUECKENLAGE: Haltung = H({ ...B("schulter", [0, 12, 0]), ...B("fuss", [-25, 0]) }, [-90, 0, 0])
/** Rückenlage, Knie gebeugt, Füße aufgestellt */
export const RUECKENLAGE_AUF: Haltung = H({ ...B("schulter", [0, 12, 0]), ...B("huefte", [60, 4, 0]), ...B("knie", [100]), ...B("fuss", [10, 0]) }, [-90, 0, 0])
export const BAUCHLAGE: Haltung = H({ ...B("schulter", [170, 30, 0]), ...B("ellbogen", [110, 90]), ...B("fuss", [-70, 0]), hals: [-5, 0, 0] }, [90, 0, 0])
/** Sitz auf Stuhl oder Bank (Sitzhöhe 0,42 m) */
export const STUHLSITZ: Haltung = H({ ...B("huefte", [90, 5, 0]), ...B("knie", [90]), ...B("schulter", [15, 10, 0]), ...B("ellbogen", [60, 60]) }, undefined, { pos: [0, 0.5, 0], boden: false })
export const KNIESTAND: Haltung = H({ ...B("huefte", [0, 4, 0]), ...B("knie", [90]), ...B("fuss", [-80, 0]), ...ARME_LOCKER })
/** Halber Kniestand: links hinten auf dem Knie, rechts vorn aufgestellt */
export const HALBKNIESTAND: Haltung = H({ huefte_l: [-5, 4, 0], knie_l: [85], fuss_l: [-80, 0], huefte_r: [90, 4, 0], knie_r: [90], fuss_r: [0, 0], ...ARME_LOCKER })
export const FERSENSITZ: Haltung = H({ ...B("huefte", [75, 4, 0]), ...B("knie", [165]), ...B("fuss", [-85, 0]), ...B("schulter", [10, 8, 0]), ...B("ellbogen", [40, 60]) })
export const HOCKE: Haltung = H({ ...B("huefte", [130, 18, -15]), ...B("knie", [140]), ...B("fuss", [40, 0]), ...B("schulter", [70, 10, 0]), ...B("ellbogen", [70, 60]), bws: [5, 0, 0] }, [30, 0, 0])
/** Ansprechhaltung / athletische Grundstellung: Oberkörper vorgeneigt, Knie leicht gebeugt */
export const ATHLETISCH: Haltung = H({ ...B("huefte", [45, 6, 0]), ...B("knie", [20]), ...B("fuss", [20, 0]), ...ARME_VERSCHRAENKT, hals: [-25, 0, 0] }, [35, 0, 0])

export { mit }

/** Seitlage auf der linken Seite, Hüfte und Knie 90 Grad gebeugt, Arme vor der Brust */
export const SEITLAGE: Haltung = H({ ...B("huefte", [90, 0, 0]), ...B("knie", [90]), ...B("schulter", [90, 0, 0]), ...B("ellbogen", [5, 0]), hals: [0, 15, 0] }, [0, 0, 90])
export const SCHNEIDERSITZ: Haltung = H({ ...B("huefte", [85, 40, -55]), ...B("knie", [125]), ...B("schulter", [20, 15, 0]), ...B("ellbogen", [50, 80]) })
/** Hoher Stütz (Liegestütz-Position) */
export const PLANK: Haltung = H({ ...B("schulter", [78, 4, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), ...B("fuss", [-22, 0]), ...B("zehen", [60]), hals: [-5, 0, 0] }, [78, 0, 0])
export const CHATURANGA: Haltung = H({ ...B("schulter", [20, 10, 0]), ...B("ellbogen", [90, 90]), ...B("hand", [80, 0]), ...B("fuss", [-12, 0]), ...B("zehen", [60]) }, [90, 0, 0])
/** Heraufschauender Hund */
export const HUND_HOCH: Haltung = H({ ...B("huefte", [-28, 4, 0]), ...B("fuss", [-80, 0]), ...B("schulter", [22, 6, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [80, 0]), lws: [-25, 0, 0], bws: [-20, 0, 0], hals: [-15, 0, 0] }, [60, 0, 0])
/** Herabschauender Hund */
export const HUND: Haltung = H({ ...B("huefte", [80, 4, 0]), ...B("fuss", [20, 0]), ...B("schulter", [178, 8, 0]), ...B("ellbogen", [0, 90]), ...B("hand", [45, 0]), lws: [10, 0, 0], bws: [5, 0, 0] }, [120, 0, 0])
/** Vorbeuge im Stand, Hände Richtung Boden */
export const VORBEUGE: Haltung = H({ ...B("huefte", [72, 2, 0]), lws: [22, 0, 0], bws: [18, 0, 0], hals: [15, 0, 0], ...B("schulter", [112, 4, 0]), ...B("ellbogen", [0, 0]) }, [72, 0, 0])
export const HALB_HOCH: Haltung = H({ ...B("huefte", [60, 2, 0]), lws: [-5, 0, 0], ...B("schulter", [62, 4, 0]), ...B("ellbogen", [0, 0]), hals: [-10, 0, 0] }, [60, 0, 0])
export const ARME_HOCH: Haltung = H({ ...B("schulter", [175, 10, 0]), ...B("ellbogen", [0, 90]), ...B("huefte", [0, 3, 0]), bws: [-10, 0, 0], hals: [-10, 0, 0] })
/** Stuhlhaltung */
export const STUHL_HALTUNG: Haltung = H({ ...B("huefte", [80, 3, 0]), ...B("knie", [70]), ...B("fuss", [20, 0]), ...B("schulter", [175, 8, 0]), ...B("ellbogen", [0, 90]) }, [30, 0, 0])
/** Ausfallschritt, links vorn, hinteres Bein gestreckt auf den Zehen */
export const AUSFALL: Haltung = H({ huefte_l: [80, 4, 0], knie_l: [90], fuss_l: [10, 0], huefte_r: [-30, 4, 0], knie_r: [5], fuss_r: [-35, 0], zehen_r: [50], ...ARME_LOCKER })

export const halte = (ansicht: Dehnung["ansicht"], start: Haltung, ziel: Haltung, extra: Partial<Dehnung> = {}): Dehnung => ({ ansicht, art: "halten", start, ziel, ...extra })
export const wdh = (ansicht: Dehnung["ansicht"], start: Haltung, ziel: Haltung, ein: number, extra: Partial<Dehnung> = {}): Dehnung => ({ ansicht, art: "wdh", start, ziel, ein, ...extra })
/** Abfolge: [Haltung, Sekunden, Text, halten] */
export const folge = (ansicht: Dehnung["ansicht"], schritte: [Haltung, number, string?, boolean?][], extra: Partial<Dehnung> = {}): Dehnung => ({
  ansicht,
  art: "folge",
  start: schritte[schritte.length - 1][0],
  schritte: schritte.map(([h, s, text, halten]): Schritt => ({ h, s, ...(text ? { text } : {}), ...(halten ? { halten } : {}) })),
  ...extra,
})
/** Anspannen und Entspannen (PNF): hinein, halten, 6 s anspannen, lösen und tiefer, halten */
export const pnf = (ansicht: Dehnung["ansicht"], start: Haltung, ziel: Haltung, tiefer: Haltung, extra: Partial<Dehnung> = {}): Dehnung =>
  folge(ansicht, [[start, 1.5, "Ausgangsstellung", true], [ziel, 4, "Langsam hinein"], [ziel, 10, "Halten", true], [ziel, 6, "Anspannen gegen den Widerstand", true], [tiefer, 3, "Lösen, tiefer gehen"], [tiefer, 20, "Halten, ruhig atmen", true], [start, 3, "Lösen"]], extra)
