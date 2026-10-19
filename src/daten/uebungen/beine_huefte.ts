import type { Uebung } from "../../logik/typen"

// Hüftstreckung, Beinbeuger, Adduktoren, Abduktoren und Waden.
export const BEINE_HUEFTE: Uebung[] = [
  // ---------- Hüftstreckung: Kreuzheben und Hüftbeugen ----------
  {
    id: "kreuzheben_lh",
    name: "Kreuzheben mit Langhantel",
    auch: ["Deadlift", "Conventional Deadlift", "Klassisches Kreuzheben"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    sekundaer: ["quadrizeps", "oberer_ruecken", "trapez", "unterarm", "adduktoren"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1, knie: 1 },
    stufe: 3,
    sport: ["golf", "fussball"],
    golf: 1,
    hinweis: "Stange nah am Körper, Rücken neutral, vom Boden wegdrücken statt reißen.",
    info: {
      kurz: "Die Grundübung für die gesamte hintere Kette: Du hebst die Langhantel vom Boden bis in den aufrechten Stand. Baut Kraft in Gesäß, Beinbeugern und Rückenstreckern auf wie kaum eine andere Übung.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Stange liegt über der Fußmitte, etwa zwei bis drei Zentimeter vor dem Schienbein. Die Zehen zeigen leicht nach außen.",
        "Beuge dich mit fast gestreckten Beinen nach unten und greif die Stange schulterbreit, die Arme hängen direkt außen an den Beinen.",
        "Beuge jetzt die Knie, bis die Schienbeine die Stange berühren. Brust raus, Rücken lang, die Hüfte liegt höher als die Knie und tiefer als die Schultern.",
        "Spann den Latissimus an, als wolltest du die Stange in Richtung Hosentaschen biegen, und zieh das Spiel aus der Stange, bis sie leise klickt.",
        "Drück den Boden mit den ganzen Füßen weg. Die Stange gleitet am Schienbein und an den Oberschenkeln nach oben, Hüfte und Schultern steigen gleichzeitig.",
        "Sobald die Stange die Knie passiert, schieb die Hüfte nach vorn, bis du aufrecht stehst. Gesäß fest anspannen, nicht nach hinten überstrecken.",
        "Senke die Stange auf demselben Weg ab: zuerst die Hüfte nach hinten schieben, nach den Knien dann die Knie beugen, bis die Hantel kontrolliert am Boden liegt."
      ],
      atmung: "Vor dem Abheben tief in den Bauch einatmen und die Luft gegen den angespannten Rumpf halten. Oben oder nach dem Absetzen ausatmen und neu Luft holen.",
      fehler: [
        "Runder unterer Rücken: Gewicht reduzieren, vor dem Zug Brust raus und Latissimus anspannen.",
        "Stange entfernt sich vom Körper: Sie bleibt über der Fußmitte und streift die Beine.",
        "Hüfte schießt zuerst nach oben: Beine aktiv gegen den Boden drücken, Hüfte und Schultern steigen gemeinsam.",
        "Reißen vom Boden: Erst Spannung aufbauen, dann gleichmäßig beschleunigen.",
        "Überstrecken im Stand: Oben einfach gerade stehen und das Gesäß anspannen, nicht nach hinten lehnen."
      ],
      vorteile: [
        "Kräftigt Gesäß, Beinbeuger, Rückenstrecker und Griff in einer einzigen Bewegung.",
        "Ermöglicht die höchsten Lasten aller Hüftübungen und eignet sich ideal für Maximalkraft.",
        "Überträgt sich direkt auf Alltagsbewegungen wie Heben von Kisten vom Boden.",
        "Stärkt die Haltemuskulatur des Rückens und den oberen Rücken."
      ],
      tipps: [
        "Denk an Beinpresse statt an Rückenzug: Du drückst den Boden weg.",
        "Arbeite meist mit 3 bis 6 Wiederholungen und zwei bis drei Wiederholungen im Tank. Saubere Technik geht vor Gewicht.",
        "Flache, feste Schuhe oder Socken geben einen stabilen Stand.",
        "Kreide hilft beim Griff, Zughilfen nur bei schweren Sätzen nutzen, damit der Griff mitwächst."
      ],
      varianten: "Leichter: Rumänisches Kreuzheben, Trap-Bar-Kreuzheben oder Kettlebell-Kreuzheben. Schwerer: Defizit-Kreuzheben, Pausen-Kreuzheben oder mehr Last.",
      sicherheit: "Bei akuten Rückenbeschwerden, Bandscheibenproblemen oder Bluthochdruck (Pressatmung) vorher ärztlich abklären und mit leichteren Varianten arbeiten."
    }
  },
  {
    id: "kreuzheben_sumo",
    name: "Sumo-Kreuzheben",
    auch: ["Sumo Deadlift", "Sumo Kreuzheben"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "adduktoren", "quadrizeps"],
    sekundaer: ["beinbeuger", "ruecken_unten", "oberer_ruecken", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { huefte: 2, ruecken: 1, knie: 1 },
    stufe: 3,
    info: {
      kurz: "Kreuzheben mit weitem Stand und Griff innerhalb der Beine. Der Oberkörper bleibt aufrechter, dadurch arbeiten Adduktoren und Quadrizeps mehr und der untere Rücken etwas weniger als beim klassischen Kreuzheben.",
      ausfuehrung: [
        "Stell dich deutlich breiter als schulterbreit hin, die Zehen zeigen 30 bis 45 Grad nach außen, die Schienbeine stehen fast senkrecht nah an der Stange.",
        "Greif die Stange schulterbreit innerhalb der Beine, die Arme hängen senkrecht nach unten.",
        "Schieb die Knie aktiv nach außen in Richtung Zehen, senke die Hüfte, bis die Brust aufrecht ist und der Rücken gerade.",
        "Zieh das Spiel aus der Stange, spann den Latissimus an und drück die Füße seitlich auseinander, als wolltest du den Boden spreizen.",
        "Drück dich aus den Beinen hoch, die Stange läuft senkrecht nach oben, die Hüfte bewegt sich nach vorn zur Stange.",
        "Oben stehst du aufrecht mit angespanntem Gesäß, die Knie sind gestreckt.",
        "Senke die Stange kontrolliert ab, indem du Hüfte und Knie gleichzeitig beugst."
      ],
      atmung: "Vor dem Abheben tief einatmen und den Rumpf fest machen, oben oder nach dem Absetzen ausatmen.",
      fehler: [
        "Knie fallen nach innen: Aktiv nach außen über die Zehen drücken.",
        "Hüfte zu hoch: Dann wird es ein schlechtes klassisches Kreuzheben. Hüfte tiefer, Brust auf.",
        "Stand zu breit für die eigene Hüftbeweglichkeit: So breit, dass die Schienbeine senkrecht bleiben, nicht breiter.",
        "Ungeduldiges Reißen: Sumo braucht Anlauf in der Spannung, langsam Druck aufbauen bis die Stange sich löst."
      ],
      vorteile: [
        "Mehr Arbeit für Adduktoren und Gesäß, weniger Scherkraft auf den unteren Rücken.",
        "Kürzerer Hubweg, dadurch oft gut für große Lasten geeignet.",
        "Gute Alternative für Menschen mit langen Beinen oder kurzem Oberkörper.",
        "Fördert die Hüftbeweglichkeit in Außenrotation."
      ],
      tipps: [
        "Wärm die Adduktoren und die Hüfte vorher gut auf, zum Beispiel mit Kosakenkniebeugen.",
        "Probier verschiedene Standbreiten mit leichtem Gewicht, bis Schienbeine senkrecht und die Hüfte nah an der Stange ist.",
        "Denk an Spreizen des Bodens und Brust nach oben, nicht an Ziehen mit dem Rücken."
      ],
      varianten: "Leichter: Kettlebell-Kreuzheben im Sumostand. Schwerer: Pause knapp über dem Boden oder Defizit.",
      sicherheit: "Bei Leistenbeschwerden oder Hüftproblemen (z. B. Impingement) vorsichtig beginnen und den Stand schmaler wählen."
    }
  },
  {
    id: "kreuzheben_reset",
    name: "Reset-Kreuzheben",
    auch: ["Reset Deadlift", "Dead Stop Deadlift"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    sekundaer: ["quadrizeps", "oberer_ruecken", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1, knie: 1 },
    stufe: 3,
    hinweis: "Hantel nach jeder Wiederholung ganz ablegen, loslassen ist erlaubt, neu ansetzen.",
    info: {
      kurz: "Kreuzheben, bei dem Du die Stange nach jeder Wiederholung komplett ablegst und Position, Atmung und Spannung neu aufbaust. Jede Wiederholung wird so zu einem eigenen, sauberen ersten Zug.",
      ausfuehrung: [
        "Bau die Startposition wie beim klassischen Kreuzheben auf: Stange über der Fußmitte, schulterbreiter Griff, Schienbeine an der Stange.",
        "Atme ein, spann Rumpf und Latissimus an und zieh das Spiel aus der Stange.",
        "Heb die Stange gleichmäßig an, bis du aufrecht stehst und das Gesäß fest ist.",
        "Senke die Hantel kontrolliert bis auf den Boden ab und lass sie dort vollständig zur Ruhe kommen, ohne sie abprallen zu lassen.",
        "Atme am Boden aus, prüfe kurz Fußstellung, Griff und Rückenposition und atme neu ein.",
        "Bau die Spannung wieder auf und starte die nächste Wiederholung erst, wenn alles sitzt."
      ],
      atmung: "Bei jeder Wiederholung am Boden ausatmen, neu einatmen und den Rumpf vor dem Zug fest machen.",
      fehler: [
        "Kein echter Reset: Die Hantel soll ruhig liegen, nicht vom Boden federn.",
        "Pause wird zu lang und Spannung geht völlig verloren: Zwei bis fünf Sekunden reichen.",
        "Position schleichend schlechter: Bei jeder Wiederholung bewusst dieselbe Checkliste abarbeiten.",
        "Zu viele Wiederholungen: Bei mehr als acht leidet die Technik, lieber mehr Sätze."
      ],
      vorteile: [
        "Trainiert die Startkraft vom Boden ohne Hilfe durch Dehnungsreflex.",
        "Verbessert die Technik, weil jede Wiederholung neu eingerichtet wird.",
        "Reduziert das Risiko, dass die Form über einen Satz hinweg zerfällt.",
        "Gute Wahl für Einsteiger, um Kreuzheben zu lernen."
      ],
      tipps: [
        "Nimm etwas weniger Gewicht als beim normalen Kreuzheben mit Berührung.",
        "Nutze die Pause als Mini-Checkliste: Füße, Griff, Brust, Latissimus, Luft.",
        "Gut geeignet für Sätze mit 4 bis 6 Wiederholungen."
      ],
      varianten: "Leichter: Trap-Bar statt Langhantel. Schwerer: Defizit-Kreuzheben mit Reset.",
      sicherheit: "Bei Rückenbeschwerden zuerst mit leichteren Hüftübungen arbeiten. Bei Bluthochdruck Pressatmung nur kurz halten."
    }
  },
  {
    id: "kreuzheben_defizit",
    name: "Defizit-Kreuzheben",
    auch: ["Deficit Deadlift", "Kreuzheben vom Podest"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    sekundaer: ["quadrizeps", "oberer_ruecken", "unterarm", "adduktoren"],
    geraete: [["langhantel", "hantelscheibe"], ["langhantel", "box"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1, knie: 1 },
    stufe: 3,
    info: {
      kurz: "Kreuzheben, bei dem Du auf einer Erhöhung von etwa 2 bis 8 Zentimetern stehst. Der Weg wird länger und der Start tiefer, dadurch werden Kraft vom Boden und die Beweglichkeit in der Startposition trainiert.",
      ausfuehrung: [
        "Leg eine stabile, rutschfeste Erhöhung hin, z. B. eine große Hantelscheibe oder eine niedrige Plattform, und stell dich hüftbreit darauf.",
        "Die Stange liegt über der Fußmitte. Beuge Hüfte und Knie tiefer als beim normalen Kreuzheben, bis du die Stange greifen kannst.",
        "Halte den Rücken neutral, die Brust aufrecht und spann den Latissimus an. Wenn der Rücken rund wird, ist die Erhöhung zu hoch.",
        "Drück dich mit den Beinen vom Podest ab und bring die Stange eng am Körper nach oben.",
        "Streck oben Hüfte und Knie vollständig und spann das Gesäß an.",
        "Senke die Stange kontrolliert wieder ab, bis die Scheiben den Boden berühren."
      ],
      atmung: "Vor jeder Wiederholung tief einatmen und den Rumpf fest machen, oben oder unten ausatmen.",
      fehler: [
        "Erhöhung zu hoch: Mehr als 8 bis 10 Zentimeter bringt meist einen runden Rücken.",
        "Instabile Unterlage: Nur feste, flache Flächen verwenden.",
        "Zu viel Gewicht: Rechne mit 10 bis 20 Prozent weniger als beim normalen Kreuzheben.",
        "Knie schieben die Stange nach vorn: Schienbeine leicht schräg, Stange bleibt über der Fußmitte."
      ],
      vorteile: [
        "Stärkt die schwierigste Phase direkt vom Boden.",
        "Längerer Bewegungsweg für mehr Arbeit von Gesäß und Beinbeugern.",
        "Verbessert Position und Spannung unten auch für das normale Kreuzheben."
      ],
      tipps: [
        "Für Sumo-Heber eignet sich die Variante ebenfalls, dann mit kleiner Erhöhung.",
        "Als Ergänzungsübung mit 4 bis 8 Wiederholungen einsetzen.",
        "Wenn du unten nicht neutral bleiben kannst, nimm zuerst eine niedrigere Erhöhung."
      ],
      varianten: "Leichter: kleinere Erhöhung oder normales Kreuzheben. Schwerer: höhere Erhöhung bis etwa 10 Zentimeter oder Pause kurz nach dem Abheben.",
      sicherheit: "Nur mit sicherer Technik im normalen Kreuzheben. Bei Rückenbeschwerden auslassen."
    }
  },
  {
    id: "rack_pull",
    name: "Rack Pull (Kreuzheben aus dem Rack)",
    auch: ["Rack Pull", "Block Pull", "Teilkreuzheben"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "ruecken_unten", "oberer_ruecken"],
    sekundaer: ["beinbeuger", "trapez", "unterarm", "latissimus"],
    geraete: [["langhantel", "rack"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1 },
    stufe: 2,
    info: {
      kurz: "Teilbewegung des Kreuzhebens, bei der die Stange auf Ablagen im Rack oder auf Blöcken knapp unter oder über dem Knie liegt. Trainiert die obere Hälfte des Zugs, Griff und oberen Rücken mit hohen Lasten.",
      ausfuehrung: [
        "Stell die Ablagen im Rack so ein, dass die Stange knapp unter oder knapp über den Knien liegt.",
        "Stell dich hüftbreit hin, die Stange berührt die Beine, greif schulterbreit.",
        "Schieb die Hüfte nach hinten, bis der Oberkörper nach vorn geneigt und der Rücken gerade ist, Schultern leicht vor der Stange.",
        "Spann den Latissimus an, zieh das Spiel aus der Stange und atme ein.",
        "Schieb die Hüfte kraftvoll nach vorn, bis du aufrecht stehst. Schultern bleiben unten, das Gesäß wird fest.",
        "Senke die Stange kontrolliert wieder auf die Ablagen und richte dich für die nächste Wiederholung neu ein."
      ],
      atmung: "Vor dem Zug einatmen und halten, oben ausatmen.",
      fehler: [
        "Knie unter die Stange schieben und nachdrücken: Die Stange bleibt an den Oberschenkeln und die Hüfte arbeitet.",
        "Zurücklehnen im Stand: Oben gerade stehen, nicht überstrecken.",
        "Schultern hochziehen: Das ist kein Schulterheben, Schultern bleiben tief.",
        "Viel zu schwer: Der Rücken muss gerade bleiben, sonst Last senken."
      ],
      vorteile: [
        "Trainiert die Hüftstreckung und den Abschluss mit Lasten über dem normalen Kreuzheben.",
        "Stärkt Griff, Trapez und oberen Rücken sehr stark.",
        "Weniger Belastung für Knie und weniger Beweglichkeit nötig als vom Boden.",
        "Hilfreich, um den Lockout beim Kreuzheben zu verbessern."
      ],
      tipps: [
        "Je höher die Ablage, desto mehr wird es zur Übung für den oberen Rücken. Unter dem Knie ist der Übertrag auf das Kreuzheben größer.",
        "Zughilfen sind hier sinnvoll, wenn der Griff vor dem Rücken versagt.",
        "Schütze die Ablagen mit Gummimatten oder benutz Blöcke, um die Stange zu schonen."
      ],
      varianten: "Leichter: höhere Ablage und weniger Gewicht. Schwerer: tiefere Ablage unter dem Knie oder Pause oben.",
      sicherheit: "Hohe Lasten belasten die Wirbelsäule stark. Bei Rückenbeschwerden nur mit leichten Gewichten oder gar nicht."
    }
  },
  {
    id: "kreuzheben_gegenstand",
    name: "Kreuzheben im Gegenstand",
    auch: ["Opposite Stance Deadlift", "Off-Stance Deadlift"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    sekundaer: ["adduktoren", "quadrizeps", "oberer_ruecken", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1, knie: 1 },
    stufe: 3,
    hinweis: "Wer normal klassisch zieht, hebt hier im Sumostand, und umgekehrt.",
    info: {
      kurz: "Kreuzheben in dem Stand, den Du sonst nicht benutzt: Klassische Heber ziehen Sumo, Sumo-Heber ziehen klassisch. So trainierst Du die Muskeln, die in Deinem Hauptstand weniger gefordert werden.",
      ausfuehrung: [
        "Wähle den Stand, den du nicht als Hauptvariante hebst: Bei klassischem Kreuzheben ziehst du hier Sumo mit weitem Stand und Griff innen, bei Sumo ziehst du klassisch mit hüftbreitem Stand und Griff außen.",
        "Richte dich sorgfältig ein: Stange über der Fußmitte, Schienbeine an der Stange, Rücken neutral, Brust aufrecht.",
        "Zieh das Spiel aus der Stange, spann Latissimus und Rumpf an und atme ein.",
        "Drück den Boden weg und bring die Stange eng am Körper nach oben, bis du aufrecht stehst.",
        "Senke die Stange kontrolliert und mit derselben Technik wieder ab.",
        "Arbeite mit moderatem Gewicht und konzentrier dich auf saubere Positionen im ungewohnten Stand."
      ],
      atmung: "Vor dem Zug tief einatmen und den Rumpf fest machen, oben oder unten ausatmen.",
      fehler: [
        "Zu schwer starten: Der Gegenstand fühlt sich anfangs ungewohnt an, beginne mit 60 bis 70 Prozent deiner üblichen Last.",
        "Techniken vermischen: Im Sumostand Hüfte tief und Brust aufrecht, im klassischen Stand Hüfte höher und Schultern vor der Stange.",
        "Runder Rücken unter Ermüdung: Satz beenden, sobald die Position nachlässt."
      ],
      vorteile: [
        "Trainiert gezielt die Schwachstellen des Hauptstands, z. B. Rücken und Beinbeuger bei Sumo-Hebern, Adduktoren und Quadrizeps bei klassischen Hebern.",
        "Abwechslung bei ähnlicher Last und Wirkung auf die gesamte hintere Kette.",
        "Fördert eine vielseitige Hüftkraft und Beweglichkeit."
      ],
      tipps: [
        "Gut geeignet als zweite Kreuzheben-Einheit in der Woche mit 4 bis 8 Wiederholungen.",
        "Film dich anfangs von der Seite, um die neue Technik zu prüfen.",
        "Steigere das Gewicht langsamer als im Hauptstand."
      ],
      varianten: "Leichter: weniger Last, Reset nach jeder Wiederholung. Schwerer: Pause knapp unter dem Knie.",
      sicherheit: "Bei Rücken- oder Hüftbeschwerden vorher abklären. Sumo bei Leistenproblemen vorsichtig beginnen."
    }
  },
  {
    id: "kreuzheben_trapbar",
    name: "Trap-Bar-Kreuzheben",
    auch: ["Trap Bar Deadlift", "Hex Bar Deadlift", "Kreuzheben mit Sechseckstange"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "beinbeuger"],
    sekundaer: ["ruecken_unten", "trapez", "unterarm", "oberer_ruecken"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, knie: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    hinweis: "Du brauchst eine Trap-Bar (Sechseckstange). Mittig stehen, Griffe seitlich neben dem Körper.",
    info: {
      kurz: "Kreuzheben mit der sechseckigen Trap-Bar, in der Du mittig stehst. Die Last liegt auf Höhe Deines Körperschwerpunkts, dadurch bleibt der Oberkörper aufrechter und der untere Rücken wird weniger belastet als bei der Langhantel.",
      ausfuehrung: [
        "Stell dich mittig in die Trap-Bar, Füße hüftbreit, die Griffe liegen auf Höhe der Fußmitte.",
        "Beuge Hüfte und Knie, bis du die Griffe fassen kannst. Der Rücken ist gerade, die Brust zeigt nach vorn oben.",
        "Drück die Schultern nach unten und spann den Rumpf an, als würdest du gleich einen Stoß in den Bauch abfangen.",
        "Drück dich mit den ganzen Füßen kraftvoll vom Boden ab, Hüfte und Schultern steigen gleichzeitig.",
        "Streck oben Knie und Hüfte vollständig, das Gesäß ist fest, die Arme hängen locker.",
        "Senke die Stange kontrolliert ab, indem du Hüfte nach hinten schiebst und die Knie beugst, bis die Scheiben den Boden berühren."
      ],
      atmung: "Vor dem Anheben tief einatmen und halten, oben ausatmen oder nach dem Absetzen.",
      fehler: [
        "Zu kniebeugenlastig mit sehr tiefer Hüfte: Hüfte etwa auf halber Höhe zwischen Knie und Schulter.",
        "Nicht mittig stehen: Die Stange kippt dann nach vorn oder hinten. Fußmitte unter den Griffen.",
        "Runder Rücken beim Absetzen: Auch nach unten die Spannung halten.",
        "Schultern nach vorn gezogen: Schulterblätter nach hinten unten, Arme lang."
      ],
      vorteile: [
        "Große Lasten bei vergleichsweise geringer Belastung des unteren Rückens.",
        "Leicht zu lernen und daher ideal für Einsteiger und Sportler.",
        "Sehr gute Übung für Beinkraft und Kraftentwicklung, auch explosiv ausführbar.",
        "Stärkt Griff und Trapez nebenbei."
      ],
      tipps: [
        "Die hohen Griffe verkürzen den Weg, die tiefen Griffe machen es schwerer.",
        "Für Schnellkraft eignen sich leichtere Sätze mit 3 bis 5 schnellen Wiederholungen.",
        "Stell dir vor, du drückst den Boden wie bei einer Beinpresse weg."
      ],
      varianten: "Leichter: hohe Griffe oder weniger Gewicht. Schwerer: tiefe Griffe, mehr Last oder vom Podest.",
      sicherheit: "Bei Rücken- oder Kniebeschwerden mit leichter Last starten. Pressatmung bei Bluthochdruck vermeiden.",
      golf: "Baut kraftvolle Bein- und Hüftstreckung auf, die beim Abschwung vom Boden aus Schlägerkopfgeschwindigkeit erzeugt. Weil der Rücken weniger belastet wird, ist sie für Golfer mit empfindlichem Kreuz oft die bessere Wahl als klassisches Kreuzheben."
    }
  },
  {
    id: "kreuzheben_pause",
    name: "Pausen-Kreuzheben",
    auch: ["Paused Deadlift", "Pause Deadlift"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    sekundaer: ["quadrizeps", "oberer_ruecken", "latissimus", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1, knie: 1 },
    stufe: 3,
    info: {
      kurz: "Kreuzheben mit einer Pause von ein bis drei Sekunden kurz unter dem Knie. Die Pause zwingt Dich, die Position unter Last zu halten, und deckt Schwächen in Rücken und Bahn der Stange auf.",
      ausfuehrung: [
        "Richte dich wie beim klassischen Kreuzheben ein und baue volle Spannung auf.",
        "Heb die Stange langsam und kontrolliert an, bis sie etwa zwei bis fünf Zentimeter unter den Knien ist.",
        "Halte dort ein bis drei Sekunden still. Rücken neutral, Schultern leicht vor der Stange, Stange am Schienbein.",
        "Setz die Bewegung danach ohne Schwung fort, bis du aufrecht stehst.",
        "Senke die Stange kontrolliert ab und setz sie ab, bevor du die nächste Wiederholung beginnst."
      ],
      atmung: "Einatmen vor dem Abheben, die Luft während der Pause halten, oben ausatmen.",
      fehler: [
        "Hüfte steigt in der Pause nach oben: Position halten, Beine bleiben gebeugt.",
        "Stange wandert in der Pause nach vorn: Latissimus fest, Stange an die Beine drücken.",
        "Zu viel Gewicht: Rechne mit etwa 70 bis 80 Prozent deines normalen Arbeitsgewichts."
      ],
      vorteile: [
        "Verbessert die Kontrolle in der Startphase und die Bahn der Stange.",
        "Kräftigt Rückenstrecker und oberen Rücken isometrisch.",
        "Hilft, Positionsfehler beim normalen Kreuzheben zu beheben."
      ],
      tipps: [
        "Zähl die Pause laut im Kopf, sonst wird sie zu kurz.",
        "Pausiere dort, wo du im normalen Zug typischerweise die Form verlierst.",
        "Gut als Technik-Übung mit 2 bis 5 Wiederholungen."
      ],
      varianten: "Leichter: kürzere Pause. Schwerer: zwei Pausen, unter dem Knie und knapp über dem Boden.",
      sicherheit: "Lange Pressatmung erhöht den Blutdruck, bei Bluthochdruck kurz halten oder auslassen. Bei Rückenbeschwerden nicht geeignet."
    }
  },
  {
    id: "rdl_lh",
    name: "Rumänisches Kreuzheben mit Langhantel",
    auch: ["Barbell RDL", "Romanian Deadlift", "RDL"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "ruecken_unten"],
    sekundaer: ["adduktoren", "oberer_ruecken", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    hinweis: "Hüfte nach hinten schieben, Knie leicht gebeugt, nur so tief wie der Rücken gerade bleibt.",
    info: {
      kurz: "Hüftbeugen mit der Langhantel aus dem Stand: Du schiebst die Hüfte nach hinten und senkst die Stange an den Beinen entlang bis knapp unter die Knie. Eine der wirksamsten Übungen für Beinbeuger und Gesäß in gedehnter Position.",
      ausfuehrung: [
        "Nimm die Stange aus dem Rack oder heb sie vom Boden, stell dich hüftbreit hin, Griff knapp schulterbreit, Knie locker gebeugt.",
        "Zieh die Schulterblätter leicht nach hinten unten und spann den Latissimus an, damit die Stange an den Beinen bleibt.",
        "Schieb die Hüfte nach hinten, als wolltest du mit dem Gesäß eine Tür hinter dir schließen. Der Oberkörper neigt sich nach vorn, der Rücken bleibt gerade.",
        "Die Stange gleitet an den Oberschenkeln nach unten. Die Knie bleiben im gleichen leichten Winkel, die Schienbeine fast senkrecht.",
        "Geh so tief, bis du eine starke Dehnung in den Beinbeugern spürst, meist etwa Mitte Schienbein. Der Rücken darf dabei nicht rund werden.",
        "Drück die Hüfte kraftvoll nach vorn, bis du wieder aufrecht stehst. Oben das Gesäß kurz anspannen, ohne zurückzulehnen.",
        "Senke in etwa zwei bis drei Sekunden ab und komm zügig wieder hoch."
      ],
      atmung: "Oben einatmen und den Bauch fest machen, beim Absenken halten, beim Hochkommen ausatmen.",
      fehler: [
        "Runder Rücken unten: Nur so tief gehen, wie der Rücken neutral bleibt.",
        "Kniebeuge statt Hüftbeuge: Die Knie bleiben fast im gleichen Winkel, die Hüfte wandert nach hinten.",
        "Stange entfernt sich von den Beinen: Latissimus anspannen und die Stange an die Beine ziehen.",
        "Blick zur Decke und Nacken überstreckt: Blick etwa zwei Meter vor dir auf den Boden.",
        "Überstrecken oben: Einfach aufrecht stehen und das Gesäß anspannen."
      ],
      vorteile: [
        "Kräftigt die Beinbeuger in der gedehnten Position, was für Muskelaufbau besonders wirksam ist.",
        "Trainiert das Hüftbeugen, das du bei jedem Heben im Alltag brauchst.",
        "Kann helfen, Zerrungen der hinteren Oberschenkel vorzubeugen.",
        "Stärkt Rückenstrecker und Griff."
      ],
      tipps: [
        "Arbeite meist mit 6 bis 10 Wiederholungen und betone das langsame Absenken.",
        "Leichte Gewichtsverlagerung auf die Fersen hilft, die Hüfte nach hinten zu schieben.",
        "Zughilfen sind erlaubt, damit der Griff nicht die Satzlänge bestimmt."
      ],
      varianten: "Leichter: mit Kurzhanteln oder nur bis zum Knie. Schwerer: mehr Last, Pause unten oder Defizit auf einer Scheibe.",
      sicherheit: "Bei Bandscheibenproblemen oder akuten Rückenschmerzen vorher abklären und mit leichtem Gewicht und kurzem Bewegungsweg beginnen.",
      golf: "Stärkt die hintere Kette, die im Rückschwung und Abschwung die vorgebeugte Haltung trägt. Kräftige Gesäß- und Rückenstrecker entlasten die Lendenwirbelsäule, die bei Golfern oft überlastet wird, und schulen das Hüftbeugen der Ansprechposition."
    }
  },
  {
    id: "rdl_kh",
    name: "Rumänisches Kreuzheben mit Kurzhanteln",
    auch: ["Dumbbell RDL", "DB Romanian Deadlift"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "ruecken_unten"],
    sekundaer: ["adduktoren", "unterarm", "oberer_ruecken"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    info: {
      kurz: "Rumänisches Kreuzheben mit zwei Kurzhanteln oder Kettlebells. Gut zum Lernen des Hüftbeugens und für zu Hause, weil die Hanteln frei neben den Beinen laufen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, je eine Hantel vor den Oberschenkeln, Handflächen zum Körper, Knie locker gebeugt.",
        "Spann Rumpf und oberen Rücken an, die Schultern sind leicht zurückgezogen.",
        "Schieb die Hüfte nach hinten und lass die Hanteln eng an den Oberschenkeln nach unten gleiten.",
        "Geh so tief, bis du eine deutliche Dehnung in den Beinbeugern spürst, meist bis Mitte Schienbein, mit geradem Rücken.",
        "Drück die Hüfte nach vorn und richte dich auf, bis du gerade stehst und das Gesäß angespannt ist.",
        "Senke kontrolliert in zwei bis drei Sekunden ab und wiederhole."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Aufrichten ausatmen.",
      fehler: [
        "Hanteln hängen weit vor dem Körper: Eng an den Beinen führen.",
        "Runder Rücken: Bewegungsweg verkürzen.",
        "Knie beugen sich immer weiter: Die Bewegung kommt aus der Hüfte.",
        "Schultern rollen nach vorn: Brust offen, Schulterblätter leicht zusammen."
      ],
      vorteile: [
        "Leichter zu lernen als mit der Langhantel und gut zu Hause machbar.",
        "Kräftigt Beinbeuger und Gesäß in gedehnter Position.",
        "Die Hanteln können etwas seitlich laufen, das ist für manche angenehmer für Hüfte und Rücken.",
        "Schult das Hüftbeugen für den Alltag."
      ],
      tipps: [
        "Mit neutralem Griff (Handflächen zueinander) die Hanteln seitlich der Beine führen, wenn das angenehmer ist.",
        "Ein langsames Absenken von drei Sekunden macht auch leichte Hanteln wirksam.",
        "Bei 8 bis 15 Wiederholungen arbeiten, wenn die Hanteln leicht sind."
      ],
      varianten: "Leichter: kürzerer Weg oder mit nur einer Hantel vor dem Körper. Schwerer: B-Stand-Kreuzheben oder einbeinig.",
      sicherheit: "Bei akuten Rückenschmerzen vorher abklären. Gewicht so wählen, dass der Rücken jederzeit gerade bleibt."
    }
  },
  {
    id: "einbein_kreuzheben",
    name: "Einbeiniges rumänisches Kreuzheben mit Kurzhantel",
    auch: ["Single-Leg RDL", "Single Leg Romanian Deadlift", "Einbeiniges Kreuzheben"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "gesaess_mittel"],
    sekundaer: ["ruecken_unten", "bauch", "schraege_bauch", "waden"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    einseitig: true,
    hinweis: "Becken bleibt gerade, wie eine Wippe nach vorn kippen.",
    info: {
      kurz: "Rumänisches Kreuzheben auf einem Bein, die Hantel in der Gegenhand. Trainiert Beinbeuger und Gesäß und fordert zugleich Gleichgewicht und Beckenstabilität.",
      ausfuehrung: [
        "Stell dich auf das linke Bein, Knie leicht gebeugt, die Hantel hängt in der rechten Hand.",
        "Spann den Rumpf an und zieh die rechte Schulter leicht zurück.",
        "Kipp den Oberkörper wie eine Wippe nach vorn, während das rechte Bein gestreckt nach hinten geht. Oberkörper und hinteres Bein bilden eine Linie.",
        "Halte das Becken waagerecht: Die Zehen des hinteren Fußes zeigen zum Boden, die Hüfte dreht nicht auf.",
        "Senke die Hantel nah am Standbein nach unten, bis du eine Dehnung im hinteren Oberschenkel des Standbeins spürst.",
        "Drück den Fuß in den Boden und schieb die Hüfte nach vorn, bis du wieder aufrecht stehst.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Oben einatmen, beim Vorkippen halten oder langsam ausatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Hüfte dreht nach außen auf: Hinterer Fuß zeigt nach unten, Becken bleibt parallel zum Boden.",
        "Rücken rundet sich: Bewegungsweg verkürzen und Brust lang machen.",
        "Standknie wird ganz gestreckt oder stark gebeugt: Leicht gebeugt und gleichbleibend halten.",
        "Hektik und Wackeln: Langsam bewegen, eventuell mit einer Hand leicht an der Wand abstützen."
      ],
      vorteile: [
        "Kräftigt jede Seite einzeln und deckt Unterschiede zwischen den Beinen auf.",
        "Trainiert den mittleren Gesäßmuskel und die Stabilität von Becken, Knie und Sprunggelenk.",
        "Verbessert Gleichgewicht und Körperkontrolle.",
        "Wenig Last nötig, deshalb rückenfreundlich."
      ],
      tipps: [
        "Halte die Hantel in der Hand gegenüber dem Standbein, das fordert die Hüftstabilität am meisten.",
        "Blick auf einen Punkt am Boden etwa einen Meter vor dir hilft beim Gleichgewicht.",
        "Wenn das Gleichgewicht limitiert, nimm erst das B-Stand-Kreuzheben."
      ],
      varianten: "Leichter: ohne Gewicht, mit Abstützen an der Wand oder im B-Stand. Schwerer: schwerere Hantel, langsames Absenken oder an der Landmine mit mehr Last.",
      sicherheit: "Bei Gleichgewichtsproblemen oder Sprunggelenksbeschwerden in Wandnähe üben.",
      golf: "Golf ist ein Sport auf einem Bein: Im Abschwung trägt das Führungsbein die Last, während sich die Hüfte darüber dreht. Diese Übung stärkt genau diese Stabilität von Becken und Hüfte und hilft, die Ansprechhaltung und das Gleichgewicht im Durchschwung zu halten."
    }
  },
  {
    id: "einbein_kreuzheben_kg",
    name: "Einbeiniges Kreuzheben ohne Gewicht",
    auch: ["Bodyweight Single-Leg RDL", "Single Leg Hip Hinge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "gesaess_mittel"],
    sekundaer: ["bauch", "waden", "ruecken_unten"],
    geraete: [[], ["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf", "laufen", "fussball"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Einbeiniges Hüftbeugen nur mit dem eigenen Körpergewicht. Ideal zum Lernen der Bewegung, zum Aufwärmen und für Gleichgewicht und Beckenkontrolle.",
      ausfuehrung: [
        "Stell dich auf ein Bein, das Knie leicht gebeugt. Die Arme hängen locker oder sind seitlich ausgestreckt.",
        "Kipp den Oberkörper nach vorn, während das freie Bein gestreckt nach hinten geht, bis Oberkörper und Bein fast waagerecht sind.",
        "Halte das Becken gerade, der hintere Fuß zeigt mit den Zehen zum Boden.",
        "Spür die Dehnung im hinteren Oberschenkel des Standbeins und halte kurz.",
        "Drück den Fuß in den Boden und richte dich mit der Kraft des Gesäßes wieder auf.",
        "Mach alle Wiederholungen langsam und kontrolliert und wechsle dann die Seite."
      ],
      atmung: "Beim Vorkippen einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Becken kippt seitlich auf: Hüftknochen zeigen beide zum Boden.",
        "Zu schnell: Langsam bewegen, Gleichgewicht ist das Ziel.",
        "Rücken rund: Lieber weniger tief gehen."
      ],
      vorteile: [
        "Lernt das einbeinige Hüftbeugen ohne Last.",
        "Verbessert Gleichgewicht, Fußstabilität und Hüftkontrolle.",
        "Gut als Aufwärmübung vor Läufen, Spielen oder Golfrunden."
      ],
      tipps: [
        "Anfangs mit einer Fingerspitze an der Wand abstützen.",
        "Arme seitlich ausgestreckt helfen, die Hüfte gerade zu halten."
      ],
      varianten: "Leichter: an der Wand abstützen oder im B-Stand. Schwerer: mit Kurzhantel oder Kettlebell in der Gegenhand.",
      sicherheit: "Bei Schwindel oder Gleichgewichtsproblemen immer in Reichweite einer Wand üben."
    }
  },
  {
    id: "kb_kreuzheben",
    name: "Kettlebell-Kreuzheben",
    auch: ["Kettlebell Deadlift", "KB Deadlift"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "quadrizeps"],
    sekundaer: ["ruecken_unten", "unterarm", "adduktoren"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Kreuzheben mit einer Kettlebell zwischen den Füßen. Die einfachste Form, das Heben vom Boden zu lernen, und eine gute Vorbereitung auf Kettlebell-Swing und Langhantel-Kreuzheben.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, die Kettlebell steht zwischen den Füßen auf Höhe der Fußmitte.",
        "Schieb die Hüfte nach hinten und beuge die Knie, bis du den Griff mit beiden Händen fassen kannst. Rücken gerade, Brust nach vorn.",
        "Spann die Arme und den oberen Rücken an, als wolltest du den Griff auseinanderbiegen.",
        "Drück dich aus den Beinen hoch und streck die Hüfte, bis du aufrecht stehst und das Gesäß fest ist.",
        "Senke die Kettlebell auf demselben Weg ab: Hüfte nach hinten, dann Knie beugen, bis sie den Boden berührt."
      ],
      atmung: "Unten einatmen und Bauch fest machen, beim Hochkommen ausatmen.",
      fehler: [
        "Kettlebell zu weit vorn: Sie steht zwischen den Füßen, nicht davor.",
        "Rücken rund beim Greifen: Hüfte weiter nach hinten, Knie mehr beugen.",
        "Nur mit dem Rücken ziehen: Die Beine drücken den Boden weg."
      ],
      vorteile: [
        "Sicherer Einstieg ins Heben vom Boden.",
        "Trainiert Gesäß, Beinbeuger und Beine mit wenig Material.",
        "Überträgt sich direkt auf das Heben von Lasten im Alltag."
      ],
      tipps: [
        "Wenn die Kettlebell zu niedrig ist, stell sie auf eine Hantelscheibe oder einen Block.",
        "Mit zwei Kettlebells neben den Füßen wird es zur schwereren Variante."
      ],
      varianten: "Leichter: Kettlebell erhöht hinstellen. Schwerer: schwerere Kettlebell, zwei Kettlebells oder einbeinig.",
      sicherheit: "Bei Rückenbeschwerden mit leichtem Gewicht und erhöhter Kettlebell starten."
    }
  },
  {
    id: "rdl_kabel",
    name: "Rumänisches Kreuzheben am Kabelzug",
    auch: ["Cable RDL", "Cable Romanian Deadlift"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["ruecken_unten", "unterarm"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 1,
    info: {
      kurz: "Rumänisches Kreuzheben mit Stange oder Seil am unteren Kabelzug. Der Zug kommt leicht von vorn, dadurch bleibt die Spannung auch oben erhalten und die Last ist fein einstellbar.",
      ausfuehrung: [
        "Häng eine gerade Stange oder ein Seil an den unteren Kabelzug und stell dich mit etwa einem halben Meter Abstand davor.",
        "Greif die Stange schulterbreit, stell dich hüftbreit hin, Knie locker gebeugt.",
        "Schieb die Hüfte nach hinten, der Oberkörper neigt sich nach vorn, die Stange folgt dem Kabel nach unten.",
        "Geh so tief, bis die Beinbeuger deutlich gedehnt sind und der Rücken noch gerade ist.",
        "Streck die Hüfte nach vorn, bis du aufrecht stehst, und spann oben das Gesäß an.",
        "Wiederhole gleichmäßig, ohne dass das Gewicht im Turm aufsetzt."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Zu nah am Kabelturm: Dann zieht das Kabel kaum. Etwas Abstand nehmen.",
        "Rücken rund: Weg verkürzen.",
        "Mit den Armen ziehen: Arme bleiben lang, die Hüfte arbeitet."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Weg, auch oben im Stand.",
        "Fein abgestufte Last, gut für höhere Wiederholungszahlen.",
        "Geringe Belastung für Griff und Rücken im Vergleich zur Langhantel."
      ],
      tipps: [
        "Gut als zweite Hüftübung nach schwerem Kreuzheben mit 10 bis 15 Wiederholungen.",
        "Ein Seil erlaubt einen neutralen Griff, der angenehmer für die Handgelenke ist."
      ],
      varianten: "Leichter: weniger Gewicht, kürzerer Weg. Schwerer: einbeinig am Kabel oder längere Pause unten.",
      sicherheit: "Bei Rückenbeschwerden zuerst den Bewegungsweg klein halten."
    }
  },
  {
    id: "rdl_b_stance",
    name: "Kreuzheben im B-Stand",
    auch: ["B-Stance RDL", "Kickstand RDL", "Staggered Stance RDL"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["gesaess_mittel", "ruecken_unten", "unterarm"],
    geraete: [["kurzhantel"], ["kettlebell"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Rumänisches Kreuzheben mit versetztem Stand: Das vordere Bein trägt den Großteil der Last, der hintere Fuß steht nur auf den Zehen zur Stabilisierung. Die Brücke zwischen beidbeinig und einbeinig.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und setz einen Fuß so zurück, dass seine Zehen auf Höhe der Ferse des vorderen Fußes stehen. Die hintere Ferse ist angehoben.",
        "Verlagere etwa 70 bis 80 Prozent des Gewichts auf das vordere Bein, Knie leicht gebeugt.",
        "Halte die Hanteln vor den Oberschenkeln oder neben dem vorderen Bein.",
        "Schieb die Hüfte nach hinten, der Oberkörper neigt sich nach vorn, die Hanteln gleiten am vorderen Bein nach unten.",
        "Geh bis zu einer kräftigen Dehnung im hinteren Oberschenkel des vorderen Beins, Rücken gerade.",
        "Richte dich auf, indem du die vordere Ferse in den Boden drückst und die Hüfte nach vorn schiebst.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Aufrichten ausatmen.",
      fehler: [
        "Zu viel Gewicht auf dem hinteren Bein: Es dient nur als Stütze.",
        "Becken dreht auf: Beide Hüftknochen zeigen nach vorn.",
        "Rücken rund: Weg verkürzen und Brust lang machen."
      ],
      vorteile: [
        "Fast einbeinige Belastung ohne das Gleichgewicht als Grenze, dadurch mehr Last möglich.",
        "Gleicht Kraftunterschiede zwischen den Beinen aus.",
        "Gute Wahl für Sportler, die einseitige Stabilität und Kraft brauchen."
      ],
      tipps: [
        "Beginne mit Kurzhanteln, später geht auch die Langhantel.",
        "Wer beim einbeinigen Kreuzheben wackelt, wird hier mehr Gewicht schaffen und trotzdem einseitig trainieren."
      ],
      varianten: "Leichter: beidbeiniges rumänisches Kreuzheben. Schwerer: einbeiniges rumänisches Kreuzheben oder mehr Last.",
      sicherheit: "Bei Rückenbeschwerden mit kleinem Bewegungsweg beginnen.",
      golf: "Der versetzte Stand ähnelt der Gewichtsverlagerung im Golfschwung. Du baust einseitige Kraft in Gesäß und Beinbeugern des Führungsbeins auf und lernst, das Becken unter Last stabil zu halten, was die Drehung um das vordere Bein unterstützt."
    }
  },
  {
    id: "rdl_landmine_einbeinig",
    name: "Einbeiniges Kreuzheben an der Landmine",
    auch: ["Landmine Single-Leg RDL", "Meadows RDL"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "gesaess_mittel"],
    sekundaer: ["ruecken_unten", "schraege_bauch", "unterarm"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Einbeiniges Kreuzheben mit dem Ende einer in der Landmine befestigten Langhantel. Die geführte Bahn erleichtert das Gleichgewicht, sodass Du mehr Last für Beinbeuger und Gesäß bewegen kannst.",
      ausfuehrung: [
        "Stell dich seitlich neben das freie Ende der Langhantel, das Ende liegt neben dem Fuß des Standbeins.",
        "Greif das Ende mit der Hand auf der Seite des Standbeins oder der Gegenhand und heb es in den Stand.",
        "Kipp den Oberkörper nach vorn, das freie Bein geht nach hinten, die Stange wandert entlang ihrer Bahn nach unten.",
        "Halte das Becken waagerecht und den Rücken gerade, bis du eine kräftige Dehnung im Standbein spürst.",
        "Drück den Fuß in den Boden und richte dich auf, bis du gerade stehst.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Aufrichten ausatmen.",
      fehler: [
        "Oberkörper dreht zur Stange: Schultern bleiben parallel zum Boden.",
        "Standknie gestreckt: Leicht gebeugt halten.",
        "Rücken rund: Weniger tief gehen."
      ],
      vorteile: [
        "Mehr Last als beim freien einbeinigen Kreuzheben möglich.",
        "Die geführte Bahn hilft beim Gleichgewicht.",
        "Trainiert einseitige Hüftkraft und Rumpfstabilität gegen Rotation."
      ],
      tipps: [
        "Stell dich so, dass die Stange leicht schräg nach vorn läuft, das fühlt sich natürlich an.",
        "Gut für 8 bis 12 Wiederholungen je Seite."
      ],
      varianten: "Leichter: mit Fußspitze des hinteren Beins am Boden (B-Stand). Schwerer: mehr Scheiben oder Pause unten.",
      sicherheit: "Bei Rückenbeschwerden mit leichter Last beginnen."
    }
  },
  {
    id: "kreuzheben_gestreckt",
    name: "Kreuzheben mit gestreckten Beinen",
    auch: ["Stiff-Leg Deadlift", "SLDL", "Steifbeiniges Kreuzheben"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "ruecken_unten"],
    sekundaer: ["unterarm", "oberer_ruecken"],
    geraete: [["langhantel"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, huefte: 1 },
    stufe: 2,
    info: {
      kurz: "Kreuzheben vom Boden mit nahezu gestreckten Knien. Im Unterschied zum rumänischen Kreuzheben startet jede Wiederholung am Boden und die Knie bleiben gerader, was die Beinbeuger noch stärker dehnt.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Stange liegt über der Fußmitte am Boden.",
        "Beuge die Knie nur leicht und kipp den Oberkörper mit geradem Rücken nach vorn, bis du die Stange greifen kannst.",
        "Spann Latissimus und Rumpf an. Die Hüfte liegt deutlich höher als beim klassischen Kreuzheben.",
        "Heb die Stange, indem du die Hüfte nach vorn schiebst. Die Knie bleiben im leicht gebeugten Winkel.",
        "Streck dich oben vollständig auf und spann das Gesäß an.",
        "Senke die Stange kontrolliert am Bein entlang ab, bis sie den Boden leicht berührt."
      ],
      atmung: "Vor dem Zug einatmen und halten, oben ausatmen.",
      fehler: [
        "Rücken rund, weil die Beweglichkeit nicht reicht: Stange auf eine Erhöhung legen.",
        "Knie komplett durchgedrückt: Eine leichte Beugung bleibt.",
        "Zu schwer: Diese Variante verlangt weniger Last als klassisches Kreuzheben."
      ],
      vorteile: [
        "Sehr starke Dehnung und Belastung der Beinbeuger.",
        "Kräftigt die Rückenstrecker intensiv.",
        "Der Neustart am Boden trainiert Kraft ohne Schwung."
      ],
      tipps: [
        "Wer den Boden nicht mit geradem Rücken erreicht, legt die Stange auf Blöcke.",
        "Mit 6 bis 10 Wiederholungen und kontrolliertem Absenken arbeiten."
      ],
      varianten: "Leichter: rumänisches Kreuzheben oder Kurzhanteln. Schwerer: auf einer Scheibe stehend für mehr Weg.",
      sicherheit: "Nicht bei akuten Rückenbeschwerden. Wer wenig Beweglichkeit in den Beinbeugern hat, nimmt erst das rumänische Kreuzheben."
    }
  },
  {
    id: "good_morning_lh",
    name: "Good Morning mit Langhantel",
    auch: ["Barbell Good Morning", "Good Morning"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "ruecken_unten", "gesaess"],
    sekundaer: ["oberer_ruecken", "bauch"],
    geraete: [["langhantel", "rack"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 2, huefte: 1, schulter: 1 },
    stufe: 3,
    info: {
      kurz: "Hüftbeugen mit der Langhantel auf dem oberen Rücken wie bei der Kniebeuge. Der lange Hebel macht schon leichte Lasten sehr wirksam für Beinbeuger und Rückenstrecker.",
      ausfuehrung: [
        "Leg die Stange wie bei der Kniebeuge auf den oberen Rücken, nicht auf den Nacken, und tritt aus dem Rack zurück.",
        "Stell dich hüftbreit hin, Knie leicht gebeugt, Ellbogen nach unten, oberen Rücken anspannen.",
        "Atme ein, spann den Bauch an und schieb die Hüfte nach hinten. Der Oberkörper neigt sich nach vorn.",
        "Geh so tief, bis der Oberkörper fast waagerecht ist oder die Beinbeuger deutlich gedehnt sind. Der Rücken bleibt gerade.",
        "Drück die Hüfte nach vorn und richte dich auf, bis du gerade stehst.",
        "Arbeite langsam und kontrolliert, ohne aus der unteren Position zu federn."
      ],
      atmung: "Oben einatmen, beim Absenken und unten halten, beim Aufrichten ausatmen.",
      fehler: [
        "Zu schwer starten: Beginne mit leerer Stange, der Hebel ist sehr lang.",
        "Runder Rücken unten: Nur so tief wie die Position neutral bleibt.",
        "Knie beugen sich immer mehr: Der Winkel bleibt fast gleich.",
        "Stange rollt Richtung Nacken: Hände fest, Ellbogen tief."
      ],
      vorteile: [
        "Kräftigt Beinbeuger und Rückenstrecker mit vergleichsweise wenig Gewicht.",
        "Verbessert die Kontrolle über das Hüftbeugen.",
        "Kann die Kniebeuge und das Kreuzheben unterstützen."
      ],
      tipps: [
        "Etwa 20 bis 40 Prozent deines Kniebeugengewichts reichen meist.",
        "Mit 6 bis 10 Wiederholungen arbeiten und unten kurz ruhig werden."
      ],
      varianten: "Leichter: Good Morning mit Band oder Stab. Schwerer: mehr Last oder Pause unten.",
      sicherheit: "Belastet den unteren Rücken stark. Bei Rückenbeschwerden oder Schulterproblemen (Stangenposition) auslassen."
    }
  },
  {
    id: "good_morning_band",
    name: "Good Morning mit Band",
    auch: ["Banded Good Morning", "Band Good Morning"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "ruecken_unten"],
    sekundaer: ["bauch"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Good Morning mit einem langen Widerstandsband, das unter den Füßen und hinter dem Nacken verläuft. Der Widerstand ist oben am größten, dadurch wird das Strecken der Hüfte betont und der Rücken unten geschont.",
      ausfuehrung: [
        "Stell dich hüftbreit auf das Band und leg die andere Schlaufe hinter den Nacken auf den oberen Rücken. Halte das Band vor den Schultern fest.",
        "Knie leicht gebeugt, Bauch fest, Rücken lang.",
        "Schieb die Hüfte nach hinten und neig den Oberkörper nach vorn, bis du eine Dehnung in den Beinbeugern spürst.",
        "Drück die Hüfte gegen den Zug des Bandes nach vorn, bis du aufrecht stehst.",
        "Spann oben das Gesäß ein bis zwei Sekunden kräftig an."
      ],
      atmung: "Beim Vorbeugen einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Band liegt auf der Halswirbelsäule: Schlaufe auf den oberen Rücken legen, eventuell mit Polster.",
        "Rücken rund: Weg verkürzen.",
        "Zu schnell nach oben: Das Band zieht stark, langsam kontrollieren."
      ],
      vorteile: [
        "Rückenschonend, weil unten wenig Widerstand herrscht.",
        "Gut für zu Hause, zum Aufwärmen und für viele Wiederholungen.",
        "Schult das Hüftbeugen und die Gesäßspannung im Stand."
      ],
      tipps: [
        "15 bis 25 Wiederholungen sind ideal als Aufwärmung oder Pump-Satz.",
        "Ein kräftigeres Band oder ein kürzerer Griff erhöhen den Widerstand."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder Langhantel-Good-Morning.",
      sicherheit: "Band vor dem Training auf Risse prüfen. Bei Rückenbeschwerden kleinen Bewegungsweg wählen."
    }
  },
  {
    id: "hip_hinge_stab",
    name: "Hüftbeugen mit Stab",
    auch: ["Dowel Hip Hinge", "Hip Hinge Drill", "Stick Hip Hinge"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["ruecken_unten", "bauch"],
    geraete: [["stab"], ["golfschlaeger"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    schwerer: "einbein_kreuzheben_kg",
    info: {
      kurz: "Technikübung, bei der ein Stab entlang der Wirbelsäule Hinterkopf, oberen Rücken und Kreuzbein berührt. So lernst Du, aus der Hüfte zu beugen und dabei den Rücken neutral zu halten.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte einen Stab oder Golfschläger senkrecht hinter dem Rücken: eine Hand im Nacken, die andere am unteren Rücken.",
        "Der Stab berührt drei Punkte: Hinterkopf, Brustwirbelsäule zwischen den Schulterblättern und das Kreuzbein.",
        "Beuge die Knie leicht und schieb die Hüfte nach hinten. Der Oberkörper neigt sich nach vorn.",
        "Achte darauf, dass alle drei Kontaktpunkte erhalten bleiben. Löst sich einer, ist der Rücken rund oder überstreckt.",
        "Geh bis zu einer deutlichen Dehnung in den Beinbeugern, dann drück die Hüfte zurück nach vorn.",
        "Wiederhole langsam und gleichmäßig."
      ],
      atmung: "Beim Vorbeugen einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Kopf löst sich vom Stab: Nacken lang, Blick schräg nach unten.",
        "Stab verliert Kontakt am Kreuzbein: Rücken wird rund, weniger tief gehen.",
        "Knie beugen sich stark: Es ist eine Hüftbewegung, keine Kniebeuge."
      ],
      vorteile: [
        "Lehrt das saubere Hüftbeugen für Kreuzheben, Swing und Heben im Alltag.",
        "Gibt direkte Rückmeldung über die Rückenposition.",
        "Gut zum Aufwärmen vor Training oder Golfrunde."
      ],
      tipps: [
        "Mach vor jedem Kreuzheben-Training ein bis zwei Sätze mit 8 bis 10 Wiederholungen.",
        "Ein Golfschläger funktioniert genauso gut wie ein Stab."
      ],
      varianten: "Leichter: kleiner Bewegungsweg. Schwerer: einbeinig mit Stab.",
      sicherheit: "Unproblematisch. Bei Rückenschmerzen nur im schmerzfreien Bereich.",
      golf: "Die Ansprechhaltung im Golf ist ein Hüftbeugen mit neutralem Rücken. Mit dieser Übung lernst Du genau diese Position, die TPI-Trainer als Grundlage für einen stabilen Schwung ansehen, und vermeidest einen runden Rücken (C-Haltung) oder ein Hohlkreuz (S-Haltung) am Ball."
    }
  },

  // ---------- Hüftstreckung: Hip Thrust, Beckenheben, Swing ----------
  {
    id: "hip_thrust_lh",
    name: "Hip Thrust mit Langhantel",
    auch: ["Barbell Hip Thrust", "Hüftstoß mit Langhantel"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "quadrizeps", "adduktoren"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    hinweis: "Polster um die Stange, Kinn zur Brust, oben das Gesäß eine Sekunde fest anspannen.",
    info: {
      kurz: "Hüftstreckung mit dem oberen Rücken auf einer Bank und der Langhantel auf der Hüfte. Belastet das Gesäß am stärksten in der gestreckten Position und gilt als eine der besten Übungen für Gesäßkraft.",
      ausfuehrung: [
        "Setz dich mit dem Rücken quer vor eine Bank, die Unterkante der Schulterblätter liegt an der Bankkante.",
        "Roll die Langhantel mit einem Polster über die Beine bis in die Hüftbeuge.",
        "Stell die Füße etwa hüftbreit auf, so dass die Schienbeine oben senkrecht stehen. Die Zehen zeigen leicht nach außen.",
        "Halte die Stange mit beiden Händen fest, zieh das Kinn leicht zur Brust und spann den Bauch an.",
        "Drück dich über die Fersen nach oben, bis Oberkörper und Oberschenkel eine Linie bilden. Das Becken kippt dabei leicht nach hinten, die Rippen bleiben unten.",
        "Halte oben eine Sekunde und spann das Gesäß maximal an.",
        "Senke die Hüfte kontrolliert ab, bis die Hantel knapp über dem Boden ist, und starte die nächste Wiederholung."
      ],
      atmung: "Unten einatmen und Bauch fest machen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hohlkreuz oben: Kinn zur Brust, Rippen nach unten, das Becken kippt leicht nach hinten.",
        "Füße zu weit vorn: Dann arbeiten vor allem die Beinbeuger. Schienbeine oben senkrecht.",
        "Füße zu nah: Dann übernimmt der Quadrizeps, Füße etwas weiter weg.",
        "Bank rutscht weg: Bank an eine Wand stellen oder fixieren.",
        "Oben nicht ganz strecken: Erst wenn die Hüfte ganz gestreckt ist, arbeitet das Gesäß am stärksten."
      ],
      vorteile: [
        "Sehr starke Aktivierung des großen Gesäßmuskels, besonders in voller Hüftstreckung.",
        "Hohe Lasten ohne Belastung der Wirbelsäule in Längsrichtung.",
        "Kann Sprint und Sprungkraft unterstützen, weil die Hüftstreckung kräftiger wird.",
        "Leicht steigerbar und gut messbar."
      ],
      tipps: [
        "Ein dickes Polster oder eine Schaumstoffrolle schützt die Hüftknochen.",
        "Der Blick folgt dem Oberkörper und geht nach vorn, nicht zur Decke.",
        "Arbeite mit 6 bis 12 Wiederholungen, die letzte Wiederholung mit einer kurzen Pause oben.",
        "Ein Miniband um die Knie erhöht die Arbeit des seitlichen Gesäßes."
      ],
      varianten: "Leichter: Beckenheben am Boden oder Hip Thrust mit Kurzhantel. Schwerer: mehr Last, Pause oben oder einbeinig.",
      sicherheit: "Bei Leisten- oder Hüftschmerzen die Fußstellung anpassen. Bei Schmerzen im unteren Rücken auf das Hohlkreuz achten.",
      golf: "Ein kräftiges Gesäß ist der Motor der Hüftstreckung im Abschwung und hilft, Kraft vom Boden auf den Schläger zu übertragen. Starke Gesäßmuskeln entlasten außerdem den unteren Rücken und können helfen, das frühe Aufrichten (Early Extension) im Schwung zu vermeiden."
    }
  },
  {
    id: "hip_thrust_kh",
    name: "Hip Thrust mit Kurzhantel",
    auch: ["Dumbbell Hip Thrust", "DB Hip Thrust"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "quadrizeps"],
    geraete: [["kurzhantel", "bank"], ["kettlebell", "bank"], ["hantelscheibe", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Hip Thrust mit einer Kurzhantel, Kettlebell oder Scheibe auf der Hüfte. Leichter einzurichten als mit der Langhantel und ideal für zu Hause oder mittlere Lasten.",
      ausfuehrung: [
        "Setz dich mit dem oberen Rücken an eine Bank, die Kante liegt unter den Schulterblättern.",
        "Leg die Kurzhantel quer in die Hüftbeuge und halte sie an beiden Enden fest.",
        "Stell die Füße hüftbreit auf, die Schienbeine sind in der oberen Position senkrecht.",
        "Kinn zur Brust, Bauch fest, dann drück dich über die Fersen nach oben, bis die Hüfte gestreckt ist.",
        "Halte oben eine Sekunde und spann das Gesäß kräftig an.",
        "Senke die Hüfte langsam ab und wiederhole."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hantel rutscht: Mit beiden Händen fest an die Hüfte drücken, eventuell ein Handtuch unterlegen.",
        "Hohlkreuz oben: Rippen nach unten, Becken leicht nach hinten kippen.",
        "Zu schnell: Langsam ablassen und oben halten, dann reicht auch leichtes Gewicht."
      ],
      vorteile: [
        "Einfach einzurichten und gut für zu Hause.",
        "Kräftigt das Gesäß gezielt bei geringer Rückenbelastung.",
        "Gute Vorstufe zum Langhantel-Hip-Thrust."
      ],
      tipps: [
        "Bei leichten Hanteln mit 12 bis 20 Wiederholungen und Pause oben arbeiten.",
        "Ein Miniband über den Knien macht die Übung ohne schwere Hantel deutlich härter."
      ],
      varianten: "Leichter: Hip Thrust ohne Gewicht. Schwerer: Langhantel oder einbeinig mit Kurzhantel.",
      sicherheit: "Bei Hüftschmerzen die Fußstellung leicht verändern oder den Weg verkürzen."
    }
  },
  {
    id: "hip_thrust_maschine",
    name: "Hip Thrust an der Maschine",
    auch: ["Hip Thrust Machine", "Glute Drive"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "quadrizeps"],
    geraete: [["gesaessmaschine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 1,
    info: {
      kurz: "Hip Thrust an einer eigenen Maschine mit Hüftpolster oder Gurt. Kein Aufbau, stabile Position und fein einstellbare Last machen sie ideal für schwere Sätze und Muskelaufbau.",
      ausfuehrung: [
        "Stell die Rückenlehne so ein, dass sie unter den Schulterblättern anliegt, und leg den Gurt oder das Polster über die Hüftbeuge.",
        "Stell die Füße hüftbreit auf die Plattform, so dass die Schienbeine oben senkrecht sind.",
        "Greif die Haltegriffe, Kinn zur Brust, Bauch anspannen.",
        "Drück dich über die Fersen nach oben, bis die Hüfte vollständig gestreckt ist.",
        "Halte oben eine Sekunde und spann das Gesäß fest an.",
        "Senke kontrolliert ab, ohne die Gewichte ganz abzusetzen."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hohlkreuz oben: Rippen unten lassen.",
        "Fußposition falsch: Schienbeine oben senkrecht für maximale Gesäßarbeit.",
        "Nur halbe Wiederholungen: Unten weit genug absenken, oben ganz strecken."
      ],
      vorteile: [
        "Schnell eingestellt, keine Langhantel und kein Polster nötig.",
        "Sehr stabile Position, deshalb gut bis kurz vor Muskelversagen trainierbar.",
        "Kräftigt das Gesäß ohne Belastung der Wirbelsäule."
      ],
      tipps: [
        "Gut für 8 bis 15 Wiederholungen mit einer Pause oben in der letzten Wiederholung.",
        "Eine Multipresse oder Beckenheben-Maschine funktioniert ähnlich."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig an der Maschine oder Pausen oben.",
      sicherheit: "Gurt nicht auf die Leiste legen. Bei Hüftschmerzen Fußstellung anpassen."
    }
  },
  {
    id: "hip_thrust_multipresse",
    name: "Hip Thrust an der Multipresse",
    auch: ["Smith Machine Hip Thrust"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "quadrizeps"],
    geraete: [["multipresse", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 1,
    info: {
      kurz: "Hip Thrust mit der geführten Stange der Multipresse. Die feste Bahn macht die Übung stabil und Du musst die Stange nicht ausbalancieren.",
      ausfuehrung: [
        "Stell eine Bank quer in die Multipresse und setz dich so davor, dass die Stange über deiner Hüftbeuge liegt.",
        "Leg ein Polster um die Stange und lehn den oberen Rücken an die Bankkante.",
        "Stell die Füße hüftbreit auf, Schienbeine in der oberen Position senkrecht.",
        "Drück die Stange mit der Hüfte nach oben und dreh die Sicherungshaken auf.",
        "Senke die Hüfte kontrolliert ab und drück dich über die Fersen wieder hoch, bis die Hüfte gestreckt ist.",
        "Halte oben kurz, spann das Gesäß an und dreh am Ende des Satzes die Haken wieder ein."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Position zur Stange falsch: Die Stange muss senkrecht über der Hüfte laufen, sonst drückt sie auf den Bauch.",
        "Hohlkreuz oben: Kinn zur Brust und Rippen unten.",
        "Sicherungen vergessen: Untere Anschläge knapp unter die tiefste Position stellen."
      ],
      vorteile: [
        "Stabil und leicht einzurichten, gut für schwere Sätze.",
        "Untere Sicherungen machen das Training ohne Partner sicher.",
        "Gleiche Wirkung auf das Gesäß wie mit der Langhantel."
      ],
      tipps: [
        "Stell die Sicherungsanschläge so ein, dass die Stange unten darauf liegen bleibt, dann kannst du den Satz jederzeit beenden.",
        "Gut als Alternative, wenn die Langhantel schwer auf die Hüfte zu rollen ist."
      ],
      varianten: "Leichter: weniger Gewicht oder Beckenheben am Boden. Schwerer: mehr Last, einbeinig oder mit Pause oben.",
      sicherheit: "Polster verwenden. Bei Leistenschmerzen Position der Stange prüfen."
    }
  },
  {
    id: "hip_thrust_band",
    name: "Hip Thrust mit Band",
    auch: ["Banded Hip Thrust", "Band Hip Thrust"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger"],
    geraete: [["band", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Hip Thrust, bei dem ein langes Widerstandsband über die Hüfte gespannt und unter der Bank oder unter den Händen fixiert ist. Der Widerstand wächst nach oben, genau dort, wo das Gesäß am stärksten arbeitet.",
      ausfuehrung: [
        "Leg ein langes Band über die Hüftbeuge und befestige beide Enden unter den Bankfüßen oder an schweren Hanteln neben dir.",
        "Lehn den oberen Rücken an die Bankkante, Füße hüftbreit, Schienbeine oben senkrecht.",
        "Kinn zur Brust, Bauch anspannen.",
        "Drück die Hüfte gegen den Bandzug nach oben, bis Oberkörper und Oberschenkel eine Linie bilden.",
        "Halte oben zwei Sekunden und drück das Gesäß fest zusammen.",
        "Senke langsam ab und wiederhole ohne Pause unten."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Band rutscht in die Leiste: Mittig über die Hüftknochen legen.",
        "Unsichere Befestigung: Das Band muss fest verankert sein.",
        "Hohlkreuz statt Hüftstreckung: Becken leicht nach hinten kippen."
      ],
      vorteile: [
        "Ideal für zu Hause und auf Reisen.",
        "Größter Widerstand in der voll gestreckten Hüfte.",
        "Gelenkschonend und gut für viele Wiederholungen."
      ],
      tipps: [
        "15 bis 30 Wiederholungen als Abschluss nach schweren Hüftübungen.",
        "Lässt sich mit der Langhantel kombinieren, dann wird die Endposition besonders hart."
      ],
      varianten: "Leichter: dünneres Band oder ohne Bank am Boden. Schwerer: dickeres Band, einbeinig oder kombiniert mit Hantel.",
      sicherheit: "Band vor dem Einsatz auf Risse prüfen."
    }
  },
  {
    id: "hip_thrust_kg",
    name: "Hip Thrust ohne Gewicht",
    auch: ["Bodyweight Hip Thrust"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "quadrizeps"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "hip_thrust_einbeinig",
    info: {
      kurz: "Hip Thrust nur mit dem eigenen Körpergewicht, der obere Rücken liegt auf einer Bank, einem Sofa oder einer Box. Der größere Bewegungsweg macht ihn etwas härter als Beckenheben am Boden.",
      ausfuehrung: [
        "Lehn den oberen Rücken mit der Kante unter den Schulterblättern an eine Bank oder ein Sofa.",
        "Stell die Füße hüftbreit auf, die Hände liegen auf der Hüfte oder sind seitlich ausgestreckt.",
        "Kinn zur Brust, Bauch anspannen.",
        "Drück dich über die Fersen nach oben, bis die Hüfte ganz gestreckt ist.",
        "Halte oben zwei Sekunden und spann das Gesäß fest an.",
        "Senke langsam ab, bis das Gesäß knapp über dem Boden ist."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu schnell: Langsam und mit Pause oben, sonst ist es zu leicht.",
        "Hohlkreuz oben: Rippen unten lassen.",
        "Knie fallen nach innen: Knie über den Zehen halten."
      ],
      vorteile: [
        "Lernt die Hip-Thrust-Technik ohne Material.",
        "Größerer Weg als Beckenheben am Boden.",
        "Gut zum Aufwärmen und als Einstieg."
      ],
      tipps: [
        "Drei Sekunden absenken und zwei Sekunden oben halten machen die Übung deutlich härter.",
        "Wenn 20 saubere Wiederholungen leicht gehen, wechsle zur einbeinigen Variante."
      ],
      varianten: "Leichter: Beckenheben am Boden. Schwerer: einbeinig oder mit Gewicht.",
      sicherheit: "Unproblematisch. Bei Hüftschmerzen Fußstellung anpassen."
    }
  },
  {
    id: "hip_thrust_einbeinig",
    name: "Einbeiniger Hip Thrust",
    auch: ["Single-Leg Hip Thrust", "Single Leg Hip Thrust"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger", "quadrizeps", "bauch"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    einseitig: true,
    hinweis: "Becken bleibt waagerecht, nicht zur freien Seite absinken lassen.",
    info: {
      kurz: "Hip Thrust auf einem Bein mit dem oberen Rücken auf einer Bank. Fordert das Gesäß jeder Seite einzeln und zusätzlich die Beckenstabilität.",
      ausfuehrung: [
        "Lehn den oberen Rücken an die Bankkante, stell einen Fuß mittig vor dir auf, das andere Knie ziehst du zur Brust oder streckst das Bein aus.",
        "Kinn zur Brust, Bauch anspannen, die Arme liegen seitlich auf der Bank.",
        "Drück dich über die Ferse des Standbeins nach oben, bis die Hüfte gestreckt ist.",
        "Halte das Becken waagerecht, beide Hüftknochen auf gleicher Höhe.",
        "Halte oben eine bis zwei Sekunden und spann das Gesäß an.",
        "Senke langsam ab und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Becken kippt zur freien Seite: Bauch fester, langsamer arbeiten.",
        "Hohlkreuz statt Hüftstreckung: Rippen unten lassen.",
        "Abdrücken mit dem freien Bein am Boden: Das freie Bein bleibt in der Luft."
      ],
      vorteile: [
        "Gleicht Kraftunterschiede zwischen den Seiten aus.",
        "Starker Reiz für das Gesäß ohne Zusatzlast.",
        "Trainiert die Beckenstabilität, wichtig für Laufen, Sprinten und Schwungsportarten."
      ],
      tipps: [
        "Das freie Knie zur Brust gezogen verhindert ein Ausweichen ins Hohlkreuz.",
        "Mit Kurzhantel auf der Hüfte lässt sich die Übung weiter steigern."
      ],
      varianten: "Leichter: einbeiniges Beckenheben am Boden. Schwerer: Kurzhantel auf der Hüfte oder Pausen oben.",
      sicherheit: "Bei Hüft- oder Rückenschmerzen den Bewegungsweg verkürzen."
    }
  },
  {
    id: "glute_bridge",
    name: "Beckenheben",
    auch: ["Glute Bridge", "Hip Bridge", "Brücke"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "bauch"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    schwerer: "glute_bridge_einbeinig",
    info: {
      kurz: "Aus der Rückenlage hebst Du das Becken an, bis Schultern, Hüfte und Knie eine Linie bilden. Einfache Grundübung für das Gesäß, für Einsteiger, zum Aufwärmen und für die Reha.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell die Füße hüftbreit auf, die Fersen etwa eine Handbreit vor dem Gesäß.",
        "Die Arme liegen neben dem Körper, die Handflächen zeigen nach unten.",
        "Spann den Bauch an und drück den unteren Rücken leicht in den Boden.",
        "Drück dich über die Fersen nach oben, bis Schultern, Hüfte und Knie eine Linie bilden.",
        "Halte oben zwei Sekunden und spann das Gesäß kräftig an.",
        "Senke das Becken Wirbel für Wirbel langsam ab und tipp den Boden nur kurz an."
      ],
      atmung: "Unten einatmen, beim Anheben ausatmen.",
      fehler: [
        "Hohlkreuz oben: Nur bis zur geraden Linie heben, Rippen unten.",
        "Beinbeuger krampfen: Füße etwas näher ans Gesäß setzen.",
        "Druck über die Zehen: Fersen in den Boden drücken, Zehen dürfen leicht anheben."
      ],
      vorteile: [
        "Aktiviert das Gesäß ohne Geräte.",
        "Schonend für Rücken und Knie.",
        "Gut als Aufwärmübung vor Kniebeugen, Kreuzheben, Laufen oder Golf."
      ],
      tipps: [
        "Mit einem Miniband über den Knien arbeitet auch der seitliche Gesäßmuskel.",
        "Wenn 20 Wiederholungen leicht gehen, wechsle zur einbeinigen Variante."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: Pause oben, Marschieren oben, einbeinig oder mit Gewicht.",
      sicherheit: "Sehr gut verträglich. Bei Schmerzen im unteren Rücken nicht ins Hohlkreuz drücken."
    }
  },
  {
    id: "glute_bridge_einbeinig",
    name: "Beckenheben einbeinig",
    auch: ["Single-Leg Glute Bridge", "Single Leg Bridge"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger", "bauch"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    schwerer: "hip_thrust_einbeinig",
    info: {
      kurz: "Beckenheben auf einem Bein. Doppelte Last für das Gesäß der Standseite und zusätzlich Arbeit für die seitliche Hüftmuskulatur, damit das Becken gerade bleibt.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell einen Fuß hüftbreit auf, das andere Bein ist gestreckt oder das Knie zur Brust gezogen.",
        "Spann den Bauch an, die Arme liegen neben dem Körper.",
        "Drück dich über die Ferse des Standbeins nach oben, bis Schulter, Hüfte und Knie eine Linie bilden.",
        "Halte das Becken waagerecht und oben eine Sekunde.",
        "Senke langsam ab und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Unten einatmen, beim Anheben ausatmen.",
      fehler: [
        "Becken kippt zur Seite: Langsamer und kleiner Weg, Bauch fest.",
        "Hohlkreuz oben: Nur bis zur Linie heben.",
        "Abdrücken mit dem Nacken: Die Kraft kommt aus dem Bein."
      ],
      vorteile: [
        "Kräftigt jede Seite einzeln ohne Geräte.",
        "Verbessert die Beckenstabilität.",
        "Deckt Seitenunterschiede auf."
      ],
      tipps: [
        "Das freie Knie zur Brust gezogen schützt vor dem Hohlkreuz.",
        "Für mehr Weg die Schultern auf eine Bank legen (einbeiniger Hip Thrust)."
      ],
      varianten: "Leichter: beidbeiniges Beckenheben. Schwerer: einbeiniger Hip Thrust auf der Bank oder Gewicht auf der Hüfte.",
      sicherheit: "Bei Schmerzen in der Leiste den Weg verkürzen."
    }
  },
  {
    id: "glute_bridge_lh",
    name: "Beckenheben mit Langhantel",
    auch: ["Barbell Glute Bridge"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 2,
    info: {
      kurz: "Beckenheben am Boden mit der Langhantel auf der Hüfte. Kürzerer Weg als der Hip Thrust, dafür ohne Bank und mit sehr hohen Lasten möglich, Spannung vor allem in der oberen Hälfte.",
      ausfuehrung: [
        "Setz dich auf den Boden und roll die Langhantel mit Polster über die Beine bis in die Hüftbeuge. Große Scheiben erleichtern das.",
        "Leg dich auf den Rücken, Füße hüftbreit aufgestellt, Fersen etwa eine Handbreit vor dem Gesäß.",
        "Halte die Stange mit beiden Händen fest, Bauch anspannen.",
        "Drück dich über die Fersen nach oben, bis Schultern, Hüfte und Knie eine Linie bilden.",
        "Halte oben eine Sekunde und spann das Gesäß an.",
        "Senke ab, bis das Gesäß den Boden leicht berührt, und wiederhole."
      ],
      atmung: "Unten einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hohlkreuz oben: Rippen unten, Becken leicht nach hinten kippen.",
        "Ohne Polster: Die Stange drückt schmerzhaft auf die Hüftknochen.",
        "Abprallen am Boden: Kurz und weich aufsetzen."
      ],
      vorteile: [
        "Kein Bankaufbau nötig.",
        "Sehr hohe Lasten im Bereich der vollen Hüftstreckung.",
        "Leicht zu lernen."
      ],
      tipps: [
        "Wenn kleine Scheiben aufliegen, starte mit erhöhter Hüfte auf einem Kissen.",
        "Gut für 8 bis 15 Wiederholungen mit Pause oben."
      ],
      varianten: "Leichter: Beckenheben ohne Gewicht oder mit Kurzhantel. Schwerer: Hip Thrust mit Langhantel.",
      sicherheit: "Polster verwenden. Bei Schmerzen im unteren Rücken Hohlkreuz vermeiden."
    }
  },
  {
    id: "glute_bridge_marsch",
    name: "Beckenheben mit Marschieren",
    auch: ["Marching Glute Bridge", "Bridge March"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["bauch", "schraege_bauch", "beinbeuger", "hueftbeuger"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "laufen"],
    golf: 2,
    schwerer: "glute_bridge_einbeinig",
    info: {
      kurz: "Du hältst das Becken oben in der Brückenposition und hebst abwechselnd ein Knie an, ohne dass das Becken absinkt oder kippt. Trainiert Gesäß und Rumpf gegen Rotation.",
      ausfuehrung: [
        "Leg dich auf den Rücken, Füße hüftbreit, Fersen eine Handbreit vor dem Gesäß.",
        "Heb das Becken an, bis Schultern, Hüfte und Knie eine Linie bilden, und spann Gesäß und Bauch an.",
        "Heb langsam einen Fuß einige Zentimeter vom Boden und zieh das Knie Richtung Brust, bis der Oberschenkel senkrecht ist.",
        "Halte das Becken dabei ganz ruhig und waagerecht, als stünde ein Glas Wasser auf deinem Bauch.",
        "Setz den Fuß ab und heb den anderen an.",
        "Wechsle langsam ab, ohne dass das Becken zwischendurch absinkt."
      ],
      atmung: "Ruhig weiteratmen, bei jedem Anheben ausatmen.",
      fehler: [
        "Becken kippt zur Seite des gehobenen Beins: Langsamer und das Gesäß des Standbeins fester anspannen.",
        "Becken sinkt ab: Zwischen den Schritten Höhe halten.",
        "Zu schnell: Jeden Schritt zwei Sekunden halten."
      ],
      vorteile: [
        "Kräftigt das Gesäß einseitig und den Rumpf gegen Rotation.",
        "Verbessert die Beckenkontrolle bei wechselnder Belastung wie beim Gehen und Laufen.",
        "Gut als Aufwärmübung und in der Reha."
      ],
      tipps: [
        "Leg die Hände auf die Hüftknochen, dann spürst du jedes Kippen.",
        "Zähle Schritte je Seite, z. B. 8 bis 12."
      ],
      varianten: "Leichter: Fuß nur knapp anheben. Schwerer: Miniband über den Knien oder Schultern auf einer Bank.",
      sicherheit: "Sehr gut verträglich.",
      golf: "Im Golfschwung muss das Becken stabil bleiben, während die Beine unterschiedlich belastet werden. Diese Übung schult genau die Kombination aus Gesäßspannung und Rumpfkontrolle, die hilft, die Haltung im Rückschwung zu halten und den unteren Rücken zu schützen."
    }
  },
  {
    id: "glute_bridge_isohold",
    name: "Beckenheben-Isohold",
    auch: ["Glute Bridge Hold", "Isometric Glute Bridge"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "bauch"],
    geraete: [[], ["matte"], ["mini_band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Statisches Halten der Brückenposition. Baut Kraftausdauer im Gesäß auf und lehrt Dich, die volle Hüftstreckung ohne Hohlkreuz zu halten.",
      ausfuehrung: [
        "Leg dich auf den Rücken, Füße hüftbreit aufgestellt, Arme neben dem Körper.",
        "Spann den Bauch an und heb das Becken, bis Schultern, Hüfte und Knie eine Linie bilden.",
        "Drück die Fersen in den Boden und spann das Gesäß so fest wie möglich an.",
        "Halte die Position die vorgegebene Zeit, ohne dass das Becken absinkt.",
        "Senke am Ende langsam ab und schüttle die Beine kurz aus."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Becken sinkt langsam ab: Gesäß immer wieder neu anspannen.",
        "Hohlkreuz: Rippen nach unten ziehen.",
        "Beinbeuger krampfen: Füße näher zum Gesäß."
      ],
      vorteile: [
        "Lange Spannungszeit für das Gesäß ohne Gelenkbelastung.",
        "Verbessert das Gefühl für das Anspannen des Gesäßes.",
        "Gut in der Reha und zum Aktivieren vor dem Training."
      ],
      tipps: [
        "Beginne mit 20 bis 30 Sekunden und steigere bis 60 Sekunden.",
        "Ein Miniband über den Knien, gegen das du nach außen drückst, aktiviert zusätzlich das seitliche Gesäß."
      ],
      varianten: "Leichter: kürzer halten. Schwerer: einbeinig halten oder mit Gewicht auf der Hüfte.",
      sicherheit: "Bei Bluthochdruck nicht pressen, ruhig weiteratmen."
    }
  },
  {
    id: "glute_bridge_miniband",
    name: "Beckenheben mit Miniband",
    auch: ["Banded Glute Bridge", "Glute Bridge with Abduction"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger"],
    geraete: [["mini_band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Beckenheben mit einem Miniband knapp über den Knien. Du drückst die Knie gegen das Band nach außen und trainierst so gleichzeitig Hüftstreckung und den seitlichen Gesäßmuskel.",
      ausfuehrung: [
        "Leg ein Miniband knapp über die Knie und leg dich auf den Rücken, Füße hüftbreit aufgestellt.",
        "Drück die Knie leicht nach außen, bis das Band gespannt ist.",
        "Heb das Becken an, bis Schultern, Hüfte und Knie eine Linie bilden, und halte dabei den Druck nach außen.",
        "Halte oben eine bis zwei Sekunden und spann das Gesäß fest an.",
        "Senke langsam ab, die Knie bleiben die ganze Zeit über den Füßen."
      ],
      atmung: "Unten einatmen, beim Anheben ausatmen.",
      fehler: [
        "Knie fallen nach innen: Ständig nach außen gegen das Band drücken.",
        "Hohlkreuz oben: Nur bis zur geraden Linie.",
        "Band rutscht: Knapp über die Knie legen, nicht auf die Kniescheibe."
      ],
      vorteile: [
        "Kombiniert Hüftstreckung und Abduktion in einer Übung.",
        "Lehrt, die Knie in Linie mit den Füßen zu halten.",
        "Ideal zum Aufwärmen vor Kniebeugen und Kreuzheben."
      ],
      tipps: [
        "Unten zusätzlich die Knie zwei- bis dreimal nach außen pulsieren lassen.",
        "15 bis 25 Wiederholungen als Aktivierung."
      ],
      varianten: "Leichter: leichtes Band. Schwerer: festeres Band, Schultern auf der Bank oder mit Gewicht.",
      sicherheit: "Unproblematisch."
    }
  },
  {
    id: "glute_bridge_fuesse_erhoeht",
    name: "Beckenheben mit erhöhten Füßen",
    auch: ["Feet-Elevated Glute Bridge", "Elevated Glute Bridge"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["bauch"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "hamstring_bruecke_einbeinig",
    info: {
      kurz: "Beckenheben mit den Füßen auf einer Bank oder Box. Der Bewegungsweg wird länger und die Beinbeuger arbeiten deutlich mehr mit als beim Beckenheben am Boden.",
      ausfuehrung: [
        "Leg dich auf den Rücken vor eine Bank und stell die Fersen hüftbreit auf die Kante.",
        "Die Knie sind etwa 90 Grad gebeugt, die Arme liegen neben dem Körper.",
        "Drück die Fersen in die Bank und heb das Becken, bis Schultern, Hüfte und Knie eine Linie bilden.",
        "Halte oben eine Sekunde und spann Gesäß und Beinbeuger an.",
        "Senke langsam ab, bis das Gesäß fast den Boden berührt."
      ],
      atmung: "Unten einatmen, beim Anheben ausatmen.",
      fehler: [
        "Füße rutschen weg: Stabile Bank, Schuhe mit Grip.",
        "Hohlkreuz oben: Bauch fest, Rippen unten.",
        "Druck über die Zehen: Über die Fersen arbeiten."
      ],
      vorteile: [
        "Längerer Weg und mehr Arbeit für die Beinbeuger.",
        "Kein Gewicht nötig.",
        "Gute Vorstufe zu einbeinigen Hamstring-Brücken."
      ],
      tipps: [
        "Je weiter die Füße vom Körper entfernt sind, desto mehr arbeiten die Beinbeuger.",
        "12 bis 20 langsame Wiederholungen."
      ],
      varianten: "Leichter: Beckenheben am Boden. Schwerer: einbeinige Hamstring-Brücke oder Gewicht auf der Hüfte.",
      sicherheit: "Bei Krämpfen in den Beinbeugern Füße näher an das Gesäß setzen."
    }
  },
  {
    id: "frog_pump",
    name: "Frog Pumps",
    auch: ["Frog Pump", "Froschbrücke"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [[], ["matte"], ["kurzhantel"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Beckenheben mit aneinandergelegten Fußsohlen und weit geöffneten Knien. Durch die Außenrotation der Hüfte arbeitet fast nur noch das Gesäß, die Beinbeuger werden kaum beteiligt.",
      ausfuehrung: [
        "Leg dich auf den Rücken, leg die Fußsohlen aneinander und lass die Knie weit nach außen fallen.",
        "Zieh die Fersen so nah wie möglich zum Gesäß, die Arme liegen neben dem Körper oder die Hände auf der Hüfte.",
        "Spann den Bauch an und drück die Außenkanten der Füße in den Boden.",
        "Heb das Becken schnell und kraftvoll an, bis die Hüfte gestreckt ist, und spann oben das Gesäß an.",
        "Senke ab und mach direkt die nächste Wiederholung im zügigen Rhythmus."
      ],
      atmung: "Bei jedem Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz statt Hüftstreckung: Becken nach hinten kippen, Rippen unten.",
        "Fersen zu weit vom Gesäß: Näher ran, sonst fehlt die Gesäßspannung.",
        "Knie gehen zusammen: Die Knie bleiben weit offen."
      ],
      vorteile: [
        "Sehr gezielte Gesäßarbeit mit wenig Beinbeuger-Beteiligung.",
        "Gut für viele Wiederholungen und als Abschluss.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Typisch sind 20 bis 50 schnelle Wiederholungen als Finisher.",
        "Eine Kurzhantel auf der Hüfte macht die Übung schwerer."
      ],
      varianten: "Leichter: weniger Wiederholungen. Schwerer: Kurzhantel auf der Hüfte oder Pause oben.",
      sicherheit: "Bei Leisten- oder Hüftschmerzen in Außenrotation die Knie weniger weit öffnen."
    }
  },
  {
    id: "pull_through_kabel",
    name: "Pull-Through am Kabelzug",
    auch: ["Cable Pull-Through", "Cable Pull Through"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["ruecken_unten", "bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Arme bleiben lang, die Hüfte macht die Arbeit.",
    info: {
      kurz: "Mit dem Rücken zum Kabelzug ziehst Du ein Seil zwischen den Beinen hindurch nach vorn, indem Du die Hüfte streckst. Der Zug kommt von hinten, dadurch ist die Übung rückenschonend und lehrt das Hüftbeugen sehr gut.",
      ausfuehrung: [
        "Häng ein Seil an den unteren Kabelzug und stell dich mit dem Rücken zum Turm, etwa ein bis zwei große Schritte entfernt.",
        "Stell dich etwas breiter als hüftbreit hin, greif das Seil zwischen den Beinen hindurch.",
        "Geh ein Stück nach vorn, bis das Gewicht angehoben ist, Knie leicht gebeugt.",
        "Schieb die Hüfte nach hinten, die Arme gleiten zwischen den Beinen nach hinten, der Oberkörper neigt sich nach vorn.",
        "Drück die Hüfte kraftvoll nach vorn, bis du aufrecht stehst, und spann das Gesäß an.",
        "Lass die Hüfte wieder kontrolliert nach hinten wandern und wiederhole."
      ],
      atmung: "Beim Zurückschieben der Hüfte einatmen, beim Strecken ausatmen.",
      fehler: [
        "Mit den Armen ziehen: Arme bleiben lang und entspannt.",
        "Kniebeuge statt Hüftbeuge: Die Knie bleiben nur leicht gebeugt.",
        "Zurücklehnen oben: Gerade stehen und das Gesäß anspannen.",
        "Zu nah am Turm: Etwas mehr Abstand für Spannung oben."
      ],
      vorteile: [
        "Schont die Wirbelsäule, weil die Last nicht auf dem Rücken liegt.",
        "Spannung bis in die volle Hüftstreckung.",
        "Ideal, um das Hüftbeugen zu lernen und für viele Wiederholungen."
      ],
      tipps: [
        "Arbeite mit 10 bis 20 Wiederholungen und spür die Dehnung der Beinbeuger hinten.",
        "Ein Miniband ist nicht nötig, eine breite Fußstellung betont das Gesäß."
      ],
      varianten: "Leichter: weniger Gewicht oder Pull-Through mit Band. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Gut verträglich auch bei leichten Rückenproblemen.",
      golf: "Das kraftvolle Strecken der Hüfte aus dem Hüftbeugen gleicht dem Weg in den Treffmoment. Du stärkst das Gesäß, das im Abschwung beschleunigt, ohne die Wirbelsäule zu belasten, und übst gleichzeitig die Ansprechhaltung mit neutralem Rücken."
    }
  },
  {
    id: "pull_through_band",
    name: "Pull-Through mit Band",
    auch: ["Band Pull-Through", "Banded Pull Through"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["bauch"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Pull-Through mit einem Widerstandsband, das hinter Dir tief befestigt ist. Die Heimvariante des Kabel-Pull-Throughs mit dem größten Widerstand in der vollen Hüftstreckung.",
      ausfuehrung: [
        "Befestige ein langes Band tief hinter dir, z. B. an einem Pfosten, Rack oder Türanker.",
        "Stell dich mit dem Rücken dazu, greif das Band zwischen den Beinen und geh nach vorn, bis es gespannt ist.",
        "Füße etwas breiter als hüftbreit, Knie locker gebeugt.",
        "Schieb die Hüfte nach hinten, die Hände gleiten zwischen den Beinen nach hinten.",
        "Streck die Hüfte gegen den Zug nach vorn und spann oben das Gesäß zwei Sekunden an.",
        "Wiederhole gleichmäßig und ohne Pause in der unteren Position."
      ],
      atmung: "Beim Zurückschieben einatmen, beim Strecken ausatmen.",
      fehler: [
        "Mit den Armen ziehen: Arme lang lassen.",
        "Band zu locker: Weiter nach vorn gehen.",
        "Unsichere Befestigung: Nur an stabilen, festen Punkten verankern."
      ],
      vorteile: [
        "Für zu Hause und unterwegs.",
        "Rückenschonend und leicht zu lernen.",
        "Starke Gesäßarbeit in der Endposition."
      ],
      tipps: [
        "20 bis 30 Wiederholungen als Aufwärmung oder Finisher.",
        "Kombiniere mit Kreuzheben-Training als Technikhilfe."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder Kabelzug.",
      sicherheit: "Band vor dem Training auf Risse prüfen."
    }
  },
  {
    id: "kb_swing",
    name: "Kettlebell-Swing",
    auch: ["Kettlebell Swing", "KB Swing", "Russian Swing", "Zweihändiger Swing"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["ruecken_unten", "bauch", "unterarm", "herz_kreislauf"],
    geraete: [["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    hinweis: "Hüftbeuge, keine Kniebeuge. Die Hüfte schießt nach vorn, die Arme führen nur.",
    info: {
      kurz: "Die Kettlebell wird mit beiden Händen aus einem explosiven Hüftstoß zwischen den Beinen hindurch bis auf Brusthöhe geschwungen. Trainiert Schnellkraft und Ausdauer der hinteren Kette.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, die Kettlebell steht etwa 30 Zentimeter vor dir.",
        "Schieb die Hüfte nach hinten, greif den Griff mit beiden Händen und kipp die Kettlebell leicht zu dir.",
        "Zieh sie kräftig zwischen den Beinen nach hinten wie beim Hike im American Football, die Unterarme berühren die Innenseite der Oberschenkel.",
        "Streck die Hüfte explosiv nach vorn und spann Gesäß und Bauch an. Die Kettlebell schwingt durch diesen Stoß bis etwa Brusthöhe.",
        "Oben stehst du gerade wie bei einer kurzen Planke, die Arme sind locker gestreckt.",
        "Lass die Kettlebell fallen und warte, bis die Unterarme die Oberschenkel fast berühren, dann schiebst du die Hüfte nach hinten.",
        "Beende den Satz, indem du die Kettlebell nach hinten schwingst und vor dir abstellst."
      ],
      atmung: "Beim Hüftstoß kurz und kräftig ausatmen, beim Zurückschwingen einatmen.",
      fehler: [
        "Kniebeuge statt Hüftbeuge: Knie nur leicht beugen, die Hüfte geht nach hinten.",
        "Mit den Armen heben: Die Arme sind nur Seile, die Kraft kommt aus der Hüfte.",
        "Zurücklehnen oben: Gerade stehen, Gesäß und Bauch fest.",
        "Kettlebell zu tief zwischen den Beinen: Hoch zwischen den Oberschenkeln führen, Rücken gerade.",
        "Zu früh in die Hüftbeuge: Warten, bis die Kettlebell fast an der Hüfte ist."
      ],
      vorteile: [
        "Trainiert explosive Hüftstreckung für Sprints, Sprünge und Schläge.",
        "Kräftigt Gesäß, Beinbeuger und Rumpf.",
        "Bringt den Puls hoch und verbindet Kraft mit Kondition.",
        "Benötigt nur eine Kettlebell."
      ],
      tipps: [
        "Männer starten oft mit 16 Kilogramm, Frauen mit 8 bis 12 Kilogramm.",
        "Sätze von 10 bis 20 Wiederholungen oder nach Zeit, z. B. 20 Sekunden Arbeit, 40 Sekunden Pause.",
        "Stell dir vor, du willst eine Tür mit dem Gesäß nach hinten zuschlagen und dann nach vorn springen."
      ],
      varianten: "Leichter: Kettlebell-Kreuzheben oder leichtere Kettlebell. Schwerer: einarmiger Swing oder schwerere Kettlebell.",
      sicherheit: "Bei akuten Rückenschmerzen nicht schwingen. Genug Platz vor und hinter dir lassen.",
      golf: "Der Swing trainiert die gleiche explosive Hüftstreckung, mit der im Abschwung Schlägerkopfgeschwindigkeit entsteht. Er lehrt, Kraft aus der Hüfte statt aus den Armen zu erzeugen und dabei den Rücken neutral zu halten, was die Lendenwirbelsäule entlasten kann."
    }
  },
  {
    id: "kb_swing_einarmig",
    name: "Kettlebell-Swing einarmig",
    auch: ["One-Arm Kettlebell Swing", "Single Arm KB Swing"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["schraege_bauch", "ruecken_unten", "unterarm", "herz_kreislauf"],
    geraete: [["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, schulter: 1 },
    stufe: 3,
    sport: ["golf", "fussball"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Kettlebell-Swing mit einer Hand. Zur explosiven Hüftstreckung kommt eine starke Anforderung an den Rumpf, der der Drehung durch die einseitige Last widerstehen muss.",
      ausfuehrung: [
        "Stell dich wie beim zweihändigen Swing hin und greif die Kettlebell mit einer Hand mittig am Griff.",
        "Die freie Hand bleibt seitlich am Körper oder schwingt locker mit.",
        "Hike die Kettlebell zwischen den Beinen nach hinten, Rücken gerade, Schultern parallel zum Boden.",
        "Streck die Hüfte explosiv und lass die Kettlebell bis Brusthöhe schwingen, ohne dass der Oberkörper sich mitdreht.",
        "Halte die Schulter des Arbeitsarms tief und den Rumpf fest.",
        "Lass die Kettlebell zurückschwingen und mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Hüftstoß kräftig ausatmen, beim Zurückschwingen einatmen.",
      fehler: [
        "Oberkörper dreht sich mit: Schultern bleiben gerade, Bauch fest.",
        "Schulter wird nach vorn gezogen: Schulterblatt aktiv nach hinten unten.",
        "Zu schwer: Mit etwa 60 bis 70 Prozent des zweihändigen Gewichts beginnen."
      ],
      vorteile: [
        "Trainiert Hüftkraft und Rotationsstabilität gleichzeitig.",
        "Fordert den Griff stark.",
        "Deckt Seitenunterschiede auf."
      ],
      tipps: [
        "Erst wenn der zweihändige Swing sicher sitzt.",
        "Wechsel die Hand fortgeschritten oben im Schwung (Handwechsel-Swing), nur mit viel Übung."
      ],
      varianten: "Leichter: zweihändiger Swing. Schwerer: schwerere Kettlebell oder Handwechsel im Schwung.",
      sicherheit: "Bei Rücken- oder Schulterbeschwerden zuerst den zweihändigen Swing nutzen.",
      golf: "Die einseitige Last fordert den Rumpf, Drehung zu kontrollieren, während die Hüfte explosiv streckt. Das entspricht der Aufgabe im Golfschwung: Kraft aus der Hüfte erzeugen und den Oberkörper dabei stabil führen."
    }
  },
  {
    id: "kickback_kabel",
    name: "Kickback am Kabelzug",
    auch: ["Cable Glute Kickback", "Cable Kickback", "Gesäßkickback am Kabel"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "gesaess_mittel"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Stehend am unteren Kabelzug streckst Du ein Bein nach hinten. Isoliert den großen Gesäßmuskel einseitig mit gleichmäßiger Spannung und eignet sich gut als Ergänzung zu schweren Grundübungen.",
      ausfuehrung: [
        "Leg eine Fußmanschette um den Knöchel und befestige sie am unteren Kabelzug.",
        "Stell dich mit dem Gesicht zum Turm, halte dich fest und neig den Oberkörper leicht nach vorn.",
        "Das Standbein ist leicht gebeugt, das Arbeitsbein hängt leicht vor dem Körper.",
        "Streck das Arbeitsbein mit leicht gebeugtem Knie nach hinten, bis die Hüfte ganz gestreckt ist.",
        "Spann oben eine Sekunde das Gesäß an, ohne ins Hohlkreuz zu gehen.",
        "Führ das Bein langsam zurück und wechsle nach allen Wiederholungen die Seite."
      ],
      atmung: "Beim Zurückstrecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz am Ende: Nur so weit nach hinten, wie das Becken ruhig bleibt.",
        "Schwung: Langsam und kontrolliert.",
        "Oberkörper dreht auf: Becken bleibt parallel zum Turm."
      ],
      vorteile: [
        "Isoliert das Gesäß einseitig.",
        "Gleichmäßige Spannung durch den Kabelzug.",
        "Ohne Belastung für Rücken und Knie."
      ],
      tipps: [
        "Etwas mehr Vorneigung und ein leicht nach außen gedrehter Fuß betonen das Gesäß.",
        "Leichtes Gewicht, 12 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: Vierfüßler-Kickback ohne Gewicht. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Bei Schmerzen im unteren Rücken Hohlkreuz vermeiden."
    }
  },
  {
    id: "kickback_vierfuessler",
    name: "Kickback im Vierfüßlerstand",
    auch: ["Donkey Kick", "Quadruped Hip Extension", "Glute Kickback"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "bauch"],
    geraete: [[], ["matte"], ["mini_band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Aus dem Vierfüßlerstand drückst Du ein gebeugtes Bein mit der Fußsohle Richtung Decke. Einfache Übung, um das Gesäß einseitig zu aktivieren.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, Hände unter den Schultern, Knie unter der Hüfte.",
        "Spann den Bauch an, der Rücken ist gerade, der Blick geht zum Boden.",
        "Heb ein Bein mit 90 Grad gebeugtem Knie an und drück die Fußsohle Richtung Decke.",
        "Hebe nur so weit, bis der Oberschenkel waagerecht ist, ohne dass das Becken kippt oder der Rücken ins Hohlkreuz fällt.",
        "Halte oben eine Sekunde und senke langsam ab.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz: Bauch fest, nur bis zur Waagerechten heben.",
        "Becken dreht auf: Hüftknochen bleiben parallel zum Boden.",
        "Schwung: Langsam arbeiten."
      ],
      vorteile: [
        "Aktiviert das Gesäß ohne Geräte.",
        "Schult die Trennung von Hüft- und Rückenbewegung.",
        "Gut als Aufwärmübung."
      ],
      tipps: [
        "Ein Miniband um die Füße oder über den Knien erhöht den Widerstand.",
        "Unterarme statt Hände auf den Boden, wenn die Handgelenke schmerzen."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: mit Miniband oder Kabelzug.",
      sicherheit: "Bei Handgelenkbeschwerden auf den Unterarmen stützen."
    }
  },
  {
    id: "kickback_maschine",
    name: "Kickback an der Gesäßmaschine",
    auch: ["Glute Kickback Machine", "Glute Machine"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger"],
    geraete: [["gesaessmaschine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einbeinige Hüftstreckung an einer Gesäßmaschine mit Brust- oder Unterarmpolster. Stabile Position und geführte Bahn erlauben schwere, saubere Sätze für das Gesäß.",
      ausfuehrung: [
        "Stell die Maschine so ein, dass du mit Brust oder Unterarmen stabil auf dem Polster liegst.",
        "Setz den Fuß des Arbeitsbeins auf die Fußplatte oder unter das Polster, das Standbein steht sicher.",
        "Spann den Bauch an, der Rücken ist gerade.",
        "Drück das Bein über die Ferse nach hinten oben, bis die Hüfte gestreckt ist.",
        "Halte oben eine Sekunde und führ das Bein langsam zurück, bis du eine leichte Dehnung im Gesäß spürst.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz am Ende: Bauch fest, nicht über die Hüftstreckung hinaus drücken.",
        "Zu schwer mit Schwung: Kontrolliert und langsam.",
        "Halbe Wiederholungen: Den vollen Weg nutzen."
      ],
      vorteile: [
        "Isoliert das Gesäß mit hoher Last.",
        "Stabile, sichere Position.",
        "Gut für Muskelaufbau mit 10 bis 15 Wiederholungen."
      ],
      tipps: [
        "Druck über die Ferse betont das Gesäß.",
        "Gut als Ergänzung nach Hip Thrust oder Kreuzheben."
      ],
      varianten: "Leichter: Vierfüßler-Kickback ohne Gewicht. Schwerer: mehr Gewicht oder langsames Absenken.",
      sicherheit: "Bei Rückenschmerzen Hohlkreuz strikt vermeiden."
    }
  },

  // ---------- Hüftstreckung: Rückenstrecken ----------
  {
    id: "rueckenstrecker_45",
    name: "Rückenstrecken an der 45-Grad-Bank",
    auch: ["45 Degree Back Extension", "Hyperextension", "Back Extension"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["ruecken_unten", "gesaess", "beinbeuger"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["rueckenstrecker"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Polster knapp unter dem Hüftknochen, Bewegung aus der Hüfte, oben nicht überstrecken.",
    info: {
      kurz: "Rückenstrecken an der schrägen Hyperextension-Bank. Kräftigt Rückenstrecker, Gesäß und Beinbeuger mit dem eigenen Körpergewicht und ist eine der sichersten Übungen für einen belastbaren unteren Rücken.",
      ausfuehrung: [
        "Stell das Polster so ein, dass seine Oberkante knapp unter deinen Hüftknochen liegt und du die Hüfte frei beugen kannst.",
        "Hak die Fersen unter die Fußpolster, die Beine sind gestreckt, der Körper bildet eine Linie.",
        "Verschränk die Arme vor der Brust oder leg die Hände locker an die Schläfen.",
        "Beuge dich aus der Hüfte langsam nach vorn unten, bis du eine Dehnung in den Beinbeugern spürst. Der Rücken bleibt dabei weitgehend gerade.",
        "Richte dich durch Anspannen von Gesäß und Rücken wieder auf, bis Oberkörper und Beine eine gerade Linie bilden.",
        "Halte oben kurz und senke dann wieder kontrolliert ab."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Überstrecken oben: Nur bis zur geraden Linie, nicht ins Hohlkreuz.",
        "Polster zu hoch: Dann kann sich die Hüfte nicht beugen und der Rücken rundet sich.",
        "Schwung: Langsam und kontrolliert, besonders oben.",
        "Nacken überstreckt: Blick folgt dem Oberkörper."
      ],
      vorteile: [
        "Stärkt die Rückenstrecker in einem gut kontrollierbaren Bewegungsweg.",
        "Gute Ergänzung zum Kreuzheben mit geringer Belastung der Wirbelsäule.",
        "Verbessert die Kraftausdauer des unteren Rückens.",
        "Leicht zu lernen."
      ],
      tipps: [
        "Starte mit 2 bis 3 Sätzen à 12 bis 20 Wiederholungen.",
        "Wenn es zu leicht wird, halte eine Hantelscheibe vor der Brust."
      ],
      varianten: "Leichter: kleiner Bewegungsweg oder Rückenstrecken auf der Bank. Schwerer: Hantelscheibe vor der Brust, Pause oben oder horizontales Rückenstrecken.",
      sicherheit: "Bei akuten Rückenschmerzen oder Bandscheibenvorfall vorher ärztlich abklären. Nicht ins Hohlkreuz überstrecken.",
      golf: "Kräftige Rückenstrecker tragen die vorgebeugte Golfhaltung über 18 Löcher und helfen, Ermüdung im unteren Rücken zu verzögern. Rückenschmerzen gehören zu den häufigsten Golferbeschwerden, eine belastbare hintere Kette ist hier eine wichtige Vorbeugung."
    }
  },
  {
    id: "rueckenstrecker_45_gesaess",
    name: "45-Grad-Hüftstreckung mit Gesäßfokus",
    auch: ["Glute-Biased Back Extension", "45 Degree Hip Extension", "Glute Hyperextension"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "ruecken_unten"],
    geraete: [["rueckenstrecker", "hantelscheibe"], ["rueckenstrecker", "kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Hüftstreckung an der 45-Grad-Bank mit gerundetem oberen Rücken und nach außen gedrehten Füßen. Durch diese Anpassungen arbeitet vor allem das Gesäß, der Rückenstrecker tritt in den Hintergrund.",
      ausfuehrung: [
        "Stell das Polster etwas tiefer als beim normalen Rückenstrecken ein, so dass es unter der Hüfte liegt.",
        "Stell die Füße etwas breiter und dreh sie 30 bis 45 Grad nach außen.",
        "Halte eine Hantelscheibe oder Kurzhantel vor der Brust und mach den oberen Rücken leicht rund, Kinn zur Brust.",
        "Beuge dich aus der Hüfte nach unten, bis du eine Dehnung im Gesäß und in den Beinbeugern spürst.",
        "Drück die Hüfte ins Polster und richte dich nur durch Anspannen des Gesäßes auf, bis die Hüfte gestreckt ist.",
        "Halte oben eine Sekunde und senke kontrolliert ab."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Oberer Rücken streckt sich: Die Rundung bleibt erhalten, sonst übernimmt der Rückenstrecker.",
        "Füße parallel: Nach außen gedreht wird das Gesäß stärker beteiligt.",
        "Hohlkreuz oben: Nur bis zur Hüftstreckung."
      ],
      vorteile: [
        "Sehr gezielte Gesäßübung mit starker Dehnung unten.",
        "Geringe Belastung des unteren Rückens bei richtiger Ausführung.",
        "Gut für Muskelaufbau mit 10 bis 20 Wiederholungen."
      ],
      tipps: [
        "Drück die Knie leicht nach außen, als wolltest du das Polster auseinanderreißen.",
        "Pausiere oben eine Sekunde, um die Gesäßspannung zu spüren."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: schwerere Scheibe oder Band zusätzlich am Gerät.",
      sicherheit: "Bei Rückenbeschwerden mit kleinem Bewegungsweg beginnen."
    }
  },
  {
    id: "rueckenstrecker_horizontal",
    name: "Horizontales Rückenstrecken",
    auch: ["90 Degree Back Extension", "Roman Chair Back Extension", "Horizontal Hyperextension"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["ruecken_unten", "gesaess", "beinbeuger"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["ghd"], ["rueckenstrecker"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Rückenstrecken auf einer waagerechten Bank (Roman Chair). Der Oberkörper bewegt sich aus der Senkrechten bis in die Waagerechte, dadurch ist die Last oben deutlich höher als bei der 45-Grad-Bank.",
      ausfuehrung: [
        "Leg dich bäuchlings auf die waagerechte Bank, die Hüfte liegt am Rand des Polsters, die Fersen sind fixiert.",
        "Lass den Oberkörper nach unten hängen, die Arme sind vor der Brust verschränkt.",
        "Spann den Bauch an und heb den Oberkörper aus der Hüfte an, bis er waagerecht ist.",
        "Halte oben ein bis zwei Sekunden, ohne ins Hohlkreuz zu gehen.",
        "Senke langsam wieder ab, bis die Beinbeuger gedehnt sind."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Überstrecken über die Waagerechte: Nur bis zur Linie.",
        "Schwung aus der Tiefe: Langsam und kontrolliert.",
        "Polster zu hoch: Hüfte muss frei beugen können."
      ],
      vorteile: [
        "Höchste Spannung in der gestreckten Position.",
        "Kräftigt Rückenstrecker und Gesäß intensiv ohne Zusatzgewicht.",
        "Gute Steigerung nach der 45-Grad-Bank."
      ],
      tipps: [
        "Beginne mit 8 bis 12 Wiederholungen, die Übung ist härter als die 45-Grad-Variante.",
        "Mit Hantelscheibe vor der Brust weiter steigern."
      ],
      varianten: "Leichter: 45-Grad-Bank. Schwerer: Gewicht vor der Brust oder lange Pause oben.",
      sicherheit: "Bei Rückenbeschwerden zunächst die 45-Grad-Variante wählen."
    }
  },
  {
    id: "rueckenstrecken_bank",
    name: "Rückenstrecken auf der Bank",
    auch: ["Bench Back Extension", "Rückenstrecken an der Flachbank"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["ruecken_unten", "gesaess"],
    sekundaer: ["beinbeuger", "oberer_ruecken"],
    geraete: [["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    golf: 1,
    hinweis: "Füße unter einer festen Stütze einhaken oder von einem Partner halten lassen.",
    info: {
      kurz: "Rückenstrecken in Bauchlage auf einer Flachbank, die Hüfte liegt an der Bankkante und der Oberkörper hängt frei. Die Heim- und Studiovariante ohne Hyperextension-Gerät.",
      ausfuehrung: [
        "Leg dich bäuchlings auf eine stabile Flachbank, so dass die Hüfte genau an der Kante liegt und der Oberkörper frei über den Rand ragt.",
        "Fixiere die Füße: unter einer Langhantel im Rack, unter einer schweren Hantel oder lass sie von einem Partner halten.",
        "Lass den Oberkörper nach unten hängen und verschränk die Arme vor der Brust.",
        "Heb den Oberkörper durch Anspannen von Gesäß und Rücken an, bis er mit den Beinen eine Linie bildet.",
        "Halte oben eine Sekunde und senke langsam wieder ab."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Bank kippt: Nur stabile, schwere Bänke verwenden und die Füße sicher fixieren.",
        "Überstrecken: Nur bis zur geraden Linie heben.",
        "Ruckartig: Langsam arbeiten."
      ],
      vorteile: [
        "Kein Spezialgerät nötig.",
        "Kräftigt Rückenstrecker und Gesäß im vollen Bewegungsweg.",
        "Gute Ergänzung zu Kreuzheben und Kniebeugen."
      ],
      tipps: [
        "Starte mit 10 bis 15 langsamen Wiederholungen.",
        "Eine Matte auf der Bankkante macht die Lage angenehmer."
      ],
      varianten: "Leichter: Rückenstrecken am Boden in Bauchlage. Schwerer: Hantelscheibe vor der Brust oder 45-Grad-Bank mit Gewicht.",
      sicherheit: "Bank muss stabil stehen. Bei akuten Rückenschmerzen auslassen."
    }
  },
  {
    id: "reverse_hyper_bank",
    name: "Reverse Hyperextension auf der Bank",
    auch: ["Reverse Hyper", "Reverse Hyperextension", "Umgekehrtes Rückenstrecken"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    geraete: [["bank"], ["box"], ["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Bäuchlings auf einer Bank liegend hebst Du die gestreckten Beine nach hinten oben. Hier bewegen sich die Beine statt des Oberkörpers, das entlastet die Wirbelsäule und kräftigt Gesäß und unteren Rücken.",
      ausfuehrung: [
        "Leg dich bäuchlings auf eine Bank oder einen Gymnastikball, so dass die Hüfte an der Kante liegt und die Beine frei nach unten hängen.",
        "Halte dich mit den Händen vorn an der Bank fest.",
        "Spann den Bauch an und heb die Beine gestreckt oder leicht gebeugt nach hinten oben, bis sie etwa waagerecht sind.",
        "Spann das Gesäß oben kurz an, ohne ins Hohlkreuz zu fallen.",
        "Senke die Beine langsam wieder ab, bis die Füße fast den Boden berühren."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Beine zu hoch schwingen: Nur bis zur Waagerechten.",
        "Schwung: Langsam und kontrolliert.",
        "Hüfte liegt auf der Bank: Sie muss an der Kante liegen, damit die Hüfte frei beugen kann."
      ],
      vorteile: [
        "Kräftigt Gesäß und Rückenstrecker ohne Druck auf die Wirbelsäule.",
        "Viele Trainer setzen sie für einen belastbaren unteren Rücken ein.",
        "Einfach mit einer Bank umsetzbar."
      ],
      tipps: [
        "Mit leicht nach außen gedrehten Füßen arbeitet das Gesäß mehr.",
        "12 bis 20 Wiederholungen, mit Fußgewichten oder einer kleinen Hantel zwischen den Füßen steigern."
      ],
      varianten: "Leichter: einbeinig abwechselnd. Schwerer: kleine Kurzhantel zwischen den Füßen oder Pause oben.",
      sicherheit: "Bei Leisten- oder Rückenschmerzen nur kleine Bewegung. Bank darf nicht kippen."
    }
  },

  // ---------- Beinbeuger und Hamstring-Prävention ----------
  {
    id: "beinbeuger_maschine",
    name: "Beinbeuger liegend an der Maschine",
    auch: ["Lying Leg Curl", "Beinbeuger an der Maschine", "Leg Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["beinbeuger_liegend"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["fussball", "laufen"],
    info: {
      kurz: "Kniebeugen gegen Widerstand in Bauchlage an der Maschine. Isoliert die Beinbeuger und ergänzt Hüftübungen wie Kreuzheben, die die Beinbeuger vor allem an der Hüfte trainieren.",
      ausfuehrung: [
        "Stell die Maschine so ein, dass die Kniegelenke knapp hinter dem Polsterende liegen und das Fußpolster über den Fersen oberhalb der Schuhe liegt.",
        "Leg dich bäuchlings hin, greif die Haltegriffe und drück die Hüfte leicht ins Polster.",
        "Beuge die Knie und zieh das Polster Richtung Gesäß, bis die Knie etwa 90 Grad oder mehr gebeugt sind.",
        "Halte oben kurz und spann die Beinbeuger fest an.",
        "Strecke die Beine in zwei bis drei Sekunden langsam wieder, ohne dass die Gewichte aufsetzen."
      ],
      atmung: "Beim Beugen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Hüfte hebt sich vom Polster: Hüfte aktiv nach unten drücken, Gewicht reduzieren.",
        "Schwung: Langsam und gleichmäßig.",
        "Nur halber Weg: Ganz strecken und ganz beugen."
      ],
      vorteile: [
        "Isoliert die Beinbeuger über das Kniegelenk.",
        "Ergänzt Kreuzheben und rumänisches Kreuzheben ideal.",
        "Kann helfen, die Belastbarkeit der Beinbeuger für Sprints zu verbessern."
      ],
      tipps: [
        "Füße angezogen (Zehen Richtung Schienbein) erhöhen die Mitarbeit der Waden, gestreckte Füße isolieren die Beinbeuger mehr.",
        "8 bis 15 Wiederholungen mit langsamem Absenken."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig, langsames Absenken von vier Sekunden oder Teilwiederholungen am Ende.",
      sicherheit: "Bei Knieschmerzen den Bewegungsweg begrenzen."
    }
  },
  {
    id: "beinbeuger_sitzend",
    name: "Beinbeuger sitzend an der Maschine",
    auch: ["Seated Leg Curl", "Sitzender Beinbeuger"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["beinbeuger_sitzend"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["fussball", "laufen"],
    hinweis: "Leicht nach vorn lehnen, das verstärkt die Dehnung der Beinbeuger.",
    info: {
      kurz: "Beinbeuger im Sitzen. Weil die Hüfte gebeugt ist, arbeiten die Beinbeuger hier in einer längeren, gedehnten Position, was für den Muskelaufbau besonders wirksam ist.",
      ausfuehrung: [
        "Setz dich in die Maschine, die Kniegelenke liegen auf Höhe der Drehachse.",
        "Das Fußpolster liegt über den Fersen, das Oberschenkelpolster fixiert die Beine knapp über den Knien.",
        "Halte dich an den Griffen fest und neig den Oberkörper leicht nach vorn.",
        "Zieh die Fersen nach unten hinten, bis die Knie maximal gebeugt sind.",
        "Halte kurz und führ die Beine langsam zurück, bis sie fast gestreckt sind."
      ],
      atmung: "Beim Beugen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Oberschenkelpolster zu locker: Fest einstellen, damit das Becken nicht rutscht.",
        "Schwung aus dem Oberkörper: Ruhig sitzen bleiben.",
        "Nicht ganz strecken: Die gedehnte Position ist der wertvollste Teil."
      ],
      vorteile: [
        "Trainiert die Beinbeuger in gedehnter Position, Untersuchungen zeigen hier mehr Muskelzuwachs als im Liegen.",
        "Stabile, einfache Position.",
        "Gelenkschonend für den Rücken."
      ],
      tipps: [
        "Lehn dich nach vorn, um die Dehnung zu erhöhen.",
        "10 bis 15 Wiederholungen, letzter Satz mit langsamem Absenken."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig oder mit Pausen in der Dehnung.",
      sicherheit: "Bei Knieschmerzen Weg verkürzen."
    }
  },
  {
    id: "beinbeuger_stehend_einbeinig",
    name: "Beinbeuger stehend einbeinig",
    auch: ["Standing Single-Leg Curl", "Standing Leg Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["beinbeuger_stehend"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einbeiniges Kniebeugen im Stehen an der Maschine oder mit Fußmanschette am Kabelzug. Trainiert jede Seite einzeln und deckt Kraftunterschiede auf.",
      ausfuehrung: [
        "Stell dich an die Maschine oder leg eine Manschette um den Knöchel und befestige sie am unteren Kabelzug.",
        "Halte dich fest, das Standbein ist leicht gebeugt, der Oberschenkel des Arbeitsbeins bleibt senkrecht.",
        "Beuge das Knie und zieh die Ferse Richtung Gesäß.",
        "Halte oben kurz, der Oberschenkel bewegt sich nicht nach vorn.",
        "Strecke das Bein langsam wieder und mach alle Wiederholungen, dann wechsle."
      ],
      atmung: "Beim Beugen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Oberschenkel wandert nach vorn: Hüfte gestreckt lassen.",
        "Hohlkreuz: Bauch fest.",
        "Schwung: Langsam arbeiten."
      ],
      vorteile: [
        "Einseitiges Training gleicht Seitenunterschiede aus.",
        "Gute Isolation der Beinbeuger.",
        "Mit Kabelzug auch ohne eigene Maschine möglich."
      ],
      tipps: [
        "Mit dem schwächeren Bein beginnen.",
        "12 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: langsames Absenken oder Pause oben.",
      sicherheit: "Bei Knieschmerzen den Weg anpassen."
    }
  },
  {
    id: "beinbeuger_kh",
    name: "Beinbeuger liegend mit Kurzhantel",
    auch: ["Dumbbell Leg Curl", "DB Lying Leg Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    info: {
      kurz: "Bäuchlings auf der Bank klemmst Du eine Kurzhantel zwischen die Füße und beugst die Knie. Die Variante für Studios und Heimtraining ohne Beinbeuger-Maschine.",
      ausfuehrung: [
        "Stell eine Kurzhantel senkrecht ans Ende einer Flachbank und leg dich bäuchlings so hin, dass die Knie knapp über die Kante ragen.",
        "Klemm die Hantel zwischen die Füße, so dass die obere Scheibe auf den Fußsohlen liegt. Lass dir anfangs helfen.",
        "Halte dich vorn an der Bank fest und drück die Hüfte auf die Bank.",
        "Beuge die Knie und führ die Hantel Richtung Gesäß, bis die Unterschenkel fast senkrecht sind.",
        "Senke langsam wieder ab, bis die Beine fast gestreckt sind."
      ],
      atmung: "Beim Beugen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hantel rutscht: Füße fest zusammendrücken, Zehen anziehen.",
        "Über die Senkrechte beugen: Dann fällt die Hantel, nur bis kurz davor.",
        "Hüfte hebt sich: Gewicht reduzieren."
      ],
      vorteile: [
        "Beinbeuger-Training ohne Maschine.",
        "Gute Dehnung in gestreckter Position.",
        "Wenig Material nötig."
      ],
      tipps: [
        "Mit leichter Hantel und 10 bis 15 Wiederholungen beginnen.",
        "Rutschfeste Socken oder Schuhe helfen beim Halten."
      ],
      varianten: "Leichter: Beinbeuger mit Band. Schwerer: schwerere Hantel oder langsames Absenken.",
      sicherheit: "Achte darauf, dass die Hantel nicht fallen kann, und lass beim Ablegen helfen."
    }
  },
  {
    id: "beinbeuger_band",
    name: "Beinbeuger liegend mit Band",
    auch: ["Band Leg Curl", "Banded Hamstring Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    geraete: [["band"], ["mini_band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Bäuchlings liegend beugst Du die Knie gegen ein Widerstandsband, das vor Dir befestigt ist. Einfache Heimübung für die Beinbeuger und gut zum Aufwärmen.",
      ausfuehrung: [
        "Befestige ein Band tief an einem Tischbein, Türanker oder Pfosten und leg dich bäuchlings mit den Füßen zum Befestigungspunkt.",
        "Leg die Schlaufe um beide Knöchel und rutsche so weit vor, dass das Band bei gestreckten Beinen leicht gespannt ist.",
        "Drück die Hüfte in den Boden, die Stirn liegt auf den Händen.",
        "Beuge die Knie und zieh die Fersen Richtung Gesäß.",
        "Halte kurz und strecke die Beine langsam wieder."
      ],
      atmung: "Beim Beugen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Hüfte hebt sich: Hüfte bleibt am Boden.",
        "Band schnalzt zurück: Langsam strecken.",
        "Band zu locker: Weiter wegrutschen."
      ],
      vorteile: [
        "Für zu Hause und auf Reisen.",
        "Sehr gelenkschonend.",
        "Gut für hohe Wiederholungszahlen und als Aktivierung."
      ],
      tipps: [
        "Einbeinig wird die Übung deutlich härter.",
        "20 bis 30 Wiederholungen."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: einbeinig oder dickeres Band.",
      sicherheit: "Band auf Risse prüfen und sicher befestigen."
    }
  },
  {
    id: "nordic",
    name: "Nordic Ham Curl",
    auch: ["Nordic Hamstring Curl", "Nordische Hamstring-Übung", "Nordics"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "waden"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 3,
    sport: ["fussball", "laufen"],
    hinweis: "Füße unter einem Sofa fixieren oder von jemandem halten lassen. Langsam nach vorn sinken lassen, mit den Händen abfangen.",
    info: {
      kurz: "Kniend mit fixierten Fersen lässt Du den geraden Körper so langsam wie möglich nach vorn sinken. Eine sehr intensive exzentrische Übung für die Beinbeuger, die im Fußball nachweislich zur Vorbeugung von Zerrungen eingesetzt wird.",
      ausfuehrung: [
        "Knie dich auf eine weiche Matte, die Fersen werden von einem Partner, einer Sprossenwand oder einem schweren Möbelstück fixiert.",
        "Der Körper bildet von Knie bis Kopf eine gerade Linie, die Hüfte ist gestreckt, das Gesäß angespannt.",
        "Halte die Hände vor der Brust bereit zum Abfangen.",
        "Lass den geraden Körper so langsam wie möglich nach vorn sinken und bremse mit den Beinbeugern.",
        "Wenn du nicht mehr bremsen kannst, fang dich mit den Händen ab wie bei einem Liegestütz.",
        "Drück dich mit den Händen leicht ab und zieh dich mit den Beinbeugern so weit wie möglich zurück in den Kniestand."
      ],
      atmung: "Beim Absinken langsam ausatmen, in der Ausgangsposition einatmen.",
      fehler: [
        "Hüfte knickt ein: Gesäß fest anspannen, der Körper bleibt gerade.",
        "Zu schnell fallen: Bewusst bremsen, schon wenige Zentimeter mehr Kontrolle zählen.",
        "Zu viele Wiederholungen am Anfang: Muskelkater ist garantiert, mit 2 Sätzen à 3 bis 5 starten."
      ],
      vorteile: [
        "Sehr starke exzentrische Belastung der Beinbeuger.",
        "Programme mit Nordics haben in Studien die Zahl der Hamstring-Verletzungen im Fußball deutlich gesenkt.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Ein- bis zweimal pro Woche genügt, die Übung ist sehr intensiv.",
        "Ein dickes Kissen unter den Knien schont die Kniescheiben.",
        "Steigere den Weg, den du kontrolliert sinken kannst, nicht die Geschwindigkeit."
      ],
      varianten: "Leichter: mit Bandunterstützung oder nur halben Weg. Schwerer: Hände vor der Brust verschränkt oder mit Gewichtsweste.",
      sicherheit: "Bei frischer Hamstring-Verletzung nur nach Freigabe. Bei Knieproblemen dicke Unterlage verwenden."
    }
  },
  {
    id: "nordic_band",
    name: "Nordic Ham Curl mit Bandunterstützung",
    auch: ["Band-Assisted Nordic Curl", "Assisted Nordic"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["fussball", "laufen"],
    schwerer: "nordic",
    info: {
      kurz: "Nordic Ham Curl mit einem Band, das hinter Dir befestigt ist und um die Brust läuft. Das Band trägt einen Teil des Körpergewichts, so kannst Du den ganzen Weg kontrolliert trainieren.",
      ausfuehrung: [
        "Befestige ein kräftiges Band hoch hinter dir, z. B. an einem Rack oder einer Sprossenwand, und leg die Schlaufe unter den Achseln um die Brust.",
        "Knie dich mit fixierten Fersen hin, der Körper bildet eine gerade Linie.",
        "Lass dich langsam nach vorn sinken, das Band hilft beim Bremsen.",
        "Geh so weit wie möglich mit geradem Körper, idealerweise bis kurz vor den Boden.",
        "Zieh dich mit den Beinbeugern und der Hilfe des Bandes zurück in den Kniestand."
      ],
      atmung: "Beim Absinken ausatmen, oben einatmen.",
      fehler: [
        "Hüfte knickt: Gesäß anspannen.",
        "Band zu stark: Wähle ein Band, bei dem der Weg noch fordernd ist.",
        "Band rutscht hoch: Unter den Achseln platzieren."
      ],
      vorteile: [
        "Ermöglicht den vollen Bewegungsweg, bevor die Kraft für freie Nordics reicht.",
        "Exzentrisch und konzentrisch trainierbar.",
        "Gute Steigerung über dünnere Bänder."
      ],
      tipps: [
        "Wechsle zu einem dünneren Band, wenn du 8 Wiederholungen bis zum Boden schaffst.",
        "Zwei bis drei Sätze mit 4 bis 8 Wiederholungen."
      ],
      varianten: "Leichter: dickeres Band. Schwerer: dünneres Band oder freier Nordic Ham Curl.",
      sicherheit: "Band sicher befestigen und auf Risse prüfen."
    }
  },
  {
    id: "beinbeuger_rutschen",
    name: "Beinbeuger-Rutschen",
    auch: ["Sliding Leg Curl", "Sliding Leg Curl (Rollbrett)", "Slider Hamstring Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "bauch"],
    geraete: [["gleitscheiben"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "laufen"],
    golf: 1,
    schwerer: "beinbeuger_rutschen_einbeinig",
    hinweis: "Fersen auf Gleitscheiben, Handtuch oder Rollbrett, Becken bleibt oben.",
    info: {
      kurz: "In der Brückenposition schiebst Du die Fersen auf Gleitscheiben, einem Handtuch oder einem Rollbrett nach vorn und ziehst sie wieder heran. Trainiert die Beinbeuger an Hüfte und Knie gleichzeitig.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Fersen liegen auf Gleitscheiben, einem Handtuch auf glattem Boden oder einem Rollbrett.",
        "Heb das Becken an, bis Schultern, Hüfte und Knie eine Linie bilden.",
        "Schieb die Fersen langsam nach vorn, bis die Beine fast gestreckt sind. Das Becken bleibt so weit wie möglich oben.",
        "Zieh die Fersen kraftvoll wieder zum Gesäß und halte die Hüfte dabei gestreckt.",
        "Wiederhole, ohne das Becken zwischen den Wiederholungen abzulegen."
      ],
      atmung: "Beim Herausschieben einatmen, beim Heranziehen ausatmen.",
      fehler: [
        "Becken sinkt ab: Gesäß angespannt lassen.",
        "Zu schnell herausrutschen: Langsam, das Herausschieben ist der wirksame Teil.",
        "Krampf in den Beinbeugern: Kürzerer Weg, zwischendurch dehnen."
      ],
      vorteile: [
        "Trainiert Hüftstreckung und Kniebeugung gleichzeitig wie beim Sprint.",
        "Sehr gute Heimalternative zur Beinbeuger-Maschine.",
        "Bereitet auf Nordic Ham Curls vor."
      ],
      tipps: [
        "Auf Teppich Gleitscheiben, auf Fliesen oder Parkett ein Handtuch oder Socken.",
        "8 bis 15 Wiederholungen mit drei Sekunden Herausschieben."
      ],
      varianten: "Leichter: nur herausschieben, Becken ablegen und ohne Rutschen zurück. Schwerer: einbeinig.",
      sicherheit: "Bei Krämpfen Übung kurz unterbrechen."
    }
  },
  {
    id: "beinbeuger_rutschen_einbeinig",
    name: "Beinbeuger-Rutschen einbeinig",
    auch: ["Single-Leg Sliding Leg Curl", "Sliding Leg Curl einbeinig"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "gesaess_mittel", "bauch"],
    geraete: [["gleitscheiben"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["fussball", "laufen"],
    einseitig: true,
    schwerer: "nordic",
    info: {
      kurz: "Beinbeuger-Rutschen auf einem Bein, das andere Bein ist in der Luft. Doppelte Last für die Beinbeuger und zusätzliche Arbeit für die Beckenstabilität.",
      ausfuehrung: [
        "Leg dich auf den Rücken, eine Ferse liegt auf einer Gleitscheibe, das andere Bein streckst du nach oben.",
        "Heb das Becken an, bis Schulter, Hüfte und Knie des Arbeitsbeins eine Linie bilden.",
        "Schieb die Ferse langsam nach vorn, das Becken bleibt oben und waagerecht.",
        "Zieh die Ferse wieder zum Gesäß.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Herausschieben einatmen, beim Heranziehen ausatmen.",
      fehler: [
        "Becken kippt zur Seite: Bauch fester, kürzerer Weg.",
        "Becken sinkt ab: Gesäß angespannt halten.",
        "Zu schnell: Langsames Herausschieben."
      ],
      vorteile: [
        "Sehr intensiv für die Beinbeuger ohne Gerät.",
        "Fordert die Beckenstabilität.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Starte mit kurzem Weg und baue ihn aus.",
        "6 bis 12 Wiederholungen je Seite."
      ],
      varianten: "Leichter: beidbeinig. Schwerer: Nordic Ham Curl oder langsameres Herausschieben.",
      sicherheit: "Bei Krämpfen Übung unterbrechen und dehnen."
    }
  },
  {
    id: "beinbeuger_gymnastikball",
    name: "Beinbeuger auf dem Gymnastikball",
    auch: ["Swiss Ball Leg Curl", "Stability Ball Hamstring Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "bauch"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "laufen"],
    schwerer: "beinbeuger_gymnastikball_einbeinig",
    info: {
      kurz: "In der Brückenposition rollst Du einen Gymnastikball mit den Fersen zum Gesäß und wieder weg. Trainiert die Beinbeuger und fordert durch den instabilen Ball zusätzlich Rumpf und Hüfte.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Fersen liegen auf einem Gymnastikball, die Arme seitlich am Boden.",
        "Heb das Becken an, bis der Körper von Schultern bis Fersen eine Linie bildet.",
        "Zieh den Ball mit den Fersen zum Gesäß, die Hüfte bleibt oben und streckt sich dabei weiter.",
        "Halte kurz und roll den Ball langsam zurück, bis die Beine gestreckt sind.",
        "Lass das Becken zwischen den Wiederholungen nicht absinken."
      ],
      atmung: "Beim Heranziehen ausatmen, beim Zurückrollen einatmen.",
      fehler: [
        "Becken sinkt beim Heranziehen: Gesäß anspannen.",
        "Ball wackelt: Arme weiter seitlich, langsamer.",
        "Zu schnell: Langsames Zurückrollen."
      ],
      vorteile: [
        "Trainiert Hüftstreckung und Kniebeugung gleichzeitig.",
        "Fordert die Stabilität durch den Ball.",
        "Gut für zu Hause."
      ],
      tipps: [
        "Arme weit seitlich ausgestreckt geben Stabilität, Arme auf der Brust machen es schwerer.",
        "10 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: nur Becken halten und kleine Bewegungen. Schwerer: einbeinig.",
      sicherheit: "Ball ausreichend aufpumpen und auf rutschfestem Boden arbeiten."
    }
  },
  {
    id: "beinbeuger_gymnastikball_einbeinig",
    name: "Beinbeuger auf dem Gymnastikball einbeinig",
    auch: ["Single-Leg Swiss Ball Leg Curl"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "gesaess_mittel", "bauch"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    einseitig: true,
    schwerer: "nordic",
    info: {
      kurz: "Gymnastikball-Beinbeuger mit nur einer Ferse auf dem Ball. Sehr fordernd für Beinbeuger und Beckenstabilität.",
      ausfuehrung: [
        "Leg dich auf den Rücken, eine Ferse liegt mittig auf dem Ball, das andere Bein streckst du nach oben.",
        "Heb das Becken an, bis der Körper eine Linie bildet.",
        "Zieh den Ball mit einer Ferse zum Gesäß, das Becken bleibt waagerecht.",
        "Roll den Ball langsam zurück.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Heranziehen ausatmen, beim Zurückrollen einatmen.",
      fehler: [
        "Becken kippt: Bauch fest, Arme seitlich ausgestreckt.",
        "Ball rollt zur Seite: Ferse mittig platzieren.",
        "Becken sinkt: Gesäß anspannen."
      ],
      vorteile: [
        "Hohe Belastung der Beinbeuger ohne Gewicht.",
        "Trainiert die Beckenkontrolle.",
        "Deckt Seitenunterschiede auf."
      ],
      tipps: [
        "Starte mit 5 bis 8 Wiederholungen.",
        "Der gestreckte freie Fuß zeigt zur Decke."
      ],
      varianten: "Leichter: beidbeinig. Schwerer: langsamer oder Nordic Ham Curl.",
      sicherheit: "Auf rutschfestem Boden arbeiten."
    }
  },
  {
    id: "razor_curl",
    name: "Razor Curl",
    auch: ["Razor Curl", "Hip-Flexed Nordic"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "bauch"],
    geraete: [["ghd"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 2 },
    stufe: 3,
    sport: ["fussball", "laufen"],
    info: {
      kurz: "Variante des Nordic Ham Curls: Beim Absenken klappst Du in der Hüfte ein und schiebst sie nach hinten, unten bist Du fast waagerecht, dann ziehst Du Dich mit den Beinbeugern zurück. Kürzerer Hebel macht auch die Aufwärtsbewegung möglich.",
      ausfuehrung: [
        "Knie dich mit fixierten Fersen auf eine Matte oder an eine Glute-Ham-Maschine, Oberkörper aufrecht.",
        "Lass dich nach vorn sinken, aber beuge dabei die Hüfte, so dass das Gesäß nach hinten geht.",
        "Unten liegt der Oberkörper fast waagerecht, Hüfte gebeugt, Knie etwa 90 Grad gebeugt.",
        "Streck jetzt die Knie, so dass der Körper nach vorn gleitet, bis er fast waagerecht ausgestreckt ist.",
        "Zieh dich mit den Beinbeugern zurück, beuge dabei wieder die Hüfte und richte dich auf.",
        "Arbeite langsam und kontrolliert."
      ],
      atmung: "Beim Absenken ausatmen, beim Hochziehen einatmen und Rumpf fest machen.",
      fehler: [
        "Zu schnell nach vorn: Bewusst bremsen.",
        "Hüfte bleibt gestreckt: Dann ist es ein normaler Nordic, Hüfte aktiv einklappen.",
        "Knie ohne Polster: Dicke Unterlage nutzen."
      ],
      vorteile: [
        "Trainiert die Beinbeuger exzentrisch und konzentrisch.",
        "Fortgeschrittene Alternative zum Nordic mit vollem Bewegungsweg.",
        "Kein spezielles Gerät nötig."
      ],
      tipps: [
        "Erst beherrschen, wenn du saubere Nordics bis zur Hälfte schaffst.",
        "3 bis 6 Wiederholungen sind anfangs genug."
      ],
      varianten: "Leichter: mit Bandunterstützung. Schwerer: langsamer oder mit Gewichtsweste.",
      sicherheit: "Hohe Belastung für Knie und Beinbeuger. Bei Knieproblemen oder frischen Verletzungen auslassen."
    }
  },
  {
    id: "glute_ham_raise",
    name: "Glute-Ham Raise",
    auch: ["Glute Ham Raise", "GHR", "GHD Raise"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["ruecken_unten", "waden"],
    geraete: [["ghd"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 3,
    sport: ["fussball", "laufen"],
    info: {
      kurz: "An der Glute-Ham-Maschine (GHD) richtest Du Dich aus der waagerechten Position auf, indem Du die Knie gegen das Polster beugst. Trainiert die Beinbeuger an Hüfte und Knie zugleich.",
      ausfuehrung: [
        "Stell die Fußplatte so ein, dass die Knie knapp hinter dem Polster liegen und die Füße fest zwischen den Rollen stecken.",
        "Beginne aufrecht kniend am Polster, der Körper bildet eine Linie.",
        "Senke den geraden Körper langsam nach vorn ab, bis er waagerecht ist.",
        "Drück die Zehen gegen die Platte und zieh dich mit den Beinbeugern zurück in die aufrechte Position.",
        "Halte die Hüfte gestreckt und das Gesäß angespannt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Hüfte knickt beim Hochkommen: Gesäß anspannen.",
        "Fußplatte falsch eingestellt: Knie knapp hinter dem Polster.",
        "Schwung: Langsam arbeiten."
      ],
      vorteile: [
        "Sehr hohe Belastung der Beinbeuger über den ganzen Weg.",
        "Trainiert Kniebeugung und Hüftstreckung zusammen.",
        "Klassische Übung im Athletiktraining."
      ],
      tipps: [
        "Anfangs mit Händen am Polster abdrücken oder nur exzentrisch arbeiten.",
        "3 bis 8 Wiederholungen."
      ],
      varianten: "Leichter: mit Händen nachhelfen oder nur absenken. Schwerer: Hantelscheibe vor der Brust.",
      sicherheit: "Bei Knieproblemen vorsichtig, Polsterposition genau einstellen."
    }
  },
  {
    id: "hamstring_bruecke_einbeinig",
    name: "Einbeinige Hamstring-Brücke",
    auch: ["Single-Leg Hamstring Bridge", "Hamstring Bridge"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["bauch"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    sport: ["fussball", "laufen"],
    einseitig: true,
    schwerer: "nordic",
    info: {
      kurz: "Rückenlage, eine Ferse liegt auf einer etwa 50 Zentimeter hohen Erhöhung bei nur leicht gebeugtem Knie, dann hebst Du das Becken explosiv an. Im Fußball verbreiteter Test und Trainingsübung für die Kraftausdauer der Beinbeuger.",
      ausfuehrung: [
        "Leg dich auf den Rücken und leg eine Ferse auf eine Bank oder Box, das Knie ist nur etwa 20 Grad gebeugt.",
        "Das andere Bein streckst du senkrecht nach oben, die Arme verschränkst du vor der Brust.",
        "Drück die Ferse kräftig in die Bank und heb das Becken an, bis Hüfte und Knie gestreckt sind.",
        "Senke das Becken ab, bis das Gesäß den Boden leicht berührt.",
        "Wiederhole zügig und gleichmäßig und wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Knie zu stark gebeugt: Dann arbeitet vor allem das Gesäß, Knie fast gestreckt lassen.",
        "Becken kippt: Bauch fest.",
        "Ablegen und ausruhen: Den Boden nur antippen."
      ],
      vorteile: [
        "Trainiert die Kraftausdauer der Beinbeuger in fast gestreckter Position, wie beim Sprint.",
        "Einfacher Test für Seitenunterschiede.",
        "Kein Gewicht nötig."
      ],
      tipps: [
        "Zähle die Wiederholungen je Seite bis zur Ermüdung, große Seitenunterschiede sind ein Hinweis auf Trainingsbedarf.",
        "2 bis 3 Sätze mit 10 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: beidbeinig mit erhöhten Füßen. Schwerer: mehr Wiederholungen oder Gewicht auf der Hüfte.",
      sicherheit: "Bei Krämpfen oder Schmerzen im hinteren Oberschenkel abbrechen."
    }
  },
  {
    id: "bridge_walkout",
    name: "Brücke mit Fersen-Walkout",
    auch: ["Hamstring Walkout", "Bridge Walkout"],
    muster: "hamstring_praevention",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["bauch"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "laufen"],
    schwerer: "beinbeuger_rutschen",
    info: {
      kurz: "Aus der Brücke läufst Du mit kleinen Fersenschritten nach vorn, bis die Beine fast gestreckt sind, und wieder zurück, ohne dass das Becken absinkt. Kräftigt die Beinbeuger in zunehmend gestreckter Position.",
      ausfuehrung: [
        "Leg dich auf den Rücken, Füße hüftbreit aufgestellt, und heb das Becken in die Brücke.",
        "Setz abwechselnd die Fersen in kleinen Schritten nach vorn, Hüfte bleibt oben.",
        "Geh so weit, bis die Beine fast gestreckt sind und du es noch kontrollieren kannst.",
        "Lauf mit kleinen Schritten zurück in die Ausgangsposition.",
        "Leg das Becken erst am Ende des Satzes ab."
      ],
      atmung: "Ruhig weiteratmen, bei jedem Schritt locker ausatmen.",
      fehler: [
        "Becken sinkt: Gesäß anspannen, kürzerer Weg.",
        "Zu große Schritte: Kleine Fersenschritte.",
        "Hohlkreuz: Bauch fest."
      ],
      vorteile: [
        "Trainiert die Beinbeuger in verschiedenen Längen.",
        "Kein Gerät nötig.",
        "Gute Vorbereitung auf Rutsch-Übungen und Nordics."
      ],
      tipps: [
        "4 bis 6 Walkouts hin und zurück pro Satz.",
        "Gut als Aufwärmung vor Sprints."
      ],
      varianten: "Leichter: weniger weit gehen. Schwerer: Beinbeuger-Rutschen oder einbeinig.",
      sicherheit: "Bei Krämpfen Übung unterbrechen."
    }
  },

  // ---------- Adduktoren ----------
  {
    id: "adduktoren_maschine",
    name: "Adduktoren an der Maschine",
    auch: ["Hip Adduction Machine", "Adductor Machine", "Beinschließer"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    geraete: [["ab_adduktoren"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["fussball"],
    info: {
      kurz: "Sitzend drückst Du die gespreizten Beine gegen die Polster zusammen. Isoliert die Adduktoren an der Innenseite der Oberschenkel und lässt sich fein dosieren.",
      ausfuehrung: [
        "Stell die Maschine so ein, dass die Beine weit, aber noch angenehm gespreizt sind und du eine leichte Dehnung an den Innenseiten spürst.",
        "Setz dich aufrecht hin, der Rücken liegt an, die Polster liegen an den Innenseiten knapp über den Knien.",
        "Greif die Haltegriffe und spann den Bauch an.",
        "Drück die Beine gleichmäßig zusammen, bis die Polster sich fast berühren.",
        "Halte kurz und öffne die Beine langsam wieder bis in die Dehnung."
      ],
      atmung: "Beim Zusammendrücken ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Zu weit gespreizt am Anfang: Nur so weit wie es angenehm ist, die Dehnung langsam steigern.",
        "Gewichte knallen zusammen: Langsam öffnen.",
        "Mit dem Oberkörper mitschwingen: Aufrecht und ruhig sitzen."
      ],
      vorteile: [
        "Kräftigt die Adduktoren isoliert, die bei Kniebeugen nur teilweise arbeiten.",
        "Kann helfen, Leistenproblemen bei Sportarten mit Richtungswechseln vorzubeugen.",
        "Sicher und leicht zu lernen."
      ],
      tipps: [
        "Leichtes Vorlehnen verändert den Winkel und betont andere Anteile der Adduktoren.",
        "12 bis 20 Wiederholungen mit Fokus auf die Dehnung."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: mehr Gewicht, längere Pause in der Dehnung.",
      sicherheit: "Bei Leistenschmerzen mit kleinem Weg und wenig Gewicht beginnen."
    }
  },
  {
    id: "adduktoren_band",
    name: "Hüftadduktion mit Band stehend",
    auch: ["Band Hip Adduction", "Standing Band Adduction", "Adduktoren mit Band"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["fussball"],
    einseitig: true,
    info: {
      kurz: "Stehend ziehst Du ein Bein gegen den Zug eines seitlich befestigten Bandes vor dem Standbein vorbei nach innen. Einfache Heimübung für die Adduktoren, die gleichzeitig das Standbein stabilisiert.",
      ausfuehrung: [
        "Befestige ein Band tief an einem stabilen Punkt und leg die Schlaufe um den Knöchel des Beins, das näher am Befestigungspunkt ist.",
        "Stell dich seitlich so weit weg, dass das Band gespannt ist, und halte dich eventuell an einer Wand fest.",
        "Das Arbeitsbein ist leicht zur Seite abgespreizt, der Oberkörper aufrecht.",
        "Zieh das Bein gestreckt nach innen vor dem Standbein vorbei.",
        "Führ es langsam zurück, bis du eine leichte Dehnung an der Innenseite spürst.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Heranziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper kippt zur Seite: Aufrecht stehen.",
        "Schwung: Langsam ziehen und langsam zurück.",
        "Bein dreht nach außen: Zehen zeigen nach vorn."
      ],
      vorteile: [
        "Adduktorentraining ohne Maschine.",
        "Fordert gleichzeitig die Stabilität des Standbeins.",
        "Gut zum Aufwärmen vor Fußball und Läufen."
      ],
      tipps: [
        "15 bis 20 Wiederholungen je Seite.",
        "Mehr Abstand zum Befestigungspunkt erhöht den Widerstand."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder Kabelzug.",
      sicherheit: "Band sicher befestigen und auf Risse prüfen."
    }
  },
  {
    id: "adduktoren_kabel",
    name: "Hüftadduktion am Kabelzug",
    auch: ["Cable Hip Adduction", "Standing Cable Adduction"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess_mittel", "bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "golf"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Stehend ziehst Du das Bein mit einer Fußmanschette am unteren Kabelzug nach innen. Gleichmäßige Spannung und genaue Gewichtsstufen machen die Übung gut steigerbar.",
      ausfuehrung: [
        "Leg die Fußmanschette um den Knöchel und befestige sie am unteren Kabelzug.",
        "Stell dich seitlich zum Turm, das Arbeitsbein ist das turmnahe Bein, halte dich am Gerät fest.",
        "Geh so weit weg, dass das Bein leicht zur Seite gezogen wird.",
        "Zieh das Bein gestreckt nach innen und vor dem Standbein vorbei.",
        "Halte kurz und führ das Bein langsam zurück in die Dehnung.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Heranziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper lehnt sich weg: Aufrecht und ruhig stehen.",
        "Zu schwer mit Schwung: Kontrolliert arbeiten.",
        "Bein dreht auf: Zehen zeigen nach vorn."
      ],
      vorteile: [
        "Kräftigt die Adduktoren mit gut dosierbarer Last.",
        "Trainiert die Stabilität des Standbeins mit.",
        "Ohne eigene Adduktorenmaschine möglich."
      ],
      tipps: [
        "12 bis 15 Wiederholungen je Seite.",
        "Langsames Zurückführen betont die Dehnung."
      ],
      varianten: "Leichter: Band. Schwerer: mehr Gewicht oder Copenhagen-Seitstütz.",
      sicherheit: "Bei Leistenschmerzen kleinen Weg wählen."
    }
  },
  {
    id: "copenhagen",
    name: "Copenhagen-Seitstütz",
    auch: ["Copenhagen Plank", "Copenhagen Side Plank", "Long Lever Copenhagen"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    sekundaer: ["schraege_bauch", "gesaess_mittel", "bauch"],
    geraete: [["bank"], ["box"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 1, knie: 1, schulter: 1 },
    stufe: 3,
    sport: ["fussball", "golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Langer Hebel: Der Fuß des oberen Beins liegt auf der Bank. Einsteiger nehmen die Variante mit dem Knie.",
    info: {
      kurz: "Seitstütz, bei dem der Innenfuß des oberen Beins auf einer Bank liegt und das untere Bein frei ist. Die Adduktoren des oberen Beins tragen den Körper, dadurch werden sie sehr intensiv trainiert.",
      ausfuehrung: [
        "Leg dich seitlich neben eine Bank, stütz dich auf den Unterarm, der Ellbogen liegt unter der Schulter.",
        "Leg den Innenrand des oberen Fußes auf die Bank, das obere Bein ist gestreckt.",
        "Das untere Bein liegt unter der Bank am Boden.",
        "Drück den oberen Fuß in die Bank und heb die Hüfte an, bis der Körper eine gerade Linie bildet.",
        "Zieh das untere Bein zum oberen Bein unter die Bank hoch oder lass es hängen.",
        "Halte die Position die vorgegebene Zeit und senke dann langsam ab. Wechsle danach die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Hüfte sinkt ab: Körper als gerade Linie halten, Zeit verkürzen.",
        "Schulter fällt ein: Aktiv vom Boden wegdrücken.",
        "Zu früh mit dem langen Hebel: Erst die Knievariante sicher beherrschen."
      ],
      vorteile: [
        "Eine der wirksamsten Übungen für die Adduktoren.",
        "Studien im Fußball zeigen, dass Programme mit Copenhagen-Übungen Leistenproblemen vorbeugen können.",
        "Trainiert gleichzeitig den seitlichen Rumpf."
      ],
      tipps: [
        "Beginne mit 3 Sätzen à 10 bis 20 Sekunden je Seite.",
        "Ein Polster unter dem Fuß macht die Auflage angenehmer."
      ],
      varianten: "Leichter: Knie statt Fuß auf der Bank (kurzer Hebel). Schwerer: länger halten oder dynamisch mit Heben und Senken.",
      sicherheit: "Bei Leistenschmerzen oder Innenbandproblemen am Knie mit der Knievariante beginnen oder abklären.",
      golf: "Die Adduktoren stabilisieren das Becken bei der Gewichtsverlagerung und beim Drehen gegen das Führungsbein. Kräftige Adduktoren und ein starker seitlicher Rumpf helfen, im Abschwung Kraft auf den Boden zu bringen und die Hüfte stabil zu führen."
    }
  },
  {
    id: "copenhagen_kurz",
    name: "Copenhagen-Seitstütz mit kurzem Hebel",
    auch: ["Short Lever Copenhagen", "Copenhagen Plank Knee", "Knee Copenhagen"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    sekundaer: ["schraege_bauch", "gesaess_mittel"],
    geraete: [["bank"], ["box"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 1, schulter: 1 },
    stufe: 2,
    sport: ["fussball", "golf"],
    golf: 1,
    einseitig: true,
    schwerer: "copenhagen",
    info: {
      kurz: "Copenhagen-Seitstütz mit dem Knie statt dem Fuß auf der Bank. Der kürzere Hebel macht die Übung leichter und kniefreundlicher, ideal als Einstieg.",
      ausfuehrung: [
        "Leg dich seitlich neben eine Bank, stütz dich auf den Unterarm, Ellbogen unter der Schulter.",
        "Leg die Innenseite des oberen Knies und Unterschenkels auf die Bank.",
        "Drück das Bein in die Bank und heb die Hüfte an, bis der Körper von Kopf bis Knie eine Linie bildet.",
        "Das untere Bein hängt frei oder wird unter der Bank nach oben gezogen.",
        "Halte die Position und senke dann kontrolliert ab. Wechsle die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Hüfte sinkt: Gerade Linie halten.",
        "Hüfte nach hinten geknickt: Becken nach vorn schieben.",
        "Schulter fällt ein: Vom Boden wegdrücken."
      ],
      vorteile: [
        "Leichter Einstieg in das Copenhagen-Training.",
        "Geringere Belastung des Knies.",
        "Kräftigt Adduktoren und seitlichen Rumpf."
      ],
      tipps: [
        "Starte mit 15 bis 20 Sekunden je Seite.",
        "Wenn 30 Sekunden sicher gehen, wechsle zur langen Variante."
      ],
      varianten: "Leichter: kürzer halten oder unteres Knie am Boden lassen. Schwerer: Copenhagen-Seitstütz mit Fuß auf der Bank.",
      sicherheit: "Bei Leistenschmerzen langsam steigern."
    }
  },
  {
    id: "copenhagen_dynamisch",
    name: "Copenhagen-Adduktion dynamisch",
    auch: ["Copenhagen Adduction", "Copenhagen Adductor Exercise", "Dynamic Copenhagen"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    sekundaer: ["schraege_bauch", "gesaess_mittel"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1, knie: 1, schulter: 1 },
    stufe: 3,
    sport: ["fussball"],
    einseitig: true,
    hinweis: "Ursprünglich hält ein Partner das obere Bein, eine Bank funktioniert ebenso.",
    info: {
      kurz: "Die dynamische Form des Copenhagen-Seitstützes aus den Präventionsstudien im Fußball: Du senkst die Hüfte bis zum Boden ab und hebst sie mit den Adduktoren des oberen Beins wieder an.",
      ausfuehrung: [
        "Leg dich seitlich hin, stütz dich auf den Unterarm, das obere Bein liegt gestreckt mit dem Knöchel auf einer Bank oder wird von einem Partner auf Hüfthöhe gehalten.",
        "Heb die Hüfte an, bis der Körper eine gerade Linie bildet, und zieh das untere Bein zum oberen Bein.",
        "Senke die Hüfte und das untere Bein langsam ab, bis das untere Bein den Boden kurz berührt.",
        "Drück mit dem oberen Bein in die Bank und heb die Hüfte wieder an.",
        "Arbeite ruhig im Rhythmus von etwa drei Sekunden pro Wiederholung und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hüfte knickt nach hinten: Körper in einer Linie halten.",
        "Zu schnell: Langsames Absenken.",
        "Zu viele Wiederholungen am Anfang: Die Übung erzeugt starken Muskelkater, mit 3 bis 5 je Seite beginnen."
      ],
      vorteile: [
        "Im Fußball in Studien mit weniger Leistenproblemen verbunden.",
        "Kräftigt die Adduktoren exzentrisch und konzentrisch.",
        "Kein Gerät außer Bank oder Partner nötig."
      ],
      tipps: [
        "Steigere über Wochen langsam bis 12 bis 15 Wiederholungen je Seite.",
        "Ein bis zweimal pro Woche genügt."
      ],
      varianten: "Leichter: mit kurzem Hebel (Knie auf der Bank). Schwerer: mehr Wiederholungen oder Pause oben.",
      sicherheit: "Bei akuten Leistenbeschwerden nicht durchführen. Langsam steigern."
    }
  },
  {
    id: "adduktion_seitlage",
    name: "Adduktion in Seitlage",
    auch: ["Side-Lying Hip Adduction", "Side Lying Adductor Raise"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    schwerer: "copenhagen_kurz",
    info: {
      kurz: "Auf der Seite liegend hebst Du das untere Bein an, während das obere Bein vor Dir aufgestellt ist. Sanfte Einstiegsübung für die Adduktoren, gut für Reha und zu Hause.",
      ausfuehrung: [
        "Leg dich auf die Seite, den Kopf auf dem unteren Arm.",
        "Stell das obere Bein mit gebeugtem Knie vor dem unteren Bein auf den Boden.",
        "Das untere Bein ist gestreckt, die Zehen zeigen nach vorn.",
        "Heb das untere Bein so weit wie möglich an und halte kurz.",
        "Senke es langsam ab, ohne es ganz abzulegen. Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Becken rollt nach hinten: Oberkörper stabil auf der Seite.",
        "Schwung: Langsam heben.",
        "Fuß dreht nach oben: Zehen zeigen nach vorn."
      ],
      vorteile: [
        "Sanft und gut dosierbar.",
        "Kein Gerät nötig.",
        "Ideal als Einstieg und in der Reha."
      ],
      tipps: [
        "15 bis 25 Wiederholungen je Seite.",
        "Mit Fußgewicht oder Band wird die Übung schwerer."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: Copenhagen-Seitstütz mit kurzem Hebel.",
      sicherheit: "Sehr gut verträglich."
    }
  },
  {
    id: "adduktoren_ball_druecken",
    name: "Ball zwischen den Knien drücken",
    auch: ["Adductor Squeeze", "Isometric Adductor Squeeze", "Groin Squeeze"],
    muster: "adduktoren",
    art: "kraft",
    muskeln: ["adduktoren"],
    sekundaer: ["bauch"],
    geraete: [["gymnastikball"], ["medizinball"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["fussball"],
    info: {
      kurz: "In Rückenlage drückst Du einen Ball oder Deine Fäuste zwischen den Knien zusammen und hältst die Spannung. Isometrische Übung, die in der Leistenreha und Prävention häufig eingesetzt wird.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell die Füße hüftbreit auf und leg einen kleinen Ball, ein gefaltetes Kissen oder deine Fäuste zwischen die Knie.",
        "Spann den Bauch leicht an, der untere Rücken liegt ruhig am Boden.",
        "Drück die Knie kräftig gegen den Ball zusammen.",
        "Halte die Spannung die vorgegebene Zeit, ohne die Luft anzuhalten.",
        "Lass langsam locker und mach eine kurze Pause vor dem nächsten Satz."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: [
        "Luft anhalten: Gleichmäßig atmen.",
        "Becken hebt sich: Ruhig liegen bleiben.",
        "Sofort maximal drücken bei Beschwerden: Mit mittlerer Kraft beginnen und steigern."
      ],
      vorteile: [
        "Kräftigt die Adduktoren ohne Bewegung und damit sehr schonend.",
        "Wird in der Reha bei Leistenbeschwerden eingesetzt.",
        "Überall machbar."
      ],
      tipps: [
        "5 Wiederholungen à 10 bis 30 Sekunden.",
        "Mit gestreckten Beinen und Ball zwischen den Knöcheln wird ein anderer Winkel trainiert."
      ],
      varianten: "Leichter: geringere Kraft. Schwerer: längere Haltezeit oder in der Brückenposition.",
      sicherheit: "Bei Leistenschmerzen nur schmerzfrei drücken. Bei Bluthochdruck nicht pressen."
    }
  },

  // ---------- Abduktoren ----------
  {
    id: "abduktoren_maschine",
    name: "Abduktoren an der Maschine",
    auch: ["Hip Abduction Machine", "Abductor Machine", "Beinöffner"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess"],
    geraete: [["ab_adduktoren"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Sitzend drückst Du die Beine gegen die Polster nach außen. Isoliert den mittleren Gesäßmuskel, der das Becken beim Gehen, Laufen und auf einem Bein stabilisiert.",
      ausfuehrung: [
        "Setz dich in die Maschine, die Polster liegen außen knapp über den Knien, die Beine sind geschlossen.",
        "Setz dich aufrecht hin, der Rücken liegt an, und greif die Haltegriffe.",
        "Drück die Beine gleichmäßig nach außen, so weit es geht.",
        "Halte kurz und spann das seitliche Gesäß an.",
        "Führ die Beine langsam zurück, ohne dass die Gewichte aufsetzen."
      ],
      atmung: "Beim Öffnen ausatmen, beim Schließen einatmen.",
      fehler: [
        "Schwung: Langsam und gleichmäßig.",
        "Gewichte knallen: Kontrolliert zurückführen.",
        "Nur halber Weg: Ganz öffnen."
      ],
      vorteile: [
        "Kräftigt den mittleren Gesäßmuskel isoliert.",
        "Kann helfen, das Einknicken der Knie nach innen zu verringern.",
        "Sicher und leicht zu lernen."
      ],
      tipps: [
        "15 bis 25 Wiederholungen, die letzten Wiederholungen dürfen brennen.",
        "Teilwiederholungen in der offenen Position am Satzende verlängern die Spannung."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: vorgebeugt sitzen oder Pause in der offenen Position.",
      sicherheit: "Unproblematisch. Bei Hüftschmerzen Weg verkürzen."
    }
  },
  {
    id: "abduktoren_maschine_vorgebeugt",
    name: "Abduktoren an der Maschine vorgebeugt",
    auch: ["Leaning Forward Hip Abduction", "Forward Lean Abduction Machine"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel", "gesaess"],
    geraete: [["ab_adduktoren"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Abduktorenmaschine mit nach vorn geneigtem Oberkörper. Durch die gebeugte Hüfte arbeitet neben dem mittleren auch der obere Anteil des großen Gesäßmuskels stärker mit.",
      ausfuehrung: [
        "Setz dich in die Maschine, die Polster liegen außen an den Knien.",
        "Neig den Oberkörper mit geradem Rücken weit nach vorn und stütz dich an den Griffen oder auf den Oberschenkeln ab.",
        "Drück die Beine nach außen, so weit es geht.",
        "Halte kurz und spür die Spannung im oberen äußeren Gesäß.",
        "Führ die Beine langsam zurück."
      ],
      atmung: "Beim Öffnen ausatmen, beim Schließen einatmen.",
      fehler: [
        "Runder Rücken: Aus der Hüfte nach vorn neigen.",
        "Schwung: Kontrolliert arbeiten.",
        "Oberkörper richtet sich während des Satzes auf: Vorneigung beibehalten."
      ],
      vorteile: [
        "Mehr Gesäßarbeit als in aufrechter Position.",
        "Gute Ergänzung zu Hip Thrust und Kreuzheben.",
        "Gelenkschonend."
      ],
      tipps: [
        "Kombiniere aufrecht und vorgebeugt: erst vorgebeugt bis zur Ermüdung, dann aufrecht weiter.",
        "15 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause außen oder langsames Schließen.",
      sicherheit: "Bei Rückenschmerzen in der Vorneigung aufrecht trainieren."
    }
  },
  {
    id: "hip_abduction_band",
    name: "Hüftabduktion mit Band im Sitzen",
    auch: ["Hip Abduction (Band)", "Banded Hip Abduction", "Seated Band Abduction"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel", "gesaess"],
    geraete: [["mini_band"], ["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Auf einer Bank oder einem Stuhl sitzend drückst Du die Knie gegen ein Miniband nach außen. Die Heimvariante der Abduktorenmaschine und eine einfache Übung für das seitliche Gesäß.",
      ausfuehrung: [
        "Leg ein Miniband knapp über die Knie und setz dich vorn auf eine Bank oder einen Stuhl.",
        "Die Füße stehen hüftbreit, die Knie sind 90 Grad gebeugt.",
        "Neig dich leicht nach vorn oder bleib aufrecht, beides ist möglich.",
        "Drück die Knie gegen das Band so weit wie möglich nach außen, die Füße bleiben am Boden.",
        "Halte kurz und führ die Knie langsam zurück, ohne dass das Band ganz locker wird."
      ],
      atmung: "Beim Öffnen ausatmen, beim Schließen einatmen.",
      fehler: [
        "Band zu locker: Kräftigeres Band wählen oder Füße enger stellen.",
        "Schwung: Langsam arbeiten.",
        "Füße heben ab: Sie bleiben am Boden."
      ],
      vorteile: [
        "Einfach und überall machbar.",
        "Kräftigt den mittleren Gesäßmuskel.",
        "Gut als Aufwärmung vor Kniebeugen und Läufen."
      ],
      tipps: [
        "20 bis 30 Wiederholungen oder nach Zeit.",
        "Kombiniere vorgebeugt und aufrecht in einem Satz."
      ],
      varianten: "Leichter: leichteres Band. Schwerer: festeres Band oder Abduktorenmaschine.",
      sicherheit: "Unproblematisch."
    }
  },
  {
    id: "abduktion_seitlage",
    name: "Hüftabduktion in Seitlage",
    auch: ["Side-Lying Hip Abduction", "Side Lying Leg Raise", "Seitliches Beinheben"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess"],
    geraete: [[], ["matte"], ["mini_band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    schwerer: "seitstuetz_abduktion",
    info: {
      kurz: "Auf der Seite liegend hebst Du das obere, gestreckte Bein leicht nach hinten oben an. Eine der Übungen mit der stärksten Aktivierung des mittleren Gesäßmuskels und ein Klassiker der Physiotherapie.",
      ausfuehrung: [
        "Leg dich auf die Seite, der Kopf liegt auf dem unteren Arm, das untere Bein ist leicht gebeugt.",
        "Das obere Bein ist gestreckt und liegt in Verlängerung des Körpers oder leicht dahinter.",
        "Dreh den oberen Fuß leicht nach innen, so dass die Ferse etwas höher ist als die Zehen.",
        "Heb das Bein langsam an, bis etwa 30 bis 40 Grad, ohne dass das Becken nach hinten rollt.",
        "Halte oben eine Sekunde und senke langsam ab, ohne das Bein abzulegen."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Bein wandert nach vorn: Dann arbeitet der Hüftbeuger, Bein leicht hinter dem Körper halten.",
        "Becken rollt nach hinten: Hüftknochen übereinander lassen.",
        "Zu hoch heben: 30 bis 40 Grad reichen, darüber übernimmt die Seite des Rumpfes."
      ],
      vorteile: [
        "Sehr gezielte Aktivierung des mittleren Gesäßmuskels.",
        "Kann bei Knie- und Hüftbeschwerden in Absprache mit Physiotherapeuten eingesetzt werden.",
        "Ohne Gerät machbar."
      ],
      tipps: [
        "Mit dem Rücken an einer Wand wird das Ausweichen nach vorn verhindert.",
        "15 bis 25 Wiederholungen, mit Miniband an den Knöcheln steigern."
      ],
      varianten: "Leichter: Clamshell. Schwerer: Miniband um die Knöchel oder Seitstütz mit Abduktion.",
      sicherheit: "Sehr gut verträglich."
    }
  },
  {
    id: "clamshell",
    name: "Clamshell (Muschel)",
    auch: ["Clamshell", "Clam", "Muschel"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess"],
    geraete: [["mini_band"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    schwerer: "abduktion_seitlage",
    info: {
      kurz: "In Seitenlage mit gebeugten Beinen öffnest Du das obere Knie wie eine Muschel, die Füße bleiben zusammen. Trainiert den mittleren Gesäßmuskel und die Außenrotatoren der Hüfte.",
      ausfuehrung: [
        "Leg dich auf die Seite, die Hüfte etwa 45 Grad gebeugt, die Knie 90 Grad gebeugt, die Füße liegen aufeinander.",
        "Leg ein Miniband knapp über die Knie, wenn du mit Widerstand arbeiten willst.",
        "Leg die obere Hand auf den Hüftknochen, um ein Rollen des Beckens zu spüren.",
        "Öffne das obere Knie so weit wie möglich, die Füße bleiben zusammen.",
        "Halte kurz und schließ das Knie langsam."
      ],
      atmung: "Beim Öffnen ausatmen, beim Schließen einatmen.",
      fehler: [
        "Becken rollt nach hinten: Nur so weit öffnen, wie das Becken ruhig bleibt.",
        "Füße lösen sich: Fersen bleiben zusammen.",
        "Zu schnell: Langsam arbeiten."
      ],
      vorteile: [
        "Einfache, gut kontrollierbare Übung für das seitliche Gesäß.",
        "Kräftigt die Außenrotatoren der Hüfte.",
        "Wird in der Physiotherapie häufig eingesetzt."
      ],
      tipps: [
        "15 bis 25 Wiederholungen je Seite.",
        "Mit der Ferse leicht gegen eine Wand oder Matte drücken stabilisiert die Position."
      ],
      varianten: "Leichter: ohne Band. Schwerer: festeres Band oder Hüftabduktion in Seitlage.",
      sicherheit: "Unproblematisch."
    }
  },
  {
    id: "monster_walk",
    name: "Monster Walk",
    auch: ["Monster Walk", "Banded Monster Walk"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel", "gesaess"],
    sekundaer: ["quadrizeps"],
    geraete: [["mini_band"], ["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    info: {
      kurz: "Mit einem Miniband um die Beine gehst Du in leichter Kniebeuge diagonal vor und zurück, ohne dass die Knie nach innen fallen. Aktiviert das seitliche Gesäß unter Bewegung.",
      ausfuehrung: [
        "Leg ein Miniband um die Knöchel oder knapp über die Knie und stell dich hüftbreit hin, so dass das Band gespannt ist.",
        "Geh in eine leichte Viertelkniebeuge, Oberkörper leicht vorgeneigt, Brust aufrecht.",
        "Mach einen Schritt schräg nach vorn außen, etwa 45 Grad, gegen den Widerstand des Bandes.",
        "Zieh den anderen Fuß kontrolliert nach und setz ihn wieder schräg nach vorn außen.",
        "Geh so 10 bis 15 Schritte vorwärts und dann im gleichen Muster rückwärts.",
        "Halte die Spannung im Band die ganze Zeit."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Knie fallen nach innen: Knie über den Zehen halten.",
        "Aufrichten während des Gehens: In der leichten Beuge bleiben.",
        "Band wird locker: Füße nie ganz zusammenführen."
      ],
      vorteile: [
        "Aktiviert den mittleren Gesäßmuskel in Bewegung.",
        "Schult die Knieausrichtung für Sprung, Landung und Kniebeuge.",
        "Ideal zum Aufwärmen."
      ],
      tipps: [
        "Band um die Knöchel ist schwerer als über den Knien.",
        "2 bis 3 Bahnen als Aufwärmung vor dem Beintraining oder der Golfrunde."
      ],
      varianten: "Leichter: Band über den Knien, kleinere Schritte. Schwerer: Band an den Füßen, tiefere Beuge.",
      sicherheit: "Unproblematisch.",
      golf: "Der mittlere Gesäßmuskel hält das Becken im Rückschwung stabil über dem hinteren Bein und verhindert ein seitliches Ausweichen (Sway). Als Aufwärmübung vor der Runde aktiviert der Monster Walk genau diese Muskeln."
    }
  },
  {
    id: "seitwaerts_band",
    name: "Seitliches Gehen mit Miniband",
    auch: ["Lateral Band Walk", "Side Steps with Band", "Banded Lateral Walk"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess", "quadrizeps"],
    geraete: [["mini_band"], ["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    info: {
      kurz: "Mit einem Miniband um die Beine gehst Du in leichter Kniebeuge seitwärts. Eine der bekanntesten Übungen, um den mittleren Gesäßmuskel zu aktivieren.",
      ausfuehrung: [
        "Leg ein Miniband um die Knöchel, über die Fußballen oder knapp über die Knie.",
        "Stell dich hüftbreit hin und geh in eine leichte Viertelkniebeuge.",
        "Mach einen Schritt seitlich, das führende Bein drückt gegen das Band.",
        "Zieh das andere Bein kontrolliert nach, ohne dass die Füße sich berühren.",
        "Geh 10 bis 15 Schritte in eine Richtung und dann zurück.",
        "Oberkörper bleibt ruhig, die Hüfte auf gleicher Höhe."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Oberkörper kippt zur Seite: Ruhig und aufrecht.",
        "Füße zu nah zusammen: Spannung im Band halten.",
        "Knie fallen nach innen: Knie über den Zehen."
      ],
      vorteile: [
        "Aktiviert das seitliche Gesäß.",
        "Verbessert die Kontrolle bei seitlichen Bewegungen.",
        "Gute Aufwärmübung."
      ],
      tipps: [
        "Band über den Fußballen aktiviert in Studien das Gesäß besonders stark.",
        "Langsame, kontrollierte Schritte sind wirksamer als schnelle."
      ],
      varianten: "Leichter: Band über den Knien. Schwerer: Band an den Füßen, tiefere Kniebeuge.",
      sicherheit: "Unproblematisch."
    }
  },
  {
    id: "abduktion_kabel",
    name: "Hüftabduktion am Kabelzug",
    auch: ["Cable Hip Abduction", "Standing Cable Abduction"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Stehend ziehst Du das Bein mit einer Fußmanschette am unteren Kabelzug zur Seite. Trainiert den mittleren Gesäßmuskel mit gleichmäßiger Spannung und guten Gewichtsabstufungen.",
      ausfuehrung: [
        "Leg die Fußmanschette um den Knöchel und befestige sie am unteren Kabelzug.",
        "Stell dich seitlich zum Turm, das Arbeitsbein ist das turmferne Bein, halte dich am Gerät fest.",
        "Das Arbeitsbein kreuzt leicht vor dem Standbein, der Oberkörper ist aufrecht.",
        "Zieh das Bein gestreckt zur Seite, bis etwa 30 bis 45 Grad.",
        "Halte kurz und führ es langsam zurück. Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Abspreizen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper kippt zur Seite: Aufrecht bleiben.",
        "Fuß dreht nach außen: Zehen zeigen nach vorn.",
        "Zu hoch: Nur so weit wie das Becken ruhig bleibt."
      ],
      vorteile: [
        "Gut dosierbare Last für den mittleren Gesäßmuskel.",
        "Trainiert gleichzeitig das Standbein.",
        "Einfache Isolationsübung."
      ],
      tipps: [
        "Eine leichte Vorneigung des Oberkörpers betont das Gesäß.",
        "12 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: Band. Schwerer: mehr Gewicht oder langsames Zurückführen.",
      sicherheit: "Unproblematisch."
    }
  },
  {
    id: "seitstuetz_abduktion",
    name: "Seitstütz mit Abduktion",
    auch: ["Side Plank Hip Abduction", "Side Plank Leg Raise"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel", "schraege_bauch"],
    sekundaer: ["bauch", "gesaess"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf", "laufen"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Im Seitstütz hebst Du das obere Bein an. Dabei arbeiten der mittlere Gesäßmuskel beider Seiten und der seitliche Rumpf gleichzeitig, eine der wirksamsten Übungen für den mittleren Gesäßmuskel.",
      ausfuehrung: [
        "Geh in den Seitstütz auf dem Unterarm, Ellbogen unter der Schulter, Beine gestreckt übereinander.",
        "Heb die Hüfte an, bis der Körper eine gerade Linie bildet.",
        "Heb das obere Bein gestreckt an, bis etwa Hüftbreite oder etwas höher.",
        "Senke es langsam ab, ohne dass die Hüfte absinkt.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hüfte sinkt ab: Gerade Linie halten.",
        "Bein wandert nach vorn: Leicht hinter der Körperlinie bleiben.",
        "Schulter fällt ein: Vom Boden wegdrücken."
      ],
      vorteile: [
        "Trainiert beide Seiten der Hüfte gleichzeitig: oben dynamisch, unten haltend.",
        "Kräftigt den seitlichen Rumpf.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "8 bis 15 Wiederholungen je Seite.",
        "Mit unterem Knie am Boden wird die Übung leichter."
      ],
      varianten: "Leichter: unteres Knie aufgesetzt. Schwerer: Miniband um die Knöchel oder auf der Hand statt dem Unterarm.",
      sicherheit: "Bei Schulterbeschwerden auf dem Unterarm bleiben oder die Knievariante wählen.",
      golf: "Diese Übung kombiniert seitliche Rumpfstabilität mit der Kraft des mittleren Gesäßmuskels. Beides hält das Becken im Schwung stabil, verringert seitliches Ausweichen und hilft, die Rotation sauber um das Standbein zu führen."
    }
  },
  {
    id: "fire_hydrant",
    name: "Fire Hydrant (Vierfüßler-Abduktion)",
    auch: ["Fire Hydrant", "Quadruped Hip Abduction"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess", "bauch"],
    geraete: [[], ["matte"], ["mini_band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Im Vierfüßlerstand hebst Du ein gebeugtes Bein seitlich an. Trainiert das seitliche Gesäß und die Hüftrotation und lehrt, den Rumpf dabei ruhig zu halten.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, Hände unter den Schultern, Knie unter der Hüfte.",
        "Spann den Bauch an, der Rücken ist gerade.",
        "Heb ein Bein mit 90 Grad gebeugtem Knie seitlich an, bis der Oberschenkel fast waagerecht ist.",
        "Halte das Becken ruhig, das Gewicht verlagert sich nicht auf das andere Bein.",
        "Senke langsam ab und wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper kippt zur Seite: Rumpf fest, Gewicht mittig.",
        "Zu hoch heben: Nur so weit wie das Becken stabil bleibt.",
        "Rücken rund oder im Hohlkreuz: Neutral bleiben."
      ],
      vorteile: [
        "Aktiviert das seitliche Gesäß ohne Gerät.",
        "Verbessert die Hüftbeweglichkeit in Abduktion und Rotation.",
        "Gut als Aufwärmübung."
      ],
      tipps: [
        "Ein Miniband über den Knien erhöht den Widerstand.",
        "15 bis 20 Wiederholungen je Seite."
      ],
      varianten: "Leichter: kleinerer Weg. Schwerer: Miniband oder Pause oben.",
      sicherheit: "Bei Handgelenkbeschwerden auf den Unterarmen stützen."
    }
  },
  {
    id: "hip_hike",
    name: "Beckenheben seitlich auf der Stufe",
    auch: ["Hip Hike", "Pelvic Drop", "Hip Hitch"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["schraege_bauch", "quadrizeps"],
    geraete: [["box"], ["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "laufen"],
    golf: 2,
    einseitig: true,
    hinweis: "Auf einer Treppenstufe oder Box, das freie Bein hängt seitlich über die Kante.",
    info: {
      kurz: "Auf einem Bein auf einer Stufe stehend senkst Du die Hüfte der freien Seite ab und hebst sie mit dem Gesäß des Standbeins wieder an. Kleine Bewegung, aber sehr gezielte Arbeit für den mittleren Gesäßmuskel.",
      ausfuehrung: [
        "Stell dich seitlich mit einem Bein auf eine Stufe oder Box, das andere Bein hängt frei neben der Kante. Halte dich leicht an einer Wand oder einem Geländer.",
        "Beide Knie sind gestreckt, der Oberkörper ist aufrecht.",
        "Lass die Hüfte der freien Seite langsam absinken, so dass der freie Fuß tiefer kommt. Das Standbein bleibt gestreckt.",
        "Heb die Hüfte der freien Seite wieder an, bis sie etwas höher ist als die Hüfte des Standbeins.",
        "Die Bewegung kommt nur aus dem Becken, der Oberkörper neigt sich nicht zur Seite.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Anheben ausatmen.",
      fehler: [
        "Knie des Standbeins beugt sich: Gestreckt halten.",
        "Oberkörper neigt sich: Schultern bleiben waagerecht.",
        "Zu schnell: Langsam und kontrolliert."
      ],
      vorteile: [
        "Sehr gezielte Arbeit für den mittleren Gesäßmuskel im Stand.",
        "Verbessert die Beckenkontrolle beim Gehen und Laufen.",
        "Wird in der Physiotherapie bei Knie- und Hüftbeschwerden eingesetzt."
      ],
      tipps: [
        "15 bis 20 Wiederholungen je Seite.",
        "Die Hand auf dem Beckenkamm hilft, die Bewegung zu spüren."
      ],
      varianten: "Leichter: kleinerer Weg, mehr festhalten. Schwerer: Kurzhantel in der Hand der freien Seite oder ohne Festhalten.",
      sicherheit: "Stabil stehen und festhalten, um Stürze zu vermeiden.",
      golf: "Im Rückschwung und Abschwung muss das Becken stabil über dem jeweiligen Standbein bleiben. Hip Hikes trainieren genau diese Beckenkontrolle im Stand und können helfen, seitliches Ausweichen der Hüfte zu verringern."
    }
  },
  {
    id: "abduktion_wand_isometrisch",
    name: "Hüftabduktion isometrisch an der Wand",
    auch: ["Wall Glute Med Iso", "Standing Wall Hip Abduction", "Wall Press Abduction"],
    muster: "abduktoren",
    art: "kraft",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["gesaess", "schraege_bauch"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Seitlich an einer Wand stehend drückst Du das wandnahe, angehobene Knie gegen die Wand und hältst. Trainiert den mittleren Gesäßmuskel beider Seiten, besonders den des Standbeins.",
      ausfuehrung: [
        "Stell dich seitlich etwa eine Handbreit neben eine Wand.",
        "Heb das wandnahe Bein mit 90 Grad gebeugter Hüfte und Knie an, so dass das Knie an der Wand liegt.",
        "Drück das Knie kräftig gegen die Wand, das Becken bleibt waagerecht.",
        "Das Standbein ist leicht gebeugt, du spürst die Spannung seitlich in der Hüfte des Standbeins.",
        "Halte die vorgegebene Zeit und wechsle dann die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Oberkörper lehnt sich an die Wand: Aufrecht stehen.",
        "Becken kippt: Hüftknochen auf gleicher Höhe.",
        "Standknie fällt nach innen: Über dem Fuß halten."
      ],
      vorteile: [
        "Kräftigt den mittleren Gesäßmuskel des Standbeins sehr gezielt.",
        "Überall und ohne Gerät machbar.",
        "Gut als Aktivierung vor Läufen oder Golfrunden."
      ],
      tipps: [
        "3 bis 5 Wiederholungen à 20 bis 30 Sekunden je Seite.",
        "Zum Schwerer machen das Standbein in eine leichte Kniebeuge bringen."
      ],
      varianten: "Leichter: weniger Druck. Schwerer: länger halten oder Standbein leicht gebeugt.",
      sicherheit: "Unproblematisch."
    }
  },

  // ---------- Waden und Schienbein ----------
  {
    id: "wadenheben",
    name: "Wadenheben einbeinig mit Kurzhantel",
    auch: ["Unilateral Standing Calf Raise", "Single-Leg Calf Raise", "Wadenheben einbeinig"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    hinweis: "Auf einer Stufe, ganz nach unten in die Dehnung und ganz nach oben auf die Zehenspitzen.",
    info: {
      kurz: "Wadenheben auf einem Bein auf einer Stufe, eine Kurzhantel in der Hand der Arbeitsseite. Großer Bewegungsweg und einseitige Last machen die Übung mit wenig Gerät sehr wirksam.",
      ausfuehrung: [
        "Stell dich mit dem Fußballen eines Fußes auf eine Stufe, Box oder Hantelscheibe, die Ferse ragt frei über die Kante.",
        "Halte die Kurzhantel in der Hand der Arbeitsseite, mit der anderen Hand hältst du dich an Wand oder Geländer fest.",
        "Das andere Bein hebst du an oder legst es hinter das Standbein.",
        "Senke die Ferse langsam so tief wie möglich ab, bis die Wade deutlich gedehnt ist, und halte dort ein bis zwei Sekunden.",
        "Drück dich über den Großzehenballen so hoch wie möglich auf die Zehenspitzen.",
        "Halte oben kurz, senke dann langsam ab und wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Wippen ohne Pause unten: Kurz in der Dehnung halten, damit die Sehne nicht federt.",
        "Halber Bewegungsweg: Ganz runter und ganz hoch.",
        "Knie beugt sich mit: Knie bleibt gestreckt oder in gleicher leichter Beugung.",
        "Fuß kippt nach außen: Über den Großzehenballen drücken."
      ],
      vorteile: [
        "Kräftigt die Wade jeder Seite einzeln.",
        "Großer Bewegungsweg mit Dehnung unten, besonders wirksam für Muskelaufbau.",
        "Stärkt Waden und Achillessehne für Laufen und Sprünge."
      ],
      tipps: [
        "10 bis 20 Wiederholungen mit Pause unten.",
        "Die Waden erholen sich schnell, zwei bis drei Einheiten pro Woche sind gut möglich."
      ],
      varianten: "Leichter: ohne Gewicht oder beidbeinig. Schwerer: schwerere Hantel, langsameres Absenken oder Pause oben.",
      sicherheit: "Bei Achillessehnenbeschwerden mit kleinem Weg beginnen und abklären."
    }
  },
  {
    id: "wadenheben_maschine",
    name: "Wadenheben stehend an der Maschine",
    auch: ["Standing Calf Raise", "Machine Calf Raise", "Wadenheben an der Maschine"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["wadenmaschine_stehend"], ["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { sprunggelenk: 1, ruecken: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    info: {
      kurz: "Stehendes Wadenheben an der Maschine mit Schulterpolstern. Mit gestreckten Knien wird vor allem der zweiköpfige Wadenmuskel (Gastrocnemius) trainiert, die Maschine erlaubt hohe Lasten.",
      ausfuehrung: [
        "Stell die Schulterpolster so ein, dass du mit leicht gebeugten Knien darunter stehen kannst.",
        "Stell die Fußballen hüftbreit auf die Kante des Trittblocks, die Fersen hängen frei.",
        "Streck die Knie, bis sie gerade, aber nicht durchgedrückt sind, und halte sie so.",
        "Senke die Fersen langsam ab, bis die Waden maximal gedehnt sind, und halte ein bis zwei Sekunden.",
        "Drück dich so hoch wie möglich auf die Zehenspitzen.",
        "Halte oben kurz und senke langsam wieder ab."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Wippen: Unten kurz halten.",
        "Knie beugen und strecken: Die Bewegung kommt nur aus dem Sprunggelenk.",
        "Zu viel Gewicht und halber Weg: Lieber leichter und voller Bewegungsweg."
      ],
      vorteile: [
        "Hohe Lasten für die Waden möglich.",
        "Stabile Position.",
        "Trainiert vor allem den zweiköpfigen Wadenmuskel."
      ],
      tipps: [
        "8 bis 15 Wiederholungen mit zwei Sekunden Pause in der Dehnung.",
        "Zehen gerade nach vorn reichen, das Drehen der Füße bringt kaum Unterschiede."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig an der Maschine oder langsames Absenken.",
      sicherheit: "Die Polster belasten die Wirbelsäule, bei Rückenbeschwerden Wadenheben sitzend oder an der Beinpresse wählen."
    }
  },
  {
    id: "wadenheben_multipresse",
    name: "Wadenheben an der Multipresse",
    auch: ["Smith Machine Calf Raise"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["multipresse"], ["multipresse", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { sprunggelenk: 1, ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Stehendes Wadenheben mit der Stange der Multipresse auf dem oberen Rücken. Die geführte Stange macht schweres Wadentraining ohne eigene Wadenmaschine möglich.",
      ausfuehrung: [
        "Leg eine Hantelscheibe oder einen Block unter die Stange und stell dich mit den Fußballen darauf, die Fersen frei.",
        "Leg die Stange wie bei der Kniebeuge auf den oberen Rücken und dreh sie aus den Haken.",
        "Knie gestreckt, aber nicht durchgedrückt, Rumpf angespannt.",
        "Senke die Fersen langsam bis in die volle Dehnung ab und halte kurz.",
        "Drück dich so hoch wie möglich auf die Zehenspitzen und halte oben kurz.",
        "Dreh die Stange nach dem Satz wieder in die Haken."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Erhöhung rutscht: Stabile, rutschfeste Unterlage verwenden.",
        "Wippen: Unten halten.",
        "Knie arbeiten mit: Gestreckt halten."
      ],
      vorteile: [
        "Schwere Lasten ohne Wadenmaschine.",
        "Stabile, geführte Bewegung.",
        "Großer Weg durch die Erhöhung."
      ],
      tipps: [
        "Sicherungsanschläge knapp unter die tiefste Position stellen.",
        "10 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: ohne Erhöhung. Schwerer: einbeinig oder mehr Gewicht.",
      sicherheit: "Bei Rückenbeschwerden die sitzende Variante oder die Beinpresse wählen."
    }
  },
  {
    id: "wadenheben_sitzend",
    name: "Wadenheben sitzend an der Maschine",
    auch: ["Seated Calf Raise", "Sitzendes Wadenheben"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["wadenmaschine_sitzend"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    info: {
      kurz: "Wadenheben im Sitzen mit gebeugten Knien und Polster auf den Oberschenkeln. Weil der zweiköpfige Wadenmuskel bei gebeugtem Knie entspannt ist, trainierst Du vor allem den tiefer liegenden Schollenmuskel (Soleus).",
      ausfuehrung: [
        "Setz dich in die Maschine, das Polster liegt knapp über den Knien auf den Oberschenkeln.",
        "Stell die Fußballen hüftbreit auf die Trittkante, die Fersen hängen frei.",
        "Drück die Fersen leicht hoch und löse die Sicherung.",
        "Senke die Fersen langsam bis in die volle Dehnung und halte kurz.",
        "Drück dich so hoch wie möglich auf die Fußballen und halte oben kurz.",
        "Senke langsam ab und arbeite gleichmäßig weiter."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Wippen: Unten pausieren.",
        "Polster zu weit hinten: Knapp über den Knien platzieren.",
        "Mit den Händen nachhelfen: Hände nur locker auf dem Polster."
      ],
      vorteile: [
        "Trainiert gezielt den Schollenmuskel, wichtig für Laufen und Ausdauer.",
        "Belastet den Rücken nicht.",
        "Ergänzt stehendes Wadenheben ideal."
      ],
      tipps: [
        "Der Soleus verträgt viele Wiederholungen, 15 bis 25 sind gut.",
        "Kombiniere mit stehendem Wadenheben für die gesamte Wade."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig oder lange Pause unten.",
      sicherheit: "Bei Achillessehnenbeschwerden mit kleinem Weg beginnen."
    }
  },
  {
    id: "wadenheben_sitzend_kh",
    name: "Wadenheben sitzend mit Kurzhanteln",
    auch: ["Seated Dumbbell Calf Raise", "DB Seated Calf Raise"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["kurzhantel", "bank"], ["hantelscheibe", "bank"], ["kettlebell", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Auf einer Bank sitzend legst Du Kurzhanteln auf die Oberschenkel und hebst die Fersen. Die Heimvariante der sitzenden Wadenmaschine für den Schollenmuskel.",
      ausfuehrung: [
        "Setz dich vorn auf eine Bank, die Fußballen stehen auf einer Hantelscheibe oder Stufe, die Fersen frei.",
        "Leg die Kurzhanteln senkrecht auf die Oberschenkel knapp über den Knien und halte sie fest.",
        "Senke die Fersen bis in die volle Dehnung und halte kurz.",
        "Drück dich so hoch wie möglich auf die Fußballen.",
        "Halte oben kurz und senke langsam ab."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Ohne Erhöhung: Dann fehlt die Dehnung, eine Scheibe oder Stufe unterlegen.",
        "Wippen: Unten halten.",
        "Hanteln drücken auf die Knie: Etwas weiter auf die Oberschenkel legen, eventuell ein Handtuch unterlegen."
      ],
      vorteile: [
        "Soleus-Training ohne Maschine.",
        "Rückenschonend.",
        "Wenig Material nötig."
      ],
      tipps: [
        "Einbeinig mit einer Hantel erhöht die Last pro Seite.",
        "20 bis 30 Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig oder schwerere Hanteln.",
      sicherheit: "Unproblematisch."
    }
  },
  {
    id: "wadenheben_beinpresse",
    name: "Wadenheben an der Beinpresse",
    auch: ["Leg Press Calf Raise", "Calf Press"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["beinpresse"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    hinweis: "Sicherung der Beinpresse eingeklappt lassen, wenn möglich.",
    info: {
      kurz: "Mit gestreckten Beinen an der Beinpresse drückst Du die Plattform nur mit den Fußballen weg. Schwere Wadenarbeit ohne Belastung der Wirbelsäule.",
      ausfuehrung: [
        "Setz dich in die Beinpresse und stell die Fußballen hüftbreit an die untere Kante der Plattform, die Fersen ragen frei.",
        "Drück die Plattform mit gestreckten, aber nicht durchgedrückten Knien hoch.",
        "Lass die Plattform langsam Richtung Zehen kommen, bis die Waden maximal gedehnt sind.",
        "Halte kurz und drück die Plattform mit den Fußballen so weit wie möglich weg.",
        "Halte oben kurz und wiederhole."
      ],
      atmung: "Beim Wegdrücken ausatmen, beim Zurückkommen einatmen.",
      fehler: [
        "Füße rutschen ab: Sicher auf die Kante stellen, nicht zu weit unten.",
        "Knie beugen sich: Gestreckt halten.",
        "Wippen: Unten pausieren."
      ],
      vorteile: [
        "Schwere Last ohne Druck auf die Wirbelsäule.",
        "Großer, kontrollierter Bewegungsweg.",
        "In fast jedem Studio verfügbar."
      ],
      tipps: [
        "12 bis 20 Wiederholungen mit Dehnpause.",
        "Einbeinig ist gut, um Seitenunterschiede auszugleichen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einbeinig oder langsames Absenken.",
      sicherheit: "Füße sicher platzieren, damit sie nicht abrutschen."
    }
  },
  {
    id: "wadenheben_stepper",
    name: "Wadenheben am Stepper",
    auch: ["Calf Raise am Stepper", "Step Calf Raise", "Wadenheben auf der Stufe"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 210,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    schwerer: "wadenheben_einbeinig_kg",
    info: {
      kurz: "Beidbeiniges Wadenheben ohne Gewicht auf einem Stepper, einer Box oder einer Treppenstufe. Durch die Erhöhung trainierst Du mit vollem Bewegungsweg und Dehnung unten.",
      ausfuehrung: [
        "Stell dich mit den Fußballen hüftbreit auf die Kante eines Steppers oder einer Stufe, die Fersen ragen frei.",
        "Halte dich leicht an einer Wand oder einem Geländer fest.",
        "Senke die Fersen langsam so tief wie möglich ab und halte ein bis zwei Sekunden in der Dehnung.",
        "Drück dich so hoch wie möglich auf die Zehenspitzen.",
        "Halte oben kurz und senke langsam wieder ab."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Wippen: Unten kurz pausieren.",
        "Halber Weg: Ganz runter und ganz hoch.",
        "Gewicht auf den Außenkanten: Über die Großzehenballen drücken."
      ],
      vorteile: [
        "Einfache Wadenübung für zu Hause.",
        "Voller Bewegungsweg durch die Erhöhung.",
        "Gute Vorbereitung für Laufen und Sprünge."
      ],
      tipps: [
        "15 bis 25 langsame Wiederholungen.",
        "Wenn das zu leicht wird, wechsle zur einbeinigen Variante."
      ],
      varianten: "Leichter: am flachen Boden. Schwerer: einbeinig oder mit Gewicht.",
      sicherheit: "Stabil festhalten, damit du nicht von der Stufe rutschst."
    }
  },
  {
    id: "wadenheben_einbeinig_kg",
    name: "Wadenheben einbeinig ohne Gewicht",
    auch: ["Single-Leg Bodyweight Calf Raise"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 210,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Wadenheben auf einem Bein auf einer Stufe, nur mit dem eigenen Körpergewicht. Doppelte Last je Wade und ein wichtiger Test für die Wadenkraft im Laufsport.",
      ausfuehrung: [
        "Stell dich mit dem Fußballen eines Fußes auf eine Stufe oder Box, die Ferse ragt frei.",
        "Halte dich leicht fest, das andere Bein hebst du an.",
        "Senke die Ferse langsam bis in die volle Dehnung und halte kurz.",
        "Drück dich so hoch wie möglich auf die Zehenspitzen.",
        "Senke langsam ab und wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Mit der Hand hochziehen: Nur zum Gleichgewicht festhalten.",
        "Knie beugt sich: Gestreckt halten.",
        "Wippen: Unten pausieren."
      ],
      vorteile: [
        "Kräftigt jede Wade einzeln ohne Gerät.",
        "Deckt Seitenunterschiede auf.",
        "Wichtig für die Belastbarkeit von Wade und Achillessehne beim Laufen."
      ],
      tipps: [
        "Läufer sollten 20 bis 25 saubere Wiederholungen je Seite schaffen.",
        "Langsames Absenken in drei Sekunden steigert die Wirkung."
      ],
      varianten: "Leichter: beidbeinig. Schwerer: mit Kurzhantel oder exzentrisch betont."
    }
  },
  {
    id: "wadenheben_isometrisch_gebeugt",
    name: "Isometrisches Wadenhalten mit gebeugtem Knie",
    auch: ["Bent-Knee Isometric Calf Hold", "Soleus Iso Hold", "Wall Soleus Hold"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    sekundaer: ["quadrizeps"],
    geraete: [["wand"], [], ["kurzhantel"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Auf einem Bein mit gebeugtem Knie stehst Du auf dem Fußballen und hältst die Ferse oben. Trainiert gezielt den Schollenmuskel, der beim Laufen ein Vielfaches des Körpergewichts trägt.",
      ausfuehrung: [
        "Stell dich auf ein Bein, mit dem Rücken an eine Wand oder mit den Händen an der Wand zum Festhalten.",
        "Beuge das Knie etwa 30 bis 45 Grad, wie in einer leichten Kniebeuge.",
        "Heb die Ferse an, bis du auf dem Fußballen stehst, und halte die Ferse auf etwa halber Höhe.",
        "Halte Knie- und Fußwinkel ganz ruhig die vorgegebene Zeit.",
        "Senke die Ferse langsam ab und wechsle die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Knie streckt sich: Beugung beibehalten, sonst arbeitet der andere Wadenmuskel.",
        "Ferse sinkt: Position halten oder Zeit verkürzen.",
        "Fuß kippt nach außen: Über den Großzehenballen stehen."
      ],
      vorteile: [
        "Kräftigt den Schollenmuskel gezielt.",
        "Isometrisch und damit oft gut verträglich bei Sehnenproblemen.",
        "Wichtig für Läufer und Sportler mit vielen Sprüngen."
      ],
      tipps: [
        "3 bis 5 Wiederholungen à 30 bis 45 Sekunden je Seite.",
        "Mit Kurzhantel in der Hand weiter steigerbar."
      ],
      varianten: "Leichter: beidbeinig. Schwerer: mit Kurzhantel, längere Zeit oder sitzendes Wadenheben mit Gewicht.",
      sicherheit: "Bei Achillessehnenbeschwerden nur schmerzarm halten und abklären."
    }
  },
  {
    id: "donkey_wadenheben",
    name: "Donkey-Wadenheben",
    auch: ["Donkey Calf Raise", "Esel-Wadenheben"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["wadenmaschine_stehend"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1, ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Wadenheben mit nach vorn gebeugtem Oberkörper an einer Donkey-Maschine, die Last liegt auf der Hüfte. Die gebeugte Hüfte dehnt den zweiköpfigen Wadenmuskel stärker und gibt ein intensives Dehngefühl.",
      ausfuehrung: [
        "Stell dich mit den Fußballen auf die Trittkante der Maschine, die Fersen frei.",
        "Beuge dich aus der Hüfte nach vorn, stütz dich mit den Unterarmen auf dem Polster ab, das Hüftpolster liegt auf dem unteren Rücken oder der Hüfte.",
        "Knie gestreckt, aber nicht durchgedrückt.",
        "Senke die Fersen langsam bis in die volle Dehnung und halte kurz.",
        "Drück dich so hoch wie möglich auf die Zehenspitzen und halte oben.",
        "Senke langsam ab und wiederhole."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Wippen: Unten kurz pausieren.",
        "Knie beugen: Gestreckt halten.",
        "Rücken rund: Aus der Hüfte vorbeugen."
      ],
      vorteile: [
        "Starke Dehnung des Wadenmuskels durch die Vorbeuge.",
        "Hohe Lasten möglich.",
        "Abwechslung zum stehenden Wadenheben."
      ],
      tipps: [
        "10 bis 15 Wiederholungen mit Dehnpause.",
        "Ohne Maschine geht es an der Multipresse mit vorgebeugtem Oberkörper."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: langsames Absenken oder Pausen.",
      sicherheit: "Bei Rückenbeschwerden die Beinpresse oder sitzendes Wadenheben bevorzugen."
    }
  },
  {
    id: "wadenheben_exzentrisch",
    name: "Exzentrisches Wadenabsenken",
    auch: ["Eccentric Heel Drop", "Alfredson Heel Drop", "Eccentric Calf Raise"],
    muster: "wade",
    art: "kraft",
    muskeln: ["waden"],
    geraete: [["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 210,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Du gehst beidbeinig auf die Zehenspitzen und senkst Dich langsam nur auf einem Bein ab. Dieses Absenken wird seit Langem in der Physiotherapie für die Achillessehne genutzt und stärkt die Wade in der Bremsarbeit.",
      ausfuehrung: [
        "Stell dich mit beiden Fußballen auf die Kante einer Stufe, die Fersen frei, und halte dich fest.",
        "Drück dich mit beiden Beinen auf die Zehenspitzen hoch.",
        "Nimm das Gewicht auf ein Bein und heb das andere leicht an.",
        "Senke die Ferse des Standbeins in etwa drei bis fünf Sekunden so tief wie möglich ab.",
        "Stell den zweiten Fuß wieder dazu und geh beidbeinig nach oben.",
        "Mach alle Wiederholungen und wechsle die Seite. Mit leicht gebeugtem Knie trainierst du stärker den Schollenmuskel."
      ],
      atmung: "Beim Absenken langsam ausatmen, beim Hochgehen einatmen.",
      fehler: [
        "Zu schnell absenken: Mindestens drei Sekunden.",
        "Einbeinig hochdrücken: Hoch geht es beidbeinig, nur das Absenken ist einbeinig.",
        "Ohne Festhalten: Für Sicherheit eine Hand an Wand oder Geländer."
      ],
      vorteile: [
        "Kräftigt Wade und Achillessehne in der Bremsbewegung.",
        "Wird in der Physiotherapie bei Sehnenbeschwerden eingesetzt.",
        "Ohne Gerät machbar."
      ],
      tipps: [
        "Typisch sind 3 Sätze à 15 Wiederholungen je Seite, mit gestrecktem und mit gebeugtem Knie.",
        "Später mit Rucksack oder Kurzhantel steigern."
      ],
      varianten: "Leichter: kleinerer Weg oder beidbeinig absenken. Schwerer: mit Zusatzgewicht.",
      sicherheit: "Bei bestehenden Sehnenbeschwerden das Programm mit Physiotherapie oder Arzt abstimmen."
    }
  },
  {
    id: "tibialis_heben",
    name: "Schienbeinheben an der Wand",
    auch: ["Tibialis Raise", "Wall Tib Raise", "Tib Raise"],
    muster: "wade",
    art: "kraft",
    muskeln: ["schienbein"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    schwerer: "tibialis_heben_gewicht",
    info: {
      kurz: "Mit dem Rücken an der Wand, die Füße etwas vor dem Körper, ziehst Du die Zehen nach oben zum Schienbein. Kräftigt den vorderen Schienbeinmuskel, das Gegenstück zur Wade.",
      ausfuehrung: [
        "Lehn dich mit Gesäß und Rücken an eine Wand, die Füße stehen etwa ein bis zwei Fußlängen vor der Wand.",
        "Die Beine sind gestreckt, die Fersen stehen fest am Boden.",
        "Zieh die Zehen und den Vorfuß so weit wie möglich nach oben Richtung Schienbein.",
        "Halte oben kurz und spür das Brennen vorn am Schienbein.",
        "Senke den Vorfuß langsam ab, ohne ihn ganz abzulegen, und wiederhole."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Füße zu nah an der Wand: Weiter weg stellen, sonst ist es zu leicht.",
        "Schwung: Langsam und kontrolliert.",
        "Halber Weg: Ganz hochziehen."
      ],
      vorteile: [
        "Kräftigt den vorderen Schienbeinmuskel, der beim Laufen das Absenken des Fußes bremst.",
        "Kann bei Läufern zur Belastbarkeit des Unterschenkels beitragen.",
        "Ergänzt das Wadentraining für ein ausgeglichenes Sprunggelenk."
      ],
      tipps: [
        "20 bis 30 Wiederholungen bis zum Brennen.",
        "Je weiter die Füße von der Wand stehen, desto schwerer."
      ],
      varianten: "Leichter: Füße näher an der Wand. Schwerer: weiter weg, einbeinig oder mit Gewicht.",
      sicherheit: "Bei Schienbeinkantensyndrom nur schmerzfrei trainieren und abklären."
    }
  },
  {
    id: "tibialis_heben_gewicht",
    name: "Schienbeinheben sitzend mit Gewicht",
    auch: ["Weighted Tibialis Raise", "Seated Tib Raise", "Tib Bar Raise"],
    muster: "wade",
    art: "kraft",
    muskeln: ["schienbein"],
    geraete: [["kettlebell", "bank"], ["hantelscheibe", "bank"], ["kurzhantel", "bank"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    info: {
      kurz: "Auf einer Bank sitzend hängt eine Kettlebell oder Scheibe über dem Vorfuß, oder ein Band zieht den Fuß nach vorn, und Du ziehst die Zehen gegen den Widerstand hoch. Steigerbares Training für den Schienbeinmuskel.",
      ausfuehrung: [
        "Setz dich hoch auf eine Bank oder einen Kasten, so dass die Unterschenkel frei hängen und die Füße den Boden nicht berühren.",
        "Häng eine leichte Kettlebell mit dem Griff über den Vorfuß oder klemm eine Scheibe zwischen die Füße. Alternativ legst du ein Band vor dir befestigt um den Fußrücken.",
        "Lass den Fuß nach unten sinken, bis die Zehen nach unten zeigen.",
        "Zieh den Vorfuß so weit wie möglich nach oben zum Schienbein.",
        "Halte oben kurz und senke langsam wieder ab."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Kettlebell rutscht: Leichtes Gewicht und Griff gut über den Fuß.",
        "Schwung: Langsam arbeiten.",
        "Zu schwer: Der Muskel ist klein, wenig Gewicht reicht."
      ],
      vorteile: [
        "Gut steigerbares Schienbeintraining.",
        "Großer Bewegungsweg.",
        "Ergänzt das Wadentraining."
      ],
      tipps: [
        "15 bis 25 Wiederholungen.",
        "Einseitig mit dem Band ist am einfachsten einzurichten."
      ],
      varianten: "Leichter: Schienbeinheben an der Wand. Schwerer: mehr Gewicht oder langsames Absenken.",
      sicherheit: "Gewicht sicher führen, damit es nicht auf den Fuß fällt."
    }
  },
]
