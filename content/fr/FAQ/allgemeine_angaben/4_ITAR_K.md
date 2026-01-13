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
ITAR_K® peut être établi avec les données SpiGes. Les données ambulatoires sont collectées dans les types d'UFI prévus à cet effet (p. ex. tarif laboratoire).
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

- Il n'y a pas de recettes/coûts des Prestations d'Intérêt Général (PIG) directement liés à des cas. Pour la représentation des PIG, SpiGes s'en tient, en principe, à la jurisprudence et aux recommandations de l'association des hôpitaux H+ et de sa solution de branche REKOLE®.
- Selon REKOLE®, il peut y avoir, au sein des institutions hospitalières, des PIG pour des missions spéciales et/ou pour de la recherche et la formation universitaire. Les coûts et recettes relatifs à ces prestations sont comptabilisés sur des mandats clairement définis (Chap. 9.10 de REKOLE®). REKOLE® prévoit également que les recettes relatives aux autres contributions pour le maintien de capacités hospitalières pour des raisons de politiques régionales ou pour tarifs ne couvrant pas les coûts reçus par les institutions hospitalières soient comptabilités sur des mandats ne contenant que des produits. Ces recettes ne correspondent par contre à aucune prestation définie. Elles ne doivent, par conséquent, pas avoir d'influence sur les coûts des institutions hospitalières (Chap. 9.11.3 de REKOLE®).
- Dans la liste des variables SpiGes, il est précisé dans la description de la variable « ktr_typ » que : «Il convient d'indiquer ici le type d'unité finale d'imputation : cas (=1) ou **mandat** avec sous-catégories précises; Il faudra reprendre la formulation de la feuille séparée Types de CUFI (Comptabilité analytique par unité finale d'imputation). **Il faut remplir une ligne séparée pour chaque PIG et éxploitation annexe**. La feuille Types de CUFI donne des indications plus précises sur les directives spécifiques aux unités finales d'imputation. Cette variable est importante pour la répartition des cas dans les colonnes du modèle de tarif ITAR_K®». Les recettes/coûts relatifs aux PIG sont donc récoltés par la statistique SpiGes à travers les mandats de la comptabilité analytique de l'institution hospitalière. Cela permet ainsi de remplir correctement la colonne PIG du fichier ITAR_K®.

<!-- avant input H+:
- En ce qui concerne la représentation des prestations d'intérêt général, SpiGes s'en tient en principe à la jurisprudence et aux recommandations de l'association des hôpitaux H+. REKOLE® prévoit que les coûts des prestations d'intérêt général liées à un cas soient représentés sur le cas, mais que les produits soient représentés sur une unité finale d'imputation PIG séparé. Les coûts et les produits des PIG indépendants des cas sont également représentés sur une unité finale d'imputation PIG séparé.
- D'un point de vue technique, il est toutefois possible de s'écarter des prescriptions de REKOLE®. Les coûts et les recettes des PIG liés aux cas peuvent également être saisis sur une unité finale d'imputation propre (type KTR 700-799). Cela est également laissé à l'appréciation du canton. Dans ce cas, il est important que les coûts et les produits pour les prestations AOS soient tout de même saisis sur le cas (type KTR = 1).-->
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
ITAR_K® peut être rempli au niveau de l'entreprise ou du site. Qu'est-ce qui est demandé dans SpiGes ? La décision en la matière revient-elle aux cantons ?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

- ITAR_K® est toujours rempli au niveau BURGESV, ce niveau doit correspondre au relevé de la KS. Le canton fournit les informations à ce sujet à l'OFS lors de la phase d'initialisation du relevé KS. Dans cette mesure, le canton a une influence. Il doit toutefois se concerter avec l'hôpital.
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

{{<listItem>}}
Que se passe-t-il si le dossier n'est pas encore facturé et que les informations relatives au CM et aux rémunérations supplémentaires ne figurent pas dans les données de facturation ?
{{<collapsibleBlock groupId="ITARK">}}
Dans ITAR_K®, les résultats du Grouper sont utilisés pour ces informations. Seuls les montants des rémunérations supplémentaires non évaluées sont prises en compte dans les données de facturation.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
En téléchargeant ITAR_K®, les cellules concernant les exploitations annexes et les cas à cheval sont vides, pourquoi ?
{{<collapsibleBlock groupId="ITARK">}}
Il a été décidé, conjointement avec H+, de laisser vide et à compléter par les hôpitaux pour le moment. Ces cellules sont en couleur violet (dès la V.16 d'ITAR_K®) pour montrer ce que SpiGes ne remplit pas du tout.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Pourquoi les coûts Hôtellerie OCP (lignes 38-40) sont-ils négatifs ?
{{<collapsibleBlock groupId="ITARK">}}
Ces lignes sont calculées dans ITAR_K®. Par ailleurs, SpiGes ne collecte pas le détail Hôtellerie OCP (mais uniquement REKOLE), ces montants sont donc à compléter par les hôpitaux. Une fois les lignes renseignées, les montants seront positifs et corrects.  
{{<markdown>}}

- En vert: sera rempli par SpiGes
- En violet: sera rempli par l'hôpital
{{</markdown>}}
{{<insertImage image="itark_hot_ocp_fr.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les montants pour les rémunérations supplémentaires non évaluées dans ITAR_K® ne sont pas repris. Comment faut-il faire pour que SpiGes puisse les reprendre ?
{{<collapsibleBlock groupId="ITARK">}}
SpiGes reprend ce qui est mis dans la facture. Pour faire le lien, SpiGes utilise deux choses : rech_tariftyp 11-21-31 qui correspond aux rémunérations supplémentaires selon ForumDatenaustausch et le code de la rémunération supplémentaire sous rech_tarifcode.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Pour quelle raison les noms de colonnes concernant les tarifs définis par l'hôpital dans le domaine ambulatoire ne sont pas repris dans ITAR_K® ?
{{<collapsibleBlock groupId="ITARK">}}
SpiGes contient plus de KTR_TYP que nécessaire dans ITAR_K® pour ces tarifs. La distinction entre LAMal, complémentaire et auto-payeur n'est plus faite dans ITAR_K®. Comme indiqué dans l'arbre décisionnel, ces colonnes dans ITAR_K® sont définies comme suit:
{{<markdown>}}
|colonne ITAR_K®|KTR_TYP|
|--------|--------|
|Autres tarifs amb. spécifiques à l'établissement|371,372,373|
|Autres tarifs amb. spécifiques à l'établissement|374,375,376|
|Autres tarifs amb. spécifiques à l'établissement|377,378,379|
|Autres tarifs amb. spécifiques à l'établissement|380,381,382,402|
{{</markdown>}}  
Si la distinction est faite dans la KTR_BESCHR, un message d'erreur apparaît dans SpiGes pour mettre en garde sur ce point. Si la KTR_BESCHR n'est pas identique pour une colonne ITAR_K®, SpiGes ne peut pas déterminer laquelle est correcte.
{{<lineBreak>}}
{{<insertImage image="itark_erreur_tarifambu_fr.png" class="edge max-w-90">}}  
{{<lineBreak>}}
SpiGes va toutefois vous indiquer qu'il faut compléter ce nom de colonne manuellement:  
{{<lineBreak>}}
{{<insertImage image="itark_tarifambu.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
