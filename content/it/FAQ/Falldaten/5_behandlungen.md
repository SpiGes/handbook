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

- Raccomandiamo una numerazione cronologica per gli item HoNOS (misurazioni HoNOS temporalmente remote = ID bassi, misurazioni HoNOS recenti = ID alti).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}
<!-- A traduire: new FAQ-->
{{<listItem>}}
Variable «behandlung_chop» : les traitements doivent-ils être livrés avec ou sans points ?
{{<collapsibleBlock groupId="behandlungen">}}
Sans points.
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
<!-- A traduire: new FAQ
{{<listItem>}}
Variable «behandlung_auswaerts»: Pouvez-vous définir plus précisément l'attribution des modalités de cette variable et expliquer le lien avec le type_d'épisode=5 (traitement ambulatoire à l'extérieur) ?
{{<collapsibleBlock groupId="behandlungen">}}
La notion d'areal d'hospitalisation est floue. Nous avons fait le schéma suivant à ce sujet :

{{<markdown>}}
  Legende:  

- BUR = site
- Areal = aire  
- BURGESV = hôpital/établissement
{{</markdown>}}
{{<insertImage image="Bild1.jpg" class="edge max-w-90">}}

{{<markdown>}}
Traitements ambulatoires extra-muros

Uniquement pour les traitements ambulatoires hors de la propre aire hospitalière ou dans un établissement tiers. Le champ est laissé vide lorsque la question ne se pose pas (traitement au sein du propre établissement).

- Propre établissement = No Bur GESV identique
- Etablissement tiers = No Bur GESV différent
{{</markdown>}}

{{<markdown>}}
Liste des codes

- 1 = Même aire hospitalière, autre établissement.
- 2 = Même établissement, autre aire hospitalière.
- 3 = Autre établissement, autre aire hospitalière.
- 9 = inconnu.

Les cas avec les valeurs 1 ou 3 sont enregistrés comme type_épisode=5.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}
-->
{{</numberedList>}}
{{</faqBlock>}}
