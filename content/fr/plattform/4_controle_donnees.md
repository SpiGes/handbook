---
title: 2. Contrôle des données
slug: kontrole
description: "Sur cette page, nous vous expliquons comment contrôler les données importées par votre site hospitalier sur la plateforme SpiGes."
keywords: []
weight: 30
type: docs
---

{{<alert title="Vérification à la source" color="info">}}
{{<markdown>}}
Idéalement, les données sont contrôlées directement dans le système de saisie de l'hôpital, en amont du processus de relevé.

Les hôpitaux contrôlent les données « à la source » dans leur propre système et peuvent au préalable intégrer dans leur système les outils de vérification mis à leur disposition par l'OFS à cet effet. Il est également possible de faire contrôler les données en cours d'année, avant la collecte de données proprement dite, sur la plateforme SpiGes. Étant donné que ce contrôle a lieu avant le début ordinaire du relevé (janvier de l'année suivante), le statut du relevé est à l'état de "préparation".

Nous avons prévu les mesures suivantes à cet effet :

- Vérification XSD : nous publions un fichier XSD qui peut être utilisé facilement pour la vérification technique des fichiers XML. Des programmes et des bibliothèques de logiciels (gratuits) peuvent être utilisés à cet effet.
- MedPlaus : L'outil MedPlaus est adapté à l'ensemble des données SpiGes et devrait être disponible dès automne 2024. Il peut également être intégré dans les logiciels hospitaliers sous forme de version DLL.
<!--
- API d'examen : Nous prévoyons une API accessible au public, qui permettra de vérifier la qualité des données fournies. En réponse aux données téléchargées, on obtient une liste des erreurs de format et des erreurs de cas individuels. Des cas individuels peuvent être fournis et les réponses peuvent être traitées automatiquement par des programmes. L'API n'est toutefois pas encore mise en œuvre. Cela sera le cas au plus tôt en 2025.-->
{{</markdown>}}
{{</alert>}}

## Vérification autonome

Lors d'un import, toutes les vérifications sont effectuées automatiquement. Leurs résultats sont enregistrés et présentés. Les compléments sont également apportés automatiquement, de sorte que les données peuvent aussi être contrôlées à ce sujet.

L'établissement traite les résultats du contrôle de manière autonome et corrige les données lorsque cela est possible en téléchargeant les données corrigées.
Si la correction n'est pas possible ou que le contrôle a détecté une erreur à tort, l'établissement saisit une justification dans la section commentaire prévu à cette effet sur la plateforme. La vérification peut aussi générer un avertissement, qui se veut informatif et n'implique pas forcément une justification ou une correction. La vérification autonome est terminée une fois que toutes les erreurs ont été corrigées ou justifiées, ce qui doit être fait d'ici à la fin avril.
<!--
### Contrôle du format

{{<insertImage image="test_format_fr.png" class="edge max-w-90">}}

&nbsp;

1. Dans cette colonne, vous pouvez voir la date et l'heure du dernier import de données.

2. Dans cette colonne, vous voyez si les données concernées ont passé les tests de contrôle du format. En cas d'erreur, vous pouvez cliquer dessus pour afficher les détails de l'erreur afin de la corriger dans le fichier XML et la réimporter. **ATTENTION:** l'import de nouvelles données remplace les données précédemment importées. Le fichier de données corrigé doit contenir les mêmes parties du relevé. Les erreurs de format ne peuvent pas être effectuées et affichées par partie du relevé, mais uniquement par fichier.

3. Une fois le contrôle du format validé, vous voyez dans cette colonnes les erreurs de cas individuels à traiter. Vous pouvez cliquer dans la catégorie souhaitée pour voir les erreurs plus en détails.

4. Vous voyez ici les commentaires qui ont été postés précédemment. Vous pouvez poster des commentaires pour justifier vos erreurs ou pour répondre aux commentaires précédents. Vous pouvez également créer un nouveau thème de discussion en cliquant sur la bulle de dialogue au milieu en haut.

### Contrôle des cas individuels

{{<insertImage image="controle_fr.png" class="edge max-w-90">}}

&nbsp;

1. La section filtre vous permet de trier les sections afin de trouver plus rapidement ce que vous cherchez.

2. Dans cette colonne, vous pouvez voir le statut de chaque section.

3. Vous pouvez ici télécharger les données.

4. Cette flèche permet de développer la règle et d'afficher tous les cas individuels pour lesquels la règle a échoué.

&nbsp;

{{<insertImage image="controle_detail_fr.png" class="edge max-w-90">}}

&nbsp;

1. Les cases carrées vous permettent de selectionner plusieurs erreurs.

2. Dans cette colonne, vous pouvez voir une description de l'erreur, vous pouvez également avoir plus de détails en cliquant sur l'erreur dans la colonne "Fall-Id".

3. Dans cette colonne, vous pouvez voir si l'erreur est encore "ouverte", si elle est déjà résolue ("OK") ou si elle a été définitivement jugée comme "erreur".

4. Vous pouvez ici commenter (en cliquant sur la case "bulle de dialogue") ou télécharger les données (en cliquant sur la flèche vers le bas). Vous agirez sur la globalité des erreurs lorsqu'aucune erreur n'est séléctionnée, et sur les erreurs séléctionnées sinon.

5. Vous pouvez également saisir un commentaire au niveau de l'erreur concernée.
-->
### Résultats des contrôles et communication relative au relevé

{{<insertImage image="01-pruefergebnisse_fr.jpg" class="edge max-w-90">}}

{{<insertImage image="02-erhebungsbezogene-kommunikation_fr.jpg" class="edge max-w-90">}}

1. Dans cette rubrique, vous pouvez voir si les données concernées ont passé avec succès les tests de validation du format. Si une erreur s'est produite, vous pouvez cliquer dessus pour afficher les détails de l'erreur, afin de pouvoir la corriger dans le fichier XML et réimporter les données. 

**ATTENTION :** L'importation de nouvelles données écrase les données importées précédemment. Le fichier de données corrigé doit contenir les mêmes parties d'enquête. Les erreurs de format ne peuvent pas être traitées et affichées par partie d'enquête, mais uniquement par fichier.
2. Une fois la validation du format effectuée, vous verrez dans cette rubrique les erreurs des cas individuels qui doivent être traités. Vous pouvez cliquer sur la catégorie souhaitée pour examiner les erreurs plus en détail.
3. Vous pouvez ici corriger les erreurs relatives aux indicateurs en cliquant sur la catégorie souhaitée.
4. Vous voyez ici les commentaires qui ont été publiés précédemment. Vous pouvez publier des commentaires pour justifier vos erreurs ou pour répondre à des commentaires antérieurs. Vous pouvez également créer un nouveau sujet de discussion en cliquant sur la bulle de dialogue située en haut au centre.

### Vérification des cas particuliers

{{<insertImage image="03-einzelfallpruefung_fr.jpg" class="edge max-w-90">}}

1. Le « Filtre » vous permet de trier les sections afin de trouver plus rapidement ce que vous cherchez.
2. Dans cette rubrique, vous pouvez consulter le statut de chaque section.
3. Vous pouvez télécharger les données ici.
4. Cette flèche permet de développer la règle afin d'afficher tous les cas individuels pour lesquels la règle a échoué.

{{<insertImage image="04-einzelfall-details_fr.jpg" class="edge max-w-90">}}

1. Dans les cases carrées, vous pouvez sélectionner plusieurs règles ou plusieurs cas par règle.
2. Dans cette rubrique, vous pouvez consulter une description de l’erreur. Vous pouvez également obtenir plus de détails en cliquant sur l’erreur dans la rubrique « ID de cas ».
3. Dans cette rubrique, vous pouvez voir si l’erreur est encore en suspens (« ouvert »), si elle a déjà été résolue (« OK ») ou si elle a été définitivement classée comme « erreur » par le canton.
4. Vous pouvez ici ajouter un commentaire (en cliquant sur le champ « bulle de dialogue »). Les commentaires s’appliquent à l’ensemble des erreurs par règle si vous commentez au niveau de la règle. Vous pouvez également saisir un commentaire pour un cas particulier ou pour plusieurs cas particuliers au sein d’une même règle en sélectionnant les cas concernés.
5. Vous pouvez ici télécharger les cas sélectionnés.

### Tri

{{<insertImage image="05-sortierung_fr.jpg" class="edge max-w-90">}}

1. En cliquant sur les en-têtes (ID d'examen, type, description, état et Dernier commentaire), vous pouvez choisir l'ordre de tri.
2. En cliquant plusieurs fois, vous pouvez basculer entre un tri décroissant, croissant ou aucun tri dans cette colonne.
3. Le chiffre situé à côté de l'en-tête de ligne indique l'ordre de tri.
