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
Les coûts des sites purement ambulatoires peuvent être livrés dans l'élément **KostentraegerStandort** au niveau du site ou dans l'élément **KostentraegerUnternehmen** au niveau de l'entreprise (voir exemple xml fictif). Les coûts ne sont pas saisis par patient (cas) mais par tarif ambulatoire (ktr_typ, dans l'exemble "301" = Tarif TARMED, LAMal purement AOS).

A noter: 
- Les informations sur les objets de coûts et de recettes doivent, si possible, être fournies au niveau du site. 
- Les informations sur les objets de coûts et de recettes au niveau de l'entreprise ne peuvent être indiquées que pour les entreprises avec UN hôpital (BURGESV). Pour les entreprises avec plusieurs hôpitaux, les éventuelles informations mises au niveau de l'entreprise seront automatiquement attribuées à un site par l'OFS.
{{<insertImage image="xml_tarifambu.png" class="edge max-w-70">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
