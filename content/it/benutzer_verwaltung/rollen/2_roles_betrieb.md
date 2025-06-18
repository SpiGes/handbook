---
title: Ruoli Ospedali
slug: rollen_betriebe
description: "Su questa pagina vengono illustrati i diversi ruoli di un utente stabilimento (ospedali)."
weight: 30
type: docs
keywords: []
---

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
    <td>Una sede deve designare almeno un SP_ErhV_Standort. Carica i dati della sede ospedaliera di sua competenza, ne verifica la qualità servendosi delle regole di controllo automatico, e, se necessario, lascia un commento al riguardo. Al termine della rilevazione, approva i dati a livello di sede ospedaliera (finalizzazione) in modo che possano andare avanti nel processo (approvazione da parte dell'impresa ospedaliera). Questo ruolo è particolarmente utile quando un utente non deve accedere a tutti i sedi dell'azienda.</td>
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
