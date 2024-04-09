---
title: Hinzufügung der Mobile ID als Zweitfaktor
slug: mobile_id_add
description: 'Auf dieser Seite erklären wir Ihnen, wie Sie die Mobile ID als zweiten Faktor zum CH-Login hinzufügen können. Dies ermöglicht Ihnen, Ihre Identität bei der Verbindung mit eIAM zu überprüfen.'
keywords: []
weight: 30
type: docs
--- 

In diesem Schritt wird die Mobile ID dem CH-Login als starker Zweitfaktor hinzugefügt.
<!-- Wenn Sie bereits einen (schwachen) Zweitfaktor (mTAN) haben, wird empfohlen diesen zuerst zu entfernen. Klicken Sie dazu in der Kachel Mobile-Nummer (mTAN) auf Entfernen. Danach können Sie der oben erwähnten Anleitung folgen um die Mobile ID als (starken) Zweitfaktor zu registrieren. -->


&nbsp;

<!-- 1ere paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
<p> Loggen Sie sich mit Ihrem CH-LOGIN in Ihr <a href="https://www.myaccount.eiam.admin.ch/">Mein eIAM-Konto</a> ein und gehen Sie dann auf die Registerkarte "Login & Sicherheit". </p>

<p> Klicken Sie ganz unten auf der Seite auf "Zweitfaktor-Einstellungen ändern". </p>
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_de.png" description="modification paramètres" class="bord taille">}} 
</div>

</div>

&nbsp; 

<!-- 2eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
Aktivieren Sie das Kontrollkästchen "Erweiterte Sicherheitseinstellungen aktivieren" und klicken Sie dann auf "Schliessen».
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="activation_param_de.png" description="Activation paramètres avancés" class="bord taille">}} 
</div>

</div>

&nbsp; 

<!-- 3eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
<p> Zurück in der Registerkarte "Anmeldung und Sicherheit" haben Sie nun das Kästchen "Verifizieren Sie einen Zweitfaktor." zusätzlich. </p>

<p> Klicken Sie im Feld "Registrieren Sie einen Zweitfaktor für ein noch sichereres Anmelden" auf "Registrieren". </p>

</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="ajout_facteur_de.png" description="ajout second facteur" class="bord taille">}} 
</div>

</div>

&nbsp; 

<!-- 4eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
<p> Wählen Sie die Option Mobile ID und klicken Sie auf "Weiter". </p>
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="choix_mobileid_de.png" description="ajout second facteur" class="bord taille">}} 
</div>

</div>

&nbsp; 

<!-- 5eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
Geben Sie den folgenden MIO-Code ein 16783 und klicken Sie auf "Speichern". 
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="code_mio_de.png" description="ajout second facteur" class="bord taille">}} 
</div>

</div>

&nbsp; 

<!-- 6eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
Geben Sie Ihr Passwort ein und klicken Sie auf "Weiter".
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="mot_de_passe_de.png" description="Mot de passe" class="bord taille">}} 
</div>

</div>

&nbsp; 

<!-- 7eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
Wählen Sie 3 Sicherheitsfragen aus, füllen Sie die Antworten aus und klicken Sie dann auf "Weiter".
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="questions_secu_de.png" description="ajout questions sécurité" class="bord taille">}} 
</div>

</div>

&nbsp;

<!-- 8eme paire de colonnes -->

<div style="display: flex; justify-content: space-between; align-items: center;">

<div style="flex: 1; padding-right: 10px;">
<!-- First column content goes here -->
Geben Sie Ihre Telefonnummer ein (die Nummer, die mit Ihrer Mobile ID verknüpft ist) und klicken Sie auf "Speichern".
</div>

<div style="flex: 1; padding-left: 10px;">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel_all.png" description="ajout second facteur" class="bord taille">}} 
</div>

</div>

&nbsp;

Es wird eine Nachricht angezeigt und Ihr Telefon wird Sie auffordern, die Verbindung durch die Eingabe Ihres Mobile ID-Passworts zu bestätigen. 

Sobald Sie dies getan haben, wird das Feld "Mobile ID" als Mittel zur Zwei-Faktor-Authentifizierung angezeigt.
{{<insertImage image="mobileid_present_de.png" description="ajout second facteur" class="bord taille">}}