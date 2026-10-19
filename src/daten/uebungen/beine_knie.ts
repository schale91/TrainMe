import type { Uebung } from "../../logik/typen"

// Kniedominantes und einbeiniges Beintraining: Kniebeugen, Beinpresse, Beinstrecker,
// Split-Kniebeugen, Ausfallschritte, Step-ups und einbeinige Kniebeugen.
export const BEINE_KNIE: Uebung[] = [
  // ---------- Kniebeuge mit Langhantel ----------
  {
    id: "kniebeuge_lh",
    name: "Kniebeuge mit Langhantel (High Bar)",
    auch: ["Back Squat", "High-Bar Squat", "Barbell Squat", "Nackenkniebeuge"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "ruecken_unten", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1, huefte: 1 },
    stufe: 3,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    hinweis: "Ganzer Fuß bleibt am Boden, Knie folgen den Zehen.",
    info: {
      kurz: "Die klassische Kniebeuge mit der Stange oben auf dem Trapezmuskel. Sie trainiert Oberschenkelvorderseite und Gesäß gemeinsam mit schwerer Last und ist eine der wirksamsten Grundübungen für Beinkraft.",
      ausfuehrung: [
        "Stell die Ablagen etwa auf Brustbeinhöhe ein und tritt mittig unter die Stange, sodass sie oben auf dem Trapezmuskel unterhalb des siebten Halswirbels liegt.",
        "Greif etwas weiter als schulterbreit, zieh die Ellbogen leicht nach unten und spann den oberen Rücken fest an, damit die Stange ein stabiles Polster hat.",
        "Heb die Stange mit beiden Beinen gleichzeitig aus der Ablage, geh zwei bis drei kleine Schritte zurück und stell die Füße etwa schulterbreit, Zehen 15 bis 30 Grad nach außen.",
        "Atme tief in den Bauch ein, spann den Rumpf rundherum an und beginne die Bewegung, indem Knie und Hüfte gleichzeitig beugen.",
        "Senke dich kontrolliert in etwa zwei Sekunden ab, die Knie schieben in Richtung der Zehen nach vorn und außen, der Oberkörper bleibt relativ aufrecht.",
        "Geh so tief, wie du den Rücken neutral halten kannst, idealerweise bis die Hüftfalte mindestens auf Höhe der Knie ist.",
        "Drück dich aus der ganzen Fußsohle kraftvoll nach oben, Brust und Hüfte steigen im gleichen Tempo, bis du aufrecht stehst.",
        "Nach der letzten Wiederholung geh nach vorn, bis die Stange beide Ablagen berührt, und setz sie erst dann ab."
      ],
      atmung: "Oben tief einatmen und die Luft während des Absenkens im Bauch halten (Bauchpresse), im oberen Drittel der Aufwärtsbewegung kontrolliert ausatmen.",
      fehler: [
        "Knie fallen nach innen: Gewicht reduzieren und aktiv den Boden mit den Füßen nach außen schrauben.",
        "Fersen heben ab: Stand etwas breiter wählen, Sprunggelenk mobilisieren oder Gewichtheberschuhe nutzen.",
        "Hüfte schießt zuerst nach oben (Good-Morning-Kniebeuge): Brust aktiv mit nach oben führen und Rumpfspannung erhöhen.",
        "Unterer Rücken rundet sich am tiefsten Punkt: nur so tief gehen, wie die Wirbelsäule neutral bleibt.",
        "Lockerer oberer Rücken: Schulterblätter fest zusammen und die Stange in die Hände ziehen."
      ],
      vorteile: [
        "Stärkt Quadrizeps, Gesäß und Adduktoren mit sehr hoher Last.",
        "Verbessert Rumpfstabilität und die Kraftübertragung durch den ganzen Körper.",
        "Gut messbar und über Jahre steigerbar.",
        "Überträgt sich auf Springen, Sprinten, Heben im Alltag und viele Sportarten."
      ],
      tipps: [
        "Arbeite meist mit zwei bis drei Wiederholungen Reserve, schwere Einzelwiederholungen nur gelegentlich.",
        "Filme dich von der Seite, um Tiefe und Rückenposition zu prüfen.",
        "Stell die Sicherheitsablagen knapp unter deine tiefste Position, dann kannst du die Stange jederzeit ablegen.",
        "Ein kurzes Aufwärmen mit leerer Stange und zwei bis drei Steigerungssätzen bereitet Knie und Hüfte gut vor."
      ],
      varianten: "Leichter: Goblet-Kniebeuge oder Box-Kniebeuge. Schwerer: Pausenkniebeuge, Tempo-Kniebeuge oder höhere Last.",
      sicherheit: "Bei Knie- oder Rückenbeschwerden mit leichten Varianten beginnen und die Tiefe schmerzfrei wählen. Pressatmung bei Bluthochdruck vermeiden und stattdessen gleichmäßig atmen.",
      golf: "Kräftige Beine bilden die Basis für einen stabilen Stand und mehr Kraftübertragung vom Boden in den Schwung."
    }
  },
  {
    id: "kniebeuge_lh_lowbar",
    name: "Low-Bar-Kniebeuge",
    auch: ["Low-Bar Squat", "Low Bar Back Squat", "Powerlifting Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["adduktoren", "beinbeuger", "ruecken_unten"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1, ruecken: 2, huefte: 1, schulter: 1, ellbogen: 1 },
    stufe: 3,
    hinweis: "Stange liegt auf dem hinteren Schultermuskel, Handgelenke gerade.",
    info: {
      kurz: "Kniebeuge mit tiefer liegender Stange auf dem hinteren Schultermuskel. Der Oberkörper neigt sich stärker nach vorn, wodurch Gesäß und Hüftstrecker mehr arbeiten und meist mehr Gewicht bewegt werden kann.",
      ausfuehrung: [
        "Leg die Stange etwa zwei bis drei Zentimeter tiefer als bei der High-Bar-Variante auf die hintere Schulter, direkt unter der Schulterblattgräte.",
        "Greif enger, zieh die Schulterblätter zusammen und halt die Handgelenke möglichst gerade, die Ellbogen zeigen nach hinten oben.",
        "Stell die Füße schulterbreit oder etwas breiter, Zehen leicht nach außen.",
        "Atme tief ein, spann den Bauch an und schieb die Hüfte gleichzeitig nach hinten, während die Knie nach außen drücken.",
        "Der Oberkörper neigt sich deutlich nach vorn, die Stange bleibt über der Fußmitte.",
        "Geh bis knapp unter die Parallele, die Schienbeine bleiben steiler als bei der High-Bar-Kniebeuge.",
        "Drück die Hüfte nach oben und vorn und führe dabei die Brust aktiv mit, bis du aufrecht stehst."
      ],
      atmung: "Vor jeder Wiederholung tief einatmen und den Bauch fest machen, im oberen Teil der Bewegung ausatmen.",
      fehler: [
        "Stange rutscht nach unten: Schulterblätter fester zusammenziehen und die Stange in den Rücken ziehen.",
        "Handgelenke knicken nach hinten ab: Daumen über die Stange legen und die Ellbogen höher führen.",
        "Brust kippt beim Hochkommen weiter nach vorn: Rücken bewusst gegen die Stange drücken.",
        "Zu wenig Tiefe durch das starke Vorlehnen: Hüfte nach hinten und dann nach unten führen."
      ],
      vorteile: [
        "Ermöglicht durch die günstigere Hebelwirkung meist die höchste Last aller Kniebeugen.",
        "Mehr Arbeit für Gesäß, Adduktoren und hintere Kette.",
        "Etwas weniger Kniebeugung, oft angenehmer bei empfindlichen Knien.",
        "Standard im Kraftdreikampf."
      ],
      tipps: [
        "Wärm die Schultern vorher auf, die Griffposition braucht Außenrotation.",
        "Kombiniere sie mit Frontkniebeugen oder Beinpresse, wenn dir die Oberschenkel zu wenig arbeiten.",
        "Ein Gürtel kann bei schweren Sätzen helfen, den Rumpf zu stabilisieren."
      ],
      varianten: "Leichter: High-Bar-Kniebeuge oder Box-Kniebeuge. Schwerer: Pausen in der tiefsten Position.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden kann die Griffposition stören, dann High-Bar wählen. Bei Rückenbeschwerden vorsichtig, da der Rücken stärker belastet wird."
    }
  },
  {
    id: "frontkniebeuge_lh",
    name: "Frontkniebeuge mit Langhantel",
    auch: ["Front Squat", "Barbell Front Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess", "oberer_ruecken", "bauch", "adduktoren"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, handgelenk: 1, ruecken: 1 },
    stufe: 3,
    sport: ["golf", "fussball"],
    golf: 1,
    hinweis: "Ellbogen hoch, Oberkörper aufrecht.",
    info: {
      kurz: "Kniebeuge mit der Stange vorn auf den Schultern. Durch den sehr aufrechten Oberkörper arbeitet vor allem die Oberschenkelvorderseite, der untere Rücken wird weniger belastet als bei der Nackenkniebeuge.",
      ausfuehrung: [
        "Stell die Ablagen auf Höhe des oberen Brustbeins und tritt so nah heran, dass die Stange in der Mulde zwischen Schultermuskeln und Hals liegt.",
        "Greif schulterbreit, lass die Finger unter der Stange (zwei bis drei Finger reichen) und heb die Ellbogen nach vorn oben, bis die Oberarme fast waagerecht sind.",
        "Heb die Stange aus, geh zwei Schritte zurück und stell die Füße schulterbreit, Zehen leicht nach außen.",
        "Atme ein, spann den Bauch an und senke dich gerade nach unten ab, die Knie schieben weit nach vorn.",
        "Halt die Ellbogen die ganze Zeit oben, damit die Stange nicht nach vorn rollt.",
        "Geh so tief wie möglich bei aufrechtem Oberkörper, meist deutlich unter die Parallele.",
        "Drück dich gleichmäßig hoch und führe die Ellbogen dabei aktiv nach oben."
      ],
      atmung: "Oben einatmen und halten, während des Absenkens Spannung behalten, im oberen Drittel ausatmen.",
      fehler: [
        "Ellbogen sinken ab und die Stange rollt nach vorn: Ellbogen bewusst nach oben führen, Gewicht reduzieren.",
        "Handgelenke schmerzen: Griff lockern, nur zwei Finger unter die Stange oder Kreuzgriff nutzen.",
        "Oberer Rücken rundet sich: Brust stolz machen und Brustwirbelsäule mobilisieren.",
        "Fersen heben ab: kleine Erhöhung unter die Fersen oder Gewichtheberschuhe."
      ],
      vorteile: [
        "Starke Belastung für den Quadrizeps bei aufrechtem Oberkörper.",
        "Weniger Druck auf den unteren Rücken als bei der Nackenkniebeuge.",
        "Trainiert den oberen Rücken und den Rumpf sehr intensiv.",
        "Gute Übertragung auf das olympische Gewichtheben und Sprungkraft."
      ],
      tipps: [
        "Falls der Front-Rack-Griff nicht klappt, ist der Kreuzgriff (Arme vor der Brust gekreuzt) eine gute Alternative.",
        "Dehne Trizeps, Latissimus und Handgelenke vor dem Training.",
        "Wähle eher mittlere Wiederholungszahlen (3 bis 8), weil der obere Rücken früher ermüdet als die Beine."
      ],
      varianten: "Leichter: Goblet-Kniebeuge oder Frontkniebeuge mit Kurzhanteln. Schwerer: Pause in der tiefsten Position.",
      sicherheit: "Bei Handgelenks- oder Schulterbeschwerden den Kreuzgriff oder Zughilfen am Griff nutzen. Bei Kniebeschwerden die Tiefe schmerzfrei wählen."
    }
  },
  {
    id: "pausenkniebeuge_lh",
    name: "Pausenkniebeuge mit Langhantel",
    auch: ["Pause Squat", "Paused Back Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "ruecken_unten", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1, huefte: 1 },
    stufe: 3,
    hinweis: "Zwei Sekunden unten halten, Spannung nicht lösen.",
    info: {
      kurz: "Nackenkniebeuge mit einer bewussten Pause von ein bis drei Sekunden in der tiefsten Position. Sie nimmt den Dehnungsreflex weg und verbessert Kraft aus der Tiefe, Technik und Körperspannung.",
      ausfuehrung: [
        "Bau dich wie bei der normalen Kniebeuge unter der Stange auf und geh mit stabilem Stand zurück.",
        "Atme tief ein, spann den Rumpf an und senke dich langsam und kontrolliert in die gewohnte Tiefe ab.",
        "Halt in der tiefsten Position still, ohne nach unten zu sacken oder dich zu entspannen. Zähle ruhig ein bis drei Sekunden.",
        "Achte in der Pause darauf, dass die Knie über den Zehen bleiben, der Rücken neutral ist und das Gewicht über der Fußmitte liegt.",
        "Drück dich nach der Pause explosiv, aber kontrolliert nach oben.",
        "Atme oben aus, hol neu Luft und beginne die nächste Wiederholung."
      ],
      atmung: "Vor dem Absenken einatmen und die Luft über die Pause hinweg halten, auf dem Weg nach oben ausatmen. Bei langen Pausen lieber leichter wählen als zu lange pressen.",
      fehler: [
        "In der Pause entspannen und zusammensacken: Spannung im Rumpf und in den Beinen aktiv halten.",
        "Pause nur angedeutet: wirklich still stehen, sonst fehlt der Effekt.",
        "Zu viel Gewicht: etwa 10 bis 20 Prozent weniger als bei der normalen Kniebeuge wählen.",
        "Hüfte schießt nach der Pause zuerst hoch: Brust und Hüfte gemeinsam heben."
      ],
      vorteile: [
        "Mehr Kraft aus der tiefsten Position, wo viele Kniebeugen scheitern.",
        "Verbessert Technik und Körpergefühl, weil Fehler in der Pause spürbar werden.",
        "Weniger Schwung, dadurch mehr Muskelarbeit bei geringerer Last.",
        "Gute Übung zur Kontrolle für Einsteiger mit leichtem Gewicht."
      ],
      tipps: [
        "Nutze sie als zweite Kniebeugeübung oder in Phasen, in denen du an der Technik arbeitest.",
        "Drei bis sechs Wiederholungen pro Satz reichen, die Pause macht jede Wiederholung deutlich härter.",
        "Lass dich zählen oder zähle laut im Kopf, damit die Pausen gleich lang bleiben."
      ],
      varianten: "Leichter: Goblet-Kniebeuge mit Pause. Schwerer: längere Pause oder Pause auf halber Höhe zusätzlich.",
      sicherheit: "Bei Knie- oder Rückenbeschwerden kürzere Pausen und weniger Tiefe wählen. Bei Bluthochdruck nicht lange pressen."
    }
  },
  {
    id: "pin_squat",
    name: "Pin Squat (Kniebeuge aus den Ablagen)",
    auch: ["Pin Squat", "Anderson Squat", "Dead Stop Squat", "Kniebeuge aus der Hocke"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "ruecken_unten", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1, huefte: 1 },
    stufe: 3,
    hinweis: "Stange kurz auf den Ablagen ablegen, dann aus dem Stand heraus hochdrücken.",
    info: {
      kurz: "Kniebeuge, bei der die Stange am tiefsten Punkt auf den Sicherheitsablagen kurz zum Stillstand kommt. Ohne Schwung aus der Abwärtsbewegung musst du die Kraft aus dem Stand entwickeln.",
      ausfuehrung: [
        "Stell die Sicherheitsablagen im Rack so ein, dass die Stange knapp über oder auf Höhe deiner Wunschtiefe aufliegt.",
        "Leg die Stange wie bei der Nackenkniebeuge auf den oberen Rücken und stell dich mittig im Rack auf.",
        "Atme ein, spann den Rumpf an und senke dich kontrolliert ab, bis die Stange leise auf den Ablagen aufsetzt.",
        "Lass das Gewicht für etwa eine Sekunde auf den Ablagen ruhen, ohne die Körperspannung ganz zu verlieren.",
        "Spann neu an, drück dich mit dem ganzen Fuß in den Boden und hebe die Stange aus dem Stillstand nach oben.",
        "Steh ganz auf und beginne die nächste Wiederholung erneut von oben."
      ],
      atmung: "Oben einatmen, beim Absenken halten, auf den Ablagen kurz neu Spannung aufbauen und beim Hochdrücken ausatmen.",
      fehler: [
        "Stange knallt auf die Ablagen: kontrolliert absenken, sie soll nur aufsetzen.",
        "Komplett entspannen auf den Ablagen: Rücken bleibt fest, nur das Gewicht ruht kurz.",
        "Ablagen zu tief eingestellt: der Rücken muss in dieser Position neutral bleiben.",
        "Starten mit hochschießender Hüfte: Brust und Hüfte gleichzeitig heben."
      ],
      vorteile: [
        "Baut Startkraft aus der tiefsten Position auf.",
        "Kein Dehnungsreflex, dadurch ehrliche Muskelarbeit.",
        "Tiefe ist über die Ablagen genau steuerbar und sicher.",
        "Hilft, Schwachstellen in einer bestimmten Höhe gezielt zu trainieren."
      ],
      tipps: [
        "Wähle etwa 70 bis 85 Prozent deines normalen Kniebeugegewichts.",
        "Eine Höhe knapp unter der Parallele ist für die meisten der beste Startpunkt.",
        "Gute Ergänzung, wenn du unten gern zusammensackst oder aus der Tiefe nicht hochkommst."
      ],
      varianten: "Leichter: höhere Ablagen oder Goblet-Kniebeuge auf eine Box. Schwerer: tiefere Ablagen oder Start komplett aus der unteren Position (Anderson Squat).",
      sicherheit: "Bei Rückenbeschwerden die Ablagen höher stellen. Nur in einem stabilen Rack mit korrekt eingestellten Ablagen ausführen."
    }
  },
  {
    id: "box_squat_lh",
    name: "Box-Kniebeuge mit Langhantel",
    auch: ["Box Squat", "Barbell Box Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["beinbeuger", "adduktoren", "ruecken_unten"],
    geraete: [["langhantel", "box"], ["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1, ruecken: 1, huefte: 1 },
    stufe: 2,
    hinweis: "Kurz auf die Box setzen, nicht fallen lassen.",
    info: {
      kurz: "Nackenkniebeuge, bei der du dich hinten kurz auf eine Box oder Bank setzt. Die Box gibt eine feste Tiefe vor und schult das Zurückschieben der Hüfte, die Knie werden dabei meist weniger belastet.",
      ausfuehrung: [
        "Stell eine stabile Box oder Bank so hinter dich, dass deine Oberschenkel beim Sitzen etwa waagerecht sind.",
        "Leg die Stange auf den oberen Rücken und stell dich mit etwas breiterem Stand als gewohnt vor die Box.",
        "Atme ein, spann den Rumpf an und schieb die Hüfte nach hinten, die Schienbeine bleiben eher senkrecht.",
        "Setz dich kontrolliert auf die Box, ohne dich fallen zu lassen. Die Spannung bleibt im Rumpf und in den Beinen.",
        "Bleib eine kurze Sekunde sitzen, der Oberkörper bleibt leicht nach vorn geneigt und stabil.",
        "Drück die Füße nach außen in den Boden und steh kraftvoll auf, die Hüfte schiebt nach vorn."
      ],
      atmung: "Vor dem Absenken einatmen und halten, auf der Box die Spannung bewahren, beim Aufstehen ausatmen.",
      fehler: [
        "Auf die Box plumpsen lassen: die Wirbelsäule wird gestaucht, kontrolliert hinsetzen.",
        "Auf der Box entspannen und nach hinten schaukeln: Rumpf bleibt fest, nur kurz sitzen.",
        "Box zu niedrig: der Rücken rundet sich, lieber höher anfangen.",
        "Knie fallen beim Aufstehen nach innen: Knie aktiv nach außen drücken."
      ],
      vorteile: [
        "Feste, reproduzierbare Tiefe, ideal zum Lernen.",
        "Weniger Kniebelastung durch steilere Schienbeine.",
        "Trainiert Gesäß und hintere Kette stärker.",
        "Verbessert die Startkraft aus einer ruhenden Position."
      ],
      tipps: [
        "Beginne mit einer Box knapp über der Parallele und senke die Höhe schrittweise.",
        "Denk an das Hinsetzen auf einen Stuhl hinter dir, aber mit voller Körperspannung.",
        "Gut geeignet für Phasen, in denen die Knie gereizt sind."
      ],
      varianten: "Leichter: Kniebeuge auf die Bank ohne Gewicht oder Goblet-Box-Kniebeuge. Schwerer: niedrigere Box oder mehr Gewicht.",
      sicherheit: "Bei Bandscheibenbeschwerden das Hinsetzen besonders weich ausführen oder auf die Pin-Variante ausweichen."
    }
  },
  {
    id: "tempo_kniebeuge_lh",
    name: "Tempo-Kniebeuge mit Langhantel",
    auch: ["Tempo Squat", "Eccentric Squat", "3-1-0 Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "bauch", "ruecken_unten"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1, huefte: 1 },
    stufe: 2,
    hinweis: "Drei bis fünf Sekunden absenken, gleichmäßig zählen.",
    info: {
      kurz: "Nackenkniebeuge mit bewusst langsamer Abwärtsphase von drei bis fünf Sekunden. Sie erhöht die Spannungszeit, verbessert die Technik und macht leichtere Gewichte sehr fordernd.",
      ausfuehrung: [
        "Bau dich wie bei der normalen Kniebeuge unter der Stange auf und geh mit stabilem Stand zurück.",
        "Atme tief ein und spann den Rumpf an, bevor du die Bewegung beginnst.",
        "Senke dich gleichmäßig in drei bis fünf Sekunden ab, als würdest du dich in Zeitlupe bewegen.",
        "Behalte dabei die Knie über den Zehen und das Gewicht über der Fußmitte.",
        "Halte unten eine Sekunde, ohne zu wippen.",
        "Drück dich zügig und gleichmäßig nach oben, bis du aufrecht stehst."
      ],
      atmung: "Oben einatmen und während des langsamen Absenkens die Spannung halten, auf dem Weg nach oben ausatmen. Bei sehr langen Abwärtsphasen kurz oben zwischenatmen.",
      fehler: [
        "Oben langsam, unten schnell: das Tempo muss bis ganz unten gleich bleiben.",
        "Zu schweres Gewicht: etwa 60 bis 75 Prozent der normalen Kniebeuge reichen.",
        "Spannung lässt nach: lieber weniger Wiederholungen mit voller Kontrolle.",
        "Tiefe wird kürzer: mit Box oder Markierung eine feste Tiefe vorgeben."
      ],
      vorteile: [
        "Viel Muskelarbeit mit vergleichsweise geringer Last, gelenkschonender.",
        "Schult Technik und Körpergefühl in jeder Phase der Bewegung.",
        "Stärkt die Kontrolle beim Abbremsen, wichtig für Landungen und Richtungswechsel.",
        "Hilfreich nach Pausen, um sich wieder an schwerere Lasten heranzuarbeiten."
      ],
      tipps: [
        "Zähle laut im Kopf: einundzwanzig, zweiundzwanzig, dreiundzwanzig.",
        "Ideal im Muskelaufbau mit 6 bis 10 Wiederholungen.",
        "Auch mit Goblet-Kniebeuge oder an der Multipresse gut umsetzbar."
      ],
      varianten: "Leichter: Tempo-Goblet-Kniebeuge. Schwerer: längere Abwärtsphase oder Pause unten.",
      sicherheit: "Bei Bluthochdruck die Luft nicht lange anhalten. Bei Kniebeschwerden die Tiefe anpassen."
    }
  },
  {
    id: "eineinhalb_kniebeuge",
    name: "Eineinhalb-Kniebeuge",
    auch: ["1.5 Rep Squat", "One and a Half Squat", "1 1/4 Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "bauch"],
    geraete: [["langhantel"], ["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, huefte: 1 },
    stufe: 2,
    hinweis: "Ganz runter, halb hoch, wieder ganz runter, dann ganz hoch: das ist eine Wiederholung.",
    info: {
      kurz: "Kniebeuge, bei der du aus der tiefsten Position nur bis zur Hälfte hochkommst, wieder ganz absinkst und erst dann aufstehst. Sie verdoppelt die Zeit im schwersten, gedehnten Bereich.",
      ausfuehrung: [
        "Nimm die Last als Nackenkniebeuge, Frontkniebeuge oder als Goblet vor der Brust und stell dich schulterbreit hin.",
        "Atme ein, spann den Rumpf an und senke dich kontrolliert in die volle Tiefe ab.",
        "Drück dich aus der Tiefe nur bis etwa zur Hälfte hoch, bis die Oberschenkel etwa 45 Grad zum Boden stehen.",
        "Senke dich wieder kontrolliert in die volle Tiefe ab.",
        "Steh nun vollständig auf. Das zählt als eine Wiederholung.",
        "Halte während der ganzen Bewegung Knie über den Zehen und den Rücken neutral."
      ],
      atmung: "Oben einatmen, die Luft während der halben Wiederholung halten und beim kompletten Aufstehen ausatmen.",
      fehler: [
        "Halbe Wiederholung zu hoch: nur bis zur Mitte, sonst geht der Effekt verloren.",
        "Tiefe nimmt bei der zweiten Abwärtsbewegung ab: beide Male gleich tief gehen.",
        "Zu viel Gewicht: etwa 20 bis 30 Prozent weniger als bei der normalen Kniebeuge.",
        "Wippen statt Kontrolle: jede Richtungsänderung bewusst steuern."
      ],
      vorteile: [
        "Mehr Spannungszeit im unteren, gedehnten Bereich, sehr effektiv für den Quadrizeps.",
        "Schult Tiefe und Kontrolle.",
        "Mit wenig Gewicht sehr fordernd, gut für zu Hause mit begrenzter Ausrüstung.",
        "Verbessert die Kraft aus der Tiefe."
      ],
      tipps: [
        "Mit Kurzhantel oder Kettlebell als Goblet ist die Übung am leichtesten zu lernen.",
        "Sechs bis zehn Wiederholungen reichen, die Belastung ist hoch.",
        "Passt gut als zweite Beinübung nach einer schweren Grundübung."
      ],
      varianten: "Leichter: als Goblet-Kniebeuge oder ohne Gewicht. Schwerer: mit Langhantel oder Fersen erhöht.",
      sicherheit: "Bei Knieproblemen in der tiefen Position nur bis zur schmerzfreien Tiefe arbeiten oder eine andere Variante wählen."
    }
  },
  {
    id: "fersen_kniebeuge_lh",
    name: "Fersenerhöhte Kniebeuge mit Langhantel",
    auch: ["Heel-Elevated Squat", "Heels Elevated Back Squat", "Fersenerhöhte Kniebeuge"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess", "adduktoren", "bauch"],
    geraete: [["langhantel", "hantelscheibe"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1 },
    stufe: 2,
    hinweis: "Fersen auf Scheiben oder Keil, Knie dürfen weit nach vorn.",
    info: {
      kurz: "Nackenkniebeuge mit den Fersen auf einer Erhöhung von zwei bis fünf Zentimetern. Die Knie wandern weiter nach vorn, der Oberkörper bleibt aufrechter und der Quadrizeps wird stärker gefordert.",
      ausfuehrung: [
        "Leg zwei kleine Hantelscheiben oder einen Keil so auf den Boden, dass deine Fersen darauf stehen und die Fußballen am Boden bleiben.",
        "Nimm die Stange wie bei der High-Bar-Kniebeuge auf den oberen Rücken und stell dich hüftbreit bis schulterbreit auf die Erhöhung.",
        "Atme ein, spann den Bauch an und senke dich gerade nach unten ab.",
        "Lass die Knie bewusst weit über die Zehen nach vorn wandern, der Oberkörper bleibt aufrecht.",
        "Geh so tief, bis die Oberschenkel die Waden fast berühren oder du die Rückenposition nicht mehr halten kannst.",
        "Drück dich gleichmäßig aus dem ganzen Fuß wieder nach oben, ohne die Knie ganz durchzudrücken."
      ],
      atmung: "Oben einatmen, beim Absenken halten, auf dem Weg nach oben ausatmen.",
      fehler: [
        "Erhöhung zu hoch: zwei bis fünf Zentimeter reichen, sonst wird der Stand wackelig.",
        "Knie fallen nach innen: Knie zeigen in Richtung der Zehen.",
        "Gewicht auf den Zehen: Druck über die ganze Fußsohle verteilen, die Ferse bleibt belastet.",
        "Zu schnelles Absenken: die tiefe Position kontrolliert erreichen."
      ],
      vorteile: [
        "Mehr Arbeit für den Quadrizeps, besonders im tiefen Bereich.",
        "Mehr Tiefe auch bei eingeschränkter Sprunggelenksbeweglichkeit.",
        "Aufrechterer Oberkörper, weniger Belastung für den unteren Rücken.",
        "Guter Ersatz für die Hackenschmidt-Maschine, wenn sie fehlt."
      ],
      tipps: [
        "Ein Squat-Keil oder Gewichtheberschuhe sind stabiler als Scheiben.",
        "Wähle 70 bis 85 Prozent deiner normalen Kniebeugelast und mehr Wiederholungen.",
        "Gut als Hauptübung in einem Block mit Fokus auf die Oberschenkel."
      ],
      varianten: "Leichter: Fersenerhöhte Kniebeuge mit Kurzhanteln oder ohne Gewicht. Schwerer: Pause unten oder langsamere Abwärtsbewegung.",
      sicherheit: "Bei Beschwerden an der Kniescheibe oder Patellasehne mit wenig Tiefe und leichtem Gewicht beginnen."
    }
  },
  {
    id: "fersen_kniebeuge_kh",
    name: "Fersenerhöhte Kniebeuge mit Kurzhanteln",
    auch: ["Heel-Elevated Dumbbell Squat", "Heels Elevated Goblet Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess", "adduktoren"],
    geraete: [["kurzhantel", "hantelscheibe"], ["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge mit erhöhten Fersen und Kurzhanteln seitlich oder einer Hantel vor der Brust. Einfach zu lernen und sehr wirksam für die Oberschenkelvorderseite, ohne den Rücken stark zu belasten.",
      ausfuehrung: [
        "Leg zwei Hantelscheiben, einen Keil oder ein stabiles Brett auf den Boden und stell die Fersen darauf.",
        "Halte zwei Kurzhanteln seitlich neben dem Körper oder eine Hantel senkrecht vor der Brust.",
        "Stell die Füße hüftbreit, Zehen leicht nach außen, und spann den Bauch an.",
        "Senke dich gerade nach unten ab, die Knie wandern weit nach vorn, der Oberkörper bleibt aufrecht.",
        "Geh so tief wie möglich, bis die Oberschenkel die Waden fast berühren.",
        "Drück dich gleichmäßig hoch und halt oben die Spannung, ohne die Knie ganz zu blockieren."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Wackeliger Stand: breitere oder stabilere Erhöhung wählen.",
        "Knie kippen nach innen: Knie zeigen über die zweite und dritte Zehe.",
        "Oberkörper fällt nach vorn: Hantel näher an den Körper und Brust aufrecht.",
        "Zu wenig Tiefe: die Erhöhung soll gerade mehr Tiefe erlauben, nutze sie."
      ],
      vorteile: [
        "Gezielter Quadrizepsreiz mit wenig Material.",
        "Schont den unteren Rücken.",
        "Ermöglicht tiefe Kniebeugen auch mit steifen Sprunggelenken.",
        "Gut für zu Hause und für Einsteiger."
      ],
      tipps: [
        "Halte die Hanteln seitlich, wenn die Arme vor der Brust zu früh ermüden.",
        "Langsames Absenken in drei Sekunden steigert den Reiz bei leichten Hanteln.",
        "Eine Treppenstufe kann als Erhöhung dienen."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: Cyclist Squat mit engem Stand oder Eineinhalb-Wiederholungen.",
      sicherheit: "Bei Beschwerden an der Kniescheibe vorsichtig steigern und nur schmerzfrei in die Tiefe gehen."
    }
  },
  {
    id: "cyclist_squat",
    name: "Cyclist Squat",
    auch: ["Cyclist Squat", "Narrow Heel-Elevated Squat", "Radfahrer-Kniebeuge"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess"],
    geraete: [["kurzhantel", "hantelscheibe"], ["kettlebell", "hantelscheibe"], ["kurzhantel"], ["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 2,
    hinweis: "Füße eng, Fersen hoch, Knie weit nach vorn.",
    info: {
      kurz: "Kniebeuge mit sehr engem Stand und deutlich erhöhten Fersen. Die Knie wandern maximal nach vorn, wodurch der Quadrizeps, besonders der innere Anteil über dem Knie, isoliert und stark gedehnt wird.",
      ausfuehrung: [
        "Stell die Fersen auf einen hohen Keil oder zwei bis drei Hantelscheiben, die Füße stehen eng nebeneinander, fast geschlossen.",
        "Halte eine Kurzhantel oder Kettlebell vor der Brust oder stell dich in die Multipresse.",
        "Richte den Oberkörper ganz auf und spann den Bauch an.",
        "Senke dich langsam gerade nach unten ab, die Knie schieben weit nach vorn über die Zehen.",
        "Geh tief, bis die Oberschenkel auf den Waden fast aufliegen, die Hüfte bleibt unter den Schultern.",
        "Drück dich gleichmäßig hoch und stopp kurz vor dem vollen Strecken, um die Spannung zu halten."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Oberkörper kippt nach vorn: Last eng an der Brust und Blick nach vorn.",
        "Zu schnell in die Tiefe fallen: kontrolliert absenken, die Knie sind stark gebeugt.",
        "Knie zeigen nach innen: Knie zeigen gerade nach vorn.",
        "Zu schwer begonnen: der Muskel wird stark gedehnt, leicht anfangen."
      ],
      vorteile: [
        "Isoliert den Quadrizeps sehr stark, auch den inneren Anteil oberhalb der Kniescheibe.",
        "Großer Bewegungsumfang mit Dehnung unter Last.",
        "Kaum Belastung für den Rücken.",
        "Mit wenig Gewicht sehr wirksam."
      ],
      tipps: [
        "In der Multipresse kannst du dich ganz auf die Beine konzentrieren.",
        "Langsames Absenken und eine kurze Pause unten verstärken den Reiz.",
        "Gut als Abschluss nach Kniebeugen oder Beinpresse."
      ],
      varianten: "Leichter: ohne Gewicht oder mit niedrigerer Erhöhung. Schwerer: in der Multipresse mit mehr Last.",
      sicherheit: "Bei Beschwerden an Kniescheibe oder Patellasehne nur mit Vorsicht und geringer Tiefe. Bei Schmerzen abbrechen und abklären lassen."
    }
  },
  {
    id: "zercher_kniebeuge",
    name: "Zercher-Kniebeuge",
    auch: ["Zercher Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["oberer_ruecken", "bauch", "bizeps", "adduktoren"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2, ruecken: 1, ellbogen: 1 },
    stufe: 3,
    hinweis: "Stange in der Ellenbeuge, ein Handtuch oder Polster hilft.",
    info: {
      kurz: "Kniebeuge mit der Stange in den Ellenbeugen vor dem Bauch. Der vordere Lastschwerpunkt fordert Rumpf und oberen Rücken stark und hält den Oberkörper aufrecht.",
      ausfuehrung: [
        "Stell die Ablagen etwa auf Bauchnabelhöhe ein oder die Stange auf die Sicherheitsablagen auf Hüfthöhe.",
        "Leg die Stange in beide Ellenbeugen, die Hände greifen ineinander oder bilden Fäuste vor der Brust.",
        "Heb die Stange aus, stell die Füße schulterbreit oder etwas breiter und zieh die Schultern zurück.",
        "Atme ein, spann den Bauch fest an und senke dich zwischen die Beine ab, die Ellbogen zeigen nach unten.",
        "Geh tief, bis die Ellbogen fast die Oberschenkel innen berühren, der Rücken bleibt neutral.",
        "Drück dich kraftvoll hoch und halt die Stange eng am Körper."
      ],
      atmung: "Vor dem Absenken tief einatmen und halten, beim Aufstehen ausatmen.",
      fehler: [
        "Oberer Rücken rundet sich stark: Brust aufrichten und weniger Gewicht.",
        "Stange rutscht nach vorn: Arme fest an den Körper ziehen.",
        "Schmerz in den Ellenbeugen: Polster oder Handtuch um die Stange legen.",
        "Hüfte zu weit hinten: eher zwischen die Beine absenken als nach hinten setzen."
      ],
      vorteile: [
        "Starke Rumpf- und Oberrückenarbeit zusätzlich zur Beinarbeit.",
        "Aufrechter Oberkörper ohne Front-Rack-Beweglichkeit.",
        "Überträgt sich gut auf das Tragen und Heben schwerer Dinge im Alltag.",
        "Stärkt Haltung und Körperspannung."
      ],
      tipps: [
        "Beginne mit leichter Stange, um dich an den Druck in den Armen zu gewöhnen.",
        "Ein breiterer Stand macht die Tiefe leichter.",
        "Gut als Wechselübung zur Front- oder Nackenkniebeuge."
      ],
      varianten: "Leichter: Goblet-Kniebeuge. Schwerer: Pause unten oder höhere Last.",
      sicherheit: "Bei Ellbogen- oder Bizepsbeschwerden auslassen. Bei Rückenbeschwerden vorsichtig steigern."
    }
  },
  {
    id: "ueberkopf_kniebeuge",
    name: "Überkopf-Kniebeuge",
    auch: ["Overhead Squat", "OHS"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["schulter_vorn", "oberer_ruecken", "trapez", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { knie: 2, schulter: 2, ruecken: 1, handgelenk: 1 },
    stufe: 3,
    hinweis: "Arme gestreckt, Stange über der Fußmitte.",
    info: {
      kurz: "Kniebeuge mit der Stange in gestreckten Armen über dem Kopf. Sie verlangt viel Beweglichkeit in Sprunggelenk, Hüfte, Brustwirbelsäule und Schulter und fordert Stabilität im ganzen Körper.",
      ausfuehrung: [
        "Greif die Stange weit, etwa im Reißgriff, sodass sie gestreckt über dem Kopf etwa eine Handbreit über dem Scheitel liegt.",
        "Drück die Stange über den Kopf, Arme gestreckt, Schulterblätter nach oben und leicht zusammen, die Stange liegt über der Fußmitte.",
        "Stell die Füße schulterbreit, Zehen leicht nach außen, und spann den Bauch an.",
        "Senke dich kontrolliert ab, die Arme drücken aktiv gegen die Stange nach oben und außen.",
        "Halte die Stange über der Fußmitte, der Oberkörper bleibt aufrecht.",
        "Geh so tief, wie du die Position sauber halten kannst, und steh dann gleichmäßig auf."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Aufstehen ausatmen.",
      fehler: [
        "Stange wandert nach vorn: Brustwirbelsäule aufrichten und Schultern aktiv nach oben drücken.",
        "Ellbogen beugen sich: Arme fest durchgestreckt halten.",
        "Fersen heben ab: Sprunggelenk mobilisieren oder Fersen leicht erhöhen.",
        "Zu früh mit Gewicht: erst mit Stab lernen."
      ],
      vorteile: [
        "Zeigt und verbessert Beweglichkeit und Stabilität im ganzen Körper.",
        "Starke Rumpf- und Schulterstabilität.",
        "Fester Bestandteil von Bewegungstests und Gewichtheben.",
        "Schult saubere Kniebeugetechnik."
      ],
      tipps: [
        "Mit Besenstiel oder Stab ist sie eine gute Aufwärmübung und ein Beweglichkeitstest.",
        "Leichte Lasten und wenige Wiederholungen, Qualität vor Gewicht.",
        "Dehne vorher Latissimus und Brust."
      ],
      varianten: "Leichter: zum Üben mit einem Besenstiel oder Stab statt Stange, oder Fersen erhöht. Schwerer: mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Schulterbeschwerden oder eingeschränkter Überkopfbeweglichkeit auslassen. Bei Kniebeschwerden nur schmerzfrei tief gehen.",
      golf: "Die Kombination aus Hüft-, Brustwirbel- und Schulterbeweglichkeit ist auch im Golfschwung gefragt, die Übung zeigt Einschränkungen gut auf."
    }
  },
  {
    id: "kniebeuge_multipresse",
    name: "Kniebeuge an der Multipresse",
    auch: ["Smith Machine Squat", "Kniebeuge Smith Machine"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1 },
    stufe: 1,
    hinweis: "Füße etwas vor der Stange, Sicherheitshaken griffbereit.",
    info: {
      kurz: "Kniebeuge mit geführter Stange. Weil die Stange die Balance übernimmt, kannst du dich ganz auf die Beinarbeit konzentrieren und die Fußposition gezielt wählen.",
      ausfuehrung: [
        "Stell die Sicherheitsanschläge knapp unter deine tiefste Position ein.",
        "Stell dich unter die Stange, sie liegt oben auf dem Trapezmuskel. Die Füße stehen schulterbreit und etwa eine halbe Fußlänge vor der Stange.",
        "Greif die Stange, dreh sie aus den Haken und spann den Bauch an.",
        "Senke dich kontrolliert ab, die Knie folgen den Zehen, der Rücken bleibt am Polster der Stange stabil.",
        "Geh so tief, wie du den Rücken neutral halten kannst.",
        "Drück dich aus der ganzen Fußsohle nach oben und häng die Stange nach dem letzten Satz sicher ein."
      ],
      atmung: "Beim Absenken einatmen und Spannung halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Füße direkt unter der Stange: der Druck geht auf die Zehen, Füße etwas weiter nach vorn.",
        "Füße zu weit vorn: der Rücken kann ins Hohlkreuz gehen, eine Zwischenposition suchen.",
        "Knie durchdrücken oben: kurz vor dem Strecken stoppen.",
        "Haken nicht kontrolliert: vor dem ersten Satz das Einhängen ohne Gewicht üben."
      ],
      vorteile: [
        "Sicher auch ohne Trainingspartner durch Anschläge und Haken.",
        "Gezielter Fokus auf die Beine, weil Balance kaum gefordert ist.",
        "Fußposition lässt sich für mehr Quadrizeps oder Gesäß anpassen.",
        "Gut für Einsteiger und für hohe Wiederholungszahlen."
      ],
      tipps: [
        "Für mehr Quadrizeps die Füße enger und näher unter den Körper, für mehr Gesäß weiter vorn und breiter.",
        "Die Gewichte sind nicht mit der freien Langhantel vergleichbar, die Stange hat oft ein anderes Eigengewicht.",
        "Langsame Abwärtsphase und volle Tiefe bringen mehr als viel Gewicht."
      ],
      varianten: "Leichter: Goblet-Kniebeuge. Schwerer: Pause unten oder Eineinhalb-Wiederholungen.",
      sicherheit: "Bei Knie- oder Rückenbeschwerden die Tiefe anpassen. Sicherheitsanschläge immer einstellen."
    }
  },
  {
    id: "hackenschmidt",
    name: "Hackenschmidt-Kniebeuge an der Maschine",
    auch: ["Hack Squat", "Machine Hack Squat", "Hackenschmidt"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess", "adduktoren"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2 },
    stufe: 1,
    hinweis: "Rücken fest ans Polster, tief und kontrolliert.",
    info: {
      kurz: "Kniebeuge in einer schrägen Maschine mit Schulter- und Rückenpolster. Sie erlaubt sehr tiefe Kniebeugen mit hoher Last bei stabilisiertem Rücken und ist eine der besten Übungen für den Quadrizeps.",
      ausfuehrung: [
        "Stell dich mit dem Rücken an das Polster, die Schultern unter die Schulterpolster.",
        "Stell die Füße hüftbreit in die Mitte der Plattform, Zehen leicht nach außen.",
        "Drück die Plattform hoch, entriegle die Sicherung und spann den Bauch an.",
        "Senke dich langsam ab, die Knie wandern nach vorn über die Zehen, Rücken und Gesäß bleiben am Polster.",
        "Geh so tief, wie es die Maschine und deine Beweglichkeit erlauben, idealerweise deutlich unter die Parallele.",
        "Drück dich aus der ganzen Fußsohle wieder hoch, ohne die Knie oben ganz zu blockieren.",
        "Nach dem letzten Satz die Sicherung wieder einrasten lassen, bevor du aussteigst."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Gesäß löst sich vom Polster: weniger Tiefe oder weniger Gewicht.",
        "Fersen heben ab: Füße etwas höher auf die Plattform setzen.",
        "Halbe Wiederholungen: die Stärke der Übung ist die volle Tiefe.",
        "Knie oben durchdrücken: kurz vor dem Strecken stoppen."
      ],
      vorteile: [
        "Sehr starker Reiz für den Quadrizeps, auch im gedehnten Bereich.",
        "Geringe Belastung für den unteren Rücken.",
        "Keine Balance nötig, dadurch bis nahe an die Ausbelastung möglich.",
        "Gut für Muskelaufbau mit 6 bis 15 Wiederholungen."
      ],
      tipps: [
        "Füße tief und eng betont die Oberschenkelvorderseite, höher und breiter mehr Gesäß und Adduktoren.",
        "Zwei bis drei Sekunden absenken und unten kurz halten.",
        "Gute Hauptübung, wenn freie Kniebeugen dem Rücken nicht guttun."
      ],
      varianten: "Leichter: Beinpresse. Schwerer: Pausen, Eineinhalb-Wiederholungen oder langsamere Abwärtsphase.",
      sicherheit: "Bei Knieschmerzen mit weniger Tiefe beginnen. Sicherung immer korrekt nutzen."
    }
  },
  {
    id: "beinpresse",
    name: "Beinpresse",
    auch: ["Leg Press", "45-Grad-Beinpresse"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "beinbeuger"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Rücken bleibt am Polster, Knie nicht ganz durchstrecken.",
    info: {
      kurz: "Beindrücken an der Maschine mit mittlerer Fußstellung. Die Beinpresse trainiert Oberschenkel und Gesäß mit hoher Last, ohne dass Rücken und Balance zum begrenzenden Faktor werden.",
      ausfuehrung: [
        "Setz dich in die Maschine, Rücken und Gesäß liegen fest am Polster an.",
        "Stell die Füße hüftbreit in die Mitte der Plattform, Zehen leicht nach außen.",
        "Drück die Plattform hoch, löse die Sicherung und greif die Haltegriffe.",
        "Senke die Plattform langsam ab, bis die Knie etwa 90 Grad oder etwas mehr gebeugt sind, solange das Becken am Polster bleibt.",
        "Drück die Plattform aus der ganzen Fußsohle wieder hoch.",
        "Stopp kurz vor dem vollen Durchstrecken, die Knie bleiben minimal gebeugt.",
        "Nach dem letzten Satz die Sicherung einrasten lassen."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen.",
      fehler: [
        "Becken rollt unten vom Polster ab: weniger tief gehen, sonst rundet sich der untere Rücken.",
        "Knie knallen oben durch: immer leicht gebeugt bleiben.",
        "Knie fallen nach innen: Knie in Richtung der Zehen drücken.",
        "Zu viel Gewicht mit kleinen Bewegungen: lieber weniger Last und volle Tiefe."
      ],
      vorteile: [
        "Hohe Last für Oberschenkel und Gesäß bei geringer Rückenbelastung.",
        "Leicht zu lernen und sicher bis nahe an die Ausbelastung.",
        "Fußposition lässt den Schwerpunkt gezielt verschieben.",
        "Gute Alternative bei Rückenbeschwerden oder als zweite Beinübung."
      ],
      tipps: [
        "Langsame Abwärtsphase von zwei bis drei Sekunden steigert den Reiz.",
        "Gut für höhere Wiederholungszahlen von 10 bis 20.",
        "Wenn du unten das Becken abrollen spürst, ist das deine Grenze für die Tiefe."
      ],
      varianten: "Leichter: weniger Gewicht oder kleinerer Bewegungsumfang. Schwerer: einbeinige Beinpresse oder Pausen unten.",
      sicherheit: "Bei Rückenbeschwerden den Bewegungsumfang so begrenzen, dass das Becken am Polster bleibt. Bei Bluthochdruck nicht pressen."
    }
  },
  {
    id: "beinpresse_fuesse_hoch",
    name: "Beinpresse mit Füßen hoch und breit",
    auch: ["High and Wide Leg Press", "Leg Press High Foot Placement"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["adduktoren", "beinbeuger"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    info: {
      kurz: "Beinpresse mit den Füßen oben und breiter auf der Plattform. Die Hüfte beugt stärker, die Knie weniger, dadurch arbeiten Gesäß, Adduktoren und Beinbeuger mehr als bei der normalen Fußstellung.",
      ausfuehrung: [
        "Setz dich in die Maschine und leg Rücken und Gesäß fest an das Polster.",
        "Stell die Füße schulterbreit oder breiter in den oberen Bereich der Plattform, Zehen leicht nach außen.",
        "Löse die Sicherung und senke die Plattform langsam ab, die Knie zeigen in Richtung der Zehen.",
        "Lass die Knie in Richtung der Schultern kommen, solange das Becken am Polster bleibt.",
        "Drück über die Fersen nach oben und spür dabei das Gesäß arbeiten.",
        "Stopp kurz vor dem vollen Strecken und beginne die nächste Wiederholung."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen.",
      fehler: [
        "Becken hebt sich unten ab: Bewegungsumfang begrenzen.",
        "Füße so hoch, dass die Fersen über die Plattform hinausragen: ganzer Fuß bleibt auf der Platte.",
        "Knie fallen nach innen: aktiv nach außen drücken.",
        "Schwung am Umkehrpunkt: unten kurz kontrolliert abbremsen."
      ],
      vorteile: [
        "Mehr Arbeit für Gesäß und Adduktoren.",
        "Weniger Kniebeugung, oft angenehmer bei empfindlichen Knien.",
        "Hohe Lasten bei stabilisiertem Rücken.",
        "Gute Ergänzung zu Kniebeugen mit Fokus auf die Oberschenkelvorderseite."
      ],
      tipps: [
        "Drück bewusst über die Fersen, das verstärkt die Gesäßarbeit.",
        "Wähle 10 bis 15 Wiederholungen mit kontrolliertem Tempo.",
        "Gut kombinierbar mit Beinstrecker für einen vollständigen Oberschenkeltag."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause in der tiefsten Position oder einbeinige Ausführung.",
      sicherheit: "Bei Hüftbeschwerden in tiefer Beugung den Bewegungsumfang verkleinern."
    }
  },
  {
    id: "beinpresse_fuesse_tief",
    name: "Beinpresse mit Füßen tief und eng",
    auch: ["Low Foot Leg Press", "Narrow Stance Leg Press", "Quad Leg Press"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 1,
    hinweis: "Fersen bleiben auf der Plattform.",
    info: {
      kurz: "Beinpresse mit den Füßen tief und etwa hüftbreit auf der Plattform. Die Knie beugen dabei stärker und wandern weiter nach vorn, was den Quadrizeps besonders fordert.",
      ausfuehrung: [
        "Setz dich in die Maschine, Rücken und Gesäß fest am Polster.",
        "Stell die Füße hüftbreit in den unteren Bereich der Plattform, aber so, dass die Fersen noch sicher aufliegen.",
        "Löse die Sicherung und senke die Plattform langsam ab, die Knie wandern über die Zehen hinaus.",
        "Geh tief, solange die Fersen auf der Plattform bleiben und das Becken nicht abrollt.",
        "Drück dich über die ganze Fußsohle wieder hoch, mit dem Gefühl in der Oberschenkelvorderseite.",
        "Stopp kurz vor dem vollen Strecken."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen.",
      fehler: [
        "Fersen heben sich: Füße etwas höher setzen.",
        "Zu viel Gewicht: die Knie werden stark belastet, mit moderater Last beginnen.",
        "Knie zeigen nach innen: Knie in Linie mit den Füßen.",
        "Becken rollt ab: Tiefe begrenzen."
      ],
      vorteile: [
        "Gezielter Reiz für den Quadrizeps mit großem Bewegungsumfang im Kniegelenk.",
        "Kaum Rückenbelastung.",
        "Guter Ersatz für die Hackenschmidt-Kniebeuge.",
        "Lässt sich gut bis kurz vor die Ausbelastung trainieren."
      ],
      tipps: [
        "Etwa 20 bis 30 Prozent weniger Gewicht als bei der normalen Beinpresse wählen.",
        "Langsames Absenken in drei Sekunden betont den gedehnten Bereich.",
        "Passt gut als Hauptübung an einem Tag mit Fokus auf die Oberschenkelvorderseite."
      ],
      varianten: "Leichter: Füße etwas höher. Schwerer: einbeinig oder mit Pause unten.",
      sicherheit: "Bei Beschwerden an Kniescheibe oder Patellasehne die normale oder hohe Fußstellung wählen."
    }
  },
  {
    id: "beinpresse_einbeinig",
    name: "Beinpresse einbeinig",
    auch: ["Single-Leg Leg Press", "Unilateral Leg Press"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    info: {
      kurz: "Beinpresse mit nur einem Bein. Sie gleicht Kraftunterschiede zwischen den Seiten aus und trainiert jedes Bein einzeln, ohne dass Balance zum begrenzenden Faktor wird.",
      ausfuehrung: [
        "Setz dich in die Maschine, Rücken und Gesäß liegen fest am Polster.",
        "Stell einen Fuß mittig auf die Plattform, etwa in Verlängerung der Hüfte. Das andere Bein stellst du seitlich auf den Boden oder den Rahmen.",
        "Löse die Sicherung mit beiden Beinen und nimm dann das freie Bein weg.",
        "Senke die Plattform langsam ab, das Knie zeigt in Richtung der Zehen.",
        "Geh so tief, wie das Becken am Polster bleibt, und drück dann kraftvoll hoch.",
        "Nach den Wiederholungen das zweite Bein dazunehmen, Sicherung einrasten und Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen.",
      fehler: [
        "Becken dreht sich oder hebt ab: weniger Gewicht und Tiefe.",
        "Knie fällt nach innen: Knie über der zweiten Zehe führen.",
        "Fuß zu weit außen: mittig vor die Hüfte stellen.",
        "Sicherung einbeinig lösen: immer mit beiden Beinen ent- und verriegeln."
      ],
      vorteile: [
        "Gleicht Kraftunterschiede zwischen rechts und links aus.",
        "Starker Reiz mit weniger Gesamtlast für den Rücken.",
        "Keine Balance nötig, dadurch sehr kontrollierbar.",
        "Gute Vorbereitung auf freie einbeinige Übungen."
      ],
      tipps: [
        "Beginne mit der schwächeren Seite und mach auf der stärkeren nicht mehr Wiederholungen.",
        "Etwas weniger als die Hälfte des beidbeinigen Gewichts ist ein guter Start.",
        "Gut in Reha-nahen Phasen, wenn freie einbeinige Übungen noch zu wackelig sind."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang. Schwerer: Pause unten oder langsamere Abwärtsphase.",
      sicherheit: "Bei Knie- oder Hüftbeschwerden mit kleinem Bewegungsumfang starten.",
      golf: "Gleicht Unterschiede zwischen Führ- und Schlagbein aus und stärkt jedes Bein einzeln für einen stabilen Stand."
    }
  },
  {
    id: "pendulum_squat",
    name: "Pendel-Kniebeuge",
    auch: ["Pendulum Squat", "Pendulum Squat Machine"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess", "adduktoren"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge an einer Pendelmaschine, bei der sich das Schulterpolster auf einem Bogen bewegt. Die Bewegung erlaubt sehr tiefe Kniebeugen mit stabilem Rücken und belastet den Quadrizeps besonders im gedehnten Bereich.",
      ausfuehrung: [
        "Stell dich auf die Plattform, Rücken an das Polster, Schultern unter die Schulterpolster.",
        "Stell die Füße hüftbreit, etwa mittig bis leicht vorn auf die Plattform.",
        "Löse die Sicherung, spann den Bauch an und greif die Haltegriffe.",
        "Senke dich langsam ab, die Knie wandern weit nach vorn, das Polster schwingt mit dir nach unten.",
        "Geh sehr tief, bis die Oberschenkel nahe an den Waden sind, ohne dass das Becken abkippt.",
        "Drück dich gleichmäßig wieder hoch und stopp vor dem vollen Strecken."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Halbe Bewegung: die Maschine ist für volle Tiefe gebaut, nutze sie.",
        "Fersen heben ab: Füße etwas weiter nach vorn stellen.",
        "Zu schnelles Absenken: kontrolliert in den tiefen Bereich gehen.",
        "Becken kippt nach hinten weg: Tiefe minimal reduzieren."
      ],
      vorteile: [
        "Sehr hohe Belastung des Quadrizeps in der Dehnung, gut für Muskelaufbau.",
        "Kaum Rückenbelastung.",
        "Gleichmäßige Spannung über die ganze Bewegung.",
        "Einfach zu erlernen."
      ],
      tipps: [
        "Drei Sekunden absenken, kurze Pause unten, zügig hoch.",
        "8 bis 15 Wiederholungen nahe an der Ausbelastung sind ideal.",
        "Falls nicht vorhanden: Hackenschmidt oder fersenerhöhte Kniebeuge als Ersatz."
      ],
      varianten: "Leichter: weniger Tiefe. Schwerer: Pausen oder Eineinhalb-Wiederholungen.",
      sicherheit: "Bei Kniebeschwerden nur schmerzfrei tief gehen."
    }
  },
  {
    id: "belt_squat",
    name: "Belt Squat (Hüftgurt-Kniebeuge)",
    auch: ["Belt Squat", "Hip Belt Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Last hängt an der Hüfte, der Rücken bleibt frei.",
    info: {
      kurz: "Kniebeuge mit einem Gurt um die Hüfte, an dem das Gewicht hängt. Die Wirbelsäule trägt keine Last, deshalb ist sie ideal, um die Beine schwer zu trainieren, wenn Rücken oder Schultern geschont werden sollen.",
      ausfuehrung: [
        "Leg den Gurt um die Hüfte, sodass er unterhalb des Beckenkamms sitzt, und hak ihn an der Maschine ein.",
        "Stell dich schulterbreit auf die Plattformen, Zehen leicht nach außen, und greif die Haltegriffe vor dir.",
        "Löse die Sicherung, steh aufrecht und spann den Bauch an.",
        "Senke dich gerade nach unten ab, die Knie folgen den Zehen, der Oberkörper bleibt aufrecht.",
        "Geh tief, bis die Oberschenkel mindestens waagerecht sind.",
        "Drück dich aus der ganzen Fußsohle hoch und schieb die Hüfte oben unter den Körper."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Mit den Armen ziehen: die Griffe nur zur Balance nutzen.",
        "Gurt sitzt zu hoch: unterhalb der Taille anlegen, sonst drückt er auf den Bauch.",
        "Knie fallen nach innen: Knie aktiv nach außen.",
        "Zu wenig Tiefe: die fehlende Rückenlast erlaubt volle Tiefe."
      ],
      vorteile: [
        "Keine axiale Belastung der Wirbelsäule.",
        "Schwere Beinarbeit auch bei Schulter- oder Rückenbeschwerden.",
        "Sehr stabil und einfach zu lernen.",
        "Gut für hohe Wiederholungen ohne Rumpfermüdung."
      ],
      tipps: [
        "Etwas breiter stehen und die Knie nach außen drücken für mehr Gesäß und Adduktoren.",
        "Langsame Abwärtsphase und Pause unten bringen viel Reiz mit moderater Last.",
        "Auch als Marschübung (Belt Squat March) zum Aufwärmen nutzbar."
      ],
      varianten: "Leichter: weniger Tiefe. Schwerer: mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Leisten- oder Hüftbeschwerden auf einen angenehm sitzenden Gurt achten."
    }
  },
  {
    id: "goblet",
    name: "Goblet-Kniebeuge",
    auch: ["Goblet Squat", "Kettlebell Goblet Squat", "DB Goblet Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "bauch", "oberer_ruecken"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 1,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    hinweis: "Hantel eng vor der Brust, Ellbogen zwischen die Knie.",
    info: {
      kurz: "Kniebeuge mit einer Kurzhantel oder Kettlebell eng vor der Brust. Das vordere Gewicht hält dich aufrecht und macht die Goblet-Kniebeuge zur idealen Lernübung und zu einer starken Beinübung für jedes Niveau.",
      ausfuehrung: [
        "Halte eine Kurzhantel senkrecht an einem Gewichtsende mit beiden Händen oder eine Kettlebell an den Griffseiten eng vor der Brust.",
        "Stell die Füße schulterbreit, Zehen 15 bis 30 Grad nach außen.",
        "Spann den Bauch an und senke dich zwischen die Fersen ab, Knie zeigen über die Zehen.",
        "Halte die Brust aufrecht, die Ellbogen zeigen nach unten.",
        "Geh tief, bis die Ellbogen die Innenseite der Knie fast berühren, der Rücken bleibt neutral.",
        "Drück dich aus der ganzen Fußsohle hoch und steh aufrecht."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Gewicht weit vom Körper: die Hantel bleibt an der Brust, sonst kippt der Oberkörper.",
        "Fersen heben ab: breiterer Stand oder kleine Erhöhung unter die Fersen.",
        "Knie fallen nach innen: Ellbogen leicht gegen die Knie drücken, um sie nach außen zu schieben.",
        "Rundrücken unten: nur so tief, wie der Rücken neutral bleibt."
      ],
      vorteile: [
        "Leicht zu lernen und gut zum Einüben der Kniebeuge.",
        "Stärkt Beine, Rumpf und oberen Rücken.",
        "Rückenschonend durch aufrechten Oberkörper.",
        "Funktioniert mit einer einzigen Hantel, ideal für zu Hause."
      ],
      tipps: [
        "Nutze die Ellbogen in der tiefsten Position, um die Knie sanft nach außen zu drücken und die Hüfte zu öffnen.",
        "Langsames Absenken in drei Sekunden steigert den Reiz, wenn die Hanteln zu leicht werden.",
        "Auch als Aufwärmübung vor schweren Kniebeugen gut geeignet."
      ],
      varianten: "Leichter: Kniebeuge auf die Bank oder ohne Gewicht. Schwerer: Pause unten, Fersen erhöht oder Eineinhalb-Wiederholungen.",
      sicherheit: "Bei Kniebeschwerden die Tiefe schmerzfrei wählen.",
      golf: "Schult eine stabile Beinachse und Hüftbeweglichkeit, beides Grundlage für eine gute Ansprechposition."
    }
  },
  {
    id: "kb_frontkniebeuge",
    name: "Frontkniebeuge mit zwei Kettlebells",
    auch: ["Double Kettlebell Front Squat", "KB Front Rack Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["bauch", "oberer_ruecken", "adduktoren"],
    geraete: [["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2, handgelenk: 1 },
    stufe: 2,
    hinweis: "Kettlebells im Front Rack, Ellbogen eng am Körper.",
    info: {
      kurz: "Kniebeuge mit zwei Kettlebells in der Front-Rack-Position an den Schultern. Die vordere Last fordert Rumpf und oberen Rücken stark und erlaubt mehr Gewicht als die Goblet-Kniebeuge.",
      ausfuehrung: [
        "Bring zwei Kettlebells mit einem kontrollierten Umsetzen (Clean) in die Front-Rack-Position: Griffe auf Brusthöhe, Kugeln liegen außen am Unterarm, Ellbogen eng am Körper.",
        "Stell die Füße schulterbreit, Zehen leicht nach außen.",
        "Atme ein, spann den Bauch an und senke dich gerade ab, die Brust bleibt aufrecht.",
        "Geh so tief, wie du den Rücken neutral halten kannst, die Ellbogen zeigen nach unten.",
        "Drück dich kraftvoll hoch und halt die Kettlebells ruhig am Körper.",
        "Senke die Kettlebells nach dem Satz kontrolliert zwischen die Beine und setz sie ab."
      ],
      atmung: "Vor dem Absenken einatmen und halten, beim Aufstehen ausatmen.",
      fehler: [
        "Ellbogen weit seitlich: die Kettlebells ziehen dich nach vorn, Ellbogen eng an die Rippen.",
        "Handgelenke abgeknickt: Handgelenk gerade halten, Griff tief in die Hand.",
        "Rundrücken oben: Schultern zurück und Brust aufrecht.",
        "Unkontrolliertes Umsetzen: erst das Clean mit leichterem Gewicht üben."
      ],
      vorteile: [
        "Starke Rumpfarbeit durch die vordere Last.",
        "Mehr Gewicht möglich als bei der Goblet-Kniebeuge.",
        "Aufrechter Oberkörper, schonend für den unteren Rücken.",
        "Gute Alternative zur Frontkniebeuge mit Langhantel zu Hause."
      ],
      tipps: [
        "Halte den Daumen nah an der Brust, dann bleiben die Ellbogen eng.",
        "Kombinierbar mit dem Umsetzen als Komplex für den ganzen Körper.",
        "Die Wiederholungszahl wird oft vom Rumpf begrenzt, nicht von den Beinen."
      ],
      varianten: "Leichter: Goblet-Kniebeuge mit einer Kettlebell. Schwerer: Pause unten oder schwerere Kettlebells.",
      sicherheit: "Bei Handgelenksbeschwerden die Goblet-Variante wählen."
    }
  },
  {
    id: "kh_kniebeuge",
    name: "Kniebeuge mit Kurzhanteln seitlich",
    auch: ["Dumbbell Squat", "DB Squat", "Suitcase Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["unterarm", "trapez", "adduktoren"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge mit je einer Kurzhantel seitlich neben dem Körper. Das Gewicht hängt tief, was das Gleichgewicht erleichtert und mehr Gesamtlast erlaubt als die Goblet-Kniebeuge.",
      ausfuehrung: [
        "Nimm zwei Kurzhanteln und lass die Arme seitlich am Körper hängen, Handflächen zeigen zueinander.",
        "Stell die Füße hüftbreit bis schulterbreit, Zehen leicht nach außen.",
        "Zieh die Schultern leicht zurück, spann den Bauch an und senke dich gerade nach unten ab.",
        "Die Hanteln bleiben seitlich und wandern senkrecht nach unten.",
        "Geh tief, bis die Hanteln fast den Boden berühren oder die Oberschenkel waagerecht sind.",
        "Drück dich aus der ganzen Fußsohle hoch, die Arme bleiben locker gestreckt."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Mit den Armen ziehen: Arme hängen nur als Haken.",
        "Schultern hochgezogen: Schultern bewusst tief halten.",
        "Oberkörper zu weit nach vorn: Brust aufrecht, Blick geradeaus.",
        "Griff gibt zuerst auf: Zughilfen nutzen oder Goblet-Variante wählen."
      ],
      vorteile: [
        "Mehr Gewicht möglich als bei der Goblet-Kniebeuge.",
        "Trainiert nebenbei die Griffkraft.",
        "Stabiler Stand durch tiefen Schwerpunkt.",
        "Gut für zu Hause mit Kurzhanteln."
      ],
      tipps: [
        "Mit Fersenerhöhung wird die Übung quadrizepslastiger.",
        "Wenn der Griff begrenzt, sind Zughilfen sinnvoll.",
        "Passt gut als Hauptübung, wenn keine Langhantel vorhanden ist."
      ],
      varianten: "Leichter: Goblet-Kniebeuge. Schwerer: Fersen erhöht oder langsameres Tempo.",
      sicherheit: "Bei Kniebeschwerden Tiefe anpassen."
    }
  },
  {
    id: "sumo_kniebeuge",
    name: "Sumo-Kniebeuge mit Kurzhantel",
    auch: ["Sumo Squat", "Dumbbell Sumo Squat", "Plié Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["gesaess", "adduktoren", "quadrizeps"],
    sekundaer: ["beinbeuger"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge mit sehr breitem Stand und nach außen gedrehten Füßen, die Hantel hängt zwischen den Beinen. Sie trainiert neben dem Quadrizeps besonders die Adduktoren und das Gesäß.",
      ausfuehrung: [
        "Stell dich deutlich breiter als schulterbreit hin, die Zehen zeigen 30 bis 45 Grad nach außen.",
        "Halte eine Kurzhantel senkrecht an einem Ende oder eine Kettlebell am Griff mit beiden Händen vor dem Körper.",
        "Richte den Oberkörper auf, spann den Bauch an und senke dich gerade nach unten ab.",
        "Die Knie zeigen in Richtung der Zehen nach außen, der Oberkörper bleibt aufrecht.",
        "Geh so tief, bis die Hantel fast den Boden berührt oder du die Dehnung in der Leiste spürst.",
        "Drück dich hoch und spann oben das Gesäß an."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Knie fallen nach innen: Knie aktiv nach außen über die Zehen schieben.",
        "Oberkörper kippt nach vorn: Brust hoch, Hantel hängt senkrecht.",
        "Stand zu breit für die Beweglichkeit: so breit, dass du sauber tief kommst.",
        "Füße zu wenig ausgedreht: Füße und Knie müssen in die gleiche Richtung zeigen."
      ],
      vorteile: [
        "Stärkt Adduktoren und Gesäß zusätzlich zum Quadrizeps.",
        "Aufrechter Oberkörper, rückenschonend.",
        "Fördert die Hüftbeweglichkeit in Außenrotation.",
        "Einfach und mit wenig Material umsetzbar."
      ],
      tipps: [
        "Stell dich auf zwei Stufen oder Kisten, um mit der Hantel tiefer zu kommen.",
        "Langsames Tempo betont die Dehnung der Adduktoren.",
        "Gute Ergänzung zu normalen Kniebeugen für die Innenseite der Oberschenkel."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: schwerere Hantel oder erhöhter Stand.",
      sicherheit: "Bei Leistenbeschwerden mit kleinerem Stand und geringerer Tiefe beginnen."
    }
  },
  {
    id: "landmine_kniebeuge",
    name: "Landmine-Kniebeuge",
    auch: ["Landmine Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["bauch", "oberer_ruecken"],
    geraete: [["landmine", "langhantel"], ["landmine", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge mit dem Ende einer schräg verankerten Langhantel vor der Brust. Die Stange gibt eine leichte Führung nach vorn und unten, was die Bewegung angenehm aufrecht und gelenkschonend macht.",
      ausfuehrung: [
        "Steck ein Ende der Langhantel in die Landmine oder eine Ecke und belade das freie Ende.",
        "Heb das beladene Ende auf Brusthöhe und halte es mit beiden Händen ineinander gelegt vor dem Brustbein.",
        "Stell dich schulterbreit hin, die Füße leicht vor dem Stangenende, und lehn dich minimal in die Stange.",
        "Senke dich gerade nach unten ab, die Stange bleibt an der Brust, die Knie folgen den Zehen.",
        "Geh tief, bis die Oberschenkel waagerecht oder tiefer sind.",
        "Drück dich hoch und streck dich oben ganz auf."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Zu weit von der Stange entfernt: dann ziehen die Arme, näher herantreten.",
        "Stange rutscht von der Brust: Ellbogen nach unten, Stange fest an den Körper.",
        "Knie fallen nach innen: Knie über den Zehen halten.",
        "Fersen heben ab: Füße etwas weiter nach vorn."
      ],
      vorteile: [
        "Sehr gut zum Erlernen der Kniebeuge.",
        "Rücken- und schulterschonend.",
        "Trainiert den Rumpf durch die vordere Last.",
        "Funktioniert mit einer Stange und wenig Zusatzmaterial."
      ],
      tipps: [
        "Je weiter du dich in die Stange lehnst, desto mehr arbeiten die Oberschenkel.",
        "Ohne Landmine reicht eine Hantelscheibe als Verankerung in einer Ecke.",
        "Gut auch als Kombi mit einem Drücken nach oben (Landmine Thruster)."
      ],
      varianten: "Leichter: wenig Gewicht oder Box als Tiefenmarke. Schwerer: mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Kniebeschwerden die Tiefe anpassen. Auf einen rutschfesten Stand der Stange achten."
    }
  },
  {
    id: "band_kniebeuge",
    name: "Kniebeuge mit Widerstandsband",
    auch: ["Band Squat", "Resistance Band Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge mit einem großen Widerstandsband unter den Füßen und über den Schultern. Der Widerstand steigt nach oben hin an, was die Übung gelenkschonend macht und gut für zu Hause oder unterwegs eignet.",
      ausfuehrung: [
        "Stell dich mit beiden Füßen hüftbreit auf das Band.",
        "Führe das Band hinter den Nacken über die Schultern oder halte es mit den Händen auf Schulterhöhe vor dem Körper.",
        "Senke dich in die Kniebeuge ab, bevor du das Band über die Schultern legst, damit es bereits leicht gespannt ist.",
        "Steh auf, spann den Bauch an und beginne dann die Wiederholungen: Knie folgen den Zehen, Oberkörper aufrecht.",
        "Geh so tief wie möglich und drück dich dann gegen den wachsenden Widerstand nach oben.",
        "Streck oben Hüfte und Knie fast ganz, dort ist die Spannung am höchsten."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Band rutscht unter den Füßen weg: mittig und mit ganzer Sohle darauf stehen.",
        "Schnelles Zurückschnellen lassen: auch die Abwärtsphase kontrollieren.",
        "Band drückt im Nacken: mit Handtuch polstern oder vor dem Körper halten.",
        "Zu leichtes Band: so wählen, dass die letzten Wiederholungen schwer werden."
      ],
      vorteile: [
        "Gelenkschonend durch geringen Widerstand in der tiefsten Position.",
        "Fast überall machbar, passt in jede Tasche.",
        "Fördert kräftiges, vollständiges Strecken am Ende.",
        "Guter Einstieg in das Krafttraining mit Zusatzwiderstand."
      ],
      tipps: [
        "Kombiniere ein Band mit einer Kurzhantel als Goblet für mehr Widerstand unten.",
        "Höhere Wiederholungszahlen von 15 bis 25 funktionieren mit Bändern gut.",
        "Prüf das Band regelmäßig auf Risse."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band, doppelt gelegt oder langsame Abwärtsphase.",
      sicherheit: "Band vor jedem Training auf Beschädigungen prüfen. Nicht ins Gesicht zurückschnellen lassen."
    }
  },
  // ---------- Kniebeuge ohne Gewicht ----------
  {
    id: "kniebeuge_assistiert",
    name: "Kniebeuge mit Halt",
    auch: ["Assisted Squat", "TRX Squat", "Supported Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    geraete: [["schlingentrainer"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    schwerer: "box_kniebeuge",
    hinweis: "An einem Schlingentrainer, Türrahmen oder Geländer festhalten.",
    info: {
      kurz: "Kniebeuge, bei der du dich an einem Schlingentrainer, Türrahmen oder Geländer festhältst. Die Arme helfen bei Balance und Kraft, so gelingt die volle Tiefe auch beim Einstieg oder bei schwachen Beinen.",
      ausfuehrung: [
        "Greif die Griffe des Schlingentrainers oder einen festen Halt etwa auf Bauchhöhe mit gestreckten Armen.",
        "Stell die Füße schulterbreit, Zehen leicht nach außen.",
        "Lehn dich leicht zurück, sodass die Arme etwas Spannung haben.",
        "Senke dich kontrolliert ab, schieb die Hüfte nach hinten und unten, die Knie folgen den Zehen.",
        "Geh so tief, wie es angenehm ist, die Arme stützen nur so viel wie nötig.",
        "Drück dich vor allem aus den Beinen hoch, die Arme helfen nur leicht mit."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Nur mit den Armen hochziehen: die Beine machen die Hauptarbeit.",
        "Knie fallen nach innen: Knie über den Zehen.",
        "Fersen heben ab: Gewicht über die ganze Fußsohle verteilen.",
        "Unsicherer Halt: nur an wirklich stabilen Punkten festhalten."
      ],
      vorteile: [
        "Ermöglicht volle Tiefe trotz geringer Kraft oder Balance.",
        "Sanfter Einstieg nach Pausen oder Verletzungen.",
        "Schult das richtige Bewegungsmuster der Kniebeuge.",
        "Fast überall durchführbar."
      ],
      tipps: [
        "Verringere die Armhilfe schrittweise von Woche zu Woche.",
        "Gut zum Aufwärmen der Hüfte vor dem Training.",
        "Eine Pause unten verbessert die Beweglichkeit."
      ],
      varianten: "Leichter: weniger Tiefe. Schwerer: Kniebeuge auf die Bank ohne Halt.",
      sicherheit: "Bei Kniebeschwerden nur schmerzfrei tief gehen."
    }
  },
  {
    id: "box_kniebeuge",
    name: "Kniebeuge auf die Bank",
    auch: ["Box Squat", "Bodyweight Box Squat", "Sit to Stand"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    schwerer: "kniebeuge_kg",
    info: {
      kurz: "Kniebeuge ohne Gewicht, bei der du dich kurz auf eine Bank, Box oder einen Stuhl setzt. Die Sitzfläche gibt Sicherheit und eine feste Tiefe, ideal zum Lernen und für Einsteiger.",
      ausfuehrung: [
        "Stell dich mit dem Rücken vor eine Bank oder einen stabilen Stuhl, die Füße schulterbreit.",
        "Streck die Arme nach vorn als Gegengewicht oder verschränke sie vor der Brust.",
        "Schieb die Hüfte nach hinten und senke dich kontrolliert ab, bis das Gesäß die Sitzfläche berührt.",
        "Setz dich nur kurz ab, ohne dich fallen zu lassen oder ganz zu entspannen.",
        "Lehn dich leicht nach vorn und drück dich aus den Fersen und der ganzen Fußsohle wieder hoch.",
        "Steh ganz aufrecht und spann oben das Gesäß an."
      ],
      atmung: "Beim Hinsetzen einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Fallenlassen auf die Bank: langsam und kontrolliert absenken.",
        "Mit Schwung aufstehen: aus der Kraft der Beine aufstehen.",
        "Knie fallen nach innen: Knie zeigen nach außen über die Zehen.",
        "Sitzfläche zu niedrig: mit einer Höhe beginnen, aus der du sicher aufstehst."
      ],
      vorteile: [
        "Sicherer Einstieg in die Kniebeuge.",
        "Trainiert eine wichtige Alltagsbewegung: Hinsetzen und Aufstehen.",
        "Feste Tiefe, gut steuerbar.",
        "Fast überall möglich."
      ],
      tipps: [
        "Mach die Sitzfläche schrittweise niedriger, um die Tiefe zu steigern.",
        "Langsames Absenken in drei bis vier Sekunden macht sie anspruchsvoller.",
        "Wenn 15 saubere Wiederholungen leicht gehen, zur freien Kniebeuge wechseln."
      ],
      varianten: "Leichter: höhere Sitzfläche oder mit Halt. Schwerer: freie Kniebeuge oder Goblet-Box-Kniebeuge.",
      sicherheit: "Auf eine stabile, nicht wegrutschende Sitzfläche achten."
    }
  },
  {
    id: "kniebeuge_kg",
    name: "Kniebeuge ohne Gewicht",
    auch: ["Bodyweight Squat", "Air Squat", "Freie Kniebeuge"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    schwerer: "split_squat_kg",
    info: {
      kurz: "Die freie Kniebeuge mit dem eigenen Körpergewicht. Sie ist die Basis aller Kniebeugen und trainiert Beine und Hüftbeweglichkeit, ganz ohne Geräte.",
      ausfuehrung: [
        "Stell die Füße schulterbreit, Zehen leicht nach außen.",
        "Streck die Arme beim Absenken nach vorn oder verschränke sie vor der Brust.",
        "Schieb Hüfte nach hinten und Knie nach vorn außen gleichzeitig und senke dich ab.",
        "Halte die Brust aufrecht und das Gewicht auf der ganzen Fußsohle.",
        "Geh so tief, wie der Rücken neutral bleibt, idealerweise bis unter die Parallele.",
        "Drück dich zügig hoch und streck oben Hüfte und Knie ganz."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Fersen heben ab: breiter stehen oder Sprunggelenk mobilisieren.",
        "Knie fallen nach innen: Knie zeigen über die Zehen.",
        "Zu schnell und zu flach: volle Tiefe und kontrolliertes Tempo.",
        "Rundrücken: Brust aufrecht, nur so tief wie sauber möglich."
      ],
      vorteile: [
        "Ohne Geräte überall möglich.",
        "Verbessert Beinkraft, Kraftausdauer und Beweglichkeit.",
        "Grundlage für alle Kniebeugevarianten.",
        "Gut zum Aufwärmen vor dem Training."
      ],
      tipps: [
        "Zum Steigern: langsames Tempo, Pause unten oder mehr Wiederholungen.",
        "Fersen leicht erhöhen, wenn die Tiefe fehlt.",
        "Ab 25 sauberen Wiederholungen auf einbeinige Varianten wechseln."
      ],
      varianten: "Leichter: Kniebeuge auf die Bank. Schwerer: Split-Kniebeuge, Bulgarische Split-Kniebeuge oder Goblet-Kniebeuge.",
      sicherheit: "Bei Kniebeschwerden die Tiefe anpassen."
    }
  },
  {
    id: "ball_wandkniebeuge",
    name: "Wandkniebeuge mit Gymnastikball",
    auch: ["Stability Ball Wall Squat", "Swiss Ball Wall Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    geraete: [["gymnastikball", "wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    schwerer: "kniebeuge_kg",
    info: {
      kurz: "Kniebeuge mit einem Gymnastikball zwischen unterem Rücken und Wand. Der Ball führt die Bewegung und stützt den Rücken, sodass Einsteiger eine saubere Kniebeuge mit aufrechtem Oberkörper lernen.",
      ausfuehrung: [
        "Leg einen Gymnastikball zwischen Wand und unteren Rücken und lehn dich leicht dagegen.",
        "Stell die Füße schulterbreit etwa eine halbe Schrittlänge vor dem Körper auf.",
        "Senke dich langsam ab, der Ball rollt den Rücken entlang nach oben.",
        "Geh so tief, bis die Oberschenkel etwa waagerecht sind und die Knie über den Füßen stehen.",
        "Drück dich aus den Fersen und der ganzen Fußsohle wieder hoch.",
        "Behalte den Kontakt zum Ball während der gesamten Bewegung."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Füße zu nah an der Wand: die Knie schieben weit nach vorn, Füße weiter vor.",
        "Knie fallen nach innen: Knie über den Zehen halten.",
        "Ball zu hoch am Rücken: in Höhe der Lendenwirbelsäule platzieren.",
        "Zu schnell absenken: kontrolliert arbeiten."
      ],
      vorteile: [
        "Gut für Einsteiger, ältere Trainierende und nach Pausen.",
        "Unterstützt den Rücken und erleichtert eine saubere Technik.",
        "Stärkt Quadrizeps und Gesäß gelenkschonend.",
        "Lässt sich mit einem Halt am Ende als Wandsitzen kombinieren."
      ],
      tipps: [
        "Halte unten zwei Sekunden, um die Kraft in der Position zu verbessern.",
        "Ein Kissen zwischen den Knien hilft, die Beinachse zu spüren.",
        "Mit Kurzhanteln in den Händen lässt sie sich steigern."
      ],
      varianten: "Leichter: weniger Tiefe. Schwerer: einbeinig oder mit Hanteln.",
      sicherheit: "Bei Knieschmerzen nur bis zur schmerzfreien Tiefe gehen."
    }
  },
  // ---------- Kniestrecker isoliert und isometrisch ----------
  {
    id: "beinstrecker",
    name: "Beinstrecker an der Maschine",
    auch: ["Leg Extension", "Quad Extension", "Beinstrecken"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Oben kurz halten, langsam ablassen.",
    info: {
      kurz: "Isolationsübung für die Oberschenkelvorderseite an der Maschine. Sie trainiert den Quadrizeps ohne Hüftbeteiligung, besonders im verkürzten Bereich, und ergänzt Kniebeugen und Beinpresse gut.",
      ausfuehrung: [
        "Stell die Rückenlehne so ein, dass deine Kniegelenke genau auf Höhe der Drehachse der Maschine liegen.",
        "Stell das Fußpolster so ein, dass es knapp oberhalb der Sprunggelenke vorn auf dem Schienbein liegt.",
        "Setz dich mit dem Rücken fest an die Lehne und greif die Haltegriffe seitlich am Sitz.",
        "Streck die Beine kontrolliert, bis die Knie fast ganz gestreckt sind, und spann die Oberschenkel oben eine Sekunde fest an.",
        "Lass das Gewicht langsam in zwei bis drei Sekunden ab, bis die Knie etwa 90 Grad oder etwas mehr gebeugt sind.",
        "Beginne die nächste Wiederholung, ohne das Gewicht unten abzulegen."
      ],
      atmung: "Beim Strecken ausatmen, beim Ablassen einatmen.",
      fehler: [
        "Gesäß hebt vom Sitz ab: an den Griffen festhalten und Gewicht reduzieren.",
        "Mit Schwung hochschlagen: kontrolliert strecken und oben kurz halten.",
        "Drehachse falsch eingestellt: Knie müssen genau an der Achse liegen.",
        "Gewicht unten fallen lassen: langsam ablassen, dort ist der Muskel gedehnt."
      ],
      vorteile: [
        "Isoliert den Quadrizeps, besonders den geraden Schenkelmuskel.",
        "Kein Rücken- und kaum Hüftbeitrag, gut steuerbar.",
        "Ergänzt Kniebeugen, die den Muskel vor allem im gedehnten Bereich belasten.",
        "Gut für höhere Wiederholungen und als Abschluss."
      ],
      tipps: [
        "Leicht nach hinten lehnen erhöht die Dehnung des geraden Schenkelmuskels.",
        "Zehen leicht anziehen und nach oben zeigen lassen.",
        "10 bis 20 Wiederholungen bis kurz vor die Ausbelastung funktionieren gut."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang oder weniger Gewicht. Schwerer: einbeinig, Pause oben oder langsame Abwärtsphase.",
      sicherheit: "Bei Beschwerden an Kniescheibe oder vorderem Kreuzband den Bewegungsumfang und das Gewicht anpassen und gegebenenfalls ärztlich abklären lassen."
    }
  },
  {
    id: "beinstrecker_einbeinig",
    name: "Beinstrecker einbeinig",
    auch: ["Single-Leg Leg Extension", "Unilateral Leg Extension"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    geraete: [["maschine_beine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Beinstrecker mit nur einem Bein. Du kannst dich ganz auf eine Seite konzentrieren, Kraftunterschiede ausgleichen und mit wenig Gewicht einen starken Reiz setzen.",
      ausfuehrung: [
        "Stell Rückenlehne und Fußpolster wie beim beidbeinigen Beinstrecker ein, das Knie liegt an der Drehachse.",
        "Leg ein Bein unter das Polster, das andere Bein bleibt locker daneben oder hinter dem Polster.",
        "Halt dich an den Griffen fest und drück das Gesäß in den Sitz.",
        "Streck das Bein kontrolliert, bis das Knie fast gestreckt ist, und halte oben eine Sekunde.",
        "Lass das Gewicht in zwei bis drei Sekunden ab.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Beim Strecken ausatmen, beim Ablassen einatmen.",
      fehler: [
        "Becken dreht sich: fest an den Griffen halten.",
        "Zu schweres Gewicht: etwa 40 bis 50 Prozent des beidbeinigen Gewichts reichen.",
        "Schwung aus dem anderen Bein: freies Bein ruhig halten.",
        "Bewegung zu klein: volle Streckung und kontrolliertes Ablassen."
      ],
      vorteile: [
        "Gleicht Unterschiede zwischen den Beinen aus.",
        "Gute Muskel-Gehirn-Verbindung zum Quadrizeps.",
        "Wenig Gewicht für einen starken Reiz.",
        "Häufig in der Reha nach Knieverletzungen in Absprache mit Therapeuten genutzt."
      ],
      tipps: [
        "Beginne mit der schwächeren Seite.",
        "Ein bis zwei Sekunden Halten oben verstärkt den Reiz im verkürzten Bereich.",
        "Wenn die Maschine Teilbereiche begrenzen kann, nutze das bei empfindlichen Knien."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: längere Halteposition oder Teilwiederholungen am Ende.",
      sicherheit: "Bei Kniebeschwerden den Bewegungsumfang an die Beschwerdefreiheit anpassen."
    }
  },
  {
    id: "sissy_squat",
    name: "Sissy Squat",
    auch: ["Sissy Squat", "Sissy-Kniebeuge"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["bauch", "hueftbeuger"],
    geraete: [["wand"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 2,
    hinweis: "Mit einer Hand festhalten, Hüfte bleibt gestreckt.",
    info: {
      kurz: "Kniebeuge, bei der du dich auf die Fußballen stellst und mit gestreckter Hüfte nach hinten lehnst, während die Knie weit nach vorn wandern. Sie belastet den Quadrizeps in der Dehnung sehr stark, ganz ohne Gewicht.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte dich mit einer Hand an einer Wand, einem Rack oder einem Türrahmen fest.",
        "Hebe die Fersen an, sodass du auf den Fußballen stehst.",
        "Spann Gesäß und Bauch an, damit Hüfte und Oberkörper eine Linie bilden.",
        "Schieb die Knie nach vorn und lehn den Oberkörper gleichzeitig nach hinten, die Hüfte bleibt gestreckt.",
        "Senke dich so weit ab, bis du eine starke Dehnung im Oberschenkel spürst, die Knie sind dabei weit vor den Zehen.",
        "Drück dich über die Fußballen und den Quadrizeps wieder zurück in den Stand."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Hüfte knickt ein: Gesäß angespannt halten, sonst wird es eine normale Kniebeuge.",
        "Zu tief am Anfang: der Muskel und die Sehne brauchen Gewöhnung, mit kleinem Bewegungsumfang beginnen.",
        "Fersen am Boden: auf die Fußballen gehen, damit die Knie nach vorn können.",
        "Ruckartiges Hochkommen: kontrolliert und gleichmäßig arbeiten."
      ],
      vorteile: [
        "Sehr starke Belastung des Quadrizeps in gedehnter Position.",
        "Trainiert auch den geraden Schenkelmuskel, der über die Hüfte zieht.",
        "Kein Gerät nötig, nur ein Halt.",
        "Gut als Abschluss für die Oberschenkel."
      ],
      tipps: [
        "Halte zunächst mit beiden Händen fest und reduziere die Hilfe mit der Zeit.",
        "Eine Hantelscheibe vor der Brust macht die Übung schwerer, wenn 15 Wiederholungen leicht gehen.",
        "Mit einem Sissy-Squat-Gerät oder Füßen unter einem Polster wird der Stand stabiler."
      ],
      varianten: "Leichter: geringere Tiefe oder mehr Hilfe mit den Armen. Schwerer: Zusatzgewicht vor der Brust oder langsamere Abwärtsphase.",
      sicherheit: "Belastet Kniescheibe und Patellasehne stark. Bei Kniebeschwerden auslassen oder nur sehr vorsichtig mit kleinem Bewegungsumfang üben."
    }
  },
  {
    id: "reverse_nordic",
    name: "Reverse Nordic",
    auch: ["Reverse Nordic Curl", "Umgekehrter Nordic"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["hueftbeuger", "bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 150,
    gelenke: { knie: 2 },
    stufe: 2,
    hinweis: "Kniend, Hüfte gestreckt, nur so weit zurücklehnen, wie du kontrolliert zurückkommst.",
    info: {
      kurz: "Kniende Übung, bei der du dich mit gestreckter Hüfte nach hinten lehnst und wieder aufrichtest. Sie trainiert den Quadrizeps exzentrisch in langer Position und wird zur Vorbeugung von Verletzungen im Sport eingesetzt.",
      ausfuehrung: [
        "Knie dich auf eine Matte, die Knie hüftbreit, die Fußrücken liegen flach auf dem Boden.",
        "Richte dich auf, sodass Knie, Hüfte und Schultern eine Linie bilden, und spann Gesäß und Bauch an.",
        "Lehn dich langsam als Ganzes nach hinten, die Hüfte bleibt gestreckt.",
        "Geh nur so weit zurück, wie du die Linie halten und kontrolliert zurückkommen kannst.",
        "Zieh dich aus der Oberschenkelvorderseite wieder in die aufrechte Position.",
        "Halte die Arme vor der Brust verschränkt oder nach vorn gestreckt als Gegengewicht."
      ],
      atmung: "Beim Zurücklehnen einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Hüfte knickt ein: Gesäß fest anspannen, Körper bleibt ein Brett.",
        "Zu weit zurück am Anfang: Bewegungsumfang langsam steigern.",
        "Ins Hohlkreuz fallen: Bauch anspannen und Becken leicht nach vorn kippen.",
        "Harte Unterlage: Matte oder Kissen unter die Knie."
      ],
      vorteile: [
        "Stärkt den Quadrizeps in der Dehnung und exzentrisch.",
        "Dehnt gleichzeitig Hüftbeuger und Oberschenkelvorderseite.",
        "Wird zur Vorbeugung von Oberschenkel- und Kniebeschwerden im Lauf- und Ballsport eingesetzt.",
        "Ohne Gerät machbar."
      ],
      tipps: [
        "Ein Band an einem festen Punkt vor dir, das du festhältst, hilft beim Zurückkommen.",
        "Beginne mit 2 bis 3 Sätzen mit 5 bis 8 Wiederholungen.",
        "Gut als Ergänzung zu nordischen Hamstring-Übungen."
      ],
      varianten: "Leichter: kleiner Bewegungsumfang oder Band als Hilfe. Schwerer: weiter zurück, bis der Kopf fast den Boden berührt, oder langsamer.",
      sicherheit: "Bei Beschwerden an Kniescheibe, Patellasehne oder bei empfindlichen Knien im Kniestand auslassen oder nur mit kleinem Bewegungsumfang üben."
    }
  },
  {
    id: "spanish_squat",
    name: "Spanische Kniebeuge mit Band",
    auch: ["Spanish Squat", "Banded Spanish Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Band hinter den Knien fest verankern, Schienbeine bleiben senkrecht.",
    info: {
      kurz: "Kniebeuge mit einem kräftigen Band hinter den Knien, das an einem festen Punkt verankert ist. Das Band zieht die Knie nach hinten, sodass die Schienbeine senkrecht bleiben und der Quadrizeps bei geringer Belastung der Patellasehne arbeitet.",
      ausfuehrung: [
        "Befestige ein starkes Band oder zwei Bänder auf Kniehöhe an einem stabilen Rack oder Pfosten.",
        "Stell dich mit dem Gesicht zum Verankerungspunkt, leg das Band hinter beide Knie und geh rückwärts, bis es stark gespannt ist.",
        "Stell die Füße hüftbreit, lehn dich leicht in das Band und richte den Oberkörper auf.",
        "Senke dich ab, indem du die Hüfte nach hinten setzt, die Schienbeine bleiben senkrecht, das Band hält die Knie.",
        "Geh bis die Oberschenkel etwa waagerecht sind, der Oberkörper bleibt aufrecht.",
        "Drück dich wieder hoch und halte dabei die Spannung im Band."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Band zu locker: weiter zurückgehen, das Band muss dich halten.",
        "Oberkörper kippt nach vorn: aufrecht bleiben, als würdest du dich auf einen Stuhl setzen.",
        "Knie wandern nach vorn: das Band soll genau das verhindern, stärkere Spannung wählen.",
        "Verankerung instabil: nur an wirklich festen Punkten befestigen."
      ],
      vorteile: [
        "Starke Quadrizepsarbeit bei geringer Scherbelastung im Knie.",
        "Wird in der Physiotherapie bei Beschwerden der Patellasehne eingesetzt.",
        "Einfach und mit einem Band umsetzbar.",
        "Gute Aufwärmübung für Kniebeugetage."
      ],
      tipps: [
        "Ein Band um einen schweren Rahmen oder eine verschlossene Tür gelegt funktioniert auch zu Hause.",
        "Eine Pause von zwei bis drei Sekunden unten steigert die Wirkung.",
        "Als isometrische Variante in der tiefen Position halten."
      ],
      varianten: "Leichter: weniger Tiefe. Schwerer: tiefer, langsamer oder zusätzlich eine Kurzhantel vor der Brust.",
      sicherheit: "Bei akuten Kniebeschwerden vorab abklären lassen und nur schmerzfrei üben."
    }
  },
  {
    id: "spanish_squat_iso",
    name: "Spanische Kniebeuge isometrisch",
    auch: ["Isometric Spanish Squat", "Spanish Squat Hold"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess"],
    geraete: [["band"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "30 bis 45 Sekunden halten, Schienbeine senkrecht.",
    info: {
      kurz: "Haltevariante der spanischen Kniebeuge mit einem Band hinter den Knien. Langes isometrisches Halten wird häufig bei Beschwerden der Patellasehne genutzt und kräftigt den Quadrizeps sehr gezielt.",
      ausfuehrung: [
        "Befestige ein starkes Band auf Kniehöhe an einem festen Punkt und leg es hinter beide Knie.",
        "Geh rückwärts, bis das Band stark gespannt ist, Füße hüftbreit.",
        "Setz dich nach hinten ab, bis die Knie etwa 60 bis 90 Grad gebeugt sind, die Schienbeine bleiben senkrecht.",
        "Halte diese Position ruhig, der Oberkörper bleibt aufrecht, das Gewicht liegt auf der ganzen Fußsohle.",
        "Halte 30 bis 45 Sekunden, dann richte dich langsam auf.",
        "Mach eine Pause von etwa einer Minute und wiederhole drei bis fünf Mal."
      ],
      atmung: "Atme während des Haltens ruhig und gleichmäßig weiter.",
      fehler: [
        "Luft anhalten: gleichmäßig weiteratmen.",
        "Position sinkt ab: Kniewinkel konstant halten, eventuell etwas höher anfangen.",
        "Zu wenig Bandspannung: weiter zurückgehen.",
        "Oberkörper nach vorn geneigt: aufrecht sitzen wie an einer unsichtbaren Wand."
      ],
      vorteile: [
        "Hohe Muskelspannung bei geringer Gelenkbewegung.",
        "Kann bei empfindlicher Patellasehne gut verträglich sein.",
        "Einfach dosierbar über Winkel und Zeit.",
        "Gute Vorbereitung auf dynamische Beinübungen."
      ],
      tipps: [
        "Der Kniewinkel lässt sich schrittweise vertiefen, wenn alles beschwerdefrei bleibt.",
        "Gut als Teil des Aufwärmens vor Kniebeugen oder Sprüngen.",
        "Eine leichte Kurzhantel vor der Brust erhöht die Intensität."
      ],
      varianten: "Leichter: kürzer halten oder weniger tief. Schwerer: länger, tiefer oder mit Zusatzgewicht.",
      sicherheit: "Bei Kniebeschwerden vorher abklären lassen. Spannung darf deutlich spürbar, aber nicht schmerzhaft sein."
    }
  },
  {
    id: "terminale_knieextension",
    name: "Terminale Knieextension mit Band",
    auch: ["Terminal Knee Extension", "TKE", "Banded TKE"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    geraete: [["band"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Kleine Bewegung, bei der du das Knie gegen den Zug eines Bandes aus leichter Beugung voll durchstreckst. Die Übung trainiert die letzten Grad der Kniestreckung und wird oft in Physiotherapie und Aufwärmen eingesetzt.",
      ausfuehrung: [
        "Befestige ein Band auf Kniehöhe an einem festen Punkt und leg es von vorn um die Kniekehle eines Beins.",
        "Geh rückwärts, bis das Band gespannt ist, und stell dich mit dem Band-Bein leicht vor das andere.",
        "Lass das Band das Knie leicht nach vorn in eine Beugung von etwa 20 bis 30 Grad ziehen.",
        "Streck das Knie kräftig durch, indem du die Kniekehle nach hinten gegen das Band drückst, die Ferse bleibt am Boden.",
        "Halte die gestreckte Position eine bis zwei Sekunden und spür den Oberschenkel über dem Knie arbeiten.",
        "Lass das Knie kontrolliert wieder nach vorn und mach alle Wiederholungen, bevor du die Seite wechselst."
      ],
      atmung: "Beim Strecken ausatmen, beim Nachgeben einatmen.",
      fehler: [
        "Bewegung aus der Hüfte: nur das Knie bewegt sich, Hüfte bleibt ruhig.",
        "Ferse hebt ab: ganzer Fuß bleibt am Boden.",
        "Band zu locker: weiter zurückgehen.",
        "Zu schnell: oben kurz halten und bewusst anspannen."
      ],
      vorteile: [
        "Trainiert die volle Kniestreckung und den inneren Quadrizepsanteil.",
        "Sehr gelenkschonend.",
        "Gut als Aufwärmübung für Kniebeugen und Laufeinheiten.",
        "Fester Bestandteil vieler Reha-Programme."
      ],
      tipps: [
        "15 bis 25 Wiederholungen mit bewusster Anspannung oben.",
        "Am Kabelzug lässt sich der Widerstand genauer steigern.",
        "Kombiniere sie mit Spanischer Kniebeuge im Aufwärmen."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: stärkeres Band, längeres Halten oder auf einem Bein ohne Unterstützung.",
      sicherheit: "Nach Knieoperationen nur in Absprache mit der behandelnden Therapeutin oder dem Therapeuten."
    }
  },
  {
    id: "wandsitzen",
    name: "Wandsitzen",
    auch: ["Wall Sit", "Wall Squat Hold", "Stuhl an der Wand"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    schwerer: "wandsitzen_einbeinig",
    info: {
      kurz: "Statisches Halten in sitzender Position mit dem Rücken an der Wand. Wandsitzen trainiert die Kraftausdauer der Oberschenkel ohne Gerät und ohne Bewegung im Gelenk.",
      ausfuehrung: [
        "Stell dich mit dem Rücken an eine Wand und die Füße etwa eine Fußlänge davor, hüftbreit.",
        "Rutsch an der Wand nach unten, bis die Oberschenkel etwa waagerecht und die Knie etwa 90 Grad gebeugt sind.",
        "Die Knie stehen über den Fußgelenken, nicht davor.",
        "Drück den unteren Rücken leicht an die Wand und lass die Arme locker hängen oder verschränke sie.",
        "Halte die Position die vorgegebene Zeit, das Gewicht liegt auf den Fersen und der ganzen Fußsohle.",
        "Rutsch zum Ende an der Wand nach oben in den Stand."
      ],
      atmung: "Atme ruhig und gleichmäßig weiter, nicht pressen.",
      fehler: [
        "Hände auf den Oberschenkeln abstützen: Arme frei lassen.",
        "Knie vor den Zehen: Füße weiter von der Wand weg.",
        "Zu hoch sitzen: Oberschenkel möglichst waagerecht.",
        "Luft anhalten: ruhig weiteratmen."
      ],
      vorteile: [
        "Kraftausdauer für den Quadrizeps ohne Gerät.",
        "Gelenkschonend durch fehlende Bewegung.",
        "Kann bei Kniebeschwerden mit angepasstem Winkel gut verträglich sein.",
        "Gute Grundlage für Ski, Fußball und Wandern."
      ],
      tipps: [
        "Beginne mit 3 Sätzen à 30 Sekunden und steigere die Zeit.",
        "Ein Ball zwischen den Knien zusammengedrückt fordert zusätzlich die Adduktoren.",
        "Mit einer Hantelscheibe auf den Oberschenkeln wird es schwerer."
      ],
      varianten: "Leichter: höhere Position mit weniger Kniebeugung. Schwerer: tiefer, länger, mit Gewicht auf den Oberschenkeln oder einbeinig.",
      sicherheit: "Bei Bluthochdruck nicht pressen und keine sehr langen Halteserien. Bei Kniebeschwerden den Winkel schmerzfrei wählen."
    }
  },
  {
    id: "wandsitzen_einbeinig",
    name: "Wandsitzen einbeinig",
    auch: ["Single-Leg Wall Sit"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess", "gesaess_mittel"],
    geraete: [["wand"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    info: {
      kurz: "Wandsitzen auf nur einem Bein. Das Standbein trägt das ganze Körpergewicht, wodurch Kraft und Stabilität jeder Seite einzeln gefordert werden.",
      ausfuehrung: [
        "Geh wie beim normalen Wandsitzen in die Position mit etwa 90 Grad im Knie, Rücken an der Wand.",
        "Verlagere das Gewicht auf ein Bein und heb das andere Bein langsam gestreckt oder gebeugt vom Boden ab.",
        "Halte das Knie des Standbeins genau über dem Fuß, es darf nicht nach innen kippen.",
        "Halte das Becken waagerecht und den Rücken an der Wand.",
        "Halte die vorgegebene Zeit, stell das Bein ab und wechsle die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Knie fällt nach innen: Knie aktiv nach außen über die Zehen drücken.",
        "Becken kippt zur Seite: Rumpf anspannen und Becken gerade halten.",
        "Zu tief begonnen: mit höherer Position starten.",
        "Hände stützen auf dem Bein: Arme frei oder an der Wand."
      ],
      vorteile: [
        "Fordert Kraft und Beinachsenstabilität jeder Seite einzeln.",
        "Deckt Seitenunterschiede auf.",
        "Ohne Gerät machbar.",
        "Gelenkschonender Einstieg in einbeiniges Training."
      ],
      tipps: [
        "Beginne mit 15 bis 20 Sekunden pro Seite.",
        "Schau im Spiegel auf die Knieposition.",
        "Gute Vorbereitung auf Pistol Squats und Step-downs."
      ],
      varianten: "Leichter: höhere Position oder Zehenspitzen des freien Beins am Boden. Schwerer: tiefer oder länger halten.",
      sicherheit: "Bei Kniebeschwerden nur schmerzfrei und mit geringem Kniewinkel."
    }
  },
  // ---------- Bulgarische Split-Kniebeuge und Split-Kniebeuge ----------
  {
    id: "bulgarisch_kh",
    name: "Bulgarische Split-Kniebeuge mit Kurzhanteln",
    auch: ["Bulgarian Split Squat", "DB Bulgarian Split Squat", "Rear-Foot-Elevated Split Squat", "RFESS"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel", "hueftbeuger"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel", "box"], ["kettlebell", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    hinweis: "Hinterer Fuß auf der Bank, vorderes Bein macht die Arbeit.",
    info: {
      kurz: "Split-Kniebeuge mit dem hinteren Fuß auf einer Bank und Kurzhanteln in den Händen. Eine der wirksamsten einbeinigen Übungen für Quadrizeps und Gesäß, mit großem Bewegungsumfang und hoher Stabilitätsanforderung.",
      ausfuehrung: [
        "Stell dich etwa eine große Schrittlänge vor eine Bank und leg den Spann des hinteren Fußes auf die Bankkante.",
        "Halte je eine Kurzhantel seitlich neben dem Körper, Schultern tief, Brust aufrecht.",
        "Stell den vorderen Fuß so, dass in der tiefsten Position das Knie etwa über dem Fuß oder leicht davor steht.",
        "Senke dich kontrolliert gerade nach unten ab, bis das hintere Knie fast den Boden berührt.",
        "Das vordere Knie zeigt über die Zehen, das Becken bleibt waagerecht und zeigt nach vorn.",
        "Drück dich aus der ganzen Fußsohle des vorderen Beins wieder nach oben.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Vorderer Fuß zu nah an der Bank: die Ferse hebt ab, Fuß weiter nach vorn.",
        "Vorderes Knie fällt nach innen: Knie über die zweite Zehe führen und Gewicht reduzieren.",
        "Mit dem hinteren Bein abdrücken: das hintere Bein ist nur Stütze.",
        "Becken dreht sich: Hüfte bleibt nach vorn ausgerichtet, Rumpf anspannen.",
        "Bank zu hoch: Kniehöhe oder etwas niedriger ist ideal."
      ],
      vorteile: [
        "Starker Reiz für Quadrizeps und Gesäß mit vergleichsweise wenig Gewicht.",
        "Gleicht Seitenunterschiede aus.",
        "Verbessert Balance und Stabilität im Hüft- und Kniegelenk.",
        "Geringere Belastung der Wirbelsäule als schwere Kniebeugen.",
        "Dehnt nebenbei den Hüftbeuger des hinteren Beins."
      ],
      tipps: [
        "Kurzer Stand und aufrechter Oberkörper betonen den Quadrizeps, langer Stand und leichte Vorneigung das Gesäß.",
        "Beginne mit der schwächeren Seite und mach auf der stärkeren gleich viele Wiederholungen.",
        "Zughilfen helfen, wenn der Griff vor den Beinen ermüdet.",
        "Ein Balancepad unter dem hinteren Fuß kann den Spann entlasten."
      ],
      varianten: "Leichter: ohne Gewicht oder normale Split-Kniebeuge. Schwerer: mit Langhantel, Pause unten oder Eineinhalb-Wiederholungen.",
      sicherheit: "Bei Knie- oder Hüftbeschwerden mit geringerer Tiefe beginnen. Bei Gleichgewichtsproblemen eine Hand an einem Halt.",
      golf: "Stärkt jedes Bein einzeln und verbessert die Stabilität im Stand. Ein kräftiges Führungsbein kann im Durchschwung besser gegen die Rotation stemmen und die Kraft vom Boden übertragen."
    }
  },
  {
    id: "bulgarisch_lh",
    name: "Bulgarische Split-Kniebeuge mit Langhantel",
    auch: ["Barbell Bulgarian Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel", "bauch"],
    geraete: [["langhantel", "bank"], ["langhantel", "box"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1, huefte: 1, ruecken: 1 },
    stufe: 3,
    einseitig: true,
    sport: ["golf", "fussball"],
    golf: 1,
    info: {
      kurz: "Bulgarische Split-Kniebeuge mit der Langhantel auf dem oberen Rücken. Der Griff begrenzt nicht mehr, dadurch sind schwerere Lasten möglich, aber auch die Balance ist anspruchsvoller.",
      ausfuehrung: [
        "Leg die Langhantel im Rack wie zur Kniebeuge auf den oberen Rücken und tritt zurück.",
        "Geh vorsichtig zur Bank und leg den hinteren Fuß mit dem Spann auf die Kante. Alternativ steht die Bank direkt hinter dem Rack.",
        "Stell den vorderen Fuß eine große Schrittlänge vor die Bank, spann den Rumpf an.",
        "Senke dich kontrolliert ab, bis das hintere Knie fast den Boden berührt, Oberkörper aufrecht.",
        "Das vordere Knie folgt den Zehen, die Hüfte bleibt nach vorn ausgerichtet.",
        "Drück dich aus dem vorderen Fuß hoch und halte die Stange ruhig."
      ],
      atmung: "Oben einatmen und halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Wackeln zur Seite: Stand etwas breiter, wie auf Schienen statt auf einem Seil.",
        "Oberkörper kippt: Rumpf fest und Stange über der Mitte des vorderen Fußes.",
        "Zu schwer begonnen: erst mit Kurzhanteln sicher werden.",
        "Unsicheres Ein- und Aussteigen: Bank nah am Rack und Sicherheitsablagen nutzen."
      ],
      vorteile: [
        "Mehr Last möglich als mit Kurzhanteln.",
        "Hohe Anforderung an Rumpf und Balance.",
        "Starker einbeiniger Kraftreiz.",
        "Gut für Fortgeschrittene, deren Griff bei Kurzhanteln begrenzt."
      ],
      tipps: [
        "Eine Multipresse ist eine stabile Zwischenstufe.",
        "Mittlere Wiederholungszahlen von 5 bis 10 pro Seite passen gut.",
        "Langsames Absenken schult die Balance."
      ],
      varianten: "Leichter: mit Kurzhanteln oder an der Multipresse. Schwerer: Pause unten.",
      sicherheit: "Bei Gleichgewichtsproblemen oder Rückenbeschwerden die Kurzhantelvariante wählen."
    }
  },
  {
    id: "bulgarisch_multipresse",
    name: "Bulgarische Split-Kniebeuge an der Multipresse",
    auch: ["Smith Machine Bulgarian Split Squat", "Smith Machine Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [["multipresse", "bank"], ["multipresse", "box"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Bulgarische Split-Kniebeuge mit der geführten Stange der Multipresse. Die Maschine übernimmt die Balance, sodass du das vordere Bein sehr gezielt und schwer trainieren kannst.",
      ausfuehrung: [
        "Stell eine Bank hinter die Multipresse und die Sicherheitsanschläge knapp über Kniehöhe in der tiefsten Position ein.",
        "Stell dich unter die Stange, sie liegt auf dem oberen Rücken. Der vordere Fuß steht leicht vor der Stange.",
        "Leg den hinteren Fuß mit dem Spann auf die Bank, dreh die Stange aus den Haken.",
        "Senke dich kontrolliert ab, bis das hintere Knie fast den Boden berührt.",
        "Drück dich aus dem vorderen Fuß hoch, ohne das Knie oben ganz zu blockieren.",
        "Nach allen Wiederholungen die Stange einhängen und die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Vorderer Fuß direkt unter der Stange: Druck geht auf die Zehen, Fuß etwas nach vorn.",
        "Hinteres Bein drückt mit: bewusst nur vorn arbeiten.",
        "Hüfte verdreht: Becken bleibt gerade.",
        "Sicherheitsanschläge vergessen: immer einstellen."
      ],
      vorteile: [
        "Maximale Konzentration auf ein Bein ohne Balanceproblem.",
        "Mehr Gewicht als mit Kurzhanteln möglich.",
        "Sicher auch ohne Partner.",
        "Gut für Muskelaufbau mit hohen Wiederholungen."
      ],
      tipps: [
        "Fuß weiter vorn betont Gesäß, näher an der Stange den Quadrizeps.",
        "Langsame Abwärtsphase und kurze Pause unten verstärken den Reiz.",
        "Starte mit leichter Stange, um die richtige Fußposition zu finden."
      ],
      varianten: "Leichter: normale Split-Kniebeuge an der Multipresse. Schwerer: mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Knie- oder Hüftbeschwerden mit geringer Tiefe beginnen."
    }
  },
  {
    id: "bulgarisch_kg",
    name: "Bulgarische Split-Kniebeuge ohne Gewicht",
    auch: ["Bodyweight Bulgarian Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "adduktoren"],
    geraete: [["bank"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    schwerer: "einbein_box_kniebeuge",
    hinweis: "Hinterer Fuß auf Bank, Stuhl oder Treppenstufe.",
    info: {
      kurz: "Bulgarische Split-Kniebeuge mit dem eigenen Körpergewicht, der hintere Fuß liegt auf einer Bank, einem Stuhl oder einer Stufe. Ideal für zu Hause und zum Erlernen der Technik.",
      ausfuehrung: [
        "Stell dich etwa eine große Schrittlänge vor eine Bank, einen Stuhl oder eine Treppenstufe.",
        "Leg den Spann des hinteren Fußes auf die Kante, die Hände in die Hüften oder vor die Brust.",
        "Richte den Oberkörper auf und spann den Bauch an.",
        "Senke dich gerade nach unten, bis das hintere Knie fast den Boden berührt.",
        "Das vordere Knie zeigt über die Zehen, die Ferse bleibt am Boden.",
        "Drück dich aus dem vorderen Fuß hoch und wiederhole, dann Seitenwechsel."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Stand zu kurz: Ferse hebt ab, vorderen Fuß weiter nach vorn.",
        "Knie fällt nach innen: langsam und kontrolliert über den Zehen führen.",
        "Schwanken: Blick auf einen festen Punkt, eventuell eine Hand an einem Halt.",
        "Flache Wiederholungen: bis knapp über den Boden absenken."
      ],
      vorteile: [
        "Sehr effektive Beinübung ohne Gewicht.",
        "Verbessert Balance und einbeinige Stabilität.",
        "Gleicht Seitenunterschiede aus.",
        "Gut für zu Hause und unterwegs."
      ],
      tipps: [
        "Langsames Tempo mit drei Sekunden Absenken macht sie deutlich schwerer.",
        "Ein Rucksack mit Büchern kann als Zusatzgewicht dienen.",
        "Ab 15 sauberen Wiederholungen pro Seite Gewicht dazunehmen."
      ],
      varianten: "Leichter: normale Split-Kniebeuge mit beiden Füßen am Boden. Schwerer: mit Kurzhanteln, Pausen oder einbeinige Kniebeuge.",
      sicherheit: "Auf einen rutschfesten, stabilen Untergrund für den hinteren Fuß achten.",
      golf: "Trainiert jedes Bein einzeln für einen stabilen Stand und eine kräftige Gewichtsverlagerung im Schwung, auch ohne Fitnessstudio."
    }
  },
  {
    id: "bulgarisch_schlinge",
    name: "Split-Kniebeuge im Schlingentrainer",
    auch: ["TRX Split Squat", "Suspended Lunge", "Suspension Bulgarian Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball"],
    golf: 1,
    info: {
      kurz: "Split-Kniebeuge mit dem hinteren Fuß in der Schlaufe eines Schlingentrainers. Der instabile hintere Fuß fordert Gleichgewicht und Rumpf zusätzlich und dehnt den Hüftbeuger kräftig.",
      ausfuehrung: [
        "Stell den Schlingentrainer auf etwa Wadenhöhe ein und dreh dich mit dem Rücken zum Ankerpunkt.",
        "Leg einen Fuß von hinten in beide Schlaufen oder in den Fußhalter, der Spann zeigt nach unten.",
        "Hüpf mit dem Standbein nach vorn, bis du stabil stehst, Hände in die Hüften oder vor die Brust.",
        "Senke dich ab, indem das Standbein beugt und das hintere Bein nach hinten wegrollt.",
        "Geh tief, bis der Oberschenkel des Standbeins etwa waagerecht ist, das Knie bleibt über dem Fuß.",
        "Drück dich aus dem Standbein hoch und zieh das hintere Bein dabei kontrolliert zurück."
      ],
      atmung: "Beim Absenken einatmen, beim Aufrichten ausatmen.",
      fehler: [
        "Hinteres Bein schwingt unkontrolliert: langsam arbeiten und Rumpf anspannen.",
        "Standknie fällt nach innen: Knie über den Zehen.",
        "Oberkörper kippt nach vorn: aufrecht bleiben.",
        "Schlaufe zu hoch: Fuß etwa auf Kniehöhe des Standbeins."
      ],
      vorteile: [
        "Hohe Anforderung an Gleichgewicht und Rumpf.",
        "Kräftige Dehnung des Hüftbeugers am hinteren Bein.",
        "Gelenkschonend durch weiche Bewegung.",
        "Gut für zu Hause mit einem Schlingentrainer an der Tür."
      ],
      tipps: [
        "Bei Unsicherheit neben einer Wand üben.",
        "Langsames Tempo betont die Kontrolle.",
        "Mit einer Kurzhantel in der Hand der Gegenseite lässt sie sich steigern."
      ],
      varianten: "Leichter: Bulgarische Split-Kniebeuge auf der Bank. Schwerer: mit Kurzhanteln oder langsamer.",
      sicherheit: "Bei Hüft- oder Leistenbeschwerden den Bewegungsumfang reduzieren."
    }
  },
  {
    id: "split_squat_kh",
    name: "Split-Kniebeuge mit Kurzhanteln",
    auch: ["Split Squat", "Dumbbell Split Squat", "Static Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    info: {
      kurz: "Stationärer Ausfallschritt mit beiden Füßen am Boden, ohne Schritt nach vorn oder hinten. Die Split-Kniebeuge ist stabiler als die bulgarische Variante und eine ideale Einstiegsübung ins einbeinige Training.",
      ausfuehrung: [
        "Stell dich in Schrittstellung, die Füße hüftbreit nebeneinander wie auf zwei Schienen, eine große Schrittlänge auseinander.",
        "Halte je eine Kurzhantel seitlich, die hintere Ferse ist angehoben.",
        "Richte den Oberkörper auf, spann den Bauch an.",
        "Senke dich gerade nach unten ab, bis das hintere Knie knapp über dem Boden ist.",
        "Das vordere Knie zeigt über die Zehen, beide Knie sind in der tiefsten Position etwa 90 Grad gebeugt.",
        "Drück dich vor allem aus dem vorderen Bein hoch und bleib in der Schrittstellung.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Füße auf einer Linie: hüftbreit stellen, sonst wackelst du.",
        "Vorderer Fuß zu nah: Knie schiebt weit nach vorn, Schritt größer.",
        "Oberkörper kippt nach vorn: aufrecht und Bauch fest.",
        "Nur halb tief: hinteres Knie fast bis zum Boden."
      ],
      vorteile: [
        "Stabiler Einstieg in einbeinige Kraft.",
        "Gleicht Seitenunterschiede aus.",
        "Trainiert Quadrizeps und Gesäß mit wenig Gewicht.",
        "Verbessert Hüftstabilität und Gleichgewicht."
      ],
      tipps: [
        "Ein Kissen unter dem hinteren Knie zeigt dir die richtige Tiefe.",
        "Für mehr Gesäß den Oberkörper leicht nach vorn neigen.",
        "Gut als Vorbereitung auf die Bulgarische Split-Kniebeuge."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: vorderer Fuß erhöht oder Bulgarische Split-Kniebeuge.",
      sicherheit: "Bei Kniebeschwerden mit geringer Tiefe beginnen.",
      golf: "Schult die Stabilität in Schrittstellung und kräftigt das Führungsbein, das im Durchschwung das Körpergewicht aufnimmt."
    }
  },
  {
    id: "split_squat_kg",
    name: "Split-Kniebeuge ohne Gewicht",
    auch: ["Bodyweight Split Squat", "Static Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "laufen"],
    golf: 1,
    schwerer: "bulgarisch_kg",
    info: {
      kurz: "Stationärer Ausfallschritt mit dem eigenen Körpergewicht. Die einfachste einbeinige Kniebeuge, gut zum Lernen der Schrittstellung und für zu Hause.",
      ausfuehrung: [
        "Stell dich in Schrittstellung, Füße hüftbreit, eine große Schrittlänge auseinander, die hintere Ferse angehoben.",
        "Hände in die Hüften oder vor die Brust, Oberkörper aufrecht.",
        "Senke dich gerade nach unten ab, bis das hintere Knie knapp über dem Boden ist.",
        "Das vordere Knie bleibt über dem Fuß, das Gewicht liegt auf der ganzen vorderen Fußsohle.",
        "Drück dich aus dem vorderen Bein wieder hoch.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Füße auf einer Linie: hüftbreit stellen.",
        "Oberkörper fällt nach vorn: aufrecht bleiben.",
        "Vorderes Knie fällt nach innen: Knie über den Zehen.",
        "Abstoßen vom hinteren Fuß: das vordere Bein arbeitet."
      ],
      vorteile: [
        "Leicht erlernbar und ohne Gerät.",
        "Fördert Gleichgewicht und Beinachsenkontrolle.",
        "Gleicht Seitenunterschiede aus.",
        "Gute Grundlage für Ausfallschritte."
      ],
      tipps: [
        "Halt dich anfangs leicht an einer Wand fest.",
        "Drei Sekunden absenken macht es sofort schwerer.",
        "Ab 15 sauberen Wiederholungen zur Bulgarischen Split-Kniebeuge wechseln."
      ],
      varianten: "Leichter: geringere Tiefe oder mit Halt. Schwerer: Bulgarische Split-Kniebeuge oder mit Kurzhanteln.",
      sicherheit: "Bei Kniebeschwerden nur so tief wie schmerzfrei."
    }
  },
  {
    id: "split_squat_lh",
    name: "Split-Kniebeuge mit Langhantel",
    auch: ["Barbell Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Split-Kniebeuge mit der Langhantel auf dem oberen Rücken. Der hohe Lastschwerpunkt fordert Rumpf und Balance und erlaubt mehr Gewicht als mit Kurzhanteln.",
      ausfuehrung: [
        "Nimm die Langhantel im Rack wie zur Kniebeuge auf den oberen Rücken und tritt zurück.",
        "Mach einen großen Schritt nach vorn, beide Füße hüftbreit wie auf Schienen, die hintere Ferse angehoben.",
        "Spann den Rumpf an und senke dich gerade nach unten, bis das hintere Knie knapp über dem Boden ist.",
        "Das vordere Knie folgt den Zehen, der Oberkörper bleibt aufrecht.",
        "Drück dich aus dem vorderen Bein hoch und bleib in der Schrittstellung.",
        "Nach allen Wiederholungen die Füße zusammenstellen und die Seite wechseln."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Schwanken: Füße breiter wie auf zwei Schienen stellen.",
        "Stange kippt: Rumpf fest und Ellbogen unter der Stange.",
        "Zu wenig Tiefe: hinteres Knie fast bis zum Boden.",
        "Gewicht auf dem hinteren Bein: vorderes Bein drückt."
      ],
      vorteile: [
        "Mehr Last als mit Kurzhanteln, kein Griff als Grenze.",
        "Starke Rumpfstabilität.",
        "Gute Übertragung auf Sport mit Schrittstellung.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Sicherheitsablagen im Rack auf Hüfthöhe einstellen und im Rack arbeiten.",
        "Mit Frontgriff als Front Split Squat wird der Quadrizeps stärker gefordert.",
        "5 bis 10 Wiederholungen pro Seite passen gut."
      ],
      varianten: "Leichter: mit Kurzhanteln. Schwerer: Bulgarische Split-Kniebeuge mit Langhantel.",
      sicherheit: "Bei Gleichgewichtsproblemen zuerst mit Kurzhanteln oder an der Multipresse trainieren."
    }
  },
  {
    id: "split_squat_ffe",
    name: "Split-Kniebeuge mit erhöhtem Vorderfuß",
    auch: ["Front-Foot-Elevated Split Squat", "FFE Split Squat", "Deficit Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "hueftbeuger"],
    geraete: [["kurzhantel", "hantelscheibe"], ["kurzhantel", "box"], ["kettlebell", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Split-Kniebeuge mit dem vorderen Fuß auf einer niedrigen Erhöhung von fünf bis fünfzehn Zentimetern. Der größere Bewegungsumfang belastet Quadrizeps und Gesäß stärker in der Dehnung und ist stabiler als die bulgarische Variante.",
      ausfuehrung: [
        "Stell den vorderen Fuß auf eine stabile Erhöhung wie eine Hantelscheibe oder eine niedrige Stufe.",
        "Mach mit dem anderen Bein einen großen Schritt zurück, die hintere Ferse ist angehoben, Füße hüftbreit.",
        "Halte die Kurzhanteln seitlich, Oberkörper aufrecht, Bauch angespannt.",
        "Senke dich ab, bis das hintere Knie fast den Boden berührt, das tiefer liegt als der vordere Fuß.",
        "Das vordere Knie darf über die Zehen wandern, die Ferse bleibt auf der Erhöhung.",
        "Drück dich aus dem vorderen Bein hoch und wiederhole, dann Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Erhöhung zu hoch: anfangs fünf bis zehn Zentimeter reichen.",
        "Vordere Ferse hebt ab: Schritt etwas größer.",
        "Wackelige Unterlage: nur stabile, rutschfeste Erhöhungen.",
        "Tiefe wird nicht genutzt: der Vorteil liegt im größeren Bewegungsumfang."
      ],
      vorteile: [
        "Größerer Bewegungsumfang für mehr Dehnung unter Last.",
        "Stabiler als die bulgarische Variante, da beide Füße am Boden sind.",
        "Sehr effektiv für Muskelaufbau an Quadrizeps und Gesäß.",
        "Fördert Hüftbeweglichkeit."
      ],
      tipps: [
        "Wird von vielen Trainern als Alternative zur Bulgarischen Split-Kniebeuge empfohlen, wenn der hintere Fuß auf der Bank stört.",
        "Langsame Abwärtsphase betont die Dehnung.",
        "Mit Langhantel oder Multipresse lässt sie sich schwer belasten."
      ],
      varianten: "Leichter: ohne Erhöhung oder ohne Gewicht. Schwerer: höhere Erhöhung oder schwerere Hanteln.",
      sicherheit: "Bei Knie- oder Hüftbeschwerden die Höhe gering halten."
    }
  },
  {
    id: "split_squat_iso",
    name: "Isometrische Split-Kniebeuge",
    auch: ["Isometric Split Squat Hold", "Split Squat Iso Hold", "Lunge Hold"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [[], ["kurzhantel"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    info: {
      kurz: "Halten der tiefen Position einer Split-Kniebeuge. Die Übung stärkt Quadrizeps und Gesäß in einer festen Gelenkposition und wird häufig bei Kniebeschwerden oder zur Vorbereitung auf dynamische Übungen genutzt.",
      ausfuehrung: [
        "Stell dich in Schrittstellung, Füße hüftbreit, eine große Schrittlänge auseinander.",
        "Senke dich ab, bis das hintere Knie etwa eine Handbreit über dem Boden schwebt.",
        "Halte die Position: vorderes Knie über dem Fuß, Oberkörper aufrecht, Bauch angespannt.",
        "Verteile das Gewicht zu etwa 70 bis 80 Prozent auf das vordere Bein.",
        "Halte die vorgegebene Zeit, richte dich auf und wechsle die Seite."
      ],
      atmung: "Gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Hinteres Knie liegt ab: aktiv schweben lassen.",
        "Becken kippt zur Seite: Rumpf anspannen.",
        "Vorderes Knie fällt nach innen: Knie über den Zehen halten.",
        "Luft anhalten: ruhig weiteratmen."
      ],
      vorteile: [
        "Hohe Muskelspannung bei ruhigem Gelenk.",
        "Gute Ergänzung bei empfindlichen Knien.",
        "Verbessert Stabilität und Kraftausdauer in Schrittstellung.",
        "Ohne Gerät machbar."
      ],
      tipps: [
        "Beginne mit 20 bis 30 Sekunden pro Seite.",
        "Kurzhanteln in den Händen machen es schwerer.",
        "Als Abschluss nach dynamischen Split-Kniebeugen sehr fordernd."
      ],
      varianten: "Leichter: höhere Position. Schwerer: tiefere Position, Zusatzgewicht oder hinterer Fuß erhöht.",
      sicherheit: "Bei Bluthochdruck nicht pressen. Bei Kniebeschwerden den Winkel schmerzfrei wählen."
    }
  },
  {
    id: "split_squat_band",
    name: "Split-Kniebeuge mit Band",
    auch: ["Banded Split Squat", "Resistance Band Split Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Split-Kniebeuge mit einem großen Widerstandsband unter dem vorderen Fuß und über den Schultern. Der Widerstand steigt nach oben, die Übung bleibt gelenkschonend und ist überall machbar.",
      ausfuehrung: [
        "Stell den vorderen Fuß mittig auf ein großes Band.",
        "Mach mit dem anderen Bein einen großen Schritt zurück, Füße hüftbreit.",
        "Geh in die tiefe Position und führe das Band über die Schultern oder halte es auf Schulterhöhe in den Händen.",
        "Drück dich aus dem vorderen Bein gegen den Widerstand nach oben.",
        "Senke dich kontrolliert wieder ab, bis das hintere Knie fast den Boden berührt.",
        "Mach alle Wiederholungen und wechsle die Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Band rutscht vom Fuß: mittig darauf stehen, Schuhe mit Profil tragen.",
        "Zurückschnellen lassen: Abwärtsphase kontrollieren.",
        "Oberkörper beugt sich: aufrecht bleiben.",
        "Füße auf einer Linie: hüftbreit stellen."
      ],
      vorteile: [
        "Gelenkschonend durch wenig Widerstand in der Tiefe.",
        "Überall und auf Reisen machbar.",
        "Gute Steigerung zur Split-Kniebeuge ohne Gewicht.",
        "Fördert kraftvolles Strecken."
      ],
      tipps: [
        "Kombiniere das Band mit einer Kurzhantel, wenn du zu Hause mehr Widerstand brauchst.",
        "15 bis 20 Wiederholungen pro Seite funktionieren mit Bändern gut.",
        "Band regelmäßig auf Risse prüfen."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: stärkeres Band oder hinterer Fuß erhöht.",
      sicherheit: "Band vorher auf Beschädigungen prüfen."
    }
  },
  {
    id: "kickstand_kniebeuge",
    name: "Kickstand-Kniebeuge",
    auch: ["Kickstand Squat", "B-Stance Squat", "Staggered Stance Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "adduktoren"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf"],
    golf: 2,
    info: {
      kurz: "Kniebeuge mit versetztem Stand: ein Fuß steht flach, der andere mit der Fußspitze etwas zurückgesetzt und dient nur als Stütze. So wird ein Bein überwiegend belastet, aber das Gleichgewicht bleibt leichter als bei echten einbeinigen Übungen.",
      ausfuehrung: [
        "Stell ein Bein flach auf den Boden und setz den anderen Fuß etwa eine halbe Fußlänge zurück, nur der Fußballen berührt den Boden.",
        "Halte eine Kurzhantel oder Kettlebell vor der Brust oder je eine seitlich.",
        "Verlagere etwa 70 bis 80 Prozent des Gewichts auf das vordere Bein.",
        "Senke dich wie bei einer Kniebeuge ab, Hüfte nach hinten, Knie über den Zehen.",
        "Geh so tief, wie du sauber kontrollieren kannst, das hintere Bein stützt nur.",
        "Drück dich vor allem aus dem flachen Fuß wieder hoch und wechsle nach dem Satz die Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Gewicht verteilt sich gleich auf beide Beine: bewusst auf das vordere Bein verlagern.",
        "Becken dreht sich: Hüfte bleibt gerade nach vorn.",
        "Knie fällt nach innen: Knie über die Zehen führen.",
        "Hinterer Fuß zu weit zurück: nur etwas versetzt, sonst wird es ein Ausfallschritt."
      ],
      vorteile: [
        "Einseitige Belastung mit hoher Stabilität.",
        "Mehr Gewicht als bei echten einbeinigen Übungen möglich.",
        "Gute Brücke zwischen beidbeiniger und einbeiniger Kniebeuge.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Funktioniert ebenso als Kickstand-Kreuzheben für die hintere Kette.",
        "Gut für Einsteiger, denen die Bulgarische Split-Kniebeuge noch zu wackelig ist.",
        "Halte die Hantel auf der Seite des Standbeins für mehr Stabilitätsanforderung."
      ],
      varianten: "Leichter: leichtere Hantel oder ganz ohne Gewicht. Schwerer: mehr Gewicht oder einbeinige Kniebeuge auf die Bank.",
      sicherheit: "Bei Kniebeschwerden die Tiefe anpassen.",
      golf: "Die Gewichtsverteilung ähnelt der Belastung des Führungsbeins im Durchschwung. Die Übung kräftigt das belastete Bein und schult das Gefühl für die Gewichtsverlagerung."
    }
  },
  // ---------- Ausfallschritte ----------
  {
    id: "ausfallschritt_kh",
    name: "Ausfallschritt rückwärts mit Kurzhanteln",
    auch: ["Reverse Lunge", "Dumbbell Reverse Lunge", "Reverse Lunge mit KH"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel", "beinbeuger"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 2,
    hinweis: "Schritt nach hinten, vorderes Bein bleibt stehen und arbeitet.",
    info: {
      kurz: "Ausfallschritt, bei dem du mit einem Bein nach hinten trittst und das vordere Bein die Arbeit macht. Er ist knieschonender als der Ausfallschritt nach vorn, weil das Standbein nicht abbremsen muss, und eine der vielseitigsten einbeinigen Übungen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, je eine Kurzhantel seitlich in den Händen, Schultern tief.",
        "Verlagere das Gewicht auf ein Bein und mach mit dem anderen einen großen Schritt nach hinten, Landung auf dem Fußballen.",
        "Senke dich gerade nach unten ab, bis das hintere Knie knapp über dem Boden ist.",
        "Das vordere Knie bleibt über dem Fuß, das Gewicht liegt überwiegend auf der vorderen Ferse und Fußmitte.",
        "Drück dich aus dem vorderen Bein kraftvoll hoch und bring den hinteren Fuß zurück neben den vorderen.",
        "Mach alle Wiederholungen auf einer Seite oder wechsle die Beine ab."
      ],
      atmung: "Beim Zurücktreten und Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Schritt zu kurz: das vordere Knie schiebt weit nach vorn, Schritt größer machen.",
        "Füße auf einer Linie: hüftbreite Spur beibehalten, sonst wackelst du.",
        "Abdrücken mit dem hinteren Bein: das vordere Bein zieht dich zurück in den Stand.",
        "Oberkörper fällt nach vorn: aufrecht bleiben, eine leichte Vorneigung ist in Ordnung.",
        "Knie fällt nach innen: Knie über die zweite Zehe führen."
      ],
      vorteile: [
        "Knieschonender als der Ausfallschritt nach vorn.",
        "Starker Reiz für Quadrizeps und Gesäß.",
        "Verbessert Balance und Kontrolle beim Schritt.",
        "Gleicht Seitenunterschiede aus.",
        "Gute Übertragung auf Laufen, Treppensteigen und Richtungswechsel."
      ],
      tipps: [
        "Leichte Vorneigung des Oberkörpers betont das Gesäß, aufrecht den Quadrizeps.",
        "Ein Defizit, also der vordere Fuß auf einer Scheibe, vergrößert den Bewegungsumfang.",
        "Abwechselnde Beine sind dynamischer, alle Wiederholungen auf einer Seite schwerer.",
        "Zughilfen nutzen, wenn der Griff zuerst aufgibt."
      ],
      varianten: "Leichter: ohne Gewicht oder mit Halt. Schwerer: aus dem Defizit, mit Langhantel oder schwerer.",
      sicherheit: "Bei Kniebeschwerden oft besser verträglich als der Ausfallschritt nach vorn. Bei Gleichgewichtsproblemen eine Hand an einem Halt.",
      golf: "Schult die Stabilität auf einem Bein und kräftigt Gesäß und Oberschenkel, die im Schwung die Gewichtsverlagerung auf das Führungsbein abfangen."
    }
  },
  {
    id: "ausfallschritt_rueck_lh",
    name: "Ausfallschritt rückwärts mit Langhantel",
    auch: ["Barbell Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "bauch", "gesaess_mittel"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["fussball", "laufen"],
    info: {
      kurz: "Ausfallschritt nach hinten mit der Langhantel auf dem oberen Rücken. Ermöglicht mehr Last als mit Kurzhanteln und fordert Rumpf und Gleichgewicht stark.",
      ausfuehrung: [
        "Nimm die Langhantel im Rack wie zur Kniebeuge auf den oberen Rücken und tritt mit zwei kleinen Schritten zurück.",
        "Stell die Füße hüftbreit und spann den Rumpf an.",
        "Tritt mit einem Bein einen großen Schritt zurück und senke dich ab, bis das hintere Knie knapp über dem Boden ist.",
        "Das vordere Knie bleibt über dem Fuß, der Oberkörper aufrecht, die Stange ruhig.",
        "Drück dich aus dem vorderen Bein zurück in den Stand.",
        "Wechsle die Beine ab oder mach alle Wiederholungen auf einer Seite."
      ],
      atmung: "Vor dem Schritt einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Schwanken beim Schritt: langsamer zurücktreten und hüftbreite Spur halten.",
        "Rumpf locker: Bauch fest, Stange liegt stabil.",
        "Zu kurzer Schritt: Knie schiebt weit nach vorn.",
        "Zu schnell ins Gewicht: erst mit Kurzhanteln sicher werden."
      ],
      vorteile: [
        "Mehr Gewicht als mit Kurzhanteln möglich.",
        "Starke Rumpfstabilität.",
        "Knieschonende Ausfallschrittvariante.",
        "Gut für Kraftsportler und Mannschaftssportler."
      ],
      tipps: [
        "Arbeite im Rack mit Sicherheitsablagen auf passender Höhe.",
        "Mit Front-Rack-Haltung wird der Quadrizeps stärker gefordert.",
        "5 bis 8 Wiederholungen pro Seite reichen bei schwerer Last."
      ],
      varianten: "Leichter: mit Kurzhanteln. Schwerer: aus dem Defizit oder mit Pause unten.",
      sicherheit: "Bei Gleichgewichtsproblemen oder Rückenbeschwerden die Kurzhantelvariante wählen."
    }
  },
  {
    id: "ausfallschritt_rueck_kg",
    name: "Ausfallschritt rückwärts ohne Gewicht",
    auch: ["Bodyweight Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "laufen"],
    golf: 1,
    schwerer: "ausfallschritt_vor_kg",
    info: {
      kurz: "Ausfallschritt nach hinten mit dem eigenen Körpergewicht. Der Rückwärtsschritt ist leichter zu kontrollieren und für die Knie meist angenehmer als der Schritt nach vorn.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Hände in die Hüften oder vor die Brust.",
        "Mach mit einem Bein einen großen Schritt nach hinten und setz den Fußballen auf.",
        "Senke dich ab, bis das hintere Knie fast den Boden berührt, das vordere Knie bleibt über dem Fuß.",
        "Halte den Oberkörper aufrecht und den Bauch angespannt.",
        "Drück dich aus dem vorderen Bein hoch und stell den Fuß zurück neben den anderen.",
        "Wechsle die Beine bei jeder Wiederholung ab."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Schritt zu klein: vorderes Knie schiebt über die Zehen hinaus, größer treten.",
        "Füße auf einer Linie: hüftbreite Spur halten.",
        "Hinteres Knie knallt auf: kontrolliert absenken.",
        "Oberkörper sackt nach vorn: Brust aufrecht."
      ],
      vorteile: [
        "Leicht erlernbare einbeinige Übung ohne Gerät.",
        "Knieschonend.",
        "Verbessert Gleichgewicht und Koordination.",
        "Gut zum Aufwärmen vor Laufen und Ballsport."
      ],
      tipps: [
        "Langsames Absenken in drei Sekunden macht sie anspruchsvoller.",
        "Eine Hand an der Wand hilft am Anfang.",
        "Ab 15 sauberen Wiederholungen pro Seite Gewicht dazunehmen."
      ],
      varianten: "Leichter: geringere Tiefe oder mit Halt. Schwerer: Ausfallschritt nach vorn, gehende Ausfallschritte oder mit Kurzhanteln.",
      sicherheit: "Bei Kniebeschwerden nur schmerzfrei tief gehen."
    }
  },
  {
    id: "ausfallschritt_defizit",
    name: "Ausfallschritt rückwärts aus dem Defizit",
    auch: ["Deficit Reverse Lunge", "Elevated Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["adduktoren", "beinbeuger"],
    geraete: [["kurzhantel", "hantelscheibe"], ["kurzhantel", "box"], ["kettlebell", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["fussball", "laufen"],
    info: {
      kurz: "Ausfallschritt nach hinten, bei dem du auf einer Erhöhung von fünf bis fünfzehn Zentimetern stehst. Das hintere Knie kann tiefer sinken, wodurch Gesäß und Quadrizeps stärker gedehnt und belastet werden.",
      ausfuehrung: [
        "Stell dich mit beiden Füßen auf eine stabile Erhöhung, zum Beispiel eine Hantelscheibe oder eine niedrige Stufe.",
        "Halte die Kurzhanteln seitlich und spann den Bauch an.",
        "Tritt mit einem Bein nach hinten vom Podest auf den Boden und senke dich ab.",
        "Geh tiefer als beim normalen Ausfallschritt, bis du eine deutliche Dehnung in Gesäß und Oberschenkel spürst.",
        "Drück dich aus dem vorderen Bein wieder hoch und stell den hinteren Fuß zurück auf die Erhöhung.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Erhöhung zu hoch: mit fünf bis zehn Zentimetern starten.",
        "Unsichere Unterlage: nur stabile, rutschfeste Erhöhungen nutzen.",
        "Rücken rundet sich in der Tiefe: nur so tief, wie der Rücken neutral bleibt.",
        "Vordere Ferse hebt ab: Gewicht auf die ganze Fußsohle."
      ],
      vorteile: [
        "Größerer Bewegungsumfang und mehr Dehnung unter Last.",
        "Sehr wirksam für das Gesäß.",
        "Knieschonend durch den Rückwärtsschritt.",
        "Gut für Muskelaufbau mit moderatem Gewicht."
      ],
      tipps: [
        "Leichte Vorneigung des Oberkörpers betont das Gesäß noch mehr.",
        "Etwas weniger Gewicht als beim normalen Ausfallschritt wählen.",
        "Langsames Absenken nutzt die Dehnung."
      ],
      varianten: "Leichter: ohne Erhöhung oder ohne Gewicht. Schwerer: höhere Erhöhung oder schwerere Hanteln.",
      sicherheit: "Bei Hüft- oder Kniebeschwerden mit niedriger Erhöhung beginnen."
    }
  },
  {
    id: "ausfallschritt_gleitscheibe",
    name: "Ausfallschritt rückwärts mit Gleitscheibe",
    auch: ["Slider Reverse Lunge", "Sliding Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "adduktoren", "bauch"],
    geraete: [["gleitscheiben"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball"],
    golf: 1,
    info: {
      kurz: "Ausfallschritt, bei dem der hintere Fuß auf einer Gleitscheibe nach hinten rutscht statt zu treten. Die gleitende Bewegung ist gelenkschonend und hält das vordere Bein ständig unter Spannung.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, einen Fuß auf eine Gleitscheibe oder ein Handtuch auf glattem Boden.",
        "Verlagere das Gewicht auf das Standbein, Hände in die Hüften oder vor die Brust.",
        "Lass den Fuß auf der Gleitscheibe langsam nach hinten gleiten und senke dich dabei ab.",
        "Geh tief, bis das hintere Knie knapp über dem Boden ist, das vordere Knie bleibt über dem Fuß.",
        "Zieh dich aus dem vorderen Bein wieder hoch und lass den hinteren Fuß zurückgleiten.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Zurückgleiten einatmen, beim Hochkommen ausatmen.",
      fehler: [
        "Gewicht auf dem gleitenden Fuß: das Standbein trägt.",
        "Zu schnell zurückgleiten: kontrolliert und langsam.",
        "Becken kippt zur Seite: Rumpf anspannen.",
        "Rutschiger Standfuß: auf rutschfestem Teil des Bodens stehen."
      ],
      vorteile: [
        "Ständige Spannung im Standbein.",
        "Gelenkschonend, keine Landung.",
        "Fordert Gleichgewicht und Rumpfkontrolle.",
        "Gut für zu Hause, ein Handtuch auf Parkett reicht."
      ],
      tipps: [
        "Auf Teppich Gleitscheiben mit glatter Seite, auf Parkett mit Stoffseite verwenden.",
        "Kurzhanteln in den Händen steigern die Übung.",
        "Gut als Aufwärmübung für Hüfte und Beine."
      ],
      varianten: "Leichter: geringere Tiefe. Schwerer: mit Kurzhanteln oder langsamer.",
      sicherheit: "Auf rutschfesten Stand des Standbeins achten."
    }
  },
  {
    id: "ausfallschritt_landmine",
    name: "Ausfallschritt rückwärts an der Landmine",
    auch: ["Landmine Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["bauch", "schraege_bauch", "gesaess_mittel"],
    geraete: [["landmine", "langhantel"], ["landmine", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball"],
    golf: 1,
    info: {
      kurz: "Ausfallschritt nach hinten mit dem Ende einer Landmine-Stange vor der Brust. Die Stange gibt Halt nach vorn, was die Übung stabiler macht als mit Kurzhanteln, und fordert den Rumpf.",
      ausfuehrung: [
        "Verankere die Langhantel in der Landmine oder einer Ecke und belade das freie Ende.",
        "Heb das Ende auf Brusthöhe und halte es mit beiden Händen vor dem Brustbein oder mit einer Hand an der Schulter.",
        "Stell dich hüftbreit hin, leicht in die Stange gelehnt.",
        "Tritt mit einem Bein nach hinten und senke dich ab, bis das hintere Knie fast den Boden berührt.",
        "Drück dich aus dem vorderen Bein zurück in den Stand.",
        "Wechsle die Beine ab oder mach alle Wiederholungen auf einer Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu weit von der Stange weg: Arme ermüden, näher herangehen.",
        "Oberkörper verdreht sich: Brust bleibt gerade nach vorn.",
        "Schritt zu kurz: Knie schiebt weit nach vorn.",
        "Stange rutscht: Verankerung prüfen."
      ],
      vorteile: [
        "Stabile Führung durch die schräge Stange.",
        "Starke Rumpfarbeit, besonders einarmig gehalten.",
        "Knieschonend durch den Rückwärtsschritt.",
        "Leicht zu lernen."
      ],
      tipps: [
        "Einarmig auf der Seite des hinteren Beins gehalten fordert die Anti-Rotation stärker.",
        "Gut im Zirkel mit Landmine-Kniebeuge und Landmine-Drücken.",
        "8 bis 12 Wiederholungen pro Seite."
      ],
      varianten: "Leichter: wenig Gewicht. Schwerer: einarmig oder mehr Gewicht.",
      sicherheit: "Bei Kniebeschwerden die Tiefe anpassen."
    }
  },
  {
    id: "ausfallschritt_goblet",
    name: "Goblet-Ausfallschritt rückwärts",
    auch: ["Goblet Reverse Lunge", "Front-Loaded Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["bauch", "oberer_ruecken"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Ausfallschritt nach hinten mit einer Hantel vor der Brust. Die vordere Last hält den Oberkörper aufrecht, betont den Quadrizeps und fordert den Rumpf.",
      ausfuehrung: [
        "Halte eine Kurzhantel senkrecht oder eine Kettlebell an den Griffseiten eng vor der Brust.",
        "Stell dich hüftbreit hin und spann den Bauch an.",
        "Tritt mit einem Bein einen großen Schritt zurück und senke dich ab.",
        "Halte den Oberkörper aufrecht, die Ellbogen zeigen nach unten.",
        "Geh tief, bis das hintere Knie fast den Boden berührt.",
        "Drück dich aus dem vorderen Bein zurück in den Stand und wechsle die Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hantel weg vom Körper: eng an der Brust halten.",
        "Rundrücken: Brust aufrecht, Schultern zurück.",
        "Zu kurzer Schritt: vorderes Knie zu weit vorn.",
        "Schwanken: hüftbreite Spur einhalten."
      ],
      vorteile: [
        "Aufrechter Oberkörper, mehr Quadrizepsarbeit.",
        "Rumpf und oberer Rücken arbeiten mit.",
        "Funktioniert mit nur einer Hantel.",
        "Griffkraft ist kein begrenzender Faktor."
      ],
      tipps: [
        "Ideal, wenn nur eine Hantel vorhanden ist.",
        "Mit Defizit wird der Bewegungsumfang größer.",
        "Langsames Absenken steigert den Reiz."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: aus dem Defizit oder schwerere Hantel.",
      sicherheit: "Bei Kniebeschwerden nur schmerzfrei tief gehen."
    }
  },
  {
    id: "ausfallschritt_multipresse",
    name: "Ausfallschritt rückwärts an der Multipresse",
    auch: ["Smith Machine Reverse Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["gesaess", "quadrizeps"],
    sekundaer: ["adduktoren"],
    geraete: [["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Ausfallschritt nach hinten mit der geführten Stange der Multipresse. Die Stange gibt Halt, sodass du schwerer und kontrollierter trainieren kannst als frei.",
      ausfuehrung: [
        "Stell die Sicherheitsanschläge passend ein und stell dich unter die Stange, sie liegt auf dem oberen Rücken.",
        "Stell die Füße hüftbreit leicht vor die Stange und dreh die Stange aus den Haken.",
        "Tritt mit einem Bein nach hinten und senke dich gerade ab, bis das hintere Knie fast den Boden berührt.",
        "Das vordere Knie bleibt über dem Fuß.",
        "Drück dich aus dem vorderen Bein hoch und stell den hinteren Fuß zurück.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Standfuß direkt unter der Stange: etwas weiter vorn stellen.",
        "Schritt zu klein oder zu groß: so wählen, dass beide Knie etwa 90 Grad haben.",
        "Hüfte verdreht: Becken gerade halten.",
        "Haken nicht gesichert: Einhängen vorher üben."
      ],
      vorteile: [
        "Stabile Führung, hoher Fokus auf das Arbeitsbein.",
        "Mehr Gewicht möglich als frei.",
        "Sicher ohne Partner.",
        "Gut für Einsteiger in einbeinige Übungen mit Last."
      ],
      tipps: [
        "Leichte Vorneigung betont das Gesäß.",
        "Mit einer Scheibe unter dem vorderen Fuß wird es eine Defizitvariante.",
        "8 bis 12 Wiederholungen pro Seite."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Defizit oder Pause unten.",
      sicherheit: "Sicherheitsanschläge immer einstellen. Bei Kniebeschwerden Tiefe anpassen."
    }
  },
  {
    id: "ausfallschritt_vor_kh",
    name: "Ausfallschritt vorwärts mit Kurzhanteln",
    auch: ["Forward Lunge", "Dumbbell Forward Lunge", "Front Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 2,
    einseitig: true,
    sport: ["fussball", "laufen", "tennis"],
    golf: 1,
    info: {
      kurz: "Ausfallschritt mit einem Schritt nach vorn. Das vordere Bein muss die Landung abbremsen, was den Quadrizeps stark fordert und die Fähigkeit zum Abbremsen im Sport trainiert.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, je eine Kurzhantel seitlich, Oberkörper aufrecht.",
        "Mach einen großen Schritt nach vorn und setz den Fuß mit der ganzen Sohle auf.",
        "Senke dich kontrolliert ab, bis das hintere Knie knapp über dem Boden ist.",
        "Das vordere Knie bleibt über dem Fuß und zeigt in Richtung der Zehen.",
        "Drück dich kraftvoll aus dem vorderen Bein ab und kehr in den Stand zurück.",
        "Wechsle die Beine ab oder mach alle Wiederholungen auf einer Seite."
      ],
      atmung: "Beim Schritt und Absenken einatmen, beim Zurückdrücken ausatmen.",
      fehler: [
        "Schritt zu kurz: das Knie schiebt weit nach vorn, größer treten.",
        "Harte Landung auf der Ferse: weich und kontrolliert aufsetzen.",
        "Oberkörper kippt nach vorn: aufrecht bleiben.",
        "Mehrere kleine Schritte zurück: in einem Schritt in den Stand zurückdrücken."
      ],
      vorteile: [
        "Trainiert das Abbremsen, wichtig für Richtungswechsel und Landungen.",
        "Starker Reiz für den Quadrizeps.",
        "Verbessert Koordination und Gleichgewicht.",
        "Gute Übertragung auf Sportarten mit Ausfallbewegungen wie Tennis."
      ],
      tipps: [
        "Beherrsche erst den Ausfallschritt rückwärts, dann den vorwärts.",
        "Etwas weniger Gewicht als beim Rückwärtsschritt wählen.",
        "Bewusst weich landen, das schult die Kniekontrolle."
      ],
      varianten: "Leichter: ohne Gewicht oder Ausfallschritt rückwärts. Schwerer: gehende Ausfallschritte oder schwerer.",
      sicherheit: "Belastet das Knie stärker als der Rückwärtsschritt. Bei Kniebeschwerden lieber rückwärts oder Split-Kniebeuge wählen."
    }
  },
  {
    id: "ausfallschritt_vor_kg",
    name: "Ausfallschritt vorwärts ohne Gewicht",
    auch: ["Bodyweight Forward Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["fussball", "laufen", "tennis"],
    schwerer: "ausfallschritt_gehend_kg",
    info: {
      kurz: "Ausfallschritt nach vorn mit dem eigenen Körpergewicht. Er trainiert Kraft und Abbremsen des vorderen Beins und ist überall ohne Gerät machbar.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Hände in die Hüften.",
        "Mach einen großen Schritt nach vorn und setz den Fuß weich auf.",
        "Senke dich ab, bis das hintere Knie fast den Boden berührt.",
        "Das vordere Knie bleibt über dem Fuß, der Oberkörper aufrecht.",
        "Drück dich aus dem vorderen Bein zurück in den Stand.",
        "Wechsle die Beine bei jeder Wiederholung ab."
      ],
      atmung: "Beim Absenken einatmen, beim Zurückdrücken ausatmen.",
      fehler: [
        "Zu kurzer Schritt: Knie weit vor den Zehen, größer treten.",
        "Füße auf einer Linie: hüftbreite Spur.",
        "Knie fällt nach innen: über die Zehen führen.",
        "Unkontrollierte Landung: weich aufsetzen."
      ],
      vorteile: [
        "Trainiert Kraft und Abbremsfähigkeit ohne Gerät.",
        "Verbessert Koordination und Gleichgewicht.",
        "Gut als Aufwärmübung.",
        "Alltagsnah, ähnlich wie Treppen und Schritte."
      ],
      tipps: [
        "Zum Aufwärmen 8 bis 10 Wiederholungen pro Seite.",
        "Eine Pause unten erhöht die Spannung.",
        "Als Übergang zu gehenden Ausfallschritten nutzen."
      ],
      varianten: "Leichter: Ausfallschritt rückwärts. Schwerer: gehende Ausfallschritte oder mit Kurzhanteln.",
      sicherheit: "Bei Kniebeschwerden die rückwärtige Variante bevorzugen."
    }
  },
  {
    id: "ausfallschritt_gehend_kh",
    name: "Gehende Ausfallschritte mit Kurzhanteln",
    auch: ["Walking Lunge", "Dumbbell Walking Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "gesaess_mittel", "unterarm"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 2,
    einseitig: true,
    sport: ["fussball", "laufen"],
    hinweis: "Braucht etwa zehn Meter Platz.",
    info: {
      kurz: "Ausfallschritte, bei denen du dich fortlaufend nach vorn bewegst. Sie fordern Kraft, Koordination und Kondition gleichzeitig und belasten jedes Bein beim Abbremsen und Abdrücken.",
      ausfuehrung: [
        "Stell dich an den Anfang einer freien Strecke von etwa zehn Metern, je eine Kurzhantel seitlich.",
        "Mach einen großen Schritt nach vorn und senke dich ab, bis das hintere Knie fast den Boden berührt.",
        "Drück dich aus dem vorderen Bein hoch und zieh das hintere Bein direkt nach vorn in den nächsten Schritt.",
        "Senke dich auf der anderen Seite ab, ohne zwischendurch die Füße zusammenzustellen.",
        "Halte den Oberkörper aufrecht und die Spur hüftbreit.",
        "Geh so die vorgegebene Strecke oder Schrittzahl, dann dreh um."
      ],
      atmung: "Bei jedem Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Schritte werden mit Ermüdung kürzer: bewusst große Schritte halten.",
        "Wackeln von Seite zu Seite: hüftbreite Spur wie auf Schienen.",
        "Hinteres Knie schlägt auf: kontrolliert absenken.",
        "Oberkörper fällt nach vorn: Blick nach vorn, Brust aufrecht."
      ],
      vorteile: [
        "Kraft, Koordination und Kondition in einer Übung.",
        "Sehr effektiv für Quadrizeps und Gesäß.",
        "Trainiert Abbremsen und Abdrücken abwechselnd.",
        "Hoher Kalorienverbrauch für eine Kraftübung."
      ],
      tipps: [
        "Zähle Schritte pro Bein statt Meter, wenn der Platz knapp ist.",
        "Mit Ermüdung lieber eine Pause machen als die Technik zu verlieren.",
        "Zughilfen helfen bei schweren Hanteln."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: mit Langhantel oder schwereren Hanteln.",
      sicherheit: "Bei Kniebeschwerden auf rückwärtige Ausfallschritte ausweichen. Freie Strecke ohne Stolperfallen wählen."
    }
  },
  {
    id: "ausfallschritt_gehend_lh",
    name: "Gehende Ausfallschritte mit Langhantel",
    auch: ["Barbell Walking Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["adduktoren", "bauch"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { knie: 2, ruecken: 1 },
    stufe: 3,
    einseitig: true,
    sport: ["fussball"],
    hinweis: "Braucht viel Platz, vorher Weg freiräumen.",
    info: {
      kurz: "Gehende Ausfallschritte mit der Langhantel auf dem oberen Rücken. Sehr fordernd für Beine, Rumpf und Gleichgewicht, mit mehr Last als mit Kurzhanteln.",
      ausfuehrung: [
        "Nimm die Langhantel im Rack auf den oberen Rücken und geh an den Anfang einer freien Strecke.",
        "Stell die Füße hüftbreit und spann den Rumpf an.",
        "Mach einen großen Schritt nach vorn und senke dich ab, bis das hintere Knie fast den Boden berührt.",
        "Drück dich hoch und bring das hintere Bein direkt in den nächsten Schritt.",
        "Halte die Stange ruhig und den Oberkörper aufrecht.",
        "Nach der Strecke vorsichtig zum Rack zurück und die Stange ablegen."
      ],
      atmung: "Bei jedem Schritt einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Schwanken: hüftbreite Spur, langsameres Tempo.",
        "Stange rutscht: oberen Rücken fest anspannen.",
        "Zu schwer begonnen: Technik erst mit Kurzhanteln festigen.",
        "Kurze Schritte: konstant große Schritte machen."
      ],
      vorteile: [
        "Höchste Last unter den gehenden Ausfallschritten.",
        "Starke Rumpf- und Gleichgewichtsarbeit.",
        "Trainiert Beine und Kondition intensiv.",
        "Keine Begrenzung durch den Griff."
      ],
      tipps: [
        "Für Fortgeschrittene mit sicherer Technik.",
        "6 bis 10 Schritte pro Bein reichen.",
        "Im Studio auf einer leeren Fläche oder im Gang trainieren."
      ],
      varianten: "Leichter: mit Kurzhanteln. Schwerer: mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Gleichgewichts-, Knie- oder Rückenproblemen die Kurzhantelvariante wählen."
    }
  },
  {
    id: "ausfallschritt_gehend_kg",
    name: "Gehende Ausfallschritte ohne Gewicht",
    auch: ["Bodyweight Walking Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "adduktoren"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["fussball", "laufen"],
    schwerer: "bulgarisch_kg",
    info: {
      kurz: "Fortlaufende Ausfallschritte mit dem eigenen Körpergewicht. Ideal zum Aufwärmen, für Kraftausdauer und überall dort, wo etwas Platz, aber kein Gerät vorhanden ist.",
      ausfuehrung: [
        "Stell dich an den Anfang einer freien Strecke, Hände in die Hüften.",
        "Mach einen großen Schritt nach vorn und senke dich ab, bis das hintere Knie fast den Boden berührt.",
        "Drück dich hoch und zieh das hintere Bein direkt nach vorn in den nächsten Schritt.",
        "Halte den Oberkörper aufrecht und die Spur hüftbreit.",
        "Geh die vorgegebene Schrittzahl, dann dreh um."
      ],
      atmung: "Bei jedem Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu kleine Schritte: großer Schritt, beide Knie etwa 90 Grad.",
        "Wackeln: hüftbreite Spur halten.",
        "Zu schnell: jede Wiederholung kontrollieren.",
        "Knie fällt nach innen: Knie über die Zehen."
      ],
      vorteile: [
        "Kraftausdauer und Koordination ohne Gerät.",
        "Gute Aufwärmübung für Laufen und Ballsport.",
        "Fördert Beweglichkeit in Hüfte und Sprunggelenk.",
        "Leicht dosierbar über die Schrittzahl."
      ],
      tipps: [
        "Mit Armen über dem Kopf wird der Rumpf stärker gefordert.",
        "Auf dem Sportplatz oder im Flur gut umsetzbar.",
        "Ab 20 Schritten pro Bein Gewicht dazunehmen."
      ],
      varianten: "Leichter: Ausfallschritt rückwärts am Platz. Schwerer: mit Kurzhanteln oder Pause unten.",
      sicherheit: "Bei Kniebeschwerden die Tiefe reduzieren."
    }
  },
  {
    id: "ausfallschritt_seit_kh",
    name: "Seitlicher Ausfallschritt mit Kurzhantel",
    auch: ["Lateral Lunge", "Side Lunge", "Goblet Lateral Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "adduktoren"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "tennis"],
    golf: 2,
    info: {
      kurz: "Ausfallschritt zur Seite mit einer Hantel vor der Brust. Er trainiert die Beine in der Frontalebene, kräftigt Adduktoren und Gesäß und dehnt die Innenseite des gestreckten Beins.",
      ausfuehrung: [
        "Halte eine Kurzhantel oder Kettlebell eng vor der Brust und stell dich mit geschlossenen Füßen hin.",
        "Mach einen großen Schritt zur Seite, beide Fußspitzen zeigen nach vorn oder leicht nach außen.",
        "Schieb die Hüfte nach hinten und beuge das Knie des Schrittbeins, das andere Bein bleibt gestreckt.",
        "Senke dich ab, bis der Oberschenkel des gebeugten Beins etwa waagerecht ist, die Ferse bleibt am Boden.",
        "Drück dich kraftvoll aus dem gebeugten Bein zurück in die Ausgangsposition.",
        "Mach alle Wiederholungen auf einer Seite oder wechsle ab."
      ],
      atmung: "Beim Schritt zur Seite einatmen, beim Zurückdrücken ausatmen.",
      fehler: [
        "Knie fällt nach innen oder schiebt weit vor: Hüfte nach hinten, Knie über den Zehen.",
        "Ferse hebt ab: weniger tief oder kleinerer Schritt.",
        "Rundrücken: Brust aufrecht, Hantel nah am Körper.",
        "Gestrecktes Bein knickt ein: es bleibt lang und dehnt sich."
      ],
      vorteile: [
        "Kraft in der seitlichen Bewegungsebene, die im Training oft fehlt.",
        "Stärkt Adduktoren und Gesäß und dehnt die Innenseite der Oberschenkel.",
        "Gute Übertragung auf Richtungswechsel im Sport.",
        "Kann helfen, Leistenproblemen vorzubeugen."
      ],
      tipps: [
        "Beginne ohne Gewicht, um die Hüftbeweglichkeit zu testen.",
        "Ein Schritt etwa doppelt schulterbreit ist für die meisten passend.",
        "Mit Gleitscheibe unter dem gestreckten Bein wird sie gelenkschonender."
      ],
      varianten: "Leichter: ohne Gewicht oder kleinerer Schritt. Schwerer: schwerere Hantel oder Pause unten.",
      sicherheit: "Bei Leisten- oder Adduktorenbeschwerden vorsichtig beginnen und nur schmerzfrei tief gehen.",
      golf: "Trainiert seitliche Kraft und das Abfangen des Gewichts über einem Bein, ähnlich wie bei der Gewichtsverlagerung im Rück- und Durchschwung. Stabile Hüften helfen, im Rückschwung nicht seitlich wegzuschieben."
    }
  },
  {
    id: "ausfallschritt_seit_kg",
    name: "Seitlicher Ausfallschritt ohne Gewicht",
    auch: ["Bodyweight Lateral Lunge", "Side Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "adduktoren"],
    sekundaer: ["gesaess_mittel"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "tennis"],
    golf: 2,
    info: {
      kurz: "Seitlicher Ausfallschritt mit dem eigenen Körpergewicht. Er kräftigt Beine und Adduktoren in der seitlichen Ebene und ist eine gute Aufwärmübung für Sportarten mit Richtungswechseln.",
      ausfuehrung: [
        "Stell dich mit geschlossenen Füßen hin, Arme vor der Brust oder nach vorn gestreckt.",
        "Mach einen großen Schritt zur Seite, Fußspitzen zeigen nach vorn.",
        "Schieb die Hüfte nach hinten und beuge das Knie des Schrittbeins, das andere Bein bleibt gestreckt.",
        "Geh so tief, wie die Ferse am Boden bleibt und der Rücken gerade ist.",
        "Drück dich aus dem gebeugten Bein zurück in den Stand.",
        "Wechsle die Seiten ab oder mach alle Wiederholungen auf einer Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Zurückdrücken ausatmen.",
      fehler: [
        "Knie schiebt weit vor: Hüfte bewusst nach hinten.",
        "Fuß des Schrittbeins dreht stark nach außen: Fußspitze nach vorn oder leicht außen.",
        "Rundrücken: Brust aufrecht.",
        "Zu tief für die Beweglichkeit: Tiefe langsam steigern."
      ],
      vorteile: [
        "Seitliche Beinkraft ohne Gerät.",
        "Verbessert Hüftbeweglichkeit und Dehnfähigkeit der Adduktoren.",
        "Gut im Aufwärmen für Golf, Tennis und Fußball.",
        "Leicht dosierbar."
      ],
      tipps: [
        "Die Arme nach vorn gestreckt helfen als Gegengewicht.",
        "Zum Aufwärmen 6 bis 8 Wiederholungen pro Seite.",
        "Ab 15 sauberen Wiederholungen eine Hantel dazunehmen."
      ],
      varianten: "Leichter: kleinerer Schritt. Schwerer: mit Kurzhantel oder Pause unten.",
      sicherheit: "Bei Leistenbeschwerden kleiner Schritt und geringe Tiefe.",
      golf: "Bereitet Hüften und Beine auf die seitliche Gewichtsverlagerung im Schwung vor und eignet sich gut zum Aufwärmen vor der Runde."
    }
  },
  {
    id: "ausfallschritt_seit_gleitscheibe",
    name: "Seitlicher Ausfallschritt mit Gleitscheibe",
    auch: ["Slider Lateral Lunge", "Sliding Lateral Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess", "adduktoren"],
    sekundaer: ["gesaess_mittel", "bauch"],
    geraete: [["gleitscheiben"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "tennis"],
    golf: 1,
    info: {
      kurz: "Seitlicher Ausfallschritt, bei dem das gestreckte Bein auf einer Gleitscheibe zur Seite gleitet. Beim Zurückziehen arbeiten die Adduktoren des gleitenden Beins kräftig mit.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, einen Fuß auf eine Gleitscheibe.",
        "Verlagere das Gewicht auf das Standbein und lass den Fuß auf der Gleitscheibe gestreckt zur Seite gleiten.",
        "Beuge dabei das Standbein, schieb die Hüfte nach hinten, die Ferse bleibt am Boden.",
        "Geh so tief, wie du sauber kontrollieren kannst.",
        "Drück dich aus dem Standbein hoch und zieh gleichzeitig das gleitende Bein aktiv zurück.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Hinausgleiten einatmen, beim Zurückziehen ausatmen.",
      fehler: [
        "Gewicht auf dem gleitenden Bein: das Standbein trägt.",
        "Zu weit hinausgleiten: nur so weit, wie du zurückkommst.",
        "Knie des Standbeins fällt nach innen: Knie über den Zehen.",
        "Rundrücken: Brust aufrecht."
      ],
      vorteile: [
        "Kräftigt Adduktoren beim Zurückziehen zusätzlich.",
        "Weiche Bewegung ohne Stoß.",
        "Fordert Rumpf und Gleichgewicht.",
        "Mit Handtuch auf glattem Boden auch zu Hause möglich."
      ],
      tipps: [
        "Hantel vor der Brust macht die Übung schwerer.",
        "Langsames Hinausgleiten in drei Sekunden betont die Kontrolle.",
        "Gut als Ergänzung zu Kopenhagener Übungen für die Adduktoren."
      ],
      varianten: "Leichter: kürzerer Weg. Schwerer: mit Kurzhantel oder langsamer.",
      sicherheit: "Bei Leistenbeschwerden zuerst den kleinen Bewegungsumfang testen."
    }
  },
  {
    id: "curtsy_lunge",
    name: "Curtsy-Ausfallschritt",
    auch: ["Curtsy Lunge", "Knicks-Ausfallschritt", "Crossover Lunge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "quadrizeps"],
    sekundaer: ["adduktoren"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "tennis"],
    golf: 1,
    info: {
      kurz: "Ausfallschritt, bei dem das hintere Bein diagonal hinter das Standbein tritt, wie bei einem Knicks. Dadurch arbeitet besonders der seitliche Gesäßmuskel des Standbeins als Stabilisator.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, eine Hantel vor der Brust oder je eine seitlich.",
        "Tritt mit einem Bein diagonal nach hinten hinter das Standbein, sodass die Beine sich kreuzen.",
        "Senke dich ab, bis das hintere Knie knapp über dem Boden ist, die Hüfte zeigt weiter nach vorn.",
        "Das vordere Knie bleibt über dem Fuß und kippt nicht nach innen.",
        "Drück dich aus dem vorderen Bein zurück in den Stand.",
        "Mach alle Wiederholungen auf einer Seite oder wechsle ab."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte dreht sich mit: Becken bleibt nach vorn ausgerichtet.",
        "Vorderes Knie kippt stark nach innen: kleinerer Kreuzschritt, Knie über den Zehen.",
        "Zu weiter Kreuzschritt: nur so weit, wie es kontrolliert geht.",
        "Oberkörper kippt zur Seite: aufrecht bleiben."
      ],
      vorteile: [
        "Fordert den seitlichen Gesäßmuskel stark.",
        "Schult Hüftstabilität in einer ungewohnten Ebene.",
        "Abwechslung zu klassischen Ausfallschritten.",
        "Gute Ergänzung für Sportarten mit Kreuzschritten."
      ],
      tipps: [
        "Mit leichtem Gewicht beginnen, die Position ist ungewohnt.",
        "Fokussiere dich auf das Gesäß des Standbeins.",
        "Gut in Kombination mit seitlichen Ausfallschritten."
      ],
      varianten: "Leichter: ohne Gewicht. Schwerer: schwerere Hanteln oder Pause unten.",
      sicherheit: "Bei Kniebeschwerden mit Drehbelastung oder Hüftbeschwerden vorsichtig und mit kleinem Kreuzschritt üben."
    }
  },
  // ---------- Step-ups und Step-downs ----------
  {
    id: "step_up_kg",
    name: "Step-up ohne Gewicht",
    auch: ["Bodyweight Step-Up", "Aufsteigen auf die Stufe"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "waden"],
    geraete: [["box"], ["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "laufen", "wandern"],
    golf: 1,
    schwerer: "step_up_kniehub",
    hinweis: "Box, stabile Bank oder Treppenstufe, nur mit dem oberen Bein hochdrücken.",
    info: {
      kurz: "Aufsteigen auf eine Box, Bank oder Treppenstufe mit dem eigenen Körpergewicht. Eine sehr alltagsnahe einbeinige Übung, die Kraft und Gleichgewicht verbessert.",
      ausfuehrung: [
        "Stell dich vor eine stabile Erhöhung, etwa Kniehöhe oder etwas niedriger.",
        "Stell einen Fuß komplett auf die Erhöhung, das Knie zeigt über die Zehen.",
        "Verlagere das Gewicht nach vorn auf das obere Bein.",
        "Drück dich nur mit dem oberen Bein nach oben, bis du aufrecht auf der Erhöhung stehst, das hintere Bein hilft nicht mit.",
        "Steig kontrolliert mit dem anderen Bein wieder nach unten ab, das obere Bein bremst die Bewegung.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Hochsteigen ausatmen, beim Absteigen einatmen.",
      fehler: [
        "Abstoßen mit dem unteren Bein: Fuß unten locker lassen, das obere Bein arbeitet.",
        "Knie fällt nach innen: Knie über die zweite Zehe führen.",
        "Nur Teil des Fußes auf der Box: ganze Sohle aufsetzen.",
        "Unkontrolliertes Herunterfallen: langsam absteigen."
      ],
      vorteile: [
        "Sehr alltagsnah: Treppensteigen, Wandern, Klettern.",
        "Stärkt Quadrizeps und Gesäß einbeinig.",
        "Verbessert Gleichgewicht und Beinachsenkontrolle.",
        "Höhe einfach anpassbar."
      ],
      tipps: [
        "Je höher die Box, desto mehr arbeitet das Gesäß.",
        "Langsames Absteigen in drei Sekunden steigert den Reiz.",
        "Eine Treppenstufe zu Hause reicht für den Einstieg."
      ],
      varianten: "Leichter: niedrigere Stufe. Schwerer: höhere Box, mit Kniehub oder mit Kurzhanteln.",
      sicherheit: "Nur auf stabile, nicht wegrutschende Erhöhungen steigen. Bei Kniebeschwerden mit niedriger Höhe beginnen."
    }
  },
  {
    id: "step_up",
    name: "Step-up auf die Box mit Kurzhanteln",
    auch: ["Step-Up", "Dumbbell Step-Up", "Box Step-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "adduktoren"],
    geraete: [["box", "kurzhantel"], ["bank", "kurzhantel"], ["box", "kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 230,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "laufen", "fussball"],
    golf: 2,
    info: {
      kurz: "Aufsteigen auf eine Box mit Kurzhanteln in den Händen. Der Step-up trainiert jedes Bein einzeln über einen großen Bewegungsumfang und ist eine der am besten auf Alltag und Sport übertragbaren Beinübungen.",
      ausfuehrung: [
        "Stell eine stabile Box oder Bank vor dich, etwa auf Kniehöhe.",
        "Halte je eine Kurzhantel seitlich und stell einen Fuß komplett auf die Box.",
        "Lehn den Oberkörper leicht nach vorn, sodass dein Gewicht über dem oberen Fuß liegt.",
        "Drück dich aus der Ferse und Fußmitte des oberen Beins nach oben, bis du aufrecht auf der Box stehst.",
        "Das untere Bein hilft nicht mit, du kannst den Fuß oben neben den anderen stellen oder in der Luft lassen.",
        "Steig langsam wieder ab, das obere Bein bremst die Bewegung, und wiederhole auf derselben Seite."
      ],
      atmung: "Beim Hochsteigen ausatmen, beim Absteigen einatmen.",
      fehler: [
        "Abspringen vom unteren Bein: unten nur die Zehenspitzen locker aufsetzen.",
        "Box zu hoch: das Becken kippt und der Rücken rundet sich, niedriger wählen.",
        "Knie fällt beim Hochdrücken nach innen: Gewicht reduzieren und Knie über die Zehen.",
        "Fallenlassen beim Absteigen: kontrolliert absenken, das ist die halbe Übung."
      ],
      vorteile: [
        "Starker einbeiniger Reiz für Quadrizeps und Gesäß.",
        "Sehr alltagsnah und gelenkschonend ohne Stoßbelastung.",
        "Verbessert Gleichgewicht und Stabilität der Beinachse.",
        "Höhe und Gewicht flexibel anpassbar."
      ],
      tipps: [
        "Kniehohe Box ist der Standard, höher betont das Gesäß, niedriger den Quadrizeps.",
        "Langsames Absteigen in drei Sekunden verdoppelt fast den Reiz.",
        "Zughilfen nutzen, wenn der Griff begrenzt."
      ],
      varianten: "Leichter: ohne Gewicht oder niedrigere Box. Schwerer: mit Langhantel, höhere Box oder mit Kniehub.",
      sicherheit: "Nur auf stabile, rutschfeste Boxen steigen. Bei Kniebeschwerden mit niedriger Höhe beginnen.",
      golf: "Kräftigt jedes Bein einzeln und schult die Stabilität auf einem Bein. Das hilft, im Schwung das Gewicht kontrolliert auf das Führungsbein zu bringen."
    }
  },
  {
    id: "step_up_lh",
    name: "Step-up mit Langhantel",
    auch: ["Barbell Step-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "bauch"],
    geraete: [["langhantel", "box"], ["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { knie: 1, ruecken: 1 },
    stufe: 3,
    einseitig: true,
    sport: ["fussball", "laufen"],
    info: {
      kurz: "Step-up mit der Langhantel auf dem oberen Rücken. Der hohe Lastschwerpunkt fordert Gleichgewicht und Rumpf zusätzlich und ermöglicht schwere Lasten ohne Griffbegrenzung.",
      ausfuehrung: [
        "Stell eine stabile Box etwa auf Kniehöhe so, dass du vom Rack aus mit wenigen Schritten davor stehst.",
        "Nimm die Langhantel auf den oberen Rücken und geh zur Box.",
        "Stell einen Fuß komplett auf die Box und spann den Rumpf an.",
        "Drück dich aus dem oberen Bein hoch, bis du aufrecht stehst, der Oberkörper bleibt stabil.",
        "Steig kontrolliert wieder ab, das obere Bein bremst.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Vor dem Hochsteigen einatmen und Spannung halten, oben ausatmen.",
      fehler: [
        "Schwanken oben: Fuß mittig auf die Box, Rumpf fest.",
        "Abdrücken vom unteren Bein: oberes Bein arbeitet allein.",
        "Box zu hoch für die Last: lieber niedriger und kontrolliert.",
        "Stange nicht stabil: oberen Rücken fest anspannen."
      ],
      vorteile: [
        "Hohe Lasten im einbeinigen Training möglich.",
        "Starke Anforderung an Rumpf und Gleichgewicht.",
        "Gute Übertragung auf Sprint- und Sprungkraft.",
        "Kein Griff als begrenzender Faktor."
      ],
      tipps: [
        "Box nah am Rack aufstellen, um nicht weit mit der Stange laufen zu müssen.",
        "Raumhöhe beachten: oben auf der Box ragt die Stange höher als im Stand.",
        "5 bis 8 Wiederholungen pro Seite."
      ],
      varianten: "Leichter: mit Kurzhanteln. Schwerer: höhere Box oder mehr Gewicht.",
      sicherheit: "Bei Gleichgewichtsproblemen die Kurzhantelvariante wählen. Nur mit sicher stehender Box."
    }
  },
  {
    id: "step_up_seitlich",
    name: "Seitlicher Step-up",
    auch: ["Lateral Step-Up", "Side Step-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess_mittel", "gesaess"],
    sekundaer: ["adduktoren"],
    geraete: [["box", "kurzhantel"], ["bank", "kurzhantel"], ["box", "kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 230,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "fussball", "tennis"],
    golf: 2,
    info: {
      kurz: "Step-up, bei dem du seitlich neben der Box stehst und seitwärts aufsteigst. Er fordert den seitlichen Gesäßmuskel und die Stabilität des Knies stärker als der normale Step-up.",
      ausfuehrung: [
        "Stell dich seitlich neben eine stabile Box, etwa auf halber Kniehöhe bis Kniehöhe.",
        "Halte die Kurzhanteln seitlich oder eine vor der Brust und stell den boxnahen Fuß komplett auf die Box.",
        "Verlagere das Gewicht auf das obere Bein, das Knie zeigt nach vorn über die Zehen.",
        "Drück dich aus dem oberen Bein hoch, bis du aufrecht auf der Box stehst, das äußere Bein hängt neben der Box.",
        "Senke dich kontrolliert wieder ab, bis die Ferse des äußeren Beins den Boden leicht berührt.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Abstoßen mit dem unteren Bein: nur antippen.",
        "Knie des oberen Beins fällt nach innen: Knie über den Zehen halten.",
        "Becken kippt zur Seite: Becken waagerecht halten.",
        "Box zu hoch: lieber niedriger und sauber."
      ],
      vorteile: [
        "Stärkt den seitlichen Gesäßmuskel und die Beinachse.",
        "Training in der seitlichen Ebene.",
        "Häufig in der Knie-Reha und Prävention eingesetzt.",
        "Gute Ergänzung zum normalen Step-up."
      ],
      tipps: [
        "Beginne mit einer niedrigen Stufe von 15 bis 25 Zentimetern.",
        "Langsames Absenken betont die Kontrolle.",
        "Ein Spiegel vor dir zeigt, ob das Knie stabil bleibt."
      ],
      varianten: "Leichter: ohne Gewicht oder niedrigere Stufe. Schwerer: höhere Box oder mehr Gewicht.",
      sicherheit: "Bei Kniebeschwerden mit sehr niedriger Höhe beginnen.",
      golf: "Kräftigt die seitliche Hüftmuskulatur, die das Becken im Rückschwung stabilisiert und ein seitliches Wegschieben der Hüfte verhindern kann."
    }
  },
  {
    id: "step_up_crossover",
    name: "Crossover-Step-up",
    auch: ["Crossover Step-Up", "Cross-Body Step-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["gesaess", "gesaess_mittel", "quadrizeps"],
    sekundaer: ["adduktoren"],
    geraete: [["box"], ["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 230,
    gelenke: { knie: 1, huefte: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball"],
    golf: 1,
    info: {
      kurz: "Step-up, bei dem du seitlich neben der Box stehst und mit dem äußeren Bein über das innere Bein hinweg auf die Box steigst. Die Kreuzbewegung fordert das Gesäß besonders stark.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Box etwa auf halber Kniehöhe.",
        "Kreuz das äußere Bein vor dem inneren Bein und stell den Fuß komplett auf die Box.",
        "Verlagere das Gewicht auf das obere Bein, die Hüfte bleibt möglichst nach vorn ausgerichtet.",
        "Drück dich aus dem oberen Bein hoch, bis du aufrecht auf der Box stehst.",
        "Senke dich kontrolliert über den gleichen Weg wieder ab.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Box zu hoch: die Kreuzstellung wird unangenehm, niedrig beginnen.",
        "Abstoßen vom unteren Bein: nur das obere Bein arbeitet.",
        "Knie fällt nach innen: Knie über den Zehen halten.",
        "Oberkörper verdreht sich stark: Brust möglichst nach vorn."
      ],
      vorteile: [
        "Starker Reiz für Gesäß und seitliche Hüftmuskulatur.",
        "Training in mehreren Ebenen.",
        "Fördert Koordination und Hüftbeweglichkeit.",
        "Gute Abwechslung zum klassischen Step-up."
      ],
      tipps: [
        "Erst ohne Gewicht üben, bis die Bewegung flüssig ist.",
        "Kurzhantel vor der Brust erleichtert die Balance.",
        "Mit 8 bis 12 Wiederholungen pro Seite."
      ],
      varianten: "Leichter: niedrigere Box. Schwerer: mit Kurzhanteln oder höhere Box.",
      sicherheit: "Bei Knie- oder Hüftbeschwerden mit Drehbelastung vorsichtig und mit niedriger Höhe."
    }
  },
  {
    id: "step_up_kniehub",
    name: "Step-up mit Kniehub",
    auch: ["Step-Up with Knee Drive", "Step-Up to Balance", "Knee-Up Step-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger", "waden"],
    geraete: [["box"], ["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { knie: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "laufen", "fussball"],
    golf: 2,
    schwerer: "einbein_box_kniebeuge",
    info: {
      kurz: "Step-up, bei dem du oben das freie Knie bis auf Hüfthöhe hebst und kurz auf einem Bein balancierst. Die Übung verbindet Beinkraft mit Gleichgewicht und Hüftstreckung.",
      ausfuehrung: [
        "Stell dich vor eine stabile Box etwa auf Kniehöhe und stell einen Fuß komplett darauf.",
        "Drück dich aus dem oberen Bein hoch und streck Hüfte und Knie vollständig.",
        "Zieh gleichzeitig das freie Knie nach vorn oben bis auf Hüfthöhe, der Arm der Gegenseite schwingt mit.",
        "Halte oben eine Sekunde das Gleichgewicht auf dem Standbein.",
        "Senke das freie Bein kontrolliert und steig langsam ab.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Hochsteigen ausatmen, beim Absteigen einatmen.",
      fehler: [
        "Kein stabiler Halt oben: Kniehub kleiner und langsamer.",
        "Hüfte oben nicht gestreckt: Gesäß anspannen und ganz aufrichten.",
        "Abstoßen vom Boden: das untere Bein hilft nicht mit.",
        "Rundrücken beim Kniehub: aufrecht bleiben."
      ],
      vorteile: [
        "Verbindet Kraft und Gleichgewicht.",
        "Trainiert vollständige Hüftstreckung auf einem Bein, wichtig für Laufen und Sprinten.",
        "Verbessert die Stabilität des Standbeins.",
        "Ohne Gewicht bereits fordernd."
      ],
      tipps: [
        "Halte oben zwei Sekunden für mehr Balancetraining.",
        "Mit Kurzhanteln in den Händen schwerer.",
        "Raumhöhe beachten, oben stehst du deutlich höher."
      ],
      varianten: "Leichter: niedrigere Box oder ohne Halten oben. Schwerer: mit Kurzhanteln oder höhere Box.",
      sicherheit: "Nur mit stabiler Box und genug Platz um dich herum.",
      golf: "Fordert Kraft und Balance auf einem Bein mit voller Hüftstreckung. Das unterstützt einen stabilen Abschluss im Finish auf dem Führungsbein."
    }
  },
  {
    id: "peterson_step_up",
    name: "Peterson Step-up",
    auch: ["Peterson Step-Up", "Poliquin Step-Up", "VMO Step-Up"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps"],
    sekundaer: ["gesaess_mittel"],
    geraete: [["box"], ["hantelscheibe"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["laufen", "fussball"],
    schwerer: "step_down",
    hinweis: "Ferse erhöht, Knie schiebt weit nach vorn, nur kleine Bewegung.",
    info: {
      kurz: "Kleine Step-up-Bewegung auf einer niedrigen Stufe mit erhöhter Ferse, bei der das Knie weit nach vorn wandert. Sie trainiert gezielt den Quadrizeps in den letzten Grad der Kniestreckung und ist beliebt in der Kniestabilisation.",
      ausfuehrung: [
        "Stell dich seitlich auf eine niedrige Stufe von 10 bis 20 Zentimetern, die Ferse des Standbeins auf einer kleinen Erhöhung.",
        "Das freie Bein hängt neben der Stufe in der Luft.",
        "Beuge das Standbein, indem das Knie weit nach vorn über die Zehen wandert, bis die Ferse des freien Beins den Boden fast berührt.",
        "Drück dich wieder hoch und streck das Knie bis fast vollständig durch.",
        "Bewege dich langsam und kontrolliert, die Bewegung ist klein.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Hüfte schiebt nach hinten: das Knie soll nach vorn, nicht die Hüfte nach hinten.",
        "Knie fällt nach innen: Knie über der zweiten Zehe.",
        "Zu hohe Stufe: niedrig beginnen.",
        "Zu schnell: langsam und mit voller Kontrolle."
      ],
      vorteile: [
        "Gezieltes Training des inneren Quadrizepsanteils über dem Knie.",
        "Schult Kniekontrolle in einer Position mit weit vorgeschobenem Knie.",
        "Gelenkschonend durch kleine Bewegung ohne Gewicht.",
        "Beliebt in Physiotherapie und Knieprävention."
      ],
      tipps: [
        "Eine kleine Hantelscheibe unter der Ferse reicht als Erhöhung.",
        "15 bis 20 Wiederholungen pro Seite.",
        "Gut als Aufwärmübung vor Kniebeugen und Sprungtraining."
      ],
      varianten: "Leichter: niedrigere Stufe. Schwerer: höhere Stufe, Kurzhanteln oder langsameres Tempo.",
      sicherheit: "Bei akuten Kniebeschwerden nur schmerzfrei und vorher abklären lassen."
    }
  },
  {
    id: "step_down",
    name: "Step-down vorwärts",
    auch: ["Forward Step-Down", "Heel Tap", "Eccentric Step-Down"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess_mittel"],
    sekundaer: ["gesaess"],
    geraete: [["box"], ["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "laufen", "fussball", "ski"],
    golf: 2,
    schwerer: "pistol_assistiert",
    hinweis: "Langsam absenken, Ferse antippen, Knie bleibt über den Zehen.",
    info: {
      kurz: "Du stehst auf einer Stufe und senkst die Ferse des freien Beins langsam vor der Stufe zum Boden ab. Der Step-down trainiert das kontrollierte Abbremsen und die Beinachsenstabilität, wichtig für Knie und Laufen.",
      ausfuehrung: [
        "Stell dich mit einem Bein auf eine stabile Stufe oder Box von 15 bis 30 Zentimetern, das freie Bein hängt vor der Stufe.",
        "Spann den Bauch an, Hände in die Hüften oder nach vorn gestreckt.",
        "Beuge das Standbein langsam in drei Sekunden, bis die Ferse des freien Beins den Boden leicht berührt.",
        "Das Knie des Standbeins bleibt über dem Fuß, die Hüfte bleibt waagerecht.",
        "Drück dich aus dem Standbein wieder hoch, ohne dich vom Boden abzustoßen.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Knie fällt nach innen: Gewicht über die Fußmitte, Knie nach außen denken.",
        "Becken kippt auf der Seite des freien Beins ab: seitlichen Gesäßmuskel anspannen.",
        "Abstoßen mit der Ferse: nur antippen.",
        "Zu schnelles Absenken: langsam zählen."
      ],
      vorteile: [
        "Trainiert das exzentrische Abbremsen, wichtig für Treppen, Bergabgehen und Landungen.",
        "Verbessert die Kontrolle der Beinachse.",
        "Deckt Schwächen der seitlichen Hüftmuskulatur auf.",
        "Fester Bestandteil vieler Knie-Präventionsprogramme."
      ],
      tipps: [
        "Übe vor einem Spiegel, um die Knieposition zu sehen.",
        "Beginne mit einer niedrigen Stufe und steigere die Höhe langsam.",
        "Kurzhanteln in den Händen machen sie schwerer."
      ],
      varianten: "Leichter: niedrigere Stufe oder Halt an der Wand. Schwerer: höhere Box, Kurzhanteln oder einbeinige Kniebeuge.",
      sicherheit: "Bei Kniebeschwerden mit niedriger Höhe beginnen und auf schmerzfreie Ausführung achten.",
      golf: "Schult die Kontrolle des Knies unter Last auf einem Bein. Eine stabile Beinachse hilft, im Durchschwung gegen das Führungsbein zu stemmen, ohne dass das Knie nach innen oder außen ausweicht."
    }
  },
  {
    id: "step_down_seitlich",
    name: "Seitlicher Step-down",
    auch: ["Lateral Step-Down", "Side Step-Down"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess_mittel"],
    sekundaer: ["gesaess"],
    geraete: [["box"], ["bank"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    einseitig: true,
    sport: ["golf", "laufen", "fussball"],
    golf: 1,
    schwerer: "step_down",
    info: {
      kurz: "Du stehst seitlich auf einer Stufe und senkst das äußere Bein seitlich neben der Stufe ab. Der seitliche Step-down kräftigt Quadrizeps und seitlichen Gesäßmuskel und schult die Beinachse.",
      ausfuehrung: [
        "Stell dich seitlich mit einem Bein auf eine Stufe von 10 bis 25 Zentimetern, das äußere Bein hängt neben der Stufe.",
        "Spann den Bauch an und halte das Becken waagerecht.",
        "Beuge das Standbein langsam, bis die Ferse des äußeren Beins den Boden leicht berührt.",
        "Das Knie des Standbeins zeigt über die Zehen nach vorn.",
        "Drück dich aus dem Standbein wieder hoch in den aufrechten Stand.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Becken sackt zur Seite ab: Becken waagerecht halten.",
        "Knie fällt nach innen: Knie über den Zehen.",
        "Abstoßen vom Boden: nur antippen.",
        "Oberkörper kippt zur Seite: aufrecht bleiben."
      ],
      vorteile: [
        "Kräftigt Quadrizeps und seitlichen Gesäßmuskel gemeinsam.",
        "Leichter zu kontrollieren als der Step-down vorwärts.",
        "Gut für den Einstieg in Kniestabilisation.",
        "Ohne Gewicht und mit einer Treppenstufe machbar."
      ],
      tipps: [
        "Eine Treppenstufe zu Hause reicht.",
        "Drei Sekunden absenken, eine Sekunde hoch.",
        "Steigere zuerst die Höhe, dann das Gewicht."
      ],
      varianten: "Leichter: niedrigere Stufe. Schwerer: höhere Stufe, Step-down vorwärts oder mit Kurzhanteln.",
      sicherheit: "Bei Kniebeschwerden niedrig und schmerzfrei beginnen."
    }
  },
  // ---------- Einbeinige Kniebeugen ----------
  {
    id: "einbein_box_kniebeuge",
    name: "Einbeinige Kniebeuge auf die Bank",
    auch: ["Single-Leg Box Squat", "Single-Leg Sit to Stand", "Box Pistol"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "bauch"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "laufen", "ski"],
    golf: 2,
    schwerer: "pistol_assistiert",
    info: {
      kurz: "Einbeiniges Hinsetzen auf eine Bank oder Box und Aufstehen auf einem Bein. Die Sitzfläche gibt eine feste Tiefe und Sicherheit und macht die Übung zur idealen Vorstufe für den Pistol Squat.",
      ausfuehrung: [
        "Stell dich mit dem Rücken vor eine Bank oder Box, die Fersen etwa eine Fußlänge davor.",
        "Verlagere das Gewicht auf ein Bein und heb das andere Bein gestreckt leicht nach vorn an.",
        "Streck die Arme als Gegengewicht nach vorn.",
        "Senke dich langsam auf einem Bein ab, Hüfte nach hinten, Knie über den Zehen, bis das Gesäß die Sitzfläche berührt.",
        "Setz dich nur kurz ab, ohne die Spannung zu verlieren.",
        "Lehn dich leicht nach vorn und drück dich aus dem Standbein wieder hoch."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Fallenlassen auf die Sitzfläche: langsam und kontrolliert absenken.",
        "Schwung aus dem freien Bein: Bein ruhig halten.",
        "Knie fällt nach innen: Knie über die Zehen führen.",
        "Sitzfläche zu niedrig: mit höherer Box beginnen."
      ],
      vorteile: [
        "Sichere Einstiegsübung für einbeinige Kniebeugen.",
        "Stärkt Quadrizeps, Gesäß und Beinachse.",
        "Tiefe über die Höhe genau steuerbar.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Senke die Box schrittweise ab, bis du Kniehöhe und tiefer erreichst.",
        "Eine leichte Hantel in den gestreckten Armen erleichtert das Gleichgewicht.",
        "Beginne mit 3 bis 5 sauberen Wiederholungen pro Seite."
      ],
      varianten: "Leichter: höhere Sitzfläche oder Halt an der Wand. Schwerer: niedrigere Box, Pistol Squat mit Halt oder freier Pistol Squat.",
      sicherheit: "Auf eine stabile Sitzfläche achten. Bei Kniebeschwerden mit hoher Box beginnen.",
      golf: "Baut gezielt Kraft und Kontrolle auf einem Bein auf. Das Führungsbein kann so im Durchschwung mehr Kraft aufnehmen und an den Körper weitergeben."
    }
  },
  {
    id: "pistol_assistiert",
    name: "Pistol Squat mit Halt",
    auch: ["Assisted Pistol Squat", "TRX Pistol Squat", "Supported Single-Leg Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger", "bauch"],
    geraete: [["schlingentrainer"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "ski"],
    golf: 1,
    schwerer: "pistol",
    hinweis: "Am Schlingentrainer, Türrahmen oder Pfosten festhalten.",
    info: {
      kurz: "Einbeinige Kniebeuge bis in die volle Tiefe, bei der du dich an einem Schlingentrainer oder festen Halt festhältst. Die Arme helfen bei Balance und Kraft, sodass du die Pistol-Bewegung sicher lernst.",
      ausfuehrung: [
        "Greif die Griffe des Schlingentrainers oder einen festen Halt etwa auf Bauchhöhe mit gestreckten Armen.",
        "Stell dich auf ein Bein, das andere Bein streckst du leicht nach vorn.",
        "Senke dich langsam auf dem Standbein ab, die Hüfte geht nach hinten unten, das Knie wandert über die Zehen.",
        "Das freie Bein hebt sich dabei weiter nach vorn, bis es in der tiefsten Position fast waagerecht ist.",
        "Geh so tief wie möglich, die Ferse des Standbeins bleibt am Boden.",
        "Drück dich vor allem aus dem Bein wieder hoch, die Arme helfen nur so viel wie nötig."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Zu viel Armzug: die Beine sollen die Hauptarbeit leisten.",
        "Ferse hebt ab: Sprunggelenk mobilisieren oder Ferse leicht erhöhen.",
        "Knie fällt nach innen: Knie über die Zehen.",
        "Freies Bein schleift am Boden: Hüftbeuger aktiv anspannen und Bein heben."
      ],
      vorteile: [
        "Lernt die volle Pistol-Bewegung sicher.",
        "Stärkt Quadrizeps und Gesäß bis in die tiefste Position.",
        "Verbessert Sprunggelenks- und Hüftbeweglichkeit.",
        "Fast überall mit einem Türrahmen möglich."
      ],
      tipps: [
        "Reduziere die Armhilfe schrittweise.",
        "Langsames Absenken in drei bis fünf Sekunden baut Kraft für den freien Pistol auf.",
        "Eine kleine Fersenerhöhung erleichtert die Tiefe."
      ],
      varianten: "Leichter: einbeinige Kniebeuge auf die Bank. Schwerer: freier Pistol Squat.",
      sicherheit: "Belastet das Knie in tiefer Beugung stark. Bei Kniebeschwerden auslassen oder mit begrenzter Tiefe üben."
    }
  },
  {
    id: "pistol",
    name: "Pistol Squat",
    auch: ["Pistol Squat", "Einbeinige Kniebeuge", "Single-Leg Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 2, sprunggelenk: 1 },
    stufe: 3,
    einseitig: true,
    sport: ["golf", "fussball", "ski"],
    golf: 1,
    info: {
      kurz: "Freie einbeinige Kniebeuge bis in die volle Tiefe, das freie Bein ist dabei nach vorn gestreckt. Der Pistol Squat verlangt viel Kraft, Gleichgewicht und Beweglichkeit und ist eine Königsdisziplin des Körpergewichtstrainings.",
      ausfuehrung: [
        "Stell dich auf ein Bein, das andere Bein streckst du leicht nach vorn, die Arme sind nach vorn gestreckt.",
        "Spann den Bauch an und senke dich langsam auf dem Standbein ab.",
        "Die Hüfte geht nach hinten unten, das Knie wandert über die Zehen, die Ferse bleibt am Boden.",
        "Heb das freie Bein mit zunehmender Tiefe weiter an, bis es knapp über dem Boden schwebt.",
        "Geh so tief, bis die Rückseite des Oberschenkels die Wade berührt.",
        "Drück dich aus der ganzen Fußsohle wieder hoch, ohne Schwung."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Unten zusammenfallen und mit Schwung hochkommen: kontrolliert bleiben, notfalls mit Halt üben.",
        "Ferse hebt ab: Sprunggelenk mobilisieren oder eine kleine Fersenerhöhung.",
        "Knie fällt nach innen: Knie über die Zehen.",
        "Rundrücken unten: Arme weiter nach vorn als Gegengewicht."
      ],
      vorteile: [
        "Maximale einbeinige Kraft ohne Gerät.",
        "Fördert Gleichgewicht und Beweglichkeit in Sprunggelenk und Hüfte.",
        "Zeigt Seitenunterschiede deutlich.",
        "Überall machbar."
      ],
      tipps: [
        "Eine leichte Hantel in den gestreckten Armen macht die Balance leichter.",
        "Üben von einer Box aus, damit das freie Bein nach unten hängen kann, erleichtert das Lernen.",
        "Wenige, saubere Wiederholungen statt vieler wackeliger."
      ],
      varianten: "Leichter: Pistol mit Halt, mit Gegengewicht oder auf die Bank. Schwerer: mit Gewichtsweste oder Kurzhantel im Goblet-Griff.",
      sicherheit: "Hohe Belastung für das Knie in tiefer Beugung. Bei Kniebeschwerden auslassen."
    }
  },
  {
    id: "pistol_gegengewicht",
    name: "Pistol Squat mit Gegengewicht",
    auch: ["Counterbalance Pistol Squat", "Weighted Pistol Squat"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger", "schulter_vorn"],
    geraete: [["kurzhantel"], ["kettlebell"], ["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 2,
    einseitig: true,
    sport: ["fussball", "ski"],
    hinweis: "Gewicht mit gestreckten Armen vor dem Körper.",
    info: {
      kurz: "Pistol Squat, bei dem du ein leichtes Gewicht mit gestreckten Armen nach vorn hältst. Das Gegengewicht verlagert den Schwerpunkt nach vorn und erleichtert Gleichgewicht und Tiefe, während die Beine voll arbeiten.",
      ausfuehrung: [
        "Halte eine leichte Kurzhantel, Kettlebell oder Hantelscheibe mit beiden Händen und gestreckten Armen vor dem Körper.",
        "Stell dich auf ein Bein, das freie Bein leicht nach vorn gestreckt.",
        "Senke dich langsam auf dem Standbein ab und schieb das Gewicht dabei weiter nach vorn.",
        "Geh in die volle Tiefe, die Ferse bleibt am Boden, das freie Bein schwebt.",
        "Drück dich gleichmäßig hoch, das Gewicht bleibt vor dir.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Gewicht zu schwer: zwei bis fünf Kilogramm reichen als Gegengewicht.",
        "Arme sinken ab: Gewicht auf Brust- bis Schulterhöhe halten.",
        "Knie fällt nach innen: Knie über die Zehen.",
        "Schwung beim Hochkommen: gleichmäßig drücken."
      ],
      vorteile: [
        "Erleichtert das Lernen des Pistol Squats.",
        "Volle Tiefe bei besserer Balance.",
        "Trainiert auch die vordere Schulter mit.",
        "Gute Zwischenstufe zwischen Halt und freier Ausführung."
      ],
      tipps: [
        "Je schwerer das Gegengewicht, desto leichter die Balance, aber nicht unbedingt die Beinarbeit.",
        "Reduziere das Gegengewicht mit der Zeit.",
        "Gut für Fortgeschrittene mit begrenzter Sprunggelenksbeweglichkeit."
      ],
      varianten: "Leichter: von der Box aus oder mit Halt. Schwerer: ohne Gegengewicht oder mit Gewicht im Goblet-Griff.",
      sicherheit: "Bei Kniebeschwerden auslassen oder Tiefe begrenzen."
    }
  },
  {
    id: "skater_squat",
    name: "Skater Squat",
    auch: ["Skater Squat", "Eisläufer-Kniebeuge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "beinbeuger"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    einseitig: true,
    sport: ["golf", "fussball", "ski"],
    golf: 2,
    schwerer: "shrimp_squat",
    info: {
      kurz: "Einbeinige Kniebeuge, bei der das freie Bein gebeugt nach hinten geht und das Knie den Boden antippt. Der Oberkörper neigt sich leicht nach vorn, was neben dem Quadrizeps auch das Gesäß stark fordert.",
      ausfuehrung: [
        "Leg eine Matte oder ein Kissen hinter dich auf den Boden, als Ziel für das hintere Knie.",
        "Stell dich auf ein Bein und beuge das andere Knie, sodass der Fuß hinter dir in der Luft ist.",
        "Streck die Arme nach vorn als Gegengewicht.",
        "Senke dich auf dem Standbein ab, der Oberkörper neigt sich leicht nach vorn, das Knie bleibt über dem Fuß.",
        "Geh so tief, bis das hintere Knie die Matte leicht berührt.",
        "Drück dich aus dem Standbein wieder hoch, ohne das hintere Bein abzustellen."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Knie knallt auf den Boden: kontrolliert absenken und nur antippen.",
        "Abstoßen mit dem hinteren Knie: nur antippen, nicht drücken.",
        "Standknie fällt nach innen: Knie über die Zehen.",
        "Rundrücken: Oberkörper neigt sich mit geradem Rücken."
      ],
      vorteile: [
        "Starke einbeinige Kraft ohne Gerät.",
        "Weniger Sprunggelenksbeweglichkeit nötig als beim Pistol Squat.",
        "Trainiert Gesäß und Quadrizeps gemeinsam.",
        "Fördert Gleichgewicht und Beinachsenkontrolle."
      ],
      tipps: [
        "Beginne mit einem hohen Ziel, etwa einem dicken Kissen oder einer Stufe.",
        "Eine leichte Hantel in den Händen kann die Balance erleichtern.",
        "Wird von Sportwissenschaftlern oft als knieschonende einbeinige Alternative empfohlen."
      ],
      varianten: "Leichter: höheres Ziel für das Knie oder mit Halt. Schwerer: Shrimp Squat oder mit Zusatzgewicht.",
      sicherheit: "Matte oder Polster unter das Knie. Bei Kniebeschwerden nur schmerzfrei üben.",
      golf: "Kräftigt das Standbein in einer leicht vorgeneigten Position, ähnlich der Ansprechhaltung. Mehr einbeinige Kraft hilft, den Schwung über dem Führungsbein stabil abzuschließen."
    }
  },
  {
    id: "shrimp_squat",
    name: "Shrimp Squat",
    auch: ["Shrimp Squat", "Garnelen-Kniebeuge"],
    muster: "einbeinig",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["gesaess_mittel", "hueftbeuger"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 3,
    einseitig: true,
    sport: ["fussball", "ski"],
    info: {
      kurz: "Einbeinige Kniebeuge, bei der du den Fuß des freien Beins hinter dem Körper mit der Hand festhältst und das hintere Knie zum Boden absenkst. Durch den aufrechten Oberkörper ist sie sehr quadrizepslastig und anspruchsvoller als der Skater Squat.",
      ausfuehrung: [
        "Stell dich auf ein Bein, beuge das andere Knie und greif den Fuß hinter dir mit der Hand derselben Seite.",
        "Streck den freien Arm als Gegengewicht nach vorn.",
        "Senke dich langsam auf dem Standbein ab, das Knie wandert über die Zehen, der Oberkörper bleibt relativ aufrecht.",
        "Geh tief, bis das hintere Knie den Boden oder die Matte berührt.",
        "Drück dich aus dem Standbein wieder hoch, ohne mit dem hinteren Knie abzustoßen.",
        "Mach alle Wiederholungen auf einer Seite, dann wechsle."
      ],
      atmung: "Beim Absenken einatmen, beim Aufstehen ausatmen.",
      fehler: [
        "Knie knallt auf: langsam und kontrolliert absenken.",
        "Ferse hebt ab: Gewicht über die ganze Fußsohle.",
        "Standknie fällt nach innen: Knie über die Zehen.",
        "Zu früh freihändig: erst mit erhöhtem Ziel üben."
      ],
      vorteile: [
        "Sehr hohe Quadrizepsbelastung auf einem Bein ohne Gerät.",
        "Fordert Gleichgewicht und Körperkontrolle stark.",
        "Dehnt nebenbei den Hüftbeuger und Quadrizeps des hinteren Beins.",
        "Gute Alternative zum Pistol Squat."
      ],
      tipps: [
        "Beginne mit einem Kissen oder einer Stufe als höheres Ziel.",
        "Wenn das Greifen des Fußes schwerfällt, nur das Knie beugen ohne zu greifen.",
        "Beide Arme nach vorn gestreckt ist schwerer als mit Fuß in der Hand."
      ],
      varianten: "Leichter: Skater Squat oder höheres Ziel. Schwerer: beide Arme nach vorn gestreckt oder mit Gewicht.",
      sicherheit: "Hohe Kniebelastung. Bei Kniebeschwerden auslassen. Polster unter das Knie legen."
    }
  },
  {
    id: "frontkniebeuge_kh",
    name: "Frontkniebeuge mit Kurzhanteln",
    auch: ["Dumbbell Front Squat", "DB Front Squat"],
    muster: "kniebeuge",
    art: "kraft",
    muskeln: ["quadrizeps", "gesaess"],
    sekundaer: ["bauch", "oberer_ruecken"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 2 },
    stufe: 1,
    info: {
      kurz: "Kniebeuge mit je einer Kurzhantel auf den Schultern. Sie bietet die aufrechte Position der Frontkniebeuge ohne die Handgelenksbelastung des Front-Rack-Griffs und erlaubt mehr Gewicht als die Goblet-Kniebeuge.",
      ausfuehrung: [
        "Heb zwei Kurzhanteln auf die Schultern, ein Ende liegt jeweils auf dem vorderen Schultermuskel, die Ellbogen zeigen nach vorn.",
        "Stell die Füße schulterbreit, Zehen leicht nach außen.",
        "Atme ein, spann den Bauch an und senke dich gerade nach unten ab.",
        "Halte die Ellbogen hoch und den Oberkörper aufrecht.",
        "Geh so tief, wie der Rücken neutral bleibt.",
        "Drück dich hoch und halte die Hanteln dabei ruhig auf den Schultern."
      ],
      atmung: "Beim Absenken einatmen und halten, beim Aufstehen ausatmen.",
      fehler: [
        "Hanteln rutschen von den Schultern: Ellbogen höher und Hanteln fester an die Schultern drücken.",
        "Oberer Rücken rundet sich: Brust aufrecht.",
        "Fersen heben ab: breiter stehen oder Fersen leicht erhöhen.",
        "Knie fallen nach innen: Knie über die Zehen."
      ],
      vorteile: [
        "Aufrechter Oberkörper und starke Quadrizepsarbeit.",
        "Weniger Belastung für die Handgelenke als mit Langhantel.",
        "Mehr Gewicht als bei der Goblet-Kniebeuge.",
        "Gut für zu Hause mit verstellbaren Kurzhanteln."
      ],
      tipps: [
        "Mit erhöhten Fersen wird sie noch quadrizepslastiger.",
        "Der Rumpf ermüdet oft vor den Beinen, mittlere Wiederholungen von 6 bis 12 passen gut.",
        "Gut als Wechselübung zur Langhantel-Frontkniebeuge."
      ],
      varianten: "Leichter: Goblet-Kniebeuge. Schwerer: Pause unten oder Eineinhalb-Wiederholungen.",
      sicherheit: "Bei Schulterbeschwerden kann die Haltung stören, dann seitlich gehaltene Hanteln wählen."
    }
  },
]
