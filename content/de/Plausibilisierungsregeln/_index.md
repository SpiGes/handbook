---
title: Plausibilisierungsregeln
slug: Plausibilisierungsregeln
description: "Auf dieser Seite können Sie die aktuellste Version der SpiGes Plausibilisierungsregeln herunterladen"
weight: 50
type: docs
keywords: []
---
## Konfiguration von Plausibilisierungsregeln

Sie können die Prüfungsregeln in Form einer CSV Datei herunterladen. Es sind alle Einzelfallprüfungen darin enthalten.

[Herunterladen der Datei: Rules_PRD](https://github.com/SpiGes/Rules-PRD/releases/latest/download/Rules_PRD.csv)

Die Berechnung der Kennzahlen finden Sie in der folgenden CSV Datei.
Die Datei enthält alle Schritte, die zur Ermittlung der Kennzahlen erforderlich sind.

[Herunterladen der Datei: Kennzahlen](https://github.com/SpiGes/kennzahlen/releases/latest/download/Kennzahlen-PRD.xlsx)

{{<markdown>}}
- Die Aktivitäten und Tarifsysteme werden anhand des Tarifs definiert:
|Aktivität|Tarif|Tarifsystem|Tarif|
|---------|---------|---------|---------|
|Akut|1,2|SwissDRG|1|
|Psychiatrie|5,6|TARPSY|5|
|Rehabilitation|3,4|ST Reha|3|
- Der Begriff AUSTRITTE gilt nur für A-Fälle. Der Begriff FÄLLE gilt für alle Fälle (A, B, C).
- Die Pflegetage (LOS), der CMI/DMI und die SwissDRG-Flags werden anhand der aus dem SwissDRG-Grouper gesammelten Daten berechnet. Wenn Fälle nicht gruppiert werden konnten, fehlen sie im Ergebnis des Betriebs. Zudem werden sie in einer Einzelfallprüfung angezeigt.
- Die Kosten und Erlöse pro Fall werden derzeit auf einfache Weise ermittelt: Gesamtkosten / Austritte resp. Gesamterlöse / Austritte.
- Für die Kostenberechnungen werden, sofern nicht anders angegeben, die ANK gemäss VKL berücksichtigt. In der Regel handelt es sich um Zeitrechnung, bei der die Kosten für B/C-Patienten des Vorjahres abgezogen werden. Handelt es sich um Stückrechnung(Gesamtkosten der im Laufe des Jahres entlassenen Patienten), wird dies angegeben. Wurden keine Kosten für B/C-Fälle angegeben, wird der Wert 0 berücksichtigt und das Ergebnis entspricht die Stückrechnung.
{{</markdown>}}