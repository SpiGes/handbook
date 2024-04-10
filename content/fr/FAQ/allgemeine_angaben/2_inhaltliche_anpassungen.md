---
title: Adaptations du contenu
slug: inhaltliche_anpassungen
description: " "
weight: 20
type: docs
keywords: []
---

{{<alert color="info">}}
Die Dokumentation befindet sich im Aufbau.
{{</alert>}}

{{<collapsible title="Quelles sont les variables qui changent avec SpiGes ?">}}
<ul>
<li> SpiGes a surtout des répercussions importantes sur le processus de contrôle des données et le format des données de la livraison. En ce qui concerne les données médicales (MS actuel), seuls quelques points changent. Les plus importants pour vous devraient être les suivants :
<ul>
<li> Le traitement principal est supprimé. </li>
<li>	Le complément au diagnostic principal est supprimé. </li>
<li>	Les diagnostics et les traitements peuvent désormais être saisis en nombre illimité. </li>
<li>	Le temps de prestation chirurgicale est saisi pour les procédures chirurgicales.</li>
<li>	Le début du traitement doit être saisi avec l'heure (de l'opération dans son ensemble) pour les procédures chirurgicales.   </li>
<li>	La référence entre plusieurs diagnostics (dague/étoile, point d'exclamation) est désormais saisie avec une variable de référence (diagnose_zusatz) saisi à la place du caractère spécial. </li>
</ul>
</li>

<li>	La meilleure façon de suivre toutes les modifications apportées à l'ensemble de données ainsi que les détails exacts est de prendre la liste des variables et de filtrer la colonne "Nouveau/Variable MS" pour distinguer les nouvelles variables et les variables adaptées. </li>

<li> Les données de facturation et les coûts, respectivement les recettes, sont désormais collectées. </li>

<li> Vous trouverez ici le jeu de données complet :   <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html </a>
</li>
</ul>
{{</collapsible>}}

{{<collapsible title="Quel est l'impact de SpiGes sur les directives de codage ?">}}
Vous trouverez ces informations dans le manuel de codage. Celui-ci peut être téléchargé sous le lien suivant : <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medkk.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medkk.html </a>
{{</collapsible>}}

{{<collapsible title="Quel est le contenu du rapport national de vérification ?">}}
Le contenu exact du rapport national de vérification dépend des contrôles qui sont actuellement élaborés avec un groupe de travail comprenant toutes les parties prenantes. Pour l'essentiel, le rapport national de vérification comprend les contrôles positifs ainsi que les justifications officielles de ces contrôles (un extrait du chat relatif au contrôle).
{{</collapsible>}}

{{<collapsible title="Les hôpitaux pilotes seront en mesure de créer un premier jeu de données dès le printemps 2024. D'autres cantons exigent la remise d'un premier fichier de données XML d'ici septembre. Pour ces remises, attend-on des données réelles d'un système productif ou des données de test d'un système de test suffisent-elles ? En d'autres termes, la vraie analyse ne commencera-t-elle qu'en 2025 ou l'OFS veut-il déjà analyser les données réelles de 2024 ?">}}
<ul>
<li> Pour le pilote au printemps 2024, on attend des hôpitaux pilotes qu'ils fournissent des données réelles issues d'un système productif. Celles-ci ne seront analysées que dans le but d'acquérir des connaissances sur le pilote.  </li>
<li> En août 2024, tous les hôpitaux (dans tous les cantons) devront effectuer un test d'interface afin de montrer que la mise en œuvre technique de l'interface fonctionne. Pour cela, des livraisons partielles, même à partir de systèmes de test, suffisent. </li>
<li> A partir du 1er janvier 2025, tous les hôpitaux devront fournir des données réelles de l'année 2024 issues des systèmes productifs et les vérifier intégralement avant fin avril et les justifier le cas échéant. </li>
</ul>
{{</collapsible>}}

{{<collapsible title="11.	Valeurs inversées : Nous avons remarqué que les valeurs de certaines variables sont différentes de celles des statistiques MS. Par exemple, il y a la valeur des signes vitaux. Statistiques sur la MS : 0 = mort-né et 1 = né vivant. Spiges (exactement l'inverse) : 0 = naissance vivante et 1 = mort-né. D'autres exemples seraient la formation scolaire ou l'État civil. De notre point de vue, ce n'est pas optimal et nous aimerions savoir si c'est l'intention et, si oui, pourquoi ? ">}}
Dans l'esprit du "once only", nous avons intégré les listes de codes et les métadonnées dans un système OFS, qui sera ensuite publié. Les nouvelles listes de codes correspondent désormais au standard suisse de la plateforme d'interopérabilité i14y.admin.ch, alors qu'auparavant il s'agissait d'une solution spéciale MS.
{{</collapsible>}}

{{<collapsible title="12.	Valeurs calculées : Dans la liste des variables, il y a quelques lignes qui sont grisées avec la remarque calculées (exemple uid). Cela signifie-t-il que nous les livrons vides dans le XML et que l'OFS les calculera et les inscrira ? Ou est-ce que nous ne fournissons pas ces valeurs et les ignorons ? ">}}
Comme vous pouvez le constater dans le schéma XML, ces variables calculées ne sont pas incluses. Vous pouvez les ignorer.
{{</collapsible>}}

