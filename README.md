# Convertisseur Républicain

Application web statique qui convertit une date grégorienne ou julienne en date
du **calendrier républicain français**. Elle affiche, pour le jour républicain
obtenu, la fête du jour (plante, animal, outil ou minéral), une illustration, un
lien Wikipédia, l'article correspondant de *L'Encyclopédie* de Diderot, ainsi que
les commémorations rattachées à ce jour.

Fichiers : `index.html`, `script.js`, `style.css`, `data.json` (données des jours,
illustrations, liens et commémorations). Aucun build, aucune dépendance : ouvrir
`index.html`.

## Deux méthodes de conversion

- **Équinoxe** — chaque année républicaine commence le jour de l'équinoxe
  d'automne observé au méridien de Paris. C'est la méthode historique (an I à
  an XIV) et celle du décret fondateur.
- **Romme** — règle arithmétique (bissextiles à la manière grégorienne) proposée
  par Gilbert Romme ; valable à partir de l'an I uniquement.

## Précision du calcul par équinoxe

Le calcul par équinoxe repose sur une table, `equinoxDates` dans `script.js`, qui
donne pour chaque année la date (proleptique grégorienne) de l'équinoxe d'automne.
La table couvre **de 600 avant l'ère commune (an −599, numérotation astronomique)
à 2199**. Les bornes de l'interface et de la saisie en sont déduites
automatiquement.

Cette table a deux origines :

| Plage | Origine | Statut |
|-------|---------|--------|
| **1000 → 2199** | table de référence curée (préexistante) | faisant autorité |
| **−599 → 999** | générée hors ligne par `scripts/gen_equinox.py` | approchée avant ~1000 |

### Méthode de génération

`scripts/gen_equinox.py` (Python pur, sans réseau) calcule l'instant de l'équinoxe
d'automne par les formules de Meeus (*Astronomical Algorithms*, ch. 27 : équinoxe
moyen + 24 termes périodiques), applique la correction **ΔT** (polynômes
d'Espenak–Meeus) pour passer du Temps dynamique au Temps universel, corrige au
**méridien de Paris** (~2,337° E), puis retient la date civile parisienne de cet
instant en calendrier proleptique grégorien.

Validation : en régénérant les années de recouvrement et en les comparant à la
table de référence (plages 1000–1100, 1583–1620, 1792–1820, 2000–2020), on obtient
**188/189 dates identiques**. Le seul écart connu est **l'an 1010** : la table
porte le 24 septembre, le générateur le 23 (±1 jour). La table historique n'a pas
été modifiée.

### Pourquoi ±1 jour avant ~1000 ?

Le jour de début d'année dépend du côté de **minuit (heure de Paris)** où tombe
l'instant de l'équinoxe. Or la conversion Temps dynamique → Temps universel passe
par **ΔT**, dont la valeur est de mieux en mieux connue à mesure qu'on approche du
présent, mais dont l'incertitude devient importante dans le passé :

| Époque | ΔT (ordre de grandeur) |
|--------|------------------------|
| an 2000 | ≈ 1 min |
| an 1600 | ≈ 2 min |
| an 1000 | ≈ 26 min |
| an 0 (1 av. ère commune) | ≈ 2,9 h |
| an −599 (600 av. ère commune) | ≈ 5,2 h |

Lorsque l'équinoxe tombe à quelques dizaines de minutes de minuit, l'incertitude
sur ΔT peut faire basculer le jour civil d'une unité — et donc décaler d'un jour
le début de l'année républicaine (et, près de la frontière d'année, le jour
républicain affiché). C'est sans effet notable après ~1600, marginal jusque
vers ~1000, puis potentiellement **±1 jour au-delà**, dans le passé lointain.

L'interface signale cette limite dans la ligne « plage supportée » (« Avant ~1000 :
approximatif (±1 jour, incertitude ΔT) »), et les années républicaines extrapolées
(hors an I–an XIV) sont affichées avec la mention *proleptique*.

### Régénérer / vérifier

```sh
python3 scripts/gen_equinox.py --validate        # compare le générateur à la table
python3 scripts/gen_equinox.py --emit -599 999   # imprime les lignes JS de l'extension
```

## Données manquantes

`scripts/list_missing.py` régénère `MANQUANTS.txt`, qui recense les champs encore
vides (par section, en distinguant les vraies lacunes des champs sans objet comme
le nom latin d'un outil).
