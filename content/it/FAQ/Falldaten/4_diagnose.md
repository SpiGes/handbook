---
title: Diagnosi
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="diagnose">}}

{{<numberedList>}}
{{<listItem>}}
Variabile POA: a quale scopo viene utilizzata la variabile diagnose_poa?  
{{<collapsibleBlock groupId="diagnose">}}
L'indicazione «POA» (present on admission) può essere utilizzata, tra l'altro, per migliorare la qualità e per la sicurezza dei pazienti. Si veda, ad esempio, la comunicazione del Cantone di Zurigo in merito (in tedesco): {{<link url="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf" newTab="true">}}Present on admission - Informationen zur Erfassung (zh.ch){{</link>}}.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variabile «diagnose_zusatz»: quali informazioni devono essere inserite qui per i codici con asterisco e i codici con punto esclamativo?
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}

Per i codici con asterisco, qui va inserito il corrispondente codice con croce. Per i codici con punto esclamativo, il codice da specificare. I codici con asterisco non sono contrassegnati come tali; sono assegnati secondo l'ICD-10-GM.

**Esempio 4** nel Manuale di codifica (pag. 38)

- DP E10.73† Diabete mellito, tipo 1, con complicanze multipl, definito come scompensato
- DS I79.2\* Angiopatia periferica in malattie classificate altrove
- DS H36.0\* Retinopatia diabetica
- DS N08.3\* Disturbi glomerulari in diabete mellito

…va indicato in **SpiGes** come segue :

|diagnose_kode|diagnose_id|diagnose_zusatz
|---------|---------|---------|
|E10.73|1| |
|I79.2|2|E10.73|
|H36.0|3|E10.73|
|N08.3|4|E10.73|

**Esempio 4** nel Manuale di codifica (pag. 40)

- DP S37.03 Rottura completa del parenchima renale
- L 2
- DS V99! Incidente da trasporto non specificato
- DS S36.03 Lacerazione della milza con interessamento del parenchima
- DS S36.49 Traumatismo di altre e multiple parti dell'intestino tenue
- DS S31.83! Ferita aperta (qualsiasi parte dell'addome, dei lombi e della pelvi) in collegamento con traumatismo intraaddominale

…va indicato in **SpiGes** come segue :

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
