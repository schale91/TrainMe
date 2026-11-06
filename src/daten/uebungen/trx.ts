import type { Uebung } from "../../logik/typen"

// Schlingentrainer (TRX): Übungen, die es sonst nur mit anderem Gerät gibt. Befestigung an Tür, Wand, Decke oder
// Stange; die Schwierigkeit kommt über den Körperwinkel (je flacher bzw. weiter vom Ankerpunkt, desto schwerer).
const ANKER = "Befestige den Schlingentrainer sicher an Tür, Wandhaken, Decke oder Stange und prüfe die Befestigung vor dem ersten Satz."

export const TRX: Uebung[] = [
  {
    id: "trx_brustpresse",
    name: "Brustpresse am Schlingentrainer (TRX)",
    auch: ["TRX Chest Press", "Suspension Chest Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps"],
    sekundaer: ["schulter_vorn", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 1,
    schwerer: "liegestuetz_schlingentrainer",
    hinweis: "Mit dem Rücken zum Ankerpunkt: je weiter du dich nach vorn lehnst, desto schwerer.",
    info: {
      kurz: "Liegestütz im Stehen mit den Griffen des Schlingentrainers, der Körper lehnt schräg nach vorn. Die freien Griffe verlangen mehr Stabilität als der Boden, die Last ist über den Winkel stufenlos einstellbar.",
      ausfuehrung: [
        ANKER,
        "Stell dich mit dem Rücken zum Ankerpunkt, die Griffe in den Händen auf Brusthöhe, die Arme gestreckt.",
        "Geh mit den Füßen etwas nach hinten, bis der Körper schräg nach vorn lehnt und eine gerade Linie bildet.",
        "Beuge die Arme und senk die Brust zwischen die Griffe, die Ellbogen zeigen etwa 45 Grad schräg nach hinten.",
        "Drück dich wieder hoch, bis die Arme gestreckt sind, ohne dass die Griffe auseinanderdriften."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte knickt ein: Bauch und Gesäß anspannen.",
        "Griffe wandern nach außen: Hände unter Kontrolle auf Schulterbreite halten.",
        "Schultern ziehen zu den Ohren: Schulterblätter nach unten."
      ],
      vorteile: ["Brust- und Trizepstraining ohne Bank und Hanteln.", "Schult die Stabilität der Schultern.", "Schwierigkeit stufenlos über den Winkel."],
      tipps: ["Für mehr Last die Füße weiter nach hinten setzen.", "Unten kurz halten, dann kontrolliert hochdrücken."],
      varianten: "Leichter: aufrechter stehen. Schwerer: flacher lehnen oder Liegestütz mit den Füßen in den Schlaufen.",
      sicherheit: "Bei Schulterbeschwerden nur so tief, wie es schmerzfrei geht."
    }
  },
  {
    id: "trx_trizepsstrecken",
    name: "Trizepsstrecken am Schlingentrainer (TRX)",
    auch: ["TRX Triceps Press", "TRX Triceps Extension", "Suspension Skull Crusher"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["bauch", "schulter_vorn"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    hinweis: "Nur die Ellbogen beugen, die Oberarme bleiben in der Luft stehen.",
    info: {
      kurz: "Trizepsstrecken mit dem eigenen Körpergewicht: Der Körper lehnt schräg nach vorn, die Hände halten die Griffe über dem Kopf, und nur die Ellbogen beugen und strecken sich.",
      ausfuehrung: [
        ANKER,
        "Stell dich mit dem Rücken zum Ankerpunkt, greif die Griffe mit den Handflächen nach unten und streck die Arme auf Stirnhöhe nach vorn.",
        "Lehn dich nach vorn, bis der Körper eine schräge, gerade Linie bildet.",
        "Beuge nur die Ellbogen und lass den Kopf zwischen die Hände sinken, die Oberarme bleiben ruhig.",
        "Streck die Arme wieder, bis sie gerade sind."
      ],
      atmung: "Beim Beugen einatmen, beim Strecken ausatmen.",
      fehler: ["Oberarme sinken mit: Ellbogen auf einer Höhe halten.", "Hohlkreuz: Bauch und Gesäß anspannen.", "Zu flacher Winkel am Anfang: lieber aufrechter beginnen."],
      vorteile: ["Trizeps im gestreckten Schultergelenk, ohne Kabelzug oder Hantel.", "Rumpf arbeitet als Brett mit.", "Last stufenlos über den Körperwinkel einstellbar."],
      tipps: ["Die Ellbogen zeigen nach vorn, nicht zur Seite.", "Langsam beugen, zügig strecken."],
      varianten: "Leichter: aufrechter stehen. Schwerer: Füße weiter nach hinten.",
      sicherheit: "Bei Ellbogenbeschwerden zuerst sehr aufrecht beginnen."
    }
  },
  {
    id: "trx_face_pull",
    name: "Face Pull am Schlingentrainer (TRX)",
    auch: ["TRX Face Pull", "Suspension Face Pull"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "oberer_ruecken"],
    sekundaer: ["rotatorenmanschette", "trapez"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    hinweis: "Die Hände ziehen neben die Ohren, die Ellbogen bleiben hoch.",
    info: {
      kurz: "Ziehen zum Gesicht mit hohen Ellbogen und Außenrotation am Ende. Stärkt die hintere Schulter und die Außenrotatoren, ein Klassiker für gesunde Schultern.",
      ausfuehrung: [
        ANKER,
        "Stell dich mit dem Gesicht zum Ankerpunkt, greif die Griffe mit den Handflächen nach unten und lehn dich mit gestreckten Armen zurück.",
        "Zieh die Griffe zur Stirn, die Ellbogen gehen hoch und weit nach außen.",
        "Dreh am Ende die Hände nach hinten, sodass sie neben den Ohren stehen, und halte kurz.",
        "Lass dich kontrolliert zurück, bis die Arme gestreckt sind."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurücklassen einatmen.",
      fehler: ["Ellbogen fallen nach unten: auf Schulterhöhe halten.", "Hohlkreuz: Bauch anspannen, Körper gerade.", "Schwung aus der Hüfte: langsam ziehen."],
      vorteile: ["Gegengewicht zu viel Drücken.", "Kräftigt die Außenrotatoren der Schulter.", "Zu Hause ohne Kabelzug machbar."],
      tipps: ["Lieber aufrechter stehen und dafür sauber ziehen.", "Oben eine Sekunde halten."],
      varianten: "Leichter: aufrechter stehen. Schwerer: flacher lehnen.",
      sicherheit: "Bei Schulterbeschwerden ohne Schmerz arbeiten."
    }
  },
  {
    id: "trx_power_pull",
    name: "Power Pull am Schlingentrainer (TRX)",
    auch: ["TRX Power Pull", "Einarmiges Rudern mit Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["oberer_ruecken", "schraege_bauch"],
    sekundaer: ["latissimus", "bizeps", "schulter_hinten"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    hinweis: "Die freie Hand öffnet sich nach hinten, der Oberkörper dreht mit.",
    info: {
      kurz: "Einarmiges Rudern mit Drehung des Oberkörpers: Unten zeigt die freie Hand zum Ankerpunkt, oben öffnet sich der Oberkörper. Verbindet Ziehen mit Rumpfrotation.",
      ausfuehrung: [
        ANKER,
        "Kürze den Schlingentrainer auf einen Griff oder halte beide Griffe in einer Hand und stell dich mit dem Gesicht zum Ankerpunkt.",
        "Lehn dich mit gestrecktem Arm zurück, der Oberkörper ist zur freien Seite aufgedreht, die freie Hand zeigt nach hinten unten.",
        "Dreh den Oberkörper zum Ankerpunkt und zieh dabei den Griff zur Brust.",
        "Die freie Hand greift oben nach vorn zum Ankerpunkt, dann kontrolliert zurück in die Drehung."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückdrehen einatmen.",
      fehler: ["Hüfte dreht stark mit: Becken zeigt zum Ankerpunkt.", "Schulter zieht hoch: Schulterblatt nach unten.", "Zu schnell zurück: Bewegung bremsen."],
      vorteile: ["Rücken und schräge Bauchmuskeln in einer Bewegung.", "Überträgt Kraft aus dem Rumpf in den Arm, nützlich für Wurf- und Schlagsport.", "Schult die Beweglichkeit der Brustwirbelsäule in der Drehung."],
      tipps: ["Füße hüftbreit für einen stabilen Stand.", "Erst langsam, dann zügiger ziehen."],
      varianten: "Leichter: aufrechter stehen. Schwerer: flacher lehnen.",
      sicherheit: "Bei Rückenbeschwerden die Drehung klein halten."
    }
  },
  {
    id: "trx_atomic_liegestuetz",
    name: "Atomic-Liegestütz am Schlingentrainer (TRX)",
    auch: ["TRX Atomic Push-up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "bauch"],
    sekundaer: ["trizeps", "schulter_vorn", "hueftbeuger"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 3,
    hinweis: "Erst ein Liegestütz, dann die Knie zur Brust: der Rücken bleibt dabei rund und stabil.",
    info: {
      kurz: "Liegestütz mit den Füßen in den Schlaufen, danach die Knie zur Brust ziehen. Fordert Brust, Arme und den ganzen Rumpf.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein, setz die Füße hinein und geh in den Liegestütz.",
        "Mach einen sauberen Liegestütz, der Körper bleibt gerade.",
        "Zieh oben die Knie zur Brust, der Rücken rundet sich leicht.",
        "Streck die Beine wieder und beginn den nächsten Liegestütz."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken und Knieanziehen ausatmen.",
      fehler: ["Hüfte hängt durch: Bauch anspannen.", "Schaukeln: langsam und kontrolliert.", "Hände zu weit vorn: unter den Schultern aufsetzen."],
      vorteile: ["Oberkörper und Rumpf in einer Übung.", "Sehr fordernd für die Stabilität.", "Spart Zeit, weil zwei Übungen in einer stecken."],
      tipps: ["Erst die beiden Teile einzeln üben: Liegestütz und Knieanziehen.", "Lieber wenige saubere Wiederholungen."],
      varianten: "Leichter: nur Knieanziehen oder Liegestütz auf den Knien. Schwerer: Pike statt Knieanziehen.",
      sicherheit: "Bei Handgelenks- oder Schulterbeschwerden auslassen."
    }
  },
  {
    id: "trx_knieanziehen",
    name: "Knieanziehen am Schlingentrainer (TRX)",
    auch: ["TRX Knee Tuck", "TRX Crunch", "Suspension Knee Tuck"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schulter_vorn", "schraege_bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    hinweis: "Becken rollt nach oben ein, die Schultern bleiben über den Händen.",
    info: {
      kurz: "Aus dem Liegestütz mit den Füßen in den Schlaufen die Knie zur Brust ziehen. Kräftigt die Bauchmuskeln aus der stabilen Stützposition.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein, setz die Füße hinein und geh in den hohen Liegestütz.",
        "Zieh die Knie zur Brust, das Becken rollt dabei ein.",
        "Halte kurz und streck die Beine wieder, bis der Körper gerade ist."
      ],
      atmung: "Beim Anziehen ausatmen, beim Strecken einatmen.",
      fehler: ["Hohlkreuz beim Strecken: Bauch fest.", "Schultern wandern nach hinten: über den Händen halten.", "Füße schwingen: langsam arbeiten."],
      vorteile: ["Bauchtraining ohne Belastung der Halswirbelsäule.", "Stärkt Schultern und Rumpf zugleich.", "Leicht zu steigern über Pike oder einbeinig."],
      tipps: ["Erst aus dem Unterarmstütz üben, wenn die Handgelenke stören.", "Oben kurz halten, dann langsam strecken."],
      varianten: "Leichter: im Unterarmstütz. Schwerer: Pike mit gestreckten Beinen oder einbeinig.",
      sicherheit: "Bei Rückenbeschwerden nur so weit strecken, dass kein Hohlkreuz entsteht."
    }
  },
  {
    id: "trx_bergsteiger",
    name: "Bergsteiger am Schlingentrainer (TRX)",
    auch: ["TRX Mountain Climber", "Suspension Mountain Climber"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schulter_vorn", "herz_kreislauf"],
    geraete: [["schlingentrainer"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    hinweis: "Abwechselnd ein Knie zur Brust, das Becken bleibt ruhig auf einer Höhe.",
    info: {
      kurz: "Im Liegestütz mit den Füßen in den Schlaufen abwechselnd die Knie zur Brust ziehen. Bauch und Schultern arbeiten gegen das Schaukeln.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein, setz die Füße hinein und geh in den hohen Liegestütz.",
        "Zieh das rechte Knie zur Brust und streck es wieder.",
        "Dann das linke Knie, im gleichmäßigen Wechsel.",
        "Das Becken bleibt auf einer Höhe, die Schultern über den Händen."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: ["Becken springt hoch: kleiner und langsamer.", "Hüfte hängt durch: Bauch anspannen.", "Schultern wandern nach hinten: über den Händen halten."],
      vorteile: ["Rumpfkraft und Puls in einer Übung.", "Gut als Abschluss oder im Zirkel.", "Die freien Füße fordern mehr Stabilität als am Boden."],
      tipps: ["Erst langsam, dann schneller werden.", "Zeit statt Wiederholungen zählen, etwa 20 bis 30 Sekunden."],
      varianten: "Leichter: langsamer, kleinere Bewegung. Schwerer: schneller oder Knie schräg zum Ellbogen.",
      sicherheit: "Bei Handgelenksbeschwerden auf Fäusten oder Griffen stützen."
    }
  },
  {
    id: "trx_unterarmstuetz",
    name: "Unterarmstütz am Schlingentrainer (TRX)",
    auch: ["TRX Plank", "Suspension Plank"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "schulter_vorn", "gesaess"],
    geraete: [["schlingentrainer"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    hinweis: "Füße in den Schlaufen, Körper vom Kopf bis zu den Fersen gerade.",
    info: {
      kurz: "Unterarmstütz mit den Füßen in den Schlaufen. Durch die freien Füße arbeitet der Rumpf deutlich mehr als am Boden.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein und setz die Füße hinein.",
        "Stütz dich auf die Unterarme, die Ellbogen unter den Schultern.",
        "Heb das Becken, bis der Körper gerade ist, und halte die Position."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: ["Hüfte zu hoch oder zu tief: gerade Linie.", "Kopf hängt: Blick zum Boden zwischen die Hände.", "Luft anhalten: ruhig weiteratmen."],
      vorteile: ["Rumpfstabilität mit Steigerung über die freien Füße.", "Schont den Rücken im Vergleich zu Sit-ups.", "Kurze Sätze reichen, gut ans Ende einer Einheit."],
      tipps: ["Gesäß anspannen, dann bleibt der Rücken gerade.", "Lieber kürzer halten und dafür sauber."],
      varianten: "Leichter: Knie am Boden. Schwerer: im hohen Stütz oder ein Bein heben.",
      sicherheit: "Bei Rückenbeschwerden Hohlkreuz vermeiden."
    }
  },
  {
    id: "trx_seitstuetz",
    name: "Seitstütz am Schlingentrainer (TRX)",
    auch: ["TRX Side Plank", "Suspension Side Plank"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["gesaess_mittel", "bauch", "adduktoren"],
    geraete: [["schlingentrainer"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    hinweis: "Füße übereinander in den Schlaufen, das Becken hoch.",
    info: {
      kurz: "Seitstütz mit den Füßen in den Schlaufen. Die seitliche Rumpfmuskulatur hält das Becken gegen die freie Aufhängung.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein und setz die Füße hinein.",
        "Dreh dich auf die Seite, der Ellbogen steht unter der Schulter, die Füße liegen hintereinander.",
        "Heb das Becken, bis der Körper eine gerade Linie bildet, und halte die Position.",
        "Danach die Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: ["Becken sinkt ab: Gesäß anspannen.", "Oberkörper kippt nach vorn: Brust offen halten.", "Schulter sackt ein: aktiv vom Boden wegdrücken."],
      vorteile: ["Kräftigt die seitlichen Bauchmuskeln und die Hüfte.", "Steigerung zum Seitstütz am Boden.", "Stabilisiert die Wirbelsäule gegen seitliches Einknicken."],
      tipps: ["Die freie Hand an die Hüfte legen.", "Beide Seiten gleich lang halten."],
      varianten: "Leichter: Seitstütz am Boden. Schwerer: oberes Bein abspreizen.",
      sicherheit: "Bei Schulterbeschwerden auslassen."
    }
  },
  {
    id: "trx_beinbeuger",
    name: "Beinbeuger am Schlingentrainer (TRX)",
    auch: ["TRX Hamstring Curl", "Suspension Leg Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "waden"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    hinweis: "Becken bleibt oben, die Fersen ziehen zum Gesäß.",
    info: {
      kurz: "In Rückenlage mit den Fersen in den Schlaufen das Becken heben und die Fersen zum Gesäß ziehen. Kräftigt die Beinbeuger in der Kniebeugung ohne Maschine.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein, leg dich auf den Rücken und setz die Fersen hinein.",
        "Heb das Becken, bis der Körper von den Schultern bis zu den Fersen gerade ist.",
        "Zieh die Fersen zum Gesäß, das Becken bleibt dabei oben.",
        "Streck die Beine kontrolliert wieder, ohne das Becken abzulegen."
      ],
      atmung: "Beim Anziehen ausatmen, beim Strecken einatmen.",
      fehler: ["Becken sinkt beim Strecken: Gesäß fest.", "Zu schnell strecken: den Weg zurück bremsen.", "Füße rutschen aus den Schlaufen: Fersen tief hineinsetzen."],
      vorteile: ["Beinbeuger und Gesäß ohne Maschine.", "Gut zur Vorbeugung von Zerrungen der hinteren Oberschenkel.", "Trainiert die Beinbeuger an Knie und Hüfte zugleich."],
      tipps: ["Die Arme liegen seitlich am Boden und stabilisieren.", "Langsam strecken, das ist der wirksamste Teil."],
      varianten: "Leichter: Becken zwischen den Wiederholungen ablegen. Schwerer: einbeinig.",
      sicherheit: "Bei Krämpfen in der Wade kurz pausieren."
    }
  },
  {
    id: "trx_beckenheben",
    name: "Beckenheben am Schlingentrainer (TRX)",
    auch: ["TRX Hip Press", "TRX Glute Bridge", "Suspension Hip Bridge"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["ruecken_unten", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 1,
    hinweis: "Fersen in den Schlaufen, Becken hoch bis zur geraden Linie.",
    info: {
      kurz: "Beckenheben in Rückenlage mit den Fersen in den Schlaufen. Die freien Füße machen die Übung für Gesäß und Beinbeuger fordernder als am Boden.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein, leg dich auf den Rücken und setz die Fersen hinein, die Knie leicht gebeugt.",
        "Drück die Fersen nach unten und heb das Becken, bis Knie, Hüfte und Schultern eine Linie bilden.",
        "Halte oben kurz und senk das Becken langsam ab."
      ],
      atmung: "Beim Heben ausatmen, beim Senken einatmen.",
      fehler: ["Hohlkreuz oben: Bauch anspannen, Rippen unten.", "Becken kippt zur Seite: beide Fersen gleich drücken.", "Zu schnell absenken: langsam zurück."],
      vorteile: ["Gesäß und Beinbeuger ohne Gewichte.", "Schult die Stabilität der Hüfte.", "Guter Einstieg vor Beinbeuger und Hamstring Runner."],
      tipps: ["Oben bewusst das Gesäß anspannen.", "Die Arme seitlich am Boden geben Halt."],
      varianten: "Leichter: Füße am Boden. Schwerer: einbeinig oder mit Beinbeuger kombiniert.",
      sicherheit: "Bei Rückenbeschwerden nicht ins Hohlkreuz drücken."
    }
  },
  {
    id: "trx_ausfallschritt_rueck",
    name: "Ausfallschritt rückwärts mit Halt am Schlingentrainer (TRX)",
    auch: ["TRX Reverse Lunge", "TRX Balance Lunge", "Assisted Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["beinbeuger", "adduktoren"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    einseitig: true,
    hinweis: "Die Griffe geben nur Halt, die Kraft kommt aus dem vorderen Bein.",
    info: {
      kurz: "Ausfallschritt nach hinten, die Hände halten die Griffe. Der Halt erlaubt eine tiefe, aufrechte Position und ist ein guter Einstieg in einbeinige Übungen.",
      ausfuehrung: [
        ANKER,
        "Stell dich mit dem Gesicht zum Ankerpunkt, die Griffe in den Händen auf Brusthöhe, die Arme leicht gebeugt.",
        "Mach einen großen Schritt nach hinten und senk das hintere Knie Richtung Boden.",
        "Das vordere Knie bleibt über dem Fuß, der Oberkörper aufrecht.",
        "Drück dich über die Ferse des vorderen Beins zurück in den Stand."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: ["Mit den Armen hochziehen: Griffe nur zum Gleichgewicht.", "Vorderes Knie fällt nach innen: über den mittleren Zehen halten.", "Oberkörper kippt nach vorn: aufrecht bleiben."],
      vorteile: ["Einbeinige Kraft mit Sicherheit beim Gleichgewicht.", "Gut für Einsteiger und nach Verletzungen.", "Erlaubt mehr Tiefe als ohne Halt."],
      tipps: ["Erst eine Seite komplett, dann die andere.", "Der Schritt ist so lang, dass beide Knie unten etwa 90 Grad haben."],
      varianten: "Leichter: kleinerer Schritt. Schwerer: hinterer Fuß in der Schlaufe (Split-Kniebeuge) oder ohne Halt.",
      sicherheit: "Bei Kniebeschwerden nur so tief wie schmerzfrei."
    }
  },
  {
    id: "trx_sprungkniebeuge",
    name: "Sprungkniebeuge mit Halt am Schlingentrainer (TRX)",
    auch: ["TRX Jump Squat", "TRX Squat Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["waden", "herz_kreislauf"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    hinweis: "Weich landen und direkt in die nächste Kniebeuge abfedern.",
    info: {
      kurz: "Kniebeuge mit explosivem Sprung, die Hände halten die Griffe. Der Halt hilft bei Landung und Gleichgewicht, so lässt sich Sprungkraft sicher trainieren.",
      ausfuehrung: [
        ANKER,
        "Stell dich mit dem Gesicht zum Ankerpunkt, die Griffe in den Händen, die Arme leicht gebeugt, die Füße schulterbreit.",
        "Geh in die Kniebeuge, das Gewicht auf den ganzen Füßen.",
        "Spring explosiv nach oben, die Arme ziehen leicht mit.",
        "Lande weich auf den Fußballen und federe direkt in die nächste Kniebeuge."
      ],
      atmung: "Beim Absenken einatmen, beim Absprung ausatmen.",
      fehler: ["Harte Landung: Knie und Hüfte federn.", "Knie fallen nach innen: über den Zehen halten.", "Mit den Armen hochziehen: Griffe nur zur Sicherheit."],
      vorteile: ["Sprungkraft mit Sicherheit beim Landen.", "Gut zum Aufwärmen vor Sprint und Sport.", "Schult eine saubere Landung."],
      tipps: ["Wenige, dafür maximale Sprünge, und zwischen den Sätzen voll erholen.", "Leise landen ist das Ziel."],
      varianten: "Leichter: nur auf die Zehen hochdrücken. Schwerer: ohne Halt oder einbeinig.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden auslassen. Raumhöhe beachten."
    }
  },
  {
    id: "trx_hamstring_runner",
    name: "Hamstring Runner am Schlingentrainer (TRX)",
    auch: ["TRX Hamstring Runner"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 3,
    einseitig: true,
    hinweis: "Becken oben, die Beine laufen abwechselnd: eins zieht, eins streckt.",
    info: {
      kurz: "Wie der Beinbeuger am Schlingentrainer, aber abwechselnd: ein Bein zieht die Ferse zum Gesäß, das andere streckt sich. Fordert die Beinbeuger einzeln und schult die Beckenstabilität.",
      ausfuehrung: [
        ANKER,
        "Stell die Schlaufen auf etwa 30 cm über dem Boden ein, leg dich auf den Rücken und setz die Fersen hinein.",
        "Heb das Becken, bis der Körper gerade ist.",
        "Zieh die rechte Ferse zum Gesäß, während das linke Bein gestreckt bleibt.",
        "Wechsle im gleichmäßigen Rhythmus, das Becken bleibt dabei oben und ruhig."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: ["Becken dreht oder sinkt: langsamer laufen.", "Schwung aus dem Rücken: Bauch anspannen.", "Beine strecken nicht ganz: volle Bewegung."],
      vorteile: ["Beinbeuger einzeln, nah an der Laufbewegung.", "Vorbeugung gegen Zerrungen.", "Fordert die Stabilität von Becken und Rumpf."],
      tipps: ["Erst den beidbeinigen Beinbeuger sicher beherrschen.", "Wiederholungen je Bein zählen."],
      varianten: "Leichter: beidbeinig. Schwerer: schneller oder mit Halt oben.",
      sicherheit: "Bei frischen Zerrungen der Beinbeuger auslassen."
    }
  }
]
