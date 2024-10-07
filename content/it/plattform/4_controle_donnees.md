---
title: 2. Controllo dei dati
slug: kontrole
description: "Su questa pagina viene illustrato come controllare i dati importati dalla pagina web della sede ospedaliera sulla piattaforma SpiGes."
keywords: []
weight: 30
type: docs
---

{{<alert title="Vérification à la source" color="info">}}
{{<markdown>}}
Il modo migliore è quello di controllarli direttamente alla fonte, ovvero nel sistema di input dell’ospedale. 

A tal fine, gli ospedali possono integrare nel loro sistema gli strumenti di controllo messi a disposizione dall’UST (soluzione automatizzata). Durante l’anno di riferimento, le imprese ospedaliere hanno inoltre la possibilità di verificare i propri dati sulla piattaforma SpiGes. Poiché questo controllo avviene prima del regolare inizio della rilevazione (gennaio dell’anno successivo a quello di riferimento), lo stato della rilevazione sarà «In preparazione» 

Nous avons prévu les mesures suivantes à cet effet :

- Vérification XSD : nous publions un fichier XSD qui peut être utilisé facilement pour la vérification technique des fichiers XML. Des programmes et des bibliothèques de logiciels (gratuits) peuvent être utilisés à cet effet.
- MedPlaus : L'outil MedPlaus est adapté à l'ensemble des données SpiGes et devrait être disponible dès automne 2024. Il peut également être intégré dans les logiciels hospitaliers sous forme de version DLL.
- API d'examen : Nous prévoyons une API accessible au public, qui permettra de vérifier la qualité des données fournies. En réponse aux données téléchargées, on obtient une liste des erreurs de format et des erreurs de cas individuels. Des cas individuels peuvent être fournis et les réponses peuvent être traitées automatiquement par des programmes. L'API n'est toutefois pas encore mise en œuvre. Cela sera le cas au plus tôt en 2025.
{{</markdown>}}
{{</alert>}}

## Controllo autonomo

Durante il caricamento, tutti i controlli vengono eseguiti automaticamente e i risultati vengono salvati e indicati. Anche eventuali aggiunte vengono effettuate automaticamente, fatto che permette ai dati di essere controllati anche sotto questo aspetto. 

L’impresa può quindi elaborare autonomamente i risultati dei controlli automatici e correggere i dati ove necessario caricando dati corretti. Se non è possibile correggere i dati o se il controllo automatico ha segnalato errori che non ci sono, l’impresa può scrivere un commento al riguardo sulla piattaforma giustificando la mancata correzione dell’errore rilevato dal sistema. Un controllo automatico può anche generare un’avvertenza, ovvero la segnalazione di un’imprecisione che non deve necessariamente essere giustificata o corretta. Una volta corretti o giustificati tutti gli errori, il controllo autonomo è completato. Tale controllo deve avvenire entro la fine di aprile dell’anno successivo a quello della rilevazione.

### Contrôle du format

{{<insertImage image="test_format_fr.png" class="edge max-w-90">}}

&nbsp;

1. In questa colonna sono indicate la data e l’ora dell’ultima importazione di dati.

2. In questa colonna è possibile vedere se i dati in questione hanno superato i test di controllo del formato. Se sono stati identificati errori, è possibile fare clic su ognuno di essi per visualizzare i dettagli dell’errore, in modo da poterlo correggere nel file XML e importarlo nuovamente. **ATTENZIONE:** L’importazione di nuovi dati sovrascrive quelli precedentemente importati.

3 Una volta eseguito il controllo del formato, in questa colonna vengono visualizzati gli errori rilevati per i singoli casi e che devono essere elaborati. Cliccando sul simbolo che segnala gli errori si possono vedere i dettagli del controllo.

4. Qui sono visualizzati i commenti aggiunti in precedenza. È possibile inserire commenti per spiegare i propri errori o per rispondere a commenti precedenti. È inoltre possibile creare un nuovo argomento di discussione facendo clic sulla vignetta a destra del titolo.

### Controllo casi singoli

{{<insertImage image="controle_fr.png" class="edge max-w-90">}}

&nbsp;

1. Il campo dei filtri permette di selezionare le sezioni desiderate e trovare più rapidamente ciò che si sta cercando.

2. In questa colonna si può vedere lo stato degli errori identificati per ogni regola che non è stata rispettata.

3. Qui è possibile scaricare i dati.

4. Questa freccia può essere utilizzata per visualizzare i dettagli di ogni regola così da visualizzare tutti i singoli casi per i quali la regola non è stata rispettata.

&nbsp;

{{<insertImage image="controle_detail_fr.png" class="edge max-w-90">}}

&nbsp;

1. Cliccando sulla casella quadrata è possibile selezionare più errori alla volta.

2. Questa colonna contiene la descrizione degli errori. È inoltre possibile visualizzare ulteriori dettagli facendo clic sull’errore nella colonna «ID caso».

3 In questa colonna è possibile vedere se l’errore è ancora «In sospeso», se è già stato risolto («OK») o se è stato definitivamente valutato come «Errore».

4. Qui è possibile commentare (facendo clic sulla vignetta) o scaricare i dati (facendo clic sulla freccia che punta in basso). Se non è stato selezionato alcun errore, i commenti vengono applicati a tutti gli errori, altrimenti vengono aggiunti solo agli errori selezionati.

5. Qui è possibile inserire un commento riferito esclusivamente all’errore in questione.

