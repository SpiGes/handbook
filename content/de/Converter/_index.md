---
title: XML-Konverter
slug: converter
description: "Auf dieser Seite finden Sie ein Tool, mit dem Sie eine Excel-Datei in XML für die KTR_TYP-Daten auf Unternehmens- und Standortebene konvertieren können."
weight: 80
type: docs
keywords: []
---

[Den Konverter öffnen](downloads/SpiGes_KTR_Konverter_v0.2.html)

Man muss nur eine Excel-Datei mit der richtigen Struktur hineinziehen (Drag & Drop), siehe [Beispiel](downloads/Beispiel_KTR_Konverter.xlsx).  

Sobald Sie die Datei per Drag & Drop verschoben haben, können Sie:
 - die XML-Datei herunterladen,
 - den XML-Code anzeigen und kopieren.

{{<markdown>}}
**Voraussetzungen**
•	Datei SpiGes_KTR_Konverter.html (wird per Doppelklick im Browser geöffnet; keine Installation, keine Administratorrechte).
•	Aktueller Browser: Microsoft Edge, Google Chrome oder Firefox.
•	Excel-Datei im Format .xlsx mit den Kostenträgerdaten (Beispiel).
•	Eine Internetverbindung ist nicht erforderlich. Die Daten verlassen den Computer nicht; die gesamte Verarbeitung erfolgt lokal im Browser.

**Feldregeln (Excel-Datei)**

|Feld|Regel|
|---------|---------|
|ent_id|Pflichtfeld. Ganze Zahl, 1 bis 9 Stellen. In allen Zeilen der Datei identisch (eine Datei = ein Unternehmen).|
|burnr|Optional. Zahl mit maximal 9 Stellen. Leer = Kostenträger auf Ebene Unternehmen. Ausgefüllt = Kostenträger auf Ebene des Standorts mit dieser BUR-Nummer.|
|ktr_typ|Pflichtfeld. Ganze Zahl 0–999. Code gemäss offizieller BFS-Codeliste.|
|ktr_beschr|Text, maximal 256 Zeichen. Die Kombination ktr_typ + ktr_beschr muss pro Ebene bzw. pro Standort eindeutig sein.|
|ktr_... (Beträge)|Zahl in Franken, maximal 2 Nachkommastellen. Negative Werte zulässig. Leer lassen ist zulässig.|
|ktr_methodik|Ganze Zahl 0–9. Code gemäss offizieller BFS-Codeliste.|
|ktr_le_ambulant|Zahl, mehr als 2 Nachkommastellen zulässig.|

Eine Null und eine leere Zelle sind nicht gleichbedeutend:
|Eintrag in der Zeile|Ergebnis im XML|Bedeutung|
|---------|---------|---------|
|leer|Feld erscheint nicht im XML|Keine Angabe zu diesem Feld|
|0|Feld erscheint mit Wert|Der Wert beträgt null |

Erfassungsregel: 0 eintragen, wenn der Betrag null beträgt. Zelle leer lassen, wenn zu diesem Feld keine Angabe gemacht wird.
{{</markdown>}}