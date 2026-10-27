#!/usr/bin/env python3
"""
Baut die Dehnfigur aus den MakeHuman-Daten (Grundnetz, Formziele, Skelett, Gewichte; alle CC0) als glb.

Aufruf:  python3 werkzeuge/makehuman/figur_bauen.py [Zwischenordner] [Ziel]
Standard: Zwischenordner ~/.cache/trainme-makehuman, Ziel src/figur/figur.glb

Konventionen wie bisher in der App: Netz in Zentimetern, z ist oben, vorn ist -y, links +x. Der oberste Knoten
dreht das nach three.js (y oben) und skaliert auf Meter.

Vorberechnet und als eigene Attribute im Netz:
  _KLEID   (Shirt locker, Shorts locker, Sport-Top eng, Sport-Shorts eng), Masken 0..1
  _TUCH    Versatz der lockeren Kleidung in der Ruhehaltung (cm)
  _TUCHN   Normale der lockeren Kleidung (geglättet, Stoff statt Muskeln)
  _GESICHT (Augenbrauen, Lippen, Abstand über dem Haaransatz in cm)
  _STRANG  Haare: Lage quer zu den Strähnen und entlang (cm)
  _FREI    Haare: 0 fest am Kopf, 1 frei hängend (Spitzen)
Gesichtsausdrücke als Morph-Ziele: Mouth_Smile, Eyes_Blink.

Nur numpy wird gebraucht.
"""

import io
import json
import math
import os
import struct
import sys
import urllib.request
import zipfile

import numpy as np

QUELLE = "https://raw.githubusercontent.com/makehumancommunity/makehuman/master/makehuman/"
DATEIEN = ["data/3dobjs/base.obj", "data/rigs/default.mhskel", "data/rigs/default_weights.mhw"]
# Die kompilierten Formziele liegen dem Python-Paket von MakeHuman bei
PAKET = "https://pypi.org/pypi/makehuman/1.3.2/json"

# Aussehen: junge Frau, sportlich, schlank, Durchschnittsgröße
FIGUR = {
    "muskel": 0.62,
    "gewicht": 0.42,
    "groesse": 0.5,
    "proportionen": 0.85,
    "brust": 0.68,
    "herkunft": {"caucasian": 0.6, "african": 0.15, "asian": 0.25},
}
# Körperform wie die frühere Figur: sportlich, schlanke Taille, betonte Hüfte. Werte aus einem Abgleich der
# Breiten und Tiefen von Rumpf und Beinen je Höhe (positiv: „-incr“/„-up“, negativ: „-decr“/„-down“)
FORM = {
    "measure/measure-bust-circ": -0.34,
    "measure/measure-underbust-circ": -0.78,
    "measure/measure-waist-circ": -1.0,
    "measure/measure-hips-circ": 0.18,
    "measure/measure-thigh-circ": -0.4,
    "measure/measure-calf-circ": 0.04,
    "measure/measure-knee-circ": -1.0,
    "measure/measure-napetowaist-dist": -0.69,
    "measure/measure-waisttohip-dist": -0.95,
    "measure/measure-upperleg-height": -0.06,
    "measure/measure-lowerleg-height": 0.71,
    "buttocks/buttocks-volume": -0.95,
    "torso/torso-scale-depth": 0.55,
    "torso/torso-scale-horiz": -0.39,
    "hip/hip-scale-depth": 0.1,
    "hip/hip-scale-horiz": -1.0,
    "hip/hip-scale-vert": 1.0,
    "measure/measure-frontchest-dist": -0.75,
    "stomach/stomach-tone": 0.4,
    "hip/hip-waist": 0.26,
    # schmalere, weichere Schultern
    "measure/measure-shoulder-dist": -0.6,
    "torso/torso-vshape": -0.4,
    "armslegs/l-upperarm-shoulder-muscle": -0.7,
    "armslegs/r-upperarm-shoulder-muscle": -0.7,
    "armslegs/l-upperarm-muscle": -0.3,
    "armslegs/r-upperarm-muscle": -0.3,
}
# Augen größer (Anteil), wie bei der früheren, leicht stilisierten Figur
AUGEN = 0.16
# Weicheres, freundliches Gesicht und schlanker Hals (Formziele von MakeHuman, Anteil 0..1)
GESICHT = {
    "head/head-oval": 0.5,
    # Kopf wie bei der früheren Figur: größer, runder, jünger
    "head/head-scale-vert-incr": 1.0,
    "head/head-scale-horiz-incr": 0.7,
    "head/head-scale-depth-incr": 0.7,
    "head/head-age-decr": 0.5,
    "head/head-round": 0.3,
    "nose/nose-scale-vert-decr": 0.25,
    "cheek/l-cheek-volume-incr": 0.3,
    "cheek/r-cheek-volume-incr": 0.3,
    "chin/chin-width-decr": 0.4,
    "chin/chin-prominent-decr": 0.3,
    "forehead/forehead-nubian-decr": 0.3,
    "eyes/l-eye-scale-incr": 0.5,
    "eyes/r-eye-scale-incr": 0.5,
    "nose/nose-scale-horiz-decr": 0.25,
    "nose/nose-point-width-decr": 0.3,
    "mouth/mouth-upperlip-volume-incr": 0.2,
    "cheek/l-cheek-bones-incr": 0.2,
    "cheek/r-cheek-bones-incr": 0.2,
    "neck/neck-scale-horiz-decr": 0.25,
}


# ---------------------------------------------------------------- Daten holen


def holen(zw):
    os.makedirs(zw, exist_ok=True)
    for f in DATEIEN:
        ziel = os.path.join(zw, os.path.basename(f))
        if not os.path.exists(ziel):
            print("lade", f)
            urllib.request.urlretrieve(QUELLE + f, ziel)
    npz = os.path.join(zw, "targets.npz")
    if not os.path.exists(npz):
        info = json.load(urllib.request.urlopen(PAKET))
        url = next(u["url"] for u in info["urls"] if u["filename"].endswith(".whl"))
        print("lade", url)
        whl = zipfile.ZipFile(io.BytesIO(urllib.request.urlopen(url).read()))
        with open(npz, "wb") as out:
            out.write(whl.read("makehuman/data/targets.npz"))
    return {os.path.basename(f): os.path.join(zw, os.path.basename(f)) for f in DATEIEN + ["targets.npz"]}


