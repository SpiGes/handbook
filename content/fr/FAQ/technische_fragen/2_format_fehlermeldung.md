---
title: Contrôles de format et messages d'erreur
slug: format_fehlermeldung
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="format_fehlermeldung">}}

{{<numberedList>}}
{{<listItem>}}
Termes généraux utilisés dans les messages d'erreur
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<markdown>}}

- Element = partie de l'enquête (par ex. Unternehmen, Standort, Fall, etc.)
- Attribut = variable (par ex. fall_id, burnr, etc.)
{{</markdown>}}
{{<insertImage image="tf1.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quelles erreurs provoquent le message d'erreur « erreur de serveur interne 500 » ?
{{<collapsibleBlock groupId="format_fehlermeldung">}}
L'erreur de serveur interne 500 peut avoir différentes causes, que vous trouverez ici :
{{<markdown>}}
1. fichier vide
2. fichier trop grand
3. en-tête incorrect
4. non codé en UTF 8
{{</markdown>}}
{{<lineBreak>}}
{{<markdown>}}
En-tête :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Entreprise 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns="http://www.bfs.admin.ch/xmlns/gvs/spiges-data/1.3" 
    ent_id="xxxxxxx" 
    version="1.3"
>
```

Pour tester si votre fichier est encodé en utf 8, vous pouvez l'ouvrir avec notepad ou text editor. L'encodage est affiché en bas à droite.
{{<insertImage image="tf2.png" class="edge max-w-90">}}
Si vous souhaitez maintenant enregistrer le fichier texte avec « Enregistrer sous », vous pouvez également modifier le codage. Sélectionnez maintenant utf-8 sous Codage et enregistrez le fichier.
{{<insertImage image="tf3.png" class="edge max-w-90">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Que signifie le message d'erreur suivant ?
{{<insertImage image="tf4.png" class="edge max-w-90">}}
{{<collapsibleBlock groupId="format_fehlermeldung">}}
Par "not declared", on entend que la variable n'est pas définie (p. ex. majuscules/minuscules incorrectes pour «kanton_zusatzdaten» ; «missbildung» n'est pas une variable présente dans la description de la variable, etc.).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Messages d'erreur indiquant que le format ou l'expression est incorrect :
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Messages d'erreur lorsque les parties du relevé (elements) sont mélangées en ce qui concerne la structure ou l'ordre :
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf6.png" class="edge max-w-90">}}
Par exemple, l'élément Opérateur est ici placé sous le cas au même titre que Traitement.
{{<insertImage image="tf7.png" class="edge max-w-90">}}
L'élément Opérateur est un enfant du traitement et devrait être structuré de la sorte :
{{<insertImage image="tf8.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Erreur de format behandlung_beginn:
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf9.png" class="edge max-w-90">}}
La variable est définie comme suit dans XSD :
{{<insertImage image="tf10.png" class="edge max-w-90">}}
Dans behandlung_beginn, l'heure peut être totalement absente, c'est-à-dire que seule la date est indiquée (p. ex. 20230110), ou l'heure (quatre chiffres) peut également être indiquée (p. ex. 202301100000). Dans votre cas, l'heure est indiquée avec trois chiffres, ce qui n'est pas accepté. Remarque : l'heure 0000 correspond à minuit et ne doit en aucun cas être indiquée si aucune heure ne doit être signalée.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Erreur de format rech_menge:
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf11.png" class="edge max-w-90">}}
La variable est définie comme suit dans XSD :
{{<insertImage image="tf12.png" class="edge max-w-90">}}
Pour rech_menge, 12 chiffres au total sont possibles, dont 5 chiffres maximum après la virgule.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}