---
title: Généralités
slug: allgemein
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="allgemein">}}

{{<numberedList>}}
{{<listItem>}}
Existe-t-il un modèle de format pour l'importation de données dans l'application SpiGes ?
{{<collapsibleBlock groupId="allgemein">}}
Oui, les formats du concept d'interface doivent être repris.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les grands fournisseurs de logiciels d'administration des patients (par exemple SAP) ont-ils également été informés par l'OFS et développent-ils déjà des solutions logicielles ? Il est probable que le fichier XML devrait à l'avenir être créé dans le logiciel d'administration des patients.
{{<collapsibleBlock groupId="allgemein">}}
En janvier 2023, nous avons organisé une réunion d'information à l'intention des fabricants de systèmes d'information clinique (logiciels d'administration des patients). SAP y était également représenté. L'OFS informe régulièrement ce groupe de l'état d'avancement de SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Selon la liste de variables, il existe les tableaux suivants:
{{<markdown>}}
|||
|-----------|-----------|
| 1 | Administratif |
| 2 | Nouveau-nés |
| 3 | Psychiatrie |
| 4 | CUFI |
| 5 | Diagnostics |
| 6 | Traitements |
| 7 | Médecins pratiquant les opérations |
| 8 | Médicaments |
| 9 | Facture |
| 10 | Mouvement des patients |
| 11 | Données cantonales |
| 12 | Identificateurs des personnes |

{{</markdown>}}

