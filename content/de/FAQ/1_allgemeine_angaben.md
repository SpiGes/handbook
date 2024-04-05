---
title: Allgemeine Angaben 
slug: allgemeine_angaben
description: " "
weight: 10
type: docs
keywords: []
---

{{<alert color="info">}}
Die Dokumentation befindet sich im Aufbau.
{{</alert>}}

## Rollen und Stakeholder

{{<collapsible title="Wen kontaktiert das Spital, wenn es inhaltliche Fragen betreffend der SpiGes Erhebung hat?">}}
Bei fachlichen oder technischen Fragen zur SpiGes wendet sich das Spital primär an seine zuständige kantonale Erhebungsstelle.
{{</collapsible>}}

{{<collapsible title="Wie sieht die Rolle der Kantone, insbesondere der kantonalen Erhebungspartner, zukünftig aus?">}}
<ul>
	<li> Die kantonalen Erhebungsstellen wirken bei der BFS Erhebung mit wie bisher (Grundgesamtheit, Koordination und Kommunikation Spital, Mahnwesen usw.). </li>
	<li> Das zuständige kantonale Gesundheitsamt gibt neu Ende Juli die Daten der Spitalunternehmen auf ihrem Hoheitsgebiet für die Nutzung nach KVG auf der SpiGes Plattform frei. </li>
</ul>
{{</collapsible>}}

{{<collapsible title="Es gibt in SpiGes freiwillige Variablen, welche gemäss Vorgabe des Kantons ausgefüllt werden können. Bis wann muss der Kanton den Betrieben bzw. dem BFS mitteilen, welche Variablen ausgefüllt werden sollen. Ist der Kanton hier frei in der Entscheidung, welche freiwilligen Elemente ausgefüllt werden müssen?">}}
Die Kantone teilen ihren Spitälern die Bereitstellung der freiwilligen Variablen (z. B. op_gln) früh genug mit, damit diese ab den Daten 2024 im Spitalsystem erfasst werden. Der Kanton beschliesst gemäss seinen Vorgaben im Gesundheitsbereich, welche bei diesen Variablen spezifischer als die nationalen Vorgaben sein können.
{{</collapsible>}}

{{<collapsible title="Die Spitäler wünschen sich eine Informationsveranstaltung, damit sie einen besseren Überblick über die bevorstehenden Anforderungen erhalten. Ist eine solche vom BFS geplant?">}}
Das BFS hat bereits 4 Infoveranstaltungen für ein breites Publikum durchgeführt, hier haben auch einige Spitäler teilgenommen. H+ hat seine Spitäler jeweils darüber informiert. Da zum jetzigen Zeitpunkt nicht mehr konzeptuelle Fragen, sondern sehr spezifische Themen auftauchen, sieht das BFS einen solchen Grossanlass nicht als das geeignete Instrument an. Das BFS sammelt die eingegangenen Fragen und wird die FAQ auf der SpiGes Webseite hochschalten.
{{</collapsible>}}

{{<collapsible title="Können künftig auch die Anforderungen des ANQ mit dem XML-File erfüllt werden?">}}
Das BFS ist mit dem ANQ in Kontakt, um die SpiGes Variablen und Formate abzugleichen.
{{</collapsible>}}

{{<collapsible title="Können Sie mir die gesetzliche Grundlage nennen, die die Krankenhäuser verpflichtet, die Statistik zu übermitteln?">}}
Gemäss Art. 23 des Bundesgesetzes vom 18. März 1994 über die Krankenversicherung (KVG; SR 832.10), Art. 6 Abs. 4 des Bundesstatistikgesetzes vom 9. Oktober 1992 (BStatG; SR 431.01), Art. 6 Abs. 1 der Verordnung vom 30. Juni 1993 über die Durchführung von statistischen Erhebungen des Bundes (SR 431. 012.1) und den Bestimmungen über die Krankenhausstatistik und der Medizinischen Statistik im Anhang der genannten Verordnung sind alle Krankenhäuser verpflichtet, dem Bundesamt für Statistik die erforderlichen Daten in der vorgeschriebenen Form und innerhalb der festgesetzten Frist zu liefern.
{{</collapsible>}}

## Inhaltliche Anpassungen