def obj_lesen(pfad):
    v, gruppen, g = [], {}, None
    for zeile in open(pfad):
        if zeile.startswith("v "):
            v.append([float(x) for x in zeile.split()[1:4]])
        elif zeile.startswith("g "):
            g = zeile.split()[1]
        elif zeile.startswith("f "):
            gruppen.setdefault(g, []).append([int(t.split("/")[0]) - 1 for t in zeile.split()[1:]])
    return np.array(v, dtype=np.float64), {k: np.array(f) for k, f in gruppen.items()}


# ---------------------------------------------------------------- Formziele


def drei(wert):
    """Makro-Wert 0..1 → Anteile (min, mittel, max) wie in MakeHuman"""
    mx = max(0.0, wert * 2 - 1)
    mn = max(0.0, 1 - wert * 2)
    return {"min": mn, "average": 1 - mx - mn, "max": mx}


class Formziele:
    def __init__(self, pfad):
        self.d = np.load(pfad)

    def da(self, name):
        return "targets/" + name + ".index" in self.d

    def delta(self, name, n):
        out = np.zeros((n, 3))
        idx = self.d["targets/" + name + ".index"].astype(np.int64)
        out[idx] = self.d["targets/" + name + ".vector"].astype(np.float64) * 1e-3
        return out

    def figur(self, n):
        f = FIGUR
        mus, gew = drei(f["muskel"]), drei(f["gewicht"])
        summe = np.zeros((n, 3))
        teile = []
        for rasse, w in f["herkunft"].items():
            teile.append(("macrodetails/%s-female-young" % rasse, w))
        for m, wm in mus.items():
            for g, wg in gew.items():
                mg = "%smuscle-%sweight" % (m, g)
                teile.append(("macrodetails/universal-female-young-" + mg, wm * wg))
                for h, wh in (("max", max(0, f["groesse"] * 2 - 1)), ("min", max(0, 1 - f["groesse"] * 2))):
                    teile.append(("macrodetails/height/female-young-%s-%sheight" % (mg, h), wm * wg * wh))
                for p, wp in (("ideal", max(0, f["proportionen"] * 2 - 1)), ("uncommon", max(0, 1 - f["proportionen"] * 2))):
                    teile.append(("macrodetails/proportions/female-young-%s-%sproportions" % (mg, p), wm * wg * wp))
                for c, wc in drei(f["brust"]).items():
                    for fe, wf in drei(0.5).items():
                        teile.append(("breast/female-young-%s-%scup-%sfirmness" % (mg, c, fe), wm * wg * wc * wf))
        teile += list(GESICHT.items())
        for name, w in FORM.items():
            plus, minus = ("-incr", "-decr") if self.da(name + "-incr") else ("-up", "-down")
            teile.append((name + (plus if w > 0 else minus), abs(w)))
        for name, w in teile:
            if w > 1e-6 and self.da(name):
                summe += w * self.delta(name, n)
        return summe

    def ausdruck(self, einheit, n):
        out = np.zeros((n, 3))
        for rasse, w in FIGUR["herkunft"].items():
            out += w * self.delta("expression/units/%s/%s" % (rasse, einheit), n)
        return out


# ---------------------------------------------------------------- Hilfen


def umrechnen(p):
    """MakeHuman (dm, y oben, vorn +z) → App (cm, z oben, vorn -y)"""
    return np.stack([p[..., 0] * 10, -p[..., 2] * 10, p[..., 1] * 10], axis=-1)


def dreiecke(quads):
    return np.concatenate([quads[:, [0, 1, 2]], quads[:, [0, 2, 3]]])


def normalen(pos, tri):
    n = np.zeros_like(pos)
    fn = np.cross(pos[tri[:, 1]] - pos[tri[:, 0]], pos[tri[:, 2]] - pos[tri[:, 0]])
    for k in range(3):
        np.add.at(n, tri[:, k], fn)
    return n / np.maximum(np.linalg.norm(n, axis=1, keepdims=True), 1e-9)


def nachbarn(n, tri):
    kanten = np.concatenate([tri[:, [0, 1]], tri[:, [1, 2]], tri[:, [2, 0]]])
    kanten = np.concatenate([kanten, kanten[:, ::-1]])
    kanten = np.unique(kanten, axis=0)
    return kanten


def glaetten(werte, kanten, n, runden, maske=None):
    """Mittelwert über Nachbarn, mehrfach (maske: nur dort ändern)"""
    w = werte.copy()
    grad = np.bincount(kanten[:, 0], minlength=n).astype(np.float64)[:, None]
    for _ in range(runden):
        s = np.zeros_like(w)
        np.add.at(s, kanten[:, 0], w[kanten[:, 1]])
        neu = 0.5 * w + 0.5 * s / np.maximum(grad, 1)
        w = neu if maske is None else np.where(maske[:, None] > 0, neu, w)
    return w


