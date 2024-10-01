---
title: ITAR_K® 
slug: ITAR_K
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="ITARK">}}

{{<numberedList>}}
{{<listItem>}}
SpiGes ne collecte des informations que sur les cas stationnaires. Comment la partie ambulatoire d'ITAR_K® peut-elle être remplie ?
{{<collapsibleBlock groupId="ITARK">}}
ITAR_K® peut être établi avec les données SpiGes. Les données ambulatoires sont collectées dans les types d’UFI prévus à cet effet (p. ex. tarif laboratoire).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment ITAR_K® est-il établi par les cliniques qui ne font que partie d'une entreprise hospitalière ? (p.ex. la Clinique Sainte-Anne de Fribourg fait partie de Swiss Medical Network SA)
{{<collapsibleBlock groupId="ITARK">}}
La Clinique Sainte-Anne de Fribourg remplira la comptabilité financière (et toutes les autres données) dans la statistique des hôpitaux (KS) par clinique (niveau BURGESV). Les coûts issus de SpiGes peuvent être agrégés par BURGESV.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les données sur les coûts doivent être saisies avant le 31 mars. Ces données doivent-elles avoir été révisées ? Actuellement, nous ne pourrions pas le faire, car les comptes annuels ne sont révisés que fin mars.
{{<collapsibleBlock groupId="ITARK">}}
A cette date, les données de coûts doivent avoir été vérifiées automatiquement pour la première fois sur la plateforme SpiGes. La révision des comptes peut avoir lieu plus tard.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nous ne trouvons pas la variable SpiGes qui permettrait de diriger les recettes/coûts PIG directement liés à un cas vers la colonne PIG de ITAR_K®. Comment sera-t-il possible de reconstituer la colonne PIG de ITAR_K® à travers SpiGes?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

- Il n’y a pas de recettes/coûts des Prestations d’Intérêt Général (PIG) directement liés à des cas. Pour la représentation des PIG, SpiGes s'en tient en principe à la jurisprudence et aux recommandations de l'association des hôpitaux H+ et de sa solution de branche REKOLE®. 
- Selon la solution de branche REKOLE®, il peut y avoir, au sein des institutions hospitalières, des prestations d’intérêt général pour des missions spéciales et/ou pour de la recherche et la formation universitaire. Les coûts et recettes relatifs à ces prestations sont comptabilisés sur des mandats clairement définis (Chap. 9.10 de la solution de branche REKOLE®). La solution de branche REKOLE® prévoit également que les recettes relatives aux autres contributions pour le maintien de capacités hospitalières pour des raisons de politiques régionales ou pour tarifs ne couvrant pas les coûts reçus par les institutions hospitalières soient comptabilités sur des mandats ne contenant que des produits. Ces recettes ne correspondent par contre à aucune prestation définie. Elles ne doivent par conséquent pas avoir d’influence sur les coûts des institutions hospitalières (Chap. 9.11.3 de la solution de branche REKOLE®). 
- Dans la liste des variables SpiGes version 1.4, il est précisé dans la description de la variable « ktr_typ » que : «Il convient d’indiquer ici le type d’unité finale d’imputation : cas (=1) ou **mandat** avec sous-catégories précises; Il faudra reprendre la formulation de la feuille séparée Types de CUFI (Comptabilité analytique par unité finale d’imputation). **Il faut remplir une ligne séparée pour chaque PIG et éxploitation annexe**. La feuille Types de CUFI donne des indications plus précises sur les directives spécifiques aux unités finales d’imputation. Cette variable est importante pour la répartition des cas dans les colonnes du modèle de tarif ITAR_K». Les recettes/coûts relatifs aux PIG sont donc récoltés par la statistique SpiGes à travers les mandats de la comptabilité analytique de l’institution hospitalière. Cela permet ainsi de remplir correctement la colonne PIG du fichier ITAR_K®. 

<!-- avant input H+:
- En ce qui concerne la représentation des prestations d'intérêt général, SpiGes s'en tient en principe à la jurisprudence et aux recommandations de l'association des hôpitaux H+. REKOLE® prévoit que les coûts des prestations d'intérêt général liées à un cas soient représentés sur le cas, mais que les produits soient représentés sur une unité finale d’imputation PIG séparé. Les coûts et les produits des PIG indépendants des cas sont également représentés sur une unité finale d’imputation PIG séparé.
- D'un point de vue technique, il est toutefois possible de s'écarter des prescriptions de REKOLE®. Les coûts et les recettes des PIG liés aux cas peuvent également être saisis sur une unité finale d’imputation propre (type KTR 700-799). Cela est également laissé à l'appréciation du canton. Dans ce cas, il est important que les coûts et les produits pour les prestations AOS soient tout de même saisis sur le cas (type KTR = 1).-->
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
ITAR_K® peut être rempli au niveau de l'entreprise ou du site. Qu'est-ce qui est demandé dans SpiGes ? La décision en la matière revient-elle aux cantons ?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

- ITAR_K® est toujours rempli au niveau BURGESV, ce niveau doit correspondre au relevé de la KS. Le canton fournit les informations à ce sujet à l'OFS lors de la phase d’initialisation du relevé KS. Dans cette mesure, le canton a une influence. Il doit toutefois se concerter avec l'hôpital.
- ITAR_K® est l'instrument de base pour les négociations tarifaires entre les hôpitaux et les assureurs. La question de savoir si le canton participe à la détermination de la granularité dépend du fait qu'il s'agisse d'un hôpital répertorié, d'un hôpital conventionné ou d'un hôpital hors liste.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
A partir de quand ITAR_K® sera-t-il généré à partir de la plateforme SpiGes ?
{{<collapsibleBlock groupId="ITARK">}}
L'instrument ITAR_K® pour la tarification et l'examen de l'économicité devra être créé à l'avenir par SpiGes. Afin de garantir une transition sûre, ainsi que l'exactitude, il est prévu d'exploiter en parallèle l'ancienne et la nouvelle plateforme (H+ et SpiGes). En 2025 (données 2024), les ITAR_K® officiels seront encore établis par la plateforme H+ comme auparavant. A partir de septembre 2025, tous les hôpitaux auront en outre la possibilité d'établir les ITAR_K® 2025 (données 2024) via SpiGes et de comparer les deux résultats. Les éventuelles ambiguïtés pourront ainsi être levées avant l'introduction productive de l'établissement des ITAR_K® via SpiGes en 2026 (données 2025).
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
