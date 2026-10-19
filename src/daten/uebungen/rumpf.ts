import type { Uebung } from "../../logik/typen"

// Rumpf: Anti-Extension, Anti-Lateralflexion, Anti-Rotation, Flexion und Rotation (allgemeine Varianten).
export const RUMPF: Uebung[] = [
  // ---------- Stütz-Varianten (Anti-Extension) ----------
  {
    id: "unterarmstuetz",
    name: "Unterarmstütz",
    auch: ["Plank", "Front Plank", "Forearm Plank", "Planke"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "schulter_vorn", "gesaess", "quadrizeps"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "unterarmstuetz_lang",
    info: {
      kurz: "Der Klassiker für einen stabilen Rumpf: Du hältst den Körper auf Unterarmen und Zehen in einer geraden Linie. Die Übung trainiert vor allem die Fähigkeit, ein Hohlkreuz zu verhindern (Anti-Extension).",
      ausfuehrung: [
        "Leg dich bäuchlings auf eine Matte und stelle die Unterarme parallel auf, die Ellbogen direkt unter den Schultern.",
        "Stell die Zehen hüftbreit auf und hebe Knie und Hüfte vom Boden ab, bis Kopf, Rücken, Gesäß und Fersen eine Linie bilden.",
        "Kipp das Becken leicht nach hinten, als wolltest du den Bauchnabel Richtung Rippen ziehen, und spann das Gesäß an.",
        "Drück die Unterarme aktiv in den Boden, sodass die Schulterblätter nicht zwischen den Schultern einsinken.",
        "Halte den Nacken lang, der Blick geht schräg nach unten auf den Boden vor deinen Händen.",
        "Halte die Position ruhig für die vorgegebene Zeit und beende den Satz, sobald die Hüfte durchhängt oder das Hohlkreuz zunimmt."
      ],
      atmung: "Atme ruhig und flach weiter, vor allem in die Flanken und den unteren Rücken, ohne die Bauchspannung zu verlieren.",
      fehler: [
        "Hüfte hängt durch und es entsteht ein Hohlkreuz: Becken einrollen, Gesäß anspannen und lieber kürzer halten.",
        "Gesäß ragt hoch wie bei einem Zelt: Hüfte senken, bis Schulter, Hüfte und Ferse eine Linie bilden.",
        "Kopf hängt oder wird in den Nacken gelegt: Blick auf den Boden, Hinterkopf in Verlängerung der Wirbelsäule.",
        "Luft anhalten: bewusst gleichmäßig weiteratmen, das ist Teil der Übung."
      ],
      vorteile: [
        "Stärkt die gerade Bauchmuskulatur und die tiefe Rumpfmuskulatur in ihrer stabilisierenden Funktion.",
        "Schult die Kontrolle über die Beckenstellung, die beim Heben, Tragen und Laufen gebraucht wird.",
        "Sehr gelenkschonend für den unteren Rücken, da die Wirbelsäule nicht gebeugt wird.",
        "Gute Basis für schwerere Varianten wie RKC-Plank oder Rollouts."
      ],
      tipps: [
        "Mehrere Sätze von 20 bis 40 Sekunden mit maximaler Spannung bringen mehr als ein einzelner Satz über drei Minuten.",
        "Stell dir vor, du ziehst die Ellbogen Richtung Zehen, ohne dass sie sich bewegen. Das erhöht die Bauchspannung deutlich.",
        "Ein Stab auf dem Rücken, der Hinterkopf, Brustwirbelsäule und Kreuzbein berührt, zeigt dir, ob du gerade bist."
      ],
      varianten: "Leichter: auf den Knien oder mit den Unterarmen auf einer Bank. Schwerer: Long-Lever-Plank, RKC-Plank, Zusatzgewicht auf dem Rücken oder ein Bein abheben.",
      sicherheit: "Bei Schulterbeschwerden auf weiche Unterlage achten und die Zeit begrenzen. Bei Bluthochdruck nicht pressen, sondern gleichmäßig atmen."
    }
  },
  {
    id: "stuetz_gestreckt",
    name: "Stütz mit gestreckten Armen",
    auch: ["High Plank", "Straight-Arm Plank", "Push-up Plank Hold"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schulter_vorn", "brust", "trizeps", "schraege_bauch"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 1,
    schwerer: "stuetz_schultertippen",
    info: {
      kurz: "Stütz in der oberen Liegestützposition. Etwas leichter für den Bauch als der Unterarmstütz, dafür mit mehr Arbeit für Schultern und den vorderen Sägemuskel.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand und setz die Hände schulterbreit direkt unter die Schultern, die Finger gespreizt.",
        "Stell die Beine nacheinander nach hinten, die Füße etwa hüftbreit, bis du in der oberen Liegestützposition bist.",
        "Drück den Boden aktiv von dir weg, sodass der obere Rücken leicht rund wird und die Schulterblätter nicht zusammenfallen.",
        "Spann Bauch und Gesäß an und halte Kopf, Rücken und Fersen in einer Linie.",
        "Halte die Ellbogen gestreckt, aber nicht überstreckt, die Ellbogenbeugen zeigen leicht nach vorn.",
        "Halte die Zeit ruhig und setz die Knie ab, sobald die Hüfte absinkt."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, beim Ausatmen die Rippen sanft nach unten ziehen.",
      fehler: [
        "Hände zu weit vorn: Hände genau unter die Schultern, sonst steigt die Last auf die Schultern stark an.",
        "Schulterblätter sinken ein: den Boden aktiv wegdrücken.",
        "Hohlkreuz: Becken einrollen und Gesäß anspannen.",
        "Ellbogen überstreckt und verriegelt: minimal locker lassen und mit Muskelkraft stabilisieren."
      ],
      vorteile: [
        "Trainiert Rumpfstabilität und Schulterstabilität gleichzeitig.",
        "Ist die Ausgangsposition für Liegestütz, Schultertippen und Bärengang.",
        "Stärkt den vorderen Sägemuskel, der für gesunde Schulterblattbewegung wichtig ist."
      ],
      tipps: [
        "Versuch, die Hände gedanklich nach außen zu drehen, ohne dass sie rutschen. Das stabilisiert die Schultern.",
        "Wenn die Handgelenke schmerzen, auf Fäusten oder Kurzhantelgriffen stützen."
      ],
      varianten: "Leichter: Hände auf einer Bank oder Box. Schwerer: Füße erhöht, Schultertippen oder diagonales Arm-Bein-Heben.",
      sicherheit: "Bei Handgelenksbeschwerden auf Fäuste oder Griffe ausweichen oder den Unterarmstütz wählen."
    }
  },
  {
    id: "unterarmstuetz_lang",
    name: "Long-Lever-Plank",
    auch: ["Long-Lever Plank", "Extended Plank", "Langer Hebel Unterarmstütz"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "latissimus", "schulter_vorn", "gesaess"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "rkc_plank",
    info: {
      kurz: "Unterarmstütz mit den Ellbogen deutlich vor dem Kopf. Durch den längeren Hebel steigt die Belastung für die Bauchmuskeln stark an, ohne dass du Gewicht brauchst.",
      ausfuehrung: [
        "Beginne wie beim normalen Unterarmstütz auf Unterarmen und Zehen, die Füße hüftbreit.",
        "Schieb die Ellbogen 10 bis 20 Zentimeter weiter nach vorn, sodass sie vor dem Kopf liegen.",
        "Rolle das Becken nach hinten ein und spann das Gesäß fest an, damit kein Hohlkreuz entsteht.",
        "Drück die Unterarme in den Boden und zieh sie gedanklich Richtung Füße, ohne sie zu bewegen.",
        "Halte den Körper in einer Linie, der Blick geht auf den Boden zwischen den Händen.",
        "Halte nur so lange, wie du die Position ohne Durchhängen halten kannst, typischerweise 10 bis 30 Sekunden."
      ],
      atmung: "Kurze, kontrollierte Atemzüge, die Bauchspannung bleibt dabei bestehen.",
      fehler: [
        "Hüfte sinkt durch, weil der Hebel zu lang ist: Ellbogen etwas näher an die Schultern bringen.",
        "Gesäß schiebt sich nach oben, um den Hebel zu verkürzen: Hüfte bewusst in Linie halten.",
        "Schultern ziehen zu den Ohren: Unterarme aktiv in den Boden drücken.",
        "Zu lange Sätze mit schlechter Haltung: lieber mehrere kurze, saubere Sätze."
      ],
      vorteile: [
        "Deutlich höhere Bauchmuskelaktivierung als der normale Unterarmstütz.",
        "Ohne Geräte steigerbar, indem du die Ellbogen weiter vorschiebst.",
        "Bereitet auf Rollouts und Body Saws vor.",
        "Stärkt die Fähigkeit, ein Hohlkreuz unter Last zu verhindern."
      ],
      tipps: [
        "Arbeite in kleinen Schritten: Erst 5 Zentimeter, dann weiter vor, wenn 30 Sekunden sauber gelingen.",
        "Kombiniere sie mit Kabel-Crunches: erst die stabilisierende, dann die beugende Arbeit.",
        "Eine Markierung auf der Matte hilft, die Ellbogenposition von Satz zu Satz gleich zu halten."
      ],
      varianten: "Leichter: Ellbogen nur leicht vor den Schultern oder auf den Knien. Schwerer: RKC-Plank, Body Saw oder Rollout.",
      sicherheit: "Bei Beschwerden im unteren Rücken nur so weit nach vorn gehen, wie du schmerzfrei ohne Hohlkreuz bleibst."
    }
  },
  {
    id: "rkc_plank",
    name: "RKC-Plank",
    auch: ["RKC Plank", "Hardstyle Plank"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "gesaess", "quadrizeps", "latissimus"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "body_saw",
    info: {
      kurz: "Ein Unterarmstütz mit maximaler Ganzkörperspannung, bekannt aus dem Kettlebell-Training. Statt lange zu halten, erzeugst du für 10 bis 20 Sekunden so viel Spannung wie möglich.",
      ausfuehrung: [
        "Geh in den Unterarmstütz, die Ellbogen etwas vor den Schultern und enger zusammen als sonst, die Hände zu Fäusten geballt.",
        "Stell die Füße zusammen und spann die Oberschenkel an, als wolltest du die Kniescheiben nach oben ziehen.",
        "Kneif das Gesäß so fest wie möglich zusammen und kipp das Becken nach hinten.",
        "Zieh die Ellbogen kraftvoll Richtung Zehen und die Zehen Richtung Ellbogen, ohne dass sich etwas bewegt.",
        "Halte diese maximale Spannung 10 bis 20 Sekunden, der ganze Körper zittert dabei oft.",
        "Leg dich nach dem Satz ab und pausiere 30 bis 60 Sekunden vor dem nächsten Satz."
      ],
      atmung: "Kurze, kräftige Atemzüge durch die Lippen, ähnlich einem leisen Zischen, damit die Spannung bleibt.",
      fehler: [
        "Nur liegen statt aktiv ziehen: Die Wirkung entsteht durch das gedankliche Zusammenziehen von Ellbogen und Füßen.",
        "Gesäß locker: ohne Gesäßspannung kippt das Becken ins Hohlkreuz.",
        "Zu lange Sätze: Die Spannung lässt nach 20 Sekunden meist stark nach, lieber mehr Sätze.",
        "Luft komplett anhalten: kurz und kräftig weiteratmen."
      ],
      vorteile: [
        "Sehr hohe Aktivierung der Bauchmuskeln in kurzer Zeit.",
        "Lehrt die Ganzkörperspannung, die beim schweren Heben gebraucht wird.",
        "Zeitsparend, schon 3 Sätze à 10 Sekunden sind fordernd.",
        "Keine Geräte nötig."
      ],
      tipps: [
        "Arbeite mit Sätzen von 10 Sekunden und steigere zuerst die Spannung, nicht die Zeit.",
        "Gut als Aktivierung vor Kniebeugen oder Kreuzheben.",
        "Fäuste ballen erhöht die Spannung im ganzen Körper spürbar."
      ],
      varianten: "Leichter: normaler Unterarmstütz mit bewusster Gesäßspannung. Schwerer: Ellbogen weiter vor, längere Sätze oder Body Saw.",
      sicherheit: "Durch die hohe Spannung steigt der Blutdruck. Bei Bluthochdruck vorsichtig sein und nicht pressen."
    }
  },
  {
    id: "unterarmstuetz_gewicht",
    name: "Unterarmstütz mit Zusatzgewicht",
    auch: ["Weighted Plank", "Plate Plank"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "schulter_vorn", "gesaess"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Klassischer Unterarmstütz mit einer Hantelscheibe auf dem Rücken. So steigerst du die Last messbar, statt die Haltezeit endlos zu verlängern.",
      ausfuehrung: [
        "Geh in den Unterarmstütz mit Ellbogen unter den Schultern und Füßen hüftbreit.",
        "Lass dir eine Hantelscheibe auf den oberen bis mittleren Rücken legen oder leg sie vorsichtig selbst auf, bevor du die Knie abhebst.",
        "Die Scheibe liegt zwischen den Schulterblättern, nicht auf dem unteren Rücken.",
        "Heb die Knie ab und bring den Körper in eine gerade Linie, Becken leicht eingerollt, Gesäß fest.",
        "Halte die vorgegebene Zeit, ohne dass die Hüfte unter dem Gewicht durchsinkt.",
        "Setz zum Ende zuerst die Knie ab und lass dir die Scheibe abnehmen oder rolle sie seitlich ab."
      ],
      atmung: "Gleichmäßig weiteratmen, die Spannung im Bauch bleibt beim Ausatmen bestehen.",
      fehler: [
        "Scheibe auf dem unteren Rücken: Das erzwingt ein Hohlkreuz, die Scheibe gehört zwischen die Schulterblätter.",
        "Zu schweres Gewicht und durchhängende Hüfte: Last reduzieren, die Haltung hat Vorrang.",
        "Hektisches Ablegen: erst die Knie abstellen, dann die Scheibe entfernen."
      ],
      vorteile: [
        "Ermöglicht eine klare Progression über das Gewicht.",
        "Stärkt die Rumpfsteifigkeit, die beim schweren Tragen und Heben gebraucht wird.",
        "Kürzere, intensivere Sätze als beim Halten ohne Last."
      ],
      tipps: [
        "Starte mit 5 bis 10 Kilogramm und Sätzen von 20 bis 30 Sekunden.",
        "Ein Trainingspartner erleichtert das Auflegen deutlich.",
        "Wenn du mehr als 60 Sekunden ohne Gewicht schaffst, ist diese Variante sinnvoller als längeres Halten."
      ],
      varianten: "Leichter: ohne Gewicht oder mit kleiner Scheibe. Schwerer: schwerere Scheibe oder Long-Lever-Position.",
      sicherheit: "Bei Beschwerden im unteren Rücken zuerst ohne Gewicht sicher werden. Nie mit Scheibe ins Hohlkreuz fallen lassen."
    }
  },
  {
    id: "unterarmstuetz_ball",
    name: "Unterarmstütz auf dem Gymnastikball",
    auch: ["Stability Ball Plank", "Swiss Ball Plank"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "schulter_vorn", "gesaess"],
    geraete: [["gymnastikball"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    schwerer: "stir_the_pot",
    info: {
      kurz: "Unterarmstütz mit den Unterarmen auf einem Gymnastikball. Die instabile Unterlage erhöht die Arbeit der Bauchmuskeln deutlich gegenüber dem Boden.",
      ausfuehrung: [
        "Knie dich vor den Ball und leg die Unterarme mittig darauf, die Hände locker gefaltet oder flach.",
        "Stell die Beine nacheinander nach hinten, die Füße etwas breiter als hüftbreit für mehr Stabilität.",
        "Bring den Körper in eine gerade Linie, die Ellbogen etwa unter den Schultern.",
        "Rolle das Becken leicht ein und spann Gesäß und Bauch an, damit der Ball ruhig liegen bleibt.",
        "Halte die Position und kontrolliere jede kleine Bewegung des Balls aus dem Rumpf.",
        "Setz zum Beenden die Knie ab und rolle den Ball kontrolliert zurück."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen die Spannung im Bauch etwas verstärken.",
      fehler: [
        "Ball rollt unkontrolliert: Füße breiter stellen und Spannung erhöhen.",
        "Hüfte hängt durch: Gesäß fester anspannen oder die Zeit verkürzen.",
        "Schultern sinken ein: Unterarme aktiv in den Ball drücken."
      ],
      vorteile: [
        "Höhere Bauchmuskelaktivierung als der Stütz am Boden.",
        "Schult schnelle Korrekturen des Rumpfes auf instabiler Unterlage.",
        "Gute Vorstufe für Stir the Pot und Rollouts am Ball."
      ],
      tipps: [
        "Je weiter die Ellbogen vor den Schultern liegen, desto schwerer wird es.",
        "Ein Ball mit etwas weniger Luft ist für Einsteiger stabiler."
      ],
      varianten: "Leichter: Füße weiter auseinander oder Knie am Boden. Schwerer: Füße zusammen, ein Bein anheben oder kleine Kreise (Stir the Pot).",
      sicherheit: "Achte auf ausreichend Platz um dich herum, falls der Ball wegrollt."
    }
  },
  {
    id: "stir_the_pot",
    name: "Stir the Pot",
    auch: ["Stir the Pot", "Topf umrühren", "Stability Ball Stir the Pot"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "schraege_bauch"],
    sekundaer: ["schulter_vorn", "latissimus", "gesaess"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "body_saw",
    info: {
      kurz: "Unterarmstütz auf dem Gymnastikball, bei dem du mit den Unterarmen kleine Kreise beschreibst. Eine von Stuart McGill bekannt gemachte Übung, die Bauchmuskeln sehr stark fordert, ohne die Wirbelsäule zu bewegen.",
      ausfuehrung: [
        "Geh in den Unterarmstütz auf dem Gymnastikball, die Füße etwas breiter als hüftbreit.",
        "Bring Becken und Rumpf in eine neutrale Linie und spann Gesäß und Bauch fest an.",
        "Beschreibe mit den Unterarmen kleine, langsame Kreise, als würdest du in einem Topf rühren.",
        "Die Bewegung kommt nur aus den Schultern, Becken und Rücken bleiben vollkommen ruhig.",
        "Mach die vorgegebenen Kreise in eine Richtung und wechsle dann die Richtung.",
        "Beende den Satz, wenn die Hüfte zu schwanken beginnt."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht bei jedem Kreis pressen.",
      fehler: [
        "Zu große Kreise: Die Hüfte beginnt mitzuschwingen. Kreise klein halten.",
        "Hohlkreuz: Becken einrollen und Gesäß anspannen.",
        "Zu schnell: langsame Kreise erzeugen mehr Spannung."
      ],
      vorteile: [
        "Sehr hohe Aktivierung von gerader und schräger Bauchmuskulatur.",
        "Trainiert Rumpfstabilität gegen wechselnde Kraftrichtungen.",
        "Wirbelsäulenfreundlich, da der Rücken nicht gebeugt wird."
      ],
      tipps: [
        "Zähle eine volle Runde als eine Wiederholung, 5 bis 10 je Richtung reichen meist.",
        "Füße breiter stellen macht es leichter, zusammen schwerer."
      ],
      varianten: "Leichter: kleinere Kreise oder auf den Knien. Schwerer: größere Kreise, Füße zusammen oder Achterfiguren.",
      sicherheit: "Bei Schulterbeschwerden die Kreise klein halten. Bei akuten Rückenschmerzen zuerst abklären lassen."
    }
  },
  {
    id: "body_saw",
    name: "Body Saw",
    auch: ["Body Saw", "Slider Body Saw", "TRX Body Saw", "Körpersäge"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "latissimus", "schulter_vorn", "trizeps"],
    geraete: [["gleitscheiben"], ["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 3,
    golf: 1,
    schwerer: "rollout_stehend",
    info: {
      kurz: "Unterarmstütz mit den Füßen auf Gleitscheiben oder in den Schlaufen eines Schlingentrainers. Du schiebst den Körper nach vorn und hinten und verlängerst so den Hebel, ähnlich einem Rollout.",
      ausfuehrung: [
        "Leg die Füße auf die Gleitscheiben oder häng sie in die Schlaufen des Schlingentrainers, sodass sie etwa auf Höhe der Unterarme sind.",
        "Geh in den Unterarmstütz, die Ellbogen unter den Schultern, der Körper gerade.",
        "Spann Bauch und Gesäß an und kipp das Becken leicht nach hinten.",
        "Drück dich mit den Unterarmen langsam nach hinten, sodass die Schultern hinter die Ellbogen wandern.",
        "Geh nur so weit, wie du ohne Hohlkreuz bleibst, und zieh dich dann mit den Unterarmen wieder in die Ausgangsposition.",
        "Bewege dich langsam und kontrolliert, jede Strecke etwa zwei Sekunden."
      ],
      atmung: "Beim Zurückschieben einatmen oder die Luft kurz halten, beim Zurückziehen ausatmen.",
      fehler: [
        "Hohlkreuz am Umkehrpunkt: Bewegungsweg verkürzen.",
        "Hüfte wandert nach oben: Körper bleibt eine Linie, die Bewegung kommt aus den Schultern.",
        "Zu schnell: Der Schwung übernimmt dann die Arbeit."
      ],
      vorteile: [
        "Sehr hohe Belastung der Bauchmuskulatur durch den wechselnden Hebel.",
        "Stärkt die Rumpfkontrolle bei Armbewegungen über Kopf, ähnlich wie beim Rollout.",
        "Gut steuerbar über den Bewegungsweg."
      ],
      tipps: [
        "Auf glattem Boden funktionieren auch Handtücher unter den Füßen.",
        "Beginne mit einem Weg von 10 bis 15 Zentimetern und steigere langsam.",
        "Im Schlingentrainer ist die Übung instabiler und damit schwerer."
      ],
      varianten: "Leichter: kurzer Weg oder normaler Unterarmstütz. Schwerer: längerer Weg, Pause am hinteren Umkehrpunkt.",
      sicherheit: "Bei Beschwerden im unteren Rücken oder in den Schultern vorsichtig dosieren, zuerst den Long-Lever-Plank beherrschen."
    }
  },
  {
    id: "stuetz_wechsel",
    name: "Stütz-Wechsel Unterarm zu Hand",
    auch: ["Plank Up-Down", "Plank Walk-Up", "Commando Plank"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["bauch", "schraege_bauch"],
    sekundaer: ["trizeps", "schulter_vorn", "brust"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Du wechselst im Stütz Arm für Arm vom Unterarm auf die Hand und zurück. Der Rumpf muss dabei das Kippen der Hüfte verhindern, während Arme und Schultern arbeiten.",
      ausfuehrung: [
        "Beginne im Unterarmstütz, die Füße etwas breiter als hüftbreit.",
        "Setz die rechte Hand unter die rechte Schulter und drück dich auf diese Hand hoch.",
        "Setz die linke Hand nach, bis du im Stütz mit gestreckten Armen bist.",
        "Geh mit dem rechten Arm zurück auf den Unterarm, dann mit dem linken.",
        "Halte die Hüfte dabei so ruhig wie möglich, sie darf weder kippen noch schaukeln.",
        "Wechsle den Führungsarm in jeder Wiederholung oder nach der Hälfte des Satzes."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hüfte schaukelt von Seite zu Seite: Füße breiter stellen und langsamer arbeiten.",
        "Hände landen nicht unter den Schultern: bewusst unter die Schulter setzen.",
        "Hohlkreuz durch Ermüdung: Satz beenden, wenn die Linie nicht hält."
      ],
      vorteile: [
        "Kombiniert Anti-Rotation und Anti-Extension mit Armarbeit.",
        "Stärkt Trizeps und Schulterstabilität.",
        "Fordert Koordination und Rumpfspannung gleichzeitig."
      ],
      tipps: [
        "Stell dir ein Glas Wasser auf deinem unteren Rücken vor, das nicht umfallen darf.",
        "Lieber langsam und sauber als schnell und schaukelnd."
      ],
      varianten: "Leichter: auf den Knien. Schwerer: Füße zusammen oder mit Gewichtsweste.",
      sicherheit: "Bei Ellbogen- oder Handgelenksbeschwerden auf weichem Untergrund arbeiten oder auslassen."
    }
  },
  {
    id: "stuetz_schultertippen",
    name: "Stütz mit Schultertippen",
    auch: ["Plank Shoulder Taps", "Shoulder Taps"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["schulter_vorn", "trizeps", "gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "stuetz_diagonal",
    info: {
      kurz: "Stütz mit gestreckten Armen, bei dem du abwechselnd mit einer Hand die gegenüberliegende Schulter berührst. Der Rumpf muss verhindern, dass sich das Becken zur Seite dreht.",
      ausfuehrung: [
        "Geh in den Stütz mit gestreckten Armen, die Hände unter den Schultern.",
        "Stell die Füße etwas breiter als hüftbreit, damit du eine stabile Basis hast.",
        "Spann Bauch und Gesäß an und verlagere das Gewicht minimal auf die rechte Hand.",
        "Heb die linke Hand langsam an und tippe auf die rechte Schulter, dann setz sie kontrolliert ab.",
        "Wiederhole auf der anderen Seite, das Becken bleibt dabei waagerecht und ruhig.",
        "Arbeite langsam, etwa eine Sekunde pro Berührung."
      ],
      atmung: "Gleichmäßig weiteratmen, bei jeder Berührung leicht ausatmen.",
      fehler: [
        "Becken dreht und kippt bei jeder Berührung: Füße breiter stellen und langsamer werden.",
        "Hüfte wandert nach oben: Körper in einer Linie halten.",
        "Zu schnelles Tippen: Das versteckt die fehlende Stabilität."
      ],
      vorteile: [
        "Einfache, gut steuerbare Anti-Rotationsübung ohne Geräte.",
        "Stärkt die Schulterstabilität in der Stützposition.",
        "Gute Vorbereitung auf Bärengang und diagonales Arm-Bein-Heben."
      ],
      tipps: [
        "Leg eine leichte Hantelscheibe auf den unteren Rücken: Sie darf nicht herunterrutschen.",
        "Je enger die Füße, desto schwerer."
      ],
      varianten: "Leichter: auf den Knien oder mit den Händen auf einer Bank. Schwerer: Füße zusammen oder im Bärenstütz.",
      sicherheit: "Bei Handgelenksbeschwerden auf Fäusten oder Griffen stützen."
    }
  },
  {
    id: "unterarmstuetz_armstrecken",
    name: "Unterarmstütz mit Armvorstrecken",
    auch: ["Plank Reach", "Plank Arm Reach", "Long Plank Reach"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["bauch", "schraege_bauch"],
    sekundaer: ["schulter_vorn", "gesaess"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    schwerer: "stuetz_diagonal",
    info: {
      kurz: "Im Unterarmstütz streckst du abwechselnd einen Arm weit nach vorn. Weil nur noch drei Stützpunkte bleiben und der Hebel länger wird, arbeiten gerade und schräge Bauchmuskeln gemeinsam.",
      ausfuehrung: [
        "Geh in den Unterarmstütz, die Füße etwas breiter als hüftbreit.",
        "Spann Bauch und Gesäß an und verlagere das Gewicht leicht auf den linken Unterarm.",
        "Streck den rechten Arm langsam nach vorn, bis er etwa in Verlängerung des Körpers ist, der Daumen zeigt nach oben.",
        "Halte den Arm eine bis zwei Sekunden, ohne dass Becken oder Schultern sich drehen.",
        "Setz den Unterarm kontrolliert wieder ab und wechsle die Seite.",
        "Beende den Satz, sobald die Hüfte zu schwanken beginnt."
      ],
      atmung: "Beim Vorstrecken ausatmen, beim Zurücksetzen einatmen.",
      fehler: [
        "Becken kippt zur Seite des gehobenen Arms: Füße breiter und Gesäß fester.",
        "Hohlkreuz beim Strecken: Arm nur so weit strecken, wie die Linie hält.",
        "Kopf hebt sich mit: Blick bleibt auf dem Boden."
      ],
      vorteile: [
        "Kombiniert Anti-Extension und Anti-Rotation in einer Übung.",
        "Trainiert die Rumpfkontrolle bei Armbewegung über Kopf.",
        "Ohne Geräte gut steigerbar."
      ],
      tipps: [
        "Stell dir vor, du willst mit der Hand etwas weit vor dir greifen.",
        "Langsame Ausführung mit kurzer Pause in der Streckung ist wirksamer als viele schnelle Wiederholungen."
      ],
      varianten: "Leichter: Arm nur leicht anheben oder auf den Knien. Schwerer: Füße zusammen oder diagonales Arm-Bein-Heben.",
      sicherheit: "Bei Schulterbeschwerden den Arm nur bis unter Schulterhöhe strecken."
    }
  },
  {
    id: "stuetz_diagonal",
    name: "Stütz mit diagonalem Arm-Bein-Heben",
    auch: ["Plank Bird Dog", "Plank with Opposite Arm and Leg Raise", "Bird Dog Plank"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["bauch", "schraege_bauch"],
    sekundaer: ["gesaess", "ruecken_unten", "schulter_vorn"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 3,
    golf: 1,
    info: {
      kurz: "Im Stütz mit gestreckten Armen hebst du gleichzeitig einen Arm und das gegenüberliegende Bein. Mit nur zwei Stützpunkten ist das eine der anspruchsvollsten Anti-Rotationsübungen ohne Geräte.",
      ausfuehrung: [
        "Geh in den Stütz mit gestreckten Armen, die Füße etwas breiter als hüftbreit.",
        "Spann Bauch und Gesäß fest an und verlagere das Gewicht auf die linke Hand und den rechten Fuß.",
        "Heb gleichzeitig den rechten Arm nach vorn und das linke Bein nach hinten, beide etwa auf Körperhöhe.",
        "Halte zwei bis drei Sekunden, ohne dass Becken oder Schultern kippen.",
        "Setz Hand und Fuß gleichzeitig kontrolliert ab und wechsle die Seite.",
        "Arbeite langsam und mit voller Kontrolle."
      ],
      atmung: "Beim Abheben ausatmen, beim Absetzen einatmen.",
      fehler: [
        "Becken dreht stark auf: Arm und Bein nur leicht anheben.",
        "Hohlkreuz durch zu hoch gehobenes Bein: Bein nur bis Hüfthöhe.",
        "Schnelle Wechsel: Halte jede Position bewusst."
      ],
      vorteile: [
        "Sehr hohe Anforderung an Anti-Rotation und Anti-Extension.",
        "Trainiert die Diagonalverbindung von Schulter zur gegenüberliegenden Hüfte.",
        "Verbessert die Ganzkörperkoordination."
      ],
      tipps: [
        "Zuerst nur Arm, dann nur Bein, dann beides gleichzeitig üben.",
        "Breitere Füße machen die Übung deutlich leichter."
      ],
      varianten: "Leichter: Bird Dog im Vierfüßlerstand oder Schultertippen. Schwerer: längere Haltezeit oder Füße enger.",
      sicherheit: "Bei Handgelenks- oder Schulterbeschwerden zuerst den Bird Dog wählen."
    }
  },
  {
    id: "baerenstuetz",
    name: "Bärenstütz",
    auch: ["Bear Plank", "Bear Hold", "Hover Bear"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["quadrizeps", "schulter_vorn", "schraege_bauch"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 1,
    schwerer: "baerengang",
    info: {
      kurz: "Aus dem Vierfüßlerstand hebst du die Knie wenige Zentimeter vom Boden ab und hältst. Die Übung stärkt die Bauchmuskeln mit neutralem Rücken und fordert auch Schultern und Oberschenkel.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, die Hände unter den Schultern, die Knie unter der Hüfte.",
        "Stell die Zehen auf und bring den Rücken in eine neutrale, gerade Position.",
        "Drück die Hände in den Boden und spann den Bauch an, als würdest du einen leichten Schlag erwarten.",
        "Heb die Knie zwei bis fünf Zentimeter vom Boden ab, Rücken und Hüfte bleiben dabei auf derselben Höhe.",
        "Halte die Position ruhig, der Blick geht auf den Boden knapp vor den Händen.",
        "Setz die Knie zum Satzende langsam ab."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen die Rippen leicht nach unten ziehen.",
      fehler: [
        "Hüfte schiebt sich nach oben: Knie nur knapp über dem Boden halten.",
        "Rücken wird rund oder hohl: neutrale Position mit einem Stab prüfen.",
        "Schultern sinken ein: Boden aktiv wegdrücken."
      ],
      vorteile: [
        "Sehr rückenschonende Art, die Bauchmuskeln zu kräftigen.",
        "Fordert auch die Schulterstabilität.",
        "Gute Vorstufe für Bärengang und Stütz-Varianten."
      ],
      tipps: [
        "Eine Hantelscheibe auf dem unteren Rücken zeigt dir sofort, ob die Hüfte ruhig bleibt.",
        "Mit Schultertippen im Bärenstütz kommt eine Anti-Rotationskomponente hinzu."
      ],
      varianten: "Leichter: kürzer halten. Schwerer: Schultertippen, Bein abheben oder Bärengang.",
      sicherheit: "Bei Handgelenksbeschwerden auf Fäusten stützen."
    }
  },
  {
    id: "baerengang",
    name: "Bärengang",
    auch: ["Bear Crawl"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "schulter_vorn"],
    sekundaer: ["schraege_bauch", "quadrizeps", "trizeps", "ganzkoerper"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Krabbeln auf Händen und Füßen mit den Knien knapp über dem Boden. Die Übung trainiert Rumpfstabilität, Schulterkraft und Koordination gleichzeitig und bringt den Puls nach oben.",
      ausfuehrung: [
        "Beginne im Bärenstütz, die Knie wenige Zentimeter über dem Boden, der Rücken gerade.",
        "Bewege gleichzeitig die rechte Hand und den linken Fuß eine kleine Schrittlänge nach vorn.",
        "Folge mit der linken Hand und dem rechten Fuß, immer diagonal.",
        "Halte die Hüfte tief und ruhig, sie soll weder schaukeln noch nach oben wandern.",
        "Mach kleine Schritte, etwa eine Handbreite, damit die Kontrolle erhalten bleibt.",
        "Krabble die vorgegebene Zeit vorwärts, rückwärts oder seitwärts."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Hüfte zu hoch: Knie knapp über dem Boden halten.",
        "Zu große Schritte: Becken beginnt zu schaukeln.",
        "Kopf hängt: Blick knapp vor die Hände."
      ],
      vorteile: [
        "Trainiert Rumpf, Schultern und Beine in einer Bewegung.",
        "Verbessert die Koordination über Kreuz.",
        "Gut als Aufwärmübung oder Finisher geeignet."
      ],
      tipps: [
        "Stell dir ein Glas Wasser auf dem Rücken vor.",
        "Rückwärts krabbeln fordert die Schultern stärker."
      ],
      varianten: "Leichter: Bärenstütz halten. Schwerer: seitwärts, rückwärts oder mit einem Gewicht, das du ziehst.",
      sicherheit: "Bei Handgelenksbeschwerden auf Fäusten arbeiten oder auslassen."
    }
  },

  // ---------- Seitstütz-Varianten ----------
  {
    id: "seitstuetz_knie",
    name: "Seitstütz auf den Knien",
    auch: ["Short Lever Side Plank", "Kneeling Side Plank", "Modified Side Plank"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["gesaess_mittel", "bauch", "ruecken_unten"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    schwerer: "seitstuetz",
    info: {
      kurz: "Seitstütz mit gebeugten Knien als Auflage. Die leichtere Version des Seitstützes, ideal für Einsteiger oder als Aufbauübung nach einer Pause.",
      ausfuehrung: [
        "Leg dich auf die Seite, den unteren Ellbogen direkt unter der Schulter.",
        "Beuge die Knie etwa 90 Grad, sodass die Füße hinter dem Körper liegen.",
        "Bring Schulter, Hüfte und Knie in eine Linie.",
        "Heb die Hüfte vom Boden ab, bis der Körper von Kopf bis Knie gerade ist.",
        "Leg die obere Hand auf die Hüfte und halte die Position ruhig.",
        "Senke nach der Zeit langsam ab und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, vor allem in die obere Flanke.",
      fehler: [
        "Hüfte sinkt nach unten: Gesäß anspannen und die Hüfte aktiv nach oben schieben.",
        "Oberkörper kippt nach vorn: Schultern übereinander stapeln.",
        "Schulter sinkt ein: Unterarm in den Boden drücken."
      ],
      vorteile: [
        "Einfacher Einstieg in die seitliche Rumpfstabilität.",
        "Stärkt die schrägen Bauchmuskeln und den seitlichen Gesäßmuskel.",
        "Wenig Belastung für die Schulter."
      ],
      tipps: [
        "Sobald 45 Sekunden je Seite sauber klappen, auf den vollen Seitstütz wechseln.",
        "Ein Spiegel hilft, die gerade Linie zu prüfen."
      ],
      varianten: "Leichter: kürzer halten. Schwerer: voller Seitstütz auf den Füßen.",
      sicherheit: "Bei Schulterbeschwerden auf weicher Unterlage arbeiten."
    }
  },
  {
    id: "seitstuetz",
    name: "Seitstütz",
    auch: ["Side Plank", "Seitlicher Unterarmstütz"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["gesaess_mittel", "bauch", "ruecken_unten", "adduktoren"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    schwerer: "seitstuetz_stern",
    info: {
      kurz: "Seitlicher Stütz auf Unterarm und Füßen. Er trainiert die seitliche Rumpfmuskulatur, die ein Wegknicken des Rumpfes zur Seite verhindert, und gehört zu McGills „Big Three“ für einen belastbaren Rücken.",
      ausfuehrung: [
        "Leg dich auf die Seite und stell den unteren Ellbogen direkt unter die Schulter.",
        "Leg die Füße übereinander oder stell den oberen Fuß vor den unteren, das ist stabiler.",
        "Spann Bauch und Gesäß an und heb die Hüfte vom Boden ab, bis der Körper eine gerade Linie bildet.",
        "Drück den Unterarm aktiv in den Boden, damit die Schulter nicht einsinkt.",
        "Leg die obere Hand auf die Hüfte oder die gegenüberliegende Schulter und halte die Position ruhig.",
        "Senke nach der vorgegebenen Zeit langsam ab und wechsle die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, ohne die Spannung zu verlieren.",
      fehler: [
        "Hüfte sackt ab: Gesäß anspannen und das Becken aktiv anheben.",
        "Becken schiebt sich nach hinten: Hüfte nach vorn bringen, sodass Schulter, Hüfte und Ferse eine Linie bilden.",
        "Oberkörper dreht nach vorn oder hinten: Schultern übereinander stapeln.",
        "Kopf hängt zur Seite: Kopf in Verlängerung der Wirbelsäule halten."
      ],
      vorteile: [
        "Stärkt die schrägen Bauchmuskeln und den quadratischen Lendenmuskel.",
        "Trainiert gleichzeitig den seitlichen Gesäßmuskel, der das Becken stabilisiert.",
        "Belastet die Wirbelsäule gering bei hoher Muskelaktivität.",
        "Gleicht Seitenunterschiede aus, wenn du beide Seiten getrennt testest."
      ],
      tipps: [
        "McGill empfiehlt mehrere kurze Halteserien von etwa 10 Sekunden statt einer langen.",
        "Vergleiche die Haltezeit beider Seiten. Größere Unterschiede sind ein Hinweis, die schwächere Seite gezielt zu trainieren.",
        "Den oberen Fuß vor den unteren zu stellen macht es stabiler."
      ],
      varianten: "Leichter: auf den Knien. Schwerer: Seitstütz-Stern, Hüftheben, Gewicht auf der Hüfte oder mit Rudern am Kabel.",
      sicherheit: "Bei Schulterbeschwerden auf weicher Unterlage arbeiten oder die Kniestand-Version wählen.",
      golf: "Eine starke seitliche Rumpfmuskulatur hält die Wirbelsäule im Schwung stabil, besonders bei der Seitneigung im Durchschwung. Das kann helfen, den unteren Rücken bei vielen Schlägen zu entlasten."
    }
  },
  {
    id: "seitstuetz_gestreckt",
    name: "Seitstütz mit gestrecktem Arm",
    auch: ["Straight-Arm Side Plank", "High Side Plank"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["gesaess_mittel", "schulter_seitlich", "rotatorenmanschette", "trizeps"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    einseitig: true,
    schwerer: "seitstuetz_stern",
    info: {
      kurz: "Seitstütz auf der Hand statt auf dem Unterarm. Die Übung fordert zusätzlich die Schulterstabilität und ist die Vorstufe für den Seitstütz-Stern.",
      ausfuehrung: [
        "Setz dich seitlich auf den Boden und stell die untere Hand direkt unter die Schulter, die Finger zeigen vom Körper weg.",
        "Streck die Beine aus und leg die Füße übereinander oder hintereinander.",
        "Drück dich über die Hand nach oben, bis der Arm gestreckt ist und der Körper eine Linie bildet.",
        "Drück den Boden aktiv weg, damit die Schulter nicht zum Ohr rutscht.",
        "Streck den oberen Arm zur Decke oder leg die Hand auf die Hüfte.",
        "Halte die Zeit und wechsle dann die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen und die Spannung halten.",
      fehler: [
        "Schulter sinkt ein: Boden wegdrücken und die Schulter vom Ohr wegziehen.",
        "Hand zu weit vom Körper: direkt unter die Schulter setzen.",
        "Hüfte sackt ab: Gesäß anspannen."
      ],
      vorteile: [
        "Fordert Rumpf und Schulterstabilität gleichzeitig.",
        "Größerer Abstand zum Boden schult die Körperwahrnehmung.",
        "Vorstufe für den Seitstütz-Stern."
      ],
      tipps: [
        "Den Ellbogen nicht verriegeln, sondern aktiv mit Muskelkraft stabilisieren.",
        "Mit dem Blick zur oberen Hand wird es koordinativ anspruchsvoller."
      ],
      varianten: "Leichter: Seitstütz auf dem Unterarm. Schwerer: Seitstütz-Stern oder oberes Bein abheben.",
      sicherheit: "Bei Handgelenks- oder Schulterbeschwerden auf den Unterarm ausweichen."
    }
  },
  {
    id: "seitstuetz_stern",
    name: "Seitstütz-Stern",
    auch: ["Side Plank Star", "Star Side Plank", "Side Plank with Leg Abduction"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess_mittel"],
    sekundaer: ["bauch", "adduktoren", "schulter_seitlich"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, huefte: 1 },
    stufe: 3,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Seitstütz, bei dem du zusätzlich das obere Bein und den oberen Arm abspreizt, sodass dein Körper einem Stern gleicht. Sehr fordernd für die seitliche Rumpfmuskulatur und den seitlichen Gesäßmuskel.",
      ausfuehrung: [
        "Geh in den Seitstütz auf dem Unterarm oder auf der gestreckten Hand.",
        "Bring den Körper in eine gerade Linie und spann Gesäß und Bauch an.",
        "Streck den oberen Arm senkrecht zur Decke.",
        "Heb das obere Bein gestreckt nach oben ab, etwa bis Hüft- oder Schulterbreite über dem unteren Fuß.",
        "Halte den Körper ruhig, Becken und Schultern bleiben übereinander gestapelt.",
        "Halte die Zeit, senke dann das Bein und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: [
        "Becken kippt nach hinten, wenn das Bein hochgeht: Bein etwas weniger hoch und Hüfte nach vorn schieben.",
        "Hüfte sinkt ab: Satz beenden oder auf den einfachen Seitstütz wechseln.",
        "Bein wird nach vorn gehoben: Bein gerade über dem unteren Bein abspreizen."
      ],
      vorteile: [
        "Hohe Aktivierung des seitlichen Gesäßmuskels zusammen mit den schrägen Bauchmuskeln.",
        "Trainiert die Stabilität der unteren Hüfte, die das ganze Körpergewicht trägt.",
        "Deutlich anspruchsvoller als der einfache Seitstütz ohne Zusatzgewicht."
      ],
      tipps: [
        "Beginne mit 10 Sekunden je Seite und steigere langsam.",
        "Auf dem Unterarm ist die Variante stabiler als auf der Hand."
      ],
      varianten: "Leichter: einfacher Seitstütz oder Bein nur leicht anheben. Schwerer: auf der gestreckten Hand, kleine Beinbewegungen oder Gewichtsmanschette.",
      sicherheit: "Bei Hüft- oder Schulterbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "seitstuetz_hueftheben",
    name: "Seitstütz mit Hüftheben",
    auch: ["Side Plank Hip Dips", "Side Plank Hip Raises", "Dynamic Side Plank"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["gesaess_mittel", "ruecken_unten", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    schwerer: "seitstuetz_rotation",
    info: {
      kurz: "Dynamischer Seitstütz, bei dem du die Hüfte kontrolliert absenkst und wieder anhebst. So arbeiten die schrägen Bauchmuskeln durch einen größeren Bewegungsweg statt nur statisch.",
      ausfuehrung: [
        "Geh in den Seitstütz auf dem Unterarm, der Ellbogen unter der Schulter, die Füße übereinander.",
        "Heb die Hüfte an, bis der Körper eine gerade Linie bildet.",
        "Senke die Hüfte langsam ab, bis sie den Boden fast berührt.",
        "Drück die Hüfte über die seitlichen Bauchmuskeln wieder nach oben, etwas über die gerade Linie hinaus.",
        "Halte oben kurz an und wiederhole ohne Schwung.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Anheben ausatmen.",
      fehler: [
        "Schwung aus der Hüfte: langsam und mit Pause oben arbeiten.",
        "Oberkörper rollt nach vorn: Schultern übereinander halten.",
        "Schulter sinkt ein: Unterarm in den Boden drücken."
      ],
      vorteile: [
        "Trainiert die schrägen Bauchmuskeln konzentrisch und exzentrisch.",
        "Gute Ergänzung zum statischen Seitstütz.",
        "Stärkt die seitliche Beckenkontrolle."
      ],
      tipps: [
        "Eine Sekunde hoch, eine kurze Pause, zwei Sekunden runter.",
        "Mit einer Hantelscheibe auf der Hüfte wird es schwerer."
      ],
      varianten: "Leichter: auf den Knien. Schwerer: mit Gewicht auf der Hüfte oder oberem Bein abgespreizt.",
      sicherheit: "Bei Schulterbeschwerden auf weicher Unterlage arbeiten und die Wiederholungen begrenzen."
    }
  },
  {
    id: "seitstuetz_rotation",
    name: "Seitstütz mit Rotation",
    auch: ["Side Plank Reach Through", "Side Plank Thread the Needle", "Side Plank Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "schulter_vorn", "oberer_ruecken", "gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Im Seitstütz führst du den oberen Arm unter dem Körper hindurch und öffnest ihn wieder zur Decke. Du kombinierst seitliche Stabilität mit kontrollierter Rotation des Brustkorbs.",
      ausfuehrung: [
        "Geh in den Seitstütz auf dem Unterarm, die Füße hintereinander für mehr Stabilität.",
        "Streck den oberen Arm senkrecht zur Decke.",
        "Dreh den Oberkörper langsam nach unten und fädle den Arm unter dem Körper hindurch Richtung hintere Wand.",
        "Die Hüfte bleibt dabei oben und weitgehend ruhig, die Drehung kommt aus dem Brustkorb.",
        "Dreh den Oberkörper wieder auf und streck den Arm zurück zur Decke.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Einfädeln ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Hüfte sackt beim Einfädeln ab: Gesäß fest und die Hüfte aktiv oben halten.",
        "Bewegung zu schnell: langsam, damit die Rotation kontrolliert bleibt.",
        "Schulter des Stützarms sinkt ein: Unterarm in den Boden drücken."
      ],
      vorteile: [
        "Verbindet Rumpfstabilität mit Beweglichkeit der Brustwirbelsäule.",
        "Trainiert die schrägen Bauchmuskeln in der Rotation.",
        "Stärkt die Schulter des Stützarms in wechselnder Position."
      ],
      tipps: [
        "Eine leichte Kurzhantel in der oberen Hand erhöht die Belastung.",
        "Folge der Hand mit dem Blick, das vergrößert die Rotation."
      ],
      varianten: "Leichter: auf den Knien. Schwerer: mit leichter Kurzhantel oder auf der gestreckten Hand.",
      sicherheit: "Bei Schulterbeschwerden den Bewegungsweg klein halten."
    }
  },
  {
    id: "seitstuetz_rudern",
    name: "Seitstütz mit Kabelrudern",
    auch: ["Side Plank Row", "Side Plank Cable Row", "Side Plank Band Row"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "latissimus"],
    sekundaer: ["oberer_ruecken", "schulter_hinten", "gesaess_mittel", "bizeps"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 3,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Seitstütz vor dem Kabelzug, bei dem du mit dem oberen Arm einen Griff zu dir ruderst. Der Zug will dich aufdrehen, der Rumpf muss gegenhalten: eine anspruchsvolle Verbindung aus seitlicher Stabilität und Anti-Rotation.",
      ausfuehrung: [
        "Stell den Kabelzug auf etwa Brusthöhe im Seitstütz ein oder befestige das Band entsprechend.",
        "Leg dich so in den Seitstütz, dass du mit dem Gesicht zum Kabelzug schaust, der untere Ellbogen unter der Schulter.",
        "Nimm den Griff mit der oberen Hand, der Arm ist gestreckt, und heb die Hüfte in die gerade Linie.",
        "Rudere den Griff zur unteren Brust, der Ellbogen zieht dicht am Körper nach hinten.",
        "Strecke den Arm langsam wieder, ohne dass dich der Zug nach vorn dreht.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Rudern ausatmen, beim Strecken einatmen.",
      fehler: [
        "Oberkörper wird zum Kabel gezogen: leichteres Gewicht und mehr Rumpfspannung.",
        "Hüfte sinkt beim Rudern: Gesäß anspannen, Satz beenden, wenn die Linie nicht hält.",
        "Schwung aus dem Oberkörper: nur der Arm bewegt sich."
      ],
      vorteile: [
        "Verbindet Rückentraining mit seitlicher Rumpfstabilität.",
        "Trainiert die Kraftübertragung von Rumpf zu Schulter.",
        "Sehr effektive Anti-Rotationsübung in liegender Position."
      ],
      tipps: [
        "Wähle das Gewicht deutlich leichter als beim normalen einarmigen Rudern.",
        "Mit den Füßen hintereinander bist du stabiler."
      ],
      varianten: "Leichter: im Seitstütz auf den Knien. Schwerer: Füße übereinander oder Pause bei angezogenem Ellbogen.",
      sicherheit: "Bei Schulterbeschwerden im Stützarm vorsichtig dosieren."
    }
  },

  // ---------- Dead Bug, Bird Dog, Hollow ----------
  {
    id: "dead_bug_fersentippen",
    name: "Fersentippen in Rückenlage",
    auch: ["Heel Taps", "Dead Bug Heel Taps", "Supine Toe Taps"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["hueftbeuger", "schraege_bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "dead_bug",
    info: {
      kurz: "Einsteigervariante des Dead Bug: In Rückenlage mit angehobenen, gebeugten Beinen tippst du abwechselnd eine Ferse auf den Boden. Du lernst, den unteren Rücken ruhig am Boden zu halten, während sich die Beine bewegen.",
      ausfuehrung: [
        "Leg dich auf den Rücken und heb die Beine an, Hüfte und Knie etwa 90 Grad gebeugt, die Schienbeine waagerecht.",
        "Leg die Arme neben den Körper oder streck sie zur Decke.",
        "Drück den unteren Rücken sanft in den Boden, indem du die Rippen nach unten ziehst und das Becken leicht einrollst.",
        "Senke ein Bein langsam ab, der Kniewinkel bleibt gleich, bis die Ferse den Boden leicht berührt.",
        "Bring das Bein zurück in die Ausgangsposition und wechsle die Seite.",
        "Der untere Rücken darf sich während des ganzen Satzes nicht vom Boden lösen."
      ],
      atmung: "Beim Absenken des Beins ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz beim Absenken: Bein weniger weit absenken oder den Kniewinkel verkleinern.",
        "Zu schnell: Langsam arbeiten, die Ferse nur antippen und nicht ablegen.",
        "Luft anhalten: bewusst mit jeder Wiederholung ausatmen."
      ],
      vorteile: [
        "Leichter Einstieg in die Kontrolle der Beckenstellung.",
        "Schont den unteren Rücken.",
        "Lehrt die Bauchspannung, die bei fast allen Rumpfübungen gebraucht wird."
      ],
      tipps: [
        "Leg eine Hand unter den unteren Rücken: Der Druck auf die Hand soll gleich bleiben.",
        "Langes, vollständiges Ausatmen aktiviert die tiefe Bauchmuskulatur zusätzlich."
      ],
      varianten: "Leichter: Ferse nur ein Stück absenken. Schwerer: Bein dabei strecken oder zum vollständigen Dead Bug wechseln.",
      sicherheit: "Bei akuten Rückenschmerzen nur schmerzfrei ausführen und im Zweifel abklären lassen."
    }
  },
  {
    id: "dead_bug",
    name: "Dead Bug",
    auch: ["Dead Bug", "Toter Käfer"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "hueftbeuger"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    schwerer: "hollow_hold",
    info: {
      kurz: "In Rückenlage streckst du gleichzeitig einen Arm und das gegenüberliegende Bein aus, während der untere Rücken am Boden bleibt. Eine der besten Übungen, um Rumpfstabilität bei Arm- und Beinbewegungen zu lernen.",
      ausfuehrung: [
        "Leg dich auf den Rücken, streck die Arme senkrecht zur Decke und heb die Beine an, Hüfte und Knie 90 Grad gebeugt.",
        "Zieh die Rippen nach unten und drück den unteren Rücken sanft in den Boden.",
        "Streck langsam den rechten Arm nach hinten über den Kopf und gleichzeitig das linke Bein nach vorn, knapp über dem Boden.",
        "Geh nur so weit, wie der untere Rücken am Boden bleibt.",
        "Führ Arm und Bein zurück in die Ausgangsposition und wechsle die Seite.",
        "Arbeite langsam, etwa drei Sekunden für das Strecken und zwei für das Zurückführen."
      ],
      atmung: "Beim Strecken lang ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Unterer Rücken hebt sich ab: Bewegungsweg verkürzen oder das Bein höher halten.",
        "Gleiche Seite statt diagonal: rechter Arm mit linkem Bein und umgekehrt.",
        "Zu schnell und mit Schwung: Langsamkeit macht die Übung wirksam.",
        "Kopf und Nacken angespannt: Kopf bleibt locker am Boden."
      ],
      vorteile: [
        "Trainiert die tiefe Bauchmuskulatur und die Kontrolle der Lendenwirbelsäule.",
        "Schult die Koordination über Kreuz, wie beim Gehen und Laufen.",
        "Sehr rückenfreundlich und für fast alle geeignet.",
        "Gute Aktivierung vor dem Krafttraining."
      ],
      tipps: [
        "Halte am Ende der Streckung kurz an und atme vollständig aus.",
        "Wenn du einen Unterschied zwischen den Seiten spürst, beginne mit der schwächeren Seite."
      ],
      varianten: "Leichter: Fersentippen oder nur das Bein bewegen. Schwerer: mit Band, Kurzhanteln, Gymnastikball oder Hollow Hold.",
      sicherheit: "Sehr sicher. Bei Rückenschmerzen nur im schmerzfreien Bereich arbeiten."
    }
  },
  {
    id: "dead_bug_band",
    name: "Dead Bug mit Bandzug über Kopf",
    auch: ["Banded Dead Bug", "Pullover Dead Bug", "Cable Dead Bug"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["latissimus", "schraege_bauch", "hueftbeuger"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Dead Bug, bei dem du ein hinter dem Kopf befestigtes Band oder Kabel mit gestreckten Armen über der Brust hältst. Der Zug nach hinten verstärkt die Spannung in Bauch und Latissimus deutlich.",
      ausfuehrung: [
        "Befestige ein Band oder Kabel in Bodennähe hinter deinem Kopf und leg dich mit dem Kopf zum Ankerpunkt auf den Rücken.",
        "Greif das Band mit beiden Händen und zieh es mit gestreckten Armen über die Brust, bis Spannung entsteht.",
        "Heb die Beine an, Hüfte und Knie 90 Grad gebeugt, und drück den unteren Rücken in den Boden.",
        "Halte die Arme ruhig über der Brust und streck abwechselnd ein Bein langsam nach vorn aus.",
        "Führe das Bein zurück und wechsle die Seite, die Arme bleiben die ganze Zeit fixiert.",
        "Beende den Satz, sobald sich der Rücken vom Boden löst."
      ],
      atmung: "Beim Strecken des Beins ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Arme geben dem Zug nach: Spannung reduzieren, die Arme bleiben über der Brust.",
        "Hohlkreuz: Bein weniger weit absenken.",
        "Schultern ziehen hoch: Schulterblätter sanft Richtung Hüfte ziehen."
      ],
      vorteile: [
        "Verbindet Latissimus und Bauchmuskulatur zu einer Spannungseinheit.",
        "Mehr Belastung als der normale Dead Bug ohne Wirbelsäulenbeugung.",
        "Lässt sich über die Bandstärke fein steigern."
      ],
      tipps: [
        "Stell dir vor, du ziehst das Band Richtung Hüfte, ohne dass sich die Arme bewegen.",
        "Am Kabelzug kannst du die Last genauer dosieren."
      ],
      varianten: "Leichter: leichteres Band oder nur Fersentippen. Schwerer: stärkeres Band, Bein gestreckt absenken oder Arm und Bein gleichzeitig bewegen.",
      sicherheit: "Achte darauf, dass das Band sicher befestigt ist und nicht zurückschnellen kann."
    }
  },
  {
    id: "dead_bug_gewicht",
    name: "Dead Bug mit Kurzhanteln",
    auch: ["Weighted Dead Bug", "Dumbbell Dead Bug", "Kettlebell Dead Bug"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "schulter_vorn", "hueftbeuger"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Dead Bug mit leichten Kurzhanteln oder Kettlebells in den Händen. Das Zusatzgewicht verlängert den Hebel beim Armstrecken und fordert die Bauchmuskeln stärker.",
      ausfuehrung: [
        "Leg dich mit je einer leichten Kurzhantel in den Händen auf den Rücken, die Arme senkrecht über den Schultern.",
        "Heb die Beine an, Hüfte und Knie 90 Grad gebeugt, und drück den unteren Rücken in den Boden.",
        "Senke einen Arm langsam nach hinten über den Kopf und streck gleichzeitig das gegenüberliegende Bein.",
        "Halte am Ende kurz an, ohne dass der Rücken ins Hohlkreuz geht.",
        "Führ Arm und Bein zurück und wechsle die Seite.",
        "Bewege die Hantel kontrolliert, sie darf nicht nach hinten fallen."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Gewicht zieht den Rücken ins Hohlkreuz: leichter wählen oder den Arm weniger weit absenken.",
        "Ellbogen beugt stark: Arm bleibt fast gestreckt.",
        "Zu schnell: langsam und mit Pause arbeiten."
      ],
      vorteile: [
        "Messbare Steigerung über das Gewicht.",
        "Trainiert die Rumpfkontrolle bei Last über Kopf.",
        "Verbessert die Stabilität der Schultern in Überkopfposition."
      ],
      tipps: [
        "2 bis 5 Kilogramm reichen meist völlig.",
        "Eine Variante: Nur die Hantel in einer Hand halten, das erzeugt zusätzlich Anti-Rotation."
      ],
      varianten: "Leichter: normaler Dead Bug. Schwerer: schwerere Hanteln oder Beine gestreckt.",
      sicherheit: "Bei Schulterbeschwerden den Arm nur bis zu einer schmerzfreien Höhe absenken."
    }
  },
  {
    id: "dead_bug_ball",
    name: "Dead Bug mit Gymnastikball",
    auch: ["Stability Ball Dead Bug", "Swiss Ball Dead Bug"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "hueftbeuger"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "hollow_hold",
    info: {
      kurz: "Du hältst einen Gymnastikball zwischen Händen und Knien und drückst ihn aktiv zusammen, während du diagonal Arm und Bein streckst. Der Druck auf den Ball erhöht die Bauchspannung und erleichtert es, den Rücken am Boden zu halten.",
      ausfuehrung: [
        "Leg dich auf den Rücken und klemm einen Gymnastikball zwischen die gestreckten Hände und die Knie, Hüfte und Knie 90 Grad gebeugt.",
        "Drück mit Händen und Knien kräftig gegen den Ball, sodass du die Bauchmuskeln deutlich spürst.",
        "Löse den rechten Arm und das linke Bein vom Ball und streck sie langsam aus, die andere Hand und das andere Knie halten den Ball.",
        "Der untere Rücken bleibt fest am Boden.",
        "Führ Arm und Bein zurück an den Ball und wechsle die Seite.",
        "Halte den Druck auf den Ball die ganze Zeit."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ball rutscht weg: kräftiger dagegen drücken.",
        "Rücken hebt sich ab: Bewegungsweg verkürzen.",
        "Zu schnelles Wechseln: Arm und Bein langsam bewegen."
      ],
      vorteile: [
        "Der Druck gegen den Ball aktiviert die Bauchmuskeln von Beginn an.",
        "Hilft Einsteigern, die richtige Spannung zu finden.",
        "Sehr rückenschonend."
      ],
      tipps: [
        "Drück diagonal: die Hand gegen den Ball Richtung gegenüberliegendes Knie.",
        "Ein kleinerer Ball oder ein Kissen funktioniert auch."
      ],
      varianten: "Leichter: nur das Bein bewegen. Schwerer: Bein gestreckt knapp über dem Boden halten oder Hollow Hold.",
      sicherheit: "Sehr sicher, auch für Einsteiger mit empfindlichem Rücken geeignet."
    }
  },
  {
    id: "bird_dog",
    name: "Vierfüßlerstand diagonal (Bird Dog)",
    auch: ["Bird Dog", "Quadruped Opposite Arm and Leg Raise"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["ruecken_unten", "bauch"],
    sekundaer: ["gesaess", "schraege_bauch", "schulter_hinten"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    schwerer: "bird_dog_crunch",
    info: {
      kurz: "Im Vierfüßlerstand streckst du gleichzeitig einen Arm und das gegenüberliegende Bein aus. Die Übung stärkt Rückenstrecker, Gesäß und Bauch gemeinsam und gehört zu McGills „Big Three“.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, die Hände unter den Schultern, die Knie unter der Hüfte.",
        "Bring den Rücken in eine neutrale Position und spann den Bauch leicht an.",
        "Streck den rechten Arm nach vorn und das linke Bein nach hinten, bis beide etwa waagerecht sind.",
        "Schieb die Ferse nach hinten und die Hand nach vorn, als würdest du den Körper in die Länge ziehen.",
        "Halte zwei bis zehn Sekunden, ohne dass sich das Becken dreht oder der Rücken durchhängt.",
        "Führ Arm und Bein zurück, tippe Ellbogen und Knie unter dem Körper kurz an oder setz sie ab, und wechsle die Seite."
      ],
      atmung: "Beim Strecken ausatmen, in der Haltephase ruhig weiteratmen.",
      fehler: [
        "Bein zu hoch gehoben und Hohlkreuz: nur bis Hüfthöhe heben.",
        "Becken dreht zur Seite des gehobenen Beins: Hüfte waagerecht halten, kleinere Bewegung.",
        "Kopf in den Nacken: Blick zum Boden.",
        "Zu schnelles Wechseln: Haltephase bewusst einplanen."
      ],
      vorteile: [
        "Stärkt die Rückenstrecker bei sehr geringer Druckbelastung der Wirbelsäule.",
        "Trainiert die diagonale Verbindung von Schulter zu gegenüberliegender Hüfte.",
        "Verbessert die Kontrolle des Beckens und das Gleichgewicht.",
        "Für Einsteiger und bei Rückenproblemen geeignet."
      ],
      tipps: [
        "McGill empfiehlt Haltezeiten von etwa 10 Sekunden je Wiederholung.",
        "Eine Hantelscheibe oder ein Stab auf dem unteren Rücken zeigt dir sofort, ob das Becken kippt.",
        "Stell dir vor, du willst mit Hand und Ferse zwei gegenüberliegende Wände berühren."
      ],
      varianten: "Leichter: nur Arm oder nur Bein heben. Schwerer: Bird Dog mit Ellbogen-Knie-Berührung, Gewichtsmanschetten oder Stütz mit diagonalem Arm-Bein-Heben.",
      sicherheit: "Bei Handgelenks- oder Kniebeschwerden mit Fäusten oder einer weichen Unterlage arbeiten."
    }
  },
  {
    id: "bird_dog_crunch",
    name: "Bird Dog mit Ellbogen-Knie-Berührung",
    auch: ["Bird Dog Crunch", "Bird Dog Elbow to Knee"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "ruecken_unten"],
    sekundaer: ["gesaess", "schraege_bauch", "schulter_hinten"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "stuetz_diagonal",
    info: {
      kurz: "Dynamischer Bird Dog: Nach dem Strecken ziehst du Ellbogen und gegenüberliegendes Knie unter dem Körper zusammen. So wechselst du zwischen Streckung und Beugung und trainierst Rücken und Bauch im Wechsel.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, die Hände unter den Schultern, die Knie unter der Hüfte.",
        "Streck den rechten Arm nach vorn und das linke Bein nach hinten, bis beide waagerecht sind.",
        "Zieh dann Ellbogen und Knie unter dem Körper zusammen, bis sie sich berühren, der Rücken rundet sich dabei leicht.",
        "Streck Arm und Bein wieder aus und halte kurz die lange Position.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle.",
        "Das Stützbein und die Stützhand bleiben ruhig, das Becken kippt nicht zur Seite."
      ],
      atmung: "Beim Zusammenziehen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Schwung statt Kontrolle: langsam arbeiten und in der Streckung kurz halten.",
        "Hohlkreuz in der Streckung: Bein nur bis Hüfthöhe.",
        "Gewicht verschiebt sich stark zur Seite: Stützhand fest in den Boden drücken."
      ],
      vorteile: [
        "Trainiert Rückenstrecker und Bauchmuskeln abwechselnd.",
        "Verbessert Gleichgewicht und Koordination.",
        "Rückenschonend und ohne Geräte."
      ],
      tipps: [
        "Halte die gestreckte Position zwei Sekunden, das erhöht die Wirkung.",
        "Gut als Teil des Aufwärmens."
      ],
      varianten: "Leichter: klassischer Bird Dog mit Pause. Schwerer: mit Gewichtsmanschetten oder im Stütz auf den Füßen.",
      sicherheit: "Bei Kniebeschwerden eine weiche Unterlage nutzen."
    }
  },
  {
    id: "bird_dog_rudern",
    name: "Bird-Dog-Rudern mit Kurzhantel",
    auch: ["Bird Dog Row", "Quadruped Dumbbell Row"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["latissimus", "schraege_bauch"],
    sekundaer: ["oberer_ruecken", "gesaess", "ruecken_unten", "bizeps"],
    geraete: [["kurzhantel", "bank"], ["kettlebell", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 3,
    einseitig: true,
    info: {
      kurz: "Du stützt dich mit Hand und Knie auf einer Bank ab, streckst das freie Bein nach hinten und ruderst mit der freien Hand eine Kurzhantel. Rudern und diagonale Rumpfstabilität in einer Übung.",
      ausfuehrung: [
        "Stütz dich mit der linken Hand und dem rechten Knie auf einer Flachbank ab, die rechte Hand hält eine Kurzhantel neben der Bank.",
        "Streck das linke Bein nach hinten in Verlängerung des Körpers aus, es schwebt etwa auf Hüfthöhe.",
        "Bring den Rücken in eine neutrale Linie und spann Bauch und Gesäß an.",
        "Rudere die Kurzhantel zur Hüfte, der Ellbogen bleibt dicht am Körper.",
        "Senke die Hantel kontrolliert ab, ohne dass Becken oder Schultern sich drehen.",
        "Nach allen Wiederholungen wechselst du Seite und Stützbein."
      ],
      atmung: "Beim Rudern ausatmen, beim Absenken einatmen.",
      fehler: [
        "Becken dreht beim Rudern auf: Gewicht reduzieren und Gesäß des gestreckten Beins anspannen.",
        "Bein sinkt ab: Bein bewusst auf Hüfthöhe halten.",
        "Schwung aus dem Oberkörper: Bewegung nur aus dem Arm."
      ],
      vorteile: [
        "Trainiert Rücken und Rumpf gleichzeitig.",
        "Hohe Anforderung an die Stabilität über Kreuz.",
        "Deckt Seitenunterschiede in der Rumpfkontrolle auf."
      ],
      tipps: [
        "Nimm etwa die Hälfte des Gewichts, das du beim normalen einarmigen Rudern nutzt.",
        "Langsame Absenkphase von zwei bis drei Sekunden."
      ],
      varianten: "Leichter: Bein bleibt auf der Bank oder am Boden. Schwerer: Pause oben oder schwerere Hantel.",
      sicherheit: "Bei Schulter- oder Rückenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "hollow_hold",
    name: "Hollow Body Hold",
    auch: ["Hollow Hold", "Hollow Body", "Bananen-Halte"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["hueftbeuger", "schraege_bauch", "quadrizeps"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "hollow_rocks",
    info: {
      kurz: "Grundposition aus dem Turnen: In Rückenlage hebst du Schultern und gestreckte Beine an und hältst den Körper wie eine flache Banane. Sehr fordernd für die gerade Bauchmuskulatur.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Arme über dem Kopf ausgestreckt, die Beine gestreckt und geschlossen.",
        "Drück den unteren Rücken fest in den Boden, indem du das Becken einrollst und die Rippen nach unten ziehst.",
        "Heb Schultern, Arme und Beine gleichzeitig vom Boden ab, die Arme bleiben neben den Ohren.",
        "Senke die Beine so tief, wie der untere Rücken noch am Boden bleibt, etwa 15 bis 30 Zentimeter über dem Boden.",
        "Halte die Position, der Körper bildet eine leichte Bogenform.",
        "Leg dich nach der Zeit langsam ab."
      ],
      atmung: "Flach und gleichmäßig weiteratmen, die Spannung bleibt bestehen.",
      fehler: [
        "Unterer Rücken hebt ab: Beine höher halten oder Knie anziehen.",
        "Kopf weit nach vorn gezogen: Nacken lang, Blick zu den Zehen.",
        "Arme sinken zur Seite: Arme bleiben eng neben den Ohren."
      ],
      vorteile: [
        "Starke Aktivierung der geraden Bauchmuskulatur.",
        "Lehrt die Ganzkörperspannung, die im Turnen und bei Klimmzügen gebraucht wird.",
        "Ohne Geräte und überall möglich."
      ],
      tipps: [
        "Arbeite mit mehreren Sätzen von 15 bis 30 Sekunden.",
        "Die Arme neben dem Körper statt über dem Kopf machen es leichter."
      ],
      varianten: "Leichter: Knie gebeugt (Tuck Hollow) oder Arme neben dem Körper. Schwerer: Hollow Rocks, Zusatzgewicht in den Händen.",
      sicherheit: "Bei Rückenbeschwerden nur so tief gehen, wie der untere Rücken sicher am Boden bleibt."
    }
  },
  {
    id: "hollow_rocks",
    name: "Hollow Rocks",
    auch: ["Hollow Rocks", "Hollow Body Rocks"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["hueftbeuger", "schraege_bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 3,
    info: {
      kurz: "Aus dem Hollow Body Hold schaukelst du wie eine Wippe vor und zurück, ohne die Körperform zu verlieren. Eine anspruchsvolle Übung aus dem Turnen und Crossfit.",
      ausfuehrung: [
        "Geh in den Hollow Body Hold, Arme über dem Kopf, Beine gestreckt, der untere Rücken am Boden.",
        "Halte die Bogenform des Körpers fest, sie darf sich während der ganzen Übung nicht verändern.",
        "Schaukel nach hinten, bis die Füße höher sind und die Schultern den Boden fast berühren.",
        "Schaukel nach vorn, bis die Füße fast den Boden berühren und die Schultern höher sind.",
        "Die Bewegung kommt nur aus dem Schaukeln, nicht aus Beugen in Hüfte oder Schultern.",
        "Mach die vorgegebenen Wiederholungen in einem gleichmäßigen Rhythmus."
      ],
      atmung: "Kurz und gleichmäßig atmen, nicht die Luft anhalten.",
      fehler: [
        "Körper knickt in der Hüfte ein: Spannung erhöhen oder zum Halten zurückgehen.",
        "Arme schwingen mit, um Schwung zu holen: Arme bleiben fest neben den Ohren.",
        "Unterer Rücken löst sich: Becken fester einrollen."
      ],
      vorteile: [
        "Hohe Anforderung an die Spannungserhaltung unter Bewegung.",
        "Verbessert die Körperkontrolle für Turnelemente.",
        "Gut als Finisher für die Bauchmuskulatur."
      ],
      tipps: [
        "Erst 30 Sekunden Hollow Hold sauber halten, dann mit kleinen Rocks beginnen.",
        "Kleine Schaukelbewegungen sind am Anfang völlig ausreichend."
      ],
      varianten: "Leichter: Hollow Hold oder Knie leicht gebeugt. Schwerer: größerer Schaukelweg oder Zusatzgewicht.",
      sicherheit: "Bei Rückenbeschwerden vorsichtig dosieren und auf weicher Unterlage arbeiten."
    }
  },

  // ---------- L-Sitz und Hängen ----------
  {
    id: "l_sitz_dip",
    name: "L-Sitz am Barren",
    auch: ["L-Sit Hold", "Parallel Bar L-Sit", "Dip Station L-Sit"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["trizeps", "quadrizeps", "schulter_vorn", "trapez"],
    geraete: [["dip_station"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    schwerer: "l_sitz_boden",
    info: {
      kurz: "Im Stütz am Barren hebst du die gestreckten Beine waagerecht nach vorn und hältst. Der L-Sitz fordert Bauch, Hüftbeuger und Stützkraft und ist am Barren deutlich leichter als am Boden.",
      ausfuehrung: [
        "Greif die Holme der Dipstation und drück dich in den Stütz, die Arme gestreckt, die Schultern weit weg von den Ohren.",
        "Spann den Bauch an und heb die Knie zur Brust an, als Zwischenschritt.",
        "Streck die Beine nach vorn, bis sie etwa waagerecht sind, die Zehen gestreckt.",
        "Drück die Holme kräftig nach unten, der Oberkörper bleibt aufrecht, nur leicht nach vorn geneigt.",
        "Halte die Position so lange wie möglich ohne Absinken der Beine.",
        "Senke die Beine kontrolliert ab und steig aus der Station."
      ],
      atmung: "Kurz und gleichmäßig atmen, nicht pressen.",
      fehler: [
        "Schultern sinken zu den Ohren: Holme aktiv nach unten drücken.",
        "Rücken stark gerundet: Brust aufrichten.",
        "Beine sinken: Knie beugen (Tuck L-Sitz) und die Zeit sauber halten."
      ],
      vorteile: [
        "Trainiert Bauch und Hüftbeuger in verkürzter Position sehr intensiv.",
        "Stärkt die Stützkraft der Schultern und des Trizeps.",
        "Gute Vorstufe für den L-Sitz am Boden."
      ],
      tipps: [
        "Beginne mit dem Tuck L-Sitz mit angezogenen Knien und strecke dann zuerst ein Bein.",
        "Zieh die Zehen zu dir, das aktiviert die Oberschenkel und hält die Beine gerade."
      ],
      varianten: "Leichter: Knie angezogen oder ein Bein gestreckt. Schwerer: L-Sitz am Boden oder längere Haltezeit.",
      sicherheit: "Bei Schulterbeschwerden in der Stützposition vorsichtig sein."
    }
  },
  {
    id: "l_sitz_boden",
    name: "L-Sitz am Boden",
    auch: ["L-Sit Hold", "Floor L-Sit", "L-Sit"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["trizeps", "quadrizeps", "schulter_vorn"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 2 },
    stufe: 3,
    info: {
      kurz: "Du stützt dich mit den Händen neben der Hüfte auf dem Boden ab und hebst Gesäß und gestreckte Beine an. Eine sehr anspruchsvolle Turnübung für Bauch, Hüftbeuger und Stützkraft.",
      ausfuehrung: [
        "Setz dich mit gestreckten Beinen auf den Boden und setz die Hände flach neben der Hüfte auf, die Finger zeigen nach vorn.",
        "Streck die Arme durch und drück die Schultern kräftig nach unten.",
        "Spann Bauch und Oberschenkel an und heb das Gesäß vom Boden ab.",
        "Heb gleichzeitig die gestreckten Beine an, bis auch die Fersen den Boden verlassen.",
        "Halte die Position, die Beine waagerecht oder so hoch wie möglich.",
        "Setz dich nach der Zeit kontrolliert ab."
      ],
      atmung: "Kurz und gleichmäßig atmen, nicht die Luft anhalten.",
      fehler: [
        "Schultern hoch: Boden kräftig wegdrücken.",
        "Beine beugen sich: Oberschenkel anspannen, Zehen strecken.",
        "Zu lange versuchen: Sätze von 5 bis 15 Sekunden sind am Anfang ausreichend."
      ],
      vorteile: [
        "Sehr hohe Kraftanforderung an Bauch und Hüftbeuger in der verkürzten Position.",
        "Stärkt Trizeps und Schultern im Stütz.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Kurzhanteln oder zwei Blöcke unter den Händen geben mehr Platz und machen es leichter.",
        "Übe zuerst den L-Sitz am Barren, bis du 20 Sekunden schaffst."
      ],
      varianten: "Leichter: L-Sitz am Barren, Knie angezogen oder Hände auf Kurzhanteln. Schwerer: längere Haltezeit oder Beine höher (V-Sitz).",
      sicherheit: "Belastet die Handgelenke stark in der Streckung. Bei Handgelenksbeschwerden auf Griffe ausweichen oder auslassen."
    }
  },
  {
    id: "l_sitz_haengend",
    name: "L-Sitz im Hang",
    auch: ["Hanging L-Sit", "Hanging L-Hold"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["latissimus", "unterarm", "quadrizeps"],
    geraete: [["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 3,
    info: {
      kurz: "Du hängst an der Klimmzugstange und hältst die gestreckten Beine waagerecht vor dir. Fordert Bauch, Hüftbeuger und Griffkraft gleichzeitig.",
      ausfuehrung: [
        "Häng dich schulterbreit im Obergriff an die Klimmzugstange.",
        "Zieh die Schultern leicht nach unten, sodass du nicht passiv in den Gelenken hängst.",
        "Spann den Bauch an und heb die gestreckten Beine nach vorn, bis sie etwa waagerecht sind.",
        "Halte die Beine in dieser Position, ohne zu schaukeln.",
        "Senke die Beine nach der Zeit langsam ab.",
        "Lass dich kontrolliert von der Stange herunter."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Schaukeln: Bewegung zuerst mit kurzem Halt beenden, dann die Beine heben.",
        "Beine sinken: Knie beugen und zuerst die gebeugte Variante halten.",
        "Passives Hängen in den Schultern: Schultern aktiv nach unten ziehen."
      ],
      vorteile: [
        "Starke statische Belastung für Bauch und Hüftbeuger.",
        "Trainiert gleichzeitig Griffkraft und Schulterstabilität.",
        "Gute Vorbereitung auf Toes to Bar."
      ],
      tipps: [
        "Mit Zughilfen kannst du den Griff entlasten, wenn er zuerst ermüdet.",
        "Zehen strecken und Oberschenkel anspannen hält die Beine gerade."
      ],
      varianten: "Leichter: Knie angezogen halten. Schwerer: längere Haltezeit oder Beine höher.",
      sicherheit: "Bei Schulterbeschwerden im Hang vorsichtig sein."
    }
  },
  {
    id: "knieheben_dip",
    name: "Knieheben am Barren",
    auch: ["Captain's Chair Knee Raise", "Vertical Knee Raise", "Roman Chair Knee Raise"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schraege_bauch", "trizeps"],
    geraete: [["dip_station"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "beinheben_dip",
    info: {
      kurz: "Du stützt dich an der Dipstation oder im Captain's Chair auf den Unterarmen oder Händen ab und ziehst die Knie zur Brust. Eine gut kontrollierbare Übung für den unteren Bauchbereich ohne Griffermüdung.",
      ausfuehrung: [
        "Stell dich in die Dipstation oder den Captain's Chair, die Unterarme auf den Polstern oder die Hände an den Holmen, der Rücken am Polster.",
        "Lass die Beine locker hängen und drück die Schultern nach unten.",
        "Zieh die Knie nach oben zur Brust und roll das Becken am Ende leicht nach oben ein.",
        "Halte oben kurz an und spür die Spannung im Bauch.",
        "Senke die Beine langsam ab, ohne Schwung zu holen.",
        "Starte die nächste Wiederholung aus dem ruhigen Hängen."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Nur die Knie heben ohne Becken einrollen: Am Ende das Becken bewusst Richtung Brust kippen.",
        "Schwingen: Beine unten kurz zur Ruhe kommen lassen.",
        "Schultern ziehen hoch: Schultern aktiv nach unten drücken."
      ],
      vorteile: [
        "Guter Einstieg in das Beinheben, da der Griff nicht limitiert.",
        "Trainiert Bauch und Hüftbeuger.",
        "Der Rücken ist durch das Polster gestützt."
      ],
      tipps: [
        "Langsame Absenkphase von zwei bis drei Sekunden erhöht die Wirkung.",
        "Eine kleine Kurzhantel zwischen den Füßen macht es schwerer."
      ],
      varianten: "Leichter: kleinere Bewegung. Schwerer: gestreckte Beine, Kurzhantel zwischen den Füßen oder Knieheben im Hang.",
      sicherheit: "Bei Schulterbeschwerden im Stütz vorsichtig sein."
    }
  },
  {
    id: "beinheben_dip",
    name: "Beinheben am Barren",
    auch: ["Captain's Chair Leg Raise", "Vertical Leg Raise"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schraege_bauch", "quadrizeps"],
    geraete: [["dip_station"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    schwerer: "knieheben_haengend",
    info: {
      kurz: "Wie das Knieheben am Barren, aber mit gestreckten Beinen. Der längere Hebel macht die Übung deutlich schwerer für Bauch und Hüftbeuger.",
      ausfuehrung: [
        "Stütz dich in der Dipstation oder im Captain's Chair ab, der Rücken am Polster, die Schultern nach unten gedrückt.",
        "Lass die Beine gestreckt nach unten hängen.",
        "Heb die gestreckten Beine nach vorn, bis sie mindestens waagerecht sind.",
        "Roll das Becken oben leicht ein, sodass der untere Rücken sich vom Polster etwas löst.",
        "Senke die Beine langsam und kontrolliert ab.",
        "Vermeide jeglichen Schwung zwischen den Wiederholungen."
      ],
      atmung: "Beim Heben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz beim Heben: Becken einrollen und den Rücken ans Polster drücken.",
        "Schwung aus den Beinen: unten kurz pausieren.",
        "Knie beugen sich: Oberschenkel anspannen oder zur Knievariante wechseln."
      ],
      vorteile: [
        "Hoher Widerstand durch den langen Hebel.",
        "Kein limitierender Griff.",
        "Stärkt Hüftbeuger und Bauch gemeinsam."
      ],
      tipps: [
        "Wenn das Hohlkreuz zunimmt, die Knie leicht beugen.",
        "Eine Pause oben von einer Sekunde verhindert Schwung."
      ],
      varianten: "Leichter: Knieheben. Schwerer: Beinheben im Hang oder Gewichtsmanschetten.",
      sicherheit: "Bei Beschwerden im unteren Rücken die Knievariante wählen."
    }
  },
  {
    id: "knieheben_haengend",
    name: "Knieheben im Hang",
    auch: ["Hanging Knee Raise"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schraege_bauch", "latissimus", "unterarm"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 2,
    schwerer: "beinheben_haengend",
    info: {
      kurz: "Du hängst an der Klimmzugstange und ziehst die Knie zur Brust. Die Übung fordert Bauch und Hüftbeuger und nebenbei die Griffkraft.",
      ausfuehrung: [
        "Häng dich schulterbreit an die Klimmzugstange, die Arme gestreckt.",
        "Zieh die Schultern leicht nach unten und spann den Bauch an, damit du nicht schaukelst.",
        "Zieh die Knie nach oben Richtung Brust.",
        "Roll am Ende das Becken nach oben ein, als wolltest du die Knie zu den Schultern bringen.",
        "Senke die Beine langsam ab, bis sie wieder gestreckt unter dir hängen.",
        "Halte unten kurz an, damit kein Schwung entsteht."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schaukeln: Beine unten zur Ruhe kommen lassen, Bauch anspannen.",
        "Becken bleibt hinten: Bewegung endet erst, wenn sich das Becken einrollt.",
        "Schnelles Fallenlassen: Absenken bewusst über zwei Sekunden."
      ],
      vorteile: [
        "Trainiert die Bauchmuskeln durch Einrollen des Beckens.",
        "Verbessert Griffkraft und Schulterstabilität im Hang.",
        "Gute Vorstufe zum Beinheben im Hang."
      ],
      tipps: [
        "Wenn der Griff zuerst ermüdet, helfen Zughilfen oder Armschlaufen.",
        "Denk an das Einrollen des Beckens, nicht nur an das Heben der Knie."
      ],
      varianten: "Leichter: Knieheben am Barren. Schwerer: Beinheben im Hang, Toes to Bar oder Kurzhantel zwischen den Füßen.",
      sicherheit: "Bei Schulterbeschwerden im Hang vorsichtig sein."
    }
  },
  {
    id: "beinheben_haengend",
    name: "Beinheben im Hang",
    auch: ["Hanging Leg Raise", "Hängendes Beinheben"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schraege_bauch", "latissimus", "unterarm"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    schwerer: "toes_to_bar",
    info: {
      kurz: "An der Klimmzugstange hängend hebst du die gestreckten Beine nach vorn und oben. Eine der wirksamsten Übungen für die Bauchmuskeln, weil das Becken gegen einen langen Hebel eingerollt wird.",
      ausfuehrung: [
        "Häng dich schulterbreit an die Klimmzugstange und zieh die Schultern leicht nach unten.",
        "Spann Bauch und Oberschenkel an, die Beine gestreckt und geschlossen.",
        "Heb die gestreckten Beine nach vorn an, bis sie mindestens waagerecht sind.",
        "Roll im oberen Teil das Becken ein, damit wirklich die Bauchmuskeln und nicht nur die Hüftbeuger arbeiten.",
        "Senke die Beine langsam über zwei bis drei Sekunden ab.",
        "Halte unten kurz an und starte ohne Schwung neu."
      ],
      atmung: "Beim Heben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus dem Körper: Pause unten und langsames Absenken.",
        "Beine nur bis knapp unter waagerecht ohne Becken einrollen: Das trainiert vor allem die Hüftbeuger.",
        "Knie beugen sich unbemerkt: Oberschenkel anspannen oder Knievariante wählen."
      ],
      vorteile: [
        "Sehr hohe Belastung der Bauchmuskulatur, besonders im unteren Bereich.",
        "Trainiert Griffkraft und Schulterstabilität mit.",
        "Gut steigerbar über Hebel, Tempo und Zusatzgewicht."
      ],
      tipps: [
        "Jeff Nippard empfiehlt, die Beine bis über die Waagerechte zu heben und die Absenkphase zu betonen.",
        "Wenn das Schaukeln stört, lass dir an der Hüfte kurz Halt geben oder stell dich näher an eine Wand.",
        "Zughilfen nutzen, wenn der Griff vor dem Bauch versagt."
      ],
      varianten: "Leichter: Knieheben im Hang oder Beinheben am Barren. Schwerer: Toes to Bar, Gewichtsmanschetten oder Kurzhantel zwischen den Füßen.",
      sicherheit: "Bei Beschwerden im unteren Rücken oder in der Schulter mit der Knievariante beginnen."
    }
  },
  {
    id: "toes_to_bar",
    name: "Toes to Bar",
    auch: ["Toes-to-Bar", "Füße zur Stange"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["latissimus", "schraege_bauch", "unterarm"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 3,
    info: {
      kurz: "Im Hang hebst du die gestreckten Beine bis die Zehen die Stange berühren. Die schwerste Variante des Beinhebens, mit vollem Einrollen von Becken und Lendenwirbelsäule.",
      ausfuehrung: [
        "Häng dich schulterbreit im Obergriff an die Klimmzugstange.",
        "Drück die Stange gedanklich leicht nach unten, so aktivierst du den Latissimus und stabilisierst die Schultern.",
        "Heb die gestreckten Beine kraftvoll nach vorn und oben.",
        "Roll das Becken stark ein und führ die Zehen bis an die Stange.",
        "Senke die Beine kontrolliert ab, ohne nach hinten durchzuschwingen.",
        "Für reines Krafttraining jede Wiederholung aus ruhigem Hängen starten."
      ],
      atmung: "Beim Heben kräftig ausatmen, beim Absenken einatmen.",
      fehler: [
        "Starker Schwung: Für Krafttraining strikt arbeiten, ohne Kipping.",
        "Knie stark gebeugt: Beine so gestreckt wie möglich, sonst ist es eine Knievariante.",
        "Unkontrolliertes Absenken: langsam zurück, sonst entsteht Schwung."
      ],
      vorteile: [
        "Maximaler Bewegungsweg für die Bauchmuskeln im Hang.",
        "Trainiert Latissimus, Griff und Schulterstabilität mit.",
        "Hohe Anforderung an Beweglichkeit der hinteren Oberschenkel."
      ],
      tipps: [
        "Erst 10 saubere Beinheben im Hang bis zur Waagerechten, dann Toes to Bar.",
        "Leichtes Drücken gegen die Stange hilft, die Beine höher zu bekommen."
      ],
      varianten: "Leichter: Beinheben im Hang oder Knie zu den Ellbogen. Schwerer: langsamere Absenkphase oder Pause oben.",
      sicherheit: "Bei Schulter- oder Rückenbeschwerden vorsichtig dosieren, kein Kipping."
    }
  },
  {
    id: "knieheben_haengend_schraeg",
    name: "Schräges Knieheben im Hang",
    auch: ["Hanging Oblique Knee Raise", "Hanging Oblique Raise"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["hueftbeuger", "unterarm", "latissimus"],
    geraete: [["klimmzugstange"], ["dip_station"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "scheibenwischer_haengend",
    info: {
      kurz: "Knieheben im Hang oder am Barren, bei dem du die Knie abwechselnd schräg zur rechten und linken Schulter ziehst. So verlagert sich die Arbeit stärker auf die schrägen Bauchmuskeln.",
      ausfuehrung: [
        "Häng dich an die Klimmzugstange oder stütz dich in der Dipstation ab, die Schultern nach unten gezogen.",
        "Lass die Beine ruhig hängen und spann den Bauch an.",
        "Zieh die Knie nach oben und gleichzeitig schräg zur rechten Schulter, das Becken dreht dabei mit.",
        "Halte oben kurz an und spür die Spannung in der seitlichen Bauchmuskulatur.",
        "Senke die Beine langsam zur Mitte ab und wechsle beim nächsten Mal die Seite.",
        "Vermeide Schwung zwischen den Wiederholungen."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwingen von Seite zu Seite: Beine unten in der Mitte zur Ruhe kommen lassen.",
        "Nur Knie zur Seite schieben ohne Beckenrotation: Becken bewusst schräg einrollen.",
        "Oberkörper dreht mit: Schultern bleiben gerade zur Stange."
      ],
      vorteile: [
        "Trainiert schräge und gerade Bauchmuskeln gemeinsam.",
        "Ergänzt das gerade Knieheben um eine Rotationskomponente.",
        "Vorstufe für Scheibenwischer im Hang."
      ],
      tipps: [
        "Am Barren ist die Übung ruhiger und leichter zu kontrollieren.",
        "Langsame Ausführung verhindert Pendeln."
      ],
      varianten: "Leichter: am Barren mit Rückenpolster. Schwerer: Beine gestreckt oder Scheibenwischer im Hang.",
      sicherheit: "Bei Schulter- oder Rückenbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "scheibenwischer_haengend",
    name: "Scheibenwischer im Hang",
    auch: ["Hanging Windshield Wipers", "Hanging Wipers"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["hueftbeuger", "latissimus", "unterarm"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 3,
    info: {
      kurz: "Im Hang hebst du die Beine bis über die Stangenhöhe und schwenkst sie dann wie einen Scheibenwischer von Seite zu Seite. Eine der anspruchsvollsten Übungen für die schrägen Bauchmuskeln.",
      ausfuehrung: [
        "Häng dich im Obergriff schulterbreit an die Klimmzugstange.",
        "Heb die gestreckten oder leicht gebeugten Beine an, bis die Füße etwa auf Höhe der Stange sind.",
        "Schwenke die Beine kontrolliert zur rechten Seite, das Becken dreht mit, der Oberkörper bleibt zur Stange ausgerichtet.",
        "Führe die Beine über die Mitte auf die linke Seite.",
        "Halte die Beine während des ganzen Satzes oben.",
        "Senke die Beine am Satzende langsam ab."
      ],
      atmung: "Bei jedem Schwenk zur Seite ausatmen, in der Mitte einatmen.",
      fehler: [
        "Oberkörper dreht sich mit: Latissimus anspannen und die Stange gedanklich nach unten drücken.",
        "Beine sinken ab: kleinerer Bewegungsweg oder gebeugte Knie.",
        "Schwung statt Kontrolle: langsam arbeiten."
      ],
      vorteile: [
        "Sehr hohe Belastung der schrägen Bauchmuskeln.",
        "Fordert Griff, Latissimus und Schulterstabilität.",
        "Beeindruckende Kraftübung für Fortgeschrittene."
      ],
      tipps: [
        "Beginne mit gebeugten Knien und kleinen Bewegungen.",
        "Liegende Scheibenwischer sind eine gute Vorübung."
      ],
      varianten: "Leichter: liegende Scheibenwischer oder schräges Knieheben. Schwerer: gestreckte Beine und größerer Bewegungsweg.",
      sicherheit: "Bei Rücken- oder Schulterbeschwerden auslassen oder die liegende Variante wählen."
    }
  },

  // ---------- Crunches und Beugen ----------
  {
    id: "crunch",
    name: "Crunch",
    auch: ["Crunch", "Bauchpresse", "Floor Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { nacken: 1 },
    stufe: 1,
    schwerer: "crunch_gewicht",
    info: {
      kurz: "Die klassische Bauchübung: In Rückenlage rollst du den Oberkörper ein, bis sich die Schulterblätter vom Boden lösen. Trainiert die gerade Bauchmuskulatur gezielt über die Beugung der Wirbelsäule.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell die Füße hüftbreit auf, die Knie etwa 90 Grad gebeugt.",
        "Leg die Fingerspitzen locker an die Schläfen oder kreuze die Arme vor der Brust.",
        "Zieh die Rippen Richtung Becken und roll den Oberkörper Wirbel für Wirbel ein, bis die Schulterblätter vom Boden abheben.",
        "Halte oben eine Sekunde und spann den Bauch bewusst fest an.",
        "Roll langsam wieder ab, bis die Schultern den Boden fast berühren.",
        "Starte die nächste Wiederholung, ohne den Kopf ganz abzulegen."
      ],
      atmung: "Beim Einrollen ausatmen, beim Abrollen einatmen.",
      fehler: [
        "Am Kopf ziehen: Hände nur an die Schläfen, der Nacken bleibt entspannt.",
        "Schwung aus dem Oberkörper: langsam einrollen und oben halten.",
        "Gerader Rücken statt Einrollen: Denk an das Annähern von Rippen und Becken.",
        "Kinn auf der Brust: Zwischen Kinn und Brust passt eine Faust."
      ],
      vorteile: [
        "Isoliert die gerade Bauchmuskulatur gut.",
        "Einfach zu lernen und überall möglich.",
        "Geringe Belastung für den unteren Rücken, da sich nur der obere Rücken hebt."
      ],
      tipps: [
        "Kurze Bewegung, lange Spannung: Der Crunch ist kein Sit-up.",
        "Sobald 20 saubere Wiederholungen gelingen, mit Zusatzgewicht oder am Kabel arbeiten."
      ],
      varianten: "Leichter: Arme nach vorn gestreckt. Schwerer: mit Gewicht, auf dem Gymnastikball oder am Kabelzug.",
      sicherheit: "Bei Nackenbeschwerden den Kopf mit einer Hand stützen, ohne zu ziehen. Bei Bandscheibenproblemen vorher abklären."
    }
  },
  {
    id: "crunch_gewicht",
    name: "Crunch mit Zusatzgewicht",
    auch: ["Weighted Crunch", "Plate Crunch", "Dumbbell Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch"],
    geraete: [["hantelscheibe"], ["kurzhantel"], ["medizinball"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Crunch mit einer Hantelscheibe oder Kurzhantel auf der Brust. So kannst du die Bauchmuskeln wie jeden anderen Muskel im Bereich von 8 bis 15 Wiederholungen trainieren.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Füße flach am Boden, die Knie gebeugt.",
        "Halte die Hantelscheibe oder Kurzhantel mit beiden Händen fest auf der Brust.",
        "Roll den Oberkörper ein, bis die Schulterblätter sich deutlich vom Boden lösen.",
        "Halte oben kurz an und drück die Rippen aktiv Richtung Becken.",
        "Roll langsam über zwei bis drei Sekunden ab.",
        "Wiederhole ohne Schwung, der Kopf bleibt dabei locker."
      ],
      atmung: "Beim Einrollen ausatmen, beim Abrollen einatmen.",
      fehler: [
        "Zu schweres Gewicht und Schwung: Gewicht reduzieren, Bewegung kontrollieren.",
        "Gewicht vom Körper weggestreckt: Hantel nah an der Brust halten, sonst steigt die Last stark.",
        "Nacken verkrampft: Blick schräg nach oben, Kinn locker."
      ],
      vorteile: [
        "Ermöglicht klassische Hypertrophie-Sätze für die Bauchmuskeln.",
        "Messbare Steigerung über das Gewicht.",
        "Wenig Platz und Ausrüstung nötig."
      ],
      tipps: [
        "Ein Kissen oder eine zusammengerollte Matte unter dem unteren Rücken vergrößert den Bewegungsweg und die Dehnung.",
        "Je weiter die Hantel Richtung Kopf gehalten wird, desto schwerer wird es."
      ],
      varianten: "Leichter: normaler Crunch. Schwerer: Gewicht über dem Kopf ausgestreckt oder Crunch auf dem Gymnastikball.",
      sicherheit: "Bei Nacken- oder Bandscheibenbeschwerden zuerst den Crunch ohne Gewicht oder den McGill Curl-up wählen."
    }
  },
  {
    id: "kabel_crunch",
    name: "Kabel-Crunch kniend",
    auch: ["Cable Crunch", "Kneeling Cable Crunch", "Rope Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch", "latissimus"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Du kniest vor dem hohen Kabelzug und rollst den Oberkörper mit dem Seil nach unten ein. Durch die einstellbare Last und die konstante Spannung ist das eine der besten Übungen für den Muskelaufbau am Bauch.",
      ausfuehrung: [
        "Befestige ein Seil am oberen Kabelzug und knie dich etwa eine Armlänge davor hin.",
        "Greif das Seil mit beiden Händen und führ die Hände neben den Kopf oder an die Stirn.",
        "Lehn dich leicht nach vorn, die Hüfte etwas gebeugt, und spann den Bauch an.",
        "Roll den Oberkörper ein, indem du die Rippen Richtung Becken ziehst, die Ellbogen wandern Richtung Oberschenkel.",
        "Die Hüfte bleibt dabei fast an Ort und Stelle, die Bewegung kommt aus der Wirbelsäule.",
        "Lass dich langsam wieder nach oben ziehen, bis du eine Dehnung im Bauch spürst."
      ],
      atmung: "Beim Einrollen kräftig ausatmen, beim Aufrichten einatmen.",
      fehler: [
        "Mit der Hüfte nach hinten setzen statt einrollen: Hüfte bleibt hoch, nur der Rücken rundet sich.",
        "Mit den Armen ziehen: Die Hände bleiben fest am Kopf.",
        "Zu schweres Gewicht: Wenn der Körper nach oben gezogen wird, Last reduzieren.",
        "Keine Dehnung oben: Oben die volle Streckung des Rumpfes zulassen."
      ],
      vorteile: [
        "Konstante Spannung über den ganzen Bewegungsweg.",
        "Genaue Steigerung über die Last, ideal für Muskelaufbau.",
        "Trainiert die Bauchmuskeln in gedehnter und verkürzter Position."
      ],
      tipps: [
        "Jeff Nippard empfiehlt, oben die Wirbelsäule bewusst zu strecken und dann Wirbel für Wirbel einzurollen.",
        "Denk an das Bild, das Brustbein Richtung Bauchnabel zu bringen.",
        "8 bis 15 Wiederholungen mit langsamer Rückbewegung sind ein guter Bereich."
      ],
      varianten: "Leichter: weniger Gewicht oder mit Band. Schwerer: mehr Gewicht, Pause unten oder Schrägvariante zu jeder Seite.",
      sicherheit: "Bei Bandscheibenproblemen vorher abklären, ob Beugungsübungen unter Last für dich geeignet sind."
    }
  },
  {
    id: "crunch_maschine",
    name: "Crunch an der Bauchmaschine",
    auch: ["Ab Crunch Machine", "Machine Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Crunch an einer Maschine mit Polstern für Brust oder Arme. Die geführte Bewegung macht es einfach, die Bauchmuskeln mit schwerer Last zu trainieren.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Polster auf Brusthöhe oder an den Oberarmen liegen.",
        "Setz dich, hak die Füße unter die Fußpolster und greif die Griffe.",
        "Spann den Bauch an und roll den Oberkörper nach vorn unten ein.",
        "Halte die Position kurz, wenn der Bauch maximal verkürzt ist.",
        "Lass das Gewicht langsam zurück, bis du eine leichte Dehnung im Bauch spürst.",
        "Bewege dich gleichmäßig, ohne dass das Gewicht aufschlägt."
      ],
      atmung: "Beim Einrollen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Mit den Armen ziehen: Arme nur als Verbindung, der Bauch arbeitet.",
        "Hüfte beugt statt Wirbelsäule: Denk an das Einrollen des Oberkörpers.",
        "Zu schnell: langsame Rückbewegung bringt mehr."
      ],
      vorteile: [
        "Einfach zu erlernen und sehr gut dosierbar.",
        "Gute Wahl für schwere Sätze am Bauch.",
        "Stabile Position mit wenig Koordinationsanspruch."
      ],
      tipps: [
        "Wähle eine Last, mit der du 10 bis 15 kontrollierte Wiederholungen schaffst.",
        "Konzentriere dich auf die Spannung am Ende, nicht auf das Gewicht."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause in der Endposition oder langsamere Rückbewegung.",
      sicherheit: "Bei Bandscheibenproblemen vorher abklären."
    }
  },
  {
    id: "crunch_ball",
    name: "Crunch auf dem Gymnastikball",
    auch: ["Stability Ball Crunch", "Swiss Ball Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { nacken: 1, ruecken: 1 },
    stufe: 1,
    schwerer: "crunch_gewicht",
    info: {
      kurz: "Crunch mit dem unteren Rücken auf einem Gymnastikball. Die gewölbte Unterlage erlaubt eine Dehnung der Bauchmuskeln, die am Boden nicht möglich ist, und vergrößert so den Bewegungsweg.",
      ausfuehrung: [
        "Setz dich auf den Ball und lauf mit den Füßen nach vorn, bis der untere und mittlere Rücken auf dem Ball liegen.",
        "Stell die Füße hüftbreit oder etwas breiter auf, die Knie etwa 90 Grad gebeugt.",
        "Leg die Hände an die Schläfen oder kreuze sie vor der Brust und lass den Oberkörper über den Ball nach hinten sinken, bis du eine Dehnung im Bauch spürst.",
        "Roll den Oberkörper ein, bis der Bauch maximal verkürzt ist.",
        "Halte oben kurz an und roll langsam wieder in die Dehnung zurück.",
        "Der Ball bleibt während der ganzen Übung ruhig."
      ],
      atmung: "Beim Einrollen ausatmen, beim Zurückrollen einatmen.",
      fehler: [
        "Ball rollt mit: Füße breiter stellen und Gesäß ruhig halten.",
        "Zu weit nach hinten überstrecken: nur bis zu einer angenehmen Dehnung.",
        "Am Kopf ziehen: Nacken entspannt lassen."
      ],
      vorteile: [
        "Größerer Bewegungsweg mit Dehnung der Bauchmuskeln.",
        "Die instabile Unterlage fordert zusätzlich die Stabilität.",
        "Mit Gewicht auf der Brust gut steigerbar."
      ],
      tipps: [
        "Eine Hantelscheibe auf der Brust macht den Ball-Crunch zu einer vollwertigen Muskelaufbauübung.",
        "Je weiter der Ball unter dem unteren Rücken liegt, desto größer die Dehnung."
      ],
      varianten: "Leichter: Ball weiter Richtung Schulterblätter. Schwerer: Füße enger oder Gewicht auf der Brust.",
      sicherheit: "Bei Bandscheibenproblemen die Überstreckung meiden und vorher abklären."
    }
  },
  {
    id: "reverse_crunch",
    name: "Reverse Crunch",
    auch: ["Reverse Crunch", "Umgekehrter Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["hueftbeuger", "schraege_bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "reverse_crunch_schraeg",
    info: {
      kurz: "In Rückenlage rollst du das Becken nach oben ein und hebst die Hüfte leicht vom Boden ab. Hier bewegt sich das Becken zum Brustkorb statt umgekehrt, das betont den unteren Bauch.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Arme neben dem Körper, die Handflächen nach unten.",
        "Heb die Beine an, die Knie gebeugt, die Oberschenkel etwa senkrecht.",
        "Zieh die Knie Richtung Brust und roll das Becken ein, bis das Gesäß sich vom Boden löst.",
        "Halte oben kurz an, ohne dich mit den Händen abzudrücken.",
        "Senke das Becken Wirbel für Wirbel langsam ab, bis die Oberschenkel wieder senkrecht sind.",
        "Lass die Füße zwischen den Wiederholungen nicht auf den Boden fallen."
      ],
      atmung: "Beim Einrollen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus den Beinen: Bewegung startet aus dem Bauch, langsam und kontrolliert.",
        "Beine strecken und senken sich zu weit: Kniewinkel konstant halten.",
        "Mit den Händen abdrücken: Hände nur zur Stabilisierung."
      ],
      vorteile: [
        "Trainiert die Bauchmuskeln über die Beckenbewegung.",
        "Schont den Nacken, weil der Kopf liegen bleibt.",
        "Gute Vorbereitung für das Beinheben im Hang."
      ],
      tipps: [
        "Stell dir vor, du willst die Knie zur Stirn bringen.",
        "Halte die Spannung, indem du unten nicht ganz ablegst."
      ],
      varianten: "Leichter: kleinerer Bewegungsweg. Schwerer: auf der Schrägbank, mit Gewicht zwischen den Füßen oder Beinheben im Hang.",
      sicherheit: "Bei Beschwerden im unteren Rücken langsam und kontrolliert arbeiten."
    }
  },
  {
    id: "reverse_crunch_schraeg",
    name: "Reverse Crunch auf der Schrägbank",
    auch: ["Incline Reverse Crunch", "Decline Bench Reverse Crunch"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["hueftbeuger", "schraege_bauch"],
    geraete: [["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    schwerer: "knieheben_haengend",
    info: {
      kurz: "Reverse Crunch auf einer schräg gestellten Bank, der Kopf liegt oben. Durch die Neigung arbeitest du gegen mehr Schwerkraft und der Bauch wird stärker belastet als am Boden.",
      ausfuehrung: [
        "Stell eine Bank auf eine leichte Negativneigung und leg dich mit dem Kopf am oberen Ende darauf.",
        "Greif hinter dem Kopf die Bank oder die Fußrolle fest.",
        "Heb die Beine an, die Knie gebeugt, und spann den Bauch an.",
        "Roll das Becken ein und zieh die Knie Richtung Brust, bis sich die Hüfte von der Bank löst.",
        "Senke das Becken langsam wieder ab, die Beine bleiben über der Bank.",
        "Wiederhole ohne Schwung, die Beine bleiben zwischen den Wiederholungen in der Luft."
      ],
      atmung: "Beim Einrollen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus den Beinen: langsam arbeiten und oben kurz halten.",
        "Becken rollt nicht ein: Die Hüfte muss sich von der Bank lösen.",
        "Zu steile Neigung: lieber flacher beginnen."
      ],
      vorteile: [
        "Mehr Widerstand als der Reverse Crunch am Boden.",
        "Über den Neigungswinkel gut dosierbar.",
        "Gut für den unteren Bauchbereich."
      ],
      tipps: [
        "Jede Stufe der Bankneigung macht die Übung spürbar schwerer.",
        "Pause oben für eine Sekunde."
      ],
      varianten: "Leichter: flachere Bank oder Boden. Schwerer: steilere Neigung oder gestreckte Beine.",
      sicherheit: "Bei Bluthochdruck die Kopf-tief-Position nicht zu steil wählen."
    }
  },
  {
    id: "sit_up_negativ",
    name: "Sit-up auf der Negativbank",
    auch: ["Decline Sit-Up", "Decline Bench Sit-Up"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schraege_bauch"],
    geraete: [["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    info: {
      kurz: "Sit-up auf einer nach unten geneigten Bank mit fixierten Füßen. Durch die Neigung und den vollen Bewegungsweg werden Bauch und Hüftbeuger stark gefordert.",
      ausfuehrung: [
        "Stell die Bank auf eine Negativneigung und hak die Füße unter die Fußpolster.",
        "Leg dich zurück, die Hände an den Schläfen oder vor der Brust verschränkt.",
        "Roll zuerst den Oberkörper ein, als würdest du einen Crunch machen.",
        "Setz die Bewegung fort, bis der Oberkörper aufrecht ist.",
        "Senke dich langsam wieder ab, zuerst den unteren, dann den oberen Rücken.",
        "Stoppe kurz bevor die Schultern die Bank berühren und starte erneut."
      ],
      atmung: "Beim Aufrichten ausatmen, beim Absenken einatmen.",
      fehler: [
        "Mit geradem Rücken hochreißen: zuerst einrollen, dann aufrichten.",
        "Am Kopf ziehen: Hände nur an den Schläfen.",
        "Fallen lassen: Absenken über zwei bis drei Sekunden."
      ],
      vorteile: [
        "Großer Bewegungsweg für die Bauchmuskeln.",
        "Hoher Widerstand ohne Zusatzgewicht.",
        "Mit einer Hantelscheibe gut steigerbar."
      ],
      tipps: [
        "Eine Hantelscheibe vor der Brust erhöht die Last.",
        "Flache Neigung wählen, bis 15 saubere Wiederholungen gelingen."
      ],
      varianten: "Leichter: flachere Bank oder nur Crunch-Bewegung. Schwerer: steilere Neigung oder Scheibe vor der Brust.",
      sicherheit: "Bei Bandscheibenproblemen oder Beschwerden im unteren Rücken zuerst den Crunch oder McGill Curl-up wählen."
    }
  },
  {
    id: "mcgill_curl_up",
    name: "McGill Curl-up",
    auch: ["McGill Curl-Up", "Modified Curl-Up"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["schraege_bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Eine von Stuart McGill entwickelte Version des Crunches: Der untere Rücken bleibt durch die Hände in seiner natürlichen Wölbung, Kopf und Schultern heben sich nur wenige Zentimeter. Teil der „Big Three“ für einen belastbaren Rücken.",
      ausfuehrung: [
        "Leg dich auf den Rücken, ein Bein gestreckt, das andere gebeugt mit dem Fuß am Boden.",
        "Schieb beide Hände flach unter den unteren Rücken, um seine natürliche Wölbung zu stützen.",
        "Spann den Bauch an, als würdest du einen leichten Stoß erwarten, ohne den Rücken flach zu drücken.",
        "Heb Kopf und Schultern nur wenige Zentimeter vom Boden ab, der Kopf bleibt in Linie mit dem Brustkorb.",
        "Halte etwa 8 bis 10 Sekunden und atme dabei weiter.",
        "Senke dich ab und wiederhole, wechsle nach der Hälfte das gebeugte Bein."
      ],
      atmung: "In der Haltephase flach und gleichmäßig weiteratmen.",
      fehler: [
        "Kinn zur Brust ziehen: Kopf und Hals bleiben als Einheit mit dem Brustkorb.",
        "Zu hoch kommen: Es reichen wenige Zentimeter.",
        "Unteren Rücken flach drücken: Die natürliche Wölbung bleibt über den Händen erhalten."
      ],
      vorteile: [
        "Trainiert die Bauchmuskeln bei sehr geringer Belastung der Wirbelsäule.",
        "Gut geeignet bei empfindlichem Rücken.",
        "Verbessert die Ausdauer der Rumpfmuskulatur."
      ],
      tipps: [
        "McGill empfiehlt eine absteigende Pyramide, zum Beispiel 6, 4 und 2 Wiederholungen mit je 10 Sekunden Halt.",
        "Ellbogen leicht vom Boden abheben macht es schwerer."
      ],
      varianten: "Leichter: kürzer halten. Schwerer: Ellbogen abheben, länger halten oder mehr Wiederholungen.",
      sicherheit: "Sehr rückenfreundlich. Bei akuten Schmerzen trotzdem abklären lassen."
    }
  },
  {
    id: "beinheben_liegend",
    name: "Beinheben liegend",
    auch: ["Lying Leg Raise", "Floor Leg Raise"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["quadrizeps"],
    geraete: [[], ["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    schwerer: "beinheben_haengend",
    info: {
      kurz: "In Rückenlage hebst und senkst du die gestreckten Beine, während der untere Rücken am Boden bleibt. Fordert Bauch und Hüftbeuger, besonders beim langsamen Absenken.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Hände neben dem Gesäß oder unter dem Kopf, auf einer Bank auch hinter dem Kopf an der Bank.",
        "Streck die Beine aus und schließe sie.",
        "Drück den unteren Rücken in den Boden und heb die gestreckten Beine an, bis sie senkrecht stehen.",
        "Heb am Ende das Gesäß leicht an, um das Becken einzurollen.",
        "Senke die Beine langsam ab, nur so tief, wie der untere Rücken am Boden bleibt.",
        "Starte die nächste Wiederholung, bevor die Füße den Boden berühren."
      ],
      atmung: "Beim Heben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz beim Absenken: Beine nicht so tief senken oder Knie beugen.",
        "Schwung: langsam heben und noch langsamer senken.",
        "Mit den Händen stark drücken: nur stabilisieren."
      ],
      vorteile: [
        "Trainiert Bauch und Hüftbeuger ohne Geräte.",
        "Betont die exzentrische Kontrolle.",
        "Vorbereitung auf Beinheben im Hang."
      ],
      tipps: [
        "Auf einer Bank kannst du die Beine tiefer absenken und den Bewegungsweg vergrößern.",
        "Wenn der Rücken nicht am Boden bleibt, Knie beugen."
      ],
      varianten: "Leichter: Knie gebeugt oder Reverse Crunch. Schwerer: auf der Bank, langsamer oder mit Gewicht zwischen den Füßen.",
      sicherheit: "Bei Beschwerden im unteren Rücken die gebeugte Variante wählen."
    }
  },
  {
    id: "v_up",
    name: "Klappmesser (V-Up)",
    auch: ["V-Up", "Jackknife Sit-Up", "Klappmesser"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schraege_bauch", "quadrizeps"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Du hebst gleichzeitig gestreckte Arme und Beine an und triffst dich mit den Händen über der Hüfte. Eine dynamische Übung, die Bauch und Hüftbeuger mit großem Bewegungsweg trainiert.",
      ausfuehrung: [
        "Leg dich gestreckt auf den Rücken, die Arme über dem Kopf, die Beine geschlossen.",
        "Spann den Bauch an und drück den unteren Rücken in den Boden.",
        "Heb Oberkörper und gestreckte Beine gleichzeitig an, sodass sich Hände und Füße über der Hüfte treffen.",
        "Balanciere oben kurz auf dem Gesäß in einer V-Form.",
        "Senke Arme und Beine kontrolliert gleichzeitig wieder ab.",
        "Berühre den Boden nur kurz, bevor die nächste Wiederholung beginnt."
      ],
      atmung: "Beim Hochkommen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus den Armen: Bewegung aus dem Bauch einleiten.",
        "Beine beugen sich: Oberschenkel anspannen oder leichtere Variante wählen.",
        "Unkontrolliertes Fallenlassen: Absenken langsam."
      ],
      vorteile: [
        "Großer Bewegungsweg für Bauch und Hüftbeuger.",
        "Fordert Koordination und Körperspannung.",
        "Ohne Geräte überall möglich."
      ],
      tipps: [
        "Beginne mit der Tuck-Version mit angezogenen Knien.",
        "Den Blick zu den Händen richten hilft beim Einrollen."
      ],
      varianten: "Leichter: Knie gebeugt (Tuck-Up) oder einbeinig. Schwerer: mit leichtem Medizinball in den Händen.",
      sicherheit: "Bei Bandscheiben- oder Rückenbeschwerden lieber Dead Bug oder Reverse Crunch wählen."
    }
  },
  {
    id: "schraeger_crunch",
    name: "Schräger Crunch",
    auch: ["Oblique Crunch", "Cross-Body Crunch", "Diagonaler Crunch"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { nacken: 1 },
    stufe: 1,
    einseitig: true,
    schwerer: "fahrrad_crunch",
    info: {
      kurz: "Crunch mit Drehung, bei dem du eine Schulter Richtung gegenüberliegendes Knie führst. Betont die schrägen Bauchmuskeln.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell den linken Fuß auf und leg den rechten Knöchel auf das linke Knie.",
        "Leg die linke Hand an die Schläfe, der rechte Arm liegt seitlich am Boden.",
        "Roll den Oberkörper ein und dreh die linke Schulter Richtung rechtes Knie.",
        "Halte oben kurz an und spür die Spannung in der seitlichen Bauchmuskulatur.",
        "Roll langsam wieder ab, bis die Schulter den Boden fast berührt.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Einrollen ausatmen, beim Abrollen einatmen.",
      fehler: [
        "Nur den Ellbogen bewegen: Die Schulter dreht mit, nicht nur der Arm.",
        "Am Kopf ziehen: Nacken entspannt lassen.",
        "Zu schnell: Pause oben bewusst einplanen."
      ],
      vorteile: [
        "Gezielte Arbeit für die schrägen Bauchmuskeln.",
        "Einfach und ohne Geräte.",
        "Gute Ergänzung zum geraden Crunch."
      ],
      tipps: [
        "Denk an das Bild, die Rippen der einen Seite zur gegenüberliegenden Hüfte zu bringen.",
        "Langsame Wiederholungen mit kurzer Pause bringen mehr als schnelle."
      ],
      varianten: "Leichter: kleinere Bewegung. Schwerer: Fahrrad-Crunch oder mit Kabel.",
      sicherheit: "Bei Nackenbeschwerden den Kopf ohne Zug abstützen."
    }
  },
  {
    id: "fahrrad_crunch",
    name: "Fahrrad-Crunch",
    auch: ["Bicycle Crunch", "Bicycle Kicks"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["hueftbeuger"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "In Rückenlage führst du abwechselnd den Ellbogen zum gegenüberliegenden Knie, während das andere Bein gestreckt wird. Die Bewegung erinnert an Radfahren und trainiert gerade und schräge Bauchmuskeln gemeinsam.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Fingerspitzen an den Schläfen, die Beine angehoben mit 90 Grad in Hüfte und Knie.",
        "Heb die Schulterblätter leicht vom Boden ab und drück den unteren Rücken in den Boden.",
        "Zieh das rechte Knie Richtung Brust und dreh die linke Schulter zum rechten Knie, während das linke Bein nach vorn gestreckt wird.",
        "Halte die Drehung kurz und wechsle dann langsam die Seite.",
        "Die Schultern bleiben während des ganzen Satzes vom Boden abgehoben.",
        "Arbeite langsam und kontrolliert, etwa eine Sekunde je Seite."
      ],
      atmung: "Bei jeder Drehung ausatmen.",
      fehler: [
        "Zu schnell treten: Die Drehung des Oberkörpers geht dabei verloren. Langsam arbeiten.",
        "Nur den Ellbogen bewegen: Die ganze Schulter dreht zum Knie.",
        "Hohlkreuz beim Strecken des Beins: Bein höher halten."
      ],
      vorteile: [
        "Hohe Aktivierung der schrägen und geraden Bauchmuskeln.",
        "Ohne Geräte überall möglich.",
        "Verbindet Rotation mit Hüftbeugung."
      ],
      tipps: [
        "Halte jede Drehung eine Sekunde, das verhindert das schnelle Durchtreten.",
        "Je tiefer das gestreckte Bein, desto schwerer."
      ],
      varianten: "Leichter: Beine höher oder Füße am Boden. Schwerer: Bein knapp über dem Boden strecken oder Pause in der Drehung verlängern.",
      sicherheit: "Bei Nackenbeschwerden die Hände nicht hinter den Kopf ziehen."
    }
  },
  {
    id: "scheibenwischer_liegend_rumpf",
    name: "Liegende Scheibenwischer für den Rumpf",
    auch: ["Lying Windshield Wipers", "Floor Wipers"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "hueftbeuger"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "scheibenwischer_haengend",
    info: {
      kurz: "In Rückenlage mit angehobenen Beinen kippst du die Beine kontrolliert von Seite zu Seite, während die Schultern am Boden bleiben. Trainiert die schrägen Bauchmuskeln und die Kontrolle der Rotation zwischen Becken und Brustkorb.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Arme seitlich ausgebreitet, die Handflächen am Boden.",
        "Heb die Beine an, Knie gebeugt oder gestreckt, bis die Oberschenkel senkrecht stehen.",
        "Spann den Bauch an und senke die Beine langsam zur rechten Seite ab.",
        "Geh nur so weit, wie die linke Schulter am Boden bleibt.",
        "Zieh die Beine über die schrägen Bauchmuskeln zurück zur Mitte und senke sie zur anderen Seite.",
        "Arbeite langsam, etwa zwei Sekunden je Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Zurückholen ausatmen.",
      fehler: [
        "Beine fallen zur Seite: Bewegung kontrollieren und Weg verkürzen.",
        "Schulter hebt sich ab: weniger weit absenken.",
        "Schwung: langsam und gleichmäßig arbeiten."
      ],
      vorteile: [
        "Trainiert die schrägen Bauchmuskeln in Rotation.",
        "Verbessert die Kontrolle zwischen Becken und Oberkörper.",
        "Vorbereitung für Scheibenwischer im Hang."
      ],
      tipps: [
        "Mit gebeugten Knien beginnen, gestreckte Beine sind deutlich schwerer.",
        "Ein Medizinball zwischen den Knien erhöht die Last."
      ],
      varianten: "Leichter: Knie gebeugt, kleinerer Weg. Schwerer: gestreckte Beine oder Scheibenwischer im Hang.",
      sicherheit: "Bei Bandscheibenproblemen oder Rückenschmerzen in Rotation vorsichtig dosieren oder auslassen."
    }
  },

  // ---------- Rollouts ----------
  {
    id: "rollout_ball",
    name: "Rollout auf dem Gymnastikball",
    auch: ["Stability Ball Rollout", "Swiss Ball Rollout", "Ball Rollout"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["latissimus", "schraege_bauch", "schulter_vorn"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "rollout_kniend",
    info: {
      kurz: "Kniend rollst du einen Gymnastikball mit den Unterarmen nach vorn und ziehst ihn wieder zurück. Die einfachste Rollout-Variante, ideal als Einstieg in diese sehr wirksame Bauchübung.",
      ausfuehrung: [
        "Knie dich vor den Ball und leg die Unterarme oder Fäuste darauf, die Knie hüftbreit.",
        "Bring Rumpf und Oberschenkel in eine Linie und spann Bauch und Gesäß an.",
        "Roll den Ball langsam nach vorn, die Arme gleiten über den Ball, die Hüfte wandert mit nach vorn.",
        "Geh nur so weit, wie du ohne Hohlkreuz bleibst.",
        "Zieh den Ball mit den Unterarmen über die Bauchspannung zurück in die Ausgangsposition.",
        "Der Rücken bleibt die ganze Zeit neutral."
      ],
      atmung: "Beim Vorrollen einatmen, beim Zurückziehen ausatmen.",
      fehler: [
        "Hohlkreuz: kürzerer Weg und Gesäß fester.",
        "Hüfte bleibt hinten: Hüfte und Schultern bewegen sich gemeinsam nach vorn.",
        "Zu schnell: langsames Rollen in beide Richtungen."
      ],
      vorteile: [
        "Leichter Einstieg in Rollouts.",
        "Starke Anti-Extensionsbelastung für den Bauch.",
        "Bereitet Schultern und Rumpf auf den Ab-Roller vor."
      ],
      tipps: [
        "Je weiter du rollst, desto schwerer wird es.",
        "Ein großer Ball macht es leichter, ein kleiner schwerer."
      ],
      varianten: "Leichter: kürzerer Weg. Schwerer: Rollout mit Ab-Roller oder Langhantel.",
      sicherheit: "Bei Beschwerden im unteren Rücken nur so weit rollen, wie es schmerzfrei ohne Hohlkreuz gelingt."
    }
  },
  {
    id: "rollout_kniend",
    name: "Rollout kniend",
    auch: ["Ab Wheel Rollout", "Kneeling Ab Wheel Rollout", "Barbell Rollout", "Bauchroller"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["latissimus", "schraege_bauch", "schulter_vorn", "trizeps"],
    geraete: [["langhantel"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "rollout_stehend",
    hinweis: "Mit Ab-Roller oder einer Langhantel mit runden Scheiben.",
    info: {
      kurz: "Kniend rollst du einen Ab-Roller oder eine Langhantel mit runden Scheiben weit nach vorn und ziehst dich zurück. Eine der wirksamsten Übungen gegen das Hohlkreuz, mit hoher Belastung für die gerade Bauchmuskulatur.",
      ausfuehrung: [
        "Knie dich auf eine weiche Unterlage und greif den Ab-Roller oder die Langhantel schulterbreit, die Hände unter den Schultern.",
        "Rund den oberen Rücken leicht und kipp das Becken nach hinten, Bauch und Gesäß sind angespannt.",
        "Roll langsam nach vorn, die Arme bleiben gestreckt, Hüfte und Schultern bewegen sich gemeinsam.",
        "Geh so weit, wie du ohne Hohlkreuz bleibst, im Idealfall bis der Körper fast gestreckt ist.",
        "Zieh dich mit gestreckten Armen über den Bauch und den Latissimus zurück, als würdest du die Hände zu den Knien drücken.",
        "Beende die Wiederholung, wenn die Hüfte wieder über den Knien ist."
      ],
      atmung: "Beim Vorrollen einatmen oder die Luft kurz halten, beim Zurückziehen ausatmen.",
      fehler: [
        "Hohlkreuz am Umkehrpunkt: Bewegungsweg verkürzen, eine Wand als Stopp nutzen.",
        "Hüfte bleibt hinten und nur die Arme bewegen sich: Hüfte mit nach vorn schieben.",
        "Zurückkommen mit der Hüfte zuerst: Der Bauch zieht, die Hüfte folgt.",
        "Arme beugen sich: Arme bleiben gestreckt."
      ],
      vorteile: [
        "Sehr hohe Aktivierung der geraden Bauchmuskeln.",
        "Trainiert Anti-Extension über einen großen Bewegungsweg.",
        "Stärkt Latissimus und Schultern mit."
      ],
      tipps: [
        "Roll gegen eine Wand, um den Weg zu begrenzen, und rück mit der Zeit weiter weg.",
        "Die Langhantel mit 20-Kilogramm-Scheiben ist eine gute Alternative zum Ab-Roller.",
        "Leichtes Runden des oberen Rückens schützt vor dem Hohlkreuz."
      ],
      varianten: "Leichter: Rollout auf dem Gymnastikball oder mit kürzerem Weg. Schwerer: Rollout im Stehen oder mit Pause vorn.",
      sicherheit: "Bei Beschwerden im unteren Rücken oder in den Schultern mit dem Ball beginnen und den Weg begrenzen."
    }
  },
  {
    id: "rollout_stehend",
    name: "Rollout im Stehen",
    auch: ["Standing Ab Wheel Rollout", "Standing Rollout"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["latissimus", "schraege_bauch", "schulter_vorn", "trizeps"],
    geraete: [["langhantel"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 2, ruecken: 2 },
    stufe: 3,
    hinweis: "Mit Ab-Roller oder Langhantel, anfangs gegen eine Wand rollen.",
    info: {
      kurz: "Rollout aus dem Stand mit gestreckten Beinen. Eine sehr anspruchsvolle Übung, die enorme Kraft in Bauch, Latissimus und Schultern verlangt.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, beug dich vor und setz den Ab-Roller oder die Langhantel vor den Füßen auf den Boden.",
        "Rund den oberen Rücken leicht, spann Bauch und Gesäß fest an.",
        "Roll langsam nach vorn, die Arme gestreckt, bis der Körper fast gestreckt über dem Boden schwebt.",
        "Halte am Umkehrpunkt kurz die Spannung, ohne dass das Becken durchhängt.",
        "Zieh dich über Bauch und Latissimus zurück in die Ausgangsposition.",
        "Beginne mit einer Wand als Stopp, um den Weg zu begrenzen."
      ],
      atmung: "Beim Vorrollen einatmen, beim Zurückziehen kräftig ausatmen.",
      fehler: [
        "Hohlkreuz: Weg verkürzen und erst kniend sicher werden.",
        "Sturz nach vorn: Mit einer Wand als Stopp üben.",
        "Zu früh versucht: Erst 10 saubere kniende Rollouts mit vollem Weg."
      ],
      vorteile: [
        "Höchste Stufe der Rollout-Varianten.",
        "Enorme Belastung der Bauchmuskeln gegen das Hohlkreuz.",
        "Fordert die Schultern in Überkopfposition."
      ],
      tipps: [
        "Nähere dich über exzentrische Wiederholungen: nach vorn rollen, auf die Knie fallen lassen, kniend zurückziehen.",
        "Eine Wand oder ein Gewicht vor dir begrenzt den Weg sicher."
      ],
      varianten: "Leichter: kniender Rollout oder gegen eine Wand. Schwerer: voller Weg ohne Stopp oder langsames Tempo.",
      sicherheit: "Hohe Belastung für Rücken und Schultern. Bei Beschwerden auslassen."
    }
  },
  {
    id: "rollout_schlingentrainer",
    name: "Rollout am Schlingentrainer",
    auch: ["TRX Fallout", "Suspension Trainer Rollout", "TRX Rollout"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["latissimus", "schraege_bauch", "schulter_vorn"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    schwerer: "rollout_stehend",
    info: {
      kurz: "Im Stand lehnst du dich in die Schlaufen eines Schlingentrainers und führst die gestreckten Arme über den Kopf nach vorn. Wie ein Rollout im Stehen, aber über die Fußposition fein dosierbar.",
      ausfuehrung: [
        "Stell dich mit dem Rücken zum Ankerpunkt, die Griffe in den Händen, die Arme gestreckt vor dem Körper.",
        "Lehn dich nach vorn in die Schlaufen, der Körper bildet eine gerade Linie, die Füße bleiben am Platz.",
        "Spann Bauch und Gesäß an und führ die gestreckten Arme langsam nach vorn oben, der Körper sinkt nach vorn.",
        "Geh so weit, wie du ohne Hohlkreuz bleibst, etwa bis die Arme neben dem Kopf sind.",
        "Zieh die gestreckten Arme über Bauch und Latissimus zurück, bis du wieder in der Ausgangsposition bist.",
        "Der Körper bleibt die ganze Zeit eine Linie."
      ],
      atmung: "Beim Vorgehen einatmen, beim Zurückziehen ausatmen.",
      fehler: [
        "Hohlkreuz: Füße weiter nach hinten stellen, das macht es leichter.",
        "Hüfte knickt ein: Gesäß fester anspannen.",
        "Arme beugen sich: Arme bleiben gestreckt."
      ],
      vorteile: [
        "Sehr fein steigerbar über den Körperwinkel.",
        "Hohe Anti-Extensionsbelastung für den Bauch.",
        "Trainiert die Schultern in Überkopfposition."
      ],
      tipps: [
        "Je steiler du stehst, desto leichter. Ein Schritt nach vorn erhöht die Last deutlich.",
        "Langsames Tempo, etwa drei Sekunden nach vorn."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: flacherer Körperwinkel oder Rollout im Stehen.",
      sicherheit: "Bei Schulterbeschwerden in Überkopfposition vorsichtig dosieren."
    }
  },
  {
    id: "pike_gleitscheiben",
    name: "Pike mit Gleitscheiben",
    auch: ["Slider Pike", "Sliding Pike", "TRX Pike"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["schulter_vorn", "trizeps", "schraege_bauch"],
    geraete: [["gleitscheiben"], ["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 3,
    info: {
      kurz: "Aus dem Stütz mit gestreckten Armen ziehst du die gestreckten Beine auf Gleitscheiben oder im Schlingentrainer nach vorn, bis die Hüfte hoch über den Schultern steht. Fordert Bauch, Hüftbeuger und Schultern stark.",
      ausfuehrung: [
        "Leg die Füße auf die Gleitscheiben oder in die Schlaufen des Schlingentrainers und geh in den Stütz mit gestreckten Armen.",
        "Bring den Körper in eine gerade Linie, die Hände unter den Schultern.",
        "Zieh die gestreckten Beine Richtung Hände, die Hüfte wandert nach oben, bis der Körper ein umgekehrtes V bildet.",
        "Die Schultern bleiben über den Händen, der Bauch zieht die Beine heran.",
        "Schieb die Beine langsam zurück in den geraden Stütz.",
        "Arbeite langsam, ohne in der Rückbewegung ins Hohlkreuz zu fallen."
      ],
      atmung: "Beim Heranziehen ausatmen, beim Zurückschieben einatmen.",
      fehler: [
        "Knie beugen sich: Beine gestreckt halten oder zur Knievariante wechseln.",
        "Schultern wandern nach hinten: Schultern über den Händen halten.",
        "Hohlkreuz am Ende: Rückbewegung kontrollieren."
      ],
      vorteile: [
        "Sehr hohe Belastung für Bauch und Hüftbeuger.",
        "Stärkt die Schultern in der Stützposition.",
        "Verbessert die Beweglichkeit der hinteren Oberschenkel."
      ],
      tipps: [
        "Beginne mit dem Knieanziehen auf Gleitscheiben, bis das sauber geht.",
        "Auf glattem Boden funktionieren auch Handtücher."
      ],
      varianten: "Leichter: Knie zur Brust ziehen. Schwerer: einbeinig oder mit Liegestütz kombiniert.",
      sicherheit: "Bei Schulter- oder Handgelenksbeschwerden vorsichtig dosieren."
    }
  },

  // ---------- Seitbeugen ----------
  {
    id: "seitbeugen_kh",
    name: "Seitbeugen mit Kurzhantel",
    auch: ["Dumbbell Side Bend", "DB Side Bend"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["ruecken_unten", "unterarm"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Im Stand neigst du den Oberkörper mit einer Kurzhantel in einer Hand zur Seite und richtest dich über die gegenüberliegende Rumpfseite wieder auf. Trainiert die schrägen Bauchmuskeln und den quadratischen Lendenmuskel über die Seitneigung.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, eine Kurzhantel in der rechten Hand, die linke Hand an der Hüfte oder am Kopf.",
        "Spann den Bauch leicht an, Brust und Becken zeigen nach vorn.",
        "Neige den Oberkörper langsam zur rechten Seite, die Hantel gleitet am Oberschenkel entlang nach unten.",
        "Geh so weit, bis du eine Dehnung in der linken Flanke spürst, ohne dich nach vorn oder hinten zu drehen.",
        "Richte dich über die linke Rumpfseite wieder auf und neige dich leicht über die Mitte hinaus nach links.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Oberkörper dreht oder beugt sich nach vorn: Bewegung nur seitlich, wie zwischen zwei Glasscheiben.",
        "In beiden Händen eine Hantel: Die Gewichte heben sich gegenseitig auf, nur einseitig halten.",
        "Schwung: langsam und mit Pause in der Dehnung arbeiten."
      ],
      vorteile: [
        "Trainiert die seitliche Rumpfmuskulatur dynamisch mit Dehnung.",
        "Einfach mit Gewicht steigerbar.",
        "Ergänzt statische Übungen wie den Seitstütz."
      ],
      tipps: [
        "Eine kurze Pause in der gedehnten Position erhöht die Wirkung.",
        "Mittleres Gewicht mit 12 bis 20 Wiederholungen reicht meist."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: schwerere Hantel oder Seitbeugen am Kabel.",
      sicherheit: "Bei Bandscheibenproblemen oder Schmerzen bei Seitneigung vorher abklären oder den Seitstütz wählen."
    }
  },
  {
    id: "seitbeugen_kabel",
    name: "Seitbeugen am Kabelzug",
    auch: ["Cable Side Bend", "Standing Cable Side Bend"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["ruecken_unten", "unterarm"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Seitbeugen mit einem Griff am unteren Kabelzug. Anders als bei der Kurzhantel zieht das Kabel schräg, sodass die Spannung auch in der aufrechten Position erhalten bleibt.",
      ausfuehrung: [
        "Stell dich seitlich neben den unteren Kabelzug und greif den Griff mit der kabelnahen Hand.",
        "Mach einen kleinen Schritt weg, damit Spannung auf dem Kabel ist, die Füße hüftbreit.",
        "Lass dich vom Kabel langsam zur Seite ziehen, bis du eine Dehnung in der gegenüberliegenden Flanke spürst.",
        "Richte dich über die gegenüberliegende Rumpfseite wieder auf und neige dich leicht über die Mitte hinaus.",
        "Becken und Brust zeigen die ganze Zeit nach vorn.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Mit dem Arm ziehen: Der Arm bleibt gestreckt, die Bewegung kommt aus dem Rumpf.",
        "Oberkörper dreht zum Kabel: Schultern bleiben parallel zur Front.",
        "Zu schweres Gewicht: Bewegung wird klein und ruckartig."
      ],
      vorteile: [
        "Konstante Spannung durch den schrägen Kabelzug.",
        "Genau dosierbar.",
        "Gute Ergänzung zum Seitstütz."
      ],
      tipps: [
        "Je weiter du vom Kabel weg stehst, desto mehr Spannung hast du in der aufrechten Position.",
        "Mit einem Band an einem niedrigen Ankerpunkt funktioniert die Übung auch zu Hause."
      ],
      varianten: "Leichter: weniger Gewicht oder kleinerer Weg. Schwerer: mehr Gewicht oder Pause in der Dehnung.",
      sicherheit: "Bei Schmerzen bei Seitneigung oder Bandscheibenproblemen vorher abklären."
    }
  },

  // ---------- Tragen ----------
  {
    id: "koffer_tragen",
    name: "Einarmiges Tragen (Koffer)",
    auch: ["Suitcase Carry", "Single-Arm Farmer's Carry", "Single-Arm Farmer Walk", "Kofferträger"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "unterarm"],
    sekundaer: ["gesaess_mittel", "trapez", "ruecken_unten", "bauch"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Du trägst ein schweres Gewicht in nur einer Hand wie einen Koffer. Der Rumpf muss verhindern, dass du zur Seite kippst, deshalb arbeiten vor allem die schrägen Bauchmuskeln und die Griffkraft.",
      ausfuehrung: [
        "Stell eine schwere Kurzhantel oder Kettlebell neben deinen rechten Fuß.",
        "Geh mit geradem Rücken in die Hocke und heb das Gewicht wie beim Kreuzheben auf.",
        "Steh aufrecht, die Schultern auf gleicher Höhe, der Blick nach vorn.",
        "Spann den Bauch an und geh mit kurzen, kontrollierten Schritten los.",
        "Halte den Oberkörper senkrecht, er darf weder zur Gewichtsseite noch zur Gegenseite kippen.",
        "Nach der Strecke oder Zeit das Gewicht kontrolliert absetzen und die Seite wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen, flach in den Bauch, ohne die Spannung zu verlieren.",
      fehler: [
        "Zur Gewichtsseite kippen: leichteres Gewicht, Rumpf bewusst aufrichten.",
        "Gegenseite übermäßig weggelehnt: Schultern waagerecht halten.",
        "Schulter der Gewichtsseite hängt: Schulter leicht nach oben und hinten halten.",
        "Hektische Schritte: ruhige, normale Schritte."
      ],
      vorteile: [
        "Trainiert die seitliche Rumpfstabilität sehr alltagsnah.",
        "Stärkt Griffkraft und Schultergürtel.",
        "Fordert den seitlichen Gesäßmuskel beim Gehen.",
        "Deckt Seitenunterschiede auf."
      ],
      tipps: [
        "Beginne mit etwa einem Viertel bis einem Drittel deines Körpergewichts.",
        "Stell dir vor, du hast einen Faden am Scheitel, der dich nach oben zieht.",
        "20 bis 40 Meter oder 30 bis 45 Sekunden je Seite sind eine gute Strecke."
      ],
      varianten: "Leichter: geringeres Gewicht oder kürzere Strecke. Schwerer: schwereres Gewicht, Koffer-Marsch mit hohen Knien oder gemischtes Tragen.",
      sicherheit: "Achte beim Aufheben und Absetzen auf einen geraden Rücken. Bei Handgelenks- oder Ellbogenbeschwerden das Gewicht vorsichtig steigern."
    }
  },
  {
    id: "koffer_marsch",
    name: "Koffer-Marsch",
    auch: ["Suitcase March", "Single-Arm March", "Suitcase Carry March"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "hueftbeuger"],
    sekundaer: ["gesaess_mittel", "unterarm", "bauch"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Tragen, bei dem du auf der Stelle oder im Gehen die Knie bis auf Hüfthöhe anziehst. Durch die Phasen auf einem Bein steigt die Anforderung an seitliche Rumpf- und Beckenstabilität.",
      ausfuehrung: [
        "Heb eine Kurzhantel oder Kettlebell mit einer Hand auf und steh aufrecht.",
        "Spann den Bauch an, die Schultern waagerecht.",
        "Zieh langsam ein Knie bis auf Hüfthöhe an, der Fuß zeigt nach vorn.",
        "Halte kurz auf einem Bein, ohne dass der Oberkörper zur Seite kippt.",
        "Setz den Fuß ab und zieh das andere Knie an.",
        "Marschiere so auf der Stelle oder langsam vorwärts und wechsle nach der Zeit die Hand."
      ],
      atmung: "Gleichmäßig weiteratmen, beim Anziehen des Knies leicht ausatmen.",
      fehler: [
        "Oberkörper lehnt sich zur Seite: leichteres Gewicht.",
        "Standbein knickt ein: Gesäß des Standbeins anspannen.",
        "Zu schnelles Marschieren: Halte jede Position kurz."
      ],
      vorteile: [
        "Verbindet Anti-Lateralflexion mit Einbeinstabilität.",
        "Stärkt Hüftbeuger und seitlichen Gesäßmuskel.",
        "Gute Übung für Laufen und Gehen unter Last."
      ],
      tipps: [
        "Nimm etwas weniger Gewicht als beim normalen Koffer-Tragen.",
        "Langsam und mit Pause auf einem Bein ist wirksamer als schnell."
      ],
      varianten: "Leichter: ohne Knieanziehen gehen. Schwerer: mehr Gewicht oder Gewicht im Frontrack.",
      sicherheit: "Bei Gleichgewichtsproblemen in der Nähe einer Wand üben."
    }
  },
  {
    id: "rack_tragen_einarmig",
    name: "Einarmiges Tragen im Frontrack",
    auch: ["Single-Arm Front Rack Carry", "Single-Arm Rack Walk", "Offset Rack Carry"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["schulter_vorn", "oberer_ruecken", "gesaess_mittel"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Du trägst eine Kettlebell oder Kurzhantel in der Frontrack-Position vor der Schulter. Das Gewicht sitzt vor dem Körper und auf einer Seite, sodass der Rumpf gegen Seitneigung, Drehung und Hohlkreuz gleichzeitig arbeitet.",
      ausfuehrung: [
        "Bring eine Kettlebell in die Frontrack-Position: Sie liegt in der Beuge zwischen Unterarm und Oberarm vor der Schulter, der Ellbogen zeigt nach unten.",
        "Steh aufrecht, die Rippen nach unten gezogen, die Schultern waagerecht.",
        "Spann den Bauch an und geh mit ruhigen Schritten los.",
        "Halte den Oberkörper senkrecht, er darf sich weder nach hinten lehnen noch zur Seite drehen.",
        "Halte das Handgelenk gerade und den Ellbogen nah am Körper.",
        "Setz nach der Strecke ab und wechsle die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen, ohne in ein Hohlkreuz auszuweichen.",
      fehler: [
        "Hohlkreuz und Zurücklehnen: Rippen nach unten, Gesäß anspannen.",
        "Ellbogen zeigt nach außen: Ellbogen nah am Körper halten.",
        "Handgelenk abgeknickt: Unterarm und Hand in einer Linie."
      ],
      vorteile: [
        "Fordert den Rumpf in mehreren Ebenen gleichzeitig.",
        "Trainiert eine aufrechte Haltung unter Last.",
        "Ist eine gute Vorbereitung auf Frontkniebeugen und Kettlebell-Übungen."
      ],
      tipps: [
        "Kettlebells liegen angenehmer in der Rackposition als Kurzhanteln.",
        "Beginne mit einem Gewicht, das du locker 30 Sekunden halten kannst."
      ],
      varianten: "Leichter: beidseitiges Frontrack-Tragen. Schwerer: mehr Gewicht oder gemischtes Tragen.",
      sicherheit: "Bei Handgelenks- oder Schulterbeschwerden vorsichtig mit der Rackposition sein."
    }
  },
  {
    id: "rack_tragen",
    name: "Tragen im Frontrack mit zwei Gewichten",
    auch: ["Double Kettlebell Front Rack Carry", "Front Rack Walk", "Front Rack Carry"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["bauch"],
    sekundaer: ["oberer_ruecken", "schulter_vorn", "trapez", "schraege_bauch"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Du trägst zwei Kettlebells oder Kurzhanteln vor den Schultern. Das Gewicht vor dem Körper will dich ins Hohlkreuz ziehen, der Rumpf hält dagegen.",
      ausfuehrung: [
        "Bring zwei Kettlebells oder Kurzhanteln in die Frontrack-Position vor den Schultern, die Ellbogen zeigen nach unten.",
        "Steh aufrecht, die Rippen nach unten gezogen, das Becken leicht eingerollt.",
        "Spann Bauch und Gesäß an und geh mit ruhigen Schritten los.",
        "Halte den oberen Rücken aufrecht, die Ellbogen bleiben nah am Körper.",
        "Atme gleichmäßig, ohne dich nach hinten zu lehnen.",
        "Setz die Gewichte nach der Strecke kontrolliert ab."
      ],
      atmung: "Flach und gleichmäßig weiteratmen, die Bauchspannung bleibt erhalten.",
      fehler: [
        "Zurücklehnen ins Hohlkreuz: Rippen nach unten, Gesäß anspannen, Gewicht reduzieren.",
        "Runder oberer Rücken: Brust aufrichten.",
        "Ellbogen weit nach außen: Ellbogen nah an den Rippen."
      ],
      vorteile: [
        "Trainiert Anti-Extension im Stand und im Gehen.",
        "Stärkt oberen Rücken und Haltung unter Last.",
        "Überträgt sich gut auf Frontkniebeugen."
      ],
      tipps: [
        "Kettlebells sind in dieser Position angenehmer als Kurzhanteln.",
        "Das Gewicht etwas leichter wählen als beim Farmer's Walk."
      ],
      varianten: "Leichter: geringeres Gewicht. Schwerer: einarmig oder gemischtes Tragen.",
      sicherheit: "Bei Handgelenksbeschwerden die Rackposition vorsichtig üben."
    }
  },
  {
    id: "kellner_tragen",
    name: "Kellner-Tragen",
    auch: ["Waiter Carry", "Overhead Carry", "Single-Arm Overhead Carry"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "schulter_seitlich"],
    sekundaer: ["rotatorenmanschette", "trapez", "bauch", "trizeps"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Du trägst ein Gewicht mit gestrecktem Arm über dem Kopf, wie ein Kellner sein Tablett. Fordert die Schulterstabilität und den Rumpf, der das einseitige Gewicht über Kopf ausbalancieren muss.",
      ausfuehrung: [
        "Bring eine Kettlebell oder Kurzhantel mit einer Hand über den Kopf, der Arm gestreckt, der Bizeps neben dem Ohr.",
        "Steh aufrecht, die Rippen nach unten, das Becken neutral.",
        "Zieh die Schulter leicht nach unten in die Pfanne, ohne den Arm zu beugen.",
        "Geh mit ruhigen Schritten los, das Gewicht bleibt senkrecht über der Schulter.",
        "Halte den Oberkörper aufrecht, ohne zur Seite oder nach hinten auszuweichen.",
        "Senke das Gewicht nach der Strecke kontrolliert ab und wechsle die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen, die Rippen bleiben unten.",
      fehler: [
        "Hohlkreuz: Rippen nach unten ziehen und Gewicht reduzieren.",
        "Arm wandert nach vorn: Das Gewicht bleibt über der Schulter.",
        "Ellbogen gebeugt: Arm gestreckt halten.",
        "Oberkörper kippt zur Gegenseite: Rumpf aufrichten."
      ],
      vorteile: [
        "Stärkt die Schulterstabilität in der Überkopfposition.",
        "Trainiert den Rumpf gegen ein hoch liegendes, einseitiges Gewicht.",
        "Verbessert die Überkopfmobilität unter Last."
      ],
      tipps: [
        "Mit einer Kettlebell, deren Kugel hinter dem Unterarm liegt, ist die Position stabil.",
        "Mit Bottoms-up-Haltung der Kettlebell wird es deutlich schwerer für Griff und Schulter."
      ],
      varianten: "Leichter: weniger Gewicht oder kürzere Strecke. Schwerer: Bottoms-up, mehr Gewicht oder gemischtes Tragen.",
      sicherheit: "Bei Schulterbeschwerden oder eingeschränkter Überkopfbeweglichkeit auslassen oder das Frontrack-Tragen wählen."
    }
  },
  {
    id: "tragen_gemischt",
    name: "Gemischtes Tragen",
    auch: ["Offset Carry", "Mixed Carry", "Rack and Suitcase Carry", "Overhead and Suitcase Carry"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["unterarm", "schulter_vorn", "trapez", "gesaess_mittel"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Du trägst zwei Gewichte in unterschiedlichen Positionen, zum Beispiel eines im Frontrack oder über Kopf und eines seitlich wie einen Koffer. Die ungleiche Last fordert den Rumpf in mehreren Richtungen gleichzeitig.",
      ausfuehrung: [
        "Nimm eine Kettlebell in die rechte Hand und bring sie in die Frontrack-Position oder über Kopf.",
        "Heb eine zweite Kettlebell mit der linken Hand auf und trag sie seitlich wie einen Koffer.",
        "Steh aufrecht, die Schultern waagerecht, die Rippen nach unten gezogen.",
        "Geh mit ruhigen Schritten los, der Oberkörper bleibt senkrecht und dreht sich nicht.",
        "Nach der Strecke absetzen und die Positionen der Hände tauschen.",
        "Wähle das obere Gewicht leichter als das untere."
      ],
      atmung: "Gleichmäßig weiteratmen, ohne die Rumpfspannung zu verlieren.",
      fehler: [
        "Oberkörper neigt sich zur Kofferseite: unteres Gewicht reduzieren.",
        "Hohlkreuz bei Überkopf-Variante: Rippen nach unten.",
        "Ungleiche Schultern: Schultern bewusst waagerecht halten."
      ],
      vorteile: [
        "Trainiert Anti-Rotation, Anti-Lateralflexion und Anti-Extension zugleich.",
        "Sehr alltagsnah, ähnlich wie unterschiedlich schwere Einkaufstaschen.",
        "Vielseitig kombinierbar."
      ],
      tipps: [
        "Kombination Frontrack und Koffer ist der leichtere Einstieg, Überkopf und Koffer der schwerere.",
        "Achte auf gleiche Strecken für beide Kombinationen."
      ],
      varianten: "Leichter: einarmiges Tragen. Schwerer: Überkopf und Koffer oder schwerere Gewichte.",
      sicherheit: "Bei Schulterbeschwerden auf die Überkopfposition verzichten."
    }
  },

  // ---------- Pallof Press ----------
  {
    id: "pallof_kabel",
    name: "Pallof Press am Kabelzug",
    auch: ["Pallof Press", "Cable Pallof Press", "Anti-Rotation Press"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess_mittel", "schulter_vorn", "brust"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis", "fussball"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Seitlich zum Kabelzug stehend drückst du den Griff vor der Brust nach vorn und wieder zurück. Das Kabel will dich zur Seite drehen, der Rumpf hält dagegen. Die Standardübung für Anti-Rotation.",
      ausfuehrung: [
        "Stell den Kabelzug auf Brusthöhe ein und stell dich seitlich dazu, etwa einen großen Schritt entfernt.",
        "Greif den Griff mit beiden Händen und zieh ihn an die Brustmitte.",
        "Stell die Füße schulterbreit, die Knie leicht gebeugt, und spann Bauch und Gesäß an.",
        "Drück den Griff langsam gerade nach vorn, bis die Arme gestreckt sind.",
        "Halte die Arme ein bis zwei Sekunden gestreckt, ohne dass sich Oberkörper oder Becken zum Kabel drehen.",
        "Führ den Griff zurück zur Brust und wiederhole. Danach die Seite wechseln."
      ],
      atmung: "Beim Vordrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht zum Kabel: Gewicht reduzieren oder näher an den Kabelzug stellen.",
        "Hände wandern zur Seite: Griff exakt vor der Brustmitte halten.",
        "Hüfte weicht zur Seite aus: Gesäß anspannen, Becken nach vorn.",
        "Schultern ziehen hoch: Schultern locker nach unten."
      ],
      vorteile: [
        "Stärkt die Fähigkeit des Rumpfes, Drehkräften zu widerstehen.",
        "Gelenkschonend und für fast alle geeignet.",
        "Leicht dosierbar über Gewicht und Abstand zum Kabel.",
        "Trainiert schräge Bauchmuskeln und Hüftstabilität gemeinsam."
      ],
      tipps: [
        "Die Last steigt am meisten, wenn die Arme gestreckt sind. Dort bewusst pausieren.",
        "Ein Schritt weiter weg vom Kabel erhöht die Spannung ohne mehr Gewicht.",
        "Mittelschwere Last für 8 bis 12 kontrollierte Wiederholungen je Seite."
      ],
      varianten: "Leichter: weniger Gewicht oder näher am Kabel. Schwerer: halbkniend, Pause in der Streckung, Überkopfdrücken oder Pallof Walkout.",
      sicherheit: "Sehr sicher. Bei Schulterbeschwerden die Arme nicht ganz strecken.",
      golf: "Ein Rumpf, der Drehkräften standhält, gibt dem Schwung eine stabile Achse. Das hilft, die Kraft der Hüfte kontrolliert auf Oberkörper und Arme zu übertragen, und kann den unteren Rücken bei vielen Schwüngen entlasten."
    }
  },
  {
    id: "pallof_band",
    name: "Pallof Press mit Band",
    auch: ["Band Pallof Press", "Banded Pallof Press"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess_mittel", "schulter_vorn"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis", "fussball"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Pallof Press mit einem Widerstandsband, das auf Brusthöhe befestigt ist. Anders als am Kabel steigt der Widerstand, je weiter du die Arme streckst, die Endposition ist also am schwersten.",
      ausfuehrung: [
        "Befestige das Band auf Brusthöhe an einem stabilen Punkt und stell dich seitlich dazu.",
        "Greif das Band mit beiden Händen vor der Brust und geh seitlich weg, bis Spannung entsteht.",
        "Stell die Füße schulterbreit, die Knie leicht gebeugt, und spann Bauch und Gesäß an.",
        "Drück die Hände gerade nach vorn, bis die Arme gestreckt sind.",
        "Halte die Streckung ein bis zwei Sekunden, ohne dass sich der Oberkörper zum Ankerpunkt dreht.",
        "Führ die Hände zur Brust zurück. Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Vordrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht zum Band: leichteres Band oder näher an den Ankerpunkt.",
        "Hände wandern zur Seite: gerade vor der Brustmitte drücken.",
        "Becken weicht aus: Gesäß anspannen."
      ],
      vorteile: [
        "Anti-Rotationstraining überall, auch zu Hause und unterwegs.",
        "Zunehmender Widerstand fordert die Endposition stark.",
        "Ideal zum Aufwärmen vor Golfrunde oder Training."
      ],
      tipps: [
        "Ein Türanker macht die Übung zu Hause einfach möglich.",
        "Je weiter du vom Ankerpunkt weg stehst, desto schwerer."
      ],
      varianten: "Leichter: leichteres Band. Schwerer: stärkeres Band, halbkniend, Isohold oder mit Überkopfdrücken.",
      sicherheit: "Band vorher auf Risse prüfen und sicher befestigen.",
      golf: "Eignet sich gut als Teil des Aufwärmens vor der Runde, um den Rumpf zu aktivieren. Ein stabiler Rumpf hilft, im Rückschwung Spannung aufzubauen, ohne dass das Becken unkontrolliert mitdreht."
    }
  },
  {
    id: "pallof_halbkniend",
    name: "Pallof Press halbkniend",
    auch: ["Half-Kneeling Pallof Press"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "gesaess_mittel", "hueftbeuger"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Pallof Press im Halbknien mit einem Knie am Boden. Die schmale Basis nimmt die Hilfe der Beine weg und verlangt mehr Stabilität von Rumpf und Hüfte.",
      ausfuehrung: [
        "Stell den Kabelzug oder das Band auf Brusthöhe im Knien ein.",
        "Knie dich seitlich zum Kabel hin, das kabelnahe Knie am Boden, das andere Bein vorn mit dem Fuß aufgestellt.",
        "Richte den Oberkörper auf und spann das Gesäß des hinteren Beins an, sodass die Hüfte gestreckt ist.",
        "Greif den Griff vor der Brust und drück ihn gerade nach vorn.",
        "Halte die Streckung kurz, ohne dass sich Oberkörper oder Becken zum Kabel drehen.",
        "Führ den Griff zurück und wiederhole. Danach Seite und Kniestellung wechseln."
      ],
      atmung: "Beim Vordrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz durch gebeugte Hüfte: Gesäß des hinteren Beins anspannen.",
        "Oberkörper kippt zur Seite: Gewicht reduzieren.",
        "Knie zu weit auseinander oder in einer Linie: etwa hüftbreit versetzt knien."
      ],
      vorteile: [
        "Mehr Stabilitätsanforderung an Rumpf und Hüfte als im Stand.",
        "Dehnt nebenbei den Hüftbeuger des hinteren Beins.",
        "Schwer zu schummeln, weil die Beine kaum helfen."
      ],
      tipps: [
        "Ein Kissen unter dem Knie macht die Position angenehmer.",
        "Die Variante mit dem kabelnahen Knie am Boden ist meist leichter, probiere beide."
      ],
      varianten: "Leichter: im Stand. Schwerer: Füße in einer Linie (Inline) oder Pause in der Streckung.",
      sicherheit: "Bei Kniebeschwerden eine weiche Unterlage nutzen.",
      golf: "Die Position fordert Hüft- und Rumpfstabilität ohne Hilfe der Beine. Das stärkt die Kontrolle über das Becken, die im Rückschwung für eine stabile Basis wichtig ist."
    }
  },
  {
    id: "pallof_kniend",
    name: "Pallof Press kniend",
    auch: ["Tall-Kneeling Pallof Press", "Kneeling Pallof Press"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "gesaess_mittel"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Pallof Press im aufrechten Kniestand mit beiden Knien am Boden. Die Beine können nicht mehr helfen, sodass Gesäß und Rumpf die ganze Stabilisierung übernehmen.",
      ausfuehrung: [
        "Stell den Kabelzug oder das Band auf Brusthöhe im Knien ein.",
        "Knie dich seitlich zum Kabel hin, die Knie hüftbreit, die Hüfte gestreckt, der Oberkörper aufrecht.",
        "Spann das Gesäß fest an, damit die Hüfte nicht nach hinten knickt.",
        "Greif den Griff vor der Brust und drück ihn gerade nach vorn.",
        "Halte die Arme gestreckt, ohne dass sich der Oberkörper dreht.",
        "Führ den Griff zurück und wiederhole, danach die Seite wechseln."
      ],
      atmung: "Beim Vordrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hüfte knickt ein und das Gesäß geht nach hinten: Gesäß anspannen.",
        "Hohlkreuz: Rippen nach unten.",
        "Oberkörper dreht: Gewicht reduzieren."
      ],
      vorteile: [
        "Isoliert die Rumpfstabilität, da die Beine kaum mitarbeiten.",
        "Trainiert die Gesäßspannung bei gestreckter Hüfte.",
        "Gut für Einsteiger, um die Bewegung zu lernen."
      ],
      tipps: [
        "Weiche Unterlage unter den Knien nutzen.",
        "Pause in der Streckung von zwei Sekunden."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: halbkniend oder mit Überkopfdrücken.",
      sicherheit: "Bei Kniebeschwerden eine weiche Unterlage verwenden oder im Stand üben."
    }
  },
  {
    id: "pallof_ueberkopf",
    name: "Pallof Press mit Überkopfdrücken",
    auch: ["Pallof Press to Overhead", "Pallof Overhead Press", "Pallof Raise"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["schulter_vorn", "latissimus", "gesaess_mittel"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Pallof Press, bei dem du nach dem Vordrücken die gestreckten Arme über den Kopf führst. Der Hebel wird länger und zusätzlich muss der Rumpf ein Hohlkreuz verhindern.",
      ausfuehrung: [
        "Stell dich seitlich zum Kabelzug oder Band auf Brusthöhe, die Füße schulterbreit.",
        "Greif den Griff vor der Brust und spann Bauch und Gesäß an.",
        "Drück den Griff gerade nach vorn, bis die Arme gestreckt sind.",
        "Führ die gestreckten Arme langsam nach oben über den Kopf, ohne dass die Rippen nach vorn kommen.",
        "Senke die Arme wieder auf Brusthöhe und führ den Griff zur Brust zurück.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Heben über Kopf ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz beim Heben: Rippen nach unten, nur so hoch heben wie ohne Hohlkreuz möglich.",
        "Oberkörper dreht zum Kabel: Gewicht reduzieren.",
        "Arme beugen sich: gestreckt halten."
      ],
      vorteile: [
        "Verbindet Anti-Rotation und Anti-Extension.",
        "Trainiert die Schulterbeweglichkeit unter Rumpfkontrolle.",
        "Höhere Anforderung bei gleichem Gewicht."
      ],
      tipps: [
        "Deutlich leichter wählen als beim normalen Pallof Press.",
        "Kniend ausgeführt wird die Rumpfarbeit noch deutlicher."
      ],
      varianten: "Leichter: normaler Pallof Press. Schwerer: kniend oder mit Pause über Kopf.",
      sicherheit: "Bei Schulterbeschwerden in der Überkopfposition auslassen."
    }
  },
  {
    id: "pallof_iso",
    name: "Pallof-Isohold",
    auch: ["Pallof Hold", "Pallof Press Iso Hold", "Anti-Rotation Hold"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess_mittel", "schulter_vorn"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Statisches Halten der Pallof-Endposition mit gestreckten Armen. Die Spannung ist dauerhaft am höchsten Punkt, ideal, um Anti-Rotationskraft und Ausdauer aufzubauen.",
      ausfuehrung: [
        "Stell dich seitlich zum Kabelzug oder Band auf Brusthöhe, die Füße schulterbreit.",
        "Greif den Griff mit beiden Händen und drück ihn vor der Brust nach vorn, bis die Arme gestreckt sind.",
        "Spann Bauch und Gesäß an, der Oberkörper zeigt nach vorn.",
        "Halte die Position ruhig, die Hände bleiben exakt vor der Brustmitte.",
        "Halte die vorgegebene Zeit und führ den Griff dann langsam zur Brust zurück.",
        "Wechsle danach die Seite und halte dort gleich lange."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, ohne die Spannung zu verlieren.",
      fehler: [
        "Hände wandern zum Kabel: Gewicht reduzieren.",
        "Schultern ziehen hoch: Schultern locker nach unten.",
        "Luft anhalten: gleichmäßig weiteratmen."
      ],
      vorteile: [
        "Maximale Spannungszeit in der schwersten Position.",
        "Sehr gut für Einsteiger, um das Gefühl für Anti-Rotation zu bekommen.",
        "Lässt sich gut mit dynamischen Varianten kombinieren."
      ],
      tipps: [
        "20 bis 30 Sekunden je Seite mit spürbarer Spannung sind ein guter Start.",
        "Für mehr Last: einen Schritt weiter weg vom Kabel."
      ],
      varianten: "Leichter: näher am Kabel. Schwerer: halbkniend, einbeinig oder mit kleinen Kreisbewegungen der Hände.",
      sicherheit: "Sehr sicher. Bei Bluthochdruck nicht pressen.",
      golf: "Trainiert genau die Fähigkeit, Rumpf und Becken gegen eine Drehkraft stabil zu halten. Das unterstützt eine stabile Haltung im Ansprechen und im Rückschwung."
    }
  },
  {
    id: "pallof_walkout",
    name: "Pallof Walkout",
    auch: ["Pallof Walkout", "Pallof Press Walkout", "Anti-Rotation Walkout"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess_mittel", "adduktoren", "schulter_vorn"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Mit gestreckten Armen vor der Brust gehst du seitlich vom Kabel weg und wieder zurück. Durch die Seitschritte steigt die Spannung stetig, und der Rumpf muss gleichzeitig die Beinbewegung ausgleichen.",
      ausfuehrung: [
        "Stell dich seitlich nah an den Kabelzug oder das Band auf Brusthöhe.",
        "Greif den Griff und drück ihn vor der Brust nach vorn, bis die Arme gestreckt sind.",
        "Geh mit kleinen, kontrollierten Seitschritten vom Kabel weg, die Arme bleiben gestreckt vor der Brustmitte.",
        "Halte am weitesten Punkt kurz an.",
        "Geh mit Seitschritten zurück zum Ausgangspunkt, ohne dass sich der Oberkörper dreht.",
        "Nach allen Durchgängen die Seite wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen, bei jedem Schritt die Spannung halten.",
      fehler: [
        "Oberkörper dreht mit zunehmender Spannung: Weg verkürzen oder Gewicht reduzieren.",
        "Zu große Schritte: kurze Seitschritte, Füße nicht zusammenschlagen.",
        "Arme sinken: Griff bleibt auf Brusthöhe."
      ],
      vorteile: [
        "Steigende Spannung im Verlauf der Übung.",
        "Verbindet Anti-Rotation mit Gehen.",
        "Fordert auch die Hüftstabilität."
      ],
      tipps: [
        "Drei bis fünf Seitschritte reichen meist.",
        "Halte am äußersten Punkt zwei bis drei Sekunden."
      ],
      varianten: "Leichter: kürzerer Weg. Schwerer: mehr Gewicht oder Pause am äußersten Punkt.",
      sicherheit: "Sehr sicher. Auf freien Platz um dich herum achten."
    }
  },

  // ---------- Landmine ----------
  {
    id: "landmine_regenbogen",
    name: "Landmine-Regenbogen",
    auch: ["Landmine Rainbow", "Landmine 180", "Landmine Anti-Rotation"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["schulter_vorn", "latissimus", "gesaess"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    info: {
      kurz: "Du hältst das Ende einer Landmine-Stange mit gestreckten Armen über dem Kopf und führst sie in einem Bogen von einer Hüfte zur anderen. Hüfte und Rumpf bleiben dabei weitgehend frontal und müssen die Drehkraft abbremsen.",
      ausfuehrung: [
        "Steck eine Langhantel in die Landmine und stell dich frontal davor, die Füße etwas breiter als schulterbreit.",
        "Greif das Ende der Stange mit beiden Händen übereinander und heb es mit gestreckten Armen vor die Stirn.",
        "Spann Bauch und Gesäß an, die Rippen bleiben unten.",
        "Senke die Stange in einem Bogen zur rechten Hüfte, die Arme bleiben fast gestreckt, Becken und Brust drehen nur leicht mit.",
        "Führ die Stange kontrolliert über den Kopf zurück und auf der anderen Seite zur linken Hüfte.",
        "Arbeite langsam, der Rumpf bremst die Bewegung bei jedem Wechsel ab."
      ],
      atmung: "Beim Absenken zur Seite einatmen, beim Hochführen ausatmen.",
      fehler: [
        "Stange fällt zur Seite: leichtere Last, langsamer und kleinerer Bogen.",
        "Hohlkreuz oben: Rippen nach unten ziehen.",
        "Arme beugen sich stark: Arme fast gestreckt halten, die Arbeit macht der Rumpf."
      ],
      vorteile: [
        "Trainiert das Abbremsen von Drehkräften unter Last.",
        "Verbindet Schulterstabilität und Rumpfkontrolle.",
        "Gut steigerbar über Scheiben und Bogengröße."
      ],
      tipps: [
        "Beginne nur mit der Stange ohne Scheiben.",
        "Eine Drehung der Füße nach außen auf der Seite der Stange kann den Rücken entlasten, wenn du mehr Bewegung zulassen willst."
      ],
      varianten: "Leichter: kleinerer Bogen oder kniend. Schwerer: mehr Gewicht oder größerer Bogen.",
      sicherheit: "Bei Schulter- oder Rückenbeschwerden mit kleinem Bogen und ohne Scheiben beginnen.",
      golf: "Fordert den Rumpf, eine Drehbewegung kontrolliert abzubremsen, ähnlich wie am Ende des Rückschwungs und im Durchschwung. Das stärkt die Kontrolle über die Rotation und kann die Wirbelsäule vor unkontrollierten Drehungen schützen."
    }
  },
  {
    id: "landmine_rotation",
    name: "Landmine-Rotation",
    auch: ["Landmine Rotation", "Landmine Twist", "Landmine Russian Twist"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "gesaess", "schulter_vorn", "adduktoren"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "tennis"],
    golf: 2,
    info: {
      kurz: "Im athletischen Stand drehst du das Ende einer Landmine-Stange mit gestreckten Armen auf Brusthöhe von einer Seite zur anderen. Die Drehung startet in den Hüften und läuft über den Rumpf bis in die Arme, wie bei vielen Wurf- und Schlagbewegungen.",
      ausfuehrung: [
        "Steck eine Langhantel in die Landmine und stell dich frontal davor, die Füße schulterbreit, die Knie leicht gebeugt.",
        "Greif das Stangenende mit beiden Händen und halte es mit fast gestreckten Armen vor der Brust.",
        "Dreh die Stange zur rechten Seite, indem du Hüfte und Rumpf drehst und den linken Fuß auf dem Ballen mitdrehst.",
        "Bremse die Bewegung neben der rechten Hüfte ab.",
        "Dreh kraftvoll über Hüfte und Rumpf zur anderen Seite und dreh dabei den rechten Fuß mit.",
        "Die Arme bleiben fast gestreckt, die Bewegung kommt aus Beinen, Hüfte und Rumpf."
      ],
      atmung: "Bei jeder Drehung ausatmen, beim Wechsel über die Mitte einatmen.",
      fehler: [
        "Drehung nur aus den Armen: Hüfte und Füße drehen mit.",
        "Drehung nur aus dem unteren Rücken bei festen Füßen: hinteren Fuß mitdrehen.",
        "Zu schwer und zu schnell: kontrollierte Umkehrpunkte."
      ],
      vorteile: [
        "Trainiert die Kraftübertragung von den Beinen über den Rumpf in die Arme.",
        "Stärkt die schrägen Bauchmuskeln in Rotation.",
        "Gut steigerbar und mit hoher Geschwindigkeit ausführbar."
      ],
      tipps: [
        "Beginne langsam mit leichtem Gewicht und steigere dann das Tempo.",
        "Stell dir vor, du drehst die Hüfte zuerst und der Oberkörper folgt."
      ],
      varianten: "Leichter: ohne Scheiben oder kleinerer Bogen. Schwerer: mehr Gewicht oder schnellere Ausführung.",
      sicherheit: "Bei Rückenbeschwerden in Rotation langsam beginnen und die Füße unbedingt mitdrehen.",
      golf: "Die Bewegung ähnelt dem Ablauf im Golfschwung: Die Hüfte leitet ein, der Rumpf folgt, die Arme kommen zuletzt. Das kann die Kraftübertragung verbessern und zur Schlägerkopfgeschwindigkeit beitragen."
    }
  },

  // ---------- Chop und Lift ----------
  {
    id: "chop_halbkniend",
    name: "Halbkniender Chop am Kabel",
    auch: ["Half-Kneeling Cable Chop", "Kneeling Chop", "Half-Kneeling Chop"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["latissimus", "trizeps", "gesaess"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Halbkniend ziehst du einen Stab oder ein Seil diagonal von oben nach unten an deinem Körper vorbei, während der Rumpf aufrecht und ruhig bleibt. Eine Übung von Gray Cook, die Rumpfstabilität in Diagonalen trainiert.",
      ausfuehrung: [
        "Stell den Kabelzug hoch ein und befestige eine Stange oder ein Seil.",
        "Knie dich seitlich zum Kabel, das kabelnahe Knie vorn aufgestellt, das andere Knie am Boden.",
        "Greif die Stange mit beiden Händen: die kabelnahe Hand oben, die andere weiter unten, und zieh sie zur Brust.",
        "Drück die Stange dann diagonal nach unten an der Hüfte des hinteren Beins vorbei, die Arme strecken sich.",
        "Der Oberkörper bleibt aufrecht und dreht sich kaum, die Bewegung kommt aus den Armen und der Rumpf stabilisiert.",
        "Führ die Stange kontrolliert zurück und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Beim Ziehen und Drücken nach unten ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht und beugt sich mit: Gewicht reduzieren, aufrecht bleiben.",
        "Hüfte knickt ein: Gesäß des hinteren Beins anspannen.",
        "Bewegung nur aus den Armen ohne Rumpfspannung: Bauch vor jeder Wiederholung anspannen."
      ],
      vorteile: [
        "Trainiert die diagonale Rumpfstabilität wie bei Würfen und Schwüngen.",
        "Deckt Seitenunterschiede auf.",
        "Fordert Hüftstabilität in der Halbkniestellung."
      ],
      tipps: [
        "Starte mit leichter Last und konzentriere dich auf einen ruhigen Oberkörper.",
        "Eine Stange statt eines Seils macht die Bewegung stabiler und besser lesbar."
      ],
      varianten: "Leichter: im Stand oder im Kniestand mit beiden Knien. Schwerer: Füße in einer Linie (Inline) oder mehr Gewicht.",
      sicherheit: "Bei Kniebeschwerden eine weiche Unterlage nutzen.",
      golf: "Trainiert die diagonale Rumpfstabilität, die im Abschwung gebraucht wird. Die schmale Basis zwingt Hüfte und Rumpf zusammenzuarbeiten und deckt Seitenunterschiede auf, die den Schwung beeinflussen können."
    }
  },
  {
    id: "lift_halbkniend",
    name: "Halbkniender Lift am Kabel",
    auch: ["Half-Kneeling Cable Lift", "Kneeling Lift", "Half-Kneeling Lift"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["schulter_vorn", "oberer_ruecken", "gesaess"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Das Gegenstück zum Chop: Halbkniend ziehst und drückst du eine Stange diagonal von unten nach oben über die gegenüberliegende Schulter. Der Rumpf bleibt aufrecht und stabil.",
      ausfuehrung: [
        "Stell den Kabelzug tief ein und befestige eine Stange oder ein Seil.",
        "Knie dich seitlich zum Kabel, das kabelferne Knie vorn aufgestellt, das kabelnahe Knie am Boden.",
        "Greif die Stange mit beiden Händen, die kabelnahe Hand weiter unten.",
        "Zieh die Stange zur Brust und drück sie dann diagonal nach oben über die gegenüberliegende Schulter.",
        "Halte den Oberkörper aufrecht, er dreht sich kaum, die Rippen bleiben unten.",
        "Führ die Stange kontrolliert zurück und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz am Ende: Rippen nach unten, Gewicht reduzieren.",
        "Oberkörper dreht mit: Gesäß anspannen und ruhig bleiben.",
        "Schulter zieht zum Ohr: Schultern locker nach unten."
      ],
      vorteile: [
        "Trainiert die diagonale Rumpfstabilität von unten nach oben.",
        "Ergänzt den Chop zu einem vollständigen Diagonalprogramm.",
        "Verbessert die Haltung des Oberkörpers unter Last."
      ],
      tipps: [
        "Etwas leichter wählen als beim Chop.",
        "Ein Spiegel hilft, den Oberkörper ruhig zu halten."
      ],
      varianten: "Leichter: im Stand oder mit beiden Knien am Boden. Schwerer: Inline-Kniestand oder mehr Gewicht.",
      sicherheit: "Bei Schulterbeschwerden den Weg nach oben begrenzen. Bei Kniebeschwerden weiche Unterlage nutzen.",
      golf: "Stärkt die Fähigkeit, den Oberkörper bei diagonaler Kraft aufrecht zu halten, wie beim Aufbau der Spannung im Rückschwung. Zusammen mit dem Chop ein gutes Paar für golfspezifische Rumpfkraft."
    }
  },

  // ---------- Rotation ----------
  {
    id: "holzhacker_kabel",
    name: "Holzhacker am Kabelzug von oben",
    auch: ["Cable Woodchopper", "High-to-Low Cable Chop", "Cable Wood Chop"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "gesaess", "schulter_vorn", "latissimus"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Du ziehst den Griff am hohen Kabelzug diagonal von oben nach unten quer vor dem Körper vorbei, wie beim Holzhacken. Die Drehung kommt aus Hüfte und Rumpf und trainiert die schrägen Bauchmuskeln in Rotation.",
      ausfuehrung: [
        "Stell den Kabelzug ganz hoch ein und stell dich seitlich dazu, etwa eine Armlänge entfernt, die Füße schulterbreit.",
        "Greif den Griff mit beiden Händen über der kabelnahen Schulter, die Arme fast gestreckt.",
        "Spann den Bauch an und zieh den Griff diagonal nach unten zur gegenüberliegenden Hüfte.",
        "Dreh Hüfte und Rumpf mit und lass den hinteren Fuß auf dem Ballen mitdrehen.",
        "Halte am Ende kurz an und führ den Griff kontrolliert auf demselben Weg zurück.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Ziehen nach unten ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ziehen nur aus den Armen: Arme bleiben fast gestreckt, der Rumpf dreht.",
        "Rundrücken am Ende: Brust aufrecht halten.",
        "Füße bleiben starr und der untere Rücken verdreht: hinteren Fuß mitdrehen.",
        "Zu schweres Gewicht und Schwung: kontrolliert auch zurück."
      ],
      vorteile: [
        "Trainiert die schrägen Bauchmuskeln in Rotation unter Last.",
        "Verbindet Hüfte, Rumpf und Schulter zu einer Kette.",
        "Gut übertragbar auf Würfe und Schwünge."
      ],
      tipps: [
        "Etwa 10 bis 15 Wiederholungen je Seite mit kontrolliertem Rückweg.",
        "Stell dir vor, du ziehst die Diagonale mit dem Brustbein, nicht mit den Händen."
      ],
      varianten: "Leichter: weniger Gewicht oder kleinerer Weg. Schwerer: mehr Gewicht, schnellere Zugphase oder halbkniend.",
      sicherheit: "Bei Rückenbeschwerden in Rotation langsam beginnen und Füße und Hüfte mitdrehen lassen.",
      golf: "Ähnelt der Bewegungsrichtung im Abschwung: von oben hinten nach unten vorn. Stärkt die schrägen Bauchmuskeln, die Rotation erzeugen, und kann zur Schlägerkopfgeschwindigkeit beitragen."
    }
  },
  {
    id: "holzhacker_kabel_tief",
    name: "Holzhacker am Kabelzug von unten",
    auch: ["Low-to-High Cable Chop", "Reverse Woodchopper", "Cable Lift Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["gesaess", "schulter_vorn", "oberer_ruecken", "quadrizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Du ziehst den Griff vom tiefen Kabelzug diagonal von unten nach oben über die gegenüberliegende Schulter. Die Bewegung startet mit einem Beinschub und einer Hüftdrehung.",
      ausfuehrung: [
        "Stell den Kabelzug ganz tief ein und stell dich seitlich dazu, die Füße etwas breiter als schulterbreit.",
        "Geh leicht in die Knie und greif den Griff mit beiden Händen neben dem kabelnahen Knie.",
        "Drück dich mit den Beinen hoch und dreh Hüfte und Rumpf zur Gegenseite.",
        "Führ den Griff mit fast gestreckten Armen diagonal nach oben bis über die gegenüberliegende Schulter.",
        "Lass den kabelnahen Fuß auf dem Ballen mitdrehen.",
        "Führ den Griff kontrolliert zurück und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ziehen nur aus den Armen: Beine und Hüfte leiten die Bewegung ein.",
        "Hohlkreuz am Ende: Rippen unten halten.",
        "Rundrücken beim Greifen unten: aus den Knien in die Tiefe gehen."
      ],
      vorteile: [
        "Trainiert die Kraftübertragung von unten nach oben.",
        "Stärkt schräge Bauchmuskeln und Gesäß gemeinsam.",
        "Ergänzt den Holzhacker von oben."
      ],
      tipps: [
        "Etwas leichter wählen als beim Holzhacker von oben.",
        "Die Hüfte dreht zuerst, dann folgen Rumpf und Arme."
      ],
      varianten: "Leichter: weniger Gewicht oder ohne Beinschub. Schwerer: mehr Gewicht oder halbkniend.",
      sicherheit: "Bei Rückenbeschwerden mit leichtem Gewicht beginnen und die Füße mitdrehen.",
      golf: "Fördert die Abfolge Beine, Hüfte, Rumpf, Arme, die auch im Schwung zum Ball wichtig ist. Kräftigt Gesäß und schräge Bauchmuskeln, die Rotation erzeugen und abbremsen."
    }
  },
  {
    id: "holzhacker_band",
    name: "Holzhacker mit Band",
    auch: ["Band Woodchopper", "Band Wood Chop", "Resistance Band Chop"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "gesaess", "schulter_vorn"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Holzhacker mit einem hoch befestigten Widerstandsband. Ideal für zu Hause, unterwegs oder als Aufwärmübung vor der Golfrunde.",
      ausfuehrung: [
        "Befestige das Band hoch, zum Beispiel oben an einer Tür, und stell dich seitlich dazu.",
        "Greif das Band mit beiden Händen über der ankernahen Schulter und geh so weit weg, dass Spannung entsteht.",
        "Stell die Füße schulterbreit und spann den Bauch an.",
        "Zieh das Band diagonal nach unten zur gegenüberliegenden Hüfte, Hüfte und hinterer Fuß drehen mit.",
        "Halte am Ende kurz und führ das Band langsam zurück.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Nur aus den Armen ziehen: Rumpf und Hüfte drehen mit.",
        "Band schnellt zurück: Rückweg kontrolliert bremsen.",
        "Rundrücken am Ende: Brust aufrecht."
      ],
      vorteile: [
        "Rotationstraining ohne Studio.",
        "Der zunehmende Widerstand fordert das Ende der Bewegung.",
        "Gut zum Aufwärmen geeignet."
      ],
      tipps: [
        "Für das Aufwärmen vor der Runde reichen 8 bis 10 lockere Wiederholungen je Seite.",
        "Band vor jedem Einsatz auf Risse prüfen."
      ],
      varianten: "Leichter: leichteres Band. Schwerer: stärkeres Band, von unten nach oben oder halbkniend.",
      sicherheit: "Band sicher befestigen, damit es nicht zurückschnellt.",
      golf: "Eine einfache Möglichkeit, die Rotationsmuskulatur vor der Runde zu aktivieren und die Bewegungsrichtung des Abschwungs zu üben, ohne zusätzliche Geräte."
    }
  },
  {
    id: "kabel_rotation",
    name: "Horizontale Kabelrotation",
    auch: ["Standing Cable Rotation", "Cable Trunk Rotation", "Cable Horizontal Chop"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "gesaess", "schulter_vorn"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Seitlich zum Kabelzug auf Brusthöhe drehst du den Griff mit gestreckten Armen waagerecht von einer Seite zur anderen. Trainiert die Rotation des Rumpfes in der horizontalen Ebene.",
      ausfuehrung: [
        "Stell den Kabelzug auf Brusthöhe und stell dich seitlich dazu, die Füße schulterbreit, die Knie leicht gebeugt.",
        "Greif den Griff mit beiden Händen und streck die Arme vor der Brust aus.",
        "Dreh Hüfte und Rumpf vom Kabel weg, die Arme bleiben gestreckt vor der Brust.",
        "Lass den kabelnahen Fuß auf dem Ballen mitdrehen.",
        "Halte am Ende kurz und dreh dich kontrolliert zurück.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Wegdrehen ausatmen, beim Zurückdrehen einatmen.",
      fehler: [
        "Arme ziehen statt Rumpf drehen: Hände bleiben vor der Brustmitte.",
        "Füße fest und Drehung aus dem unteren Rücken: hinteren Fuß mitdrehen.",
        "Schwung: kontrolliertes Tempo."
      ],
      vorteile: [
        "Trainiert die Rotation in der horizontalen Ebene.",
        "Stärkt die schrägen Bauchmuskeln.",
        "Leicht dosierbar und gut zu lernen."
      ],
      tipps: [
        "Stell dir vor, deine Arme und Brust sind ein festes Dreieck, das sich als Ganzes dreht.",
        "Mittleres Gewicht mit 10 bis 15 Wiederholungen je Seite."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: halbkniend mit fixiertem Becken oder mehr Gewicht.",
      sicherheit: "Bei Rückenbeschwerden die Füße mitdrehen und langsam arbeiten.",
      golf: "Die Rotation auf Brusthöhe mit gestreckten Armen ähnelt der Drehung von Brustkorb und Armen als Einheit im Schwung. Kräftigt die Muskeln, die die Drehung erzeugen und am Ende abbremsen."
    }
  },
  {
    id: "kabel_rotation_halbkniend",
    name: "Kabelrotation halbkniend",
    auch: ["Half-Kneeling Cable Rotation", "Half-Kneeling Cable Torso Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "oberer_ruecken", "gesaess"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Kabelrotation im Halbknien, bei der das Becken fixiert ist. Die Drehung muss aus dem Brustkorb kommen, das trainiert die Trennung zwischen Becken und Oberkörper.",
      ausfuehrung: [
        "Stell den Kabelzug auf Brusthöhe im Knien ein.",
        "Knie dich seitlich zum Kabel, das kabelnahe Knie am Boden, das andere Bein vorn aufgestellt.",
        "Spann das Gesäß des hinteren Beins an und richte den Oberkörper auf.",
        "Greif den Griff mit beiden Händen und streck die Arme vor der Brust aus.",
        "Dreh den Oberkörper vom Kabel weg, das Becken bleibt nach vorn ausgerichtet.",
        "Dreh kontrolliert zurück und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Beim Wegdrehen ausatmen, beim Zurückdrehen einatmen.",
      fehler: [
        "Becken dreht mit: Gesäß anspannen, Gewicht reduzieren.",
        "Seitneigung statt Drehung: aufrecht bleiben.",
        "Arme ziehen: Hände bleiben vor der Brustmitte."
      ],
      vorteile: [
        "Trainiert die Rotation der Brustwirbelsäule bei stabilem Becken.",
        "Verbessert die Trennung von Becken- und Oberkörperdrehung.",
        "Schont den unteren Rücken, weil die Lendenwirbelsäule kaum dreht."
      ],
      tipps: [
        "Leichteres Gewicht als im Stand wählen.",
        "Eine Pause am Ende der Drehung erhöht die Wirkung."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: Pause am Ende oder mehr Gewicht.",
      sicherheit: "Bei Kniebeschwerden eine weiche Unterlage nutzen.",
      golf: "Trainiert die Separation zwischen Becken und Oberkörper, also das Drehen des Brustkorbs bei stabilem Unterkörper. Diese Trennung hilft, im Rückschwung Spannung aufzubauen und im Abschwung die richtige Reihenfolge zu finden."
    }
  },
  {
    id: "rotation_kh",
    name: "Stehende Rotation mit Kurzhantel",
    auch: ["Standing Dumbbell Rotation", "Standing Russian Twist", "Medicine Ball Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "schulter_vorn", "gesaess"],
    geraete: [["kurzhantel"], ["kettlebell"], ["medizinball"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Im Stand hältst du eine Kurzhantel, Kettlebell oder einen Medizinball vor der Brust und drehst den Oberkörper kontrolliert von Seite zu Seite. Eine einfache Rotationsübung ohne Kabelzug.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, die Knie leicht gebeugt.",
        "Halte das Gewicht mit beiden Händen und fast gestreckten Armen vor der Brust.",
        "Spann den Bauch an und dreh Oberkörper und Arme zur rechten Seite, die Hüfte dreht leicht mit.",
        "Bremse die Bewegung kontrolliert ab und dreh dich zur anderen Seite.",
        "Das Gewicht bleibt auf Brusthöhe vor dem Brustbein.",
        "Arbeite gleichmäßig, ohne zu schwingen."
      ],
      atmung: "Bei jeder Drehung ausatmen, über die Mitte einatmen.",
      fehler: [
        "Schwung: Das Gewicht reißt dich mit. Langsamer und kontrollierter.",
        "Arme bewegen sich allein: Brust und Arme drehen als Einheit.",
        "Rundrücken: aufrecht bleiben."
      ],
      vorteile: [
        "Einfache Rotationsübung mit wenig Ausrüstung.",
        "Trainiert das Abbremsen der Drehung.",
        "Gut zum Aufwärmen."
      ],
      tipps: [
        "Je weiter das Gewicht vom Körper weg ist, desto schwerer.",
        "Leichtes Gewicht und gleichmäßiges Tempo."
      ],
      varianten: "Leichter: ohne Gewicht oder Gewicht nah am Körper. Schwerer: Arme gestreckt oder Kabelrotation.",
      sicherheit: "Bei Rückenbeschwerden in Rotation langsam und mit kleinem Bewegungsweg arbeiten."
    }
  },
  {
    id: "russian_twist",
    name: "Russian Twist",
    auch: ["Russian Twist", "Russischer Twist", "Seated Twist"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch"],
    sekundaer: ["bauch", "hueftbeuger"],
    geraete: [["medizinball"], ["hantelscheibe"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Im Sitzen mit zurückgelehntem Oberkörper drehst du ein Gewicht vor dem Körper von Seite zu Seite. Trainiert die schrägen Bauchmuskeln und die Haltekraft der Bauch- und Hüftbeugermuskulatur.",
      ausfuehrung: [
        "Setz dich auf den Boden, die Knie gebeugt, die Fersen am Boden.",
        "Lehn den Oberkörper mit geradem Rücken etwa 45 Grad nach hinten.",
        "Halte den Medizinball oder die Scheibe mit beiden Händen vor der Brust.",
        "Dreh den Oberkörper zur rechten Seite und führ das Gewicht neben die Hüfte.",
        "Dreh über die Mitte zur linken Seite, die Brust dreht mit, nicht nur die Arme.",
        "Arbeite kontrolliert und gleichmäßig."
      ],
      atmung: "Bei jeder Drehung ausatmen.",
      fehler: [
        "Runder Rücken: Brust aufrichten, lieber weniger zurücklehnen.",
        "Nur die Arme bewegen: Schultern und Brust drehen mit.",
        "Zu schnell mit Schwung: kontrolliert und mit kurzem Halt an jeder Seite."
      ],
      vorteile: [
        "Trainiert die schrägen Bauchmuskeln in Rotation.",
        "Fordert gleichzeitig die statische Haltekraft des Rumpfes.",
        "Wenig Ausrüstung nötig."
      ],
      tipps: [
        "Mit angehobenen Füßen wird es deutlich schwerer.",
        "Langsame, bewusste Drehungen sind wirksamer als schnelles Tippen."
      ],
      varianten: "Leichter: ohne Gewicht, Füße am Boden. Schwerer: Füße angehoben oder schwereres Gewicht.",
      sicherheit: "Die Kombination aus Beugung und Rotation belastet die Bandscheiben. Bei Rückenproblemen lieber Pallof Press oder Kabelrotation wählen."
    }
  },
]
