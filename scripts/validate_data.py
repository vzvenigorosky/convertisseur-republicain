#!/usr/bin/env python3
"""Valide la structure de data.json pour la CI."""

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_DATA_PATH = ROOT / "data.json"
MONTHS = {
    "Vendémiaire",
    "Brumaire",
    "Frimaire",
    "Nivôse",
    "Pluviôse",
    "Ventôse",
    "Germinal",
    "Floréal",
    "Prairial",
    "Messidor",
    "Thermidor",
    "Fructidor",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Valide la structure de data.json."
    )
    parser.add_argument(
        "path",
        nargs="?",
        default=str(DEFAULT_DATA_PATH),
        help="Chemin du fichier JSON à valider.",
    )
    return parser.parse_args()


def add_error(errors: list[str], message: str) -> None:
    errors.append(message)


def load_json(path: Path) -> object:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def validate_required_text_fields(
    item: object,
    required_fields: tuple[str, ...],
    label: str,
    errors: list[str],
) -> None:
    if not isinstance(item, dict):
        add_error(errors, f"{label} doit être un objet JSON.")
        return

    for field in required_fields:
        value = item.get(field)
        if not isinstance(value, str) or not value.strip():
            add_error(
                errors,
                f"{label} doit contenir un champ texte non vide `{field}`.",
            )


def validate_daily_items(daily_items: object, errors: list[str]) -> None:
    if not isinstance(daily_items, list):
        add_error(errors, "`dailyItems` doit être un tableau.")
        return

    if len(daily_items) != 12:
        add_error(
            errors,
            f"`dailyItems` doit contenir exactement 12 mois (trouvé : {len(daily_items)}).",
        )

    for month_index, month_items in enumerate(daily_items):
        label = f"`dailyItems[{month_index}]`"
        if not isinstance(month_items, list):
            add_error(errors, f"{label} doit être un tableau de 30 jours.")
            continue

        if len(month_items) != 30:
            add_error(
                errors,
                f"{label} doit contenir exactement 30 jours (trouvé : {len(month_items)}).",
            )

        for day_index, day_item in enumerate(month_items):
            validate_required_text_fields(
                day_item,
                ("name", "description"),
                f"`dailyItems[{month_index}][{day_index}]`",
                errors,
            )


def validate_complementary_items(
    complementary_items: object,
    errors: list[str],
) -> None:
    if not isinstance(complementary_items, list):
        add_error(errors, "`complementaryItems` doit être un tableau.")
        return

    if len(complementary_items) != 6:
        add_error(
            errors,
            "`complementaryItems` doit contenir exactement 6 éléments "
            f"(trouvé : {len(complementary_items)}).",
        )

    for day_index, day_item in enumerate(complementary_items):
        validate_required_text_fields(
            day_item,
            ("name", "description"),
            f"`complementaryItems[{day_index}]`",
            errors,
        )


def validate_commemoration_key(key: object, errors: list[str]) -> None:
    if not isinstance(key, str):
        add_error(errors, "Chaque clé de `commemorations` doit être une chaîne.")
        return

    if key.startswith("Complémentaires-"):
        day_text = key.removeprefix("Complémentaires-")
        if not day_text.isdigit() or not 1 <= int(day_text) <= 6:
            add_error(
                errors,
                "Clé de `commemorations` invalide : "
                f"`{key}` (attendu : `Complémentaires-N` avec N entre 1 et 6).",
            )
        return

    if "-" not in key:
        add_error(
            errors,
            "Clé de `commemorations` invalide : "
            f"`{key}` (attendu : `Mois-JJ`).",
        )
        return

    month_name, day_text = key.rsplit("-", 1)
    if month_name not in MONTHS or not day_text.isdigit() or not 1 <= int(day_text) <= 30:
        add_error(
            errors,
            "Clé de `commemorations` invalide : "
            f"`{key}` (attendu : `Mois-JJ` avec mois valide et jour entre 1 et 30).",
        )


def validate_commemorations(commemorations: object, errors: list[str]) -> None:
    if not isinstance(commemorations, dict):
        add_error(errors, "`commemorations` doit être un objet JSON.")
        return

    for key, entries in commemorations.items():
        validate_commemoration_key(key, errors)

        if not isinstance(entries, list):
            add_error(
                errors,
                f"`commemorations[{key}]` doit être un tableau de commémorations.",
            )
            continue

        for entry_index, entry in enumerate(entries):
            validate_required_text_fields(
                entry,
                ("title", "description"),
                f"`commemorations[{key}][{entry_index}]`",
                errors,
            )


def validate_data(data: object) -> list[str]:
    errors: list[str] = []

    if not isinstance(data, dict):
        return ["La racine du fichier JSON doit être un objet."]

    validate_daily_items(data.get("dailyItems"), errors)
    validate_complementary_items(data.get("complementaryItems"), errors)
    validate_commemorations(data.get("commemorations"), errors)

    return errors


def main() -> int:
    args = parse_args()
    path = Path(args.path)

    if not path.is_absolute():
        path = Path(os.getcwd()) / path

    try:
        data = load_json(path)
    except FileNotFoundError:
        print(f"Erreur : fichier introuvable : {path}", file=sys.stderr)
        return 1
    except json.JSONDecodeError as exc:
        print(
            "Erreur JSON dans "
            f"{path}:{exc.lineno}:{exc.colno} : {exc.msg}",
            file=sys.stderr,
        )
        return 1

    errors = validate_data(data)
    if errors:
        print(f"Validation échouée pour {path} :", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print(f"Validation réussie pour {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
