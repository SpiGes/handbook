---
title: Gesamtansicht
slug: gesamtansicht
description: " "
weight: 20
type: docs
keywords: []
---

Die Finanzdaten stammen aus der KS (Krankenhausstatistik). 

{{<markdown>}}

|Konto|Beschreibung|Total Aufwand FIBU|sachl. Abgrenz.|
|---------|---------|---------|---------|
|30-39|Personalaufwand exkl. Honorare|UV_FIBU_18_10+UV_FIBU_18_30+UV_FIBU_18_40|UV_ABBR_17_20_14+UV_ABBR_17_20_15+UV_ABBR_17_20_18|
|38|Honorare (sozialversicherungspflichtig)|UV_FIBU_18_20_01+UV_FIBU_18_20_02|UV_ABBR_17_20_16+UV_ABBR_17_20_17|
|40|Medizinischer Bedarf|UV_FIBU_15_02_01+UV_FIBU_17_80|UV_ABBR_17_20_19+UV_ABBR_17_20_20|
|41-49|Sachaufwand exkl. Anlagenutzungskosten|UV_FIBU_15_03+UV_FIBU_15_04+UV_FIBU_15_05+UV_FIBU_15_06_01+UV_FIBU_15_06_04+UV_FIBU_15_07+UV_FIBU_15_09+UV_FIBU_15_10+UV_FIBU_15_11|UV_ABBR_17_20_21+UV_ABBR_17_20_22+UV_ABBR_17_20_23+UV_ABBR_17_20_24+UV_ABBR_17_20_27+UV_ABBR_17_20_30+UV_ABBR_17_20_37+UV_ABBR_17_20_38+UV_ABBR_17_20_39|
|44|Anlagenutzungskosten (exkl. Inv. < CHF 10'000)| UV_FIBU_15_06_02+UV_FIBU_15_06_03+UV_FIBU_15_06_05|UV_ABBR_17_20_25+UV_ABBR_17_23_25+UV_ABBR_17_23_27+UV_ABBR_17_23_28|
|46|Zinsaufwand|UV_FIBU_15_08_01+UV_FIBU_15_08_02+UV_FIBU_15_08_03+UV_FIBU_15_08_04+UV_FIBU_15_08_05|UV_ABBR_17_20_31+UV_ABBR_17_20_32+UV_ABBR_17_20_33+UV_ABBR_17_20_34+UV_ABBR_17_20_35+UV_ABBR_17_20_36|
|7|a.o. Aufwand|UV_FIBU_15_16+UV_FIBU_15_17+UV_FIBU_15_18+UV_FIBU_15_19|UV_ABBR_17_20_40+UV_ABBR_17_20_41+UV_ABBR_17_20_42+UV_ABBR_17_20_43|

{{</markdown>}}

Die Anzahl der Leistungseinheiten wird anhand der an SpiGes übermittelten Daten sowie der Ergebnisse des in SpiGes integrierten SwissDRG AG-Grupper (SwissDRG, ST Reha und TARPSY) ermittelt. 
- CM/DM: Summe der cw (Kostengewichte) für stationäre Fälle.
- Pflegetage: Summe der Pflegetage für Tageskliniken (ktr_le_ambulant). 

Die Anzahl Fälle wird anhand der an SpiGes übermittelten A-Fälle definiert, aufgeschlüsselt nach itark_spalte.

Die fakturierten ambulanten Punkte werden durch die Variable ktr_le_ambulant gemäss dem definierten ktr_typ angegeben.