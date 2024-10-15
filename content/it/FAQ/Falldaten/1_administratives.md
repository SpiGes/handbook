---
title: Dati amministrativi 
slug: admninistratives
description: " "
weight: 10
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="admninistratives">}}

{{<numberedList>}}
{{<listItem>}}
Nel set di dati SpiGes ci si aspetta che vengano inseriti casi con parentesi, ovvero casi raggruppati? Per l'elemento «Psichiatria», ANQ si aspetta di ricevere un seti di dati contenente casi singoli, quindi non raggruppati. Vi siete già accordati con ANQ riguardo all'utilizzo dei set di dati SpiGes?
{{<collapsibleBlock groupId="admninistratives">}}
Sulla piattaforma SpiGes il raggruppamento di casi viene gestito secondo le direttive di SwissDRG SA. Siamo in contatto con ANQ in merito alla gestione dei casi non raggruppati.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
fall_id_ch: chi genera questo numero di caso? E tale numero viene automaticamente inserito in Opale (sistema ERP )? Finora era possibile generare automaticamente l'identificatore dei casi in entrambi i file (quello dei dati UST e il file relativo ai costi dei casi) su Opale.
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}

- Il numero del caso, univoco a livello svizzero, è generato dalla piattaforma SpiGes. Quando i dati vengono esportati dalla piattaforma, nell'export figura anche il fall_id_ch associato ad ogni caso, che è perciò consultabile dagli utenti.
- L'identificatore del caso, la variabile fall_id, viene invece generata dagli ospedali. Il software degli ospedali (ad es. Opale) dovrebbe continuare ad avere questa funzione.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nel riferimento temporale di alcune variabili (ad. esempio «beatmung», ventilazione in italiano), si può scegliere tra «Intero caso» o «Anno di rilevazione». Nella maggior parte degli ospedali, tuttavia, questa posizione non viene considerata sull'asse temporale, bensì una volta per caso. Inoltre, nei set di dati MS utilizzati finora tali posizioni venivano fornite solo per i casi A In che forma vi prefigurate un'eventuale fornitura dei casi B e C per queste variabili?
{{<collapsibleBlock groupId="admninistratives">}}
In effetti, le definizioni di questo aspetto forse non hanno lo stesso grado di dettaglio per tutte le variabili. Ad oggi, non è stato ancora stabilito se queste variabili debbano essere fornite anche per i casi B e C. In linea di principio, dovrebbe essere possibile fornire tali informazioni, poiché solo in questo modo i dati permetterebbero di calcolare il livello di utilizzo delle capacità. Tuttavia, probabilmente molti ospedali sono nella Sua stessa situazione e non dispongono dei dati per i casi B e C. In questo caso le variabili per i casi B e C possono essere lasciate vuote.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qual è la definizione di «trasferimento interno»?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}

-	È il passaggio da un reparto (acuto, psichiatria, riabilitazione) a un altro dello stesso ospedale (burnr_gesv),
-	oppure si riferisce ai cosiddetti «pazienti in attesa».
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
È possibile ottenere una definizione per il valore «7 = Rimpatrio»?
{{<collapsibleBlock groupId="admninistratives">}}
Rimpatrio dall'estero alla Svizzera di un o una paziente con domicilio principale in Svizzera, senza particolari esigenze per i mezzi di trasporto o accompagnamento.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qual è la definizione di «trasferimento»? (ad es. i codici «5 = Trasferimento entro 24 ore» e «6 = Paziente ritrasferito» della variabile Modalità di ammissione)
{{<collapsibleBlock groupId="admninistratives">}}
{{<unorderedList>}}
{{<listItem>}}
La variabile Modalità di ammissione esisteva già nella MS e non ha subito modifiche nella piattaforma SpiGes. La differenza tra un trasferimento e un trasferimento interno, è che il primo non avviene all'interno dello stesso ospedale (BURGESV), ma tra ospedali diversi (due BURGESV diversi). La definizione si basa sui principi di SwissDRG AG, che potete trovare qui:
{{<link url="https://www.swissdrg.org/it/somatica-acuta/sistema-swissdrg-1302024/regole-e-definizioni" newTab="true">}}regole e definizioni{{</link>}}
{{</listItem>}}.

{{<listItem>}}
La seguente specifica è stata comunicata da SwissDRG AG per il tipo di ricovero "6=Retransfer": Per un ricovero ininterrotto in un altro ospedale per più di 18 giorni e ritorno all'ospedale di origine.
{{</listItem>}}
<!-- A traduire: new FAQ
{{<listItem>}}
Selon SwissDRG SA, le retransfert n'est utilisé comme type d'entrée que si le patient a séjourné plus de 18 jours dans un autre hôpital et qu'il y retourne, ouvrant ainsi un nouveau cas.
{{</listItem>}}

