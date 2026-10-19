// Fakten mit Quelle. Nur Zahlen aus seriösen Quellen (WHO, RKI, CDC, Eurostat, Fachzeitschriften).

export interface Fakt {
  text: string
  quelle: string
  url: string
  /** Wann der Fakt passt */
  thema: "allgemein" | "kraft" | "golf" | "mobilitaet" | "ausdauer" | "gewohnheit"
}

export const FAKTEN: Fakt[] = [
  { thema: "allgemein", text: "Weltweit bewegen sich 31 % der Erwachsenen zu wenig, etwa 1,8 Milliarden Menschen. Du gehörst nicht dazu.", quelle: "WHO 2024, Daten von 2022", url: "https://www.who.int/news/item/26-06-2024-nearly-1.8-billion-adults-at-risk-of-disease-from-not-doing-enough-physical-activity" },
  { thema: "kraft", text: "Nur etwa 36 % der Erwachsenen in Deutschland trainieren an mindestens zwei Tagen pro Woche ihre Muskeln. Mit zwei Krafteinheiten pro Woche gehörst du dazu.", quelle: "Robert Koch-Institut, GEDA 2019/2020-EHIS", url: "https://www.gbe.rki.de/DE/Themen/EinflussfaktorenAufDieGesundheit/GesundheitsUndRisikoverhalten/KoerperlicheAktivitaet/Bewegungsverhalten/bewegungsverhalten_node.html" },
  { thema: "kraft", text: "Nur rund 26 % der Erwachsenen in Deutschland erfüllen beide WHO-Empfehlungen: Ausdauer und Muskeltraining.", quelle: "Robert Koch-Institut, GEDA 2019/2020-EHIS", url: "https://www.gbe.rki.de/DE/Themen/EinflussfaktorenAufDieGesundheit/GesundheitsUndRisikoverhalten/KoerperlicheAktivitaet/Bewegungsverhalten/bewegungsverhalten_node.html" },
  { thema: "kraft", text: "In 28 europäischen Ländern trainierten nur 17 % der Erwachsenen ihre Muskeln an zwei oder mehr Tagen pro Woche.", quelle: "Bennie et al. 2020, PLOS ONE (EHIS 2013/14)", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0242220" },
  { thema: "kraft", text: "Schon 30 bis 60 Minuten Krafttraining pro Woche gingen in Studien mit einem um etwa 10 bis 20 % geringeren Sterberisiko einher.", quelle: "Momma et al. 2022, British Journal of Sports Medicine", url: "https://bjsm.bmj.com/content/56/13/755" },
  { thema: "allgemein", text: "45 % der Menschen in der EU treiben nie Sport. Jede Einheit, die du machst, ist also schon überdurchschnittlich.", quelle: "Eurobarometer Sport und körperliche Aktivität 2022", url: "https://isca.org/news-detail/985/new-eurobarometer-sport-physical-activity-shows-little-change" },
  { thema: "ausdauer", text: "Wer etwa 7.000 statt 2.000 Schritte am Tag geht, hatte in einer großen Auswertung ein um 47 % geringeres Sterberisiko.", quelle: "Ding et al. 2025, Lancet Public Health", url: "https://pubmed.ncbi.nlm.nih.gov/40713949/" },
  { thema: "golf", text: "Kraft- und Athletiktraining steigerte in Studien mit Golfern Schlägerkopfgeschwindigkeit, Ballgeschwindigkeit und Weite im Mittel um 4 bis 6 %.", quelle: "Ehlert 2020, Journal of Sports Sciences", url: "https://lida.sport-iat.de/ta/Record/4068865" },
  { thema: "golf", text: "Tourspieler schwingen den Driver im Schnitt mit etwa 115 mph, durchschnittliche Amateure (Handicap 14,5) mit etwa 94 mph. Ein Teil des Unterschieds ist Kraft und Schnellkraft.", quelle: "TrackMan, Durchschnittswerte 2023", url: "https://www.trackman.com/blog/introducing-updated-tour-averages" },
  { thema: "mobilitaet", text: "Wer seine Beweglichkeit regelmäßig misst, sieht Fortschritt, den man im Spiegel nicht bemerkt. Gleiche Tageszeit, gleicher Ablauf: dann sind die Werte vergleichbar.", quelle: "Perret et al. 2001, Archives of Physical Medicine and Rehabilitation", url: "https://physicaltherapyweb.com/fingertip-floor-ftf-test-simple-reliable-valid/" },
  { thema: "gewohnheit", text: "Jeden Tag 1 % besser ergibt nach einem Jahr rechnerisch das 37-Fache (1,01 hoch 365). Jeden Tag 1 % schlechter bleiben 3 %.", quelle: "James Clear, Atomic Habits", url: "https://jamesclear.com/continuous-improvement" },
]

/** 1-%-Methode: Wachstum, wenn jede Einheit 1 % besser macht. */
export function prozentMethode(einheiten: number): { faktor: number; prozent: number } {
  const faktor = Math.pow(1.01, einheiten)
  return { faktor, prozent: Math.round((faktor - 1) * 100) }
}

/** Fakt passend zum Tag, wechselt täglich. */
export function faktDesTages(datum: string, thema?: Fakt["thema"]): Fakt {
  const liste = thema ? FAKTEN.filter((f) => f.thema === thema || f.thema === "allgemein") : FAKTEN
  let h = 0
  for (const c of datum) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return liste[h % liste.length]
}
