---
title: Adaptations du contenu
slug: inhaltliche_anpassungen
description: " "
weight: 20
type: docs
keywords: []
---

{{<alert color="info">}}
Die Dokumentation befindet sich im Aufbau.
{{</alert>}}

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

