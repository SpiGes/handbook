---
title: Kostenträger Fall 
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

{{<collapsible title="Wie sollen die Kosten für forensische C-Fälle (mehrere Jahre Liegedauer) eingereicht werden? Für den ganzen Fall (ganze Liegedauer) oder nur die Kosten für das jeweilige Kalenderjahr und der Rest über Abgrenzungen?">}}
Für B- und C-Fälle sind die Kosten im Kalenderjahr anzugeben, für A-Fälle die Kosten über die ganze Falldauer. Für ambulante und nicht-fallbezogene Kostenträger auch die Kosten im Kalenderjahr. Siehe auch Spalte «Zeitbezug» der Variablenliste. 
{{</collapsible>}}

{{<collapsible title="Können die Langzeitfälle in SpiGes mit KTR-Typ 101=Langzeit als fallunabhäniger Kostenträger geliefert werden, auch wenn parallel dazu die SOMED für die Langzeitpflege erfasst wird?">}}
Wenn der Betrieb SOMED ausfüllt, dann müssen diesen Kosten über den KTR-Typ 101 in SpiGes erfasst werden. Umgekehrt müssen einzelne Langzeit-Fälle in der Akutsomatik und Reha (Wartepatienten) als KTR-Typ 1 (=Fall) und entsprechendem Tarif 7 (=Pflegetaxe) abgebildet werden. So stimmt das ITAR_K und die Statistiken.
{{</collapsible>}}

{{<collapsible title="Zuschläge für Anlagenutzungskosten (ANK) bei den Einzelkosten:  Auf den Einzelkosten (Medizinischer Bedarf 400 und 401) dürfen gemäss REKOLE® ANK-Zuschläge erfasst werden. Für diese KTR-Variablen existieren in SpiGes und im SwissDRG Kostendatensatz aber im Gegensatz zu den Gemeinkosten keine separaten ANK-Variablen, auf denen die Anlagenutzungskosten gemäss REKOLE angegeben werden können. In ITAR_K müssen die Konten 400 und 401 ohne ANK-Zuschläge angegeben werden. Wie ist mit diesen ANK-Zuschlägen auf den Konten 400 und 401 zu verfahren?">}}
<ul>
<li>	Die ANK-Zuschläge sind auf den Konten 400 und 401 nicht zu erfassen. Sie sind jedoch in den Total-Variablen der ANK einzuschliessen (ktr_44_vkl / ktr_44_rekole). </li>
<li>	Die Variable ktr_44_rekole wird mit der Version 1.4 der Schnittstelle von einer berechneten in eine erhobene Variable umgewandelt (und im XML hinzugefügt), so dass damit ein Total ANK REKOLE erhoben werden kann, das von der Summe der einzelnen KTR-Variablen abweicht. </li>
</ul>
{{</collapsible>}}
