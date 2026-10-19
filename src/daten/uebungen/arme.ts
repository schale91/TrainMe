import type { Uebung } from "../../logik/typen"

// Arme: Bizeps, Trizeps, Griffkraft und Unterarm.
export const ARME: Uebung[] = [
  // ---------- Bizeps ----------
  {
    id: "bizeps_kh",
    name: "Bizepscurls mit Kurzhanteln",
    auch: ["Dumbbell Curl", "DB Curl", "Kurzhantel-Curl beidarmig"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Der Klassiker für den Bizeps: Beide Kurzhanteln werden gleichzeitig im Untergriff gebeugt. Jede Seite muss ihr Gewicht selbst tragen, und die Handgelenke können sich frei drehen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Knie locker, und nimm je eine Kurzhantel mit den Handflächen nach vorn.",
        "Lass die Arme gestreckt neben dem Körper hängen, die Oberarme liegen locker an den Seiten, die Schultern sind tief.",
        "Beuge beide Ellbogen gleichzeitig und führe die Hanteln in einem Bogen nach oben, ohne die Ellbogen nach vorn wandern zu lassen.",
        "Oben sind die Unterarme fast senkrecht, die kleinen Finger drehen leicht nach außen. Spanne den Bizeps hier kurz fest an.",
        "Senke die Hanteln in etwa zwei bis drei Sekunden ab, bis die Arme wieder ganz gestreckt sind.",
        "Beginne die nächste Wiederholung ohne Schwung aus dem gestreckten Arm."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim langsamen Absenken einatmen.",
      fehler: [
        "Schwung aus dem Oberkörper: Bauch und Gesäß anspannen und das Gewicht senken, bis der Rumpf ruhig bleibt.",
        "Ellbogen wandern weit nach vorn: Dann arbeitet die vordere Schulter mit, die Oberarme bleiben neben dem Körper.",
        "Arme unten nicht ganz strecken: Der volle Bewegungsumfang gehört dazu, gerade die gedehnte Position ist wertvoll.",
        "Handgelenke knicken nach hinten ab: Handgelenke neutral halten, die Kraft kommt aus dem Ellbogen."
      ],
      vorteile: [
        "Kräftigt Bizeps und Oberarmmuskel (Brachialis) mit vollem Bewegungsumfang.",
        "Beide Seiten arbeiten unabhängig, Kraftunterschiede werden sichtbar.",
        "Die freie Drehung im Handgelenk ist für viele angenehmer als eine gerade Stange.",
        "Mit wenig Ausrüstung zu Hause und im Studio machbar."
      ],
      tipps: [
        "Wähle ein Gewicht, mit dem du 8 bis 12 saubere Wiederholungen schaffst, ohne mit dem Rücken nachzuhelfen.",
        "Denk daran, die Hände oben leicht nach außen zu drehen, das verstärkt die Kontraktion.",
        "Eine Wand im Rücken hilft, Schwung sicher zu vermeiden."
      ],
      varianten: "Leichter: im Sitzen oder abwechselnd. Schwerer: langsamer absenken oder am Satzende eine Pause oben halten.",
      sicherheit: "Bei Schmerzen in der Ellbogenbeuge oder im Unterarm das Gewicht reduzieren und abklären lassen, falls die Beschwerden bleiben."
    }
  },
  {
    id: "bizeps_kh_wechselnd",
    name: "Kurzhantel-Curl abwechselnd",
    auch: ["Alternating Dumbbell Curl", "Alternating DB Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Curls mit Kurzhanteln, bei denen die Arme abwechselnd arbeiten. Du kannst dich auf jeden Arm einzeln konzentrieren und meist etwas mehr Gewicht bewegen.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und halte die Kurzhanteln mit neutralem Griff, die Handflächen zeigen zum Körper.",
        "Spann den Rumpf leicht an und zieh die Schultern nach hinten unten.",
        "Curle eine Hantel nach oben und drehe die Handfläche dabei nach oben, bis sie oben zur Schulter zeigt.",
        "Halte oben kurz an und spanne den Bizeps bewusst fest.",
        "Senke die Hantel kontrolliert ab, bis der Arm wieder ganz gestreckt ist und die Hand wieder neutral steht.",
        "Erst wenn der erste Arm unten ist, startet der andere Arm."
      ],
      atmung: "Bei jedem Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper dreht mit: Der Rumpf bleibt ruhig und frontal, nur der Unterarm bewegt sich.",
        "Der zweite Arm startet, bevor der erste unten ist: Saubere Übergabe ohne Schwung.",
        "Ellbogen wandert nach hinten: Oberarm bleibt senkrecht neben dem Körper.",
        "Zu schnelles Absenken: Das Absenken ist die halbe Übung, zwei bis drei Sekunden einplanen."
      ],
      vorteile: [
        "Volle Konzentration auf einen Arm pro Wiederholung.",
        "Die Supination während der Bewegung beansprucht den Bizeps in seiner Hauptfunktion.",
        "Kurze Pause für den anderen Arm erlaubt etwas schwerere Gewichte.",
        "Gleicht Seitenunterschiede aus."
      ],
      tipps: [
        "Zähle die Wiederholungen je Arm, nicht insgesamt.",
        "Wenn du schwankst, stell dich mit dem Rücken an eine Wand oder setz dich auf eine Bank.",
        "Gut als zweite Bizepsübung nach einer schweren Stangenübung."
      ],
      varianten: "Leichter: im Sitzen. Schwerer: beide Arme halten die Hantel auf 90 Grad, während der andere Arm curlt.",
      sicherheit: "Bei Ellbogenbeschwerden die Drehung im Handgelenk sanft ausführen oder auf Hammergriff ausweichen."
    }
  },
  {
    id: "bizeps_kh_sitzend",
    name: "Kurzhantel-Curl im Sitzen",
    auch: ["Seated Dumbbell Curl", "Seated DB Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Bizepscurls auf einer Bank mit aufrechter Lehne. Der Sitz nimmt dir fast jeden Schwung, sodass der Bizeps die Arbeit wirklich allein machen muss.",
      ausfuehrung: [
        "Stell die Banklehne senkrecht oder fast senkrecht und setz dich mit dem Rücken fest an die Lehne.",
        "Stell die Füße breit und fest auf den Boden, die Kurzhanteln hängen seitlich neben der Bank.",
        "Curle die Hanteln mit nach vorn zeigenden Handflächen nach oben, die Oberarme bleiben an der Lehne entlang senkrecht.",
        "Oben kurz halten und den Bizeps fest anspannen, ohne die Ellbogen nach vorn zu schieben.",
        "Senke langsam ab, bis die Arme wieder gestreckt sind. Die Hanteln dürfen die Bank nicht berühren.",
        "Kopf und Rücken bleiben während des ganzen Satzes an der Lehne."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Rücken löst sich von der Lehne: Das ist versteckter Schwung, Gewicht reduzieren.",
        "Arme unten nicht strecken, weil die Hanteln an die Bank stoßen: Etwas weiter nach vorn rutschen oder Hanteln leicht nach außen drehen.",
        "Schultern ziehen nach vorn: Brust offen halten, Schulterblätter an die Lehne.",
        "Handgelenke abknicken: Unterarm und Handrücken bilden eine Linie."
      ],
      vorteile: [
        "Sehr strenge Ausführung, ideal zum Erlernen eines sauberen Curls.",
        "Entlastet den unteren Rücken im Vergleich zum Stehen.",
        "Gut geeignet für Einsteiger und Ältere."
      ],
      tipps: [
        "Etwas leichter beginnen als im Stehen, die strenge Form fordert mehr.",
        "Denk an ein ruhiges Tempo: eine Sekunde hoch, zwei bis drei Sekunden runter."
      ],
      varianten: "Leichter: abwechselnd curlen. Schwerer: oben eine Sekunde halten oder Lehne leicht nach hinten neigen (Richtung Schrägbank-Curl).",
      sicherheit: "Bei Schmerzen im Ellbogen den Bewegungsumfang unten minimal verkürzen und Beschwerden abklären lassen."
    }
  },
  {
    id: "langhantel_curl",
    name: "Langhantel-Curl",
    auch: ["Barbell Curl", "Barbell oder SZ Curl", "LH-Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["langhantel"], ["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Die Grundübung für den Bizeps mit der Stange. Beide Arme arbeiten zusammen, dadurch kannst du hier am meisten Gewicht bewegen und gut progressiv steigern.",
      ausfuehrung: [
        "Stell dich hüftbreit hin und greif die Stange schulterbreit im Untergriff, die Handflächen zeigen nach vorn.",
        "Halte die Stange mit gestreckten Armen vor den Oberschenkeln, Brust leicht offen, Bauch angespannt.",
        "Curle die Stange in einem Bogen nach oben, die Ellbogen bleiben dicht neben dem Körper.",
        "Hör auf, wenn die Unterarme fast senkrecht stehen. Spanne den Bizeps oben kurz an.",
        "Senke die Stange in zwei bis drei Sekunden ab, bis die Arme ganz gestreckt sind.",
        "Atme unten kurz und starte die nächste Wiederholung ohne Hüftschwung."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen. Bei schweren Sätzen nicht lange pressen.",
      fehler: [
        "Hohlkreuz und Schwung aus der Hüfte: Gesäß anspannen, Knie leicht beugen, Gewicht reduzieren.",
        "Ellbogen weit nach vorn heben: Die Spannung geht aus dem Bizeps, Ellbogen bleiben an der Seite.",
        "Handgelenke nach hinten abknicken: Neutral halten oder auf die SZ-Stange wechseln.",
        "Nur halbe Wiederholungen: Unten komplett strecken, sonst fehlt der wirksamste Teil."
      ],
      vorteile: [
        "Ermöglicht die höchsten Lasten aller Curl-Varianten und damit gute Kraftsteigerung.",
        "Leicht zu messen und zu steigern.",
        "Kräftigt neben dem Bizeps auch die Unterarmbeuger durch den festen Griff."
      ],
      tipps: [
        "Wenn die gerade Stange in den Handgelenken drückt, nimm die SZ-Stange.",
        "Ein etwas engerer Griff betont eher den langen Kopf, ein weiterer eher den kurzen Kopf. Schulterbreit ist ein guter Standard.",
        "Steigere in kleinen Schritten, 1 bis 2 kg pro Woche reichen völlig."
      ],
      varianten: "Leichter: SZ-Stange oder leichtere Stange. Schwerer: langsames Absenken (exzentrisch) oder 21er.",
      sicherheit: "Bei Handgelenk- oder Ellbogenbeschwerden die SZ-Stange nutzen. Bei Rückenproblemen mit dem Rücken an der Wand ausführen."
    }
  },
  {
    id: "sz_curl_untergriff",
    name: "SZ-Curl im Untergriff",
    auch: ["EZ-Bar Curl", "SZ-Curl", "EZ Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Bizepscurl mit der gewinkelten SZ-Stange. Die halb eingedrehten Hände schonen die Handgelenke und lassen trotzdem schwere, saubere Sätze zu.",
      ausfuehrung: [
        "Greif die SZ-Stange an den inneren oder äußeren Knicken im Untergriff, je nachdem, was sich angenehmer anfühlt.",
        "Stell dich aufrecht hin, Füße hüftbreit, die Stange hängt vor den Oberschenkeln.",
        "Curle die Stange nach oben, ohne die Ellbogen nach vorn wandern zu lassen.",
        "Oben die Stange kurz halten und den Bizeps fest anspannen.",
        "Senke die Stange kontrolliert ab, bis die Ellbogen ganz gestreckt sind.",
        "Halte die Schultern während des ganzen Satzes tief und ruhig."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schwung aus dem Rücken: Knie leicht beugen, Gesäß anspannen, Last reduzieren.",
        "Stange prallt unten ab: Unten kurz zur Ruhe kommen und dann sauber starten.",
        "Schultern rollen nach vorn: Brust offen lassen und die Schulterblätter leicht zurückziehen."
      ],
      vorteile: [
        "Gelenkfreundlicher als die gerade Stange bei ähnlich hoher Last.",
        "Gut zum progressiven Steigern im Bereich von 6 bis 12 Wiederholungen.",
        "Kräftigt Bizeps und Brachialis gemeinsam."
      ],
      tipps: [
        "Der innere Griff betont den langen Kopf etwas mehr, der äußere den kurzen Kopf.",
        "Stell dir vor, die kleinen Finger drücken die Stange nach oben, das hält die Supination."
      ],
      varianten: "Leichter: weniger Gewicht, langsamer. Schwerer: exzentrische Betonung oder 21er.",
      sicherheit: "Bei Ellbogenschmerzen den Griff variieren und das Gewicht reduzieren."
    }
  },
  {
    id: "sz_curl_obergriff",
    name: "SZ-Curl im Obergriff",
    auch: ["Reverse Curl", "EZ-Bar Reverse Curl", "Reverse Grip Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["unterarm", "bizeps"],
    geraete: [["sz_stange"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Curl im Obergriff, also mit den Handrücken nach oben. Er trainiert vor allem den Oberarmspeichenmuskel (Brachioradialis), den Brachialis und die Handgelenkstrecker.",
      ausfuehrung: [
        "Greif die SZ-Stange schulterbreit im Obergriff, die Handrücken zeigen nach vorn.",
        "Stell dich aufrecht hin, Bauch leicht angespannt, Arme gestreckt vor den Oberschenkeln.",
        "Halte die Handgelenke gerade oder ganz leicht gestreckt, sie dürfen nicht nach unten abknicken.",
        "Curle die Stange nach oben, bis die Unterarme fast senkrecht sind. Die Ellbogen bleiben an der Seite.",
        "Senke die Stange langsam in zwei bis drei Sekunden ab.",
        "Unten ganz strecken und die nächste Wiederholung ohne Schwung beginnen."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Handgelenke knicken nach unten: Das Gewicht ist zu schwer, deutlich leichter nehmen als beim normalen Curl.",
        "Schwung aus der Hüfte: Rücken an die Wand stellen oder Knie leicht beugen.",
        "Daumen unter der Stange verkrampfen: Lockerer, aber fester Griff, Daumen kann auch neben den Fingern liegen.",
        "Ellbogen nach hinten ziehen: Oberarme bleiben senkrecht."
      ],
      vorteile: [
        "Kräftigt Brachioradialis und Brachialis, die den Unterarm optisch und funktionell stärken.",
        "Trainiert die Handgelenkstrecker, die bei Tennisellbogen oft geschwächt sind.",
        "Schafft ein Gleichgewicht zu den vielen Zugübungen im Untergriff.",
        "Verbessert die Griffstabilität im Obergriff, etwa beim Kreuzheben."
      ],
      tipps: [
        "Rechne mit etwa 60 bis 70 Prozent deines normalen Curl-Gewichts.",
        "Die SZ-Stange ist für die Handgelenke angenehmer als die gerade Stange.",
        "Gut als letzte Armübung, wenn der Bizeps schon müde ist."
      ],
      varianten: "Leichter: mit Kurzhanteln oder am Kabel. Schwerer: am Ende jedes Satzes drei Sekunden in der Mitte halten.",
      sicherheit: "Bei akuten Beschwerden an der Außenseite des Ellbogens sehr leicht beginnen oder auslassen und abklären lassen.",
      golf: "Die Handgelenkstrecker stabilisieren das führende Handgelenk im Treffmoment und arbeiten bei jedem Schwung. Kräftige Strecker können helfen, den Ellbogen bei vielen Schlägen und Bodenkontakt zu entlasten."
    }
  },
  {
    id: "kabel_reverse_curl",
    name: "Reverse Curl am Kabel",
    auch: ["Cable Reverse Curl", "Kabel-Curl im Obergriff"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["unterarm", "bizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Obergriff-Curl am unteren Kabelzug mit gerader Stange oder SZ-Griff. Das Kabel hält die Spannung auch unten und oben, was für die Unterarmmuskeln besonders angenehm und wirksam ist.",
      ausfuehrung: [
        "Hänge eine gerade Stange oder einen SZ-Griff unten an den Kabelzug.",
        "Greif im Obergriff schulterbreit und tritt einen halben Schritt zurück, sodass das Kabel schon unten leicht zieht.",
        "Stell dich aufrecht hin, Arme gestreckt, Handgelenke gerade.",
        "Curle den Griff nach oben, bis die Unterarme fast senkrecht stehen. Ellbogen bleiben an der Seite.",
        "Senke langsam ab und halte die Spannung, ohne dass das Gewicht im Turm aufsetzt.",
        "Wiederhole ruhig und gleichmäßig, die Handgelenke bleiben stabil."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu nah am Kabel stehen: Unten fehlt die Spannung, einen halben Schritt zurückgehen.",
        "Handgelenke knicken ab: Gewicht reduzieren, die Handgelenke bleiben in Verlängerung der Unterarme.",
        "Oberkörper lehnt nach hinten: Rumpf anspannen, aufrecht bleiben."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Bewegungsumfang.",
        "Kräftigt Brachioradialis und Handgelenkstrecker gelenkschonend.",
        "Feine Gewichtsabstufung, gut für leichte Unterarmarbeit."
      ],
      tipps: [
        "Ein SZ-Griff ist meist angenehmer für die Handgelenke als eine gerade Stange.",
        "Hohe Wiederholungen von 12 bis 20 passen gut zu den Unterarmen."
      ],
      varianten: "Leichter: mit Band an einem niedrigen Anker. Schwerer: langsames Absenken in vier Sekunden.",
      sicherheit: "Bei Beschwerden an der Außenseite des Ellbogens nur schmerzfrei und leicht trainieren.",
      golf: "Stärkt die Handgelenkstrecker und den Brachioradialis, die beim Halten und Führen des Schlägers ständig arbeiten. Das kann helfen, die Belastung am Ellbogen bei langen Übungseinheiten besser zu verkraften."
    }
  },
  {
    id: "curl_exzentrisch",
    name: "Exzentrischer SZ- oder Langhantel-Curl",
    auch: ["Eccentric Curl", "Ecc. SZ- oder LH-Curl", "Negativ-Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["sz_stange"], ["langhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 2 },
    stufe: 2,
    info: {
      kurz: "Curl mit betont langsamem Absenken. Die nachgebende Phase ist besonders wirksam für Muskelaufbau, und du kannst dabei mehr Last kontrollieren als beim Heben.",
      ausfuehrung: [
        "Greif die SZ- oder Langhantel schulterbreit im Untergriff und stell dich aufrecht hin.",
        "Curle die Stange in normalem Tempo sauber nach oben, ohne Schwung.",
        "Oben eine Sekunde halten und den Bizeps fest anspannen.",
        "Senke die Stange nun in vier bis fünf Sekunden ab. Bleib dabei über den ganzen Weg aktiv gegen das Gewicht.",
        "Unten den Arm ganz strecken, ohne die Spannung komplett aufzugeben.",
        "Beginne die nächste Wiederholung erst, wenn du ruhig stehst."
      ],
      atmung: "Beim Heben ausatmen, während des langsamen Absenkens gleichmäßig einatmen oder ruhig weiteratmen.",
      fehler: [
        "Absenken wird zum Fallen lassen, sobald es schwer wird: Gewicht so wählen, dass die letzte Wiederholung noch langsam ist.",
        "Gewicht mit Schwung hochbringen: Dann leidet der Rücken, lieber etwas leichter.",
        "Unten nicht ganz strecken: Die gedehnte Position ist wichtig, ganz nach unten gehen.",
        "Zu viele Sätze: Exzentrisches Training erzeugt mehr Muskelkater, langsam einsteigen."
      ],
      vorteile: [
        "Große Spannung unter Dehnung, ein starker Reiz für Muskelwachstum.",
        "Verbessert die Kontrolle und Kraft in der nachgebenden Phase.",
        "Kann die Sehnen langsam an höhere Lasten gewöhnen.",
        "Wenig Gewicht nötig für einen hohen Reiz."
      ],
      tipps: [
        "Zähle beim Absenken laut oder im Kopf mit, sonst wird es schnell zu kurz.",
        "Beginne mit dem Gewicht deines normalen Curls und steigere nur, wenn das Tempo sitzt.",
        "Mit einem Partner kannst du auch schwerer arbeiten: Er hilft beim Heben, du senkst allein ab."
      ],
      varianten: "Leichter: drei Sekunden Absenken. Schwerer: sechs Sekunden oder mit Partnerhilfe schwerer als dein Curl-Maximum.",
      sicherheit: "Bei Ellbogenbeschwerden oder kurz nach Sehnenproblemen nur nach Rücksprache und sehr behutsam einsetzen."
    }
  },
  {
    id: "supinations_curl",
    name: "Kurzhantel-Curl mit Supination",
    auch: ["Supinating Curl", "Supinating Dumbbell Curl", "Twist Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Curl, der im Hammergriff startet und auf dem Weg nach oben bewusst in den Untergriff dreht. Damit nutzt du beide Aufgaben des Bizeps: Ellbogen beugen und Unterarm aufdrehen.",
      ausfuehrung: [
        "Halte die Kurzhanteln neben dem Körper im neutralen Griff, die Handflächen zeigen zueinander.",
        "Greif die Hantel eher am Daumenende, also an der inneren Scheibe, so wird die Drehung spürbarer.",
        "Curle nach oben und drehe die Handfläche ab der Hälfte der Bewegung aktiv nach oben und außen.",
        "Oben zeigt die Handfläche zur Schulter und der kleine Finger leicht nach außen. Bizeps kurz fest anspannen.",
        "Senke langsam ab und drehe dabei zurück in den neutralen Griff.",
        "Strecke den Arm unten ganz und starte die nächste Wiederholung ruhig."
      ],
      atmung: "Beim Hochdrehen und Curlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Drehung nur angedeutet: Bewusst so weit aufdrehen, wie es angenehm geht.",
        "Drehung aus der Schulter statt aus dem Unterarm: Ellbogen bleibt an der Seite.",
        "Zu schwere Hantel: Die Drehung kostet Kraft, etwas leichter als beim normalen Curl wählen."
      ],
      vorteile: [
        "Trainiert den Bizeps als Ellbogenbeuger und als Supinator.",
        "Sehr gutes Gefühl für die Kontraktion.",
        "Gelenkfreundlich, weil die Hand der natürlichen Drehung folgt."
      ],
      tipps: [
        "Halte den Daumen nah an der inneren Hantelscheibe, das verstärkt die Supination.",
        "Kann beidarmig oder abwechselnd ausgeführt werden."
      ],
      varianten: "Leichter: abwechselnd und im Sitzen. Schwerer: oben zwei Sekunden halten.",
      sicherheit: "Bei Schmerzen im Unterarm beim Drehen die Drehung verkleinern."
    }
  },
  {
    id: "hammercurl",
    name: "Hammercurls",
    auch: ["Hammer Curl", "Dumbbell Hammer Curl", "Neutral Grip Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    golf: 1,
    info: {
      kurz: "Curl im neutralen Griff, die Daumen zeigen nach oben. Er betont den Brachialis und den Brachioradialis und baut damit Oberarmdicke und kräftige Unterarme auf.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Kurzhanteln hängen neben dem Körper, die Handflächen zeigen zueinander.",
        "Zieh die Schultern leicht nach hinten unten und spann den Bauch an.",
        "Curle die Hanteln nach oben, die Daumen bleiben während der ganzen Bewegung oben.",
        "Oben sind die Unterarme fast senkrecht, die Ellbogen sind nicht nach vorn gewandert.",
        "Senke die Hanteln in zwei bis drei Sekunden bis zur vollen Streckung ab.",
        "Arbeite beidarmig gleichzeitig oder abwechselnd, ganz wie es der Plan vorsieht."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hanteln schwingen nach vorn: Gewicht senken und den Oberkörper ruhig halten.",
        "Handgelenke kippen nach innen oder außen: Hantel bleibt senkrecht wie ein Hammer.",
        "Unten nicht strecken: Volle Streckung für den ganzen Bewegungsumfang.",
        "Schultern ziehen hoch: Schultern bewusst tief halten."
      ],
      vorteile: [
        "Kräftigt Brachialis und Brachioradialis, die beim Ziehen und Tragen mitarbeiten.",
        "Gelenkfreundlicher Griff, oft angenehm bei Handgelenk- oder Ellbogenproblemen.",
        "Meist stärker als im Untergriff, gut für schwere Sätze.",
        "Unterstützt die Griffkraft im Alltag."
      ],
      tipps: [
        "Guter Partner zum klassischen Curl: der eine für den Bizeps, der andere für Brachialis und Unterarm.",
        "Wenn die Hantel unten an den Oberschenkel stößt, einen kleinen Schritt breiter stehen."
      ],
      varianten: "Leichter: im Sitzen oder abwechselnd. Schwerer: quer vor dem Körper oder als Hammer-Cheat-Curl.",
      sicherheit: "Bei Beschwerden an der Außenseite des Ellbogens langsam und leicht beginnen."
    }
  },
  {
    id: "hammer_cheat_curl",
    name: "Hammer-Cheat-Curl",
    auch: ["Hammer Cheat Curl", "Hammer „Cheat“ Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 2, ruecken: 1 },
    stufe: 2,
    info: {
      kurz: "Schwerer Hammercurl mit etwas bewusst eingesetztem Schwung, um das Gewicht nach oben zu bringen, und einem streng kontrollierten Absenken. So überlastest du gezielt die nachgebende Phase.",
      ausfuehrung: [
        "Nimm Kurzhanteln, die etwas schwerer sind als bei deinen normalen Hammercurls.",
        "Stell dich stabil hin, Knie locker, Bauch fest angespannt.",
        "Starte den Curl mit einem kleinen Impuls aus Hüfte und Knien, gerade so viel, dass die Hantel nach oben kommt.",
        "Oben die Hantel kurz kontrollieren und den Oberkörper wieder ganz aufrichten.",
        "Senke die Hantel nun streng in drei bis vier Sekunden ab, ohne jeden Schwung.",
        "Unten ganz strecken, kurz stabilisieren und erst dann den nächsten Impuls setzen."
      ],
      atmung: "Beim Impuls und Hochbringen ausatmen, beim langsamen Absenken einatmen.",
      fehler: [
        "Zu viel Schwung, der Rücken überstreckt: Der Impuls ist klein, der Rumpf bleibt stabil.",
        "Gewicht fällt nach unten: Das Absenken ist der eigentliche Zweck, es muss langsam sein.",
        "Zu schweres Gewicht von Anfang an: Höchstens 10 bis 20 Prozent mehr als beim strengen Hammercurl.",
        "Schultern rollen nach vorn: Schulterblätter bleiben hinten."
      ],
      vorteile: [
        "Ermöglicht schwerere Lasten in der nachgebenden Phase.",
        "Starker Reiz für Brachialis und Brachioradialis.",
        "Lässt einen Satz über das strenge Muskelversagen hinaus sinnvoll verlängern."
      ],
      tipps: [
        "Beginne die ersten Wiederholungen streng und setze den Schwung erst ein, wenn es nicht mehr sauber geht.",
        "Nur für Fortgeschrittene mit sauberer Technik im normalen Hammercurl."
      ],
      varianten: "Leichter: normaler Hammercurl mit langsamem Absenken. Schwerer: noch langsameres Absenken oder einarmig mit der freien Hand an einer Stütze.",
      sicherheit: "Nicht bei Rückenbeschwerden. Bei Ellbogenproblemen auf strenge Varianten ausweichen."
    }
  },
  {
    id: "hammercurl_kreuz",
    name: "Hammercurl quer vor dem Körper",
    auch: ["Cross-Body Hammer Curl", "Pinwheel Curl", "Cross Body Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Hammercurl, bei dem die Hantel diagonal vor dem Körper Richtung gegenüberliegende Schulter geführt wird. Das betont den Brachialis und fühlt sich für viele besonders gelenkfreundlich an.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, die Kurzhantel hängt im neutralen Griff neben dem Körper.",
        "Spann den Rumpf an, der Oberkörper bleibt frontal ausgerichtet.",
        "Curle die Hantel diagonal vor dem Körper Richtung gegenüberliegende Brust oder Schulter.",
        "Der Daumen zeigt die ganze Zeit nach oben, der Ellbogen bewegt sich nur leicht nach innen.",
        "Oben kurz anspannen und dann langsam auf dem gleichen Weg zurück absenken.",
        "Mach alle Wiederholungen mit einem Arm oder wechsle nach jeder Wiederholung."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper dreht mit: Brust bleibt nach vorn, nur der Arm bewegt sich.",
        "Hantel schlägt gegen den Körper: Kurz vor der Brust stoppen.",
        "Zu schnelles Absenken: Bewusst zwei bis drei Sekunden zurückführen."
      ],
      vorteile: [
        "Betont den Brachialis, der den Oberarm von der Seite dicker wirken lässt.",
        "Angenehmer Bewegungsweg für viele Ellbogen.",
        "Einseitig, gut zum Ausgleich von Seitenunterschieden."
      ],
      tipps: [
        "Die freie Hand kann auf dem arbeitenden Bizeps liegen, um die Spannung zu fühlen.",
        "Funktioniert auch gut am Kabel mit Seil."
      ],
      varianten: "Leichter: im Sitzen. Schwerer: oben zwei Sekunden halten oder langsames Absenken.",
      sicherheit: "Bei Schulterbeschwerden den Ellbogen nicht zu weit nach innen ziehen."
    }
  },
  {
    id: "hammercurl_seil",
    name: "Hammercurl am Kabel mit Seil",
    auch: ["Rope Hammer Curl", "Cable Rope Hammer Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Hammercurl am unteren Kabelzug mit dem Trizepsseil. Der Kabelzug hält die Spannung auch unten, wo Kurzhanteln fast keinen Widerstand geben.",
      ausfuehrung: [
        "Befestige das Seil unten am Kabelzug und greif die Enden im neutralen Griff, Daumen oben.",
        "Tritt einen kleinen Schritt zurück, sodass das Gewicht schon bei gestreckten Armen leicht abhebt.",
        "Stell dich aufrecht hin, Ellbogen an den Seiten.",
        "Curle das Seil nach oben und zieh die Seilenden oben leicht auseinander.",
        "Senke langsam ab, bis die Arme ganz gestreckt sind, ohne dass das Gewicht aufsetzt.",
        "Halte den Rumpf über den ganzen Satz ruhig."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu nah am Kabelturm: Dann fehlt unten die Spannung, etwas zurücktreten.",
        "Oberkörper lehnt nach hinten: Gewicht reduzieren.",
        "Ellbogen wandern nach vorn: Oberarme bleiben neben dem Körper."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Weg.",
        "Kräftigt Brachialis und Brachioradialis gelenkfreundlich.",
        "Feine Gewichtsabstufung, gut für höhere Wiederholungen."
      ],
      tipps: [
        "Ideal als Abschlussübung mit 12 bis 15 Wiederholungen.",
        "Ein dickes Seil fordert zusätzlich die Griffkraft."
      ],
      varianten: "Leichter: mit Band. Schwerer: oben zwei Sekunden halten.",
      sicherheit: "Bei Ellbogenbeschwerden Gewicht reduzieren und schmerzfrei arbeiten."
    }
  },
  {
    id: "schraegbank_curl",
    name: "Schrägbank-Curl mit Kurzhanteln",
    auch: ["Incline Dumbbell Curl", "Incline DB Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Curl im Liegen auf einer Schrägbank, die Arme hängen hinter dem Körper. Der lange Bizepskopf wird dabei stark gedehnt, was als besonders wirksamer Wachstumsreiz gilt.",
      ausfuehrung: [
        "Stell die Lehne auf etwa 45 bis 60 Grad und setz dich mit dem Rücken fest an die Lehne.",
        "Lass die Arme mit den Kurzhanteln gestreckt nach unten hängen, die Oberarme zeigen senkrecht zum Boden, also leicht hinter den Körper.",
        "Die Handflächen zeigen nach vorn, die Schultern bleiben hinten an der Lehne.",
        "Curle die Hanteln nach oben, ohne die Ellbogen nach vorn zu schieben.",
        "Oben kurz anspannen, dann langsam in die tiefe Dehnung absenken.",
        "Unten den Arm ganz strecken und die Dehnung im Bizeps kurz spüren."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schultern lösen sich von der Lehne und rollen nach vorn: Brust offen halten.",
        "Ellbogen wandern nach vorn: Dann verschwindet die Dehnung, Oberarme bleiben senkrecht.",
        "Zu schweres Gewicht: Hier sind deutlich leichtere Hanteln nötig als im Stehen.",
        "Absenken zu schnell in die Dehnung: Langsam und kontrolliert, besonders unten."
      ],
      vorteile: [
        "Trainiert den Bizeps in starker Dehnung, was den Muskelaufbau begünstigen kann.",
        "Kaum Schwung möglich.",
        "Betont den langen Bizepskopf."
      ],
      tipps: [
        "Je flacher die Bank, desto stärker die Dehnung. Fang mit 60 Grad an.",
        "Die Hanteln können auch abwechselnd gecurlt werden."
      ],
      varianten: "Leichter: steilere Lehne. Schwerer: flachere Lehne oder Pause in der Dehnung.",
      sicherheit: "Bei Beschwerden an der Schultervorderseite oder bekannter Bizepssehnenreizung die Lehne steiler stellen oder auslassen."
    }
  },
  {
    id: "liegender_kh_curl",
    name: "Kurzhantel-Curl liegend auf der Flachbank",
    auch: ["Lying Dumbbell Curl", "Lying DB Curl", "Flat Bench Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Curl in Rückenlage auf einer hohen Flachbank, die Arme hängen seitlich nach unten. Das bringt den Bizeps in eine noch größere Dehnung als der Schrägbank-Curl.",
      ausfuehrung: [
        "Leg dich rücklings auf eine Flachbank, die hoch genug ist, damit die Hanteln unten den Boden nicht berühren.",
        "Lass die Arme mit den Kurzhanteln seitlich neben der Bank senkrecht nach unten hängen, Handflächen zeigen zur Decke.",
        "Füße stehen fest auf dem Boden, der Rücken liegt ruhig auf der Bank.",
        "Curle die Hanteln nach oben, die Oberarme bleiben senkrecht nach unten gerichtet.",
        "Senke langsam ab, bis die Arme ganz gestreckt sind und du die Dehnung im Bizeps spürst.",
        "Bleib in der Dehnung ruhig und starte erst dann die nächste Wiederholung."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hanteln stoßen auf den Boden: Höhere Bank wählen oder Scheiben unter die Bankfüße legen.",
        "Zu schwer: Die Dehnung verträgt nur leichte Gewichte.",
        "Oberarme bewegen sich mit: Ellbogen bleiben unter der Schulterlinie fixiert."
      ],
      vorteile: [
        "Maximale Dehnung des Bizeps, ein starker Reiz für Muskelaufbau.",
        "Kein Schwung möglich.",
        "Gut als Abwechslung zum Schrägbank-Curl."
      ],
      tipps: [
        "Mit sehr leichten Hanteln beginnen und die Dehnung langsam steigern.",
        "Ein kleines Polster unter dem Kopf ist erlaubt."
      ],
      varianten: "Leichter: Schrägbank-Curl. Schwerer: zwei Sekunden Pause in der Dehnung.",
      sicherheit: "Nicht bei Schulterinstabilität oder Beschwerden an der Bizepssehne."
    }
  },
  {
    id: "bayesian_curl",
    name: "Bayesian Curl am Kabel",
    auch: ["Bayesian Curl", "Bayesian Cable Curl", "Behind-the-Body Cable Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiger Kabelcurl mit dem Rücken zum Kabelzug, der Arm wird hinter den Körper gezogen. So steht der Bizeps unter Spannung in der Dehnung, und das Kabel hält die Last über den ganzen Weg gleichmäßig.",
      ausfuehrung: [
        "Stell den Kabelzug auf die unterste oder eine mittlere Höhe und befestige einen Einzelgriff.",
        "Greif den Griff und dreh dich mit dem Rücken zum Kabel. Mach einen Schritt nach vorn, bis der Arm leicht hinter dem Körper gehalten wird.",
        "Stell dich in Schrittstellung, Rumpf leicht nach vorn geneigt, Handfläche zeigt nach vorn.",
        "Curle den Griff nach vorn oben, der Oberarm bleibt dabei leicht hinter dem Körper.",
        "Oben kurz anspannen, dann langsam zurück in die Dehnung, bis der Arm ganz gestreckt ist.",
        "Alle Wiederholungen mit einem Arm, dann die Seite wechseln."
      ],
      atmung: "Beim Curlen ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen wandert nach vorn: Dann geht die Dehnung verloren, der Oberarm bleibt hinten.",
        "Schulter rollt nach vorn: Brust offen und Schulterblatt leicht zurück halten.",
        "Zu nah am Kabel: Nicht genug Spannung in der Dehnung, weiter nach vorn gehen.",
        "Oberkörper dreht mit: Rumpf stabil halten."
      ],
      vorteile: [
        "Spannung in der gedehnten Position mit gleichmäßigem Widerstand.",
        "Betont den langen Bizepskopf.",
        "Einseitig, gut zur Korrektur von Unterschieden.",
        "Wird von evidenzbasierten Trainern als einer der wirksamsten Curls empfohlen."
      ],
      tipps: [
        "Probiere verschiedene Kabelhöhen aus. Viele mögen eine Höhe etwa auf Hüfthöhe.",
        "Der Name kommt vom Trainer Menno Henselmans, der Stil ist inzwischen weit verbreitet."
      ],
      varianten: "Leichter: mit Band an einem niedrigen Anker. Schwerer: Pause in der Dehnung oder langsames Absenken.",
      sicherheit: "Bei Beschwerden an der Schultervorderseite den Arm nicht so weit nach hinten nehmen."
    }
  },
  {
    id: "kabel_curl_sz",
    name: "Kabel-Curl mit SZ-Stange",
    auch: ["Cable Curl", "Cable Curl (SZ-Stange)", "EZ-Bar Cable Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Bizepscurl am unteren Kabelzug mit SZ-Griff oder gerader Stange. Im Gegensatz zur Hantel bleibt die Spannung auch unten erhalten.",
      ausfuehrung: [
        "Befestige eine SZ-Stange unten am Kabelzug und greif sie im Untergriff schulterbreit.",
        "Tritt einen kleinen Schritt zurück, damit das Gewicht im gestreckten Arm schon leicht angehoben ist.",
        "Stell dich aufrecht hin, Ellbogen an den Seiten, Bauch angespannt.",
        "Curle die Stange nach oben, bis die Unterarme fast senkrecht stehen.",
        "Senke langsam ab, bis die Arme ganz gestreckt sind, ohne das Gewicht abzulegen.",
        "Halte das Tempo über den ganzen Satz gleichmäßig."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zurücklehnen, um mehr Gewicht zu bewegen: Gewicht reduzieren.",
        "Ellbogen nach vorn: Oberarme bleiben neben dem Körper.",
        "Unten abladen: Das Gewicht berührt den Stapel nicht, die Spannung bleibt."
      ],
      vorteile: [
        "Konstante Spannung über den ganzen Bewegungsweg.",
        "Feine Gewichtsabstufung und einfache Steigerung.",
        "Gelenkfreundlich durch die SZ-Stange."
      ],
      tipps: [
        "Gut für Sätze mit 10 bis 15 Wiederholungen und Drop-Sets.",
        "Ein Schritt weiter weg vom Kabel erhöht die Spannung unten."
      ],
      varianten: "Leichter: mit Band. Schwerer: oben zwei Sekunden halten oder Drop-Set.",
      sicherheit: "Bei Ellbogenbeschwerden Griffbreite variieren und schmerzfrei arbeiten."
    }
  },
  {
    id: "kabel_curl_einarmig",
    name: "Einarmiger Kabel-Curl",
    auch: ["Single-Arm Cable Curl", "One-Arm Cable Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Curl mit einem Einzelgriff am unteren Kabelzug, das Gesicht zum Kabel. Du kannst dich voll auf einen Arm konzentrieren und das Handgelenk frei aufdrehen.",
      ausfuehrung: [
        "Stell den Kabelzug ganz nach unten und befestige einen Einzelgriff.",
        "Stell dich mit dem Gesicht zum Kabel, greif im Untergriff und tritt einen Schritt zurück.",
        "Der Arm ist gestreckt und leicht vor dem Körper, die freie Hand stützt sich am Gerät ab oder liegt an der Hüfte.",
        "Curle den Griff nach oben und drehe den kleinen Finger dabei leicht nach außen.",
        "Oben kurz halten und den Bizeps anspannen.",
        "Langsam zurück bis zur vollen Streckung und dann die nächste Wiederholung."
      ],
      atmung: "Beim Curlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper dreht mit: Hüfte und Schultern bleiben frontal.",
        "Ellbogen hebt sich weit nach vorn: Oberarm bleibt ruhig.",
        "Zu schnelles Tempo: Zwei Sekunden für das Absenken einplanen."
      ],
      vorteile: [
        "Gleichmäßige Spannung und volle Konzentration auf einen Arm.",
        "Freie Drehung im Handgelenk.",
        "Gut geeignet, um Seitenunterschiede auszugleichen."
      ],
      tipps: [
        "Starte immer mit der schwächeren Seite und mach auf der stärkeren nicht mehr Wiederholungen.",
        "Passt gut als Abschluss nach einer schweren Stangenübung."
      ],
      varianten: "Leichter: mit Band. Schwerer: Bayesian Curl mit dem Rücken zum Kabel.",
      sicherheit: "Bei Ellbogenbeschwerden schmerzfrei und mit leichtem Gewicht arbeiten."
    }
  },
  {
    id: "kabel_curl_ueberkopf",
    name: "Kabel-Curl über Kopf",
    auch: ["Overhead Cable Curl", "Double Biceps Cable Curl", "High Cable Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Curl mit den Armen auf Schulterhöhe zur Seite, die Griffe kommen von zwei oberen Kabelzügen. Der Bizeps arbeitet hier in einer verkürzten Stellung mit starker Spitzenkontraktion.",
      ausfuehrung: [
        "Stell beide Kabelrollen eines Kabelturms auf etwa Schulterhöhe oder etwas höher und befestige Einzelgriffe.",
        "Greif beide Griffe im Untergriff und stell dich mittig zwischen die Kabel.",
        "Heb die Arme seitlich auf Schulterhöhe, sie sind fast gestreckt, die Handflächen zeigen nach oben.",
        "Beuge die Ellbogen und zieh die Griffe Richtung Kopf, die Oberarme bleiben auf Schulterhöhe.",
        "Halte die Spitzenkontraktion kurz, ohne die Schultern hochzuziehen.",
        "Strecke die Arme langsam zurück zur Seite."
      ],
      atmung: "Beim Beugen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Oberarme sinken ab: Ellbogen bleiben auf Schulterhöhe.",
        "Schultern ziehen hoch: Schultern tief und lang halten.",
        "Zu schweres Gewicht zieht dich aus der Position: Leicht beginnen."
      ],
      vorteile: [
        "Starke Spannung in der verkürzten Position.",
        "Gute Ergänzung zu Übungen in der Dehnung.",
        "Schont die Handgelenke durch die freie Drehung."
      ],
      tipps: [
        "Funktioniert auch einarmig an einem Kabelzug.",
        "Eher für mittlere bis hohe Wiederholungen."
      ],
      varianten: "Leichter: einarmig mit Band an einem hohen Anker. Schwerer: Pause in der Kontraktion.",
      sicherheit: "Bei Schulterbeschwerden in der Abduktion auslassen."
    }
  },
  {
    id: "konzentrationscurl",
    name: "Konzentrationscurl",
    auch: ["Concentration Curl", "Seated Concentration Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einarmiger Curl im Sitzen, der Oberarm liegt an der Innenseite des Oberschenkels. Schwung ist fast unmöglich, und du spürst den Bizeps sehr deutlich.",
      ausfuehrung: [
        "Setz dich ans Ende einer Bank, die Füße stehen breit auf dem Boden.",
        "Nimm eine Kurzhantel und lege die Rückseite des Oberarms an die Innenseite des Oberschenkels.",
        "Der Arm ist gestreckt, die Handfläche zeigt zum anderen Bein, der Oberkörper ist leicht nach vorn geneigt.",
        "Curle die Hantel Richtung Schulter, der Oberarm bleibt am Bein.",
        "Oben eine Sekunde halten und den Bizeps fest anspannen.",
        "Senke langsam ab, bis der Arm ganz gestreckt ist."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberkörper richtet sich beim Curlen auf: Der Rumpf bleibt in derselben Position.",
        "Ellbogen rutscht vom Bein: Oberarm fest am Oberschenkel lassen.",
        "Unten nicht ganz strecken: Voller Bewegungsumfang."
      ],
      vorteile: [
        "Sehr strenge Isolation des Bizeps.",
        "Ideal für das Gefühl der Muskelkontraktion.",
        "Einseitig und gelenkfreundlich."
      ],
      tipps: [
        "Als letzte Bizepsübung mit 10 bis 15 Wiederholungen ideal.",
        "Dreh den kleinen Finger oben leicht nach außen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: oben zwei Sekunden halten oder langsames Absenken.",
      sicherheit: "Bei Rückenbeschwerden den Oberkörper nicht zu weit nach vorn beugen."
    }
  },
  {
    id: "scottcurl_sz",
    name: "Scottcurl mit SZ-Stange",
    auch: ["Preacher Curl", "EZ-Bar Preacher Curl", "Scott Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["sz_stange", "scottbank"], ["sz_stange", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 2 },
    stufe: 1,
    info: {
      kurz: "Curl mit aufgelegten Oberarmen auf einer Scottbank oder der schräg gestellten Lehne einer Hantelbank. Der Bizeps arbeitet besonders stark im unteren, gestreckten Bereich.",
      ausfuehrung: [
        "Stell die Scottbank so ein, dass die Achseln oben am Polster anliegen. Ohne Scottbank kniest oder stehst du hinter der steil gestellten Banklehne.",
        "Leg die Rückseiten der Oberarme vollständig auf das Polster.",
        "Greif die SZ-Stange im Untergriff schulterbreit.",
        "Curle die Stange nach oben, bis die Unterarme fast senkrecht stehen. Ganz oben verliert der Bizeps Spannung, deshalb kurz davor stoppen.",
        "Senke die Stange langsam ab, bis die Arme fast gestreckt sind.",
        "Kontrolliere vor allem den unteren Bereich, dort ist die Belastung am höchsten."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Arme unten schnell und ruckartig strecken: Belastet die Sehne, unten besonders langsam.",
        "Hintern hebt sich vom Sitz, Schultern rollen nach vorn: Bleib ruhig sitzen.",
        "Oberarme lösen sich vom Polster: Arme bleiben aufgelegt.",
        "Zu schwer: Am Scottpult schaffst du weniger als im Stehen."
      ],
      vorteile: [
        "Kein Schwung möglich, sehr strenge Bizepsarbeit.",
        "Hohe Belastung in der gestreckten Position, gut für Muskelaufbau.",
        "Betont den kurzen Bizepskopf und den Brachialis."
      ],
      tipps: [
        "Arbeite im Bereich von 8 bis 12 Wiederholungen mit langsamem Absenken.",
        "Eine schräg gestellte Banklehne ist ein guter Ersatz für eine Scottbank."
      ],
      varianten: "Leichter: einarmig mit Kurzhantel oder an der Bizepsmaschine. Schwerer: Pause kurz vor der Streckung.",
      sicherheit: "Bei Ellbogen- oder Bizepssehnenbeschwerden unten nicht ganz strecken und das Gewicht reduzieren."
    }
  },
  {
    id: "scottcurl_kh",
    name: "Einarmiger Scottcurl mit Kurzhantel",
    auch: ["Dumbbell Preacher Curl", "Single-Arm Preacher Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kurzhantel", "scottbank"], ["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 2 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Scottcurl mit einer Kurzhantel, ein Arm nach dem anderen. Du kannst das Handgelenk frei drehen und dich ganz auf eine Seite konzentrieren.",
      ausfuehrung: [
        "Stell dich seitlich hinter eine Scottbank oder hinter eine steil gestellte Banklehne.",
        "Lege einen Oberarm vollständig auf das Polster, die Achsel liegt oben an der Kante.",
        "Halte die Kurzhantel im Untergriff, der Arm ist fast gestreckt.",
        "Curle die Hantel nach oben, bis der Unterarm fast senkrecht steht.",
        "Senke langsam ab und halte die Spannung, bis der Arm fast gestreckt ist.",
        "Alle Wiederholungen mit einem Arm, dann wechseln."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Ellbogen hebt sich vom Polster: Der Oberarm bleibt ganz aufgelegt.",
        "Unten ruckartig strecken: Kontrolliert und langsam bleiben.",
        "Schulter zieht nach vorn: Oberkörper ruhig über dem Polster halten."
      ],
      vorteile: [
        "Strenge Isolation bei einseitiger Arbeit.",
        "Freie Drehung der Hand, angenehm für die Handgelenke.",
        "Starke Belastung in der gestreckten Position."
      ],
      tipps: [
        "Halte die Hantel etwas außen am kleinen Finger, das verstärkt die Supination.",
        "Gute Wahl, wenn eine Seite deutlich schwächer ist."
      ],
      varianten: "Leichter: Bizepsmaschine. Schwerer: Pause kurz vor der Streckung oder exzentrisch betont.",
      sicherheit: "Bei Ellbogenbeschwerden unten nicht ganz strecken."
    }
  },
  {
    id: "bizepsmaschine",
    name: "Bizepsmaschine",
    auch: ["Machine Preacher Curl", "Machine Curl", "Bizepscurl an der Maschine"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["bizepsmaschine"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Geführter Curl an der Maschine mit Armauflage. Einfach zu lernen, sicher bis zur Erschöpfung und gut zum Steigern in kleinen Schritten.",
      ausfuehrung: [
        "Stell die Sitzhöhe so ein, dass die Achseln oben am Armpolster anliegen.",
        "Lege die Oberarme ganz auf das Polster, die Ellbogen liegen auf Höhe der Drehachse der Maschine.",
        "Greif die Griffe im Untergriff, Arme fast gestreckt.",
        "Curle die Griffe nach oben, bis die Unterarme fast senkrecht stehen.",
        "Senke langsam ab, bis die Arme fast gestreckt sind, ohne das Gewicht abzulegen.",
        "Bleib mit dem Gesäß fest auf dem Sitz."
      ],
      atmung: "Beim Curlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Ellbogen nicht auf der Drehachse: Sitz neu einstellen, sonst läuft die Bewegung unrund.",
        "Hochdrücken aus dem Sitz: Gewicht reduzieren.",
        "Gewicht unten ablegen: Die Spannung soll bleiben."
      ],
      vorteile: [
        "Sehr sicher, auch bis kurz vor das Muskelversagen.",
        "Gleichmäßige Belastung durch die Kurvenscheibe der Maschine.",
        "Einsteigerfreundlich."
      ],
      tipps: [
        "Gut für Drop-Sets: einfach den Stift umstecken.",
        "Viele Maschinen erlauben auch einarmiges Arbeiten."
      ],
      varianten: "Leichter: weniger Gewicht oder einarmig mit der zweiten Hand als Hilfe. Schwerer: langsames Absenken oder Drop-Set.",
      sicherheit: "Bei Ellbogenbeschwerden unten nicht ganz strecken."
    }
  },
  {
    id: "spider_curl",
    name: "Spider Curl",
    auch: ["Spider Curl", "Prone Incline Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kurzhantel", "bank"], ["sz_stange", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Curl in Bauchlage auf einer Schrägbank, die Arme hängen senkrecht nach unten. Der Bizeps ist vor allem oben in der verkürzten Position stark gefordert.",
      ausfuehrung: [
        "Stell die Lehne auf etwa 30 bis 45 Grad und leg dich mit der Brust darauf, das Kinn ragt über die Lehne.",
        "Die Füße stehen auf dem Boden oder stützen sich am Sitz ab.",
        "Lass die Arme mit Kurzhanteln oder SZ-Stange senkrecht nach unten hängen.",
        "Curle das Gewicht nach oben, die Oberarme bleiben senkrecht zum Boden.",
        "Oben eine Sekunde fest anspannen.",
        "Senke langsam ab, bis die Arme ganz gestreckt sind."
      ],
      atmung: "Beim Curlen ausatmen, beim Absenken einatmen. Die Brust liegt auf, atme ruhig in den Bauch.",
      fehler: [
        "Oberarme schwingen nach vorn: Sie bleiben senkrecht unter den Schultern.",
        "Brust hebt sich von der Lehne: Gewicht senken.",
        "Zu schnell: Ruhiges Tempo mit Pause oben."
      ],
      vorteile: [
        "Kein Schwung möglich, sehr strenge Isolation.",
        "Starke Spannung in der verkürzten Position.",
        "Ergänzt Übungen mit Betonung der Dehnung wie den Schrägbank-Curl."
      ],
      tipps: [
        "Etwas leichter beginnen als beim normalen Curl.",
        "Mit SZ-Stange beidarmig, mit Kurzhanteln auch abwechselnd möglich."
      ],
      varianten: "Leichter: steilere Lehne. Schwerer: Pause oben verlängern.",
      sicherheit: "Bei Atembeschwerden in Bauchlage oder Reflux lieber den Konzentrationscurl wählen."
    }
  },
  {
    id: "drag_curl",
    name: "Drag Curl",
    auch: ["Drag Curl", "Barbell Drag Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["langhantel"], ["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Curl, bei dem die Stange nah am Körper nach oben gezogen wird und die Ellbogen nach hinten wandern. Der lange Bizepskopf bleibt dabei in einer Art Dehnung unter Spannung, der vordere Schultermuskel arbeitet kaum mit.",
      ausfuehrung: [
        "Greif die Stange schulterbreit im Untergriff und stell dich aufrecht hin.",
        "Die Stange liegt an den Oberschenkeln an.",
        "Zieh die Ellbogen nach hinten und schiebe die Stange dabei am Körper entlang nach oben.",
        "Führe die Stange bis etwa auf Höhe des Bauchnabels oder der unteren Rippen.",
        "Oben kurz anspannen, dann auf dem gleichen Weg langsam zurück nach unten.",
        "Die Stange bleibt über den ganzen Weg in Kontakt mit dem Körper oder ganz nah daran."
      ],
      atmung: "Beim Hochziehen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Stange entfernt sich vom Körper: Dann wird es ein normaler Curl, die Stange gleitet am Körper entlang.",
        "Schultern ziehen hoch: Schultern tief halten.",
        "Oberkörper beugt sich vor: Aufrecht bleiben."
      ],
      vorteile: [
        "Betont den langen Bizepskopf.",
        "Wenig Mitarbeit der vorderen Schulter.",
        "Interessante Abwechslung mit anderem Kraftverlauf."
      ],
      tipps: [
        "Etwa 70 bis 80 Prozent deines normalen Curl-Gewichts reichen.",
        "Gute Ergänzung zu Scottcurls, die den kurzen Kopf betonen."
      ],
      varianten: "Leichter: mit Kurzhanteln oder am Kabel. Schwerer: oben zwei Sekunden halten.",
      sicherheit: "Bei Schmerzen an der Schultervorderseite die Ellbogen weniger weit nach hinten ziehen."
    }
  },
  {
    id: "zottman_curl",
    name: "Zottman Curl",
    auch: ["Zottman Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    golf: 2,
    info: {
      kurz: "Curl im Untergriff nach oben, oben drehst du die Hände in den Obergriff und senkst so langsam ab. Hoch arbeitet der Bizeps, beim Absenken vor allem Brachioradialis und Handgelenkstrecker.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Kurzhanteln im Untergriff neben dem Körper.",
        "Curle die Hanteln mit nach oben zeigenden Handflächen sauber nach oben.",
        "Oben drehst du die Hände in den Obergriff, die Handrücken zeigen nun nach oben.",
        "Senke die Hanteln im Obergriff langsam in drei Sekunden ab.",
        "Unten drehst du die Hände zurück in den Untergriff.",
        "Starte die nächste Wiederholung, beidarmig oder abwechselnd."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim langsamen Absenken einatmen.",
      fehler: [
        "Absenken zu schnell: Das langsame Absenken im Obergriff ist der Kern der Übung.",
        "Handgelenke knicken im Obergriff nach unten ab: Handgelenke gerade halten, Gewicht reduzieren.",
        "Drehung mitten in der Bewegung: Erst oben drehen, dann absenken.",
        "Zu schweres Gewicht: Der Obergriff begrenzt die Last, danach richten."
      ],
      vorteile: [
        "Trainiert Bizeps und Unterarmmuskeln in einer Übung.",
        "Exzentrische Belastung der Handgelenkstrecker und des Brachioradialis.",
        "Verbessert die Drehkraft des Unterarms."
      ],
      tipps: [
        "Wähle das Gewicht nach dem Obergriff, nicht nach dem Curl.",
        "Gut am Ende des Armtrainings mit 8 bis 12 Wiederholungen."
      ],
      varianten: "Leichter: abwechselnd. Schwerer: Absenken auf vier bis fünf Sekunden verlängern.",
      sicherheit: "Bei akuten Beschwerden an der Außenseite des Ellbogens sehr leicht beginnen oder auslassen.",
      golf: "Kräftigt Handgelenkstrecker und Unterarmdrehung, die beim Kontrollieren der Schlagfläche arbeiten. Belastbare Unterarmmuskeln können den Ellbogen bei vielen Schlägen auf der Range entlasten."
    }
  },
  {
    id: "zottman_curl_invers",
    name: "Inverser Zottman Curl",
    auch: ["Inverse Zottman Curl", "Reverse Zottman Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    golf: 1,
    info: {
      kurz: "Umgekehrter Zottman Curl: Du curlst im Hammergriff nach oben, drehst oben in den Untergriff und senkst langsam mit nach oben zeigenden Handflächen ab. So hebst du mit der stärkeren Griffposition und belastest den Bizeps beim Absenken besonders.",
      ausfuehrung: [
        "Stell dich hüftbreit hin, Kurzhanteln im neutralen Griff neben dem Körper, Daumen zeigen nach vorn.",
        "Curle die Hanteln im Hammergriff nach oben, die Ellbogen bleiben an der Seite.",
        "Oben drehst du die Handflächen nach oben in den Untergriff.",
        "Senke die Hanteln im Untergriff langsam in drei bis vier Sekunden ab.",
        "Unten drehst du zurück in den Hammergriff.",
        "Wiederhole ruhig, beidarmig oder abwechselnd."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim langsamen Absenken einatmen.",
      fehler: [
        "Absenken zu schnell: Mindestens drei Sekunden für den Weg nach unten.",
        "Drehen mitten im Weg: Die Drehung passiert oben und unten.",
        "Schwung beim Hochcurlen: Rumpf ruhig halten."
      ],
      vorteile: [
        "Im Hammergriff bist du stärker, so ist das Gewicht beim Absenken für den Bizeps besonders fordernd.",
        "Trainiert Brachialis und Brachioradialis beim Heben mit.",
        "Starker Reiz in der nachgebenden Phase."
      ],
      tipps: [
        "Wähle ein Gewicht, das etwas schwerer ist als bei deinen normalen Kurzhantel-Curls.",
        "Besonders wirksam mit langsamem Tempo und vollem Bewegungsumfang."
      ],
      varianten: "Leichter: kürzeres Absenken. Schwerer: oben eine Sekunde halten und fünf Sekunden absenken.",
      sicherheit: "Bei Ellbogenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "pinch_grip_curl",
    name: "Pinch Grip Curl",
    auch: ["Pinch Grip Curl", "Plate Pinch Curl", "Scheiben-Curl im Pinzettengriff"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["unterarm", "bizeps"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Hammercurl mit einer Hantelscheibe, die du nur mit Daumen und Fingern an der Kante hältst. Er trainiert Brachioradialis und Brachialis und dazu die Pinzettengriffkraft der Finger.",
      ausfuehrung: [
        "Nimm eine glatte Hantelscheibe und greif sie oben an der Kante: Daumen auf der einen Seite, die vier Finger auf der anderen.",
        "Stell dich aufrecht hin, der Arm hängt gestreckt neben dem Körper, die Scheibe steht senkrecht.",
        "Curle die Scheibe wie bei einem Hammercurl nach oben, der Daumen zeigt nach vorn.",
        "Halte die Scheibe oben kurz und drücke dabei fest mit den Fingern.",
        "Senke langsam ab, ohne dass die Scheibe aus der Hand rutscht.",
        "Alle Wiederholungen mit einer Hand, dann wechseln."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Scheibe zu schwer: Wenn der Griff vor dem Arm versagt, eine leichtere Scheibe wählen.",
        "Scheibe kippt nach vorn: Handgelenk gerade und stabil halten.",
        "Schwung aus dem Körper: Langsam und kontrolliert curlen.",
        "Scheibe fällt auf den Fuß: Über einem freien Boden arbeiten und Füße etwas zur Seite stellen."
      ],
      vorteile: [
        "Kombiniert Armtraining und Griffkraft.",
        "Stärkt die Fingerbeuger und den Daumen, die beim Halten von Werkzeugen und Schlägern wichtig sind.",
        "Gelenkfreundlicher Hammergriff."
      ],
      tipps: [
        "Glatte Stahlscheiben sind am schwersten zu greifen, gummierte am leichtesten.",
        "Zwei kleine Scheiben mit den glatten Seiten nach außen sind eine schwerere Variante."
      ],
      varianten: "Leichter: kleinere Scheibe oder Kurzhantel im Hammergriff. Schwerer: zwei zusammengelegte Scheiben oder oben halten.",
      sicherheit: "Achte auf deine Füße. Bei Beschwerden am Daumensattelgelenk auslassen.",
      golf: "Die Kraft von Daumen und Fingern bestimmt, wie stabil du den Schläger hältst, ohne zu verkrampfen. Ein kräftiger Griff hilft, die Schlagfläche bei Bodenkontakt und im Rough zu kontrollieren."
    }
  },
  {
    id: "bizeps_band",
    name: "Bizepscurl mit Band",
    auch: ["Band Curl", "Resistance Band Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Curl mit einem Widerstandsband, das unter den Füßen fixiert ist. Ideal für zu Hause und auf Reisen, der Widerstand nimmt nach oben hin zu.",
      ausfuehrung: [
        "Stell dich mit beiden Füßen hüftbreit auf die Mitte des Bandes.",
        "Greif die Bandenden oder Griffe im Untergriff, die Arme sind gestreckt.",
        "Spann den Bauch leicht an, Schultern bleiben tief.",
        "Curle die Hände nach oben, die Ellbogen bleiben neben dem Körper.",
        "Oben kurz anspannen, das Band ist hier am straffsten.",
        "Senke langsam ab, ohne dass das Band unten ganz locker wird."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Band rutscht unter den Füßen: Breiter stehen oder das Band einmal um die Füße wickeln.",
        "Hände schnellen nach unten: Das Band zieht stark, langsam gegenhalten.",
        "Ellbogen wandern nach vorn: Oberarme bleiben ruhig."
      ],
      vorteile: [
        "Überall machbar, kaum Ausrüstung nötig.",
        "Gelenkschonend durch weichen Widerstand.",
        "Höchster Widerstand oben, eine gute Ergänzung zu Hanteln."
      ],
      tipps: [
        "Mehr Widerstand: breiter stehen oder das Band kürzer greifen.",
        "Für Muskelaufbau ruhig 15 bis 25 Wiederholungen bis kurz vor die Erschöpfung."
      ],
      varianten: "Leichter: dünneres Band oder engerer Stand. Schwerer: dickeres Band oder oben halten.",
      sicherheit: "Band vor dem Training auf Risse prüfen."
    }
  },
  {
    id: "curl_21er",
    name: "21er Curls",
    auch: ["21s", "Barbell 21s", "Bicep 21s"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["sz_stange"], ["langhantel"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Ein Satz aus 21 Wiederholungen in drei Abschnitten: sieben untere halbe, sieben obere halbe und sieben volle Curls. Eine bewährte Methode, um viel Spannungszeit in kurzer Zeit zu erzeugen.",
      ausfuehrung: [
        "Greif die Stange im Untergriff schulterbreit und stell dich aufrecht hin.",
        "Mach sieben Wiederholungen von ganz unten bis zur Mitte, bis die Unterarme waagerecht sind.",
        "Mach ohne Pause sieben Wiederholungen von der Mitte bis ganz nach oben.",
        "Mach zum Schluss sieben volle Wiederholungen von ganz unten bis ganz oben.",
        "Halte das Tempo die ganze Zeit kontrolliert, keine Pause zwischen den Abschnitten.",
        "Lege die Stange erst nach allen 21 Wiederholungen ab."
      ],
      atmung: "Bei jeder Aufwärtsbewegung ausatmen, bei jeder Abwärtsbewegung einatmen.",
      fehler: [
        "Zu schwer: Nimm etwa 60 Prozent deines normalen Curl-Gewichts.",
        "Abschnitte werden unsauber: Halbe Wiederholungen genau bis zur Mitte führen.",
        "Schwung bei den letzten vollen Wiederholungen: Lieber Gewicht senken."
      ],
      vorteile: [
        "Hohe Spannungszeit und starker Pump.",
        "Trainiert jeden Abschnitt der Bewegung gezielt.",
        "Spart Zeit als intensiver Abschlusssatz."
      ],
      tipps: [
        "Ein bis zwei Sätze am Ende des Armtrainings reichen.",
        "Mit der SZ-Stange sind die Handgelenke meist entspannter."
      ],
      varianten: "Leichter: drei mal fünf Wiederholungen. Schwerer: oben in jedem Abschnitt kurz halten.",
      sicherheit: "Bei Ellbogenbeschwerden lieber normale Sätze mit moderatem Gewicht."
    }
  },
  {
    id: "cheat_curl_langhantel",
    name: "Langhantel-Cheat-Curl",
    auch: ["Barbell Cheat Curl", "Cheat Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["langhantel"], ["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 2, ruecken: 1 },
    stufe: 3,
    info: {
      kurz: "Schwerer Langhantel-Curl, bei dem ein kleiner Hüftimpuls das Gewicht nach oben bringt und du es dann streng langsam absenkst. Eine Technik für Fortgeschrittene, um die nachgebende Phase zu überladen.",
      ausfuehrung: [
        "Wähle ein Gewicht, das etwas über deinem strengen Curl-Gewicht liegt.",
        "Greif schulterbreit im Untergriff, Knie leicht gebeugt, Bauch und Gesäß fest.",
        "Setze einen kurzen, kontrollierten Impuls aus Hüfte und Knien und curle die Stange nach oben.",
        "Richte dich oben wieder ganz auf und stabilisiere die Stange.",
        "Senke die Stange streng und langsam in drei bis vier Sekunden ab.",
        "Unten kurz zur Ruhe kommen, dann die nächste Wiederholung."
      ],
      atmung: "Beim Impuls ausatmen, beim langsamen Absenken einatmen.",
      fehler: [
        "Zu viel Schwung mit Hohlkreuz: Der Impuls kommt aus Hüfte und Knien, nicht aus dem Rücken.",
        "Stange fällt nach unten: Das Absenken muss streng sein.",
        "Jeder Satz wird so gemacht: Cheat Curls sind eine gezielte Intensitätstechnik für wenige Sätze."
      ],
      vorteile: [
        "Überlastet die nachgebende Phase mit mehr Gewicht.",
        "Kann Kraftplateaus durchbrechen.",
        "Trainiert die Kraft im oberen Bewegungsbereich."
      ],
      tipps: [
        "Höchstens einen bis zwei Sätze pro Training.",
        "Kann auch am Ende eines strengen Satzes genutzt werden, um zwei bis drei Wiederholungen anzuhängen."
      ],
      varianten: "Leichter: strenger Langhantel-Curl mit langsamem Absenken. Schwerer: Absenken auf fünf Sekunden verlängern.",
      sicherheit: "Nicht bei Rückenbeschwerden oder bei Problemen mit Ellbogen oder Bizepssehne."
    }
  },
  {
    id: "waiter_curl",
    name: "Waiter Curl",
    auch: ["Waiter Curl", "Kellner-Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Curl mit einer Kurzhantel, die senkrecht auf den flachen, übereinandergelegten Händen ruht wie ein Tablett. Der Bizeps bleibt besonders oben unter Spannung, und Schwung ist kaum möglich.",
      ausfuehrung: [
        "Stell eine Kurzhantel senkrecht hin und lege beide Handflächen übereinander unter die obere Scheibe.",
        "Heb die Hantel an, sodass sie senkrecht auf deinen Handflächen ruht, Arme gestreckt vor dem Körper.",
        "Stell dich aufrecht hin, Ellbogen an den Seiten.",
        "Curle die Hantel nach oben, sie bleibt dabei senkrecht wie ein Tablett.",
        "Oben eine Sekunde fest anspannen.",
        "Senke langsam ab, bis die Arme ganz gestreckt sind."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hantel kippt: Lieber leichter wählen und die Handflächen flach lassen.",
        "Schultern ziehen nach vorn: Brust offen halten.",
        "Ellbogen wandern nach vorn: Oberarme bleiben neben dem Körper."
      ],
      vorteile: [
        "Starke Spannung im oberen Bereich.",
        "Nur eine Kurzhantel nötig.",
        "Gute Abwechslung für die Kontraktion."
      ],
      tipps: [
        "Etwa die Hälfte des Gewichts deiner beiden Kurzhanteln beim normalen Curl.",
        "Gut als Abschlussübung mit 12 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: kleinere Hantel. Schwerer: oben zwei Sekunden halten.",
      sicherheit: "Bei Handgelenkbeschwerden auslassen, weil die Handgelenke stark gestreckt sind."
    }
  },
  {
    id: "hammercurl_schraegbank",
    name: "Hammercurl auf der Schrägbank",
    auch: ["Incline Hammer Curl", "Incline Dumbbell Hammer Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps", "unterarm"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Hammercurl im Sitzen auf einer Schrägbank, die Arme hängen leicht hinter dem Körper. Brachialis und Brachioradialis arbeiten so aus einer gedehnten Position, und Schwung ist kaum möglich.",
      ausfuehrung: [
        "Stell die Lehne auf etwa 45 bis 60 Grad und setz dich mit dem Rücken fest an die Lehne.",
        "Lass die Arme mit den Kurzhanteln gestreckt nach unten hängen, die Handflächen zeigen zueinander.",
        "Curle die Hanteln im neutralen Griff nach oben, die Oberarme bleiben senkrecht zum Boden.",
        "Oben kurz anspannen, ohne die Ellbogen nach vorn zu schieben.",
        "Senke die Hanteln langsam ab, bis die Arme ganz gestreckt sind.",
        "Die Schultern bleiben während des ganzen Satzes an der Lehne."
      ],
      atmung: "Beim Hochcurlen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Schultern rollen nach vorn: Brust offen und Schulterblätter an die Lehne.",
        "Ellbogen wandern nach vorn: Oberarme bleiben senkrecht.",
        "Zu schwer: Etwas leichter als beim Hammercurl im Stehen wählen."
      ],
      vorteile: [
        "Trainiert Brachialis und Brachioradialis aus der Dehnung.",
        "Sehr strenge Ausführung ohne Schwung.",
        "Gelenkfreundlicher neutraler Griff."
      ],
      tipps: [
        "Gut als Ergänzung zum Schrägbank-Curl im Untergriff.",
        "Abwechselnd curlen, wenn beidarmig die Form leidet."
      ],
      varianten: "Leichter: steilere Lehne. Schwerer: flachere Lehne oder langsames Absenken.",
      sicherheit: "Bei Beschwerden an der Schultervorderseite die Lehne steiler stellen."
    }
  },
  {
    id: "kabel_curl_liegend",
    name: "Kabel-Curl im Liegen",
    auch: ["Lying Cable Curl", "Supine Cable Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    geraete: [["kabelzug", "matte"], ["kabelzug", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Bizepscurl in Rückenlage vor dem unteren Kabelzug, die Füße zeigen zum Kabelturm. Der Rücken liegt auf, Schwung ist ausgeschlossen, und der Bizeps arbeitet besonders oben gegen starke Spannung.",
      ausfuehrung: [
        "Befestige eine SZ-Stange oder ein Seil unten am Kabelzug.",
        "Greif den Griff und leg dich auf den Rücken, die Füße zeigen zum Kabelturm und stehen am Gerät oder auf dem Boden.",
        "Die Oberarme liegen neben dem Körper oder zeigen leicht nach oben, die Arme sind gestreckt.",
        "Curle den Griff Richtung Stirn oder Brust, die Oberarme bleiben ruhig.",
        "Oben kurz fest anspannen.",
        "Strecke die Arme langsam zurück, ohne dass das Gewicht aufsetzt."
      ],
      atmung: "Beim Curlen ausatmen, beim Strecken einatmen.",
      fehler: [
        "Oberarme heben sich stark: Dann hilft die Schulter, Oberarme ruhig lassen.",
        "Kopf hebt sich: Nacken entspannt auf der Unterlage.",
        "Zu schnelles Zurückgehen: Kontrolliert strecken."
      ],
      vorteile: [
        "Kein Schwung möglich, sehr strenge Isolation.",
        "Konstante Spannung durch das Kabel.",
        "Entlastet den unteren Rücken vollständig."
      ],
      tipps: [
        "Gut für Drop-Sets am Ende des Trainings.",
        "12 bis 15 Wiederholungen mit Pause oben."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: oben zwei Sekunden halten.",
      sicherheit: "Bei Ellbogenbeschwerden das Gewicht reduzieren."
    }
  },
  {
    id: "bizeps_schlingentrainer",
    name: "Bizepscurl im Schlingentrainer",
    auch: ["Suspension Trainer Biceps Curl", "TRX Biceps Curl", "Bodyweight Curl"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["bauch", "unterarm"],
    geraete: [["schlingentrainer"]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Curl mit dem eigenen Körpergewicht im Schlingentrainer. Du lehnst dich zurück und ziehst dich über die Beugung der Ellbogen nach vorn, der Neigungswinkel bestimmt den Widerstand.",
      ausfuehrung: [
        "Stell die Schlingen auf mittlere Länge und greif die Griffe im Untergriff.",
        "Lehn dich mit gestreckten Armen zurück, der Körper ist eine gerade Linie von Kopf bis Fuß.",
        "Die Oberarme zeigen etwa auf Schulterhöhe nach vorn zum Ankerpunkt.",
        "Beuge die Ellbogen und zieh die Hände Richtung Stirn, die Oberarme bleiben auf Höhe.",
        "Oben kurz halten, dann langsam zurück in die Streckung.",
        "Der Körper bleibt die ganze Zeit gespannt, die Hüfte sackt nicht ab."
      ],
      atmung: "Beim Heranziehen ausatmen, beim Zurücklehnen einatmen.",
      fehler: [
        "Hüfte knickt ein: Bauch und Gesäß anspannen.",
        "Oberarme sinken ab: Dann wird es ein Rudern, Ellbogen bleiben vorn auf Höhe.",
        "Zu flacher Winkel am Anfang: Erst aufrechter starten."
      ],
      vorteile: [
        "Trainiert den Bizeps ohne Hanteln.",
        "Fordert zusätzlich den Rumpf.",
        "Leicht über den Winkel anzupassen."
      ],
      tipps: [
        "Je weiter die Füße nach vorn gehen, desto schwerer wird es.",
        "Auch an Ringen oder einer tief eingehängten Stange möglich."
      ],
      varianten: "Leichter: aufrechter stehen. Schwerer: Füße weiter vorn oder einarmig.",
      sicherheit: "Befestigung vor dem Training prüfen. Bei Ellbogenbeschwerden in kleinem Winkel beginnen."
    }
  },
  {
    id: "bizeps_isohold",
    name: "Bizeps-Isohold bei 90 Grad",
    auch: ["Isometric Biceps Hold", "Curl Iso Hold"],
    muster: "bizeps",
    art: "kraft",
    muskeln: ["bizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kurzhantel"], ["sz_stange"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Statisches Halten eines Curls mit rechtwinklig gebeugten Ellbogen. Eine einfache Methode, um zusätzliche Spannungszeit zu sammeln oder schmerzfrei zu trainieren, wenn Bewegung gerade unangenehm ist.",
      ausfuehrung: [
        "Nimm Kurzhanteln, eine SZ-Stange oder ein Band unter den Füßen und stell dich aufrecht hin.",
        "Curle das Gewicht nach oben, bis die Unterarme waagerecht sind und der Ellbogen etwa 90 Grad gebeugt ist.",
        "Halte diese Position ruhig, die Oberarme liegen an der Seite.",
        "Spanne den Bizeps aktiv an, als würdest du weiter curlen wollen.",
        "Halte die vorgegebene Zeit und senke dann langsam ab."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Unterarme sinken langsam ab: Position halten oder Gewicht senken.",
        "Zurücklehnen: Rumpf aufrecht und angespannt.",
        "Schultern ziehen hoch: Schultern tief lassen."
      ],
      vorteile: [
        "Lange Spannungszeit mit wenig Gelenkbewegung.",
        "Gut als Finisher nach dynamischen Sätzen.",
        "Einfach zu lernen."
      ],
      tipps: [
        "20 bis 45 Sekunden pro Satz sind ein guter Bereich.",
        "Direkt nach einem Curl-Satz als Abschluss besonders wirksam."
      ],
      varianten: "Leichter: kürzer halten oder leichteres Gewicht. Schwerer: in verschiedenen Winkeln halten, etwa bei 45 und 120 Grad.",
      sicherheit: "Bei Bluthochdruck nicht pressen, ruhig weiteratmen."
    }
  },

  // ---------- Trizeps ----------
  {
    id: "trizeps_kabel",
    name: "Trizepsdrücken am Kabelzug",
    auch: ["Triceps Pressdown", "Triceps Pushdown", "Cable Pushdown"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Die Standardübung für den Trizeps am oberen Kabelzug mit gerader Stange oder V-Griff. Leicht zu lernen, gelenkfreundlich und gut zu steigern.",
      ausfuehrung: [
        "Befestige eine gerade Stange oder einen V-Griff oben am Kabelzug und greif im Obergriff etwa schulterbreit.",
        "Stell dich nah an den Kabelturm, Füße hüftbreit, Oberkörper ganz leicht nach vorn geneigt.",
        "Zieh die Ellbogen an die Seiten, die Unterarme sind etwa waagerecht oder etwas höher.",
        "Drück den Griff nach unten, bis die Arme ganz gestreckt sind. Nur die Unterarme bewegen sich.",
        "Spanne unten den Trizeps eine Sekunde lang fest an.",
        "Lass den Griff langsam zurückkommen, bis die Unterarme wieder etwa waagerecht oder etwas darüber sind."
      ],
      atmung: "Beim Herunterdrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen wandern nach vorn und hinten: Sie bleiben fest an den Seiten, sonst helfen Brust und Latissimus mit.",
        "Mit dem Oberkörper nach vorn drücken: Gewicht reduzieren und aufrecht bleiben.",
        "Schultern ziehen hoch: Schultern tief und weg von den Ohren.",
        "Handgelenke knicken ab: Handgelenke bleiben gerade."
      ],
      vorteile: [
        "Isoliert alle drei Trizepsköpfe mit Betonung des seitlichen Kopfes.",
        "Gelenkfreundlich und einfach zu lernen.",
        "Feine Gewichtsabstufung für sauberes Steigern."
      ],
      tipps: [
        "Wenn die gerade Stange in den Handgelenken drückt, nimm einen V-Griff oder das Seil.",
        "Arbeite im Bereich von 8 bis 15 Wiederholungen mit sauberer Streckung.",
        "Stell dir vor, die Ellbogen sind an den Rippen festgeklebt."
      ],
      varianten: "Leichter: mit Band an einer Tür oder Stange. Schwerer: am Seil, einarmig oder mit Pause unten.",
      sicherheit: "Bei Ellbogenbeschwerden das Seil nutzen und nicht ruckartig strecken."
    }
  },
  {
    id: "trizeps_kabel_seil",
    name: "Trizepsdrücken am Seil",
    auch: ["Rope Pressdown", "Rope Pushdown", "Rope Triceps Pushdown"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Trizepsdrücken am oberen Kabelzug mit dem Seil. Die Hände können unten auseinandergehen, das ermöglicht eine vollständige Streckung und ist für viele Handgelenke angenehmer als die Stange.",
      ausfuehrung: [
        "Befestige das Trizepsseil oben am Kabelzug und greif die Enden im neutralen Griff, Daumen oben.",
        "Stell dich nah an den Kabelturm, Oberkörper leicht nach vorn geneigt, Ellbogen an den Seiten.",
        "Drück das Seil nach unten und zieh die Seilenden unten leicht nach außen.",
        "Strecke die Arme ganz und spanne den Trizeps unten fest an.",
        "Lass das Seil langsam zurückkommen, bis die Unterarme etwa waagerecht oder etwas höher sind.",
        "Die Oberarme bleiben über den ganzen Satz ruhig."
      ],
      atmung: "Beim Herunterdrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Seil wird nur nach unten gedrückt, nicht auseinander: Unten bewusst nach außen ziehen.",
        "Ellbogen lösen sich vom Körper: Gewicht senken.",
        "Zu weit nach oben zurück: Wenn die Ellbogen nach vorn wandern, ist der Weg zu lang."
      ],
      vorteile: [
        "Vollständige Streckung durch die freien Hände.",
        "Angenehm für Handgelenke und Ellbogen.",
        "Gut für hohe Wiederholungen und als Abschluss."
      ],
      tipps: [
        "Nimm etwas weniger Gewicht als an der Stange, dafür eine saubere Endkontraktion.",
        "Die Seilenden enden unten etwa neben den Oberschenkeln."
      ],
      varianten: "Leichter: mit Band. Schwerer: einarmig oder Pause unten.",
      sicherheit: "Bei Ellbogenbeschwerden das Tempo langsam halten und schmerzfrei arbeiten."
    }
  },
  {
    id: "trizeps_kabel_einarmig",
    name: "Einarmiges Trizepsdrücken am Kabel",
    auch: ["Single-Arm Pressdown", "One-Arm Cable Pushdown"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Trizepsdrücken mit einem Einzelgriff, ein Arm nach dem anderen. Du kannst dich voll auf einen Trizeps konzentrieren und Seitenunterschiede ausgleichen.",
      ausfuehrung: [
        "Befestige einen Einzelgriff oben am Kabelzug und greif ihn im Obergriff oder neutralen Griff.",
        "Stell dich seitlich versetzt zum Kabel, sodass der Griff vor der arbeitenden Schulter hängt.",
        "Zieh den Ellbogen an die Seite, die freie Hand stützt sich am Kabelturm ab.",
        "Drück den Griff nach unten, bis der Arm ganz gestreckt ist.",
        "Unten kurz anspannen, dann langsam zurück, bis der Unterarm etwa waagerecht ist.",
        "Alle Wiederholungen mit einem Arm, dann die Seite wechseln."
      ],
      atmung: "Beim Herunterdrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberkörper dreht ein: Schultern bleiben parallel zum Kabelturm.",
        "Ellbogen wandert nach außen: Er bleibt nah am Körper.",
        "Zu schnelles Zurückschnellen: Kontrolliert zurückführen."
      ],
      vorteile: [
        "Gleicht Seitenunterschiede aus.",
        "Freier Griffwinkel, angenehm für das Handgelenk.",
        "Sehr gutes Gefühl für die Muskelspannung."
      ],
      tipps: [
        "Beginne mit der schwächeren Seite.",
        "Probiere Ober- und Untergriff aus, beide sind möglich."
      ],
      varianten: "Leichter: mit Band. Schwerer: Pause unten oder langsames Zurückführen.",
      sicherheit: "Bei Ellbogenbeschwerden mit leichtem Gewicht beginnen."
    }
  },
  {
    id: "trizeps_kabel_untergriff",
    name: "Trizepsdrücken im Untergriff",
    auch: ["Reverse-Grip Pressdown", "Underhand Triceps Pushdown"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["unterarm"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 1,
    info: {
      kurz: "Trizepsdrücken am oberen Kabel mit den Handflächen nach oben. Der veränderte Griff verschiebt die Belastung etwas und fordert zusätzlich die Unterarme.",
      ausfuehrung: [
        "Befestige eine gerade Stange oder einen Einzelgriff oben am Kabelzug.",
        "Greif im Untergriff schulterbreit, die Handflächen zeigen nach oben.",
        "Zieh die Ellbogen an die Seiten, Oberkörper leicht nach vorn geneigt.",
        "Drück den Griff nach unten, bis die Arme ganz gestreckt sind.",
        "Unten kurz anspannen und dann langsam zurückführen.",
        "Halte die Handgelenke während des ganzen Satzes gerade."
      ],
      atmung: "Beim Herunterdrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Zu schweres Gewicht: Im Untergriff bist du deutlich schwächer, leichter beginnen.",
        "Handgelenke knicken nach hinten: Gerade halten.",
        "Ellbogen wandern nach vorn: Oberarme ruhig an der Seite."
      ],
      vorteile: [
        "Abwechslung im Reiz für den Trizeps.",
        "Fordert die Unterarmmuskeln mit.",
        "Einarmig sehr gut für Seitenausgleich."
      ],
      tipps: [
        "Einarmig mit Einzelgriff ist die Bewegung oft am angenehmsten.",
        "Eher 10 bis 15 Wiederholungen mit langsamem Tempo."
      ],
      varianten: "Leichter: einarmig mit wenig Gewicht. Schwerer: Pause unten.",
      sicherheit: "Bei Handgelenkbeschwerden lieber das Seil im neutralen Griff nutzen."
    }
  },
  {
    id: "trizeps_pressdown_21er",
    name: "Trizepsdrücken 21er",
    auch: ["Triceps Pressdown 21s", "Pushdown 21s"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Trizepsdrücken als 21er Satz: sieben untere halbe, sieben obere halbe und sieben volle Wiederholungen ohne Pause. Viel Spannungszeit in kurzer Zeit.",
      ausfuehrung: [
        "Stell dich wie beim normalen Trizepsdrücken auf, Ellbogen an den Seiten.",
        "Mach sieben Wiederholungen von der gestreckten Position bis zur Mitte, wo die Unterarme etwa 45 Grad nach unten zeigen.",
        "Mach ohne Pause sieben Wiederholungen von oben, wo die Unterarme waagerecht sind, bis zur Mitte.",
        "Mach dann sieben volle Wiederholungen über den ganzen Weg.",
        "Halte das Tempo die ganze Zeit kontrolliert.",
        "Erst nach allen 21 Wiederholungen loslassen."
      ],
      atmung: "Bei jedem Strecken ausatmen, bei jedem Zurückführen einatmen.",
      fehler: [
        "Zu schweres Gewicht: Etwa 60 Prozent deines normalen Trizepsdrücken-Gewichts nehmen.",
        "Abschnitte verschwimmen: Halbe Wiederholungen genau bis zur Mitte führen.",
        "Oberkörper drückt am Ende mit: Ruhig stehen bleiben."
      ],
      vorteile: [
        "Hohe Spannungszeit und starker Pump.",
        "Spart Zeit als Abschlusssatz.",
        "Trainiert jeden Abschnitt der Bewegung."
      ],
      tipps: [
        "Ein bis zwei Sätze am Ende des Trainings reichen.",
        "Mit Seil oder Stange möglich."
      ],
      varianten: "Leichter: drei mal fünf Wiederholungen. Schwerer: in jedem Abschnitt unten kurz halten.",
      sicherheit: "Bei Ellbogenbeschwerden lieber normale Sätze."
    }
  },
  {
    id: "trizeps_ueberkopf",
    name: "Trizepsstrecken über Kopf mit Kurzhantel",
    auch: ["Overhead Dumbbell Triceps Extension", "Seated DB Overhead Extension", "French Press mit Kurzhantel"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 230,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Trizepsstrecken mit einer Kurzhantel, die du mit beiden Händen über dem Kopf hältst. Der lange Trizepskopf wird in dieser Armhaltung stark gedehnt, was als besonders wirksamer Wachstumsreiz gilt.",
      ausfuehrung: [
        "Setz dich auf eine Bank mit Rückenlehne oder stell dich stabil hin.",
        "Greif eine Kurzhantel mit beiden Händen unter der oberen Scheibe, die Daumen umschließen den Griff.",
        "Stemme die Hantel über den Kopf, die Arme sind gestreckt, die Oberarme nah am Kopf.",
        "Senke die Hantel hinter dem Kopf ab, indem du nur die Ellbogen beugst, bis du eine deutliche Dehnung im Trizeps spürst.",
        "Strecke die Arme wieder nach oben, ohne die Ellbogen weit nach außen zu öffnen.",
        "Rippen bleiben unten, kein Hohlkreuz."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Hohlkreuz: Bauch anspannen, im Sitzen den Rücken an die Lehne.",
        "Ellbogen gehen weit auseinander: Leicht nach außen ist in Ordnung, aber nicht ausweichen.",
        "Zu wenig Tiefe: Die Dehnung hinter dem Kopf ist der wertvollste Teil.",
        "Zu schwer zum sicheren Hochbringen: Hantel im Sitzen vom Oberschenkel aus hochstemmen."
      ],
      vorteile: [
        "Betont den langen Trizepskopf, den größten Teil des Muskels.",
        "Trainiert den Muskel in der Dehnung.",
        "Nur eine Kurzhantel nötig."
      ],
      tipps: [
        "Im Sitzen mit Lehne bleibt der Rücken stabiler.",
        "Arbeite mit 10 bis 15 Wiederholungen und langsamem Absenken."
      ],
      varianten: "Leichter: einarmig mit leichter Hantel oder am Kabel. Schwerer: langsames Absenken oder Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden über Kopf oder bei Ellbogenschmerzen in der Dehnung die Tiefe verringern oder am Kabel arbeiten."
    }
  },
  {
    id: "trizeps_ueberkopf_seil",
    name: "Überkopf-Trizepsstrecken am Seil",
    auch: ["Rope Overhead Triceps Extension", "Rope Overhead Triceps Ext.", "Cable Overhead Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Trizepsstrecken über Kopf mit dem Seil am Kabelzug, mit dem Rücken zum Turm. Der lange Kopf arbeitet in der Dehnung, und das Kabel hält die Spannung gleichmäßig.",
      ausfuehrung: [
        "Stell den Kabelzug auf etwa Brust- bis Kopfhöhe und befestige das Seil.",
        "Greif das Seil, dreh dich mit dem Rücken zum Kabelturm und mach einen Schritt nach vorn in eine Schrittstellung.",
        "Neige den Oberkörper leicht nach vorn, die Ellbogen zeigen nach vorn, die Hände sind hinter dem Kopf.",
        "Strecke die Arme nach vorn oben, bis sie ganz gestreckt sind.",
        "Lass die Hände langsam zurück hinter den Kopf kommen, bis du eine deutliche Dehnung spürst.",
        "Die Oberarme bleiben während der Bewegung ruhig."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberarme bewegen sich mit: Dann hilft der Latissimus, nur die Unterarme bewegen sich.",
        "Hohlkreuz: Rumpf anspannen und Schrittstellung nutzen.",
        "Zu kurzer Weg zurück: Bis in die Dehnung gehen."
      ],
      vorteile: [
        "Betont den langen Trizepskopf in der Dehnung.",
        "Gleichmäßige Spannung durch das Kabel.",
        "Einfacher stabil zu halten als die Kurzhantel über Kopf."
      ],
      tipps: [
        "Bei schwerem Gewicht ist das Einnehmen der Position der schwierigste Teil, hier lohnt sich etwas Übung.",
        "Ein niedriger Kabelansatz mit dem Seil hinter dem Rücken ist eine gute Alternative."
      ],
      varianten: "Leichter: mit Band. Schwerer: einarmig oder Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden die Ellbogen etwas tiefer halten."
    }
  },
  {
    id: "trizeps_ueberkopf_kabel_einarmig",
    name: "Einarmiges Überkopf-Trizepsdrücken am Kabel",
    auch: ["Single-Arm Overhead Cable Extension", "Einarm. Überkopf-Trizepsdrücken", "Katana Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 240,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Trizepsstrecken über Kopf am Kabel. Du kannst den Arm frei positionieren und den langen Kopf in der Dehnung gezielt belasten.",
      ausfuehrung: [
        "Stell den Kabelzug auf etwa Hüft- bis Brusthöhe und befestige einen Einzelgriff.",
        "Greif den Griff, dreh dich mit dem Rücken zum Kabel und hebe den Ellbogen nach oben, die Hand liegt hinter dem Kopf.",
        "Stell dich in Schrittstellung, Rumpf stabil, die freie Hand an der Hüfte.",
        "Strecke den Arm nach oben vorn, bis er ganz gestreckt ist.",
        "Lass die Hand langsam zurück hinter den Kopf kommen, bis du die Dehnung spürst.",
        "Alle Wiederholungen mit einem Arm, dann wechseln."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen wandert nach außen: Er zeigt nach vorn oben.",
        "Rumpf dreht mit: Hüfte und Schultern frontal halten.",
        "Hohlkreuz: Bauch fest."
      ],
      vorteile: [
        "Einseitig, gut zum Ausgleich von Unterschieden.",
        "Starke Dehnung des langen Kopfes bei gleichmäßiger Spannung.",
        "Freier Bewegungsweg, oft gelenkfreundlich."
      ],
      tipps: [
        "Probiere einen Kabelansatz knapp unter Schulterhöhe, viele empfinden das als ideal.",
        "Der Arm kann auch leicht quer vor dem Kopf arbeiten, wenn es angenehmer ist."
      ],
      varianten: "Leichter: mit Band. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Schulterbeschwerden über Kopf vorsichtig und mit wenig Gewicht."
    }
  },
  {
    id: "trizeps_ueberkopf_kh_einarmig",
    name: "Einarmiges Überkopf-Trizepsstrecken mit Kurzhantel",
    auch: ["Single-Arm Overhead Dumbbell Extension", "One-Arm DB Overhead Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 230,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Trizepsstrecken über Kopf mit einer Kurzhantel in einer Hand. Leicht, gut kontrollierbar und mit freier Armposition.",
      ausfuehrung: [
        "Setz dich auf eine Bank mit Lehne oder stell dich stabil hin.",
        "Halte die Kurzhantel mit gestrecktem Arm über dem Kopf, die Handfläche zeigt nach vorn oder zur Seite.",
        "Die freie Hand kann den Oberarm am Ellbogen stützen.",
        "Senke die Hantel hinter dem Kopf ab, bis du eine deutliche Dehnung spürst.",
        "Strecke den Arm wieder nach oben, der Oberarm bleibt dabei ruhig.",
        "Alle Wiederholungen mit einem Arm, dann wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Oberarm wandert nach vorn: Mit der freien Hand stabilisieren.",
        "Zu schwer: Die Hantel muss hinter dem Kopf sicher kontrollierbar bleiben.",
        "Hohlkreuz: Rippen unten lassen."
      ],
      vorteile: [
        "Betont den langen Kopf in der Dehnung.",
        "Einseitig, ideal für Seitenausgleich.",
        "Mit leichten Hanteln zu Hause machbar."
      ],
      tipps: [
        "Neutraler Griff mit dem Daumen nach hinten ist oft angenehmer.",
        "Eher 10 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: am Kabel. Schwerer: langsames Absenken.",
      sicherheit: "Bei Schulterbeschwerden über Kopf auf das Kabel oder liegende Varianten ausweichen."
    }
  },
  {
    id: "trizeps_ueberkopf_sz",
    name: "Trizepsstrecken über Kopf mit SZ-Stange",
    auch: ["EZ-Bar Overhead Triceps Extension", "Seated French Press"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 230,
    gelenke: { ellbogen: 2, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Trizepsstrecken über Kopf mit der SZ-Stange, meist im Sitzen. Ermöglicht etwas höhere Lasten als die Kurzhantel und dehnt den langen Kopf stark.",
      ausfuehrung: [
        "Setz dich auf eine Bank mit senkrechter Lehne, der Rücken liegt an.",
        "Greif die SZ-Stange an den inneren Knicken im Obergriff und stemme sie über den Kopf.",
        "Die Oberarme sind nah am Kopf und zeigen nach oben.",
        "Senke die Stange hinter dem Kopf ab, bis du die Dehnung im Trizeps deutlich spürst.",
        "Strecke die Arme wieder ganz nach oben.",
        "Halte die Ellbogen dabei in etwa schulterbreit."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Ellbogen klappen weit nach außen: Gewicht reduzieren.",
        "Rücken löst sich von der Lehne: Bauch fest.",
        "Absenken zu schnell in die Dehnung: Kontrolliert und langsam."
      ],
      vorteile: [
        "Höhere Lasten für den langen Trizepskopf möglich.",
        "Starke Dehnung als Wachstumsreiz.",
        "Stabil durch die Rückenlehne."
      ],
      tipps: [
        "Lass dir die Stange anreichen, wenn das Hochbringen schwierig ist.",
        "8 bis 12 Wiederholungen mit Kontrolle in der Dehnung."
      ],
      varianten: "Leichter: Kurzhantel oder Kabel. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Ellbogen- oder Schulterbeschwerden lieber das Kabel nutzen."
    }
  },
  {
    id: "skull_crusher_sz",
    name: "SZ-Skull-Crusher",
    auch: ["Skull Crusher", "Lying Triceps Extension", "EZ-Bar Skullcrusher", "French Press liegend"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["sz_stange", "bank"], ["langhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 2 },
    stufe: 2,
    info: {
      kurz: "Liegendes Trizepsstrecken mit der SZ-Stange, die Stange wird Richtung Stirn oder knapp dahinter abgesenkt. Eine bewährte Grundübung für Trizepsmasse.",
      ausfuehrung: [
        "Leg dich auf eine Flachbank, Füße fest auf dem Boden.",
        "Halte die SZ-Stange an den inneren Knicken im Obergriff mit gestreckten Armen über der Brust.",
        "Neige die Oberarme leicht nach hinten Richtung Kopf, sodass sie nicht ganz senkrecht stehen.",
        "Beuge nur die Ellbogen und senke die Stange bis knapp hinter den Kopf oder zur Stirn.",
        "Strecke die Arme wieder, bis sie gestreckt sind, die leichte Neigung der Oberarme bleibt.",
        "Halte die Ellbogen ungefähr schulterbreit."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Ellbogen klappen auseinander: Schulterbreit halten, Gewicht reduzieren.",
        "Oberarme bewegen sich stark: Dann wird es ein Pullover, Oberarme bleiben weitgehend ruhig.",
        "Absenken ohne Kontrolle: Die Stange ist nah am Kopf, langsam bleiben.",
        "Oberarme ganz senkrecht: Leicht nach hinten geneigt hält die Spannung auch oben."
      ],
      vorteile: [
        "Kräftigt alle drei Trizepsköpfe mit guter Last.",
        "Durch die Neigung der Oberarme auch Dehnung des langen Kopfes.",
        "Gut steigerbar."
      ],
      tipps: [
        "Senke die Stange eher hinter den Kopf als auf die Stirn, das ist für viele Ellbogen angenehmer und dehnt mehr.",
        "Nutze bei schweren Sätzen einen Partner zum Anreichen und Abnehmen.",
        "Die SZ-Stange ist für die Handgelenke angenehmer als die gerade Stange."
      ],
      varianten: "Leichter: mit Kurzhanteln oder am Kabel. Schwerer: exzentrisch betont oder auf der Schrägbank.",
      sicherheit: "Bei Ellbogenschmerzen auf das Kabel oder Kurzhanteln ausweichen. Immer kontrolliert absenken."
    }
  },
  {
    id: "skull_crusher_exzentrisch",
    name: "Exzentrischer SZ-Skull-Crusher",
    auch: ["Eccentric Skull Crusher", "Ecc. SZ-Skull-Crusher"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["sz_stange", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 2 },
    stufe: 2,
    info: {
      kurz: "Skull Crusher mit betont langsamem Absenken in vier bis fünf Sekunden. Die nachgebende Phase mit Dehnung des Trizeps ist ein starker Reiz für Muskelaufbau.",
      ausfuehrung: [
        "Leg dich auf die Flachbank und halte die SZ-Stange mit gestreckten Armen über der Brust.",
        "Neige die Oberarme leicht nach hinten Richtung Kopf.",
        "Senke die Stange in vier bis fünf Sekunden hinter den Kopf ab, nur die Ellbogen beugen sich.",
        "Unten kurz in der Dehnung ankommen, ohne abzulegen oder abzufedern.",
        "Strecke die Arme in normalem Tempo wieder nach oben.",
        "Zähle das Absenken bei jeder Wiederholung bewusst mit."
      ],
      atmung: "Beim langsamen Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Absenken wird zum Ende hin schneller: Gewicht so wählen, dass die letzte Wiederholung noch langsam ist.",
        "Ellbogen gehen auseinander: Schulterbreit halten.",
        "Zu viele Sätze: Langsam einsteigen, exzentrisches Training macht mehr Muskelkater."
      ],
      vorteile: [
        "Hohe Spannung unter Dehnung.",
        "Bessere Kontrolle und Technik durch das langsame Tempo.",
        "Starker Reiz mit moderater Last."
      ],
      tipps: [
        "Beginne mit etwa 80 Prozent deines normalen Skull-Crusher-Gewichts.",
        "Kombiniere sie mit einer Übung in der verkürzten Position wie dem Kickback."
      ],
      varianten: "Leichter: drei Sekunden Absenken. Schwerer: sechs Sekunden oder Pause in der Dehnung.",
      sicherheit: "Bei Ellbogenbeschwerden auslassen oder auf das Kabel ausweichen."
    }
  },
  {
    id: "skull_crusher_kh",
    name: "Skull Crusher mit Kurzhanteln",
    auch: ["Dumbbell Skull Crusher", "DB Lying Triceps Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Liegendes Trizepsstrecken mit zwei Kurzhanteln im neutralen Griff. Die freien Hände sind für viele Ellbogen und Handgelenke angenehmer als die Stange.",
      ausfuehrung: [
        "Leg dich auf eine Flachbank, Füße fest auf dem Boden.",
        "Halte zwei Kurzhanteln mit gestreckten Armen über der Brust, die Handflächen zeigen zueinander.",
        "Neige die Oberarme leicht nach hinten Richtung Kopf.",
        "Senke die Hanteln neben den Kopf ab, indem du nur die Ellbogen beugst.",
        "Strecke die Arme wieder, bis sie fast gestreckt sind.",
        "Halte die Hanteln über den ganzen Satz unter Kontrolle."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Hanteln stoßen an den Kopf: Hanteln neben den Kopf führen und langsam bleiben.",
        "Ellbogen klappen nach außen: Gewicht reduzieren.",
        "Oberarme bewegen sich mit: Oberarme ruhig halten."
      ],
      vorteile: [
        "Gelenkfreundlicher neutraler Griff.",
        "Jede Seite arbeitet unabhängig.",
        "Gut zu Hause mit Bank und Kurzhanteln."
      ],
      tipps: [
        "Ein Hauch mehr Neigung der Oberarme nach hinten erhöht die Dehnung.",
        "10 bis 15 Wiederholungen sind ein guter Bereich."
      ],
      varianten: "Leichter: einarmig mit Stütze. Schwerer: langsames Absenken oder Pause in der Dehnung.",
      sicherheit: "Bei Ellbogenschmerzen das Gewicht senken und den Bewegungsumfang anpassen."
    }
  },
  {
    id: "skull_crusher_schraeg",
    name: "Skull Crusher auf der Schrägbank",
    auch: ["Incline Skull Crusher", "Incline EZ-Bar Triceps Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["sz_stange", "bank"], ["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 2, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Skull Crusher auf einer Schrägbank. Die Oberarme stehen dabei weiter über dem Kopf, dadurch wird der lange Trizepskopf noch stärker gedehnt als auf der Flachbank.",
      ausfuehrung: [
        "Stell die Lehne auf etwa 30 bis 45 Grad und leg dich darauf, Füße fest am Boden.",
        "Halte die SZ-Stange oder Kurzhanteln mit gestreckten Armen über dem Kopf, die Oberarme zeigen leicht nach hinten.",
        "Senke das Gewicht hinter den Kopf ab, indem du die Ellbogen beugst.",
        "Gehe bis in eine deutliche Dehnung, ohne dass die Ellbogen nach außen ausweichen.",
        "Strecke die Arme wieder, bis sie fast gestreckt sind.",
        "Halte die Oberarme während der ganzen Bewegung in ihrer Position."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Oberarme kippen nach vorn: Dann geht die Dehnung verloren.",
        "Zu schwer: Die gedehnte Position braucht weniger Last als auf der Flachbank.",
        "Hohlkreuz: Rücken bleibt auf der Lehne."
      ],
      vorteile: [
        "Mehr Dehnung des langen Kopfes als auf der Flachbank.",
        "Gute Brücke zwischen Skull Crusher und Überkopfstrecken.",
        "Mit Stange oder Kurzhanteln machbar."
      ],
      tipps: [
        "Beginne mit etwa 70 Prozent des Gewichts von der Flachbank.",
        "Lass dir das Gewicht anreichen."
      ],
      varianten: "Leichter: Flachbank. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Ellbogen- oder Schulterbeschwerden auf Kabelvarianten ausweichen."
    }
  },
  {
    id: "skull_crusher_kabel",
    name: "Liegendes Trizepsstrecken am Kabel",
    auch: ["Cable Skull Crusher", "Lying Cable Triceps Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Skull Crusher am unteren Kabelzug mit SZ-Griff oder Seil, die Bank steht vor dem Kabelturm. Das Kabel hält die Spannung auch oben, wo die Stange fast keinen Widerstand gibt.",
      ausfuehrung: [
        "Stell eine Flachbank vor den Kabelturm und befestige unten eine SZ-Stange oder das Seil.",
        "Greif den Griff und leg dich mit dem Kopf Richtung Kabelturm auf die Bank.",
        "Halte die Arme gestreckt, die Oberarme leicht nach hinten über den Kopf geneigt.",
        "Beuge die Ellbogen und führe den Griff hinter den Kopf.",
        "Strecke die Arme wieder, das Kabel zieht dabei gleichmäßig nach hinten.",
        "Halte die Oberarme ruhig und die Ellbogen schulterbreit."
      ],
      atmung: "Beim Beugen einatmen, beim Strecken ausatmen.",
      fehler: [
        "Oberarme ziehen mit: Nur die Ellbogen bewegen sich.",
        "Bank zu nah am Kabel: Etwas Abstand lassen, damit das Kabel nicht gegen den Kopf zieht.",
        "Zu schnelles Zurückgehen: Kontrolliert arbeiten."
      ],
      vorteile: [
        "Gleichmäßige Spannung über den ganzen Weg.",
        "Gelenkfreundlicher als die freie Stange.",
        "Kein Risiko, dass ein Gewicht auf den Kopf fällt."
      ],
      tipps: [
        "Mit Seil ist die Bewegung für viele Handgelenke am angenehmsten.",
        "Gut für 12 bis 20 Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Pause in der Dehnung.",
      sicherheit: "Bei Ellbogenbeschwerden die Tiefe anpassen."
    }
  },
  {
    id: "jm_press",
    name: "JM Press",
    auch: ["JM Press"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["brust", "schulter_vorn"],
    geraete: [["langhantel", "bank"], ["sz_stange", "bank"], ["multipresse", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 2, schulter: 1 },
    stufe: 3,
    info: {
      kurz: "Mischung aus engem Bankdrücken und Skull Crusher, benannt nach dem Powerlifter JM Blakley. Sehr hohe Lasten für den Trizeps möglich, technisch aber anspruchsvoll.",
      ausfuehrung: [
        "Leg dich auf die Flachbank und greif die Stange etwas enger als schulterbreit.",
        "Halte die Stange mit gestreckten Armen über der Brust, die Schulterblätter sind zurückgezogen.",
        "Senke die Stange Richtung Kinn oder oberen Hals ab und lass die Ellbogen dabei nach vorn Richtung Füße wandern.",
        "Unten zeigen die Ellbogen nach vorn, die Unterarme sind fast senkrecht über den Oberarmen zusammengefaltet.",
        "Drück die Stange auf dem gleichen Weg zurück nach oben, indem du die Ellbogen streckst.",
        "Bewege dich langsam und kontrolliert, besonders am tiefsten Punkt."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Ellbogen zeigen nach außen: Sie zeigen nach vorn Richtung Füße.",
        "Es wird ein normales Bankdrücken: Die Stange geht Richtung Hals, nicht zur Brust.",
        "Zu schnelles Absenken: Gefahr für Ellbogen und Gesicht, langsam bleiben.",
        "Zu schwer zu früh: Erst die Technik mit leichter Stange lernen."
      ],
      vorteile: [
        "Hohe Lasten für den Trizeps bei kurzer Hebelwirkung.",
        "Überträgt sich gut auf Bankdrücken und Drückkraft.",
        "Trainiert den Trizeps in mittlerer Dehnung."
      ],
      tipps: [
        "In der Multipresse ist der Bewegungsweg leichter zu lernen.",
        "Nutze eine Sicherung oder einen Partner.",
        "Arbeite im Bereich von 6 bis 10 Wiederholungen."
      ],
      varianten: "Leichter: in der Multipresse oder mit sehr leichter Stange. Schwerer: Pause unten.",
      sicherheit: "Nur mit Sicherung oder Partner. Bei Ellbogen- oder Schulterbeschwerden auslassen."
    }
  },
  {
    id: "trizeps_kreuz_kh_liegend",
    name: "Einarmiges Trizepsstrecken quer im Liegen",
    auch: ["Cross-Body Dumbbell Extension", "Cross-Face Triceps Extension", "Lying Cross-Body Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Liegendes Trizepsstrecken mit einer Kurzhantel, die quer vor dem Gesicht zur gegenüberliegenden Schulter abgesenkt wird. Ein natürlicher, ellbogenfreundlicher Bewegungsweg für den Trizeps.",
      ausfuehrung: [
        "Leg dich auf eine Flachbank und halte eine Kurzhantel mit gestrecktem Arm über der Schulter.",
        "Die Handfläche zeigt Richtung Füße oder zur Körpermitte, die freie Hand stützt den Oberarm.",
        "Beuge den Ellbogen und senke die Hantel quer vor dem Gesicht Richtung gegenüberliegende Schulter.",
        "Der Oberarm bleibt dabei fast senkrecht und ruhig.",
        "Strecke den Arm wieder nach oben, bis er ganz gestreckt ist.",
        "Alle Wiederholungen mit einem Arm, dann wechseln."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Hantel kommt dem Gesicht zu nah: Langsam und kontrolliert absenken.",
        "Oberarm kippt zur Seite: Mit der freien Hand stützen.",
        "Zu schwer: Leichte Hantel und saubere Streckung."
      ],
      vorteile: [
        "Natürlicher Bewegungsweg, für viele Ellbogen angenehm.",
        "Einseitig für Seitenausgleich.",
        "Gute Kontrolle durch die stützende Hand."
      ],
      tipps: [
        "12 bis 15 Wiederholungen mit gleichmäßigem Tempo.",
        "Gut als Alternative, wenn Skull Crusher am Ellbogen unangenehm sind."
      ],
      varianten: "Leichter: leichtere Hantel. Schwerer: Pause unten oder langsames Absenken.",
      sicherheit: "Bei Ellbogenbeschwerden die Tiefe anpassen."
    }
  },
  {
    id: "tate_press",
    name: "Tate Press",
    auch: ["Tate Press", "Elbows-Out Dumbbell Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Liegendes Trizepsstrecken mit zwei Kurzhanteln, bei dem die Ellbogen nach außen zeigen und die Hanteln zur Brust geführt werden. Betont den seitlichen und mittleren Trizepskopf im oberen Bereich.",
      ausfuehrung: [
        "Leg dich auf eine Flachbank und halte zwei Kurzhanteln über der Brust, die Handflächen zeigen Richtung Füße.",
        "Die Hanteln berühren sich an den Enden fast, die Ellbogen zeigen zur Seite.",
        "Beuge die Ellbogen und senke die Hanteln zur Brust ab, die Oberarme bleiben fast unbewegt.",
        "Die Hanteln berühren die Brust leicht oder kommen knapp darüber.",
        "Strecke die Arme wieder nach oben, indem du die Ellbogen streckst.",
        "Halte die Bewegung langsam und gleichmäßig."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Oberarme bewegen sich stark: Dann wird es ein Drücken, nur die Unterarme bewegen sich.",
        "Zu schweres Gewicht: Die Übung funktioniert mit moderaten Hanteln.",
        "Hanteln knallen auf die Brust: Leicht aufsetzen oder knapp darüber stoppen."
      ],
      vorteile: [
        "Ungewöhnlicher Winkel, der die äußeren Trizepsköpfe betont.",
        "Gut für die Endstreckung, etwa beim Bankdrücken.",
        "Kaum Dehnung, daher für manche Ellbogen angenehm."
      ],
      tipps: [
        "Funktioniert gut mit 10 bis 15 Wiederholungen.",
        "Kombiniere sie mit einer Überkopfübung für den langen Kopf."
      ],
      varianten: "Leichter: einarmig mit der freien Hand am Ellbogen. Schwerer: Pause an der Brust.",
      sicherheit: "Bei Ellbogenbeschwerden mit leichtem Gewicht testen."
    }
  },
  {
    id: "trizeps_kickback_kabel",
    name: "Trizeps-Kickback am Kabel",
    auch: ["Cable Triceps Kickback", "Triceps Cable Kickback"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["schulter_hinten"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einarmiger Kickback am unteren Kabelzug in vorgebeugter Haltung. Anders als mit der Kurzhantel ist der Trizeps über den ganzen Weg und besonders in der Streckung gefordert.",
      ausfuehrung: [
        "Stell den Kabelzug ganz nach unten oder auf Kniehöhe und greif das Kabelende ohne Griff oder mit einem Einzelgriff.",
        "Mach einen Schritt zurück und beuge den Oberkörper nach vorn, bis er fast waagerecht ist, die freie Hand stützt sich ab.",
        "Zieh den Oberarm nach hinten, bis er parallel zum Oberkörper oder leicht dahinter ist.",
        "Strecke den Ellbogen ganz, bis der Arm gerade nach hinten zeigt.",
        "Halte die Streckung kurz und führe den Unterarm dann langsam zurück.",
        "Der Oberarm bleibt während des ganzen Satzes fixiert."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberarm sinkt ab: Er bleibt neben dem Körper, sonst geht die Spannung verloren.",
        "Schwung aus der Schulter: Nur der Ellbogen bewegt sich.",
        "Rücken rund: Hüfte nach hinten schieben, Rücken lang."
      ],
      vorteile: [
        "Trainiert den Trizeps in der verkürzten Position mit konstanter Spannung.",
        "Einseitig, gut für Seitenausgleich.",
        "Gelenkfreundlich."
      ],
      tipps: [
        "Das Kabel ohne Griff direkt am Kugelende zu fassen, ist für viele am angenehmsten.",
        "Hohe Wiederholungen von 12 bis 20 passen gut."
      ],
      varianten: "Leichter: mit Band. Schwerer: Pause in der Streckung.",
      sicherheit: "Bei Rückenbeschwerden den freien Arm gut abstützen."
    }
  },
  {
    id: "trizeps_kickback_kh",
    name: "Trizeps-Kickback mit Kurzhantel",
    auch: ["Dumbbell Kickback", "DB Triceps Kickback"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    einseitig: true,
    info: {
      kurz: "Einarmiger Kickback mit Kurzhantel, abgestützt auf einer Bank oder dem Oberschenkel. Der Trizeps arbeitet vor allem in der vollen Streckung.",
      ausfuehrung: [
        "Stütz eine Hand und ein Knie auf eine Bank oder stell dich in Schrittstellung und stütz die Hand auf den Oberschenkel.",
        "Der Oberkörper ist fast waagerecht, der Rücken gerade.",
        "Zieh den Oberarm mit der Hantel nach hinten, bis er parallel zum Oberkörper ist.",
        "Strecke den Ellbogen, bis der Arm gerade nach hinten zeigt.",
        "Halte oben eine Sekunde und senke den Unterarm dann langsam ab.",
        "Alle Wiederholungen mit einem Arm, dann wechseln."
      ],
      atmung: "Beim Strecken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Oberarm sinkt nach unten: Hochhalten, sonst arbeitet der Trizeps kaum.",
        "Schwung: Leichteres Gewicht und langsames Tempo.",
        "Rücken rund: Brust offen, Rücken lang."
      ],
      vorteile: [
        "Starke Spannung in der vollen Streckung.",
        "Mit leichten Hanteln überall machbar.",
        "Einseitig für Seitenausgleich."
      ],
      tipps: [
        "Die Last ist unten sehr gering, deshalb lohnt sich am Kabel oft die bessere Variante.",
        "Eher leichtes Gewicht, dafür eine saubere Pause in der Streckung."
      ],
      varianten: "Leichter: kleinere Hantel. Schwerer: am Kabel oder Pause oben verlängern.",
      sicherheit: "Bei Rückenbeschwerden mit Abstützung auf der Bank arbeiten."
    }
  },
  {
    id: "trizeps_kabel_kreuz",
    name: "Trizepsstrecken am Kabel über Kreuz",
    auch: ["Cross-Body Cable Triceps Extension", "Cross Cable Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["kabelzug"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ellbogen: 1 },
    stufe: 2,
    einseitig: true,
    info: {
      kurz: "Einarmiges Trizepsstrecken mit einem hohen Kabel, das quer vor dem Körper verläuft. Der Arm streckt sich seitlich nach außen, ein natürlicher Weg, der den seitlichen Trizepskopf betont.",
      ausfuehrung: [
        "Stell eine Kabelrolle auf Kopfhöhe oder etwas höher und greif das Kabelende mit der Hand auf der gegenüberliegenden Seite.",
        "Stell dich seitlich, sodass das Kabel quer vor deinem Körper verläuft.",
        "Der Oberarm ist etwa auf Brusthöhe vor dem Körper, die Hand ist nah an der gegenüberliegenden Schulter.",
        "Strecke den Ellbogen und führe die Hand seitlich nach außen, bis der Arm gestreckt ist.",
        "Halte die Streckung kurz und führe die Hand langsam zurück.",
        "Der Oberarm bleibt möglichst ruhig."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Oberarm bewegt sich stark: Dann übernimmt die Schulter.",
        "Oberkörper dreht mit: Hüfte ruhig halten.",
        "Zu schweres Gewicht: Leicht beginnen, die Bewegung ist ungewohnt."
      ],
      vorteile: [
        "Natürlicher Bewegungsweg, oft sehr gelenkfreundlich.",
        "Betont den seitlichen Kopf.",
        "Einseitig für Seitenausgleich."
      ],
      tipps: [
        "Auch beidarmig an zwei Kabeln möglich, die Arme kreuzen sich dann.",
        "12 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: mit Band. Schwerer: Pause in der Streckung.",
      sicherheit: "Bei Schulterbeschwerden die Kabelhöhe anpassen."
    }
  },
  {
    id: "trizepsmaschine",
    name: "Trizepsmaschine",
    auch: ["Machine Triceps Extension", "Triceps Extension Machine"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["trizepsmaschine"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Geführtes Trizepsstrecken an der Maschine mit Armauflage. Einfach zu lernen und sicher bis zur Erschöpfung.",
      ausfuehrung: [
        "Stell den Sitz so ein, dass die Ellbogen auf Höhe der Drehachse liegen.",
        "Lege die Oberarme auf das Polster und greif die Griffe.",
        "Strecke die Arme, bis sie fast ganz gestreckt sind.",
        "Spanne den Trizeps kurz an.",
        "Lass die Griffe langsam zurückkommen, ohne das Gewicht abzulegen.",
        "Bleib mit dem Rücken an der Lehne."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen nicht auf der Drehachse: Sitz neu einstellen.",
        "Aus dem Sitz drücken: Gewicht reduzieren.",
        "Ruckartiges Strecken: Gleichmäßig arbeiten."
      ],
      vorteile: [
        "Sehr sicher und einsteigerfreundlich.",
        "Gleichmäßige Belastung über den Bewegungsweg.",
        "Gut für Drop-Sets."
      ],
      tipps: [
        "Ideal am Ende des Trainings, wenn freie Übungen zu anstrengend werden.",
        "12 bis 15 Wiederholungen."
      ],
      varianten: "Leichter: weniger Gewicht. Schwerer: Drop-Set oder langsames Zurückführen.",
      sicherheit: "Bei Ellbogenbeschwerden den Bewegungsumfang anpassen."
    }
  },
  {
    id: "rolling_extension",
    name: "Rolling Triceps Extension",
    auch: ["Rolling Dumbbell Extension", "Rollendes Trizepsstrecken"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["latissimus"],
    geraete: [["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 2,
    info: {
      kurz: "Liegendes Trizepsstrecken mit Kurzhanteln, bei dem die Hanteln neben dem Kopf abgesetzt werden und die Oberarme beim Strecken nach vorn rollen. Ermöglicht schwerere Lasten als ein strenger Skull Crusher.",
      ausfuehrung: [
        "Leg dich auf eine Flachbank, zwei Kurzhanteln über der Brust im neutralen Griff.",
        "Beuge die Ellbogen und senke die Hanteln neben den Kopf, die Oberarme neigen sich dabei nach hinten.",
        "Unten liegen die Hanteln fast neben den Ohren, die Ellbogen zeigen nach oben hinten.",
        "Rolle die Oberarme zurück nach vorn und strecke gleichzeitig die Ellbogen, bis die Hanteln wieder über der Brust sind.",
        "Oben die Arme ganz strecken und den Trizeps anspannen.",
        "Wiederhole mit gleichmäßigem Tempo."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Zu viel Latissimus: Die Hauptarbeit bleibt das Strecken der Ellbogen.",
        "Hanteln fallen unkontrolliert nach hinten: Langsam absenken.",
        "Rücken hebt von der Bank ab: Rumpf fest."
      ],
      vorteile: [
        "Höhere Lasten als beim strengen Skull Crusher.",
        "Gute Dehnung des langen Kopfes.",
        "Für viele Ellbogen angenehm."
      ],
      tipps: [
        "8 bis 12 Wiederholungen mit soliden Gewichten.",
        "Gut als erste Trizepsübung."
      ],
      varianten: "Leichter: Skull Crusher mit Kurzhanteln. Schwerer: langsames Absenken.",
      sicherheit: "Bei Schulterbeschwerden in der Überkopfposition die Tiefe begrenzen."
    }
  },
  {
    id: "trizeps_band",
    name: "Trizepsdrücken mit Band",
    auch: ["Band Pushdown", "Resistance Band Triceps Pushdown"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 210,
    gelenke: { ellbogen: 1 },
    stufe: 1,
    info: {
      kurz: "Trizepsdrücken mit einem Band, das oben an einer Tür, Stange oder einem Haken befestigt ist. Die Heimvariante des Trizepsdrückens am Kabel.",
      ausfuehrung: [
        "Befestige das Band oben an einem stabilen Anker, etwa einem Türanker oder einer Klimmzugstange.",
        "Greif die Bandenden und stell dich so hin, dass das Band schon bei gebeugten Armen leicht gespannt ist.",
        "Zieh die Ellbogen an die Seiten, Oberkörper leicht nach vorn geneigt.",
        "Drück die Hände nach unten, bis die Arme ganz gestreckt sind.",
        "Unten kurz anspannen und langsam zurückführen.",
        "Die Oberarme bleiben ruhig."
      ],
      atmung: "Beim Herunterdrücken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Ellbogen wandern nach vorn: Oberarme an den Seiten halten.",
        "Band schnellt zurück: Kontrolliert nachgeben.",
        "Zu dünnes Band: Wenn 30 Wiederholungen leicht gehen, ein stärkeres Band wählen."
      ],
      vorteile: [
        "Überall machbar mit wenig Ausrüstung.",
        "Gelenkschonend.",
        "Höchster Widerstand in der Streckung."
      ],
      tipps: [
        "Weiter weg vom Anker stehen erhöht den Widerstand.",
        "15 bis 25 Wiederholungen bis kurz vor die Erschöpfung."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder einarmig.",
      sicherheit: "Anker und Band vor jedem Training prüfen."
    }
  },
  {
    id: "trizeps_ueberkopf_band",
    name: "Überkopf-Trizepsstrecken mit Band",
    auch: ["Band Overhead Triceps Extension"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    geraete: [["band"]],
    belastung: "gewicht",
    hoehe_cm: 230,
    gelenke: { ellbogen: 1, schulter: 1 },
    stufe: 1,
    info: {
      kurz: "Trizepsstrecken über Kopf mit einem Band, das unter dem hinteren Fuß oder an einem niedrigen Anker befestigt ist. Trainiert den langen Kopf in der Dehnung, auch zu Hause.",
      ausfuehrung: [
        "Stell dich in Schrittstellung auf das Band, der hintere Fuß fixiert es, oder befestige es an einem niedrigen Anker hinter dir.",
        "Greif die Bandenden und bring die Hände hinter den Kopf, die Ellbogen zeigen nach oben.",
        "Spann den Bauch an, die Rippen bleiben unten.",
        "Strecke die Arme nach oben, bis sie ganz gestreckt sind.",
        "Lass die Hände langsam zurück hinter den Kopf kommen.",
        "Die Oberarme bleiben nah am Kopf."
      ],
      atmung: "Beim Strecken ausatmen, beim Zurückführen einatmen.",
      fehler: [
        "Hohlkreuz: Bauch fest, Schrittstellung nutzen.",
        "Ellbogen gehen weit auseinander: Nah am Kopf halten.",
        "Band rutscht unter dem Fuß: Fest drauf stehen."
      ],
      vorteile: [
        "Dehnung des langen Kopfes ohne Hanteln.",
        "Sehr gelenkschonend.",
        "Ideal für Reisen und Heimtraining."
      ],
      tipps: [
        "Höhere Wiederholungen bis 20 sind ideal.",
        "Einarmig ist die Bewegung oft leichter zu kontrollieren."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: dickeres Band oder einarmig.",
      sicherheit: "Band vor dem Training prüfen. Bei Schulterbeschwerden über Kopf vorsichtig."
    }
  },
  {
    id: "bankdips",
    name: "Bankdips",
    auch: ["Bench Dips", "Trizeps-Dips an der Bank"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["brust", "schulter_vorn"],
    geraete: [["bank"], ["box"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { schulter: 2, handgelenk: 1, ellbogen: 1 },
    stufe: 1,
    schwerer: "dips_trizeps",
    info: {
      kurz: "Dips mit den Händen hinter dir auf einer Bank, die Füße stehen auf dem Boden. Eine einfache Körpergewichtsübung für den Trizeps, allerdings mit hoher Belastung für die Schultervorderseite.",
      ausfuehrung: [
        "Setz dich auf die Kante einer Bank und stütz die Hände schulterbreit neben der Hüfte auf, Finger zeigen nach vorn.",
        "Schieb das Gesäß nach vorn von der Bank, die Füße stehen vor dir auf dem Boden, Knie gebeugt.",
        "Beuge die Ellbogen und senke den Körper ab, bis die Oberarme etwa waagerecht sind.",
        "Der Rücken bleibt dicht an der Bank, die Ellbogen zeigen nach hinten.",
        "Drück dich über das Strecken der Arme wieder nach oben.",
        "Schultern bleiben tief und weg von den Ohren."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Zu tief absenken: Die Schulter wird stark nach vorn gedrückt, nur bis die Oberarme etwa waagerecht sind.",
        "Ellbogen zeigen nach außen: Nach hinten zeigen lassen.",
        "Rücken entfernt sich von der Bank: Dicht an der Kante bleiben.",
        "Schultern ziehen hoch: Brust offen und Schultern tief."
      ],
      vorteile: [
        "Ohne Geräte, nur eine Bank oder ein Stuhl nötig.",
        "Einfacher Einstieg in Trizepstraining mit Körpergewicht.",
        "Leicht über die Beinstellung anzupassen."
      ],
      tipps: [
        "Je weiter die Füße vorn und je gestreckter die Beine, desto schwerer.",
        "Langsames Tempo, vor allem im unteren Bereich."
      ],
      varianten: "Leichter: Füße nah an der Bank, Knie stark gebeugt. Schwerer: Beine gestreckt oder Füße erhöht.",
      sicherheit: "Bei Schulterbeschwerden an der Vorderseite auslassen und auf Trizepsdrücken oder Strecken ausweichen."
    }
  },
  {
    id: "dips_trizeps",
    name: "Trizeps-Dips an der Dip-Station",
    auch: ["Triceps Dips", "Upright Dips", "Parallel Bar Dips Triceps"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["brust", "schulter_vorn"],
    geraete: [["dip_station"]],
    belastung: "wiederholungen",
    hoehe_cm: 220,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 2,
    info: {
      kurz: "Dips am Barren mit aufrechtem Oberkörper und Ellbogen nah am Körper. So arbeitet vor allem der Trizeps, die Brust nur unterstützend.",
      ausfuehrung: [
        "Stütz dich mit gestreckten Armen auf die Holme, die Hände etwa schulterbreit.",
        "Halte den Oberkörper aufrecht, die Beine hängen gerade nach unten oder sind leicht gebeugt.",
        "Beuge die Ellbogen und senke dich ab, die Ellbogen zeigen nach hinten und bleiben nah am Körper.",
        "Geh so tief, bis die Oberarme etwa waagerecht sind, oder so weit es schmerzfrei geht.",
        "Drück dich durch das Strecken der Arme wieder nach oben, bis die Ellbogen gestreckt sind.",
        "Die Schultern bleiben tief und weg von den Ohren."
      ],
      atmung: "Beim Absenken einatmen, beim Hochdrücken ausatmen.",
      fehler: [
        "Oberkörper kippt weit nach vorn: Dann arbeitet mehr Brust, aufrecht bleiben.",
        "Ellbogen gehen nach außen: Nah am Körper führen.",
        "Zu tief: Die Schultervorderseite wird stark belastet, bis Oberarm waagerecht.",
        "Schultern ziehen hoch: Schultern aktiv nach unten drücken."
      ],
      vorteile: [
        "Kräftige Körpergewichtsübung mit hoher Last für den Trizeps.",
        "Trainiert auch Brust und vordere Schulter mit.",
        "Mit Zusatzgewicht gut steigerbar."
      ],
      tipps: [
        "Wenn du noch keine 5 sauberen Wiederholungen schaffst, beginne mit Bankdips oder unterstützten Dips.",
        "Langsames Absenken in drei Sekunden schont die Schultern."
      ],
      varianten: "Leichter: Bankdips oder mit Band unterstützt. Schwerer: mit Gewichtsgürtel oder Pause unten.",
      sicherheit: "Bei Schulterbeschwerden an der Vorderseite auslassen oder nur in kleinem Bewegungsumfang."
    }
  },
  {
    id: "sphinx_liegestuetz",
    name: "Sphinx-Liegestütz",
    auch: ["Sphinx Push-Up", "Tiger Bend Push-Up", "Forearm to Hand Push-Up"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["bauch", "schulter_vorn"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 130,
    gelenke: { ellbogen: 1, handgelenk: 1 },
    stufe: 2,
    schwerer: "trizeps_strecken_kg",
    info: {
      kurz: "Körpergewichtsübung für den Trizeps: Du drückst dich aus dem Unterarmstütz nur über das Strecken der Ellbogen in den hohen Stütz. Ein guter Weg zum Trizepstraining ohne Geräte.",
      ausfuehrung: [
        "Geh in den Unterarmstütz, die Unterarme liegen parallel, die Hände flach etwas vor den Schultern.",
        "Der Körper bildet eine Linie, Bauch und Gesäß sind angespannt.",
        "Drück die Handflächen in den Boden und strecke die Ellbogen, bis du im hohen Stütz auf den Händen bist.",
        "Die Ellbogen zeigen dabei nach hinten, die Hüfte bleibt in der Linie.",
        "Senke die Unterarme langsam wieder ab, bis sie den Boden berühren.",
        "Wiederhole ruhig und kontrolliert."
      ],
      atmung: "Beim Hochdrücken ausatmen, beim Absenken einatmen.",
      fehler: [
        "Hüfte geht hoch oder sackt durch: Rumpf fest anspannen.",
        "Ellbogen zeigen nach außen: Nach hinten führen.",
        "Unterarme knallen auf den Boden: Langsam absenken."
      ],
      vorteile: [
        "Trainiert den Trizeps ohne Geräte.",
        "Fordert zusätzlich die Rumpfstabilität.",
        "Leicht auf den Knien zu beginnen."
      ],
      tipps: [
        "Auf den Knien starten, bis 15 saubere Wiederholungen gelingen.",
        "Hände weiter vorn machen die Übung schwerer."
      ],
      varianten: "Leichter: auf den Knien oder an einer Wand. Schwerer: Trizepsstrecken mit Körpergewicht an einer Stange.",
      sicherheit: "Bei Handgelenkbeschwerden eine Matte oder Liegestützgriffe nutzen."
    }
  },
  {
    id: "trizeps_strecken_kg",
    name: "Trizepsstrecken mit Körpergewicht",
    auch: ["Bodyweight Triceps Extension", "Bodyweight Skull Crusher"],
    muster: "trizeps",
    art: "kraft",
    muskeln: ["trizeps"],
    sekundaer: ["bauch"],
    geraete: [["multipresse"], ["schlingentrainer"], ["bank"]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { ellbogen: 2 },
    stufe: 2,
    info: {
      kurz: "Ein Skull Crusher mit dem eigenen Körper: Du stützt dich in Schräglage auf eine Stange, Bankkante oder einen Schlingentrainer und bewegst dich nur über die Ellbogen. Der Winkel des Körpers bestimmt die Last.",
      ausfuehrung: [
        "Stell die Stange der Multipresse auf Hüfthöhe oder nutze eine feste Bankkante oder die Griffe des Schlingentrainers.",
        "Greif schulterbreit im Obergriff und geh mit gestreckten Armen in eine schräge Stützposition, der Körper ist eine Linie.",
        "Beuge die Ellbogen und senke die Stirn unter oder hinter die Stange, die Ellbogen zeigen nach vorn.",
        "Drück dich über das Strecken der Ellbogen zurück in die Ausgangsposition.",
        "Bauch und Gesäß bleiben die ganze Zeit angespannt.",
        "Bewege dich langsam, besonders im unteren Bereich."
      ],
      atmung: "Beim Absenken einatmen, beim Strecken ausatmen.",
      fehler: [
        "Hüfte sackt durch: Rumpf fest und Körper gerade.",
        "Ellbogen klappen nach außen: Sie zeigen nach vorn.",
        "Zu flacher Winkel am Anfang: Erst steiler beginnen."
      ],
      vorteile: [
        "Kräftiger Trizepsreiz ohne Hanteln.",
        "Trainiert den Rumpf mit.",
        "Fein über den Körperwinkel steuerbar."
      ],
      tipps: [
        "Je tiefer die Stange, desto schwerer.",
        "Im Schlingentrainer ist die Bewegung freier und fordert mehr Stabilität."
      ],
      varianten: "Leichter: höhere Stange oder Sphinx-Liegestütz. Schwerer: tiefere Stange, Füße erhöht.",
      sicherheit: "Bei Ellbogenbeschwerden in steilem Winkel beginnen."
    }
  },

  // ---------- Griffkraft und Unterarm ----------
  {
    id: "totes_haengen",
    name: "Totes Hängen",
    auch: ["Dead Hang", "Passive Hang", "Hängen an der Stange"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["latissimus", "schulter_hinten"],
    geraete: [["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { schulter: 1 },
    stufe: 1,
    golf: 2,
    schwerer: "handtuch_haengen",
    info: {
      kurz: "Einfaches Hängen an der Klimmzugstange mit gestreckten Armen. Trainiert die Griffausdauer und dehnt dabei Schultern und Latissimus sanft.",
      ausfuehrung: [
        "Greif die Stange schulterbreit im Obergriff, die Daumen umschließen die Stange.",
        "Heb die Füße vom Boden oder einer Erhöhung ab und lass dich mit gestreckten Armen hängen.",
        "Lass die Schultern locker nach oben gleiten, ohne dass es in den Gelenken schmerzt.",
        "Halte den Körper ruhig, die Beine hängen locker oder sind leicht nach vorn gebracht.",
        "Drück die Stange fest mit den Fingern, als wolltest du sie zusammenpressen.",
        "Halte die vorgegebene Zeit und steig dann kontrolliert ab, statt dich fallen zu lassen."
      ],
      atmung: "Ruhig und tief weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Körper schwingt: Beim Einsteigen ruhig von einer Erhöhung aus starten.",
        "Daumen liegt nicht um die Stange: Für die Griffkraft den Daumen mit einsetzen.",
        "Abspringen am Ende: Lieber mit den Füßen auf eine Erhöhung zurück.",
        "Schmerzen in der Schulter ignorieren: Dann aktiv hängen, also die Schultern leicht nach unten ziehen, oder abbrechen."
      ],
      vorteile: [
        "Verbessert die Griffausdauer, die beim Ziehen, Tragen und Kreuzheben limitiert.",
        "Dehnt Latissimus und Schultern sanft.",
        "Viele empfinden das Hängen als angenehm entlastend für die Wirbelsäule.",
        "Einfach und überall mit Stange machbar."
      ],
      tipps: [
        "Beginne mit 3 Sätzen à 20 bis 30 Sekunden und steigere auf 60 Sekunden und mehr.",
        "Kreide hilft, wenn der Griff wegen Schweiß nachlässt.",
        "Gut am Ende des Rückentrainings."
      ],
      varianten: "Leichter: Füße am Boden oder auf einer Box lassen und einen Teil des Gewichts abgeben. Schwerer: am Handtuch hängen, einarmig oder mit Gewichtsweste.",
      sicherheit: "Bei Schulterinstabilität oder Schulterschmerzen nur aktiv hängen oder auslassen.",
      golf: "Griffausdauer hilft, den Schläger über eine ganze Runde locker, aber sicher zu halten. Das Hängen dehnt zudem Latissimus und Schultern, die für einen weiten Rückschwung beweglich sein müssen."
    }
  },
  {
    id: "handtuch_haengen",
    name: "Hängen am Handtuch",
    auch: ["Towel Hang", "Towel Dead Hang"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["latissimus"],
    geraete: [["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { schulter: 1, handgelenk: 1 },
    stufe: 2,
    golf: 2,
    schwerer: "haengen_einarmig",
    info: {
      kurz: "Hängen an zwei Handtüchern, die über die Klimmzugstange gelegt sind. Der dicke, weiche Griff fordert die Finger und den Unterarm deutlich mehr als die Stange.",
      ausfuehrung: [
        "Leg zwei stabile Handtücher schulterbreit über die Klimmzugstange, sodass beide Enden herunterhängen.",
        "Greif jedes Handtuch mit einer Hand, die Enden zusammengefasst, im neutralen Griff.",
        "Heb die Füße ab und lass dich mit gestreckten Armen hängen.",
        "Drück die Handtücher fest zusammen, die Schultern bleiben leicht aktiv.",
        "Halte die vorgegebene Zeit und steig kontrolliert ab."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Handtuch rutscht über die Stange: Handtücher mittig auflegen und gleichmäßig belasten.",
        "Nur die Fingerspitzen halten: Mit der ganzen Hand fest umgreifen.",
        "Dünne Handtücher: Dicke Frotteetücher sind fester und schwerer zu greifen."
      ],
      vorteile: [
        "Starker Reiz für Fingerbeuger und Unterarme.",
        "Neutraler Griff entlastet die Schultern im Vergleich zum Obergriff.",
        "Bereitet auf Handtuch-Klimmzüge und Kletterbewegungen vor."
      ],
      tipps: [
        "Starte mit 10 bis 20 Sekunden.",
        "Mit einem Handtuch und einer Hand an der Stange gelingt der Einstieg leichter."
      ],
      varianten: "Leichter: Füße auf einer Box oder nur ein Handtuch, die andere Hand an der Stange. Schwerer: länger halten oder einarmig.",
      sicherheit: "Handtücher auf Risse prüfen. Bei Schulterbeschwerden nur kurz und aktiv hängen.",
      golf: "Ein kräftiger Griff im neutralen Winkel ähnelt dem Halten des Schlägers. Das hilft, den Griffdruck über die Runde konstant zu halten, ohne zu verkrampfen."
    }
  },
  {
    id: "haengen_einarmig",
    name: "Einarmiges Hängen",
    auch: ["One-Arm Dead Hang", "Single-Arm Hang"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["latissimus", "schulter_hinten", "bauch"],
    geraete: [["klimmzugstange"]],
    belastung: "zeit",
    hoehe_cm: 250,
    gelenke: { schulter: 2, ellbogen: 1 },
    stufe: 3,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Hängen an einer Hand an der Klimmzugstange. Eine anspruchsvolle Übung für Griffkraft und Schulterstabilität, wenn das beidarmige Hängen über eine Minute gut gelingt.",
      ausfuehrung: [
        "Greif die Stange mit beiden Händen und hänge dich ruhig hin.",
        "Löse eine Hand und lass sie locker hängen oder lege sie an die Hüfte.",
        "Zieh die Schulter der hängenden Seite leicht nach unten, sodass sie nicht ganz passiv ist.",
        "Halte den Körper möglichst ruhig, Bauch leicht angespannt, um das Drehen zu vermeiden.",
        "Halte die vorgegebene Zeit, greife dann mit der zweiten Hand nach und steig ab.",
        "Stell die Füße wieder ab und wechsle dann die Seite."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: [
        "Völlig passive Schulter: Leicht aktiv halten, um die Gelenkkapsel zu schonen.",
        "Starkes Drehen des Körpers: Bauch anspannen und freie Hand nah am Körper.",
        "Zu früh begonnen: Erst 60 Sekunden beidarmig sicher halten."
      ],
      vorteile: [
        "Sehr hoher Reiz für Griffkraft auf einer Seite.",
        "Trainiert Schulterstabilität und Rumpfkontrolle.",
        "Zeigt Seitenunterschiede deutlich."
      ],
      tipps: [
        "Anfangs mit den Fingern der freien Hand ein Handtuch halten, das an der Stange hängt, als kleine Hilfe.",
        "Kurze Sätze von 5 bis 15 Sekunden reichen am Anfang."
      ],
      varianten: "Leichter: Füße auf einer Box für Teilentlastung. Schwerer: länger halten oder am Handtuch.",
      sicherheit: "Nicht bei Schulterinstabilität oder Schulterschmerzen. Bei Ellbogenbeschwerden vorsichtig.",
      golf: "Einseitige Griff- und Schulterkraft hilft der Führungshand, den Schläger stabil zu halten. Das ist für die Kontrolle in Rück- und Durchschwung nützlich."
    }
  },
  {
    id: "farmers_walk",
    name: "Farmer's Walk",
    auch: ["Farmer's Walk", "Farmer's Carry", "Bauerngang"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm", "trapez"],
    sekundaer: ["bauch", "schraege_bauch", "gesaess", "oberer_ruecken"],
    geraete: [["kurzhantel"], ["kettlebell"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    golf: 2,
    sport: ["golf", "fussball"],
    info: {
      kurz: "Gehen mit schweren Gewichten in beiden Händen. Trainiert Griffkraft, Schultergürtel und Rumpfstabilität zugleich und hat einen hohen Alltagsnutzen.",
      ausfuehrung: [
        "Stell zwei schwere Kurzhanteln oder Kettlebells neben deine Füße.",
        "Geh mit geradem Rücken in die Hocke, greif die Gewichte mittig und steh wie beim Kreuzheben auf.",
        "Steh aufrecht, Schultern tief und leicht nach hinten, Blick geradeaus, Bauch fest.",
        "Geh mit kurzen, zügigen Schritten los, die Füße setzen etwa hüftbreit auf.",
        "Halte die Gewichte ruhig neben dem Körper, sie schwingen nicht.",
        "Am Ende der Strecke bleib stehen, geh kontrolliert in die Hocke und stell die Gewichte ab."
      ],
      atmung: "Gleichmäßig und flach weiteratmen, den Bauch dabei gespannt halten.",
      fehler: [
        "Schultern hängen nach vorn oder ziehen hoch: Schultern tief und breit halten.",
        "Oberkörper kippt zur Seite: Beide Seiten gleich schwer und aufrecht gehen.",
        "Zu lange Schritte: Kurze, schnelle Schritte geben mehr Stabilität.",
        "Rund gebeugter Rücken beim Aufheben: Aus den Beinen aufstehen."
      ],
      vorteile: [
        "Kräftigt Griff, Unterarme, Trapez und Rumpf gleichzeitig.",
        "Verbessert die Haltung unter Last.",
        "Sehr alltagsnah, etwa beim Tragen von Einkäufen oder Golfbag.",
        "Einfach zu lernen und gut steigerbar."
      ],
      tipps: [
        "Zu Beginn 20 bis 40 Meter oder 30 bis 45 Sekunden pro Durchgang.",
        "Ein Ziel kann sein, insgesamt dein Körpergewicht zu tragen, also je Hand die Hälfte.",
        "Ohne Platz zum Gehen kannst du auch auf der Stelle marschieren."
      ],
      varianten: "Leichter: kürzere Strecke oder leichtere Gewichte. Schwerer: längere Strecke, schwerere Gewichte oder dicke Griffe.",
      sicherheit: "Bei akuten Rückenbeschwerden leicht beginnen. Beim Aufheben und Abstellen auf einen geraden Rücken achten.",
      golf: "Fördert eine stabile, aufrechte Haltung und einen festen Griff. Der starke Rumpf hilft, die Wirbelsäule bei den hohen Rotationskräften des Schwungs zu schützen, und das Tragen des Bags fällt leichter."
    }
  },
  {
    id: "scheiben_pinch",
    name: "Scheiben-Pinch",
    auch: ["Plate Pinch", "Plate Pinch Hold", "Pinch Grip Hold"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["hantelscheibe"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Zwei Hantelscheiben mit den glatten Seiten nach außen zwischen Daumen und Fingern halten. Trainiert den Pinzettengriff und besonders die Daumenkraft.",
      ausfuehrung: [
        "Leg zwei gleich große Hantelscheiben mit den glatten Seiten nach außen aneinander.",
        "Greif sie von oben: Daumen auf der einen Seite, die vier Finger flach auf der anderen.",
        "Steh mit geradem Rücken auf und halte die Scheiben mit gestrecktem Arm neben dem Körper.",
        "Drück Daumen und Finger fest zusammen, das Handgelenk bleibt gerade.",
        "Halte die vorgegebene Zeit und setze die Scheiben kontrolliert ab.",
        "Wechsle die Hand oder halte mit beiden Händen je ein Paar."
      ],
      atmung: "Ruhig weiteratmen, nicht pressen.",
      fehler: [
        "Scheiben rutschen ab: Leichtere Scheiben wählen oder kürzer halten.",
        "Finger sind gekrümmt: Finger flach und lang lassen.",
        "Fallende Scheiben: Füße aus dem Weg und über einem Boden mit Matte arbeiten."
      ],
      vorteile: [
        "Kräftigt Daumen und Finger gezielt.",
        "Ergänzt das Hängen und Tragen, die eher den Faustgriff trainieren.",
        "Mit wenig Ausrüstung machbar."
      ],
      tipps: [
        "Beginne mit zwei 5-kg-Scheiben und halte 20 bis 30 Sekunden.",
        "Gummierte Scheiben sind leichter zu halten als glatte Stahlscheiben."
      ],
      varianten: "Leichter: kleinere Scheiben oder eine einzelne Scheibe. Schwerer: größere Scheiben oder Gehen mit den Scheiben.",
      sicherheit: "Bei Beschwerden am Daumensattelgelenk auslassen. Auf die Füße achten.",
      golf: "Der Daumen und die Fingerkraft stabilisieren den Schläger in der Hand. Ein kräftiger Pinzettengriff hilft, die Schlagfläche bei Bodenkontakt nicht verdrehen zu lassen."
    }
  },
  {
    id: "pinch_carry",
    name: "Scheiben-Pinch-Gehen",
    auch: ["Pinch Carry", "Plate Pinch Carry", "Plate Pinch Walk"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["trapez", "bauch"],
    geraete: [["hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    golf: 2,
    info: {
      kurz: "Gehen mit Hantelscheiben im Pinzettengriff in beiden Händen. Kombiniert die Daumenkraft des Scheiben-Pinch mit der Rumpfstabilität des Farmer's Walk.",
      ausfuehrung: [
        "Leg je zwei Scheiben mit den glatten Seiten nach außen an jede Seite.",
        "Greif die Scheiben von oben mit Daumen und flachen Fingern und steh mit geradem Rücken auf.",
        "Halte die Arme gestreckt neben dem Körper, Schultern tief, Bauch fest.",
        "Geh mit kurzen, ruhigen Schritten die vorgegebene Strecke.",
        "Lass die Scheiben nicht gegen die Beine schlagen.",
        "Am Ende kontrolliert in die Hocke gehen und absetzen."
      ],
      atmung: "Gleichmäßig weiteratmen.",
      fehler: [
        "Scheiben schwingen: Kürzere Schritte und ruhiger Oberkörper.",
        "Zu schwer: Wenn die Scheiben nach wenigen Metern rutschen, leichter wählen.",
        "Schultern ziehen hoch: Lang und tief halten."
      ],
      vorteile: [
        "Fordert den Daumen unter Bewegung.",
        "Verbindet Griff und Rumpfstabilität.",
        "Gute Abwechslung zum Farmer's Walk."
      ],
      tipps: [
        "Starte mit 15 bis 20 Metern.",
        "Wähle das Gewicht so, dass du die Strecke ohne Nachgreifen schaffst."
      ],
      varianten: "Leichter: nur eine Scheibe je Hand. Schwerer: größere Scheiben oder längere Strecke.",
      sicherheit: "Achte auf die Füße. Bei Daumenbeschwerden auslassen.",
      golf: "Trainiert die Daumen- und Fingerkraft beim Gehen und stärkt eine aufrechte Haltung. Beides unterstützt einen gleichbleibenden, kontrollierten Griff am Schläger."
    }
  },
  {
    id: "hantelkopf_pinch",
    name: "Hantelkopf-Pinch",
    auch: ["Dumbbell Head Pinch", "Hub Lift", "Block Weight Pinch"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Eine Kurzhantel wird nur am Kopf, also an der Scheibe oder dem Hantelkopf, mit Daumen und Fingern umfasst und gehalten. Ein klassisches Training aus dem Grifftraining für eine breite Pinzettengriffkraft.",
      ausfuehrung: [
        "Stell eine Kurzhantel senkrecht auf den Boden.",
        "Greif den oberen Kopf der Hantel von oben, Daumen auf einer Seite, Finger auf der anderen.",
        "Steh mit geradem Rücken auf, die Hantel hängt senkrecht neben dem Bein.",
        "Drück mit Daumen und Fingern fest zu, das Handgelenk bleibt gerade.",
        "Halte die vorgegebene Zeit und setze die Hantel kontrolliert ab.",
        "Wechsle danach die Hand und halte gleich lange."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Hantel zu schwer: Leichter beginnen, der Griff ist sehr fordernd.",
        "Handgelenk knickt: Gerade halten.",
        "Hantel fällt: Über freiem Boden arbeiten und Füße wegstellen."
      ],
      vorteile: [
        "Kräftigt Daumen und Finger in einem weiten Griff.",
        "Nur eine Kurzhantel nötig.",
        "Ergänzt den Scheiben-Pinch durch die runde Form."
      ],
      tipps: [
        "Sechseckige Gummihanteln eignen sich besonders gut.",
        "Mehrere kurze Sätze von 10 bis 20 Sekunden sind besser als ein langer."
      ],
      varianten: "Leichter: leichtere Hantel. Schwerer: schwerere Hantel oder kleine Hebebewegung vom Boden.",
      sicherheit: "Bei Daumenbeschwerden auslassen. Auf die Füße achten.",
      golf: "Eine starke Daumen- und Fingerkraft hilft, den Schläger mit wenig Druck sicher zu führen. Das kann Verkrampfung im Unterarm verringern."
    }
  },
  {
    id: "isometrischer_halt_griff",
    name: "Isometrischer Halt für die Griffkraft",
    auch: ["Isometrischer Halt (Griffkraft)", "Static Hold", "Barbell Hold", "Double Overhand Hold"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["trapez", "oberer_ruecken"],
    geraete: [["langhantel"], ["kurzhantel"], ["kettlebell"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { ruecken: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Schwere Langhantel oder Kurzhanteln im Doppel-Obergriff mit gestreckten Armen halten. Baut gezielt die Haltekraft auf, die beim Kreuzheben, Rudern und Tragen oft zuerst nachlässt.",
      ausfuehrung: [
        "Leg eine Langhantel im Rack auf Höhe der Oberschenkel ab oder stell schwere Kurzhanteln bereit.",
        "Greif im Obergriff schulterbreit, ohne Zughilfen, die Daumen umschließen die Stange.",
        "Heb das Gewicht an, steh aufrecht, Arme gestreckt, Schultern tief.",
        "Drück die Stange so fest, als wolltest du sie zerquetschen.",
        "Halte die vorgegebene Zeit, ohne dass sich die Stange in den Fingern nach vorn rollt.",
        "Setz das Gewicht kontrolliert wieder ab."
      ],
      atmung: "Flach und gleichmäßig weiteratmen, nicht lange pressen.",
      fehler: [
        "Wechselgriff verwenden: Der Doppel-Obergriff trainiert den Griff gezielt.",
        "Schultern hängen nach vorn: Schultern tief und leicht nach hinten.",
        "Stange rollt in die Fingerspitzen: Stange tief in der Hand fassen, nah an der Handfläche.",
        "Rücken rund beim Anheben: Aus dem Rack oder mit sauberem Kreuzheben starten."
      ],
      vorteile: [
        "Verbessert die maximale Haltekraft.",
        "Kräftigt Trapez und oberen Rücken unter Last.",
        "Einfach zu dosieren und zu steigern.",
        "Unterstützt schwere Zugübungen ohne Zughilfen."
      ],
      tipps: [
        "Halte 10 bis 30 Sekunden mit einem Gewicht, das am Ende wirklich schwer wird.",
        "Kreide verbessert den Halt, ersetzt aber nicht das Training.",
        "Aus dem Rack ersparst du dir das schwere Hochheben."
      ],
      varianten: "Leichter: Wechselgriff oder leichteres Gewicht. Schwerer: dicke Griffe, längere Zeit oder Halten mit einer Hand.",
      sicherheit: "Bei Rückenbeschwerden aus dem Rack starten und nicht vom Boden heben.",
      golf: "Eine hohe Grundkraft im Griff lässt dich den Schläger mit weniger relativer Anstrengung halten. So bleiben Unterarme und Handgelenke im Schwung lockerer und belastbarer."
    }
  },
  {
    id: "dicker_griff_halt",
    name: "Halten mit dickem Griff",
    auch: ["Fat Grip Hold", "Thick Grip Hold", "Fat Gripz Hold"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel"], ["langhantel"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    golf: 2,
    hinweis: "Dicke Griffaufsätze oder ein Handtuch um den Griff wickeln.",
    info: {
      kurz: "Halten von Kurzhanteln oder einer Langhantel mit verdicktem Griff, etwa mit Griffaufsätzen oder einem herumgewickelten Handtuch. Der dicke Griff fordert Daumen und Handöffnung deutlich stärker.",
      ausfuehrung: [
        "Leg dicke Griffaufsätze um die Hantelgriffe oder wickle ein Handtuch fest herum.",
        "Greif die Hanteln mit der ganzen Hand, der Daumen liegt so weit wie möglich um den Griff.",
        "Heb die Hanteln mit geradem Rücken an und steh aufrecht.",
        "Halte die Arme gestreckt neben dem Körper, Schultern tief.",
        "Drück den Griff fest und halte die vorgegebene Zeit.",
        "Setz die Hanteln kontrolliert ab."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Zu schweres Gewicht: Der dicke Griff halbiert oft die Haltelast, deutlich leichter beginnen.",
        "Nur mit den Fingern halten: Die ganze Hand umschließt den Griff.",
        "Handtuch rutscht: Fest wickeln und mit Klebeband sichern."
      ],
      vorteile: [
        "Kräftigt den Daumen und die Handöffnung.",
        "Erhöht den Reiz ohne mehr Gewicht.",
        "Lässt sich auf viele Übungen übertragen."
      ],
      tipps: [
        "Kann auch bei Curls und Rudern verwendet werden, um den Griff mitzutrainieren.",
        "20 bis 40 Sekunden pro Satz."
      ],
      varianten: "Leichter: normaler Griff oder dünneres Handtuch. Schwerer: dickerer Griff oder Gehen damit.",
      sicherheit: "Bei Daumen- oder Handgelenkbeschwerden vorsichtig beginnen.",
      golf: "Ein kräftiger Daumen und eine starke Handöffnung helfen, den Griff zu stabilisieren, ohne den Schläger zu fest zu umklammern."
    }
  },
  {
    id: "handgelenk_curl",
    name: "Handgelenkcurl",
    auch: ["Wrist Curl", "Wrist Flexion Curl", "Handgelenkbeugen mit Hantel"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["langhantel", "bank"], ["sz_stange", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Beugen des Handgelenks mit einer Hantel, die Unterarme liegen auf den Oberschenkeln oder einer Bank. Kräftigt die Handgelenkbeuger an der Innenseite des Unterarms.",
      ausfuehrung: [
        "Setz dich auf eine Bank und leg die Unterarme auf die Oberschenkel oder die Bank, die Handgelenke ragen über die Kante.",
        "Halte die Hantel im Untergriff, die Handflächen zeigen nach oben.",
        "Lass das Handgelenk langsam nach unten sinken, die Hantel darf dabei etwas in die Finger rollen.",
        "Rolle die Hantel zurück in die Hand und beuge das Handgelenk nach oben, so weit es geht.",
        "Oben kurz anspannen und dann langsam wieder absenken.",
        "Die Unterarme bleiben während des ganzen Satzes ruhig liegen."
      ],
      atmung: "Beim Hochbeugen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Unterarme heben sich: Fest auflegen, nur das Handgelenk bewegt sich.",
        "Zu schweres Gewicht und kleine Bewegungen: Vollen Weg mit leichterem Gewicht.",
        "Zu schnell: Langsam und kontrolliert, vor allem nach unten."
      ],
      vorteile: [
        "Kräftigt die Handgelenkbeuger und die Fingerbeuger.",
        "Verbessert die Griffkraft.",
        "Kräftige Beuger sind belastbarer, etwa bei Belastungen an der Innenseite des Ellbogens."
      ],
      tipps: [
        "Hohe Wiederholungen von 15 bis 25 sind ideal.",
        "Einarmig mit der Kurzhantel kannst du dich besser auf jede Seite konzentrieren."
      ],
      varianten: "Leichter: einarmig mit leichter Kurzhantel. Schwerer: Langhantel, langsames Absenken oder Handgelenkcurl hinter dem Rücken.",
      sicherheit: "Bei akuten Beschwerden an der Innenseite des Ellbogens nur schmerzfrei trainieren und abklären lassen.",
      golf: "Die Handgelenkbeuger arbeiten in der Treffzone und beim Auftreffen auf den Boden stark mit. Kräftige Beuger können helfen, die Innenseite des Ellbogens, den typischen Ort des Golferellbogens, besser zu belasten."
    }
  },
  {
    id: "handgelenk_curl_revers",
    name: "Reverser Handgelenkcurl",
    auch: ["Reverse Wrist Curl", "Wrist Extension Curl", "Handgelenkstrecken mit Hantel"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["sz_stange", "bank"], ["langhantel", "bank"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Strecken des Handgelenks gegen Widerstand, die Handrücken zeigen nach oben. Kräftigt die Handgelenkstrecker an der Außenseite des Unterarms, die oft schwächer sind als die Beuger.",
      ausfuehrung: [
        "Setz dich auf eine Bank und leg die Unterarme auf die Oberschenkel oder die Bank, die Hände ragen über die Kante.",
        "Halte die Hantel im Obergriff, die Handrücken zeigen nach oben.",
        "Lass das Handgelenk langsam nach unten sinken.",
        "Heb den Handrücken nach oben, bis das Handgelenk gestreckt ist.",
        "Oben kurz halten und langsam wieder absenken.",
        "Mit dem Band stellst du dich auf das Band und führst die gleiche Bewegung aus."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Zu schweres Gewicht: Die Strecker sind schwach, deutlich leichter als beim Handgelenkcurl.",
        "Unterarme heben sich: Nur das Handgelenk bewegt sich.",
        "Finger öffnen sich: Den Griff locker, aber geschlossen halten."
      ],
      vorteile: [
        "Kräftigt die Handgelenkstrecker gezielt.",
        "Schafft ein besseres Gleichgewicht zwischen Beugern und Streckern.",
        "Kräftige Strecker sind belastbarer, etwa bei Belastungen an der Außenseite des Ellbogens."
      ],
      tipps: [
        "Mit 2 bis 5 kg Kurzhantel beginnen.",
        "15 bis 25 Wiederholungen, langsam nach unten."
      ],
      varianten: "Leichter: Band oder sehr leichte Kurzhantel. Schwerer: langsames Absenken in vier Sekunden.",
      sicherheit: "Bei akuten Beschwerden an der Außenseite des Ellbogens nur schmerzfrei trainieren und abklären lassen.",
      golf: "Die Strecker des führenden Arms halten das Handgelenk im Treffmoment stabil. Kräftige Strecker können helfen, Überlastungen an der Außenseite des Ellbogens vorzubeugen."
    }
  },
  {
    id: "handgelenk_curl_hinter_ruecken",
    name: "Handgelenkcurl hinter dem Rücken",
    auch: ["Behind-the-Back Wrist Curl", "Behind the Back Barbell Wrist Curl"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["langhantel"], ["sz_stange"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 2,
    golf: 2,
    info: {
      kurz: "Handgelenkcurl im Stehen mit der Langhantel hinter dem Gesäß. Ermöglicht schwerere Lasten als im Sitzen und kombiniert Fingerkraft und Handgelenkbeugung.",
      ausfuehrung: [
        "Stell eine Langhantel im Rack auf Höhe des Gesäßes ab.",
        "Stell dich mit dem Rücken zur Stange und greif sie hinter dir schulterbreit, die Handflächen zeigen nach hinten.",
        "Heb die Stange aus dem Rack und steh aufrecht, die Arme gestreckt.",
        "Lass die Stange langsam in die Finger rollen.",
        "Roll sie zurück in die Hand und beuge die Handgelenke nach oben hinten.",
        "Oben kurz halten und dann wieder langsam absenken."
      ],
      atmung: "Beim Hochbeugen ausatmen, beim Absenken einatmen.",
      fehler: [
        "Arme beugen mit: Die Arme bleiben gestreckt.",
        "Zu kleiner Bewegungsumfang: Die Stange bis in die Fingerspitzen rollen lassen.",
        "Schultern ziehen nach vorn: Brust offen halten."
      ],
      vorteile: [
        "Schwerere Lasten für die Handgelenkbeuger möglich.",
        "Kräftigt Finger- und Handgelenkbeuger gemeinsam.",
        "Sehr gute Übertragung auf Griffkraft."
      ],
      tipps: [
        "12 bis 20 Wiederholungen mit langsamer Fingerrolle.",
        "Aus dem Rack zu starten spart Kraft und schont den Rücken."
      ],
      varianten: "Leichter: im Sitzen mit Kurzhantel. Schwerer: mehr Gewicht oder Pause oben.",
      sicherheit: "Bei Schulterbeschwerden in der Streckung nach hinten lieber im Sitzen trainieren.",
      golf: "Starke Hand- und Fingerbeuger helfen, den Schläger beim Bodenkontakt und im Rough sicher zu halten, und können die Belastung an der Innenseite des Ellbogens abfangen."
    }
  },
  {
    id: "fingercurl",
    name: "Fingercurl",
    auch: ["Finger Curl", "Barbell Finger Curl"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["langhantel", "bank"], ["kurzhantel", "bank"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Die Hantel rollt bis in die Fingerspitzen hinunter und wird mit den Fingern zurück in die Faust gerollt. Kräftigt die Fingerbeuger, die beim Greifen die Hauptarbeit leisten.",
      ausfuehrung: [
        "Setz dich auf eine Bank, Unterarme auf den Oberschenkeln, die Hände ragen über die Knie.",
        "Halte die Hantel im Untergriff.",
        "Öffne die Finger langsam, sodass die Hantel bis zu den Fingerspitzen hinunterrollt.",
        "Schließ die Finger wieder und rolle die Hantel zurück in die Faust.",
        "Am Ende kannst du das Handgelenk noch leicht nach oben beugen.",
        "Wiederhole langsam und kontrolliert."
      ],
      atmung: "Beim Einrollen ausatmen, beim Abrollen einatmen.",
      fehler: [
        "Hantel fällt aus den Fingern: Leichter beginnen und nur so weit abrollen, wie sicher.",
        "Unterarme heben sich: Fest auflegen.",
        "Zu schnell: Langsame Fingerbewegung."
      ],
      vorteile: [
        "Kräftigt die Fingerbeuger direkt.",
        "Verbessert die Griffkraft für Zugübungen.",
        "Gelenkschonend bei leichtem Gewicht."
      ],
      tipps: [
        "15 bis 25 Wiederholungen.",
        "Gut mit dem Handgelenkcurl kombinierbar."
      ],
      varianten: "Leichter: Kurzhantel einarmig. Schwerer: Langhantel oder Pause in der Faust.",
      sicherheit: "Bei Fingergelenkbeschwerden auslassen.",
      golf: "Die Fingerbeuger halten den Schläger, vor allem mit den letzten drei Fingern der Führungshand. Mehr Fingerkraft erlaubt einen sicheren, aber entspannten Griff."
    }
  },
  {
    id: "wrist_roller",
    name: "Wrist Roller",
    auch: ["Wrist Roller", "Unterarm-Roller", "Handgelenkroller"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["schulter_vorn"],
    geraete: [["stab", "hantelscheibe"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 1,
    golf: 2,
    hinweis: "Ein Seil am Stab befestigen, am Ende eine Scheibe einhängen.",
    info: {
      kurz: "Ein Gewicht an einem Seil wird durch Drehen eines Stabs aufgewickelt und wieder abgewickelt. Trainiert Handgelenkbeuger und Strecker abwechselnd und sorgt für viel Spannungszeit.",
      ausfuehrung: [
        "Befestige ein etwa 1 Meter langes Seil in der Mitte eines Stabs und hänge am Ende eine leichte Hantelscheibe ein.",
        "Stell dich aufrecht hin und halte den Stab im Obergriff schulterbreit mit gestreckten Armen vor dir auf Schulterhöhe.",
        "Dreh den Stab abwechselnd mit beiden Händen, sodass sich das Seil aufwickelt und die Scheibe steigt.",
        "Wenn die Scheibe oben ist, wickle das Seil langsam wieder ab, indem du in die andere Richtung drehst.",
        "Mach anschließend einen Durchgang im Untergriff oder mit umgekehrter Drehrichtung.",
        "Lass die Arme zwischendurch kurz sinken, wenn die Schultern müde werden."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Arme sinken ab: Mit gestreckten Armen auf Schulterhöhe arbeiten oder Arme leicht beugen.",
        "Scheibe fällt beim Abwickeln: Langsam und kontrolliert abwickeln.",
        "Schultern ziehen hoch: Schultern tief halten."
      ],
      vorteile: [
        "Trainiert Beuger und Strecker des Handgelenks.",
        "Hohe Spannungszeit für die Unterarme.",
        "Einfach selbst zu bauen."
      ],
      tipps: [
        "Beginne mit 2,5 bis 5 kg und zwei bis drei Durchgängen.",
        "Zum Aufwickeln in Richtung zu dir trainierst du eher die Strecker, weg von dir eher die Beuger."
      ],
      varianten: "Leichter: Arme gebeugt, leichtere Scheibe. Schwerer: schwerere Scheibe oder dickerer Stab.",
      sicherheit: "Bei Schulterbeschwerden die Arme gebeugt halten oder auf eine Stange stützen.",
      golf: "Die abwechselnde Arbeit von Beugern und Streckern kräftigt beide Seiten des Unterarms. Das unterstützt eine gleichmäßige Belastbarkeit von Handgelenken und Ellbogen über viele Schläge."
    }
  },
  {
    id: "radialduktion",
    name: "Radialduktion mit Kurzhantel",
    auch: ["Radial Deviation", "Hammer Lever Up", "Handgelenk-Heben zur Daumenseite"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 3,
    einseitig: true,
    hinweis: "Hantel nur an einem Ende beladen oder am Ende greifen.",
    info: {
      kurz: "Das Handgelenk wird mit einer einseitig beladenen Kurzhantel oder einem Hammer zur Daumenseite nach oben gekippt. Genau diese Bewegung macht das Handgelenk beim Abwinkeln des Schlägers im Rückschwung.",
      ausfuehrung: [
        "Belade eine Kurzhantel nur an einem Ende oder greif eine normale Kurzhantel an einem Ende, sodass das Gewicht nach vorn zeigt.",
        "Stell dich aufrecht hin, der Arm hängt gestreckt neben dem Körper, das Gewicht zeigt nach vorn.",
        "Kippe das Handgelenk zur Daumenseite nach oben, sodass das Gewicht vorn steigt. Der Arm bleibt ruhig.",
        "Halte oben kurz an und spüre die Spannung an der Daumenseite des Unterarms.",
        "Senke das Gewicht langsam wieder ab, bis das Handgelenk leicht zur Kleinfingerseite geneigt ist.",
        "Alle Wiederholungen mit einer Hand, dann wechseln."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Der ganze Arm bewegt sich mit: Nur das Handgelenk arbeitet.",
        "Zu langer Hebel zu früh: Erst nah am Gewicht greifen und dann weiter weg.",
        "Schnelle Bewegung: Langsam und kontrolliert."
      ],
      vorteile: [
        "Kräftigt die Muskeln, die das Handgelenk zur Daumenseite neigen.",
        "Stärkt die Handgelenkstabilität in einer selten trainierten Ebene.",
        "Sehr fein über die Griffposition dosierbar."
      ],
      tipps: [
        "Je weiter du vom Gewicht weg greifst, desto schwerer wird es.",
        "Ein Hammer oder ein Golfschläger mit Gewicht am Ende eignen sich ebenfalls.",
        "15 bis 20 langsame Wiederholungen."
      ],
      varianten: "Leichter: näher am Gewicht greifen. Schwerer: weiter weg greifen oder schwereres Ende.",
      sicherheit: "Bei Beschwerden an der Daumenseite des Handgelenks vorsichtig und schmerzfrei.",
      golf: "Radialduktion ist das Abwinkeln der Handgelenke im Rückschwung. Kraft und Kontrolle in dieser Bewegung helfen, den Winkel bis in den Abschwung zu halten und den Schläger stabil zu führen."
    }
  },
  {
    id: "ulnarduktion",
    name: "Ulnarduktion mit Kurzhantel",
    auch: ["Ulnar Deviation", "Hammer Lever Back", "Handgelenk-Heben zur Kleinfingerseite"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 3,
    einseitig: true,
    hinweis: "Hantel nur an einem Ende beladen oder am Ende greifen.",
    info: {
      kurz: "Das Handgelenk wird mit einer einseitig beladenen Kurzhantel, deren Gewicht hinter dir ist, zur Kleinfingerseite nach hinten oben gekippt. Diese Bewegung findet beim Lösen der Handgelenke im Treffmoment statt.",
      ausfuehrung: [
        "Belade eine Kurzhantel nur an einem Ende oder greif eine Kurzhantel am Ende, sodass das Gewicht nach hinten zeigt.",
        "Stell dich aufrecht hin, der Arm hängt gestreckt neben dem Körper.",
        "Kippe das Handgelenk zur Kleinfingerseite, sodass das Gewicht hinter dir nach oben steigt.",
        "Oben kurz halten, der Arm bleibt ruhig.",
        "Senke langsam ab, bis das Handgelenk leicht zur Daumenseite geneigt ist.",
        "Alle Wiederholungen mit einer Hand, dann wechseln."
      ],
      atmung: "Beim Anheben ausatmen, beim Absenken einatmen.",
      fehler: [
        "Arm schwingt mit: Nur das Handgelenk bewegt sich.",
        "Zu langer Hebel: Erst nah am Gewicht greifen.",
        "Zu kleiner Bewegungsumfang: Voller, kontrollierter Weg."
      ],
      vorteile: [
        "Kräftigt die Muskeln für die Neigung zur Kleinfingerseite.",
        "Verbessert die Stabilität des Handgelenks in allen Ebenen.",
        "Ergänzt die Radialduktion."
      ],
      tipps: [
        "Mit Radialduktion im Wechsel trainieren.",
        "Ein Hammer funktioniert genauso gut."
      ],
      varianten: "Leichter: näher am Gewicht greifen. Schwerer: weiter weg greifen.",
      sicherheit: "Bei Beschwerden an der Kleinfingerseite des Handgelenks vorsichtig und schmerzfrei.",
      golf: "Die Ulnarduktion ist das Lösen des Handgelenkwinkels im Abschwung. Kraft und Kontrolle in dieser Bewegung unterstützen ein gleichmäßiges Freigeben des Schlägers und eine stabile Schlagfläche."
    }
  },
  {
    id: "pronation_supination",
    name: "Pronation und Supination mit Kurzhantel",
    auch: ["Dumbbell Pronation Supination", "Forearm Rotation", "Hammer Rotation"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    sekundaer: ["bizeps"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"], ["band"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1, ellbogen: 1 },
    stufe: 1,
    golf: 3,
    einseitig: true,
    hinweis: "Hantel nur an einem Ende beladen oder am Ende greifen.",
    info: {
      kurz: "Der Unterarm wird mit einer einseitig beladenen Kurzhantel oder einem Hammer langsam nach innen und außen gedreht. Trainiert die Drehmuskeln des Unterarms, die beim Golf die Schlagfläche öffnen und schließen.",
      ausfuehrung: [
        "Setz dich auf eine Bank und leg den Unterarm auf den Oberschenkel, die Hand ragt über das Knie.",
        "Greif eine an einem Ende beladene Kurzhantel oder einen Hammer, das Gewicht zeigt nach oben.",
        "Dreh die Hand langsam nach innen, bis die Handfläche nach unten zeigt und das Gewicht zur Seite kippt.",
        "Dreh zurück in die Mitte und weiter nach außen, bis die Handfläche nach oben zeigt.",
        "Bleib in jeder Endstellung kurz stehen und dreh dann langsam zurück.",
        "Alle Wiederholungen mit einer Hand, dann wechseln. Mit Band drehst du gegen den Zug des Bandes."
      ],
      atmung: "Ruhig weiteratmen, bei jeder Drehung ausatmen.",
      fehler: [
        "Schnelles Schwingen: Die Drehung ist langsam und kontrolliert.",
        "Unterarm hebt sich: Fest auflegen.",
        "Zu langer Hebel: Erst nah am Gewicht greifen."
      ],
      vorteile: [
        "Kräftigt Pronatoren und Supinatoren gezielt.",
        "Verbessert die Kontrolle über die Unterarmdrehung.",
        "Wird häufig in der Vorbeugung von Ellbogenbeschwerden eingesetzt."
      ],
      tipps: [
        "Mit einem leichten Hammer oder einer Hantel von 1 bis 3 kg beginnen.",
        "Je weiter du vom Gewicht weg greifst, desto schwerer.",
        "Langsame Wiederholungen mit 2 bis 3 Sekunden je Richtung."
      ],
      varianten: "Leichter: kürzerer Hebel. Schwerer: längerer Hebel oder schwerer Hammer.",
      sicherheit: "Bei Schmerzen im Ellbogen oder Handgelenk nur im schmerzfreien Bereich drehen.",
      golf: "Pronation und Supination steuern das Öffnen und Schließen der Schlagfläche. Kraft und Kontrolle in dieser Drehung unterstützen ein gleichmäßiges Schließen der Schlagfläche im Treffmoment und können die Ellbogen entlasten."
    }
  },
  {
    id: "finger_strecken_band",
    name: "Fingerstrecken mit Gummiband",
    auch: ["Band Finger Extension", "Rubber Band Finger Extension", "Finger Extensions"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["band"], ["mini_band"]],
    belastung: "wiederholungen",
    hoehe_cm: 0,
    gelenke: {},
    stufe: 1,
    golf: 2,
    info: {
      kurz: "Die Finger werden gegen den Widerstand eines Gummibands auseinandergespreizt. Kräftigt die Fingerstrecker, die als Gegenspieler zu den Greifmuskeln oft vernachlässigt werden.",
      ausfuehrung: [
        "Leg ein kleines Gummiband oder ein dünnes Mini-Band um alle fünf Fingerspitzen.",
        "Halte die Hand entspannt vor dir, die Finger sind leicht gebeugt und zusammen.",
        "Spreize die Finger so weit wie möglich auseinander und strecke sie dabei.",
        "Halte die gespreizte Position eine Sekunde.",
        "Lass die Finger langsam wieder zusammenkommen.",
        "Mach alle Wiederholungen und wechsle dann die Hand oder trainiere beide Hände gleichzeitig."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen, nicht die Luft anhalten.",
      fehler: [
        "Band zu stark: Die Finger müssen sich vollständig öffnen können.",
        "Finger schnappen zurück: Langsam schließen.",
        "Nur Daumen und Zeigefinger arbeiten: Alle Finger gleichmäßig spreizen."
      ],
      vorteile: [
        "Kräftigt die Fingerstrecker als Ausgleich zum Greifen.",
        "Kann helfen, die Muskelbalance des Unterarms zu verbessern.",
        "Überall machbar, auch zwischendurch."
      ],
      tipps: [
        "Zwei bis drei Sätze à 20 bis 30 Wiederholungen nach dem Grifftraining.",
        "Zwei Gummibänder übereinander erhöhen den Widerstand."
      ],
      varianten: "Leichter: dünneres Band. Schwerer: zwei Bänder oder Pause in der Öffnung.",
      sicherheit: "Bei Fingergelenkbeschwerden mit sehr leichtem Widerstand beginnen.",
      golf: "Ausgeglichene Kraft zwischen Fingerbeugern und Streckern trägt zu belastbaren Unterarmen bei. Das ist für Golfer mit vielen Schlägen pro Woche ein sinnvoller Ausgleich."
    }
  },
  {
    id: "handtuch_auswringen",
    name: "Handtuch auswringen",
    auch: ["Towel Wring", "Towel Twist"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [[]],
    belastung: "wiederholungen",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    hinweis: "Ein Handtuch genügt.",
    info: {
      kurz: "Ein zusammengerolltes Handtuch wird mit beiden Händen kräftig in entgegengesetzte Richtungen verdreht. Eine einfache Übung für Griffkraft und Unterarmdrehung, die physiotherapeutisch häufig eingesetzt wird.",
      ausfuehrung: [
        "Roll ein Handtuch der Länge nach zusammen.",
        "Greif es mit beiden Händen im Obergriff, etwa schulterbreit vor dem Körper.",
        "Dreh die Hände kräftig in entgegengesetzte Richtungen, als würdest du ein nasses Tuch auswringen.",
        "Halte die maximale Drehung zwei bis drei Sekunden.",
        "Lös die Spannung und wringe in die andere Richtung.",
        "Wiederhole abwechselnd in beide Richtungen."
      ],
      atmung: "Beim Verdrehen ausatmen, beim Lösen einatmen.",
      fehler: [
        "Nur aus den Schultern arbeiten: Die Drehung kommt aus Unterarm und Handgelenk.",
        "Ruckartiges Drehen: Gleichmäßig Spannung aufbauen.",
        "Nur in eine Richtung: Beide Richtungen trainieren."
      ],
      vorteile: [
        "Trainiert Griff und Unterarmdrehung gemeinsam.",
        "Keine Ausrüstung außer einem Handtuch.",
        "Gut steuerbar über die Kraft, die du einsetzt."
      ],
      tipps: [
        "Ein nasses Handtuch macht die Übung schwerer und realistischer.",
        "10 bis 15 Drehungen je Richtung."
      ],
      varianten: "Leichter: dünnes Tuch und weniger Kraft. Schwerer: dickes oder nasses Handtuch.",
      sicherheit: "Bei akuten Ellbogen- oder Handgelenkbeschwerden nur sanft drehen.",
      golf: "Das gegengleiche Drehen ähnelt dem Zusammenspiel beider Hände am Schläger. Es kräftigt Griff und Unterarmdrehung, die für die Kontrolle der Schlagfläche wichtig sind."
    }
  },
  {
    id: "kb_bottoms_up_halt",
    name: "Kettlebell Bottoms-up Halten",
    auch: ["Bottoms-Up Kettlebell Hold", "Bottoms-Up Carry", "KB Bottoms-Up"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm", "rotatorenmanschette"],
    sekundaer: ["schulter_vorn"],
    geraete: [["kettlebell"]],
    belastung: "zeit",
    hoehe_cm: 200,
    gelenke: { handgelenk: 1, schulter: 1 },
    stufe: 2,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Eine Kettlebell wird umgedreht mit dem Boden nach oben gehalten. Sie kippt bei der kleinsten Unsauberkeit, deshalb trainiert die Übung Griff, Handgelenk und Schulterstabilität gleichzeitig.",
      ausfuehrung: [
        "Greif eine leichte Kettlebell am Griff und dreh sie so, dass der Kugelboden nach oben zeigt.",
        "Bring den Oberarm neben den Körper, der Ellbogen ist 90 Grad gebeugt, der Unterarm senkrecht.",
        "Drück den Griff fest, das Handgelenk ist gerade, die Kettlebell steht senkrecht über der Faust.",
        "Halte die Position ruhig, Schulter tief, Rumpf fest.",
        "Halte die vorgegebene Zeit oder geh langsam damit.",
        "Stell die Kettlebell kontrolliert ab und wechsle dann die Seite."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Zu schwere Kettlebell: Mit 4 bis 8 kg beginnen.",
        "Handgelenk knickt: Gerade halten, fester greifen.",
        "Schulter zieht hoch: Schulter tief halten."
      ],
      vorteile: [
        "Kräftigt Griff und Handgelenkstabilität.",
        "Aktiviert die Rotatorenmanschette und die Schulterstabilität.",
        "Fördert feine Kontrolle über Unterarm und Hand."
      ],
      tipps: [
        "Kann im Stehen, beim Gehen oder über Kopf ausgeführt werden.",
        "Weicher Untergrund und Platz zur Seite, falls die Kettlebell kippt."
      ],
      varianten: "Leichter: leichtere Kettlebell. Schwerer: Gehen, Bottoms-up-Drücken oder schwerere Kettlebell.",
      sicherheit: "Bei Schulterinstabilität vorsichtig und mit leichtem Gewicht beginnen.",
      golf: "Fördert eine stabile Hand- und Handgelenkposition und feine Kontrolle. Das kann helfen, den Schläger mit gleichmäßigem Griffdruck und stabiler Schlagfläche zu führen."
    }
  },
  {
    id: "handgelenk_strecken_exzentrisch",
    name: "Exzentrisches Handgelenkstrecken",
    auch: ["Eccentric Wrist Extension", "Tennis Elbow Eccentric", "Exzentrische Handgelenkstreckung"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Das Handgelenk wird mit Hilfe der anderen Hand in die Streckung gebracht und dann allein langsam mit der Kurzhantel abgesenkt. Ein in der Physiotherapie verbreitetes Programm für die Strecker des Unterarms.",
      ausfuehrung: [
        "Setz dich auf eine Bank und leg den Unterarm auf den Oberschenkel, die Hand ragt über das Knie, Handrücken nach oben.",
        "Nimm eine leichte Kurzhantel und heb das Handgelenk mit Hilfe der anderen Hand in die Streckung.",
        "Nimm die Hilfe weg und senke die Hantel in drei bis fünf Sekunden langsam ab.",
        "Unten hilft die andere Hand wieder beim Anheben.",
        "Wiederhole die vorgegebene Anzahl und wechsle bei Bedarf die Seite.",
        "Ein leichtes Ziehen ist in Ordnung, starker Schmerz nicht."
      ],
      atmung: "Beim langsamen Absenken ruhig ausatmen.",
      fehler: [
        "Selbst hochheben statt mit Hilfe: Die Übung zielt auf das Absenken.",
        "Zu schnelles Absenken: Mindestens drei Sekunden.",
        "Zu schweres Gewicht: Mit 1 bis 3 kg beginnen."
      ],
      vorteile: [
        "Kräftigt die Handgelenkstrecker in der nachgebenden Phase.",
        "Wird in Übungsprogrammen zur Belastbarkeit des Ellbogens eingesetzt.",
        "Einfach und mit wenig Ausrüstung durchführbar."
      ],
      tipps: [
        "Häufig empfohlen: 3 Sätze à 15 Wiederholungen.",
        "Mit dem Ellbogen gebeugt beginnen, später mit gestrecktem Arm."
      ],
      varianten: "Leichter: Ellbogen gebeugt, leichteres Gewicht. Schwerer: Arm gestreckt oder schwerere Hantel.",
      sicherheit: "Bei bestehenden Ellbogenbeschwerden zuvor ärztlich oder physiotherapeutisch abklären lassen und die Last abstimmen.",
      golf: "Kräftige Handgelenkstrecker helfen dem Führungsarm, Schläge und Bodenkontakt abzufangen. Das kann die Belastbarkeit an der Außenseite des Ellbogens unterstützen."
    }
  },
  {
    id: "handgelenk_beugen_exzentrisch",
    name: "Exzentrisches Handgelenkbeugen",
    auch: ["Eccentric Wrist Flexion", "Golfer's Elbow Eccentric", "Exzentrische Handgelenkbeugung"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["kurzhantel"]],
    belastung: "gewicht",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Das Handgelenk wird mit Hilfe der anderen Hand gebeugt und dann allein langsam mit der Kurzhantel abgesenkt, die Handfläche zeigt nach oben. Gegenstück zum exzentrischen Strecken für die Beuger an der Innenseite des Unterarms.",
      ausfuehrung: [
        "Setz dich auf eine Bank und leg den Unterarm auf den Oberschenkel, die Handfläche zeigt nach oben, die Hand ragt über das Knie.",
        "Nimm eine leichte Kurzhantel und beuge das Handgelenk mit Hilfe der anderen Hand nach oben.",
        "Nimm die Hilfe weg und senke die Hantel in drei bis fünf Sekunden langsam ab.",
        "Unten hilft die andere Hand wieder beim Hochbringen.",
        "Wiederhole die vorgegebene Anzahl und wechsle bei Bedarf die Seite.",
        "Bleib im schmerzarmen Bereich."
      ],
      atmung: "Beim langsamen Absenken ruhig ausatmen.",
      fehler: [
        "Selbst hochheben: Das Hochbringen übernimmt die andere Hand.",
        "Zu schnell: Mindestens drei Sekunden Absenken.",
        "Unterarm hebt sich: Fest auflegen."
      ],
      vorteile: [
        "Kräftigt die Handgelenkbeuger in der nachgebenden Phase.",
        "Wird in Übungsprogrammen für die Innenseite des Ellbogens eingesetzt.",
        "Wenig Ausrüstung nötig."
      ],
      tipps: [
        "3 Sätze à 15 Wiederholungen sind ein üblicher Rahmen.",
        "Die Last nur steigern, wenn die Übung gut vertragen wird."
      ],
      varianten: "Leichter: leichtere Hantel. Schwerer: schwerere Hantel oder Arm gestreckt.",
      sicherheit: "Bei bestehenden Ellbogenbeschwerden zuvor ärztlich oder physiotherapeutisch abklären lassen.",
      golf: "Beim Golferellbogen ist die Innenseite des Ellbogens betroffen, dort setzen die Handgelenkbeuger an. Gezieltes Kräftigen dieser Muskeln kann helfen, die Belastbarkeit bei vielen Schlägen zu verbessern."
    }
  },
  {
    id: "handgelenk_strecken_isometrisch",
    name: "Isometrisches Handgelenkstrecken",
    auch: ["Isometric Wrist Extension", "Wrist Extension Iso Hold"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Das Handgelenk wird in neutraler Stellung gegen eine Kurzhantel oder ein Band gehalten, ohne sich zu bewegen. Halteübungen werden oft eingesetzt, um die Strecker zu kräftigen, wenn Bewegung unangenehm ist.",
      ausfuehrung: [
        "Setz dich und leg den Unterarm auf den Oberschenkel oder eine Bank, Handrücken nach oben, die Hand ragt über die Kante.",
        "Halte eine Kurzhantel im Obergriff oder stell dich auf ein Band, das du im Obergriff hältst.",
        "Halte das Handgelenk gerade in Verlängerung des Unterarms.",
        "Halte diese Position ruhig für 30 bis 45 Sekunden.",
        "Leg die Hantel ab und mach eine kurze Pause.",
        "Wiederhole die vorgegebenen Sätze."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Handgelenk sinkt ab: Leichteres Gewicht.",
        "Unterarm hebt sich: Fest auflegen.",
        "Luft anhalten: Weiteratmen."
      ],
      vorteile: [
        "Kräftigt die Strecker ohne Bewegung im Gelenk.",
        "Gut dosierbar und einfach.",
        "Kann als Einstieg vor dynamischen Übungen dienen."
      ],
      tipps: [
        "Häufig genutzt: 4 bis 5 Durchgänge à 30 bis 45 Sekunden.",
        "Die Last so wählen, dass sie fordernd, aber gut aushaltbar ist."
      ],
      varianten: "Leichter: Band oder leichtere Hantel. Schwerer: schwerere Hantel oder Arm gestreckt.",
      sicherheit: "Bei bestehenden Beschwerden die Last mit einer Fachperson abstimmen.",
      golf: "Belastbare Handgelenkstrecker sind für Golfer wichtig, weil sie beim Halten des Schlägers und im Treffmoment ständig arbeiten. Halteübungen sind eine schonende Möglichkeit, diese Kraft aufzubauen."
    }
  },
  {
    id: "handgelenk_beugen_isometrisch",
    name: "Isometrisches Handgelenkbeugen",
    auch: ["Isometric Wrist Flexion", "Wrist Flexion Iso Hold"],
    muster: "griff",
    art: "kraft",
    muskeln: ["unterarm"],
    geraete: [["kurzhantel", "bank"], ["band"]],
    belastung: "zeit",
    hoehe_cm: 150,
    gelenke: { handgelenk: 1 },
    stufe: 1,
    golf: 2,
    einseitig: true,
    info: {
      kurz: "Das Handgelenk wird mit der Handfläche nach oben in neutraler Stellung gegen eine Kurzhantel oder ein Band gehalten. Schonende Kräftigung der Handgelenkbeuger ohne Bewegung.",
      ausfuehrung: [
        "Setz dich und leg den Unterarm auf den Oberschenkel oder eine Bank, Handfläche nach oben, die Hand ragt über die Kante.",
        "Halte eine Kurzhantel im Untergriff oder ein Band, auf dem du stehst.",
        "Halte das Handgelenk gerade in Verlängerung des Unterarms.",
        "Halte diese Position ruhig für 30 bis 45 Sekunden.",
        "Leg die Hantel ab und mach eine kurze Pause.",
        "Wiederhole die vorgegebenen Sätze."
      ],
      atmung: "Ruhig und gleichmäßig weiteratmen.",
      fehler: [
        "Handgelenk sinkt nach unten: Leichteres Gewicht.",
        "Finger öffnen sich: Griff geschlossen halten.",
        "Luft anhalten: Weiteratmen."
      ],
      vorteile: [
        "Kräftigt die Beuger ohne Bewegung im Gelenk.",
        "Gut dosierbar und schonend.",
        "Ergänzt das isometrische Strecken."
      ],
      tipps: [
        "4 bis 5 Durchgänge à 30 bis 45 Sekunden.",
        "Danach dynamische Handgelenkcurls ergänzen, wenn alles gut vertragen wird."
      ],
      varianten: "Leichter: Band oder leichtere Hantel. Schwerer: schwerere Hantel.",
      sicherheit: "Bei bestehenden Beschwerden an der Innenseite des Ellbogens die Last mit einer Fachperson abstimmen.",
      golf: "Die Beuger an der Innenseite des Unterarms sind beim Golferellbogen betroffen. Schonende Halteübungen können helfen, sie belastbarer für Training und Runden zu machen."
    }
  },
]
