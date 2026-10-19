import type { Uebung } from "../../logik/typen"

export const SCHULTER: Uebung[] = [
  // ---------- Drücken vertikal ----------
  {
    id: "schulterdruecken_lh",
    name: "Schulterdrücken stehend mit Langhantel",
    auch: ["Barbell Overhead Press", "Overhead Press", "OHP", "Military Press", "Strict Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["trapez", "oberer_ruecken", "bauch", "gesaess"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 2, ruecken: 1, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Die klassische Grundübung für das Drücken über Kopf. Stärkt vordere und seitliche Schulter sowie Trizeps und verlangt einen stabilen Rumpf, weil du stehend die ganze Last über den Kopf bringst.",
      ausfuehrung: [
        "Stell die Langhantel im Rack etwa auf Höhe des Schlüsselbeins ein. Greif die Stange knapp schulterbreit, die Unterarme stehen von vorn betrachtet senkrecht.",
        "Heb die Stange aus, geh einen Schritt zurück und stell die Füße hüftbreit. Die Stange liegt auf den Handballen, die Handgelenke sind gerade, die Ellbogen zeigen leicht vor die Stange.",
        "Spann Gesäß und Bauch fest an, als würdest du gleich einen Schlag abfangen. Die Rippen bleiben unten, der Oberkörper steht wie eine Säule.",
        "Drück die Stange senkrecht nach oben und nimm dabei den Kopf kurz nach hinten, damit die Stange am Kinn vorbeikommt.",
        "Sobald die Stange die Stirn passiert, schieb den Kopf wieder nach vorn durch die Arme. Oben steht die Stange über dem Mittelfuß, die Arme sind gestreckt und die Schultern leicht zu den Ohren gezogen.",
        "Senk die Stange kontrolliert auf demselben Weg bis zum Schlüsselbein ab, Kopf wieder kurz zurück.",
        "Atme unten neu ein, spann wieder an und drück die nächste Wiederholung. Nach dem letzten Satz die Stange ins Rack zurücklegen."
      ],
      atmung: "Unten tief in den Bauch einatmen und halten, durch den schwierigsten Teil nach oben drücken, oben oder kurz danach ausatmen.",
      fehler: [
        "Starkes Hohlkreuz: Gesäß und Bauch anspannen und die Rippen unten halten, notfalls Gewicht reduzieren.",
        "Stange wandert nach vorn: Kopf rechtzeitig nach hinten nehmen und die Stange eng am Gesicht vorbeiführen.",
        "Abgeknickte Handgelenke: Stange tiefer in die Handballen legen, Fingerknöchel zeigen schräg nach oben.",
        "Schwung aus den Beinen: Knie bleiben gestreckt, sonst wird es ein Push Press.",
        "Ellbogen weit nach außen: Ellbogen leicht vor die Stange und eher unter die Hände bringen."
      ],
      vorteile: [
        "Baut Kraft und Masse an vorderer und seitlicher Schulter sowie am Trizeps auf.",
        "Trainiert die Rumpfstabilität unter Last im Stehen.",
        "Gut messbar und über Jahre steigerbar, ein Kernlift vieler Kraftprogramme.",
        "Überträgt sich auf alltägliches Heben von Lasten über Kopf."
      ],
      tipps: [
        "Drück dich gedanklich von der Stange weg in den Boden, dann bleibt der Körper unter der Last.",
        "Kleine Sprünge von 1 bis 2,5 kg machen die Steigerung leichter, weil die Übung langsamer stärker wird als Bankdrücken.",
        "Ein enger Griff mit senkrechten Unterarmen ist meist stärker als ein sehr breiter Griff."
      ],
      varianten: "Leichter: im Sitzen mit Rückenlehne oder mit Kurzhanteln. Schwerer: Pausen auf Stirnhöhe oder als Push Press für schwerere Lasten.",
      sicherheit: "Bei Schulterschmerzen über Kopf, eingeschränkter Überkopfbeweglichkeit oder Rückenbeschwerden lieber Landmine-Drücken wählen. Pressatmung bei Bluthochdruck nur nach ärztlicher Rücksprache."
    }
  },
  {
    id: "push_press",
    name: "Push Press mit Langhantel",
    auch: ["Push Press", "Barbell Push Press", "Schwungdrücken"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps", "quadrizeps"],
    sekundaer: ["schulter_seitlich", "gesaess", "trapez", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 2, ruecken: 1, knie: 1, handgelenk: 1 },
    stufe: 3,
    sport: ["fussball", "golf"],
    info: {
      kurz: "Schulterdrücken mit einem kurzen, kräftigen Beinimpuls. Verbindet Kraft aus den Beinen mit dem Drücken über Kopf, erlaubt schwerere Lasten als das strikte Drücken und schult die Kraftübertragung durch den Rumpf.",
      ausfuehrung: [
        "Nimm die Stange wie beim Schulterdrücken aus dem Rack, sie liegt vorn auf den Schultern, Griff knapp schulterbreit.",
        "Stell die Füße hüftbreit, Gewicht auf dem ganzen Fuß, Bauch und Gesäß fest.",
        "Beuge die Knie kurz und gerade nach unten, nur etwa 10 bis 15 Zentimeter. Der Oberkörper bleibt senkrecht, das Gewicht auf den Fersen und dem Mittelfuß.",
        "Streck die Beine explosiv und nutze diesen Schwung, um die Stange von den Schultern zu lösen.",
        "Drück mit den Armen in derselben Bewegung durch, bis die Arme gestreckt sind. Kopf nach hinten nehmen und oben wieder durch die Arme schieben.",
        "Senk die Stange kontrolliert auf die Schultern ab und federe dabei leicht in den Knien ab.",
        "Stabilisiere dich kurz und starte die nächste Wiederholung erst, wenn du wieder ganz ruhig stehst."
      ],
      atmung: "Vor dem Absenken in die Knie einatmen und halten, nach dem Durchdrücken oben ausatmen.",
      fehler: [
        "Zu tiefes Einknicken: Es ist ein kurzer Dip, keine Kniebeuge.",
        "Oberkörper kippt nach vorn: Gewicht auf dem Mittelfuß lassen und senkrecht absinken.",
        "Arme drücken zu früh: Erst die Beine strecken, dann übernehmen die Arme.",
        "Hohlkreuz oben: Rippen unten halten und Gesäß anspannen."
      ],
      vorteile: [
        "Ermöglicht schwerere Lasten über Kopf und damit einen starken Reiz für Schulter und Trizeps in der oberen Phase.",
        "Schult die Kraftübertragung von den Beinen über den Rumpf in die Arme.",
        "Verbessert die Schnellkraft, nützlich für Wurf- und Sprungsportarten.",
        "Die schwere Absenkphase stärkt die exzentrische Kraft der Schulter."
      ],
      tipps: [
        "Stell dir vor, du springst mit der Stange, ohne dass die Füße den Boden verlassen.",
        "Starte mit etwa dem Gewicht, das du strikt drücken kannst, und steigere langsam, bis der Ablauf sitzt.",
        "Wenige Wiederholungen (3 bis 6) passen am besten, damit die Technik sauber bleibt."
      ],
      varianten: "Leichter: mit Kurzhanteln oder Kettlebells. Schwerer: mehr Last oder langsames Absenken über drei bis vier Sekunden.",
      sicherheit: "Erst sauber strikt drücken können. Bei Schulter-, Knie- oder Rückenbeschwerden vorsichtig sein, bei Bluthochdruck Pressatmung vermeiden."
    }
  },
  {
    id: "schulterdruecken_lh_sitzend",
    name: "Schulterdrücken sitzend mit Langhantel",
    auch: ["Seated Barbell Overhead Press", "Seated Barbell Press", "Seated Military Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["trapez", "oberer_ruecken"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Schulterdrücken mit der Langhantel auf einer Bank mit steiler Rückenlehne. Der Rumpf wird entlastet, sodass sich die Arbeit stärker auf Schultern und Trizeps konzentriert.",
      ausfuehrung: [
        "Stell die Rückenlehne fast senkrecht (etwa 80 bis 90 Grad) und die Stange im Rack so ein, dass du sie mit leicht gebeugten Armen erreichst.",
        "Setz dich mit dem Rücken an die Lehne, Füße fest auf dem Boden, Gesäß ganz hinten.",
        "Greif die Stange knapp schulterbreit, heb sie aus und bring sie vor dem Gesicht auf Höhe des Schlüsselbeins.",
        "Drück die Stange senkrecht nach oben, nimm das Kinn leicht zurück und lass den Kopf oben zwischen die Arme kommen.",
        "Streck die Arme oben fast vollständig, ohne die Ellbogen hart zu blockieren.",
        "Senk die Stange kontrolliert bis etwa Kinn- oder Schlüsselbeinhöhe ab und drück direkt wieder nach oben.",
        "Leg die Stange nach dem Satz zurück ins Rack oder lass sie dir von einem Partner abnehmen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen. Bei schweren Sätzen unten kurz die Luft halten und oben ausatmen.",
      fehler: [
        "Gesäß rutscht nach vorn und der Rücken bildet ein starkes Hohlkreuz: Gesäß hinten lassen, Rippen unten.",
        "Stange zu weit vor dem Körper: Stange eng am Gesicht vorbeiführen.",
        "Nur halbe Wiederholungen: mindestens bis Kinnhöhe absenken.",
        "Zu schwer ohne Sicherung: Ablagen im Rack nutzen oder einen Partner bitten."
      ],
      vorteile: [
        "Stabile Position, dadurch gezielte Belastung von Schultern und Trizeps.",
        "Weniger Rumpf- und Rückenbelastung als im Stand.",
        "Gut für schwere Sätze im Muskelaufbau."
      ],
      tipps: [
        "Eine Lehne mit 80 Grad ist für viele angenehmer als eine ganz senkrechte.",
        "Drück den Hinterkopf nicht gegen die Lehne, sondern halte den Kopf frei, damit die Stange vorbeikommt.",
        "In der Multipresse ist die Bahn fest und das Ausheben einfacher, die freie Stange trainiert aber mehr Kontrolle."
      ],
      varianten: "Leichter: Kurzhanteln oder Multipresse. Schwerer: Pause unten oder langsames Absenken.",
      sicherheit: "Bei Schulterschmerzen über Kopf eine neutrale Griffvariante mit Kurzhanteln oder Landmine-Drücken wählen."
    }
  },
  {
    id: "schulterdruecken_kh_sitzend",
    name: "Schulterdrücken mit Kurzhanteln im Sitzen",
    auch: ["Seated Dumbbell Shoulder Press", "Seated DB Shoulder Press", "DB Overhead Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["trapez", "rotatorenmanschette"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Drücken über Kopf mit zwei Kurzhanteln auf einer Bank mit Rückenlehne. Eine der besten Übungen für den Muskelaufbau an der Schulter, weil jede Seite für sich arbeitet und du die Bahn frei wählen kannst.",
      ausfuehrung: [
        "Stell die Lehne auf etwa 80 bis 90 Grad. Setz dich, stell die Hanteln senkrecht auf die Oberschenkel.",
        "Kipp die Hanteln mit einem kleinen Kniestoß nacheinander hoch auf Schulterhöhe.",
        "Halte die Hanteln neben den Ohren, Unterarme etwa senkrecht, Ellbogen leicht vor dem Körper (nicht ganz seitlich).",
        "Drück die Hanteln nach oben und leicht nach innen, bis die Arme fast gestreckt sind. Die Hanteln berühren sich oben nicht.",
        "Senk die Hanteln langsam ab, bis sie etwa auf Ohr- oder Schulterhöhe sind und du eine Dehnung in der Schulter spürst.",
        "Drück direkt wieder hoch, ohne unten abzulegen.",
        "Nach dem Satz die Hanteln zu den Oberschenkeln führen und sicher ablegen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hohlkreuz und Gesäß rutscht nach vorn: Rücken an der Lehne lassen und Bauch anspannen.",
        "Ellbogen ganz zur Seite: Ellbogen etwa 30 Grad vor den Körper bringen, das ist schulterfreundlicher.",
        "Hanteln knallen oben zusammen: oben über den Schultern stoppen.",
        "Zu kurzer Bewegungsweg: unten bis mindestens Ohrhöhe gehen."
      ],
      vorteile: [
        "Großer Bewegungsumfang und gute Dehnung der vorderen und seitlichen Schulter.",
        "Jede Seite arbeitet einzeln, Seitenunterschiede fallen auf.",
        "Die Lehne entlastet den unteren Rücken.",
        "Freie Hantelbahn passt sich deinem Schultergelenk an."
      ],
      tipps: [
        "Das Hochbringen der schweren Hanteln mit dem Knie spart Kraft und schützt die Schulter.",
        "Mit 8 bis 12 Wiederholungen und 1 bis 2 Wiederholungen im Tank arbeiten.",
        "Ein leicht eingedrehter (halbneutraler) Griff ist für viele Schultern angenehmer."
      ],
      varianten: "Leichter: neutraler Griff oder Maschine. Schwerer: im Stand oder einarmig.",
      sicherheit: "Bei Schulterschmerzen über Kopf den Bewegungsweg verkürzen oder Landmine-Drücken nutzen."
    }
  },
  {
    id: "schulterdruecken_kh_stehend",
    name: "Schulterdrücken mit Kurzhanteln im Stehen",
    auch: ["Standing Dumbbell Shoulder Press", "Standing DB Overhead Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["bauch", "trapez", "gesaess", "rotatorenmanschette"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 2, ruecken: 1, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Drücken von zwei Kurzhanteln über Kopf im Stand. Verlangt mehr Rumpfstabilität als die sitzende Variante und lässt jede Schulter ihre natürliche Bahn finden.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie locker, und bring die Hanteln mit Schwung aus der Hüfte oder einem Curl auf Schulterhöhe.",
        "Die Hanteln sind neben dem Kopf, Handflächen nach vorn oder leicht zueinander, Ellbogen etwas vor dem Körper.",
        "Spann Gesäß und Bauch an, die Rippen bleiben unten.",
        "Drück die Hanteln senkrecht nach oben, bis die Arme fast gestreckt sind und die Hanteln über den Schultern stehen.",
        "Senk sie kontrolliert wieder auf Ohr- oder Schulterhöhe ab.",
        "Halte den ganzen Satz lang die Beine ruhig, ohne Schwung aus den Knien.",
        "Am Ende die Hanteln langsam zu den Schultern und dann zu den Oberschenkeln führen."
      ],
      atmung: "Unten einatmen und Bauch fest machen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zurücklehnen und Hohlkreuz: Gesäß anspannen, Rippen nach unten ziehen.",
        "Schwung aus den Knien: Beine bleiben gestreckt, sonst Gewicht senken.",
        "Ungleiche Arme: Bewusst beide Hanteln gleichzeitig führen und oben kurz stabilisieren.",
        "Hanteln driften nach vorn: oben stehen die Hanteln über den Schultern, nicht vor dem Gesicht."
      ],
      vorteile: [
        "Stärkt Schultern und Trizeps und zusätzlich die Rumpfstabilität.",
        "Freie Bahn ist für viele Schultern angenehmer als die Stange.",
        "Alltagsnah: Lasten über Kopf heben und halten.",
        "Ohne Bank und Rack machbar, ideal für das Training zu Hause."
      ],
      tipps: [
        "Stell dir vor, du schiebst dich mit den Händen von der Decke weg in den Boden.",
        "Wenn die Hanteln schwer werden, aus einer leicht versetzten Fußstellung drücken, das gibt Halt.",
        "Gut als Hauptübung, wenn keine Langhantel da ist."
      ],
      varianten: "Leichter: sitzend mit Lehne. Schwerer: einarmig oder im Halbkniestand.",
      sicherheit: "Bei Rückenbeschwerden die sitzende Variante bevorzugen. Bei Schulterschmerzen über Kopf Landmine-Drücken wählen."
    }
  },
  {
    id: "arnold_press_sitzend",
    name: "Arnold Press mit Kurzhanteln sitzend",
    auch: ["Arnold Press", "Seated Arnold Press", "KH-Arnold Press sitzend", "DB Arnold Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["rotatorenmanschette", "trapez"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Schulterdrücken mit Kurzhanteln, bei dem du die Hände während des Drückens von innen nach außen drehst. Durch den langen Weg und die Rotation bekommt die vordere Schulter viel Arbeit und Dehnung.",
      ausfuehrung: [
        "Setz dich auf eine Bank mit fast senkrechter Lehne, Füße fest am Boden.",
        "Bring die Hanteln vor die Schultern, Handflächen zeigen zu dir wie am Ende eines Bizepscurls, Ellbogen vor dem Körper.",
        "Beginne zu drücken und öffne dabei die Ellbogen nach außen, während sich die Hände nach vorn drehen.",
        "Auf Stirnhöhe zeigen die Handflächen nach vorn, drück von dort weiter nach oben, bis die Arme fast gestreckt sind.",
        "Senk die Hanteln auf demselben Weg ab und dreh die Handflächen dabei wieder zu dir.",
        "Unten sind die Ellbogen wieder vor dem Körper und die Hanteln vor den Schultern.",
        "Arbeite fließend und ohne Pause oben, damit die Schulter unter Spannung bleibt."
      ],
      atmung: "Beim Absenken und Eindrehen einatmen, beim Hochdrücken und Ausdrehen ausatmen.",
      fehler: [
        "Drehen und Drücken nacheinander: Beides sollte gleichzeitig und fließend passieren.",
        "Zu schwer: Die Rotation wird abgekürzt, Gewicht etwa 20 Prozent leichter als beim normalen Drücken wählen.",
        "Hohlkreuz: Rücken an der Lehne lassen, Bauch fest.",
        "Ellbogen fallen unten zur Seite: Ellbogen unten vor dem Körper halten."
      ],
      vorteile: [
        "Längerer Bewegungsweg als beim normalen Drücken, viel Spannung für die vordere Schulter.",
        "Die Rotation fordert auch die Schulterstabilisatoren.",
        "Gute Abwechslung für den Muskelaufbau, wenn das klassische Drücken stagniert."
      ],
      tipps: [
        "Eher mittlere Wiederholungen (8 bis 15) und ein ruhiges Tempo wählen.",
        "Spüre unten die Dehnung vorn in der Schulter und drück kraftvoll aus ihr heraus.",
        "Funktioniert auch im Stehen, dann steigt die Rumpfarbeit."
      ],
      varianten: "Leichter: kleinere Hanteln oder nur bis Stirnhöhe drehen. Schwerer: im Stehen oder mit Pause unten.",
      sicherheit: "Bei Impingement-Beschwerden oder Schmerzen bei Innenrotation lieber das klassische oder neutrale Schulterdrücken wählen."
    }
  },
  {
    id: "schulterdruecken_kh_einarmig",
    name: "Schulterdrücken einarmig mit Kurzhantel stehend",
    auch: ["Single-Arm Dumbbell Overhead Press", "Single-Arm DB Shoulder Press", "One-Arm DB Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["schraege_bauch", "bauch", "rotatorenmanschette"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Drücken einer einzelnen Kurzhantel über Kopf im Stehen. Die einseitige Last zwingt den Rumpf, ein seitliches Wegkippen zu verhindern, und zeigt Unterschiede zwischen links und rechts.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und nimm die Hantel in eine Hand auf Schulterhöhe, Handfläche nach vorn oder zur Seite.",
        "Der freie Arm hängt locker oder ist zur Seite ausgestreckt, die Hüfte steht gerade.",
        "Spann Bauch und Gesäß an, als würdest du gleichzeitig nach oben wachsen.",
        "Drück die Hantel senkrecht nach oben, bis der Arm fast gestreckt ist und die Hantel über der Schulter steht.",
        "Halte den Oberkörper aufrecht, ohne zur Gegenseite wegzukippen.",
        "Senk die Hantel kontrolliert bis zur Schulter ab.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Unten einatmen, beim Drücken ausatmen.",
      fehler: [
        "Seitliches Ausweichen mit dem Oberkörper: Gewicht reduzieren und den Rumpf fest halten.",
        "Hüfte schiebt zur Seite: Gesäß beidseitig anspannen.",
        "Schulter zieht vor dem Drücken zum Ohr: erst drücken, die Schulter folgt oben natürlich.",
        "Schwung aus den Beinen: Knie bleiben ruhig."
      ],
      vorteile: [
        "Kräftigt die Schulter einseitig und gleicht Seitenunterschiede aus.",
        "Trainiert die seitliche Rumpfmuskulatur gegen seitliches Abknicken.",
        "Mit nur einer Hantel machbar.",
        "Gute Wahl für Sportler, die einseitig belastet werden."
      ],
      tipps: [
        "Mit der schwächeren Seite beginnen und die stärkere nicht mehr Wiederholungen machen lassen.",
        "Die Faust der freien Hand fest machen, das erhöht die Ganzkörperspannung.",
        "Mit Kettlebell liegt das Gewicht hinter dem Unterarm und fühlt sich anders an, beides ist möglich."
      ],
      varianten: "Leichter: sitzend oder im Halbkniestand an einer Wand. Schwerer: mit Kettlebell im Bottoms-up-Griff oder im Halbkniestand ohne Halt.",
      sicherheit: "Bei Schulterschmerzen über Kopf lieber Landmine-Drücken wählen."
    }
  },
  {
    id: "schulterdruecken_kh_halbkniend",
    name: "Schulterdrücken einarmig im Halbkniestand",
    auch: ["Half-Kneeling Single-Arm Dumbbell Press", "Half-Kneeling DB Overhead Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["bauch", "schraege_bauch", "gesaess", "rotatorenmanschette"],
    geraete: [["kurzhantel", "matte"], ["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 2, knie: 1 },
    stufe: 2,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Drücken über Kopf aus dem Halbkniestand. Die schmale Basis nimmt dir den Ausgleich über das Hohlkreuz weg und zwingt Rumpf und Gesäß, die Hüfte gerade und stabil zu halten.",
      ausfuehrung: [
        "Knie dich auf eine Matte, ein Knie unten, das andere Bein vorn im rechten Winkel aufgestellt.",
        "Die Hantel hältst du auf der Seite des unten liegenden Knies auf Schulterhöhe.",
        "Spann das Gesäß des unteren Beins an, sodass die Hüfte gestreckt ist und du eine leichte Dehnung vorn in der Hüfte spürst.",
        "Bauch fest, Rippen unten, der Oberkörper steht senkrecht über dem Knie.",
        "Drück die Hantel senkrecht nach oben, bis der Arm fast gestreckt ist, ohne nach hinten zu lehnen.",
        "Senk die Hantel langsam zur Schulter ab.",
        "Nach allen Wiederholungen Seite und Beinstellung wechseln."
      ],
      atmung: "Unten einatmen, beim Drücken ausatmen und den Bauch dabei fest lassen.",
      fehler: [
        "Hohlkreuz: Gesäß des unteren Beins fester anspannen und die Rippen unten halten.",
        "Wackeln zur Seite: Knie und Fuß minimal breiter setzen, Gewicht reduzieren.",
        "Oberkörper lehnt sich zurück: Senkrecht bleiben, eher etwas vorlehnen.",
        "Knie tut weh: dickere Matte oder Kissen unter das Knie legen."
      ],
      vorteile: [
        "Kräftigt die Schulter bei gleichzeitig guter Kontrolle von Becken und Rumpf.",
        "Verhindert Ausweichen ins Hohlkreuz, dadurch oft schulterfreundlicher.",
        "Verbindet Hüftstreckung, Rumpfstabilität und Überkopfkraft.",
        "Zeigt Seitenunterschiede deutlich."
      ],
      tipps: [
        "Nimm etwas weniger Gewicht als beim stehenden einarmigen Drücken.",
        "Denk an einen langen Körper vom Knie bis zur Hand.",
        "Sehr gut als Ergänzungsübung an Tagen mit Rumpftraining."
      ],
      varianten: "Leichter: im Kniestand mit beiden Knien unten oder Landmine-Drücken im Halbkniestand. Schwerer: Bottoms-up mit Kettlebell.",
      sicherheit: "Bei Kniebeschwerden gut polstern. Bei Schulterschmerzen über Kopf das Landmine-Drücken bevorzugen.",
      golf: "Der Halbkniestand verlangt dieselbe Hüft- und Beckenkontrolle, die du im Schwung brauchst. Du lernst, die Schulter zu belasten, ohne mit dem unteren Rücken auszuweichen, was die Haltung im Rückschwung stabilisiert."
    }
  },
  {
    id: "landmine",
    name: "Landmine-Drücken einarmig stehend",
    auch: ["Single-Arm Landmine Press", "Landmine Press", "Landmine Shoulder Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "brust", "trizeps"],
    sekundaer: ["schraege_bauch", "bauch", "schulter_seitlich"],
    geraete: [["landmine", "langhantel"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Stangenende in eine Ecke stellen. Schonender für die Schulter als Drücken über Kopf.",
    info: {
      kurz: "Einarmiges Drücken eines Langhantelendes schräg nach vorn oben. Die bogenförmige Bahn schont die Schulter und ist deshalb eine gute Alternative, wenn Drücken direkt über Kopf zwickt.",
      ausfuehrung: [
        "Steck ein Ende der Langhantel in eine Landmine-Halterung oder stell es in eine Ecke mit einem Handtuch darunter. Belade das andere Ende.",
        "Stell dich schräg vor die Stange, Füße schulterbreit oder leicht versetzt, und nimm das Stangenende in eine Hand vor die Schulter.",
        "Lehn dich minimal nach vorn, sodass Oberkörper und Stange ungefähr eine Linie bilden. Bauch und Gesäß anspannen.",
        "Drück die Stange nach vorn oben, bis der Arm gestreckt ist. Lass am Ende das Schulterblatt nach vorn um den Brustkorb gleiten.",
        "Senk die Stange kontrolliert zur Schulter zurück, Ellbogen zeigt dabei schräg nach unten.",
        "Halte die Hüfte die ganze Zeit ruhig, ohne mitzudrehen.",
        "Nach dem Satz Seite wechseln."
      ],
      atmung: "Unten einatmen, beim Drücken ausatmen.",
      fehler: [
        "Oberkörper dreht mit: Rumpf fest halten, die Kraft kommt aus Schulter und Arm.",
        "Hohlkreuz: leicht nach vorn lehnen und Rippen unten halten.",
        "Ellbogen zeigt seitlich weg: Ellbogen schräg nach unten vor den Körper bringen.",
        "Oben nicht ganz durchdrücken: Schulterblatt am Ende bewusst nach vorn schieben."
      ],
      vorteile: [
        "Schulterfreundliche Druckbahn zwischen Bankdrücken und Überkopfdrücken.",
        "Trainiert Schulter, obere Brust und Trizeps und zusätzlich den Rumpf gegen Rotation.",
        "Fördert die Arbeit des vorderen Sägemuskels durch das Nachvorneschieben am Ende.",
        "Leicht steigerbar und für Einsteiger gut erlernbar."
      ],
      tipps: [
        "Je aufrechter du stehst, desto mehr wird es ein Schulterdrücken, je weiter vorgelehnt, desto mehr Brust.",
        "Eine versetzte Fußstellung (gegenüberliegendes Bein vorn) gibt mehr Stabilität.",
        "Gut kombinierbar mit Ruderübungen im Wechsel."
      ],
      varianten: "Leichter: im Halbkniestand oder Kniestand. Schwerer: mit beiden Händen und mehr Gewicht oder mit Schwung aus den Beinen.",
      sicherheit: "Für viele Menschen mit Schulterbeschwerden besser verträglich als Überkopfdrücken. Bei Schmerz trotzdem Bewegungsweg verkleinern und abklären lassen.",
      golf: "Das Landmine-Drücken trainiert, wie Kraft aus einer stabilen Rumpfposition schräg nach vorn übertragen wird. Der Rumpf muss gegen Rotation stabil bleiben, das hilft bei der Kontrolle im Durchschwung und schont gleichzeitig die Schulter."
    }
  },
  {
    id: "landmine_halbkniend",
    name: "Landmine-Drücken im Halbkniestand",
    auch: ["Half-Kneeling Landmine Press", "Half Kneeling Landmine Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "brust", "trizeps"],
    sekundaer: ["schraege_bauch", "bauch", "gesaess", "rotatorenmanschette"],
    geraete: [["landmine", "langhantel"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, knie: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Landmine-Drücken aus dem Halbkniestand. Die schmale Basis zwingt dich, das Becken stabil zu halten, und macht die Übung zu einer der schulterfreundlichsten Druckübungen überhaupt.",
      ausfuehrung: [
        "Richte die Landmine ein und knie dich seitlich versetzt davor: das Knie auf der Seite des Druckarms unten, das andere Bein vorn im rechten Winkel aufgestellt.",
        "Nimm das Stangenende in die Hand vor der Schulter, der Ellbogen zeigt schräg nach unten.",
        "Spann das Gesäß des unteren Beins an, Bauch fest, Oberkörper leicht nach vorn geneigt, sodass er mit der Stange eine Linie bildet.",
        "Drück die Stange nach vorn oben, bis der Arm gestreckt ist, und lass das Schulterblatt am Ende nach vorn gleiten.",
        "Senk die Stange langsam zurück zur Schulter, ohne dass sich Hüfte oder Oberkörper drehen.",
        "Mach alle Wiederholungen und wechsle dann Seite und Beinstellung.",
        "Steh nach dem Satz kontrolliert auf, indem du die Stange vorher sicher absetzt."
      ],
      atmung: "Vor dem Drücken einatmen, während des Drückens ausatmen.",
      fehler: [
        "Hüfte knickt ein oder schiebt nach hinten: Gesäß des hinteren Beins aktiv anspannen.",
        "Rumpf dreht sich zur Druckseite: Weniger Gewicht, Rippen und Becken nach vorn ausrichten.",
        "Schulter zieht zum Ohr: Schulter lang lassen, Bewegung kommt aus dem Arm.",
        "Druck zu steil nach oben: der Stangenbahn folgen, leicht nach vorn drücken."
      ],
      vorteile: [
        "Sehr schulterfreundliche Druckbahn bei guter Kraftentwicklung.",
        "Trainiert Becken- und Rumpfstabilität aus einer sportnahen Position.",
        "Fördert den vorderen Sägemuskel und eine gute Schulterblattbewegung.",
        "Gut geeignet für Einsteiger und für die Rückkehr nach Schulterbeschwerden."
      ],
      tipps: [
        "Wer im Stehen ins Hohlkreuz ausweicht, sollte diese Variante wählen.",
        "Mittlere Wiederholungen (8 bis 12) und ruhiges Tempo passen gut.",
        "Wer keine Landmine hat, legt das Stangenende in eine Zimmerecke auf ein Handtuch."
      ],
      varianten: "Leichter: mit leerer Stange oder im Kniestand mit beiden Knien. Schwerer: stehend oder mit kurzer Pause oben.",
      sicherheit: "Knie gut polstern. Bei Schulterbeschwerden Bewegungsweg schmerzfrei halten und Beschwerden ärztlich oder physiotherapeutisch abklären lassen.",
      golf: "Die Position ähnelt der Stabilitätsanforderung im Schwung: Becken stabil, Rumpf kontrolliert, Kraft über die Schulter nach vorn. Die Übung stärkt die Schulter in einer schonenden Bahn und fördert die Kontrolle des Schulterblatts, die für einen sauberen Schwung wichtig ist."
    }
  },
  {
    id: "z_press",
    name: "Z-Press",
    auch: ["Z Press", "Z-Press mit Langhantel", "Z-Press mit Kurzhanteln", "Seated Floor Press Overhead"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["bauch", "ruecken_unten", "trapez", "oberer_ruecken"],
    geraete: [["langhantel"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 180,
    gelenke: { schulter: 2, ruecken: 1, huefte: 1 },
    stufe: 3,
    info: {
      kurz: "Schulterdrücken im Sitzen auf dem Boden mit gestreckten Beinen und ohne Rückenlehne. Weil du dich nicht abstützen kannst, deckt die Übung schonungslos auf, ob Rumpf, Hüfte und Brustwirbelsäule das Drücken über Kopf wirklich tragen.",
      ausfuehrung: [
        "Setz dich auf den Boden, Beine gestreckt und etwas breiter als hüftbreit. Die Stange liegt in einem tief eingestellten Rack oder du nimmst zwei Kurzhanteln auf die Schultern.",
        "Richte dich auf, sodass du auf den Sitzbeinhöckern sitzt und der Oberkörper senkrecht ist.",
        "Spann die Oberschenkel an und drück die Fersen in den Boden, der Bauch ist fest.",
        "Drück die Last senkrecht nach oben, ohne dich nach hinten zu lehnen. Kopf kurz zurück bei der Stange, oben wieder durch die Arme.",
        "Streck die Arme oben fast ganz, die Last steht über der Hüfte.",
        "Senk die Last langsam zu den Schultern ab und bleib dabei aufrecht.",
        "Leg die Last nach dem Satz kontrolliert im Rack ab oder stell die Kurzhanteln neben dir ab."
      ],
      atmung: "Unten einatmen und Bauchspannung aufbauen, beim Drücken ausatmen.",
      fehler: [
        "Rundrücken oder Zurückfallen: Erst Hüftbeweglichkeit verbessern oder die Beine leicht beugen.",
        "Lehnen nach hinten: Gewicht reduzieren, die Übung ist bewusst streng.",
        "Last wandert vor den Körper: die Last über der Hüfte stapeln.",
        "Beine sind locker: Oberschenkel anspannen, das gibt Halt."
      ],
      vorteile: [
        "Sehr strenges Schulterdrücken ohne Ausweichmöglichkeit über Beine oder Hohlkreuz.",
        "Stärkt die Rumpf- und Rückenstrecker im aufrechten Sitz.",
        "Zeigt Defizite in Hüft- und Brustwirbelsäulenbeweglichkeit auf.",
        "Verbessert die Überkopfposition für andere Druckübungen."
      ],
      tipps: [
        "Rechne mit deutlich weniger Gewicht als beim normalen Schulterdrücken.",
        "Mit Kurzhanteln ist der Einstieg leichter, weil kein Rack nötig ist.",
        "Wenn du nicht aufrecht sitzen kannst, ein flaches Kissen unter das Gesäß legen."
      ],
      varianten: "Leichter: im Schneidersitz oder mit leicht gebeugten Knien. Schwerer: einarmig mit Kurzhantel oder Kettlebell.",
      sicherheit: "Bei Rücken- oder Hüftbeschwerden und stark eingeschränkter Beweglichkeit der hinteren Oberschenkel nicht geeignet. Bei Schulterschmerzen über Kopf vermeiden."
    }
  },
  {
    id: "schulterpresse",
    name: "Schulterpresse an der Maschine",
    auch: ["Machine Shoulder Press", "Shoulder Press Machine"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["trapez"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Drücken über Kopf an einer geführten Maschine. Die feste Bahn macht die Übung einfach und sicher, sodass du die Schulter gezielt bis nahe ans Muskelversagen trainieren kannst.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe in der Startposition etwa auf Schulterhöhe oder knapp darüber liegen.",
        "Setz dich mit dem Rücken an die Lehne, Füße fest am Boden.",
        "Greif die Griffe etwas weiter als schulterbreit, je nach Maschine mit neutralem oder Obergriff.",
        "Drück die Griffe nach oben, bis die Arme fast gestreckt sind, ohne die Ellbogen hart zu blockieren.",
        "Senk die Griffe kontrolliert ab, bis du eine leichte Dehnung in der Schulter spürst und die Hände etwa auf Kinnhöhe sind.",
        "Drück ohne Pause und ohne das Gewicht abzulegen in die nächste Wiederholung.",
        "Nach der letzten Wiederholung die Gewichte langsam und leise ablegen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Sitz zu niedrig: dann startest du zu tief und belastest die Schulter unnötig, Sitz anpassen.",
        "Rücken löst sich von der Lehne: Gesäß nach hinten, Bauch anspannen.",
        "Gewichte schlagen auf: kontrolliert absenken und kurz vor dem Stapel umkehren.",
        "Zu kurze Wiederholungen: ganzen schmerzfreien Bewegungsweg nutzen."
      ],
      vorteile: [
        "Sicheres Training bis nahe ans Muskelversagen, ohne Stabilisierungsprobleme.",
        "Leicht zu erlernen und fein steigerbar.",
        "Gut für Einsteiger und für Volumen im Muskelaufbau.",
        "Weniger Rumpfbelastung als freie Varianten."
      ],
      tipps: [
        "Für Muskelaufbau 8 bis 15 Wiederholungen und kontrolliertes Absenken über zwei bis drei Sekunden.",
        "Viele Maschinen erlauben einarmiges Arbeiten, gut bei Seitenunterschieden.",
        "Am Ende einer Schultereinheit mit einem Drop-Satz besonders effektiv."
      ],
      varianten: "Leichter: weniger Gewicht oder kürzerer Bewegungsweg. Schwerer: einarmig oder mit langsamer Absenkphase.",
      sicherheit: "Bei Schulterschmerzen den unteren Umkehrpunkt höher wählen. Bei anhaltenden Beschwerden abklären lassen."
    }
  },
  {
    id: "schulterdruecken_multipresse",
    name: "Schulterdrücken an der Multipresse sitzend",
    auch: ["Smith Machine Shoulder Press", "Smith Machine Overhead Press", "Seated Smith Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["trapez"],
    geraete: [["multipresse", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterdrücken mit der geführten Stange der Multipresse auf einer Bank mit Lehne. Die feste Bahn und die Sicherungshaken erlauben schwere Sätze nahe ans Muskelversagen, auch ohne Trainingspartner.",
      ausfuehrung: [
        "Stell eine Bank mit fast senkrechter Lehne so in die Multipresse, dass die Stange beim Absenken knapp vor deinem Gesicht auf Kinnhöhe ankommt.",
        "Stell die Sicherungsanschläge knapp unter den tiefsten Punkt deiner Bewegung.",
        "Setz dich, Rücken an der Lehne, Füße fest auf dem Boden, und greif die Stange etwas weiter als schulterbreit.",
        "Dreh die Stange aus den Haken und halte sie mit gestreckten Armen über dir.",
        "Senk die Stange kontrolliert bis etwa Kinnhöhe ab, die Unterarme bleiben ungefähr senkrecht.",
        "Drück die Stange gleichmäßig wieder nach oben, bis die Arme fast gestreckt sind.",
        "Häng die Stange nach dem Satz mit einer Drehung der Handgelenke wieder ein."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Bank falsch positioniert: Wenn die Stange gegen die Nase oder weit vor dem Körper läuft, die Bank verschieben.",
        "Hohlkreuz: Gesäß nach hinten und Rücken an die Lehne.",
        "Zu tief absenken bei Beschwerden: auf Kinnhöhe umkehren reicht.",
        "Sicherungen nicht eingestellt: Vor dem ersten Satz immer die Anschläge setzen."
      ],
      vorteile: [
        "Sichere Variante für schwere Sätze ohne Spotter.",
        "Geringer Stabilisierungsbedarf, dadurch volle Konzentration auf Schulter und Trizeps.",
        "Fein dosierbar und gut für Muskelaufbau geeignet."
      ],
      tipps: [
        "Je nach Bankposition liegt der Schwerpunkt mehr vorn oder mehr hinten, probier aus, was sich schulterfreundlich anfühlt.",
        "Gut für die letzten harten Sätze einer Einheit, wenn die freien Übungen schon gemacht sind.",
        "Kontrolliertes Absenken über zwei bis drei Sekunden steigert den Reiz ohne mehr Gewicht."
      ],
      varianten: "Leichter: Schulterpresse an der Maschine. Schwerer: langsames Absenken oder Pausen auf halber Höhe.",
      sicherheit: "Die feste Bahn passt nicht zu jeder Schulter. Wenn es zwickt, lieber Kurzhanteln mit freier Bahn verwenden."
    }
  },
  {
    id: "schulterdruecken_kh_neutral",
    name: "Schulterdrücken mit Kurzhanteln im neutralen Griff",
    auch: ["Neutral-Grip Dumbbell Shoulder Press", "Hammer Grip Shoulder Press", "Neutral Grip DB Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps"],
    sekundaer: ["schulter_seitlich", "trapez"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterdrücken mit Kurzhanteln, bei dem die Handflächen zueinander zeigen und die Ellbogen vor dem Körper bleiben. Die Variante ist für viele Schultern angenehmer und betont die vordere Schulter und den Trizeps.",
      ausfuehrung: [
        "Setz dich auf eine Bank mit fast senkrechter Lehne oder stell dich hüftbreit hin.",
        "Bring die Hanteln auf Schulterhöhe, die Handflächen zeigen zueinander, die Ellbogen zeigen nach vorn und leicht nach außen.",
        "Spann den Bauch an, die Schulterblätter liegen ruhig am Brustkorb.",
        "Drück die Hanteln senkrecht nach oben, bis die Arme fast gestreckt sind. Die Hanteln bleiben parallel.",
        "Senk sie langsam wieder vor die Schultern ab, bis die Oberarme etwa waagerecht oder etwas darunter sind.",
        "Halte die Ellbogen die ganze Zeit vor dem Körper, nicht seitlich.",
        "Am Ende die Hanteln kontrolliert auf die Oberschenkel führen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Ellbogen fallen zur Seite: Ellbogen bewusst nach vorn zeigen lassen.",
        "Hohlkreuz: Rücken an die Lehne oder Gesäß anspannen.",
        "Hanteln schlagen oben zusammen: parallel und kontrolliert führen.",
        "Zu kurzer Weg: unten bis mindestens Kinnhöhe absenken."
      ],
      vorteile: [
        "Weniger Belastung für die Schulter, weil der Oberarm nicht weit nach außen gedreht wird.",
        "Gute Wahl bei Beschwerden im klassischen Schulterdrücken.",
        "Starke Beteiligung von vorderer Schulter und Trizeps.",
        "Leicht erlernbar."
      ],
      tipps: [
        "Für Menschen mit empfindlicher Schulter oft die beste Kurzhantel-Variante zum Drücken.",
        "8 bis 15 Wiederholungen mit sauberer Kontrolle passen gut.",
        "Im Stehen ausgeführt kommt mehr Rumpfarbeit dazu."
      ],
      varianten: "Leichter: sitzend mit Lehne. Schwerer: stehend, einarmig oder mit Pause unten.",
      sicherheit: "Auch bei dieser Variante gilt: Schmerz ist ein Stoppsignal. Bei anhaltenden Beschwerden abklären lassen."
    }
  },
  {
    id: "schulterdruecken_kabel",
    name: "Schulterdrücken am Kabelzug",
    auch: ["Cable Shoulder Press", "Cable Overhead Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["bauch", "trapez"],
    geraete: [["kabelzug", "bank"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Drücken über Kopf mit zwei Kabelgriffen von unten. Der Kabelzug hält die Spannung auch unten in der gedehnten Position, wo Kurzhanteln eher leicht wirken.",
      ausfuehrung: [
        "Stell die Rollen auf beiden Seiten ganz nach unten und stell eine Bank mit steiler Lehne mittig zwischen die Seilzüge.",
        "Nimm die Griffe und setz dich mit dem Rücken an die Lehne, die Griffe sind neben den Schultern.",
        "Die Handflächen zeigen nach vorn oder leicht nach innen, die Ellbogen sind etwas vor dem Körper.",
        "Drück die Griffe nach oben und leicht zusammen, bis die Arme fast gestreckt sind.",
        "Senk die Griffe langsam wieder bis auf Schulterhöhe ab und spür die Spannung in der unteren Position.",
        "Halte den Rücken an der Lehne und den Bauch fest.",
        "Nach dem Satz die Griffe kontrolliert zurückführen und einzeln ablegen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Bank steht zu weit vorn oder hinten: Die Kabel sollten ungefähr senkrecht von unten kommen.",
        "Arme werden seitlich auseinandergezogen: Ellbogen aktiv unter den Händen halten.",
        "Gewichte schlagen an: Kontrolliert bis zur Schulter senken und umkehren.",
        "Hohlkreuz: Gesäß hinten lassen und Bauch fest."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Bewegungsweg.",
        "Fein steigerbar über die Steckgewichte.",
        "Gute Abwechslung zu Kurzhanteln für den Muskelaufbau.",
        "Auch im Stand oder einarmig möglich."
      ],
      tipps: [
        "Einarmig im Stand mit einem Kabel ist eine gute Variante, wenn kein Doppelkabel frei ist.",
        "Eher mittlere bis höhere Wiederholungen (10 bis 15) wählen.",
        "Mit Manschetten statt Griffen kannst du den Unterarm entlasten."
      ],
      varianten: "Leichter: einarmig sitzend. Schwerer: stehend oder mit langsamer Absenkphase.",
      sicherheit: "Bei Schulterschmerzen über Kopf den Bewegungsweg kürzen oder auf Landmine-Drücken ausweichen."
    }
  },
  {
    id: "schulterdruecken_band",
    name: "Schulterdrücken mit Widerstandsband",
    auch: ["Band Overhead Press", "Resistance Band Shoulder Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["bauch", "trapez"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Drücken über Kopf gegen ein Widerstandsband, das unter den Füßen fixiert ist. Der Widerstand steigt nach oben hin an, deshalb ist die Übung im unteren Bereich leicht und gelenkschonend und eignet sich gut für zu Hause und unterwegs.",
      ausfuehrung: [
        "Stell dich mit beiden Füßen hüftbreit auf die Mitte des Bandes.",
        "Nimm die Bandenden oder Griffe in die Hände und führe sie neben die Schultern, Handflächen nach vorn oder zueinander.",
        "Spann Bauch und Gesäß an und richte dich lang auf.",
        "Drück die Hände senkrecht nach oben, bis die Arme fast gestreckt sind.",
        "Halte oben kurz die Spannung und senk die Hände dann langsam wieder zu den Schultern.",
        "Lass das Band unten nicht ganz locker werden, damit die Spannung bleibt.",
        "Steig nach dem Satz vorsichtig vom Band, damit es nicht zurückschnellt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hohlkreuz oben, weil das Band dort am stärksten zieht: Bauch fest, eventuell ein leichteres Band.",
        "Band rutscht unter dem Fuß: breiter stehen oder das Band um den Fuß wickeln.",
        "Handgelenke knicken ab: Fäuste gerade halten.",
        "Zu schnell nach unten: das Band zieht dich, also bewusst bremsen."
      ],
      vorteile: [
        "Gelenkschonend, weil der Widerstand unten gering ist.",
        "Überall einsetzbar, ideal für das Training zu Hause und auf Reisen.",
        "Gut als Aufwärmübung vor schwerem Drücken.",
        "Trainiert die Schulter in der oberen Position, wo sie am stärksten ist."
      ],
      tipps: [
        "Für mehr Widerstand kürzer greifen oder ein dickeres Band nehmen.",
        "Mit 12 bis 20 Wiederholungen arbeiten.",
        "Gut kombinierbar mit Seitheben mit Band als schneller Schulterblock zu Hause."
      ],
      varianten: "Leichter: im Sitzen auf dem Band oder einarmig mit leichtem Band. Schwerer: doppelt gelegtes Band oder Pause oben.",
      sicherheit: "Band vor jeder Nutzung auf Risse prüfen. Bei Schulterschmerzen über Kopf nur bis Stirnhöhe drücken."
    }
  },
  {
    id: "hinter_nacken_druecken",
    name: "Nackendrücken mit Langhantel sitzend",
    auch: ["Behind-the-Neck Press", "BTN Press", "Behind the Neck Shoulder Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_seitlich", "schulter_vorn", "trizeps"],
    sekundaer: ["trapez", "oberer_ruecken", "rotatorenmanschette"],
    geraete: [["langhantel", "bank"], ["multipresse", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { schulter: 2, nacken: 1 },
    stufe: 3,
    info: {
      kurz: "Schulterdrücken, bei dem die Stange hinter dem Kopf auf Höhe der Ohren abgesenkt wird. Betont die seitliche Schulter stärker als das Drücken vor dem Kopf, setzt aber gute Schulterbeweglichkeit voraus.",
      ausfuehrung: [
        "Setz dich auf eine Bank mit senkrechter Lehne oder ohne Lehne, die Stange liegt im Rack knapp über Kopfhöhe.",
        "Greif die Stange deutlich breiter als schulterbreit, sodass die Unterarme in der unteren Position senkrecht stehen.",
        "Heb die Stange aus und halte sie mit gestreckten Armen über dem Kopf.",
        "Senk die Stange langsam hinter den Kopf ab, nur bis etwa Ohrhöhe oder so weit, wie es schmerzfrei geht. Der Kopf bleibt aufrecht und leicht nach vorn.",
        "Drück die Stange von dort senkrecht wieder nach oben, bis die Arme fast gestreckt sind.",
        "Halte den Oberkörper aufrecht, ohne den Kopf nach vorn zu schieben, um Platz zu schaffen.",
        "Lege die Stange nach dem Satz im Rack ab."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu tief absenken: Ohrhöhe reicht völlig, nicht bis zum Nacken.",
        "Kopf wird nach vorn geschoben: aufrecht sitzen, Blick geradeaus.",
        "Zu schweres Gewicht: Die Übung braucht leichte Lasten und sauberes Tempo.",
        "Zu enger Griff: Unterarme sollen unten senkrecht stehen."
      ],
      vorteile: [
        "Starke Betonung der seitlichen Schulter durch die Armstellung in der Ebene des Körpers.",
        "Fordert Beweglichkeit und Stabilität der Schulter in Außenrotation.",
        "Gute Variante für fortgeschrittene Trainierende mit freier Schulterbeweglichkeit."
      ],
      tipps: [
        "Teste vorher, ob du mit dem leeren Stab die Position schmerzfrei erreichst.",
        "Mit deutlich weniger Gewicht als beim normalen Schulterdrücken arbeiten.",
        "In der Multipresse ist die Bahn kontrollierter, das erleichtert den Einstieg."
      ],
      varianten: "Leichter: mit Stab oder leerer Stange und kürzerem Bewegungsweg. Schwerer: mehr Gewicht nur bei absolut beschwerdefreier Schulter.",
      sicherheit: "Nicht geeignet bei Schulterschmerzen, Instabilität, früheren Luxationen oder eingeschränkter Außenrotation. Im Zweifel das Drücken vor dem Kopf wählen."
    }
  },
  {
    id: "kb_druecken",
    name: "Kettlebell-Schulterdrücken einarmig",
    auch: ["Kettlebell Press", "Single-Arm Kettlebell Press", "KB Military Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "schulter_seitlich", "trizeps"],
    sekundaer: ["schraege_bauch", "rotatorenmanschette", "unterarm"],
    geraete: [["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 2, handgelenk: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Drücken einer Kettlebell aus der Rack-Position über Kopf. Weil das Gewicht hinter dem Unterarm hängt, verläuft die Bahn etwas anders als mit der Kurzhantel und fordert Schulterblatt und Rumpf besonders.",
      ausfuehrung: [
        "Bring die Kettlebell mit einem sauberen Clean in die Rack-Position: Griff diagonal in der Hand, Kugel liegt auf dem Unterarm, Ellbogen nah am Körper.",
        "Stell dich hüftbreit hin, Gesäß und Bauch fest, die freie Hand zur Faust geballt.",
        "Drück die Kettlebell nach oben und dreh den Unterarm dabei leicht nach innen, sodass die Handfläche oben nach vorn zeigt.",
        "Oben steht der Arm senkrecht neben dem Ohr, das Handgelenk ist gerade, die Kugel liegt hinter dem Unterarm.",
        "Zieh die Kettlebell kontrolliert wieder in die Rack-Position zurück, als würdest du sie aktiv herunterziehen.",
        "Halte den Oberkörper ruhig, ohne zur Seite auszuweichen.",
        "Nach dem Satz die Seite wechseln."
      ],
      atmung: "In der Rack-Position einatmen, beim Drücken kurz und kräftig ausatmen.",
      fehler: [
        "Abgeknicktes Handgelenk: Griff diagonal setzen und Handgelenk gerade halten.",
        "Kugel schlägt auf den Unterarm: beim Clean die Hand um den Griff führen statt die Kugel zu werfen.",
        "Oberkörper weicht zur Seite: freie Faust ballen und Gesäß anspannen.",
        "Ellbogen weit vom Körper zu Beginn: Ellbogen startet nah an den Rippen."
      ],
      vorteile: [
        "Trainiert die Schulter mit natürlicher, leicht rotierender Bahn.",
        "Stärkt Griff und Unterarm durch die Haltearbeit.",
        "Fordert die seitliche Rumpfstabilität.",
        "Mit wenig Ausrüstung zu Hause gut umsetzbar."
      ],
      tipps: [
        "Ganzkörperspannung (Faust, Gesäß, Bauch) macht dich spürbar stärker.",
        "Kettlebells haben große Gewichtssprünge, nutze mehr Wiederholungen oder Sätze zur Steigerung.",
        "Den Clean vorher separat üben, damit der Start sauber gelingt."
      ],
      varianten: "Leichter: im Halbkniestand oder mit Kurzhantel. Schwerer: Bottoms-up-Variante oder zwei Kettlebells gleichzeitig.",
      sicherheit: "Bei Handgelenksbeschwerden lieber Kurzhanteln nehmen. Bei Schulterschmerzen über Kopf Landmine-Drücken wählen."
    }
  },
  {
    id: "kb_bottoms_up_druecken",
    name: "Bottoms-up-Kettlebell-Drücken",
    auch: ["Bottoms-Up Kettlebell Press", "Bottoms Up KB Press", "BU Press"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "rotatorenmanschette", "unterarm"],
    sekundaer: ["schulter_seitlich", "trizeps", "schraege_bauch"],
    geraete: [["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Drücken einer Kettlebell, die mit der Kugel nach oben gehalten wird. Die wackelige Last zwingt Rotatorenmanschette, Griff und Rumpf zu feiner Stabilisierung und lehrt eine saubere Drückbahn.",
      ausfuehrung: [
        "Wähle eine leichte Kettlebell, deutlich leichter als beim normalen Drücken.",
        "Greif den Griff fest, dreh die Kettlebell so, dass die Kugel nach oben zeigt, und halte sie vor der Schulter. Der Unterarm steht senkrecht, der Ellbogen ist unter der Hand.",
        "Spann den ganzen Körper an: Faust fest, Bauch fest, Gesäß fest.",
        "Drück die Kettlebell langsam senkrecht nach oben, ohne dass sie kippt.",
        "Oben steht der Arm gestreckt neben dem Ohr, die Kugel zeigt weiterhin nach oben.",
        "Senk die Kettlebell genauso langsam wieder vor die Schulter ab.",
        "Kippt sie, stell sie ab und beginne neu, statt sie mit Schwung zu retten."
      ],
      atmung: "Ruhig weiteratmen, vor jeder Wiederholung einatmen und beim Drücken ausatmen.",
      fehler: [
        "Zu schwere Kettlebell: Die Übung lebt von Kontrolle, nicht von Gewicht.",
        "Unterarm nicht senkrecht: Sobald der Ellbogen seitlich abweicht, kippt die Kettlebell.",
        "Locker gegriffen: Griff fest zudrücken, das aktiviert die Schulterstabilisatoren.",
        "Zu schnell: langsam drücken und senken."
      ],
      vorteile: [
        "Stärkt Rotatorenmanschette und Griff gleichzeitig.",
        "Erzieht zu einer sauberen, zentrierten Drückbahn.",
        "Verbessert die Schulterstabilität, geeignet als Ergänzung zum schweren Drücken.",
        "Gute Übung für Sportarten mit Schlag- und Wurfbewegungen."
      ],
      tipps: [
        "Als Aufwärmübung vor schwerem Überkopfdrücken mit 3 bis 5 Wiederholungen ideal.",
        "Lass den Blick auf der Kettlebell, das hilft beim Ausbalancieren.",
        "Kombiniere mit Bottoms-up-Halten auf Schulterhöhe für mehr Haltezeit."
      ],
      varianten: "Leichter: nur Halten vor der Schulter oder im Halbkniestand. Schwerer: im Stand mit schwererer Kettlebell oder langsames Absenken über fünf Sekunden.",
      sicherheit: "Bei Ellbogen- oder Handgelenksbeschwerden vorsichtig dosieren. Nicht über dem Kopf weiterdrücken, wenn die Kettlebell kippt.",
      golf: "Die Übung schult eine stabile, zentrierte Schulter und einen festen Griff. Beides hilft, den Schläger im Treffmoment kontrolliert zu halten, und kann Überlastungen an Schulter, Ellbogen und Handgelenk vorbeugen."
    }
  },
  {
    id: "pike_liegestuetz",
    name: "Pike-Liegestütz",
    auch: ["Pike Push-Up", "Pike Pushup"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps"],
    sekundaer: ["schulter_seitlich", "brust", "bauch"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 2, handgelenk: 1 },
    stufe: 2,
    schwerer: "pike_liegestuetz_erhoeht",
    info: {
      kurz: "Liegestütz in der umgekehrten V-Position, bei dem der Kopf Richtung Boden sinkt. Die Körperhaltung verlagert die Arbeit von der Brust auf die Schultern und macht die Übung zum Drücken über Kopf ohne Gewichte.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, Hände etwas breiter als schulterbreit, Finger gespreizt.",
        "Streck die Beine und schieb das Gesäß nach oben, bis dein Körper ein umgekehrtes V bildet. Geh mit den Füßen so nah an die Hände, wie es mit fast gestreckten Beinen geht.",
        "Der Kopf hängt zwischen den Armen, der Blick geht zu den Füßen.",
        "Beuge die Ellbogen und senk den Kopf vor den Händen Richtung Boden, sodass Kopf und Hände ein Dreieck bilden.",
        "Die Ellbogen zeigen schräg nach hinten, nicht direkt zur Seite.",
        "Drück dich kraftvoll zurück in die Ausgangsposition, bis die Arme gestreckt sind.",
        "Halte das Gesäß während des ganzen Satzes hoch."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte sinkt ab und es wird ein normaler Liegestütz: Gesäß aktiv nach oben schieben.",
        "Kopf geht senkrecht zwischen die Hände: Kopf vor die Hände führen, das ergibt ein Dreieck.",
        "Ellbogen weit zur Seite: Ellbogen etwa 45 Grad nach hinten führen.",
        "Zu kurzer Weg: so tief, bis der Kopf fast den Boden berührt."
      ],
      vorteile: [
        "Stärkt die Schulter im Drücken über Kopf ganz ohne Geräte.",
        "Vorstufe für Handstand-Liegestütz.",
        "Fördert auch die Rumpfstabilität und die Beweglichkeit der hinteren Beinmuskulatur.",
        "Gut für das Training zu Hause."
      ],
      tipps: [
        "Je näher die Füße an den Händen sind, desto mehr Schulterarbeit.",
        "Leg ein Kissen unter den Kopf, um die Tiefe zu kontrollieren.",
        "Mit 6 bis 15 Wiederholungen arbeiten, danach die erhöhte Variante wählen."
      ],
      varianten: "Leichter: mit gebeugten Knien oder kürzerem Bewegungsweg. Schwerer: Füße erhöht auf Bank oder Box.",
      sicherheit: "Bei Handgelenksbeschwerden Liegestützgriffe oder Fäuste nutzen. Bei Bluthochdruck vorsichtig sein, weil der Kopf tief ist."
    }
  },
  {
    id: "pike_liegestuetz_erhoeht",
    name: "Pike-Liegestütz mit erhöhten Füßen",
    auch: ["Elevated Pike Push-Up", "Feet-Elevated Pike Push-Up", "Box Pike Push-Up"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps"],
    sekundaer: ["schulter_seitlich", "trapez", "bauch"],
    geraete: [["box"], ["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: { schulter: 2, handgelenk: 1 },
    stufe: 2,
    schwerer: "handstand_liegestuetz_negativ",
    info: {
      kurz: "Pike-Liegestütz mit den Füßen auf einer Box oder Bank. Der Oberkörper steht steiler, dadurch tragen die Arme mehr Körpergewicht und die Übung kommt dem Handstand-Liegestütz deutlich näher.",
      ausfuehrung: [
        "Stell eine stabile Box oder Bank hinter dich und setz die Hände etwa schulterbreit vor ihr auf.",
        "Leg die Füße oder Knie auf die Box und lauf mit den Händen nach hinten, bis die Hüfte fast über den Schultern steht.",
        "Der Oberkörper ist möglichst senkrecht, die Beine sind gestreckt oder im rechten Winkel gebeugt mit den Knien auf der Box.",
        "Senk den Kopf kontrolliert vor die Hände Richtung Boden, sodass Kopf und Hände ein Dreieck bilden.",
        "Drück dich wieder nach oben, bis die Arme gestreckt sind und die Schultern zu den Ohren schieben.",
        "Halte die Hüfte hoch und den Bauch fest, damit kein Hohlkreuz entsteht.",
        "Steig nach dem Satz kontrolliert mit den Füßen von der Box ab."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Box rutscht weg: nur stabile, rutschfeste Unterlage verwenden.",
        "Hüfte zu weit hinten: Hände näher an die Box setzen, damit der Oberkörper senkrecht steht.",
        "Ellbogen klappen nach außen: nach schräg hinten führen.",
        "Kopf schlägt auf: ein Kissen hinlegen und kontrolliert absenken."
      ],
      vorteile: [
        "Deutlich mehr Last für die Schultern als der normale Pike-Liegestütz.",
        "Direkte Vorbereitung auf den Handstand-Liegestütz.",
        "Trainiert Schulter und Trizeps ohne Gewichte.",
        "Verbessert das Körpergefühl in umgekehrter Position."
      ],
      tipps: [
        "Je höher die Box, desto schwerer: mit einer niedrigen Bank anfangen.",
        "Wenn 10 saubere Wiederholungen gelingen, mit Handstand-Negativen an der Wand weitermachen.",
        "Mit Liegestützgriffen kannst du tiefer gehen und schonst die Handgelenke."
      ],
      varianten: "Leichter: niedrigere Erhöhung oder normaler Pike-Liegestütz. Schwerer: höhere Box oder langsames Absenken über drei bis fünf Sekunden.",
      sicherheit: "Nicht bei Bluthochdruck, Augenerkrankungen mit erhöhtem Augeninnendruck oder Schwindel. Bei Handgelenksbeschwerden Griffe verwenden."
    }
  },
  {
    id: "handstand_halten_wand",
    name: "Handstand an der Wand halten",
    auch: ["Wall Handstand Hold", "Chest-to-Wall Handstand", "Wall Walk Hold"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps", "trapez"],
    sekundaer: ["schulter_seitlich", "bauch", "unterarm"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { schulter: 2, handgelenk: 2 },
    stufe: 2,
    schwerer: "handstand_liegestuetz_negativ",
    info: {
      kurz: "Halten des Handstands mit Bauch oder Rücken zur Wand. Stärkt Schultern und Trizeps in der vollen Überkopfposition und gewöhnt dich an das Tragen des Körpergewichts auf den Händen.",
      ausfuehrung: [
        "Stell dich mit dem Rücken zur Wand und geh in den Liegestütz, die Füße an der Wand.",
        "Lauf mit den Füßen die Wand hoch und gleichzeitig mit den Händen Richtung Wand, bis der Bauch fast die Wand berührt (Bauch-zur-Wand-Variante).",
        "Die Hände stehen etwa eine Handbreit von der Wand entfernt, schulterbreit, Finger gespreizt.",
        "Drück den Boden aktiv weg, die Schultern sind bis zu den Ohren geschoben, die Arme gestreckt.",
        "Spann Bauch und Gesäß an und zieh die Rippen ein, damit der Körper eine gerade Linie bildet.",
        "Halte die Position ruhig für die vorgegebene Zeit.",
        "Lauf am Ende mit den Händen langsam von der Wand weg und mit den Füßen herunter."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Hohlkreuz: Rippen einziehen, Gesäß anspannen, Blick zwischen die Hände.",
        "Schultern sinken ein: Boden aktiv wegdrücken, als wolltest du größer werden.",
        "Hände zu weit von der Wand: näher heranlaufen, dann wird die Linie gerader.",
        "Panisch herunterfallen: Abgang vorher üben, mit den Händen von der Wand weglaufen."
      ],
      vorteile: [
        "Kräftigt Schultern, Trizeps und den oberen Trapez in voller Überkopfposition.",
        "Verbessert Körperspannung und Gleichgewicht.",
        "Wichtige Vorstufe für Handstand-Liegestütz und freien Handstand.",
        "Ohne Geräte machbar."
      ],
      tipps: [
        "Bauch zur Wand ist für die Körperlinie besser als Rücken zur Wand.",
        "Beginne mit 15 bis 20 Sekunden und steigere bis auf 45 bis 60 Sekunden.",
        "Handgelenke vorher gut aufwärmen."
      ],
      varianten: "Leichter: Füße auf einer Box im Pike-Halten. Schwerer: längere Zeit, Schulter-Taps oder Gewichtsverlagerung von Hand zu Hand.",
      sicherheit: "Nicht bei Bluthochdruck, Glaukom, Schwindel oder akuten Nacken-, Schulter- und Handgelenksbeschwerden. Weichen Untergrund und freien Platz rund um dich sicherstellen."
    }
  },
  {
    id: "handstand_liegestuetz_negativ",
    name: "Handstand-Liegestütz negativ an der Wand",
    auch: ["Wall Handstand Push-Up Negative", "Eccentric HSPU", "HSPU Negatives"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps"],
    sekundaer: ["schulter_seitlich", "trapez", "bauch"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 2, handgelenk: 2, nacken: 1 },
    stufe: 3,
    schwerer: "handstand_liegestuetz",
    info: {
      kurz: "Aus dem Handstand an der Wand langsam bis zum Boden absenken, ohne wieder hochzudrücken. Die exzentrische Phase baut die Kraft auf, die du für den vollen Handstand-Liegestütz brauchst.",
      ausfuehrung: [
        "Leg eine gefaltete Matte oder ein Kissen etwa eine Handbreit vor die Wand.",
        "Geh mit dem Rücken zur Wand in den Handstand: Hände schulterbreit, etwa 15 bis 25 Zentimeter von der Wand, Füße an die Wand schwingen oder hochlaufen.",
        "Drück dich lang, Arme gestreckt, Bauch fest, Gesäß angespannt.",
        "Beuge die Arme langsam über drei bis fünf Sekunden und senk den Kopf kontrolliert auf das Kissen vor den Händen.",
        "Die Ellbogen zeigen schräg nach vorn außen, sodass Kopf und Hände ein Dreieck bilden.",
        "Komm unten an, roll ab oder geh mit den Füßen von der Wand herunter.",
        "Steh auf, geh wieder in den Handstand und wiederhole."
      ],
      atmung: "Oben einatmen, während des langsamen Absenkens ruhig ausatmen.",
      fehler: [
        "Unkontrolliertes Fallen: Zeit zählen, mindestens drei Sekunden pro Absenken.",
        "Kopf landet zwischen den Händen: Kopf vor die Hände führen für das Dreieck.",
        "Starkes Hohlkreuz: Bauch und Gesäß fest, eventuell Hände näher an die Wand.",
        "Ellbogen zur Seite: schräg nach vorn außen führen."
      ],
      vorteile: [
        "Baut gezielt die Kraft für den Handstand-Liegestütz auf.",
        "Sehr hohe Belastung für Schultern und Trizeps mit dem eigenen Körpergewicht.",
        "Exzentrisches Training ist besonders wirksam für Kraftzuwachs.",
        "Ohne Geräte machbar."
      ],
      tipps: [
        "Starte erst, wenn du 30 Sekunden Handstand an der Wand sicher hältst.",
        "3 bis 5 Wiederholungen pro Satz reichen, Qualität vor Menge.",
        "Lege das Polster so hoch, dass du die Tiefe Schritt für Schritt steigern kannst."
      ],
      varianten: "Leichter: höheres Polster oder Pike-Liegestütz mit erhöhten Füßen. Schwerer: langsameres Absenken oder voller Handstand-Liegestütz.",
      sicherheit: "Nicht bei Nackenbeschwerden, Bluthochdruck, Glaukom oder Schwindel. Kopf nie unkontrolliert auf harten Boden fallen lassen."
    }
  },
  {
    id: "handstand_liegestuetz",
    name: "Handstand-Liegestütz an der Wand",
    auch: ["Wall Handstand Push-Up", "HSPU", "Handstand Push-Up"],
    muster: "druecken_vertikal",
    art: "kraft",
    muskeln: ["schulter_vorn", "trizeps", "schulter_seitlich"],
    sekundaer: ["trapez", "bauch", "brust"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 2, handgelenk: 2, nacken: 1 },
    stufe: 3,
    info: {
      kurz: "Volles Drücken des eigenen Körpergewichts im Handstand an der Wand. Eine der anspruchsvollsten Schulterübungen mit Körpergewicht, die Kraft, Körperspannung und Beweglichkeit verlangt.",
      ausfuehrung: [
        "Leg ein Polster vor die Wand und geh mit dem Rücken zur Wand in den Handstand, Hände etwa schulterbreit und 15 bis 25 Zentimeter von der Wand.",
        "Streck dich lang, Bauch und Gesäß fest, Fersen leicht an der Wand.",
        "Senk dich kontrolliert ab, bis der Kopf das Polster vor den Händen leicht berührt.",
        "Drück dich kraftvoll wieder nach oben, bis die Arme ganz gestreckt sind.",
        "Halte die Körperlinie gerade und vermeide, dass sich die Beine stark von der Wand lösen oder schwingen.",
        "Mach die geplanten Wiederholungen und geh dann kontrolliert aus dem Handstand.",
        "Bleib nach dem Satz kurz in der Hocke, bevor du aufstehst, falls dir schwindelig ist."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Mit Schwung aus den Beinen drücken: strikt arbeiten oder zu den Negativen zurück.",
        "Kopf landet zwischen den Händen: Kopf vor die Hände für das Dreieck.",
        "Hohlkreuz beim Drücken: Bauch fest, Hände eventuell näher an die Wand.",
        "Teilwiederholungen: Polster so wählen, dass du den vollen Weg schaffst."
      ],
      vorteile: [
        "Maximale Schulterbelastung mit dem eigenen Körpergewicht.",
        "Stärkt Schultern, Trizeps und oberen Trapez gleichzeitig.",
        "Verbessert Körperspannung und Kontrolle in umgekehrter Position.",
        "Überall mit einer Wand umsetzbar."
      ],
      tipps: [
        "Die meisten brauchen Wochen mit Negativen und Pike-Liegestütz, bevor die erste Wiederholung klappt.",
        "Kurze Sätze mit 2 bis 6 Wiederholungen und vollständiger Pause sind effektiver als Sätze bis zum Versagen.",
        "Mit Liegestützgriffen oder Parallettes kannst du später den Bewegungsweg vergrößern."
      ],
      varianten: "Leichter: Negative an der Wand oder höheres Polster. Schwerer: Defizit auf Erhöhungen oder Bauch zur Wand.",
      sicherheit: "Nicht bei Nackenbeschwerden, Bluthochdruck, Glaukom, Schwindel oder akuten Schulterproblemen. Nur auf weichem Untergrund und mit freiem Platz üben."
    }
  },

  // ---------- Seitliche Schulter und Frontheben ----------
  {
    id: "seitheben",
    name: "Seitheben mit Kurzhanteln",
    auch: ["Dumbbell Lateral Raise", "DB Lateral Raise", "Lateral Raise", "Lateral Raise (frei wählbar)", "Side Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Die Standardübung für die seitliche Schulter. Du hebst zwei Kurzhanteln seitlich bis auf Schulterhöhe und baust damit die Schulterbreite auf.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie locker, Oberkörper minimal nach vorn geneigt. Die Hanteln hängen seitlich vor den Oberschenkeln.",
        "Zieh die Schultern sanft nach unten, der Nacken ist lang, die Ellbogen sind leicht gebeugt.",
        "Heb die Arme seitlich und leicht nach vorn (etwa 15 bis 30 Grad vor der Körperebene) an. Die Ellbogen führen die Bewegung.",
        "Stopp, wenn die Oberarme etwa waagerecht sind. Die Hände sind auf Ellbogenhöhe oder knapp darunter.",
        "Halte oben kurz an und spür die Spannung seitlich an der Schulter.",
        "Senk die Hanteln langsam über zwei bis drei Sekunden wieder ab, ohne sie unten ganz ausruhen zu lassen.",
        "Wiederhole ohne Schwung aus Oberkörper oder Beinen."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus dem Oberkörper: Gewicht reduzieren und ruhig stehen.",
        "Schultern ziehen zu den Ohren: Schultern bewusst tief halten, sonst arbeitet vor allem der Trapez.",
        "Hände höher als Ellbogen: Ellbogen führen, Hände folgen.",
        "Zu schnell absenken: Die Absenkphase ist ein wichtiger Teil des Reizes."
      ],
      vorteile: [
        "Gezieltes Training der seitlichen Schulter, die bei Druckübungen wenig gefordert wird.",
        "Sorgt für breitere, rundere Schultern.",
        "Geringe Gelenkbelastung bei leichtem Gewicht.",
        "Mit wenig Ausrüstung überall machbar."
      ],
      tipps: [
        "Stell dir vor, du schiebst die Hanteln weit nach außen zu den Wänden statt nach oben.",
        "Leichte Gewichte und 10 bis 20 Wiederholungen bringen hier oft mehr als schwere Hanteln.",
        "Teilwiederholungen im unteren Bereich am Ende eines Satzes verlängern den Reiz."
      ],
      varianten: "Leichter: einarmig mit Halt an einer Stange oder sitzend. Schwerer: langsameres Absenken, Isohold am Ende oder Kabel für Spannung unten.",
      sicherheit: "Bei Schmerzen in der Abduktion nur bis knapp unter Schulterhöhe heben und Daumen leicht nach oben drehen."
    }
  },
  {
    id: "seitheben_21er",
    name: "Seitheben 21er mit Kurzhanteln",
    auch: ["DB Lateral Raise 21s", "Lateral Raise 21s", "21s Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Ein Satz Seitheben aus drei Abschnitten mit je sieben Wiederholungen: untere Hälfte, obere Hälfte, voller Bewegungsweg. Die lange Spannungszeit sorgt für ein starkes Brennen und einen hohen Muskelaufbaureiz.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, leichte Kurzhanteln seitlich an den Oberschenkeln, Ellbogen leicht gebeugt.",
        "Teil 1: Heb die Hanteln sieben Mal nur von unten bis zur halben Höhe (etwa 45 Grad) und senk sie wieder ab.",
        "Teil 2: Heb die Hanteln auf halbe Höhe und mach von dort sieben Wiederholungen zwischen halber Höhe und Schulterhöhe.",
        "Teil 3: Mach sieben volle Wiederholungen von ganz unten bis auf Schulterhöhe.",
        "Halte während aller 21 Wiederholungen die Schultern tief und den Oberkörper ruhig.",
        "Arbeite gleichmäßig, ohne Pause zwischen den Abschnitten.",
        "Leg die Hanteln erst nach der letzten vollen Wiederholung ab."
      ],
      atmung: "Bei jedem Anheben ausatmen, bei jedem Absenken einatmen, auch wenn die Bewegungen kurz sind.",
      fehler: [
        "Zu schweres Gewicht: etwa 50 bis 60 Prozent deines normalen Seithebegewichts wählen.",
        "Schwung im dritten Teil: lieber weniger hoch, aber sauber.",
        "Schultern wandern nach oben: Nacken lang halten.",
        "Abschnitte ungenau: die halbe Höhe als festen Umkehrpunkt nutzen."
      ],
      vorteile: [
        "Sehr lange Spannungszeit für die seitliche Schulter.",
        "Trainiert sowohl die gedehnte als auch die verkürzte Position gezielt.",
        "Spart Zeit, weil ein Satz sehr intensiv ist.",
        "Gut als Abschluss einer Schultereinheit."
      ],
      tipps: [
        "Ein bis zwei 21er-Sätze am Ende der Einheit reichen.",
        "Zähle laut mit, damit du in den Abschnitten nicht durcheinanderkommst.",
        "Funktioniert auch am Kabel oder mit Band."
      ],
      varianten: "Leichter: 3 mal 5 statt 3 mal 7 Wiederholungen. Schwerer: langsames Tempo im letzten Abschnitt oder Kabel statt Hanteln.",
      sicherheit: "Bei Schulterbeschwerden in der Abduktion nur die untere Hälfte trainieren oder auslassen."
    }
  },
  {
    id: "seitheben_swing",
    name: "Seitheben mit leichtem Schwung",
    auch: ["DB Lateral Raise Swing", "Lateral Raise Swing", "Cheat Lateral Raise", "Momentum Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn", "oberer_ruecken"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Seitheben mit etwas schwereren Hanteln und einem kleinen, kontrollierten Schwung aus Hüfte und Beinen, gefolgt von einer langsamen Absenkphase. So überlastest du die seitliche Schulter exzentrisch mit mehr Gewicht als beim strengen Seitheben.",
      ausfuehrung: [
        "Nimm Kurzhanteln, die etwa 20 bis 30 Prozent schwerer sind als beim strengen Seitheben.",
        "Stell dich hüftbreit hin und beug Hüfte und Knie leicht, die Hanteln hängen vor den Oberschenkeln.",
        "Starte jede Wiederholung mit einem kleinen Impuls aus den Beinen und der Hüfte, ähnlich einem kurzen Wippen.",
        "Nutze diesen Schwung, um die Hanteln seitlich bis auf Schulterhöhe zu bringen. Die Schultern bleiben tief.",
        "Bremse oben ab und senk die Hanteln langsam über drei Sekunden ab, ganz ohne Schwung.",
        "Unten kurz neu sammeln, dann die nächste Wiederholung starten.",
        "Beende den Satz, wenn du die Absenkphase nicht mehr kontrollieren kannst."
      ],
      atmung: "Mit dem Schwung nach oben ausatmen, beim langsamen Absenken einatmen.",
      fehler: [
        "Unkontrolliertes Reißen: Der Schwung ist klein und kommt aus den Beinen, nicht aus dem Rücken.",
        "Schnelles Absenken: Gerade das Absenken soll langsam und streng sein.",
        "Hochziehen der Schultern: Trapez entspannen, Schulterhöhe nicht überschreiten.",
        "Zu schweres Gewicht: Wenn der Oberkörper stark mitschwingt, leichter wählen."
      ],
      vorteile: [
        "Ermöglicht schwerere Lasten in der Absenkphase und damit einen neuen Reiz.",
        "Hilft, über Plateaus beim Seitheben hinauszukommen.",
        "Spart Zeit im Vergleich zu langen Drop-Sätzen.",
        "Trainiert Ganzkörperkoordination."
      ],
      tipps: [
        "Nur als Ergänzung zu strengem Seitheben einsetzen, nicht als Ersatz.",
        "Gut für 8 bis 12 Wiederholungen mit Fokus auf drei Sekunden Absenken.",
        "Nach den strengen Sätzen eingesetzt, holt diese Variante die letzten Reserven heraus."
      ],
      varianten: "Leichter: strenges Seitheben. Schwerer: längeres Absenken oder Isohold am Ende jeder Wiederholung.",
      sicherheit: "Bei Rückenbeschwerden lieber streng und leichter arbeiten. Bei Schulterschmerzen auslassen."
    }
  },
  {
    id: "seitheben_isohold",
    name: "Seitheben-Isohold mit Kurzhanteln",
    auch: ["Lateral Raise Iso Hold", "DB Lateral Raise Iso-Hold", "Isometric Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn"],
    geraete: [["kurzhantel"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Statisches Halten der Kurzhanteln auf Schulterhöhe. Trainiert die seitliche Schulter dort, wo sie am längsten unter Spannung steht, und eignet sich gut als Abschluss nach dynamischem Seitheben.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie locker, je eine leichte Kurzhantel seitlich neben den Oberschenkeln.",
        "Spann den Bauch leicht an und zieh die Schulterblätter sanft nach hinten unten, ohne die Brust herauszustrecken.",
        "Hebe die Arme mit leicht gebeugten Ellbogen seitlich an, bis die Oberarme etwa waagerecht sind. Die Ellbogen führen, die Hände bleiben auf Höhe der Ellbogen oder knapp darunter.",
        "Halte diese Position ruhig, die Daumen zeigen nach vorn oder leicht nach unten, der Nacken bleibt lang.",
        "Halte die vorgegebene Zeit. Wenn die Arme zu sinken beginnen, zähle noch drei Sekunden und senke dann langsam ab.",
        "Lege die Hanteln kontrolliert ab und schüttle die Arme kurz aus."
      ],
      atmung: "Atme während des Haltens ruhig und gleichmäßig weiter, nicht die Luft anhalten.",
      fehler: [
        "Schultern ziehen zu den Ohren: bewusst lang machen und das Gewicht senken.",
        "Arme über die Waagerechte heben: dann übernimmt der Trapezmuskel, auf Schulterhöhe bleiben.",
        "Oberkörper lehnt sich nach hinten: Bauch anspannen, eventuell mit dem Rücken an eine Wand stellen.",
        "Zu schwere Hanteln: Die Position muss mindestens 20 Sekunden sauber haltbar sein."
      ],
      vorteile: [
        "Lange Spannungszeit für die seitliche Schulter bei geringer Gelenkbelastung.",
        "Verbessert die Kraftausdauer und Stabilität der Schulter in Abduktion.",
        "Ermöglicht nach dem dynamischen Seitheben weitere Reize ohne Schwung.",
        "Gut steuerbar, auch für Einsteiger."
      ],
      tipps: [
        "Stell dir vor, du drückst die Hanteln nach außen zu den Wänden statt nach oben.",
        "Etwa 30 bis 50 Prozent des Gewichts, das du beim normalen Seitheben nimmst, reichen.",
        "Als Finisher direkt nach dem letzten Satz Seitheben besonders wirksam."
      ],
      varianten: "Leichter: mit Band oder nur einem Arm. Schwerer: länger halten oder am Ende kleine Pulsbewegungen.",
      sicherheit: "Bei Schulterschmerzen in der Abduktion nur bis unter Schulterhöhe heben oder auslassen."
    }
  },
  {
    id: "seitheben_aegyptisch",
    name: "Ägyptisches Seitheben",
    auch: ["Egyptian Lateral Raise", "Leaning Dumbbell Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schraege_bauch"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Seitheben, bei dem du dich an einer festen Stange hältst und den Körper zur Seite weglehnst. Durch die Schräglage beginnt die Bewegung in einer stärker gedehnten Position und die seitliche Schulter arbeitet auch unten gegen Widerstand.",
      ausfuehrung: [
        "Stell dich seitlich neben eine stabile Stange oder einen Rahmen und greif sie mit der inneren Hand etwa auf Hüfthöhe.",
        "Stell die Füße dicht an den Fuß der Stange und lehn dich mit gestrecktem Körper zur Seite weg, bis der Arm gestreckt ist. Der Körper bildet eine schräge Linie.",
        "Die Hantel hängt in der äußeren Hand vor dem Körper, der Ellbogen ist leicht gebeugt.",
        "Heb die Hantel seitlich an, bis der Oberarm etwa waagerecht zum Boden ist oder etwas darüber, je nach Neigung.",
        "Halte oben kurz an und senk die Hantel langsam ab, bis sie wieder vor dem Körper hängt.",
        "Bleib während des ganzen Satzes in derselben Schräglage, ohne mitzuschwingen.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Körper knickt in der Hüfte ab: als gerade Linie wegkippen.",
        "Schwung aus der Hüfte: Gewicht reduzieren.",
        "Schulter zieht zum Ohr: Schulter tief, Ellbogen führt.",
        "Zu wenig Neigung: Etwa 15 bis 30 Grad Schräglage bringt den gewünschten Effekt."
      ],
      vorteile: [
        "Mehr Spannung im unteren, gedehnten Bereich als beim normalen Seitheben.",
        "Einarmig, daher volle Konzentration auf eine Seite.",
        "Gut als Abwechslung, wenn das klassische Seitheben stagniert.",
        "Fordert nebenbei die seitliche Rumpfmuskulatur."
      ],
      tipps: [
        "Etwas leichter wählen als beim normalen Seitheben, die Übung fühlt sich deutlich schwerer an.",
        "Mit 10 bis 15 Wiederholungen und langsamem Absenken arbeiten.",
        "Die Kabelvariante mit derselben Schräglage findest du als Lean-away-Seitheben am Kabel."
      ],
      varianten: "Leichter: weniger Schräglage. Schwerer: stärkere Neigung, Isohold oben oder langsames Absenken über vier Sekunden.",
      sicherheit: "Nur an absolut stabilen Stangen oder Racks festhalten. Bei Schulterschmerzen in der Abduktion auslassen."
    }
  },
  {
    id: "seitheben_sitzend",
    name: "Seitheben mit Kurzhanteln im Sitzen",
    auch: ["Seated Dumbbell Lateral Raise", "Seated Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Seitheben auf einer Bank sitzend. Weil Beine und Hüfte keinen Schwung geben können, ist die Übung strenger und isoliert die seitliche Schulter noch besser als im Stehen.",
      ausfuehrung: [
        "Setz dich ans Ende einer Flachbank oder auf eine Bank mit Lehne, Füße fest am Boden.",
        "Lass die Hanteln seitlich neben der Bank hängen, Ellbogen leicht gebeugt, Oberkörper minimal nach vorn geneigt.",
        "Zieh die Schultern sanft nach unten, der Nacken bleibt lang.",
        "Heb die Hanteln seitlich und etwas nach vorn an, bis die Oberarme waagerecht sind. Die Ellbogen führen.",
        "Halte oben kurz an und spür die Spannung seitlich an der Schulter.",
        "Senk die Hanteln langsam ab, bis sie etwa 15 Zentimeter neben der Bank hängen, und starte die nächste Wiederholung.",
        "Halte den Oberkörper während des ganzen Satzes still."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper wippt: aufrecht und ruhig sitzen bleiben.",
        "Hanteln über Schulterhöhe: oben bei waagerechten Oberarmen stoppen.",
        "Schultern hochgezogen: bewusst tief halten.",
        "Hanteln hängen unten ganz locker: Spannung unten halten, nicht ablegen."
      ],
      vorteile: [
        "Sehr strenge Isolation der seitlichen Schulter.",
        "Kein Schwung aus Beinen und Hüfte möglich.",
        "Entlastet den unteren Rücken im Vergleich zu schweren stehenden Varianten.",
        "Leicht zu erlernen."
      ],
      tipps: [
        "Etwas leichter als im Stand wählen.",
        "Mit 12 bis 20 Wiederholungen und kontrolliertem Absenken arbeiten.",
        "Gut im Supersatz mit Reverse Flyes, weil du dafür nur dieselbe Bank brauchst."
      ],
      varianten: "Leichter: einarmig oder mit Band. Schwerer: Isohold am Ende oder 21er im Sitzen.",
      sicherheit: "Bei Schmerzen in der Abduktion den Bewegungsweg oben begrenzen."
    }
  },
  {
    id: "seitheben_schraegbank_liegend",
    name: "Seitheben in Seitlage auf der Schrägbank",
    auch: ["Lying Lateral Raise", "Incline Side-Lying Lateral Raise", "Side-Lying Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["schulter_hinten", "rotatorenmanschette"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Seitheben, bei dem du seitlich auf einer Schrägbank liegst. Die Schräglage verschiebt den schwersten Punkt nach unten in die gedehnte Position, wo stehendes Seitheben kaum Widerstand bietet.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 bis 45 Grad und leg dich seitlich mit der Hüfte auf die Sitzfläche und dem Oberkörper an die Lehne.",
        "Die untere Hand stützt den Kopf oder hält die Lehne, die Beine sind leicht versetzt für Halt.",
        "Die Hantel hängt in der oberen Hand vor dem Körper Richtung Boden, der Ellbogen ist leicht gebeugt.",
        "Heb die Hantel in einem Bogen nach oben, bis der Arm etwa senkrecht zum Boden steht oder kurz davor.",
        "Senk sie langsam wieder ab, bis du eine Dehnung in der seitlichen Schulter spürst.",
        "Halte die Schulter tief und den Oberkörper ruhig auf der Lehne.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu hoch heben: Ab der Senkrechten ist kaum noch Last auf dem Muskel, dort umkehren.",
        "Zu schwer: Die Übung ist unten sehr anspruchsvoll, leichte Hanteln wählen.",
        "Körper rollt nach vorn oder hinten: Beine versetzen und stabil liegen.",
        "Arm ganz gestreckt: Ellbogen leicht gebeugt lassen."
      ],
      vorteile: [
        "Belastet die seitliche Schulter besonders in der gedehnten Position.",
        "Ergänzt stehendes Seitheben, das oben am schwersten ist.",
        "Kein Schwung möglich, sehr saubere Ausführung.",
        "Gute Option, wenn kein Kabelzug verfügbar ist."
      ],
      tipps: [
        "Etwa die Hälfte des normalen Seithebegewichts reicht meist.",
        "Mit 12 bis 20 Wiederholungen arbeiten und unten kurz in der Dehnung pausieren.",
        "Je flacher die Bank, desto mehr verlagert sich der schwerste Punkt nach unten."
      ],
      varianten: "Leichter: Bank steiler stellen. Schwerer: flachere Bank, Pause unten oder Teilwiederholungen in der Dehnung.",
      sicherheit: "Bei Schulterinstabilität oder Schmerzen in der Dehnposition den Bewegungsweg unten begrenzen."
    }
  },
  {
    id: "seitheben_teilwdh_gedehnt",
    name: "Seitheben mit Teilwiederholungen in der Dehnung",
    auch: ["Lengthened Partial Lateral Raise", "Partial Lateral Raises", "Bottom-Half Lateral Raise", "Lateral Raise Lengthened Partials"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Seitheben nur im unteren Bereich des Bewegungswegs, von ganz unten bis etwa zur Hälfte. Die Teilwiederholungen in der gedehnten Position sind nach aktueller Studienlage ein wirksamer Reiz für den Muskelaufbau.",
      ausfuehrung: [
        "Am Kabel: Rolle ganz unten einstellen, seitlich zum Zug stellen und den Griff mit der äußeren Hand vor dem Körper fassen. Mit Kurzhanteln: wie beim normalen Seitheben stehen.",
        "Der Arm hängt leicht vor dem Körper, die Schulter ist tief, der Ellbogen leicht gebeugt.",
        "Heb den Arm seitlich an, aber nur bis etwa 45 Grad, also bis zur Hälfte des normalen Weges.",
        "Senk den Arm kontrolliert wieder ab, bis du unten die Spannung in der Dehnung spürst.",
        "Arbeite rhythmisch und ohne Schwung, die Bewegung bleibt immer im unteren Bereich.",
        "Am Kabel: nach dem Satz Seite wechseln. Mit Kurzhanteln arbeiten beide Arme gleichzeitig.",
        "Alternativ kannst du nach vollen Wiederholungen bis zum Versagen mit diesen Teilwiederholungen weitermachen."
      ],
      atmung: "Gleichmäßig weiteratmen: beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Bewegung wird mit der Zeit immer höher: an einem festen Umkehrpunkt orientieren.",
        "Schwung: Die Bewegung ist kurz, aber trotzdem kontrolliert.",
        "Spannung geht unten verloren: Am Kabel nicht ganz ablegen, mit Hanteln nicht an die Oberschenkel klopfen.",
        "Schultern ziehen nach oben: Nacken lang halten."
      ],
      vorteile: [
        "Gezielter Reiz in der gedehnten Position, die für Muskelwachstum besonders wirksam sein kann.",
        "Gelenkschonend, weil der Arm nicht über Schulterhöhe geht.",
        "Erlaubt mehr Gewicht oder mehr Wiederholungen als volle Seitheben.",
        "Ideal als Verlängerung eines Satzes nach dem Versagen."
      ],
      tipps: [
        "Am Kabel wirkt die Übung besonders gut, weil der Widerstand unten schon hoch ist.",
        "Mit 12 bis 25 Wiederholungen bis kurz vor das Versagen arbeiten.",
        "Gut kombinierbar: erst volle Wiederholungen, dann ohne Pause Teilwiederholungen anhängen."
      ],
      varianten: "Leichter: Band statt Kabel. Schwerer: Pause von einer Sekunde unten oder mehr Gewicht.",
      sicherheit: "Bei Schmerzen im unteren Bewegungsbereich die Dehnung etwas verkürzen."
    }
  },
  {
    id: "lu_raise",
    name: "Lu Raise",
    auch: ["Lu Raises", "Lu Xiaojun Raise", "Overhead Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich", "trapez"],
    sekundaer: ["schulter_vorn", "rotatorenmanschette"],
    geraete: [["hantelscheibe"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Seitheben, bei dem die Arme mit gestreckten Ellbogen bis über den Kopf geführt werden. Die Übung stammt aus dem Gewichtheben, kräftigt seitliche Schulter und oberen Trapez gemeinsam und fördert die Überkopfstabilität.",
      ausfuehrung: [
        "Nimm zwei sehr leichte Hantelscheiben oder Kurzhanteln, Handflächen zeigen zu den Oberschenkeln.",
        "Stell dich hüftbreit hin, Bauch und Gesäß fest.",
        "Heb die Arme mit fast gestreckten Ellbogen seitlich an, die Daumen zeigen dabei nach oben.",
        "Führ die Arme ohne Pause weiter über Schulterhöhe hinaus, bis sie über dem Kopf ein breites V bilden.",
        "Lass die Schulterblätter oben mit nach oben drehen und die Schultern mitgehen.",
        "Senk die Arme langsam auf demselben Weg wieder ab.",
        "Halte den Oberkörper ruhig, ohne ins Hohlkreuz zu fallen."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu schweres Gewicht: Die langen Hebel machen schon 1 bis 2,5 kg anspruchsvoll.",
        "Hohlkreuz oben: Rippen unten, Gesäß fest.",
        "Ellbogen beugen sich stark: Arme fast gestreckt lassen.",
        "Handflächen zeigen nach unten: Daumen nach oben schafft mehr Platz in der Schulter."
      ],
      vorteile: [
        "Kräftigt seitliche Schulter und oberen Trapez über den ganzen Bewegungsweg.",
        "Trainiert die Aufwärtsrotation des Schulterblatts.",
        "Verbessert Kontrolle und Stabilität über Kopf.",
        "Kann als Aufwärmübung für Drücken und Reißen dienen."
      ],
      tipps: [
        "Mit kleinen Scheiben von 1,25 bis 2,5 kg beginnen.",
        "Langsames Tempo, oben eine kurze Pause.",
        "Funktioniert gut im Aufwärmen vor Überkopfdrücken."
      ],
      varianten: "Leichter: ohne Gewicht oder nur bis Schulterhöhe. Schwerer: etwas mehr Gewicht oder Isohold oben.",
      sicherheit: "Bei Schulterschmerzen über Kopf oder Impingement-Beschwerden nicht über Schulterhöhe heben."
    }
  },
  {
    id: "seitheben_band",
    name: "Seitheben mit Widerstandsband",
    auch: ["Band Lateral Raise", "Resistance Band Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Seitheben gegen ein Widerstandsband, das unter den Füßen fixiert ist. Der Widerstand steigt nach oben hin an und erzeugt dort die meiste Spannung, ideal für zu Hause, unterwegs oder als Ergänzung zu Hanteln.",
      ausfuehrung: [
        "Stell dich mit einem oder beiden Füßen auf die Mitte des Bandes, Füße hüftbreit.",
        "Fass die Bandenden oder Griffe, die Arme hängen seitlich, Ellbogen leicht gebeugt.",
        "Zieh die Schultern tief und richte dich auf, Bauch leicht fest.",
        "Heb die Arme seitlich an, bis die Oberarme waagerecht sind. Ellbogen führen.",
        "Halte oben kurz die Spannung, das Band zieht hier am stärksten.",
        "Senk die Arme langsam ab, ohne dass das Band unten ganz locker wird.",
        "Steig nach dem Satz vorsichtig vom Band."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schultern ziehen hoch, weil das Band oben stark zieht: Band leichter wählen.",
        "Zu schnell nach unten: bewusst gegen den Zug bremsen.",
        "Band rutscht unter dem Fuß: breiter stehen oder um den Fuß wickeln.",
        "Arme über Schulterhöhe: oben bei waagerechten Oberarmen stoppen."
      ],
      vorteile: [
        "Viel Spannung in der oberen Position.",
        "Gelenkschonend und überall einsetzbar.",
        "Gut als Aufwärmübung oder für hohe Wiederholungszahlen.",
        "Kombinierbar mit Kurzhanteln für eine ausgeglichenere Kraftkurve."
      ],
      tipps: [
        "Stell dich nur mit einem Fuß drauf, wenn das Band zu stark ist.",
        "Einarmig mit dem Band unter dem gegenüberliegenden Fuß gibt mehr Spannung unten.",
        "15 bis 25 Wiederholungen eignen sich gut."
      ],
      varianten: "Leichter: dünneres Band oder einarmig. Schwerer: dickeres Band, kürzer greifen oder Isohold oben.",
      sicherheit: "Band vor dem Training auf Risse prüfen. Bei Schulterschmerzen nur bis unter Schulterhöhe heben."
    }
  },
  {
    id: "seitheben_maschine",
    name: "Seitheben an der Maschine",
    auch: ["Machine Lateral Raise", "Lateral Raise Machine"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Seitheben an einer geführten Maschine, bei der Polster oder Griffe die Arme führen. Die Maschine gibt eine gleichmäßige Spannung und erlaubt dir, sicher bis an die Belastungsgrenze zu trainieren.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass dein Schultergelenk auf Höhe der Drehachse der Maschine liegt.",
        "Setz dich aufrecht hin, Brust an das Brustpolster oder Rücken an die Lehne, je nach Modell.",
        "Leg die Unterarme oder Ellbogen an die Polster oder greif die Griffe, Ellbogen leicht gebeugt.",
        "Drück die Arme seitlich nach oben, bis die Oberarme waagerecht sind.",
        "Halte oben kurz an, ohne die Schultern hochzuziehen.",
        "Senk die Arme langsam ab, bis das Gewicht fast auf dem Stapel aufliegt, und starte die nächste Wiederholung.",
        "Lege das Gewicht nach dem Satz leise ab."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Drehachse und Schulter nicht ausgerichtet: Sitzhöhe anpassen.",
        "Mit den Händen ziehen statt mit den Ellbogen drücken: Druck über die Ellbogen auf die Polster geben.",
        "Schultern hochgezogen: Trapez locker lassen.",
        "Gewicht schlägt auf: kontrolliert absenken."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Bewegungsweg.",
        "Sicher bis nahe ans Muskelversagen trainierbar.",
        "Sehr einfache Technik, ideal für Einsteiger.",
        "Gut für Drop-Sätze, weil das Gewicht schnell umgesteckt ist."
      ],
      tipps: [
        "Mit 12 bis 20 Wiederholungen und einem Drop-Satz am Ende sehr wirksam.",
        "Viele Maschinen erlauben einarmiges Arbeiten, gut bei Seitenunterschieden.",
        "Langsames Absenken über zwei bis drei Sekunden verstärkt den Reiz."
      ],
      varianten: "Leichter: weniger Gewicht oder Teilwiederholungen. Schwerer: einarmig, Pause oben oder Drop-Satz.",
      sicherheit: "Bei Schulterbeschwerden in der Abduktion den Bewegungsweg begrenzen."
    }
  },
  {
    id: "seitheben_kabel_einarmig",
    name: "Seitheben am Kabel einarmig",
    auch: ["Cable Lateral Raise", "Single-Arm Cable Lateral Raise", "Cross-Body Cable Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einarmiges Seitheben mit dem Kabel, das von unten vor dem Körper quer zur arbeitenden Hand läuft. Das Kabel hält auch unten Spannung auf der seitlichen Schulter, wo Kurzhanteln fast keinen Widerstand bieten.",
      ausfuehrung: [
        "Stell die Rolle ganz nach unten und stell dich seitlich zum Kabelzug, etwa eine Armlänge entfernt.",
        "Greif den Griff mit der Hand, die vom Zug weg zeigt, sodass das Kabel vor deinem Körper verläuft.",
        "Halte dich mit der freien Hand am Gerät fest, Oberkörper aufrecht oder minimal nach vorn geneigt.",
        "Heb den Arm mit leicht gebeugtem Ellbogen seitlich an, bis der Oberarm waagerecht ist.",
        "Halte oben kurz an, die Schulter bleibt tief.",
        "Senk den Arm langsam ab, bis die Hand wieder vor dem Körper auf Höhe der Hüfte ist und du die Dehnung spürst.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper dreht sich mit: Füße stabil, Hüfte zeigt nach vorn.",
        "Schulter zieht hoch: Gewicht reduzieren und Schulter tief halten.",
        "Hand höher als Ellbogen: der Ellbogen führt die Bewegung.",
        "Zu schnell nach unten: Gewicht bremsen, nicht fallen lassen."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Bewegungsweg, auch in der Dehnung.",
        "Einarmig, dadurch bessere Konzentration auf eine Seite.",
        "Fein steigerbar und sehr gelenkschonend.",
        "Eine der effektivsten Übungen für die seitliche Schulter."
      ],
      tipps: [
        "Mit einer Manschette am Handgelenk statt Griff spürst du die Schulter oft noch besser.",
        "12 bis 20 Wiederholungen mit Fokus auf das langsame Absenken.",
        "Die Rollenhöhe kannst du anpassen: Auf Hüfthöhe statt am Boden verschiebt sich der schwerste Punkt der Bewegung."
      ],
      varianten: "Leichter: weniger Gewicht oder Band. Schwerer: Pause oben, Teilwiederholungen in der Dehnung oder Lean-away-Variante.",
      sicherheit: "Bei Schulterschmerzen in der Abduktion nur bis unter Schulterhöhe heben."
    }
  },
  {
    id: "seitheben_kabel_hinter_ruecken",
    name: "Seitheben am Kabel hinter dem Rücken",
    auch: ["Behind-the-Back Cable Lateral Raise", "Behind the Back Lateral Raise", "Cable Y Raise Behind Back"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["schulter_hinten", "trapez"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Kabel-Seitheben, bei dem das Kabel hinter dem Rücken zur arbeitenden Hand läuft. Der Arm startet leicht hinter dem Körper, das dehnt die seitliche Schulter stärker und bezieht den hinteren Anteil mit ein.",
      ausfuehrung: [
        "Stell die Rolle ganz nach unten und stell dich seitlich zum Kabelzug.",
        "Greif den Griff mit der äußeren Hand so, dass das Kabel hinter deinem Rücken verläuft.",
        "Mach einen kleinen Schritt weg vom Zug, sodass die Hand unten leicht hinter der Hüfte steht und Spannung auf dem Kabel ist.",
        "Heb den Arm seitlich und leicht nach hinten an, bis der Oberarm waagerecht ist. Der Ellbogen ist leicht gebeugt und führt.",
        "Halte oben kurz an, ohne die Schulter hochzuziehen.",
        "Senk den Arm langsam ab, bis die Hand wieder leicht hinter der Hüfte ist.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper dreht sich zum Kabel: Hüfte und Brust zeigen nach vorn.",
        "Arm geht zu weit nach vorn: die Bewegung verläuft seitlich, eher leicht hinter der Körperebene.",
        "Schulter rollt nach vorn: Brust offen und Schulterblatt ruhig.",
        "Zu schweres Gewicht: Die Position ist ungewohnt, mit wenig beginnen."
      ],
      vorteile: [
        "Starke Dehnung der seitlichen Schulter zu Beginn der Bewegung.",
        "Bezieht die hintere Schulter mit ein.",
        "Andere Kraftkurve als die Variante vor dem Körper, gute Abwechslung.",
        "Gelenkschonend durch gleichmäßigen Kabelwiderstand."
      ],
      tipps: [
        "Wechsle im Trainingsblock zwischen der Variante vor und hinter dem Körper.",
        "Mit Manschette am Handgelenk ist die Ausführung oft angenehmer.",
        "Mit 12 bis 20 Wiederholungen arbeiten."
      ],
      varianten: "Leichter: weniger Abstand zum Zug. Schwerer: Pause oben oder langsameres Absenken.",
      sicherheit: "Bei Beschwerden an der Schultervorderseite in der Dehnung den Weg unten verkürzen."
    }
  },
  {
    id: "seitheben_lean_away_kabel",
    name: "Lean-away-Seitheben am Kabel",
    auch: ["Lean-Away Cable Lateral Raise", "Leaning Cable Lateral Raise", "Cable Lean Away Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schraege_bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Kabel-Seitheben, bei dem du dich mit der freien Hand am Kabelturm festhältst und vom Zug weglehnst. Die Schräglage vergrößert den Bewegungsweg und lässt die Schulter besonders tief in die Dehnung.",
      ausfuehrung: [
        "Stell die Rolle ganz nach unten und stell dich seitlich zum Kabelturm, die Füße dicht daran.",
        "Greif mit der inneren Hand eine feste Stange am Turm und nimm den Griff mit der äußeren Hand, das Kabel läuft vor dem Körper.",
        "Lehn dich mit gestrecktem Körper vom Turm weg, bis der Haltearm gestreckt ist, etwa 15 bis 20 Grad.",
        "Heb den Arbeitsarm mit leicht gebeugtem Ellbogen seitlich an, bis der Oberarm etwa waagerecht zum Boden steht.",
        "Halte oben kurz und senk dann langsam ab, bis die Hand vor dem Körper in der Dehnung ankommt.",
        "Bleib während des Satzes ruhig in der Schräglage, ohne zu wippen.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hüfte knickt ab: als gerade Linie wegkippen.",
        "Schulter zieht hoch: Gewicht reduzieren.",
        "Mitschwingen des Körpers: Die Neigung bleibt konstant.",
        "Zu schnelles Absenken: gerade die Dehnung bewusst kontrollieren."
      ],
      vorteile: [
        "Größter Bewegungsweg aller Seithebe-Varianten.",
        "Hohe Spannung in der gedehnten Position.",
        "Sehr gut kontrollierbar und fein steigerbar.",
        "Ideal für Muskelaufbau an der seitlichen Schulter."
      ],
      tipps: [
        "Etwas leichter als beim normalen Kabel-Seitheben beginnen.",
        "Langsames Absenken über drei Sekunden betont die Dehnphase.",
        "Gut am Anfang des Schultertrainings, solange du frisch bist."
      ],
      varianten: "Leichter: aufrecht stehen. Schwerer: stärker lehnen oder Teilwiederholungen in der Dehnung am Satzende.",
      sicherheit: "Nur an stabilen Geräten festhalten. Bei Schulterschmerzen in der Dehnung den Weg unten begrenzen."
    }
  },
  {
    id: "seitheben_kabel_beidarmig",
    name: "Seitheben am Kabel beidarmig über Kreuz",
    auch: ["Cable Crossover Lateral Raise", "Bilateral Cable Lateral Raise", "Crossed Cable Lateral Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich"],
    sekundaer: ["trapez", "schulter_hinten"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Seitheben mit beiden Armen gleichzeitig zwischen zwei Kabeltürmen, die Kabel kreuzen sich vor dem Körper. Spart Zeit gegenüber der einarmigen Variante und hält beide Schultern durchgehend unter Spannung.",
      ausfuehrung: [
        "Stell beide Rollen ganz nach unten und stell dich mittig zwischen die Türme.",
        "Greif mit der rechten Hand das linke Kabel und mit der linken Hand das rechte, sodass sich die Kabel vor dem Körper kreuzen.",
        "Geh einen kleinen Schritt nach vorn oder hinten, bis Spannung auf beiden Kabeln ist. Hände sind vor der Hüfte.",
        "Heb beide Arme seitlich mit leicht gebeugten Ellbogen an, bis die Oberarme waagerecht sind.",
        "Halte oben kurz an und senk die Arme langsam wieder vor den Körper.",
        "Halte die Schultern tief und den Oberkörper ruhig.",
        "Lege die Griffe nach dem Satz nacheinander und kontrolliert ab."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Falscher Stand: Wenn die Kabel nicht gleichmäßig ziehen, mittig stellen.",
        "Schultern ziehen hoch: Gewicht reduzieren.",
        "Oberkörper lehnt nach hinten: Bauch fest, minimal nach vorn neigen.",
        "Kabel schlagen beim Absenken an: kontrolliert und mit Spannung arbeiten."
      ],
      vorteile: [
        "Beide Seiten gleichzeitig mit Kabelspannung über den ganzen Weg.",
        "Zeitsparend im Vergleich zur einarmigen Ausführung.",
        "Gute Spannung in der Dehnung.",
        "Gelenkschonend und fein steigerbar."
      ],
      tipps: [
        "Mit Manschetten statt Griffen ist die Ausführung meist angenehmer.",
        "Wenn das Setup kompliziert ist, Griffe nacheinander aufnehmen und dann zur Mitte treten.",
        "Gut für hohe Wiederholungszahlen und Drop-Sätze."
      ],
      varianten: "Leichter: einarmig. Schwerer: langsames Absenken oder Isohold oben.",
      sicherheit: "Bei Schulterschmerzen in der Abduktion nur bis unter Schulterhöhe heben."
    }
  },
  {
    id: "kabel_y_raise",
    name: "Y-Raise am Kabel",
    auch: ["Cable Y-Raise", "Cable Y Raise", "Low Cable Y Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich", "trapez"],
    sekundaer: ["schulter_hinten", "rotatorenmanschette", "oberer_ruecken"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Beidarmiges Anheben der Arme schräg nach oben in ein Y mit sich kreuzenden Kabeln von unten. Trainiert die seitliche Schulter in einer schulterfreundlichen Ebene und bezieht den unteren Trapez mit ein.",
      ausfuehrung: [
        "Stell beide Rollen ganz nach unten und greif die Kabel über Kreuz: rechte Hand linkes Kabel, linke Hand rechtes Kabel.",
        "Stell dich mittig und einen kleinen Schritt nach hinten, Hände vor der Hüfte, Oberkörper leicht nach vorn geneigt.",
        "Heb die Arme mit leicht gebeugten Ellbogen schräg nach vorn oben in ein Y, etwa 30 Grad vor der Körperebene.",
        "Führ die Arme bis etwa auf Kopfhöhe oder etwas darüber, die Daumen zeigen leicht nach oben.",
        "Halte oben kurz an und lass die Schulterblätter dabei leicht nach oben drehen.",
        "Senk die Arme langsam wieder vor die Hüfte ab.",
        "Halte den Rumpf ruhig und vermeide ein Hohlkreuz."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz oben: Bauch fest, minimal vorgeneigt bleiben.",
        "Schultern schießen zu den Ohren: Bewegung über die Arme starten, nicht über die Schultern.",
        "Zu schweres Gewicht: Die Y-Position ist bei schwerem Gewicht kaum kontrollierbar.",
        "Arme gehen zu weit zur Seite: im Y bleiben, nicht im T."
      ],
      vorteile: [
        "Trainiert seitliche Schulter und unteren Trapez in der Schulterblattebene.",
        "Schulterfreundlicher Winkel für viele Menschen.",
        "Spannung über den ganzen Weg durch das Kabel.",
        "Verbessert die Schulterblattkontrolle über Kopf."
      ],
      tipps: [
        "Leichte Gewichte und 12 bis 20 Wiederholungen.",
        "Denk daran, die Hände nach außen und oben zu schieben, nicht zu heben.",
        "Auch einarmig möglich, wenn nur ein Kabel frei ist."
      ],
      varianten: "Leichter: einarmig oder mit Band. Schwerer: Pause oben oder langsames Absenken.",
      sicherheit: "Bei Schmerzen über Kopf nur bis Schulterhöhe heben."
    }
  },
  {
    id: "aufrechtes_rudern_kabel_weit",
    name: "Aufrechtes Rudern am Kabel mit weitem Griff",
    auch: ["Wide-Grip Cable Upright Row", "Cable Upright Row", "Wide Grip Upright Row"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich", "trapez"],
    sekundaer: ["schulter_vorn", "bizeps", "unterarm"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Ziehen einer Stange am unteren Kabel senkrecht nach oben bis auf Brusthöhe, mit weitem Griff. Der weite Griff verlagert die Arbeit auf die seitliche Schulter und ist schulterfreundlicher als die enge Variante.",
      ausfuehrung: [
        "Hänge eine gerade Stange an die untere Rolle und greif sie im Obergriff etwa eineinhalbfach schulterbreit.",
        "Stell dich nah an den Zug, Füße hüftbreit, Stange vor den Oberschenkeln.",
        "Zieh die Ellbogen seitlich nach oben, die Stange bleibt nah am Körper.",
        "Stopp, wenn die Ellbogen etwa auf Schulterhöhe sind und die Stange auf Höhe des unteren Brustbeins.",
        "Die Ellbogen sind immer höher als die Hände.",
        "Senk die Stange langsam wieder ab, bis die Arme gestreckt sind.",
        "Lege die Stange nach dem Satz kontrolliert ab."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu enger Griff: schulterbreit oder weiter greifen, sonst steigt die Belastung im Schultergelenk.",
        "Ellbogen deutlich über Schulterhöhe: auf Schulterhöhe stoppen.",
        "Zurücklehnen und Schwung: Oberkörper aufrecht und ruhig halten.",
        "Hände führen: die Ellbogen ziehen, die Hände hängen nur am Griff."
      ],
      vorteile: [
        "Ermöglicht mehr Last für die seitliche Schulter als Seitheben.",
        "Trainiert seitliche Schulter und Trapez gemeinsam.",
        "Kabel sorgt für gleichmäßige Spannung.",
        "Einfach zu erlernen."
      ],
      tipps: [
        "Mit einem Seil statt Stange können die Hände frei wandern, das ist für manche angenehmer.",
        "8 bis 15 Wiederholungen mit kontrolliertem Absenken.",
        "Denk an das Bild: Ellbogen nach außen zu den Wänden ziehen."
      ],
      varianten: "Leichter: mit Seil und geringerer Zughöhe. Schwerer: Pause oben oder langsames Absenken.",
      sicherheit: "Bei Impingement-Beschwerden nicht über Brusthöhe ziehen oder die Übung auslassen."
    }
  },
  {
    id: "aufrechtes_rudern_kh",
    name: "Aufrechtes Rudern mit Kurzhanteln",
    auch: ["Dumbbell Upright Row", "DB Upright Row"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_seitlich", "trapez"],
    sekundaer: ["schulter_vorn", "bizeps"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Aufrechtes Rudern mit zwei Kurzhanteln, die du seitlich am Körper nach oben ziehst. Die Hände sind frei, dadurch findet jede Schulter ihre angenehme Bahn, und die seitliche Schulter bekommt viel Arbeit.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Hanteln hängen vor den Oberschenkeln, Handflächen zeigen zu dir.",
        "Halte die Hanteln etwas mehr als schulterbreit auseinander.",
        "Zieh die Ellbogen seitlich nach oben, die Hanteln bleiben nah am Körper und etwas weiter auseinander als die Schultern.",
        "Stopp, wenn die Ellbogen auf Schulterhöhe sind, die Hanteln sind dann etwa auf Höhe der unteren Brust.",
        "Halte oben kurz an, ohne die Schultern zu den Ohren zu ziehen.",
        "Senk die Hanteln langsam wieder ab.",
        "Halte den Oberkörper ruhig, ohne Schwung."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hanteln zu dicht zusammen: etwas breiter halten für mehr Platz in der Schulter.",
        "Zu hoch ziehen: auf Schulterhöhe der Ellbogen stoppen.",
        "Schwung aus dem Rücken: leichteres Gewicht.",
        "Handgelenke stark abgeknickt: Handgelenke neutral lassen."
      ],
      vorteile: [
        "Freie Bahn ist für viele Schultern angenehmer als die Stange.",
        "Kräftigt seitliche Schulter und oberen Trapez.",
        "Mit wenig Ausrüstung zu Hause möglich.",
        "Gute Ergänzung zu Seitheben mit schwererer Last."
      ],
      tipps: [
        "Stell dir vor, du ziehst die Ellbogen nach außen, nicht die Hände nach oben.",
        "Mit 10 bis 15 Wiederholungen arbeiten.",
        "Auch einarmig möglich, dann mit der freien Hand festhalten."
      ],
      varianten: "Leichter: weniger hoch ziehen. Schwerer: langsames Absenken oder am Kabel mit weitem Griff.",
      sicherheit: "Bei Schmerzen vorn oder oben in der Schulter nicht über Brusthöhe ziehen."
    }
  },
  {
    id: "frontheben_kh",
    name: "Frontheben mit Kurzhanteln",
    auch: ["Dumbbell Front Raise", "DB Front Raise", "Front Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_vorn"],
    sekundaer: ["schulter_seitlich", "brust", "trapez"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Anheben der Kurzhanteln mit fast gestreckten Armen nach vorn bis auf Schulterhöhe. Isoliert die vordere Schulter, die allerdings bei allen Druckübungen schon viel mitarbeitet.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Hanteln hängen vor den Oberschenkeln, Handflächen zeigen zum Körper oder zueinander.",
        "Spann den Bauch an und zieh die Schultern tief.",
        "Heb einen oder beide Arme mit leicht gebeugtem Ellbogen nach vorn an, bis die Hände etwa auf Schulterhöhe sind.",
        "Halte oben kurz an, ohne dich nach hinten zu lehnen.",
        "Senk die Hanteln langsam wieder ab.",
        "Arbeite beidarmig gleichzeitig oder abwechselnd links und rechts.",
        "Halte den Oberkörper während des ganzen Satzes ruhig."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus dem Rücken: Gewicht reduzieren, Bauch fest.",
        "Über Kopfhöhe heben: auf Schulterhöhe stoppen.",
        "Schultern ziehen hoch: Nacken lang halten.",
        "Zu schnelles Absenken: zwei bis drei Sekunden nach unten."
      ],
      vorteile: [
        "Gezielte Kräftigung der vorderen Schulter.",
        "Kann Defizite ausgleichen, wenn wenig gedrückt wird.",
        "Einfach und mit wenig Ausrüstung machbar."
      ],
      tipps: [
        "Wer regelmäßig Bank- und Schulterdrücken trainiert, braucht diese Übung meist nur selten.",
        "Ein neutraler Griff (Daumen oben) ist oft schulterfreundlicher.",
        "Leichte Gewichte und 10 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: einarmig im Wechsel. Schwerer: mit Hantelscheibe, Kabel oder Isohold.",
      sicherheit: "Bei Schmerzen vorn in der Schulter Bewegungsweg begrenzen oder auslassen."
    }
  },
  {
    id: "frontheben_scheibe",
    name: "Frontheben mit Hantelscheibe",
    auch: ["Plate Front Raise", "Front Plate Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_vorn"],
    sekundaer: ["brust", "trapez", "bauch", "unterarm"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Frontheben, bei dem du eine Hantelscheibe mit beiden Händen seitlich greifst und vor dem Körper anhebst. Der neutrale Griff und die beidhändige Führung machen die Übung schulterfreundlich und stabil.",
      ausfuehrung: [
        "Greif eine Hantelscheibe mit beiden Händen seitlich, etwa bei drei und neun Uhr, die Daumen zeigen nach oben.",
        "Stell dich hüftbreit hin, die Scheibe hängt vor den Oberschenkeln, Arme fast gestreckt.",
        "Spann Bauch und Gesäß an.",
        "Heb die Scheibe mit leicht gebeugten Ellbogen nach vorn an, bis sie etwa auf Augenhöhe ist.",
        "Halte oben kurz an und drück die Scheibe dabei mit den Händen leicht zusammen.",
        "Senk die Scheibe langsam ab, ohne sie an die Oberschenkel schlagen zu lassen.",
        "Wiederhole gleichmäßig und ohne Schwung aus Rücken oder Beinen."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz beim Anheben: Rippen unten, Gesäß fest.",
        "Scheibe zu schwer: Die langen Hebel machen auch 5 bis 10 kg anspruchsvoll.",
        "Schultern ziehen hoch: Schultern tief halten.",
        "Mit Schwung aus den Knien: Beine ruhig lassen."
      ],
      vorteile: [
        "Neutraler Griff ist für viele Schultern angenehm.",
        "Kräftigt vordere Schulter und den Griff.",
        "Gut für zu Hause, eine Scheibe reicht."
      ],
      tipps: [
        "Drück die Scheibe mit beiden Händen zusammen, das stabilisiert die Bewegung.",
        "Mit 10 bis 15 Wiederholungen arbeiten.",
        "Gut im Supersatz mit Seitheben als Schulterfinisher."
      ],
      varianten: "Leichter: kleinere Scheibe. Schwerer: oben kurze Halteposition oder kleine Lenkradbewegung.",
      sicherheit: "Bei Schmerzen vorn in der Schulter nur bis Schulterhöhe heben."
    }
  },
  {
    id: "frontheben_kabel",
    name: "Frontheben am Kabel",
    auch: ["Cable Front Raise", "Single-Arm Cable Front Raise", "Rope Front Raise"],
    muster: "schulter_seitlich",
    art: "kraft",
    muskeln: ["schulter_vorn"],
    sekundaer: ["schulter_seitlich", "brust", "bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Frontheben mit einem Griff oder Seil an der unteren Rolle, wobei du mit dem Rücken zum Zug stehst. Das Kabel hält die Spannung auch unten und trainiert die vordere Schulter gleichmäßiger als Hanteln.",
      ausfuehrung: [
        "Stell die Rolle ganz nach unten und hänge einen Einzelgriff oder ein Seil ein.",
        "Stell dich mit dem Rücken zum Zug, das Kabel läuft zwischen deinen Beinen durch. Fuß leicht versetzt für Halt.",
        "Die Hand oder beide Hände halten den Griff vor dem Körper, Arm leicht gebeugt.",
        "Heb den Arm nach vorn an, bis die Hand etwa auf Schulterhöhe ist.",
        "Halte oben kurz an, ohne dich zurückzulehnen.",
        "Senk den Arm langsam wieder ab, bis die Hand vor der Hüfte ist.",
        "Einarmig nach dem Satz die Seite wechseln."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zurücklehnen: Bauch fest, minimal vorneigen.",
        "Zu weit vom Zug entfernt: so stehen, dass unten schon Spannung ist.",
        "Schultern ziehen hoch: tief halten.",
        "Zu schweres Gewicht: Schwung ist ein Zeichen für zu viel Last."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Weg.",
        "Einarmig oder beidarmig mit Seil möglich.",
        "Gelenkschonend und fein steigerbar."
      ],
      tipps: [
        "Mit Seil und neutralem Griff ist die Variante oft schulterfreundlicher.",
        "Eher im Bereich 12 bis 15 Wiederholungen arbeiten.",
        "Ein kurzer Halt oben steigert die Spannung."
      ],
      varianten: "Leichter: weniger Gewicht oder Band. Schwerer: Isohold oben oder langsames Absenken.",
      sicherheit: "Bei Schmerzen vorn in der Schulter den Bewegungsweg begrenzen."
    }
  },

  // ---------- Schultergesundheit: hintere Schulter ----------
  {
    id: "reverse_flye_kabel",
    name: "Reverse Flye am Kabel",
    auch: ["Cable Reverse Flye", "Cable Reverse Fly", "Reverse Flye (Kabel/Band)", "Cable Rear Delt Fly"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "trapez", "rotatorenmanschette"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Auseinanderziehen zweier gekreuzter Kabel auf Schulterhöhe. Die gleichmäßige Kabelspannung macht die Übung zu einer der besten für die hintere Schulter, die bei vielen Menschen im Vergleich zur vorderen zu schwach ist.",
      ausfuehrung: [
        "Stell beide Rollen etwa auf Schulterhöhe oder etwas darüber und stell dich mittig zwischen die Türme.",
        "Greif das linke Kabel mit der rechten Hand und das rechte Kabel mit der linken Hand, sodass sich die Kabel vor dir kreuzen. Ohne Griffe kannst du die Kabelenden direkt fassen.",
        "Tritt einen kleinen Schritt zurück, bis Spannung auf beiden Kabeln ist. Die Arme sind vor dir gekreuzt, Ellbogen leicht gebeugt.",
        "Zieh die Arme in einem weiten Bogen seitlich nach hinten auseinander, bis sie etwa in einer Linie mit dem Körper sind.",
        "Halte die Schultern tief, die Bewegung kommt aus dem hinteren Teil der Schulter, nicht aus dem Zusammenziehen der Schulterblätter.",
        "Führ die Arme langsam zurück vor den Körper, bis sie sich wieder kreuzen.",
        "Lege die Kabel nach dem Satz kontrolliert ab."
      ],
      atmung: "Beim Auseinanderziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Schulterblätter werden stark zusammengezogen: Dann arbeitet vor allem der Rücken, Schulterblätter eher ruhig lassen.",
        "Ellbogen beugen sich und es wird ein Rudern: Ellbogenwinkel konstant halten.",
        "Schultern ziehen hoch: Nacken lang, Schultern tief.",
        "Zu schweres Gewicht: Die hintere Schulter ist klein, leichte Gewichte reichen."
      ],
      vorteile: [
        "Kräftigt die hintere Schulter, die bei viel Drücken oft zu kurz kommt.",
        "Gleichmäßige Spannung über den ganzen Weg.",
        "Unterstützt eine aufrechte Haltung und ausgewogene Schultermuskulatur.",
        "Gelenkschonend und fein steigerbar."
      ],
      tipps: [
        "Stell dir vor, du ziehst die Hände weit nach außen zu den Wänden, nicht nach hinten.",
        "Mit 12 bis 20 Wiederholungen und kurzer Pause in der Endposition arbeiten.",
        "Etwas höher eingestellte Rollen betonen die hintere Schulter oft besser."
      ],
      varianten: "Leichter: mit Band oder einarmig. Schwerer: Pause in der Endposition oder Teilwiederholungen am Satzende.",
      sicherheit: "Bei Schmerzen hinten in der Schulter den Bewegungsweg verkürzen."
    }
  },
  {
    id: "reverse_flye_kabel_einarmig",
    name: "Reverse Flye am Kabel einarmig",
    auch: ["Single-Arm Cable Reverse Flye", "One-Arm Cable Rear Delt Fly", "Cable Rear Delt Raise"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "rotatorenmanschette"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einarmiges Ziehen eines Kabels quer vor dem Körper nach außen. Weil der Arm weiter über die Körpermitte starten kann, ist der Bewegungsweg größer als bei der beidarmigen Variante und die hintere Schulter wird stark gedehnt.",
      ausfuehrung: [
        "Stell eine Rolle etwa auf Schulterhöhe und stell dich seitlich zum Turm.",
        "Greif das Kabel mit der Hand, die vom Turm weiter entfernt ist, sodass der Arm vor deiner Brust über die Körpermitte zum Turm zeigt.",
        "Halte dich mit der freien Hand am Turm fest oder leg sie an den Bauch.",
        "Zieh den Arm mit leicht gebeugtem Ellbogen in einem Bogen nach außen, bis er in einer Linie mit der Schulter ist.",
        "Halte die Endposition kurz und lass die Schulter tief.",
        "Führ den Arm langsam zurück über die Körpermitte und spür die Dehnung hinten in der Schulter.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht mit: Brust bleibt nach vorn gerichtet.",
        "Ellbogen wird stark gebeugt: Winkel konstant halten.",
        "Arm geht zu weit nach hinten: in Linie mit der Schulter stoppen.",
        "Schulter rollt nach vorn: Brust offen, Schulter tief."
      ],
      vorteile: [
        "Großer Bewegungsweg mit Dehnung der hinteren Schulter.",
        "Volle Konzentration auf eine Seite.",
        "Gleicht Seitenunterschiede aus.",
        "Mit nur einem Kabel möglich."
      ],
      tipps: [
        "Mit Manschette am Handgelenk oder ohne Griff direkt am Kabel ist die Hand entspannter.",
        "Gut im Supersatz mit einarmigem Kabel-Seitheben.",
        "12 bis 20 Wiederholungen mit ruhigem Tempo."
      ],
      varianten: "Leichter: mit Band. Schwerer: Pause in der Endposition oder langsames Zurückführen.",
      sicherheit: "Bei Schmerzen in der Dehnung den Weg über die Körpermitte verkürzen."
    }
  },
  {
    id: "reverse_flye_band",
    name: "Reverse Flye mit Band",
    auch: ["Band Reverse Flye", "Band Rear Delt Fly", "Reverse Flye (Kabel/Band)"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "trapez", "rotatorenmanschette"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Reverse Flye mit einem Band, das auf Schulterhöhe an einem festen Punkt befestigt ist. Die Bandspannung steigt zur Endposition an, wo die hintere Schulter am stärksten verkürzt ist.",
      ausfuehrung: [
        "Befestige ein Band in Schulterhöhe an einem festen Punkt, zum Beispiel einem Rack oder einer Türverankerung.",
        "Greif beide Enden und tritt zurück, bis das Band leicht gespannt ist. Arme gestreckt vor dir, Ellbogen leicht gebeugt.",
        "Stell dich hüftbreit hin, Bauch fest, Schultern tief.",
        "Zieh die Arme in einem weiten Bogen seitlich auseinander, bis sie in einer Linie mit dem Körper sind.",
        "Halte die Endposition kurz an.",
        "Führ die Arme langsam wieder nach vorn, ohne dass das Band zurückschnellt.",
        "Löse nach dem Satz die Spannung, indem du langsam nach vorn gehst."
      ],
      atmung: "Beim Auseinanderziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Rudern statt Flye: Ellbogenwinkel konstant halten.",
        "Hohlkreuz am Ende: Rippen unten, Bauch fest.",
        "Band schnellt zurück: Rückweg bewusst bremsen.",
        "Schultern hochgezogen: Schultern tief."
      ],
      vorteile: [
        "Kräftigt die hintere Schulter ohne Geräte.",
        "Ideal für zu Hause, auf Reisen und zum Aufwärmen.",
        "Unterstützt eine ausgewogene Schultermuskulatur.",
        "Sehr gelenkschonend."
      ],
      tipps: [
        "Wer keinen Befestigungspunkt hat, kann die Band Pull-Apart-Variante wählen.",
        "15 bis 25 Wiederholungen, gern als Teil des Aufwärmens.",
        "Gut als Pausenfüller zwischen Druckübungen."
      ],
      varianten: "Leichter: dünneres Band oder weiter vorn stehen. Schwerer: dickeres Band oder Isohold in der Endposition.",
      sicherheit: "Band und Befestigung vor jedem Satz prüfen."
    }
  },
  {
    id: "reverse_flye_kh_vorgebeugt",
    name: "Reverse Flye mit Kurzhanteln vorgebeugt",
    auch: ["Bent-Over Dumbbell Reverse Flye", "Bent-Over Rear Delt Raise", "DB Reverse Fly"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "trapez", "ruecken_unten"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Seitliches Anheben der Kurzhanteln aus der vorgebeugten Haltung. Ein Klassiker für die hintere Schulter, der nur Kurzhanteln braucht, aber einen stabilen, geraden Rücken verlangt.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Hanteln in den Händen, und beug dich mit geradem Rücken aus der Hüfte nach vorn, bis der Oberkörper fast waagerecht ist.",
        "Die Knie sind leicht gebeugt, die Hanteln hängen unter den Schultern, Handflächen zeigen zueinander.",
        "Heb die Arme mit leicht gebeugten Ellbogen seitlich an, bis die Oberarme in einer Linie mit dem Rücken sind.",
        "Die kleinen Finger zeigen dabei etwas nach oben, die Schultern bleiben weg von den Ohren.",
        "Halte die Endposition kurz an.",
        "Senk die Hanteln langsam wieder unter die Schultern ab.",
        "Richte dich nach dem Satz mit geradem Rücken auf."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Rücken rundet sich: aus der Hüfte beugen und den Rücken lang halten.",
        "Oberkörper richtet sich während des Satzes auf: Position halten, eventuell Stirn an eine Bank lehnen.",
        "Schwung aus dem Oberkörper: leichtere Hanteln wählen.",
        "Ellbogen beugen sich zu stark: es soll kein Rudern werden."
      ],
      vorteile: [
        "Kräftigt die hintere Schulter mit wenig Ausrüstung.",
        "Trainiert zugleich die Haltekraft des unteren Rückens.",
        "Unterstützt eine aufrechte Haltung.",
        "Gute Ergänzung zu viel Drücken."
      ],
      tipps: [
        "Leg die Stirn auf eine Bank oder einen Kasten, wenn der Rücken müde wird.",
        "Leichte Gewichte und 12 bis 20 Wiederholungen.",
        "Denk an das Bild: Hände weit nach außen schieben."
      ],
      varianten: "Leichter: sitzend vorgebeugt oder brustgestützt auf der Schrägbank. Schwerer: Pause oben oder langsames Absenken.",
      sicherheit: "Bei Rückenbeschwerden lieber die brustgestützte oder sitzende Variante wählen. Bei Bluthochdruck nicht zu lange vorgebeugt bleiben."
    }
  },
  {
    id: "reverse_flye_kh_sitzend",
    name: "Seitheben vorgebeugt im Sitzen",
    auch: ["Seated Bent-Over Rear Delt Raise", "Seated Bent-Over Reverse Flye", "Seated Rear Delt Fly"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "trapez"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Reverse Flye am Ende einer Bank sitzend, mit dem Oberkörper auf den Oberschenkeln. Die sitzende Position entlastet den unteren Rücken und verhindert Schwung.",
      ausfuehrung: [
        "Setz dich ans Ende einer Flachbank, Füße eng zusammen, die Hanteln stehen hinter den Fersen.",
        "Beug dich mit geradem Rücken nach vorn, bis die Brust fast auf den Oberschenkeln liegt.",
        "Nimm die Hanteln auf, sie hängen unter den Knien, Handflächen zeigen zueinander.",
        "Heb die Arme mit leicht gebeugten Ellbogen seitlich an, bis sie etwa waagerecht sind.",
        "Halte kurz an und lass die Schultern tief.",
        "Senk die Hanteln langsam wieder unter die Knie.",
        "Stell die Hanteln nach dem Satz auf den Boden, bevor du dich aufrichtest."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper hebt sich von den Oberschenkeln: Brust unten lassen.",
        "Rudern statt Flye: Ellbogenwinkel konstant.",
        "Zu schwere Hanteln: Die Übung braucht wenig Gewicht.",
        "Kopf in den Nacken: Blick schräg nach unten."
      ],
      vorteile: [
        "Sehr strenge Ausführung, kaum Schwung möglich.",
        "Entlastet den unteren Rücken gegenüber der stehenden Variante.",
        "Gezielte Kräftigung der hinteren Schulter.",
        "Nur Bank und Hanteln nötig."
      ],
      tipps: [
        "Gut im Supersatz mit sitzendem Seitheben, dieselbe Bank und ähnliche Gewichte.",
        "15 bis 20 Wiederholungen mit sauberer Kontrolle.",
        "Stell dir vor, du schiebst die Hanteln nach außen, nicht nach oben."
      ],
      varianten: "Leichter: einarmig. Schwerer: Pause oben oder Isohold am Ende des Satzes.",
      sicherheit: "Bei Bluthochdruck nicht zu lange in der vorgebeugten Position bleiben."
    }
  },
  {
    id: "reverse_flye_brustgestuetzt",
    name: "Reverse Flye brustgestützt auf der Schrägbank",
    auch: ["Chest-Supported Reverse Flye", "Incline Reverse Fly", "Chest-Supported Rear Delt Raise"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "trapez", "rotatorenmanschette"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Reverse Flye in Bauchlage auf einer Schrägbank. Der Oberkörper liegt fest auf, dadurch ist kein Schwung möglich und der untere Rücken bleibt komplett entlastet.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 bis 45 Grad und leg dich mit der Brust auf die Lehne, das Kinn ragt über das obere Ende.",
        "Die Füße stehen auf dem Boden oder auf der Sitzfläche, die Hanteln hängen unter den Schultern.",
        "Heb die Arme mit leicht gebeugten Ellbogen seitlich an, bis die Oberarme etwa in Linie mit dem Oberkörper sind.",
        "Die Handflächen zeigen nach unten oder zueinander, die Schultern bleiben tief.",
        "Halte die Endposition kurz an.",
        "Senk die Hanteln langsam wieder ab.",
        "Stell die Hanteln nach dem Satz ab, bevor du aufstehst."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Brust hebt sich von der Bank: Brust bleibt auf der Lehne.",
        "Schulterblätter werden stark zusammengezogen: Fokus auf den Arm, nicht auf den Rücken.",
        "Zu schweres Gewicht: lieber leichter und sauber.",
        "Kopf in den Nacken: Kinn locker über der Bank."
      ],
      vorteile: [
        "Kein Schwung möglich, sehr saubere Isolation der hinteren Schulter.",
        "Entlastet den unteren Rücken vollständig.",
        "Gute Wahl für Menschen mit Rückenbeschwerden.",
        "Einfach zu erlernen."
      ],
      tipps: [
        "Etwa 1 bis 2 kg weniger als bei der stehenden Variante.",
        "15 bis 20 Wiederholungen mit kurzer Pause oben.",
        "Mit dem Daumen nach unten (kleiner Finger oben) spürst du die hintere Schulter oft besser."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Isohold oben oder Teilwiederholungen.",
      sicherheit: "Bei Beschwerden hinten in der Schulter den Bewegungsweg kürzen."
    }
  },
  {
    id: "reverse_butterfly",
    name: "Reverse Butterfly an der Maschine",
    auch: ["Reverse Pec Deck", "Machine Reverse Flye", "Rear Delt Machine", "Reverse Fly Machine"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["oberer_ruecken", "trapez"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Reverse Flye an der Butterfly-Maschine, mit der Brust zum Polster. Die geführte Bewegung erlaubt dir, die hintere Schulter sicher und schwer bis nahe ans Muskelversagen zu trainieren.",
      ausfuehrung: [
        "Stell die Griffe der Maschine auf die hintere Position und die Sitzhöhe so ein, dass die Griffe auf Schulterhöhe sind.",
        "Setz dich mit der Brust zum Polster, Füße fest am Boden.",
        "Greif die Griffe mit gestreckten Armen, Handflächen nach unten oder zueinander.",
        "Zieh die Arme in einem weiten Bogen nach hinten, bis sie in Linie mit dem Körper sind.",
        "Halte die Endposition kurz an, ohne die Schultern hochzuziehen.",
        "Führ die Arme langsam wieder nach vorn, bis das Gewicht fast aufliegt.",
        "Lege das Gewicht nach dem Satz leise ab."
      ],
      atmung: "Beim Ziehen nach hinten ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Brust löst sich vom Polster: Brust bleibt angelehnt.",
        "Zu weit nach hinten ziehen: in Linie mit dem Körper stoppen.",
        "Schulterblätter stark zusammenziehen: Bewegung aus der Schulter heraus.",
        "Gewicht schlägt auf: kontrolliert zurückführen."
      ],
      vorteile: [
        "Gleichmäßige Spannung und sehr einfache Technik.",
        "Sicher bis nahe ans Muskelversagen trainierbar.",
        "Gezielte Kräftigung der hinteren Schulter.",
        "Gut für Drop-Sätze."
      ],
      tipps: [
        "Ein neutraler Griff (Handflächen zueinander) ist oft angenehmer für das Handgelenk.",
        "Einarmig quer im Gerät sitzend vergrößert den Bewegungsweg.",
        "12 bis 20 Wiederholungen mit langsamer Rückführung."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig, Pause in der Endposition oder Drop-Satz.",
      sicherheit: "Bei Schmerzen in der Schulter den Bewegungsweg verkürzen."
    }
  },
  {
    id: "rear_delt_flye_seitlage",
    name: "Reverse Flye in Seitlage",
    auch: ["Side-Lying Rear Delt Fly", "Side-Lying Rear Delt Raise", "Lying Rear Delt Raise"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten"],
    sekundaer: ["rotatorenmanschette", "oberer_ruecken"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel", "matte"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einarmiges Anheben einer Kurzhantel aus der Seitlage. Die Position verlagert den schwersten Punkt an den Anfang der Bewegung, also in die gedehnte Position der hinteren Schulter.",
      ausfuehrung: [
        "Leg dich seitlich auf eine Flachbank oder eine Matte, der untere Arm stützt den Kopf.",
        "Die Hantel ist in der oberen Hand und hängt vor der Brust Richtung Boden, Ellbogen leicht gebeugt.",
        "Heb den Arm in einem Bogen nach oben und hinten, bis er senkrecht oder knapp dahinter steht.",
        "Das Schulterblatt bleibt dabei ruhig, die Bewegung kommt aus der Schulter.",
        "Senk die Hantel langsam wieder vor die Brust ab und spür die Dehnung hinten in der Schulter.",
        "Halte die Hüfte und den Oberkörper stabil, ohne nach hinten zu rollen.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu weit nach hinten heben: Ab der Senkrechten fällt die Last weg, dort umkehren.",
        "Körper rollt mit: Beine leicht anwinkeln und stabil liegen.",
        "Zu schweres Gewicht: Die Dehnposition ist sehr anspruchsvoll.",
        "Ellbogen beugt sich stark: Winkel konstant halten."
      ],
      vorteile: [
        "Spannung in der gedehnten Position der hinteren Schulter.",
        "Ergänzt vorgebeugte Varianten, die oben am schwersten sind.",
        "Kein Schwung möglich.",
        "Auch zu Hause auf einer Matte machbar."
      ],
      tipps: [
        "Leichte Hanteln von 2 bis 6 kg reichen meist.",
        "Pause von einer Sekunde unten in der Dehnung.",
        "Mit einer Bank kannst du tiefer absenken als auf dem Boden."
      ],
      varianten: "Leichter: auf dem Boden mit kürzerem Weg. Schwerer: langsames Absenken oder Teilwiederholungen in der Dehnung.",
      sicherheit: "Bei Schulterinstabilität vorsichtig mit der Dehnposition sein."
    }
  },
  {
    id: "reverse_flye_schlingentrainer",
    name: "Reverse Flye am Schlingentrainer",
    auch: ["TRX Reverse Fly", "Suspension Trainer Reverse Flye", "TRX T-Fly"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "oberer_ruecken"],
    sekundaer: ["trapez", "rotatorenmanschette", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    schwerer: "y_raise_schlingentrainer",
    info: {
      kurz: "Reverse Flye mit dem eigenen Körpergewicht, bei dem du dich an den Schlingen nach hinten lehnst und mit seitlich ausgebreiteten Armen nach oben ziehst. Die Schräglage bestimmt die Schwierigkeit.",
      ausfuehrung: [
        "Stell die Schlingen etwa auf mittlere Länge und greif beide Griffe.",
        "Lehn dich mit gestrecktem Körper nach hinten, bis die Arme vor der Brust gestreckt sind und die Schlingen gespannt sind.",
        "Spann Bauch und Gesäß an, der Körper bildet eine Linie von Kopf bis Fuß.",
        "Zieh dich nach oben, indem du die Arme mit leicht gebeugten Ellbogen seitlich auseinanderführst, bis sie ein T bilden.",
        "Halte oben kurz an, die Schultern bleiben tief.",
        "Lass dich langsam zurück in die Schräglage sinken, bis die Arme wieder vor der Brust sind.",
        "Geh nach dem Satz mit kleinen Schritten zurück in den Stand."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Zurücklehnen einatmen.",
      fehler: [
        "Hüfte knickt ab: Körperlinie gerade halten.",
        "Rudern statt Flye: Ellbogen nur leicht beugen.",
        "Zu flache Position: senkrechter stehen, bis die Ausführung sauber ist.",
        "Schultern ziehen hoch: Nacken lang."
      ],
      vorteile: [
        "Kräftigt hintere Schulter und oberen Rücken mit Körpergewicht.",
        "Fordert gleichzeitig die Rumpfstabilität.",
        "Leicht dosierbar über den Winkel.",
        "Draußen oder zu Hause an einer Tür einsetzbar."
      ],
      tipps: [
        "Je weiter die Füße nach vorn gehen, desto schwerer wird es.",
        "10 bis 20 Wiederholungen mit Pause oben.",
        "Kombiniere mit Y-Raises am Schlingentrainer im Wechsel."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: Füße weiter nach vorn oder einarmig.",
      sicherheit: "Befestigung der Schlingen vor jedem Satz prüfen. Bei Schulterschmerzen Weg verkürzen."
    }
  },
  {
    id: "face_pull",
    name: "Face Pull am Kabel mit Seil",
    auch: ["Face Pull", "Cable Face Pull", "Rope Face Pull", "Standing Face Pull"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "rotatorenmanschette", "oberer_ruecken"],
    sekundaer: ["trapez", "bizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    info: {
      kurz: "Ziehen eines Seils am Kabel auf Gesichtshöhe mit gleichzeitiger Außenrotation der Schultern. Kräftigt hintere Schulter, Rotatorenmanschette und oberen Rücken und gilt als eine der wichtigsten Übungen für gesunde Schultern.",
      ausfuehrung: [
        "Stell die Rolle etwa auf Stirnhöhe oder etwas darüber und hänge ein Seil ein.",
        "Greif das Seil mit beiden Händen im Obergriff oder neutralen Griff, Daumen zeigen nach hinten zu dir.",
        "Tritt zurück, bis die Arme gestreckt sind und Spannung auf dem Seil ist. Füße hüftbreit oder leicht versetzt.",
        "Zieh das Seil Richtung Gesicht und zieh dabei die Seilenden auseinander, die Ellbogen gehen hoch und nach außen.",
        "Am Ende sind die Hände neben den Ohren, die Ellbogen auf Schulterhöhe und die Unterarme zeigen nach oben, wie bei einer Bizeps-Pose.",
        "Halte die Endposition eine Sekunde und führ das Seil dann langsam zurück, bis die Arme gestreckt sind.",
        "Halte den Oberkörper aufrecht und ruhig, ohne dich zurückzulehnen."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Zurücklehnen und mit dem Körpergewicht ziehen: Gewicht reduzieren und aufrecht stehen.",
        "Ellbogen fallen nach unten: Ellbogen auf Schulterhöhe halten.",
        "Keine Außenrotation: Am Ende die Hände bewusst nach hinten oben drehen.",
        "Zu schweres Gewicht: Die Übung lebt von Kontrolle, nicht von Last."
      ],
      vorteile: [
        "Kräftigt hintere Schulter, Rotatorenmanschette und Schulterblattmuskulatur in einer Bewegung.",
        "Gleicht viel Drücken aus und unterstützt eine aufrechte Haltung.",
        "Kann helfen, Schulterbeschwerden vorzubeugen.",
        "Für alle Leistungsstufen geeignet."
      ],
      tipps: [
        "Denk an das Bild: Seil auseinanderreißen und Hände hinter die Ohren bringen.",
        "15 bis 20 Wiederholungen mit Pause in der Endposition.",
        "Gut als Aufwärmübung vor Druckübungen oder als Abschluss jeder Oberkörpereinheit."
      ],
      varianten: "Leichter: mit Band oder im Sitzen. Schwerer: Isohold am Ende oder langsames Zurückführen.",
      sicherheit: "Bei Schulterbeschwerden das Gewicht sehr leicht wählen und schmerzfrei bleiben.",
      golf: "Der Face Pull stärkt die Muskeln, die die Schulter im Rückschwung und Durchschwung stabilisieren, und wirkt dem Rundrücken entgegen. Eine gute Haltung im Ansprechen und eine kräftige Rotatorenmanschette können Überlastungen an der Schulter vorbeugen."
    }
  },
  {
    id: "face_pull_sitzend",
    name: "Face Pull im Sitzen",
    auch: ["Seated Face Pull", "Seated Cable Face Pull"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "rotatorenmanschette", "oberer_ruecken"],
    sekundaer: ["trapez", "bizeps"],
    geraete: [["kabelzug", "bank"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Face Pull im Sitzen auf einer Bank oder am Kabelrudergerät. Weil der Unterkörper fixiert ist, kannst du nicht mit dem Körpergewicht mitziehen und die Arbeit bleibt ganz bei hinterer Schulter und Rotatorenmanschette.",
      ausfuehrung: [
        "Stell die Rolle so ein, dass das Seil im Sitzen etwa auf Augen- bis Stirnhöhe ankommt, oder nutze das Kabelrudergerät mit Seil.",
        "Setz dich aufrecht vor den Zug, Füße fest am Boden oder an den Fußstützen.",
        "Greif das Seil mit neutralem Griff, die Arme sind gestreckt und Spannung liegt auf dem Kabel.",
        "Zieh das Seil zum Gesicht und die Seilenden auseinander, die Ellbogen gehen hoch und nach außen.",
        "Am Ende zeigen die Unterarme nach oben, die Hände sind neben den Ohren.",
        "Halte die Endposition eine Sekunde und führ das Seil langsam zurück.",
        "Bleib die ganze Zeit aufrecht sitzen, ohne dich nach hinten zu werfen."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper kippt nach hinten: aufrecht bleiben, Gewicht reduzieren.",
        "Ellbogen sinken: Ellbogen mindestens auf Schulterhöhe.",
        "Zu schnell zurück: Rückweg kontrolliert.",
        "Schultern zu den Ohren: Nacken lang."
      ],
      vorteile: [
        "Strengere Ausführung als im Stehen.",
        "Kräftigt hintere Schulter, Rotatorenmanschette und oberen Rücken.",
        "Unterstützt eine aufrechte Haltung.",
        "Gut für Einsteiger, weil die Position stabil ist."
      ],
      tipps: [
        "Am Kabelrudergerät mit Seil leicht umsetzbar.",
        "15 bis 20 Wiederholungen mit Halt am Ende.",
        "Gut als Abschluss jeder Zugeinheit."
      ],
      varianten: "Leichter: weniger Gewicht oder Band. Schwerer: Isohold oder langsames Zurückführen.",
      sicherheit: "Bei Schulterbeschwerden leicht beginnen und schmerzfrei bleiben.",
      golf: "Die sitzende Variante trainiert gezielt die Schultermuskeln, die im Schwung für Stabilität sorgen, ohne dass der Rücken ausweicht. Eine kräftige hintere Schulter und Rotatorenmanschette unterstützen eine gute Haltung beim Ansprechen und können Schulterüberlastungen vorbeugen."
    }
  },
  {
    id: "face_pull_band",
    name: "Face Pull mit Band",
    auch: ["Band Face Pull", "Resistance Band Face Pull"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "rotatorenmanschette", "oberer_ruecken"],
    sekundaer: ["trapez"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    info: {
      kurz: "Face Pull mit einem Widerstandsband, das auf Kopfhöhe befestigt ist. Ideal für zu Hause, auf Reisen und als Aufwärmübung vor dem Training oder einer Golfrunde.",
      ausfuehrung: [
        "Befestige ein Band auf Stirnhöhe an einem festen Punkt, zum Beispiel an einem Rack oder einer Türverankerung.",
        "Greif beide Bandenden mit den Daumen nach hinten zu dir und tritt zurück, bis das Band gespannt ist.",
        "Zieh das Band Richtung Gesicht und die Hände dabei auseinander, die Ellbogen gehen hoch und nach außen.",
        "Am Ende zeigen die Unterarme nach oben, die Hände sind neben den Ohren.",
        "Halte die Endposition zwei Sekunden an.",
        "Führ das Band langsam zurück, bis die Arme gestreckt sind.",
        "Löse nach dem Satz die Spannung, indem du nach vorn gehst."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen sinken: auf Schulterhöhe halten.",
        "Band schnellt zurück: Rückweg bremsen.",
        "Hohlkreuz: Rippen unten, Bauch fest.",
        "Keine Außenrotation am Ende: Hände nach hinten oben drehen."
      ],
      vorteile: [
        "Kräftigt hintere Schulter und Rotatorenmanschette ohne Geräte.",
        "Sehr gut zum Aufwärmen der Schultern.",
        "Unterstützt eine aufrechte Haltung.",
        "Überall einsetzbar."
      ],
      tipps: [
        "Zwei bis drei Sätze mit 15 bis 25 Wiederholungen vor jedem Oberkörpertraining oder vor der Runde.",
        "Längeres Halten am Ende verstärkt den Effekt auf die Außenrotatoren.",
        "Mit einem Band mit Griffen ist die Ausführung angenehmer."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder längere Haltezeit.",
      sicherheit: "Befestigung des Bandes vor jedem Satz prüfen.",
      golf: "Als kurzes Aufwärmen vor der Runde aktiviert der Band Face Pull die Schultermuskeln, die den Schwung stabilisieren. Regelmäßig trainiert unterstützt er eine aufrechte Haltung über dem Ball und kann Schulterbeschwerden durch einseitige Belastung vorbeugen."
    }
  },
  {
    id: "band_pull_apart",
    name: "Band Pull-Apart",
    auch: ["Band Pull-Apart", "Band Pull Apart", "Bänder auseinanderziehen"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "oberer_ruecken"],
    sekundaer: ["trapez", "rotatorenmanschette"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    info: {
      kurz: "Auseinanderziehen eines Bandes vor der Brust mit gestreckten Armen. Eine einfache, sehr wirksame Übung für hintere Schulter und oberen Rücken, die sich ideal zum Aufwärmen und für viele Wiederholungen eignet.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte ein leichtes Band mit beiden Händen schulterbreit im Obergriff vor der Brust, Arme gestreckt auf Schulterhöhe.",
        "Zieh die Schultern tief und spann den Bauch leicht an.",
        "Zieh das Band auseinander, indem du die Arme mit leicht gebeugten Ellbogen seitlich nach außen führst.",
        "Führe die Bewegung, bis das Band die Brust fast berührt und die Arme ein T bilden.",
        "Halte die Endposition eine Sekunde und spür die Arbeit zwischen den Schulterblättern und hinten an der Schulter.",
        "Führe die Arme langsam wieder zusammen, ohne die Spannung ganz zu lösen.",
        "Wiederhole gleichmäßig, ohne mit dem Kopf nach vorn zu schieben."
      ],
      atmung: "Beim Auseinanderziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Schultern ziehen hoch: Schultern bewusst tief halten.",
        "Hohlkreuz am Ende: Rippen unten, Bauch fest.",
        "Ellbogen stark gebeugt: Arme fast gestreckt lassen.",
        "Band zu stark: Wenn du das Band nicht bis zur Brust bekommst, ein leichteres wählen."
      ],
      vorteile: [
        "Kräftigt hintere Schulter und oberen Rücken mit minimaler Ausrüstung.",
        "Ideal zum Aufwärmen vor Druckübungen.",
        "Unterstützt eine aufrechte Haltung, gerade bei viel Sitzen.",
        "Für viele Wiederholungen und häufiges Training geeignet."
      ],
      tipps: [
        "Je enger du greifst, desto schwerer wird es.",
        "Viele Trainer empfehlen über die Woche verteilt 100 und mehr Wiederholungen, zum Beispiel zwischen Sätzen.",
        "Dreh die Daumen leicht nach außen, um die Außenrotatoren stärker einzubeziehen."
      ],
      varianten: "Leichter: dünneres Band oder breiter greifen. Schwerer: enger greifen, dickeres Band oder Isohold am Ende.",
      sicherheit: "Band vor dem Training auf Risse prüfen."
    }
  },
  {
    id: "band_pull_apart_untergriff",
    name: "Band Pull-Apart im Untergriff",
    auch: ["Supinated Band Pull-Apart", "Underhand Band Pull-Apart"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "rotatorenmanschette", "oberer_ruecken"],
    sekundaer: ["trapez"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Band Pull-Apart mit Handflächen nach oben. Der Untergriff dreht die Schultern nach außen, betont dadurch die Außenrotatoren und den unteren Teil des Trapezmuskels stärker als der Obergriff.",
      ausfuehrung: [
        "Halte ein leichtes Band schulterbreit im Untergriff vor dem Körper, Handflächen zeigen nach oben, Arme gestreckt auf Brusthöhe.",
        "Zieh die Schultern tief und richte dich auf.",
        "Zieh das Band auseinander, indem du die Arme seitlich nach außen und leicht nach unten führst.",
        "Am Ende sind die Arme etwas unterhalb der Schulterhöhe und die Schulterblätter bewegen sich nach hinten unten.",
        "Halte die Endposition eine Sekunde.",
        "Führe die Arme langsam wieder zusammen.",
        "Wiederhole gleichmäßig, die Handflächen bleiben immer nach oben gedreht."
      ],
      atmung: "Beim Auseinanderziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Handflächen drehen sich nach innen: Untergriff bewusst halten.",
        "Hohlkreuz: Bauch fest, Rippen unten.",
        "Schultern hochgezogen: Schulterblätter nach hinten unten.",
        "Zu starkes Band: leichteres Band wählen."
      ],
      vorteile: [
        "Betont Außenrotatoren und unteren Trapez.",
        "Ergänzt den klassischen Pull-Apart mit anderem Schwerpunkt.",
        "Gut zum Aufwärmen der Schultern.",
        "Unterstützt eine aufrechte Haltung."
      ],
      tipps: [
        "Im Wechsel mit Obergriff und Diagonal-Variante für eine vollständige Schulteraktivierung.",
        "15 bis 25 Wiederholungen.",
        "Stell dir vor, du steckst die Schulterblätter in die hinteren Hosentaschen."
      ],
      varianten: "Leichter: breiter greifen. Schwerer: enger greifen oder dickeres Band.",
      sicherheit: "Bei Schmerzen in der Außenrotation leichter beginnen und schmerzfrei bleiben."
    }
  },
  {
    id: "band_pull_apart_diagonal",
    name: "Band Pull-Apart diagonal",
    auch: ["Diagonal Band Pull-Apart", "Band Pull-Apart Diagonal", "Cross-Body Band Pull-Apart"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "oberer_ruecken"],
    sekundaer: ["trapez", "rotatorenmanschette"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    info: {
      kurz: "Pull-Apart, bei dem ein Arm schräg nach oben und der andere schräg nach unten zieht. Die diagonale Linie trainiert die Schulterblattmuskulatur in unterschiedlichen Winkeln und fühlt sich dem Schwung ähnlicher an als die waagerechte Version.",
      ausfuehrung: [
        "Halte ein leichtes Band schulterbreit vor der Brust, Arme gestreckt.",
        "Zieh das Band auseinander, sodass die rechte Hand schräg nach oben außen und die linke Hand schräg nach unten außen geht.",
        "Am Ende bilden die Arme eine diagonale Linie, das Band liegt schräg vor der Brust.",
        "Halte kurz an, die Schultern bleiben tief.",
        "Führe die Arme langsam wieder zusammen.",
        "Wechsle mit jeder Wiederholung oder nach jedem Satz die Richtung.",
        "Halte den Oberkörper still, ohne mitzudrehen."
      ],
      atmung: "Beim Auseinanderziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht mit: Brust bleibt nach vorn gerichtet.",
        "Oberer Arm zieht die Schulter hoch: Schulter tief halten.",
        "Hohlkreuz: Bauch fest.",
        "Ungleiche Seiten: Beide Richtungen gleich oft üben."
      ],
      vorteile: [
        "Trainiert die Schultermuskulatur in mehreren Winkeln.",
        "Fördert die Kontrolle des Schulterblatts.",
        "Gut zum Aufwärmen.",
        "Abwechslung zum klassischen Pull-Apart."
      ],
      tipps: [
        "Teil einer Aufwärmreihe: waagerecht, Untergriff, diagonal je 10 bis 15 Wiederholungen.",
        "Ruhig und kontrolliert arbeiten.",
        "Leichtes Band reicht vollkommen."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: enger greifen.",
      sicherheit: "Bei Schmerzen über Kopf den oberen Arm nur bis Schulterhöhe führen."
    }
  },
  {
    id: "y_raise_schlingentrainer",
    name: "Y-Raise am Schlingentrainer",
    auch: ["TRX Y-Fly", "TRX Y Raise", "Suspension Trainer Y Raise"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["trapez", "schulter_hinten", "oberer_ruecken"],
    sekundaer: ["schulter_seitlich", "rotatorenmanschette", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Mit dem Körpergewicht in einer Schräglage die Arme in ein Y über den Kopf führen. Kräftigt den unteren Trapez und die hintere Schulter, die das Schulterblatt beim Anheben der Arme stabilisieren.",
      ausfuehrung: [
        "Greif die Schlingen und lehn dich mit gestrecktem Körper nach hinten, die Arme sind vor der Brust gestreckt.",
        "Spann Bauch und Gesäß an, der Körper bildet eine Linie.",
        "Führ die Arme gestreckt schräg nach oben in ein Y, bis sie neben dem Kopf sind. Dabei richtet sich der Körper auf.",
        "Die Daumen zeigen nach oben, die Schultern bleiben weg von den Ohren.",
        "Halte oben eine Sekunde lang ruhig an, ohne auszuweichen.",
        "Lass dich langsam wieder in die Schräglage sinken.",
        "Geh nach dem Satz mit kleinen Schritten zurück in den Stand."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Zurücklehnen einatmen.",
      fehler: [
        "Hohlkreuz oben: Bauch fest, Becken neutral.",
        "Ellbogen beugen: Arme fast gestreckt lassen.",
        "Schultern zu den Ohren: Schulterblätter nach hinten unten.",
        "Zu flache Position: erst aufrechter stehen."
      ],
      vorteile: [
        "Kräftigt den unteren Trapez, der oft schwach ist.",
        "Verbessert die Kontrolle des Schulterblatts über Kopf.",
        "Fordert gleichzeitig den Rumpf.",
        "Leicht dosierbar über den Winkel."
      ],
      tipps: [
        "Die Y-Variante ist schwerer als das T, mit aufrechtem Stand beginnen.",
        "8 bis 15 Wiederholungen mit kurzer Pause oben.",
        "Gut im Wechsel mit Reverse Flyes am Schlingentrainer."
      ],
      varianten: "Leichter: aufrechter stehen oder als T statt Y. Schwerer: Füße weiter vor oder langsames Absenken.",
      sicherheit: "Befestigung prüfen. Bei Schmerzen über Kopf nur bis Schulterhöhe heben."
    }
  },
  {
    id: "ytw",
    name: "Y-T-W im Liegen",
    auch: ["Prone Y-T-W", "YTW Raises", "Y T W Raises", "Blackburns"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "oberer_ruecken", "trapez"],
    sekundaer: ["rotatorenmanschette", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    schwerer: "ytw_schraegbank",
    info: {
      kurz: "Drei Armpositionen in Bauchlage hintereinander: Y, T und W. Kräftigt die Schulterblattmuskeln und Außenrotatoren ohne Geräte und eignet sich hervorragend zum Aufwärmen und für eine bessere Haltung.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Stirn liegt auf einem kleinen Handtuch, die Beine sind lang.",
        "Y: Streck die Arme schräg nach vorn oben in ein Y, Daumen zeigen nach oben. Heb die Arme einige Zentimeter vom Boden, halte kurz und senk sie ab.",
        "T: Streck die Arme seitlich zu einem T, Daumen nach oben. Heb sie an, zieh die Schulterblätter sanft zusammen, halte kurz und senk sie ab.",
        "W: Beug die Ellbogen, die Hände sind auf Kopfhöhe, sodass die Arme ein W bilden. Heb Ellbogen und Hände an und dreh die Hände dabei leicht nach oben.",
        "Mach jede Position mit der vorgegebenen Wiederholungszahl, dann die nächste.",
        "Halte den Kopf in Verlängerung der Wirbelsäule, der Blick geht zum Boden.",
        "Arbeite langsam, mit einer kurzen Pause oben."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Kopf in den Nacken: Stirn nah am Boden, Nacken lang.",
        "Schultern ziehen zu den Ohren: Schulterblätter nach hinten unten.",
        "Starkes Hohlkreuz: Beine und Bauch locker anspannen, nur die Arme heben.",
        "Zu schnell: Langsam heben und halten."
      ],
      vorteile: [
        "Kräftigt unteren und mittleren Trapez, hintere Schulter und Außenrotatoren.",
        "Verbessert die Kontrolle des Schulterblatts.",
        "Unterstützt eine aufrechte Haltung.",
        "Ohne Geräte überall machbar."
      ],
      tipps: [
        "8 bis 12 Wiederholungen je Buchstabe.",
        "Wenn es leicht wird, kleine Hanteln oder die Schrägbank-Variante nutzen.",
        "Gut als Aufwärmprogramm vor jedem Oberkörpertraining oder vor der Golfrunde zu Hause."
      ],
      varianten: "Leichter: kürzere Haltezeit oder nur T und W. Schwerer: mit kleinen Hanteln oder auf der Schrägbank.",
      sicherheit: "Bei Rückenbeschwerden ein Kissen unter den Bauch legen.",
      golf: "Y-T-W stärkt die Muskeln, die das Schulterblatt in Position halten. Eine stabile Schulterblattposition hilft, den Schläger im Rückschwung kontrolliert zu führen, und unterstützt eine aufrechte Haltung beim Ansprechen."
    }
  },
  {
    id: "ytw_schraegbank",
    name: "Y-T-W auf der Schrägbank mit Kurzhanteln",
    auch: ["Incline Y-T-W", "Incline YTW Raises", "Chest-Supported YTW"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "trapez", "oberer_ruecken"],
    sekundaer: ["rotatorenmanschette", "schulter_seitlich"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Y-, T- und W-Bewegungen in Bauchlage auf einer Schrägbank mit leichten Kurzhanteln. Durch die Schräglage hängen die Arme frei und der Bewegungsweg ist größer als auf dem Boden.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 bis 45 Grad und leg dich mit der Brust auf die Lehne, das Kinn über dem oberen Ende.",
        "Nimm sehr leichte Kurzhanteln, die Arme hängen senkrecht nach unten.",
        "Y: Heb die gestreckten Arme schräg nach vorn oben bis auf Kopfhöhe, Daumen nach oben. Langsam absenken.",
        "T: Heb die Arme seitlich bis auf Schulterhöhe, Daumen nach oben. Langsam absenken.",
        "W: Zieh die Ellbogen gebeugt nach hinten und dreh dann die Unterarme nach oben, bis die Arme ein W bilden. Zurück in die Ausgangsposition.",
        "Mach alle Wiederholungen einer Position, dann die nächste.",
        "Stell die Hanteln nach dem Satz ab, bevor du aufstehst."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu schwere Hanteln: Schon 1 bis 3 kg reichen.",
        "Brust löst sich von der Bank: Brust bleibt aufliegen.",
        "Schultern ziehen hoch: Schulterblätter nach hinten unten.",
        "Schwung: Langsam heben und oben halten."
      ],
      vorteile: [
        "Größerer Bewegungsweg als im Liegen am Boden.",
        "Kräftigt Schulterblattmuskulatur und Außenrotatoren.",
        "Unterstützt Schultergesundheit und Haltung.",
        "Brust auf der Bank entlastet den unteren Rücken."
      ],
      tipps: [
        "6 bis 10 Wiederholungen je Buchstabe.",
        "Als Aufwärmrunde vor Druckübungen sehr sinnvoll.",
        "Bei sehr leichten Gewichten auch Wasserflaschen nutzbar."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: etwas mehr Gewicht oder längere Haltezeit oben.",
      sicherheit: "Bei Schulterschmerzen über Kopf das Y weglassen.",
      golf: "Die Übung stärkt die Muskeln um das Schulterblatt, die beim Schwung für eine stabile Schulterposition sorgen. Das kann die Kontrolle im Rückschwung verbessern und Schulterbeschwerden vorbeugen."
    }
  },
  {
    id: "prone_trap_raise",
    name: "Prone Trap Raise",
    auch: ["Prone Trap Raise", "Incline Prone Y Raise", "Lower Trap Raise"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["trapez", "oberer_ruecken"],
    sekundaer: ["schulter_hinten", "rotatorenmanschette", "schulter_seitlich"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Anheben der Arme in ein Y in Bauchlage auf einer Schrägbank. Zielt vor allem auf den unteren Trapezmuskel, der das Schulterblatt nach unten zieht und dreht und für gesunde Überkopfbewegungen wichtig ist.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 bis 45 Grad und leg dich mit der Brust auf die Lehne, die Füße stehen auf dem Boden.",
        "Nimm sehr leichte Kurzhanteln oder Scheiben, die Arme hängen senkrecht, Daumen zeigen nach oben.",
        "Zieh die Schulterblätter zuerst leicht nach hinten unten.",
        "Heb die gestreckten Arme schräg nach vorn oben in ein Y, bis sie etwa in einer Linie mit dem Körper sind.",
        "Halte oben eine Sekunde an und spür die Arbeit unterhalb der Schulterblätter.",
        "Senk die Arme langsam wieder ab.",
        "Halte den Nacken lang und die Brust auf der Bank."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schultern ziehen zu den Ohren: Dann arbeitet der obere Trapez, Schultern nach unten ziehen.",
        "Zu viel Gewicht: 1 bis 4 kg reichen meist.",
        "Brust hebt sich: aufliegen lassen.",
        "Arme gehen zu weit zur Seite: Y bleibt etwa 30 Grad von der Körperlinie weg."
      ],
      vorteile: [
        "Gezielte Kräftigung des unteren Trapezmuskels.",
        "Verbessert die Aufwärtsrotation und Stabilität des Schulterblatts.",
        "Unterstützt gesunde Überkopfbewegungen.",
        "Ergänzt Druck- und Zugübungen sinnvoll."
      ],
      tipps: [
        "Stell dir vor, die Schulterblätter rutschen in die hinteren Hosentaschen, während die Arme nach vorn gehen.",
        "12 bis 15 Wiederholungen mit Halt oben.",
        "Wenn du die Übung nur im Nacken spürst, das Gewicht weglassen."
      ],
      varianten: "Leichter: ohne Gewicht oder flacher auf dem Boden. Schwerer: Pause von drei Sekunden oben.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur so hoch heben, wie es schmerzfrei geht."
    }
  },
  {
    id: "schwimmer_bauchlage",
    name: "Schwimmer in Bauchlage",
    auch: ["Prone Swimmers", "Prone Swimmer", "Floor Swimmers"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["trapez", "rotatorenmanschette", "schulter_hinten"],
    sekundaer: ["oberer_ruecken", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "ytw",
    info: {
      kurz: "In Bauchlage führst du die Arme schwebend von über dem Kopf zu den Hüften und zurück, wie ein Brustschwimmzug in Zeitlupe. Trainiert die Kontrolle des Schulterblatts und die Außenrotation über den ganzen Bewegungsweg.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Stirn liegt auf einem kleinen Handtuch, die Arme sind über dem Kopf ausgestreckt.",
        "Heb die Arme einige Zentimeter vom Boden, Daumen zeigen nach oben.",
        "Führ die Arme in einem großen Bogen seitlich nach unten, ohne den Boden zu berühren.",
        "Kurz vor der Hüfte drehst du die Handflächen nach oben und legst die Handrücken auf den unteren Rücken oder lässt sie schweben.",
        "Führ die Arme auf demselben Weg zurück über den Kopf.",
        "Arbeite langsam, etwa vier Sekunden pro Richtung.",
        "Halte die Stirn nah am Boden und den Nacken lang."
      ],
      atmung: "Ruhig und gleichmäßig atmen, etwa einen Atemzug pro Richtung.",
      fehler: [
        "Arme berühren den Boden: schwebend arbeiten, Bewegungsweg notfalls kleiner.",
        "Kopf hebt sich: Stirn bleibt am Handtuch.",
        "Schultern zu den Ohren: Schulterblätter nach unten.",
        "Zu schnell: Langsamkeit ist die Schwierigkeit."
      ],
      vorteile: [
        "Trainiert die Schulterblattmuskeln in vielen Winkeln.",
        "Verbessert Beweglichkeit und Kontrolle der Schulter zugleich.",
        "Ohne Geräte machbar.",
        "Gute Aufwärmübung."
      ],
      tipps: [
        "6 bis 10 langsame Wiederholungen reichen.",
        "Wenn die Arme oben nicht vom Boden gehen, ist das normal: mit der Zeit wird es besser.",
        "Kombiniere mit Y-T-W für ein Schulterprogramm zu Hause."
      ],
      varianten: "Leichter: kleinerer Bewegungsweg. Schwerer: leichte Gewichte von 0,5 bis 1 kg.",
      sicherheit: "Bei Schmerzen in der Schulter den Bewegungsweg verkleinern."
    }
  },
  {
    id: "aussenrotation",
    name: "Außenrotation mit Band",
    auch: ["Band External Rotation", "Banded External Rotation", "Resistance Band External Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_hinten"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Drehen des Unterarms nach außen gegen ein Band, der Ellbogen bleibt seitlich am Körper. Kräftigt die Außenrotatoren der Rotatorenmanschette, die den Oberarmkopf in der Pfanne zentrieren.",
      ausfuehrung: [
        "Befestige ein leichtes Band auf Ellbogenhöhe und stell dich seitlich dazu, die arbeitende Hand ist die vom Befestigungspunkt entfernte.",
        "Greif das Band, beug den Ellbogen auf 90 Grad und leg den Oberarm seitlich an den Körper. Ein eingerolltes Handtuch zwischen Ellbogen und Rumpf hilft.",
        "Der Unterarm zeigt nach vorn bis leicht vor den Bauch.",
        "Dreh den Unterarm nach außen, der Ellbogen bleibt dabei am Körper wie an einem Scharnier.",
        "Geh so weit nach außen, wie es ohne Ausweichen des Oberkörpers geht, meist etwa 45 bis 60 Grad.",
        "Halte kurz und führ den Unterarm langsam zurück.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Ausdrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen löst sich vom Körper: Handtuch einklemmen und halten.",
        "Oberkörper dreht mit: Brust bleibt nach vorn.",
        "Handgelenk knickt ab: Handgelenk gerade lassen.",
        "Zu starkes Band: Die Rotatorenmanschette braucht leichten Widerstand."
      ],
      vorteile: [
        "Kräftigt die Außenrotatoren, die das Schultergelenk stabilisieren.",
        "Gleicht die oft stärkeren Innenrotatoren aus.",
        "Kann helfen, Schulterbeschwerden vorzubeugen.",
        "Überall mit einem Band machbar."
      ],
      tipps: [
        "15 bis 25 Wiederholungen mit langsamem Rückweg.",
        "Gut als Aufwärmübung oder an trainingsfreien Tagen.",
        "Die Bewegung soll sich anstrengend, aber nie schmerzhaft anfühlen."
      ],
      varianten: "Leichter: dünneres Band oder näher am Befestigungspunkt stehen. Schwerer: dickeres Band, 90/90-Position oder Isohold außen.",
      sicherheit: "Bei akuten Schulterbeschwerden die Übung nur schmerzfrei ausführen und Beschwerden abklären lassen.",
      golf: "Die Außenrotatoren stabilisieren die Schulter im Rückschwung und bremsen den Arm nach dem Treffmoment ab. Kräftige Außenrotatoren können Überlastungen der Schulter durch den häufig wiederholten Schwung vorbeugen."
    }
  },
  {
    id: "aussenrotation_kabel",
    name: "Außenrotation am Kabel",
    auch: ["Cable External Rotation", "Standing Cable External Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_hinten"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Außenrotation mit dem Ellbogen am Körper gegen den Kabelzug. Das Kabel gibt einen gleichmäßigen, fein steigerbaren Widerstand über den ganzen Weg, anders als das Band, das außen am stärksten zieht.",
      ausfuehrung: [
        "Stell die Rolle auf Ellbogenhöhe und hänge einen Einzelgriff ein.",
        "Stell dich seitlich zum Zug und greif den Griff mit der äußeren Hand.",
        "Beug den Ellbogen auf 90 Grad, der Oberarm liegt seitlich am Körper, eventuell mit Handtuch zwischen Arm und Rumpf.",
        "Dreh den Unterarm nach außen, der Ellbogen bleibt fest an der Seite.",
        "Geh bis etwa 45 bis 60 Grad nach außen, so weit es ohne Ausweichen geht.",
        "Führ den Unterarm langsam zurück vor den Bauch.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Ausdrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen wandert nach außen oder vorn: Handtuch einklemmen.",
        "Oberkörper dreht weg: Hüfte und Brust nach vorn.",
        "Zu viel Gewicht: kleinste Stufen nutzen.",
        "Schulter rollt nach vorn: Brust offen halten."
      ],
      vorteile: [
        "Gleichmäßiger Widerstand über den ganzen Weg.",
        "Fein steigerbar über kleine Gewichtsstufen.",
        "Kräftigt die Außenrotatoren gezielt.",
        "Gut für den Aufbau nach längeren Pausen."
      ],
      tipps: [
        "12 bis 20 Wiederholungen mit langsamem Rückweg.",
        "Viele Kabeltürme haben zu große Sprünge, dann mit Band oder Kurzhantel in Seitlage arbeiten.",
        "Direkt vor Druckübungen als Aufwärmen geeignet."
      ],
      varianten: "Leichter: Band. Schwerer: 90/90-Position oder Pause außen.",
      sicherheit: "Nur im schmerzfreien Bereich arbeiten. Bei anhaltenden Beschwerden ärztlich oder physiotherapeutisch abklären lassen.",
      golf: "Kräftige Außenrotatoren stabilisieren die Schulter im Rückschwung und beim Abbremsen nach dem Treffmoment. Das kann die Belastbarkeit für viele Schwünge pro Runde und Training verbessern."
    }
  },
  {
    id: "aussenrotation_seitlage",
    name: "Außenrotation in Seitlage mit Kurzhantel",
    auch: ["Side-Lying External Rotation", "Side-Lying Dumbbell External Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_hinten"],
    geraete: [["kurzhantel", "matte"], ["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Außenrotation mit einer leichten Kurzhantel in Seitlage. In Studien zeigt diese Variante eine hohe Aktivierung der hinteren Rotatorenmanschette, sie ist einfach und braucht nur eine kleine Hantel.",
      ausfuehrung: [
        "Leg dich auf die Seite, der untere Arm stützt den Kopf, die Knie sind leicht angewinkelt.",
        "Leg ein eingerolltes Handtuch zwischen den oberen Ellbogen und den Rumpf.",
        "Nimm die Hantel in die obere Hand, der Ellbogen ist 90 Grad gebeugt und liegt am Handtuch, der Unterarm liegt vor dem Bauch.",
        "Dreh den Unterarm nach oben, bis er etwa senkrecht steht oder etwas darüber, der Ellbogen bleibt am Handtuch.",
        "Halte die Endposition eine Sekunde lang ruhig an.",
        "Senk die Hantel langsam wieder vor den Bauch.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Hochdrehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper rollt nach hinten: stabil auf der Seite liegen.",
        "Ellbogen hebt sich vom Handtuch: Ellbogen bleibt liegen.",
        "Zu schwere Hantel: 1 bis 4 kg sind meist richtig.",
        "Zu schnell: Langsam heben und senken."
      ],
      vorteile: [
        "Gezielte Kräftigung der hinteren Rotatorenmanschette.",
        "Kaum Ausweichbewegungen möglich.",
        "Nur eine kleine Hantel nötig.",
        "Häufig in der Physiotherapie eingesetzt."
      ],
      tipps: [
        "15 bis 20 Wiederholungen mit Halt oben.",
        "Das Handtuch hält den Oberarm in einer günstigen Position und verhindert Ausweichbewegungen.",
        "Am Ende des Trainings oder zu Hause an trainingsfreien Tagen gut einzubauen."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: etwas mehr Gewicht oder langsames Absenken über vier Sekunden.",
      sicherheit: "Bei akuten Beschwerden nur schmerzfrei üben und Beschwerden abklären lassen."
    }
  },
  {
    id: "aussenrotation_90_90",
    name: "Außenrotation in 90/90-Position",
    auch: ["90/90 External Rotation", "Abducted External Rotation", "Band 90/90 External Rotation", "Cable 90/90 External Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_hinten", "trapez"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Außenrotation mit dem Oberarm seitlich auf Schulterhöhe und 90 Grad gebeugtem Ellbogen. Trainiert die Rotatorenmanschette in der Position, in der sie bei Würfen, Schlägen und Überkopfbewegungen am meisten gefordert ist.",
      ausfuehrung: [
        "Befestige ein Band oder stell den Kabelzug auf Schulterhöhe und stell dich davor, mit dem Gesicht zum Befestigungspunkt.",
        "Heb den Oberarm seitlich auf Schulterhöhe, der Ellbogen ist 90 Grad gebeugt, der Unterarm zeigt nach vorn zum Zug.",
        "Halte den Oberarm waagerecht und etwas vor der Körperebene, das ist schulterfreundlicher.",
        "Dreh den Unterarm nach oben, bis er senkrecht steht, der Ellbogen bleibt auf derselben Höhe.",
        "Halte oben eine Sekunde lang ruhig an, ohne auszuweichen.",
        "Führ den Unterarm langsam wieder nach vorn bis etwa waagerecht zurück.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Hochdrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen sinkt ab: Oberarm auf Schulterhöhe halten.",
        "Hohlkreuz beim Hochdrehen: Bauch fest, Rippen unten.",
        "Zu weit nach hinten drehen: senkrechter Unterarm reicht.",
        "Zu viel Widerstand: Die Position ist anspruchsvoll, leicht beginnen."
      ],
      vorteile: [
        "Trainiert die Außenrotatoren in sportnaher Position.",
        "Wichtig für Sportarten mit Schlag- und Wurfbewegungen.",
        "Verbessert die Stabilität der Schulter über Kopf.",
        "Fordert auch den unteren Trapez."
      ],
      tipps: [
        "Erst die Variante mit Ellbogen am Körper beherrschen.",
        "12 bis 15 Wiederholungen mit Pause oben.",
        "Mit einem Isohold oben am Satzende kannst du die Belastung verlängern."
      ],
      varianten: "Leichter: Ellbogen am Körper. Schwerer: Isohold oben oder schnelle, kontrollierte Wiederholungen mit leichtem Band.",
      sicherheit: "Bei Schulterinstabilität, Schmerzen über Kopf oder nach Verletzungen nur nach Rücksprache üben.",
      golf: "Im Rückschwung dreht die rechte Schulter (bei Rechtshändern) stark nach außen, in der Position ähnlich zur 90/90-Haltung. Die Übung kräftigt die Schulter genau dort und kann die Stabilität am Ende des Rückschwungs verbessern."
    }
  },
  {
    id: "innenrotation",
    name: "Innenrotation mit Band",
    auch: ["Band Internal Rotation", "Cable Internal Rotation", "Internal Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["brust", "latissimus"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Drehen des Unterarms nach innen gegen Band oder Kabel, der Ellbogen bleibt seitlich am Körper. Kräftigt den Unterschulterblattmuskel und ergänzt das Training der Außenrotatoren.",
      ausfuehrung: [
        "Befestige ein Band oder stell den Kabelzug auf Ellbogenhöhe und stell dich seitlich dazu, die arbeitende Hand ist die dem Zug zugewandte.",
        "Beug den Ellbogen auf 90 Grad und leg den Oberarm mit einem Handtuch an den Rumpf.",
        "Der Unterarm zeigt zunächst nach außen.",
        "Dreh den Unterarm nach innen vor den Bauch, der Ellbogen bleibt am Körper.",
        "Halte die Endposition eine Sekunde lang ruhig an.",
        "Führ den Unterarm langsam zurück nach außen.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Eindrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen löst sich vom Körper: Handtuch einklemmen.",
        "Oberkörper dreht mit: Brust bleibt nach vorn.",
        "Zu schnell zurück: kontrolliert bremsen.",
        "Zu weit nach außen starten: nur so weit, wie es angenehm ist."
      ],
      vorteile: [
        "Kräftigt den vorderen Teil der Rotatorenmanschette.",
        "Ergänzt die Außenrotation für ein ausgewogenes Schultertraining.",
        "Einfach und überall machbar.",
        "Häufig Bestandteil von Physiotherapie-Programmen."
      ],
      tipps: [
        "Die Innenrotatoren sind meist schon kräftig, deshalb reicht meist ein Satz Innenrotation auf zwei Sätze Außenrotation.",
        "15 bis 20 Wiederholungen.",
        "Langsamer Rückweg nach außen trainiert die Kontrolle."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder 90/90-Position.",
      sicherheit: "Bei Beschwerden vorn in der Schulter nur schmerzfrei üben."
    }
  },
  {
    id: "aussenrotation_kh_knie",
    name: "Außenrotation sitzend mit Ellbogen auf dem Knie",
    auch: ["Seated Dumbbell External Rotation", "Seated DB External Rotation on Knee", "Elbow-on-Knee External Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_hinten", "trapez"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Außenrotation im Sitzen, bei der der Ellbogen auf dem erhöhten Knie abgestützt ist. Der Oberarm ist dabei schräg vor dem Körper angehoben, eine Zwischenstufe zwischen Außenrotation am Körper und der 90/90-Position.",
      ausfuehrung: [
        "Setz dich auf eine Bank und stell einen Fuß auf die Bank oder eine Erhöhung, sodass das Knie höher als die Hüfte ist.",
        "Leg den Ellbogen der Arbeitsseite auf das Knie, der Oberarm zeigt schräg nach vorn außen, der Ellbogen ist 90 Grad gebeugt.",
        "Die Hantel zeigt anfangs nach vorn unten, der Unterarm ist etwa waagerecht.",
        "Dreh den Unterarm nach oben, bis er senkrecht steht, der Ellbogen bleibt auf dem Knie liegen.",
        "Halte oben eine Sekunde lang ruhig an, ohne auszuweichen.",
        "Senk die Hantel langsam zurück bis zur Waagerechten oder etwas darunter.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Hochdrehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Ellbogen rutscht vom Knie: Ellbogen fest auflegen.",
        "Oberkörper lehnt sich zurück: aufrecht sitzen.",
        "Zu schnelles Absenken: gerade der Rückweg ist wichtig.",
        "Zu schwere Hantel: 2 bis 5 kg reichen meist."
      ],
      vorteile: [
        "Stabile Abstützung, dadurch gut kontrollierbar.",
        "Trainiert die Außenrotatoren in leicht angehobener Armposition.",
        "Gute Vorstufe zur 90/90-Position.",
        "Nur Hantel und Bank nötig."
      ],
      tipps: [
        "12 bis 15 Wiederholungen mit langsamem Absenken über drei Sekunden.",
        "Ein Handtuch auf dem Knie macht die Auflage angenehmer.",
        "Gut als Abschluss einer Zugeinheit."
      ],
      varianten: "Leichter: Ellbogen am Körper mit Band. Schwerer: 90/90-Position am Kabel oder Isohold oben.",
      sicherheit: "Bei Schmerzen in der Endposition den Weg verkürzen."
    }
  },
  {
    id: "cuban_press",
    name: "Cuban Press",
    auch: ["Cuban Press", "Cuban Rotation Press"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette", "schulter_hinten", "schulter_seitlich"],
    sekundaer: ["trapez", "schulter_vorn", "trizeps"],
    geraete: [["kurzhantel"], ["langhantel"], ["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Kombination aus aufrechtem Rudern, Außenrotation und Drücken über Kopf. Trainiert die Rotatorenmanschette und Schulterblattmuskeln durch einen großen Bewegungsablauf und eignet sich gut zum Aufwärmen vor Überkopfübungen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte sehr leichte Kurzhanteln oder eine leere Stange vor den Oberschenkeln, Obergriff.",
        "Zieh die Ellbogen seitlich nach oben, bis die Oberarme waagerecht sind und die Unterarme nach unten hängen.",
        "Dreh die Unterarme nach oben, bis sie senkrecht stehen, die Ellbogen bleiben auf Schulterhöhe. Das ist die 90/90-Position.",
        "Drück die Gewichte aus dieser Position nach oben, bis die Arme gestreckt sind.",
        "Senk sie wieder in die 90/90-Position ab.",
        "Dreh die Unterarme zurück nach unten und senk die Ellbogen bis zur Ausgangsposition.",
        "Arbeite langsam und kontrolliert in allen drei Abschnitten."
      ],
      atmung: "Beim Hochziehen und Drücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu viel Gewicht: Die Außenrotation ist das schwächste Glied, sehr leicht beginnen.",
        "Ellbogen sinken beim Drehen: Ellbogen auf Schulterhöhe halten.",
        "Hohlkreuz beim Drücken: Bauch fest.",
        "Schultern ziehen hoch: Nacken lang."
      ],
      vorteile: [
        "Trainiert Rotatorenmanschette, hintere und seitliche Schulter in einem Ablauf.",
        "Bereitet die Schulter auf Drücken über Kopf vor.",
        "Verbessert die Koordination von Schulterblatt und Oberarm.",
        "Mit sehr leichten Gewichten gut als Aufwärmen."
      ],
      tipps: [
        "Mit 1 bis 3 kg je Hand oder der leeren Stange beginnen.",
        "8 bis 12 langsame Wiederholungen.",
        "Kannst du die 90/90-Position nicht schmerzfrei erreichen, nur Rudern und Rotation ohne Drücken üben."
      ],
      varianten: "Leichter: ohne Gewicht oder ohne Drücken. Schwerer: etwas mehr Gewicht oder Pause in der 90/90-Position.",
      sicherheit: "Bei Impingement-Beschwerden oder Schmerzen beim aufrechten Rudern auslassen."
    }
  },
  {
    id: "schulterblatt_liegestuetz_wand",
    name: "Schulterblatt-Liegestütz an der Wand",
    auch: ["Wall Scapular Push-Up", "Wall Scap Push-Up", "Wall Push-Up Plus"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["oberer_ruecken", "rotatorenmanschette"],
    sekundaer: ["brust", "schulter_vorn"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    schwerer: "schulterblatt_liegestuetz",
    info: {
      kurz: "Schulterblätter im Stand an der Wand abwechselnd zusammenführen und auseinanderschieben, ohne die Arme zu beugen. Eine sanfte Einstiegsübung, die den vorderen Sägemuskel aktiviert und die Schulterblattkontrolle schult.",
      ausfuehrung: [
        "Stell dich etwa eine Armlänge vor eine Wand und leg die Hände schulterbreit auf Schulterhöhe an die Wand.",
        "Die Arme sind gestreckt, der Körper bildet eine leichte Schräglage, Bauch fest.",
        "Lass die Brust ein Stück Richtung Wand sinken, indem die Schulterblätter hinten zusammengleiten. Die Arme bleiben gestreckt.",
        "Drück dich dann von der Wand weg, indem du die Schulterblätter nach außen um den Brustkorb schiebst, bis der obere Rücken leicht rund wird.",
        "Halte die Endposition eine Sekunde.",
        "Wiederhole langsam im Wechsel.",
        "Der Kopf bleibt in Verlängerung der Wirbelsäule."
      ],
      atmung: "Beim Zusammenführen einatmen, beim Wegdrücken ausatmen.",
      fehler: [
        "Ellbogen beugen sich: Arme bleiben gestreckt.",
        "Bewegung kommt aus dem unteren Rücken: Bauch fest, nur die Schulterblätter bewegen sich.",
        "Schultern ziehen hoch: Schultern tief.",
        "Kopf schiebt nach vorn: Nacken lang."
      ],
      vorteile: [
        "Aktiviert den vorderen Sägemuskel sanft.",
        "Verbessert das Gefühl für die Schulterblattbewegung.",
        "Für Einsteiger und nach Beschwerden geeignet.",
        "Überall mit einer Wand machbar."
      ],
      tipps: [
        "10 bis 15 langsame Wiederholungen.",
        "Je weiter du von der Wand weggehst, desto schwerer wird es.",
        "Gut als Aufwärmen vor Liegestütz oder Bankdrücken."
      ],
      varianten: "Leichter: näher an die Wand. Schwerer: auf einer Bank abstützen oder Schulterblatt-Liegestütz am Boden.",
      sicherheit: "Bei Schmerzen in der Schulter den Bewegungsweg verkleinern."
    }
  },
  {
    id: "schulterblatt_liegestuetz",
    name: "Schulterblatt-Liegestütz",
    auch: ["Scapular Push-Up", "Scap Push-Up", "Serratus Push-Up"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["oberer_ruecken", "rotatorenmanschette"],
    sekundaer: ["brust", "bauch", "schulter_vorn"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "liegestuetz_plus",
    info: {
      kurz: "In der Liegestützposition bewegst du nur die Schulterblätter: Brust sinkt zwischen die Schultern und wird wieder weggedrückt, die Arme bleiben gestreckt. Stärkt den vorderen Sägemuskel, der das Schulterblatt am Brustkorb hält.",
      ausfuehrung: [
        "Geh in die hohe Liegestützposition, Hände unter den Schultern, Körper gerade von Kopf bis Fuß.",
        "Lass die Brust zwischen den Schultern Richtung Boden sinken, indem die Schulterblätter hinten zusammengleiten. Die Arme bleiben gestreckt.",
        "Drück dich dann aktiv vom Boden weg, die Schulterblätter gleiten auseinander und der obere Rücken wird leicht rund.",
        "Halte die obere Position eine Sekunde.",
        "Der Bewegungsweg ist klein, nur wenige Zentimeter.",
        "Halte Bauch und Gesäß fest, die Hüfte sinkt nicht ab.",
        "Wiederhole langsam und kontrolliert."
      ],
      atmung: "Beim Absinken einatmen, beim Wegdrücken ausatmen.",
      fehler: [
        "Arme beugen sich: Ellbogen bleiben gestreckt.",
        "Hüfte hängt durch: Bauch und Gesäß anspannen.",
        "Kopf hängt: Blick zum Boden, Nacken lang.",
        "Zu schnell: Langsam sinken und drücken."
      ],
      vorteile: [
        "Stärkt den vorderen Sägemuskel für eine stabile Schulterblattposition.",
        "Kann helfen, ein abstehendes Schulterblatt zu verbessern.",
        "Ohne Geräte machbar.",
        "Gute Vorbereitung auf Liegestütz und Drücken."
      ],
      tipps: [
        "10 bis 15 Wiederholungen mit Halt oben.",
        "Auf den Knien ist die Übung leichter, wenn die volle Position zu schwer ist.",
        "Denk an das Bild: Boden wegschieben."
      ],
      varianten: "Leichter: auf den Knien oder an der Wand. Schwerer: Liegestütz Plus oder mit Gewichtsweste.",
      sicherheit: "Bei Handgelenksbeschwerden auf Fäusten oder Griffen abstützen."
    }
  },
  {
    id: "liegestuetz_plus",
    name: "Liegestütz Plus",
    auch: ["Push-Up Plus", "Pushup Plus"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["brust", "oberer_ruecken", "trizeps"],
    sekundaer: ["schulter_vorn", "bauch", "rotatorenmanschette"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Ein normaler Liegestütz, an dessen Ende du dich zusätzlich weiter vom Boden wegdrückst, bis die Schulterblätter weit auseinandergleiten. Das Plus aktiviert den vorderen Sägemuskel besonders stark.",
      ausfuehrung: [
        "Geh in die hohe Liegestützposition, Hände etwas breiter als schulterbreit, Körper gerade.",
        "Senk dich kontrolliert ab, bis die Brust knapp über dem Boden ist, Ellbogen etwa 45 Grad vom Körper.",
        "Drück dich wieder nach oben, bis die Arme gestreckt sind.",
        "Jetzt kommt das Plus: Drück dich noch weiter vom Boden weg, indem die Schulterblätter um den Brustkorb nach vorn gleiten.",
        "Halte diese Position eine Sekunde, der obere Rücken ist leicht rund.",
        "Lass die Schulterblätter zurückgleiten und starte die nächste Wiederholung.",
        "Halte Bauch und Gesäß während des ganzen Satzes fest."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken und dem Plus ausatmen.",
      fehler: [
        "Das Plus wird ausgelassen: oben bewusst weiterschieben.",
        "Hüfte sinkt durch: Rumpf fest.",
        "Ellbogen weit zur Seite: etwa 45 Grad.",
        "Kopf hängt: Nacken lang."
      ],
      vorteile: [
        "Kombiniert Brust- und Trizepstraining mit Schulterblattstabilität.",
        "Starke Aktivierung des vorderen Sägemuskels.",
        "Unterstützt eine gesunde Schulterblattbewegung.",
        "Ohne Geräte machbar."
      ],
      tipps: [
        "8 bis 15 Wiederholungen mit deutlichem Plus.",
        "Auf erhöhter Unterlage (Bank) wird es leichter.",
        "Gut als Aufwärmen oder im Supersatz mit Zugübungen."
      ],
      varianten: "Leichter: auf den Knien oder mit Händen auf einer Bank. Schwerer: Füße erhöht oder mit Gewichtsweste.",
      sicherheit: "Bei Handgelenksbeschwerden Griffe nutzen. Bei Schulterschmerzen den Bewegungsweg nach unten verkürzen."
    }
  },
  {
    id: "wall_slide",
    name: "Wandrutschen",
    auch: ["Wall Slide", "Wall Slides", "Wall Angels"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["trapez", "oberer_ruecken", "rotatorenmanschette"],
    sekundaer: ["schulter_hinten", "bauch"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    schwerer: "wall_slide_faszienrolle",
    info: {
      kurz: "Mit dem Rücken an der Wand schiebst du die Arme aus der W-Position nach oben in ein Y und wieder zurück. Verbessert Schulterbeweglichkeit, Haltung und die Kontrolle des Schulterblatts beim Heben der Arme.",
      ausfuehrung: [
        "Stell dich mit dem Rücken an eine Wand, die Füße etwa eine Fußlänge vor der Wand, Knie leicht gebeugt.",
        "Gesäß, oberer Rücken und Hinterkopf berühren die Wand, der untere Rücken ist nah an der Wand, die Rippen sind unten.",
        "Leg Unterarme und Handrücken an die Wand, die Ellbogen sind etwa 90 Grad gebeugt auf Schulterhöhe (W-Position).",
        "Schieb die Arme langsam an der Wand nach oben, so weit es geht, ohne dass der Rücken sich löst oder die Arme die Wand verlassen.",
        "Zieh die Arme dann langsam wieder nach unten, die Ellbogen sinken bis knapp unter Schulterhöhe, die Schulterblätter gleiten nach hinten unten.",
        "Wiederhole langsam und kontrolliert.",
        "Wenn die Hände die Wand nicht berühren, ist das in Ordnung: nur so weit gehen, wie es sauber geht."
      ],
      atmung: "Beim Hochschieben ausatmen, beim Herunterziehen einatmen.",
      fehler: [
        "Hohlkreuz: Rippen nach unten, unterer Rücken Richtung Wand.",
        "Schultern ziehen zu den Ohren: Schulterblätter beim Hochschieben nach außen und oben drehen lassen, nicht hochziehen.",
        "Kopf schiebt nach vorn: Hinterkopf bleibt an der Wand.",
        "Zu schnell: langsam und mit voller Aufmerksamkeit."
      ],
      vorteile: [
        "Verbessert die Überkopfbeweglichkeit und die Schulterblattkontrolle.",
        "Unterstützt eine aufrechte Haltung, gerade bei viel Sitzen.",
        "Kräftigt unteren Trapez und Außenrotatoren.",
        "Ohne Geräte überall machbar."
      ],
      tipps: [
        "10 bis 15 langsame Wiederholungen.",
        "Sehr gut als Aufwärmen vor Drücken über Kopf und vor der Golfrunde.",
        "Mit einem Mini-Band um die Handgelenke kannst du die Außenrotatoren zusätzlich fordern."
      ],
      varianten: "Leichter: Abstand der Füße zur Wand vergrößern oder Arme nur bis Kopfhöhe. Schwerer: Unterarme von der Wand lösen oder Variante mit Faszienrolle.",
      sicherheit: "Bei Schmerzen in der Schulter nur im schmerzfreien Bereich bewegen.",
      golf: "Ein guter Golfschwung braucht Beweglichkeit in der Brustwirbelsäule und eine freie Schulter. Wall Slides verbessern beides und helfen, die aufrechte Position über dem Ball zu halten, statt mit rundem Rücken zu schwingen."
    }
  },
  {
    id: "wall_slide_faszienrolle",
    name: "Serratus-Wandrutschen mit Faszienrolle",
    auch: ["Foam Roller Wall Slide", "Serratus Wall Slide", "Wall Slide with Foam Roller"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["oberer_ruecken", "trapez"],
    sekundaer: ["rotatorenmanschette", "schulter_vorn", "bauch"],
    geraete: [["wand", "faszienrolle"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Mit dem Gesicht zur Wand rollst du eine Faszienrolle mit den Unterarmen nach oben. Der Druck gegen die Wand aktiviert den vorderen Sägemuskel, der das Schulterblatt beim Armheben nach oben dreht.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand und halte eine Faszienrolle waagerecht zwischen Wand und Unterarmen auf Brusthöhe.",
        "Die Unterarme sind parallel und schulterbreit, die Ellbogen 90 Grad gebeugt.",
        "Drück die Unterarme leicht gegen die Rolle, sodass die Schulterblätter nach vorn um den Brustkorb gleiten.",
        "Roll die Rolle langsam nach oben, die Arme bewegen sich in ein Y, bis die Arme fast gestreckt über dem Kopf sind.",
        "Heb oben die Unterarme kurz von der Rolle ab, wenn das ohne Ausweichen geht.",
        "Roll langsam zurück in die Ausgangsposition, der Druck gegen die Wand bleibt.",
        "Halte die Rippen unten und den Kopf in Verlängerung der Wirbelsäule."
      ],
      atmung: "Beim Hochrollen ausatmen, beim Zurückrollen einatmen.",
      fehler: [
        "Hohlkreuz oben: Bauch fest, Rippen unten.",
        "Schultern ziehen zu den Ohren: Schulterblätter nach vorn und oben gleiten lassen.",
        "Kein Druck gegen die Rolle: Die Unterarme drücken leicht, das aktiviert den Sägemuskel.",
        "Zu schnell: langsam rollen."
      ],
      vorteile: [
        "Aktiviert den vorderen Sägemuskel gezielt.",
        "Verbessert die Aufwärtsrotation des Schulterblatts.",
        "Gute Vorbereitung auf Überkopfbewegungen.",
        "Einfach und gelenkschonend."
      ],
      tipps: [
        "10 bis 12 langsame Wiederholungen.",
        "Mit einem Mini-Band um die Handgelenke fordert die Übung zusätzlich die Außenrotatoren.",
        "Sehr gut im Aufwärmen vor Schulterdrücken."
      ],
      varianten: "Leichter: kleinerer Bewegungsweg. Schwerer: Mini-Band um die Handgelenke oder Abheben oben länger halten.",
      sicherheit: "Bei Schmerzen über Kopf nur bis Kopfhöhe rollen."
    }
  },
  {
    id: "serratus_punch_liegend",
    name: "Serratus Punch in Rückenlage",
    auch: ["Supine Serratus Punch", "Dumbbell Serratus Punch", "Supine Scapular Protraction"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["oberer_ruecken"],
    sekundaer: ["brust", "schulter_vorn"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel", "matte"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "In Rückenlage drückst du eine Kurzhantel mit gestrecktem Arm ein Stück weiter zur Decke, indem du das Schulterblatt vom Boden löst. Eine klassische Übung, um den vorderen Sägemuskel gezielt zu kräftigen.",
      ausfuehrung: [
        "Leg dich auf eine Bank oder Matte und nimm eine Kurzhantel in eine oder beide Hände.",
        "Streck die Arme senkrecht über die Schultern zur Decke, Ellbogen gestreckt.",
        "Drück die Hantel weiter nach oben, indem du das Schulterblatt vom Untergrund löst. Der Arm bleibt gestreckt, die Bewegung ist nur wenige Zentimeter.",
        "Halte die obere Position eine Sekunde lang ruhig.",
        "Lass das Schulterblatt langsam zurück auf den Untergrund sinken, der Arm bleibt gestreckt.",
        "Wiederhole kontrolliert, ohne den Ellbogen zu beugen.",
        "Einarmig nach dem Satz die Seite wechseln."
      ],
      atmung: "Beim Hochschieben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Ellbogen beugt sich: Arm bleibt gestreckt.",
        "Oberkörper dreht mit: Rücken bleibt flach liegen.",
        "Zu schwere Hantel: Der Weg ist kurz, Kontrolle ist wichtiger.",
        "Schulter zieht zum Ohr: Bewegung geht zur Decke, nicht zum Kopf."
      ],
      vorteile: [
        "Gezielte Kräftigung des vorderen Sägemuskels.",
        "Verbessert die Stabilität des Schulterblatts am Brustkorb.",
        "Sehr gelenkschonend.",
        "Häufig in Physiotherapie-Programmen eingesetzt."
      ],
      tipps: [
        "12 bis 20 Wiederholungen mit Halt oben.",
        "Einarmig lässt sich die Bewegung leichter spüren.",
        "Stell dir vor, du willst mit der Hantel die Decke berühren."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: schwerere Hantel oder langsames Absenken.",
      sicherheit: "Bei Schmerzen in der Schulter das Gewicht reduzieren."
    }
  },
  {
    id: "serratus_punch_kabel",
    name: "Serratus Punch am Kabel",
    auch: ["Cable Serratus Punch", "Standing Serratus Punch", "Band Serratus Punch"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["oberer_ruecken"],
    sekundaer: ["brust", "schulter_vorn", "bauch", "schraege_bauch"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Im Stand drückst du einen Kabelgriff oder ein Band mit fast gestrecktem Arm nach vorn und schiebst dabei das Schulterblatt um den Brustkorb. Trainiert den vorderen Sägemuskel in aufrechter Haltung und fordert zusätzlich den Rumpf gegen Rotation.",
      ausfuehrung: [
        "Stell den Kabelzug auf Brusthöhe oder befestige ein Band dort und stell dich mit dem Rücken zum Zug.",
        "Nimm den Griff in eine Hand und streck den Arm nach vorn auf Schulterhöhe, sodass Spannung auf dem Kabel ist.",
        "Stell die Füße leicht versetzt, Bauch fest.",
        "Lass das Schulterblatt nach hinten gleiten, der Arm bleibt fast gestreckt und wird vom Zug nach hinten gezogen.",
        "Drück den Arm dann nach vorn wie einen langsamen Boxschlag, bis das Schulterblatt ganz um den Brustkorb nach vorn geschoben ist.",
        "Halte die Endposition eine Sekunde und lass langsam wieder zurück.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Nachvornschieben ausatmen, beim Zurückgleiten einatmen.",
      fehler: [
        "Oberkörper dreht mit: Brust bleibt nach vorn.",
        "Arm beugt sich stark: Es ist kein Drücken, nur das Schulterblatt bewegt sich.",
        "Schulter zieht zum Ohr: Schulter tief halten.",
        "Zu viel Gewicht: Kontrolle ist wichtiger."
      ],
      vorteile: [
        "Trainiert den vorderen Sägemuskel im Stehen.",
        "Fordert zusätzlich die Rumpfstabilität.",
        "Verbessert die Kontrolle des Schulterblatts beim Stoßen und Schlagen.",
        "Mit Band überall machbar."
      ],
      tipps: [
        "12 bis 15 Wiederholungen je Seite.",
        "Den Arm leicht nach oben (etwa 100 Grad) zu richten, fordert den Sägemuskel oft noch besser.",
        "Gut kombiniert mit Face Pulls für eine ausgewogene Schulterblattarbeit."
      ],
      varianten: "Leichter: Band oder weniger Gewicht. Schwerer: mehr Gewicht oder Punch schräg nach oben.",
      sicherheit: "Bei Schulterbeschwerden schmerzfrei bleiben."
    }
  },
  {
    id: "kb_arm_bar",
    name: "Kettlebell Arm Bar",
    auch: ["Kettlebell Armbar", "KB Arm Bar", "Arm Bar"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette", "schulter_hinten"],
    sekundaer: ["schraege_bauch", "oberer_ruecken", "trapez"],
    geraete: [["kettlebell", "matte"], ["kettlebell"], ["kurzhantel"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Du hältst eine Kettlebell mit gestrecktem Arm über der Schulter und rollst dich langsam aus der Rückenlage auf die Seite und in Richtung Bauch. Die Schulter muss die Last in vielen Positionen stabilisieren, gleichzeitig mobilisiert die Übung die Brustwirbelsäule.",
      ausfuehrung: [
        "Leg dich auf den Rücken und drück eine leichte Kettlebell mit einem Arm senkrecht nach oben, Arm gestreckt, Handgelenk gerade.",
        "Stell das Bein auf der Seite der Kettlebell auf, das andere Bein ist gestreckt, der freie Arm liegt über dem Kopf am Boden.",
        "Drück dich mit dem aufgestellten Bein ab und roll dich langsam zur Seite des freien Arms, der Blick bleibt auf der Kettlebell.",
        "Das aufgestellte Bein legst du über das andere, bis du fast auf dem Bauch liegst. Die Kettlebell steht weiterhin senkrecht über der Schulter.",
        "Halte diese Position, zieh die Schulter vom Ohr weg und lass die Brust Richtung Boden sinken.",
        "Halte die vorgegebene Zeit und roll dich dann kontrolliert auf demselben Weg zurück.",
        "Stell die Kettlebell in Rückenlage mit beiden Händen ab und wechsle die Seite."
      ],
      atmung: "Ruhig und tief weiteratmen, mit jedem Ausatmen etwas weiter in die Rotation sinken.",
      fehler: [
        "Arm ist nicht senkrecht: Kettlebell immer direkt über der Schulter halten.",
        "Ellbogen beugt sich: Arm bleibt gestreckt.",
        "Schulter zieht zum Ohr: Schulter tief und stabil in der Pfanne.",
        "Blick verlässt die Kettlebell: Immer auf die Last schauen."
      ],
      vorteile: [
        "Kräftigt Rotatorenmanschette und Schulterstabilisatoren in vielen Winkeln.",
        "Mobilisiert die Brustwirbelsäule in der Rotation.",
        "Verbessert das Gefühl für eine zentrierte Schulter.",
        "Gute Vorbereitung auf Turkish Get-Up und Überkopfübungen."
      ],
      tipps: [
        "Mit einer leichten Kettlebell oder Kurzhantel beginnen.",
        "20 bis 40 Sekunden halten, zwei bis drei Durchgänge je Seite.",
        "Ein Partner kann die Kettlebell anfangs anreichen und abnehmen."
      ],
      varianten: "Leichter: ohne Gewicht oder nur bis zur Seitlage rollen. Schwerer: schwerere Kettlebell oder Bottoms-up-Haltung.",
      sicherheit: "Bei Schulterinstabilität oder akuten Schmerzen nur nach Rücksprache. Nie mit einer Last über dem Gesicht üben, die du nicht sicher kontrollierst.",
      golf: "Der Arm Bar verbindet Schulterstabilität mit Rotation der Brustwirbelsäule, zwei Grundlagen eines guten Rückschwungs. Die Übung kann helfen, mehr Rotation im oberen Rücken zuzulassen, ohne dass die Schulter instabil wird."
    }
  },
  {
    id: "ball_wand_kreisen",
    name: "Ball an der Wand kreisen",
    auch: ["Wall Ball Circles", "Ball on Wall Stabilization", "Shoulder Ball Circles"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_vorn", "schulter_seitlich", "oberer_ruecken"],
    geraete: [["gymnastikball", "wand"], ["medizinball", "wand"]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Mit gestrecktem Arm drückst du einen Ball gegen die Wand und machst kleine, schnelle Kreise. Eine physiotherapeutische Übung, die die Rotatorenmanschette und die Schulterblattmuskeln durch ständige kleine Ausgleichsbewegungen trainiert.",
      ausfuehrung: [
        "Stell dich etwa eine Armlänge vor eine Wand und halte einen kleinen Gymnastikball oder Medizinball mit einer Hand auf Schulterhöhe an der Wand.",
        "Der Arm ist fast gestreckt, die Schulter bleibt tief, der Bauch ist leicht angespannt.",
        "Drück den Ball leicht gegen die Wand, sodass er nicht herunterfällt.",
        "Mach mit der Hand kleine, schnelle Kreise, etwa so groß wie ein Bierdeckel.",
        "Nach der Hälfte der Zeit die Richtung wechseln.",
        "Halte den Oberkörper ruhig, nur die Hand und die Schulter arbeiten.",
        "Wechsle nach der vorgegebenen Zeit die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Kreise zu groß: kleine, schnelle Bewegungen sind wirksamer.",
        "Schulter zieht hoch: Schulter tief halten.",
        "Ellbogen ganz durchgestreckt und verriegelt: leicht gebeugt lassen.",
        "Oberkörper wackelt mit: stabil stehen."
      ],
      vorteile: [
        "Trainiert die reaktive Stabilität der Schulter.",
        "Fördert die Ausdauer der Rotatorenmanschette.",
        "Sehr gelenkschonend und einfach.",
        "Gut als Aufwärmen oder in der Rückkehr nach Beschwerden."
      ],
      tipps: [
        "20 bis 40 Sekunden je Seite und Richtung.",
        "Höher an der Wand (über Kopf) wird die Übung anspruchsvoller.",
        "Auch Buchstaben oder Zahlen statt Kreisen sind möglich."
      ],
      varianten: "Leichter: Ball auf Brusthöhe und langsamer. Schwerer: Ball über Kopfhöhe, schwererer Ball oder auf einem Bein stehen.",
      sicherheit: "Bei Schmerzen über Kopf auf Schulterhöhe bleiben."
    }
  },

  // ---------- Nacken ----------
  {
    id: "nacken_flexion_scheibe",
    name: "Nackenbeugen mit Hantelscheibe in Rückenlage",
    auch: ["Plate Neck Curl", "Neck Flexion", "Lying Neck Flexion", "Nacken Flex./Ext."],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["bauch"],
    geraete: [["hantelscheibe", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { nacken: 2 },
    stufe: 2,
    info: {
      kurz: "In Rückenlage auf einer Bank, der Kopf über dem Ende, hebst du den Kopf mit einer Hantelscheibe auf der Stirn Richtung Brust. Kräftigt die vordere Halsmuskulatur, die für Haltung und Belastbarkeit des Nackens wichtig ist.",
      ausfuehrung: [
        "Leg dich auf den Rücken auf eine Flachbank, sodass Kopf und Hals über das Ende hinausragen.",
        "Leg ein gefaltetes Handtuch auf die Stirn und darauf eine leichte Hantelscheibe, die du mit beiden Händen festhältst.",
        "Lass den Kopf langsam nach hinten unten sinken, nur so weit, wie es angenehm ist.",
        "Heb den Kopf kontrolliert, indem du das Kinn Richtung Brust führst. Die Schultern bleiben auf der Bank.",
        "Halte oben eine Sekunde lang ruhig an und spür die Arbeit vorn am Hals.",
        "Senk den Kopf langsam wieder ab, etwa drei Sekunden lang.",
        "Leg die Scheibe nach dem Satz mit beiden Händen auf die Brust und richte dich vorsichtig auf."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen. Nicht die Luft anhalten.",
      fehler: [
        "Zu schwere Scheibe: Der Nacken reagiert empfindlich, mit 2,5 bis 5 kg beginnen.",
        "Schwung: Bewegung immer langsam und kontrolliert.",
        "Zu weit nach hinten absenken: nur in den angenehmen Bereich gehen.",
        "Schultern heben sich: Bewegung kommt nur aus dem Hals."
      ],
      vorteile: [
        "Kräftigt die vordere Halsmuskulatur gezielt.",
        "Kann die Belastbarkeit des Nackens im Sport verbessern.",
        "Ergänzt das Nackenstrecken für ein ausgewogenes Training.",
        "Einfach mit Bank und Scheibe umsetzbar."
      ],
      tipps: [
        "15 bis 25 Wiederholungen mit langsamem Tempo.",
        "Ein Handtuch zwischen Stirn und Scheibe schützt die Haut.",
        "Mit ein bis zwei Sätzen pro Woche starten, der Nacken braucht Gewöhnung."
      ],
      varianten: "Leichter: ohne Gewicht oder nur mit der Hand als Widerstand. Schwerer: etwas mehr Gewicht oder Pause oben.",
      sicherheit: "Nicht bei akuten Nackenschmerzen, Bandscheibenproblemen der Halswirbelsäule, Schwindel oder nach Verletzungen ohne ärztliche Abklärung."
    }
  },
  {
    id: "nacken_extension_scheibe",
    name: "Nackenstrecken mit Hantelscheibe in Bauchlage",
    auch: ["Plate Neck Extension", "Neck Extension", "Lying Neck Extension", "Nacken Flex./Ext."],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["trapez", "oberer_ruecken"],
    geraete: [["hantelscheibe", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { nacken: 2 },
    stufe: 2,
    info: {
      kurz: "In Bauchlage auf einer Bank, der Kopf über dem Ende, hebst du den Kopf mit einer Hantelscheibe am Hinterkopf an. Kräftigt die hintere Nackenmuskulatur, die den Kopf aufrecht hält.",
      ausfuehrung: [
        "Leg dich auf den Bauch auf eine Flachbank, sodass Kopf und Hals über das Ende ragen.",
        "Leg ein Handtuch auf den Hinterkopf und darauf eine leichte Hantelscheibe, die du mit beiden Händen festhältst.",
        "Lass den Kopf langsam nach unten sinken, bis das Kinn Richtung Brust zeigt.",
        "Heb den Kopf kontrolliert an, bis er in Verlängerung der Wirbelsäule ist oder minimal darüber.",
        "Halte oben eine Sekunde lang ruhig an.",
        "Senk den Kopf langsam wieder ab.",
        "Leg die Scheibe nach dem Satz vorsichtig ab, bevor du aufstehst."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Kopf weit in den Nacken überstrecken: nur bis zur Verlängerung der Wirbelsäule.",
        "Zu schwere Scheibe: mit wenig Gewicht beginnen.",
        "Schwung: langsam arbeiten.",
        "Schultern ziehen hoch: Schultern bleiben entspannt."
      ],
      vorteile: [
        "Kräftigt die hintere Nackenmuskulatur.",
        "Unterstützt eine aufrechte Kopfhaltung.",
        "Kann die Belastbarkeit des Nackens verbessern.",
        "Ergänzt das Nackenbeugen."
      ],
      tipps: [
        "15 bis 25 Wiederholungen.",
        "Gut im Wechsel mit Nackenbeugen in einer kurzen Nackeneinheit.",
        "Steigere das Gewicht nur in sehr kleinen Schritten."
      ],
      varianten: "Leichter: ohne Gewicht oder mit Band. Schwerer: etwas mehr Gewicht oder Pause oben.",
      sicherheit: "Nicht bei akuten Nackenschmerzen, Bandscheibenproblemen der Halswirbelsäule oder Schwindel ohne ärztliche Abklärung."
    }
  },
  {
    id: "nacken_seitneigung_scheibe",
    name: "Nacken-Seitneigung mit Hantelscheibe",
    auch: ["Lateral Neck Flexion", "Side-Lying Neck Raise", "Plate Lateral Neck Flexion"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [["hantelscheibe", "bank"], ["hantelscheibe", "matte"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { nacken: 2 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "In Seitlage hebst du den Kopf mit einer leichten Scheibe an der Schläfe seitlich an. Kräftigt die seitliche Halsmuskulatur, die den Kopf gegen seitliche Kräfte stabilisiert.",
      ausfuehrung: [
        "Leg dich seitlich auf eine Bank, sodass Kopf und Hals über das Ende ragen. Alternativ auf einer Matte mit dem Kopf über einem Kissenrand.",
        "Leg ein Handtuch an die obere Kopfseite und halte darauf eine leichte Scheibe mit der oberen Hand.",
        "Lass den Kopf langsam Richtung untere Schulter sinken.",
        "Heb den Kopf seitlich an, als wolltest du das Ohr zur oberen Schulter führen.",
        "Halte oben eine Sekunde lang ruhig an.",
        "Senk den Kopf langsam wieder ab.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Kopf dreht sich: Blick bleibt nach vorn.",
        "Schulter zieht zum Ohr: Bewegung kommt nur aus dem Hals.",
        "Zu schwere Scheibe: wenig Gewicht reicht.",
        "Zu schnell: langsam arbeiten."
      ],
      vorteile: [
        "Kräftigt die seitliche Halsmuskulatur.",
        "Vervollständigt das Nackentraining in allen Richtungen.",
        "Kann die Belastbarkeit des Nackens im Kontaktsport verbessern."
      ],
      tipps: [
        "15 bis 20 Wiederholungen je Seite.",
        "Ohne Gewicht beginnen und erst nach einigen Wochen eine Scheibe nutzen.",
        "Beide Seiten gleich trainieren."
      ],
      varianten: "Leichter: ohne Gewicht oder isometrisch mit der Hand. Schwerer: etwas mehr Gewicht oder Pause oben.",
      sicherheit: "Nicht bei akuten Nackenschmerzen, Ausstrahlung in den Arm oder Schwindel."
    }
  },
  {
    id: "nacken_isometrie_hand",
    name: "Nacken-Isometrie mit der Hand",
    auch: ["Neck Isometrics", "Manual Neck Isometrics", "4-Way Neck Isometric"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Du drückst den Kopf gegen die eigene Hand, ohne dass er sich bewegt, nacheinander nach vorn, hinten und zu beiden Seiten. Eine sanfte, sichere Art, die Nackenmuskulatur in allen Richtungen zu kräftigen.",
      ausfuehrung: [
        "Setz oder stell dich aufrecht hin, Schultern locker, Kinn leicht eingezogen.",
        "Vorn: Leg die Handfläche an die Stirn und drück den Kopf gegen die Hand, die Hand hält dagegen. Der Kopf bewegt sich nicht.",
        "Hinten: Verschränk die Hände am Hinterkopf und drück den Kopf nach hinten in die Hände.",
        "Seite: Leg eine Hand an die Schläfe und drück den Kopf seitlich gegen die Hand. Danach die andere Seite.",
        "Halte jede Richtung etwa 10 bis 20 Sekunden mit mäßigem Druck, etwa 30 bis 50 Prozent deiner Kraft.",
        "Bau den Druck langsam auf und lass ihn langsam wieder nach.",
        "Mach eine kurze Pause zwischen den Richtungen."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen oder die Luft anhalten.",
      fehler: [
        "Zu viel Druck: Mäßiger Druck reicht, der Nacken soll nicht schmerzen.",
        "Kopf bewegt sich: Kraft und Gegenkraft gleich groß halten.",
        "Schultern ziehen hoch: Schultern locker lassen.",
        "Ruckartiger Druck: langsam aufbauen und lösen."
      ],
      vorteile: [
        "Sehr sichere Kräftigung der Nackenmuskulatur.",
        "Überall und ohne Geräte machbar.",
        "Gut geeignet für Einsteiger und als Einstieg ins Nackentraining.",
        "Trainiert alle Richtungen in wenigen Minuten."
      ],
      tipps: [
        "Zwei bis drei Runden durch alle vier Richtungen.",
        "Gut im Büro oder als Pause beim Sitzen.",
        "Steigere zuerst die Haltezeit, dann den Druck."
      ],
      varianten: "Leichter: kürzer halten und weniger Druck. Schwerer: längere Haltezeit oder Ball an der Wand.",
      sicherheit: "Bei Schmerzen, Kribbeln in den Armen oder Schwindel abbrechen und abklären lassen."
    }
  },
  {
    id: "nacken_isometrie_ball_wand",
    name: "Nacken-Isometrie mit Ball an der Wand",
    auch: ["Wall Ball Neck Isometrics", "Neck Isometric Ball Hold"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["trapez", "bauch"],
    geraete: [["gymnastikball", "wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Du hältst einen Ball zwischen Kopf und Wand und drückst den Kopf leicht dagegen, nacheinander mit Stirn, Hinterkopf und beiden Seiten. Der Ball gibt eine klare Rückmeldung und erlaubt längere Haltezeiten als mit der Hand.",
      ausfuehrung: [
        "Nimm einen kleinen Gymnastikball oder einen weichen Ball und halte ihn auf Kopfhöhe an eine Wand.",
        "Vorn: Stell dich mit dem Gesicht zur Wand, Ball zwischen Stirn und Wand, Körper leicht nach vorn geneigt.",
        "Drück die Stirn leicht in den Ball, sodass er gehalten wird, Kinn leicht eingezogen, Hals lang.",
        "Halte die vorgegebene Zeit und wechsle dann die Richtung: Hinterkopf zur Wand, danach beide Seiten.",
        "Je weiter die Füße von der Wand weg sind, desto mehr Gewicht trägt der Nacken.",
        "Halte den Körper gerade, der Kopf bleibt in Verlängerung der Wirbelsäule.",
        "Für Fortgeschrittene: kleine Kreise mit dem Ball rollen, ohne ihn zu verlieren."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Kopf wird überstreckt oder abgeknickt: Kopf bleibt neutral.",
        "Zu weite Schräglage: Mit den Füßen nah an der Wand beginnen.",
        "Schultern ziehen hoch: Schultern locker.",
        "Ball rutscht: Ball mit etwas Luft weniger nutzen."
      ],
      vorteile: [
        "Gut dosierbare Kräftigung der Nackenmuskulatur in allen Richtungen.",
        "Sicher und gelenkschonend.",
        "Fordert zusätzlich die Körperspannung.",
        "Mit wenig Ausrüstung machbar."
      ],
      tipps: [
        "20 bis 40 Sekunden je Richtung.",
        "Die Schwierigkeit über den Abstand zur Wand steuern.",
        "Gut als Teil eines Aufwärmens für Kontaktsportarten."
      ],
      varianten: "Leichter: aufrecht stehen. Schwerer: Füße weiter weg oder kleine Kreise mit dem Ball.",
      sicherheit: "Bei Schmerzen, Schwindel oder Kribbeln in den Armen abbrechen."
    }
  },
  {
    id: "kinn_einziehen_band",
    name: "Kinn einziehen gegen Band",
    auch: ["Banded Chin Tuck", "Band Chin Tuck", "Resisted Chin Tuck"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Du ziehst den Kopf gerade nach hinten gegen ein Band, das hinter dem Kopf liegt und vor dir befestigt ist, als würdest du ein Doppelkinn machen. Trainiert die tiefen Halsmuskeln und wirkt einer nach vorn geschobenen Kopfhaltung entgegen.",
      ausfuehrung: [
        "Befestige ein leichtes Band auf Kopfhöhe vor dir und leg die Schlaufe um den Hinterkopf.",
        "Geh so weit zurück, dass das Band leicht gespannt ist, und stell oder setz dich aufrecht hin.",
        "Der Blick geht geradeaus, die Schultern sind locker.",
        "Schieb den Kopf gerade nach hinten, als würdest du ein Doppelkinn machen. Der Blick bleibt waagerecht, der Kopf nickt nicht.",
        "Halte die hintere Position zwei bis drei Sekunden.",
        "Lass den Kopf langsam wieder nach vorn in die neutrale Position kommen, nicht weiter.",
        "Wiederhole ruhig und kontrolliert."
      ],
      atmung: "Beim Zurückziehen ausatmen, beim Lösen einatmen.",
      fehler: [
        "Kopf kippt nach oben oder unten: Blick bleibt waagerecht.",
        "Schultern ziehen nach hinten mit: Nur der Kopf bewegt sich.",
        "Band zu stark: Die Übung braucht wenig Widerstand.",
        "Kopf geht vorn zu weit raus: nur bis zur neutralen Position."
      ],
      vorteile: [
        "Kräftigt die tiefen Halsbeuger und -strecker.",
        "Wirkt einer nach vorn geschobenen Kopfhaltung entgegen.",
        "Sanft und für fast alle geeignet.",
        "Gut für Menschen, die viel am Bildschirm sitzen."
      ],
      tipps: [
        "10 bis 15 Wiederholungen mit Halten.",
        "Ohne Band auch mehrmals täglich im Sitzen üben.",
        "Stell dir vor, ein Faden zieht deinen Hinterkopf nach hinten oben."
      ],
      varianten: "Leichter: ohne Band oder im Liegen. Schwerer: etwas stärkeres Band oder längeres Halten.",
      sicherheit: "Bei Schmerzen, Schwindel oder Kribbeln in den Armen abbrechen und abklären lassen."
    }
  },
  {
    id: "kinn_einziehen_liegend",
    name: "Kinn einziehen mit Kopfheben in Rückenlage",
    auch: ["Supine Chin Tuck Head Lift", "Deep Neck Flexor Lift", "Chin Tuck Head Lift"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["bauch"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { nacken: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "nacken_flexion_scheibe",
    info: {
      kurz: "In Rückenlage ziehst du das Kinn leicht ein und hebst den Kopf wenige Zentimeter vom Boden. Eine bewährte physiotherapeutische Übung für die tiefen Halsbeuger, die die Halswirbelsäule stabilisieren.",
      ausfuehrung: [
        "Leg dich auf den Rücken auf eine Matte, Knie aufgestellt, Arme neben dem Körper.",
        "Zieh das Kinn sanft ein, als würdest du ein Doppelkinn machen, der Hinterkopf gleitet dabei leicht am Boden entlang.",
        "Halte das eingezogene Kinn und heb den Kopf nur etwa zwei bis drei Zentimeter vom Boden.",
        "Halte diese Position, der Blick geht zur Decke oder leicht zu den Knien.",
        "Senk den Kopf nach der Haltezeit langsam ab, ohne das Kinn zu lösen, und entspann dann.",
        "Mach eine kurze Pause und wiederhole.",
        "Wenn das Kinn nach vorn schiebt, ist die Position zu Ende."
      ],
      atmung: "Ruhig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Kinn schiebt nach vorn zur Decke: Kinn eingezogen halten.",
        "Kopf zu hoch heben: wenige Zentimeter reichen.",
        "Bauch und Schultern spannen stark mit: Bewegung kommt aus dem Hals.",
        "Zu lange halten: lieber kürzer und sauber."
      ],
      vorteile: [
        "Kräftigt die tiefen Halsbeuger, die oft schwach sind.",
        "Unterstützt eine stabile, aufrechte Kopfhaltung.",
        "Sanft und ohne Geräte machbar.",
        "Häufig Teil von Programmen bei Nackenverspannungen."
      ],
      tipps: [
        "Beginne mit 5 bis 10 Sekunden Halten und steigere bis 30 Sekunden.",
        "Mehrere Wiederholungen mit kurzer Pause, etwa 5 bis 10 pro Satz.",
        "Ein Spiegel oder Partner kann prüfen, ob das Kinn eingezogen bleibt."
      ],
      varianten: "Leichter: nur Kinn einziehen ohne Kopfheben. Schwerer: längere Haltezeit oder Nackenbeugen mit Scheibe.",
      sicherheit: "Bei Schmerzen, Schwindel oder Kribbeln in den Armen abbrechen und abklären lassen."
    }
  },
  {
    id: "nacken_extension_band",
    name: "Nackenstrecken mit Band",
    auch: ["Band Neck Extension", "Banded Neck Extension", "Resistance Band Neck Extension"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["trapez", "oberer_ruecken"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Mit einem Band um den Hinterkopf, das vor dir befestigt oder in den Händen gehalten wird, streckst du den Kopf aus einer leicht gebeugten Position zurück in die Neutralposition. Eine schonende Alternative zum Nackenstrecken mit Scheibe.",
      ausfuehrung: [
        "Leg ein leichtes Band um den Hinterkopf und halte die Enden vor dir mit beiden Händen fest oder befestige sie vor dir auf Brusthöhe.",
        "Stell oder setz dich aufrecht hin, beug dich aus der Hüfte leicht nach vorn, Rücken gerade.",
        "Lass den Kopf langsam nach vorn unten sinken, bis das Kinn Richtung Brust zeigt.",
        "Streck den Nacken gegen das Band, bis der Kopf in Verlängerung der Wirbelsäule ist.",
        "Halte die Endposition eine Sekunde lang ruhig an.",
        "Lass den Kopf langsam wieder nach vorn sinken.",
        "Arbeite ruhig, ohne Ruck und ohne den Kopf weit in den Nacken zu legen."
      ],
      atmung: "Beim Strecken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Kopf überstreckt: nur bis zur Neutralposition.",
        "Band zu stark: leichtes Band wählen.",
        "Rücken rundet sich: nur der Nacken bewegt sich.",
        "Schultern ziehen hoch: Schultern locker."
      ],
      vorteile: [
        "Kräftigt die hintere Nackenmuskulatur sanft.",
        "Sehr gut dosierbar.",
        "Überall mit einem Band machbar.",
        "Gute Vorstufe zum Training mit Scheibe."
      ],
      tipps: [
        "15 bis 25 Wiederholungen.",
        "Ein Handtuch zwischen Band und Kopf ist angenehmer.",
        "Kann auch für Beugen und Seitneigung genutzt werden, indem du die Befestigungsrichtung änderst."
      ],
      varianten: "Leichter: dünneres Band oder nur halten. Schwerer: dickeres Band oder langsameres Tempo.",
      sicherheit: "Nicht bei akuten Nackenschmerzen, Ausstrahlung in die Arme oder Schwindel."
    }
  },
  {
    id: "nackenmaschine",
    name: "Nackentraining an der Nackenmaschine",
    auch: ["4-Way Neck Machine", "Neck Machine", "Multi-Direction Neck Machine"],
    muster: "nacken",
    art: "kraft",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 2 },
    stufe: 1,
    info: {
      kurz: "An einer speziellen Nackenmaschine drückst du den Kopf gegen ein Polster nach vorn, hinten oder zur Seite. Die Maschine erlaubt ein fein dosiertes, geführtes Nackentraining in allen vier Richtungen.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass das Kopfpolster mittig an Stirn, Hinterkopf oder Schläfe anliegt, je nach Richtung.",
        "Setz dich aufrecht hin, halte dich an den Griffen fest, die Schultern sind locker.",
        "Wähle ein leichtes Gewicht und beginne mit der Richtung, die du trainieren willst.",
        "Drück den Kopf langsam gegen das Polster, bis er etwa in Neutralposition oder knapp darüber hinaus ist.",
        "Halte die Endposition eine Sekunde lang ruhig an.",
        "Lass den Kopf langsam zurückkommen, ohne dass die Gewichte aufschlagen.",
        "Nach dem Satz Sitz und Polster für die nächste Richtung umstellen."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückkommen einatmen.",
      fehler: [
        "Zu schweres Gewicht: Der Nacken braucht Gewöhnung, leicht beginnen.",
        "Schultern und Oberkörper bewegen sich mit: nur der Kopf bewegt sich.",
        "Ruckartige Bewegungen: ganz ruhig arbeiten.",
        "Zu großer Bewegungsweg: im angenehmen Bereich bleiben."
      ],
      vorteile: [
        "Gezieltes, fein dosierbares Nackentraining in allen Richtungen.",
        "Kann die Belastbarkeit des Nackens im Kontaktsport verbessern.",
        "Geführte Bewegung erleichtert die Technik."
      ],
      tipps: [
        "15 bis 25 Wiederholungen je Richtung.",
        "Mit ein bis zwei Richtungen pro Einheit beginnen.",
        "Nicht bis zum Muskelversagen trainieren, ein bis drei Wiederholungen im Tank lassen."
      ],
      varianten: "Leichter: weniger Gewicht oder kürzerer Bewegungsweg. Schwerer: Pause in der Endposition oder langsameres Tempo.",
      sicherheit: "Nicht bei akuten Nackenschmerzen, Bandscheibenproblemen der Halswirbelsäule oder Schwindel ohne ärztliche Abklärung."
    }
  },
]
