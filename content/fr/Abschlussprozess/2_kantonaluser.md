---
title: Processus de clôture pour utilisateur cantonal
slug: kantonaluser
description: "Sur cette page, nous vous expliquons comment, en tant qu'utilisateur cantonal, vous pouvez effectuer la procédure de clôture sur la plateforme SpiGes."
weight: 70
type: docs
keywords: []
---

## Répondre aux questions de benchmarking, accepter le protocole de contrôle et clôturer l'entreprise

Deux rôles métier interviennent dans la clôture cantonale. L'ordre dans lequel ils effectuent leurs clôtures n'a pas d'importance : les deux types d'utilisateurs peuvent travailler l'un après l'autre ou en parallèle.

### Rôles et tâches

| Rôle métier | Tâches |
|---|---|
| `KT_Admin_Abschlussuser` | Répondre aux questions de benchmarking pour chaque hôpital et les enregistrer, accepter le protocole de contrôle et clôturer l’entreprise. |
| `KT_ErhV(stat_Abschlussuser)` | Accepter le protocole de contrôle et clôturer l’entreprise. |

### Ouvrir les questions de benchmarking

L'utilisateur administratif cantonal disposant du rôle métier `KT_Admin_Abschlussuser` ouvre, dans la vue de clôture, le menu d'actions de l'hôpital souhaité. En cliquant sur **Questions de benchmarking**, les questions relatives à cet hôpital s'affichent. Cette étape doit être effectuée séparément pour tous les hôpitaux de l'entreprise.

{{<insertImage image="kanton-01.png" class="edge max-w-90">}}

### Répondre aux questions de benchmarking et les enregistrer

Pour chaque hôpital, il convient de répondre aux questions relatives aux soins somatiques aigus, à la psychiatrie et à la réadaptation. Il est possible, si on le souhaite, d'ajouter un commentaire à chaque réponse.

{{<insertImage image="kanton-02.png" class="edge max-w-90">}}

Une fois que vous avez répondu aux questions concernant les soins somatiques aigus, la psychiatrie et la réadaptation, cliquez sur **Enregistrer**.

{{<insertImage image="kanton-03.png" class="edge max-w-90">}}

Le relevé ne pourra être clôturé que lorsque les questions de benchmarking auront été entièrement répondues et enregistrées pour tous les hôpitaux concernés.

### Accepter le protocole de contrôle

Une fois les questions de benchmarking remplies, l'utilisateur administratif cantonal peut accepter le protocole de contrôle. L'utilisateur statistique cantonal doit également accepter le protocole de contrôle. Confirmez la boîte de dialogue en cliquant sur **Oui**. À partir de ce moment, tout commentaire existant concernant le protocole de contrôle ne pourra plus être modifié.

{{<insertImage image="kanton-04.png" class="edge max-w-90">}}

### Clôturer l'entreprise

Une fois le protocole de contrôle accepté par les deux parties, l'utilisateur cantonal chargé de l'administration et celui chargé des statistiques cliquent tous deux sur **Clôturer**. Confirmez la boîte de dialogue de clôture en cliquant sur **Oui**.

{{<insertImage image="kanton-05.png" class="edge max-w-90">}}

### Clôture au niveau cantonal terminée

Ce n'est que lorsque les deux rôles ont clôturé le dossier que le statut passe à **En attente**. Le texte d'explication associé à ce statut est : « L'OFS n'a pas encore clôturé le dossier. » La partie cantonale est ainsi terminée. La clôture complète par l'OFS est encore en attente.
