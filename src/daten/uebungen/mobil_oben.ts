import type { Uebung } from "../../logik/typen"

export const MOBIL_OBEN: Uebung[] = [
  // ---------- Brustwirbelsäule ----------
  {
    id: "open_book",
    name: "Open Book in Seitenlage",
    auch: ["Open Book", "Side-Lying Thoracic Rotation", "Brustwirbelsäule öffnen in Seitlage"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "brust"],
    sekundaer: ["schraege_bauch", "schulter_vorn"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Rotationsübung in Seitenlage, bei der sich der obere Arm wie ein Buch öffnet. Mobilisiert die Brustwirbelsäule in die Drehung und dehnt dabei die Brust, ohne die Lendenwirbelsäule zu belasten.",
      ausfuehrung: [
        "Leg dich auf die Seite, den Kopf auf einem Kissen oder dem unteren Arm, damit der Nacken gerade bleibt.",
        "Beuge Hüfte und Knie jeweils etwa 90 Grad, die Knie liegen aufeinander. Optional klemmst du eine Faszienrolle zwischen die Knie.",
        "Strecke beide Arme auf Schulterhöhe nach vorn, die Handflächen liegen aufeinander.",
        "Öffne den oberen Arm in einem großen Bogen zur Decke und weiter zur anderen Seite. Der Blick folgt der Hand.",
        "Dreh nur so weit, wie die Knie sicher aufeinander liegen bleiben. Halte die Endposition zwei bis drei Atemzüge.",
        "Führe den Arm im gleichen Bogen langsam zurück und wiederhole. Danach Seite wechseln."
      ],
      atmung: "Atme beim Öffnen aus und lass die Brust mit dem Ausatmen weiter Richtung Boden sinken. In der Endposition ruhig weiteratmen.",
      fehler: [
        "Knie rutschen auseinander oder heben ab: dann dreht die Lendenwirbelsäule mit. Knie bewusst zusammendrücken oder eine Rolle dazwischen klemmen.",
        "Nur der Arm bewegt sich, der Brustkorb bleibt stehen: stell dir vor, das Brustbein dreht zur Decke.",
        "Den Arm mit Schwung nach hinten werfen: langsam und kontrolliert arbeiten, die Bewegung kommt aus dem Rücken.",
        "Kopf hängt ohne Unterlage: ein Kissen verhindert Zug im Nacken."
      ],
      vorteile: [
        "Verbessert die Rotation der Brustwirbelsäule, die im Alltag durch viel Sitzen oft eingeschränkt ist.",
        "Dehnt Brustmuskel und vordere Schulter sanft mit.",
        "Schont die Lendenwirbelsäule, weil das Becken durch die Knieposition fixiert ist.",
        "Eignet sich als Aufwärmübung vor Rotationssportarten und vor dem Oberkörpertraining."
      ],
      tipps: [
        "Lieber 8 langsame, saubere Wiederholungen als 20 schnelle.",
        "Ein Handtuch unter der hinteren Schulter hilft, wenn die Hand den Boden noch nicht erreicht.",
        "Kombiniere sie mit Katze und Kuh als kurzes Programm für den oberen Rücken."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang, Arm angewinkelt. Schwerer: in der Endposition zwei Sekunden die Hand aktiv vom Boden abheben oder den Arm über Kopf kreisen lassen (Windmühle in Seitenlage).",
      sicherheit: "Bei Schulterbeschwerden den Arm angewinkelt lassen. Bei akuten Rückenschmerzen nur im schmerzfreien Bereich drehen.",
      golf: "Eine freie Brustwirbelsäule ist die Grundlage für eine volle Schulterdrehung im Rückschwung. Fehlt sie, holt sich der Körper die Rotation aus der Lendenwirbelsäule, was den unteren Rücken belasten kann."
    }
  },
  {
    id: "windmuehle_seitenlage",
    name: "Windmühle in Seitenlage",
    auch: ["Side-Lying Windmill", "Thoracic Windmill", "Arm Sweep"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "brust"],
    sekundaer: ["latissimus", "schulter_vorn", "schraege_bauch"],
    geraete: [["matte", "faszienrolle"], ["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "schwimmen"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Erweiterung des Open Book: Der obere Arm beschreibt einen großen Kreis über den Kopf, während das Becken fixiert bleibt. Verbindet Rotation der Brustwirbelsäule mit Schulterbeweglichkeit über Kopf.",
      ausfuehrung: [
        "Leg dich auf die Seite, das obere Knie liegt angewinkelt auf einer Faszienrolle oder einem Kissen auf Hüfthöhe.",
        "Die untere Hand hält das obere Knie fest am Boden, so bleibt die Lendenwirbelsäule ruhig.",
        "Strecke den oberen Arm vor dir auf Schulterhöhe aus, die Fingerspitzen berühren den Boden.",
        "Lass die Hand über den Boden nach oben über den Kopf gleiten, dann weiter in einem großen Kreis hinter dich.",
        "Der Brustkorb dreht mit, der Blick folgt der Hand. Führe den Arm unten am Körper entlang zurück nach vorn.",
        "Mache 5 bis 8 langsame Kreise, dann die Richtung umkehren und die Seite wechseln."
      ],
      atmung: "Einatmen, während die Hand über den Kopf gleitet, ausatmen beim Öffnen nach hinten. Gleichmäßig weiteratmen.",
      fehler: [
        "Das Knie hebt vom Boden ab: Hand fest auf das Knie legen und den Kreis kleiner machen.",
        "Der Arm hebt vom Boden ab und schwebt: wenn möglich Kontakt halten, er zeigt dir, wo die Beweglichkeit endet.",
        "Schulter schmerzt über Kopf: Ellbogen beugen und den Kreis enger führen.",
        "Zu schnelles Kreisen: Die Übung lebt von langsamen Endpositionen."
      ],
      vorteile: [
        "Kombiniert Brustwirbelsäulenrotation mit Schulterflexion in einer Bewegung.",
        "Dehnt Brust und Latissimus in verschiedenen Winkeln.",
        "Zeigt Unterschiede zwischen linker und rechter Seite deutlich.",
        "Gute Vorbereitung für Überkopfübungen und Rotationssport."
      ],
      tipps: [
        "Die Rolle unter dem Knie ist der Schlüssel: Je höher das Knie liegt, desto stabiler bleibt das Becken.",
        "Bleib an Stellen, die eng sind, zwei Atemzüge stehen, statt darüber hinwegzukreisen."
      ],
      varianten: "Leichter: Open Book ohne Überkopfkreis. Schwerer: Endposition hinten fünf Sekunden halten und die Hand aktiv vom Boden heben.",
      sicherheit: "Bei Schulterbeschwerden über Kopf oder Instabilität nur im schmerzfreien Bereich kreisen.",
      golf: "Trainiert die Drehung des Oberkörpers gegen ein stabiles Becken, also genau die Trennung, die im Rückschwung gebraucht wird. Zusätzlich wird der Latissimus länger, was eine volle Armbewegung oben im Schwung erleichtert."
    }
  },
  {
    id: "katze_kuh",
    name: "Katze und Kuh",
    auch: ["Cat-Cow", "Cat Camel", "Katzenbuckel"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["ruecken_unten", "oberer_ruecken"],
    sekundaer: ["bauch", "nacken"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    schwerer: "katze_kuh_segmental",
    info: {
      kurz: "Rhythmisches Runden und Strecken der Wirbelsäule im Vierfüßlerstand. Ein Klassiker zum Aufwärmen und Lockern des ganzen Rückens.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand: Hände unter den Schultern, Knie unter den Hüften, Rücken neutral.",
        "Für die Katze: Drück dich vom Boden weg, rolle das Becken ein und mache den Rücken rund wie ein Buckel. Der Kopf sinkt locker nach unten.",
        "Für die Kuh: Kipp das Becken nach vorn, lass den Bauch Richtung Boden sinken, öffne die Brust nach vorn und heb den Blick leicht an.",
        "Wechsle fließend zwischen beiden Positionen, ohne in den Endpositionen zu federn.",
        "Halte jede Endposition kurz für einen Atemzug, dann weiter zur anderen Seite.",
        "Mache 8 bis 12 ruhige Durchgänge."
      ],
      atmung: "Ausatmen in die Katze (rund), einatmen in die Kuh (Hohlkreuz). Der Atem gibt das Tempo vor.",
      fehler: [
        "Nur der Kopf bewegt sich, der Rücken bleibt starr: Bewegung bewusst im Becken beginnen.",
        "Kopf weit in den Nacken legen: in der Kuh nur leicht nach vorn schauen, der Nacken bleibt lang.",
        "Ellbogen überstreckt: Arme gestreckt, aber nicht durchgedrückt.",
        "Zu hektisch: langsam mit dem Atem arbeiten."
      ],
      vorteile: [
        "Bewegt alle Abschnitte der Wirbelsäule in Beugung und Streckung.",
        "Sehr gut als sanfter Einstieg am Morgen oder nach langem Sitzen.",
        "Schult das Gefühl für Beckenstellung, hilfreich für Kniebeuge und Kreuzheben.",
        "Gelenkschonend und für fast alle geeignet."
      ],
      tipps: [
        "Wenn die Handgelenke drücken, stütz dich auf die Fäuste oder die Unterarme.",
        "Stell dir vor, du bewegst Wirbel für Wirbel wie eine Welle von hinten nach vorn."
      ],
      varianten: "Leichter: im Sitzen auf einem Stuhl mit Händen auf den Knien. Schwerer: segmentale Katze und Kuh mit gezielter Bewegung einzelner Abschnitte.",
      sicherheit: "Bei akuten Bandscheibenbeschwerden die Endpositionen meiden und ärztlich abklären lassen. Bei Handgelenkschmerzen auf Fäusten oder Unterarmen stützen."
    }
  },
  {
    id: "katze_kuh_segmental",
    name: "Segmentale Katze und Kuh",
    auch: ["Segmental Cat-Cow", "Segmental Cat Camel", "Spinal Segmentation"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["ruecken_unten", "oberer_ruecken"],
    sekundaer: ["bauch", "schraege_bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Anspruchsvolle Form von Katze und Kuh, bei der du die Wirbelsäule Abschnitt für Abschnitt bewegst. Verbessert die Kontrolle über einzelne Bereiche des Rückens.",
      ausfuehrung: [
        "Starte im Vierfüßlerstand mit neutralem Rücken, Hände unter den Schultern, Knie unter den Hüften.",
        "Beginne die Katze ganz unten: Rolle zuerst nur das Becken ein, dann runde die Lendenwirbelsäule, dann die Brustwirbelsäule und zuletzt den Nacken.",
        "Rolle in umgekehrter Richtung in die Kuh: zuerst kippt das Becken, dann folgt Wirbel für Wirbel nach oben bis zum Kopf.",
        "Arbeite sehr langsam, etwa fünf bis acht Sekunden je Richtung.",
        "Wenn ein Abschnitt sich wie ein Block anfühlt, bleib dort und versuche kleine Bewegungen genau an dieser Stelle.",
        "Mache 5 bis 6 Durchgänge in jede Richtung."
      ],
      atmung: "Lang ausatmen beim Rundwerden, lang einatmen beim Strecken. Der Atem sollte die langsame Bewegung begleiten.",
      fehler: [
        "Alles bewegt sich gleichzeitig: Tempo halbieren und bewusst unten anfangen.",
        "Schultern sinken zwischen die Schulterblätter: den Boden aktiv wegdrücken.",
        "Zu großer Ehrgeiz bei der Streckung: Die Kuh endet, bevor es im unteren Rücken drückt."
      ],
      vorteile: [
        "Schult die Kontrolle über einzelne Abschnitte der Wirbelsäule.",
        "Macht steife Bereiche spürbar, häufig die mittlere Brustwirbelsäule.",
        "Guter Bestandteil von Aufwärmprogrammen vor Kreuzheben und Rotationssport.",
        "Fördert ruhige, konzentrierte Bewegung und kann entspannend wirken."
      ],
      tipps: [
        "Ein Partner kann mit dem Finger leicht auf die Wirbelsäule tippen, um zu zeigen, wo die Bewegung gerade sein sollte.",
        "Ein Spiegel seitlich hilft, die Welle sichtbar zu machen."
      ],
      varianten: "Leichter: normale Katze und Kuh. Schwerer: im Stand mit Händen auf den Oberschenkeln oder als Abrollen im Stand (Roll Down).",
      sicherheit: "Bei akuten Rückenbeschwerden nur im schmerzfreien Bereich üben."
    }
  },
  {
    id: "bws_rotation_kniend",
    name: "Vierfüßler-Rotation mit Hand am Kopf",
    auch: ["Quadruped T-Spine Rotation", "Quadruped Thoracic Rotation", "Rotation im Vierfüßlerstand"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken"],
    sekundaer: ["schraege_bauch", "brust"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Rotation der Brustwirbelsäule im Vierfüßlerstand mit einer Hand am Hinterkopf. Eine der gängigsten Übungen, um die Drehfähigkeit des oberen Rückens zu verbessern.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand: Hände unter den Schultern, Knie unter den Hüften.",
        "Setz dich ein Stück zurück Richtung Fersen, das stabilisiert die Lendenwirbelsäule.",
        "Leg eine Hand an den Hinterkopf, der Ellbogen zeigt zur Seite.",
        "Dreh den Ellbogen nach unten Richtung Stützarm und dann in einem Bogen nach oben zur Decke.",
        "Der Blick folgt dem Ellbogen, das Becken bleibt ruhig und waagerecht.",
        "Halte oben kurz, dann zurück. Nach 8 bis 10 Wiederholungen Seite wechseln."
      ],
      atmung: "Einatmen beim Eindrehen nach unten, ausatmen beim Aufdrehen zur Decke.",
      fehler: [
        "Becken dreht mit: weiter zu den Fersen zurücksetzen und den Bauch leicht anspannen.",
        "Stützarm knickt ein: den Boden mit der Stützhand aktiv wegdrücken.",
        "Nur der Ellbogen bewegt sich nach hinten, die Brust bleibt unten: an das Brustbein denken, es soll mitdrehen.",
        "Kopf zieht nach vorn: der Kopf ruht in der Hand und bleibt in Verlängerung der Wirbelsäule."
      ],
      vorteile: [
        "Verbessert die Rotation der Brustwirbelsäule in beide Richtungen.",
        "Zeigt Seitenunterschiede deutlich.",
        "Schont den unteren Rücken durch die stabile Ausgangsposition.",
        "Gute Vorbereitung für Rudern, Drücken über Kopf und alle Wurf- und Schlagsportarten."
      ],
      tipps: [
        "Je weiter du zu den Fersen zurücksitzt, desto mehr isolierst du die Brustwirbelsäule.",
        "Halte oben zwei Sekunden und drück den Ellbogen aktiv weiter, das verbessert die aktive Beweglichkeit."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang. Schwerer: lendenfixierte Rotation mit Unterarm am Boden oder Hand hinter dem Rücken.",
      sicherheit: "Bei Handgelenkschmerzen auf der Faust stützen. Bei Schulterschmerzen die Hand am Kopf locker lassen.",
      golf: "Die Brustwirbelsäule liefert den Großteil der Oberkörperdrehung im Schwung. Diese Übung trainiert genau diese Drehung bei ruhigem Becken und kann helfen, Ausweichbewegungen aus dem unteren Rücken zu vermeiden."
    }
  },
  {
    id: "bws_rotation_lendenfixiert",
    name: "Lendenfixierte Rotation",
    auch: ["Lumbar-Locked Rotation", "Lumbar Locked T-Spine Rotation", "Kindhaltung mit Rotation"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken"],
    sekundaer: ["schraege_bauch", "brust", "latissimus"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Rotation aus der Kindhaltung mit Stütz auf dem Unterarm. Durch das tiefe Zurücksitzen ist die Lendenwirbelsäule nahezu blockiert, die Drehung kommt fast nur aus der Brustwirbelsäule.",
      ausfuehrung: [
        "Knie dich hin und setz das Gesäß auf die Fersen, die Knie sind etwas geöffnet.",
        "Leg dich nach vorn und stütz dich auf einen Unterarm, der Ellbogen liegt etwa unter der Schulter.",
        "Leg die andere Hand an den Hinterkopf oder auf den unteren Rücken.",
        "Dreh den Ellbogen der freien Seite zur Decke und öffne die Brust, der Blick folgt.",
        "Bleib mit dem Gesäß auf den Fersen. Halte oben kurz.",
        "Kehre langsam zurück. 8 bis 10 Wiederholungen, dann Seite wechseln."
      ],
      atmung: "Ausatmen beim Aufdrehen, in der Endposition ein ruhiger Atemzug, beim Zurückkehren einatmen.",
      fehler: [
        "Gesäß hebt von den Fersen ab: dann dreht die Lendenwirbelsäule mit, wieder tief zurücksetzen.",
        "Stützschulter sackt ab: den Unterarm aktiv in den Boden drücken.",
        "Schwung statt Kontrolle: langsam drehen und oben aktiv halten."
      ],
      vorteile: [
        "Isoliert die Brustwirbelsäule besser als fast jede andere Rotationsübung.",
        "Gilt als guter Test für die tatsächliche Rotationsfähigkeit des oberen Rückens.",
        "Belastet weder Handgelenke noch Lendenwirbelsäule nennenswert.",
        "Ideal vor Golf, Tennis und Wurfsportarten."
      ],
      tipps: [
        "Mit der Hand auf dem unteren Rücken wird es schwerer, weil die Schulter in Innenrotation kommt.",
        "Vergleiche beide Seiten. Arbeite auf der steiferen Seite ein paar Wiederholungen mehr."
      ],
      varianten: "Leichter: normale Vierfüßler-Rotation. Schwerer: Hand hinter dem Rücken, oben drei Sekunden aktiv halten.",
      sicherheit: "Bei Kniebeschwerden ein Kissen zwischen Gesäß und Fersen legen.",
      golf: "Gilt in der Golf-Fitness als Standardtest und Standardübung für die Brustwirbelsäulenrotation. Mehr freie Drehung oben bedeutet, dass der Rückschwung nicht über Ausgleichsbewegungen in Hüfte oder Lendenwirbelsäule erzwungen werden muss."
    }
  },
  {
    id: "faden_einfaedeln",
    name: "Faden einfädeln",
    auch: ["Thread the Needle", "Reach Through and Reach Up"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "schulter_hinten"],
    sekundaer: ["brust", "schraege_bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Dynamische Rotation im Vierfüßlerstand: Ein Arm fädelt unter dem Körper durch und öffnet sich dann zur Decke. Mobilisiert die Brustwirbelsäule in beide Drehrichtungen.",
      ausfuehrung: [
        "Starte im Vierfüßlerstand, Hände unter den Schultern, Knie unter den Hüften.",
        "Heb eine Hand und schiebe sie flach unter dem Körper zur anderen Seite durch, bis Schulter und Schläfe sich dem Boden nähern.",
        "Die Hüften bleiben über den Knien, du sitzt dabei nicht nach hinten.",
        "Zieh den Arm zurück und öffne ihn in einem Bogen zur Decke, die Brust dreht mit.",
        "Der Blick folgt der Hand in beide Richtungen.",
        "Mache 8 bis 10 fließende Wiederholungen, dann Seite wechseln."
      ],
      atmung: "Ausatmen beim Einfädeln, einatmen beim Öffnen zur Decke.",
      fehler: [
        "Hüften schieben zur Seite: das Becken bleibt mittig über den Knien.",
        "Stützarm wird weich und sackt: aktiv vom Boden wegdrücken.",
        "Nur der Arm bewegt sich: der Brustkorb soll sichtbar mitdrehen."
      ],
      vorteile: [
        "Mobilisiert die Brustwirbelsäule in beide Rotationsrichtungen in einer Übung.",
        "Dehnt beim Einfädeln die hintere Schulter und den Bereich zwischen den Schulterblättern.",
        "Gute Aufwärmübung vor dem Oberkörpertraining.",
        "Einfach zu lernen."
      ],
      tipps: [
        "Beim Einfädeln die Handfläche nach oben drehen, so liegt die Schulter angenehmer auf.",
        "Kombiniere sie mit Katze und Kuh zu einem kurzen Flow."
      ],
      varianten: "Leichter: kleinerer Umfang ohne Schulter am Boden. Schwerer: Endpositionen jeweils drei Atemzüge halten oder die gehaltene Variante nutzen.",
      sicherheit: "Bei Schulterschmerzen beim Einfädeln die Bewegung früher stoppen."
    }
  },
  {
    id: "faden_einfaedeln_halten",
    name: "Faden einfädeln gehalten",
    auch: ["Thread the Needle Hold", "Parsva Balasana"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["schulter_hinten", "oberer_ruecken"],
    sekundaer: ["trapez", "schraege_bauch"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Statische Dehnhaltung, bei der Schulter und Seite des Kopfes auf dem Boden ruhen, während der Arm unter dem Körper durchgefädelt ist. Dehnt hintere Schulter und Schulterblattbereich und dreht den oberen Rücken.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand und fädle einen Arm unter dem Körper zur anderen Seite durch.",
        "Lass Schulter und Schläfe auf dem Boden ankommen, die Handfläche zeigt nach oben.",
        "Die andere Hand bleibt am Boden vor dir oder wird über Kopf nach vorn gestreckt.",
        "Die Hüften bleiben etwa über den Knien. Spüre die Dehnung an der Rückseite der unteren Schulter.",
        "Halte 30 bis 60 Sekunden und lass mit jedem Ausatmen etwas mehr los.",
        "Löse die Position langsam auf und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen tiefer in die Drehung sinken.",
      fehler: [
        "Zu viel Gewicht auf dem Nacken: mehr über die Schulter abstützen, der Kopf liegt nur auf.",
        "Hüften kippen zur Seite: Becken mittig lassen.",
        "Die freie Hand drückt aggressiv nach: entspannt in die Dehnung atmen statt zu forcieren."
      ],
      vorteile: [
        "Dehnt hintere Schulter und Muskeln zwischen den Schulterblättern.",
        "Wirkt entspannend, gut für das Ende einer Einheit.",
        "Ergänzt dynamische Rotationsübungen um eine ruhige Endposition."
      ],
      tipps: [
        "Eine gefaltete Decke unter Schulter und Kopf macht die Position deutlich angenehmer.",
        "Wenn du die freie Hand nach vorn streckst, kommt eine Dehnung des Latissimus dazu."
      ],
      varianten: "Leichter: Arm nicht ganz durchfädeln. Schwerer: freie Hand hinter den Rücken legen und die Brust weiter zur Decke drehen.",
      sicherheit: "Bei Nackenbeschwerden den Kopf auf ein Kissen legen oder auslassen."
    }
  },
  {
    id: "bws_rotation_sitzend_stab",
    name: "Sitzende Rotation mit Stab",
    auch: ["Seated Thoracic Rotation", "Seated Trunk Rotation with Dowel"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "schraege_bauch"],
    sekundaer: ["ruecken_unten"],
    geraete: [["stab", "bank"], ["stab"], ["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 2,
    info: {
      kurz: "Rotation im aufrechten Sitz mit einem Stab auf den Schultern oder vor der Brust verschränkten Armen. Das Sitzen fixiert das Becken, sodass die Drehung aus dem Oberkörper kommt.",
      ausfuehrung: [
        "Setz dich aufrecht auf eine Bank oder einen Stuhl, die Füße stehen hüftbreit flach am Boden.",
        "Leg einen Stab hinter den Nacken auf die Schultern und halte ihn locker, oder verschränke die Arme vor der Brust.",
        "Mach dich lang, als würde dich ein Faden am Scheitel nach oben ziehen.",
        "Dreh den Oberkörper langsam zu einer Seite, so weit es ohne Ausweichen geht. Die Knie bleiben nach vorn gerichtet.",
        "Halte die Endposition kurz und dreh dann durch die Mitte zur anderen Seite.",
        "Mache 8 bis 12 kontrollierte Wiederholungen je Seite."
      ],
      atmung: "Ausatmen beim Drehen in die Endposition, einatmen beim Zurückdrehen zur Mitte.",
      fehler: [
        "Rundrücken beim Drehen: zuerst lang machen, dann drehen.",
        "Knie und Becken wandern mit: Füße fest in den Boden drücken, eventuell einen Ball zwischen die Knie klemmen.",
        "Seitneigung statt Drehung: der Stab bleibt waagerecht.",
        "Schwungvolles Drehen: die Endposition soll mit Muskelkraft erreicht werden."
      ],
      vorteile: [
        "Verbessert die Rotation des Oberkörpers in einer alltagsnahen, aufrechten Position.",
        "Lässt sich überall durchführen, auch im Büro.",
        "Trennt Oberkörper- und Beckenbewegung.",
        "Gute Aufwärmübung vor Golf und Tennis."
      ],
      tipps: [
        "Ein Ball oder eine gefaltete Matte zwischen den Knien verhindert, dass das Becken mitdreht.",
        "Kombiniere die Drehung mit einem Blick in die Gegenrichtung, um die Halswirbelsäule zu entlasten."
      ],
      varianten: "Leichter: kleiner Bewegungsumfang mit Armen vor der Brust. Schwerer: Drehung in Golfhaltung im Stand oder im Halbkniestand.",
      sicherheit: "Bei Bandscheibenbeschwerden nur langsam und im schmerzfreien Bereich drehen.",
      golf: "Diese Übung entspricht dem bekannten sitzenden Rotationstest aus dem Golf-Screening. Sie verbessert die Drehung des Oberkörpers gegen ein ruhiges Becken, die für einen vollen Rückschwung gebraucht wird."
    }
  },
  {
    id: "bws_rotation_halbkniend",
    name: "Rotation im Halbkniestand",
    auch: ["Half-Kneeling Thoracic Rotation", "Half-Kneeling T-Spine Rotation"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "schraege_bauch"],
    sekundaer: ["hueftbeuger", "brust"],
    geraete: [["stab", "matte"], ["stab"], ["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 170,
    gelenke: {},
    stufe: 2,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Oberkörperrotation im Halbkniestand, bei der Becken und vorderes Bein die Basis bilden. Trainiert die Drehung bei aufrechter Haltung und dehnt zugleich den Hüftbeuger des hinteren Beins leicht.",
      ausfuehrung: [
        "Knie dich in den Halbkniestand: ein Knie am Boden, das andere Bein vorn mit dem Fuß flach aufgestellt, beide Knie etwa 90 Grad.",
        "Spann das Gesäß des hinteren Beins leicht an, damit das Becken gerade bleibt.",
        "Leg einen Stab hinter den Nacken auf die Schultern oder verschränke die Arme vor der Brust.",
        "Dreh den Oberkörper zur Seite des vorderen Beins, so weit es ohne Ausweichen geht, und halte kurz.",
        "Dreh dann durch die Mitte zur anderen Seite. Das Becken bleibt dabei nach vorn ausgerichtet.",
        "Mache 8 bis 10 Wiederholungen, dann die Beine tauschen."
      ],
      atmung: "Ausatmen beim Drehen in die Endposition, einatmen zurück zur Mitte.",
      fehler: [
        "Becken dreht mit: Gesäß anspannen und vorderes Knie stabil halten.",
        "Hohlkreuz: Rippen leicht nach unten ziehen und das Becken aufrichten.",
        "Gleichgewicht geht verloren: vorderen Fuß etwas weiter zur Seite stellen."
      ],
      vorteile: [
        "Verbindet Rotation mit Rumpfstabilität in einer aufrechten Position.",
        "Dehnt nebenbei den Hüftbeuger des hinteren Beins.",
        "Näher an sportlichen Bewegungen als Rotationen am Boden.",
        "Zeigt Seitenunterschiede in der Drehung."
      ],
      tipps: [
        "Ein Kissen unter dem hinteren Knie macht die Übung angenehmer.",
        "Dreh dich in Richtung des vorderen Beins, da ist das Becken am besten gesichert."
      ],
      varianten: "Leichter: im Sitzen. Schwerer: Rotation in Golfhaltung im Stand oder die Endposition drei Sekunden aktiv halten.",
      sicherheit: "Bei Kniebeschwerden das hintere Knie gut polstern.",
      golf: "Trainiert die Trennung von Becken und Oberkörper in aufrechter Haltung. Das ist die Grundlage dafür, im Rückschwung weit aufzudrehen, ohne dass Becken oder Knie seitlich ausweichen."
    }
  },
  {
    id: "bws_rotation_golfhaltung",
    name: "Rotation in Golfhaltung mit Stab",
    auch: ["Standing T-Spine Rotation in Golf Posture", "Pelvic-Thoracic Separation Drill"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "schraege_bauch"],
    sekundaer: ["gesaess", "ruecken_unten"],
    geraete: [["stab"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    info: {
      kurz: "Rotation des Oberkörpers in vorgebeugter Haltung mit einem Stab auf der Brust oder den Schultern. Trainiert die Drehung genau in dem Winkel, in dem sie im Schwung gebraucht wird.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, beuge dich mit geradem Rücken aus der Hüfte nach vorn, bis der Oberkörper etwa 30 bis 40 Grad geneigt ist. Die Knie sind leicht gebeugt.",
        "Halte einen Stab vor der Brust mit gekreuzten Armen oder leg ihn auf die Schultern.",
        "Dreh den Oberkörper zu einer Seite, so dass eine Schulter Richtung Boden und die andere Richtung Decke zeigt. Der Winkel des Oberkörpers bleibt gleich.",
        "Becken und Knie bleiben möglichst ruhig nach vorn gerichtet.",
        "Dreh zurück durch die Mitte zur anderen Seite.",
        "Mache 10 bis 12 kontrollierte Wiederholungen je Seite."
      ],
      atmung: "Ausatmen beim Drehen in die Endposition, einatmen zur Mitte.",
      fehler: [
        "Oberkörper richtet sich beim Drehen auf: den Vorbeugewinkel halten, der Stab zeigt diagonal zum Boden.",
        "Becken dreht mit: Füße fest in den Boden drücken und das Becken bewusst stillhalten.",
        "Rundrücken: aus der Hüfte beugen, nicht aus der Wirbelsäule.",
        "Seitneigung statt Rotation: die Schultern drehen um die Achse der Wirbelsäule."
      ],
      vorteile: [
        "Überträgt die Brustwirbelsäulenrotation in eine sportspezifische Haltung.",
        "Schult die Trennung von Becken und Oberkörper.",
        "Verbessert das Gefühl für eine stabile Neigung des Oberkörpers.",
        "Gut als Teil des Aufwärmens vor der Runde."
      ],
      tipps: [
        "Halte den Kopf ruhig und den Blick auf einen Punkt am Boden, wie bei der Ansprechposition.",
        "Danach im Wechsel nur das Becken drehen und den Oberkörper still halten. So lernst du beide Richtungen der Trennung."
      ],
      varianten: "Leichter: im Sitzen. Schwerer: Oberkörper stillhalten und nur das Becken drehen, oder langsam mit drei Sekunden Halten am Ende.",
      sicherheit: "Bei Rückenbeschwerden die Vorbeuge geringer wählen und nur langsam drehen.",
      golf: "Entspricht dem bekannten Test zur Trennung von Becken und Oberkörper aus dem Golf-Screening. Wer in Golfhaltung frei drehen kann, behält im Rückschwung leichter seinen Winkel und kann Kraft aus der Drehung statt aus den Armen holen."
    }
  },
  {
    id: "drehsitz",
    name: "Drehsitz",
    auch: ["Seated Spinal Twist", "Ardha Matsyendrasana", "Half Lord of the Fishes"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "oberer_ruecken"],
    sekundaer: ["gesaess", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Yoga-Drehhaltung im Sitzen, bei der ein Bein über das andere gestellt wird und der Ellbogen die Drehung unterstützt. Dehnt Rumpfseite, Gesäß und Rückenmuskeln.",
      ausfuehrung: [
        "Setz dich mit gestreckten Beinen auf den Boden. Stell den rechten Fuß außen neben das linke Knie.",
        "Das linke Bein bleibt gestreckt oder wird angewinkelt, die Ferse liegt neben der rechten Hüfte.",
        "Stütz die rechte Hand hinter dir auf und richte dich auf, als würdest du größer werden.",
        "Leg den linken Ellbogen außen an das rechte Knie und dreh den Oberkörper nach rechts.",
        "Der Blick geht über die rechte Schulter. Halte 30 bis 45 Sekunden.",
        "Löse langsam und wechsle die Seite."
      ],
      atmung: "Mit dem Einatmen aufrichten, mit dem Ausatmen etwas tiefer in die Drehung gehen.",
      fehler: [
        "Rundrücken: die Stützhand näher ans Gesäß setzen oder auf ein Kissen setzen.",
        "Mit dem Ellbogen die Drehung erzwingen: der Ellbogen hält nur, die Drehung kommt aus dem Rumpf.",
        "Nacken wird überdreht: der Kopf folgt nur leicht."
      ],
      vorteile: [
        "Dehnt schräge Bauchmuskeln, Rückenstrecker und äußeres Gesäß gleichzeitig.",
        "Verbessert die Rotation in aufrechter Haltung.",
        "Ruhige Abschlussübung nach dem Training."
      ],
      tipps: [
        "Ein erhöhter Sitz auf einem Kissen erleichtert das Aufrichten deutlich.",
        "Stell dir vor, du schraubst dich von unten nach oben in die Drehung."
      ],
      varianten: "Leichter: beide Beine gestreckt, nur ein Fuß aufgestellt und den Arm um das Knie legen. Schwerer: Ellbogen außen ans Knie und die Hände vor der Brust zusammenlegen.",
      sicherheit: "Bei akuten Bandscheibenbeschwerden keine tiefen Drehungen. Bei Hüftbeschwerden das untere Bein gestreckt lassen."
    }
  },
  {
    id: "bretzel",
    name: "Bretzel-Dehnung",
    auch: ["Bretzel Stretch", "Pretzel Stretch"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "hueftbeuger", "quadrizeps"],
    sekundaer: ["brust", "schraege_bauch"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Kombinierte Dehnung aus Seitenlage, bei der das untere Bein den Oberschenkel nach hinten und das obere Knie den Boden hält, während der Oberkörper aufdreht. Bekannt aus der Arbeit von Gray Cook, verbindet sie Rotation der Brustwirbelsäule mit einer Dehnung von Hüftbeuger und Oberschenkel.",
      ausfuehrung: [
        "Leg dich auf die rechte Seite. Zieh das linke Knie vor dem Körper auf Hüfthöhe und halte es mit der rechten Hand am Boden.",
        "Beuge das rechte (untere) Knie, bis die Ferse Richtung Gesäß zeigt, und greif mit der linken Hand den rechten Fuß.",
        "Dreh nun den Oberkörper nach links, so dass die linke Schulter Richtung Boden sinkt.",
        "Die Knie bleiben in Position: oberes Knie unten, unterer Fuß in der Hand.",
        "Halte 30 bis 60 Sekunden und sinke mit jedem Ausatmen etwas weiter auf.",
        "Löse vorsichtig und wechsle die Seite."
      ],
      atmung: "Lang und ruhig ausatmen, dabei die hintere Schulter Richtung Boden sinken lassen. Mehrere tiefe Atemzüge in die Dehnung.",
      fehler: [
        "Oberes Knie hebt ab: dann fehlt die Fixierung, mit der Hand fester halten.",
        "Den Fuß zu stark ziehen: Dehnung in Oberschenkel und Hüfte soll deutlich, aber nicht stechend sein.",
        "Kopf hängt ohne Unterlage: Kopf auf einem Kissen ablegen.",
        "Luft anhalten: gerade hier löst lange Ausatmung viel Spannung."
      ],
      vorteile: [
        "Mobilisiert Brustwirbelsäule und vordere Hüfte in einer Position.",
        "Zeigt Seitenunterschiede in Rotation und Hüftstreckung.",
        "Spart Zeit, weil mehrere typische Engstellen gleichzeitig angesprochen werden.",
        "Gut am Ende einer Einheit oder an Ruhetagen."
      ],
      tipps: [
        "Kommst du nicht an den Fuß, nimm ein Band oder Handtuch als Verlängerung.",
        "Bei sehr steifen Schultern zuerst ein paar Wiederholungen Open Book machen."
      ],
      varianten: "Leichter: ohne Fußgriff nur Open Book mit Knie am Boden. Schwerer: in der Endposition aktiv das untere Knie nach hinten schieben.",
      sicherheit: "Bei Kniebeschwerden den Fuß nicht weit an das Gesäß ziehen. Bei Schulterbeschwerden den Oberkörper nur so weit drehen, wie es angenehm bleibt.",
      golf: "Verbindet die Rotation des Oberkörpers mit der Streckung der Hüfte, die im Durchschwung gebraucht wird. Beide sind bei vielen Golfern eingeschränkt, und beide entscheiden mit darüber, ob der Schwung voll und rückenschonend ausgeführt werden kann."
    }
  },
  {
    id: "bws_extension_rolle",
    name: "Brustwirbelsäule strecken auf der Faszienrolle",
    auch: ["Thoracic Extension on Foam Roller", "Foam Roller T-Spine Extension"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken"],
    sekundaer: ["brust", "bauch"],
    geraete: [["faszienrolle"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    info: {
      kurz: "Rückenlage mit einer quer liegenden Faszienrolle unter der Brustwirbelsäule, über die du dich kontrolliert nach hinten streckst. Wirkt einer runden Haltung entgegen und erleichtert Überkopfbewegungen.",
      ausfuehrung: [
        "Setz dich auf den Boden und leg eine Faszienrolle quer hinter dich. Leg dich so zurück, dass sie unterhalb der Schulterblätter liegt.",
        "Stell die Füße auf, das Gesäß bleibt am Boden. Verschränke die Hände hinter dem Kopf, die Ellbogen zeigen nach vorn.",
        "Spann den Bauch leicht an und lass den oberen Rücken über die Rolle nach hinten sinken.",
        "Halte zwei Sekunden und kehre zur Ausgangsposition zurück.",
        "Verschiebe die Rolle jeweils ein Stück Richtung Kopf und wiederhole an zwei bis drei Stellen.",
        "Insgesamt 8 bis 12 Wiederholungen."
      ],
      atmung: "Ausatmen beim Strecken über die Rolle, einatmen beim Zurückkommen.",
      fehler: [
        "Rolle unter der Lendenwirbelsäule: dort nicht strecken, nur im Bereich der Brustwirbelsäule arbeiten.",
        "Hohlkreuz durch angehobenes Becken: das Gesäß bleibt am Boden, Rippen bleiben unten.",
        "Kopf fällt nach hinten: die Hände stützen den Kopf, der Nacken bleibt lang.",
        "Zu weit nach oben: nicht bis in den Nacken rollen."
      ],
      vorteile: [
        "Verbessert die Streckfähigkeit der Brustwirbelsäule.",
        "Wirkt einem runden oberen Rücken durch Sitzen entgegen.",
        "Erleichtert Überkopfdrücken und Kniebeugen mit aufrechtem Oberkörper.",
        "Leicht dosierbar und schnell gelernt."
      ],
      tipps: [
        "Eine Rolle mit Mittelrinne entlastet die Dornfortsätze.",
        "Mit gestreckten Armen über Kopf wird die Dehnung für Latissimus und Brust stärker."
      ],
      varianten: "Leichter: Arme vor der Brust verschränkt. Schwerer: Arme über Kopf gestreckt oder einen Stab über Kopf halten.",
      sicherheit: "Bei Osteoporose oder akuten Rückenbeschwerden vorher ärztlich abklären. Nicht über die Lendenwirbelsäule strecken."
    }
  },
  {
    id: "bws_ausrollen",
    name: "Oberen Rücken ausrollen",
    auch: ["Foam Rolling Upper Back", "Thoracic Foam Rolling", "Upper Back Roll"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "trapez"],
    sekundaer: ["latissimus"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Ausrollen der Muskulatur zwischen und neben den Schulterblättern auf der Faszienrolle. Eignet sich zum Lockern vor dem Training und zur Entspannung danach.",
      ausfuehrung: [
        "Leg dich mit dem oberen Rücken quer auf die Faszienrolle, die Füße stehen auf, das Gesäß ist angehoben.",
        "Verschränke die Arme vor der Brust und umarme dich selbst. So ziehen die Schulterblätter auseinander.",
        "Rolle langsam zwischen unterem Ende der Schulterblätter und oberem Rücken hin und her, indem du die Beine streckst und beugst.",
        "Bleib an festen Stellen 10 bis 20 Sekunden ruhig liegen.",
        "Lehne dich leicht zu einer Seite, um die Muskeln neben der Wirbelsäule gezielter zu erreichen.",
        "Insgesamt 60 bis 90 Sekunden."
      ],
      atmung: "Ruhig und tief atmen, an festen Punkten mit dem Ausatmen locker lassen.",
      fehler: [
        "Bis in die Lendenwirbelsäule rollen: unterhalb der Rippen aufhören.",
        "Zu schnell rollen: lieber langsam, etwa zwei Zentimeter pro Sekunde.",
        "Kopf hängen lassen: Hände stützen bei Bedarf den Kopf."
      ],
      vorteile: [
        "Kann Spannungsgefühl im oberen Rücken verringern.",
        "Gute Vorbereitung für Streck- und Rotationsübungen der Brustwirbelsäule.",
        "Angenehm nach langem Sitzen oder schweren Zugübungen."
      ],
      tipps: [
        "Direkt danach Streckung auf der Rolle oder Wandengel ausführen, um die neue Beweglichkeit zu nutzen.",
        "Eine weichere Rolle für Einsteiger, eine harte erst, wenn die weiche zu wenig spürbar ist."
      ],
      varianten: "Leichter: Gesäß am Boden lassen und nur leicht rollen. Schwerer: mit einer härteren oder gerillten Rolle arbeiten.",
      sicherheit: "Nicht über akute Verletzungen, Prellungen oder bei Osteoporose rollen. Starke Schmerzen sind kein Ziel."
    }
  },
  {
    id: "bank_gebetsdehnung",
    name: "Gebetsdehnung an der Bank",
    auch: ["Bench Prayer Stretch", "Bench T-Spine Mobilization", "Elbows on Bench Lat Stretch"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["trizeps", "brust"],
    geraete: [["bank", "stab"], ["bank"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf", "schwimmen"],
    golf: 1,
    info: {
      kurz: "Im Knien legst du die Ellbogen auf eine Bank, die Hände über dem Kopf zusammen, und lässt die Brust Richtung Boden sinken. Dehnt Latissimus und Trizeps und streckt die Brustwirbelsäule.",
      ausfuehrung: [
        "Knie dich vor eine Flachbank, etwa eine Unterarmlänge entfernt.",
        "Leg die Ellbogen schulterbreit auf die Bankkante. Halte einen Stab zwischen den Daumen oder lege die Handflächen zusammen.",
        "Beuge die Ellbogen, bis die Hände hinter den Kopf kommen.",
        "Schieb die Hüften zurück Richtung Fersen und lass die Brust zwischen den Armen Richtung Boden sinken.",
        "Halte 30 bis 45 Sekunden und spüre die Dehnung an Achseln, Seiten und Oberarmrückseite.",
        "Komm langsam zurück und schüttle die Arme aus."
      ],
      atmung: "Ruhig weiteratmen, mit jedem Ausatmen die Brust ein Stück tiefer sinken lassen.",
      fehler: [
        "Hohlkreuz im unteren Rücken: Bauch leicht anspannen und die Rippen nach unten ziehen, die Streckung soll oben stattfinden.",
        "Ellbogen weichen nach außen: schulterbreit halten.",
        "Kopf hängt verkrampft: Kopf in Verlängerung der Wirbelsäule zwischen den Armen.",
        "Zu tief erzwingen: es soll ziehen, nicht in der Schulter klemmen."
      ],
      vorteile: [
        "Dehnt den Latissimus wirksam, der Überkopfbewegungen oft begrenzt.",
        "Streckt gleichzeitig die Brustwirbelsäule.",
        "Bringt mehr Bewegungsumfang für Überkopfdrücken, Frontkniebeuge und Klimmzüge.",
        "Einfache Dosierung über die Tiefe der Hüften."
      ],
      tipps: [
        "Je weiter die Hände hinter den Kopf kommen, desto stärker wird der Trizeps gedehnt.",
        "Als PNF-Variante die Ellbogen fünf Sekunden fest in die Bank drücken, dann lösen und tiefer sinken."
      ],
      varianten: "Leichter: Hände nicht hinter den Kopf, Hüften weniger weit zurück. Schwerer: mit einer kleinen Hantelscheibe oder Stab zwischen den Händen die Ellbogen weiter beugen.",
      sicherheit: "Bei Schulterinstabilität oder Schmerzen über Kopf vorsichtig und nur mäßig tief dehnen."
    }
  },
  {
    id: "kindhaltung_seitlich",
    name: "Kindhaltung mit seitlichem Greifen",
    auch: ["Child's Pose Side Reach", "Side Child's Pose", "Lateral Child's Pose"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["latissimus", "schraege_bauch"],
    sekundaer: ["ruecken_unten", "oberer_ruecken"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Kindhaltung, bei der beide Hände zu einer Seite wandern. Dehnt den Latissimus und die Rumpfseite einschließlich des quadratischen Lendenmuskels auf der Gegenseite.",
      ausfuehrung: [
        "Knie dich hin, die Knie etwas geöffnet, und setz das Gesäß auf die Fersen.",
        "Leg den Oberkörper nach vorn und strecke die Arme lang vor dir auf dem Boden aus.",
        "Wandere mit beiden Händen nach rechts, bis du die Dehnung an der linken Körperseite spürst.",
        "Drück die linke Hand leicht in den Boden und schieb die linke Hüfte sanft Richtung Ferse.",
        "Halte 30 bis 45 Sekunden.",
        "Komm zur Mitte zurück und wechsle die Seite."
      ],
      atmung: "Atme bewusst in die gedehnte Seite, als würden sich die Rippen dort auffächern. Mit dem Ausatmen tiefer sinken.",
      fehler: [
        "Gesäß hebt von den Fersen ab: dann geht die Dehnung verloren, tiefer zurücksetzen.",
        "Nur die Arme wandern, der Oberkörper bleibt gerade: der ganze Rumpf soll einen Bogen bilden.",
        "Schultern hochgezogen: Schultern weg von den Ohren."
      ],
      vorteile: [
        "Dehnt Latissimus und seitliche Rumpfmuskeln in einer entspannten Position.",
        "Kann Spannung im unteren Rücken lösen.",
        "Sanfte Übung für das Abwärmen und Ruhetage."
      ],
      tipps: [
        "Ein Kissen zwischen Gesäß und Fersen hilft, wenn die Knie stark gebeugt unangenehm sind.",
        "Atme in die Flanke, das vertieft die Dehnung mehr als Ziehen mit den Armen."
      ],
      varianten: "Leichter: normale Kindhaltung. Schwerer: die äußere Hand auf eine erhöhte Unterlage legen oder die Gebetsdehnung an der Bank nutzen.",
      sicherheit: "Bei Kniebeschwerden polstern oder ein Kissen zwischen Gesäß und Waden legen."
    }
  },
  {
    id: "pilates_saege",
    name: "Pilates-Säge",
    auch: ["Pilates Saw", "The Saw"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["oberer_ruecken", "schraege_bauch", "beinbeuger"],
    sekundaer: ["ruecken_unten", "schulter_hinten"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    sport: ["golf"],
    golf: 1,
    info: {
      kurz: "Klassische Pilates-Übung im Grätschsitz: Du drehst den Oberkörper und führst die Hand in einer sägenden Bewegung zum gegenüberliegenden Fuß. Kombiniert Rotation, Rumpfbeuge und Dehnung der Beinrückseite.",
      ausfuehrung: [
        "Setz dich aufrecht mit gestreckten Beinen in eine Grätsche, etwas weiter als hüftbreit. Die Zehen zeigen zur Decke.",
        "Strecke die Arme seitlich auf Schulterhöhe aus.",
        "Dreh den Oberkörper nach rechts, bis die Arme etwa über dem rechten Bein liegen.",
        "Beuge dich nach vorn und führe den kleinen Finger der linken Hand außen am rechten kleinen Zeh vorbei, als würdest du ihn absägen. Der rechte Arm zieht nach hinten.",
        "Richte dich Wirbel für Wirbel auf, dreh zur Mitte zurück und wiederhole zur anderen Seite.",
        "Mache 4 bis 6 Wiederholungen je Seite."
      ],
      atmung: "Einatmen beim Aufrichten und Drehen, ausatmen beim Sägen nach vorn, mit dem Ausatmen tiefer gehen.",
      fehler: [
        "Becken rutscht mit: beide Sitzbeinhöcker bleiben am Boden.",
        "Rundrücken schon beim Drehen: erst aufrecht drehen, dann vorbeugen.",
        "Knie beugen sich: Beine gestreckt lassen oder auf ein Kissen setzen."
      ],
      vorteile: [
        "Verbindet Rotation und Vorbeuge in einer flüssigen Bewegung.",
        "Dehnt gleichzeitig Beinrückseite und Rückenmuskeln.",
        "Verbessert die Haltungskontrolle im Sitz."
      ],
      tipps: [
        "Der hintere Arm ist genauso wichtig wie der vordere: aktiv nach hinten ziehen.",
        "Ein Kissen unter dem Gesäß erleichtert die aufrechte Ausgangsposition."
      ],
      varianten: "Leichter: Knie leicht gebeugt, kleinerer Bewegungsumfang. Schwerer: am Ende drei kleine Pulsbewegungen nach vorn.",
      sicherheit: "Bei Bandscheibenproblemen keine Kombination aus Beugung und Rotation ohne ärztliche Rücksprache."
    }
  },
  {
    id: "meerjungfrau",
    name: "Meerjungfrau-Seitdehnung",
    auch: ["Pilates Mermaid", "Mermaid Stretch", "Seated Side Stretch"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["latissimus", "schraege_bauch"],
    sekundaer: ["oberer_ruecken", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Pilates-Übung im seitlichen Sitz mit großer Seitneigung über den Kopf. Dehnt Latissimus, Zwischenrippenmuskeln und Rumpfseite und öffnet den Brustkorb.",
      ausfuehrung: [
        "Setz dich auf die rechte Hüfte und leg beide Beine angewinkelt nach links ab, das linke Schienbein vor dem rechten Fuß.",
        "Leg die rechte Hand neben dir auf den Boden und strecke den linken Arm nach oben.",
        "Neige dich nach rechts, der linke Arm zieht in einem langen Bogen über den Kopf. Die rechte Hand gleitet dabei nach außen.",
        "Halte kurz, richte dich auf und neige dich dann in die andere Richtung, die rechte Hand geht über den Kopf, die linke stützt auf dem Schienbein.",
        "Bewege dich fließend 5 bis 6 Mal hin und her.",
        "Dann Beine auf die andere Seite legen und wiederholen."
      ],
      atmung: "Einatmen beim Aufrichten, ausatmen in die Seitneigung. In die gedehnte Seite atmen.",
      fehler: [
        "Oberkörper kippt nach vorn: wie zwischen zwei Glasscheiben seitlich neigen.",
        "Gesäß hebt ab: die Sitzseite bleibt schwer am Boden.",
        "Schulter zieht zum Ohr: Arm lang machen, aber Schulter weg vom Ohr."
      ],
      vorteile: [
        "Dehnt die Rumpfseite und den Latissimus in einer großen Bewegung.",
        "Verbessert die Beweglichkeit des Brustkorbs und damit die Atmung.",
        "Angenehme Übung zum Aufwärmen oder Abwärmen."
      ],
      tipps: [
        "Am Ende der Seitneigung kannst du die Brust leicht Richtung Boden drehen, das verstärkt die Latdehnung.",
        "Ein Kissen unter der Sitzseite entlastet Hüfte und Knie."
      ],
      varianten: "Leichter: im Schneidersitz seitlich neigen. Schwerer: am Ende in eine kleine Rotation zum Boden übergehen.",
      sicherheit: "Bei Knie- oder Hüftbeschwerden im Schneidersitz oder auf einem Stuhl ausführen."
    }
  },
  {
    id: "bws_extension_ball",
    name: "Rückenstreckung über dem Gymnastikball",
    auch: ["Swiss Ball Thoracic Extension", "Stability Ball Back Extension Stretch"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["bauch", "brust"],
    sekundaer: ["oberer_ruecken", "hueftbeuger", "latissimus"],
    geraete: [["gymnastikball"]],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Rücklings über einem Gymnastikball liegend lässt du dich nach hinten sinken. Streckt die Brustwirbelsäule großflächig und dehnt Bauch, Brust und vordere Rumpfseite.",
      ausfuehrung: [
        "Setz dich auf den Gymnastikball und wandere mit den Füßen langsam nach vorn, bis du mit dem Rücken auf dem Ball liegst.",
        "Der Ball liegt unter dem mittleren bis oberen Rücken, der Kopf darf auf dem Ball abgelegt werden.",
        "Stell die Füße etwas weiter als hüftbreit, um sicher zu liegen.",
        "Öffne die Arme seitlich oder strecke sie über den Kopf und lass dich über den Ball sinken.",
        "Halte 30 bis 60 Sekunden, bewege dich eventuell sanft vor und zurück.",
        "Komm zum Aufstehen langsam mit dem Kinn Richtung Brust und den Füßen zurück in den Sitz."
      ],
      atmung: "Tief in den Bauch und die Brust atmen, mit dem Ausatmen tiefer über den Ball sinken.",
      fehler: [
        "Füße zu eng: breiter stellen, damit du nicht seitlich abrollst.",
        "Schnelles Aufrichten: kann schwindelig machen, langsam zurück in den Sitz.",
        "Kopf hängt frei nach hinten: ablegen oder mit den Händen stützen."
      ],
      vorteile: [
        "Großflächige, angenehme Streckung des oberen Rückens.",
        "Dehnt Bauch und Brust nach viel Sitzen oder Bauchtraining.",
        "Gut steuerbar über die Position auf dem Ball."
      ],
      tipps: [
        "Je weiter du nach vorn rollst, desto mehr verlagert sich die Streckung Richtung Brustwirbelsäule.",
        "Mit den Armen über Kopf wird zusätzlich der Latissimus gedehnt."
      ],
      varianten: "Leichter: Arme vor der Brust, kleinerer Ball. Schwerer: Arme über Kopf und Hände Richtung Boden sinken lassen.",
      sicherheit: "Bei Schwindel, Bluthochdruck oder Rückenproblemen vorsichtig und nur kurz in der Streckung bleiben."
    }
  },
  {
    id: "rumpfrotation_stehend",
    name: "Rumpfdrehen im Stand",
    auch: ["Standing Trunk Rotations", "Torso Twists", "Arm Swing Rotations"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "oberer_ruecken"],
    sekundaer: ["ruecken_unten", "schulter_hinten"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis", "fussball"],
    golf: 1,
    info: {
      kurz: "Lockeres, rhythmisches Drehen des Oberkörpers im Stand mit schwingenden Armen. Eine einfache dynamische Aufwärmübung, die den Rumpf auf Drehbewegungen vorbereitet.",
      ausfuehrung: [
        "Stell dich etwas weiter als hüftbreit hin, die Knie sind locker gebeugt.",
        "Lass die Arme locker hängen und beginne, den Oberkörper abwechselnd nach links und rechts zu drehen.",
        "Die Arme schwingen passiv mit und schlagen locker an den Körper.",
        "Lass im Laufe der Wiederholungen die Drehung größer werden, die Ferse des Gegenbeins darf sich leicht drehen.",
        "Der Kopf bleibt ruhig oder folgt der Bewegung locker.",
        "Mache 20 bis 30 Wiederholungen insgesamt."
      ],
      atmung: "Gleichmäßig und locker im Rhythmus der Bewegung atmen.",
      fehler: [
        "Zu viel Kraft und Schwung von Anfang an: klein beginnen und steigern.",
        "Steife Knie: locker lassen, damit der Rücken nicht ruckartig belastet wird.",
        "Hohlkreuz: Bauch leicht anspannen."
      ],
      vorteile: [
        "Wärmt den Rumpf schnell auf.",
        "Lockert verspannte Rückenmuskeln nach langem Sitzen.",
        "Bereitet auf Dreh- und Schlagbewegungen im Sport vor."
      ],
      tipps: [
        "Gut als erste Übung im Aufwärmen auf dem Platz oder in der Halle.",
        "Mit der Zeit kannst du die Füße fixieren und die Drehung nur im Oberkörper ausführen."
      ],
      varianten: "Leichter: kleiner Umfang. Schwerer: mit fixierten Füßen oder mit einem Stab auf den Schultern.",
      sicherheit: "Bei akuten Rückenschmerzen ohne Schwung und nur im schmerzfreien Bereich drehen."
    }
  },
  // ---------- Schulter: Brust und vordere Schulter ----------
  {
    id: "brust_dehnen",
    name: "Brust dehnen am Türrahmen",
    auch: ["Doorway Pec Stretch", "Doorway Chest Stretch", "Brustdehnung 90 Grad"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn", "bizeps"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Klassische Brustdehnung mit dem Unterarm am Türrahmen, Ellbogen auf Schulterhöhe. Dehnt vor allem den mittleren Anteil des großen Brustmuskels und die vordere Schulter.",
      ausfuehrung: [
        "Stell dich seitlich in einen Türrahmen oder neben eine Wandkante.",
        "Leg den Unterarm senkrecht an den Rahmen, der Ellbogen ist etwa auf Schulterhöhe und 90 Grad gebeugt.",
        "Mach einen kleinen Schritt mit dem gleichseitigen Bein nach vorn.",
        "Dreh den Oberkörper langsam vom Arm weg, bis du eine deutliche Dehnung in der Brust spürst.",
        "Halte die Schulter tief und hinten, der Bauch ist leicht angespannt.",
        "Halte 30 bis 45 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Oberkörper noch etwas weiter wegdrehen.",
      fehler: [
        "Schulter rollt nach vorn: Schulterblatt bewusst nach hinten unten ziehen, sonst drückt es vorn im Gelenk.",
        "Hohlkreuz statt Drehung: Rippen unten lassen und den Rumpf drehen.",
        "Zu weit gehen, bis es im Gelenk sticht: die Dehnung gehört in den Muskel, nicht in die Schulter."
      ],
      vorteile: [
        "Dehnt den Brustmuskel, der durch Sitzen und viel Drücktraining oft verkürzt wirkt.",
        "Kann helfen, eine nach vorn gerollte Schulterhaltung zu verbessern.",
        "Überall mit einer Tür oder Wandkante möglich.",
        "Über die Armhöhe lassen sich unterschiedliche Anteile der Brust erreichen."
      ],
      tipps: [
        "Arbeite mit drei Höhen: tief, Schulterhöhe und hoch, um die ganze Brust zu dehnen.",
        "Nach schweren Drücktagen als Teil des Abwärmens besonders angenehm."
      ],
      varianten: "Leichter: weniger weit drehen. Schwerer: als PNF-Dehnung mit kurzem Anspannen gegen den Rahmen oder den Arm höher ansetzen.",
      sicherheit: "Bei Schulterinstabilität oder nach Ausrenkung nur sanft dehnen und vorher ärztlich abklären."
    }
  },
  {
    id: "brust_dehnen_hoch",
    name: "Brust dehnen am Türrahmen, Arm hoch",
    auch: ["High Doorway Pec Stretch", "Pec Minor Doorway Stretch", "Upper Doorway Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust"],
    sekundaer: ["latissimus", "schulter_vorn"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Türrahmendehnung mit dem Arm deutlich über Schulterhöhe. Erreicht die unteren Fasern des großen Brustmuskels und den kleinen Brustmuskel, der die Schulter nach vorn ziehen kann.",
      ausfuehrung: [
        "Stell dich seitlich in einen Türrahmen.",
        "Leg Unterarm und Hand so an den Rahmen, dass der Ellbogen etwa 30 bis 45 Grad über Schulterhöhe liegt.",
        "Mach einen kleinen Schritt nach vorn und lehne den Oberkörper nach vorn unten weg vom Arm.",
        "Spüre die Dehnung im unteren Brustbereich und Richtung Achsel.",
        "Halte die Schulter tief, nicht zum Ohr ziehen.",
        "Halte 30 bis 45 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig atmen, mit dem Ausatmen etwas tiefer nach vorn lehnen.",
      fehler: [
        "Schulter zieht hoch zum Ohr: aktiv nach unten ziehen.",
        "Kopf schiebt nach vorn: Kinn leicht zurück, Nacken lang.",
        "Zu hohe Armposition bei empfindlicher Schulter: lieber etwas tiefer starten."
      ],
      vorteile: [
        "Spricht den kleinen Brustmuskel an, der Schulterblätter nach vorn kippen kann.",
        "Erweitert die Dehnung der Brust um die unteren Fasern.",
        "Kann Überkopfpositionen angenehmer machen."
      ],
      tipps: [
        "Lehne dich eher nach vorn unten als nur zur Seite, so kommt die Dehnung unter das Schlüsselbein.",
        "Kombiniere sie mit Wandengeln, um die neue Beweglichkeit aktiv zu nutzen."
      ],
      varianten: "Leichter: Ellbogen nur knapp über Schulterhöhe. Schwerer: beide Arme gleichzeitig im Türrahmen und durch die Tür lehnen.",
      sicherheit: "Bei Kribbeln in Arm oder Hand sofort lösen und die Armhöhe verringern."
    }
  },
  {
    id: "brust_dehnen_tief",
    name: "Brust dehnen am Türrahmen, Arm tief",
    auch: ["Low Doorway Pec Stretch", "Clavicular Pec Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["bizeps"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Türrahmendehnung mit der Hand etwa auf Hüft- bis Brusthöhe und fast gestrecktem Arm. Dehnt den oberen Anteil der Brust am Schlüsselbein und die vordere Schulter.",
      ausfuehrung: [
        "Stell dich seitlich neben einen Türrahmen oder eine Wandkante.",
        "Leg die Handfläche etwa auf Höhe zwischen Hüfte und Brust an den Rahmen, der Arm ist fast gestreckt und zeigt schräg nach hinten unten.",
        "Dreh den Oberkörper langsam vom Arm weg.",
        "Halte das Schulterblatt hinten unten, die Brust bleibt offen.",
        "Spüre die Dehnung im oberen Brustbereich und vorn an der Schulter.",
        "Halte 30 bis 45 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen weiterdrehen.",
      fehler: [
        "Schulterkopf rutscht nach vorn: Schulterblatt nach hinten ziehen und weniger weit drehen.",
        "Ellbogen ganz durchgestreckt und verriegelt: leicht gebeugt lassen.",
        "Oberkörper kippt zur Seite: aufrecht bleiben und drehen."
      ],
      vorteile: [
        "Erreicht den oberen Brustanteil, der beim Schrägbankdrücken stark arbeitet.",
        "Dehnt die vordere Schulter, die bei viel Drücken oft fest wird.",
        "Ergänzt die Türrahmendehnungen in anderen Armhöhen."
      ],
      tipps: [
        "Daumen nach oben drehen verstärkt die Dehnung von Bizeps und vorderer Schulter.",
        "Am besten nacheinander tief, mittel und hoch dehnen."
      ],
      varianten: "Leichter: Arm stärker gebeugt. Schwerer: Hand etwas tiefer ansetzen und weiter drehen.",
      sicherheit: "Bei Schmerzen vorn in der Schulter nur leicht dehnen und abklären lassen."
    }
  },
  {
    id: "brust_dehnen_pnf",
    name: "Brustdehnung PNF am Türrahmen",
    auch: ["PNF Pec Stretch", "Contract-Relax Doorway Stretch", "Anspannen-Entspannen Brustdehnung"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Türrahmendehnung nach der Anspannen-Entspannen-Methode: Du drückst kurz gegen den Rahmen, lässt los und gehst dann tiefer in die Dehnung. Diese Methode bringt oft schneller mehr Bewegungsumfang als reines Halten.",
      ausfuehrung: [
        "Richte dich wie bei der normalen Türrahmendehnung ein: Unterarm am Rahmen, Ellbogen auf Schulterhöhe, kleiner Schritt nach vorn.",
        "Geh in eine angenehme Dehnung und halte sie etwa 15 Sekunden.",
        "Drück jetzt den Unterarm mit etwa 30 bis 50 Prozent Kraft für 5 bis 6 Sekunden gegen den Rahmen, ohne dich zu bewegen.",
        "Lass die Spannung los und atme aus.",
        "Dreh den Oberkörper direkt danach ein Stück weiter in die neue Dehnung und halte 15 bis 20 Sekunden.",
        "Wiederhole den Zyklus aus Anspannen und Nachdehnen 3 bis 4 Mal, dann Seite wechseln."
      ],
      atmung: "Während des Anspannens normal weiteratmen, nicht pressen. Mit dem Ausatmen nach dem Lösen tiefer gehen.",
      fehler: [
        "Mit voller Kraft drücken: mittlere Kraft reicht völlig und ist gelenkschonender.",
        "Luft anhalten beim Anspannen: gleichmäßig weiteratmen.",
        "Zu viele Zyklen: nach drei bis vier ist der Effekt meist ausgeschöpft."
      ],
      vorteile: [
        "Kann in kurzer Zeit mehr Bewegungsumfang bringen als statisches Dehnen.",
        "Schult Spannung und Entspannung desselben Muskels.",
        "Gut geeignet, wenn die Brust sehr fest ist."
      ],
      tipps: [
        "Am besten nach dem Training oder am Ende des Aufwärmens, wenn der Körper warm ist.",
        "Zähl beim Anspannen langsam bis sechs, dann bewusst komplett loslassen."
      ],
      varianten: "Leichter: normale statische Türrahmendehnung. Schwerer: in hoher Armposition ausführen.",
      sicherheit: "Bei Schulterinstabilität nur mit geringer Kraft anspannen. Bei Bluthochdruck nicht pressen."
    }
  },
  {
    id: "brust_dehnen_boden",
    name: "Brustdehnung in Bauchlage",
    auch: ["Prone Pec Stretch", "Floor Pec Stretch", "Lying Chest Opener"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["bizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Brustdehnung auf dem Boden in Bauchlage: Ein Arm liegt seitlich ausgestreckt, du rollst den Körper davon weg. Gut, wenn kein Türrahmen zur Hand ist, und gut dosierbar.",
      ausfuehrung: [
        "Leg dich auf den Bauch und strecke den rechten Arm seitlich auf Schulterhöhe aus, die Handfläche liegt am Boden.",
        "Stütz die linke Hand neben der Brust auf.",
        "Drück dich mit der linken Hand langsam hoch und roll den Körper nach rechts auf die Seite, weg vom gestreckten Arm.",
        "Stell bei Bedarf das linke Bein hinter dir auf, um die Drehung zu vertiefen und dich abzustützen.",
        "Halte die Position, wenn die Dehnung in Brust und vorderer Schulter deutlich spürbar ist.",
        "Halte 30 bis 45 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas weiter aufdrehen.",
      fehler: [
        "Zu schnell zu weit drehen: langsam herantasten, die Dehnung ist oft stärker als erwartet.",
        "Schulter zieht zum Ohr: Arm lang machen.",
        "Kopf verdreht: Kopf auf die Seite legen, die bequem ist."
      ],
      vorteile: [
        "Intensive Brustdehnung ohne Hilfsmittel.",
        "Die Schwerkraft hilft beim Entspannen.",
        "Armhöhe leicht veränderbar: höher für untere Brust, tiefer für obere Brust."
      ],
      tipps: [
        "Den Arm in einem 90-Grad-Winkel zu beugen (Unterarm nach oben) erreicht die Brust anders als der gestreckte Arm.",
        "Gut am Ende einer Einheit auf der Matte."
      ],
      varianten: "Leichter: weniger weit drehen, Arm gebeugt. Schwerer: Arm höher über Schulterhöhe legen und weiter aufdrehen.",
      sicherheit: "Bei Schulterinstabilität vorsichtig, bei Kribbeln im Arm sofort lösen."
    }
  },
  {
    id: "brustoeffner_rolle",
    name: "Brustöffner längs auf der Faszienrolle",
    auch: ["Supine Foam Roller Chest Opener", "Foam Roller Snow Angels", "Lying Pec Stretch on Roller"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Du liegst längs auf der Faszienrolle, die Wirbelsäule ruht darauf, und lässt die Arme seitlich nach unten sinken. Sanfte, passive Öffnung der Brust und Entspannung des oberen Rückens.",
      ausfuehrung: [
        "Leg die Faszienrolle längs auf den Boden und leg dich so darauf, dass Kopf und Gesäß auf ihr liegen.",
        "Stell die Füße hüftbreit auf, um stabil zu liegen.",
        "Öffne die Arme seitlich, Handflächen nach oben, Ellbogen leicht gebeugt, etwa in U- oder W-Form.",
        "Lass die Arme durch die Schwerkraft Richtung Boden sinken, ohne zu drücken.",
        "Optional bewegst du die Arme langsam wie beim Schnee-Engel am Boden nach oben und unten.",
        "Bleib 60 bis 120 Sekunden liegen."
      ],
      atmung: "Tief in den Bauch und die Brust atmen. Mit jedem Ausatmen die Arme schwerer werden lassen.",
      fehler: [
        "Hohlkreuz: Bauch leicht anspannen, unteren Rücken sanft Richtung Rolle drücken.",
        "Arme gestreckt und zu hoch: wenn es in der Schulter zieht, Ellbogen beugen und tiefer legen.",
        "Unsicheres Liegen: Füße breiter stellen."
      ],
      vorteile: [
        "Sehr sanfte, entspannende Brustdehnung.",
        "Gut nach langem Sitzen oder am Abend.",
        "Fördert eine ruhige Atmung und kann entspannend wirken."
      ],
      tipps: [
        "Eine halbe Rolle (flache Seite unten) ist stabiler für Einsteiger.",
        "Mit Schnee-Engel-Bewegungen wird aus der Ruheposition eine aktive Mobilisation."
      ],
      varianten: "Leichter: Arme tiefer neben dem Körper. Schwerer: Arme über Kopf strecken oder Schnee-Engel ausführen.",
      sicherheit: "Bei Schwindel oder Kribbeln in den Armen Position ändern oder aufhören."
    }
  },
  {
    id: "haende_verschraenkt_ruecken",
    name: "Brustöffner mit verschränkten Händen hinter dem Rücken",
    auch: ["Clasped Hands Chest Opener", "Behind the Back Chest Stretch", "Standing Pec Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["bizeps"],
    geraete: [["stab"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Im Stand verschränkst du die Hände hinter dem Rücken und hebst die gestreckten Arme an. Dehnt Brust, vordere Schulter und Bizeps gleichzeitig, überall ohne Gerät möglich.",
      ausfuehrung: [
        "Stell dich aufrecht hin, Füße hüftbreit, Knie locker.",
        "Verschränke die Finger hinter dem Rücken oder halte einen Stab mit beiden Händen hinter dem Gesäß.",
        "Zieh die Schulterblätter zusammen und öffne die Brust.",
        "Heb die gestreckten Arme langsam nach hinten oben, so weit es ohne Vorbeugen geht.",
        "Halte 20 bis 40 Sekunden.",
        "Lass die Arme langsam sinken und löse den Griff."
      ],
      atmung: "Ruhig weiteratmen, mit dem Einatmen die Brust heben, mit dem Ausatmen die Arme ein Stück weiter anheben.",
      fehler: [
        "Oberkörper kippt nach vorn: aufrecht bleiben, sonst wird aus der Dehnung eine Vorbeuge.",
        "Hohlkreuz: Bauch leicht anspannen.",
        "Schultern rollen nach vorn: zuerst Schulterblätter zusammen, dann Arme heben."
      ],
      vorteile: [
        "Dehnt Brust und vordere Schulter überall und ohne Gerät.",
        "Gute Pause bei langer Schreibtischarbeit.",
        "Zusätzliche Dehnung des Bizeps durch die gestreckten Arme."
      ],
      tipps: [
        "Mit einem Stab oder Handtuch kannst du die Griffbreite wählen. Breiter ist leichter.",
        "Die Vorbeuge mit hängenden Armen ist eine eigene, deutlich intensivere Variante für Fortgeschrittene."
      ],
      varianten: "Leichter: breiter Griff mit Handtuch oder Stab. Schwerer: aus der Hüfte vorbeugen und die Arme Richtung Kopf sinken lassen.",
      sicherheit: "Bei Schulterbeschwerden vorn im Gelenk nur sanft und mit breitem Griff."
    }
  },
  {
    id: "brust_dehnen_schlingentrainer",
    name: "Brustdehnung im Schlingentrainer",
    auch: ["TRX Chest Stretch", "Suspension Trainer Pec Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["bizeps", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Mit dem Rücken zum Ankerpunkt hältst du die Griffe des Schlingentrainers und lehnst dich nach vorn, während die Arme seitlich nach hinten öffnen. Beidseitige, gut dosierbare Brustdehnung.",
      ausfuehrung: [
        "Stell dich mit dem Rücken zum Ankerpunkt und halte je einen Griff in jeder Hand.",
        "Öffne die Arme seitlich auf Schulterhöhe, die Ellbogen leicht gebeugt, und spann den Rumpf wie bei einem Unterarmstütz an.",
        "Mach einen Schritt nach vorn in eine leichte Schrittstellung.",
        "Lehn dich langsam nach vorn, bis die Arme nach hinten gezogen werden und die Brust sich öffnet.",
        "Halte 20 bis 40 Sekunden, der Körper bleibt eine gerade Linie.",
        "Geh mit kleinen Schritten zurück in den aufrechten Stand."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas weiter nach vorn lehnen.",
      fehler: [
        "Bauch hängt durch: Rumpf fest machen.",
        "Zu steil angefangen: erst mit wenig Vorlage beginnen, die Dehnung ist intensiv.",
        "Ellbogen ganz gestreckt und verriegelt: leicht gebeugt lassen."
      ],
      vorteile: [
        "Dehnt beide Brustseiten gleichzeitig und symmetrisch.",
        "Intensität sehr fein über den Körperwinkel steuerbar.",
        "Trainiert nebenbei Rumpfspannung."
      ],
      tipps: [
        "Arme etwas höher führen, um mehr die untere Brust zu erreichen.",
        "Gut im Anschluss an Drückübungen im gleichen Gerät."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: weiter vorlehnen oder die Arme in Y-Form höher führen.",
      sicherheit: "Bei Schulterinstabilität nur mit wenig Vorlage arbeiten."
    }
  },
  // ---------- Schulter: Latissimus ----------
  {
    id: "lat_dehnen_wand",
    name: "Latissimus dehnen an der Wand",
    auch: ["Lat Stretch at Wall", "Rack Lat Stretch", "Hip Hinge Lat Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "oberer_ruecken", "beinbeuger"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf", "schwimmen"],
    golf: 1,
    info: {
      kurz: "Du hältst dich mit beiden Händen an einer Wand, Säule oder einem Rack fest und schiebst die Hüften nach hinten, bis der Oberkörper waagerecht ist. Dehnt den Latissimus und die Seiten des Rumpfes.",
      ausfuehrung: [
        "Stell dich etwa eine Armlänge vor eine Wand, einen Rahmen oder die Pfosten eines Racks.",
        "Leg die Hände schulterbreit auf Hüft- bis Brusthöhe an oder greif den Pfosten.",
        "Geh mit den Füßen zurück und schieb die Hüften nach hinten, bis Oberkörper und Arme etwa eine Linie bilden.",
        "Lass die Brust Richtung Boden sinken, der Kopf bleibt zwischen den Armen.",
        "Schieb das Gesäß leicht zu einer Seite, um eine Körperseite stärker zu dehnen.",
        "Halte 30 bis 45 Sekunden."
      ],
      atmung: "Tief in die Flanken atmen, mit dem Ausatmen die Hüften weiter nach hinten schieben.",
      fehler: [
        "Rundrücken: aus der Hüfte beugen und den Rücken lang lassen.",
        "Knie durchgedrückt und Zug nur in der Beinrückseite: Knie leicht beugen.",
        "Hohlkreuz im unteren Rücken: Rippen leicht nach unten ziehen, die Dehnung soll in die Achseln."
      ],
      vorteile: [
        "Dehnt den Latissimus, der Überkopfbewegungen häufig begrenzt.",
        "Einfach überall im Studio machbar, etwa am Rack.",
        "Verbessert die Position bei Überkopfdrücken und Frontkniebeuge."
      ],
      tipps: [
        "Mit einer Hand am Pfosten und Hüfte zur anderen Seite wird daraus eine einseitige, intensivere Dehnung.",
        "Daumen nach oben drehen verstärkt die Dehnung."
      ],
      varianten: "Leichter: Hände höher ansetzen, weniger tief. Schwerer: einarmig greifen und das Becken zur Gegenseite schieben.",
      sicherheit: "Bei Schulterbeschwerden über Kopf nur bis zu einer angenehmen Dehnung gehen."
    }
  },
  {
    id: "lat_dehnen_bank_kniend",
    name: "Latissimus dehnen einarmig an der Bank",
    auch: ["Kneeling Single-Arm Lat Stretch on Bench", "Bench Lat Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "schraege_bauch"],
    geraete: [["bank"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Im Kniestand neben einer Bank legst du einen Arm mit der Kleinfingerseite auf die Bank und sinkst mit der Brust nach unten. Einseitige, gezielte Dehnung des Latissimus.",
      ausfuehrung: [
        "Knie dich seitlich neben eine Flachbank, der Körper zeigt zur Bank.",
        "Leg den rechten Unterarm mit der Kleinfingerseite auf die Bank, der Daumen zeigt nach oben, der Arm ist gestreckt.",
        "Setz das Gesäß Richtung Fersen zurück und lass die Brust unter der Bankhöhe Richtung Boden sinken.",
        "Dreh die Brust leicht nach links unten, weg vom gestreckten Arm.",
        "Halte 30 bis 45 Sekunden und spüre die Dehnung von der Achsel bis zur Hüfte.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "In die gedehnte Flanke atmen, mit jedem Ausatmen etwas tiefer sinken.",
      fehler: [
        "Schulter zieht zum Ohr: Arm lang, Schulter weg vom Ohr.",
        "Hohlkreuz: Becken leicht einrollen, Bauch fest.",
        "Hand flach mit Handfläche nach unten: Daumen nach oben dreht den Arm nach außen und dehnt den Latissimus besser."
      ],
      vorteile: [
        "Gezielte einseitige Dehnung, Seitenunterschiede werden spürbar.",
        "Die Rotation der Brust verstärkt die Dehnung ohne Kraftaufwand.",
        "Gut nach Klimmzügen und Latzug."
      ],
      tipps: [
        "Kombiniere sie mit der beidseitigen Gebetsdehnung an der Bank.",
        "Als PNF-Variante den Arm fünf Sekunden in die Bank drücken, lösen und tiefer sinken."
      ],
      varianten: "Leichter: weniger tief sinken. Schwerer: Rotation verstärken oder Arm weiter vorn ablegen.",
      sicherheit: "Bei Schulterbeschwerden über Kopf vorsichtig und schmerzfrei dehnen."
    }
  },
  {
    id: "lat_dehnen_band",
    name: "Latissimus-Dehnung mit Band",
    auch: ["Banded Lat Stretch", "Banded Lat Distraction", "Band Overhead Distraction"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "schraege_bauch", "rotatorenmanschette"],
    geraete: [["band"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Ein hoch befestigtes Band zieht den Arm über Kopf in die Länge, während du dich mit den Hüften wegbewegst. Bekannt aus der Mobilitätsarbeit von Kelly Starrett, dehnt sie den Latissimus mit zusätzlichem Zug am Schultergelenk.",
      ausfuehrung: [
        "Befestige ein Widerstandsband hoch, etwa an einer Klimmzugstange oder am oberen Ende eines Racks.",
        "Leg die Hand von innen in die Bandschlaufe, so dass das Band über den Handrücken läuft und das Handgelenk umschließt.",
        "Geh mit den Füßen zurück, bis Spannung im Band ist, und beuge dich aus der Hüfte vor.",
        "Schieb die Hüften nach hinten und zur Gegenseite, so dass eine lange Linie von Hand bis Hüfte entsteht.",
        "Lass das Band den Arm sanft aus der Schulter ziehen und bewege dich in kleinen Winkeln, um enge Stellen zu finden.",
        "Halte insgesamt 45 bis 60 Sekunden, dann Seite wechseln."
      ],
      atmung: "Tief in die gedehnte Flanke atmen, mit dem Ausatmen die Hüfte weiter wegschieben.",
      fehler: [
        "Schulter zieht hoch zum Ohr: das Band darf ziehen, du hältst die Schulter trotzdem lang.",
        "Rundrücken: aus der Hüfte beugen.",
        "Zu starkes Band: Zug soll angenehm sein, nicht reißen."
      ],
      vorteile: [
        "Kombiniert Dehnung des Latissimus mit leichtem Zug im Schultergelenk, was viele als sehr angenehm empfinden.",
        "Sehr wirksam vor Überkopfdrücken, Reißen und Klimmzügen.",
        "Durch kleine Positionswechsel lassen sich verschiedene Bereiche erreichen."
      ],
      tipps: [
        "Halte zusätzlich eine Hand am Pfosten, um mehr Stabilität zu haben.",
        "Ein Band mittlerer Stärke reicht meist."
      ],
      varianten: "Leichter: Latissimus dehnen an der Wand ohne Band. Schwerer: im Halbkniestand mit Rotation des Oberkörpers.",
      sicherheit: "Bei Schulterinstabilität keine Zugdehnung, sondern statische Dehnung an der Wand nutzen."
    }
  },
  {
    id: "lat_dehnen_ball",
    name: "Latissimus dehnen kniend am Gymnastikball",
    auch: ["Swiss Ball Lat Stretch", "Kneeling Ball Lat Stretch", "Stability Ball Prayer Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["oberer_ruecken", "brust"],
    geraete: [["gymnastikball"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Im Kniestand legst du die Hände oder Unterarme auf einen Gymnastikball und rollst ihn nach vorn, bis die Brust Richtung Boden sinkt. Sanfte, beidseitige Dehnung von Latissimus und oberem Rücken.",
      ausfuehrung: [
        "Knie dich vor einen Gymnastikball, die Knie hüftbreit.",
        "Leg die Hände oder die Kleinfingerseiten der Unterarme auf den Ball.",
        "Roll den Ball nach vorn, bis die Arme gestreckt sind, und schieb die Hüften Richtung Fersen.",
        "Lass die Brust zwischen den Armen Richtung Boden sinken.",
        "Roll den Ball etwas nach links oder rechts, um eine Seite stärker zu dehnen.",
        "Halte 30 bis 60 Sekunden."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Brust sinken lassen.",
      fehler: [
        "Hohlkreuz: Bauch leicht anspannen, Becken leicht einrollen.",
        "Kopf hängt oder überstreckt: zwischen den Armen in Verlängerung halten.",
        "Ball rollt weg: langsam und kontrolliert arbeiten."
      ],
      vorteile: [
        "Sanft und angenehm, auch für Einsteiger gut geeignet.",
        "Der Ball erlaubt spielerische Positionswechsel.",
        "Entlastet die Knie, wenn eine Matte untergelegt wird."
      ],
      tipps: [
        "Kleinfingerseiten auf dem Ball mit Daumen nach oben dehnen den Latissimus stärker als flache Hände.",
        "Gut zum Abwärmen nach Rückentraining."
      ],
      varianten: "Leichter: Ball näher am Körper. Schwerer: Ball weiter weg und zur Seite rollen.",
      sicherheit: "Bei Schulterbeschwerden über Kopf vorsichtig."
    }
  },
  {
    id: "lat_dehnen_pnf",
    name: "Latissimus-Dehnung PNF an der Stange",
    auch: ["PNF Lat Stretch", "Contract-Relax Lat Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "schraege_bauch"],
    geraete: [["wand"], ["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmige Latissimusdehnung an einem Pfosten oder einer Stange mit Anspannen-Entspannen-Zyklen. Durch kurzes Ziehen gegen den Widerstand lässt der Muskel danach oft weiter nach.",
      ausfuehrung: [
        "Greif mit der rechten Hand einen Pfosten, Türrahmen oder eine niedrige Stange etwa auf Brusthöhe.",
        "Geh zurück und schieb die Hüften nach hinten und nach links, bis du die Dehnung an der rechten Körperseite spürst.",
        "Halte die Dehnung etwa 15 Sekunden.",
        "Zieh dann mit dem Arm 5 bis 6 Sekunden mit mittlerer Kraft nach unten gegen den Griff, als wolltest du ihn zu dir ziehen, ohne dich zu bewegen.",
        "Lass los, atme aus und schieb die Hüfte weiter weg in die neue Dehnung. Halte 15 bis 20 Sekunden.",
        "Wiederhole 3 bis 4 Zyklen, dann Seite wechseln."
      ],
      atmung: "Beim Anspannen normal weiteratmen, nach dem Lösen mit dem Ausatmen tiefer gehen.",
      fehler: [
        "Zu viel Kraft beim Anspannen: 30 bis 50 Prozent genügen.",
        "Rundrücken: aus der Hüfte beugen und lang bleiben.",
        "Nach dem Lösen ruckartig nachdehnen: langsam weitergehen."
      ],
      vorteile: [
        "Oft schneller mehr Bewegungsumfang als reines Halten.",
        "Gezielt einseitig, ideal für die steifere Seite.",
        "Gut vor Überkopfübungen."
      ],
      tipps: [
        "Daumen nach oben greifen verstärkt die Dehnung.",
        "Nach den PNF-Zyklen zwei bis drei Wandengel ausführen, um den Bewegungsumfang aktiv zu nutzen."
      ],
      varianten: "Leichter: Latissimus dehnen an der Wand statisch. Schwerer: Griff höher und Hüfte weiter zur Seite.",
      sicherheit: "Bei Schulterinstabilität nur mit leichter Spannung arbeiten."
    }
  },
  {
    id: "lat_dehnen_schlingentrainer",
    name: "Latissimus-Dehnung im Schlingentrainer",
    auch: ["TRX Lat Stretch", "Suspension Trainer Lat Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["oberer_ruecken", "trizeps", "beinbeuger"],
    geraete: [["schlingentrainer"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Du hältst die Griffe des Schlingentrainers vor dir, schiebst die Hüften nach hinten und lässt dich zurück hängen. Dehnt den Latissimus beidseitig, einzelne Seiten kannst du durch Versetzen der Hüfte betonen.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zum Ankerpunkt und halte beide Griffe vor dir.",
        "Geh ein paar kleine Schritte zurück, bis die Bänder gespannt sind.",
        "Schieb die Hüften nach hinten und beuge die Knie leicht, die Arme sind über Kopf gestreckt.",
        "Lass die Brust zwischen den Armen Richtung Boden sinken, bis Arme und Oberkörper eine Linie bilden.",
        "Verlagere die Hüfte nach links oder rechts, um die Gegenseite stärker zu dehnen.",
        "Halte 30 bis 45 Sekunden."
      ],
      atmung: "Tief in die Flanken atmen, mit dem Ausatmen tiefer sinken.",
      fehler: [
        "Rundrücken: Hüften zurück und Brust nach unten statt Rücken krümmen.",
        "Schultern zu den Ohren: Arme lang, Schultern locker.",
        "Knie durchgedrückt: leicht beugen, damit die Dehnung nicht in die Beine wandert."
      ],
      vorteile: [
        "Großflächige Dehnung von Latissimus und Rumpfseiten.",
        "Leicht zu dosieren über die Hüftposition.",
        "Gut zwischen Sätzen am Schlingentrainer."
      ],
      tipps: [
        "Einarmig ausgeführt wird die Dehnung deutlich intensiver.",
        "Daumen nach oben drehen."
      ],
      varianten: "Leichter: weniger weit zurück. Schwerer: einarmig mit Rotation des Oberkörpers.",
      sicherheit: "Bei Schulterbeschwerden über Kopf vorsichtig."
    }
  },
  // ---------- Schulter: Faszienrolle ----------
  {
    id: "lat_ausrollen",
    name: "Latissimus ausrollen",
    auch: ["Foam Roll Lats", "Lat Foam Rolling"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus"],
    sekundaer: ["schulter_hinten", "trizeps"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "In Seitenlage rollst du den Bereich unterhalb der Achsel bis zur Mitte des Rückens auf der Faszienrolle aus. Lockert den Latissimus vor Überkopfübungen oder nach Zugtraining.",
      ausfuehrung: [
        "Leg dich auf die Seite, die Faszienrolle liegt quer unter dem Bereich knapp unterhalb der Achsel.",
        "Strecke den unteren Arm über den Kopf, Daumen nach oben.",
        "Stütz dich mit dem oberen Arm vor dem Körper und den Beinen ab.",
        "Rolle langsam einige Zentimeter Richtung Taille und zurück.",
        "Dreh den Oberkörper leicht nach vorn und hinten, um verschiedene Bereiche zu erreichen. Bleib an festen Stellen kurz liegen.",
        "Insgesamt 45 bis 60 Sekunden je Seite."
      ],
      atmung: "Ruhig atmen, an festen Punkten mit dem Ausatmen locker lassen.",
      fehler: [
        "Zu weit nach unten über die Rippen bis zur Hüfte: im Bereich zwischen Achsel und Mitte des Rumpfs bleiben.",
        "Zu schnell rollen: langsam, sonst kann der Muskel nicht loslassen.",
        "Volles Gewicht auf der Rolle bei hoher Empfindlichkeit: mit Armen und Beinen mehr abstützen."
      ],
      vorteile: [
        "Kann das Spannungsgefühl im Latissimus verringern.",
        "Gute Vorbereitung für Überkopfbewegungen.",
        "Lässt sich gut mit Latissimusdehnungen kombinieren."
      ],
      tipps: [
        "Direkt danach eine Latissimusdehnung oder Wandengel ausführen.",
        "Kleine Armbewegungen über Kopf während des Rollens verstärken die Wirkung."
      ],
      varianten: "Leichter: mehr Gewicht auf dem oberen Arm. Schwerer: härtere Rolle oder kleine Armbewegungen während des Haltens.",
      sicherheit: "Nicht über akute Verletzungen rollen. Bei Kribbeln im Arm Position ändern."
    }
  },
  {
    id: "brust_ausrollen",
    name: "Brustmuskel ausrollen",
    auch: ["Foam Roll Pecs", "Pec Foam Rolling"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "In Bauchlage rollst du den äußeren Brustmuskel nahe der Schulter auf einer schräg liegenden Faszienrolle aus. Lockert die Brust nach Drücktraining.",
      ausfuehrung: [
        "Leg dich auf den Bauch und leg die Faszienrolle schräg unter die rechte Brustseite, knapp neben die Achsel.",
        "Strecke den rechten Arm seitlich oder leicht nach oben aus.",
        "Stütz dich mit dem linken Unterarm und den Beinen ab und dosiere so den Druck.",
        "Rolle in kleinen Bewegungen zwischen Achsel und Brustbein hin und her.",
        "Bleib an festen Stellen 10 bis 20 Sekunden und bewege den Arm langsam nach oben und unten.",
        "Insgesamt 45 bis 60 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen mehr Gewicht auf die Rolle geben.",
      fehler: [
        "Zu viel Druck direkt auf den Rippen: die Rolle gehört auf den Muskel nahe der Schulter.",
        "Hektisches Rollen: langsam und gezielt arbeiten.",
        "Schulter rollt nach vorn: Arm lang ausstrecken."
      ],
      vorteile: [
        "Lockert die Brust, die durch Drücken und Sitzen oft fest wird.",
        "Gute Vorbereitung für Brustdehnungen.",
        "Lässt sich gezielt auf eine Seite anwenden."
      ],
      tipps: [
        "Ein Massageball an der Wand erreicht den Brustmuskel noch gezielter.",
        "Direkt danach die Türrahmendehnung ausführen."
      ],
      varianten: "Leichter: mehr Gewicht über den Unterarm abstützen. Schwerer: Armbewegungen während des Haltens.",
      sicherheit: "Nicht bei Verletzungen der Brust oder Rippen. Kein starker Druck auf Brustgewebe."
    }
  },
  {
    id: "trizeps_ausrollen",
    name: "Trizeps ausrollen",
    auch: ["Foam Roll Triceps", "Triceps Foam Rolling"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["trizeps"],
    sekundaer: ["latissimus"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "In Seitenlage rollst du die Rückseite des Oberarms auf der Faszienrolle aus. Lockert den Trizeps nach Drück- und Armtraining und bereitet auf Überkopfdehnungen vor.",
      ausfuehrung: [
        "Leg dich auf die Seite und strecke den unteren Arm über den Kopf.",
        "Leg die Faszienrolle quer unter die Rückseite des Oberarms knapp oberhalb des Ellbogens.",
        "Stütz dich mit der oberen Hand und den Beinen ab.",
        "Rolle langsam vom Ellbogen bis kurz vor die Achsel und zurück.",
        "Dreh den Arm leicht nach innen und außen, um verschiedene Anteile zu erreichen.",
        "Insgesamt 45 bis 60 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig atmen, an festen Stellen mit dem Ausatmen lockerlassen.",
      fehler: [
        "Direkt auf dem Ellbogenknochen rollen: kurz darüber beginnen.",
        "Zu schnell rollen: langsam bleiben.",
        "Zu viel Druck: mit Bein und Arm mehr abstützen."
      ],
      vorteile: [
        "Kann das Spannungsgefühl im Trizeps lindern.",
        "Gute Vorbereitung für Trizeps- und Latissimusdehnungen.",
        "Angenehm nach schweren Trizepseinheiten."
      ],
      tipps: [
        "Den Ellbogen beugen und strecken, während du an einer festen Stelle liegst.",
        "Danach die Trizepsdehnung über Kopf ausführen."
      ],
      varianten: "Leichter: weniger Gewicht auf die Rolle. Schwerer: Ellbogen während des Haltens beugen und strecken.",
      sicherheit: "Bei Ellbogenbeschwerden nicht direkt am Gelenk rollen."
    }
  },
  // ---------- Schulter: Kapsel und Rotation ----------
  {
    id: "schulterpassen",
    name: "Schulterpassen mit Band oder Stab",
    auch: ["Band Dislocates", "Shoulder Dislocates", "Shoulder Pass-Through", "Stick Pass-Through"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["latissimus", "rotatorenmanschette", "bizeps"],
    geraete: [["band"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["schwimmen", "golf"],
    golf: 1,
    info: {
      kurz: "Mit weitem Griff führst du ein Band oder einen Stab mit gestreckten Armen vor dem Körper über den Kopf nach hinten und zurück. Mobilisiert die Schulter durch den ganzen Bewegungsumfang und ist eine bewährte Aufwärmübung.",
      ausfuehrung: [
        "Stell dich aufrecht hin und greif ein leichtes Band oder einen Stab deutlich weiter als schulterbreit.",
        "Halte die Arme gestreckt vor den Oberschenkeln, der Bauch ist leicht angespannt.",
        "Führe die Arme langsam in einem großen Bogen nach vorn, über den Kopf und hinter den Körper.",
        "Bleib dabei aufrecht, die Rippen bleiben unten.",
        "Führe im gleichen Bogen zurück nach vorn.",
        "Mache 10 bis 15 langsame Wiederholungen."
      ],
      atmung: "Einatmen beim Heben nach oben, ausatmen beim Weg nach hinten und zurück.",
      fehler: [
        "Zu enger Griff: so weit greifen, dass die Bewegung ohne Ellbogenbeugen gelingt.",
        "Hohlkreuz, um nach hinten zu kommen: Bauch anspannen, Griff breiter wählen.",
        "Ein Arm geht früher nach hinten: beide Arme gleichzeitig führen.",
        "Ruckartiges Durchziehen: langsam und kontrolliert."
      ],
      vorteile: [
        "Bewegt die Schulter durch Beugung, Abspreizung und Streckung.",
        "Dehnt Brust und vordere Schulter dynamisch.",
        "Sehr gute Aufwärmübung vor Drücken, Überkopfübungen und Schwimmen.",
        "Mit dem Band etwas nachgiebiger und angenehmer als mit dem Stab."
      ],
      tipps: [
        "Den Griff von Woche zu Woche ein kleines Stück enger machen, solange es sauber bleibt.",
        "Mit dem Band etwas Zug nach außen erzeugen, das aktiviert die hintere Schulter."
      ],
      varianten: "Leichter: breiterer Griff oder nur bis über den Kopf. Schwerer: engerer Griff oder mit Stab statt Band.",
      sicherheit: "Bei Schulterinstabilität oder Schmerzen hinter dem Kopf nur bis über Kopf bewegen und abklären lassen."
    }
  },
  {
    id: "sleeper_stretch",
    name: "Sleeper Stretch",
    auch: ["Sleeper Stretch", "Schläferdehnung", "Innenrotationsdehnung in Seitenlage"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["rotatorenmanschette", "schulter_hinten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "handball"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Dehnung in Seitenlage, bei der du den Unterarm des unteren Arms Richtung Boden drückst. Dehnt die hintere Schulter und die Außenrotatoren und verbessert die Innenrotation.",
      ausfuehrung: [
        "Leg dich auf die rechte Seite, den Kopf auf einem Kissen.",
        "Strecke den rechten Oberarm auf Schulterhöhe vor dir aus und beuge den Ellbogen 90 Grad, die Finger zeigen zur Decke.",
        "Roll den Oberkörper etwa 20 bis 30 Grad nach hinten, so liegt das Schulterblatt fester und die Schulter ist weniger eingeklemmt.",
        "Leg die linke Hand auf das rechte Handgelenk und drück den Unterarm langsam Richtung Boden.",
        "Stoppe bei einer deutlichen Dehnung hinten in der Schulter. Halte 30 Sekunden.",
        "Löse langsam und wiederhole zwei bis drei Mal, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Unterarm minimal weiter sinken lassen.",
      fehler: [
        "Schmerz vorn in der Schulter: weiter nach hinten rollen und sanfter drücken.",
        "Ellbogen über Schulterhöhe: etwas tiefer legen.",
        "Kräftig drücken: diese Dehnung braucht wenig Druck.",
        "Kopf ohne Kissen: Nacken mit Kissen entlasten."
      ],
      vorteile: [
        "Verbessert die Innenrotation der Schulter, die bei Wurf- und Schlagsportarten oft eingeschränkt ist.",
        "Dehnt die hintere Kapsel und die Außenrotatoren.",
        "Gut steuerbar und alleine durchführbar."
      ],
      tipps: [
        "Die Version mit nach hinten gerolltem Oberkörper ist für die meisten angenehmer als die klassische streng seitliche Lage.",
        "Vergleiche beide Seiten. Ein deutlicher Unterschied ist ein Hinweis, die steifere Seite häufiger zu dehnen."
      ],
      varianten: "Leichter: Innenrotation in Rückenlage oder Querdehnung. Schwerer: länger halten oder Anspannen-Entspannen einbauen.",
      sicherheit: "Bei Impingement-Beschwerden oder Schmerzen vorn in der Schulter nur sehr sanft oder die Variante in Rückenlage nutzen."
    }
  },
  {
    id: "innenrotation_rueckenlage",
    name: "Innenrotationsdehnung in Rückenlage",
    auch: ["Supine Internal Rotation Stretch", "Supine Sleeper Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["rotatorenmanschette", "schulter_hinten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Schonendere Alternative zum Sleeper Stretch: In Rückenlage liegt der Oberarm auf Schulterhöhe am Boden, der Unterarm sinkt nach vorn Richtung Boden. Dehnt hintere Schulter und Außenrotatoren.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Knie aufgestellt.",
        "Leg den rechten Oberarm seitlich auf Schulterhöhe ab, der Ellbogen ist 90 Grad gebeugt und die Finger zeigen zur Decke.",
        "Leg ein gefaltetes Handtuch unter den Ellbogen, damit der Oberarm auf Höhe des Rumpfs liegt.",
        "Lass den Unterarm nach vorn Richtung Boden sinken, die Handfläche zeigt nach unten.",
        "Achte darauf, dass die Schulter nicht nach vorn abhebt. Die linke Hand kann vorn auf der Schulter liegen und sie leicht fixieren.",
        "Halte 30 Sekunden, zwei bis drei Mal je Seite."
      ],
      atmung: "Ruhig weiteratmen und den Arm mit jedem Ausatmen etwas schwerer werden lassen.",
      fehler: [
        "Schulter hebt nach vorn ab: mit der freien Hand sanft fixieren.",
        "Mit der freien Hand Druck auf den Unterarm: hier wirkt nur die Schwerkraft.",
        "Oberarm nicht unterlagert: Handtuch unter den Ellbogen legen."
      ],
      vorteile: [
        "Verbessert die Innenrotation mit wenig Kompression vorn in der Schulter.",
        "Für Einsteiger und empfindliche Schultern gut geeignet.",
        "Gut am Ende einer Wurf- oder Schlagsporteinheit."
      ],
      tipps: [
        "Die Fixierung der Schulter ist der entscheidende Punkt. Ohne sie dreht nur das Schulterblatt mit.",
        "Wer es intensiver möchte, wechselt zum Sleeper Stretch."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang. Schwerer: leichter Druck mit der freien Hand oder Sleeper Stretch.",
      sicherheit: "Bei Schmerzen vorn in der Schulter sofort lösen."
    }
  },
  {
    id: "querdehnung",
    name: "Hintere Schulter dehnen quer vor der Brust",
    auch: ["Cross-Body Stretch", "Cross-Body Shoulder Stretch", "Posterior Capsule Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_hinten", "rotatorenmanschette"],
    sekundaer: ["oberer_ruecken", "trizeps"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Klassische Dehnung, bei der du einen Arm quer vor der Brust zur Gegenseite ziehst. Dehnt hintere Schulter und Muskeln zwischen den Schulterblättern.",
      ausfuehrung: [
        "Stell oder setz dich aufrecht hin.",
        "Führe den rechten Arm gestreckt oder leicht gebeugt auf Schulterhöhe quer vor die Brust.",
        "Leg die linke Hand oberhalb des rechten Ellbogens an, nicht auf das Gelenk.",
        "Zieh den Arm sanft Richtung linke Schulter, die rechte Schulter bleibt tief.",
        "Halte 30 Sekunden, ohne den Oberkörper mitzudrehen.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Arm etwas näher heranziehen.",
      fehler: [
        "Oberkörper dreht mit: Brust bleibt nach vorn ausgerichtet.",
        "Schulter zieht hoch zum Ohr: aktiv nach unten ziehen.",
        "Druck direkt auf das Ellbogengelenk: oberhalb davon greifen."
      ],
      vorteile: [
        "Einfach, überall und ohne Gerät machbar.",
        "Dehnt die hintere Schulter, die bei Schlag- und Wurfsportarten fest werden kann.",
        "Gut in Pausen und nach dem Training."
      ],
      tipps: [
        "Für eine stärkere Dehnung der hinteren Kapsel an die Wand lehnen, so ist das Schulterblatt fixiert.",
        "Arm etwas unter Schulterhöhe bringen, wenn es vorn in der Schulter klemmt."
      ],
      varianten: "Leichter: Arm gebeugt und weniger weit ziehen. Schwerer: Querdehnung an der Wand mit fixiertem Schulterblatt.",
      sicherheit: "Bei Schmerz oder Klemmen vorn in der Schulter Arm tiefer führen oder auslassen."
    }
  },
  {
    id: "querdehnung_wand",
    name: "Querdehnung mit fixiertem Schulterblatt an der Wand",
    auch: ["Cross-Body Stretch at Wall", "Scapula-Stabilized Cross-Body Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_hinten", "rotatorenmanschette"],
    sekundaer: ["trizeps"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf", "tennis", "handball"],
    einseitig: true,
    info: {
      kurz: "Variante der Querdehnung, bei der das Schulterblatt seitlich gegen eine Wand gelehnt wird. So kann es nicht mitwandern, und die Dehnung erreicht die hintere Schulterkapsel gezielter.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, so dass die Außenkante des rechten Schulterblatts an der Wand anliegt.",
        "Führe den rechten Arm auf Schulterhöhe quer vor die Brust.",
        "Lehn dich leicht gegen die Wand, damit das Schulterblatt fixiert bleibt.",
        "Zieh mit der linken Hand oberhalb des Ellbogens den Arm sanft zur Gegenseite.",
        "Halte 30 Sekunden mit spürbarer Dehnung hinten in der Schulter.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas weiter ziehen.",
      fehler: [
        "Schulterblatt löst sich von der Wand: weniger ziehen und mehr gegen die Wand lehnen.",
        "Schulter zieht zum Ohr: lang machen.",
        "Klemmen vorn in der Schulter: Arm etwas tiefer führen."
      ],
      vorteile: [
        "Gezieltere Dehnung der hinteren Kapsel als die freie Querdehnung.",
        "In Studien zur Innenrotation bei Wurfsportlern häufig verwendet.",
        "Einfach und überall mit einer Wand machbar."
      ],
      tipps: [
        "Kombiniere sie mit dem Sleeper Stretch, wenn die Innenrotation eingeschränkt ist.",
        "Den Daumen leicht nach unten drehen kann die Dehnung verändern."
      ],
      varianten: "Leichter: freie Querdehnung. Schwerer: in Seitenlage am Boden mit dem Gewicht auf dem Schulterblatt.",
      sicherheit: "Bei Schmerzen vorn in der Schulter nur sanft und unter Schulterhöhe."
    }
  },
  {
    id: "handtuch_innenrotation",
    name: "Innenrotation mit Handtuch hinter dem Rücken",
    auch: ["Towel Internal Rotation Stretch", "Behind-the-Back Towel Stretch", "Towel Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["rotatorenmanschette", "schulter_vorn"],
    sekundaer: ["trizeps", "schulter_hinten"],
    geraete: [["band"], []],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Ein Handtuch oder Band läuft hinter dem Rücken von einer Hand über der Schulter zur anderen Hand am unteren Rücken. Die obere Hand zieht den unteren Arm nach oben und verbessert so die Innenrotation.",
      ausfuehrung: [
        "Stell dich aufrecht hin und nimm ein Handtuch, einen Gürtel oder ein Band.",
        "Halte ein Ende mit der linken Hand über der linken Schulter, so dass das Tuch den Rücken hinunterhängt.",
        "Greif das untere Ende mit der rechten Hand hinter dem Rücken, der Handrücken liegt am unteren Rücken.",
        "Zieh mit der oberen Hand das Tuch langsam nach oben, so wandert die rechte Hand am Rücken hoch.",
        "Halte 20 bis 30 Sekunden bei einer deutlichen, aber angenehmen Dehnung.",
        "Seite wechseln. Danach die Hände tauschen, um auch die obere Schulter zu dehnen."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen ein Stück weiterziehen.",
      fehler: [
        "Ruckartiges Ziehen: langsam und gleichmäßig.",
        "Schulter rollt nach vorn: Brust offen halten.",
        "Rumpf neigt zur Seite: aufrecht bleiben."
      ],
      vorteile: [
        "Verbessert die Innenrotation, die etwa beim Griff an den Rücken gebraucht wird.",
        "Dehnt zugleich die obere Schulter in Außenrotation und den Trizeps.",
        "Einfach mit Haushaltsmitteln umsetzbar."
      ],
      tipps: [
        "Wechsle die Hände, um beide Schultern in beiden Positionen zu dehnen.",
        "Zum Messen des Fortschritts merkst du dir, bis zu welcher Stelle am Rücken die untere Hand kommt."
      ],
      varianten: "Leichter: kürzerer Weg, Hand bleibt tiefer. Schwerer: ohne Tuch die Finger hinter dem Rücken fassen (Kuhgesicht-Arme).",
      sicherheit: "Bei Schmerzen vorn in der Schulter oder nach Schulteroperationen nur nach Rücksprache."
    }
  },
  {
    id: "kuhgesicht_arme",
    name: "Kuhgesicht-Arme",
    auch: ["Cow Face Arms", "Gomukhasana Arms", "Apley Scratch Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["trizeps", "rotatorenmanschette", "latissimus"],
    sekundaer: ["schulter_vorn", "brust"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Yoga-Armhaltung, bei der eine Hand von oben und eine von unten hinter dem Rücken greifen. Dehnt oben Trizeps und Latissimus und unten die vordere Schulter in Innenrotation.",
      ausfuehrung: [
        "Setz oder stell dich aufrecht hin.",
        "Heb den rechten Arm, beuge den Ellbogen und lass die Hand zwischen die Schulterblätter sinken.",
        "Führe den linken Arm hinter den Rücken, beuge den Ellbogen und schieb den Handrücken den Rücken hinauf.",
        "Versuche, die Finger beider Hände zu fassen. Klappt das nicht, nimm ein Tuch dazwischen.",
        "Richte dich auf, der obere Ellbogen zeigt zur Decke, der Kopf drückt leicht gegen den oberen Arm.",
        "Halte 30 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Hände etwas näher zusammenbringen.",
      fehler: [
        "Oberer Ellbogen kippt nach vorn: Kopf leicht gegen den Arm drücken und Ellbogen zur Decke.",
        "Hohlkreuz oder Seitneigung: Bauch fest, aufrecht bleiben.",
        "Gewaltsames Zusammenziehen der Hände: lieber ein Tuch verwenden."
      ],
      vorteile: [
        "Dehnt beide Schultern in gegensätzlichen Richtungen gleichzeitig.",
        "Zeigt deutlich Seitenunterschiede in der Schulterbeweglichkeit.",
        "Entspricht einem gängigen Beweglichkeitstest der Schulter."
      ],
      tipps: [
        "Ein Tuch macht die Übung für fast jeden machbar.",
        "Vergleiche die Distanz zwischen den Händen beider Seiten über die Wochen."
      ],
      varianten: "Leichter: mit Tuch oder Band. Schwerer: Finger fassen und Ellbogen weiter nach oben und unten ziehen.",
      sicherheit: "Bei Schulterschmerzen nur mit Tuch und sanft. Nicht ruckartig."
    }
  },
  {
    id: "aussenrotation_stab",
    name: "Außenrotationsdehnung mit Stab",
    auch: ["Stick External Rotation Stretch", "Dowel ER Stretch 90/90", "Wand-Außenrotation"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "rotatorenmanschette"],
    sekundaer: ["schulter_vorn"],
    geraete: [["stab", "matte"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf", "tennis", "handball"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "In Rückenlage liegt der Oberarm auf Schulterhöhe, der Ellbogen ist 90 Grad gebeugt, und ein Stab schiebt den Unterarm Richtung Boden hinter den Kopf. Verbessert die Außenrotation der Schulter.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Knie aufgestellt.",
        "Leg den rechten Oberarm seitlich auf Schulterhöhe ab und beuge den Ellbogen 90 Grad, die Hand zeigt zur Decke.",
        "Greif einen Stab mit der rechten Hand am Ende, die linke Hand hält ihn weiter oben vor dem Körper.",
        "Schieb mit der linken Hand den Stab so, dass der rechte Unterarm nach hinten Richtung Boden neben dem Kopf rotiert.",
        "Der Ellbogen bleibt auf Schulterhöhe und am Boden. Halte 20 bis 30 Sekunden bei deutlicher Dehnung vorn an der Schulter.",
        "Wiederhole zwei bis drei Mal, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Unterarm etwas weiter sinken lassen.",
      fehler: [
        "Ellbogen rutscht nach oben oder hebt ab: auf Schulterhöhe am Boden halten.",
        "Hohlkreuz: Rippen unten lassen, Knie aufgestellt.",
        "Zu kräftiger Druck: die Schulter vorn ist empfindlich, sanft arbeiten."
      ],
      vorteile: [
        "Verbessert die Außenrotation, die für Würfe, Schläge und Überkopfpositionen wichtig ist.",
        "Liegend sehr gut kontrollierbar.",
        "Der Stab erlaubt eine fein dosierte Dehnung."
      ],
      tipps: [
        "Ein Handtuch unter dem Ellbogen bringt den Oberarm auf eine Linie mit dem Rumpf.",
        "Teste den Ellbogen auch etwas tiefer, etwa 45 Grad vom Körper, wenn 90 Grad unangenehm ist."
      ],
      varianten: "Leichter: Ellbogen tiefer am Körper. Schwerer: Außenrotation am Türrahmen im Stand.",
      sicherheit: "Bei Instabilität der Schulter oder früheren Ausrenkungen keine Außenrotationsdehnung ohne ärztliche oder physiotherapeutische Freigabe.",
      golf: "Der rechte Arm (beim Rechtshänder) muss oben im Rückschwung deutlich nach außen drehen. Fehlt diese Außenrotation, wird der Schläger oft zu flach oder über eine verkürzte Armbewegung geführt."
    }
  },
  {
    id: "aussenrotation_tuer",
    name: "Außenrotationsdehnung am Türrahmen",
    auch: ["Doorway External Rotation Stretch", "90/90 Doorway ER Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "rotatorenmanschette"],
    sekundaer: ["schulter_vorn", "latissimus"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "handball"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Im Stand liegt der Unterarm in 90-90-Stellung an einem Türrahmen, und du drehst den Körper vom Arm weg und nach vorn. Dehnt die Schulter in Außenrotation in einer Position, die dem Schwung oder Wurf ähnelt.",
      ausfuehrung: [
        "Stell dich vor einen Türrahmen. Heb den rechten Arm seitlich auf Schulterhöhe und beuge den Ellbogen 90 Grad, die Finger zeigen nach oben.",
        "Leg den Unterarm von innen an den Rahmen, der Ellbogen liegt etwa auf Schulterhöhe an.",
        "Lehne dich mit dem Oberkörper langsam nach vorn durch die Tür, so dass der Unterarm relativ zum Körper weiter nach hinten rotiert.",
        "Halte die Schulter tief und hinten, das Schulterblatt zieht leicht zur Wirbelsäule.",
        "Halte 20 bis 30 Sekunden bei deutlicher Dehnung vorn an der Schulter und an der Brust.",
        "Löse langsam und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen minimal weiter nach vorn lehnen.",
      fehler: [
        "Schulterkopf schiebt nach vorn: weniger weit lehnen, Schulterblatt nach hinten ziehen.",
        "Ellbogen rutscht unter Schulterhöhe: korrekt auf Höhe halten.",
        "Hohlkreuz: Bauch fest."
      ],
      vorteile: [
        "Außenrotation in aufrechter Haltung, nahe an sportlichen Positionen.",
        "Dehnt gleichzeitig Brust und vordere Schulter.",
        "Ohne Gerät mit jeder Tür machbar."
      ],
      tipps: [
        "Lieber kurz und mehrmals dehnen als einmal sehr intensiv.",
        "Danach aktive Außenrotation mit leichtem Band, damit die Schulter in der neuen Position auch Kraft hat."
      ],
      varianten: "Leichter: Außenrotationsdehnung mit Stab in Rückenlage. Schwerer: Ellbogen etwas höher ansetzen.",
      sicherheit: "Bei Instabilität oder früheren Ausrenkungen nicht ohne fachliche Freigabe. Bei stechenden Schmerzen sofort lösen.",
      golf: "Oben im Rückschwung steht der rechte Arm (beim Rechtshänder) in einer ähnlichen 90-90-Stellung mit Außenrotation. Mehr Beweglichkeit hier kann helfen, den Schläger in einer guten Position zu setzen, ohne dass der Ellbogen ausweicht."
    }
  },
  // ---------- Schulter: aktive Beweglichkeit ----------
  {
    id: "schulter_cars",
    name: "Schulterkreisen kontrolliert (CARs)",
    auch: ["Shoulder CARs", "Controlled Articular Rotations Shoulder", "Schulter-CARs"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["rotatorenmanschette", "schulter_vorn", "schulter_seitlich", "schulter_hinten"],
    sekundaer: ["latissimus", "brust"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf", "tennis", "schwimmen"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Langsames, aktives Kreisen des Arms durch den größtmöglichen Bewegungsumfang bei fest gespanntem Körper. Stammt aus dem Functional-Range-Conditioning-Ansatz und hält die Schulter in allen Richtungen beweglich und kontrolliert.",
      ausfuehrung: [
        "Stell dich aufrecht hin, mach mit der freien Hand eine Faust und spann Bauch und Gesäß fest an, damit nur die Schulter arbeitet.",
        "Heb den gestreckten Arm langsam nach vorn oben, der Daumen zeigt dabei nach oben.",
        "Wenn der Arm senkrecht über dem Kopf ist, dreh die Handfläche nach außen und führe den Arm weiter nach hinten.",
        "Führe den Arm hinter dem Körper so weit wie möglich nach unten, die Handfläche dreht dabei nach hinten oben.",
        "Komm an der Seite zurück zum Ausgangspunkt. Eine Runde dauert etwa 10 bis 20 Sekunden.",
        "Mache 3 bis 5 Kreise vorwärts und rückwärts, dann Seite wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht pressen, obwohl der Körper angespannt ist.",
      fehler: [
        "Rumpf bewegt mit: Bauch und Gesäß fest anspannen, sonst kompensiert die Wirbelsäule.",
        "Zu schnell: langsam bewegen, der Arm soll jede Stelle des Kreises bewusst erreichen.",
        "Ellbogen beugt sich: Arm gestreckt halten.",
        "Schulter schmerzt an einer Stelle: dort den Kreis enger führen."
      ],
      vorteile: [
        "Trainiert die aktive Kontrolle der Schulter im ganzen Bewegungsumfang.",
        "Zeigt Bereiche, in denen die Schulter eingeschränkt ist.",
        "Eignet sich täglich als kurzer Gelenkcheck.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Stell dir vor, du malst mit den Fingerspitzen den größtmöglichen Kreis an eine Wand hinter dir.",
        "Morgens als Teil einer kurzen Gelenkroutine mit Nacken-, Handgelenk- und Hüftkreisen."
      ],
      varianten: "Leichter: kleinerer Kreis, Ellbogen leicht gebeugt. Schwerer: langsamer und mit noch mehr Körperspannung, oder im Vierfüßlerstand.",
      sicherheit: "Bei Schulterinstabilität nur im schmerzfreien Bereich kreisen."
    }
  },
  {
    id: "armkreisen",
    name: "Armkreisen",
    auch: ["Arm Circles", "Armkreisen vorwärts und rückwärts"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_vorn", "schulter_seitlich", "schulter_hinten"],
    sekundaer: ["rotatorenmanschette", "trapez"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Einfache dynamische Aufwärmübung: Du kreist beide Arme zuerst klein und dann immer größer, vorwärts und rückwärts. Bringt Wärme und Durchblutung in die Schultern.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Arme hängen locker seitlich.",
        "Heb die gestreckten Arme seitlich auf Schulterhöhe an.",
        "Beginne mit kleinen Kreisen nach vorn und mache sie nach und nach größer.",
        "Nach etwa 10 Kreisen wechsle die Richtung und kreise rückwärts, wieder von klein nach groß.",
        "Zum Schluss große Kreise mit dem ganzen Arm am Körper vorbei und über den Kopf.",
        "Insgesamt 20 bis 30 Kreise je Richtung."
      ],
      atmung: "Locker und gleichmäßig weiteratmen.",
      fehler: [
        "Schultern hochgezogen: locker lassen.",
        "Hohlkreuz bei großen Kreisen: Bauch leicht anspannen.",
        "Zu schnell mit großen Kreisen beginnen: klein anfangen."
      ],
      vorteile: [
        "Wärmt die Schultern schnell und ohne Gerät auf.",
        "Für jeden geeignet.",
        "Gut als erste Übung vor Oberkörpertraining oder Sport."
      ],
      tipps: [
        "Kombiniere sie mit Schulterpassen und Armschwingen für ein kompaktes Schulteraufwärmen.",
        "Rückwärtskreise betonen die hintere Schulter und die Haltung."
      ],
      varianten: "Leichter: nur kleine Kreise. Schwerer: abwechselnd ein Arm vorwärts, ein Arm rückwärts.",
      sicherheit: "Bei Schulterschmerzen große Kreise über Kopf meiden."
    }
  },
  {
    id: "armschwingen",
    name: "Armschwingen horizontal",
    auch: ["Arm Swings", "Cross-Body Arm Swings", "Chest Openers dynamic"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_hinten"],
    sekundaer: ["oberer_ruecken", "schulter_vorn"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Dynamisches Öffnen und Kreuzen der Arme vor der Brust im Wechsel. Dehnt Brust und hintere Schulter abwechselnd und bereitet auf Drück- und Zugübungen vor.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie locker, und heb die Arme seitlich auf Schulterhöhe.",
        "Schwing die Arme schwungvoll, aber kontrolliert vor der Brust zusammen, so dass sie sich kreuzen.",
        "Öffne sie dann weit nach hinten, die Brust geht nach vorn auf.",
        "Wechsle beim Kreuzen jedes Mal, welcher Arm oben ist.",
        "Steigere langsam den Bewegungsumfang.",
        "Mache 15 bis 20 Schwünge."
      ],
      atmung: "Einatmen beim Öffnen, ausatmen beim Kreuzen.",
      fehler: [
        "Hohlkreuz beim Öffnen: Rippen unten lassen.",
        "Zu viel Schwung zu früh: mit kleinem Umfang starten.",
        "Schultern zu den Ohren: locker und tief halten."
      ],
      vorteile: [
        "Wärmt Brust, hintere Schulter und oberen Rücken auf.",
        "Dynamische Dehnung, ideal vor dem Training.",
        "Einfach und überall machbar."
      ],
      tipps: [
        "Variiere die Höhe: mal etwas unter, mal etwas über Schulterhöhe.",
        "Gut im Wechsel mit Armkreisen."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: diagonal schwingen, ein Arm oben, einer unten.",
      sicherheit: "Bei Schulterinstabilität ohne Schwung in der Endposition arbeiten."
    }
  },
  {
    id: "schulterblattkreisen",
    name: "Schulterblattkreisen",
    auch: ["Scapular Circles", "Shoulder Rolls", "Schulterkreisen"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["trapez", "oberer_ruecken"],
    sekundaer: ["nacken", "brust"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Langsames Kreisen der Schultern: hoch, nach hinten, nach unten und nach vorn. Lockert Nacken und Schultergürtel und eignet sich als Pause bei Bildschirmarbeit.",
      ausfuehrung: [
        "Steh oder sitz aufrecht, die Arme hängen locker.",
        "Zieh beide Schultern langsam zu den Ohren hoch.",
        "Führe sie dann nach hinten, so dass die Schulterblätter zusammenkommen.",
        "Senk sie nach unten, weit weg von den Ohren.",
        "Schieb sie nach vorn und schließe den Kreis. Bewege dich langsam und groß.",
        "Mache 10 Kreise rückwärts und 10 vorwärts."
      ],
      atmung: "Einatmen beim Hochziehen, ausatmen beim Senken.",
      fehler: [
        "Zu schnell und klein: groß und langsam kreisen.",
        "Kopf schiebt nach vorn: Kinn leicht zurück.",
        "Arme spannen mit an: Arme hängen locker."
      ],
      vorteile: [
        "Lockert Nacken- und Schultermuskeln.",
        "Bewegt das Schulterblatt in alle Richtungen.",
        "Unauffällig im Büro durchführbar."
      ],
      tipps: [
        "Betone den Weg nach hinten unten, das unterstützt eine aufrechte Haltung.",
        "Mehrmals am Tag für 30 Sekunden ist wirkungsvoller als einmal lange."
      ],
      varianten: "Leichter: nur nach hinten kreisen. Schwerer: einseitig im Wechsel oder mit gestreckten Armen.",
      sicherheit: "Bei Schmerzen im Nacken nur den schmerzfreien Teil des Kreises nutzen."
    }
  },
  {
    id: "wandengel",
    name: "Wandengel",
    auch: ["Wall Angels", "Wall Snow Angels"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "latissimus"],
    sekundaer: ["oberer_ruecken", "trapez", "rotatorenmanschette"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Mit Rücken, Hinterkopf und Armen an der Wand schiebst du die Arme von einer W- in eine Y-Position nach oben. Verbindet Brustwirbelsäulenstreckung, Schulterbeweglichkeit und Kontrolle der Schulterblätter.",
      ausfuehrung: [
        "Stell dich mit dem Rücken an eine Wand, die Füße etwa eine Fußlänge vor der Wand, Knie leicht gebeugt.",
        "Drück Gesäß, oberen Rücken und Hinterkopf an die Wand, der untere Rücken nähert sich der Wand, die Rippen bleiben unten.",
        "Leg die Arme in W-Form an: Ellbogen und Handrücken berühren die Wand, die Ellbogen sind etwas unter Schulterhöhe.",
        "Schieb die Arme langsam nach oben in eine Y-Position, so weit es geht, ohne dass Hände, Ellbogen oder Rücken die Wand verlassen.",
        "Zieh die Arme mit aktivem Ziehen der Schulterblätter nach unten zurück in die W-Position.",
        "Mache 8 bis 12 langsame Wiederholungen."
      ],
      atmung: "Ausatmen beim Hochschieben, einatmen beim Zurückziehen.",
      fehler: [
        "Hohlkreuz, damit die Hände an der Wand bleiben: Rippen unten lassen, lieber kleineren Umfang wählen.",
        "Kopf löst sich von der Wand oder schiebt nach vorn: Kinn leicht einziehen.",
        "Schultern ziehen zu den Ohren: beim Hochschieben Schultern lang halten.",
        "Zu schnell: der Wert liegt in der langsamen Kontrolle."
      ],
      vorteile: [
        "Verbessert Überkopfbeweglichkeit und Streckung der Brustwirbelsäule.",
        "Schult die Kontrolle der Schulterblätter.",
        "Zeigt deutlich, wo die Schulterbeweglichkeit endet.",
        "Gute Vorbereitung für Überkopfdrücken und Klimmzüge."
      ],
      tipps: [
        "Viele erreichen anfangs nicht alle Kontaktpunkte. Arbeite im erreichbaren Bereich und steigere langsam.",
        "Vorher die Brust dehnen und den oberen Rücken ausrollen macht die Übung leichter."
      ],
      varianten: "Leichter: Bodenengel in Rückenlage oder Wall Slide mit Unterarmen an der Wand. Schwerer: Füße näher an der Wand, oben zwei Sekunden halten.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur bis zur schmerzfreien Höhe."
    }
  },
  {
    id: "bodenengel",
    name: "Bodenengel in Rückenlage",
    auch: ["Floor Angels", "Floor Slides", "Supine Snow Angels"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "latissimus"],
    sekundaer: ["oberer_ruecken", "rotatorenmanschette"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Liegende Version des Wandengels: In Rückenlage gleiten die Arme von der W- in die Y-Position über den Boden. Leichter als an der Wand, weil die Schwerkraft beim Halten des Kontakts hilft.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Knie aufgestellt, die Füße flach am Boden.",
        "Drück den unteren Rücken sanft Richtung Boden, die Rippen sinken nach unten.",
        "Leg die Arme in W-Form ab: Ellbogen gebeugt, Handrücken am Boden.",
        "Lass die Arme langsam über den Boden nach oben in eine Y-Position gleiten.",
        "Zieh sie mit aktivem Ziehen der Schulterblätter zurück in die W-Position.",
        "Mache 10 bis 15 ruhige Wiederholungen."
      ],
      atmung: "Ausatmen beim Hochgleiten, einatmen beim Zurückziehen.",
      fehler: [
        "Hohlkreuz: unteren Rücken in Bodenkontakt halten.",
        "Hände heben vom Boden ab: nur so weit, wie der Kontakt bleibt.",
        "Schultern zu den Ohren: lang lassen."
      ],
      vorteile: [
        "Einsteigerfreundlicher Weg zu mehr Überkopfbeweglichkeit.",
        "Schult die Kontrolle der Schulterblätter ohne Wand.",
        "Kann am Morgen im Bett oder auf der Matte gemacht werden."
      ],
      tipps: [
        "Eine Faszienrolle längs unter der Wirbelsäule macht daraus den Brustöffner mit Schnee-Engeln.",
        "Wenn das sauber gelingt, an die Wand wechseln."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: Wandengel im Stand.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur bis zur schmerzfreien Höhe."
    }
  },
  {
    id: "wandgleiten_mobil",
    name: "Wandgleiten mit Unterarmen",
    auch: ["Forearm Wall Slide", "Wall Slide Mobility", "Unterarm-Wandgleiten"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_vorn", "trapez"],
    sekundaer: ["rotatorenmanschette", "latissimus", "brust"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "wall_slide_abheben",
    info: {
      kurz: "Mit dem Gesicht zur Wand schiebst du die Unterarme an der Wand nach oben in eine Y-Position. Fördert die Aufwärtsrotation des Schulterblatts und Überkopfbeweglichkeit, ohne die Schulter stark zu belasten.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand, etwa eine Unterarmlänge entfernt.",
        "Leg die Unterarme schulterbreit an die Wand, die Ellbogen sind etwas unter Schulterhöhe, die Kleinfingerseite berührt die Wand.",
        "Spann den Bauch leicht an und drück die Unterarme sanft in die Wand, die Schulterblätter gleiten leicht nach vorn.",
        "Schieb die Unterarme langsam nach oben und leicht nach außen in eine Y-Position.",
        "Achte darauf, dass die Schultern nicht zu den Ohren ziehen und der Rücken nicht ins Hohlkreuz fällt.",
        "Gleite kontrolliert zurück. 10 bis 15 Wiederholungen."
      ],
      atmung: "Ausatmen beim Hochschieben, einatmen beim Zurückgleiten.",
      fehler: [
        "Hohlkreuz: Rippen nach unten, Becken leicht aufrichten.",
        "Schultern ziehen hoch: bewusst lang machen.",
        "Kein Druck in die Wand: leichter Druck hält die Schulterblätter aktiv.",
        "Zu schnell: langsam gleiten."
      ],
      vorteile: [
        "Fördert die Aufwärtsrotation der Schulterblätter, die für Überkopfbewegungen nötig ist.",
        "Gelenkschonend und für Einsteiger geeignet.",
        "Gute Aufwärmübung vor Überkopfdrücken.",
        "Häufig Teil von Schulterprogrammen in der Physiotherapie."
      ],
      tipps: [
        "Ein Handtuch oder eine Faszienrolle unter den Unterarmen lässt sie leichter gleiten.",
        "Ein Mini-Band um die Handgelenke aktiviert zusätzlich die Außenrotatoren."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: oben die Arme kurz von der Wand abheben, mit Faszienrolle oder mit Mini-Band.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur bis zur schmerzfreien Höhe gleiten."
    }
  },
  {
    id: "wall_slide_abheben",
    name: "Wall Slide mit Abheben",
    auch: ["Wall Slide with Lift-Off", "Wall Slide Lift Off"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["trapez", "schulter_vorn"],
    sekundaer: ["rotatorenmanschette", "oberer_ruecken", "latissimus"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Erweiterung des Wall Slide: Oben hebst du die Unterarme für ein bis zwei Sekunden von der Wand ab. Trainiert die aktive Kontrolle in der Überkopfposition und spricht den unteren Trapez an.",
      ausfuehrung: [
        "Richte dich wie beim Wall Slide ein: Gesicht zur Wand, Unterarme schulterbreit an der Wand.",
        "Schieb die Unterarme langsam nach oben in die Y-Position.",
        "Heb oben beide Unterarme ein paar Zentimeter von der Wand ab, ohne dass sich der Rücken überstreckt.",
        "Halte ein bis zwei Sekunden, die Schulterblätter ziehen leicht nach hinten unten.",
        "Leg die Unterarme wieder an und gleite kontrolliert nach unten.",
        "Mache 8 bis 12 Wiederholungen."
      ],
      atmung: "Ausatmen beim Abheben, einatmen beim Absenken.",
      fehler: [
        "Abheben durch Hohlkreuz: Bauch fest, die Bewegung kommt aus der Schulter.",
        "Schultern zu den Ohren: Schultern tief halten.",
        "Kopf schiebt nach vorn: Kinn leicht zurück."
      ],
      vorteile: [
        "Trainiert die Kontrolle über Kopf, nicht nur die Beweglichkeit.",
        "Aktiviert den unteren Trapez, der für eine gute Schulterblattposition wichtig ist.",
        "Gute Brücke zwischen Mobilität und Kraft der Schulter."
      ],
      tipps: [
        "Schon ein Zentimeter Abheben reicht, wenn es sauber ist.",
        "Mit Mini-Band um die Handgelenke wird es noch anspruchsvoller."
      ],
      varianten: "Leichter: Wall Slide ohne Abheben. Schwerer: länger abheben oder mit Mini-Band.",
      sicherheit: "Bei Schulterschmerzen über Kopf nicht abheben, sondern den einfachen Wall Slide nutzen."
    }
  },
  {
    id: "wall_slide_rolle",
    name: "Wall Slide mit Faszienrolle",
    auch: ["Foam Roller Wall Slide", "Roller Wall Slide"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_vorn", "trapez"],
    sekundaer: ["rotatorenmanschette", "brust"],
    geraete: [["wand", "faszienrolle"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Wall Slide, bei dem eine quer liegende Faszienrolle zwischen Unterarmen und Wand nach oben rollt. Die Rolle erleichtert das Gleiten und erlaubt mehr Druck nach vorn, was die Schulterblätter stärker aktiviert.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand und halte eine Faszienrolle quer mit den Unterarmen an der Wand, etwa auf Brusthöhe.",
        "Die Unterarme sind schulterbreit, die Daumen zeigen zu dir.",
        "Drück leicht nach vorn in die Rolle und roll sie mit den Unterarmen langsam nach oben.",
        "Geh nach oben, bis die Arme ein Y bilden, ohne dass die Schultern hochziehen.",
        "Roll kontrolliert zurück nach unten.",
        "Mache 10 bis 15 Wiederholungen."
      ],
      atmung: "Ausatmen beim Hochrollen, einatmen beim Zurückrollen.",
      fehler: [
        "Hohlkreuz: Bauch fest, Becken leicht einrollen.",
        "Kein Druck in die Rolle: leicht nach vorn drücken, damit die Schulterblätter mitarbeiten.",
        "Schultern zu den Ohren: Schultern tief lassen."
      ],
      vorteile: [
        "Gleitet leichter als die Unterarme direkt an der Wand.",
        "Fördert die Aufwärtsrotation der Schulterblätter.",
        "Gut als Teil des Aufwärmens vor Überkopfübungen."
      ],
      tipps: [
        "Oben die Rolle kurz von der Wand lösen, um die Kontrolle zu erhöhen.",
        "Ein Mini-Band um die Handgelenke ergänzt einen Zug nach außen."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: oben abheben oder mit Mini-Band um die Handgelenke.",
      sicherheit: "Bei Schmerzen über Kopf nur im schmerzfreien Bereich arbeiten."
    }
  },
  {
    id: "ueberkopf_wand",
    name: "Überkopfdehnung an der Wand",
    auch: ["Wall Overhead Stretch", "Wall Lean Shoulder Flexion Stretch", "Wall Reach"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "brust"],
    sekundaer: ["trizeps", "oberer_ruecken"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Mit dem Gesicht zur Wand legst du die Hände hoch an und lässt Brust und Achseln Richtung Wand sinken. Dehnt Latissimus und Brust in der Überkopfposition und streckt die Brustwirbelsäule.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand, etwa eine halbe Armlänge entfernt.",
        "Leg die Hände schulterbreit so hoch wie möglich an die Wand, die Daumen zeigen nach hinten.",
        "Geh einen kleinen Schritt zurück, beuge dich leicht aus der Hüfte und lass Brust und Achseln Richtung Wand sinken.",
        "Halte die Rippen unten, die Streckung soll im oberen Rücken und in den Achseln stattfinden.",
        "Halte 30 bis 45 Sekunden.",
        "Komm langsam zurück in den aufrechten Stand."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Brust tiefer sinken lassen.",
      fehler: [
        "Hohlkreuz statt Schulterdehnung: Bauch fest, Rippen unten.",
        "Schultern ziehen zu den Ohren: Arme lang, Schultern weg von den Ohren.",
        "Kopf fällt nach hinten: Kopf zwischen den Armen lassen."
      ],
      vorteile: [
        "Einfache Dehnung für mehr Überkopfbeweglichkeit.",
        "Streckt die Brustwirbelsäule nebenbei.",
        "Gut als Vorbereitung für Wandengel und Überkopfdrücken."
      ],
      tipps: [
        "Die Unterarme an die Wand zu legen, macht die Dehnung sanfter.",
        "Gut im Wechsel mit der Gebetsdehnung an der Bank."
      ],
      varianten: "Leichter: Hände tiefer und weniger Vorlage. Schwerer: Hände höher und die Hüften weiter nach hinten schieben.",
      sicherheit: "Bei Schulterinstabilität oder Schmerzen über Kopf nur sanft dehnen."
    }
  },
  {
    id: "fingerlaufen_wand",
    name: "Fingerlaufen an der Wand",
    auch: ["Wall Walk", "Finger Wall Walk", "Wall Crawl"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_vorn", "latissimus"],
    sekundaer: ["rotatorenmanschette"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Die Finger krabbeln an der Wand nach oben, bis der Arm über Kopf ist. Eine sanfte, aus der Physiotherapie bekannte Übung, um die Beweglichkeit der Schulter Schritt für Schritt zu erweitern.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht oder seitlich zur Wand, etwa eine Unterarmlänge entfernt.",
        "Leg die Fingerspitzen eines Arms auf Hüft- bis Brusthöhe an die Wand.",
        "Lass die Finger langsam an der Wand nach oben laufen, ohne die Schulter hochzuziehen.",
        "Geh so weit, bis eine deutliche Dehnung kommt, und halte dort ein paar Sekunden.",
        "Lauf mit den Fingern langsam wieder nach unten.",
        "Mache 5 bis 10 Wiederholungen, dann Seite wechseln."
      ],
      atmung: "Ruhig weiteratmen, in der obersten Position langsam ausatmen.",
      fehler: [
        "Schulter zieht zum Ohr: Schulter bewusst tief lassen.",
        "Oberkörper lehnt sich zur Wand oder ins Hohlkreuz: aufrecht bleiben.",
        "Zu weit gehen trotz Schmerz: nur bis zur deutlichen Dehnung."
      ],
      vorteile: [
        "Sehr sanfte Möglichkeit, die Schulterbeweglichkeit zu verbessern.",
        "Fortschritt ist an der Wand sichtbar, etwa mit einem Klebestreifen.",
        "Gut für Einsteiger und nach längeren Pausen."
      ],
      tipps: [
        "Seitlich zur Wand stehend trainierst du das Abspreizen, frontal das Heben nach vorn.",
        "Markiere deine höchste Stelle, um den Fortschritt zu sehen."
      ],
      varianten: "Leichter: kleinere Höhe, mehr Pausen. Schwerer: Wall Slide oder Überkopfdehnung an der Wand.",
      sicherheit: "Nach Verletzungen oder Operationen nur nach Absprache mit Arzt oder Physiotherapeut."
    }
  },
  {
    id: "schulterflexion_stab_liegend",
    name: "Armheben mit Stab in Rückenlage",
    auch: ["Supine Shoulder Flexion with Dowel", "Supine Wand Flexion", "Supine Stick Overhead"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "brust"],
    sekundaer: ["trizeps", "rotatorenmanschette"],
    geraete: [["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "In Rückenlage hältst du einen Stab mit beiden Händen und führst ihn mit gestreckten Armen über den Kopf Richtung Boden. Verbessert die Überkopfbeweglichkeit, während der Boden den Rücken stabilisiert.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Knie aufgestellt, und drück den unteren Rücken sanft an den Boden.",
        "Halte einen Stab schulterbreit mit beiden Händen über der Brust, die Arme sind gestreckt.",
        "Führe den Stab langsam über den Kopf nach hinten Richtung Boden.",
        "Geh nur so weit, wie der untere Rücken am Boden bleibt und die Rippen nicht nach oben springen.",
        "Halte am Ende zwei bis drei Sekunden und führe den Stab zurück.",
        "Mache 10 bis 12 Wiederholungen."
      ],
      atmung: "Ausatmen, während die Arme über den Kopf gehen, einatmen beim Zurückführen.",
      fehler: [
        "Hohlkreuz am Ende der Bewegung: früher stoppen, Bauch fest.",
        "Ellbogen beugen sich: Arme gestreckt halten.",
        "Schultern ziehen zu den Ohren: Arme lang, Schultern locker."
      ],
      vorteile: [
        "Zeigt ehrlich, wie viel Überkopfbeweglichkeit ohne Hohlkreuz vorhanden ist.",
        "Gelenkschonend und einfach.",
        "Guter Einstieg für Menschen mit eingeschränkter Überkopfbeweglichkeit."
      ],
      tipps: [
        "Ein schmalerer Griff mit Daumen nach oben erhöht die Dehnung des Latissimus.",
        "Ein Handtuch unter dem Kopf macht die Position angenehmer."
      ],
      varianten: "Leichter: breiterer Griff und kleinerer Umfang. Schwerer: enger Griff oder eine leichte Hantelscheibe statt Stab.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur bis zur schmerzfreien Höhe."
    }
  },
  {
    id: "pendel_codman",
    name: "Pendelübung nach Codman",
    auch: ["Codman Pendulum", "Pendulum Exercise", "Pendelübung"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_seitlich"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Vorgebeugt lässt du einen Arm locker hängen und bringst ihn durch kleine Körperbewegungen ins Pendeln. Eine sehr sanfte, entlastende Bewegung für die Schulter, bekannt aus der Physiotherapie.",
      ausfuehrung: [
        "Stütz dich mit einer Hand auf einer Bank, einem Tisch oder Stuhl ab und beuge den Oberkörper etwa waagerecht nach vorn.",
        "Lass den anderen Arm völlig locker nach unten hängen.",
        "Verlagere dein Körpergewicht leicht vor und zurück, so dass der Arm passiv ins Pendeln kommt.",
        "Wechsle dann zu seitlichem Pendeln und zu kleinen Kreisen in beide Richtungen.",
        "Der Arm bleibt dabei locker, die Bewegung kommt aus dem Körper, nicht aus der Schulter.",
        "Pendle 30 bis 60 Sekunden, dann Seite wechseln."
      ],
      atmung: "Ruhig und entspannt atmen, die Schulter mit jedem Ausatmen schwerer werden lassen.",
      fehler: [
        "Der Arm wird aktiv bewegt: Arm ganz locker lassen, der Körper bewegt.",
        "Zu große Kreise: klein beginnen.",
        "Rundrücken beim Vorbeugen: Rücken lang, Knie leicht gebeugt."
      ],
      vorteile: [
        "Sehr sanfte Bewegung ohne Muskelarbeit der Schulter.",
        "Kann die Schulter bei Verspannungsgefühl lockern.",
        "Gut als Einstieg in eine Schultereinheit oder an Tagen, an denen die Schulter empfindlich ist."
      ],
      tipps: [
        "Wer möchte, hält eine sehr leichte Hantel, das verstärkt den Zug nach unten.",
        "Ideal zwischen schweren Sätzen Drücken, um die Schulter zu lockern."
      ],
      varianten: "Leichter: sehr kleine Pendelbewegungen. Schwerer: mit leichter Kurzhantel in der Hand für mehr Zug.",
      sicherheit: "Nach Schulterverletzungen oder Operationen nur nach ärztlicher oder physiotherapeutischer Anleitung."
    }
  },
  {
    id: "haengen_passiv",
    name: "Passives Hängen zur Schulterentlastung",
    auch: ["Passive Hang", "Dead Hang for Shoulder Mobility", "Schulter-Hängen"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "brust"],
    sekundaer: ["unterarm", "rotatorenmanschette"],
    geraete: [["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 1,
    sport: ["golf", "klettern"],
    golf: 1,
    info: {
      kurz: "Lockeres Hängen an der Klimmzugstange mit entspannten Schultern, wobei die Füße bei Bedarf den Boden berühren dürfen. Anders als beim Griffkrafttraining geht es hier um die Dehnung von Latissimus und Brust und die Entlastung der Schultern über Kopf.",
      ausfuehrung: [
        "Greif die Stange etwas weiter als schulterbreit im Obergriff.",
        "Lass dich langsam ins Hängen sinken. Wenn die Stange niedrig genug ist, bleiben die Zehen am Boden und nehmen etwas Gewicht ab.",
        "Lass die Schultern bewusst los, so dass sie Richtung Ohren gezogen werden.",
        "Lass den Körper lang hängen, das Becken leicht eingerollt, die Beine locker.",
        "Halte 20 bis 45 Sekunden.",
        "Steig kontrolliert ab, nicht fallen lassen."
      ],
      atmung: "Ruhig und tief weiteratmen, mit jedem Ausatmen etwas mehr loslassen.",
      fehler: [
        "Schwingen oder Zappeln: ruhig hängen.",
        "Nach unten springen: sanft absteigen.",
        "Zu lange hängen, bis die Hände aufgeben: kürzer und öfter."
      ],
      vorteile: [
        "Dehnt Latissimus und Brust über Kopf.",
        "Viele empfinden das Hängen nach Kniebeugen oder langem Sitzen als entlastend.",
        "Verbessert nebenbei die Griffausdauer."
      ],
      tipps: [
        "Mit den Füßen am Boden kannst du die Dehnung sehr genau dosieren.",
        "Leicht zur Seite schwingen oder eine Hand loslassen verstärkt die Dehnung einer Seite."
      ],
      varianten: "Leichter: Füße am Boden lassen. Schwerer: frei hängen, einarmig mit Fußkontakt oder Deutsches Hängen.",
      sicherheit: "Bei Schulterinstabilität oder Schmerzen über Kopf nur mit Fußkontakt und kurz. Bei Ellbogenbeschwerden vorsichtig."
    }
  },
  {
    id: "german_hang",
    name: "Deutsches Hängen",
    auch: ["German Hang", "Skin the Cat Hold"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn", "bizeps"],
    sekundaer: ["rotatorenmanschette", "bauch"],
    geraete: [["schlingentrainer"], ["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Turnerische Dehnhaltung, bei der du an Ringen, Schlingen oder einer niedrigen Stange mit den Armen hinter dem Körper hängst. Dehnt Brust, vordere Schulter und Bizeps in maximaler Schulterstreckung und ist nur für Fortgeschrittene geeignet.",
      ausfuehrung: [
        "Nutze Ringe oder Schlingen auf Hüfthöhe oder eine niedrige Stange, so dass deine Füße den Boden erreichen.",
        "Setz dich unter die Griffe und greif sie, die Arme sind gestreckt.",
        "Lauf mit den Füßen nach vorn und lass das Becken sinken, bis die Arme hinter dem Körper nach oben gestreckt sind und die Brust nach vorn unten zeigt.",
        "Die Füße bleiben am Boden und tragen so viel Gewicht wie nötig.",
        "Lass langsam mehr Gewicht in die Arme sinken. Halte 10 bis 30 Sekunden.",
        "Komm kontrolliert zurück, indem du die Füße wieder unter den Körper setzt."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas mehr Gewicht in die Arme geben.",
      fehler: [
        "Zu schnell zu viel Gewicht: mit hohem Fußanteil starten.",
        "Ellbogen gebeugt: Arme gestreckt lassen, sonst wird die Belastung ungünstig.",
        "Schultern fallen ruckartig in die Endposition: langsam und kontrolliert absenken."
      ],
      vorteile: [
        "Verbessert die Schulterstreckung, die für Dips, Muscle-ups und Turnelemente gebraucht wird.",
        "Dehnt Brust, vordere Schulter und Bizeps sehr intensiv.",
        "Bereitet auf anspruchsvolle Bewegungen wie Skin the Cat vor."
      ],
      tipps: [
        "Starte mit dem Brustöffner mit verschränkten Händen und Dip-Dehnung, bevor du diese Übung probierst.",
        "Füße am Boden sind am Anfang Pflicht. Erst nach Wochen das Gewicht der Füße reduzieren."
      ],
      varianten: "Leichter: Brustöffner mit verschränkten Händen hinter dem Rücken oder Dip-Dehnung. Schwerer: weniger Fußunterstützung oder Skin the Cat.",
      sicherheit: "Nicht bei Schulterinstabilität, nach Ausrenkungen oder bei Bizepssehnenbeschwerden. Nur für Fortgeschrittene mit gesunden Schultern."
    }
  },
  {
    id: "dip_dehnung",
    name: "Dip-Dehnung in der tiefen Position",
    auch: ["Bottom Dip Stretch", "Dip Hold Stretch", "Bench Dip Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn"],
    sekundaer: ["bizeps", "trizeps"],
    geraete: [["dip_station"], ["bank"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Gestütztes Halten in der tiefsten Position eines Dips, wobei die Füße einen Teil des Gewichts tragen. Dehnt Brust und vordere Schulter in Schulterstreckung und bereitet auf tiefe Dips vor.",
      ausfuehrung: [
        "Stell dich zwischen die Holme einer Dipstation oder vor eine Bank mit dem Rücken zu ihr.",
        "Stütz dich mit den Händen auf, die Füße bleiben am Boden oder auf einer Erhöhung, um Gewicht abzunehmen.",
        "Senk den Körper langsam ab, indem du die Ellbogen beugst, bis die Schultern deutlich unter die Ellbogen sinken.",
        "Halte die Brust offen, die Schultern ziehen nicht nach vorn.",
        "Halte die tiefe Position 15 bis 30 Sekunden mit einer deutlichen Dehnung vorn in Brust und Schulter.",
        "Drück dich mit Unterstützung der Beine wieder hoch."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: [
        "Schultern rollen nach vorn: Brust heraus, Schulterblätter zusammen.",
        "Zu viel Gewicht in den Armen: Beine mehr mithelfen lassen.",
        "Ruckartiges Absinken: langsam und kontrolliert."
      ],
      vorteile: [
        "Verbessert die Schulterstreckung gezielt.",
        "Macht tiefe Dips sicherer und angenehmer.",
        "Dehnt die Brust in einem Winkel, den andere Dehnungen kaum erreichen."
      ],
      tipps: [
        "An der Bank ist die Übung leichter zu dosieren als an der Dipstation.",
        "Füße auf einer Box erhöhen die Kontrolle."
      ],
      varianten: "Leichter: Brustöffner mit verschränkten Händen im Stand. Schwerer: weniger Beinunterstützung oder Deutsches Hängen.",
      sicherheit: "Nicht bei Schulterbeschwerden vorn, Instabilität oder Problemen der Bizepssehne. Für Einsteiger nicht geeignet."
    }
  },
  {
    id: "schulterextension_band",
    name: "Schulterstreckung mit Band hinter dem Körper",
    auch: ["Banded Shoulder Extension Stretch", "Banded Anterior Shoulder Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_vorn", "brust"],
    sekundaer: ["bizeps"],
    geraete: [["band"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Ein auf Brust- bis Schulterhöhe befestigtes Band zieht den gestreckten Arm hinter dem Körper nach hinten, während du nach vorn gehst. Dehnt vordere Schulter und Brust in der Streckung.",
      ausfuehrung: [
        "Befestige ein Band etwa auf Hüft- bis Brusthöhe an einem Rack oder Pfosten.",
        "Stell dich mit dem Rücken zum Ankerpunkt und greif das Band mit einer Hand hinter dem Körper, die Handfläche zeigt nach unten.",
        "Geh nach vorn, bis das Band den Arm nach hinten zieht.",
        "Beuge dich leicht nach vorn und lass die Schulter nach hinten ziehen, ohne dass sie nach vorn rollt.",
        "Dreh den Oberkörper leicht vom Arm weg, um die Dehnung zu verändern. Halte 30 bis 45 Sekunden.",
        "Geh zurück und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas weiter nach vorn lehnen.",
      fehler: [
        "Schulter kippt nach vorn: Schulterblatt nach hinten unten ziehen.",
        "Zu starkes Band: Zug soll angenehm sein.",
        "Ellbogen ganz verriegelt: leicht gebeugt lassen."
      ],
      vorteile: [
        "Dehnt die vordere Schulter, die bei viel Drücken fest wird.",
        "Der Zug des Bandes wirkt sanfter als reines Hängen.",
        "Gut als Vorbereitung für Dips und Rudern mit großem Bewegungsumfang."
      ],
      tipps: [
        "Kleine Positionswechsel helfen, die engste Stelle zu finden.",
        "Danach einige Wandengel ausführen."
      ],
      varianten: "Leichter: Brustöffner mit verschränkten Händen ohne Band. Schwerer: Band höher befestigen oder weiter vorgehen.",
      sicherheit: "Bei Beschwerden vorn in der Schulter oder an der Bizepssehne nur sanft oder auslassen."
    }
  },
  {
    id: "pullover_dehnung",
    name: "Pullover-Dehnung mit Kurzhantel",
    auch: ["Dumbbell Pullover Stretch", "Bench Pullover Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "brust"],
    sekundaer: ["trizeps", "oberer_ruecken"],
    geraete: [["kurzhantel", "bank"], ["hantelscheibe", "bank"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Auf einer Bank liegend hältst du eine leichte Kurzhantel mit gestreckten Armen über den Kopf hinaus in der gedehnten Position. Die leichte Last zieht Latissimus und Brust in die Länge.",
      ausfuehrung: [
        "Leg dich rücklings auf eine Flachbank, die Füße stehen fest am Boden.",
        "Halte eine leichte Kurzhantel mit beiden Händen am inneren Scheibenteil über der Brust, die Ellbogen sind leicht gebeugt.",
        "Senk die Hantel langsam in einem Bogen hinter den Kopf, bis du eine deutliche Dehnung in Achseln und Brust spürst.",
        "Halte die Rippen unten und den unteren Rücken in Kontakt mit der Bank.",
        "Halte die Endposition 20 bis 30 Sekunden.",
        "Führe die Hantel kontrolliert zurück über die Brust."
      ],
      atmung: "Ruhig weiteratmen, in der Dehnung nicht die Luft anhalten.",
      fehler: [
        "Zu schwere Hantel: hier geht es um Dehnung, nicht um Kraft, eine leichte Last genügt.",
        "Hohlkreuz: Bauch fest, Rippen unten.",
        "Ellbogen weit gebeugt: leicht gebeugt, aber fest halten."
      ],
      vorteile: [
        "Dehnt Latissimus und Brust unter leichter Last.",
        "Die Last erlaubt eine passive, tiefe Dehnung.",
        "Bereitet auf Überkopfübungen und Pullover vor."
      ],
      tipps: [
        "Starte mit sehr leichtem Gewicht, etwa 2 bis 5 Kilogramm.",
        "Quer zur Bank liegend mit Schultern auf der Bank wird die Dehnung intensiver."
      ],
      varianten: "Leichter: ohne Gewicht oder mit Stab. Schwerer: etwas mehr Gewicht oder längere Haltezeit.",
      sicherheit: "Bei Schulterinstabilität oder Schmerzen über Kopf nur mit sehr leichtem Gewicht und kleinem Umfang."
    }
  },
  {
    id: "hund_wand",
    name: "Halber Hund an der Wand",
    auch: ["Wall Dog", "Half Dog at Wall", "Standing Wall Downward Dog", "Ardha Adho Mukha Svanasana"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "brust", "beinbeuger"],
    sekundaer: ["oberer_ruecken", "waden"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Mit den Händen an der Wand gehst du zurück, bis Oberkörper und Arme eine waagerechte Linie bilden. Die sanftere Variante des herabschauenden Hundes, ohne Belastung der Handgelenke.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand und leg die Hände schulterbreit auf Hüfthöhe an.",
        "Geh mit kleinen Schritten zurück, bis die Arme gestreckt sind und der Oberkörper waagerecht ist.",
        "Die Füße stehen hüftbreit unter den Hüften, die Knie sind leicht gebeugt.",
        "Schieb die Hüften nach hinten weg von der Wand und lass die Brust Richtung Boden sinken.",
        "Halte 30 bis 60 Sekunden mit langem Rücken.",
        "Geh zum Lösen wieder auf die Wand zu."
      ],
      atmung: "Ruhig und tief weiteratmen, mit dem Ausatmen die Hüften weiter nach hinten schieben.",
      fehler: [
        "Rundrücken: Knie mehr beugen und das Becken nach hinten kippen.",
        "Kopf hängt durch: zwischen den Armen in Verlängerung der Wirbelsäule.",
        "Hände zu tief: auf Hüfthöhe starten."
      ],
      vorteile: [
        "Dehnt Schultern, Latissimus und Beinrückseite ohne Druck auf die Handgelenke.",
        "Leicht im Büro oder zu Hause machbar.",
        "Einstieg für den herabschauenden Hund."
      ],
      tipps: [
        "Je gestreckter die Knie, desto mehr Dehnung in der Beinrückseite. Je gebeugter, desto mehr in den Schultern.",
        "Daumen zur Decke drehen verstärkt die Latissimusdehnung."
      ],
      varianten: "Leichter: Hände höher an der Wand. Schwerer: herabschauender Hund am Boden.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur sanft dehnen."
    }
  },
  // ---------- Schulter: Arme ----------
  {
    id: "trizeps_dehnen_ueberkopf",
    name: "Trizeps dehnen über Kopf",
    auch: ["Overhead Triceps Stretch", "Triceps Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["trizeps"],
    sekundaer: ["latissimus"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du hebst einen Arm über den Kopf, beugst den Ellbogen und ziehst ihn mit der anderen Hand sanft hinter den Kopf. Dehnt den Trizeps, vor allem seinen langen Kopf, und den Latissimus.",
      ausfuehrung: [
        "Stell oder setz dich aufrecht hin.",
        "Heb den rechten Arm über den Kopf und beuge den Ellbogen, so dass die Hand zwischen die Schulterblätter sinkt.",
        "Fass mit der linken Hand den rechten Ellbogen.",
        "Zieh den Ellbogen sanft hinter den Kopf und leicht nach links.",
        "Halte 30 Sekunden, der Kopf bleibt aufrecht.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Ellbogen etwas weiterziehen.",
      fehler: [
        "Kopf wird nach vorn gedrückt: Kopf aufrecht, leicht gegen den Arm drücken.",
        "Hohlkreuz: Bauch fest.",
        "Am Handgelenk statt am Ellbogen ziehen: am Ellbogen greifen."
      ],
      vorteile: [
        "Einfache Dehnung des Trizeps überall.",
        "Erreicht den langen Trizepskopf, der über das Schultergelenk zieht.",
        "Angenehm nach Trizeps- und Drücktraining."
      ],
      tipps: [
        "Eine leichte Seitneigung zur Gegenseite verstärkt die Dehnung von Latissimus und Rumpfseite.",
        "Kombiniere sie mit der Gebetsdehnung an der Bank."
      ],
      varianten: "Leichter: weniger weit ziehen. Schwerer: Trizepsdehnung an der Wand oder Kuhgesicht-Arme.",
      sicherheit: "Bei Schulterschmerzen über Kopf nur sanft."
    }
  },
  {
    id: "trizeps_dehnen_wand",
    name: "Trizeps dehnen an der Wand",
    auch: ["Wall Triceps Stretch", "Triceps Lat Stretch at Wall"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["trizeps", "latissimus"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du legst den gebeugten Ellbogen über dem Kopf an eine Wand und lehnst dich mit dem Körper hinein. So kannst du die Dehnung von Trizeps und Latissimus stärker dosieren als frei.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand, etwa einen halben Schritt entfernt.",
        "Heb den rechten Arm, beuge den Ellbogen und leg ihn über dem Kopf an die Wand, die Hand hängt hinter dem Kopf.",
        "Mach einen kleinen Schritt mit dem rechten Bein zurück.",
        "Lehne dich mit Brust und Achsel langsam Richtung Wand, so dass sich der Ellbogen weiter nach oben schiebt.",
        "Halte 30 Sekunden mit deutlicher Dehnung am Oberarm und unter der Achsel.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen tiefer zur Wand lehnen.",
      fehler: [
        "Hohlkreuz: Bauch fest und Rippen unten.",
        "Kopf drückt nach vorn: Kopf neben dem Arm lassen.",
        "Ruckartiges Hineinlehnen: langsam steigern."
      ],
      vorteile: [
        "Intensivere und besser dosierbare Trizepsdehnung als frei.",
        "Dehnt den Latissimus gleich mit.",
        "Keine zweite Hand nötig, der ganze Körper entspannt."
      ],
      tipps: [
        "Für eine entspanntere Position setz dich neben die Wand.",
        "Nach Trizepsübungen über Kopf besonders wirkungsvoll."
      ],
      varianten: "Leichter: Trizepsdehnung frei über Kopf. Schwerer: Hand weiter hinter den Kopf und tiefer lehnen.",
      sicherheit: "Bei Schulterbeschwerden über Kopf vorsichtig."
    }
  },
  {
    id: "bizeps_dehnen_wand",
    name: "Bizeps dehnen an der Wand",
    auch: ["Wall Biceps Stretch", "Biceps Wall Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["bizeps", "schulter_vorn"],
    sekundaer: ["brust", "unterarm"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Die Handfläche liegt mit gestrecktem Arm etwa auf Schulterhöhe an der Wand, der Daumen zeigt nach unten, und du drehst den Körper weg. Dehnt Bizeps, vordere Schulter und Brust.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Wand, etwa eine Armlänge entfernt.",
        "Leg die rechte Handfläche hinter dir auf Schulterhöhe oder etwas tiefer an die Wand, die Finger zeigen nach hinten, der Daumen nach unten.",
        "Strecke den Arm, ohne den Ellbogen zu verriegeln.",
        "Dreh den Oberkörper langsam von der Wand weg, bis du die Dehnung im Bizeps und vorn an der Schulter spürst.",
        "Halte 30 Sekunden, die Schulter bleibt tief und hinten.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen weiter wegdrehen.",
      fehler: [
        "Schulter rollt nach vorn: Schulterblatt nach hinten ziehen.",
        "Ellbogen überstreckt: leicht gebeugt lassen.",
        "Daumen zeigt nach oben: Daumen nach unten erhöht die Dehnung im Bizeps."
      ],
      vorteile: [
        "Gezielte Dehnung des Bizeps, der über Schulter und Ellbogen zieht.",
        "Dehnt nebenbei vordere Schulter und Brust.",
        "Angenehm nach schwerem Armtraining oder Kreuzheben."
      ],
      tipps: [
        "Eine tiefere Handposition betont den Bizeps, eine höhere die Brust.",
        "Nach Curls besonders wirkungsvoll."
      ],
      varianten: "Leichter: weniger weit drehen. Schwerer: Hand tiefer ansetzen und weiter drehen.",
      sicherheit: "Bei Beschwerden an der Bizepssehne oder vorn in der Schulter nur sanft."
    }
  },
  {
    id: "bizeps_dehnen_sitzend",
    name: "Bizeps dehnen im Sitzen",
    auch: ["Seated Biceps Stretch", "Seated Hands Behind Biceps Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["bizeps", "schulter_vorn"],
    sekundaer: ["brust", "unterarm"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Im Sitzen stützt du die Hände hinter dem Körper auf, die Finger zeigen nach hinten, und rutschst mit dem Gesäß nach vorn. Dehnt beide Bizepse, die vordere Schulter und die Unterarmbeuger zugleich.",
      ausfuehrung: [
        "Setz dich mit aufgestellten Beinen auf den Boden.",
        "Stütz die Hände etwa schulterbreit hinter dir auf, die Finger zeigen nach hinten weg von dir.",
        "Strecke die Arme, ohne die Ellbogen zu verriegeln.",
        "Rutsch mit dem Gesäß langsam nach vorn, weg von den Händen, bis du die Dehnung in Bizeps und vorderer Schulter spürst.",
        "Halte 30 Sekunden, die Brust bleibt offen.",
        "Rutsch zurück und schüttle die Hände aus."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen ein Stück weiter nach vorn rutschen.",
      fehler: [
        "Schultern ziehen zu den Ohren: Schultern tief und hinten.",
        "Ellbogen überstreckt: leicht gebeugt halten.",
        "Zu weit rutschen: Dehnung soll deutlich, aber angenehm sein."
      ],
      vorteile: [
        "Dehnt beide Arme gleichzeitig.",
        "Erreicht neben dem Bizeps auch die Unterarmbeuger.",
        "Kein Gerät nötig."
      ],
      tipps: [
        "Gut nach Curls und Zugübungen.",
        "Wenn die Handgelenke stören, auf die Fäuste stützen."
      ],
      varianten: "Leichter: Hände näher am Gesäß. Schwerer: weiter rutschen oder Gesäß kurz anheben.",
      sicherheit: "Bei Handgelenk- oder Ellbogenbeschwerden sanft und nur kurz."
    }
  },
  // ---------- Nacken ----------
  {
    id: "trapez_oben_dehnen",
    name: "Oberen Trapezmuskel dehnen",
    auch: ["Upper Trapezius Stretch", "Upper Trap Stretch", "Nacken seitlich dehnen"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["trapez", "nacken"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Seitneigung des Kopfes, während die Schulter der Gegenseite tief bleibt. Dehnt den oberen Trapezmuskel, der bei Stress und Bildschirmarbeit häufig verspannt wirkt.",
      ausfuehrung: [
        "Setz dich aufrecht auf eine Bank oder einen Stuhl.",
        "Greif mit der rechten Hand die Sitzkante neben dir oder lass den Arm locker hängen, so bleibt die rechte Schulter tief.",
        "Neige den Kopf langsam nach links, das linke Ohr wandert Richtung linke Schulter. Der Blick bleibt nach vorn.",
        "Leg die linke Hand bei Bedarf locker auf die rechte Kopfseite. Sie gibt nur leichtes Gewicht, sie zieht nicht.",
        "Halte 30 Sekunden mit einer Dehnung an der rechten Nackenseite bis zur Schulter.",
        "Richte den Kopf langsam auf und wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Schulter der gedehnten Seite noch etwas tiefer sinken lassen.",
      fehler: [
        "Mit der Hand kräftig am Kopf ziehen: nur das Gewicht der Hand wirken lassen.",
        "Schulter der gedehnten Seite zieht mit hoch: an der Sitzkante festhalten.",
        "Kopf dreht sich mit: Nase bleibt nach vorn gerichtet."
      ],
      vorteile: [
        "Kann Spannungsgefühl im Nacken und an der Schulteroberseite lindern.",
        "Unauffällig am Arbeitsplatz möglich.",
        "Sehr einfach und für fast jeden geeignet."
      ],
      tipps: [
        "Den Kopf leicht nach vorn neigen, um mehr hintere Fasern zu erreichen.",
        "Mehrmals am Tag kurz ist oft angenehmer als einmal lange."
      ],
      varianten: "Leichter: ohne Hand am Kopf. Schwerer: PNF-Variante mit kurzem Gegendruck gegen die Hand.",
      sicherheit: "Bei Schwindel, Kribbeln in Arm oder Hand oder nach Nackenverletzungen sofort aufhören und abklären lassen."
    }
  },
  {
    id: "trapez_oben_dehnen_pnf",
    name: "Nackendehnung PNF",
    auch: ["PNF Upper Trap Stretch", "Contract-Relax Neck Stretch"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["trapez", "nacken"],
    geraete: [["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Seitliche Nackendehnung mit kurzen, sanften Anspannungsphasen gegen die eigene Hand. Nach dem Loslassen gibt der Muskel oft spürbar mehr nach als bei reinem Halten.",
      ausfuehrung: [
        "Setz dich aufrecht hin und halte dich mit der rechten Hand an der Sitzkante fest.",
        "Neige den Kopf nach links und leg die linke Hand locker auf die rechte Kopfseite.",
        "Halte die Dehnung etwa 15 Sekunden.",
        "Drück den Kopf jetzt mit sehr wenig Kraft, etwa 20 Prozent, 5 Sekunden gegen die Hand, ohne dass er sich bewegt.",
        "Lass los, atme aus und neige den Kopf ein kleines Stück weiter. Halte 15 Sekunden.",
        "Wiederhole 3 Zyklen, dann wechsle auf die andere Seite."
      ],
      atmung: "Beim Gegendruck normal weiteratmen, nach dem Lösen lang ausatmen und nachgeben.",
      fehler: [
        "Zu viel Kraft beim Gegendruck: im Nacken reicht sehr wenig Spannung.",
        "Ruckartiges Nachdehnen: langsam und behutsam weitergehen.",
        "Schulter zieht hoch: an der Sitzkante festhalten."
      ],
      vorteile: [
        "Kann in kurzer Zeit mehr Bewegungsfreiheit im Nacken bringen.",
        "Schult das bewusste Loslassen der Nackenmuskeln.",
        "Ohne Gerät überall machbar."
      ],
      tipps: [
        "Den Blick beim Anspannen in Richtung der gedehnten Seite lenken, beim Lösen zur anderen Seite, das unterstützt die Entspannung.",
        "Nicht mehr als drei Zyklen."
      ],
      varianten: "Leichter: statische Dehnung des oberen Trapez. Schwerer: zusätzlich leicht nach vorn neigen für den Schulterblattheber.",
      sicherheit: "Bei Nackenverletzungen, Schwindel oder Kribbeln in den Armen nicht durchführen und abklären lassen."
    }
  },
  {
    id: "levator_dehnen",
    name: "Schulterblattheber dehnen",
    auch: ["Levator Scapulae Stretch", "Armpit Stretch", "Achsel-Blick-Dehnung"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken", "trapez"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du drehst den Kopf etwa 45 Grad zur Seite und schaust nach unten in Richtung Achsel. Dehnt den Schulterblattheber, der vom Nacken zum oberen Schulterblattwinkel zieht.",
      ausfuehrung: [
        "Setz dich aufrecht hin und halte dich mit der rechten Hand an der Sitzkante fest.",
        "Dreh den Kopf etwa 45 Grad nach links.",
        "Neige den Kopf nun nach vorn unten, als würdest du in deine linke Achsel schauen.",
        "Leg die linke Hand locker auf den Hinterkopf und gib nur das Gewicht der Hand.",
        "Halte 30 Sekunden mit der Dehnung hinten seitlich am Nacken bis zum Schulterblatt.",
        "Richte dich langsam auf und wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die rechte Schulter tiefer sinken lassen.",
      fehler: [
        "Hand zieht kräftig: nur leichtes Gewicht.",
        "Schulter zieht hoch: Sitzkante festhalten.",
        "Rundrücken: Oberkörper aufrecht, nur der Kopf bewegt sich."
      ],
      vorteile: [
        "Erreicht einen Muskel, der bei Nackenverspannungen oft beteiligt ist.",
        "Ergänzt die seitliche Trapezdehnung.",
        "Unauffällig im Büro machbar."
      ],
      tipps: [
        "Den rechten Arm hinter den Rücken legen verstärkt die Dehnung.",
        "Variiere den Winkel der Kopfdrehung leicht, um die engste Stelle zu finden."
      ],
      varianten: "Leichter: ohne Hand am Kopf. Schwerer: mit kurzer Anspannen-Entspannen-Phase.",
      sicherheit: "Bei Schwindel oder Kribbeln sofort aufhören. Nach Nackenverletzungen nur nach Rücksprache."
    }
  },
  {
    id: "skalenus_dehnen",
    name: "Treppenmuskeln dehnen",
    auch: ["Scalene Stretch", "Scalenes Stretch", "Vordere Halsseite dehnen"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Seitneigung des Kopfes mit leichter Drehung nach oben, während das Brustbein fixiert wird. Dehnt die Treppenmuskeln an der vorderen seitlichen Halsseite, die bei flacher Brustatmung viel arbeiten.",
      ausfuehrung: [
        "Setz dich aufrecht hin und leg beide Hände übereinander unterhalb des rechten Schlüsselbeins auf die Brust.",
        "Drück die Hände leicht nach unten, so dass Brustkorb und Schlüsselbein fixiert sind.",
        "Neige den Kopf nach links, das linke Ohr Richtung linke Schulter.",
        "Dreh das Kinn leicht nach oben und schau schräg nach oben, bis die Dehnung vorn seitlich am Hals spürbar ist.",
        "Halte 20 bis 30 Sekunden.",
        "Richte den Kopf langsam auf und wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Brustkorb unter den Händen sinken lassen.",
      fehler: [
        "Kopf weit in den Nacken legen: nur leicht nach oben blicken.",
        "Ohne Fixierung des Brustkorbs: Hände halten das Schlüsselbein unten.",
        "Zu schnelle Bewegungen: langsam herantasten."
      ],
      vorteile: [
        "Dehnt Muskeln, die bei flacher Brustatmung oft dauerhaft arbeiten.",
        "Ergänzt die Dehnungen des hinteren Nackens.",
        "Kann zusammen mit Atemübungen entspannend wirken."
      ],
      tipps: [
        "Kombiniere sie mit Krokodil-Atmung, um die Halsmuskeln beim Atmen zu entlasten.",
        "Mit leicht veränderten Winkeln erreichst du verschiedene Anteile."
      ],
      varianten: "Leichter: ohne Drehung nach oben. Schwerer: im Liegen mit fixiertem Brustkorb.",
      sicherheit: "Bei Kribbeln in Arm oder Hand, Schwindel oder Gefäßerkrankungen am Hals nicht ausführen und ärztlich abklären."
    }
  },
  {
    id: "kopfwender_dehnen",
    name: "Kopfwender dehnen",
    auch: ["SCM Stretch", "Sternocleidomastoid Stretch"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Drehung und leichte Streckung des Kopfes zur Gegenseite bei fixiertem Brustbein. Dehnt den Kopfwender, den kräftigen Muskel an der Halsvorderseite, der bei vorgeschobenem Kopf oft verkürzt wirkt.",
      ausfuehrung: [
        "Setz dich aufrecht hin und leg die rechte Hand flach auf das rechte Schlüsselbein.",
        "Dreh den Kopf langsam nach links, so weit es angenehm ist.",
        "Heb nun das Kinn leicht an, als würdest du schräg über die linke Schulter nach oben schauen.",
        "Spüre die Dehnung vorn an der rechten Halsseite vom Ohr zum Brustbein.",
        "Halte 20 bis 30 Sekunden.",
        "Komm langsam zurück und wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen das Schlüsselbein unter der Hand sinken lassen.",
      fehler: [
        "Kopf weit nach hinten kippen: nur leicht anheben.",
        "Schulter zieht hoch: Hand hält das Schlüsselbein unten.",
        "Ruckartig drehen: langsam bewegen."
      ],
      vorteile: [
        "Spricht die Halsvorderseite an, die bei Dehnprogrammen oft vergessen wird.",
        "Kann bei vorgeschobener Kopfhaltung als Ausgleich dienen.",
        "Überall im Sitzen machbar."
      ],
      tipps: [
        "Danach Kinn einziehen üben, um die neue Position aktiv zu nutzen.",
        "Lieber sanft und mehrmals täglich."
      ],
      varianten: "Leichter: nur drehen ohne Kinnanheben. Schwerer: länger halten.",
      sicherheit: "Bei Schwindel, Sehstörungen oder bekannten Gefäßproblemen am Hals nicht ausführen."
    }
  },
  {
    id: "nackenstrecker_dehnen",
    name: "Nackenrückseite dehnen",
    auch: ["Neck Extensor Stretch", "Suboccipital Stretch", "Chin to Chest Stretch"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["trapez", "oberer_ruecken"],
    geraete: [["bank"], []],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Du ziehst das Kinn leicht ein und senkst den Kopf Richtung Brust, die Hände liegen locker am Hinterkopf. Dehnt die Muskeln an der Nackenrückseite und unter dem Hinterkopf.",
      ausfuehrung: [
        "Setz dich aufrecht hin, die Füße flach am Boden.",
        "Zieh das Kinn zuerst leicht nach hinten, als würdest du ein Doppelkinn machen.",
        "Senk den Kopf dann langsam Richtung Brust.",
        "Leg die verschränkten Hände locker auf den Hinterkopf und lass ihr Gewicht wirken, ohne zu ziehen.",
        "Halte 30 Sekunden mit der Dehnung im Nacken und unter dem Hinterkopf.",
        "Hebe den Kopf langsam Wirbel für Wirbel wieder an."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen den Kopf etwas schwerer werden lassen.",
      fehler: [
        "Mit den Händen ziehen: nur Gewicht geben.",
        "Rundrücken im ganzen Oberkörper: Brust bleibt aufrecht, nur der Kopf neigt sich.",
        "Kinn schiebt nach vorn statt einzuziehen: zuerst das Kinn zurück."
      ],
      vorteile: [
        "Dehnt die Nackenstrecker, die bei Bildschirmarbeit lange halten müssen.",
        "Kann Spannungsgefühl am Hinterkopf mindern.",
        "Einfache Pausenübung."
      ],
      tipps: [
        "Den Kopf leicht nach links und rechts drehen, um seitliche Anteile zu erreichen.",
        "Kombiniere sie mit dem Kinneinziehen."
      ],
      varianten: "Leichter: ohne Hände. Schwerer: im Liegen mit Kopf auf einem Kissen und Kinn eingezogen.",
      sicherheit: "Bei Bandscheibenbeschwerden der Halswirbelsäule oder Kribbeln in den Armen nicht ausführen."
    }
  },
  {
    id: "kinn_einziehen",
    name: "Kinn einziehen",
    auch: ["Chin Tucks", "Cervical Retraction", "Doppelkinn-Übung"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Du schiebst den Kopf waagerecht nach hinten, als würdest du ein Doppelkinn machen. Aktiviert die tiefen Halsbeuger und dehnt die Muskeln unter dem Hinterkopf, als Ausgleich zu einer vorgeschobenen Kopfhaltung.",
      ausfuehrung: [
        "Setz oder stell dich aufrecht hin, der Blick geht geradeaus.",
        "Schieb den Kopf waagerecht nach hinten, ohne nach oben oder unten zu nicken.",
        "Das Kinn bewegt sich dabei leicht Richtung Hals, der Hinterkopf wird lang.",
        "Halte die Position 3 bis 5 Sekunden.",
        "Lass den Kopf locker wieder in die Ausgangsposition gleiten.",
        "Mache 10 bis 15 Wiederholungen."
      ],
      atmung: "Gleichmäßig weiteratmen, beim Zurückschieben ausatmen.",
      fehler: [
        "Kopf nickt nach unten: der Blick bleibt waagerecht.",
        "Zu viel Kraft: sanfte, kontrollierte Bewegung genügt.",
        "Schultern ziehen mit: Schultern locker lassen."
      ],
      vorteile: [
        "Wirkt einer vorgeschobenen Kopfhaltung entgegen.",
        "Kräftigt die tiefen Halsmuskeln sanft.",
        "Jederzeit und überall machbar, auch im Auto oder am Schreibtisch."
      ],
      tipps: [
        "Ein Finger am Kinn hilft als Orientierung: schiebe den Kopf vom Finger weg.",
        "Mehrmals am Tag ein paar Wiederholungen sind ideal."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: an der Wand mit Gegendruck oder in Rückenlage mit leichtem Kopfanheben.",
      sicherheit: "Bei Schmerzen oder Ausstrahlung in die Arme nicht weiter üben und abklären lassen."
    }
  },
  {
    id: "kinn_einziehen_wand",
    name: "Kinn einziehen an der Wand",
    auch: ["Wall Chin Tucks", "Wall Cervical Retraction"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Mit dem Rücken an der Wand drückst du den Hinterkopf durch Kinneinziehen sanft an die Wand. Die Wand gibt Rückmeldung über die Position und verbindet die Übung mit einer aufrechten Haltung.",
      ausfuehrung: [
        "Stell dich mit dem Rücken an eine Wand, Fersen etwa eine Handbreit entfernt, Gesäß und oberer Rücken berühren die Wand.",
        "Lass den Kopf in seiner normalen Haltung, oft berührt der Hinterkopf die Wand dann nicht.",
        "Zieh das Kinn waagerecht zurück, bis der Hinterkopf die Wand berührt.",
        "Drück den Hinterkopf 3 bis 5 Sekunden sanft gegen die Wand, ohne den Kopf nach oben zu kippen.",
        "Lass locker, ohne den Kontakt ganz zu verlieren.",
        "Mache 10 bis 12 Wiederholungen."
      ],
      atmung: "Ruhig weiteratmen, beim Drücken ausatmen.",
      fehler: [
        "Kopf kippt nach hinten, das Kinn geht hoch: der Blick bleibt waagerecht.",
        "Hohlkreuz: Rippen unten lassen.",
        "Zu kräftig drücken: sanfter Druck reicht."
      ],
      vorteile: [
        "Gibt klare Rückmeldung über die Kopfposition.",
        "Verbindet Kopf-, Brustwirbelsäulen- und Beckenhaltung.",
        "Gute Vorübung für den Wandengel."
      ],
      tipps: [
        "Wenn der Kopf die Wand ohne Hohlkreuz nicht erreicht, leg ein dünnes Kissen dahinter.",
        "Direkt im Anschluss an Dehnungen der Brust besonders sinnvoll."
      ],
      varianten: "Leichter: Kinn einziehen frei. Schwerer: in Rückenlage mit leichtem Kopfanheben.",
      sicherheit: "Bei Nackenschmerzen sanft üben und bei Ausstrahlung abbrechen."
    }
  },
  {
    id: "nacken_cars",
    name: "Nackenkreisen kontrolliert (CARs)",
    auch: ["Neck CARs", "Cervical CARs", "Controlled Neck Rotations"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 2,
    info: {
      kurz: "Langsames, aktives Kreisen des Kopfes durch den größtmöglichen schmerzfreien Bewegungsumfang bei ruhigem Oberkörper. Hält die Halswirbelsäule in allen Richtungen beweglich.",
      ausfuehrung: [
        "Steh oder sitz aufrecht, spann Bauch und Gesäß leicht an und lass die Schultern tief.",
        "Zieh das Kinn zur Brust, als würdest du ein Doppelkinn machen.",
        "Führe den Kopf langsam zur Seite, das Ohr Richtung Schulter.",
        "Führe ihn dann nach hinten oben, ohne den Kopf in den Nacken fallen zu lassen. Der Hinterkopf gleitet nach hinten.",
        "Weiter zur anderen Seite und zurück zur Brust. Ein Kreis dauert etwa 10 Sekunden.",
        "Mache 3 Kreise in jede Richtung."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Kopf fällt hinten passiv in den Nacken: aktiv führen und hinten kleiner kreisen.",
        "Zu schnell: langsam und bewusst.",
        "Schultern ziehen mit hoch: Schultern locker und tief."
      ],
      vorteile: [
        "Bewegt die Halswirbelsäule in alle Richtungen.",
        "Zeigt eingeschränkte oder empfindliche Bereiche.",
        "Gut als morgendlicher Gelenkcheck."
      ],
      tipps: [
        "Kleiner, kontrollierter Kreis ist besser als ein großer, unkontrollierter.",
        "Kombiniere sie mit Schulter- und Handgelenk-CARs."
      ],
      varianten: "Leichter: nur halbe Kreise von Schulter zu Schulter über vorn. Schwerer: langsamer mit mehr Körperspannung.",
      sicherheit: "Bei Schwindel, Arthrose der Halswirbelsäule oder Nackenverletzungen nur halbe Kreise vorn oder auslassen."
    }
  },
  {
    id: "nacken_rotation",
    name: "Kopfdrehen aktiv",
    auch: ["Neck Rotations", "Active Cervical Rotation", "Kopf drehen links rechts"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    info: {
      kurz: "Langsames Drehen des Kopfes nach links und rechts bis zur Endposition, mit kurzem Halten. Verbessert die Drehfähigkeit der Halswirbelsäule, etwa für den Schulterblick oder den ruhigen Kopf im Golfschwung.",
      ausfuehrung: [
        "Setz oder stell dich aufrecht hin, Kinn leicht eingezogen.",
        "Dreh den Kopf langsam nach links, so weit es angenehm geht, der Blick geht waagerecht über die Schulter.",
        "Halte die Endposition zwei Sekunden.",
        "Dreh durch die Mitte zur rechten Seite und halte ebenfalls zwei Sekunden.",
        "Achte darauf, dass die Schultern nicht mitdrehen.",
        "Mache 8 bis 10 Wiederholungen je Seite."
      ],
      atmung: "Ausatmen beim Drehen in die Endposition, einatmen zur Mitte.",
      fehler: [
        "Schultern drehen mit: Oberkörper ruhig lassen.",
        "Kinn hebt oder senkt sich: Blick waagerecht.",
        "Ruckartig drehen: langsam und gleichmäßig."
      ],
      vorteile: [
        "Erhält die Drehbeweglichkeit des Nackens.",
        "Hilfreich im Alltag, etwa beim Autofahren.",
        "Sehr einfach, für jeden geeignet."
      ],
      tipps: [
        "In der Endposition mit den Augen noch weiter schauen, das bringt oft ein paar Grad mehr.",
        "Im Sitzen mit fixiertem Oberkörper wird die Bewegung reiner."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: in der Endposition kurz leichten Gegendruck mit der Hand geben.",
      sicherheit: "Bei Schwindel oder Sehstörungen sofort abbrechen und abklären lassen."
    }
  },
  {
    id: "nacken_seitneigung",
    name: "Kopf seitlich neigen dynamisch",
    auch: ["Neck Side Bends", "Lateral Neck Flexion", "Ear to Shoulder"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken", "trapez"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Abwechselndes, langsames Neigen des Kopfes zur linken und rechten Schulter. Lockert die seitliche Nackenmuskulatur und eignet sich gut zum Aufwärmen.",
      ausfuehrung: [
        "Setz oder stell dich aufrecht hin, die Schultern sind locker und tief.",
        "Neige den Kopf langsam nach links, das linke Ohr wandert Richtung Schulter.",
        "Halte die Endposition kurz, der Blick bleibt nach vorn.",
        "Führe den Kopf durch die Mitte langsam zur rechten Seite.",
        "Die Schultern bleiben während der ganzen Bewegung unten.",
        "Mache 8 bis 10 Wiederholungen je Seite."
      ],
      atmung: "Ausatmen beim Neigen, einatmen zur Mitte.",
      fehler: [
        "Schulter kommt dem Ohr entgegen: Schulter bleibt unten.",
        "Kopf dreht sich mit: Nase zeigt nach vorn.",
        "Zu schnell: ruhig und gleichmäßig."
      ],
      vorteile: [
        "Lockert die seitlichen Nackenmuskeln.",
        "Gute Pausenübung bei Bildschirmarbeit.",
        "Einfach und überall machbar."
      ],
      tipps: [
        "Den gegenüberliegenden Arm locker nach unten Richtung Boden ziehen lassen verstärkt die Wirkung.",
        "Kombiniere sie mit Kopfdrehen und Schulterblattkreisen."
      ],
      varianten: "Leichter: kleinerer Umfang. Schwerer: am Ende zwei Sekunden halten oder die statische Trapezdehnung.",
      sicherheit: "Bei Kribbeln in Armen oder Schwindel abbrechen."
    }
  },
  {
    id: "nacken_retraktion_extension",
    name: "Kinn einziehen mit Kopfstreckung",
    auch: ["Retraction-Extension", "McKenzie Cervical Retraction Extension", "Chin Tuck with Extension"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken"],
    sekundaer: ["trapez"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: { nacken: 1 },
    stufe: 2,
    info: {
      kurz: "Aus dem eingezogenen Kinn heraus neigst du den Kopf kontrolliert nach hinten und schaust zur Decke. Eine aus der McKenzie-Methode bekannte Übung, die die Streckung der Halswirbelsäule aus einer guten Ausgangsposition übt.",
      ausfuehrung: [
        "Setz dich aufrecht hin, der Blick geht geradeaus.",
        "Zieh das Kinn waagerecht zurück, bis der Kopf über der Wirbelsäule steht.",
        "Neige aus dieser Position den Kopf langsam nach hinten und schau zur Decke.",
        "Mach in der Endposition einige sehr kleine Drehbewegungen nach links und rechts, wenn es angenehm ist.",
        "Komm langsam zurück, zuerst Kopf heben, dann Kinn loslassen.",
        "Mache 5 bis 10 Wiederholungen."
      ],
      atmung: "Einatmen beim Zurückneigen, ausatmen beim Zurückkommen.",
      fehler: [
        "Kopf ohne vorheriges Einziehen nach hinten kippen: immer zuerst das Kinn zurück.",
        "Zu schnell: langsam und kontrolliert.",
        "Mund weit offen: Mund geschlossen, Zähne locker."
      ],
      vorteile: [
        "Übt die Streckung der Halswirbelsäule aus einer guten Position.",
        "Ausgleich nach langem Blick nach unten auf Bildschirm oder Handy.",
        "Kann von Menschen mit Haltungsbeschwerden als angenehm empfunden werden."
      ],
      tipps: [
        "Wenn das Zurückneigen unangenehm ist, beim reinen Kinneinziehen bleiben.",
        "Gut mehrmals täglich in Arbeitspausen."
      ],
      varianten: "Leichter: nur Kinn einziehen. Schwerer: in Rückenlage mit Kopf über die Bettkante, nur unter fachlicher Anleitung.",
      sicherheit: "Bei Schwindel, Sehstörungen oder Ausstrahlung in die Arme sofort aufhören und abklären lassen."
    }
  },
  // ---------- Handgelenke und Unterarme ----------
  {
    id: "handgelenkbeuger_dehnen",
    name: "Unterarmbeuger dehnen",
    auch: ["Wrist Flexor Stretch", "Forearm Flexor Stretch", "Handgelenkbeuger dehnen"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis", "klettern"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Mit gestrecktem Arm ziehst du die Finger sanft nach hinten. Dehnt die Unterarmbeuger an der Innenseite des Unterarms, die bei Greifen, Klettern und Schlägersportarten viel arbeiten.",
      ausfuehrung: [
        "Strecke den rechten Arm vor dir auf Schulterhöhe aus, die Handfläche zeigt nach vorn, die Finger nach oben.",
        "Greif mit der linken Hand die Finger der rechten Hand.",
        "Zieh die Finger sanft zu dir, bis du die Dehnung an der Unterarminnenseite spürst.",
        "Der Ellbogen bleibt gestreckt, aber nicht verriegelt.",
        "Halte 20 bis 30 Sekunden.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas weiter ziehen.",
      fehler: [
        "Ellbogen gebeugt: dann fehlt ein Teil der Dehnung, Arm strecken.",
        "Daumen nicht mitgenommen: alle Finger greifen.",
        "Ruckartiges Ziehen: langsam und gleichmäßig."
      ],
      vorteile: [
        "Dehnt die Unterarmbeuger, die beim Greifen dauerhaft arbeiten.",
        "Gut nach Zugtraining, Klettern oder Griffkrafttraining.",
        "Überall und ohne Gerät machbar."
      ],
      tipps: [
        "Mit der Handfläche nach unten und Fingern zum Boden zeigst du den Arm in einer anderen Position und erreichst die Muskeln etwas anders.",
        "Mehrmals am Tag bei viel Maus- und Tastaturarbeit."
      ],
      varianten: "Leichter: Ellbogen leicht gebeugt. Schwerer: Unterarmbeuger dehnen im Vierfüßlerstand.",
      sicherheit: "Bei Kribbeln in den Fingern oder Schmerzen am Ellbogen sanft dehnen und abklären lassen."
    }
  },
  {
    id: "handgelenkstrecker_dehnen",
    name: "Unterarmstrecker dehnen",
    auch: ["Wrist Extensor Stretch", "Forearm Extensor Stretch", "Handgelenkstrecker dehnen"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Mit gestrecktem Arm und nach unten gebeugtem Handgelenk ziehst du den Handrücken sanft zu dir. Dehnt die Unterarmstrecker an der Außenseite, die bei Tastaturarbeit und Rückhandschlägen viel arbeiten.",
      ausfuehrung: [
        "Strecke den rechten Arm vor dir auf Schulterhöhe aus, die Handfläche zeigt nach unten.",
        "Beuge das Handgelenk, so dass die Finger zum Boden zeigen.",
        "Leg die linke Hand auf den rechten Handrücken und zieh die Hand sanft zu dir.",
        "Für mehr Dehnung eine lockere Faust machen und den Arm leicht nach innen drehen.",
        "Halte 20 bis 30 Sekunden mit der Dehnung an der Unterarmaußenseite.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen sanft weiterziehen.",
      fehler: [
        "Ellbogen gebeugt: Arm strecken.",
        "Zu fest ziehen: die Dehnung soll deutlich, aber nicht schmerzhaft sein.",
        "Schulter zieht hoch: Schulter tief halten."
      ],
      vorteile: [
        "Dehnt die Unterarmstrecker, die bei Bildschirmarbeit und Schlägersportarten viel leisten.",
        "Gute Ergänzung zur Beugerdehnung.",
        "Überall machbar."
      ],
      tipps: [
        "Die Faust-Variante mit Innendrehung des Arms ist deutlich intensiver.",
        "Kombiniere sie mit Handgelenkkreisen zum Aufwärmen."
      ],
      varianten: "Leichter: offene Hand, weniger Zug. Schwerer: Faust und Innendrehung oder Handrücken im Vierfüßlerstand auf den Boden.",
      sicherheit: "Bei Schmerzen außen am Ellbogen nur sanft dehnen und abklären lassen."
    }
  },
  {
    id: "handgelenkbeuger_vierfuessler",
    name: "Unterarmbeuger dehnen im Vierfüßlerstand",
    auch: ["Quadruped Wrist Flexor Stretch", "Reverse Wrist Stretch Kneeling", "Fingers Back Wrist Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    sekundaer: ["bizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Im Vierfüßlerstand drehst du die Hände so, dass die Finger zu den Knien zeigen, und lehnst dich nach hinten. Intensive Dehnung beider Unterarmbeuger gleichzeitig, bekannt aus Turnen und Calisthenics.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand auf eine Matte.",
        "Dreh die Hände nach außen, bis die Finger Richtung Knie zeigen und die Handflächen flach am Boden liegen.",
        "Die Arme sind gestreckt, die Ellbogenbeugen zeigen nach vorn.",
        "Schieb das Gesäß langsam nach hinten Richtung Fersen, bis die Dehnung an den Unterarminnenseiten deutlich wird.",
        "Halte 20 bis 30 Sekunden, die Handflächen bleiben am Boden.",
        "Komm nach vorn zurück, dreh die Hände zurück und schüttle sie aus."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen etwas weiter zurücksetzen.",
      fehler: [
        "Handballen heben ab: weniger weit zurück.",
        "Ellbogen gebeugt: Arme gestreckt lassen.",
        "Zu schnell zu tief: langsam herantasten."
      ],
      vorteile: [
        "Dehnt beide Unterarme gleichzeitig und intensiv.",
        "Gute Vorbereitung für Liegestütze, Handstand und Frontkniebeugen.",
        "Fein dosierbar über das Zurücksetzen."
      ],
      tipps: [
        "Starte mit Fingern zur Seite, bevor du sie ganz nach hinten drehst.",
        "Kleine Wippbewegungen nach vorn und hinten wärmen auf."
      ],
      varianten: "Leichter: Finger zur Seite oder im Stand mit gestrecktem Arm. Schwerer: weiter zurück, Ellbogen aktiv gestreckt.",
      sicherheit: "Bei Handgelenkschmerzen oder Ellbogenbeschwerden nur sehr sanft oder im Stand dehnen."
    }
  },
  {
    id: "handgelenkstrecker_vierfuessler",
    name: "Unterarmstrecker dehnen im Vierfüßlerstand",
    auch: ["Quadruped Wrist Extensor Stretch", "Back of Hand Stretch", "Dorsal Wrist Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Im Vierfüßlerstand legst du die Handrücken auf den Boden, die Finger zeigen zu den Knien, und lehnst dich behutsam zurück. Dehnt die Unterarmstrecker beider Seiten.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand auf eine weiche Matte.",
        "Dreh die Hände um, so dass die Handrücken am Boden liegen und die Finger zu den Knien zeigen.",
        "Die Arme sind gestreckt, die Hände liegen etwa unter den Schultern.",
        "Schieb das Gesäß behutsam Richtung Fersen, bis die Dehnung auf den Handrücken und Unterarmaußenseiten deutlich wird.",
        "Halte 15 bis 30 Sekunden.",
        "Komm nach vorn zurück, dreh die Hände um und lockere sie."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen behutsam weiter zurück.",
      fehler: [
        "Zu viel Gewicht auf den Händen: mehr Gewicht auf den Knien lassen.",
        "Ellbogen gebeugt: gestreckt lassen.",
        "Zu weit zurück: diese Dehnung ist intensiv, langsam steigern."
      ],
      vorteile: [
        "Dehnt beide Unterarmstrecker gleichzeitig.",
        "Gute Vorbereitung auf Handstand und Handgelenkbelastung.",
        "Ergänzt die Beugerdehnung im Vierfüßlerstand."
      ],
      tipps: [
        "Weiche Matte oder Handtuch unter den Handrücken.",
        "Erst die Beuger, dann die Strecker dehnen."
      ],
      varianten: "Leichter: Unterarmstrecker dehnen im Stand. Schwerer: weiter zurücksetzen.",
      sicherheit: "Bei Handgelenkschmerzen oder Ganglion nicht ausführen."
    }
  },
  {
    id: "handgelenk_finger_seitlich",
    name: "Handgelenkdehnung mit seitlichen Fingern",
    auch: ["Quadruped Wrist Stretch Fingers Out", "Lateral Wrist Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Im Vierfüßlerstand zeigen die Finger nach außen, und du verlagerst das Gewicht sanft von Seite zu Seite und vor und zurück. Mobilisiert die Handgelenke in einer Mischung aus Streckung und seitlicher Neigung.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand auf eine Matte.",
        "Dreh beide Hände so, dass die Finger nach außen zur Seite zeigen, die Handflächen liegen flach.",
        "Verlagere das Gewicht langsam nach links und rechts.",
        "Kreise dann mit dem Oberkörper über den Händen in kleinen Kreisen.",
        "Die Handflächen bleiben dabei am Boden.",
        "Mache 10 bis 15 Bewegungen in jede Richtung."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Handballen heben ab: kleineren Umfang wählen.",
        "Zu viel Gewicht: mehr auf die Knie verlagern.",
        "Zu schnell: ruhig und kontrolliert."
      ],
      vorteile: [
        "Bewegt die Handgelenke in Richtungen, die im Training selten vorkommen.",
        "Gute Vorbereitung auf Liegestütze und Stützübungen.",
        "Schonend und dosierbar."
      ],
      tipps: [
        "Teil einer kompletten Handgelenkroutine: Finger nach vorn, zur Seite, nach hinten.",
        "Vor dem Training zwei bis drei Minuten genügen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: mehr Gewicht und größere Kreise.",
      sicherheit: "Bei Handgelenkbeschwerden nur sehr sanft."
    }
  },
  {
    id: "gebetsdehnung",
    name: "Gebetsdehnung für die Handgelenke",
    auch: ["Prayer Stretch", "Wrist Prayer Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 1,
    info: {
      kurz: "Die Handflächen liegen vor der Brust aneinander, und du senkst die Hände langsam ab, während die Handflächen Kontakt halten. Dehnt die Unterarmbeuger beidseitig.",
      ausfuehrung: [
        "Leg die Handflächen vor der Brust aneinander, die Finger zeigen nach oben, die Ellbogen zeigen zur Seite.",
        "Senk die Hände langsam Richtung Bauchnabel, die Handflächen bleiben fest aneinander.",
        "Die Ellbogen gehen dabei weiter zur Seite.",
        "Stoppe, wenn die Dehnung in den Unterarmen deutlich wird oder die Handballen sich trennen.",
        "Halte 20 bis 30 Sekunden.",
        "Lös die Hände und schüttle sie aus."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Hände etwas tiefer sinken lassen.",
      fehler: [
        "Handballen trennen sich: nicht so tief.",
        "Schultern ziehen hoch: Schultern tief lassen.",
        "Nur die Finger berühren sich: ganze Handflächen zusammen."
      ],
      vorteile: [
        "Dehnt beide Unterarmbeuger gleichzeitig.",
        "Unauffällig am Schreibtisch.",
        "Sanfter als die Vierfüßlervariante."
      ],
      tipps: [
        "Kombiniere sie direkt mit der umgekehrten Gebetsdehnung.",
        "Gut in Pausen bei viel Tastaturarbeit."
      ],
      varianten: "Leichter: Hände höher halten. Schwerer: Unterarmbeuger dehnen im Vierfüßlerstand.",
      sicherheit: "Bei Kribbeln in den Fingern sofort lösen."
    }
  },
  {
    id: "umgekehrte_gebetsdehnung",
    name: "Umgekehrte Gebetsdehnung",
    auch: ["Reverse Prayer Stretch", "Wrist Reverse Prayer"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Die Handrücken liegen vor dem Körper aneinander, die Finger zeigen nach unten, und du hebst die Hände langsam an. Dehnt die Unterarmstrecker beidseitig.",
      ausfuehrung: [
        "Halte die Hände vor dem Bauch, die Finger zeigen nach unten.",
        "Leg die Handrücken aneinander, die Ellbogen zeigen zur Seite.",
        "Heb die Hände langsam Richtung Brust, die Handrücken bleiben in Kontakt.",
        "Stoppe, wenn die Dehnung auf den Handrücken und Unterarmaußenseiten deutlich wird.",
        "Halte 20 bis 30 Sekunden.",
        "Lös die Hände und schüttle sie aus."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Hände minimal höher führen.",
      fehler: [
        "Handrücken trennen sich: weniger hoch.",
        "Schultern ziehen hoch: tief lassen.",
        "Zu fest drücken: sanfter Kontakt genügt."
      ],
      vorteile: [
        "Dehnt beide Unterarmstrecker gleichzeitig.",
        "Gute Ergänzung zur Gebetsdehnung.",
        "Überall machbar."
      ],
      tipps: [
        "Direkt nach der Gebetsdehnung im Wechsel ausführen.",
        "Ellbogen weiter seitlich verstärkt die Dehnung."
      ],
      varianten: "Leichter: Hände tiefer. Schwerer: Unterarmstrecker dehnen im Vierfüßlerstand.",
      sicherheit: "Bei Handgelenkschmerzen nur sanft."
    }
  },
  {
    id: "handgelenk_cars",
    name: "Handgelenkkreisen kontrolliert (CARs)",
    auch: ["Wrist CARs", "Wrist Circles", "Controlled Wrist Rotations"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis", "klettern"],
    golf: 1,
    info: {
      kurz: "Langsames, aktives Kreisen des Handgelenks durch den größtmöglichen Bewegungsumfang, während der Unterarm festgehalten wird. Hält das Handgelenk in allen Richtungen beweglich.",
      ausfuehrung: [
        "Beuge den rechten Ellbogen 90 Grad und greif mit der linken Hand den rechten Unterarm kurz unter dem Handgelenk.",
        "Mach mit der rechten Hand eine lockere Faust.",
        "Beuge das Handgelenk so weit wie möglich nach unten.",
        "Führe die Faust langsam zur Kleinfingerseite, dann nach oben in die Streckung, dann zur Daumenseite und zurück nach unten.",
        "Bewege dich langsam, als würdest du einen möglichst großen Kreis zeichnen. Der Unterarm dreht nicht mit.",
        "Mache 3 bis 5 Kreise in jede Richtung, dann Seite wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Unterarm dreht mit: mit der anderen Hand fixieren.",
        "Zu schnell: langsame Kreise mit Kraft in jede Richtung.",
        "Kleiner Kreis: so groß wie möglich bewegen."
      ],
      vorteile: [
        "Hält das Handgelenk in allen Richtungen beweglich.",
        "Gute Aufwärmübung vor Stützübungen, Klettern und Schlägersport.",
        "Zeigt eingeschränkte Bereiche."
      ],
      tipps: [
        "Mit offener Hand und gespreizten Fingern verändert sich die Wirkung.",
        "Jeden Morgen als Teil einer kurzen Gelenkroutine."
      ],
      varianten: "Leichter: lockeres Kreisen ohne Fixierung. Schwerer: langsamer mit mehr Spannung.",
      sicherheit: "Bei akuten Handgelenkschmerzen nur im schmerzfreien Bereich."
    }
  },
  {
    id: "handgelenk_wippen",
    name: "Handgelenkwippen im Vierfüßlerstand",
    auch: ["Quadruped Wrist Rocks", "Wrist Rocks", "Wrist Shifts"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Im Vierfüßlerstand mit Fingern nach vorn verlagerst du den Oberkörper rhythmisch nach vorn über die Hände und zurück. Bereitet die Handgelenke auf Stützbelastung wie Liegestütz und Handstand vor.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, Hände schulterbreit unter den Schultern, Finger gespreizt nach vorn.",
        "Drück die Handflächen und Fingerkuppen fest in den Boden.",
        "Schieb die Schultern langsam nach vorn über die Hände hinaus, so dass sich das Handgelenk weiter streckt.",
        "Halte kurz und schieb dich zurück.",
        "Steigere langsam die Vorlage.",
        "Mache 10 bis 15 Wiederholungen."
      ],
      atmung: "Ausatmen beim Vorschieben, einatmen beim Zurückkommen.",
      fehler: [
        "Handballen heben ab: weniger weit nach vorn.",
        "Ellbogen beugen: Arme gestreckt lassen.",
        "Zu schnell große Vorlage: langsam steigern."
      ],
      vorteile: [
        "Wärmt die Handgelenke für Stützübungen auf.",
        "Verbessert die Handgelenkstreckung unter Belastung.",
        "Einfach und gut dosierbar."
      ],
      tipps: [
        "Danach mit Fingern zur Seite und nach hinten wiederholen.",
        "Vor Liegestützen und Frontkniebeugen besonders sinnvoll."
      ],
      varianten: "Leichter: weniger Vorlage, mehr Gewicht auf den Knien. Schwerer: aus dem Liegestütz mit gestreckten Beinen.",
      sicherheit: "Bei Handgelenkschmerzen auf Fäusten stützen oder auslassen."
    }
  },
  {
    id: "handgelenk_radial_ulnar",
    name: "Handgelenk seitlich kippen",
    auch: ["Radial and Ulnar Deviation", "Wrist Side-to-Side", "Hammer Wrist Tilts"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["stab"], ["golfschlaeger"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Du kippst das Handgelenk abwechselnd zur Daumen- und zur Kleinfingerseite, frei oder mit einem Stab am Ende in der Hand. Mobilisiert genau die Bewegung, die beim Anwinkeln der Handgelenke im Golfschwung gebraucht wird.",
      ausfuehrung: [
        "Stell dich aufrecht hin und halte den rechten Arm seitlich am Körper, der Ellbogen ist 90 Grad gebeugt, der Daumen zeigt nach oben.",
        "Halte einen leichten Stab am unteren Ende fest oder arbeite ohne Gerät mit lockerer Faust.",
        "Kipp das Handgelenk langsam nach oben zur Daumenseite, so dass der Stab Richtung Gesicht zeigt.",
        "Kipp es dann nach unten zur Kleinfingerseite, so dass der Stab nach hinten unten zeigt.",
        "Der Unterarm bleibt ruhig, nur das Handgelenk bewegt sich.",
        "Mache 12 bis 15 langsame Wiederholungen, dann Seite wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Unterarm dreht oder der Ellbogen bewegt mit: Ellbogen am Körper fixieren.",
        "Zu schnell: langsam bis in die Endpositionen.",
        "Zu langer Hebel zu Beginn: Stab weiter oben greifen."
      ],
      vorteile: [
        "Verbessert die seitliche Beweglichkeit des Handgelenks.",
        "Wärmt die Unterarmmuskeln auf.",
        "Mit Stab wird daraus eine leichte Kräftigung."
      ],
      tipps: [
        "Je weiter unten du den Stab greifst, desto mehr Hebel und Kraftanteil.",
        "Vor der Golfrunde mit dem Schläger umgedreht am Schlägerkopf greifen."
      ],
      varianten: "Leichter: ohne Stab. Schwerer: Stab weiter unten greifen oder mit leichter Kurzhantel an einem Ende.",
      sicherheit: "Bei Schmerzen an der Daumenseite des Handgelenks nur sanft und abklären lassen.",
      golf: "Das Anwinkeln der Handgelenke im Rückschwung ist eine Bewegung zur Daumenseite. Freie Beweglichkeit hier hilft beim Setzen des Schlägers und beim Halten des Winkels bis in den Treffmoment."
    }
  },
  {
    id: "unterarm_rotation_stab",
    name: "Unterarmdrehen mit Stab",
    auch: ["Forearm Pronation Supination", "Stick Forearm Rotations", "Hammer Rotations"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    sekundaer: ["bizeps"],
    geraete: [["stab"], ["golfschlaeger"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Mit dem Ellbogen am Körper drehst du den Unterarm, so dass ein senkrecht gehaltener Stab nach links und rechts kippt. Mobilisiert die Ein- und Auswärtsdrehung des Unterarms.",
      ausfuehrung: [
        "Stell oder setz dich aufrecht hin, der rechte Ellbogen liegt 90 Grad gebeugt am Körper.",
        "Halte einen Stab in der Mitte senkrecht nach oben oder arbeite mit offener Hand ohne Gerät.",
        "Dreh den Unterarm langsam nach innen, bis die Handfläche nach unten zeigt und der Stab zur Seite kippt.",
        "Dreh ihn nach außen, bis die Handfläche nach oben zeigt.",
        "Der Ellbogen bleibt am Körper, die Schulter bleibt ruhig.",
        "Mache 12 bis 15 langsame Wiederholungen, dann Seite wechseln."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Ellbogen wandert vom Körper weg: am Körper fixieren.",
        "Schulter dreht mit: nur der Unterarm bewegt sich.",
        "Zu schnell: langsam bis in die Endpositionen."
      ],
      vorteile: [
        "Erhält die Drehbeweglichkeit des Unterarms.",
        "Wärmt die Unterarmmuskeln für Schläger- und Griffsport auf.",
        "Mit Stab leicht steigerbar."
      ],
      tipps: [
        "Den Stab weiter unten greifen erhöht den Hebel.",
        "Gut mit Handgelenkkreisen kombinierbar."
      ],
      varianten: "Leichter: ohne Stab. Schwerer: Stab weiter unten greifen oder mit leichter Kurzhantel an einem Ende.",
      sicherheit: "Bei Ellbogenschmerzen nur ohne Gewicht und im schmerzfreien Bereich."
    }
  },
  {
    id: "finger_spreizen",
    name: "Finger spreizen gegen Widerstand",
    auch: ["Finger Extensions", "Rubber Band Finger Extensions", "Finger Extensor Training"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    sport: ["klettern", "golf"],
    golf: 1,
    info: {
      kurz: "Du öffnest die Finger kräftig gegen einen Gummiring oder ein Haushaltsgummi. Trainiert die Fingerstrecker als Ausgleich zu den viel stärker beanspruchten Beugern beim Greifen.",
      ausfuehrung: [
        "Leg einen Gummiring oder ein Haushaltsgummi um alle Finger und den Daumen auf Höhe der Fingermittelglieder.",
        "Beginne mit den Fingerspitzen zusammen, die Hand ist leicht gebeugt.",
        "Spreize die Finger kräftig so weit wie möglich auseinander.",
        "Halte eine Sekunde und lass die Finger langsam zurückkommen.",
        "Ohne Gummi: eine Faust machen und die Finger kräftig weit spreizen.",
        "Mache 15 bis 25 Wiederholungen je Hand."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Zu schnelle Wiederholungen: kontrolliert öffnen und schließen.",
        "Zu dickes Gummi: lieber leichter und mehr Wiederholungen.",
        "Handgelenk knickt ab: gerade halten."
      ],
      vorteile: [
        "Gleicht die Belastung der Unterarmbeuger beim Greifen aus.",
        "Wird von Kletterern und Schlägersportlern gern als Ausgleich genutzt.",
        "Mit einfachsten Mitteln machbar."
      ],
      tipps: [
        "Nach Griffkrafttraining oder Klettern als Ausgleich.",
        "Auch gut beim Fernsehen oder im Büro."
      ],
      varianten: "Leichter: ohne Gummi. Schwerer: mehrere Gummis oder spezielles Fingerband.",
      sicherheit: "Bei Schmerzen in den Fingergelenken oder Sehnenscheiden nur sanft und abklären lassen."
    }
  },
  {
    id: "sehnengleiten",
    name: "Sehnengleitübungen der Finger",
    auch: ["Tendon Glides", "Tendon Gliding Exercises", "Finger Tendon Glides"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Eine Abfolge von fünf Handpositionen, durch die du die Finger langsam bewegst. Aus der Handtherapie bekannt, lässt sie die Beugesehnen der Finger durch ihren ganzen Weg gleiten.",
      ausfuehrung: [
        "Halte die Hand vor dir, der Ellbogen ist gebeugt, das Handgelenk gerade. Starte mit gestreckten Fingern.",
        "Position 2, Hakenfaust: beuge nur die Fingerend- und Mittelgelenke, die Grundgelenke bleiben gestreckt.",
        "Position 3, volle Faust: schließe die Hand vollständig.",
        "Position 4, Tischposition: strecke die Finger, aber beuge die Grundgelenke 90 Grad, die Finger bilden eine Platte.",
        "Position 5, gerade Faust: beuge Grund- und Mittelgelenke, die Fingerspitzen berühren die Handfläche, die Endgelenke bleiben gestreckt.",
        "Kehre nach jeder Position zur gestreckten Hand zurück und mache 5 bis 10 Durchgänge."
      ],
      atmung: "Ruhig und gleichmäßig atmen.",
      fehler: [
        "Positionen verschwimmen: jede Position deutlich einnehmen.",
        "Handgelenk knickt: gerade halten.",
        "Zu schnell: jede Position zwei bis drei Sekunden halten."
      ],
      vorteile: [
        "Bewegt die Fingersehnen durch ihren gesamten Weg.",
        "Wird in der Handtherapie häufig eingesetzt.",
        "Gute Lockerung bei viel Tipp- und Greifarbeit."
      ],
      tipps: [
        "Mehrmals täglich kurz ausführen.",
        "Eine Abbildung der Positionen hilft beim Lernen."
      ],
      varianten: "Leichter: weniger Positionen. Schwerer: jede Position länger halten.",
      sicherheit: "Bei Kribbeln oder Taubheit in den Fingern ärztlich abklären lassen."
    }
  },
  {
    id: "fingerdehnung",
    name: "Finger einzeln dehnen",
    auch: ["Finger Stretch", "Individual Finger Extension Stretch", "Thumb Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du ziehst jeden Finger und den Daumen einzeln sanft nach hinten. Dehnt die Fingerbeuger gezielt und lockert die Hand nach intensiver Griffarbeit.",
      ausfuehrung: [
        "Halte die rechte Hand vor dir, die Handfläche zeigt nach vorn.",
        "Greif mit der linken Hand den rechten Zeigefinger und zieh ihn sanft nach hinten.",
        "Halte jeden Finger etwa 10 Sekunden in der Dehnung.",
        "Wiederhole mit Mittelfinger, Ringfinger und kleinem Finger.",
        "Zieh zum Schluss den Daumen sanft nach hinten und zur Seite.",
        "Wechsle danach auf die andere Hand."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen locker lassen.",
      fehler: [
        "Zu fest ziehen: sanfte Dehnung genügt.",
        "Handgelenk gebeugt: gerade oder leicht gestreckt halten.",
        "Hektik: jeder Finger bekommt seine Zeit."
      ],
      vorteile: [
        "Gezielte Dehnung der einzelnen Fingerbeuger.",
        "Hilfreich nach Klettern, Griffkrafttraining und Handarbeit.",
        "Überall machbar."
      ],
      tipps: [
        "Mit gestrecktem Arm wird die Dehnung stärker.",
        "Kombiniere sie mit dem Fingerspreizen."
      ],
      varianten: "Leichter: Handgelenk gebeugt. Schwerer: Arm gestreckt und Handgelenk gestreckt.",
      sicherheit: "Bei Fingergelenkschmerzen oder nach Verletzungen nur sanft."
    }
  },
  {
    id: "unterarm_ausrollen",
    name: "Unterarme ausrollen",
    auch: ["Forearm Foam Rolling", "Foam Roll Forearms"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["faszienrolle"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf", "tennis", "klettern"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Im Kniestand legst du den Unterarm auf die Faszienrolle und rollst ihn mit dem Druck der anderen Hand aus. Lockert die Unterarmmuskeln nach Griff- und Schlägerbelastung.",
      ausfuehrung: [
        "Knie dich vor eine Faszienrolle und leg den rechten Unterarm mit der Handfläche nach oben darauf.",
        "Leg die linke Hand auf den rechten Unterarm, um Druck zu geben.",
        "Rolle langsam vom Handgelenk bis kurz vor den Ellbogen und zurück.",
        "Bleib an festen Stellen 10 bis 15 Sekunden und öffne und schließe dabei die Hand.",
        "Dreh den Arm um und rolle die Außenseite mit der Handfläche nach unten.",
        "Insgesamt 45 bis 60 Sekunden je Arm."
      ],
      atmung: "Ruhig atmen, an festen Stellen mit dem Ausatmen locker lassen.",
      fehler: [
        "Direkt über Knochen oder Ellbogen rollen: auf den Muskeln bleiben.",
        "Zu viel Druck: angenehm deutlich, nicht schmerzhaft.",
        "Zu schnell: langsam rollen."
      ],
      vorteile: [
        "Kann das Spannungsgefühl in den Unterarmen verringern.",
        "Gut nach Griffkraft, Klettern oder viel Tastaturarbeit.",
        "Leicht selbst zu dosieren."
      ],
      tipps: [
        "Ein Massageball ist für die Unterarme oft noch gezielter.",
        "Danach die Unterarmbeuger und Strecker dehnen."
      ],
      varianten: "Leichter: weniger Druck. Schwerer: Hand dabei öffnen und schließen oder das Handgelenk bewegen.",
      sicherheit: "Nicht über Sehnenscheidenentzündungen oder akute Verletzungen rollen."
    }
  },
  {
    id: "skin_the_cat",
    name: "Skin the Cat",
    auch: ["Skin the Cat", "Hautabzieher", "Bar Skin the Cat"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "schulter_vorn", "latissimus"],
    sekundaer: ["bauch", "bizeps", "unterarm"],
    geraete: [["schlingentrainer"], ["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Turnelement, bei dem du dich aus dem Hang an Ringen oder Stange mit angezogenen Beinen rückwärts durch die Arme drehst, bis zum Deutschen Hängen und zurück. Verbindet Schulterbeweglichkeit in der Streckung mit Rumpfkraft.",
      ausfuehrung: [
        "Häng dich mit schulterbreitem Griff an Ringe, Schlingen oder eine Stange, die Arme sind gestreckt.",
        "Zieh die Knie zur Brust und roll das Becken nach hinten oben, so dass die Beine zwischen den Armen hindurch nach hinten gehen.",
        "Dreh dich langsam weiter, bis die Beine hinter dir nach unten zeigen und die Schultern in die Streckung kommen (Deutsches Hängen).",
        "Bleib nur so tief, wie die Schulter es ohne Schmerz erlaubt, und halte kurz.",
        "Zieh die Beine mit Bauchkraft zurück durch die Arme in den normalen Hang.",
        "Mache 2 bis 5 kontrollierte Wiederholungen."
      ],
      atmung: "Ausatmen beim Durchdrehen, in der Endposition ruhig weiteratmen, ausatmen beim Zurückziehen.",
      fehler: [
        "Schwung statt Kontrolle: die Bewegung langsam ausführen.",
        "Fallen in die tiefe Position: Schultern kontrolliert absenken.",
        "Ellbogen gebeugt in der Endposition: Arme gestreckt halten."
      ],
      vorteile: [
        "Trainiert Beweglichkeit und Kontrolle der Schulter in der Streckung.",
        "Stärkt Bauch und Rumpf beim Durchziehen der Beine.",
        "Bereitet auf anspruchsvolle Turn- und Calisthenics-Elemente vor."
      ],
      tipps: [
        "Starte an Schlingen in niedriger Höhe mit den Füßen am Boden als Sicherung.",
        "Beherrsche zuerst das Deutsche Hängen mit Fußunterstützung."
      ],
      varianten: "Leichter: Deutsches Hängen mit Füßen am Boden oder nur bis zur umgedrehten Hängeposition. Schwerer: mit gestreckten Beinen.",
      sicherheit: "Nur mit gesunden Schultern und Erfahrung im Hängen. Nicht bei Instabilität, früheren Ausrenkungen oder Bizepssehnenbeschwerden."
    }
  },
  // ---------- Ganzkörper ----------
  {
    id: "sonnengruss",
    name: "Sonnengruß A",
    auch: ["Sun Salutation A", "Surya Namaskar A"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ganzkoerper"],
    sekundaer: ["beinbeuger", "latissimus", "bauch", "brust"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Klassische Yoga-Abfolge aus Armheben, Vorbeuge, Brett, heraufschauendem und herabschauendem Hund. Bewegt den ganzen Körper durch Beugung und Streckung und eignet sich als Aufwärmen oder ruhiger Start in den Tag.",
      ausfuehrung: [
        "Steh aufrecht am vorderen Mattenende, die Füße hüftbreit. Heb die Arme mit dem Einatmen seitlich über den Kopf.",
        "Beuge dich mit dem Ausatmen aus der Hüfte nach vorn, die Hände Richtung Boden, die Knie dürfen gebeugt sein.",
        "Richte den Rücken mit dem Einatmen halb auf, die Hände an den Schienbeinen, der Rücken lang.",
        "Setz die Hände ab, tritt oder springe zurück ins Brett und senk dich kontrolliert ab, bei Bedarf mit Knien am Boden.",
        "Schieb dich mit dem Einatmen in den heraufschauenden Hund oder die Kobra, mit dem Ausatmen hoch in den herabschauenden Hund und bleib dort drei Atemzüge.",
        "Geh mit den Füßen zu den Händen, richte dich über die halbe Vorbeuge auf und heb die Arme. Mache 3 bis 5 Runden."
      ],
      atmung: "Jede Bewegung folgt einem Atemzug: Aufrichten und Öffnen mit dem Einatmen, Beugen und Absenken mit dem Ausatmen.",
      fehler: [
        "Rundrücken in der Vorbeuge: Knie beugen und aus der Hüfte kippen.",
        "Durchhängen im Brett: Bauch und Gesäß fest.",
        "Schultern zu den Ohren im heraufschauenden Hund: Schultern nach hinten unten ziehen.",
        "Zu schnell: der Atem gibt das Tempo vor."
      ],
      vorteile: [
        "Bewegt in wenigen Minuten den ganzen Körper.",
        "Dehnt Beinrückseite, Waden, Schultern und Bauch.",
        "Kräftigt Arme und Rumpf in Brett und Absenken.",
        "Verbindet Bewegung und Atmung und kann beruhigend wirken."
      ],
      tipps: [
        "Für Einsteiger: Knie beim Absenken am Boden und Kobra statt heraufschauendem Hund.",
        "Drei langsame Runden sind ein sehr gutes Aufwärmen vor dem Training."
      ],
      varianten: "Leichter: ohne Absenken aus dem Brett, Kobra statt heraufschauender Hund. Schwerer: Sonnengruß B mit Stuhl- und Kriegerhaltung.",
      sicherheit: "Bei Handgelenk-, Schulter- oder Bandscheibenbeschwerden einzelne Elemente anpassen. Bei Bluthochdruck langsam aufrichten."
    }
  },
  {
    id: "sonnengruss_b",
    name: "Sonnengruß B",
    auch: ["Sun Salutation B", "Surya Namaskar B"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ganzkoerper"],
    sekundaer: ["quadrizeps", "hueftbeuger", "beinbeuger", "schulter_vorn"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { handgelenk: 1, schulter: 1, knie: 1 },
    stufe: 3,
    info: {
      kurz: "Erweiterte Form des Sonnengrußes mit Stuhlhaltung und Krieger 1 auf beiden Seiten. Fordert mehr Kraft in Beinen und Schultern und bewegt zusätzlich die Hüftbeuger.",
      ausfuehrung: [
        "Steh am vorderen Mattenende, die Füße zusammen. Beuge mit dem Einatmen die Knie in die Stuhlhaltung und heb die Arme über den Kopf.",
        "Beuge dich mit dem Ausatmen nach vorn, richte dich halb auf, tritt zurück ins Brett und senk dich ab.",
        "Geh über den heraufschauenden Hund oder die Kobra in den herabschauenden Hund.",
        "Setz den rechten Fuß zwischen die Hände, dreh die hintere Ferse ab und richte dich mit dem Einatmen in Krieger 1 auf, die Arme über dem Kopf.",
        "Setz die Hände ab, geh zurück ins Brett, senk dich ab, über Kobra in den Hund und wiederhole Krieger 1 mit links.",
        "Nach dem letzten Hund nach vorn gehen, über die Vorbeuge in die Stuhlhaltung aufrichten. Mache 2 bis 3 Runden."
      ],
      atmung: "Ein Atemzug pro Bewegung, im herabschauenden Hund am Ende drei bis fünf Atemzüge.",
      fehler: [
        "Knie fällt in der Stuhlhaltung nach innen: Knie über den Zehen.",
        "Vorderes Knie schiebt im Krieger über den Fuß: Knie über dem Sprunggelenk.",
        "Hohlkreuz mit Armen über Kopf: Rippen unten lassen.",
        "Absenken ohne Spannung: Knie absetzen, wenn die Kraft nachlässt."
      ],
      vorteile: [
        "Bewegt zusätzlich Beine und Hüftbeuger.",
        "Kräftigt Beine und Schultern mehr als Sonnengruß A.",
        "Gutes, kompaktes Ganzkörper-Aufwärmen."
      ],
      tipps: [
        "Erst Sonnengruß A sicher beherrschen.",
        "Lieber weniger Runden in ruhigem Atemrhythmus als viele hektische."
      ],
      varianten: "Leichter: Sonnengruß A. Schwerer: im Krieger und in der Stuhlhaltung länger halten.",
      sicherheit: "Bei Knie-, Handgelenk- oder Schulterbeschwerden einzelne Elemente anpassen."
    }
  },
  {
    id: "herabschauender_hund",
    name: "Herabschauender Hund",
    auch: ["Downward Dog", "Downward-Facing Dog", "Adho Mukha Svanasana"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "waden", "latissimus"],
    sekundaer: ["schulter_vorn", "oberer_ruecken", "unterarm"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Yoga-Grundhaltung in Form eines umgedrehten V: Hände und Füße am Boden, das Becken hoch. Dehnt Beinrückseite, Waden, Schultern und Latissimus zugleich.",
      ausfuehrung: [
        "Starte im Vierfüßlerstand, die Hände etwas vor den Schultern, die Finger gespreizt.",
        "Stell die Zehen auf und schieb das Becken nach hinten oben, bis Arme und Rücken eine Linie bilden.",
        "Drück die Hände fest in den Boden und schieb die Brust Richtung Oberschenkel.",
        "Die Knie dürfen gebeugt sein, wichtig ist ein langer Rücken. Die Fersen sinken Richtung Boden.",
        "Der Kopf hängt locker zwischen den Armen.",
        "Halte 30 bis 60 Sekunden, dann Knie ablegen."
      ],
      atmung: "Ruhig und tief atmen, mit dem Ausatmen das Becken weiter nach hinten oben schieben.",
      fehler: [
        "Rundrücken mit gestreckten Knien: Knie beugen, das Becken nach hinten oben kippen.",
        "Schultern zu den Ohren: Arme nach außen drehen, Schultern weg von den Ohren.",
        "Gewicht nur auf den Handballen: ganze Hand und Fingerkuppen drücken."
      ],
      vorteile: [
        "Dehnt die gesamte Körperrückseite in einer Haltung.",
        "Öffnet die Schultern über Kopf.",
        "Kräftigt Schultern und Arme leicht."
      ],
      tipps: [
        "Abwechselnd die Fersen in den Boden treten lockert die Waden.",
        "Bei sehr festen Beinrückseiten bleiben die Knie deutlich gebeugt."
      ],
      varianten: "Leichter: halber Hund an der Wand. Schwerer: ein Bein nach hinten oben heben.",
      sicherheit: "Bei Handgelenk- oder Schulterschmerzen sowie bei Bluthochdruck oder Augenerkrankungen mit erhöhtem Augeninnendruck vorsichtig."
    }
  },
  {
    id: "hund_kobra_flow",
    name: "Hund-Kobra-Flow",
    auch: ["Downward Dog to Cobra", "Down Dog to Up Dog", "Dog to Cobra Flow"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ganzkoerper"],
    sekundaer: ["bauch", "beinbeuger", "latissimus", "brust"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, schulter: 1, ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Fließender Wechsel zwischen herabschauendem Hund und Kobra oder heraufschauendem Hund. Bewegt die Wirbelsäule abwechselnd in Beugung und Streckung und wärmt den ganzen Körper auf.",
      ausfuehrung: [
        "Starte im herabschauenden Hund, die Hände schulterbreit, die Füße hüftbreit.",
        "Schieb den Körper mit dem Einatmen nach vorn, bis die Schultern über den Händen sind.",
        "Lass das Becken Richtung Boden sinken und öffne die Brust nach vorn oben in die Kobra oder den heraufschauenden Hund.",
        "Halte die Schultern tief, die Arme sind gestreckt oder leicht gebeugt.",
        "Schieb das Becken mit dem Ausatmen zurück nach hinten oben in den Hund.",
        "Mache 8 bis 10 fließende Wiederholungen."
      ],
      atmung: "Einatmen in die Kobra, ausatmen in den Hund.",
      fehler: [
        "Durchhängen im unteren Rücken: Gesäß leicht anspannen, Brust statt Bauch nach vorn.",
        "Schultern zu den Ohren in der Kobra: Schulterblätter nach hinten unten.",
        "Zu schnell: Atemrhythmus halten."
      ],
      vorteile: [
        "Mobilisiert Wirbelsäule, Schultern und Hüften in einer Bewegung.",
        "Dehnt Bauch und Beinrückseite im Wechsel.",
        "Wärmt schnell auf."
      ],
      tipps: [
        "Bei empfindlichem Rücken die Knie im Übergang ablegen.",
        "Gut als Teil eines kurzen Aufwärmens vor Krafttraining."
      ],
      varianten: "Leichter: aus dem Vierfüßlerstand mit Knien am Boden. Schwerer: im heraufschauenden Hund mit gehobenen Oberschenkeln.",
      sicherheit: "Bei Beschwerden im unteren Rücken die Streckung klein halten oder auslassen."
    }
  },
  {
    id: "inchworm",
    name: "Raupe",
    auch: ["Inchworm", "Inchworm Walkout", "Walkout"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "bauch"],
    sekundaer: ["schulter_vorn", "waden", "trizeps"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Aus dem Stand beugst du dich vor, gehst mit den Händen nach vorn bis in den Liegestütz und wieder zurück. Dynamische Dehnung der Beinrückseite mit Aktivierung von Rumpf und Schultern.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und beuge dich aus der Hüfte nach vorn, bis die Hände den Boden berühren. Die Knie dürfen leicht gebeugt sein.",
        "Lauf mit den Händen langsam nach vorn, bis du im hohen Brett bist, Schultern über den Händen.",
        "Halte kurz die Brettposition mit festem Bauch.",
        "Lauf mit den Händen zurück zu den Füßen, die Beine bleiben möglichst gestreckt.",
        "Richte dich auf oder wiederhole direkt aus der Vorbeuge.",
        "Mache 6 bis 10 Wiederholungen."
      ],
      atmung: "Ausatmen beim Vorbeugen, ruhig weiteratmen beim Laufen, im Brett einen Atemzug halten.",
      fehler: [
        "Durchhängen im Brett: Bauch und Gesäß fest.",
        "Zu große Handschritte: kleine Schritte, Kontrolle behalten.",
        "Knie durchgedrückt bei sehr steifer Beinrückseite: Knie leicht beugen."
      ],
      vorteile: [
        "Dehnt die Beinrückseite dynamisch.",
        "Aktiviert Bauch und Schultern.",
        "Gut als Aufwärmübung vor Sprints, Fußball und Krafttraining."
      ],
      tipps: [
        "Im Brett einen Liegestütz einbauen für mehr Kraftanteil.",
        "Mit den Füßen in kleinen Schritten zu den Händen gehen statt mit den Händen zurück, verstärkt die Dehnung."
      ],
      varianten: "Leichter: Knie stärker gebeugt, kleinerer Weg. Schwerer: Liegestütz im Brett oder Hände weit über das Brett hinaus führen.",
      sicherheit: "Bei Handgelenk- oder Schulterbeschwerden kleinerer Weg. Bei Rückenbeschwerden die Knie beugen."
    }
  },
  {
    id: "baer_hocke_flow",
    name: "Bär-zu-Hocke-Flow",
    auch: ["Bear to Squat", "Bear to Deep Squat Flow", "Squat to Bear"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ganzkoerper"],
    sekundaer: ["quadrizeps", "gesaess", "schulter_vorn", "bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, knie: 1, huefte: 1 },
    stufe: 2,
    info: {
      kurz: "Aus der Bärenposition auf Händen und Füßen schiebst du dich zurück in eine tiefe Hocke und wieder vor. Verbindet Hüft-, Sprunggelenk- und Schulterbeweglichkeit mit Rumpfkontrolle.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, stell die Zehen auf und heb die Knie ein paar Zentimeter vom Boden: die Bärenposition.",
        "Schieb das Gewicht langsam nach hinten, bis du in einer tiefen Hocke sitzt, die Hände bleiben vorn am Boden.",
        "Lass das Gesäß zu den Fersen sinken, die Fersen gehen Richtung Boden.",
        "Richte in der Hocke den Oberkörper kurz auf und heb die Hände, wenn möglich.",
        "Setz die Hände wieder ab und schieb dich zurück in die Bärenposition.",
        "Mache 6 bis 10 langsame Wiederholungen."
      ],
      atmung: "Ausatmen beim Absitzen in die Hocke, einatmen beim Vorschieben in den Bären.",
      fehler: [
        "Knie fallen nach innen: Knie in Richtung der Zehen.",
        "Rundrücken in der Hocke: Brust aufrichten, so weit es geht.",
        "Zu schnell: langsam und kontrolliert."
      ],
      vorteile: [
        "Mobilisiert Hüfte, Sprunggelenke und Schultern gleichzeitig.",
        "Schult die tiefe Hocke.",
        "Gut als Aufwärmen vor Kniebeugen."
      ],
      tipps: [
        "Füße etwas weiter als hüftbreit erleichtern die tiefe Hocke.",
        "In der Hocke die Ellbogen innen gegen die Knie drücken, um die Hüfte weiter zu öffnen."
      ],
      varianten: "Leichter: Knie am Boden und nur zurück in die Kindhaltung. Schwerer: in der Hocke Rotation mit einem Arm zur Decke.",
      sicherheit: "Bei Kniebeschwerden die Hocke nur so tief wie schmerzfrei."
    }
  },
  {
    id: "skorpion",
    name: "Skorpion in Bauchlage",
    auch: ["Prone Scorpion", "Scorpion Stretch"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "schraege_bauch", "brust"],
    sekundaer: ["quadrizeps", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["golf", "fussball"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "In Bauchlage führst du ein angewinkeltes Bein über den Körper zur Gegenseite, die Schultern bleiben am Boden. Dynamische Dehnung für Hüftbeuger, Bauch und Brust mit Rotation der Wirbelsäule.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Arme seitlich in T-Form ausgestreckt, die Stirn oder das Kinn am Boden.",
        "Beuge das rechte Knie und heb das rechte Bein vom Boden.",
        "Führe den rechten Fuß langsam über den Körper Richtung linke Hand.",
        "Die Schultern und Arme bleiben so gut es geht am Boden.",
        "Führe das Bein kontrolliert zurück und wechsle die Seite.",
        "Mache 6 bis 8 Wiederholungen je Seite."
      ],
      atmung: "Ausatmen beim Überkreuzen, einatmen beim Zurückführen.",
      fehler: [
        "Schwung: langsam und kontrolliert bewegen.",
        "Schultern heben ab: kleinerer Umfang.",
        "Schmerz im unteren Rücken: weniger weit drehen."
      ],
      vorteile: [
        "Dehnt Hüftbeuger, Bauch und Brust in einer Bewegung.",
        "Mobilisiert die Wirbelsäule in Rotation und Streckung.",
        "Gutes Aufwärmen vor Lauf- und Rotationssport."
      ],
      tipps: [
        "Kombiniere sie mit dem Skorpion in Rückenlage (Bein über den Körper in Rückenlage).",
        "Langsam steigern, zu Beginn nur halber Weg."
      ],
      varianten: "Leichter: kleiner Umfang, Fuß nur zur Mitte. Schwerer: in der Endposition zwei Sekunden halten.",
      sicherheit: "Bei Beschwerden im unteren Rücken nur sehr klein oder auslassen."
    }
  },
  {
    id: "kobra",
    name: "Kobra",
    auch: ["Cobra Pose", "Bhujangasana", "Prone Press-Up Light"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["bauch", "ruecken_unten"],
    sekundaer: ["brust", "hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "In Bauchlage hebst du mit Unterstützung der Hände die Brust vom Boden, das Becken bleibt liegen. Streckt die Wirbelsäule und dehnt Bauch und Brust.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Beine hüftbreit, die Fußrücken am Boden.",
        "Setz die Hände neben die unteren Rippen, die Ellbogen zeigen nach hinten und liegen nah am Körper.",
        "Heb mit dem Einatmen Kopf und Brust an, schieb das Brustbein nach vorn oben.",
        "Strecke die Arme nur so weit, wie das Becken am Boden bleibt und der untere Rücken angenehm ist.",
        "Halte die Schultern weg von den Ohren. Halte 15 bis 30 Sekunden.",
        "Leg dich mit dem Ausatmen wieder ab."
      ],
      atmung: "Einatmen beim Aufrichten, in der Haltung ruhig weiteratmen.",
      fehler: [
        "Schultern zu den Ohren: Schulterblätter nach hinten unten.",
        "Kopf weit in den Nacken: Blick schräg nach vorn.",
        "Zu hoch drücken bis es im Rücken staucht: Arme gebeugt lassen."
      ],
      vorteile: [
        "Streckt die Wirbelsäule als Ausgleich zum Sitzen.",
        "Dehnt Bauch, Brust und vordere Hüfte.",
        "Einsteigerfreundlich und gut dosierbar."
      ],
      tipps: [
        "Nimm die Hände kurz vom Boden, um zu spüren, wie viel die Rückenmuskeln selbst schaffen.",
        "Abwechselnd mit der Kindhaltung ausführen."
      ],
      varianten: "Leichter: Sphinx auf den Unterarmen. Schwerer: heraufschauender Hund mit gehobenen Oberschenkeln.",
      sicherheit: "Bei Wirbelgleiten, Spinalkanalstenose oder Schmerzen bei Rückstreckung nicht ohne Rücksprache."
    }
  },
  {
    id: "sphinx",
    name: "Sphinx",
    auch: ["Sphinx Pose", "Salamba Bhujangasana", "Prone on Elbows"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["bauch", "ruecken_unten"],
    sekundaer: ["brust", "hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "In Bauchlage stützt du dich auf die Unterarme und lässt den Rücken sanft in die Streckung sinken. Sanftere Version der Kobra, gut für längeres Halten.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Beine hüftbreit.",
        "Setz die Unterarme parallel auf, die Ellbogen liegen unter oder leicht vor den Schultern.",
        "Heb Brust und Kopf an, das Becken bleibt am Boden.",
        "Zieh das Brustbein sanft nach vorn und die Schultern weg von den Ohren.",
        "Lass Bauch und unteren Rücken entspannt. Halte 30 bis 90 Sekunden.",
        "Leg dich langsam ab und ruh kurz in Bauchlage."
      ],
      atmung: "Ruhig und tief in den Bauch atmen.",
      fehler: [
        "Schultern sacken ein: Unterarme leicht in den Boden drücken.",
        "Kopf in den Nacken: Blick nach vorn.",
        "Gesäß fest angespannt: entspannt lassen, wenn es angenehm ist."
      ],
      vorteile: [
        "Sanfte Streckung der Wirbelsäule.",
        "Gut für längeres, entspanntes Halten.",
        "Ausgleich nach langem Sitzen."
      ],
      tipps: [
        "Ellbogen weiter vorn macht die Haltung sanfter.",
        "Gut am Ende einer Einheit."
      ],
      varianten: "Leichter: Ellbogen weiter vorn. Schwerer: Kobra oder McKenzie-Liegestütz.",
      sicherheit: "Bei Schmerzen bei Rückstreckung auslassen und abklären lassen."
    }
  },
  {
    id: "kindhaltung",
    name: "Kindhaltung",
    auch: ["Child's Pose", "Balasana"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ruecken_unten", "latissimus"],
    sekundaer: ["gesaess", "oberer_ruecken"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Ruhehaltung aus dem Yoga: Gesäß auf den Fersen, Oberkörper nach vorn auf den Oberschenkeln, Arme lang. Dehnt sanft den Rücken und entspannt.",
      ausfuehrung: [
        "Knie dich hin, die großen Zehen berühren sich, die Knie sind hüft- bis mattenbreit geöffnet.",
        "Setz das Gesäß auf die Fersen.",
        "Leg den Oberkörper nach vorn zwischen oder auf die Oberschenkel.",
        "Strecke die Arme nach vorn oder leg sie neben die Füße.",
        "Leg die Stirn auf den Boden oder auf ein Kissen.",
        "Bleib 30 Sekunden bis 2 Minuten."
      ],
      atmung: "Tief in den Rücken atmen, spüre, wie sich der Rücken mit dem Einatmen weitet.",
      fehler: [
        "Gesäß hebt ab: Kissen zwischen Gesäß und Fersen.",
        "Stirn erreicht den Boden nicht und der Nacken spannt: Kissen unter die Stirn.",
        "Schultern verspannt: Arme neben dem Körper ablegen."
      ],
      vorteile: [
        "Sanfte Dehnung des Rückens.",
        "Entspannend, gut zwischen anstrengenden Übungen oder am Ende.",
        "Lädt zu ruhiger Atmung ein."
      ],
      tipps: [
        "Mit gestreckten Armen wird der Latissimus mitgedehnt.",
        "Weiter geöffnete Knie entlasten den Bauch und öffnen die Hüfte."
      ],
      varianten: "Leichter: Kissen unter Gesäß oder Stirn. Schwerer: Kindhaltung mit seitlichem Greifen oder Welpe.",
      sicherheit: "Bei Knie- oder Sprunggelenkbeschwerden gut polstern."
    }
  },
  {
    id: "welpe",
    name: "Welpe",
    auch: ["Puppy Pose", "Extended Puppy Pose", "Uttana Shishosana"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["latissimus", "brust"],
    sekundaer: ["oberer_ruecken", "schulter_vorn", "trizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Mischung aus Kindhaltung und herabschauendem Hund: Die Hüften bleiben über den Knien, Arme und Brust sinken nach vorn zum Boden. Streckt die Brustwirbelsäule und dehnt Schultern und Latissimus.",
      ausfuehrung: [
        "Geh in den Vierfüßlerstand, die Hüften über den Knien.",
        "Lauf mit den Händen nach vorn, bis die Arme lang ausgestreckt sind.",
        "Lass die Brust Richtung Boden sinken, die Hüften bleiben über den Knien.",
        "Leg die Stirn oder das Kinn ab.",
        "Drück die Hände leicht in den Boden und zieh die Hüften sanft nach hinten oben.",
        "Halte 30 bis 60 Sekunden."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Brust tiefer sinken lassen.",
      fehler: [
        "Hohlkreuz im unteren Rücken: Bauch leicht anspannen.",
        "Hüften rutschen nach hinten: über den Knien halten.",
        "Kopf hängt verkrampft: Stirn auf ein Kissen legen."
      ],
      vorteile: [
        "Streckt die Brustwirbelsäule.",
        "Dehnt Schultern und Latissimus.",
        "Sanfter Einstieg in Überkopfdehnungen."
      ],
      tipps: [
        "Hände auf Yogablöcke oder Bücher legen verstärkt die Dehnung.",
        "Ellbogen auf Blöcke und Hände hinter den Kopf ergibt die Gebetsdehnung."
      ],
      varianten: "Leichter: Hände weniger weit vorn. Schwerer: Hände erhöht ablegen.",
      sicherheit: "Bei Schulterschmerzen über Kopf vorsichtig."
    }
  },
  {
    id: "seitbeuge_stehend",
    name: "Seitbeuge im Stand",
    auch: ["Standing Side Bend", "Standing Lateral Stretch", "Crescent Moon Standing"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "latissimus"],
    sekundaer: ["ruecken_unten"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Im Stand neigst du den Oberkörper mit über den Kopf gestrecktem Arm zur Seite. Dehnt Rumpfseite, Latissimus und den quadratischen Lendenmuskel.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Knie locker.",
        "Heb den rechten Arm über den Kopf, die linke Hand liegt an der Hüfte oder am Oberschenkel.",
        "Mach dich lang und neige den Oberkörper nach links.",
        "Schieb die rechte Hüfte leicht nach rechts, so entsteht ein langer Bogen.",
        "Halte 20 bis 30 Sekunden, der Oberkörper bleibt in einer Ebene.",
        "Richte dich auf und wechsle danach auf die andere Seite."
      ],
      atmung: "In die gedehnte Flanke atmen, mit dem Ausatmen etwas weiter neigen.",
      fehler: [
        "Oberkörper kippt nach vorn: seitlich wie zwischen zwei Scheiben bleiben.",
        "Zusammensacken: zuerst lang machen, dann neigen.",
        "Schulter zum Ohr: Arm lang, Schulter tief."
      ],
      vorteile: [
        "Dehnt die Rumpfseite einfach und überall.",
        "Gut nach langem Sitzen.",
        "Kann Spannungsgefühl im unteren Rücken seitlich lindern."
      ],
      tipps: [
        "Das Bein der gedehnten Seite hinter das andere kreuzen verstärkt die Dehnung.",
        "Mit beiden Armen über Kopf und gegriffenem Handgelenk ziehen."
      ],
      varianten: "Leichter: Arm nicht über Kopf. Schwerer: Beine kreuzen oder Seitdehnung an der Stange.",
      sicherheit: "Bei Rückenbeschwerden sanft und ohne Federn."
    }
  },
  {
    id: "seitdehnung_stange",
    name: "Seitliche Rumpfdehnung an der Stange",
    auch: ["Quadratus Lumborum Stretch", "QL Stretch at Pole", "Standing Pole Side Stretch"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ruecken_unten", "schraege_bauch", "latissimus"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["wand"], ["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du hältst dich mit beiden Händen an einem Pfosten, Türrahmen oder Rack fest und schiebst die Hüfte seitlich weg, bis der Körper ein C bildet. Dehnt gezielt den quadratischen Lendenmuskel und die Rumpfseite.",
      ausfuehrung: [
        "Stell dich seitlich neben einen Pfosten oder Türrahmen, etwa eine Armlänge entfernt, der Pfosten ist links.",
        "Greif den Pfosten mit beiden Händen etwa auf Kopfhöhe.",
        "Kreuze das rechte Bein hinter das linke.",
        "Schieb die rechte Hüfte nach rechts weg vom Pfosten, bis der Körper einen Bogen bildet.",
        "Halte 30 Sekunden mit der Dehnung an der rechten Seite zwischen Becken und Rippen.",
        "Wechsle danach auf die andere Seite."
      ],
      atmung: "Tief in die gedehnte Seite atmen, mit dem Ausatmen die Hüfte weiter wegschieben.",
      fehler: [
        "Oberkörper dreht ein: Brust bleibt nach vorn.",
        "Zu nah am Pfosten: weiter weg stellen für mehr Bogen.",
        "Schultern zu den Ohren: Arme lang."
      ],
      vorteile: [
        "Gezielte Dehnung des quadratischen Lendenmuskels.",
        "Der Pfosten nimmt Gewicht ab und erlaubt Entspannung.",
        "Dehnt nebenbei den Latissimus."
      ],
      tipps: [
        "Kleine Änderungen der Griffhöhe verändern die Stelle der Dehnung.",
        "Gut nach Kreuzheben oder einseitigem Tragen."
      ],
      varianten: "Leichter: Seitbeuge im Stand. Schwerer: Hüfte weiter wegschieben oder Griff tiefer.",
      sicherheit: "Bei akuten Rückenschmerzen nur sanft."
    }
  },
  {
    id: "rueckenlage_drehdehnung",
    name: "Drehdehnung in Rückenlage",
    auch: ["Supine Twist", "Supine Spinal Twist", "Supta Matsyendrasana"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "gesaess", "ruecken_unten"],
    sekundaer: ["brust", "oberer_ruecken"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    einseitig: true,
    info: {
      kurz: "In Rückenlage lässt du die angewinkelten Knie zu einer Seite sinken, während die Schultern am Boden bleiben. Sanfte, entspannende Rotation für Rücken, Gesäß und Rumpf.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Arme seitlich in T-Form ausgestreckt.",
        "Zieh beide Knie an, bis Hüfte und Knie etwa 90 Grad gebeugt sind.",
        "Lass die Knie langsam nach rechts sinken, so weit es angenehm ist.",
        "Die linke Schulter bleibt möglichst am Boden, der Kopf kann nach links drehen.",
        "Halte 30 bis 60 Sekunden.",
        "Hol die Knie zur Mitte und wechsle danach auf die andere Seite."
      ],
      atmung: "Tief und ruhig atmen, mit dem Ausatmen die Knie schwerer werden lassen.",
      fehler: [
        "Schulter hebt stark ab: Knie auf ein Kissen legen.",
        "Knie rutschen auseinander: Knie aufeinander lassen.",
        "Mit Kraft drücken: die Schwerkraft arbeiten lassen."
      ],
      vorteile: [
        "Entspannende Rotation der Wirbelsäule.",
        "Dehnt Gesäß, Rumpfseite und Brust.",
        "Ideal am Ende einer Einheit oder vor dem Schlafen."
      ],
      tipps: [
        "Ein gestrecktes unteres Bein und nur ein gekreuztes Knie verändern die Dehnung Richtung Gesäß.",
        "Die Hand auf dem oberen Knie gibt etwas Gewicht."
      ],
      varianten: "Leichter: Kissen unter die Knie. Schwerer: Knie höher zur Brust ziehen oder oberes Bein strecken.",
      sicherheit: "Bei Bandscheibenproblemen sanft und ohne Druck."
    }
  },
  {
    id: "scheibenwischer",
    name: "Scheibenwischer in Rückenlage für die Wirbelsäule",
    auch: ["Windshield Wipers", "Supine Knee Rocks", "Lying Knee Drops"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "ruecken_unten"],
    sekundaer: ["gesaess", "gesaess_mittel"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    info: {
      kurz: "In Rückenlage mit aufgestellten Füßen lässt du die Knie rhythmisch von einer Seite zur anderen pendeln. Lockert die Lendenwirbelsäule und die Hüften sanft durch kleine Rotationen.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell die Füße etwas weiter als hüftbreit auf, die Arme liegen seitlich.",
        "Lass beide Knie langsam nach rechts sinken, so weit es angenehm ist.",
        "Führe sie durch die Mitte nach links.",
        "Die Schultern bleiben am Boden, die Bewegung ist locker und rhythmisch.",
        "Steigere den Umfang langsam.",
        "Mache 10 bis 15 Wiederholungen je Seite."
      ],
      atmung: "Ausatmen beim Absinken, einatmen zurück zur Mitte.",
      fehler: [
        "Zu schnelles Pendeln: ruhig und gleichmäßig.",
        "Schultern heben ab: Umfang verkleinern.",
        "Füße zu eng: weiter auseinander stellen."
      ],
      vorteile: [
        "Sanfte Mobilisation der Lendenwirbelsäule.",
        "Lockert Hüften und Rumpf.",
        "Gut am Morgen oder nach langem Sitzen."
      ],
      tipps: [
        "Weiter gestellte Füße bewegen auch die Hüftrotation.",
        "Gut vor der Drehdehnung in Rückenlage."
      ],
      varianten: "Leichter: kleiner Umfang. Schwerer: Beine angewinkelt angehoben, Füße in der Luft.",
      sicherheit: "Bei Rückenschmerzen nur im schmerzfreien Bereich."
    }
  },
  {
    id: "knie_zur_brust",
    name: "Knie zur Brust",
    auch: ["Knees to Chest", "Double Knee to Chest", "Apanasana"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ruecken_unten", "gesaess"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "In Rückenlage ziehst du beide Knie zur Brust. Dehnt den unteren Rücken und das Gesäß sanft und wird oft als wohltuend empfunden.",
      ausfuehrung: [
        "Leg dich entspannt auf den Rücken, die Beine zunächst gestreckt.",
        "Zieh beide Knie zur Brust und umfasse sie mit den Armen oder den Händen unterhalb der Knie.",
        "Zieh die Knie sanft Richtung Brust, das Becken rollt leicht vom Boden.",
        "Kopf und Schultern bleiben entspannt am Boden.",
        "Halte 30 bis 60 Sekunden oder wiege dich sanft hin und her.",
        "Stell die Füße einzeln wieder ab."
      ],
      atmung: "Ruhig in den Bauch atmen, mit dem Ausatmen die Knie etwas näher ziehen.",
      fehler: [
        "Kopf hebt ab: Kopf bleibt am Boden.",
        "Zu stark ziehen: sanfter Zug genügt.",
        "Zug direkt auf die Kniescheiben bei Kniebeschwerden: unter den Knien an den Oberschenkeln greifen."
      ],
      vorteile: [
        "Sanfte Dehnung von unterem Rücken und Gesäß.",
        "Kann entspannend wirken.",
        "Gut am Ende einer Einheit oder nach Kreuzheben."
      ],
      tipps: [
        "Kleine Kreise mit den Knien massieren den unteren Rücken auf der Matte.",
        "Nur ein Knie ziehen und das andere Bein strecken dehnt zusätzlich den Hüftbeuger der gestreckten Seite."
      ],
      varianten: "Leichter: nur ein Knie. Schwerer: Stirn zu den Knien heben (nur ohne Nackenbeschwerden).",
      sicherheit: "Bei akuten Bandscheibenbeschwerden mit Beugeempfindlichkeit vorsichtig."
    }
  },
  {
    id: "krokodilatmung",
    name: "Krokodil-Atmung",
    auch: ["Crocodile Breathing", "Prone Diaphragmatic Breathing"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["bauch", "ruecken_unten"],
    sekundaer: ["oberer_ruecken"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "In Bauchlage atmest du so, dass sich Bauch und unterer Rücken gegen den Boden und zur Decke weiten. Schult die Zwerchfellatmung und kann helfen, Nacken und Schultern beim Atmen zu entlasten.",
      ausfuehrung: [
        "Leg dich auf den Bauch, leg die Hände übereinander und die Stirn auf die Hände.",
        "Lass den ganzen Körper schwer werden.",
        "Atme langsam durch die Nase ein und lenke die Luft in den Bauch, so dass er gegen den Boden drückt.",
        "Spüre, wie sich auch der untere Rücken und die Flanken weiten.",
        "Atme langsam und vollständig durch den Mund oder die Nase aus.",
        "Mache 2 bis 5 Minuten ruhige Atemzüge."
      ],
      atmung: "Etwa vier Sekunden ein, kurze Pause, sechs Sekunden aus. Schultern und Nacken bleiben ruhig.",
      fehler: [
        "Schultern heben sich beim Einatmen: Atem tiefer in den Bauch lenken.",
        "Gepresstes Atmen: locker und langsam.",
        "Hektik: lieber weniger, dafür lange Atemzüge."
      ],
      vorteile: [
        "Schult die Zwerchfellatmung, der Boden gibt Rückmeldung.",
        "Kann Spannung in Nacken und Schultern verringern.",
        "Gut zur Beruhigung nach dem Training."
      ],
      tipps: [
        "Ein Partner kann die Hand auf den unteren Rücken legen, um die Bewegung zu spüren.",
        "Ideal als Abschluss einer Mobilitätseinheit."
      ],
      varianten: "Leichter: Atmung in Rückenlage. Schwerer: 90-90-Atmung mit Füßen an der Wand.",
      sicherheit: "Bei Schwindel kürzer und ruhiger atmen."
    }
  },
  {
    id: "atmung_9090",
    name: "90-90-Atmung mit Füßen an der Wand",
    auch: ["90/90 Breathing", "90/90 Hip Lift Breathing", "PRI 90-90 Breathing"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["bauch", "beinbeuger"],
    sekundaer: ["ruecken_unten", "schraege_bauch"],
    geraete: [["wand"], ["bank"], ["box"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "In Rückenlage stehen die Füße so an der Wand, dass Hüfte und Knie 90 Grad gebeugt sind, und du atmest tief mit den Rippen nach unten. Aus dem Postural-Restoration-Ansatz bekannt, fördert sie eine neutrale Becken- und Rippenposition.",
      ausfuehrung: [
        "Leg dich auf den Rücken und stell die Füße so an eine Wand oder auf eine Bank, dass Hüfte und Knie 90 Grad gebeugt sind.",
        "Drück die Fersen leicht in die Wand, bis du die Beinrückseite spürst, und roll das Becken minimal ein, so dass das Steißbein leicht abhebt.",
        "Leg die Hände auf den unteren Brustkorb.",
        "Atme durch die Nase in den Bauch und die Flanken ein, die Rippen weiten sich zur Seite.",
        "Atme lang durch den Mund aus und lass die Rippen bewusst nach unten sinken. Halte am Ende drei Sekunden, bevor du wieder einatmest.",
        "Mache 5 bis 8 Atemzüge, 2 bis 3 Durchgänge."
      ],
      atmung: "Durch die Nase ein, lang durch den Mund aus, die Ausatmung ist etwa doppelt so lang wie die Einatmung.",
      fehler: [
        "Hohlkreuz: Becken leicht einrollen, der untere Rücken liegt am Boden.",
        "Atmung in die Brust und Schultern: in Bauch und Flanken lenken.",
        "Zu kräftiges Drücken in die Wand: leichte Spannung genügt."
      ],
      vorteile: [
        "Fördert eine neutrale Position von Becken und Brustkorb.",
        "Schult tiefe Zwerchfellatmung.",
        "Kann beruhigend wirken und eignet sich zum Abschluss."
      ],
      tipps: [
        "Einen Ballon aufzublasen verstärkt die Rippenbewegung nach unten.",
        "Gut vor Übungen, bei denen du dazu neigst, ins Hohlkreuz zu fallen."
      ],
      varianten: "Leichter: ohne Becken anheben. Schwerer: mit Ball zwischen den Knien und einer Hand über Kopf.",
      sicherheit: "Bei Schwindel kurz pausieren und normal atmen."
    }
  },
  {
    id: "mckenzie_liegestuetz",
    name: "Rückstreckung in Bauchlage (McKenzie)",
    auch: ["McKenzie Press-Up", "Prone Press-Up", "Extension in Lying"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["bauch", "ruecken_unten"],
    sekundaer: ["hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "In Bauchlage drückst du den Oberkörper mit den Armen hoch, während Becken und Beine entspannt am Boden bleiben. Bekannt aus der McKenzie-Methode, streckt sie die Lendenwirbelsäule passiv.",
      ausfuehrung: [
        "Leg dich auf den Bauch, die Hände unter den Schultern, die Ellbogen nah am Körper.",
        "Lass Gesäß und Beine ganz entspannt.",
        "Drück den Oberkörper mit den Armen langsam nach oben, das Becken bleibt am Boden.",
        "Geh so weit, wie es angenehm ist, und halte ein bis zwei Sekunden.",
        "Senk dich langsam wieder ab.",
        "Mache 8 bis 10 Wiederholungen und steigere den Bewegungsumfang langsam."
      ],
      atmung: "Ausatmen in der oberen Position und den unteren Rücken bewusst durchhängen lassen.",
      fehler: [
        "Gesäß angespannt: locker lassen, die Arme machen die Arbeit.",
        "Becken hebt ab: nur so hoch drücken, wie das Becken liegen bleibt.",
        "Schultern zu den Ohren: Schultern tief."
      ],
      vorteile: [
        "Passive Streckung der Lendenwirbelsäule als Ausgleich zu langem Sitzen.",
        "Wird in der Physiotherapie häufig eingesetzt.",
        "Einfach und ohne Gerät."
      ],
      tipps: [
        "Beginne mit der Sphinx und steigere dich dann zu gestreckten Armen.",
        "Mehrmals täglich ein paar Wiederholungen bei viel Sitzen."
      ],
      varianten: "Leichter: Sphinx auf den Unterarmen. Schwerer: Rückstreckung im Stand zusätzlich am Tag.",
      sicherheit: "Bei Rückenschmerzen, die sich bei der Übung verstärken oder ins Bein ausstrahlen, sofort aufhören und abklären lassen. Nicht bei Wirbelgleiten oder Stenose ohne Rücksprache."
    }
  },
  {
    id: "rueckstreckung_stehend",
    name: "Rückstreckung im Stand",
    auch: ["Standing Back Extension", "Standing Lumbar Extension", "McKenzie Standing Extension"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["bauch", "hueftbeuger"],
    sekundaer: ["ruecken_unten", "brust"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Mit den Händen im unteren Rücken neigst du den Oberkörper langsam nach hinten. Schneller Ausgleich nach langem Sitzen oder Vorbeugen, überall machbar.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Knie leicht gebeugt.",
        "Leg die Hände mit den Fingern nach unten in den unteren Rücken über dem Gesäß.",
        "Schieb das Becken leicht nach vorn und neige den Oberkörper langsam nach hinten.",
        "Der Blick geht schräg nach oben, der Kopf fällt nicht in den Nacken.",
        "Halte ein bis zwei Sekunden und komm zurück.",
        "Mache 5 bis 10 Wiederholungen."
      ],
      atmung: "Einatmen beim Zurückneigen, ausatmen beim Aufrichten.",
      fehler: [
        "Kopf weit nach hinten: Kopf in Verlängerung.",
        "Knie durchgedrückt: leicht beugen.",
        "Zu weit nach hinten: nur so weit wie angenehm."
      ],
      vorteile: [
        "Schnelle Pause bei Sitzarbeit.",
        "Dehnt Bauch und vordere Hüfte.",
        "Keine Matte nötig."
      ],
      tipps: [
        "Nach langem Autofahren oder Vorbeugen etwa bei Gartenarbeit.",
        "Ein paar Wiederholungen jede Stunde wirken mehr als eine lange Einheit."
      ],
      varianten: "Leichter: kleiner Umfang. Schwerer: McKenzie-Rückstreckung in Bauchlage.",
      sicherheit: "Bei Schwindel oder Schmerzen bei Rückstreckung auslassen und abklären lassen."
    }
  },
  {
    id: "banane",
    name: "Banane in Rückenlage",
    auch: ["Bananasana", "Supine Side Bend", "Banana Stretch"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "latissimus"],
    sekundaer: ["gesaess_mittel", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Yin-Yoga-Haltung in Rückenlage: Oberkörper und Beine wandern zur gleichen Seite, so dass der Körper wie eine Banane gebogen ist. Dehnt die ganze Körperseite passiv und entspannt.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Beine gestreckt, die Arme über den Kopf ausgestreckt.",
        "Greif mit der rechten Hand das linke Handgelenk.",
        "Wandere mit Oberkörper und Armen nach rechts.",
        "Wandere mit beiden Beinen ebenfalls nach rechts, das Becken bleibt flach am Boden.",
        "Der Körper bildet einen Bogen, die linke Seite wird lang. Halte 1 bis 3 Minuten.",
        "Komm zur Mitte zurück und wechsle danach auf die andere Seite."
      ],
      atmung: "Tief in die gedehnte Seite atmen, mit jedem Ausatmen loslassen.",
      fehler: [
        "Becken hebt auf einer Seite ab: beide Gesäßhälften am Boden.",
        "Zu stark ziehen: passiv entspannen.",
        "Schultern verspannt: Arme bei Bedarf beugen."
      ],
      vorteile: [
        "Passive, angenehme Dehnung der ganzen Körperseite.",
        "Gut für längeres Halten am Abend.",
        "Kein Kraftaufwand nötig."
      ],
      tipps: [
        "Den linken Knöchel über den rechten legen verstärkt die Dehnung an der Hüfte.",
        "Gut am Ende eines ruhigen Mobilitätstags."
      ],
      varianten: "Leichter: Arme neben dem Körper. Schwerer: Knöchel kreuzen und den Bogen vergrößern.",
      sicherheit: "Bei Schulterbeschwerden die Arme nicht über Kopf legen."
    }
  },
  {
    id: "tor_haltung",
    name: "Tor-Haltung",
    auch: ["Gate Pose", "Parighasana", "Kneeling Side Stretch"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "latissimus", "adduktoren"],
    sekundaer: ["beinbeuger", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Seitliche Dehnung aus dem Kniestand mit einem Bein seitlich ausgestreckt. Dehnt Rumpfseite und Latissimus sowie die Innenseite des gestreckten Beins.",
      ausfuehrung: [
        "Knie dich aufrecht hin und strecke das rechte Bein zur Seite aus, der Fuß steht flach am Boden.",
        "Das linke Knie steht unter der Hüfte.",
        "Leg die rechte Hand auf das rechte Bein und heb den linken Arm über den Kopf.",
        "Neige den Oberkörper nach rechts, die rechte Hand gleitet am Bein entlang nach unten.",
        "Halte 20 bis 40 Sekunden, die Brust bleibt offen nach vorn.",
        "Richte dich auf und wechsle danach auf die andere Seite."
      ],
      atmung: "In die gedehnte Flanke atmen, mit dem Ausatmen tiefer neigen.",
      fehler: [
        "Oberkörper kippt nach vorn: seitlich bleiben.",
        "Becken weicht nach hinten aus: Hüfte über dem Knie halten.",
        "Schulter zum Ohr: Arm lang, Schulter tief."
      ],
      vorteile: [
        "Dehnt die Rumpfseite und die Innenseite des Beins.",
        "Verbessert die seitliche Beweglichkeit der Wirbelsäule.",
        "Gute Ergänzung zu Rotationsübungen."
      ],
      tipps: [
        "Ein Kissen unter dem Knie macht die Haltung angenehmer.",
        "Den Fuß des gestreckten Beins leicht nach vorn drehen, wenn das Knie zieht."
      ],
      varianten: "Leichter: Hand auf dem Oberschenkel. Schwerer: Hand bis zum Knöchel oder Boden.",
      sicherheit: "Bei Kniebeschwerden gut polstern."
    }
  },
  {
    id: "stoffpuppe",
    name: "Stoffpuppe",
    auch: ["Ragdoll", "Ragdoll Pose", "Standing Forward Fold with Elbows"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "ruecken_unten"],
    sekundaer: ["waden", "oberer_ruecken", "nacken"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Im Stand beugst du dich mit gebeugten Knien nach vorn und lässt den Oberkörper hängen, die Hände halten die gegenüberliegenden Ellbogen. Lockert Rücken, Nacken und Beinrückseite passiv.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und beuge die Knie leicht.",
        "Beuge dich aus der Hüfte nach vorn und lass den Oberkörper hängen.",
        "Greif mit jeder Hand den gegenüberliegenden Ellbogen.",
        "Lass Kopf und Nacken völlig locker hängen.",
        "Wiege dich sanft von Seite zu Seite. Halte 30 bis 60 Sekunden.",
        "Komm langsam Wirbel für Wirbel nach oben, der Kopf kommt zuletzt."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen tiefer sinken.",
      fehler: [
        "Knie durchgedrückt: Knie beugen, so entspannt der Rücken.",
        "Nacken angespannt: Kopf hängen lassen.",
        "Schnelles Aufrichten: langsam aufrollen, um Schwindel zu vermeiden."
      ],
      vorteile: [
        "Entlastet Rücken und Nacken.",
        "Dehnt die Beinrückseite sanft.",
        "Gute Pause zwischen intensiven Übungen."
      ],
      tipps: [
        "Je mehr du die Knie beugst, desto mehr kommt die Dehnung in den Rücken.",
        "Kopfnicken und -schütteln lockert den Nacken."
      ],
      varianten: "Leichter: Hände auf den Oberschenkeln. Schwerer: Knie strecken für mehr Dehnung der Beinrückseite.",
      sicherheit: "Bei Bluthochdruck, Schwindel oder Bandscheibenbeschwerden vorsichtig und langsam aufrichten."
    }
  },
  {
    id: "roll_down",
    name: "Abrollen im Stand",
    auch: ["Pilates Roll Down", "Standing Roll Down", "Spinal Roll Down"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ruecken_unten", "beinbeuger"],
    sekundaer: ["oberer_ruecken", "bauch"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Du rollst die Wirbelsäule im Stand Wirbel für Wirbel nach unten und wieder hoch. Klassische Pilates-Übung, die die Beweglichkeit und Kontrolle der Wirbelsäule in der Beugung fördert.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Knie leicht gebeugt. Optional lehnst du dich mit dem Rücken an eine Wand, die Fersen etwas entfernt.",
        "Senk das Kinn langsam Richtung Brust.",
        "Roll langsam Wirbel für Wirbel nach unten, zuerst die Halswirbelsäule, dann die Brustwirbelsäule, zuletzt die Lendenwirbelsäule.",
        "Lass die Arme locker hängen, bis die Hände Richtung Boden zeigen.",
        "Roll in umgekehrter Reihenfolge nach oben, das Becken richtet sich zuerst auf, der Kopf kommt zuletzt.",
        "Mache 5 bis 8 langsame Wiederholungen."
      ],
      atmung: "Ausatmen beim Abrollen, unten einatmen, ausatmen beim Aufrollen.",
      fehler: [
        "Aus der Hüfte klappen statt rollen: Bewegung Wirbel für Wirbel.",
        "Zu schnell: etwa fünf Sekunden für jede Richtung.",
        "Knie gestreckt und verriegelt: leicht gebeugt."
      ],
      vorteile: [
        "Schult die segmentale Beweglichkeit der Wirbelsäule.",
        "Lockert Rücken und Nacken.",
        "An der Wand mit Rückmeldung über die Abschnitte."
      ],
      tipps: [
        "Die Wandvariante zeigt dir genau, welcher Wirbel sich gerade löst.",
        "Gut als ruhiger Start in eine Einheit."
      ],
      varianten: "Leichter: an der Wand, kleiner Umfang. Schwerer: frei mit gestreckten Knien oder mit Jefferson Curl.",
      sicherheit: "Bei Bandscheibenbeschwerden mit Beugeempfindlichkeit oder Osteoporose nicht ohne Rücksprache."
    }
  },
  {
    id: "bruecke_rad",
    name: "Brücke (Rad)",
    auch: ["Gymnastic Bridge", "Wheel Pose", "Urdhva Dhanurasana", "Full Bridge"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["brust", "hueftbeuger", "bauch"],
    sekundaer: ["latissimus", "quadrizeps", "gesaess", "trizeps"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ruecken: 2, handgelenk: 1 },
    stufe: 3,
    info: {
      kurz: "Aus der Rückenlage drückst du dich mit Händen und Füßen in einen hohen Bogen. Fortgeschrittene Haltung für Schulter-, Brustwirbelsäulen- und Hüftstreckung zugleich.",
      ausfuehrung: [
        "Leg dich auf den Rücken, stell die Füße hüftbreit nah am Gesäß auf.",
        "Setz die Hände neben die Ohren, die Finger zeigen zu den Schultern, die Ellbogen nach oben.",
        "Heb zuerst das Becken an und setz den Scheitel kurz am Boden ab, ohne Gewicht auf den Kopf.",
        "Drück dich mit Armen und Beinen weiter hoch, bis die Arme gestreckt sind.",
        "Schieb die Schultern über die Hände, so wird die Streckung gleichmäßiger. Halte 5 bis 20 Sekunden.",
        "Beuge Arme und Beine, setz zuerst den Hinterkopf ab und roll den Rücken ab."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Knie fallen nach außen: parallel halten.",
        "Gewicht auf dem Kopf: Kopf nur kurz ablegen und durchdrücken.",
        "Alle Streckung im unteren Rücken: Schultern über die Hände schieben."
      ],
      vorteile: [
        "Streckt Schultern, Brustwirbelsäule und Hüften in einer Haltung.",
        "Kräftigt Arme und Beine.",
        "Grundlage für viele turnerische Elemente."
      ],
      tipps: [
        "Vorher Schultern, Brust und Hüftbeuger gut vorbereiten.",
        "Einen Partner zur Unterstützung an den Schultern nutzen."
      ],
      varianten: "Leichter: Schulterbrücke oder Hände auf einer Bank erhöht. Schwerer: Beine strecken oder ein Bein heben.",
      sicherheit: "Nicht bei Rücken-, Schulter- oder Handgelenkbeschwerden, Bluthochdruck oder Schwangerschaft. Nur für Geübte."
    }
  },
  {
    id: "kamel",
    name: "Kamel",
    auch: ["Camel Pose", "Ustrasana"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "bauch", "brust"],
    sekundaer: ["quadrizeps", "schulter_vorn"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 170,
    gelenke: { ruecken: 1, knie: 1 },
    stufe: 2,
    info: {
      kurz: "Aus dem aufrechten Kniestand neigst du dich mit offener Brust nach hinten und greifst die Fersen. Dehnt die gesamte Körpervorderseite von Oberschenkeln über Hüftbeuger und Bauch bis zur Brust.",
      ausfuehrung: [
        "Knie dich aufrecht hin, die Knie hüftbreit, die Zehen aufgestellt oder die Fußrücken am Boden.",
        "Leg die Hände in den unteren Rücken, die Finger zeigen nach unten.",
        "Schieb das Becken leicht nach vorn und hebe das Brustbein nach oben.",
        "Neige dich nach hinten und greif nacheinander die Fersen, wenn es möglich ist.",
        "Der Kopf folgt locker, ohne in den Nacken zu fallen. Halte 15 bis 30 Sekunden.",
        "Hände zurück in den Rücken, mit festem Bauch aufrichten und kurz in der Kindhaltung entspannen."
      ],
      atmung: "Ruhig weiteratmen, mit dem Einatmen die Brust heben.",
      fehler: [
        "Becken schiebt nach hinten: Hüften über den Knien halten.",
        "Alles im unteren Rücken: Brustbein nach oben heben, Gesäß leicht anspannen.",
        "Kopf fällt in den Nacken: Kinn leicht eingezogen."
      ],
      vorteile: [
        "Dehnt die ganze Körpervorderseite.",
        "Fördert die Streckung der Brustwirbelsäule.",
        "Ausgleich nach viel Sitzen."
      ],
      tipps: [
        "Zehen aufgestellt bringen die Fersen höher und machen die Haltung leichter.",
        "Hände im Rücken lassen, bis die Haltung stabil ist."
      ],
      varianten: "Leichter: Hände im unteren Rücken. Schwerer: Fußrücken flach und Hände an den Fersen.",
      sicherheit: "Nicht bei Rückenbeschwerden mit Streckempfindlichkeit, Nackenproblemen oder Kniebeschwerden. Langsam aufrichten."
    }
  },
  {
    id: "fisch",
    name: "Fisch",
    auch: ["Fish Pose", "Matsyasana", "Supported Fish"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["brust", "bauch"],
    sekundaer: ["nacken", "schulter_vorn", "oberer_ruecken"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { nacken: 1 },
    stufe: 2,
    info: {
      kurz: "Rückenlage, in der du dich auf die Unterarme stützt und die Brust zur Decke hebst. Öffnet Brust und Brustwirbelsäule und dehnt die Halsvorderseite.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Beine gestreckt.",
        "Schieb die Hände mit den Handflächen nach unten unter das Gesäß, die Ellbogen nah am Körper.",
        "Drück die Unterarme in den Boden und heb die Brust zur Decke.",
        "Lass den Kopf nur leicht nach hinten sinken, der Scheitel berührt den Boden höchstens sanft ohne Gewicht.",
        "Halte 15 bis 30 Sekunden.",
        "Heb zum Lösen erst den Kopf an, dann senk die Brust ab."
      ],
      atmung: "Tief in die Brust atmen, sie weitet sich spürbar.",
      fehler: [
        "Gewicht auf dem Kopf: die Unterarme tragen das Gewicht.",
        "Schultern zu den Ohren: Schulterblätter zusammen.",
        "Kopf weit nach hinten bei empfindlichem Nacken: Kinn leicht eingezogen lassen."
      ],
      vorteile: [
        "Öffnet die Brust und streckt den oberen Rücken.",
        "Dehnt die Halsvorderseite.",
        "Ausgleich zur gebeugten Haltung am Schreibtisch."
      ],
      tipps: [
        "Unterstützte Variante: ein Kissen oder Block längs unter die Brustwirbelsäule, der Kopf liegt auf.",
        "Gut nach der Kindhaltung als Gegenbewegung."
      ],
      varianten: "Leichter: unterstützter Fisch mit Kissen. Schwerer: Beine angehoben oder Arme über Kopf.",
      sicherheit: "Nicht bei Nackenbeschwerden. Bei Schwindel lösen."
    }
  },
  {
    id: "ball_seitdehnung",
    name: "Seitdehnung über dem Gymnastikball",
    auch: ["Swiss Ball Side Stretch", "Lateral Ball Stretch", "Side-Lying Ball Stretch"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "latissimus"],
    sekundaer: ["ruecken_unten", "gesaess_mittel"],
    geraete: [["gymnastikball"]],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Du liegst seitlich über einem Gymnastikball und lässt Oberkörper und Arm über den Ball sinken. Dehnt die ganze Körperseite großflächig und angenehm.",
      ausfuehrung: [
        "Knie dich seitlich neben einen Gymnastikball und leg die rechte Hüfte und Flanke darauf.",
        "Strecke die Beine aus, das obere Bein vor dem unteren, die Füße stützen am Boden.",
        "Lass den Oberkörper über den Ball nach unten sinken.",
        "Strecke den oberen Arm über den Kopf und lass ihn hängen.",
        "Halte 30 bis 60 Sekunden, rolle eventuell leicht vor und zurück.",
        "Komm vorsichtig zurück in den Kniestand und wechsle danach auf die andere Seite."
      ],
      atmung: "In die obere Flanke atmen, mit dem Ausatmen tiefer sinken.",
      fehler: [
        "Unsicherer Stand: Füße weiter auseinander.",
        "Oberkörper dreht nach vorn: seitlich bleiben.",
        "Zu schnelles Aufrichten: langsam zurück."
      ],
      vorteile: [
        "Großflächige, passive Seitdehnung.",
        "Der Ball passt sich dem Körper an und wirkt angenehm.",
        "Gut am Ende einer Einheit."
      ],
      tipps: [
        "Je weiter der Ball unter den Rippen liegt, desto mehr Dehnung im Latissimus.",
        "Ein kleinerer Ball ist für Einsteiger stabiler."
      ],
      varianten: "Leichter: Arm nicht über Kopf. Schwerer: Arm über Kopf und Beine weiter auseinander.",
      sicherheit: "Bei Schwindel oder Gleichgewichtsproblemen nur mit Abstützung."
    }
  },
]
