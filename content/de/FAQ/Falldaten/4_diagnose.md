---
title: Diagnose 
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="diagnose">}}

{{<numberedList>}}
{{<listItem>}}
POA-Variable: Könnten Sie uns bitte sagen, zu welchem Zweck die Variable diagnose_poa verwendet wird?
{{<collapsibleBlock groupId="diagnose">}}
Die Angabe «POA» kann unter anderem zur Verbesserung der Qualität und der Patientensicherheit verwendet werden. Siehe z. B. die Mitteilung des Kantons Zürich zu diesem Thema: {{<link url="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf" newTab="true">}}Present on admission - Informationen zur Erfassung (zh.ch){{</link>}}.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
 Variable «diagnose_zusatz»: Welche Angaben müssen hier bei Stern-Kodes und Kodes mit Ausrufezeichen gemacht werden?
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}

Bei Stern-Kodes wird hier der zugehörige Kreuz-Kode angegeben. Bei Kodes mit Ausrufezeichen, der zu präzisierende Kode. Stern-Kodes werden nicht als solche markiert, die Vergabe erfolgt gemäss ICD-10-GM.

**Beispiel 4** im Kodierhandbuch (Seite 38)

- HD E10.73† Diabetes mellitus, Typ 1, mit multiplen Komplikationen, als entgleist bezeichnet
- ND I79.2\* Periphere Angiopathie bei anderenorts klassifizierten Krankheiten
- ND H36.0\* Retinopathia diabetica
- ND N08.3\* Glomeruläre Krankheiten bei Diabetes mellitus

…wird wie folgt in **SpiGes** erfasst:  

{{<markdown>}}
|diagnose_kode|diagnose_id|diagnose_zusatz
|---------|---------|---------|
|E10.73|1| |
|I79.2|2|E10.73|
|H36.0|3|E10.73|
|N08.3|4|E10.73|
{{</markdown>}}

{{<markdown>}}

**Beispiel 4** im Koderhandbuch (Seite 40)

- HD S37.03 Komplette Ruptur des Nierenparenchyms
- L 2
- ND V99! Transportmittelunfall
- ND S36.03 Rissverletzung der Milz mit Beteiligung des Parenchyms
- ND S36.49 Verletzung sonstiger und mehrerer Teile des Dünndarmes
- ND S31.83! Offene Wunde (jeder Teil des Abdomens, der Lumbosakralgegend und des Beckens) mit Verbindung zu einer intraabdominalen Verletzung

…wird wie folgt in **SpiGes** erfasst:
{{</markdown>}}

{{<markdown>}}
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
