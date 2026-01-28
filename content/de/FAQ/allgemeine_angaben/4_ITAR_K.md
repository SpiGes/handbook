---
title: ITAR_K® 
slug: ITAR_K
description: " "
weight: 40
type: docs
keywords: []
---
 
{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="ITARK">}}

{{<numberedList>}}

{{<listItem>}}
SpiGes erhebt nur Informationen zu den stationären Fällen. Wie kann der ambulante Teil des ITAR_K® ausgefüllt werden?
{{<collapsibleBlock groupId="ITARK">}}
ITAR_K® kann mit den SpiGes Daten erstellt werden. Die ambulanten Angaben werden in den dafür vorgesehenen KTR Typen erhoben (z.B. Tarif Labor).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wie wird ITAR_K® von Kliniken erstellt, welche nur Teil eines Spitalunternehmens sind? (z.B. Klinik St. Anne von Fribourg ist Teil der Swiss Medical Network AG)
{{<collapsibleBlock groupId="ITARK">}}
Die Klinik St. Anne von Fribourg wird die Finanzbuchhaltung (und alle anderen Angaben) in der Krankenhausstatistik pro Klinik (Ebene BURGESV) ausfüllen. Die Kosten aus SpiGes lassen sich nach BURGESV aggregieren.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Die Kostendaten muss man bis zum 31.3 erfassen. Müssen diese Daten revidiert sein? Aktuell könnten wir das nicht umsetzen da der Jahresabschluss erst Ende März revidiert wird.
{{<collapsibleBlock groupId="ITARK">}}
Bei dieser Frist müssen die Kostendaten erstmals automatisch auf der SpiGes Plattform geprüft sein. Die Revision kann später erfolgen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wir finden keine SpiGes-Variable, die es ermöglichen würde, die direkt mit einem Fall verbundenen GWL-Kosten/Erlöse in die dafür vorgesehene GWL Spalte im ITAR_K® zu überführen. Wie wird die GWL-Spalte von ITAR_K® mit den SpiGes Daten berechnet?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

- Es gibt keine direkt fallbezogenen Kosten/Erlöse von gemeinwirtschaftlichen Leistungen (GWL). SpiGes hält sich bei der Abbildung der GWL an die Rechtsprechung und die Empfehlungen des Spitalverbandes H+ und dessen Branchenlösung REKOLE®.
- Gemäss REKOLE® kann es innerhalb von Spitalbetrieben GWL für spezielle Aufgaben und/oder für die Forschung und universitäre Ausbildung geben. Die Kosten und Erlöse für diese Leistungen werden über klar definierte Aufträge verbucht (Kap. 9.10 von REKOLE®). REKOLE® sieht auch vor, dass die Erlöse aus anderen Beiträgen für die Aufrechterhaltung von Spitalkapazitäten aus regionalpolitischen Gründen oder für nicht kostendeckende Tarife auf Kosten-/Erlösträger verbucht werden, die nur Erlöse enthalten. Diesen Erlösen steht jedoch keine definierte Leistung gegenüber. Sie dürfen daher keinen Einfluss auf die Kosten der stationären Betrieben haben (Kap. 9.11.3 von REKOLE®).
- In der SpiGes-Variablenliste Version heisst es in der Beschreibung der Variablen „ktr_typ“: "Hier ist die Art des Kostenträgers anzugeben: Fall (=1) oder **Auftrag** mit genauen Unterkategorien; die Ausprägungen sind dem separaten Tabellenblatt "KTR-Typen" zu entnehmen (KTR=Kostenträgerrechnung). **Für alle GWL und Nebenbetriebe muss eine separate Zeile ausgefüllt werden**. Genauere Angaben zu den kostenträgerspezifischen Vorgaben sind dem Tabellenblatt "KTR-Typen" zu entnehmen. Diese Variable ist für die Zuteilung der Fälle auf die Spalten in ITAR_K® relevant". Die Kosten/Erlöse der GWL werden also von SpiGes über im Erhebungsteil KTR erhoben und als Summe in der Spalte GWL der ITAR_K®-Datei abgefüllt.

<!-- avant input H+:
-	Bei der Abbildung der gemeinwirtschaftlichen Leistungen hält sich SpiGes grundsätzlich an die Rechtsprechung und die Empfehlungen des Spitalverbandes H+. REKOLE® sieht vor, dass die Kosten der fallbezogenen gemeinwirtschaftlichen Leistungen auf dem Fall, die Erlöse jedoch auf einem separaten GWL-Kostenträger abgebildet werden. Kosten und Erlöse von fallunabhängigen GWL werden ebenfalls auf einem separaten GWL-Kostenträger abgebildet.
-	Aus technischer Sicht ist es möglich, von den Vorgaben von REKOLE® abzuweichen. Die Kosten und Erlöse der fallbezogenen GWL könnten auch auf einem eigenen Kostenträger (Typ KTR 700-799) erfasst werden. Dies liegt im Ermessen des Kantons. Wichtig ist in diesem Fall, dass die Kosten und Erlöse für die OKP-Leistungen trotzdem auf dem Fall erfasst werden (Typ KTR = 1).-->
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
ITAR_K® kann sowohl auf Unternehmens als auch auf Standort-Ebene ausgefüllt werden. Was wird in SpiGes verlangt? Liegt die Entscheidung dazu bei den Kantonen?
{{<collapsibleBlock groupId="ITARK">}}
{{<markdown>}}

