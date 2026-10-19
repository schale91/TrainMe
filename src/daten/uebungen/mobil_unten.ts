import type { Uebung } from "../../logik/typen"

export const MOBIL_UNTEN: Uebung[] = [
  // ---------- Hüftbeuger ----------
  {
    id: "hueftbeuger_dehnen",
    name: "Hüftbeuger dehnen im Kniestand",
    auch: ["Half-Kneeling Hip Flexor Stretch", "Kneeling Hip Flexor Stretch", "Hüftbeugerdehnung"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["quadrizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 2,
    sport: ["golf", "laufen", "fussball"],
    einseitig: true,
    hinweis: "Becken hinten einrollen, erst dann nach vorn schieben.",
    info: {
      kurz: "Klassische Dehnung des Hüftbeugers im halben Kniestand. Sie öffnet die Vorderseite der Hüfte, die durch viel Sitzen oft verkürzt wirkt, und verbessert die Hüftstreckung.",
      ausfuehrung: [
        "Knie dich auf eine Matte, das rechte Knie liegt unter der Hüfte, der linke Fuß steht vorn flach am Boden, beide Knie etwa im rechten Winkel.",
        "Richte den Oberkörper aufrecht auf und lege die Hände auf das vordere Knie oder in die Hüfte.",
        "Spann das Gesäß des hinteren Beins fest an und kippe das Becken leicht nach hinten, als würdest du das Steißbein unter dich ziehen.",
        "Schiebe nun die ganze Hüfte langsam nach vorn, bis du eine deutliche Dehnung vorn an der rechten Hüfte und am Oberschenkel spürst.",
        "Halte die Position ruhig, der Oberkörper bleibt aufrecht und das untere Rückenende macht kein Hohlkreuz.",
        "Löse die Dehnung nach der vorgegebenen Zeit langsam und wechsle die Seite."
      ],
      atmung: "Atme ruhig und tief in den Bauch, mit jedem Ausatmen darfst du die Hüfte ein kleines Stück weiter nach vorn sinken lassen.",
      fehler: [
        "Hohlkreuz statt Hüftstreckung: Becken bewusst nach hinten kippen und den Bauch leicht anspannen.",
        "Zu weit nach vorn schieben, bis das vordere Knie weit über die Zehen wandert: lieber kleinere Bewegung mit sauberem Becken.",
        "Gesäß locker gelassen: Erst die Spannung im Gesäß macht die Dehnung im Hüftbeuger wirksam.",
        "Oberkörper kippt nach vorn: Brust aufrichten, Blick geradeaus."
      ],
      vorteile: [
        "Dehnt den Hüftbeuger und die vordere Hüftkapsel.",
        "Kann helfen, die Hüftstreckung beim Gehen, Laufen und Sprinten zu verbessern.",
        "Gleicht langes Sitzen aus und kann den unteren Rücken entlasten.",
        "Bereitet die Hüfte gut auf Kniebeugen, Ausfallschritte und Hip Thrusts vor."
      ],
      tipps: [
        "Die Beckenkippung ist wichtiger als der Weg nach vorn. Oft reichen wenige Zentimeter.",
        "Leg ein gefaltetes Handtuch oder Kissen unter das hintere Knie, wenn es drückt.",
        "Vor dem Training kürzer (20 bis 30 Sekunden), nach dem Training oder abends länger halten."
      ],
      varianten: "Leichter: Hände auf einem Stuhl abstützen. Schwerer: Arm der hinteren Seite nach oben strecken und leicht zur Gegenseite neigen oder den hinteren Fuß an der Wand hochstellen (Couch Stretch).",
      sicherheit: "Bei Knieschmerzen im hinteren Knie gut polstern oder die stehende Variante wählen. Bei Leistenschmerzen nicht in den Schmerz hinein dehnen.",
      golf: "Eine freie Hüftstreckung erlaubt dir im Durchschwung, die Hüfte vollständig zum Ziel zu drehen und aufrecht ins Finish zu kommen, ohne ins Hohlkreuz auszuweichen. Das schont den unteren Rücken."
    }
  },
  {
    id: "hueftbeuger_dehnen_seitneigung",
    name: "Hüftbeuger dehnen im Kniestand mit Armheben und Seitneigung",
    auch: ["Half-Kneeling Hip Flexor Stretch with Reach", "Kneeling Hip Flexor Side Bend"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["schraege_bauch", "latissimus", "quadrizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Erweiterte Hüftbeugerdehnung im Kniestand, bei der du den Arm der hinteren Seite über den Kopf streckst und dich zur Gegenseite neigst. So erreichst du zusätzlich den oberen Anteil des Hüftbeugers, die Flanke und den seitlichen Rumpf.",
      ausfuehrung: [
        "Geh in den halben Kniestand, das rechte Knie unten, der linke Fuß vorn, beide Knie etwa im rechten Winkel.",
        "Spann das rechte Gesäß an und kippe das Becken leicht nach hinten, bis du vorn an der rechten Hüfte die erste Dehnung spürst.",
        "Streck den rechten Arm gerade nach oben, die Handfläche zeigt nach innen, die Schulter bleibt weg vom Ohr.",
        "Neige den Oberkörper nun langsam nach links, als würdest du über einen Ball greifen. Die rechte Flanke wird lang.",
        "Halte die Spannung im Gesäß und schiebe die Hüfte minimal nach vorn, bis die Dehnung von der Leiste bis in die Flanke zieht.",
        "Halte ruhig, komm langsam zurück zur Mitte und wechsle dann die Seite."
      ],
      atmung: "Atme bewusst in die gedehnte Flanke ein und lass dich beim Ausatmen ein wenig tiefer in die Seitneigung sinken.",
      fehler: [
        "Oberkörper dreht sich auf: Brustbein bleibt nach vorn ausgerichtet, nur seitlich neigen.",
        "Becken kippt ins Hohlkreuz, sobald der Arm hochgeht: Bauch anspannen und das Becken weiter eingerollt halten.",
        "Schulter zieht zum Ohr: Arm lang machen, Schulterblatt leicht nach unten ziehen."
      ],
      vorteile: [
        "Dehnt Hüftbeuger, Leiste und seitlichen Rumpf in einer Position.",
        "Erreicht durch die Seitneigung auch die oberen Anteile des Hüftbeugers an der Lendenwirbelsäule.",
        "Gut als Teil des Aufwärmens oder als Ausgleich nach langem Sitzen."
      ],
      tipps: [
        "Lieber weniger Seitneigung mit sauberem Becken als eine große Bewegung im Hohlkreuz.",
        "Dynamisch nutzbar: fünf bis acht Mal langsam in die Seitneigung hinein und wieder heraus, dann halten."
      ],
      varianten: "Leichter: ohne Seitneigung, nur Arm hoch. Schwerer: Oberkörper zusätzlich leicht zur Seite des vorderen Beins drehen.",
      sicherheit: "Bei Knieschmerzen gut polstern. Bei Schulterbeschwerden den Arm nur so hoch nehmen, wie es angenehm ist."
    }
  },
  {
    id: "hueftbeuger_dehnen_rotation",
    name: "Hüftbeuger dehnen im Kniestand mit Rumpfrotation",
    auch: ["Half-Kneeling Hip Flexor Stretch with Rotation", "Kneeling Lunge Rotation Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["schraege_bauch", "oberer_ruecken", "quadrizeps"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 2,
    sport: ["golf"],
    einseitig: true,
    info: {
      kurz: "Hüftbeugerdehnung im halben Kniestand, kombiniert mit einer ruhigen Oberkörperdrehung zur Seite des vorderen Beins. Sie verbindet freie Hüftstreckung mit Rotation der Brustwirbelsäule.",
      ausfuehrung: [
        "Geh in den halben Kniestand, rechtes Knie unten, linker Fuß vorn, und richte den Oberkörper auf.",
        "Spann das rechte Gesäß an, kippe das Becken leicht nach hinten und schiebe die Hüfte nach vorn, bis du vorn an der rechten Hüfte eine Dehnung spürst.",
        "Verschränke die Arme vor der Brust oder streck sie auf Schulterhöhe nach vorn.",
        "Dreh den Oberkörper langsam nach links, zur Seite des vorderen Beins. Das Becken bleibt gerade nach vorn ausgerichtet.",
        "Halte am Ende der Drehung kurz und spüre, wie die Dehnung an der Hüfte etwas zunimmt.",
        "Dreh kontrolliert zurück zur Mitte und wiederhole. Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Aufdrehen ausatmen, in der Mitte einatmen. Nicht die Luft anhalten.",
      fehler: [
        "Becken dreht mit: Hüfte bleibt nach vorn, nur der Brustkorb rotiert.",
        "Spannung im Gesäß geht verloren: vor jeder Drehung neu anspannen.",
        "Ruckartiges Drehen: langsam und kontrolliert, am Ende kurz verweilen."
      ],
      vorteile: [
        "Kombiniert Hüftstreckung mit Rotation, wie sie in vielen Sportbewegungen vorkommt.",
        "Mobilisiert die Brustwirbelsäule bei stabilem Becken.",
        "Eignet sich gut als Aufwärmübung vor Golf, Tennis oder Wurfsportarten."
      ],
      tipps: [
        "Halte einen Stab oder Golfschläger quer vor der Brust, so siehst du die Drehung besser.",
        "Fünf bis acht ruhige Wiederholungen je Seite reichen im Aufwärmen."
      ],
      varianten: "Leichter: kleinere Drehung, Hände in der Hüfte. Schwerer: Arm der hinteren Seite beim Drehen nach oben und hinten führen.",
      sicherheit: "Bei Knieschmerzen gut polstern. Bei Rückenschmerzen in der Rotation nur im schmerzfreien Bereich drehen.",
      golf: "Trainiert die Trennung von Becken und Oberkörper bei gestreckter Hüfte. Genau diese Kombination brauchst du im Durchschwung, wenn die Hüfte vorangeht und der Oberkörper nachfolgt."
    }
  },
  {
    id: "hueftbeuger_dehnen_stehend",
    name: "Hüftbeuger dehnen im Stehen",
    auch: ["Standing Hip Flexor Stretch", "Standing Split Stance Hip Flexor Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["quadrizeps", "waden"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    hinweis: "Gut für zwischendurch, ganz ohne Matte.",
    info: {
      kurz: "Hüftbeugerdehnung im Schrittstand, ganz ohne Bodenkontakt des Knies. Ideal im Büro, auf dem Golfplatz oder für alle, die nicht knien können oder möchten.",
      ausfuehrung: [
        "Stell dich in einen weiten Schrittstand, der linke Fuß vorn, der rechte etwa eine Beinlänge hinten, die Ferse hinten darf abheben.",
        "Beuge das vordere Knie leicht, das hintere Bein bleibt fast gestreckt, die Hüfte zeigt gerade nach vorn.",
        "Spann das rechte Gesäß an und kippe das Becken nach hinten, als wolltest du die Gürtelschnalle zum Bauchnabel ziehen.",
        "Schiebe die Hüfte langsam nach vorn und etwas nach unten, bis die Dehnung vorn an der rechten Hüfte spürbar ist.",
        "Halte den Oberkörper aufrecht, für mehr Wirkung streck den rechten Arm nach oben.",
        "Halte die Position, löse sie langsam und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit jedem Ausatmen das Becken noch ein wenig mehr einrollen.",
      fehler: [
        "Schritt zu kurz: Dann fehlt die Hüftstreckung, den hinteren Fuß weiter zurückstellen.",
        "Hohlkreuz: Bauch anspannen und Becken einrollen, bevor du nach vorn schiebst.",
        "Hüfte dreht sich auf: Beide Hüftknochen zeigen nach vorn."
      ],
      vorteile: [
        "Dehnt Hüftbeuger und vorderen Oberschenkel ohne Belastung des Knies.",
        "Überall und in Alltagskleidung möglich.",
        "Gute Vorbereitung auf Laufen und Gehen nach langem Sitzen."
      ],
      tipps: [
        "Halte dich bei Bedarf mit einer Hand an einer Wand oder Stuhllehne fest, dann kannst du dich ganz auf das Becken konzentrieren.",
        "Die Dehnung ist meist schwächer als im Kniestand. Das ist normal, die Beckenkippung macht den Unterschied."
      ],
      varianten: "Leichter: kleinerer Schritt. Schwerer: Arm hoch und leichte Seitneigung oder in den Kniestand wechseln.",
      sicherheit: "Bei unsicherem Gleichgewicht an einer Wand festhalten."
    }
  },
  {
    id: "hueftbeuger_dehnen_band",
    name: "Hüftbeuger-Mobilisation mit Band im Kniestand",
    auch: ["Banded Hip Flexor Stretch", "Banded Hip Extension Mobilization", "Banded Couch Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["quadrizeps"],
    geraete: [["band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    hinweis: "Band ganz oben am Oberschenkel, direkt unter dem Gesäß.",
    info: {
      kurz: "Hüftbeugerdehnung im Kniestand mit einem Band, das die Hüfte nach vorn zieht. Der Zug von hinten verstärkt die Streckung im Hüftgelenk und wird oft als angenehmer empfunden als die reine Dehnung.",
      ausfuehrung: [
        "Befestige ein kräftiges Band auf Hüfthöhe hinter dir, zum Beispiel an einem Rack oder einer stabilen Stange.",
        "Steig mit dem rechten Bein in die Schlaufe und zieh sie ganz nach oben in die Leiste, direkt unter das Gesäß.",
        "Geh nach vorn, bis das Band gut gespannt ist, und knie dich in den halben Kniestand mit dem rechten Knie unten.",
        "Spann das rechte Gesäß an, kippe das Becken nach hinten und lass dich vom Band sanft nach vorn ziehen.",
        "Wippe langsam ein paar Zentimeter vor und zurück oder halte die Endposition ruhig.",
        "Löse die Position, steig aus dem Band und wechsle die Seite."
      ],
      atmung: "Gleichmäßig atmen, beim Ausatmen in die Dehnung sinken lassen.",
      fehler: [
        "Band sitzt zu tief am Oberschenkel: Dann zieht es nur am Bein, nicht am Hüftgelenk. Ganz nach oben schieben.",
        "Ins Hohlkreuz ausweichen: Gesäß fest, Bauch leicht angespannt.",
        "Zu dünnes Band: Es braucht spürbaren Zug, sonst ist es eine normale Dehnung."
      ],
      vorteile: [
        "Verstärkt die Streckung im Hüftgelenk durch den Zug von hinten.",
        "Wird oft als angenehmer empfunden als die reine Dehnung.",
        "Gut vor Kniebeugen, Sprints und Hip Thrusts."
      ],
      tipps: [
        "Zwei bis drei Durchgänge von 30 bis 60 Sekunden mit leichtem Wippen sind ein guter Rahmen.",
        "Kombiniere am Ende mit einem Armheben für die oberen Anteile des Hüftbeugers."
      ],
      varianten: "Leichter: weniger Bandspannung. Schwerer: hinteren Fuß an einer Bank hochlegen (Couch Stretch mit Band).",
      sicherheit: "Band vor jedem Einsatz auf Risse prüfen und sicher befestigen. Bei Leistenbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "hueftbeuger_pnf",
    name: "Hüftbeuger dehnen mit Anspannen und Entspannen",
    auch: ["PNF Hip Flexor Stretch", "Contract-Relax Hip Flexor Stretch", "PAILs RAILs Hip Flexor"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["quadrizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    hinweis: "Anspannen etwa 5 bis 10 Sekunden, dann tiefer in die Dehnung.",
    info: {
      kurz: "Hüftbeugerdehnung im Kniestand nach dem Prinzip Anspannen und Entspannen (PNF). Du drückst das hintere Knie aktiv in den Boden, lässt locker und gehst dann tiefer in die Dehnung.",
      ausfuehrung: [
        "Geh in den halben Kniestand mit dem rechten Knie unten und dehne den rechten Hüftbeuger wie gewohnt mit eingerolltem Becken.",
        "Bleib in einer angenehmen Dehnung und halte sie etwa 20 Sekunden.",
        "Drück nun das rechte Knie kräftig in den Boden, als wolltest du es nach vorn ziehen, ohne dass sich etwas bewegt. Halte diese Spannung etwa 5 bis 10 Sekunden mit etwa halber Kraft.",
        "Lass die Spannung los, atme aus und schiebe die Hüfte ein kleines Stück weiter nach vorn.",
        "Spann jetzt das Gesäß des hinteren Beins fest an und halte die neue Position aktiv für einige Sekunden.",
        "Wiederhole den Ablauf zwei bis drei Mal und wechsle dann die Seite."
      ],
      atmung: "Während des Anspannens normal weiteratmen, beim Lösen bewusst ausatmen und tiefer gehen.",
      fehler: [
        "Mit voller Kraft drücken: Halbe Kraft reicht und ist sicherer.",
        "Beim Anspannen bewegt sich die Hüfte: Der Druck ist rein isometrisch.",
        "Nach dem Lösen ins Hohlkreuz fallen: Becken bleibt eingerollt."
      ],
      vorteile: [
        "Kann kurzfristig mehr Bewegungsumfang ermöglichen als reines Halten.",
        "Trainiert Kraft in der neuen Endposition, was den Gewinn oft länger erhält.",
        "Gut geeignet, wenn sich normales Dehnen kaum noch weiterentwickelt."
      ],
      tipps: [
        "Nicht direkt vor Schnellkraft- oder Maximalkrafttraining ausführen, lieber danach oder an eigenen Tagen.",
        "Zwei bis drei Zyklen pro Seite sind genug."
      ],
      varianten: "Leichter: nur das Lösen und tiefer Gehen ohne die aktive Endphase. Schwerer: in der Couch-Stretch-Position ausführen.",
      sicherheit: "Bei Knie- oder Leistenschmerzen die Anspannung reduzieren. Nicht in den Schmerz hinein arbeiten."
    }
  },
  {
    id: "hueftbeuger_kniestand_wippen",
    name: "Hüftbeuger-Wippen im Kniestand",
    auch: ["Half-Kneeling Hip Flexor Rocks", "Dynamic Hip Flexor Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["quadrizeps", "gesaess"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Dynamische Version der Hüftbeugerdehnung: Du wippst im Kniestand rhythmisch in die Hüftstreckung und wieder heraus. Ideal zum Aufwärmen vor Beintraining, Laufen oder Golf.",
      ausfuehrung: [
        "Geh in den halben Kniestand, das rechte Knie unten, der linke Fuß vorn, Hände in der Hüfte.",
        "Spann das rechte Gesäß an und kippe das Becken leicht nach hinten.",
        "Schiebe die Hüfte nach vorn, bis du die Dehnung vorn an der Hüfte spürst, und halte eine Sekunde.",
        "Lass die Hüfte wieder zurück über das hintere Knie gleiten und lockere kurz das Gesäß.",
        "Wiederhole in ruhigem, gleichmäßigem Rhythmus und geh mit jeder Wiederholung etwas weiter.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Vorschieben ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Ruckartig in die Endposition federn: kontrolliert und gleichmäßig bewegen.",
        "Becken verliert die Einrollung: vor jedem Vorschieben Gesäß neu anspannen.",
        "Oberkörper lehnt sich nach hinten: aufrecht bleiben."
      ],
      vorteile: [
        "Erwärmt die vordere Hüfte und bereitet sie auf Streckbewegungen vor.",
        "Beeinträchtigt die Kraft vor dem Training weniger als lange statische Dehnungen.",
        "Fördert das Gefühl für die Beckenposition."
      ],
      tipps: [
        "Acht bis zwölf Wiederholungen je Seite reichen meist.",
        "Mit dem Arm der hinteren Seite beim Vorschieben nach oben greifen, um die Flanke mitzunehmen."
      ],
      varianten: "Leichter: im Stehen im Schrittstand. Schwerer: mit Band um die Hüfte, das nach vorn zieht.",
      sicherheit: "Bei Knieschmerzen unter dem hinteren Knie gut polstern."
    }
  },
  {
    id: "couch_stretch_wand",
    name: "Couch Stretch an der Wand",
    auch: ["Couch Stretch", "Wall Couch Stretch", "Hüftbeuger und Quadrizeps an der Wand"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "quadrizeps"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 2 },
    stufe: 2,
    golf: 2,
    sport: ["golf", "laufen", "fussball"],
    einseitig: true,
    hinweis: "Knie gut polstern, Gesäß anspannen.",
    info: {
      kurz: "Intensive Dehnung für Hüftbeuger und den geraden Oberschenkelmuskel: Das hintere Knie liegt an der Wandkante, der Fußrücken an der Wand. Eine der wirksamsten Dehnungen für die gesamte Vorderseite der Hüfte.",
      ausfuehrung: [
        "Lege ein Kissen oder eine gefaltete Matte direkt an die Wand. Knie dich mit dem Rücken zur Wand davor.",
        "Setz das rechte Knie in die Ecke zwischen Boden und Wand, der rechte Unterschenkel und Fußrücken liegen an der Wand nach oben.",
        "Stell den linken Fuß vorn auf, sodass du im halben Kniestand bist. Stütz dich anfangs mit den Händen auf dem vorderen Knie oder am Boden ab.",
        "Spann das rechte Gesäß an und kippe das Becken nach hinten. Schon das kann intensiv sein.",
        "Richte den Oberkörper langsam auf, bis er möglichst senkrecht ist und dein Rücken in Richtung Wand kommt.",
        "Halte die Position ruhig und komm danach vorsichtig über die Hände wieder heraus, dann Seitenwechsel."
      ],
      atmung: "Langsam und tief atmen. Wenn die Dehnung sehr stark ist, bleib aufrechter vorgebeugt und richte dich mit jedem Ausatmen etwas weiter auf.",
      fehler: [
        "Hohlkreuz beim Aufrichten: Becken eingerollt lassen, lieber vorgebeugt bleiben.",
        "Knie zu weit von der Wand: Dann wird die Dehnung schwach. Knie so nah wie möglich in die Ecke.",
        "Ungepolstertes Knie: Immer etwas Weiches unterlegen.",
        "Zu schnell aufrichten: Die Dehnung ist intensiv, langsam steigern."
      ],
      vorteile: [
        "Dehnt Hüftbeuger und den geraden Oberschenkelmuskel gleichzeitig in maximaler Länge.",
        "Kann die Hüftstreckung bei Sprint, Sprung und Schwungbewegungen verbessern.",
        "Wirksamer Ausgleich zu viel Sitzen und Radfahren.",
        "Bereitet auf tiefe Ausfallschritte und Split Squats vor."
      ],
      tipps: [
        "Anfänger starten mit dem vorderen Knie am Boden und den Händen abgestützt.",
        "Ein bis zwei Minuten je Seite am Abend wirken oft spürbarer als mehrere kurze Runden."
      ],
      varianten: "Leichter: Knie etwas weiter von der Wand weg, Oberkörper vorgebeugt. Schwerer: Oberkörper ganz aufrecht, Arm hoch oder vorderen Fuß auf eine Erhöhung stellen.",
      sicherheit: "Bei Knieproblemen, besonders vorn an der Kniescheibe, vorsichtig und gut gepolstert. Wenn das Knie schmerzt, lieber die Variante in Seitlage oder im Stehen wählen.",
      golf: "Ein freier Hüftbeuger auf der Zielseite und der Gegenseite erlaubt dir, im Finish die Hüfte voll zum Ziel zu strecken. Ohne diese Streckung weichen viele Golfer mit einem Hohlkreuz aus, was den unteren Rücken belastet."
    }
  },
  {
    id: "couch_stretch_bank",
    name: "Couch Stretch an der Bank",
    auch: ["Bench Couch Stretch", "Rear Foot Elevated Hip Flexor Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "quadrizeps"],
    geraete: [["bank"], ["box"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 2 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Couch Stretch ohne Wand: Der hintere Fußrücken liegt auf einer Bank, das Knie davor auf dem Boden. Die Intensität lässt sich über den Abstand zur Bank gut steuern, und du kannst sie überall im Studio machen.",
      ausfuehrung: [
        "Leg ein Polster vor eine Hantelbank oder Box auf den Boden und knie dich mit dem Rücken zur Bank davor.",
        "Leg den rechten Fußrücken auf die Bank, das rechte Knie steht auf dem Polster etwa eine Handbreit vor der Bank.",
        "Stell den linken Fuß vorn auf, sodass du in einem Ausfallschritt mit hinterem Knie am Boden bist.",
        "Stütz dich zuerst mit beiden Händen auf dem vorderen Knie ab, spann das rechte Gesäß an und kipp das Becken nach hinten.",
        "Richte den Oberkörper langsam auf, so weit es die Dehnung zulässt.",
        "Halte die Position ruhig und löse sie über die Hände, bevor du die Seite wechselst."
      ],
      atmung: "Ruhig weiteratmen und mit dem Ausatmen den Oberkörper ein Stück weiter aufrichten.",
      fehler: [
        "Knie zu weit von der Bank entfernt: dann fehlt die Kniebeugung, näher heranrutschen.",
        "Hohlkreuz statt Hüftstreckung: Becken eingerollt halten.",
        "Fuß rutscht seitlich von der Bank: Fußrücken mittig ablegen, Schienbein in einer Linie."
      ],
      vorteile: [
        "Dehnt Hüftbeuger und vorderen Oberschenkel sehr wirksam.",
        "Ohne Wand und daher überall im Studio möglich.",
        "Intensität über den Kniewinkel leicht anpassbar."
      ],
      tipps: [
        "Direkt nach einem Satz Bulgarian Split Squats ist die Position schon eingerichtet.",
        "Bei sehr steifer Vorderseite mit einer niedrigen Box beginnen."
      ],
      varianten: "Leichter: niedrige Box oder größerer Abstand. Schwerer: Oberkörper ganz aufrecht und Arm der hinteren Seite nach oben.",
      sicherheit: "Bei Knieschmerzen das Knie gut polstern oder die Variante in Seitlage wählen."
    }
  },
  {
    id: "thomas_dehnung_bank",
    name: "Hüftbeuger dehnen auf der Bankkante (Thomas-Dehnung)",
    auch: ["Thomas Stretch", "Modified Thomas Stretch", "Supine Hip Flexor Stretch on Bench"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger"],
    sekundaer: ["quadrizeps"],
    geraete: [["bank"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    hinweis: "Gegenbein fest an die Brust ziehen, das andere Bein hängen lassen.",
    info: {
      kurz: "Hüftbeugerdehnung in Rückenlage am Ende einer Bank, angelehnt an den Thomas-Test aus der Physiotherapie. Die Schwerkraft zieht das hängende Bein in die Streckung, das Becken bleibt durch das angezogene Bein stabil.",
      ausfuehrung: [
        "Setz dich ganz ans Ende einer Bank, sodass das Gesäß nur knapp auf der Kante sitzt.",
        "Zieh beide Knie zur Brust und roll dich langsam auf den Rücken.",
        "Halte das linke Knie mit beiden Händen fest an der Brust, so wird der untere Rücken flach auf die Bank gedrückt.",
        "Lass das rechte Bein langsam über die Bankkante nach unten hängen, das Knie darf sich beugen.",
        "Entspann das hängende Bein vollständig und lass es von der Schwere nach unten ziehen.",
        "Halte die Position, zieh dann beide Knie zurück zur Brust und wechsle die Seite."
      ],
      atmung: "Ruhig in den Bauch atmen und beim Ausatmen das hängende Bein bewusst schwer werden lassen.",
      fehler: [
        "Angezogenes Bein locker gelassen: Dann kippt das Becken ins Hohlkreuz und die Dehnung verpufft.",
        "Zu weit oben auf der Bank liegen: Das Gesäß muss an der Kante sein, damit das Bein frei hängen kann.",
        "Bein aktiv nach unten drücken: Die Schwerkraft macht die Arbeit."
      ],
      vorteile: [
        "Passive Dehnung, bei der du fast keine Muskelarbeit leisten musst.",
        "Das Becken ist durch die Haltung gut fixiert, das macht die Dehnung gezielt.",
        "Gut für Menschen, denen der Kniestand unangenehm ist."
      ],
      tipps: [
        "Für mehr Dehnung im vorderen Oberschenkel kannst du ein leichtes Gewicht an den Knöchel legen oder das Knie stärker beugen lassen.",
        "Wenn das hängende Knie deutlich über Bankhöhe bleibt, ist der Hüftbeuger auf dieser Seite eher kurz."
      ],
      varianten: "Leichter: auf dem Bett oder einer breiten Fläche. Schwerer: Unterschenkel mit der Hand zusätzlich in Richtung Gesäß ziehen.",
      sicherheit: "Beim Hinlegen und Aufstehen auf der Bank Halt suchen, damit du nicht abrutschst. Bei Rückenproblemen auf das angezogene Knie achten."
    }
  },
  // ---------- Vorderer Oberschenkel ----------
  {
    id: "oberschenkel_vorn_dehnen",
    name: "Vorderen Oberschenkel dehnen im Stehen",
    auch: ["Standing Quad Stretch", "Quadrizepsdehnung stehend"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger"],
    geraete: [["wand"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Die bekannteste Dehnung für den vorderen Oberschenkel: Im Stehen ziehst du die Ferse zum Gesäß. Schnell, überall machbar und gut nach dem Laufen oder Beintraining.",
      ausfuehrung: [
        "Stell dich aufrecht hin und halte dich bei Bedarf mit der linken Hand an einer Wand oder Stuhllehne fest.",
        "Beuge das rechte Knie und greif mit der rechten Hand den Fußrist oder den Knöchel.",
        "Zieh die Ferse sanft Richtung Gesäß, die Knie bleiben dabei nebeneinander.",
        "Spann das rechte Gesäß an und kippe das Becken leicht nach hinten, bis die Dehnung vorn am Oberschenkel deutlich zunimmt.",
        "Halte die Position aufrecht und ruhig, das Standbein ist leicht gebeugt.",
        "Lass langsam los und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit jedem Ausatmen das Becken etwas mehr einrollen.",
      fehler: [
        "Knie wandert nach vorn oder zur Seite: Knie neben dem Standbein lassen oder leicht nach hinten führen.",
        "Hohlkreuz: Becken einrollen, sonst geht die Dehnung verloren.",
        "Oberkörper kippt nach vorn: aufrecht bleiben, eventuell an der Wand abstützen.",
        "Ferse ruckartig ans Gesäß ziehen: sanft und gleichmäßig ziehen."
      ],
      vorteile: [
        "Dehnt den vorderen Oberschenkel inklusive des geraden Muskelanteils, der über die Hüfte zieht.",
        "Überall ohne Matte möglich.",
        "Schult nebenbei das Gleichgewicht auf einem Bein."
      ],
      tipps: [
        "Die Beckenkippung bringt mehr als stärkeres Ziehen an der Ferse.",
        "Wenn du den Fuß nicht erreichst, nimm ein Handtuch oder Band um den Knöchel."
      ],
      varianten: "Leichter: Fuß auf eine Stuhlkante hinter dir legen. Schwerer: Couch Stretch an der Wand oder Bank.",
      sicherheit: "Bei Knieschmerzen nur so weit beugen, wie es angenehm ist. Bei Gleichgewichtsproblemen immer festhalten."
    }
  },
  {
    id: "quadrizeps_dehnen_seitlage",
    name: "Vorderen Oberschenkel dehnen in Seitlage",
    auch: ["Side-Lying Quad Stretch", "Lying Quad Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Quadrizepsdehnung im Liegen auf der Seite. Ohne Gleichgewichtsanforderung kannst du dich voll auf das Becken konzentrieren und die Dehnung entspannt länger halten.",
      ausfuehrung: [
        "Leg dich auf die linke Seite, den Kopf auf dem linken Arm oder einem Kissen.",
        "Zieh das untere, linke Knie zur Brust und halte es dort, so wird das Becken stabilisiert und der Rücken geschützt.",
        "Beuge das obere, rechte Knie und greif mit der rechten Hand den Fußrist oder Knöchel.",
        "Zieh die Ferse sanft zum Gesäß und führe das rechte Knie leicht nach hinten, bis der Oberschenkel hinter der Körperlinie ist.",
        "Spann das rechte Gesäß an und schiebe die Hüfte minimal nach vorn, die Dehnung zieht dann vom Knie bis in die Leiste.",
        "Halte die Position, löse sie langsam und dreh dich auf die andere Seite."
      ],
      atmung: "Gleichmäßig in den Bauch atmen und mit dem Ausatmen tiefer in die Dehnung sinken.",
      fehler: [
        "Unteres Bein ausgestreckt: Dann rutscht das Becken ins Hohlkreuz, Knie zur Brust ziehen.",
        "Oberes Knie wandert nach vorn: Oberschenkel in Linie mit dem Körper oder leicht dahinter halten.",
        "Becken kippt nach hinten weg: Hüften übereinander stapeln."
      ],
      vorteile: [
        "Entspannte Dehnung ohne Gleichgewichtsanforderung.",
        "Gut steuerbar, deshalb auch für Einsteiger und ältere Menschen geeignet.",
        "Lässt sich gut mit Atmung und längerer Haltezeit kombinieren."
      ],
      tipps: [
        "Mit einem Band um den Fuß klappt es auch bei wenig Beweglichkeit.",
        "Am Abend auf der Matte oder sogar im Bett gut umsetzbar."
      ],
      varianten: "Leichter: Band oder Handtuch um den Knöchel. Schwerer: Oberschenkel weiter nach hinten führen oder Anspannen und Entspannen einbauen.",
      sicherheit: "Bei Knieschmerzen das Knie weniger stark beugen."
    }
  },
  {
    id: "quadrizeps_dehnen_bauchlage_band",
    name: "Vorderen Oberschenkel dehnen in Bauchlage mit Band",
    auch: ["Prone Quad Stretch with Strap", "Prone Banded Quad Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Quadrizepsdehnung auf dem Bauch, bei der ein Band oder Gurt um den Fuß die Ferse zum Gesäß zieht. Das Becken liegt flach auf dem Boden, deshalb kann es kaum ausweichen.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Stirn auf dem linken Unterarm.",
        "Leg eine Bandschlaufe oder einen Gurt um den rechten Fußrist und führ die Enden über die rechte Schulter nach vorn.",
        "Beuge das rechte Knie und zieh mit dem Band die Ferse langsam Richtung Gesäß.",
        "Drück die Hüfte leicht in den Boden und spann das Gesäß an, damit kein Hohlkreuz entsteht.",
        "Halte die Dehnung vorn am Oberschenkel ruhig, das Knie bleibt am Boden und zeigt gerade nach hinten.",
        "Lass das Band langsam nach, streck das Bein aus und wechsle die Seite."
      ],
      atmung: "Ruhig atmen, beim Ausatmen das Band einen Hauch mehr anziehen.",
      fehler: [
        "Hüfte hebt vom Boden ab: Becken bewusst in die Matte drücken.",
        "Knie dreht nach außen: Unterschenkel gerade nach oben führen.",
        "Zu starker Zug: Die Dehnung soll deutlich, aber nicht stechend sein."
      ],
      vorteile: [
        "Becken ist durch die Bauchlage fixiert, die Dehnung bleibt gezielt.",
        "Auch bei wenig Beweglichkeit gut umsetzbar.",
        "Lässt sich leicht mit Anspannen und Entspannen kombinieren."
      ],
      tipps: [
        "Für Anspannen und Entspannen drückst du den Fuß 5 Sekunden ins Band, lässt los und ziehst die Ferse etwas näher.",
        "Ein kleines Kissen unter dem Knie entlastet die Kniescheibe."
      ],
      varianten: "Leichter: Handtuch statt Band, weniger Zug. Schwerer: ein Polster unter das Knie legen, damit die Hüfte zusätzlich gestreckt wird.",
      sicherheit: "Bei Knieschmerzen oder nach Knieoperationen nur im schmerzfreien Bereich arbeiten."
    }
  },
  {
    id: "quadrizeps_dehnen_fersensitz",
    name: "Fersensitz mit Rücklage",
    auch: ["Reclined Hero Pose", "Kneeling Quad Stretch Lean Back", "Supta Virasana"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger", "schienbein"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Beidseitige Dehnung des vorderen Oberschenkels: Aus dem Fersensitz lehnst du dich mit dem Oberkörper nach hinten auf die Hände oder Unterarme. Dehnt beide Oberschenkel und das Schienbein zugleich.",
      ausfuehrung: [
        "Knie dich auf die Matte und setz dich mit dem Gesäß auf die Fersen, die Fußrücken liegen flach am Boden.",
        "Stütz die Hände hinter dir auf den Boden, die Finger zeigen nach hinten oder zur Seite.",
        "Lehn den Oberkörper langsam nach hinten, bis du vorn an den Oberschenkeln eine deutliche Dehnung spürst.",
        "Spann leicht den Bauch an und schiebe die Hüfte etwas nach oben, damit du nicht ins Hohlkreuz fällst.",
        "Wenn es angenehm ist, geh weiter auf die Unterarme. Die Knie bleiben am Boden und etwa hüftbreit.",
        "Komm langsam über die Hände nach oben zurück und streck die Beine aus."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen eventuell ein Stück tiefer sinken.",
      fehler: [
        "Knie heben vom Boden ab: weniger weit zurücklehnen.",
        "Starkes Hohlkreuz: Bauch anspannen und Hüfte leicht anheben.",
        "Knie spreizen weit auseinander: hüftbreit halten.",
        "Zu schnell nach hinten: Die Kniegelenke stehen hier unter starker Beugung, langsam herantasten."
      ],
      vorteile: [
        "Dehnt beide vorderen Oberschenkel gleichzeitig.",
        "Dehnt zusätzlich Schienbeinmuskel und Fußrücken.",
        "Benötigt nur eine Matte."
      ],
      tipps: [
        "Ein Kissen zwischen Gesäß und Fersen macht die Position für die Knie angenehmer.",
        "Wenn das Zurücklehnen zu intensiv ist, bleib aufrecht im Fersensitz."
      ],
      varianten: "Leichter: aufrecht im Fersensitz oder mit Kissen unter dem Gesäß. Schwerer: bis auf den Rücken ablegen (nur bei sehr guter Beweglichkeit).",
      sicherheit: "Nicht geeignet bei Knieschmerzen, Meniskusproblemen oder nach Knieoperationen. Bei Druck im Knie sofort lösen."
    }
  },
  {
    id: "quadrizeps_dehnen_gehen",
    name: "Oberschenkeldehnung im Gehen",
    auch: ["Walking Quad Stretch", "Walking Quad Pull"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Dynamische Aufwärmübung: Bei jedem Schritt ziehst du kurz eine Ferse zum Gesäß und gehst dabei auf die Zehenspitzen des Standbeins. Verbindet Dehnung, Gleichgewicht und Fußarbeit.",
      ausfuehrung: [
        "Stell dich aufrecht hin und mach einen kleinen Schritt nach vorn mit dem linken Bein.",
        "Beuge das rechte Knie und greif mit der rechten Hand den Fußrist.",
        "Zieh die Ferse für ein bis zwei Sekunden Richtung Gesäß und spann dabei das rechte Gesäß an.",
        "Hebe gleichzeitig den linken Arm nach oben und geh auf dem linken Fuß auf die Zehenspitzen.",
        "Lass den Fuß los, setz ihn nach vorn auf und wiederhole auf der anderen Seite.",
        "Geh so eine Strecke von etwa 10 bis 20 Metern oder eine feste Anzahl Schritte."
      ],
      atmung: "Locker und gleichmäßig weiteratmen.",
      fehler: [
        "Oberkörper kippt nach vorn: aufrecht bleiben und den Arm aktiv nach oben strecken.",
        "Knie zeigt nach außen: Knie neben dem Standbein halten.",
        "Hektisch durchgehen: Jede Wiederholung kurz halten."
      ],
      vorteile: [
        "Dynamisches Aufwärmen für Oberschenkel und Hüftbeuger.",
        "Trainiert Gleichgewicht und Fußstabilität.",
        "Typischer Bestandteil des Aufwärmens im Lauf- und Mannschaftssport."
      ],
      tipps: [
        "Ideal in einer Aufwärmreihe mit Knie umarmen im Gehen und Beinrückseite im Gehen.",
        "Wenn das Gleichgewicht wackelt, die Zehenspitzen weglassen."
      ],
      varianten: "Leichter: auf der Stelle mit Halt an der Wand. Schwerer: beim Halten kurz leicht nach vorn lehnen und das Becken stärker einrollen.",
      sicherheit: "Bei Gleichgewichtsproblemen auf der Stelle an einer Wand ausführen."
    }
  },
  {
    id: "quadrizeps_rolle",
    name: "Vorderen Oberschenkel ausrollen mit der Faszienrolle",
    auch: ["Quad Foam Rolling", "Foam Roll Quads"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Selbstmassage des vorderen Oberschenkels mit der Faszienrolle in Bauchlage. Kann das Spannungsgefühl verringern und den Muskel vor dem Training oder Dehnen geschmeidiger wirken lassen.",
      ausfuehrung: [
        "Leg dich auf den Bauch und platziere die Rolle quer unter den Oberschenkeln, knapp oberhalb der Knie.",
        "Stütz dich auf die Unterarme, die Ellbogen unter den Schultern, Bauch leicht angespannt.",
        "Schieb dich mit den Armen langsam vor und zurück, sodass die Rolle zwischen Knie und Hüfte wandert.",
        "Bleib an empfindlichen Stellen 20 bis 30 Sekunden liegen und atme ruhig.",
        "Dreh die Beine leicht nach innen oder außen, um auch die Seiten des Oberschenkels zu erreichen.",
        "Für mehr Druck ein Bein anheben und nur ein Bein rollen."
      ],
      atmung: "Langsam und gleichmäßig atmen, an empfindlichen Stellen bewusst lang ausatmen.",
      fehler: [
        "Zu schnell rollen: etwa 2 bis 3 Zentimeter pro Sekunde reichen.",
        "Über das Knie oder den Hüftknochen rollen: nur über Muskelgewebe.",
        "Hohlkreuz und hängende Hüfte: Bauch und Gesäß leicht anspannen."
      ],
      vorteile: [
        "Kann das Spannungsgefühl im Oberschenkel verringern.",
        "Bereitet den Muskel auf Dehnungen und Kniebeugen vor.",
        "Kann nach intensivem Beintraining angenehm sein."
      ],
      tipps: [
        "Ein bis zwei Minuten pro Bein sind ausreichend.",
        "Danach direkt eine Dehnung des vorderen Oberschenkels anschließen."
      ],
      varianten: "Leichter: beide Beine gleichzeitig, weichere Rolle. Schwerer: einbeinig, Knie dabei langsam beugen und strecken.",
      sicherheit: "Nicht auf frischen Verletzungen, Blutergüssen oder bei Krampfadern rollen. Bei Schulterbeschwerden auf den Unterarmen nur kurz stützen."
    }
  },
  // ---------- Gesäß, Piriformis, seitliche Hüfte ----------
  {
    id: "taube",
    name: "Taube (Gesäß dehnen am Boden)",
    auch: ["Pigeon Stretch", "Pigeon Pose", "Eka Pada Rajakapotasana Vorstufe"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    hinweis: "Becken gerade halten, nicht zur Seite des vorderen Beins kippen.",
    info: {
      kurz: "Bekannte Hüftdehnung aus dem Yoga: Das vordere Bein liegt gebeugt quer vor dir, das hintere Bein ist lang nach hinten gestreckt. Dehnt das Gesäß und die Außenrotatoren der vorderen Hüfte und zugleich den Hüftbeuger der hinteren Seite.",
      ausfuehrung: [
        "Starte im Vierfüßlerstand und schiebe das rechte Knie nach vorn hinter das rechte Handgelenk.",
        "Leg den rechten Unterschenkel schräg vor dir ab, der rechte Fuß liegt etwa vor der linken Hüfte. Anfänger lassen den Fuß näher am Körper.",
        "Streck das linke Bein lang nach hinten aus, der Fußrücken liegt auf dem Boden.",
        "Richte das Becken gerade aus, beide Hüftknochen zeigen nach vorn. Leg bei Bedarf ein Kissen unter die rechte Gesäßhälfte.",
        "Bleib aufrecht auf den Händen oder wandere mit den Händen nach vorn und senke den Oberkörper über das vordere Bein, bis du die Dehnung tief im rechten Gesäß spürst.",
        "Halte ruhig, komm über die Hände zurück in den Vierfüßlerstand und wechsle die Seite."
      ],
      atmung: "Lang und ruhig ausatmen und dabei den Oberkörper Stück für Stück weiter nach vorn sinken lassen.",
      fehler: [
        "Becken kippt zur Seite des vorderen Beins: Kissen unter das Gesäß legen und die hintere Hüfte zum Boden bringen.",
        "Fuß zu weit nach vorn gezogen bei steifer Hüfte: Das belastet das Knie. Fuß näher zur Leiste nehmen.",
        "Hinteres Bein dreht nach außen: Fußrücken und Knie zeigen nach unten.",
        "In den Schmerz hinein sinken: Die Dehnung gehört ins Gesäß, nicht ins Knie."
      ],
      vorteile: [
        "Dehnt Gesäß und tiefe Hüftaußenrotatoren intensiv.",
        "Dehnt gleichzeitig den Hüftbeuger des hinteren Beins.",
        "Kann bei langem Sitzen und nach Laufeinheiten als angenehm empfunden werden.",
        "Verbessert die Außenrotation und Beugung der Hüfte für tiefe Kniebeugen."
      ],
      tipps: [
        "Ein Block oder Kissen unter der Hüfte der vorderen Seite macht die Taube für fast jeden zugänglich.",
        "Spür nach, ob die Dehnung eher im Gesäß oder seitlich ist, und verändere den Winkel des Unterschenkels leicht.",
        "Wenn das Knie zwickt, wähle die Figur-4-Dehnung in Rückenlage oder die Taube auf der Bank."
      ],
      varianten: "Leichter: Taube auf der Bank oder Figur-4-Dehnung in Rückenlage. Schwerer: Unterschenkel paralleler zum vorderen Mattenrand, Oberkörper ganz ablegen.",
      sicherheit: "Bei Knieschmerzen, Meniskusproblemen oder künstlichem Hüftgelenk nur nach Rücksprache und mit vorsichtiger Variante. Bei Leistenschmerzen auslassen."
    }
  },
  {
    id: "taube_bank",
    name: "Taube auf der Bank (Gesäß dehnen erhöht)",
    auch: ["Bench Pigeon Stretch", "Elevated Pigeon", "Table Pigeon"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["bank"], ["box"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Taube im Stehen: Das vordere Bein liegt gebeugt quer auf einer Bank oder einem Tisch, du stehst auf dem anderen Bein. Knie- und hüftschonender als die Bodenvariante und gut dosierbar.",
      ausfuehrung: [
        "Stell dich vor eine Hantelbank, einen Tisch oder eine stabile Box auf etwa Hüfthöhe.",
        "Leg das rechte Bein gebeugt auf die Fläche, sodass der Unterschenkel quer vor dir liegt und das Knie nach rechts zeigt.",
        "Das linke Bein steht etwas nach hinten versetzt, das Knie leicht gebeugt.",
        "Richte das Becken gerade nach vorn aus und mach den Rücken lang.",
        "Neige den Oberkörper mit geradem Rücken aus der Hüfte nach vorn über den Unterschenkel, bis du die Dehnung im rechten Gesäß spürst.",
        "Halte die Position, richte dich langsam auf und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und beim Ausatmen ein kleines Stück tiefer aus der Hüfte nach vorn gehen.",
      fehler: [
        "Runder Rücken: aus der Hüfte beugen, Brustbein nach vorn schieben.",
        "Fläche zu hoch: Dann kippt das Becken, eine Höhe knapp unter der Hüfte ist ideal.",
        "Knie auf der Bank hängt in der Luft: ein Kissen unterlegen, damit das Knie gestützt ist."
      ],
      vorteile: [
        "Dehnt Gesäß und tiefe Außenrotatoren ohne Belastung des Knies am Boden.",
        "Intensität über die Vorneigung leicht steuerbar.",
        "Im Studio, Büro oder auf dem Golfplatz an einer Bank gut machbar."
      ],
      tipps: [
        "Für eine gezieltere Dehnung den Oberkörper leicht in Richtung des Knies oder des Fußes neigen.",
        "Gut nach Kniebeugen oder Kreuzheben, weil du die Position direkt an der Bank einnehmen kannst."
      ],
      varianten: "Leichter: kaum Vorneigung, Unterschenkel schräg. Schwerer: Unterschenkel quer und paralleler zur Bankkante, mehr Vorneigung.",
      sicherheit: "Bei Knieschmerzen den Fuß weiter Richtung Körper nehmen. Bei Hüftprothese vorher ärztlich abklären."
    }
  },
  {
    id: "figur4_rueckenlage",
    name: "Figur-4-Dehnung in Rückenlage",
    auch: ["Supine Figure 4 Stretch", "Supine Pigeon", "Reclined Figure Four"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Sanfte Gesäßdehnung in Rückenlage: Ein Knöchel liegt auf dem anderen Knie, du ziehst das untere Bein zur Brust. Die gelenkschonendste Art, das Gesäß und die tiefen Hüftrotatoren zu dehnen.",
      ausfuehrung: [
        "Leg dich auf den Rücken, beide Füße stehen hüftbreit, die Knie sind gebeugt.",
        "Leg den rechten Außenknöchel knapp oberhalb des linken Knies auf den Oberschenkel, das rechte Knie zeigt nach außen.",
        "Heb den linken Fuß vom Boden ab und greif mit beiden Händen hinter den linken Oberschenkel, die rechte Hand durch die Lücke zwischen den Beinen.",
        "Zieh den linken Oberschenkel langsam zur Brust, bis du die Dehnung im rechten Gesäß spürst.",
        "Drück das rechte Knie leicht nach außen, Kopf und Schultern bleiben entspannt am Boden.",
        "Halte die Position, stell beide Füße wieder ab und wechsle die Seite."
      ],
      atmung: "Tief in den Bauch atmen und beim Ausatmen das Bein etwas näher zur Brust ziehen.",
      fehler: [
        "Kopf hebt vom Boden ab: Kissen unter den Kopf oder ein Band um den Oberschenkel nehmen.",
        "Gesäß hebt vom Boden ab: Das Steißbein bleibt in Bodennähe.",
        "Fuß nicht aktiv: Fuß der oberen Seite leicht anziehen, das schützt das Knie."
      ],
      vorteile: [
        "Dehnt Gesäß und tiefe Außenrotatoren schonend.",
        "Keine Belastung für Knie oder Handgelenke.",
        "Gut für Einsteiger, ältere Menschen und als Abendroutine."
      ],
      tipps: [
        "Wenn die Dehnung schon im Liegen mit dem Fuß am Boden reicht, bleib dort.",
        "Ein Band um den hinteren Oberschenkel hilft, wenn die Hände nicht hinkommen."
      ],
      varianten: "Leichter: unterer Fuß bleibt am Boden. Schwerer: oberes Knie leicht mit dem Ellbogen nach außen drücken oder Anspannen und Entspannen.",
      sicherheit: "Bei Hüftprothese nach Rücksprache ausführen. Bei Knieschmerzen den Fuß aktiv anziehen."
    }
  },
  {
    id: "figur4_sitzend",
    name: "Figur-4-Dehnung im Sitzen auf dem Stuhl",
    auch: ["Seated Figure 4 Stretch", "Chair Pigeon", "Seated Piriformis Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel", "ruecken_unten"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    hinweis: "Ohne Gerät auf einem Stuhl.",
    info: {
      kurz: "Gesäßdehnung auf einem Stuhl oder einer Bank: Ein Knöchel liegt auf dem anderen Knie, du lehnst dich mit langem Rücken nach vorn. Perfekt für Büro, Reise oder zwischen zwei Golflöchern.",
      ausfuehrung: [
        "Setz dich aufrecht auf die vordere Hälfte eines stabilen Stuhls, beide Füße flach am Boden.",
        "Leg den rechten Außenknöchel auf den linken Oberschenkel knapp oberhalb des Knies.",
        "Lass das rechte Knie entspannt nach außen sinken, der rechte Fuß bleibt leicht angezogen.",
        "Mach den Rücken lang und neige den Oberkörper aus der Hüfte nach vorn, bis du die Dehnung im rechten Gesäß spürst.",
        "Halte die Position, die Hände ruhen auf dem Unterschenkel oder dem Knie.",
        "Richte dich langsam auf und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und mit dem Ausatmen ein wenig weiter nach vorn neigen.",
      fehler: [
        "Runder Rücken: Brustbein nach vorn, die Bewegung kommt aus der Hüfte.",
        "Knie mit Kraft nach unten drücken: lieber sanft sinken lassen.",
        "Zu weit hinten auf dem Stuhl sitzen: auf die Vorderkante rutschen."
      ],
      vorteile: [
        "Dehnt Gesäß und tiefe Hüftrotatoren im Sitzen.",
        "Unauffällig im Alltag umsetzbar.",
        "Gut steuerbar und gelenkschonend."
      ],
      tipps: [
        "Bei langen Sitzphasen alle ein bis zwei Stunden je Seite 30 Sekunden.",
        "Leicht zur Seite des Knies oder des Fußes neigen, um verschiedene Bereiche zu treffen."
      ],
      varianten: "Leichter: aufrecht bleiben ohne Vorneigung. Schwerer: weiter vorneigen und den Unterschenkel paralleler zum Boden bringen.",
      sicherheit: "Bei Hüftprothese vorher abklären. Bei Knieschmerzen den Knöchel weiter oben auf den Oberschenkel legen."
    }
  },
  {
    id: "figur4_wand",
    name: "Figur-4-Dehnung an der Wand",
    auch: ["Wall Figure 4 Stretch", "Wall Pigeon", "Legs on Wall Figure Four"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Figur-4-Dehnung in Rückenlage, bei der der Fuß des Standbeins an der Wand steht. Die Wand hält das Bein, du kannst ganz loslassen und die Intensität über den Abstand zur Wand einstellen.",
      ausfuehrung: [
        "Leg dich auf den Rücken, das Gesäß etwa eine Oberschenkellänge von der Wand entfernt.",
        "Stell beide Füße an die Wand, sodass Hüfte und Knie etwa im rechten Winkel gebeugt sind.",
        "Leg den rechten Außenknöchel auf das linke Knie, das rechte Knie zeigt nach außen.",
        "Entspann Arme, Schultern und Kopf am Boden, der linke Fuß bleibt an der Wand.",
        "Rutsch mit dem Gesäß ein Stück näher an die Wand, um die Dehnung im rechten Gesäß zu verstärken.",
        "Halte die Position ruhig, löse das Bein und wechsle die Seite."
      ],
      atmung: "Tief und ruhig atmen und den Körper mit jedem Ausatmen schwerer werden lassen.",
      fehler: [
        "Zu nah an der Wand: Dann hebt das Becken ab. Abstand vergrößern.",
        "Oberes Knie zieht nach innen: entspannt nach außen fallen lassen.",
        "Schultern verspannt: Arme seitlich locker ablegen."
      ],
      vorteile: [
        "Völlig passive Gesäßdehnung, gut für lange Haltezeiten.",
        "Keine Haltearbeit der Arme nötig.",
        "Gut als entspannter Abschluss einer Einheit."
      ],
      tipps: [
        "Zwei Minuten je Seite am Abend sind eine angenehme Routine.",
        "Mit sanftem Druck der Hand auf das obere Knie kannst du die Dehnung leicht verstärken."
      ],
      varianten: "Leichter: weiter weg von der Wand. Schwerer: näher an die Wand oder Anspannen und Entspannen mit Druck des Knies gegen die Hand.",
      sicherheit: "Bei Hüftprothese vorher abklären."
    }
  },
  {
    id: "figur4_stehend",
    name: "Figur-4-Dehnung im Stehen",
    auch: ["Standing Figure 4 Stretch", "Standing Pigeon", "Figure 4 Squat"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel", "quadrizeps"],
    geraete: [["wand"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Gesäßdehnung auf einem Bein: Du legst den Knöchel auf das andere Knie und setzt dich in eine kleine Kniebeuge. Verbindet Dehnung mit Gleichgewicht und Kraft im Standbein.",
      ausfuehrung: [
        "Stell dich aufrecht hin, bei Bedarf mit einer Hand an einer Wand.",
        "Heb das rechte Bein an und leg den rechten Außenknöchel knapp oberhalb des linken Knies ab.",
        "Zieh den rechten Fuß aktiv an und lass das rechte Knie nach außen sinken.",
        "Schieb das Gesäß nach hinten und beuge das linke Knie, als würdest du dich auf einen Stuhl setzen.",
        "Neige den Oberkörper mit langem Rücken nach vorn, bis du die Dehnung im rechten Gesäß spürst.",
        "Halte die Position, richte dich auf und wechsle die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen, beim Ausatmen etwas tiefer sitzen.",
      fehler: [
        "Runder Rücken: Brust nach vorn, aus der Hüfte beugen.",
        "Standknie fällt nach innen: Knie über dem mittleren Zeh halten.",
        "Gewicht auf den Zehen: Gewicht auf die ganze Fußsohle, eher zur Ferse."
      ],
      vorteile: [
        "Dehnt Gesäß und Außenrotatoren ohne Bodenkontakt.",
        "Trainiert gleichzeitig Gleichgewicht und Kraft im Standbein.",
        "Gut als Teil des Aufwärmens vor dem Laufen oder Golfen."
      ],
      tipps: [
        "Mit einer Hand an der Wand kannst du dich ganz auf die Dehnung konzentrieren.",
        "Dynamisch nutzbar: langsam in die Beuge hinein und heraus."
      ],
      varianten: "Leichter: an der Wand festhalten, wenig Kniebeugung. Schwerer: freihändig und tiefer sitzen.",
      sicherheit: "Bei Gleichgewichtsproblemen immer festhalten. Bei Knieschmerzen im Standbein nur leicht beugen."
    }
  },
  {
    id: "knie_zur_gegenschulter",
    name: "Knie zur Gegenschulter ziehen",
    auch: ["Knee to Opposite Shoulder Stretch", "Supine Piriformis Stretch", "Piriformis-Dehnung in Rückenlage"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Dehnung für das Gesäß und den Piriformis in Rückenlage: Du ziehst ein Knie diagonal zur gegenüberliegenden Schulter. Sie zielt durch die Diagonale etwas mehr auf die tiefen Rotatoren als die Figur-4-Dehnung.",
      ausfuehrung: [
        "Leg dich auf den Rücken, beide Beine lang ausgestreckt.",
        "Zieh das rechte Knie zur Brust und greif mit der linken Hand außen an das Knie, die rechte Hand hält den Knöchel.",
        "Zieh das Knie langsam diagonal Richtung linke Schulter.",
        "Halte das Becken möglichst gerade am Boden, das linke Bein bleibt lang liegen.",
        "Halte die Position, sobald du eine Dehnung tief im rechten Gesäß spürst.",
        "Lass das Bein langsam zurück und wechsle die Seite."
      ],
      atmung: "Ruhig atmen und beim Ausatmen das Knie ein wenig weiter zur Schulter führen.",
      fehler: [
        "Becken dreht sich mit: Die rechte Gesäßhälfte bleibt in Bodennähe.",
        "Zu viel Zug am Knöchel: Das kann das Knie belasten, der Hauptzug kommt am Knie.",
        "Schultern heben ab: Oberkörper entspannt liegen lassen."
      ],
      vorteile: [
        "Dehnt den Piriformis und die tiefen Rotatoren gezielt.",
        "Sehr gelenkschonend und für fast jeden machbar.",
        "Gut als Teil einer Abendroutine."
      ],
      tipps: [
        "Wenn es in der Leiste drückt, führe das Knie etwas weniger zur Brust und mehr quer.",
        "Kombiniere sie mit der Figur-4-Dehnung, um verschiedene Fasern zu erreichen."
      ],
      varianten: "Leichter: anderes Bein angewinkelt aufstellen. Schwerer: Anspannen und Entspannen mit Druck des Knies gegen die Hand.",
      sicherheit: "Bei Hüftprothese diese Position nur nach ärztlicher Freigabe ausführen. Bei Ausstrahlung ins Bein abbrechen und abklären lassen."
    }
  },
  {
    id: "piriformis_dehnen_sitzend",
    name: "Piriformis dehnen im Langsitz mit Beinüberschlag",
    auch: ["Seated Piriformis Stretch", "Seated Cross-Over Glute Stretch", "Seated Knee Hug Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel", "schraege_bauch"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Gesäßdehnung im Sitzen auf dem Boden: Ein Bein wird über das andere gestellt und das Knie mit dem Arm zur gegenüberliegenden Schulter gezogen. Dehnt das Gesäß und bringt eine leichte Drehung für den Rücken mit.",
      ausfuehrung: [
        "Setz dich aufrecht auf den Boden, beide Beine lang vor dir.",
        "Stell den rechten Fuß außen neben dem linken Knie auf.",
        "Umarme das rechte Knie mit dem linken Arm und zieh es Richtung linke Schulter.",
        "Stütz die rechte Hand hinter dir auf und richte die Wirbelsäule lang auf.",
        "Zieh das Knie weiter zur Brust und dreh den Oberkörper leicht nach rechts, bis du die Dehnung im rechten Gesäß spürst.",
        "Halte die Position, löse sie langsam und wechsle die Seite."
      ],
      atmung: "Mit dem Einatmen aufrichten, mit dem Ausatmen das Knie ein Stück näher heranziehen.",
      fehler: [
        "Rundrücken: über die hintere Hand aktiv aufrichten.",
        "Gesäß hebt ab: Beide Sitzbeine bleiben am Boden.",
        "Zu viel Rotation: Die Dehnung soll im Gesäß sein, nicht nur im Rücken."
      ],
      vorteile: [
        "Dehnt Gesäß und Piriformis ohne Kniebelastung.",
        "Bringt zusätzlich eine sanfte Rotation der Wirbelsäule.",
        "Gut nach dem Laufen oder langen Autofahrten."
      ],
      tipps: [
        "Bei steifem Rücken auf ein Kissen setzen, dann fällt das Aufrichten leichter.",
        "Das untere Bein darfst du auch angewinkelt ablegen, das ist für viele angenehmer."
      ],
      varianten: "Leichter: auf einem Kissen sitzen. Schwerer: unteres Bein anwinkeln und Ferse neben das Gesäß legen.",
      sicherheit: "Bei Bandscheibenproblemen die Drehung klein halten. Bei Hüftprothese vorher abklären."
    }
  },
  // ---------- 90/90 und Hüftrotation ----------
  {
    id: "huefte_9090",
    name: "90/90-Dehnung im Sitzen",
    auch: ["90/90 Hip Stretch", "90-90 Stretch", "Hüftrotation 90/90"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel", "adduktoren", "hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    golf: 2,
    sport: ["golf"],
    einseitig: true,
    hinweis: "Beide Knie im rechten Winkel, aufrecht sitzen.",
    info: {
      kurz: "Sitzposition, in der ein Bein vorn in Außenrotation und das andere seitlich in Innenrotation liegt, beide Knie im rechten Winkel. Dehnt die Außenrotatoren der vorderen und die Innenrotation der hinteren Hüfte in einer Position.",
      ausfuehrung: [
        "Setz dich auf den Boden. Das rechte Bein liegt vor dir, Oberschenkel nach vorn, Knie etwa 90 Grad gebeugt, Unterschenkel quer.",
        "Das linke Bein liegt seitlich neben dir, Oberschenkel zur Seite, Knie ebenfalls etwa 90 Grad gebeugt, Fuß zeigt nach hinten.",
        "Stütz dich anfangs mit den Händen seitlich ab und richte den Oberkörper aufrecht über dem vorderen Schienbein aus.",
        "Neige dich mit langem Rücken aus der Hüfte nach vorn über das rechte Schienbein, bis du die Dehnung im rechten Gesäß spürst. Halte.",
        "Richte dich auf, dreh den Oberkörper zum hinteren Bein und neige dich leicht in dessen Richtung, um die Innenrotation der linken Hüfte zu spüren. Halte.",
        "Löse die Position und wechsle die Seite, sodass das linke Bein vorn liegt."
      ],
      atmung: "Ruhig weiteratmen und bei jedem Ausatmen ein wenig weiter aus der Hüfte nach vorn gehen.",
      fehler: [
        "Runder Rücken beim Vorneigen: Brustbein Richtung Schienbein, nicht Kopf zum Knie.",
        "Gesäß der hinteren Seite hebt stark ab: etwas abstützen oder Kissen unter das Gesäß legen.",
        "Winkel deutlich unter 90 Grad: belastet die Knie, Abstand der Füße anpassen.",
        "Mit Schwung in die Position drücken: langsam und kontrolliert."
      ],
      vorteile: [
        "Dehnt in einer Position Außen- und Innenrotation beider Hüften.",
        "Zeigt Unterschiede zwischen linker und rechter Hüfte deutlich.",
        "Verbessert die Hüftrotation für Golf, Tennis, Fußball und Kampfsport.",
        "Grundlage für 90/90-Wechsel und Shin-Box-Übungen."
      ],
      tipps: [
        "Wenn du nicht aufrecht sitzen kannst, setz dich auf ein Kissen oder stütz dich hinter dem Körper ab.",
        "Arbeite dich über mehrere Wochen in die aufrechte Position, nicht in einer Einheit."
      ],
      varianten: "Leichter: Gesäß auf ein Kissen, Hände hinter dem Körper abstützen. Schwerer: freihändig aufrecht sitzen, hinteres Knie kurz vom Boden abheben.",
      sicherheit: "Bei Knieschmerzen die Winkel öffnen (Füße weiter weg). Bei Hüftprothese oder Hüftimpingement nur nach Rücksprache.",
      golf: "Gute Hüftrotation ist im Golf zentral: Die hintere Hüfte braucht Innenrotation im Rückschwung, die vordere Hüfte im Durchschwung. Fehlt sie, kompensiert oft der untere Rücken. Die 90/90-Position trainiert genau diese Rotation."
    }
  },
  {
    id: "huefte_9090_wechsel",
    name: "90/90-Wechsel",
    auch: ["90/90 Switch", "90/90 Hip Switch", "Windshield Wiper 90/90"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "hueftbeuger"],
    sekundaer: ["gesaess_mittel", "adduktoren", "bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    golf: 2,
    sport: ["golf"],
    schwerer: "huefte_9090_wechsel_ohne_haende",
    hinweis: "Langsam von Seite zu Seite, Füße bleiben am Boden.",
    info: {
      kurz: "Dynamischer Wechsel zwischen der linken und rechten 90/90-Position, bei dem beide Knie wie Scheibenwischer von einer Seite zur anderen kippen. Mobilisiert die Innen- und Außenrotation beider Hüften im Wechsel.",
      ausfuehrung: [
        "Setz dich in die 90/90-Position, rechtes Bein vorn, linkes Bein seitlich, und stütz die Hände hinter dir auf den Boden.",
        "Die Füße stehen etwas mehr als hüftbreit auseinander, die Fersen bleiben während der ganzen Übung am Boden.",
        "Heb beide Knie langsam an und dreh sie zur Mitte, bis beide Knie zur Decke zeigen.",
        "Lass beide Knie weiter zur linken Seite sinken, bis du in der 90/90-Position mit dem linken Bein vorn bist.",
        "Richte dich in der neuen Position kurz auf und spüre die Rotation in beiden Hüften.",
        "Wechsle so ruhig und kontrolliert hin und her."
      ],
      atmung: "Beim Drehen der Knie ausatmen, in der Endposition einatmen.",
      fehler: [
        "Füße rutschen mit: Fersen bleiben an derselben Stelle am Boden.",
        "Knie fallen unkontrolliert zur Seite: langsam und aktiv absenken.",
        "Oberkörper sinkt zusammen: Brust aufrecht, über die Hände stützen."
      ],
      vorteile: [
        "Mobilisiert Innen- und Außenrotation beider Hüften im Wechsel.",
        "Wärmt die Hüfte vor Kniebeugen, Laufen und Rotationssport gut auf.",
        "Leicht zu steigern bis zur freihändigen Version."
      ],
      tipps: [
        "Je breiter die Füße, desto leichter. Starte breit und rück die Füße mit der Zeit näher.",
        "Sechs bis zehn Wechsel reichen im Aufwärmen."
      ],
      varianten: "Leichter: Füße weiter auseinander, Hände weit hinten. Schwerer: freihändig mit aufrechtem Oberkörper.",
      sicherheit: "Bei Knieschmerzen die Füße weiter auseinander stellen. Bei Hüftprothese vorher abklären.",
      golf: "Der Wechsel trainiert die Innenrotation der vorderen Hüfte, die du im Durchschwung brauchst, und die der hinteren Hüfte für den Rückschwung. Mehr Rotation in der Hüfte entlastet den unteren Rücken."
    }
  },
  {
    id: "huefte_9090_wechsel_ohne_haende",
    name: "90/90-Wechsel ohne Hände",
    auch: ["Hands-Free 90/90 Switch", "No Hands 90/90 Transition"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "gesaess"],
    sekundaer: ["bauch", "gesaess_mittel", "adduktoren"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    golf: 2,
    sport: ["golf"],
    info: {
      kurz: "Anspruchsvollere Version des 90/90-Wechsels: Der Oberkörper bleibt aufrecht, ohne dass die Hände den Boden berühren. Fordert aktive Kontrolle der Hüftrotatoren und der Rumpfmuskulatur.",
      ausfuehrung: [
        "Setz dich aufrecht in die 90/90-Position, rechtes Bein vorn, die Arme vor der Brust verschränkt oder nach vorn gestreckt.",
        "Spann leicht den Bauch an und mach den Rücken lang.",
        "Heb beide Knie langsam an und dreh sie zur Mitte, ohne dass der Oberkörper nach hinten kippt.",
        "Senke beide Knie kontrolliert zur linken Seite in die neue 90/90-Position.",
        "Richte dich am Ende kurz auf, Brustbein nach vorn.",
        "Wechsle langsam von Seite zu Seite, ohne mit den Händen zu stützen."
      ],
      atmung: "Beim Wechseln ausatmen, in der Endposition ruhig einatmen.",
      fehler: [
        "Oberkörper fällt nach hinten: Füße weiter auseinander stellen oder Arme nach vorn strecken als Gegengewicht.",
        "Schwung statt Kontrolle: langsam und gleichmäßig bewegen.",
        "Knie knallen auf den Boden: aktiv absenken."
      ],
      vorteile: [
        "Kräftigt die Hüftbeuger und Rotatoren in großen Bewegungsumfängen.",
        "Fordert die Rumpfstabilität bei Hüftbewegung.",
        "Überträgt Beweglichkeit in aktive Kontrolle."
      ],
      tipps: [
        "Arme nach vorn strecken erleichtert das Gleichgewicht deutlich.",
        "Wenn es nicht klappt, erst den Wechsel mit Händen auf den Fingerspitzen üben."
      ],
      varianten: "Leichter: Fingerspitzen hinter dem Körper aufsetzen. Schwerer: am Ende jedes Wechsels das hintere Knie kurz abheben.",
      sicherheit: "Bei Knieschmerzen die Füße weiter auseinander stellen. Bei Hüftbeschwerden nur im schmerzfreien Bereich.",
      golf: "Aktive Kontrolle der Hüftrotation hilft dir, im Schwung die Hüfte bewusst zu drehen statt nur passiv mitzunehmen. Das unterstützt eine stabile Bewegung und eine gute Reihenfolge von Hüfte und Oberkörper."
    }
  },
  {
    id: "huefte_9090_innenrotation_abheben",
    name: "90/90 hinteres Knie abheben",
    auch: ["90/90 Lift-Off", "90/90 Internal Rotation Lift-Off", "90/90 Hip IR Lift"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["hueftbeuger", "gesaess"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 2,
    golf: 2,
    sport: ["golf"],
    einseitig: true,
    hinweis: "Kleine Bewegung, Oberkörper bleibt ruhig.",
    info: {
      kurz: "Aktive Innenrotation der hinteren Hüfte aus der 90/90-Position: Du hebst Knie und Fuß des hinteren Beins vom Boden ab. Kräftigt die Hüfte genau in dem Bereich, in dem sie bei vielen am wenigsten beweglich ist.",
      ausfuehrung: [
        "Setz dich in die 90/90-Position, rechtes Bein vorn, linkes Bein seitlich hinten.",
        "Stütz dich mit den Händen neben dem Körper ab und richte den Oberkörper auf.",
        "Neige den Oberkörper leicht in Richtung des vorderen Beins, damit das Gewicht von der hinteren Hüfte geht.",
        "Heb das linke Knie und den linken Fuß gleichzeitig vom Boden ab, indem du den Oberschenkel nach innen drehst. Der Unterschenkel bleibt parallel zum Boden.",
        "Halte oben ein bis zwei Sekunden und senke das Bein langsam wieder ab.",
        "Wiederhole die vorgegebene Anzahl und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper lehnt sich stark zur Seite: nur leicht neigen, die Bewegung kommt aus der Hüfte.",
        "Nur der Fuß hebt ab: Knie und Fuß gemeinsam heben.",
        "Mit Schwung arbeiten: Wenn es nicht geht, erst isometrisch gegen den Boden drücken."
      ],
      vorteile: [
        "Kräftigt die Innenrotation der Hüfte am Ende des Bewegungsumfangs.",
        "Macht passive Beweglichkeit nutzbar.",
        "Zeigt deutlich Unterschiede zwischen den Seiten."
      ],
      tipps: [
        "Schon ein Zentimeter Abheben ist ein guter Anfang.",
        "Wenn das Abheben nicht gelingt, drück das Knie 10 Sekunden aktiv nach oben, ohne dass es sich bewegt."
      ],
      varianten: "Leichter: nur isometrisch nach oben drücken oder nur den Fuß abheben. Schwerer: Oberkörper aufrecht ohne Hände, oben länger halten.",
      sicherheit: "Bei Leistenschmerzen oder Krämpfen kurz lockern. Bei Hüftprothese vorher abklären.",
      golf: "Die Innenrotation der vorderen Hüfte ist im Golf besonders wichtig: Sie ermöglicht das Drehen in die Zielseite im Durchschwung. Diese Übung kräftigt genau diese Bewegung, was eine freie, stabile Hüftdrehung unterstützt."
    }
  },
  {
    id: "huefte_9090_pails",
    name: "90/90 mit Anspannen und Entspannen",
    auch: ["90/90 PAILs RAILs", "90/90 Contract-Relax", "FRC 90/90"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["hueftbeuger", "adduktoren"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 3,
    golf: 2,
    sport: ["golf"],
    einseitig: true,
    hinweis: "Mittlere Kraft, kein Maximaldruck.",
    info: {
      kurz: "Fortgeschrittene Methode in der 90/90-Position: Nach einer passiven Dehnung drückst du das Bein isometrisch in den Boden und ziehst es danach aktiv vom Boden weg. Verbindet Dehnung mit Kraft am Ende des Bewegungsumfangs.",
      ausfuehrung: [
        "Setz dich in die 90/90-Position, rechtes Bein vorn, und neige dich aus der Hüfte über das vordere Schienbein. Halte diese Dehnung ein bis zwei Minuten.",
        "Drück nun das rechte Schienbein und Knie mit etwa halber Kraft in den Boden, ohne dass sich etwas bewegt. Steigere langsam und halte 10 bis 15 Sekunden.",
        "Lass den Druck los und versuche jetzt umgekehrt, Knie und Fuß des vorderen Beins aktiv vom Boden abzuheben, ohne den Oberkörper zu bewegen. Halte 10 bis 15 Sekunden.",
        "Lass locker, atme aus und sinke ein wenig tiefer in die Dehnung.",
        "Wiederhole denselben Ablauf für die hintere Hüfte: Knie in den Boden drücken, dann aktiv abheben.",
        "Wechsle danach die Seite."
      ],
      atmung: "Während der Anspannung gleichmäßig weiteratmen, nie pressen.",
      fehler: [
        "Zu viel Kraft: Der Druck soll kontrolliert aufgebaut werden, eher mittelstark.",
        "Krampf im Gesäß oder Hüftbeuger: kurz lösen, ausschütteln und mit weniger Kraft weitermachen.",
        "Position verschiebt sich beim Drücken: Oberkörper stabil halten."
      ],
      vorteile: [
        "Kombiniert passive Dehnung mit Kraft in der Endposition.",
        "Kann helfen, neu gewonnene Beweglichkeit auch aktiv zu nutzen.",
        "Sehr wirksame Ergänzung für sportartspezifische Hüftrotation."
      ],
      tipps: [
        "Ein bis zwei Durchgänge pro Seite und Woche reichen anfangs, die Methode ist anstrengend.",
        "Nicht vor Maximalkraft oder Sprints, lieber an eigenen Mobilitätstagen."
      ],
      varianten: "Leichter: nur die Druckphase in den Boden, kürzere Haltezeiten. Schwerer: längere Haltezeiten und aufrechter Oberkörper.",
      sicherheit: "Bei Hüftimpingement, Hüftprothese oder akuten Leistenbeschwerden nur nach Rücksprache.",
      golf: "Golf verlangt aktive Hüftrotation unter Last. Diese Methode stärkt die Rotatoren am Ende der Bewegung, sodass du die Hüftdrehung im Schwung kontrolliert nutzen kannst."
    }
  },
  {
    id: "shin_box_aufstehen",
    name: "Shin Box mit Aufrichten",
    auch: ["Shin Box Get-Up", "Shin Box to Kneeling", "Shin Box Rise"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "hueftbeuger"],
    sekundaer: ["gesaess_mittel", "quadrizeps", "bauch"],
    geraete: [["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 2, huefte: 1 },
    stufe: 3,
    golf: 1,
    info: {
      kurz: "Aus der Shin-Box-Position, die der 90/90-Position ähnelt, richtest du dich in den aufrechten Kniestand auf und wieder zurück. Verbindet Hüftrotation, Hüftstreckung und Rumpfkontrolle.",
      ausfuehrung: [
        "Setz dich in die Shin-Box-Position auf eine weiche Matte, rechtes Bein vorn mit Knie im rechten Winkel, linkes Bein seitlich hinten.",
        "Richte den Oberkörper aufrecht auf, Arme vor der Brust oder vorn gestreckt.",
        "Spann das rechte Gesäß an und schiebe die Hüfte nach vorn oben, bis du auf beiden Knien im aufrechten Kniestand bist.",
        "Oben angekommen: Hüfte vollständig strecken, Gesäß fest, Oberkörper aufrecht.",
        "Senke dich langsam und kontrolliert zurück in die Shin-Box-Position.",
        "Nach den Wiederholungen über einen 90/90-Wechsel die Seite wechseln."
      ],
      atmung: "Beim Aufrichten ausatmen, beim Absenken einatmen.",
      fehler: [
        "Mit Schwung hochkommen: Kraft aus der Hüfte, nicht aus dem Oberkörper.",
        "Hüfte oben nicht ganz gestreckt: Gesäß fest anspannen.",
        "Harte Matte: Die Knie brauchen eine gute Polsterung."
      ],
      vorteile: [
        "Kräftigt die Hüftmuskulatur im großen Bewegungsumfang.",
        "Verbessert die Kontrolle bei Rotation und Streckung der Hüfte.",
        "Fordert Rumpfstabilität."
      ],
      tipps: [
        "Arme nach vorn strecken hilft beim Aufrichten.",
        "Zuerst den 90/90-Wechsel ohne Hände sicher können."
      ],
      varianten: "Leichter: mit Hand am Boden abstützen beim Aufrichten. Schwerer: leichte Kurzhantel vor der Brust halten oder langsamer absenken.",
      sicherheit: "Nicht bei Knieschmerzen oder Problemen an der Kniescheibe. Immer auf weicher Unterlage."
    }
  },
  {
    id: "gesaess_rolle",
    name: "Gesäß ausrollen mit der Faszienrolle",
    auch: ["Glute Foam Rolling", "Piriformis Foam Roll", "Foam Roll Glutes"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    einseitig: true,
    hinweis: "Bein überschlagen für mehr Druck auf das Gesäß.",
    info: {
      kurz: "Selbstmassage des Gesäßes und der tiefen Hüftrotatoren mit der Faszienrolle. Kann ein Spannungsgefühl im Gesäß verringern und bereitet gut auf Gesäßdehnungen vor.",
      ausfuehrung: [
        "Setz dich mit der rechten Gesäßhälfte auf die Faszienrolle, die Hände stützen hinter dir am Boden.",
        "Leg den rechten Knöchel auf das linke Knie, wie bei einer Figur 4. So wird das Gesäß gedehnt und besser erreichbar.",
        "Neige dich leicht zur rechten Seite, sodass der Druck auf der rechten Gesäßhälfte liegt.",
        "Roll langsam einige Zentimeter vor und zurück und leicht seitlich, um den gesamten Muskel zu erreichen.",
        "Bleib an empfindlichen Stellen 20 bis 30 Sekunden liegen.",
        "Wechsle nach ein bis zwei Minuten die Seite."
      ],
      atmung: "Ruhig weiteratmen, an empfindlichen Stellen lang ausatmen.",
      fehler: [
        "Zu schnell rollen: langsame, kleine Bewegungen.",
        "Auf dem Kreuzbein oder Hüftknochen rollen: nur auf dem Muskel bleiben.",
        "Schmerz aushalten: Der Druck soll unangenehm, aber gut erträglich sein."
      ],
      vorteile: [
        "Kann das Spannungsgefühl im Gesäß verringern.",
        "Bereitet auf Taube und Figur-4-Dehnung vor.",
        "Kann nach langem Sitzen oder Laufen angenehm sein."
      ],
      tipps: [
        "Für punktgenauen Druck geht auch ein Massageball oder Tennisball.",
        "Anschließend direkt eine Gesäßdehnung durchführen."
      ],
      varianten: "Leichter: beide Füße am Boden, weniger Neigung. Schwerer: festere Rolle oder Ball.",
      sicherheit: "Bei Ausstrahlung ins Bein oder Taubheitsgefühl sofort aufhören und ärztlich abklären lassen. Bei Handgelenksbeschwerden auf den Fäusten stützen."
    }
  },
  {
    id: "tfl_rolle",
    name: "Seitliche Hüfte ausrollen mit der Faszienrolle",
    auch: ["TFL Foam Rolling", "IT Band Foam Roll", "Tensor Fasciae Latae Rolling"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["quadrizeps"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    hinweis: "Vorn seitlich an der Hüfte rollen, nicht hart über das ganze Schienbeinband.",
    info: {
      kurz: "Selbstmassage des Spanners der Oberschenkelbinde (TFL) seitlich vorn an der Hüfte und des seitlichen Oberschenkels. Kann das Spannungsgefühl seitlich an Hüfte und Oberschenkel verringern, besonders bei Läufern und Radfahrern.",
      ausfuehrung: [
        "Leg dich seitlich halb auf den Bauch, die Rolle liegt unter dem rechten Oberschenkel knapp unterhalb und vor dem Hüftknochen.",
        "Stütz dich auf den rechten Unterarm, das linke Bein ist angewinkelt vor dir aufgestellt und nimmt Gewicht ab.",
        "Roll langsam in kleinen Bewegungen über den Muskel seitlich vorn an der Hüfte.",
        "Bleib an empfindlichen Stellen liegen und beuge und strecke langsam das Knie.",
        "Roll anschließend vorsichtig den seitlichen Oberschenkel Richtung Knie, mit weniger Druck.",
        "Wechsle nach ein bis zwei Minuten die Seite."
      ],
      atmung: "Gleichmäßig atmen, bei unangenehmem Druck lang ausatmen.",
      fehler: [
        "Mit vollem Gewicht über das seitliche Band rollen: Das ist oft sehr unangenehm und bringt wenig, mehr mit dem oberen Bein abstützen.",
        "Über den Hüftknochen rollen: knapp darunter bleiben.",
        "Zu schnell: Die Wirkung entsteht durch langsame Bewegung und Verweilen."
      ],
      vorteile: [
        "Kann das Spannungsgefühl an der seitlichen Hüfte verringern.",
        "Bereitet auf Dehnungen der seitlichen Hüfte vor.",
        "Kann für Läufer und Radfahrer angenehm sein."
      ],
      tipps: [
        "Der TFL sitzt etwa eine Handbreit vor und unter dem Hüftknochen, dort lohnt sich der Druck am meisten.",
        "Anschließend die seitliche Hüftdehnung im Stehen oder mit Band machen."
      ],
      varianten: "Leichter: mehr Gewicht auf das aufgestellte Bein. Schwerer: Massageball statt Rolle.",
      sicherheit: "Bei Schmerzen am Knie außen ärztlich abklären lassen, statt nur zu rollen. Nicht auf Blutergüssen rollen."
    }
  },
  {
    id: "tfl_dehnen_stehend",
    name: "Seitliche Hüfte dehnen im Stehen",
    auch: ["Standing IT Band Stretch", "Standing TFL Stretch", "Cross-Leg Side Bend Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["schraege_bauch", "latissimus"],
    geraete: [["wand"], []],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Dehnung für die seitliche Hüfte und den Spanner der Oberschenkelbinde im Stehen: Beine überkreuzt, Hüfte zur Seite schieben, Arm über den Kopf. Dehnt die gesamte Außenseite von der Hüfte bis in die Flanke.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Wand, die linke Seite zur Wand, und stütz die linke Hand auf Schulterhöhe ab.",
        "Kreuze das rechte Bein hinter das linke, beide Füße stehen fest am Boden.",
        "Schiebe die rechte Hüfte langsam zur Seite nach außen, weg von der Wand, bis du die Dehnung an der rechten Hüftaußenseite spürst.",
        "Streck den rechten Arm über den Kopf und neige den Oberkörper leicht zur Wand.",
        "Halte die Position, beide Knie fast gestreckt, Becken nicht nach vorn kippen.",
        "Löse die Dehnung und wechsle die Seite."
      ],
      atmung: "In die rechte Flanke einatmen und beim Ausatmen die Hüfte etwas weiter zur Seite schieben.",
      fehler: [
        "Oberkörper dreht sich: Brust zeigt nach vorn.",
        "Hüfte geht nach hinten statt zur Seite: Becken frontal ausrichten.",
        "Hinteres Bein steht zu nah: etwas weiter kreuzen."
      ],
      vorteile: [
        "Dehnt die seitliche Hüfte und Flanke in einer Bewegung.",
        "Ohne Matte überall möglich.",
        "Gut nach Laufen und Radfahren."
      ],
      tipps: [
        "Ohne Wand funktioniert es auch freistehend mit beiden Armen über dem Kopf.",
        "Leicht nach vorn oder hinten neigen, um verschiedene Bereiche zu treffen."
      ],
      varianten: "Leichter: kleinere Seitneigung. Schwerer: in Rückenlage mit Band quer über den Körper.",
      sicherheit: "Bei Gleichgewichtsproblemen immer an der Wand festhalten."
    }
  },
  {
    id: "it_band_dehnen_band",
    name: "Seitliche Hüfte dehnen in Rückenlage mit Band",
    auch: ["Supine IT Band Stretch with Strap", "Cross-Body Strap Stretch", "Supine Lateral Hip Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["beinbeuger", "gesaess"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du liegst auf dem Rücken und führst das gestreckte Bein mit einem Band quer über den Körper zur Gegenseite. Dehnt die seitliche Hüfte, den Spanner der Oberschenkelbinde und Teile von Gesäß und Beinrückseite.",
      ausfuehrung: [
        "Leg dich auf den Rücken und leg ein Band oder einen Gurt um den rechten Fuß.",
        "Streck das rechte Bein nach oben, bis es etwa senkrecht steht, das linke Bein liegt lang am Boden.",
        "Nimm beide Bandenden in die linke Hand, den rechten Arm legst du seitlich auf Schulterhöhe ab.",
        "Führ das gestreckte rechte Bein langsam quer über den Körper nach links, bis du die Dehnung an der rechten Hüftaußenseite spürst.",
        "Die rechte Schulter und möglichst auch das rechte Becken bleiben nah am Boden.",
        "Halte, führe das Bein zurück zur Mitte und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und beim Ausatmen das Bein ein Stück weiter zur Seite sinken lassen.",
      fehler: [
        "Becken rollt komplett mit: nur so weit führen, wie die rechte Hüfte am Boden bleiben kann.",
        "Knie beugt sich stark: Bein möglichst gestreckt lassen.",
        "Schulter hebt ab: Arm entspannt seitlich ablegen."
      ],
      vorteile: [
        "Dehnt die Außenseite der Hüfte im Liegen ohne Gleichgewichtsanforderung.",
        "Das Band ermöglicht feine Steuerung.",
        "Gut kombinierbar mit Dehnungen der Beinrückseite in derselben Lage."
      ],
      tipps: [
        "Direkt nach der Beinrückseitendehnung mit Band das Bein einfach zur Seite führen.",
        "Für mehr Dehnung im Gesäß das Bein etwas höher Richtung Schulter führen."
      ],
      varianten: "Leichter: Knie leicht beugen. Schwerer: Bein höher und weiter zur Gegenseite führen.",
      sicherheit: "Bei Rückenproblemen die Rotation klein halten."
    }
  },
  // ---------- Hüftrotation aktiv und dynamisch ----------
  {
    id: "hip_cars_stehend",
    name: "Kontrolliertes Hüftkreisen im Stehen",
    auch: ["Standing Hip CARs", "Hip Controlled Articular Rotations", "Hip CARs"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "gesaess_mittel"],
    sekundaer: ["gesaess", "adduktoren", "bauch"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    golf: 2,
    sport: ["golf", "fussball"],
    einseitig: true,
    hinweis: "Größter Kreis, den du ohne Ausweichen des Beckens schaffst.",
    info: {
      kurz: "Langsames, maximal großes Kreisen des Oberschenkels im Hüftgelenk auf einem Bein stehend, ohne dass Becken oder Oberkörper mitgehen. Trainiert die aktive Kontrolle der Hüfte in allen Richtungen.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Wand und halte dich mit der linken Hand fest. Das linke Standbein ist leicht gebeugt, der Rumpf fest.",
        "Heb das rechte Knie so hoch wie möglich nach vorn, ohne dass der Rücken rund wird.",
        "Führ das gebeugte Knie langsam zur Seite nach außen und öffne die Hüfte so weit wie möglich.",
        "Dreh den Oberschenkel nach innen, sodass der Fuß nach außen oben zeigt, und führe das Knie nach hinten.",
        "Streck die Hüfte nach hinten, bis das Knie neben oder hinter dem Standbein ist, und bring das Bein zurück zur Ausgangsposition.",
        "Kreise einige Male in diese Richtung, dann in die Gegenrichtung, danach Seitenwechsel."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten, auch wenn es anstrengend wird.",
      fehler: [
        "Becken kippt oder dreht mit: Rumpf fest anspannen und den Kreis kleiner machen.",
        "Zu schnell: Ein Kreis darf 10 bis 20 Sekunden dauern.",
        "Oberkörper lehnt sich weg: aufrecht bleiben, Hand an der Wand nur zur Sicherheit."
      ],
      vorteile: [
        "Bewegt die Hüfte durch ihren gesamten aktiven Bewegungsumfang.",
        "Verbessert die Kontrolle in Innen- und Außenrotation.",
        "Zeigt zuverlässig, in welchen Richtungen die Hüfte eingeschränkt ist.",
        "Gute tägliche Pflege der Hüftgelenke, auch als Aufwärmen."
      ],
      tipps: [
        "Spann den ganzen Körper an, damit sich nur das Hüftgelenk bewegt. Genau das macht die Übung wirksam.",
        "Drei bis fünf langsame Kreise pro Richtung reichen."
      ],
      varianten: "Leichter: im Vierfüßlerstand. Schwerer: ohne Festhalten oder mit leichter Gewichtsmanschette.",
      sicherheit: "Bei Leistenschmerzen in der Innenrotation den Kreis in diesem Bereich kleiner machen. Bei Gleichgewichtsproblemen festhalten.",
      golf: "Die Hüften müssen im Golfschwung in Innen- und Außenrotation unter Kontrolle arbeiten. Hüftkreisen hält die Gelenke beweglich und verbessert die Kontrolle, die du für eine saubere Hüftdrehung brauchst."
    }
  },
  {
    id: "hip_cars_vierfuessler",
    name: "Kontrolliertes Hüftkreisen im Vierfüßlerstand",
    auch: ["Quadruped Hip CARs", "Quadruped Hip Circles", "Fire Hydrant Circles"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel", "hueftbeuger"],
    sekundaer: ["gesaess", "bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, knie: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Hüftkreisen aus dem Vierfüßlerstand: Das Knie zieht einen großen Kreis von vorn über die Seite nach hinten. Leichter als im Stehen, weil kein Gleichgewicht nötig ist.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, Hände unter den Schultern, Knie unter der Hüfte, Rücken gerade.",
        "Spann den Bauch an, damit sich der Rücken während der Übung nicht bewegt.",
        "Zieh das rechte Knie nach vorn Richtung Brust.",
        "Führ das Knie zur Seite nach oben, wie ein Hund am Baum, ohne dass sich das Becken kippt.",
        "Dreh den Unterschenkel nach oben und streck das Bein nach hinten, dann zurück zur Ausgangsposition.",
        "Mach die Kreise langsam in beide Richtungen und wechsle dann die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Rücken macht die Bewegung mit: Rumpf fest, notfalls den Kreis verkleinern.",
        "Gewicht schiebt sich zur Seite: Becken mittig halten.",
        "Zu schnell: langsam und gleichmäßig kreisen."
      ],
      vorteile: [
        "Mobilisiert die Hüfte in allen Richtungen ohne Gleichgewichtsanforderung.",
        "Kräftigt die seitliche Hüftmuskulatur.",
        "Gut als Aufwärmübung vor Bein- und Gesäßtraining."
      ],
      tipps: [
        "Stell dir vor, das Knie malt den größtmöglichen Kreis in die Luft.",
        "Drei bis fünf Kreise je Richtung und Seite."
      ],
      varianten: "Leichter: kleinere Kreise. Schwerer: Minibandschlaufe über den Knien oder Kreise im Stehen.",
      sicherheit: "Bei Handgelenksbeschwerden auf den Fäusten oder Unterarmen stützen. Knie gut polstern."
    }
  },
  {
    id: "huefte_airplane",
    name: "Hip Airplane (Hüftflieger)",
    auch: ["Hip Airplane", "Single-Leg Hip Airplane", "Standing Hip Airplane"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger", "adduktoren", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 3,
    golf: 2,
    sport: ["golf", "fussball"],
    einseitig: true,
    hinweis: "Auf einem Bein vorgebeugt, Becken auf- und zudrehen.",
    info: {
      kurz: "Anspruchsvolle Übung auf einem Bein: Aus der Vorbeuge drehst du das Becken über dem Standbein auf und zu. Kräftigt Innen- und Außenrotation der Standbeinhüfte und fordert Gleichgewicht.",
      ausfuehrung: [
        "Stell dich auf das rechte Bein, das Knie leicht gebeugt, und neige den Oberkörper mit geradem Rücken nach vorn, bis er fast waagerecht ist. Das linke Bein streckt sich nach hinten.",
        "Breite die Arme seitlich aus wie Flügel oder halte sie vor der Brust.",
        "Dreh das Becken und den Oberkörper langsam nach links auf, sodass die linke Hüfte zur Decke zeigt. Die Bewegung kommt aus der rechten Hüfte.",
        "Dreh dann kontrolliert zurück und weiter nach rechts zu, bis die linke Hüfte Richtung Boden zeigt.",
        "Das Standknie bleibt dabei stabil über dem Fuß und zeigt nach vorn.",
        "Wiederhole langsam und wechsle danach das Standbein."
      ],
      atmung: "Beim Aufdrehen ausatmen, beim Zudrehen einatmen.",
      fehler: [
        "Bewegung kommt aus dem Oberkörper statt der Hüfte: Brust und Becken drehen sich als Einheit.",
        "Standknie wackelt nach innen: langsamer und kleinerer Bewegungsumfang.",
        "Rundrücken: Rücken lang, Blick zum Boden."
      ],
      vorteile: [
        "Kräftigt die Hüftrotatoren des Standbeins in Innen- und Außenrotation.",
        "Verbessert Gleichgewicht und Stabilität auf einem Bein.",
        "Überträgt Hüftbeweglichkeit in eine belastete, sportnahe Position."
      ],
      tipps: [
        "Starte mit der gestützten Variante an einer Bank oder Wand.",
        "Drei bis sechs langsame Wiederholungen je Seite sind schon fordernd."
      ],
      varianten: "Leichter: mit einer Hand an der Wand oder Bank abstützen. Schwerer: leichte Kurzhantel in der Hand oder oben länger halten.",
      sicherheit: "Bei Gleichgewichtsproblemen nur gestützt. Bei Hüft- oder Knieschmerzen den Bewegungsumfang verkleinern.",
      golf: "Im Golf rotiert das Becken über einem belasteten Bein: im Rückschwung über dem hinteren, im Durchschwung über dem vorderen. Hip Airplanes trainieren genau diese Rotation über dem Standbein und verbessern damit Stabilität und Hüftdrehung im Schwung."
    }
  },
  {
    id: "huefte_airplane_gestuetzt",
    name: "Hip Airplane mit Stütze",
    auch: ["Supported Hip Airplane", "Assisted Hip Airplane", "Bench Supported Hip Airplane"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger", "adduktoren"],
    geraete: [["bank"], ["wand"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 2,
    golf: 2,
    sport: ["golf"],
    einseitig: true,
    schwerer: "huefte_airplane",
    info: {
      kurz: "Einstiegsvariante des Hip Airplane: Eine Hand stützt sich auf einer Bank, an der Wand oder einem Stab ab. So kannst du dich auf die Drehung im Hüftgelenk konzentrieren, ohne um das Gleichgewicht zu kämpfen.",
      ausfuehrung: [
        "Stell dich neben eine Bank oder vor eine Wand und stütz dich mit der linken Hand ab. Mit einem Stab oder Golfschläger stützt du dich senkrecht auf den Boden.",
        "Stell dich auf das rechte Bein, das Knie leicht gebeugt, und beuge den Oberkörper mit geradem Rücken nach vorn.",
        "Streck das linke Bein nach hinten aus, bis Oberkörper und Bein etwa eine Linie bilden.",
        "Dreh das Becken langsam auf, sodass die linke Hüfte zur Decke zeigt, und dann wieder zu Richtung Boden.",
        "Die Bewegung kommt aus der rechten Hüfte, das rechte Knie bleibt über dem Fuß.",
        "Wiederhole langsam und wechsle dann die Seite."
      ],
      atmung: "Beim Aufdrehen ausatmen, beim Zurückdrehen einatmen.",
      fehler: [
        "Zu viel Gewicht auf der Stütze: Die Hand dient nur dem Gleichgewicht.",
        "Rücken rundet sich: Brustbein nach vorn, Rücken lang.",
        "Knie fällt nach innen: Knie zeigt stabil nach vorn."
      ],
      vorteile: [
        "Trainiert die Rotation über dem Standbein ohne hohe Gleichgewichtsanforderung.",
        "Guter Einstieg für Einsteiger und ältere Sportler.",
        "Mit dem Golfschläger auch auf dem Platz einsetzbar."
      ],
      tipps: [
        "Mit dem Golfschläger als Stütze ideal vor der Runde.",
        "Nimm die Hand nach und nach weniger zu Hilfe, bis du freihändig wechseln kannst."
      ],
      varianten: "Leichter: kleinerer Drehwinkel, Oberkörper aufrechter. Schwerer: freie Variante ohne Stütze.",
      sicherheit: "Bei Hüftschmerzen den Drehwinkel verkleinern.",
      golf: "Die Rotation des Beckens über dem belasteten Bein ist das Herzstück einer guten Hüftbewegung im Schwung. Mit dem Schläger als Stütze kannst du die Übung direkt vor der Runde machen."
    }
  },
  {
    id: "scheibenwischer_liegend",
    name: "Scheibenwischer in Rückenlage",
    auch: ["Supine Windshield Wipers", "Supine Hip Internal Rotation Drops", "Lying Knee Drops"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["adduktoren", "schraege_bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 2,
    sport: ["golf"],
    info: {
      kurz: "Sanfte Mobilisation der Hüftrotation in Rückenlage: Mit weit gestellten Füßen lässt du beide Knie wie Scheibenwischer zu einer Seite fallen. Das innere Knie bewegt die Hüfte in die Innenrotation.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell die Füße deutlich breiter als hüftbreit auf, die Knie sind gebeugt.",
        "Leg die Arme seitlich auf Schulterhöhe ab, die Handflächen zeigen nach unten.",
        "Lass beide Knie langsam nach rechts sinken. Das linke Knie fällt nach innen Richtung rechter Fuß.",
        "Halte am Ende kurz und spüre die Innenrotation in der linken Hüfte.",
        "Führ die Knie zurück zur Mitte und lass sie zur anderen Seite sinken.",
        "Wechsle ruhig und gleichmäßig hin und her."
      ],
      atmung: "Beim Absinken ausatmen, beim Zurückkommen einatmen.",
      fehler: [
        "Füße zu eng: Dann rotiert vor allem die Wirbelsäule, Füße weit aufstellen.",
        "Schultern heben ab: Arme schwer werden lassen.",
        "Mit Schwung fallen lassen: langsam und kontrolliert."
      ],
      vorteile: [
        "Sanfte Mobilisation der Innenrotation beider Hüften.",
        "Für Einsteiger und bei steifen Hüften gut geeignet.",
        "Lockert zugleich den unteren Rücken leicht."
      ],
      tipps: [
        "Wenn du mehr Innenrotation willst, leg den Fuß des oberen Beins auf das innere Knie und drück es sanft weiter nach unten.",
        "Gut als erste Übung einer Mobilitätseinheit am Boden."
      ],
      varianten: "Leichter: Füße enger, kleiner Bewegungsumfang. Schwerer: am Ende das innere Knie aktiv weiter Richtung Boden drücken und halten.",
      sicherheit: "Bei Rückenschmerzen nur im schmerzfreien Bereich bewegen.",
      golf: "Die Innenrotation der vorderen Hüfte ist im Durchschwung entscheidend. Diese einfache Übung hält sie beweglich und ist ideal für tägliche kurze Einheiten."
    }
  },
  {
    id: "innenrotation_bauchlage",
    name: "Hüftinnenrotation in Bauchlage",
    auch: ["Prone Hip Internal Rotation Stretch", "Prone Hip IR", "Prone Leg Drops"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 2,
    sport: ["golf"],
    info: {
      kurz: "Dehnung der Hüftinnenrotation in Bauchlage: Die Knie sind gebeugt, die Unterschenkel fallen nach außen zur Seite. In dieser Lage ist die Hüfte gestreckt, also genau wie beim Stehen und im Golfschwung.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Stirn auf den Händen, die Knie etwa hüftbreit.",
        "Beuge beide Knie, bis die Unterschenkel senkrecht nach oben zeigen.",
        "Lass beide Unterschenkel langsam nach außen zur Seite sinken, die Knie bleiben am Boden und in Position.",
        "Halte die Position, sobald du eine Dehnung tief in der Hüfte oder seitlich am Gesäß spürst.",
        "Achte darauf, dass das Becken flach auf dem Boden bleibt und nicht zur Seite kippt.",
        "Führ die Unterschenkel langsam zurück nach oben und streck die Beine aus."
      ],
      atmung: "Ruhig in den Bauch atmen und beim Ausatmen die Unterschenkel etwas schwerer werden lassen.",
      fehler: [
        "Becken hebt ab: Bauch und Hüftknochen bleiben am Boden.",
        "Knie rutschen auseinander: Knie bleiben hüftbreit.",
        "Ziehen am Knie innen: Unterschenkel weniger weit sinken lassen."
      ],
      vorteile: [
        "Dehnt die Innenrotation der Hüfte in gestreckter Position.",
        "Zeigt Seitenunterschiede deutlich, weil beide Beine gleichzeitig arbeiten.",
        "Sehr einfach und ohne Gerät."
      ],
      tipps: [
        "Für aktive Arbeit die Unterschenkel aus der Endposition ein paar Zentimeter anheben und kurz halten.",
        "Ein Seite wirkt steifer? Dann dort etwas länger arbeiten."
      ],
      varianten: "Leichter: nur ein Bein gleichzeitig. Schwerer: aktiv halten oder ein Partner drückt sanft.",
      sicherheit: "Bei Knieschmerzen innen am Knie den Bewegungsumfang reduzieren.",
      golf: "Im Golf braucht die vordere Hüfte im Durchschwung Innenrotation, während sie gestreckt ist. Genau diese Kombination dehnt die Bauchlage, deshalb ist sie für Golfer besonders wertvoll."
    }
  },
  {
    id: "innenrotation_sitzend_aktiv",
    name: "Aktive Hüftinnenrotation im Sitzen",
    auch: ["Seated Hip Internal Rotation", "Seated Hip IR Lift", "Seated Active Hip Rotation"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel"],
    sekundaer: ["hueftbeuger", "adduktoren"],
    geraete: [["bank"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 2,
    sport: ["golf"],
    einseitig: true,
    hinweis: "Ohne Gerät auf einem Stuhl.",
    info: {
      kurz: "Aktive Hüftinnenrotation auf einer Bank oder einem Stuhl: Du drehst den Unterschenkel nach außen, während der Oberschenkel liegen bleibt. Eine Übung, die auch im Golf-Fitness-Test geprüft wird.",
      ausfuehrung: [
        "Setz dich aufrecht auf eine Bank oder einen Stuhl, die Knie im rechten Winkel, die Füße hängen frei oder stehen am Boden.",
        "Leg ein zusammengerolltes Handtuch zwischen die Knie oder halte die Knie zusammen.",
        "Halte die Hände seitlich auf der Bank, damit das Becken gerade bleibt.",
        "Dreh den rechten Unterschenkel langsam nach außen, so weit es geht, das Knie bleibt an seiner Stelle.",
        "Halte am Ende zwei Sekunden und führ den Fuß langsam zurück.",
        "Wiederhole die vorgegebene Anzahl und wechsle die Seite."
      ],
      atmung: "Beim Ausdrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper lehnt zur Seite: aufrecht bleiben, Becken gerade.",
        "Knie wandert mit nach innen: Handtuch zwischen den Knien hilft.",
        "Mit Schwung: langsam und bewusst."
      ],
      vorteile: [
        "Trainiert die aktive Innenrotation der Hüfte.",
        "Sehr einfach und auch im Büro machbar.",
        "Zeigt Unterschiede zwischen beiden Hüften."
      ],
      tipps: [
        "Als Fortschritt ein Miniband um die Knöchel legen.",
        "Vergleiche regelmäßig die Seiten. Werden sie gleicher, wirkt das Training."
      ],
      varianten: "Leichter: kleiner Bewegungsumfang. Schwerer: mit Miniband um die Knöchel oder am Ende fünf Sekunden halten.",
      sicherheit: "Bei Knieschmerzen den Umfang reduzieren, die Drehung kommt aus der Hüfte.",
      golf: "Die Innenrotation der Hüfte wird im Golf-Fitness-Screening im Sitzen geprüft, weil sie für Rück- und Durchschwung so wichtig ist. Mit dieser Übung trainierst du sie aktiv."
    }
  },
  {
    id: "aussenrotation_sitzend_aktiv",
    name: "Aktive Hüftaußenrotation im Sitzen",
    auch: ["Seated Hip External Rotation", "Seated Hip ER Lift", "Seated Active Hip ER"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["hueftbeuger"],
    geraete: [["bank"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    hinweis: "Ohne Gerät auf einem Stuhl.",
    info: {
      kurz: "Aktive Hüftaußenrotation auf einer Bank oder einem Stuhl: Der Unterschenkel dreht nach innen, der Oberschenkel bleibt ruhig. Das Gegenstück zur aktiven Innenrotation im Sitzen.",
      ausfuehrung: [
        "Setz dich aufrecht auf eine Bank oder einen Stuhl, die Knie im rechten Winkel und hüftbreit.",
        "Stütz die Hände seitlich ab, um das Becken stabil zu halten.",
        "Dreh den rechten Unterschenkel langsam nach innen, sodass der Fuß Richtung linkes Bein wandert.",
        "Das Knie bleibt an seiner Stelle, der Oberschenkel liegt ruhig auf der Sitzfläche.",
        "Halte am Ende zwei Sekunden, führ den Fuß zurück und wiederhole.",
        "Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Eindrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Knie wandert nach außen: Knie bleibt auf seiner Linie.",
        "Oberkörper lehnt zur Seite: aufrecht bleiben.",
        "Zu schnell: langsam bewegen und am Ende halten."
      ],
      vorteile: [
        "Trainiert die aktive Außenrotation der Hüfte.",
        "Ergänzt die Innenrotation für ein ausgewogenes Hüfttraining.",
        "Im Alltag und Büro einfach umsetzbar."
      ],
      tipps: [
        "Kombiniere sie im Wechsel mit der aktiven Innenrotation.",
        "Ein Miniband um die Knöchel macht es schwerer."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang. Schwerer: Miniband oder am Ende länger halten.",
      sicherheit: "Bei Knieschmerzen den Bewegungsumfang reduzieren."
    }
  },
  {
    id: "hueft_distraktion_band",
    name: "Hüftmobilisation mit Band im Vierfüßlerstand",
    auch: ["Banded Hip Distraction", "Quadruped Banded Hip Mobilization", "Banded Hip Rock Back"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel"],
    geraete: [["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1, handgelenk: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    hinweis: "Band ganz oben in der Leiste, Zug seitlich nach außen.",
    info: {
      kurz: "Hüftmobilisation mit einem kräftigen Band, das den Oberschenkel nahe der Leiste seitlich wegzieht, während du im Vierfüßlerstand nach hinten wippst. Wird von vielen als angenehm empfunden, wenn sich die Hüfte in der tiefen Beugung eng anfühlt.",
      ausfuehrung: [
        "Befestige ein kräftiges Band auf Bodenhöhe an einem Rack oder einem schweren Gegenstand.",
        "Steig mit dem rechten Bein in die Schlaufe und zieh sie ganz nach oben in die Leiste.",
        "Geh seitlich vom Befestigungspunkt weg in den Vierfüßlerstand, bis das Band die rechte Hüfte deutlich nach außen zieht.",
        "Schiebe das Gesäß langsam nach hinten Richtung Fersen, der Rücken bleibt gerade.",
        "Komm wieder nach vorn und wiederhole das Wippen in ruhigem Rhythmus.",
        "Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Zurückschieben ausatmen, beim Vorkommen einatmen.",
      fehler: [
        "Band zu tief: Es muss in der Leiste sitzen.",
        "Rücken rundet sich beim Zurückschieben: nur so weit nach hinten, wie der Rücken gerade bleibt.",
        "Zu wenig Zug: weiter vom Befestigungspunkt weggehen."
      ],
      vorteile: [
        "Kann das Engegefühl in der Leiste bei tiefer Hüftbeugung verringern.",
        "Gute Vorbereitung auf tiefe Kniebeugen.",
        "Lässt sich mit leichten Rotationen kombinieren."
      ],
      tipps: [
        "Am Ende der Bewegung kleine Kreise mit der Hüfte machen.",
        "Zwei Sätze mit 10 bis 15 Wippbewegungen pro Seite vor dem Beintraining."
      ],
      varianten: "Leichter: weniger Bandspannung. Schwerer: Knie der Bandseite etwas weiter nach außen stellen oder Zug nach hinten statt zur Seite.",
      sicherheit: "Band sicher befestigen und auf Risse prüfen. Bei Leistenschmerzen nicht weiter verstärken."
    }
  },
  {
    id: "tor_oeffnen_schliessen",
    name: "Tor öffnen und schließen",
    auch: ["Gate Opener", "Gate Closer", "Hip Openers Standing", "Open the Gate"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "adduktoren"],
    sekundaer: ["gesaess_mittel", "gesaess"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    sport: ["fussball", "laufen", "golf"],
    einseitig: true,
    info: {
      kurz: "Klassische Aufwärmübung im Stehen: Du hebst das Knie nach vorn an und führst es in einem Bogen zur Seite und zurück, wie ein Tor, das sich öffnet. In Gegenrichtung schließt du das Tor.",
      ausfuehrung: [
        "Stell dich aufrecht hin, bei Bedarf mit einer Hand an der Wand.",
        "Heb das rechte Knie nach vorn bis etwa auf Hüfthöhe.",
        "Führ das Knie in einem großen Bogen zur Seite nach außen, das Tor öffnet sich.",
        "Setz den Fuß ab und wiederhole das Öffnen die vorgegebene Anzahl.",
        "Zum Schließen das Knie seitlich anheben und in einem Bogen nach vorn zur Mitte führen.",
        "Danach die Seite wechseln. Die Übung geht auch im Gehen vorwärts."
      ],
      atmung: "Locker und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Oberkörper lehnt zur Seite: aufrecht bleiben und Rumpf leicht anspannen.",
        "Knie zu niedrig: Hüfte im vollen Umfang bewegen.",
        "Hektische Bewegung: fließend und kontrolliert."
      ],
      vorteile: [
        "Wärmt die Hüftmuskulatur in mehreren Richtungen auf.",
        "Bestandteil vieler Aufwärmprogramme im Fußball und anderen Sportarten.",
        "Schult Gleichgewicht und Hüftkontrolle."
      ],
      tipps: [
        "Im Gehen als Teil einer Aufwärmstrecke mit 10 Metern pro Richtung.",
        "Mit Halt an der Wand kannst du größere Bögen machen."
      ],
      varianten: "Leichter: mit Halt an der Wand. Schwerer: im Gehen oder mit leichtem Hüpfer wie im Fußball-Aufwärmprogramm.",
      sicherheit: "Bei Leistenbeschwerden kleinere Bögen."
    }
  },
  {
    id: "knie_umarmen_gehen",
    name: "Knie umarmen im Gehen",
    auch: ["Walking Knee Hug", "Knee to Chest Walk", "Walking Knee Pull"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["beinbeuger", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Dynamische Aufwärmübung: Bei jedem Schritt ziehst du ein Knie mit beiden Armen zur Brust und gehst auf die Zehenspitzen des Standbeins. Dehnt das Gesäß und trainiert das Gleichgewicht.",
      ausfuehrung: [
        "Stell dich aufrecht hin und mach einen Schritt nach vorn mit dem linken Bein.",
        "Heb das rechte Knie an und umarme es mit beiden Händen unterhalb der Kniescheibe.",
        "Zieh das Knie sanft zur Brust und geh dabei auf dem linken Fuß auf die Zehenspitzen.",
        "Halte kurz, spann das linke Gesäß an und bleib aufrecht.",
        "Setz den rechten Fuß nach vorn ab und wiederhole mit dem linken Knie.",
        "Geh so eine Strecke oder eine feste Anzahl Schritte."
      ],
      atmung: "Locker und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Oberkörper rundet sich zum Knie: aufrecht bleiben, Knie kommt zur Brust.",
        "Standbein knickt ein: Gesäß des Standbeins anspannen.",
        "Zu schnell: Jede Position kurz halten."
      ],
      vorteile: [
        "Dehnt Gesäß und Beinrückseite dynamisch.",
        "Aktiviert die Hüftstreckung des Standbeins.",
        "Verbessert Gleichgewicht und Fußkontrolle."
      ],
      tipps: [
        "Kombiniere sie mit Oberschenkeldehnung und Bein wiegen im Gehen zu einer Aufwärmstrecke.",
        "Wenn du wackelst, auf den Zehenstand verzichten."
      ],
      varianten: "Leichter: auf der Stelle mit Halt. Schwerer: oben zwei bis drei Sekunden halten.",
      sicherheit: "Bei Gleichgewichtsproblemen an der Wand ausführen."
    }
  },
  {
    id: "bein_wiegen_gehen",
    name: "Bein wiegen im Gehen",
    auch: ["Walking Cradle", "Cradle Walk", "Walking Figure 4 Pull", "Leg Cradle"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Du hebst ein Bein an und hältst den Unterschenkel quer vor dem Körper wie ein Baby in den Armen. Dynamische Dehnung für Gesäß und Hüftaußenrotatoren, ideal beim Aufwärmen.",
      ausfuehrung: [
        "Stell dich aufrecht hin und mach einen Schritt nach vorn mit dem linken Bein.",
        "Heb das rechte Bein an und dreh es nach außen, sodass der Unterschenkel quer vor dir liegt.",
        "Greif mit der rechten Hand unter das Knie und mit der linken Hand unter den Knöchel.",
        "Zieh das ganze Bein waagerecht zur Brust, bis du die Dehnung im rechten Gesäß spürst, und geh dabei auf die Zehenspitzen.",
        "Halte kurz, setz den Fuß nach vorn ab und wechsle das Bein.",
        "Geh so eine Strecke oder eine feste Anzahl Schritte."
      ],
      atmung: "Locker und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Nur am Fuß ziehen: Knie und Fuß gleichmäßig anheben, das schont das Knie.",
        "Rundrücken: aufrecht bleiben, Bein kommt zum Körper.",
        "Standbein knickt ein: Gesäß des Standbeins anspannen."
      ],
      vorteile: [
        "Dehnt Gesäß und Außenrotatoren dynamisch.",
        "Schult Gleichgewicht und Haltung.",
        "Gut im Aufwärmen vor Laufen und Mannschaftssport."
      ],
      tipps: [
        "Den Zehenstand erst weglassen, bis du sicher stehst.",
        "Im Wechsel mit Knie umarmen im Gehen."
      ],
      varianten: "Leichter: auf der Stelle mit Rücken an der Wand. Schwerer: oben länger halten.",
      sicherheit: "Bei Knieschmerzen unter dem Knie stützen und nicht am Fuß ziehen."
    }
  },
  {
    id: "beinpendel_vor_zurueck",
    name: "Beinpendel vor und zurück",
    auch: ["Front to Back Leg Swings", "Forward Leg Swings", "Leg Swings Sagittal"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "hueftbeuger"],
    sekundaer: ["gesaess", "quadrizeps"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    sport: ["laufen", "fussball", "golf"],
    einseitig: true,
    info: {
      kurz: "Dynamische Aufwärmübung: Du schwingst ein Bein locker vor und zurück und steigerst den Bewegungsumfang langsam. Bereitet Beinrückseite und Hüftbeuger auf Laufen, Sprinten und Sport vor.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Wand oder einen Pfosten und halte dich mit der linken Hand fest.",
        "Das linke Standbein ist leicht gebeugt, der Oberkörper aufrecht, der Bauch leicht angespannt.",
        "Schwing das rechte Bein locker gestreckt nach vorn und zurück.",
        "Beginne mit kleinen Schwüngen und vergrößere den Bewegungsumfang mit jeder Wiederholung.",
        "Der Oberkörper bleibt ruhig, die Bewegung kommt aus der Hüfte.",
        "Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Locker im Rhythmus der Bewegung atmen.",
      fehler: [
        "Oberkörper pendelt mit: aufrecht bleiben, Rumpf stabil.",
        "Sofort maximal schwingen: langsam steigern.",
        "Hohlkreuz beim Rückschwung: Rückschwung nur so weit, wie das Becken ruhig bleibt."
      ],
      vorteile: [
        "Erwärmt Hüftbeuger und Beinrückseite dynamisch.",
        "Beeinträchtigt die Schnellkraft vor dem Training kaum.",
        "Fester Bestandteil vieler Aufwärmprogramme."
      ],
      tipps: [
        "10 bis 15 Schwünge pro Bein reichen.",
        "Ideal direkt vor einem Lauf, Sprint oder Spiel."
      ],
      varianten: "Leichter: kleinerer Schwung. Schwerer: ohne Festhalten.",
      sicherheit: "Bei frischen Zerrungen der Beinrückseite oder Leiste nicht ausführen."
    }
  },
  {
    id: "beinpendel_seitlich",
    name: "Beinpendel seitlich",
    auch: ["Lateral Leg Swings", "Side to Side Leg Swings", "Leg Swings Frontal"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "gesaess_mittel"],
    sekundaer: ["hueftbeuger"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    sport: ["laufen", "fussball", "golf"],
    einseitig: true,
    info: {
      kurz: "Seitliche Beinschwünge vor dem Körper: Das Bein pendelt quer von einer Seite zur anderen. Bereitet Adduktoren und seitliche Hüfte dynamisch auf Richtungswechsel und Seitschritte vor.",
      ausfuehrung: [
        "Stell dich frontal zu einer Wand und stütz dich mit beiden Händen auf Schulterhöhe ab.",
        "Das linke Standbein ist leicht gebeugt, das rechte Bein hängt locker.",
        "Schwing das rechte Bein quer vor dem Körper nach links und dann weit nach rechts zur Seite.",
        "Beginne mit kleinen Schwüngen und vergrößere den Umfang allmählich.",
        "Das Becken bleibt möglichst frontal zur Wand, der Oberkörper ruhig.",
        "Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Locker im Rhythmus weiteratmen.",
      fehler: [
        "Becken dreht stark mit: Becken frontal, Rumpf stabil.",
        "Zu schnell zu groß: langsam steigern.",
        "Standknie gestreckt durchgedrückt: leicht gebeugt lassen."
      ],
      vorteile: [
        "Erwärmt Adduktoren und seitliche Hüfte.",
        "Gute Vorbereitung auf seitliche Bewegungen und Richtungswechsel.",
        "Ergänzt die Beinpendel vor und zurück."
      ],
      tipps: [
        "Direkt nach den Beinpendeln vor und zurück ausführen.",
        "10 bis 15 Schwünge pro Bein."
      ],
      varianten: "Leichter: kleiner Umfang. Schwerer: größerer Umfang mit kurzer Pause am äußeren Punkt.",
      sicherheit: "Bei Leistenzerrung oder Leistenschmerzen auslassen."
    }
  },
  {
    id: "bein_kreisen_rueckenlage",
    name: "Beinkreisen in Rückenlage",
    auch: ["Supine Leg Circles", "Pilates Leg Circles", "Single Leg Circles"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "adduktoren"],
    sekundaer: ["bauch", "gesaess_mittel", "beinbeuger"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Klassische Pilates-Übung: In Rückenlage zeichnet ein gestrecktes Bein Kreise in die Luft, während das Becken ruhig liegen bleibt. Mobilisiert das Hüftgelenk und fordert die Rumpfstabilität.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Arme seitlich neben dem Körper, beide Beine lang.",
        "Streck das rechte Bein senkrecht nach oben, das linke Bein bleibt lang am Boden oder ist angewinkelt aufgestellt.",
        "Spann den Bauch an, damit das Becken stabil und flach liegt.",
        "Zeichne mit dem rechten Bein einen Kreis: über die Körpermitte nach links, nach unten, nach rechts außen und zurück nach oben.",
        "Halte die Kreise so groß, wie das Becken ruhig bleiben kann.",
        "Nach einigen Kreisen die Richtung wechseln, dann das Bein wechseln."
      ],
      atmung: "In der ersten Hälfte des Kreises einatmen, in der zweiten Hälfte ausatmen.",
      fehler: [
        "Becken rollt mit: Kreise verkleinern und Bauch anspannen.",
        "Bein zu schwer: Knie leicht beugen.",
        "Schultern und Nacken verspannt: Arme schwer auf den Boden drücken."
      ],
      vorteile: [
        "Mobilisiert die Hüfte in alle Richtungen.",
        "Kräftigt Rumpf und Hüftbeuger.",
        "Sehr gelenkschonend."
      ],
      tipps: [
        "Fünf Kreise pro Richtung und Bein.",
        "Mit angewinkeltem Standbein ist der Rücken besser geschützt."
      ],
      varianten: "Leichter: kleinere Kreise, Knie leicht gebeugt. Schwerer: größere Kreise mit ganz gestrecktem Standbein am Boden.",
      sicherheit: "Bei Rückenbeschwerden das andere Bein anwinkeln und die Kreise klein halten."
    }
  },
  // ---------- Hocke und Ausfallschritt-Positionen ----------
  {
    id: "tiefe_hocke",
    name: "Tiefe Hocke halten",
    auch: ["Deep Squat Hold", "Resting Squat", "Malasana", "Asian Squat"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "adduktoren"],
    sekundaer: ["waden", "ruecken_unten", "quadrizeps"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "tiefe_hocke_rotation",
    hinweis: "Fersen am Boden, wenn nötig Fersen unterlegen.",
    info: {
      kurz: "Ruhiges Verweilen in der tiefsten Hockposition mit den Fersen am Boden. Mobilisiert Hüfte, Sprunggelenke und unteren Rücken zugleich und ist eine natürliche Ruheposition des Menschen.",
      ausfuehrung: [
        "Stell die Füße etwas weiter als schulterbreit, die Fußspitzen zeigen leicht nach außen.",
        "Senke das Gesäß langsam zwischen die Fersen ab, so tief es geht, die Fersen bleiben am Boden.",
        "Führ die Hände vor der Brust zusammen und drück die Ellbogen sanft gegen die Innenseiten der Knie.",
        "Richte den Oberkörper so aufrecht wie möglich auf, der Brustkorb hebt sich.",
        "Verlagere das Gewicht langsam von links nach rechts und von vorn nach hinten, um verschiedene Bereiche zu spüren.",
        "Komm nach der vorgegebenen Zeit langsam über die Beine nach oben."
      ],
      atmung: "Ruhig und tief atmen, beim Ausatmen etwas tiefer in die Hocke sinken.",
      fehler: [
        "Fersen heben ab: Füße weiter auseinander, Fußspitzen weiter nach außen oder kleine Unterlage unter die Fersen.",
        "Knie fallen nach innen: Ellbogen schieben die Knie nach außen über die Zehen.",
        "Stark gerundeter Rücken: Brust nach vorn oben, notfalls an etwas festhalten."
      ],
      vorteile: [
        "Mobilisiert Hüftbeugung, Sprunggelenke und Adduktoren gleichzeitig.",
        "Verbessert die Tiefe und Haltung bei Kniebeugen.",
        "Kann bei langem Sitzen als Ausgleich angenehm sein."
      ],
      tipps: [
        "Täglich insgesamt ein paar Minuten, verteilt über den Tag, bringen oft mehr als eine lange Einheit.",
        "Wer nicht tief kommt, hält sich an einem Türrahmen oder Pfosten fest."
      ],
      varianten: "Leichter: an einem Türrahmen festhalten oder Fersen auf ein Brett. Schwerer: Gewicht vor der Brust halten oder Rotation mit einem Arm nach oben.",
      sicherheit: "Bei Knieschmerzen in starker Beugung oder nach Knieoperationen nur so tief, wie es angenehm ist."
    }
  },
  {
    id: "tiefe_hocke_gestuetzt",
    name: "Tiefe Hocke mit Festhalten",
    auch: ["Assisted Deep Squat Hold", "Supported Squat Hold", "TRX Deep Squat"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "adduktoren"],
    sekundaer: ["waden", "ruecken_unten"],
    geraete: [["schlingentrainer"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "tiefe_hocke",
    hinweis: "Ohne Gerät an einem Türrahmen oder Pfosten festhalten.",
    info: {
      kurz: "Tiefe Hocke, bei der du dich an einem Schlingentrainer, Türrahmen oder Pfosten festhältst. Das Festhalten erlaubt einen aufrechten Oberkörper und die Fersen am Boden, auch wenn die Beweglichkeit noch nicht reicht.",
      ausfuehrung: [
        "Greif die Griffe eines Schlingentrainers oder halte dich an einem Türrahmen oder Pfosten auf Brusthöhe fest.",
        "Stell die Füße etwas weiter als schulterbreit, die Fußspitzen leicht nach außen.",
        "Lehn dich leicht nach hinten in die Arme und senke das Gesäß langsam zwischen die Fersen ab.",
        "Halte die Arme lang, der Oberkörper bleibt aufrecht, die Fersen am Boden.",
        "Schiebe die Knie über die Zehen nach außen und atme ruhig in der Position.",
        "Zieh dich nach der Zeit mit den Armen und Beinen langsam nach oben."
      ],
      atmung: "Gleichmäßig und tief atmen, beim Ausatmen etwas tiefer sinken.",
      fehler: [
        "Mit den Armen ziehen statt sich hängen zu lassen: Arme lang lassen, sie halten nur.",
        "Knie fallen nach innen: Knie über die Fußspitzen ausrichten.",
        "Fersen heben ab: Füße breiter stellen."
      ],
      vorteile: [
        "Ermöglicht eine aufrechte tiefe Hocke auch bei wenig Beweglichkeit.",
        "Mobilisiert Hüfte und Sprunggelenke ohne Gleichgewichtsprobleme.",
        "Guter Einstieg in die freie tiefe Hocke."
      ],
      tipps: [
        "Je weniger du dich festhalten musst, desto näher bist du an der freien Hocke.",
        "Leichtes Wippen in der Position hilft beim Entspannen."
      ],
      varianten: "Leichter: weniger tief. Schwerer: freie tiefe Hocke ohne Halt.",
      sicherheit: "Befestigung des Schlingentrainers vorher prüfen. Bei Knieschmerzen nur so tief wie angenehm."
    }
  },
  {
    id: "tiefe_hocke_rotation",
    name: "Tiefe Hocke mit Armrotation",
    auch: ["Deep Squat with Rotation", "Squat T-Spine Rotation", "Malasana Twist"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "adduktoren"],
    sekundaer: ["oberer_ruecken", "schraege_bauch", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "In der tiefen Hocke streckst du abwechselnd einen Arm zur Decke und drehst den Oberkörper mit. Verbindet Hüft- und Sprunggelenkmobilität mit Rotation der Brustwirbelsäule.",
      ausfuehrung: [
        "Geh in die tiefe Hocke, die Füße etwas weiter als schulterbreit, die Fersen am Boden.",
        "Setz die linke Hand vor dir auf den Boden oder drück mit dem linken Ellbogen das linke Knie nach außen.",
        "Streck den rechten Arm in einem Bogen nach oben zur Decke und dreh den Oberkörper dabei nach rechts auf.",
        "Folge der Hand mit dem Blick und halte oben kurz.",
        "Führ den Arm zurück, setz die Hand ab und wiederhole auf der anderen Seite.",
        "Wechsle langsam ab, bis die Wiederholungen beider Seiten erreicht sind."
      ],
      atmung: "Beim Aufdrehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Gesäß hebt beim Drehen an: tief bleiben, nur der Oberkörper dreht.",
        "Fersen heben ab: Füße breiter stellen.",
        "Drehung nur aus dem Arm: Brustbein dreht mit zur Seite."
      ],
      vorteile: [
        "Verbindet Hüftmobilität mit Rotation des Oberkörpers.",
        "Gute kompakte Aufwärmübung für Kniebeugen und Rotationssport.",
        "Fordert Gleichgewicht in der Hocke."
      ],
      tipps: [
        "Stell dir vor, du willst mit der Brust zur Seite zeigen, nicht nur mit dem Arm.",
        "Drei bis sechs Wiederholungen pro Seite."
      ],
      varianten: "Leichter: Fersen unterlegen oder Gesäß auf einen niedrigen Block. Schwerer: am Ende drei Sekunden halten.",
      sicherheit: "Bei Knieschmerzen in starker Beugung nur auf einem erhöhten Sitz ausführen."
    }
  },
  {
    id: "goblet_squat_pry",
    name: "Goblet-Hocke mit Hebeln",
    auch: ["Goblet Squat Pry", "Goblet Squat Hold Pry", "Prying Goblet Squat"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "gesaess"],
    sekundaer: ["quadrizeps", "waden", "ruecken_unten"],
    geraete: [["kurzhantel"], ["kettlebell"], ["hantelscheibe"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    golf: 1,
    hinweis: "Leichtes Gewicht, es dient als Gegengewicht.",
    info: {
      kurz: "Belastete Mobilisation in der tiefen Hocke: Ein Gewicht vor der Brust hält dich als Gegengewicht aufrecht, mit den Ellbogen hebelst du die Knie nach außen. Bekannt aus dem Programm von Dan John.",
      ausfuehrung: [
        "Halte eine Kurzhantel oder Kettlebell senkrecht vor der Brust, die Ellbogen zeigen nach unten.",
        "Stell die Füße etwas weiter als schulterbreit, Fußspitzen leicht nach außen.",
        "Setz dich langsam in die tiefe Hocke, bis die Ellbogen die Innenseiten der Knie berühren.",
        "Drück mit den Ellbogen die Knie sanft nach außen und verlagere das Gewicht ein wenig von Seite zu Seite.",
        "Wippe leicht in der Tiefe, schiebe die Brust nach vorn und halte den Rücken lang.",
        "Komm nach der Zeit mit Druck durch die ganzen Füße nach oben."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen tiefer sinken. Nicht pressen.",
      fehler: [
        "Zu schweres Gewicht: Das Gewicht soll helfen, nicht belasten.",
        "Rücken rundet sich: Gewicht dicht an der Brust halten und Brust heben.",
        "Fersen heben ab: Füße breiter und mehr nach außen drehen."
      ],
      vorteile: [
        "Das Gegengewicht erleichtert eine aufrechte tiefe Hocke.",
        "Mobilisiert Adduktoren, Hüfte und Sprunggelenke.",
        "Ideal als Aufwärmen vor Kniebeugen."
      ],
      tipps: [
        "Etwa 8 bis 16 Kilogramm reichen für die meisten.",
        "Zwei bis drei Durchgänge von 30 Sekunden vor dem Kniebeugetraining."
      ],
      varianten: "Leichter: leichteres Gewicht und Fersen unterlegen. Schwerer: in der Hocke abwechselnd ein Knie zum Boden sinken lassen.",
      sicherheit: "Bei Knieschmerzen in starker Beugung nur so tief, wie es angenehm ist."
    }
  },
  {
    id: "hocke_zu_vorbeuge",
    name: "Hocke zur Vorbeuge",
    auch: ["Squat to Stand", "Toe Touch Squat", "Squat to Hamstring Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "adduktoren"],
    sekundaer: ["gesaess", "ruecken_unten", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    sport: ["laufen", "fussball", "golf"],
    info: {
      kurz: "Du greifst die Zehen, gehst in die tiefe Hocke und streckst dann die Beine bei gehaltenen Zehen. Verbindet Hockmobilität mit einer dynamischen Dehnung der Beinrückseite.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und beuge dich nach vorn, bis du mit den Händen deine Zehen oder Fußspitzen greifen kannst. Die Knie dürfen sich dabei beugen.",
        "Senke das Gesäß in die tiefe Hocke ab, die Ellbogen innen an den Knien, die Brust hebt sich.",
        "Halte die Zehen fest und streck langsam die Beine, bis du die Dehnung an der Beinrückseite spürst.",
        "Lass den Kopf locker hängen und halte kurz.",
        "Senke dich wieder in die Hocke ab, Brust hoch, und wiederhole.",
        "Nach der letzten Wiederholung aus der Vorbeuge langsam Wirbel für Wirbel aufrollen."
      ],
      atmung: "In der Hocke einatmen, beim Strecken der Beine ausatmen.",
      fehler: [
        "Zehen loslassen: Der Griff macht die Übung aus.",
        "Knie durchdrücken: Beine nur so weit strecken, wie es angenehm ist.",
        "Schnell hochschnellen: langsam und kontrolliert."
      ],
      vorteile: [
        "Mobilisiert Hüfte, Adduktoren und Beinrückseite in einer Bewegung.",
        "Effiziente Aufwärmübung vor Kniebeugen und Kreuzheben.",
        "Verbessert die Wahrnehmung für Hüftbeugung."
      ],
      tipps: [
        "Fünf bis acht langsame Wiederholungen reichen.",
        "Wer die Zehen nicht erreicht, greift die Knöchel oder Schienbeine."
      ],
      varianten: "Leichter: an den Schienbeinen greifen. Schwerer: in der Hocke abwechselnd einen Arm zur Decke drehen.",
      sicherheit: "Bei Bluthochdruck oder Schwindel langsam aufrollen. Bei Bandscheibenproblemen vorsichtig."
    }
  },
  {
    id: "worlds_greatest_stretch",
    name: "World's Greatest Stretch",
    auch: ["Worlds Greatest Stretch", "WGS", "Lunge with Rotation and Hamstring Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "adduktoren", "beinbeuger"],
    sekundaer: ["oberer_ruecken", "gesaess", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    golf: 2,
    sport: ["golf", "fussball", "laufen"],
    einseitig: true,
    hinweis: "Hüfte tief, Bewegung langsam und vollständig.",
    info: {
      kurz: "Bekannte Mehrphasenübung aus dem Ausfallschritt: Ellbogen zum Fuß, Arm zur Decke drehen, dann Beinrückseite dehnen. Mobilisiert Hüftbeuger, Adduktoren, Beinrückseite und Brustwirbelsäule in einem Ablauf.",
      ausfuehrung: [
        "Mach aus dem Stand einen großen Ausfallschritt mit dem rechten Bein nach vorn, das linke Bein bleibt hinten gestreckt.",
        "Setz die linke Hand neben dem rechten Fuß auf den Boden und senke den rechten Ellbogen innen am Fuß Richtung Boden.",
        "Dreh den Oberkörper nach rechts und streck den rechten Arm zur Decke, der Blick folgt der Hand.",
        "Führ die rechte Hand zurück neben den Fuß auf den Boden.",
        "Schiebe das Gesäß nach hinten, streck das vordere Bein und zieh die Fußspitze an, bis du die Dehnung an der rechten Beinrückseite spürst.",
        "Komm zurück in den Ausfallschritt, steh auf oder wechsle direkt die Seite."
      ],
      atmung: "In jeder Phase einmal tief aus- und einatmen, beim Drehen ausatmen.",
      fehler: [
        "Hüfte sinkt nicht tief: hinteres Bein lang und Gesäß des hinteren Beins anspannen.",
        "Drehung nur aus dem Arm: Brustkorb dreht sich zur Seite.",
        "Zu schnell durch die Phasen: jede Position kurz halten."
      ],
      vorteile: [
        "Mobilisiert viele Bereiche in einem einzigen Ablauf.",
        "Effizienter Bestandteil jedes Aufwärmens.",
        "Bereitet auf Sprints, Kniebeugen und Rotationssport vor.",
        "Fördert Koordination und Körpergefühl."
      ],
      tipps: [
        "Drei bis fünf Wiederholungen je Seite sind meist genug.",
        "Wenn die Hüfte zu steif ist, hinteres Knie absetzen."
      ],
      varianten: "Leichter: hinteres Knie am Boden. Schwerer: im Gehen vorwärts mit Ausfallschritten.",
      sicherheit: "Bei Handgelenksbeschwerden die Hand auf einem Block oder einer Faust abstützen.",
      golf: "Diese Übung ist ein Klassiker im Golf-Aufwärmen: Sie öffnet die Hüftbeuger für die Streckung im Durchschwung, mobilisiert die Brustwirbelsäule für die Schulterdrehung und dehnt die Beinrückseite für die Ansprechhaltung."
    }
  },
  {
    id: "spiderman_ausfallschritt",
    name: "Spiderman-Ausfallschritt",
    auch: ["Spiderman Lunge", "Spiderman Stretch", "Spiderman Lunge with Reach"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "adduktoren"],
    sekundaer: ["gesaess", "beinbeuger", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    golf: 1,
    sport: ["fussball", "laufen"],
    einseitig: true,
    info: {
      kurz: "Aus dem Liegestütz setzt du einen Fuß außen neben die Hand und senkst die Hüfte ab. Dehnt Hüftbeuger des hinteren Beins und Adduktoren des vorderen Beins und fordert die Rumpfstabilität.",
      ausfuehrung: [
        "Geh in den hohen Liegestütz, Hände unter den Schultern, Körper in einer Linie.",
        "Setz den rechten Fuß weit nach vorn außen neben die rechte Hand.",
        "Senke die Hüfte langsam ab, bis du die Dehnung vorn an der linken Hüfte und innen am rechten Oberschenkel spürst.",
        "Das linke Bein bleibt gestreckt, die Ferse drückt nach hinten.",
        "Halte ein bis zwei Sekunden und setz den Fuß zurück in den Liegestütz.",
        "Wechsle die Seite und wiederhole abwechselnd."
      ],
      atmung: "Beim Absenken der Hüfte ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Fuß landet nicht neben der Hand: weiter nach vorn steigen oder hinteres Knie absetzen.",
        "Hüfte hängt durch im Liegestütz: Bauch anspannen.",
        "Vorderes Knie fällt nach innen: Knie zeigt nach außen."
      ],
      vorteile: [
        "Dehnt Hüftbeuger und Adduktoren dynamisch.",
        "Fordert gleichzeitig Schultern und Rumpf.",
        "Effizientes Aufwärmen vor Beintraining und Sport."
      ],
      tipps: [
        "Mit der Hand neben dem vorderen Fuß kannst du den Ellbogen Richtung Boden sinken lassen.",
        "Fünf bis acht Wiederholungen je Seite."
      ],
      varianten: "Leichter: hinteres Knie absetzen. Schwerer: Arm zur Decke drehen oder im Krabbeln vorwärts ausführen.",
      sicherheit: "Bei Handgelenks- oder Schulterbeschwerden die Hände auf eine erhöhte Fläche stützen."
    }
  },
  {
    id: "echse",
    name: "Echse (tiefer Ausfallschritt mit Unterarmen)",
    auch: ["Lizard Pose", "Lizard Stretch", "Utthan Pristhasana"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "adduktoren"],
    sekundaer: ["gesaess", "beinbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Yoga-Haltung im tiefen Ausfallschritt, in der die Unterarme innen neben dem vorderen Fuß am Boden liegen. Öffnet die Hüfte intensiv: vorn die Adduktoren und das Gesäß, hinten den Hüftbeuger.",
      ausfuehrung: [
        "Starte im Vierfüßlerstand und setz den rechten Fuß außen neben die rechte Hand.",
        "Setz das linke Knie auf der Matte ab oder lass das linke Bein gestreckt.",
        "Wandere mit beiden Händen nach innen vom rechten Fuß und senke die Unterarme Stück für Stück zum Boden oder auf einen Block.",
        "Lass das rechte Knie leicht nach außen sinken, die Fußsohle bleibt am Boden.",
        "Halte die Position und lass die Hüfte mit jedem Atemzug weiter nach unten sinken.",
        "Komm über die Hände zurück und wechsle die Seite."
      ],
      atmung: "Ruhig und tief atmen, mit dem Ausatmen die Hüfte schwerer werden lassen.",
      fehler: [
        "Rundrücken: Brust nach vorn und Rücken lang, lieber auf den Händen bleiben.",
        "Vorderer Fuß dreht nach außen: Fuß zeigt nach vorn.",
        "Zu schnell in die Unterarmposition: über mehrere Atemzüge tiefer gehen."
      ],
      vorteile: [
        "Öffnet Hüftbeuger, Adduktoren und Gesäß in einer Position.",
        "Verbessert die Hüftbeugung für tiefe Kniebeugen.",
        "Gute Vorbereitung für Spagat-Übungen."
      ],
      tipps: [
        "Ein Block oder eine Hantelscheibe unter den Unterarmen macht die Haltung zugänglicher.",
        "Rolle für mehr Adduktorendehnung auf die Außenkante des vorderen Fußes."
      ],
      varianten: "Leichter: auf den Händen bleiben und hinteres Knie ablegen. Schwerer: hinteres Bein gestreckt und Unterarme am Boden.",
      sicherheit: "Bei Leistenschmerzen nur bis zur leichten Dehnung. Hinteres Knie polstern."
    }
  },
  {
    id: "glueckliches_baby",
    name: "Glückliches Baby",
    auch: ["Happy Baby Pose", "Ananda Balasana", "Happy Baby Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "gesaess"],
    sekundaer: ["beinbeuger", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Entspannende Hüftöffnung in Rückenlage: Du greifst die Fußsohlen und ziehst die Knie neben den Brustkorb. Dehnt Adduktoren, Gesäß und unteren Rücken sanft.",
      ausfuehrung: [
        "Leg dich auf den Rücken und zieh beide Knie zur Brust.",
        "Öffne die Knie etwas weiter als den Oberkörper und bring die Fußsohlen nach oben zur Decke, die Unterschenkel stehen senkrecht.",
        "Greif mit den Händen die Außenkanten der Füße oder die Knöchel.",
        "Zieh die Knie sanft nach unten neben den Brustkorb, Richtung Achseln.",
        "Lass das Kreuzbein und den Kopf auf der Matte, bei Bedarf leicht von Seite zu Seite schaukeln.",
        "Halte die Position und lass die Füße danach los."
      ],
      atmung: "Ruhig in den Bauch atmen und beim Ausatmen die Knie sanft tiefer ziehen.",
      fehler: [
        "Kreuzbein hebt ab: weniger stark ziehen.",
        "Unterschenkel nicht senkrecht: Fersen über die Knie bringen.",
        "Kopf hebt ab: Kopf und Nacken entspannt am Boden."
      ],
      vorteile: [
        "Dehnt Adduktoren und Gesäß sanft.",
        "Entspannt den unteren Rücken.",
        "Gut als Abschluss einer Einheit oder am Abend."
      ],
      tipps: [
        "Wenn du die Füße nicht erreichst, greif die Kniekehlen oder nimm ein Band.",
        "Sanftes Schaukeln wirkt wie eine kleine Rückenmassage."
      ],
      varianten: "Leichter: nur ein Bein gleichzeitig. Schwerer: Knie weiter zum Boden ziehen.",
      sicherheit: "In der späten Schwangerschaft nicht flach auf dem Rücken liegen."
    }
  },
  // ---------- Adduktoren ----------
  {
    id: "froschdehnung",
    name: "Froschdehnung",
    auch: ["Frog Stretch", "Frog Pose", "Mandukasana"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess"],
    geraete: [["matte"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    hinweis: "Knie gut polstern, Sprunggelenke auf Höhe der Knie.",
    info: {
      kurz: "Intensive Adduktorendehnung im Vierfüßlerstand mit weit gespreizten Knien. Die Unterschenkel liegen parallel, die Hüfte sinkt Richtung Boden. Eine der wirksamsten Dehnungen für die Innenseite der Oberschenkel.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand auf einer weichen Matte und stütz dich auf die Unterarme.",
        "Schiebe die Knie langsam so weit auseinander, wie es angenehm ist.",
        "Die Unterschenkel zeigen gerade nach hinten, die Sprunggelenke liegen auf Höhe der Knie, die Füße zeigen nach außen.",
        "Senke die Hüfte langsam nach unten Richtung Boden, bis du eine deutliche Dehnung innen an den Oberschenkeln spürst.",
        "Halte den Rücken neutral, kein Hohlkreuz und kein Rundrücken.",
        "Zum Lösen das Gewicht nach vorn auf die Unterarme verlagern und die Knie langsam zusammenführen."
      ],
      atmung: "Tief und langsam atmen, mit jedem Ausatmen die Hüfte einen Hauch tiefer sinken lassen.",
      fehler: [
        "Hüfte weit hinter den Knien: Dann ist es ein breiter Kindsitz, Hüfte auf Kniehöhe bringen.",
        "Knie ungepolstert: zusätzliche Matte oder Kissen unter die Knie.",
        "Zu weit gespreizt beim ersten Mal: Die Dehnung ist intensiv, langsam steigern."
      ],
      vorteile: [
        "Dehnt die Adduktoren intensiv.",
        "Verbessert die Hüftöffnung für breite Kniebeugen, Sumo-Kreuzheben und Kampfsport.",
        "Bereitet auf Seitspagat-Übungen vor."
      ],
      tipps: [
        "Mit Frosch-Wippen beginnen, dann in die statische Position wechseln.",
        "Ein bis zwei Minuten statisches Halten am Ende der Einheit."
      ],
      varianten: "Leichter: halber Frosch mit nur einem Bein seitlich oder Frosch-Wippen. Schwerer: Knie weiter auseinander, Brust Richtung Boden.",
      sicherheit: "Bei Leistenschmerzen, frischen Adduktorenzerrungen oder Knieproblemen innen auslassen oder sehr vorsichtig dosieren."
    }
  },
  {
    id: "frosch_wippen",
    name: "Frosch-Wippen",
    auch: ["Frog Rock", "Rocking Frog", "Dynamic Frog Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess", "hueftbeuger"],
    geraete: [["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1, handgelenk: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Dynamische Froschdehnung: Aus der Froschposition wippst du mit dem Gesäß nach hinten Richtung Fersen und wieder nach vorn. Sanfter Einstieg in die Adduktorendehnung, ideal zum Aufwärmen.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand auf einer weichen Matte und schieb die Knie weiter als hüftbreit auseinander.",
        "Die Unterschenkel zeigen nach hinten, die Füße nach außen.",
        "Stütz dich auf die Hände oder Unterarme und halte den Rücken lang.",
        "Schiebe das Gesäß langsam nach hinten Richtung Fersen, bis du die Dehnung innen an den Oberschenkeln spürst.",
        "Komm wieder nach vorn, bis die Hüfte über den Knien ist.",
        "Wippe in ruhigem Rhythmus und geh mit jeder Wiederholung etwas tiefer."
      ],
      atmung: "Beim Zurückschieben ausatmen, beim Vorkommen einatmen.",
      fehler: [
        "Rücken rundet sich: Brust nach vorn, Rücken neutral.",
        "Ruckartig wippen: fließend und kontrolliert.",
        "Knie rutschen weg: Matte mit Halt verwenden."
      ],
      vorteile: [
        "Mobilisiert die Adduktoren dynamisch.",
        "Gute Vorbereitung auf breite Kniebeugen und Sumo-Kreuzheben.",
        "Sanfter Einstieg vor der statischen Froschdehnung."
      ],
      tipps: [
        "10 bis 15 Wiederholungen mit langsamem Tempo.",
        "Knie mit jedem Satz einige Zentimeter weiter auseinander setzen."
      ],
      varianten: "Leichter: Knie enger. Schwerer: Knie weiter und am hinteren Punkt kurz halten.",
      sicherheit: "Bei Leistenbeschwerden kleinen Bewegungsumfang wählen. Knie gut polstern."
    }
  },
  {
    id: "schmetterling",
    name: "Schmetterling im Sitzen",
    auch: ["Butterfly Stretch", "Seated Butterfly", "Baddha Konasana", "Schneidersitz-Dehnung"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Klassische Adduktorendehnung im Sitzen: Die Fußsohlen liegen aneinander, die Knie sinken nach außen. Einfach, ohne Gerät und für fast jeden geeignet.",
      ausfuehrung: [
        "Setz dich auf den Boden und leg die Fußsohlen aneinander, die Knie fallen nach außen.",
        "Zieh die Füße so nah an den Körper, wie es angenehm ist, und halte sie mit den Händen an den Knöcheln.",
        "Richte die Wirbelsäule lang auf, das Gesäß bleibt am Boden.",
        "Lass die Knie entspannt Richtung Boden sinken.",
        "Für mehr Dehnung beuge dich mit geradem Rücken aus der Hüfte nach vorn.",
        "Halte die Position und streck die Beine danach langsam aus."
      ],
      atmung: "Ruhig weiteratmen und mit jedem Ausatmen etwas weiter aus der Hüfte nach vorn neigen.",
      fehler: [
        "Mit den Ellbogen die Knie stark nach unten drücken: sanft sinken lassen.",
        "Rundrücken beim Vorbeugen: Brust nach vorn, nicht Kopf zu den Füßen.",
        "Auf das Steißbein zurückkippen: auf ein Kissen setzen."
      ],
      vorteile: [
        "Dehnt die Adduktoren sanft.",
        "Für Einsteiger gut geeignet und überall möglich.",
        "Lässt sich gut mit Anspannen und Entspannen kombinieren."
      ],
      tipps: [
        "Füße weiter weg vom Körper bringt mehr Dehnung in den langen Adduktoren, näher am Körper mehr in der Leiste.",
        "Auf einem Kissen sitzen erleichtert das Aufrichten."
      ],
      varianten: "Leichter: Kissen unter die Knie oder Rücken an die Wand. Schwerer: Vorbeugen oder Anspannen und Entspannen.",
      sicherheit: "Bei Leistenschmerzen oder Knieschmerzen innen die Füße weiter vom Körper weg stellen."
    }
  },
  {
    id: "schmetterling_rueckenlage",
    name: "Schmetterling in Rückenlage",
    auch: ["Reclined Butterfly", "Supine Butterfly", "Supta Baddha Konasana"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Entspannte Adduktorendehnung im Liegen: Die Fußsohlen liegen aneinander, die Knie fallen nach außen, die Schwerkraft dehnt. Ideal zum Entspannen am Ende einer Einheit.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Knie gebeugt, die Füße stehen am Boden.",
        "Leg die Fußsohlen aneinander und lass die Knie langsam nach außen sinken.",
        "Die Arme liegen entspannt neben dem Körper oder auf dem Bauch.",
        "Lass das Gewicht der Beine wirken, ohne aktiv zu drücken.",
        "Halte die Position entspannt und atme ruhig.",
        "Führ die Knie zum Lösen mit den Händen zusammen und streck die Beine aus."
      ],
      atmung: "Tief in den Bauch atmen und bei jedem Ausatmen die Leisten weich werden lassen.",
      fehler: [
        "Starkes Hohlkreuz: Bauch leicht anspannen, Kreuzbein lang machen.",
        "Knie mit Kraft nach unten drücken: einfach sinken lassen.",
        "Zu starke Dehnung in der Leiste: Kissen unter die Knie."
      ],
      vorteile: [
        "Entspannte, passive Dehnung der Adduktoren.",
        "Gut für lange Haltezeiten und zur Entspannung.",
        "Für alle Altersgruppen geeignet."
      ],
      tipps: [
        "Zwei bis drei Minuten mit ruhiger Atmung zum Abschluss.",
        "Kissen oder Blöcke unter den Knien machen die Position sehr angenehm."
      ],
      varianten: "Leichter: Kissen unter den Knien. Schwerer: Füße näher zum Gesäß oder leichte Gewichte auf die Knie legen.",
      sicherheit: "Bei Leistenschmerzen Kissen unter die Knie legen."
    }
  },
  {
    id: "schmetterling_pnf",
    name: "Schmetterling mit Anspannen und Entspannen",
    auch: ["PNF Butterfly Stretch", "Contract-Relax Butterfly", "Butterfly PNF"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    hinweis: "Knie 5 bis 10 Sekunden gegen die Hände drücken, dann tiefer sinken.",
    info: {
      kurz: "Schmetterlingsdehnung nach dem Prinzip Anspannen und Entspannen: Du drückst die Knie gegen die Hände nach oben, lässt locker und sinkst tiefer. Kann kurzfristig mehr Beweglichkeit in den Adduktoren ermöglichen.",
      ausfuehrung: [
        "Setz dich in den Schmetterling, die Fußsohlen aneinander, und lass die Knie nach außen sinken.",
        "Leg die Hände auf die Innenseiten der Knie und halte die Dehnung etwa 20 Sekunden.",
        "Drück die Knie mit etwa halber Kraft nach oben gegen deine Hände, die Hände geben nicht nach. Halte 5 bis 10 Sekunden.",
        "Lass die Spannung los, atme aus und lass die Knie ein Stück tiefer sinken.",
        "Halte die neue Position 10 bis 20 Sekunden.",
        "Wiederhole den Ablauf zwei bis drei Mal."
      ],
      atmung: "Beim Anspannen ruhig weiteratmen, beim Lösen lang ausatmen und tiefer gehen.",
      fehler: [
        "Mit voller Kraft drücken: halbe Kraft reicht.",
        "Nach dem Lösen mit den Händen stark nachdrücken: Knie nur sinken lassen.",
        "Rundrücken: aufrecht bleiben."
      ],
      vorteile: [
        "Kann mehr Bewegungsumfang ermöglichen als reines Halten.",
        "Kräftigt die Adduktoren zugleich leicht.",
        "Einfach allein ohne Partner durchführbar."
      ],
      tipps: [
        "Nicht direkt vor Sprints oder Sprüngen, lieber danach.",
        "Zwei bis drei Zyklen reichen."
      ],
      varianten: "Leichter: kürzer anspannen. Schwerer: mit Vorneigung des Oberkörpers kombinieren.",
      sicherheit: "Bei Adduktorenzerrung oder Leistenschmerzen nicht ausführen."
    }
  },
  {
    id: "seitlicher_ausfallschritt_dehnung",
    name: "Seitlicher Ausfallschritt zur Dehnung",
    auch: ["Side Lunge Stretch", "Lateral Lunge Stretch", "Standing Groin Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess", "beinbeuger"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    sport: ["fussball", "laufen", "golf"],
    einseitig: true,
    info: {
      kurz: "Statische Adduktorendehnung im Stehen: Aus einem breiten Stand verlagerst du das Gewicht seitlich auf ein gebeugtes Bein, das andere bleibt gestreckt. Gut nach dem Laufen oder Fußballtraining.",
      ausfuehrung: [
        "Stell dich in einen breiten Stand, etwa doppelt schulterbreit, die Fußspitzen zeigen nach vorn oder leicht nach außen.",
        "Beuge das rechte Knie und schiebe das Gesäß nach hinten rechts, als würdest du dich seitlich hinsetzen.",
        "Das linke Bein bleibt gestreckt, die linke Fußsohle bleibt am Boden.",
        "Halte den Oberkörper aufrecht oder leicht nach vorn geneigt, die Hände liegen auf dem rechten Oberschenkel oder vor dir am Boden.",
        "Halte die Position, sobald du die Dehnung innen am linken Oberschenkel spürst.",
        "Verlagere das Gewicht zurück zur Mitte und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und beim Ausatmen ein wenig tiefer gehen.",
      fehler: [
        "Gebeugtes Knie fällt nach innen: Knie über den Zehen.",
        "Ferse des gebeugten Beins hebt ab: Gewicht auf die Ferse.",
        "Gestrecktes Bein dreht ein: Fußspitze zeigt nach vorn oder zur Decke."
      ],
      vorteile: [
        "Dehnt die Adduktoren ohne Matte.",
        "Gut als Teil des Abwärmens nach Lauf- und Mannschaftssport.",
        "Verbessert die Bewegungsfreiheit für Seitschritte."
      ],
      tipps: [
        "Zeigt die Fußspitze des gestreckten Beins zur Decke, wird die Dehnung stärker im unteren Bereich der Adduktoren.",
        "Dynamisch nutzbar als Kosaken-Kniebeuge."
      ],
      varianten: "Leichter: weniger breit, Hände auf einem Stuhl. Schwerer: tiefer gehen bis zur Kosaken-Kniebeuge.",
      sicherheit: "Bei Knieschmerzen im gebeugten Bein nur leicht beugen."
    }
  },
  {
    id: "kosaken_kniebeuge",
    name: "Kosaken-Kniebeuge",
    auch: ["Cossack Squat", "Cossack Squat Bodyweight"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "quadrizeps"],
    sekundaer: ["gesaess", "beinbeuger", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1, sprunggelenk: 1 },
    stufe: 2,
    golf: 1,
    sport: ["fussball", "golf"],
    schwerer: "kosaken_kniebeuge_gewicht",
    info: {
      kurz: "Seitliche, sehr tiefe Kniebeuge auf einem Bein, während das andere gestreckt zur Seite zeigt. Verbindet Adduktorendehnung mit Kraft und Mobilität in Hüfte und Sprunggelenk.",
      ausfuehrung: [
        "Stell dich in einen sehr breiten Stand, die Fußspitzen zeigen leicht nach außen.",
        "Verlagere das Gewicht nach rechts und setz dich tief in das rechte Bein, die rechte Ferse bleibt am Boden.",
        "Das linke Bein streckt sich, die linke Fußspitze dreht zur Decke und die Ferse bleibt am Boden.",
        "Halte den Oberkörper aufrecht, die Arme nach vorn als Gegengewicht.",
        "Drück dich über das rechte Bein zurück in die Mitte und gleite zur anderen Seite.",
        "Wechsle die Seiten ruhig und kontrolliert."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Ferse des tiefen Beins hebt ab: weniger tief oder Ferse unterlegen.",
        "Oberkörper kippt weit nach vorn: Arme nach vorn strecken.",
        "Knie fällt nach innen: Knie über den Zehen."
      ],
      vorteile: [
        "Dehnt die Adduktoren dynamisch unter Last des Körpergewichts.",
        "Kräftigt Beine und Hüfte im großen Bewegungsumfang.",
        "Verbessert die Bewegungsfreiheit für seitliche Bewegungen im Sport."
      ],
      tipps: [
        "Anfangs nur so tief, wie es kontrolliert geht. An einem Pfosten festhalten hilft.",
        "Fünf bis acht Wiederholungen pro Seite."
      ],
      varianten: "Leichter: an einem Pfosten festhalten oder weniger tief. Schwerer: mit Gewicht vor der Brust.",
      sicherheit: "Bei Knieschmerzen nur halbe Tiefe. Bei Leistenbeschwerden vorsichtig."
    }
  },
  {
    id: "kosaken_kniebeuge_gewicht",
    name: "Kosaken-Kniebeuge mit Gewicht",
    auch: ["Goblet Cossack Squat", "Weighted Cossack Squat", "Kettlebell Cossack Squat"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "quadrizeps"],
    sekundaer: ["gesaess", "beinbeuger"],
    geraete: [["kurzhantel"], ["kettlebell"], ["hantelscheibe"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1, sprunggelenk: 1 },
    stufe: 3,
    golf: 1,
    info: {
      kurz: "Kosaken-Kniebeuge mit einem Gewicht vor der Brust. Das Gewicht dient als Gegengewicht und erlaubt eine aufrechtere, tiefere Position. Gleichzeitig wird die Belastung in der Dehnposition erhöht (belastetes Dehnen).",
      ausfuehrung: [
        "Halte eine Kurzhantel oder Kettlebell senkrecht vor der Brust und stell dich in einen sehr breiten Stand.",
        "Verlagere das Gewicht nach rechts und setz dich langsam tief in das rechte Bein.",
        "Das linke Bein bleibt gestreckt, die Fußspitze zeigt nach oben.",
        "Halte die tiefste Position eine Sekunde, der Oberkörper bleibt aufrecht.",
        "Drück dich kontrolliert zurück zur Mitte und gleite zur anderen Seite.",
        "Wechsle die Seiten mit ruhigem Tempo."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu schweres Gewicht: Die Tiefe ist wichtiger als die Last.",
        "Ferse des tiefen Beins hebt ab: weniger tief oder Ferse unterlegen.",
        "Rundrücken: Gewicht nah am Körper, Brust hoch."
      ],
      vorteile: [
        "Kräftigt die Adduktoren in der gedehnten Position.",
        "Gegengewicht erleichtert eine aufrechte Haltung.",
        "Verbindet Beweglichkeit und Kraft für seitliche Bewegungen."
      ],
      tipps: [
        "Starte mit 4 bis 8 Kilogramm.",
        "Langsames Absenken in drei Sekunden steigert den Dehnreiz."
      ],
      varianten: "Leichter: leichteres Gewicht oder ohne Gewicht. Schwerer: schwereres Gewicht oder Pause unten.",
      sicherheit: "Bei Knie- oder Leistenschmerzen ohne Gewicht arbeiten."
    }
  },
  {
    id: "adduktoren_rock_back",
    name: "Adduktoren-Rock-Back im Kniestand",
    auch: ["Adductor Rock Back", "Quadruped Adductor Rock", "Half Frog Rock Back"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["beinbeuger", "gesaess"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { knie: 1, handgelenk: 1 },
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Aus dem Vierfüßlerstand streckst du ein Bein gerade zur Seite und wippst mit dem Gesäß nach hinten. Mobilisiert die Adduktoren dynamisch und ist ein Klassiker im Aufwärmen.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, Hände unter den Schultern, Knie unter der Hüfte.",
        "Streck das rechte Bein gerade zur Seite aus, der Fuß steht flach am Boden, die Fußspitze zeigt nach vorn.",
        "Halte den Rücken gerade und den Bauch leicht angespannt.",
        "Schiebe das Gesäß langsam nach hinten Richtung linke Ferse, bis du die Dehnung innen am rechten Oberschenkel spürst.",
        "Komm zurück in den Vierfüßlerstand und wiederhole rhythmisch.",
        "Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Zurückschieben ausatmen, beim Vorkommen einatmen.",
      fehler: [
        "Rücken rundet sich: nur so weit zurück, wie der Rücken gerade bleibt.",
        "Gestrecktes Bein beugt sich: Knie gestreckt lassen.",
        "Fuß dreht nach oben: Fußsohle bleibt am Boden."
      ],
      vorteile: [
        "Mobilisiert die Adduktoren einseitig und gezielt.",
        "Fordert gleichzeitig die Rumpfstabilität.",
        "Gute Vorbereitung auf Kniebeugen, Kreuzheben und Seitwärtsbewegungen."
      ],
      tipps: [
        "8 bis 12 Wiederholungen pro Seite.",
        "Fußspitze des gestreckten Beins nach oben drehen, um die Beinrückseite mehr zu dehnen."
      ],
      varianten: "Leichter: gestrecktes Bein leicht beugen. Schwerer: am hinteren Punkt halten oder Fußspitze nach oben.",
      sicherheit: "Bei Handgelenksbeschwerden auf den Unterarmen ausführen."
    }
  },
  {
    id: "adduktoren_kniestand",
    name: "Halber Frosch im Kniestand",
    auch: ["Half-Kneeling Adductor Stretch", "Kneeling Adductor Stretch", "Half Frog"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["beinbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Statische Adduktorendehnung im aufrechten Kniestand: Ein Bein ist gestreckt zur Seite aufgestellt, du schiebst die Hüfte zur Gegenseite. Sanfter als die Froschdehnung und einseitig gut steuerbar.",
      ausfuehrung: [
        "Knie dich aufrecht auf die Matte, das linke Knie unter der Hüfte.",
        "Streck das rechte Bein gerade zur Seite aus, der Fuß steht flach am Boden, die Fußspitze zeigt nach vorn.",
        "Leg die Hände in die Hüfte oder stütz sie vor dir auf den Boden.",
        "Schiebe die Hüfte langsam nach links, weg vom gestreckten Bein, bis du die Dehnung innen am rechten Oberschenkel spürst.",
        "Halte die Position, Oberkörper aufrecht und Becken nach vorn ausgerichtet.",
        "Löse die Position und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und beim Ausatmen etwas tiefer gehen.",
      fehler: [
        "Becken dreht sich: Becken bleibt frontal.",
        "Gestrecktes Knie beugt sich: Bein lang lassen.",
        "Fuß dreht nach außen: Fußspitze nach vorn."
      ],
      vorteile: [
        "Dehnt die Adduktoren einseitig und gezielt.",
        "Weniger intensiv als die Froschdehnung.",
        "Gut nach Fußball, Laufen und Beintraining."
      ],
      tipps: [
        "Für mehr Wirkung den Oberkörper aus der Hüfte leicht nach vorn neigen.",
        "Das gestreckte Bein etwas weiter zur Seite stellen, um die Intensität zu erhöhen."
      ],
      varianten: "Leichter: weniger weit zur Seite. Schwerer: Rock-Back nach hinten oder Oberkörper nach vorn.",
      sicherheit: "Bei Leistenschmerzen nur leicht dehnen. Knie polstern."
    }
  },
  {
    id: "adduktoren_band_rueckenlage",
    name: "Adduktoren dehnen in Rückenlage mit Band",
    auch: ["Supine Adductor Stretch with Strap", "Lying Groin Stretch with Band", "Reclined Hand to Big Toe Side"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["beinbeuger"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "In Rückenlage führst du ein gestrecktes Bein mit einem Band zur Seite. Dehnt die langen Adduktoren und den inneren Teil der Beinrückseite, während der Rücken entspannt am Boden liegt.",
      ausfuehrung: [
        "Leg dich auf den Rücken und leg ein Band oder einen Gurt um den rechten Fuß.",
        "Streck das rechte Bein senkrecht nach oben, das linke Bein liegt lang am Boden.",
        "Nimm beide Bandenden in die rechte Hand.",
        "Führ das gestreckte rechte Bein langsam zur Seite nach außen Richtung Boden.",
        "Halte die linke Beckenseite mit der linken Hand am Boden, damit das Becken nicht mitrollt.",
        "Halte die Position, führ das Bein zurück zur Mitte und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen das Bein ein Stück weiter sinken lassen.",
      fehler: [
        "Becken rollt mit: Gegenseite mit der Hand fixieren.",
        "Knie beugt sich: Bein gestreckt halten.",
        "Bein fällt unkontrolliert: mit dem Band führen."
      ],
      vorteile: [
        "Dehnt die Adduktoren entspannt im Liegen.",
        "Rücken ist geschützt und entlastet.",
        "Gut kombinierbar mit Dehnungen der Beinrückseite in derselben Lage."
      ],
      tipps: [
        "Direkt nach der Beinrückseitendehnung mit Band ausführen: Bein einfach zur Seite führen.",
        "Kissen unter dem seitlichen Bein für längeres entspanntes Halten."
      ],
      varianten: "Leichter: Knie leicht beugen. Schwerer: Bein weiter Richtung Kopf und zur Seite führen.",
      sicherheit: "Bei Leistenschmerzen nur bis zu einer leichten Dehnung."
    }
  },
  {
    id: "adduktoren_rolle",
    name: "Innenseite Oberschenkel ausrollen mit der Faszienrolle",
    auch: ["Adductor Foam Rolling", "Foam Roll Adductors", "Inner Thigh Foam Roll"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Selbstmassage der Adduktoren mit der Faszienrolle in Bauchlage, das Bein seitlich auf der Rolle. Kann das Spannungsgefühl an der Innenseite des Oberschenkels verringern.",
      ausfuehrung: [
        "Leg dich auf den Bauch und stütz dich auf die Unterarme.",
        "Leg die Rolle parallel zum Körper neben dich und leg das rechte Bein angewinkelt seitlich darauf, die Innenseite des Oberschenkels liegt auf der Rolle.",
        "Beginne knapp oberhalb des Knies und roll langsam Richtung Leiste, indem du den Körper seitlich verschiebst.",
        "Bleib an empfindlichen Stellen 20 bis 30 Sekunden und beuge und strecke langsam das Knie.",
        "Roll nur bis kurz vor die Leiste und wieder zurück.",
        "Wechsle nach ein bis zwei Minuten die Seite."
      ],
      atmung: "Ruhig weiteratmen und bei unangenehmem Druck lang ausatmen.",
      fehler: [
        "Zu nah an die Leiste rollen: einige Zentimeter Abstand halten.",
        "Zu schnell: langsam rollen und verweilen.",
        "Hängende Hüfte: Bauch leicht anspannen."
      ],
      vorteile: [
        "Kann das Spannungsgefühl in den Adduktoren verringern.",
        "Gute Vorbereitung auf Adduktorendehnungen.",
        "Kann nach Fußball und Beintraining angenehm sein."
      ],
      tipps: [
        "Anschließend Frosch-Wippen oder Rock-Back ausführen.",
        "Eine weichere Rolle wählen, wenn es zu intensiv ist."
      ],
      varianten: "Leichter: weniger Gewicht auf das Bein. Schwerer: festere Rolle.",
      sicherheit: "Nicht bei frischen Zerrungen oder Blutergüssen. Bei Krampfadern auslassen."
    }
  },
  // ---------- Grätsche, Pancake, Seitspagat ----------
  {
    id: "pancake",
    name: "Pancake-Dehnung im Grätschsitz",
    auch: ["Pancake Stretch", "Straddle Forward Fold", "Seated Wide-Leg Forward Bend", "Upavistha Konasana"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "beinbeuger"],
    sekundaer: ["ruecken_unten", "gesaess"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 2,
    hinweis: "Becken nach vorn kippen, nicht den Rücken rund ziehen.",
    info: {
      kurz: "Vorbeuge im weiten Grätschsitz, bei der das Becken nach vorn kippt und die Brust Richtung Boden sinkt. Dehnt Adduktoren und Beinrückseite gleichzeitig und ist eine Grundübung im Beweglichkeitstraining.",
      ausfuehrung: [
        "Setz dich auf den Boden und öffne die gestreckten Beine so weit, wie es angenehm ist. Die Kniescheiben und Zehen zeigen zur Decke.",
        "Setz dich bei Bedarf auf ein Kissen, damit das Becken leichter nach vorn kippen kann.",
        "Richte die Wirbelsäule lang auf und leg die Hände vor dir auf den Boden.",
        "Kippe das Becken nach vorn und wandere mit den Händen langsam nach vorn, der Rücken bleibt möglichst lang.",
        "Halte die Position, sobald du eine deutliche Dehnung innen und hinten an den Oberschenkeln spürst.",
        "Komm langsam über die Hände wieder hoch und schließ die Beine."
      ],
      atmung: "Ruhig weiteratmen, mit jedem Ausatmen ein kleines Stück weiter nach vorn wandern.",
      fehler: [
        "Rundrücken statt Beckenkippung: auf ein Kissen setzen, Brust nach vorn schieben.",
        "Knie drehen nach innen: Kniescheiben zeigen zur Decke.",
        "Mit Schwung nach vorn: langsam und ruhig."
      ],
      vorteile: [
        "Dehnt Adduktoren und Beinrückseite gleichzeitig.",
        "Verbessert die Beckenkippung, wichtig für Kreuzheben und tiefe Kniebeugen.",
        "Grundlage für Seitspagat und Turnelemente."
      ],
      tipps: [
        "Ein Kissen oder gefaltete Matte unter dem Gesäß ist für die meisten der Schlüssel.",
        "Spür bewusst, wie die Bewegung aus der Hüfte kommt."
      ],
      varianten: "Leichter: auf einem erhöhten Sitz, Beine weniger weit. Schwerer: gewichteter Pancake oder Anspannen und Entspannen.",
      sicherheit: "Bei Bandscheibenproblemen nicht mit rundem Rücken nach vorn ziehen. Bei Leistenschmerzen Beine weniger weit."
    }
  },
  {
    id: "pancake_gewicht",
    name: "Pancake mit Gewicht (Grätsch-Jefferson)",
    auch: ["Weighted Pancake", "Loaded Pancake Stretch", "Seated Straddle Jefferson Curl", "Pancake Good Morning"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren", "beinbeuger"],
    sekundaer: ["ruecken_unten", "gesaess"],
    geraete: [["kurzhantel"], ["kettlebell"], ["hantelscheibe"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 3,
    hinweis: "Leichtes Gewicht, langsam nach vorn sinken.",
    info: {
      kurz: "Belastete Dehnung im Grätschsitz: Ein Gewicht vor der Brust zieht dich nach vorn in den Pancake, ähnlich dem Jefferson Curl, nur im Sitzen. Kräftigt Adduktoren und Beinrückseite in der Dehnposition.",
      ausfuehrung: [
        "Setz dich in einen weiten Grätschsitz, die Knie zeigen zur Decke, eventuell auf einem Kissen.",
        "Halte eine Kurzhantel, Kettlebell oder Hantelscheibe mit beiden Händen vor der Brust.",
        "Kippe das Becken nach vorn und lass dich vom Gewicht langsam nach vorn ziehen.",
        "Lass das Gewicht in der tiefsten Position Richtung Boden sinken und halte zwei bis drei Sekunden.",
        "Richte dich mit aktiver Kraft aus Hüfte und Rücken langsam wieder auf.",
        "Wiederhole die vorgegebene Anzahl ruhig und kontrolliert."
      ],
      atmung: "Beim Absinken ausatmen, beim Aufrichten einatmen.",
      fehler: [
        "Zu schweres Gewicht: Mit 2 bis 5 Kilogramm beginnen.",
        "Ruckartiges Federn: langsames, gleichmäßiges Absinken.",
        "Kein aktives Aufrichten: Das Hochkommen aus eigener Kraft gehört dazu."
      ],
      vorteile: [
        "Kräftigt Adduktoren und Beinrückseite in der gedehnten Position.",
        "Kann Fortschritte im Pancake beschleunigen, wenn passives Dehnen stagniert.",
        "Kräftigt den Rücken in der Vorbeuge."
      ],
      tipps: [
        "Zwei bis drei Sätze mit 6 bis 10 langsamen Wiederholungen.",
        "Das Gewicht darf weit vor dir auf den Boden sinken, der Hebel macht den Unterschied."
      ],
      varianten: "Leichter: ohne Gewicht oder Gewicht nah am Körper. Schwerer: Gewicht mit gestreckten Armen weiter vorn halten.",
      sicherheit: "Bei Bandscheibenproblemen oder akuten Rückenschmerzen nicht ausführen. Gewicht langsam steigern."
    }
  },
  {
    id: "graetsche_vorbeuge_stehend",
    name: "Grätschstand mit Vorbeuge",
    auch: ["Wide-Leg Standing Forward Fold", "Prasarita Padottanasana", "Standing Straddle Stretch"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "adduktoren"],
    sekundaer: ["ruecken_unten", "waden"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Vorbeuge im breiten Grätschstand: Die Hände wandern zum Boden, der Kopf hängt nach unten. Dehnt Beinrückseite und Adduktoren im Stehen, ohne Matte.",
      ausfuehrung: [
        "Stell die Füße etwa eine Beinlänge auseinander, die Fußspitzen zeigen nach vorn oder leicht nach innen.",
        "Leg die Hände in die Hüfte und mach den Rücken lang.",
        "Kippe aus der Hüfte nach vorn, der Rücken bleibt zuerst lang.",
        "Setz die Hände unter den Schultern auf den Boden oder auf Blöcke und lass den Oberkörper locker hängen.",
        "Verlagere das Gewicht leicht auf die Fußballen, damit die Hüfte über den Füßen bleibt.",
        "Halte die Position und richte dich mit langem Rücken langsam auf."
      ],
      atmung: "Ruhig weiteratmen und bei jedem Ausatmen den Oberkörper schwerer werden lassen.",
      fehler: [
        "Hüfte wandert nach hinten: Gewicht nach vorn über die Füße.",
        "Füße drehen nach außen: Fußspitzen nach vorn.",
        "Zu schnell aufrichten: Schwindel vermeiden, langsam hoch."
      ],
      vorteile: [
        "Dehnt Beinrückseite und Adduktoren gleichzeitig.",
        "Lässt die Wirbelsäule sanft hängen und entlastet.",
        "Ohne Matte überall möglich."
      ],
      tipps: [
        "Mit den Händen die Fußknöchel greifen und den Oberkörper sanft tiefer ziehen.",
        "Für Rotation eine Hand am Boden lassen, die andere zur Decke drehen."
      ],
      varianten: "Leichter: Hände auf einem Stuhl oder Blöcken. Schwerer: Kopf Richtung Boden, Hände greifen die Knöchel.",
      sicherheit: "Bei Bluthochdruck, Schwindel oder Augenproblemen Kopf nicht lange nach unten hängen lassen."
    }
  },
  {
    id: "graetsche_wand",
    name: "Grätsche an der Wand in Rückenlage",
    auch: ["Wall Straddle Stretch", "Wall Splits", "Legs Up the Wall Straddle"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["beinbeuger"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Passive Adduktorendehnung: Du liegst auf dem Rücken, das Gesäß an der Wand, und lässt die gestreckten Beine an der Wand zur Seite auseinandergleiten. Die Schwerkraft dehnt, du kannst völlig entspannen.",
      ausfuehrung: [
        "Setz dich seitlich direkt an eine Wand und dreh dich so auf den Rücken, dass das Gesäß die Wand berührt und die Beine gestreckt an der Wand nach oben zeigen.",
        "Rück mit dem Gesäß so nah wie möglich an die Wand.",
        "Lass die gestreckten Beine langsam an der Wand zur Seite auseinandergleiten.",
        "Entspann die Beine vollständig und lass die Schwerkraft arbeiten.",
        "Halte die Position mehrere Minuten, die Arme liegen entspannt neben dir.",
        "Führ die Beine zum Lösen mit den Händen zusammen und roll dich zur Seite ab."
      ],
      atmung: "Tief und ruhig atmen, bei jedem Ausatmen die Beine schwerer werden lassen.",
      fehler: [
        "Gesäß zu weit von der Wand: näher heranrücken.",
        "Beine aktiv auseinanderdrücken: einfach sinken lassen.",
        "Zu lange in starker Dehnung: Die Beine können kribbeln, dann kurz zusammenführen."
      ],
      vorteile: [
        "Sehr entspannte Adduktorendehnung für lange Haltezeiten.",
        "Rücken liegt flach und entlastet.",
        "Hervorragende Vorbereitung für den Seitspagat."
      ],
      tipps: [
        "Zwei bis fünf Minuten am Abend, zum Beispiel beim Lesen oder Musikhören.",
        "Leichte Gewichtsmanschetten an den Knöcheln verstärken die Dehnung."
      ],
      varianten: "Leichter: Knie leicht beugen. Schwerer: leichte Gewichte an den Knöcheln oder Anspannen und Entspannen.",
      sicherheit: "Bei Kribbeln oder Taubheit in den Beinen die Position lösen. In der Spätschwangerschaft nicht flach liegen."
    }
  },
  {
    id: "graetsche_seitbeuge",
    name: "Grätschsitz mit Seitneigung",
    auch: ["Seated Straddle Side Bend", "Parivrtta Upavistha Konasana", "Side Straddle Reach"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "adduktoren"],
    sekundaer: ["schraege_bauch", "latissimus"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Im Grätschsitz neigst du dich mit dem Oberkörper seitlich über ein Bein und greifst mit dem gegenüberliegenden Arm über den Kopf. Dehnt die Beinrückseite, die Adduktoren und die seitliche Flanke.",
      ausfuehrung: [
        "Setz dich in einen weiten Grätschsitz, die Kniescheiben zeigen zur Decke.",
        "Richte dich aufrecht auf und dreh den Oberkörper leicht zum rechten Bein.",
        "Leg den rechten Unterarm innen am rechten Bein ab oder greif den Fuß.",
        "Streck den linken Arm über den Kopf in Richtung rechter Fuß und neige dich zur Seite.",
        "Halte die Position, beide Sitzbeinhöcker bleiben am Boden.",
        "Richte dich auf und wechsle die Seite."
      ],
      atmung: "In die gedehnte Flanke einatmen und beim Ausatmen tiefer zur Seite sinken.",
      fehler: [
        "Gegenseite des Gesäßes hebt ab: weniger tief neigen.",
        "Oberkörper fällt nach vorn: Brust bleibt zur Seite geöffnet.",
        "Knie dreht ein: Kniescheiben zur Decke."
      ],
      vorteile: [
        "Dehnt Beinrückseite, Adduktoren und Flanke gleichzeitig.",
        "Einfach ohne Geräte.",
        "Bereitet den Pancake vor."
      ],
      tipps: [
        "Ein Kissen unter dem Gesäß erleichtert das Aufrichten.",
        "Im Wechsel mit dem Pancake ausführen."
      ],
      varianten: "Leichter: Knie des Beins, über das du dich neigst, leicht beugen. Schwerer: Hand greift den Fuß, Oberkörper liegt fast auf dem Bein.",
      sicherheit: "Bei Rückenbeschwerden die Neigung klein halten."
    }
  },
  {
    id: "seitspagat_gleiten",
    name: "Seitspagat-Gleiten mit Gleitscheiben",
    auch: ["Slider Middle Split", "Sliding Side Split", "Slider Straddle Slide"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["gesaess_mittel", "beinbeuger"],
    geraete: [["gleitscheiben"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 2,
    hinweis: "Hände auf einer Bank oder Box abstützen.",
    info: {
      kurz: "Progression zum Seitspagat: Mit Gleitscheiben unter den Füßen gleitest du kontrolliert in eine weite Grätsche und ziehst die Beine wieder zusammen. Kräftigt die Adduktoren aktiv in der Dehnung.",
      ausfuehrung: [
        "Stell dich mit beiden Füßen auf je eine Gleitscheibe auf glattem Boden, vor dir eine Bank, Box oder ein stabiler Stuhl.",
        "Stütz die Hände auf die Bank, der Oberkörper ist leicht nach vorn geneigt.",
        "Lass die Füße langsam seitlich auseinandergleiten, bis du eine deutliche Dehnung innen an den Oberschenkeln spürst.",
        "Halte kurz und spann die Adduktoren an, als würdest du die Füße zusammenziehen.",
        "Zieh die Beine aus eigener Kraft wieder zusammen, die Hände unterstützen nur so viel wie nötig.",
        "Wiederhole und geh mit jeder Wiederholung etwas weiter."
      ],
      atmung: "Beim Auseinandergleiten einatmen, beim Zusammenziehen ausatmen.",
      fehler: [
        "Unkontrolliert auseinanderrutschen: Gewicht auf die Hände, langsam gleiten.",
        "Knie drehen ein: Kniescheiben zeigen nach vorn.",
        "Nur mit den Armen zurückziehen: Beine arbeiten aktiv."
      ],
      vorteile: [
        "Verbindet Dehnung mit Kraft der Adduktoren am Ende des Bewegungsumfangs.",
        "Sichere Progression zum Seitspagat.",
        "Kann helfen, die Adduktoren widerstandsfähiger zu machen."
      ],
      tipps: [
        "Starte mit kleinem Umfang und steigere über Wochen.",
        "Zwei bis drei Sätze mit 6 bis 10 langsamen Wiederholungen."
      ],
      varianten: "Leichter: mehr Gewicht auf den Händen. Schwerer: Hände auf einer niedrigeren Fläche oder freihändig.",
      sicherheit: "Bei Adduktorenzerrung oder Leistenschmerzen auslassen. Nur auf glattem, sicherem Boden."
    }
  },
  {
    id: "seitspagat",
    name: "Seitspagat-Halten",
    auch: ["Middle Split", "Side Split", "Straddle Split", "Spagat seitlich"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["adduktoren"],
    sekundaer: ["beinbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 2, knie: 1 },
    stufe: 3,
    hinweis: "Nur gut aufgewärmt, Hände stützen Gewicht ab.",
    info: {
      kurz: "Halten der weitestmöglichen Grätsche im Stand mit Händen oder Unterarmen am Boden. Das Ziel vieler Beweglichkeitsprogramme und eine intensive Dehnung für die Adduktoren.",
      ausfuehrung: [
        "Wärme dich gründlich auf, zum Beispiel mit Frosch-Wippen und Seitspagat-Gleiten.",
        "Stell dich in eine breite Grätsche, die Fußspitzen zeigen nach vorn, und stütz die Hände vor dir auf den Boden oder auf Blöcke.",
        "Lass die Füße langsam weiter auseinandergleiten, das Gewicht liegt zu einem guten Teil auf den Händen.",
        "Kippe das Becken leicht nach vorn, die Hüfte bleibt auf einer Linie mit den Füßen.",
        "Halte die Position an der Grenze einer deutlichen, aber gut erträglichen Dehnung.",
        "Zum Lösen das Gewicht auf die Hände nehmen und die Beine langsam zusammenziehen oder ins Sitzen abrollen."
      ],
      atmung: "Ruhig und tief atmen, nicht die Luft anhalten. Mit dem Ausatmen locker lassen.",
      fehler: [
        "Hüfte weit hinter den Füßen: Becken nach vorn über die Füße bringen.",
        "Kalt in den Spagat: immer vorher aufwärmen.",
        "Unkontrolliertes Absinken: Hände tragen Gewicht, langsam tiefer."
      ],
      vorteile: [
        "Maximale Dehnung der Adduktoren.",
        "Zeigt deinen Fortschritt im Beweglichkeitstraining deutlich.",
        "Nützlich für Kampfsport, Tanz und Turnen."
      ],
      tipps: [
        "Socken auf glattem Boden erleichtern das Gleiten, auf Matte bleibst du sicherer stehen.",
        "Fortschritt braucht Monate. Regelmäßigkeit ist wichtiger als Intensität."
      ],
      varianten: "Leichter: Grätsche an der Wand oder Seitspagat-Gleiten. Schwerer: Brust Richtung Boden, Unterarme ablegen.",
      sicherheit: "Bei Hüftproblemen, Leistenschmerzen oder Knieproblemen innen nicht ausführen. Niemals in Schmerz hineinziehen."
    }
  },
  {
    id: "pancake_beinheben",
    name: "Beinheben im Grätschsitz",
    auch: ["Straddle Leg Lifts", "Pancake Leg Lifts", "Seated Straddle Lifts"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "gesaess_mittel"],
    sekundaer: ["quadrizeps", "bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    info: {
      kurz: "Aktive Beweglichkeitsübung aus dem Calisthenics: Im aufrechten Grätschsitz hebst du die gestreckten Beine einige Zentimeter vom Boden. Trainiert die Kraft, um die gewonnene Grätschweite aktiv zu halten.",
      ausfuehrung: [
        "Setz dich aufrecht in einen weiten Grätschsitz, die Kniescheiben zeigen zur Decke.",
        "Stütz die Hände vor dir zwischen den Beinen auf den Boden.",
        "Kippe das Becken nach vorn und richte den Oberkörper lang auf.",
        "Heb beide gestreckten Beine einige Zentimeter vom Boden ab, die Knie bleiben gestreckt.",
        "Halte oben kurz und senke die Beine langsam wieder ab.",
        "Wiederhole die vorgegebene Anzahl, auch abwechselnd einbeinig möglich."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper lehnt nach hinten: aufrecht bleiben, Hände vorn.",
        "Knie beugen sich: Beine gestreckt halten.",
        "Füße drehen ein: Zehen zur Decke."
      ],
      vorteile: [
        "Kräftigt Hüftbeuger und seitliche Hüftmuskulatur in der Endposition.",
        "Macht passive Grätschweite aktiv nutzbar.",
        "Gute Ergänzung zum Pancake."
      ],
      tipps: [
        "Wenn beide Beine nicht abheben, mit einem Bein beginnen.",
        "Schon ein Zentimeter Abheben ist ein Erfolg."
      ],
      varianten: "Leichter: einbeinig oder Hände weiter vorn. Schwerer: Hände neben den Knien oder Gewichtsmanschetten.",
      sicherheit: "Bei Krämpfen im Hüftbeuger kurz pausieren und lockern."
    }
  },
  {
    id: "kompression_beinheben_sitzend",
    name: "Beinheben im Langsitz",
    auch: ["Seated Pike Leg Lifts", "Pike Compression Lifts", "Seated Leg Raise"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "quadrizeps"],
    sekundaer: ["bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    info: {
      kurz: "Im Langsitz mit gestreckten Beinen hebst du die Beine bei aufrechtem Oberkörper einige Zentimeter an. Trainiert die aktive Hüftbeugung und ergänzt die Dehnung der Beinrückseite.",
      ausfuehrung: [
        "Setz dich aufrecht mit gestreckten, geschlossenen Beinen auf den Boden.",
        "Stütz die Hände neben den Knien oder Oberschenkeln auf den Boden.",
        "Richte den Oberkörper auf und kippe das Becken leicht nach vorn.",
        "Heb beide Beine gestreckt einige Zentimeter vom Boden, die Zehen sind gestreckt.",
        "Halte oben kurz und senke die Beine langsam ab.",
        "Wiederhole die vorgegebene Anzahl."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper lehnt nach hinten: aufrecht bleiben.",
        "Knie beugen sich: Oberschenkel anspannen.",
        "Schwung: langsam und kontrolliert."
      ],
      vorteile: [
        "Kräftigt die Hüftbeuger in starker Beugung.",
        "Verbessert die aktive Beweglichkeit für Vorbeugen und Hechtpositionen.",
        "Ergänzt die passive Dehnung der Beinrückseite."
      ],
      tipps: [
        "Je näher die Hände an den Füßen, desto schwerer.",
        "Mit einem Bein beginnen, wenn beide nicht abheben."
      ],
      varianten: "Leichter: einbeinig, Hände weiter hinten. Schwerer: Hände nah an den Knöcheln oder länger halten.",
      sicherheit: "Bei Krämpfen im Hüftbeuger pausieren und lockern."
    }
  },
  // ---------- Beinrückseite ----------
  {
    id: "beinrueckseite_dehnen",
    name: "Beinrückseite dehnen im Sitzen einbeinig",
    auch: ["Seated Single-Leg Hamstring Stretch", "Hurdler Stretch Modified", "Janu Sirsasana"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    hinweis: "Aus der Hüfte nach vorn, Rücken lang.",
    info: {
      kurz: "Einfache Dehnung der Beinrückseite im Sitzen: Ein Bein ist gestreckt, das andere angewinkelt, du neigst dich mit langem Rücken über das gestreckte Bein. Einbeinig ist die Beckenkippung leichter als beidbeinig.",
      ausfuehrung: [
        "Setz dich auf den Boden, streck das rechte Bein nach vorn und leg die linke Fußsohle innen an den rechten Oberschenkel.",
        "Zieh die rechte Fußspitze leicht zu dir, die Kniescheibe zeigt zur Decke.",
        "Richte die Wirbelsäule lang auf und dreh den Oberkörper leicht zum gestreckten Bein.",
        "Kippe das Becken nach vorn und neige den Oberkörper mit langem Rücken über das rechte Bein, bis du die Dehnung an der Beinrückseite spürst.",
        "Halte die Position, die Hände liegen auf dem Schienbein oder greifen den Fuß.",
        "Richte dich langsam auf und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und mit jedem Ausatmen ein wenig weiter aus der Hüfte nach vorn neigen.",
      fehler: [
        "Rundrücken und Kopf zum Knie: Brust nach vorn, Bauchnabel zum Oberschenkel.",
        "Knie des gestreckten Beins stark durchgedrückt: minimal beugen erlaubt.",
        "Ruckartiges Ziehen am Fuß: lieber ruhig halten."
      ],
      vorteile: [
        "Dehnt die Beinrückseite einseitig und gut steuerbar.",
        "Ohne Gerät und überall auf dem Boden möglich.",
        "Gut nach Laufen und Beintraining."
      ],
      tipps: [
        "Ein Kissen unter dem Gesäß erleichtert die Beckenkippung erheblich.",
        "Mit Band um den Fuß klappt es auch bei wenig Beweglichkeit."
      ],
      varianten: "Leichter: auf einem Kissen sitzen oder Band um den Fuß. Schwerer: Fußspitze aktiv anziehen oder Anspannen und Entspannen.",
      sicherheit: "Bei Kribbeln oder Ziehen bis in den Fuß weniger weit gehen, das kann ein Zeichen für Nervenspannung sein. Bei Bandscheibenproblemen vorsichtig."
    }
  },
  {
    id: "beinrueckseite_dehnen_band",
    name: "Beinrückseite dehnen in Rückenlage mit Band",
    auch: ["Supine Hamstring Stretch with Strap", "Lying Banded Hamstring Stretch", "Supta Padangusthasana"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Dehnung der Beinrückseite in Rückenlage mit einem Band um den Fuß. Der Rücken liegt geschützt am Boden, das Becken bleibt stabil, deshalb ist diese Variante für fast jeden geeignet.",
      ausfuehrung: [
        "Leg dich auf den Rücken, das linke Bein lang am Boden oder angewinkelt aufgestellt.",
        "Leg ein Band, einen Gurt oder ein Handtuch um den rechten Fußballen.",
        "Streck das rechte Bein nach oben und zieh es mit dem Band langsam Richtung Oberkörper.",
        "Halte das Knie möglichst gestreckt, das Becken und der Rücken bleiben am Boden.",
        "Halte die Position, sobald du eine deutliche Dehnung an der Beinrückseite spürst.",
        "Lass das Bein langsam ab und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen und mit jedem Ausatmen das Bein ein Stück weiter heranziehen.",
      fehler: [
        "Gesäß hebt vom Boden ab: weniger weit ziehen.",
        "Schultern und Nacken verspannt: Arme lang, Schultern weg von den Ohren.",
        "Anderes Bein hebt ab: lang am Boden lassen oder aufstellen."
      ],
      vorteile: [
        "Schonende Dehnung der Beinrückseite mit geschütztem Rücken.",
        "Gut dosierbar über den Zug am Band.",
        "Ideal kombinierbar mit Adduktoren- und Hüftdehnungen in derselben Lage."
      ],
      tipps: [
        "Fußspitze anziehen verlagert die Dehnung mehr in die Wade.",
        "Langes Halten von 60 Sekunden oder mehr wirkt am besten nach dem Training."
      ],
      varianten: "Leichter: anderes Bein aufstellen, Knie leicht beugen. Schwerer: anderes Bein lang am Boden, Anspannen und Entspannen.",
      sicherheit: "Bei Kribbeln im Bein die Fußspitze lockern und weniger weit ziehen."
    }
  },
  {
    id: "beinrueckseite_dehnen_box",
    name: "Beinrückseite dehnen im Stehen mit Fuß auf Erhöhung",
    auch: ["Standing Hamstring Stretch on Box", "Elevated Hamstring Stretch", "Bench Hamstring Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden", "gesaess"],
    geraete: [["box"], ["bank"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    sport: ["laufen", "golf", "fussball"],
    einseitig: true,
    info: {
      kurz: "Du stellst die Ferse eines gestreckten Beins auf eine Box oder Bank und neigst dich mit langem Rücken nach vorn. Eine Dehnung der Beinrückseite im Stehen, die du überall im Studio oder auf dem Platz machen kannst.",
      ausfuehrung: [
        "Stell dich vor eine Box oder Bank in Knie- bis Hüfthöhe.",
        "Leg die rechte Ferse auf die Erhöhung, das Bein ist gestreckt, die Fußspitze zeigt nach oben.",
        "Das linke Standbein ist gerade oder leicht gebeugt, die Hüfte zeigt nach vorn.",
        "Leg die Hände in die Hüfte und neige den Oberkörper mit langem Rücken aus der Hüfte nach vorn.",
        "Halte die Position, sobald du die Dehnung an der rechten Beinrückseite spürst.",
        "Richte dich langsam auf und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen etwas weiter aus der Hüfte nach vorn neigen.",
      fehler: [
        "Erhöhung zu hoch: Dann kippt das Becken nach hinten, lieber niedriger.",
        "Rundrücken: Brust nach vorn, Bewegung aus der Hüfte.",
        "Standbein dreht nach außen: Fuß zeigt nach vorn."
      ],
      vorteile: [
        "Dehnt die Beinrückseite ohne Matte.",
        "Gut nach dem Laufen oder vor dem Golfen.",
        "Intensität über die Höhe der Erhöhung steuerbar."
      ],
      tipps: [
        "Dreh das Standbein und die Hüfte leicht ein, um mehr den äußeren Teil der Beinrückseite zu dehnen.",
        "Mit leicht gebeugtem Knie verlagert sich die Dehnung mehr Richtung Gesäß."
      ],
      varianten: "Leichter: niedrigere Erhöhung. Schwerer: höhere Erhöhung und Fußspitze anziehen.",
      sicherheit: "Bei unsicherem Stand an einer Wand oder Stange festhalten."
    }
  },
  {
    id: "beinrueckseite_dehnen_tuerrahmen",
    name: "Beinrückseite dehnen am Türrahmen",
    auch: ["Doorway Hamstring Stretch", "Wall Hamstring Stretch", "Supine Hamstring Stretch at Wall"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Passive Dehnung der Beinrückseite: Du liegst auf dem Rücken in einem Türrahmen, ein Bein liegt gestreckt an der Wand, das andere am Boden durch die Tür. Völlig entspannt, gut für lange Haltezeiten.",
      ausfuehrung: [
        "Leg dich auf den Rücken in einen Türrahmen oder neben eine Wandecke.",
        "Leg das rechte Bein gestreckt an die Wand oder den Türrahmen, das linke Bein liegt lang durch die Türöffnung am Boden.",
        "Rutsch mit dem Gesäß so nah an die Wand, dass du eine angenehme Dehnung an der rechten Beinrückseite spürst.",
        "Das Knie bleibt gestreckt, das Gesäß und das linke Bein liegen am Boden.",
        "Halte die Position entspannt mehrere Atemzüge oder Minuten.",
        "Wechsle danach die Seite."
      ],
      atmung: "Ruhig und tief atmen, bei jedem Ausatmen locker lassen.",
      fehler: [
        "Gesäß hebt ab: etwas weiter weg von der Wand rutschen.",
        "Unteres Bein hebt ab: lang am Boden lassen.",
        "Zu nah an der Wand: Die Dehnung soll angenehm bleiben."
      ],
      vorteile: [
        "Passive Dehnung ohne Haltearbeit.",
        "Gut für lange Haltezeiten von zwei Minuten und mehr.",
        "Becken ist durch die Lage stabil."
      ],
      tipps: [
        "Je näher am Türrahmen, desto stärker die Dehnung. Rück alle 30 Sekunden ein Stück näher.",
        "Ideal als entspannte Abendroutine."
      ],
      varianten: "Leichter: weiter weg von der Wand. Schwerer: näher heran oder Fußspitze anziehen.",
      sicherheit: "Bei Kribbeln im Bein den Abstand vergrößern."
    }
  },
  {
    id: "beinrueckseite_dehnen_stehend_ferse",
    name: "Beinrückseite dehnen im Schrittstand",
    auch: ["Standing Split-Stance Hamstring Stretch", "Pyramid Pose", "Parsvottanasana", "Heel-Down Hamstring Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden", "gesaess"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Dehnung der Beinrückseite im kurzen Schrittstand: Das vordere Bein ist gestreckt, du schiebst das Gesäß nach hinten und neigst dich mit langem Rücken nach vorn. Ohne Gerät, überall machbar.",
      ausfuehrung: [
        "Stell dich in einen kurzen Schrittstand, der rechte Fuß etwa eine Fußlänge vor dem linken.",
        "Streck das rechte Bein, die Fußspitze darf leicht angehoben sein, das linke Knie ist leicht gebeugt.",
        "Leg die Hände in die Hüfte oder auf den linken Oberschenkel.",
        "Schiebe das Gesäß nach hinten und neige den Oberkörper mit geradem Rücken nach vorn, bis du die Dehnung an der rechten Beinrückseite spürst.",
        "Halte die Position, die Hüfte zeigt nach vorn.",
        "Richte dich auf und wechsle die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen und beim Ausatmen das Gesäß etwas weiter nach hinten schieben.",
      fehler: [
        "Rundrücken: Brust nach vorn, aus der Hüfte beugen.",
        "Hüfte dreht auf: beide Hüftknochen nach vorn.",
        "Vorderes Knie durchgedrückt: gestreckt, aber nicht überstreckt."
      ],
      vorteile: [
        "Dehnt die Beinrückseite ohne Matte und Gerät.",
        "Schult das Hüftbeugen wie beim Kreuzheben.",
        "Gut vor dem Golfen oder nach dem Laufen."
      ],
      tipps: [
        "Fußspitze auf eine kleine Erhöhung legen verstärkt die Dehnung in Richtung Wade.",
        "Stell dir vor, du schiebst die Gesäßtasche nach hinten zur Wand."
      ],
      varianten: "Leichter: Hände auf einem Stuhl abstützen. Schwerer: Fußspitze anheben und tiefer neigen.",
      sicherheit: "Bei Rückenschmerzen nur so weit vorneigen, wie der Rücken gerade bleibt."
    }
  },
  {
    id: "vorbeuge_stehend",
    name: "Vorbeuge im Stehen",
    auch: ["Standing Forward Fold", "Standing Toe Touch", "Uttanasana"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["ruecken_unten", "waden"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Klassische Vorbeuge im Stehen mit hängendem Oberkörper. Dehnt die Beinrückseite beider Beine und lässt die Wirbelsäule sanft hängen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Knie leicht gebeugt.",
        "Kippe aus der Hüfte nach vorn und lass den Oberkörper langsam nach unten sinken.",
        "Lass Kopf und Arme locker hängen oder greif die Ellbogen gegenseitig.",
        "Streck die Knie langsam so weit, bis du eine deutliche Dehnung an den Beinrückseiten spürst.",
        "Verlagere das Gewicht leicht auf die Fußballen und halte die Position entspannt.",
        "Beuge zum Lösen die Knie und roll dich langsam Wirbel für Wirbel auf."
      ],
      atmung: "Ruhig weiteratmen und mit jedem Ausatmen den Oberkörper schwerer werden lassen.",
      fehler: [
        "Knie durchgedrückt und Ziehen im Rücken: Knie leicht beugen.",
        "Gewicht auf den Fersen: Hüfte über die Füße bringen.",
        "Schnell hochkommen: langsam aufrollen, um Schwindel zu vermeiden."
      ],
      vorteile: [
        "Dehnt beide Beinrückseiten gleichzeitig.",
        "Entspannt Nacken und Rücken.",
        "Ohne Gerät überall möglich."
      ],
      tipps: [
        "Mit gebeugten Knien und Bauch an den Oberschenkeln beginnen, dann die Knie langsam strecken.",
        "Fußballen auf eine Hantelscheibe stellen verstärkt die Dehnung."
      ],
      varianten: "Leichter: Knie deutlich gebeugt. Schwerer: Fußballen erhöht oder Hände unter die Füße schieben.",
      sicherheit: "Bei Bluthochdruck, Schwindel oder Bandscheibenproblemen vorsichtig oder auslassen."
    }
  },
  {
    id: "vorbeuge_sitzend",
    name: "Vorbeuge im Langsitz",
    auch: ["Seated Forward Fold", "Seated Hamstring Stretch", "Paschimottanasana", "Sit and Reach"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["ruecken_unten", "waden"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Vorbeuge im Sitzen mit beiden Beinen gestreckt. Dehnt beide Beinrückseiten und, je nach Ausführung, auch den unteren Rücken.",
      ausfuehrung: [
        "Setz dich mit geschlossenen, gestreckten Beinen auf den Boden, eventuell auf ein Kissen.",
        "Zieh die Fußspitzen leicht an, die Kniescheiben zeigen zur Decke.",
        "Richte dich auf, heb die Arme nach oben und mach die Wirbelsäule lang.",
        "Kippe das Becken nach vorn und neige den Oberkörper mit langem Rücken über die Beine.",
        "Greif die Schienbeine, Knöchel oder Füße und halte die Dehnung.",
        "Richte dich langsam wieder auf."
      ],
      atmung: "Beim Einatmen lang werden, beim Ausatmen weiter nach vorn sinken.",
      fehler: [
        "Kopf zieht zu den Knien und Rücken rundet stark: Brust nach vorn schieben.",
        "Ziehen mit den Armen: nur halten, nicht reißen.",
        "Kippen auf das Steißbein: auf ein Kissen setzen."
      ],
      vorteile: [
        "Dehnt beide Beinrückseiten gleichzeitig.",
        "Einfache und bekannte Übung für jedes Niveau.",
        "Gut als Abschluss einer Einheit."
      ],
      tipps: [
        "Knie leicht beugen, wenn der Rücken sonst stark rund wird.",
        "Ein Band um die Füße hilft, aufrecht zu bleiben."
      ],
      varianten: "Leichter: Kissen und gebeugte Knie. Schwerer: Anspannen und Entspannen oder Gewicht in den Händen (Jefferson-Prinzip im Sitzen).",
      sicherheit: "Bei Bandscheibenproblemen den Rücken lang halten und nicht stark runden."
    }
  },
  {
    id: "beinrueckseite_pnf_band",
    name: "Beinrückseite dehnen mit Anspannen und Entspannen",
    auch: ["PNF Hamstring Stretch", "Contract-Relax Hamstring Stretch", "Hold-Relax Hamstring"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["gesaess", "waden"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    golf: 1,
    einseitig: true,
    hinweis: "5 bis 10 Sekunden ins Band drücken, dann tiefer ziehen.",
    info: {
      kurz: "Dehnung der Beinrückseite in Rückenlage mit Band, bei der du das Bein abwechselnd gegen das Band drückst und danach tiefer dehnst. Gilt als eine der wirksamsten Methoden, um kurzfristig Beweglichkeit zu gewinnen.",
      ausfuehrung: [
        "Leg dich auf den Rücken und leg ein Band um den rechten Fuß, das linke Bein liegt lang am Boden.",
        "Zieh das gestreckte rechte Bein mit dem Band nach oben, bis eine deutliche Dehnung entsteht, und halte etwa 20 Sekunden.",
        "Drück das Bein mit etwa halber Kraft gegen das Band nach unten Richtung Boden, ohne dass es sich bewegt. Halte 5 bis 10 Sekunden.",
        "Lass die Spannung los, atme aus und zieh das Bein ein Stück weiter heran.",
        "Spann für einige Sekunden den Oberschenkelvorderseite aktiv an, als wolltest du das Bein selbst weiter heranziehen.",
        "Wiederhole den Ablauf zwei bis drei Mal und wechsle dann die Seite."
      ],
      atmung: "Während des Anspannens normal weiteratmen, beim Loslassen lang ausatmen.",
      fehler: [
        "Mit voller Kraft drücken: halbe Kraft genügt.",
        "Nach dem Loslassen ruckartig ziehen: langsam tiefer gehen.",
        "Becken hebt ab: Gesäß bleibt am Boden."
      ],
      vorteile: [
        "Kann kurzfristig deutlich mehr Bewegungsumfang ermöglichen.",
        "Kräftigt die Muskulatur zugleich in gedehnter Position.",
        "Allein mit Band ohne Partner durchführbar."
      ],
      tipps: [
        "Nicht direkt vor Sprints oder Sprüngen, eher danach oder an eigenen Tagen.",
        "Zwei bis drei Zyklen pro Bein reichen."
      ],
      varianten: "Leichter: kürzeres Anspannen, weniger Kraft. Schwerer: Endphase länger aktiv halten.",
      sicherheit: "Nicht bei frischen Zerrungen der Beinrückseite. Bei Kribbeln im Bein den Umfang reduzieren."
    }
  },
  {
    id: "hamstring_sweep",
    name: "Beinrückseite dynamisch im Gehen",
    auch: ["Hamstring Sweep", "Hamstring Scoop", "Walking Hamstring Sweep"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden", "gesaess"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["laufen", "fussball"],
    einseitig: true,
    info: {
      kurz: "Dynamische Aufwärmübung für die Beinrückseite: Du setzt eine Ferse vor dir auf, beugst dich vor und schaufelst mit den Händen am Bein entlang nach vorn oben. Im Lauf- und Mannschaftssport weit verbreitet.",
      ausfuehrung: [
        "Mach einen kleinen Schritt nach vorn und setz die rechte Ferse auf, die Fußspitze zeigt nach oben, das Bein ist gestreckt.",
        "Das linke Knie ist leicht gebeugt, das Gewicht liegt auf dem linken Bein.",
        "Schiebe das Gesäß nach hinten und beuge dich mit langem Rücken nach vorn.",
        "Führ die Arme in einer schaufelnden Bewegung von hinten nach vorn knapp über den Boden an der rechten Fußspitze vorbei und nach oben.",
        "Richte dich dabei auf, mach einen Schritt und wiederhole mit dem anderen Bein.",
        "Geh so eine Strecke von 10 bis 20 Metern."
      ],
      atmung: "Beim Vorbeugen ausatmen, beim Aufrichten einatmen.",
      fehler: [
        "Rundrücken: aus der Hüfte beugen.",
        "Hektisch durchziehen: Jede Wiederholung kontrolliert.",
        "Gestrecktes Knie überstreckt: Bein gestreckt, aber locker."
      ],
      vorteile: [
        "Erwärmt die Beinrückseite dynamisch.",
        "Bereitet auf Sprints und schnelle Bewegungen vor.",
        "Schult das Hüftbeugen."
      ],
      tipps: [
        "Ideal in einer Aufwärmstrecke mit Knie umarmen und Oberschenkeldehnung im Gehen.",
        "Der Rhythmus ist ruhig, nicht hastig."
      ],
      varianten: "Leichter: auf der Stelle mit Wechsel der Beine. Schwerer: tiefer vorbeugen und länger halten.",
      sicherheit: "Bei frischen Zerrungen der Beinrückseite auslassen."
    }
  },
  {
    id: "beinrueckseite_rolle",
    name: "Beinrückseite ausrollen mit der Faszienrolle",
    auch: ["Hamstring Foam Rolling", "Foam Roll Hamstrings"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Selbstmassage der Beinrückseite mit der Faszienrolle im Sitzen, die Hände stützen hinter dem Körper. Kann das Spannungsgefühl verringern und bereitet auf Dehnungen vor.",
      ausfuehrung: [
        "Setz dich auf den Boden und leg die Rolle unter die Oberschenkel, knapp oberhalb der Kniekehlen.",
        "Stütz die Hände hinter dem Körper auf, die Finger zeigen nach vorn oder zur Seite.",
        "Heb das Gesäß an und roll langsam vor und zurück zwischen Kniekehle und Gesäß.",
        "Leg für mehr Druck das eine Bein über das andere und roll einbeinig.",
        "Dreh das Bein leicht nach innen und außen, um alle Bereiche zu erreichen.",
        "Wechsle nach ein bis zwei Minuten das Bein."
      ],
      atmung: "Ruhig weiteratmen, an empfindlichen Stellen lang ausatmen.",
      fehler: [
        "Über die Kniekehle rollen: einige Zentimeter oberhalb bleiben.",
        "Zu schnell rollen: langsam und an empfindlichen Stellen verweilen.",
        "Schultern hochgezogen: Brust offen, Schultern nach unten."
      ],
      vorteile: [
        "Kann das Spannungsgefühl in der Beinrückseite verringern.",
        "Vorbereitung auf Dehnungen und Kreuzheben.",
        "Kann nach Laufen und Beintraining angenehm sein."
      ],
      tipps: [
        "Für mehr Druck auf einer Bank sitzen und die Rolle auf die Bank legen.",
        "Danach direkt eine Dehnung der Beinrückseite anschließen."
      ],
      varianten: "Leichter: beide Beine, Gewicht auf den Händen. Schwerer: einbeinig mit überschlagenem Bein.",
      sicherheit: "Bei Handgelenksbeschwerden auf den Fäusten stützen. Nicht auf frischen Verletzungen rollen."
    }
  },
  {
    id: "jefferson_curl",
    name: "Jefferson Curl",
    auch: ["Jefferson Curl", "Weighted Spinal Flexion", "Standing Pike Curl"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "ruecken_unten"],
    sekundaer: ["gesaess", "waden", "oberer_ruecken"],
    geraete: [["kurzhantel", "box"], ["kettlebell", "box"], ["langhantel", "box"], ["kurzhantel"], ["kettlebell"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ruecken: 2 },
    stufe: 3,
    hinweis: "Sehr leicht beginnen und langsam Wirbel für Wirbel rollen.",
    info: {
      kurz: "Fortgeschrittene, belastete Dehnung: Mit einem leichten Gewicht rollst du die Wirbelsäule Wirbel für Wirbel nach unten ab, meist auf einer Erhöhung stehend. Dehnt die Beinrückseite und kräftigt den Rücken in der Beugung.",
      ausfuehrung: [
        "Stell dich mit geschlossenen, gestreckten Beinen auf eine stabile Box oder Bank, die Zehen an der Kante.",
        "Halte eine leichte Kurzhantel, Kettlebell oder Langhantel mit gestreckten Armen vor den Oberschenkeln.",
        "Senke zuerst das Kinn zur Brust, dann roll langsam Wirbel für Wirbel nach unten ab, oberer Rücken zuerst, dann mittlerer, dann unterer.",
        "Lass das Gewicht nah an den Beinen nach unten gleiten, bis unter Boxhöhe, soweit es angenehm ist.",
        "Halte unten kurz und roll dich in umgekehrter Reihenfolge langsam wieder auf, unterer Rücken zuerst, Kopf zuletzt.",
        "Jede Wiederholung dauert etwa 5 bis 10 Sekunden nach unten und nach oben."
      ],
      atmung: "Beim Abrollen langsam ausatmen, unten kurz einatmen, beim Aufrollen ruhig weiteratmen.",
      fehler: [
        "Zu schweres Gewicht: Mit 2 bis 5 Kilogramm beginnen, Steigerungen nur in kleinen Schritten über Wochen.",
        "Zu schnelles Tempo: Langsamkeit ist das Wesen der Übung.",
        "Aus der Hüfte beugen wie beim Kreuzheben: Die Wirbelsäule rollt bewusst ab.",
        "Knie beugen: Beine bleiben gestreckt."
      ],
      vorteile: [
        "Dehnt die Beinrückseite in einer belasteten Position.",
        "Kräftigt die Rückenstrecker in der Beugung, einem Bereich, der sonst kaum trainiert wird.",
        "Kann Fortschritte in der Vorbeuge beschleunigen."
      ],
      tipps: [
        "Starte ohne Erhöhung auf dem Boden und nur mit einem Besenstiel oder sehr leichtem Gewicht.",
        "Zwei bis drei Sätze mit 5 bis 8 langsamen Wiederholungen, nicht bis zur Ermüdung."
      ],
      varianten: "Leichter: ohne Gewicht und ohne Erhöhung. Schwerer: höhere Box, etwas mehr Gewicht.",
      sicherheit: "Nicht bei Bandscheibenvorfall, akuten Rückenschmerzen, Osteoporose oder Bluthochdruck. Bei Unsicherheit vorher ärztlich oder physiotherapeutisch abklären."
    }
  },
  {
    id: "halber_spagat",
    name: "Halber Spagat im Kniestand",
    auch: ["Half Split", "Kneeling Hamstring Stretch", "Ardha Hanumanasana", "Runner's Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden", "hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    sport: ["laufen"],
    einseitig: true,
    info: {
      kurz: "Dehnung der Beinrückseite im Kniestand: Das vordere Bein ist gestreckt, die Hüfte schiebt nach hinten über das hintere Knie. Wichtige Vorstufe zum Spagat und eine beliebte Läuferdehnung.",
      ausfuehrung: [
        "Knie dich auf die Matte und stell den rechten Fuß vorn auf.",
        "Schiebe die Hüfte nach hinten, bis sie über dem linken Knie ist, und streck dabei das rechte Bein.",
        "Die rechte Ferse liegt am Boden, die Fußspitze zeigt zur Decke.",
        "Stütz die Hände neben dem rechten Bein auf den Boden oder auf Blöcke.",
        "Neige den Oberkörper mit langem Rücken über das vordere Bein, bis du die Dehnung an der Beinrückseite spürst.",
        "Halte die Position und wechsle danach die Seite."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen aus der Hüfte etwas weiter nach vorn gehen.",
      fehler: [
        "Hüfte nicht über dem hinteren Knie: Hüfte nach hinten schieben.",
        "Rundrücken: Brust nach vorn, lieber Hände auf Blöcke.",
        "Vorderes Knie überstreckt: minimal beugen erlaubt."
      ],
      vorteile: [
        "Dehnt die Beinrückseite gezielt einseitig.",
        "Vorstufe für den Spagat vorwärts.",
        "Gut im Wechsel mit dem tiefen Ausfallschritt für Hüftbeuger."
      ],
      tipps: [
        "Dynamisch nutzbar: Wechsle zwischen Ausfallschritt und halbem Spagat hin und her.",
        "Fußspitze anziehen verstärkt die Wadendehnung."
      ],
      varianten: "Leichter: Hände auf Blöcken, Knie leicht gebeugt. Schwerer: Oberkörper tiefer, Fußspitze angezogen.",
      sicherheit: "Hinteres Knie polstern. Bei Kribbeln im Bein weniger tief gehen."
    }
  },
  {
    id: "beinheben_aktiv",
    name: "Aktives gestrecktes Beinheben in Rückenlage",
    auch: ["Active Straight Leg Raise", "ASLR Drill", "Active Leg Lowering"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "beinbeuger"],
    sekundaer: ["bauch", "quadrizeps"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "In Rückenlage hebst du ein gestrecktes Bein aus eigener Kraft so hoch wie möglich, während das andere Bein aktiv am Boden bleibt. Trainiert die aktive Beweglichkeit der Beinrückseite und ist Teil gängiger Bewegungs-Screenings.",
      ausfuehrung: [
        "Leg dich auf den Rücken, beide Beine gestreckt, die Arme neben dem Körper.",
        "Zieh beide Fußspitzen an und drück das linke Bein aktiv in den Boden.",
        "Spann den Bauch leicht an, damit der untere Rücken ruhig bleibt.",
        "Heb das rechte Bein gestreckt so hoch an, wie es ohne Knie beugen geht.",
        "Halte oben eine bis zwei Sekunden und senke das Bein langsam ab.",
        "Wiederhole die vorgegebene Anzahl und wechsle dann die Seite."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Knie beugt sich oben: nur so hoch, wie das Bein gestreckt bleibt.",
        "Anderes Bein hebt ab: aktiv in den Boden drücken.",
        "Schwung: langsam und kontrolliert."
      ],
      vorteile: [
        "Verbessert die aktive Beweglichkeit der Beinrückseite.",
        "Kräftigt den Hüftbeuger in hoher Position.",
        "Schult die Stabilität von Becken und Rumpf."
      ],
      tipps: [
        "Für mehr Wirkung eine Bandschlaufe als Widerstand an den Fuß legen.",
        "Gut als Aufwärmen vor Kreuzheben."
      ],
      varianten: "Leichter: anderes Bein angewinkelt. Schwerer: Bein oben halten und langsam in fünf Sekunden absenken.",
      sicherheit: "Bei Rückenbeschwerden das andere Bein anwinkeln."
    }
  },
  {
    id: "aktive_kniestreckung",
    name: "Aktive Kniestreckung in Rückenlage",
    auch: ["Active Knee Extension", "AKE Hamstring Stretch", "Supine 90/90 Hamstring Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["quadrizeps", "waden"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Physiotherapeutische Übung für die Beinrückseite: Den Oberschenkel hältst du senkrecht, dann streckst du das Knie aktiv so weit es geht. Dehnt die Beinrückseite, ohne das Becken zu verschieben.",
      ausfuehrung: [
        "Leg dich auf den Rücken, das linke Bein lang am Boden.",
        "Zieh das rechte Knie an, bis der Oberschenkel senkrecht steht, und greif mit beiden Händen hinter den Oberschenkel.",
        "Halte den Oberschenkel in dieser Position, das Knie ist im rechten Winkel gebeugt.",
        "Streck das rechte Knie aktiv, bis du die Dehnung an der Beinrückseite spürst, ohne dass sich der Oberschenkel bewegt.",
        "Halte zwei bis drei Sekunden und beuge das Knie wieder.",
        "Wiederhole die vorgegebene Anzahl und wechsle die Seite."
      ],
      atmung: "Beim Strecken ausatmen, beim Beugen einatmen.",
      fehler: [
        "Oberschenkel weicht nach unten aus: mit den Händen fixieren.",
        "Gesäß hebt ab: Becken bleibt am Boden.",
        "Ruckartiges Strecken: kontrolliert und gleichmäßig."
      ],
      vorteile: [
        "Gezielte Dehnung der Beinrückseite bei fixiertem Becken.",
        "Aktive Dehnung, die zugleich die Oberschenkelvorderseite arbeiten lässt.",
        "Schonend und für fast jeden geeignet."
      ],
      tipps: [
        "Fußspitze anziehen verstärkt die Dehnung bis in die Wade.",
        "10 Wiederholungen je Seite als dynamisches Aufwärmen."
      ],
      varianten: "Leichter: Oberschenkel etwas weniger als senkrecht. Schwerer: Fußspitze anziehen und am Ende halten.",
      sicherheit: "Bei Kribbeln im Bein die Fußspitze locker lassen."
    }
  },
  {
    id: "beinrueckseite_stuhl",
    name: "Beinrückseite dehnen auf der Stuhlkante",
    auch: ["Seated Chair Hamstring Stretch", "Edge of Chair Hamstring Stretch"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    hinweis: "Ohne Gerät auf einem Stuhl.",
    info: {
      kurz: "Dehnung der Beinrückseite im Sitzen auf der vorderen Stuhlkante: Ein Bein ist gestreckt, die Ferse am Boden, du neigst dich mit langem Rücken nach vorn. Ideal im Büro und für Menschen, die nicht gern auf dem Boden sitzen.",
      ausfuehrung: [
        "Setz dich auf die vordere Kante eines stabilen Stuhls oder einer Bank.",
        "Streck das rechte Bein nach vorn, die Ferse liegt am Boden, die Fußspitze zeigt nach oben.",
        "Der linke Fuß steht flach am Boden, das Knie ist gebeugt.",
        "Richte den Oberkörper lang auf und leg die Hände auf den linken Oberschenkel.",
        "Neige dich aus der Hüfte nach vorn, bis du die Dehnung an der rechten Beinrückseite spürst.",
        "Halte die Position und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, beim Ausatmen etwas weiter nach vorn neigen.",
      fehler: [
        "Rundrücken: Brust nach vorn, aus der Hüfte neigen.",
        "Zu weit hinten sitzen: auf die Vorderkante rutschen.",
        "Knie überstreckt: gestreckt, aber nicht durchgedrückt."
      ],
      vorteile: [
        "Dehnt die Beinrückseite ohne Bodenkontakt.",
        "Im Büro, auf Reisen oder im Golfwagen machbar.",
        "Leicht dosierbar."
      ],
      tipps: [
        "Fußspitze anziehen verstärkt die Dehnung.",
        "Alle ein bis zwei Stunden Sitzen je Seite 30 Sekunden."
      ],
      varianten: "Leichter: kaum vorneigen. Schwerer: Fußspitze anziehen und weiter vorneigen.",
      sicherheit: "Auf einen stabilen Stuhl ohne Rollen achten."
    }
  },
  {
    id: "slump_mobilisation",
    name: "Nervengleiten im Sitzen (Slump)",
    auch: ["Seated Slump Nerve Glide", "Sciatic Nerve Floss", "Slump Slider", "Nerve Flossing"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden"],
    geraete: [["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    einseitig: true,
    hinweis: "Sanft und rhythmisch, kein Dehnschmerz.",
    info: {
      kurz: "Aus der Physiotherapie bekannte Gleitübung im Sitzen: Kopf und Knie bewegen sich gegengleich, um die Nervenstrukturen der Beinrückseite sanft zu bewegen, ohne sie stark zu spannen. Kann sich bei einem Spannungsgefühl in der Beinrückseite angenehm anfühlen.",
      ausfuehrung: [
        "Setz dich auf eine Bank oder einen Stuhl, die Oberschenkel liegen auf, die Hände hinter dem Rücken verschränkt.",
        "Lass den Oberkörper leicht nach vorn zusammensinken, ein leichter Rundrücken ist hier gewollt.",
        "Streck das rechte Knie und zieh die Fußspitze an, während du gleichzeitig den Kopf in den Nacken hebst und nach oben schaust.",
        "Beuge dann das Knie und senke gleichzeitig das Kinn zur Brust.",
        "Bewege dich rhythmisch und sanft zwischen diesen beiden Positionen hin und her.",
        "Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Bis in ein starkes Ziehen oder Kribbeln gehen: Die Bewegung soll sanft bleiben.",
        "Kopf und Bein gleichzeitig in Spannung bringen: Immer gegengleich bewegen.",
        "Zu schnell: ruhiges, gleichmäßiges Tempo."
      ],
      vorteile: [
        "Bewegt die Nervenstrukturen der Beinrückseite sanft.",
        "Kann ein Spannungsgefühl in der Beinrückseite lindern.",
        "Ergänzt das klassische Dehnen der Beinrückseite."
      ],
      tipps: [
        "10 bis 15 ruhige Wiederholungen je Seite.",
        "Wenn sich die Beinrückseite beim Dehnen eher kribbelig als muskulär anfühlt, kann diese Übung eine gute Ergänzung sein."
      ],
      varianten: "Leichter: kleinere Bewegung, Oberkörper aufrecht. Schwerer: Oberkörper mehr zusammensinken lassen.",
      sicherheit: "Bei ausstrahlenden Schmerzen, Taubheit oder Schwäche im Bein ärztlich oder physiotherapeutisch abklären lassen und nicht eigenständig verstärken."
    }
  },
  {
    id: "beine_an_wand",
    name: "Beine an der Wand hochlegen",
    auch: ["Legs Up the Wall", "Viparita Karani", "Wall Leg Rest"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger"],
    sekundaer: ["waden", "ruecken_unten"],
    geraete: [["wand", "matte"], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Entspannende Lage: Du liegst auf dem Rücken, das Gesäß nah an der Wand, beide Beine gestreckt an der Wand. Sanfte Dehnung der Beinrückseite und angenehme Ruheposition zum Abschluss.",
      ausfuehrung: [
        "Setz dich seitlich an eine Wand und dreh dich auf den Rücken, sodass beide Beine an der Wand nach oben zeigen.",
        "Rück mit dem Gesäß so nah an die Wand, wie es angenehm ist.",
        "Die Beine liegen gestreckt und geschlossen an der Wand, die Arme entspannt neben dir.",
        "Lass den ganzen Körper schwer werden und schließe gern die Augen.",
        "Halte die Position mehrere Minuten.",
        "Zum Lösen die Knie beugen, auf die Seite rollen und langsam aufsetzen."
      ],
      atmung: "Tief und langsam atmen, die Ausatmung etwas länger als die Einatmung.",
      fehler: [
        "Gesäß zu nah bei steifer Beinrückseite: etwas Abstand lassen.",
        "Hohlkreuz: Kissen unter das Becken oder weiter weg.",
        "Zu schnell aufsetzen: über die Seite aufrollen."
      ],
      vorteile: [
        "Sanfte Dehnung der Beinrückseite.",
        "Entspannende Position zur Beruhigung nach dem Training.",
        "Kann bei schweren Beinen nach langem Stehen angenehm sein."
      ],
      tipps: [
        "Drei bis fünf Minuten zum Abschluss einer Einheit oder vor dem Schlafen.",
        "Mit gegrätschten Beinen wird es zur Adduktorendehnung."
      ],
      varianten: "Leichter: Abstand zur Wand vergrößern. Schwerer: Gesäß ganz an die Wand, Fußspitzen anziehen.",
      sicherheit: "Bei Bluthochdruck, Glaukom oder in der Spätschwangerschaft vorher abklären."
    }
  },
  // ---------- Spagat vorwärts ----------
  {
    id: "spagat_gleiten",
    name: "Spagat-Gleiten vorwärts mit Gleitscheibe",
    auch: ["Slider Front Split", "Sliding Front Split", "Slider Split Progression"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "hueftbeuger"],
    sekundaer: ["quadrizeps", "gesaess"],
    geraete: [["gleitscheiben"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 2,
    hinweis: "Hände auf Blöcken oder einer Bank, langsam gleiten.",
    info: {
      kurz: "Progression zum Spagat vorwärts: Die vordere Ferse gleitet auf einer Gleitscheibe nach vorn in den Spagat und wird aktiv zurückgezogen. Kräftigt die Beinrückseite in der Dehnung und macht den Spagat kontrollierbar.",
      ausfuehrung: [
        "Knie dich auf eine Matte, das linke Knie unten, die rechte Ferse auf einer Gleitscheibe vor dir.",
        "Stütz die Hände links und rechts auf Blöcke, Hanteln oder eine niedrige Bank.",
        "Lass die rechte Ferse langsam nach vorn gleiten, bis du eine deutliche Dehnung an der rechten Beinrückseite und vorn an der linken Hüfte spürst.",
        "Halte kurz und drück die Ferse aktiv in die Gleitscheibe.",
        "Zieh die Ferse aus der Beinrückseite heraus wieder zu dir zurück, die Hände helfen nur so viel wie nötig.",
        "Wiederhole und wechsle danach die Seite."
      ],
      atmung: "Beim Hinausgleiten einatmen, beim Zurückziehen ausatmen.",
      fehler: [
        "Unkontrolliertes Rutschen: Gewicht auf den Händen.",
        "Becken dreht auf: Hüfte zeigt nach vorn.",
        "Nur mit den Armen zurück: die Beinrückseite zieht."
      ],
      vorteile: [
        "Kräftigt die Beinrückseite exzentrisch und in Dehnung.",
        "Sichere, steuerbare Spagat-Progression.",
        "Kann die Widerstandsfähigkeit der Beinrückseite verbessern."
      ],
      tipps: [
        "Zwei bis drei Sätze mit 5 bis 8 langsamen Wiederholungen.",
        "Starte mit kleinem Weg und steigere über Wochen."
      ],
      varianten: "Leichter: kleinerer Weg, mehr Stütz. Schwerer: niedrigere Stütze, langsameres Zurückziehen.",
      sicherheit: "Bei Zerrungen der Beinrückseite oder Leiste auslassen. Hinteres Knie polstern."
    }
  },
  {
    id: "spagat_gestuetzt",
    name: "Spagat vorwärts mit Stütze",
    auch: ["Supported Front Split", "Front Split with Blocks", "Assisted Hanumanasana"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "hueftbeuger"],
    sekundaer: ["quadrizeps", "gesaess"],
    geraete: [["bank", "matte"], ["box", "matte"], ["matte"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Spagat vorwärts mit Händen auf Blöcken oder einer Bank und eventuell einem Polster unter dem vorderen Oberschenkel. So kannst du die Spagatposition halten, bevor du den freien Spagat erreichst.",
      ausfuehrung: [
        "Wärme dich gut auf, zum Beispiel mit tiefem Ausfallschritt und halbem Spagat.",
        "Knie dich hin, stell den rechten Fuß vorn auf und stell links und rechts Blöcke oder eine niedrige Bank neben dich.",
        "Lass die rechte Ferse langsam nach vorn gleiten und das linke Knie nach hinten, bis eine deutliche Dehnung entsteht.",
        "Leg bei Bedarf ein festes Kissen unter den vorderen Oberschenkel oder das Gesäß, damit du dich ablegen kannst.",
        "Richte das Becken gerade nach vorn aus und halte die Position.",
        "Komm über die Hände kontrolliert heraus und wechsle die Seite."
      ],
      atmung: "Ruhig und tief atmen, mit dem Ausatmen locker lassen.",
      fehler: [
        "Becken dreht auf: beide Hüftknochen nach vorn.",
        "Hinteres Bein dreht nach außen: Knie und Fußrücken zeigen zum Boden.",
        "Kalt in den Spagat gehen: immer aufwärmen."
      ],
      vorteile: [
        "Dehnt Beinrückseite des vorderen und Hüftbeuger des hinteren Beins.",
        "Sichere Zwischenstufe zum vollen Spagat.",
        "Höhe der Stütze steuert die Intensität."
      ],
      tipps: [
        "Mit der Zeit die Stütze niedriger wählen.",
        "Ein bis zwei Minuten je Seite, mehrmals pro Woche."
      ],
      varianten: "Leichter: höhere Stütze. Schwerer: niedrigere Stütze oder freier Spagat.",
      sicherheit: "Bei Leisten- oder Hüftbeschwerden auslassen. Nie in Schmerz hineinsinken."
    }
  },
  {
    id: "spagat",
    name: "Spagat vorwärts",
    auch: ["Front Split", "Hanumanasana", "Spagat"],
    muster: "mobilitaet_beine",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "hueftbeuger"],
    sekundaer: ["quadrizeps", "gesaess"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { huefte: 2, knie: 1 },
    stufe: 3,
    einseitig: true,
    hinweis: "Nur gut aufgewärmt.",
    info: {
      kurz: "Der volle Spagat vorwärts: Ein Bein gestreckt nach vorn, das andere nach hinten, das Becken sinkt bis zum Boden. Ziel vieler Beweglichkeitsprogramme und eine sehr intensive Dehnung für Beinrückseite und Hüftbeuger.",
      ausfuehrung: [
        "Wärme dich gründlich auf, zum Beispiel mit tiefem Ausfallschritt, halbem Spagat und Spagat-Gleiten.",
        "Knie dich hin, stell den rechten Fuß vorn auf und stütz die Hände links und rechts.",
        "Lass das rechte Bein langsam nach vorn und das linke Bein nach hinten gleiten.",
        "Richte das Becken gerade nach vorn aus, das hintere Knie zeigt zum Boden.",
        "Sinke so tief, wie es kontrolliert geht, und halte die Position, die Hände stützen weiter.",
        "Komm über die Hände kontrolliert heraus und wechsle die Seite."
      ],
      atmung: "Ruhig und tief atmen, nicht die Luft anhalten.",
      fehler: [
        "Becken dreht auf: Ein gerades Becken ist wichtiger als die Tiefe.",
        "Kalt in den Spagat: immer vorher aufwärmen.",
        "Ohne Stütze hineinfallen: Hände tragen Gewicht."
      ],
      vorteile: [
        "Maximale Dehnung von Beinrückseite und Hüftbeuger.",
        "Sichtbares Ziel für dein Beweglichkeitstraining.",
        "Nützlich für Kampfsport, Tanz und Turnen."
      ],
      tipps: [
        "Fortschritt braucht Monate. Drei bis vier Einheiten pro Woche sind besser als eine lange.",
        "Kombiniere passives Halten mit aktiven Übungen wie Spagat-Gleiten."
      ],
      varianten: "Leichter: Spagat mit Stütze oder halber Spagat. Schwerer: Arme über den Kopf oder vordere Ferse erhöht (Überspagat, nur für Fortgeschrittene).",
      sicherheit: "Bei Hüft-, Leisten- oder Knieproblemen nicht ausführen. Nie ruckartig in die Position."
    }
  },
]
