---
title: ITAR_K® 
slug: ITAR_K
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="ITARK">}}

{{<numberedList>}}
{{<listItem>}}
Nel quadro della SpiGes sono rilevate solo informazioni in merito ai casi di cure stazionarie. Come deve essere compilata la parte dell'ITAR_K® riservata alle cure ambulatoriali?
{{<collapsibleBlock groupId="ITARK">}}
ITAR_K® può essere creato con i dati SpiGes. I dati ambulatoriali sono rilevati nei tipi di CUFI previsti a questo scopo (ad es. la tariffa di laboratorio).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come viene creato ITAR_K® delle cliniche che costituiscono solo una parte di un'impresa ospedaliera? (ad es., la clinica St. Anne di Friburgo fa parte della Swiss Medical Network AG).
{{<collapsibleBlock groupId="ITARK">}}
Sarà la clinica St. Anne di Friburgo a compilare la contabilità finanziaria (e tutti gli altri dati) per la statistica ospedaliera per ogni sua clinica (livello BURGESV). I costi di SpiGes possono essere aggregati in base al BURGESV.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
I dati sui costi devono essere inseriti entro il 31 marzo. È necessario fare una revisione di questi dati? Al momento non siamo in grado di eseguire una revisione, in quanto il bilancio annuale è sottoposto a revisione solo alla fine di marzo.
{{<collapsibleBlock groupId="ITARK">}}
Entro questa scadenza, i dati sui costi dovranno essere stati controllati automaticamente per la prima volta sulla piattaforma SpiGes. La revisione potrà avvenire in un secondo tempo.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Non riusciamo a trovare una variabile SpiGes che permetta di trasferire i ricavi/costi della PEIG direttamente associati a un caso nella colonna PEIG prevista a questo scopo nell'ITAR_K®. Come viene calcolata la colonna PEIG dell'ITAR_K® con i dati SpiGes?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

- Non ci sono costi o ricavi per prestazioni economicamente d’interesse generale (PEIG) direttamente legati a un caso. Nella raffigurazione delle PEIG, la SpiGes si attiene alla giurisprudenza e alle raccomandazioni dell'associazione degli ospedali H+ e la sua soluzione settoriale REKOLE®.
- Secondo REKOLE®, le imprese ospedaliere possono fornire PEIG per compiti speciali e/o per la ricerca e la formazione universitaria. I costi e i ricavi per queste prestazioni sono contabilizzati per mandati delimitati in modo chiaro (cap. 9.10 della Checklist di REKOLE®). REKOLE® prevede anche che i ricavi derivanti da altri contributi finalizzati al mantenimento di capacità ospedaliere speciali per motivi di politica regionale o da contributi per tariffe che non sarebbero altrimenti coperte siano attribuiti a unità di imputazione o di ricavo che contengono solo ricavi. A questi ricavi non corrisponde tuttavia nessuna prestazione definita. Non devono pertanto influire sui costi degli stabilimenti che offrono cure stazionarie (cap. 9.11.3 di REKOLE®).
- Nell'elenco delle variabili SpiGes, la definizione della variabile «ktr_typ» dice quanto segue: «Qui va indicato il tipo di unità finale di imputazione (UFI): caso (=1) o **mandato** con sottocategorie di precisazione. Le caratteristiche vanno riprese dal foglio «Tipi UFI». **Per ogni PEIG e servizio annesso deve essere compilata una riga**. Nel foglio «Tipi UFI» sono riportate anche indicazioni specifiche per le singole unità finali di imputazione. Questa variabile è rilevante per l'attribuzione dei casi alle colonne in ITAR_K®. I costi/ricavi delle PEIG sono quindi rilevati da SpiGes nella sezione CUFI (KTR) e la loro somma è inserita nella colonna PEIG del file ITAR_K®.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
ITAR_K® può essere compilato sia a livello di impresa che di sede. Cosa è richiesto di fare per la SpiGes? Sono i Cantoni a decidere?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

- ITAR_K® viene sempre compilato al livello BURGESV ; questo livello deve corrispondere alla rilevazione della SO. Il Cantone fornisce all'UST queste informazioni nell'ambito della rilevazione dell'universo statistico. In questo senso, il Cantone può influire sulla decisione. Deve tuttavia accordarsi con l'ospedale.
-	ITAR_K® è lo strumento di base per le trattative tra ospedali e assicurazioni. Il fatto che il Cantone abbia voce in capitolo sulla granularità dipende se si tratta di un ospedale figurante nell'elenco del Cantone, di un ospedale convenzionato oppure di un ospedale autonomo.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Da quando sarà possibile generare ITAR_K® direttamente dalla piattaforma SpiGes?
{{<collapsibleBlock groupId="ITARK">}}
In futuro, lo strumento principale per l'elaborazione delle strutture tariffali e per la verifica dell'economicità delle prestazioni sarà creato attraverso la piattaforma SpiGes. Per garantire una transizione sicura e corretta, per generare l'ITAR_K® è previsto che in un primo periodo la vecchia e la nuova piattaforma (rispettivamente H+ e SpiGes) funzionino in parallelo. Nel 2025 (dati del 2024), l'ITAR_K® ufficiale continuerà a essere quindi creato dalla piattaforma H+ come in precedenza. A partire da settembre 2025, tutti gli ospedali avranno in più la possibilità di creare l'ITAR_K® 2025 (dati del 2024) tramite la piattaforma SpiGes e di confrontare i due risultati. In tal modo sarà possibile risolvere eventuali ambiguità prima dell'introduzione produttiva della creazione dell'ITAR_K® tramite la piattaforma SpiGes nel 2026 per i dati del 2025.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
