---
title: Délimitation des cas
slug: Fall
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="Fall">}}

{{<numberedList>}}
{{<listItem>}}
Les accompagnateurs stationnaires font-ils également partie de la livraison de données SpiGes ?
{{<collapsibleBlock groupId="Fall">}}
En principe, les accompagnateurs (parents, enfants, partenaire) ne sont pas des cas stationnaires, ils ont besoin de services hôteliers (sans prestation médicale) et ne sont pas enregistrés (c'était déjà le cas pour la MS).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment les patients en attente de placement doivent-ils être livrés dans SpiGes ?
{{<collapsibleBlock groupId="Fall">}}
{{<markdown>}}
Les patients en attente de placement sont des cas qui ne nécessitent plus de soins hospitaliers aigus, mais qui ne peuvent pas sortir parce qu'ils attendent encore une solution de suivi. Il y a deux cas à gérer. Le premier cas représente le traitement normal pendant la période où des soins hospitaliers aigus sont nécessaires et est facturé selon SwissDRG, ST Reha, TARPSY ou d'autres tarifs hospitaliers. Le deuxième cas représente le cas en attente de placement sans besoin de soins hospitaliers.  

Ces cas doivent être codés comme suit :
- Tarif = 7 (taxe de soins) pour le cas en attente de placement car ceux-ci sont généralement facturés en tant que patients en soins. Dans des cas exceptionnels, lorsque le financement est différent, un autre tarif peut être indiqué.
- Le cas précédent doit être indiqué avec une décision de sortie Transfert interne (austrittsentscheid = 4), si la patient reste au sein du même hôpital.
- L'indication du séjour après la sortie (austritt_aufenthalt) sur le cas précédent peut être décidé par l'établissement (éventuellement en discussion avec le canton).  
<!--À indiquer uniquement s'ils ne sont pas déjà pris en compte dans SOMED (cas considérés comme des patients en EMS).-->

*S'il n'est pas possible pour l'établissement d'indiquer de manière individuelle ces cas, il est nécessaire d'utiliser le ktr_typ 101 pour transmettre l'ensemble des coûts afin de remplir correctement ITAR_K® ou, en dernier recours, de les déduire dans les ajustements de la passerelle d'ajustement de la KS.*
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
