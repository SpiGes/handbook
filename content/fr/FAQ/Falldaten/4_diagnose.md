---
title: Diagnostics 
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="diagnose">}}

{{<numberedList>}}
{{<listItem>}}
Variable POA : Pourriez-vous nous indiquer à quelle fin est utilisée la variable «diagnose_poa» ?  
{{<collapsibleBlock groupId="diagnose">}}
L'indication «POA» peut être utilisée, entre autres, pour améliorer la qualité et la sécurité des patients. Voir par exemple la communication du canton de Zurich à ce sujet: {{<link url="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf" newTab="true">}}Present on admission - Informationen zur Erfassung (zh.ch){{</link>}}.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variable «diagnose_zusatz» : quelles indications doivent être données ici pour les codes avec étoile et les codes avec point d'exclamation ?
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}

Pour les codes étoile, le code dague associé est indiqué ici. Pour les codes avec points d'exclamation, le code est à préciser. Les codes étoile ne sont pas marqués comme tels, l'association se fait suivant CIM-10-GM.

**Exemple 4** dans le manuel du codage (page 38) :

- DP E10.73† Diabète sucré, type 1, avec complications multiples, désigné comme décompensé
- DS I79.2\* Angiopathie périphérique au cours de maladies classées ailleurs
- DS H36.0\* Rétinopathie diabétique
- DS N08.3\* Glomérulopathie au cours du diabète sucré

…est saisi dans **SpiGes** comme suit :

|diagnose_kode|diagnose_id|diagnose_zusatz
|---------|---------|---------|
|E10.73|1| |
|I79.2|2|E10.73|
|H36.0|3|E10.73|
|N08.3|4|E10.73|

**Exemple 4** dans le manuel du codage (page 40) :

- DP S37.03 Rupture totale du parenchyme rénal
- L 2
- DS V99! Accident de transport
- DS S36.03 Déchirure de la rate, avec atteinte du parenchyme
- DS S36.49 Autres parties et parties multiples de l'intestin grêle
- DS S31.83! Plaie ouverte (toute partie de l'abdomen, de la région lombosacrée et du bassin) associée à une lésion intraabdominale

…est saisi dans **SpiGes** comme suit :

|diagnose_kode|diagnose_id|diagnose_zusatz
|---------|---------|---------|
|S37.03|1| |
|V99|2|S37.03|
|S36.03|3||
|S36.49|4||
|S31.83|5|S36.03|
|S31.83|6|S36.49|
|S31.83|7|S37.03|

{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}
{{</numberedList>}}
{{</faqBlock>}}