-	ITAR_K® wird immer auf der Ebene BURGESV ausgefüllt, diese Ebene muss mit der Erhebung der KS übereinstimmen. Die Informationen dazu liefert der Kanton in der Erhebung der Grundgesamtheit an das BFS. Insofern hat der Kanton einen Einfluss. Er muss sich aber mit dem Spital absprechen.
-	ITAR_K® stellt das Grundinstrument für die Verhandlungen der Spitäler mit den Versicherern dar. Ob dabei der Kanton bezüglich Granularität mitbestimmt, ist abhängig davon ob es sich um ein Listenspital, ein Vertragsspital oder ein Ausstandspital handelt.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ab wann wird das ITAR_K® ab der SpiGes Plattform generiert werden?
{{<collapsibleBlock groupId="ITARK">}}
Das zentrale Instrument für Tarifierung und Wirtschaftlichkeitsprüfung soll in Zukunft durch SpiGes erstellt werden. Um einen sicheren Übergang sowie die Korrektheit zu gewährleisten, ist ein Parallelbetrieb der alten und neuen Plattform (H+ resp. SpiGes) zur Erstellung von ITAR_K® vorgesehen. Im Jahr 2025 (Daten 2024) werden die offiziellen ITAR_K® noch wie bisher von der H+-Plattform erstellt. Ab September 2025 erhalten alle Spitäler zudem die Möglichkeit, die ITAR_K® 2025 (Daten 2024) über SpiGes zu erstellen und die beiden Resultate zu vergleichen. So können allfällige Unklarheiten noch vor der produktiven Einführung der ITAR_K® -Erstellung über SpiGes im Jahr 2026 (Daten 2025) ausgeräumt werden.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Was ist, wenn der Fall noch nicht abgerechnet ist, dann fehlen die Informationen aus den Rechnungsdaten bezüglich CM und Zusatzentgelte?
{{<collapsibleBlock groupId="ITARK">}}
In ITAR_K® werden die Grouper-Ergebnisse für diese Informationen verwendet. Nur für die  Beträge der unbewerteten Zusatzentgelte werden die Rechnungsdaten herangezogen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Beim Herunterladen von ITAR_K® sind die Zellen für Nebenbetriebe und Überlieger leer. Warum ?
{{<collapsibleBlock groupId="ITARK">}}
Gemeinsam mit H+ wurde beschlossen, diese Felder vorerst leer zu lassen und von den Spitälern ausfüllen zu lassen. Diese Felder sind lila markiert (ab Version 16 von ITAR_K®), um zu zeigen, dass SpiGes diese Felder nicht ausfüllt.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Warum sind die Kosten für die VKL-Hotellerie (Zeilen 38-40) negativ ?
{{<collapsibleBlock groupId="ITARK">}}
Diese Zeilen werden in ITAR_K® berechnet. Ausserdem erfasst SpiGes keine Details zur VKL-Hotellerie (sondern nur REKOLE), daher müssen diese Beträge von den Spitälern ergänzt werden. Sobald die Zeilen ausgefüllt sind, sind die Beträge positiv und korrekt.  
{{<markdown>}}

- Grün: wird von SpiGes ausgefüllt  
- Lila: wird vom Spital ausgefüllt
{{</markdown>}}
{{<insertImage image="itark_hot_ocp_de.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Die Beträge für die in ITAR_K® unbewerteten Zusatzentgelte werden nicht übernommen. Wie muss vorgegangen werden, damit SpiGes diese übernehmen kann ?
{{<collapsibleBlock groupId="ITARK">}}
SpiGes übernimmt die Angaben aus der Rechnung. Um die Verbindung herzustellen, verwendet SpiGes zwei Dinge: rech_tariftyp 11-21-31, was den Zusatzvergütungen gemäss ForumDatenaustausch entspricht, und den Code für die Zusatzentgelte unter rech_tarifcode.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Die Spaltennamen für die vom Spital im ambulanten Bereich festgelegten Tarife werden in ITAR_K® nicht übernommen. Warum ?
{{<collapsibleBlock groupId="ITARK">}}
SpiGes enthält mehr KTR_TYP als in ITAR_K® für diese Tarife erforderlich. Die Unterscheidung zwischen KVG, Zusatzversicherung und Selbstzahler wird in ITAR_K® nicht mehr getroffen. Wie im Entscheidungsbaum angegeben, sind diese Spalten in ITAR_K® wie folgt definiert:
{{<markdown>}}
|ITAR_K®-Spalte|KTR_TYP|
|--------|--------|
|übrige ambulante Tarife|371,372,373|
|übrige ambulante Tarife|374,375,376|
|übrige ambulante Tarife|377,378,379|
|übrige ambulante Tarife|380,381,382,402|
{{</markdown>}}  
Wenn in der KTR_BESCHR eine Unterscheidung getroffen wird, erscheint in SpiGes eine Fehlermeldung, die darauf hinweist. Wenn die KTR_BESCHR für eine ITAR_K®-Spalte nicht identisch ist, kann SpiGes nicht entscheiden, welche korrekt ist.  
{{<lineBreak>}}
{{<insertImage image="itark_erreur_tarifambu_de.png" class="edge max-w-90">}}  
{{<lineBreak>}}
SpiGes weist Sie jedoch darauf hin, dass Sie diesen Spaltennamen manuell ergänzen müssen:  
{{<lineBreak>}}
{{<insertImage image="itark_tarifambu.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