Est-il possible de livrer ces tableaux sous forme de fichiers xml individuels à la plateforme SpiGes ?
{{<collapsibleBlock groupId="allgemein">}}
Le tableau 12 Identificateurs de personnes doit être livré dans un fichier séparé (pour des raisons de protection des données). Pour les autres tableaux, un autre fichier est défini, mais il supporte les livraisons partielles. En théorie, il est donc possible de livrer tous les tableaux dans un seul fichier XML sous forme de livraisons partielles. Nous ne le recommandons toutefois pas, car cela nécessite une coordination complexe des différents tableaux (s'assurer que les informations sur tous les cas sont disponibles dans tous les fichiers).  Vous trouverez des informations plus précises à ce sujet dans la description du fichier XML pour l'importation de données dans la plateforme SpiGes sur notre {{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.html" newTab="true">}}site web{{</link>}}.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}} <!--DeepL-->
Est-il vrai que la livraison des données à SwissDRG SA au format SpiGes ne permet pas de livraisons partielles ?
{{<collapsibleBlock groupId="allgemein">}}
À ce sujet, veuillez consulter les informations sur le site internet de SwissDRG SA concernant le relevé 2025 (données 2024) (par exemple, soins somatiques aigus).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Existe-t-il une possibilité pour les petits établissements de créer un fichier XML à partir d'un fichier Excel (dans lequel la CUFI est saisie). Existe-t-il un fournisseur qui prévoit de le faire ?
{{<collapsibleBlock groupId="allgemein">}}
Oui, il existe des fournisseurs privés qui proposent un tel outil. C'est pourquoi l'OFS ne poursuit pas actuellement cette idée.
<!--Cette possibilité est actuellement examinée par l'OFS.-->
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Est-il prévu de mettre à disposition un Excel pour les coûts non reliés à un cas, dans lequel établissement peut remplir les coûts non reliés à un cas en format Excel et les exporter ensuite en format XML ?
{{<collapsibleBlock groupId="allgemein">}}
La livraison séparée de différents types d'éléments XML est possible. C'est-à-dire que les unités finales d'imputation non reliées à un cas peuvent en principe être livrées dans un autre fichier que les unités finales d'imputation reliées à un cas. Il existe des fournisseurs privés qui mettent à disposition un outil de conversion Excel. C'est pourquoi l'OFS ne poursuit pas actuellement cette idée.
<!--Nous devons encore déterminer si nous pouvons mettre à disposition un outil pour la transformation des données à partir d'un fichier Excel.-->
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le fichier d'exportation SpiGes a-t-il la même structure que le fichier que les hôpitaux importent dans SpiGes ?
{{<collapsibleBlock groupId="allgemein">}}
Il y aura plusieurs fichiers d'exportation. D'une part, il sera possible d'exporter le fichier XML que les hôpitaux importent, et d'autre part, il sera possible d'exporter dans un format plat (plusieurs fichiers CSV).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Dans le format XML, l'ordre des variables au sein d'une ligne joue-t-il un rôle ?
{{<collapsibleBlock groupId="allgemein">}}
{{<markdown>}}

- L'ordre des éléments est prédéfini et ne peut pas être modifié. Les éléments peuvent tout au plus être omis. Ainsi, pour l'élément «cas», les sous-éléments doivent toujours être indiqués dans l'ordre suivant : «administratif», «nouveau-nés», «psychiatrie», «CUFI cas», «diagnostics», «traitements», «médicaments», «facture», «mouvement des patients» et «données cantonales».  
- L'ordre des attributs peut en revanche être choisi librement. Ainsi, par exemple, dans l'élément «administratif», il est possible d'indiquer aussi bien «...sexe="2" âge="37"...» que «...âge="37" sexe="2"...».
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Des variables peuvent-elles également manquer sur une ligne si la clinique n'a rien à remplir sur cette ligne pour la variable correspondante ? Ou toutes les variables de l'interface doivent-elles toujours figurer sur chaque ligne ?
{{<collapsibleBlock groupId="allgemein">}}
Oui, les variables peuvent être manquantes. Certaines variables doivent cependant être obligatoirement indiquées. Elles sont marquées comme «required» dans le fichier de définition XSD («xs:attribute name="fall_id" use="required"»). Nous ajouterons également cette information dans la liste des variables.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les variables qui n'ont pas de contenu peuvent-elles être fournies avec une valeur NULL (p. ex. des lignes KTR complètes avec des NULL dans les variables où il n'y a rien) ?
{{<collapsibleBlock groupId="allgemein">}}
Cela dépend des variables. Pour les variables KTR, il est possible de saisir toutes les variables avec la valeur "0". Les variables vides ("") ou les valeurs nulles ("NULL") ne sont toutefois pas autorisées. Si vous souhaitez le vérifier concrètement, vous pouvez valider votre fichier XML par rapport à la définition XSD. Il existe pour cela des outils gratuits en ligne. Veuillez noter qu'aucune donnée réelle ne peut être téléchargée sur de telles plateformes. Vous pouvez toutefois vérifier des exemples de fichiers fictifs. La plateforme SpiGes proposera également une telle validation.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Un logiciel de plausibilité analogue à Medplaus sera-t-il disponible, qui pourra être utilisé localement au sein des hôpitaux avant le téléchargement ?
{{<collapsibleBlock groupId="allgemein">}}
Un outil de contrôle sera mis à disposition via API (Application Programming Interfaces). Il ne sera toutefois disponible que dans le courant de l'année prochaine. D'ici là, nous recommandons de continuer à utiliser MedPlaus. Il y aura également une version pour l'année 2024.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Sait-on déjà quelle sera la procédure concernant les données supplémentaires cantonales ? Plusieurs cantons (par ex. LU, GR, VS et VD) disposent déjà d'une ligne MK. En outre, les cantons de ZH et BE collectent également des données supplémentaires dans le cadre du SDEP. Savez-vous déjà si ces données seront intégrées dans l'exportation SpiGes ou si elles devront être exportées séparément ?
{{<collapsibleBlock groupId="allgemein">}}
{{<unorderedList>}}
{{<listItem>}}
Les données supplémentaires cantonales ont été prises en compte dans l'interface ; voir {{<link url="https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.assetdetail.32129189.html" newTab="true">}}la description du fichier XML pour l'importation des données dans la plateforme SpiGes{{</link>}}.
{{</listItem>}}
{{<listItem>}}
Les données cantonales supplémentaires peuvent certes être indiquées dans le XML, mais elles ne sont pas traitées plus avant lors de l'importation sur la plateforme SpiGes. Elles sont plausibilisées et traitées séparément par les cantons.
{{</listItem>}}
{{<listItem>}}
Les données cantonales ne peuvent être exportées que par l'hôpital lui-même et par le canton. Il est probable que les données cantonales pour ces utilisateurs soient contenues dans le même fichier XML que les autres données.
{{</listItem>}}
{{</unorderedList>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Est-ce qu'il sera possible d'effectuer des corrections directement sur la plateforme ?
{{<collapsibleBlock groupId="allgemein">}}
Non, la plateforme n'offre pas la possibilité de saisir ou de corriger des données. L'objectif est de corriger les erreurs à la source, c'est-à-dire dans les systèmes des hôpitaux, afin que les exportations ultérieures soient cohérentes et que les erreurs n'apparaissent plus dans les prochains relevés.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
De nouveaux formats sont disponibles : Il existe de nouveaux formats. Par exemple, pour rech_betrag. Le format est N10.2 Nous supposons qu'il s'agit de l'indication des décimales. Dans ce cas, 2 décimales et une longueur totale de 12. Est-ce correct ?
{{<collapsibleBlock groupId="allgemein">}}
N10.2 désigne un nombre de 10 chiffres au total, dont 2 chiffres après la virgule (et donc 8 chiffres avant la virgule au maximum).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nouvelles variables medi_id et rech_id : d'après la description, nous ne savons pas s'il s'agit de numéros d'ordre ou d'ID réels du système. Si oui, lesquelles ? En ce qui concerne medi_id, nous avons tout de suite pensé au code ATC_, mais il existe une variable supplémentaire pour cela.
{{<collapsibleBlock groupId="allgemein">}}
{{<markdown>}}

- Il s'agit, pour les deux nouvelles variables "medi_id" et "rech_id", d'identifiants qui sont nécessaires pour des raisons techniques afin d'assurer une attribution claire. Ceux-ci ne doivent pas obligatoirement commencer par 1, mais ils doivent être uniques pour chaque cas.
- Le fichier modèle XML 1.3, que vous trouverez sur notre site , contient également un exemple. medi_id ="1" contient l'information selon laquelle il s'agit du premier médicament hautement coûteux selon les directives de SwissDRG SA pour ce cas spécifique.
{{</markdown>}}
{{<insertImage image="Image5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Dans les fichiers d'exemple pour le fichier des identificateurs et le fichier des données, il y a deux champs pour la version. Or, ces versions ne correspondent pas. Ainsi, la version 1.0 est indiquée dans l'en-tête et la version 1.3 dans le tag Entreprise. Pourquoi les numéros de version sont-ils différents ? Comment savoir quand indiquer quel numéro de version ?
{{<collapsibleBlock groupId="allgemein">}}
{{<insertImage image="Image6.jpg" class="edge max-w-90">}}

{{<lineBreak>}}
{{<markdown>}}
`?xml version="1.0"` se trouve toujours ainsi .
La version supérieure se réfère donc au "XML" lui-même, et la version inférieure au XML SpiGes spécifique.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
