# Notes de remplissage — illustrations & Encyclopédie

Objectif : compléter, pour chaque jour, les champs `urlImage`, `urlWiki` et
`urlEncy` dans `data.json`.

## Méthode

- **`urlWiki`** : titre canonique de l'article Wikipédia français (API MediaWiki
  `action=query&prop=pageimages&redirects=1` — on suit les redirections pour
  obtenir le bon article après désambiguïsation).
- **`urlImage`** : image principale (infobox) de l'article, via `piprop=original`
  de l'API `pageimages`. URL directe `upload.wikimedia.org`.
- **`urlEncy`** : article de *L'Encyclopédie, 1re édition* sur Wikisource
  (`https://fr.m.wikisource.org/wiki/L'Encyclopédie/1re_édition/<VEDETTE>`).
  Rempli uniquement lorsque la vedette existe réellement (couverture partielle,
  ~27/30 comme les mois déjà faits) ; laissé vide sinon.

## Accès réseau

La politique réseau de l'environnement doit autoriser les domaines :
`*.wikipedia.org`, `*.wikimedia.org`, `*.wikisource.org`
(sinon 403 sur le proxy d'egress). Ces domaines ont été ajoutés dans
« Domaines autorisés ».

## État

Mois complets avant ce travail : Floréal, Prairial, Messidor.

**Fait** — `urlImage` + `urlWiki` remplis pour les 264 jours restants (Germinal
24 jours + Vendémiaire, Brumaire, Frimaire, Nivôse, Pluviôse, Ventôse, Thermidor,
Fructidor). `urlEncy` rempli là où la vedette de l'*Encyclopédie* existe
réellement (231/264 ; couverture ~23–29 par mois, comme les mois déjà faits).
Les jours sans article correspondant (plantes du Nouveau Monde, outils, etc.)
sont laissés vides à dessein.

Article Wikipédia canonique retenu via le modèle `{{FrRepCalLine}}` de
l'article « Calendrier républicain » (désambiguïsation faisant autorité).
Images vérifiées (HTTP 200) sur `upload.wikimedia.org`.

**Reste éventuellement à faire :**
- **Jours complémentaires** — 6 fêtes (Vertu, Génie, Travail, Opinion,
  Récompenses, Révolution) : pas d'illustration botanique, laissées vides.
- Messidor jour 13 (« Girofle ») : `urlWiki` déjà vide avant ce travail.

## Vérification

Après remplissage, contrôler quelques URL `urlImage` (HTTP 200 sur
`upload.wikimedia.org`) et l'affichage dans `index.html`.
