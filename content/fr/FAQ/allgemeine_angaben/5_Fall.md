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
Les *patients en attente de placement* (différentes nomenclatues selon les cantons) sont des cas qui ne nécessitent plus de soins hospitaliers aigus, mais qui ne peuvent pas sortir parce qu’ils attendent encore une solution de suivi. Il y a deux cas à gérer. Le premier cas représente le traitement normal pendant la période où des soins hospitaliers aigus sont nécessaires et est facturé selon SwissDRG, ST Reha, TARPSY ou d’autres tarifs hospitaliers. Le deuxième cas représente le cas en attente de placement sans besoin de soins hospitaliers.
Ces cas doivent être codés comme suit :
{{<markdown>}}
- Premier cas
    - Décision de sortie “Transfert interne” (austrittsentscheid = 4), si la patient reste au sein du même hôpital.
    - Séjour après la sortie (austritt_aufenthalt) 44, 55 ou 66 selon la division/clinique dans laquelle il est physiquement. 
- Deuxième cas
    - Tarif = 7 (taxe de soins) pour le cas en attente de placement car ceux-ci sont généralement facturés en tant que patients en soins. Dans des cas exceptionnels, lorsque le financement est différent, un autre tarif peut être indiqué.  
{{</markdown>}}
*S’il n’est pas possible pour l’établissement d’indiquer de manière individuelle ces cas, il est nécessaire d’indiquer les coûts des cas d’attente sous le ktr_typ 101 afin de transmettre les coûts totaux et de remplir correctement ITAR_K®. En dernier recours, les coûts des cas d’attente peuvent être déduits dans les ajustements de la passerelle d’ajustement de la KS.*
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
