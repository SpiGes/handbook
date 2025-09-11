---
title: Deuxième facteur de sécurité 
slug: Zweiter_sicherheitsfaktor 
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="Zweiter_sicherheitsfaktor">}}

{{<numberedList>}}
{{<listItem>}}
Quels sont les deuxièmes facteurs de sécurité que je peux utiliser ?
{{<collapsibleBlock groupId="Zweiter_sicherheitsfaktor">}}
{{<markdown>}}

- Un deuxième facteur fort est nécessaire pour accéder à la plateforme SpiGes. Les deuxièmes facteurs suivants sont considérés comme forts : le Mobile ID et la clé FIDO (clé physique ou Windows Hello).
- mTAN ou App authenticator (souvent déjà installés pour le relevé KS) ne sont pas des deuxièmes facteurs assez forts pour SpiGes.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
L'identification vidéo est-elle obligatoire pour l'utilisation de la plateforme de collecte de données SpiGes ?
{{<collapsibleBlock groupId="Zweiter_sicherheitsfaktor">}}
{{<markdown>}}

- Oui. Sans l'identification vidéo, vous n'atteignez pas le niveau QoA 50 (Quality of Authentication) requis pour accéder à la plateforme d'enquête SpiGes. Pour atteindre ce niveau de qualité d'authentification, l'utilisateur doit disposer d'une identité électronique vérifiée et pas seulement d'une identité auto-enregistrée.
- Il est important de faire l'identification vidéo sur le deuxième facteur fort (cf. question précédente). Une identification vidéo faite sur mTAN ou App authenticator ne permet pas d'accéder à SpiGes.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qu'est-ce qu'une identité vérifiée et que faut-il faire pour l'obtenir ?
{{<collapsibleBlock groupId="Zweiter_sicherheitsfaktor">}}
Pour qu'une identité électronique puisse être considérée comme vérifiée, il faut qu'une pièce d'identité officielle du titulaire de l'identité électronique, munie d'une photo, ait été vérifiée, enregistrée et que le titulaire de l'identité électronique ait été correctement identifié. Pour ce faire, vous devez passer par cette procédure d'identification vidéo (VIPS) payante (CHF 45.00), au cours de laquelle votre identité est vérifiée par une personne certifiée.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment dois-je faire pour faire vérifier mon compte AGOV ?
{{<collapsibleBlock groupId="Zweiter_sicherheitsfaktor">}}
Des informations sur ce sujet se trouvent {{<link url="https://help.eiam.swiss/?c=ident50&l=fr" newTab="true">}}ici{{</link>}}. 
Pour faire vérifier son compte AGOV, il faut passer par un lien spécifique: {{<link url="https://auth.agov.admin.ch/SAML2/SSO/" newTab="true">}}démarrer la vérification{{</link>}} et suivre les instructions.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
