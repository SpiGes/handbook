---
title: Abgrenzung der Fälle
slug: Fall
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="Fall">}}

{{<numberedList>}}
{{<listItem>}}
Sind stationäre Begleitpersonen auch Bestandteil der Datenlieferung SpiGes ?
{{<collapsibleBlock groupId="Fall">}}
Grundsätzlich sind Begleitpersonen (Eltern, Kinder, Partner) keine stationären Fälle, diese beanspruchen reine Hotelleriedienste (ohne medizinische Leistung) und werden nicht erfasst (war schon bei der MS so).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wie sind die Wartepatienten in SpiGes zu liefern ?
{{<collapsibleBlock groupId="Fall">}}
{{<markdown>}}
Die Wartepatienten sind Fälle, welche keine akute Spitalpflege mehr benötigen, die aber nicht entlassen werden können, weil sie noch auf eine Anschlusslösung warten. Es sind zwei Fälle zu führen. Der erste Fall bildet die normale Behandlung während des akuten Spitalpflegebedarfs ab und wird nach SwissDRG, STReha, TARPSY oder anderen Spitaltarifen abgerechnet. Der zweite Fall ist der Wartefall ohne den Bedarf der Spitalpflege.  

Diese Fälle sind wie folgt zu kodieren: 
- Tarif = 7 (Pflegetaxe) für den Wartefall da diese in der Regel als Pflegepatienten abgerechnet werden. In Ausnahmefällen, wenn die Finanzierung anders ist, kann ein anderer Tarif angegeben werden.
- Der vorherige Fall muss mit einer Entscheid für Austritt internen Übertritt (austrittsentscheid = 4) angegeben werden, wenn der Patient im selben Spital bleibt.
- Die Angabe des Aufenthalts nach Austritt (austritt_aufenthalt) im vorherigen Fall kann vom Betrieb (möglicherweise in Absprache mit dem Kanton) entschieden werden.  
<!--Nur anzugeben, wenn sie nicht bereits in SOMED berücksichtigt werden (Fälle, die als Patienten in Pflegeheimen betrachtet werden).-->

*Wenn es für dem Betrieb nicht möglich ist, diese Fälle individuell anzugeben, ist es notwendig, den ktr_typ 101 zu verwenden, um die gesamten Kosten zu übermitteln, um ITAR_K® korrekt auszufüllen oder, als letztes Mittel, sie in den Abgrenzungen der KS-Abstimmungsbrücke abzuziehen.*
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
