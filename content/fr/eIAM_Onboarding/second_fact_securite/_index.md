---
title: Second facteur de sécurité
slug: second_fact
description: "Vous trouverez dans ce chapitre toutes les possibilités que vous avez comme second facteur de sécurité."
keywords: []
weight: 20
type: docs
---

Connectez vous à votre {{<link url="https://www.myaccount.eiam.admin.ch/" newTab="true">}}compte eIAM{{</link>}} avec votre CH-LOGIN, puis rendez-vous dans l'onglet "Connexion et sécurité". En bas de cet onglet, vous trouverez la section "Gestion de l'authentification à deux facteurs".

{{<alert color="info">}}
{{<markdown>}}
Pour l'utilisation de SpiGes, il est nécessaire de configurer un second facteur considéré comme fort.

- Si vous avez un second facteur non vérifié sur votre CH-LOGIN, vous pouvez le supprimer.
- Si vous avez déjà un second facteur vérifié, il doit faire parti des seconds facteurs suivants, sinon, il faut le supprimer:
    - Le Passkey FIDO
    - Le MobileID
    - Vasco Digipass
{{</markdown>}}
{{</alert>}}

eIAM propose plusieurs seconds facteurs de sécurité mais seuls deux d'entre eux sont considérés comme forts (contrairement à la statistique des hôpitaux (KS), vous avez besoin d'un second facteur de sécurité fort pour l'utilisation de SpiGes):

1. Le Passkey FIDO
    - Windows Hello
    - Clé de sécurité physique (FIDO Token)
2. Le MobileID

{{<alert color="warning">}}
{{<markdown>}}
Il ne faut **pas** vérifier un autre second facteur que ceux proposés ci-dessus. Avec un autre second facteur vérifié, l'application SpiGes ne sera pas accessible.  
{{</markdown>}}
{{</alert>}}

Idéalement, privilégiez l'utilisation de Windows Hello sur l'ordinateur professionnel.
Si cela est impossible, utilisez soit le MobileID, soit une clé de sécurité physique.

**Tout accès à la plateforme SpiGes doit se faire depuis un ordinateur professionnel.**

Les utilisateurs des cantons **ayant déjà un Vasco Digipass vérifié** (pour SOMED/Spitex) peuvent, pour l'instant, l'utiliser comme second facteur pour SpiGes.

Les personnes qui **n'ont pas de Vasco Digipass** doivent utiliser les moyens que nous présentons (Passkey FIDO ou MobileID).
