---
title: Factures 
slug: rechnungen
description: " "
weight: 70
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="rechnungen">}}
{{<numberedList>}}

{{<listItem>}}
Une ligne est-elle exportée pour chaque facture émise - et chaque rémunération supplémentaire ?
{{<collapsibleBlock groupId="rechnungen">}}
Il faut indiquer la même granularité que les lignes sur les factures envoyées. Si, par exemple, un forfait par cas ainsi qu'une rémunération supplémentaire ont été facturés pour un cas couvert par l'assurance de base et facturés à l'assurance de base et au canton, quatre lignes doivent être fournies (1.forfait au canton, 2.rémunération supplémentaire au canton, 3.forfait à l'assureur, 4.rémunération supplémentaire à l'assureur).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment remplir les champs correspondants pour les factures qui ne sont pas facturées via SwissDRG, TARPSY ou ST Reha ?
{{<collapsibleBlock groupId="rechnungen">}}
{{<markdown>}}
-	En principe, selon la norme du Forum Datenaustausch, mais seulement pour les traitements hospitaliers. 
-	Le type de tarif, le montant et la quantité devraient être clairs. 
-	Les champs qui n'ont pas de sens pour d'autres tarifs peuvent être laissés vides. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment les données relatives aux cas ou aux factures doivent-elles être fournies si ces dernières sont annulées au moment de l'exportation ?
{{<collapsibleBlock groupId="rechnungen">}}
Les données relatives aux cas doivent être fournies. Pour les factures, il faut fournir le dernier état, c'est-à-dire rien dans le cas de factures annulées.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment faut-il fournir les données relatives aux cas A qui n'ont pas encore été facturés au moment de l'exportation ?
{{<collapsibleBlock groupId="rechnungen">}}
Les données relatives aux cas doivent être fournies. Pour les factures, c'est le dernier état qui doit être fourni, donc rien.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
<!--Variable «rech_unfallnr» : pour les indications de ce numéro, le champ est limité à 17 caractères. Or, dans des systèmes plus anciens, des numéros de sinistre à 20 chiffres circulent également. Comment devons-nous procéder ?-->
Variable «rech_unfallnr» : pour les indications de ce numéro, le champ est limité à 17 caractères. Or des numéros de sinistre à 32 chiffres circulent également. Comment devons-nous procéder ?
{{<collapsibleBlock groupId="rechnungen">}}
<!--En accord avec le Service central des tarifs médicaux LAA (SCTM), les trois premiers caractères peuvent être supprimés. Par exemple, le numéro de sinistre suivant 01.05.01.23.009999.3 serait envoyé comme numéro 05.01.23.009999.3, c'est-à-dire sans le préfixe '01.'.-->
Nous allons augmenter le nombre de caractères à 50. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}