---
title: Mobile ID
slug: mobile_id
description: "Su questa pagina sono disponibili tutte le informazioni sull’utilizzo di Mobile ID come secondo fattore di sicurezza."
keywords: []
weight: 20
type: docs
---

{{<alert color="warning">}}
Se possibile, consigliamo di utilizzare Windows Hello.
{{</alert>}}

{{<alert color="warning">}}
Mobile ID è un mezzo di autenticazione diverso dall’SMS (mTAN).
{{</alert>}}

Nel caso in cui non sia possibile utilizzare Windows Hello come secondo fattore di sicurezza, è possibile utilizzare Mobile ID. Per poterlo fare è tuttavia necessaria una scheda SIM compatibile con Mobile ID. Qualora la propria SIM non fosse compatibile con Mobile ID, deve essere sostituita. Maggiori informazioni su come sostituirla sono disponibili {{<link url="https://www.mobileid.ch/it/comessa-sim" newTab="true">}}qui{{</link>}}.

{{<alert color="info">}}
Attualmente il servizio Mobile ID è compatibile solo con schede SIM svizzere.
{{</alert>}}

## Attivazione di Mobile ID

Per attivare Mobile ID, seguire i seguenti passaggi.

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Andare sul sito web di {{<link url="https://www.mobileid.ch/it" newTab="true">}}MobileID{{</link>}} e selezionare «Provare subito».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mobile_id_it.png" description="MobileID" class="edge max-w-90">}} 
</div>

</div>

 

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
Inserire il proprio numero di cellulare.

Al numero indicato sarà quindi inviato un SMS con un codice che va immesso nell’interfaccia web.
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel_it.png" description="Code SMS" class="edge max-w-90">}} 
</div>

</div>

 

Una volta inserito il codice correttamente l’utente si troverà sulla propria dashboard Mobile ID. 

Il passaggio successivo consiste nell’attivazione di Mobile ID.

{{<alert color="warning">}}
Per poter utilizzare la piattaforma SpiGes, l’attivazione deve avvenire tramite la scheda SIM (l’attivazione tramite l’applicazione Mobile ID non è sufficiente). A tal fine, è necessario disporre di una scheda SIM compatibile con Mobile ID. 
{{</alert>}}

Nella dashboard di Mobile ID, sotto «SIM Status» è indicato se la scheda SIM è compatibile o meno. Nel caso in cui non sia compatibile, occorre ordinare una nuova scheda SIM presso il proprio gestore telefonico.

  

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Sempre in caso di incompatibilità, sulla propria dashboard Mobile ID apparirà il messaggio seguente.
{{<insertImage image="sim_incompatible_fr.png" description="Code SMS" class="edge max-w-90">}}  <!-- Image en français -->

</div>

<div class="right_col">
<!-- Second column content goes here -->
In caso la SIM sia compatibile, sulla propria dashboard apparirà il messaggio seguente.
{{<insertImage image="sim_compatible_fr.png" description="Code SMS" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 

In caso di compatibilità della propria SIM, procedere come segue: 

 

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Nel riquadro «Attivare Mobile ID» cliccare su «Attivare».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activer_mobile_id.png" description="activer MobileID" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Selezionare il riquadro «SIM» e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_sim_it.png" description="Choix carte SIM" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Spuntare la casella «Accetto i termini e le condizioni» e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="cond_utilisation_it.png" description="Conditions d'utilisation" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Chi fosse già stato in possesso di un Mobile ID in passato, ha ora la possibilità di ripristinarlo. Qualora l’utente conosca il codice di ripristino, selezionare l’opzione «Conosco il mio codice di ripristino» e procedere secondo le indicazioni. In caso contrario, selezionare l’opzione «Vorrei continuare senza un’opzione di sblocco». In caso l’utente non avesse mai attivato un Mobile ID prima d’ora o qualora non conoscesse il codice di ripristino, selezionare l’opzione «Vorrei continuare senza un’opzione di sblocco». Cliccare su «Avanti» e confermare la propria scelta cliccando nuovamente su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_recup_it.png" description="Possibilité récupération" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 

Sul cellulare si aprirà quindi una finestra che chiederà di inserire un PIN di sei cifre. Una volta inserito e cliccato su «OK», si aprirà una nuova finestra dove il PIN scelto dovrà essere immesso di nuovo per conferma.

La procedura è ora terminata.

{{<alert color="warning">}}
Assicurarsi di conservare il codice di ripristino in un luogo sicuro. Poiché la verifica dell’identità di ogni utente si basa sul suo Mobile ID, è importante che sia possibile ripristinarlo se necessario. Questa operazione è necessaria se si dimentica il codice PIN o se la scheda SIM deve essere sostituita (ad esempio, in caso di perdita del cellulare).
{{</alert>}}

## Aggiunta di ID Mobile come secondo fattore

Qui di seguito viene illustrato come impostare ID Mobile come secondo fattore forte nel CH-LOGIN.
<!-- Wenn Sie bereits einen (schwachen) Zweitfaktor (mTAN) haben, wird empfohlen diesen zuerst zu entfernen. Klicken Sie dazu in der Kachel Mobile-Nummer (mTAN) auf Entfernen. Danach können Sie der oben erwähnten Anleitung folgen um die Mobile ID als (starken) Zweitfaktor zu registrieren. -->


 

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Effettuare l’accesso su {{<link url="https://www.myaccount.eiam.admin.ch/" newTab="true">}}MyAccount{{</link>}} con il proprio CH-LOGIN e poi andare alla scheda «Accesso & sicurezza». </p>

<p> Cliccare in basso su «Modificare le impostazioni del secondo fattore». Inserire la propria password e cliccare su «Avanti». </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_it.png" description="modification paramètres" class="edge max-w-90">}} 
</div>

</div>

  

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Mettere la spunta su «Abilita impostazioni avanzate di sicurezza» e cliccare su «Chiudi».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activation_param_it.png" description="Activation paramètres avancés" class="edge max-w-90">}} 
</div>

</div>

  

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
Nella scheda «Accesso & sicurezza» è ora apparsa anche la casella «Verificare il secondo fattore».

Cliccare su «Registra» alla sezione «Registrare un secondo fattore per un accesso più sicuro».
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="ajout_facteur_it.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

  

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Selezionare l’opzione «Mobile ID» e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_mobileid_it.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

  

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
Immettere il seguente codice MIO **16783** e cliccare su «Salva».
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="code_mio_it.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

  

<!-- 6eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Inserire la propria password e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mot_de_passe_it.png" description="Mot de passe" class="edge max-w-90">}} 
</div>

</div>

  

<!-- 7eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Scegliere tre domande di sicurezza, inserire le risposte e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="questions_secu.png" description="ajout questions sécurité" class="edge max-w-90">}} 
</div>

</div>

 

<!-- 8eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Inserite il proprio numero di cellulare (il numero collegato al proprio Mobile ID) e cliccare su «Salva».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

 

Apparirà quindi un messaggio e il cellulare chiederà di confermare il collegamento inserendo il PIN del proprio Mobile ID. 

Una volta effettuata questa operazione, «Mobile ID» figurerà come possibilità di autenticazione a due fattori.
{{<insertImage image="mobileid_present_it.png" description="ajout second facteur" class="edge max-w-90">}}
