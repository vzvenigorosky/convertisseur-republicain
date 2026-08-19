#!/usr/bin/env python3
"""Génère les dates d'équinoxe d'automne (proleptique grégorien) pour étendre
la table `equinoxDates` de script.js.

Méthode : Meeus, *Astronomical Algorithms*, ch. 27 (équinoxe moyen + 24 termes
périodiques), puis correction ΔT (polynômes Espenak–Meeus) pour passer du Temps
Dynamique au Temps Universel, enfin passage au méridien de Paris (~2.337° E).
On émet la date civile parisienne de l'instant de l'équinoxe, en calendrier
proleptique grégorien, au format `{ month, day }` attendu par la table.

Aucune dépendance externe, aucun accès réseau.

Usage :
  python3 scripts/gen_equinox.py --validate         # compare aux lignes existantes
  python3 scripts/gen_equinox.py --emit -599 999    # imprime les lignes JS
"""
import argparse
import math
import re
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPT = os.path.join(ROOT, "script.js")

PARIS_LON_EAST_DEG = 2.337229  # Observatoire de Paris

# Meeus table 27.C — termes périodiques (A, B°, C°)
PERIODIC = [
    (485, 324.96, 1934.136), (203, 337.23, 32964.467), (199, 342.08, 20.186),
    (182, 27.85, 445267.112), (156, 73.14, 45036.886), (136, 171.52, 22518.443),
    (77, 222.54, 65928.934), (74, 296.72, 3034.906), (70, 243.58, 9037.513),
    (58, 119.81, 33718.147), (52, 297.17, 150.678), (50, 21.02, 2281.226),
    (45, 247.54, 29929.562), (44, 325.15, 31555.956), (29, 60.93, 4443.417),
    (18, 155.12, 67555.328), (17, 288.79, 4562.452), (16, 198.04, 62894.029),
    (14, 199.76, 31436.921), (12, 95.39, 14577.848), (12, 287.11, 31931.756),
    (12, 320.81, 34777.259), (9, 227.73, 1222.114), (8, 15.45, 16859.074),
]


def _jde0_september(year):
    """Instant moyen (JDE) de l'équinoxe de septembre — Meeus 27.A / 27.B."""
    if year < 1000:
        y = year / 1000.0
        return (1721325.70455 + 365242.49558 * y - 0.11677 * y**2
                - 0.00297 * y**3 + 0.00074 * y**4)
    y = (year - 2000) / 1000.0
    return (2451810.21715 + 365242.01767 * y - 0.11575 * y**2
            + 0.00337 * y**3 + 0.00078 * y**4)


def equinox_jde(year):
    """JDE (Temps Dynamique) de l'équinoxe d'automne, Meeus ch. 27."""
    jde0 = _jde0_september(year)
    T = (jde0 - 2451545.0) / 36525.0
    W = math.radians(35999.373 * T - 2.47)
    dlam = 1 + 0.0334 * math.cos(W) + 0.0007 * math.cos(2 * W)
    S = sum(A * math.cos(math.radians(B + C * T)) for A, B, C in PERIODIC)
    return jde0 + (0.00001 * S) / dlam


