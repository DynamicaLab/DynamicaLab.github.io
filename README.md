# Dynamiweb
Site web du groupe dynamica.phy.ulaval.ca


## Membres

### Modifier les membres

1. Ouvrir `_data/members.yml`
2. Modifier les entrées directement.

Les membres sont classés selon : `leaders`, `doctoral`, `master`, `interns`, `formers`. 



## Homepage

### Ajouter un évènement au calendrier

1. Ouvrir `_data/events.yml`
2. Ajouter un évènement directement. La date est dans le format `YYYY-MM-DD`.

Les évènements seront automatiquement ordonnés à l'affichage. Les évènements antérieurs à la date du jour seront cachés.


### Ajouter une nouvelle

Toutes les nouvelles sont dans le dossier `_posts/news/`. Le nom du fichier doit respecter le format : `YYYY-MM-DD-{TITLE}.md` pour que les nouvelles soient correctement ordonnées sur le site.

Les fichiers des nouvelles ont un format standard:

```
---
layout: post
title:  "Title"
date:   YYYY-MM-DD
published: True
type: "post"
imagesrc: "IMAGES" [Optional]
---

Write anything.
```

Dans l'en-tête du fichier, on retrouve la date (ce sera celle affichée sur le site, idéalement la même que dans le nom du fichier mais peut être différente). Il est important de conserver `layout: post` pour obtenir le bon rendu. Le tag `imagesrc` permet d'afficher une image thumbnail sur le site. Les images doivent être placées dans `/assets/images/posts/`. À vous de maintenir un certain ordre dans les assets. 

Le contenu peut être écrit en mardown ou en HTML. Pour rajouter une image, utilisez le format:

```
<img class="block-image" src="default.jpg">
<caption>Insert a caption here</caption>
```



## Publications

### Ajouter un article

1. Ouvrir `_data/publications.yml`.
2. Ajouter une entrée sous `articles:`

Voici un exemple reconnu:

```
  - title : "Smeared phase transition of percolation on real complex networks"
    authors : "Laurent Hébert-Dufresne, Antoine Allard"
    year: 2019
    journal: Phys. Rev. Research
    edition: "1"
    pagenumber: "013009"
    arxiv : "https://arxiv.org/abs/1810.00735"
    fulltext: "https://doi.org/10.1103/PhysRevResearch.1.013009"
 ```
   
Si l'article est en soumission, utilisez l'attribue `insubmission: True` comme dans l'exemple:

```
  - title : "On the accuracy of message-passing approaches to percolation in complex networks"
    authors : "Antoine Allard, Laurent Hébert-Dufresne"
    arxiv : "https://arxiv.org/abs/1906.10377"
    year : 2019
    insubmission: True
```

>>> Il n'est pas nécessaire d'inscrire tous les champs. Le script va s'occuper de placer automatiquement les données qui sont disponibles.


### Ajouter une présentation

1. Ouvrir `_data/conferences.yml`.
2. Ajouter une entrée sous `conferences:`. Voici un exemple avec tous les champs possibles:

```
  - title : "Predicting synchronization regimes with dimension reduction on modular graphs" 
    authors : "Vincent Thibeault, Guillaume St-Onge, Xavier Roy-Pomerleau, Patrick Desrosiers" 
    conf : "14th International School and Conference on Network Science" 
    abstract : "/assets/pdf/abstracts/netsci2019_abstract_thibeault.pdf" 
    slides : "/assets/pdf/slides/SIAM_edward18.pdf"
    poster : "/assets/pdf/posters/poster.pdf"
    poster_pf: "/assets/pdf/posters/poster_friendly.pdf"
    year : 2019
    country : USA
    city : Burlington
```

S'il y a des fichiers, placez les dans `/assets/pdf/{abstracts/poster/slides}/`. 

Le champ `poster_pf` est pour les versions imprimables.


### Ajouter une thèse

1. Ouvrir `_data/thesis.yml`.
2. Ajouter une entrée sous `thesis:`. Voici un exemple avec tous les champs possibles:

```
  - title: Inférence et réseaux complexes
    authors: Jean-Gabriel Young
    subtitle: Statistical inference and complex networks
    type: Ph.D.
    year: 2018
    fulltext : "/assets/pdf/theses/young18_thesis.pdf"
```
Pour les doctorat: `type: Ph.D.` et pour les maîtrises: `type: M.Sc.`. 


