---
title: Presentazione globale
slug: gesamtansicht
description: " "
weight: 20
type: docs
keywords: []
---

I dati finanziari provengono dalla KS (statistica ospedaliera).

{{<markdown>}}

|Conto|Descrizione|Totale spese cont. finanziaria COFI|Delimitazioni per materia|
|---------|---------|---------|---------|
|30-39|Costi del personale, esclusi il costo degli onorari medici (soggetti ai contributi degli oneri sociali)|UV_FIBU_18_10+UV_FIBU_18_30+UV_FIBU_18_40|UV_ABBR_17_20_14+UV_ABBR_17_20_15+UV_ABBR_17_20_18|
|38|Costo degli onorari medici (soggetti ai contributi degli oneri sociali)|UV_FIBU_18_20_01+UV_FIBU_18_20_02|UV_ABBR_17_20_16+UV_ABBR_17_20_17|
|40|Fabbisogno medico|UV_FIBU_15_02_01+UV_FIBU_17_80|UV_ABBR_17_20_19+UV_ABBR_17_20_20|
|41-49|Costi d'esercizio, esclusi i costi di utilizzo delle immobilizzazioni|UV_FIBU_15_03+UV_FIBU_15_04+UV_FIBU_15_05+UV_FIBU_15_06_01+UV_FIBU_15_06_04+UV_FIBU_15_07+UV_FIBU_15_09+UV_FIBU_15_10+UV_FIBU_15_11|UV_ABBR_17_20_21+UV_ABBR_17_20_22+UV_ABBR_17_20_23+UV_ABBR_17_20_24+UV_ABBR_17_20_27+UV_ABBR_17_20_30+UV_ABBR_17_20_37+UV_ABBR_17_20_38+UV_ABBR_17_20_39|
|44|Costi di utilizzo delle immobilizzazioni (esclusi inv. < CHF 10'000)| UV_FIBU_15_06_02+UV_FIBU_15_06_03+UV_FIBU_15_06_05|UV_ABBR_17_20_25+UV_ABBR_17_23_25+UV_ABBR_17_23_27+UV_ABBR_17_23_28|
|46|Oneri finanziari|UV_FIBU_15_08_01+UV_FIBU_15_08_02+UV_FIBU_15_08_03+UV_FIBU_15_08_04+UV_FIBU_15_08_05|UV_ABBR_17_20_31+UV_ABBR_17_20_32+UV_ABBR_17_20_33+UV_ABBR_17_20_34+UV_ABBR_17_20_35+UV_ABBR_17_20_36|
|7|Costi straordinari ed estranei all'esercizio|UV_FIBU_15_16+UV_FIBU_15_17+UV_FIBU_15_18+UV_FIBU_15_19|UV_ABBR_17_20_40+UV_ABBR_17_20_41+UV_ABBR_17_20_42+UV_ABBR_17_20_43|

{{</markdown>}}

Il numero di unità di prestazione è definito in base ai dati trasmessi a SpiGes, nonché ai risultati del grouper SwissDRG SA integrato in SpiGes (SwissDRG, ST Reha e TARPSY). 
- CM/DM: somma dei cw (cost-weight) per i casi stazionari.
- Giornate: somma dei giorni per i ospedali di giorno (ktr_le_ambulant). 

Il numero di casi è definito in base ai casi A trasmessi a SpiGes, suddivisi per itark_spalte.

I punti fatturati per le prestazioni ambulatoriali sono indicati dalla variabile ktr_le_ambulant in base al ktr_typ definito.