---
title: KTR-Ausweis
slug: ktrausweis
description: " "
weight: 30
type: docs
keywords: []
---

Die SpiGes-Variablen entsprechen den Kontodetails. Die Beträge werden daher für jeden KTR durch Aggregation nach itark_spalte berechnet.

{{<markdown>}}

|Konto|Beschreibung|SpiGes-Variable|
|---------|---------|---------|
|60|Erlös aus medizinischen, pflegerischen und therapeutischen Leistungen|ktr_60|
|61|Ärztliche Einzelleistungen|ktr_61|
|62|Übrige Spitaleinzelleistungen|ktr_62|

{{</markdown>}}
...

{{<markdown>}}

|Konto|Beschreibung|SpiGes-Variable|
|---------|---------|---------|
|400|Arzneimittel (exkl. Blut und Blutprodukte)|ktr_4001|
|400|Blut und Blutprodukte|ktr_4002|
|401|Material (exkl. Implantate), Instrumente, Utensilien, Textilien|ktr_4011|

{{</markdown>}}
...

{{<markdown>}}

|Konto|Beschreibung|SpiGes-Variable|
|---------|---------|---------|
|10|Patientenadministration|ktr_10|
|20|OPS-Säle|ktr_20|
|21|Herzkatheter-Labor|ktr_21|

{{</markdown>}}
...

Particularités:
 - **Patientenadministration**  
Für ambulant können zwei Methoden angewendet werden. Zu diesem Zweck ermöglichen zwei versteckte Zeilen in der ITAR_K®-Datei diese Unterscheidung. Die erste Zeile berücksichtigt die durch die Variable ktr_403 definierte Gesamtsumme, die anschliessend entsprechend der Tätigkeit auf die verschiedenen Tarife aufgeteilt wird (diese Formel wird von H+ in der Excel-Datei verwaltet). Die zweite Zeile berücksichtigt die durch die ambulanten Tarife bereitgestellten Details. Die sichtbare Zeile summiert die beiden Zeilen, um den Endbetrag zu ermitteln. Diese Funktionsweise wird für die ANK VKL und REKOLE reproduziert (ktr_403 vs. andere ambulante ktr-Werte).
 - **Anlagenutzungskosten(ANK)**  
Für ANK gemäss VKL wird die Variable ktr_44_vkl verwendet. Für ANK gemäss REKOLE wird die Variable ktr_44_rekole verwendet.