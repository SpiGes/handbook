---
title: Abschlussprozess
slug: abschlussprozess
description: "Auf dieser Seite finden Sie den Ablauf des Unternehmensabschlusses sowie die Möglichkeiten, einen Abschlussprozess abzubrechen oder zu erzwingen."
weight: 75
type: docs
keywords: []
---

Detaillierte Anleitungen: [Unternehmensuser](unternehmensuser/index.md), [kantonale User](kantonale-user/index.md) und [BFS User](bfs-user/index.md).

## Ablauf des Abschlussprozesses

{{<insertImage image="abschlussprozess-01.png" class="edge max-w-90">}}

## Abschlussprozess abbrechen

{{<insertImage image="abschlussprozess-abbrechen.png" class="edge max-w-90">}}

Um allfällige Datenfehler zu korrigieren, kann es in seltenen Fällen vorkommen, dass der Abschluss abgebrochen werden muss, um den Upload wieder zu aktivieren. Abbrechen kann jede Stufe, solange noch kein User der darüberliegenden Stufe bereits abgeschlossen hat. Falls ein Unternehmen nochmals hochladen muss und der Kanton bereits abgeschlossen hat, kann der Kanton via erhebungsbezogenem Chat benachrichtigt werden. Dieser Chat bleibt offen, auch während des Abschlussprozesses. Das Kommentieren von Einzelfällen wird hingegen deaktiviert, sobald der Abschlussprozess startet.

Der Abbruch setzt den gesamten Abschlussprozess zurück. Sämtliche bereits erfassten Kommentare und allfällige bereits ausgefüllte Benchmarking-Fragen bleiben dabei erhalten.

## Abschluss erzwingen

{{<insertImage image="abschluss-erzwingen.png" class="edge max-w-90">}}

Das Erzwingen eines Abschlusses sollte eine Ausnahme darstellen und nur geschehen, wenn die zuständigen Personen auf Aufforderungen, selbst abzuschliessen, nicht reagieren. Die drei Benutzertypen statistischer kantonaler User, administrativer kantonaler User und BFS-Superuser können einen Abschluss erzwingen. Dabei setzt das System die darunterliegende Stufe auf «Akzeptiert» und schliesst sie gemäss dem oben dargestellten Prozess ab.

Der Abschluss kann vom Unternehmensuser erst gestartet werden, wenn das Unternehmen alle notwendigen Erhebungsteile geliefert hat und der Kanton die Plausibilisierung abgeschlossen hat. Dann wechselt das Unternehmen in der Spalte Abschluss den Zustand von «Offen» zu «Bereit».

Die Prüfprotokolle werden pro Spital (BURGESV) erstellt und akzeptiert. Falls ein Unternehmen aus mehreren Spitälern besteht, müssen zuerst alle Prüfprotokolle akzeptiert werden, bevor das gesamte Unternehmen abgeschlossen und somit für die nächste Stufe – Kanton oder BFS – abschliessbar wird.

Aktiv am Abschlussprozess beteiligt sind die Rollen `SP_ErhV_Unternehmen`, `KT_ErhV(stat_Abschlussuser)`, `KT_Admin_Abschlussuser` und `BFS_Superuser`. Der `KT_SuperUser` hat nur Leseberechtigung.
