---
title: Règles de plausibilisation
slug: Règles de plausibilisation
description: "Sur cette page, vous pouvez télécharger la dernière version des règles de plausibilisation de SpiGes."
weight: 50
type: docs
keywords: []
---
## Configuration des règles de plausibilisation

Vous pouvez télécharger les règles de contrôle sous la forme d'un fichier CSV. Tous les contrôles au cas par cas y sont inclus.

[Télécharger le fichier: Rules_PRD](https://github.com/SpiGes/Rules-PRD/releases/latest/download/Rules_PRD.csv)

Vous trouvez le calcul des chiffres-clés dans le fichier CSV suivant.
Le fichier indique l'ensemble des étapes afin d'obtenir les résultats des chiffres-clés.

[Télécharger le fichier: Kennzahlen](https://github.com/SpiGes/kennzahlen/releases/latest/download/Kennzahlen-PRD.xlsx)

{{<markdown>}}
- Les activités et les systèmes tarifaires sont définies d'après le tarif:
|activité|tarif|système tarifaire|tarif|
|---------|---------|---------|---------|
|Soins aigus|1,2|SwissDRG|1|
|Psychiatrie|5,6|TARPSY|5|
|Réadaptation|3,4|ST Reha|3|
- La notion de SORTIES s'applique uniquement aux cas A. La notion de CAS s'applique à tous les cas (A,B,C).
- Les jours de soins (LOS), le CMI/DMI, les cas par flag SwissDRG sont calculés avec les données récoltées du grouper SwissDRG. Si des cas non pas pu être groupés, ils manqueront au résultat de l'établissement. 
- Les coûts et revenus par cas sont, actuellement, déterminés de manière simple: coûts-revenus totaux / sorties.
- Pour les calculs des coûts, sans précision particulière, les CUI selon OCP sont pris en compte. Généralement, il s'agit du calcul périodique, soit en enlevant les coûts des patients B/C de l'année passée. S'il s'agit du calcul unitaire (coûts totaux des patients sortis dans l'année), cela est indiqué. Si aucun coût n'a été donné pour les cas B/C, la valeur 0 est prise en compte et le résultat correspond au calcul unitaire. 
{{</markdown>}}