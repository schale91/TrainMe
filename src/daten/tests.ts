// Beweglichkeits- und Stabilitätstests zum Selbermessen. Die Bewertung ist eine Orientierung aus Fachliteratur und dem
// öffentlich beschriebenen Screening des Titleist Performance Institute (TPI), keine Diagnose. Schwach bewertete
// Bereiche bekommen im Plan mehr Mobilitätsübungen.

import type { Muster } from "../logik/typen"

export type Bewertung = "gut" | "mittel" | "schwach"

export interface Stufe {
  wert: number
  text: string
}

export interface BeweglichkeitsTest {
  id: string
  name: string
  bereich: string
  /** cm, Grad, Sekunden oder Stufen zum Antippen */
  einheit: "cm" | "°" | "s" | "stufe"
  /** links und rechts getrennt messen */
  seiten: boolean
  /** Teil des Golf-Screenings */
  golf: boolean
  hilfsmittel: string
  anleitung: string[]
  /** Grenzen: ab gut gilt gut, unter schwach gilt schwach (bei hoeherBesser), sonst umgekehrt */
  gut: number
  schwach: number
  hoeherBesser: boolean
  /** Für einheit "stufe": Auswahl */
  stufen?: Stufe[]
  /** Was die Bewertung bedeutet */
  bedeutung: string
  /** Welche Mobilitätsmuster helfen */
  muster: Muster[]
  quelle: string
}

