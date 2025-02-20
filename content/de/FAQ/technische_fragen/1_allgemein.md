---
title: Allgemein
slug: allgemein
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="allgemein">}}

{{<numberedList>}}
{{<listItem>}}
Gibt es für den Datenimport in die SpiGes Applikation eine Formatvorlage?
{{<collapsibleBlock groupId="allgemein">}}
Ja, die Formate im Schnittstellenkonzept sind zu übernehmen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wurden die grossen Anbieter von Pat.-Admin-Software (SAP) ebenfalls vom BFS informiert und entwickeln sie bereits Software-Lösungen? Vermutlich sollte das XML-File künftig in der Pat.-Admin-Software erstellt werden.
{{<collapsibleBlock groupId="allgemein">}}
Im Januar 2023 haben wir ein Informationsveranstaltung Richtung KIS Hersteller (Pat.-Admin-Software) gemacht. SAP war auch repräsentiert. Das BFS informiert diese Gruppe laufend über den Stand von SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Gemäss Variablenliste gibt es folgende Tabellen:
{{<markdown>}}
|||
|-----------|-----------|
| 1 | Administratives |
| 2 | Neugeborene |
| 3 | Psychiatrie |
| 4 | KTR |
| 5 | Diagnosen |
| 6 | Behandlungen |
| 7 | Operierende |
| 8 | Medikamente |
| 9 | Rechnung |
| 10 | Patientenbewegungen |
| 11 | Kantonsdaten |
| 12 | Personenidentifikatoren |

{{</markdown>}}

Kann man unter SpiGes diese Tabellen alle als einzelnes xml-File abgeben?
{{<collapsibleBlock groupId="allgemein">}}
Die Tabelle 12 Personenidentifikatoren muss in einem separaten File geliefert werden (aus Datenschutzgründen). Für die restlichen Tabellen ist ein anderes File definiert, welches aber Teillieferungen unterstützt. Theoretisch ist es also möglich, alle Tabellen in einem einzelnen XML-File als Teillieferungen zu liefern. Wir empfehlen dies jedoch nicht, da dies eine aufwändige Abstimmung der verschiedenen Tabellen erfordert (Sicherstellen, dass die Informationen zu allen Fällen in allen Files vorhanden sind).  Genauere Informationen zu diesem Thema finden Sie in der Beschreibung der XML-Datei für den Datenimport in die SpiGes-Plattform auf unserer {{<link url="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.html" newTab="true">}}Webseite{{</link>}}.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ist es richtig, dass die Datenlieferung an die SwissDRG AG im SpiGes Format keine Teillieferungen erlaubt?
{{<collapsibleBlock groupId="allgemein">}}
Diesbezüglich konsultieren Sie bitte die Hinweise auf der Webseite der SwissDRG AG zur Erhebung 2025 (Daten 2024) (z.B. Akutsomatik).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Gibt es eine Möglichkeit für kleine Betriebe aus einem Excel (in der die KTR eingetragen ist) ein XML-File herzustellen. Gibt es ein Anbieter, der dies plant umzusetzen?
{{<collapsibleBlock groupId="allgemein">}}
Ja, es gibt private Anbieter, die so ein Tool bereitstellen. Das BFS verfolgt diese Idee darum aktuell nicht weiter.
<!--Cette possibilité est actuellement examinée par l'OFS.-->
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ist geplant eine Excel für die fallunabhängigen Kosten zur Verfügung zu stellen, in welchem der Betrieb die fallunabhängigen Kosten im Excel-Format ausfüllen kann und dann als XML-Format exportieren kann?
{{<collapsibleBlock groupId="allgemein">}}
Die separate Lieferung von verschiedenen Arten von XML-Elementen ist möglich. D.h. die fallunabhängigen Kostenträger können grundsätzlich in einem anderen File als die fallabhängigen Kostenträger geliefert werden. Es gibt private Anbieter, die ein Excel Konvertierungs-Tool bereitstellen. Das BFS verfolgt diese Idee darum aktuell nicht weiter.
<!--Nous devons encore déterminer si nous pouvons mettre à disposition un outil pour la transformation des données à partir d'un fichier Excel.-->
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Hat das SpiGes Exportfile die gleiche Struktur wie das File, welches die Spitäler in SpiGes importieren?
{{<collapsibleBlock groupId="allgemein">}}
Es wird mehrere Exportfiles geben. Einerseits wird man das XML-File, was die Spitäler importieren, auch exportieren können und andererseits wird ein Export in einem flachen Format (mehrere CSV-Dateien) möglich sein.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Spielt im XML-Format die Reihenfolge der Variablen innerhalb einer Zeile eine Rolle?
{{<collapsibleBlock groupId="allgemein">}}
{{<markdown>}}

