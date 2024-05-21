---
title: Ruoli
slug: rollen
description: "In questa pagina spieghiamo i diversi ruoli disponibili sulla piattaforma."
weight: 10
type: docs
keywords: []
---

### Rôles Cantons

<table style="width:100%">
  <tr>
    <th style="width:23%"> Nome </div></th>
    <th> Compiti </th>
    <th style="width:20%"> Competenze </div> </th>
    <th style="width:30%"> Responsabilità </div> </th>
  </tr>
  <tr>
    <td> KT_Superuser </td>
    <td> Durante la fase di inizializzazione, informa le aziende o i siti ospedalieri dei nuovi sviluppi e controlla la popolazione di base prima del sondaggio. Durante il sondaggio, si assicura che i siti ospedalieri rispettino le scadenze di consegna. I siti ospedalieri in ritardo vengono richiamati. Verifica la qualità dei dati utilizzando la regola di controllo automatico e i commenti aggiuntivi dei siti ospedalieri e li convalida. In caso di difficoltà da parte degli ospedali, fornisce un primo supporto. Gestisce tutti gli utenti dei siti e delle aziende ospedaliere. Gestisce anche gli utenti del portale eIAM. Il KT_Superuser può delegare questi compiti al KT_ErhV o al KT_User, a seconda delle loro competenze, ed è quindi responsabile della supervisione. </td>
    <td> Può leggere, scaricare, commentare e modificare le statistiche di controllo, esportare a fini di plausibilità, chiudere tutti i dati dei propri siti e aziende ospedaliere e gestire gli utenti per tutti i ruoli ospedalieri dei propri siti e aziende ospedaliere. </td>
    <td> Assicura che il sondaggio venga svolto negli ospedali di sua competenza e li informa sui prossimi sviluppi. I Cantoni sono il primo punto di contatto per qualsiasi domanda concettuale, tecnica o di contenuto. Eseguono i controlli di ingresso e le richieste di chiarimento e si occupano dei solleciti. Entro la fine di giugno dell'anno del sondaggio, il Cantone si assicura che le informazioni richieste a tutte le aziende e agli ospedali stabiliti nel Cantone e in possesso di un'autorizzazione all'esercizio della polizia sanitaria siano corrette e complete. Il Cantone verifica la plausibilità delle giustificazioni fornite dall'azienda ospedaliera in caso di errore nel protocollo di controllo e le accetta. È responsabile del monitoraggio delle attività degli utenti e della loro disattivazione quando non hanno più bisogno di accedere. </td>
  </tr>
  <tr>
    <td> KT_ErhV(stat_Abschlussuser) </td>
    <td> Esegue i compiti delegati dal KT_Superuser. </td>
    <td> Può leggere tutti i dati delle sue aziende e dei siti ospedalieri, scaricarli, commentarli, modificare le statistiche di controllo, esportarli a fini di plausibilità e chiuderli. </td>
    <td> Alla fine di luglio, per l'anno in questione, l'ufficio cantonale di censimento rilascia i dati delle aziende ospedaliere situate sul suo territorio per l'utilizzo della LSF. </td>
  </tr>
  <tr>
    <td> KT_Admin_Abschlussuser </td>
    <td> Consultando i dati dei propri siti o delle aziende ospedaliere, rilascia i dati per uso amministrativo al termine dell'indagine. </td>
    <td> Può leggere tutti i dati delle sue aziende e dei siti ospedalieri, scaricarli, commentarli, modificare le statistiche di controllo, esportarli a fini di plausibilità e chiuderli. </td>
    <td> Alla fine di luglio, l'ufficio cantonale della sanità pubblica rilascia i dati relativi all'anno di rilevamento in questione degli ospedali situati sul suo territorio per l'utilizzo della LAMal. </td>   
  </tr>
  <tr>
    <td> KT_User </td>
    <td> Esegue i compiti delegati dal KT_Superuser. </td>
    <td> Può leggere, scaricare e commentare tutti i dati provenienti dalle aziende e dai siti ospedalieri. </td>
    <td> Assiste il KT_Superuser nei suoi compiti. </td>
  </tr>
  <tr>
    <td> KT_Read </td>
    <td> Se necessario, possono consultare lo stato dell'indagine sulla piattaforma. </td>
    <td> Può leggere tutti i dati di tutte le aziende ospedaliere del suo cantone. </td>
    <td> Essi sono tenuti al segreto professionale e non devono divulgare a persone non autorizzate le informazioni che hanno letto sulla piattaforma. </td>
  </tr>