export const TESTS: BeweglichkeitsTest[] = [
  {
    id: "rumpfbeuge_sitz",
    name: "Rumpfbeuge im Sitzen",
    bereich: "Beinrückseite und unterer Rücken",
    einheit: "cm",
    seiten: false,
    golf: false,
    hilfsmittel: "Maßband oder Lineal, eine Wand",
    anleitung: [
      "Setz dich auf den Boden, Fußsohlen flach an eine Wand oder Kiste, Beine gestreckt und hüftbreit.",
      "Leg die Hände übereinander und schieb sie langsam und ohne Schwung so weit wie möglich nach vorn.",
      "Halte den weitesten Punkt zwei Sekunden. Die Knie bleiben gestreckt.",
      "Miss den Abstand der Fingerspitzen zu den Zehen: über die Zehen hinaus positiv, davor negativ.",
      "Mach zwei Versuche nach kurzem Aufwärmen und trag den besseren ein.",
    ],
    gut: 9,
    schwach: 0,
    hoeherBesser: true,
    bedeutung: "Unter 0 cm sind Beinrückseite und unterer Rücken eher eingeschränkt. Die Normen hängen von Alter und Geschlecht ab, dies ist eine Orientierung für junge bis mittlere Erwachsene.",
    muster: ["mobilitaet_beine", "mobilitaet_huefte"],
    quelle: "Canadian Standardized Test of Fitness, Sit-and-Reach (Nullpunkt der Kiste 26 cm, hier auf die Zehen umgerechnet)",
  },
  {
    id: "finger_boden",
    name: "Finger-Boden-Abstand",
    bereich: "Gesamte Rückseite",
    einheit: "cm",
    seiten: false,
    golf: true,
    hilfsmittel: "Maßband",
    anleitung: [
      "Stell dich barfuß hin, Füße zusammen, Knie gestreckt.",
      "Roll dich langsam nach vorn ab und lass die Arme hängen.",
      "Miss den Abstand von den Mittelfingerspitzen zum Boden. Berührst du den Boden, trag 0 ein.",
      "Morgens ist man steifer als abends: miss möglichst immer zur gleichen Tageszeit.",
    ],
    gut: 0,
    schwach: 10,
    hoeherBesser: false,
    bedeutung: "Boden berühren gilt als normal. Je größer der Abstand, desto eingeschränkter sind Beinrückseite, Gesäß und unterer Rücken.",
    muster: ["mobilitaet_beine", "mobilitaet_huefte"],
    quelle: "Perret et al. 2001, Archives of Physical Medicine and Rehabilitation (Zuverlässigkeit des Tests); TPI Toe Touch",
  },
  {
    id: "knie_wand",
    name: "Knie zur Wand",
    bereich: "Sprunggelenk",
    einheit: "cm",
    seiten: true,
    golf: false,
    hilfsmittel: "Maßband, Wand",
    anleitung: [
      "Stell dich in Schrittstellung vor eine Wand, der vordere Fuß zeigt gerade zur Wand.",
      "Schieb das vordere Knie zur Wand, ohne dass die Ferse abhebt.",
      "Rück den Fuß Stück für Stück nach hinten, bis das Knie die Wand gerade noch berührt.",
      "Miss den Abstand von der großen Zehe zur Wand.",
    ],
    gut: 12,
    schwach: 10,
    hoeherBesser: true,
    bedeutung: "Unter 10 cm gilt die Beweglichkeit im Sprunggelenk als eingeschränkt. Das kann tiefe Kniebeugen und Landungen erschweren.",
    muster: ["mobilitaet_sprunggelenk"],
    quelle: "Weight-Bearing Lunge Test: Pope et al. 1998, Hoch et al. 2012; Zuverlässigkeit: Powden, Hoch und Hoch 2015",
  },
  {
    id: "bws_rotation",
    name: "Rotation im Sitzen",
    bereich: "Brustwirbelsäule",
    einheit: "°",
    seiten: true,
    golf: true,
    hilfsmittel: "Stab oder Golfschläger, Klebeband für eine 45-Grad-Linie am Boden",
    anleitung: [
      "Kleb zwei Linien auf den Boden: eine gerade nach vorn, eine im 45-Grad-Winkel (Diagonale einer quadratischen Fliese).",
      "Setz dich auf einen Stuhl, Knie und Füße zusammen, und klemm einen Ball oder Kissen zwischen die Knie.",
      "Leg den Stab vorn über die Schultern und halte ihn mit überkreuzten Armen fest.",
      "Dreh den Oberkörper so weit wie möglich, die Hüfte bleibt ruhig. Schau, wo der Stab im Vergleich zur 45-Grad-Linie steht.",
      "Trag den Winkel ein: 45 heißt genau auf der Linie, darüber mehr.",
    ],
    gut: 45,
    schwach: 35,
    hoeherBesser: true,
    bedeutung: "Mindestens 45 Grad je Seite gelten im TPI-Screening als ausreichend. Weniger Rotation zwingt Hüfte, Lendenwirbelsäule oder Arme zum Ausgleichen.",
    muster: ["mobilitaet_bws"],
    quelle: "TPI Seated Trunk Rotation Test (mytpi.com); Messgenauigkeit: Johnson et al. 2012, Journal of Athletic Training",
  },
  {
    id: "becken_rotation",
    name: "Beckenrotation im Stand",
    bereich: "Hüfte",
    einheit: "°",
    seiten: true,
    golf: true,
    hilfsmittel: "Stab oder Golfschläger, Klebeband",
    anleitung: [
      "Stell dich in Ansprechhaltung auf eine gerade Linie, Füße schulterbreit.",
      "Halte einen Stab vor der Brust oder verschränk die Arme.",
      "Dreh das Becken nach links und rechts, während der Oberkörper möglichst stillsteht.",
      "Schätze den Winkel des Beckens zur Ausgangslinie, ein Helfer oder ein Handyfoto von oben hilft.",
    ],
    gut: 60,
    schwach: 45,
    hoeherBesser: true,
    bedeutung: "TPI nennt etwa 60 Grad je Seite als Ziel. Fehlt Hüftrotation, dreht oft die Lendenwirbelsäule mit.",
    muster: ["mobilitaet_huefte"],
    quelle: "TPI Lower Quarter Rotation Test (mytpi.com)",
  },
  {
    id: "huefte_innen",
    name: "Hüft-Innenrotation im Sitzen",
    bereich: "Hüfte",
    einheit: "°",
    seiten: true,
    golf: true,
    hilfsmittel: "Hohe Bank oder Tisch, Handy mit Winkelmesser-App oder Helfer",
    anleitung: [
      "Setz dich auf eine Tischkante, Oberschenkel waagerecht, Unterschenkel hängen senkrecht.",
      "Halte den Oberschenkel ruhig und dreh den Unterschenkel nach außen (der Fuß wandert nach außen, die Hüfte dreht nach innen).",
      "Miss den Winkel des Unterschenkels zur Senkrechten.",
      "Das Becken bleibt flach auf dem Tisch.",
    ],
    gut: 30,
    schwach: 20,
    hoeherBesser: true,
    bedeutung: "Lehrbuchwerte liegen bei etwa 30 bis 40 Grad. Beim Golf braucht vor allem die vordere Hüfte Innenrotation im Durchschwung.",
    muster: ["mobilitaet_huefte"],
    quelle: "Gelenkmessung nach Lehrbuchwerten (Physiotutors Assessment Book); Golfbezug: TPI",
  },
  {
    id: "huefte_aussen",
    name: "Hüft-Außenrotation im Sitzen",
    bereich: "Hüfte",
    einheit: "°",
    seiten: true,
    golf: false,
    hilfsmittel: "Hohe Bank oder Tisch, Winkelmesser-App",
    anleitung: [
      "Gleiche Ausgangsstellung wie bei der Innenrotation.",
      "Dreh den Unterschenkel nach innen (der Fuß wandert unter den Tisch).",
      "Miss den Winkel des Unterschenkels zur Senkrechten.",
    ],
    gut: 40,
    schwach: 30,
    hoeherBesser: true,
    bedeutung: "Lehrbuchwerte liegen bei etwa 40 bis 60 Grad.",
    muster: ["mobilitaet_huefte"],
    quelle: "Gelenkmessung nach Lehrbuchwerten (Physiotutors Assessment Book)",
  },
  {
    id: "beinheben",
    name: "Gestrecktes Beinheben",
    bereich: "Beinrückseite",
    einheit: "°",
    seiten: true,
    golf: false,
    hilfsmittel: "Helfer oder Gurt, Winkelmesser-App",
    anleitung: [
      "Leg dich auf den Rücken, beide Beine gestreckt.",
      "Ein Helfer hebt ein Bein gestreckt an (oder du ziehst es mit einem Gurt), das andere bleibt flach liegen.",
      "Stopp, wenn sich das Becken mitbewegt oder das Knie beugt.",
      "Miss den Winkel des Beins zum Boden.",
    ],
    gut: 80,
    schwach: 70,
    hoeherBesser: true,
    bedeutung: "Etwa 80 Grad gelten in der Praxis als normale Länge der Beinrückseite. Die Belege dafür sind eher schwach, sieh es als Orientierung.",
    muster: ["mobilitaet_beine"],
    quelle: "Klinische Praxiswerte (Lehrbücher der Physiotherapie)",
  },
  {
    id: "schulter_kratz",
    name: "Hände hinter dem Rücken",
    bereich: "Schulter",
    einheit: "cm",
    seiten: true,
    golf: false,
    hilfsmittel: "Lineal oder Maßband, Helfer",
    anleitung: [
      "Führ eine Hand über die Schulter den Rücken hinunter, die andere von unten den Rücken hinauf.",
      "Versuch, die Mittelfinger zusammenzubringen, ohne zu ziehen.",
      "Miss den Abstand der Mittelfinger: Lücke negativ, Überlappung positiv.",
      "Seite benannt nach der oberen Hand.",
    ],
    gut: 0,
    schwach: -10,
    hoeherBesser: true,
    bedeutung: "Für Erwachsene unter 60 gibt es keine gesicherten Normen. Wichtiger als der Wert ist der Unterschied zwischen links und rechts.",
    muster: ["mobilitaet_schulter"],
    quelle: "Back Scratch Test, Rikli und Jones (Senior Fitness Test), Normen nur für 60 bis 94 Jahre",
  },
  {
    id: "einbeinstand",
    name: "Einbeinstand mit geschlossenen Augen",
    bereich: "Gleichgewicht",
    einheit: "s",
    seiten: true,
    golf: true,
    hilfsmittel: "Stoppuhr, freier Platz neben einer Wand zum Abfangen",
    anleitung: [
      "Stell dich barfuß hin, Arme vor der Brust verschränkt.",
      "Heb ein Bein an, schließ die Augen und starte die Zeit.",
      "Stopp, sobald der Fuß aufsetzt, sich das Standbein verschiebt oder du die Augen öffnest.",
    ],
    gut: 25,
    schwach: 10,
    hoeherBesser: true,
    bedeutung: "TPI setzt mehr als 25 Sekunden je Bein als Ziel. Gleichgewicht hilft, im Schwung stabil über dem Ball zu bleiben.",
    muster: ["balance"],
    quelle: "TPI Single Leg Balance Test (mytpi.com)",
  },
  {
    id: "bruecke_bein",
    name: "Brücke mit Beinstreckung",
    bereich: "Gesäß und Rumpf",
    einheit: "s",
    seiten: true,
    golf: true,
    hilfsmittel: "Matte, Stoppuhr",
    anleitung: [
      "Leg dich auf den Rücken, Knie gebeugt, Arme vor der Brust.",
      "Heb das Becken zur Brücke, bis Knie, Hüfte und Schultern eine Linie bilden.",
      "Streck ein Knie, sodass die Oberschenkel parallel bleiben.",
      "Halte, solange das Becken nicht absinkt oder kippt.",
    ],
    gut: 10,
    schwach: 5,
    hoeherBesser: true,
    bedeutung: "10 Sekunden ohne Absinken gelten bei TPI als bestanden. Sinkt das Becken früher, fehlt Kraft im Gesäß oder Rumpf.",
    muster: ["hueftstreckung", "rumpf"],
    quelle: "TPI Bridge with Leg Extension Test (mytpi.com)",
  },
  {
    id: "hws_rotation",
    name: "Halswirbelsäule drehen",
    bereich: "Nacken",
    einheit: "stufe",
    seiten: true,
    golf: true,
    hilfsmittel: "Keins",
    anleitung: [
      "Steh aufrecht, Blick geradeaus, Schultern bleiben ruhig.",
      "Dreh den Kopf so weit wie möglich zur Seite, ohne den Kopf zu neigen.",
      "Prüf, wie weit das Kinn kommt.",
    ],
    gut: 2,
    schwach: 1,
    hoeherBesser: true,
    stufen: [
      { wert: 0, text: "Kinn kommt nicht über die Schulterlinie, oder es schmerzt" },
      { wert: 1, text: "Kinn knapp vor der Mitte des Schlüsselbeins" },
      { wert: 2, text: "Kinn erreicht die Mitte des Schlüsselbeins" },
    ],
    bedeutung: "Im Golfschwung muss der Kopf ruhig bleiben, während die Schultern drehen. Dafür braucht es Rotation im Nacken.",
    muster: ["mobilitaet_nacken"],
    quelle: "TPI Cervical Rotation Test (mytpi.com)",
  },
  {
    id: "kniebeuge_ueber_kopf",
    name: "Tiefe Kniebeuge mit Stab über Kopf",
    bereich: "Ganzkörper",
    einheit: "stufe",
    seiten: false,
    golf: true,
    hilfsmittel: "Stab oder Golfschläger",
    anleitung: [
      "Stell dich schulterbreit hin, Zehen leicht nach außen.",
      "Halte einen Stab mit gestreckten Armen über dem Kopf, etwa doppelt schulterbreit.",
      "Geh so tief wie möglich in die Kniebeuge, die Fersen bleiben am Boden, der Stab über dem Mittelfuß.",
    ],
    gut: 2,
    schwach: 1,
    hoeherBesser: true,
    stufen: [
      { wert: 0, text: "Oberschenkel kommen nicht unter die Waagerechte, oder die Fersen heben ab" },
      { wert: 1, text: "Tief, aber der Stab fällt nach vorn oder der Oberkörper kippt deutlich" },
      { wert: 2, text: "Tief mit aufrechtem Oberkörper, Stab bleibt über den Füßen" },
    ],
    bedeutung: "Zeigt in einer Bewegung, ob Sprunggelenk, Hüfte, Brustwirbelsäule und Schultern genug Spielraum haben.",
    muster: ["mobilitaet_sprunggelenk", "mobilitaet_huefte", "mobilitaet_bws", "mobilitaet_schulter"],
    quelle: "TPI Overhead Deep Squat Test (mytpi.com)",
  },
  {
    id: "schulter_9090",
    name: "Schulter-Außenrotation 90/90",
    bereich: "Schulter",
    einheit: "stufe",
    seiten: true,
    golf: true,
    hilfsmittel: "Spiegel oder Handyfoto von der Seite",
    anleitung: [
      "Stell dich in Ansprechhaltung, Oberkörper vorgeneigt.",
      "Heb einen Arm seitlich an, Oberarm waagerecht, Ellbogen 90 Grad gebeugt, wie oben im Rückschwung.",
      "Dreh den Unterarm so weit wie möglich nach hinten oben.",
      "Vergleich die Unterarmlinie mit der Linie deines Oberkörpers.",
    ],
    gut: 2,
    schwach: 1,
    hoeherBesser: true,
    stufen: [
      { wert: 0, text: "Unterarm bleibt deutlich vor der Senkrechten" },
      { wert: 1, text: "Unterarm etwa senkrecht" },
      { wert: 2, text: "Unterarm erreicht die Neigung des Oberkörpers oder geht darüber hinaus" },
    ],
    bedeutung: "Der rechte Arm (bei Rechtshändern) braucht diese Außenrotation oben im Rückschwung, sonst wird der Schwung flach oder kurz.",
    muster: ["mobilitaet_schulter"],
    quelle: "TPI 90/90 Test (mytpi.com)",
  },
  {
    id: "becken_kippen",
    name: "Becken kippen in Ansprechhaltung",
    bereich: "Becken und Lendenwirbelsäule",
    einheit: "stufe",
    seiten: false,
    golf: true,
    hilfsmittel: "Spiegel",
    anleitung: [
      "Geh in Ansprechhaltung, Hände vor der Brust gekreuzt.",
      "Mach im unteren Rücken ein Hohlkreuz (Becken nach vorn kippen), dann einen runden Rücken (Becken nach hinten kippen).",
      "Der Oberkörper soll dabei möglichst stillstehen.",
    ],
    gut: 2,
    schwach: 1,
    hoeherBesser: true,
    stufen: [
      { wert: 0, text: "Das Becken bewegt sich kaum oder nur zusammen mit dem Oberkörper" },
      { wert: 1, text: "Eine Richtung klappt, die andere kaum" },
      { wert: 2, text: "Beide Richtungen fließend und kontrolliert" },
    ],
    bedeutung: "Beckenkontrolle hilft, die Haltung im Schwung zu halten und den unteren Rücken zu entlasten.",
    muster: ["mobilitaet_huefte", "rumpf"],
    quelle: "TPI Pelvic Tilt Test (mytpi.com)",
  },
]

export function bewerte(t: BeweglichkeitsTest, wert: number): Bewertung {
  if (t.hoeherBesser) return wert >= t.gut ? "gut" : wert < t.schwach ? "schwach" : "mittel"
  return wert <= t.gut ? "gut" : wert > t.schwach ? "schwach" : "mittel"
}

export const testNach = (id: string) => TESTS.find((t) => t.id === id)
