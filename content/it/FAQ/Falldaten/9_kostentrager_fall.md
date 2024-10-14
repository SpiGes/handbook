---
title: Unità d’imputazione «caso»
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="kostentraeger">}}

{{<numberedList>}}
{{<listItem>}}
Come devono essere presentati i costi dei casi C medico-legali (vari anni di degenza)? Per il caso intero (intera durata di degenza) o solo per i costi del rispettivo anno solare e il resto tramite delimitazioni?
{{<collapsibleBlock groupId="kostentraeger">}}
Per i casi B e C, vanno indicati i costi per l’anno solare; per i casi A, i costi per l’intera durata del caso. Anche per le unità di imputazione ambulatoriali e quelle non legate a un caso, i costi si riferiscono all’anno solare. Si veda anche la colonna «Riferimento temporale» nell’elenco delle variabili.
{{</collapsibleBlock>}}
{{</listItem>}}
<!--
{{<listItem>}}
I casi di lungodegenza possono essere forniti in SpiGes con KTR tipo 101=lungodegenza come unità di costo indipendente dal caso, anche se il SOMED per l'assistenza di lungodegenza viene registrato in parallelo?
{{<collapsibleBlock groupId="kostentraeger">}}
Se l'organizzazione compila il SOMED, questi costi devono essere registrati in SpiGes tramite il tipo KTR 101. Al contrario, i singoli casi di lunga durata in cure acute e riabilitazione (pazienti in attesa) devono essere mappati come tipo KTR 1 (=caso) e la corrispondente tariffa 7 (=tassa di cura). In questo modo si garantisce la correttezza dell'ITAR_K e delle statistiche.
{{</collapsibleBlock>}}
{{</listItem>}}
-->
{{<listItem>}}
Supplementi per costi di utilizzo delle immobilizzazioni (CUI) ai costi diretti:  Secondo REKOLE®, sui costi diretti (fabbisogno medico 400 e 401) possono essere indicati supplementi CUI. Tuttavia, per queste variabili CUFI e a differenza dei costi comuni, sulla piattaforma SpiGes e nel set di dati sui costi di SwissDRG non esistono variabili CUI separate su cui è possibile specificare i costi di utilizzo delle immobilizzazioni secondo REKOLE®. Nell’ITAR_K® i conti 400 e 401 devono essere indicati senza supplementi CUI. Cosa occorre fare con questi supplementi CUI sui conti 400 e 401?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}

- I supplementi CUI non devono essere indicati nei conti 400 e 401. Devono tuttavia essere inclusi nelle variabili CUI totali (ktr_44_vkl / ktr_44_rekole).
- Con la versione 1.4 dell’interfaccia, la variabile ktr_44_rekole viene convertita da variabile calcolata a variabile rilevata (e aggiunta all’XML), così da poter raccogliere un CUI REKOLE totale diverso dalla somma delle singole variabili CUFI.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}