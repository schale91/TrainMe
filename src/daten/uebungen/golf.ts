import type { Uebung } from "../../logik/typen"

// Golfspezifische Übungen: Haltung, Rotation, Schnellkraft, Schwunggeschwindigkeit, Mobilität und Prävention für Golfer.
// Richtungsangaben gelten für Rechtshänder (vorderes Bein links), Linkshänder spiegeln.

export const GOLF: Uebung[] = [
  // ---------- Medizinball-Würfe in Golfhaltung ----------
  {
    id: "golf_mb_ausfallschritt_wurf",
    name: "Medizinball-Rotationswurf im Ausfallschritt-Stand",
    auch: ["Split-Stance Rotational Throw", "Split Stance Med Ball Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch", "gesaess"],
    sekundaer: ["hueftbeuger", "schulter_vorn"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Die Hüfte bleibt fast ruhig, der Oberkörper dreht kräftig.",
    info: {
      kurz: "Rotationswurf aus einem schmalen Ausfallschritt-Stand, mit dem Gesicht zur Wand. Durch die versetzte Fußstellung bleibt das Becken weitgehend stabil, sodass der Oberkörper gezielt gegen eine stabile Hüfte dreht.",
      ausfuehrung: [
        "Stell dich mit dem Gesicht zur Wand, etwa 1 bis 2 Meter entfernt. Setz einen Fuß einen halben Schritt nach vorn, der andere steht hinten, beide Füße zeigen nach vorn.",
        "Halte den Ball mit beiden Händen vor der Brust, die Arme leicht gebeugt.",
        "Dreh den Oberkörper zur Seite des hinteren Beins, das Becken bleibt dabei möglichst gerade zur Wand ausgerichtet.",
        "Spann den Bauch an und dreh den Oberkörper explosiv zurück, der Ball wird schräg von der Seite gegen die Wand geworfen.",
        "Fang den Rückpraller vor dem Körper und lenke ihn direkt zur gleichen Seite um, oder fang den Ball und setz neu an.",
        "Mach alle Würfe einer Seite, wechsle dann die Beinstellung und Wurfseite."
      ],
      atmung: "Beim Ausholen einatmen, beim Wurf kurz ausatmen.",
      fehler: [
        "Becken dreht stark mit: Halte den Druck in beiden Füßen und das Becken ruhig.",
        "Arme werfen allein: Der Impuls kommt aus der Rumpfdrehung, die Arme bleiben fast fest.",
        "Hohlkreuz: Rippen nach unten ziehen und den Bauch leicht anspannen.",
        "Zu großer Ausfallschritt: Ein halber Schritt reicht, sonst wird die Balance zum Thema."
      ],
      vorteile: [
        "Trennt die Oberkörper- von der Hüftrotation.",
        "Kräftigt die schrägen Bauchmuskeln schnellkräftig.",
        "Fordert die Stabilität von Becken und Hüfte im versetzten Stand.",
        "Gut geeignet bei wenig Platz."
      ],
      tipps: [
        "Arbeite mit 2 bis 4 kg und schnellen, kurzen Sätzen von 6 bis 8 Würfen.",
        "Das Bein auf der Wurfseite steht vorn, wenn du die Rumpfrotation betonen willst.",
        "Gut kombinierbar mit Pallof Press als Gegenstück in der Anti-Rotation."
      ],
      varianten: "Leichter: aus dem parallelen Stand oder mit kleinerem Bewegungsweg. Schwerer: halbkniend oder schneller im Rhythmus mit Rückpraller.",
      sicherheit: "Bei Rückenbeschwerden mit kleiner Amplitude beginnen. Ball muss vom Wandmaterial vertragen werden.",
      golf: "Ein guter Golfschwung braucht die Fähigkeit, den Oberkörper unabhängig vom Becken zu drehen. Diese Trennung wird oft als X-Faktor bezeichnet. Der Wurf im Ausfallschritt trainiert die Oberkörperrotation schnell und kräftig gegen eine stabile Hüfte."
    }
  },
  {
    id: "golf_mb_kniend_wurf",
    name: "Medizinball-Rotationswurf im Kniestand",
    auch: ["Tall-Kneeling Rotational Throw", "Tall Kneeling Med Ball Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "schulter_vorn"],
    geraete: [["medizinball", "wand", "matte"], ["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Beide Knie am Boden, Gesäß fest, Hüfte gestreckt.",
    info: {
      kurz: "Rotationswurf aus dem aufrechten Kniestand mit beiden Knien am Boden. Die Beine sind praktisch ausgeschaltet, deshalb arbeiten Rumpf und Gesäß als Stabilisatoren besonders intensiv.",
      ausfuehrung: [
        "Knie dich seitlich zur Wand auf eine Matte, die Knie etwa hüftbreit, Hüfte gestreckt, Oberkörper aufrecht.",
        "Spann das Gesäß an und zieh die Rippen leicht nach unten, sodass du eine gerade Linie von Knie bis Kopf hast.",
        "Halte den Ball vor dem Bauch und dreh den Oberkörper von der Wand weg.",
        "Wirf den Ball durch eine schnelle Drehung des Oberkörpers auf Brusthöhe gegen die Wand.",
        "Fang den Ball und kehre kontrolliert in die Ausgangsposition zurück.",
        "Wechsle nach allen Würfen die Seite, indem du dich umdrehst."
      ],
      atmung: "Vor dem Wurf einatmen, beim Wurf zügig ausatmen.",
      fehler: [
        "Gesäß sinkt nach hinten: Hüfte bleibt gestreckt, das Gesäß ist fest.",
        "Hohlkreuz beim Ausholen: Rippen unten lassen und den Bauch anspannen.",
        "Kippen zur Seite: Kleinere Ausholbewegung und kontrollierter Rhythmus.",
        "Ball zu schwer: Auf maximale Geschwindigkeit achten."
      ],
      vorteile: [
        "Sehr gezielte Kräftigung der Rumpfrotation.",
        "Hohe Anforderung an die Stabilität des Beckens.",
        "Wenig Platzbedarf und geringe Raumhöhe.",
        "Gute Vorstufe für schwierigere Würfe im Stand."
      ],
      tipps: [
        "Leichte Bälle von 1 bis 3 kg reichen, weil die Beine nicht helfen.",
        "Dreh die Schultern, nicht nur die Arme: Brustbein zeigt am Ende zur Wand.",
        "Pausiere 1 Sekunde in der Ausholposition, um den Schwung herauszunehmen."
      ],
      varianten: "Leichter: halbkniend mit einem Fuß vorn. Schwerer: schnelle Wiederholungen mit Rückpraller.",
      sicherheit: "Bei Kniebeschwerden gut polstern oder auslassen. Bei Rückenbeschwerden mit kleinem Bewegungsumfang starten.",
      golf: "Der Kniestand zwingt dazu, die Rotation sauber aus dem Rumpf zu erzeugen. Das stärkt die Verbindung zwischen stabilem Becken und schneller Oberkörperdrehung, die Golfer für einen kraftvollen und kontrollierten Schwung brauchen."
    }
  },
  {
    id: "golf_mb_sitzend_wurf",
    name: "Medizinball-Rotationswurf im Sitzen",
    auch: ["Seated Rotational Throw", "Seated Med Ball Side Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["hueftbeuger", "schulter_vorn"],
    geraete: [["medizinball", "wand", "matte"], ["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Becken bleibt fest am Boden, nur der Oberkörper dreht.",
    info: {
      kurz: "Rotationswurf im Sitzen am Boden, seitlich neben einer Wand. Becken und Beine sind fixiert, sodass die Drehung fast ausschließlich aus der Brustwirbelsäule und den schrägen Bauchmuskeln kommt.",
      ausfuehrung: [
        "Setz dich seitlich etwa einen Meter neben eine Wand auf den Boden, die Knie gebeugt, die Fersen am Boden.",
        "Lehne den Oberkörper leicht zurück, etwa 20 bis 30 Grad, und halte den Rücken lang.",
        "Halte den Ball mit beiden Händen vor der Brust und dreh den Oberkörper von der Wand weg.",
        "Dreh den Oberkörper kräftig zur Wand und wirf den Ball seitlich gegen die Wand.",
        "Fang den Ball mit leicht gebeugten Armen ab und bremse die Drehung kontrolliert.",
        "Wechsle nach allen Würfen die Seite."
      ],
      atmung: "Beim Ausholen einatmen, beim Wurf ausatmen.",
      fehler: [
        "Runder Rücken: Brust aufrichten und den Oberkörper lang machen.",
        "Becken rollt mit: Beide Sitzbeinhöcker bleiben am Boden.",
        "Füße heben ab: Fersen bleiben am Boden, bei Bedarf Füße unter ein Möbelstück klemmen.",
        "Zu viel Armeinsatz: Arme bleiben nahezu fest, der Oberkörper dreht."
      ],
      vorteile: [
        "Gezielte Kräftigung der schrägen Bauchmuskeln.",
        "Verbessert die Oberkörperrotation unabhängig vom Becken.",
        "Sehr einfach zu erlernen und wenig Platz nötig.",
        "Geringe Belastung für Knie und Hüfte."
      ],
      tipps: [
        "Ein weicher Ball, der nicht springt, ist für diese Übung angenehm.",
        "Wenn du allein trainierst, setz dich nah genug an die Wand, damit der Ball zurückrollt.",
        "Gut als Einstieg in das Medizinballtraining."
      ],
      varianten: "Leichter: aufrechter sitzen, kleinerer Ball. Schwerer: Füße vom Boden abheben oder schnelle Folge mit Rückpraller.",
      sicherheit: "Bei Bandscheibenproblemen oder Schmerzen im unteren Rücken nur nach Abklärung, da gebeugtes Sitzen mit Rotation belastend sein kann.",
      golf: "Fördert die Kraft der Oberkörperrotation bei festgestelltem Becken. Das hilft, im Abschwung den Oberkörper kraftvoll durchzudrehen, und ist ein einfacher Einstieg in rotatorisches Schnellkrafttraining."
    }
  },
  {
    id: "golf_mb_wurf_aus_pause",
    name: "Medizinball-Rotationswurf aus der Pause",
    auch: ["Paused Rotational Throw", "Non-Countermovement Rotational Throw", "Dead Stop Scoop Toss"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "bauch"],
    sekundaer: ["adduktoren", "schulter_vorn"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Zwei Sekunden still in der Ausholposition, dann explodieren.",
    info: {
      kurz: "Scoop-Toss, bei dem du in der Ausholposition zwei bis drei Sekunden still hältst und dann ohne Gegenbewegung explosiv wirfst. Trainiert die Startkraft, also die Fähigkeit, ohne Schwung schnell Kraft aufzubauen.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand in eine leichte Golfhaltung, Ball vor dem Körper.",
        "Dreh Hüfte und Oberkörper in die Ausholposition, das Gewicht liegt im hinteren Bein, der Ball neben der hinteren Hüfte.",
        "Halte diese Position zwei bis drei Sekunden ganz ruhig, Spannung im hinteren Bein und im Rumpf.",
        "Starte ohne jedes Nachfedern explosiv aus den Beinen, dreh die Hüfte zur Wand und lass Rumpf und Arme folgen.",
        "Wirf den Ball auf Hüft- bis Brusthöhe gegen die Wand und beende im Finish auf dem vorderen Bein.",
        "Fang den Ball, stell dich neu hin und wiederhole."
      ],
      atmung: "In der Pause ruhig einatmen und den Bauch leicht spannen, beim Wurf explosiv ausatmen.",
      fehler: [
        "Kleines Nachfedern vor dem Wurf: Echt stillhalten, sonst geht der Trainingseffekt verloren.",
        "Spannung lässt in der Pause nach: Druck im hinteren Fuß aktiv halten.",
        "Langsamer Start: Denk an einen Sprint aus dem Startblock, so schnell wie möglich.",
        "Zu schwerer Ball: Leicht genug wählen, dass der Wurf schnell bleibt."
      ],
      vorteile: [
        "Verbessert die Fähigkeit, schnell Kraft zu entwickeln.",
        "Schult eine stabile, belastete Ausholposition.",
        "Macht Unterschiede zwischen den Seiten gut sichtbar.",
        "Ergänzt Würfe mit Gegenbewegung sinnvoll."
      ],
      tipps: [
        "Kombiniere sie im Wechsel mit dem normalen Scoop-Toss: Du spürst den Unterschied deutlich.",
        "3 bis 5 Würfe je Seite reichen.",
        "Kontrolliere in der Pause, ob du die Ausholposition wie im Rückschwung hältst."
      ],
      varianten: "Leichter: kürzere Pause und kleiner Bewegungsweg. Schwerer: längere Pause von 3 Sekunden oder halbkniend.",
      sicherheit: "Bei Rückenbeschwerden zuerst die halbkniende Variante wählen.",
      golf: "Am Ende des Rückschwungs ist der Schläger kurz fast still. Von dort aus musst du die Bewegung schnell starten. Würfe aus der Pause trainieren diese Startkraft aus der gespannten Rückschwungposition und helfen, nicht aus den Armen zu reißen."
    }
  },
  {
    id: "golf_mb_schritt_wurf",
    name: "Medizinball-Rotationswurf mit Schritt nach vorn",
    auch: ["Step and Throw", "Rotational Step Throw", "Walk-Through Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "quadrizeps"],
    sekundaer: ["adduktoren", "bauch", "schulter_vorn"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, knie: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Der Schritt nach vorn startet den Abschwung, die Drehung folgt.",
    info: {
      kurz: "Rotationswurf, bei dem du aus einem schmalen Stand mit dem vorderen Fuß Richtung Ziel trittst und direkt danach wirfst. Trainiert die Gewichtsverlagerung nach vorn und das Abfangen über ein stabiles vorderes Bein.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, die Füße eng zusammen, Ball vor dem Bauch, leicht in Golfhaltung.",
        "Dreh Oberkörper und Ball zur hinteren Seite, das Gewicht liegt auf dem hinteren Bein.",
        "Tritt mit dem vorderen Fuß einen großen Schritt Richtung Wand und setz ihn kräftig auf.",
        "Im Moment des Aufsetzens drehst du die Hüfte zur Wand, der Oberkörper folgt.",
        "Wirf den Ball auf Hüft- bis Brusthöhe kraftvoll gegen die Wand und beende im Finish auf dem vorderen Bein.",
        "Geh zurück in die Startposition und wiederhole."
      ],
      atmung: "Beim Ausholen einatmen, beim Wurf ausatmen.",
      fehler: [
        "Wurf beginnt vor dem Aufsetzen des Fußes: Erst landen, dann drehen.",
        "Vorderes Knie knickt nach innen: Fuß fest, Knie über dem Fuß, Bein stemmt.",
        "Oberkörper fällt nach vorn: Bleib über dem vorderen Bein und dreh um die Achse.",
        "Zu großer Schritt: Schrittlänge so wählen, dass du sicher landest."
      ],
      vorteile: [
        "Trainiert die Gewichtsverlagerung nach vorn in die Rotation.",
        "Verbessert das Timing zwischen Unter- und Oberkörper.",
        "Kräftigt das vordere Bein als Stemmbein.",
        "Fördert einen flüssigen Rhythmus und Koordination."
      ],
      tipps: [
        "Übe den Schritt zuerst ohne Ball langsam.",
        "Leichter Ball von 2 bis 3 kg, dafür maximales Tempo.",
        "Auf einem rutschfesten Boden üben."
      ],
      varianten: "Leichter: kürzerer Schritt und weniger Tempo. Schwerer: Schritt hinter (Kreuzschritt) für noch mehr Vorspannung.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden vorsichtig, da das vordere Bein abbremst. Genug Platz um dich herum.",
      golf: "Ein kraftvoller Abschwung beginnt mit der Druckverlagerung in den vorderen Fuß. Diese Übung trainiert genau das Zusammenspiel aus Schritt, Stemmen des vorderen Beins und folgender Rotation, ähnlich wie Schrittübungen, die Golftrainer für die Gewichtsverlagerung nutzen."
    }
  },
  {
    id: "golf_mb_einbeinig_wurf",
    name: "Medizinball-Rotationswurf auf dem vorderen Bein",
    auch: ["Single-Leg Rotational Throw", "Lead Leg Med Ball Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess_mittel", "gesaess"],
    sekundaer: ["bauch", "waden", "quadrizeps"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { huefte: 1, knie: 1, sprunggelenk: 1, ruecken: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Hüfte des Standbeins stabil, das Becken dreht über dem Standbein.",
    info: {
      kurz: "Rotationswurf, bei dem du nur auf dem vorderen Bein stehst. Die Hüfte des Standbeins muss die Rotation zulassen und gleichzeitig stabilisieren, ähnlich wie im Treffmoment, wenn der Körper über das vordere Bein dreht.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand auf das wandnahe Bein, also das vordere Bein im Golfschwung. Das andere Bein hebst du leicht an oder stellst es nur mit den Zehen hinter dir ab.",
        "Beuge das Standbein leicht und neige den Oberkörper in eine leichte Golfhaltung, Ball vor dem Bauch.",
        "Dreh Oberkörper und Becken von der Wand weg, ohne dass das Knie nach innen fällt.",
        "Dreh dann zügig über dem Standbein zur Wand und wirf den Ball auf Brusthöhe gegen die Wand.",
        "Fang den Ball, finde die Balance wieder und beginne erst dann die nächste Wiederholung.",
        "Wechsle nach dem Satz auf das andere Bein, wenn du beide Seiten trainieren möchtest."
      ],
      atmung: "Vor dem Wurf einatmen, beim Wurf ausatmen.",
      fehler: [
        "Knie fällt nach innen: Knie über dem zweiten Zeh halten, Gesäß aktiv.",
        "Gleichgewicht geht verloren: Wurf etwas weniger hart, zuerst die Stabilität sichern.",
        "Oberkörper kippt zur Seite: Achse aufrecht halten.",
        "Zu schnell gesteigert: Erst wenn 5 Würfe sicher stehen, das Tempo erhöhen."
      ],
      vorteile: [
        "Kräftigt die seitliche Hüftmuskulatur unter Rotation.",
        "Verbessert Gleichgewicht und Stabilität des vorderen Beins.",
        "Schult die Rotation über die Hüfte des Standbeins.",
        "Fördert Fuß- und Sprunggelenksstabilität."
      ],
      tipps: [
        "Beginne mit einem sehr leichten Ball von 1 bis 2 kg.",
        "Stell das freie Bein mit den Zehen ab, wenn die Balance noch nicht reicht.",
        "Erst wenn die Hüftinnenrotation des vorderen Beins frei ist, ist die Übung sinnvoll."
      ],
      varianten: "Leichter: freies Bein mit den Zehen abstellen. Schwerer: freies Bein ganz anheben und schnellere Würfe.",
      sicherheit: "Bei Knie-, Hüft- oder Sprunggelenksbeschwerden vorsichtig dosieren. Nicht bei eingeschränktem Gleichgewicht ohne Sicherung.",
      golf: "Im Abschwung dreht sich das Becken über dem vorderen Bein, das gleichzeitig stabil stemmen muss. Der einbeinige Wurf stärkt genau diese Fähigkeit der vorderen Hüfte und kann helfen, ein Ausweichen der Hüfte zum Ziel zu verringern."
    }
  },

  // ---------- Kabel- und Bandrotation in Golfhaltung ----------
  {
    id: "golf_kabel_rotation_ansprechhaltung",
    name: "Kabelrotation in Ansprechhaltung",
    auch: ["Cable Rotation in Golf Posture", "Golf Stance Cable Rotation", "Band Rotation Golf Posture"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "adduktoren", "schulter_hinten"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Golfhaltung beibehalten, die Arme bleiben lang wie beim Schwung.",
    info: {
      kurz: "Horizontale Rotation gegen den Widerstand von Kabel oder Band, ausgeführt in der vorgebeugten Golf-Ansprechhaltung. Kräftigt die Rotation genau in dem Winkel, in dem du auch schwingst.",
      ausfuehrung: [
        "Stell den Kabelzug etwa auf Bauchnabelhöhe ein oder befestige das Band dort. Stell dich seitlich dazu, die hintere Schulter zeigt zum Zug.",
        "Nimm den Griff mit beiden Händen wie einen Schlägergriff und geh einen großen Schritt vom Zug weg, bis Spannung entsteht.",
        "Geh in deine Golfhaltung: Hüfte gebeugt, Rücken lang, Knie locker, Arme hängen gestreckt vor der Brust.",
        "Dreh Hüfte und Oberkörper zum Zug hin wie in den Rückschwung, bis du die Spannung in der hinteren Hüfte spürst.",
        "Dreh dann kontrolliert kräftig vom Zug weg Richtung Ziel, die Hüfte startet, Oberkörper und Arme folgen.",
        "Endet die Bewegung etwa auf Höhe des vorderen Oberschenkels, bremse ab und führe den Griff langsam zurück.",
        "Halte während des ganzen Satzes den Neigungswinkel des Oberkörpers wie beim Golfen."
      ],
      atmung: "Beim Zurückführen einatmen, bei der kraftvollen Drehung Richtung Ziel ausatmen.",
      fehler: [
        "Aufrichten während der Drehung: Neigungswinkel halten, Blick bleibt auf den Boden vor dir.",
        "Arme ziehen statt der Körper dreht: Arme bleiben fast gestreckt, der Griff bleibt vor der Brust.",
        "Hüfte schiebt seitlich weg: Hüfte dreht um die eigene Achse.",
        "Zu viel Gewicht: Mit zu viel Last verlierst du die Haltung. Lieber leichter und sauber."
      ],
      vorteile: [
        "Kräftigt die Rotation im golfspezifischen Haltungswinkel.",
        "Schult die Reihenfolge Hüfte, Rumpf, Arme unter Widerstand.",
        "Kräftigt Gesäß und Rumpf im Zusammenspiel.",
        "Mit Band auch zu Hause gut umsetzbar."
      ],
      tipps: [
        "Arbeite mit mittlerem Gewicht für 8 bis 12 kontrollierte Wiederholungen je Seite.",
        "Für mehr Tempo in späteren Wochen leichter werden und schneller drehen.",
        "Ein Spiegel seitlich hilft, die Haltung zu kontrollieren."
      ],
      varianten: "Leichter: aufrechter Stand und kleinerer Bewegungsweg. Schwerer: mehr Gewicht, langsames exzentrisches Zurückführen oder explosive Ausführung.",
      sicherheit: "Bei Rückenbeschwerden zuerst ohne Vorneigung und mit wenig Gewicht üben.",
      golf: "Du drehst unter Last genau in deiner Schwungebene. Das stärkt die Muskeln, die den Oberkörper in der Golfhaltung drehen, und hilft, die Haltung im Abschwung zu behalten statt dich aufzurichten, was viele Trainer als Early Extension bezeichnen."
    }
  },
  {
    id: "golf_kabel_abschwung",
    name: "Abschwung-Zug am Kabel",
    auch: ["Cable Downswing Pull", "Golf Swing Cable Pull", "High-to-Low Golf Pull"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "latissimus", "bauch"],
    sekundaer: ["gesaess", "brust", "trizeps"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Langsam und kontrolliert, das ist Kraft- und keine Technikübung.",
    info: {
      kurz: "Ziehbewegung vom Ende des Rückschwungs bis etwa zum Treffmoment gegen den Widerstand eines hoch eingestellten Kabels. Kräftigt die Muskulatur, die im Abschwung arbeitet, in einem golfähnlichen Bewegungsweg.",
      ausfuehrung: [
        "Stell den Kabelzug auf Schulterhöhe oder etwas höher ein. Stell dich seitlich dazu, die hintere Schulter zeigt zum Zug.",
        "Greif den Griff mit beiden Händen wie einen Schläger und nimm die Position am Ende des Rückschwungs ein: Hände etwa auf Schulterhöhe, Oberkörper gedreht, Gewicht im hinteren Bein.",
        "Starte den Zug mit einer Gewichtsverlagerung zum vorderen Bein und einer beginnenden Hüftdrehung.",
        "Zieh den Griff mit fast gestreckten Armen diagonal nach unten vor den Körper, der Oberkörper dreht mit.",
        "Beende die Bewegung, wenn die Hände etwa vor dem vorderen Oberschenkel sind, wie im Treffmoment.",
        "Führe den Griff langsam auf demselben Weg zurück in die Ausholposition."
      ],
      atmung: "Beim Zurückführen einatmen, beim Zug nach unten ausatmen.",
      fehler: [
        "Bewegung beginnt mit den Armen: Erst Gewichtsverlagerung und Hüfte, dann Arme.",
        "Ellbogen beugen sich stark: Arme bleiben lang, der Latissimus zieht.",
        "Oberkörper richtet sich auf: Golfhaltung behalten.",
        "Zu viel Gewicht: Die Bewegung muss flüssig und kontrolliert bleiben."
      ],
      vorteile: [
        "Kräftigt Latissimus, Rumpf und Hüfte in einer abschwungähnlichen Bewegung.",
        "Trainiert die Gewichtsverlagerung unter Widerstand.",
        "Gut steuerbar in Gewicht und Tempo.",
        "Ergänzt Medizinballwürfe um eine kraftbetonte Variante."
      ],
      tipps: [
        "Moderates Gewicht und 8 bis 10 Wiederholungen je Seite sind ein guter Start.",
        "Das ist eine Kraftübung: Schwungtechnik übst du mit dem Schläger auf der Range.",
        "Mit Band geht es auch zu Hause, wenn du das Band hoch an einer Tür befestigst."
      ],
      varianten: "Leichter: kleinerer Bewegungsweg nur aus der Hüfte. Schwerer: mehr Gewicht oder langsames Zurückführen über 3 Sekunden.",
      sicherheit: "Bei Schulter- oder Rückenbeschwerden mit wenig Gewicht und kleinem Weg beginnen. Bei Schmerzen abbrechen.",
      golf: "Die Übung kräftigt die Kette, die den Schläger im Abschwung beschleunigt: Druck ins vordere Bein, Hüftdrehung, Rumpf und Latissimus. Sie ersetzt keine Schwungstunde, macht aber die beteiligten Muskeln für diese Bewegung stärker."
    }
  },
  {
    id: "golf_kabel_rueckschwung",
    name: "Rückschwung-Rotation am Kabel",
    auch: ["Cable Backswing Rotation", "Trail Side Loading Rotation", "Low-to-High Backswing Pull"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["oberer_ruecken", "schulter_hinten", "adduktoren"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Die Drehung geht in die hintere Hüfte, das hintere Knie bleibt stabil.",
    info: {
      kurz: "Rotation in Richtung Rückschwung gegen den Zug eines tief eingestellten Kabels, das auf der Zielseite steht. Kräftigt das Einladen in die hintere Hüfte und die Oberkörperdrehung im Rückschwung.",
      ausfuehrung: [
        "Stell den Kabelzug tief ein, etwa auf Kniehöhe. Stell dich seitlich, die vordere Schulter zeigt zum Zug.",
        "Greif den Griff mit beiden Händen, geh in die Golfhaltung und lass die Arme vor dem vorderen Knie hängen.",
        "Dreh Oberkörper und Hüfte vom Zug weg in Richtung Rückschwung, die Hände bewegen sich diagonal nach oben bis etwa Schulterhöhe.",
        "Spür, wie sich das Gewicht in die Innenseite des hinteren Fußes und in die hintere Hüfte verlagert.",
        "Halte die Endposition eine Sekunde, ohne dass das hintere Knie nach außen ausweicht.",
        "Kehre langsam und kontrolliert in die Ausgangsposition zurück."
      ],
      atmung: "Bei der Drehung in den Rückschwung ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Hinteres Knie streckt sich ganz oder weicht nach außen: Knie bleibt leicht gebeugt und über dem Fuß.",
        "Seitliches Schieben der Hüfte weg vom Ziel: Die Hüfte dreht, sie schiebt nicht.",
        "Arme heben ohne Drehung: Oberkörper dreht, Arme bleiben vor der Brust.",
        "Aufrichten aus der Golfhaltung: Neigungswinkel halten."
      ],
      vorteile: [
        "Kräftigt die Rotation in die hintere Hüfte.",
        "Verbessert die Stabilität des hinteren Beins.",
        "Trainiert die Oberkörperdrehung gegen Widerstand.",
        "Gleicht die Belastung zur Abschwungrichtung aus."
      ],
      tipps: [
        "Mittleres Gewicht, 8 bis 12 Wiederholungen, betont langsames Zurückgehen.",
        "Denk daran, die hintere Gesäßtasche nach hinten zu drehen.",
        "Kombiniere sie mit dem Abschwung-Zug für beide Phasen des Schwungs."
      ],
      varianten: "Leichter: aufrechter Stand und Band. Schwerer: mehr Gewicht oder 2 Sekunden Halt am Ende.",
      sicherheit: "Bei Hüft- oder Rückenbeschwerden kleiner Bewegungsweg und wenig Gewicht.",
      golf: "Ein guter Rückschwung lädt Kraft in die hintere Hüfte, ohne dass die Hüfte seitlich wegschiebt. Die Übung stärkt diese Drehung gegen Widerstand und hilft, im Rückschwung stabil über dem hinteren Bein zu bleiben."
    }
  },
  {
    id: "golf_holzhacker_ausfallschritt",
    name: "Holzhacker am Kabel im Ausfallschritt-Stand",
    auch: ["Split-Stance Cable Chop", "Split Stance Chop", "Staggered Stance Chop"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["latissimus", "gesaess", "trizeps"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Der Oberkörper bleibt aufrecht, das Becken stabil.",
    info: {
      kurz: "Diagonaler Zug von oben hinten nach unten vorne im versetzten Stand. Der Ausfallschritt-Stand fordert Stabilität des Beckens, während der Rumpf die diagonale Kraft überträgt. Klassische TPI-Übung für die Kraft von oben nach unten.",
      ausfuehrung: [
        "Stell den Kabelzug hoch ein und befestige ein Seil oder einen Stab. Stell dich seitlich zum Zug.",
        "Geh in einen Ausfallschritt-Stand: Das zugnahe Bein steht hinten, das andere vorn, beide Knie leicht gebeugt.",
        "Greif das Seil mit beiden Händen über der zugnahen Schulter, die Arme fast gestreckt.",
        "Zieh das Seil in einer Diagonale vor dem Körper vorbei nach unten zur Außenseite des vorderen Knies. Erst ziehen die Arme bis zur Brust, dann drücken sie nach unten weiter.",
        "Halte das Becken nach vorn ausgerichtet, der Oberkörper dreht leicht mit.",
        "Führe das Seil kontrolliert auf derselben Linie zurück."
      ],
      atmung: "Beim Zug nach unten ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Becken dreht mit: Gesäß anspannen und beide Füße fest am Boden lassen.",
        "Oberkörper beugt sich nach vorn: Aufrecht bleiben, die Bewegung kommt aus Armen und Rumpf.",
        "Zu schnelles Zurückgehen: Die exzentrische Phase ist wichtig.",
        "Schultern ziehen hoch: Schultern bleiben tief."
      ],
      vorteile: [
        "Trainiert die diagonale Kraftübertragung durch den Rumpf.",
        "Fordert die Stabilität von Becken und Hüfte im versetzten Stand.",
        "Kräftigt schräge Bauchmuskeln und Latissimus.",
        "Wirkt gelenkschonend durch die kontrollierte Bewegung."
      ],
      tipps: [
        "Ein Seil erlaubt eine natürliche Handbewegung, ein Stab macht die Übung stabiler.",
        "8 bis 12 Wiederholungen je Seite mit kontrolliertem Tempo.",
        "Der Blick folgt den Händen, um die Rotation mitzunehmen."
      ],
      varianten: "Leichter: paralleler Stand. Schwerer: halbkniend oder im Ausfallschritt mit schmaler Spur.",
      sicherheit: "Bei Schulterbeschwerden den Startpunkt nicht ganz über Kopf wählen.",
      golf: "Die Diagonale von oben hinten nach unten vorn entspricht grob der Richtung des Abschwungs. Der versetzte Stand verlangt, dass du das Becken stabil hältst, während der Oberkörper Kraft überträgt. Das unterstützt Kontrolle und Kraft im Abschwung."
    }
  },
  {
    id: "golf_lift_ausfallschritt",
    name: "Diagonales Heben am Kabel im Ausfallschritt-Stand",
    auch: ["Split-Stance Cable Lift", "Split Stance Lift", "Low-to-High Cable Lift"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["schulter_vorn", "oberer_ruecken", "gesaess"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Becken bleibt ruhig, nur Rumpf und Arme heben diagonal.",
    info: {
      kurz: "Diagonale Bewegung von unten zur Seite nach oben über die andere Schulter im versetzten Stand. Gegenstück zum Holzhacker und Teil der klassischen Chop-and-Lift-Reihe aus Physiotherapie und TPI-Training.",
      ausfuehrung: [
        "Stell den Kabelzug tief ein und befestige ein Seil oder einen Stab. Stell dich seitlich zum Zug.",
        "Geh in einen Ausfallschritt-Stand: Das zugnahe Bein steht vorn, das andere hinten.",
        "Greif das Seil neben dem vorderen Knie, die Arme fast gestreckt.",
        "Zieh das Seil diagonal zur Brust und drück es dann weiter nach oben über die abgewandte Schulter.",
        "Halte das Becken stabil nach vorn ausgerichtet, der Oberkörper bleibt aufrecht.",
        "Führe das Seil auf derselben Linie langsam zurück."
      ],
      atmung: "Beim Heben ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz am Ende: Rippen unten lassen, nicht nach hinten lehnen.",
        "Becken dreht mit: Gesäß anspannen, Füße fest.",
        "Bewegung zu groß: Nur so weit, wie das Becken ruhig bleibt.",
        "Schwung holen: Gleichmäßiges Tempo halten."
      ],
      vorteile: [
        "Kräftigt die Rumpfmuskulatur in der Gegendiagonale zum Holzhacker.",
        "Verbessert Stabilität und Haltung beim Heben über Kopf.",
        "Fördert die Kontrolle von Becken und Rumpf.",
        "Gute Ergänzung, damit beide Diagonalen trainiert werden."
      ],
      tipps: [
        "Etwas weniger Gewicht als beim Holzhacker wählen.",
        "8 bis 12 Wiederholungen je Seite.",
        "Mit Band gut zu Hause umsetzbar, Band tief an einer Tür befestigen."
      ],
      varianten: "Leichter: paralleler Stand. Schwerer: halbkniend oder auf schmaler Spur.",
      sicherheit: "Bei Schulterbeschwerden nicht ganz über Kopf heben. Bei Rückenbeschwerden kein Hohlkreuz am Ende.",
      golf: "Die Bewegung von unten nach oben ähnelt dem Weg der Arme in den Durchschwung und das Finish. Sie stärkt die Rumpfmuskulatur in der Diagonale, die im Finish die Bewegung trägt und abbremst, und sorgt für Ausgleich zum Holzhacker."
    }
  },
  {
    id: "golf_kabel_rotation_explosiv",
    name: "Schnelle Kabelrotation in Golfhaltung",
    auch: ["Speed Cable Rotation", "Explosive Cable Rotation", "Banded Speed Rotation"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["bauch", "adduktoren"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Wenig Gewicht, maximale Geschwindigkeit Richtung Ziel, langsam zurück.",
    info: {
      kurz: "Rotation in Golfhaltung gegen leichten Kabel- oder Bandwiderstand, so schnell wie möglich in Richtung Ziel. Eine Brücke zwischen Krafttraining und schnellen Würfen, wenn kein Medizinball oder keine Wand vorhanden ist.",
      ausfuehrung: [
        "Stell den Kabelzug auf Bauchnabelhöhe, wähle ein leichtes Gewicht und stell dich seitlich, die hintere Schulter zum Zug.",
        "Greif den Griff mit beiden Händen und geh in deine Golfhaltung.",
        "Lass dich vom Zug kontrolliert in die Rückschwungdrehung ziehen.",
        "Dreh dann explosiv Richtung Ziel, die Hüfte startet, Rumpf und Arme folgen.",
        "Bremse aktiv ab, sobald die Hände vor dem vorderen Bein sind.",
        "Kehre langsam zurück und starte die nächste Wiederholung erst, wenn du stabil bist."
      ],
      atmung: "Bei der schnellen Drehung kräftig ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Zu viel Gewicht: Die Bewegung muss schnell sein, etwa 30 bis 40 Prozent deines normalen Rotationsgewichts.",
        "Seil reißt zurück: Langsam zurückführen, nicht vom Gewicht zurückschleudern lassen.",
        "Aufrichten in der Drehung: Golfhaltung behalten.",
        "Arme ziehen: Hüfte zuerst."
      ],
      vorteile: [
        "Trainiert Rotationsgeschwindigkeit mit einfach dosierbarem Widerstand.",
        "Funktioniert ohne Wand und Medizinball.",
        "Verbessert das Abbremsen der Rotation.",
        "Mit Band auch zu Hause möglich."
      ],
      tipps: [
        "Kurze Sätze von 5 bis 6 Wiederholungen je Seite mit voller Pause.",
        "Mach sie vor schwereren Kraftübungen, solange du frisch bist.",
        "Bei Bändern auf eine gute Befestigung achten."
      ],
      varianten: "Leichter: kleinerer Bewegungsweg. Schwerer: etwas mehr Widerstand bei gleicher Geschwindigkeit.",
      sicherheit: "Bei Rückenbeschwerden nur nach Abklärung. Band vor jedem Training auf Risse prüfen.",
      golf: "Schlägerkopfgeschwindigkeit entsteht aus schneller Rotation. Die Übung trainiert Geschwindigkeit in der Golfhaltung und lehrt zugleich das kontrollierte Abbremsen, das die Wirbelsäule im Durchschwung schützt."
    }
  },
  {
    id: "golf_landmine_rotationsdruecken",
    name: "Landmine-Rotationsdrücken im Ausfallschritt-Stand",
    auch: ["Split-Stance Landmine Rotational Press", "Landmine Rotational Press", "Landmine Punch"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "schulter_vorn", "brust"],
    sekundaer: ["trizeps", "gesaess", "quadrizeps"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Hüfte dreht zuerst, dann drückt der Arm.",
    info: {
      kurz: "Einarmiges Drücken des Landmine-Endes aus der Hüfte nach vorn oben, kombiniert mit einer Hüft- und Rumpfrotation. Verbindet Beinkraft, Rotation und Druckkraft des Arms.",
      ausfuehrung: [
        "Stell dich seitlich versetzt zum Stangenende in einen leichten Ausfallschritt, das Bein auf der Seite des drückenden Arms steht hinten.",
        "Nimm das Stangenende in die Hand des hinteren Arms auf Schulterhöhe, der Oberkörper ist leicht zur Seite gedreht.",
        "Drück dich vom hinteren Fuß ab und dreh die Hüfte nach vorn.",
        "Drück die Stange mit dem Arm nach vorn oben, bis der Arm gestreckt ist.",
        "Senke die Stange kontrolliert zur Schulter zurück und dreh die Hüfte dabei wieder leicht zurück.",
        "Mach alle Wiederholungen einer Seite und wechsle dann."
      ],
      atmung: "Beim Drücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Nur Armkraft: Die Bewegung startet mit Bein und Hüfte.",
        "Hohlkreuz: Bauch anspannen, Rippen unten.",
        "Schulter zieht hoch: Schulter bleibt tief.",
        "Zu viel Gewicht: Die Rotation muss flüssig bleiben."
      ],
      vorteile: [
        "Verbindet Rotation mit Druckkraft.",
        "Schonender für die Schulter als Drücken über Kopf.",
        "Trainiert die Kraftübertragung von hinten nach vorn.",
        "Kann explosiv oder kontrolliert ausgeführt werden."
      ],
      tipps: [
        "6 bis 10 Wiederholungen je Seite.",
        "Für Schnellkraft leichter werden und explosiv drücken.",
        "Ohne Landmine: Stangenende in eine Ecke stellen."
      ],
      varianten: "Leichter: paralleler Stand ohne Rotation. Schwerer: mehr Gewicht oder explosiv mit Schritt.",
      sicherheit: "Bei Schulterbeschwerden Gewicht und Höhe anpassen. Stangenende sicher fixieren.",
      golf: "Die Übung trainiert die Druckverlagerung vom hinteren Bein nach vorn und die Hüftdrehung, die im Abschwung den aktiven hinteren Arm antreibt. Sie verbessert die Kraftübertragung von unten nach oben."
    }
  },
  {
    id: "golf_kabel_rudern_rotation",
    name: "Einarmiges Kabelrudern mit Rotation",
    auch: ["Single-Arm Rotational Cable Row", "Rotational Row", "Split-Stance Rotational Row"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken", "schraege_bauch"],
    sekundaer: ["schulter_hinten", "bizeps", "gesaess"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Der Rücken zieht, der Oberkörper dreht mit nach hinten.",
    info: {
      kurz: "Einarmiges Rudern am Kabel aus einem Ausfallschritt-Stand, bei dem sich der Oberkörper am Ende des Zuges aufdreht. Verbindet Zugkraft des Rückens mit Rotation, ähnlich der Drehung in den Rückschwung.",
      ausfuehrung: [
        "Stell den Kabelzug auf Brusthöhe und stell dich frontal dazu in einen Ausfallschritt, das Bein auf der Zugseite steht hinten.",
        "Greif den Griff mit der Hand der hinteren Seite, der Arm ist gestreckt, der Oberkörper leicht zum Zug gedreht.",
        "Zieh den Ellbogen nach hinten an der Seite vorbei und dreh dabei den Oberkörper auf.",
        "Am Ende zeigt die Brust etwas zur Zugseite weg, das Schulterblatt ist zur Wirbelsäule gezogen.",
        "Führe den Griff kontrolliert zurück, lass den Oberkörper mitdrehen und die Schulter leicht nach vorn kommen.",
        "Wechsle nach dem Satz Arm und Beinstellung."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Zieh nur mit dem Arm: Erst das Schulterblatt, dann der Ellbogen, dann die Drehung.",
        "Schulter zieht nach oben: Schulter tief halten.",
        "Hohlkreuz am Ende: Rippen unten.",
        "Zu viel Gewicht: Volle Rotation muss möglich sein."
      ],
      vorteile: [
        "Kräftigt Latissimus und oberen Rücken einseitig.",
        "Verbindet Zugbewegung und Rotation.",
        "Verbessert die Haltung und Schulterblattkontrolle.",
        "Gute Ergänzung zu reinen Rotationsübungen."
      ],
      tipps: [
        "10 bis 12 Wiederholungen je Seite.",
        "Denk an das Bild, den Ellbogen in die hintere Hosentasche zu stecken.",
        "Mit Band an einer Türverankerung zu Hause gut machbar."
      ],
      varianten: "Leichter: ohne Rotation. Schwerer: mehr Gewicht oder einbeinig.",
      sicherheit: "Bei Schulterbeschwerden kleinerer Bewegungsumfang.",
      golf: "Im Rückschwung zieht das hintere Schulterblatt nach hinten, während der Oberkörper dreht. Das Rotationsrudern stärkt diese Zug-Dreh-Bewegung und unterstützt eine stabile Schulterposition oben im Schwung."
    }
  },

  // ---------- Anti-Rotation in Golfhaltung ----------
  {
    id: "golf_pallof_ansprechhaltung",
    name: "Pallof Press in Golfhaltung",
    auch: ["Pallof Press in Golf Posture", "Golf Stance Pallof Press", "Address Position Pallof"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["bauch", "schraege_bauch"],
    sekundaer: ["gesaess", "schulter_vorn"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Hände vor dem Brustbein ausstrecken, ohne dass sich der Körper dreht.",
    info: {
      kurz: "Pallof Press in der vorgebeugten Ansprechhaltung. Du drückst den Griff vor die Brust und widerstehst dem seitlichen Zug, was die Rumpfstabilität genau in der Position trainiert, in der du den Ball ansprichst.",
      ausfuehrung: [
        "Stell den Kabelzug oder das Band auf Brusthöhe in der Golfhaltung ein und stell dich seitlich dazu.",
        "Greif den Griff mit beiden Händen und geh einen Schritt vom Zug weg, bis Spannung entsteht.",
        "Geh in deine Golfhaltung: Hüfte gebeugt, Rücken lang, Knie locker, Füße schulterbreit.",
        "Halte den Griff am Brustbein und drück ihn langsam mit gestreckten Armen nach vorn.",
        "Halte die gestreckte Position zwei Sekunden, ohne dass Schultern oder Hüfte zum Zug drehen.",
        "Führe den Griff zur Brust zurück und wiederhole."
      ],
      atmung: "Beim Ausstrecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Körper dreht zum Zug: Weniger Gewicht oder näher an den Zug stellen.",
        "Aufrichten aus der Golfhaltung: Neigungswinkel bewusst halten.",
        "Hohlkreuz: Rippen unten, Bauch leicht angespannt.",
        "Schultern ziehen hoch: Lang machen."
      ],
      vorteile: [
        "Trainiert die Anti-Rotation in der golfspezifischen Haltung.",
        "Kräftigt tiefe und schräge Bauchmuskeln.",
        "Sehr gelenkschonend.",
        "Gut als Aktivierung vor der Runde mit Band."
      ],
      tipps: [
        "8 bis 12 Wiederholungen mit je 2 Sekunden Halt.",
        "Je weiter du die Hände ausstreckst, desto schwerer wird es.",
        "Lässt sich gut zwischen Sätzen schwerer Übungen einbauen."
      ],
      varianten: "Leichter: aufrecht stehen. Schwerer: längerer Halt, Kreise mit den Händen oder einbeinig.",
      sicherheit: "Geeignet auch für Golfer mit Rückenbeschwerden in der Vorgeschichte, solange schmerzfrei.",
      golf: "Im Schwung muss der Rumpf in der vorgebeugten Haltung stabil bleiben, während starke Drehkräfte wirken. Der Pallof Press in Golfhaltung stärkt diese Stabilität und kann helfen, den unteren Rücken vor ungewollter Rotation zu schützen."
    }
  },
  {
    id: "golf_pallof_einbeinig",
    name: "Pallof Press einbeinig",
    auch: ["Single-Leg Pallof Press", "Single Leg Anti-Rotation Press"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["bauch", "schraege_bauch", "gesaess_mittel"],
    sekundaer: ["gesaess", "waden"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Becken waagerecht, das Standknie leicht gebeugt.",
    info: {
      kurz: "Pallof Press auf einem Bein. Zum seitlichen Zug kommt die Aufgabe, das Gleichgewicht zu halten, was die Hüftmuskulatur des Standbeins stark fordert.",
      ausfuehrung: [
        "Stell den Kabelzug oder das Band auf Brusthöhe ein und stell dich seitlich dazu.",
        "Halte den Griff am Brustbein und stell dich auf das Bein, das weiter vom Zug entfernt ist. Das andere Bein hebst du leicht an.",
        "Beuge das Standknie leicht und halte das Becken waagerecht.",
        "Drück den Griff langsam mit gestreckten Armen nach vorn und halte zwei Sekunden.",
        "Führe den Griff zurück zur Brust, ohne dass du das Gleichgewicht verlierst.",
        "Mach alle Wiederholungen und wechsle dann Seite und Standbein."
      ],
      atmung: "Beim Ausstrecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Becken kippt zur Seite: Gesäß des Standbeins aktiv halten.",
        "Knie fällt nach innen: Knie über dem Fuß.",
        "Körper dreht zum Zug: Weniger Widerstand.",
        "Fuß wackelt stark: Zehen locker, Druck über den ganzen Fuß verteilen."
      ],
      vorteile: [
        "Kombiniert Anti-Rotation mit Gleichgewicht.",
        "Kräftigt die seitliche Hüftmuskulatur.",
        "Verbessert die Stabilität von Fuß und Sprunggelenk.",
        "Wenig Gewicht nötig."
      ],
      tipps: [
        "Beginne mit dem Bein auf der Zugseite in der Luft, das ist meist leichter.",
        "6 bis 10 Wiederholungen je Seite mit 2 Sekunden Halt.",
        "Bei Unsicherheit die Zehen des freien Fußes kurz abstellen."
      ],
      varianten: "Leichter: beidbeinig oder mit Zehen am Boden. Schwerer: Augen kurz schließen oder Golfhaltung einnehmen.",
      sicherheit: "Bei Gleichgewichtsproblemen in Reichweite einer Wand üben.",
      golf: "Im Abschwung landet viel Gewicht auf dem vorderen Bein, während der Rumpf Drehkräfte abfangen muss. Die einbeinige Variante verbindet beide Aufgaben und stärkt die Stabilität für ein festes vorderes Bein im Treffmoment."
    }
  },
  {
    id: "golf_iso_rueckschwung",
    name: "Isometrischer Halt am Ende des Rückschwungs",
    auch: ["Top of Backswing Iso Hold", "Backswing Anti-Rotation Hold", "Banded Top of Backswing Hold"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["bauch", "oberer_ruecken", "adduktoren"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Die Spannung liegt in der hinteren Hüfte und im Rumpf, nicht in den Armen.",
    info: {
      kurz: "Du hältst die Position am Ende des Rückschwungs gegen ein Band oder Kabel, das dich weiter in die Drehung ziehen will. Stärkt die Stabilität der aufgedrehten Position und die Kontrolle der hinteren Hüfte.",
      ausfuehrung: [
        "Befestige das Band etwa auf Schulterhöhe hinter dir auf der Seite des hinteren Beins oder stell den Kabelzug dort ein.",
        "Greif das Band mit beiden Händen wie einen Schläger und geh in deine Golfhaltung.",
        "Dreh dich in die Position am Ende des Rückschwungs: Oberkörper gedreht, Gewicht auf der Innenseite des hinteren Fußes, Hände etwa auf Schulterhöhe.",
        "Das Band zieht dich weiter in die Drehung. Halte dagegen, sodass keine Bewegung entsteht.",
        "Halte die Position die vorgegebene Zeit, ruhig und mit Spannung in der hinteren Hüfte und im Rumpf.",
        "Löse die Spannung langsam, stell dich neu hin und wechsle nach Bedarf die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Hinteres Knie streckt sich: Knie bleibt leicht gebeugt.",
        "Hüfte schiebt seitlich weg: Hüfte bleibt über dem hinteren Fuß.",
        "Arme halten allein: Die Spannung kommt aus Rumpf und Hüfte.",
        "Zu starker Zug: Die Position muss 20 bis 30 Sekunden sauber haltbar sein."
      ],
      vorteile: [
        "Stärkt die Stabilität in der aufgedrehten Rückschwungposition.",
        "Kräftigt die hintere Hüfte und die schrägen Bauchmuskeln isometrisch.",
        "Verbessert das Körpergefühl für die Endposition.",
        "Sehr gelenkschonend durch statisches Halten."
      ],
      tipps: [
        "3 bis 4 Sätze von 20 bis 30 Sekunden.",
        "Kontrolliere die Position im Spiegel oder mit Video.",
        "Gut kombiniert mit Würfen aus der Pause."
      ],
      varianten: "Leichter: weniger Bandspannung oder kürzere Zeit. Schwerer: mehr Spannung oder auf einer instabilen Unterlage.",
      sicherheit: "Bei Rückenbeschwerden nur so weit drehen, wie schmerzfrei möglich.",
      golf: "Oben im Rückschwung entscheidet die Stabilität darüber, ob du die aufgebaute Spannung nutzen kannst. Der Halt gegen das Band lehrt dich, die Drehung zu begrenzen und zu stabilisieren, statt über die Hüfte oder die Arme zu überdrehen."
    }
  },
  {
    id: "golf_iso_treffmoment",
    name: "Isometrischer Halt in Treffmomentposition",
    auch: ["Impact Position Iso Hold", "Banded Impact Hold", "Impact Isometric"],
    muster: "anti_rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "bauch"],
    sekundaer: ["latissimus", "adduktoren", "unterarm"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Gewicht vorn, Hüfte geöffnet, Hände vor dem vorderen Oberschenkel.",
    info: {
      kurz: "Halten der Treffmomentposition gegen den Zug eines Bandes, das von der Rückschwungseite zieht. Stärkt Rumpf, Hüfte und Arme in der Position, in der im Schwung die höchsten Kräfte wirken.",
      ausfuehrung: [
        "Befestige ein Band auf Hüfthöhe auf der Seite des hinteren Beins oder stell den Kabelzug dort ein.",
        "Greif das Band wie einen Schläger und geh in die Golfhaltung.",
        "Nimm die Treffmomentposition ein: Gewicht überwiegend auf dem vorderen Bein, Hüfte leicht zum Ziel geöffnet, Hände vor dem vorderen Oberschenkel.",
        "Halte die Position gegen den Zug des Bandes, die Arme sind gestreckt, die Schultern ruhig.",
        "Atme ruhig weiter und halte die vorgegebene Zeit.",
        "Löse langsam und stell dich neu hin."
      ],
      atmung: "Gleichmäßig weiteratmen, keine Pressatmung.",
      fehler: [
        "Aufrichten: Neigungswinkel halten.",
        "Gewicht bleibt hinten: Druck bewusst im vorderen Fuß spüren.",
        "Handgelenke knicken ein: Handgelenke fest, vorderes Handgelenk eher gerade bis leicht gebeugt.",
        "Schultern ziehen hoch: Schultern tief."
      ],
      vorteile: [
        "Stärkt die Rumpfstabilität in der Treffmomentposition.",
        "Fördert das Gefühl für Gewicht auf dem vorderen Bein.",
        "Kräftigt Unterarme und Latissimus statisch.",
        "Gelenkschonend durch isometrisches Halten."
      ],
      tipps: [
        "3 Sätze von 15 bis 30 Sekunden.",
        "Lass dir die Position einmal von einem Golflehrer zeigen und halte sie dann im Training.",
        "Gut nach schnellen Würfen als ruhiger Ausgleich."
      ],
      varianten: "Leichter: weniger Bandspannung. Schwerer: mehr Spannung oder kurze Impulse gegen das Band.",
      sicherheit: "Bei Handgelenks- oder Ellbogenbeschwerden vorsichtig, Spannung niedrig halten.",
      golf: "Im Treffmoment wirken die größten Kräfte auf Körper und Schläger. Wenn Rumpf, vorderes Bein und Arme diese Position stabil halten können, kann die Energie besser auf den Ball übergehen. Die Übung stärkt genau diese Haltung."
    }
  },

  // ---------- Vorderes Bein, Hüftrotation, Gewichtsverlagerung ----------
  {
    id: "golf_vorderes_bein_stemmen_band",
    name: "Vorderes Bein stemmen mit Band",
    auch: ["Lead Hip Post Drill", "Lead Leg Block", "Banded Lead Hip Post", "Lead Hip Rotation with Band"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "adduktoren"],
    sekundaer: ["schraege_bauch", "quadrizeps"],
    geraete: [["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Die Hüfte dreht nach hinten über das vordere Bein, sie schiebt nicht zum Ziel.",
    info: {
      kurz: "Ein Band um die Hüfte zieht dich Richtung Ziel, während du die vordere Hüfte nach hinten aufdrehst und das vordere Bein streckst. Trainiert das Stemmen und Aufdrehen über dem vorderen Bein, wie es im Abschwung passiert.",
      ausfuehrung: [
        "Befestige ein Band auf Hüfthöhe an einem stabilen Punkt auf der Zielseite und leg die Schlaufe um deine Hüfte.",
        "Stell dich in Golfhaltung, die vordere Seite zeigt zum Ankerpunkt. Das Band zieht dich leicht Richtung Ziel.",
        "Verlagere das Gewicht auf das vordere Bein, ohne dass die Hüfte zum Ziel geschoben wird.",
        "Dreh die vordere Hüfte nach hinten, als würdest du die vordere Gesäßtasche nach hinten ziehen, und strecke dabei das vordere Knie zunehmend.",
        "Am Ende stehst du stabil auf dem vorderen Bein, der Gürtel zeigt zum Ziel, das vordere Knie ist fast gestreckt.",
        "Kehre langsam in die Ausgangsposition zurück und wiederhole."
      ],
      atmung: "Beim Aufdrehen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Hüfte rutscht Richtung Ziel: Das Band verstärkt diesen Fehler bewusst, also aktiv dagegen nach hinten drehen.",
        "Knie fällt nach innen: Knie über dem Fuß, Druck auf der Außenseite des Fußes.",
        "Oberkörper richtet sich auf: Golfhaltung beibehalten.",
        "Fuß dreht oder rollt weg: Vorderer Fuß bleibt flach am Boden."
      ],
      vorteile: [
        "Stärkt das vordere Bein als stabiles Stemmbein.",
        "Verbessert Kraft und Kontrolle der Hüftinnenrotation.",
        "Gibt durch das Band direkte Rückmeldung über seitliches Schieben.",
        "Einfach zu Hause oder auf der Range mit einem Band durchführbar."
      ],
      tipps: [
        "10 bis 15 langsame Wiederholungen, dann einige zügigere.",
        "Ein mittelstarkes Band reicht, zu starke Bänder machen die Übung unsauber.",
        "Kontrolliere vorher, ob deine vordere Hüfte genug Innenrotation hat."
      ],
      varianten: "Leichter: ohne Band nur die Bewegung üben. Schwerer: stärkeres Band oder mit Schläger in der Hand.",
      sicherheit: "Bei Hüft- oder Kniebeschwerden nur im schmerzfreien Bereich und mit leichtem Band.",
      golf: "Viele Golfer schieben die Hüfte im Abschwung zum Ziel, statt sie über einem stabilen vorderen Bein aufzudrehen. Diese Stemmbewegung, oft Lead Leg Block oder Hip Post genannt, kann helfen, Rotationsgeschwindigkeit zu erzeugen und den Schwung zu stabilisieren."
    }
  },
  {
    id: "golf_hueftdrehung_band_rueckschwung",
    name: "Hüftdrehung ins hintere Bein mit Band",
    auch: ["Banded Trail Hip Load", "Trail Hip Turn with Band", "Banded Hip Turn Backswing"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["gesaess", "adduktoren", "gesaess_mittel"],
    sekundaer: ["schraege_bauch", "quadrizeps"],
    geraete: [["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1, knie: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Das hintere Knie bleibt gebeugt und stabil, die Hüfte dreht hinein.",
    info: {
      kurz: "Ein Band um die Hüfte zieht dich weg vom Ziel, während du dich kontrolliert in die hintere Hüfte drehst. Trainiert ein Einladen in den Rückschwung, ohne dass die Hüfte seitlich ausweicht.",
      ausfuehrung: [
        "Befestige ein Band auf Hüfthöhe auf der Seite des hinteren Beins und leg die Schlaufe um deine Hüfte.",
        "Stell dich in Golfhaltung, das Band zieht dich leicht nach hinten weg vom Ziel.",
        "Dreh das Becken in die hintere Hüfte, als würde die hintere Gesäßtasche nach hinten wandern.",
        "Halte das hintere Knie leicht gebeugt und stabil über dem Fuß, das Gewicht liegt auf der Innenseite des hinteren Fußes.",
        "Halte die Endposition kurz und spür die Spannung in der hinteren Hüfte und den Adduktoren.",
        "Dreh dich langsam zurück in die Ausgangsposition."
      ],
      atmung: "Beim Eindrehen ausatmen, beim Zurückdrehen einatmen.",
      fehler: [
        "Hüfte schiebt seitlich weg vom Ziel: Drehen statt Schieben, das Band verstärkt den Fehler.",
        "Hinteres Knie streckt sich: Knie bleibt gebeugt.",
        "Gewicht auf der Außenkante des Fußes: Druck auf der Innenseite halten.",
        "Oberkörper kippt zum Ziel: Neigungswinkel und Achse halten."
      ],
      vorteile: [
        "Kräftigt die hintere Hüfte in Innenrotation.",
        "Trainiert eine stabile Rückschwungposition.",
        "Gibt Rückmeldung über seitliches Ausweichen.",
        "Einfach mit einem Band umsetzbar."
      ],
      tipps: [
        "10 bis 12 kontrollierte Wiederholungen je Seite.",
        "Leg eine Hand auf die hintere Hüfte, um die Drehung zu spüren.",
        "Kombiniere sie mit dem Stemmen des vorderen Beins für beide Seiten des Schwungs."
      ],
      varianten: "Leichter: ohne Band. Schwerer: stärkeres Band oder mit Schläger quer vor der Brust.",
      sicherheit: "Bei Hüft- oder Leistenbeschwerden Bewegungsumfang verkleinern.",
      golf: "Ein seitliches Wegschieben der Hüfte im Rückschwung, oft Sway genannt, kostet Stabilität und Konstanz. Die Übung stärkt die Drehung in ein stabiles hinteres Bein und schult das Gefühl für ein sauberes Einladen."
    }
  },
  {
    id: "golf_huefte_innenrotation_band",
    name: "Hüftinnenrotation mit Miniband in Ansprechhaltung",
    auch: ["Banded Hip Internal Rotation in Golf Posture", "Standing Hip IR with Band"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel", "adduktoren"],
    sekundaer: ["gesaess"],
    geraete: [["mini_band"], ["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Fuß bleibt fest, das Knie dreht nach innen, die Hüfte dreht im Gelenk.",
    info: {
      kurz: "Aktive Innenrotation der Hüfte gegen ein Band in der Golfhaltung. Verbessert Beweglichkeit und Kraft der Hüftinnenrotation, die im Rückschwung (hintere Hüfte) und im Durchschwung (vordere Hüfte) gebraucht wird.",
      ausfuehrung: [
        "Leg ein Miniband um beide Knie oder befestige ein langes Band seitlich auf Kniehöhe und leg es um das Knie des trainierten Beins, sodass es nach außen zieht.",
        "Geh in deine Golfhaltung, Füße schulterbreit, Knie leicht gebeugt.",
        "Halte den Fuß des trainierten Beins fest am Boden und dreh das Knie gegen den Bandzug nach innen. Das Becken dreht dabei mit über das Bein.",
        "Halte die Endposition eine Sekunde und spür die Arbeit tief in der Hüfte.",
        "Lass das Knie langsam gegen den Zug zurück nach außen kommen.",
        "Mach alle Wiederholungen und wechsle dann die Seite."
      ],
      atmung: "Beim Eindrehen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Fuß rollt stark nach innen: Fuß bleibt stabil, die Drehung entsteht in der Hüfte.",
        "Oberkörper dreht statt der Hüfte: Schultern ruhig halten.",
        "Zu starkes Band: Bewegung wird klein und ruckartig, leichteres Band nehmen.",
        "Schnelles Zurückschnellen: Kontrolliert zurückführen."
      ],
      vorteile: [
        "Verbessert die aktive Innenrotation der Hüfte.",
        "Kräftigt die tiefen Hüftmuskeln in einer golftypischen Position.",
        "Kann Ausweichbewegungen im Knie und Rücken verringern.",
        "Ohne großen Aufwand zu Hause machbar."
      ],
      tipps: [
        "15 bis 20 langsame Wiederholungen je Seite.",
        "Gut als Aufwärmübung vor dem Golfen.",
        "Prüfe vorher im Sitzen, wie viel Innenrotation du links und rechts hast."
      ],
      varianten: "Leichter: ohne Band oder aufrecht stehend. Schwerer: stärkeres Band oder 3 Sekunden Halt.",
      sicherheit: "Bei Hüft- oder Leistenschmerzen nur im schmerzfreien Bereich. Bei Knieproblemen Druck auf das Knie gering halten.",
      golf: "Fehlt Innenrotation in der hinteren Hüfte, weicht die Hüfte im Rückschwung seitlich aus. Fehlt sie vorn, wird es im Durchschwung eng und der Körper richtet sich auf. Mehr aktive Innenrotation schafft Platz für eine saubere Hüftdrehung."
    }
  },
  {
    id: "golf_huefte_aussenrotation_band",
    name: "Hüftaußenrotation mit Miniband in Ansprechhaltung",
    auch: ["Banded Hip External Rotation in Golf Posture", "Standing Hip ER with Band"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["adduktoren"],
    geraete: [["mini_band"], ["band"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Fuß bleibt flach, das Knie dreht nach außen gegen das Band.",
    info: {
      kurz: "Aktive Außenrotation der Hüfte gegen ein Band in der Golfhaltung. Kräftigt die Gesäßmuskulatur, die das Knie stabil über dem Fuß hält und die Hüftdrehung kontrolliert.",
      ausfuehrung: [
        "Leg ein Miniband um beide Knie oder befestige ein Band seitlich, sodass es das Knie des trainierten Beins nach innen zieht.",
        "Geh in deine Golfhaltung, Füße schulterbreit.",
        "Halte den Fuß flach am Boden und dreh das Knie gegen den Bandzug nach außen.",
        "Halte kurz und spür das Gesäß arbeiten.",
        "Lass das Knie langsam zurück zur Mitte kommen.",
        "Wechsle nach dem Satz die Seite oder arbeite mit beiden Knien zugleich."
      ],
      atmung: "Beim Drehen nach außen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Fuß rollt auf die Außenkante: Großzehenballen bleibt am Boden.",
        "Becken kippt: Becken ruhig halten.",
        "Zu kleine Bewegung: Leichteres Band wählen.",
        "Aufrichten: Golfhaltung beibehalten."
      ],
      vorteile: [
        "Kräftigt Gesäß und seitliche Hüftmuskeln.",
        "Verbessert die Knieausrichtung in der Golfhaltung.",
        "Ergänzt die Innenrotation zu einer ausgewogenen Hüfte.",
        "Gut als Aktivierung vor der Runde."
      ],
      tipps: [
        "15 bis 20 Wiederholungen je Seite.",
        "Mit Miniband um beide Knie kannst du beide Seiten gleichzeitig trainieren.",
        "Kombiniere sie mit der Innenrotation im Wechsel."
      ],
      varianten: "Leichter: aufrecht ohne Band. Schwerer: stärkeres Band oder längerer Halt.",
      sicherheit: "Bei Hüftschmerzen im schmerzfreien Bereich bleiben.",
      golf: "Eine starke Außenrotation hält das hintere Knie im Rückschwung stabil und hilft, das vordere Knie im Abschwung nicht nach innen fallen zu lassen. So bleibt die Hüftdrehung kontrolliert."
    }
  },

  // ---------- Haltung und Körperkontrolle (TPI-Grundübungen) ----------
  {
    id: "golf_beckenkippen",
    name: "Beckenkippen in Golfhaltung",
    auch: ["Pelvic Tilt Drill", "Golf Posture Pelvic Tilt", "Anterior Posterior Pelvic Tilt"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["bauch", "ruecken_unten", "hueftbeuger"],
    sekundaer: ["gesaess"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Nur das Becken bewegt sich, der Oberkörper bleibt ruhig.",
    info: {
      kurz: "In der Golfhaltung kippst du das Becken abwechselnd nach vorn ins Hohlkreuz und nach hinten in einen flachen Rücken. Eine Grundübung aus dem TPI-Screening für die Kontrolle von Becken und Lendenwirbelsäule.",
      ausfuehrung: [
        "Geh in deine Golfhaltung, die Arme vor der Brust verschränkt oder locker hängend.",
        "Kippe das Becken nach vorn, sodass ein leichtes Hohlkreuz entsteht und das Gesäß nach hinten oben zeigt.",
        "Kippe das Becken dann nach hinten, sodass der untere Rücken flach oder leicht rund wird und das Gesäß sich einrollt.",
        "Bewege dich langsam zwischen beiden Endpositionen hin und her, der Oberkörper und die Knie bleiben ruhig.",
        "Finde zum Schluss die Mitte: ein neutraler Rücken, wie du ihn beim Ansprechen haben möchtest.",
        "Wiederhole die Bewegung mit ruhigem Rhythmus."
      ],
      atmung: "Beim Kippen nach hinten ausatmen, beim Kippen nach vorn einatmen.",
      fehler: [
        "Knie beugen und strecken sich mit: Knie bleiben ruhig.",
        "Oberkörper bewegt sich auf und ab: Nur das Becken kippt.",
        "Zu schnell: Langsam und bewusst arbeiten.",
        "Bewegung nur in eine Richtung möglich: Mit kleinerem Weg üben, die Kontrolle kommt mit der Zeit."
      ],
      vorteile: [
        "Verbessert das Gefühl für die Beckenstellung.",
        "Hilft, eine neutrale Ansprechhaltung zu finden.",
        "Mobilisiert die Lendenwirbelsäule sanft.",
        "Gute Aufwärmübung vor dem Golfen."
      ],
      tipps: [
        "10 bis 15 langsame Wiederholungen.",
        "Wenn es im Stand schwer fällt, zuerst im Vierfüßlerstand oder auf einem Gymnastikball üben.",
        "Leg zur Kontrolle eine Hand auf den unteren Rücken."
      ],
      varianten: "Leichter: im Sitzen auf einem Gymnastikball oder im Vierfüßlerstand. Schwerer: mit Schläger auf dem Rücken oder in tieferer Haltung.",
      sicherheit: "Bei Rückenschmerzen nur im schmerzfreien Bereich bewegen.",
      golf: "Wer das Becken nicht gezielt kippen kann, steht oft mit Hohlkreuz (S-Haltung) oder rundem Rücken (C-Haltung) am Ball. Beides kann die Drehung einschränken und den Rücken belasten. Die Übung verbessert die Kontrolle für eine neutrale Haltung."
    }
  },
  {
    id: "golf_beckenrotation",
    name: "Beckenrotation bei ruhigen Schultern",
    auch: ["Pelvic Rotation Drill", "Pelvic Rotation Test", "Hip Turn Shoulders Still"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["adduktoren", "bauch"],
    geraete: [["golfschlaeger"], ["stab"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Schultern und Kopf bleiben still, nur das Becken dreht.",
    info: {
      kurz: "In der Golfhaltung drehst du das Becken hin und her, während Oberkörper und Schultern ruhig bleiben. Übung und Test aus dem TPI-Programm für die Trennung von Unter- und Oberkörper.",
      ausfuehrung: [
        "Geh in deine Golfhaltung und leg einen Schläger quer vor die Schultern, die Arme verschränkt halten ihn fest.",
        "Halte den Schläger und den Kopf ruhig, der Blick bleibt auf einem Punkt am Boden.",
        "Dreh das Becken langsam zu einer Seite, als würde die Gürtelschnalle zur Seite zeigen.",
        "Dreh das Becken dann zur anderen Seite, die Schultern bewegen sich nicht mit.",
        "Wechsle mit ruhigem Rhythmus hin und her.",
        "Vergrößere die Bewegung mit der Zeit, solange die Schultern still bleiben."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Schultern drehen mit: Kleinere Beckenbewegung, Schläger bleibt waagerecht und ruhig.",
        "Becken schiebt seitlich statt zu drehen: Denk an eine Drehung um die eigene Achse.",
        "Knie strecken sich: Knie bleiben leicht gebeugt.",
        "Aufrichten: Golfhaltung beibehalten."
      ],
      vorteile: [
        "Verbessert die Trennung von Becken und Oberkörper.",
        "Schult die Kontrolle der Hüftdrehung.",
        "Mobilisiert Hüfte und Lendenwirbelsäule sanft.",
        "Zeigt Einschränkungen schnell auf."
      ],
      tipps: [
        "10 bis 15 Wiederholungen je Seite.",
        "Vor einem Spiegel üben, um die Schultern zu kontrollieren.",
        "Wenn es schwer fällt, die Hände an eine Wand legen und so den Oberkörper fixieren."
      ],
      varianten: "Leichter: Hände an einer Wand abstützen oder im Sitzen. Schwerer: schneller oder mit Halt in der Enddrehung.",
      sicherheit: "Bei Rücken- oder Hüftschmerzen nur im schmerzfreien Bereich.",
      golf: "Im Abschwung beginnt das Becken die Drehung, während die Schultern noch kurz zurückbleiben. Diese Trennung ist eine Grundlage für eine gute Bewegungsreihenfolge und kann die Schlägerkopfgeschwindigkeit fördern."
    }
  },
  {
    id: "golf_haltung_wand",
    name: "Golfhaltung an der Wand halten",
    auch: ["Wall Posture Drill", "Golf Posture Wall Hold", "Butt to Wall Drill"],
    muster: "rumpf",
    art: "kraft",
    muskeln: ["ruecken_unten", "oberer_ruecken", "gesaess"],
    sekundaer: ["bauch", "beinbeuger"],
    geraete: [["wand", "golfschlaeger"], ["wand", "stab"], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Gesäß leicht an der Wand, Rücken lang, Schultern locker.",
    info: {
      kurz: "Statisches Halten der Golfhaltung mit dem Gesäß an einer Wand, optional mit Schläger am Rücken. Stärkt die Haltemuskulatur und prägt eine stabile, wiederholbare Ansprechhaltung ein.",
      ausfuehrung: [
        "Stell dich mit dem Rücken etwa eine Fußlänge vor eine Wand.",
        "Lege bei Bedarf einen Schläger längs an den Rücken, sodass er Hinterkopf, oberen Rücken und Kreuzbein berührt.",
        "Beuge dich aus der Hüfte nach vorn, bis das Gesäß die Wand berührt, und beuge die Knie leicht.",
        "Lass die Arme senkrecht unter den Schultern hängen, das Gewicht liegt über der Fußmitte.",
        "Halte die Position die vorgegebene Zeit, spür die Spannung im Rücken und in den Beinen.",
        "Richte dich langsam aus der Hüfte wieder auf."
      ],
      atmung: "Ruhig weiteratmen, der Bauch ist leicht gespannt.",
      fehler: [
        "Runder Rücken: Brustbein leicht nach vorn schieben, Schläger als Kontrolle nutzen.",
        "Hohlkreuz: Rippen nach unten ziehen.",
        "Gewicht auf den Fersen: Gewicht zur Fußmitte bringen.",
        "Schultern ziehen hoch: Arme hängen locker."
      ],
      vorteile: [
        "Stärkt die Haltemuskulatur in der Golfhaltung.",
        "Prägt eine wiederholbare Ansprechhaltung ein.",
        "Kann helfen, über eine Runde hinweg weniger in eine runde Haltung zu fallen.",
        "Einfach und gelenkschonend."
      ],
      tipps: [
        "3 Sätze von 30 bis 60 Sekunden.",
        "Mach ein Foto von der Seite, um die Haltung zu kontrollieren.",
        "Gut als Abschluss nach Haltungsübungen."
      ],
      varianten: "Leichter: kürzere Haltezeit. Schwerer: Arme gestreckt vor dem Körper halten oder leichte Hanteln in den Händen.",
      sicherheit: "Bei Rückenschmerzen Haltezeit verkürzen.",
      golf: "Eine stabile Haltung über die ganze Runde hilft, gleichmäßig zu treffen. Die Wandposition gibt dir eine feste Referenz für die Hüftbeuge und schult die Muskeln, die die Golfhaltung halten. Viele Trainer nutzen die Wand auch, um ein Aufrichten im Abschwung zu kontrollieren."
    }
  },
  {
    id: "golf_reach_roll_lift",
    name: "Reach, Roll and Lift",
    auch: ["Reach Roll Lift", "Reach Roll and Lift"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "oberer_ruecken", "trapez"],
    sekundaer: ["rotatorenmanschette", "schulter_hinten"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Gesäß bleibt auf den Fersen, der Rücken lang.",
    info: {
      kurz: "Aus der Kindhaltung schiebst du einen Arm nach vorn, drehst ihn nach außen und hebst ihn vom Boden ab. Bekannte TPI-Übung, die Brustwirbelsäule, Latissimus und die untere Schulterblattmuskulatur verbindet.",
      ausfuehrung: [
        "Knie dich auf eine Matte und setz das Gesäß auf die Fersen. Lehne den Oberkörper nach vorn, die Unterarme liegen auf dem Boden.",
        "Schieb einen Arm mit der Handfläche nach unten weit nach vorn (Reach).",
        "Dreh die Hand nach außen, sodass der Daumen nach oben zeigt (Roll).",
        "Heb den gestreckten Arm vom Boden ab, so hoch es geht, ohne den Oberkörper zu drehen (Lift).",
        "Halte eine Sekunde oben und senk den Arm langsam ab.",
        "Führe den Arm zurück und mach die Wiederholungen, dann wechsle die Seite."
      ],
      atmung: "Beim Abheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Gesäß hebt von den Fersen: Gesäß bleibt unten, das fixiert die Lendenwirbelsäule.",
        "Oberkörper dreht beim Heben: Nur der Arm hebt.",
        "Schulter zieht zum Ohr: Schulterblatt nach hinten unten ziehen.",
        "Arm beugt sich: Arm gestreckt halten."
      ],
      vorteile: [
        "Verbessert die Überkopfbeweglichkeit der Schulter.",
        "Kräftigt die untere Schulterblattmuskulatur.",
        "Fördert die Streckung der Brustwirbelsäule.",
        "Sehr schonend für die Lendenwirbelsäule."
      ],
      tipps: [
        "8 bis 10 Wiederholungen je Seite.",
        "Wenn das Abheben kaum möglich ist, ist das normal. Es ist trotzdem wirksam.",
        "Gut im Aufwärmen oder als Pausenübung."
      ],
      varianten: "Leichter: nur Reach und Roll. Schwerer: 3 Sekunden oben halten oder leichtes Gewicht in der Hand.",
      sicherheit: "Bei Schulterbeschwerden ohne Lift beginnen.",
      golf: "Im Rückschwung und Finish brauchen die Schultern Beweglichkeit nach oben und eine aufrichtungsfähige Brustwirbelsäule. Die Übung verbessert beides und stärkt die Muskeln, die das Schulterblatt stabil halten."
    }
  },
  {
    id: "golf_bws_streckung_bank_schlaeger",
    name: "Brustwirbelsäulen-Streckung an der Bank mit Schläger",
    auch: ["Bench T-Spine Mobilization", "Bench Thoracic Extension with Dowel", "Kneeling Bench Stretch with Club"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["trizeps", "brust"],
    geraete: [["golfschlaeger", "bank"], ["stab", "bank"], ["golfschlaeger", "box"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Ellbogen auf der Bank, Gesäß zu den Fersen, Brust sinkt.",
    info: {
      kurz: "Kniend legst du die Ellbogen auf eine Bank, hältst einen Schläger zwischen den Händen und lässt die Brust zum Boden sinken. Verbessert die Streckung der Brustwirbelsäule und die Beweglichkeit über Kopf.",
      ausfuehrung: [
        "Knie dich vor eine Bank und leg die Ellbogen schulterbreit auf die Bank.",
        "Halte einen Schläger mit beiden Händen, die Handflächen zeigen zu dir, die Unterarme zeigen nach oben.",
        "Schieb das Gesäß Richtung Fersen und lass die Brust zum Boden sinken.",
        "Führe den Schläger hinter den Kopf, die Ellbogen bleiben auf der Bank.",
        "Halte die Position und spür die Dehnung im oberen Rücken und unter den Achseln.",
        "Komm nach der Haltezeit langsam zurück."
      ],
      atmung: "Tief in den Brustkorb einatmen, mit dem Ausatmen tiefer sinken.",
      fehler: [
        "Hohlkreuz im unteren Rücken: Gesäß nach hinten, Bauch leicht gespannt.",
        "Ellbogen rutschen auseinander: Ellbogen schulterbreit halten.",
        "Schmerz in der Schulter: Weniger tief sinken.",
        "Kopf hängt: Kopf zwischen den Armen."
      ],
      vorteile: [
        "Verbessert die Streckung der Brustwirbelsäule.",
        "Dehnt Latissimus und Trizeps.",
        "Fördert die Aufrichtung und eine gute Haltung.",
        "Entlastet nach langem Sitzen."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 30 Sekunden.",
        "Ein Kissen unter den Knien macht es angenehmer.",
        "Gut nach dem Training oder am Abend."
      ],
      varianten: "Leichter: ohne Schläger, Hände gefaltet. Schwerer: länger halten oder dynamisch wippen.",
      sicherheit: "Bei Schulterbeschwerden vorsichtig.",
      golf: "Eine runde, steife Brustwirbelsäule schränkt die Drehung ein und begünstigt eine runde Haltung am Ball. Mehr Streckfähigkeit erleichtert eine aufrechte Ansprechhaltung und einen größeren Schulterdreh."
    }
  },
  {
    id: "golf_bruecke_beinstreckung",
    name: "Brücke mit Beinstreckung",
    auch: ["Bridge with Leg Extension", "TPI Bridge Test", "Single-Leg Bridge Hold"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["bauch", "ruecken_unten"],
    geraete: [["matte"], []],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Becken bleibt waagerecht, wenn du das Bein streckst.",
    info: {
      kurz: "Aus der Brücke streckst du ein Bein aus und hältst das Becken dabei waagerecht. Ein bekannter Test aus dem TPI-Screening für die Kraft von Gesäß und Rumpf.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Knie gebeugt, die Füße hüftbreit am Boden, Arme verschränkt vor der Brust.",
        "Drück die Fersen in den Boden und heb das Becken an, bis Knie, Hüfte und Schultern eine Linie bilden.",
        "Strecke ein Knie aus, sodass das Bein in Verlängerung des Oberschenkels schwebt.",
        "Halte das Becken waagerecht, es darf weder absinken noch zur Seite kippen.",
        "Halte die Position die vorgegebene Zeit.",
        "Stell den Fuß ab, senk das Becken und wechsle das Bein."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: [
        "Becken kippt zur Seite: Gesäß des Standbeins fest anspannen.",
        "Becken sinkt ab: Höher drücken oder kürzer halten.",
        "Krampf im Oberschenkel hinten: Fuß näher ans Gesäß stellen und Gesäß aktiver einsetzen.",
        "Hohlkreuz: Rippen unten, Bauch fest."
      ],
      vorteile: [
        "Kräftigt das Gesäß einseitig.",
        "Verbessert die Becken- und Rumpfstabilität.",
        "Zeigt Seitenunterschiede deutlich.",
        "Rückenschonend und ohne Geräte."
      ],
      tipps: [
        "Ziel sind etwa 10 bis 20 Sekunden ohne Absinken je Seite.",
        "Arme verschränkt vor der Brust machen die Übung ehrlich.",
        "Gut als Aktivierung vor Kniebeugen und Kreuzheben."
      ],
      varianten: "Leichter: Arme seitlich am Boden. Schwerer: Fuß auf einer Bank oder längerer Halt.",
      sicherheit: "Bei Rückenschmerzen das Becken nicht zu hoch drücken.",
      golf: "Das Gesäß ist einer der wichtigsten Motoren im Golfschwung und stabilisiert das Becken in der Drehung. Wenn es schwach ist, übernehmen oft unterer Rücken und Beinbeuger. Die Übung stärkt Gesäß und Rumpf für eine stabile Haltung."
    }
  },
  {
    id: "golf_tiefe_kniebeuge_schlaeger",
    name: "Tiefe Kniebeuge mit Schläger über Kopf",
    auch: ["Overhead Deep Squat with Club", "TPI Overhead Deep Squat", "Overhead Squat Mobility"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["ganzkoerper"],
    sekundaer: ["oberer_ruecken", "latissimus", "gesaess", "waden"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { knie: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    hinweis: "Schläger bleibt über den Füßen, Fersen bleiben am Boden.",
    info: {
      kurz: "Tiefe Kniebeuge mit einem Schläger über Kopf in gestreckten Armen. Teil des TPI-Screenings, weil sie Beweglichkeit von Sprunggelenk, Hüfte, Brustwirbelsäule und Schultern gleichzeitig zeigt und trainiert.",
      ausfuehrung: [
        "Stell dich etwas breiter als schulterbreit hin, die Fußspitzen leicht nach außen.",
        "Greif einen Schläger breit und stemme ihn mit gestreckten Armen über den Kopf.",
        "Geh langsam in eine tiefe Kniebeuge, die Knie zeigen über die Füße, die Fersen bleiben am Boden.",
        "Halte den Schläger über den Füßen, die Arme strecken sich weiter nach oben.",
        "Bleib unten zwei Sekunden und richte den Oberkörper aktiv auf.",
        "Steh langsam wieder auf und wiederhole."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Schläger fällt nach vorn: Brustwirbelsäule strecken, nur so tief wie kontrolliert.",
        "Fersen heben ab: Kleinere Tiefe oder Fersen leicht erhöhen.",
        "Knie fallen nach innen: Knie über die Füße schieben.",
        "Runder Rücken unten: Tiefe begrenzen."
      ],
      vorteile: [
        "Mobilisiert viele Gelenke zugleich.",
        "Zeigt Einschränkungen in Sprunggelenk, Hüfte und Schultern.",
        "Verbessert Aufrichtung und Haltung.",
        "Gute Ganzkörper-Aufwärmübung."
      ],
      tipps: [
        "6 bis 10 langsame Wiederholungen.",
        "Wenn die Fersen abheben, Fersen auf eine Hantelscheibe stellen und weiter üben.",
        "Filme dich von der Seite, um Veränderungen zu sehen."
      ],
      varianten: "Leichter: Hände an einem Türrahmen oder Schläger vor der Brust. Schwerer: längerer Halt unten oder schmalerer Stand.",
      sicherheit: "Bei Knie- oder Schulterbeschwerden nur im schmerzfreien Bereich. Auf genug Raumhöhe achten.",
      golf: "Golftrainer nutzen die Übung, um zu sehen, ob Hüfte, Sprunggelenke und Brustwirbelsäule genug Beweglichkeit für eine gute Haltung haben. Eingeschränkte Beweglichkeit hängt häufig mit Haltungsfehlern wie dem Aufrichten im Abschwung zusammen."
    }
  },

  // ---------- Balance und Einbeinarbeit ----------
  {
    id: "golf_einbeinstand_ansprechhaltung",
    name: "Einbeinstand in Ansprechhaltung",
    auch: ["Single-Leg Balance in Golf Posture", "TPI Single Leg Balance", "Single Leg Stance Golf Posture"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "waden"],
    sekundaer: ["gesaess", "schienbein", "bauch"],
    geraete: [["golfschlaeger"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Becken waagerecht, Blick auf einen Punkt, später mit geschlossenen Augen.",
    info: {
      kurz: "Auf einem Bein in der Golfhaltung stehen und das Gleichgewicht halten. Der Einbeinstand mit offenen und geschlossenen Augen ist Teil des TPI-Screenings und eine Grundlage für einen stabilen Schwung.",
      ausfuehrung: [
        "Geh in deine Golfhaltung, die Arme hängen locker oder halten einen Schläger wie beim Ansprechen.",
        "Verlagere das Gewicht auf ein Bein und heb das andere Bein leicht vom Boden ab.",
        "Halte das Becken waagerecht und das Standknie leicht gebeugt.",
        "Verteile den Druck gleichmäßig über Ferse, Großzehen- und Kleinzehenballen.",
        "Halte die Position die vorgegebene Zeit mit Blick auf einen festen Punkt.",
        "Wenn das sicher klappt, schließ die Augen und halte erneut."
      ],
      atmung: "Ruhig und gleichmäßig atmen.",
      fehler: [
        "Becken kippt zur Seite: Gesäß des Standbeins anspannen.",
        "Aufrichten aus der Golfhaltung: Neigungswinkel halten.",
        "Standknie gestreckt und verriegelt: Leicht gebeugt lassen.",
        "Zehen krallen sich fest: Zehen locker, den Fuß breit machen."
      ],
      vorteile: [
        "Verbessert das Gleichgewicht in der golfspezifischen Haltung.",
        "Kräftigt Fuß, Sprunggelenk und seitliche Hüfte.",
        "Schult die Körperwahrnehmung.",
        "Überall und ohne Geräte machbar."
      ],
      tipps: [
        "Ziel sind etwa 20 Sekunden mit offenen und 10 Sekunden mit geschlossenen Augen.",
        "Barfuß üben fordert die Fußmuskulatur stärker.",
        "Gut zwischen anderen Übungen oder beim Zähneputzen."
      ],
      varianten: "Leichter: aufrecht stehen oder Zehen des freien Fußes am Boden. Schwerer: Augen geschlossen, auf weicher Unterlage oder mit Schläger kleine Bewegungen machen.",
      sicherheit: "Bei Gleichgewichtsproblemen in Reichweite einer Wand oder Stuhllehne üben.",
      golf: "Ein Schwung verlangt, dass du in Bewegung dein Gleichgewicht hältst. Golfer, die auf einem Bein mit geschlossenen Augen unsicher stehen, haben oft Probleme mit Stabilität im Schwung. Die Übung schafft die Grundlage für eine sichere Gewichtsverlagerung."
    }
  },
  {
    id: "golf_einbeinstand_rotation",
    name: "Einbeinstand mit Rumpfrotation und Schläger",
    auch: ["Single-Leg Balance with Club Rotation", "Single Leg Rotation Balance"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "schraege_bauch"],
    sekundaer: ["waden", "gesaess", "bauch"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Das Standbein bleibt ruhig, nur der Oberkörper dreht.",
    info: {
      kurz: "Im Einbeinstand drehst du den Oberkörper mit einem Schläger vor der Brust nach links und rechts. Die Drehung stört das Gleichgewicht, das Standbein muss stabilisieren, wie im Golfschwung.",
      ausfuehrung: [
        "Stell dich auf ein Bein, das Standknie leicht gebeugt, das andere Bein leicht angehoben.",
        "Halte einen Schläger quer vor der Brust oder in Ansprechhaltung vor dem Körper.",
        "Dreh den Oberkörper langsam zu einer Seite, das Becken bleibt möglichst ruhig.",
        "Dreh dann zur anderen Seite und finde jedes Mal das Gleichgewicht wieder.",
        "Steigere langsam Tempo und Bewegungsumfang.",
        "Wechsle nach dem Satz das Standbein."
      ],
      atmung: "Ruhig weiteratmen, bei der Drehung ausatmen.",
      fehler: [
        "Knie wackelt nach innen: Knie über dem Fuß halten.",
        "Becken dreht stark mit: Kleinere Drehung.",
        "Freies Bein schwingt zur Balance: Bein ruhig halten.",
        "Zu schnell gesteigert: Erst Stabilität, dann Tempo."
      ],
      vorteile: [
        "Verbindet Gleichgewicht und Rotation.",
        "Kräftigt die Fuß- und Hüftstabilisatoren.",
        "Trainiert die Trennung von Ober- und Unterkörper auf einem Bein.",
        "Gut als Aufwärmübung."
      ],
      tipps: [
        "8 bis 12 Drehungen je Seite.",
        "In der Golfhaltung ist es schwieriger als aufrecht.",
        "Barfuß fordert es den Fuß stärker."
      ],
      varianten: "Leichter: aufrecht und mit kleiner Drehung. Schwerer: Golfhaltung, schnellere Drehungen oder Augen geschlossen.",
      sicherheit: "Bei Unsicherheit nahe einer Wand üben.",
      golf: "Im Schwung dreht der Oberkörper, während die Beine stabil bleiben müssen. Die Kombination aus Einbeinstand und Rotation fordert genau diese Stabilität und kann helfen, im Durchschwung stabil auf dem vorderen Bein zu stehen."
    }
  },
  {
    id: "golf_ausfallschritt_rotation_schlaeger",
    name: "Gehender Ausfallschritt mit Rotation und Schläger",
    auch: ["Walking Lunge with Rotation", "Lunge and Twist with Club", "Walking Lunge Trunk Rotation"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "schraege_bauch"],
    sekundaer: ["hueftbeuger", "adduktoren", "oberer_ruecken"],
    geraete: [["golfschlaeger", "draussen"], ["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Zur Seite des vorderen Beins drehen, das Knie bleibt stabil.",
    info: {
      kurz: "Gehende Ausfallschritte, bei denen du in jedem Schritt den Oberkörper mit einem Schläger vor der Brust zur Seite des vorderen Beins drehst. Ein bekanntes Element des Golf-Aufwärmens, das Beine kräftigt und die Brustwirbelsäule mobilisiert.",
      ausfuehrung: [
        "Halte einen Schläger quer vor der Brust oder mit gestreckten Armen vor dem Körper.",
        "Mach einen großen Schritt nach vorn und senk dich ab, bis beide Knie etwa im rechten Winkel sind.",
        "Dreh den Oberkörper in der unteren Position zur Seite des vorderen Beins.",
        "Dreh zurück zur Mitte, drück dich vom vorderen Fuß ab und setz den nächsten Schritt mit dem anderen Bein.",
        "Dreh wieder zur Seite des neuen vorderen Beins.",
        "Geh so die vorgegebene Anzahl an Schritten."
      ],
      atmung: "Beim Absenken einatmen, bei der Drehung ausatmen.",
      fehler: [
        "Vorderes Knie fällt nach innen: Knie über dem Fuß halten.",
        "Becken dreht stark mit: Drehung aus dem Oberkörper.",
        "Oberkörper kippt nach vorn: Aufrecht bleiben.",
        "Zu kurze Schritte: Schrittlänge so, dass beide Knie etwa 90 Grad haben."
      ],
      vorteile: [
        "Kräftigt Beine und Gesäß.",
        "Mobilisiert Brustwirbelsäule und Hüftbeuger.",
        "Verbessert Gleichgewicht und Koordination.",
        "Gute Aufwärmübung auf dem Golfplatz."
      ],
      tipps: [
        "6 bis 10 Schritte je Bein.",
        "Auf dem Weg zum ersten Abschlag gut machbar.",
        "Langsam drehen und kurz in der Enddrehung bleiben."
      ],
      varianten: "Leichter: auf der Stelle ohne Gehen. Schwerer: Schläger über Kopf oder Medizinball statt Schläger.",
      sicherheit: "Bei Kniebeschwerden kleinere Schritte und weniger Tiefe.",
      golf: "Die Übung bereitet Beine, Hüften und Brustwirbelsäule gleichzeitig auf die Rotation im Schwung vor. Sie ist ein typischer Teil dynamischer Aufwärmprogramme, die Golftrainer statt reinen Dehnens vor der Runde empfehlen."
    }
  },
  {
    id: "golf_finish_halten",
    name: "Finish-Position auf dem vorderen Bein halten",
    auch: ["Finish Hold", "Balanced Finish Hold", "Hold Your Finish Drill"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "waden"],
    sekundaer: ["schraege_bauch", "quadrizeps"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Gewicht fast ganz vorn, hinterer Fuß nur auf der Spitze.",
    info: {
      kurz: "Du nimmst die Endposition des Schwungs ein und hältst sie stabil auf dem vorderen Bein, später ganz ohne Kontakt des hinteren Fußes. Kräftigt die Stabilität des vorderen Beins in der aufgedrehten Endposition.",
      ausfuehrung: [
        "Halte einen Schläger wie beim Golfen und nimm die Finish-Position ein: Brust zeigt zum Ziel, Gewicht auf dem vorderen Bein, Schläger über der vorderen Schulter.",
        "Der hintere Fuß steht nur noch auf der Spitze, das vordere Bein ist nahezu gestreckt, aber nicht verriegelt.",
        "Halte die Position ruhig und mit aufrechtem Oberkörper.",
        "Heb nach einigen Sekunden den hinteren Fuß ganz ab, wenn du stabil bist.",
        "Halte die vorgegebene Zeit.",
        "Mach die Übung auch spiegelbildlich zur anderen Seite, um auszugleichen."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Gewicht bleibt hinten: Druck bewusst auf den vorderen Fuß bringen.",
        "Hohlkreuz im Finish: Rippen leicht nach unten, Bauch angespannt.",
        "Vorderes Knie verriegelt: Leicht gebeugt lassen.",
        "Wackeln: Fuß breit machen, Blick auf einen Punkt."
      ],
      vorteile: [
        "Verbessert die Stabilität auf dem vorderen Bein.",
        "Kräftigt Fuß, Sprunggelenk und Hüfte.",
        "Schult eine aufrechte, rückenfreundliche Endposition.",
        "Kein Platz und keine Geräte nötig außer einem Schläger."
      ],
      tipps: [
        "3 Durchgänge von 10 bis 20 Sekunden.",
        "Nach jedem Übungsschwung das Finish drei Sekunden halten ist eine gute Gewohnheit.",
        "Anfangs vor einem Spiegel."
      ],
      varianten: "Leichter: hinterer Fuß bleibt auf der Spitze. Schwerer: Augen schließen oder auf weicher Unterlage.",
      sicherheit: "Bei Rückenschmerzen im Finish nicht ins Hohlkreuz gehen. Raumhöhe für den Schläger über der Schulter beachten.",
      golf: "Ein ausbalanciertes Finish ist ein Zeichen für einen kontrollierten Schwung. Kannst du die Endposition stabil halten, kannst du auch mit mehr Tempo schwingen, ohne die Balance zu verlieren. Die Übung stärkt dafür das vordere Bein."
    }
  },

  // ---------- Gymnastikball ----------
  {
    id: "golf_ball_rotation_bruecke",
    name: "Rumpfrotation in der Brücke auf dem Gymnastikball",
    auch: ["Stability Ball Russian Twist", "Swiss Ball Russian Twist", "Ball Bridge Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess"],
    sekundaer: ["bauch", "beinbeuger", "oberer_ruecken"],
    geraete: [["gymnastikball"], ["gymnastikball", "golfschlaeger"], ["gymnastikball", "kurzhantel"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    hinweis: "Becken bleibt oben, du rollst mit den Schultern über den Ball.",
    info: {
      kurz: "Mit den Schultern auf dem Gymnastikball und dem Becken in Brückenposition drehst du den Oberkörper mit gestreckten Armen zur Seite. Trainiert Rotation und Gesäßkraft zugleich, eine bekannte Golf-Übung auf dem Ball.",
      ausfuehrung: [
        "Setz dich auf den Ball und lauf mit den Füßen nach vorn, bis Kopf und Schultern auf dem Ball liegen.",
        "Heb das Becken an, bis Knie, Hüfte und Schultern eine Linie bilden, die Füße stehen schulterbreit.",
        "Streck die Arme mit gefalteten Händen oder einem Schläger senkrecht nach oben.",
        "Dreh den Oberkörper zu einer Seite, sodass du über die Schulter auf den Ball rollst. Die Arme bleiben gestreckt.",
        "Halte das Becken oben und waagerecht.",
        "Dreh zurück zur Mitte und zur anderen Seite."
      ],
      atmung: "Bei der Drehung ausatmen, in der Mitte einatmen.",
      fehler: [
        "Becken sinkt ab: Gesäß anspannen.",
        "Arme beugen sich: Arme gestreckt, sie zeigen immer senkrecht zur Brust.",
        "Füße zu eng: Schulterbreit für mehr Stabilität.",
        "Zu große Drehung: Nur so weit, wie das Becken stabil bleibt."
      ],
      vorteile: [
        "Kräftigt Rotation und Gesäß gleichzeitig.",
        "Fordert die Stabilität des ganzen Körpers.",
        "Verbessert die Trennung von Ober- und Unterkörper.",
        "Abwechslungsreiche Ergänzung zu Kabelübungen."
      ],
      tipps: [
        "8 bis 10 Drehungen je Seite.",
        "Ein Schläger oder leichtes Gewicht in den Händen macht es schwerer.",
        "Langsam arbeiten, die Instabilität ist der Reiz."
      ],
      varianten: "Leichter: kleinere Drehung ohne Gewicht. Schwerer: mit Kurzhantel oder Medizinball.",
      sicherheit: "Ball muss rutschfest liegen. Bei Nackenbeschwerden vorsichtig.",
      golf: "Das Gesäß hält das Becken stabil, während der Oberkörper dreht. Genau diese Aufgabe haben die Muskeln im Golfschwung. Die Übung auf dem Ball verbindet beides und kann die Rumpfkontrolle für den Schwung verbessern."
    }
  },
  {
    id: "golf_ball_beckenkippen",
    name: "Beckenkippen sitzend auf dem Gymnastikball",
    auch: ["Seated Pelvic Tilt on Stability Ball", "Swiss Ball Pelvic Tilts", "Ball Pelvic Clock"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["bauch", "ruecken_unten"],
    sekundaer: ["hueftbeuger", "gesaess"],
    geraete: [["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 160,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Der Oberkörper bleibt ruhig, der Ball rollt mit dem Becken.",
    info: {
      kurz: "Im Sitzen auf dem Gymnastikball rollst du das Becken vor und zurück und später im Kreis. Eine leichte Vorstufe des Beckenkippens in Golfhaltung, die die Kontrolle über das Becken schult.",
      ausfuehrung: [
        "Setz dich aufrecht auf einen Gymnastikball, die Füße hüftbreit und flach am Boden, Knie etwa im rechten Winkel.",
        "Leg die Hände auf die Oberschenkel oder die Hüften.",
        "Kippe das Becken nach vorn, sodass der Ball leicht nach hinten rollt und ein kleines Hohlkreuz entsteht.",
        "Kippe das Becken nach hinten, sodass der Ball nach vorn rollt und der untere Rücken rund wird.",
        "Bewege dich langsam hin und her, der Oberkörper bleibt ruhig.",
        "Ergänze später seitliche Bewegungen und Kreise."
      ],
      atmung: "Beim Kippen nach hinten ausatmen, beim Kippen nach vorn einatmen.",
      fehler: [
        "Oberkörper schaukelt mit: Schultern ruhig halten.",
        "Füße rutschen: Füße fest am Boden.",
        "Zu große Bewegung: Klein beginnen.",
        "Ball zu klein oder zu groß: Knie sollten etwa auf Hüfthöhe sein."
      ],
      vorteile: [
        "Verbessert die Beckenkontrolle.",
        "Mobilisiert die Lendenwirbelsäule sanft.",
        "Sehr leicht zu lernen.",
        "Gute Vorstufe für das Beckenkippen im Stand."
      ],
      tipps: [
        "10 bis 15 Wiederholungen je Richtung.",
        "Stell dir eine Uhr unter dem Becken vor und fahre die Zahlen ab.",
        "Gut als Pausenübung am Schreibtisch, wenn du auf einem Ball sitzt."
      ],
      varianten: "Leichter: kleine Bewegungen. Schwerer: Kreise in beide Richtungen oder ein Fuß angehoben.",
      sicherheit: "Bei akuten Rückenschmerzen nur schmerzfrei bewegen.",
      golf: "Wer das Becken gezielt kippen kann, findet leichter eine neutrale Ansprechhaltung und kann sie im Schwung halten. Die Übung auf dem Ball ist ein einfacher Einstieg, wenn das Beckenkippen in Golfhaltung noch schwerfällt."
    }
  },

  // ---------- Handgelenk, Unterarm und Griff ----------
  {
    id: "golf_handgelenk_anwinkeln_schlaeger",
    name: "Handgelenk anwinkeln mit Schläger",
    auch: ["Radial Deviation with Club", "Wrist Hinge Drill", "Club Wrist Cock Raise"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Nur das Handgelenk bewegt sich, der Unterarm bleibt ruhig.",
    info: {
      kurz: "Du hältst einen Schläger am Griff mit hängendem Arm und hebst den Schlägerkopf nur durch Anwinkeln des Handgelenks nach vorn oben. Kräftigt die Muskeln, die das Handgelenk im Rückschwung abwinkeln, also die Bewegung, die Golfer als Wrist Hinge kennen.",
      ausfuehrung: [
        "Stell dich aufrecht hin und halte einen Schläger mit einer Hand am Griffende, der Arm hängt locker neben dem Körper.",
        "Der Schläger zeigt nach vorn, der Daumen liegt oben auf dem Griff.",
        "Heb den Schlägerkopf nur durch Anwinkeln des Handgelenks Richtung Daumen nach oben, der Arm bleibt gestreckt.",
        "Geh so weit, wie es ohne Schmerzen geht, und halte kurz.",
        "Senk den Schlägerkopf langsam wieder ab.",
        "Mach alle Wiederholungen und wechsle dann die Hand."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Ellbogen beugt sich: Arm bleibt gestreckt.",
        "Schwung holen: Langsam heben und senken.",
        "Zu langer Hebel zu Beginn: Weiter unten am Schaft greifen, wenn es zu schwer ist.",
        "Schulter hilft mit: Schulter bleibt ruhig."
      ],
      vorteile: [
        "Kräftigt die Unterarmmuskulatur für das Anwinkeln.",
        "Verbessert Kontrolle und Kraft des Handgelenks.",
        "Kann helfen, Handgelenk und Ellbogen auf die Belastungen beim Golfen vorzubereiten.",
        "Nur ein Schläger nötig."
      ],
      tipps: [
        "15 bis 20 langsame Wiederholungen je Hand.",
        "Je weiter du zum Griffende greifst, desto schwerer wird es.",
        "Ein Eisen mit schwerem Kopf ist schwerer als ein Driver."
      ],
      varianten: "Leichter: weiter vorn am Schaft greifen. Schwerer: am Griffende greifen, schwerer Schläger oder Kurzhantel mit Gewicht an einem Ende.",
      sicherheit: "Bei Handgelenksbeschwerden mit kurzem Hebel beginnen.",
      golf: "Das Anwinkeln der Handgelenke im Rückschwung speichert Energie, die im Abschwung freigegeben wird. Kräftige und kontrollierte Unterarme halten den Schläger stabil und können helfen, Handgelenk und Ellbogen vor Überlastung zu schützen."
    }
  },
  {
    id: "golf_handgelenk_ulnar_schlaeger",
    name: "Handgelenk nach hinten anwinkeln mit Schläger",
    auch: ["Ulnar Deviation with Club", "Club Ulnar Deviation Raise", "Reverse Wrist Hinge"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Der Schlägerkopf zeigt nach hinten und hebt sich Richtung kleinem Finger.",
    info: {
      kurz: "Gegenstück zum Anwinkeln: Der Schläger zeigt nach hinten und du hebst den Kopf durch Anwinkeln Richtung kleinem Finger an. Kräftigt die Muskeln, die im Abschwung das Handgelenk wieder lösen.",
      ausfuehrung: [
        "Stell dich aufrecht hin und halte einen Schläger mit einer Hand am Griffende, der Arm hängt neben dem Körper.",
        "Der Schläger zeigt nach hinten, der kleine Finger ist näher am Schlägerkopf.",
        "Heb den Schlägerkopf nach hinten oben, indem du das Handgelenk Richtung kleinem Finger anwinkelst.",
        "Halte kurz und spür die Arbeit an der Kleinfingerseite des Unterarms.",
        "Senke den Schläger langsam ab.",
        "Wechsle nach dem Satz die Hand."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Arm schwingt nach hinten: Oberarm bleibt am Körper.",
        "Zu schnell: Ruhiges Tempo.",
        "Ellbogen beugt sich: Arm bleibt gestreckt.",
        "Zu schwerer Hebel: Kürzer greifen."
      ],
      vorteile: [
        "Kräftigt die Unterarmmuskulatur auf der Kleinfingerseite.",
        "Gleicht das Anwinkeln Richtung Daumen aus.",
        "Verbessert die Stabilität des Handgelenks.",
        "Einfach mit einem Schläger umsetzbar."
      ],
      tipps: [
        "15 bis 20 Wiederholungen je Hand.",
        "Kombiniere sie im Wechsel mit dem Anwinkeln nach vorn.",
        "Ein schwererer Schläger erhöht die Last."
      ],
      varianten: "Leichter: kürzer greifen. Schwerer: am Griffende greifen oder Kurzhantel mit Gewicht an einem Ende.",
      sicherheit: "Bei Beschwerden an der Kleinfingerseite des Handgelenks vorsichtig dosieren.",
      golf: "Im Abschwung und Treffmoment lösen sich die Handgelenke kraftvoll aus dem Winkel. Die Übung stärkt diese Bewegungsrichtung und sorgt für ausgeglichene Kraft rund ums Handgelenk."
    }
  },
  {
    id: "golf_handgelenk_beugen_strecken_schlaeger",
    name: "Vorderes Handgelenk beugen und strecken mit Schläger",
    auch: ["Lead Wrist Flexion Extension", "Wrist Bowing Drill", "Lead Wrist Flexion with Club"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Langsam beugen und strecken, ohne Schmerz.",
    info: {
      kurz: "Mit dem Schläger in der vorderen Hand beugst und streckst du das Handgelenk, sodass sich der Handrücken abwechselnd wölbt und flach wird. Mobilisiert und kräftigt die Beugung des vorderen Handgelenks, wie sie oben im Schwung und im Treffmoment vorkommt.",
      ausfuehrung: [
        "Halte einen Schläger mit der vorderen Hand (bei Rechtshändern links) wie beim Golfen, der Arm ist vor dem Körper gestreckt.",
        "Der Schaft zeigt nach vorn, der Handrücken zeigt zur Seite wie beim Ansprechen.",
        "Beuge das Handgelenk, sodass sich der Handrücken nach außen wölbt und der Schlägerkopf sich bewegt.",
        "Streck das Handgelenk dann zurück, bis der Handrücken leicht nach hinten geknickt ist.",
        "Bewege dich langsam zwischen beiden Endpositionen.",
        "Mach die Wiederholungen auch mit der anderen Hand, um auszugleichen."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Unterarm dreht mit: Nur das Handgelenk beugt und streckt.",
        "Schwungvoll: Langsam und kontrolliert.",
        "Zu langer Hebel: Kürzer greifen.",
        "Schmerzen: Bewegung verkleinern."
      ],
      vorteile: [
        "Verbessert die Beweglichkeit des Handgelenks.",
        "Kräftigt Beuger und Strecker des Unterarms.",
        "Fördert das Gefühl für die Stellung des Schlägerblatts.",
        "Gut als Aufwärmübung."
      ],
      tipps: [
        "10 bis 15 Wiederholungen je Hand.",
        "Gut vor jeder Runde zum Aufwärmen der Unterarme.",
        "Schläger am Griffende halten macht die Übung schwerer."
      ],
      varianten: "Leichter: ohne Schläger. Schwerer: am Griffende greifen oder kurze Halte in der gebeugten Position.",
      sicherheit: "Bei Handgelenksbeschwerden nur im schmerzfreien Bereich.",
      golf: "Ein leicht gebeugtes vorderes Handgelenk im Treffmoment hilft, das Schlägerblatt zu kontrollieren. Dafür braucht das Handgelenk genug Beweglichkeit und Kraft in die Beugung. Die Übung verbessert beides, ohne Schwungtechnik zu ersetzen."
    }
  },
  {
    id: "golf_schlaeger_achten",
    name: "Schläger-Achten mit einer Hand",
    auch: ["Club Figure Eights", "Golf Club Figure 8", "Club Head Circles"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["rotatorenmanschette", "schulter_vorn"],
    geraete: [["golfschlaeger"]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { handgelenk: 1, ellbogen: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Die Bewegung kommt aus Handgelenk und Unterarm, der Arm bleibt ruhig.",
    info: {
      kurz: "Du hältst einen Schläger mit einer Hand vor dem Körper und malst mit dem Schlägerkopf liegende Achten in die Luft. Kräftigt Griff und Unterarme dynamisch und wärmt die Handgelenke vor dem Golfen auf.",
      ausfuehrung: [
        "Halte einen Schläger mit einer Hand am Griff, der Arm ist leicht gebeugt vor dem Körper, der Schaft zeigt nach oben.",
        "Beweg den Schlägerkopf in einer liegenden Acht vor dir, angetrieben aus Handgelenk und Unterarm.",
        "Halte den Oberarm ruhig und lass das Handgelenk locker, aber kontrolliert arbeiten.",
        "Mach die Achten zuerst klein und langsam, dann etwas größer.",
        "Wechsle nach einiger Zeit die Richtung.",
        "Wechsle nach der Haltezeit die Hand."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Ganzer Arm kreist: Bewegung aus Handgelenk und Unterarm.",
        "Griff verkrampft: Fest, aber nicht verkrampft halten.",
        "Zu große Achten zu Beginn: Langsam steigern.",
        "Schulter zieht hoch: Schulter tief halten."
      ],
      vorteile: [
        "Kräftigt Griff und Unterarme dynamisch.",
        "Wärmt Handgelenke und Ellbogen auf.",
        "Verbessert das Gefühl für den Schlägerkopf.",
        "Nur ein Schläger nötig."
      ],
      tipps: [
        "20 bis 30 Sekunden je Hand und Richtung.",
        "Ein Eisen ist durch den schweren Kopf anspruchsvoller als ein Wedge mit kurzem Schaft.",
        "Gut vor der Runde oder auf der Range."
      ],
      varianten: "Leichter: kürzer greifen oder kurzer Schläger. Schwerer: am Griffende greifen oder längerer Schläger.",
      sicherheit: "Bei Ellbogen- oder Handgelenksbeschwerden mit kleinen Achten und kurzem Hebel beginnen. Auf Platz um dich herum achten.",
      golf: "Gefühl für den Schlägerkopf und kräftige Unterarme helfen, den Schläger durch den Schwung zu kontrollieren. Die Achten wärmen Handgelenk und Ellbogen auf und können so zur Vorbereitung auf die Belastung beim Golfen beitragen."
    }
  },
  {
    id: "golf_schlaeger_waagerecht_halten",
    name: "Schläger waagerecht halten",
    auch: ["Club Lever Hold", "Horizontal Club Hold", "Golf Club Grip Hold"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["schulter_vorn"],
    geraete: [["golfschlaeger"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Arm vor dem Körper, der Schläger bleibt in Verlängerung des Unterarms waagerecht.",
    info: {
      kurz: "Du hältst einen Schläger mit einer Hand am Griffende waagerecht vor dir. Durch den langen Hebel wird die Haltekraft von Griff und Unterarm stark gefordert, ganz ohne weitere Geräte.",
      ausfuehrung: [
        "Stell dich aufrecht hin und halte einen Schläger mit einer Hand am Griff.",
        "Beuge den Ellbogen 90 Grad und halte ihn seitlich am Körper, oder streck den Arm leicht nach vorn.",
        "Bring den Schaft in die Waagerechte, sodass er nach vorn zeigt.",
        "Halte diese Position, ohne dass der Schlägerkopf absinkt.",
        "Halte die vorgegebene Zeit und senk den Schläger dann langsam ab.",
        "Wechsle danach die Hand und halte genauso lange."
      ],
      atmung: "Ruhig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Schlägerkopf sinkt ab: Kürzer greifen oder kürzer halten.",
        "Schulter zieht hoch: Schulter tief.",
        "Ellbogen hilft durch Bewegung: Ellbogen bleibt ruhig.",
        "Zu lange gehalten mit schlechter Form: Lieber mehrere kurze Sätze."
      ],
      vorteile: [
        "Kräftigt Griff und Unterarme isometrisch.",
        "Fördert die Handgelenksstabilität.",
        "Einfach überall umsetzbar.",
        "Leicht steigerbar über die Griffposition."
      ],
      tipps: [
        "3 Sätze von 15 bis 30 Sekunden je Hand.",
        "Je länger der Schläger, desto schwerer.",
        "Wechsle zwischen Daumen oben und Handfläche nach unten."
      ],
      varianten: "Leichter: kurzer Schläger oder weiter vorn greifen. Schwerer: Driver am Griffende oder mit gestrecktem Arm.",
      sicherheit: "Bei Handgelenks- oder Ellbogenschmerzen auslassen oder kurz greifen.",
      golf: "Der Griff ist die einzige Verbindung zwischen dir und dem Schläger. Ein kräftiger, ausdauernder Griff hilft, den Schläger über eine Runde hinweg zu kontrollieren, ohne verkrampft zu greifen."
    }
  },

  // ---------- Schulter gesund halten ----------
  {
    id: "golf_schulterblatt_rudern_golfhaltung",
    name: "Rudern in Golfhaltung mit Band",
    auch: ["Scapular Retraction in Golf Posture", "Golf Posture Band Row", "Bent-Over Band Row Golf"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["oberer_ruecken", "schulter_hinten"],
    sekundaer: ["trapez", "latissimus", "ruecken_unten"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Schulterblätter zusammenziehen, Golfhaltung beibehalten.",
    info: {
      kurz: "Rudern mit einem Band in der vorgebeugten Golfhaltung, mit Betonung auf dem Zusammenziehen der Schulterblätter. Stärkt den oberen Rücken in genau der Haltung, die du auf dem Platz einnimmst.",
      ausfuehrung: [
        "Befestige ein Band tief vor dir oder stell den Kabelzug auf Kniehöhe ein.",
        "Greif die Enden oder Griffe und geh in deine Golfhaltung, die Arme hängen gestreckt nach vorn unten.",
        "Zieh zuerst die Schulterblätter nach hinten zusammen, ohne die Arme zu beugen.",
        "Zieh dann die Ellbogen nah am Körper nach hinten, bis die Hände neben dem Bauch sind.",
        "Halte kurz und lass die Arme langsam wieder nach vorn gleiten.",
        "Halte den Rücken die ganze Zeit lang und den Neigungswinkel konstant."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Aufrichten beim Ziehen: Neigungswinkel halten.",
        "Schultern ziehen hoch: Schulterblätter nach hinten unten.",
        "Runder Rücken: Brust offen halten.",
        "Nur Armarbeit: Erst Schulterblätter, dann Arme."
      ],
      vorteile: [
        "Stärkt die Haltemuskulatur des oberen Rückens.",
        "Verbessert die Schulterblattkontrolle.",
        "Trainiert die Rückenstrecker in der Golfhaltung mit.",
        "Mit Band zu Hause gut machbar."
      ],
      tipps: [
        "12 bis 15 Wiederholungen mit 1 Sekunde Halt.",
        "Leichtes bis mittleres Band reicht.",
        "Kann helfen, Haltungsfehler wie eine runde Haltung am Ball zu verringern."
      ],
      varianten: "Leichter: aufrecht stehen. Schwerer: einarmig mit Rotation oder stärkeres Band.",
      sicherheit: "Bei Rückenschmerzen die Vorneigung verringern.",
      golf: "Eine runde Haltung mit nach vorn gezogenen Schultern schränkt die Drehung ein. Ein kräftiger oberer Rücken hilft, in der Golfhaltung aufrecht zu bleiben, und stabilisiert die Schulterblätter im Schwung."
    }
  },
  {
    id: "golf_ytw_golfhaltung",
    name: "Y-T-W in Golfhaltung",
    auch: ["Bent-Over Y T W", "YTW Golf Posture", "Prone Y T W Standing"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["schulter_hinten", "trapez", "rotatorenmanschette"],
    sekundaer: ["oberer_ruecken", "ruecken_unten"],
    geraete: [[], ["kurzhantel"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Daumen zeigen nach oben, die Schulterblätter führen die Bewegung.",
    info: {
      kurz: "In der vorgebeugten Golfhaltung hebst du die Arme nacheinander in Y-, T- und W-Form. Kräftigt die untere und mittlere Schulterblattmuskulatur und die hintere Schulter für eine stabile Schulter.",
      ausfuehrung: [
        "Geh in deine Golfhaltung, der Oberkörper etwa 45 Grad nach vorn geneigt, die Arme hängen locker.",
        "Y: Heb die gestreckten Arme schräg nach vorn oben, die Daumen zeigen nach oben, bis sie auf Höhe der Ohren sind.",
        "T: Heb die Arme seitlich auf Schulterhöhe, die Daumen zeigen nach oben.",
        "W: Beuge die Ellbogen, zieh sie zur Seite nach hinten und dreh die Unterarme nach oben.",
        "Halte jede Position eine Sekunde und senk die Arme langsam ab.",
        "Mach die Wiederholungen jeweils als Y, T und W hintereinander."
      ],
      atmung: "Beim Heben ausatmen, beim Senken einatmen.",
      fehler: [
        "Schultern ziehen zu den Ohren: Schulterblätter nach hinten unten.",
        "Aufrichten aus der Haltung: Neigungswinkel halten.",
        "Schwung holen: Langsam und kontrolliert.",
        "Zu schwere Hanteln: Ohne Gewicht oder mit 1 bis 2 kg."
      ],
      vorteile: [
        "Kräftigt die Schulterblattmuskulatur in mehreren Winkeln.",
        "Verbessert die Haltung.",
        "Kann zur Schulterstabilität beitragen.",
        "Trainiert die Haltemuskulatur des Rückens mit."
      ],
      tipps: [
        "5 bis 8 Wiederholungen je Buchstabe.",
        "Zuerst ohne Gewicht, später mit leichten Hanteln.",
        "Gut im Aufwärmen vor dem Oberkörpertraining."
      ],
      varianten: "Leichter: aufrecht oder auf einer Schrägbank liegend. Schwerer: leichte Kurzhanteln oder längere Halte.",
      sicherheit: "Bei Schulterbeschwerden Y nur bis zur schmerzfreien Höhe.",
      golf: "Stabile Schulterblätter sind die Basis für einen kontrollierten Armschwung. Die Übung stärkt die Muskeln, die die Schulterblätter in der vorgebeugten Haltung führen, und unterstützt eine aufrechte Haltung am Ball."
    }
  },

  // ---------- Schwunggeschwindigkeit ----------
  {
    id: "golf_overspeed_leicht",
    name: "Overspeed-Schwünge mit leichtem Schläger",
    auch: ["Overspeed Training", "Light Club Speed Swings", "Speed Stick Swings", "Overspeed Swings"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "latissimus"],
    sekundaer: ["unterarm", "adduktoren", "brust"],
    geraete: [["golfschlaeger", "draussen"], ["stab", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { ruecken: 1, schulter: 1, ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Jeder Schwung mit maximaler Absicht, dazwischen kurze Pause.",
    info: {
      kurz: "Volle Schwünge mit einem deutlich leichteren Gerät als dem normalen Schläger, etwa einem leichten Trainingsschläger oder einem Ausrichtungsstab, so schnell wie möglich. Overspeed-Training ist eine verbreitete Methode, um die Schlägerkopfgeschwindigkeit zu steigern.",
      ausfuehrung: [
        "Such dir draußen einen sicheren Ort mit viel Platz um dich herum, ohne Personen in der Nähe.",
        "Wärm dich vorher mit lockeren Schwüngen, Rotationen und Würfen auf.",
        "Nimm den leichten Schläger oder Stab und geh in deine Ansprechhaltung.",
        "Schwing mit voller Absicht so schnell wie möglich durch, ohne Ball. Der schnellste Punkt soll nach dem gedachten Treffpunkt liegen.",
        "Halte nach jedem Schwung das Finish kurz und atme durch.",
        "Mach 3 bis 5 Schwünge pro Serie und gönn dir dazwischen eine kurze Pause."
      ],
      atmung: "Vor dem Schwung ruhig einatmen, im Durchschwung kräftig ausatmen.",
      fehler: [
        "Ohne Aufwärmen: Immer erst aufwärmen, die Belastung ist hoch.",
        "Viele Schwünge mit nachlassendem Tempo: Lieber weniger, jeder Schwung maximal.",
        "Schwung nur aus den Armen: Boden und Hüfte nutzen wie bei Würfen.",
        "Balance verlieren: Finish halten, sonst Tempo etwas reduzieren."
      ],
      vorteile: [
        "Kann die Schlägerkopfgeschwindigkeit steigern.",
        "Trainiert das Nervensystem auf schnellere Bewegungen.",
        "Sehr golfspezifisch.",
        "Kurze Einheiten von etwa 10 Minuten reichen."
      ],
      tipps: [
        "2 bis 3 Einheiten pro Woche mit mindestens einem Tag Pause dazwischen sind üblich.",
        "Kombiniere leichte, normale und etwas schwerere Schläger in einer Einheit.",
        "Schwing auch zur Gegenseite, um auszugleichen.",
        "Wenn möglich mit einem Messgerät für die Schwunggeschwindigkeit, um Fortschritte zu sehen."
      ],
      varianten: "Leichter: Halbschwünge mit hohem Tempo. Schwerer: aus der Bewegung mit kleinem Schritt oder mit kontrastierenden Gewichten.",
      sicherheit: "Nur draußen mit großem Abstand zu Menschen und Gegenständen, in Räumen nur bei sehr großer Höhe und Fläche. Bei Rücken-, Ellbogen- oder Handgelenksbeschwerden auslassen oder abklären.",
      golf: "Mit leichterem Gerät kannst du schneller schwingen als mit dem normalen Schläger. Das gewöhnt das Nervensystem an höhere Geschwindigkeiten. Viele Speed-Programme nutzen diese Methode, oft kombiniert mit Schwüngen zur Gegenseite und mit schwereren Schlägern."
    }
  },
  {
    id: "golf_overspeed_gegenseite",
    name: "Overspeed-Schwünge zur Gegenseite",
    auch: ["Non-Dominant Speed Swings", "Opposite Side Swings", "Counter-Side Swings"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "latissimus"],
    sekundaer: ["unterarm", "adduktoren"],
    geraete: [["golfschlaeger", "draussen"], ["stab", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { ruecken: 1, schulter: 1, ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Spiegelbildlich schwingen, wie ein Golfer der anderen Hand.",
    info: {
      kurz: "Schnelle Schwünge mit einem leichten Schläger oder Stab in die ungewohnte Richtung, also wie ein Golfer der anderen Hand. Gleicht die einseitige Belastung aus und ist fester Bestandteil vieler Speed-Programme.",
      ausfuehrung: [
        "Stell dich draußen mit genug Platz spiegelbildlich zu deiner normalen Ansprechhaltung hin.",
        "Greif den leichten Schläger mit vertauschten Händen.",
        "Mach erst einige langsame Schwünge, um das Gefühl zu bekommen.",
        "Steigere dann das Tempo und schwing so schnell, wie es kontrolliert geht.",
        "Halte nach jedem Schwung das Finish.",
        "Mach 3 bis 5 Schwünge pro Serie, meist im Wechsel mit Schwüngen zur normalen Seite."
      ],
      atmung: "Im Durchschwung kräftig ausatmen.",
      fehler: [
        "Zu schnell zu Beginn: Erst Bewegung lernen, dann Tempo.",
        "Arme statt Körper: Auch hier zuerst Hüfte und Boden.",
        "Unkontrollierter Stand: Breiter Stand, Finish halten.",
        "Ausgelassen, weil ungewohnt: Gerade die Ungewohntheit macht die Übung wertvoll."
      ],
      vorteile: [
        "Gleicht die einseitige Belastung des Golfschwungs aus.",
        "Fördert die Koordination beider Körperseiten.",
        "Kann zu einer allgemein höheren Rotationsgeschwindigkeit beitragen.",
        "Sehr einfach in jedes Speedtraining einzubauen."
      ],
      tipps: [
        "Etwa ein Drittel der Speed-Schwünge zur Gegenseite ist eine gängige Aufteilung.",
        "Ein leichter Stab ist für die Gegenseite angenehmer als ein Schläger.",
        "Nicht mit Ball schlagen, es geht um Bewegung und Ausgleich."
      ],
      varianten: "Leichter: Halbschwünge. Schwerer: volle Schwünge mit maximalem Tempo.",
      sicherheit: "Nur mit viel Platz draußen. Bei Rückenbeschwerden zuerst langsam und mit kleinem Ausholweg.",
      golf: "Golfer schwingen fast nur in eine Richtung. Schwünge zur Gegenseite gleichen Muskulatur und Bewegung aus, was einseitigen Überlastungen vorbeugen kann. Zudem berichten viele Trainer, dass sich dadurch die Geschwindigkeit zur normalen Seite verbessert."
    }
  },
  {
    id: "golf_whoosh_umgedreht",
    name: "Umgedrehter Schläger-Schwung (Whoosh-Übung)",
    auch: ["Reverse Club Whoosh Drill", "Upside Down Club Swing", "Whoosh Drill"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "latissimus"],
    sekundaer: ["unterarm", "adduktoren"],
    geraete: [["golfschlaeger", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { ruecken: 1, schulter: 1, handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Das lauteste Rauschen soll nach dem Treffpunkt kommen.",
    info: {
      kurz: "Du greifst den Schläger am Hals unter dem Kopf und schwingst ihn umgedreht, sodass der leichte Griff durch die Luft rauscht. Eine einfache Overspeed-Variante, bei der du am Geräusch hörst, wo die höchste Geschwindigkeit liegt.",
      ausfuehrung: [
        "Dreh einen Schläger um und greif ihn direkt unter dem Schlägerkopf am Schaft.",
        "Stell dich draußen mit genug Platz in deine Ansprechhaltung.",
        "Schwing so schnell wie möglich durch, ohne Ball.",
        "Hör auf das Rauschen: Es soll am lautesten nach dem gedachten Treffpunkt sein, nicht davor.",
        "Halte das Finish kurz und prüfe deine Balance.",
        "Mach 5 bis 8 Schwünge pro Serie und wiederhole einige Schwünge zur Gegenseite."
      ],
      atmung: "Im Durchschwung ausatmen.",
      fehler: [
        "Rauschen schon im Abschwung: Später beschleunigen, die Geschwindigkeit nach unten aufbauen.",
        "Ohne Aufwärmen: Erst lockere Schwünge.",
        "Nur Armschwung: Hüfte und Boden nutzen.",
        "Zu viele Schwünge: Qualität vor Menge."
      ],
      vorteile: [
        "Sehr einfache Overspeed-Variante ohne Zusatzgerät.",
        "Akustische Rückmeldung über den schnellsten Punkt.",
        "Gut als Aufwärmen vor dem Schlagen.",
        "Kann die Schlägerkopfgeschwindigkeit fördern."
      ],
      tipps: [
        "Gut vor einer Runde oder Range-Einheit als Aktivierung.",
        "Im Wechsel mit normalen Schwüngen ohne Ball.",
        "Auch zur Gegenseite schwingen."
      ],
      varianten: "Leichter: Halbschwünge. Schwerer: im Kontrast mit dem normalen und einem schwereren Schläger.",
      sicherheit: "Nur draußen oder in sehr großen Räumen mit genug Höhe. Auf Abstand zu Personen achten.",
      golf: "Der umgedrehte Schläger ist leichter als der normale, sodass du schneller schwingen kannst. Gleichzeitig lehrt das Geräusch, die Geschwindigkeit erst durch den Treffpunkt freizugeben, statt sie früh zu verlieren."
    }
  },
  {
    id: "golf_overload_schwer",
    name: "Schwünge mit schwerem Schläger",
    auch: ["Overload Swings", "Heavy Club Swings", "Weighted Club Swings", "Two Club Swing"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "unterarm"],
    sekundaer: ["latissimus", "adduktoren", "schulter_vorn"],
    geraete: [["golfschlaeger", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { ruecken: 1, schulter: 1, ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Kontrolliert und kraftvoll, nicht schwerer als etwa 20 bis 30 Prozent über dem normalen Schläger.",
    info: {
      kurz: "Schwünge mit einem schwereren Gerät als dem normalen Schläger, zum Beispiel einem Trainingsschläger mit Zusatzgewicht oder zwei Schlägern zusammen gehalten. Das sogenannte Overload-Training kräftigt die Schwungmuskulatur und ergänzt Overspeed-Schwünge.",
      ausfuehrung: [
        "Wärm dich mit lockeren Schwüngen auf und such dir draußen einen sicheren Platz.",
        "Halte einen schwereren Trainingsschläger oder zwei Schläger zusammen mit deinem normalen Griff.",
        "Geh in deine Ansprechhaltung.",
        "Schwing kontrolliert und kraftvoll durch, so schnell es mit sauberer Bewegung geht.",
        "Halte das Finish, um die Balance zu prüfen.",
        "Mach 3 bis 5 Schwünge, danach meist einige Schwünge mit dem normalen und dem leichten Schläger."
      ],
      atmung: "Im Durchschwung kräftig ausatmen.",
      fehler: [
        "Zu schweres Gerät: Die Bewegung wird langsam und verändert sich. Nur moderat schwerer.",
        "Kein Aufwärmen: Mit schwerem Gerät besonders wichtig.",
        "Rücken rundet sich: Haltung halten, ruhiger schwingen.",
        "Zu viele Wiederholungen: Wenige, gute Schwünge."
      ],
      vorteile: [
        "Kräftigt die Muskulatur in der Schwungbewegung.",
        "Ergänzt das Overspeed-Training sinnvoll.",
        "Bekanntes Aufwärmmittel, um sich danach leichter anzufühlen.",
        "Fördert Griff- und Unterarmkraft."
      ],
      tipps: [
        "Kombiniere schwer, normal und leicht in einer Serie, das wird oft als Kontrasttraining bezeichnet.",
        "Zwei Schläger zusammen sind ein einfacher Einstieg.",
        "Nicht direkt vor dem Schlagen mit Ball zu viele schwere Schwünge machen."
      ],
      varianten: "Leichter: Halbschwünge mit dem schweren Gerät. Schwerer: volle Schwünge mit maximaler Absicht.",
      sicherheit: "Bei Rücken-, Ellbogen- oder Handgelenksbeschwerden auslassen. Nur mit viel Platz, nicht in Räumen.",
      golf: "Schwerere Schwünge stärken die Muskeln, die den Schläger beschleunigen, ohne die Bewegung zu stark zu verändern. Zusammen mit leichten Schwüngen gehört das zu bekannten Speed-Trainingsprotokollen für mehr Schlägerkopfgeschwindigkeit."
    }
  },

  // ---------- Dynamisches Aufwärmen mit Schläger ----------
  {
    id: "golf_seitneigung_schlaeger",
    name: "Seitneigung mit Schläger über Kopf",
    auch: ["Overhead Side Bend with Club", "Standing Lateral Stretch with Club", "Club Side Bend"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["latissimus", "schraege_bauch"],
    sekundaer: ["ruecken_unten", "oberer_ruecken"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Lang machen und zur Seite neigen, nicht nach vorn kippen.",
    info: {
      kurz: "Mit einem Schläger in gestreckten Armen über dem Kopf neigst du den Oberkörper abwechselnd zur Seite. Dehnt die Flanken, also Latissimus und seitliche Rumpfmuskulatur, und gehört zum klassischen Aufwärmen vor der Runde.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und greif einen Schläger schulterbreit oder etwas weiter.",
        "Streck die Arme mit dem Schläger über den Kopf und mach dich lang.",
        "Neige den Oberkörper langsam zu einer Seite, die Hüfte schiebt leicht zur Gegenseite.",
        "Halte kurz an der Dehnung an der Flanke.",
        "Komm zur Mitte zurück und neige dich zur anderen Seite.",
        "Wechsle im ruhigen Rhythmus hin und her."
      ],
      atmung: "Beim Neigen ausatmen, in der Mitte einatmen.",
      fehler: [
        "Oberkörper kippt nach vorn oder hinten: In einer Ebene bleiben.",
        "Arme beugen sich: Arme lang.",
        "Schultern ziehen hoch: Schultern weg von den Ohren.",
        "Zu schnell: Ruhig und kontrolliert."
      ],
      vorteile: [
        "Dehnt Latissimus und seitliche Rumpfmuskeln.",
        "Bereitet Schultern und Rumpf auf den Schwung vor.",
        "Schnell und einfach mit Schläger.",
        "Verbessert die Seitneigung, die im Schwung mitwirkt."
      ],
      tipps: [
        "8 bis 10 Neigungen je Seite.",
        "Mit dem Ausatmen etwas tiefer gehen.",
        "Gut kombiniert mit Rotationen im Aufwärmen."
      ],
      varianten: "Leichter: Hände an den Hüften. Schwerer: im Ausfallschritt oder mit längerem Halt.",
      sicherheit: "Bei Schulterbeschwerden Arme weniger hoch. Raumhöhe beachten.",
      golf: "Im Golfschwung neigt sich der Oberkörper im Abschwung zur hinteren Seite. Bewegliche Flanken und ein dehnfähiger Latissimus erleichtern diese Bewegung und eine freie Drehung."
    }
  },
  {
    id: "golf_schulterdrehung_schlaeger",
    name: "Schwungdrehung mit Schläger hinter den Schultern",
    auch: ["Club Behind Shoulders Turn", "Golf Warm-Up Trunk Rotation", "Shoulder Turn Drill with Club"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "oberer_ruecken"],
    sekundaer: ["gesaess", "adduktoren"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Wie ein Schwung ohne Arme: Gewicht wandert mit, Füße arbeiten mit.",
    info: {
      kurz: "Mit einem Schläger hinter den Schultern drehst du in der Golfhaltung in den Rückschwung und durch ins Finish, mit voller Gewichtsverlagerung. Eine der bekanntesten Aufwärmübungen auf dem Golfplatz.",
      ausfuehrung: [
        "Leg einen Schläger quer hinter die Schultern und halte ihn mit beiden Händen fest.",
        "Geh in deine Golfhaltung.",
        "Dreh in den Rückschwung, bis die vordere Schulter etwa unter dem Kinn ist, das Gewicht wandert ins hintere Bein.",
        "Dreh dann durch in das Finish, das Gewicht geht auf das vordere Bein, die hintere Ferse löst sich.",
        "Halte die Golfhaltung während der Drehung und beende aufrecht im Finish.",
        "Wiederhole mit zunehmendem Tempo und größerem Umfang."
      ],
      atmung: "Bei der Drehung in den Rückschwung einatmen, beim Durchdrehen ausatmen.",
      fehler: [
        "Aufrichten im Rückschwung: Neigungswinkel halten.",
        "Seitliches Schieben der Hüfte: Drehen statt schieben.",
        "Gewicht bleibt in der Mitte: Gewichtsverlagerung wie im Schwung mitmachen.",
        "Zu schnell zu Beginn: Langsam starten."
      ],
      vorteile: [
        "Wärmt Rumpf, Hüften und Beine schwungspezifisch auf.",
        "Mobilisiert die Brustwirbelsäule.",
        "Schult Gewichtsverlagerung und Drehung.",
        "Mit einem Schläger überall möglich."
      ],
      tipps: [
        "10 bis 15 Drehungen, von langsam zu zügig.",
        "Auch spiegelbildlich zur Gegenseite drehen.",
        "Fester Teil des Aufwärmens vor dem ersten Abschlag."
      ],
      varianten: "Leichter: aufrecht und mit kleinerer Drehung. Schwerer: in tieferer Golfhaltung oder mit Halt in den Endpositionen.",
      sicherheit: "Bei Schulter- oder Nackenbeschwerden den Schläger vor der Brust statt hinter den Schultern halten.",
      golf: "Die Übung bereitet die gesamte Drehbewegung des Schwungs vor, inklusive Gewichtsverlagerung und Fußarbeit. Ein dynamisches Aufwärmen dieser Art wird vor der Runde statt langem statischem Dehnen empfohlen."
    }
  },

  // ---------- Ergänzungen: Gewichtsverlagerung, Trennung, Speed-Varianten ----------
  {
    id: "golf_mb_seitsprung_wurf",
    name: "Seitsprung mit Medizinball-Rotationswurf",
    auch: ["Lateral Bound to Rotational Throw", "Skater to Scoop Toss", "Lateral Bound Med Ball Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["gesaess", "schraege_bauch", "adduktoren"],
    sekundaer: ["gesaess_mittel", "quadrizeps", "bauch"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { knie: 1, sprunggelenk: 1, huefte: 1, ruecken: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Erst stabil auf dem hinteren Bein landen, dann sofort Richtung Wand werfen.",
    info: {
      kurz: "Du springst seitlich vom vorderen auf das hintere Bein, fängst die Landung ab und wirfst den Ball aus dieser geladenen Position mit einer Rotation gegen die Wand. Verbindet seitliche Sprungkraft, Gewichtsverlagerung und Rotationsschnellkraft.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, etwa 3 Meter entfernt, auf das wandnahe Bein. Halte den Ball vor dem Bauch.",
        "Spring seitlich weg von der Wand und lande auf dem hinteren Bein, weich in einer leichten Kniebeuge.",
        "Fang die Landung auf der Innenseite des hinteren Fußes ab, Oberkörper und Ball drehen dabei zur hinteren Seite.",
        "Setz den vorderen Fuß sofort Richtung Wand auf und drück dich vom hinteren Bein ab.",
        "Dreh die Hüfte explosiv zur Wand, lass Rumpf und Arme folgen und wirf den Ball auf Hüft- bis Brusthöhe.",
        "Beende im Finish auf dem vorderen Bein, fang den Ball und geh zurück zum Start."
      ],
      atmung: "Bei der Landung einatmen, beim Wurf explosiv ausatmen.",
      fehler: [
        "Landung kippt nach außen: Druck auf der Innenseite des hinteren Fußes, Knie über dem Fuß.",
        "Pause zwischen Landung und Wurf zu lang: Der Wurf folgt direkt auf die Landung, um die Vorspannung zu nutzen.",
        "Wurf aus den Armen: Abdruck und Hüfte starten den Wurf.",
        "Zu weite Sprünge: Nur so weit, wie du sicher landen kannst."
      ],
      vorteile: [
        "Verbindet seitliche Sprungkraft mit Rotationsschnellkraft.",
        "Trainiert das Laden des hinteren Beins unter Tempo.",
        "Verbessert das Timing der Gewichtsverlagerung.",
        "Sehr dynamisch und sportartnah."
      ],
      tipps: [
        "3 bis 5 Würfe je Seite mit voller Pause.",
        "Beginne mit kleinen Sprüngen und einem leichten Ball von 2 bis 3 kg.",
        "Nur einbauen, wenn Seitsprünge mit Halten und Scoop-Toss sicher sitzen."
      ],
      varianten: "Leichter: Seitschritt statt Sprung. Schwerer: weiterer Sprung oder fortlaufend mit Rückweg.",
      sicherheit: "Bei Knie-, Sprunggelenks- oder Rückenbeschwerden auslassen. Genug Platz, rutschfester Boden und stabile Wand sind Pflicht.",
      golf: "Im Schwung lädt der Körper ins hintere Bein und gibt die Energie dann über eine schnelle Druckverlagerung und Rotation ab. Die Übung kombiniert genau diese Abfolge unter hohem Tempo und kann helfen, den Boden besser als Kraftquelle zu nutzen."
    }
  },
  {
    id: "golf_beckenrotation_band",
    name: "Beckenrotation gegen Band in Golfhaltung",
    auch: ["Banded Pelvic Rotation", "Resisted Pelvic Rotation Drill", "Banded Hip Turn Shoulders Still"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["gesaess", "schraege_bauch"],
    sekundaer: ["adduktoren", "gesaess_mittel"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Schultern bleiben ruhig, nur das Becken dreht gegen das Band.",
    info: {
      kurz: "Ein Band um die Hüfte zieht das Becken in den Rückschwung, und du drehst das Becken gegen den Zug Richtung Ziel, während der Oberkörper ruhig bleibt. Die Kraftvariante der Beckenrotation aus dem TPI-Programm.",
      ausfuehrung: [
        "Befestige ein Band auf Hüfthöhe hinter dir auf der Seite des hinteren Beins und leg die Schlaufe um die Hüfte.",
        "Geh in deine Golfhaltung, die Arme sind vor der Brust verschränkt oder halten einen Schläger quer vor den Schultern.",
        "Lass das Band das Becken leicht in die Rückschwungrichtung drehen, die Schultern bleiben ruhig.",
        "Dreh das Becken kräftig gegen den Zug Richtung Ziel, bis die Gürtelschnalle leicht zum Ziel zeigt.",
        "Halte die Schultern und den Kopf dabei so still wie möglich.",
        "Lass das Becken langsam zurückdrehen und wiederhole."
      ],
      atmung: "Bei der Drehung Richtung Ziel ausatmen, beim Zurückdrehen einatmen.",
      fehler: [
        "Schultern drehen mit: Weniger Bandspannung und kleinerer Weg.",
        "Hüfte schiebt seitlich: Die Hüfte dreht um die eigene Achse.",
        "Aufrichten aus der Golfhaltung: Neigungswinkel halten.",
        "Knie streckt sich ruckartig: Knie bleiben weich."
      ],
      vorteile: [
        "Kräftigt die Beckenrotation gegen Widerstand.",
        "Schult die Trennung von Becken und Oberkörper.",
        "Verbessert die Kontrolle der Hüftmuskulatur im Abschwung.",
        "Mit einem Band zu Hause durchführbar."
      ],
      tipps: [
        "10 bis 12 Wiederholungen je Seite.",
        "Zuerst die Beckenrotation ohne Band sauber beherrschen.",
        "Ein Spiegel hilft, die Schultern zu kontrollieren."
      ],
      varianten: "Leichter: ohne Band oder mit leichtem Band. Schwerer: stärkeres Band oder schnellere Ausführung Richtung Ziel.",
      sicherheit: "Bei Hüft- oder Rückenschmerzen nur im schmerzfreien Bereich und mit leichtem Band.",
      golf: "Der Abschwung beginnt mit der Drehung des Beckens, während die Schultern noch zurückbleiben. Wer diese Trennung auch gegen Widerstand kann, schafft eine bessere Bewegungsreihenfolge, die zur Schlägerkopfgeschwindigkeit beiträgt."
    }
  },
  {
    id: "golf_huefte_rotation_einbeinig",
    name: "Hüftrotation im Einbeinstand mit Schläger als Stütze",
    auch: ["Single-Leg Hip Rotation", "Lower Quarter Rotation Drill", "Standing Hip IR ER on One Leg"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel", "adduktoren"],
    sekundaer: ["waden"],
    geraete: [["golfschlaeger"], ["stab"], ["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Der Fuß bleibt fest, das Becken dreht über dem Standbein.",
    info: {
      kurz: "Du stehst auf einem Bein, stützt dich auf einen Schläger und drehst das Becken über dem Standbein nach innen und außen. Trainiert die Rotation im Hüftgelenk des Standbeins, wie sie im Golfschwung über beiden Beinen abläuft.",
      ausfuehrung: [
        "Stell einen Schläger senkrecht neben dich und stütz dich leicht mit einer Hand am Griff ab.",
        "Stell dich auf ein Bein, das Knie leicht gebeugt, und geh in eine leichte Golfhaltung.",
        "Dreh das Becken über dem Standbein nach innen, sodass die Gürtelschnalle zur Seite des Standbeins zeigt. Der Fuß bleibt fest am Boden.",
        "Dreh dann das Becken nach außen, sodass sich die freie Hüftseite öffnet.",
        "Bewege dich langsam zwischen beiden Endpositionen, das Knie bleibt über dem Fuß.",
        "Mach alle Wiederholungen und wechsle das Standbein."
      ],
      atmung: "Ruhig weiteratmen, bei jeder Drehung ausatmen.",
      fehler: [
        "Knie dreht statt der Hüfte: Knie bleibt über dem zweiten Zeh.",
        "Fuß dreht oder rollt: Fuß fest am Boden.",
        "Oberkörper ersetzt die Beckendrehung: Becken und Oberkörper drehen gemeinsam als Einheit.",
        "Zu viel Stütze: Nur leichter Kontakt zum Schläger."
      ],
      vorteile: [
        "Verbessert Innen- und Außenrotation der Hüfte im Stand.",
        "Schult die Kontrolle über das Standbein.",
        "Zeigt Seitenunterschiede schnell.",
        "Auf dem Golfplatz mit einem Schläger als Stütze machbar."
      ],
      tipps: [
        "8 bis 12 langsame Wiederholungen je Seite.",
        "Gut im Aufwärmen vor der Runde.",
        "Mit der Zeit die Stütze immer weniger nutzen."
      ],
      varianten: "Leichter: aufrecht und mit mehr Stütze. Schwerer: ohne Stütze oder tiefer in der Golfhaltung.",
      sicherheit: "Bei Hüft- oder Kniebeschwerden kleiner Bewegungsumfang.",
      golf: "Im Rückschwung dreht das Becken über dem hinteren Bein nach innen, im Durchschwung über dem vorderen. Diese Übung, angelehnt an den Lower-Quarter-Rotationstest aus dem TPI-Screening, verbessert genau diese Drehung im Stand."
    }
  },
  {
    id: "golf_wand_drehung_gesaess",
    name: "Drehung mit Gesäß an der Wand",
    auch: ["Wall Turn Drill", "Early Extension Wall Drill", "Butt on Wall Turn"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "beinbeuger"],
    sekundaer: ["schraege_bauch", "adduktoren"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Rückschwung: hintere Gesäßhälfte bleibt an der Wand. Durchschwung: vordere Gesäßhälfte kommt an die Wand.",
    info: {
      kurz: "In Golfhaltung mit dem Gesäß an der Wand drehst du in den Rück- und Durchschwung und hältst dabei den Kontakt zur Wand. Eine bekannte Übung, um die Hüftdrehung zu schulen, ohne sich aufzurichten.",
      ausfuehrung: [
        "Stell dich mit dem Rücken vor eine Wand und geh in deine Golfhaltung, bis das Gesäß die Wand berührt.",
        "Verschränke die Arme vor der Brust oder halte einen Schläger quer vor den Schultern.",
        "Dreh in den Rückschwung, sodass die hintere Gesäßhälfte an der Wand bleibt und die vordere sich leicht löst.",
        "Dreh dann durch zum Ziel, sodass die vordere Gesäßhälfte an die Wand kommt, während die hintere sich löst.",
        "Halte während der ganzen Bewegung den Neigungswinkel des Oberkörpers.",
        "Wiederhole langsam und steigere das Tempo erst, wenn der Wandkontakt sicher bleibt."
      ],
      atmung: "Beim Rückschwung einatmen, beim Durchdrehen ausatmen.",
      fehler: [
        "Gesäß verliert den Kontakt zur Wand: Beim Durchdrehen die vordere Hüfte nach hinten drehen statt nach vorn zu schieben.",
        "Aufrichten im Durchschwung: Brust bleibt über dem Ball.",
        "Knie strecken sich zu früh: Knie bleiben weich.",
        "Seitliches Rutschen an der Wand: Drehen statt schieben."
      ],
      vorteile: [
        "Schult eine Hüftdrehung, die in der Golfhaltung bleibt.",
        "Verbessert die Kontrolle von Hüfte und Becken.",
        "Klare Rückmeldung durch die Wand.",
        "Ohne Geräte überall machbar."
      ],
      tipps: [
        "10 bis 15 Drehungen in jede Richtung.",
        "Zuerst nur den Rückschwung, dann nur den Durchschwung üben, dann beides.",
        "Gut kombiniert mit Hüftinnenrotations-Übungen."
      ],
      varianten: "Leichter: kleiner Bewegungsweg. Schwerer: zügiger oder mit Schläger in Ansprechposition.",
      sicherheit: "Bei Rücken- oder Hüftschmerzen nur langsam und im schmerzfreien Bereich.",
      golf: "Viele Golfer schieben die Hüfte im Abschwung Richtung Ball und richten sich auf, was als Early Extension bezeichnet wird. Die Wandübung schult das Gegenteil: Das Becken dreht nach hinten weg. Golftrainer nutzen sie, um das Gefühl für eine Drehung in der Haltung zu vermitteln."
    }
  },
  {
    id: "golf_kopf_schulter_trennung",
    name: "Schulterdrehung bei ruhigem Kopf in Golfhaltung",
    auch: ["Cervical Rotation Drill", "Head Still Shoulder Turn", "Neck Dissociation Drill"],
    muster: "mobilitaet_nacken",
    art: "mobilitaet",
    muskeln: ["nacken", "oberer_ruecken"],
    sekundaer: ["schraege_bauch"],
    geraete: [["golfschlaeger"], ["stab"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Augen bleiben auf einem Punkt am Boden, die Schultern drehen unter dem Kopf.",
    info: {
      kurz: "In der Golfhaltung drehst du die Schultern hin und her, während der Kopf ruhig bleibt und die Augen auf einen Punkt am Boden gerichtet sind. Trainiert die Beweglichkeit der Halswirbelsäule, die beim Golfen die Schultern unter dem Kopf drehen lassen muss.",
      ausfuehrung: [
        "Leg einen Ball oder eine Münze vor dich auf den Boden und geh in deine Golfhaltung.",
        "Verschränke die Arme vor der Brust oder halte einen Schläger quer vor den Schultern.",
        "Richte die Augen auf den Ball und halte den Kopf ruhig.",
        "Dreh die Schultern langsam in den Rückschwung, bis die vordere Schulter unter das Kinn kommt.",
        "Dreh dann durch zur anderen Seite, bis die hintere Schulter unter das Kinn kommt, der Kopf bleibt still.",
        "Wiederhole langsam, ohne dass der Blick den Ball verlässt."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Kopf dreht mit: Bewegung verkleinern und den Blick bewusst halten.",
        "Kinn drückt auf die Brust: Kinn leicht anheben, damit die Schulter Platz hat.",
        "Aufrichten: Neigungswinkel halten.",
        "Schultern ziehen hoch: Schultern locker."
      ],
      vorteile: [
        "Verbessert die Drehfähigkeit der Halswirbelsäule.",
        "Schult die Trennung von Kopf und Oberkörper.",
        "Hilft, einen ruhigen Kopf im Schwung zu fühlen.",
        "Einfach und ohne Geräte."
      ],
      tipps: [
        "10 Drehungen in jede Richtung.",
        "Vorher den Nacken mit aktivem Kopfdrehen aufwärmen.",
        "Wenn eine Seite deutlich eingeschränkt ist, vorsichtig arbeiten und das Thema abklären lassen."
      ],
      varianten: "Leichter: aufrecht stehen und kleinere Drehung. Schwerer: tiefere Golfhaltung oder zügiger.",
      sicherheit: "Bei Nackenbeschwerden, Schwindel oder Kribbeln in den Armen abbrechen und abklären lassen.",
      golf: "Wenn die Halswirbelsäule nicht genug dreht, nimmt die Schulter den Kopf im Rückschwung mit, oder die Drehung wird kürzer. Diese Übung, angelehnt an den Halswirbelsäulen-Test im TPI-Screening, verbessert die Beweglichkeit für einen vollen Schulterdreh bei ruhigem Kopf."
    }
  },
  {
    id: "golf_zehenberuehrung_progression",
    name: "Zehenberührung-Progression",
    auch: ["Toe Touch Progression", "TPI Toe Touch", "Toe Touch Correction"],
    muster: "mobilitaet_ganzkoerper",
    art: "mobilitaet",
    muskeln: ["beinbeuger", "ruecken_unten"],
    sekundaer: ["gesaess", "waden", "adduktoren"],
    geraete: [["hantelscheibe"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Ein Mal mit erhöhten Zehen, ein Mal mit erhöhten Fersen, dazu Ball oder Kissen zwischen den Knien drücken.",
    info: {
      kurz: "Vorbeugen zu den Zehen in zwei Varianten: einmal mit erhöhten Zehen, einmal mit erhöhten Fersen, jeweils mit einem Kissen zwischen den Knien. Eine bekannte Korrekturübung, um das Vorbeugen aus der Hüfte und eine gute Gewichtsverlagerung nach hinten neu zu lernen.",
      ausfuehrung: [
        "Stell die Zehen auf eine Hantelscheibe oder ein Buch, die Fersen bleiben am Boden.",
        "Klemm ein Kissen oder einen kleinen Ball zwischen die Knie und drück es leicht zusammen.",
        "Beuge dich langsam nach vorn, schieb die Hüfte nach hinten und versuche, die Zehen zu berühren.",
        "Komm wieder hoch, indem du die Hüfte nach vorn schiebst.",
        "Stell danach die Fersen auf die Erhöhung, die Zehen am Boden, und wiederhole die Vorbeuge mit dem Kissen zwischen den Knien.",
        "Mach zum Schluss einige Vorbeugen ohne Erhöhung und vergleiche das Gefühl."
      ],
      atmung: "Beim Vorbeugen ausatmen, beim Aufrichten einatmen.",
      fehler: [
        "Hüfte bleibt vorn: Gesäß bewusst nach hinten schieben.",
        "Knie stark gebeugt: Knie nur leicht gebeugt lassen.",
        "Ruckartiges Wippen: Langsam und ruhig.",
        "Kissen fällt: Leicht und gleichmäßig zusammendrücken."
      ],
      vorteile: [
        "Verbessert das Vorbeugen aus der Hüfte.",
        "Dehnt sanft Beinrückseite und unteren Rücken.",
        "Schult die Gewichtsverlagerung nach hinten.",
        "Benötigt kaum Geräte."
      ],
      tipps: [
        "Je 5 bis 10 Wiederholungen in jeder Variante.",
        "Nicht erzwingen, die Beweglichkeit kommt über mehrere Einheiten.",
        "Gut vor Übungen mit Hüftbeuge wie Kreuzheben."
      ],
      varianten: "Leichter: höhere Hände, z. B. bis zu den Schienbeinen. Schwerer: mehr Erhöhung oder längerer Halt unten.",
      sicherheit: "Bei Bandscheibenproblemen oder akuten Rückenschmerzen nur nach Abklärung.",
      golf: "Die Zehenberührung gehört zum TPI-Screening, weil sie zeigt, ob jemand gut aus der Hüfte beugen kann. Eine freie Hüftbeuge erleichtert eine stabile Golfhaltung und entlastet den unteren Rücken in der Ansprechposition."
    }
  },
  {
    id: "golf_rueckschwung_einbein_halten",
    name: "Rückschwungposition auf dem hinteren Bein halten",
    auch: ["Trail Leg Backswing Balance Hold", "Single-Leg Backswing Hold", "Trail Leg Stability Hold"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "adduktoren"],
    sekundaer: ["waden", "schraege_bauch"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { huefte: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Nur das hintere Bein trägt, das Knie bleibt gebeugt und stabil.",
    info: {
      kurz: "Du drehst in die Position am Ende des Rückschwungs und hebst den vorderen Fuß ab, sodass das hintere Bein dich allein trägt. Kräftigt die Stabilität der hinteren Hüfte in der aufgedrehten Position.",
      ausfuehrung: [
        "Halte einen Schläger wie beim Golfen oder quer vor den Schultern und geh in deine Golfhaltung.",
        "Dreh in den Rückschwung, das Gewicht wandert auf die Innenseite des hinteren Fußes.",
        "Heb den vorderen Fuß leicht vom Boden ab, ohne die Drehung aufzugeben.",
        "Halte das hintere Knie leicht gebeugt und über dem Fuß, die Hüfte bleibt in der Drehung.",
        "Halte die Position die vorgegebene Zeit mit ruhigem Blick nach unten.",
        "Setz den Fuß ab, dreh zurück und wiederhole."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Hinteres Knie streckt sich: Knie gebeugt halten.",
        "Hüfte schiebt nach außen: Gewicht bleibt auf der Innenseite des Fußes.",
        "Aufrichten: Neigungswinkel halten.",
        "Drehung geht verloren: Brust bleibt zur hinteren Seite gedreht."
      ],
      vorteile: [
        "Kräftigt die hintere Hüfte in der Rückschwungposition.",
        "Verbessert das Gleichgewicht auf einem Bein in Rotation.",
        "Gibt direkte Rückmeldung über ein Ausweichen der Hüfte.",
        "Mit einem Schläger überall machbar."
      ],
      tipps: [
        "3 Durchgänge von 10 bis 20 Sekunden.",
        "Zuerst mit kurzer Fußspitze am Boden, dann ganz frei.",
        "Kombiniere sie mit dem Finish auf dem vorderen Bein."
      ],
      varianten: "Leichter: vordere Fußspitze bleibt am Boden. Schwerer: Augen schließen oder weiche Unterlage.",
      sicherheit: "Bei Knie- oder Hüftschmerzen nur im schmerzfreien Bereich. Raumhöhe für den Schläger beachten.",
      golf: "Ein stabiles hinteres Bein ist die Grundlage für einen kraftvollen Rückschwung ohne seitliches Ausweichen. Wer die Rückschwungposition auf einem Bein halten kann, hat genug Kontrolle, um die Kraft aus dieser Position sauber abzugeben."
    }
  },
  {
    id: "golf_einbein_halbschwung",
    name: "Halbschwünge auf einem Bein",
    auch: ["Single-Leg Half Swings", "One-Leg Swings", "Single Leg Balance Swings"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess_mittel", "gesaess", "waden"],
    sekundaer: ["schraege_bauch", "schienbein"],
    geraete: [["golfschlaeger", "draussen"], ["golfschlaeger"]],
    belastung: "wiederholungen",
    hoehe_cm: 300,
    gelenke: { sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Kurze, ruhige Schwünge ohne Ball, das Standbein bleibt stabil.",
    info: {
      kurz: "Halbe Schwünge ohne Ball, während du nur auf einem Bein stehst. Ein Balance- und Stabilitätstraining mit dem Schläger, das Fuß, Knie und Hüfte unter der Schwungbewegung fordert.",
      ausfuehrung: [
        "Nimm einen kurzen Schläger, zum Beispiel ein Wedge, und geh in deine Ansprechhaltung.",
        "Verlagere das Gewicht auf ein Bein und stell den anderen Fuß nur mit der Spitze hinter dir ab oder heb ihn leicht an.",
        "Schwing langsam bis etwa Hüfthöhe zurück und wieder bis Hüfthöhe durch.",
        "Halte das Standknie leicht gebeugt und das Becken stabil.",
        "Halte nach jedem Schwung kurz die Endposition.",
        "Mach alle Schwünge auf einem Bein und wechsle dann."
      ],
      atmung: "Ruhig und gleichmäßig atmen, im Durchschwung ausatmen.",
      fehler: [
        "Zu große oder schnelle Schwünge: Halbschwünge mit ruhigem Tempo.",
        "Standknie fällt nach innen: Knie über dem Fuß halten.",
        "Oberkörper kippt: Golfhaltung beibehalten.",
        "Freies Bein schwingt zur Balance mit: Bein ruhig halten oder abstellen."
      ],
      vorteile: [
        "Fordert Gleichgewicht unter der Schwungbewegung.",
        "Kräftigt Fuß- und Hüftstabilisatoren.",
        "Verbessert die Körperwahrnehmung im Schwung.",
        "Als Ergänzung im Aufwärmen gut nutzbar."
      ],
      tipps: [
        "8 bis 10 Schwünge je Bein.",
        "Erst auf dem vorderen, dann auf dem hinteren Bein.",
        "Ohne Ball, es geht um Stabilität und nicht um die Treffqualität."
      ],
      varianten: "Leichter: Fußspitze des freien Beins abstellen und kleinere Schwünge. Schwerer: freies Bein anheben oder Dreiviertelschwünge.",
      sicherheit: "Auf genug Platz und Raumhöhe achten. Bei Gleichgewichtsproblemen nahe einer Wand mit kleinsten Schwüngen beginnen.",
      golf: "Im Schwung muss das Gleichgewicht trotz schneller Bewegung erhalten bleiben. Schwünge auf einem Bein machen jede Instabilität sofort spürbar und kräftigen die Muskulatur, die dich im vollen Schwung stabil hält."
    }
  },
  {
    id: "golf_overspeed_schritt",
    name: "Overspeed-Schwünge mit Schritt",
    auch: ["Step Swings", "Step-Change Speed Swings", "Walk-Through Speed Swings"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["gesaess", "schraege_bauch", "adduktoren"],
    sekundaer: ["quadrizeps", "latissimus", "unterarm"],
    geraete: [["golfschlaeger", "draussen"], ["stab", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { ruecken: 1, knie: 1, schulter: 1, handgelenk: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 3,
    hinweis: "Schritt zum Ziel startet den Abschwung, dann maximal schnell durchschwingen.",
    info: {
      kurz: "Schnelle Schwünge mit leichtem Schläger oder Stab, bei denen du aus engem Stand mit dem vorderen Fuß Richtung Ziel trittst, während du den Rückschwung beendest. Der Schritt nutzt den Boden stärker und wird in vielen Speed-Programmen eingesetzt.",
      ausfuehrung: [
        "Stell dich draußen mit viel Platz hin, die Füße eng zusammen, den leichten Schläger in Ansprechhaltung.",
        "Beginne den Rückschwung und mach, während die Arme nach oben gehen, einen Schritt mit dem vorderen Fuß Richtung Ziel.",
        "Setz den vorderen Fuß kräftig auf und starte damit den Abschwung.",
        "Schwing mit maximalem Tempo durch und halte das Finish auf dem vorderen Bein.",
        "Geh zurück in die Ausgangsposition und atme durch.",
        "Mach 3 bis 5 Schwünge je Serie, auch zur Gegenseite."
      ],
      atmung: "Im Rückschwung einatmen, im Durchschwung kräftig ausatmen.",
      fehler: [
        "Schritt zu spät: Der Fuß landet, bevor die Arme nach unten kommen.",
        "Schritt zu lang: Etwa hüftbreit reicht, sonst geht die Balance verloren.",
        "Kein Aufwärmen: Immer vorher lockere Schwünge und Würfe.",
        "Unkontrolliertes Finish: Tempo leicht reduzieren, bis du sicher stehst."
      ],
      vorteile: [
        "Trainiert die Nutzung des Bodens für Geschwindigkeit.",
        "Verbessert das Timing der Gewichtsverlagerung.",
        "Kann die Schlägerkopfgeschwindigkeit fördern.",
        "Sehr golfspezifisch."
      ],
      tipps: [
        "In Speed-Einheiten nach den normalen Overspeed-Schwüngen einbauen.",
        "Zuerst langsam die Abfolge Schritt, Landung, Schwung lernen.",
        "Schwing nur ohne Ball."
      ],
      varianten: "Leichter: Halbschwünge mit Schritt. Schwerer: volle Schwünge mit maximaler Absicht oder mit normalem Schläger.",
      sicherheit: "Nur draußen mit viel Platz und rutschfestem Untergrund. Bei Knie-, Rücken- oder Ellbogenbeschwerden auslassen.",
      golf: "Der Schritt verstärkt den Druck in den vorderen Fuß, der im Abschwung für Geschwindigkeit sorgt. Viele Speed-Programme nutzen solche Schrittschwünge, um das Zusammenspiel von Bodenkraft und Rotation zu verbessern."
    }
  },
  {
    id: "golf_speed_kniend",
    name: "Speed-Schwünge im Kniestand",
    auch: ["Kneeling Speed Swings", "Tall-Kneeling Swings", "Kneeling Overspeed Swings"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "latissimus"],
    sekundaer: ["unterarm", "gesaess", "brust"],
    geraete: [["stab", "draussen"], ["golfschlaeger", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { knie: 1, schulter: 1, handgelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Beide Knie am Boden, Gesäß fest, Oberkörper und Arme machen das Tempo.",
    info: {
      kurz: "Schnelle Schwünge mit einem leichten Stab oder kurzen Schläger im aufrechten Kniestand. Die Beine sind ausgeschaltet, sodass Rumpf und Arme die Geschwindigkeit erzeugen müssen.",
      ausfuehrung: [
        "Knie dich draußen auf eine weiche Unterlage, die Knie hüftbreit, die Hüfte gestreckt.",
        "Halte einen leichten Stab oder einen kurzen Schläger mit normalem Griff vor dem Körper.",
        "Spann das Gesäß an und halte den Oberkörper aufrecht.",
        "Schwing flach um den Körper zurück und dann mit maximalem Tempo durch, etwa auf Hüfthöhe.",
        "Bremse die Bewegung kontrolliert im Finish ab.",
        "Mach 3 bis 5 Schwünge je Seite, auch zur Gegenseite."
      ],
      atmung: "Im Durchschwung kräftig ausatmen.",
      fehler: [
        "Hüfte knickt ein: Gesäß fest, Hüfte gestreckt.",
        "Stab berührt den Boden: Schwungebene flacher wählen oder kürzeres Gerät.",
        "Zu viele Schwünge: Jeder Schwung mit voller Absicht.",
        "Oberkörper kippt: Aufrecht bleiben."
      ],
      vorteile: [
        "Isoliert die Geschwindigkeit aus Rumpf und Armen.",
        "Verbessert die Rotationsgeschwindigkeit des Oberkörpers.",
        "Wenig Platz in der Breite nötig.",
        "Gute Ergänzung zu Schwüngen im Stand."
      ],
      tipps: [
        "Ein leichter Stab ist sicherer als ein Schläger, weil kein Schlägerkopf den Boden trifft.",
        "Als Teil eines Speed-Programms vor den stehenden Schwüngen.",
        "Weiche Matte oder Rasen unter den Knien."
      ],
      varianten: "Leichter: halbkniend. Schwerer: mehr Tempo oder schwererer Stab.",
      sicherheit: "Bei Kniebeschwerden gut polstern oder auslassen. Nur mit genug Abstand zu Personen.",
      golf: "Der Oberkörper und die Arme tragen einen großen Teil zur Schlägerkopfgeschwindigkeit bei. Schwünge im Kniestand trainieren diesen Anteil gezielt, ohne dass die Beine helfen, und werden in manchen Speed-Programmen genau dafür genutzt."
    }
  },
  {
    id: "golf_speed_einarmig",
    name: "Einarmige Speed-Schwünge",
    auch: ["One-Arm Speed Swings", "Lead Arm Only Swings", "Trail Arm Only Swings"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["latissimus", "schraege_bauch", "unterarm"],
    sekundaer: ["brust", "schulter_hinten", "rotatorenmanschette"],
    geraete: [["stab", "draussen"], ["golfschlaeger", "draussen"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: { schulter: 1, ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Mit einem leichten Stab, erst der vordere, dann der hintere Arm.",
    info: {
      kurz: "Schnelle Schwünge mit einem leichten Stab oder kurzen Schläger, jeweils nur mit dem vorderen oder nur mit dem hinteren Arm. Trainiert den Beitrag jedes Arms zur Geschwindigkeit und deckt Unterschiede auf.",
      ausfuehrung: [
        "Stell dich draußen mit viel Platz in deine Ansprechhaltung und halte den leichten Stab nur mit der vorderen Hand.",
        "Leg die andere Hand auf die Brust oder hinter den Rücken.",
        "Schwing zurück und mit maximaler Geschwindigkeit durch, der Körper dreht wie beim normalen Schwung mit.",
        "Halte das Finish kurz und prüfe, ob du stabil stehst.",
        "Mach 3 bis 5 Schwünge und wechsle dann zum hinteren Arm.",
        "Mit dem hinteren Arm achtest du darauf, den Ellbogen im Abschwung nah am Körper zu führen."
      ],
      atmung: "Im Durchschwung ausatmen.",
      fehler: [
        "Zu schweres Gerät: Einarmig nur mit leichtem Stab oder Wedge.",
        "Körper bleibt stehen: Hüfte und Rumpf drehen mit.",
        "Arm reißt aus der Schulter: Kontrolliert beschleunigen und im Finish abbremsen.",
        "Griff zu locker: Fest genug, damit der Stab nicht wegfliegt."
      ],
      vorteile: [
        "Kräftigt die Schwunggeschwindigkeit jedes Arms einzeln.",
        "Zeigt Unterschiede zwischen vorderem und hinterem Arm.",
        "Verbessert Koordination und Gefühl für den Schläger.",
        "Ergänzt beidarmige Overspeed-Schwünge."
      ],
      tipps: [
        "Ein Ausrichtungsstab ist ideal, weil er leicht ist.",
        "Wenige Schwünge mit hoher Qualität.",
        "Achte auf festen Stand und Platz rundum."
      ],
      varianten: "Leichter: Halbschwünge. Schwerer: volle Schwünge mit maximalem Tempo.",
      sicherheit: "Bei Schulter-, Ellbogen- oder Handgelenksbeschwerden auslassen. Gerät fest halten, nur mit viel Abstand zu anderen.",
      golf: "Beide Arme tragen auf unterschiedliche Weise zur Geschwindigkeit bei: Der vordere Arm zieht, der hintere schiebt. Einarmige Schwünge trainieren diese Rollen getrennt und gehören in einigen Speed-Programmen zum festen Ablauf."
    }
  },
  {
    id: "golf_vorderer_arm_kabelzug_gestreckt",
    name: "Einarmiger Kabelzug mit gestrecktem Arm in Golfhaltung",
    auch: ["Lead Arm Straight-Arm Pulldown", "Single-Arm Straight-Arm Pulldown Golf Posture", "Lead Lat Pull"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["schulter_hinten", "trizeps", "schraege_bauch"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Arm bleibt gestreckt, der Latissimus zieht den Arm vor den Körper.",
    info: {
      kurz: "Einarmiges Ziehen am hoch eingestellten Kabel mit gestrecktem Arm, ausgeführt in der Golfhaltung. Kräftigt den Latissimus des vorderen Arms, der im Abschwung den Arm nach unten und vor den Körper bringt.",
      ausfuehrung: [
        "Stell den Kabelzug auf Kopfhöhe oder etwas höher und stell dich seitlich, die hintere Schulter zeigt zum Zug.",
        "Greif den Griff mit der Hand des vorderen Arms über die Brust hinweg, der Arm ist gestreckt und zeigt schräg nach oben zur hinteren Schulter.",
        "Geh in deine Golfhaltung, Rücken lang, Knie locker.",
        "Zieh den gestreckten Arm diagonal nach unten vor den vorderen Oberschenkel, der Oberkörper dreht leicht mit.",
        "Halte kurz und spür die Arbeit seitlich am Rücken.",
        "Führe den Arm langsam zurück und wechsle nach dem Satz, um auch den hinteren Arm auszugleichen."
      ],
      atmung: "Beim Ziehen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen beugt sich: Arm bleibt fast gestreckt.",
        "Schulter zieht nach vorn oder oben: Schulterblatt nach hinten unten.",
        "Aufrichten aus der Golfhaltung: Neigungswinkel halten.",
        "Zu schwer: Die Bewegung muss gleichmäßig und ohne Schwung gehen."
      ],
      vorteile: [
        "Kräftigt den Latissimus einseitig.",
        "Trainiert die Zugkraft in einer schwungähnlichen Diagonale.",
        "Verbessert die Verbindung von Arm und Rumpf.",
        "Mit Band auch zu Hause umsetzbar."
      ],
      tipps: [
        "10 bis 12 Wiederholungen je Seite mit moderatem Gewicht.",
        "Denk daran, den Arm mit dem Rücken nach unten zu ziehen, nicht mit der Hand.",
        "Gut kombiniert mit dem Abschwung-Zug am Kabel."
      ],
      varianten: "Leichter: aufrecht stehen und Band nutzen. Schwerer: mehr Gewicht oder langsames Zurückführen über 3 Sekunden.",
      sicherheit: "Bei Schulterbeschwerden den Startpunkt tiefer wählen.",
      golf: "Der Latissimus des vorderen Arms gehört zu den Muskeln, die im Abschwung den Arm kräftig nach unten ziehen. Eine kräftige, kontrollierte Zugbewegung in der Golfhaltung unterstützt die Verbindung von Arm und Körper im Schwung."
    }
  },
]