def delta_t_seconds(year):
    """ΔT en secondes — polynômes Espenak & Meeus (NASA), plage utile ici."""
    if year < -500:
        u = (year - 1820) / 100.0
        return -20 + 32 * u * u
    if year < 500:
        u = year / 100.0
        return (10583.6 - 1014.41 * u + 33.78311 * u**2 - 5.952053 * u**3
                - 0.1798452 * u**4 + 0.022174192 * u**5 + 0.0090316521 * u**6)
    if year < 1600:
        u = (year - 1000) / 100.0
        return (1574.2 - 556.01 * u + 71.23472 * u**2 + 0.319781 * u**3
                - 0.8503463 * u**4 - 0.005050998 * u**5 + 0.0083572073 * u**6)
    if year < 1700:
        t = year - 1600
        return 120 - 0.9808 * t - 0.01532 * t**2 + t**3 / 7129.0
    if year < 1800:
        t = year - 1700
        return (8.83 + 0.1603 * t - 0.0059285 * t**2 + 0.00013336 * t**3
                - t**4 / 1174000.0)
    if year < 1860:
        t = year - 1800
        return (13.72 - 0.332447 * t + 0.0068612 * t**2 + 0.0041116 * t**3
                - 0.00037436 * t**4 + 0.0000121272 * t**5
                - 0.0000001699 * t**6 + 0.000000000875 * t**7)
    if year < 1900:
        t = year - 1860
        return (7.62 + 0.5737 * t - 0.251754 * t**2 + 0.01680668 * t**3
                - 0.0004473624 * t**4 + t**5 / 233174.0)
    if year < 1920:
        t = year - 1900
        return (-2.79 + 1.494119 * t - 0.0598939 * t**2 + 0.0061966 * t**3
                - 0.000197 * t**4)
    if year < 1941:
        t = year - 1920
        return 21.20 + 0.84493 * t - 0.076100 * t**2 + 0.0020936 * t**3
    # au-delà de 1941 non requis ici
    t = year - 1950
    return 29.07 + 0.407 * t - t**2 / 233.0 + t**3 / 2547.0


def jd_to_proleptic_gregorian(jd):
    """JD → (année, mois, jour[flottant]) en calendrier proleptique grégorien."""
    jd = jd + 0.5
    Z = math.floor(jd)
    F = jd - Z
    alpha = math.floor((Z - 1867216.25) / 36524.25)
    A = Z + 1 + alpha - math.floor(alpha / 4)
    B = A + 1524
    C = math.floor((B - 122.1) / 365.25)
    D = math.floor(365.25 * C)
    E = math.floor((B - D) / 30.6001)
    day = B - D - math.floor(30.6001 * E) + F
    month = E - 1 if E < 14 else E - 13
    year = C - 4716 if month > 2 else C - 4715
    return year, month, day


def equinox_civil_date(year):
    """Date civile parisienne (proleptique grégorien) de l'équinoxe d'automne."""
    jde = equinox_jde(year)                      # Temps Dynamique
    jd_ut = jde - delta_t_seconds(year) / 86400.0  # Temps Universel
    jd_paris = jd_ut + PARIS_LON_EAST_DEG / 360.0  # heure locale de Paris
    y, m, d = jd_to_proleptic_gregorian(jd_paris)
    return m, int(math.floor(d))


# --- Lecture de la table existante pour validation ---
def read_existing_table():
    s = open(SCRIPT, encoding="utf-8").read()
    table = {}
    for mm in re.finditer(r'"?(-?\d+)"?:\s*\{\s*month:\s*(\d+),\s*day:\s*(\d+)\s*\}', s):
        y = int(mm.group(1))
        # ne garder que les entrées de la table equinoxDates (années plausibles)
        if -1000 <= y <= 3000:
            table[y] = (int(mm.group(2)), int(mm.group(3)))
    return table


def validate(ranges):
    table = read_existing_table()
    total = ok = 0
    diffs = []
    for lo, hi in ranges:
        for y in range(lo, hi + 1):
            if y not in table:
                continue
            got = equinox_civil_date(y)
            exp = table[y]
            total += 1
            if got == exp:
                ok += 1
            else:
                diffs.append((y, exp, got))
    print(f"Validation : {ok}/{total} identiques.")
    if diffs:
        print(f"Écarts ({len(diffs)}) :")
        for y, exp, got in diffs[:40]:
            print(f"  {y}: table={exp}  généré={got}  (Δjour={got[1]-exp[1] if got[0]==exp[0] else '±mois'})")
    return ok, total, diffs


def emit(lo, hi):
    for y in range(lo, hi + 1):
        m, d = equinox_civil_date(y)
        print(f"        {y}: {{ month: {m}, day: {d} }},")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--validate", action="store_true")
    ap.add_argument("--emit", nargs=2, type=int, metavar=("LO", "HI"))
    args = ap.parse_args()
    if args.validate:
        validate([(1000, 1100), (1583, 1620), (1792, 1820), (2000, 2020)])
    if args.emit:
        emit(args.emit[0], args.emit[1])
    if not args.validate and not args.emit:
        ap.print_help()


if __name__ == "__main__":
    main()
