---
title: Unité finale d’imputation «Cas»
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="kostentraeger">}}

1. Comment faut-il présenter les coûts pour les cas forensiques C (durée de séjour de plusieurs années) ? Pour l'ensemble du cas (durée de séjour complète) ou seulement les coûts pour l'année civile concernée et le reste par le biais d’ajustements ?
{{<collapsibleBlock groupId="kostentraeger">}}
Pour les cas B et C, les coûts doivent être indiqués pour l'année civile ; pour les cas A,les coûts doivent être indiqués pour toute la durée du cas. Pour les payeurs ambulatoires et non liés à un cas, indiquer également les coûts sur l'année civile. Voir également la colonne «Indic. Temp» de la liste des variables.  
{{</collapsibleBlock>}}

2. Suppléments pour coûts unitaires ou coûts directs : Selon REKOLE®, des suppléments pour coûts unitaires ou coûts directs peuvent être saisis 
sur les coûts unitaires (besoins médicaux 400 et 401). Mais pour ces variables CUFI, il n'existe pas dans SpiGes et dans le jeu de données de coûts SwissDRG, contrairement aux coûts généraux, de variables CUFI séparées sur lesquelles les coûts d'utilisation des immobilisations peuvent être indiqués selon REKOLE. Dans ITAR_K, les comptes 400 et 401 doivent être indiqués sans suppléments CAN. Comment faut-il procéder avec ces suppléments CAN sur les comptes 400 et 401 ?
{{<collapsibleBlock groupId="kostentraeger">}}
<ul>
<li> Les suppléments de la CAN ne doivent pas être saisis dans les comptes 400 et 401. Ils doivent cependant être inclus dans les variables totales de la CAN (ktr_44_vkl / ktr_44_rekole). </li>
<li> Avec la version 1.4 de l'interface, la variable ktr_44_rekole est transformée de variable calculée en variable relevée (et ajoutée dans le XML), ce qui permet de relever un total ANK REKOLE® qui diffère de la somme des variables individuelles de la CUFI. </li>
</ul>
{{</collapsibleBlock>}}
