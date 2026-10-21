---
title: Abschlussprozess für kantonale User
slug: kantonaluser
description: "Auf dieser Seite erklären wir Ihnen, wie Sie als kantonaler User den Abschlussprozess auf der SpiGes-Plattform durchführen."
weight: 70
type: docs
keywords: []
---

## Benchmarking-Fragen beantworten, Prüfprotokoll akzeptieren und Unternehmen abschliessen

Am kantonalen Abschluss sind zwei Geschäftsrollen beteiligt. Die Reihenfolge ihrer Abschlüsse spielt keine Rolle: Beide Usertypen können nacheinander oder parallel arbeiten.

### Rollen und Aufgaben

| Geschäftsrolle | Aufgaben |
|---|---|
| `KT_Admin_Abschlussuser` | Benchmarking-Fragen für jedes Spital beantworten und speichern, Prüfprotokoll akzeptieren und Unternehmen abschliessen. |
| `KT_ErhV(stat_Abschlussuser)` | Prüfprotokoll akzeptieren und Unternehmen abschliessen. |

### Benchmarking-Fragen öffnen

Der administrative kantonale User mit der Geschäftsrolle `KT_Admin_Abschlussuser` öffnet in der Abschlussansicht das Aktionsmenü des gewünschten Spitals. Mit einem Klick auf **Benchmarking-Fragen** werden die Fragen für dieses Spital geöffnet. Dieser Schritt ist für alle Spitäler des Unternehmens einzeln durchzuführen.

{{<insertImage image="kanton-01.png" class="edge max-w-90">}}

### Benchmarking-Fragen beantworten und speichern

Für jedes Spital sind die Fragen zu Akutsomatik, Psychiatrie und Rehabilitation zu beantworten. Optional kann zu jeder Antwort ein Kommentar erfasst werden.

{{<insertImage image="kanton-02.png" class="edge max-w-90">}}

Sobald die Fragen für Akutsomatik, Psychiatrie und Rehabilitation beantwortet sind, klicken Sie auf **Speichern**.

{{<insertImage image="kanton-03.png" class="edge max-w-90">}}

Das Unternehmen kann erst abgeschlossen werden, wenn die Benchmarking-Fragen für alle zugehörigen Spitäler vollständig beantwortet und gespeichert wurden.

### Prüfprotokoll akzeptieren

Nach Abschluss der Benchmarking-Fragen kann der administrative kantonale User das Prüfprotokoll akzeptieren. Der statistische kantonale User muss das Prüfprotokoll ebenfalls akzeptieren. Bestätigen Sie den Dialog mit **Ja**. Danach kann ein vorhandener Kommentar zum Prüfprotokoll nicht mehr geändert werden.

{{<insertImage image="kanton-04.png" class="edge max-w-90">}}

### Unternehmen abschliessen

Nach der jeweiligen Akzeptierung des Prüfprotokolls klicken sowohl der administrative als auch der statistische kantonale User auf **Abschliessen**. Bestätigen Sie den Abschlussdialog mit **Ja**.

{{<insertImage image="kanton-05.png" class="edge max-w-90">}}

### Abschluss beim Kanton beendet

Erst wenn beide Rollen das Unternehmen abgeschlossen haben, wechselt der Status zu **Pendent**. Der Rollover-Text zum Status lautet: «Das BFS hat noch nicht abgeschlossen.» Damit ist der kantonale Teil abgeschlossen. Der vollständige Abschluss durch das BFS steht noch aus.
