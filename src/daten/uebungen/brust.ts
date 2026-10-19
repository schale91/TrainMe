import type { Uebung } from "../../logik/typen"

// Brust: horizontales Drücken (Langhantel, Kurzhantel, Maschine, Kabel, Liegestütz, Dips) und Brust-Isolation (Flys, Crossover).
export const BRUST: Uebung[] = [
  // ---------- Langhantel ----------
  {
    id: "bankdruecken_lh",
    name: "Bankdrücken mit Langhantel",
    auch: ["Barbell Bench Press", "Flachbankdrücken", "Bench Press", "Barbell Bench Press (Back-off)"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["latissimus", "unterarm"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    golf: 1,
    hinweis: "Mit Sicherheitsablagen oder Partner trainieren, wenn du nah ans Muskelversagen gehst.",
    info: {
      kurz: "Die klassische Grundübung für Brust, Trizeps und vordere Schulter. Mit der Langhantel bewegst du die höchsten Lasten im horizontalen Drücken und baust so gezielt Kraft und Muskelmasse auf.",
      ausfuehrung: [
        "Leg dich so auf die Bank, dass deine Augen etwa unter der Stange liegen. Die Füße stehen fest und etwas breiter als hüftbreit auf dem Boden.",
        "Greif die Stange etwas breiter als schulterbreit, sodass die Unterarme unten etwa senkrecht stehen. Der Daumen umschließt die Stange.",
        "Zieh die Schulterblätter nach hinten unten zusammen und bau einen leichten Bogen im oberen Rücken auf. Gesäß und Schultern bleiben auf der Bank.",
        "Heb die Stange aus der Ablage und bring sie mit gestreckten Armen über die Schultern.",
        "Senk die Stange kontrolliert in zwei bis drei Sekunden zur unteren Brust, etwa auf Höhe des Brustbeins. Die Ellbogen zeigen dabei etwa 45 bis 70 Grad vom Körper weg.",
        "Berühr die Brust leicht ohne abzufedern und drück die Stange kraftvoll leicht schräg nach oben zurück über die Schultern.",
        "Halte die Füße während des ganzen Satzes in den Boden gedrückt und die Schulterblätter fest zusammen. Leg die Stange nach der letzten Wiederholung sicher in die Ablage."
      ],
      atmung: "Atme oben tief ein und halte die Spannung beim Absenken. Atme beim Hochdrücken nach dem schwersten Punkt aus. Bei schweren Sätzen kurz Luft anhalten, bei leichten Sätzen gleichmäßig weiteratmen.",
      fehler: [
        "Stange springt von der Brust ab: kontrolliert absenken und kurz anhalten statt abfedern.",
        "Ellbogen stehen 90 Grad seitlich ab: Ellbogen etwas zum Körper drehen, das entlastet die Schulter.",
        "Gesäß hebt von der Bank ab: Füße weiter nach hinten oder vorn stellen und Gewicht reduzieren.",
        "Schulterblätter lösen sich: vor jedem Satz neu einrichten und die Spannung bis zur letzten Wiederholung halten.",
        "Handgelenke knicken nach hinten ab: Stange tiefer in den Handballen legen, über dem Unterarm."
      ],
      vorteile: [
        "Baut Kraft und Masse in Brust, Trizeps und vorderer Schulter auf.",
        "Sehr gut messbar und steigerbar, ideal für langfristige Kraftentwicklung.",
        "Trainiert die Ganzkörperspannung durch den Beinantrieb und den stabilen Oberkörper.",
        "Stärkt die Druckkraft für Sport und Alltag, zum Beispiel beim Wegschieben von Lasten."
      ],
      tipps: [
        "Stell dir vor, du drückst dich von der Stange weg in die Bank hinein. Das hält die Schultern stabil.",
        "Für Back-off-Sätze nach dem schweren Satz das Gewicht um 10 bis 15 Prozent senken und mit sauberer Technik mehr Wiederholungen machen.",
        "Lass zwei bis drei Wiederholungen im Tank, wenn du ohne Sicherung trainierst.",
        "Ein enger Griff betont mehr den Trizeps, ein breiterer Griff mehr die Brust."
      ],
      varianten: "Leichter: Kurzhanteln, Multipresse oder Brustpresse. Schwerer: Pausen auf der Brust, Larsen Press oder langsamere Absenkphase.",
      sicherheit: "Bei Schulterbeschwerden Griff etwas enger wählen, Ellbogen näher am Körper und Bewegungsumfang gegebenenfalls verkürzen. Bei Bluthochdruck keine lange Pressatmung."
    }
  },
  {
    id: "bankdruecken_lh_pause",
    name: "Bankdrücken mit Pause",
    auch: ["Pause Barbell Bench Press", "Paused Bench Press", "Pause Bench"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["latissimus"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken mit einer ruhigen Pause von ein bis drei Sekunden auf der Brust. Die Pause nimmt den Dehnungsreflex heraus und macht dich am tiefsten Punkt stärker.",
      ausfuehrung: [
        "Richte dich wie beim normalen Bankdrücken ein: Augen unter der Stange, Schulterblätter zusammen, Füße fest am Boden.",
        "Heb die Stange aus und bring sie über die Schultern, Arme gestreckt.",
        "Senk die Stange kontrolliert zur unteren Brust ab.",
        "Lass die Stange auf der Brust liegen, ohne die Spannung zu verlieren. Zähl ruhig ein bis drei Sekunden, die Stange darf nicht einsinken.",
        "Drück die Stange aus der Pause heraus kraftvoll nach oben, ohne vorher auszuholen.",
        "Atme oben kurz durch, richte die Spannung neu ein und beginn die nächste Wiederholung."
      ],
      atmung: "Oben einatmen und die Luft beim Absenken und während der Pause im Bauch halten. Beim Hochdrücken ausatmen.",
      fehler: [
        "Brust sackt in der Pause ein: aktiv gegen die Stange halten, als würdest du sie nur knapp berühren.",
        "Pause zu kurz: wirklich zählen, sonst geht der Effekt verloren.",
        "Vor dem Drücken kurz absenken und abfedern: aus der ruhigen Position direkt drücken.",
        "Zu viel Gewicht: etwa 5 bis 10 Prozent weniger als beim normalen Bankdrücken nehmen."
      ],
      vorteile: [
        "Mehr Kraft aus der tiefsten Position, dort wo viele scheitern.",
        "Verbessert die Kontrolle und die Bahn der Stange.",
        "Längere Spannungszeit in der gedehnten Position der Brust.",
        "Entspricht den Regeln im Kraftdreikampf, gut für Wettkampfvorbereitung."
      ],
      tipps: [
        "Eine Sekunde Pause reicht für schwere Sätze, zwei bis drei Sekunden für Technik und Muskelaufbau.",
        "Lass dir die Pause bei Bedarf von einem Partner ansagen.",
        "Gut als erste Übung im Brusttraining oder als Variante in einer Woche mit weniger Gewicht."
      ],
      varianten: "Leichter: kürzere Pause oder Kurzhanteln mit Pause. Schwerer: längere Pause, Larsen Press oder Spoto Press.",
      sicherheit: "Mit Sicherheitsablagen oder Partner trainieren. Bei Schulterbeschwerden die Pause eher kurz halten und den Griff etwas enger wählen."
    }
  },
  {
    id: "larsen_press",
    name: "Larsen Press",
    auch: ["Larsen Bench Press", "Bankdrücken ohne Beinantrieb"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken mit gestreckten, angehobenen Beinen, sodass kein Beinantrieb möglich ist. Brust und Arme müssen die Arbeit allein leisten und der Rumpf muss dich stabil auf der Bank halten.",
      ausfuehrung: [
        "Leg dich wie beim normalen Bankdrücken auf die Bank und greif die Stange etwas breiter als schulterbreit.",
        "Zieh die Schulterblätter zusammen, behalte aber nur einen leichten Bogen im oberen Rücken.",
        "Streck die Beine nach vorn aus und heb die Füße knapp über den Boden oder leg die Fersen locker ab, ohne Druck zu geben.",
        "Heb die Stange aus und senk sie langsam und kontrolliert zur unteren Brust ab.",
        "Drück die Stange gleichmäßig nach oben, ohne mit Becken oder Beinen zu schieben. Der Körper bleibt ruhig auf der Bank liegen.",
        "Halte den Bauch fest, damit du nicht seitlich wegkippst, und lege die Stange nach dem Satz sicher ab."
      ],
      atmung: "Oben einatmen, beim Absenken die Spannung halten, beim Drücken ausatmen. Ohne Beinantrieb ist eine ruhige Atmung besonders wichtig für die Balance.",
      fehler: [
        "Becken drückt nach oben: Beine wirklich locker lassen, das Gesäß bleibt schwer auf der Bank.",
        "Seitliches Kippen: Bauchspannung erhöhen und das Gewicht senken.",
        "Zu viel Gewicht: rechne mit 10 bis 20 Prozent weniger als beim normalen Bankdrücken.",
        "Schulterblätter lösen sich, weil der Halt fehlt: vor dem Ausheben bewusst fest einrichten."
      ],
      vorteile: [
        "Mehr Arbeit für Brust und Trizeps bei geringerer Last.",
        "Deckt Schwächen in der Stangenbahn und Seitenunterschiede auf.",
        "Fordert die Rumpfstabilität zusätzlich.",
        "Schont den unteren Rücken, weil kein starkes Hohlkreuz aufgebaut wird."
      ],
      tipps: [
        "Gut als zweite Bankdrück-Übung nach dem schweren Hauptsatz.",
        "Mit einer kurzen Pause auf der Brust wird die Übung noch effektiver.",
        "Wenn du unsicher bist, stell die Sicherheitsablagen knapp unter Brusthöhe ein."
      ],
      varianten: "Leichter: Füße auf die Bank stellen. Schwerer: Pause auf der Brust oder langsameres Absenken.",
      sicherheit: "Immer mit Sicherungen oder Partner, da die Balance eingeschränkt ist. Bei Schulterbeschwerden Griff enger wählen."
    }
  },
  {
    id: "spoto_press",
    name: "Spoto Press",
    auch: ["Spoto Bench Press", "Bankdrücken mit Halt über der Brust"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["latissimus"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Bankdrücken, bei dem du die Stange zwei bis drei Zentimeter über der Brust anhältst, ohne sie abzulegen. Das schult Kontrolle, Stangenbahn und die Kraft knapp über dem tiefsten Punkt.",
      ausfuehrung: [
        "Richte dich wie beim normalen Bankdrücken ein, Schulterblätter zusammen, Füße fest am Boden.",
        "Heb die Stange aus und bring sie über die Schultern.",
        "Senk die Stange langsam ab, bis sie etwa eine Fingerbreite bis zwei Fingerbreiten über der Brust schwebt.",
        "Halte die Stange dort etwa eine Sekunde völlig ruhig, ohne die Brust zu berühren.",
        "Drück die Stange aus dem Halt kraftvoll nach oben in dieselbe Bahn wie beim normalen Bankdrücken.",
        "Richte dich oben kurz neu ein und wiederhole."
      ],
      atmung: "Oben einatmen, Luft beim Absenken und im Halt halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Stange berührt doch die Brust: langsamer absenken und den Haltepunkt bewusst wählen.",
        "Haltepunkt zu hoch: es sollen wirklich nur wenige Zentimeter bis zur Brust sein.",
        "Stange wandert Richtung Hals: Ellbogen unter der Stange halten und zur unteren Brust zielen.",
        "Zu viel Gewicht: etwa 10 Prozent weniger als beim normalen Bankdrücken."
      ],
      vorteile: [
        "Verbessert Kontrolle und Gefühl für die eigene Stangenbahn.",
        "Stärkt den Bereich knapp über der Brust, wo viele Wiederholungen ins Stocken geraten.",
        "Hohe Spannung ohne Abfedern von der Brust.",
        "Etwas schonender für die Schulter, weil die tiefste Position ausgelassen wird."
      ],
      tipps: [
        "Für Fortgeschrittene im Kraftbereich gedacht, Einsteiger profitieren mehr vom normalen Pausen-Bankdrücken.",
        "Filme dich von der Seite, um die Haltehöhe zu kontrollieren.",
        "Gut im Wechsel mit Pausen-Bankdrücken in verschiedenen Trainingsblöcken."
      ],
      varianten: "Leichter: Pausen-Bankdrücken mit Ablegen auf der Brust. Schwerer: längerer Halt oder mehrere Halte pro Wiederholung.",
      sicherheit: "Nur mit Sicherheitsablagen oder Partner. Bei Schulterbeschwerden eher geeignet als volle Tiefe, trotzdem schmerzfrei bleiben."
    }
  },
  {
    id: "bankdruecken_eng",
    name: "Enges Bankdrücken",
    auch: ["Close-Grip Bench Press", "CGBP", "Bankdrücken eng"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["trizeps", "brust", "schulter_vorn"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 2, schulter: 1, handgelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken mit etwa schulterbreitem Griff. Der Trizeps arbeitet deutlich mehr, die Brust bleibt stark beteiligt, und die Schulter wird oft weniger belastet als beim breiten Griff.",
      ausfuehrung: [
        "Leg dich auf die Bank, Augen unter der Stange, Füße fest am Boden.",
        "Greif die Stange etwa schulterbreit, die Zeigefinger ungefähr über den Schultern. Enger als das ist nicht nötig und belastet die Handgelenke.",
        "Zieh die Schulterblätter zusammen und heb die Stange aus.",
        "Senk die Stange kontrolliert zur unteren Brust ab, die Ellbogen bleiben nah am Körper, etwa 30 bis 45 Grad abgespreizt.",
        "Drück die Stange kraftvoll nach oben, bis die Arme gestreckt sind, ohne die Ellbogen durchzuschlagen.",
        "Halte die Unterarme während der ganzen Bewegung möglichst senkrecht unter der Stange."
      ],
      atmung: "Oben einatmen, beim Absenken die Spannung halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Griff zu eng, Hände berühren sich fast: auf Schulterbreite gehen, das schont die Handgelenke.",
        "Ellbogen klappen nach außen: bewusst eng am Körper führen.",
        "Stange landet am Hals: zur unteren Brust zielen.",
        "Abfedern von der Brust: kontrolliert absenken und kurz berühren."
      ],
      vorteile: [
        "Sehr effektiv für Trizeps-Kraft und Trizeps-Masse mit hohen Lasten.",
        "Trägt direkt zum normalen Bankdrücken bei, vor allem im oberen Teil der Bewegung.",
        "Kann bei Schulterbeschwerden angenehmer sein als breites Bankdrücken.",
        "Trainiert Brust und Trizeps zusammen in einer Übung."
      ],
      tipps: [
        "Stell dir vor, du biegst die Stange auseinander. Das hält die Ellbogen in der richtigen Position.",
        "Gut als zweite schwere Übung nach dem normalen Bankdrücken oder als Hauptübung an Armtagen.",
        "Wenn die Handgelenke stören, Handgelenkbandagen nutzen oder etwas breiter greifen."
      ],
      varianten: "Leichter: Kurzhanteldrücken mit neutralem Griff oder enge Liegestütze. Schwerer: Pause auf der Brust oder enges Schrägbankdrücken.",
      sicherheit: "Bei Ellbogen- oder Handgelenkbeschwerden vorsichtig steigern und nicht zu eng greifen."
    }
  },
  {
    id: "schraegbankdruecken_lh",
    name: "Schrägbankdrücken mit Langhantel",
    auch: ["Incline Barbell Bench Press", "Incline Bench Press", "Schrägbank LH"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken auf einer Schrägbank mit 30 bis 45 Grad Neigung. Der obere Teil der Brust und die vordere Schulter werden stärker gefordert als auf der Flachbank.",
      ausfuehrung: [
        "Stell die Bank auf etwa 30 Grad ein. Steilere Winkel verlagern die Arbeit zunehmend auf die Schulter.",
        "Setz dich so hin, dass die Stange über den Augen oder der Stirn liegt, und stell die Füße fest auf den Boden.",
        "Greif die Stange etwas breiter als schulterbreit und zieh die Schulterblätter nach hinten unten.",
        "Heb die Stange aus und bring sie über die Schultern.",
        "Senk die Stange kontrolliert zur oberen Brust knapp unter dem Schlüsselbein ab.",
        "Drück die Stange senkrecht nach oben zurück, bis die Arme gestreckt sind, ohne die Schultern nach vorn zu schieben."
      ],
      atmung: "Oben einatmen, beim Absenken Spannung halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Bank zu steil: 30 Grad reichen für die obere Brust, bei 45 Grad und mehr wird es zum Schulterdrücken.",
        "Starkes Hohlkreuz, das die Schräge aufhebt: Gesäß auf der Bank lassen und Bogen moderat halten.",
        "Stange landet zu tief auf der Brust: zur oberen Brust zielen.",
        "Schultern rollen nach vorn: Schulterblätter bis zum Ende zusammenhalten."
      ],
      vorteile: [
        "Betont den oberen Brustanteil stärker als die Flachbank.",
        "Stärkt die vordere Schulter und den Trizeps mit.",
        "Gute Ergänzung zum Flachbankdrücken für eine ausgewogene Brustentwicklung.",
        "Höhere Lasten als mit Kurzhanteln möglich."
      ],
      tipps: [
        "Ein Winkel von 15 bis 30 Grad ist für die obere Brust meist ausreichend, probier aus, wo du sie am besten spürst.",
        "Kurz auf der Brust pausieren erhöht die Kontrolle.",
        "Als erste Brustübung des Tages im Wechsel mit Flachbankdrücken einsetzen."
      ],
      varianten: "Leichter: Schrägbankdrücken mit Kurzhanteln oder an der Multipresse. Schwerer: Pause auf der Brust oder langsames Absenken.",
      sicherheit: "Bei Schulterbeschwerden Winkel flacher wählen, Griff etwas enger und Ellbogen näher am Körper."
    }
  },
  {
    id: "schraegbankdruecken_eng",
    name: "Enges Schrägbankdrücken",
    auch: ["Close-Grip Incline Bench Press", "Close-Grip Incline Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["trizeps", "brust", "schulter_vorn"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 2, schulter: 1, handgelenk: 1 },
    stufe: 2,
    info: {
      kurz: "Schrägbankdrücken mit etwa schulterbreitem Griff. Kombiniert obere Brust und vordere Schulter mit viel Trizeps-Arbeit und ist oft angenehm für die Schultern.",
      ausfuehrung: [
        "Stell die Bank auf 30 bis 45 Grad und setz dich mit den Augen etwa unter der Stange hin.",
        "Greif die Stange schulterbreit, die Handgelenke stehen gerade über den Unterarmen.",
        "Zieh die Schulterblätter zusammen und stell die Füße fest auf den Boden.",
        "Heb die Stange aus und senk sie kontrolliert zur oberen Brust ab. Die Ellbogen bleiben eng am Körper.",
        "Drück die Stange kraftvoll senkrecht nach oben, bis die Arme gestreckt sind.",
        "Halte den Kopf auf der Bank und lass die Schultern nicht nach vorn wandern."
      ],
      atmung: "Oben einatmen, Spannung beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Ellbogen klappen nach außen: eng führen, Unterarme senkrecht halten.",
        "Griff zu eng: schulterbreit reicht, sonst leiden die Handgelenke.",
        "Absenken zum Hals: zur oberen Brust zielen.",
        "Bank zu steil und Gesäß hebt ab: Winkel und Gewicht anpassen."
      ],
      vorteile: [
        "Viel Trizeps-Arbeit mit hoher Last.",
        "Stärkt obere Brust und vordere Schulter gleichzeitig.",
        "Hilft beim Überkopfdrücken und beim normalen Bankdrücken.",
        "Häufig schulterfreundlicher als breites Schrägbankdrücken."
      ],
      tipps: [
        "Gut als zweite Drückübung an einem Oberkörpertag.",
        "Mit 6 bis 10 Wiederholungen bei zwei Wiederholungen im Tank arbeiten.",
        "Eine Sekunde Pause auf der Brust verbessert die Kontrolle."
      ],
      varianten: "Leichter: Kurzhanteldrücken schräg mit neutralem Griff. Schwerer: Pause auf der Brust oder steilerer Winkel.",
      sicherheit: "Bei Ellbogen- oder Handgelenkbeschwerden vorsichtig steigern. Mit Sicherheitsablagen trainieren."
    }
  },
  {
    id: "negativbankdruecken_lh",
    name: "Negativbankdrücken mit Langhantel",
    auch: ["Decline Barbell Bench Press", "Decline Bench Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps"],
    sekundaer: ["schulter_vorn"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken auf einer leicht nach unten geneigten Bank. Die untere Brust wird betont, die vordere Schulter arbeitet weniger und der Bewegungsweg ist etwas kürzer.",
      ausfuehrung: [
        "Stell die Bank auf etwa 15 bis 30 Grad negative Neigung und hak die Beine unter den Polstern fest.",
        "Leg dich so hin, dass die Stange über den Augen liegt, und greif etwas breiter als schulterbreit.",
        "Zieh die Schulterblätter zusammen und lass dir am besten die Stange von einem Partner reichen.",
        "Senk die Stange kontrolliert zur unteren Brust ab, die Ellbogen zeigen etwa 45 bis 60 Grad vom Körper weg.",
        "Drück die Stange nach oben zurück über die Schultern, bis die Arme gestreckt sind.",
        "Lege die Stange nach dem Satz sicher ab und setz dich langsam auf, damit dir nicht schwindlig wird."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Hochdrücken ausatmen. Nicht zu lange pressen, da der Kopf tiefer liegt.",
      fehler: [
        "Zu starke Neigung: 15 bis 30 Grad genügen, mehr bringt keinen Vorteil.",
        "Stange zum Hals führen: zur unteren Brust zielen.",
        "Ohne Partner aus einer ungünstigen Position ausheben: Partner oder Multipresse nutzen.",
        "Schnell aufstehen: erst kurz sitzen bleiben."
      ],
      vorteile: [
        "Betont die unteren Brustfasern.",
        "Oft angenehmer für die Schulter als Flach- oder Schrägbankdrücken.",
        "Ermöglicht hohe Lasten bei kurzem Bewegungsweg.",
        "Ergänzt Flach- und Schrägbank für eine vollständige Brustentwicklung."
      ],
      tipps: [
        "Für die untere Brust sind Dips eine gute Alternative, falls keine Negativbank vorhanden ist.",
        "Leichte Pause auf der Brust erhöht die Kontrolle.",
        "Arbeite im Bereich von 6 bis 12 Wiederholungen."
      ],
      varianten: "Leichter: Negativbankdrücken mit Kurzhanteln oder an der Multipresse. Schwerer: Pause auf der Brust.",
      sicherheit: "Bei Bluthochdruck, Augeninnendruck oder Schwindel ist die Kopf-tief-Position nicht geeignet. Immer mit Partner oder Sicherungen."
    }
  },
  {
    id: "floor_press_lh",
    name: "Floor Press mit Langhantel",
    auch: ["Barbell Floor Press", "Bodendrücken Langhantel"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["trizeps", "brust", "schulter_vorn"],
    geraete: [["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken liegend auf dem Boden. Der Boden begrenzt den Bewegungsweg, sobald die Oberarme aufliegen. Das stärkt die obere Hälfte der Drückbewegung und schont oft die Schulter.",
      ausfuehrung: [
        "Leg dich in einem Rack oder unter Ständern auf den Boden, sodass die Stange über deiner Brust liegt. Die Knie sind angewinkelt, die Füße stehen auf dem Boden.",
        "Greif die Stange etwas breiter als schulterbreit und zieh die Schulterblätter zusammen.",
        "Heb die Stange aus und bring sie mit gestreckten Armen über die Schultern.",
        "Senk die Stange kontrolliert ab, bis die Oberarme sanft den Boden berühren. Die Ellbogen sind etwa 45 Grad vom Körper abgespreizt.",
        "Lass die Arme kurz am Boden liegen, ohne die Spannung zu verlieren.",
        "Drück die Stange ohne Schwung kraftvoll nach oben, bis die Arme gestreckt sind."
      ],
      atmung: "Oben einatmen, während des Absenkens und der Pause halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Ellbogen knallen auf den Boden: langsam absenken und sanft aufsetzen.",
        "Ellbogen zu weit abgespreizt: etwa 45 Grad, das schont die Schulter.",
        "Schwung aus dem Boden holen: kurz ruhig ablegen, dann aus der Stille drücken.",
        "Ohne Rack auf den Boden legen: die Stange muss sicher in Position gebracht werden können."
      ],
      vorteile: [
        "Stärkt Trizeps und die Ausdrückphase des Bankdrückens.",
        "Begrenzter Bewegungsweg ist oft angenehmer bei empfindlichen Schultern.",
        "Ohne Bank möglich.",
        "Die Pause am Boden nimmt jeden Schwung heraus."
      ],
      tipps: [
        "Beine gestreckt erhöhen die Rumpfspannung, angewinkelte Beine sind für den Rücken bequemer.",
        "Gut als Hauptübung in Phasen, in denen die Schulter geschont werden soll.",
        "Das Rack auf Höhe der gestreckten Arme einstellen."
      ],
      varianten: "Leichter: Floor Press mit Kurzhanteln. Schwerer: längere Pause am Boden oder enger Griff.",
      sicherheit: "Ohne Rack oder Partner nur mit leichtem Gewicht. Bei Ellbogenbeschwerden sanft aufsetzen."
    }
  },
  {
    id: "bankdruecken_untergriff",
    name: "Bankdrücken im Untergriff",
    auch: ["Reverse-Grip Bench Press", "Reverse Grip Bench", "Underhand Bench Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { handgelenk: 2, ellbogen: 1, schulter: 1 },
    stufe: 3,
    info: {
      kurz: "Bankdrücken mit Untergriff, die Handflächen zeigen zu dir. Die Ellbogen bleiben automatisch nah am Körper, die obere Brust wird betont und die Schulter oft geschont.",
      ausfuehrung: [
        "Leg dich auf die Flachbank, Augen unter der Stange, Füße fest am Boden.",
        "Greif die Stange im Untergriff etwa schulterbreit oder etwas breiter, der Daumen umschließt die Stange.",
        "Lass dir die Stange am besten von einem Partner reichen, da das Ausheben im Untergriff ungewohnt ist.",
        "Senk die Stange kontrolliert zur unteren Brust ab. Die Ellbogen bleiben eng am Körper.",
        "Drück die Stange leicht schräg Richtung Gesicht nach oben, bis die Arme gestreckt sind.",
        "Halte die Handgelenke gerade und die Spannung im oberen Rücken bis zum Ende des Satzes."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Daumen nicht um die Stange: die Stange kann abrollen, immer voll umgreifen.",
        "Handgelenke knicken ab: leichteres Gewicht oder Handgelenkbandagen.",
        "Zu schnelles Absenken: im Untergriff ist die Kontrolle schwieriger, langsam arbeiten.",
        "Ohne Partner schwer trainieren: Sicherheitsablagen und Partner einplanen."
      ],
      vorteile: [
        "Betont die obere Brust ohne Schrägbank.",
        "Hält die Ellbogen nah am Körper und kann dadurch die Schulter entlasten.",
        "Viel Trizeps-Arbeit.",
        "Neuer Reiz bei Stagnation im normalen Bankdrücken."
      ],
      tipps: [
        "Mit leichtem Gewicht beginnen und die Bahn erst gründlich lernen.",
        "Etwa 10 bis 20 Prozent weniger als beim normalen Bankdrücken einplanen.",
        "An der Multipresse ist der Einstieg deutlich sicherer."
      ],
      varianten: "Leichter: an der Multipresse oder mit Kurzhanteln im Untergriff. Schwerer: Pause auf der Brust.",
      sicherheit: "Bei Handgelenkbeschwerden auslassen. Immer mit Partner oder Sicherungen, da die Stange leichter abrutschen kann."
    }
  },
  {
    id: "bankdruecken_baender",
    name: "Bankdrücken mit Bändern",
    auch: ["Banded Bench Press", "Bench Press with Bands", "Accommodating Resistance Bench"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["langhantel", "bank", "band"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 2 },
    stufe: 3,
    info: {
      kurz: "Bankdrücken mit zusätzlichen Widerstandsbändern an der Stange. Der Widerstand wird nach oben hin größer, das trainiert Explosivität aus der Brust und Kraft beim Ausdrücken.",
      ausfuehrung: [
        "Befestige je ein Band an den Füßen der Bank oder am Rack und hänge das andere Ende an die Stangenenden.",
        "Leg dich wie beim normalen Bankdrücken auf die Bank, Schulterblätter zusammen, Füße fest am Boden.",
        "Heb die Stange aus. Oben spürst du durch die Bänder die höchste Last, halte sie kontrolliert.",
        "Senk die Stange gleichmäßig zur unteren Brust ab, ohne dich von den Bändern nach unten ziehen zu lassen.",
        "Drück die Stange so schnell wie möglich nach oben, die Bänder bremsen dich zum Ende hin.",
        "Achte darauf, dass beide Bänder gleich gespannt sind und die Stange gerade bleibt."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim explosiven Drücken ausatmen.",
      fehler: [
        "Bänder ungleich befestigt: Länge und Spannung auf beiden Seiten prüfen.",
        "Stange wird nach unten gerissen: aktiv bremsen, das Absenken bleibt kontrolliert.",
        "Zu starke Bänder: das Band sollte oben etwa 10 bis 30 Prozent der Last ausmachen.",
        "Langsames Drücken: der Reiz liegt in der maximalen Geschwindigkeit."
      ],
      vorteile: [
        "Passt den Widerstand an die Kraftkurve an, oben bist du stärker.",
        "Trainiert Schnelligkeit und Kraft in der Ausdrückphase.",
        "Weniger Last am tiefsten Punkt, das kann die Schulter schonen.",
        "Neuer Reiz für Fortgeschrittene bei Stagnation."
      ],
      tipps: [
        "Für Geschwindigkeitstraining 50 bis 60 Prozent der Stangenlast und dazu leichte Bänder, 8 bis 10 Sätze zu 3 Wiederholungen.",
        "Bänder vor jedem Training auf Risse kontrollieren.",
        "Eher in Kraftblöcken einsetzen, nicht dauerhaft."
      ],
      varianten: "Leichter: dünnere Bänder. Schwerer: stärkere Bänder oder mehr Stangenlast.",
      sicherheit: "Nur für erfahrene Trainierende. Mit Partner, da die Bänder die Stange beim Ablegen ziehen. Beschädigte Bänder sofort austauschen."
    }
  },
  // ---------- Kurzhantel ----------
  {
    id: "bankdruecken_kh",
    name: "Bankdrücken mit Kurzhanteln",
    auch: ["Dumbbell Bench Press", "DB Bench Press", "Kurzhanteldrücken flach", "KH-Bankdrücken"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["rotatorenmanschette"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Drücken mit zwei Kurzhanteln auf der Flachbank. Mehr Bewegungsumfang und Dehnung für die Brust als mit der Langhantel, und jede Seite muss für sich arbeiten.",
      ausfuehrung: [
        "Setz dich auf das Ende der Bank und stell die Kurzhanteln senkrecht auf die Oberschenkel.",
        "Leg dich zurück und bring die Hanteln dabei mit Schwung aus den Knien neben die Brust.",
        "Stell die Füße fest auf den Boden und zieh die Schulterblätter nach hinten unten zusammen.",
        "Drück die Hanteln nach oben, bis die Arme fast gestreckt sind. Die Hanteln sind oben etwa eine Handbreit auseinander.",
        "Senk die Hanteln in zwei bis drei Sekunden seitlich neben die Brust ab, bis du eine deutliche Dehnung spürst. Die Ellbogen zeigen etwa 45 bis 60 Grad vom Körper weg.",
        "Drück die Hanteln aus der Dehnung kraftvoll in einem leichten Bogen wieder nach oben.",
        "Zum Ablegen die Hanteln auf die Brust ziehen, die Knie anheben und dich mit den Hanteln auf den Oberschenkeln aufsetzen."
      ],
      atmung: "Oben einatmen, beim Absenken die Luft halten oder ruhig weiteratmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hanteln oben aneinanderschlagen: kurz vorher stoppen, die Spannung bleibt so auf der Brust.",
        "Zu tief absenken mit nach vorn rollenden Schultern: nur so tief, wie die Schulterblätter zusammenbleiben.",
        "Ellbogen ganz seitlich: etwas zum Körper drehen.",
        "Hanteln einfach seitlich fallen lassen: zum Ablegen sauber aufsetzen, das schützt die Schultern."
      ],
      vorteile: [
        "Großer Bewegungsumfang mit guter Dehnung der Brust, wichtig für Muskelaufbau.",
        "Gleicht Kraftunterschiede zwischen links und rechts aus.",
        "Freie Handgelenkstellung, oft angenehmer für die Schultern als die Langhantel.",
        "Fordert die Stabilität der Schulter."
      ],
      tipps: [
        "Wenn die Hanteln schwer werden, ist das Hinlegen und Aufsetzen der schwierigste Teil. Übe den Ablauf mit leichtem Gewicht.",
        "Leicht nach innen gedrehte Hände, also halb zwischen Obergriff und neutralem Griff, sind für viele am angenehmsten.",
        "Gut im Bereich von 8 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: Brustpresse an der Maschine oder Floor Press mit Kurzhanteln. Schwerer: Pause in der Dehnung, langsameres Absenken oder einarmig.",
      sicherheit: "Bei Schulterbeschwerden den Bewegungsumfang verkürzen und die Ellbogen näher am Körper halten."
    }
  },
  {
    id: "schraegbankdruecken_kh",
    name: "Schrägbankdrücken mit Kurzhanteln",
    auch: ["Incline Dumbbell Press", "Incline DB Press", "Incline Dumbbell Bench Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Kurzhanteldrücken auf der Schrägbank mit 30 bis 45 Grad. Eine der besten Übungen für die obere Brust, mit großem Bewegungsumfang und guter Dehnung.",
      ausfuehrung: [
        "Stell die Bank auf etwa 30 Grad ein und setz dich mit den Hanteln auf den Oberschenkeln hin.",
        "Leg dich zurück und bring die Hanteln neben die obere Brust. Die Füße stehen fest am Boden.",
        "Zieh die Schulterblätter zusammen und drück die Hanteln nach oben über die obere Brust.",
        "Senk die Hanteln kontrolliert ab, bis sie etwa auf Höhe der oberen Brust neben dem Körper sind und du eine deutliche Dehnung spürst.",
        "Die Ellbogen zeigen etwa 45 Grad vom Körper weg, die Unterarme stehen senkrecht.",
        "Drück die Hanteln wieder nach oben, bis die Arme fast gestreckt sind, ohne die Hanteln aneinanderzuschlagen."
      ],
      atmung: "Oben einatmen, beim Absenken halten oder ruhig weiteratmen, beim Drücken ausatmen.",
      fehler: [
        "Bank zu steil: bei mehr als 45 Grad arbeitet vor allem die Schulter.",
        "Hohlkreuz, das die Schräge aufhebt: Gesäß in die Bank drücken.",
        "Zu kurzer Bewegungsumfang: die Dehnung unten ist der wertvollste Teil.",
        "Schultern rollen nach vorn: Brust stolz halten, Schulterblätter zusammen."
      ],
      vorteile: [
        "Gezielter Reiz für die obere Brust.",
        "Großer Bewegungsumfang mit viel Dehnung unter Last.",
        "Jede Seite arbeitet unabhängig.",
        "Meist schulterfreundlicher als Schrägbankdrücken mit der Langhantel."
      ],
      tipps: [
        "Teste Winkel zwischen 15 und 45 Grad, viele spüren die obere Brust bei etwa 30 Grad am besten.",
        "Zum Abschluss eines Satzes können Teilwiederholungen in der gedehnten Position den Reiz erhöhen.",
        "Langsam absenken, zwei bis drei Sekunden."
      ],
      varianten: "Leichter: Schrägbank-Brustpresse an der Maschine. Schwerer: Pause in der Dehnung oder einarmig.",
      sicherheit: "Bei Schulterbeschwerden flacheren Winkel und neutralen Griff wählen."
    }
  },
  {
    id: "schraegbankdruecken_kh_flach",
    name: "Kurzhanteldrücken auf leicht schräger Bank",
    auch: ["Low Incline Dumbbell Press", "Low Incline DB Press", "15 Grad Schrägbankdrücken"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Kurzhanteldrücken auf einer Bank mit nur 15 bis 20 Grad Neigung. Trifft die gesamte Brust mit leichtem Fokus auf den oberen Teil, ohne die Schulter so stark zu belasten wie eine steile Schrägbank.",
      ausfuehrung: [
        "Stell die Bank auf die erste oder zweite Stufe, also etwa 15 bis 20 Grad.",
        "Setz dich mit den Hanteln auf den Oberschenkeln hin, leg dich zurück und bring die Hanteln neben die Brust.",
        "Füße fest auf den Boden, Schulterblätter nach hinten unten ziehen.",
        "Drück die Hanteln nach oben über die mittlere bis obere Brust.",
        "Senk sie langsam ab, bis du die Dehnung in der Brust deutlich spürst. Die Ellbogen sind etwa 45 bis 60 Grad abgespreizt.",
        "Drück aus der Dehnung ohne Schwung wieder nach oben."
      ],
      atmung: "Oben einatmen, beim Absenken halten oder ruhig weiteratmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Bewegungsumfang verkürzen: tief in die Dehnung gehen, solange es schmerzfrei ist.",
        "Hanteln oben zusammenschlagen: kurz davor stoppen.",
        "Rücken stark gewölbt: der flache Winkel verschwindet sonst.",
        "Zu schnelles Absenken: zwei bis drei Sekunden kontrolliert."
      ],
      vorteile: [
        "Guter Kompromiss zwischen Flachbank und Schrägbank für die ganze Brust.",
        "Weniger Schulterbelastung als bei steilen Winkeln.",
        "Viel Dehnung unter Last.",
        "Beliebte Hauptübung in evidenzbasierten Muskelaufbau-Programmen."
      ],
      tipps: [
        "Kann das Flachbankdrücken mit Kurzhanteln vollständig ersetzen.",
        "Ideal für 8 bis 12 Wiederholungen mit ein bis zwei Wiederholungen im Tank.",
        "Hast du keine verstellbare Bank, leg eine stabile Scheibe unter das Kopfende einer Flachbank."
      ],
      varianten: "Leichter: Brustpresse an der Maschine. Schwerer: Pause in der Dehnung oder langsamere Absenkphase.",
      sicherheit: "Bei Schulterbeschwerden neutralen Griff nutzen und die Tiefe anpassen."
    }
  },
  {
    id: "schraegbankdruecken_kh_pause",
    name: "Schrägbankdrücken mit Kurzhanteln und Pause",
    auch: ["Pause DB Incline Press", "Paused Incline Dumbbell Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Schrägbankdrücken mit Kurzhanteln und einer ein- bis zweisekündigen Pause in der tiefsten Position. So bleibt die obere Brust in der Dehnung unter Spannung und Schwung ist ausgeschlossen.",
      ausfuehrung: [
        "Stell die Bank auf 30 Grad und bring die Hanteln wie gewohnt neben die obere Brust.",
        "Zieh die Schulterblätter zusammen und drück die Hanteln nach oben.",
        "Senk die Hanteln in etwa drei Sekunden ab, bis du die volle Dehnung in der oberen Brust spürst.",
        "Halte die Hanteln dort ein bis zwei Sekunden ganz ruhig, ohne die Spannung zu verlieren oder die Schultern nach vorn fallen zu lassen.",
        "Drück aus der Pause heraus kraftvoll nach oben, bis die Arme fast gestreckt sind.",
        "Wiederhole den Ablauf, jede Wiederholung mit derselben Pausenlänge."
      ],
      atmung: "Oben einatmen, während Absenken und Pause die Luft halten oder flach weiteratmen, beim Drücken ausatmen.",
      fehler: [
        "Pause wird mit der Zeit kürzer: laut oder im Kopf zählen.",
        "In der Pause entspannen: Brust und Schulterblätter bleiben aktiv.",
        "Zu tief mit nach vorn rollenden Schultern: Tiefe nur so weit, wie die Position stabil bleibt.",
        "Zu schweres Gewicht: rechne mit etwa 10 Prozent weniger als ohne Pause."
      ],
      vorteile: [
        "Viel Spannung in der gedehnten Position, ein starker Reiz für Muskelaufbau.",
        "Schult Kontrolle und saubere Technik.",
        "Mehr Kraft aus der tiefsten Position.",
        "Geringere Lasten bei gleich hohem Reiz schonen die Gelenke."
      ],
      tipps: [
        "Sehr gut als erste Brustübung an einem Oberkörpertag.",
        "Eine Sekunde Pause reicht meist, zwei Sekunden für Technikphasen.",
        "Mit 6 bis 10 Wiederholungen arbeiten."
      ],
      varianten: "Leichter: ohne Pause oder mit geringerer Neigung. Schwerer: längere Pause oder langsameres Absenken.",
      sicherheit: "Bei Schulterbeschwerden die Tiefe begrenzen und die Pause schmerzfrei halten."
    }
  },
  {
    id: "negativbankdruecken_kh",
    name: "Negativbankdrücken mit Kurzhanteln",
    auch: ["Decline Dumbbell Press", "Decline DB Bench Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Kurzhanteldrücken auf einer leicht abwärts geneigten Bank. Betont die untere Brust und entlastet die vordere Schulter.",
      ausfuehrung: [
        "Stell die Bank auf etwa 15 bis 30 Grad negative Neigung und hak die Beine unter den Polstern ein.",
        "Nimm die Hanteln im Sitzen auf die Oberschenkel und leg dich vorsichtig zurück. Bring die Hanteln neben die untere Brust.",
        "Zieh die Schulterblätter zusammen und drück die Hanteln nach oben über die untere Brust.",
        "Senk die Hanteln kontrolliert seitlich neben die untere Brust ab, bis du eine Dehnung spürst.",
        "Drück sie wieder nach oben, bis die Arme fast gestreckt sind.",
        "Zum Beenden die Hanteln auf die Brust ziehen und vorsichtig seitlich auf den Boden absetzen oder einem Partner geben."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen. Nicht lange pressen, da der Kopf tiefer liegt.",
      fehler: [
        "Zu steile Neigung: 15 bis 30 Grad genügen.",
        "Hanteln fallen am Ende einfach herunter: kontrolliert absetzen.",
        "Zu schnelles Aufsetzen danach: kurz liegen bleiben, dann langsam aufrichten.",
        "Ellbogen weit abgespreizt: auf etwa 45 Grad bleiben."
      ],
      vorteile: [
        "Betont die untere Brust.",
        "Geringere Belastung der vorderen Schulter.",
        "Jede Seite arbeitet eigenständig.",
        "Ergänzt Flach- und Schrägbank."
      ],
      tipps: [
        "Das Hinlegen und Aufstehen mit schweren Hanteln ist knifflig, nimm anfangs leichtere Gewichte.",
        "Dips sind eine Alternative, wenn keine Negativbank vorhanden ist.",
        "Gut im Bereich von 8 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: Flachbank oder Brustpresse. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Bluthochdruck, Augeninnendruck oder Schwindel die Kopf-tief-Lage meiden."
    }
  },
  {
    id: "floor_press_kh",
    name: "Floor Press mit Kurzhanteln",
    auch: ["KH-Floor Press", "Dumbbell Floor Press", "DB Floor Press", "Kettlebell Floor Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Kurzhanteldrücken liegend auf dem Boden. Der Boden stoppt die Bewegung, wenn die Oberarme aufliegen. Schulterfreundlich, ohne Bank machbar und stark für Trizeps und Ausdrückkraft.",
      ausfuehrung: [
        "Setz dich mit den Hanteln auf den Boden, die Hanteln stehen neben den Hüften. Leg dich zurück und bring die Hanteln dabei an die Brust.",
        "Stell die Füße auf, die Knie sind angewinkelt. Zieh die Schulterblätter zusammen und in den Boden.",
        "Drück die Hanteln nach oben über die Brust, die Handflächen zeigen nach vorn oder zueinander.",
        "Senk die Hanteln kontrolliert ab, bis die Oberarme sanft den Boden berühren. Die Ellbogen sind etwa 45 Grad abgespreizt.",
        "Lass die Oberarme eine Sekunde liegen, die Spannung bleibt.",
        "Drück die Hanteln ohne Schwung wieder nach oben."
      ],
      atmung: "Oben einatmen, beim Absenken und in der kurzen Pause halten, beim Drücken ausatmen.",
      fehler: [
        "Ellbogen knallen auf den Boden: langsam absenken.",
        "Ellbogen zu weit seitlich: etwa 45 Grad zum Körper.",
        "Aus dem Boden abfedern: kurz ablegen und aus der Ruhe drücken.",
        "Handgelenke knicken ab: Hantelgriff über dem Unterarm halten."
      ],
      vorteile: [
        "Begrenzter Bewegungsumfang schont empfindliche Schultern.",
        "Stärkt Trizeps und die Ausdrückphase.",
        "Nur Kurzhanteln oder Kettlebells nötig, ideal für zu Hause.",
        "Die Pause am Boden verhindert Schwung."
      ],
      tipps: [
        "Mit neutralem Griff, Handflächen zueinander, besonders gelenkschonend.",
        "Gut für Phasen, in denen die Schulter geschont werden soll.",
        "Mit Kettlebells sitzt das Gewicht hinter dem Handgelenk, das fordert die Griffstabilität."
      ],
      varianten: "Leichter: leichtere Hanteln oder Liegestütz erhöht. Schwerer: einarmig, längere Pause oder Langhantel.",
      sicherheit: "Bei Ellbogenbeschwerden sanft aufsetzen. Bei akuten Schulterbeschwerden vorher abklären lassen."
    }
  },
  {
    id: "floor_press_kh_einarmig",
    name: "Einarmige Floor Press mit Kurzhantel",
    auch: ["Single-Arm Dumbbell Floor Press", "One-Arm DB Floor Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["schraege_bauch", "bauch"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Floor Press mit nur einer Hantel. Zusätzlich zur Druckarbeit muss der Rumpf verhindern, dass du zur belasteten Seite wegrollst.",
      ausfuehrung: [
        "Leg dich auf den Boden, Knie angewinkelt, Füße etwas breiter als hüftbreit.",
        "Halte eine Hantel an der Brust, der andere Arm liegt seitlich auf dem Boden oder ist zur Decke gestreckt.",
        "Zieh die Schulterblätter zusammen und spann den Bauch an.",
        "Drück die Hantel nach oben, bis der Arm gestreckt ist, ohne dass sich der Oberkörper dreht.",
        "Senk sie kontrolliert ab, bis der Oberarm den Boden berührt, und halte kurz.",
        "Drück wieder nach oben. Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Oberkörper rollt zur Hantelseite: Bauch fester und gegenüberliegende Schulter in den Boden drücken.",
        "Ellbogen landet hart: langsam absetzen.",
        "Schulter hebt vom Boden ab: Schulterblatt bleibt am Boden.",
        "Seiten mit unterschiedlichen Wiederholungen: mit der schwächeren Seite beginnen."
      ],
      vorteile: [
        "Trainiert jede Seite einzeln und deckt Unterschiede auf.",
        "Fordert die Anti-Rotationskraft des Rumpfes.",
        "Schulterfreundlich durch begrenzten Bewegungsumfang.",
        "Wenig Ausrüstung nötig."
      ],
      tipps: [
        "Mit dem freien Arm zur Decke gestreckt wird die Stabilität schwieriger.",
        "Gut für zu Hause, wenn nur eine schwere Hantel vorhanden ist.",
        "Mit der schwächeren Seite beginnen und die Wiederholungen auf die starke Seite übertragen."
      ],
      varianten: "Leichter: beidarmige Floor Press. Schwerer: Beine gestreckt oder längere Pause unten.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden schmerzfrei arbeiten und sanft aufsetzen."
    }
  },
  {
    id: "kh_druecken_neutral",
    name: "Kurzhanteldrücken mit neutralem Griff",
    auch: ["Neutral-Grip Dumbbell Press", "Neutral Grip DB Bench Press", "Hammer Grip Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Kurzhanteldrücken auf der Bank mit zueinander zeigenden Handflächen. Die Ellbogen bleiben nah am Körper, das ist für viele Schultern angenehm und bringt viel Trizeps-Arbeit.",
      ausfuehrung: [
        "Leg dich mit zwei Kurzhanteln auf die Flach- oder leicht schräge Bank, die Handflächen zeigen zueinander.",
        "Füße fest auf den Boden, Schulterblätter nach hinten unten ziehen.",
        "Drück die Hanteln nach oben, bis die Arme fast gestreckt sind. Die Hanteln sind parallel zueinander.",
        "Senk die Hanteln kontrolliert neben die Brust ab, die Ellbogen streifen fast den Oberkörper.",
        "Geh so tief, bis die Hanteln etwa auf Brusthöhe sind und du eine Dehnung spürst.",
        "Drück die Hanteln wieder gerade nach oben."
      ],
      atmung: "Oben einatmen, beim Absenken halten oder ruhig weiteratmen, beim Drücken ausatmen.",
      fehler: [
        "Ellbogen wandern nach außen: bewusst nah am Körper führen.",
        "Hanteln drehen sich in den Obergriff: Handflächen bleiben zueinander.",
        "Zu kurzer Bewegungsumfang: bis auf Brusthöhe absenken.",
        "Schultern heben von der Bank ab: Schulterblätter zusammenhalten."
      ],
      vorteile: [
        "Oft schmerzfrei möglich, wenn normales Bankdrücken die Schulter stört.",
        "Viel Trizeps- und vordere Schulterarbeit.",
        "Natürliche Handgelenkstellung.",
        "Gute Brücke zwischen Brust- und Trizepstraining."
      ],
      tipps: [
        "Auf der leicht schrägen Bank wird die obere Brust mehr gefordert.",
        "Gut als zweite Drückübung im Bereich von 8 bis 15 Wiederholungen.",
        "Stell dir vor, die Hanteln seien eine Stange, die du gerade nach oben drückst."
      ],
      varianten: "Leichter: Floor Press mit neutralem Griff. Schwerer: Pause unten oder einarmig.",
      sicherheit: "Geeignete Variante bei Schulterbeschwerden, trotzdem schmerzfrei bleiben und bei anhaltenden Beschwerden abklären lassen."
    }
  },
  {
    id: "kh_bankdruecken_einarmig",
    name: "Einarmiges Bankdrücken mit Kurzhantel",
    auch: ["Single-Arm Dumbbell Bench Press", "One-Arm DB Press", "Single-Arm DB Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["schraege_bauch", "bauch"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    golf: 1,
    sport: ["golf"],
    einseitig: true,
    info: {
      kurz: "Bankdrücken mit nur einer Kurzhantel. Der Rumpf muss sich aktiv gegen das Wegkippen zur Hantelseite stemmen, so trainierst du Brust und Anti-Rotation in einer Übung.",
      ausfuehrung: [
        "Leg dich mit einer Kurzhantel auf die Flachbank, die Hantel ist neben der Brust.",
        "Stell die Füße breit und fest auf den Boden. Die freie Hand hält die Bank seitlich fest oder liegt auf dem Bauch.",
        "Zieh beide Schulterblätter zusammen und spann den Bauch an.",
        "Drück die Hantel nach oben, ohne dass Hüfte oder Schultern zur Seite kippen.",
        "Senk die Hantel kontrolliert neben die Brust ab, bis du die Dehnung spürst.",
        "Mach alle Wiederholungen auf einer Seite und wechsle dann."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Körper dreht sich zur Hantelseite: Bauch anspannen, Füße fest in den Boden drücken.",
        "Belastete Schulter hebt ab: Schulterblatt bleibt auf der Bank.",
        "Zu schweres Gewicht: die Stabilität muss erhalten bleiben.",
        "Freie Hand zieht sich an der Bank hoch: nur leicht halten oder auf den Bauch legen."
      ],
      vorteile: [
        "Trainiert jede Brustseite isoliert und gleicht Unterschiede aus.",
        "Stärkt die seitliche Rumpfstabilität.",
        "Volle Bewegungsfreiheit für Schulter und Handgelenk.",
        "Überträgt sich gut auf Sportarten mit einseitigen Stoß- und Drehbewegungen."
      ],
      tipps: [
        "Für mehr Rumpfarbeit die freie Hand auf den Bauch legen statt die Bank zu halten.",
        "Mit der schwächeren Seite beginnen.",
        "Gut als zweite Brustübung oder im Ganzkörpertraining."
      ],
      varianten: "Leichter: beidarmig. Schwerer: freie Hand zur Decke strecken oder auf der Schrägbank.",
      sicherheit: "Bei Schulterbeschwerden schmerzfreie Tiefe wählen. Bei Rückenbeschwerden das Gewicht zunächst gering halten."
    }
  },
  {
    id: "schraegbankdruecken_kh_einarmig",
    name: "Einarmiges Schrägbankdrücken mit Kurzhantel",
    auch: ["Single-Arm Incline Dumbbell Press", "One-Arm Incline DB Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    sekundaer: ["schraege_bauch"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Kurzhanteldrücken auf der Schrägbank. Gezielter Reiz für die obere Brust einer Seite, kombiniert mit Rumpfstabilität.",
      ausfuehrung: [
        "Stell die Bank auf etwa 30 Grad und leg dich mit einer Hantel an der oberen Brust hin.",
        "Stell die Füße breit auf, die freie Hand hält den Rand der Bank.",
        "Zieh die Schulterblätter zusammen und drück die Hantel über die obere Brust.",
        "Senk die Hantel langsam ab, bis du die Dehnung in der oberen Brust spürst.",
        "Drück sie wieder nach oben, ohne den Oberkörper zu verdrehen.",
        "Nach dem Satz die Seite wechseln."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Oberkörper rutscht zur Seite: Füße breiter stellen und Bauch anspannen.",
        "Schulter wandert nach vorn: Schulterblatt auf der Bank halten.",
        "Bank zu steil: 30 Grad genügen.",
        "Unvollständige Dehnung: tief genug absenken."
      ],
      vorteile: [
        "Isoliert die obere Brust je Seite.",
        "Rumpfstabilität gegen Rotation.",
        "Erlaubt eine individuelle Bahn der Hantel.",
        "Gut zum Ausgleich von Seitenunterschieden."
      ],
      tipps: [
        "Die freie Hand kann auf der Brust des Arbeitsarms liegen, um die Muskelspannung zu fühlen.",
        "Langsames Absenken, drei Sekunden.",
        "Als Ergänzung zur beidarmigen Variante."
      ],
      varianten: "Leichter: beidarmig. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden flacheren Winkel und neutralen Griff wählen."
    }
  },
  {
    id: "kh_bankdruecken_abwechselnd",
    name: "Wechselseitiges Bankdrücken mit Kurzhanteln",
    auch: ["Alternating Dumbbell Bench Press", "Alternating DB Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken mit zwei Kurzhanteln, bei dem du abwechselnd einen Arm bewegst, während der andere oben gestreckt hält. Verlängert die Spannungszeit und fordert die Stabilität.",
      ausfuehrung: [
        "Leg dich mit zwei Hanteln auf die Bank und drück beide nach oben, die Arme sind fast gestreckt.",
        "Zieh die Schulterblätter zusammen und spann den Bauch an.",
        "Senk eine Hantel kontrolliert neben die Brust ab, die andere bleibt oben ruhig stehen.",
        "Drück die Hantel wieder nach oben, bis beide auf gleicher Höhe sind.",
        "Senk nun die andere Hantel ab und drück sie wieder hoch.",
        "Zähl eine Wiederholung pro Arm und halte den haltenden Arm immer stabil über der Schulter."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen. Der haltende Arm darf die Atmung nicht stoppen.",
      fehler: [
        "Haltender Arm sinkt ab: bewusst gestreckt und über der Schulter halten.",
        "Körper rollt zur Seite: Bauch anspannen, Füße fest.",
        "Zu schnelle Wechsel: jede Wiederholung kontrolliert.",
        "Zu schwere Hanteln: die Haltearbeit verlängert den Satz deutlich."
      ],
      vorteile: [
        "Längere Spannungszeit für Brust und Trizeps.",
        "Fordert Schulterstabilität und Rumpfkontrolle.",
        "Jede Seite muss eigenständig arbeiten.",
        "Gute Abwechslung zum normalen Kurzhanteldrücken."
      ],
      tipps: [
        "Halte den oberen Arm leicht gebeugt, das schont den Ellbogen.",
        "Etwas leichteres Gewicht als beim beidarmigen Drücken wählen.",
        "Funktioniert auch gut auf der Schrägbank."
      ],
      varianten: "Leichter: beidarmig. Schwerer: der wartende Arm hält unten in der Dehnung statt oben.",
      sicherheit: "Bei Schulterbeschwerden den Haltearm leicht gebeugt lassen und schmerzfrei bleiben."
    }
  },
  {
    id: "squeeze_press",
    name: "Squeeze Press mit Kurzhanteln",
    auch: ["Dumbbell Squeeze Press", "Hex Press", "Crush Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Drücken mit zwei Kurzhanteln, die du während der ganzen Bewegung fest gegeneinander presst. Das Zusammendrücken aktiviert die innere Brust, das Drücken Brust und Trizeps.",
      ausfuehrung: [
        "Leg dich mit zwei Kurzhanteln auf die Bank oder den Boden, die Handflächen zeigen zueinander.",
        "Halte die Hanteln über der Brust zusammen, sie berühren sich auf ganzer Länge.",
        "Drück die Hanteln fest gegeneinander, als wolltest du sie zusammenquetschen.",
        "Senk sie unter diesem Druck kontrolliert zur Brust ab, die Ellbogen bleiben nah am Körper.",
        "Drück die Hanteln wieder nach oben, ohne den Druck zueinander zu verlieren.",
        "Halte oben kurz an und presse noch fester, bevor du wieder absenkst."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen. Nicht die Luft anhalten.",
      fehler: [
        "Druck geht verloren: die Hanteln dürfen sich nicht trennen.",
        "Zu schweres Gewicht: die Übung lebt vom Pressen, nicht von der Last.",
        "Ellbogen weit seitlich: nah am Körper führen.",
        "Zu schnell: langsam und mit Gefühl arbeiten."
      ],
      vorteile: [
        "Spannung in der Brust auch dort, wo normales Drücken wenig Brustarbeit verlangt.",
        "Gelenkschonend durch leichte Gewichte und eng geführte Ellbogen.",
        "Starkes Muskelgefühl für die Brust.",
        "Auch ohne Bank auf dem Boden möglich."
      ],
      tipps: [
        "Sechseckige Hanteln liegen besonders gut aneinander.",
        "Gut als Abschluss des Brusttrainings im Bereich von 12 bis 20 Wiederholungen.",
        "Auf der Schrägbank wird die obere Brust stärker gefordert."
      ],
      varianten: "Leichter: auf dem Boden mit leichten Hanteln. Schwerer: auf der Schrägbank oder mit Pause auf der Brust.",
      sicherheit: "Bei Ellbogenbeschwerden das Pressen dosieren."
    }
  },
  {
    id: "schraegbank_squeeze_press",
    name: "Squeeze Press auf der Schrägbank",
    auch: ["Incline Squeeze Press", "Incline Hex Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Squeeze Press auf einer Schrägbank mit 30 Grad. Betont durch das ständige Zusammendrücken der Hanteln und den Winkel die obere und innere Brust.",
      ausfuehrung: [
        "Stell die Bank auf etwa 30 Grad und leg dich mit zwei Hanteln hin, Handflächen zueinander.",
        "Halte die Hanteln über der oberen Brust zusammen und presse sie fest gegeneinander.",
        "Senk die Hanteln unter Druck langsam zur oberen Brust ab.",
        "Drück sie wieder nach oben, ohne dass sich die Hanteln trennen.",
        "Halte oben kurz und presse fester zusammen.",
        "Wiederhole gleichmäßig, Schulterblätter bleiben auf der Bank."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen.",
      fehler: [
        "Hanteln trennen sich: ständig zusammendrücken.",
        "Bank zu steil: die Schulter übernimmt sonst.",
        "Zu schnell: langsam und kontrolliert.",
        "Ellbogen nach außen: nah am Körper halten."
      ],
      vorteile: [
        "Gezielter Reiz für die obere Brust.",
        "Mit leichten Gewichten effektiv und gelenkschonend.",
        "Starkes Muskelgefühl.",
        "Gut als Abschluss nach schweren Drückübungen."
      ],
      tipps: [
        "Zwei Sekunden oben halten und dabei maximal pressen.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Gut im Supersatz mit Kabel-Flys von unten nach oben."
      ],
      varianten: "Leichter: flache Bank. Schwerer: langsamere Absenkphase.",
      sicherheit: "Bei Schulterbeschwerden flacheren Winkel wählen."
    }
  },
  {
    id: "kh_druecken_gymnastikball",
    name: "Kurzhanteldrücken auf dem Gymnastikball",
    auch: ["Stability Ball Dumbbell Press", "Swiss Ball DB Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["gesaess", "bauch", "beinbeuger"],
    geraete: [["kurzhantel", "gymnastikball"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Kurzhanteldrücken mit Schultern und oberem Rücken auf einem Gymnastikball, die Hüfte in Brückenposition. Verbindet Brusttraining mit Hüft- und Rumpfstabilität.",
      ausfuehrung: [
        "Setz dich mit den Hanteln auf den Ball und roll langsam nach vorn, bis Kopf, Schultern und oberer Rücken auf dem Ball liegen.",
        "Heb die Hüfte an, bis Knie, Hüfte und Schultern eine Linie bilden. Die Füße stehen hüftbreit, die Knie über den Fersen.",
        "Bring die Hanteln neben die Brust und spann Gesäß und Bauch an.",
        "Drück die Hanteln nach oben, ohne dass die Hüfte absinkt.",
        "Senk sie kontrolliert ab, bis sie etwa auf Brusthöhe sind.",
        "Halte die Hüfte während des ganzen Satzes oben und roll zum Ende langsam zurück in den Sitz."
      ],
      atmung: "Beim Absenken einatmen, beim Drücken ausatmen. Ruhig weiteratmen, damit die Balance stabil bleibt.",
      fehler: [
        "Hüfte sinkt ab: Gesäß fest anspannen.",
        "Füße zu eng: hüftbreit oder breiter für mehr Stabilität.",
        "Zu tief absenken: Ball gibt weniger Halt, Bewegungsumfang an die Stabilität anpassen.",
        "Zu schwere Hanteln: die Kontrolle hat Vorrang."
      ],
      vorteile: [
        "Brustarbeit plus Gesäß- und Rumpfspannung.",
        "Schult Balance und Körperkontrolle.",
        "Gut für Heimtraining ohne Bank.",
        "Abwechslung für Einsteiger und Fortgeschrittene."
      ],
      tipps: [
        "Für Muskelaufbau eignen sich stabile Varianten besser, der Ball ist eher eine Ergänzung.",
        "Ein Ball, auf dem die Oberschenkel waagerecht sind, wenn du sitzt, passt meist gut.",
        "Mit leichten Hanteln die Bewegung lernen."
      ],
      varianten: "Leichter: Füße weiter auseinander. Schwerer: Füße enger oder einarmig.",
      sicherheit: "Nur einen intakten, belastbaren Ball verwenden. Bei Gleichgewichtsproblemen eine stabile Bank nutzen."
    }
  },
  // ---------- Multipresse ----------
  {
    id: "bankdruecken_multipresse",
    name: "Bankdrücken an der Multipresse",
    auch: ["Smith Machine Bench Press", "Smith Bench"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["multipresse", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Bankdrücken mit geführter Stange. Weil du nicht balancieren musst, kannst du dich ganz auf die Brust konzentrieren und sicher bis nah ans Muskelversagen trainieren.",
      ausfuehrung: [
        "Stell die Bank so unter die Multipresse, dass die Stange unten etwa die untere Brust trifft.",
        "Stell die Sicherheitsstopper knapp unter Brusthöhe ein.",
        "Leg dich hin, greif etwas breiter als schulterbreit, Füße fest am Boden, Schulterblätter zusammen.",
        "Entriegle die Stange mit einer Drehung der Handgelenke.",
        "Senk die Stange kontrolliert zur unteren Brust ab und drück sie wieder hoch, bis die Arme gestreckt sind.",
        "Verriegle die Stange nach dem Satz wieder in den Haken."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Bank falsch positioniert: die Stange muss auf der unteren Brust landen, nicht am Hals.",
        "Sicherheitsstopper vergessen: immer einstellen.",
        "Schulterblätter lose: auch an der Maschine Spannung aufbauen.",
        "Ellbogen ganz seitlich: etwa 45 bis 60 Grad abspreizen."
      ],
      vorteile: [
        "Sicher bis nah ans Versagen, auch allein.",
        "Brust kann gezielt ermüdet werden, ohne dass die Stabilität begrenzt.",
        "Gut für Einsteiger und für hohe Wiederholungen.",
        "Leicht steigerbar in kleinen Schritten."
      ],
      tipps: [
        "Die Stangenbahn ist fest, daher die Bank so wählen, dass sie zu deinem Körper passt.",
        "Gut als zweite Drückübung nach freiem Bankdrücken.",
        "Langsames Absenken, drei Sekunden, für mehr Muskelreiz."
      ],
      varianten: "Leichter: Brustpresse an der Maschine. Schwerer: Pause auf der Brust oder langsamere Absenkphase.",
      sicherheit: "Bei Schulterbeschwerden Griff etwas enger und Ellbogen näher am Körper."
    }
  },
  {
    id: "schraegbankdruecken_multipresse",
    name: "Schrägbankdrücken an der Multipresse",
    auch: ["Smith Machine Incline Press", "Incline Smith Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    geraete: [["multipresse", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Schrägbankdrücken mit geführter Stange auf einer 30-Grad-Bank. Gezielter, stabiler Reiz für die obere Brust und sehr beliebt im Muskelaufbau.",
      ausfuehrung: [
        "Stell die Schrägbank auf etwa 30 Grad unter die Multipresse, sodass die Stange auf die obere Brust trifft.",
        "Stell die Sicherheitsstopper knapp oberhalb der Brust ein.",
        "Leg dich hin, greif etwas breiter als schulterbreit und zieh die Schulterblätter zusammen.",
        "Entriegle die Stange und senk sie kontrolliert zur oberen Brust ab.",
        "Drück die Stange gleichmäßig nach oben, bis die Arme fast gestreckt sind.",
        "Verriegle die Stange nach dem Satz."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Drücken ausatmen.",
      fehler: [
        "Bank zu weit vorn oder hinten: die Stange soll die obere Brust treffen.",
        "Bank zu steil: 30 Grad reichen.",
        "Gesäß hebt ab: Füße fest, Bogen moderat.",
        "Unvollständiger Bewegungsumfang: bis zur Brust absenken."
      ],
      vorteile: [
        "Stabil und sicher bis nah ans Versagen.",
        "Gezielter Reiz für die obere Brust.",
        "Für Einsteiger leicht erlernbar.",
        "Gut steigerbar."
      ],
      tipps: [
        "Füße auf die Bank zu stellen ist nicht nötig, bleib lieber stabil am Boden.",
        "Gut im Bereich von 8 bis 12 Wiederholungen.",
        "Kurzer Halt unten verbessert den Reiz in der Dehnung."
      ],
      varianten: "Leichter: Schrägbank-Brustpresse. Schwerer: Pause oder langsames Absenken.",
      sicherheit: "Bei Schulterbeschwerden flacheren Winkel wählen und Sicherheitsstopper nutzen."
    }
  },
  // ---------- Maschine ----------
  {
    id: "brustpresse",
    name: "Brustpresse an der Maschine",
    auch: ["Machine Chest Press", "Seated Chest Press", "Brustpresse sitzend"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Geführtes Brustdrücken im Sitzen. Ideal für Einsteiger und um die Brust sicher bis nah ans Muskelversagen zu trainieren, ohne Balance oder Partner.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe etwa auf Höhe der mittleren bis unteren Brust liegen.",
        "Setz dich mit dem Rücken fest an das Polster, die Füße stehen flach am Boden.",
        "Greif die Griffe und zieh die Schulterblätter leicht nach hinten unten. Die Brust bleibt aufrecht.",
        "Drück die Griffe nach vorn, bis die Arme fast gestreckt sind. Die Ellbogen bleiben leicht gebeugt.",
        "Führ die Griffe langsam zurück, bis du eine deutliche Dehnung in der Brust spürst, ohne dass die Schultern nach vorn kippen.",
        "Wiederhole gleichmäßig. Das Gewicht setzt zwischen den Wiederholungen nicht ab."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Sitz zu hoch oder zu tief: Griffe auf Höhe der unteren Brust.",
        "Schultern lösen sich vom Polster: Schulterblätter bleiben hinten.",
        "Gewicht schlägt zwischen den Wiederholungen auf: kurz vor dem Anschlag umkehren.",
        "Arme ruckartig durchstrecken: oben leicht gebeugt bleiben."
      ],
      vorteile: [
        "Sicher und leicht erlernbar.",
        "Die Brust kann ohne Stabilitätsgrenze ermüdet werden.",
        "Gut steigerbar in kleinen Schritten.",
        "Schonend für Rücken und Handgelenke."
      ],
      tipps: [
        "Viele Maschinen haben einen Fußhebel, mit dem du die Griffe in die Startposition bringst. Das schont die Schultern bei schweren Gewichten.",
        "Gut als zweite oder dritte Brustübung im Bereich von 10 bis 15 Wiederholungen.",
        "Langsames Zurückführen erhöht den Reiz in der Dehnung."
      ],
      varianten: "Leichter: weniger Gewicht oder Liegestütz erhöht. Schwerer: einarmig, Pause in der Dehnung oder langsameres Zurückführen.",
      sicherheit: "Bei Schulterbeschwerden den Bewegungsumfang hinten begrenzen."
    }
  },
  {
    id: "brustpresse_schraeg",
    name: "Schrägbank-Brustpresse an der Maschine",
    auch: ["Incline Machine Press", "Incline Chest Press Machine"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Geführtes Drücken schräg nach oben vorn. Gezielter Reiz für die obere Brust, sicher und gut steuerbar.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe etwa auf Höhe der oberen Brust liegen.",
        "Setz dich mit dem Rücken an das Polster, Füße flach am Boden.",
        "Greif die Griffe und zieh die Schulterblätter nach hinten unten.",
        "Drück die Griffe schräg nach oben vorn, bis die Arme fast gestreckt sind.",
        "Führ die Griffe langsam zurück in die Dehnung, ohne die Schultern nach vorn zu schieben.",
        "Wiederhole gleichmäßig ohne das Gewicht abzusetzen."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Griffe zu hoch: die Schulter übernimmt.",
        "Rücken löst sich vom Polster: Kontakt halten.",
        "Schultern ziehen zu den Ohren: lang machen.",
        "Zu kurzer Bewegungsumfang: in die Dehnung zurückführen."
      ],
      vorteile: [
        "Betont die obere Brust.",
        "Sicher bis nah ans Versagen.",
        "Gute Ergänzung zur Flachbank.",
        "Gelenkschonend durch die Führung."
      ],
      tipps: [
        "Gut nach Schrägbankdrücken mit Kurzhanteln für zusätzliches Volumen.",
        "Im Bereich von 10 bis 15 Wiederholungen arbeiten.",
        "Bei Maschinen mit getrennten Armen kannst du auch einarmig trainieren."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig oder mit Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden den Sitz etwas höher stellen und den Bewegungsumfang begrenzen."
    }
  },
  {
    id: "brustpresse_einarmig",
    name: "Einarmige Brustpresse an der Maschine",
    auch: ["Single-Arm Machine Chest Press", "Iso-Lateral Chest Press", "Unilateral Machine Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Brustpresse an einer Maschine mit getrennten Armen, jeweils nur mit einer Seite. Erlaubt einen größeren Bewegungsumfang und volle Konzentration auf eine Brustseite.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass der Griff etwa auf Höhe der unteren Brust liegt.",
        "Setz dich fest an das Polster, die freie Hand hält den Sitz oder den anderen Griff fest.",
        "Drück den Griff mit einem Arm nach vorn, bis der Arm fast gestreckt ist. Du kannst dabei leicht zur Körpermitte hin drücken.",
        "Führ den Griff langsam zurück, bis du eine tiefe Dehnung in der Brust spürst.",
        "Halte den Oberkörper ruhig, ohne dich mitzudrehen.",
        "Nach dem Satz die Seite wechseln."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht mit: Schulterblätter am Polster lassen.",
        "Zu schweres Gewicht: die Bewegung muss sauber bleiben.",
        "Schulter rollt nach vorn: Brust aufrecht halten.",
        "Zu schnelles Zurückführen: zwei bis drei Sekunden."
      ],
      vorteile: [
        "Großer Bewegungsumfang mit tiefer Dehnung.",
        "Gleicht Seitenunterschiede aus.",
        "Sehr gutes Muskelgefühl durch Konzentration auf eine Seite.",
        "Sicher bis nah ans Versagen."
      ],
      tipps: [
        "Mit der schwächeren Seite beginnen.",
        "Die freie Hand kann auf die arbeitende Brust gelegt werden.",
        "Gut für 10 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: beidarmig. Schwerer: Pause in der Dehnung oder langsamere Absenkphase.",
      sicherheit: "Bei Schulterbeschwerden den hinteren Bewegungsumfang begrenzen."
    }
  },
  {
    id: "brustpresse_negativ",
    name: "Negativ-Brustpresse an der Maschine",
    auch: ["Decline Machine Press", "Decline Chest Press Machine"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps"],
    sekundaer: ["schulter_vorn"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Geführtes Drücken schräg nach unten vorn. Betont die untere Brust und schont die vordere Schulter.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe etwa auf Höhe der unteren Brust oder knapp darunter liegen.",
        "Setz dich fest an das Polster, die Füße stehen stabil.",
        "Greif die Griffe und zieh die Schulterblätter zurück.",
        "Drück die Griffe schräg nach unten vorn, bis die Arme fast gestreckt sind.",
        "Führ die Griffe kontrolliert zurück, bis du die Dehnung in der Brust spürst.",
        "Wiederhole gleichmäßig, ohne das Gewicht zwischendurch abzusetzen."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Schultern heben sich: Schulterblätter nach unten ziehen.",
        "Rücken löst sich vom Polster: fest anlehnen.",
        "Gewicht schlägt hinten an: vorher umkehren.",
        "Arme durchschlagen: oben leicht gebeugt."
      ],
      vorteile: [
        "Betont die untere Brust.",
        "Geringe Schulterbelastung.",
        "Alternative zu Dips ohne Körpergewicht.",
        "Sicher und gut steuerbar."
      ],
      tipps: [
        "Gut als Alternative zu Dips, wenn diese die Schulter stören.",
        "Im Bereich von 10 bis 15 Wiederholungen.",
        "Langsames Zurückführen betont die Dehnung."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig oder Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden schmerzfreien Bewegungsumfang wählen."
    }
  },
  // ---------- Kabel, Landmine, Band ----------
  {
    id: "kabel_drueck_einarmig",
    name: "Einarmiges Drücken am Kabelzug stehend",
    auch: ["Single-Arm Standing Cable Press", "One-Arm Cable Chest Press", "Cable Punch"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    sekundaer: ["schraege_bauch", "bauch", "gesaess"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    sport: ["golf", "fussball"],
    einseitig: true,
    info: {
      kurz: "Einarmiges Drücken im Stand mit dem Kabel im Rücken. Verbindet Brustarbeit mit Anti-Rotation im Rumpf, weil du dich gegen das Mitdrehen stemmen musst.",
      ausfuehrung: [
        "Stell den Kabelzug etwa auf Brusthöhe ein und stell dich mit dem Rücken zum Turm, einen Schritt entfernt.",
        "Nimm den Griff in eine Hand, die Hand ist neben der Brust, der Ellbogen hinten.",
        "Stell dich in eine Schrittstellung, das Bein auf der Gegenseite des Arbeitsarms vorn. Knie leicht gebeugt, Bauch angespannt.",
        "Drück den Griff gerade nach vorn, bis der Arm fast gestreckt ist. Hüfte und Schultern bleiben nach vorn ausgerichtet.",
        "Führ den Griff langsam zurück, bis die Hand wieder neben der Brust ist und du eine Dehnung spürst.",
        "Nach allen Wiederholungen die Seite und die Fußstellung wechseln."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht sich mit: Bauch fest, Becken bleibt frontal.",
        "Schulter schiebt nach vorn: am Ende der Bewegung bleibt die Schulter unten und hinten.",
        "Zu nah am Turm: einen großen Schritt nach vorn, damit Spannung entsteht.",
        "Hohlkreuz: Becken leicht kippen und Gesäß anspannen."
      ],
      vorteile: [
        "Trainiert Brust und Rumpfstabilität gegen Rotation gleichzeitig.",
        "Stehende, sportnahe Druckbewegung.",
        "Schulterfreie Bewegungsbahn ohne Bank.",
        "Überträgt Kraft von den Beinen über den Rumpf in den Arm, wie beim Stoßen oder Wegdrücken."
      ],
      tipps: [
        "Mit einem leichten Schritt nach vorn während des Drückens kannst du die Übung dynamischer machen.",
        "Mit dem Band auch zu Hause oder unterwegs möglich.",
        "Gut als Teil eines Ganzkörpertrainings oder als Ergänzung für Ballsportler."
      ],
      varianten: "Leichter: beidbeinig parallel stehen und weniger Gewicht. Schwerer: im parallelen Stand oder auf einem Bein.",
      sicherheit: "Bei Rückenbeschwerden auf saubere Bauchspannung achten und das Gewicht moderat halten."
    }
  },
  {
    id: "kabel_brustdruecken_stehend",
    name: "Brustdrücken am Kabelzug stehend",
    auch: ["Standing Cable Chest Press", "Cable Chest Press", "Standing Cable Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Beidarmiges Drücken im Stand zwischen zwei Kabeltürmen. Gleichmäßige Spannung über den ganzen Weg und ein natürlicher Bewegungsweg der Schultern.",
      ausfuehrung: [
        "Stell beide Kabelzüge etwa auf Brusthöhe ein und nimm je einen Griff in jede Hand.",
        "Geh einen Schritt nach vorn in eine leichte Schrittstellung, bis die Gewichte abheben.",
        "Bring die Hände neben die Brust, die Ellbogen zeigen etwa 45 bis 60 Grad nach hinten außen.",
        "Spann den Bauch an und drück die Griffe nach vorn zusammen, bis die Arme fast gestreckt sind und sich die Hände vor der Brust treffen.",
        "Führ die Griffe langsam zurück, bis du eine Dehnung in der Brust spürst.",
        "Halte den Oberkörper ruhig, er neigt sich nur leicht nach vorn."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Zu weit nach vorn gelehnt: Oberkörper nur leicht neigen.",
        "Hohlkreuz: Bauch und Gesäß anspannen.",
        "Hände zu weit auseinander am Ende: zur Mitte hin drücken.",
        "Schultern nach vorn: Schulterblätter bleiben stabil."
      ],
      vorteile: [
        "Konstante Spannung, auch am Ende der Bewegung.",
        "Freie Bewegungsbahn, oft schulterfreundlich.",
        "Fordert die Rumpfstabilität im Stand.",
        "Leicht dosierbar."
      ],
      tipps: [
        "Ein leicht nach unten gerichteter Druck betont die untere Brust, ein leicht nach oben gerichteter die obere.",
        "Gut im Bereich von 10 bis 15 Wiederholungen.",
        "Mit einem langen Band über den Rücken auch zu Hause möglich."
      ],
      varianten: "Leichter: weniger Gewicht, breiterer Stand. Schwerer: paralleler Stand oder langsameres Zurückführen.",
      sicherheit: "Bei Schulterbeschwerden den Bewegungsumfang hinten begrenzen."
    }
  },
  {
    id: "kabel_brustdruecken_bank",
    name: "Kabeldrücken auf der Bank",
    auch: ["Cable Bench Press", "Lying Cable Chest Press", "Seated Cable Chest Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["kabelzug", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Bankdrücken mit zwei Kabeln, liegend oder auf der Schrägbank zwischen den Kabeltürmen. Die Kabel ziehen schräg nach außen, dadurch bleibt die Brust auch oben unter Spannung.",
      ausfuehrung: [
        "Stell eine Flach- oder Schrägbank mittig zwischen zwei Kabeltürme, die Rollen sind ganz unten.",
        "Nimm je einen Griff in die Hand und leg dich auf die Bank.",
        "Bring die Hände neben die Brust, die Ellbogen zeigen etwa 45 bis 60 Grad vom Körper weg.",
        "Drück die Griffe nach oben und leicht zur Mitte, bis die Arme fast gestreckt sind.",
        "Führ sie langsam zurück, bis du eine tiefe Dehnung in der Brust spürst.",
        "Leg die Griffe nach dem Satz kontrolliert ab, bevor du aufstehst."
      ],
      atmung: "Beim Drücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Bank nicht mittig: ungleiche Spannung auf beiden Seiten.",
        "Hände oben zu weit auseinander: zur Mitte drücken.",
        "Griffe beim Aufstehen loslassen: erst ablegen, sonst schnellen die Kabel zurück.",
        "Zu tief absenken mit rollender Schulter: Schulterblätter auf der Bank lassen."
      ],
      vorteile: [
        "Spannung über den ganzen Bewegungsweg, auch oben.",
        "Freie Bewegungsbahn.",
        "Kombiniert Drücken und Zusammenführen.",
        "Gute Abwechslung zu Kurzhanteln."
      ],
      tipps: [
        "Auf einer 30-Grad-Schrägbank wird die obere Brust betont.",
        "Gut im Bereich von 10 bis 15 Wiederholungen.",
        "Ein Partner kann dir die Griffe anreichen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: langsames Absenken oder Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden Tiefe begrenzen."
    }
  },
  {
    id: "landmine_brustdruecken",
    name: "Landmine-Brustdrücken beidarmig",
    auch: ["Landmine Chest Press", "Landmine Squeeze Press", "Two-Hand Landmine Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    sekundaer: ["bauch"],
    geraete: [["landmine", "langhantel"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 1,
    hinweis: "Ohne Landmine das Stangenende in eine gepolsterte Ecke stellen.",
    info: {
      kurz: "Beidarmiges Drücken des Langhantelendes von der Brust schräg nach vorn oben. Die Bahn liegt zwischen Bankdrücken und Schulterdrücken und ist für viele Schultern sehr angenehm.",
      ausfuehrung: [
        "Steck ein Ende der Langhantel in die Landmine oder stell es in eine Ecke und belade das andere Ende.",
        "Heb das Stangenende an und halte es mit beiden Händen ineinander verschränkt vor der Brust.",
        "Stell dich in eine leichte Schrittstellung oder hüftbreit, Oberkörper leicht nach vorn geneigt, Bauch angespannt.",
        "Drück die Stange schräg nach vorn oben, bis die Arme fast gestreckt sind, und presse dabei die Hände fest zusammen.",
        "Senk die Stange kontrolliert zur oberen Brust zurück.",
        "Halte Rumpf und Becken ruhig, die Kraft kommt aus Brust und Armen."
      ],
      atmung: "Beim Drücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hohlkreuz: Bauch und Gesäß anspannen, Oberkörper leicht nach vorn.",
        "Schultern ziehen hoch: lang machen.",
        "Stange vom Körper weg absenken: zur oberen Brust zurückführen.",
        "Zu viel Gewicht: die Bewegung muss kontrolliert bleiben."
      ],
      vorteile: [
        "Schulterfreundliche Drückbahn.",
        "Betont durch den Druck nach innen die Brustmitte.",
        "Fordert die Rumpfstabilität im Stand.",
        "Wenig Ausrüstung nötig."
      ],
      tipps: [
        "Je flacher du dich nach vorn lehnst, desto mehr arbeitet die Brust.",
        "Gut im Bereich von 8 bis 15 Wiederholungen.",
        "Kombiniert sich gut mit Landmine-Rudern."
      ],
      varianten: "Leichter: nur die Stange. Schwerer: mehr Gewicht oder einarmig im Halbkniestand.",
      sicherheit: "Bei Rückenbeschwerden auf neutrale Wirbelsäule achten."
    }
  },
  {
    id: "band_brustdruecken",
    name: "Brustdrücken mit Band",
    auch: ["Band Chest Press", "Resistance Band Chest Press"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Brustdrücken im Stand mit einem Widerstandsband, das hinter dir befestigt ist oder um den Rücken läuft. Ideal für zu Hause, auf Reisen und zum Aufwärmen.",
      ausfuehrung: [
        "Befestige das Band auf Brusthöhe hinter dir an einem festen Gegenstand oder leg es um den oberen Rücken.",
        "Nimm die Enden in die Hände und bring die Hände neben die Brust.",
        "Stell dich in eine leichte Schrittstellung, der Bauch ist angespannt.",
        "Drück die Hände nach vorn, bis die Arme fast gestreckt sind und die Hände sich vor der Brust treffen.",
        "Führ die Hände langsam zurück, ohne das Band schnappen zu lassen.",
        "Halte den Oberkörper ruhig und die Schultern unten."
      ],
      atmung: "Beim Drücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Band schnappt zurück: langsam und kontrolliert zurückführen.",
        "Hohlkreuz: Bauch anspannen.",
        "Zu leichtes Band: am Ende des Satzes sollte es schwer werden.",
        "Schultern heben sich: lang machen."
      ],
      vorteile: [
        "Überall machbar.",
        "Zunehmender Widerstand zum Ende der Bewegung.",
        "Gelenkschonend.",
        "Gut zum Aufwärmen vor Bankdrücken."
      ],
      tipps: [
        "Mit dem Band um den Rücken brauchst du keinen Befestigungspunkt.",
        "Im Bereich von 12 bis 25 Wiederholungen arbeiten.",
        "Bänder regelmäßig auf Risse prüfen."
      ],
      varianten: "Leichter: leichteres Band oder näher an den Befestigungspunkt. Schwerer: stärkeres Band oder einarmig.",
      sicherheit: "Beschädigte Bänder sofort austauschen und auf sichere Befestigung achten."
    }
  },
  // ---------- Liegestütz ----------
  {
    id: "liegestuetz_wand",
    name: "Liegestütz an der Wand",
    auch: ["Wall Push-Up", "Wand-Liegestütz"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["wand"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    schwerer: "liegestuetz_erhoeht",
    info: {
      kurz: "Die leichteste Liegestütz-Variante, im Stehen gegen eine Wand. Ideal für den Einstieg, nach Pausen oder zum Erlernen der richtigen Körperspannung.",
      ausfuehrung: [
        "Stell dich etwa eine Armlänge vor eine Wand, die Füße hüftbreit.",
        "Leg die Hände etwas breiter als schulterbreit auf Schulterhöhe flach an die Wand.",
        "Geh mit den Füßen noch einen kleinen Schritt zurück, sodass der Körper leicht schräg ist. Spann Bauch und Gesäß an.",
        "Beuge die Arme und bring die Brust kontrolliert Richtung Wand. Die Ellbogen zeigen etwa 45 Grad nach außen hinten.",
        "Stopp kurz bevor die Nase die Wand berührt.",
        "Drück dich wieder zurück, bis die Arme gestreckt sind. Der Körper bleibt dabei gerade wie ein Brett."
      ],
      atmung: "Beim Absenken zur Wand einatmen, beim Wegdrücken ausatmen.",
      fehler: [
        "Hüfte knickt nach vorn: Gesäß anspannen, der Körper bleibt eine Linie.",
        "Kopf schiebt sich vor: die Brust führt, nicht die Nase.",
        "Hände zu hoch: auf Schulterhöhe ansetzen.",
        "Zu nah an der Wand: weiter zurückgehen, sonst ist der Reiz zu gering."
      ],
      vorteile: [
        "Sehr gelenkschonend und für fast alle geeignet.",
        "Lehrt die Körperspannung für alle weiteren Liegestütz-Varianten.",
        "Überall machbar.",
        "Guter Einstieg nach Verletzungspausen."
      ],
      tipps: [
        "Je weiter die Füße von der Wand weg sind, desto schwerer wird es.",
        "Wenn du 20 saubere Wiederholungen schaffst, wechsle zur erhöhten Variante an der Bank.",
        "Langsames Absenken in drei Sekunden macht die Übung effektiver."
      ],
      varianten: "Leichter: näher an die Wand stellen. Schwerer: weiter weg stehen oder Liegestütz mit Händen auf der Bank.",
      sicherheit: "Bei Handgelenkbeschwerden die Finger leicht nach außen drehen oder auf den Fäusten arbeiten."
    }
  },
  {
    id: "liegestuetz_erhoeht",
    name: "Liegestütz mit Händen erhöht",
    auch: ["Incline Push-Up", "Bench Push-Up", "Schräger Liegestütz"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["bank"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    schwerer: "liegestuetz_knie",
    info: {
      kurz: "Liegestütz mit den Händen auf einer Bank, Box oder stabilen Kante. Leichter als am Boden, aber mit voller Körperspannung. Der wichtigste Schritt zum ersten Liegestütz am Boden.",
      ausfuehrung: [
        "Stell dich vor eine Bank, Box oder stabile Tischkante und leg die Hände etwas breiter als schulterbreit auf.",
        "Geh mit den Füßen nach hinten, bis der Körper von Kopf bis Ferse eine gerade Linie bildet.",
        "Spann Bauch und Gesäß an, die Schultern liegen über den Händen.",
        "Senk die Brust zur Kante, die Ellbogen zeigen etwa 45 Grad nach hinten.",
        "Berühr die Kante leicht mit der Brust oder geh so tief wie möglich.",
        "Drück dich kraftvoll zurück, bis die Arme gestreckt sind, ohne dass die Hüfte durchhängt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte hängt durch: Gesäß und Bauch fest anspannen.",
        "Ellbogen ganz seitlich: etwas zum Körper drehen.",
        "Kopf hängt nach unten: Blick schräg nach vorn, Nacken lang.",
        "Instabile Unterlage: nur auf fest stehenden Flächen üben."
      ],
      vorteile: [
        "Volle Liegestütztechnik bei geringerer Last.",
        "Stufenlos anpassbar über die Höhe der Unterlage.",
        "Kräftigt Brust, Trizeps und Rumpf.",
        "Schonender für Schultern und Handgelenke als der Boden."
      ],
      tipps: [
        "Je niedriger die Unterlage, desto schwerer die Übung. Eine Treppe bietet viele Abstufungen.",
        "Wenn 15 saubere Wiederholungen gehen, eine niedrigere Stufe wählen.",
        "Ausrüstung für zu Hause: Küchenarbeitsplatte, Fensterbank oder Sofalehne, wenn sie stabil sind."
      ],
      varianten: "Leichter: höhere Unterlage oder an der Wand. Schwerer: niedrigere Unterlage, Knie-Liegestütz oder Liegestütz am Boden.",
      sicherheit: "Bei Handgelenkbeschwerden mit Fäusten oder Liegestützgriffen arbeiten."
    }
  },
  {
    id: "liegestuetz_knie",
    name: "Liegestütz auf den Knien",
    auch: ["Knee Push-Up", "Kneeling Push-Up", "Damenliegestütz"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["matte"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    schwerer: "liegestuetz",
    info: {
      kurz: "Liegestütz mit den Knien als Auflagepunkt. Verringert die Last deutlich und erlaubt trotzdem den vollen Bewegungsumfang am Boden.",
      ausfuehrung: [
        "Knie dich auf eine Matte und setz die Hände etwas breiter als schulterbreit unter den Schultern auf.",
        "Wandere mit den Händen nach vorn, bis Knie, Hüfte und Schultern eine gerade Linie bilden.",
        "Spann Bauch und Gesäß an. Die Hüfte bleibt gestreckt und knickt nicht ein.",
        "Senk die Brust kontrolliert zum Boden, die Ellbogen zeigen etwa 45 Grad nach hinten.",
        "Geh so tief, bis die Brust knapp über dem Boden ist.",
        "Drück dich wieder nach oben, bis die Arme gestreckt sind."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Gesäß nach oben gestreckt: Hüfte strecken, Knie bis Kopf in einer Linie.",
        "Nur der Kopf geht nach unten: die ganze Brust senkt sich.",
        "Zu kurzer Bewegungsumfang: bis knapp über den Boden.",
        "Hände zu weit vorn: unter oder knapp neben den Schultern."
      ],
      vorteile: [
        "Volle Bewegungsamplitude bei geringerer Last.",
        "Baut Kraft für den ersten Liegestütz auf.",
        "Ohne Ausrüstung überall machbar.",
        "Gut als Abschluss nach normalen Liegestützen, wenn diese nicht mehr sauber gehen."
      ],
      tipps: [
        "Ein gefaltetes Handtuch unter den Knien macht die Übung angenehmer.",
        "Wenn 15 saubere Wiederholungen gehen, auf normale Liegestütze wechseln.",
        "Langsames Absenken in drei Sekunden steigert die Wirkung."
      ],
      varianten: "Leichter: Hände erhöht. Schwerer: normaler Liegestütz oder negative Liegestütze von den Füßen.",
      sicherheit: "Bei Kniebeschwerden gut polstern oder die erhöhte Variante wählen."
    }
  },
  {
    id: "liegestuetz",
    name: "Liegestütz",
    auch: ["Push-Up", "Liegestütze", "Pushup"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch", "gesaess"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 1,
    golf: 1,
    schwerer: "liegestuetz_fuesse_hoch",
    info: {
      kurz: "Die klassische Körpergewichtsübung für Brust, Trizeps und vordere Schulter. Gleichzeitig ein Rumpftraining, weil der Körper wie ein Brett gerade bleiben muss.",
      ausfuehrung: [
        "Setz die Hände etwas breiter als schulterbreit auf den Boden, die Finger zeigen nach vorn.",
        "Streck die Beine nach hinten, die Füße stehen hüftbreit auf den Zehenspitzen.",
        "Spann Bauch und Gesäß an, sodass Kopf, Schultern, Hüfte und Fersen eine Linie bilden.",
        "Senk den Körper als Ganzes ab, bis die Brust knapp über dem Boden ist. Die Ellbogen zeigen etwa 45 Grad nach hinten.",
        "Drück dich kraftvoll nach oben, bis die Arme gestreckt sind.",
        "Schieb oben die Schultern leicht vom Boden weg, bevor die nächste Wiederholung beginnt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte hängt durch: Gesäß und Bauch anspannen.",
        "Gesäß ragt nach oben: Hüfte in die Linie bringen.",
        "Ellbogen stehen 90 Grad seitlich: etwa 45 Grad zum Körper.",
        "Halbe Wiederholungen: die Brust geht bis knapp über den Boden.",
        "Kopf führt die Bewegung: Nacken lang, Blick leicht nach vorn."
      ],
      vorteile: [
        "Trainiert Brust, Trizeps und Schulter ohne Ausrüstung.",
        "Stärkt die Rumpfspannung gegen ein Durchhängen, ähnlich einem Unterarmstütz.",
        "Die Schulterblätter können sich frei bewegen, das ist gut für die Schultergesundheit.",
        "Unendlich variierbar, von der Wand bis zum einarmigen Liegestütz."
      ],
      tipps: [
        "Stell dir vor, du schraubst die Hände in den Boden, die Ellbogen drehen dabei leicht nach innen.",
        "Für Muskelaufbau Sätze bis nah ans Versagen, zum Beispiel 3 Sätze mit 1 bis 2 Wiederholungen im Tank.",
        "Langsames Absenken und eine kurze Pause unten machen die Übung deutlich schwerer."
      ],
      varianten: "Leichter: Hände erhöht oder auf den Knien. Schwerer: Füße erhöht, Defizit-Liegestütz, mit Band oder Zusatzgewicht.",
      sicherheit: "Bei Handgelenkbeschwerden Liegestützgriffe, Kurzhanteln oder Fäuste nutzen. Bei Schulterbeschwerden enger greifen."
    }
  },
  {
    id: "liegestuetz_fuesse_hoch",
    name: "Liegestütz mit Füßen erhöht",
    auch: ["Decline Push-Up", "Feet-Elevated Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "schulter_vorn", "trizeps"],
    sekundaer: ["bauch"],
    geraete: [["bank"], ["box"], []],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    schwerer: "liegestuetz_defizit",
    info: {
      kurz: "Liegestütz mit den Füßen auf einer Bank oder Box. Mehr Körpergewicht lastet auf den Armen und die obere Brust sowie die vordere Schulter werden stärker gefordert.",
      ausfuehrung: [
        "Stell die Füße auf eine Bank, Box oder Treppenstufe von etwa 30 bis 50 Zentimeter Höhe.",
        "Setz die Hände etwas breiter als schulterbreit auf den Boden, die Schultern über den Händen.",
        "Spann Bauch und Gesäß an, der Körper bildet eine gerade Linie.",
        "Senk die Brust kontrolliert zum Boden, die Ellbogen etwa 45 Grad nach hinten.",
        "Drück dich wieder hoch, bis die Arme gestreckt sind.",
        "Halte die Hüfte während des ganzen Satzes auf einer Linie."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte knickt ein oder hängt durch: Körper bleibt ein Brett.",
        "Kopf berührt zuerst den Boden: Brust führt die Bewegung.",
        "Unterlage zu hoch: dann wird es eher ein Schulterdrücken.",
        "Hände zu weit vorn: unter den Schultern aufsetzen."
      ],
      vorteile: [
        "Steigert die Last ohne Gewichte.",
        "Betont die obere Brust und die vordere Schulter.",
        "Fordert die Rumpfspannung stärker.",
        "Überall machbar."
      ],
      tipps: [
        "Je höher die Füße, desto schwerer die Übung, 30 bis 50 Zentimeter sind ideal.",
        "Mit Liegestützgriffen auf dem Boden entsteht zusätzlich ein Defizit.",
        "Wenn 20 Wiederholungen gehen, Zusatzlast oder Band verwenden."
      ],
      varianten: "Leichter: normaler Liegestütz. Schwerer: Defizit-Liegestütz, Band oder Zusatzgewicht.",
      sicherheit: "Bei Schulter- oder Handgelenkbeschwerden die Höhe gering halten."
    }
  },
  {
    id: "liegestuetz_defizit",
    name: "Defizit-Liegestütz",
    auch: ["Deficit Push-Up", "Liegestütz auf Erhöhungen"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["kurzhantel"], ["hantelscheibe"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 2, handgelenk: 1 },
    stufe: 2,
    schwerer: "liegestuetz_archer",
    info: {
      kurz: "Liegestütz mit den Händen auf zwei Erhöhungen, zum Beispiel Kurzhanteln, Hantelscheiben oder Liegestützgriffen. Die Brust kann tiefer als die Hände sinken und wird stärker gedehnt.",
      ausfuehrung: [
        "Leg zwei stabile Erhöhungen von etwa 5 bis 15 Zentimetern etwas breiter als schulterbreit auf den Boden, zum Beispiel sechseckige Kurzhanteln oder Hantelscheiben.",
        "Greif oder stütz dich darauf, die Füße stehen hinten auf dem Boden, der Körper bildet eine Linie.",
        "Spann Bauch und Gesäß an.",
        "Senk die Brust langsam zwischen die Hände ab, tiefer als bei einem normalen Liegestütz, bis du eine deutliche Dehnung spürst.",
        "Halte die Dehnung kurz, ohne die Spannung zu verlieren.",
        "Drück dich kraftvoll nach oben, bis die Arme gestreckt sind."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu tief für die eigene Beweglichkeit: nur so tief, wie die Schultern sich gut anfühlen.",
        "Instabile Erhöhungen: runde Hanteln können rollen, sechseckige oder Scheiben nehmen.",
        "Hüfte hängt durch: Körperspannung halten.",
        "Schultern rollen unten nach vorn: Brust stolz, Ellbogen etwa 45 Grad."
      ],
      vorteile: [
        "Größerer Bewegungsumfang und mehr Dehnung unter Last, vergleichbar mit Kurzhanteldrücken.",
        "Mehr Muskelreiz ohne Zusatzgewicht.",
        "Neutraler Griff auf Hanteln schont die Handgelenke.",
        "Steigert die Schwierigkeit gegenüber normalen Liegestützen deutlich."
      ],
      tipps: [
        "Beginne mit geringer Erhöhung und steigere die Höhe langsam über Wochen.",
        "Eine Pause von einer Sekunde unten macht die Übung noch effektiver.",
        "Mit Füßen auf einer Bank wird es noch schwerer."
      ],
      varianten: "Leichter: geringere Erhöhung oder auf den Knien. Schwerer: höhere Erhöhung, Füße erhöht oder mit Band.",
      sicherheit: "Bei Schulterbeschwerden die Tiefe begrenzen. Nur stabile, nicht rollende Erhöhungen verwenden."
    }
  },
  {
    id: "liegestuetz_diamant",
    name: "Diamant-Liegestütz",
    auch: ["Diamond Push-Up", "Enger Liegestütz", "Close-Grip Push-Up", "Triangle Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["trizeps", "brust"],
    sekundaer: ["schulter_vorn", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 2, ellbogen: 1 },
    stufe: 2,
    schwerer: "pseudo_planche_liegestuetz",
    info: {
      kurz: "Liegestütz mit eng zusammengeführten Händen, Daumen und Zeigefinger bilden eine Raute unter der Brust. Der Trizeps arbeitet besonders stark, die innere Brust wird mitbetont.",
      ausfuehrung: [
        "Setz die Hände unter der Brustmitte auf, Daumen und Zeigefinger berühren sich und bilden eine Raute.",
        "Streck die Beine nach hinten, die Füße etwa hüftbreit oder etwas breiter für mehr Stabilität.",
        "Spann Bauch und Gesäß an, der Körper bildet eine gerade Linie.",
        "Senk die Brust zu den Händen ab, die Ellbogen streifen nah am Körper nach hinten.",
        "Geh so tief, bis die Brust die Hände fast berührt.",
        "Drück dich kraftvoll hoch, bis die Arme gestreckt sind."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Ellbogen fliegen seitlich weg: nah am Körper führen.",
        "Hände zu weit vorn unter dem Gesicht: unter der Brust aufsetzen.",
        "Hüfte hängt: Körperspannung halten.",
        "Handgelenke schmerzen: Hände etwas weiter auseinander setzen."
      ],
      vorteile: [
        "Sehr effektiv für den Trizeps ohne Geräte.",
        "Betont die innere Brust.",
        "Schwerer als der normale Liegestütz, gute Steigerung.",
        "Fördert eine stabile Schulterposition."
      ],
      tipps: [
        "Wenn die Raute die Handgelenke stört, Hände etwa eine Handbreit auseinander setzen. Das ist der enge Liegestütz mit ähnlicher Wirkung.",
        "Auf den Knien oder mit erhöhten Händen kannst du die Technik lernen.",
        "Gut als letzte Übung an einem Oberkörpertag."
      ],
      varianten: "Leichter: auf den Knien oder mit Händen erhöht. Schwerer: Füße erhöht oder langsames Absenken.",
      sicherheit: "Bei Handgelenk- oder Ellbogenbeschwerden lieber die etwas breitere enge Variante wählen."
    }
  },
  {
    id: "liegestuetz_archer",
    name: "Archer-Liegestütz",
    auch: ["Archer Push-Up", "Bogenschützen-Liegestütz"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch", "schraege_bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 2, handgelenk: 1, ellbogen: 1 },
    stufe: 3,
    einseitig: true,
    schwerer: "liegestuetz_einarmig",
    info: {
      kurz: "Liegestütz mit sehr breitem Griff, bei dem du dein Gewicht zu einer Seite verlagerst, während der andere Arm fast gestreckt bleibt. Eine Vorstufe zum einarmigen Liegestütz.",
      ausfuehrung: [
        "Setz die Hände etwa doppelt schulterbreit auf, die Finger zeigen nach vorn oder leicht nach außen.",
        "Streck die Beine nach hinten, Füße etwas breiter als hüftbreit, Körper in einer Linie.",
        "Senk dich zur rechten Hand ab, indem du den rechten Arm beugst. Der linke Arm bleibt fast gestreckt und gleitet seitlich mit.",
        "Geh so tief, bis die Brust knapp über der rechten Hand ist.",
        "Drück dich mit dem rechten Arm wieder in die Mitte nach oben.",
        "Wechsle die Seiten abwechselnd oder mach alle Wiederholungen auf einer Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte dreht sich: Becken parallel zum Boden halten.",
        "Gestreckter Arm hilft zu viel: er dient nur zur Stabilität.",
        "Zu schnelle Bewegungen: kontrolliert absenken.",
        "Hände zu eng: für den Effekt sehr breit greifen."
      ],
      vorteile: [
        "Mehr Last pro Arm ohne Gewichte.",
        "Führt zum einarmigen Liegestütz hin.",
        "Fordert Rumpfstabilität und Schulterkontrolle.",
        "Trainiert Seitenunterschiede."
      ],
      tipps: [
        "Den gestreckten Arm auf einem Ball oder Gleitpad ablegen erleichtert das seitliche Gleiten.",
        "Erst mit erhöhten Händen auf einer Bank üben.",
        "Mit 3 bis 8 Wiederholungen je Seite arbeiten."
      ],
      varianten: "Leichter: Hände auf einer Bank oder auf den Knien. Schwerer: Füße erhöht oder einarmiger Liegestütz.",
      sicherheit: "Bei Schulterbeschwerden auslassen oder den Bewegungsumfang stark begrenzen."
    }
  },
  {
    id: "liegestuetz_einarmig",
    name: "Einarmiger Liegestütz",
    auch: ["One-Arm Push-Up", "Single-Arm Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["schraege_bauch", "bauch", "gesaess"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 2, handgelenk: 2, ellbogen: 1 },
    stufe: 3,
    einseitig: true,
    info: {
      kurz: "Liegestütz auf nur einem Arm. Eine der anspruchsvollsten Körpergewichtsübungen für Brust, Trizeps und den gesamten Rumpf.",
      ausfuehrung: [
        "Stell die Füße deutlich breiter als schulterbreit, das gibt dir Stabilität.",
        "Setz eine Hand unter die Brust, etwa unter die Schulter, die andere Hand legst du auf den Rücken.",
        "Spann den ganzen Körper an, Hüfte und Schultern bleiben möglichst parallel zum Boden.",
        "Senk dich kontrolliert ab, der Ellbogen bleibt nah am Körper. Der Oberkörper darf sich leicht über die Stützhand drehen.",
        "Geh so tief wie möglich, ideal bis die Brust knapp über dem Boden ist.",
        "Drück dich kraftvoll nach oben, ohne dass die Hüfte wegknickt. Danach die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen. Bei wenigen schweren Wiederholungen kurz die Luft halten.",
      fehler: [
        "Hüfte dreht stark weg: Füße weiter auseinander und Rumpf anspannen.",
        "Ellbogen weit seitlich: nah am Körper führen.",
        "Nur halbe Tiefe: lieber mit erhöhter Hand volle Tiefe trainieren.",
        "Zu früh ohne Vorbereitung: erst Archer-Liegestütz beherrschen."
      ],
      vorteile: [
        "Maximale Last für Brust und Trizeps ohne Gewichte.",
        "Sehr hohe Anforderung an Rumpf und Anti-Rotation.",
        "Zeigt und verbessert Seitenunterschiede.",
        "Beeindruckendes Kraftziel im Körpergewichtstraining."
      ],
      tipps: [
        "Übe zuerst mit der Hand auf einer Bank und senke die Höhe Schritt für Schritt.",
        "Negative Wiederholungen, also nur langsames Absenken, bauen die nötige Kraft auf.",
        "Mit 1 bis 5 Wiederholungen je Seite arbeiten."
      ],
      varianten: "Leichter: Hand auf einer Bank, Archer-Liegestütz oder nur Absenken. Schwerer: Füße enger oder Füße erhöht.",
      sicherheit: "Bei Schulter- oder Handgelenkbeschwerden auslassen. Gut aufwärmen."
    }
  },
  {
    id: "liegestuetz_gewicht",
    name: "Liegestütz mit Zusatzgewicht",
    auch: ["Weighted Push-Up", "Plate-Loaded Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    hinweis: "Die Scheibe lässt du dir am besten von einem Partner auf den oberen Rücken legen.",
    info: {
      kurz: "Liegestütz mit einer Hantelscheibe auf dem oberen Rücken. Macht den Liegestütz messbar steigerbar und eignet sich für Kraft und Muskelaufbau.",
      ausfuehrung: [
        "Geh in die Liegestützposition, die Hände etwas breiter als schulterbreit.",
        "Lass dir eine Hantelscheibe auf den oberen Rücken zwischen die Schulterblätter legen, nicht auf den unteren Rücken.",
        "Spann Bauch und Gesäß fest an, damit die Hüfte nicht durchhängt.",
        "Senk dich kontrolliert ab, bis die Brust knapp über dem Boden ist.",
        "Drück dich kraftvoll nach oben, die Scheibe bleibt ruhig liegen.",
        "Nach dem Satz die Scheibe vorsichtig abnehmen lassen oder seitlich abrutschen lassen, während du dich ablegst."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Scheibe auf dem unteren Rücken: das zieht ins Hohlkreuz, sie gehört zwischen die Schulterblätter.",
        "Hüfte hängt durch: Körperspannung erhöhen oder weniger Gewicht.",
        "Scheibe rutscht: Oberkörper waagerecht halten, eventuell mit Handtuch unterlegen.",
        "Zu kurzer Bewegungsumfang: volle Tiefe beibehalten."
      ],
      vorteile: [
        "Messbare Steigerung des Liegestützes.",
        "Ähnlich wirksam für Muskelaufbau wie Bankdrücken bei vergleichbarer Last.",
        "Freie Schulterblätter, gut für die Schultergesundheit.",
        "Mehr Rumpfarbeit als beim Bankdrücken."
      ],
      tipps: [
        "Beginne mit 5 bis 10 Kilogramm und steigere in kleinen Schritten.",
        "Eine Gewichtsweste ist eine gute Alternative, wenn vorhanden.",
        "Im Bereich von 6 bis 15 Wiederholungen arbeiten."
      ],
      varianten: "Leichter: ohne Gewicht oder mit Band. Schwerer: schwerere Scheibe oder Defizit-Liegestütz mit Gewicht.",
      sicherheit: "Bei Rückenbeschwerden auf die Rumpfspannung achten. Bei Handgelenkbeschwerden Liegestützgriffe nutzen."
    }
  },
  {
    id: "liegestuetz_band",
    name: "Liegestütz mit Band",
    auch: ["Banded Push-Up", "Resistance Band Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Liegestütz mit einem Widerstandsband über dem oberen Rücken. Der Widerstand steigt nach oben hin, wenn du ohnehin stärker bist. Ideal, um Liegestütze zu Hause schwerer zu machen.",
      ausfuehrung: [
        "Leg ein Widerstandsband über den oberen Rücken, etwa auf Höhe der Schulterblätter.",
        "Halte die Enden mit den Händen am Boden fest, die Hände sind etwas breiter als schulterbreit.",
        "Geh in die Liegestützposition, der Körper bildet eine Linie.",
        "Senk dich kontrolliert ab, bis die Brust knapp über dem Boden ist.",
        "Drück dich gegen den Bandwiderstand nach oben, bis die Arme gestreckt sind.",
        "Halte das Band während des ganzen Satzes gleichmäßig gespannt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Band rutscht in den Nacken: auf den Schulterblättern positionieren.",
        "Hände rutschen vom Band: Band mehrmals um die Hand wickeln.",
        "Hüfte hängt: Körperspannung halten.",
        "Zu starkes Band: oben sollte die Bewegung noch vollständig möglich sein."
      ],
      vorteile: [
        "Steigert die Last ohne Gewichte.",
        "Passt sich der Kraftkurve an, oben schwerer.",
        "Leicht transportierbar.",
        "Gut für Kraft und Muskelaufbau zu Hause."
      ],
      tipps: [
        "Ein Band mit Schlaufen ist am einfachsten zu halten.",
        "Im Bereich von 8 bis 15 Wiederholungen.",
        "Kombiniert mit Defizit-Liegestütz besonders wirksam."
      ],
      varianten: "Leichter: leichteres Band oder ohne Band. Schwerer: stärkeres Band oder Füße erhöht.",
      sicherheit: "Bänder vor jedem Training auf Risse prüfen."
    }
  },
  {
    id: "liegestuetz_schlingentrainer",
    name: "Liegestütz am Schlingentrainer",
    auch: ["Ring Push-Up", "TRX Push-Up", "Suspension Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch", "rotatorenmanschette"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 2 },
    stufe: 2,
    schwerer: "liegestuetz_archer",
    info: {
      kurz: "Liegestütz mit den Händen in Schlingen oder Ringen. Die instabilen Griffe fordern Brust und Schulterstabilisatoren stärker und erlauben eine tiefe Dehnung.",
      ausfuehrung: [
        "Hänge die Schlingen so auf, dass die Griffe etwa auf Kniehöhe hängen. Je tiefer, desto schwerer.",
        "Greif die Griffe und geh mit den Füßen nach hinten, bis der Körper schräg und gerade ist.",
        "Halte die Arme gestreckt und die Griffe unter den Schultern, Bauch und Gesäß angespannt.",
        "Senk die Brust kontrolliert zwischen die Griffe ab, die Ellbogen bleiben nah am Körper.",
        "Geh so tief, bis die Hände neben der Brust sind und du die Dehnung spürst.",
        "Drück dich wieder hoch und dreh die Handflächen oben leicht nach außen, damit die Schultern stabil bleiben."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Griffe wandern nach außen: aktiv zueinander ziehen.",
        "Zu tief für die Schulter: Tiefe der eigenen Beweglichkeit anpassen.",
        "Hüfte hängt: Körperspannung halten.",
        "Gurte reiben am Arm: Griffe etwas nach außen drehen."
      ],
      vorteile: [
        "Mehr Arbeit für Brust und Schulterstabilisatoren.",
        "Tiefe Dehnung durch freie Griffe.",
        "Stufenlos über den Körperwinkel steuerbar.",
        "Fordert die Rumpfspannung stark."
      ],
      tipps: [
        "Starte mit fast aufrechtem Körper und geh langsam tiefer.",
        "An Ringen ist die Übung noch instabiler als am Schlingentrainer.",
        "Im Bereich von 8 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: Griffe tiefer, Füße erhöht oder Pause unten.",
      sicherheit: "Bei Schulterinstabilität vorsichtig beginnen. Befestigung vor jedem Training prüfen."
    }
  },
  {
    id: "pseudo_planche_liegestuetz",
    name: "Pseudo-Planche-Liegestütz",
    auch: ["Pseudo Planche Push-Up", "PPPU"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["schulter_vorn", "brust", "trizeps"],
    sekundaer: ["bauch", "unterarm"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 2, schulter: 2, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Liegestütz mit nach hinten gedrehten Händen auf Hüfthöhe und weit nach vorn gelehntem Oberkörper. Fordert die vordere Schulter, Brust und Handgelenke extrem und ist eine Grundübung im Calisthenics.",
      ausfuehrung: [
        "Setz die Hände etwa auf Hüfthöhe neben den Körper, die Finger zeigen seitlich nach außen oder nach hinten.",
        "Geh in die Liegestützposition und lehn dich nach vorn, bis die Schultern deutlich vor den Händen sind.",
        "Runde den oberen Rücken leicht und schieb die Schultern vom Boden weg. Bauch und Gesäß sind fest angespannt.",
        "Senk dich ab, ohne die Vorlage zu verlieren. Die Ellbogen bleiben eng am Körper.",
        "Geh so tief, bis die Brust knapp über dem Boden ist.",
        "Drück dich nach oben und halte die Vorlage über den gesamten Satz."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Vorlage geht beim Absenken verloren: Schultern bleiben vor den Händen.",
        "Handgelenke nicht aufgewärmt: vorher gründlich mobilisieren.",
        "Hüfte hängt durch: Körperspannung halten.",
        "Zu viel Vorlage am Anfang: langsam steigern."
      ],
      vorteile: [
        "Sehr hohe Belastung der vorderen Schulter und Brust ohne Gewichte.",
        "Stärkt Handgelenke und Unterarme.",
        "Vorbereitung für die Planche.",
        "Fordert die Rumpfspannung stark."
      ],
      tipps: [
        "Wärm die Handgelenke vorher gründlich auf, zum Beispiel mit Kreisen und Stützen.",
        "Auf Liegestützgriffen ist die Belastung für die Handgelenke geringer.",
        "Mit 5 bis 10 Wiederholungen arbeiten."
      ],
      varianten: "Leichter: weniger Vorlage oder auf den Knien. Schwerer: mehr Vorlage oder Füße erhöht.",
      sicherheit: "Bei Handgelenk- oder Schulterbeschwerden nicht geeignet."
    }
  },
  {
    id: "liegestuetz_explosiv",
    name: "Explosiver Liegestütz",
    auch: ["Plyometric Push-Up", "Plyo Push-Up", "Clap Push-Up", "Klatsch-Liegestütz"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [[], ["matte"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 2, schulter: 1, ellbogen: 1 },
    stufe: 3,
    golf: 1,
    info: {
      kurz: "Liegestütz, bei dem du dich so kraftvoll hochdrückst, dass die Hände kurz vom Boden abheben. Trainiert die Schnellkraft im Drücken.",
      ausfuehrung: [
        "Geh in die normale Liegestützposition, Körper gerade, Bauch fest.",
        "Senk dich kontrolliert ab, bis die Brust knapp über dem Boden ist.",
        "Drück dich so explosiv wie möglich nach oben, sodass die Hände vom Boden abheben.",
        "Optional in der Luft einmal in die Hände klatschen.",
        "Lande weich mit leicht gebeugten Ellbogen und geh direkt in die nächste Absenkbewegung über.",
        "Mach nur so viele Wiederholungen, wie du mit voller Explosivität schaffst."
      ],
      atmung: "Beim Absenken einatmen, beim explosiven Hochdrücken kräftig ausatmen.",
      fehler: [
        "Mit gestreckten Armen landen: Ellbogen leicht gebeugt für weiche Landung.",
        "Hüfte knickt ein: Körperspannung halten.",
        "Zu viele Wiederholungen: Explosivität geht verloren, lieber kurze Sätze.",
        "Ohne Vorbereitung: erst 20 saubere Liegestütze beherrschen."
      ],
      vorteile: [
        "Steigert die Schnellkraft im Oberkörper.",
        "Überträgt sich auf Stoßbewegungen im Sport.",
        "Kein Gerät nötig.",
        "Hohe Aktivierung schneller Muskelfasern."
      ],
      tipps: [
        "3 bis 5 Sätze mit 3 bis 6 Wiederholungen bei voller Erholung.",
        "Mit Händen auf einer Bank einfacher zu lernen.",
        "Am Anfang des Trainings, wenn du noch frisch bist."
      ],
      varianten: "Leichter: Hände erhöht oder auf den Knien. Schwerer: höher abspringen, Klatschen hinter dem Rücken oder Füße erhöht.",
      sicherheit: "Bei Handgelenk-, Ellbogen- oder Schulterbeschwerden auslassen. Auf weicher Unterlage üben."
    }
  },
  {
    id: "liegestuetz_medizinball",
    name: "Versetzter Liegestütz auf dem Medizinball",
    auch: ["Medicine Ball Push-Up", "Offset Push-Up", "Staggered Med Ball Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch", "schraege_bauch", "rotatorenmanschette"],
    geraete: [["medizinball"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    einseitig: true,
    schwerer: "liegestuetz_archer",
    info: {
      kurz: "Liegestütz mit einer Hand auf einem Medizinball und der anderen auf dem Boden. Die Ballseite wird stärker gefordert und die Schulter muss den instabilen Ball kontrollieren.",
      ausfuehrung: [
        "Leg einen Medizinball neben dich und setz eine Hand darauf, die andere Hand auf den Boden etwas breiter als schulterbreit.",
        "Streck die Beine nach hinten, die Füße etwas breiter für mehr Stabilität.",
        "Spann Bauch und Gesäß an, die Hüfte bleibt parallel zum Boden.",
        "Senk dich kontrolliert ab, bis die Brust knapp über dem Boden ist.",
        "Drück dich nach oben, ohne dass der Ball wegrollt.",
        "Nach dem Satz die Seite wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Ball rollt weg: Hand mittig auf den Ball und Druck gleichmäßig verteilen.",
        "Hüfte kippt zur Seite: Rumpf anspannen.",
        "Zu wenig Tiefe: Brust bis knapp über den Boden.",
        "Zu großer Ball: für den Anfang einen kleineren, festen Ball nehmen."
      ],
      vorteile: [
        "Stärkt die Schulterstabilität.",
        "Mehr Last für eine Seite, Vorstufe zum Archer-Liegestütz.",
        "Fordert die Anti-Rotation im Rumpf.",
        "Abwechslung zum normalen Liegestütz."
      ],
      tipps: [
        "Für einen dynamischen Wechsel den Ball zwischen den Wiederholungen von Hand zu Hand rollen.",
        "Mit 6 bis 12 Wiederholungen je Seite arbeiten.",
        "Ein Ball mit fester Oberfläche ist stabiler."
      ],
      varianten: "Leichter: auf den Knien. Schwerer: Ballwechsel zwischen den Wiederholungen oder beide Hände auf zwei Bällen.",
      sicherheit: "Bei Schulter- oder Handgelenkbeschwerden auslassen oder auf den Knien üben."
    }
  },
  {
    id: "liegestuetz_spiderman",
    name: "Spiderman-Liegestütz",
    auch: ["Spiderman Push-Up", "Knee-to-Elbow Push-Up"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schraege_bauch"],
    sekundaer: ["schulter_vorn", "hueftbeuger", "bauch"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Liegestütz, bei dem du beim Absenken ein Knie seitlich zum Ellbogen ziehst. Verbindet Brusttraining mit seitlicher Rumpfarbeit und Hüftmobilität.",
      ausfuehrung: [
        "Geh in die normale Liegestützposition, Hände etwas breiter als schulterbreit.",
        "Beginn das Absenken und zieh gleichzeitig das rechte Knie seitlich außen in Richtung des rechten Ellbogens.",
        "Unten ist die Brust knapp über dem Boden und das Knie nah am Ellbogen.",
        "Drück dich nach oben und bring das Bein zurück in die Ausgangsposition.",
        "Wiederhole mit dem linken Bein.",
        "Halte die Hüfte während der Beinbewegung möglichst ruhig und tief."
      ],
      atmung: "Beim Absenken und Knieheranziehen einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Hüfte geht nach oben: tief und ruhig halten.",
        "Knie nur halb heranziehen: seitlich bis zum Ellbogen.",
        "Zu schnell: koordiniert und kontrolliert arbeiten.",
        "Kopf hängt: Nacken lang."
      ],
      vorteile: [
        "Kombiniert Brust, Rumpf und Hüftmobilität.",
        "Fordert die seitliche Bauchmuskulatur.",
        "Gute Übung für Zirkeltraining und Aufwärmen.",
        "Schult Koordination."
      ],
      tipps: [
        "Gut als Teil eines Aufwärmprogramms oder in einem Zirkel.",
        "Mit 6 bis 10 Wiederholungen je Seite.",
        "Für mehr Hüftmobilität unten kurz halten."
      ],
      varianten: "Leichter: mit erhöhten Händen. Schwerer: langsames Absenken oder Füße erhöht.",
      sicherheit: "Bei Leistenbeschwerden die Kniebewegung verkleinern."
    }
  },
  {
    id: "liegestuetz_t",
    name: "T-Liegestütz",
    auch: ["T Push-Up", "Push-Up with Rotation", "Liegestütz mit Rotation"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schraege_bauch"],
    sekundaer: ["schulter_vorn", "schulter_seitlich", "rotatorenmanschette"],
    geraete: [[], ["kurzhantel"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    golf: 1,
    sport: ["golf"],
    info: {
      kurz: "Liegestütz mit anschließender Rotation in einen seitlichen Stütz, der freie Arm zeigt zur Decke. Verbindet Drücken mit Schulterstabilität und Rotation der Brustwirbelsäule.",
      ausfuehrung: [
        "Geh in die normale Liegestützposition, Hände schulterbreit.",
        "Mach einen sauberen Liegestütz nach unten und wieder nach oben.",
        "Dreh dich oben auf die linke Hand und die Außenkanten der Füße in einen Seitstütz. Der rechte Arm zeigt gestreckt zur Decke.",
        "Halte kurz, die Hüfte bleibt oben und der Körper bildet eine Linie.",
        "Dreh dich kontrolliert zurück in die Liegestützposition.",
        "Mach den nächsten Liegestütz und dreh dich dann zur anderen Seite."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen, in der Rotation ruhig weiteratmen.",
      fehler: [
        "Hüfte sinkt in der Rotation ab: Gesäß und Bauch anspannen.",
        "Stützarm nicht über der Schulter: Hand direkt unter der Schulter halten.",
        "Hektische Rotation: langsam drehen und kurz halten.",
        "Liegestütz wird verkürzt: voller Bewegungsumfang."
      ],
      vorteile: [
        "Kombiniert Brust, Schulterstabilität und seitlichen Rumpf.",
        "Fördert die Rotation der Brustwirbelsäule.",
        "Stärkt die Stützschulter.",
        "Gute Ergänzung für Rotationssportler."
      ],
      tipps: [
        "Mit leichten Kurzhanteln als Griffe wird die Übung schwerer und schont die Handgelenke.",
        "Gut im Aufwärmprogramm oder als Zirkelübung.",
        "Mit 4 bis 8 Wiederholungen je Seite."
      ],
      varianten: "Leichter: Rotation ohne Liegestütz oder auf den Knien. Schwerer: mit Kurzhanteln oder längerem Halt im Seitstütz.",
      sicherheit: "Bei Schulterbeschwerden im Seitstütz auf eine stabile Stützschulter achten oder auslassen."
    }
  },
  // ---------- Dips ----------
  {
    id: "dips_assistiert",
    name: "Dips mit Unterstützung",
    auch: ["Assisted Dips", "Band-Assisted Dips", "Machine Assisted Dip"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["dip_station", "band"], ["maschine_oberkoerper"]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { schulter: 1, ellbogen: 1 },
    stufe: 1,
    schwerer: "dips_negativ",
    info: {
      kurz: "Dips mit einem Band unter den Knien oder an der Dip-Maschine mit Gegengewicht. So lernst du die Bewegung mit voller Tiefe, bevor du dein ganzes Körpergewicht drückst.",
      ausfuehrung: [
        "Häng ein kräftiges Band über die beiden Holme der Dip-Station oder stell an der Maschine ein Gegengewicht ein.",
        "Stütz dich mit gestreckten Armen auf die Holme und leg ein oder beide Knie in das Band oder auf das Polster.",
        "Neig den Oberkörper leicht nach vorn, die Schultern bleiben unten weg von den Ohren.",
        "Beuge die Arme und senk dich ab, bis die Oberarme etwa waagerecht sind und du eine Dehnung in der Brust spürst.",
        "Drück dich wieder nach oben, bis die Arme gestreckt sind.",
        "Steig am Ende kontrolliert aus dem Band oder von der Maschine."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Schultern ziehen zu den Ohren: aktiv nach unten drücken.",
        "Zu tief für die Schulter: Oberarme etwa waagerecht reicht.",
        "Aufrechter Oberkörper: für die Brust leicht nach vorn neigen.",
        "Band rutscht vom Knie: Band sicher platzieren, beim Ein- und Aussteigen vorsichtig."
      ],
      vorteile: [
        "Ermöglicht Dips mit voller Technik für Einsteiger.",
        "Fein dosierbare Unterstützung.",
        "Stärkt untere Brust und Trizeps.",
        "Vorbereitung für freie Dips."
      ],
      tipps: [
        "Reduziere die Unterstützung schrittweise, sobald 12 saubere Wiederholungen gehen.",
        "An der Maschine bedeutet mehr Gegengewicht weniger Belastung.",
        "Langsames Absenken in drei Sekunden macht die Übung wirksamer."
      ],
      varianten: "Leichter: stärkeres Band oder mehr Gegengewicht. Schwerer: schwächeres Band, negative Dips oder freie Dips.",
      sicherheit: "Bei Schulterbeschwerden in der Dehnposition ist die Übung oft ungeeignet, dann besser Brustpresse oder Negativ-Brustpresse."
    }
  },
  {
    id: "dips_negativ",
    name: "Negative Dips",
    auch: ["Eccentric Dips", "Negative Dips"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["dip_station"]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    schwerer: "dips_brust",
    info: {
      kurz: "Nur die Absenkphase des Dips, langsam und kontrolliert. Du springst oder steigst oben in den Stütz und senkst dich in drei bis fünf Sekunden ab. So baust du Kraft für die ersten vollständigen Dips auf.",
      ausfuehrung: [
        "Stell dich zwischen die Holme, eventuell auf eine Box, um oben leicht in den Stütz zu kommen.",
        "Spring oder steig in den Stütz mit gestreckten Armen, die Schultern unten.",
        "Neig den Oberkörper leicht nach vorn und spann den Bauch an.",
        "Senk dich in drei bis fünf Sekunden ab, bis die Oberarme etwa waagerecht sind.",
        "Stell die Füße unten wieder ab, statt dich hochzudrücken.",
        "Steig oder spring erneut in den Stütz für die nächste Wiederholung."
      ],
      atmung: "Oben einatmen, beim langsamen Absenken gleichmäßig ausatmen oder ruhig weiteratmen.",
      fehler: [
        "Zu schnelles Fallen: wirklich drei bis fünf Sekunden bremsen.",
        "Zu tief: auf etwa waagerechte Oberarme begrenzen.",
        "Schultern hochgezogen: oben aktiv nach unten drücken.",
        "Zu viele Wiederholungen: die Exzentrik ist anstrengend, 3 bis 6 reichen."
      ],
      vorteile: [
        "Baut gezielt Kraft für freie Dips auf.",
        "Nutzt die höhere Kraft in der Absenkphase.",
        "Kein Band oder Gerät nötig außer einer Dip-Station.",
        "Starker Muskelreiz für Brust und Trizeps."
      ],
      tipps: [
        "3 bis 4 Sätze mit 3 bis 6 Wiederholungen.",
        "Sobald du unten wieder hochdrücken kannst, versuch zusätzlich eine volle Wiederholung.",
        "Muskelkater ist anfangs normal, die Belastung langsam steigern."
      ],
      varianten: "Leichter: kürzere Absenkzeit oder mit Band. Schwerer: längere Absenkzeit oder freie Dips.",
      sicherheit: "Bei Schulterbeschwerden auslassen oder nur in kleinem Bewegungsumfang üben."
    }
  },
  {
    id: "dips_brust",
    name: "Dips an der Dip-Station",
    auch: ["Chest Dips", "Parallel Bar Dips", "Barrendips", "Dips"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["bauch"],
    geraete: [["dip_station"]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    schwerer: "dips_schlingentrainer",
    info: {
      kurz: "Dips am Barren mit leicht nach vorn geneigtem Oberkörper. Eine der wirkungsvollsten Körpergewichtsübungen für die untere Brust und den Trizeps.",
      ausfuehrung: [
        "Stütz dich mit gestreckten Armen auf die Holme, die Hände etwa schulterbreit oder etwas breiter.",
        "Kreuz die Füße hinter dir und neig den Oberkörper etwa 20 bis 30 Grad nach vorn.",
        "Zieh die Schultern nach unten, weg von den Ohren.",
        "Beuge die Arme und senk dich ab, die Ellbogen zeigen leicht nach außen hinten.",
        "Geh so tief, bis die Oberarme etwa waagerecht sind und du die Dehnung in der Brust deutlich spürst.",
        "Drück dich kraftvoll nach oben, bis die Arme gestreckt sind, ohne die Ellbogen durchzuschlagen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Oberkörper senkrecht: dann arbeitet vor allem der Trizeps, für die Brust nach vorn neigen.",
        "Zu tief mit nach vorn rollenden Schultern: die Tiefe der eigenen Beweglichkeit anpassen.",
        "Schultern ziehen hoch: aktiv nach unten drücken.",
        "Schwung aus den Beinen: Beine ruhig halten."
      ],
      vorteile: [
        "Sehr wirksam für untere Brust und Trizeps.",
        "Große Dehnung der Brust unter Last.",
        "Leicht steigerbar mit Zusatzgewicht.",
        "Trainiert Schulterstabilität im Stütz."
      ],
      tipps: [
        "Etwas breitere Holme betonen die Brust stärker, enge Holme den Trizeps.",
        "Wenn 15 saubere Wiederholungen gehen, mit Zusatzgewicht arbeiten.",
        "Eine Sekunde Pause unten erhöht die Kontrolle."
      ],
      varianten: "Leichter: mit Band, an der Maschine oder nur Absenken. Schwerer: mit Zusatzgewicht oder an Ringen.",
      sicherheit: "Bei Schulterbeschwerden vorsichtig, die tiefe Position kann die vordere Schulter stark belasten. Bei Beschwerden lieber Negativ-Brustpresse."
    }
  },
  {
    id: "dips_gewicht",
    name: "Dips mit Zusatzgewicht",
    auch: ["Weighted Dips", "Weighted Chest Dips"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    geraete: [["dip_station", "hantelscheibe"], ["dip_station", "kurzhantel"], ["dip_station", "kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 220,
    gelenke: { schulter: 2, ellbogen: 2 },
    stufe: 3,
    hinweis: "Gewicht am Dipgürtel befestigen oder eine Kurzhantel zwischen die Füße klemmen.",
    info: {
      kurz: "Dips mit Gewicht an einem Dipgürtel oder zwischen den Füßen. Macht Dips zu einer schweren Grundübung für Brust und Trizeps.",
      ausfuehrung: [
        "Befestige eine Hantelscheibe oder Kettlebell am Dipgürtel oder klemm eine Kurzhantel zwischen die Füße.",
        "Stütz dich auf die Holme, Arme gestreckt, Schultern unten.",
        "Neig den Oberkörper leicht nach vorn und spann den Bauch an, damit das Gewicht nicht pendelt.",
        "Senk dich kontrolliert ab, bis die Oberarme etwa waagerecht sind.",
        "Drück dich kraftvoll nach oben, bis die Arme gestreckt sind.",
        "Steig nach dem Satz vorsichtig ab und nimm das Gewicht ab."
      ],
      atmung: "Oben einatmen, beim Absenken halten, beim Hochdrücken ausatmen.",
      fehler: [
        "Gewicht pendelt: Bauch anspannen, ruhig absenken.",
        "Zu viel Gewicht mit verkürzter Tiefe: lieber leichter und volle Bewegung.",
        "Schultern hochgezogen: aktiv nach unten drücken.",
        "Ellbogen schlagen oben durch: kurz vor der vollen Streckung stoppen."
      ],
      vorteile: [
        "Schwere Grundübung für Brust und Trizeps.",
        "Messbar und gut steigerbar.",
        "Große Dehnung der Brust.",
        "Stärkt auch das Bankdrücken."
      ],
      tipps: [
        "Beginne mit 5 bis 10 Kilogramm, wenn du 15 freie Dips sauber schaffst.",
        "Im Bereich von 6 bis 12 Wiederholungen arbeiten.",
        "Gut als Hauptübung an einem Brust- oder Oberkörpertag."
      ],
      varianten: "Leichter: ohne Zusatzgewicht. Schwerer: mehr Gewicht oder Pause unten.",
      sicherheit: "Bei Schulter- oder Ellbogenbeschwerden auslassen. Langsam steigern und gut aufwärmen."
    }
  },
  {
    id: "dips_schlingentrainer",
    name: "Dips an Ringen oder am Schlingentrainer",
    auch: ["Ring Dips", "TRX Dips", "Suspension Dips"],
    muster: "druecken_horizontal",
    art: "kraft",
    muskeln: ["brust", "trizeps", "schulter_vorn"],
    sekundaer: ["rotatorenmanschette", "bauch"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    info: {
      kurz: "Dips mit beweglichen Griffen. Brust und Schulterstabilisatoren müssen die Ringe zusätzlich am Körper halten, das macht die Übung deutlich schwerer als am Barren.",
      ausfuehrung: [
        "Häng die Ringe oder Schlingen etwa auf Hüfthöhe auf und spring oder drück dich in den Stütz.",
        "Halte die Arme gestreckt, die Ringe eng am Körper, die Handflächen zeigen nach vorn oder leicht nach außen.",
        "Stabilisiere die Position einige Sekunden, bis die Ringe ruhig sind.",
        "Senk dich ab, die Ringe bleiben nah am Körper, der Oberkörper neigt sich leicht nach vorn.",
        "Geh so tief, bis die Oberarme etwa waagerecht sind.",
        "Drück dich wieder in den Stütz und dreh die Hände oben leicht nach außen."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Ringe wandern nach außen: aktiv an den Körper drücken.",
        "Ohne stabilen Stütz beginnen: erst den Stütz 30 Sekunden halten können.",
        "Zu tief: auf waagerechte Oberarme begrenzen.",
        "Schultern hochgezogen: nach unten drücken."
      ],
      vorteile: [
        "Sehr hohe Anforderung an Brust und Schulterstabilität.",
        "Freie Rotation der Hände, oft angenehm für die Gelenke.",
        "Starke Steigerung nach freien Dips.",
        "Grundübung im Turnen und Calisthenics."
      ],
      tipps: [
        "Übe zuerst den Ringstütz als Halteübung.",
        "Mit 3 bis 8 Wiederholungen beginnen.",
        "Am Schlingentrainer ist die Übung etwas leichter als an Ringen."
      ],
      varianten: "Leichter: Ringstütz halten oder Füße am Boden. Schwerer: Pause unten oder Zusatzgewicht.",
      sicherheit: "Bei Schulterinstabilität oder Schulterbeschwerden nicht geeignet. Befestigung prüfen."
    }
  },
  // ---------- Brust-Isolation ----------
  {
    id: "butterfly_maschine",
    name: "Butterfly an der Maschine",
    auch: ["Pec Flye", "Pec Deck", "Machine Fly", "Butterfly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Zusammenführen der Arme vor der Brust an der Butterfly-Maschine. Isoliert die Brust bei gleichmäßiger Spannung und ist für alle Leistungsstufen gut geeignet.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Griffe etwa auf Brusthöhe oder knapp darunter sind.",
        "Stell die Hebelarme so ein, dass du hinten eine gute Dehnung spürst, ohne dass die Schulter schmerzt.",
        "Setz dich fest an das Polster, greif die Griffe, die Ellbogen sind leicht gebeugt.",
        "Führ die Griffe in einem Bogen vor der Brust zusammen, als würdest du einen großen Baum umarmen.",
        "Drück die Griffe vorn eine Sekunde fest zusammen.",
        "Führ sie langsam zurück, bis du eine deutliche Dehnung in der Brust spürst."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Mit den Armen drücken statt zu umarmen: der Ellbogenwinkel bleibt gleich.",
        "Schultern lösen sich vom Polster: Brust stolz, Schulterblätter hinten.",
        "Zu weit nach hinten öffnen: nur so weit, wie die Schulter stabil bleibt.",
        "Gewicht schlägt zurück: langsam öffnen."
      ],
      vorteile: [
        "Isoliert die Brust ohne Trizeps-Ermüdung.",
        "Gleichmäßige Spannung über den Bewegungsweg.",
        "Sicher und leicht zu erlernen.",
        "Ideal für hohe Wiederholungszahlen und Abschlusssätze."
      ],
      tipps: [
        "In der gedehnten Position langsam arbeiten, dort entsteht viel Muskelreiz.",
        "Teilwiederholungen in der Dehnung am Ende eines Satzes können den Reiz erhöhen.",
        "Gut im Bereich von 10 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang hinten. Schwerer: einarmig, Pause in der Dehnung oder langsameres Öffnen.",
      sicherheit: "Bei Schulterbeschwerden die Startposition der Hebel enger einstellen."
    }
  },
  {
    id: "butterfly_einarmig",
    name: "Einarmiger Butterfly an der Maschine",
    auch: ["Single-Arm Pec Deck", "Single-Arm Machine Fly", "Unilateral Pec Flye"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["maschine_oberkoerper"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Butterfly mit nur einem Arm. Du kannst mit dem Arm über die Körpermitte hinaus führen und so die Brust stärker verkürzen und gezielter spüren.",
      ausfuehrung: [
        "Setz dich seitlich etwas versetzt an die Butterfly-Maschine oder normal, wenn die Hebel einzeln arbeiten.",
        "Greif einen Griff, die andere Hand hält den Sitz oder liegt auf der arbeitenden Brust.",
        "Führ den Griff in einem Bogen vor die Brust und darüber hinaus bis zur Körpermitte.",
        "Drück vorn eine Sekunde fest zusammen.",
        "Führ den Griff langsam zurück in die Dehnung.",
        "Nach allen Wiederholungen die Seite wechseln."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Oberkörper dreht mit: Rücken bleibt am Polster.",
        "Arm drückt statt umarmt: Ellbogenwinkel konstant halten.",
        "Zu schweres Gewicht: einarmig etwas weniger als die Hälfte der beidarmigen Last.",
        "Zu schnelles Öffnen: kontrolliert zurückführen."
      ],
      vorteile: [
        "Stärkere Verkürzung der Brust über die Körpermitte.",
        "Gleicht Seitenunterschiede aus.",
        "Sehr gutes Muskelgefühl.",
        "Gelenkschonend."
      ],
      tipps: [
        "Leg die freie Hand auf die arbeitende Brust, um die Spannung zu fühlen.",
        "Mit der schwächeren Seite beginnen.",
        "Im Bereich von 12 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: beidarmig. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden kleinen Bewegungsumfang hinten wählen."
    }
  },
  {
    id: "flys_kh",
    name: "Kurzhantel-Flys auf der Flachbank",
    auch: ["Dumbbell Flye", "DB Fly", "Flat Dumbbell Fly", "Fliegende"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn", "bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Klassische Isolationsübung mit Kurzhanteln auf der Flachbank. Die Brust wird in der tiefen Position stark gedehnt, oben ist die Spannung dagegen gering.",
      ausfuehrung: [
        "Leg dich mit zwei Kurzhanteln auf die Flachbank, die Füße fest am Boden.",
        "Drück die Hanteln über die Brust, die Handflächen zeigen zueinander, die Ellbogen sind leicht gebeugt.",
        "Zieh die Schulterblätter nach hinten unten.",
        "Senk die Hanteln in einem weiten Bogen seitlich ab, bis die Oberarme etwa auf Höhe des Oberkörpers sind und du eine deutliche Dehnung spürst.",
        "Der Ellbogenwinkel bleibt die ganze Zeit gleich.",
        "Führ die Hanteln im gleichen Bogen zurück über die Brust, als würdest du einen Baum umarmen. Stopp kurz bevor sie sich berühren."
      ],
      atmung: "Beim Absenken einatmen, beim Zusammenführen ausatmen.",
      fehler: [
        "Arme werden beim Absenken gebeugt und gedrückt: Ellbogenwinkel konstant halten.",
        "Zu tief absenken: Oberarme nicht deutlich unter die Bank.",
        "Arme fast gestreckt: das belastet den Ellbogen, leicht gebeugt lassen.",
        "Zu schweres Gewicht: Flys sind eine Isolationsübung, mäßige Lasten wählen."
      ],
      vorteile: [
        "Isoliert die Brust ohne Trizeps.",
        "Starke Dehnung unter Last, ein guter Reiz für Muskelaufbau.",
        "Nur Kurzhanteln und Bank nötig.",
        "Ergänzt Drückübungen."
      ],
      tipps: [
        "Konzentrier dich auf die untere Hälfte der Bewegung, oben ist kaum Spannung.",
        "Im Bereich von 10 bis 15 Wiederholungen.",
        "Die Handflächen leicht nach oben zu drehen, kann die Schulter entlasten."
      ],
      varianten: "Leichter: Flys auf dem Boden. Schwerer: Pause in der Dehnung oder Schrägbank.",
      sicherheit: "Bei Schulterbeschwerden lieber Flys am Boden oder an der Maschine mit begrenzter Dehnung."
    }
  },
  {
    id: "flys_kh_schraeg",
    name: "Kurzhantel-Flys auf der Schrägbank",
    auch: ["Incline Dumbbell Flye", "Incline DB Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Flys auf einer 30-Grad-Schrägbank. Isolationsübung mit Fokus auf die obere Brust und starker Dehnung in der tiefen Position.",
      ausfuehrung: [
        "Stell die Bank auf etwa 30 Grad und leg dich mit zwei Kurzhanteln hin.",
        "Drück die Hanteln über die obere Brust, die Handflächen zueinander, die Ellbogen leicht gebeugt.",
        "Zieh die Schulterblätter zurück und halte die Brust stolz.",
        "Senk die Hanteln in einem weiten Bogen seitlich ab, bis du die Dehnung in der oberen Brust spürst.",
        "Halte den Ellbogenwinkel konstant.",
        "Führ die Hanteln im Bogen zurück über die obere Brust."
      ],
      atmung: "Beim Absenken einatmen, beim Zusammenführen ausatmen.",
      fehler: [
        "Bank zu steil: 30 Grad genügen.",
        "Drücken statt Fliegen: Ellbogenwinkel konstant.",
        "Zu tief absenken: nur so weit, wie die Schulter stabil bleibt.",
        "Zu schwere Hanteln: kontrolliert bleiben."
      ],
      vorteile: [
        "Isoliert die obere Brust.",
        "Starke Dehnung unter Last.",
        "Ergänzt Schrägbankdrücken.",
        "Wenig Ausrüstung nötig."
      ],
      tipps: [
        "Langsam absenken, etwa drei Sekunden.",
        "Im Bereich von 10 bis 15 Wiederholungen.",
        "Gut im Supersatz mit Schrägbankdrücken."
      ],
      varianten: "Leichter: kleinerer Bewegungsumfang. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden lieber am Kabel oder an der Maschine."
    }
  },
  {
    id: "flys_kh_boden",
    name: "Kurzhantel-Flys auf dem Boden",
    auch: ["Floor Flye", "Dumbbell Floor Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Flys liegend auf dem Boden. Der Boden begrenzt die Dehnung, das macht die Übung schulterfreundlich und ideal für zu Hause.",
      ausfuehrung: [
        "Leg dich mit zwei Kurzhanteln auf den Boden, die Knie angewinkelt, die Füße aufgestellt.",
        "Drück die Hanteln über die Brust, die Handflächen zeigen zueinander, die Ellbogen sind leicht gebeugt.",
        "Senk die Hanteln in einem weiten Bogen seitlich ab, bis die Oberarme sanft den Boden berühren.",
        "Lass die Oberarme kurz aufliegen, ohne die Spannung ganz zu verlieren.",
        "Führ die Hanteln im Bogen zurück über die Brust.",
        "Halte den Ellbogenwinkel während der ganzen Bewegung konstant."
      ],
      atmung: "Beim Absenken einatmen, beim Zusammenführen ausatmen.",
      fehler: [
        "Ellbogen knallen auf den Boden: sanft aufsetzen.",
        "Arme beugen und drücken: Ellbogenwinkel konstant.",
        "Zu schweres Gewicht: kontrolliert bleiben.",
        "Schultern heben vom Boden ab: Schulterblätter bleiben am Boden."
      ],
      vorteile: [
        "Schulterfreundlich durch begrenzte Dehnung.",
        "Ohne Bank machbar.",
        "Isoliert die Brust.",
        "Gut für Einsteiger."
      ],
      tipps: [
        "Eine kurze Pause am Boden nimmt jeden Schwung heraus.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Gut im Supersatz mit Floor Press."
      ],
      varianten: "Leichter: leichtere Hanteln. Schwerer: Flys auf der Bank oder Pause unten.",
      sicherheit: "Bei Ellbogenbeschwerden die Arme etwas stärker beugen."
    }
  },
  {
    id: "kabel_crossover_oben",
    name: "Kabel-Crossover von oben nach unten",
    auch: ["High-to-Low Cable Crossover", "High-to-Low Cable Fly", "Cable Crossover"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Kabelzug-Flys von oben schräg nach unten vor den Bauch. Betont die untere Brust und hält die Spannung über den ganzen Bewegungsweg.",
      ausfuehrung: [
        "Stell beide Kabelrollen ganz oder fast ganz oben ein und nimm je einen Griff in die Hand.",
        "Geh einen Schritt nach vorn in eine leichte Schrittstellung, der Oberkörper ist leicht nach vorn geneigt.",
        "Die Arme sind seitlich hinten oben geöffnet, die Ellbogen leicht gebeugt. Du spürst eine Dehnung in der Brust.",
        "Führ die Griffe in einem Bogen nach vorn unten zusammen, bis sie sich etwa vor dem Bauchnabel treffen.",
        "Drück die Hände vorn eine Sekunde fest zusammen.",
        "Führ die Griffe langsam zurück in die Dehnung."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Drücken statt Bogen: Ellbogenwinkel bleibt gleich.",
        "Oberkörper pumpt mit: der Rumpf bleibt ruhig.",
        "Schultern ziehen hoch: unten lassen.",
        "Zu weit öffnen: die Schultern bleiben stabil."
      ],
      vorteile: [
        "Konstante Spannung über den ganzen Weg.",
        "Betont die untere Brust.",
        "Freie Bewegungsbahn, schulterfreundlich.",
        "Starkes Muskelgefühl."
      ],
      tipps: [
        "Kreuz die Hände am Ende leicht übereinander, um die Brust noch stärker zu verkürzen.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Gut als Abschluss des Brusttrainings."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig oder Pause vorn.",
      sicherheit: "Bei Schulterbeschwerden kleinen Bewegungsumfang hinten wählen."
    }
  },
  {
    id: "kabel_crossover_unten",
    name: "Kabel-Crossover von unten nach oben",
    auch: ["Low-to-High Cable Crossover", "Low-to-High Cable Fly", "Low Cable Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Kabelzug-Flys von unten schräg nach oben vor das Gesicht. Betont die obere Brust und ist eine schulterfreundliche Alternative zu Schrägbank-Flys.",
      ausfuehrung: [
        "Stell beide Kabelrollen ganz unten ein und nimm je einen Griff in die Hand.",
        "Geh einen Schritt nach vorn, aufrechter Oberkörper, Bauch angespannt.",
        "Die Arme sind seitlich unten geöffnet, die Handflächen zeigen nach vorn, die Ellbogen leicht gebeugt.",
        "Führ die Griffe in einem Bogen nach vorn oben zusammen, bis sie sich etwa auf Kinnhöhe treffen.",
        "Drück vorn kurz zusammen, die Schultern bleiben unten.",
        "Führ die Griffe langsam zurück nach unten außen."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Schultern ziehen hoch: aktiv nach unten halten.",
        "Bizeps übernimmt: Ellbogenwinkel konstant.",
        "Hände zu hoch über den Kopf: Kinnhöhe reicht.",
        "Hohlkreuz: Bauch und Gesäß anspannen."
      ],
      vorteile: [
        "Betont die obere Brust.",
        "Konstante Kabelspannung.",
        "Schulterfreundlich.",
        "Gute Ergänzung zu Schrägbankdrücken."
      ],
      tipps: [
        "Stell dir vor, du schöpfst Wasser mit beiden Händen nach oben.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Gut im Supersatz mit Squeeze Press auf der Schrägbank."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig oder Pause oben.",
      sicherheit: "Bei Schulterbeschwerden den Bewegungsumfang begrenzen."
    }
  },
  {
    id: "kabel_flys_mitte",
    name: "Kabel-Flys auf Brusthöhe",
    auch: ["Mid Cable Fly", "Standing Cable Fly", "Cable Chest Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Kabelzug-Flys mit den Rollen auf Schulterhöhe. Trifft die gesamte Brust, vor allem den mittleren Anteil, mit gleichmäßiger Spannung.",
      ausfuehrung: [
        "Stell beide Kabelrollen etwa auf Schulterhöhe ein und nimm je einen Griff.",
        "Geh einen Schritt nach vorn, leichte Schrittstellung, Oberkörper leicht nach vorn geneigt.",
        "Die Arme sind seitlich geöffnet, Ellbogen leicht gebeugt, Dehnung in der Brust.",
        "Führ die Griffe in einem waagerechten Bogen vor der Brust zusammen.",
        "Drück eine Sekunde fest zusammen.",
        "Führ die Griffe langsam zurück in die Dehnung."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Drücken statt Bogen: Ellbogenwinkel bleibt gleich.",
        "Zu weit öffnen: die Schultern bleiben stabil.",
        "Schwung aus dem Oberkörper: ruhig stehen.",
        "Zu schweres Gewicht: die Technik leidet."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den gesamten Bewegungsweg.",
        "Trifft die ganze Brust.",
        "Gut steuerbar.",
        "Mit Band auch zu Hause machbar."
      ],
      tipps: [
        "Teilwiederholungen in der Dehnung am Satzende verstärken den Reiz.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Gut als Abschluss des Brusttrainings."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: einarmig oder langsameres Öffnen.",
      sicherheit: "Bei Schulterbeschwerden kleinen Bewegungsumfang hinten wählen."
    }
  },
  {
    id: "kabel_crossover_mehrere_hoehen",
    name: "Kabel-Crossover in mehreren Höhen",
    auch: ["Multi-Height Cable Crossover", "Multi-Angle Cable Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Kabel-Crossover, bei dem du die Rollenhöhe von Satz zu Satz wechselst: oben, Mitte, unten. So trainierst du die obere, mittlere und untere Brust in einer Übung.",
      ausfuehrung: [
        "Stell beide Kabelrollen für den ersten Satz ganz oben ein und führ die Griffe von oben nach unten vor den Bauch zusammen.",
        "Stell die Rollen für den zweiten Satz auf Schulterhöhe und führ die Griffe waagerecht vor der Brust zusammen.",
        "Stell die Rollen für den dritten Satz ganz unten ein und führ die Griffe von unten nach oben auf Kinnhöhe zusammen.",
        "Behalte in jeder Höhe eine leichte Schrittstellung und leicht gebeugte Ellbogen.",
        "Drück die Griffe vorn jeweils eine Sekunde zusammen und öffne langsam in die Dehnung.",
        "Passe das Gewicht je Höhe an, unten bist du meist etwas schwächer."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Höhen zu ähnlich: wirklich deutlich oben, Mitte und unten wählen.",
        "Gleiches Gewicht für alle Höhen: anpassen.",
        "Drücken statt Bogen: Ellbogenwinkel konstant.",
        "Zu kurze Pausen beim Umstellen: so viel Zeit nehmen, dass jeder Satz sauber ist."
      ],
      vorteile: [
        "Trainiert alle Brustanteile in einer Übung.",
        "Konstante Kabelspannung.",
        "Viel Abwechslung bei wenig Zeit.",
        "Gut für Muskelaufbau mit moderaten Lasten."
      ],
      tipps: [
        "Alternativ als mechanischer Drop-Satz: ohne Pause von oben über Mitte nach unten wechseln.",
        "Je Höhe 10 bis 15 Wiederholungen.",
        "Beginne mit der Höhe, die deine schwächste Brustregion betont."
      ],
      varianten: "Leichter: nur zwei Höhen. Schwerer: als Drop-Satz ohne Pause.",
      sicherheit: "Bei Schulterbeschwerden die obere Höhe auslassen, wenn sie unangenehm ist."
    }
  },
  {
    id: "kabel_flys_einarmig",
    name: "Einarmige Kabel-Flys",
    auch: ["Single-Arm Cable Fly", "One-Arm Cable Crossover"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn", "schraege_bauch"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Kabel-Flys mit nur einem Arm. Du kannst über die Körpermitte hinaus führen und die Brust maximal verkürzen, außerdem muss der Rumpf gegen das Mitdrehen arbeiten.",
      ausfuehrung: [
        "Stell eine Kabelrolle auf Schulterhöhe oder in die gewünschte Höhe und stell dich seitlich daneben.",
        "Greif den Griff mit dem kabelnahen Arm, geh einen Schritt weg, bis das Gewicht abhebt.",
        "Der Arm ist seitlich geöffnet, der Ellbogen leicht gebeugt, die Brust gedehnt.",
        "Führ den Griff in einem Bogen vor die Brust und über die Körpermitte hinaus.",
        "Halte vorn kurz und drück die Brust bewusst zusammen.",
        "Führ den Griff langsam zurück. Nach dem Satz die Seite wechseln."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Oberkörper dreht mit: Hüfte und Schultern bleiben ruhig.",
        "Drücken statt Bogen: Ellbogenwinkel konstant.",
        "Zu weit öffnen: Schulter bleibt stabil.",
        "Zu schweres Gewicht: kontrolliert bleiben."
      ],
      vorteile: [
        "Maximale Verkürzung der Brust über die Körpermitte.",
        "Gleicht Seitenunterschiede aus.",
        "Fordert die Rumpfstabilität.",
        "Sehr gutes Muskelgefühl."
      ],
      tipps: [
        "Die Rollenhöhe bestimmt den Brustanteil: oben für die untere, unten für die obere Brust.",
        "Im Bereich von 12 bis 20 Wiederholungen je Seite.",
        "Mit der freien Hand an einer Stütze festhalten, wenn du dich nur auf die Brust konzentrieren willst."
      ],
      varianten: "Leichter: beidarmig. Schwerer: Pause vorn oder langsameres Öffnen.",
      sicherheit: "Bei Schulterbeschwerden den Bewegungsumfang hinten begrenzen."
    }
  },
  {
    id: "kabel_flys_flachbank",
    name: "Kabel-Flys auf der Flachbank",
    auch: ["Lying Cable Fly", "Flat Bench Cable Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Flys liegend auf einer Flachbank zwischen zwei Kabeltürmen. Anders als mit Kurzhanteln bleibt die Spannung auch oben erhalten.",
      ausfuehrung: [
        "Stell eine Flachbank mittig zwischen zwei Kabeltürme, die Rollen ganz unten.",
        "Nimm je einen Griff und leg dich auf die Bank, die Arme über der Brust, Ellbogen leicht gebeugt.",
        "Zieh die Schulterblätter zurück, Füße fest am Boden.",
        "Öffne die Arme in einem weiten Bogen seitlich, bis du die Dehnung in der Brust spürst.",
        "Führ die Griffe im Bogen zurück über die Brust und drück oben zusammen.",
        "Leg die Griffe nach dem Satz kontrolliert ab, bevor du aufstehst."
      ],
      atmung: "Beim Öffnen einatmen, beim Zusammenführen ausatmen.",
      fehler: [
        "Bank nicht mittig: ungleiche Spannung.",
        "Drücken statt Bogen: Ellbogenwinkel konstant.",
        "Zu tief öffnen: Schulter bleibt stabil.",
        "Griffe beim Aufstehen loslassen: erst ablegen."
      ],
      vorteile: [
        "Spannung auch in der oberen Position.",
        "Isoliert die Brust.",
        "Gleichmäßigere Kraftkurve als Kurzhantel-Flys.",
        "Gute Abwechslung im Brusttraining."
      ],
      tipps: [
        "Oben die Hände leicht überkreuzen für mehr Verkürzung.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Ein Partner kann die Griffe anreichen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden kleineren Bewegungsumfang wählen."
    }
  },
  {
    id: "kabel_flys_schraegbank",
    name: "Kabel-Flys auf der Schrägbank",
    auch: ["Incline Cable Fly", "Incline Bench Cable Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kabelzug", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Kabel-Flys auf einer 30-Grad-Schrägbank zwischen zwei Kabeltürmen. Betont die obere Brust mit konstanter Spannung.",
      ausfuehrung: [
        "Stell eine Schrägbank auf etwa 30 Grad mittig zwischen zwei Kabeltürme, die Rollen ganz unten.",
        "Nimm je einen Griff und leg dich hin, die Arme über der oberen Brust.",
        "Zieh die Schulterblätter zurück und halte die Ellbogen leicht gebeugt.",
        "Öffne die Arme in einem weiten Bogen, bis du die Dehnung in der oberen Brust spürst.",
        "Führ die Griffe zurück über die obere Brust und drück dort zusammen.",
        "Leg die Griffe nach dem Satz kontrolliert ab."
      ],
      atmung: "Beim Öffnen einatmen, beim Zusammenführen ausatmen.",
      fehler: [
        "Bank zu steil: 30 Grad genügen.",
        "Drücken statt Bogen: Ellbogenwinkel konstant.",
        "Zu tiefe Dehnung: Schulter bleibt stabil.",
        "Bank nicht mittig: gleiche Spannung auf beiden Seiten."
      ],
      vorteile: [
        "Isoliert die obere Brust.",
        "Spannung auch oben.",
        "Gute Ergänzung zu Schrägbankdrücken.",
        "Gut steuerbar."
      ],
      tipps: [
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Langsames Öffnen erhöht den Reiz in der Dehnung.",
        "Gut als Abschluss an einem Oberkörpertag."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden kleineren Bewegungsumfang wählen."
    }
  },
  {
    id: "band_flys",
    name: "Flys mit Band",
    auch: ["Band Chest Fly", "Resistance Band Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Brust-Flys im Stand mit einem Widerstandsband, das hinter dir befestigt ist oder um den Rücken läuft. Ideal für zu Hause und als leichter Abschluss.",
      ausfuehrung: [
        "Befestige ein Band auf Brusthöhe hinter dir oder leg ein langes Band um den oberen Rücken.",
        "Nimm die Enden in die Hände, die Arme sind seitlich geöffnet, die Ellbogen leicht gebeugt.",
        "Stell dich in eine leichte Schrittstellung, der Bauch ist angespannt.",
        "Führ die Hände in einem Bogen vor der Brust zusammen.",
        "Drück vorn eine Sekunde zusammen, dort ist der Widerstand am höchsten.",
        "Führ die Arme langsam zurück, ohne das Band schnappen zu lassen."
      ],
      atmung: "Beim Zusammenführen ausatmen, beim Öffnen einatmen.",
      fehler: [
        "Band schnappt zurück: kontrolliert öffnen.",
        "Drücken statt Bogen: Ellbogenwinkel konstant.",
        "Zu leichtes Band: am Satzende sollte es fordernd sein.",
        "Schultern hochgezogen: lang machen."
      ],
      vorteile: [
        "Überall machbar.",
        "Höchster Widerstand bei voller Verkürzung, gute Ergänzung zu Kurzhantel-Flys.",
        "Gelenkschonend.",
        "Gut zum Aufwärmen oder als Abschluss."
      ],
      tipps: [
        "Im Bereich von 15 bis 25 Wiederholungen.",
        "Befestigungshöhe variieren, um verschiedene Brustanteile zu betonen.",
        "Bänder regelmäßig auf Risse prüfen."
      ],
      varianten: "Leichter: leichteres Band. Schwerer: stärkeres Band oder einarmig.",
      sicherheit: "Beschädigte Bänder sofort austauschen."
    }
  },
  {
    id: "svend_press",
    name: "Svend Press mit Hantelscheibe",
    auch: ["Svend Press", "Plate Squeeze Press", "Plate Press"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn", "trizeps"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Eine oder zwei Hantelscheiben werden zwischen den Handflächen zusammengepresst und vor der Brust nach vorn gestreckt. Viel Spannung in der Brustmitte bei sehr wenig Gewicht.",
      ausfuehrung: [
        "Stell dich aufrecht hin und nimm eine oder zwei glatte Hantelscheiben zwischen die flachen Handflächen vor die Brust.",
        "Drück die Handflächen fest gegeneinander, die Finger zeigen nach vorn.",
        "Streck die Arme langsam nach vorn, ohne den Druck zu verringern.",
        "Halte vorn eine Sekunde und presse noch fester.",
        "Führ die Scheibe unter Druck langsam zurück zur Brust.",
        "Halte die Schultern unten und den Oberkörper aufrecht."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Druck lässt nach: ständig fest zusammenpressen.",
        "Schultern ziehen hoch: unten lassen.",
        "Zu schwere Scheibe: die Übung lebt vom Pressen.",
        "Hohlkreuz: Bauch leicht anspannen."
      ],
      vorteile: [
        "Viel Spannung in der Brustmitte.",
        "Sehr gelenkschonend.",
        "Wenig Ausrüstung nötig.",
        "Gut als Abschluss oder Aktivierung."
      ],
      tipps: [
        "Zwei kleine Scheiben aufeinander lassen sich leichter greifen als eine große.",
        "Im Bereich von 12 bis 20 Wiederholungen.",
        "Auch schräg nach oben gestreckt möglich, das betont die obere Brust."
      ],
      varianten: "Leichter: leichtere Scheibe. Schwerer: längerer Halt vorn oder Svend Press liegend.",
      sicherheit: "Die Scheibe darf nicht herunterfallen, vorsichtig mit den Füßen."
    }
  },
  {
    id: "slider_flys",
    name: "Brust-Flys mit Gleitscheiben",
    auch: ["Slider Chest Fly", "Sliding Push-Up Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["bauch", "schulter_vorn"],
    geraete: [["gleitscheiben"]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { schulter: 2 },
    stufe: 3,
    info: {
      kurz: "Flys in der Liegestützposition mit den Händen auf Gleitscheiben. Fordert Brust und Rumpf extrem, weil du dein Körpergewicht über die gestreckten Arme kontrollieren musst.",
      ausfuehrung: [
        "Leg je eine Gleitscheibe unter jede Hand auf einen glatten Boden.",
        "Geh in die Liegestützposition auf den Knien oder den Füßen, die Hände unter den Schultern.",
        "Spann Bauch und Gesäß an.",
        "Lass die Hände langsam seitlich auseinandergleiten, die Ellbogen bleiben leicht gebeugt.",
        "Geh nur so weit, wie du die Position sicher kontrollieren kannst.",
        "Zieh die Hände mit der Brust wieder zusammen unter die Schultern."
      ],
      atmung: "Beim Auseinandergleiten einatmen, beim Zusammenziehen ausatmen.",
      fehler: [
        "Zu weit auseinander: nur so weit, wie du zurückkommst.",
        "Hüfte hängt durch: Körperspannung halten.",
        "Arme ganz gestreckt: Ellbogen leicht gebeugt.",
        "Auf rauem Untergrund: Gleitscheiben brauchen glatten Boden."
      ],
      vorteile: [
        "Sehr hoher Reiz für Brust und Rumpf ohne Gewichte.",
        "Starke Dehnung der Brust.",
        "Gut für Heimtraining.",
        "Fordert Schulterstabilität."
      ],
      tipps: [
        "Beginne auf den Knien.",
        "Handtücher auf glattem Boden funktionieren ebenfalls.",
        "Mit 6 bis 12 Wiederholungen."
      ],
      varianten: "Leichter: auf den Knien oder kleinerer Bewegungsumfang. Schwerer: auf den Füßen oder langsamer.",
      sicherheit: "Bei Schulterbeschwerden oder Leistenbrüchen auslassen."
    }
  },
  {
    id: "schlingentrainer_flys",
    name: "Brust-Flys am Schlingentrainer",
    auch: ["TRX Chest Fly", "Suspension Chest Fly", "Ring Fly"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["bauch", "schulter_vorn"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 2 },
    stufe: 2,
    info: {
      kurz: "Flys mit dem Körpergewicht am Schlingentrainer, der Körper ist schräg nach vorn geneigt. Die Schwierigkeit lässt sich über den Körperwinkel stufenlos anpassen.",
      ausfuehrung: [
        "Hänge den Schlingentrainer so auf, dass die Griffe etwa auf Brusthöhe hängen. Dreh dich mit dem Gesicht vom Ankerpunkt weg.",
        "Greif die Griffe, streck die Arme nach vorn und lehn dich schräg nach vorn, der Körper bildet eine Linie.",
        "Spann Bauch und Gesäß an, die Ellbogen sind leicht gebeugt.",
        "Öffne die Arme langsam seitlich, der Körper sinkt nach vorn.",
        "Geh so weit, bis du eine deutliche Dehnung in der Brust spürst.",
        "Zieh die Arme mit der Brust wieder vor dem Körper zusammen."
      ],
      atmung: "Beim Öffnen einatmen, beim Zusammenführen ausatmen.",
      fehler: [
        "Zu steil beginnen: erst aufrecht starten.",
        "Hüfte knickt ein: Körperspannung halten.",
        "Arme beugen und drücken: Ellbogenwinkel konstant.",
        "Zu weit öffnen: Schulter bleibt stabil."
      ],
      vorteile: [
        "Brustisolation mit Körpergewicht.",
        "Stufenlos anpassbar.",
        "Fordert Rumpf und Schulterstabilität.",
        "Unterwegs gut einsetzbar."
      ],
      tipps: [
        "Je weiter die Füße hinten, desto schwerer.",
        "Im Bereich von 8 bis 15 Wiederholungen.",
        "Gut nach Liegestütz am Schlingentrainer."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: Füße weiter nach hinten oder einbeinig.",
      sicherheit: "Bei Schulterbeschwerden vorsichtig, Befestigung vor jedem Training prüfen."
    }
  },
  {
    id: "brust_isometrisch",
    name: "Isometrisches Brustdrücken",
    auch: ["Isometric Chest Squeeze", "Palm Press", "Isometric Palm Press"],
    muster: "brust_iso",
    art: "kraft",
    muskeln: ["brust"],
    sekundaer: ["schulter_vorn"],
    geraete: [[]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: {},
    stufe: 1,
    info: {
      kurz: "Statisches Zusammenpressen der Handflächen vor der Brust. Aktiviert die Brust ohne Gerät und ohne Gelenkbewegung, gut als Aufwärmen, für unterwegs oder in Schonphasen.",
      ausfuehrung: [
        "Stell oder setz dich aufrecht hin und bring die Handflächen vor der Brust zusammen, wie zum Beten.",
        "Die Ellbogen sind auf Brusthöhe seitlich angehoben, die Unterarme bilden etwa eine waagerechte Linie.",
        "Drück die Handflächen so fest wie möglich gegeneinander.",
        "Halte den Druck für die vorgegebene Zeit, ohne die Schultern hochzuziehen.",
        "Lass langsam locker und schüttle die Arme kurz aus.",
        "Wiederhole den Halt, eventuell mit den Händen etwas weiter vor dem Körper."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Luft anhalten: weiteratmen, das ist besonders bei Bluthochdruck wichtig.",
        "Schultern ziehen hoch: lang machen.",
        "Zu wenig Druck: die Brust soll deutlich arbeiten.",
        "Ellbogen hängen: auf Brusthöhe halten."
      ],
      vorteile: [
        "Überall und ohne Gerät machbar.",
        "Gelenkschonend durch fehlende Bewegung.",
        "Gute Aktivierung vor dem Brusttraining.",
        "Schult das Muskelgefühl."
      ],
      tipps: [
        "3 bis 5 Halte zu 10 bis 30 Sekunden.",
        "Mit einem kleinen Ball zwischen den Händen fällt das Pressen leichter.",
        "Kombinierbar mit Liegestützen im Heimtraining."
      ],
      varianten: "Leichter: weniger Druck oder kürzer. Schwerer: länger halten oder Hände weiter vorn.",
      sicherheit: "Bei Bluthochdruck nur mit ruhiger Atmung und moderatem Druck."
    }
  },
]
