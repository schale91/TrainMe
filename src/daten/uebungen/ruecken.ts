import type { Uebung } from "../../logik/typen"

export const RUECKEN: Uebung[] = [
  // ---------- Ziehen vertikal: Klimmzüge ----------
  {
    id: "klimmzug",
    name: "Klimmzug im Obergriff",
    auch: ["Pull-Up", "Overhand Pull-Up", "Klimmzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "trapez", "schulter_hinten", "bauch"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    sport: ["klettern", "schwimmen", "golf"],
    golf: 2,
    schwerer: "klimmzug_gewicht",
    info: {
      kurz: "Der klassische Klimmzug mit Handflächen nach vorn. Er ist die Grundübung für einen breiten, starken Rücken und zeigt sehr ehrlich, wie viel Kraft du im Verhältnis zu deinem Körpergewicht hast.",
      ausfuehrung: [
        "Greif die Stange etwas breiter als schulterbreit im Obergriff, die Daumen umschließen die Stange.",
        "Häng dich mit gestreckten Armen aus, die Beine sind geschlossen und leicht vor dem Körper, der Bauch ist fest.",
        "Starte die Bewegung, indem du die Schulterblätter nach unten ziehst, als wolltest du sie in die hinteren Hosentaschen stecken.",
        "Zieh dann die Ellbogen kraftvoll nach unten und hinten zu den Rippen, bis das Kinn über der Stange ist und die Brust in Richtung Stange zeigt.",
        "Halte oben kurz, ohne den Kopf nach vorn zu strecken.",
        "Senke dich in etwa zwei bis drei Sekunden kontrolliert ab, bis die Arme wieder ganz gestreckt sind und du die Dehnung im Latissimus spürst.",
        "Beginne jede Wiederholung aus dem ruhigen Hang, ohne Schwung aus den Beinen."
      ],
      atmung: "Atme unten ein, halte die Spannung im Bauch und atme während des Hochziehens oder oben aus. Beim Absenken wieder einatmen.",
      fehler: [
        "Halbe Wiederholungen ohne Streckung unten: jede Wiederholung aus dem ganzen Hang beginnen, dort entsteht der wertvolle Dehnreiz.",
        "Schwung aus Hüfte und Beinen: Beine ruhig halten, Bauch und Gesäß leicht anspannen.",
        "Kinn wird über die Stange gereckt: Brust zur Stange führen, der Nacken bleibt lang.",
        "Schultern rutschen zu den Ohren: zuerst Schulterblätter nach unten ziehen, dann die Arme beugen.",
        "Unkontrolliertes Fallenlassen: die Absenkphase bewusst bremsen."
      ],
      vorteile: [
        "Kräftigt Latissimus, oberen Rücken und Bizeps in einer einzigen Bewegung.",
        "Verbessert die Kraft im Verhältnis zum Körpergewicht, wichtig für Klettern, Turnen und viele Sportarten.",
        "Trainiert die Rumpfspannung im Hang mit.",
        "Großer Bewegungsumfang mit starker Dehnung des Latissimus unten."
      ],
      tipps: [
        "Denk an „Ellbogen in die Hosentaschen“ statt an „Kinn über die Stange“, dann arbeitet der Rücken mehr.",
        "Schaffst du mehr als 12 saubere Wiederholungen, wechsle auf Klimmzüge mit Zusatzgewicht.",
        "Verteil viele Wiederholungen auf mehrere Sätze, statt jeden Satz bis zum völligen Versagen zu gehen."
      ],
      varianten: "Leichter: mit Bandunterstützung, Fußunterstützung oder nur negativ. Schwerer: mit Zusatzgewicht, langsamer Absenkphase oder Pause oben.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden lieber den neutralen Griff wählen und den untersten Hang nicht passiv durchhängen lassen.",
      golf: "Der Latissimus zieht im Abschwung den Arm kraftvoll nach unten und verbindet Arm und Rumpf. Klimmzüge stärken genau diese Kette und helfen, eine stabile Schulterposition im Rückschwung zu halten."
    }
  },
  {
    id: "klimmzug_untergriff",
    name: "Klimmzug im Untergriff",
    auch: ["Chin-Up", "Chinup", "Untergriff-Klimmzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "bizeps"],
    sekundaer: ["oberer_ruecken", "unterarm", "bauch"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "klimmzug",
    info: {
      kurz: "Klimmzug mit Handflächen zu dir. Der Bizeps hilft deutlich mehr mit, deshalb schaffen die meisten hier mehr Wiederholungen als im Obergriff. Sehr gut für Latissimus und Arme gleichzeitig.",
      ausfuehrung: [
        "Greif die Stange schulterbreit im Untergriff, die Handflächen zeigen zu dir.",
        "Häng dich mit gestreckten Armen aus, die Beine sind geschlossen, der Bauch ist fest.",
        "Zieh die Schulterblätter nach unten und beginne dann, die Ellbogen eng am Körper nach unten zu führen.",
        "Zieh dich hoch, bis das Kinn über der Stange ist und die Brust fast die Stange berührt.",
        "Halte oben kurz und spann den Rücken bewusst an.",
        "Senke dich in zwei bis drei Sekunden ab, bis die Arme wieder ganz gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen, beim Absenken wieder einatmen.",
      fehler: [
        "Ellbogen bleiben unten gebeugt: unten ganz strecken, sonst fehlt die Dehnung im Latissimus.",
        "Zu enger Griff mit abgeknickten Handgelenken: schulterbreit greifen, Handgelenke gerade.",
        "Hohlkreuz und Schwung: Becken leicht nach hinten kippen, Beine ruhig.",
        "Nur aus den Armen ziehen: an die Ellbogen denken, nicht an die Hände."
      ],
      vorteile: [
        "Kräftigt Latissimus und Bizeps gemeinsam, ideal bei wenig Trainingszeit.",
        "Leichterer Einstieg in das Klimmzugtraining als der Obergriff.",
        "Die Ellbogenbahn nah am Körper spricht den unteren Latissimus gut an."
      ],
      tipps: [
        "Nutze den Untergriff, um mehr Wiederholungen zu sammeln, wenn der Obergriff noch schwerfällt.",
        "Eine kurze Pause oben macht die Übung für den Rücken deutlich intensiver."
      ],
      varianten: "Leichter: mit Band oder nur die Absenkphase. Schwerer: mit Zusatzgewicht oder langsamer Absenkphase von vier Sekunden.",
      sicherheit: "Bei Beschwerden an der Innenseite des Ellbogens oder am Bizepsansatz lieber neutral greifen und das Volumen reduzieren."
    }
  },
  {
    id: "klimmzug_neutral",
    name: "Klimmzug mit neutralem Griff",
    auch: ["Neutral Grip Pull-Up", "Hammer Grip Pull-Up", "Parallelgriff-Klimmzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "bauch"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "klimmzug",
    hinweis: "Parallelgriffe nutzen, Handflächen zeigen zueinander.",
    info: {
      kurz: "Klimmzug an parallelen Griffen, die Handflächen zeigen zueinander. Diese Handstellung ist für Schultern und Ellbogen oft am angenehmsten und erlaubt meist die höchste Last.",
      ausfuehrung: [
        "Greif die parallelen Griffe der Klimmzugstange, die Handflächen zeigen zueinander, die Hände etwa schulterbreit.",
        "Häng dich mit gestreckten Armen aus, Beine geschlossen, Rumpf fest.",
        "Zieh zuerst die Schulterblätter nach unten, die Brust geht leicht nach vorn oben.",
        "Zieh die Ellbogen nah am Körper nach unten, bis das Kinn über den Griffen ist.",
        "Halte oben eine Sekunde und drück die Brust Richtung Griffe.",
        "Senke dich kontrolliert ab, bis die Arme ganz gestreckt sind."
      ],
      atmung: "Unten einatmen und Spannung aufbauen, beim Hochziehen ausatmen.",
      fehler: [
        "Ellbogen weichen weit nach außen: Ellbogen nah an den Rippen führen.",
        "Kopf wird nach vorn geschoben: Blick nach vorn, Nacken lang.",
        "Zu schnelles Absenken: zwei bis drei Sekunden Kontrolle einplanen."
      ],
      vorteile: [
        "Oft gelenkfreundlichste Klimmzugvariante für Schultern und Ellbogen.",
        "Kräftigt Latissimus, Bizeps und den Oberarmspeichenmuskel.",
        "Gut geeignet, um mit Zusatzgewicht schwer zu trainieren."
      ],
      tipps: [
        "Wenn deine Stange keine Parallelgriffe hat, kannst du ein V-Griff-Stück über die Stange hängen.",
        "Für Leute mit empfindlichen Schultern ist dies meist die beste Hauptvariante."
      ],
      varianten: "Leichter: mit Band. Schwerer: mit Zusatzgewicht oder Pause in der Mitte der Bewegung.",
      sicherheit: "Bei akuten Schulterschmerzen auf Latzug ausweichen, um die Last genau dosieren zu können."
    }
  },
  {
    id: "klimmzug_weit",
    name: "Klimmzug mit weitem Griff",
    auch: ["Wide-Grip Pull-Up", "Breiter Klimmzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps", "unterarm"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    schwerer: "klimmzug_archer",
    info: {
      kurz: "Klimmzug im Obergriff mit deutlich mehr als schulterbreitem Griff. Der Bewegungsweg ist kürzer, die Arme ziehen stärker von der Seite herunter, und der obere Rücken arbeitet mehr mit.",
      ausfuehrung: [
        "Greif die Stange im Obergriff etwa eineinhalbfach schulterbreit, nicht extrem weit.",
        "Häng dich aus, Arme gestreckt, Beine geschlossen, Rumpf fest.",
        "Zieh die Schulterblätter nach unten und leicht zusammen.",
        "Zieh die Ellbogen seitlich nach unten zu den Hüften, bis die obere Brust nah an der Stange ist.",
        "Halte oben kurz, die Brust bleibt offen.",
        "Senke dich langsam und kontrolliert ab, bis die Arme gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Zu weiter Griff: dann wird der Weg sehr kurz und die Schulter stark belastet, lieber etwa eineinhalbfach schulterbreit greifen.",
        "Kopf wird vor die Stange geschoben: Brust zur Stange, nicht das Kinn.",
        "Halbe Wiederholungen: unten ganz strecken."
      ],
      vorteile: [
        "Betont die Zugrichtung von der Seite, die dem Rücken Breite gibt.",
        "Fordert den oberen Rücken und die Schulterblattmuskeln stärker als der enge Griff.",
        "Abwechslung für Fortgeschrittene, die den normalen Klimmzug sicher beherrschen."
      ],
      tipps: [
        "Kombiniere ihn mit einer engeren Variante in derselben Woche, um alle Zugrichtungen abzudecken.",
        "Rechne mit zwei bis drei Wiederholungen weniger als im normalen Obergriff."
      ],
      varianten: "Leichter: mit Band oder am Latzug mit weitem Griff. Schwerer: mit Zusatzgewicht oder als Archer-Klimmzug.",
      sicherheit: "Bei eingeschränkter Schulterbeweglichkeit oder Impingement-Beschwerden lieber normal breit oder neutral greifen."
    }
  },
  {
    id: "klimmzug_gewicht",
    name: "Klimmzug mit Zusatzgewicht",
    auch: ["Weighted Pull-Up", "Weighted Chin-Up", "Gewichtsklimmzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "bauch"],
    geraete: [["klimmzugstange", "kurzhantel"], ["klimmzugstange", "hantelscheibe"], ["klimmzugstange", "kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 3,
    golf: 1,
    hinweis: "Gewicht am Dipgürtel oder Kurzhantel zwischen den Füßen.",
    info: {
      kurz: "Klimmzug mit zusätzlichem Gewicht am Dipgürtel oder zwischen den Füßen. Damit kannst du die vertikale Zugkraft auch dann weiter steigern, wenn du viele Klimmzüge mit dem eigenen Körpergewicht schaffst.",
      ausfuehrung: [
        "Befestige eine Hantelscheibe oder Kettlebell am Dipgürtel oder klemm eine Kurzhantel zwischen die Füße.",
        "Stell dich auf eine Erhöhung, greif die Stange im gewohnten Griff und häng dich vorsichtig aus.",
        "Lass das Gewicht ruhig auspendeln, bevor du startest. Beine geschlossen, Bauch fest.",
        "Zieh die Schulterblätter nach unten und dann die Ellbogen kräftig zu den Rippen, bis das Kinn über der Stange ist.",
        "Senke dich kontrolliert in zwei bis drei Sekunden in den ganzen Hang ab.",
        "Nach dem Satz steigst du auf die Erhöhung zurück, statt mit Gewicht herunterzuspringen."
      ],
      atmung: "Unten tief einatmen und den Bauch fest machen, oben oder während des Hochziehens ausatmen.",
      fehler: [
        "Zu viel Gewicht und nur noch halbe Wiederholungen: Gewicht so wählen, dass jeder Klimmzug vollständig bleibt.",
        "Gewicht pendelt und erzeugt Schwung: vor jeder Wiederholung kurz ruhig werden.",
        "Herunterspringen mit Gewicht: immer auf eine Erhöhung absteigen.",
        "Schultern hängen passiv: Schulterblätter auch unten leicht aktiv halten."
      ],
      vorteile: [
        "Ermöglicht schweres Krafttraining im Bereich von drei bis acht Wiederholungen.",
        "Sehr wirksam für Rückenmuskulatur und Zugkraft.",
        "Die Steigerung ist in kleinen Schritten messbar."
      ],
      tipps: [
        "Beginne mit Zusatzgewicht erst, wenn du etwa zehn saubere Klimmzüge schaffst.",
        "Der neutrale Griff erlaubt bei vielen die höchste Last.",
        "Kleine Scheiben von 1,25 kg helfen, regelmäßig zu steigern."
      ],
      varianten: "Leichter: weniger Gewicht oder normaler Klimmzug. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Nicht bei akuten Schulter- oder Ellbogenbeschwerden. Saubere Technik ohne Zusatzlast ist Voraussetzung."
    }
  },
  {
    id: "klimmzug_exzentrisch_betont",
    name: "Klimmzug mit betonter Absenkphase",
    auch: ["Ecc.-Accentuated Pull-Up", "Eccentric-Accentuated Pull-Up", "Tempo Pull-Up", "3-0-3 Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "bauch"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    schwerer: "klimmzug_gewicht",
    hinweis: "Normal hochziehen, dann drei bis vier Sekunden absenken.",
    info: {
      kurz: "Normaler Klimmzug, bei dem du jede Wiederholung sehr langsam absenkst. Die verlängerte Absenkphase erhöht die Spannungszeit im gedehnten Latissimus und baut Kontrolle auf.",
      ausfuehrung: [
        "Greif die Stange im Obergriff oder neutral, etwa schulterbreit, und häng dich aus.",
        "Spann den Bauch an und zieh die Schulterblätter nach unten.",
        "Zieh dich zügig, aber sauber hoch, bis das Kinn über der Stange ist.",
        "Halte oben kurz an, ohne die Spannung im Rücken zu verlieren.",
        "Senke dich über drei bis vier Sekunden gleichmäßig ab. Zähle dabei mit und bremse besonders im letzten Drittel.",
        "Komm unten in den ganz gestreckten Hang und starte die nächste Wiederholung ohne Schwung."
      ],
      atmung: "Beim Hochziehen ausatmen, während des langsamen Absenkens ruhig einatmen oder in kleinen Zügen weiteratmen.",
      fehler: [
        "Absenkphase wird zum Ende hin schneller: gerade das letzte Stück vor der Streckung bewusst bremsen.",
        "Zu viele Wiederholungen geplant: rechne mit etwa zwei Wiederholungen weniger als normal.",
        "Unten nicht ganz strecken: die Dehnposition ist der wertvollste Teil."
      ],
      vorteile: [
        "Mehr Spannungszeit in der Dehnposition, ein starker Reiz für Muskelaufbau.",
        "Verbessert die Kontrolle über die ganze Bewegungsbahn.",
        "Gute Brücke zwischen normalen und gewichteten Klimmzügen."
      ],
      tipps: [
        "Zähle laut oder im Kopf „eins und zwei und drei“, um das Tempo zu halten.",
        "Wenn du die Absenkphase nicht mehr kontrollieren kannst, beende den Satz."
      ],
      varianten: "Leichter: mit Bandunterstützung. Schwerer: mit Zusatzgewicht oder fünf Sekunden Absenkphase.",
      sicherheit: "Langsame Absenkphasen erzeugen stärkeren Muskelkater. Bei Ellbogenbeschwerden das Volumen anfangs gering halten."
    }
  },
  {
    id: "klimmzug_exzentrisch_overload",
    name: "Klimmzug mit exzentrischer Überlast",
    auch: ["Ecc.-Overload Pull-Up", "Eccentric-Overload Pull-Up", "Supramaximal Negative Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm"],
    geraete: [["klimmzugstange", "kurzhantel", "box"], ["klimmzugstange", "hantelscheibe", "box"], ["klimmzugstange", "kurzhantel"], ["klimmzugstange", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 2 },
    stufe: 3,
    hinweis: "Mit Box oder Sprung hoch, mit mehr Gewicht als sonst langsam ablassen.",
    info: {
      kurz: "Du kommst mit Hilfe einer Box oder eines Sprungs in die obere Position und senkst dich mit mehr Zusatzgewicht ab, als du hochziehen könntest. Die Muskeln sind in der Absenkphase stärker, diese Methode nutzt das gezielt aus.",
      ausfuehrung: [
        "Stell eine stabile Box unter die Stange und hänge ein Gewicht an den Dipgürtel oder klemm eine Kurzhantel zwischen die Füße.",
        "Wähle etwa 10 bis 20 Prozent mehr Gewicht als bei deinen normalen gewichteten Klimmzügen.",
        "Steig oder spring so hoch, dass das Kinn über der Stange ist, und stabilisiere dich dort kurz.",
        "Senke dich über drei bis fünf Sekunden kontrolliert ab, bis die Arme ganz gestreckt sind.",
        "Stell die Füße zurück auf die Box und bring dich für die nächste Wiederholung wieder nach oben.",
        "Mache nur wenige Wiederholungen pro Satz, meist drei bis fünf."
      ],
      atmung: "Oben kurz einatmen und Spannung halten, während des Absenkens langsam ausatmen.",
      fehler: [
        "Sich unten fallen lassen: die Bremsung muss bis zur vollen Streckung gleichmäßig bleiben.",
        "Zu viel Gewicht: wenn du nicht mindestens drei Sekunden kontrollieren kannst, ist es zu schwer.",
        "Zu viele Sätze: diese Methode ist sehr intensiv, ein bis drei Sätze reichen.",
        "Hochspringen mit pendelndem Gewicht: lieber von der Box steigen."
      ],
      vorteile: [
        "Sehr starker Kraftreiz, weil die Absenkphase mit Überlast trainiert wird.",
        "Hilft, Plateaus beim gewichteten Klimmzug zu überwinden.",
        "Stärkt Sehnen und Bindegewebe bei sorgfältiger Dosierung."
      ],
      tipps: [
        "Setz diese Variante am Ende des Rückentrainings als letzten schweren Satz ein.",
        "Nur für erfahrene Trainierende, die gewichtete Klimmzüge sicher beherrschen.",
        "Plane nach solchen Einheiten genug Erholung ein."
      ],
      varianten: "Leichter: als normaler negativer Klimmzug ohne Zusatzgewicht. Schwerer: mehr Gewicht oder längere Absenkphase.",
      sicherheit: "Nicht bei Ellbogen- oder Schulterbeschwerden. Hohe Belastung für Sehnen, deshalb langsam einsteigen."
    }
  },
  {
    id: "klimmzug_band",
    name: "Klimmzug mit Bandunterstützung",
    auch: ["Band-Assisted Pull-Up", "Assisted Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm"],
    geraete: [["klimmzugstange", "band"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "klimmzug",
    hinweis: "Band um die Stange schlingen, ein Knie oder Fuß ins Band.",
    info: {
      kurz: "Klimmzug, bei dem ein Widerstandsband dich unten anschiebt. So kannst du den vollen Bewegungsablauf mit sauberen Wiederholungen üben, bevor du ihn mit dem eigenen Körpergewicht schaffst.",
      ausfuehrung: [
        "Schling ein Band mittig um die Stange und zieh ein Ende durch das andere, damit es fest sitzt.",
        "Stell dich auf eine Erhöhung, greif die Stange etwas breiter als schulterbreit und setz ein Knie oder einen Fuß in die Schlaufe.",
        "Häng dich langsam aus, bis die Arme gestreckt sind, Bauch und Gesäß leicht angespannt.",
        "Zieh die Schulterblätter nach unten und dann die Ellbogen zu den Rippen, bis das Kinn über der Stange ist.",
        "Senke dich in zwei bis drei Sekunden ab und widerstehe dem Zug des Bandes.",
        "Steig nach dem Satz vorsichtig aus dem Band, damit es nicht zurückschnellt."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Unten wird man vom Band hochkatapultiert: aus dem ruhigen Hang starten und die Absenkphase bremsen.",
        "Zu starkes Band über Wochen: regelmäßig ein schwächeres Band wählen.",
        "Körper pendelt nach vorn: Bauch fest, Fuß im Band unter dem Körper halten."
      ],
      vorteile: [
        "Ermöglicht vollständige Klimmzüge für Einsteiger.",
        "Trainiert dieselbe Bewegung wie der echte Klimmzug, nur leichter.",
        "Gut abstufbar über die Bandstärke."
      ],
      tipps: [
        "Das Band hilft unten am meisten und oben am wenigsten, genau dort, wo du am schwächsten bist.",
        "Kombiniere bandunterstützte Klimmzüge mit negativen Klimmzügen für den schnellsten Fortschritt."
      ],
      varianten: "Leichter: stärkeres Band oder Fuß statt Knie in der Schlaufe. Schwerer: dünneres Band oder Wechsel auf negative Klimmzüge.",
      sicherheit: "Band vor jedem Einsatz auf Risse prüfen. Nicht mit dem Band in der Schlaufe von der Stange springen."
    }
  },
  {
    id: "klimmzug_negativ",
    name: "Negativer Klimmzug",
    auch: ["Negative Pull-Up", "Eccentric Pull-Up", "Pull-Up Negative"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm"],
    geraete: [["klimmzugstange", "box"], ["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    schwerer: "klimmzug",
    hinweis: "Von der Erhöhung nach oben, dann fünf Sekunden absenken.",
    info: {
      kurz: "Du bringst dich mit einer Erhöhung oder einem Sprung in die obere Position und senkst dich langsam ab. Das ist einer der besten Wege, um zum ersten richtigen Klimmzug zu kommen.",
      ausfuehrung: [
        "Stell eine Box oder einen stabilen Stuhl unter die Stange.",
        "Greif die Stange schulterbreit im Obergriff oder Untergriff.",
        "Steig oder spring hoch, bis das Kinn über der Stange ist, und zieh die Schulterblätter nach unten.",
        "Nimm die Füße weg und senke dich über drei bis fünf Sekunden so gleichmäßig wie möglich ab.",
        "Komm unten in den ganz gestreckten Hang.",
        "Stell die Füße zurück auf die Erhöhung und wiederhole."
      ],
      atmung: "Oben einatmen, während des Absenkens langsam ausatmen.",
      fehler: [
        "Oben schnell durchsacken: gerade das erste Stück unter der Stange bewusst halten.",
        "Zu viele Wiederholungen mit nachlassender Kontrolle: lieber mehr Sätze mit drei bis fünf Wiederholungen.",
        "Schultern hängen bis zu den Ohren: Schulterblätter aktiv nach unten halten."
      ],
      vorteile: [
        "Baut Kraft für den ganzen Klimmzug auf, auch ohne Hilfsmittel.",
        "Die Muskeln sind beim Absenken stärker, daher klappt das früher als der Klimmzug.",
        "Trainiert die Kontrolle in der gedehnten Position."
      ],
      tipps: [
        "Wenn du fünf Sekunden sauber absenken kannst, ist dein erster Klimmzug meist nicht mehr weit.",
        "Teste zwischendurch einen echten Klimmzug, am besten frisch zu Beginn der Einheit."
      ],
      varianten: "Leichter: kürzere Absenkphase oder Füße leicht auf der Box lassen. Schwerer: längere Absenkphase oder Pausen in der Mitte.",
      sicherheit: "Erzeugt deutlichen Muskelkater. Bei Ellbogenbeschwerden mit wenigen Wiederholungen beginnen."
    }
  },
  {
    id: "klimmzug_box",
    name: "Klimmzug mit Fußunterstützung",
    auch: ["Foot-Assisted Pull-Up", "Box-Assisted Pull-Up", "Jumping Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm"],
    geraete: [["klimmzugstange", "box"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "klimmzug_negativ",
    info: {
      kurz: "Klimmzug, bei dem du mit den Füßen auf einer Box stehst und nur so viel mit den Beinen hilfst, wie nötig. So dosierst du die Unterstützung bei jeder Wiederholung selbst.",
      ausfuehrung: [
        "Stell eine Box so unter die Stange, dass du mit gestreckten Armen hängen kannst und die Füße oder Zehen die Box berühren.",
        "Greif die Stange schulterbreit, Arme gestreckt, Knie leicht gebeugt.",
        "Zieh die Schulterblätter nach unten und beginne mit den Armen zu ziehen.",
        "Drück dich nur so viel mit den Beinen ab, wie nötig ist, um das Kinn über die Stange zu bringen.",
        "Senke dich langsam ab und nutze die Beine dabei so wenig wie möglich.",
        "Komm unten wieder in die gestreckte Armposition."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Die Beine machen die ganze Arbeit: bewusst zuerst mit dem Rücken ziehen.",
        "Box zu hoch: die Arme sollen unten ganz gestreckt sein.",
        "Schnelles Fallenlassen: die Absenkphase mit den Armen kontrollieren."
      ],
      vorteile: [
        "Fein dosierbare Unterstützung ohne Band.",
        "Ermöglicht volle Klimmzugbewegungen für Einsteiger.",
        "Gute Übung, um das Ziehen aus dem Rücken zu lernen."
      ],
      tipps: [
        "Stell dir vor, die Beine seien nur ein Notfallplan für die letzten Zentimeter.",
        "Kombiniere sie mit negativen Klimmzügen, um schneller voranzukommen."
      ],
      varianten: "Leichter: mehr Beinarbeit. Schwerer: nur einen Fuß aufsetzen oder Wechsel auf negative Klimmzüge.",
      sicherheit: "Die Box muss rutschfest stehen. Bei Schulterbeschwerden den untersten Hang aktiv halten."
    }
  },
  {
    id: "klimmzug_schulterblatt",
    name: "Schulterblatt-Klimmzug",
    auch: ["Scap Pull-Up", "Scapular Pull-Up", "Scap Shrug Hang"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["trapez", "latissimus"],
    sekundaer: ["oberer_ruecken", "unterarm"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "klimmzug_negativ",
    info: {
      kurz: "Im Hang ziehst du mit gestreckten Armen nur die Schulterblätter nach unten und hebst dich dadurch ein paar Zentimeter an. Die Übung lehrt den richtigen Start jedes Klimmzugs und kräftigt den unteren Trapezmuskel.",
      ausfuehrung: [
        "Greif die Stange schulterbreit im Obergriff und häng dich mit gestreckten Armen aus.",
        "Lass die Schultern zunächst locker nach oben zu den Ohren kommen.",
        "Zieh nun die Schulterblätter nach unten und leicht zusammen, ohne die Ellbogen zu beugen.",
        "Dein Körper hebt sich dabei einige Zentimeter, die Brust geht leicht nach vorn.",
        "Halte die obere Position ein bis zwei Sekunden.",
        "Lass dich langsam wieder in den lockeren Hang sinken."
      ],
      atmung: "Beim Herunterziehen der Schulterblätter ausatmen, beim Ablassen einatmen.",
      fehler: [
        "Ellbogen beugen sich: Arme bleiben die ganze Zeit gestreckt, nur die Schulterblätter bewegen sich.",
        "Schwung aus den Beinen: Körper ruhig halten.",
        "Zu schnell: jede Wiederholung bewusst halten."
      ],
      vorteile: [
        "Kräftigt den unteren Trapezmuskel und die Schulterblattsteuerung.",
        "Bereitet perfekt auf Klimmzüge vor und dient als Aufwärmübung.",
        "Verbessert die Haltung der Schultern im Alltag."
      ],
      tipps: [
        "Ideal als Aufwärmsatz vor jedem Klimmzug- oder Latzugtraining.",
        "Stell dir vor, du drückst die Stange mit gestreckten Armen Richtung Boden."
      ],
      varianten: "Leichter: mit Füßen auf einer Box. Schwerer: längere Haltezeit oben oder mit Zusatzgewicht.",
      sicherheit: "Bei Schulterinstabilität den untersten Hang nicht ganz passiv werden lassen."
    }
  },
  {
    id: "klimmzug_halten",
    name: "Klimmzug-Halten oben",
    auch: ["Flexed-Arm Hang", "Pull-Up Hold", "Isometric Chin Hold"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "bizeps"],
    sekundaer: ["oberer_ruecken", "unterarm", "bauch"],
    geraete: [["klimmzugstange", "box"], ["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 1,
    schwerer: "klimmzug_negativ",
    info: {
      kurz: "Du hältst dich mit dem Kinn über der Stange in der obersten Klimmzugposition. Das baut Kraft in der Endposition auf und ist ein guter Einstieg für alle, die noch keinen Klimmzug schaffen.",
      ausfuehrung: [
        "Stell eine Box unter die Stange und greif sie schulterbreit im Untergriff oder Obergriff.",
        "Steig oder spring hoch, bis das Kinn über der Stange ist.",
        "Zieh die Schulterblätter nach unten und die Ellbogen eng an den Körper.",
        "Nimm die Füße weg und halte diese Position ruhig.",
        "Halte die vorgegebene Zeit. Wenn du absinkst, bremse den Weg nach unten langsam ab.",
        "Stell die Füße zurück auf die Box und mach Pause."
      ],
      atmung: "Atme ruhig und gleichmäßig weiter, nicht pressen.",
      fehler: [
        "Kinn wird über die Stange gereckt: Brust nach oben, Nacken lang.",
        "Schultern ziehen zu den Ohren: Schulterblätter aktiv nach unten halten.",
        "Beine strampeln: Beine geschlossen und ruhig."
      ],
      vorteile: [
        "Kräftigt Rücken und Bizeps in der oberen Endposition.",
        "Einfache Übung ohne Technikhürde.",
        "Verbessert die Griffkraft und die Haltekraft im Schultergürtel."
      ],
      tipps: [
        "Halte am Ende den letzten Moment noch in einer langsamen Absenkphase, dann hast du zwei Reize in einem.",
        "Kann auch als Finisher nach dem Klimmzugtraining eingesetzt werden."
      ],
      varianten: "Leichter: Halten auf halber Höhe mit 90 Grad im Ellbogen. Schwerer: mit Zusatzgewicht oder längerer Zeit.",
      sicherheit: "Nicht die Luft anhalten, besonders bei Bluthochdruck."
    }
  },
  {
    id: "klimmzug_archer",
    name: "Archer-Klimmzug",
    auch: ["Archer Pull-Up", "Typewriter Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "bauch", "schulter_hinten"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    einseitig: true,
    info: {
      kurz: "Sehr weiter Klimmzug, bei dem du dich zu einer Hand hinziehst, während der andere Arm fast gestreckt seitlich hilft. Ein fortgeschrittener Schritt in Richtung einarmiger Klimmzug.",
      ausfuehrung: [
        "Greif die Stange im Obergriff etwa doppelt schulterbreit.",
        "Häng dich mit gestreckten Armen aus, Rumpf fest, Beine geschlossen.",
        "Zieh dich zu einer Hand hin, der Ellbogen dieser Seite geht nah an den Körper.",
        "Der andere Arm bleibt nahezu gestreckt und drückt leicht gegen die Stange, er hilft nur mit.",
        "Komm mit dem Kinn über die Hand der Zugseite.",
        "Senke dich kontrolliert in die Mitte ab und wechsle die Seite oder bleib auf einer Seite für alle Wiederholungen."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Der Hilfsarm wird stark gebeugt: dann ist es nur ein breiter Klimmzug, den Hilfsarm möglichst gestreckt lassen.",
        "Rumpf dreht sich weg: Bauch fest, Hüften zur Wand.",
        "Unkontrolliertes Absenken: jede Seite sauber zurückführen."
      ],
      vorteile: [
        "Erhöht die Last auf einer Seite ohne Zusatzgewicht.",
        "Fordert Kraft und Stabilität der Schulter in weiter Position.",
        "Gleicht Seitenunterschiede aus, weil jede Seite einzeln arbeitet."
      ],
      tipps: [
        "Beginne erst damit, wenn du mindestens zwölf saubere normale Klimmzüge schaffst.",
        "Ein Handtuch über der Stange für den Hilfsarm macht die Übung leichter."
      ],
      varianten: "Leichter: Hilfsarm stärker gebeugt oder mit Band. Schwerer: Hilfsarm nur mit offenen Fingern auf der Stange.",
      sicherheit: "Hohe Belastung für die Schulter in weiter Position. Bei Schulterbeschwerden auslassen."
    }
  },
  {
    id: "klimmzug_l_sit",
    name: "L-Sitz-Klimmzug",
    auch: ["L-Sit Pull-Up", "L-Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "bauch"],
    sekundaer: ["hueftbeuger", "bizeps", "oberer_ruecken", "quadrizeps"],
    geraete: [["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Klimmzug, bei dem du die Beine gestreckt vor dem Körper auf Hüfthöhe hältst. Das verhindert jeden Schwung und fordert Rücken und Bauch gleichzeitig.",
      ausfuehrung: [
        "Greif die Stange schulterbreit im Obergriff oder neutral und häng dich aus.",
        "Heb die gestreckten Beine nach vorn, bis sie etwa waagerecht sind. Die Zehen sind angezogen, die Knie gestreckt.",
        "Halte diese L-Position und zieh die Schulterblätter nach unten.",
        "Zieh dich hoch, bis das Kinn über der Stange ist, ohne dass die Beine absinken.",
        "Senke dich kontrolliert ab, die Beine bleiben vorn.",
        "Wenn die Beine sinken, beende den Satz."
      ],
      atmung: "Kurz und flach einatmen, beim Hochziehen ausatmen. Bauch bleibt fest.",
      fehler: [
        "Beine sinken während des Ziehens: lieber Knie anwinkeln als die Beine fallen lassen.",
        "Rundrücken mit eingesunkener Brust: Brust zur Stange führen.",
        "Zu schnelles Ablassen: auch hier zwei Sekunden Kontrolle."
      ],
      vorteile: [
        "Kombiniert Rückentraining mit starker Rumpfarbeit.",
        "Unterbindet Schwung vollständig.",
        "Verbessert die Körperspannung für Turnen und Calisthenics."
      ],
      tipps: [
        "Übe zuerst das L-Halten im Hang, bevor du daraus ziehst.",
        "Mit angewinkelten Knien als Tuck-Variante beginnen."
      ],
      varianten: "Leichter: Knie angewinkelt. Schwerer: Beine höher als waagerecht oder langsameres Tempo.",
      sicherheit: "Bei Leisten- oder Hüftbeugerbeschwerden die Beine angewinkelt halten."
    }
  },
  // ---------- Ziehen vertikal: Latzug ----------
  {
    id: "latzug",
    name: "Latzug, weiter Griff",
    auch: ["Lat Pulldown", "Wide-Grip Lat Pulldown", "Latziehen", "Latzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "schulter_hinten", "trapez", "unterarm"],
    geraete: [["latzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Latzug an der breiten Stange im Obergriff, etwa eineinhalbfach schulterbreit. Die Grundübung für den Latissimus an der Maschine, bei der du die Last genau dosieren kannst.",
      ausfuehrung: [
        "Stell das Kniepolster so ein, dass deine Oberschenkel fest darunter klemmen und du nicht hochgezogen wirst.",
        "Greif die Stange im Obergriff etwa eineinhalbfach schulterbreit und setz dich hin, die Arme sind gestreckt.",
        "Lehn den Oberkörper leicht zurück, etwa 10 bis 20 Grad, die Brust ist aufgerichtet.",
        "Zieh zuerst die Schulterblätter nach unten und führe dann die Ellbogen seitlich nach unten zu den Rippen.",
        "Zieh die Stange bis knapp unter das Kinn oder zur oberen Brust und halte kurz.",
        "Lass die Stange kontrolliert nach oben, bis die Arme gestreckt sind und du die Dehnung seitlich am Rücken spürst.",
        "Bleib dabei ruhig sitzen, ohne mit dem Oberkörper zu schaukeln."
      ],
      atmung: "Oben einatmen, beim Herunterziehen ausatmen, beim Hochlassen wieder einatmen.",
      fehler: [
        "Starkes Zurücklehnen mit Schwung: Oberkörper fast ruhig halten, nur leicht zurückgelehnt.",
        "Stange hinter den Nacken ziehen: immer vor dem Kopf zur oberen Brust ziehen.",
        "Oben nicht ganz strecken: die Arme oben vollständig lang werden lassen.",
        "Ziehen nur aus den Armen: an die Ellbogen denken, die Hände sind nur Haken.",
        "Schultern bleiben oben: Bewegung mit dem Absenken der Schulterblätter beginnen."
      ],
      vorteile: [
        "Kräftigt den Latissimus und den oberen Rücken mit fein einstellbarer Last.",
        "Ideal für Einsteiger und als Ergänzung zu Klimmzügen.",
        "Die Zugrichtung von der Seite betont die Rückenbreite.",
        "Weniger Belastung für den Griff als Klimmzüge."
      ],
      tipps: [
        "Stell dir vor, du ziehst die Stange auseinander, das aktiviert den Rücken stärker.",
        "Ein Griff ohne Daumen, bei dem die Hände wie Haken arbeiten, hilft vielen, den Bizeps weniger einzusetzen.",
        "Eine Sekunde Pause unten bringt mehr Spannung als ein schweres Gewicht mit Schwung."
      ],
      varianten: "Leichter: weniger Gewicht oder neutraler Griff. Schwerer: mehr Gewicht, langsame Absenkphase oder Klimmzüge.",
      sicherheit: "Bei Schulterbeschwerden den Griff etwas enger oder neutral wählen und oben nicht passiv in die Dehnung fallen.",
      golf: "Ein kräftiger Latissimus verbindet Arm und Rumpf im Abschwung und hilft, den Schläger stabil zu führen. Außerdem unterstützt er eine aufrechte Haltung über die ganze Runde."
    }
  },
  {
    id: "latzug_neutral",
    name: "Latzug, neutraler Griff",
    auch: ["Neutral-Grip Lat Pulldown", "Close-Grip Pulldown", "V-Bar Pulldown", "Parallelgriff-Latzug"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["oberer_ruecken", "bizeps", "unterarm"],
    geraete: [["latzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Latzug mit Parallelgriffen oder V-Griff, die Handflächen zeigen zueinander. Die Ellbogen laufen nah am Körper, der Bewegungsweg ist lang und der untere Latissimus wird stark gefordert.",
      ausfuehrung: [
        "Häng einen V-Griff oder eine Stange mit Parallelgriffen ein und stell das Kniepolster passend ein.",
        "Greif die Griffe, setz dich hin und klemm die Oberschenkel unter dem Polster fest.",
        "Lehn dich minimal zurück, die Brust ist aufgerichtet, die Arme sind oben gestreckt.",
        "Zieh die Schulterblätter nach unten und dann die Ellbogen nah am Körper zu den Hüften.",
        "Zieh, bis die Griffe etwa auf Höhe der oberen Brust sind, und halte kurz.",
        "Lass die Griffe langsam nach oben, bis die Arme ganz gestreckt sind und du dich in die Dehnung ziehen lässt."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper kippt weit nach hinten: dann wird es eher ein Rudern, nur leicht zurücklehnen.",
        "Ellbogen weichen nach außen: Ellbogen eng an den Rippen führen.",
        "Kurze Bewegung ohne Dehnung oben: oben ganz lang werden."
      ],
      vorteile: [
        "Langer Bewegungsweg mit starker Dehnung des Latissimus.",
        "Gelenkfreundliche Handstellung für Schultern und Ellbogen.",
        "Erlaubt meist mehr Gewicht als der weite Griff."
      ],
      tipps: [
        "Ein breiter Parallelgriff ist oft angenehmer als der enge V-Griff.",
        "Denk daran, die Ellbogen in die hinteren Hosentaschen zu ziehen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: langsame Absenkphase, Pause unten oder Klimmzug mit neutralem Griff.",
      sicherheit: "Gut geeignet bei empfindlichen Schultern. Bei Schmerzen oben die Dehnung nicht erzwingen."
    }
  },
  {
    id: "latzug_untergriff",
    name: "Latzug, Untergriff",
    auch: ["Underhand Lat Pulldown", "Reverse-Grip Pulldown", "Supinated Pulldown"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "bizeps"],
    sekundaer: ["oberer_ruecken", "unterarm"],
    geraete: [["latzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Latzug an der geraden Stange mit Handflächen zu dir, etwa schulterbreit. Die Ellbogen bleiben vor dem Körper und nah an den Rippen, Bizeps und unterer Latissimus arbeiten stark mit.",
      ausfuehrung: [
        "Greif die Stange schulterbreit im Untergriff und setz dich mit fixierten Oberschenkeln hin.",
        "Die Arme sind oben gestreckt, die Brust ist aufgerichtet, der Oberkörper ist leicht zurückgelehnt.",
        "Zieh die Schulterblätter nach unten und führe die Ellbogen nah am Körper nach unten.",
        "Zieh die Stange bis zur oberen Brust, die Ellbogen zeigen nach unten.",
        "Halte kurz und spann den Rücken an.",
        "Lass die Stange kontrolliert zurück nach oben bis zur vollen Streckung."
      ],
      atmung: "Oben einatmen, beim Herunterziehen ausatmen.",
      fehler: [
        "Zu enger Griff mit abgeknickten Handgelenken: schulterbreit greifen.",
        "Nur aus dem Bizeps ziehen: Bewegung mit den Schulterblättern beginnen.",
        "Schaukeln mit dem Oberkörper: ruhig sitzen bleiben."
      ],
      vorteile: [
        "Großer Bewegungsweg mit kräftiger Mitarbeit des Bizeps.",
        "Ellbogenbahn am Körper betont den unteren Latissimus.",
        "Viele können hier mehr Gewicht bewegen als im Obergriff."
      ],
      tipps: [
        "Halte die Ellbogen unten kurz an den Rippen, das intensiviert die Kontraktion.",
        "Gute Wahl, wenn du Rücken und Arme in einer Übung trainieren willst."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Klimmzug im Untergriff oder langsame Absenkphase.",
      sicherheit: "Bei Ellbogenbeschwerden an der Innenseite lieber neutral greifen."
    }
  },
  {
    id: "latzug_wechselnde_griffe",
    name: "Latzug, wechselnde Griffe",
    auch: ["Lat Pulldown (Alternating Grips)", "Lat Pulldown Grip Rotation"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "schulter_hinten"],
    geraete: [["latzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    hinweis: "Satz 1 weiter Obergriff, Satz 2 neutral, Satz 3 Untergriff.",
    info: {
      kurz: "Latzug, bei dem du von Satz zu Satz den Griff wechselst: weiter Obergriff, neutraler Griff, Untergriff. So deckst du in einer Übung mehrere Zugrichtungen und Handstellungen ab.",
      ausfuehrung: [
        "Leg dir vor der Übung die Griffe bereit, zum Beispiel breite Stange, Parallelgriff und gerade Stange.",
        "Beginne den ersten Satz mit weitem Obergriff, die Ellbogen ziehen seitlich nach unten.",
        "Im zweiten Satz greifst du neutral, die Ellbogen laufen nah am Körper.",
        "Im dritten Satz greifst du schulterbreit im Untergriff, Bizeps und unterer Latissimus arbeiten stärker.",
        "In jedem Satz gilt: Schulterblätter zuerst nach unten, bis zur oberen Brust ziehen, oben ganz strecken.",
        "Passe das Gewicht an den Griff an, im Untergriff schaffst du meist etwas mehr."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Gleiches Gewicht für alle Griffe erzwingen: Last je Griff anpassen.",
        "Lange Umbaupausen: Griffe vorher bereitlegen.",
        "Technik leidet beim Wechsel: in jedem Satz bewusst auf den Ellbogenweg achten."
      ],
      vorteile: [
        "Spricht den Latissimus aus verschiedenen Winkeln an.",
        "Abwechslung für Gelenke und Sehnen durch wechselnde Handstellung.",
        "Mehr Vielfalt im Training ohne zusätzliche Übung."
      ],
      tipps: [
        "Wechsle die Reihenfolge der Griffe von Woche zu Woche.",
        "Notiere dir das Gewicht für jeden Griff einzeln, dann kannst du gezielt steigern."
      ],
      varianten: "Leichter: nur zwei Griffe wechseln. Schwerer: Pause unten in jedem Satz oder langsame Absenkphase.",
      sicherheit: "Wenn ein Griff Beschwerden macht, lass ihn weg und nutze die anderen."
    }
  },
  {
    id: "latzug_einarmig",
    name: "Einarmiger Latzug",
    auch: ["Single-Arm Pulldown", "Single-Arm Lat Pulldown", "One-Arm Lat Pulldown"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["oberer_ruecken", "bizeps", "schraege_bauch"],
    geraete: [["latzug"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Latzug mit einem Griff und einem Arm am Latzug oder hohen Kabel. Du kannst den Ellbogen weiter hinter den Körper ziehen und oben tiefer dehnen, außerdem trainiert jede Seite für sich.",
      ausfuehrung: [
        "Häng einen Einhandgriff am Latzug oder oberen Kabel ein und setz dich mit fixierten Oberschenkeln hin.",
        "Greif den Griff mit einer Hand, die Handfläche zeigt nach vorn oder zur Mitte.",
        "Lass den Arm oben ganz lang werden, die Schulter darf leicht mit nach oben gehen, so entsteht die Dehnung.",
        "Zieh zuerst die Schulter nach unten und dann den Ellbogen nah am Körper nach unten zur Hüfte.",
        "Dreh die Hand dabei leicht nach innen, bis der Griff neben der Brust ist.",
        "Halte kurz und lass den Griff langsam zurück in die volle Dehnung."
      ],
      atmung: "In der Dehnung einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht sich weg: Rumpf ruhig, nur leicht zur Zugseite neigen ist erlaubt.",
        "Ellbogen geht weit nach außen: zur Hüfte ziehen, nicht zur Seite.",
        "Zu viel Gewicht und kurze Bewegung: lieber leichter und voller Weg."
      ],
      vorteile: [
        "Größerer Bewegungsumfang als beidarmig, besonders in der Dehnung.",
        "Gleicht Kraftunterschiede zwischen den Seiten aus.",
        "Sehr gutes Gefühl für den Latissimus."
      ],
      tipps: [
        "Leg die freie Hand auf den Latissimus der Zugseite, um ihn arbeiten zu spüren.",
        "Beginne mit der schwächeren Seite und mach auf der stärkeren genauso viele Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause unten oder kniend am Kabel ohne Polster.",
      sicherheit: "Bei Schulterbeschwerden die Dehnung oben nur so weit zulassen, wie sie schmerzfrei ist.",
      golf: "Der Latissimus zieht im Abschwung den Lead-Arm kraftvoll nach unten. Einarmig trainiert, gleicht er Seitenunterschiede aus, die durch den einseitigen Golfschwung entstehen."
    }
  },
  {
    id: "latzug_kniend_einarmig",
    name: "Einarmiger Kabelzug kniend",
    auch: ["Kneeling Single-Arm Cable Pulldown", "Half-Kneeling Single-Arm Lat Pulldown", "Kneeling One-Arm Pulldown"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["oberer_ruecken", "bizeps", "schraege_bauch", "bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, knie: 1 },
    stufe: 2,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiger Zug von oben im Knien am Kabelturm. Ohne Knie-Polster muss dein Rumpf die Position halten, und der Kabelwinkel lässt eine tiefe Dehnung des Latissimus zu.",
      ausfuehrung: [
        "Stell das Kabel ganz nach oben und häng einen Einhandgriff ein.",
        "Knie dich vor den Turm, entweder auf beide Knie oder im Halbknien mit dem Knie der Zugseite unten.",
        "Greif den Griff, Arm lang über dem Kopf, und rück so weit weg, dass das Gewicht schon oben Spannung hat.",
        "Spann Bauch und Gesäß an, der Oberkörper bleibt aufrecht oder leicht nach vorn geneigt.",
        "Zieh den Ellbogen nah am Körper nach unten zur Hüfte, bis die Hand neben der Brust ist.",
        "Halte kurz und lass den Arm langsam zurück in die volle Dehnung."
      ],
      atmung: "In der Dehnung einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Rumpf kippt seitlich weg: Bauch fest, Becken stabil.",
        "Hohlkreuz durch zu viel Gewicht: Rippen nach unten, Gesäß anspannen.",
        "Ellbogen zieht nach hinten statt nach unten: Ellbogen zur Hüfte führen."
      ],
      vorteile: [
        "Kräftigt den Latissimus in einer langen Dehnposition.",
        "Fordert die Rumpfstabilität, weil kein Polster hilft.",
        "Braucht nur einen Kabelturm, keine Latzugmaschine."
      ],
      tipps: [
        "Eine Matte unter dem Knie macht die Übung deutlich angenehmer.",
        "Experimentiere mit dem Abstand zum Turm, bis du oben die stärkste Dehnung spürst."
      ],
      varianten: "Leichter: beidbeinig knien und weniger Gewicht. Schwerer: Halbknien mit schmaler Basis oder Pause unten.",
      sicherheit: "Bei Kniebeschwerden eine dicke Unterlage nutzen oder sitzend am Latzug ausführen.",
      golf: "Im Halbknien musst du Becken und Rumpf stabil halten, während der Arm kräftig zieht. Das ähnelt der Aufgabe im Abschwung, wo der Rumpf Kraft vom Boden über den Latissimus zum Arm überträgt."
    }
  },
  {
    id: "latzug_kniend",
    name: "Latzug kniend am Kabel",
    auch: ["Kneeling Lat Pulldown", "Kneeling Cable Pulldown"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, knie: 1 },
    stufe: 1,
    info: {
      kurz: "Beidarmiger Latzug im Knien vor einem hohen Kabel, mit Stange oder Seil. Eine gute Lösung, wenn es keine Latzugmaschine gibt, und gleichzeitig eine Übung für die Rumpfspannung.",
      ausfuehrung: [
        "Stell das Kabel ganz nach oben und häng eine Latzugstange oder ein Seil ein.",
        "Knie dich mit etwas Abstand vor den Turm, damit das Kabel leicht schräg von oben vorn kommt.",
        "Greif die Stange etwas breiter als schulterbreit, Arme gestreckt, Oberkörper leicht nach vorn geneigt.",
        "Spann den Bauch an und zieh die Schulterblätter nach unten.",
        "Zieh die Stange zur oberen Brust, die Ellbogen gehen nach unten zu den Rippen.",
        "Lass die Stange kontrolliert nach oben, bis die Arme gestreckt sind."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Hohlkreuz: Rippen nach unten und Gesäß anspannen.",
        "Mit dem Körpergewicht nach hinten ziehen: Oberkörper ruhig halten.",
        "Zu nah am Turm: dann zieht das Kabel senkrecht und die Dehnung fehlt."
      ],
      vorteile: [
        "Latzug ohne Spezialmaschine, nur mit Kabelturm.",
        "Trainiert gleichzeitig die Rumpfstabilität.",
        "Gut steuerbare Last."
      ],
      tipps: [
        "Wenn das Gewicht dich hochzieht, ist es zu schwer für diese Variante.",
        "Mit dem Seil kannst du unten die Hände auseinanderziehen und die Ellbogen weiter nach hinten bringen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig oder mit langsamer Absenkphase.",
      sicherheit: "Unterlage für die Knie verwenden. Bei Kniebeschwerden auf den Latzug im Sitzen ausweichen."
    }
  },
  {
    id: "latzug_maschine",
    name: "Latzug an der Iso-Lateral-Maschine",
    auch: ["Iso-Lateral Pulldown", "Machine Pulldown", "Plate-Loaded Pulldown", "Hammer Strength Pulldown", "Machine High Row"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "schulter_hinten"],
    geraete: [["iso_lateral"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Latzug an einer Maschine mit zwei getrennten Hebelarmen, meist mit Scheiben beladen. Die Hebel führen eine bogenförmige Bahn, und jede Seite muss selbst arbeiten.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass du die Griffe mit fast gestreckten Armen erreichst und die Oberschenkel unter dem Polster klemmen.",
        "Greif beide Griffe, die Brust ist aufgerichtet, der Rücken liegt nicht nach hinten durch.",
        "Zieh die Schulterblätter nach unten und dann die Ellbogen zu den Rippen.",
        "Zieh die Griffe so weit nach unten, bis die Hände etwa auf Schulterhöhe sind.",
        "Halte kurz und führe die Hebel langsam zurück, bis die Arme gestreckt sind.",
        "Du kannst auch abwechselnd einarmig arbeiten, während der andere Arm oben hält."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Sitz zu niedrig: oben fehlt dann die Dehnung.",
        "Ruckartiges Ziehen mit Schwung: gleichmäßiges Tempo.",
        "Eine Seite übernimmt mehr: auf gleichmäßigen Zug achten oder einarmig arbeiten."
      ],
      vorteile: [
        "Stabile Führung erlaubt hohe Lasten ohne viel Technikaufwand.",
        "Getrennte Hebel decken Seitenunterschiede auf.",
        "Bogenförmige Bahn folgt der natürlichen Bewegung des Arms."
      ],
      tipps: [
        "Die Maschine eignet sich gut für schwere Sätze nahe am Muskelversagen, weil kaum Technik verloren geht.",
        "Probier verschiedene Griffpositionen, falls die Maschine mehrere hat."
      ],
      varianten: "Leichter: weniger Scheiben. Schwerer: einarmig, mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Schulterbeschwerden die oberste Position nicht erzwingen."
    }
  },
  {
    id: "latzug_band",
    name: "Latzug mit Band",
    auch: ["Band Lat Pulldown", "Resistance Band Pulldown"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["oberer_ruecken", "bizeps"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    hinweis: "Band oben an Tür oder Haken befestigen.",
    info: {
      kurz: "Latzug mit einem Widerstandsband, das oben an Tür, Haken oder Stange befestigt ist. Die einfache Variante für Zuhause und Unterwegs.",
      ausfuehrung: [
        "Befestige das Band oben an einem Türanker, Haken oder einer Stange.",
        "Knie oder setz dich davor, sodass das Band schon mit gestreckten Armen leicht gespannt ist.",
        "Greif die Enden mit neutralem Griff oder im Obergriff, die Brust ist aufgerichtet.",
        "Zieh die Schulterblätter nach unten und die Ellbogen zu den Rippen, bis die Hände neben der Brust sind.",
        "Halte kurz und drück die Ellbogen bewusst nach unten.",
        "Lass das Band langsam zurück, bis die Arme wieder lang sind."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Band zu schwach: der Widerstand muss am Ende der Bewegung deutlich spürbar sein.",
        "Band schnellt zurück: auch das Zurücklassen kontrollieren.",
        "Nur aus den Armen: Bewegung mit den Schulterblättern beginnen."
      ],
      vorteile: [
        "Rückentraining ohne Studio.",
        "Der Widerstand steigt zum Ende der Bewegung, wo der Latissimus stark verkürzt ist.",
        "Schonend für die Gelenke."
      ],
      tipps: [
        "Mehr Abstand zur Befestigung erhöht die Spannung.",
        "Höhere Wiederholungszahlen zwischen 15 und 25 passen gut zum Band."
      ],
      varianten: "Leichter: schwächeres Band oder näher an die Befestigung. Schwerer: stärkeres Band, einarmig oder Pause unten.",
      sicherheit: "Band und Befestigung vor dem Training prüfen. Nicht ins Gesicht zurückschnellen lassen."
    }
  },
  // ---------- Ziehen vertikal: Überzüge und gestreckte Arme ----------
  {
    id: "ueberzug_kabel_gestreckt",
    name: "Latziehen mit gestreckten Armen am Kabel",
    auch: ["Straight-Arm Pulldown", "Straight-Arm Lat Pulldown", "Lat Pushdown", "Rope Straight-Arm Pulldown"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "oberer_ruecken", "bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Im Stehen ziehst du mit fast gestreckten Armen eine Stange oder ein Seil von oben bis zu den Oberschenkeln. Der Bizeps ist kaum beteiligt, deshalb arbeitet fast nur der Latissimus.",
      ausfuehrung: [
        "Stell das Kabel ganz nach oben und häng eine gerade Stange oder ein Seil ein.",
        "Greif schulterbreit und tritt einen großen Schritt zurück.",
        "Beuge die Hüfte leicht, der Oberkörper ist etwa 20 bis 30 Grad nach vorn geneigt, die Arme sind schräg nach oben gestreckt.",
        "Die Ellbogen sind leicht gebeugt und bleiben so während des ganzen Satzes.",
        "Zieh die Stange in einem Bogen nach unten bis zu den Oberschenkeln, die Schulterblätter gehen nach unten.",
        "Halte unten kurz und lass die Arme langsam wieder nach oben, bis du die Dehnung seitlich am Rücken spürst."
      ],
      atmung: "Oben einatmen, beim Herunterziehen ausatmen.",
      fehler: [
        "Ellbogen werden gebeugt und es wird ein Trizepsdrücken: Ellbogenwinkel fest lassen.",
        "Oberkörper wippt mit: Rumpf ruhig, Bauch fest.",
        "Schultern rollen nach vorn: Brust offen halten, Schultern nach unten.",
        "Zu schweres Gewicht: diese Übung lebt vom Gefühl, nicht von der Last."
      ],
      vorteile: [
        "Isoliert den Latissimus ohne Ermüdung des Bizeps.",
        "Ideal zum Aufwärmen oder als Vorermüdung vor Klimmzügen.",
        "Lehrt, die Arme über den Rücken zu bewegen, eine wichtige Grundlage für viele Zugübungen."
      ],
      tipps: [
        "Mit dem Seil kannst du unten die Hände an den Hüften vorbeiführen und die Bewegung verlängern.",
        "Stell dir vor, du schiebst die Stange mit den kleinen Fingern nach unten."
      ],
      varianten: "Leichter: weniger Gewicht oder mit Band. Schwerer: Pause unten, langsame Absenkphase oder einarmig.",
      sicherheit: "Bei Schulterbeschwerden oben nicht zu weit in die Überkopfposition gehen.",
      golf: "Die Bewegung ähnelt dem Abschwung, in dem der gestreckte Lead-Arm vom Rumpf nach unten geführt wird. Ein starker Latissimus in dieser Bahn kann Kontrolle und Tempo im Abschwung unterstützen."
    }
  },
  {
    id: "ueberzug_kabel_einarmig",
    name: "Einarmiges Latziehen mit gestreckten Armen",
    auch: ["Single-Arm Straight-Arm Pulldown", "Single-Arm Lat Pushdown", "Single-Arm Cable Pullover"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "schraege_bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiger Zug mit fast gestrecktem Arm vom hohen Kabel bis zur Hüfte. Du kannst den Arm hinter den Körper führen und den Latissimus maximal verkürzen.",
      ausfuehrung: [
        "Stell das Kabel ganz nach oben und häng einen Einhandgriff ein.",
        "Stell dich seitlich oder frontal zum Turm, ein Schritt zurück, Oberkörper leicht nach vorn geneigt.",
        "Greif den Griff mit einer Hand, der Arm ist schräg nach oben gestreckt, der Ellbogen leicht gebeugt.",
        "Zieh den Arm in einem Bogen nach unten bis neben die Hüfte und etwas dahinter.",
        "Halte unten kurz und spüre die Spannung seitlich am Rücken.",
        "Führe den Arm langsam zurück, bis du oben die Dehnung spürst."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht mit: Rumpf ruhig, nur der Arm bewegt sich.",
        "Ellbogen wird stark gebeugt: Winkel fest halten.",
        "Schulter rollt nach vorn: Schulter nach hinten unten ziehen."
      ],
      vorteile: [
        "Sehr gezielte Arbeit für den Latissimus jeder Seite.",
        "Volle Verkürzung durch die Bewegung hinter den Körper.",
        "Gut zum Aufwärmen oder als letzte Übung im Rückentraining."
      ],
      tipps: [
        "Sehr leicht beginnen und auf das Gefühl achten.",
        "Kombiniere sie mit einer Rumpfaufgabe, indem du in einem schmalen Stand arbeitest."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause unten oder halbkniend ohne Abstützen.",
      sicherheit: "Bei Schulterbeschwerden die Bewegung hinter den Körper verkleinern.",
      golf: "Der Lead-Arm wird im Abschwung mit fast gestrecktem Ellbogen nach unten geführt. Diese Übung kräftigt genau diese Bewegung auf jeder Seite einzeln und kann helfen, Seitenunterschiede auszugleichen."
    }
  },
  {
    id: "ueberzug_kabel_kniend",
    name: "Kabel-Überzug kniend",
    auch: ["Cable Kneeling Pullover", "Kneeling Cable Pullover", "Lat Prayer", "Rope Kneeling Pullover"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "bauch", "brust"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, knie: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Im Knien ziehst du ein Seil oder eine Stange vom hohen Kabel mit fast gestreckten Armen über einen großen Bogen nach unten. Durch das Knien und die Neigung des Oberkörpers kommst du oben in eine sehr tiefe Dehnung des Latissimus.",
      ausfuehrung: [
        "Stell das Kabel ganz nach oben und häng ein Seil oder eine gerade Stange ein.",
        "Knie dich etwa eine Armlänge vor den Turm, die Knie hüftbreit, eine Matte darunter.",
        "Greif das Seil, lehn den Oberkörper nach vorn, bis die Arme über dem Kopf in Verlängerung des Rumpfes sind.",
        "Lass die Arme in der Dehnung lang werden, die Ellbogen sind leicht gebeugt.",
        "Zieh das Seil in einem Bogen nach unten bis zur Stirn oder zum Hals, während sich der Oberkörper leicht aufrichtet.",
        "Halte kurz und führe die Arme langsam zurück in die tiefe Dehnung."
      ],
      atmung: "In der Dehnung einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Starkes Beugen der Ellbogen: dann wird es ein Trizepsdrücken, Winkel weitgehend halten.",
        "Hohlkreuz in der Dehnung: Bauch fest, Rippen nach unten.",
        "Zu schweres Gewicht: die Übung braucht Gefühl und Dehnung, nicht Maximallast.",
        "Mit dem Oberkörper schwingen: nur leicht aufrichten, nicht nach hinten werfen."
      ],
      vorteile: [
        "Sehr tiefe Dehnung des Latissimus unter Last, ein starker Reiz für Muskelaufbau.",
        "Der Bizeps ist kaum beteiligt, die Arbeit liegt beim Rücken.",
        "Kann auch die Beweglichkeit der Schulter in der Überkopfposition verbessern."
      ],
      tipps: [
        "Lass dich in der Dehnung bewusst vom Gewicht in die Länge ziehen, ohne dass die Schultern zusammensacken.",
        "Zwölf bis zwanzig Wiederholungen in ruhigem Tempo sind ideal.",
        "Gut als zweite Latissimus-Übung nach Klimmzügen oder Latzug."
      ],
      varianten: "Leichter: weniger Gewicht und kleinere Dehnung. Schwerer: längere Pause in der Dehnung oder langsameres Tempo.",
      sicherheit: "Bei Schulterbeschwerden in der Überkopfposition die Dehnung verkleinern. Matte unter die Knie legen.",
      golf: "Die Kombination aus Überkopfdehnung und Zug kräftigt den Latissimus in der Länge, die er am Ende des Rückschwungs erreicht. Das kann helfen, dort Kraft zu entwickeln und gleichzeitig beweglich zu bleiben."
    }
  },
  {
    id: "ueberzug_kabel_liegend",
    name: "Kabel-Überzug liegend",
    auch: ["Lying Cable Pullover", "Cable Pullover on Bench"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "brust", "bauch"],
    geraete: [["kabelzug", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Überzug auf einer Flachbank, das Kabel kommt von unten hinter dem Kopf. Anders als bei der Kurzhantel bleibt die Spannung auch oben über der Brust erhalten.",
      ausfuehrung: [
        "Stell eine Flachbank so vor einen Kabelturm, dass dein Kopf zum Turm zeigt, und stell das Kabel ganz nach unten.",
        "Häng eine gerade Stange oder ein Seil ein, leg dich auf die Bank und greif die Stange schulterbreit über dem Kopf.",
        "Die Füße stehen fest am Boden, der untere Rücken bleibt leicht an der Bank.",
        "Beginne mit gestreckten Armen hinter dem Kopf in der Dehnung, Ellbogen leicht gebeugt.",
        "Zieh die Stange in einem Bogen über das Gesicht bis über die Brust oder zur Hüfte.",
        "Führe sie langsam zurück hinter den Kopf, bis die Dehnung deutlich spürbar ist."
      ],
      atmung: "In der Dehnung einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Hohlkreuz in der Dehnung: Bauch fest, Rippen nach unten.",
        "Ellbogen beugen sich stark: Winkel halten.",
        "Zu tief in die Dehnung mit zu viel Gewicht: lieber leichter und kontrolliert."
      ],
      vorteile: [
        "Gleichmäßige Spannung über die ganze Bewegung.",
        "Tiefe Dehnung des Latissimus bei stabiler Lage.",
        "Der Rücken ist durch die Bank gut gestützt."
      ],
      tipps: [
        "Wer die Stange bis zur Hüfte zieht, trainiert den Latissimus auch in der kurzen Position.",
        "Baue die Bank so auf, dass das Kabel in der Dehnung waagerecht zieht."
      ],
      varianten: "Leichter: weniger Gewicht, kleinerer Bogen. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden in der Überkopfposition vorsichtig sein und den Bogen verkleinern."
    }
  },
  {
    id: "ueberzug_kh",
    name: "Überzüge mit Kurzhantel",
    auch: ["DB Pullover", "Dumbbell Pullover", "Cross-Bench Pullover"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "brust"],
    sekundaer: ["trizeps", "bauch"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Klassischer Überzug auf der Bank mit einer Kurzhantel in beiden Händen. Die stärkste Belastung liegt in der Dehnung hinter dem Kopf, Latissimus und Brust arbeiten gemeinsam.",
      ausfuehrung: [
        "Leg dich längs auf eine Flachbank oder quer mit den Schulterblättern auf der Bank, die Füße fest am Boden.",
        "Halte eine Kurzhantel mit beiden Händen an einer Scheibe, die Daumen umschließen den Griff, die Arme sind über der Brust.",
        "Beuge die Ellbogen leicht und halte diesen Winkel.",
        "Senke die Hantel in einem Bogen hinter den Kopf, bis die Oberarme etwa neben den Ohren sind und du die Dehnung spürst.",
        "Zieh die Hantel mit dem Rücken im selben Bogen zurück über die Brust.",
        "Stopp, sobald die Hantel über den Augen oder der Brust ist, dort endet die Spannung."
      ],
      atmung: "Beim Absenken einatmen, beim Zurückziehen ausatmen.",
      fehler: [
        "Ellbogen werden gebeugt und gestreckt: das wird zum Trizepsdrücken, Winkel fest lassen.",
        "Hohlkreuz in der Dehnung: Bauch anspannen, Becken leicht nach hinten kippen.",
        "Zu tief mit zu schwerem Gewicht: nur so tief, wie die Schulter schmerzfrei mitmacht.",
        "Hantel unsicher gegriffen: fest an der Scheibe greifen, Daumen um den Griff."
      ],
      vorteile: [
        "Sehr starke Dehnung des Latissimus unter Last.",
        "Trainiert Latissimus und Brust in einer Bewegung.",
        "Kann die Überkopfbeweglichkeit der Schulter unterstützen."
      ],
      tipps: [
        "Denk an das Ziehen mit den Ellbogen, nicht an das Heben mit den Händen.",
        "Mittlere Wiederholungen zwischen 10 und 15 passen gut."
      ],
      varianten: "Leichter: kleinerer Bogen, leichteres Gewicht. Schwerer: Pause in der Dehnung oder Kabelvariante.",
      sicherheit: "Bei Schulterbeschwerden in der Überkopfposition vorsichtig sein. Hantel immer fest greifen."
    }
  },
  {
    id: "ueberzug_sz",
    name: "Überzüge mit SZ-Stange",
    auch: ["EZ-Bar Pullover", "Barbell Pullover", "Bent-Arm Pullover"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "brust", "bauch"],
    geraete: [["sz_stange", "bank"], ["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Überzug mit SZ-Stange und deutlich gebeugten Ellbogen auf der Flachbank. Die Stange liegt nah am Kopf, dadurch kannst du mehr Gewicht nutzen als mit gestreckten Armen.",
      ausfuehrung: [
        "Leg dich auf eine Flachbank, die Füße fest am Boden, der Kopf am Ende der Bank.",
        "Greif die SZ-Stange eng an der inneren Biegung und halte sie über der Brust.",
        "Beuge die Ellbogen auf etwa 90 Grad, die Stange ist über dem Gesicht.",
        "Senke die Stange mit diesem Winkel in einem Bogen hinter den Kopf, bis die Oberarme neben den Ohren sind.",
        "Zieh die Stange mit dem Rücken zurück bis über die Stirn.",
        "Halte den Ellbogenwinkel während des ganzen Satzes gleich."
      ],
      atmung: "Beim Absenken einatmen, beim Zurückziehen ausatmen.",
      fehler: [
        "Ellbogen öffnen sich weit nach außen: Ellbogen schulterbreit halten.",
        "Hohlkreuz: Bauch anspannen.",
        "Stange zu weit über die Brust: dort ist keine Spannung mehr, über dem Gesicht wenden."
      ],
      vorteile: [
        "Erlaubt höhere Lasten als der Überzug mit gestreckten Armen.",
        "Starke Dehnung des Latissimus.",
        "Der kurze Hebel schont den Ellbogen im Vergleich zu gestreckten Armen."
      ],
      tipps: [
        "Ein Trainingspartner kann dir die Stange zu Beginn hinter dem Kopf reichen.",
        "Kombiniere ihn mit Trizepsübungen, weil der lange Trizepskopf stark mitarbeitet."
      ],
      varianten: "Leichter: Kurzhantel oder weniger Gewicht. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden mit sehr leichtem Gewicht testen."
    }
  },
  {
    id: "ueberzug_maschine",
    name: "Überzugmaschine",
    auch: ["Machine Pullover", "Pullover Machine", "Nautilus Pullover"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "bauch"],
    geraete: [["ueberzugmaschine"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Überzug an einer Maschine, bei der du mit den Oberarmen oder Händen einen Bügel von über dem Kopf bis zum Bauch drückst. Der Latissimus arbeitet fast isoliert, und die Spannung bleibt über den ganzen Weg erhalten.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass deine Schultern auf Höhe der Drehachse der Maschine sind.",
        "Leg die Ellbogen oder Oberarme an die Polster, die Hände liegen locker am Bügel.",
        "Schnall dich an, falls ein Gurt vorhanden ist, und lass den Bügel nach hinten oben in die Dehnung.",
        "Drück den Bügel mit den Oberarmen in einem Bogen nach unten bis zum Bauch.",
        "Halte unten kurz und spann den Rücken an.",
        "Führe den Bügel langsam zurück in die Dehnung über dem Kopf."
      ],
      atmung: "In der Dehnung einatmen, beim Herunterdrücken ausatmen.",
      fehler: [
        "Mit den Händen ziehen statt mit den Ellbogen drücken: die Hände bleiben locker.",
        "Sitz falsch eingestellt: Schulter muss auf Höhe der Drehachse sein.",
        "Rücken löst sich vom Polster: Bauch fest, Rücken bleibt am Polster."
      ],
      vorteile: [
        "Isoliert den Latissimus ohne Bizeps und Griff.",
        "Gleichmäßige Spannung durch die Maschinenkurve.",
        "Einfach zu lernen."
      ],
      tipps: [
        "Wenn deine Maschine es erlaubt, nutze die volle Dehnung oben.",
        "Gut als letzte Rückenübung bis nahe ans Muskelversagen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause unten oder langsame Rückführung.",
      sicherheit: "Bei Schulterbeschwerden die Dehnung oben begrenzen."
    }
  },
  {
    id: "ueberzug_band",
    name: "Latziehen mit gestreckten Armen am Band",
    auch: ["Band Straight-Arm Pulldown", "Band Pullover", "Banded Lat Pulldown Straight Arm"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus"],
    sekundaer: ["trizeps", "bauch"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    hinweis: "Band oben an Tür oder Stange befestigen.",
    info: {
      kurz: "Latziehen mit gestreckten Armen an einem oben befestigten Band. Eine leichte, gelenkschonende Übung für Zuhause, die sich auch zum Aufwärmen vor dem Golf oder dem Krafttraining eignet.",
      ausfuehrung: [
        "Befestige das Band oben an einem Türanker, einer Stange oder einem Haken.",
        "Greif die Enden oder das Band schulterbreit und tritt so weit zurück, dass es mit gestreckten Armen leicht gespannt ist.",
        "Neige den Oberkörper leicht nach vorn, die Knie sind locker, der Bauch ist fest.",
        "Zieh die Arme mit leicht gebeugten Ellbogen in einem Bogen nach unten bis zu den Oberschenkeln.",
        "Halte unten kurz, die Schulterblätter sind nach unten gezogen.",
        "Lass die Arme langsam zurück nach oben."
      ],
      atmung: "Oben einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Ellbogen beugen sich: Arme fast gestreckt halten.",
        "Schultern rollen nach vorn: Brust offen.",
        "Band zu schwach: unten muss der Widerstand deutlich spürbar sein."
      ],
      vorteile: [
        "Aktiviert den Latissimus ohne Geräte.",
        "Gut zum Aufwärmen der Schulter und des Rückens.",
        "Kaum Gelenkbelastung."
      ],
      tipps: [
        "Höhere Wiederholungen zwischen 15 und 25 sind sinnvoll.",
        "Als Aktivierung vor Klimmzügen oder vor der Golfrunde geeignet."
      ],
      varianten: "Leichter: schwächeres Band. Schwerer: stärkeres Band, einarmig oder Pause unten.",
      sicherheit: "Band vor dem Training auf Risse prüfen und sicher befestigen."
    }
  },
  // ---------- Ziehen horizontal: Rudern mit freien Gewichten ----------
  {
    id: "rudern_lh",
    name: "Vorgebeugtes Rudern mit Langhantel",
    auch: ["Barbell Bent-Over Row", "Bent Over Row", "Pendlay Row / Bent Over Row", "Langhantelrudern"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps", "ruecken_unten", "beinbeuger", "unterarm"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Rudern mit der Langhantel im Obergriff bei vorgebeugtem Oberkörper. Eine der wichtigsten Grundübungen für einen dicken, kräftigen oberen Rücken, die nebenbei die Haltekraft des unteren Rückens trainiert.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Langhantel liegt vor den Schienbeinen oder du nimmst sie aus dem Rack.",
        "Greif die Stange im Obergriff etwas breiter als schulterbreit.",
        "Beuge dich aus der Hüfte nach vorn, bis der Oberkörper etwa 30 bis 45 Grad über der Waagerechten ist, die Knie sind leicht gebeugt.",
        "Der Rücken ist gerade, der Bauch fest, der Blick geht schräg nach unten vorn.",
        "Zieh die Stange zum Bauchnabel oder zum unteren Brustbein, die Ellbogen gehen nach hinten.",
        "Halte oben kurz und drück die Schulterblätter zusammen.",
        "Senke die Stange kontrolliert, bis die Arme gestreckt sind, ohne dass sich der Oberkörper aufrichtet."
      ],
      atmung: "Vor dem Ziehen einatmen und den Bauch fest machen, oben oder beim Absenken ausatmen.",
      fehler: [
        "Oberkörper richtet sich mit jeder Wiederholung auf: Winkel halten, lieber weniger Gewicht.",
        "Runder Rücken: Brust leicht heraus, Bauch fest, Hüfte nach hinten schieben.",
        "Schwung aus Beinen und Hüfte: Bewegung nur aus den Armen und dem Rücken.",
        "Stange zur Brust gezogen mit hochgezogenen Schultern: zum Bauchnabel ziehen, Schultern weg von den Ohren."
      ],
      vorteile: [
        "Kräftigt den ganzen oberen Rücken mit hoher Last.",
        "Trainiert nebenbei die Haltekraft von unterem Rücken und Hüfte.",
        "Unterstützt eine aufrechte Haltung und stabile Schultern.",
        "Gute Übertragung auf Kreuzheben und andere Zugübungen."
      ],
      tipps: [
        "Je flacher der Oberkörper, desto mehr arbeitet der obere Rücken, aber desto mehr wird der untere Rücken belastet.",
        "Wenn der untere Rücken früher ermüdet als der obere, wechsle auf brustgestütztes Rudern.",
        "Zughilfen können bei schweren Sätzen den Griff entlasten."
      ],
      varianten: "Leichter: Kurzhanteln oder brustgestützt. Schwerer: flacherer Oberkörper, mehr Gewicht oder Pendlay-Rudern.",
      sicherheit: "Bei Beschwerden im unteren Rücken lieber brustgestützte Varianten wählen."
    }
  },
  {
    id: "rudern_lh_untergriff",
    name: "Vorgebeugtes Rudern im Untergriff",
    auch: ["Underhand Barbell Row", "Reverse-Grip Bent-Over Row", "Yates Row", "Underhand Bent Over Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "trapez", "ruecken_unten", "unterarm"],
    geraete: [["langhantel"], ["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Langhantelrudern mit Handflächen nach vorn oben, meist mit etwas aufrechterem Oberkörper. Die Ellbogen bleiben nah am Körper, deshalb arbeiten Latissimus und Bizeps stärker als im Obergriff.",
      ausfuehrung: [
        "Greif die Langhantel schulterbreit im Untergriff und heb sie wie beim Kreuzheben an.",
        "Beuge dich aus der Hüfte nach vorn, der Oberkörper ist etwa 45 Grad geneigt, die Knie leicht gebeugt.",
        "Rücken gerade, Bauch fest, Arme gestreckt.",
        "Zieh die Stange zum Bauchnabel, die Ellbogen streichen eng am Körper nach hinten.",
        "Halte kurz und drück die Ellbogen hinter den Körper.",
        "Senke die Stange kontrolliert bis zur vollen Armstreckung."
      ],
      atmung: "Vor dem Ziehen einatmen, oben oder beim Absenken ausatmen.",
      fehler: [
        "Oberkörper zu aufrecht: dann wird es ein Shrug, mindestens 45 Grad Vorneigung halten.",
        "Handgelenke knicken ab: Handgelenke gerade, eventuell SZ-Stange nutzen.",
        "Schwung aus der Hüfte: Oberkörper ruhig."
      ],
      vorteile: [
        "Betont Latissimus und Bizeps durch die Ellbogenbahn nah am Körper.",
        "Viele können mehr Gewicht bewegen als im Obergriff.",
        "Abwechslung zur Obergriffvariante."
      ],
      tipps: [
        "Die SZ-Stange ist für die Handgelenke oft angenehmer.",
        "Denk an das Ziehen der Ellbogen zu den Hüften."
      ],
      varianten: "Leichter: weniger Gewicht oder Kurzhanteln im Untergriff. Schwerer: flacherer Oberkörper oder Pause oben.",
      sicherheit: "Bei Bizepssehnen- oder Ellbogenbeschwerden lieber Obergriff oder neutral. Bei Rückenbeschwerden brustgestützt rudern."
    }
  },
  {
    id: "rudern_pendlay",
    name: "Pendlay-Rudern",
    auch: ["Pendlay Row", "Dead-Stop Barbell Row", "Pendlay Row / Bent Over Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "ruecken_unten", "beinbeuger", "bizeps"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2 },
    stufe: 3,
    info: {
      kurz: "Langhantelrudern mit waagerechtem Oberkörper, bei dem die Stange in jeder Wiederholung auf dem Boden abgelegt wird. Jede Wiederholung startet aus dem Stillstand und wird explosiv nach oben gezogen.",
      ausfuehrung: [
        "Stell dich mit hüftbreiten Füßen an die Stange, die Stange ist über der Fußmitte.",
        "Greif etwas breiter als schulterbreit im Obergriff, die Knie sind gebeugt, der Oberkörper ist fast waagerecht.",
        "Rücken gerade, Brust leicht heraus, Bauch fest, Arme gestreckt.",
        "Zieh die Stange explosiv vom Boden zum unteren Brustbein, ohne dass sich der Oberkörper hebt.",
        "Senke die Stange kontrolliert und leg sie vollständig auf dem Boden ab.",
        "Baue vor jeder Wiederholung die Spannung im Rücken neu auf."
      ],
      atmung: "Vor jeder Wiederholung am Boden einatmen und Spannung aufbauen, oben ausatmen.",
      fehler: [
        "Oberkörper springt nach oben: Hüfte und Rücken bleiben ruhig, sonst Gewicht reduzieren.",
        "Runder Rücken am Boden: vor jeder Wiederholung neu einrichten.",
        "Stange wird nicht abgelegt: das ist der Kern der Übung, jede Wiederholung aus dem Stillstand."
      ],
      vorteile: [
        "Fördert explosive Zugkraft aus dem Stillstand.",
        "Waagerechter Oberkörper ergibt eine sehr direkte Zugrichtung für den oberen Rücken.",
        "Die kurze Pause am Boden entlastet den unteren Rücken zwischen den Wiederholungen."
      ],
      tipps: [
        "Kleinere Scheiben machen den Weg zu lang, nutze Scheiben mit vollem Durchmesser.",
        "Fünf bis acht kraftvolle Wiederholungen passen gut."
      ],
      varianten: "Leichter: vorgebeugtes Rudern ohne Ablegen oder mit Kurzhanteln. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Erfordert gute Hüftbeweglichkeit. Bei Beschwerden im unteren Rücken brustgestützt rudern."
    }
  },
  {
    id: "rudern_helms",
    name: "Helms-Rudern",
    auch: ["Helms Row", "Helms Dumbbell Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Kurzhantelrudern im Stehen, bei dem du dich mit der Brust nur leicht an das obere Ende einer Schrägbank lehnst. Der Oberkörper ist gestützt, aber du hast mehr Freiheit als beim liegenden Rudern und der untere Rücken bleibt entlastet.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 bis 45 Grad Schräge und stell dich hinter das obere Ende.",
        "Lehn die Brust an die Kante der Rückenlehne, die Füße stehen hinter der Bank, die Knie sind leicht gebeugt.",
        "Halte je eine Kurzhantel mit neutralem Griff, die Arme hängen gestreckt nach unten.",
        "Zieh die Hanteln zum unteren Brustkorb, die Ellbogen gehen nach hinten und leicht nach außen.",
        "Halte oben kurz, ohne die Brust von der Bank zu nehmen.",
        "Senke die Hanteln langsam bis zur vollen Streckung."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Brust hebt sich von der Bank: der Kontakt bleibt die ganze Zeit.",
        "Schultern ziehen zu den Ohren: Schultern lang und weit weg von den Ohren halten.",
        "Unten nicht ganz strecken: die Arme ganz lang werden lassen."
      ],
      vorteile: [
        "Entlastet den unteren Rücken bei schwerem Rudern.",
        "Unterbindet Schwung aus dem Oberkörper.",
        "Braucht nur Bank und Kurzhanteln."
      ],
      tipps: [
        "Die Kante der Bank kann drücken, ein gefaltetes Handtuch hilft.",
        "Für mehr oberen Rücken die Ellbogen weiter nach außen führen, für mehr Latissimus nah am Körper."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben oder langsame Absenkphase.",
      sicherheit: "Gut geeignet bei Beschwerden im unteren Rücken."
    }
  },
  {
    id: "rudern_kh_brust",
    name: "Brustgestütztes Rudern mit Kurzhanteln",
    auch: ["Chest-Supported Row", "Chest-Supported DB Row", "Incline Dumbbell Row", "Incline Bench Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Rudern in Bauchlage auf einer Schrägbank mit Kurzhanteln. Der Oberkörper liegt fest auf, deshalb arbeiten nur Rücken und Arme, ohne Schwung und ohne Belastung des unteren Rückens.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 Grad Schräge und leg dich mit dem Bauch darauf, das Kinn ist knapp über der Lehne.",
        "Die Füße stehen auf dem Boden oder die Zehen drücken gegen den Boden, um dich zu stabilisieren.",
        "Halte je eine Kurzhantel mit neutralem Griff, die Arme hängen senkrecht nach unten.",
        "Zieh die Hanteln zu den unteren Rippen, die Ellbogen gehen nach hinten oben.",
        "Halte oben eine Sekunde und drück die Schulterblätter zusammen.",
        "Senke die Hanteln langsam, bis die Arme gestreckt sind und die Schulterblätter auseinandergehen."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Brust löst sich von der Bank: der Kontakt bleibt immer erhalten.",
        "Kopf wird in den Nacken gelegt: Blick nach unten, Nacken lang.",
        "Zu schwer und nur halber Weg: unten ganz strecken, oben ganz ziehen."
      ],
      vorteile: [
        "Kräftigt den oberen Rücken ohne Belastung des unteren Rückens.",
        "Kein Schwung möglich, deshalb sehr ehrliche Arbeit für die Zielmuskeln.",
        "Gut für alle, die viel sitzen und die Haltung verbessern wollen."
      ],
      tipps: [
        "Für den oberen Rücken die Ellbogen etwa 45 Grad abspreizen, für den Latissimus eng am Körper.",
        "Eine kurze Pause oben ist wertvoller als mehr Gewicht."
      ],
      varianten: "Leichter: weniger Gewicht oder flachere Bank. Schwerer: Pause oben, langsame Absenkphase oder Seal-Rudern mit Langhantel.",
      sicherheit: "Bei Beschwerden im unteren Rücken eine sehr gute Wahl. Wer Druck auf dem Bauch nicht verträgt, nutzt Helms-Rudern.",
      golf: "Ein kräftiger oberer Rücken hilft, die Haltung über dem Ball zu halten und die Schultern im Schwung stabil zu führen. Die Übung entlastet dabei den unteren Rücken, der beim Golf ohnehin stark gefordert ist."
    }
  },
  {
    id: "rudern_seal",
    name: "Seal-Rudern",
    auch: ["Seal Row", "Bench Row", "Prone Barbell Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps"],
    geraete: [["langhantel", "bank"], ["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    hinweis: "Bank auf Kästen oder Scheiben erhöhen, die Arme müssen frei hängen.",
    info: {
      kurz: "Rudern in Bauchlage auf einer hohen, waagerechten Bank mit Langhantel oder Kurzhanteln. Der Körper liegt komplett auf, deshalb ist kein Schwung möglich und der untere Rücken wird nicht belastet.",
      ausfuehrung: [
        "Stell eine Flachbank auf Kästen oder Scheiben, sodass die Arme gestreckt hängen und die Hantel knapp über dem Boden ist.",
        "Leg dich mit dem Bauch auf die Bank, das Kinn knapp über dem Ende, die Beine liegen auf.",
        "Greif die Langhantel etwas breiter als schulterbreit oder je eine Kurzhantel.",
        "Zieh die Hantel nach oben zur Unterseite der Bank, die Ellbogen gehen nach hinten oben.",
        "Halte oben kurz, die Schulterblätter sind zusammengezogen.",
        "Senke die Hantel kontrolliert, bis die Arme ganz gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Bank zu niedrig: die Hantel stößt auf, die Arme müssen frei hängen.",
        "Kopf hochreißen: Blick nach unten, Nacken entspannt.",
        "Ruckartiges Ziehen mit Hüfte: die Hüfte bleibt auf der Bank."
      ],
      vorteile: [
        "Sehr strikte Ruderübung ohne Ausweichmöglichkeit.",
        "Keine Belastung des unteren Rückens.",
        "Erlaubt schweres Rudern für den oberen Rücken."
      ],
      tipps: [
        "Leg die Langhantel auf zwei Kästen unter der Bank ab, so ist der Ein- und Ausstieg leicht.",
        "Mit Kurzhanteln kannst du die Ellbogen frei führen und den Weg verlängern."
      ],
      varianten: "Leichter: Kurzhanteln und weniger Gewicht. Schwerer: Pause oben oder mehr Gewicht.",
      sicherheit: "Die Bank muss absolut stabil stehen. Auf- und Absteigen langsam."
    }
  },
  {
    id: "rudern_kh",
    name: "Einarmiges Rudern mit Kurzhantel",
    auch: ["One-Arm Row", "One-Arm Dumbbell Row", "Single-Arm DB Row", "Kurzhantelrudern einarmig"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps", "unterarm"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Rudern mit einer Kurzhantel, die freie Hand und ein Knie stützen sich auf einer Bank ab. Eine der vielseitigsten Rückenübungen mit großem Bewegungsumfang und guter Kontrolle.",
      ausfuehrung: [
        "Stütz dich mit der linken Hand und dem linken Knie auf einer Flachbank ab, das rechte Bein steht seitlich daneben.",
        "Der Rücken ist gerade und etwa waagerecht, der Kopf in Verlängerung der Wirbelsäule.",
        "Nimm die Kurzhantel in die rechte Hand, der Arm hängt gestreckt, die Schulter darf leicht nach unten sinken.",
        "Zieh die Hantel in einem leichten Bogen zur Hüfte, der Ellbogen streicht nah am Körper nach hinten.",
        "Halte oben kurz, ohne den Oberkörper aufzudrehen.",
        "Senke die Hantel langsam, bis der Arm gestreckt ist und du die Dehnung im Rücken spürst.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht sich beim Ziehen auf: die Schultern bleiben parallel zur Bank.",
        "Hantel wird zur Brust gezogen: zur Hüfte ziehen, das trifft den Latissimus besser.",
        "Rundrücken: Brust leicht heraus, Rücken lang.",
        "Zu kurze Bewegung: unten ganz strecken."
      ],
      vorteile: [
        "Kräftigt Latissimus und oberen Rücken jeder Seite einzeln.",
        "Großer Bewegungsumfang und gute Dehnung.",
        "Gleicht Seitenunterschiede aus.",
        "Stützt den Rücken und ist deshalb auch bei empfindlichem unterem Rücken gut machbar."
      ],
      tipps: [
        "Stell dir vor, du ziehst die Hantel in die Gesäßtasche.",
        "Für den oberen Rücken den Ellbogen weiter nach außen und die Hantel zur Brust führen.",
        "Ohne Bank kannst du dich im Ausfallschritt mit einer Hand auf dem Knie abstützen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: mehr Gewicht, Pause oben oder schweres Rudern im Stand.",
      sicherheit: "Gut geeignet für fast alle. Bei Schulterbeschwerden die Dehnung unten nicht erzwingen.",
      golf: "Einarmiges Rudern kräftigt den Rücken jeder Seite und fordert gleichzeitig, dass der Rumpf nicht mitdreht. Beides hilft, die Schultern im Schwung stabil zu halten und Haltungsunterschiede durch das einseitige Spiel auszugleichen."
    }
  },
  {
    id: "rudern_kh_schwer",
    name: "Einarmiges KH-Rudern schwer",
    auch: ["Einarmiges KH-Rudern (schwer)", "Heavy One-Arm DB Row", "Heavy Single-Arm Dumbbell Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps", "unterarm", "ruecken_unten"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Schweres einarmiges Rudern im Stand mit versetzten Füßen, die freie Hand stützt sich auf Bank oder Ablage. Hier geht es um hohe Last im Bereich von sechs bis zehn Wiederholungen bei sauberer Grundform.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Bank, ein Fuß vorn, ein Fuß hinten, die freie Hand stützt sich auf der Bank ab.",
        "Beuge dich aus der Hüfte nach vorn, bis der Oberkörper fast waagerecht ist, Rücken gerade.",
        "Nimm die schwere Kurzhantel, der Arm hängt gestreckt.",
        "Zieh die Hantel kraftvoll zur Hüfte, der Ellbogen geht nah am Körper nach hinten.",
        "Ein minimales Mitgehen des Oberkörpers ist erlaubt, der Rücken bleibt aber gerade.",
        "Senke die Hantel kontrolliert bis zur vollen Streckung und hol dir unten die Dehnung."
      ],
      atmung: "Unten einatmen und Bauch fest machen, beim Ziehen ausatmen.",
      fehler: [
        "Starkes Aufdrehen des Oberkörpers: der Rumpf darf leicht mitgehen, aber nicht wegdrehen.",
        "Runder Rücken unter hoher Last: Gewicht so wählen, dass die Form steht.",
        "Hantel fällt nach unten: auch die Absenkphase kontrollieren."
      ],
      vorteile: [
        "Ermöglicht sehr hohe Lasten für den Rücken auf einer Seite.",
        "Stärkt Griff und Rumpf mit.",
        "Gute Hauptübung, wenn keine Langhantel verfügbar ist."
      ],
      tipps: [
        "Zughilfen helfen, wenn der Griff vor dem Rücken nachgibt.",
        "Eine stabile Hand auf der Bank und ein breiter Stand geben die nötige Sicherheit für schwere Sätze.",
        "Starte mit der schwächeren Seite."
      ],
      varianten: "Leichter: klassisches Rudern mit Knie auf der Bank. Schwerer: mehr Gewicht oder Kroc-Rudern.",
      sicherheit: "Bei Beschwerden im unteren Rücken mit Knie auf der Bank abstützen und Gewicht reduzieren."
    }
  },
  {
    id: "rudern_kroc",
    name: "Kroc-Rudern",
    auch: ["Kroc Row", "High-Rep Heavy DB Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken", "trapez"],
    sekundaer: ["bizeps", "unterarm", "schulter_hinten", "ruecken_unten"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, schulter: 1 },
    stufe: 3,
    einseitig: true,
    info: {
      kurz: "Sehr schweres einarmiges Kurzhantelrudern für viele Wiederholungen, oft 15 bis 30, mit bewusst etwas Körpereinsatz. Benannt nach dem Powerlifter Matt Kroczaleski, bekannt für enormen Rücken und Griff.",
      ausfuehrung: [
        "Stell dich seitlich neben eine Bank oder Ablage, die freie Hand stützt sich fest ab, die Füße stehen versetzt.",
        "Der Oberkörper ist etwas aufrechter als beim klassischen Rudern, etwa 15 bis 30 Grad über der Waagerechten.",
        "Nimm eine schwere Kurzhantel, am besten mit Zughilfe.",
        "Zieh die Hantel kraftvoll zur Hüfte, ein leichter Schwung aus Beinen und Oberkörper ist erlaubt.",
        "Senke die Hantel in voller Länge ab, bis der Arm gestreckt ist.",
        "Mach so viele saubere Wiederholungen wie möglich, die Bewegung bleibt immer kontrolliert."
      ],
      atmung: "Im Rhythmus atmen: beim Ziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Aus Schwung wird Reißen: der Schwung hilft nur über den toten Punkt, nicht die ganze Bewegung.",
        "Runder Rücken: Rücken bleibt gerade, sonst Gewicht reduzieren.",
        "Halbe Wiederholungen am Ende: lieber den Satz beenden."
      ],
      vorteile: [
        "Kombiniert hohe Last mit hoher Wiederholungszahl, ein starker Reiz für Rücken und Trapez.",
        "Trainiert enorm den Griff.",
        "Baut mentale Härte für lange, schwere Sätze auf."
      ],
      tipps: [
        "Nur ein Satz pro Seite am Ende des Rückentrainings reicht oft.",
        "Nutze Zughilfen, sonst begrenzt der Griff.",
        "Wähle ein Gewicht, mit dem du etwa 20 Wiederholungen schaffst."
      ],
      varianten: "Leichter: strenges einarmiges Rudern. Schwerer: mehr Gewicht oder mehr Wiederholungen.",
      sicherheit: "Nur für erfahrene Trainierende mit sauberer Rudertechnik. Bei Beschwerden im unteren Rücken oder an der Schulter auslassen."
    }
  },
  {
    id: "rudern_meadows",
    name: "Meadows-Rudern",
    auch: ["Meadows Row", "Landmine One-Arm Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps", "unterarm", "ruecken_unten"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Rudern am Ende einer Langhantel in der Landmine, du stehst seitlich zur Stange. Benannt nach dem Bodybuilder John Meadows, besonders wirksam für den oberen Rücken und die hintere Schulter.",
      ausfuehrung: [
        "Steck eine Langhantel in die Landmine oder in eine Ecke und belade das freie Ende.",
        "Stell dich seitlich zur Stange, das Ende ist neben deinem vorderen Fuß, der Stand ist versetzt.",
        "Beuge dich nach vorn und stütz den Unterarm des vorderen Arms auf den Oberschenkel.",
        "Greif das dicke Ende der Stange im Obergriff mit der hinteren Hand, der Arm hängt gestreckt.",
        "Zieh die Stange nach oben, der Ellbogen geht nach hinten und leicht nach außen.",
        "Senke die Stange kontrolliert, bis der Arm ganz gestreckt ist und die Schulter leicht nach vorn sinkt."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht stark mit: Rumpf ruhig halten.",
        "Zu große Scheiben: dann stößt die Stange an, eher kleinere Scheiben nutzen.",
        "Rundrücken: Brust leicht heraus, Rücken gerade."
      ],
      vorteile: [
        "Große Dehnung und lange Bewegungsbahn für den oberen Rücken.",
        "Der dicke Stangengriff trainiert die Griffkraft.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Kleine 10-kg-Scheiben geben mehr Bewegungsweg als große.",
        "Zughilfen lohnen sich, weil der dicke Griff schnell ermüdet."
      ],
      varianten: "Leichter: einarmiges Kurzhantelrudern. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Bei Beschwerden im unteren Rücken auf brustgestützte Varianten ausweichen."
    }
  },
  {
    id: "rudern_t_bar",
    name: "T-Bar-Rudern",
    auch: ["T-Bar Row", "Landmine Row", "Landmine T-Bar Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps", "ruecken_unten", "beinbeuger"],
    geraete: [["landmine", "langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 2 },
    stufe: 2,
    hinweis: "V-Griff unter die Stange hinter die Scheiben haken.",
    info: {
      kurz: "Rudern an einer Langhantel, deren eines Ende in der Landmine oder einer Ecke steckt. Mit dem V-Griff ziehst du schwere Lasten nah am Körper, ein Klassiker für einen dicken Rücken.",
      ausfuehrung: [
        "Steck die Langhantel in die Landmine oder eine Ecke und belade das freie Ende.",
        "Stell dich breitbeinig über die Stange, mit dem Gesicht zum beladenen Ende.",
        "Hak einen V-Griff direkt hinter den Scheiben unter die Stange.",
        "Beuge dich aus der Hüfte nach vorn, bis der Oberkörper etwa 45 Grad geneigt ist, Knie leicht gebeugt, Rücken gerade.",
        "Zieh die Stange zur Brust, die Ellbogen gehen nah am Körper nach hinten.",
        "Senke sie kontrolliert, bis die Arme gestreckt sind, ohne den Oberkörperwinkel zu verändern."
      ],
      atmung: "Vor dem Ziehen einatmen und Bauch fest machen, beim Absenken ausatmen.",
      fehler: [
        "Oberkörper geht beim Ziehen hoch: Winkel halten, Gewicht reduzieren.",
        "Runder Rücken: Brust heraus, Hüfte nach hinten.",
        "Zu große Scheiben verkürzen den Weg: kleinere Scheiben nutzen."
      ],
      vorteile: [
        "Ermöglicht sehr schwere Lasten bei gut geführter Bahn.",
        "Der neutrale V-Griff ist gelenkfreundlich.",
        "Kräftigt den oberen Rücken und den Latissimus."
      ],
      tipps: [
        "Statt V-Griff kannst du auch mit beiden Händen direkt an der Stange greifen.",
        "Kleinere Scheiben machen den Bewegungsweg länger."
      ],
      varianten: "Leichter: weniger Gewicht oder brustgestütztes T-Bar-Rudern. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Belastet den unteren Rücken deutlich. Bei Beschwerden die brustgestützte Variante wählen."
    }
  },
  {
    id: "rudern_t_bar_brust",
    name: "Brustgestütztes T-Bar-Rudern",
    auch: ["Chest-Supported T-Bar Row", "T-Bar Row Machine", "Lying T-Bar Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps"],
    geraete: [["t_bar_rudern"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "T-Bar-Rudern an einer Maschine mit Brustpolster. Du kannst sehr schwer rudern, ohne den unteren Rücken zu belasten, und hast oft mehrere Griffe zur Wahl.",
      ausfuehrung: [
        "Stell dich auf die Fußplattform und leg die Brust auf das schräge Polster, das Kinn ist knapp über dem Rand.",
        "Greif die Griffe: weit im Obergriff für den oberen Rücken oder neutral eng für den Latissimus.",
        "Heb das Gewicht aus der Ablage, die Arme sind gestreckt.",
        "Zieh die Griffe zum Oberkörper, die Ellbogen gehen nach hinten.",
        "Halte oben kurz und drück die Schulterblätter zusammen.",
        "Senke das Gewicht kontrolliert bis zur vollen Streckung."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Brust löst sich vom Polster: Kontakt halten.",
        "Kopf in den Nacken: Blick nach unten.",
        "Halber Weg: unten ganz strecken, oben ganz ziehen."
      ],
      vorteile: [
        "Schwere Last für den Rücken bei voller Entlastung des unteren Rückens.",
        "Unterbindet Schwung.",
        "Mehrere Griffe erlauben unterschiedliche Schwerpunkte."
      ],
      tipps: [
        "Weiter Griff mit abgespreizten Ellbogen für den oberen Rücken, enger Griff für den Latissimus.",
        "Gut für schwere Sätze nahe am Muskelversagen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben, langsame Absenkphase.",
      sicherheit: "Gut geeignet bei Beschwerden im unteren Rücken."
    }
  },
  {
    id: "rudern_kh_vorgebeugt",
    name: "Vorgebeugtes Rudern mit Kurzhanteln",
    auch: ["Bent-Over Dumbbell Row", "Two-Arm DB Row", "DB Bent Over Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps", "ruecken_unten"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Beidarmiges Rudern mit zwei Kurzhanteln im vorgebeugten Stand. Die Hände können sich frei drehen, und du brauchst keine Bank und keine Langhantel.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, in jeder Hand eine Kurzhantel.",
        "Beuge dich aus der Hüfte nach vorn, bis der Oberkörper etwa 45 Grad geneigt ist, die Knie sind leicht gebeugt.",
        "Rücken gerade, Bauch fest, die Arme hängen senkrecht unter den Schultern.",
        "Zieh die Hanteln zu den unteren Rippen, die Ellbogen gehen nach hinten.",
        "Halte oben kurz und drück die Schulterblätter zusammen.",
        "Senke die Hanteln kontrolliert, bis die Arme gestreckt sind."
      ],
      atmung: "Vor dem Ziehen einatmen, beim Absenken ausatmen.",
      fehler: [
        "Oberkörper richtet sich auf: Winkel halten.",
        "Rundrücken: Hüfte nach hinten, Brust leicht heraus.",
        "Schwung aus den Beinen: Knie bleiben ruhig."
      ],
      vorteile: [
        "Freie Handstellung schont Schultern und Handgelenke.",
        "Braucht nur Kurzhanteln.",
        "Kräftigt oberen Rücken und Haltemuskulatur."
      ],
      tipps: [
        "Neutraler Griff ist für viele am angenehmsten.",
        "Wenn der untere Rücken schneller ermüdet als der obere, lehn dich mit der Stirn an eine Schrägbank."
      ],
      varianten: "Leichter: brustgestütztes Rudern. Schwerer: mehr Gewicht oder flacherer Oberkörper.",
      sicherheit: "Bei Beschwerden im unteren Rücken brustgestützte Varianten bevorzugen."
    }
  },
  {
    id: "rudern_gorilla",
    name: "Gorilla-Rudern",
    auch: ["Gorilla Row", "Kettlebell Gorilla Row", "Alternating Bent-Over Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schraege_bauch", "bauch", "ruecken_unten", "beinbeuger", "bizeps"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Wechselseitiges Rudern aus einem breiten, tiefen Stand mit zwei Kettlebells am Boden. Während ein Arm zieht, drückt der andere gegen seine Kettlebell, das fordert den Rumpf gegen Rotation.",
      ausfuehrung: [
        "Stell zwei Kettlebells zwischen die Füße, der Stand ist breiter als schulterbreit.",
        "Beuge Hüfte und Knie, bis der Oberkörper fast waagerecht ist, Rücken gerade.",
        "Greif beide Kettlebells, die Arme sind gestreckt.",
        "Drück eine Kettlebell aktiv in den Boden und zieh die andere zur Hüfte.",
        "Senke sie kontrolliert ab und wechsle die Seite.",
        "Der Oberkörper bleibt die ganze Zeit ruhig und dreht nicht auf."
      ],
      atmung: "Beim Ziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper dreht beim Ziehen auf: Bauch fest, Hüften parallel zum Boden.",
        "Rundrücken in der tiefen Position: Hüfte weiter nach hinten.",
        "Der Stützarm ist passiv: aktiv in den Boden drücken."
      ],
      vorteile: [
        "Kombiniert Rudern mit Anti-Rotation für den Rumpf.",
        "Kräftigt Rücken, Hüfte und hintere Kette.",
        "Braucht nur zwei Kettlebells."
      ],
      tipps: [
        "Sehr gut in Ganzkörpereinheiten oder Zirkeltraining.",
        "Langsam beginnen und auf einen ruhigen Rumpf achten."
      ],
      varianten: "Leichter: leichtere Kettlebells. Schwerer: schwerere Kettlebells oder Pause oben.",
      sicherheit: "Bei Beschwerden im unteren Rücken auf gestützte Varianten ausweichen."
    }
  },
  {
    id: "rudern_renegade",
    name: "Renegade-Rudern",
    auch: ["Renegade Row", "Plank Row", "Liegestütz-Rudern"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "bauch"],
    sekundaer: ["latissimus", "schraege_bauch", "brust", "trizeps", "schulter_vorn"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Rudern aus dem Liegestütz mit den Händen auf zwei Kurzhanteln. Ein Arm zieht, der andere stützt, und der Rumpf muss eine Drehung verhindern.",
      ausfuehrung: [
        "Leg zwei Kurzhanteln mit sechseckigen Köpfen schulterbreit auf den Boden.",
        "Geh in den hohen Liegestütz mit den Händen auf den Hanteln, die Füße etwas mehr als hüftbreit.",
        "Spann Bauch und Gesäß an, der Körper bildet eine gerade Linie.",
        "Zieh eine Hantel zur Hüfte, während du dich auf die andere stützt.",
        "Stell sie kontrolliert ab und wechsle die Seite.",
        "Die Hüfte bleibt waagerecht und dreht nicht mit."
      ],
      atmung: "Beim Ziehen ausatmen, beim Abstellen einatmen.",
      fehler: [
        "Hüfte dreht stark auf: Füße breiter, weniger Gewicht.",
        "Hängende Hüfte: Bauch und Gesäß anspannen.",
        "Runde Hanteln verwenden: die können wegrollen, nur sechseckige Hanteln nutzen."
      ],
      vorteile: [
        "Trainiert Rücken und Rumpfstabilität gleichzeitig.",
        "Fordert die Schulterstabilität im Stütz.",
        "Effizient für Ganzkörper- und Zirkeltraining."
      ],
      tipps: [
        "Ein breiterer Fußstand macht die Übung stabiler und leichter.",
        "Hier ist sauberes Halten wichtiger als schweres Gewicht."
      ],
      varianten: "Leichter: Knie am Boden. Schwerer: Füße enger oder ein Liegestütz zwischen den Wiederholungen.",
      sicherheit: "Bei Handgelenksbeschwerden nicht geeignet. Nur stabile Hanteln verwenden."
    }
  },
  {
    id: "rudern_multipresse",
    name: "Rudern an der Multipresse",
    auch: ["Smith Machine Row", "Smith Machine Bent-Over Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps", "ruecken_unten"],
    geraete: [["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    info: {
      kurz: "Vorgebeugtes Rudern an der geführten Stange der Multipresse. Die feste Bahn erleichtert die Technik, und du kannst nach jedem Satz die Stange einfach einhaken.",
      ausfuehrung: [
        "Stell die Haken der Multipresse auf Kniehöhe.",
        "Greif die Stange etwas breiter als schulterbreit im Obergriff und heb sie aus den Haken.",
        "Beuge dich aus der Hüfte nach vorn, der Oberkörper ist etwa 45 Grad geneigt, Rücken gerade.",
        "Zieh die Stange zum Bauchnabel, die Ellbogen gehen nach hinten.",
        "Halte oben kurz und senke die Stange kontrolliert bis zur vollen Streckung.",
        "Nach dem Satz die Stange wieder sicher einhaken."
      ],
      atmung: "Vor dem Ziehen einatmen, beim Absenken ausatmen.",
      fehler: [
        "Zu nah an der Stange: dann stößt sie gegen die Oberschenkel, einen kleinen Schritt zurück.",
        "Oberkörper richtet sich auf: Winkel halten.",
        "Rundrücken: Brust leicht heraus."
      ],
      vorteile: [
        "Einfacher als das freie Langhantelrudern.",
        "Sichere Ablage nach jedem Satz.",
        "Gut für Einsteiger und für höhere Wiederholungen."
      ],
      tipps: [
        "Probier aus, ob dir ein etwas weiterer Stand mehr Stabilität gibt.",
        "Gut, um die Ruderbewegung zu lernen, bevor du frei mit der Langhantel arbeitest."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben oder Untergriff.",
      sicherheit: "Belastet den unteren Rücken. Bei Beschwerden brustgestützt rudern."
    }
  },
  // ---------- Ziehen horizontal: Kabel und Maschine ----------
  {
    id: "rudern_kabel",
    name: "Rudern am Kabelzug sitzend",
    auch: ["Seated Cable Row", "Cable Row", "Kabelrudern", "Low Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps", "ruecken_unten"],
    geraete: [["kabelrudern"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Rudern im Sitzen am tiefen Kabelzug mit V-Griff oder Stange. Eine sichere Grundübung für den ganzen Rücken mit gleichmäßiger Spannung über die gesamte Bewegung.",
      ausfuehrung: [
        "Setz dich an die Ruderstation, die Füße stehen fest auf der Plattform, die Knie sind leicht gebeugt.",
        "Greif den V-Griff mit neutralem Griff und rutsch so weit zurück, dass die Arme gestreckt und das Gewicht angehoben ist.",
        "Richte den Oberkörper auf, er darf sich in der Dehnung leicht nach vorn neigen.",
        "Zieh den Griff zum Bauch, die Ellbogen gehen nah am Körper nach hinten, die Brust bleibt offen.",
        "Halte hinten kurz und drück die Schulterblätter zusammen.",
        "Lass den Griff kontrolliert nach vorn, bis die Arme gestreckt sind und die Schulterblätter auseinandergleiten."
      ],
      atmung: "In der Dehnung vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Starkes Schaukeln mit dem Oberkörper: nur leichte Vorneigung in der Dehnung, beim Ziehen nicht nach hinten werfen.",
        "Runder Rücken in der Dehnung: Brust aufgerichtet lassen.",
        "Schultern ziehen hoch: Schultern lang und weg von den Ohren.",
        "Zu kurze Bewegung: vorn ganz strecken, hinten ganz ziehen."
      ],
      vorteile: [
        "Kräftigt Latissimus und oberen Rücken bei gut kontrollierbarer Last.",
        "Gleichmäßige Spannung durch das Kabel.",
        "Einfach zu lernen und gut für Einsteiger.",
        "Unterstützt eine aufrechte Haltung."
      ],
      tipps: [
        "Mit dem V-Griff arbeitet der Latissimus mehr, mit einer breiten Stange der obere Rücken.",
        "Eine Sekunde Halten hinten bringt viel, besonders in den letzten Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: strenge Ausführung mit Pause, einarmig oder mehr Gewicht.",
      sicherheit: "Bei Beschwerden im unteren Rücken den Oberkörper ganz ruhig halten und nicht in die Dehnung fallen.",
      golf: "Ein kräftiger oberer Rücken hilft, Haltung und Schulterposition über die ganze Runde zu halten. Rudern gleicht außerdem die vielen nach vorn gerichteten Bewegungen aus Alltag und Schwung aus."
    }
  },
  {
    id: "rudern_kabel_streng",
    name: "Kabelrudern streng",
    auch: ["Strict Seated Cable Row", "Strict Cable Row", "Paused Cable Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps"],
    geraete: [["kabelrudern"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    golf: 1,
    hinweis: "Oberkörper senkrecht und still, hinten eine Sekunde halten.",
    info: {
      kurz: "Kabelrudern mit fixiertem, senkrechtem Oberkörper und einer Pause hinten. Ohne Schaukeln müssen die Rückenmuskeln die ganze Arbeit machen.",
      ausfuehrung: [
        "Setz dich an die Ruderstation, die Füße fest auf der Plattform, die Knie leicht gebeugt.",
        "Greif den Griff, rutsch zurück und richte den Oberkörper senkrecht auf.",
        "Fixiere diese Position: der Oberkörper bewegt sich während des ganzen Satzes nicht.",
        "Zieh den Griff zum Bauch, bis die Ellbogen hinter dem Körper sind.",
        "Halte hinten eine volle Sekunde und drück die Schulterblätter zusammen.",
        "Lass den Griff langsam nach vorn, nur die Schulterblätter dürfen nach vorn gleiten."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen, während der Pause ruhig halten.",
      fehler: [
        "Oberkörper kippt doch nach hinten: Gewicht reduzieren.",
        "Pause wird ausgelassen: jede Wiederholung bewusst halten.",
        "Schultern rollen nach vorn: Brust offen."
      ],
      vorteile: [
        "Maximale Arbeit für Rückenmuskeln ohne Ausweichbewegung.",
        "Schont den unteren Rücken.",
        "Sehr gutes Gefühl für die Schulterblattbewegung."
      ],
      tipps: [
        "Nimm etwa 20 Prozent weniger Gewicht als beim normalen Kabelrudern.",
        "Wenn du die Pause nicht mehr halten kannst, ist der Satz beendet."
      ],
      varianten: "Leichter: weniger Gewicht oder kürzere Pause. Schwerer: längere Pause oder langsame Rückführung über drei Sekunden.",
      sicherheit: "Gut geeignet bei Rückenbeschwerden, weil der Oberkörper ruhig bleibt."
    }
  },
  {
    id: "rudern_kabel_weit",
    name: "Kabelrudern mit weitem Griff",
    auch: ["Wide-Grip Seated Cable Row", "Wide-Grip Cable Row", "Upper Back Cable Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "schulter_hinten"],
    sekundaer: ["trapez", "latissimus", "bizeps"],
    geraete: [["kabelrudern"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Kabelrudern an einer breiten Stange im Obergriff, die Ellbogen gehen seitlich nach hinten. Der Schwerpunkt liegt auf dem oberen Rücken, dem mittleren Trapez und der hinteren Schulter.",
      ausfuehrung: [
        "Häng eine breite Latzugstange am tiefen Kabel ein und setz dich an die Ruderstation.",
        "Greif die Stange etwa eineinhalbfach schulterbreit im Obergriff.",
        "Richte den Oberkörper auf, die Arme sind gestreckt.",
        "Zieh die Stange zur unteren Brust, die Ellbogen gehen etwa 60 bis 75 Grad vom Körper abgespreizt nach hinten.",
        "Halte hinten kurz und drück die Schulterblätter zusammen.",
        "Lass die Stange kontrolliert nach vorn, bis die Arme gestreckt sind."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Schultern ziehen zu den Ohren: Schultern tief halten.",
        "Ellbogen fallen an den Körper: Ellbogen bleiben abgespreizt.",
        "Oberkörper schaukelt: ruhig sitzen."
      ],
      vorteile: [
        "Kräftigt den oberen Rücken zwischen den Schulterblättern.",
        "Unterstützt eine aufrechte Haltung.",
        "Ergänzt Ruderübungen mit engem Griff."
      ],
      tipps: [
        "Denk daran, die Ellbogen auseinander und nach hinten zu ziehen.",
        "Mittleres Gewicht mit 10 bis 15 Wiederholungen passt gut."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause hinten oder brustgestütztes Rudern mit weitem Griff.",
      sicherheit: "Bei Schulterbeschwerden die Ellbogen etwas näher am Körper führen."
    }
  },
  {
    id: "rudern_kabel_einarmig",
    name: "Einarmiges Kabelrudern sitzend",
    auch: ["Single-Arm Seated Cable Row", "One-Arm Cable Row", "Single-Arm Cable Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schulter_hinten", "bizeps", "schraege_bauch"],
    geraete: [["kabelrudern"], ["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Rudern im Sitzen mit einem Einhandgriff am tiefen Kabel. Du kannst den Arm weiter nach vorn in die Dehnung und weiter nach hinten ziehen als mit beiden Händen.",
      ausfuehrung: [
        "Häng einen Einhandgriff am tiefen Kabel ein und setz dich an die Ruderstation.",
        "Greif den Griff mit einer Hand, die freie Hand liegt auf dem Oberschenkel.",
        "Lass den Arm nach vorn lang werden, die Schulter darf leicht nach vorn mitgehen.",
        "Zieh den Ellbogen nah am Körper nach hinten zur Hüfte, die Hand dreht dabei leicht nach innen.",
        "Halte hinten kurz, ohne den Oberkörper aufzudrehen.",
        "Lass den Griff langsam zurück in die Dehnung."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht stark mit: nur eine minimale Rotation ist erlaubt.",
        "Schulter zieht nach oben: Schulter tief halten.",
        "Ellbogen geht weit nach außen: zur Hüfte ziehen."
      ],
      vorteile: [
        "Größerer Bewegungsumfang als beidarmig.",
        "Gleicht Seitenunterschiede aus.",
        "Sehr gutes Muskelgefühl für den Latissimus."
      ],
      tipps: [
        "Beginne mit der schwächeren Seite.",
        "Leg die freie Hand auf den arbeitenden Latissimus, um ihn zu spüren."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause hinten oder stehend im Ausfallschritt.",
      sicherheit: "Bei Schulterbeschwerden die Dehnung vorn begrenzen."
    }
  },
  {
    id: "rudern_kabel_stehend_einarmig",
    name: "Einarmiges Kabelrudern stehend",
    auch: ["Standing Single-Arm Cable Row", "Split-Stance Cable Row", "Staggered-Stance One-Arm Cable Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schraege_bauch", "bauch", "gesaess", "schulter_hinten", "bizeps"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 2,
    sport: ["golf", "tennis"],
    einseitig: true,
    info: {
      kurz: "Einarmiges Rudern im Ausfallschritt am Kabel auf Brusthöhe. Neben dem Rücken muss der Rumpf verhindern, dass dich der Zug verdreht, eine sehr sportnahe Ruderübung.",
      ausfuehrung: [
        "Stell das Kabel etwa auf Brust- oder Bauchhöhe und häng einen Einhandgriff ein.",
        "Stell dich im Ausfallschritt vor den Turm, das Bein der Zugseite ist hinten.",
        "Greif den Griff, der Arm ist gestreckt, Hüfte und Schultern zeigen zum Turm.",
        "Spann Bauch und Gesäß an, das Becken bleibt gerade.",
        "Zieh den Ellbogen nah am Körper nach hinten, bis die Hand neben den Rippen ist.",
        "Lass den Arm kontrolliert nach vorn, ohne dass Hüfte oder Schultern mitdrehen."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht mit dem Zug: Bauch fest, Schultern zum Turm.",
        "Hohlkreuz: Rippen nach unten, Gesäß aktiv.",
        "Gewicht zu schwer für die Rumpfkontrolle: lieber leichter und sauber."
      ],
      vorteile: [
        "Verbindet Rückenkraft mit Rumpfstabilität gegen Rotation.",
        "Sportnahe Haltung im Stand.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Wechsle den Fuß vorn und hinten, um unterschiedliche Rumpfaufgaben zu bekommen.",
        "Mit dem Band geht die Übung auch zu Hause an der Tür."
      ],
      varianten: "Leichter: paralleler Stand und weniger Gewicht. Schwerer: schmaler Stand, mehr Gewicht oder Halten hinten.",
      sicherheit: "Für fast alle geeignet. Bei Schulterbeschwerden die Dehnung vorn begrenzen.",
      golf: "Im Golfschwung muss der Rumpf Kraft übertragen, ohne die Kontrolle zu verlieren. Diese Übung kräftigt den Rücken und lehrt den Rumpf, Rotation abzufangen, was Stabilität im Rückschwung und im Treffmoment unterstützt."
    }
  },
  {
    id: "rudern_kabel_hoch",
    name: "Hohes Kabelrudern im Halbknien",
    auch: ["Half-Kneeling High Cable Row", "High Row", "Kneeling High Cable Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bauch", "bizeps"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Rudern von schräg oben im Halbknien, mit Seil oder zwei Griffen. Die Zugrichtung liegt zwischen Latzug und Rudern und trainiert den mittleren und unteren Trapez sowie den Latissimus.",
      ausfuehrung: [
        "Stell das Kabel etwa auf Kopfhöhe oder höher und häng ein Seil oder zwei Griffe ein.",
        "Geh vor dem Turm in den Halbkniestand, ein Knie unten, ein Fuß vorn.",
        "Greif die Griffe mit gestreckten Armen schräg nach oben vorn, der Oberkörper ist aufrecht.",
        "Zieh die Ellbogen schräg nach unten hinten, bis die Hände neben der Brust sind.",
        "Halte kurz, die Schulterblätter sind nach unten hinten gezogen.",
        "Lass die Arme kontrolliert zurück nach vorn oben."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Schultern ziehen hoch: Schulterblätter nach unten führen.",
        "Hohlkreuz: Gesäß des hinteren Beins anspannen.",
        "Oberkörper lehnt sich nach hinten: aufrecht bleiben."
      ],
      vorteile: [
        "Kräftigt den unteren und mittleren Trapez, wichtig für gesunde Schulterblattbewegung.",
        "Fordert die Rumpfstabilität im Halbknien.",
        "Gut als Ausgleich zu vielen Druckübungen."
      ],
      tipps: [
        "Mit dem Seil kannst du die Hände hinten auseinanderziehen.",
        "Matte unter das Knie legen."
      ],
      varianten: "Leichter: im Sitzen oder mit Band. Schwerer: einarmig oder mit Pause hinten.",
      sicherheit: "Bei Kniebeschwerden auf einer weichen Unterlage oder im Sitzen ausführen."
    }
  },
  {
    id: "rudern_schulterblatt",
    name: "Schulterblatt-Rudern am Kabel",
    auch: ["Scap Row", "Scapular Retraction Row", "Scapular Pull"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "trapez"],
    sekundaer: ["schulter_hinten"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Kleine Ruderbewegung, bei der nur die Schulterblätter zusammen und auseinander gleiten, die Arme bleiben gestreckt. Sie trainiert die Steuerung der Schulterblätter und den mittleren Trapez.",
      ausfuehrung: [
        "Setz dich an die Ruderstation oder stell dich vor ein Band auf Brusthöhe.",
        "Greif den Griff mit gestreckten Armen, der Oberkörper ist aufrecht.",
        "Lass die Schulterblätter nach vorn gleiten, ohne den Oberkörper zu bewegen.",
        "Zieh nun nur die Schulterblätter nach hinten zusammen, die Ellbogen bleiben gestreckt.",
        "Halte zwei Sekunden und spüre die Spannung zwischen den Schulterblättern.",
        "Lass die Schulterblätter langsam wieder nach vorn gleiten."
      ],
      atmung: "Beim Zusammenziehen ausatmen, beim Lösen einatmen.",
      fehler: [
        "Ellbogen beugen sich: die Arme bleiben lang.",
        "Schultern ziehen zu den Ohren: nach hinten unten ziehen.",
        "Oberkörper lehnt sich nach hinten: nur die Schulterblätter bewegen."
      ],
      vorteile: [
        "Verbessert die Kontrolle der Schulterblätter.",
        "Gute Vorbereitung für schwere Ruderübungen.",
        "Kann bei Haltungsproblemen durch viel Sitzen unterstützen."
      ],
      tipps: [
        "Leichtes Gewicht und langsame Bewegung, es geht um Gefühl.",
        "Gut zum Aufwärmen oder in Kombination mit normalem Rudern als Vorübung."
      ],
      varianten: "Leichter: mit Band. Schwerer: längeres Halten oder direkt danach ein volles Rudern anschließen.",
      sicherheit: "Für fast alle geeignet. Bei Schulterschmerzen nur im schmerzfreien Bereich arbeiten."
    }
  },
  {
    id: "rudern_maschine",
    name: "Rudern an der Maschine",
    auch: ["Machine Row", "Chest-Supported Machine Row", "Seated Row Machine"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["trapez", "schulter_hinten", "bizeps"],
    geraete: [["rudermaschine"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Rudern an einer Maschine mit Brustpolster. Die geführte Bahn und die Stütze machen es sicher und einfach, nah ans Muskelversagen zu trainieren.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe etwa auf Höhe der unteren Brust sind.",
        "Stell das Brustpolster so ein, dass du mit gestreckten Armen die Griffe erreichst und das Gewicht leicht angehoben ist.",
        "Setz dich hin, die Brust liegt am Polster, die Füße stehen fest.",
        "Zieh die Griffe nach hinten, bis die Ellbogen hinter dem Körper sind.",
        "Halte kurz und drück die Schulterblätter zusammen.",
        "Lass die Griffe kontrolliert nach vorn, bis die Arme gestreckt sind."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Brust löst sich vom Polster: Kontakt halten.",
        "Sitz zu hoch oder zu tief: Griffe auf Höhe der unteren Brust.",
        "Ruckartiges Ziehen: gleichmäßiges Tempo."
      ],
      vorteile: [
        "Sicher und einfach, auch für Einsteiger.",
        "Entlastet den unteren Rücken.",
        "Ermöglicht intensive Sätze ohne Technikverlust."
      ],
      tipps: [
        "Neutrale Griffe für den Latissimus, horizontale weite Griffe für den oberen Rücken.",
        "Ideal für Intensitätstechniken wie Drop-Sätze am Ende der Einheit."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause hinten oder einarmig.",
      sicherheit: "Gut geeignet bei Rückenbeschwerden."
    }
  },
  {
    id: "rudern_maschine_einarmig",
    name: "Einarmiges Rudern an der Iso-Lateral-Maschine",
    auch: ["Iso-Lateral Row", "Hammer Strength Row", "Single-Arm Machine Row", "Plate-Loaded Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schulter_hinten", "bizeps", "trapez"],
    geraete: [["iso_lateral"], ["rudermaschine"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Rudern an einer Maschine mit getrennten Hebeln, ein Arm nach dem anderen. Du kannst schwer und sehr gezielt jede Seite trainieren, während dich das Brustpolster stützt.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe etwa auf Brusthöhe sind, und leg die Brust an das Polster.",
        "Greif einen Griff, der andere Arm stützt sich am Polster oder am Sitz ab.",
        "Lass den Arm vorn lang werden, die Schulter darf leicht mitgehen.",
        "Zieh den Ellbogen nach hinten zur Hüfte.",
        "Halte kurz und spann den Rücken an.",
        "Lass den Hebel langsam zurück und wechsle nach dem Satz die Seite."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht weg vom Polster: Brust bleibt am Polster.",
        "Ruckartiges Ziehen: kontrolliert und gleichmäßig.",
        "Kurze Bewegung: vorn ganz strecken."
      ],
      vorteile: [
        "Schwere einseitige Arbeit bei voller Stütze.",
        "Gleicht Seitenunterschiede aus.",
        "Gute Dehnung durch die bogenförmige Hebelbahn."
      ],
      tipps: [
        "Du kannst auch beidarmig mit beiden Hebeln arbeiten.",
        "Für den Latissimus zur Hüfte ziehen, für den oberen Rücken zur Brust."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause hinten oder langsame Rückführung.",
      sicherheit: "Gut geeignet bei Beschwerden im unteren Rücken."
    }
  },
  // ---------- Ziehen horizontal: Körpergewicht und Band ----------
  {
    id: "rudern_invertiert",
    name: "Rudern im Hang an der Stange",
    auch: ["Inverted Row", "Australian Pull-Up", "Bodyweight Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "bizeps", "bauch", "gesaess"],
    geraete: [["multipresse"], ["langhantel"], ["klimmzugstange"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    schwerer: "rudern_invertiert_erhoeht",
    hinweis: "Stange auf Hüfthöhe in Multipresse oder Rack.",
    info: {
      kurz: "Du hängst unter einer Stange auf Hüfthöhe und ziehst die Brust zur Stange, der Körper bleibt gerade wie ein Brett. Die Grundübung für horizontales Ziehen mit dem eigenen Körpergewicht.",
      ausfuehrung: [
        "Stell eine Stange in der Multipresse oder im Rack etwa auf Hüfthöhe ein.",
        "Leg dich darunter und greif die Stange etwas breiter als schulterbreit im Obergriff.",
        "Streck die Beine aus, die Fersen liegen am Boden, der Körper bildet eine gerade Linie von Kopf bis Fuß.",
        "Spann Bauch und Gesäß an und zieh die Brust zur Stange, die Ellbogen gehen nach hinten.",
        "Halte oben kurz, die Schulterblätter sind zusammengezogen.",
        "Senke dich kontrolliert ab, bis die Arme gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Hüfte hängt durch: Gesäß und Bauch anspannen.",
        "Kinn zur Stange recken: Brust zur Stange ziehen.",
        "Halbe Wiederholungen: unten ganz strecken."
      ],
      vorteile: [
        "Kräftigt den oberen Rücken ohne Zusatzgewicht.",
        "Trainiert die Rumpfspannung mit.",
        "Einfach über den Körperwinkel dosierbar."
      ],
      tipps: [
        "Je aufrechter der Körper, desto leichter, je waagerechter, desto schwerer.",
        "Mit gebeugten Knien und Füßen am Boden ist die Übung für Einsteiger gut machbar."
      ],
      varianten: "Leichter: Stange höher oder Knie gebeugt. Schwerer: Füße erhöht, Pause oben oder Zusatzgewicht auf der Brust.",
      sicherheit: "Die Stange muss sicher eingehakt sein. Bei Schulterbeschwerden neutral oder im Untergriff greifen."
    }
  },
  {
    id: "rudern_invertiert_erhoeht",
    name: "Rudern im Hang mit erhöhten Füßen",
    auch: ["Feet-Elevated Inverted Row", "Elevated Australian Pull-Up"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "bizeps", "bauch", "gesaess"],
    geraete: [["multipresse", "bank"], ["langhantel", "bank"], ["multipresse", "box"], ["langhantel", "box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 2,
    schwerer: "rudern_schlingentrainer_einarmig",
    info: {
      kurz: "Rudern im Hang, bei dem die Füße auf einer Bank oder Box liegen. Der Körper ist waagerecht, du ziehst dadurch fast dein ganzes Körpergewicht.",
      ausfuehrung: [
        "Stell die Stange auf Hüfthöhe ein und eine Bank oder Box in Beinlänge davor.",
        "Leg dich unter die Stange, greif sie etwas breiter als schulterbreit und leg die Fersen auf die Erhöhung.",
        "Spann den Körper an, sodass er eine gerade Linie bildet.",
        "Zieh die Brust zur Stange, die Ellbogen gehen nach hinten.",
        "Halte oben eine Sekunde und drück die Schulterblätter zusammen.",
        "Senke dich kontrolliert ab, ohne die Hüfte durchhängen zu lassen."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Hüfte sackt durch: Gesäß fest, Körper gerade.",
        "Erhöhung rutscht weg: stabilen Untergrund wählen.",
        "Kurze Wiederholungen: unten ganz strecken."
      ],
      vorteile: [
        "Höhere Last als das normale Rudern im Hang.",
        "Kräftigt oberen Rücken und Rumpf gleichzeitig.",
        "Gute Vorbereitung auf schwere Zugübungen."
      ],
      tipps: [
        "Eine Pause oben macht die Übung deutlich schwerer.",
        "Wenn es zu leicht wird, leg eine Hantelscheibe auf die Brust."
      ],
      varianten: "Leichter: Füße auf dem Boden. Schwerer: Zusatzgewicht auf der Brust oder einarmig am Schlingentrainer.",
      sicherheit: "Stange und Erhöhung müssen sicher stehen."
    }
  },
  {
    id: "rudern_schlingentrainer",
    name: "Rudern am Schlingentrainer",
    auch: ["TRX Row", "Suspension Trainer Row", "Ring Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["schulter_hinten", "bizeps", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    schwerer: "rudern_invertiert_erhoeht",
    hinweis: "Schräglage bestimmt die Schwierigkeit: je flacher, desto schwerer.",
    info: {
      kurz: "Rudern mit den Griffen eines Schlingentrainers, der Körper ist schräg nach hinten gelehnt. Durch die freien Griffe können sich die Hände drehen, und die Schwierigkeit lässt sich über den Winkel stufenlos einstellen.",
      ausfuehrung: [
        "Befestige den Schlingentrainer sicher an Tür, Decke oder Stange, die Griffe hängen etwa auf Bauchhöhe.",
        "Greif die Griffe und lehn dich mit gestreckten Armen nach hinten, die Füße gehen nach vorn.",
        "Der Körper bildet eine gerade Linie, Bauch und Gesäß sind angespannt.",
        "Zieh die Brust zu den Griffen, die Ellbogen gehen nah am Körper nach hinten.",
        "Dreh die Handflächen dabei nach innen und halte oben kurz.",
        "Lass dich kontrolliert zurück, bis die Arme gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Hüfte knickt ein: Körper gerade halten.",
        "Schultern ziehen hoch: Schulterblätter nach unten.",
        "Schwung aus dem Körper: gleichmäßiges Tempo."
      ],
      vorteile: [
        "Fast überall einsetzbar, auch unterwegs.",
        "Freie Handstellung schont Schultern und Ellbogen.",
        "Stufenlos anpassbar über den Körperwinkel."
      ],
      tipps: [
        "Geh mit den Füßen einen kleinen Schritt nach vorn, um die Übung schwerer zu machen.",
        "Gut als Aufwärmübung oder in Zirkeln."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: flacherer Winkel, Füße erhöht oder einarmig.",
      sicherheit: "Befestigung vor jedem Training prüfen."
    }
  },
  {
    id: "rudern_schlingentrainer_einarmig",
    name: "Einarmiges Rudern am Schlingentrainer",
    auch: ["Single-Arm TRX Row", "One-Arm Suspension Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schraege_bauch", "bauch", "bizeps", "schulter_hinten"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Rudern mit einem Arm am Schlingentrainer. Neben dem Rücken muss der Rumpf verhindern, dass sich der Körper zur freien Seite wegdreht.",
      ausfuehrung: [
        "Schließ beide Griffe zu einem zusammen oder nimm einen Einzelgriff.",
        "Greif mit einer Hand und lehn dich mit gestrecktem Arm nach hinten, die Füße etwa hüftbreit.",
        "Der Körper ist gerade, der freie Arm zeigt nach vorn oder liegt an der Seite.",
        "Zieh dich mit dem Arm hoch, der Ellbogen geht nah am Körper nach hinten.",
        "Halte die Schultern dabei parallel zum Boden, der Körper dreht nicht auf.",
        "Lass dich kontrolliert zurück und wechsle nach dem Satz die Seite."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Körper dreht zur freien Seite weg: Bauch fest, Füße etwas breiter.",
        "Hüfte knickt ein: Körperlinie halten.",
        "Zu flacher Winkel am Anfang: aufrechter beginnen."
      ],
      vorteile: [
        "Kräftigt Rücken und Rumpf gegen Rotation.",
        "Gleicht Seitenunterschiede aus.",
        "Hohe Last ohne Gewichte."
      ],
      tipps: [
        "Mit dem freien Arm kannst du eine Drehung am Ende ergänzen, das macht die Übung dynamischer.",
        "Beginne mit einem aufrechteren Winkel als beim beidarmigen Rudern."
      ],
      varianten: "Leichter: aufrechter stehen oder Füße breiter. Schwerer: flacherer Winkel oder Füße eng.",
      sicherheit: "Bei Schulterbeschwerden den Winkel aufrecht wählen.",
      golf: "Der Rumpf muss hier eine Drehung abfangen, während ein Arm kräftig zieht. Diese Kombination aus Rückenkraft und Rotationskontrolle unterstützt einen stabilen Oberkörper im Schwung."
    }
  },
  {
    id: "rudern_tisch",
    name: "Rudern unter dem Tisch",
    auch: ["Table Row", "Under-Table Row", "Bodyweight Table Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["bizeps", "schulter_hinten", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    schwerer: "rudern_invertiert",
    hinweis: "Nur an einem stabilen, schweren Tisch.",
    info: {
      kurz: "Rudern im Hang unter einem stabilen Tisch, du greifst die Tischkante. Eine einfache Ruderübung für Zuhause ohne jede Ausrüstung.",
      ausfuehrung: [
        "Prüfe, ob der Tisch schwer und stabil genug ist und nicht kippen kann.",
        "Leg dich auf den Rücken unter den Tisch, die Brust ist unter der Tischkante.",
        "Greif die Kante schulterbreit, die Arme sind gestreckt.",
        "Stell die Füße auf, die Knie sind gebeugt, und heb die Hüfte, sodass der Körper von Knie bis Schulter gerade ist.",
        "Zieh die Brust zur Tischkante, die Ellbogen gehen nach hinten.",
        "Senke dich langsam ab, bis die Arme gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Tisch zu leicht: nur an wirklich stabilen Tischen üben.",
        "Hüfte sackt durch: Gesäß anspannen.",
        "Kinn nach vorn recken: Brust zum Tisch."
      ],
      vorteile: [
        "Rückentraining ohne Geräte.",
        "Einfach zu lernen.",
        "Guter Einstieg ins horizontale Ziehen."
      ],
      tipps: [
        "Mit gestreckten Beinen wird die Übung schwerer.",
        "Ein Handtuch über der Kante schont die Finger."
      ],
      varianten: "Leichter: Knie stärker gebeugt. Schwerer: Beine gestreckt oder Pause oben.",
      sicherheit: "Kippgefahr: nur unter massiven Tischen, im Zweifel jemanden auf den Tisch setzen lassen."
    }
  },
  {
    id: "rudern_tuer",
    name: "Rudern mit Handtuch an der Tür",
    auch: ["Door Towel Row", "Doorframe Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["bizeps", "unterarm"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    schwerer: "rudern_invertiert",
    hinweis: "Handtuch um beide Türklinken, Tür muss fest geschlossen sein.",
    info: {
      kurz: "Rudern mit einem Handtuch, das um die Klinken einer geschlossenen Tür gelegt ist. Du lehnst dich zurück und ziehst dich zur Tür, eine einfache Ruderübung für Zuhause.",
      ausfuehrung: [
        "Leg ein kräftiges Handtuch um beide Türklinken und schließe die Tür fest.",
        "Greif die beiden Enden und stell die Füße nah an die Tür.",
        "Lehn dich mit gestreckten Armen nach hinten, der Körper ist gerade.",
        "Zieh dich zur Tür, die Ellbogen gehen nach hinten.",
        "Halte kurz und drück die Schulterblätter zusammen.",
        "Lass dich kontrolliert zurück, bis die Arme gestreckt sind."
      ],
      atmung: "Beim Zurücklehnen einatmen, beim Heranziehen ausatmen.",
      fehler: [
        "Tür springt auf: Stell dich auf die Seite, von der aus man die Tür aufdrückt. Dann zieht dein Gewicht sie gegen den Rahmen.",
        "Hüfte knickt ein: Körper gerade halten.",
        "Zu aufrecht: dann ist kaum Last auf dem Rücken, die Füße näher zur Tür stellen."
      ],
      vorteile: [
        "Rudern ohne Ausrüstung.",
        "Stärkt Rücken und Griff.",
        "Einfach über den Winkel dosierbar."
      ],
      tipps: [
        "Schließ die Tür zusätzlich ab, wenn möglich, und teste die Belastung zuerst vorsichtig.",
        "Ein dickes Handtuch trainiert den Griff zusätzlich."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: Füße näher an die Tür oder einarmig.",
      sicherheit: "Tür, Klinken und Handtuch vorher prüfen. Bei unsicherer Tür auf Rudern unter dem Tisch oder mit Band ausweichen."
    }
  },
  {
    id: "rudern_band",
    name: "Rudern mit Widerstandsband",
    auch: ["Band Row", "Standing Band Row", "Resistance Band Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["bizeps", "schulter_hinten"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Rudern im Stehen mit einem Band, das auf Brusthöhe an Tür oder Pfosten befestigt ist. Einfach, gelenkschonend und überall machbar.",
      ausfuehrung: [
        "Befestige das Band auf Brusthöhe an einem Türanker oder Pfosten.",
        "Greif die Enden und tritt zurück, bis das Band mit gestreckten Armen leicht gespannt ist.",
        "Stell dich hüftbreit hin, die Knie sind locker, der Bauch ist fest.",
        "Zieh die Hände zu den Rippen, die Ellbogen gehen nah am Körper nach hinten.",
        "Halte kurz und drück die Schulterblätter zusammen.",
        "Lass die Arme kontrolliert wieder nach vorn."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper lehnt nach hinten: aufrecht bleiben.",
        "Band schnellt zurück: auch die Rückführung bremsen.",
        "Schultern ziehen hoch: Schultern tief."
      ],
      vorteile: [
        "Rückentraining überall möglich.",
        "Widerstand ist am Ende der Bewegung am höchsten, wo die Schulterblätter zusammengehen.",
        "Sehr gelenkschonend."
      ],
      tipps: [
        "Für mehr Widerstand weiter zurücktreten oder das Band doppelt nehmen.",
        "15 bis 25 Wiederholungen passen gut zum Band."
      ],
      varianten: "Leichter: schwächeres Band. Schwerer: stärkeres Band, einarmig oder Pause hinten.",
      sicherheit: "Band und Befestigung vor dem Training prüfen."
    }
  },
  {
    id: "rudern_band_sitzend",
    name: "Rudern mit Band im Sitzen",
    auch: ["Seated Band Row", "Long-Sitting Band Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["oberer_ruecken", "latissimus"],
    sekundaer: ["bizeps", "schulter_hinten", "ruecken_unten"],
    geraete: [["band", "matte"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Rudern im Langsitz auf dem Boden, das Band liegt um die Fußsohlen. Die Heimvariante des Kabelruderns, für die du keine Befestigung brauchst.",
      ausfuehrung: [
        "Setz dich auf eine Matte, die Beine sind gestreckt oder leicht gebeugt.",
        "Leg die Mitte des Bandes um die Fußsohlen und greif die Enden.",
        "Richte den Oberkörper auf, die Arme sind gestreckt, das Band ist leicht gespannt.",
        "Zieh die Hände zum Bauch, die Ellbogen gehen nah am Körper nach hinten.",
        "Halte kurz und drück die Schulterblätter zusammen.",
        "Lass die Arme kontrolliert nach vorn."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Rundrücken im Sitzen: Knie leicht beugen, Brust aufrichten.",
        "Oberkörper kippt nach hinten: aufrecht bleiben.",
        "Band rutscht von den Füßen: Band mittig unter den Fußballen legen."
      ],
      vorteile: [
        "Rudern ohne Befestigung, nur mit Band.",
        "Kräftigt oberen Rücken und Haltemuskulatur.",
        "Sehr gelenkschonend."
      ],
      tipps: [
        "Wenn das Band zu schwach ist, greif es kürzer.",
        "Bei verkürzten Beinbeugern ein Kissen unter das Gesäß legen."
      ],
      varianten: "Leichter: Band länger greifen. Schwerer: Band kürzer greifen, stärkeres Band oder Pause hinten.",
      sicherheit: "Band vor dem Training prüfen, es darf nicht von den Füßen abrutschen."
    }
  },
  {
    id: "rudern_band_einarmig",
    name: "Einarmiges Rudern mit Band",
    auch: ["Single-Arm Band Row", "One-Arm Resistance Band Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schraege_bauch", "bizeps", "schulter_hinten"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    golf: 1,
    einseitig: true,
    info: {
      kurz: "Rudern mit einem Arm an einem auf Brusthöhe befestigten Band, im Ausfallschritt. Gut für Zuhause, zum Aufwärmen und um Seitenunterschiede auszugleichen.",
      ausfuehrung: [
        "Befestige das Band auf Brusthöhe und greif es mit einer Hand.",
        "Stell dich im Ausfallschritt hin, das Bein der Zugseite ist hinten.",
        "Der Arm ist nach vorn gestreckt, Hüfte und Schultern zeigen zur Befestigung.",
        "Zieh den Ellbogen nah am Körper nach hinten, bis die Hand neben den Rippen ist.",
        "Halte kurz, ohne den Oberkörper aufzudrehen.",
        "Lass den Arm langsam zurück und wechsle nach dem Satz die Seite."
      ],
      atmung: "Vorn einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht weg: Schultern zur Befestigung.",
        "Schulter zieht hoch: Schulter tief halten.",
        "Band schnellt zurück: Rückführung bremsen."
      ],
      vorteile: [
        "Einseitiges Rückentraining überall möglich.",
        "Fordert den Rumpf gegen Rotation.",
        "Gut als Aufwärmübung vor dem Golf oder dem Krafttraining."
      ],
      tipps: [
        "Für die Golfvorbereitung leichte Bänder und 15 bis 20 Wiederholungen je Seite.",
        "Die freie Hand kann auf der Hüfte liegen und kontrollieren, dass sie nicht mitdreht."
      ],
      varianten: "Leichter: schwächeres Band oder paralleler Stand. Schwerer: stärkeres Band oder Pause hinten.",
      sicherheit: "Band und Befestigung vor dem Training prüfen."
    }
  },
  // ---------- Ergänzungen Ziehen ----------
  {
    id: "klimmzug_schlingentrainer",
    name: "Klimmzug am Schlingentrainer mit Fußkontakt",
    auch: ["TRX Assisted Pull-Up", "Suspension Pull-Up", "TRX Pull-Up"],
    muster: "ziehen_vertikal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["bizeps", "unterarm", "quadrizeps"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    schwerer: "klimmzug_negativ",
    hinweis: "Griffe hoch einstellen, die Beine helfen nur so viel wie nötig.",
    info: {
      kurz: "Vertikales Ziehen an den hoch eingestellten Griffen eines Schlingentrainers, die Füße bleiben am Boden und helfen mit. Ein Klimmzugersatz für Zuhause und für Einsteiger.",
      ausfuehrung: [
        "Befestige den Schlingentrainer hoch, zum Beispiel an einer Tür oder Decke, und kürze die Griffe, sodass sie im Sitzen mit gestreckten Armen erreichbar sind.",
        "Setz oder hock dich unter die Befestigung und greif die Griffe, die Arme sind über dem Kopf gestreckt.",
        "Die Fersen stehen am Boden, die Knie sind gebeugt.",
        "Zieh dich mit den Armen nach oben, die Ellbogen gehen nach unten zu den Rippen.",
        "Hilf mit den Beinen nur so viel, wie nötig ist, bis die Hände neben den Schultern sind.",
        "Lass dich langsam wieder nach unten, bis die Arme gestreckt sind."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Die Beine machen die ganze Arbeit: zuerst mit dem Rücken ziehen.",
        "Schultern ziehen zu den Ohren: Schulterblätter nach unten.",
        "Unten nicht ganz strecken: die Arme oben lang werden lassen."
      ],
      vorteile: [
        "Klimmzugbewegung ohne Stange.",
        "Fein dosierbar über die Mithilfe der Beine.",
        "Gute Vorbereitung auf echte Klimmzüge."
      ],
      tipps: [
        "Je gestreckter die Beine, desto weniger können sie helfen und desto schwerer wird es.",
        "Die freien Griffe erlauben eine natürliche Handdrehung."
      ],
      varianten: "Leichter: mehr Hilfe aus den Beinen. Schwerer: Beine gestreckt, nur Fersen am Boden, oder negative Klimmzüge an der Stange.",
      sicherheit: "Befestigung vor jedem Training prüfen."
    }
  },
  {
    id: "rudern_kh_brust_einarmig",
    name: "Einarmiges brustgestütztes Rudern",
    auch: ["Single-Arm Chest-Supported Row", "One-Arm Incline Dumbbell Row"],
    muster: "ziehen_horizontal",
    art: "kraft",
    muskeln: ["latissimus", "oberer_ruecken"],
    sekundaer: ["schulter_hinten", "trapez", "bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Rudern in Bauchlage auf der Schrägbank mit nur einer Kurzhantel. Der Oberkörper ist voll gestützt, und weil nur ein Arm arbeitet, kann sich die Schulter weiter nach vorn und hinten bewegen.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 Grad und leg dich mit dem Bauch darauf, das Kinn knapp über der Lehne.",
        "Nimm eine Kurzhantel in eine Hand, die andere Hand hält sich am Bankfuß fest.",
        "Lass den Arm gestreckt hängen und die Schulter leicht nach unten sinken.",
        "Zieh die Hantel zur Hüfte, der Ellbogen streicht am Körper vorbei.",
        "Halte oben kurz, die Brust bleibt auf der Bank.",
        "Senke die Hantel langsam in die volle Dehnung und wechsle nach dem Satz die Seite."
      ],
      atmung: "Unten einatmen, beim Ziehen ausatmen.",
      fehler: [
        "Oberkörper dreht sich auf der Bank: Brust bleibt flach auf dem Polster.",
        "Zu kurze Bewegung: unten ganz strecken.",
        "Kopf in den Nacken: Blick nach unten."
      ],
      vorteile: [
        "Maximaler Bewegungsumfang bei voller Rückenentlastung.",
        "Gleicht Seitenunterschiede aus.",
        "Die freie Hand gibt zusätzlichen Halt."
      ],
      tipps: [
        "Für den Latissimus zur Hüfte ziehen, für den oberen Rücken den Ellbogen abspreizen und zur Brust ziehen.",
        "Gut als zweite Ruderübung nach einer schweren beidarmigen Variante."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben oder langsame Absenkphase.",
      sicherheit: "Gut geeignet bei Beschwerden im unteren Rücken."
    }
  },
  // ---------- Trapez ----------
  {
    id: "shrug_lh",
    name: "Shrugs mit Langhantel",
    auch: ["Barbell Shrug", "Schulterheben mit Langhantel"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["nacken", "unterarm", "oberer_ruecken"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterheben mit der Langhantel vor dem Körper. Die Grundübung für den oberen Trapezmuskel, mit der du sehr schwere Lasten bewegen kannst.",
      ausfuehrung: [
        "Nimm die Langhantel aus dem Rack auf Oberschenkelhöhe, Griff etwas breiter als hüftbreit im Obergriff.",
        "Stell dich hüftbreit hin, die Arme hängen gestreckt, die Stange liegt an den Oberschenkeln.",
        "Spann den Bauch an, der Oberkörper ist aufrecht oder minimal nach vorn geneigt.",
        "Zieh die Schultern gerade nach oben in Richtung Ohren, so hoch es geht.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Senke die Schultern langsam, bis du unten eine Dehnung im Nacken spürst."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Schultern kreisen: einfach gerade nach oben und unten bewegen.",
        "Arme beugen sich: die Arme sind nur Haken.",
        "Kopf nach vorn schieben: der Kopf bleibt neutral.",
        "Zu schwer und nur wenige Zentimeter Bewegung: vollen Weg nach oben und unten."
      ],
      vorteile: [
        "Kräftigt den oberen Trapez mit hoher Last.",
        "Stärkt die Griffkraft.",
        "Kann helfen, die Schultern beim Tragen schwerer Lasten zu stabilisieren."
      ],
      tipps: [
        "Zughilfen erlauben dir, den Trapez zu ermüden, bevor der Griff aufgibt.",
        "Eine Sekunde Pause oben bringt mehr als mehr Gewicht.",
        "Leicht nach vorn geneigt passt die Zugrichtung oft besser zu den Muskelfasern."
      ],
      varianten: "Leichter: Kurzhanteln oder weniger Gewicht. Schwerer: mehr Gewicht, Pause oben oder langsame Absenkphase.",
      sicherheit: "Bei Nackenbeschwerden mit leichtem Gewicht beginnen und den Kopf nicht bewegen."
    }
  },
  {
    id: "shrug_kh",
    name: "Shrugs mit Kurzhanteln",
    auch: ["Dumbbell Shrug", "DB Shrug", "Kurzhantel-Schulterheben"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["nacken", "unterarm"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterheben mit je einer Kurzhantel neben dem Körper. Die Hanteln hängen seitlich, so ist die Zugrichtung natürlicher als mit der Langhantel vor dem Körper.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, in jeder Hand eine Kurzhantel, die Handflächen zeigen zum Körper.",
        "Die Arme hängen gestreckt neben dem Körper, der Bauch ist fest.",
        "Zieh die Schultern gerade nach oben zu den Ohren.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Senke die Schultern langsam ab, bis du eine Dehnung spürst.",
        "Wiederhole ohne Schwung aus den Knien."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Schultern kreisen: gerade hoch und runter.",
        "Ellbogen beugen sich: Arme bleiben gestreckt.",
        "Kopf geht nach vorn: Blick geradeaus."
      ],
      vorteile: [
        "Natürliche Zugrichtung durch die Hanteln neben dem Körper.",
        "Kräftigt Trapez und Griff.",
        "Braucht nur Kurzhanteln."
      ],
      tipps: [
        "Halte oben bewusst an, damit der Trapez die Arbeit macht.",
        "Zughilfen helfen bei schweren Hanteln."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: mehr Gewicht, längere Pause oben oder Shrugs auf der Schrägbank.",
      sicherheit: "Bei Nackenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "shrug_kh_schraeg",
    name: "Shrugs auf der Schrägbank",
    auch: ["Incline DB Shrug", "Incline Dumbbell Shrug", "Prone Incline Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez", "oberer_ruecken"],
    sekundaer: ["schulter_hinten"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: {},
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Schulterheben in Bauchlage auf der Schrägbank mit Kurzhanteln. Durch den Winkel ziehst du die Schulterblätter nach hinten oben, das trifft den mittleren und oberen Trapez gleichzeitig.",
      ausfuehrung: [
        "Stell eine Bank auf etwa 30 bis 45 Grad und leg dich mit dem Bauch darauf, das Kinn knapp über der Lehne.",
        "Nimm je eine Kurzhantel, die Arme hängen gestreckt nach unten.",
        "Zieh die Schulterblätter nach hinten oben zusammen, als wolltest du sie hinter dem Kopf zusammenbringen.",
        "Die Arme bleiben gestreckt, die Bewegung kommt nur aus den Schultern.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Lass die Schulterblätter langsam nach vorn unten gleiten, bis du die Dehnung spürst."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Ellbogen beugen sich und es wird ein Rudern: Arme gestreckt lassen.",
        "Brust hebt sich von der Bank: Kontakt halten.",
        "Kopf in den Nacken: Blick nach unten."
      ],
      vorteile: [
        "Trainiert den oberen und mittleren Trapez in einem.",
        "Keine Belastung des Nackens durch die Bauchlage.",
        "Kann eine aufrechte Schulterhaltung unterstützen."
      ],
      tipps: [
        "Mittleres Gewicht mit 12 bis 20 Wiederholungen passt gut.",
        "Gut im Supersatz mit einer Ruderübung."
      ],
      varianten: "Leichter: weniger Gewicht oder steilere Bank. Schwerer: Pause oben oder langsamer absenken.",
      sicherheit: "Für die meisten gut verträglich, auch bei Nackenbeschwerden oft angenehmer als stehende Shrugs."
    }
  },
  {
    id: "shrug_scheibe",
    name: "Shrugs mit Hantelscheiben",
    auch: ["Plate Shrug", "Plate Pinch Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["unterarm", "nacken"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1, handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterheben mit je einer Hantelscheibe in jeder Hand, gehalten an der Griffmulde oder im Pinzettengriff am Rand. Neben dem Trapez wird der Griff stark gefordert.",
      ausfuehrung: [
        "Nimm in jede Hand eine Hantelscheibe, entweder an der Griffmulde oder mit den Fingern am Rand gegen den Daumen gepresst.",
        "Stell dich hüftbreit hin, die Scheiben hängen seitlich neben den Oberschenkeln.",
        "Spann den Bauch an und zieh die Schultern gerade nach oben.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Senke die Schultern langsam ab.",
        "Wenn der Griff nachlässt, stell die Scheiben kontrolliert ab."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Scheiben pendeln: ruhig halten.",
        "Schultern kreisen: gerade nach oben.",
        "Scheiben fallen lassen: am Ende des Satzes kontrolliert abstellen."
      ],
      vorteile: [
        "Trainiert Trapez und Griffkraft zugleich.",
        "Braucht nur Hantelscheiben.",
        "Gut für Zuhause."
      ],
      tipps: [
        "Der Pinzettengriff am Rand ist deutlich schwerer für die Finger.",
        "Wenn du nur eine Scheibe hast, halte sie mit beiden Händen vor dem Körper."
      ],
      varianten: "Leichter: an der Griffmulde halten. Schwerer: schwerere Scheiben oder Pinzettengriff.",
      sicherheit: "Auf die Füße achten, Scheiben nie unkontrolliert fallen lassen."
    }
  },
  {
    id: "shrug_kabel_in",
    name: "Kabel-Shrug nach innen",
    auch: ["Cable Shrug-In", "Cable Shrug In", "Cable Y-Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["nacken"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    hinweis: "Zwischen zwei tiefen Kabeln stehen, Schultern nach oben innen ziehen.",
    info: {
      kurz: "Schulterheben zwischen zwei tiefen Kabelrollen, die Kabel kommen schräg von außen unten. Du ziehst die Schultern nach oben und leicht nach innen, das passt gut zum Verlauf der oberen Trapezfasern.",
      ausfuehrung: [
        "Stell beide Kabel eines Kabelturms ganz nach unten und häng Einhandgriffe ein.",
        "Greif den linken Griff mit der rechten Hand und den rechten mit der linken oder stell dich einfach mittig zwischen die Kabel.",
        "Stell dich aufrecht, die Arme hängen gestreckt leicht schräg nach außen unten.",
        "Zieh die Schultern nach oben und leicht nach innen zu den Ohren.",
        "Halte oben eine Sekunde und spann den Trapez fest an.",
        "Senke die Schultern langsam nach außen unten, bis du die Dehnung spürst."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Arme beugen sich: die Arme bleiben gestreckt.",
        "Kopf geht nach vorn: neutral halten.",
        "Zu schwer: dann wird die Bewegung sehr klein."
      ],
      vorteile: [
        "Zugrichtung passt gut zum Faserverlauf des oberen Trapez.",
        "Gleichmäßige Spannung durch das Kabel.",
        "Gute Dehnung unten."
      ],
      tipps: [
        "Moderate Gewichte mit 12 bis 20 Wiederholungen bringen hier das beste Gefühl.",
        "Stell dir vor, du ziehst die Schultern zu den Ohrläppchen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben oder langsame Absenkphase.",
      sicherheit: "Bei Nackenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "shrug_kabel",
    name: "Shrugs am Kabel mit Stange",
    auch: ["Cable Shrug", "Cable Barbell Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["nacken", "unterarm"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterheben mit einer geraden Stange am tiefen Kabel. Das Kabel hält die Spannung auch unten aufrecht und erlaubt einen gleichmäßigen Bewegungsablauf.",
      ausfuehrung: [
        "Häng eine gerade Stange am tiefen Kabel ein und greif sie schulterbreit im Obergriff.",
        "Stell dich nah vor den Turm, die Arme hängen gestreckt vor den Oberschenkeln.",
        "Spann den Bauch an und richte dich auf.",
        "Zieh die Schultern gerade nach oben.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Senke die Schultern langsam, bis du unten eine Dehnung spürst."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Schultern kreisen: gerade bewegen.",
        "Zu weit vom Turm: dann zieht das Kabel nach vorn, nah am Turm stehen.",
        "Arme beugen sich: Arme bleiben gestreckt."
      ],
      vorteile: [
        "Konstante Spannung durch das Kabel.",
        "Gut für hohe Wiederholungen.",
        "Einfach in jedem Studio umsetzbar."
      ],
      tipps: [
        "Wenn das Kabel vom Turm ausgeht, kannst du dich auch mit dem Rücken zum Turm stellen.",
        "Gut als zweite Trapezübung nach Langhantel-Shrugs."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben oder Kabel-Shrug nach innen.",
      sicherheit: "Bei Nackenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "shrug_trapbar",
    name: "Shrugs mit der Trap-Bar",
    auch: ["Trap Bar Shrug", "Hex Bar Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["unterarm", "nacken", "oberer_ruecken"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    hinweis: "Mit der sechseckigen Trap-Bar, falls vorhanden.",
    info: {
      kurz: "Schulterheben mit der sechseckigen Trap-Bar, in der du mittig stehst. Die Last hängt seitlich neben dem Körper, deshalb kannst du sehr schwer und mit natürlicher Zugrichtung arbeiten.",
      ausfuehrung: [
        "Stell dich mittig in die Trap-Bar und greif die seitlichen Griffe.",
        "Heb die Stange wie beim Kreuzheben mit geradem Rücken an, bis du aufrecht stehst.",
        "Die Arme hängen gestreckt seitlich, der Bauch ist fest.",
        "Zieh die Schultern gerade nach oben.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Senke die Schultern langsam ab und leg die Stange nach dem Satz mit geradem Rücken ab."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Rundrücken beim Aufnehmen der Stange: wie beim Kreuzheben mit geradem Rücken anheben.",
        "Schultern kreisen: gerade nach oben.",
        "Zu wenig Bewegungsweg: volle Höhe und volle Dehnung."
      ],
      vorteile: [
        "Natürliche Zugrichtung neben dem Körper bei sehr hoher Last.",
        "Kräftigt Trapez und Griff.",
        "Die Stange berührt die Oberschenkel nicht."
      ],
      tipps: [
        "Hohe Griffe der Trap-Bar erleichtern das Aufnehmen.",
        "Zughilfen nutzen, wenn der Griff begrenzt."
      ],
      varianten: "Leichter: weniger Gewicht oder Kurzhanteln. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Bei Rückenbeschwerden die Stange aus erhöhter Position aufnehmen."
    }
  },
  {
    id: "shrug_multipresse",
    name: "Shrugs an der Multipresse",
    auch: ["Smith Machine Shrug", "Machine Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["nacken", "unterarm"],
    geraete: [["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    info: {
      kurz: "Schulterheben an der geführten Stange der Multipresse oder an einer Shrug-Maschine. Die Führung gibt Sicherheit, du kannst dich ganz auf den Trapez konzentrieren.",
      ausfuehrung: [
        "Stell die Haken der Multipresse auf Oberschenkelhöhe.",
        "Greif die Stange etwas breiter als hüftbreit und heb sie aus den Haken.",
        "Stell dich aufrecht hin, die Arme hängen gestreckt.",
        "Zieh die Schultern gerade nach oben.",
        "Halte oben eine Sekunde und senke die Schultern dann langsam.",
        "Nach dem Satz die Stange sicher einhaken."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Zu nah an der Stange: die Stange schleift über die Oberschenkel.",
        "Arme beugen: Arme bleiben gestreckt.",
        "Ruckartig hochziehen: kontrolliert und mit Pause."
      ],
      vorteile: [
        "Sicher und gut geführt.",
        "Gut für hohe Wiederholungen und Intensitätstechniken.",
        "Einfach zu lernen."
      ],
      tipps: [
        "Stell dich leicht hinter die Stange, damit sie frei läuft.",
        "Gut im Anschluss an freie Shrugs."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause oben oder hinter dem Rücken ausführen.",
      sicherheit: "Bei Nackenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "shrug_hinter_ruecken",
    name: "Shrugs hinter dem Rücken",
    auch: ["Behind-the-Back Barbell Shrug", "Behind-the-Back Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez", "oberer_ruecken"],
    sekundaer: ["unterarm", "nacken"],
    geraete: [["langhantel"], ["multipresse"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 2,
    info: {
      kurz: "Schulterheben mit der Langhantel hinter dem Gesäß. Die Schultern werden dabei etwas nach hinten gezogen, wodurch der mittlere Trapez stärker mitarbeitet.",
      ausfuehrung: [
        "Leg die Langhantel im Rack auf Gesäßhöhe ab und stell dich mit dem Rücken davor.",
        "Greif die Stange hinter dem Körper schulterbreit im Obergriff und heb sie aus dem Rack.",
        "Stell dich aufrecht hin, die Arme hängen gestreckt, die Stange liegt am Gesäß.",
        "Zieh die Schultern nach oben und leicht nach hinten.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Senke die Schultern langsam ab."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Oberkörper kippt nach vorn: aufrecht bleiben.",
        "Ellbogen beugen: Arme gestreckt.",
        "Zu schwer: diese Variante erlaubt weniger Gewicht als vor dem Körper."
      ],
      vorteile: [
        "Betont den mittleren und oberen Trapez gemeinsam.",
        "Bringt Abwechslung in das Trapeztraining.",
        "Fördert eine Schulterhaltung nach hinten."
      ],
      tipps: [
        "An der Multipresse ist die Ausführung einfacher.",
        "Leicht beginnen, bis der ungewohnte Griff sitzt."
      ],
      varianten: "Leichter: Multipresse oder weniger Gewicht. Schwerer: mehr Gewicht oder längere Pause oben.",
      sicherheit: "Bei Schulterbeschwerden vorn an der Schulter vorsichtig, da die Arme hinter dem Körper sind."
    }
  },
  {
    id: "shrug_ueberkopf",
    name: "Überkopf-Shrugs",
    auch: ["Overhead Shrug", "Overhead Barbell Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["schulter_vorn", "schulter_seitlich", "trizeps", "bauch"],
    geraete: [["langhantel"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Schulterheben mit gestreckten Armen über dem Kopf. Der Trapez arbeitet hier zusammen mit der Aufwärtsdrehung der Schulterblätter, die für gesunde Überkopfbewegungen wichtig ist.",
      ausfuehrung: [
        "Drück eine leichte Langhantel oder zwei Kurzhanteln über den Kopf, die Arme sind gestreckt.",
        "Der Griff ist etwas breiter als schulterbreit, die Hantel ist über dem Hinterkopf.",
        "Spann Bauch und Gesäß an, die Rippen bleiben unten.",
        "Schieb die Hantel weiter nach oben, indem du die Schultern zu den Ohren ziehst.",
        "Halte oben eine Sekunde und spann den Trapez bewusst an.",
        "Lass die Schultern langsam ein Stück sinken, ohne die Arme zu beugen."
      ],
      atmung: "Ruhig atmen, beim Hochschieben ausatmen.",
      fehler: [
        "Hohlkreuz: Rippen nach unten, Gesäß fest.",
        "Ellbogen beugen sich: Arme bleiben gestreckt.",
        "Zu schwer: das Gewicht muss sicher über dem Kopf kontrollierbar sein."
      ],
      vorteile: [
        "Kräftigt den Trapez in der Überkopfposition.",
        "Unterstützt die Aufwärtsrotation der Schulterblätter.",
        "Verbessert die Stabilität über dem Kopf."
      ],
      tipps: [
        "Beginne mit einer leeren Stange oder leichten Kurzhanteln.",
        "Gut als Teil des Aufwärmens vor Überkopfdrücken."
      ],
      varianten: "Leichter: leere Stange oder einarmig mit Kurzhantel. Schwerer: mehr Gewicht oder längere Haltezeit.",
      sicherheit: "Nur bei schmerzfreier Überkopfbeweglichkeit. Bei Schulterbeschwerden auslassen."
    }
  },
  {
    id: "shrug_band",
    name: "Shrugs mit Band",
    auch: ["Band Shrug", "Resistance Band Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["nacken"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Schulterheben mit einem Band, das unter den Füßen liegt. Eine einfache Trapezübung für Zuhause und unterwegs.",
      ausfuehrung: [
        "Stell dich mit beiden Füßen hüftbreit auf die Mitte des Bandes.",
        "Greif die Enden, die Arme hängen gestreckt neben dem Körper.",
        "Richte dich auf und spann den Bauch an.",
        "Zieh die Schultern gerade nach oben zu den Ohren.",
        "Halte oben zwei Sekunden.",
        "Senke die Schultern langsam ab."
      ],
      atmung: "Unten einatmen, beim Hochziehen ausatmen.",
      fehler: [
        "Band zu locker: kürzer greifen, bis es schon unten Spannung hat.",
        "Arme beugen: Arme gestreckt lassen.",
        "Kopf nach vorn: Blick geradeaus."
      ],
      vorteile: [
        "Trapeztraining ohne Gewichte.",
        "Widerstand steigt nach oben, wo der Trapez voll angespannt ist.",
        "Gelenkschonend."
      ],
      tipps: [
        "Längere Haltezeit oben macht auch leichte Bänder wirksam.",
        "Breiterer Stand erhöht die Spannung."
      ],
      varianten: "Leichter: schwächeres Band. Schwerer: stärkeres Band, breiter stehen oder länger halten.",
      sicherheit: "Band vor dem Training prüfen, es darf nicht unter den Füßen wegrutschen."
    }
  },
  {
    id: "shrug_farmer",
    name: "Farmer's Walk mit hochgezogenen Schultern",
    auch: ["Farmer Shrug", "Shrug Carry", "Farmer's Walk Shrug Hold"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["unterarm", "bauch", "schraege_bauch", "oberer_ruecken"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { nacken: 1 },
    stufe: 1,
    hinweis: "Schultern oben halten und 20 bis 40 Meter gehen.",
    info: {
      kurz: "Du gehst mit schweren Hanteln in den Händen und hältst dabei die Schultern hochgezogen. Der Trapez arbeitet statisch über lange Zeit, dazu kommen Griff und Rumpf.",
      ausfuehrung: [
        "Nimm zwei schwere Kurzhanteln oder Kettlebells vom Boden auf, mit geradem Rücken wie beim Kreuzheben.",
        "Stell dich aufrecht hin und zieh die Schultern so weit wie möglich nach oben.",
        "Halte diese Position und geh mit kurzen, kontrollierten Schritten los.",
        "Der Oberkörper bleibt aufrecht, die Hanteln pendeln nicht.",
        "Geh die vorgegebene Strecke oder Zeit, ohne die Schultern sinken zu lassen.",
        "Stell die Hanteln am Ende kontrolliert mit geradem Rücken ab."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht pressen.",
      fehler: [
        "Schultern sinken nach ein paar Schritten: lieber leichtere Hanteln oder kürzere Strecke.",
        "Oberkörper schwankt: Bauch fest, kurze Schritte.",
        "Kopf nach vorn: Blick geradeaus."
      ],
      vorteile: [
        "Lange Spannungszeit für den Trapez.",
        "Kräftigt Griff und Rumpf mit.",
        "Alltagsnah: Tragen schwerer Lasten."
      ],
      tipps: [
        "Gut als Abschluss einer Rücken- oder Ganzkörpereinheit.",
        "20 bis 40 Meter oder 20 bis 40 Sekunden pro Durchgang sind ein guter Richtwert."
      ],
      varianten: "Leichter: leichtere Hanteln oder kürzere Strecke. Schwerer: schwerere Hanteln oder längere Strecke.",
      sicherheit: "Freie Laufstrecke ohne Stolperfallen wählen. Bei Bluthochdruck nicht pressen."
    }
  },
  {
    id: "shrug_explosiv",
    name: "Power-Shrugs",
    auch: ["Power Shrug", "Clean Shrug", "Explosive Shrug"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez"],
    sekundaer: ["gesaess", "beinbeuger", "quadrizeps", "unterarm", "ruecken_unten"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1, nacken: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Explosives Schulterheben mit Schwung aus den Beinen, aus der Position kurz über dem Knie. Die Übung kommt aus dem Gewichtheben und verbindet Hüftstreckung mit kräftigem Trapezzug.",
      ausfuehrung: [
        "Nimm die Langhantel aus dem Rack, Griff etwas breiter als hüftbreit im Obergriff.",
        "Beuge Hüfte und Knie leicht, bis die Stange knapp über den Knien ist, Rücken gerade, Schultern über der Stange.",
        "Streck explosiv Hüfte und Knie und zieh im selben Moment die Schultern kräftig nach oben.",
        "Die Arme bleiben gestreckt, du kommst eventuell kurz auf die Zehenspitzen.",
        "Lande sanft und senke die Schultern kontrolliert ab.",
        "Richte dich für jede Wiederholung neu in der Ausgangsposition ein."
      ],
      atmung: "Vor jeder Wiederholung einatmen und Spannung aufbauen, nach dem Zug ausatmen.",
      fehler: [
        "Arme beugen sich: Arme bleiben gestreckt, sonst wird es ein Umsetzen.",
        "Rundrücken in der Ausgangsposition: Brust heraus, Rücken gerade.",
        "Hüfte und Schultern arbeiten nacheinander statt zusammen: in einer Bewegung strecken und ziehen."
      ],
      vorteile: [
        "Schult die explosive Hüftstreckung und den Trapezzug.",
        "Ermöglicht sehr hohe Lasten durch den Beinschwung.",
        "Gute Vorbereitung auf Umsetzen und Reißen."
      ],
      tipps: [
        "Drei bis sechs Wiederholungen pro Satz, jede Wiederholung bewusst schnell.",
        "Mit einer leichten Stange beginnen, bis der Ablauf sitzt."
      ],
      varianten: "Leichter: normale Langhantel-Shrugs. Schwerer: mehr Gewicht oder High Pull.",
      sicherheit: "Bei Rücken- oder Nackenbeschwerden lieber normale Shrugs ohne Schwung."
    }
  },
  {
    id: "high_pull_lh",
    name: "High Pull mit Langhantel",
    auch: ["Barbell High Pull", "Clean High Pull", "Hang High Pull"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez", "oberer_ruecken"],
    sekundaer: ["schulter_seitlich", "schulter_hinten", "gesaess", "beinbeuger", "bizeps"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 3,
    golf: 1,
    info: {
      kurz: "Explosiver Zug der Langhantel aus der Hüfte bis etwa auf Brusthöhe, die Ellbogen gehen hoch und nach außen. Eine Übung aus dem Gewichtheben, die Hüftkraft, Trapez und oberen Rücken verbindet.",
      ausfuehrung: [
        "Greif die Langhantel etwas breiter als schulterbreit im Obergriff und steh aufrecht.",
        "Beuge Hüfte und Knie, bis die Stange knapp über den Knien ist, Rücken gerade, Schultern über der Stange.",
        "Streck Hüfte und Knie explosiv und zieh die Schultern hoch.",
        "Führe die Bewegung mit den Ellbogen weiter, die nach oben und außen gehen, bis die Stange etwa auf Höhe der unteren Brust ist.",
        "Die Stange bleibt nah am Körper.",
        "Lass die Stange kontrolliert zurück in die Hüfte und setz neu an."
      ],
      atmung: "Vor dem Zug einatmen und Spannung aufbauen, oben ausatmen.",
      fehler: [
        "Zug nur aus den Armen: der Schwung kommt aus Hüfte und Beinen.",
        "Stange entfernt sich vom Körper: nah am Körper nach oben ziehen.",
        "Hände über die Ellbogen ziehen: die Ellbogen führen und bleiben höher als die Hände."
      ],
      vorteile: [
        "Trainiert explosive Kraft von der Hüfte bis zu den Schultern.",
        "Kräftigt Trapez und oberen Rücken.",
        "Gute Vorbereitung auf Umsetzen und Reißen."
      ],
      tipps: [
        "Drei bis fünf schnelle Wiederholungen pro Satz.",
        "Mit leichter Stange starten und den Ablauf von Hüfte zu Schultern zu Ellbogen üben."
      ],
      varianten: "Leichter: Power-Shrugs oder Kettlebell-High-Pull. Schwerer: aus dem Stand vom Boden oder mehr Gewicht.",
      sicherheit: "Bei Schulterbeschwerden mit Engegefühl beim Armheben auslassen. Technik am besten unter Anleitung lernen."
    }
  },
  {
    id: "high_pull_kb",
    name: "High Pull mit Kettlebell",
    auch: ["Kettlebell High Pull", "Dumbbell High Pull", "KB High Pull"],
    muster: "trapez",
    art: "kraft",
    muskeln: ["trapez", "oberer_ruecken"],
    sekundaer: ["gesaess", "beinbeuger", "schulter_hinten", "schulter_seitlich"],
    geraete: [["kettlebell"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1, ruecken: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Explosiver Zug einer Kettlebell aus dem Schwung zwischen den Beinen bis auf Brusthöhe. Eine Übung aus dem Kettlebelltraining, die Hüftstreckung und Zug für den oberen Rücken verbindet.",
      ausfuehrung: [
        "Stell dich etwas breiter als hüftbreit hin, die Kettlebell steht vor dir.",
        "Greif den Griff mit beiden Händen oder mit einer Hand und schwing sie wie beim Kettlebellschwung zwischen die Beine.",
        "Streck die Hüfte kraftvoll und zieh die Kettlebell mit dem Ellbogen nach oben, bis die Hand auf Brusthöhe ist.",
        "Der Ellbogen geht hoch und nach außen, die Schulter bleibt tief.",
        "Lass die Kettlebell kontrolliert zurück in den Schwung zwischen die Beine.",
        "Mach alle Wiederholungen in einem flüssigen Rhythmus."
      ],
      atmung: "Beim Zug kräftig ausatmen, im Rückschwung einatmen.",
      fehler: [
        "Zug nur aus dem Arm: der Schwung kommt aus der Hüfte.",
        "Rundrücken im Rückschwung: Hüfte nach hinten schieben, Rücken gerade.",
        "Schultern ziehen hoch: Ellbogen führen, Schultern aktiv lassen."
      ],
      vorteile: [
        "Verbindet explosive Hüftstreckung mit Zug für den oberen Rücken.",
        "Einfacher zu lernen als der Langhantel-High-Pull.",
        "Gut für Kraftausdauer und Kondition."
      ],
      tipps: [
        "Beherrsch zuerst den Kettlebellschwung, bevor du den High Pull ergänzt.",
        "Einarmig ist die Variante auch eine Übung für den Rumpf."
      ],
      varianten: "Leichter: Kettlebellschwung ohne Zug. Schwerer: schwerere Kettlebell oder einarmig.",
      sicherheit: "Bei Rücken- oder Schulterbeschwerden zuerst den Kettlebellschwung sicher beherrschen."
    }
  },
]
