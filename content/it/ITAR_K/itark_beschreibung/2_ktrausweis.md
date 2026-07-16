---
title: Rilevamento CUFI
slug: ktrausweis
description: " "
weight: 30
type: docs
keywords: []
---

Le variabili SpiGes corrispondono ai dettagli dei conti. Gli importi vengono quindi calcolati aggregando per itark_spalte per ciascun KTR (CUFI).

{{<markdown>}}

|Conto|Descrizione|Variabile SpiGes|
|---------|---------|---------|
|60|Ricavi da prestazioni mediche, di cura e terapeutiche per pazienti|ktr_60|
|61|Prestazioni mediche singole|ktr_61|
|62|Altre prestazioni ospedaliere singole|ktr_62|

{{</markdown>}}
...

{{<markdown>}}

|Conto|Descrizione|Variabile SpiGes|
|---------|---------|---------|
|400|Medicamenti (escl.il sangue e i suoi derivati)|ktr_4001|
|400|Sangue e i suoi derivati|ktr_4002|
|401|Materiale (escl. Impianti), strumenti, utensili, tessili|ktr_4011|

{{</markdown>}}
...

{{<markdown>}}

|Conto|Descrizione|Variabile SpiGes|
|---------|---------|---------|
|10|Amministrazione pazienti|ktr_10|
|20|Sala operatoria|ktr_20|
|21|Laboratorio per il cateterismo cardiaco|ktr_21|

{{</markdown>}}
...

Note particolari:
 - **Amministrazione pazienti**  
Per l'ambulatorio possono utilizzare due metodi. A tal fine, due righe nascoste consentono di operare questa distinzione nel file ITAR_K®. La prima riga tiene conto del totale definito dalla variabile ktr_403, che viene poi ripartito tra le diverse tariffe in base all'attività (formula gestita da H+ a livello del file Excel). La seconda riga tiene conto dei dettagli forniti dalle tariffe ambulatoriali. La riga visibile somma le due righe per ottenere l’importo finale. Questo funzionamento viene riprodotto per i CUI OCPre e REKOLE (ktr_403 rispetto ad altri ktr ambulatoriali).
 - **Costi imputati per l'utilizzo di immobilizzazioni (CUI)**  
Per i CUI OCPre viene utilizzata la variabile ktr_44_vkl. Per i CUI REKOLE viene utilizzata la variabile ktr_44_rekole.