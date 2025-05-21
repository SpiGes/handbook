---
title: Passerelle d'ajustement  
slug: abstimmungsbrucke
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="abstimmungsbrucke">}}

{{<numberedList>}}
{{<listItem>}}
Je connais la comptabilité des ajustements dans SDEP. Est-ce qu'elle existera aussi dans SpiGes ou seulement selon ITAR_K® ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
SpiGes utilise la passerelle d'ajustement de la CDS / de REKOLE®.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Où les justifications des délimitations sont-elles intégrées dans l'OFS ? Ou comment dois-je comprendre cela ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Les justifications sont saisies en tant que contrôles dans SpiGes. Cela signifie que si un montant de la comptabilité financière et de la comptabilité analytique ne concorde pas, la différence doit être justifiée. Ces justifications sont ensuite utilisées, par exemple pour le rapport national de vérification et pour ITAR_K®, ou encore pour la passerelle d'ajustement de la CDS.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Où sont pris en compte les coûts des séjours à cheval dans la passerelle d'ajustement ?  
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Dans la comptabilité par unité finale d'imputation de SpiGes, il est possible de calculer les coûts des patients sortis au cours de l'année (cas A). Ces coûts seront donc calculés par l'OFS. Ceux-ci peuvent déjà être entrés à l'hôpital l'année précédente et avoir généré des coûts. Dans la comptabilité financière, les charges sont saisies par année (calcul périodique). La différence qui en résulte est corrigée dans la passerelle d'ajustement de SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Pour 2024 (données 2023), SwissDRG a demandé le détail des coûts d'utilisation des immobilisations des cas selon OCP. Dans SpiGes, les variables "_ank" permettent d'envoyer le détail des coûts d'utilisation des immobilisations des cas selon REKOLE®.
Ce détail étant maintenant nécessaire à SwissDRG, ne faudrait-il pas prévoir dans SpiGes les variables "_ank" pour les résultats OCP également ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}

- Il ne s'agit que d'un relevé test de SwissDRG SA. Si le passage définitif à OCP devait avoir lieu, les coûts d'utilisation des immobilisations par centre de charges dans SpiGes seraient livrés selon OCP au lieu de REKOLE® et les coûts d'utilisation des immobilisations REKOLE® seraient relevés sous forme de somme.
- En résumé, les coûts d'utilisation des immobilisations doivent être représentés selon les méthodes suivantes :

|Variables|Méthodologie CUI|
|---------|------------|
|Variables «ktr_10_ank» jusqu'à «ktr_77_ank»|REKOLE®|
|Variables «ktr_44_vkl»|OCP|
|KS FIBU: SA6, en particulier var. A.15.06 jusqu'à A.15.06.05|OCP|
|KS Passerelle d'ajustement: SA81-84|OCP|
|KS Passerelle d'ajustement: SA85, var. A.17.22.25 jusqu'à A.17.24.28|REKOLE®|

{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le compte 441 ne rentre dans aucun calcul des coûts d'utilisation des immobilisations, ni selon OCP, ni selon REKOLE®. Pouvez-vous confirmer cela ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
Les coûts d'utilisation des immobilisations (selon REKOLE® et OCP) correspondent aux charges par nature suivante :

- 442 Amortissements
- 444 Autres loyers (y compris leasing opérationnel)
- 448 Charges des intérêts calculés sur les actifs immobilisés
De plus amples informations sont disponibles dans le manuel REKOLE® (chapitre 6.5.3).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment dois-je importer les données KS dans SpiGes ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
Pour importer les données KS, il faut cocher la case "Reprise des données de la plateforme KS" dans le masque "Nouvelle livraison de données" au **niveau de l'entreprise**. Cela peut se faire en même temps que l'import de fichiers xml ou de manière indépendante.
{{</markdown>}}
{{<insertImage image="KS_f.png" class="edge max-w-90">}}
{{<lineBreak>}}
{{<markdown>}}
Cliquez sur "Démarrer", un message vert indique que la demande a bien été faite. Il faut toutefois attendre quelques secondes afin de voir la barre de progression. Cette dernière permet de voir lorsque l'import est terminé.  

Une fois terminé, les trois parties KS se voient dans le récapitulatif avec la date d'import.
{{</markdown>}}  
{{<insertImage image="KS_Teil_f.png" class="edge max-w-90">}}
{{<lineBreak>}}
{{<markdown>}}
Quelques précisions:
- Les données KS ne peuvent être importées que si le questionnaire a été validé par les cantons dans l'application KS.
- Uniquement un utilisateur Entreprise peut faire  l'import KS. Les autres utilisateurs ne voient pas la case à cocher.  
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
