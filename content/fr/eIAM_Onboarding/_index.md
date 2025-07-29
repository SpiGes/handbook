---
title: Onboarding eIAM
slug: onboarding
description: 'Vous trouverez dans ce chapitre toutes les informations dont vous avez besoin pour vous connecter à la plateforme SpiGes.'
keywords: []
weight: 20
type: docs
---

<!--Dans ce chapitre, vous trouverez toutes les marches à suivre afin de vous créer un profil vérifié qui vous permettera de vous connecter à la plateforme SpiGes.

Pour créer un CH-login avec un second facteur fort et une identité vérifiée pour l'utilisation de la plateforme SpiGes, les étapes suivantes sont nécessaires :

1. Créer un CH-login (avec l'adresse e-mail professionnelle)
2. Ajouter un second facteur de sécurité fort au CH-Login
3. Vérifier l'identité sur le second facteur fort
4. Relier (onboarding) le CH-login établi avec SpiGes-->

Suite au passage du CH-Login à AGOV, il y a deux cas de figure:

1. Vous vous êtes déjà connecté à la plateforme SpiGes avant le 07.09.2025 (avec un CH-Login et une identité vérifiée).  
A partir du 07.09.2025, lors de la connexion à la plateforme SpiGes, vous aurez la possibilité de migrer votre compte CH-Login vers un compte AGOV (recommandé) ou de garder votre compte CH-Login jusqu’à la fin de vie du CH-Login.

2. Vous ne vous êtes pas encore connecté à la plateforme SpiGes avant le 07.09.2025.  
Pour vous connecter à plateforme SpiGes, après avoir reçu l’email d’Onboarding, vous devez impérativement enregistrer et faire vérifier un identifiant AGOV (les identités vérifiées ne seront disponibles que via AGOV).


Si vous disposez déjà d'un compte AGOV avec votre adresse mail professionnelle, vous n'avez pas besoin d'en créer un nouveau et vous devez l'utiliser pour vous connecter à la plateforme SpiGes. Si vous avez uniquement un compte AGOV avec votre adresse mail privée, il faut créer un nouveau AGOV avec votre adresse professionnelle.

<!--Nous vous conseillons de commencer par lire ces pages d'instruction avant d'essayer de configurer votre nouvel accès sécurisé.-->

Pour plus d’information et si vous avez besoin d’aide pour la thématique CH-Login / AGOV, veuillez-svp consulter la page suivante : {{<link url="https://help.eiam.swiss/?l=fr" newTab="true">}}eIAM Aide{{</link>}}.

## Fonctionnement d'eIAM

eIAM est un système central d'accès et d'autorisation de l'administration fédérale pour les applications web. Pour simplifier, eIAM est l'infrastructure d'accès centralisée de la Confédération. Son but est d'éviter la mise en place d'une procédure spécifique à chaque application. Cette centralisation permet de réaliser des économies et d'utiliser les mêmes données d'accès pour toutes les applications.
Chaque utilisateur qui se connecte à l'application SpiGes est automatiquement redirigé sur le portail eIAM pour la procédure d'authentification. Le système demandera alors à l'utilisateur de valider sa connexion sur son téléphone mobile afin vérifier que c'est effectivement la bonne personne qui essaie de se connecter.  

{{<alert color="warning">}}
L'identité de l'utilisateur devant être vérifiée, les comptes sur l'application sont personnels. Un même compte ne pourra pas être utilisé par plusieurs personnes.
{{</alert>}}

## Structure des Units eIAM

Les différents utilisateurs de la plateforme SpiGes sont organisés comme suit:

- Canton
    - Entreprises
        - Sites hospitaliers

Un canton contient une ou plusieurs entreprises qui elles-même contiennent un ou plusieurs sites hospitaliers.

{{<alert color="warning">}}
Dans certains cas, le canton géographique d'un site et celui administratif de l'entreprise ne sont pas les mêmes.
{{</alert>}}

Exemple:

{{<layouts/grid>}}
{{<layouts/row>}}

{{<layouts/column width="50">}}
{{<markdown>}}

1. Dans cette colonne, vous voyez le EntID au niveau de l'entreprise et vous voyez le numéro Bur au niveau des sites hospitaliers.
2. Dans cette colonne, vous voyez le canton "administratif" de l'entreprise / du site hospitalier.
3. Dans cette colonne, vous voyez le canton géographique de l'entreprise / du site hospitalier.

Vous voyez ici que le canton administratif et le canton géographique du site 1 ne sont pas les mêmes.
{{</markdown>}}
{{</layouts/column>}}

{{<layouts/column>}}
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
{{</layouts/column>}}

{{</layouts/row>}}
{{</layouts/grid>}}
