// Schnellkraft: Sprünge, Medizinballwürfe, Sprint- und Lauftechnik, Gleichgewicht.
import type { Uebung } from "../../logik/typen"

export const SCHNELLKRAFT: Uebung[] = [
  // ===== Sprünge: vertikal =====
  {
    id: "strecksprung",
    name: "Strecksprung mit Ausholbewegung",
    auch: ["Countermovement Jump", "CMJ", "Vertical Jump", "Strecksprung"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "waden"],
    sekundaer: ["beinbeuger", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "basketball", "volleyball"],
    golf: 2,
    schwerer: "hocksprung",
    hinweis: "Jeder Sprung maximal hoch, leise landen, zwischen den Sprüngen kurz neu ausrichten.",
    info: {
      kurz: "Der klassische Sprung nach oben mit schneller Ausholbewegung. Er trainiert die Fähigkeit, Kraft in kürzester Zeit zu entwickeln, und ist der Grundbaustein jedes Sprungtrainings.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Füße gerade nach vorn, Gewicht gleichmäßig auf dem ganzen Fuß, Arme locker neben dem Körper.",
        "Schwing die Arme kräftig nach hinten und senke dich gleichzeitig zügig in eine Viertel- bis halbe Kniebeuge ab. Die Hüfte geht nach hinten, der Oberkörper neigt sich leicht nach vorn.",
        "Kehre ohne Pause am tiefsten Punkt um: Arme explosiv nach vorn oben schwingen, Hüfte, Knie und Sprunggelenke gleichzeitig strecken.",
        "Spring so hoch wie möglich, der Körper ist in der Luft ganz gestreckt, die Zehen zeigen nach unten.",
        "Lande weich auf dem Vorfuß, rolle auf den ganzen Fuß ab und fang die Landung mit Hüfte und Knien ab, als würdest du dich leicht hinsetzen.",
        "Die Knie zeigen bei der Landung in Richtung der Zehen. Stabilisiere eine Sekunde, richte dich auf und starte den nächsten Sprung.",
        "Mach nur so viele Wiederholungen, wie du mit voller Höhe springen kannst, meist 3 bis 6 pro Satz."
      ],
      atmung: "Atme vor dem Ausholen kurz ein, halte die Spannung während des Absprungs und atme in der Landung oder danach aus.",
      fehler: [
        "Zu tief ausholen und dadurch langsam werden: Nur so tief gehen, wie du schnell umkehren kannst, etwa Viertel- bis halbe Hocke.",
        "Knie fallen beim Absprung oder bei der Landung nach innen: Knie aktiv über die Zehen schieben, eventuell mit Mini-Band üben.",
        "Steife, laute Landung mit gestreckten Beinen: Weich landen, Hüfte und Knie beugen, Geräusch als Rückmeldung nutzen.",
        "Arme bleiben passiv: Der Armschwung bringt deutlich mehr Höhe, kräftig mitschwingen.",
        "Zu viele Wiederholungen in Ermüdung: Sprungqualität geht vor Menge, Satz beenden, sobald die Höhe sinkt."
      ],
      vorteile: [
        "Verbessert die Schnellkraft von Gesäß, Oberschenkeln und Waden, also die Fähigkeit, Kraft schnell abzurufen.",
        "Nutzt den Dehnungs-Verkürzungs-Zyklus und macht Sehnen und Muskeln reaktiver.",
        "Schult eine sichere Landetechnik, was im Sport Verletzungen vorbeugen kann.",
        "Braucht kein Gerät und lässt sich gut ins Aufwärmen vor dem Krafttraining einbauen."
      ],
      tipps: [
        "Führe Sprünge immer frisch aus, also nach dem Aufwärmen und vor den schweren Kraftübungen.",
        "Volle Pause von 1 bis 2 Minuten zwischen den Sätzen, damit jeder Sprung maximal ist.",
        "Stell dir vor, du willst mit dem Kopf an die Decke stoßen. Das fördert die vollständige Streckung.",
        "Eine Markierung an der Wand oder ein Gegenstand über dir gibt ein konkretes Ziel."
      ],
      varianten: "Leichter: ohne Armschwung oder mit kleinerer Sprunghöhe, Fokus auf Landung. Schwerer: Hocksprung, Sprünge in Serie oder Kniebeugensprung mit Kurzhanteln.",
      sicherheit: "Bei Knie-, Achillessehnen- oder Sprunggelenksbeschwerden zuerst mit Landetraining (Snap-down) beginnen. Auf festem, rutschfestem Boden springen.",
      golf: "Studien zeigen einen Zusammenhang zwischen Sprungkraft und Schlägerkopfgeschwindigkeit. Die schnelle Streckung aus Hüfte und Beinen entspricht dem Bodendruck, den gute Spieler im Abschwung nach oben in den Treffmoment leiten."
    }
  },
  {
    id: "squat_jump_pause",
    name: "Squat Jump aus der Hocke",
    auch: ["Squat Jump", "Static Squat Jump", "Non-Countermovement Jump", "Sprung aus der Hocke"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["waden", "beinbeuger"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    schwerer: "strecksprung",
    hinweis: "In der Hocke 2 bis 3 Sekunden ruhig halten, dann ohne Nachwippen springen.",
    info: {
      kurz: "Sprung nach oben aus einer gehaltenen Hockposition ohne Ausholbewegung. Er trainiert die reine konzentrische Startkraft, also das Losdrücken aus dem Stand.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Hände in die Hüften gestützt oder vor der Brust verschränkt.",
        "Geh in eine halbe Kniebeuge, bis die Oberschenkel etwa 45 bis 60 Grad gebeugt sind, Oberkörper leicht vorgeneigt, Rücken gerade.",
        "Halte diese Position 2 bis 3 Sekunden völlig ruhig, ohne nachzuwippen.",
        "Drück dich dann so explosiv wie möglich vom Boden ab und strecke Hüfte, Knie und Sprunggelenke vollständig.",
        "Lande weich auf dem Vorfuß, rolle ab und fang die Landung in einer leichten Kniebeuge ab.",
        "Richte dich auf, atme kurz durch und nimm die Startposition für den nächsten Sprung neu ein."
      ],
      atmung: "Atme in der Hocke ein und halte die Luft während des Absprungs kurz an. Atme nach der Landung aus.",
      fehler: [
        "Vor dem Absprung doch kurz nachwippen: Dann ist es ein normaler Strecksprung, Position wirklich ruhig halten.",
        "Startposition zu tief: Nur bis zur halben Hocke gehen, sonst verlierst du an Explosivität.",
        "Oberkörper kippt weit nach vorn: Brust aufrecht, Blick nach vorn.",
        "Harte Landung: Leise und mit gebeugten Knien landen."
      ],
      vorteile: [
        "Trainiert die Startkraft ohne Hilfe des elastischen Rückfederns.",
        "Gut geeignet, um den Unterschied zum Strecksprung zu spüren und die Reaktivität zu erkennen.",
        "Überträgt sich auf Antritte aus dem Stand, etwa beim Sprintstart.",
        "Geringe technische Anforderungen und gut dosierbar."
      ],
      tipps: [
        "Wenige Wiederholungen, 3 bis 5 pro Satz, reichen völlig.",
        "Hände in den Hüften schalten den Armschwung aus und machen die Beinarbeit sichtbar.",
        "Gut im Wechsel mit Strecksprüngen, um die Rückfederung gezielt zu üben."
      ],
      varianten: "Leichter: geringere Sprunghöhe, Fokus auf saubere Landung. Schwerer: mit Kurzhanteln oder aus einer tieferen Position.",
      sicherheit: "Bei Kniebeschwerden die Startposition höher wählen. Wer Schmerzen beim Landen hat, sollte das abklären lassen."
    }
  },
  {
    id: "snap_down",
    name: "Snap-down (Landung lernen)",
    auch: ["Snap Down", "Drop Squat", "Landing Drill"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["beinbeuger", "waden", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["fussball", "basketball", "handball"],
    schwerer: "niedersprung_landung",
    hinweis: "Aus dem Zehenstand schnell in die Landeposition fallen und sofort einfrieren.",
    info: {
      kurz: "Einsteigerübung für das Sprungtraining: Aus dem Zehenstand fällst du blitzschnell in eine stabile Landeposition. Du lernst, Kräfte sicher abzufangen, bevor du hoch springst.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und geh auf die Zehenspitzen, Arme gestreckt über dem Kopf.",
        "Zieh die Arme kräftig nach unten hinten und lass dich gleichzeitig schnell in eine Viertelkniebeuge fallen.",
        "Die Füße landen flach und hörbar gleichzeitig, das Gewicht auf dem Mittelfuß.",
        "Friere die Position sofort ein: Hüfte nach hinten, Knie über den Zehen, Rücken gerade, Brust zeigt leicht nach vorn unten.",
        "Halte die Landeposition 2 Sekunden und prüfe, ob die Knie stabil bleiben.",
        "Richte dich auf und wiederhole. 5 bis 8 Wiederholungen pro Satz sind ideal."
      ],
      atmung: "Atme in der Hochposition ein und beim schnellen Absenken kräftig aus.",
      fehler: [
        "Knie wandern nach vorn über die Zehen und die Hüfte bleibt oben: Hüfte bewusst nach hinten schieben.",
        "Knie fallen nach innen: Knie leicht nach außen drücken.",
        "Landung auf den Fersen oder nur auf den Zehen: Mittelfuß belasten.",
        "Zu langsames Absenken: Die Übung lebt von der Geschwindigkeit, wirklich schnell fallen."
      ],
      vorteile: [
        "Lehrt die richtige Landemechanik, die Basis für alle Sprünge.",
        "Trainiert das schnelle Abbremsen, das für Richtungswechsel im Sport wichtig ist.",
        "Sehr gelenkschonend, weil kein Flug stattfindet.",
        "Eignet sich hervorragend für Einsteiger und als Teil des Aufwärmens."
      ],
      tipps: [
        "Filme dich von vorn, um die Kniestellung zu prüfen.",
        "Danach direkt einige Strecksprünge machen, die Landung fühlt sich dann sicherer an.",
        "Wenn das sauber sitzt, auf eine einbeinige Landung steigern."
      ],
      varianten: "Leichter: langsamer und weniger tief. Schwerer: einbeinig landen oder Niedersprung von einer niedrigen Box.",
      sicherheit: "Bei akuten Knieschmerzen auslassen. Auf rutschfestem Boden ausführen."
    }
  },
  {
    id: "hocksprung",
    name: "Hocksprung",
    auch: ["Tuck Jump", "Knee Tuck Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "hueftbeuger"],
    sekundaer: ["waden", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 270,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "volleyball"],
    hinweis: "Knie schnell zur Brust ziehen, aber vor der Landung wieder strecken.",
    info: {
      kurz: "Sprung nach oben, bei dem du in der Luft die Knie zur Brust ziehst. Er fordert hohe Absprungkraft, schnelle Hüftbeugung und eine kontrollierte Landung.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Arme leicht gebeugt vor dem Körper.",
        "Hol kurz aus und spring explosiv nach oben, die Arme schwingen mit nach oben.",
        "Zieh am höchsten Punkt beide Knie schnell Richtung Brust, die Hände können die Knie kurz antippen.",
        "Streck die Beine sofort wieder nach unten, damit du rechtzeitig landebereit bist.",
        "Lande weich auf beiden Vorfüßen, Knie über den Zehen, und fang die Landung ab.",
        "Mach entweder Einzelsprünge mit Pause oder 3 bis 5 Sprünge in Serie mit kurzer Bodenkontaktzeit."
      ],
      atmung: "Atme vor dem Absprung ein, beim Knieanziehen aus. Bei Serien in einem ruhigen Rhythmus weiteratmen.",
      fehler: [
        "Oberkörper krümmt sich zu den Knien statt die Knie zum Oberkörper: Brust aufrecht, Knie hochziehen.",
        "Beine bei der Landung noch angezogen: Rechtzeitig strecken, sonst landest du steif.",
        "Knie fallen beim Landen nach innen: Landung kontrollieren, eventuell zuerst Einzelsprünge.",
        "Zu viele Wiederholungen: Bei nachlassender Technik den Satz beenden."
      ],
      vorteile: [
        "Fordert maximale Absprunghöhe, weil du Zeit für das Anziehen brauchst.",
        "Trainiert die schnelle Hüftbeugung, die beim Sprinten wichtig ist.",
        "Wird in der Sportpraxis genutzt, um Landefehler sichtbar zu machen.",
        "Verbessert Körperkontrolle und Koordination in der Luft."
      ],
      tipps: [
        "Beginne mit Einzelsprüngen und stabiler Landung, bevor du Serien springst.",
        "Pro Satz 3 bis 6 Sprünge, volle Pause dazwischen.",
        "Auf weichem, aber stabilem Untergrund wie Rasen oder Sportboden springen."
      ],
      varianten: "Leichter: Strecksprung mit nur leichtem Knieanziehen. Schwerer: Serie mit möglichst kurzem Bodenkontakt.",
      sicherheit: "Hohe Belastung für Knie und Sprunggelenke. Bei Beschwerden in diesen Gelenken oder nach Verletzungen nur nach Rücksprache."
    }
  },
  {
    id: "pogo_spruenge",
    name: "Pogo-Sprünge",
    auch: ["Pogo Jumps", "Pogo Hops", "Ankle Hops", "Fußgelenkssprünge"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["waden"],
    sekundaer: ["schienbein", "quadrizeps"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "basketball", "tennis"],
    schwerer: "pogo_einbeinig",
    hinweis: "Kurzer, federnder Bodenkontakt, die Knie bleiben fast gestreckt.",
    info: {
      kurz: "Schnelle, federnde Sprünge fast nur aus den Fußgelenken. Sie trainieren die Steifigkeit von Waden und Achillessehne und damit die Reaktivkraft für Laufen und Springen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie nur ganz leicht gebeugt, Oberkörper aufrecht.",
        "Zieh die Zehen leicht Richtung Schienbein, damit der Fuß bei der Landung vorgespannt ist.",
        "Spring aus den Fußgelenken nach oben, die Knie beugen sich dabei nur minimal.",
        "Lande auf dem Vorfuß, die Fersen berühren den Boden kaum, und spring sofort wieder ab.",
        "Halte den Bodenkontakt so kurz wie möglich, als wäre der Boden heiß.",
        "Springe 10 bis 20 Mal in Serie oder etwa 10 bis 15 Sekunden, dann Pause."
      ],
      atmung: "Atme gleichmäßig und locker weiter, nicht die Luft anhalten.",
      fehler: [
        "Zu viel Kniebeugung: Dann wird es ein Strecksprung, Beine fast gestreckt lassen.",
        "Lange Bodenkontaktzeit: Weniger hoch springen, dafür schneller abfedern.",
        "Weiche, schlaffe Füße: Fußgelenke vorspannen, Zehen leicht anziehen.",
        "Oberkörper wackelt: Bauch fest, Arme ruhig mitschwingen."
      ],
      vorteile: [
        "Stärkt die Reaktivität von Waden und Achillessehne.",
        "Verbessert die Laufökonomie und den Abdruck beim Sprinten.",
        "Gute Vorbereitung der Sehnen auf intensivere Sprünge.",
        "Lässt sich überall ohne Gerät ins Aufwärmen einbauen."
      ],
      tipps: [
        "Die Sprunghöhe ist zweitrangig, entscheidend ist der kurze, federnde Kontakt.",
        "Eine Linie am Boden als Orientierung hilft, auf der Stelle zu bleiben.",
        "Gut kombinierbar mit Seilspringen als Vorübung."
      ],
      varianten: "Leichter: kleine Sprünge, ruhiger Rhythmus. Schwerer: einbeinig, vor und zurück oder seitlich über eine Linie.",
      sicherheit: "Bei Achillessehnen- oder Wadenbeschwerden zurückhaltend dosieren und mit wenigen Kontakten starten."
    }
  },
  {
    id: "pogo_einbeinig",
    name: "Einbeinige Pogo-Sprünge",
    auch: ["Single-Leg Pogo", "Single-Leg Ankle Hops"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["waden"],
    sekundaer: ["schienbein", "gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { sprunggelenk: 2 },
    stufe: 2,
    sport: ["laufen", "fussball", "tennis"],
    einseitig: true,
    hinweis: "Becken waagerecht halten, kurze Kontakte auf dem Vorfuß.",
    info: {
      kurz: "Federnde Sprünge auf einem Bein aus dem Fußgelenk. Die einbeinige Version entspricht der Belastung beim Laufen und fordert zusätzlich Gleichgewicht und Hüftstabilität.",
      ausfuehrung: [
        "Stell dich auf ein Bein, das Standknie nur leicht gebeugt, das andere Bein locker angewinkelt.",
        "Spann das Fußgelenk vor, indem du die Zehen leicht anziehst.",
        "Spring mit kleinen, schnellen Sprüngen auf der Stelle, die Bewegung kommt aus dem Fußgelenk.",
        "Lande auf dem Vorfuß, die Ferse berührt den Boden kaum, und federe sofort wieder ab.",
        "Halte Becken und Oberkörper ruhig, das Knie bleibt über dem Fuß.",
        "Springe 8 bis 15 Mal, dann wechsle das Bein."
      ],
      atmung: "Atme locker und gleichmäßig weiter.",
      fehler: [
        "Knie knickt nach innen: Weniger hoch springen und das Knie über dem zweiten Zeh halten.",
        "Becken kippt zur Seite: Gesäß des Standbeins anspannen.",
        "Zu lange Bodenkontakte: Höhe reduzieren, Tempo erhöhen.",
        "Rumpf schwankt stark: Arme ruhig mitführen, Blick geradeaus."
      ],
      vorteile: [
        "Laufnahe Belastung für Waden, Achillessehne und Fuß.",
        "Trainiert Gleichgewicht und seitliche Hüftstabilität.",
        "Zeigt Seitenunterschiede deutlich auf.",
        "Bereitet Sprunggelenk und Fuß auf Richtungswechsel vor."
      ],
      tipps: [
        "Zuerst die beidbeinige Version sicher beherrschen.",
        "Mit dem schwächeren Bein beginnen und die Wiederholungen danach angleichen.",
        "Für den Anfang neben einer Wand üben, um sich kurz abstützen zu können."
      ],
      varianten: "Leichter: beidbeinig oder mit Handkontakt zur Wand. Schwerer: vor und zurück oder seitlich über eine Linie springen.",
      sicherheit: "Bei Achillessehnenproblemen, Bänderverletzungen im Sprunggelenk oder Fußschmerzen nur nach Rücksprache."
    }
  },
  {
    id: "linienspruenge_seitlich",
    name: "Seitliche Linienhüpfer",
    auch: ["Lateral Line Hops", "Side-to-Side Line Hops", "Quick Feet Hops"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["waden"],
    sekundaer: ["adduktoren", "gesaess_mittel", "quadrizeps"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["fussball", "tennis", "basketball"],
    golf: 1,
    hinweis: "Schnell und flach über die Linie, Füße eng zusammen.",
    info: {
      kurz: "Schnelle, flache Sprünge beidbeinig seitlich über eine Linie und zurück. Sie trainieren Fußschnelligkeit, Reaktivität der Fußgelenke und seitliche Stabilität.",
      ausfuehrung: [
        "Leg dir eine Linie zurecht, etwa ein Klebeband oder eine Bodenfuge, und stell dich seitlich daneben.",
        "Füße eng zusammen, Knie leicht gebeugt, Gewicht auf den Vorfüßen, Arme angewinkelt vor dem Körper.",
        "Spring flach und schnell seitlich über die Linie und sofort wieder zurück.",
        "Die Bewegung kommt vor allem aus den Fußgelenken, der Oberkörper bleibt ruhig über der Linie.",
        "Halte den Bodenkontakt kurz und den Rhythmus gleichmäßig.",
        "Springe 10 bis 20 Sekunden oder 20 bis 30 Kontakte, dann Pause."
      ],
      atmung: "Locker und rhythmisch weiteratmen.",
      fehler: [
        "Zu hoch springen: Flach bleiben, Schnelligkeit ist das Ziel.",
        "Oberkörper pendelt mit: Rumpf über der Linie halten, nur die Beine bewegen sich.",
        "Auf der Ferse landen: Immer auf dem Vorfuß bleiben.",
        "Füße gehen auseinander: Beine eng zusammenhalten."
      ],
      vorteile: [
        "Verbessert die Fußschnelligkeit für Sportarten mit Richtungswechseln.",
        "Stärkt die seitliche Stabilität des Sprunggelenks.",
        "Geringe Belastung, daher gut für Einsteiger und das Aufwärmen.",
        "Fördert Rhythmus und Koordination."
      ],
      tipps: [
        "Kontakte in einer festen Zeit zählen, um Fortschritte zu messen.",
        "Wenn es sicher sitzt, vor und zurück oder einbeinig springen."
      ],
      varianten: "Leichter: langsamer Rhythmus. Schwerer: einbeinig oder im Viereck um zwei Linien herum.",
      sicherheit: "Bei instabilem Sprunggelenk oder frischer Bänderverletzung erst einbeinige Gleichgewichtsübungen aufbauen."
    }
  },
  {
    id: "box_sprung",
    name: "Sprung auf die Box",
    auch: ["Box Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["waden", "beinbeuger"],
    geraete: [["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "volleyball"],
    golf: 1,
    schwerer: "box_sprung_einbeinig",
    hinweis: "Hochspringen, herunter steigen. Die Box nur so hoch wählen, dass du ruhig landest.",
    info: {
      kurz: "Explosiver Sprung aus dem Stand auf eine stabile Box. Die erhöhte Landung verringert den Aufprall, so kannst du mit maximaler Absprungkraft springen und schonst die Gelenke.",
      ausfuehrung: [
        "Stell eine stabile, rutschfeste Box vor dich, mit etwa einer Fußlänge Abstand. Füße hüftbreit.",
        "Schwing die Arme nach hinten und geh schnell in eine Viertel- bis halbe Kniebeuge.",
        "Spring explosiv nach oben vorn, die Arme schwingen kräftig nach vorn oben.",
        "Zieh die Knie in der Luft an und lande mit beiden Füßen gleichzeitig vollständig auf der Box.",
        "Die Landeposition ist eine flache Hocke, nicht tiefer als deine Absprungposition. Knie über den Zehen.",
        "Richte dich auf der Box ganz auf und stehe kurz stabil.",
        "Steig langsam rückwärts herunter, nicht springen. Dann den nächsten Sprung vorbereiten."
      ],
      atmung: "Atme vor dem Ausholen ein, beim Absprung kräftig aus. Auf der Box ruhig durchatmen.",
      fehler: [
        "Box zu hoch und Landung in tiefer Hocke: Das ist Beweglichkeit, keine Sprungkraft. Niedrigere Box wählen.",
        "Rückwärts von der Box springen: Erhöht die Belastung für die Achillessehne unnötig, herunter steigen.",
        "Nur mit den Zehen auf der Boxkante landen: Den ganzen Fuß auf die Box setzen.",
        "Knie fallen bei der Landung nach innen: Knie aktiv nach außen halten.",
        "Hetzen zwischen den Sprüngen: Jede Wiederholung einzeln und frisch ausführen."
      ],
      vorteile: [
        "Trainiert maximale Absprungkraft bei geringer Landebelastung.",
        "Die Box gibt ein klares Ziel und fördert vollen Einsatz.",
        "Schult Koordination und Körpervertrauen.",
        "Überträgt sich auf Antritte und Sprünge im Mannschaftssport."
      ],
      tipps: [
        "3 bis 5 Wiederholungen pro Satz, 3 bis 5 Sätze, volle Pausen.",
        "Für den Anfang eine Box auf Kniehöhe oder etwas darunter.",
        "Stell dir vor, du landest leise wie eine Katze."
      ],
      varianten: "Leichter: niedrigere Box oder ohne Armschwung. Schwerer: aus dem Sitzen, einbeinig oder seitlich auf die Box.",
      sicherheit: "Nur stabile Boxen verwenden. Bei Schienbeinkontakt sofort die Höhe reduzieren. Bei Knie- oder Achillessehnenbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "box_sprung_sitzend",
    name: "Box-Sprung aus dem Sitzen",
    auch: ["Seated Box Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["beinbeuger", "waden", "bauch"],
    geraete: [["box", "bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "volleyball"],
    golf: 1,
    hinweis: "Aus dem Sitzen ohne Schwung aufspringen, auf der Box stabil landen.",
    info: {
      kurz: "Sprung auf eine Box aus dem Sitzen auf einer Bank. Weil die Ausholbewegung fehlt, musst du die Kraft aus dem Stand heraus entwickeln, das trainiert die Startkraft aus der Hüfte.",
      ausfuehrung: [
        "Stell eine Bank etwa einen halben Meter vor eine stabile Box. Setz dich auf die Bankkante, Füße hüftbreit auf dem Boden.",
        "Die Oberschenkel sind etwa waagerecht, der Oberkörper aufrecht, die Arme hinter dem Körper.",
        "Schwing die Arme nach vorn und drück dich gleichzeitig explosiv aus dem Sitzen nach oben vorn ab.",
        "Spring direkt auf die Box, ohne vorher aufzustehen oder auszuholen.",
        "Lande mit beiden Füßen ganz auf der Box in einer flachen Hocke und stabilisiere.",
        "Steig langsam herunter, setz dich wieder hin und wiederhole."
      ],
      atmung: "Atme im Sitzen ein, beim Absprung kräftig aus.",
      fehler: [
        "Zuerst aufstehen und dann springen: Der Absprung muss direkt aus dem Sitzen kommen.",
        "Rücken rundet sich beim Abdruck: Brust aufrecht, Hüfte nach vorn schieben.",
        "Box zu hoch: Lieber eine niedrigere Box mit sauberer Landung.",
        "Unruhige Landung: Erst stabil stehen, dann absteigen."
      ],
      vorteile: [
        "Trainiert die Startkraft ohne elastischen Rückfedereffekt.",
        "Fordert eine kraftvolle Hüftstreckung aus tiefer Position.",
        "Gute Variante, wenn normale Box-Sprünge sicher beherrscht werden.",
        "Geringe Landebelastung durch die erhöhte Landung."
      ],
      tipps: [
        "Die Box niedriger wählen als beim normalen Box-Sprung, oft 10 bis 20 cm weniger.",
        "3 bis 5 Wiederholungen pro Satz reichen.",
        "Kann auch auf einer zweiten, niedrigeren Box als Sitz ausgeführt werden."
      ],
      varianten: "Leichter: niedrige Box. Schwerer: höhere Box oder mit leichter Weste.",
      sicherheit: "Bei Knie- und Hüftbeschwerden vorsichtig, auf rutschfeste Geräte achten."
    }
  },
  {
    id: "box_sprung_seitlich",
    name: "Seitlicher Sprung auf die Box",
    auch: ["Lateral Box Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "gesaess_mittel"],
    sekundaer: ["adduktoren", "waden"],
    geraete: [["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "tennis", "basketball", "golf"],
    golf: 1,
    einseitig: true,
    hinweis: "Seitlich abspringen, mittig auf der Box landen, herunter steigen.",
    info: {
      kurz: "Sprung seitlich auf eine Box aus dem Stand. Er trainiert die seitliche Kraftentwicklung der Hüfte, die bei Richtungswechseln und seitlichen Bewegungen gebraucht wird.",
      ausfuehrung: [
        "Stell dich seitlich neben eine niedrige, stabile Box, Füße hüftbreit.",
        "Hol mit einer kurzen Kniebeuge aus, Arme schwingen nach unten.",
        "Spring kräftig seitlich nach oben auf die Box, beide Beine stoßen gleichzeitig ab.",
        "Lande mit beiden Füßen gleichzeitig mittig auf der Box, Knie über den Zehen, in einer flachen Hocke.",
        "Stabilisiere kurz und steig auf der Absprungseite wieder herunter.",
        "Mach alle Wiederholungen zu einer Seite, dann wechsle die Richtung."
      ],
      atmung: "Atme vor dem Absprung ein, beim Sprung aus.",
      fehler: [
        "Box zu hoch: Seitliche Sprünge erreichen weniger Höhe, eine deutlich niedrigere Box wählen.",
        "Landung auf der Kante: Mittig landen, ganzer Fuß auf der Box.",
        "Oberkörper kippt zur Seite: Rumpf aufrecht halten.",
        "Knie knicken nach innen: Kontrolliert und breit genug landen."
      ],
      vorteile: [
        "Trainiert die seitliche Explosivkraft der Hüfte.",
        "Verbessert seitliche Sprungkoordination für Sportarten mit Richtungswechseln.",
        "Geringe Landebelastung durch die erhöhte Landung.",
        "Ergänzt vertikale und horizontale Sprünge in der Ebene, die oft vernachlässigt wird."
      ],
      tipps: [
        "Mit 20 bis 40 cm Höhe beginnen.",
        "3 bis 5 Sprünge je Seite, volle Pause."
      ],
      varianten: "Leichter: seitliche Sprünge über eine Linie. Schwerer: höhere Box oder einbeinig abspringen.",
      sicherheit: "Bei Sprunggelenksinstabilität vorsichtig dosieren. Nur auf rutschfesten Boxen."
    }
  },
  {
    id: "box_sprung_einbeinig",
    name: "Einbeiniger Sprung auf die Box",
    auch: ["Single-Leg Box Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "waden", "beinbeuger"],
    geraete: [["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 3,
    sport: ["fussball", "basketball", "laufen"],
    einseitig: true,
    hinweis: "Niedrige Box, einbeinig abspringen, auf demselben Bein stabil landen.",
    info: {
      kurz: "Sprung auf einem Bein auf eine niedrige Box. Diese anspruchsvolle Variante trainiert einbeinige Schnellkraft und Stabilität, wie sie beim Absprung und Antritt im Sport gebraucht wird.",
      ausfuehrung: [
        "Stell dich auf ein Bein vor eine niedrige Box, etwa 20 bis 40 cm hoch.",
        "Das Standknie ist leicht gebeugt, das andere Bein locker angewinkelt, Arme hinten.",
        "Hol mit einer kurzen Kniebeuge aus und spring kraftvoll auf die Box, die Arme schwingen mit.",
        "Lande auf demselben Bein mittig auf der Box, Knie über dem Fuß, Hüfte leicht gebeugt.",
        "Halte die Landung 2 Sekunden stabil, ohne dass das Knie wackelt.",
        "Steig vorsichtig mit beiden Beinen herunter und wiederhole."
      ],
      atmung: "Atme vor dem Ausholen ein, beim Absprung aus.",
      fehler: [
        "Box zu hoch: Einbeinig erreichst du deutlich weniger Höhe als beidbeinig.",
        "Knie fällt bei der Landung nach innen: Niedrigere Box und Landung bewusst kontrollieren.",
        "Becken kippt: Gesäß anspannen, Becken waagerecht halten.",
        "Hüpfen nach der Landung: Die Landung muss sofort stehen."
      ],
      vorteile: [
        "Trainiert die Schnellkraft jedes Beins für sich.",
        "Fordert und verbessert die Kniestabilität in der Landung.",
        "Zeigt und verkleinert Seitenunterschiede.",
        "Nah an sportlichen Absprüngen, etwa beim Korbleger oder Kopfball."
      ],
      tipps: [
        "Erst sicher beidbeinig springen und einbeinig landen können.",
        "3 bis 4 Wiederholungen je Bein reichen.",
        "Mit dem schwächeren Bein beginnen."
      ],
      varianten: "Leichter: beidbeinig abspringen und einbeinig landen. Schwerer: höhere Box.",
      sicherheit: "Für Fortgeschrittene. Bei Knieproblemen, nach Kreuzbandverletzungen oder mit instabilem Sprunggelenk nur nach Rücksprache."
    }
  },
  {
    id: "niedersprung_landung",
    name: "Niedersprung mit Landung",
    auch: ["Depth Drop", "Drop Landing", "Box Drop"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["waden", "beinbeuger", "bauch"],
    geraete: [["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "volleyball", "handball"],
    schwerer: "drop_jump",
    hinweis: "Von der Box heruntersteigen, leise und stabil landen, Position halten.",
    info: {
      kurz: "Du lässt dich von einer Box fallen und landest sofort stabil. Die Übung trainiert das Abbremsen hoher Kräfte und bereitet Sehnen und Muskeln auf Niedersprünge vor.",
      ausfuehrung: [
        "Stell dich auf eine stabile Box, etwa 20 bis 40 cm hoch, die Zehen an der Kante.",
        "Mach einen Schritt nach vorn ins Leere, ohne abzuspringen, und lass dich fallen.",
        "Lande gleichzeitig auf beiden Füßen, das Gewicht auf dem Mittelfuß.",
        "Fang die Landung in einer Viertel- bis halben Hocke ab, Hüfte nach hinten, Knie über den Zehen.",
        "Friere die Landeposition 2 bis 3 Sekunden ein, ohne nachzufedern.",
        "Richte dich auf, steig wieder auf die Box und wiederhole."
      ],
      atmung: "Atme auf der Box ein und bei der Landung aus.",
      fehler: [
        "Von der Box abspringen statt fallen lassen: Dadurch wird die Höhe unkontrolliert größer.",
        "Laute, harte Landung: Weicher abfangen, gegebenenfalls Box niedriger wählen.",
        "Knie fallen nach innen: Knie aktiv über die Zehen schieben.",
        "Fersen landen zuerst: Auf dem Mittelfuß bis Vorfuß landen."
      ],
      vorteile: [
        "Trainiert gezielt die exzentrische Kraft, also das Abbremsen.",
        "Schult eine sichere Landetechnik für Sport und Alltag.",
        "Bereitet auf Niedersprünge mit Absprung vor.",
        "Stärkt die Belastbarkeit von Knie- und Sprunggelenk."
      ],
      tipps: [
        "Mit niedriger Höhe starten und erst steigern, wenn jede Landung leise und stabil ist.",
        "4 bis 6 Wiederholungen pro Satz.",
        "Kann auch einbeinig gelandet werden, dann deutlich niedriger."
      ],
      varianten: "Leichter: Snap-down ohne Box. Schwerer: höhere Box, einbeinige Landung oder Niedersprung mit sofortigem Absprung.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden niedrig beginnen oder auslassen."
    }
  },
  {
    id: "drop_jump",
    name: "Niedersprung mit Absprung",
    auch: ["Depth Jump", "Drop Jump", "Reaktivsprung"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "waden", "gesaess"],
    sekundaer: ["beinbeuger"],
    geraete: [["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 270,
    gelenke: { knie: 2, sprunggelenk: 2 },
    stufe: 3,
    sport: ["fussball", "basketball", "volleyball", "leichtathletik"],
    hinweis: "Fallen lassen, Boden kurz berühren und sofort maximal hoch springen.",
    info: {
      kurz: "Du lässt dich von einer Box fallen und springst nach kürzestem Bodenkontakt sofort wieder maximal hoch. Eine der intensivsten Formen des Sprungtrainings für Reaktivkraft.",
      ausfuehrung: [
        "Stell dich auf eine stabile Box, für den Anfang 20 bis 30 cm hoch.",
        "Mach einen Schritt ins Leere und lass dich fallen, ohne abzuspringen.",
        "Lande auf beiden Vorfüßen gleichzeitig, mit leicht gebeugten Knien und vorgespannten Fußgelenken.",
        "Spring sofort, ohne einzusacken, wieder explosiv nach oben, die Arme schwingen kräftig mit.",
        "Der Bodenkontakt soll so kurz wie möglich sein, als wäre der Boden heiß.",
        "Lande nach dem Sprung weich und stabil, dann zurück auf die Box.",
        "Pro Satz 3 bis 5 Sprünge, je Einheit selten mehr als 20 bis 30."
      ],
      atmung: "Atme auf der Box ein, beim Absprung aus.",
      fehler: [
        "Box zu hoch: Wenn du beim Kontakt einsackst oder die Fersen aufsetzen, ist die Höhe zu groß.",
        "Lange Bodenkontaktzeit: Weniger tief einfedern, schneller reagieren.",
        "Abspringen von der Box: Nur fallen lassen, sonst steigt die Belastung unkontrolliert.",
        "Training in Ermüdung: Nur frisch und mit vollen Pausen ausführen."
      ],
      vorteile: [
        "Trainiert den Dehnungs-Verkürzungs-Zyklus besonders intensiv.",
        "Kann Sprunghöhe und Antrittsschnelligkeit bei Trainierten deutlich verbessern.",
        "Steigert die Reaktivität von Sehnen und Muskulatur.",
        "Fester Bestandteil des Schnellkrafttrainings im Leistungssport."
      ],
      tipps: [
        "Voraussetzung: sichere Landungen beim Niedersprung und solide Grundkraft in den Beinen.",
        "Die ideale Höhe ist die, aus der du am höchsten springst, nicht die höchste mögliche.",
        "Volle Pausen von 2 bis 3 Minuten zwischen den Sätzen."
      ],
      varianten: "Leichter: Niedersprung nur mit Landung oder Pogo-Sprünge. Schwerer: höhere Box oder Sprung danach auf eine zweite Box.",
      sicherheit: "Hohe Belastung für Knie, Sprunggelenk und Sehnen. Nicht für Einsteiger, nicht bei Beschwerden in Knie, Achillessehne oder Sprunggelenk."
    }
  },
  // ===== Sprünge: horizontal, seitlich, einbeinig =====
  {
    id: "weitsprung",
    name: "Weitsprung aus dem Stand",
    auch: ["Broad Jump", "Standing Long Jump", "Standweitsprung"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["beinbeuger", "waden", "ruecken_unten"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "laufen", "leichtathletik"],
    golf: 2,
    schwerer: "weitsprung_serie",
    hinweis: "Maximal weit springen und die Landung stehen, bevor du zurückgehst.",
    info: {
      kurz: "Sprung aus dem Stand so weit wie möglich nach vorn. Er trainiert die explosive Hüftstreckung und ist ein bewährter Test für die Schnellkraft der Beine.",
      ausfuehrung: [
        "Stell dich hüftbreit hinter eine Linie, die Zehen zeigen nach vorn, Arme locker vor dem Körper.",
        "Schwing die Arme kräftig nach hinten und schieb dabei die Hüfte nach hinten, die Knie beugen sich, der Oberkörper neigt sich nach vorn.",
        "Schwing die Arme explosiv nach vorn oben und drück dich mit beiden Beinen gleichzeitig ab. Hüfte, Knie und Sprunggelenke strecken sich vollständig.",
        "Flieg in einem flachen Bogen etwa im 45-Grad-Winkel nach vorn.",
        "Zieh die Beine vor der Landung nach vorn und lande auf beiden Füßen gleichzeitig, die Arme kommen nach vorn.",
        "Fang die Landung in einer halben Hocke ab, Knie über den Zehen, und halte die Position 2 Sekunden.",
        "Geh zurück zur Linie und starte den nächsten Sprung frisch."
      ],
      atmung: "Atme beim Ausholen ein und beim Absprung kräftig aus.",
      fehler: [
        "Absprung zu flach oder zu steil: Etwa 45 Grad ergibt die größte Weite.",
        "Landung mit Rücklage und Rückwärtsfallen: Arme bei der Landung nach vorn bringen, Oberkörper leicht vorneigen.",
        "Knie fallen bei der Landung nach innen: Breiter landen und Knie über den Zehen halten.",
        "Unvollständige Streckung: Bewusst durch die Zehen abdrücken und den Körper in der Luft lang machen."
      ],
      vorteile: [
        "Trainiert die horizontale Kraftentwicklung, die bei Antritten und Beschleunigung zählt.",
        "Fordert vor allem Gesäß und Beinbeuger, also die hintere Kette.",
        "Einfach messbar, daher gut zur Fortschrittskontrolle.",
        "Verbessert das Zusammenspiel von Armen, Rumpf und Beinen."
      ],
      tipps: [
        "Weite mit einem Maßband oder Markierungen festhalten und notieren.",
        "3 bis 5 Sprünge pro Satz, jeweils mit vollständiger Erholung.",
        "Auf Rasen oder Sportboden springen, nicht auf glattem Untergrund."
      ],
      varianten: "Leichter: kürzere Sprünge mit Fokus auf Landung. Schwerer: Weitsprünge in Serie oder einbeinige Weitsprünge.",
      sicherheit: "Bei Knie- oder Rückenbeschwerden kürzer springen und auf eine weiche Landung achten.",
      golf: "Der Weitsprung wird in Studien zur Schlägerkopfgeschwindigkeit als Schnellkrafttest verwendet. Die kraftvolle Streckung der Hüfte und das Abdrücken vom Boden sind die Grundlage für einen schnellen Abschwung."
    }
  },
  {
    id: "weitsprung_serie",
    name: "Weitsprünge in Serie",
    auch: ["Consecutive Broad Jumps", "Repeated Broad Jumps"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["waden", "beinbeuger"],
    geraete: [["draussen"], []],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "leichtathletik", "rugby"],
    hinweis: "3 bis 5 Sprünge direkt hintereinander, kurzer Bodenkontakt.",
    info: {
      kurz: "Mehrere Weitsprünge direkt hintereinander, ohne Pause zwischen den Landungen. Die Übung verbindet horizontale Sprungkraft mit Reaktivität.",
      ausfuehrung: [
        "Stell dich hüftbreit an den Anfang einer freien Strecke von mindestens 10 Metern.",
        "Spring wie beim Weitsprung aus dem Stand mit kräftigem Armschwung nach vorn.",
        "Lande auf beiden Füßen und nutze die Landung sofort als Ausholbewegung für den nächsten Sprung.",
        "Die Arme schwingen bei jeder Landung nach hinten und beim Absprung wieder nach vorn.",
        "Halte den Bodenkontakt so kurz, wie es mit kontrollierter Kniestellung möglich ist.",
        "Nach 3 bis 5 Sprüngen den letzten Sprung stabil landen und halten, dann zurückgehen."
      ],
      atmung: "Atme bei jedem Absprung kurz und kräftig aus, zwischen den Sprüngen schnell ein.",
      fehler: [
        "Zwischen den Sprüngen stehen bleiben: Dann sind es Einzelsprünge. Landung direkt in den nächsten Absprung überführen.",
        "Sprünge werden immer kürzer: Lieber weniger Sprünge pro Serie.",
        "Knie knicken in der Landung ein: Weniger Weite, bessere Kontrolle.",
        "Oberkörper fällt nach vorn: Rumpf fest, Blick nach vorn."
      ],
      vorteile: [
        "Trainiert horizontale Reaktivkraft für Sprints und Antritte.",
        "Verbessert Rhythmus und Koordination zwischen Armen und Beinen.",
        "Fordert die Landefähigkeit unter Zeitdruck.",
        "Gute Vorstufe für Sprungläufe."
      ],
      tipps: [
        "Am besten draußen auf Rasen oder einer Laufbahn.",
        "Gesamte Weite der Serie messen, um Fortschritte zu sehen."
      ],
      varianten: "Leichter: Einzelsprünge mit Pause. Schwerer: mehr Sprünge oder einbeinig im Wechsel als Sprunglauf.",
      sicherheit: "Höhere Belastung für Knie und Achillessehne als Einzelsprünge. Bei Beschwerden auf Einzelsprünge zurückgehen."
    }
  },
  {
    id: "einbeinsprung_vor",
    name: "Einbeinsprung nach vorn mit Halten",
    auch: ["Single-Leg Hop and Stick", "Single-Leg Broad Jump", "Forward Hop"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "waden", "beinbeuger"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "laufen", "basketball", "handball"],
    einseitig: true,
    hinweis: "Auf demselben Bein landen und die Landung 2 Sekunden ruhig halten.",
    info: {
      kurz: "Sprung auf einem Bein nach vorn mit stabiler Landung auf demselben Bein. Die Übung trainiert einbeinige Schnellkraft und Landekontrolle und wird in der Sportphysiotherapie häufig eingesetzt.",
      ausfuehrung: [
        "Stell dich auf ein Bein, Knie leicht gebeugt, das andere Bein locker angewinkelt.",
        "Hol mit einer kurzen einbeinigen Kniebeuge und Armschwung nach hinten aus.",
        "Spring nach vorn ab, die Arme schwingen mit nach vorn.",
        "Lande auf demselben Bein, zuerst mit dem Vorfuß, dann mit dem ganzen Fuß.",
        "Fang die Landung mit Hüfte und Knie ab, das Knie bleibt über dem Fuß, das Becken waagerecht.",
        "Halte die Landeposition 2 Sekunden ruhig, ohne nachzuhüpfen.",
        "Geh zurück und wiederhole, dann wechsle das Bein."
      ],
      atmung: "Atme beim Ausholen ein und beim Absprung aus. In der Halteposition ruhig weiteratmen.",
      fehler: [
        "Zu weit springen und die Landung nicht halten können: Kürzer springen, die Landung ist das Ziel.",
        "Knie fällt nach innen: Gesäß anspannen und Knie über den zweiten Zeh schieben.",
        "Oberkörper kippt zur Seite: Rumpf aufrecht und mittig über dem Fuß.",
        "Steife Landung mit gestrecktem Knie: Hüfte und Knie beugen."
      ],
      vorteile: [
        "Trainiert einbeinige Schnellkraft und Landestabilität.",
        "Stärkt die Kontrolle des Knies in der Landung, was im Sport vorbeugend wirken kann.",
        "Macht Unterschiede zwischen den Beinen sichtbar.",
        "Gute Vorbereitung auf Sprungläufe und Richtungswechsel."
      ],
      tipps: [
        "Die Weite im Vergleich beider Beine messen, das zeigt Seitenunterschiede.",
        "3 bis 5 Sprünge je Bein, ausreichend Pause.",
        "Erst steigern, wenn jede Landung stabil steht."
      ],
      varianten: "Leichter: beidbeinig abspringen, einbeinig landen. Schwerer: mehrere Einbeinsprünge hintereinander.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden und nach Bandverletzungen nur nach Rücksprache."
    }
  },
  {
    id: "einbeinsprung_seitlich",
    name: "Einbeinsprung seitlich nach außen mit Halten",
    auch: ["Lateral Hop and Stick", "Single-Leg Lateral Hop"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess_mittel", "gesaess", "quadrizeps"],
    sekundaer: ["waden", "adduktoren"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 2 },
    stufe: 2,
    sport: ["fussball", "tennis", "basketball", "handball"],
    golf: 1,
    einseitig: true,
    hinweis: "Zur Seite des Standbeins springen und auf demselben Bein stabil landen.",
    info: {
      kurz: "Seitlicher Sprung auf einem Bein nach außen, also zur Seite des Standbeins, mit stabiler Landung. Er trainiert die seitliche Stabilität von Hüfte und Sprunggelenk.",
      ausfuehrung: [
        "Stell dich auf das rechte Bein, Knie leicht gebeugt, das linke Bein angewinkelt.",
        "Hol kurz aus und spring seitlich nach rechts, also nach außen.",
        "Lande auf demselben rechten Bein, zuerst auf dem Vorfuß, dann mit dem ganzen Fuß.",
        "Fang die Landung mit Hüfte und Knie ab, das Knie bleibt über dem Fuß.",
        "Halte die Landung 2 Sekunden, ohne dass Knie oder Fuß wegknicken.",
        "Spring zurück oder geh zurück und wiederhole. Danach das andere Bein nach links."
      ],
      atmung: "Atme beim Absprung aus und in der Halteposition ruhig weiter.",
      fehler: [
        "Zu weite Sprünge mit wackliger Landung: Kürzer springen, Kontrolle zuerst.",
        "Fuß knickt nach außen um: Kleiner beginnen und auf dem ganzen Fuß landen.",
        "Becken kippt zur Seite: Seitliches Gesäß anspannen.",
        "Oberkörper lehnt stark zur Seite: Rumpf aufrecht halten."
      ],
      vorteile: [
        "Stärkt die seitliche Stabilität von Hüfte, Knie und Sprunggelenk.",
        "Trainiert das Abbremsen seitlicher Bewegungen wie bei Richtungswechseln.",
        "Wird im Training nach Sprunggelenksverletzungen zum Wiederaufbau genutzt.",
        "Verbessert das Gleichgewicht unter dynamischer Belastung."
      ],
      tipps: [
        "Eine Linie am Boden als Ziel hilft, die Weite zu steigern.",
        "Mit 3 bis 5 Sprüngen je Seite beginnen."
      ],
      varianten: "Leichter: seitliche Linienhüpfer beidbeinig. Schwerer: weiter springen oder ohne Pause zurückspringen.",
      sicherheit: "Bei frischen Sprunggelenksverletzungen erst nach Freigabe. Bei Knieschmerzen pausieren."
    }
  },
  {
    id: "einbeinsprung_medial",
    name: "Einbeinsprung seitlich nach innen mit Halten",
    auch: ["Medial Hop and Stick", "Single-Leg Medial Hop"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess_mittel", "adduktoren", "quadrizeps"],
    sekundaer: ["gesaess", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 2, sprunggelenk: 2 },
    stufe: 3,
    sport: ["fussball", "tennis", "basketball", "handball"],
    einseitig: true,
    hinweis: "Zur Innenseite springen, das Knie in der Landung nicht nach innen fallen lassen.",
    info: {
      kurz: "Seitlicher Einbeinsprung nach innen, also über die Körpermitte zur Seite des Spielbeins. Die anspruchsvollste Richtung, weil das Knie beim Landen besonders leicht nach innen knickt.",
      ausfuehrung: [
        "Stell dich auf das rechte Bein, Knie leicht gebeugt, das linke Bein locker angewinkelt.",
        "Hol kurz aus und spring seitlich nach links, also nach innen.",
        "Lande auf dem rechten Bein, Vorfuß zuerst, dann der ganze Fuß.",
        "Fang die Landung ab und halte das Knie bewusst über dem Fuß, es darf nicht nach innen wandern.",
        "Halte die Position 2 Sekunden stabil.",
        "Zurückgehen und wiederholen, danach das linke Bein nach rechts."
      ],
      atmung: "Atme beim Absprung aus und atme in der Halteposition ruhig weiter.",
      fehler: [
        "Knie fällt nach innen: Deutlich kürzer springen und das Gesäß fest anspannen.",
        "Oberkörper dreht sich ein: Brust zeigt nach vorn.",
        "Landung auf dem Außenrist: Ganzer Fuß, Gewicht über dem Mittelfuß.",
        "Hektische Wiederholungen: Jede Landung muss erst stehen."
      ],
      vorteile: [
        "Trainiert gezielt die Kontrolle des Knies gegen das Einknicken.",
        "Ergänzt seitliche Sprünge nach außen und vervollständigt die Landestabilität.",
        "Nah an Bewegungen beim Richtungswechsel im Spiel.",
        "Wird in Testbatterien vor der Rückkehr in den Sport genutzt."
      ],
      tipps: [
        "Erst die Sprünge nach vorn und nach außen sicher beherrschen.",
        "Kurze Weite wählen, die Kontrolle ist wichtiger als die Distanz.",
        "Spiegel oder Video hilft, die Kniestellung zu prüfen."
      ],
      varianten: "Leichter: Sprünge nach außen oder sehr kleine Weite. Schwerer: weiter springen oder im Wechsel innen und außen.",
      sicherheit: "Hohe Anforderung an das Knie. Nach Knieverletzungen nur mit fachlicher Begleitung."
    }
  },
  {
    id: "skater",
    name: "Skater-Sprung mit Halten",
    auch: ["Skater Hop", "Skater Jump", "Lateral Bound and Stick", "Eisschnellläufer"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "adduktoren"],
    sekundaer: ["quadrizeps", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["fussball", "golf", "tennis", "eishockey"],
    golf: 2,
    schwerer: "seitliche_bounds",
    hinweis: "Seitlich abdrücken, auf dem anderen Bein landen und kurz halten.",
    info: {
      kurz: "Seitlicher Sprung von einem Bein auf das andere wie beim Eisschnelllauf, mit kurzem Halten nach jeder Landung. Er trainiert seitliche Schnellkraft aus der Hüfte und das Abbremsen.",
      ausfuehrung: [
        "Stell dich auf das rechte Bein, Knie und Hüfte leicht gebeugt, Oberkörper leicht vorgeneigt.",
        "Drück dich kräftig mit dem rechten Bein seitlich nach links ab, die Arme schwingen mit.",
        "Lande auf dem linken Bein, das rechte Bein schwingt hinter dem Standbein vorbei.",
        "Fang die Landung in einer leichten Kniebeuge ab, Knie über dem Fuß, Hüfte nach hinten.",
        "Halte die Landung 1 bis 2 Sekunden stabil.",
        "Drück dich vom linken Bein nach rechts ab und wiederhole im Wechsel."
      ],
      atmung: "Atme bei jedem Absprung aus und während des Haltens ruhig ein.",
      fehler: [
        "Nur mit dem Oberkörper schwingen statt mit dem Bein abdrücken: Kraft kommt aus dem Gesäß des Absprungbeins.",
        "Landung mit gestrecktem Bein: Knie und Hüfte beugen.",
        "Knie fällt bei der Landung nach innen: Kürzer springen, Gesäß anspannen.",
        "Zu hoher Sprung statt seitlich: Flach und weit zur Seite springen."
      ],
      vorteile: [
        "Trainiert seitliche Explosivkraft und das Abbremsen auf einem Bein.",
        "Stärkt Gesäßmuskulatur und Adduktoren im Zusammenspiel.",
        "Verbessert die Stabilität für Richtungswechsel.",
        "Ohne Gerät und auf wenig Platz durchführbar."
      ],
      tipps: [
        "Eine Markierung auf jeder Seite gibt ein Ziel für die Weite.",
        "5 bis 6 Sprünge je Seite, mit dem Halten sauber und kontrolliert.",
        "Später ohne Halten zügig hin und her springen."
      ],
      varianten: "Leichter: kleinere Sprünge oder Seitschritte. Schwerer: weiter springen, ohne Halten in Serie oder mit Kurzhanteln.",
      sicherheit: "Bei Knie- oder Sprunggelenksproblemen kurz springen und auf saubere Landung achten.",
      golf: "Im Rückschwung lädst du das rechte Bein, im Abschwung verlagerst du kraftvoll auf das linke. Der Skater-Sprung trainiert genau dieses seitliche Abdrücken und Abfangen, was mit mehr Schlägerkopfgeschwindigkeit in Verbindung gebracht wird."
    }
  },
  {
    id: "seitliche_bounds",
    name: "Seitliche Sprungserie",
    auch: ["Lateral Bounds", "Continuous Skater Bounds", "Heidens"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "adduktoren"],
    sekundaer: ["quadrizeps", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { knie: 1, sprunggelenk: 2 },
    stufe: 2,
    sport: ["fussball", "tennis", "eishockey", "golf"],
    golf: 2,
    hinweis: "Weit und flach seitlich springen, sofort wieder abdrücken.",
    info: {
      kurz: "Seitliche Sprünge von Bein zu Bein ohne Pause, bei denen die Landung direkt in den nächsten Absprung übergeht. Sie trainieren seitliche Reaktivkraft und Rhythmus.",
      ausfuehrung: [
        "Stell dich auf ein Bein in leichter Kniebeuge, Oberkörper etwas vorgeneigt.",
        "Spring kräftig seitlich zum anderen Bein, so weit wie kontrolliert möglich.",
        "Lande auf dem Vorfuß und mittleren Fuß, Knie über dem Fuß.",
        "Nutze die Landung sofort als Ausholbewegung und spring zur anderen Seite zurück.",
        "Die Arme schwingen locker gegengleich, der Oberkörper bleibt stabil.",
        "Mach 6 bis 10 Sprünge im Wechsel, dann Pause."
      ],
      atmung: "Atme rhythmisch, bei jedem Absprung kurz aus.",
      fehler: [
        "Zu lange Bodenkontakte: Weiter springen ist gut, aber nur mit schnellem Wechsel.",
        "Knie knickt nach innen: Weite reduzieren.",
        "Oberkörper pendelt weit über den Fuß hinaus: Rumpf über dem Standbein halten.",
        "Sprünge werden immer kürzer: Satz kürzer halten."
      ],
      vorteile: [
        "Steigert die seitliche Schnell- und Reaktivkraft.",
        "Trainiert die Belastbarkeit von Sprunggelenk und Hüfte in seitlicher Richtung.",
        "Nah an Bewegungen im Mannschafts- und Rückschlagsport.",
        "Verbessert Rhythmus und Koordination."
      ],
      tipps: [
        "Erst den Skater-Sprung mit Halten sicher beherrschen.",
        "Draußen oder auf griffigem Boden ausführen."
      ],
      varianten: "Leichter: Skater-Sprung mit Halten. Schwerer: größere Weite, über eine niedrige Markierung springen.",
      sicherheit: "Höhere Belastung für das Sprunggelenk. Bei Instabilität oder Schmerzen zurück zur Variante mit Halten.",
      golf: "Seitliche Schnellkraft hängt mit der Fähigkeit zusammen, im Abschwung Kraft vom Boden auf die Zielseite zu bringen. Die Übung verbessert dieses schnelle Verlagern und Abfangen."
    }
  },
  {
    id: "split_jump",
    name: "Ausfallschrittsprung",
    auch: ["Split Jump", "Split Squat Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["hueftbeuger", "waden", "adduktoren"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "laufen", "basketball"],
    einseitig: true,
    schwerer: "wechselsprung_ausfallschritt",
    hinweis: "Beinstellung bleibt gleich, aus dem Ausfallschritt senkrecht nach oben springen.",
    info: {
      kurz: "Sprung aus der Ausfallschrittposition senkrecht nach oben, die Beinstellung bleibt dabei gleich. Er trainiert Schnellkraft in der versetzten Schrittstellung, wie sie beim Laufen vorkommt.",
      ausfuehrung: [
        "Stell dich in einen Ausfallschritt, vorderer Fuß flach, hinterer Fuß auf dem Vorfuß, beide Füße hüftbreit versetzt.",
        "Senk dich ab, bis das vordere Knie etwa 90 Grad gebeugt ist und das hintere Knie über dem Boden schwebt.",
        "Spring explosiv senkrecht nach oben, die Arme schwingen gegengleich mit.",
        "Behalte in der Luft dieselbe Beinstellung bei.",
        "Lande weich in derselben Ausfallschrittposition und senk dich kontrolliert ab.",
        "Spring aus der Landung direkt wieder ab. Nach den Wiederholungen die Seite wechseln."
      ],
      atmung: "Atme beim Absenken ein und beim Absprung aus.",
      fehler: [
        "Vorderes Knie fällt nach innen: Knie über dem Fuß halten.",
        "Hinteres Knie schlägt auf dem Boden auf: Tiefe kontrollieren.",
        "Oberkörper kippt nach vorn: Aufrecht bleiben.",
        "Füße stehen auf einer Linie: Hüftbreit versetzt für Stabilität."
      ],
      vorteile: [
        "Trainiert einseitige Schnellkraft in einer laufähnlichen Stellung.",
        "Stärkt Quadrizeps und Gesäß des vorderen Beins.",
        "Verbessert Gleichgewicht und Hüftstabilität.",
        "Gute Vorstufe für den Wechselsprung."
      ],
      tipps: [
        "4 bis 6 Sprünge je Seite.",
        "Erst den Ausfallschritt ohne Sprung sauber beherrschen."
      ],
      varianten: "Leichter: kleine Sprünge oder ohne Absenken. Schwerer: Wechselsprung oder mit leichten Kurzhanteln.",
      sicherheit: "Bei Knieschmerzen im vorderen Bein die Tiefe verringern oder auslassen."
    }
  },
  {
    id: "wechselsprung_ausfallschritt",
    name: "Wechselsprung im Ausfallschritt",
    auch: ["Switch Lunge", "Jumping Lunge", "Cycled Split Jump", "Scissor Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["hueftbeuger", "beinbeuger", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "laufen", "basketball"],
    hinweis: "Beine in der Luft wechseln, weich im Ausfallschritt landen.",
    info: {
      kurz: "Sprung aus dem Ausfallschritt, bei dem du die Beine in der Luft wechselst. Er trainiert Schnellkraft, Koordination und schnellen Beinwechsel.",
      ausfuehrung: [
        "Stell dich in einen Ausfallschritt, beide Knie etwa 90 Grad gebeugt, Oberkörper aufrecht.",
        "Spring explosiv nach oben und wechsle in der Luft die Beine, das vordere Bein geht nach hinten und umgekehrt.",
        "Die Arme schwingen gegengleich zu den Beinen mit wie beim Laufen.",
        "Lande weich im Ausfallschritt mit dem anderen Bein vorn.",
        "Senk dich kontrolliert ab und spring direkt wieder.",
        "Zähle eine Wiederholung pro Landung, 6 bis 10 Landungen pro Satz."
      ],
      atmung: "Atme bei jedem Absprung aus, bei der Landung kurz ein.",
      fehler: [
        "Zu flache Sprünge, bei denen die Beine nur schlurfen: Erst Höhe gewinnen, dann wechseln.",
        "Landung mit gestreckten Knien: Bewusst in den Ausfallschritt einsinken.",
        "Vorderes Knie knickt nach innen: Kontrolliert landen.",
        "Schmale Spur: Füße bleiben hüftbreit versetzt."
      ],
      vorteile: [
        "Trainiert Schnellkraft und Beinwechsel, ähnlich wie beim Sprint.",
        "Fordert die Hüftbeuger beim schnellen Vorbringen des Beins.",
        "Verbessert Koordination und Gleichgewicht.",
        "Erhöht schnell die Herzfrequenz, daher auch im Zirkel nutzbar."
      ],
      tipps: [
        "Für Schnellkraft wenige, maximale Sprünge mit voller Pause.",
        "Für Kondition längere Sätze mit kleineren Sprüngen."
      ],
      varianten: "Leichter: Ausfallschrittsprung ohne Wechsel oder Wechselschritte ohne Flugphase. Schwerer: höhere Sprünge, doppelter Wechsel in der Luft.",
      sicherheit: "Bei Kniebeschwerden vorsichtig, zuerst den statischen Ausfallschritt üben."
    }
  },
  {
    id: "drehsprung_180",
    name: "Drehsprung 180 Grad",
    auch: ["180 Degree Jump", "Rotational Jump", "Jump and Turn"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "schraege_bauch"],
    sekundaer: ["waden", "bauch", "gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 260,
    gelenke: { knie: 1, sprunggelenk: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "fussball", "basketball"],
    golf: 2,
    hinweis: "In der Luft eine halbe Drehung, stabil landen, abwechselnd in beide Richtungen.",
    info: {
      kurz: "Sprung nach oben mit einer halben Drehung in der Luft und stabiler Landung. Er verbindet Sprungkraft mit Rotation und schult die Kontrolle über den Körper beim Drehen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie leicht gebeugt, Arme vor dem Körper.",
        "Hol mit einer kurzen Kniebeuge aus und drehe Arme und Schultern leicht gegen die Sprungrichtung vor.",
        "Spring explosiv nach oben und leite die Drehung mit Armen, Schultern und Hüfte ein.",
        "Dreh dich in der Luft um 180 Grad, der Blick findet früh den neuen Landepunkt.",
        "Lande weich auf beiden Füßen, Knie über den Zehen, und halte die Landung 2 Sekunden.",
        "Spring zurück in die andere Richtung, sodass du beide Seiten gleich oft trainierst."
      ],
      atmung: "Atme beim Absprung aus und nach der Landung wieder ein.",
      fehler: [
        "Drehung beginnt erst in der Luft: Die Rotation wird beim Absprung eingeleitet.",
        "Unsichere Landung mit Weiterdrehen: Erst eine Vierteldrehung üben.",
        "Knie verdrehen sich bei der Landung: Füße und Knie zeigen in dieselbe Richtung.",
        "Nur in eine Richtung springen: Beide Seiten gleich oft trainieren."
      ],
      vorteile: [
        "Trainiert die Erzeugung und das Abbremsen von Drehkraft.",
        "Verbessert räumliche Orientierung und Körperkontrolle.",
        "Fordert Rumpf und Hüfte beim Stabilisieren der Rotation.",
        "Bringt Abwechslung in reine vertikale Sprünge."
      ],
      tipps: [
        "Mit Vierteldrehungen von 90 Grad beginnen.",
        "4 bis 6 Sprünge pro Satz, abwechselnd links und rechts."
      ],
      varianten: "Leichter: 90-Grad-Drehung. Schwerer: 180 Grad mit sofortigem Rücksprung oder einbeinige Landung.",
      sicherheit: "Bei Kniebeschwerden vorsichtig, da Drehmomente auf das Knie wirken. Auf rutschfestem Boden springen.",
      golf: "Der Golfschwung verbindet Bodendruck mit Rotation. Der Drehsprung trainiert, beides gleichzeitig explosiv zu erzeugen und die Drehung anschließend stabil abzufangen, ähnlich wie im Durchschwung."
    }
  },
  {
    id: "bounding",
    name: "Sprungläufe",
    auch: ["Bounding", "Alternate Leg Bounds", "Sprunglauf"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "waden"],
    sekundaer: ["beinbeuger", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 2, sprunggelenk: 2, huefte: 1 },
    stufe: 3,
    sport: ["fussball", "leichtathletik", "laufen", "rugby"],
    hinweis: "Weite, kraftvolle Schritte mit Flugphase, das Knie des Schwungbeins kommt hoch.",
    info: {
      kurz: "Übertriebene Laufschritte mit langer Flugphase, bei denen du von einem Bein auf das andere springst. Eine Kernübung der Leichtathletik für horizontale Schnellkraft und Sprintkraft.",
      ausfuehrung: [
        "Lauf locker ein paar Schritte an, um in Bewegung zu kommen.",
        "Drück dich kraftvoll mit einem Bein nach vorn oben ab, das andere Knie schwingt nach vorn bis etwa auf Hüfthöhe.",
        "Bleib in der Luft lang gestreckt, das Abdruckbein ist hinten gestreckt.",
        "Lande auf dem Schwungbein aktiv unter dem Körper, mit dem Mittelfuß und gespanntem Fußgelenk.",
        "Drück dich sofort wieder ab und wechsle so von Bein zu Bein.",
        "Die Arme schwingen kräftig gegengleich, wie beim Sprint, nur weiter.",
        "Lauf 20 bis 40 Meter, dann gehend zurück und volle Pause."
      ],
      atmung: "Atme rhythmisch mit den Sprüngen, nicht die Luft anhalten.",
      fehler: [
        "Zu hoch statt weit springen: Nach vorn springen, flacher Bogen.",
        "Landung weit vor dem Körper mit der Ferse: Fuß aktiv unter dem Körper aufsetzen.",
        "Knie des Schwungbeins bleibt unten: Knie nach vorn oben treiben.",
        "In Ermüdung weitermachen: Qualität geht vor, Strecke kurz halten."
      ],
      vorteile: [
        "Trainiert die horizontale Kraft für Beschleunigung und Sprint.",
        "Stärkt die Reaktivität von Hüfte, Knie und Sprunggelenk.",
        "Verbessert die Schrittlänge und Koordination beim Laufen.",
        "Klassisches Mittel im Sprint- und Sprungtraining."
      ],
      tipps: [
        "Schritte auf einer Strecke zählen. Weniger Schritte für dieselbe Distanz bedeuten mehr Kraft pro Sprung.",
        "Auf Rasen oder Kunstrasen, nicht auf Asphalt.",
        "Erst nach sicheren Einbeinsprüngen ins Programm nehmen."
      ],
      varianten: "Leichter: Hopserlauf mit betontem Abdruck. Schwerer: längere Strecke oder bergauf.",
      sicherheit: "Hohe Belastung für Achillessehne, Knie und Schienbein. Nicht bei Beschwerden in diesen Bereichen und nicht für Einsteiger."
    }
  },
  // ===== Sprünge mit Zusatzlast und olympische Varianten =====
  {
    id: "kh_sprungkniebeuge",
    name: "Kniebeugensprung mit Kurzhanteln",
    auch: ["Dumbbell Jump Squat", "DB Jump Squat", "Loaded Jump Squat"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["waden", "beinbeuger", "unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { knie: 1, sprunggelenk: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "basketball"],
    golf: 2,
    hinweis: "Leichte Hanteln, 10 bis 20 Prozent des Körpergewichts insgesamt, jeder Sprung maximal.",
    info: {
      kurz: "Strecksprung mit Kurzhanteln seitlich in den Händen. Die Zusatzlast macht den Sprung kraftbetonter und trainiert die Schnellkraft im Bereich zwischen Krafttraining und reinen Sprüngen.",
      ausfuehrung: [
        "Nimm zwei leichte Kurzhanteln und lass die Arme gestreckt neben dem Körper hängen.",
        "Stell dich hüftbreit hin, Schultern zurück, Bauch fest.",
        "Senk dich zügig in eine Viertel- bis halbe Kniebeuge, die Hanteln bleiben seitlich am Körper.",
        "Kehre sofort um und spring explosiv nach oben, Hüfte, Knie und Sprunggelenke strecken sich vollständig.",
        "Die Hanteln bleiben ruhig neben dem Körper, die Arme schwingen nicht.",
        "Lande weich auf dem Vorfuß, fang die Landung in der Hocke ab und stabilisiere kurz.",
        "Richte dich neu aus und spring erneut, 3 bis 6 Sprünge pro Satz."
      ],
      atmung: "Atme vor dem Absenken ein, halte die Spannung im Absprung und atme nach der Landung aus.",
      fehler: [
        "Zu schwere Hanteln: Wenn du kaum noch vom Boden kommst, ist es zu viel. Geschwindigkeit ist das Ziel.",
        "Hanteln schwingen und schlagen an die Beine: Arme fest und ruhig halten.",
        "Harte Landung mit runden Rücken: Aufrecht landen, Rumpf fest.",
        "Zu tiefe Ausholbewegung: Viertel- bis halbe Hocke reicht."
      ],
      vorteile: [
        "Trainiert die Kraftentwicklung unter leichter Last, die Brücke zwischen Kniebeuge und Sprung.",
        "Steigert die Leistung bei hoher Bewegungsgeschwindigkeit.",
        "Leicht dosierbar und einfacher zu lernen als olympische Hebungen.",
        "Kann die Sprunghöhe ohne Last verbessern."
      ],
      tipps: [
        "Starte mit insgesamt etwa 10 Prozent des Körpergewichts, zum Beispiel 2 mal 4 kg.",
        "Wenige Wiederholungen mit voller Pause, nicht als Ausdauerübung.",
        "Gut als Kombination nach einem schweren Kniebeugensatz, um die Explosivität zu wecken."
      ],
      varianten: "Leichter: Strecksprung ohne Last. Schwerer: etwas schwerere Hanteln oder Kniebeugensprung mit Langhantel.",
      sicherheit: "Bei Rücken-, Knie- oder Sprunggelenksbeschwerden ohne Last bleiben. Hanteln vor der Landung nicht loslassen.",
      golf: "Gezielte Schnellkraft der Beine unter leichter Last steht in Zusammenhang mit höherer Schlägerkopfgeschwindigkeit. Die Übung trainiert das schnelle Drücken gegen den Boden, das im Abschwung für Tempo sorgt."
    }
  },
  {
    id: "lh_sprungkniebeuge",
    name: "Kniebeugensprung mit Langhantel",
    auch: ["Barbell Jump Squat", "Loaded Squat Jump"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["waden", "ruecken_unten", "beinbeuger"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 260,
    gelenke: { knie: 1, sprunggelenk: 1, ruecken: 2, nacken: 1 },
    stufe: 3,
    sport: ["fussball", "rugby", "leichtathletik"],
    hinweis: "Sehr leichte Last, Stange fest auf den Schultern halten, weich landen.",
    info: {
      kurz: "Strecksprung mit einer leichten Langhantel auf dem oberen Rücken. Im Leistungssport bewährt, um Kraft bei hoher Geschwindigkeit zu trainieren, erfordert aber sichere Technik.",
      ausfuehrung: [
        "Leg eine leichte Stange, oft nur die leere Stange oder 20 bis 30 Prozent deiner Kniebeugenlast, auf den oberen Rücken wie bei der Kniebeuge.",
        "Greif die Stange fest und zieh sie aktiv in den Rücken, damit sie beim Sprung nicht abhebt.",
        "Stell dich hüftbreit hin, Bauch fest, Blick nach vorn.",
        "Senk dich zügig in eine Viertelkniebeuge ab und kehre ohne Pause um.",
        "Spring explosiv nach oben, die Stange bleibt fest auf dem Rücken.",
        "Lande weich auf dem Vorfuß, fang die Landung in der Hocke ab und stabilisiere vollständig.",
        "Richte dich auf, atme kurz durch und mach den nächsten Sprung, 3 bis 5 pro Satz."
      ],
      atmung: "Atme vor dem Absenken tief ein, halte die Spannung im Absprung und atme nach der Landung aus.",
      fehler: [
        "Zu schwere Last: Die Geschwindigkeit sinkt und der Aufprall wird hart. Leicht bleiben.",
        "Stange hebt beim Sprung ab und schlägt auf: Stange fest nach unten in den Rücken ziehen.",
        "Rücken rundet sich bei der Landung: Rumpfspannung halten, weniger Last.",
        "Mehrere Sprünge ohne Stabilisieren: Jede Landung erst vollständig abfangen."
      ],
      vorteile: [
        "Trainiert Kraft bei hoher Geschwindigkeit, gut messbar über die Last.",
        "Im Leistungssport bewährt zur Verbesserung von Sprung- und Antrittsleistung.",
        "Ergänzt schwere Kniebeugen um eine schnelle Komponente.",
        "Lässt sich präzise steigern."
      ],
      tipps: [
        "Wer eine Multipresse hat, kann damit sicherer beginnen.",
        "Volle Pausen von 2 bis 3 Minuten.",
        "Nur im ausgeruhten Zustand, nicht am Ende des Trainings."
      ],
      varianten: "Leichter: Kniebeugensprung mit Kurzhanteln. Schwerer: etwas mehr Last, aber nur, solange die Sprunghöhe deutlich bleibt.",
      sicherheit: "Hohe Belastung für Wirbelsäule und Nacken. Nicht bei Rücken- oder Bandscheibenbeschwerden. Nur mit solider Kniebeugentechnik."
    }
  },
  {
    id: "power_clean",
    name: "Umsetzen aus dem Boden",
    auch: ["Power Clean", "Barbell Power Clean", "Umsetzen"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["ganzkoerper", "gesaess", "beinbeuger", "trapez"],
    sekundaer: ["quadrizeps", "ruecken_unten", "oberer_ruecken", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 2, handgelenk: 1, knie: 1, ellbogen: 1, schulter: 1 },
    stufe: 3,
    sport: ["fussball", "rugby", "leichtathletik", "kampfsport"],
    golf: 1,
    hinweis: "Stange nah am Körper, explosiv strecken, schnell unter die Stange kommen.",
    info: {
      kurz: "Olympische Hebung, bei der du die Langhantel in einer schnellen Bewegung vom Boden auf die Schultern bringst. Sie trainiert die explosive Streckung von Hüfte, Knie und Sprunggelenk.",
      ausfuehrung: [
        "Stell dich hüftbreit vor die Stange, sie liegt über der Fußmitte. Greif schulterbreit im Obergriff, Arme außerhalb der Knie.",
        "Hüfte etwas höher als die Knie, Rücken gerade, Brust raus, Schultern knapp vor der Stange.",
        "Heb die Stange kontrolliert vom Boden ab, indem du die Beine streckst. Rückenwinkel bleibt gleich, die Stange streift die Schienbeine.",
        "Sobald die Stange über den Knien ist, streck Hüfte, Knie und Sprunggelenke explosiv, als wolltest du springen.",
        "Zieh dich unmittelbar danach mit hohen Ellbogen schnell unter die Stange.",
        "Fang die Stange auf den vorderen Schultern in einer Viertelkniebeuge, Ellbogen zeigen nach vorn, Finger locker unter der Stange.",
        "Steh auf, dann die Stange kontrolliert über die Oberschenkel zurück zum Boden führen."
      ],
      atmung: "Atme vor dem Abheben tief ein und halte die Spannung während des Zugs. Atme nach dem Fangen aus.",
      fehler: [
        "Mit den Armen ziehen statt mit den Beinen springen: Die Arme bleiben gestreckt, bis die Hüfte voll gestreckt ist.",
        "Stange entfernt sich vom Körper: Stange eng führen, Latissimus anspannen.",
        "Runder Rücken beim Abheben: Last reduzieren, Startposition üben.",
        "Fangen mit tiefen Ellbogen auf den Handgelenken: Ellbogen schnell nach vorn bringen, Stange liegt auf den Schultern.",
        "Zu früh oder zu spät strecken: Erst die Hang-Variante lernen."
      ],
      vorteile: [
        "Trainiert maximale Kraftentwicklung in kurzer Zeit.",
        "Fordert und koordiniert nahezu den ganzen Körper.",
        "Seit Jahrzehnten Standard im Athletiktraining für Schnellkraft.",
        "Verbessert das Timing zwischen Hüfte, Knie und Oberkörper."
      ],
      tipps: [
        "Technik am besten mit einem erfahrenen Trainer lernen.",
        "Sätze mit 2 bis 3 Wiederholungen, Qualität geht vor Last.",
        "Erst Umsetzen aus dem Hang beherrschen, dann vom Boden."
      ],
      varianten: "Leichter: Umsetzen aus dem Hang, Kniebeugensprung oder Kurzhantel-Reißen. Schwerer: mehr Last oder Umsetzen in die tiefe Hocke.",
      sicherheit: "Technisch anspruchsvoll. Nicht bei Rücken-, Handgelenk- oder Schulterbeschwerden. Nur mit Hantelscheiben, die abgelegt werden dürfen, und mit ausreichend Platz."
    }
  },
  {
    id: "hang_power_clean",
    name: "Umsetzen aus dem Hang",
    auch: ["Hang Power Clean", "Hang Clean Power"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["ganzkoerper", "gesaess", "beinbeuger", "trapez"],
    sekundaer: ["quadrizeps", "ruecken_unten", "oberer_ruecken", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, handgelenk: 1, ellbogen: 1, knie: 1 },
    stufe: 3,
    sport: ["fussball", "rugby", "leichtathletik", "golf"],
    golf: 1,
    hinweis: "Aus dem Hang oberhalb der Knie starten, Hüfte explosiv strecken.",
    info: {
      kurz: "Umsetzen aus der Position über den Knien statt vom Boden. Die einfachere Einstiegsvariante legt den Fokus auf die explosive Hüftstreckung und das schnelle Fangen.",
      ausfuehrung: [
        "Heb die Stange im schulterbreiten Obergriff vom Boden auf und stell dich aufrecht hin.",
        "Schieb die Hüfte nach hinten und lass die Stange an den Oberschenkeln bis knapp über die Knie gleiten. Rücken gerade, Schultern leicht vor der Stange.",
        "Streck aus dieser Position Hüfte, Knie und Sprunggelenke explosiv, die Stange bleibt nah am Körper.",
        "Zieh die Schultern kurz hoch und dich mit hohen Ellbogen unter die Stange.",
        "Fang die Stange auf den vorderen Schultern in einer Viertelkniebeuge, Ellbogen nach vorn.",
        "Steh auf, senk die Stange kontrolliert zu den Oberschenkeln und beginne die nächste Wiederholung aus dem Hang."
      ],
      atmung: "Atme vor jeder Wiederholung ein, halte die Spannung im Zug und atme nach dem Fangen aus.",
      fehler: [
        "Arme ziehen zu früh: Erst die Hüfte strecken, dann die Arme.",
        "Hüfte stößt die Stange nach vorn weg: Stange an den Oberschenkeln führen.",
        "Fangen mit gestreckten Beinen: Immer in einer leichten Kniebeuge fangen.",
        "Ellbogen bleiben unten: Schnell nach vorn drehen."
      ],
      vorteile: [
        "Leichter zu lernen als das Umsetzen vom Boden.",
        "Trainiert gezielt die explosive Hüftstreckung.",
        "Geringere Belastung für den unteren Rücken.",
        "Verbessert Schnellkraft und Koordination des ganzen Körpers."
      ],
      tipps: [
        "Mit leerer Stange oder einem Holzstab die Technik einschleifen.",
        "2 bis 4 Wiederholungen pro Satz.",
        "Ein Video von der Seite zeigt, ob die Stange nah am Körper bleibt."
      ],
      varianten: "Leichter: Kurzhantel-Reißen oder Hochziehen aus dem Hang ohne Fangen. Schwerer: Umsetzen vom Boden oder in die tiefe Hocke.",
      sicherheit: "Bei Handgelenk-, Ellbogen- oder Rückenbeschwerden vorsichtig. Technik zuerst mit wenig Gewicht."
    }
  },
  {
    id: "hang_clean",
    name: "Umsetzen aus dem Hang in die tiefe Hocke",
    auch: ["Hang Clean", "Hang Squat Clean"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["ganzkoerper", "quadrizeps", "gesaess", "trapez"],
    sekundaer: ["beinbeuger", "ruecken_unten", "oberer_ruecken", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { knie: 2, ruecken: 1, handgelenk: 2, ellbogen: 1 },
    stufe: 3,
    sport: ["leichtathletik", "rugby", "gewichtheben"],
    hinweis: "Nach der Streckung in die tiefe Frontkniebeuge fallen und daraus aufstehen.",
    info: {
      kurz: "Umsetzen aus dem Hang, bei dem du die Stange in der tiefen Frontkniebeuge fängst und daraus aufstehst. Das erlaubt mehr Last als die Power-Variante und verlangt gute Beweglichkeit.",
      ausfuehrung: [
        "Steh aufrecht mit der Stange im schulterbreiten Obergriff, dann führe sie über die Knie in den Hang.",
        "Streck Hüfte, Knie und Sprunggelenke explosiv, die Stange bleibt eng am Körper.",
        "Zieh dich sofort aktiv unter die Stange und setz dich in eine tiefe Frontkniebeuge.",
        "Fang die Stange auf den vorderen Schultern, die Ellbogen hoch nach vorn, der Oberkörper aufrecht.",
        "Steh aus der tiefen Hocke kraftvoll auf, wie bei einer Frontkniebeuge.",
        "Senk die Stange kontrolliert zurück in den Hang für die nächste Wiederholung."
      ],
      atmung: "Atme vor dem Zug ein, halte die Spannung bis zum Aufstehen aus der Hocke und atme oben aus.",
      fehler: [
        "Oberkörper fällt in der Hocke nach vorn: Ellbogen hoch, Brust aufrecht, Beweglichkeit verbessern.",
        "Langsames Absinken unter die Stange: Aktiv nach unten ziehen.",
        "Fersen heben ab: Beweglichkeit im Sprunggelenk üben oder Gewichtheberschuhe verwenden.",
        "Stange landet hart auf dem Brustbein: Fangen früher und weicher abstimmen."
      ],
      vorteile: [
        "Trainiert Schnellkraft und die Fähigkeit, sich schnell unter eine Last zu bewegen.",
        "Kombiniert Zug und Frontkniebeuge in einer Bewegung.",
        "Ermöglicht höhere Lasten als das Umsetzen in die Viertelhocke.",
        "Fördert Beweglichkeit und Stabilität in der tiefen Hocke."
      ],
      tipps: [
        "Voraussetzung ist eine saubere tiefe Frontkniebeuge.",
        "1 bis 3 Wiederholungen pro Satz.",
        "Mit einem Gewichtheber-Trainer lernen, wenn möglich."
      ],
      varianten: "Leichter: Umsetzen aus dem Hang in die Viertelhocke. Schwerer: Umsetzen vom Boden in die tiefe Hocke.",
      sicherheit: "Fordert Handgelenke, Knie und Ellbogen in der Fangposition stark. Nicht bei Beschwerden in diesen Gelenken oder bei eingeschränkter Beweglichkeit."
    }
  },
  {
    id: "kh_reissen_einarmig",
    name: "Reißen mit Kurzhantel einarmig",
    auch: ["Dumbbell Snatch", "DB Snatch", "Single-Arm Dumbbell Snatch"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["ganzkoerper", "gesaess", "schulter_vorn", "trapez"],
    sekundaer: ["beinbeuger", "quadrizeps", "schraege_bauch", "oberer_ruecken"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1, ruecken: 1, handgelenk: 1 },
    stufe: 2,
    sport: ["fussball", "kampfsport", "rugby", "golf"],
    golf: 1,
    einseitig: true,
    hinweis: "Kraft aus der Hüfte, die Hantel in einem Zug über den Kopf führen.",
    info: {
      kurz: "Explosive Ganzkörperbewegung, bei der du eine Kurzhantel mit einem Arm in einem Zug vom Boden oder aus dem Hang über den Kopf bringst. Leichter zu lernen als die Langhantel-Varianten.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Kurzhantel liegt mittig zwischen den Füßen.",
        "Geh mit geradem Rücken in die Hüfte, greif die Hantel mit einer Hand im Obergriff, der freie Arm ist locker seitlich.",
        "Streck Hüfte, Knie und Sprunggelenke explosiv, die Hantel steigt dicht am Körper nach oben.",
        "Zieh den Ellbogen hoch und zur Seite und schieb die Hantel dann zügig über den Kopf, während du leicht in die Knie gehst.",
        "Fang die Hantel mit gestrecktem Arm über der Schulter, Oberarm neben dem Ohr, Bizeps zeigt nach vorn.",
        "Steh aufrecht, dann senke die Hantel kontrolliert über die Schulter und die Oberschenkel zurück.",
        "Mach alle Wiederholungen mit einem Arm, dann wechsle."
      ],
      atmung: "Atme vor dem Zug ein und atme aus, wenn die Hantel oben angekommen ist.",
      fehler: [
        "Hantel mit dem Arm hochdrücken: Die Kraft kommt aus der Hüfte, der Arm führt nur.",
        "Hantel schwingt in einem weiten Bogen nach vorn: Nah am Körper hochziehen.",
        "Rücken rundet sich beim Aufnehmen: Hüfte nach hinten, Brust raus.",
        "Arm über Kopf nicht ganz gestreckt: Ellbogen oben vollständig durchdrücken."
      ],
      vorteile: [
        "Trainiert Schnellkraft des ganzen Körpers mit einfacher Technik.",
        "Einseitige Last fordert die Rumpfstabilität gegen das Verdrehen.",
        "Verbessert die Koordination zwischen Beinen, Rumpf und Schulter.",
        "Gute Alternative, wenn keine Langhantel oder Plattform vorhanden ist."
      ],
      tipps: [
        "3 bis 5 Wiederholungen je Arm, leichtes Gewicht zum Lernen.",
        "Aus dem Hang starten erleichtert den Einstieg.",
        "Gut als Einstieg vor dem Umsetzen mit der Langhantel."
      ],
      varianten: "Leichter: aus dem Hang über den Knien oder mit Kettlebell-Schwung als Vorübung. Schwerer: vom Boden mit schwererer Hantel.",
      sicherheit: "Bei Schulterbeschwerden über Kopf oder Rückenproblemen auslassen. Genug Platz um dich herum lassen."
    }
  },
  // ===== Medizinballwürfe: Stoßen und Schlagen =====
  {
    id: "mb_brustwurf",
    name: "Medizinball-Brustwurf an die Wand",
    auch: ["Medicine Ball Chest Pass", "Chest Pass", "Med Ball Chest Throw", "Medizinball-Brustwurf"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch", "quadrizeps"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, ellbogen: 1, schulter: 1 },
    stufe: 1,
    sport: ["basketball", "handball", "kampfsport", "rugby"],
    hinweis: "Ball vor der Brust, explosiv wegstoßen, Arme ganz strecken.",
    info: {
      kurz: "Explosiver Stoß eines Medizinballs von der Brust gegen eine Wand oder nach vorn. Er trainiert die Schnellkraft der Druckmuskulatur, die beim Bankdrücken eher langsam gefordert wird.",
      ausfuehrung: [
        "Stell dich etwa 1 bis 2 Meter vor eine stabile Wand, Füße hüftbreit oder leicht versetzt, Knie locker.",
        "Halte den Medizinball mit beiden Händen seitlich vor der Brust, Daumen hinten, Ellbogen leicht nach außen.",
        "Geh kurz in eine leichte Kniebeuge und bring den Ball noch etwas an die Brust heran.",
        "Stoß den Ball explosiv nach vorn gegen die Wand, Beine strecken mit, die Arme werden vollständig gestreckt.",
        "Die Handflächen zeigen am Ende nach außen, als würdest du durch den Ball hindurch drücken.",
        "Fang den Rückpraller mit weichen Armen, bring den Ball zur Brust und wirf erneut.",
        "6 bis 10 Würfe pro Satz, jeder so schnell wie möglich."
      ],
      atmung: "Atme beim Heranziehen des Balls ein und beim Wurf kräftig aus.",
      fehler: [
        "Ball nur mit den Armen schieben: Beine und Rumpf mitarbeiten lassen.",
        "Zu schwerer Ball, langsamer Wurf: Leichteren Ball wählen, Tempo ist das Ziel.",
        "Ellbogen hängen tief und weit nach außen: Unterarme hinter dem Ball.",
        "Mit steifen Armen fangen: Ball weich abfedern, dann neu ausholen."
      ],
      vorteile: [
        "Trainiert die Schnellkraft von Brust, Schultern und Trizeps.",
        "Belastet die Gelenke wenig, da kein Abbremsen am Ende nötig ist.",
        "Überträgt sich auf Stoß- und Wurfbewegungen im Sport.",
        "Einfach zu lernen und gut als Aktivierung vor dem Bankdrücken."
      ],
      tipps: [
        "Ein Ball mit 3 bis 5 kg reicht für die meisten.",
        "Achte darauf, dass die Wand den Aufprall verträgt, Beton oder Mauerwerk.",
        "Draußen auf Weite werfen und Weite notieren, das motiviert."
      ],
      varianten: "Leichter: leichter Ball oder kniend ohne Beinbeteiligung. Schwerer: mit Schritt, schwererer Ball oder einarmig gestoßen.",
      sicherheit: "Bei Schulter- oder Handgelenksbeschwerden mit leichtem Ball beginnen. Weichen Ball verwenden, der nicht unkontrolliert zurückspringt."
    }
  },
  {
    id: "mb_brustwurf_schritt",
    name: "Medizinball-Brustwurf mit Schritt",
    auch: ["Step-In Chest Pass", "Split Stance Chest Pass", "Step and Chest Pass"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["brust", "trizeps", "gesaess"],
    sekundaer: ["schulter_vorn", "quadrizeps", "bauch"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 1,
    sport: ["basketball", "handball", "american_football", "kampfsport"],
    hinweis: "Schritt nach vorn und Wurf gleichzeitig, die Kraft kommt vom hinteren Bein.",
    info: {
      kurz: "Brustwurf, bei dem du mit einem Schritt nach vorn Schwung aus den Beinen in den Wurf überträgst. Er verbindet Beinkraft, Rumpfspannung und Armstoß zu einer Bewegung.",
      ausfuehrung: [
        "Stell dich etwa 2 bis 3 Meter vor eine Wand, Ball vor der Brust, Füße parallel.",
        "Verlagere das Gewicht kurz nach hinten und hol mit dem Ball etwas zur Brust aus.",
        "Mach einen kräftigen Schritt nach vorn und stoß im Moment des Aufsetzens den Ball explosiv nach vorn.",
        "Das hintere Bein drückt kraftvoll gegen den Boden, die Hüfte schiebt nach vorn.",
        "Strecke die Arme vollständig und lass den Körper der Bewegung folgen.",
        "Fang den Ball, geh zurück in die Ausgangsposition und wiederhole, abwechselnd mit linkem und rechtem Schritt."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig aus.",
      fehler: [
        "Schritt und Wurf passieren nacheinander: Beides gleichzeitig, der Ball verlässt die Hände beim Aufsetzen des Fußes.",
        "Oberkörper fällt weit nach vorn: Rumpf fest, aufrecht stoßen.",
        "Wurf geht nach oben statt nach vorn: Auf Brusthöhe auf die Wand zielen.",
        "Zu kurzer Schritt: Ausfallschrittlänge nutzen."
      ],
      vorteile: [
        "Überträgt Kraft aus den Beinen über den Rumpf in die Arme.",
        "Trainiert das Timing einer Ganzkörper-Stoßbewegung.",
        "Ermöglicht schnellere Würfe als der Brustwurf aus dem Stand.",
        "Nah an Stoß- und Passbewegungen im Mannschaftssport."
      ],
      tipps: [
        "Erst den Brustwurf aus dem Stand sicher beherrschen.",
        "5 bis 8 Würfe pro Satz, Schrittbein abwechseln."
      ],
      varianten: "Leichter: Brustwurf aus dem Stand. Schwerer: mit Anlauf von zwei Schritten oder schwererer Ball.",
      sicherheit: "Bei Schulter- und Handgelenksbeschwerden leichten Ball wählen."
    }
  },
  {
    id: "mb_brustwurf_kniend",
    name: "Medizinball-Brustwurf kniend",
    auch: ["Kneeling Chest Pass", "Tall-Kneeling Chest Pass"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch", "gesaess"],
    geraete: [["medizinball", "wand", "matte"], ["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 1,
    hinweis: "Im aufrechten Kniestand bleiben, Gesäß fest, nur Oberkörper und Arme stoßen.",
    info: {
      kurz: "Brustwurf aus dem aufrechten Kniestand. Weil die Beine kaum mithelfen, liegt der Fokus auf Oberkörper und Rumpfspannung, ideal, wenn die Beine geschont werden sollen.",
      ausfuehrung: [
        "Knie dich auf eine Matte etwa 1 Meter vor eine Wand, Knie hüftbreit, Oberkörper aufrecht.",
        "Spann Gesäß und Bauch an, sodass Hüfte und Oberkörper eine Linie bilden.",
        "Halte den Ball vor der Brust, Ellbogen hinter dem Ball.",
        "Stoß den Ball explosiv gegen die Wand, bis die Arme ganz gestreckt sind.",
        "Fang den Rückpraller weich ab, bring den Ball zur Brust und stoß erneut.",
        "Mach 6 bis 10 Würfe pro Satz, jeden so schnell wie möglich."
      ],
      atmung: "Atme vor dem Stoß ein und beim Wurf aus.",
      fehler: [
        "Hüfte knickt ein und das Gesäß geht nach hinten: Gesäß anspannen, aufrecht bleiben.",
        "Hohlkreuz beim Stoßen: Bauch fest, Rippen unten.",
        "Ball nur geschoben statt gestoßen: Kurzer, schneller Impuls.",
        "Zu nah an der Wand: Etwas Abstand, damit der Arm sich voll strecken kann."
      ],
      vorteile: [
        "Isoliert die Schnellkraft des Oberkörpers.",
        "Schult die Rumpfstabilität während einer explosiven Armbewegung.",
        "Schont Knie und Sprunggelenke.",
        "Gut für Einsteiger und für Tage mit Beinbelastung."
      ],
      tipps: [
        "Ein weicher Ball mit 2 bis 4 kg ist ideal.",
        "Unter die Knie eine Matte legen."
      ],
      varianten: "Leichter: leichter Ball. Schwerer: im Halbkniestand oder einarmig.",
      sicherheit: "Bei Kniebeschwerden gut polstern oder im Stand werfen. Bei Schulterproblemen leichter Ball."
    }
  },
  {
    id: "mb_brustwurf_liegend",
    name: "Medizinball-Brustwurf im Liegen nach oben",
    auch: ["Supine Chest Throw", "Supine Medicine Ball Chest Pass", "Lying Chest Toss"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["medizinball", "matte"], ["medizinball"]],
    belastung: "gewicht",
    hoehe_cm: 260,
    gelenke: { handgelenk: 1, ellbogen: 1, schulter: 1 },
    stufe: 1,
    hinweis: "Senkrecht nach oben stoßen und den Ball über der Brust weich fangen.",
    info: {
      kurz: "Explosiver Stoß eines Medizinballs im Liegen senkrecht nach oben. Die Bewegung entspricht dem Bankdrücken, nur mit maximaler Geschwindigkeit und ohne Abbremsen am Ende.",
      ausfuehrung: [
        "Leg dich auf den Rücken auf eine Matte, Knie angewinkelt, Füße flach am Boden.",
        "Halte den Ball mit beiden Händen über der Brust, Ellbogen etwa 45 Grad vom Körper.",
        "Senke den Ball kontrolliert bis kurz über die Brust.",
        "Stoß den Ball explosiv senkrecht nach oben, die Arme strecken sich vollständig.",
        "Fang den Ball mit beiden Händen und leicht gebeugten Armen, gib nach und bremse ihn bis zur Brust ab.",
        "Stoß direkt wieder ab, 6 bis 10 Würfe pro Satz."
      ],
      atmung: "Atme beim Herunterführen ein und beim Stoß kräftig aus.",
      fehler: [
        "Ball fliegt schräg und ist schwer zu fangen: Genau senkrecht über der Brust stoßen.",
        "Ball mit gestreckten Armen fangen: Arme leicht beugen und nachgeben.",
        "Zu schwerer Ball: Ein langsamer Stoß verfehlt das Ziel der Übung.",
        "Ellbogen weit nach außen: Etwa 45 Grad zum Körper halten."
      ],
      vorteile: [
        "Trainiert die Schnellkraft der Brust in der Bewegung des Bankdrückens.",
        "Kein Abbremsen am Ende, daher maximale Geschwindigkeit möglich.",
        "Braucht wenig Platz und keine Wand.",
        "Gut als Aktivierung vor schweren Drückübungen."
      ],
      tipps: [
        "Weicher Ball mit 2 bis 4 kg.",
        "Wer unsicher ist, beginnt mit niedrigen Stößen und steigert die Höhe."
      ],
      varianten: "Leichter: leichter Ball, kleinere Höhe. Schwerer: schwererer Ball oder einarmig im Wechsel.",
      sicherheit: "Achte immer auf den Ball und wirf nie so hoch, dass du ihn nicht sicher fangen kannst. Bei Schulterbeschwerden vorsichtig."
    }
  },
  {
    id: "mb_slam",
    name: "Medizinball-Slam",
    auch: ["Medicine Ball Slam", "Overhead Slam", "Ball Slam", "Slam Ball"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["latissimus", "bauch"],
    sekundaer: ["schulter_vorn", "trizeps", "gesaess", "quadrizeps"],
    geraete: [["medizinball"]],
    belastung: "gewicht",
    hoehe_cm: 260,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "kampfsport", "volleyball"],
    golf: 1,
    hinweis: "Ball über Kopf strecken, mit dem ganzen Körper auf den Boden schmettern.",
    info: {
      kurz: "Der Medizinball wird über den Kopf geführt und mit voller Kraft auf den Boden geschmettert. Die Übung trainiert die explosive Beugung des Rumpfes und die Kraft von Latissimus und Bauch.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte einen nicht springenden Slamball oder weichen Medizinball vor dem Körper.",
        "Heb den Ball explosiv über den Kopf, geh dabei auf die Zehenspitzen und streck den ganzen Körper.",
        "Schmetter den Ball mit Kraft aus Bauch und Latissimus vor deine Füße auf den Boden.",
        "Beuge dabei Hüfte und Knie, damit du dem Ball folgst und der Rücken gerade bleibt.",
        "Heb den Ball mit geradem Rücken aus der Hocke auf.",
        "Direkt in die nächste Wiederholung, 6 bis 10 Slams pro Satz."
      ],
      atmung: "Atme beim Hochstrecken ein und beim Schmettern kräftig aus.",
      fehler: [
        "Nur mit den Armen werfen: Der ganze Körper beugt sich explosiv nach vorn.",
        "Runder Rücken beim Aufheben: In die Hocke gehen und den Ball nah am Körper aufnehmen.",
        "Springender Ball fliegt ins Gesicht: Nur Bälle verwenden, die nicht springen.",
        "Wenig Streckung oben: Erst lang machen, dann schlagen."
      ],
      vorteile: [
        "Trainiert explosive Kraft des Rumpfes und des Latissimus.",
        "Fördert die Kraftübertragung vom Oberkörper in den Boden.",
        "Leicht zu lernen und auch für Einsteiger geeignet.",
        "Kann als Teil eines Intervalltrainings genutzt werden."
      ],
      tipps: [
        "Für Schnellkraft 5 bis 8 kraftvolle Würfe, für Kondition längere Sätze.",
        "Ein Slamball mit Sandfüllung bleibt liegen und ist sicherer."
      ],
      varianten: "Leichter: leichter Ball. Schwerer: schwererer Ball, Rotationsslam oder einbeinig.",
      sicherheit: "Bei Rücken- oder Schulterbeschwerden vorsichtig. Auf Boden achten, der den Aufprall verträgt."
    }
  },
  {
    id: "mb_slam_rotation",
    name: "Medizinball-Rotationsslam",
    auch: ["Rotational Med Ball Slam", "Rotational Slam", "Diagonal Slam"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "latissimus", "bauch"],
    sekundaer: ["gesaess", "schulter_vorn", "quadrizeps"],
    geraete: [["medizinball"]],
    belastung: "gewicht",
    hoehe_cm: 260,
    gelenke: { ruecken: 1, schulter: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "baseball", "kampfsport"],
    golf: 2,
    hinweis: "Ball über die Schulter heben und diagonal neben den Fuß schmettern, beide Seiten.",
    info: {
      kurz: "Diagonaler Slam, bei dem der Ball über eine Schulter geführt und mit Rumpfdrehung neben den gegenüberliegenden Fuß geschmettert wird. Er trainiert explosive Rotation von oben nach unten.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, Ball vor dem Körper.",
        "Heb den Ball diagonal über die rechte Schulter, dreh dabei Oberkörper und Hüfte leicht nach rechts, Gewicht auf dem rechten Bein.",
        "Dreh dich explosiv nach links und schmetter den Ball diagonal neben den linken Fuß.",
        "Der rechte Fuß dreht dabei auf dem Ballen mit, wie bei einem Schlag.",
        "Beuge die Knie in der Endposition, der Rücken bleibt lang.",
        "Ball aufnehmen und zur gleichen Seite wiederholen, dann die Seite wechseln."
      ],
      atmung: "Atme beim Hochführen ein und beim Slam kräftig aus.",
      fehler: [
        "Bewegung nur aus den Armen: Hüfte und Rumpf leiten die Drehung ein.",
        "Füße bleiben starr: Hinteren Fuß mitdrehen, um Knie und Rücken zu entlasten.",
        "Runder Rücken unten: In die Knie gehen statt den Rücken zu beugen.",
        "Nur eine Seite trainieren: Beide Seiten gleich oft."
      ],
      vorteile: [
        "Trainiert explosive Drehkraft des Rumpfes in einer diagonalen Kette.",
        "Fordert das Zusammenspiel von Hüfte, Rumpf und Schulter.",
        "Abwechslung zum geraden Slam und zur Seitwurf-Rotation.",
        "Nah an Schlag- und Wurfbewegungen."
      ],
      tipps: [
        "5 bis 6 Slams je Seite.",
        "Einen nicht springenden Slamball verwenden."
      ],
      varianten: "Leichter: gerader Slam oder leichter Ball. Schwerer: schwererer Ball, aus dem Ausfallschritt.",
      sicherheit: "Bei Rückenbeschwerden mit Rotation vorsichtig, Bewegungsumfang klein halten.",
      golf: "Die diagonale Kette von oben rechts nach unten links entspricht beim Rechtshänder der Richtung des Abschwungs. Explosive Rumpfrotation mit stabilen Beinen kann zu mehr Schlägerkopfgeschwindigkeit beitragen."
    }
  },
  // ===== Medizinballwürfe: Rotation =====
  {
    id: "mb_rotationswurf",
    name: "Medizinball-Rotationswurf an die Wand",
    auch: ["Rotational Med Ball Throw", "Side Toss", "Rotational Side Toss", "Hip Toss"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["bauch", "schulter_vorn", "adduktoren"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "tennis", "baseball"],
    golf: 2,
    hinweis: "Bewegung aus der Hüfte starten, wie beim Schwung.",
    info: {
      kurz: "Seitlicher Wurf eines Medizinballs auf Hüfthöhe gegen eine Wand, mit kraftvoller Drehung aus Hüfte und Rumpf. Die Grundübung für rotatorische Schnellkraft.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, etwa 1 bis 2 Meter entfernt, Füße etwas breiter als hüftbreit, Knie leicht gebeugt.",
        "Halte den Ball mit beiden Händen auf Hüfthöhe vor dem Körper, Arme leicht gebeugt.",
        "Dreh Hüfte und Oberkörper von der Wand weg und verlagere das Gewicht auf das hintere Bein.",
        "Starte die Drehung zur Wand mit der Hüfte, Rumpf und Arme folgen wie eine Peitsche.",
        "Lass den Ball auf Hüft- bis Brusthöhe gegen die Wand fliegen, der hintere Fuß dreht auf dem Ballen mit.",
        "Fang den Rückpraller, dreh dich kontrolliert zurück und wirf erneut.",
        "Alle Würfe auf einer Seite, dann umdrehen und die andere Seite."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig aus.",
      fehler: [
        "Wurf nur aus den Armen: Der Wurf beginnt im Boden und in der Hüfte.",
        "Hinterer Fuß bleibt starr: Auf dem Ballen mitdrehen, damit das Knie nicht verdreht wird.",
        "Runder Rücken: Brust aufrecht, Drehung um die Längsachse.",
        "Zu schwerer Ball: 2 bis 4 kg reichen, die Geschwindigkeit zählt."
      ],
      vorteile: [
        "Trainiert explosive Rumpfrotation und die Kraftübertragung von unten nach oben.",
        "Stärkt die schrägen Bauchmuskeln in ihrer sportlichen Funktion.",
        "Verbessert Bewegungen bei Schlägen, Würfen und Schüssen.",
        "Wenig Belastung für die Wirbelsäule bei guter Technik."
      ],
      tipps: [
        "Eine robuste Wand und ein weicher Ball, der nicht zu stark zurückspringt.",
        "Pro Seite 5 bis 8 Würfe, beide Seiten trainieren.",
        "Das Geräusch des Aufpralls zeigt dir, wie schnell der Wurf war."
      ],
      varianten: "Leichter: im Halbkniestand oder leichter Ball. Schwerer: Scoop-Toss, Kugelstoß mit Rotation oder mit Schritt.",
      sicherheit: "Bei Rückenbeschwerden zuerst mit kleinem Bewegungsumfang üben. Bei Bandscheibenproblemen Rücksprache halten.",
      golf: "Der Ablauf von Hüfte über Rumpf zu den Armen entspricht der Reihenfolge im Abschwung. Rotatorische Schnellkraft wird in Studien mit höherer Schlägerkopfgeschwindigkeit in Verbindung gebracht."
    }
  },
  {
    id: "mb_scoop_toss",
    name: "Medizinball-Scoop-Toss seitlich",
    auch: ["Rotational Scoop Toss", "Scoop Toss", "Underhand Rotational Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["beinbeuger", "quadrizeps", "schulter_vorn"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "baseball", "hockey"],
    golf: 2,
    hinweis: "Ball tief neben der hinteren Hüfte, von unten nach oben an die Wand schaufeln.",
    info: {
      kurz: "Rotationswurf von tief neben der hinteren Hüfte schräg nach oben gegen die Wand. Die Bewegung kombiniert Hüftstreckung und Rotation und ist eine Standardübung im Rotationstraining.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, etwa 2 Meter entfernt, Füße etwas breiter als hüftbreit.",
        "Geh in eine leichte Hocke und führe den Ball tief neben die hintere Hüfte, das Gewicht liegt auf dem hinteren Bein.",
        "Starte die Bewegung mit dem Abdruck des hinteren Beins und der Drehung der Hüfte zur Wand.",
        "Schaufel den Ball von unten diagonal nach oben gegen die Wand, etwa auf Kopfhöhe.",
        "Streck dich am Ende vollständig, der hintere Fuß dreht auf dem Ballen.",
        "Fang den Ball, geh zurück in die Ausgangsposition und wiederhole. Beide Seiten trainieren."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig aus.",
      fehler: [
        "Ball nur mit den Armen hochwerfen: Beine und Hüfte erzeugen die Kraft.",
        "Runder Rücken in der tiefen Position: Hüfte nach hinten, Brust offen.",
        "Kaum Gewichtsverlagerung: Bewusst vom hinteren auf das vordere Bein verlagern.",
        "Ball zu weit vom Körper: Arme bleiben locker, Ball nah an der Hüfte."
      ],
      vorteile: [
        "Verbindet Hüftstreckung und Rotation in einer explosiven Bewegung.",
        "Trainiert den Kraftfluss vom Boden über die Hüfte in die Arme.",
        "Fordert die hintere Kette und die schrägen Bauchmuskeln.",
        "Ergänzt den horizontalen Rotationswurf um eine diagonale Ebene."
      ],
      tipps: [
        "Weicher Ball mit 2 bis 5 kg.",
        "5 bis 8 Würfe je Seite, volle Pausen."
      ],
      varianten: "Leichter: Rotationswurf auf Hüfthöhe. Schwerer: mit Schritt nach vorn oder schwererer Ball.",
      sicherheit: "Bei Rückenschmerzen in Beugung und Rotation vorsichtig und mit leichtem Ball.",
      golf: "Der Scoop-Toss trainiert die Kraftübertragung vom hinteren Bein über die Hüfte nach oben, ähnlich wie Spieler im Abschwung Bodendruck in Rotation umsetzen."
    }
  },
  {
    id: "mb_kugelstoss_rotation",
    name: "Medizinball-Kugelstoß mit Rotation",
    auch: ["Rotational Shot Put", "Med Ball Shot Put", "Rotational Med Ball Shot Put"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "brust", "trizeps"],
    sekundaer: ["gesaess", "schulter_vorn", "quadrizeps"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, schulter: 1, ellbogen: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "baseball", "kampfsport"],
    golf: 2,
    hinweis: "Ball an der hinteren Schulter, aus der Hüftdrehung wie beim Kugelstoßen an die Wand stoßen.",
    info: {
      kurz: "Rotationswurf, bei dem der Ball von der hinteren Schulter wie beim Kugelstoßen gegen die Wand gestoßen wird. Die Drehung aus Hüfte und Rumpf endet in einem kräftigen Armstoß.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, etwa 2 Meter entfernt, Füße etwas breiter als hüftbreit.",
        "Halte den Ball mit der hinteren Hand unter dem Ball an der Schulter, die vordere Hand stützt ihn seitlich, Ellbogen hinter dem Ball.",
        "Dreh dich leicht von der Wand weg und verlagere das Gewicht auf das hintere Bein.",
        "Starte mit der Hüfte die Drehung zur Wand, dann folgen Rumpf und Schulter.",
        "Stoß den Ball am Ende mit dem hinteren Arm kräftig gegen die Wand, Ellbogen auf Ballhöhe.",
        "Der hintere Fuß dreht auf dem Ballen mit, du endest frontal zur Wand.",
        "Ball fangen, zurück in die Ausgangsposition und wiederholen, dann Seite wechseln."
      ],
      atmung: "Atme beim Ausholen ein und beim Stoß kräftig aus.",
      fehler: [
        "Ellbogen hängt unter dem Ball: Ellbogen hinter und auf Höhe des Balls halten.",
        "Arm stößt vor der Drehung: Erst Hüfte, dann Rumpf, zuletzt Arm.",
        "Fuß bleibt starr: Hinteren Fuß mitdrehen.",
        "Ball wird geworfen statt gestoßen: Kein Ausholen hinter den Kopf."
      ],
      vorteile: [
        "Trainiert die Kraftübertragung von der Hüfte bis in den Arm.",
        "Fordert die Rumpfrotation und die Druckmuskulatur gleichzeitig.",
        "Schonend für die Schulter, da der Arm nicht über Kopf geführt wird.",
        "In Rotationssportarten bewährt."
      ],
      tipps: [
        "Weicher Ball mit 2 bis 4 kg.",
        "4 bis 6 Stöße je Seite."
      ],
      varianten: "Leichter: Rotationswurf mit beiden Händen auf Hüfthöhe. Schwerer: mit Schritt nach hinten (Step-behind) oder schwererer Ball.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden mit leichtem Ball beginnen.",
      golf: "Die Reihenfolge Hüfte, Rumpf, Arm entspricht der kinematischen Abfolge im Golfschwung. Die Übung trainiert, diese Abfolge mit hoher Geschwindigkeit abzurufen."
    }
  },
  {
    id: "mb_rotationswurf_kniend",
    name: "Medizinball-Rotationswurf im Halbkniestand",
    auch: ["Half-Kneeling Rotational Throw", "Half-Kneeling Med Ball Side Toss"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "schulter_vorn", "oberer_ruecken"],
    geraete: [["medizinball", "wand", "matte"], ["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf", "tennis", "baseball"],
    golf: 2,
    hinweis: "Becken stabil halten, die Drehung kommt aus dem Oberkörper.",
    info: {
      kurz: "Rotationswurf aus dem Halbkniestand seitlich zur Wand. Weil die Beine ausgeschaltet sind, trainierst du gezielt die Drehkraft des Rumpfes bei stabilem Becken.",
      ausfuehrung: [
        "Knie dich seitlich zur Wand auf eine Matte, das wandnahe Knie ist oben und der Fuß steht vorn, das andere Knie liegt hinten auf.",
        "Oberkörper aufrecht, Gesäß des hinteren Beins angespannt, Becken zeigt nach vorn.",
        "Halte den Ball auf Brust- bis Bauchhöhe vor dem Körper.",
        "Dreh den Oberkörper von der Wand weg, das Becken bleibt dabei ruhig.",
        "Dreh dich explosiv zur Wand und wirf den Ball mit beiden Händen gegen die Wand.",
        "Fang den Ball, dreh dich zurück und wiederhole. Danach Beinstellung und Seite wechseln."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig aus.",
      fehler: [
        "Becken dreht stark mit: Gesäß anspannen und Becken nach vorn halten.",
        "Oberkörper sackt zusammen: Lang und aufrecht bleiben.",
        "Wurf nur aus den Armen: Brustkorb und Schultern drehen aktiv.",
        "Hohlkreuz: Rippen nach unten, Bauch fest."
      ],
      vorteile: [
        "Isoliert die Rotationskraft des Rumpfes.",
        "Verbessert die Trennung von Becken und Oberkörper.",
        "Schonend für Knie und Hüfte.",
        "Guter Einstieg in das Rotationstraining mit Medizinball."
      ],
      tipps: [
        "Leichter Ball, 2 bis 3 kg reichen.",
        "6 bis 8 Würfe je Seite."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang, leichter Ball. Schwerer: im Stand oder als Scoop-Toss.",
      sicherheit: "Bei Rückenschmerzen in der Drehung den Umfang begrenzen. Knie gut polstern.",
      golf: "Die Trennung von Becken und Oberkörper ist zentral für einen effizienten Golfschwung. Der Wurf im Halbkniestand trainiert gezielt die schnelle Drehung des Oberkörpers, die im Abschwung Tempo erzeugt."
    }
  },
  {
    id: "mb_rotationswurf_schritt",
    name: "Medizinball-Rotationswurf mit Kreuzschritt",
    auch: ["Step-Behind Rotational Throw", "Step-Behind Med Ball Throw", "Shuffle Rotational Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "adduktoren"],
    sekundaer: ["quadrizeps", "schulter_vorn", "bauch"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, knie: 1 },
    stufe: 3,
    sport: ["golf", "baseball", "tennis", "handball"],
    golf: 2,
    hinweis: "Mit einem Schritt hinter dem Standbein Schwung holen, dann voll in den Wurf drehen.",
    info: {
      kurz: "Rotationswurf mit einem Anlaufschritt, bei dem das hintere Bein hinter dem vorderen zur Wand kreuzt. Der zusätzliche Schwung erlaubt die höchsten Wurfgeschwindigkeiten im Rotationstraining.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, etwa 3 bis 4 Meter entfernt, den Ball auf Hüfthöhe vor dir.",
        "Mach mit dem hinteren Bein einen Schritt hinter dem vorderen Bein vorbei Richtung Wand.",
        "Setz das vordere Bein sofort weiter Richtung Wand und lade dabei das Gewicht auf das hintere Bein, der Ball geht zur hinteren Hüfte.",
        "Stemm das vordere Bein ein und dreh Hüfte, Rumpf und Arme explosiv zur Wand.",
        "Wirf den Ball auf Hüft- bis Brusthöhe gegen die Wand, der hintere Fuß dreht mit.",
        "Fang den Ball, geh zurück an den Start und wiederhole. Beide Seiten trainieren."
      ],
      atmung: "Atme beim Anlaufschritt ein und beim Wurf kräftig aus.",
      fehler: [
        "Schritt und Wurf ohne Übergang: Der Anlauf muss fließend in das Einstemmen münden.",
        "Vorderes Bein gibt nach: Fest einstemmen, damit die Energie in die Drehung geht.",
        "Oberkörper dreht zu früh auf: Erst Hüfte, dann Schultern.",
        "Zu nah an der Wand: Genug Abstand für einen sicheren Rückpraller."
      ],
      vorteile: [
        "Erlaubt höhere Wurfgeschwindigkeiten als der Wurf aus dem Stand.",
        "Trainiert das Abbremsen und Umlenken von Schwung durch das vordere Bein.",
        "Verbessert Timing und Koordination der gesamten Kette.",
        "Nah an Wurf- und Schlagbewegungen mit Anlauf."
      ],
      tipps: [
        "Erst den Rotationswurf aus dem Stand und den Scoop-Toss sicher beherrschen.",
        "3 bis 5 Würfe je Seite, volle Pausen."
      ],
      varianten: "Leichter: Rotationswurf aus dem Stand. Schwerer: schwererer Ball oder Scoop-Toss mit Kreuzschritt.",
      sicherheit: "Hohe Kräfte auf das vordere Knie und den unteren Rücken. Bei Beschwerden auf die Variante aus dem Stand zurückgehen.",
      golf: "Das Einstemmen des vorderen Beins mit anschließender schneller Rumpfdrehung ähnelt dem Bremsen der Hüfte im Treffmoment. Viele Golfathletiktrainer setzen diese Wurfform für mehr Geschwindigkeit ein."
    }
  },
  // ===== Medizinballwürfe: vorwärts, rückwärts, über Kopf =====
  {
    id: "mb_ueberkopf_rueckwaerts",
    name: "Medizinball über Kopf rückwärts werfen",
    auch: ["Overhead Backward Toss", "Backward Overhead Throw", "Overhead Back Toss"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "ruecken_unten"],
    sekundaer: ["quadrizeps", "waden", "schulter_vorn"],
    geraete: [["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 400,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 2,
    sport: ["leichtathletik", "fussball", "rugby", "golf"],
    golf: 1,
    hinweis: "Aus der Hocke explosiv strecken und den Ball hoch über den Kopf nach hinten werfen.",
    info: {
      kurz: "Wurf eines Medizinballs aus der Hocke über den Kopf nach hinten. Er trainiert die explosive Streckung von Hüfte, Knie und Sprunggelenk, ähnlich wie beim Umsetzen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, mit dem Rücken zu einer freien Fläche, und halte den Ball mit gestreckten Armen vor dem Körper.",
        "Schieb die Hüfte nach hinten und führe den Ball zwischen die Knie, Rücken gerade, Blick nach vorn.",
        "Streck Hüfte, Knie und Sprunggelenke explosiv, die Arme schwingen den Ball gestreckt nach oben.",
        "Lass den Ball über dem Kopf los, sodass er in einem hohen Bogen nach hinten fliegt.",
        "Du darfst dabei auf die Zehen gehen oder leicht abspringen.",
        "Dreh dich um, hol den Ball und wiederhole, 4 bis 6 Würfe pro Satz."
      ],
      atmung: "Atme beim Absenken ein und beim Wurf kräftig aus.",
      fehler: [
        "Wurf aus dem Rücken statt aus der Hüfte: Rücken bleibt gerade, die Kraft kommt aus den Beinen.",
        "Ball zu früh loslassen und flach werfen: Erst über dem Kopf loslassen.",
        "Runder Rücken in der Ausgangsposition: Hüfte nach hinten, Brust raus.",
        "Arme beugen: Arme bleiben gestreckt wie lange Hebel."
      ],
      vorteile: [
        "Trainiert die dreifache Streckung von Hüfte, Knie und Sprunggelenk.",
        "Leichter zu lernen als olympische Hebungen.",
        "Weite gut messbar, daher motivierend.",
        "Fördert Kraftübertragung durch den ganzen Körper."
      ],
      tipps: [
        "Nur draußen oder in einer großen Halle, mit viel Platz hinter dir.",
        "Ball mit 3 bis 5 kg.",
        "Vor dem Wurf prüfen, dass niemand hinter dir steht."
      ],
      varianten: "Leichter: leichter Ball oder kurzer Bewegungsumfang. Schwerer: schwererer Ball oder Wurf mit Gegenbewegung aus dem Stand.",
      sicherheit: "Bei Rückenbeschwerden vorsichtig. Auf ausreichend Platz und Deckenhöhe achten."
    }
  },
  {
    id: "mb_unterhand_vorwaerts",
    name: "Medizinball-Unterhandwurf nach vorn",
    auch: ["Underhand Forward Toss", "Forward Scoop Toss", "Granny Toss"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "quadrizeps"],
    sekundaer: ["ruecken_unten", "schulter_vorn", "waden"],
    geraete: [["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 0,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["fussball", "leichtathletik", "rugby", "volleyball"],
    hinweis: "Ball zwischen den Beinen, aus der Hüfte nach vorn oben weit werfen.",
    info: {
      kurz: "Wurf eines Medizinballs aus der Hocke mit gestreckten Armen nach vorn oben. Er trainiert die horizontale Hüftstreckung, ähnlich wie beim Weitsprung.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, eine freie Fläche vor dir, Ball mit gestreckten Armen vor dem Körper.",
        "Schieb die Hüfte nach hinten und führe den Ball zwischen die Knie, Rücken gerade.",
        "Streck Hüfte und Beine explosiv nach vorn und schwing den Ball mit gestreckten Armen nach vorn oben.",
        "Lass den Ball auf etwa Brust- bis Kopfhöhe in einem Winkel von etwa 45 Grad los.",
        "Du darfst nach dem Wurf einen Schritt nach vorn machen oder leicht abspringen.",
        "Hol den Ball und wiederhole, 4 bis 6 Würfe."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig aus.",
      fehler: [
        "Wurf aus dem Rücken: Hüfte arbeitet, Rücken bleibt gerade.",
        "Ball fliegt zu steil oder zu flach: Etwa 45 Grad anvisieren.",
        "Arme beugen: Gestreckt lassen.",
        "Zu tiefe Hocke: Hüftgelenk beugen, nicht hinsetzen."
      ],
      vorteile: [
        "Trainiert horizontale Schnellkraft aus der Hüfte.",
        "Ergänzt den Weitsprung als Übung ohne Landebelastung.",
        "Einfach zu lernen und gut messbar.",
        "Gut als Schnellkraftübung in Phasen, in denen Sprünge zu belastend sind."
      ],
      tipps: [
        "Weite markieren und als Ziel nutzen.",
        "Draußen auf Rasen werfen."
      ],
      varianten: "Leichter: leichter Ball. Schwerer: schwererer Ball oder mit anschließendem Sprint hinterher.",
      sicherheit: "Bei Rückenbeschwerden mit leichtem Ball beginnen. Auf freie Wurffläche achten."
    }
  },
  {
    id: "mb_ueberkopf_vorwaerts",
    name: "Medizinball-Überkopfwurf nach vorn",
    auch: ["Overhead Med Ball Throw", "Soccer Throw", "Overhead Forward Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["latissimus", "bauch", "trizeps"],
    sekundaer: ["schulter_vorn", "brust", "gesaess"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1, ruecken: 1 },
    stufe: 1,
    sport: ["fussball", "handball", "volleyball", "tennis"],
    hinweis: "Ball hinter den Kopf, Körper wie einen Bogen spannen und kräftig nach vorn werfen.",
    info: {
      kurz: "Beidhändiger Wurf über den Kopf nach vorn, wie beim Einwurf im Fußball. Er trainiert die explosive Rumpfbeugung und die Kraft der Schulter- und Rückenmuskulatur.",
      ausfuehrung: [
        "Stell dich in Schrittstellung etwa 2 bis 3 Meter vor eine Wand oder auf eine freie Fläche.",
        "Halte den Ball mit beiden Händen hinter dem Kopf, Ellbogen nach vorn oben.",
        "Spann den Körper leicht wie einen Bogen, ohne ins Hohlkreuz zu fallen.",
        "Wirf den Ball explosiv nach vorn, indem du Rumpf und Arme gleichzeitig nach vorn bringst.",
        "Das Gewicht verlagert sich auf das vordere Bein, die Arme folgen dem Ball.",
        "Fang den Ball und wiederhole, 6 bis 10 Würfe."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig aus.",
      fehler: [
        "Starkes Hohlkreuz beim Ausholen: Bauch fest, die Spannung kommt aus Schultern und Rumpf.",
        "Nur mit den Armen werfen: Rumpf und Gewichtsverlagerung nutzen.",
        "Ball zu weit hinter den Kopf: Nur so weit, wie die Schultern bequem erlauben.",
        "Zu schwerer Ball: Wurf wird langsam und belastet die Schultern."
      ],
      vorteile: [
        "Trainiert die explosive Kraft von Latissimus, Bauch und Trizeps.",
        "Verbessert Wurf- und Schlagbewegungen über Kopf.",
        "Fördert die Kraftübertragung vom Rumpf in die Arme.",
        "Einfach zu lernen."
      ],
      tipps: [
        "Weicher Ball mit 2 bis 4 kg.",
        "Kann auch kniend ausgeführt werden, um die Beine auszuschalten."
      ],
      varianten: "Leichter: leichter Ball oder kniend. Schwerer: mit Schritt oder schwererer Ball.",
      sicherheit: "Bei Schulterbeschwerden über Kopf oder bei Rückenproblemen im Hohlkreuz vorsichtig oder auslassen."
    }
  },
  {
    id: "wall_ball",
    name: "Wall Ball",
    auch: ["Wall Ball Shot", "Medizinball-Wandwurf", "Wall Balls"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "schulter_vorn"],
    sekundaer: ["trizeps", "bauch", "waden"],
    geraete: [["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 300,
    gelenke: { knie: 1, schulter: 1 },
    stufe: 1,
    sport: ["crossfit", "fussball", "basketball"],
    hinweis: "Aus der Kniebeuge kraftvoll strecken und den Ball hoch an die Wand werfen.",
    info: {
      kurz: "Kniebeuge mit Medizinball vor der Brust, aus der du den Ball hoch gegen eine Wand wirfst. Verbindet Beinkraft, Wurf und Koordination und ist auch als Konditionsübung beliebt.",
      ausfuehrung: [
        "Stell dich etwa eine Armlänge vor eine hohe, stabile Wand, Füße schulterbreit.",
        "Halte den Ball vor der Brust, Ellbogen unter dem Ball.",
        "Geh in eine Kniebeuge, bis die Oberschenkel etwa waagerecht sind, Brust aufrecht.",
        "Streck dich explosiv aus der Kniebeuge und wirf den Ball mit den Armen nach oben gegen die Wand, auf ein Ziel etwa 2,5 bis 3 Meter hoch.",
        "Fang den Ball mit leicht gebeugten Armen über dem Kopf und führe ihn direkt in die nächste Kniebeuge.",
        "Für Schnellkraft 5 bis 8 Würfe mit maximaler Höhe, für Kondition 15 bis 20 im Rhythmus."
      ],
      atmung: "Atme beim Absenken ein und beim Wurf kräftig aus.",
      fehler: [
        "Wurf nur aus den Armen: Die Kraft kommt aus der Beinstreckung.",
        "Oberkörper fällt in der Kniebeuge nach vorn: Ball nah an der Brust, Brust aufrecht.",
        "Zu nah oder zu weit von der Wand: Etwa eine Armlänge Abstand.",
        "Ball unkontrolliert fangen: Arme nachgeben lassen und in die Kniebeuge abfedern."
      ],
      vorteile: [
        "Verbindet Kniebeuge und Wurf zu einer Ganzkörperbewegung.",
        "Trainiert Koordination und Schnellkraft bei geringer Gelenkbelastung.",
        "Gut als Einsteigerübung für Würfe.",
        "Vielseitig für Schnellkraft oder Kondition."
      ],
      tipps: [
        "Weicher, großer Wall Ball mit 4 bis 6 kg eignet sich am besten.",
        "Ein Ziel an der Wand markieren."
      ],
      varianten: "Leichter: leichter Ball, niedrigeres Ziel. Schwerer: höheres Ziel, schwererer Ball.",
      sicherheit: "Bei Schulterbeschwerden über Kopf und bei Kniebeschwerden in der tiefen Hocke vorsichtig. Raumhöhe beachten."
    }
  },
  {
    id: "mb_situp_wurf",
    name: "Medizinball-Sit-up-Wurf",
    auch: ["Sit-up Throw", "Med Ball Sit-up Toss", "Sit-up Pass"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["latissimus", "trizeps", "schulter_vorn"],
    geraete: [["medizinball", "wand", "matte"], ["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 1,
    sport: ["kampfsport", "fussball", "handball"],
    hinweis: "Ball über dem Kopf fangen, abrollen und im Aufrichten kraftvoll an die Wand werfen.",
    info: {
      kurz: "Sit-up, bei dem du beim Aufrichten einen Medizinball kräftig über den Kopf gegen eine Wand wirfst. Er trainiert die explosive Kraft der Bauchmuskulatur.",
      ausfuehrung: [
        "Setz dich mit angewinkelten Beinen etwa 1 Meter vor eine Wand auf eine Matte, die Füße flach am Boden.",
        "Halte den Ball mit beiden Händen über dem Kopf.",
        "Roll kontrolliert nach hinten ab, bis die Schulterblätter fast den Boden berühren, der Ball bleibt über dem Kopf.",
        "Richte dich explosiv auf und wirf den Ball im Aufrichten mit gestreckten Armen gegen die Wand.",
        "Fang den Rückpraller über dem Kopf und nutze den Schwung, um wieder abzurollen.",
        "Mach 6 bis 12 Würfe pro Satz in einem flüssigen Rhythmus."
      ],
      atmung: "Atme beim Abrollen ein und beim Wurf kräftig aus.",
      fehler: [
        "Füße heben ab: Füße fixieren oder breiter aufstellen.",
        "Ruckartiger Wurf aus dem Nacken: Kraft aus dem Bauch, Nacken lang.",
        "Zu weit nach hinten abrollen: Kontrolle behalten, nicht auf den Rücken fallen.",
        "Ball nur mit den Armen werfen: Aufrichten und Wurf verbinden."
      ],
      vorteile: [
        "Trainiert explosive Rumpfbeugung.",
        "Stärkt Bauch und Hüftbeuger in einer dynamischen Bewegung.",
        "Verbindet Rumpf- und Armkraft.",
        "Gut als Abwechslung zu klassischen Bauchübungen."
      ],
      tipps: [
        "Leichter, weicher Ball mit 2 bis 4 kg.",
        "Mit Partner kann der Ball zugeworfen werden statt an die Wand."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang, leichter Ball. Schwerer: schwererer Ball oder mit Drehung zur Seite.",
      sicherheit: "Bei Rücken- oder Bandscheibenbeschwerden in Beugung auslassen. Bei Nackenproblemen vorsichtig."
    }
  },
  // ===== Sprint: Beschleunigung und Höchstgeschwindigkeit =====
  {
    id: "sprint",
    name: "Sprints 20 bis 30 m",
    auch: ["Sprints", "Linear Sprints", "Kurzsprints"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "hueftbeuger"],
    sekundaer: ["quadrizeps", "waden", "adduktoren"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1, huefte: 1 },
    stufe: 2,
    sport: ["fussball", "handball", "tennis", "leichtathletik"],
    hinweis: "Volle Pause zwischen den Läufen, nur frisch sprinten.",
    info: {
      kurz: "Kurze Sprints mit maximaler Geschwindigkeit über 20 bis 30 Meter. Sie trainieren Beschleunigung und Schnelligkeit und gehören zu den wirksamsten Reizen für die Beinbeuger.",
      ausfuehrung: [
        "Wärm dich gründlich auf, mit lockerem Laufen, Lauf-ABC und zwei bis drei Steigerungsläufen.",
        "Stell dich in Schrittstellung an die Startlinie, Oberkörper leicht nach vorn geneigt, Arme gegengleich.",
        "Starte explosiv, die ersten Schritte sind kraftvoll und eher kurz, der Körper bleibt nach vorn geneigt.",
        "Richte dich über etwa 10 bis 15 Meter allmählich auf und lauf mit hohen Knien und aktivem Fußaufsatz unter dem Körper.",
        "Die Arme schwingen kräftig von der Hüfte bis auf Kinnhöhe, Schultern und Hände bleiben locker.",
        "Lauf bis zur Ziellinie mit vollem Tempo durch und lauf danach allmählich aus.",
        "Geh zurück und nimm dir mindestens 1 bis 2 Minuten Pause pro 10 Meter Sprintstrecke."
      ],
      atmung: "Atme vor dem Start tief ein. Während des Sprints atmet der Körper von selbst, nicht bewusst die Luft anhalten.",
      fehler: [
        "Ohne gründliches Aufwärmen sprinten: Erhöht das Risiko für Zerrungen deutlich.",
        "Zu kurze Pausen: Dann wird es Ausdauertraining, die Geschwindigkeit sinkt.",
        "Verkrampfte Schultern und Fäuste: Locker bleiben, Gesicht entspannt.",
        "Fuß setzt weit vor dem Körper auf: Aktiv unter dem Körper aufsetzen, wie ein Kratzen nach hinten."
      ],
      vorteile: [
        "Trainiert Beschleunigung und maximale Laufgeschwindigkeit.",
        "Belastet die Beinbeuger in ihrer schnellsten Funktion, was robust gegen Zerrungen machen kann.",
        "Verbessert die Schnellkraft der gesamten Beinmuskulatur.",
        "Wichtig für alle Sportarten mit Antritten."
      ],
      tipps: [
        "4 bis 8 Sprints pro Einheit reichen.",
        "Beende die Einheit, sobald du merkst, dass du langsamer wirst.",
        "Am besten auf Rasen, Laufbahn oder Kunstrasen."
      ],
      varianten: "Leichter: Steigerungsläufe mit 80 bis 90 Prozent. Schwerer: längere Strecke bis 40 Meter oder Bergsprints.",
      sicherheit: "Bei Beschwerden an Beinbeugern, Achillessehne oder Leiste nur nach Rücksprache. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären."
    }
  },
  {
    id: "beschleunigung",
    name: "Beschleunigungssprints 10 bis 20 m",
    auch: ["Acceleration Sprints", "Short Sprints", "Antritte"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "waden"],
    sekundaer: ["beinbeuger", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["fussball", "handball", "tennis", "basketball"],
    hinweis: "Nach vorn geneigt starten und kraftvoll nach hinten unten abdrücken.",
    info: {
      kurz: "Sehr kurze Sprints über 10 bis 20 Meter, bei denen nur die Beschleunigungsphase trainiert wird. Für die meisten Sportarten ist diese Phase wichtiger als die Höchstgeschwindigkeit.",
      ausfuehrung: [
        "Wärm dich gründlich auf und mach einige lockere Antritte.",
        "Stell dich in Schrittstellung an die Linie, das vordere Knie leicht gebeugt, Oberkörper nach vorn geneigt.",
        "Starte explosiv und drück dich mit jedem Schritt kräftig nach hinten unten vom Boden ab.",
        "Halte die Vorlage, Kopf, Rumpf und hinteres Bein bilden in den ersten Schritten fast eine Linie.",
        "Arme schwingen kräftig gegengleich, die Schritte werden mit jedem Meter etwas länger.",
        "Lauf nach der Ziellinie aus, geh zurück und mach 60 bis 90 Sekunden Pause."
      ],
      atmung: "Vor dem Start tief einatmen, während des Sprints frei atmen.",
      fehler: [
        "Sofort aufrichten: Die Vorlage bringt die Kraft nach vorn, langsam aufrichten.",
        "Zu lange Schritte am Anfang: Kurze, kraftvolle Schritte beim Start.",
        "Arme kreuzen vor dem Körper: Arme schwingen vor und zurück.",
        "Ermüdet weitersprinten: Volle Pausen einhalten."
      ],
      vorteile: [
        "Trainiert die Beschleunigung, die in Spielsportarten am häufigsten gebraucht wird.",
        "Geringere Belastung für die Beinbeuger als lange Sprints.",
        "Kurz und auch mit wenig Platz umsetzbar.",
        "Verbessert die Kraftübertragung vom Bein auf den Boden."
      ],
      tipps: [
        "6 bis 10 Antritte pro Einheit.",
        "Verschiedene Startpositionen nutzen: Schrittstellung, parallel, aus dem Liegen."
      ],
      varianten: "Leichter: kürzere Strecke oder Steigerung statt maximaler Start. Schwerer: Bergsprints oder Start aus dem Liegen.",
      sicherheit: "Bei Achillessehnen- oder Wadenbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "sprint_fliegend",
    name: "Fliegende Sprints",
    auch: ["Flying Sprints", "Flying 10s", "Flying 20s"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["beinbeuger", "hueftbeuger", "gesaess"],
    sekundaer: ["waden", "quadrizeps", "adduktoren"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1, huefte: 1 },
    stufe: 3,
    sport: ["fussball", "leichtathletik", "rugby"],
    hinweis: "20 bis 30 m Anlauf, dann 10 bis 20 m mit Höchsttempo, entspannt bleiben.",
    info: {
      kurz: "Nach einer Anlaufstrecke wird ein kurzer Abschnitt mit Höchstgeschwindigkeit gelaufen. Diese Form trainiert gezielt die maximale Laufgeschwindigkeit.",
      ausfuehrung: [
        "Markiere eine Anlaufzone von 20 bis 30 Metern und daran anschließend eine Sprintzone von 10 bis 20 Metern.",
        "Wärm dich sehr gründlich auf, inklusive Lauf-ABC und Steigerungsläufen.",
        "Beschleunige in der Anlaufzone allmählich, bis du am Beginn der Sprintzone nahe der Höchstgeschwindigkeit bist.",
        "Lauf die Sprintzone mit voller Geschwindigkeit, aufrecht, mit hohen Knien und aktivem Fußaufsatz unter der Hüfte.",
        "Bleib dabei locker in Schultern, Händen und Gesicht.",
        "Lauf nach der Zone sanft aus und nimm 3 bis 5 Minuten Pause."
      ],
      atmung: "Locker und natürlich atmen, nicht die Luft anhalten.",
      fehler: [
        "Zu schnell in der Anlaufzone: Dann bist du in der Sprintzone schon müde. Gleichmäßig steigern.",
        "Verkrampfen bei Höchsttempo: Locker lassen, schnell aber entspannt.",
        "Zu kurze Pausen: Höchstgeschwindigkeit verlangt volle Erholung.",
        "Rücklage: Leicht nach vorn orientiert, Hüfte hoch."
      ],
      vorteile: [
        "Trainiert gezielt die maximale Laufgeschwindigkeit.",
        "Belastet die Beinbeuger bei hoher Geschwindigkeit, was die Belastbarkeit verbessern kann.",
        "Schult eine effiziente, aufrechte Sprinttechnik.",
        "Hilft, das Tempo bei langen Antritten im Spiel zu erhöhen."
      ],
      tipps: [
        "3 bis 6 Läufe pro Einheit reichen.",
        "Wer eine Stoppuhr oder Zeitmessung hat, kann die Zeit für die Sprintzone messen."
      ],
      varianten: "Leichter: kürzere Sprintzone oder 90 Prozent. Schwerer: längere Sprintzone bis 30 Meter.",
      sicherheit: "Höchste Belastung für die Beinbeuger. Nur nach sorgfältigem Aufwärmen und ohne Beschwerden."
    }
  },
  {
    id: "sprintstart_liegend",
    name: "Sprintstart aus dem Liegen",
    auch: ["Prone Start", "Push-up Start", "Lying Start Sprint"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "hueftbeuger"],
    sekundaer: ["brust", "trizeps", "bauch", "waden"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "rugby", "handball"],
    hinweis: "Aus der Bauchlage so schnell wie möglich aufspringen und 10 m sprinten.",
    info: {
      kurz: "Sprint aus der Bauch- oder Liegestützposition über 10 bis 15 Meter. Er trainiert die Fähigkeit, schnell aufzustehen und sofort zu beschleunigen, und erzwingt eine gute Vorlage.",
      ausfuehrung: [
        "Leg dich in Bauchlage an die Startlinie, die Hände unter den Schultern wie beim Liegestütz.",
        "Auf ein Signal oder selbstbestimmt drückst du dich explosiv hoch.",
        "Zieh ein Bein schnell nach vorn unter den Körper, das andere folgt in den ersten Laufschritt.",
        "Bleib in starker Vorlage und drück dich in kurzen, kräftigen Schritten nach vorn.",
        "Sprinte über 10 bis 15 Meter und lauf dann aus.",
        "Geh zurück und mach 60 bis 90 Sekunden Pause."
      ],
      atmung: "Vor dem Hochdrücken einatmen, während des Sprints frei atmen.",
      fehler: [
        "Erst ganz aufstehen, dann loslaufen: Aufstehen und Sprint gehen ineinander über.",
        "Aufrechte Haltung nach dem Aufstehen: Vorlage nutzen und tief bleiben.",
        "Langsames Hochdrücken: Die Arme drücken explosiv ab.",
        "Zu lange Strecke: Der Fokus liegt auf den ersten Metern."
      ],
      vorteile: [
        "Trainiert Beschleunigung aus einer ungünstigen Position.",
        "Erzwingt automatisch eine gute Vorlage beim Start.",
        "Fordert Reaktion und Koordination.",
        "Abwechslungsreich und spielnah für Mannschaftssport."
      ],
      tipps: [
        "Mit einem Partner, der ein Signal gibt, wird auch die Reaktion trainiert.",
        "6 bis 8 Starts pro Einheit."
      ],
      varianten: "Leichter: Start aus dem Stand oder Fallstart. Schwerer: aus der Rückenlage oder mit Richtungswechsel nach dem Start.",
      sicherheit: "Bei Handgelenk- oder Schulterbeschwerden auf andere Startformen ausweichen."
    }
  },
  {
    id: "fallstart",
    name: "Fallstart",
    auch: ["Falling Start", "Lean Fall Run", "Fall-Start Sprint"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "waden"],
    sekundaer: ["hueftbeuger", "bauch"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { sprunggelenk: 1, knie: 1 },
    stufe: 1,
    sport: ["fussball", "leichtathletik", "tennis"],
    hinweis: "Gestreckt nach vorn fallen lassen, erst im letzten Moment lossprinten.",
    info: {
      kurz: "Du lässt dich mit gestrecktem Körper nach vorn fallen und sprintest im letzten Moment los. Die Übung lehrt die richtige Vorlage in der Beschleunigung.",
      ausfuehrung: [
        "Stell dich aufrecht mit geschlossenen Füßen an die Startlinie, Körper gestreckt, Gewicht auf den Vorfüßen.",
        "Lass dich als gerade Linie von den Füßen bis zum Kopf langsam nach vorn kippen.",
        "Wenn du das Gefühl hast, gleich umzufallen, setzt du explosiv den ersten Schritt unter den Körper.",
        "Sprinte mit kurzen, kraftvollen Schritten und hoher Vorlage weiter.",
        "Lauf 10 bis 15 Meter und dann aus.",
        "Geh zurück und mach eine volle Pause von etwa einer Minute."
      ],
      atmung: "Beim Kippen ruhig einatmen, während des Sprints frei atmen.",
      fehler: [
        "In der Hüfte abknicken statt als Linie zu kippen: Körper gestreckt halten.",
        "Zu früh lossprinten: Wirklich bis an den Kipppunkt warten.",
        "Erster Schritt landet weit vor dem Körper: Fuß unter der Hüfte aufsetzen.",
        "Sofort aufrichten: Vorlage über die ersten Schritte halten."
      ],
      vorteile: [
        "Vermittelt ein klares Gefühl für die Vorlage beim Beschleunigen.",
        "Einfacher Einstieg ins Sprinttraining.",
        "Kurze Strecke, daher geringe Belastung.",
        "Verbessert den ersten Schritt."
      ],
      tipps: [
        "Gut als Einstieg vor anderen Sprintformen.",
        "Eine Hilfe kann von vorn die Schultern halten und dann loslassen."
      ],
      varianten: "Leichter: kürzere Strecke. Schwerer: Sprintstart aus dem Liegen oder bergauf.",
      sicherheit: "Auf griffigem Untergrund ausführen, damit der erste Schritt nicht wegrutscht."
    }
  },
  {
    id: "steigerungslauf",
    name: "Steigerungsläufe",
    auch: ["Strides", "Accelerations", "Build-ups"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["beinbeuger", "hueftbeuger", "waden"],
    sekundaer: ["gesaess", "quadrizeps"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "tennis"],
    hinweis: "Über 60 bis 100 m gleichmäßig bis etwa 90 Prozent steigern, locker bleiben.",
    info: {
      kurz: "Läufe über 60 bis 100 Meter, bei denen du das Tempo gleichmäßig bis kurz vor die Höchstgeschwindigkeit steigerst. Sie verbessern die Lauftechnik und bereiten auf Sprints vor.",
      ausfuehrung: [
        "Lauf dich 10 Minuten locker ein.",
        "Starte locker im Trab und erhöhe das Tempo gleichmäßig über die ersten zwei Drittel der Strecke.",
        "Erreich im letzten Drittel etwa 85 bis 90 Prozent deiner Höchstgeschwindigkeit.",
        "Achte auf aufrechte Haltung, hohe Knie und einen aktiven Fußaufsatz unter der Hüfte.",
        "Schultern, Hände und Gesicht bleiben locker.",
        "Lauf sanft aus und geh oder trabe zurück, bevor du die nächste Steigerung beginnst."
      ],
      atmung: "Gleichmäßig und frei atmen, auch bei höherem Tempo.",
      fehler: [
        "Zu schnell anlaufen: Gleichmäßig steigern, nicht von Anfang an voll.",
        "Verkrampfen bei höherem Tempo: Locker lassen.",
        "Zu kurze Erholung: Vor jeder Steigerung wieder ruhig atmen.",
        "Schlurfender Laufstil: Knie und Füße aktiv anheben."
      ],
      vorteile: [
        "Verbessert Lauftechnik und Laufökonomie.",
        "Bereitet Muskeln und Sehnen auf schnellere Läufe vor.",
        "Geringeres Risiko als Maximalsprints.",
        "Ideal am Ende eines lockeren Laufs oder als Aufwärmen."
      ],
      tipps: [
        "4 bis 6 Steigerungen nach einem lockeren Lauf.",
        "Auf Rasen oder Laufbahn besonders angenehm."
      ],
      varianten: "Leichter: kürzere Strecke, maximal 80 Prozent. Schwerer: bis knapp unter Höchsttempo oder fliegende Sprints.",
      sicherheit: "Bei Beschwerden an Beinbeugern oder Achillessehne langsam steigern."
    }
  },
  {
    id: "bergsprint",
    name: "Bergsprints",
    auch: ["Hill Sprints", "Uphill Sprints", "Hügelsprints"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "waden"],
    sekundaer: ["beinbeuger", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "laufen", "rugby", "leichtathletik"],
    hinweis: "Kurze, maximale Sprints bergauf, gehend zurück und vollständig erholen.",
    info: {
      kurz: "Kurze, maximale Sprints über 10 bis 30 Meter an einer mäßigen Steigung. Der Hang erzwingt eine kraftvolle Beschleunigungshaltung und verringert die Belastung für die Beinbeuger.",
      ausfuehrung: [
        "Such dir einen Hang mit gleichmäßiger, mäßiger Steigung von etwa 5 bis 10 Prozent.",
        "Wärm dich gründlich auf und mach ein bis zwei lockere Läufe bergauf.",
        "Starte aus der Schrittstellung und sprinte mit voller Kraft bergauf.",
        "Halte den Oberkörper leicht nach vorn geneigt, die Knie kommen hoch, die Füße drücken kräftig nach hinten ab.",
        "Die Arme schwingen kraftvoll mit, die Schritte sind kürzer als in der Ebene.",
        "Nach 8 bis 12 Sekunden stoppen, gehend zurück und 2 bis 3 Minuten erholen."
      ],
      atmung: "Frei atmen, beim Zurückgehen bewusst tief durchatmen.",
      fehler: [
        "Zu steiler Hang: Die Technik bricht zusammen, mäßige Steigung wählen.",
        "Zu lange Strecken: Für Schnellkraft maximal 10 bis 12 Sekunden.",
        "Oberkörper knickt in der Hüfte ab: Vorlage aus dem ganzen Körper, nicht nur aus der Hüfte.",
        "Bergab zurück sprinten: Immer gehend zurück."
      ],
      vorteile: [
        "Trainiert Beschleunigungskraft mit eingebautem Widerstand.",
        "Geringere Belastung für die Beinbeuger als Sprints in der Ebene.",
        "Fördert automatisch eine gute Beschleunigungshaltung.",
        "Stärkt Waden, Gesäß und Oberschenkel."
      ],
      tipps: [
        "6 bis 10 Sprints pro Einheit.",
        "Gut geeignet für den Einstieg ins Sprinttraining."
      ],
      varianten: "Leichter: flacherer Hang, kürzere Strecke. Schwerer: steilere Steigung oder längere Strecke bis 30 Meter.",
      sicherheit: "Bei Achillessehnen- oder Wadenbeschwerden vorsichtig, da diese bergauf stark belastet werden."
    }
  },
  // ===== Sprint: Lauf-ABC =====
  {
    id: "a_march",
    name: "A-Marsch",
    auch: ["A-March", "Marching Drill", "Kniehebegang"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["hueftbeuger", "waden"],
    sekundaer: ["bauch", "gesaess"],
    geraete: [["draussen"], []],
    belastung: "distanz",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["laufen", "fussball", "leichtathletik"],
    hinweis: "Knie auf Hüfthöhe, Fuß angezogen, aktiv unter der Hüfte aufsetzen.",
    info: {
      kurz: "Gehübung des Lauf-ABC, bei der du das Knie bewusst hoch ziehst und den Fuß aktiv unter dem Körper aufsetzt. Sie lehrt die Grundposition des Sprintschritts in langsamer Form.",
      ausfuehrung: [
        "Stell dich aufrecht hin, Blick nach vorn, Arme im rechten Winkel gebeugt.",
        "Zieh ein Knie bis auf Hüfthöhe nach oben, der Fuß ist angezogen, die Zehen zeigen nach oben.",
        "Das Standbein ist gestreckt, du stehst auf dem Vorfuß, die Hüfte bleibt hoch.",
        "Setz den Fuß aktiv nach unten hinten direkt unter der Hüfte auf und zieh gleichzeitig das andere Knie hoch.",
        "Die Arme schwingen gegengleich zu den Beinen.",
        "Geh so 15 bis 20 Meter in ruhigem, kontrolliertem Rhythmus."
      ],
      atmung: "Ruhig und gleichmäßig atmen.",
      fehler: [
        "Oberkörper lehnt nach hinten: Aufrecht bleiben, eher leicht nach vorn.",
        "Fuß hängt nach unten: Zehen zum Schienbein ziehen.",
        "Hüfte sackt ab: Auf dem Standbein groß machen.",
        "Arme schwingen quer: Gerade vor und zurück."
      ],
      vorteile: [
        "Lehrt die Grundposition des Sprintschritts.",
        "Verbessert Haltung, Hüftbeugerkraft und Gleichgewicht.",
        "Sehr geringe Belastung, daher für alle geeignet.",
        "Gute Vorbereitung auf A-Skip und Sprints."
      ],
      tipps: [
        "Im Aufwärmen vor jedem Sprinttraining.",
        "Langsam beginnen, Haltung ist wichtiger als Tempo."
      ],
      varianten: "Leichter: auf der Stelle. Schwerer: A-Skip mit Hüpfer oder Kniehebelauf.",
      sicherheit: "Bei akuten Hüftbeugerbeschwerden das Knie weniger hoch ziehen."
    }
  },
  {
    id: "a_skip",
    name: "A-Skip",
    auch: ["A-Skip", "Hopserlauf mit Kniehub", "Skipping"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["hueftbeuger", "waden"],
    sekundaer: ["gesaess", "bauch", "quadrizeps"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "leichtathletik"],
    schwerer: "b_skip",
    hinweis: "Rhythmischer Hopser mit hohem Knie und aktivem Fußaufsatz unter der Hüfte.",
    info: {
      kurz: "Hopserlauf aus dem Lauf-ABC mit betontem Kniehub und aktivem Fußaufsatz. Er schult Rhythmus, Hüftbeugung und den kraftvollen Bodenkontakt beim Sprinten.",
      ausfuehrung: [
        "Starte aus dem A-Marsch und füge auf jedem Standbein einen kleinen Hopser hinzu.",
        "Zieh das Knie des Schwungbeins bis etwa auf Hüfthöhe, der Fuß ist angezogen.",
        "Setz den Fuß aktiv nach unten hinten unter der Hüfte auf, als würdest du den Boden nach hinten wegdrücken.",
        "Das Standbein federt auf dem Vorfuß, die Hüfte bleibt hoch.",
        "Die Arme schwingen kräftig gegengleich, Ellbogen etwa im rechten Winkel.",
        "Skippe 20 bis 30 Meter und gehe locker zurück."
      ],
      atmung: "Rhythmisch und frei atmen.",
      fehler: [
        "Zu viel Vorwärtsbewegung, zu wenig Höhe: Der Fokus liegt auf dem Kniehub und dem Fußaufsatz.",
        "Rücklage: Aufrecht, leicht nach vorn orientiert.",
        "Landung auf der Ferse: Vorfuß und Mittelfuß.",
        "Arme hängen passiv: Kräftig mitschwingen."
      ],
      vorteile: [
        "Verbessert Koordination und Rhythmus beim Laufen.",
        "Stärkt die Hüftbeuger und die Reaktivität der Fußgelenke.",
        "Lehrt den aktiven Fußaufsatz unter dem Körper.",
        "Fester Bestandteil des Aufwärmens vor Sprints."
      ],
      tipps: [
        "2 bis 3 Durchgänge im Aufwärmen.",
        "Zuerst langsam und sauber, dann zügiger."
      ],
      varianten: "Leichter: A-Marsch im Gehen. Schwerer: B-Skip oder schnellerer Rhythmus.",
      sicherheit: "Bei Achillessehnenproblemen den Hopser klein halten."
    }
  },
  {
    id: "b_skip",
    name: "B-Skip",
    auch: ["B-Skip", "Hopserlauf mit Unterschenkelstreckung", "Pawing Drill"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["beinbeuger", "hueftbeuger", "waden"],
    sekundaer: ["gesaess", "bauch", "quadrizeps"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { sprunggelenk: 1, knie: 1 },
    stufe: 2,
    sport: ["laufen", "fussball", "leichtathletik"],
    hinweis: "Knie hoch, Unterschenkel nach vorn ausschwingen und aktiv nach unten hinten ziehen.",
    info: {
      kurz: "Erweiterung des A-Skips, bei der du den Unterschenkel nach vorn ausschwingst und den Fuß dann aktiv nach unten hinten ziehst. Die Übung trainiert die Greifbewegung des Sprints und die Beinbeuger.",
      ausfuehrung: [
        "Beginne mit einem lockeren A-Skip.",
        "Wenn das Knie oben ist, streck den Unterschenkel nach vorn, sodass das Bein fast gestreckt ist.",
        "Zieh das gestreckte Bein aktiv nach unten hinten, als würdest du den Boden wegkratzen.",
        "Der Fuß setzt unter der Hüfte auf dem Vorfuß auf, und das andere Bein beginnt die gleiche Bewegung.",
        "Bleib aufrecht, die Arme schwingen gegengleich.",
        "Skippe 20 bis 30 Meter und geh zurück."
      ],
      atmung: "Locker und rhythmisch atmen.",
      fehler: [
        "Bein schwingt nur passiv nach vorn: Aktiv nach unten hinten ziehen.",
        "Fuß setzt vor dem Körper auf: Unter der Hüfte aufsetzen.",
        "Rücklage: Leicht nach vorn orientiert bleiben.",
        "Zu schnell, ohne saubere Technik: Erst langsam lernen."
      ],
      vorteile: [
        "Trainiert die Beinbeuger in einer sprintähnlichen Greifbewegung.",
        "Verbessert Koordination und Technik der Schwungbeinphase.",
        "Kann helfen, die Beinbeuger auf schnelle Läufe vorzubereiten.",
        "Ergänzt den A-Skip im Lauf-ABC."
      ],
      tipps: [
        "Erst als B-Marsch im Gehen lernen.",
        "2 bis 3 Durchgänge im Aufwärmen."
      ],
      varianten: "Leichter: B-Marsch im Gehen. Schwerer: schnellerer Rhythmus.",
      sicherheit: "Bei frischen Beinbeugerverletzungen auslassen."
    }
  },
  {
    id: "kniehebelauf",
    name: "Kniehebelauf",
    auch: ["High Knees", "Skippings", "Knee Drive Run"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["hueftbeuger", "waden"],
    sekundaer: ["quadrizeps", "bauch", "herz_kreislauf"],
    geraete: [[], ["draussen"]],
    belastung: "distanz",
    hoehe_cm: 220,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "tennis"],
    hinweis: "Schnelle, kurze Schritte, Knie auf Hüfthöhe, auf dem Vorfuß bleiben.",
    info: {
      kurz: "Schnelles Laufen mit hohen Knien und kurzen Bodenkontakten, auf der Stelle oder langsam vorwärts. Die Übung trainiert Schrittfrequenz und Hüftbeuger.",
      ausfuehrung: [
        "Stell dich aufrecht hin, Arme angewinkelt, Blick nach vorn.",
        "Lauf mit schnellen Schritten und zieh die Knie abwechselnd bis etwa auf Hüfthöhe.",
        "Bleib auf den Vorfüßen und halte den Bodenkontakt kurz.",
        "Der Oberkörper bleibt aufrecht, die Hüfte hoch.",
        "Die Arme schwingen schnell gegengleich mit.",
        "Lauf so 10 bis 20 Meter vorwärts oder 10 bis 20 Sekunden auf der Stelle."
      ],
      atmung: "Locker und schnell atmen, nicht pressen.",
      fehler: [
        "Oberkörper lehnt nach hinten: Aufrecht oder leicht nach vorn.",
        "Knie zu tief: Auf Hüfthöhe ziehen.",
        "Landung auf der Ferse: Vorfuß.",
        "Langsamer, schwerfälliger Rhythmus: Schnelle, leichte Schritte."
      ],
      vorteile: [
        "Verbessert die Schrittfrequenz.",
        "Stärkt die Hüftbeuger und Fußgelenke.",
        "Gut im Aufwärmen und für die Koordination.",
        "Erhöht schnell die Körpertemperatur."
      ],
      tipps: [
        "Im Lauf-ABC als schnelle Variante nach dem A-Skip.",
        "Mit kleinen Abständen zwischen Markierungen lässt sich die Frequenz steigern."
      ],
      varianten: "Leichter: A-Marsch. Schwerer: schnelleres Tempo oder in einen Sprint übergehen.",
      sicherheit: "Bei Fuß- oder Achillessehnenbeschwerden auf weichem Untergrund und kurz."
    }
  },
  {
    id: "anfersen",
    name: "Anfersen",
    auch: ["Butt Kicks", "Heel Flicks", "Heel Kicks"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["beinbeuger", "waden"],
    sekundaer: ["hueftbeuger", "quadrizeps"],
    geraete: [[], ["draussen"]],
    belastung: "distanz",
    hoehe_cm: 220,
    gelenke: {},
    stufe: 1,
    sport: ["laufen", "fussball", "tennis"],
    hinweis: "Fersen schnell Richtung Gesäß, Knie zeigen nach unten.",
    info: {
      kurz: "Laufübung, bei der du die Fersen schnell Richtung Gesäß ziehst. Sie schult das schnelle Anziehen des Unterschenkels und wärmt Beinbeuger und Quadrizeps auf.",
      ausfuehrung: [
        "Stell dich aufrecht hin, Arme angewinkelt.",
        "Lauf mit kurzen, schnellen Schritten und zieh die Fersen abwechselnd zum Gesäß.",
        "Die Oberschenkel zeigen nach unten oder leicht nach vorn, die Knie bleiben unter der Hüfte.",
        "Bleib auf den Vorfüßen, die Bodenkontakte sind kurz.",
        "Die Arme schwingen locker gegengleich.",
        "Lauf 15 bis 20 Meter, dann locker zurück."
      ],
      atmung: "Locker und gleichmäßig atmen.",
      fehler: [
        "Oberkörper beugt sich nach vorn: Aufrecht bleiben.",
        "Knie gehen nach hinten: Knie unter oder leicht vor der Hüfte halten.",
        "Langsamer Rhythmus: Schnelle, leichte Bewegung.",
        "Auf der Ferse landen: Vorfuß."
      ],
      vorteile: [
        "Fördert das schnelle Anfersen, das beim Sprint den Schwungbeinweg verkürzt.",
        "Wärmt Beinbeuger und Quadrizeps auf.",
        "Einfach und überall durchführbar.",
        "Verbessert Koordination und Rhythmus."
      ],
      tipps: [
        "Als Teil des Lauf-ABC im Aufwärmen.",
        "Für die Sprintvariante die Knie leicht nach vorn bringen."
      ],
      varianten: "Leichter: langsamer auf der Stelle. Schwerer: schneller oder in einen Sprint übergehen.",
      sicherheit: "Bei Kniebeschwerden in tiefer Beugung den Bewegungsumfang verringern."
    }
  },
  {
    id: "fussgelenksarbeit",
    name: "Fußgelenksarbeit",
    auch: ["Ankling", "Ankle Dribbles", "Foot Dribbles"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["waden"],
    sekundaer: ["schienbein"],
    geraete: [[], ["draussen"]],
    belastung: "distanz",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "leichtathletik"],
    hinweis: "Kleine, schnelle Schritte über den Vorfuß, fast gestreckte Knie.",
    info: {
      kurz: "Kleine, schnelle Schritte, bei denen der Fuß aktiv über den Vorfuß abrollt und die Knie fast gestreckt bleiben. Die Übung schult die Fußgelenksarbeit und den federnden Bodenkontakt.",
      ausfuehrung: [
        "Stell dich aufrecht hin, Knie fast gestreckt, Arme locker angewinkelt.",
        "Heb eine Ferse an, während der Vorfuß am Boden bleibt, und setz den Fuß dann aktiv ab.",
        "Wechsle schnell die Seiten, sodass du mit sehr kurzen Schritten vorwärts kommst.",
        "Jeder Fuß setzt knapp vor dem anderen auf und drückt kurz und federnd ab.",
        "Die Arme schwingen locker und schnell mit.",
        "Laufe so 15 bis 20 Meter."
      ],
      atmung: "Locker und gleichmäßig atmen.",
      fehler: [
        "Knie beugen sich stark: Fast gestreckt lassen, die Bewegung kommt aus dem Fuß.",
        "Zu große Schritte: Ganz kurze Schritte.",
        "Schlaffe Fußgelenke: Spannung im Fuß halten.",
        "Oberkörper lehnt nach hinten: Aufrecht bleiben."
      ],
      vorteile: [
        "Verbessert die Reaktivität der Fußgelenke.",
        "Stärkt die Waden und die Achillessehne schonend.",
        "Schult den kurzen, federnden Bodenkontakt.",
        "Einfache Einstiegsübung im Lauf-ABC."
      ],
      tipps: [
        "Am Anfang des Lauf-ABC.",
        "Mit kleinen Hürden oder Linien kann die Schrittlänge vorgegeben werden."
      ],
      varianten: "Leichter: langsamer Rhythmus. Schwerer: höheres Tempo oder Übergang in Kniehebelauf.",
      sicherheit: "Bei Achillessehnenbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "wandlauf",
    name: "Wand-Drill für die Beschleunigung",
    auch: ["Wall Drill", "Wall March", "Wall Acceleration Drill"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["hueftbeuger", "gesaess"],
    sekundaer: ["bauch", "waden", "quadrizeps"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["fussball", "leichtathletik", "rugby"],
    hinweis: "Gegen die Wand lehnen, Körper gestreckt, Knie schnell hoch und wieder nach hinten unten.",
    info: {
      kurz: "Beschleunigungsübung, bei der du dich schräg gegen eine Wand lehnst und die Beinbewegung des Sprintstarts übst. So lernst du die Vorlage und den kräftigen Bodenkontakt ohne Laufstrecke.",
      ausfuehrung: [
        "Stell dich etwa eine Körperlänge vor eine Wand und stütz dich mit gestreckten Armen auf Schulterhöhe ab.",
        "Geh mit den Füßen zurück, bis dein Körper etwa im 45-Grad-Winkel gestreckt an der Wand lehnt.",
        "Zieh ein Knie nach vorn oben, der Fuß ist angezogen, die Hüfte bleibt gestreckt.",
        "Drück den Fuß aktiv nach unten hinten in den Boden und zieh gleichzeitig das andere Knie nach vorn.",
        "Übe einzelne Wechsel, dann Serien von 3 oder 5 schnellen Wechseln.",
        "Zähle jede Serie als eine Wiederholung und mach 4 bis 6 Serien pro Durchgang."
      ],
      atmung: "Vor jeder Serie einatmen, während der Wechsel kurz und kräftig ausatmen.",
      fehler: [
        "Hüfte knickt ein oder hängt durch: Körper bleibt eine gerade Linie.",
        "Knie zu tief: Oberschenkel etwa waagerecht.",
        "Fuß setzt zu weit vorn auf: Unter der Hüfte aufsetzen.",
        "Langsamer Wechsel: Schnell und kraftvoll umschalten."
      ],
      vorteile: [
        "Lehrt die Körperposition der Beschleunigung ohne Laufstrecke.",
        "Trainiert schnelle Beinwechsel und die Kraftrichtung nach hinten unten.",
        "Auch in Innenräumen gut umsetzbar.",
        "Sehr gut als Technikübung vor Sprints."
      ],
      tipps: [
        "Erst einzelne Wechsel mit Halten, dann Serien.",
        "Den Winkel zur Wand so wählen, dass du stabil bleibst."
      ],
      varianten: "Leichter: aufrechter stehen und langsam wechseln. Schwerer: flacherer Winkel oder schnellere Serien.",
      sicherheit: "Bei Schulter- oder Handgelenksbeschwerden die Hände höher an die Wand setzen."
    }
  },
  // ===== Sprint: Richtungswechsel und Agilität =====
  {
    id: "richtungswechsel",
    name: "Richtungswechsel-Läufe",
    auch: ["Change of Direction Drills", "Cutting Drills", "Agility Runs"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["beinbeuger", "adduktoren", "quadrizeps"],
    sekundaer: ["gesaess_mittel", "gesaess", "waden"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "handball", "tennis", "basketball"],
    hinweis: "Vor dem Wechsel tief werden, mit dem Außenbein stoppen und kraftvoll wegdrücken.",
    info: {
      kurz: "Sprints mit Richtungswechseln von 45 bis 180 Grad, etwa im Zickzack um Markierungen. Sie trainieren Abbremsen, Umsteuern und erneutes Beschleunigen.",
      ausfuehrung: [
        "Leg mehrere Markierungen im Zickzack aus, etwa 5 Meter voneinander entfernt.",
        "Sprinte zur ersten Markierung und verkürze vor dem Wechsel die Schritte, um abzubremsen.",
        "Senk den Körperschwerpunkt ab, Knie und Hüfte gebeugt, Oberkörper leicht in die neue Richtung geneigt.",
        "Setz das äußere Bein seitlich neben den Körper und drück dich kraftvoll in die neue Richtung ab.",
        "Beschleunige sofort zur nächsten Markierung.",
        "Lauf die ganze Strecke, dann gehend zurück und 1 bis 2 Minuten Pause."
      ],
      atmung: "Frei atmen, in den Pausen bewusst tief durchatmen.",
      fehler: [
        "Aufrecht in den Wechsel gehen: Schwerpunkt absenken.",
        "Knie knickt beim Abstoppen nach innen: Knie über dem Fuß halten.",
        "Zu große Schritte vor dem Wechsel: Mit kurzen Schritten abbremsen.",
        "Mit dem Oberkörper weit über das Außenbein hinaus lehnen: Rumpf über dem Fuß halten."
      ],
      vorteile: [
        "Trainiert Abbremsen, Umsteuern und Beschleunigen.",
        "Fördert die Kniestabilität bei Richtungswechseln.",
        "Spielnah für Mannschafts- und Rückschlagsportarten.",
        "Verbessert Körperkontrolle und Koordination."
      ],
      tipps: [
        "Zuerst mit 45-Grad-Wechseln beginnen, dann 90 und 180 Grad.",
        "Beide Richtungen gleich oft trainieren."
      ],
      varianten: "Leichter: langsamer und mit flachen Winkeln. Schwerer: spitzere Winkel, auf Signal oder Pro-Agility-Lauf.",
      sicherheit: "Hohe Belastung für Knie und Sprunggelenk. Nach Knieverletzungen nur mit Freigabe."
    }
  },
  {
    id: "pro_agility",
    name: "Pro-Agility-Lauf 5-10-5",
    auch: ["Pro Agility Drill", "5-10-5 Shuttle", "20-Yard Shuttle"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["quadrizeps", "adduktoren", "gesaess"],
    sekundaer: ["gesaess_mittel", "waden", "beinbeuger"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "tennis", "american_football"],
    hinweis: "5 m zur einen Seite, 10 m zur anderen, 5 m zurück, Linien mit der Hand berühren.",
    info: {
      kurz: "Standardisierter Agilitätslauf mit zwei 180-Grad-Wenden: 5 Meter in eine Richtung, 10 Meter zurück und 5 Meter zur Mitte. Er wird im Sport als Test und Training für Richtungswechsel genutzt.",
      ausfuehrung: [
        "Markiere drei Linien im Abstand von je 5 Metern und stell dich seitlich an die mittlere Linie, Füße breiter als hüftbreit, Hand an der Linie.",
        "Sprinte 5 Meter zur rechten Linie und berühre sie mit der rechten Hand.",
        "Brems tief ab, wende und sprinte 10 Meter zur linken Linie, berühre sie mit der linken Hand.",
        "Wende erneut und sprinte durch die mittlere Linie.",
        "Lauf aus und nimm 2 bis 3 Minuten Pause.",
        "Beim nächsten Durchgang mit der anderen Richtung starten."
      ],
      atmung: "Frei atmen, in der Pause tief durchatmen.",
      fehler: [
        "Aufrechte Haltung an der Wende: Tief gehen, Hüfte absenken.",
        "Linie nicht berühren: Die Hand sorgt für eine vollständige Wende.",
        "Zu großer Bogen bei der Wende: Kurz stoppen und direkt umkehren.",
        "Nur in eine Richtung starten: Beide Seiten trainieren."
      ],
      vorteile: [
        "Trainiert Abbremsen und Wiederbeschleunigen bei 180-Grad-Wenden.",
        "Messbarer Test für die Richtungswechselfähigkeit.",
        "Spielnah für viele Mannschaftssportarten.",
        "Fördert seitliche Kraft von Hüfte und Beinen."
      ],
      tipps: [
        "Mit einer Stoppuhr messen und Fortschritte festhalten.",
        "4 bis 6 Durchgänge pro Einheit."
      ],
      varianten: "Leichter: langsamer, mit Fokus auf die Wende. Schwerer: auf Signal starten oder mit zusätzlicher 10-Meter-Strecke.",
      sicherheit: "Hohe Belastung für Knie und Sprunggelenk bei den Wenden. Auf griffigem Untergrund laufen."
    }
  },
  {
    id: "t_test",
    name: "T-Drill",
    auch: ["T-Test", "T-Agility Drill"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["quadrizeps", "adduktoren", "gesaess_mittel"],
    sekundaer: ["gesaess", "waden", "beinbeuger"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "tennis", "handball"],
    hinweis: "Vorwärts, seitlich, seitlich, seitlich, rückwärts in T-Form.",
    info: {
      kurz: "Agilitätsübung in T-Form, die Sprint vorwärts, seitliches Nachstellen und Rückwärtslaufen verbindet. Sie trainiert schnelle Wechsel zwischen verschiedenen Laufrichtungen.",
      ausfuehrung: [
        "Leg vier Markierungen in T-Form: Start, 10 Meter geradeaus die Mitte, links und rechts davon je 5 Meter eine weitere.",
        "Sprinte vom Start vorwärts zur mittleren Markierung und berühre sie.",
        "Bewege dich mit seitlichen Nachstellschritten 5 Meter nach links und berühre die Markierung.",
        "Bewege dich seitlich 10 Meter nach rechts zur äußeren Markierung, dann 5 Meter zurück zur Mitte.",
        "Lauf rückwärts zurück zum Start.",
        "Nach 2 bis 3 Minuten Pause den nächsten Durchgang, beim nächsten Mal zuerst nach rechts."
      ],
      atmung: "Frei atmen, in den Pausen tief durchatmen.",
      fehler: [
        "Beine kreuzen beim seitlichen Nachstellen: Füße bleiben nebeneinander.",
        "Aufrecht stehen beim Seitwärtslaufen: Tief und athletisch bleiben.",
        "Beim Rückwärtslaufen nach hinten fallen: Oberkörper leicht nach vorn, kurze Schritte.",
        "Zu weite Bögen um die Markierungen: Direkt und eng wechseln."
      ],
      vorteile: [
        "Kombiniert vorwärts, seitwärts und rückwärts in einer Übung.",
        "Messbarer Test für Agilität.",
        "Trainiert schnelles Umschalten zwischen Bewegungsformen.",
        "Fordert die seitliche Hüftmuskulatur."
      ],
      tipps: [
        "Mit Stoppuhr messen.",
        "3 bis 5 Durchgänge pro Einheit."
      ],
      varianten: "Leichter: langsamer, mit Fokus auf saubere Schritte. Schwerer: auf Signal oder mit Ballaufgabe.",
      sicherheit: "Auf griffigem Untergrund ausführen. Bei Sprunggelenksproblemen vorsichtig."
    }
  },
  {
    id: "pendellauf",
    name: "Pendelläufe",
    auch: ["Shuttle Runs", "Shuttle Sprints", "Suicides"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "adduktoren"],
    sekundaer: ["beinbeuger", "waden", "herz_kreislauf"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "handball", "tennis"],
    hinweis: "Zwischen zwei Linien hin und her sprinten, an jeder Linie tief wenden.",
    info: {
      kurz: "Sprints zwischen zwei Linien hin und zurück mit 180-Grad-Wenden, zum Beispiel 4 mal 10 Meter. Sie trainieren Beschleunigung und wiederholtes Abbremsen.",
      ausfuehrung: [
        "Markiere zwei Linien im Abstand von 5 bis 10 Metern.",
        "Starte an der ersten Linie und sprinte zur zweiten.",
        "Brems mit kurzen Schritten ab, setz einen Fuß an oder über die Linie und wende tief.",
        "Sprinte zurück und wiederhole, bis die vorgegebene Strecke erreicht ist, etwa 4 mal 10 Meter.",
        "Lauf nach der letzten Linie aus.",
        "Für Schnelligkeit 2 bis 3 Minuten Pause zwischen den Durchgängen."
      ],
      atmung: "Frei atmen, in der Pause bewusst durchatmen.",
      fehler: [
        "Hohe Wende ohne Absenken: Körperschwerpunkt tief bringen.",
        "Knie knickt bei der Wende nach innen: Knie über dem Fuß.",
        "Pausen zu kurz für Schnelligkeit: Für Tempo volle Erholung.",
        "Immer mit demselben Bein wenden: Abwechseln."
      ],
      vorteile: [
        "Trainiert Beschleunigung und Abbremsen im Wechsel.",
        "Spielnah für viele Sportarten.",
        "Braucht nur wenig Platz.",
        "Gut messbar."
      ],
      tipps: [
        "Für Schnelligkeit kurze Gesamtstrecken bis 40 Meter.",
        "Wendebein abwechseln."
      ],
      varianten: "Leichter: kürzere Strecke, weniger Wenden. Schwerer: längere Gesamtstrecke oder steigende Abstände.",
      sicherheit: "Belastet Knie und Sprunggelenk bei den Wenden. Auf rutschfestem Untergrund laufen."
    }
  },
  {
    id: "rueckwaertslauf",
    name: "Rückwärtslaufen",
    auch: ["Backpedal", "Backward Running", "Retro Running"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["quadrizeps", "waden"],
    sekundaer: ["gesaess", "schienbein", "beinbeuger"],
    geraete: [["draussen"]],
    belastung: "distanz",
    hoehe_cm: 0,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["fussball", "basketball", "tennis", "handball"],
    hinweis: "Oberkörper leicht nach vorn, kurze schnelle Schritte über den Vorfuß.",
    info: {
      kurz: "Schnelles Laufen rückwärts mit kurzen Schritten über den Vorfuß. Es stärkt die Oberschenkelvorderseite, verbessert die Körperkontrolle und ist in vielen Spielsportarten gefragt.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie leicht gebeugt, Oberkörper leicht nach vorn geneigt.",
        "Schieb dich mit dem Vorfuß nach hinten ab und setz den anderen Fuß hinter dem Körper auf dem Vorfuß auf.",
        "Mach kurze, schnelle Schritte, die Füße bleiben etwa hüftbreit auseinander.",
        "Die Arme schwingen gegengleich mit wie beim Vorwärtslaufen.",
        "Lauf so 10 bis 20 Meter rückwärts.",
        "Vorher prüfen, dass die Strecke hinter dir frei ist."
      ],
      atmung: "Locker und gleichmäßig atmen.",
      fehler: [
        "Oberkörper lehnt nach hinten: Leicht nach vorn, sonst droht ein Sturz.",
        "Zu große Schritte: Kurze, schnelle Schritte.",
        "Auf den Fersen laufen: Vorfuß.",
        "Beine strecken sich ganz: Knie leicht gebeugt lassen."
      ],
      vorteile: [
        "Stärkt den Quadrizeps bei geringer Belastung des Knies.",
        "Verbessert Koordination und Gleichgewicht.",
        "Wichtig für Abwehrbewegungen im Spiel.",
        "Abwechslung im Aufwärmen."
      ],
      tipps: [
        "Auf ebenem, freiem Gelände ausführen.",
        "Gut kombiniert mit Umdrehen und Vorwärtssprint auf Signal."
      ],
      varianten: "Leichter: langsames Rückwärtsgehen. Schwerer: höheres Tempo oder Wechsel auf Signal in einen Sprint nach vorn.",
      sicherheit: "Nur auf freier, ebener Strecke. Bei Gleichgewichtsproblemen zuerst gehen."
    }
  },
  {
    id: "seitwaerts_shuffle",
    name: "Seitwärts-Shuffle",
    auch: ["Lateral Shuffle", "Side Shuffle", "Seitliches Nachstellen"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["gesaess_mittel", "adduktoren", "quadrizeps"],
    sekundaer: ["waden", "gesaess"],
    geraete: [[], ["draussen"]],
    belastung: "distanz",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1, knie: 1 },
    stufe: 1,
    sport: ["tennis", "basketball", "fussball", "handball"],
    golf: 1,
    hinweis: "Tief bleiben, Füße nicht kreuzen, mit dem hinteren Bein abdrücken.",
    info: {
      kurz: "Schnelle seitliche Nachstellschritte in tiefer, athletischer Position. Die Übung trainiert seitliche Beweglichkeit und die Kraft der seitlichen Hüftmuskulatur.",
      ausfuehrung: [
        "Geh in eine athletische Position: Füße etwas breiter als hüftbreit, Knie und Hüfte gebeugt, Oberkörper leicht vorgeneigt.",
        "Drück dich mit dem hinteren Bein kraftvoll zur Seite ab.",
        "Das führende Bein macht einen Schritt zur Seite, das hintere folgt, ohne dass die Füße sich berühren.",
        "Bleib dabei auf gleicher Höhe, ohne auf und ab zu hüpfen.",
        "Lauf 5 bis 10 Meter in eine Richtung, stopp und zurück.",
        "Beide Richtungen gleich oft trainieren."
      ],
      atmung: "Locker und gleichmäßig atmen.",
      fehler: [
        "Füße kreuzen oder schlagen zusammen: Immer etwas Abstand halten.",
        "Zu aufrecht: Tief und athletisch bleiben.",
        "Hüpfen statt gleiten: Flach über den Boden bewegen.",
        "Knie fallen nach innen: Knie über den Zehen."
      ],
      vorteile: [
        "Stärkt die seitliche Hüftmuskulatur und Adduktoren.",
        "Verbessert seitliche Schnelligkeit für Spielsportarten.",
        "Trainiert Stabilität in der athletischen Grundposition.",
        "Gut im Aufwärmen."
      ],
      tipps: [
        "Mit Mini-Band oberhalb der Knie wird es intensiver.",
        "Auf Signal die Richtung wechseln für mehr Reaktion."
      ],
      varianten: "Leichter: langsames seitliches Gehen. Schwerer: schneller, mit Mini-Band oder auf Signal.",
      sicherheit: "Auf griffigem Untergrund ausführen, um Wegrutschen zu vermeiden."
    }
  },
  {
    id: "ueberkreuzlauf",
    name: "Überkreuzlauf",
    auch: ["Carioca", "Grapevine", "Karaoke Drill"],
    muster: "sprint",
    art: "kraft",
    muskeln: ["adduktoren", "gesaess_mittel", "schraege_bauch"],
    sekundaer: ["hueftbeuger", "waden"],
    geraete: [[], ["draussen"]],
    belastung: "distanz",
    hoehe_cm: 200,
    gelenke: { huefte: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["fussball", "tennis", "golf", "basketball"],
    golf: 1,
    hinweis: "Seitwärts laufen, das hintere Bein abwechselnd vor und hinter dem anderen kreuzen.",
    info: {
      kurz: "Seitliche Laufübung, bei der das hintere Bein abwechselnd vor und hinter dem führenden Bein kreuzt. Sie trainiert Hüftrotation, Koordination und seitliche Beweglichkeit.",
      ausfuehrung: [
        "Stell dich seitlich zur Laufrichtung, Knie leicht gebeugt, Arme seitlich leicht abgespreizt.",
        "Kreuze das hintere Bein vor dem führenden Bein, die Hüfte dreht dabei mit.",
        "Mach mit dem führenden Bein einen Schritt zur Seite.",
        "Kreuze das hintere Bein nun hinter dem führenden Bein vorbei.",
        "Der Oberkörper bleibt möglichst nach vorn gerichtet, die Hüfte dreht unter ihm.",
        "Lauf so 15 bis 20 Meter, dann in die andere Richtung."
      ],
      atmung: "Locker und gleichmäßig atmen.",
      fehler: [
        "Oberkörper dreht komplett mit: Schultern bleiben weitgehend ruhig.",
        "Zu langsamer, steifer Rhythmus: Locker und flüssig.",
        "Auf den Fersen: Auf den Vorfüßen bleiben.",
        "Stolpern über die Füße: Erst langsam lernen."
      ],
      vorteile: [
        "Verbessert die Beweglichkeit der Hüfte in der Drehung.",
        "Trainiert Koordination und Fußarbeit.",
        "Wärmt Adduktoren und Hüfte vor dem Sport auf.",
        "Fördert die Trennung von Hüft- und Schulterbewegung."
      ],
      tipps: [
        "Als Teil des Lauf-ABC im Aufwärmen.",
        "Das Knie beim Vorkreuzen betont hochziehen, um die Hüfte stärker zu fordern."
      ],
      varianten: "Leichter: langsam im Gehen. Schwerer: schneller oder mit hohem Knie beim Vorkreuzen.",
      sicherheit: "Bei Leistenbeschwerden vorsichtig und langsam."
    }
  },
  // ===== Gleichgewicht: statisch =====
  {
    id: "tandemstand",
    name: "Tandemstand",
    auch: ["Tandem Stance", "Semi-Tandem Stance", "Fuß-vor-Fuß-Stand"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["schienbein", "bauch", "adduktoren"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    schwerer: "einbeinstand",
    hinweis: "Ferse direkt vor die Zehen des hinteren Fußes, ruhig stehen.",
    info: {
      kurz: "Stand mit den Füßen hintereinander auf einer Linie. Die schmale Standfläche fordert das seitliche Gleichgewicht und ist ein sanfter Einstieg ins Balancetraining.",
      ausfuehrung: [
        "Stell dich neben eine Wand oder Stuhllehne, an der du dich bei Bedarf festhalten kannst.",
        "Setz einen Fuß direkt vor den anderen, sodass die Ferse des vorderen Fußes die Zehen des hinteren berührt.",
        "Verteil das Gewicht gleichmäßig auf beide Füße, Knie locker, Oberkörper aufrecht.",
        "Lass die Hände los und lege sie an die Hüften oder vor die Brust.",
        "Richte den Blick auf einen festen Punkt vor dir und halte die Position ruhig.",
        "Halte 30 bis 60 Sekunden, dann wechsle den vorderen Fuß."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Füße stehen nicht auf einer Linie: Ferse genau vor die Zehen setzen.",
        "Körper verkrampft: Schultern locker, Knie leicht gebeugt.",
        "Blick nach unten: Einen festen Punkt auf Augenhöhe fixieren.",
        "Gewicht nur auf dem hinteren Fuß: Gleichmäßig verteilen."
      ],
      vorteile: [
        "Verbessert das seitliche Gleichgewicht.",
        "Sanfter Einstieg für Einsteiger und ältere Menschen.",
        "Kann helfen, die Standsicherheit im Alltag zu verbessern.",
        "Überall und ohne Gerät möglich."
      ],
      tipps: [
        "Wenn 60 Sekunden sicher gelingen, die Augen schließen oder zum Einbeinstand wechseln.",
        "Gut beim Zähneputzen oder Warten in den Alltag einzubauen."
      ],
      varianten: "Leichter: Füße leicht versetzt nebeneinander (halber Tandemstand). Schwerer: Augen geschlossen, auf weicher Unterlage oder Einbeinstand.",
      sicherheit: "Bei Schwindel oder Sturzneigung immer mit Haltemöglichkeit in Reichweite üben."
    }
  },
  {
    id: "einbeinstand",
    name: "Einbeinstand",
    auch: ["Single-Leg Stance", "Single-Leg Balance", "Flamingo Stand"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["schienbein", "bauch", "quadrizeps"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf", "fussball", "laufen", "tennis"],
    golf: 1,
    einseitig: true,
    schwerer: "einbeinstand_augen_zu",
    hinweis: "Becken waagerecht, Standknie leicht gebeugt, Blick auf einen festen Punkt.",
    info: {
      kurz: "Stand auf einem Bein mit offenen Augen. Die Grundübung des Gleichgewichtstrainings stärkt die Stabilität von Fuß, Sprunggelenk und Hüfte.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, eine Wand oder Stuhllehne in Reichweite.",
        "Verlagere das Gewicht auf ein Bein und heb den anderen Fuß einige Zentimeter vom Boden.",
        "Das Standknie ist ganz leicht gebeugt, der Fuß verteilt das Gewicht auf Ferse, Großzehenballen und Kleinzehenballen.",
        "Halte das Becken waagerecht, das Gesäß des Standbeins ist leicht angespannt.",
        "Richte den Oberkörper auf und fixiere einen Punkt auf Augenhöhe.",
        "Halte 30 bis 60 Sekunden, dann wechsle das Bein."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Becken kippt zur Seite des Spielbeins: Gesäß des Standbeins anspannen.",
        "Standknie überstreckt: Leicht gebeugt lassen.",
        "Fuß krallt sich fest oder rollt nach innen: Gewicht auf drei Punkte des Fußes verteilen.",
        "Spielbein am Standbein angelehnt: Frei halten."
      ],
      vorteile: [
        "Stärkt die kleinen Stabilisatoren an Fuß und Sprunggelenk.",
        "Verbessert das Gleichgewicht für Sport und Alltag.",
        "Kann nach Umknickverletzungen im Aufbau eingesetzt werden.",
        "Zeigt Unterschiede zwischen den Seiten."
      ],
      tipps: [
        "Barfuß üben, dann arbeiten die Fußmuskeln mehr.",
        "Wenn 60 Sekunden locker gelingen, auf die schwerere Variante wechseln.",
        "Leicht in den Alltag integrierbar, etwa beim Zähneputzen."
      ],
      varianten: "Leichter: Fingerspitzen an der Wand oder Tandemstand. Schwerer: Augen schließen, weiche Unterlage, Kopfdrehungen oder Ballwürfe.",
      sicherheit: "Bei Schwindel oder Sturzgefahr immer eine Haltemöglichkeit in Reichweite haben."
    }
  },
  {
    id: "einbeinstand_augen_zu",
    name: "Einbeinstand mit geschlossenen Augen",
    auch: ["Single-Leg Stance Eyes Closed", "Eyes Closed Balance"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["schienbein", "bauch"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    einseitig: true,
    schwerer: "einbeinstand_matte",
    hinweis: "Erst stabil stehen, dann die Augen schließen, Wand in Reichweite.",
    info: {
      kurz: "Einbeinstand ohne visuelle Kontrolle. Ohne die Augen muss der Körper sich auf die Rückmeldungen aus Fuß, Gelenken und Gleichgewichtsorgan verlassen, was diese gezielt trainiert.",
      ausfuehrung: [
        "Stell dich neben eine Wand oder in eine Ecke, damit du dich jederzeit abstützen kannst.",
        "Geh in den Einbeinstand mit leicht gebeugtem Standknie und waagerechtem Becken.",
        "Wenn du ruhig stehst, schließ langsam die Augen.",
        "Reagiere auf kleine Schwankungen mit dem Fuß und dem Fußgelenk, nicht mit großen Armbewegungen.",
        "Halte 15 bis 30 Sekunden. Wenn du den Fuß absetzen musst, öffne die Augen und beginne neu.",
        "Wechsle das Bein und mach 2 bis 3 Durchgänge je Seite."
      ],
      atmung: "Gleichmäßig und ruhig atmen, das hilft, den Körper zu entspannen.",
      fehler: [
        "Augen schließen, bevor du stabil stehst: Erst Ruhe finden.",
        "Steifes Bein und verkrampfter Körper: Locker bleiben.",
        "Zu lange Versuche bei ständigem Wackeln: Lieber kürzere, saubere Durchgänge.",
        "Ohne Sicherung üben: Immer eine Wand in Reichweite."
      ],
      vorteile: [
        "Trainiert die Tiefensensibilität von Fuß und Sprunggelenk.",
        "Fordert das Gleichgewichtsorgan stärker als mit offenen Augen.",
        "Kann helfen, die Stabilität nach Sprunggelenksverletzungen zu verbessern.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Barfuß auf festem Boden beginnen.",
        "Die Zeit notieren, das zeigt Fortschritte deutlich."
      ],
      varianten: "Leichter: Augen offen oder Tandemstand mit geschlossenen Augen. Schwerer: auf weicher Unterlage oder mit Kopfdrehungen.",
      sicherheit: "Bei Schwindel, Gleichgewichtsstörungen oder Sturzneigung nur mit Sicherung und nach Rücksprache."
    }
  },
  {
    id: "einbeinstand_matte",
    name: "Einbeinstand auf weicher Unterlage",
    auch: ["Single-Leg Stance on Foam", "Unstable Surface Balance", "Einbeinstand auf der Matte"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden", "schienbein"],
    sekundaer: ["bauch", "quadrizeps"],
    geraete: [["matte"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "golf", "laufen", "tennis"],
    golf: 1,
    einseitig: true,
    hinweis: "Matte doppelt oder dreifach falten, ruhig auf einem Bein stehen.",
    info: {
      kurz: "Einbeinstand auf einer mehrfach gefalteten Gymnastikmatte. Der nachgiebige Untergrund verlangt ständige kleine Korrekturen und trainiert die Stabilisatoren von Fuß und Sprunggelenk intensiver.",
      ausfuehrung: [
        "Falte eine Gymnastikmatte zwei- bis dreimal und leg sie neben eine Wand.",
        "Stell dich mit einem Fuß mittig auf die Matte, die Hand anfangs an der Wand.",
        "Heb den anderen Fuß an, Standknie leicht gebeugt, Becken waagerecht.",
        "Lass die Wand los und halte das Gleichgewicht mit kleinen Bewegungen im Fußgelenk.",
        "Halte den Blick auf einen festen Punkt und den Oberkörper aufrecht.",
        "Halte 20 bis 45 Sekunden, dann Seitenwechsel."
      ],
      atmung: "Ruhig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Knie fällt nach innen: Knie über dem zweiten Zeh halten.",
        "Ausgleich mit großen Armbewegungen: Bewegung aus Fuß und Hüfte.",
        "Matte rutscht: Auf rutschfestem Boden auslegen.",
        "Becken kippt: Gesäß anspannen."
      ],
      vorteile: [
        "Intensiviert das Gleichgewichtstraining ohne Spezialgeräte.",
        "Fordert die Muskeln um das Sprunggelenk ständig.",
        "Häufig eingesetzt zur Vorbeugung von Umknickverletzungen.",
        "Verbessert die Reaktionsfähigkeit auf unebenem Untergrund."
      ],
      tipps: [
        "Je dicker die Faltung, desto schwerer.",
        "Wer ein Balancekissen besitzt, kann es ebenso verwenden."
      ],
      varianten: "Leichter: Einbeinstand auf festem Boden. Schwerer: Augen schließen, Kopfdrehungen oder kleine Kniebeugen auf der Matte.",
      sicherheit: "Bei Sprunggelenksinstabilität eine Wand in Reichweite. Bei Schwindel vorsichtig."
    }
  },
  {
    id: "einbeinstand_kopfdrehen",
    name: "Einbeinstand mit Kopfdrehungen",
    auch: ["Single-Leg Stance with Head Turns", "Balance with Head Rotation"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["schienbein", "bauch", "nacken"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "tennis"],
    golf: 1,
    einseitig: true,
    hinweis: "Kopf langsam links und rechts drehen, der Körper bleibt ruhig.",
    info: {
      kurz: "Einbeinstand, bei dem du den Kopf langsam hin und her drehst. Die Kopfbewegung stört das Gleichgewichtsorgan und trainiert die Stabilität, wenn der Blick nicht ruhig bleibt, wie im Sport ständig der Fall.",
      ausfuehrung: [
        "Stell dich neben eine Wand in den Einbeinstand, Standknie leicht gebeugt.",
        "Wenn du ruhig stehst, dreh den Kopf langsam nach links, so weit es angenehm ist.",
        "Dreh den Kopf in gleichmäßigem Tempo nach rechts, der Oberkörper bleibt nach vorn gerichtet.",
        "Mach 10 bis 15 Drehungen, dann zusätzlich langsames Nicken nach oben und unten.",
        "Halte das Becken waagerecht und den Fuß ruhig am Boden.",
        "Insgesamt 30 bis 45 Sekunden je Bein."
      ],
      atmung: "Ruhig und gleichmäßig atmen.",
      fehler: [
        "Zu schnelle Kopfbewegungen: Langsam beginnen.",
        "Oberkörper dreht mit: Nur der Kopf bewegt sich.",
        "Fuß verliert Kontakt oder rutscht: Tempo reduzieren.",
        "Schultern ziehen hoch: Nacken locker."
      ],
      vorteile: [
        "Trainiert das Zusammenspiel von Gleichgewichtsorgan, Augen und Beinen.",
        "Ähnelt Situationen im Sport, in denen du den Ball oder Gegner verfolgst.",
        "Kann die Standsicherheit im Alltag verbessern.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Erst wenn der normale Einbeinstand sicher sitzt.",
        "Tempo langsam steigern."
      ],
      varianten: "Leichter: im Tandemstand. Schwerer: schnellere Drehungen oder auf weicher Unterlage.",
      sicherheit: "Bei Schwindel, Nackenbeschwerden oder Gleichgewichtsstörungen nur langsam und mit Sicherung."
    }
  },
  {
    id: "einbeinstand_vorfuss",
    name: "Einbeinstand auf dem Vorfuß",
    auch: ["Single-Leg Calf Raise Hold", "Single-Leg Toe Stand", "Ballenstand einbeinig"],
    muster: "balance",
    art: "kraft",
    muskeln: ["waden"],
    sekundaer: ["schienbein", "gesaess_mittel"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["laufen", "fussball", "tennis", "basketball"],
    einseitig: true,
    hinweis: "Ferse hoch, Gewicht über dem Großzehenballen, Knöchel nicht nach außen kippen.",
    info: {
      kurz: "Einbeiniges Halten im Zehenstand. Die kleine Standfläche und die gespannte Wade trainieren Gleichgewicht und Kraftausdauer im Sprunggelenk, wie sie beim Laufen und Springen gebraucht werden.",
      ausfuehrung: [
        "Stell dich neben eine Wand, die Fingerspitzen nur leicht angelegt.",
        "Steh auf einem Bein und heb die Ferse so hoch wie möglich.",
        "Verlagere das Gewicht über den Großzehenballen und den zweiten Zeh, nicht über den kleinen Zeh.",
        "Halte das Knie gestreckt, aber nicht durchgedrückt, und das Becken waagerecht.",
        "Lös die Hand von der Wand und halte die Position.",
        "Halte 15 bis 30 Sekunden, senke dann langsam ab und wechsle das Bein."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Knöchel kippt nach außen: Gewicht über den Großzehenballen.",
        "Ferse sinkt langsam ab: Kürzer, aber hoch halten.",
        "Knie überstreckt: Leicht locker lassen.",
        "Oberkörper lehnt sich an die Wand: Nur Fingerspitzen als Sicherung."
      ],
      vorteile: [
        "Stärkt Waden und Fußmuskeln im verkürzten Bereich.",
        "Verbessert die Stabilität des Sprunggelenks in der Abdruckposition.",
        "Hilfreich für Läufer und Springer.",
        "Gute Ergänzung zum Wadenheben."
      ],
      tipps: [
        "Barfuß üben.",
        "Im Spiegel prüfen, ob der Knöchel gerade bleibt."
      ],
      varianten: "Leichter: beidbeinig im Zehenstand. Schwerer: Augen schließen oder auf weicher Unterlage.",
      sicherheit: "Bei Achillessehnenbeschwerden zurückhaltend dosieren."
    }
  },
  // ===== Gleichgewicht: dynamisch =====
  {
    id: "einbeinstand_bandkicks",
    name: "Einbeinstand mit Band-Kicks",
    auch: ["T-Band Kicks", "Theraband Kicks", "Banded Kicks Single-Leg Balance"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["hueftbeuger", "adduktoren", "gesaess", "schienbein"],
    geraete: [["band"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "laufen", "basketball", "tennis"],
    golf: 1,
    einseitig: true,
    hinweis: "Standbein ruhig, das Spielbein mit Band schnell vor, zurück und zur Seite schwingen.",
    info: {
      kurz: "Einbeinstand, während das andere Bein mit einem Widerstandsband am Knöchel schnelle Kicks in verschiedene Richtungen macht. Die Störungen durch das Spielbein trainieren die Stabilität des Standbeins.",
      ausfuehrung: [
        "Befestige ein leichtes Widerstandsband als Schlaufe an einem festen Punkt in Knöchelhöhe und leg es um den Knöchel des Spielbeins.",
        "Stell dich mit etwas Abstand hin, sodass das Band leicht gespannt ist, und geh in den Einbeinstand auf dem anderen Bein.",
        "Standknie leicht gebeugt, Becken waagerecht, Oberkörper aufrecht.",
        "Schwing das Spielbein mit gestrecktem Knie zügig gegen den Bandzug und kontrolliert zurück.",
        "Führe die Kicks in alle vier Richtungen aus, indem du dich jeweils um 90 Grad zum Befestigungspunkt drehst.",
        "Je Richtung 20 bis 30 Sekunden, dann das Standbein wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Standbein wackelt stark: Langsamer kicken oder leichteres Band.",
        "Oberkörper schwingt mit: Rumpf ruhig halten.",
        "Becken kippt: Gesäß des Standbeins anspannen.",
        "Spielbein knickt im Knie: Möglichst gestreckt führen."
      ],
      vorteile: [
        "Trainiert gleichzeitig Standbeinstabilität und Hüftkraft des Spielbeins.",
        "In der Sportphysiotherapie bewährt nach Sprunggelenksverletzungen.",
        "Bewegte Störung ähnlich wie im Spiel.",
        "Alle Bewegungsrichtungen der Hüfte werden abgedeckt."
      ],
      tipps: [
        "Erst langsam und sauber, dann schneller.",
        "Auf weicher Unterlage stehen für mehr Schwierigkeit."
      ],
      varianten: "Leichter: ohne Band oder langsamere Kicks. Schwerer: stärkeres Band, schnellere Kicks oder auf gefalteter Matte.",
      sicherheit: "Band sicher befestigen. Bei Leisten- oder Hüftbeschwerden vorsichtig dosieren."
    }
  },
  {
    id: "einbeinstand_ballfangen",
    name: "Einbeinstand mit Ballwerfen an die Wand",
    auch: ["Single-Leg Balance Ball Toss", "Single-Leg Stance Wall Ball Catch"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden", "bauch"],
    sekundaer: ["schraege_bauch", "schienbein", "schulter_vorn"],
    geraete: [["medizinball", "wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "handball", "basketball", "tennis"],
    golf: 1,
    einseitig: true,
    hinweis: "Leichter Ball, auf einem Bein stehen bleiben, während du wirfst und fängst.",
    info: {
      kurz: "Einbeinstand, während du einen leichten Medizinball gegen eine Wand wirfst und wieder fängst. Die Aufmerksamkeit liegt beim Ball, das Gleichgewicht muss automatisch gehalten werden.",
      ausfuehrung: [
        "Stell dich etwa 1,5 bis 2 Meter vor eine stabile Wand, einen leichten Ball mit 1 bis 2 kg in den Händen.",
        "Geh in den Einbeinstand, Standknie leicht gebeugt, Becken waagerecht.",
        "Wirf den Ball mit beiden Händen gegen die Wand, etwa auf Brusthöhe.",
        "Fang den Ball und halte dabei das Gleichgewicht, das Spielbein setzt nicht ab.",
        "Wirf in einem ruhigen, gleichmäßigen Rhythmus weiter.",
        "Nach 30 bis 45 Sekunden das Standbein wechseln."
      ],
      atmung: "Beim Wurf ausatmen, beim Fangen einatmen, gleichmäßiger Rhythmus.",
      fehler: [
        "Zu schwerer Ball oder zu harte Würfe: Leicht und kontrolliert.",
        "Standknie fällt beim Fangen nach innen: Knie über dem Fuß halten.",
        "Spielbein tippt immer wieder ab: Kürzere Distanz zur Wand.",
        "Oberkörper lehnt sich weit zurück: Aufrecht bleiben."
      ],
      vorteile: [
        "Trainiert das Gleichgewicht unter abgelenkter Aufmerksamkeit.",
        "Verbindet Rumpfstabilität und Standbeinkontrolle.",
        "Sportnah, da der Blick auf den Ball gerichtet ist.",
        "Abwechslungsreich und motivierend."
      ],
      tipps: [
        "Würfe variieren: hoch, tief, seitlich.",
        "Mit einem Partner kann der Ball unvorhersehbar zugespielt werden."
      ],
      varianten: "Leichter: beidbeinig oder mit leichterem Ball. Schwerer: auf gefalteter Matte, einhändig oder diagonal werfen.",
      sicherheit: "Bei Schwindel oder Sturzneigung nicht geeignet. Wand muss den Ball aushalten."
    }
  },
  {
    id: "seiltaenzergang",
    name: "Seiltänzergang",
    auch: ["Heel-to-Toe Walk", "Tandem Walk", "Tightrope Walk"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["schienbein", "bauch", "adduktoren"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    hinweis: "Ferse direkt vor die Zehen setzen, langsam auf einer Linie gehen.",
    info: {
      kurz: "Langsames Gehen auf einer Linie, bei dem die Ferse jeweils direkt vor die Zehen des anderen Fußes gesetzt wird. Die Übung trainiert das Gleichgewicht in der Bewegung.",
      ausfuehrung: [
        "Such dir eine gerade Linie am Boden, etwa eine Fuge oder ein Klebeband, mit Wand oder Geländer in der Nähe.",
        "Stell dich aufrecht an den Anfang, Blick nach vorn auf das Ende der Linie.",
        "Setz einen Fuß so vor den anderen, dass die Ferse die Zehen des hinteren Fußes berührt.",
        "Verlagere das Gewicht vollständig nach vorn, bevor du den nächsten Schritt machst.",
        "Geh langsam und gleichmäßig etwa 5 bis 10 Meter, Arme locker seitlich.",
        "Dreh am Ende um und geh zurück, insgesamt 45 bis 60 Sekunden."
      ],
      atmung: "Ruhig und gleichmäßig atmen.",
      fehler: [
        "Zu schnelles Gehen: Langsam und kontrolliert.",
        "Blick auf die Füße: Nach vorn schauen.",
        "Füße nicht auf einer Linie: Ferse genau vor die Zehen.",
        "Arme rudern stark: Locker seitlich halten."
      ],
      vorteile: [
        "Trainiert dynamisches Gleichgewicht.",
        "Einfach und sicher, gut für Einsteiger.",
        "Kann die Gangsicherheit im Alltag verbessern.",
        "Ohne Gerät überall möglich."
      ],
      tipps: [
        "Für mehr Schwierigkeit rückwärts gehen.",
        "Gut als Teil des Aufwärmens."
      ],
      varianten: "Leichter: kleiner Abstand zwischen den Füßen. Schwerer: rückwärts, mit geschlossenen Augen oder mit Kopfdrehungen.",
      sicherheit: "Bei Gleichgewichtsstörungen immer neben einer Wand oder einem Geländer üben."
    }
  },
  {
    id: "star_excursion",
    name: "Star-Excursion-Balance",
    auch: ["Star Excursion Balance Test", "SEBT", "Stern-Reichen einbeinig"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "quadrizeps", "gesaess"],
    sekundaer: ["waden", "adduktoren", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "golf", "tennis"],
    golf: 2,
    einseitig: true,
    hinweis: "Auf einem Bein stehen, mit dem anderen Fuß sternförmig so weit wie möglich tippen.",
    info: {
      kurz: "Auf einem Bein stehend tippst du mit dem anderen Fuß nacheinander in acht Richtungen eines Sterns so weit wie möglich. Die Übung stammt aus der Sportphysiotherapie und trainiert dynamische Stabilität.",
      ausfuehrung: [
        "Stell dir einen Stern mit acht Strahlen um deinen Standfuß vor, oder kleb ihn mit Klebeband auf den Boden.",
        "Steh auf einem Bein in der Mitte, Hände in den Hüften, Standknie leicht gebeugt.",
        "Beuge Standknie und Hüfte und tippe mit dem Spielbein so weit wie möglich nach vorn, nur leicht mit den Zehen.",
        "Kehre in die Mitte zurück, ohne den Fuß abzusetzen, und tippe in die nächste Richtung.",
        "Arbeite dich im Kreis durch alle acht Richtungen, das entspricht einer Wiederholung.",
        "Mach 2 bis 3 Runden je Bein."
      ],
      atmung: "Beim Hinausreichen ausatmen, beim Zurückkommen einatmen.",
      fehler: [
        "Gewicht auf das tippende Bein verlagern: Nur ganz leicht antippen.",
        "Standknie fällt nach innen: Über dem zweiten Zeh halten.",
        "Ferse des Standbeins hebt ab: Ganzer Fuß bleibt am Boden.",
        "Oberkörper fällt zusammen: Rücken lang, Brust offen."
      ],
      vorteile: [
        "Trainiert Kraft und Kontrolle des Standbeins in vielen Richtungen.",
        "Fordert Beweglichkeit von Hüfte, Knie und Sprunggelenk.",
        "Wird in der Sportmedizin auch als Test genutzt.",
        "Zeigt Seitenunterschiede gut auf."
      ],
      tipps: [
        "Die erreichte Weite in jede Richtung markieren und vergleichen.",
        "Langsam und kontrolliert, Qualität vor Weite."
      ],
      varianten: "Leichter: weniger Richtungen oder kürzere Weite. Schwerer: auf gefalteter Matte oder mit geschlossenen Augen.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden die Weite begrenzen.",
      golf: "Ein stabiles Standbein bei gebeugter Hüfte ist im Golf vor allem im Rückschwung auf dem hinteren Bein und im Durchschwung auf dem vorderen Bein gefragt. Die Übung verbessert diese Kontrolle in vielen Richtungen."
    }
  },
  {
    id: "y_balance",
    name: "Y-Balance",
    auch: ["Y-Balance Test", "Y Balance Reach", "Lower Quarter Y-Balance"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "quadrizeps", "gesaess"],
    sekundaer: ["beinbeuger", "waden", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "basketball", "golf", "laufen"],
    golf: 2,
    einseitig: true,
    hinweis: "Nach vorn, hinten innen und hinten außen reichen, Standfuß bleibt flach.",
    info: {
      kurz: "Verkürzte Form der Star-Excursion-Balance mit drei Richtungen in Y-Form: vorn, hinten innen und hinten außen. Wird häufig in Sport und Physiotherapie genutzt, um Stabilität und Seitenunterschiede zu trainieren.",
      ausfuehrung: [
        "Leg drei Linien in Y-Form auf den Boden: eine nach vorn und zwei schräg nach hinten im Winkel von etwa 135 Grad.",
        "Steh auf einem Bein in der Mitte, Hände in den Hüften.",
        "Schieb das Spielbein entlang der vorderen Linie so weit wie möglich nach vorn, tippe nur leicht auf und komm zurück.",
        "Reiche dann schräg nach hinten innen, hinter das Standbein, und zurück.",
        "Reiche schräg nach hinten außen und zurück, ohne den Fuß abzusetzen.",
        "Drei Richtungen entsprechen einer Wiederholung. 3 bis 5 Wiederholungen je Bein."
      ],
      atmung: "Beim Reichen ausatmen, beim Zurückkommen einatmen.",
      fehler: [
        "Ferse hebt ab: Standfuß bleibt flach am Boden.",
        "Spielbein wird belastet: Nur leicht antippen.",
        "Knie fällt nach innen: Knie über dem Fuß.",
        "Rumpf rotiert stark: Hüfte nach vorn halten."
      ],
      vorteile: [
        "Trainiert dynamische Stabilität in drei zentralen Richtungen.",
        "Gut geeignet, um Seitenunterschiede zu erkennen und auszugleichen.",
        "Kombiniert Kraft, Beweglichkeit und Gleichgewicht.",
        "Wird zur Verletzungsvorbeugung im Sport genutzt."
      ],
      tipps: [
        "Die Reichweiten in Zentimetern notieren und zwischen den Beinen vergleichen.",
        "Einige Probedurchgänge machen, bevor du misst."
      ],
      varianten: "Leichter: nur die vordere Richtung. Schwerer: auf gefalteter Matte oder mit geschlossenen Augen.",
      sicherheit: "Bei Knieschmerzen die Tiefe begrenzen.",
      golf: "Gute Werte in der Y-Balance gehen mit einer besseren Kontrolle von Hüfte und Knie einher. Im Golfschwung hilft das, die Position im Rückschwung zu halten und den Schwung über das vordere Bein stabil abzufangen."
    }
  },
  {
    id: "uhr_reichen",
    name: "Einbeinige Uhr",
    auch: ["Single-Leg Clock Reach", "Balance Clock", "Clock Reach"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "gesaess"],
    sekundaer: ["schraege_bauch", "waden", "quadrizeps"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "tennis"],
    golf: 2,
    einseitig: true,
    hinweis: "Auf einem Bein stehen und mit der Hand die Uhrzeiten in Hüfthöhe nachzeichnen.",
    info: {
      kurz: "Auf einem Bein stehend reichst du mit dem gegenüberliegenden Arm wie die Zeiger einer Uhr in verschiedene Richtungen. Die Armbewegung verschiebt den Schwerpunkt und fordert Hüfte und Rumpf.",
      ausfuehrung: [
        "Steh auf dem rechten Bein, Knie leicht gebeugt, Becken waagerecht.",
        "Stell dir eine Uhr auf Brusthöhe vor dir vor, mit dir in der Mitte.",
        "Reich mit dem linken Arm auf 12 Uhr nach vorn, so weit es kontrolliert geht, und komm zurück.",
        "Reich nacheinander auf 3, 6 und 9 Uhr, dabei dreht sich der Oberkörper mit, die Hüfte bleibt stabil.",
        "Für 6 Uhr hinter dir drehst du den Oberkörper nach hinten, ohne das Standknie einknicken zu lassen.",
        "Eine Runde zählt als Wiederholung. 3 bis 5 Runden je Bein, dann Seitenwechsel."
      ],
      atmung: "Beim Reichen ausatmen, beim Zurückkommen einatmen.",
      fehler: [
        "Standknie dreht nach innen: Knie zeigt nach vorn über den Fuß.",
        "Becken kippt: Gesäß des Standbeins anspannen.",
        "Reichen zu schnell: Ruhig und kontrolliert.",
        "Spielbein tippt ab: Weite verringern."
      ],
      vorteile: [
        "Trainiert die Stabilität des Standbeins bei Rumpfrotation.",
        "Verbindet Gleichgewicht, Hüftkontrolle und Drehbeweglichkeit.",
        "Ohne Gerät und auf kleinem Raum möglich.",
        "Gut als Aktivierung vor dem Training."
      ],
      tipps: [
        "Wenn es leicht wird, mit einer leichten Hantel in der Hand reichen.",
        "Beim Reichen nach unten zusätzlich in die Hüfte beugen."
      ],
      varianten: "Leichter: nur vier Zeiten und kleiner Bewegungsumfang. Schwerer: auf gefalteter Matte, tiefer reichen oder mit leichtem Gewicht.",
      sicherheit: "Bei Knie- oder Rückenbeschwerden die Drehung klein halten.",
      golf: "Im Golfschwung dreht der Oberkörper über einem stabilen Bein. Die Übung trainiert genau diese Fähigkeit, Rotation zuzulassen, ohne dass Knie und Becken nachgeben."
    }
  },
  {
    id: "einbein_reach",
    name: "Einbeinige Standwaage mit Vorgreifen",
    auch: ["Single-Leg RDL Reach", "Single-Leg Balance Reach", "Bodyweight Single-Leg Deadlift Reach"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger", "gesaess_mittel"],
    sekundaer: ["ruecken_unten", "waden", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    einseitig: true,
    hinweis: "Hüfte beugen, Rücken lang, mit den Händen nach vorn unten greifen.",
    info: {
      kurz: "Einbeiniges Kreuzheben ohne Gewicht, bei dem du mit den Händen nach vorn unten greifst. Die Gleichgewichtsform trainiert die Kontrolle von Hüfte und Fuß in der Vorbeuge.",
      ausfuehrung: [
        "Steh auf einem Bein, Standknie leicht gebeugt, Arme locker hängend.",
        "Kipp den Oberkörper aus der Hüfte nach vorn, das freie Bein geht gestreckt nach hinten.",
        "Reiche mit beiden Händen nach vorn unten Richtung Boden, so weit es mit geradem Rücken geht.",
        "Becken und Hüfte bleiben waagerecht, die Zehen des hinteren Beins zeigen nach unten.",
        "Richte dich durch Anspannen des Gesäßes kontrolliert wieder auf, ohne den Fuß abzusetzen.",
        "6 bis 10 Wiederholungen je Bein."
      ],
      atmung: "Beim Vorbeugen einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Rücken rundet sich: Bewegung aus der Hüfte, Brust nach vorn.",
        "Becken dreht zur Seite des Spielbeins auf: Hüftknochen zeigen nach unten.",
        "Standknie gestreckt: Leicht gebeugt lassen.",
        "Zu schnelles Tempo: Kontrolliert und ruhig."
      ],
      vorteile: [
        "Verbindet Gleichgewicht mit Kraft der hinteren Kette.",
        "Trainiert die Kontrolle des Beckens auf einem Bein.",
        "Gute Vorstufe für das einbeinige Kreuzheben mit Gewicht.",
        "Verbessert Stabilität für Laufen und Richtungswechsel."
      ],
      tipps: [
        "Einen Gegenstand vor dir auf den Boden legen und antippen.",
        "Erst mit Fingerspitzen an der Wand üben."
      ],
      varianten: "Leichter: kleiner Bewegungsumfang oder mit Wandkontakt. Schwerer: auf gefalteter Matte, langsamer oder mit Kurzhantel als Kraftübung.",
      sicherheit: "Bei Rückenbeschwerden Bewegungsumfang begrenzen.",
      golf: "Die Golfhaltung ist eine Vorbeuge aus der Hüfte. Die Standwaage trainiert, in dieser Beugung auf einem Bein stabil zu bleiben, was für einen ruhigen Unterkörper im Schwung hilfreich ist."
    }
  },
  {
    id: "hip_airplane",
    name: "Hüft-Airplane",
    auch: ["Hip Airplane", "Standing Hip Airplane", "Airplane"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger", "adduktoren", "schraege_bauch"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 3,
    sport: ["golf", "fussball", "tennis", "laufen"],
    golf: 2,
    einseitig: true,
    hinweis: "In der Standwaage das Becken langsam auf- und zudrehen, das Standbein bleibt ruhig.",
    info: {
      kurz: "In der einbeinigen Standwaage drehst du das Becken über dem Standbein nach außen auf und nach innen zu. Die Übung trainiert Kraft und Kontrolle der Hüftrotation auf einem Bein.",
      ausfuehrung: [
        "Stell dich auf ein Bein neben eine Wand und stütz dich anfangs leicht mit einer Hand ab.",
        "Beuge dich aus der Hüfte nach vorn, bis der Oberkörper etwa waagerecht ist, das freie Bein gestreckt nach hinten.",
        "Dreh das Becken langsam nach außen auf, sodass die Hüfte des Spielbeins zur Decke zeigt.",
        "Dreh das Becken danach nach innen zu, bis es wieder waagerecht ist oder leicht darüber hinaus.",
        "Das Standknie und der Fuß bleiben stabil, die Bewegung findet im Hüftgelenk des Standbeins statt.",
        "5 bis 8 langsame Wiederholungen je Seite."
      ],
      atmung: "Beim Aufdrehen ausatmen, beim Zudrehen einatmen.",
      fehler: [
        "Bewegung kommt aus dem Oberkörper: Becken und Rumpf drehen gemeinsam über dem Standbein.",
        "Standknie dreht mit: Knie zeigt nach vorn.",
        "Zu schnell: Langsam und kontrolliert.",
        "Rücken rundet sich: Lang machen."
      ],
      vorteile: [
        "Stärkt die Rotationskraft und Kontrolle der Hüfte.",
        "Verbessert Gleichgewicht und Stabilität auf einem Bein.",
        "Fördert die Beweglichkeit der Hüfte in Innen- und Außenrotation.",
        "Gute Vorbereitung auf Sport mit Drehbewegungen."
      ],
      tipps: [
        "Mit Wandkontakt beginnen und erst später frei ausführen.",
        "Bewegungsumfang langsam steigern."
      ],
      varianten: "Leichter: mit Wand oder Stab als Stütze, kleiner Bewegungsumfang. Schwerer: frei, langsamer oder auf gefalteter Matte.",
      sicherheit: "Bei Hüftschmerzen in der Rotation den Umfang begrenzen oder auslassen.",
      golf: "Im Rückschwung dreht das Becken über dem hinteren Bein, im Durchschwung über dem vorderen. Das Hüft-Airplane trainiert genau diese Innen- und Außenrotation unter Last und kann helfen, die Drehung kontrolliert zu halten."
    }
  },
]
