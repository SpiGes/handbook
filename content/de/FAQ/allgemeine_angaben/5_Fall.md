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
Die *Wartepatienten* (unterschiedliche Nomenklaturen je nach Kanton) sind Fälle, welche keine akute Spitalpflege mehr benötigen, die aber nicht entlassen werden können, weil sie noch auf eine Anschlusslösung warten. Es sind zwei Fälle zu führen. Der erste Fall bildet die normale Behandlung während des akuten Spitalpflegebedarfs ab und wird nach SwissDRG, STReha, TARPSY oder anderen Spitaltarifen abgerechnet. Der zweite Fall ist der Wartefall ohne den Bedarf der Spitalpflege.  

Diese Fälle sind wie folgt zu kodieren:  

- erster Fall
    - Entscheid für Austritt “internen Übertritt” (austrittsentscheid = 4), wenn der Patient im selben Spital bleibt.
    - Aufenthalt nach der Austritt (austritt_aufenthalt) 44, 55 oder 66, je nachdem, in welcher Abteilung/Klinik er sich physisch befindet. 
- zweiter Fall (Wartefall)
    - Tarif = 7 (Pflegetaxe) da diese Fälle in der Regel als Pflegepatienten abgerechnet werden. In Ausnahmefällen, wenn die Finanzierung anders ist, kann ein anderer Tarif angegeben werden.  
&nbsp;      
*Wenn es für dem Betrieb nicht möglich ist, diese Fälle individuell anzugeben, ist es notwendig, die Kosten für die Wartefälle unter dem ktr_typ 101 anzugeben, um die gesamten Kosten zu übermitteln und um ITAR_K® korrekt auszufüllen. Als letztes Mittel, die Kosten der Wartefälle in den Abgrenzungen der KS-Abstimmungsbrücke abgezogen werden.*
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
