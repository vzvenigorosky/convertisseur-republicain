#!/usr/bin/env python3
"""Génère MANQUANTS.txt à partir de data.json.

Liste, pour chaque jour du calendrier républicain, les champs manquants
(urlEncy, urlImage, urlWiki, latin), en distinguant les vraies lacunes des
champs sans objet (nom latin d'un outil ou d'un minéral, par exemple).

Usage : python3 scripts/list_missing.py
"""
import json
import os
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data.json")
OUT = os.path.join(ROOT, "MANQUANTS.txt")

MONTHS = [
    "Vendémiaire", "Brumaire", "Frimaire", "Nivôse", "Pluviôse", "Ventôse",
    "Germinal", "Floréal", "Prairial", "Messidor", "Thermidor", "Fructidor",
]


def main():
    with open(DATA, encoding="utf-8") as f:
        data = json.load(f)
    daily = data["dailyItems"]
    compl = data["complementaryItems"]

    no_ency = []       # (mois, jour, nom)
    other_missing = []  # (label, champs)
    no_latin = []      # (mois, jour, nom)

    for mi in range(12):
        for dj in range(30):
            x = daily[mi][dj]
            label = f"{MONTHS[mi]} {dj + 1:>2} — {x['name']}"
            if not x.get("urlEncy"):
                no_ency.append((MONTHS[mi], dj + 1, x["name"]))
            if not x.get("latin"):
                no_latin.append((MONTHS[mi], dj + 1, x["name"]))
            missing = [f for f in ("urlImage", "urlWiki") if not x.get(f)]
            if missing:
                other_missing.append((label, ", ".join(missing)))

    for j, x in enumerate(compl):
        missing = [f for f in ("urlEncy", "urlImage", "urlWiki", "latin")
                   if not x.get(f)]
        if missing:
            other_missing.append((f"Jour complémentaire {j + 1} — {x['name']}",
                                  ", ".join(missing)))

    lines = []
    lines.append("CHAMPS MANQUANTS — Convertisseur Républicain")
    lines.append("=" * 52)
    lines.append(f"Généré le {date.today().isoformat()} depuis data.json "
                 f"(scripts/list_missing.py).")
    lines.append("")

    lines.append(f"SECTION A — Sans article d'Encyclopédie ({len(no_ency)})")
    lines.append("-" * 52)
    lines.append("Vedette absente de L'Encyclopédie de Diderot (souvent des")
    lines.append("espèces du Nouveau Monde ou quelques outils).")
    lines.append("")
    for mois, jour, nom in no_ency:
        lines.append(f"  {mois} {jour:>2} — {nom}")
    lines.append("")

    lines.append(f"SECTION B — Autres champs manquants ({len(other_missing)})")
    lines.append("-" * 52)
    lines.append("Lacunes réelles à combler (illustration ou lien Wikipédia).")
    lines.append("")
    for label, champs in other_missing:
        lines.append(f"  {label}  →  {champs}")
    lines.append("")

    lines.append(f"SECTION C — Sans nom latin ({len(no_latin)}) — NORMAL")
    lines.append("-" * 52)
    lines.append("Jours dédiés à un outil, un minéral ou un produit : aucun nom")
    lines.append("binomial latin ne s'applique. Ce n'est PAS une lacune.")
    lines.append("")
    for mois, jour, nom in no_latin:
        lines.append(f"  {mois} {jour:>2} — {nom}")
    lines.append("")

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Écrit {OUT}")
    print(f"  Section A (sans Encyclopédie) : {len(no_ency)}")
    print(f"  Section B (autres manquants)  : {len(other_missing)}")
    print(f"  Section C (sans latin, normal): {len(no_latin)}")


if __name__ == "__main__":
    main()
