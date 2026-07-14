---
title: Infos supplémentaires
slug: zusatzinfos
description: " "
weight: 40
type: docs
keywords: []
---

1) Déduction propre à l'hôpital pour le surcoût hôtelier des patients AC

SpiGes remplit les jours de soins selon les los du grouper SwissDRGSA, ainsi que les coûts des ktr_41, ktr_42 et ktr_43 relevés selon REKOLE. Ces mêmes coûts selon OCP doivent être remplis par l'établissement. Le reste est défini par des formules (gérées par H+ dans le fichier excel).

{{<markdown>}}

|Compte|Description|Variable SpiGes|
|---------|---------|---------|---------|
|41|Hôtellerie-chambres selon REKOLE®|ktr_41|
|42|Hôtellerie-cuisine selon REKOLE®|ktr_42|
|43|Hôtellerie-service selon REKOLE®|ktr_43|

{{</markdown>}}

2) Calculation déduction des produits-65

La variable ktr_kosten_65 est prévue à cet effet. 

6) Commentaires relatifs à la comptabilité des ajustements

La passerelle d'ajustement est saisie dans la KS et importée ensuite dans SpiGes par les établissements. Chaque ajustement génère une erreur dans SpiGes qui doit être commenté. Le commentaire est repris dans le tableau. 

Les montants sont repris individuellement et catégorisés comme suit:

{{<markdown>}}

|Compte|Description|Ajustement par objet|
|---------|---------|---------|
|30-39|Frais de personnel, exclus charges des honoraires de médecins|UV_ABBR_17_20_14 UV_ABBR_17_20_15 UV_ABBR_17_20_18|
|38|Charges des honoraires de médecins (assujettis aux charges sociales)|UV_ABBR_17_20_16 UV_ABBR_17_20_17|
|40|Matériel médical d'exploitation| UV_ABBR_17_20_19 UV_ABBR_17_20_20|
|41-49|Charges d'exploitation, exclus les charges d'utilisation des immobilisations|UV_ABBR_17_20_21 UV_ABBR_17_20_22 UV_ABBR_17_20_23 UV_ABBR_17_20_24 UV_ABBR_17_20_27 UV_ABBR_17_20_30 UV_ABBR_17_20_37 UV_ABBR_17_20_38 UV_ABBR_17_20_39|
|44|Charges d'utilisation des immobilisations (exclu inv. < CHF 10'000)|UV_ABBR_17_20_25 UV_ABBR_17_23_25 UV_ABBR_17_23_27 UV_ABBR_17_23_28|
|46|Charges financières|UV_ABBR_17_20_31 UV_ABBR_17_20_32 UV_ABBR_17_20_33 UV_ABBR_17_20_34 UV_ABBR_17_20_35 UV_ABBR_17_20_36|
|7|Charges extraordinaires|UV_ABBR_17_20_40 UV_ABBR_17_20_41 UV_ABBR_17_20_42 UV_ABBR_17_20_43|

{{</markdown>}}

Les commentaires sont soumis à une hierarchie:
 - En premier lieu, le dernier commentaire niveau site est pris en compte.
 - Si pas de commentaire niveau site, le dernier commentaire niveau entreprise est pris en compte.
 - Si pas de commentaire niveau entreprise, le dernier commentaire niveau canton est pris en compte. 
 - Si pas de commentaire niveau canton, aucun commentaire n'est pris en compte.

9) Prestations d'intérêt général

Le détail des prestations d'intérêt général a la même structure entre ITAR_K® et SpiGes. Toutes les PIG déjà définies ont un ktr_typ spécifique. Un autre ktr_typ est utilisé pour les PIG définies par l'établissement (599 ou 799). Dans ces cas, chaque ktr_beschr différente correspond à une ligne dans le tableau. 

{{<markdown>}}

|Description (type A)|Variable SpiGes ktr_typ|
|---------|---------|
|Prestations en attente (exclus prestations en attente pour l’urgence)|501|
|Service de sauvetage et d’ambulance / Appel d’urgence 144|502|
|Unités d’hôpital protégées|503|
|Jardins d’enfants et écoles pour les patients|504|
|Services sociaux pour patients|505|
|Prévention / promotion de la santé|506|
|Protection de la population|507|
|Aumônerie hospitalière / lieu de recueillement|508|
|Autres missions spéciales|599|

{{</markdown>}}

{{<markdown>}}

|Description (type B)|Variable SpiGes ktr_typ|
|---------|---------|
|Recherche, y compris le doctorat (MD et PhD)|601|
|Formation universitaire de base (enseignement dispensé et formation reçue)|602|
|Enseignement dispensé en formation postgraduée|603|

{{</markdown>}}

{{<markdown>}}

|Description (type C)|Variable SpiGes ktr_typ|
|---------|---------|
|Maintien de surcapacités hospitalières pour des raisons de politiques régionales|701|
|Maternité|702|
|Tarifs ne couvrant pas les coûts (par ex. TARMED)|703|
|Autres prestations d’intérêt général liées à l’hôpital|799|

{{</markdown>}}

Pour les colonnes, les revenus sont séparés selon les comptes:
 - Revenus étatiques: ktr_69.
 - Tiers: somme des autres ktr_6*. 
 
Les coûts tiennent compte de tous les ktr liés aux coûts, avec CUI selon REKOLE (ktr_44_rekole). La méthode de calcul des coûts est indiquée par la variable ktr_methodik. 