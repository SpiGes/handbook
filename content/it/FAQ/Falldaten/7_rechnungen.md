---
title: Fattura 
slug: rechnungen
description: " "
weight: 70
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="rechnungen">}}

{{<numberedList>}}
{{<listItem>}}
Viene esportata una riga per ogni fattura emessa e ogni remunerazione supplementare?
{{<collapsibleBlock groupId="rechnungen">}}
La rilevazione deve essere effettuata con la stessa granularità delle righe delle fatture inviate. Se, ad esempio, per un caso con assicurazione di base sono conteggiati e fatturati all'assicurazione di base e al Cantone un forfait per caso e una remunerazione supplementare, devono essere registrate quattro righe (1. forfait Cantone, 2. remunerazione supplementare Cantone, 3. forfait assicuratore, 4. remunerazione supplementare assicuratore).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come vengono compilati i relativi campi per le fatture che non vengono fatturate attraverso SwissDRG, TARPSY o ST Reha?
{{<collapsibleBlock groupId="rechnungen">}}
{{<markdown>}}

- In linea di principio, analogamente al sito Forum Datenaustausch, la compilazione riguarda solo i trattamenti nel settore stazionario.
- Occorre chiarezza per quanto riguarda la tariffa, l'importo e la quantità.
- I campi che non hanno senso per altre tariffe possono essere lasciati vuoti.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come devono essere fornite le informazioni sui casi o sulle fatture nei casi in cui, al momento dell’esportazione dei dati, queste ultime sono state annullate?
{{<collapsibleBlock groupId="rechnungen">}}
Le informazioni sui casi devono essere fornite comunque. Per quanto riguarda le fatture, devono essere inviate le informazioni sul loro ultimo stato, per cui in caso di fattura annullata, non deve essere fornito niente.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come devono essere fornite le informazioni sui casi  A che, al momento dell'esportazione dei dati, non sono ancora stati fatturati?
{{<collapsibleBlock groupId="rechnungen">}}
Le informazioni sui casi devono essere fornite comunque. Anche in questo caso per le fatture devono essere fornite le informazioni relative al loro ultimo stato, e quindi niente.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
<!--Variabile «rech_unfallnr»: il campo relativo a questa variabile può contenere un massimo di 17 caratteri. Tuttavia, nei vecchi sistemi circolano ancora numeri di infortunio di 20 caratteri. Cosa occorre fare in questi casi?-->
Variabile «rech_unfallnr»: il campo relativo a questa variabile può contenere un massimo di 17 caratteri. Tuttavia, circolano numeri di infortunio di 32 caratteri. Cosa occorre fare in questi casi?
{{<collapsibleBlock groupId="rechnungen">}}
<!--In accordo con il Servizio centrale delle tariffe mediche LAINF (SCTM), le prime tre posizioni possono essere cancellate. Ad esempio, il seguente numero di infortunio 01.05.01.23.009999.3 sarà inviato come 05.01.23.009999.3, cioè senza il prefisso «01.».-->
Estendere il limite dei caratteri a 50.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
