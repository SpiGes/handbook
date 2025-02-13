---
title: Unità d'imputazione «caso»
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
Per i casi B e C, vanno indicati i costi per l'anno solare; per i casi A, i costi per l'intera durata del caso. Anche per le unità di imputazione ambulatoriali e quelle non legate a un caso, i costi si riferiscono all'anno solare. Si veda anche la colonna «Riferimento temporale» nell'elenco delle variabili.
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
Supplementi per costi di utilizzo delle immobilizzazioni (CUI) ai costi diretti:  Secondo REKOLE®, sui costi diretti (fabbisogno medico 400 e 401) possono essere indicati supplementi CUI. Tuttavia, per queste variabili CUFI e a differenza dei costi comuni, sulla piattaforma SpiGes e nel set di dati sui costi di SwissDRG non esistono variabili CUI separate su cui è possibile specificare i costi di utilizzo delle immobilizzazioni secondo REKOLE®. Nell'ITAR_K® i conti 400 e 401 devono essere indicati senza supplementi CUI. Cosa occorre fare con questi supplementi CUI sui conti 400 e 401?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}

- I supplementi CUI non devono essere indicati nei conti 400 e 401. Devono tuttavia essere inclusi nelle variabili CUI totali (ktr_44_vkl / ktr_44_rekole).
- Con la versione 1.4 dell'interfaccia, la variabile ktr_44_rekole viene convertita da variabile calcolata a variabile rilevata (e aggiunta all'XML), così da poter raccogliere un CUI REKOLE totale diverso dalla somma delle singole variabili CUFI.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le sedi puramente ambulatoriali non sono incluse nella popolazione di base dello SpiGes. ITAR_K® contiene i costi per tariffa ambulatoriale. A quale livello vengono forniti i costi puramente ambulatoriali in SpiGes?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
I costi delle sedi puramente ambulatoriali sono forniti a un livello di un altra sede nell'elemento **KostentraegerStandort** o a livello di azienda nell'elemento **KostentraegerUnternehmen** (cfr. esempio xml fittizio). I costi non sono registrati per paziente (caso) ma per tariffa ambulatoriale (ktr_typ, nell'esempio "301" = TARMED, LAMal solo AOMS).

Per garantire che questa registrazione venga effettuata correttamente in ITAR_K® (**per BURGESV**), è necessario tenere conto di quanto segue:

- Registrazione dei costi e dei ricavi dei pazienti trattati esclusivamente come pazienti ambulatoriali a livello aziendale: per le aziende con **un** ospedale (BURGESV).
- Registrazione dei costi e dei ricavi dei pazienti trattati esclusivamente come pazienti ambulatoriali a livello di una sede: per le aziende con **più** ospedali (BURGESV)

{{<insertImage image="xml_tarifambu.png" class="edge max-w-70">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}} <!--DeepL-->
Come vengono rappresentati i ricavi e le fatture se il Cantone stabilisce un budget globale?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
Se il budget globale è superiore ai ricavi o non viene utilizzato, la rappresentazione avviene normalmente. Le risposte qui riportate riguardano solo **il caso in cui il budget globale viene utilizzato e i ricavi sarebbero stati più elevati senza il budget globale**. 

Principio: i ricavi devono essere riportati sui casi.
Ci sono due varianti di procedura:
- proporzionale

I ricavi «normali» (senza budget globale) vengono ridotti di un fattore costante. Il fattore può essere calcolato solo quando sono noti i ricavi definitivi del budget globale.  
Esempio: entrate teoriche del Cantone 100 milioni, budget globale 90 milioni -> Per tutti i casi interessati dal budget globale, viene contabilizzato solo il 90% delle entrate «normali» del Cantone (o il 49,5% [90% del 55% della quota del Cantone]).

- esaurire, poi 0

imputando il 55% del Cantone ai casi fino a esaurimento del budget globale. Successivamente, non vengono più registrati ricavi sui casi rimanenti dell'anno.    
Esempio: ricavi teorici del Cantone 100 milioni, budget globale 90 milioni -> Tutti i casi vengono registrati con ricavi cantonali del 100% fino all'esaurimento del budget globale. I casi registrati successivamente non presentano alcun ricavo cantonale (0).

**Importante per la creazione di ITAR_K**: non è consentito gestire un'unità di costo separata con le riduzioni dei ricavi.

Se queste soluzioni per la fatturazione sono difficili da implementare, nel primo anno di rilevazione possono essere utilizzati altri metodi, previa consultazione con il Cantone e l'UST. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
