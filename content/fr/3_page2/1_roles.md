---
title: Rôles
slug: roles
description: "Id leo in vitae turpis massa sed elementum tempus egestas."
weight: 10
type: docs
keywords: []
---

{{<alert color="info">}}
La documentation est en cours de construction.
{{</alert>}}

### Rôles OFS

|  <div style="width:200px"> Nom </div>  | Tâches | <div style="width:120px"> Compétences </div> | <div style="width:140px"> Responsabilités </div> |
|---|---|---|---|
| BFS_Superuser | Il assume tous les rôles d'approbation à tous les niveaux pendant le relevé, met à jour le contenu et la technique de la plateforme, organise et surveille l'enrichissement avant le début du relevé. | Il peut lire, télécharger, commenter, modifier les statistiques de contrôle, clôturer, exporter toutes les données et gérer tous les utilisateurs. | S'assurer du bon fonctionnement de la plateforme avant, pendant et après l'enquête et intervenir à tous les niveaux si nécessaire. |
| BFS_Erhebungsverantwortliche | Il assume tous les rôles d'application à tous les niveaux, à l'exception de l'exportation des données LAMal et du traitement des données cantonales. En collaboration avec le BFS_Superuser, il met à jour le contenu et la technique de la plateforme, organise et surveille l'enrichissement avant le début de l'enquête. | Il représente le superutilisateur et garantit, en collaboration avec le BFS_superuser, le bon déroulement de la collecte des données. | Il représente le superutilisateur et garantit, en collaboration avec le BFS_superuser, le bon déroulement de la collecte des données. |
| BFS_User | Pendant l'enquête, il surveille régulièrement le respect des délais, la qualité des données et informe au besoin le responsable de l'enquête de l'OFS. | il peut lire, télécharger, commenter, modifier les statistiques de contrôle, clôturer, exporter toutes les données | Il assiste le responsable de l'enquête de l'OFS dans la surveillance du bon déroulement de l'enquête. |
| BFS_Read | En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. | il peut lire toutes les données de toutes les entreprises et de tous les sites hospitaliers | Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plate-forme. |

### Rôles Cantons

|  <div style="width:180px"> Nom </div>  |  Tâches | <div style="width:110px"> Compétences </div> | <div style="width:110px"> Responsabilités </div> |
|---|---|---|---|
| KT_Superuser | Il informe ses entreprises/sites hospitaliers des nouveautés et contrôle la population de base avant l'enquête. Pendant le relevé, il veille à ce que ses sites hospitaliers respectent les délais de livraison. Il vérifie la qualité des données à l'aide de la règle de contrôle automatique et des commentaires complémentaires des sites hospitaliers et les valide. En cas de difficultés de la part des hôpitaux, il fournit le premier support. Il gère tous les utilisateurs de ses sites et entreprises hospitalières. | Il peut lire, télécharger, commenter, modifier les statistiques de contrôle, exporter à des fins de plausibilité, clôturer toutes les données de ses entreprises et sites hospitaliers et gérer les utilisateurs de tous les rôles hospitaliers de ses sites et entreprises hospitaliers. | Il veille à ce que l'enquête soit réalisée dans les entreprises hospitalières situées sur sa juridiction et les informe des nouveautés à venir. En cas de questions, les cantons sont les premiers interlocuteurs. Ils effectuent des contrôles d'entrée ainsi que des demandes de précisions et se chargent des rappels. Jusqu'à la fin juin de l'année du relevé, le canton veille à ce que les informations demandées soient correctes et complètes. Le canton vérifie la plausibilité des justifications fournies par l'entreprise hospitalière en cas d'annonce d'erreur sur le protocole de contrôle et les accepte.|
| KT_ErhV(stat_Abschlussuser) | Il assiste le KT_Superuser dans ses tâches. | il peut lire toutes les données de ses entreprises et sites hospitaliers, les télécharger, les commenter, modifier les statistiques de contrôle, les exporter à des fins de plausibilité, les clôturer. | Pour l'année de relevé concernée, l'office cantonal de recensement libère fin juillet les données des entreprises hospitalières situées sur son territoire en vue de leur utilisation selon la LSF. |
| KT_Admin_Abschlussuser | En consultant les données de ses sites ou entreprises hospitalières, il libère les données pour une utilisation administrative à la fin de l'enquête. | Il peut lire toutes les données de ses entreprises et sites hospitaliers, les télécharger, les commenter, modifier les statistiques de contrôle, les exporter à des fins de plausibilité, les clôturer. | Pour l'année de relevé concernée, l'office cantonal de la santé publique libère fin juillet les données des entreprises hospitalières situées sur son territoire en vue de leur utilisation selon la LAMal. |
| KT_User | Il assiste le KT_Superuser dans ses tâches. | il peut lire, télécharger, commenter toutes les données de ses entreprises et sites hospitaliers | Il assiste le KT_Superuser dans ses tâches. |
| KT_Read | En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. | Il peut lire toutes les données de toutes les entreprises hospitalières de son canton. | Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. |