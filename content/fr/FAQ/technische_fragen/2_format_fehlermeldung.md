---
title: Contrôles de format et messages d'erreur
slug: format_fehlermeldung
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="format_fehlermeldung">}}

{{<numberedList>}}
{{<listItem>}}
Termes généraux utilisés dans les messages d'erreur
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<markdown>}}
-  Element = partie de l'enquête (par ex. Unternehmen, Standort, Fall, etc.)
-  Attribut = variable (par ex. fall_id, burnr, etc.)
{{</markdown>}}
{{<insertImage image="tf1.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quelles erreurs provoquent le message d'erreur « erreur de serveur interne 500 » ?
{{<collapsibleBlock groupId="format_fehlermeldung">}}
L'erreur de serveur interne 500 peut avoir différentes causes, que vous trouverez ici :
{{<markdown>}}
1. fichier vide
2. fichier trop grand
3. en-tête incorrect 
4. non codé en UTF 8

<!--En-tête :
<?xml version=« 1.0 » encoding=« UTF-8 »?>
<Entreprise xmlns:xsi=« http://www.w3.org/2001/XMLSchema-instance » xmlns=« http://www.bfs.admin.ch/xmlns/gvs/spiges-data/1.3 » ent_id=« xxxxxxx » version=« 1.3 »> -->
Pour tester si votre fichier est encodé en utf 8, vous pouvez l'ouvrir avec notepad ou text editor. L'encodage est affiché en bas à droite.
{{<insertImage image="tf2.png" class="edge max-w-90">}}
Si vous souhaitez maintenant enregistrer le fichier texte avec « Enregistrer sous », vous pouvez également modifier le codage. Sélectionnez maintenant utf-8 sous Codage et enregistrez le fichier.
{{<insertImage image="tf3.png" class="edge max-w-90">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Que signifie le message d'erreur suivant ?
{{<collapsibleBlock groupId="format_fehlermeldung">}}
<!--image-->
Par "not declared", on entend que la variable n'est pas définie (p. ex. majuscules/minuscules incorrectes pour «kanton_zusatzdaten» ; «missbildung» n'est pas une variable présente dans la description de la variable, etc.).
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}