---
title: Kostenträger Fall 
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="kostentraeger">}}

{{<numberedList>}}
{{<listItem>}}
Wie sollen die Kosten für forensische C-Fälle (mehrere Jahre Liegedauer) eingereicht werden? Für den ganzen Fall (ganze Liegedauer) oder nur die Kosten für das jeweilige Kalenderjahr und der Rest über Abgrenzungen?
{{<collapsibleBlock groupId="kostentraeger">}}
Für B- und C-Fälle sind die Kosten im Kalenderjahr anzugeben, für A-Fälle die Kosten über die ganze Falldauer. Für ambulante und nicht-fallbezogene Kostenträger auch die Kosten im Kalenderjahr. Siehe auch Spalte «Zeitbezug» der Variablenliste.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Zuschläge für Anlagenutzungskosten (ANK) bei den Einzelkosten:  Auf den Einzelkosten (Medizinischer Bedarf 400 und 401) dürfen gemäss REKOLE® ANK-Zuschläge erfasst werden. Für diese KTR-Variablen existieren in SpiGes und im SwissDRG Kostendatensatz aber im Gegensatz zu den Gemeinkosten keine separaten ANK-Variablen, auf denen die Anlagenutzungskosten gemäss REKOLE angegeben werden können. In ITAR_K® müssen die Konten 400 und 401 ohne ANK-Zuschläge angegeben werden. Wie ist mit diesen ANK-Zuschlägen auf den Konten 400 und 401 zu verfahren?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}

-	Die ANK-Zuschläge sind auf den Konten 400 und 401 nicht zu erfassen. Sie sind jedoch in den Total-Variablen der ANK einzuschliessen (ktr_44_vkl / ktr_44_rekole).
-	Die Variable ktr_44_rekole wird mit der Version 1.4 der Schnittstelle von einer berechneten in eine erhobene Variable umgewandelt (und im XML hinzugefügt), so dass damit ein Total ANK REKOLE® erhoben werden kann, das von der Summe der einzelnen KTR-Variablen abweicht.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Die rein ambulanten Standorte sind in SpiGes nicht in der Grundgesamtheit erfasst. ITAR_K® enthält die Kosten pro ambulanten Tarif. Auf welcher Ebene werden die rein ambulanten Kosten in SpiGes geliefert?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
Die Kosten der rein ambulanten Standorte werden im Element **KostentraegerStandort** auf einen anderen Standortsebene oder im Element **KostentraegerUnternehmen** auf Unternehmensebene geliefert werden (siehe fiktives xml Beispiel). Die Kosten werden nicht pro Patient (Fall) sondern pro ambulanten Tarif (ktr_typ, im Beispiel "301" = Tarif TARMED, KVG reine OKP) erfasst.

Damit diese Erfassung im ITAR_K® (**pro BURGESV**) korrekt erfolgt, muss Folgendes beachtet werden:

- Kosten und Erlöse von rein ambulant behandelten Patienten auf Unternehmensebene erfassen: bei Unternehmen mit **einem** Spital (BURGESV).
- Kosten und Erlöse von rein ambulant behandelten Patienten auf Standortebene erfassen: bei Unternehmen mit **mehreren** Spitälern (BURGESV).

{{<insertImage image="xml_tarifambu.png" class="edge max-w-70">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wie werden Erlöse und Rechnungen abgebildet, wenn der Kanton ein Globalbudget vorgibt ?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
Ist das Globalbudget höher als die Erlöse, resp. wird dieses nicht ausgeschöpft, erfolgt die Abbildung ganz normal. Die Antworten hier betreffen nur **den Fall, dass das Globalbudget ausgeschöpft wird und die Erlöse ohne Globalbudget höher gelegen hätten**. 

Grundsatz: Erlöse müssen auf den Fällen abgebildet werden.
Es gibt zwei Vorgehensvarianten:
- proportional

Die «normalen» Erlöse (ohne Globalbudget) werden um einen konstanten Faktor reduziert. Der Faktor kann erst berechnet werden, wenn die definitiven Erlöse aus dem Globalbudget bekannt sind. 
Beispiel: theoretische Erlöse vom Kanton 100 Mio., Globalbudget 90 Mio. -> Bei allen vom Globalbudget betroffenen Fällen wird nur 90% der «normalen» Erlöse des Kantons verbucht (resp. 49.5% [90% der 55% Kantonsanteil].

- ausschöpfen, nachher 0

indem die vollen 55% des Kantons so lange auf die Fälle gebucht werden, bis das Globalbudget erschöpft ist. Danach werden keine Erlöse mehr auf die verbleibeenden Fälle des Jahres verbucht.  
Beispiel: theoretische Erlöse vom Kanton 100 Mio., Globalbudget 90 Mio. -> Alle Fälle werden mit kantonalen Erlösen von 100% verbucht, bis das Globalbudget erschöpft ist. Fälle, die danach verbucht werden, weisen keinen Erlös des Kantons auf (0).
Wichtig für ITAR_K-Erstellung: Es darf kein separater Kostenträger mit den Erlösminderungen geführt werden.

**Wichtig für ITAR_K-Erstellung**: Es darf kein separater Kostenträger mit den Erlösminderungen geführt werden.

Falls diese Lösungen für die Rechnungen aufwändig umzusetzen sind, können nach Rücksprache mit Kanton und BFS im ersten Erhebungsjahr andere Methoden angewandt werden. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
