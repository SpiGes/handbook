---
title: Rôles Hôpitaux
slug: rollen_betriebe
description: "Sur cette page, nous vous expliquons les différents rôles d'un utilisateur établissement (hôpitaux)."
weight: 30
type: docs
keywords: []
---

<table>
  <tr>
    <th><div style="width:160px"> Nom </div></th>
    <th> Tâches </th>
    <th> <div style="width:110px"> Compétences </div> </th>
    <th> <div style="width:120px"> Responsabilités </div> </th>
  </tr>
  <tr>
    <td> SP_ErhV_Unternehmen </td>
    <td> Chaque entreprise doit désigner au moins un SP_ErhV_Unternehmen. Pendant la phase d'initialisation, il lit les nouveautés concernant le relevé et les met en œuvre si nécessaire. Pendant le relevé, il veille à ce que ses sites hospitaliers respectent les délais de livraison. Il télécharge les données, vérifie la qualité des données à l'aide du système de contrôle automatique et les commente si nécessaire. A la fin du processus de collecte, il libère les données au niveau de l'entreprise hospitalière (clôturer) afin qu'elles puissent être transmises dans le processus (libération du canton). </td>
    <td> Il peut lire, télécharger, commenter, exporter à des fins de plausibilité et clôturer toutes les données de son entreprise hospitalière et de ses sites. </td>
    <td> Il veille à ce que les données de son entreprise hospitalière soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau de l'entreprise hospitalière. </td>
  </tr>
  <tr>
    <td> SP_ErhV_Standort</td>
    <td> Un site peut désigner un SP_ErhV_Standort. Il télécharge les données de son site hospitalier, vérifie la qualité des données au moyen du système de contrôle automatique et les commente si nécessaire. A la fin du processus de collecte, il libère les données au niveau du site hospitalier afin qu'elles puissent être transmises dans le processus (libération de l'entreprise hospitalière). Ce rôle est spécialement utile lorsqu'un utilisateur ne doit pas accéder à l'ensemble des sites de l'entreprise.</td>
    <td> Il peut lire toutes les données de son site hospitalier, les télécharger, les commenter, les exporter à des fins de plausibilité et les clôturer. </td>
    <td>Il veille à ce que les données de son site hospitalier soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau du site hospitalier. De plus, il informe immédiatement le KT_Superuser si les utilisateurs de son site hospitalier changent (p.ex. un collaborateur démissionne, change de fonction et n'a plus besoin de son accès à la plateforme SpiGes,...). </td>
  </tr>
  <tr>
    <td> SP_User_Unternehmen </td>
    <td> Il exécute les tâches déléguées par le SP_ErhV_Unternehmen. </td>
    <td> Il peut lire, télécharger, commenter toutes les données de son entreprise hospitalière et de ses sites. </td>
    <td> Il soutient le SP_ErhV_Unternehmen dans ses tâches. </td>
  </tr>
  <tr>
    <td> SP_User_Standort </td>
    <td> Il exécute les tâches déléguées par le SP_ErhV_Standort. </td>
    <td> Il peut lire, télécharger, commenter toutes les données de son site hospitalier. </td>
    <td> Il soutient le SP_ErhV_Standort dans ses tâches. </td>
  </tr>
  <tr>
    <td> SP_Read_Unternehmen </td>
    <td> En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. </td>
    <td> Il peut lire les données de son entreprise hospitalière. </td>
    <td> Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. </td>
  </tr>
  <tr>
    <td> SP_Read_Standort </td>
    <td> En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. </td>
    <td> Il peut lire les données de son site hospitalier. </td>
    <td> Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. </td>
  </tr>
</table>