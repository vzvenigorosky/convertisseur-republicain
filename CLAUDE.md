# CLAUDE.md

Instructions pour Claude travaillant sur ce dépôt. Complète
`.github/copilot-instructions.md` (conventions de code, build/test/lint) sans le dupliquer : ce fichier
se concentre sur le contexte de décision, les pièges connus et les attentes de méthode.

## Objet du projet

Convertisseur de date grégorienne/julienne vers le calendrier républicain français, en site statique
sans build. Deux colonnes de contenu enrichi (fête du jour + Encyclopédie de Diderot) alimentées par
`data.json`. Voir `README.md` pour la méthode de calcul (équinoxe vs. Romme) et la précision de la table
d'équinoxes (`scripts/gen_equinox.py`).

## Architecture — pourquoi elle est ainsi

- **Pas de build, pas de framework, pas de dépendance npm runtime.** C'est un choix assumé, pas un
  oubli : le projet doit rester ouvrable directement et compréhensible sans outillage. Ne propose pas
  d'introduire React/Vite/webpack/TypeScript "pour la maintenabilité" — le coût dépasserait le bénéfice
  pour un site de cette taille.
- **`script.js` mélange données et logique** (table `equinoxDates` embarquée + calcul + DOM). C'est une
  vraie dette (voir issue #13), mais l'extraction doit se faire en script classique, pas en module ES —
  voir la contrainte `file://`/CORS ci-dessous, découverte et vérifiée empiriquement pendant l'audit du
  09/2026 (Playwright/Chromium : `fetch()` et le chargement de modules ES depuis une page `file://` sont
  bloqués par CORS). Toute proposition de refactor qui suppose `<script type="module">` casse l'usage
  local documenté par le README et doit être rejetée ou adaptée.
- **`dailyItems`/`complementaryItems` sont des tableaux positionnels**, pas des objets indexés par nom
  de jour. C'est fragile par construction (un ajout/suppression décale tout ce qui suit) mais c'est la
  structure existante ; ne la change pas sans un ticket dédié qui migre toutes les données en même temps.

## Pièges connus (ne pas les redécouvrir à chaque fois)

- **`file://` + Chromium ne charge pas `data.json`** (CORS). Le calcul de date fonctionne quand même
  (dégradation partielle), mais tout le contenu enrichi manque silencieusement — voir issue #11 pour le
  diagnostic complet et le correctif attendu (l'erreur doit rester visible ; le README doit documenter
  l'alternative avec un serveur local).
- **La zone d'erreur (`#error-area`) est réinitialisée au tout début du handler de clic** du bouton
  Convertir, y compris lors du clic automatique de pré-remplissage au chargement de la page. Toute
  logique qui affiche un message dans cette zone avant que ce clic automatique ne survienne verra son
  message effacé avant d'être vu — vérifié avec un harnais Node (DOM factice). Voir issue #11.
- **La numérotation de l'« An » républicain saute de An I (1792) à An -1 (1791) sans An 0** — ce n'est
  pas un bug, c'est une convention sans année zéro (comme 1 av. J.-C./1 apr. J.-C.), distincte de la
  numérotation *astronomique* utilisée pour les années grégoriennes en entrée (qui, elle, a un an 0).
  Documentée dans le README suite à l'issue #19 ; à connaître avant de « corriger » ce saut.
- **L'iframe Encyclopédie n'a pas de repli en cas d'échec de chargement**, contrairement à l'image
  (`image.onerror`). Une iframe bloquée par `X-Frame-Options` ne déclenche pas d'évènement fiable — un
  correctif naïf par copier-coller du repli de l'image ne fonctionnera pas. Voir issue #12.

## Stratégie de tests

Aucun test automatisé n'existe à ce jour (09/2026). La priorité, une fois l'extraction en module
(#13) faite, est de couvrir : les conversions JDN (grégorien/julien, aller-retour), la bascule du
calendrier grégorien du 15 octobre 1582, la recherche d'intervalle d'équinoxe (bornes de plage,
jours complémentaires 5 vs 6 selon année sextile), et la règle de bissextilité de Romme. Voir #14
pour la liste de cas de référence déjà vérifiés manuellement pendant l'audit (ex. 22 septembre 1792 →
1 Vendémiaire An I, cohérent avec la commémoration `Vendémiaire-1` de `data.json`).

## Conventions de contribution

- Commentaires et texte utilisateur en français.
- Titres d'issues `[Catégorie] Description` — voir `.github/copilot-instructions.md` pour la liste des
  catégories et la signification des labels `ai:trivial`/`ai:plan`/`ai:thinking`.
- `data.json` : passer par `scripts/list_missing.py` avant de committer un changement de données pour
  vérifier qu'aucun champ réel n'est resté vide par erreur.

## Checkpoints attendus pour un travail de plusieurs étapes

Pour tout ticket `ai:plan`/`ai:thinking` qui touche plusieurs fichiers (ex. #13 → #14 → #18), livrer par
étapes qui laissent chacune le dépôt dans un état valide et ouvrable :
1. Un changement structurel (ex. extraction de module) ne doit **rien** changer d'observable — valider
   par comparaison manuelle avant/après sur quelques dates de référence tant qu'il n'y a pas de suite de
   tests.
2. Une fois un filet de tests en place, l'utiliser comme preuve de non-régression pour l'étape suivante
   plutôt que de re-justifier manuellement chaque fois.
3. Ne pas combiner un changement structurel et un changement de comportement dans la même PR.

## Où Claude doit rester prudent

- Toute modification de la logique de calcul de date (`calculateEquinoxDateUsingJDN`,
  `calculateRommeDateUsingJDN`, les fonctions JDN) : ce sont les seules parties du projet où une erreur
  discrète (un `+1`/`-1`, une borne `<`/`<=`) produit un résultat plausible mais faux, invisible sans
  test contre des dates historiques connues. Toujours vérifier contre au moins 22 septembre 1792 → 1
  Vendémiaire An I avant de considérer un changement dans cette zone comme terminé.
- Toute modification de la structure de `data.json` (ajout/suppression d'un jour, changement de forme
  des clés de `commemorations`) : risque de décalage silencieux de tous les jours suivants. Toujours
  revérifier les invariants (12×30, 6, clés bien formées) avant de committer.
- Ne pas élargir le périmètre d'un ticket `ai:trivial` en profitant de l'occasion pour refactorer autour
  — ouvrir un ticket séparé à la place.
