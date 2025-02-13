---
title: Rechnungen 
slug: rechnungen
description: " "
weight: 70
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="rechnungen">}}

{{<numberedList>}}
{{<listItem>}}
Wird für jede gestellte Rechnung - und jedes Zusatzentgelt - eine Zeile exportiert?
{{<collapsibleBlock groupId="rechnungen">}}
Es ist dieselbe Granularität, wie die Zeilen auf den verschickten Rechnungen anzugeben. Wurde z.B. für einen grundversicherten Fall eine Fallpauschale sowie ein Zusatzentgelt abgerechnet und der Grundversicherung sowie dem Kanton in Rechnung gestellt, so sind vier Zeilen zu liefern (1.Pauschale an Kanton, 2.Zusatzentgelt an Kanton, 3.Pauschale an Versicherer, 4.Zusatzentgelt an Versicherer).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wie werden die entsprechenden Felder ausgefüllt für Rechnungen, die nicht über SwissDRG, TARPSY oder ST Reha abgerechnet werden?
{{<collapsibleBlock groupId="rechnungen">}}
{{<markdown>}}

-	Grundsätzlich analog Forum Datenaustausch, einfach nur für die stationären Behandlungen.
-	Tariftyp, Betrag und Menge sollten klar sein.
-	Felder, die bei anderen Tarifen keinen Sinn machen, können leer gelassen werden.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wie sind Angaben zu den Fällen bzw. Rechnungen zu liefern, wenn letztere zum Exportzeitpunkt storniert sind?
{{<collapsibleBlock groupId="rechnungen">}}
Die Angaben zu den Fällen sind zu liefern. Bei den Rechnungen ist der letzte Stand zu liefern, im Falle von stornierten Rechnungen also nichts.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wie sind Angaben zu A-Fällen zu liefern, die zum Exportzeitpunkt noch nicht fakturiert sind?
{{<collapsibleBlock groupId="rechnungen">}}
Die Angaben zu den Fällen sind zu liefern. Bei den Rechnungen ist der letzte Stand zu liefern, also nichts.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
<!--Variable «rech_unfallnr»: Für die Angaben dieser Nummer ist das Feld auf 17 Zeichen beschränkt. Nun zirkulieren in älteren Systemen auch 20-stellige Schadensnummern. Wie müssen wir vorgehen?-->
Variable «rech_unfallnr»: Für die Angaben dieser Nummer ist das Feld auf 17 Zeichen beschränkt. Nun zirkulieren aber auch 32-stellige Schadensnummern. Wie müssen wir vorgehen?
{{<collapsibleBlock groupId="rechnungen">}}
<!--In Absprache mit der Zentralstelle für Medizinaltarife UVG (ZMT) können die ersten drei Stellen gestrichen werden. Zum Beispiel würde die folgende Schadennummer 01.05.01.23.009999.3 als Nummer 05.01.23.009999.3 gesendet, d.h. ohne den Prefix ‘01.'-->
Wir werden die Anzahl Zeichen auf 50 erweitern. 
{{</collapsibleBlock>}}
{{</listItem>}}
{{</numberedList>}}
{{</faqBlock>}}
