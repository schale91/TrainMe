import type { Uebung } from "../../logik/typen"

// Golfspezifische Übungen: Haltung, Rotation, Schnellkraft, Schwunggeschwindigkeit, Mobilität und Prävention für Golfer.
// Richtungsangaben gelten für Rechtshänder (vorderes Bein links), Linkshänder spiegeln.

export const GOLF: Uebung[] = [
  // ---------- Medizinball-Würfe in Golfhaltung ----------
  {
    id: "golf_mb_scoop_toss",
    name: "Medizinball-Scoop-Toss in Golfhaltung",
    auch: ["Rotational Scoop Toss", "Med Ball Scoop Toss", "Golf Scoop Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "bauch"],
    sekundaer: ["adduktoren", "schulter_vorn", "ruecken_unten"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Der Wurf beginnt im Boden und in der Hüfte, die Arme folgen zuletzt.",
    info: {
      kurz: "Explosiver seitlicher Rotationswurf aus einer golfähnlichen Ansprechhaltung, bei dem der Ball von unten nach vorne oben gegen eine Wand geschaufelt wird. Gilt im Golftraining als Standardübung für rotatorische Schnellkraft und die Kraftübertragung vom Boden über Hüfte und Rumpf in die Arme.",
      ausfuehrung: [
        "Stell dich seitlich etwa 1 bis 2 Meter neben eine stabile Wand, die vordere Schulter (bei Rechtshändern die linke) zeigt zur Wand, Füße etwas breiter als hüftbreit.",
        "Geh in eine leichte Golfhaltung: Hüfte leicht gebeugt, Knie locker, Rücken lang. Halte den Ball mit beiden Händen vor dem Körper, die Arme hängen locker.",
        "Hol aus, indem du Hüfte und Oberkörper zur hinteren Seite drehst. Das Gewicht wandert ins hintere Bein, der Ball geht neben die hintere Hüfte.",
        "Starte die Gegenbewegung kraftvoll aus den Beinen: Drück dich vom hinteren Fuß ab und dreh die Hüfte zur Wand, während der Oberkörper kurz zurückbleibt.",
        "Lass Rumpf und Arme folgen und schaufle den Ball mit gestreckten Armen auf Hüft- bis Brusthöhe kraftvoll gegen die Wand.",
        "Beende die Bewegung wie im Finish: Gewicht auf dem vorderen Bein, Bauchnabel zur Wand, hintere Ferse vom Boden gelöst.",
        "Fang den Ball ab, stell dich neu hin und starte jede Wiederholung aus einer ruhigen Ausgangsposition. Mach alle Würfe einer Seite, dann wechsle."
      ],
      atmung: "Atme beim Ausholen ein und beim Wurf kräftig und kurz aus, gern hörbar.",
      fehler: [
        "Wurf nur aus den Armen: Denk an „Hüfte zuerst“, die Arme sind nur das Seil, das den Ball mitnimmt.",
        "Zu schwerer Ball: Wenn der Wurf langsam wird, bringt er keine Schnellkraft mehr. Lieber leichter und maximal schnell.",
        "Hohlkreuz oder runder Rücken beim Ausholen: Bauch leicht anspannen und die Golfhaltung beibehalten.",
        "Vorderes Knie knickt beim Wurf nach innen: Stemm dich gegen ein stabiles vorderes Bein.",
        "Viele schnelle Würfe hintereinander: Jeder Wurf soll maximal explosiv sein, daher lieber neu aufstellen."
      ],
      vorteile: [
        "Trainiert die rotatorische Schnellkraft von Hüfte und Rumpf.",
        "Verbessert die Reihenfolge der Bewegung vom Boden über das Becken in den Oberkörper.",
        "Belastet die Gelenke weniger als schweres Krafttraining und lässt sich gut dosieren.",
        "Stärkt die schrägen Bauchmuskeln und das Gesäß im Zusammenspiel."
      ],
      tipps: [
        "Für Schnellkraft eignen sich Bälle von etwa 2 bis 4 kg. Wähle eher leichter als schwerer.",
        "Wenige Wiederholungen (3 bis 6 je Seite) mit vollen Pausen bringen mehr als lange Sätze.",
        "Mach immer auch die Gegenseite, um einseitige Belastung auszugleichen.",
        "Gut vor dem Krafttraining oder als Aktivierung vor der Runde mit leichtem Ball."
      ],
      varianten: "Leichter: kleinerer Ausholweg und leichter Ball. Schwerer: mit Schritt hinter (Step-Behind) oder aus der Bewegung, etwas schwererer Ball nur bei gleicher Geschwindigkeit.",
      sicherheit: "Bei akuten Rückenbeschwerden oder Bandscheibenproblemen nur nach Abklärung. Nur gegen massive Wände werfen, keine Gipswände oder Fenster in der Nähe.",
      golf: "Der Scoop-Toss ahmt den Abschwung nach: Druck ins hintere Bein, Hüfte führt, Oberkörper folgt, Arme lösen zuletzt. So trainierst du genau die Kraftübertragung, die die Schlägerkopfgeschwindigkeit bestimmt, und lernst, den Rumpf als Feder zu nutzen statt aus den Armen zu schlagen."
    }
  },
  {
    id: "golf_mb_scoop_toss_gegenseite",
    name: "Medizinball-Scoop-Toss zur Gegenseite",
    auch: ["Non-Dominant Scoop Toss", "Opposite Side Rotational Throw"],
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
    hinweis: "Spiegelbildlich zum Golfschwung, ungewohnt, daher anfangs langsamer.",
    info: {
      kurz: "Scoop-Toss bewusst in die ungewohnte Richtung, also spiegelbildlich zum eigenen Golfschwung. Dient dem Ausgleich der einseitigen Belastung und verbessert die Koordination der Rotation in beide Richtungen.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, aber so, dass du wie ein Golfer der anderen Hand stehst. Bei Rechtshändern zeigt jetzt die rechte Schulter zur Wand.",
        "Nimm die gleiche leichte Golfhaltung ein wie beim normalen Scoop-Toss, Ball locker vor dem Körper.",
        "Hol ruhig zur ungewohnten Seite aus, das Gewicht verlagert sich ins (jetzt) hintere Bein.",
        "Starte aus dem Abdruck des hinteren Beins, dreh die Hüfte zur Wand und lass Rumpf und Arme folgen.",
        "Wirf den Ball auf Hüft- bis Brusthöhe gegen die Wand und beende die Bewegung im Finish auf dem vorderen Bein.",
        "Fang den Ball, stell dich neu hin und beginne die nächste Wiederholung erst, wenn du stabil stehst."
      ],
      atmung: "Beim Ausholen einatmen, beim Wurf kurz und kräftig ausatmen.",
      fehler: [
        "Zu viel Tempo, bevor die Bewegung sitzt: Erst einige ruhige Würfe, dann steigern.",
        "Bewegung wird zum Armwurf: Wie auf der Schwungseite bewusst die Hüfte führen lassen.",
        "Schwererer Ball als auf der starken Seite: Nimm denselben oder einen leichteren Ball.",
        "Oberkörper kippt nach hinten: Haltung über dem Ball halten, Brust zeigt leicht nach unten."
      ],
      vorteile: [
        "Gleicht die einseitige Belastung des Golfschwungs aus.",
        "Verbessert Koordination und Körpergefühl in der ungewohnten Richtung.",
        "Kräftigt die Rumpfmuskulatur beider Seiten gleichmäßiger.",
        "Kann die Schnellkraft insgesamt verbessern, weil das Nervensystem neue Muster lernt."
      ],
      tipps: [
        "Kombiniere sie im selben Satz mit der Schwungseite, z. B. 4 Würfe Schwungseite, 4 Würfe Gegenseite.",
        "Achte auf die gleiche Qualität wie auf der starken Seite, nicht auf die Wurfhärte.",
        "Ein leichter Ball (2 bis 3 kg) reicht vollkommen."
      ],
      varianten: "Leichter: aus dem Stand ohne großes Ausholen. Schwerer: mit Schritt hinter oder aus dem Ausfallschritt-Stand.",
      sicherheit: "Bei Rückenbeschwerden nur nach Abklärung. Auf ausreichenden Abstand zu anderen und eine stabile Wand achten.",
      golf: "Golfer drehen tausende Male nur in eine Richtung. Würfe zur Gegenseite gleichen die Muskulatur aus, was helfen kann, einseitigen Überlastungen im unteren Rücken vorzubeugen. Viele Speed-Programme schwingen und werfen daher bewusst auch zur schwachen Seite."
    }
  },
  {
    id: "golf_mb_step_behind",
    name: "Medizinball-Rotationswurf mit Schritt hinter",
    auch: ["Step-Behind Rotational Throw", "Step Behind Med Ball Throw", "Crossover Rotational Throw"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "gesaess", "adduktoren"],
    sekundaer: ["bauch", "quadrizeps", "schulter_vorn"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, huefte: 1, knie: 1, schulter: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Der Schritt hinter lädt das hintere Bein wie im Rückschwung.",
    info: {
      kurz: "Rotationswurf mit einem dynamischen Kreuzschritt, bei dem das hintere Bein hinter dem vorderen vorbeigesetzt wird, um Schwung aufzubauen. Eine der wirksamsten Medizinballübungen für maximale Rotationsgeschwindigkeit bei Golfern.",
      ausfuehrung: [
        "Stell dich etwa 3 bis 4 Meter seitlich zur Wand, die vordere Schulter zeigt zur Wand. Halte den Ball vor dem Bauch.",
        "Mach mit dem vorderen Fuß einen kleinen Schritt Richtung Wand und setze den hinteren Fuß dann schnell hinter dem vorderen Fuß vorbei (Kreuzschritt).",
        "Beim Aufsetzen des hinteren Fußes landest du in einer belasteten Position: Gewicht auf dem hinteren Bein, Hüfte und Oberkörper zur hinteren Seite gedreht, Ball neben der hinteren Hüfte.",
        "Setz den vorderen Fuß sofort wieder Richtung Wand auf und stemm dich dagegen.",
        "Dreh die Hüfte explosiv zur Wand, lass Rumpf und Arme folgen und wirf den Ball auf Hüft- bis Brusthöhe mit maximaler Geschwindigkeit.",
        "Beende im Finish auf dem vorderen Bein und halte die Balance kurz.",
        "Geh zurück an den Start und wiederhole erst, wenn du wieder voll konzentriert bist."
      ],
      atmung: "Beim Kreuzschritt einatmen, beim Wurf explosiv ausatmen.",
      fehler: [
        "Schritt ohne Rhythmus: Übe zuerst den Schritt ohne Ball, bis er flüssig sitzt.",
        "Beim Landen auf dem hinteren Bein einknicken: Spür den Druck auf der Innenseite des hinteren Fußes, Knie stabil über dem Fuß.",
        "Vorderes Bein bleibt weich: Das vordere Bein stoppt die Bewegung, damit die Energie in den Oberkörper geht.",
        "Wurf zu hoch oder zu tief: Ziel ist eine Stelle auf Hüft- bis Brusthöhe.",
        "Zu viele Wiederholungen: Bei Ermüdung leidet die Technik, 3 bis 5 Würfe je Satz reichen."
      ],
      vorteile: [
        "Nutzt den Dehnungs-Verkürzungs-Zyklus der Beine und der Rumpfmuskulatur.",
        "Trainiert eine sehr hohe Rotationsgeschwindigkeit.",
        "Verbessert die Gewichtsverlagerung von hinten nach vorne.",
        "Fördert Koordination und Rhythmus des ganzen Körpers."
      ],
      tipps: [
        "Beginne mit einem leichten Ball (2 bis 3 kg), die Geschwindigkeit ist entscheidend.",
        "Volle Pausen von 60 bis 90 Sekunden zwischen den Sätzen halten die Qualität hoch.",
        "Ideal zu Beginn einer Einheit, wenn du noch frisch bist.",
        "Draußen gegen eine Mauer oder auf Weite werfen geht ebenfalls."
      ],
      varianten: "Leichter: Scoop-Toss aus dem Stand. Schwerer: schnellerer Anlauf oder etwas schwererer Ball bei gleicher Geschwindigkeit.",
      sicherheit: "Erfordert gute Koordination. Bei Knie- oder Rückenbeschwerden zuerst die stehende Variante üben. Genug Platz und eine stabile Wand sind Pflicht.",
      golf: "Der Kreuzschritt erzeugt wie der Rückschwung eine Vorspannung im hinteren Bein und in der Hüfte. Danach musst du wie im Abschwung das vordere Bein stabil stemmen und die Rotation schnell entladen. Das überträgt sich gut auf die Schlägerkopfgeschwindigkeit."
    }
  },
  {
    id: "golf_mb_shotput",
    name: "Medizinball-Rotationsstoß",
    auch: ["Rotational Shot Put Throw", "Med Ball Shot Put", "Rotational Shotput"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "brust", "trizeps"],
    sekundaer: ["gesaess", "schulter_vorn", "bauch"],
    geraete: [["medizinball", "wand"], ["medizinball", "draussen"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ellbogen: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Der hintere Arm stößt den Ball, die Kraft kommt aus der Drehung.",
    info: {
      kurz: "Rotationswurf wie beim Kugelstoßen: Der Ball liegt in der Hand des hinteren Arms an der Schulter und wird durch eine explosive Drehung von Hüfte und Rumpf horizontal gegen die Wand gestoßen. Verbindet Rotation mit einer kräftigen Streckung des hinteren Arms.",
      ausfuehrung: [
        "Stell dich seitlich zur Wand, die vordere Schulter zeigt zur Wand, Füße etwas breiter als hüftbreit, Knie leicht gebeugt.",
        "Halte den Ball mit der hinteren Hand an der Schulter, der Ellbogen zeigt nach hinten und etwas nach unten. Die vordere Hand stützt den Ball von vorn.",
        "Dreh Hüfte und Oberkörper leicht zur hinteren Seite und verlagere das Gewicht ins hintere Bein.",
        "Drück dich explosiv vom hinteren Fuß ab und dreh die Hüfte zur Wand.",
        "Lass den Oberkörper folgen und stoß den Ball zum Schluss mit dem hinteren Arm horizontal gegen die Wand, der Ellbogen bleibt hinter dem Ball.",
        "Beende im Finish auf dem vorderen Bein, die Brust zeigt zur Wand.",
        "Fang den Ball ab und stell dich für die nächste Wiederholung neu hin."
      ],
      atmung: "Beim Ausholen einatmen, beim Stoß kräftig ausatmen.",
      fehler: [
        "Ellbogen unter oder neben dem Ball: Der Ellbogen muss hinter dem Ball sein, sonst wird die Schulter belastet.",
        "Nur Armstoß ohne Drehung: Die Hüfte startet die Bewegung, der Arm vollendet sie.",
        "Ball wird geworfen statt gestoßen: Die Hand bleibt am Ball, bis der Arm fast gestreckt ist.",
        "Oberkörper fällt zur Wand: Bleib über der Mitte und dreh um eine stabile Achse."
      ],
      vorteile: [
        "Trainiert Rotationsschnellkraft in Verbindung mit der Druckkraft des Arms.",
        "Kräftigt Brust, Trizeps und schräge Bauchmuskeln zusammen.",
        "Vermittelt das Gefühl für einen aktiven hinteren Arm und ein Mitdrehen des Körpers.",
        "Gut dosierbar und schonender für den Rücken als das Schaufeln von unten."
      ],
      tipps: [
        "2 bis 4 kg reichen, schwerere Bälle machen die Bewegung langsam.",
        "Denk an einen Boxer, der eine Gerade aus der Hüfte schlägt.",
        "Weiche Bälle, die nicht zurückspringen, sind für Anfänger angenehmer."
      ],
      varianten: "Leichter: aus dem parallelen Stand ohne Ausholen. Schwerer: mit Schritt hinter oder aus dem Ausfallschritt-Stand.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden vorsichtig dosieren oder auslassen. Ball nicht zu schwer wählen.",
      golf: "Der hintere Arm streckt sich im Abschwung kräftig durch den Treffmoment. Der Rotationsstoß trainiert genau diese Verbindung von Hüftdrehung und aktivem hinteren Arm und hilft, Kraft aus dem Körper in den Schläger zu bringen."
    }
  },
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
    id: "golf_mb_halbkniend_wurf",
    name: "Medizinball-Rotationswurf halbkniend",
    auch: ["Half-Kneeling Rotational Throw", "Half Kneeling Med Ball Scoop"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "hueftbeuger", "schulter_vorn"],
    geraete: [["medizinball", "wand", "matte"], ["medizinball", "wand"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Unteres Knie auf eine weiche Unterlage, Gesäß des knienden Beins anspannen.",
    info: {
      kurz: "Rotationswurf aus dem Halbkniestand seitlich zur Wand. Da die Beine kaum mithelfen können, muss der Rumpf die Rotation erzeugen und das Becken gleichzeitig stabil halten.",
      ausfuehrung: [
        "Knie dich seitlich zur Wand hin: Das wandnahe Bein steht vorn mit dem Fuß auf dem Boden, das andere Knie liegt auf einer Matte. Beide Knie sind etwa 90 Grad gebeugt.",
        "Spann das Gesäß des knienden Beins an, sodass die Hüfte vorn gestreckt ist, und richte den Oberkörper auf.",
        "Halte den Ball mit beiden Händen vor dem Bauch und dreh den Oberkörper zur von der Wand abgewandten Seite.",
        "Dreh den Oberkörper explosiv zur Wand und wirf den Ball auf Brusthöhe gegen die Wand.",
        "Fang den Ball, kehre ruhig in die Ausgangsposition zurück und halte das Becken dabei stabil.",
        "Nach allen Würfen einer Seite drehst du dich um und wechselst das vordere Bein."
      ],
      atmung: "Vor dem Wurf einatmen und den Bauch spannen, beim Wurf ausatmen.",
      fehler: [
        "Hohlkreuz durch gebeugte Hüfte: Gesäß des hinteren Beins anspannen.",
        "Seitliches Wegkippen beim Wurf: Halte die Hüfte über dem Knie und dreh um die eigene Achse.",
        "Zu schwerer Ball: Die Bewegung muss schnell sein, 2 bis 3 kg reichen.",
        "Arme beugen und strecken sich stark: Die Arme bleiben eher fest, der Oberkörper dreht."
      ],
      vorteile: [
        "Isoliert die Rotationskraft des Rumpfes.",
        "Trainiert Beckenstabilität und Hüftstreckung des knienden Beins.",
        "Schont den unteren Rücken durch begrenzten Bewegungsumfang.",
        "Lehrt eine saubere, aufrechte Achse bei schneller Drehung."
      ],
      tipps: [
        "Eine weiche Matte unter dem Knie macht die Übung deutlich angenehmer.",
        "Schau während der Drehung mit den Augen auf die Wand, um die Balance zu halten.",
        "Gut als Einstieg vor den stehenden Würfen."
      ],
      varianten: "Leichter: kleinerer Ausholweg. Schwerer: im aufrechten Kniestand mit beiden Knien am Boden oder mit schnellerem Rhythmus.",
      sicherheit: "Bei Kniebeschwerden ausreichend polstern oder die stehende Variante wählen.",
      golf: "Hier muss die Drehung aus dem Rumpf kommen, während das Becken stabil bleibt. Das stärkt genau die Rumpfmuskeln, die im Golfschwung den Oberkörper beschleunigen und abbremsen, und verbessert die Kontrolle über die Wirbelsäulenachse."
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
    id: "golf_mb_diagonal_slam",
    name: "Diagonaler Medizinball-Slam aus der Golfhaltung",
    auch: ["Rotational Med Ball Slam", "Diagonal Slam", "Cross-Body Slam"],
    muster: "schnellkraft_wurf",
    art: "kraft",
    muskeln: ["schraege_bauch", "latissimus", "bauch"],
    sekundaer: ["gesaess", "schulter_vorn", "trizeps"],
    geraete: [["medizinball"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Nur einen Slamball oder nicht springenden Ball nehmen.",
    info: {
      kurz: "Explosiver Wurf von schräg oben über die hintere Schulter diagonal nach unten neben den vorderen Fuß. Verbindet Rotation mit kräftiger Rumpfbeugung und trainiert die Kraft im Abschwung von oben nach unten.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, Knie locker, Ball mit beiden Händen vor dem Körper.",
        "Hebe den Ball diagonal über die hintere Schulter, dreh dabei Oberkörper und Hüfte leicht mit und verlagere das Gewicht ins hintere Bein.",
        "Starte die Bewegung durch eine Gewichtsverlagerung auf das vordere Bein und eine Drehung der Hüfte.",
        "Zieh den Ball mit gestreckten Armen kraftvoll diagonal nach unten und wirf ihn neben den vorderen Fuß auf den Boden.",
        "Geh dabei in die Knie und bleib mit dem Rücken lang.",
        "Heb den Ball wieder auf, indem du in die Hocke gehst, und wiederhole."
      ],
      atmung: "Beim Hochnehmen einatmen, beim Slam kräftig ausatmen.",
      fehler: [
        "Ball springt hoch zurück: Nur einen nicht springenden Slamball verwenden.",
        "Runder Rücken beim Aufheben: In die Knie gehen, nicht aus dem Rücken heben.",
        "Wurf nur aus den Armen: Gewichtsverlagerung und Hüftdrehung starten die Bewegung.",
        "Ball landet zu nah an den Füßen: Etwas neben und vor den vorderen Fuß zielen."
      ],
      vorteile: [
        "Trainiert diagonale Kraft vom Oberkörper zum Boden.",
        "Kräftigt Latissimus, schräge Bauchmuskeln und Rumpf zusammen.",
        "Sehr dynamisch und auch für Kraftausdauer geeignet.",
        "Braucht keine Wand."
      ],
      tipps: [
        "Slambälle von 4 bis 8 kg sind üblich.",
        "Zieh mit dem Latissimus, als würdest du etwas schwungvoll nach unten reißen.",
        "Kurze Sätze von 5 bis 8 Wiederholungen je Seite halten die Qualität hoch."
      ],
      varianten: "Leichter: gerader Slam vor dem Körper. Schwerer: mit kleinem Schritt nach vorn oder schwererem Ball.",
      sicherheit: "Raumhöhe beachten, die Arme gehen weit über Kopf. Bei Schulterbeschwerden vorsichtig, bei Rückenbeschwerden kleiner Bewegungsumfang.",
      golf: "Im Abschwung arbeitet der Latissimus zusammen mit den schrägen Bauchmuskeln, um die Arme kraftvoll nach unten zu bringen. Der diagonale Slam trainiert diese Kette von oben nach unten und die Druckverlagerung auf das vordere Bein."
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
    id: "golf_holzhacker_halbkniend",
    name: "Holzhacker am Kabel halbkniend",
    auch: ["Half-Kneeling Cable Chop", "Half Kneeling Chop"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "latissimus", "hueftbeuger"],
    geraete: [["kabelzug", "matte"], ["band", "matte"], ["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Knie, Hüfte und Schulter in einer Linie, das Gesäß des knienden Beins ist fest.",
    info: {
      kurz: "Holzhacker im Halbkniestand. Da die Beine nicht mithelfen, muss der Rumpf die Diagonale führen und das Becken gleichzeitig stabil halten. Eine Kernübung der klassischen Chop-and-Lift-Progression.",
      ausfuehrung: [
        "Stell den Kabelzug hoch ein, befestige ein Seil oder einen Stab und knie dich seitlich zum Zug auf eine Matte.",
        "Das zugnahe Knie liegt am Boden, das andere Bein steht vorn mit dem Fuß auf dem Boden.",
        "Spann das Gesäß des knienden Beins an und richte den Oberkörper auf.",
        "Greif das Seil über der zugnahen Schulter und zieh es zuerst zur Brust.",
        "Drück das Seil dann weiter diagonal nach unten an der Außenseite der vorderen Hüfte vorbei.",
        "Führe es kontrolliert zurück, ohne dass sich der Oberkörper zum Zug neigt."
      ],
      atmung: "Beim Ziehen und Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper kippt zur Seite: Achse aufrecht halten, lieber weniger Gewicht.",
        "Hüfte knickt ein: Gesäß des knienden Beins bleibt aktiv.",
        "Bewegung nur aus den Armen: Der Rumpf dreht leicht mit, die Arme führen.",
        "Zu schnell: Ruhige zwei Sekunden für jede Richtung."
      ],
      vorteile: [
        "Isoliert die Rumpfarbeit von der Beinarbeit.",
        "Verbessert die Beckenkontrolle und die Hüftstreckung.",
        "Kräftigt die Diagonale von Schulter zu gegenüberliegender Hüfte.",
        "Sehr gut als Kontrollübung bei Golfern mit Rückenbeschwerden in der Vorgeschichte."
      ],
      tipps: [
        "Eine schmale Spur, also Knie und vorderer Fuß fast auf einer Linie, macht die Übung schwerer.",
        "10 bis 12 Wiederholungen je Seite mit moderatem Gewicht.",
        "Wenn der Stab statt Seil benutzt wird, bleiben die Handgelenke ruhiger."
      ],
      varianten: "Leichter: breitere Spur oder im parallelen Kniestand. Schwerer: schmale Spur oder langsames exzentrisches Zurückführen.",
      sicherheit: "Bei Kniebeschwerden ausreichend polstern. Bei akuten Rückenschmerzen nur nach Abklärung.",
      golf: "Die Übung stärkt die Fähigkeit, Kraft durch einen stabilen Rumpf zu leiten, ohne dass Becken oder Wirbelsäule ausweichen. Diese Kontrolle hilft, im Schwung die Haltung zu behalten und Kraft sauber auf den Schläger zu übertragen."
    }
  },
  {
    id: "golf_lift_halbkniend",
    name: "Diagonales Heben am Kabel halbkniend",
    auch: ["Half-Kneeling Cable Lift", "Half Kneeling Lift"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["gesaess", "schulter_vorn", "oberer_ruecken"],
    geraete: [["kabelzug", "matte"], ["band", "matte"], ["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Nicht nach hinten lehnen, die Rippen bleiben unten.",
    info: {
      kurz: "Diagonales Heben von unten nach oben im Halbkniestand. Fordert die Rumpfstabilität in der Gegendiagonale zum Holzhacker und schult eine aufrechte Haltung ohne Ausweichen ins Hohlkreuz.",
      ausfuehrung: [
        "Stell den Kabelzug tief ein und knie dich seitlich zum Zug auf eine Matte.",
        "Das zugnahe Bein steht vorn mit dem Fuß auf dem Boden, das andere Knie liegt auf der Matte.",
        "Greif das Seil neben der vorderen Hüfte und richte den Oberkörper auf, Gesäß des knienden Beins fest.",
        "Zieh das Seil zur Brust und drück es dann diagonal nach oben über die abgewandte Schulter.",
        "Halte am Ende kurz und achte darauf, dass du nicht nach hinten lehnst.",
        "Führe das Seil auf derselben Linie langsam zurück."
      ],
      atmung: "Beim Heben ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz am Ende der Bewegung: Rippen nach unten, Bauch anspannen.",
        "Becken dreht zur Seite: Gesäß aktiv, Knie und Fuß fest.",
        "Seitliches Kippen: Weniger Gewicht, aufrechte Achse.",
        "Arme reißen hoch: Gleichmäßiges Tempo."
      ],
      vorteile: [
        "Kräftigt die schrägen Bauchmuskeln in der Gegendiagonale.",
        "Verbessert die Kontrolle von Becken und Lendenwirbelsäule.",
        "Ergänzt den Holzhacker zu einem vollständigen Programm.",
        "Geringe Belastung für Gelenke bei guter Ausführung."
      ],
      tipps: [
        "Wähle etwa 70 Prozent des Gewichts, das du beim Holzhacker nimmst.",
        "Denk daran, dich lang und groß zu machen.",
        "Gut in Supersätzen mit dem Holzhacker kombinierbar."
      ],
      varianten: "Leichter: breitere Spur. Schwerer: schmale Spur oder 2 Sekunden Halt oben.",
      sicherheit: "Bei Schulterbeschwerden nicht ganz über Kopf. Bei Kniebeschwerden gut polstern.",
      golf: "Im Durchschwung und Finish streckt sich der Körper diagonal nach oben. Eine stabile Mitte verhindert dabei, dass du ins Hohlkreuz ausweichst. Die Übung stärkt diese Kontrolle und gleicht die Belastung zur Abschwungrichtung aus."
    }
  },
  {
    id: "golf_kabel_rotation_halbkniend",
    name: "Kabelrotation halbkniend",
    auch: ["Half-Kneeling Cable Rotation", "Half Kneeling Band Rotation", "Half-Kneeling Trunk Rotation"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["oberer_ruecken", "gesaess"],
    geraete: [["kabelzug", "matte"], ["band", "matte"], ["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Becken zeigt nach vorn, nur Brust und Arme drehen.",
    info: {
      kurz: "Horizontale Oberkörperrotation gegen Kabel oder Band im Halbkniestand. Das Becken ist fixiert, sodass die Brustwirbelsäule und die schrägen Bauchmuskeln gezielt arbeiten.",
      ausfuehrung: [
        "Stell den Kabelzug auf Brusthöhe im Knien ein und knie dich seitlich dazu, das zugferne Bein steht vorn.",
        "Greif den Griff mit beiden Händen, strecke die Arme vor der Brust und spann das Gesäß des knienden Beins an.",
        "Lass den Griff kontrolliert zum Zug hin drehen, bis du eine angenehme Dehnung in der Brustwirbelsäule spürst.",
        "Dreh den Oberkörper vom Zug weg, bis die Arme etwa vor dem vorderen Knie stehen. Das Becken bleibt nach vorn ausgerichtet.",
        "Halte kurz und kehre langsam zurück.",
        "Wechsle nach dem Satz Seite und Knie."
      ],
      atmung: "Bei der Drehung weg vom Zug ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Becken dreht mit: Knie und Fuß fest, Gesäß aktiv.",
        "Arme beugen sich: Arme bleiben gestreckt, der Oberkörper dreht.",
        "Zu viel Gewicht: Lieber großer Bewegungsweg mit wenig Gewicht.",
        "Oberkörper fällt zur Seite: Aufrechte Achse behalten."
      ],
      vorteile: [
        "Trennt Oberkörper- und Hüftrotation.",
        "Kräftigt die Rotation der Brustwirbelsäule.",
        "Verbessert Beweglichkeit und Kraft zugleich.",
        "Einfach zu lernen, auch für Einsteiger."
      ],
      tipps: [
        "Leichtes bis mittleres Gewicht, 10 bis 15 Wiederholungen je Seite.",
        "Dein Blick folgt den Händen, das vergrößert die Drehung.",
        "Gut als Aktivierung vor dem Golftraining mit Band."
      ],
      varianten: "Leichter: Band mit wenig Spannung. Schwerer: mehr Gewicht oder Halt in der Enddrehung.",
      sicherheit: "Bei Kniebeschwerden polstern. Bei Schmerzen im Rücken Bewegungsweg verkleinern.",
      golf: "Golfer brauchen eine gute Drehung der Brustwirbelsäule, während das Becken ruhig bleibt. Die Übung stärkt diese Trennung und kann helfen, einen größeren Schulterdreh im Rückschwung kontrolliert zu erreichen."
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
    id: "golf_landmine_rotation",
    name: "Landmine-Rotation",
    auch: ["Landmine Rotation", "Landmine 180", "Landmine Rainbow", "Landmine Twist"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch", "schulter_vorn"],
    sekundaer: ["gesaess", "oberer_ruecken"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    hinweis: "Hüfte und Füße drehen mit, die Arme bleiben lang.",
    info: {
      kurz: "Das Ende einer in der Landmine verankerten Langhantel wird mit gestreckten Armen in einem Bogen von einer Hüfte zur anderen geführt. Trainiert die Rotation mit langem Hebel und das Abbremsen der Bewegung.",
      ausfuehrung: [
        "Stell die Stange in die Landmine und lade sie leicht. Stell dich frontal zum Stangenende, Füße schulterbreit.",
        "Greif das Stangenende mit beiden Händen übereinander und halte es mit gestreckten Armen vor der Stirn.",
        "Führe die Stange in einem Bogen nach unten zu einer Hüfte. Dreh dabei Hüfte und hinteren Fuß mit, wie beim Golfschwung.",
        "Bremse die Stange auf Hüfthöhe ab, ohne den Rücken zu runden.",
        "Führe die Stange über die Mitte zurück nach oben und auf der anderen Seite nach unten.",
        "Bleib mit dem Oberkörper aufrecht und den Armen gestreckt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochführen ausatmen.",
      fehler: [
        "Arme beugen sich: Arme lang halten, die Rotation macht die Arbeit.",
        "Füße bleiben steif: Hinterer Fuß dreht auf dem Ballen mit.",
        "Zu viel Gewicht: Erst mit der leeren Stange üben.",
        "Rundrücken unten: Brust aufrecht halten."
      ],
      vorteile: [
        "Kräftigt Rotation und Anti-Rotation zugleich.",
        "Fordert die Schultern als Stabilisatoren.",
        "Trainiert das Abbremsen eines langen Hebels.",
        "Verbindet Beine, Hüfte und Rumpf in einer Bewegung."
      ],
      tipps: [
        "Die leere Stange reicht anfangs völlig.",
        "8 bis 10 Wiederholungen je Seite.",
        "Ohne Landmine kannst du die Stange in eine Ecke stellen, mit einem Handtuch als Schutz."
      ],
      varianten: "Leichter: kleinerer Bogen. Schwerer: mehr Gewicht oder Halt auf Hüfthöhe.",
      sicherheit: "Bei Schulterbeschwerden kleiner Bogen. Bei Rückenbeschwerden zuerst leichte Pallof-Übungen beherrschen.",
      golf: "Ähnlich wie im Schwung bewegt sich ein langer Hebel um deinen Körper. Die Landmine-Rotation stärkt die Muskeln, die diesen Hebel beschleunigen und abbremsen, und trainiert das Zusammenspiel von Fußarbeit und Rumpfdrehung."
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
  {
    id: "golf_huefte_innenrotation_sitzend",
    name: "Aktive Hüftinnenrotation im Sitzen",
    auch: ["Seated Hip Internal Rotation Lift-Off", "Seated Active Hip IR", "Seated Hip IR Lift"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess_mittel", "adduktoren"],
    sekundaer: ["hueftbeuger"],
    geraete: [["bank"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Knie bleiben zusammen, nur der Unterschenkel schwingt nach außen.",
    info: {
      kurz: "Im aufrechten Sitz wird der Unterschenkel aktiv nach außen gedreht, was eine Innenrotation der Hüfte bedeutet. Entspricht dem Test, den Golftrainer zur Prüfung der Hüftrotation nutzen, und verbessert die aktive Beweglichkeit.",
      ausfuehrung: [
        "Setz dich aufrecht auf eine Bank, Box oder einen Stuhl, die Knie im rechten Winkel, die Füße am Boden.",
        "Leg eine kleine Rolle oder ein gefaltetes Handtuch zwischen die Knie, damit sie zusammenbleiben.",
        "Halte das Becken ruhig und dreh den Unterschenkel eines Beins nach außen, sodass der Fuß vom Boden abhebt und nach außen schwingt.",
        "Halte die Endposition zwei Sekunden, ohne dass du zur Seite kippst.",
        "Führe den Fuß langsam zurück auf den Boden.",
        "Mach alle Wiederholungen und wechsle dann das Bein."
      ],
      atmung: "Beim Drehen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Oberkörper kippt zur Seite: Aufrecht sitzen, beide Sitzbeinhöcker belastet.",
        "Knie rutscht nach außen: Knie bleiben zusammen, nur der Unterschenkel bewegt sich.",
        "Schwung holen: Langsam und aktiv drehen.",
        "Schmerzen in der Leiste: Bewegung verkleinern."
      ],
      vorteile: [
        "Verbessert die aktiv nutzbare Innenrotation der Hüfte.",
        "Zeigt Seitenunterschiede deutlich.",
        "Sehr einfach und überall durchführbar.",
        "Gute Vorbereitung für Hüftübungen im Stand."
      ],
      tipps: [
        "10 bis 15 Wiederholungen je Seite mit Halt.",
        "Vergleiche beide Seiten. Golfer haben oft vorn weniger Innenrotation.",
        "Mehrmals pro Woche kurz üben bringt mehr als selten lange."
      ],
      varianten: "Leichter: ohne Halt. Schwerer: mit leichtem Band um den Fußknöchel oder längerer Halt.",
      sicherheit: "Bei Hüft- oder Knieschmerzen nur im schmerzfreien Bereich.",
      golf: "Ausreichende Innenrotation der Hüfte ist eine Grundlage für eine gute Hüftdrehung im Schwung. Ist sie eingeschränkt, weichen Golfer oft mit Hüfte oder Wirbelsäule aus. Die Übung verbessert die aktive Kontrolle über diesen Bewegungsbereich."
    }
  },
  {
    id: "golf_seitsprung_halten",
    name: "Seitsprung mit Landung auf einem Bein",
    auch: ["Lateral Bound and Stick", "Lateral Bound to Hold", "Skater Bound Stick"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "quadrizeps"],
    sekundaer: ["adduktoren", "waden"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { knie: 1, sprunggelenk: 1, huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Weich landen und zwei Sekunden stabil stehen bleiben.",
    info: {
      kurz: "Seitlicher Sprung von einem Bein auf das andere mit stabiler Landung und kurzem Halt. Trainiert seitliche Schnellkraft und das Abfangen von Kräften auf einem Bein, ähnlich der Druckverlagerung im Golfschwung.",
      ausfuehrung: [
        "Stell dich auf ein Bein, das andere ist leicht angehoben, Knie und Hüfte gebeugt wie in einer kleinen Kniebeuge.",
        "Hol mit den Armen Schwung und drück dich kräftig seitlich ab.",
        "Spring zur Seite und lande auf dem anderen Bein, weich über den Fußballen auf den ganzen Fuß.",
        "Fang die Landung in einer leichten Kniebeuge ab, Knie über dem Fuß, Hüfte nach hinten.",
        "Halte die Landung zwei Sekunden ruhig, ohne zu wackeln.",
        "Spring dann zurück zur Ausgangsseite und halte erneut."
      ],
      atmung: "Beim Absprung ausatmen, in der Haltephase ruhig atmen.",
      fehler: [
        "Knie fällt bei der Landung nach innen: Knie über dem zweiten Zeh halten.",
        "Harte Landung: Leise landen, Gelenke beugen.",
        "Sprung zu weit: Nur so weit, wie du sicher halten kannst.",
        "Oberkörper kippt weit zur Seite: Aufrecht landen."
      ],
      vorteile: [
        "Trainiert seitliche Schnellkraft.",
        "Verbessert Landestabilität und Knieausrichtung.",
        "Kräftigt die seitlichen Hüftmuskeln.",
        "Ohne Gerät durchführbar."
      ],
      tipps: [
        "4 bis 6 Sprünge je Seite mit sauberer Landung.",
        "Steigere zuerst die Haltezeit, dann die Weite.",
        "Auf rutschfestem Untergrund üben."
      ],
      varianten: "Leichter: kleiner Seitschritt statt Sprung. Schwerer: weitere Sprünge oder fortlaufend ohne Halt.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden vorsichtig. Raumhöhe und Platz beachten.",
      golf: "Im Golfschwung verlagert sich der Druck schnell vom hinteren auf das vordere Bein. Seitliche Sprünge trainieren den kraftvollen Abdruck und das stabile Abfangen, was die Bodenreaktionskräfte im Schwung unterstützen kann."
    }
  },
  {
    id: "golf_rotationssprung",
    name: "Rotationssprung 90 Grad",
    auch: ["90 Degree Jump Turn", "Rotational Jump", "Jump Squat with Quarter Turn"],
    muster: "schnellkraft_sprung",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps", "schraege_bauch"],
    sekundaer: ["waden", "adduktoren"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    hinweis: "Weich landen, Knie über den Füßen, dann sofort stabil.",
    info: {
      kurz: "Beidbeiniger Sprung mit einer Vierteldrehung in der Luft und stabiler Landung. Verbindet vertikale Sprungkraft mit Rotation und schult die Kontrolle bei Landung nach einer Drehung.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Arme locker neben dem Körper.",
        "Geh zügig in eine viertel bis halbe Kniebeuge und hol mit den Armen Schwung.",
        "Spring explosiv nach oben und dreh dich in der Luft um 90 Grad.",
        "Lande weich auf beiden Füßen, Knie und Hüfte gebeugt, Knie über den Füßen.",
        "Halte die Landung eine Sekunde stabil.",
        "Spring dann in die Gegenrichtung zurück."
      ],
      atmung: "Beim Absprung ausatmen, bei der Landung einatmen.",
      fehler: [
        "Knie fallen bei der Landung nach innen: Knie nach außen über die Füße.",
        "Zu starke Drehung aus den Schultern: Drehung aus Hüfte und Beinen.",
        "Harte Landung: Leise landen.",
        "Wackelige Landung: Erst stabil, dann weiter."
      ],
      vorteile: [
        "Trainiert Sprungkraft und Rotationskontrolle.",
        "Verbessert Landestabilität nach einer Drehung.",
        "Fördert Koordination und Körperspannung.",
        "Ohne Gerät durchführbar."
      ],
      tipps: [
        "4 bis 6 Sprünge je Richtung.",
        "Zuerst Vierteldrehungen, später halbe Drehungen.",
        "Sinnvoll am Anfang der Einheit."
      ],
      varianten: "Leichter: kleine Sprünge oder Drehung ohne Sprung. Schwerer: 180 Grad oder einbeinige Landung.",
      sicherheit: "Bei Knie- oder Sprunggelenksbeschwerden auslassen. Auf genug Raumhöhe achten.",
      golf: "Schnelles Drücken in den Boden und Drehen erzeugt im Schwung Geschwindigkeit. Der Rotationssprung trainiert Sprungkraft und Drehung zusammen, was den Boden als Kraftquelle besser nutzbar machen kann."
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
    id: "golf_rumpfrotation_stehend",
    name: "Oberkörperrotation bei ruhiger Hüfte",
    auch: ["Torso Rotation Drill", "Torso Rotation Test", "Upper Body Rotation Hips Still"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "oberer_ruecken"],
    sekundaer: ["latissimus"],
    geraete: [["golfschlaeger"], ["stab"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    sport: ["golf"],
    golf: 3,
    hinweis: "Das Becken bleibt fest, nur Brust und Schultern drehen.",
    info: {
      kurz: "Gegenstück zur Beckenrotation: In der Golfhaltung drehst du den Oberkörper hin und her, während das Becken ruhig bleibt. Fördert die Beweglichkeit der Brustwirbelsäule und die Trennung von Ober- und Unterkörper.",
      ausfuehrung: [
        "Geh in deine Golfhaltung und halte einen Schläger quer vor den Schultern, die Arme verschränkt.",
        "Leg die Knie leicht zusammen oder stell dich mit dem Becken an eine Kante, damit es ruhig bleibt.",
        "Dreh den Oberkörper langsam zu einer Seite, das Becken bleibt nach vorn ausgerichtet.",
        "Dreh dann zur anderen Seite.",
        "Halte den Neigungswinkel des Oberkörpers, der Schläger dreht etwa parallel zum Boden.",
        "Wiederhole mit ruhigem Rhythmus."
      ],
      atmung: "Bei der Drehung ausatmen, in der Mitte einatmen.",
      fehler: [
        "Becken dreht mit: Bewegung verkleinern oder Becken an einer Bank anlehnen.",
        "Aufrichten während der Drehung: Neigungswinkel halten.",
        "Seitneigung statt Drehung: Schultern drehen um die Wirbelsäule.",
        "Zu schnell: Langsam und kontrolliert."
      ],
      vorteile: [
        "Verbessert die Rotation der Brustwirbelsäule in der Golfhaltung.",
        "Schult die Trennung von Ober- und Unterkörper.",
        "Kann die Lendenwirbelsäule entlasten, weil die Drehung im richtigen Abschnitt passiert.",
        "Gute Aufwärmübung."
      ],
      tipps: [
        "10 bis 15 Wiederholungen je Seite.",
        "Mit einem Spiegel kontrollieren, ob das Becken ruhig bleibt.",
        "Vor der Runde als Teil des Aufwärmens nutzen."
      ],
      varianten: "Leichter: im Sitzen. Schwerer: mit Halt in der Enddrehung oder in tieferer Haltung.",
      sicherheit: "Bei Rückenschmerzen nur im schmerzfreien Bereich bewegen.",
      golf: "Ein großer Schulterdreh im Rückschwung kommt vor allem aus der Brustwirbelsäule. Kann sie gut rotieren, muss die Lendenwirbelsäule weniger ausgleichen. Die Übung verbessert diese Drehfähigkeit genau in der Golfhaltung."
    }
  },
  {
    id: "golf_hueftbeuge_schlaeger",
    name: "Hüftbeuge mit Schläger am Rücken",
    auch: ["Hip Hinge with Club", "Dowel Hip Hinge", "Golf Posture Drill", "Hip Hinge Drill"],
    muster: "hueftstreckung",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess", "ruecken_unten"],
    sekundaer: ["bauch"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Schläger berührt Hinterkopf, Brustwirbelsäule und Kreuzbein die ganze Zeit.",
    info: {
      kurz: "Du hältst einen Schläger längs am Rücken, sodass er Hinterkopf, oberen Rücken und Kreuzbein berührt, und beugst dich aus der Hüfte nach vorn. Die wichtigste Grundübung, um die Ansprechhaltung mit geradem Rücken zu lernen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte einen Schläger längs am Rücken: eine Hand im Nacken, die andere am unteren Rücken.",
        "Der Schläger berührt drei Punkte: Hinterkopf, Brustwirbelsäule und Kreuzbein.",
        "Beuge die Knie leicht und schieb das Gesäß nach hinten, sodass sich der Oberkörper aus der Hüfte nach vorn neigt.",
        "Neige dich so weit, bis der Oberkörper etwa in deinem Ansprechwinkel ist, alle drei Kontaktpunkte bleiben bestehen.",
        "Spür die Dehnung an der Rückseite der Oberschenkel und das Gewicht über der Fußmitte.",
        "Richte dich durch Vorschieben der Hüfte wieder auf und wiederhole."
      ],
      atmung: "Beim Vorbeugen einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Schläger verliert Kontakt am Kreuzbein: Rücken rundet sich, Gesäß weiter nach hinten.",
        "Schläger verliert Kontakt am oberen Rücken: Hohlkreuz, Rippen nach unten ziehen.",
        "Knie beugen zu stark: Es ist eine Hüftbeuge, keine Kniebeuge.",
        "Gewicht auf den Zehen: Gewicht über der Fußmitte halten."
      ],
      vorteile: [
        "Lehrt eine neutrale Golfhaltung.",
        "Verbessert die Hüftbeugung als Grundlage für viele Kraftübungen.",
        "Schont den Rücken, weil die Bewegung aus der Hüfte kommt.",
        "Überall mit einem Schläger umsetzbar."
      ],
      tipps: [
        "10 bis 15 langsame Wiederholungen.",
        "Vor einem Spiegel seitlich üben.",
        "Danach direkt ohne Schläger die gleiche Haltung einnehmen, um das Gefühl zu übertragen."
      ],
      varianten: "Leichter: kleinerer Neigungswinkel. Schwerer: einbeinig oder mit Halt von 5 Sekunden unten.",
      sicherheit: "Bei Rückenschmerzen nur im schmerzfreien Bereich.",
      golf: "Eine gute Ansprechhaltung beginnt mit einer sauberen Hüftbeuge. Die Übung zeigt dir, ob du aus der Hüfte beugst oder im Rücken rundest, und schult eine Haltung, aus der du frei drehen kannst. Golftrainer nutzen sie als Basisübung für die Haltung."
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
    id: "golf_bws_rotation_sitzend",
    name: "Sitzende Rumpfrotation mit Schläger",
    auch: ["Seated Trunk Rotation with Club", "Seated Thoracic Rotation", "Seated Rotation Drill"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "oberer_ruecken"],
    sekundaer: ["latissimus"],
    geraete: [["golfschlaeger", "bank"], ["stab", "bank"], ["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 160,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Knie zusammen, Rücken lang, Drehung aus der Brustwirbelsäule.",
    info: {
      kurz: "Im Sitzen mit fixierter Hüfte drehst du den Oberkörper mit einem Schläger vor der Brust oder hinter den Schultern. Eine Standardübung und ein Test aus dem TPI-Programm für die Rotation der Brustwirbelsäule.",
      ausfuehrung: [
        "Setz dich aufrecht auf eine Bank oder einen Stuhl, die Füße flach am Boden, die Knie zusammen.",
        "Leg einen Schläger quer vor die Brust und verschränke die Arme darüber, oder leg ihn hinter die Schultern.",
        "Klemme bei Bedarf einen Ball oder ein Kissen zwischen die Knie, damit das Becken ruhig bleibt.",
        "Dreh den Oberkörper langsam zu einer Seite, so weit es geht, ohne dass sich das Becken bewegt.",
        "Halte die Enddrehung kurz und dreh dann zur anderen Seite.",
        "Bleib dabei aufrecht und lang, der Kopf dreht mit dem Oberkörper."
      ],
      atmung: "Bei der Drehung ausatmen und am Ende mit dem Ausatmen etwas weiter drehen.",
      fehler: [
        "Runder Rücken: Aufrecht sitzen, Brustbein nach oben.",
        "Becken und Knie drehen mit: Knie zusammenhalten.",
        "Seitneigung statt Drehung: Schläger bleibt waagerecht.",
        "Schwung holen: Langsam und kontrolliert drehen."
      ],
      vorteile: [
        "Verbessert die Rotation der Brustwirbelsäule.",
        "Zeigt Seitenunterschiede deutlich.",
        "Sehr einfach und überall möglich.",
        "Schonend für den unteren Rücken, weil das Becken fixiert ist."
      ],
      tipps: [
        "10 bis 12 Drehungen je Seite.",
        "Die Golfer-Zielmarke im TPI-Test liegt bei etwa 45 Grad Drehung je Seite.",
        "Gut für Pausen im Büroalltag."
      ],
      varianten: "Leichter: ohne Schläger, Hände an den Schultern. Schwerer: in leichter Vorneigung wie in der Golfhaltung oder mit Halt in der Enddrehung.",
      sicherheit: "Bei Rückenschmerzen nur im schmerzfreien Bereich drehen.",
      golf: "Die Drehung der Brustwirbelsäule bestimmt maßgeblich, wie weit du im Rückschwung aufdrehen kannst. Mit festgestelltem Becken trainierst du genau diesen Abschnitt und entlastest die Lendenwirbelsäule, die für Rotation wenig gemacht ist."
    }
  },
  {
    id: "golf_bws_rotation_halbkniend",
    name: "Halbkniende Rumpfrotation mit Schläger",
    auch: ["Half-Kneeling Thoracic Rotation with Club", "Half Kneeling T-Spine Rotation"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["schraege_bauch", "oberer_ruecken"],
    sekundaer: ["hueftbeuger"],
    geraete: [["golfschlaeger", "matte"], ["stab", "matte"], ["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 160,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Zur Seite des vorderen Beins drehen, das Becken bleibt gerade.",
    info: {
      kurz: "Rumpfrotation im Halbkniestand mit einem Schläger hinter den Schultern. Durch die Kniestellung ist das Becken gesichert, gleichzeitig wird die Hüfte des knienden Beins sanft gedehnt.",
      ausfuehrung: [
        "Knie dich auf eine Matte, ein Fuß steht vorn, das andere Knie liegt am Boden.",
        "Leg einen Schläger quer hinter die Schultern und halte ihn mit beiden Händen fest.",
        "Spann das Gesäß des knienden Beins an und richte den Oberkörper auf.",
        "Dreh den Oberkörper langsam zur Seite des vorderen Beins, so weit es ohne Bewegung des Beckens geht.",
        "Dreh dann zurück zur Mitte und etwas zur anderen Seite.",
        "Wechsle nach dem Satz das vordere Bein."
      ],
      atmung: "Beim Drehen ausatmen, in der Mitte einatmen.",
      fehler: [
        "Becken dreht mit: Gesäß aktiv, Becken zeigt nach vorn.",
        "Hohlkreuz: Rippen unten lassen.",
        "Schläger kippt: Schläger bleibt waagerecht.",
        "Zu schnell: Langsam drehen."
      ],
      vorteile: [
        "Verbessert die Rotation der Brustwirbelsäule.",
        "Dehnt gleichzeitig den Hüftbeuger des knienden Beins.",
        "Stabile Ausgangsposition für Einsteiger.",
        "Gut im Aufwärmprogramm."
      ],
      tipps: [
        "8 bis 10 Drehungen je Seite.",
        "Der Blick folgt der Drehung.",
        "Gut kombinierbar mit Holzhacker und Heben halbkniend."
      ],
      varianten: "Leichter: Hände vor der Brust. Schwerer: Halt in der Enddrehung oder Schläger über Kopf.",
      sicherheit: "Bei Kniebeschwerden gut polstern.",
      golf: "Die Übung verbindet eine freie Brustwirbelsäule mit gesicherter Hüfte, also genau die Trennung, die im Rückschwung gebraucht wird. Sie ist eine einfache Möglichkeit, die Drehfähigkeit vor dem Golfen zu verbessern."
    }
  },
  {
    id: "golf_open_book_schlaeger",
    name: "Open Book mit Schläger",
    auch: ["Open Book with Club", "Side-Lying Thoracic Rotation with Club", "Book Opening"],
    muster: "mobilitaet_bws",
    art: "mobilitaet",
    muskeln: ["brust", "oberer_ruecken"],
    sekundaer: ["schraege_bauch", "schulter_vorn"],
    geraete: [["golfschlaeger", "matte"], ["stab", "matte"], ["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Knie bleiben aufeinander, der obere Arm öffnet sich mit dem Schläger.",
    info: {
      kurz: "In Seitenlage öffnest du den Oberkörper wie ein Buch, mit einem Schläger in den Händen als Hebel und Führung. Mobilisiert die Brustwirbelsäule in Rotation und dehnt die Brustmuskulatur.",
      ausfuehrung: [
        "Leg dich auf die Seite, die Hüfte und Knie im rechten Winkel gebeugt, den Kopf auf einem Kissen.",
        "Halte einen Schläger mit beiden Händen vor der Brust, die Arme gestreckt.",
        "Leg ein Kissen oder eine Rolle zwischen die Knie oder drück das obere Knie leicht zum Boden, damit das Becken ruhig bleibt.",
        "Führe den oberen Arm mit dem Schläger in einem Bogen nach hinten und dreh den Oberkörper mit auf, der untere Arm bleibt liegen.",
        "Lass den oberen Arm so weit nach hinten sinken, wie es angenehm ist, und halte die Position.",
        "Atme in die Dehnung und kehre nach der Haltezeit langsam zurück."
      ],
      atmung: "Ruhig weiteratmen, mit jedem Ausatmen etwas weiter aufdrehen.",
      fehler: [
        "Knie rutschen auseinander: Knie aufeinander lassen.",
        "Arm zieht nur im Schultergelenk: Der ganze Brustkorb dreht mit.",
        "Schmerzen in der Schulter: Arm etwas tiefer führen.",
        "Kopf bleibt liegen: Kopf dreht mit dem Oberkörper."
      ],
      vorteile: [
        "Verbessert die Rotation der Brustwirbelsäule.",
        "Dehnt die Brustmuskulatur.",
        "Entlastet den unteren Rücken durch fixiertes Becken.",
        "Sehr sanft und für Einsteiger geeignet."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 30 Sekunden je Seite.",
        "Der Schläger als Hebel lässt dich die Drehung gut dosieren.",
        "Ideal am Abend oder nach einer Runde."
      ],
      varianten: "Leichter: ohne Schläger, Hand am Hinterkopf. Schwerer: dynamisch mit 10 Wiederholungen oder mit Bein auf einer Rolle.",
      sicherheit: "Bei Schulterbeschwerden den Arm tiefer halten oder ohne Schläger üben.",
      golf: "Ein freier Brustkorb ist Voraussetzung für einen vollen Schulterdreh. Das Open Book verbessert diese Drehfähigkeit mit fixiertem Becken und kann helfen, dass der untere Rücken im Schwung weniger kompensieren muss."
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
    id: "golf_9090_hueftwechsel",
    name: "90/90-Hüftwechsel für Golfer",
    auch: ["90/90 Hip Switch", "90/90 Hip Transition", "Windshield Wiper 90/90"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["gesaess", "gesaess_mittel", "adduktoren"],
    sekundaer: ["hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { huefte: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    hinweis: "Langsam von Seite zu Seite, Oberkörper aufrecht.",
    info: {
      kurz: "Im Sitzen mit beiden Beinen im 90/90-Winkel wechselst du die Knie von einer Seite zur anderen. Mobilisiert die Hüfte abwechselnd in Innen- und Außenrotation, genau die Bewegungen, die die Hüften im Golfschwung brauchen.",
      ausfuehrung: [
        "Setz dich auf den Boden, ein Bein liegt vorn mit Hüfte und Knie im rechten Winkel, das andere seitlich hinten ebenfalls im rechten Winkel.",
        "Stütz dich mit den Händen hinter dir ab und richte den Oberkörper auf.",
        "Heb beide Knie und dreh sie langsam zur anderen Seite, die Füße bleiben dabei möglichst am Boden.",
        "Lande in der gespiegelten 90/90-Position.",
        "Richte dich auf und lehne dich leicht über das vordere Schienbein, um die Dehnung zu vertiefen.",
        "Wechsle mit ruhigem Rhythmus hin und her."
      ],
      atmung: "Während des Wechsels ruhig weiteratmen, in der Endposition mit dem Ausatmen tiefer gehen.",
      fehler: [
        "Runder Rücken: Brust aufrichten, bei Bedarf mit den Händen abstützen.",
        "Schwungvolles Fallenlassen: Kontrolliert wechseln.",
        "Schmerz im Knie: Füße weiter auseinander stellen.",
        "Becken kippt stark: Gesäß bleibt möglichst am Boden."
      ],
      vorteile: [
        "Mobilisiert Innen- und Außenrotation beider Hüften.",
        "Verbessert die Hüftbeweglichkeit für Rück- und Durchschwung.",
        "Ohne Geräte überall möglich.",
        "Gute Aufwärm- und Abwärmübung."
      ],
      tipps: [
        "8 bis 10 Wechsel je Seite.",
        "Zum Schluss einige Sekunden in jeder Position halten.",
        "Ohne Handstütze wird die Übung aktiver."
      ],
      varianten: "Leichter: mit Handstütze und kleinerem Bewegungsweg. Schwerer: ohne Hände oder mit Aufstehen in den Kniestand.",
      sicherheit: "Bei Knie- oder Hüftschmerzen Füße weiter auseinander und nur schmerzfrei.",
      golf: "Im Rückschwung braucht die hintere Hüfte Innenrotation, im Durchschwung die vordere. Der 90/90-Wechsel trainiert beide Richtungen und hilft, Bewegungsfreiheit für eine kraftvolle Hüftdrehung zu gewinnen."
    }
  },
  {
    id: "golf_lat_dehnung_schlaeger",
    name: "Latissimus-Dehnung mit Schläger",
    auch: ["Lat Stretch with Club", "Standing Club Lat Stretch", "Club Hinge Lat Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["trizeps", "beinbeuger"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    hinweis: "Hüfte nach hinten schieben, Brust Richtung Boden sinken lassen.",
    info: {
      kurz: "Du stützt dich mit beiden Händen auf einen senkrecht gestellten Schläger und schiebst die Hüfte nach hinten, bis der Oberkörper waagerecht ist. Dehnt Latissimus und Schultern, eine klassische Übung beim Aufwärmen auf dem Golfplatz.",
      ausfuehrung: [
        "Stell einen Schläger mit dem Kopf auf den Boden vor dir, etwa eine Armlänge entfernt, und leg beide Hände auf den Griff.",
        "Geh einen Schritt zurück und schieb die Hüfte nach hinten, die Arme bleiben gestreckt.",
        "Lass den Oberkörper sinken, bis er etwa waagerecht ist, die Brust sinkt Richtung Boden.",
        "Halte den Rücken lang und die Knie leicht gebeugt.",
        "Spür die Dehnung seitlich am Rücken und unter den Achseln.",
        "Halte die Position und richte dich nach der Haltezeit langsam auf."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Brust etwas tiefer sinken lassen.",
      fehler: [
        "Runder Rücken: Gesäß nach hinten, Rücken lang.",
        "Ellbogen beugen: Arme gestreckt halten.",
        "Kopf hängt: Kopf zwischen den Armen in Verlängerung.",
        "Zu tief hängen in der Schulter: Nur so weit, wie es angenehm ist."
      ],
      vorteile: [
        "Dehnt Latissimus und Schultergürtel.",
        "Verbessert die Überkopfbeweglichkeit.",
        "Dehnt nebenbei die Rückseite der Oberschenkel.",
        "Überall auf dem Golfplatz mit einem Schläger machbar."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 20 bis 30 Sekunden.",
        "Dreh den Oberkörper leicht zu einer Seite, um eine Seite gezielter zu dehnen.",
        "Gut als Teil des Aufwärmens vor dem ersten Abschlag."
      ],
      varianten: "Leichter: Hände höher, z. B. an einer Wand. Schwerer: Hände auf einer Bank oder Seitneigung einbauen.",
      sicherheit: "Bei Schulterinstabilität nur vorsichtig dehnen.",
      golf: "Ein verkürzter Latissimus kann die Drehung im Rückschwung und die Haltung am Ball beeinträchtigen. Die Dehnung verbessert die Beweglichkeit der Schultern und des oberen Rückens und lässt sich direkt auf dem Platz einbauen."
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
    id: "golf_einbein_kreuzheben_schlaeger",
    name: "Einbeiniges Kreuzheben mit Schläger",
    auch: ["Single-Leg RDL with Club", "Single Leg Romanian Deadlift Dowel", "Single-Leg Hinge with Club"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["beinbeuger", "gesaess"],
    sekundaer: ["gesaess_mittel", "ruecken_unten", "waden"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    schwerer: "golf_einbein_kreuzheben_rotation",
    hinweis: "Schläger bleibt am Rücken, das Becken bleibt waagerecht.",
    info: {
      kurz: "Einbeiniges Kreuzheben mit einem Schläger längs am Rücken als Haltungskontrolle. Trainiert Gleichgewicht, Hüftbeugung und Gesäßkraft auf einem Bein und schult einen geraden Rücken.",
      ausfuehrung: [
        "Halte einen Schläger längs am Rücken, sodass er Hinterkopf, oberen Rücken und Kreuzbein berührt.",
        "Stell dich auf ein Bein, das Standknie leicht gebeugt.",
        "Kippe den Oberkörper aus der Hüfte nach vorn, während das freie Bein gestreckt nach hinten geht.",
        "Senke den Oberkörper, bis du eine Dehnung hinten am Oberschenkel spürst oder der Oberkörper fast waagerecht ist.",
        "Halte das Becken waagerecht, die Zehen des freien Beins zeigen nach unten.",
        "Komm über das Gesäß des Standbeins wieder hoch und wiederhole."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Becken dreht auf: Hüfte des freien Beins zeigt nach unten.",
        "Rücken rundet sich: Schläger verliert den Kontakt, weniger tief gehen.",
        "Knie streckt sich ganz: Standknie leicht gebeugt.",
        "Schnelles Fallen nach vorn: Langsam und kontrolliert."
      ],
      vorteile: [
        "Kräftigt Gesäß und Beinbeuger einseitig.",
        "Verbessert Gleichgewicht und Hüftkontrolle.",
        "Schult eine gerade Wirbelsäule beim Vorbeugen.",
        "Mit Schläger überall machbar."
      ],
      tipps: [
        "8 bis 10 Wiederholungen je Seite.",
        "Erst wenn die Übung sicher ist, Gewicht in die Hand nehmen.",
        "Langsames Tempo von 3 Sekunden nach unten verbessert die Kontrolle."
      ],
      varianten: "Leichter: Zehen des freien Beins hinten abstellen. Schwerer: mit Rotation am unteren Punkt oder Kurzhantel in der Hand.",
      sicherheit: "Bei Rückenbeschwerden zuerst die beidbeinige Hüftbeuge üben.",
      golf: "Eine stabile Hüfte auf einem Bein und eine kontrollierte Hüftbeuge sind Grundlagen der Golfhaltung und der Gewichtsverlagerung. Die Übung trainiert beides und stärkt das Gesäß, das im Schwung das Becken stabilisiert."
    }
  },
  {
    id: "golf_einbein_kreuzheben_rotation",
    name: "Einbeiniges Kreuzheben mit Rotation",
    auch: ["Single-Leg RDL with Rotation", "Single Leg Deadlift with Reach and Rotate", "Rotational Single-Leg RDL"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "beinbeuger"],
    sekundaer: ["schraege_bauch", "waden"],
    geraete: [["golfschlaeger"], ["stab"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Am tiefsten Punkt dreht das Becken über dem Standbein.",
    info: {
      kurz: "Einbeiniges Kreuzheben, bei dem du am tiefsten Punkt das Becken über dem Standbein ein- und ausdrehst. Trainiert Hüftrotation unter Last auf einem Bein, ähnlich dem Hip Airplane.",
      ausfuehrung: [
        "Stell dich auf ein Bein, halte einen Schläger quer vor der Brust oder die Hände an den Hüften.",
        "Kippe aus der Hüfte nach vorn, das freie Bein geht nach hinten, bis der Oberkörper fast waagerecht ist.",
        "Dreh das Becken und den Oberkörper langsam zur Seite des Standbeins nach unten (Hüfte dreht nach innen).",
        "Dreh dann zur anderen Seite auf, sodass sich die Hüfte des freien Beins Richtung Decke öffnet.",
        "Kehre in die waagerechte Mitte zurück und richte dich über das Gesäß auf.",
        "Wiederhole und wechsle nach dem Satz das Bein."
      ],
      atmung: "Beim Absenken einatmen, bei den Drehungen ruhig weiteratmen, beim Aufrichten ausatmen.",
      fehler: [
        "Knie dreht statt der Hüfte: Knie bleibt über dem Fuß, die Hüfte dreht im Gelenk.",
        "Rücken rundet sich: Rücken lang.",
        "Gleichgewicht geht verloren: Kleinere Drehung oder Wandkontakt mit einer Hand.",
        "Zu schnell: Langsam und kontrolliert."
      ],
      vorteile: [
        "Kräftigt die Hüftrotatoren auf einem Bein.",
        "Verbessert Balance und Rotationskontrolle.",
        "Trainiert die Hüfte in Innen- und Außenrotation unter Last.",
        "Sehr golfspezifische Hüftübung."
      ],
      tipps: [
        "5 bis 8 langsame Wiederholungen je Seite.",
        "Anfangs mit einer Hand an einer Wand.",
        "Vorher die Hüftbeweglichkeit mit dem 90/90-Wechsel vorbereiten."
      ],
      varianten: "Leichter: mit Handstütze. Schwerer: mit leichter Kurzhantel oder längerem Halt in jeder Drehung.",
      sicherheit: "Bei Hüft- oder Rückenbeschwerden nur kleiner Bewegungsumfang.",
      golf: "Im Abschwung dreht das Becken über dem vorderen Bein, während der Oberkörper vorgebeugt ist. Diese Übung trainiert genau die Drehung im Hüftgelenk des Standbeins und stärkt die Muskeln, die diese Bewegung stabilisieren."
    }
  },
  {
    id: "golf_hip_airplane",
    name: "Hip Airplane",
    auch: ["Hip Airplane", "Standing Hip Airplane", "Hüftflugzeug"],
    muster: "balance",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel"],
    sekundaer: ["beinbeuger", "adduktoren", "schraege_bauch"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { huefte: 1 },
    stufe: 3,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Arme seitlich wie Flügel, das Becken dreht über dem Standbein.",
    info: {
      kurz: "Im Einbeinstand mit vorgeneigtem Oberkörper drehst du Becken und Oberkörper über dem Standbein auf und zu. Eine bekannte Übung für Hüftkontrolle und Hüftrotation auf einem Bein.",
      ausfuehrung: [
        "Stell dich auf ein Bein, das Knie leicht gebeugt. Halte dich anfangs mit einer Hand an einer Wand oder Stange.",
        "Kippe den Oberkörper nach vorn, bis er fast waagerecht ist, das freie Bein geht gestreckt nach hinten.",
        "Breite die Arme seitlich aus wie Flügel.",
        "Dreh Becken und Oberkörper langsam zur Seite des Standbeins nach unten, bis die Hüfte am Ende ist.",
        "Dreh dann auf, sodass sich das Becken zur anderen Seite öffnet.",
        "Kehre zur waagerechten Mitte zurück und wiederhole langsam."
      ],
      atmung: "Ruhig weiteratmen, bei jeder Drehung ausatmen.",
      fehler: [
        "Knie dreht mit: Knie bleibt über dem Fuß.",
        "Oberkörper dreht ohne Becken: Becken und Oberkörper als Einheit drehen.",
        "Zu tiefe Vorneigung: Nur so tief wie kontrolliert.",
        "Ohne Halt bei Unsicherheit: Anfangs immer mit Handstütze."
      ],
      vorteile: [
        "Verbessert Kraft und Kontrolle der Hüftrotation.",
        "Fordert Gleichgewicht und Gesäßmuskulatur stark.",
        "Hilft, Seitenunterschiede zu erkennen.",
        "Kann helfen, die Hüfte gezielt zu stabilisieren."
      ],
      tipps: [
        "5 bis 8 langsame Wiederholungen je Seite.",
        "Erst mit Halt, dann frei.",
        "Gut als Vorbereitung vor Würfen und Sprüngen."
      ],
      varianten: "Leichter: mit Handstütze und kleiner Drehung. Schwerer: frei, mit langem Halt oder leichter Hantel.",
      sicherheit: "Bei Hüftbeschwerden nur im schmerzfreien Bereich. Gleichgewicht sichern.",
      golf: "Die Hüfte des Standbeins muss im Schwung kontrolliert rotieren. Das Hip Airplane trainiert diese Rotation unter Gleichgewichtsanforderung und kann helfen, die Drehung über dem vorderen Bein im Abschwung stabiler zu machen."
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
    id: "golf_seitlicher_ausfallschritt_schlaeger",
    name: "Seitlicher Ausfallschritt mit Schläger",
    auch: ["Lateral Lunge with Club", "Side Lunge with Club Overhead", "Lateral Lunge Golf Warm-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["adduktoren", "gesaess", "quadrizeps"],
    sekundaer: ["gesaess_mittel", "oberer_ruecken"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Das gestreckte Bein bleibt mit der ganzen Fußsohle am Boden.",
    info: {
      kurz: "Seitlicher Ausfallschritt mit einem Schläger über Kopf oder vor der Brust. Kräftigt die Beine in der seitlichen Ebene und dehnt die Adduktoren, die im Golfschwung die Gewichtsverlagerung steuern.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte einen Schläger mit gestreckten Armen über dem Kopf oder quer vor der Brust.",
        "Mach einen großen Schritt zur Seite und setz den Fuß parallel auf.",
        "Beuge das Knie des Schrittbeins und schieb die Hüfte nach hinten, das andere Bein bleibt gestreckt.",
        "Senk dich ab, bis du eine Dehnung in der Innenseite des gestreckten Beins spürst.",
        "Drück dich kräftig vom Schrittbein zurück in die Mitte.",
        "Wechsle die Seiten oder mach alle Wiederholungen einer Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Zurückdrücken ausatmen.",
      fehler: [
        "Knie fällt nach innen: Knie über dem Fuß.",
        "Ferse hebt ab: Ganze Fußsohle am Boden.",
        "Runder Rücken: Brust aufrecht, Hüfte nach hinten.",
        "Schläger fällt nach vorn: Arme lang über Kopf."
      ],
      vorteile: [
        "Kräftigt Beine in der seitlichen Ebene.",
        "Dehnt die Adduktoren aktiv.",
        "Verbessert die Kontrolle der Gewichtsverlagerung.",
        "Gute Aufwärmübung mit Schläger."
      ],
      tipps: [
        "8 bis 10 Wiederholungen je Seite.",
        "Mit Schläger über Kopf wird zusätzlich die Haltung trainiert.",
        "Langsam absenken, kräftig zurück."
      ],
      varianten: "Leichter: kleinerer Schritt, Schläger vor der Brust. Schwerer: tiefer oder mit Kurzhantel.",
      sicherheit: "Bei Leisten- oder Kniebeschwerden kleinere Schritte.",
      golf: "Die Adduktoren und das Gesäß steuern die Gewichtsverlagerung zwischen hinterem und vorderem Bein. Der seitliche Ausfallschritt kräftigt diese Muskeln und verbessert die Beweglichkeit für einen breiteren, stabilen Stand."
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
  {
    id: "golf_ball_scheibenwischer",
    name: "Scheibenwischer mit Gymnastikball zwischen den Beinen",
    auch: ["Stability Ball Windshield Wipers", "Ball Leg Rotation", "Lying Ball Windshield Wiper"],
    muster: "rotation",
    art: "kraft",
    muskeln: ["schraege_bauch", "bauch"],
    sekundaer: ["adduktoren", "hueftbeuger"],
    geraete: [["gymnastikball", "matte"], ["gymnastikball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["golf"],
    golf: 2,
    hinweis: "Schultern bleiben am Boden, die Beine kippen kontrolliert zur Seite.",
    info: {
      kurz: "In Rückenlage hältst du einen Gymnastikball zwischen den Unterschenkeln und kippst die Beine langsam von Seite zu Seite. Kräftigt die schrägen Bauchmuskeln und trainiert die Rotation des Beckens gegen einen stabilen Oberkörper.",
      ausfuehrung: [
        "Leg dich auf den Rücken, die Arme seitlich ausgestreckt, die Handflächen am Boden.",
        "Klemm einen Gymnastikball zwischen die Unterschenkel und heb die Beine an, bis Hüfte und Knie etwa im rechten Winkel sind.",
        "Kippe die Beine mit dem Ball langsam zu einer Seite, die Schultern bleiben am Boden.",
        "Geh nur so weit, wie du die gegenüberliegende Schulter am Boden halten kannst.",
        "Zieh die Beine mit den Bauchmuskeln zurück zur Mitte.",
        "Kippe zur anderen Seite und wiederhole."
      ],
      atmung: "Beim Absenken zur Seite einatmen, beim Zurückholen ausatmen.",
      fehler: [
        "Schulter hebt ab: Kleinere Bewegung.",
        "Beine fallen unkontrolliert: Langsam absenken.",
        "Hohlkreuz: Bauch anspannen, unterer Rücken bleibt nah am Boden.",
        "Ball rutscht: Adduktoren fest zusammendrücken."
      ],
      vorteile: [
        "Kräftigt die schrägen Bauchmuskeln.",
        "Trainiert die Beckenrotation gegen einen stabilen Oberkörper.",
        "Aktiviert die Adduktoren.",
        "Mobilisiert die Wirbelsäule sanft in Rotation."
      ],
      tipps: [
        "8 bis 12 Wiederholungen je Seite.",
        "Langsam absenken bringt den meisten Effekt.",
        "Mit gestreckteren Beinen wird es schwerer."
      ],
      varianten: "Leichter: Füße am Boden, nur die Knie kippen. Schwerer: Beine gestreckt.",
      sicherheit: "Bei Rückenbeschwerden kleiner Bewegungsweg.",
      golf: "Im Abschwung dreht das Becken vor dem Oberkörper. Die Übung trainiert die Kontrolle dieser Beckenrotation gegen einen ruhigen Oberkörper und kräftigt die schrägen Bauchmuskeln, die beide Bereiche verbinden."
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
    id: "golf_unterarm_drehen_schlaeger",
    name: "Unterarm drehen mit Schläger",
    auch: ["Forearm Pronation Supination with Club", "Club Pronation and Supination", "Golf Club Forearm Rotation"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["bizeps"],
    geraete: [["golfschlaeger"], ["stab"], ["kurzhantel"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Ellbogen bleibt am Körper, nur der Unterarm dreht.",
    info: {
      kurz: "Mit angewinkeltem Ellbogen hältst du einen Schläger senkrecht und drehst den Unterarm, sodass der Schläger langsam zu beiden Seiten kippt. Kräftigt Pronation und Supination, die beim Rotieren des Schlägerblatts im Schwung arbeiten.",
      ausfuehrung: [
        "Setz dich oder stell dich hin, den Ellbogen 90 Grad gebeugt und seitlich am Körper.",
        "Halte den Schläger am Griff, sodass der Schaft senkrecht nach oben zeigt.",
        "Dreh den Unterarm langsam nach innen, bis der Schläger waagerecht zur Körpermitte zeigt.",
        "Dreh ihn kontrolliert zurück durch die Senkrechte und weiter nach außen.",
        "Bleib bei jeder Richtung kurz in der Endposition.",
        "Wechsle nach dem Satz die Hand."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Ellbogen wandert vom Körper weg: Oberarm fixieren.",
        "Schläger fällt unkontrolliert: Kürzer greifen.",
        "Schulter dreht mit: Nur der Unterarm bewegt sich.",
        "Zu schnell: Langsam, besonders am Ende."
      ],
      vorteile: [
        "Kräftigt die Unterarmdreher.",
        "Verbessert Kontrolle und Stabilität des Unterarms.",
        "Kann Belastungen am Ellbogen besser verteilen helfen.",
        "Überall mit einem Schläger möglich."
      ],
      tipps: [
        "10 bis 15 Wiederholungen je Richtung und Hand.",
        "Den Hebel über die Griffposition steigern.",
        "Gut als Teil eines Unterarmprogramms mit Anwinkeln und Strecken."
      ],
      varianten: "Leichter: kurz greifen. Schwerer: lang greifen oder Kurzhantel mit Gewicht an einem Ende.",
      sicherheit: "Bei Ellbogenschmerzen nur im schmerzfreien Bereich und mit kurzem Hebel.",
      golf: "Im Schwung drehen die Unterarme, damit das Schlägerblatt öffnet und schließt. Kräftige Unterarmdreher sorgen für Kontrolle des Schlägerblatts und können helfen, Ellbogen und Handgelenk auf die vielen Wiederholungen vorzubereiten."
    }
  },
  {
    id: "golf_hebel_handgelenk_kurzhantel",
    name: "Hebel-Handgelenkheben mit Kurzhantel",
    auch: ["Leverage Wrist Raise", "Dumbbell Radial Deviation", "Hammer Lever Raise", "Loaded Wrist Hinge"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Hantelstange nur an einer Seite beladen, das andere Ende greifen.",
    info: {
      kurz: "Eine einseitig beladene Kurzhantelstange wird wie ein Hammer gehalten und durch Anwinkeln des Handgelenks gehoben. Ermöglicht eine feinere Steigerung als der Schläger allein.",
      ausfuehrung: [
        "Belade eine Kurzhantelstange nur an einem Ende und greif das leere Ende.",
        "Stell dich aufrecht hin, der Arm hängt neben dem Körper, die Last zeigt nach vorn.",
        "Heb die Last durch Anwinkeln des Handgelenks Richtung Daumen nach oben, der Arm bleibt gestreckt.",
        "Halte die Last oben eine Sekunde, ohne dass der Arm mitgeht.",
        "Senke die Last langsam ab.",
        "Für die Gegenrichtung drehst du die Hantel, sodass die Last nach hinten zeigt, und hebst Richtung kleinem Finger."
      ],
      atmung: "Beim Heben ausatmen, beim Senken einatmen.",
      fehler: [
        "Zu viel Gewicht: Bewegung wird klein und ruckartig.",
        "Ellbogen beugt sich: Arm gestreckt halten.",
        "Schulter hebt mit: Schulter ruhig.",
        "Schnelles Absenken: Langsam senken."
      ],
      vorteile: [
        "Ermöglicht feine Steigerung der Last.",
        "Kräftigt die Unterarmmuskulatur für das Anwinkeln.",
        "Unterstützt die Stabilität des Handgelenks.",
        "Ergänzt Übungen mit dem Schläger."
      ],
      tipps: [
        "12 bis 15 Wiederholungen je Hand mit leichtem Gewicht.",
        "Steigere zuerst über den Hebel (Griffposition), dann über das Gewicht.",
        "Gut im Supersatz mit Unterarmdrehen."
      ],
      varianten: "Leichter: näher an der Last greifen. Schwerer: mehr Gewicht oder weiter weg greifen.",
      sicherheit: "Bei Handgelenksbeschwerden mit sehr leichtem Gewicht beginnen.",
      golf: "Ein starkes, kontrolliertes Anwinkeln hilft, den Schläger im Rückschwung zu setzen und im Abschwung stabil zu führen. Mehr Kraft im Unterarm kann die Belastbarkeit für viele Bälle auf der Range verbessern."
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
  {
    id: "golf_handgelenk_beugen_exzentrisch",
    name: "Exzentrisches Handgelenkbeugen mit Kurzhantel",
    auch: ["Eccentric Wrist Flexion", "Eccentric Wrist Curl", "Golfer's Elbow Eccentrics"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { handgelenk: 1, ellbogen: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Hochheben mit Hilfe der anderen Hand, langsam allein absenken.",
    info: {
      kurz: "Die Kurzhantel wird mit Hilfe der anderen Hand angehoben und dann allein langsam abgesenkt. Diese betont nachgebende Arbeit der Handgelenksbeuger wird häufig zur Kräftigung der Innenseite des Ellbogens genutzt.",
      ausfuehrung: [
        "Setz dich und leg den Unterarm auf den Oberschenkel oder eine Bank, die Handfläche zeigt nach oben, das Handgelenk hängt über die Kante.",
        "Halte eine leichte Kurzhantel in der Hand.",
        "Heb die Hantel mit Hilfe der anderen Hand ganz nach oben, sodass das Handgelenk gebeugt ist.",
        "Lass die Hilfshand los und senk die Hantel allein über 3 bis 5 Sekunden langsam ab.",
        "Unten angekommen hebst du wieder mit Hilfe der anderen Hand an.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim langsamen Absenken gleichmäßig ausatmen, beim Anheben einatmen.",
      fehler: [
        "Zu schnell absenken: Bewusst 3 bis 5 Sekunden.",
        "Zu viel Gewicht: Leicht beginnen, die Übung darf nur leicht unangenehm sein.",
        "Unterarm hebt ab: Unterarm bleibt aufgelegt.",
        "Mit der Arbeitshand heben: Die Hilfshand übernimmt das Anheben."
      ],
      vorteile: [
        "Kräftigt die Handgelenksbeuger mit Fokus auf die nachgebende Arbeit.",
        "Wird häufig zur Kräftigung bei Belastungen an der Ellbogeninnenseite eingesetzt.",
        "Fein dosierbar.",
        "Einfach zu Hause durchführbar."
      ],
      tipps: [
        "3 Sätze von 12 bis 15 langsamen Wiederholungen.",
        "Beginne mit 1 bis 3 kg.",
        "Regelmäßig mehrmals pro Woche ist wirksamer als selten schwer."
      ],
      varianten: "Leichter: weniger Gewicht oder kürzere Absenkzeit. Schwerer: mehr Gewicht oder längeres Absenken.",
      sicherheit: "Bei bestehenden Ellbogenbeschwerden die Übung mit Arzt oder Physiotherapie abstimmen.",
      golf: "Die Innenseite des Ellbogens ist bei Golfern häufig gereizt, oft als Golferellenbogen bezeichnet. Kräftige Handgelenksbeuger können die Belastbarkeit des Unterarms verbessern und sind ein fester Bestandteil vieler Vorbeugeprogramme."
    }
  },
  {
    id: "golf_handgelenk_strecken_exzentrisch",
    name: "Exzentrisches Handgelenkstrecken mit Kurzhantel",
    auch: ["Eccentric Wrist Extension", "Eccentric Reverse Wrist Curl", "Tennis Elbow Eccentrics"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 160,
    gelenke: { handgelenk: 1, ellbogen: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Handfläche nach unten, langsam über 3 bis 5 Sekunden absenken.",
    info: {
      kurz: "Wie das exzentrische Beugen, aber mit der Handfläche nach unten: Die Handgelenksstrecker senken die Hantel langsam ab. Häufig genutzt zur Kräftigung der Außenseite des Ellbogens, die bei Golfern am vorderen Arm belastet wird.",
      ausfuehrung: [
        "Setz dich und leg den Unterarm auf den Oberschenkel oder eine Bank, die Handfläche zeigt nach unten, das Handgelenk ragt über die Kante.",
        "Halte eine leichte Kurzhantel.",
        "Heb die Hantel mit Hilfe der anderen Hand, bis das Handgelenk gestreckt ist.",
        "Lass los und senk die Hantel allein über 3 bis 5 Sekunden ab.",
        "Unten hebst du wieder mit der Hilfshand an.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Absenken langsam ausatmen, beim Anheben einatmen.",
      fehler: [
        "Zu schnelles Absenken: Bewusst langsam.",
        "Zu schweres Gewicht: Die Strecker sind schwächer als die Beuger, leichter wählen.",
        "Ellbogen ganz gestreckt und verriegelt: Leicht gebeugt lassen.",
        "Unterarm dreht: Unterarm bleibt stabil."
      ],
      vorteile: [
        "Kräftigt die Handgelenksstrecker nachgebend.",
        "Wird häufig bei Belastungen an der Ellbogenaußenseite eingesetzt.",
        "Gleicht die oft stärkeren Beuger aus.",
        "Gut dosierbar."
      ],
      tipps: [
        "3 Sätze von 12 bis 15 Wiederholungen.",
        "Mit 1 bis 2 kg beginnen.",
        "Kombiniert mit dem exzentrischen Beugen für ausgewogene Unterarme."
      ],
      varianten: "Leichter: sehr leichtes Gewicht oder Band. Schwerer: mehr Gewicht oder längere Absenkzeit.",
      sicherheit: "Bei bestehenden Ellbogenbeschwerden mit Arzt oder Physiotherapie abstimmen.",
      golf: "Bei Golfern wird der vordere Arm im Treffmoment stark belastet, häufig an der Außenseite des Ellbogens. Kräftige Handgelenksstrecker können helfen, diese Belastung besser zu tolerieren."
    }
  },
  {
    id: "golf_unterarmbeuger_dehnung",
    name: "Unterarmbeuger-Dehnung",
    auch: ["Wrist Flexor Stretch", "Forearm Flexor Stretch", "Golfer's Elbow Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [["wand"], []],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Arm gestreckt, Finger sanft nach hinten ziehen.",
    info: {
      kurz: "Dehnung der Handgelenksbeuger an der Innenseite des Unterarms mit gestrecktem Arm. Eine einfache Dehnung nach dem Golfen oder Training, die die viel genutzte Unterarmmuskulatur entspannt.",
      ausfuehrung: [
        "Streck einen Arm vor dir aus, die Handfläche zeigt nach vorn, die Finger nach unten oder oben.",
        "Greif mit der anderen Hand die Finger und zieh sie sanft zu dir.",
        "Halte den Ellbogen gestreckt, ohne ihn zu verriegeln.",
        "Spür die Dehnung an der Innenseite des Unterarms.",
        "Halte die Position die vorgegebene Zeit.",
        "Alternativ die Handfläche flach an eine Wand legen, Finger nach unten, und den Körper leicht wegdrehen."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen sanft etwas weiter dehnen.",
      fehler: [
        "Zu starker Zug: Nur eine angenehme Dehnung.",
        "Ellbogen gebeugt: Arm strecken.",
        "Schulter zieht hoch: Schulter tief.",
        "Zu kurz gehalten: Mindestens 20 Sekunden."
      ],
      vorteile: [
        "Entspannt die Handgelenksbeuger.",
        "Verbessert die Beweglichkeit des Handgelenks in Streckung.",
        "Kann nach vielen Schlägen angenehm entlastend wirken.",
        "Überall machbar."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 20 bis 30 Sekunden.",
        "Nach dem Golfen oder dem Unterarmtraining.",
        "Mit der Wand fällt es leichter, ruhig zu halten."
      ],
      varianten: "Leichter: Ellbogen leicht gebeugt. Schwerer: Handfläche an der Wand mit stärkerer Drehung.",
      sicherheit: "Bei akuten Ellbogenschmerzen nur sanft und nach Abklärung.",
      golf: "Die Unterarmmuskeln arbeiten bei jedem Schlag intensiv. Regelmäßiges Dehnen kann helfen, die Beweglichkeit zu erhalten, und ist eine gute Ergänzung zu Kräftigungsübungen gegen Ellbogenbeschwerden."
    }
  },
  {
    id: "golf_unterarmstrecker_dehnung",
    name: "Unterarmstrecker-Dehnung",
    auch: ["Wrist Extensor Stretch", "Forearm Extensor Stretch", "Tennis Elbow Stretch"],
    muster: "mobilitaet_handgelenk",
    art: "mobilitaet",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Arm gestreckt, Handrücken sanft zu dir ziehen.",
    info: {
      kurz: "Dehnung der Handgelenksstrecker an der Außenseite des Unterarms. Ergänzt die Beugerdehnung und entspannt die Muskulatur, die beim Golfen im vorderen Arm viel arbeitet.",
      ausfuehrung: [
        "Streck einen Arm vor dir aus, die Handfläche zeigt nach unten.",
        "Beuge das Handgelenk, sodass die Finger nach unten zeigen.",
        "Greif mit der anderen Hand den Handrücken und zieh ihn sanft zu dir.",
        "Dreh den Unterarm leicht nach innen, um die Dehnung zu verstärken.",
        "Halte die Position und spür die Dehnung an der Außenseite des Unterarms.",
        "Wechsle nach der Haltezeit die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen sanft nachgeben.",
      fehler: [
        "Ellbogen gebeugt: Arm strecken.",
        "Zu starker Zug: Nur bis zu einer angenehmen Dehnung.",
        "Schulter zieht hoch: Schulter tief.",
        "Ruckartiges Ziehen: Gleichmäßig halten."
      ],
      vorteile: [
        "Entspannt die Handgelenksstrecker.",
        "Verbessert die Beweglichkeit in Beugung.",
        "Sinnvoller Ausgleich zum Griffkrafttraining.",
        "Ohne Geräte überall möglich."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 20 bis 30 Sekunden.",
        "Faust machen verstärkt die Dehnung.",
        "Nach dem Golfen und nach dem Unterarmtraining."
      ],
      varianten: "Leichter: Ellbogen leicht gebeugt. Schwerer: mit Faust und mehr Innendrehung.",
      sicherheit: "Bei akuten Beschwerden an der Ellbogenaußenseite nur sanft und nach Abklärung.",
      golf: "Der vordere Arm wird im Treffmoment stark belastet, besonders die Strecker an der Außenseite des Unterarms. Dehnen gehört neben Kräftigung zu den einfachen Maßnahmen, um diese Muskeln beweglich zu halten."
    }
  },

  // ---------- Schulter gesund halten ----------
  {
    id: "golf_aussenrotation_9090_band",
    name: "Außenrotation 90/90 mit Band",
    auch: ["90/90 External Rotation with Band", "Banded 90-90 ER", "Trail Arm External Rotation"],
    muster: "schulter_gesund",
    art: "kraft",
    muskeln: ["rotatorenmanschette"],
    sekundaer: ["schulter_hinten", "trapez"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 3,
    einseitig: true,
    hinweis: "Oberarm bleibt auf Schulterhöhe, nur der Unterarm dreht nach oben.",
    info: {
      kurz: "Außenrotation der Schulter mit dem Oberarm auf Schulterhöhe und gebeugtem Ellbogen gegen ein Band. Der hintere Arm ist oben im Rückschwung genau in dieser Position, daher ist die Übung für Golfer besonders passend.",
      ausfuehrung: [
        "Befestige ein Band auf Brusthöhe vor dir oder stell den Kabelzug dort ein.",
        "Heb den Oberarm seitlich auf Schulterhöhe, der Ellbogen ist 90 Grad gebeugt, der Unterarm zeigt nach vorn und hält das Band.",
        "Dreh den Unterarm nach oben, bis er senkrecht steht, der Oberarm bleibt auf Schulterhöhe.",
        "Halte oben kurz, das Schulterblatt bleibt hinten unten.",
        "Senke den Unterarm langsam zurück nach vorn.",
        "Wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Hochdrehen ausatmen, beim Zurückgehen einatmen.",
      fehler: [
        "Ellbogen sinkt ab: Oberarm bleibt auf Schulterhöhe.",
        "Hohlkreuz statt Schulterdrehung: Rippen unten, Bauch fest.",
        "Schulter zieht hoch: Schulterblatt tief halten.",
        "Zu starkes Band: Volle Bewegung muss möglich sein."
      ],
      vorteile: [
        "Kräftigt die Rotatorenmanschette in einer golftypischen Armposition.",
        "Verbessert die Stabilität der Schulter oben im Rückschwung.",
        "Kann zur Vorbeugung von Schulterbeschwerden beitragen.",
        "Mit Band überall machbar."
      ],
      tipps: [
        "12 bis 15 kontrollierte Wiederholungen je Seite.",
        "Leichtes Band wählen, die Rotatorenmanschette braucht keine schweren Lasten.",
        "Langsames Zurückgehen über 2 bis 3 Sekunden."
      ],
      varianten: "Leichter: Oberarm am Körper (seitliche Außenrotation). Schwerer: stärkeres Band oder Halt oben.",
      sicherheit: "Bei Schulterbeschwerden oder Instabilität nur nach Abklärung und schmerzfrei.",
      golf: "Oben im Rückschwung ist der hintere Arm in Außenrotation mit gebeugtem Ellbogen. Eine kräftige Rotatorenmanschette stabilisiert die Schulter in dieser Position und hilft, die Schulter für die vielen Schwünge belastbar zu halten."
    }
  },
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
  {
    id: "golf_querdehnung_vorderer_arm",
    name: "Querdehnung der Schulter für den vorderen Arm",
    auch: ["Cross-Body Shoulder Stretch", "Lead Arm Cross Body Stretch", "Posterior Shoulder Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["schulter_hinten", "oberer_ruecken"],
    sekundaer: ["rotatorenmanschette"],
    geraete: [[], ["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Arm quer vor die Brust ziehen, Schulter bleibt tief.",
    info: {
      kurz: "Der gestreckte Arm wird quer vor der Brust zur anderen Seite gezogen. Dehnt die hintere Schulter, die am vorderen Arm oben im Rückschwung gefordert wird.",
      ausfuehrung: [
        "Stell dich aufrecht hin und streck den vorderen Arm (bei Rechtshändern links) nach vorn.",
        "Führe den Arm auf Schulterhöhe quer vor die Brust.",
        "Greif mit der anderen Hand oberhalb des Ellbogens und zieh den Arm sanft näher an die Brust.",
        "Halte die Schulter des gedehnten Arms tief und den Oberkörper gerade.",
        "Spür die Dehnung an der Rückseite der Schulter.",
        "Halte die Zeit und wechsle dann die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen sanft nachziehen.",
      fehler: [
        "Schulter zieht hoch: Schulter bewusst tief.",
        "Oberkörper dreht mit: Brust bleibt nach vorn.",
        "Zug am Unterarm statt Oberarm: Oberhalb des Ellbogens greifen.",
        "Zu starker Zug: Angenehme Dehnung."
      ],
      vorteile: [
        "Dehnt die hintere Schulter und den Bereich zwischen den Schulterblättern.",
        "Verbessert die Beweglichkeit für die Querbewegung des Arms.",
        "Überall machbar.",
        "Gut nach dem Golfen."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 20 bis 30 Sekunden je Seite.",
        "An der Wand mit dem Schulterblatt angelehnt wird die Dehnung gezielter.",
        "Auch für den hinteren Arm als Ausgleich nutzen."
      ],
      varianten: "Leichter: Arm etwas tiefer. Schwerer: Schulterblatt an der Wand fixieren oder in Seitlage dehnen.",
      sicherheit: "Bei Schulterbeschwerden vorne in der Schulter nur sanft.",
      golf: "Oben im Rückschwung liegt der vordere Arm quer vor der Brust. Eine bewegliche hintere Schulter erleichtert diese Position, ohne dass der Arm einknickt oder der Oberkörper ausweichen muss."
    }
  },
  {
    id: "golf_aussenrotation_dehnung_schlaeger",
    name: "Assistierte Außenrotation mit Schläger",
    auch: ["Club-Assisted External Rotation Stretch", "Dowel ER Stretch", "90/90 External Rotation Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["brust", "rotatorenmanschette"],
    sekundaer: ["schulter_vorn"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Ellbogen bleibt auf Schulterhöhe, die andere Hand drückt sanft mit dem Schläger.",
    info: {
      kurz: "Mit dem Oberarm auf Schulterhöhe drückt die andere Hand über einen Schläger den Unterarm sanft nach hinten. Verbessert die Außenrotation der Schulter, die der hintere Arm oben im Schwung braucht.",
      ausfuehrung: [
        "Stell dich hin oder leg dich auf den Rücken. Heb den Oberarm des hinteren Arms seitlich auf Schulterhöhe, Ellbogen 90 Grad gebeugt.",
        "Halte einen Schläger senkrecht in dieser Hand, der Griff zeigt nach unten.",
        "Greif mit der anderen Hand den Schaft vor dem Körper.",
        "Drück den Schaft mit der anderen Hand sanft nach vorn, sodass sich der Unterarm des gedehnten Arms nach hinten dreht.",
        "Halte an einer angenehmen Dehnung vorn in der Schulter und der Brust.",
        "Löse nach der Haltezeit und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen sanft etwas weiter.",
      fehler: [
        "Ellbogen sinkt ab: Oberarm auf Schulterhöhe halten.",
        "Hohlkreuz: Rippen unten, im Liegen den Rücken am Boden halten.",
        "Zu starker Druck: Nur eine sanfte Dehnung.",
        "Schmerz vorn in der Schulter: Weniger weit drehen."
      ],
      vorteile: [
        "Verbessert die Außenrotation der Schulter.",
        "Dehnt die Brustmuskulatur mit.",
        "Fein dosierbar über den Schläger.",
        "Einfach zu Hause umsetzbar."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 20 bis 30 Sekunden.",
        "Im Liegen ist die Position stabiler.",
        "Danach die Außenrotation 90/90 mit Band zur Kräftigung anschließen."
      ],
      varianten: "Leichter: Oberarm tiefer als Schulterhöhe. Schwerer: längere Haltezeit.",
      sicherheit: "Bei Schulterinstabilität oder früheren Ausrenkungen nur nach Abklärung.",
      golf: "Fehlt dem hinteren Arm die Außenrotation, kann er oben im Rückschwung nicht in eine gute Position kommen, und der Körper gleicht aus. Mehr Beweglichkeit erleichtert eine stabile Position am Ende des Rückschwungs."
    }
  },
  {
    id: "golf_innenrotation_dehnung_schlaeger",
    name: "Schulter-Innenrotation mit Schläger hinter dem Rücken",
    auch: ["Club Behind Back Internal Rotation Stretch", "Towel Stretch Internal Rotation", "Behind the Back Shoulder Stretch"],
    muster: "mobilitaet_schulter",
    art: "mobilitaet",
    muskeln: ["rotatorenmanschette", "schulter_hinten"],
    sekundaer: ["trizeps"],
    geraete: [["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Obere Hand zieht den Schläger sanft hoch, die untere Hand gleitet am Rücken nach oben.",
    info: {
      kurz: "Ein Schläger wird senkrecht hinter dem Rücken gehalten, eine Hand oben, eine unten. Die obere Hand zieht die untere sanft nach oben und dehnt so die Innenrotation der unteren Schulter.",
      ausfuehrung: [
        "Halte einen Schläger senkrecht hinter dem Rücken: eine Hand hinter dem Kopf oben am Schaft, die andere unten am Rücken.",
        "Die untere Hand liegt mit dem Handrücken am Rücken.",
        "Zieh mit der oberen Hand den Schläger sanft nach oben, sodass die untere Hand am Rücken nach oben gleitet.",
        "Halte an einer angenehmen Dehnung an der Vorder- und Außenseite der unteren Schulter.",
        "Halte die Zeit und lass dann langsam nach.",
        "Wechsle die Hände und dehne die andere Seite."
      ],
      atmung: "Ruhig weiteratmen und mit dem Ausatmen nachgeben.",
      fehler: [
        "Oberkörper neigt sich nach vorn: Aufrecht bleiben.",
        "Schulter zieht nach vorn: Schulter offen halten.",
        "Zu starker Zug: Sanft dehnen.",
        "Hohlkreuz: Bauch leicht anspannen."
      ],
      vorteile: [
        "Verbessert die Innenrotation der Schulter.",
        "Dehnt gleichzeitig den Trizeps der oberen Seite.",
        "Mit einem Schläger überall machbar.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "2 bis 3 Durchgänge von 20 bis 30 Sekunden je Seite.",
        "Ein Handtuch geht ebenso.",
        "Gut nach dem Schulterkrafttraining."
      ],
      varianten: "Leichter: weniger Zug. Schwerer: längere Haltezeit oder dynamisch auf und ab.",
      sicherheit: "Bei Schulterbeschwerden vorsichtig und nur schmerzfrei.",
      golf: "Im Durchschwung und Finish braucht vor allem die Schulter des vorderen Arms Innenrotation. Ist diese eingeschränkt, kann der Arm im Durchschwung nicht frei weiterlaufen. Die Dehnung hilft, die Beweglichkeit zu erhalten."
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
  {
    id: "golf_hueftbeuger_dehnung_rotation",
    name: "Kniende Hüftbeugerdehnung mit Rotation und Schläger",
    auch: ["Half-Kneeling Hip Flexor Stretch with Rotation", "Kneeling Hip Flexor Stretch Golf", "Hip Flexor Stretch with Club"],
    muster: "mobilitaet_huefte",
    art: "mobilitaet",
    muskeln: ["hueftbeuger", "quadrizeps"],
    sekundaer: ["schraege_bauch", "oberer_ruecken"],
    geraete: [["golfschlaeger", "matte"], ["stab", "matte"], ["golfschlaeger"], ["stab"]],
    belastung: "zeit",
    hoehe_cm: 240,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 2,
    einseitig: true,
    hinweis: "Gesäß des knienden Beins anspannen, dann zur Seite des vorderen Beins drehen.",
    info: {
      kurz: "Im Halbkniestand dehnst du den Hüftbeuger des knienden Beins und drehst den Oberkörper mit einem Schläger über Kopf zur Seite des vorderen Beins. Verbindet Hüftstreckung und Rumpfrotation, die im Finish gebraucht werden.",
      ausfuehrung: [
        "Knie dich auf eine Matte, ein Fuß steht vorn, das andere Knie liegt hinten am Boden.",
        "Spann das Gesäß des knienden Beins an und schieb die Hüfte leicht nach vorn, bis du eine Dehnung vorn an der Hüfte spürst.",
        "Halte einen Schläger mit gestreckten Armen über dem Kopf.",
        "Neige dich leicht zur Seite des vorderen Beins und dreh den Oberkörper zu dieser Seite.",
        "Halte die Position und atme ruhig in die Dehnung.",
        "Löse nach der Haltezeit und wechsle die Seite."
      ],
      atmung: "Ruhig weiteratmen, mit dem Ausatmen die Hüfte etwas weiter nach vorn.",
      fehler: [
        "Hohlkreuz statt Hüftdehnung: Gesäß anspannen, Rippen unten.",
        "Vorderes Knie weit über die Zehen: Fuß etwas weiter nach vorn setzen.",
        "Schläger fällt nach vorn: Arme lang über Kopf.",
        "Drehung zur falschen Seite: Zur Seite des vorderen Beins drehen."
      ],
      vorteile: [
        "Dehnt Hüftbeuger und vorderen Oberschenkel.",
        "Mobilisiert gleichzeitig die Brustwirbelsäule.",
        "Entlastet nach langem Sitzen.",
        "Bereitet auf die Streckung im Finish vor."
      ],
      tipps: [
        "2 Durchgänge von 30 Sekunden je Seite.",
        "Ein Kissen unter dem Knie macht die Übung angenehmer.",
        "Nach dem Sitzen im Auto oder Büro vor der Runde sinnvoll."
      ],
      varianten: "Leichter: ohne Schläger, Hände an der Hüfte. Schwerer: hinteren Fuß an einer Wand oder Bank hochstellen.",
      sicherheit: "Bei Kniebeschwerden gut polstern. Raumhöhe für den Schläger über Kopf beachten.",
      golf: "Verkürzte Hüftbeuger der hinteren Seite können im Durchschwung die Hüftstreckung und Drehung bremsen, oft mit Ausweichen ins Hohlkreuz. Die Dehnung mit Rotation öffnet genau diese Bewegung für ein aufrechtes Finish."
    }
  },
]