- Die Reihenfolge der Elemente ist vorgegeben und nicht veränderbar. Elemente können höchstens weggelassen werden. Also für das Fall-Element sind die Unterelemente immer in der Reihenfolge «Administratives», «Neugeborene», «Psychiatrie», «KostenträgerFall», «Diagnose», «Behandlung», «Medikament», «Rechnung», «Patientenbewegung» und «Kantonsdaten» anzugeben.  
- Die Reihenfolge der Attribute ist hingegen frei wählbar. So kann z.B. im Element «Administratives» sowohl «…geschlecht="2" alter="37"…» als auch «…alter="37" geschlecht="2"…» angegeben werden.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Können auch Variablen innerhalb einer Zeile fehlen, falls die Klinik in dieser Zeile nichts zu der entsprechenden Variable auszufüllen hat? Oder müssen immer alle Variablen der Schnittstelle in jeder Zeile stehen?
{{<collapsibleBlock groupId="allgemein">}}
Ja, Variablen können fehlen. Gewisse Variablen müssen aber zwingend angegeben werden. Diese sind im XSD-Definitionsfile als «required» gekennzeichnet («xs:attribute name="fall_id" use="required"»). In der Variablenliste werden wir diese Information auch noch ergänzens.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Können die Variablen, welche keinen Inhalt haben, auch mit einem NULLWERT geliefert werden (zum Beispiel vollständige KTR-Zeilen mit NULLEN in den Variablen wo nichts vorhanden ist)?
{{<collapsibleBlock groupId="allgemein">}}
Das kommt auf die Variablen an. Bei den KTR-Variablen ist es möglich, alle Variablen mit dem Wert «0» zu erfassen. Leere Variablen («») oder Nullwerte («NULL») sind jedoch nicht zulässig. Falls Sie das konkret überprüfen möchten, können Sie ihr XML-File gegen die XSD-Definition validieren. Dazu gibt es online gratis Tools. Bitte beachten Sie dabei, dass keine echten Daten auf solche Plattformen hochgeladen werden dürfen. Fiktive Beispiel-Files können sie aber so überprüfen. Auch die SpiGes Plattform wird eine solche Validierung bereitstellen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wird es eine Plausibilisierungssoftware analog Medplaus geben, die vor dem Upload lokal innerhalb der Spitäler eingesetzt werden kann?
{{<collapsibleBlock groupId="allgemein">}}
Es wird ein Prüftool via API (Application Programming Interfaces) zur Verfügung gestellt werden. Dies wird jedoch erst im Laufe des kommenden Jahres bereitstehen. Bis dahin empfehlen wir MedPlaus weiter zu verwenden. Davon wird es auch eine Version für das Jahr 2024 geben.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ist schon bekannt, wie das Vorgehen in Bezug auf die kantonalen Zusatzdaten sein wird? Verschiedene Kantone (z.B. LU, GR, VS und VD) haben ja bereits heute eine MK-Zeile. Zudem erheben die Kantone ZH und BE im Rahmen von SDEP ebenfalls zusätzliche Daten. Wissen Sie bereits, ob diese Daten in den Export SpiGes integriert werden oder ob diese separat exportiert werden müssen?
{{<collapsibleBlock groupId="allgemein">}}
{{<unorderedList>}}
{{<listItem>}}
Die kantonalen Zusatzdaten wurden in der Schnittstelle berücksichtigt; siehe {{<link url="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.32129189.html" newTab="true">}}Beschreibung der XML-Datei für den Datenimport in die SpiGes-Plattform{{</link>}}.
{{</listItem>}}

