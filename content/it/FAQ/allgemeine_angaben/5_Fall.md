---
title: Delimitazione dei casi
slug: Fall
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="Fall">}}

{{<numberedList>}}
{{<listItem>}} <!--DeepL-->
Anche gli accompagnatori stazionari fanno parte della trasmissione dei dati SpiGes ?
{{<collapsibleBlock groupId="Fall">}}
Generalmente gli accompagnatori (genitori, figli, partner) non sono casi stazionari, richiedono solo servizi alberghieri (senza prestazioni mediche) e non vengono registrati (era già così nella MS).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come devono essere forniti i dati sui pazienti in attesa per la rilevazione SpiGes ?
{{<collapsibleBlock groupId="Fall">}}
{{<markdown>}}
I *pazienti in attesa* (la nomenclatura può variare a seconda del Cantone) sono casi di pazienti che, pur non necessitando più di cure ospedaliere acute, non possono ancora essere dimessi/e perché ancora in attesa di una visita di controllo. Vanno distinti due casi: il primo caso riguarda il normale trattamento somministrato durante le cure ospedaliere acute ed è fatturato secondo le tariffe SwissDRG, ST Reha, TARPSY o altre tariffe ospedaliere. Il secondo caso si riferisce all'attesa, durante la quale non vi è necessità di cure ospedaliere.  

Tali casi devono essere registrati come segue:

- Primo caso
    - Decisione della dimissione «trasferimento interno» (austrittsentscheid = 4) se il paziente rimane nello stesso ospedale.
    - Residenza dopo la dimissione (austritt_aufenthalt) 44, 55 o 66 a seconda del reparto o della clinica dove il paziente si trova fisicamente
- Secondo caso (caso in attesa)
    - Tariffa = 7 (tasse per le cure) poiché di solito questi casi vengono contabilizzati come pazienti in cura. In casi eccezionali, se il finanziamento è diverso, può essere indicata una voce tariffaria diversa.  
    
*Se per lo stabilimento ospedaliero non è possibile indicare questi casi singolarmente, è necessario indicare i costi per i casi di pazienti in attesa sotto ktr_typ 101, così da fornire i dati sui costi totali e compilare correttamente l'ITAR_K®. Se le altre non sono praticabili, come ultima opzione i costi dei casi di pazienti in attesa sono dedotti al momento degli aggiustamenti del ponte di sintonizzazione della KS.*
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
