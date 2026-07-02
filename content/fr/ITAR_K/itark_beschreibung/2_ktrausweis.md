---
title: Relevé CUFI
slug: ktrausweis
description: " "
weight: 30
type: docs
keywords: []
---

Les variables SpiGes correspondent aux détails des comptes. Les montants sont donc calculés en agrégeant par itark_spalte pour chaque KTR (CUFI).

{{<markdown>}}

|Compte|Description|Variable SpiGes|
|---------|---------|---------|
|60|Produits résultant de prestations médicales, infirmières et thérapeutiques|ktr_60|
|61|Prestations unitaires médicales|ktr_61|
|62|Autres prestations unitaires hospitalières|ktr_62|

{{</markdown>}}
...

{{<markdown>}}

|Compte|Description|Variable SpiGes|
|---------|---------|---------|
|400|Médicaments  (non-compris sang et produits sanguins)|ktr_4001|
|400|Sang et produits sanguins|ktr_4002|
|401|Matériel (non-compris Implants), Instruments, ustensiles, textiles|ktr_4011|

{{</markdown>}}
...

{{<markdown>}}

|Compte|Description|Variable SpiGes|
|---------|---------|---------|
|10|Administration des patients|ktr_10|
|20|Salle d'opération|ktr_20|
|21|Laboratoire cardiaque de cathétérisme|ktr_21|

{{</markdown>}}
...

Particularités:
 - **Administration des patients**  
Deux méthodes peuvent être utilisées pour l'ambulatoire. Dans ce sens, deux lignes cachées permettent de faire cette distinction dans le fichier ITAR_K®. La première ligne tient compte du total défini par la variable ktr_403 qui est ensuite distribué dans les différents tarifs selon l'activité (formule gérée par H+ au niveau du fichier excel). La deuxième ligne tient compte du détail fourni par tarifs ambulatoires. La ligne visible somme les deux lignes pour donner le montant final. Ce fonctionnement est reproduit pour les CUI OCP et REKOLE (ktr_403 vs autres ktr ambulatoires).
 - **Charges d'utilisation des immobilisations (CUI)**  
  Pour les CUI OCP, la variable ktr_44_vkl est utilisée. Pour les CUI REKOLE, la variable ktr_44_rekole est utilisée. 