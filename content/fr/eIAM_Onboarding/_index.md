---
title: Onboarding eIAM
slug: onboarding
description: 'Vous trouverez sur cette page toutes les informations dont vous avez besoin pour vous connecter à la plateforme SpiGes.'
keywords: []
weight: 300
type: docs
---

{{<alert color="info">}}
La documentation est en cours de construction.
{{</alert>}}

Dans ce chapitre, vous trouverez toutes les marches à suivre afin de vous créer un profil vérifié qui vous permettera de vous connecter à la plateforme SpiGes. 

Pour créer un CH-login avec un second facteur fort et une identité vérifiée pour l'utilisation de la plateforme SpiGes, les étapes suivantes sont nécessaires :

1. Créer un login CH
2. Activer le Mobile ID
3. Ajouter le Mobile ID comme deuxième facteur au CH-Login
4. Vérifier l'identité sur le second facteur (Mobile ID ou clé FIDO2)
5. Relier (onboarding) le login CH établi avec SpiGes

Ces étapes sont expliquées dans les sections ci-dessous. Si vous disposez déjà d'un CH-Login ou d'un Mobile ID, vous n'avez pas besoin d'en créer un nouveau et vous pouvez passer l'étape correspondante. Vérifiez toutefois que votre CH-Login ou votre Mobile ID fonctionnent.

Nous vous conseillons de commencer par lire ces instructions avant d’essayer de configurer votre nouvel accès sécurisé.

## Fonctionnement d'eIAM

eIAM est un système central d'accès et d'autorisation de l'administration fédérale pour les applications web. Pour simplifier, eIAM est l’infrastructure d’accès centralisée de la Confédération. Son but est d’éviter la mise en place d’une procédure spécifique à chaque application. Cette centralisation permet de réaliser des économies et d’utiliser les mêmes données d’accès pour toutes les applications.    
Chaque utilisateur qui se connecte à l’application SpiGes est automatiquement redirigé sur le portail eIAM pour la procédure d’authentification. Le système demandera alors à l’utilisateur de valider sa connexion sur son téléphone mobile afin vérifier que c’est effectivement la bonne personne qui essaie de se connecter.  

{{<alert color="warning">}}
L’identité de l’utilisateur devant être vérifiée, les comptes sur l’application sont personnels. Un même compte ne pourra pas être utilisé par plusieurs personnes.
{{</alert>}}