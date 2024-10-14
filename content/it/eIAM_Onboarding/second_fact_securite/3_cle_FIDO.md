---
title: Token FIDO
slug: FIDO_token
description: "Su questa pagina sono disponibili tutte le informazioni sull’utilizzo di FIDO Passkey come secondo fattore di sicurezza."
keywords: []
weight: 30
type: docs
---

Nel caso in cui non sia possibile utilizzare Windows Hello o Mobile ID come secondo fattore di sicurezza forte, è possibile utilizzare una chiave di sicurezza FIDO su supporto fisico.  

{{<alert color="warning">}}
Se possibile, consigliamo di dare la priorità in primo luogo a Windows Hello e in secondo luogo a Mobile ID. L’acquisto di una chiave FIDO è a carico dell’utente.
{{</alert>}}

Le chiavi di sicurezza FIDO (FIDO Passkeys) sono supporti di dati che possono assumere la forma di una chiave USB e contenere materiale crittografico. Devono essere acquistati dagli stessi utenti finali, a proprie spese. Ecco un elenco delle {{<link url="https://www.agov.admin.ch/it/chiavi-di-sicurezza" newTab="true">}}chiavi di sicurezza{{</link>}} supportate.

<!--Le chiavi di sicurezza FIDO sono supporti di dati, ad esempio sotto forma di chiavette USB, che contengono materiale crittografico.

Per il CH-LOGIN, eIAM supporta i seguenti tipi di chiave di sicurezza FIDO.
– YubiKey 5 FIPS Series with NFC
– YubiKey 5 Series
– YubiKey 5 Series with NFC
– Security Key by Yubico with NFC
– Feitian BioPass FIDO2 Authenticator-->

## Salvataggio di una chiave di sicurezza FIDO sul proprio CH-LOGIN

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Effettuare l’accesso su {{<link url="https://www.myaccount.eiam.admin.ch/" newTab="true">}}MyAccount{{</link>}} con il proprio CH-LOGIN e poi andare alla scheda «Accesso & sicurezza». </p>

<p> Cliccare in basso su «Modificare le impostazioni del secondo fattore». Inserire la propria password e cliccare su «Avanti». </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_it.png" class="edge max-w-90">}}
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
Selezionare l’opzione «Passkey (FIDO)» e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_fido_it.png" class="edge max-w-90">}}
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
{{<insertImage image="fido_mdp_it.png" class="edge max-w-90">}}
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
{{<insertImage image="questions_secu.png" class="edge max-w-90">}}
</div>

</div>

<!-- 8eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Assegnare un nome alla propria chiave di sicurezza FIDO e cliccare su «Avanti».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="nom_fido_it.png" class="edge max-w-90">}}
</div>

</div>

<!-- 9eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Inserire la chiave FIDO nel computer e fare clic su «Start».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="config_fido_it.png" class="edge max-w-90">}}
</div>

</div>

Sul computer si aprirà una finestra contenente diverse opzioni. Scegliere «Chiave di sicurezza».

Nel caso si stia utilizzando una chiave di sicurezza FIDO per la prima volta, è necessario configurarla. Per farlo, cliccare su «OK» e scegliere un codice PIN per la propria chiave di sicurezza FIDO.

Infine, premere il pulsante presente sulla chiave FIDO (a seconda del modello di chiave, potrebbe essere sufficiente solo toccarla).

<!-- 
Die Erläuterungen zum Speichern des FIDO Passkeys in Ihrer CH_LOGIN sind noch nicht verfügbar. In der Zwischenzeit können Sie sich auf [diese Anleitung](https://help.eiam.swiss/?c=passkeys&l=de) beziehen.
 

Die Erläuterungen zur Videoidentifikation für den FIDO Passkeys sind noch nicht verfügbar. In der Zwischenzeit können Sie sich auf [diese Anleitung](https://help.eiam.swiss/index.php?c=h!vipspasskey&l=de) beziehen.
-->

Una volta registrata la chiave FIDO come secondo fattore forte del proprio CH-LOGIN, può quindi essere effettuata l’identificazione video ad essa relativa. A tal fine, procedere con l’identificazione video.
