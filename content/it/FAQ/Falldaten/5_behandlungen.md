---
title: Trattamenti
slug: behandlungen
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="behandlungen">}}

{{<numberedList>}}
{{<listItem>}}
Variabile «behandlung_id»: ci sono raccomandazioni per la sequenza da applicare in psichiatria? In particolare, gli item HoNOS, forniti nel quadro della CHOP, non sono specifici alla diagnosi o al trattamento.
{{<collapsibleBlock groupId="behandlungen">}}
{{<markdown>}}

- Conformemente alla descrizione delle variabili vale quanto segue:
Numero univoco progressivo del trattamento.
1 = Trattamento 1
2 = Trattamento 2
3 = Trattamento 3
(…) ecc. -> illimitato
Per la sequenza dei trattamenti si raccomanda di attenersi ai criteri seguenti:

1. Procedure per il trattamento della diagnosi principale
2. Procedure per il trattamento delle diagnosi secondarie
3. Procedure per la determinazione della diagnosi principale
4. Procedure per la determinazione delle diagnosi secondarie
5. Altre procedure

- Raccomandiamo una numerazione cronologica per gli item HoNOS (misurazioni HoNOS temporalmente remote = ID più bassi, misurazioni HoNOS recenti = ID più alti).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Behandlung_chop: i trattamenti devono essere forniti con o senza punto?
{{<collapsibleBlock groupId="behandlungen">}}
Senza punti. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Siamo un po' preoccupati che questi dati non vengano registrati in modo completo, soprattutto nei primi giorni, e che ciò renda necessari ulteriori aggiustamenti supplementari. Vorremmo quindi definire il campo come obbligatorio per i codici CHOP interessati. Esiste una classificazione per il catalogo CHOP per quanto riguarda i codici considerati operativi o interventistici?
{{<collapsibleBlock groupId="behandlungen">}}
L'UST è consapevole che con l'introduzione del nuovo modo di inserire i dati, all'inizio questi saranno incompleti. Dopo la consueta fase di consolidamento, si capirà quali precisazioni saranno necessarie. Non è possibile determinare chiaramente per ogni codice CHOP se richiede o meno l'indicazione dell'ora. Ci sono altre caratteristiche che sono decisive in questo caso: se il trattamento è legato all'utilizzo di una sala operatoria o di un laboratorio di cateterismo cardiaco.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Operatori: abbiamo un problema di comprensione dell'interpretazione delle specifiche indicate nel file XML. La descrizione della variabile indica che possono essere attribuiti a un intervento al massimo due medici operanti. Nella panoramica non si vede tuttavia se l'attributo può essere esportato più volte.
{{<insertImage image="Image1.jpg" class="edge max-w-90">}}
{{<collapsibleBlock groupId="behandlungen">}}
Quanti medici operanti possono essere attribuiti a ogni intervento è una questione concettuale che può quindi variare da Cantone a Cantone (di solito 2 è un valore indicativo!). Dal punto di vista tecnico possono essere registrati più medici operanti.
{{<insertImage image="Image2.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variabile «behandlung_auswaerts»: È possibile definire con maggiore precisione l'assegnazione dei valori di questa variabile e spiegare come sono collegati con episode_art=5 (trattamento ambulatoriale esterno)?
{{<collapsibleBlock groupId="behandlungen">}}
Il termine «area» è vago. Per precisarlo abbiamo creato lo schema seguente :

{{<markdown>}}
  Legenda:  

- BUR = sede
- Areal = area  
- BURGESV = ospedale/stabilimento
{{</markdown>}}
{{<insertImage image="Bild1.jpg" class="edge max-w-90">}}

{{<markdown>}}
Trattamenti ambulatoriali extra-muros

Da indicare solo per i trattamenti ambulatoriali al di fuori della propria area. Il campo viene lasciato vuoto quando la domanda non si pone (trattamento all'interno dello proprio stabilimento).

- Stesso stabilimento = stesso BURGESV.
- Altro stabilimento = altro BURGESV.
{{</markdown>}}

{{<markdown>}}
Valori :

- 1 = propria area, altro stabilimento
- 2 = altra area, stesso stabilimento
- 3 = altra area, altro stabilimento
- 9 = sconosciuto

I casi cui si applicano i valori 2 o 3 devono essere registrati come episode_art=5.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
