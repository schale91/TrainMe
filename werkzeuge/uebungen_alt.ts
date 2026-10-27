// Übungsdatenbank. Jede Übung kennt ihr Bewegungsmuster, die nötigen Geräte (eine Gruppe muss komplett da sein),
// die Raumhöhe, die Belastung der Gelenke (1 mäßig, 2 hoch) und die Schwierigkeit. Daraus wählt die Planung aus.
// Höhen sind grobe Richtwerte für eine Person um 1,80 m (stehend 200 cm, Arme über Kopf 240 cm, Sprünge 250 cm).

import type { Uebung } from "../logik/typen"

const STEHEND = 200
const UEBER_KOPF = 240
const SPRUNG = 250
const BODEN = 130

export const UEBUNGEN: Uebung[] = [
  // ---------- Kniebeuge ----------
  { id: "kniebeuge_lh", name: "Kniebeuge mit Langhantel", muster: "kniebeuge", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["langhantel"]], belastung: "gewicht", hoehe_cm: 210, gelenke: { knie: 2, ruecken: 1, huefte: 1 }, stufe: 3 },
  { id: "goblet", name: "Goblet-Kniebeuge", muster: "kniebeuge", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["kurzhantel"], ["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { knie: 2 }, stufe: 1 },
  { id: "beinpresse", name: "Beinpresse", muster: "kniebeuge", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["maschine_beine"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { knie: 1 }, stufe: 1, hinweis: "Rücken bleibt am Polster, Knie nicht ganz durchstrecken." },
  { id: "box_kniebeuge", name: "Kniebeuge auf die Bank", muster: "kniebeuge", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["bank"], ["box"]], belastung: "wiederholungen", hoehe_cm: STEHEND, gelenke: { knie: 1 }, stufe: 1, schwerer: "kniebeuge_kg" },
  { id: "kniebeuge_kg", name: "Kniebeuge ohne Gewicht", muster: "kniebeuge", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: STEHEND, gelenke: { knie: 2 }, stufe: 1, schwerer: "bulgarisch_kg" },

  // ---------- Hüftstreckung ----------
  { id: "rdl_lh", name: "Rumänisches Kreuzheben mit Langhantel", muster: "hueftstreckung", art: "kraft", muskeln: ["beinbeuger", "gesaess", "ruecken_unten"], geraete: [["langhantel"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 2, huefte: 1 }, stufe: 2, sport: ["golf", "fussball", "laufen"] },
  { id: "rdl_kh", name: "Rumänisches Kreuzheben mit Kurzhanteln", muster: "hueftstreckung", art: "kraft", muskeln: ["beinbeuger", "gesaess", "ruecken_unten"], geraete: [["kurzhantel"], ["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 1, huefte: 1 }, stufe: 1, sport: ["golf", "fussball", "laufen"] },
  { id: "hip_thrust_lh", name: "Hip Thrust mit Langhantel", muster: "hueftstreckung", art: "kraft", muskeln: ["gesaess", "beinbeuger"], geraete: [["langhantel", "bank"]], belastung: "gewicht", hoehe_cm: BODEN, gelenke: { huefte: 1 }, stufe: 2 },
  { id: "hip_thrust_kh", name: "Hip Thrust mit Kurzhantel", muster: "hueftstreckung", art: "kraft", muskeln: ["gesaess", "beinbeuger"], geraete: [["kurzhantel", "bank"], ["kettlebell", "bank"]], belastung: "gewicht", hoehe_cm: BODEN, gelenke: { huefte: 1 }, stufe: 1 },
  { id: "glute_bridge", name: "Beckenheben", muster: "hueftstreckung", art: "kraft", muskeln: ["gesaess", "beinbeuger"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: {}, stufe: 1, schwerer: "glute_bridge_einbeinig" },
  { id: "glute_bridge_einbeinig", name: "Beckenheben einbeinig", muster: "hueftstreckung", art: "kraft", muskeln: ["gesaess", "beinbeuger"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: { huefte: 1 }, stufe: 2 },
  { id: "kb_swing", name: "Kettlebell-Swing", muster: "hueftstreckung", art: "kraft", muskeln: ["gesaess", "beinbeuger"], geraete: [["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 1 }, stufe: 2, sport: ["golf", "fussball"] },
  { id: "beinbeuger_maschine", name: "Beinbeuger an der Maschine", muster: "hamstring_praevention", art: "kraft", muskeln: ["beinbeuger"], geraete: [["maschine_beine"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { knie: 1 }, stufe: 1 },
  { id: "nordic", name: "Nordische Hamstring-Übung", muster: "hamstring_praevention", art: "kraft", muskeln: ["beinbeuger"], geraete: [["matte"], []], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: { knie: 1 }, stufe: 2, sport: ["fussball", "laufen"], hinweis: "Füße unter einem Sofa oder von jemandem halten lassen. Langsam nach vorn sinken lassen, mit den Händen abfangen." },
  { id: "beinbeuger_rutschen", name: "Beinbeuger-Rutschen auf dem Rücken", muster: "hamstring_praevention", art: "kraft", muskeln: ["beinbeuger"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: {}, stufe: 1, schwerer: "nordic", hinweis: "Fersen auf einem Handtuch, Becken oben, Fersen heranziehen." },

  // ---------- Einbeinig ----------
  { id: "bulgarisch_kh", name: "Bulgarische Split-Kniebeuge", muster: "einbeinig", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["kurzhantel", "bank"], ["kurzhantel", "box"], ["kettlebell", "bank"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { knie: 1, huefte: 1 }, stufe: 2, sport: ["golf", "fussball", "laufen"] },
  { id: "bulgarisch_kg", name: "Bulgarische Split-Kniebeuge ohne Gewicht", muster: "einbeinig", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["bank"], ["box"], []], belastung: "wiederholungen", hoehe_cm: STEHEND, gelenke: { knie: 1, huefte: 1 }, stufe: 1, hinweis: "Hinterer Fuß auf Bank, Stuhl oder Treppenstufe." },
  { id: "ausfallschritt_kh", name: "Ausfallschritt rückwärts mit Kurzhanteln", muster: "einbeinig", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["kurzhantel"], ["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { knie: 1 }, stufe: 1, sport: ["fussball", "laufen"] },
  { id: "step_up", name: "Step-up auf die Box", muster: "einbeinig", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["box", "kurzhantel"], ["bank", "kurzhantel"]], belastung: "gewicht", hoehe_cm: 230, gelenke: { knie: 1 }, stufe: 1, sport: ["laufen", "fussball"] },
  { id: "einbein_kreuzheben", name: "Einbeiniges Kreuzheben", muster: "einbeinig", art: "kraft", muskeln: ["beinbeuger", "gesaess"], geraete: [["kurzhantel"], ["kettlebell"], []], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 1 }, stufe: 2, sport: ["golf", "fussball", "laufen"], hinweis: "Becken bleibt gerade, wie eine Wippe nach vorn kippen." },

  // ---------- Drücken horizontal ----------
  { id: "bankdruecken_lh", name: "Bankdrücken mit Langhantel", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "trizeps", "schulter_vorn"], geraete: [["langhantel", "bank"]], belastung: "gewicht", hoehe_cm: BODEN, gelenke: { schulter: 2, ellbogen: 1 }, stufe: 2 },
  { id: "bankdruecken_kh", name: "Bankdrücken mit Kurzhanteln", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "trizeps", "schulter_vorn"], geraete: [["kurzhantel", "bank"]], belastung: "gewicht", hoehe_cm: BODEN, gelenke: { schulter: 1, ellbogen: 1 }, stufe: 1 },
  { id: "brustpresse", name: "Brustpresse an der Maschine", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "trizeps"], geraete: [["maschine_oberkoerper"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { schulter: 1 }, stufe: 1 },
  { id: "kabel_drueck_einarmig", name: "Einarmiges Drücken am Kabelzug stehend", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "schulter_vorn", "rumpf"], geraete: [["kabelzug"], ["band"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { schulter: 1 }, stufe: 1, sport: ["golf"] },
  { id: "liegestuetz_erhoeht", name: "Liegestütz mit Händen erhöht", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "trizeps"], geraete: [["bank"], ["wand"], []], belastung: "wiederholungen", hoehe_cm: STEHEND, gelenke: { handgelenk: 1 }, stufe: 1, schwerer: "liegestuetz" },
  { id: "liegestuetz", name: "Liegestütz", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "trizeps"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: { handgelenk: 1, schulter: 1 }, stufe: 1, schwerer: "liegestuetz_fuesse_hoch" },
  { id: "liegestuetz_fuesse_hoch", name: "Liegestütz mit Füßen erhöht", muster: "druecken_horizontal", art: "kraft", muskeln: ["brust", "schulter_vorn", "trizeps"], geraete: [["bank"], ["box"], []], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: { handgelenk: 1, schulter: 1 }, stufe: 2 },

  // ---------- Drücken vertikal ----------
  { id: "schulterdruecken_kh_sitzend", name: "Schulterdrücken mit Kurzhanteln im Sitzen", muster: "druecken_vertikal", art: "kraft", muskeln: ["schulter_vorn", "schulter_seite", "trizeps"], geraete: [["kurzhantel", "bank"]], belastung: "gewicht", hoehe_cm: 210, gelenke: { schulter: 2 }, stufe: 1 },
  { id: "schulterdruecken_lh", name: "Schulterdrücken stehend mit Langhantel", muster: "druecken_vertikal", art: "kraft", muskeln: ["schulter_vorn", "schulter_seite", "trizeps"], geraete: [["langhantel"]], belastung: "gewicht", hoehe_cm: UEBER_KOPF, gelenke: { schulter: 2, ruecken: 1 }, stufe: 2 },
  { id: "landmine", name: "Landmine-Drücken einarmig", muster: "druecken_vertikal", art: "kraft", muskeln: ["schulter_vorn", "brust", "rumpf"], geraete: [["langhantel"]], belastung: "gewicht", hoehe_cm: 220, gelenke: { schulter: 1 }, stufe: 1, sport: ["golf"], hinweis: "Stangenende in eine Ecke stellen. Schonender für die Schulter als Drücken über Kopf." },
  { id: "schulterpresse", name: "Schulterpresse an der Maschine", muster: "druecken_vertikal", art: "kraft", muskeln: ["schulter_vorn", "trizeps"], geraete: [["maschine_oberkoerper"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { schulter: 2 }, stufe: 1 },
  { id: "pike_liegestuetz", name: "Pike-Liegestütz", muster: "druecken_vertikal", art: "kraft", muskeln: ["schulter_vorn", "trizeps"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: { schulter: 2, handgelenk: 1 }, stufe: 2 },
  { id: "seitheben", name: "Seitheben mit Kurzhanteln", muster: "druecken_vertikal", art: "kraft", muskeln: ["schulter_seite"], geraete: [["kurzhantel"], ["band"], ["kabelzug"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { schulter: 1 }, stufe: 1 },

  // ---------- Ziehen horizontal ----------
  { id: "rudern_kh", name: "Einarmiges Rudern mit Kurzhantel", muster: "ziehen_horizontal", art: "kraft", muskeln: ["ruecken_oben", "latissimus", "bizeps"], geraete: [["kurzhantel", "bank"], ["kurzhantel"], ["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },
  { id: "rudern_lh", name: "Vorgebeugtes Rudern mit Langhantel", muster: "ziehen_horizontal", art: "kraft", muskeln: ["ruecken_oben", "latissimus", "bizeps"], geraete: [["langhantel"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 2 }, stufe: 2 },
  { id: "rudern_kabel", name: "Rudern am Kabelzug sitzend", muster: "ziehen_horizontal", art: "kraft", muskeln: ["ruecken_oben", "latissimus", "bizeps"], geraete: [["kabelzug"], ["maschine_oberkoerper"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },
  { id: "rudern_band", name: "Rudern mit Widerstandsband", muster: "ziehen_horizontal", art: "kraft", muskeln: ["ruecken_oben", "bizeps"], geraete: [["band"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },
  { id: "rudern_tuer", name: "Rudern mit Handtuch an der Tür", muster: "ziehen_horizontal", art: "kraft", muskeln: ["ruecken_oben", "bizeps"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: STEHEND, gelenke: {}, stufe: 1, hinweis: "Handtuch um beide Türklinken, Tür muss fest geschlossen sein." },

  // ---------- Ziehen vertikal ----------
  { id: "klimmzug", name: "Klimmzug", muster: "ziehen_vertikal", art: "kraft", muskeln: ["latissimus", "bizeps", "ruecken_oben"], geraete: [["klimmzugstange"]], belastung: "wiederholungen", hoehe_cm: 230, gelenke: { schulter: 1, ellbogen: 1 }, stufe: 2 },
  { id: "klimmzug_band", name: "Klimmzug mit Bandunterstützung", muster: "ziehen_vertikal", art: "kraft", muskeln: ["latissimus", "bizeps"], geraete: [["klimmzugstange", "band"]], belastung: "wiederholungen", hoehe_cm: 230, gelenke: { schulter: 1 }, stufe: 1, schwerer: "klimmzug" },
  { id: "latzug", name: "Latzug", muster: "ziehen_vertikal", art: "kraft", muskeln: ["latissimus", "bizeps"], geraete: [["kabelzug"], ["maschine_oberkoerper"]], belastung: "gewicht", hoehe_cm: 220, gelenke: { schulter: 1 }, stufe: 1 },
  { id: "latzug_band", name: "Latzug mit Band", muster: "ziehen_vertikal", art: "kraft", muskeln: ["latissimus"], geraete: [["band"]], belastung: "gewicht", hoehe_cm: 210, gelenke: {}, stufe: 1, hinweis: "Band oben an Tür oder Haken befestigen." },

  // ---------- Rotation und Anti-Rotation ----------
  { id: "holzhacker_kabel", name: "Holzhacker am Kabelzug", muster: "rotation", art: "kraft", muskeln: ["rumpf"], geraete: [["kabelzug"]], belastung: "gewicht", hoehe_cm: 220, gelenke: { ruecken: 1 }, stufe: 1, sport: ["golf", "fussball"] },
  { id: "holzhacker_band", name: "Holzhacker mit Band", muster: "rotation", art: "kraft", muskeln: ["rumpf"], geraete: [["band"]], belastung: "gewicht", hoehe_cm: 220, gelenke: { ruecken: 1 }, stufe: 1, sport: ["golf"] },
  { id: "rotation_kh", name: "Stehende Rotation mit Kurzhantel", muster: "rotation", art: "kraft", muskeln: ["rumpf"], geraete: [["kurzhantel"], ["kettlebell"], ["medizinball"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 1 }, stufe: 1, sport: ["golf"] },
  { id: "pallof_kabel", name: "Pallof Press am Kabelzug", muster: "anti_rotation", art: "kraft", muskeln: ["rumpf"], geraete: [["kabelzug"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1, sport: ["golf", "fussball"] },
  { id: "pallof_band", name: "Pallof Press mit Band", muster: "anti_rotation", art: "kraft", muskeln: ["rumpf"], geraete: [["band"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1, sport: ["golf", "fussball"] },
  { id: "seitstuetz", name: "Seitstütz", muster: "anti_rotation", art: "kraft", muskeln: ["rumpf"], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: { schulter: 1 }, stufe: 1 },
  { id: "koffer_tragen", name: "Einarmiges Tragen (Koffer)", muster: "anti_rotation", art: "kraft", muskeln: ["rumpf", "unterarme"], geraete: [["kurzhantel"], ["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },

  // ---------- Rumpf ----------
  { id: "unterarmstuetz", name: "Unterarmstütz", muster: "rumpf", art: "kraft", muskeln: ["rumpf"], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: {}, stufe: 1 },
  { id: "dead_bug", name: "Dead Bug", muster: "rumpf", art: "kraft", muskeln: ["rumpf"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: {}, stufe: 1 },
  { id: "bird_dog", name: "Vierfüßlerstand diagonal (Bird Dog)", muster: "rumpf", art: "kraft", muskeln: ["rumpf", "ruecken_unten"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: {}, stufe: 1 },
  { id: "knieheben_haengend", name: "Knieheben im Hang", muster: "rumpf", art: "kraft", muskeln: ["rumpf"], geraete: [["klimmzugstange"]], belastung: "wiederholungen", hoehe_cm: 230, gelenke: { schulter: 1 }, stufe: 2 },

  // ---------- Wade, Adduktoren ----------
  { id: "wadenheben", name: "Wadenheben einbeinig", muster: "wade", art: "kraft", muskeln: ["waden"], geraete: [["kurzhantel"], []], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { sprunggelenk: 1 }, stufe: 1, sport: ["laufen", "fussball"], hinweis: "Auf einer Stufe, ganz nach unten und ganz nach oben." },
  { id: "wadenheben_maschine", name: "Wadenheben an der Maschine", muster: "wade", art: "kraft", muskeln: ["waden"], geraete: [["maschine_beine"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { sprunggelenk: 1 }, stufe: 1 },
  { id: "copenhagen", name: "Copenhagen-Seitstütz (Adduktoren)", muster: "adduktoren", art: "kraft", muskeln: ["adduktoren"], geraete: [["bank"], ["box"]], belastung: "zeit", hoehe_cm: BODEN, gelenke: { huefte: 1 }, stufe: 2, sport: ["fussball"], hinweis: "Einsteiger mit dem Knie auf der Bank, später mit dem Fuß." },
  { id: "adduktoren_maschine", name: "Adduktoren an der Maschine", muster: "adduktoren", art: "kraft", muskeln: ["adduktoren"], geraete: [["maschine_beine"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },
  { id: "adduktoren_band", name: "Adduktoren mit Band", muster: "adduktoren", art: "kraft", muskeln: ["adduktoren"], geraete: [["band"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },

  // ---------- Arme ----------
  { id: "bizeps_kh", name: "Bizepscurls mit Kurzhanteln", muster: "arme", art: "kraft", muskeln: ["bizeps"], geraete: [["kurzhantel"], ["kabelzug"], ["band"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ellbogen: 1 }, stufe: 1 },
  { id: "hammercurl", name: "Hammercurls", muster: "arme", art: "kraft", muskeln: ["bizeps", "unterarme"], geraete: [["kurzhantel"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ellbogen: 1 }, stufe: 1 },
  { id: "trizeps_kabel", name: "Trizepsdrücken am Kabelzug", muster: "arme", art: "kraft", muskeln: ["trizeps"], geraete: [["kabelzug"], ["band"]], belastung: "gewicht", hoehe_cm: 210, gelenke: { ellbogen: 1 }, stufe: 1 },
  { id: "trizeps_ueberkopf", name: "Trizepsstrecken über Kopf mit Kurzhantel", muster: "arme", art: "kraft", muskeln: ["trizeps"], geraete: [["kurzhantel"]], belastung: "gewicht", hoehe_cm: 230, gelenke: { ellbogen: 1, schulter: 1 }, stufe: 1 },

  // ---------- Schulter gesund, Griff ----------
  { id: "face_pull", name: "Face Pull", muster: "schulter_gesund", art: "kraft", muskeln: ["schulter_hinten", "ruecken_oben"], geraete: [["kabelzug"], ["band"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1, sport: ["golf"] },
  { id: "aussenrotation", name: "Außenrotation mit Band", muster: "schulter_gesund", art: "kraft", muskeln: ["rotatorenmanschette"], geraete: [["band"], ["kabelzug"], ["kurzhantel"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1, sport: ["golf"] },
  { id: "ytw", name: "Y-T-W im Liegen", muster: "schulter_gesund", art: "kraft", muskeln: ["schulter_hinten", "ruecken_oben"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: BODEN, gelenke: {}, stufe: 1 },
  { id: "farmers_walk", name: "Farmer's Walk", muster: "griff", art: "kraft", muskeln: ["unterarme", "rumpf", "trapez"], geraete: [["kurzhantel"], ["kettlebell"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: {}, stufe: 1, sport: ["golf"] },
  { id: "totes_haengen", name: "Totes Hängen", muster: "griff", art: "kraft", muskeln: ["unterarme"], geraete: [["klimmzugstange"]], belastung: "zeit", hoehe_cm: 230, gelenke: { schulter: 1 }, stufe: 1 },

  // ---------- Schnellkraft ----------
  { id: "mb_rotationswurf", name: "Medizinball-Rotationswurf an die Wand", muster: "schnellkraft_wurf", art: "kraft", muskeln: ["rumpf", "gesaess"], geraete: [["medizinball", "wand"], ["medizinball", "draussen"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { ruecken: 1 }, stufe: 1, sport: ["golf", "fussball"], hinweis: "Bewegung aus der Hüfte starten, wie beim Schwung." },
  { id: "mb_brustwurf", name: "Medizinball-Brustwurf", muster: "schnellkraft_wurf", art: "kraft", muskeln: ["brust", "trizeps"], geraete: [["medizinball", "wand"], ["medizinball", "draussen"]], belastung: "gewicht", hoehe_cm: STEHEND, gelenke: { handgelenk: 1 }, stufe: 1 },
  { id: "mb_slam", name: "Medizinball-Slam", muster: "schnellkraft_wurf", art: "kraft", muskeln: ["latissimus", "rumpf"], geraete: [["medizinball"]], belastung: "gewicht", hoehe_cm: SPRUNG, gelenke: { schulter: 1 }, stufe: 1, sport: ["golf", "fussball"] },
  { id: "mb_ueberkopf_rueckwaerts", name: "Medizinball über Kopf rückwärts werfen", muster: "schnellkraft_wurf", art: "kraft", muskeln: ["gesaess", "ruecken_unten"], geraete: [["medizinball", "draussen"]], belastung: "gewicht", hoehe_cm: 400, gelenke: { ruecken: 1 }, stufe: 2 },
  { id: "strecksprung", name: "Strecksprung", muster: "schnellkraft_sprung", art: "kraft", muskeln: ["quadrizeps", "waden", "gesaess"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: SPRUNG, gelenke: { knie: 1, sprunggelenk: 1 }, stufe: 1 },
  { id: "box_sprung", name: "Sprung auf die Box", muster: "schnellkraft_sprung", art: "kraft", muskeln: ["quadrizeps", "gesaess"], geraete: [["box"]], belastung: "wiederholungen", hoehe_cm: 260, gelenke: { knie: 1 }, stufe: 2, hinweis: "Hochspringen, herunter steigen." },
  { id: "weitsprung", name: "Weitsprung aus dem Stand", muster: "schnellkraft_sprung", art: "kraft", muskeln: ["gesaess", "quadrizeps"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: 230, gelenke: { knie: 1, sprunggelenk: 1 }, stufe: 1, sport: ["fussball"] },
  { id: "skater", name: "Seitliche Sprünge (Skater)", muster: "schnellkraft_sprung", art: "kraft", muskeln: ["gesaess", "adduktoren"], geraete: [[]], belastung: "wiederholungen", hoehe_cm: 220, gelenke: { knie: 1, sprunggelenk: 1 }, stufe: 1, sport: ["fussball", "golf"] },
  { id: "sprint", name: "Sprints 20 bis 30 m", muster: "sprint", art: "kraft", muskeln: ["beinbeuger", "gesaess"], geraete: [["draussen"]], belastung: "distanz", hoehe_cm: 0, gelenke: { knie: 1, sprunggelenk: 1 }, stufe: 2, sport: ["fussball"], hinweis: "Volle Pause zwischen den Läufen, nur frisch sprinten." },
  { id: "richtungswechsel", name: "Richtungswechsel-Läufe", muster: "sprint", art: "kraft", muskeln: ["beinbeuger", "adduktoren"], geraete: [["draussen"]], belastung: "distanz", hoehe_cm: 0, gelenke: { knie: 2, sprunggelenk: 1 }, stufe: 2, sport: ["fussball"] },

  // ---------- Mobilität ----------
  { id: "huefte_9090", name: "Hüftrotation 90/90", muster: "mobilitaet_huefte", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: {}, stufe: 1, sport: ["golf"] },
  { id: "hueftbeuger_dehnen", name: "Hüftbeuger dehnen im Kniestand", muster: "mobilitaet_huefte", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: { knie: 1 }, stufe: 1 },
  { id: "taube", name: "Taube (Gesäß dehnen)", muster: "mobilitaet_huefte", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: { knie: 1 }, stufe: 1 },
  { id: "open_book", name: "Brustwirbelsäule öffnen in Seitlage", muster: "mobilitaet_bws", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: {}, stufe: 1, sport: ["golf"] },
  { id: "katze_kuh", name: "Katze und Kuh", muster: "mobilitaet_bws", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: {}, stufe: 1 },
  { id: "bws_rotation_kniend", name: "Rotation im Vierfüßlerstand", muster: "mobilitaet_bws", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: {}, stufe: 1, sport: ["golf"] },
  { id: "wandengel", name: "Wandengel", muster: "mobilitaet_schulter", art: "mobilitaet", muskeln: [], geraete: [["wand"], []], belastung: "zeit", hoehe_cm: 210, gelenke: {}, stufe: 1 },
  { id: "schulterpassen", name: "Schulterpassen mit Band", muster: "mobilitaet_schulter", art: "mobilitaet", muskeln: [], geraete: [["band"]], belastung: "zeit", hoehe_cm: 230, gelenke: { schulter: 1 }, stufe: 1 },
  { id: "brust_dehnen", name: "Brust dehnen am Türrahmen", muster: "mobilitaet_schulter", art: "mobilitaet", muskeln: [], geraete: [["wand"], []], belastung: "zeit", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },
  { id: "beinrueckseite_dehnen", name: "Beinrückseite dehnen", muster: "mobilitaet_beine", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: BODEN, gelenke: {}, stufe: 1 },
  { id: "waden_dehnen", name: "Waden dehnen an der Wand", muster: "mobilitaet_beine", art: "mobilitaet", muskeln: [], geraete: [["wand"], []], belastung: "zeit", hoehe_cm: STEHEND, gelenke: {}, stufe: 1 },
  { id: "oberschenkel_vorn_dehnen", name: "Vorderer Oberschenkel dehnen", muster: "mobilitaet_beine", art: "mobilitaet", muskeln: [], geraete: [[]], belastung: "zeit", hoehe_cm: STEHEND, gelenke: { knie: 1 }, stufe: 1 },

  // ---------- Ausdauer ----------
  { id: "lauf_locker", name: "Lockerer Dauerlauf", muster: "ausdauer_ruhig", art: "ausdauer", muskeln: [], geraete: [["draussen"], ["laufband"]], belastung: "zeit", hoehe_cm: 0, gelenke: { knie: 1, sprunggelenk: 1 }, stufe: 1, sport: ["laufen", "fussball"] },
  { id: "rad_locker", name: "Lockeres Radfahren", muster: "ausdauer_ruhig", art: "ausdauer", muskeln: [], geraete: [["fahrrad"]], belastung: "zeit", hoehe_cm: 0, gelenke: {}, stufe: 1 },
  { id: "rudern_locker", name: "Lockeres Rudern", muster: "ausdauer_ruhig", art: "ausdauer", muskeln: [], geraete: [["rudergeraet"]], belastung: "zeit", hoehe_cm: 0, gelenke: { ruecken: 1 }, stufe: 1 },
  { id: "gehen_zuegig", name: "Zügiges Gehen", muster: "ausdauer_ruhig", art: "ausdauer", muskeln: [], geraete: [["draussen"], ["laufband"]], belastung: "zeit", hoehe_cm: 0, gelenke: {}, stufe: 1 },
  { id: "intervalle_lauf", name: "Intervalle laufen", muster: "ausdauer_intervall", art: "ausdauer", muskeln: [], geraete: [["draussen"], ["laufband"]], belastung: "zeit", hoehe_cm: 0, gelenke: { knie: 1, sprunggelenk: 1 }, stufe: 2, sport: ["laufen", "fussball"] },
  { id: "intervalle_rad", name: "Intervalle auf dem Rad", muster: "ausdauer_intervall", art: "ausdauer", muskeln: [], geraete: [["fahrrad"]], belastung: "zeit", hoehe_cm: 0, gelenke: {}, stufe: 1 },
  { id: "intervalle_rudern", name: "Intervalle am Rudergerät", muster: "ausdauer_intervall", art: "ausdauer", muskeln: [], geraete: [["rudergeraet"]], belastung: "zeit", hoehe_cm: 0, gelenke: { ruecken: 1 }, stufe: 1 },
]

export function uebung(id: string): Uebung | undefined {
  return UEBUNGEN.find((u) => u.id === id)
}