{{<collapsible title="Welche Variablen ändern sich mit SpiGes?">}}
<ul>
<li> SpiGes hat vor allem grössere Auswirkungen auf den Prozess der Datenprüfung und das Datenformat der Lieferung. Bei den medizinischen Angaben (heutige MS) ändern sich nur wenige Punkte. Die wichtigsten dürften für Sie die folgenden sein:
<ul>
<li>	Die Hauptbehandlung wird abgeschafft. </li>
<li>	Der Zusatz zur Hauptdiagnose wird abgeschafft. </li>
<li>	Diagnosen und Behandlungen können neu in unbegrenzter Zahl erfasst werden. </li>
<li>	Die chirurgische Leistungszeit wird bei operativen Prozeduren erfasst. </li>
<li>	Der Behandlungsbeginn muss bei operativen Prozeduren mit der Uhrzeit (der Operation insgesamt) erfasst werden.  </li>
<li>	Der Bezug zwischen mehreren Diagnosen (Kreuz/Stern, Ausrufezeichen) wird neu mit einer Bezugsvariable (diagnose_zusatz) anstelle des Sonderzeichens erfasst. </li>
</ul>
</li>

<li> Alle Änderungen am Datensatz sowie die genauen Details können Sie am besten nachvollziehen, wenn Sie die Variablenliste zur Hand nehmen und die Spalte «Neu/MS-Variable» filtern nach neuen und angepassten Variablen. </li>

<li> Neu werden Rechnungsdaten und Kosten, resp. Erlöse pro Fall erhoben. </li>

<li> Hier finden Sie den kompletten Datensatz:  <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html </a>
</li>
</ul>
{{</collapsible>}}

{{<collapsible title="Welche Auswirkungen hat SpiGes auf die Kodierrichtlinien?">}}
Diese Informationen finden Sie im Kodierungshandbuch. Dieses ist unter dem folgenden Link herunterladbar: <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medkk.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medkk.html </a>
{{</collapsible>}}

{{<collapsible title="Was ist der Inhalt des nationalen Prüfprotokolls?">}}
Der genaue Inhalt des Prüfprotokolls hängt von den Prüfungen ab, welche aktuell mit einer Arbeitsgruppe mit allen Stakeholdern erarbeitet werden. Im Wesentlichen umfasst das Prüfprotokoll die Prüfungen, welche angeschlagen haben sowie die offiziellen Begründungen zu diesen Prüfungen (ein Auszug aus dem Chat zur Prüfung).
{{</collapsible>}}

{{<collapsible title="Die Pilotspitäler werden bereits im Frühjahr 2024 einen ersten «Datensatz» erstellen können. Andere Kantone stellen die Anforderung, bis September ein erstes XML-Datenfile abzugeben. Werden bei diesen Abgaben Echtdaten aus einem Produktivsystem erwartet, oder reichen Testdaten aus einem Testsystem aus? Anders gefragt: Beginnt die «richtige» Auswertung erst mit dem Jahre 2025, oder will das BFS auch schon Echtdaten aus 2024 auswerten?">}}
<ul>
<li>	Für den Pilot im Frühjahr 2024 werden von den Pilotspitälern Echtdaten aus einem Produktivsystem erwartet. Diese werden nur analysiert, um Erkenntnisse über den Pilot zu gewinnen. </li>
<li>	Per August 2024 müssen alle Spitäler (in allen Kantonen) einen Schnittstellentest durchführen, um zu zeigen, dass die technische Umsetzung der Schnittstelle funktioniert. Dafür genügen Teillieferungen auch aus Testsystemen. </li>
<li>	Ab dem 1.1. 2025 müssen alle Spitäler Echtdaten des Jahres 2024 aus den Produktivsystemen liefern und diese bis Ende April vollständig prüfen und ggf. begründen. </li>
</ul>
{{</collapsible>}}

