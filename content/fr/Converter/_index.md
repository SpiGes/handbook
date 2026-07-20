---
title: Converter XML
slug: converter
description: "Sur cette page, vous trouverez un outil permettant de convertir un fichier excel en xml pour les KTR_TYP niveau entreprise et site."
weight: 80
type: docs
keywords: []
---

[Ouvrir le converter](downloads/SpiGes_KTR_Konverter_v0.2.html)

Il suffit d'y glisser un fichier excel rempli avec la bonne structure, cf. [exemple](downloads/Beispiel_KTR_Konverter.xlsx).  

Une fois glissé, vous pouvez:
 - télécharger le fichier xml,
 - montrer le code xml et le copier.

{{<markdown>}}
**Conditions préalables**
- Fichier SpiGes_KTR_Konverter.html (s'ouvre dans le navigateur par double-clic; aucune installation, aucun droit d'administrateur).
- Navigateur récent : Microsoft Edge, Google Chrome ou Firefox.
- Fichier Excel au format .xlsx contenant les données relatives aux centres de coûts (exemple).
- Aucune connexion Internet n'est requise. Les données ne quittent pas l'ordinateur, l'ensemble du traitement s'effectue localement dans le navigateur.

**Règles de champ (fichier Excel)**
|Champ|Règle|
|---------|---------|
|ent_id|Champ obligatoire. Nombre entier, de 1 à 9 chiffres. Identique dans toutes les lignes du fichier (un fichier = une entreprise).|
|burnr|Facultatif. Nombre comportant au maximum 9 chiffres. Vide = centre de coûts au niveau de l'entreprise. Rempli = centre de coûts au niveau du site associé à ce numéro BUR.|
|ktr_typ|Champ obligatoire. Nombre entier compris entre 0 et 999. Code conforme à la liste officielle des codes de l'OFS.|
|ktr_beschr|Texte, 256 caractères maximum. La combinaison ktr_typ + ktr_beschr doit être unique par niveau, resp. par site.|
|ktr_... (montants)|Chiffre en francs, avec au maximum deux décimales. Les valeurs négatives sont autorisées. Il est possible de laisser ce champ vide.|
|ktr_methodik|Nombre entier compris entre 0 et 9. Code conforme à la liste officielle des codes de l'OFS.|
|ktr_le_ambulant|Nombre, plus de deux décimales sont autorisées.|

Un zéro et une cellule vide ne sont pas équivalents :
|Entrée dans la ligne|Résultat dans le XML|Signification|
|---------|---------|---------|
|vide|Le champ n'apparaît pas dans le XML|Aucune information sur ce champ|
|0|Le champ apparaît avec une valeur|La valeur est nulle |

Règle de saisie : saisir 0 lorsque le montant est nul. Laisser la cellule vide si aucune information n'est fournie pour ce champ.
{{</markdown>}}