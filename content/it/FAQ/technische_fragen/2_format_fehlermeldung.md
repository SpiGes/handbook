---
title: Controlli di formato e messaggi di errore
slug: format_fehlermeldung
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="format_fehlermeldung">}}

{{<numberedList>}}
{{<listItem>}}
Termini generali utilizzati nei messaggi di errore
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<markdown>}}

- Elemento = Parte della rilevazione (ad es. impresa, sede, caso ecc.).
- Attributo = Variabile (ad es. ent_id, burnr ecc.).
{{</markdown>}}
{{<insertImage image="tf1.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quali errori causano il messaggio « 500 Internal Server Error » ?
{{<collapsibleBlock groupId="format_fehlermeldung">}}
Le cause di questo errore possono essere diverse e sono elencate qui di seguito:
{{<markdown>}}

1.	File vuoto
2.	File troppo grande
3.	Intestazione sbagliata
4.	Non codificato con UTF 8
{{</markdown>}}
{{<lineBreak>}}
{{<markdown>}}
Intestazione :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Entreprise 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns="http://www.bfs.admin.ch/xmlns/gvs/spiges-data/1.3" 
    ent_id="xxxxxxx" 
    version="1.3"
>
```

Per verificare se il file è stato codificato con UTF 8, è sufficiente aprirlo con Notepad o con l'editor di file .txt. Il tipo di codifica è indicato in basso a destra.
{{<insertImage image="tf2.png" class="edge max-w-90">}}
{{<lineBreak>}}
In caso la codifica non corrisponda a quella desiderata, per modificarla basta salvare il file di testo (.txt) cliccando su «Salva con nome» e selezionando la codifica giusta (UTF 8).
{{<insertImage image="tf3.png" class="edge max-w-90">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Cosa significa il seguente messaggio di errore ?
{{<insertImage image="tf4.png" class="edge max-w-90">}}
{{<collapsibleBlock groupId="format_fehlermeldung">}}
«Not declared» indica che la variabile non è definita correttamente (ad es., che le maiuscole e minuscole della variabile «Canton_additional_data» sono sbagliate»; oppure che «missbildung» non è una variabile dell'elenco ecc.).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Messaggi di errore che indicano che il formato o il valore non sono corretti :
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Messaggi di errore che indicano che le parti della rilevazione (elementi) contengono errori di struttura o nella sequenza :
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf6.png" class="edge max-w-90">}}
{{<lineBreak>}}
Ad esempio, sotto «Fall», l'elemento «Operierende» è posizionato allo stesso livello di «Behandlung».
{{<insertImage image="tf7.png" class="edge max-w-90">}}
{{<lineBreak>}}
Siccome il medico operante dipende dal trattamento, la struttura corretta vorrebbe l'elemento «Operierende» un livello sotto all’elemento «Behandlung».
{{<insertImage image="tf8.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Errore di formato «behandlung_beginn» :
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf9.png" class="edge max-w-90">}}
{{<lineBreak>}}
La variabile è definita nel file XSD come segue :
{{<lineBreak>}}
{{<insertImage image="tf10.png" class="edge max-w-90">}}
{{<lineBreak>}}
Per la variabile «behandlung_beginn» l'indicazione dell'ora non è obbligatoria e può essere indicata solo la data (ad es.20230110). Se viene indicata, deve però avere un formato a 4 cifre (ad es. 202301100000). Nel caso raffigurato, l'ora ha tre cifre sole e questo formato non è ammesso. N. B.: L'ora 0000 indica la mezzanotte e non deve mai essere inserita per i casi in cui non si vuole indicare l'ora.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Errore di formato «rech_menge» :
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf11.png" class="edge max-w-90">}}
{{<lineBreak>}}
La variabile è definita nel file XSD come segue :
{{<lineBreak>}}
{{<insertImage image="tf12.png" class="edge max-w-90">}}
{{<lineBreak>}}
Per la variabile «rech_menge» possono essere indicate un totale di 12 posizioni, di cui massimo 5 decimali (dopo la virgola).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
{{<markdown>}}
Perché **grund_wiedereintritt=" "** viene segnalato come errore di formato? L'elenco delle variabili indica che questa variabile può essere consegnata vuota.
{{<insertImage image="grund_wiedereintritt_erreur.png" class="edge max-w-90">}}
{{<collapsibleBlock groupId="format_fehlermeldung">}}
Questo formato non è supportato per l'xml. Se il valore non appare in casi giustificati, la variabile non deve essere fornita. 

{{<lineBreak>}}
Falso:
{{<insertImage image="vide_faux.png" class="edge max-w-90">}}
{{<lineBreak>}}
Corretto: **grund_wiedereintritt** viene rimosso.
{{<insertImage image="vide_correct.png" class="edge max-w-90">}}{{</collapsibleBlock>}}
{{</markdown>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
