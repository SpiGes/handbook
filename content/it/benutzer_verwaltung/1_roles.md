---
title: Ruoli
slug: rollen
description: "Su questa pagina vengono illustrati i diversi ruoli disponibili sulla piattaforma."
weight: 10
type: docs
keywords: []
---

### Ruoli per i Cantoni

<table style="width:100%">
  <tr>
    <th style="width:23%"> Nome </div></th>
    <th> Compiti </th>
    <th style="width:20%"> Competenze </div> </th>
    <th style="width:30%"> Responsabilità </div> </th>
  </tr>
  <tr>
    <td>KT_Superuser</td>
    <td>Durante la fase di inizializzazione, informa le imprese ospedaliere o le loro sedi sulle novità e controlla l'universo statistico prima della rilevazione. Durante la rilevazione, si assicura che le sedi ospedaliere rispettino le scadenze di consegna e sollecita quelle che non lo fanno. Verifica la qualità dei dati servendosi delle regole di controllo automatico e dei commenti lasciati dalle sedi ospedaliere per poi approvarli. In caso di difficoltà da parte degli ospedali, è il KT_Superuser a fornire la prima assistenza. Gestisce tutti gli utenti delle sedi e delle imprese ospedaliere di sua competenza. Gestisce inoltre gli utenti del portale eIAM. Il KT_Superuser può delegare questi compiti al KT_ErhV o al KT_User in base alle loro competenze, rimanendo in tal caso responsabile della supervisione. È tenuto a informare l'UST qualora il KT_Superuser cambi.</td>
    <td>Può leggere, caricare e commentare tutti i dati delle imprese e sedi ospedaliere di sua competenza, modificarne gli stati di verifica, esportarli per controlli di plausibilità, finalizzarli e gestire gli utenti, indipendentemente da quale ruolo essi svolgano per le sedi e le imprese ospedaliere di sua competenza.</td>
    <td>Si assicura che la rilevazione venga condotta nelle imprese ospedaliere di sua competenza e le informa sulle novità in arrivo. I Cantoni sono il primo punto di contatto per le questioni concettuali, tecniche o di contenuto. Eseguono controlli di accesso e rispondono alle domande, oltre a gestire il procedimento di sollecito. Entro la fine di giugno dell'anno di rilevazione, il Cantone si assicura che le informazioni richieste a tutte le imprese e le sedi ospedaliere situate nel Cantone e aventi un'autorizzazione di esercizio della polizia sanitaria siano corrette e complete. Le motivazioni indicate dall'impresa ospedaliera per i messaggi di errore sul rapporto di verifica vengono esaminate dal Cantone per verificarne la plausibilità e, se del caso, accettate. Il KT_Superuser è responsabile del monitoraggio dell'attività degli utenti, della creazione dei profili dei nuovi utenti e della loro disattivazione quando gli utenti non hanno più bisogno di accedere.</td>
  </tr>
  <tr>
    <td>KT_ErhV(stat_Abschlussuser)</td>
    <td>Esegue i compiti che gli vengono delegati dal KT_Superuser.</td>
    <td>Può leggere, caricare e commentare tutti i dati delle imprese e sedi ospedaliere di sua competenza, modificarne gli stati di verifica, esportarli per controlli di plausibilità e finalizzarli.</td>
    <td> Il servizio di rilevazione cantonale competente approverà a fine luglio i dati per l'anno di rilevazione delle imprese ospedaliere presenti sul proprio territorio perché possano essere utilizzati sulla piattaforma SpiGes, ai sensi della LStat.</td>
  </tr>
  <tr>
    <td>KT_Admin_Abschlussuser</td>
   <td>Consultando i dati delle sedi e delle imprese ospedaliere di sua competenza, al termine della rilevazione approva i dati affinché possano essere utilizzati a scopo amministrativo.</td>
   <td>Può leggere, caricare e commentare tutti i dati delle imprese e sedi ospedaliere di sua competenza, modificarne gli stati di verifica, esportarli per controlli di plausibilità e finalizzarli.</td>
   <td>L'ufficio cantonale di sanità approverà a fine luglio i dati per l'anno di rilevazione delle imprese ospedaliere presenti sul proprio territorio perché possano essere utilizzati ai sensi della LAMal.</td>
  </tr>
  <tr>
    <td>KT_User</td>
    <td>Esegue i compiti che gli vengono delegati dal KT_Superuser.</td>
    <td>Può leggere, caricare e commentare tutti i dati delle imprese e delle sedi ospedaliere di sua competenza.</td>
    <td>Assiste il KT_Superuser nei suoi compiti.</td>
  </tr>
  <tr>
    <td>KT_Read</td>
    <td>Se necessario, sulla piattaforma può controllare lo stato di avanzamento della rilevazione.</td>
    <td>Può leggere tutti i dati di tutte le imprese ospedaliere del suo Cantone.</td>
    <td>È soggetto all'obbligo di riservatezza e non può divulgare a persone non autorizzate le informazioni lette sulla piattaforma.</td>
  </tr>
