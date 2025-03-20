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
Les patients en attente de placement sont des cas qui ne nécessitent plus de soins hospitaliers aigus, mais qui ne peuvent pas sortir parce qu'ils attendent encore une solution de suivi. Il y a deux cas à gérer. Le premier cas représente le traitement normal pendant la période où des soins hospitaliers aigus sont nécessaires et est facturé selon SwissDRG, ST Reha, TARPSY ou d'autres tarifs hospitaliers. Le deuxième cas, sans besoin de soins hospitaliers, doit être codé comme suit :
- Tarif = 7 (taxe de soins) car ceux-ci sont généralement facturés en tant que patients en soins. Dans des cas exceptionnels, lorsque le financement est différent, un autre tarif peut être indiqué.
- Le cas précédent doit être indiqué avec une sortie Transfert interne (4), si la patient reste au sein du même hôpital.
- À indiquer uniquement s'ils ne sont pas déjà pris en compte dans SOMED (cas considérés comme des patients en EMS).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
