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
  _FREI    Haare: 0 fest am Kopf, 1 frei hängend (Pferdeschwanz)
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
    "brust": 0.5,
    "herkunft": {"caucasian": 0.6, "african": 0.15, "asian": 0.25},
}
# Weicheres, freundliches Gesicht und schlanker Hals (Formziele von MakeHuman, Anteil 0..1)
GESICHT = {
    "head/head-oval": 0.5,
    "chin/chin-width-decr": 0.4,
    "chin/chin-prominent-decr": 0.3,
    "forehead/forehead-nubian-decr": 0.3,
    "eyes/l-eye-scale-incr": 0.25,
    "eyes/r-eye-scale-incr": 0.25,
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
        g = gew[rows]
        idx = np.argsort(-g, axis=1)[:, :4]
        w = np.take_along_axis(g, idx, axis=1)
        leer = w.sum(1) <= 0
        idx[leer, 0] = ki["head"]
        w[leer, 0] = 1
        w = w / w.sum(1, keepdims=True)
        return idx.astype(np.uint8), w.astype(np.float32)

    def summe(rows, muster):
        sp = [ki[b] for b in namen if any(b.startswith(m) for m in muster)]
        return gew[rows][:, sp].sum(1)

    netze = []

    # ---------- Körper
    ecken = np.unique(koerper_q)
    neu = -np.ones(n, dtype=np.int64)
    neu[ecken] = np.arange(len(ecken))
    tri = neu[dreiecke(koerper_q)]
    p = pos[ecken]
    kanten = nachbarn(len(p), tri)
    p = puppe(p, kanten, kopf, lambda m: summe(ecken, m))
    nrm = normalen(p, tri)
    kleid, tuch, tuchn, gesicht = kleidung(p, nrm, tri, kanten, ecken, kopf, lambda m: summe(ecken, m))
    j, w = vier(ecken)
    netze.append({
        "name": "Koerper", "material": "Haut", "pos": p, "nrm": nrm, "tri": tri, "j": j, "w": w,
        "attr": {"_KLEID": kleid, "_TUCH": tuch, "_TUCHN": tuchn, "_GESICHT": gesicht},
        "morph": {"Mouth_Smile": laecheln[ecken], "Eyes_Blink": blinzeln[ecken]},
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

    # ---------- Haare: Kappe über der Kopfhaut und Pferdeschwanz
    hp, ht, frei, strang = haare(p, nrm, tri, gesicht[:, 2], kopf)
    netze.append({
        "name": "Haare", "material": "Hair", "pos": hp, "nrm": normalen(hp, ht), "tri": ht,
        "j": np.tile(np.array([[ki["head"], 0, 0, 0]], np.uint8), (len(hp), 1)), "w": np.tile(np.array([[1, 0, 0, 0]], np.float32), (len(hp), 1)),
        "attr": {"_FREI": frei, "_STRANG": strang}, "morph": {},
    })

    schreiben(ziel, netze, namen, eltern, kopf)
    hoehe = p[:, 2].max()
    print("fertig:", ziel, "Höhe %.1f cm, Hüfte %.1f cm, %d Knochen" % (hoehe, kopf["root"][2], len(namen)))
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


def kleidung(p, nrm, tri, kanten, ecken, kopf, gewicht):
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
    kante = spitze[2] + 2.5 + 0.08 * s * s + 5 * hinten
    traeger = np.maximum(10.5 - s, spitze[2] + 6 - z)
    top_d = np.minimum(np.minimum(np.minimum(np.minimum(z - unterbrust, kante - z), hals_d), achsel), traeger)
    eng_d = np.minimum(np.minimum(z - (schritt - 5), (taille - 1.5) - z), achsel)
    kleid = np.clip(np.stack([shirt_d, shorts_d, top_d, eng_d], 1), -6, 6).astype(np.float32)
    shirt = stufe(-1.0, 0.5, shirt_d)
    shorts = stufe(-1.0, 0.5, shorts_d)

    # Versatz der lockeren Kleidung: Stoff steht ab und fällt vorn von der Brust, hinten von den Schulterblättern
    versatz = nrm * (np.maximum(shirt * 1.5, shorts * 2.0))[:, None]
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
    fall = np.zeros(len(p))
    for i in np.where(rumpf_shirt)[0]:
        best = r[i]
        for dz in range(0, 40):
            v = rmax.get((wb[i], zb[i] + dz))
            if v is not None:
                best = max(best, v - dz * nz * 0.035)
        fall[i] = best - r[i]
    radial = np.stack([np.cos(w), np.sin(w), np.zeros_like(w)], 1)
    versatz += radial * (0.85 * fall * shirt)[:, None]
    # Shorts leicht ausgestellt
    versatz += nrm * (shorts * np.clip((huefte - z) * 0.06, 0, 1.5))[:, None]
    versatz = glaetten(versatz, kanten, len(p), 4, (shirt + shorts) > 0)
    tuch = (versatz * np.maximum(shirt, shorts)[:, None] / np.maximum(np.maximum(shirt, shorts), 1e-6)[:, None]).astype(np.float32)
    tuch[(shirt + shorts) <= 0] = 0
    tn = normalen(p + tuch, tri)
    tn = glaetten(tn, kanten, len(p), 10, (shirt + shorts) > 0)
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


def puppe(p, kanten, kopf, gewicht):
    """
    Glatt wie eine Schaufensterpuppe: Brustwarzen und Schritt des Grundnetzes werden weich ausgeglichen, damit
    sie sich weder unter enger Kleidung noch in der Prüfansicht abzeichnen.
    """
    x, y, z = p[:, 0], p[:, 1], p[:, 2]
    s = np.abs(x)
    rumpf = (gewicht(["upperarm", "lowerarm", "wrist", "finger", "upperleg", "lowerleg", "neck", "head"]) < 0.3)
    zone = rumpf & (z > kopf["spine03"][2]) & (z < kopf["upperarm01.L"][2]) & (s > 3) & (s < 13)
    spitze = p[zone][np.argmin(y[zone])]
    huefte = kopf["upperleg01.L"][2]
    schritt = z[(s < 1.0) & (z < huefte) & (z > kopf["lowerleg01.L"][2])].min()
    brust = 1 - stufe(1.6, 3.2, np.hypot(s - abs(spitze[0]), z - spitze[2]))
    brust *= (y < spitze[1] + 3)
    mitte = (1 - stufe(3.0, 5.0, s)) * stufe(schritt - 4, schritt - 2, z) * (1 - stufe(schritt + 7, schritt + 10, z))
    maske = np.maximum(brust, mitte)
    glatt = glaetten(p, kanten, len(p), 25, maske > 0)
    return p + (glatt - p) * maske[:, None]


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


def haare(p, nrm, tri, feld, kopf):
    kh = kopf["head"]
    # Kappe: Kopfhaut über dem Ansatz, nach außen versetzt (oben mehr Volumen, am Ansatz hauchdünn)
    nah = (feld > -1.5)[tri].any(1)
    kp, kn, kf, kt = kappe_schneiden(p, nrm, tri[nah], feld)
    benutzt = np.unique(kt)
    um = -np.ones(len(kp), dtype=np.int64)
    um[benutzt] = np.arange(len(benutzt))
    kp, kn, kf, kt = kp[benutzt], kn[benutzt], kf[benutzt], um[kt]
    dicke = 0.1 + 1.25 * stufe(0, 4.5, kf)
    kp = kp + kn * dicke[:, None]

    # Gekämmt zum Zopfgummi: Strähnen laufen sternförmig zum Anker am Hinterkopf
    hinten = p[feld > 0][:, 1].max()
    anker = np.array([0, hinten - 1.2, kh[2] + 5.0])
    mitte = np.array([0, kh[1] - 1.5, kh[2] + 7])
    achse = (mitte - anker) / np.linalg.norm(mitte - anker)
    e1 = np.array([1.0, 0, 0])
    e2 = np.cross(achse, e1)
    d = kp - anker
    phi = np.arctan2(d @ e2, d @ e1)
    laenge = np.linalg.norm(d, axis=1)
    strang = [np.stack([phi * 6.0, laenge], 1)]
    frei = [np.zeros(len(kp))]

    # Pferdeschwanz: ovales Rohr, beginnt im Kopf, Gummi am Austritt, fällt hinten über den Nacken
    weg = np.array([anker - [0, 1.5, 0], anker + [0, 1.2, -0.4], anker + [0, 3.2, -4.5], anker + [0, 4.2, -11], anker + [0, 4.0, -19], anker + [0, 3.2, -26], anker + [0, 2.6, -31]])
    stufen, seg = 52, 20
    pts, tris, fr, st = [], [], [], []
    vorher = None
    lauf = 0.0
    for i in range(stufen + 1):
        t = i / stufen
        a = t * (len(weg) - 1)
        k = min(int(a), len(weg) - 2)
        u = a - k
        p0, p1, p2, p3 = weg[max(k - 1, 0)], weg[k], weg[k + 1], weg[min(k + 2, len(weg) - 1)]
        c = 0.5 * ((2 * p1) + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u * u + (-p0 + 3 * p1 - 3 * p2 + p3) * u ** 3)
        if vorher is not None:
            lauf += np.linalg.norm(c - vorher)
        vorher = c
        r = np.interp(t, [0, 0.05, 0.075, 0.1, 0.25, 0.6, 0.88, 1.0], [1.4, 1.4, 1.25, 1.9, 2.8, 2.4, 1.3, 0.2])
        for kk in range(seg):
            ph = 2 * math.pi * kk / seg
            pts.append(c + [r * math.cos(ph), r * 0.72 * math.sin(ph), 0])
            fr.append(max(1e-3, stufe(0.06, 0.35, t)))
            st.append([ph * 6.0, lauf])
    basis = len(kp)
    for i in range(stufen):
        for kk in range(seg):
            a, b = basis + i * seg + kk, basis + i * seg + (kk + 1) % seg
            tris += [[a, b, a + seg], [b, b + seg, a + seg]]
    for ende, ring, fe in ((weg[0], 0, 1e-3), (weg[-1] + [0, 0, -0.3], stufen, 1.0)):
        pts.append(ende)
        fr.append(fe)
        st.append([0, lauf if ring else 0])
        mi = basis + len(pts) - 1
        for kk in range(seg):
            a, b = basis + ring * seg + kk, basis + ring * seg + (kk + 1) % seg
            tris.append([a, mi, b] if ring else [b, mi, a])
    hp = np.concatenate([kp, np.array(pts)])
    ht = np.concatenate([kt, np.array(tris)])
    frei = np.concatenate([frei[0], np.array(fr)]).astype(np.float32)
    strang = np.concatenate([strang[0], np.array(st)]).astype(np.float32)
    return hp, ht, frei, strang


# ---------------------------------------------------------------- glb schreiben


def schreiben(ziel, netze, namen, eltern, kopf):
    puffer = bytearray()
    views, accessors = [], []

    def ablegen(arr, typ, komp, ziel_art=None, minmax=False):
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
            "WEIGHTS_0": ablegen(nz["w"].astype(np.float32), "VEC4", FLOAT, 34962),
        }
        for k, v in nz["attr"].items():
            v = np.asarray(v, dtype=np.float32)
            if v.ndim == 1:
                v = v[:, None]
            attr[k] = ablegen(v, typen[v.shape[1]], FLOAT, 34962)
        tri = nz["tri"].reshape(-1)
        idx = ablegen(tri.astype(np.uint16 if tri.max() < 65535 else np.uint32), "SCALAR", USHORT if tri.max() < 65535 else UINT, 34963)
        prim = {"attributes": attr, "indices": idx, "material": len(materials) - 1}
        mesh = {"name": nz["name"], "primitives": [prim]}
        if nz["morph"]:
            prim["targets"] = [{"POSITION": ablegen(d.astype(np.float32), "VEC3", FLOAT, 34962, True)} for d in nz["morph"].values()]
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
