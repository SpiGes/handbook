---
title: Admninistratives 
slug: admninistratives
description: " "
weight: 10
type: docs
keywords: []
---

{{<collapsible title="Werden im SpiGes-Datensatz die Fallklammer-Fälle (=zusammengeführter Fall) erwartet? ANQ erwartet im Bereich der Psychiatrie einen Datensatz mit den Einzelfällen, also nicht zusammengeführte Fälle. Gibt es bereits einen Austausch zwischen Ihnen und ANQ, bzgl. Nutzung des SpiGes-Datensatzes?">}}
Die Fallzusammenführung wird in SpiGes gemäss den Richtlinien der SwissDRG AG gehandhabt. Wir sind mit dem ANQ im Austausch bezüglich der Handhabung der nicht zusammengeführten Fälle.
{{</collapsible>}}

{{<collapsible title="fall_id_ch: Wer generiert diese Fallnummer und wird diese automatisch in Opale (IRP-System) hinterlegt? Bisher konnten wir die Fallidentifikation in beiden Dateien (BFS-Daten und Fallkostendatei) automatisch in Opale generieren.">}}
<ul>
<li> Die schweizweit eindeutige Fallnummer wird durch die SpiGes-Plattform generiert. Bei einem Datenexport aus der Plattform steht diese fall_id_ch den Datennutzern zur Verfügung. </li>
<li> Der Identifikator des Falls, die Variable fall_id wird durch die Spitäler generiert. Die Spitalsoftware (wie z.B. Opale) sollte weiterhin über diese Funktion verfügen. </li>
</ul>
{{</collapsible>}}

{{<collapsible title="Es gibt Variablen (z.B. beatmung), wo im Zeitbezug «ganzer Fall» oder «Erhebungsjahr» steht. In den meisten Spitälern wird diese Position aber nicht auf der Zeitachse geführt, sondern einmalig auf dem Fall. Auch im bisherigen MS-Datensatz wurden solche Positionen immer nur für A-Fälle geliefert. Wie stellen Sie sich eine Lieferung von B/C-Fällen für diese Variablen vor?">}}
Tatsächlich sind die Definitionen in diesem Aspekt vielleicht noch nicht für alle Variablen ganz detailscharf. Bis heute war es nicht festgelegt, ob diese Variablen für die B und C Fälle geliefert werden müssen. Grundsätzlich sollte es möglich sein, die Angaben zu liefern, nur so ist es mit den Daten möglich, Auslastungen zu berechnen. Allerdings dürfte es vielen Spitälern wie Ihnen gehen, dass Sie die Angaben für B und C-Fälle nicht haben. In diesem Fall können die Variablen für die B und C-Fälle leer gelassen werden.
{{</collapsible>}}

{{<collapsible title="Wie ist der «interne Übertritt» definiert?">}}
<ul>
<li>	Übertritt von einem Bereich (Akut, Psychiatrie, Rehabilitation) in einen anderen Bereich desselben Spitals (burnr_gesv) </li>
<li>	oder für die sogenannten Wartepatienten/-patientinnen </li>
</ul>
{{</collapsible>}}

{{<collapsible title="Ist es möglich, eine Definition für den Wert «7 = Repatriierung» zu erhalten?">}}
Rückführung eines Patienten oder einer Patientin mit Schweizer Pass aus dem Ausland in die Schweiz, ohne spezielle Anforderungen an Transportmittel oder Begleitung.
{{</collapsible>}}

