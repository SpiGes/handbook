---
title: eIAM Onboarding Prozess
slug: onboarding
description: 'Auf dieser Seite finden Sie alle Informationen, die Sie für die Anmeldung bei der SpiGes-Plattform benötigen.'
keywords: []
weight: 10
type: docs
---

In diesem Kapitel finden Sie alle Schritte, die Sie unternehmen müssen, um ein verifiziertes Profil zu erstellen, mit dem Sie sich auf der SpiGes-Plattform einloggen können.

Um ein CH-Login mit einem starken Zweitfaktor mit verifizierter Identität für SpiGes zu erstellen, sind folgende Schritte nötig:

1.	CH-Login erstellen (mit der geschäftlichen Emailadresse)
2.	Hinzufügen eines starken Zweitfaktors zum CH-Login
3.	Die Identität auf dem starken Zweitfaktor verifizieren
4.	Verknüpfen (Onboarding) des eingerichteten CH-Login mit SpiGes

Diese Schritte werden auf den folgenden Seiten erläutert. Wenn Sie bereits über  ein CH-Login mit Ihrer geschäftlichen E-Mail-Adresse verfügen, müssen Sie kein neues erstellen und können diesen Schritt überspringen. Vergewissern Sie sich jedoch, dass Ihr CH-Login funktioniert. Wenn Sie bereits über einen CH-LOGIN mit Ihrer privaten E-Mail-Adresse verfügen, müssen Sie einen neuen CH-LOGIN mit Ihrer beruflichen E-Mail-Adresse erstellen.

Wir empfehlen Ihnen, zunächst diese Anleitung zu lesen, bevor Sie versuchen, Ihren neuen sicheren Zugang einzurichten.

## Funktionsweise von eIAM

eIAM ist ein zentrales Zugangs- und Autorisierungssystem der Bundesverwaltung für Webanwendungen. Vereinfacht gesagt ist eIAM die zentrale Zugangsinfrastruktur des Bundes. Es ist das Ziel, nicht für jede einzelne Anwendung ein anderes Loginverfahren zu haben. Diese Zentralisierung ermöglicht Einsparungen und die Verwendung der gleichen Zugangsdaten für alle Anwendungen.

Jeder Benutzer, der sich in die SpiGes-Anwendung einloggt, wird automatisch zum eIAM-Portal für das Authentifizierungsverfahren weitergeleitet. Das System wird den Benutzer auffordern, seine Anmeldung auf seinem Mobiltelefon zu bestätigen, um sicherzustellen, dass es sich tatsächlich um die richtige Person handelt, die versucht, sich anzumelden.
{{<alert color="warning">}}
Da die Identität des Nutzers überprüft werden muss, sind die Konten in der Anwendung personalisiert. Ein Konto kann nicht von mehreren Personen genutzt werden.
{{</alert>}}

## Struktur der eIAM Units

Die verschiedenen Benutzer der SpiGes-Plattform sind wie folgt organisiert:

- Kanton
    - Unternehmen
        - Standorte

Ein Kanton enthält ein oder mehrere Unternehmen, die ihrerseits einen oder mehrere Standorte enthalten.

{{<alert color="warning">}}
In einigen Fällen sind der geografische Kanton eines Standorts und der administrative Kanton des Unternehmens nicht identisch.
{{</alert>}}

Beispiel:

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
1. In der Spalte 1 sehen Sie die EntID auf Ebene des Unternehmens und Sie sehen die Bur-Nummer auf Ebene der Standorte.
2. In der Spalte 2 sehen Sie den administrativen (zuständigen) Kanton des Unternehmens / des Krankenhausstandorts.
3. In der Spalte 3 sehen Sie den geografischen Kanton des Unternehmens / des Standorts.

Hier sehen Sie, dass der administrative und der geografische Kanton von Standort 1 nicht identisch sind.
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;
