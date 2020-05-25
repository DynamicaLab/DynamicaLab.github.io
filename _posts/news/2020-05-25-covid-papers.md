---
layout: post
title:  "Better understanding COVID-19 : a brief overview of recent
contributions"
date:   2020-05-25
published: True
type: "post"
imagesrc:
---

The current COVID-19 pandemic is locking everybody inside, but this does not
mean putting a hold on science---on the contrary.
The group recently posted a few preprints reminding us all of the importance of
considering the network structure of social interactions, and its impact on the
spread of diseases :

- [Beyond R0: the importance of contact tracing when predicting epidemics](https://arxiv.org/abs/2002.04004)
- [Master equation analysis of mesoscopic localization in contagion dynamics on higher-order networks](https://arxiv.org/abs/2004.10203)
- [Social confinement and mesoscopic localization of epidemics on networks](https://arxiv.org/abs/2003.05924)
- [The role of directionality, heterogeneity and correlations in epidemic risk and spread](https://arxiv.org/abs/2005.11283)


##### Beyond R0: the importance of contact tracing when predicting epidemics

One key intuition from network science is that _heterogeneity_ makes a huge difference on the outcome of an epidemic.
This paper reformulates classic results from percolation theory to emphasize the impact of the variability in the number of secondary cases produced by an infected individual.
As seen below, using a network approach that accounts for heterogeneity provides much more reliable estimates for the final size of epidemics, compared to a standard SIR model.

<img class="block-image" src="{{ "/assets/images/posts/2020-05-25-1.png" }}">

##### The role of directionality, heterogeneity and correlations in epidemic risk and spread

Percolation approaches are rich and flexible, hence it is possible to investigate more complex interaction patterns than completely random contacts.
One way is to consider correlations between the _in-degree_ and _out-degree_ of individuals : if someone is likely to catch a disease, is it also likely to spread it?
Considering variations on this relationship can significantly change the outcome of an epidemic, as shown below.

<img class="block-image" src="{{ "/assets/images/posts/2020-05-25-4.png" }}">


##### Master equation analysis of mesoscopic localization in contagion dynamics on higher-order networks

Beyond the question _if_ a disease can spread, and to what extent, an important question is _where_.
This paper provides a detailed analytical description of the phenomenon of _mesoscopic localization_, with an explicit characterization of the localization regimes.
The use of clique-based approximate master equations gives a fine-grained description of the states of all cliques within the network, as shown below.
In the localized regime, substructures of different sizes are effectively in a subcritical, critical and supercritical phases all at once.


<img class="block-image" src="{{ "/assets/images/posts/2020-05-25-2.png" }}">

##### Social confinement and mesoscopic localization of epidemics on networks

What are the key impacts of a localized epidemic? More specifically, how does this affect our _control_ over them?
This paper investigate the consequences of a localized dynamics when performing _structural interventions_ on the structure, taking the form of removing cliques higher than a certain size.
This is akin to forbidding events or gathering involving a certain number of people.

It is found that for both the SIS model (analytically) and the SIR model (with simulations), there are increasing returns on the intervention for localized dynamics---the more you remove substructures, the more it is efficient.
This behavior is very different from what we would expect in a well-mixed population, more similar to the delocalized dynamics.

<img class="block-image" src="{{ "/assets/images/posts/2020-05-25-3.png" }}">


