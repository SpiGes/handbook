---
title: Contrôles de format et messages d'erreur
slug: format_fehlermeldung
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="format_fehlermeldung">}}

{{<numberedList>}}
{{<listItem>}}
Termes généraux utilisés dans les messages d'erreur
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf1.png" class="edge max-w-90">}}

{{<markdown>}}
Element = partie de l'enquête (par ex. Unternehmen, Standort, Fall, etc.)
Attribut = variable (par ex. fall_id, burnr, etc.)
{{</markdown>}}
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
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

<!--{{<numberedList>}}
{{<listItem>}}
Existe-t-il un modèle de format pour l'importation de données dans l'application SpiGes ?
{{<collapsibleBlock groupId="format_fehlermeldung">}}
Oui, les formats du concept d'interface doivent être repris. 
{{</collapsibleBlock>}}
{{</listItem>}}-->


{{</numberedList>}}
{{</faqBlock>}}