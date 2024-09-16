---
title: Traitements 
slug: behandlungen
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="behandlungen">}}

{{<numberedList>}}
{{<listItem>}}
Variable «behandlung_id» (traitement_id) : existe-t-il ici des recommandations pour l'ordre à mettre en œuvre en psychiatrie ? Les items HoNOS livrés sous forme de CHOP sont justement non spécifiques au diagnostic ou au traitement.
{{<collapsibleBlock groupId="behandlungen">}}
{{<markdown>}}
- Selon la description de la variable           
Numéro unique attribué au traitement, dans l'ordre.             
1 = traitement 1            
2 = traitement 2            
3 = traitement 3            
(…) etc. -> illimité            
Les critères suivants sont recommandés pour l'ordre des traitements :
1. Procédures de traitement du diagnostic principal 
2. Procédures de traitement des diagnostics supplémentaires 
3. Procédures de définition du diagnostic principal 
4. Procédures de définition des diagnostics supplémentaires 
5. Autres procédures    
- Pour les items HoNOS, nous recommandons une numérotation chronologique (mesures HoNOS antérieures = ID inférieures, mesures HoNOS ultérieures = ID supérieures).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variable «behandlung_chop» : les traitements doivent-ils être livrés avec ou sans points ?
{{<collapsibleBlock groupId="behandlungen">}}
Sans points. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nous craignons un peu que, surtout dans les premiers temps, ces données ne soient pas entièrement saisies et qu'il y ait beaucoup de retouches. C'est pourquoi nous aimerions définir le champ comme obligatoire pour les codes CHOP concernés. Existe-t-il pour le catalogue CHOP une attribution des codes considérés comme opérationnels ou interventionnels ?
{{<collapsibleBlock groupId="behandlungen">}}
L'OFS est conscient que les données seront incomplètes lors de l'introduction de cette nouvelle donnée. Après la phase de consolidation habituelle, on verra quelles précisions sont nécessaires. Il n'est pas du tout possible de déterminer clairement pour chaque code CHOP s'il nécessite ou non une indication de temps. Ce sont d'autres caractéristiques qui sont ici déterminantes : si le traitement est en rapport avec l'utilisation d'une salle d'opération ou d'un laboratoire de cathétérisme cardiaque.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Médecins pratiquant les opérations : Nous avons ici un problème de compréhension dans l'interprétation des données du fichier XML. La description de la variable indique que deux médecins pratiquant les opérations au maximum peuvent être comptabilisés par opération. Dans l'aperçu, l'attribut ne permet pas de savoir s'il peut être exporté plusieurs fois.
{{<insertImage image="Image1.jpg" class="edge max-w-90">}}
{{<collapsibleBlock groupId="behandlungen">}}
Le nombre d'opérateurs pouvant être comptabilisé pour une opération est une question conceptuelle et peut varier d'un canton à l'autre (en règle générale, 2 est une valeur indicative). Techniquement, il est possible de saisir plusieurs médecins pratiquant les opérations.
{{<insertImage image="Image2.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variable «behandlung_auswaerts»: Pouvez-vous définir plus précisément l'attribution des modalités de cette variable et expliquer le lien avec le type_d'épisode=5 (traitement ambulatoire à l'extérieur) ?
{{<collapsibleBlock groupId="behandlungen">}}
La notion d'areal d'hospitalisation est floue. Nous avons fait le schéma suivant à ce sujet :
{{<markdown>}}
  Legende:  
  BUR = site
  Areal = aire  
  BURGESV = hôpital/établissement
{{</markdown>}}
{{<insertImage image="Bild1.jpg" class="edge max-w-90">}}
{{<markdown>}}
Traitements ambulatoires extra-muros
Uniquement pour les traitements ambulatoires hors de la propre aire hospitalière ou dans un établissement tiers. Le champ est laissé vide lorsque la question ne se pose pas (traitement au sein du propre établissement).
Propre établissement = No Bur GESV identique
Etablissement tiers = No Bur GESV différent

Liste des codes
1 = Même aire hospitalière, autre établissement.
2 = Même établissement, autre aire hospitalière.
3 = Autre établissement, autre aire hospitalière.
9 = inconnu.

Les cas avec les valeurs 1 ou 3 sont enregistrés comme type_épisode=5.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}