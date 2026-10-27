# Dehnfigur aus MakeHuman

`figur_bauen.py` baut `src/figur/figur.glb` aus den freien Daten von MakeHuman:

- Grundnetz `base.obj`, Skelett `default.mhskel` und Gewichte `default_weights.mhw` aus dem Repository
  makehumancommunity/makehuman (Ordner `makehuman/data`),
- Formziele `targets.npz` aus dem Python-Paket `makehuman` 1.3.2 (PyPI).

Alle diese Daten stehen unter CC0 1.0 (siehe LICENSE.md im MakeHuman-Repository, Abschnitt C, und die
Lizenzangaben in den Dateien). Die gebaute Figur darf daher frei verwendet und weitergegeben werden.

Aufruf (nur numpy nötig):

```
python3 werkzeuge/makehuman/figur_bauen.py [Zwischenordner] [Ziel]
```

Aussehen (Figur, Gesicht), Kleidung, Haare und Gesichtsfarben sind im Skript einstellbar. Danach mit
`werkzeuge/pruefen.html?modell=1` alle Übungen auf Durchdringungen prüfen und mit
`werkzeuge/figur.html?modell=1&locker=1&ids=…&t=z` ansehen.
