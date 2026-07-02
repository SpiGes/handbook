---
title: Aperçu global
slug: gesamtansicht
description: " "
weight: 20
type: docs
keywords: []
---

Les données financières proviennent de la KS (statistique administrative des hôpitaux). 

{{<markdown>}}

|Compte|Description|Total Charges COFI|Ajustement par objet|
|---------|---------|---------|---------|
|30-39|Frais de personnel, exclus charges des honoraires de médecins|UV_FIBU_18_10+UV_FIBU_18_30+UV_FIBU_18_40|UV_ABBR_17_20_14+UV_ABBR_17_20_15+UV_ABBR_17_20_18|
|38|Charges des honoraires de médecins (assujettis aux charges sociales)|UV_FIBU_18_20_01+UV_FIBU_18_20_02|UV_ABBR_17_20_16+UV_ABBR_17_20_17|
|40|Matériel médical d'exploitation|UV_FIBU_15_02_01+UV_FIBU_17_80|UV_ABBR_17_20_19+UV_ABBR_17_20_20|
|41-49|Charges d'exploitation, exclus les charges d'utilisation des immobilisations|UV_FIBU_15_03+UV_FIBU_15_04+UV_FIBU_15_05+UV_FIBU_15_06_01+UV_FIBU_15_06_04+UV_FIBU_15_07+UV_FIBU_15_09+UV_FIBU_15_10+UV_FIBU_15_11|UV_ABBR_17_20_21+UV_ABBR_17_20_22+UV_ABBR_17_20_23+UV_ABBR_17_20_24+UV_ABBR_17_20_27+UV_ABBR_17_20_30+UV_ABBR_17_20_37+UV_ABBR_17_20_38+UV_ABBR_17_20_39|
|44|Charges d'utilisation des immobilisations (exclu inv. < CHF 10'000)| UV_FIBU_15_06_02+UV_FIBU_15_06_03+UV_FIBU_15_06_05|UV_ABBR_17_20_25+UV_ABBR_17_23_25+UV_ABBR_17_23_27+UV_ABBR_17_23_28|
|46|Charges financières|UV_FIBU_15_08_01+UV_FIBU_15_08_02+UV_FIBU_15_08_03+UV_FIBU_15_08_04+UV_FIBU_15_08_05|UV_ABBR_17_20_31+UV_ABBR_17_20_32+UV_ABBR_17_20_33+UV_ABBR_17_20_34+UV_ABBR_17_20_35+UV_ABBR_17_20_36|
|7|Charges extraordinaires|UV_FIBU_15_16+UV_FIBU_15_17+UV_FIBU_15_18+UV_FIBU_15_19|UV_ABBR_17_20_40+UV_ABBR_17_20_41+UV_ABBR_17_20_42+UV_ABBR_17_20_43|

{{</markdown>}}

Le nombre d'unité de prestations est défini selon les données transmises à SpiGes, ainsi que les résultats du grouper SwissDRG SA intégré à SpiGes (SwissDRG, ST Reha et TARPSY). 
 - CM/DM: somme des cw pour les cas stationnaires.
 - journées: somme des los pour les cliniques de jour. 

Le nombre de cas est défini selon les cas A transmis dans SpiGes, réparti par itark_spalte.

Les points facturés ambulatoires sont donnés par la variable ktr_le_ambulant selon le ktr_typ défini. 