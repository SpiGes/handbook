---
title: Admninistratif
slug: admninistratives
description: " "
weight: 10
type: docs
keywords: []
---

Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="admninistratives">}}

1. Le jeu de données SpiGes attend-il les cas de parenthèses de cas (= cas regroupés) ? Dans le domaine de la psychiatrie, l'ANQ attend un jeu de données avec les cas individuels, donc des cas non regroupés. Existe-t-il déjà un échange entre vous et l'ANQ concernant l'utilisation du jeu de données SpiGes ?
{{<collapsibleBlock groupId="admninistratives">}}
Le regroupement des cas est géré à SpiGes conformément aux directives de SwissDRG SA. Nous sommes en discussion avec l'ANQ concernant la gestion des cas non regroupés.
{{</collapsibleBlock>}}

2. fall_id_ch : Qui génère ce numéro de cas et celui-ci est-il automatiquement déposé dans Opale (système IRP) ? Jusqu'à présent, nous pouvions générer automatiquement l'identifiant de cas dans les deux fichiers (données OFS et fichier des coûts par cas) dans Opale.
{{<collapsibleBlock groupId="admninistratives">}}
<ul>
<li> Le numéro de cas clair pour toute la Suisse est généré par la plateforme SpiGes. Lors d'une exportation de données à partir de la plateforme, ce fall_id_ch est à la disposition des utilisateurs de données. </li>
<li> L'identifiant du cas, la variable fall_id, est généré par les hôpitaux. Les logiciels hospitaliers (comme Opale par exemple) devraient continuer à disposer de cette fonction. </li>
</ul>
{{</collapsibleBlock>}}

3. Il existe des variables (p. ex. beatmung) pour lesquelles la référence temporelle est "cas complet" ou "année de relevé". Dans la plupart des hôpitaux, cette position n'est toutefois pas gérée sur l'axe temporel, mais une seule fois sur le cas. De même, dans l'ancien jeu de données MS, de telles positions n'étaient toujours livrées que pour les cas A. Comment envisagez-vous une livraison des cas B/C pour ces variables ?
{{<collapsibleBlock groupId="admninistratives">}}
Jusqu'à présent, il n'a pas été défini si ces variables doivent être fournies pour les cas B et C. En principe, il devrait être possible de fournir ces informations, c'est la seule façon de calculer les taux d'occupation à partir des données. Toutefois, il est probable que de nombreux hôpitaux soient comme vous et ne disposent pas des données pour les cas B et C. Dans ce cas, les variables pour les cas B et C peuvent être laissées vides.
{{</collapsibleBlock>}}

4. Comment est définie le «Transfert interne» ?
{{<collapsibleBlock groupId="admninistratives">}}
<ul>
<li> Le transfert interne d’un domaine de prestations (soins aigus, psychiatrie, réadaptation) vers un autre domaine de prestations au sein du même hôpital (ree_gesv) </li>
<li> ou pour les cas considérés comme étant en attente de placement. </li>
</ul>
{{</collapsibleBlock>}}

5.	Est-il possible d’avoir une définition pour la valeur « 7 = rapatriement » ?
{{<collapsibleBlock groupId="admninistratives">}}
Rapatriement d'un patient ou d'une patiente avec une résidence principale suisse de l'étranger vers la Suisse, sans exigences particulières quant au moyen de transport ou à l'accompagnement.
{{</collapsibleBlock>}}