</table>

### Ruoli per gli ospedali

<table>
  <tr>
    <th><div style="width:160px"> Nome </div></th>
    <th> Compiti </th>
    <th> <div style="width:110px"> Competenze </div> </th>
    <th> <div style="width:120px"> Responsabilità </div> </th>
  </tr>
  <tr>
    <td>SP_ErhV_Unternehmen</td>
    <td>Ogni impresa deve designare almeno un SP_ErhV_Unternehmen. Durante la fase di inizializzazione, legge le novità relative alla rilevazione e le implementa ove necessario. Durante la rilevazione, si assicura che le sedi ospedaliere rispettino le scadenze di consegna. Carica i dati, ne verifica la qualità servendosi delle regole di controllo automatico, e, se necessario, lascia un commento al riguardo. Al termine della rilevazione, approva i dati a livello di impresa ospedaliera (finalizzazione) in modo che possano andare avanti nel processo (approvazione da parte del Cantone).</td>
    <td>Può leggere, caricare e commentare tutti i dati delle imprese e sedi ospedaliere di sua competenza, esportarli per controlli di plausibilità e finalizzarli.</td>
    <td>Si assicura che i dati dell'impresa ospedaliera di sua competenza siano messi a disposizione entro il termine stabilito e di buona qualità per poi approvarli a livello di impresa ospedaliera.</td>
  </tr>
  <tr>
    <td>SP_ErhV_Standort</td>
    <td>Ogni sede deve designare almeno un SP_ErhV_Standort. Carica i dati della sede ospedaliera di sua competenza, ne verifica la qualità servendosi delle regole di controllo automatico, e, se necessario, lascia un commento al riguardo. Al termine della rilevazione, approva i dati a livello di sede ospedaliera (finalizzazione) in modo che possano andare avanti nel processo (approvazione da parte dell'impresa ospedaliera).</td>
    <td>Può leggere, caricare e commentare tutti i dati della sede ospedaliera di sua competenza, esportarli per controlli di plausibilità e finalizzarli.</td>
    <td>Si assicura che i dati della sede ospedaliera di sua competenza siano messi a disposizione entro il termine stabilito e di buona qualità per poi approvarli a livello di sede ospedaliera. Inoltre, informa immediatamente il KT_Superuser qualora gli utenti della sede ospedaliera di sua competenza vengano sostituiti (ad es. in caso un dipendente si dimetta oppure in caso cambi funzione e non abbia più bisogno di accedere alla piattaforma SpiGes).</td>
  </tr>
  <tr>
    <td>SP_User_Unternehmen</td>
    <td>Esegue i compiti che gli vengono delegati dall'SP_ErhV_Unternehmen.</td>
    <td>Può leggere, caricare e commentare tutti i dati dell'impresa ospedaliera di sua competenza e delle rispettive sedi.</td>
    <td>Assiste l'SP_ErhV_Unternehmen nei suoi compiti.</td>
  </tr>
  <tr>
    <td>SP_User_Standort</td>
    <td>Esegue i compiti che gli vengono delegati dall'SP_ErhV_Standort.</td>
    <td>Può leggere, caricare e commentare tutti i dati della sede ospedaliera di sua competenza.</td>
    <td>Assiste l'SP_ErhV_Standort nei suoi compiti.</td>
  </tr>
  <tr>
    <td>SP_Read_Unternehmen</td>
    <td>Se necessario, sulla piattaforma può controllare lo stato di avanzamento della rilevazione.</td>
    <td>Può leggere i dati dell'impresa ospedaliera di sua competenza.</td>
    <td>È soggetto all'obbligo di riservatezza e non può divulgare a persone non autorizzate le informazioni lette sulla piattaforma.</td>
  </tr>
  <tr>
    <td>SP_Read_Standort</td>
    <td>Se necessario, sulla piattaforma può controllare lo stato di avanzamento della rilevazione.</td>
    <td>Può leggere i dati della sede ospedaliera di sua competenza.</td>
    <td>È soggetto all'obbligo di riservatezza e non può divulgare a persone non autorizzate le informazioni lette sulla piattaforma.</td>
  </tr>
</table>