</table>

### Rôles Hôpitaux

<table>
  <tr>
    <th><div style="width:160px"> Nome </div></th>
    <th> Compiti </th>
    <th> <div style="width:110px"> Competenze </div> </th>
    <th> <div style="width:120px"> Responsabilità </div> </th>
  </tr>
  <tr>
    <td>SP_ErhV_Unternehmen </td>
    <td> Durante la fase di inizializzazione, legge le nuove informazioni relative al sondaggio e le implementa se necessario. Durante il sondaggio, si assicura che i siti ospedalieri rispettino le scadenze di consegna. Carica i dati, ne verifica la qualità tramite il sistema di controllo automatico e, se necessario, li commenta. Al termine del processo di raccolta, rilascia i dati a livello di azienda ospedaliera (close) per poterli trasmettere nel processo (release cantonale). </td>
    <td> Possono leggere, scaricare, commentare, esportare a fini di plausibilità e chiudere tutti i dati della loro azienda ospedaliera e dei suoi siti. </td>
    <td> Si assicurano che i dati del loro ospedale siano disponibili in tempo e di buona qualità e li convalidano a livello ospedaliero. </td>
  </tr>
  <tr>
    <td>SP_ErhV_Standort</td>
    <td> Carica i dati dal suo sito ospedaliero, controlla la qualità dei dati utilizzando il sistema di controllo automatico e, se necessario, li commenta. Al termine del processo di raccolta, rilascia i dati a livello di sito ospedaliero in modo che possano essere trasmessi nel processo (rilascio dell'azienda ospedaliera). </td>
    <td> Può leggere tutti i dati dal sito dell'ospedale, scaricarli, commentarli, esportarli per il controllo di plausibilità e chiuderli. </td>
    <td> Si assicura che i dati del proprio sito ospedaliero siano disponibili in tempo e di buona qualità e li convalida a livello di sito ospedaliero. </td>
  </tr>
  <tr>
    <td> SP_User_Unternehmen </td>
    <td> Svolge i compiti delegati dalla SP_ErhV_Unternehmen. </td>
    <td> Possono leggere, scaricare e commentare tutti i dati della loro azienda ospedaliera e dei suoi siti. </td>
    <td> Supporta la SP_ErhV_Unternehmen nei suoi compiti. </td>
  </tr>
  <tr>
    <td> SP_User_Standort </td>
    <td> Esegue i compiti delegati dalla SP_ErhV_Standort. </td>
    <td> Possono leggere, scaricare e commentare tutti i dati sul sito del loro ospedale. </td>
    <td> Supporta lo SP_ErhV_Standort nei suoi compiti. </td>
  </tr>
  <tr>
    <td> SP_Read_Unternehmen </td>
    <td> Se necessario, possono consultare lo stato dell'indagine sulla piattaforma. </td>
    <td> È in grado di leggere i dati della propria attività ospedaliera. </td>
    <td> Essi sono tenuti al segreto professionale e non devono divulgare a persone non autorizzate le informazioni che hanno letto sulla piattaforma. </td>
  </tr>
  <tr>
    <td> SP_Read_Standort </td>
    <td> Se necessario, possono consultare lo stato dell'indagine sulla piattaforma. </td>
    <td> Può leggere i dati dal sito dell'ospedale. </td>
    <td> Essi sono tenuti al segreto professionale e non devono divulgare a persone non autorizzate le informazioni che hanno letto sulla piattaforma. </td>
  </tr>
</table>