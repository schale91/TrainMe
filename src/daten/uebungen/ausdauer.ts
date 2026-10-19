import type { Uebung } from "../../logik/typen"

// Ausdauer: ruhige Grundlageneinheiten (ausdauer_ruhig) und Intervalle (ausdauer_intervall).
// Intensität überall dreifach beschrieben: Sprechtest, grobe Prozentwerte der maximalen Herzfrequenz (HFmax)
// und gefühlte Anstrengung (RPE, Skala 1 bis 10). Die Prozentwerte sind nur Richtwerte.

export const AUSDAUER: Uebung[] = [
  // ---------- Ruhig: Laufen und Gehen ----------
  {
    id: "lauf_locker",
    name: "Lockerer Dauerlauf",
    auch: ["Easy Run", "Grundlagenlauf", "Zone 2 Run", "Jogging"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "golf"],
    golf: 1,
    hinweis: "So ruhig, dass du noch ganze Sätze sprechen kannst.",
    info: {
      kurz: "Gleichmäßiger Lauf in ruhigem Tempo, der Grundbaustein jedes Ausdauertrainings. Er verbessert die aerobe Grundlage, also die Fähigkeit deines Körpers, über lange Zeit Energie mit Sauerstoff bereitzustellen.",
      ausfuehrung: [
        "Geh zum Aufwärmen 3 bis 5 Minuten zügig und lauf dann ganz langsam an.",
        "Finde ein Tempo, bei dem du dich noch in ganzen Sätzen unterhalten kannst (Sprechtest). Das entspricht grob 60 bis 70 Prozent deiner maximalen Herzfrequenz oder einer gefühlten Anstrengung von 3 bis 4 auf einer Skala von 1 bis 10.",
        "Lauf aufrecht, der Blick geht nach vorn, die Schultern sind locker und die Arme schwingen im rechten Winkel neben dem Körper mit.",
        "Mach eher kurze, leichte Schritte und setz den Fuß ungefähr unter dem Körper auf, statt weit vorn mit der Ferse zu bremsen.",
        "Halte das Tempo über die ganze Zeit gleich. Wird das Sprechen schwerer, etwa am Berg oder bei Gegenwind, wirst du langsamer oder gehst ein Stück.",
        "Lauf die letzten 3 bis 5 Minuten bewusst langsamer aus und geh noch kurz, bis sich der Atem beruhigt hat."
      ],
      atmung: "Atme locker durch Nase und Mund, gleichmäßig und ohne Pressen. Ein häufiger Rhythmus ist: zwei oder drei Schritte einatmen, zwei oder drei Schritte ausatmen.",
      fehler: [
        "Zu schnell laufen: Der häufigste Fehler. Wenn du nur noch einzelne Wörter herausbringst, nimm deutlich Tempo raus, auch wenn es sich langsam anfühlt.",
        "Überschreiten mit der Ferse weit vor dem Körper: Schrittfrequenz etwas erhöhen und kürzere Schritte machen.",
        "Hochgezogene, verspannte Schultern: Hände locker halten, als würdest du ein rohes Ei tragen, Schultern bewusst sinken lassen.",
        "Jedes Mal schneller werden wollen: Der lockere Lauf soll locker bleiben, Fortschritt kommt über mehr Minuten, nicht über mehr Tempo.",
        "Kein Auslaufen: Abrupt stehen bleiben fühlt sich schwindelig an, lieber langsam ausjoggen und gehen."
      ],
      vorteile: [
        "Verbessert die aerobe Grundlagenausdauer, auf der alle schnelleren Einheiten aufbauen.",
        "Fördert die Erholung zwischen intensiven Einheiten und Spielen, weil die Belastung niedrig bleibt.",
        "Stärkt die Herz-Kreislauf-Fitness und kann helfen, Blutdruck und Ruhepuls langfristig zu senken.",
        "Gewöhnt Sehnen, Knochen und Gelenke schrittweise an die Laufbelastung.",
        "Lässt sich fast überall ohne Ausrüstung außer guten Laufschuhen durchführen."
      ],
      tipps: [
        "Der größte Teil deiner Ausdauerzeit, oft rund 80 Prozent, sollte so locker sein. Das ist ein bewährtes Prinzip vieler Ausdauersportler.",
        "Einsteiger beginnen mit 15 bis 20 Minuten und steigern pro Woche höchstens um etwa 10 Prozent der Gesamtzeit.",
        "Laufband: 1 Prozent Steigung einstellen, das entspricht eher dem Laufen draußen.",
        "Eine Pulsuhr hilft, aber der Sprechtest ist oft genauso zuverlässig und braucht kein Gerät."
      ],
      varianten: "Leichter: Gehen und Laufen abwechseln (siehe Gehen-Laufen-Wechsel). Schwerer: länger laufen, hügelige Strecke oder als langer langsamer Lauf am Wochenende.",
      sicherheit: "Bei Herz-Kreislauf-Erkrankungen, Bluthochdruck oder nach längerer Pause vorher ärztlich abklären lassen. Bei Brustschmerz, Schwindel oder ungewöhnlicher Atemnot sofort abbrechen."
    }
  },
  {
    id: "lauf_regeneration",
    name: "Regenerationslauf",
    auch: ["Recovery Run", "Erholungslauf", "Auslaufen"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    hinweis: "Sehr langsam, kürzer als dein normaler Lauf.",
    info: {
      kurz: "Kurzer, sehr ruhiger Lauf am Tag nach einer harten Einheit oder einem Spiel. Er bringt Bewegung in den Körper, ohne neue Ermüdung zu erzeugen.",
      ausfuehrung: [
        "Lauf ohne großes Aufwärmen ganz langsam los, die ersten Minuten dürfen sich steif anfühlen.",
        "Wähle ein Tempo, bei dem du ganz entspannt durch die Nase atmen oder dich mühelos unterhalten kannst. Das entspricht grob 55 bis 65 Prozent der maximalen Herzfrequenz, gefühlt etwa 2 bis 3 von 10.",
        "Lauf auf weichem, flachem Untergrund wie Waldweg oder Rasen, wenn möglich.",
        "Halte die Dauer kurz, meist 20 bis 30 Minuten reichen völlig.",
        "Achte auf deinen Körper: Fühlt sich etwas zwickend oder schmerzhaft an, wechsle ins Gehen.",
        "Geh zum Schluss einige Minuten und hänge bei Bedarf lockere Mobilitätsübungen an."
      ],
      atmung: "Ruhig und tief atmen, am besten so langsam, dass Nasenatmung möglich wäre.",
      fehler: [
        "Zu schnell: Ein Regenerationslauf ist langsamer als dein lockerer Dauerlauf. Wenn du denkst, es ist zu langsam, passt es meistens.",
        "Zu lang: Wer daraus eine volle Trainingseinheit macht, verliert den Erholungseffekt. Lieber kürzer.",
        "Gruppendruck: Mit schnelleren Partnern wird das Tempo oft zu hoch, lieber allein oder mit jemandem auf gleichem Niveau laufen.",
        "Trotz Schmerzen laufen: Muskelkater ist in Ordnung, stechende Gelenkschmerzen nicht."
      ],
      vorteile: [
        "Hält den Körper in Bewegung und kann das Gefühl schwerer Beine nach harten Tagen lindern.",
        "Sammelt zusätzliche Ausdauerminuten mit sehr geringer Belastung.",
        "Trainiert das Gefühl für ruhiges Tempo und Körpersignale.",
        "Passt gut in den Tag nach einem Fußballspiel oder einer Intervalleinheit."
      ],
      tipps: [
        "Lass die Uhr ruhig zu Hause und lauf nur nach Gefühl.",
        "Wenn du dich sehr müde fühlst, ist ein Spaziergang oder lockeres Radfahren die bessere Wahl.",
        "Barfuß oder in leichten Schuhen auf Rasen ist für kurze Abschnitte möglich, wenn du daran gewöhnt bist."
      ],
      varianten: "Leichter: zügiges Gehen oder lockeres Radfahren. Schwerer: nicht vorgesehen, dafür gibt es den lockeren Dauerlauf.",
      sicherheit: "Bei Verletzungen oder Schmerzen, die beim Laufen stärker werden, stattdessen gelenkschonend radfahren oder pausieren und abklären lassen."
    }
  },
  {
    id: "lauf_lang_langsam",
    name: "Langer langsamer Lauf",
    auch: ["Long Slow Distance", "LSD", "Long Run", "Langer Lauf"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1, huefte: 1 },
    stufe: 2,
    sport: ["laufen"],
    hinweis: "Die längste Einheit der Woche, bewusst langsam.",
    info: {
      kurz: "Der lange Lauf ist die längste ruhige Einheit der Woche, meist zwischen 60 und 120 Minuten. Er baut die Ausdauer, die Fettverbrennung und die Belastbarkeit des Bewegungsapparates für lange Strecken auf.",
      ausfuehrung: [
        "Plane die Strecke vorher, möglichst mit Möglichkeiten zum Trinken oder einer Runde, die an deinem Ausgangspunkt vorbeiführt.",
        "Starte die ersten 10 Minuten noch langsamer als dein normales lockeres Tempo.",
        "Laufe danach im Sprechtempo: Du kannst dich in ganzen Sätzen unterhalten, grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 4 von 10.",
        "Trink bei Läufen über etwa 60 Minuten regelmäßig kleine Schlucke und nimm bei sehr langen Läufen etwas Kohlenhydrate mit.",
        "Achte in der zweiten Hälfte auf deine Haltung: aufrecht bleiben, Schritte kurz und leicht, Schultern locker.",
        "Das Tempo darf am Ende nicht einbrechen. Wenn doch, war der Anfang zu schnell.",
        "Geh nach dem Lauf 5 Minuten aus, trink und iss in den nächsten Stunden ausreichend."
      ],
      atmung: "Gleichmäßig und entspannt atmen. Sobald du nur noch kurze Wortfetzen sprechen kannst, wirst du langsamer.",
      fehler: [
        "Zu schnell beginnen: Am Anfang fühlt sich alles leicht an. Die ersten Kilometer bewusst bremsen.",
        "Zu große Sprünge in der Dauer: Den langen Lauf um höchstens 10 bis 15 Minuten pro Woche verlängern.",
        "Nichts trinken oder essen: Bei langen Läufen lässt die Leistung sonst stark nach.",
        "Den langen Lauf am Tag nach einem harten Training: Lieber einen ruhigen Tag dazwischen legen."
      ],
      vorteile: [
        "Verbessert die aerobe Ausdauer und die Fähigkeit, Fett als Energiequelle zu nutzen.",
        "Stärkt Sehnen, Bänder und Knochen für lange Belastungen.",
        "Trainiert mentale Ausdauer und das Gefühl für gleichmäßiges Tempo.",
        "Bereitet gezielt auf Läufe über 10 Kilometer, Halbmarathon oder Marathon vor."
      ],
      tipps: [
        "Bewährte Faustregel: Der lange Lauf macht etwa 20 bis 30 Prozent deines Wochenumfangs aus.",
        "Wechsle zwischen flachen und welligen Strecken, um die Belastung zu variieren.",
        "Teste neue Schuhe, Getränke und Gels zuerst im langen Training, nie erst im Wettkampf.",
        "Für Einsteiger zählt am Anfang auch ein Lauf von 40 bis 45 Minuten als langer Lauf."
      ],
      varianten: "Leichter: kürzer, mit Gehpausen oder als Wanderung. Schwerer: länger oder mit hügeliger Strecke, Fortgeschrittene laufen das letzte Viertel etwas zügiger.",
      sicherheit: "Bei Hitze ausreichend trinken und früh oder spät am Tag laufen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "lauf_gehen_wechsel",
    name: "Gehen-Laufen-Wechsel",
    auch: ["Run-Walk", "Walk-Run Intervals", "Galloway-Methode", "Couch to 5K"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen"],
    schwerer: "lauf_locker",
    hinweis: "Zum Beispiel 1 Minute laufen, 2 Minuten gehen, im Wechsel.",
    info: {
      kurz: "Planmäßiger Wechsel aus kurzen Laufabschnitten und Gehpausen. Der klassische Einstieg ins Laufen und eine gute Möglichkeit, nach Pausen oder Verletzungen wieder anzufangen.",
      ausfuehrung: [
        "Geh 5 Minuten zügig zum Aufwärmen.",
        "Lauf dann ganz locker für die geplante Zeit, zum Beispiel 1 Minute, in einem Tempo, bei dem du dich gut unterhalten kannst.",
        "Wechsle danach ins zügige Gehen, zum Beispiel 2 Minuten, bis sich der Atem beruhigt hat.",
        "Wiederhole den Wechsel 6 bis 10 Mal, insgesamt etwa 20 bis 30 Minuten.",
        "Steigere von Woche zu Woche die Laufabschnitte und verkürze die Gehpausen, etwa 2 zu 1, dann 3 zu 1, dann 5 zu 1.",
        "Geh zum Schluss 5 Minuten locker aus."
      ],
      atmung: "In den Laufabschnitten so ruhig atmen, dass du noch Sätze sprechen könntest. In den Gehpausen tief durchatmen und den Puls sinken lassen.",
      fehler: [
        "Laufabschnitte zu schnell: Die Laufminuten sind locker, nicht schnell. Die Pause soll nicht nötig sein, um sich zu erholen.",
        "Zu schnell steigern: Eher eine Woche länger auf einer Stufe bleiben als zu früh durchlaufen wollen.",
        "Gehpausen als Bummeln: Zügig weitergehen hält die Belastung gleichmäßig.",
        "Ungeeignete Schuhe: Laufschuhe mit guter Dämpfung erleichtern den Einstieg."
      ],
      vorteile: [
        "Ermöglicht auch Untrainierten eine längere Ausdauereinheit ohne Überforderung.",
        "Gewöhnt Gelenke, Sehnen und Muskeln schonend an die Laufbelastung.",
        "Senkt das Verletzungsrisiko im Vergleich zum zu frühen Dauerlauf.",
        "Wird auch von erfahrenen Läufern auf langen Strecken genutzt, um länger frisch zu bleiben."
      ],
      tipps: [
        "Ein Intervall-Timer oder eine Lauf-App gibt dir die Wechsel per Ton vor.",
        "Ziel für Einsteiger: nach etwa 8 bis 10 Wochen 30 Minuten am Stück locker laufen.",
        "Zwei bis drei Einheiten pro Woche mit einem Ruhetag dazwischen sind ein guter Rhythmus."
      ],
      varianten: "Leichter: kürzere Laufabschnitte (30 Sekunden) und längere Gehpausen. Schwerer: längere Laufabschnitte, bis du durchgehend locker läufst.",
      sicherheit: "Bei starkem Übergewicht, Knie- oder Hüftbeschwerden zuerst mit zügigem Gehen oder Radfahren die Grundlage aufbauen. Bei Herz-Kreislauf-Erkrankungen ärztlich abklären lassen."
    }
  },
  {
    id: "laufband_zone2",
    name: "Zone-2-Einheit auf dem Laufband",
    auch: ["Zone 2 Treadmill", "Treadmill Zone 2", "Pulsgesteuertes Laufband"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger"],
    geraete: [["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball", "golf"],
    golf: 1,
    hinweis: "Puls im unteren Bereich halten, Tempo oder Steigung danach anpassen.",
    info: {
      kurz: "Pulsgesteuerte Grundlageneinheit auf dem Laufband: Du regelst Tempo und Steigung so, dass dein Puls in Zone 2 bleibt. Je nach Fitness ist das lockeres Joggen oder zügiges Gehen bergauf.",
      ausfuehrung: [
        "Leg einen Brustgurt oder eine Pulsuhr an und schätze deine maximale Herzfrequenz, am besten aus einem echten Belastungstest. Die Formel 220 minus Lebensalter ist nur ein grober Anhalt.",
        "Geh 5 Minuten bei geringer Geschwindigkeit warm.",
        "Erhöhe Tempo oder Steigung, bis dein Puls bei grob 60 bis 70 Prozent der maximalen Herzfrequenz liegt. Gefühlt ist das 3 bis 4 von 10, du kannst noch ganze Sätze sprechen.",
        "Bleib in diesem Bereich. Steigt der Puls im Lauf der Einheit an, senke die Geschwindigkeit oder die Steigung ein wenig.",
        "Wer beim Joggen sofort über Zone 2 kommt, geht stattdessen zügig mit 4 bis 8 Prozent Steigung.",
        "Lass die Einheit mit 3 bis 5 Minuten langsamem Gehen ausklingen, bevor du vom Band steigst."
      ],
      atmung: "Ruhig und gleichmäßig. Wenn du nur noch durch den Mund schnaufst, bist du schon über Zone 2.",
      fehler: [
        "Am Haltegriff festhalten: Das verfälscht die Belastung und die Haltung, Arme frei mitschwingen lassen.",
        "Starr nach Tempo statt nach Puls: An warmen Tagen oder nach schlechtem Schlaf darf das Tempo niedriger sein.",
        "Zu nah am vorderen Rand laufen: Mittig auf dem Band bleiben, damit du nicht an die Abdeckung stößt.",
        "Ohne Not-Aus-Clip trainieren: Die Sicherheitsleine immer an der Kleidung befestigen."
      ],
      vorteile: [
        "Sehr genau steuerbar und unabhängig vom Wetter.",
        "Verbessert die aerobe Grundlage und die Fähigkeit der Muskeln, Fett zu verwerten.",
        "Gute Erholungseinheit zwischen Krafttagen, weil sie kaum ermüdet.",
        "Durch die Wahl zwischen Gehen bergauf und Joggen auch für Einsteiger und Menschen mit Gelenkbeschwerden geeignet."
      ],
      tipps: [
        "Zone 2 fühlt sich anfangs oft zu leicht an. Genau das ist gewollt, der Effekt kommt über die Dauer und die Regelmäßigkeit.",
        "30 bis 60 Minuten, zwei bis drei Mal pro Woche, sind ein bewährter Umfang.",
        "Ein Ventilator oder ein kühler Raum hilft, weil Hitze den Puls unabhängig von der Belastung steigen lässt."
      ],
      varianten: "Leichter: flach gehen. Schwerer: länger oder höhere Geschwindigkeit bei gleichem Puls, was mit der Zeit von allein möglich wird.",
      sicherheit: "Bei Medikamenten, die den Puls senken (zum Beispiel Betablocker), stimmen die Pulsbereiche nicht. Dann nach Sprechtest und Gefühl steuern und ärztlich abklären lassen."
    }
  },
  {
    id: "gehen_zuegig",
    name: "Zügiges Gehen",
    auch: ["Brisk Walking", "Power Walking", "Walking"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["waden", "gesaess", "quadrizeps", "schienbein"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 210,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    schwerer: "lauf_gehen_wechsel",
    hinweis: "So zügig, dass du etwas schneller atmest, aber noch gut sprechen kannst.",
    info: {
      kurz: "Gehen in deutlich erhöhtem Tempo, sodass Atmung und Puls spürbar steigen. Die gelenkschonendste Form des Ausdauertrainings und ideal für Einsteiger, Regenerationstage und Golfer.",
      ausfuehrung: [
        "Geh die ersten 3 bis 5 Minuten in normalem Tempo los.",
        "Steigere das Tempo, bis du etwas schneller atmest und leicht warm wirst, aber noch in ganzen Sätzen sprechen kannst. Gefühlt etwa 3 bis 4 von 10, grob 55 bis 70 Prozent der maximalen Herzfrequenz.",
        "Richte dich auf, Blick nach vorn, Schultern locker und tief.",
        "Winkle die Arme etwa im rechten Winkel an und lass sie aktiv vor und zurück schwingen, das treibt das Tempo an.",
        "Setz die Ferse auf, roll über den ganzen Fuß ab und drück dich über die Zehen kräftig ab.",
        "Mach lieber schnellere als längere Schritte, damit du nicht weit vor dem Körper aufsetzt.",
        "Werde zum Schluss 3 bis 5 Minuten langsamer."
      ],
      atmung: "Natürlich und rhythmisch atmen. Du solltest merken, dass du schneller atmest, aber nicht außer Atem sein.",
      fehler: [
        "Zu gemütlich: Ein Spaziergang hebt den Puls kaum. Das Tempo soll spürbar fordernd, aber noch gesprächstauglich sein.",
        "Nach vorn gebeugt mit Blick aufs Handy: Aufrecht gehen, das Handy in die Tasche.",
        "Zu lange Schritte: Lieber die Schrittfrequenz erhöhen.",
        "Arme hängen lassen: Aktiver Armschwung macht das Gehen schneller und runder."
      ],
      vorteile: [
        "Verbessert die Herz-Kreislauf-Fitness bei sehr geringer Gelenkbelastung.",
        "Lässt sich fast immer und überall in den Alltag einbauen.",
        "Unterstützt die Erholung nach Kraft- oder Spieltagen.",
        "Für Golfer direkt nützlich, weil eine Runde vor allem aus Gehen besteht."
      ],
      tipps: [
        "Wellige Strecken oder Treppen einbauen, wenn der Puls auf flacher Strecke zu niedrig bleibt.",
        "Auf dem Laufband 1 bis 3 Prozent Steigung wählen.",
        "Täglich 30 Minuten zügiges Gehen ist für viele ein einfacher und wirksamer Grundstein."
      ],
      varianten: "Leichter: kürzere Dauer, flache Strecke. Schwerer: Steigung, Nordic Walking mit Stöcken, Wandern oder Gehen-Laufen-Wechsel.",
      sicherheit: "Auch bei vielen Beschwerden geeignet. Bei Herz-Kreislauf-Erkrankungen trotzdem die Belastung ärztlich abstimmen lassen."
    }
  },
  {
    id: "gehen_steigung_laufband",
    name: "Steigungsgehen auf dem Laufband",
    auch: ["Incline Treadmill Walk", "Incline Walking", "12-3-30"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["gesaess", "waden", "beinbeuger", "quadrizeps"],
    geraete: [["laufband"]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    hinweis: "Nicht am Geländer festhalten, Steigung lieber etwas niedriger wählen.",
    info: {
      kurz: "Zügiges Gehen bergauf auf dem Laufband. Bringt den Puls in einen guten Ausdauerbereich, ohne die Stoßbelastung des Laufens, und fordert Gesäß und Waden stärker als flaches Gehen.",
      ausfuehrung: [
        "Geh 3 bis 5 Minuten flach bei 4 bis 5 km/h warm und befestige die Sicherheitsleine an der Kleidung.",
        "Erhöhe die Steigung schrittweise auf 6 bis 12 Prozent, je nach Fitness.",
        "Wähle ein Tempo, bei dem du schneller atmest, aber noch in Sätzen sprechen kannst, grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 5 von 10.",
        "Geh aufrecht mit leichter Vorlage aus den Sprunggelenken, nicht aus der Hüfte abknicken.",
        "Lass die Arme frei mitschwingen und setz den ganzen Fuß auf, die Ferse bleibt nicht in der Luft.",
        "Reduziere zum Schluss Steigung und Tempo und geh 3 bis 5 Minuten flach aus."
      ],
      atmung: "Gleichmäßig und tief atmen. Wenn du die Luft anhältst oder schnaufst, ist die Steigung zu hoch.",
      fehler: [
        "Am Geländer festhalten oder sich darauf stützen: Das nimmt einen großen Teil der Arbeit weg. Steigung lieber reduzieren und frei gehen.",
        "Zu steil zu früh: Bei Waden- oder Achillessehnenbeschwerden mit 3 bis 5 Prozent beginnen.",
        "Weit nach vorn gebeugt: Brust aufrecht, Blick nach vorn.",
        "Nur auf dem Vorfuß gehen: Ganzen Fuß aufsetzen, sonst werden die Waden schnell überlastet."
      ],
      vorteile: [
        "Hoher Puls bei geringer Stoßbelastung, schonender als Laufen für Knie und Hüfte.",
        "Kräftigt Gesäß, Waden und Beinbeuger zusätzlich zur Ausdauer.",
        "Sehr gut steuerbar über Tempo und Steigung.",
        "Bereitet auf hügelige Golfplätze und Wanderungen vor."
      ],
      tipps: [
        "Bekannt ist das Protokoll 12-3-30: 12 Prozent Steigung, 3 Meilen pro Stunde (etwa 4,8 km/h), 30 Minuten. Für Einsteiger ist das oft zu viel, dann einfach mit weniger Steigung beginnen.",
        "Wenn das Laufband nicht hoch genug geht, das Tempo leicht erhöhen.",
        "Gut als Ausdauerabschluss nach dem Krafttraining, weil es die Beine wenig ermüdet."
      ],
      varianten: "Leichter: 3 bis 5 Prozent Steigung, langsamer. Schwerer: höhere Steigung, längere Dauer oder Steigungsintervalle.",
      sicherheit: "Bei Achillessehnen- oder Wadenbeschwerden die Steigung niedrig halten. Bei Rückenbeschwerden aufrecht bleiben und nicht festhalten."
    }
  },
  {
    id: "nordic_walking",
    name: "Nordic Walking",
    auch: ["Nordic Walking", "Walking mit Stöcken"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["latissimus", "trizeps", "schulter_hinten", "gesaess", "waden"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: {},
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    hinweis: "Du brauchst Nordic-Walking-Stöcke. Stöcke aktiv nach hinten schieben.",
    info: {
      kurz: "Zügiges Gehen mit speziellen Stöcken, bei dem Arme und Oberkörper aktiv mitarbeiten. Dadurch steigt die Belastung für Herz und Kreislauf gegenüber normalem Gehen, ohne die Gelenke stärker zu belasten.",
      ausfuehrung: [
        "Stell die Stocklänge ein: Wenn du den Griff hältst und der Stock senkrecht neben dir steht, ist der Ellbogen etwa rechtwinklig gebeugt.",
        "Geh zuerst ein paar Minuten und lass die Stöcke einfach hinter dir herschleifen, um den diagonalen Rhythmus zu finden: rechter Arm vor, linkes Bein vor.",
        "Setz den Stock schräg nach hinten zeigend etwa auf Höhe der Ferse des vorderen Fußes auf.",
        "Schieb dich mit dem Stock nach hinten ab, bis die Hand hinter der Hüfte ist, und öffne dort die Hand leicht. Die Schlaufe hält den Stock.",
        "Schließ die Hand beim Vorschwingen wieder um den Griff.",
        "Geh in einem Tempo, bei dem du schneller atmest, aber noch sprechen kannst, grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 5 von 10.",
        "Werde zum Ende langsamer und dehne bei Bedarf Waden, Brust und Schultern."
      ],
      atmung: "Rhythmisch mit den Schritten atmen, zum Beispiel drei Schritte ein, drei Schritte aus.",
      fehler: [
        "Stöcke nur mittragen: Ohne aktiven Abdruck nach hinten fehlt der Effekt für Oberkörper und Puls.",
        "Passgang, also Arm und Bein derselben Seite gleichzeitig: Stöcke kurz schleifen lassen, bis der diagonale Rhythmus von selbst kommt.",
        "Stock vor dem Körper aufsetzen: Das bremst. Der Stock zeigt immer schräg nach hinten.",
        "Hand immer fest geschlossen: Am Ende des Abdrucks öffnen, das entspannt Unterarm und Schulter.",
        "Zu kurze Stöcke: Länge korrekt einstellen."
      ],
      vorteile: [
        "Bezieht Arme, Schultern und den breiten Rückenmuskel mit ein.",
        "Höhere Belastung für Herz und Kreislauf als normales Gehen bei gleichem Tempo.",
        "Sehr gelenkschonend und gut für Einsteiger und Ältere geeignet.",
        "Fördert eine aufrechte Haltung und die Gegenbewegung von Schultergürtel und Becken."
      ],
      tipps: [
        "Ein Einführungskurs lohnt sich, weil die richtige Technik den Nutzen deutlich erhöht.",
        "Auf Asphalt Gummipuffer auf die Stockspitzen setzen, auf Waldwegen ohne.",
        "Hügelige Strecken steigern die Belastung ohne mehr Tempo."
      ],
      varianten: "Leichter: flache Strecke, kürzere Dauer. Schwerer: hügelige Strecke, schnelleres Tempo oder längere Dauer.",
      sicherheit: "Bei Schulterbeschwerden den Stockeinsatz sanft halten. Bei Herz-Kreislauf-Erkrankungen die Intensität ärztlich abstimmen lassen."
    }
  },
  {
    id: "wandern",
    name: "Wandern",
    auch: ["Hiking", "Bergwandern"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "beinbeuger"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    hinweis: "Bergauf langsam, bergab kontrolliert mit kurzen Schritten.",
    info: {
      kurz: "Längeres Gehen in der Natur, oft mit Steigungen und unebenem Untergrund. Verbindet ruhige Ausdauer mit Kraft für Beine und Gesäß und schult Gleichgewicht und Trittsicherheit.",
      ausfuehrung: [
        "Wähle eine Tour, deren Länge und Höhenmeter zu deiner Fitness passen, und plane genug Zeit und Wasser ein.",
        "Starte die erste halbe Stunde in gemütlichem Tempo, damit Muskeln und Gelenke warm werden.",
        "Bergauf kürzere Schritte machen und das Tempo so wählen, dass du dich noch unterhalten kannst, grob 60 bis 75 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 5 von 10.",
        "Setz bergauf den ganzen Fuß auf und drück dich aus dem Gesäß nach oben.",
        "Bergab die Knie leicht gebeugt lassen, kurze Schritte machen und nicht in die Gelenke fallen. Wanderstöcke entlasten hier die Knie.",
        "Mach regelmäßig kurze Pausen zum Trinken und Essen.",
        "Lass die Tour mit flacherem Gelände ausklingen und dehne danach Waden und Oberschenkel."
      ],
      atmung: "Bergauf rhythmisch zu den Schritten atmen. Wenn du schnaufst, das Tempo senken, statt stehen zu bleiben.",
      fehler: [
        "Zu schnell bergauf: Lieber gleichmäßig langsam gehen als ständig anhalten.",
        "Bergab mit gestreckten Knien: Das belastet die Kniegelenke stark, Knie leicht beugen und Stöcke nutzen.",
        "Falsches Schuhwerk: Schuhe mit gutem Profil, bei steinigem Gelände knöchelhohe Wanderschuhe.",
        "Zu wenig Wasser und Proviant: Bei längeren Touren lässt die Leistung sonst deutlich nach."
      ],
      vorteile: [
        "Trainiert die Ausdauer über lange Zeit bei moderater Belastung.",
        "Kräftigt Beine und Gesäß, vor allem durch Steigungen und Abstiege.",
        "Verbessert Gleichgewicht und Trittsicherheit auf unebenem Boden.",
        "Bereitet gut auf hügelige Golfplätze und lange Tage auf den Beinen vor."
      ],
      tipps: [
        "Grobe Planungshilfe: Viele Wanderführer rechnen mit etwa 4 km pro Stunde in der Ebene und zusätzlicher Zeit für Höhenmeter.",
        "Mit Stöcken bergab gehen entlastet die Knie spürbar.",
        "Ein leichter Rucksack mit Wasser, Regenjacke und Snack gehört immer dazu."
      ],
      varianten: "Leichter: flache Spazierwege, kürzere Strecken. Schwerer: mehr Höhenmeter, längere Touren oder mit schwererem Rucksack (Rucking).",
      sicherheit: "Bei Kniebeschwerden steile Abstiege meiden oder mit Stöcken gehen. In den Bergen Wetter und eigene Fähigkeiten realistisch einschätzen."
    }
  },
  {
    id: "rucking",
    name: "Gehen mit Gewichtsrucksack",
    auch: ["Rucking", "Ruck March", "Weighted Walking"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["gesaess", "quadrizeps", "waden", "oberer_ruecken", "trapez", "bauch"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { ruecken: 1, knie: 1, sprunggelenk: 1 },
    stufe: 2,
    hinweis: "Leicht beginnen, der Rucksack sitzt eng und hoch am Rücken.",
    info: {
      kurz: "Zügiges Gehen mit einem beschwerten Rucksack. Hebt die Ausdauerbelastung gegenüber normalem Gehen deutlich an, ohne laufen zu müssen, und fordert zusätzlich Rumpf, oberen Rücken und Beine.",
      ausfuehrung: [
        "Pack den Rucksack so, dass das Gewicht hoch und nah am Rücken liegt, zum Beispiel eine in ein Handtuch gewickelte Hantelscheibe oder Wasserflaschen.",
        "Zieh die Schultergurte und, falls vorhanden, den Hüftgurt fest, damit nichts schaukelt.",
        "Geh 5 Minuten in normalem Tempo los, um dich an das Gewicht zu gewöhnen.",
        "Steigere auf ein zügiges Tempo, bei dem du schneller atmest, aber noch in Sätzen sprechen kannst, grob 60 bis 75 Prozent der maximalen Herzfrequenz, gefühlt 4 bis 5 von 10.",
        "Bleib aufrecht, Brust offen, Bauch leicht angespannt, nicht nach vorn ins Gewicht lehnen.",
        "Geh die geplante Zeit und nimm den Rucksack danach in Ruhe ab, ohne den Rücken rund zu machen."
      ],
      atmung: "Ruhig und rhythmisch atmen. Wenn du das Gefühl hast, die Luft anzuhalten oder zu pressen, ist das Gewicht zu hoch.",
      fehler: [
        "Zu viel Gewicht am Anfang: Mit etwa 5 kg beginnen und das Gewicht nur langsam erhöhen.",
        "Gewicht tief und lose im Rucksack: Es zieht dann nach hinten unten, also hoch und fest packen.",
        "Stark nach vorn gebeugt gehen: Aufrecht bleiben, eher das Gewicht reduzieren.",
        "Mit Gewicht joggen: Das erhöht die Stoßbelastung für Gelenke und Rücken stark, Rucking ist Gehen."
      ],
      vorteile: [
        "Höhere Belastung für Herz und Kreislauf als Gehen, ohne die Stöße des Laufens.",
        "Kräftigt Beine, Gesäß, Rumpf und oberen Rücken im Alltag gut übertragbar.",
        "Kann helfen, die Belastbarkeit für Wandern, Reisen und Tragen im Alltag zu verbessern.",
        "Einfach umzusetzen, du brauchst nur einen stabilen Rucksack und Gewicht."
      ],
      tipps: [
        "Erst die Dauer steigern, dann das Gewicht.",
        "Viele Trainer empfehlen, für den Anfang nicht mehr als etwa 10 Prozent des Körpergewichts zu tragen.",
        "Gute Schuhe mit fester Sohle machen bei Gewicht einen großen Unterschied."
      ],
      varianten: "Leichter: weniger Gewicht oder flache Strecke. Schwerer: hügelige Strecke, längere Dauer, dann langsam mehr Gewicht.",
      sicherheit: "Bei Rücken-, Knie- oder Fußbeschwerden vorsichtig und leicht beginnen oder auf normales zügiges Gehen ausweichen."
    }
  },
  {
    id: "golfrunde_zu_fuss",
    name: "Golfrunde zu Fuß",
    auch: ["Walking Golf", "Golf Round on Foot", "Golfrunde ohne Cart"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["waden", "gesaess", "quadrizeps", "oberer_ruecken"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["golf"],
    golf: 1,
    hinweis: "Ohne Cart gehen. Trolley schont den Rücken mehr als Tragen.",
    info: {
      kurz: "Eine Runde Golf, bei der du den Platz komplett zu Fuß gehst, statt mit dem Cart zu fahren. Eine 18-Loch-Runde dauert meist um die vier Stunden und ist damit eine lange, ruhige Ausdauereinheit.",
      ausfuehrung: [
        "Wärm dich vor der Runde mit lockerem Gehen und einigen Mobilitätsübungen für Hüfte und Brustwirbelsäule auf.",
        "Entscheide dich für die Art des Transports: Ziehen oder Schieben eines Trolleys ist für den Rücken am schonendsten, Tragen des Bags mit Doppelgurt erhöht die Belastung für Beine und Kreislauf.",
        "Wenn du trägst, nutze immer beide Gurte, damit das Gewicht gleichmäßig auf beiden Schultern liegt, und packe nur das Nötige ein.",
        "Geh zwischen den Schlägen in zügigem, gleichmäßigem Tempo, bergauf mit kurzen Schritten. Gefühlt liegst du meist bei 2 bis 4 von 10, du kannst dich gut unterhalten.",
        "Beim Anheben des Bags aus den Beinen in die Hocke gehen, nicht aus dem runden Rücken.",
        "Trink regelmäßig und iss etwas auf der Runde, vor allem auf den zweiten neun Löchern.",
        "Geh nach der Runde noch kurz locker und dehne Hüfte, Waden und Rücken."
      ],
      atmung: "Natürlich weiteratmen. Vor dem Schlag hilft eine ruhige, lange Ausatmung, um den Puls nach steilen Anstiegen zu beruhigen.",
      fehler: [
        "Bag einseitig mit einem Gurt tragen: Das belastet Schulter und Rücken einseitig, immer Doppelgurt nutzen oder einen Trolley nehmen.",
        "Zu volles Bag: Unnötige Bälle, Flaschen und Zubehör erhöhen das Gewicht ohne Nutzen.",
        "Bag aus dem runden Rücken hochreißen: Kurz in die Knie gehen und aus den Beinen heben.",
        "Zu wenig trinken: Über vier Stunden lässt die Konzentration ohne Wasser und Snacks spürbar nach."
      ],
      vorteile: [
        "Lange Ausdauerbelastung im lockeren Bereich, verteilt über mehrere Stunden.",
        "Mehr Bewegung als mit dem Cart und eine gute Ergänzung zum Training.",
        "Hält die Beine aktiv, was das Gefühl von Steifheit zwischen den Schlägen verringern kann.",
        "Mit Trolley auch bei Rückenbeschwerden oft gut machbar."
      ],
      tipps: [
        "Wer Ausdauer aufbaut, merkt es oft auf den letzten Löchern: Der Schwung bleibt länger gleichmäßig.",
        "Ein elektrischer Trolley ist eine gute Wahl, wenn du gehen möchtest, aber der Rücken das Ziehen oder Tragen nicht mag.",
        "Ein hügeliger Platz zählt deutlich mehr als ein flacher, plane danach den nächsten Trainingstag ruhiger."
      ],
      varianten: "Leichter: 9 Löcher oder Trolley statt Tragen. Schwerer: 18 Löcher mit getragenem Bag auf hügeligem Platz.",
      sicherheit: "Bei Rücken- oder Schulterbeschwerden einen Trolley statt Tragen wählen. Bei Hitze ausreichend trinken und Kopfbedeckung tragen."
    }
  },
  {
    id: "treppensteigen",
    name: "Treppensteigen",
    auch: ["Stair Climbing", "Treppe gehen", "Stair Walking"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Hoch zügig gehen, runter langsam. Geländer nur zur Sicherheit.",
    info: {
      kurz: "Gleichmäßiges Hoch- und Runtergehen einer längeren Treppe, etwa im Treppenhaus, Stadion oder an einem Hang. Bringt den Puls schnell nach oben und kräftigt Oberschenkel und Gesäß.",
      ausfuehrung: [
        "Such dir eine Treppe mit mindestens zwei Stockwerken oder einer langen Außentreppe und geh 5 Minuten flach warm.",
        "Geh die Treppe aufrecht hoch und setz den ganzen Fuß auf die Stufe, nicht nur den Vorfuß.",
        "Drück dich über die Ferse des vorderen Beins nach oben, sodass du Gesäß und Oberschenkel arbeiten spürst.",
        "Wähle ein Tempo, bei dem du schneller atmest, aber noch kurze Sätze sprechen kannst, gefühlt 4 bis 5 von 10, grob 65 bis 75 Prozent der maximalen Herzfrequenz.",
        "Geh die Treppe langsam und kontrolliert wieder hinunter, das ist deine aktive Erholung.",
        "Wiederhole das für die geplante Zeit und geh zum Schluss flach aus."
      ],
      atmung: "Bergauf rhythmisch und etwas tiefer atmen, bergab den Atem beruhigen lassen.",
      fehler: [
        "Nur auf den Zehenspitzen hochgehen: Das überlastet die Waden, den ganzen Fuß aufsetzen.",
        "Am Geländer hochziehen: Nur zur Sicherheit leicht berühren.",
        "Zu schnell runter: Abwärts kontrolliert gehen, das schont die Knie.",
        "Knie fallen nach innen: Knie zeigen in Richtung der Zehen."
      ],
      vorteile: [
        "Hebt den Puls schnell, auch bei niedrigem Tempo.",
        "Kräftigt Oberschenkel, Gesäß und Waden.",
        "Überall in Gebäuden möglich, auch bei schlechtem Wetter.",
        "Gut übertragbar auf den Alltag und auf Bergwanderungen."
      ],
      tipps: [
        "Jede zweite Stufe zu nehmen erhöht die Arbeit für Gesäß und Oberschenkel, nur wenn das Knie es gut verträgt.",
        "Wer das Runtergehen nicht mag, kann den Aufzug nach unten nehmen.",
        "Für noch höhere Intensität gibt es die Treppenläufe als Intervalle."
      ],
      varianten: "Leichter: kürzere Treppen, mehr Pausen. Schwerer: zwei Stufen auf einmal, längere Dauer oder Treppenläufe als Intervalle.",
      sicherheit: "Bei Kniebeschwerden vor allem das Hinuntergehen vorsichtig dosieren. Auf rutschige Stufen achten."
    }
  },
  {
    id: "step_ups_ausdauer",
    name: "Ausdauer-Step-ups auf der Box",
    auch: ["Cardio Step-Ups", "Step Aerobic", "Box Step-Ups for Cardio", "Bench Step"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden"],
    geraete: [["box"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Niedrige Box, gleichmäßiger Rhythmus, Führungsbein regelmäßig wechseln.",
    info: {
      kurz: "Rhythmisches Auf- und Absteigen auf eine niedrige Box über mehrere Minuten. Eine einfache Ausdauerform für zu Hause oder das Studio, wenn kein Cardiogerät frei ist.",
      ausfuehrung: [
        "Stell eine stabile, rutschfeste Box mit etwa 20 bis 30 cm Höhe vor dich.",
        "Steig mit dem rechten Fuß komplett auf die Box, zieh den linken nach und stell dich oben aufrecht hin.",
        "Steig mit dem rechten Fuß zuerst wieder herunter, dann mit dem linken.",
        "Finde einen gleichmäßigen Takt, etwa einen Schritt pro Sekunde, und lass die Arme natürlich mitschwingen.",
        "Wechsle etwa jede Minute das Führungsbein, damit beide Seiten gleich belastet werden.",
        "Bleib in einem Bereich, in dem du schneller atmest, aber noch sprechen kannst, gefühlt 3 bis 5 von 10, grob 60 bis 75 Prozent der maximalen Herzfrequenz.",
        "Werde zum Schluss langsamer und geh noch kurz auf der Stelle."
      ],
      atmung: "Ruhig und rhythmisch zum Schritttakt atmen, nicht die Luft anhalten.",
      fehler: [
        "Box zu hoch: Für Ausdauer zählt der Rhythmus, nicht die Höhe. Lieber niedriger und länger.",
        "Nur die Ferse oder den Vorfuß auf der Box: Den ganzen Fuß aufsetzen.",
        "Immer dasselbe Führungsbein: Regelmäßig wechseln.",
        "Herunterplumpsen lassen: Kontrolliert und leise absteigen."
      ],
      vorteile: [
        "Hebt den Puls mit wenig Platz und einfachem Gerät.",
        "Gelenkschonender als Hüpfen oder Laufen auf der Stelle.",
        "Kräftigt Oberschenkel und Gesäß nebenbei.",
        "Gut steuerbar über Takt und Boxhöhe."
      ],
      tipps: [
        "Mit Musik im passenden Takt fällt der gleichmäßige Rhythmus leichter.",
        "Eine Treppenstufe zu Hause funktioniert genauso.",
        "Wer mehr will, nimmt eine etwas höhere Box statt schneller zu werden."
      ],
      varianten: "Leichter: niedrigere Stufe, langsamer Takt. Schwerer: höhere Box (bis Kniehöhe), schnellerer Takt oder Intervalle aus zügigen und lockeren Minuten.",
      sicherheit: "Bei Knie- oder Gleichgewichtsproblemen eine niedrige Stufe nahe an einer Wand oder einem Geländer wählen."
    }
  },
  {
    id: "zirkel_koerpergewicht_locker",
    name: "Lockerer Körpergewichtszirkel",
    auch: ["Low Intensity Bodyweight Circuit", "Low Impact Cardio", "Cardio ohne Springen"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf", "ganzkoerper"],
    sekundaer: ["quadrizeps", "gesaess", "bauch", "schulter_vorn"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 220,
    gelenke: { knie: 1 },
    stufe: 1,
    hinweis: "Ohne Sprünge, ohne Pause durchgehen, Tempo gesprächstauglich.",
    info: {
      kurz: "Ein durchgehender Zirkel aus einfachen Körpergewichtsübungen ohne Sprünge, bei ruhigem Tempo. Ein Ausdauertraining für zu Hause, das wenig Platz braucht und Gelenke schont.",
      ausfuehrung: [
        "Wähle 5 bis 6 einfache Übungen, zum Beispiel Marschieren auf der Stelle mit hohen Knien, Kniebeuge zum Stuhl, Ausfallschritt nach hinten, Wandliegestütz, Schrittwechsel seitlich und Armkreisen.",
        "Mach jede Übung etwa 45 bis 60 Sekunden in ruhigem, gleichmäßigem Tempo.",
        "Geh ohne Pause zur nächsten Übung über, auf der Stelle gehend, wenn du Luft holen musst.",
        "Bleib in einem Bereich, in dem du schneller atmest, aber noch sprechen kannst, gefühlt 3 bis 5 von 10, grob 60 bis 70 Prozent der maximalen Herzfrequenz.",
        "Wiederhole den Zirkel, bis die geplante Zeit erreicht ist, meist 3 bis 5 Runden.",
        "Lass das Training mit 2 bis 3 Minuten Gehen auf der Stelle und leichtem Dehnen ausklingen."
      ],
      atmung: "Gleichmäßig weiteratmen, bei Kniebeugen beim Hochkommen ausatmen. Nicht pressen.",
      fehler: [
        "Zu schnell und hektisch: Das ist kein Intervalltraining, sauberes Tempo halten.",
        "Unsaubere Kniebeugen und Ausfallschritte: Lieber kleinere Bewegungen und gute Technik.",
        "Pausen im Sitzen: Zwischen den Übungen in Bewegung bleiben.",
        "Immer die gleichen Übungen: Nach einigen Wochen variieren, damit es abwechslungsreich bleibt."
      ],
      vorteile: [
        "Ausdauertraining ohne Gerät und ohne Stöße, auch in der Mietwohnung möglich.",
        "Verbindet Herz-Kreislauf-Training mit leichter Kräftigung des ganzen Körpers.",
        "Gut für Einsteiger, Ältere und Regenerationstage geeignet.",
        "Lässt sich leicht an Gelenkbeschwerden anpassen, indem man einzelne Übungen tauscht."
      ],
      tipps: [
        "Ein Timer mit festen Wechseln, zum Beispiel jede Minute, macht den Ablauf einfach.",
        "Musik mit etwa 120 bis 130 Schlägen pro Minute passt gut zum Tempo.",
        "Wenn der Puls zu niedrig bleibt, mehr Übungen mit Armen über Kopf einbauen."
      ],
      varianten: "Leichter: kürzere Abschnitte und mehr Marschieren. Schwerer: längere Dauer, tiefere Kniebeugen oder als Intervalle mit Sprüngen (Körpergewichts-HIIT).",
      sicherheit: "Bei Knie- oder Schulterbeschwerden die betreffenden Übungen weglassen oder durch Marschieren ersetzen. Bei Herz-Kreislauf-Erkrankungen ärztlich abklären lassen."
    }
  },

  // ---------- Ruhig: Rad und Rudern ----------
  {
    id: "rad_locker",
    name: "Lockeres Radfahren",
    auch: ["Easy Cycling", "Easy Ride", "Ergometer locker"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "beinbeuger"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "golf", "laufen"],
    golf: 1,
    hinweis: "Leichter Gang, runde Tritte, Sprechtempo.",
    info: {
      kurz: "Ruhiges Radfahren auf dem Rad oder Ergometer bei leichtem Widerstand. Sehr gelenkschonend und deshalb ideal für Grundlagenausdauer, Regeneration und Tage mit Beschwerden in Knie oder Sprunggelenk.",
      ausfuehrung: [
        "Stell den Sattel so ein, dass das Knie unten im Pedalweg noch leicht gebeugt ist, etwa 25 bis 35 Grad.",
        "Fahr 5 Minuten mit sehr leichtem Widerstand ein.",
        "Wähle danach einen Widerstand, bei dem du gleichmäßig mit etwa 80 bis 95 Umdrehungen pro Minute treten kannst.",
        "Bleib im Sprechtempo: Du atmest etwas schneller, kannst aber ganze Sätze sprechen. Grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 4 von 10.",
        "Tritt rund: Nicht nur nach unten drücken, sondern den Fuß unten nach hinten durchziehen und oben nach vorn schieben.",
        "Halte den Oberkörper ruhig, Schultern locker, Ellbogen leicht gebeugt.",
        "Fahr die letzten 3 bis 5 Minuten mit sehr wenig Widerstand aus."
      ],
      atmung: "Ruhig und gleichmäßig atmen. Wenn das Sprechen schwerfällt, den Widerstand senken.",
      fehler: [
        "Sattel zu tief: Das belastet die Knie vorn. Sattelhöhe so einstellen, dass das Knie unten nur leicht gebeugt ist.",
        "Zu schwerer Gang mit wenigen Umdrehungen: Das ermüdet die Muskeln und belastet die Knie, lieber leichter und schneller treten.",
        "Becken wackelt auf dem Sattel hin und her: Der Sattel ist zu hoch.",
        "Zu intensiv: Ein lockerer Tag bleibt locker, damit du dich für die harten Einheiten erholst."
      ],
      vorteile: [
        "Sehr gelenkschonend, da kein Aufprall wie beim Laufen.",
        "Verbessert die aerobe Grundlage bei geringer muskulärer Ermüdung.",
        "Gut zur Erholung nach Kraft- oder Spieltagen.",
        "Auch bei vielen Knie-, Sprunggelenk- und Fußbeschwerden noch möglich."
      ],
      tipps: [
        "Am Ergometer helfen Watt- oder Pulsanzeige, die Intensität gleich zu halten.",
        "Draußen flache Strecken wählen oder an Steigungen konsequent leichter schalten.",
        "Gute Wahl nach dem Krafttraining der Beine, weil es die Durchblutung fördert, ohne viel zu ermüden."
      ],
      varianten: "Leichter: kürzer und mit sehr wenig Widerstand. Schwerer: länger (Grundlagenausfahrt) oder pulsgesteuert in Zone 2.",
      sicherheit: "Draußen immer Helm tragen. Bei Kniebeschwerden vorn die Sattelhöhe prüfen und niedrigen Widerstand wählen."
    }
  },
  {
    id: "rad_grundlage_draussen",
    name: "Grundlagenausfahrt mit dem Rad",
    auch: ["Endurance Ride", "Base Ride", "GA1-Ausfahrt", "Lange Radtour"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "beinbeuger"],
    geraete: [["fahrrad", "draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "golf", "laufen"],
    golf: 1,
    hinweis: "Gleichmäßig fahren, an Anstiegen früh leichter schalten.",
    info: {
      kurz: "Längere Ausfahrt mit dem Rad draußen in gleichmäßigem, ruhigem Tempo, meist 60 Minuten und länger. Baut große Mengen Ausdauer auf, ohne die Gelenke zu belasten.",
      ausfuehrung: [
        "Prüfe vorher Reifendruck, Bremsen und Licht, nimm Wasser, einen Snack und Flickzeug mit.",
        "Fahr die ersten 10 Minuten in leichtem Gang locker ein.",
        "Fahr dann gleichmäßig im Sprechtempo, grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 4 von 10.",
        "Halte die Trittfrequenz eher hoch, etwa 80 bis 95 Umdrehungen pro Minute, und schalte an Anstiegen früh in einen leichteren Gang.",
        "Bergauf nicht über die Zone hinausschießen, lieber langsam hochfahren.",
        "Trink alle 15 bis 20 Minuten ein paar Schlucke und iss bei Fahrten über 90 Minuten etwas.",
        "Roll die letzten 10 Minuten locker aus."
      ],
      atmung: "Gleichmäßig atmen, an Anstiegen nicht in hektisches Schnaufen geraten, dann leichter schalten.",
      fehler: [
        "Jeden Anstieg hochdrücken: Das macht aus der ruhigen Einheit ein Intervalltraining. Leichter schalten und ruhig bleiben.",
        "Zu dicker Gang: Niedrige Trittfrequenz ermüdet die Beine schneller und belastet die Knie.",
        "Nichts essen: Auf langen Fahrten kommt sonst der Leistungseinbruch.",
        "Falsch eingestelltes Rad: Sattelhöhe und Sitzposition prüfen lassen, wenn Knie, Nacken oder Hände schmerzen."
      ],
      vorteile: [
        "Ermöglicht lange Ausdauereinheiten mit sehr geringer Gelenkbelastung.",
        "Verbessert die aerobe Grundlage und die Fettverwertung.",
        "Gute Ergänzung für Läufer und Fußballer, die mehr Umfang ohne Stoßbelastung wollen.",
        "Lässt sich gut mit dem Weg zur Arbeit oder Ausflügen verbinden."
      ],
      tipps: [
        "Eine Pulsuhr oder ein Wattmesser hilft, an Anstiegen nicht zu überziehen.",
        "Flache bis wellige Runden eignen sich besser als steile Berge.",
        "Fahrten zu zweit nebeneinander, wo erlaubt, sind ein guter Sprechtest."
      ],
      varianten: "Leichter: kürzere Runde, flaches Gelände. Schwerer: länger fahren oder hügeligere Strecke bei gleichem Puls.",
      sicherheit: "Immer Helm tragen und Verkehrsregeln beachten. Bei Rücken- oder Nackenbeschwerden die Sitzposition aufrechter einstellen."
    }
  },
  {
    id: "ergometer_zone2",
    name: "Zone-2-Training auf dem Ergometer",
    auch: ["Zone 2 Bike", "Zone 2 Cycling", "Steady State Bike"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "golf", "laufen"],
    golf: 1,
    hinweis: "Puls oder Watt konstant halten, Sprechtest muss bestehen.",
    info: {
      kurz: "Pulsgesteuerte Einheit auf dem Ergometer oder Rollentrainer, bei der du die ganze Zeit in Zone 2 bleibst. Wegen der gleichmäßigen, gut messbaren Belastung die präziseste Form des Grundlagentrainings.",
      ausfuehrung: [
        "Leg einen Pulsgurt an und stell Sattel und Lenker passend ein.",
        "Fahr 5 bis 10 Minuten mit niedrigem Widerstand ein.",
        "Erhöhe den Widerstand, bis dein Puls bei grob 60 bis 70 Prozent der maximalen Herzfrequenz liegt. Gefühlt ist das 3 bis 4 von 10, du kannst noch ganze Sätze sprechen, aber merkst, dass du arbeitest.",
        "Halte die Wattzahl oder den Puls konstant und tritt gleichmäßig mit etwa 80 bis 95 Umdrehungen pro Minute.",
        "Wenn der Puls im Lauf der Zeit bei gleicher Wattzahl steigt, senk den Widerstand leicht.",
        "Fahr 5 Minuten locker aus."
      ],
      atmung: "Du solltest durch die Nase atmen oder in ganzen Sätzen sprechen können. Schnaufen bedeutet: zu hoch.",
      fehler: [
        "Zu hoch einsteigen: Viele fahren in Zone 3, weil sich Zone 2 zu leicht anfühlt. Die Belastung bleibt bewusst moderat.",
        "Zu kurze Einheiten: Zone 2 entfaltet die Wirkung über Dauer, 30 Minuten sind eine gute Untergrenze.",
        "Warmer Raum ohne Ventilator: Hitze treibt den Puls hoch, ein Ventilator hilft.",
        "Formel statt Test: 220 minus Alter kann stark danebenliegen. Sprechtest und Gefühl gegenprüfen."
      ],
      vorteile: [
        "Verbessert die Ausdauergrundlage und die Fähigkeit der Muskeln, Fett zu nutzen.",
        "Sehr gelenkschonend und für fast alle geeignet.",
        "Erholt statt zu ermüden und passt deshalb gut zwischen Krafttage.",
        "Fortschritt gut messbar: mehr Watt bei gleichem Puls."
      ],
      tipps: [
        "Notiere dir die Wattzahl bei deinem Zone-2-Puls. Steigt sie über die Wochen, wird deine Ausdauer besser.",
        "Zwei bis drei Einheiten von 30 bis 60 Minuten pro Woche sind ein bewährter Umfang.",
        "Ideal mit Podcast oder Hörbuch, weil keine Konzentration auf Intervalle nötig ist."
      ],
      varianten: "Leichter: kürzer oder in Zone 1 als Regeneration. Schwerer: länger, bei Fortgeschrittenen bis 90 Minuten.",
      sicherheit: "Bei pulssenkenden Medikamenten nach Sprechtest und Gefühl steuern. Bei Herz-Kreislauf-Erkrankungen die Bereiche ärztlich festlegen lassen."
    }
  },
  {
    id: "rudern_locker",
    name: "Lockeres Rudern",
    auch: ["Easy Row", "Rowing Easy", "Rudergerät locker"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["fussball", "golf"],
    golf: 1,
    hinweis: "Beine, Körper, Arme. Ruhige Schlagzahl um 20.",
    info: {
      kurz: "Ruhiges Rudern am Rudergerät mit niedriger Schlagzahl. Trainiert die Ausdauer mit Beinen, Rumpf und Rücken gleichzeitig und ist gelenkschonend, wenn die Technik stimmt.",
      ausfuehrung: [
        "Schnall die Füße so fest, dass der Gurt über dem breitesten Teil des Fußes liegt, und stell die Luftklappe auf etwa 3 bis 5.",
        "Ausgangsposition vorn: Schienbeine etwa senkrecht, Arme lang, Oberkörper leicht nach vorn geneigt, Rücken gerade.",
        "Der Zug beginnt mit den Beinen: kräftig wegdrücken, Arme bleiben noch lang.",
        "Wenn die Beine fast gestreckt sind, lehnst du den Oberkörper leicht nach hinten und ziehst zum Schluss den Griff zum unteren Brustbein.",
        "Zurück in umgekehrter Reihenfolge: Arme nach vorn, Oberkörper nach vorn neigen, erst dann die Knie beugen und nach vorn rollen.",
        "Rudere mit etwa 18 bis 22 Schlägen pro Minute im Sprechtempo, grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 4 von 10.",
        "Rudere die letzten Minuten mit sehr wenig Druck aus."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. Bei ruhigem Tempo ist ein Atemzug pro Schlag gut.",
      fehler: [
        "Mit den Armen zuerst ziehen: Die Beine liefern den größten Teil der Kraft, Arme kommen zuletzt.",
        "Runder Rücken vorn: Aus der Hüfte nach vorn neigen, Brust offen.",
        "Knie beugen, bevor die Hände über den Knien sind: Dann muss der Griff um die Knie herum, Reihenfolge beachten.",
        "Luftklappe auf 10: Das macht es nicht besser, sondern schwerer für Rücken und Arme. 3 bis 5 ist für die meisten richtig.",
        "Zu hohe Schlagzahl: Ruhiges Rudern lebt von kräftigen, langsamen Schlägen."
      ],
      vorteile: [
        "Trainiert Herz und Kreislauf mit sehr vielen Muskeln gleichzeitig.",
        "Kräftigt Beine, Gesäß, oberen Rücken und Rumpf in einer Bewegung.",
        "Kein Aufprall, daher gelenkschonend für Knie und Sprunggelenke.",
        "Fördert eine aufrechte Haltung durch die Arbeit der Rückenmuskulatur."
      ],
      tipps: [
        "Merke dir die Reihenfolge: Beine, Körper, Arme beim Zug. Arme, Körper, Beine zurück.",
        "Das Verhältnis Zug zu Vorrollen ist etwa 1 zu 2: kräftig ziehen, ruhig zurückrollen.",
        "Der Monitor zeigt die Zeit pro 500 m. Für lockeres Rudern ist sie zweitrangig, der Sprechtest zählt."
      ],
      varianten: "Leichter: kürzer und mit weniger Druck. Schwerer: länger als Steady-State-Rudern in Zone 2.",
      sicherheit: "Bei Rückenbeschwerden auf sauberen, geraden Rücken achten und die Dauer langsam steigern. Bei akuten Bandscheibenproblemen vorher abklären lassen."
    }
  },
  {
    id: "rudern_steady_state",
    name: "Steady-State-Rudern in Zone 2",
    auch: ["Steady State Row", "Zone 2 Row", "UT2 Rowing", "Long Row"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch", "beinbeuger"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "30 Minuten und mehr, Schlagzahl 18 bis 22, gleichmäßige 500-m-Zeit.",
    info: {
      kurz: "Längere, gleichmäßige Rudereinheit in Zone 2, bei Ruderern als UT2 bekannt. Baut Ausdauer auf und schult nebenbei eine saubere, kraftvolle Rudertechnik.",
      ausfuehrung: [
        "Stell die Luftklappe auf 3 bis 5 und rudere 5 Minuten locker ein, dabei bewusst auf die Reihenfolge Beine, Körper, Arme achten.",
        "Finde eine Schlagzahl von 18 bis 22 Schlägen pro Minute und eine Zeit pro 500 m, die du die ganze Einheit halten kannst.",
        "Die Intensität liegt bei grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 4 von 10. Du kannst noch sprechen, aber in kürzeren Sätzen.",
        "Halte die Zeit pro 500 m so konstant wie möglich, schwankt sie um mehr als ein paar Sekunden, ist die Technik oder die Konzentration nicht gleichmäßig.",
        "Nutze die ruhige Belastung für Technik: kräftiger Beinstoß, ruhiges Vorrollen, Schultern locker.",
        "Rudere 30 bis 60 Minuten, je nach Fitness.",
        "Rudere zum Schluss 3 bis 5 Minuten mit wenig Druck aus und steh dann langsam auf."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. Ein ruhiger, gleichmäßiger Atemrhythmus zeigt, dass du richtig liegst.",
      fehler: [
        "Zu hohe Schlagzahl bei wenig Druck: Lieber langsamer und kräftiger rudern.",
        "Zu schnell anfangen: Die erste Viertelstunde fühlt sich leicht an, die letzte nicht mehr.",
        "Rücken rundet sich mit zunehmender Ermüdung: Kurze Technik-Checks alle 5 Minuten einbauen.",
        "Nur nach 500-m-Zeit fahren und den Puls ignorieren: In Zone 2 bleibt der Puls die Leitlinie."
      ],
      vorteile: [
        "Verbessert die aerobe Ausdauer mit einem großen Anteil der Körpermuskulatur.",
        "Kräftigt Beine, Rücken und Rumpf gleichzeitig.",
        "Gute Ergänzung für Mannschaftssportler, die Ausdauer ohne Laufbelastung aufbauen wollen.",
        "Fortschritt gut messbar über die 500-m-Zeit bei gleichem Puls."
      ],
      tipps: [
        "Teile die Einheit gedanklich in Blöcke von 10 Minuten mit jeweils kurzem Technik-Check.",
        "Ein Kissen oder Sattelpolster hilft bei langen Einheiten am Gesäß.",
        "Notiere dir die Durchschnittszeit pro 500 m, um Fortschritt zu sehen."
      ],
      varianten: "Leichter: 20 Minuten lockeres Rudern. Schwerer: 45 bis 60 Minuten oder als 3 mal 15 Minuten mit kurzer Pause.",
      sicherheit: "Bei Rückenbeschwerden die Dauer langsam steigern und auf eine aufrechte Haltung achten. Bei Problemen im unteren Rücken eventuell auf das Ergometer ausweichen."
    }
  },
  {
    id: "cardio_geraete_mix",
    name: "Cardio-Geräte-Wechsel in Zone 2",
    auch: ["Cardio Machine Rotation", "Zone 2 Mix", "Cross-Training"],
    muster: "ausdauer_ruhig",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "latissimus", "oberer_ruecken"],
    geraete: [["laufband", "fahrrad", "rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["fussball", "golf"],
    golf: 1,
    hinweis: "Zum Beispiel je 10 bis 15 Minuten Laufband, Rad und Rudern.",
    info: {
      kurz: "Eine ruhige Ausdauereinheit, die auf mehrere Geräte verteilt wird, zum Beispiel Laufband, Rad und Rudergerät. Der Puls bleibt die ganze Zeit in Zone 2, die Belastung verteilt sich aber auf unterschiedliche Muskeln und Gelenke.",
      ausfuehrung: [
        "Leg dir die Reihenfolge vorher fest, zum Beispiel Rad, Rudern, Laufband, damit der Wechsel schnell geht.",
        "Beginne auf dem ersten Gerät mit 5 Minuten lockerem Einfahren.",
        "Bleib auf jedem Gerät im Sprechtempo, grob 60 bis 70 Prozent der maximalen Herzfrequenz, gefühlt 3 bis 4 von 10.",
        "Wechsle nach 10 bis 15 Minuten zügig zum nächsten Gerät, ohne lange Pause.",
        "Auf dem Laufband reicht zügiges Gehen mit Steigung, wenn Laufen den Puls zu hoch treibt.",
        "Beende die Einheit auf dem letzten Gerät mit 3 bis 5 Minuten lockerem Ausklingen."
      ],
      atmung: "Gleichmäßig atmen, beim Rudern im Takt der Schläge, auf dem Rad und Laufband ruhig und rhythmisch.",
      fehler: [
        "Die Wechselpausen zu lang: Über 2 Minuten sinkt der Puls stark ab, zügig wechseln.",
        "Auf jedem Gerät zu stark beginnen: Nach dem Wechsel braucht der Puls etwas Zeit, nicht sofort Gas geben.",
        "Ein Gerät ohne Technik: Beim Rudern Reihenfolge Beine, Körper, Arme beachten.",
        "Zone 2 auf allen Geräten gleich hoch ansetzen: Beim Radfahren liegt der Puls bei gleicher Anstrengung oft etwas niedriger als beim Laufen."
      ],
      vorteile: [
        "Verteilt die Belastung auf verschiedene Gelenke und Muskeln.",
        "Abwechslungsreicher als lange Zeit auf nur einem Gerät.",
        "Gut nutzbar, wenn im Studio einzelne Geräte nur kurz frei sind.",
        "Trainiert die Ausdauer, ohne einzelne Strukturen einseitig zu überlasten."
      ],
      tipps: [
        "Bei Beschwerden einfach das Gerät auslassen, das sie verstärkt.",
        "Pro Gerät die Werte notieren (Tempo, Watt, 500-m-Zeit), um Fortschritte zu sehen.",
        "Gut geeignet als Ausdauerteil nach dem Krafttraining."
      ],
      varianten: "Leichter: zwei Geräte und kürzere Abschnitte. Schwerer: längere Abschnitte oder ein viertes Gerät.",
      sicherheit: "Bei Rücken-, Knie- oder Sprunggelenkbeschwerden nur die Geräte nutzen, die sich gut anfühlen. Bei Herz-Kreislauf-Erkrankungen die Bereiche ärztlich abstimmen."
    }
  },

  // ---------- Intervalle: Grundformen 2 zu 2 ----------
  {
    id: "intervalle_lauf",
    name: "Laufintervalle 2 zu 2 Minuten",
    auch: ["Running Intervals", "Intervalle laufen", "Aerobic Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["laufen", "fussball"],
    hinweis: "10 Minuten einlaufen, dann je 2 Minuten zügig und 2 Minuten locker.",
    info: {
      kurz: "Wechsel aus zügigen und lockeren Laufabschnitten von je etwa 2 Minuten. Ein guter Einstieg ins Intervalltraining, der die Ausdauer schneller verbessert als nur ruhiges Laufen.",
      ausfuehrung: [
        "Lauf 10 Minuten locker ein und mach danach 3 bis 4 kurze Steigerungen über etwa 15 Sekunden, bei denen du allmählich schneller wirst.",
        "Lauf den ersten zügigen Abschnitt 2 Minuten in einem Tempo, bei dem Sprechen schwerfällt und du nur noch einzelne Wörter sagen kannst. Grob 80 bis 90 Prozent der maximalen Herzfrequenz, gefühlt 7 bis 8 von 10.",
        "Trab danach 2 Minuten ganz locker oder geh, bis sich der Atem merklich beruhigt.",
        "Wiederhole den Wechsel je nach Fitness 4 bis 8 Mal.",
        "Lauf alle zügigen Abschnitte im gleichen Tempo. Der letzte soll noch genauso gut gehen wie der erste.",
        "Lauf zum Abschluss 5 bis 10 Minuten locker aus und geh danach noch kurz."
      ],
      atmung: "In den zügigen Abschnitten kräftig und rhythmisch atmen, zum Beispiel zwei Schritte ein, zwei Schritte aus. In den Pausen tief und langsam ausatmen.",
      fehler: [
        "Den ersten Abschnitt zu schnell: Lieber etwas zu langsam starten und am Ende zulegen.",
        "Pausen im Stehen: Lockeres Traben oder Gehen hilft dem Körper, sich schneller zu erholen.",
        "Ohne Aufwärmen: Kalte Muskeln und ein unvorbereiteter Kreislauf erhöhen das Verletzungsrisiko.",
        "Intervalle an mehreren Tagen hintereinander: Mindestens einen ruhigen Tag dazwischen legen."
      ],
      vorteile: [
        "Verbessert die maximale Sauerstoffaufnahme und die Laufökonomie.",
        "Bringt mehr Abwechslung als gleichmäßiges Laufen.",
        "Bereitet auf Tempowechsel im Fußball und auf Wettkämpfe vor.",
        "In kurzer Zeit wirksam, wenn die Einheit nicht länger als 30 bis 40 Minuten dauern kann."
      ],
      tipps: [
        "Eine harte Intervalleinheit pro Woche reicht für die meisten, der Rest bleibt ruhig.",
        "Auf dem Laufband ist das Tempo exakt steuerbar, draußen hilft eine feste Strecke, zum Beispiel ein Sportplatz.",
        "Steigere zuerst die Anzahl der Wiederholungen, erst dann das Tempo."
      ],
      varianten: "Leichter: zügige Abschnitte auf 1 Minute kürzen oder zügig gehen statt laufen. Schwerer: 3 Minuten zügig, kürzere Pausen oder 4x4-Intervalle.",
      sicherheit: "Intervalle belasten Herz und Kreislauf stark. Bei Herz-Kreislauf-Erkrankungen, Bluthochdruck oder nach längerer Pause vorher ärztlich abklären lassen. Bei Brustschmerz, Schwindel oder ungewöhnlicher Atemnot sofort abbrechen."
    }
  },
  {
    id: "intervalle_rad",
    name: "Radintervalle 2 zu 2 Minuten",
    auch: ["Bike Intervals", "Intervalle auf dem Rad", "Ergometer-Intervalle"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "beinbeuger"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    sport: ["fussball", "golf", "laufen"],
    golf: 1,
    hinweis: "10 Minuten einfahren, dann je 2 Minuten zügig und 2 Minuten locker.",
    info: {
      kurz: "Wechsel aus zügigen und lockeren Abschnitten von je etwa 2 Minuten auf dem Rad oder Ergometer. Die gelenkschonendste Art, Intervalle zu trainieren, und deshalb auch für Einsteiger und bei Beschwerden gut geeignet.",
      ausfuehrung: [
        "Fahr 10 Minuten locker ein und steigere dabei den Widerstand langsam.",
        "Erhöhe für den ersten zügigen Abschnitt Widerstand oder Trittfrequenz, bis Sprechen schwerfällt. Grob 80 bis 90 Prozent der maximalen Herzfrequenz, gefühlt 7 bis 8 von 10.",
        "Halte die Leistung 2 Minuten gleichmäßig bei etwa 85 bis 100 Umdrehungen pro Minute.",
        "Senke danach den Widerstand deutlich und tritt 2 Minuten locker weiter.",
        "Wiederhole den Wechsel 4 bis 8 Mal und versuche, jeden zügigen Abschnitt mit der gleichen Leistung zu fahren.",
        "Fahr zum Abschluss 5 bis 10 Minuten locker aus."
      ],
      atmung: "In den zügigen Abschnitten tief und kräftig atmen, nicht die Luft anhalten. In den lockeren Minuten bewusst lange ausatmen.",
      fehler: [
        "Zu schwerer Gang mit sehr niedriger Trittfrequenz: Das belastet die Knie, lieber etwas mehr Umdrehungen.",
        "Pausen ganz ohne Treten: Locker weitertreten fördert die Erholung.",
        "Erste Wiederholung zu hart: Die Leistung soll bis zum Schluss haltbar sein.",
        "Oberkörper wippt stark: Rumpf stabil halten, die Kraft kommt aus den Beinen."
      ],
      vorteile: [
        "Verbessert die Ausdauerleistung in kurzer Zeit.",
        "Kein Aufprall, daher auch bei Knie- und Sprunggelenkbeschwerden oft möglich.",
        "Sehr gut steuerbar über Watt, Puls oder Widerstandsstufe.",
        "Gut kombinierbar mit Krafttraining, weil die Beine weniger ermüden als beim Laufen."
      ],
      tipps: [
        "Notiere dir Widerstand oder Watt der zügigen Abschnitte und steigere sie in kleinen Schritten.",
        "Ein Ventilator hilft, weil der Puls im warmen Raum stärker steigt.",
        "Für Golfer eine gute Wahl, weil es Ausdauer ohne Belastung für Rücken und Handgelenke bringt."
      ],
      varianten: "Leichter: 1 Minute zügig, 2 Minuten locker. Schwerer: 3 Minuten zügig, kürzere Pausen oder 4x4-Intervalle auf dem Rad.",
      sicherheit: "Intervalle belasten Herz und Kreislauf stark. Bei Herz-Kreislauf-Erkrankungen oder Bluthochdruck vorher ärztlich abklären lassen und bei Schwindel oder Brustschmerz sofort aufhören."
    }
  },
  {
    id: "intervalle_rudern",
    name: "Ruderintervalle 2 zu 2 Minuten",
    auch: ["Rowing Intervals", "Intervalle am Rudergerät"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 1,
    sport: ["fussball"],
    hinweis: "10 Minuten einrudern, dann je 2 Minuten zügig und 2 Minuten locker.",
    info: {
      kurz: "Wechsel aus zügigen und lockeren Rudereinheiten von je etwa 2 Minuten. Trainiert Herz und Kreislauf mit dem ganzen Körper und ohne Stoßbelastung.",
      ausfuehrung: [
        "Rudere 10 Minuten locker ein, Luftklappe auf 3 bis 5, und achte auf die Reihenfolge Beine, Körper, Arme.",
        "Erhöhe für den zügigen Abschnitt den Druck pro Schlag und die Schlagzahl auf etwa 24 bis 28 pro Minute.",
        "Rudere 2 Minuten so, dass Sprechen schwerfällt, grob 80 bis 90 Prozent der maximalen Herzfrequenz, gefühlt 7 bis 8 von 10.",
        "Rudere danach 2 Minuten ganz locker mit etwa 18 bis 20 Schlägen weiter.",
        "Wiederhole den Wechsel 4 bis 8 Mal und versuche, in jedem zügigen Abschnitt die gleiche Zeit pro 500 m zu halten.",
        "Rudere 5 Minuten locker aus."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. Bei hoher Schlagzahl kann ein zusätzlicher kurzer Atemzug am Ende des Zuges nötig sein.",
      fehler: [
        "Schlagzahl hochjagen ohne Druck: Schnelle, kraftlose Schläge bringen wenig. Kräftiger Beinstoß zuerst.",
        "Rücken rundet sich bei Ermüdung: Lieber die Intensität senken als die Technik verlieren.",
        "Zu schnell zurückrollen: Das Vorrollen bleibt ruhig, auch in den zügigen Abschnitten.",
        "Luftklappe zu hoch: Eine hohe Stufe macht jeden Schlag schwer und belastet den Rücken."
      ],
      vorteile: [
        "Fordert Beine, Rumpf und Rücken gleichzeitig und bringt den Puls schnell hoch.",
        "Keine Stoßbelastung für Knie und Sprunggelenke.",
        "Leistung über die Zeit pro 500 m sehr gut messbar.",
        "Verbessert die Ausdauer in kurzer Zeit."
      ],
      tipps: [
        "Merke dir die 500-m-Zeit deiner zügigen Abschnitte und versuche sie über Wochen langsam zu verbessern.",
        "Gerade Einsteiger profitieren von einer kurzen Techniküberprüfung per Video von der Seite.",
        "Nach einem schweren Beintag eher auf das Rad ausweichen."
      ],
      varianten: "Leichter: 1 Minute zügig, 2 Minuten locker. Schwerer: längere Abschnitte, kürzere Pausen oder 500-m-Wiederholungen.",
      sicherheit: "Bei Rückenbeschwerden saubere Technik vor Intensität stellen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },

  // ---------- Intervalle: 4x4 (Norwegisches Modell) ----------
  {
    id: "intervalle_4x4_lauf",
    name: "4x4-Intervalle laufen",
    auch: ["Norwegian 4x4", "4x4 Intervals", "Norwegische Intervalle", "Helgerud 4x4"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["laufen", "fussball"],
    hinweis: "4 mal 4 Minuten hart, je 3 Minuten aktiv locker dazwischen.",
    info: {
      kurz: "Vier harte Abschnitte von je 4 Minuten mit 3 Minuten aktiver Erholung, bekannt aus der norwegischen Sportforschung. Eines der am besten untersuchten Intervallprotokolle zur Verbesserung der maximalen Sauerstoffaufnahme.",
      ausfuehrung: [
        "Lauf 10 Minuten locker ein, gern leicht bergauf oder auf dem Laufband mit etwas Steigung.",
        "Lauf den ersten 4-Minuten-Abschnitt so, dass der Puls nach 1 bis 2 Minuten bei grob 85 bis 95 Prozent der maximalen Herzfrequenz liegt. Gefühlt 8 bis 9 von 10, du kannst höchstens einzelne Wörter sprechen.",
        "Halte die Intensität bis zum Ende der 4 Minuten, ohne komplett zu sprinten.",
        "Trab oder geh danach 3 Minuten aktiv, etwa bei 60 bis 70 Prozent der maximalen Herzfrequenz.",
        "Wiederhole das, bis du vier harte Abschnitte geschafft hast.",
        "Lauf zum Schluss 5 bis 10 Minuten locker aus."
      ],
      atmung: "In den harten Abschnitten tief und rhythmisch atmen. Wenn du hektisch und flach atmest, bist du zu schnell gestartet.",
      fehler: [
        "Den ersten Abschnitt zu schnell: Der Puls braucht 1 bis 2 Minuten, um zu steigen. Nicht versuchen, ihn sofort hochzutreiben.",
        "Erholung im Stehen: Die 3 Minuten bleiben aktiv, damit der Puls nicht komplett abfällt.",
        "Zu oft pro Woche: Ein bis zwei 4x4-Einheiten pro Woche reichen, der Rest bleibt ruhig.",
        "Ohne Aufwärmen starten: 10 Minuten Einlaufen sind Pflicht."
      ],
      vorteile: [
        "Kann die maximale Sauerstoffaufnahme deutlich verbessern, gut untersucht in Studien.",
        "Mit etwa 40 Minuten inklusive Auf- und Abwärmen zeitsparend.",
        "Verbessert die Fähigkeit, hohe Belastungen länger zu halten, nützlich für Fußball und Laufwettkämpfe.",
        "Klare Struktur, leicht zu merken und zu wiederholen."
      ],
      tipps: [
        "Bergauf oder mit 5 bis 8 Prozent Steigung auf dem Laufband fällt es leichter, den Puls hoch zu bringen, und die Beine werden weniger belastet.",
        "Der vierte Abschnitt soll hart, aber machbar sein. Wenn er nicht mehr gelingt, war das Tempo zu hoch.",
        "Eine Pulsuhr hilft, ist aber nicht nötig: Gefühlt 8 bis 9 von 10 reicht als Leitlinie."
      ],
      varianten: "Leichter: 2 bis 3 Abschnitte statt 4 oder zügiges Steigungsgehen statt Laufen. Schwerer: Tempo leicht steigern, wenn der Puls bei gleichem Tempo über Wochen sinkt.",
      sicherheit: "Sehr hohe Belastung für Herz und Kreislauf. Bei Herz-Kreislauf-Erkrankungen, Bluthochdruck oder Einsteigern nach langer Pause vorher ärztlich abklären lassen. Bei Brustschmerz oder Schwindel sofort abbrechen."
    }
  },
  {
    id: "intervalle_4x4_rad",
    name: "4x4-Intervalle auf dem Rad",
    auch: ["Norwegian 4x4 Bike", "4x4 Cycling Intervals", "4x4 Ergometer"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "beinbeuger"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    sport: ["fussball", "golf", "laufen"],
    golf: 1,
    hinweis: "4 mal 4 Minuten hart, je 3 Minuten locker treten dazwischen.",
    info: {
      kurz: "Das norwegische 4x4-Protokoll auf dem Rad oder Ergometer: vier harte Abschnitte von 4 Minuten mit je 3 Minuten lockerem Treten. Sehr wirksam für die Ausdauer und dabei gelenkschonend.",
      ausfuehrung: [
        "Fahr 10 Minuten locker ein und steigere zum Ende des Aufwärmens den Widerstand kurz.",
        "Erhöhe für den ersten Abschnitt den Widerstand so, dass dein Puls nach 1 bis 2 Minuten bei grob 85 bis 95 Prozent der maximalen Herzfrequenz liegt. Gefühlt 8 bis 9 von 10.",
        "Tritt gleichmäßig mit etwa 85 bis 100 Umdrehungen pro Minute und halte die Leistung über alle 4 Minuten.",
        "Senke danach den Widerstand und tritt 3 Minuten locker weiter.",
        "Wiederhole das, bis du vier Abschnitte geschafft hast.",
        "Fahr 5 bis 10 Minuten locker aus."
      ],
      atmung: "Tief und kräftig atmen, die Ausatmung bewusst lang. Nicht pressen.",
      fehler: [
        "Mit zu viel Watt starten und in Minute drei einbrechen: Gleichmäßig fahren, die letzte Minute ist die härteste.",
        "Pausen ohne Treten: Locker weitertreten, damit sich die Beine schneller erholen.",
        "Zu dicker Gang: Lieber Trittfrequenz halten, das schont die Knie.",
        "Zu häufig: Ein bis zwei Einheiten pro Woche genügen."
      ],
      vorteile: [
        "Gut untersuchtes Protokoll zur Verbesserung der maximalen Sauerstoffaufnahme.",
        "Keine Stoßbelastung, daher auch für Menschen mit Knie- oder Fußbeschwerden geeignet.",
        "Leistung über Watt sehr genau messbar und steigerbar.",
        "Weniger muskuläre Ermüdung als beim Laufen, gut kombinierbar mit Krafttraining."
      ],
      tipps: [
        "Notiere die durchschnittliche Wattzahl der vier Abschnitte und steigere sie langsam.",
        "Ein Ventilator verhindert, dass Hitze den Puls zusätzlich in die Höhe treibt.",
        "Nicht am Tag vor einem schweren Beintraining einplanen."
      ],
      varianten: "Leichter: 3 Abschnitte oder 3 Minuten statt 4. Schwerer: höhere Wattzahl bei gleicher Struktur.",
      sicherheit: "Sehr hohe Belastung für Herz und Kreislauf. Bei Herz-Kreislauf-Erkrankungen oder Bluthochdruck vorher ärztlich abklären lassen."
    }
  },
  {
    id: "intervalle_4x4_rudern",
    name: "4x4-Intervalle am Rudergerät",
    auch: ["Norwegian 4x4 Row", "4x4 Rowing Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch", "bizeps"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "4 mal 4 Minuten hart, je 3 Minuten locker rudern dazwischen.",
    info: {
      kurz: "Das 4x4-Protokoll am Rudergerät: vier harte Abschnitte von je 4 Minuten mit 3 Minuten lockerem Rudern. Fordert durch den großen Muskeleinsatz Herz und Kreislauf besonders stark.",
      ausfuehrung: [
        "Rudere 10 Minuten locker ein, Luftklappe auf 3 bis 5, mit ein paar kräftigeren Schlägen zum Ende.",
        "Rudere den ersten Abschnitt mit etwa 24 bis 28 Schlägen pro Minute und kräftigem Beinstoß, sodass der Puls nach 1 bis 2 Minuten bei grob 85 bis 95 Prozent der maximalen Herzfrequenz liegt. Gefühlt 8 bis 9 von 10.",
        "Halte eine gleichmäßige Zeit pro 500 m über die vollen 4 Minuten.",
        "Rudere danach 3 Minuten locker mit 18 bis 20 Schlägen pro Minute.",
        "Wiederhole das, bis du vier Abschnitte geschafft hast.",
        "Rudere 5 bis 10 Minuten locker aus."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. Bei hoher Intensität darf ein zweiter, kurzer Atemzug pro Schlag dazukommen.",
      fehler: [
        "Technik bricht ein: Bei rundem Rücken oder Ziehen mit den Armen zuerst die Intensität senken.",
        "Schlagzahl zu hoch: Über 30 Schläge pro Minute verliert der Schlag meist an Kraft. Kraftvoll statt hektisch.",
        "Ersten Abschnitt zu schnell: Die 500-m-Zeit soll in allen vier Abschnitten ähnlich sein.",
        "Pause ohne Rudern: Locker weiterrudern hält den Kreislauf in Schwung."
      ],
      vorteile: [
        "Großer Muskeleinsatz von Beinen, Rücken und Armen bringt den Puls hoch.",
        "Verbessert die maximale Sauerstoffaufnahme ohne Stoßbelastung.",
        "500-m-Zeit als klare, messbare Größe für Fortschritt.",
        "Gute Alternative für Fußballer an Tagen ohne Laufbelastung."
      ],
      tipps: [
        "Wähle für die ersten Einheiten eine 500-m-Zeit, die etwa 10 bis 15 Sekunden langsamer ist als dein bestes 500-m-Ergebnis.",
        "Achte auf ein ruhiges Vorrollen, auch wenn es anstrengend wird.",
        "Ein Polster auf dem Sitz hilft bei längeren Einheiten."
      ],
      varianten: "Leichter: 3 Abschnitte oder mit etwas niedrigerer Schlagzahl. Schwerer: schnellere 500-m-Zeit bei gleicher Struktur.",
      sicherheit: "Bei Rückenbeschwerden saubere Technik vor Intensität. Sehr hohe Kreislaufbelastung, bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },

  // ---------- Intervalle: kurz und intensiv ----------
  {
    id: "intervalle_30_30_lauf",
    name: "30/30-Läufe",
    auch: ["30-30 Intervals", "Billat 30-30", "30 on 30 off"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["laufen", "fussball"],
    hinweis: "30 Sekunden schnell, 30 Sekunden locker traben, 10 bis 20 Mal.",
    info: {
      kurz: "Kurze, schnelle Laufabschnitte von 30 Sekunden im Wechsel mit 30 Sekunden lockerem Traben, bekannt durch die französische Sportwissenschaftlerin Véronique Billat. Hält den Puls lange im hohen Bereich, fühlt sich aber leichter an als lange harte Intervalle.",
      ausfuehrung: [
        "Lauf 10 bis 15 Minuten locker ein und mach 3 bis 4 Steigerungen.",
        "Lauf 30 Sekunden schnell, etwa das Tempo, das du maximal 5 bis 6 Minuten durchhalten könntest. Gefühlt 8 bis 9 von 10, aber kein Sprint.",
        "Trab danach 30 Sekunden locker weiter, nicht stehen bleiben.",
        "Wiederhole den Wechsel 10 bis 20 Mal. Der Puls steigt über die Serie langsam an und bleibt im hohen Bereich, grob 85 bis 95 Prozent der maximalen Herzfrequenz.",
        "Achte darauf, dass das schnelle Tempo in jeder Wiederholung gleich bleibt.",
        "Lauf 10 Minuten locker aus."
      ],
      atmung: "Kräftig und rhythmisch atmen. In den Trabphasen bewusst tief ausatmen.",
      fehler: [
        "Die schnellen Abschnitte als Sprint laufen: Das Tempo ist zügig, aber kontrolliert, sonst ist nach wenigen Wiederholungen Schluss.",
        "Stehen bleiben in der Pause: Lockeres Traben hält den Puls oben, das ist gewollt.",
        "Zu viele Wiederholungen beim ersten Mal: Mit 8 bis 10 beginnen.",
        "Auf hartem Asphalt mit Richtungswechseln: Am besten auf Bahn, Rasen oder gerader Strecke."
      ],
      vorteile: [
        "Viel Zeit mit hohem Puls bei vergleichsweise geringer gefühlter Belastung.",
        "Verbessert die maximale Sauerstoffaufnahme und die Fähigkeit, sich schnell zu erholen.",
        "Spielnah für Fußball, wo kurze schnelle Phasen mit lockeren Phasen wechseln.",
        "Verbessert das Gefühl für schnelles, lockeres Laufen."
      ],
      tipps: [
        "Auf dem Sportplatz kannst du Markierungen nutzen: zum Beispiel 30 Sekunden schnell auf der Geraden und locker durch die Kurve.",
        "Ein Intervall-Timer mit Signalton macht den Wechsel einfach.",
        "Die Serie ist richtig dosiert, wenn die letzte Wiederholung noch sauber im gleichen Tempo gelingt."
      ],
      varianten: "Leichter: 15/15 oder weniger Wiederholungen. Schwerer: mehr Wiederholungen oder zwei Serien mit 3 Minuten Pause.",
      sicherheit: "Hohe Belastung für Herz und Kreislauf. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen. Bei Achillessehnen- oder Wadenproblemen vorsichtig dosieren."
    }
  },
  {
    id: "intervalle_30_30_rad",
    name: "30/30-Intervalle auf dem Rad",
    auch: ["30-30 Bike Intervals", "30 on 30 off Bike"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    sport: ["fussball", "laufen"],
    hinweis: "30 Sekunden kräftig, 30 Sekunden locker treten, 10 bis 20 Mal.",
    info: {
      kurz: "Wechsel aus 30 Sekunden kräftigem und 30 Sekunden lockerem Treten auf dem Rad oder Ergometer. Hält den Puls lange im hohen Bereich, ohne die Gelenke zu belasten.",
      ausfuehrung: [
        "Fahr 10 Minuten locker ein und baue zum Schluss zwei kurze Beschleunigungen ein.",
        "Tritt 30 Sekunden kräftig mit hohem Widerstand oder hoher Trittfrequenz. Gefühlt 8 bis 9 von 10, aber kein Vollsprint.",
        "Senke danach den Widerstand und tritt 30 Sekunden locker weiter.",
        "Wiederhole den Wechsel 10 bis 20 Mal. Der Puls steigt über die Serie auf grob 85 bis 95 Prozent der maximalen Herzfrequenz.",
        "Halte die Leistung in allen kräftigen Abschnitten möglichst gleich.",
        "Fahr 5 bis 10 Minuten locker aus."
      ],
      atmung: "Tief und kräftig atmen, in den lockeren Abschnitten lange ausatmen.",
      fehler: [
        "Erste Abschnitte zu hart: Das Gefühl täuscht anfangs, die Serie wird hinten heraus schwer.",
        "Pausen zu locker oder gar nicht getreten: Locker weitertreten, damit der Puls oben bleibt.",
        "Sehr niedrige Trittfrequenz bei hohem Widerstand: Lieber 90 bis 110 Umdrehungen pro Minute.",
        "Ohne Einfahren: Mindestens 10 Minuten locker vorher."
      ],
      vorteile: [
        "Viel Zeit im hohen Pulsbereich bei guter Steuerbarkeit.",
        "Gelenkschonende Alternative zu 30/30-Läufen.",
        "Verbessert die Ausdauerleistung und die Erholungsfähigkeit zwischen kurzen Belastungen.",
        "Gut geeignet für Mannschaftssportler außerhalb des Platzes."
      ],
      tipps: [
        "Am Ergometer mit Wattanzeige zwei feste Stufen einstellen, so wird der Wechsel einfach.",
        "Musik oder ein Timer mit Signal hilft, die Abschnitte genau zu treffen.",
        "Wenn die Leistung in den letzten Wiederholungen deutlich absinkt, die Serie beenden."
      ],
      varianten: "Leichter: 20 Sekunden kräftig, 40 Sekunden locker. Schwerer: mehr Wiederholungen oder zwei Serien.",
      sicherheit: "Hohe Belastung für Herz und Kreislauf. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "tabata_rad",
    name: "Tabata-Intervalle auf dem Rad",
    auch: ["Tabata Bike", "20/10 Intervals", "Tabata Protocol"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "8 mal 20 Sekunden sehr hart, je 10 Sekunden Pause. Nur gut aufgewärmt.",
    info: {
      kurz: "Acht Abschnitte von 20 Sekunden sehr hartem Treten mit je 10 Sekunden Pause, insgesamt 4 Minuten. Benannt nach dem japanischen Forscher Izumi Tabata, der das Protokoll auf dem Ergometer untersucht hat. Extrem fordernd, aber sehr kurz.",
      ausfuehrung: [
        "Fahr mindestens 10 Minuten locker ein und baue zwei bis drei kurze, kräftige Beschleunigungen ein.",
        "Stell einen hohen Widerstand ein, mit dem du noch 90 bis 110 Umdrehungen pro Minute schaffst.",
        "Tritt 20 Sekunden so hart du kannst, gefühlt 9 bis 10 von 10.",
        "Tritt 10 Sekunden ganz locker oder lass die Beine kurz rollen.",
        "Wiederhole das insgesamt acht Mal. Ab dem fünften oder sechsten Durchgang wird es sehr hart, die Leistung darf etwas sinken.",
        "Fahr danach mindestens 5 bis 10 Minuten ganz locker aus, bis sich der Atem normalisiert hat."
      ],
      atmung: "In den harten Abschnitten kräftig atmen, nicht die Luft anhalten. In den 10-Sekunden-Pausen bewusst tief ausatmen.",
      fehler: [
        "Ohne gutes Aufwärmen: Bei dieser Intensität ist das Aufwärmen unverzichtbar.",
        "Zu viele Runden: Ein echtes Tabata dauert 4 Minuten. Wenn du mehr Runden schaffst, war es nicht hart genug.",
        "Alles mit einem Gewicht, das die Technik zerstört: Auf dem Rad bleibt der Oberkörper ruhig, kein Reißen am Lenker.",
        "Mehrmals pro Woche: Einmal pro Woche reicht neben anderem Training völlig."
      ],
      vorteile: [
        "Sehr kurze Einheit, die gleichzeitig die aerobe und die anaerobe Leistungsfähigkeit fordert.",
        "Auf dem Rad gut dosierbar und gelenkschonend.",
        "Trainiert die Fähigkeit, wiederholte harte Belastungen zu verkraften, nützlich im Fußball.",
        "Passt in eine kurze Trainingszeit."
      ],
      tipps: [
        "Viele sogenannte Tabata-Workouts sind deutlich weniger intensiv als das Original. Das ist in Ordnung, nenne es dann einfach 20/10-Intervalle.",
        "Der Ergometer ist ideal, weil du sofort stoppen und den Widerstand verändern kannst.",
        "Nimm dir danach Zeit für ein ruhiges Ausfahren, das hilft dem Kreislauf."
      ],
      varianten: "Leichter: 20 Sekunden zügig statt maximal oder nur 4 bis 6 Runden. Schwerer: zwei Blöcke mit 5 Minuten lockerem Treten dazwischen, nur für sehr gut Trainierte.",
      sicherheit: "Maximale Belastung für Herz und Kreislauf. Nur für gesunde, bereits trainierte Menschen. Bei Herz-Kreislauf-Erkrankungen, Bluthochdruck oder Einsteigern nicht ohne ärztliche Freigabe."
    }
  },
  {
    id: "sprintintervalle_rad",
    name: "Sprintintervalle auf dem Rad (30 Sekunden)",
    auch: ["Sprint Interval Training", "SIT", "Wingate Intervals", "All-out Bike Sprints"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "beinbeuger", "waden"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "4 bis 6 Sprints von 30 Sekunden, je etwa 4 Minuten locker dazwischen.",
    info: {
      kurz: "Kurze Sprints von 30 Sekunden mit voller Kraft und langen, lockeren Pausen. In der Forschung als Sprint-Intervalltraining (SIT) gut untersucht, bringt es mit wenig Gesamtzeit eine große Wirkung auf die Ausdauer.",
      ausfuehrung: [
        "Fahr 10 Minuten locker ein und steigere am Ende zweimal für 5 Sekunden kurz auf hohe Leistung.",
        "Stell einen Widerstand ein, der hoch genug ist, dass du nicht ins Leere trittst, und starte aus lockerem Treten heraus.",
        "Tritt 30 Sekunden mit maximaler Kraft, gefühlt 10 von 10. Die Leistung sinkt gegen Ende, das ist normal.",
        "Senke danach den Widerstand sofort und tritt etwa 4 Minuten ganz locker.",
        "Wiederhole das 4 bis 6 Mal, Einsteiger beginnen mit 2 bis 3 Sprints.",
        "Fahr mindestens 5 bis 10 Minuten locker aus."
      ],
      atmung: "Im Sprint kräftig weiteratmen, nicht pressen. In der Pause lange ausatmen und den Puls sinken lassen.",
      fehler: [
        "Pausen zu kurz: Für maximale Sprints braucht es lange Erholung, sonst wird es ein normales Intervalltraining mit schwächeren Sprints.",
        "Nach dem Sprint sofort absteigen: Weitertreten verhindert Schwindel und hilft der Erholung.",
        "Ohne Grundlage: Wer noch kaum Ausdauer trainiert hat, beginnt besser mit 2 zu 2-Intervallen.",
        "Zu häufig: Ein bis zwei Einheiten pro Woche reichen."
      ],
      vorteile: [
        "Sehr zeitsparend, die eigentliche harte Arbeit dauert nur wenige Minuten.",
        "Verbessert Ausdauer, Sprintfähigkeit und die Erholung zwischen intensiven Belastungen.",
        "Auf dem Rad ohne Laufbelastung und gut dosierbar.",
        "Kann helfen, die Stoffwechselgesundheit zu unterstützen, wie mehrere Studien zeigen."
      ],
      tipps: [
        "Bei Ergometern mit Wattanzeige ist die Spitzenleistung ein guter Fortschrittsmarker.",
        "Lass dich in den ersten Sprints nicht zu einem kompletten Einbruch treiben, die Leistung soll über die Serie ähnlich bleiben.",
        "Danach eher einen ruhigen Tag planen."
      ],
      varianten: "Leichter: 15 bis 20 Sekunden Sprint oder nur 2 bis 3 Wiederholungen. Schwerer: 6 Wiederholungen oder etwas höherer Widerstand.",
      sicherheit: "Maximale Belastung. Nur für gesunde, bereits regelmäßig trainierende Menschen. Bei Herz-Kreislauf-Erkrankungen, Bluthochdruck oder Kniebeschwerden vorher ärztlich abklären lassen."
    }
  },
  {
    id: "rad_sprints_kurz",
    name: "Kurze Radsprints (10 Sekunden)",
    auch: ["Short Bike Sprints", "10 Second Sprints", "Bike Sprint Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "beinbeuger", "waden"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { knie: 1 },
    stufe: 1,
    sport: ["fussball", "golf"],
    golf: 1,
    hinweis: "6 bis 10 Sprints von 10 Sekunden, je 1 bis 2 Minuten locker treten.",
    info: {
      kurz: "Sehr kurze, explosive Sprints von etwa 10 Sekunden auf dem Rad mit ausreichender Pause. Trainiert Spritzigkeit und Ausdauer, fühlt sich aber deutlich weniger erschöpfend an als längere Sprints.",
      ausfuehrung: [
        "Fahr 10 Minuten locker ein.",
        "Stell einen mittleren bis hohen Widerstand ein und beschleunige aus lockerem Treten heraus für etwa 10 Sekunden so schnell du kannst, gefühlt 9 bis 10 von 10.",
        "Bleib im Sattel sitzen und halte den Oberkörper ruhig, die Kraft kommt aus Beinen und Gesäß.",
        "Tritt danach 1 bis 2 Minuten ganz locker, bis du dich für den nächsten Sprint frisch fühlst.",
        "Wiederhole das 6 bis 10 Mal.",
        "Fahr 5 bis 10 Minuten locker aus."
      ],
      atmung: "Vor dem Sprint einatmen und im Sprint kräftig weiteratmen. In der Pause ruhig und tief atmen.",
      fehler: [
        "Pausen zu kurz: Die Sprints sollen alle schnell bleiben, sonst lieber länger erholen.",
        "Zu geringer Widerstand: Die Beine drehen sonst unkontrolliert durch, etwas mehr Widerstand gibt Halt.",
        "Am Lenker reißen: Hände fest, aber Oberkörper ruhig.",
        "Ohne Einfahren: Auch kurze Sprints brauchen warme Muskeln."
      ],
      vorteile: [
        "Trainiert Beschleunigung und Spitzenleistung bei geringer Gesamtermüdung.",
        "Bringt Abwechslung in ruhige Radeinheiten und verbessert die Ausdauerleistung.",
        "Gelenkschonend und einfach zu dosieren.",
        "Gut als kurzer Reiz an Tagen, an denen keine lange harte Einheit passt."
      ],
      tipps: [
        "Kann auch am Ende einer lockeren Radeinheit angehängt werden.",
        "Zähle die Sprints nicht als Erschöpfungstraining, sondern als Qualitätstraining: schnell und frisch.",
        "Wenn die Spitzenleistung deutlich sinkt, die Serie beenden."
      ],
      varianten: "Leichter: 6 Sprints mit 2 Minuten Pause. Schwerer: 10 bis 12 Sprints oder 15 Sekunden Dauer.",
      sicherheit: "Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen. Bei Kniebeschwerden den Widerstand moderat wählen."
    }
  },
  {
    id: "rudern_sprints",
    name: "Sprintintervalle am Rudergerät",
    auch: ["Rowing Sprints", "Row Sprint Intervals", "Power Strokes Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch", "beinbeuger"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "8 bis 10 mal 15 bis 20 Sekunden kräftig, je etwa 1 Minute locker.",
    info: {
      kurz: "Kurze, sehr kräftige Ruderabschnitte von 15 bis 20 Sekunden mit lockerem Rudern dazwischen. Trainiert Leistung und Ausdauer mit dem ganzen Körper.",
      ausfuehrung: [
        "Rudere 10 Minuten locker ein und baue zum Ende einige kräftigere Schläge ein.",
        "Rudere 15 bis 20 Sekunden mit maximalem Druck pro Schlag und etwa 30 bis 36 Schlägen pro Minute, gefühlt 9 bis 10 von 10.",
        "Achte auch im Sprint auf die Reihenfolge Beine, Körper, Arme und einen geraden Rücken.",
        "Rudere danach etwa 1 Minute ganz locker weiter.",
        "Wiederhole das 8 bis 10 Mal.",
        "Rudere 5 bis 10 Minuten locker aus."
      ],
      atmung: "Kräftig ausatmen beim Zug, beim Vorrollen einatmen. Nicht die Luft anhalten.",
      fehler: [
        "Technik zerfällt: Kraftvoller Beinstoß, dann Körper, dann Arme. Ein runder Rücken unter hoher Last ist zu vermeiden.",
        "Zu hektisches Vorrollen: Auch im Sprint kontrolliert zurückrollen.",
        "Luftklappe auf Maximum: Lieber 5 bis 7, damit die Schläge schnell bleiben.",
        "Zu viele Wiederholungen: Wenn die Leistung pro Schlag stark sinkt, Schluss machen."
      ],
      vorteile: [
        "Fördert Leistung und Ausdauer mit Beinen, Rumpf und Rücken zugleich.",
        "Keine Stoßbelastung.",
        "Messbar über Watt oder 500-m-Zeit in den Sprints.",
        "Kurze Einheit mit großer Wirkung."
      ],
      tipps: [
        "Starte die Sprints aus lockerem Rudern heraus, die ersten drei Schläge etwas kürzer, dann volle Länge.",
        "Notiere die beste Wattzahl oder 500-m-Zeit pro Sprint.",
        "Nicht direkt nach schwerem Kreuzheben oder Rudern mit Hantel einplanen."
      ],
      varianten: "Leichter: 10 bis 15 Sekunden mit längeren Pausen. Schwerer: 20 Sekunden mit 40 Sekunden Pause.",
      sicherheit: "Bei Rückenbeschwerden nur mit sicherer Technik und moderater Intensität. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "rudern_500m",
    name: "500-m-Wiederholungen am Rudergerät",
    auch: ["500m Repeats", "Rowing 500m Intervals", "500 m Row Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "4 bis 8 mal 500 m zügig, je 1 bis 2 Minuten locker rudern.",
    info: {
      kurz: "Wiederholte 500-m-Abschnitte in zügigem bis hartem Tempo mit lockeren Pausen. Ein Klassiker im Rudertraining, der Ausdauer und Tempohärte gleichzeitig trainiert.",
      ausfuehrung: [
        "Rudere 10 Minuten locker ein, mit 3 bis 4 kurzen, kräftigeren Abschnitten zum Ende.",
        "Stell am Monitor eine Strecke von 500 m ein und starte mit etwa 26 bis 30 Schlägen pro Minute.",
        "Rudere die Strecke hart, aber gleichmäßig, gefühlt 8 bis 9 von 10, grob 85 bis 95 Prozent der maximalen Herzfrequenz am Ende.",
        "Rudere danach 1 bis 2 Minuten locker, etwa so lang wie die 500 m gedauert haben.",
        "Wiederhole das 4 bis 8 Mal und versuche, alle Wiederholungen in ähnlicher Zeit zu schaffen.",
        "Rudere 5 bis 10 Minuten locker aus."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. Auf der zweiten Hälfte bewusst kräftig ausatmen.",
      fehler: [
        "Die erste Wiederholung als Bestzeitversuch: Alle sollen ähnlich schnell sein.",
        "Schlagzahl zu hoch, Druck zu gering: Kraftvolle Schläge mit ruhigem Vorrollen sind schneller.",
        "Rücken rundet sich: Lieber etwas langsamer und sauber.",
        "Zu kurze Pausen am Anfang: Die Erholung erst verkürzen, wenn die Zeiten stabil sind."
      ],
      vorteile: [
        "Verbessert Ausdauer und die Fähigkeit, hohe Leistung über einige Minuten zu halten.",
        "Gute Messbarkeit über die Zeit pro Wiederholung.",
        "Ganzkörperbelastung ohne Stoß.",
        "Trainiert das Gefühl für gleichmäßiges Einteilen der Kraft."
      ],
      tipps: [
        "Ein guter Startwert: etwa 5 bis 8 Sekunden langsamer als deine beste 500-m-Zeit.",
        "Wenn die letzte Wiederholung deutlich langsamer ist, war das Tempo zu hoch.",
        "Schreib dir jede Zeit auf, das zeigt Fortschritt über Wochen."
      ],
      varianten: "Leichter: 3 bis 4 Wiederholungen, längere Pausen. Schwerer: mehr Wiederholungen oder Pause auf 1 Minute verkürzen.",
      sicherheit: "Bei Rückenbeschwerden saubere Technik vor Tempo. Hohe Kreislaufbelastung, bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "rudern_pyramide",
    name: "Pyramidenintervalle am Rudergerät",
    auch: ["Rowing Pyramid", "Pyramid Intervals", "1-2-3-4-3-2-1 Row"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    hinweis: "1, 2, 3, 4, 3, 2, 1 Minute zügig, Pause jeweils halb so lang wie die Belastung.",
    info: {
      kurz: "Intervalle mit steigender und dann fallender Dauer, zum Beispiel 1, 2, 3, 4, 3, 2 und 1 Minute. Verbindet kurze, schnelle und längere, gleichmäßige Belastungen in einer Einheit.",
      ausfuehrung: [
        "Rudere 10 Minuten locker ein.",
        "Rudere den ersten 1-Minuten-Abschnitt zügig, gefühlt 7 bis 8 von 10, und erhole dich 30 Sekunden locker.",
        "Steigere die Dauer auf 2, 3 und 4 Minuten, die Pause ist jeweils halb so lang wie der Abschnitt davor.",
        "Je länger der Abschnitt, desto etwas ruhiger das Tempo. Bei 4 Minuten liegst du grob bei 85 bis 90 Prozent der maximalen Herzfrequenz.",
        "Geh danach wieder hinunter: 3, 2 und 1 Minute, die kürzeren Abschnitte dürfen schneller werden.",
        "Rudere 5 bis 10 Minuten locker aus."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. In den langen Abschnitten bewusst ruhig und gleichmäßig atmen.",
      fehler: [
        "Auf dem Weg nach oben zu schnell: Die 4 Minuten sollen noch gleichmäßig gelingen.",
        "Pausen im Stillstand: Locker weiterrudern.",
        "Gleiches Tempo für alle Abschnitte: Kurze Abschnitte etwas schneller, lange etwas ruhiger.",
        "Technik vernachlässigen: Auch bei Ermüdung Beine, Körper, Arme."
      ],
      vorteile: [
        "Abwechslungsreich und mental gut einteilbar.",
        "Trainiert verschiedene Intensitäten in einer Einheit.",
        "Verbessert Ausdauer und Tempohärte.",
        "Gelenkschonend durch die Ruderbewegung."
      ],
      tipps: [
        "Auf dem Monitor als Intervallprogramm vorher einstellen, dann musst du nicht rechnen.",
        "Auf dem Rückweg der Pyramide das Tempo leicht anziehen, das macht es motivierend.",
        "Funktioniert genauso auf dem Rad."
      ],
      varianten: "Leichter: nur 1, 2, 3, 2, 1 Minute. Schwerer: Pausen kürzer oder bis 5 Minuten hinauf.",
      sicherheit: "Bei Rückenbeschwerden die Intensität moderat halten. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },

  // ---------- Intervalle: Schwelle und Tempo ----------
  {
    id: "tempodauerlauf",
    name: "Tempodauerlauf",
    auch: ["Tempo Run", "Threshold Run", "Schwellenlauf"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["laufen"],
    hinweis: "„Angenehm hart“: 20 bis 30 Minuten gleichmäßig, nur noch kurze Sätze möglich.",
    info: {
      kurz: "Ein durchgehender Lauf von etwa 20 bis 30 Minuten im Bereich der Laktatschwelle, also „angenehm hart“. Verbessert das Tempo, das du über längere Zeit halten kannst, und ist eine Kerneinheit für Läufer.",
      ausfuehrung: [
        "Lauf 10 bis 15 Minuten locker ein und mach 3 bis 4 kurze Steigerungen.",
        "Steigere dann auf dein Tempolauf-Tempo: Du kannst noch kurze Sätze sagen, aber keine Unterhaltung führen. Grob 80 bis 90 Prozent der maximalen Herzfrequenz, gefühlt 6 bis 7 von 10.",
        "Als Orientierung entspricht das ungefähr dem Tempo, das du in einem Wettkampf von etwa einer Stunde laufen könntest.",
        "Halte das Tempo 20 bis 30 Minuten gleichmäßig. Es soll fordernd, aber kontrolliert sein, nicht am Limit.",
        "Achte auf eine lockere Haltung: Schultern unten, Hände locker, ruhige Atmung.",
        "Lauf 10 Minuten locker aus."
      ],
      atmung: "Rhythmisch und kräftig atmen, ein häufiges Muster ist zwei Schritte ein, zwei Schritte aus. Die Atmung ist schnell, aber unter Kontrolle.",
      fehler: [
        "Zu schnell: Ein Tempolauf ist kein Wettkampf. Wenn du am Ende komplett leer bist, war es zu schnell.",
        "Ungleichmäßig: Erst zu schnell, dann einbrechen. Lieber gleichmäßig oder leicht steigernd.",
        "Ohne Grundlage: Ein Tempolauf setzt voraus, dass du mindestens 30 Minuten locker laufen kannst.",
        "Bei Hitze dasselbe Tempo erzwingen: Dann nach Gefühl laufen und das Tempo senken."
      ],
      vorteile: [
        "Verbessert die Laktatschwelle, also das Tempo, das du lange halten kannst.",
        "Trainiert Tempogefühl und mentale Härte.",
        "Direkte Vorbereitung auf Läufe über 5 km bis Halbmarathon.",
        "Mittlere Intensität, daher besser erholbar als sehr harte Intervalle."
      ],
      tipps: [
        "Eine flache Strecke oder das Laufband macht das gleichmäßige Tempo einfacher.",
        "Wer 30 Minuten am Stück noch nicht schafft, teilt die Zeit in Schwellenintervalle auf.",
        "Plane den Tempolauf nicht direkt vor oder nach einer anderen harten Einheit."
      ],
      varianten: "Leichter: 15 bis 20 Minuten oder als Schwellenintervalle mit kurzen Pausen. Schwerer: 30 bis 40 Minuten oder im zweiten Teil leicht schneller.",
      sicherheit: "Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen. Bei Schmerzen im Bewegungsapparat abbrechen und locker auslaufen."
    }
  },
  {
    id: "schwellenintervalle_lauf",
    name: "Schwellenintervalle laufen",
    auch: ["Cruise Intervals", "Threshold Intervals", "Tempo Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"], ["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["laufen", "fussball"],
    hinweis: "Zum Beispiel 4 bis 5 mal 6 Minuten angenehm hart, je 1 Minute Trabpause.",
    info: {
      kurz: "Der Tempodauerlauf in Abschnitte geteilt, zum Beispiel 4 bis 5 mal 6 Minuten mit einer Minute Trabpause. Bekannt als Cruise Intervals vom Lauftrainer Jack Daniels. Du sammelst mehr Zeit an der Schwelle bei weniger Gesamtermüdung.",
      ausfuehrung: [
        "Lauf 10 bis 15 Minuten locker ein und mach 3 bis 4 Steigerungen.",
        "Lauf den ersten Abschnitt im Tempolauf-Tempo: angenehm hart, nur kurze Sätze möglich, grob 80 bis 90 Prozent der maximalen Herzfrequenz, gefühlt 6 bis 7 von 10.",
        "Trab danach etwa 1 Minute locker, die Pause ist kurz, damit der Puls nicht zu weit sinkt.",
        "Wiederhole das 3 bis 5 Mal, Abschnittsdauer 5 bis 10 Minuten.",
        "Halte alle Abschnitte im gleichen Tempo, der letzte darf minimal schneller sein.",
        "Lauf 10 Minuten locker aus."
      ],
      atmung: "Rhythmisch und kontrolliert, ähnlich wie im Tempodauerlauf. In der Trabpause tief ausatmen.",
      fehler: [
        "Abschnitte zu schnell, weil sie kürzer sind: Das Tempo bleibt das der Schwelle, nicht schneller.",
        "Pause zu lang: Mehr als 1 bis 2 Minuten nehmen den Reiz weg.",
        "Pausen im Stehen: Locker traben.",
        "Zu oft pro Woche: Eine Schwelleneinheit pro Woche reicht neben anderem Training meist aus."
      ],
      vorteile: [
        "Mehr Gesamtzeit an der Schwelle als im durchgehenden Tempolauf.",
        "Gut für Einsteiger ins Tempotraining, weil die kurzen Pausen den Kopf entlasten.",
        "Verbessert die Fähigkeit, ein zügiges Tempo lange zu halten.",
        "Hilft Fußballern, über 90 Minuten ein hohes Laufpensum zu halten."
      ],
      tipps: [
        "Auf dem Laufband Tempo fest einstellen und nicht nachjustieren.",
        "Die Gesamtzeit an der Schwelle liegt bei 20 bis 40 Minuten.",
        "Gute Einheit für Phasen, in denen du auf einen Wettkampf hinarbeitest."
      ],
      varianten: "Leichter: 3 mal 5 Minuten. Schwerer: 3 mal 10 Minuten oder kürzere Trabpausen.",
      sicherheit: "Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen. Bei Beschwerden in Knie, Achillessehne oder Schienbein Umfang reduzieren und abklären."
    }
  },
  {
    id: "schwellenintervalle_rad",
    name: "Schwellenintervalle auf dem Rad",
    auch: ["Threshold Intervals Bike", "Sweet Spot Intervals", "2x20", "FTP Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "beinbeuger"],
    geraete: [["fahrrad"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 2,
    sport: ["laufen", "fussball"],
    hinweis: "Zum Beispiel 3 mal 10 Minuten angenehm hart, je 3 bis 5 Minuten locker.",
    info: {
      kurz: "Längere, gleichmäßige Abschnitte knapp unter oder an der Schwelle, zum Beispiel 3 mal 10 oder 2 mal 20 Minuten. Bei Radsportlern unter Namen wie Sweet Spot oder 2x20 bekannt und sehr wirksam für die Dauerleistung.",
      ausfuehrung: [
        "Fahr 10 bis 15 Minuten locker ein mit zwei bis drei kurzen Steigerungen.",
        "Erhöhe den Widerstand auf eine Leistung, die du etwa eine Stunde halten könntest, oder etwas darunter. Gefühlt 6 bis 7 von 10, grob 80 bis 90 Prozent der maximalen Herzfrequenz, nur noch kurze Sätze möglich.",
        "Fahr den Abschnitt gleichmäßig mit etwa 85 bis 95 Umdrehungen pro Minute.",
        "Tritt danach 3 bis 5 Minuten locker.",
        "Wiederhole das, bis du insgesamt 20 bis 40 Minuten an der Schwelle gesammelt hast.",
        "Fahr 10 Minuten locker aus."
      ],
      atmung: "Kräftig, aber kontrolliert atmen. Wenn du anfängst zu keuchen, ist die Leistung zu hoch.",
      fehler: [
        "Zu hohe Leistung: Schwellentraining ist hart, aber nicht maximal. Die letzte Minute soll noch kontrolliert sein.",
        "Trittfrequenz sinkt stark ab: Einen leichteren Gang wählen, statt sich durchzudrücken.",
        "Zu kurze Pausen bei Einsteigern: Anfangs lieber 5 Minuten locker treten.",
        "Hitze im Raum: Der Puls steigt ohne mehr Leistung, Ventilator nutzen."
      ],
      vorteile: [
        "Verbessert die Dauerleistung, also die Leistung, die du lange halten kannst.",
        "Gut messbar über Watt und gut planbar.",
        "Gelenkschonend und wenig verletzungsanfällig.",
        "Für Läufer eine Möglichkeit, Schwellentraining ohne Laufbelastung zu machen."
      ],
      tipps: [
        "Wer eine Wattmessung hat, kann die Leistung als Prozentsatz der Schwellenleistung steuern. Ohne Messung reicht das Gefühl 6 bis 7 von 10.",
        "Konzentriere dich auf einen ruhigen Oberkörper und runde Tritte.",
        "Beginne mit 3 mal 8 Minuten und verlängere die Abschnitte über Wochen."
      ],
      varianten: "Leichter: 3 mal 6 bis 8 Minuten. Schwerer: 2 mal 20 Minuten oder 3 mal 15 Minuten.",
      sicherheit: "Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "schwellenintervalle_rudern",
    name: "Schwellenintervalle am Rudergerät",
    auch: ["Threshold Row", "Rowing Threshold Intervals", "AT Pieces"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "latissimus", "oberer_ruecken", "bauch"],
    geraete: [["rudergeraet"]],
    belastung: "zeit",
    hoehe_cm: 130,
    gelenke: { ruecken: 1 },
    stufe: 2,
    hinweis: "Zum Beispiel 3 mal 8 Minuten bei Schlagzahl 24, je 3 Minuten locker.",
    info: {
      kurz: "Längere Ruderabschnitte im Bereich der Schwelle, etwa 3 mal 8 bis 10 Minuten bei mittlerer Schlagzahl. Verbessert die Fähigkeit, eine zügige 500-m-Zeit lange zu halten.",
      ausfuehrung: [
        "Rudere 10 Minuten locker ein.",
        "Rudere den ersten Abschnitt mit etwa 22 bis 26 Schlägen pro Minute in einem Tempo, das angenehm hart ist: nur noch kurze Sätze, grob 80 bis 90 Prozent der maximalen Herzfrequenz, gefühlt 6 bis 7 von 10.",
        "Halte die Zeit pro 500 m möglichst gleich und die Technik sauber.",
        "Rudere danach 2 bis 3 Minuten locker.",
        "Wiederhole das 3 bis 4 Mal.",
        "Rudere 5 bis 10 Minuten locker aus."
      ],
      atmung: "Beim Zug ausatmen, beim Vorrollen einatmen. Gleichmäßiger Atemrhythmus passend zur Schlagzahl.",
      fehler: [
        "Schlagzahl zu hoch: An der Schwelle sind kräftige Schläge mit mittlerer Frequenz wirksamer.",
        "500-m-Zeit schwankt stark: Gleichmäßigkeit ist wichtiger als ein schneller Start.",
        "Rücken rundet bei Ermüdung: Dann das Tempo leicht senken.",
        "Pause ohne Rudern: Locker weiterrudern."
      ],
      vorteile: [
        "Steigert die Dauerleistung mit dem ganzen Körper.",
        "Keine Stoßbelastung.",
        "Gute Ergänzung zu kurzen, harten Ruderintervallen.",
        "Verbessert das Gefühl für Tempo und Kraftverteilung."
      ],
      tipps: [
        "Ein guter Anhalt: 500-m-Zeit etwa 6 bis 10 Sekunden langsamer als in harten 500-m-Wiederholungen.",
        "Technik-Fokus pro Abschnitt wählen, zum Beispiel ruhiges Vorrollen.",
        "Einmal pro Woche reicht neben anderen Einheiten."
      ],
      varianten: "Leichter: 3 mal 5 bis 6 Minuten. Schwerer: 3 mal 12 Minuten oder 2 mal 15 Minuten.",
      sicherheit: "Bei Rückenbeschwerden Dauer und Intensität vorsichtig steigern. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },

  // ---------- Intervalle: Gelände, Hügel, Treppe ----------
  {
    id: "fahrtspiel",
    name: "Fahrtspiel",
    auch: ["Fartlek", "Speed Play"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "waden", "gesaess", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 1,
    sport: ["laufen", "fussball"],
    hinweis: "Tempo nach Lust und Gelände wechseln: Laternen, Hügel, Kurven als Marken.",
    info: {
      kurz: "Ein Lauf mit freien, spielerischen Tempowechseln, entwickelt in Schweden. Statt fester Zeiten nutzt du das Gelände und dein Gefühl: mal zügig bis zur nächsten Kreuzung, mal locker bis zum Waldrand.",
      ausfuehrung: [
        "Lauf 10 Minuten locker ein.",
        "Such dir unterwegs Marken, zum Beispiel eine Laterne, einen Baum oder den nächsten Hügel, und lauf bis dorthin zügig.",
        "Variiere die Länge: kurze schnelle Abschnitte von 20 bis 30 Sekunden und längere zügige von 1 bis 3 Minuten. Gefühlt reicht die Spanne von 6 bis 9 von 10.",
        "Lauf danach so lange locker weiter, bis du dich wieder frisch fühlst.",
        "Setze 6 bis 12 schnellere Abschnitte über eine Gesamtdauer von 30 bis 45 Minuten.",
        "Lauf 5 bis 10 Minuten locker aus."
      ],
      atmung: "Locker in den ruhigen Phasen, kräftig und rhythmisch in den schnellen Abschnitten.",
      fehler: [
        "Jeden Abschnitt voll laufen: Fahrtspiel ist abwechslungsreich, nicht maximal.",
        "Keine echten Erholungsphasen: Locker traben, bis der Atem wieder ruhig ist.",
        "Immer gleiche Abschnitte: Die Abwechslung ist gerade der Sinn.",
        "Auf unebenem Gelände zu schnell: Bei Wurzeln und Steinen nur kontrollierte Tempowechsel."
      ],
      vorteile: [
        "Verbessert Ausdauer und Tempowechsel gleichzeitig.",
        "Spielerisch und mental entlastend, ohne Uhr und feste Vorgaben.",
        "Sehr spielnah für Fußball, wo Tempowechsel ständig vorkommen.",
        "Gut für Einsteiger ins Tempotraining."
      ],
      tipps: [
        "Lauf in der Gruppe abwechselnd vorn: Wer vorn ist, bestimmt Tempo und Länge.",
        "Hügelige Strecken eignen sich besonders gut.",
        "Einmal pro Woche ein Fahrtspiel bringt Abwechslung in reine Grundlagenwochen."
      ],
      varianten: "Leichter: wenige, kurze Abschnitte und viel lockeres Laufen. Schwerer: mehr und längere schnelle Abschnitte.",
      sicherheit: "Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen. Auf unebenem Untergrund auf die Sprunggelenke achten."
    }
  },
  {
    id: "berglauf_wiederholungen",
    name: "Bergläufe",
    auch: ["Hill Repeats", "Hill Intervals", "Bergintervalle"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["gesaess", "waden", "quadrizeps", "beinbeuger", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { sprunggelenk: 1, knie: 1 },
    stufe: 2,
    sport: ["laufen", "fussball"],
    hinweis: "6 bis 10 mal 60 bis 90 Sekunden zügig bergauf, langsam bergab zurück.",
    info: {
      kurz: "Wiederholte zügige Läufe einen Hügel hinauf mit lockerem Zurückgehen oder Traben. Trainiert Ausdauer und Kraft der Beine gleichzeitig und ist schonender für die Gelenke als schnelle Läufe in der Ebene.",
      ausfuehrung: [
        "Such dir einen gleichmäßigen Anstieg mit mäßiger Steigung, auf dem du 60 bis 90 Sekunden hinauflaufen kannst.",
        "Lauf 10 bis 15 Minuten locker ein.",
        "Lauf den Hügel zügig hinauf, gefühlt 7 bis 8 von 10, grob 85 bis 90 Prozent der maximalen Herzfrequenz am Ende des Anstiegs.",
        "Mach kurze, schnelle Schritte, lehn dich leicht aus den Sprunggelenken nach vorn und setz die Arme kräftig ein.",
        "Trab oder geh langsam hinunter, das ist deine Erholung.",
        "Wiederhole das 6 bis 10 Mal.",
        "Lauf 10 Minuten locker in der Ebene aus."
      ],
      atmung: "Bergauf kräftig und rhythmisch atmen, bergab den Atem bewusst beruhigen.",
      fehler: [
        "Aus der Hüfte nach vorn knicken: Oberkörper aufrecht, die Vorlage kommt aus den Sprunggelenken.",
        "Zu lange Schritte: Bergauf kurze, schnelle Schritte machen.",
        "Bergab schnell zurück: Das belastet Knie und Oberschenkel stark, langsam traben oder gehen.",
        "Zu steiler Hügel: Wenn du nur noch stapfen kannst, ist die Steigung zu groß."
      ],
      vorteile: [
        "Verbindet Ausdauertraining mit Kraft für Gesäß, Waden und Oberschenkel.",
        "Geringere Stoßbelastung als schnelle Läufe in der Ebene.",
        "Verbessert die Laufökonomie und den kraftvollen Abdruck.",
        "Gut für Fußballer zur Vorbereitung auf intensive Phasen."
      ],
      tipps: [
        "Den Hügel in der Woche vorher einmal locker ablaufen, um die Länge zu kennen.",
        "Alle Wiederholungen sollen ähnlich schnell sein, die letzte darf die schnellste sein.",
        "Auf dem Laufband geht es ähnlich mit 6 bis 8 Prozent Steigung."
      ],
      varianten: "Leichter: 30 bis 45 Sekunden bergauf, weniger Wiederholungen oder zügiges Bergaufgehen. Schwerer: längere Anstiege oder mehr Wiederholungen.",
      sicherheit: "Bei Achillessehnen- oder Wadenbeschwerden vorsichtig mit flacher Steigung beginnen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "laufband_steigungsintervalle",
    name: "Steigungsintervalle auf dem Laufband",
    auch: ["Incline Intervals", "Treadmill Hill Intervals", "Incline Walk Intervals"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["gesaess", "waden", "beinbeuger", "quadrizeps"],
    geraete: [["laufband"]],
    belastung: "zeit",
    hoehe_cm: 230,
    gelenke: { sprunggelenk: 1 },
    stufe: 1,
    sport: ["golf", "laufen"],
    golf: 1,
    hinweis: "Wechsel aus steil und flach, gehend oder joggend, ohne festzuhalten.",
    info: {
      kurz: "Intervalle, bei denen du die Steigung des Laufbands im Wechsel erhöhst und senkst, im zügigen Gehen oder lockeren Joggen. Bringt den Puls hoch, ohne schnell laufen zu müssen, und ist deshalb sehr gelenkschonend.",
      ausfuehrung: [
        "Geh 5 Minuten flach warm und befestige die Sicherheitsleine.",
        "Stell für den harten Abschnitt eine Steigung von 8 bis 15 Prozent ein und geh zügig oder jogge locker, gefühlt 7 bis 8 von 10, grob 80 bis 90 Prozent der maximalen Herzfrequenz.",
        "Halte das 1 bis 2 Minuten, ohne dich am Geländer festzuhalten.",
        "Senke die Steigung danach auf 0 bis 2 Prozent und geh 1 bis 2 Minuten locker.",
        "Wiederhole den Wechsel 6 bis 10 Mal.",
        "Geh zum Abschluss 5 Minuten flach und locker aus."
      ],
      atmung: "In den steilen Abschnitten kräftig und rhythmisch atmen, in den flachen ruhig ausatmen.",
      fehler: [
        "Am Geländer festhalten: Das nimmt einen großen Teil der Arbeit weg. Lieber Steigung oder Tempo senken.",
        "Nur auf dem Vorfuß: Ganzen Fuß aufsetzen, um die Waden nicht zu überlasten.",
        "Nach vorn gebeugt: Aufrecht bleiben, leichte Vorlage aus den Sprunggelenken.",
        "Zu schnelle Steigungswechsel ohne Gewöhnung: Erst mit moderater Steigung beginnen."
      ],
      vorteile: [
        "Hoher Puls bei geringer Stoßbelastung.",
        "Kräftigt Gesäß, Waden und Beinbeuger.",
        "Auch für Einsteiger und Menschen mit Knie- oder Hüftbeschwerden oft gut machbar.",
        "Bereitet auf hügelige Golfplätze und Bergwanderungen vor."
      ],
      tipps: [
        "Wer schon gut trainiert ist, kann in den steilen Abschnitten locker joggen.",
        "Tempo und Steigung notieren und über Wochen langsam steigern.",
        "Gute Alternative zu Laufintervallen an Tagen, an denen die Beine schwer sind."
      ],
      varianten: "Leichter: 5 bis 8 Prozent Steigung, kürzere harte Abschnitte. Schwerer: höhere Steigung, Joggen statt Gehen oder längere Abschnitte.",
      sicherheit: "Bei Achillessehnen- oder Wadenbeschwerden mit niedriger Steigung beginnen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "treppenlaeufe",
    name: "Treppenläufe",
    auch: ["Stair Runs", "Stair Sprints", "Stadium Stairs"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball", "laufen"],
    hinweis: "Zügig hoch, langsam und kontrolliert runter gehen.",
    info: {
      kurz: "Zügiges Hochlaufen einer langen Treppe, zum Beispiel im Stadion oder an einer Außentreppe, mit langsamem Hinuntergehen als Pause. Fordert Herz, Kreislauf und Beinmuskulatur sehr stark.",
      ausfuehrung: [
        "Wärm dich 10 Minuten mit lockerem Laufen und einigen Durchgängen Treppensteigen auf.",
        "Lauf die Treppe zügig hinauf, Stufe für Stufe oder jede zweite, gefühlt 8 bis 9 von 10.",
        "Setz den Fuß vollständig auf die Stufe, drück dich kräftig ab und nimm die Arme aktiv mit.",
        "Geh die Treppe langsam und kontrolliert wieder hinunter, das ist deine Pause.",
        "Wiederhole das 6 bis 10 Mal, je nach Länge der Treppe.",
        "Lauf oder geh 5 bis 10 Minuten locker aus."
      ],
      atmung: "Beim Hochlaufen kräftig und rhythmisch atmen, beim Hinuntergehen den Atem beruhigen.",
      fehler: [
        "Runterlaufen: Abwärts immer gehen und das Geländer in Reichweite haben.",
        "Nur auf den Zehenspitzen: Den Fuß möglichst vollständig aufsetzen.",
        "Ohne Aufwärmen: Die Belastung ist sofort hoch.",
        "Bei Nässe oder Glätte: Dann lieber Bergläufe oder Laufband."
      ],
      vorteile: [
        "Sehr intensive Belastung für Herz und Kreislauf in kurzer Zeit.",
        "Kräftigt Oberschenkel, Gesäß und Waden.",
        "Trainiert Kraftausdauer und kraftvollen Abdruck.",
        "Gut für Fußballer in der Vorbereitung."
      ],
      tipps: [
        "Jede zweite Stufe betont Gesäß und Oberschenkel, jede Stufe die Schrittfrequenz.",
        "Kurze, gleichmäßige Treppen sind für Einsteiger besser als lange, steile Stadiontreppen.",
        "Gute Rutschfestigkeit der Schuhe ist wichtig."
      ],
      varianten: "Leichter: zügiges Treppensteigen statt Laufen. Schwerer: längere Treppen, mehr Wiederholungen oder kürzere Pausen.",
      sicherheit: "Bei Kniebeschwerden vorsichtig sein, vor allem beim Hinuntergehen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },

  // ---------- Intervalle: Fußball ----------
  {
    id: "pendellaeufe",
    name: "Pendelläufe",
    auch: ["Shuttle Runs", "Shuttle Run Intervals", "Suicides"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "beinbeuger", "adduktoren", "waden"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { knie: 2, sprunggelenk: 2, huefte: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "Zügig hin und her zwischen zwei Markierungen, sauber abbremsen und wenden.",
    info: {
      kurz: "Wiederholte Läufe zwischen zwei Markierungen mit schnellem Abbremsen und Wenden, zum Beispiel 20 m hin und zurück. Trainiert die Ausdauer für Sportarten mit Richtungswechseln wie Fußball.",
      ausfuehrung: [
        "Leg zwei Markierungen im Abstand von etwa 20 m auf Rasen oder Kunstrasen.",
        "Wärm dich 10 Minuten mit lockerem Laufen, Seitwärtslaufen und einigen Steigerungen auf.",
        "Lauf 15 bis 30 Sekunden zügig zwischen den Markierungen hin und her, gefühlt 8 bis 9 von 10.",
        "Brems vor der Markierung mit kurzen Schritten ab, beuge Knie und Hüfte, berühre die Linie mit dem Fuß und beschleunige zurück.",
        "Pausiere danach 30 bis 60 Sekunden aktiv im Gehen.",
        "Wiederhole das 6 bis 12 Mal und wechsle die Wendeseite, damit beide Beine gleich belastet werden.",
        "Lauf 5 bis 10 Minuten locker aus."
      ],
      atmung: "Kräftig weiteratmen, beim Abbremsen nicht pressen. In den Pausen tief ausatmen.",
      fehler: [
        "Aufrecht abbremsen: Das belastet die Knie stark. Tief werden, Schritte verkürzen.",
        "Immer über dieselbe Seite wenden: Seiten abwechseln.",
        "Knie fällt beim Wenden nach innen: Knie über dem Fuß halten.",
        "Auf rutschigem Untergrund: Nur mit passenden Schuhen und griffigem Boden."
      ],
      vorteile: [
        "Spezifische Ausdauer für Spiele mit Richtungswechseln.",
        "Trainiert Abbremsen und Beschleunigen unter Ermüdung.",
        "Kann helfen, die Belastbarkeit für die letzte Phase eines Spiels zu verbessern.",
        "Wenig Platz und Material nötig."
      ],
      tipps: [
        "Mit kürzeren Abständen (10 m) wird es eher eine Brems- und Wendeübung, mit längeren (30 bis 40 m) eher Ausdauer.",
        "Zähle die Anzahl der Bahnen pro Durchgang, um Fortschritt zu sehen.",
        "Nicht in den letzten 48 Stunden vor einem Spiel."
      ],
      varianten: "Leichter: kürzere Belastungen und längere Pausen oder Wenden im Bogen. Schwerer: längere Belastungen, kürzere Pausen oder mehrere Distanzen (5, 10, 15 m).",
      sicherheit: "Hohe Belastung für Knie und Sprunggelenke durch das Abbremsen. Bei Kniebeschwerden, Sprunggelenkproblemen oder nach Bandverletzungen nur nach Freigabe."
    }
  },
  {
    id: "box_to_box_laeufe",
    name: "Box-to-Box-Läufe",
    auch: ["Box to Box Runs", "Box-to-Box Sprints", "Football Conditioning Runs"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf"],
    sekundaer: ["quadrizeps", "gesaess", "beinbeuger", "waden", "hueftbeuger"],
    geraete: [["draussen"]],
    belastung: "zeit",
    hoehe_cm: 0,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    sport: ["fussball"],
    hinweis: "Von Strafraum zu Strafraum zügig, zurück gehend oder trabend.",
    info: {
      kurz: "Zügige Läufe von Strafraum zu Strafraum über das Fußballfeld mit lockerer Erholung auf dem Rückweg. Ein Klassiker im Fußballtraining, der die Ausdauer für wiederholte schnelle Läufe im Spiel verbessert.",
      ausfuehrung: [
        "Wärm dich 10 bis 15 Minuten mit lockerem Laufen, Mobilisation und einigen Steigerungen auf.",
        "Start an der Strafraumlinie und lauf zügig bis zur gegenüberliegenden Strafraumlinie, gefühlt 8 bis 9 von 10, aber kein Vollsprint.",
        "Lauf locker aus und geh oder trab die Strecke zurück. Die Zeit für den Rückweg ist deine Pause.",
        "Wiederhole das 6 bis 10 Mal. Die Zeiten der Läufe sollen ähnlich bleiben.",
        "Halte eine aufrechte Haltung mit kräftigem Armeinsatz.",
        "Lauf 5 bis 10 Minuten locker aus und dehne leicht."
      ],
      atmung: "Kräftig und rhythmisch atmen, auf dem Rückweg bewusst tief und ruhig.",
      fehler: [
        "Vollsprint im ersten Lauf: Dann bricht die Serie ein. Gleichmäßig zügig laufen.",
        "Zu kurze Pausen am Anfang: Erst die Zeiten stabil halten, dann die Pause verkürzen.",
        "Ohne Aufwärmen: Beinbeuger und Leisten brauchen Vorbereitung.",
        "Zu nah an einem Spiel: Nicht in den zwei Tagen vor einem Spiel."
      ],
      vorteile: [
        "Sehr spielnah: Die Strecke entspricht vielen Läufen im Spiel.",
        "Verbessert die Fähigkeit, sich zwischen schnellen Läufen zu erholen.",
        "Einfach zu organisieren, auch für die ganze Mannschaft.",
        "Trainiert die Ausdauer, die man für die zweite Halbzeit braucht."
      ],
      tipps: [
        "Miss die Laufzeit für jeden Durchgang. Steigen die Zeiten deutlich, Serie beenden.",
        "Mit Ball am Fuß wird es technischer und spielnäher, aber weniger intensiv.",
        "In der Saisonvorbereitung häufiger, in der Saison nur sparsam einsetzen."
      ],
      varianten: "Leichter: halbe Feldlänge oder längere Pausen. Schwerer: mehr Wiederholungen oder festgelegte, kürzere Pausenzeit.",
      sicherheit: "Bei Beinbeuger- oder Leistenbeschwerden nur nach Abklärung. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },

  // ---------- Intervalle: Körpergewicht ----------
  {
    id: "emom_koerpergewicht",
    name: "EMOM-Cardio mit Körpergewicht",
    auch: ["Bodyweight EMOM", "Every Minute on the Minute", "Burpee EMOM"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf", "ganzkoerper"],
    sekundaer: ["quadrizeps", "gesaess", "brust", "schulter_vorn", "trizeps", "bauch"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 260,
    gelenke: { knie: 1, schulter: 1, handgelenk: 1 },
    stufe: 2,
    hinweis: "Zu Beginn jeder Minute die Wiederholungen, Rest der Minute ist Pause.",
    info: {
      kurz: "Bei EMOM (Every Minute on the Minute) startest du zu Beginn jeder Minute eine festgelegte Anzahl Wiederholungen einer Übung wie Burpees, Kniebeugensprünge oder Mountain Climbers. Die restliche Zeit der Minute ist Pause.",
      ausfuehrung: [
        "Wärm dich 5 bis 10 Minuten mit Gehen auf der Stelle, Hampelmann, Kniebeugen und Armkreisen auf.",
        "Wähle 2 bis 4 Übungen, zum Beispiel Burpees, Kniebeugensprünge, Mountain Climbers und Ausfallschritte im Wechsel.",
        "Leg die Wiederholungen so fest, dass du sie in 30 bis 40 Sekunden schaffst, zum Beispiel 6 bis 10 Burpees.",
        "Starte zu Beginn jeder Minute, mach die Wiederholungen zügig und sauber und ruhe dich für den Rest der Minute aus.",
        "Wechsle die Übung jede Minute und wiederhole den Ablauf für 10 bis 20 Minuten. Gefühlt liegst du bei 7 bis 8 von 10.",
        "Wenn du die Wiederholungen nicht mehr in der Minute schaffst, reduziere die Anzahl.",
        "Geh zum Schluss 3 bis 5 Minuten locker auf der Stelle und dehne leicht."
      ],
      atmung: "Bei Burpees beim Hochspringen ausatmen, bei Kniebeugensprüngen beim Absprung. In der Pause tief und ruhig atmen.",
      fehler: [
        "Zu viele Wiederholungen: Wenn kaum Pause bleibt, kippt das Training in Erschöpfung. 15 bis 25 Sekunden Pause sollen übrig sein.",
        "Unsaubere Burpees: Hüfte hängt durch oder Rücken rundet sich. Lieber langsamer und ohne Liegestütz.",
        "Harte Landungen: Weich über den Vorfuß abfedern, Knie zeigen in Richtung der Zehen.",
        "Ohne Aufwärmen: Sprünge brauchen warme Muskeln und Sehnen."
      ],
      vorteile: [
        "Ausdauertraining ohne Gerät, gut zu Hause oder draußen.",
        "Klare Struktur, die Pausen sind automatisch eingebaut.",
        "Verbindet Herz-Kreislauf-Training mit Kraftausdauer für den ganzen Körper.",
        "Leicht anzupassen über Wiederholungen und Übungsauswahl."
      ],
      tipps: [
        "Ein Intervall-Timer mit Minutensignal macht EMOM einfach.",
        "Die Wiederholungen so wählen, dass die Qualität in der letzten Minute noch stimmt.",
        "Gut als kurze Einheit, wenn nur 15 bis 20 Minuten Zeit sind."
      ],
      varianten: "Leichter: ohne Sprünge (Burpee ohne Sprung, Kniebeuge statt Sprung, Schritt statt Sprung). Schwerer: mehr Wiederholungen pro Minute oder längere Gesamtdauer.",
      sicherheit: "Bei Knie-, Schulter- oder Handgelenkbeschwerden Sprünge und Stützübungen ersetzen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
  {
    id: "hiit_koerpergewicht",
    name: "Körpergewichts-HIIT 40/20",
    auch: ["Bodyweight HIIT", "40/20 Circuit", "Cardio HIIT ohne Geräte"],
    muster: "ausdauer_intervall",
    art: "ausdauer",
    muskeln: ["herz_kreislauf", "ganzkoerper"],
    sekundaer: ["quadrizeps", "gesaess", "waden", "bauch", "schulter_vorn", "hueftbeuger"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 260,
    gelenke: { knie: 1, sprunggelenk: 1 },
    stufe: 2,
    hinweis: "40 Sekunden zügig, 20 Sekunden Pause, 4 bis 6 Übungen im Kreis.",
    info: {
      kurz: "Intervalltraining mit Übungen wie Hampelmann, Kniehebelauf, Mountain Climbers und Kniebeugensprüngen: 40 Sekunden zügig, 20 Sekunden Pause. Bringt den Puls ohne Gerät schnell in einen hohen Bereich.",
      ausfuehrung: [
        "Wärm dich 5 bis 10 Minuten locker auf, zum Beispiel mit Gehen auf der Stelle, leichten Kniebeugen und Armkreisen.",
        "Wähle 4 bis 6 Übungen, zum Beispiel Hampelmann, Kniehebelauf auf der Stelle, Mountain Climbers, Kniebeugensprünge, Skater-Sprünge und Plank-Jacks.",
        "Mach jede Übung 40 Sekunden zügig, gefühlt 7 bis 8 von 10, grob 80 bis 90 Prozent der maximalen Herzfrequenz.",
        "Pausiere 20 Sekunden und geh dann zur nächsten Übung.",
        "Nach allen Übungen 1 bis 2 Minuten Pause, dann 2 bis 4 Runden.",
        "Geh 3 bis 5 Minuten locker auf der Stelle und dehne leicht."
      ],
      atmung: "Kräftig und rhythmisch weiteratmen, nicht pressen. In den 20-Sekunden-Pausen tief ausatmen.",
      fehler: [
        "Die ersten Übungen zu hart: Gleichmäßig zügig, die letzte Runde soll noch sauber sein.",
        "Harte Landungen: Weich abfedern, leise landen.",
        "Hüfte zu hoch oder durchhängend bei Mountain Climbers: Körper bildet eine Linie.",
        "Knie fällt bei Sprüngen nach innen: Knie zeigen in Richtung der Zehen."
      ],
      vorteile: [
        "Kein Gerät nötig, überall möglich.",
        "Bringt den Puls schnell hoch und verbessert die Ausdauer in kurzer Zeit.",
        "Trainiert zusätzlich Koordination und Kraftausdauer.",
        "Gut anpassbar durch Austausch einzelner Übungen."
      ],
      tipps: [
        "Für Einsteiger zuerst 30/30 statt 40/20.",
        "Stoßarme Varianten wählen, wenn Nachbarn unter dir wohnen: Schrittwechsel statt Sprung.",
        "Eine Timer-App mit Ansage der nächsten Übung erleichtert den Ablauf."
      ],
      varianten: "Leichter: 30 Sekunden Arbeit, 30 Sekunden Pause oder Übungen ohne Sprünge. Schwerer: mehr Runden oder 45/15.",
      sicherheit: "Bei Knie-, Sprunggelenk- oder Beckenbodenbeschwerden die Sprünge durch stoßarme Varianten ersetzen. Bei Herz-Kreislauf-Erkrankungen vorher ärztlich abklären lassen."
    }
  },
]