{{<listItem>}}
Un patient qui revient à l'hôpital dans les 18 jours reçoit l'indication du type d'entrée de sa première entrée, car il est regroupé.
{{</listItem>}}-->
{{</unorderedList>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come vengono codificati i casi trasferiti dalla riabilitazione (tariffa ST-REHA) alla lungodegenza (tariffa «tasse per le cure») nella stessa struttura? Le variabili 1.2.V02 e 1.5.V03 non consentono di specificare «Lungodegenza, stesso stabilimento».
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
Questo era già così per la MS; il caso passa dalla riabilitazione alla SOMED (stesso stabilimento); il codice 2 contiene entrambe le opzioni (stesso stabilimento o altro stabilimento). Il caso deve essere codificato come segue:
- austritt_aufenthalt: 2 = casa di cura,
- eintritt_aufenthalt: 84 = Reparto/Clinica di riabilitazione, stesso stabilimento.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}
<!--
### Variabile «Wohnland»: 
-->
{{<listItem>}}
Nella descrizione delle variabili "wohnland" (paese di domicilio) è menzionata una distinta ripartizione dei Paesi extraeuropei in regioni. Questo elenco esiste già o sarà pubblicato in futuro?
{{<collapsibleBlock groupId="admninistratives">}}
{{<unorderedList>}}
{{<listItem>}}
La procedura e l'elenco sono gli stessi che valevano per la MS. Ecco il link per consultare l'elenco:{{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiken/gesundheit/nomenklaturen/medsreg.html" newTab="true">}}medsreg{{</link>}}.
{{</listItem>}}
{{<listItem>}}
Per i Paesi extraeuropei possono essere indicate regioni, ma è possibile anche indicare i codici dei Paesi. Questo era già così nella MS ed è rimasto invariato. Il formato è alfanumerico e può quindi contenere sia numeri che lettere.
{{</listItem>}}
{{</unorderedList>}}
{{</collapsibleBlock>}}
{{</listItem>}}

<!--
###	35.	Variabile "classe assicurativa": 
-->
{{<listItem>}}
Nella descrizione della variabile "versicherungsklasse" (classe assicurativa) c'è scritto che va indicata per tutti esclusi i pazienti autopaganti. Nel file xsd. il campo figura tuttavia come «required». Cosa dobbiamo quindi fornire per i pazienti autopaganti?
{{<collapsibleBlock groupId="admninistratives">}}
In effetti l'indicazione è un po' contradditoria. Per essere sicuri che il campo non rimanesse vuoto nei casi diversi dai pazienti autopaganti, abbiamo deciso di definire il campo come «required». Ciò significa che va effettivamente compilato anche per i pazienti non paganti. In questo caso indicare il codice 9 = sconosciuto.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Secondo la nostra amministrazione pazienti, è difficile ottenere l'informazione per i casi con «assicurazione flex» e inserire il codice «8 = altro». In caso non indicassimo o non fosse possibile indicare il codice «8 = altro» questo comporterebbe problemi per le analisi successive? In che modo ciò influenzerebbe la statistica?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}

- I casi con assicurazione flex e tutti gli altri modelli assicurativi che stanno diventando sempre più popolari non sono effettivamente facili da descrivere. Anche per quanto riguarda la loro classe assicurativa non è semplice, ma non rappresentano un grave problema per la statistica. In caso di dubbio, questi casi devono essere indicati come semi-privati.
- La variabile «liegeklasse» (classe di degenza), invece, è centrale per la rappresentazione dell'ITAR_K®. Non c'è infatti nessuna categoria «altro» e i casi registrati con il codice «9 = sconosciuto» saranno esaminati. A seconda del valore di questa variabile, i casi vengono infatti assegnati a una colonna diversa nell'ITAR_K®.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}
<!-- A traduire: new FAQ
{{<listItem>}}
Pour les différentes variables concernant le séjour IPS et les points de charge ("aufenthalt_ips"), nous ne savons pas très bien si les variables doivent être exportées avec 0 ou pas du tout lorsqu'un cas ne se trouve pas aux soins intensifs. Le domaine de valeurs indiqué ici est toujours 0-xxx.
{{<collapsibleBlock groupId="admninistratives">}}
Comme l'indication n'est pas obligatoire (required), la variable n'est pas livrée du tout lorsqu'un cas n'est pas aux soins intensifs.
{{</collapsibleBlock>}}
{{</listItem>}}-->

{{</numberedList>}}
{{</faqBlock>}}
