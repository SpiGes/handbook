---
title: Procedura di accesso con eIAM
slug: onboarding
description: 'Su questa pagina sono disponibili tutte le informazioni necessarie per accedere alla piattaforma SpiGes.'
keywords: []
weight: 20
type: docs
---

Nel presente capitolo sono illustrati tutti i passaggi necessari per creare un profilo verificato con il quale accedere alla piattaforma SpiGes.

Per accedere a SpiGes occorre creare un CH-LOGIN con un secondo fattore di autenticazione sicuro e un’identità verificata. Per farlo sono necessari i seguenti passaggi:

1.	 creare un CH-LOGIN (con l’indirizzo e-mail aziendale);
2.	 impostare un secondo fattore sicuro in aggiunta al CH-LOGIN;
3.	 verificare la propria identità sul secondo fattore scelto;
4.	 collegare (onboarding) il CH-LOGIN appena creato alla piattaforma SpiGes.

Ogni passaggio viene illustrato singolarmente nelle pagine successive. Se si dispone già di un account CH-LOGIN, non è necessario crearne uno nuovo e il primo passaggio può quindi essere saltato. È tuttavia importante assicurarsi che il proprio CH-LOGIN funzioni correttamente.

Prima di tentare di configurare il proprio accesso protetto, si consiglia di leggere queste istruzioni.

## Come funziona eIAM

eIAM è un sistema centralizzato di accesso e autorizzazione dell’Amministrazione federale per le applicazioni web. In parole povere, eIAM è l’infrastruttura centrale di accesso della Confederazione, il cui obiettivo è evitare una procedura di accesso diversa per ogni singola applicazione. Questa centralizzazione consente di risparmiare in termini di tempo e risorse, utilizzando gli stessi dati di accesso per tutte le applicazioni.

Ogni utente che accede all’applicazione SpiGes viene automaticamente reindirizzato al portale eIAM per la procedura di autenticazione. Il sistema chiede quindi all’utente di confermare l’accesso sul proprio cellulare per assicurarsi che la persona che sta cercando di accedere sia effettivamente quella autorizzata.
{{<alert color="warning">}}
Poiché a ogni accesso l’identità dell’utente deve essere verificata, gli account dell’applicazione sono personali. Un account non può infatti essere utilizzato da più persone.
{{</alert>}}

## Struttura delle unità eIAM

I vari utenti della piattaforma SpiGes sono organizzati come segue:

-  Cantone
    -  Imprese <!--Aziende-->
        -  Sedi

Un Cantone comprende una o più imprese, che a loro volta comprendono una o più sedi.

{{<alert color="warning">}}
In alcuni casi, il Cantone geografico di una sede e il Cantone amministrativo dell’impresa non coincidono.
{{</alert>}}

Esempio:

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{&lt;markdown&gt;}}
1. nella colonna 1 è indicato l’EntID a livello di impresa e il numero RIS a livello di sede;
2. nella colonna 2 è indicato il Cantone amministrativo (responsabile) dell’impresa o della sede dell’ospedale;
3. nella colonna 3 viene indicato il Cantone geografico dell’impresa / della sede.

In questo caso si può notare che il Cantone amministrativo e quello geografico della sede 1 sono diversi.
{{&lt;/markdown&gt;}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
</div>

</div>

 