6. Comment est défini un « transfert » ? (p. ex. les codes «5 = transfert dans les 24 heures» et «6 = retransfert» de la variable type d'admission).
{{<collapsibleBlock groupId="admninistratives">}}
<ul>
<li> La variable Type d'admission existe déjà dans la MS et n'a pas non plus changé avec SpiGes. Un transfert se distingue d'un transfert interne par le fait qu'il n'a pas lieu dans le même hôpital (REEGESV), mais dans un autre hôpital (deux REEGESV différents). La définition se base sur les principes de SwissDRG SA, que vous trouverez ici:  <a href="https://www.swissdrg.org/fr/somatique-aigue/systeme-swissdrg-1302024/regles-et-definitions"> https://www.swissdrg.org/fr/somatique-aigue/systeme-swissdrg-1302024/regles-et-definitions </a> </li>
<li>	Bei der Eintrittsart «6=Rückverlegung» wurde von der SwissDRG AG folgende Spezifizierung kommuniziert: Bei ununterbrochenem Spitalaufenthalt in einem anderen Spital von mehr als 18 Tagen und Rückkehr in das ursprüngliche Spital </li>
</ul>
{{</collapsibleBlock>}}

7. Comment coder les cas qui passent de la réadaptation (tarif ST-REHA) aux soins de longue durée (tarif "taxe de soins") du même établissement ? Les variables 1.2.V02 et 1.5.V03 ne nous permettent pas d'indiquer "soins de longue durée, même établissement".
{{<collapsibleBlock groupId="admninistratives">}}
C'était déjà le cas pour la MS ; le cas change de réadaptation à SOMED (même établissement) ; pour le code 2, les deux possibilités sont simplement incluses (même établissement ou autre établissement). Le cas doit être codé comme suit : <br />
sortie_séjour : 2 = établ. de santé non hospit. médicalisé  <br />
entrée_séjour : 84 = division/clinique de réadaptation, même établissement  
{{</collapsibleBlock>}}

### Variable "(Pays de résidence)"

8. La description de la variable mentionne une répartition séparée des pays extra-européens en régions. Cette liste existe-t-elle déjà ou sera-t-elle publiée ?
{{<collapsibleBlock groupId="admninistratives">}}
<ul>
<li> La procédure et la liste sont restées les mêmes que pour la MS. Ci-joint le lien vers la liste :  <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medsreg.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medsreg.html </a> </li>
<li> Pour les pays extra-européens, il est possible de saisir des régions, mais aussi d'indiquer les codes des pays. Ceci est déjà le cas dans la MS et n'a pas changé. Le format est alphanumérique et peut donc contenir aussi bien des chiffres que des lettres. </li>
</ul>
{{</collapsibleBlock>}}

###	Variable "Classe d'assurance" 

9. Dans la description de la variable, il est indiqué qu'il faut l'indiquer pour tous, sauf pour les personnes payant elles-mêmes. Mais dans le xsd, le champ est "required". Que faut-il alors fournir pour les personnes payant elles-mêmes ?
{{<collapsibleBlock groupId="admninistratives">}}
La formulation peut en effet porter à confusion. Pour qu'il n'y ait pas de missings ici, required a été présupposé. Cela concerne aussi les self-payeurs, qui sont codés avec 9=inconnu.
{{</collapsibleBlock>}}

10.	Variable "Classe d'assurance" : selon notre administration des patients, il est difficile d'obtenir l'information pour les cas avec une "assurance Flex" et de la consigner avec "8 = autre".  Y a-t-il un problème lors des analyses ultérieures ou quelles sont les conséquences sur les statistiques si nous n'indiquons pas (ou ne pouvons pas indiquer) "8=autres" ?
{{<collapsibleBlock groupId="admninistratives">}}
<ul>
<li> Les cas Flex et tous les autres modèles d'assurance qui deviennent de plus en plus populaires ne sont pas faciles à représenter. Malgré ces difficultés, d’un point de vue statistique, cela n’est pas dramatique pour la variable Classe d'assurance si l’information n’est pas sure. En cas de doute, ces cas devraient être représentés en tant que semi-privés.</li>
<li> La variable "liegeklasse" est en revanche centrale pour la représentation de l'ITAR_K. Il n'y a pas non plus de catégorie "autre" et les cas avec "inconnu" seront examinés de près. En fonction de la valeur de cette variable, les cas sont attribués dans des colonnes différentes dans l’ITAR_K®.  </li>
</ul>
{{</collapsibleBlock>}}