{{<listItem>}}
Die kantonalen Zusatzdaten können zwar im XML angegeben werden, werden beim Import auf die SpiGes Plattform jedoch nicht weiterverarbeitet. Sie werden von den Kantonen separat plausibilisiert und bearbeitet.
{{</listItem>}}

{{<listItem>}}
Exportierbar sind die Kantonsdaten nur durch das Spital selbst und durch den Kanton. Voraussichtlich sind die Kantonsdaten für diese User im selben XML-File enthalten, wie die restlichen Daten.
{{</listItem>}}
{{</unorderedList>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wird es möglich sein, Korrekturen direkt auf der Plattform vorzunehmen?
{{<collapsibleBlock groupId="allgemein">}}
Nein, die Plattform bietet keine Möglichkeit, Daten einzugeben oder zu korrigieren. Ziel ist es, die Fehler an der Quelle, d.h. in den Systemen der Krankenhäuser, zu korrigieren, damit die späteren Exporte konsistent sind und die Fehler in den nächsten Erhebungen nicht mehr auftauchen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Es gibt neue Formate. Beispielweise bei rech_betrag. Das Format lautet N10.2 Wir vermuten, es handelt sich hierbei um die Angabe von Dezimalstellen. In diesem Fall 2 Dezimalstellen und eine Gesamtlänge von 12. Ist dies korrekt?
{{<collapsibleBlock groupId="allgemein">}}
N10.2 bezeichnet eine Zahl mit insgesamt 10 Stellen, davon 2 Nachkommastellen (und ergo max. 8 Vorkommastellen).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Neue Variablen medi_id und rech_id: Aus der Beschreibung sind wir uns nicht sicher, ob hier laufende Nummern oder tatsächliche ID aus dem System gemeint sind. Wenn ja, welche? Bei der medi_id dachten wir sofort an den ATC_Code, jedoch gibt es hierfür eine extra Variable.
{{<collapsibleBlock groupId="allgemein">}}
{{<markdown>}}

- Es handelt sich bei den beiden neuen Variablen «medi_id» und «rech_id» um Identifikatoren, die zur eindeutigen Zuordnung aus technischen Gründen nötig sind. Diese müssen nicht zwingend mit 1 beginnen, sie müssen aber für jeden Fall eindeutig sein.
- In der XML-Musterdatei 1.3, welche Sie auf unserer Homepage vorfinden, ist auch ein Beispiel enthalten. medi_id=«1» enthält die Information, dass es sich um das erste hochteure Medikament gemäss den Vorgaben der SwissDRG AG für diesen spezifischen Fall handelt.
{{</markdown>}}
{{<insertImage image="Image5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
In den Beispieldateien für das Identifikatoren-File und das Daten-File gibt es zwei Felder für die Version. Diese Versionen stimmen aber nicht überein. So wird im Header die Version 1.0 angegeben und beim Tag Unternehmen die Version 1.3. Warum sind die Versionsnummern unterschiedlich? Woher wissen wir wann welche Versionsnummer anzugeben ist?
{{<collapsibleBlock groupId="allgemein">}}
{{<insertImage image="Image6.jpg" class="edge max-w-90">}}

{{<lineBreak>}}
{{<markdown>}}
`?xml version="1.0"` steht immer so.
Die oberste Version bezieht sich also auf das «XML» selbst, und die untere auf das spezifische SpiGes XML.
{{</markdown>}}

{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
