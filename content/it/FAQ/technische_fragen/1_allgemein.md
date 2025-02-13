---
title: In generale
slug: allgemein
description: " "
weight: 20
type: docs
keywords: []
---
<!-- A revoir: new FAQ-->
{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="allgemein">}}

{{<numberedList>}}
{{<listItem>}}
C'è un modello di formato per l'importazione dei dati nell'applicazione SpiGes?
{{<collapsibleBlock groupId="allgemein">}}
Sì, vanno utilizzati imperativamente i formati nel piano dell'interfaccia.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
L'UST ha informato anche i grandi fornitori di software per l'amministrazione dei pazienti (SAP)? Stanno già sviluppando soluzioni software? Presumibilmente in futuro il file XML dovrebbe poter essere creato nel software per l'amministrazione dei pazienti.
{{<collapsibleBlock groupId="allgemein">}}
Nel gennaio 2023 abbiamo organizzato un evento informativo per il produttore KIS (software per l'amministrazione dei pazienti). Era presente anche SAP. L'UST tiene costantemente informato questo gruppo sullo stato di avanzamento della piattaforma SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
In base all'elenco delle variabili 1.3 vi sono le seguenti tabelle:
{{<markdown>}}
|||
|-----------|-----------|
| 1 | Amministrativo |
| 2 | Neonati |
| 3 | Psichiatria |
| 4 | CUFI |
| 5 | Diagnosi |
| 6 | Trattamenti |
| 7 | Operatore |
| 8 | Medicamenti |
| 9 | Fattura |
| 10 | Trasferimento pazienti |
| 11 | Dati cantonali |
| 12 | Identificatore personale |

{{</markdown>}}

È possibile presentare tutte queste tabelle come un unico file xml in SpiGes?
{{<collapsibleBlock groupId="allgemein">}}
La tabella 12 Identificatori personali deve essere fornita in un file separato (per motivi di protezione dei dati). Per le tabelle rimanenti viene definito un file diverso, che però supporta le forniture parziali. In teoria, è quindi possibile consegnare tutte le tabelle in un unico file XML come consegne parziali. Tuttavia, si sconsiglia questa soluzione, in quanto richiede una laboriosa armonizzazione delle varie tabelle (per garantire che le informazioni su tutti i casi siano disponibili in tutti i file). Informazioni più dettagliate su questo argomento sono disponibili sul nostro {{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.html" newTab="true">}}sito web{{</link>}} nella descrizione del file XML per l'importazione dei dati nella piattaforma SpiGes .
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}} <!--DeepL-->
È vero che la trasmissione dei dati alla SwissDRG SA nel formato SpiGes non consente consegne parziali?
{{<collapsibleBlock groupId="allgemein">}}
A questo proposito, consultare le indicazioni sul sito web di SwissDRG SA per la rilevazione 2025 (dati 2024) (ad es. medicina somatica acuta).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Esiste la possibilità per le piccole imprese di creare un file XML a partire da un file Excel (in cui viene inserita la CUFI)? C'è un fornitore che ha in programma di attuare questa soluzione?
{{<collapsibleBlock groupId="allgemein">}}
Sì, esistono fornitori privati che offrono questo strumento. Pertanto, l'UST al momento non sta portando avanti l'idea di svilupparne uno.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
È previsto di mettere a disposizione un Excel per i costi indipendenti dai casi, in cui l'impresa possa compilare i costi indipendenti dai casi in formato Excel e poi esportarli in formato XML?  
{{<collapsibleBlock groupId="allgemein">}}
La fornitura separata di diversi tipi di elementi XML è consentita. Ciò significa che i centri di costo indipendenti dai casi possono sempre essere consegnati in un file diverso da quello dei centri di costo dipendenti dai casi. Esistono fornitori privati che offrono questo strumento. Pertanto, l'UST al momento non sta portando avanti l'idea di svilupparne uno.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Il file di esportazione SpiGes ha la stessa struttura del file che gli ospedali importano in SpiGes?
{{<collapsibleBlock groupId="allgemein">}}
Ci saranno diversi file di esportazione. Da un lato, sarà possibile esportare il file XML che gli ospedali importano, dall'altro sarà possibile esportare in un formato semplice (diversi file CSV).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nel formato XML la sequenza delle variabili all'interno di una riga è determinante?
{{<collapsibleBlock groupId="allgemein">}}
{{<markdown>}}

- La sequenza degli elementi è predefinita e non può essere modificata. Al massimo possono essere omessi degli elementi. Quindi, per l'elemento caso, i sottoelementi devono sempre essere inseriti nell'ordine «Dati amministrativi», «Neonati», «Psichiatria», «UFI (caso)», «Diagnosi», «Trattamenti», «Medicamenti», «Fattura», «Trasferimento paziente» e «Dati cantonali».
- La sequenza dei singoli attributi da inserire nei campi può invece essere scelta liberamente. Ad esempio, nell'elemento «Administratives» (Dati amministrativi) si possono inserire attributi sia nella sequenza «…geschlecht="2" alter="37"…» che nella sequenza «…alter="37" geschlecht="2"…».
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
È anche possibile che il campo relativo a una variabile all'interno di una riga sia vuoto laddove la clinica non abbia nulla da inserire in quella riga per quella determinata variabile? Oppure in ogni riga devono sempre esse compilate tutte le variabili dell'interfaccia?
{{<collapsibleBlock groupId="allgemein">}}
Sì, è possibile che il campo di una variabile venga lasciato vuoto. Alcune variabili, tuttavia, devono essere inserite imperativamente. Esse sono contrassegnate come «required» nel file di definizione XSD ("xs:attribute name="fall_id" use="required"). Aggiungeremo questa informazione anche all'elenco delle variabili.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le variabili prive di contenuto possono essere consegnate anche con un valore ZERO (ad es., righe CUFI complete con ZERI nelle variabili in cui non è presente nulla)?
{{<collapsibleBlock groupId="allgemein">}}
Dipende dalle variabili. Per le variabili CUFI, è possibile compilare tutte le variabili con il valore «0». Tuttavia, le variabili vuote («») o i valori nulli (»ZERO») non sono ammessi. Se si desidera controllare questo aspetto in concreto, è possibile convalidare il file XML rispetto alla definizione XSD. A tal fine esistono online appositi strumenti gratuiti. Si noti che su tali piattaforme non è consentito caricare dati reali. Tuttavia, è possibile utilizzarle per controllare esempi di file fittizi. Anche la piattaforma SpiGes appronterà una convalida del genere.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ci sarà un software di plausibilità simile a Medplaus che potrà essere utilizzato localmente all'interno degli ospedali prima del caricamento?
{{<collapsibleBlock groupId="allgemein">}}
Un simile tool di test sarà messo a disposizione tramite API (Application Programming Interfaces). Tuttavia, sarà pronto solo nel corso del prossimo anno. Fino ad allora, consigliamo di continuare a utilizzare MedPlaus. Ve ne sarà anche una versione per il 2024.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Si sa già quale sarà la procedura per quanto riguarda i dati cantonali aggiuntivi? Diversi Cantoni (ad es. LU, GR, VS e VD) dispongono già di una riga MK. Inoltre, anche i Cantoni di ZH e BE raccolgono dati aggiuntivi all'interno della piattaforma SDEP (Spitaldatenerhebungsplattform). Sapete già se questi dati saranno integrati nell'esportazione SpiGes o se dovranno essere esportati separatamente?
{{<collapsibleBlock groupId="allgemein">}}
{{<unorderedList>}}
{{<listItem>}}
I dati cantonali aggiuntivi sono stati presi in considerazione nell'interfaccia ; vedi {{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.assetdetail.32129189.html" newTab="true">}}la descrizione del file XML per l'importazione dei dati nella piattaforma SpiGes{{</link>}}.
{{</listItem>}}
{{<listItem>}}
Sebbene i dati cantonali aggiuntivi possano essere indicati nell'XML, quando vengono importati sulla piattaforma SpiGes non vengono poi elaborati ulteriormente. I Cantoni ne verificano la plausibilità e li elaborano separatamente.
{{</listItem>}}
{{<listItem>}}
I dati cantonali possono essere esportati solo dall'ospedale stesso e dal Cantone. I dati cantonali di questi utenti sono probabilmente contenuti nello stesso file XML che contiene il resto dei dati.
{{</listItem>}}
{{</unorderedList>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Sarà possibile effettuare correzioni direttamente sulla piattaforma?
{{<collapsibleBlock groupId="allgemein">}}
No, la piattaforma non offre la possibilità di inserire o correggere i dati. L'obiettivo è correggere gli errori alla fonte, cioè nei sistemi degli ospedali, in modo che le future esportazioni siano coerenti e che nelle prossime rilevazioni gli errori non si verifichino più.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nuovi formati: Ci sono nuovi formati, ad esempio per rech_betrag il formato è N10.2. Presumiamo che si riferisca alla specificazione delle cifre decimali. In questo caso 2 cifre decimali e una lunghezza totale di 12 cifre, giusto?
{{<collapsibleBlock groupId="allgemein">}}
N10.2 indica un numero con un totale di 10 cifre, di cui 2 dopo la virgola (e quindi un massimo di 8 cifre prima della virgola).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nuove variabili medi_id e rech_id: Dalla descrizione non è chiaro se si tratti di numeri sequenziali o di ID effettivi del sistema. Se sì, quali? Per il medi_id abbiamo pensato subito all'ATC_Code, ma esiste già una variabile per questo codice.
{{<collapsibleBlock groupId="allgemein">}}
{{<markdown>}}

- Le due nuove variabili «medi_id» e «rech_id» sono entrambe identificatori necessari dal punto di vista tecnico per garantire un'assegnazione univoca. Non devono necessariamente iniziare con 1, ma devono essere unici per ogni caso.
- Il modello di file XML 1.3, disponibile sulla nostra homepage, contiene un esempio al riguardo. medi_id="1" contiene l'informazione che si tratta del primo farmaco ad alto costo secondo le direttive di SwissDRG SA per questo caso specifico.
{{</markdown>}}
{{<insertImage image="Image5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nei file di esempio, per il file di identificatori e il file di dati ci sono due campi relativi alla versione. Queste versioni però non corrispondono. Nell'intestazione è indicata la versione 1.0 mentre nel tag "Unternehmen" è indicata la versione 1.3. Perché i numeri di versione sono diversi? Come sapere quando specificare un numero o l'altro?
{{<collapsibleBlock groupId="allgemein">}}
{{<insertImage image="Image6.jpg" class="edge max-w-90">}}

{{<lineBreak>}}
{{<markdown>}}
`?xml version="1.0"` rimane sempre così.
La versione indicata più in alto si riferisce infatti al file XML stesso, mentre quella più in basso all'XML specifico di SpiGes.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
