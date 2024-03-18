---
title: 2. Kontrolle der Daten
slug: daten_kontrole
description: "Auf dieser Seite erklären wir Ihnen, wie Sie die von Ihrer Spitalstandort in die SpiGes-Plattform importierten Daten kontrollieren können."
keywords: []
weight: 30
type: docs
---

{{<alert color="info">}}
Die Dokumentation befindet sich im Aufbau.
{{</alert>}}

{{<alert title="Prüfung an der Quelle" color="info">}}
Idealerweise werden die Daten direkt im Eingabesystem des Spitals geprüft. Dazu stellt das BFS eine automatisierte Lösung für die Integration in die spitaleigene Informatikumgebung bereit. Die Spitalunternehmen haben zudem die Möglichkeit, ihre Daten mit der SpiGes-Plattform während dem Datenjahr zu überprüfen. Da diese Prüfung vor dem regulären Start der Erhebung erfolgt, wird dazu eine Test-Erhebung verwendet.
{{</alert>}}

# Autonome Prüfung

Bei einem Upload werden sämtliche Prüfungen automatisch durchgeführt, deren Ergebnisse gespeichert und dargestellt. Ebenfalls automatisch werden Anreicherungen vorgenommen, um die Daten auch diesbezüglich prüfen zu können.

Der Betrieb bearbeitet die Prüfergebnisse nun autonom und korrigiert die Daten wo möglich. Ist keine Korrektur möglich oder hat die Prüfung zu Unrecht angeschlagen, verfasst der Betrieb auf der Plattform eine Begründung. Weiter kann eine Prüfung auch eine Warnung generieren, die aber nur als Hinweis dient und nicht zwingend begründet oder korrigiert werden muss. Sind alle Fehler korrigiert oder begründet, ist die autonome Prüfung abgeschlossen. Dies muss bis Ende April erfolgen.

## Format Prüfung

{{<insertImage image="test_format.png" class="bord img_full">}}

&nbsp;

1. In dieser Rubrik sehen Sie das Datum und die Uhrzeit des letzten Datenimports.

2. In dieser Rubrik sehen Sie, ob die betreffenden Daten die Formatkontrolltests bestanden haben. Falls ein Fehler aufgetreten ist, können Sie darauf klicken, um die Details des Fehlers anzuzeigen, damit Sie ihn in der XML-Datei korrigieren und erneut importieren können. **ACHTUNG:** Der Import neuer Daten überschreibt die zuvor importierten Daten. 

3. Nachdem die Formatprüfung freigegeben wurde, sehen Sie in dieser Rubrik die Fehler einzelner Fälle, die bearbeitet werden müssen. Sie können auf die gewünschte Kategorie klicken, um sich die Fehler genauer anzusehen. 

4. Hier sehen Sie die Kommentare, die zuvor gepostet wurden. Sie können Kommentare posten, um Ihre Fehler zu begründen oder um auf frühere Kommentare zu antworten. Sie können auch ein neues Diskussionsthema erstellen, indem Sie auf die Sprechblase in der Mitte oben klicken.

## Prüfung Einzelfälle

{{<insertImage image="controle.png" class="bord img_full">}}

&nbsp;

1. Mit dem Filterabschnitt können Sie die Abschnitte sortieren, um schneller zu finden, was Sie suchen.

2. In dieser Rubrik können Sie den Status der einzelnen Abschnitte sehen. 

3. Hier können Sie die Daten herunterladen.

4. Wenn du auf den Pfeil klickst, rollst du den Inhalt der Kategorie aus und kannst dir jeden Fehler ansehen. 

&nbsp;

{{<insertImage image="controle_detail.png" class="bord img_full">}}

&nbsp;

1. In den quadratischen Feldern können Sie mehrere Fehler auswählen.

2. In dieser Rubrik sehen Sie eine Beschreibung des Fehlers. Sie können auch mehr Details sehen, indem Sie auf den Fehler in der Rubrik "Fall-Id" klicken. 

3. In dieser Rubrik können Sie den Status jedes Fehlers sehen.

4. Hier können Sie kommentieren (indem Sie auf das Feld "Sprechblase" klicken) oder die Daten herunterladen (indem Sie auf den Pfeil nach unten klicken). Sie werden auf die Gesamtheit der Fehler einwirken, wenn kein Fehler ausgewählt ist, und ansonsten auf die ausgewählten Fehler. 

5. Sie können auch auf der Ebene des betreffenden Fehlers auf einen einzelnen Fehler einwirken.