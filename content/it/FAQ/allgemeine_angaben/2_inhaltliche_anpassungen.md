---
title: Adeguamenti del contenuto
slug: inhaltliche_anpassungen
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="contenu">}}

{{<numberedList>}}
{{<listItem>}}
Quali variabili cambiano con SpiGes?
{{<collapsibleBlock groupId="contenu">}}
{{<unorderedList>}}
{{<listItem>}}
SpiGes ha un impatto importante sul processo di verifica e sul formato dei dati contenuti nella fornitura. Per quanto riguarda i dati medici (attuale MS), cambiano solo pochi punti. I più importanti sono probabilmente i seguenti :
{{<markdown>}}

- il trattamento principale è abolito;
- il complemento alla diagnosi principale è abolito;
- è possibile registrare un numero illimitato di diagnosi e trattamenti;
- il tempo di prestazione medica chirurgica viene registrato sotto procedure chirurgiche;
- per le procedure chirurgiche, l’inizio del trattamento deve essere registrato con l’ora (dell’operazione nel suo complesso);  
- la relazione tra più diagnosi (croce/asterisco, punto esclamativo) viene ora registrata con una variabile di riferimento (diagnose_zusatz) anziché con il carattere speciale.
{{</markdown>}}
{{</listItem>}}

{{<listItem>}}
Il modo migliore per tenere traccia di tutte le modifiche apportate al set di dati e dei dettagli esatti è quello di esaminare l’elenco delle variabili e filtrare la colonna «Nuova / Variabile MS» secondo le variabili nuove e quelle adattate.
{{</listItem>}}

{{<listItem>}}
Da ora i dati delle fatture e i costi o i ricavi vengono raccolti per ogni caso.
{{</listItem>}}

{{<listItem>}}
Il {{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html" newTab="true">}}set di dati completo{{</link>}}è disponibile qui.
{{</listItem>}}

{{</unorderedList>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Che ripercussioni ha SpiGes sulle direttive di codifica?
{{<collapsibleBlock groupId="contenu">}}
Queste informazioni sono riportate nel {{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/nomenclatures/medkk.html" newTab="true">}}Manuale di codifica{{</link>}}.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qual è il contenuto del rapporto di verifica?
{{<collapsibleBlock groupId="contenu">}}
Il contenuto esatto del rapporto di verifica dipende dalle verifiche, che sono attualmente in fase di elaborazione all’interno di un gruppo di lavoro in cui sono rappresentati tutti gli stakeholder. In sostanza, il rapporto di verifica contiene tutte le verifiche che sono state avviate e le motivazioni ufficiali relative a tali verifiche (un estratto della chat relativa alla verifica).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Gli ospedali pilota saranno in grado di creare un primo «set di dati» già nella primavera del 2024. Altri Cantoni hanno invece richiesto l’invio di un primo file di dati XML entro settembre. Per questi invii sono richiesti dati reali provenienti da un sistema di produzione o sono sufficienti dati di prova provenienti da un sistema di test? In altre parole, La «vera» analisi dei dati inizierà solo nel 2025 o l’UST vuole analizzare anche dati reali del 2024?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}

- Per l’invio degli ospedali pilota della primavera del 2024 si richiedono dati reali provenienti da un sistema di produzione. Questi sono analizzati solo per acquisire conoscenze sull’invio pilota.
- Entro agosto 2024, tutti gli ospedali (in tutti i Cantoni) devono effettuare un test dell’interfaccia per verificare che l’implementazione tecnica dell’interfaccia funzioni. A tal fine sono sufficienti anche invii parziali da sistemi di prova.
- Dal 1.1. 2025 tutti gli ospedali devono fornire dati reali per il 2024 provenienti da sistemi di produzione e, entro la fine di aprile devono controllarli tutti e, se necessario, aggiungere commenti.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Valori scambiati: abbiamo notato che i valori di alcune variabili sono diversi rispetto alla statistica MS. A titolo di esempio ecco i valori della variabile «Stato vitale».
{{<markdown>}}		
Statistiche MS:
0 = nato morto
1 = nato vivo
SpiGes (esattamente l’opposto):
0 = nato vivo
1 = nato morto
Altri esempi si possono trovare per le variabili «Formazione scolastica» e «Stato civile». A nostro avviso, non sembra una scelta ottimale e vorremmo quindi sapere se questa scelta è stata fatta intenzionalmente e, in caso affermativo, perché?
{{</markdown>}}
{{<collapsibleBlock groupId="contenu">}}
La scelta è stata intenzionale. In linea con il principio «once-only», abbiamo integrato gli elenchi di codici e i metadati in un sistema dell’UST, che viene poi anche pubblicato. I nuovi elenchi di codici corrispondono ora allo standard della piattaforma di interoperabilità i14y.admin.ch, valido a livello svizzero; in precedenza si trattava di una soluzione specifica solo alla MS.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Valori calcolati: Nell’elenco delle variabili alcune righe sono scritte in grigio con l’indicazione «calcolato» (ad es. la variabile «uid»). Significa che li dobbiamo inviare vuoti nell’XML e che sarà l’UST ad occuparsi di calcolarli e inserirli? Oppure significa che non dobbiamo proprio inviare questa variabile bensì semplicemente ignorarla?
{{<collapsibleBlock groupId="contenu">}}
Come si può vedere dallo schema XML, queste variabili calcolate non sono incluse. Possono quindi essere ignorate.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
