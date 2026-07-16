---
title: Info supplementari
slug: zusatzinfos
description: " "
weight: 40
type: docs
keywords: []
---

1) Deduzione specifica all'istituto per costi supplementari del servizio alberghiero per pazienti con AC 

SpiGes inserisce le giornate di cura in base del los del grouper SwissDRG SA, nonché i costi relativi a ktr_41, ktr_42 e ktr_43 rilevati secondo REKOLE. Questi stessi costi secondo OCPre devono essere inseriti dall'istituto. Il resto è definito da formule (gestite da H+ nel file Excel).

{{<markdown>}}

|Conto|Descrizione|Variabile SpiGes|
|---------|---------|---------|---------|
|41|Servizio alberghiero - camere secondo REKOLE®|ktr_41|
|42|Servizio alberghiero - cucina secondo REKOLE®|ktr_42|
|43|Servizio alberghiero - service secondo REKOLE®|ktr_43|

{{</markdown>}}

2) Calcolo deduzione ricavi 65

A tal fine è prevista la variabile ktr_kosten_65.

6) Commenti alla contabilità delle delimitazioni 

Il ponte di sintonizzazione viene inserito nel KS e successivamente importato in SpiGes dagli istituti. Ogni delimitazione genera un errore in SpiGes che deve essere commentato. Il commento viene riportato nella tabella. 

Gli importi vengono riportati singolarmente e classificati come segue:

{{<markdown>}}

|Conto|Descrizione|Delimitazioni per materia|
|---------|---------|---------|
|30-39|Costi del personale, esclusi il costo degli onorari medici (soggetti ai contributi degli oneri sociali)|UV_ABBR_17_20_14 UV_ABBR_17_20_15 UV_ABBR_17_20_18|
|38|Costo degli onorari medici (soggetti ai contributi degli oneri sociali)|UV_ABBR_17_20_16 UV_ABBR_17_20_17|
|40|Fabbisogno medico| UV_ABBR_17_20_19 UV_ABBR_17_20_20|
|41-49|Costi d'esercizio, esclusi i costi di utilizzo delle immobilizzazioni|UV_ABBR_17_20_21 UV_ABBR_17_20_22 UV_ABBR_17_20_23 UV_ABBR_17_20_24 UV_ABBR_17_20_27 UV_ABBR_17_20_30 UV_ABBR_17_20_37 UV_ABBR_17_20_38 UV_ABBR_17_20_39|
|44|Costi di utilizzo delle immobilizzazioni (esclusi inv. < CHF 10'000)|UV_ABBR_17_20_25 UV_ABBR_17_23_25 UV_ABBR_17_23_27 UV_ABBR_17_23_28|
|46|Oneri finanziari|UV_ABBR_17_20_31 UV_ABBR_17_20_32 UV_ABBR_17_20_33 UV_ABBR_17_20_34 UV_ABBR_17_20_35 UV_ABBR_17_20_36|
|7|Costi straordinari ed estranei all'esercizio|UV_ABBR_17_20_40 UV_ABBR_17_20_41 UV_ABBR_17_20_42 UV_ABBR_17_20_43|

{{</markdown>}}

I commenti seguono una gerarchia:
 - Innanzitutto, viene preso in considerazione l'ultimo commento a livello di sede.
 - Se non ci sono commenti a livello di sede, viene preso in considerazione l'ultimo commento a livello di azienda.
 - Se non ci sono commenti a livello di azienda, viene preso in considerazione l'ultimo commento a livello di cantone.
 - Se non ci sono commenti a livello di cantone, non viene preso in considerazione alcun commento.

9) Prestazioni economicamente d'interesse generale

La struttura dettagliata delle prestazioni economicamente d'interesse generale è la stessa sia in ITAR_K® che in SpiGes. Tutte le PEIG già definite hanno un ktr_typ specifico. Per le PEIG definite dall'istituto (599 o 799) viene utilizzato un altro ktr_typ. In questi casi, ogni ktr_beschr diverso corrisponde a una riga della tabella.

{{<markdown>}}

|Descrizione (type A)|Variabile SpiGes ktr_typ|
|---------|---------|
|Prestazioni a disposizione (escl. Prestazioni a disposizione per urgenze)|501|
|Servizio di salvataggio e di ambulanza / centrale di allarme 144|502|
|Reparti ospedalieri protetti|503|
|Scuole dell’infanzia e scuole per i pazienti|504|
|Prestazioni dei sevizi sociali per pazienti|505|
|Prevenzione / promozione della salute|506|
|Protezione della popolazione|507|
|Assistenza spirituale / cappella ecumenica|508|
|Ulteriori compiti speciali|599|

{{</markdown>}}

{{<markdown>}}

|Descrizione (type B)|Variabile SpiGes ktr_typ|
|---------|---------|
|Ricerca, compreso il dottorato (MD e PhD)|601|
|Formazione universitaria di base (insegnamento impartito e formazione ricevuta)|602|
|Insegnamento impartito nel perfezionamento professionale|603|

{{</markdown>}}

{{<markdown>}}

|Descrizione (type C)|Variabile SpiGes ktr_typ|
|---------|---------|
|Mantenimento di sovracapacità ospedaliere per motivi di politica regionale|701|
|Maternità|702|
|Tariffe che non coprono i costi (ad es. TARMED)|703|
|ulteriori prestazioni economicamente d'interesse generale legate agli ospedali|799|

{{</markdown>}}

Per le colonne, i ricavi sono suddivisi per conto:
 - Contributi dello stato: ktr_69.
 - Terzi: somma degli altri ktr_6*. 
 
I costi tengono conto di tutti i ktr relativi ai costi, con CUI secondo REKOLE (ktr_44_rekole). Il metodo di calcolo dei costi è indicato dalla variabile ktr_methodik.