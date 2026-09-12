# Instructions pour GitHub Copilot — Convertisseur Républicain

## Ce que fait le projet

Site web **statique, sans build** qui convertit une date grégorienne/julienne en date du calendrier
républicain français (deux méthodes : équinoxe astronomique et règle arithmétique de Romme), et affiche
pour le jour républicain obtenu une « fête » (plante/animal/outil), une illustration, un lien Wikipédia,
un article de l'Encyclopédie de Diderot et d'éventuelles commémorations.

## Stack et fichiers importants

- `index.html` — structure de la page (3 colonnes : conversion, détails du jour, Encyclopédie).
- `script.js` — toute la logique, dans une unique fermeture `DOMContentLoaded`. Deux parties très
  différentes : (1) la table `equinoxDates` (~2500 lignes, données pures, générées/curées) et (2) la
  logique de calcul et d'affichage (~350 lignes, à partir de `isGregorianLeap`).
- `style.css` — feuille de style unique, avec media queries à 1024px et 600px.
- `data.json` — données du jour : `dailyItems` (tableau **positionnel** de 12 mois × 30 jours),
  `complementaryItems` (tableau positionnel de 6 jours), `commemorations` (dictionnaire indexé par
  `"Mois-JJ"` ou `"Complémentaires-N"`).
- `scripts/gen_equinox.py` — génère/valide les dates d'équinoxe (Meeus + ΔT), **hors ligne, sans
  dépendance**. `scripts/list_missing.py` — audite les champs manquants de `data.json`.
- Aucun `package.json`, aucun bundler, aucun framework. **Ne pas en introduire.**

## Build / test / lint

- Pas de build : ouvrir `index.html` (voir la limitation `file://`/CORS ci-dessous) ou servir le dossier
  avec un serveur statique quelconque (`python3 -m http.server`, `npx serve`, …).
- Scripts Python : `python3 scripts/gen_equinox.py --validate`, `python3 scripts/list_missing.py`.
- Tests JS / CI / lint : en cours de mise en place, voir l'épique
  [#9](https://github.com/vzvenigorosky/convertisseur-republicain/issues/9) et ses sous-tâches. Suivre
  les conventions qui y sont établies une fois ces tickets fermés (ne pas les anticiper autrement).

## Contrainte architecturale à respecter systématiquement

**Ne jamais introduire de module ES (`<script type="module">`), de bundler ou de dépendance npm
runtime.** Une page ouverte en `file://` (l'usage local documenté par le README) voit son `fetch()` et
le chargement de modules ES bloqués par CORS dans Chromium — vérifié empiriquement. Toute extraction de
code doit rester un script classique, éventuellement avec une garde d'export minimale :
```js
if (typeof module !== 'undefined' && module.exports) { module.exports = { /* … */ }; }
```

## Conventions de code

- Style actuel hétérogène : les scripts Python sont propres (docstrings, une instruction par ligne) ;
  une partie de `script.js` est condensée (plusieurs instructions par ligne). Le nettoyage est planifié
  (issues [#16](https://github.com/vzvenigorosky/convertisseur-republicain/issues/16) et
  [#18](https://github.com/vzvenigorosky/convertisseur-republicain/issues/18)) — pour tout **nouveau**
  code, écrire une instruction par ligne, ne pas ajouter de code condensé.
- Rendu DOM : toujours `textContent`/`createElement`, **jamais `innerHTML`** avec du contenu externe ou
  dérivé de données. C'est respecté partout aujourd'hui ; ne pas régresser.
- Commentaires et messages utilisateur en français, comme le reste du projet.
- `data.json` : `dailyItems`/`complementaryItems` sont des tableaux **positionnels** — un ajout ou une
  suppression d'élément décale tous les jours suivants. Ne jamais changer leur longueur sans vérifier
  qu'elle reste 12×30 / 6, respectivement.

## Attentes de tests

- Toute nouvelle fonction de calcul (dates, JDN, années bissextiles, etc.) doit être testable et
  accompagnée d'un test si l'infrastructure de test (issues #13/#14) est en place au moment du travail.
- Toute modification de `data.json` doit rester conforme aux invariants structurels ci-dessus ; utiliser
  `scripts/list_missing.py` avant de committer.
- Ne pas retirer les tests ni les mécanismes de validation existants pour faire passer une CI plus vite.

## Sécurité

- Pas de dépendances npm ⇒ pas de risque de chaîne d'approvisionnement à surveiller.
- Tout lien externe `target="_blank"` doit porter `rel="noopener noreferrer"`.
- Ne jamais utiliser `innerHTML`/`eval` sur du contenu dérivé de `data.json` ou d'une entrée utilisateur.
- `data.json` est chargé par `fetch()` côté client ; il n'y a pas de backend ni de secret à protéger.

## CI / déploiement

Pas de CI actuellement (voir issue
[#15](https://github.com/vzvenigorosky/convertisseur-republicain/issues/15) pour la mise en place d'une
validation automatique de `data.json` et de la syntaxe de `script.js`). Une fois en place, tout PR doit
la passer avant fusion.

## Workflow GitHub Issues / PR

- Titres d'issues au format `[Catégorie] Description` (`[Bug]`, `[Amélioration]`, `[Données]`, `[UX]`,
  `[Doc]`, `[Fiabilité]`, `[Tests]`, `[Qualité]`, `[CI]`), en français.
- Labels `ai:trivial` / `ai:plan` / `ai:thinking` indiquent le niveau d'autonomie attendu d'un agent :
  - **`ai:trivial`** : périmètre borné, bien spécifié, faible risque — Copilot peut implémenter et
    ouvrir une PR de façon autonome.
  - **`ai:plan`** : refactor modéré, migration, changement touchant plusieurs fichiers/conventions —
    proposer un plan ou une PR, mais prévoir une relecture humaine/Claude avant fusion.
  - **`ai:thinking`** : jugement architectural ou de sécurité significatif — à piloter par Claude ou un
    humain, pas en autonomie complète.
- Avant de commencer un ticket `ai:plan` ou `ai:thinking`, lire entièrement sa section « Périmètre » et
  « Dépendances » : ces tickets contiennent souvent une contrainte non évidente (ex. #13 et la
  restriction `file://`/CORS) qui change l'implémentation correcte.
- **S'arrêter et demander une relecture** si : le correctif touche à la logique de calcul de date, à la
  structure de `data.json`, ou nécessite de changer une convention documentée ici.
- Ne pas faire de refactor non demandé. Une PR doit rester bornée à son ticket.
- Valider avant de considérer un ticket terminé : le comportement observable est inchangé (sauf si le
  ticket demande explicitement un changement), les critères d'acceptation du ticket sont cochés, et la
  section « Validation » du ticket a été exécutée.