{{<collapsible title="Wie ist eine «Verlegung» definiert? (z.B. die Codes «5 = Verlegung innerhalb 24 Std.» und «6 = Rückverlegung» der Variable Eintrittsart)">}}
<ul>
<li>	Die Variable Eintrittsart existiert bereits in der MS und hat sich mit SpiGes auch nicht verändert. Eine Verlegung grenzt sich vom internen Übertritt dadurch ab, dass diese nicht im gleichen Spital (BURGESV) geschieht, sondern spitalübergreifend (zwei unterschiedliche BURGESV). Die Definition richtet sich nach den Grundsätzen der SwissDRG AG, welche Sie hier finden: <a href="https://www.swissdrg.org/application/files/7416/7051/1936/Klarstellungen_und_Fallbeispiele_zu_den_Anwendungsregeln_Version_4.7.pdf"> https://www.swissdrg.org/application/files/7416/7051/1936/Klarstellungen_und_Fallbeispiele_zu_den_Anwendungsregeln_Version_4.7.pdf </a> </li>
<li>	Bei der Eintrittsart «6=Rückverlegung» wurde von der SwissDRG AG folgende Spezifizierung kommuniziert: Bei ununterbrochenem Spitalaufenthalt in einem anderen Spital von mehr als 18 Tagen und Rückkehr in das ursprüngliche Spital </li>
</ul>
{{</collapsible>}}

{{<collapsible title="Wie werden Fälle, die von der Rehabilitation (Tarif ST-REHA) in die Langzeitpflege (Tarif «Pflegetaxe») des gleichen Betriebs übergehen codiert? Die Variablen 1.2.V02 und 1.5.V03 erlauben uns nicht, «Langzeitpflege, gleicher Betrieb» anzugeben.">}}
Dies war bereits bei der MS so; der Fall wechselt von Rehabilitation zu SOMED (gleicher Betrieb); bei Code 2 sind beide Möglichkeiten enthalten (gleicher Betrieb oder anderer Betrieb). Der Fall muss wie folgt kodiert werden: <br />
austritt_aufenthalt: 2 = Krankenheim, Pflegeheim <br />
eintritt_aufenthalt: 84 = Rehabilitations-abteilung/-klinik, gleicher Betrieb  
{{</collapsible>}}

## Variable "Wohnland"

{{<collapsible title="In der Variablenbeschreibung ist eine separate Einteilung der aussereuropäischen Länder in Regionen erwähnt. Existiert diese Liste bereits oder wird sie noch veröffentlicht?">}}
<ul>
<li> Das Vorgehen und die Liste ist gleich geblieben wie bei der MS. Anbei der Link zur Liste: <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medsreg.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medsreg.html </a> </li>
<li>	Für die aussereuropäischen Länder können Regionen erfasst werden, es können aber auch die Ländercodes angegeben werden. Dies ist bereits in der MS so und hat sich nicht geändert. Das Format ist alphanumerisch und kann somit sowohl Zahlen wie Buchstaben enthalten. </li>
</ul>
{{</collapsible>}}

### Variable "versicherungsklasse"

{{<collapsible title="Im Variablenbeschrieb steht, dass man es für alle angeben muss, ausser Selbstzahler. Im xsd. Ist das Feld jedoch «required». Was sollen wir dann bei Selbstzahlern liefern?">}}
Das ist tatsächlich etwas widersprüchlich formuliert. Damit hier keine Missings vorhanden sind, wurde required vorausgesetzt. Dann betrifft es natürlich auch die Selbstzahler, welche mit 9=unbekannt codiert werden.
{{</collapsible>}}

{{<collapsible title="Gemäss unserer Patientenadministration wird es schwierig für die Fälle mit einer «Flex-Versicherung», die Information zu gewinnen und mit «8 = andere» zu hinterlegen. Gibt es bei den Auswertungen später ein Problem bzw. welche Auswirkungen ergeben sich auf die Statistik, wenn wir «8=andere» nicht angeben (können)?">}}
<ul>
<li>	Die Flex-Fälle und alle anderen Versicherungsmodelle, die immer populärer werden, sind wirklich nicht ganz einfach abzubilden. Bei der Versicherungsklasse ist das eine Herausforderung aber nicht weiter dramatisch für die Statistik. Im Zweifelsfall sollten diese Fälle als Halbprivat abgebildet werden. </li>
<li>	Die Variable «liegeklasse» ist hingegen zentral für die Abbildung des ITAR_K. Da gibt es auch keine Kategorie «andere» und Fälle mit «unbekannt» werden wir genau prüfen. Je nach Ausprägung dieser Variable, werden die Fälle in ITAR_K einer anderen Spalte zugeordnet.  </li>
</ul>
{{</collapsible>}}