def stufe(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


# ---------------------------------------------------------------- Bau


def bauen(zw, ziel):
    q = holen(zw)
    basis, gruppen = obj_lesen(q["base.obj"])
    n = len(basis)
    fz = Formziele(q["targets.npz"])
    roh = basis + fz.figur(n)
    pos = umrechnen(roh)
    laecheln = umrechnen(fz.ausdruck("mouth-corner-puller", n))
    blinzeln = umrechnen(fz.ausdruck("eye-left-closure", n) + fz.ausdruck("eye-right-closure", n))

    koerper_q = gruppen["body"]
    boden = pos[np.unique(koerper_q)][:, 2].min()
    pos[:, 2] -= boden
    # Größere Augen wie bei der früheren Figur: Augen und Lider um die Augenmitte vergrößern, nach außen auslaufend
    for g in ("helper-l-eye", "helper-r-eye"):
        ae = np.unique(gruppen[g])
        mitte = pos[ae].mean(0)
        r = np.linalg.norm(pos[ae] - mitte, axis=1).mean()
        d = np.linalg.norm(pos - mitte, axis=1)
        w = 1 - stufe(r * 1.4, r * 3.4, d)
        pos = mitte + (pos - mitte) * (1 + AUGEN * w)[:, None]

    # Skelett: Gelenke sind Mittelpunkte von Punktgruppen des Grundnetzes
    skel = json.load(open(q["default.mhskel"]))
    gelenk = {k: pos[v].mean(0) for k, v in skel["joints"].items()}
    namen = []

    def ordnen(name):
        if name in namen:
            return
        eltern = skel["bones"][name]["parent"]
        if eltern:
            ordnen(eltern)
        namen.append(name)

    for b in sorted(skel["bones"]):
        ordnen(b)
    kopf = {b: gelenk[skel["bones"][b]["head"]] for b in namen}
    eltern = {b: skel["bones"][b]["parent"] for b in namen}
    ki = {b: i for i, b in enumerate(namen)}

    # Gewichte: höchstens vier je Punkt
    roh_w = json.load(open(q["default_weights.mhw"]))["weights"]
    gew = np.zeros((n, len(namen)))
    for b, liste in roh_w.items():
        if b in ki:
            for i, w in liste:
                gew[i, ki[b]] += w

    def vier(rows):
        return vier_aus(gew[rows], ki["head"])

    netze = []

    # ---------- Körper
    # Feiner: einmal Catmull-Clark (jedes Viereck wird zu vier), Gewichte und Ausdrücke werden mit unterteilt
    ecken = np.unique(koerper_q)
    neu = -np.ones(n, dtype=np.int64)
    neu[ecken] = np.arange(len(ecken))
    zeilen, spalten, werte, quads, anzahl = unterteilen(neu[koerper_q], len(ecken))

    def fein(x):
        out = np.zeros((anzahl,) + x.shape[1:])
        np.add.at(out, zeilen, werte.reshape((-1,) + (1,) * (x.ndim - 1)) * x[spalten])
        return out

    p = fein(pos[ecken])
    gew_f = fein(gew[ecken])
    tri = dreiecke(quads)
    kanten = nachbarn(len(p), tri)
    nrm = normalen(p, tri)

    def summe_f(muster):
        sp = [ki[b] for b in namen if any(b.startswith(m) for m in muster)]
        return gew_f[:, sp].sum(1)

    kleid, tuch, tuchn, gesicht = kleidung(p, nrm, tri, kanten, None, kopf, summe_f)
    j, w = vier_aus(gew_f, ki["head"])
    netze.append({
        "name": "Koerper", "material": "Haut", "pos": p, "nrm": nrm, "tri": tri, "j": j, "w": w,
        # kompakt als normierte Ganzzahlen: Abstände /6 cm, Versatz /10 cm (im Shader zurückgerechnet)
        "attr": {
            "_KLEID": (kleid / 6, "BYTE"),
            "_TUCH": (np.c_[tuch / 10, np.zeros(len(tuch))], "SHORT"),
            "_TUCHN": (np.c_[tuchn, np.zeros(len(tuchn))], "BYTE"),
            "_GESICHT": (np.c_[gesicht[:, :2], gesicht[:, 2:] / 6, np.zeros(len(gesicht))], "BYTE"),
        },
        "morph": {"Mouth_Smile": fein(laecheln[ecken]), "Eyes_Blink": fein(blinzeln[ecken])},
    })

    # ---------- Augen: runde Kugeln an der Stelle der Augen-Hilfsnetze
    ap, at = [], []
    for g in ("helper-l-eye", "helper-r-eye"):
        pe = pos[np.unique(gruppen[g])]
        mitte = pe.mean(0)
        r = np.linalg.norm(pe - mitte, axis=1).mean()
        kp, kt = kugel(mitte, r, 24, 16)
        at.append(kt + sum(len(x) for x in ap))
        ap.append(kp)
    ap = np.concatenate(ap)
    at = np.concatenate(at)
    netze.append({
        "name": "Augen", "material": "Eye_L", "pos": ap, "nrm": normalen(ap, at), "tri": at,
        "j": np.tile(np.array([[ki["head"], 0, 0, 0]], np.uint8), (len(ap), 1)), "w": np.tile(np.array([[1, 0, 0, 0]], np.float32), (len(ap), 1)), "attr": {}, "morph": {},
    })

    # ---------- Wimpern (obere), blinzeln mit
    wq = np.concatenate([gruppen["helper-l-eyelashes-2"], gruppen["helper-r-eyelashes-2"]])
    we = np.unique(wq)
    nw = -np.ones(n, dtype=np.int64)
    nw[we] = np.arange(len(we))
    wt = nw[dreiecke(wq)]
    j, w = vier(we)
    netze.append({"name": "Wimpern", "material": "Eyelash", "pos": pos[we], "nrm": normalen(pos[we], wt), "tri": wt, "j": j, "w": w, "attr": {}, "morph": {"Eyes_Blink": blinzeln[we]}})

    # ---------- Haare: Kappe, langer Vorhang und Pony
    hp, ht, frei, strang = haare(p, nrm, tri, gesicht[:, 2], kopf, summe_f(["upperarm", "lowerarm", "wrist", "finger", "metacarpal"]))
    netze.append({
        "name": "Haare", "material": "Hair", "pos": hp, "nrm": normalen(hp, ht), "tri": ht,
        "j": np.tile(np.array([[ki["head"], 0, 0, 0]], np.uint8), (len(hp), 1)), "w": np.tile(np.array([[1, 0, 0, 0]], np.float32), (len(hp), 1)),
        "attr": {"_FREI": frei, "_STRANG": strang}, "morph": {},
    })

    schreiben(ziel, netze, namen, eltern, kopf)
    hoehe = p[:, 2].max()
    print("fertig:", ziel, "Höhe %.1f cm, Hüfte %.1f cm, %d Knochen" % (hoehe, kopf["root"][2], len(namen)))
    print("Schultergelenke %.1f cm auseinander" % (2 * kopf["upperarm01.L"][0]))
    for b in () and ("root", "spine04", "spine02", "neck01", "head", "upperarm01.L", "lowerarm01.L", "wrist.L", "upperleg01.L", "lowerleg01.L", "foot.L"):
        print("  ", b, np.round(kopf[b], 1))


def kugel(mitte, r, seg, ringe):
    pts, tri = [], []
    for i in range(ringe + 1):
        th = math.pi * i / ringe
        for k in range(seg):
            ph = 2 * math.pi * k / seg
            pts.append(mitte + r * np.array([math.sin(th) * math.cos(ph), math.sin(th) * math.sin(ph), math.cos(th)]))
    for i in range(ringe):
        for k in range(seg):
            a, b = i * seg + k, i * seg + (k + 1) % seg
            c, d = a + seg, b + seg
            tri += [[a, c, b], [b, c, d]]
    return np.array(pts), np.array(tri)


# ---------------------------------------------------------------- Kleidung


def kleidung(p, nrm, tri, kanten, _ecken, kopf, gewicht):
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    s = np.abs(x)
    arm = gewicht(["upperarm", "lowerarm", "wrist", "finger", "metacarpal"])
    bein = gewicht(["upperleg", "lowerleg", "foot", "toe"])
    hals = gewicht(["neck", "head", "jaw", "special", "eye", "oris", "levator", "orbicularis", "risorius", "temporalis", "oculi", "tongue"])

    huefte = kopf["upperleg01.L"][2]
    knie = kopf["lowerleg01.L"][2]
    knoechel = kopf["foot.L"][2]
    nacken = kopf["neck01"]
    schulter = kopf["upperarm01.L"]
    ellbogen = kopf["lowerarm01.L"]
    taille = kopf["spine04"][2]

    # Oberarm: Lage entlang des Arms (0 Schulter, 1 Ellbogen)
    seite = np.where(x >= 0, 1, -1)
    sch = np.stack([schulter[0] * seite, np.full_like(x, schulter[1]), np.full_like(x, schulter[2])], 1)
    ell = np.stack([ellbogen[0] * seite, np.full_like(x, ellbogen[1]), np.full_like(x, ellbogen[2])], 1)
    achse = ell - sch
    t_arm = ((p - sch) * achse).sum(1) / (achse * achse).sum(1)

    # Brust: vorderster Punkt des Rumpfs zwischen Achsel und Taille
    rumpf = (arm < 0.3) & (bein < 0.3) & (hals < 0.3)
    zone = rumpf & (z > taille + 10) & (z < schulter[2]) & (s > 3) & (s < 13)
    spitze = p[zone][np.argmin(y[zone])]
    unterbrust = spitze[2] - 7.5
    schritt = z[(s < 1.0) & (z < huefte) & (z > knie)].min()

    # Kleidung als Abstandsfelder in cm (positiv: bedeckt). Linear in der Lage, damit die Ränder im Shader gerade und
    # scharf werden; Masken würden zwischen den Ecken zackig.
    # Arm und Rumpf stetig über die (geglätteten) Gewichte mischen, sonst springt der Rand an der Achsel von Ecke zu Ecke
    arm = glaetten(arm[:, None], kanten, len(p), 12)[:, 0]
    a = stufe(0.3, 0.7, arm)
    achsel = (0.45 - arm) * 12
    hinten = stufe(-1, 3, y - nacken[1])
    # Rundhals, vorn etwas tiefer
    hals_d = (nacken[2] - 1.5 - 3.5 * (1 - hinten) + 0.15 * s) - z
    l_arm = np.linalg.norm(achse, axis=1)
    # Lockeres T-Shirt: Rumpf bis zu den Hüftgelenken, Ärmel bis zur Mitte des Oberarms
    shirt_d = (1 - a) * np.minimum(z - (huefte - 1), hals_d) + a * (0.45 - t_arm) * l_arm
    # Lockere Shorts: knielang, vom Bund unter der Taille
    shorts_d = np.minimum(np.minimum(z - (knie + 7), (taille - 2) - z), achsel)
    # Eng (Entwicklermodus): Sport-Top bis unter die Brust, runder Ausschnitt zu breiten Trägern, hinten höher;
    # Shorts bis 5 cm unter die Gesäßfalte
    kante = spitze[2] + 3 + 0.04 * s * s + 5 * hinten
    traeger = np.minimum(s - 4.5, 9.5 - s)
    top_d = np.minimum(np.minimum(np.minimum(z - unterbrust, np.maximum(kante - z, traeger)), hals_d), achsel)
    eng_d = np.minimum(np.minimum(z - (schritt - 5), (taille - 1.5) - z), achsel)
    kleid = np.clip(np.stack([shirt_d, shorts_d, top_d, eng_d], 1), -6, 6).astype(np.float32)
    shirt = stufe(-1.0, 0.5, shirt_d)
    shorts = stufe(-1.0, 0.5, shorts_d)

    # Versatz der lockeren Kleidung: Stoff steht ab und fällt vorn von der Brust, hinten von den Schulterblättern
    versatz = nrm * (np.maximum(shirt * 0.9, shorts * 1.0))[:, None]
    # Rumpf in Zylinderkoordinaten um die Körperachse
    mitte_y = kopf["spine02"][1]
    w = np.arctan2(y - mitte_y, x)
    r = np.hypot(x, y - mitte_y)
    nw, nz = 48, 1.0
    wb = ((w + math.pi) / (2 * math.pi) * nw).astype(int) % nw
    zb = np.floor(z / nz).astype(int)
    rumpf_shirt = (shirt > 0.05) & (arm < 0.2)
    rmax = {}
    for i in np.where(rumpf_shirt & (z < schulter[2] - 3))[0]:
        k = (wb[i], zb[i])
        rmax[k] = max(rmax.get(k, 0), r[i])
    # Stoff spannt waagerecht über Mulden (zwischen den Brüsten, über der Wirbelsäule): Sehnen statt Haut
    huelle = {}
    for (a, zz), v in rmax.items():
        for d in range(-5, 6):
            k = ((a + d) % nw, zz)
            huelle[k] = max(huelle.get(k, 0), v * math.cos(d * 2 * math.pi / nw))
    fall = np.zeros(len(p))
    for i in np.where(rumpf_shirt)[0]:
        best = r[i]
        for dz in range(0, 6):
            v = huelle.get((wb[i], zb[i] + dz))
            if v is not None:
                best = max(best, v - dz * nz * 0.035)
        fall[i] = best - r[i]
    radial = np.stack([np.cos(w), np.sin(w), np.zeros_like(w)], 1)
    versatz += radial * (0.3 * fall * shirt)[:, None]
    # Shorts leicht ausgestellt
    versatz = glaetten(versatz, kanten, len(p), 12, (shirt + shorts) > 0)
    tuch = (versatz * np.maximum(shirt, shorts)[:, None] / np.maximum(np.maximum(shirt, shorts), 1e-6)[:, None]).astype(np.float32)
    tuch[(shirt + shorts) <= 0] = 0
    tn = normalen(p + tuch, tri)
    tn = glaetten(tn, kanten, len(p), 40, (shirt + shorts) > 0)
    tn = tn / np.maximum(np.linalg.norm(tn, axis=1, keepdims=True), 1e-9)

    # Gesicht: Augenbrauen als Bogen über den Augen, Lippen über die Lippenknochen, Kopfhaut unter den Haaren
    auge = kopf["eye.L"]
    u = s - abs(auge[0]) + 0.2
    hoehe_brau = auge[2] + 1.55 + 0.35 * np.cos(np.clip(u / 2.4, -1, 1) * math.pi / 2)
    dicke = 0.28 - 0.1 * np.clip((u + 1.4) / 3.8, 0, 1)
    brau = (1 - stufe(dicke - 0.12, dicke + 0.08, np.abs(z - hoehe_brau))) * stufe(-1.6, -1.2, u) * (1 - stufe(2.2, 2.7, u)) * (y < auge[1] + 1.0)
    lippen = stufe(0.6, 0.85, gewicht(["oris"])) * (y < kopf["jaw"][1])
    kopfhaut = kopfhaut_feld(p, kopf)
    gesicht = np.stack([brau, lippen, kopfhaut], 1).astype(np.float32)
    return kleid, tuch, tn.astype(np.float32), gesicht


def vier_aus(g, ersatz):
    """Die vier stärksten Knochen je Punkt, normiert"""
    idx = np.argsort(-g, axis=1)[:, :4]
    w = np.take_along_axis(g, idx, axis=1)
    leer = w.sum(1) <= 0
    idx[leer, 0] = ersatz
    w[leer, 0] = 1
    w = w / w.sum(1, keepdims=True)
    return idx.astype(np.uint8), w.astype(np.float32)


def unterteilen(quads, n):
    """
    Catmull-Clark, einmal, als lineare Abbildung (Zeile, Spalte, Wert): neue Punkte aus alten. Ränder (Augen,
    Mund) bleiben fest, damit nichts zu den Augen hin aufklafft. Gibt auch die neuen Vierecke zurück.
    """
    nf = len(quads)
    kanten = {}
    flaechen_je_kante = {}
    for f, q in enumerate(quads):
        for k in range(4):
            a, b = int(q[k]), int(q[(k + 1) % 4])
            key = (min(a, b), max(a, b))
            flaechen_je_kante.setdefault(key, []).append(f)
    for i, key in enumerate(flaechen_je_kante):
        kanten[key] = n + nf + i
    anzahl = n + nf + len(kanten)
    zeilen, spalten, werte = [], [], []

    def setze(z, cols, w):
        zeilen.extend([z] * len(cols))
        spalten.extend(cols)
        werte.extend([w] * len(cols) if np.isscalar(w) else w)

    # Flächenpunkte
    for f, q in enumerate(quads):
        setze(n + f, [int(v) for v in q], 0.25)
    # Kantenpunkte
    rand = np.zeros(n, bool)
    for key, fl in flaechen_je_kante.items():
        z = kanten[key]
        if len(fl) == 2:
            setze(z, list(key), 0.25)
            for f in fl:
                setze(z, [int(v) for v in quads[f]], 1 / 16)
        else:
            setze(z, list(key), 0.5)
            rand[list(key)] = True
    # Eckpunkte
    nf_je = [[] for _ in range(n)]
    for f, q in enumerate(quads):
        for v in q:
            nf_je[int(v)].append(f)
    nb_je = [[] for _ in range(n)]
    for a, b in flaechen_je_kante:
        nb_je[a].append(b)
        nb_je[b].append(a)
    for v in range(n):
        val = len(nb_je[v])
        if rand[v] or val < 3:
            setze(v, [v], 1.0)
            continue
        # (Q + 2R + (n-3)P) / n mit Q = Mittel der Flächenpunkte, R = Mittel der Kantenmitten
        fl = nf_je[v]
        for f in fl:
            setze(v, [int(x) for x in quads[f]], 1 / (len(fl) * 4 * val))
        for b in nb_je[v]:
            setze(v, [v, b], 2 / (val * 2 * val))
        setze(v, [v], (val - 3) / val)
    neu = []
    for f, q in enumerate(quads):
        q = [int(x) for x in q]
        e = [kanten[(min(q[k], q[(k + 1) % 4]), max(q[k], q[(k + 1) % 4]))] for k in range(4)]
        c = n + f
        for k in range(4):
            neu.append([q[k], e[k], c, e[k - 1]])
    return np.array(zeilen), np.array(spalten), np.array(werte), np.array(neu), anzahl


def haaransatz(p, kopf):
    """Höhe des Haaransatzes je Richtung um den Kopf (vorn Stirn, seitlich über den Ohren, hinten im Nacken)"""
    auge = kopf["eye.L"]
    kh = kopf["head"]
    w = np.degrees(np.abs(np.arctan2(p[:, 0], -(p[:, 1] - kh[1] - 0.5))))  # 0 vorn, 180 hinten
    # Stirn, Schläfe, vor dem Ohr (Koteletten), über dem Ohr, hinter dem Ohr, Nacken
    stuetz_w = [0, 25, 50, 68, 80, 92, 112, 128, 150, 180]
    stuetz_h = [auge[2] + 4.5, auge[2] + 4.3, auge[2] + 3.3, auge[2] + 1.6, auge[2] - 0.6, auge[2] + 2.2, auge[2] + 2.4, auge[2] - 0.8, kh[2] - 1.5, kh[2] - 2.5]
    return np.interp(w, stuetz_w, stuetz_h)


def kopfhaut_feld(p, kopf):
    """Abstand über dem Haaransatz in cm (positiv: behaarte Kopfhaut), unterhalb des Kopfes -6"""
    f = p[:, 2] - haaransatz(p, kopf)
    return np.where(p[:, 2] > kopf["head"][2] - 6, np.clip(f, -6, 6), -6.0)


def kappe_schneiden(p, nrm, tri, f):
    """Dreiecke an der Linie f = 0 schneiden und nur den Teil mit f >= 0 behalten (glatter Haaransatz)"""
    pts, nn, ff = list(p), list(nrm), list(f)
    kante = {}

    def mitte(a, b):
        k = (min(a, b), max(a, b))
        if k not in kante:
            t = f[a] / (f[a] - f[b])
            pts.append(p[a] + t * (p[b] - p[a]))
            n = nrm[a] + t * (nrm[b] - nrm[a])
            nn.append(n / np.linalg.norm(n))
            ff.append(0.0)
            kante[k] = len(pts) - 1
        return kante[k]

    neu = []
    for t in tri:
        drin = [f[i] >= 0 for i in t]
        if all(drin):
            neu.append(list(t))
        elif any(drin):
            poly = []
            for k in range(3):
                a, b = t[k], t[(k + 1) % 3]
                if f[a] >= 0:
                    poly.append(a)
                if (f[a] >= 0) != (f[b] >= 0):
                    poly.append(mitte(a, b))
            for k in range(1, len(poly) - 1):
                neu.append([poly[0], poly[k], poly[k + 1]])
    return np.array(pts), np.array(nn), np.array(ff), np.array(neu)


def gitter(spalten, zeilen, versatz=0, zu=False):
    """Dreiecke eines Gitters (Spalten nebeneinander, Zeilen untereinander)"""
    t = []
    for i in range(zeilen - 1):
        for k in range(spalten - (0 if zu else 1)):
            a = versatz + i * spalten + k
            b = versatz + i * spalten + (k + 1) % spalten
            t += [[a, b, a + spalten], [b, b + spalten, a + spalten]]
    return t


def haare(p, nrm, tri, feld, kopf, arm):
    """
    Glatte Haare bis knapp über die Schultern mit seitlich gelegtem Pony:
    - Kappe über der Kopfhaut (exakt am Haaransatz geschnitten),
    - Vorhang in zwei Lagen, fällt vom Kopf und legt sich über Schultern und Rücken,
    - Pony, von links nach rechts über die Stirn gelegt, endet über den Augenbrauen.
    """
    kh = kopf["head"]
    auge = kopf["eye.L"]
    nah = (feld > -1.5)[tri].any(1)
    kp, kn, kf, kt = kappe_schneiden(p, nrm, tri[nah], feld)
    benutzt = np.unique(kt)
    um = -np.ones(len(kp), dtype=np.int64)
    um[benutzt] = np.arange(len(benutzt))
    kp, kn, kf, kt = kp[benutzt], kn[benutzt], kf[benutzt], um[kt]
    kp = kp + kn * (0.1 + 0.35 * stufe(0, 4.5, kf))[:, None]

    # Körper in Zylinderkoordinaten um die senkrechte Achse durch die Kopfmitte (ohne Arme)
    kopfpunkte = p[(p[:, 2] > kh[2] + 2)]
    mitte = np.array([0.0, kopfpunkte[:, 1].mean(), 0.0])
    koerper = p[(arm < 0.3) & (p[:, 2] > 95)]
    nwin = 120
    wi = lambda x, y: (((np.arctan2(x, -(y - mitte[1])) + 2 * math.pi) % (2 * math.pi)) / (2 * math.pi) * nwin).astype(int) % nwin
    radius = np.zeros((nwin, 200))
    kw, kz = wi(koerper[:, 0], koerper[:, 1]), np.clip(koerper[:, 2].astype(int), 0, 199)
    np.maximum.at(radius, (kw, kz), np.hypot(koerper[:, 0], koerper[:, 1] - mitte[1]))
    # Lücken füllen (Nachbarwinkel)
    for _ in range(2):
        radius = np.maximum(radius, np.maximum(np.roll(radius, 1, 0), np.roll(radius, -1, 0)) * 0.985)

    # weich in der Höhe, damit die Haare keine Stufen je Zentimeter bekommen
    for _ in range(4):
        radius[:, 1:-1] = np.maximum(radius[:, 1:-1], (radius[:, :-2] + 2 * radius[:, 1:-1] + radius[:, 2:]) / 4 * 0.0) * 0 + (radius[:, :-2] + 2 * radius[:, 1:-1] + radius[:, 2:]) / 4

    def r_koerper(w, z):
        z = float(np.clip(z, 0, 198.999))
        i, f = int(z), z - int(z)
        a, b = int(math.floor(w)) % nwin, (int(math.floor(w)) + 1) % nwin
        g = w - math.floor(w)
        za = radius[a, i] * (1 - f) + radius[a, i + 1] * f
        zb = radius[b, i] * (1 - f) + radius[b, i + 1] * f
        return za * (1 - g) + zb * g

    def stelle(winkel, r, z):
        return np.array([math.sin(winkel) * r, mitte[1] - math.cos(winkel) * r, z])

    pts, tris, fr, st = [list(kp)], [list(kt)], [list(np.zeros(len(kp)))], [list(np.zeros((len(kp), 2)))]
    anzahl = len(kp)

    def flaeche(punkte, frei, strang, spalten, zeilen, zu=False):
        nonlocal anzahl
        pts.append(punkte)
        fr.append(frei)
        st.append(strang)
        tris.append(gitter(spalten, zeilen, anzahl, zu))
        anzahl += len(punkte)

    # Eine Schale vom Scheitel rundum: vorn als Pony bis über die Augenbrauen (von links nach rechts gelegt),
    # sonst lang bis über die Schulterblätter. Zwei Lagen für Volumen, Spitzen verbunden.
    hals = kopf["neck01"][2]
    scheitel = kopfpunkte[:, 2].max() - 0.3
    winkel = np.radians(np.arange(0, 360, 2.0))
    zeilen, spalten = 80, len(winkel)
    t_lauf = np.linspace(0, 1, zeilen)
    enden, pony = [], []
    for wk in winkel:
        v = (math.degrees(wk) + 180) % 360 - 180  # -180..180, 0 vorn
        if abs(v) < 64:
            u = (v + 64) / 128
            # seitlich gelegt: am Scheitel kaum Pony, zur anderen Seite bis knapp über die Augenbraue
            enden.append(auge[2] + 2.3 + 4.5 * (1 - u) ** 2 + 0.3 * math.sin(wk * 9))
            pony.append(True)
        else:
            # vorn an den Seiten kürzer (bis zum Schlüsselbein), nach hinten lang über die Schulterblätter
            hinten = stufe(95, 140, abs(v))
            enden.append(hals - 6 - 7 * hinten + 1.2 * math.sin(wk * 7.0))
            pony.append(False)
    for abstand_kopf, abstand_koerper in ((1.1, 3.0), (0.6, 2.3)):
        r = np.zeros((zeilen, spalten))
        z = np.zeros((zeilen, spalten))
        for k, wk in enumerate(winkel):
            zs = scheitel + (enden[k] - scheitel) * t_lauf
            z[:, k] = zs
            wbin = (wk / (2 * math.pi)) * nwin
            for i, zz in enumerate(zs):
                gap = abstand_kopf if zz > hals else abstand_koerper
                r[i, k] = max(r_koerper(wbin + d, zz) for d in (-1, 0, 1)) + gap
        # glätten (quer und längs), dann Fall: nach unten nie enger als darüber, nur langsam einwärts
        for _ in range(8):
            r = (np.roll(r, 1, 1) + 2 * r + np.roll(r, -1, 1)) / 4
            r[1:-1] = (r[:-2] + 2 * r[1:-1] + r[2:]) / 4
        for i in range(1, zeilen):
            r[i] = np.maximum(r[i], r[i - 1] - 0.15)
        punkte = np.stack([np.sin(winkel)[None] * r, mitte[1] - np.cos(winkel)[None] * r, z], -1).reshape(-1, 3)
        frei = np.where(np.array(pony)[None], 0.0, np.clip((t_lauf[:, None] - 0.3) / 0.35, 0, 1) ** 1.5).reshape(-1)
        laenge = (scheitel - np.array(enden))[None] * t_lauf[:, None]
        strang = np.stack([np.tile(winkel * 9.0, zeilen), laenge.reshape(-1)], 1)
        flaeche(punkte, frei, strang, spalten, zeilen, zu=True)
    a0 = anzahl - 2 * spalten * zeilen + (zeilen - 1) * spalten
    b0 = anzahl - spalten * zeilen + (zeilen - 1) * spalten
    spitzen = []
    for k in range(spalten):
        k2 = (k + 1) % spalten
        spitzen += [[a0 + k, b0 + k, a0 + k2], [a0 + k2, b0 + k, b0 + k2]]
    tris.append(spitzen)

    hp = np.concatenate([np.asarray(x, dtype=np.float64).reshape(-1, 3) for x in pts])
    ht = np.concatenate([np.asarray(t, dtype=np.int64).reshape(-1, 3) for t in tris if len(t)])
    frei = np.concatenate([np.asarray(x, dtype=np.float32).reshape(-1) for x in fr])
    strang = np.concatenate([np.asarray(x, dtype=np.float32).reshape(-1, 2) for x in st])
    return hp, ht, frei, strang


# ---------------------------------------------------------------- glb schreiben


def gewichte_byte(w):
    """Gewichte als Bytes (0..255), Summe genau 255"""
    b = np.round(w * 255).astype(np.int32)
    groesst = np.argmax(b, 1)
    b[np.arange(len(b)), groesst] += 255 - b.sum(1)
    return b.astype(np.uint8)


def schreiben(ziel, netze, namen, eltern, kopf):
    puffer = bytearray()
    views, accessors = [], []

    def roh(arr):
        arr = np.ascontiguousarray(arr)
        while len(puffer) % 4:
            puffer.append(0)
        views.append({"buffer": 0, "byteOffset": len(puffer), "byteLength": arr.nbytes})
        puffer.extend(arr.tobytes())
        return len(views) - 1

    def duenn(d):
        """Morph-Ziel nur mit den Punkten, die sich bewegen (sparse)"""
        idx = np.where(np.abs(d).max(1) > 1e-5)[0].astype(np.uint32)
        accessors.append({
            "componentType": FLOAT, "count": int(len(d)), "type": "VEC3",
            "min": [float(v) for v in d.min(0)], "max": [float(v) for v in d.max(0)],
            "sparse": {"count": int(len(idx)), "indices": {"bufferView": roh(idx), "componentType": UINT}, "values": {"bufferView": roh(d[idx])}},
        })
        return len(accessors) - 1

    def ablegen(arr, typ, komp, ziel_art=None, minmax=False, normiert=False):
        arr = np.ascontiguousarray(arr)
        while len(puffer) % 4:
            puffer.append(0)
        off = len(puffer)
        puffer.extend(arr.tobytes())
        view = {"buffer": 0, "byteOffset": off, "byteLength": arr.nbytes}
        if ziel_art:
            view["target"] = ziel_art
        views.append(view)
        acc = {"bufferView": len(views) - 1, "componentType": komp, "count": int(arr.shape[0]), "type": typ}
        if normiert:
            acc["normalized"] = True
        if minmax:
            acc["min"] = [float(v) for v in arr.min(0)]
            acc["max"] = [float(v) for v in arr.max(0)]
        accessors.append(acc)
        return len(accessors) - 1

    FLOAT, UBYTE, USHORT, UINT = 5126, 5121, 5123, 5125
    typen = {1: "SCALAR", 2: "VEC2", 3: "VEC3", 4: "VEC4"}

    # Knoten: 0 Wurzel (y oben, Meter), dann Knochen, dann Netze
    rot = [-math.sqrt(0.5), 0, 0, math.sqrt(0.5)]
    nodes = [{"name": "Figur", "rotation": rot, "scale": [0.01, 0.01, 0.01], "children": []}]
    bi = {}
    for b in namen:
        bi[b] = len(nodes)
        e = eltern[b]
        t = kopf[b] - (kopf[e] if e else 0)
        nodes.append({"name": b.replace(".", "_"), "translation": [float(v) for v in t]})
    for b in namen:
        e = eltern[b]
        if e:
            nodes[bi[e]].setdefault("children", []).append(bi[b])
        else:
            nodes[0]["children"].append(bi[b])
    # Inverse Bindematrizen: Lage des Knochens im Raum der Wurzel, invertiert (Netzpunkte liegen im selben Raum)
    ibm = []
    for b in namen:
        m = np.eye(4)
        m[:3, 3] = kopf[b]
        ibm.append(np.linalg.inv(m).T.reshape(-1))
    ibm_acc = ablegen(np.array(ibm, dtype=np.float32), "MAT4", FLOAT)
    skin = {"joints": [bi[b] for b in namen], "inverseBindMatrices": ibm_acc, "skeleton": bi[namen[0]]}

    materials, meshes = [], []
    farben = {"Haut": [0.85, 0.63, 0.48, 1], "Hair": [0.29, 0.17, 0.1, 1], "Eye_L": [1, 1, 1, 1], "Eyelash": [0.16, 0.1, 0.08, 1]}
    for nz in netze:
        materials.append({"name": nz["material"], "pbrMetallicRoughness": {"baseColorFactor": farben[nz["material"]], "metallicFactor": 0, "roughnessFactor": 0.6}, "doubleSided": nz["material"] in ("Hair", "Eyelash")})
        attr = {
            "POSITION": ablegen(nz["pos"].astype(np.float32), "VEC3", FLOAT, 34962, True),
            "NORMAL": ablegen(nz["nrm"].astype(np.float32), "VEC3", FLOAT, 34962),
            "JOINTS_0": ablegen(nz["j"].astype(np.uint8), "VEC4", UBYTE, 34962),
            "WEIGHTS_0": ablegen(gewichte_byte(nz["w"]), "VEC4", UBYTE, 34962, normiert=True),
        }
        for k, v in nz["attr"].items():
            art = "FLOAT"
            if isinstance(v, tuple):
                v, art = v
            v = np.asarray(v, dtype=np.float64)
            if v.ndim == 1:
                v = v[:, None]
            if art == "BYTE":
                attr[k] = ablegen(np.round(np.clip(v, -1, 1) * 127).astype(np.int8), typen[v.shape[1]], 5120, 34962, normiert=True)
            elif art == "SHORT":
                attr[k] = ablegen(np.round(np.clip(v, -1, 1) * 32767).astype(np.int16), typen[v.shape[1]], 5122, 34962, normiert=True)
            else:
                attr[k] = ablegen(v.astype(np.float32), typen[v.shape[1]], FLOAT, 34962)
        tri = nz["tri"].reshape(-1)
        idx = ablegen(tri.astype(np.uint16 if tri.max() < 65535 else np.uint32), "SCALAR", USHORT if tri.max() < 65535 else UINT, 34963)
        prim = {"attributes": attr, "indices": idx, "material": len(materials) - 1}
        mesh = {"name": nz["name"], "primitives": [prim]}
        if nz["morph"]:
            prim["targets"] = [{"POSITION": duenn(d.astype(np.float32))} for d in nz["morph"].values()]
            mesh["weights"] = [0.0] * len(nz["morph"])
            mesh["extras"] = {"targetNames": list(nz["morph"].keys())}
        meshes.append(mesh)
        nodes.append({"name": nz["name"], "mesh": len(meshes) - 1, "skin": 0})
        nodes[0]["children"].append(len(nodes) - 1)

    gltf = {
        "asset": {"version": "2.0", "generator": "TrainMe figur_bauen.py", "copyright": "Grundlage: MakeHuman (CC0 1.0)"},
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": nodes,
        "meshes": meshes,
        "materials": materials,
        "skins": [skin],
        "accessors": accessors,
        "bufferViews": views,
        "buffers": [{"byteLength": len(puffer)}],
    }
    js = json.dumps(gltf, separators=(",", ":")).encode()
    js += b" " * ((4 - len(js) % 4) % 4)
    while len(puffer) % 4:
        puffer.append(0)
    os.makedirs(os.path.dirname(ziel) or ".", exist_ok=True)
    with open(ziel, "wb") as f:
        f.write(struct.pack("<III", 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(puffer)))
        f.write(struct.pack("<II", len(js), 0x4E4F534A) + js)
        f.write(struct.pack("<II", len(puffer), 0x004E4942) + bytes(puffer))


if __name__ == "__main__":
    zw = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/.cache/trainme-makehuman")
    ziel = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(__file__), "..", "..", "src", "figur", "figur.glb")
    bauen(zw, ziel)
