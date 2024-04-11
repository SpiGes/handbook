---
title: Traitements 
slug: behandlungen
description: " "
weight: 50
type: docs
keywords: []
---

Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="behandlungen">}}

1. Variable «behandlung_id» (traitement_id) : existe-t-il ici des recommandations pour l'ordre à mettre en œuvre en psychiatrie ? Les items HoNOS livrés sous forme de CHOP sont justement non spécifiques au diagnostic ou au traitement.
{{<collapsibleBlock groupId="behandlungen">}}
<ul>
<li> Selon la description de la variable <br />
Numéro unique attribué au traitement, dans l'ordre. <br />
1 = traitement 1 <br />
2 = traitement 2 <br />
3 = traitement 3 <br />
(…) etc. -> illimité <br />
Les critères suivants sont recommandés pour l'ordre des traitements :
<ol>
<li> Procédures de traitement du diagnostic principal </li>
<li> Procédures de traitement des diagnostics supplémentaires </li>
<li> Procédures de définition du diagnostic principal </li>
<li> Procédures de définition des diagnostics supplémentaires </li>
<li> Autres procédures </li>
</ol>
</li>
<li>
Pour les items HoNOS, nous recommandons une numérotation chronologique (mesures HoNOS antérieures = ID inférieures, mesures HoNOS ultérieures = ID supérieures).
</li>
</ul>
{{</collapsibleBlock>}}

2. Nous craignons un peu que, surtout dans les premiers temps, ces données ne soient pas entièrement saisies et qu'il y ait beaucoup de retouches. C'est pourquoi nous aimerions définir le champ comme obligatoire pour les codes CHOP concernés. Existe-t-il pour le catalogue CHOP une attribution des codes considérés comme opérationnels ou interventionnels ?
{{<collapsibleBlock groupId="behandlungen">}}
L'OFS est conscient que les données seront incomplètes lors de l'introduction de cette nouvelle donnée. Après la phase de consolidation habituelle, on verra quelles précisions sont nécessaires. Il n'est pas du tout possible de déterminer clairement pour chaque code CHOP s'il nécessite ou non une indication de temps. Ce sont d'autres caractéristiques qui sont ici déterminantes : si le traitement est en rapport avec l'utilisation d'une salle d'opération ou d'un laboratoire de cathétérisme cardiaque
{{</collapsibleBlock>}}

3. Médecins pratiquant les opérations : Nous avons ici un problème de compréhension dans l'interprétation des données du fichier XML. La description de la variable indique que deux médecins pratiquant les opérations au maximum peuvent être comptabilisés par opération. Dans l'aperçu, l'attribut ne permet pas de savoir s'il peut être exporté plusieurs fois.
{{<insertImage image="Image1.jpg" class="edge size">}}
{{<collapsibleBlock groupId="behandlungen">}}
Le nombre d'opérateurs pouvant être comptabilisé pour une opération est une question conceptuelle et peut varier d'un canton à l'autre (en règle générale, 2 est une valeur indicative). Techniquement, il est possible de saisir plusieurs médecins pratiquant les opérations.
{{<insertImage image="Image2.png" class="edge size">}}
{{</collapsibleBlock>}}
