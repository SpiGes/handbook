---
title: Mouvement des patients 
slug: patientenbewegung
description: " "
weight: 80
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="patientenbewegung">}}

{{<numberedList>}}
{{<listItem>}}
L'entrée et la sortie sont-elles également considérées comme des épisodes ?
{{<collapsibleBlock groupId="patientenbewegung">}}
L'entrée et la sortie sont indiquées comme auparavant sous Date d'admission et Date de sortie. S'il n'y a pas d'autres mouvements, aucun épisode n'est saisi. Mais dès qu'il y a un mouvement devant être renseigné (par ex. une sortie intermédiaire), l'épisode 1 est saisi de la date d'admission à la sortie intermédiaire. L'épisode 2 commence à la sortie intermédiaire et se termine à la réadmission. L'épisode 3 commence à la réadmission et se termine au mouvement suivant (p. ex. vacances). Cela peut s'aboutir à plusieurs épisodes pour le même cas (voir illustration). Le dernier épisode (9) se termine à la date de sortie. Les épisodes sont les périodes précédant et suivant le changement de site d'un cas, les sorties / réadmissions intermédiaires, les traitements ambulatoires externes, les congés et les sorties d'essai.
{{<insertImage image="Image3.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Un cas qui change de site est-il comptabilisé dans les deux sites ?
{{<collapsibleBlock groupId="patientenbewegung">}}
Non, chaque cas n'est enregistré que sur le site principal, même s'il est transféré d'un site à l'autre au sein d'un même hôpital (BURGESV). Si un patient est transféré dans un autre hôpital (BURGESV), un nouveau cas doit être ouvert.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variables "wiedereintritt_aufenthalt" et "grund_wiedereintritt" : pourquoi ces indications ne peuvent-elles être fournies que pour A cas, alors que toutes les indications d'épisodes sont destinées aux cas ABC ?
{{<collapsibleBlock groupId="patientenbewegung">}}
Des clarifications avec SwissDRG SA ont montré que les deux variables "wiedereintritt_aufenthalt" et "grund_wiedereintritt" peuvent être indiquées pour les cas statistiques ABC. Nous allons adapter cela dans la description des variables 1.4.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
episode_id : Nous sommes d'avis que pour notre clinique, il n'est pas nécessaire de distinguer des épisodes pour les cas hospitaliers, car nous n'enregistrons aucun changement de site au sein de l'hôpital. Est-ce bien compris de notre part ?
{{<collapsibleBlock groupId="patientenbewegung">}}
La supposition est vraie en ce qui concerne les épisodes dus à des changements de lieu. Les épisodes dus à des sorties/réadmissions intermédiaires, à des congés, à des tests d'essai (en psychiatrie) ou à des traitements ambulatoires extra-muros doivent toutefois être enregistrés.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comprenons-nous bien que, par exemple, l'admission jusqu'au Traitements ambulatoires extra-muros est déjà un épisode ? Nous avons donc toujours un episode_art="1" entre les congés, les tests d'effort et les traitements à l'extérieur ?
{{<collapsibleBlock groupId="patientenbewegung">}}
Correct
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nous n'avons par exemple pas de changement de site au sein du même hôpital. <!--Dans l'exemple (voir illustration ci-dessous), nous n'avons pas de changement de site au sein du même hôpital.--> Comprenons-nous bien que pour l'episode_art="1", il faut toujours indiquer le numéro REE site de l'hôpital ?
{{<collapsibleBlock groupId="patientenbewegung">}}
Correct
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
A notre connaissance, l'heure de retour d'un Traitements ambulatoires extra-muros n'est pas documentée. Il est toutefois possible que cela soit enregistré dans les systèmes d'information hospitaliers des hôpitaux. Cette indication est-elle obligatoire ?
{{<collapsibleBlock groupId="patientenbewegung">}}
Oui, la date et l'heure doivent être fournies pour tous les épisodes, tant pour le début que pour la fin. Si la fin d'un traitement ambulatoire extra-muros n'est pas saisie, nous recommandons de compléter cette saisie. Si cela n'est pas possible (aussi rapidement), nous recommandons d'utiliser une durée standard pour les tTraitements ambulatoires extra-muros.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
L'indication du BURNR de l'hôpital traitant à l'extérieur est facultative, n'est-ce pas ?
{{<collapsibleBlock groupId="patientenbewegung">}}
Oui, pour les traitements ambulatoires externes, le numéro REE du site (BUR) de traitement peut être indiqué s'il est connu.
{{<insertImage image="Image4.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variable "wiedereintritt_aufenthalt" : Nous ne savons pas encore très bien ce qui doit être exporté dans la variable wiedereintritt_aufenthalt pour le type d'épisode_1 (donc lorsque le patient est présent à l'hôpital).
{{<collapsibleBlock groupId="patientenbewegung">}}
wiedereintritt_aufenthalt n'est rempli que pour episode_art=2, pour tous les autres episode_types, cette variable n'est pas saisie.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}} <!--DeepL-->
Variables «episode_art=3 (Urlaub)» et «admin_urlaub»: Le format des épisodes est AAAAMMJJH. Les épisodes ne connaissent donc pas les minutes. La définition indique que les vacances ne doivent être indiquées que si elles durent plus de 24 heures.
Faut-il indiquer les vacances à partir de 24 heures et 20 minutes ou seulement à partir de 25 heures, puisque les épisodes ne connaissent pas les minutes?
{{<collapsibleBlock groupId="patientenbewegung">}}
Selon les règles et définitions de la facturation des cas de SwissDRG AG, les minutes sont également un critère pour déterminer si la limite des 24 heures a été dépassée. Ici, en plus de l'épisode_art=3 (Urlaub), le nombre d'heures est également enregistré dans la variable admin_urlaub (anciennement 1.3.V04 dans le MS). Il est indiqué que seules les heures complètes sont enregistrées. Ainsi, dans votre exemple de congé de 24 heures et 20 minutes, la valeur 24 heures serait indiquée.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
