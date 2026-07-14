---
title: Zusatzinfos
slug: zusatzinfos
description: " "
weight: 40
type: docs
keywords: []
---

1) Institutionsbezogener Abzug für Hotellerie-Mehrkosten für ZV-Patienten 

SpiGes trägt die Pflegetage gemäss den los der SwissDRG SA-Grupper sowie die gemäss REKOLE erfassten Kosten für ktr_41, ktr_42 und ktr_43 ein. Dieselben Kosten gemäss VKL müssen vom Betrieb eingetragen werden. Der Rest wird durch Formeln festgelegt (die von H+ in der Excel-Datei verwaltet werden).

{{<markdown>}}

|Konto|Beschreibung|SpiGes-Variable|
|---------|---------|---------|---------|
|41|Hotellerie Zimmer gemäss REKOLE®|ktr_41|
|42|Hotellerie-Küche gemäss REKOLE®|ktr_42|
|43|Hotellerie-Service gemäss REKOLE®|ktr_43|

{{</markdown>}}

2) Berechnung Abzug 65-Erträge

Zu diesem Zweck ist die Variable ktr_kosten_65 vorgesehen.

6) Begründungen zur Abgrenzungsrechnung

Die Abstimmungsbrücke wird in der KS erfasst und anschliessend vom Betrieb in SpiGes importiert. Jede Abgrenzung löst in SpiGes einen Fehler aus, der kommentiert werden muss. Der Kommentar wird in die Tabelle übernommen. 

Die Beträge werden einzeln übernommen und wie folgt kategorisiert:

{{<markdown>}}

|Konto|Beschreibung|Sachl. Abgrenzung|
|---------|---------|---------|
|30-39|Personalaufwand exkl. Honorare|UV_ABBR_17_20_14 UV_ABBR_17_20_15 UV_ABBR_17_20_18|
|38|Honorare (sozialversicherungspflichtig)|UV_ABBR_17_20_16 UV_ABBR_17_20_17|
|40|Medizinischer Bedarf| UV_ABBR_17_20_19 UV_ABBR_17_20_20|
|41-49|Sachaufwand exkl. Anlagenutzungskosten|UV_ABBR_17_20_21 UV_ABBR_17_20_22 UV_ABBR_17_20_23 UV_ABBR_17_20_24 UV_ABBR_17_20_27 UV_ABBR_17_20_30 UV_ABBR_17_20_37 UV_ABBR_17_20_38 UV_ABBR_17_20_39|
|44|Anlagenutzungskosten (exkl. Inv. < CHF 10'000)|UV_ABBR_17_20_25 UV_ABBR_17_23_25 UV_ABBR_17_23_27 UV_ABBR_17_23_28|
|46|Zinsaufwand|UV_ABBR_17_20_31 UV_ABBR_17_20_32 UV_ABBR_17_20_33 UV_ABBR_17_20_34 UV_ABBR_17_20_35 UV_ABBR_17_20_36|
|7|a.o. Aufwand|UV_ABBR_17_20_40 UV_ABBR_17_20_41 UV_ABBR_17_20_42 UV_ABBR_17_20_43|

{{</markdown>}}

Die Kommentare unterliegen einer Hierarchie:
 - Zunächst wird der letzte Kommentar auf Standortsebene berücksichtigt.
 - Liegt kein Kommentar auf Standortsebene vor, wird der letzte Kommentar auf Unternehmensebene berücksichtigt.
 - Liegt kein Kommentar auf Unternehmensebene vor, wird der letzte Kommentar auf Kantonsebene berücksichtigt.
 - Liegt kein Kommentar auf Kantonsebene vor, wird kein Kommentar berücksichtigt.

9) Gemeinwirtschaftliche Leistungen

Die Aufschlüsselung der gemeinwirtschaftlichen Leistungen weist bei ITAR_K® und SpiGes denselben Aufbau auf. Alle bereits definierten gemeinwirtschaftlichen Leistungen haben einen spezifischen ktr_typ. Für die vom Betrieb definierten gemeinnützigen Leistungen wird ein anderer ktr_typ verwendet (599 oder 799). In diesen Fällen entspricht jede unterschiedliche ktr_beschr einer Zeile in der Tabelle.

{{<markdown>}}

|Beschreibung (Typ A)|SpiGes-variable ktr_typ|
|---------|---------|
|Vorhalteleistungen (exkl. Vorhalteleistungen für den Notfall)|501|
|Rettungswesen/Notruf 144|502|
|Geschützte Spitalbereiche|503|
|Kindergarten und Schule für Patientinnen und Patienten|504|
|Sozialdienstliche Leistungen für Patienten|505|
|Prävention/Gesundheitsförderung|506|
|Bevölkerungsschutz|507|
|Spitalseelsorge / Andachtsraum|508|
|Weitere Spezialaufgaben|599|

{{</markdown>}}

{{<markdown>}}

|Beschreibung (Typ B)|SpiGes-variable ktr_typ|
|---------|---------|
|Forschung, inkl. Doktorat (MD und PhD)|601|
|Erteilte und erhaltene universitäre Ausbildung|602|
|Erteilte berufliche Weiterbildung|603|

{{</markdown>}}

{{<markdown>}}

|Beschreibung (Typ C)|SpiGes-variable ktr_typ|
|---------|---------|
|Aufrechterhaltung von Überkapazitäten aus regionalpolitischen Gründen|701|
|Geburtshilfe|702|
|Nicht kostendeckende Tarife (z. B.TARMED.)|703|
|Weitere spitalbezogene gemeinwirtschaftliche Leistungen|799|

{{</markdown>}}

In den Spalten werden die Erträge nach Konten unterteilt:
 - Staatliche Erträge: ktr_69.
 - Dritte: Summe der übrigen ktr_6*. 
 
Die Kosten berücksichtigen alle kostenbezogenen ktr mit ANK gemäss REKOLE (ktr_44_rekole). Die Methode zur Kostenberechnung wird durch die Variable ktr_methodik angegeben.