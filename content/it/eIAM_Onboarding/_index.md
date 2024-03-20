---
title: Onboarding eIAM
slug: onboarding
description: 'Questo capitolo contiene tutte le informazioni necessarie per collegarsi alla piattaforma SpiGes.'
keywords: []
weight: 20
type: docs
---

In questo capitolo troverete tutti i passaggi da seguire per creare un profilo verificato che vi permetterà di connettervi alla piattaforma SpiGes. 

Per creare un CH-login con un secondo fattore forte e un'identità verificata per l'utilizzo della piattaforma SpiGes, sono necessari i seguenti passaggi:

1. Creare un login CH
2. Attivare il Mobile ID
3. Aggiungere il Mobile ID come secondo fattore al CH-Login
4. Verificare l'identità del secondo fattore (Mobile ID o FIDO2 key).
5. A bordo del login CH stabilito con SpiGes.

Questi passaggi sono spiegati nelle pagine seguenti. Se si dispone già di un CH-Login o di un Mobile ID, non è necessario crearne uno nuovo e si può saltare il passaggio corrispondente. Tuttavia, verificate che il vostro CH-Login o Mobile ID sia funzionante.

Vi consigliamo di leggere queste pagine di istruzioni prima di provare a configurare il vostro nuovo accesso sicuro.

## Come funziona eIAM

eIAM è il sistema centrale di accesso e autorizzazione alle applicazioni web dell'Amministrazione federale. In parole povere, eIAM è l'infrastruttura di accesso centralizzata della Confederazione. Il suo scopo è quello di evitare la creazione di una procedura specifica per ogni applicazione. Questa centralizzazione consente di risparmiare denaro e di utilizzare gli stessi dati di accesso per tutte le applicazioni.    
Ogni utente che accede all'applicazione SpiGes viene automaticamente reindirizzato al portale eIAM per la procedura di autenticazione. Il sistema chiederà quindi all'utente di convalidare la connessione sul proprio telefono cellulare per verificare che si tratti effettivamente della persona giusta che sta cercando di connettersi.  

{{<alert color="warning">}}
Poiché l'identità dell'utente deve essere verificata, gli account dell'applicazione sono personali. Lo stesso account non può essere utilizzato da più persone.
{{</alert>}}

