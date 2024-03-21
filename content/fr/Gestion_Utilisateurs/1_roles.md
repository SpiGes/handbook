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

| <div style="width:200px"> Nom </div> | Tâches | <div style="width:120px"> Compétences </div> | <div style="width:140px"> Responsabilités </div> |
|---|---|---|---|
| BFS_Superuser | Il assume tous les rôles d'approbation à tous les niveaux pendant le relevé, met à jour le contenu et la technique de la plateforme, organise et surveille l'enrichissement avant le début du relevé. | Il peut lire, télécharger, commenter, modifier les statistiques de contrôle, clôturer, exporter toutes les données et gérer tous les utilisateurs. | S'assurer du bon fonctionnement de la plateforme avant, pendant et après l'enquête et intervenir à tous les niveaux si nécessaire. |
| BFS_Erhebungsverantwortliche | Il assume tous les rôles d'application à tous les niveaux, à l'exception de l'exportation des données LAMal et du traitement des données cantonales. En collaboration avec le BFS_Superuser, il met à jour le contenu et la technique de la plateforme, organise et surveille l'enrichissement avant le début de l'enquête. | Il représente le superutilisateur et garantit, en collaboration avec le BFS_superuser, le bon déroulement de la collecte des données. | Il représente le superutilisateur et garantit, en collaboration avec le BFS_superuser, le bon déroulement de la collecte des données. |
| BFS_User | Pendant l'enquête, il surveille régulièrement le respect des délais, la qualité des données et informe au besoin le responsable de l'enquête de l'OFS. | il peut lire, télécharger, commenter, modifier les statistiques de contrôle, clôturer, exporter toutes les données | Il assiste le responsable de l'enquête de l'OFS dans la surveillance du bon déroulement de l'enquête. |
| BFS_Read | En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. | il peut lire toutes les données de toutes les entreprises et de tous les sites hospitaliers | Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plate-forme. |

### Rôles Cantons

<table>
  <tr>
    <th><div style="width:170px"> Nom </div></th>
    <th>Tâches </th>
    <th> <div style="width:110px"> Compétences </div> </th>
    <th> <div style="width:120px"> Responsabilités </div> </th>
  </tr>
  <tr>
    <td> KT_Superuser </td>
    <td> Il informe ses entreprises/sites hospitaliers des nouveautés et contrôle la population de base avant l'enquête. Pendant le relevé, il veille à ce que ses sites hospitaliers respectent les délais de livraison. Il vérifie la qualité des données à l'aide de la règle de contrôle automatique et des commentaires complémentaires des sites hospitaliers et les valide. En cas de difficultés de la part des hôpitaux, il fournit le premier support. Il gère tous les utilisateurs de ses sites et entreprises hospitalières. </td>
    <td>Il peut lire, télécharger, commenter, modifier les statistiques de contrôle, exporter à des fins de plausibilité, clôturer toutes les données de ses entreprises et sites hospitaliers et gérer les utilisateurs de tous les rôles hospitaliers de ses sites et entreprises hospitaliers. </td>
    <td>Il veille à ce que l'enquête soit réalisée dans les entreprises hospitalières situées sur sa juridiction et les informe des nouveautés à venir. En cas de questions, les cantons sont les premiers interlocuteurs. Ils effectuent des contrôles d'entrée ainsi que des demandes de précisions et se chargent des rappels. Jusqu'à la fin juin de l'année du relevé, le canton veille à ce que les informations demandées soient correctes et complètes. Le canton vérifie la plausibilité des justifications fournies par l'entreprise hospitalière en cas d'annonce d'erreur sur le protocole de contrôle et les accepte. </td>
  </tr>
  <tr>
    <td> KT_ErhV(stat_Abschlussuser) </td>
    <td> Il assiste le KT_Superuser dans ses tâches. </td>
    <td> il peut lire toutes les données de ses entreprises et sites hospitaliers, les télécharger, les commenter, modifier les statistiques de contrôle, les exporter à des fins de plausibilité, les clôturer. </td>
    <td> Pour l'année de relevé concernée, l'office cantonal de recensement libère fin juillet les données des entreprises hospitalières situées sur son territoire en vue de leur utilisation selon la LSF. </td>
  </tr>
  <tr>
    <td> KT_Admin_Abschlussuser </td>
    <td> En consultant les données de ses sites ou entreprises hospitalières, il libère les données pour une utilisation administrative à la fin de l'enquête. </td>
    <td> Il peut lire toutes les données de ses entreprises et sites hospitaliers, les télécharger, les commenter, modifier les statistiques de contrôle, les exporter à des fins de plausibilité, les clôturer. </td>
    <td> Pour l'année de relevé concernée, l'office cantonal de la santé publique libère fin juillet les données des entreprises hospitalières situées sur son territoire en vue de leur utilisation selon la LAMal. </td>   
  </tr>
  <tr>
    <td> KT_User </td>
    <td> Il assiste le KT_Superuser dans ses tâches. </td>
    <td> Il peut lire, télécharger, commenter toutes les données de ses entreprises et sites hospitaliers </td>
    <td> Il assiste le KT_Superuser dans ses tâches. </td>
  </tr>
  <tr>
    <td> KT_Read </td>
    <td> En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. </td>
    <td> Il peut lire toutes les données de toutes les entreprises hospitalières de son canton. </td>
    <td> Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. </td>
  </tr>
</table>

### Rôles Hôpitaux

<table>
  <tr>
    <th><div style="width:170px"> Nom </div></th>
    <th>Tâches </th>
    <th> <div style="width:110px"> Compétences </div> </th>
    <th> <div style="width:120px"> Responsabilités </div> </th>
  </tr>
  <tr>
    <td>SP_ErhV_Unternehmen </td>
    <td> Pendant la phase d'initialisation, il lit les nouveautés concernant le relevé et les met en œuvre si nécessaire. Pendant le relevé, il veille à ce que ses sites hospitaliers respectent les délais de livraison. Il télécharge les données, vérifie la qualité des données à l'aide du système de contrôle automatique et les commente si nécessaire. A la fin du processus de collecte, il libère les données au niveau de l'entreprise hospitalière afin qu'elles puissent être libérée par le canton. </td>
    <td>Il peut lire, télécharger, commenter, exporter à des fins de plausibilité et clôturer toutes les données de son entreprise hospitalière et de ses sites. </td>
    <td>Il veille à ce que les données de son entreprise hospitalière soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau de l'entreprise hospitalière. </td>
  </tr>
  <tr>
    <td>SP_ErhV_Standort</td>
    <td>Il télécharge les données de son site hospitalier, vérifie la qualité des données au moyen du système de contrôle automatique et les commente si nécessaire. A la fin du processus de collecte, il libère les données au niveau du site hospitalier afin qu'elles puissent être transmises dans le processus (libération de l'entreprise hospitalière).</td>
    <td>Il veille à ce que les données de son site hospitalier soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau du site hospitalier.</td>
    <td>Il veille à ce que les données de son site hospitalier soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau du site hospitalier.</td>
  </tr>
</table>

  <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>