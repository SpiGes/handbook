---
title: Unité finale d'imputation «Cas»
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="kostentraeger">}}

{{<numberedList>}}
{{<listItem>}}
Comment faut-il présenter les coûts pour les cas forensiques C (durée de séjour de plusieurs années) ? Pour l'ensemble du cas (durée de séjour complète) ou seulement les coûts pour l'année civile concernée et le reste par le biais d'ajustements ?
{{<collapsibleBlock groupId="kostentraeger">}}
Pour les cas B et C, les coûts doivent être indiqués pour l'année civile ; pour les cas A,les coûts doivent être indiqués pour toute la durée du cas. Pour les payeurs ambulatoires et non liés à un cas, indiquer également les coûts sur l'année civile. Voir également la colonne «Indic. Temp» de la liste des variables.  
{{</collapsibleBlock>}}
{{</listItem>}}
<!--
{{<listItem>}}
Les cas de longue durée peuvent-ils être livrés dans SpiGes avec Type de CUFI 101=Longue durée comme unité finale d'imputation indépendante du cas, même si le SOMED est saisi en parallèle pour les soins de longue durée ?
{{<collapsibleBlock groupId="kostentraeger">}}
Si l'établissement remplit SOMED, ces Coûts doivent être saisis dans SpiGes via le Type de UFI 101. Inversement, les cas individuels de longue durée en soins somatiques aigus et en réadaptation (patients en attente) doivent être représentés comme Type de CUFI 1 (=cas) et tarif 7 correspondant (=taxe de soins). Ainsi, l'ITAR_K et les statistiques sont corrects. 
{{</collapsibleBlock>}}
{{</listItem>}}-->

{{<listItem>}}
Suppléments pour coûts unitaires ou coûts directs : Selon REKOLE®, des suppléments pour coûts unitaires ou coûts directs peuvent être saisis
sur les coûts unitaires (besoins médicaux 400 et 401). Mais pour ces variables CUFI, il n'existe pas dans SpiGes et dans le jeu de données de coûts SwissDRG, contrairement aux coûts généraux, de variables CUFI séparées sur lesquelles les coûts d'utilisation des immobilisations peuvent être indiqués selon REKOLE®. Dans ITAR_K®, les comptes 400 et 401 doivent être indiqués sans suppléments CAN. Comment faut-il procéder avec ces suppléments CAN sur les comptes 400 et 401 ?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}

- Les suppléments de la CAN ne doivent pas être saisis dans les comptes 400 et 401. Ils doivent cependant être inclus dans les variables totales de la CAN (ktr_44_vkl / ktr_44_rekole).
- Avec la version 1.4 de l'interface, la variable ktr_44_rekole est transformée de variable calculée en variable relevée (et ajoutée dans le XML), ce qui permet de relever un total ANK REKOLE® qui diffère de la somme des variables individuelles de la CUFI.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les sites purement ambulatoires ne sont pas pris en compte dans la population de SpiGes. ITAR_K® contient les coûts par tarif ambulatoire. A quel niveau les coûts purement ambulatoires sont-ils livrés dans SpiGes ?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
Les coûts des sites purement ambulatoires sont livrés dans l'élément **KostentraegerStandort** au niveau d'un autre site ou dans l'élément **KostentraegerUnternehmen** au niveau de l'entreprise (voir exemple xml fictif). Les coûts ne sont pas saisis par patient (cas) mais par tarif ambulatoire (ktr_typ, dans l'exemble "301" = Tarif TARMED, LAMal purement AOS).

Pour que cette saisie soit correcte dans ITAR_K® (**par BURGESV**), il faut tenir compte de ce qui suit :

- Saisie des coûts et des recettes des patients traités uniquement en ambulatoire au niveau de l'entreprise : pour les entreprises avec **un** hôpital (BURGESV).
- Saisie des coûts et des recettes des patients traités uniquement en ambulatoire au niveau d'un site : pour les entreprises avec **plusieurs** hôpitaux (BURGESV).

{{<insertImage image="xml_tarifambu.png" class="edge max-w-70">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment les recettes et les factures sont-elles représentées lorsque le canton définit un budget global ?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
Si le budget global est plus élevé que les recettes ou qu'il n'est pas utilisé, la représentation se fait normalement. Les réponses ici concernent uniquement **le cas où le budget global est épuisé et que les recettes auraient été plus élevées sans budget global**. 

Principe : les recettes doivent être représentées sur les cas.
Il existe deux variantes de procédure :
- Proportionnel

Les recettes «normales» (sans budget global) sont réduites d'un facteur constant. Le facteur ne peut être calculé que lorsque les recettes définitives du budget global sont connues. 
Exemple : recettes théoriques du canton 100 millions, budget global 90 millions -> Pour tous les cas concernés par le budget global, seuls 90% des recettes «normales» du canton sont comptabilisés (resp. 49,5% [90% des 55% de part du canton]).
- épuiser, ensuite 0

En inscrivant la totalité des 55% du canton sur les cas jusqu'à ce que le Budget global soit épuisé. Ensuite, plus aucune recette n'est comptabilisée sur les cas restants de l'année. 
Exemple : recettes théoriques du canton 100 millions, budget global 90 millions -> Tous les cas sont comptabilisés avec des recettes cantonales de 100% jusqu'à ce que le budget global soit épuisé. Les cas qui sont comptabilisés après cela n'ont pas de recettes du canton (0).
**Important pour la création d'ITAR_K** : aucune unité finale d'imputation séparée ne peut être gérée avec les réductions de recettes.

Pour les factures, si ces solutions sont laborieuses à mettre en œuvre, d'autres méthodes peuvent être appliquées après consultation du canton et de l'OFS la première année de relevé. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