{{<collapsible title="Vertauschte Werte: Uns ist aufgefallen, dass bei ein paar Variablen die Werte anders gegenüber der MS-Statistik sind. Als Beispiel gibt es hier den Vitalwert. MS-Statistik: 0 = totgeboren und 1 = lebendgeboren. Spiges (genau andersrum): 0 = Lebendgeburt und 1 = Totgeburt. Andere Beispiele wären hier die Schulbildung oder der Zivilstand. Das ist aus unserer Sicht nicht optimal und wir würden gerne wissen, ob dies beabsichtigt ist, und wenn ja, warum?">}}
Das ist beabsichtigt. Im Sinne des once only haben wir die Codelisten und Metadaten in ein BFS System integriert, welches dann auch veröffentlicht wird. Die neuen Codelisten entsprechen jetzt dem schweizweiten Standard der Interoperabilitätsplattform i14y.admin.ch, vorher war es eine MS Sonderlösung.
{{</collapsible>}}

{{<collapsible title="Berechnete Werte: In der Variablenliste gibt es einige Zeilen die «ausgegraut» sind mit der Bemerkung «berechnet» (Beispiel uid). Heisst das, wir liefern sie im XML leer mit und das BFS wird diese berechnen und eintragen? Oder liefern wir diese Werte gar nicht mit und ignorieren sie? ">}}
Wie Sie dem XML Schema entnehmen können, sind diese berechneten Variablen nicht enthalten. Sie können diese ignorieren.
{{</collapsible>}}

## Grundgesamtheit und Erhebungseinheiten

{{<collapsible title="Wird bei der Einführung von SpiGes bzw. zum Zeitpunkt der Definition der Grundgesamtheit für die erste SpiGes-Erhebung noch mit den herkömmlichen «Spitallisten» oder bereits mit SpiReg gearbeitet?">}}
<ul>
<li>	Bei der ersten SpiGes Erhebung (Daten 2024) im Jahre 2025 wird noch manuell die Grundgesamtheit KS in Form von Excellisten importiert. </li>
<li>	Die bisherige BUR wird BURGESV heissen und der Identifikator des Spitals bleiben. Die Standort-BUR heisst ab den Daten 2024 (Erhebung 2025) BUR. </li>
</ul>
{{</collapsible>}}


{{<collapsible title="Was ist der Unterschied zwischen einem Spitalunternehmen, einem Spital und einem Spitalstandort?">}}
<ul>
<li>	Ein Spitalunternehmen, ist ein Unternehmen mit dem NOGA-Code 861001 (Allgemeine Krankenhäuser), 861002 (Spezialkliniken) oder 869004 (Geburtshäuser). Es ist mit der Identifikationsnummer ENTID eindeutig bezeichnet. </li>
<li>	Das Spital ist in der SpiGes Erhebung eine Einheit, welche ein ITAR-K ausfüllt und nach der sich die Falldefinition der SwissDRG AG richtet. Ein Spital ist mit der BUR-Nr. GESV gekennzeichnet, welche nur auf der Datenbank von GESV geführt wird. </li>
<li>	Ein Spitalstandort ist mit der BUR-Nr. eindeutig gekennzeichnet und gehört immer zu genau einem Spitalunternehmen. </li>
</ul>
Folgende Tabelle zeigt als Beispiel ein Unternehmen (UID/ENTID) mit 12 Spitälern (BURGESV) und 14 Standorten (BUR) :
{{<insertImage image="tableauFAQ1.png"  class="taille">}}
{{</collapsible>}}

{{<collapsible title="Welche Begriffe werden in der SpiGes Erhebung synonym für Spitalunternehmen, Spital und Spitalstandort verwendet?">}}
<table style="width:100%">
  <tr>
    <th style="width:50%"> Ebene </div></th>
    <th> Begriffe synonym </th>
  </tr>
  <tr>
    <td> <p> <b> Spitalunternehmen </b> </p>
	<p> Juristische Einheit </p>
 </td>
    <td> (Spital-)Unternehmen </td>
  </tr>
  <tr>
    <td> <b> Spital </b> (gemäss Angabe Kanton, Erhebung MS/KS, Falldefinition) </td>
    <td> Spital, Klinik, (Spital-)Betrieb </td>
  </tr>
  <tr>
    <td> <p> <b> Spitalstandort </b> </p>
	<p> lokale Einheit </p> </td>
    <td> (Spital-)Standort </td>
  </tr>
</table>
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}

{{<collapsible title="question">}}
Réponse
{{</collapsible>}}