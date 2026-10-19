# TrainMe

Trainingsplaner für Kraft, Mobilität und Ausdauer, komplett auf dem Handy. Kein Konto, kein Server, keine Werbung.

**Download:** [TrainMe.apk (neueste Version)](https://github.com/schale91/TrainMe/releases/latest/download/TrainMe.apk)

Auf dem Android-Handy öffnen und installieren. Beim ersten Mal fragt Android, ob der Browser oder die Dateien-App „unbekannte Apps installieren“ darf. Updates einfach über die alte Version installieren, die Daten bleiben erhalten. Ab Version 0.4 meldet die App selbst, wenn ein Update bereitliegt (Profil, App-Update).

## Was TrainMe kann

- **Rund 1000 Übungen** mit ausführlicher Anleitung hinter jedem „i“: Schritte, Atmung, Fehler, Nutzen, Tipps, Golfbezug.
- **Golf-Fokus:** eigene Golf-Übungen (Rotation, Würfe, Schnellkraft, Haltung, Handgelenk), immer passend zur Ausrüstung.
- **Beweglichkeitstests** wie Finger-Boden-Abstand, Rotation im Sitzen oder Knie zur Wand, angelehnt an das TPI-Screening. Schwachstellen bekommen mehr Mobilität im Plan.
- **Pausentimer im Hintergrund:** Restzeit in der Benachrichtigung und schwebend über anderen Apps, zum Beispiel über YouTube.
- **Abenteuer:** Nach jedem vollständig eingetragenen Training gibt es eine Kiste mit Münzen und Karten. Der Held kämpft sich automatisch durch fünf Welten.
- **1-%-Methode, Kraftkurven und Fakten mit Quellen.**

- **Individuell:** Trainingstage und Minuten je Tag, mehrere Orte mit eigenen Geräten, echten Gewichtsstufen (Kurzhanteln, Scheibenpaare, Kettlebells, Maschinen) und Deckenhöhe, Ziel, Erfahrung, Beschwerden je Gelenk, ausgeschlossene Übungen.
- **Kraft, Mobilität, Ausdauer:** einzeln anwählbar.
- **Sportspezifisch:** Golf, Fußball, Laufen oder allgemein, mit Saisonphase. Keine schweren Beine vor dem Spiel, Regeneration danach.
- **Steigerung wie bei evidenzbasierten Coaches:** Blöcke mit Entlastungswoche, Reserve-Wiederholungen (RIR) je Woche, doppelte Progression, RIR-Steuerung über das geschätzte Maximum, Plateau-Erkennung. Jede Vorgabe sagt, warum.
- **Spielerisch:** XP, Stufen, Wochenserie, Abzeichen, Bestwerte.
- **Sicherung:** Export und Import als Datei.

Details und Quellen: [docs/KONZEPT.md](docs/KONZEPT.md)

> TrainMe nimmt bei Beschwerden Rücksicht, ersetzt aber keine ärztliche oder physiotherapeutische Behandlung.

## Entwicklung

```bash
npm ci
npm test          # Regeln und Planung
npm run dev       # im Browser ausprobieren
npm run android   # Web-App bauen und ins Android-Projekt kopieren
```

Technik: React, TypeScript, Vite, Capacitor (Android). Die APK baut GitHub Actions (`.github/workflows/apk.yml`) bei jedem Push auf `main` und veröffentlicht sie als Release.

### Signatur

Damit Updates sich über die installierte Version legen, wird jede APK mit demselben Schlüssel signiert. Er liegt als Repository-Secret vor:

- `TRAINME_KEYSTORE`: Keystore (PKCS12) als Base64
- `TRAINME_KEYSTORE_PASSWORT`: Passwort für Keystore und Schlüssel (Alias `trainme`)

Ohne diese Secrets baut der Workflow nur eine Test-APK und veröffentlicht kein Release.
