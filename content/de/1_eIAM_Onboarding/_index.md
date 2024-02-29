---
title: eIAM Onboarding Prozess
slug: onboarding
description: 'Auf dieser Seite finden Sie alle Informationen, die Sie für die Anmeldung bei der SpiGes-Plattform benötigen.'
keywords: []
weight: 10
type: docs
---

{{<alert color="info">}}
Die Dokumentation befindet sich im Aufbau.
{{</alert>}}

In diesem Kapitel finden Sie alle Schritte, die Sie unternehmen müssen, um ein verifiziertes Profil zu erstellen, mit dem Sie sich auf der SpiGes-Plattform einloggen können.

Um ein CH-Login mit einem starken Zweitfaktor mit verifizierter Identität für SpiGes zu erstellen, sind folgende Schritte nötig:

1.	CH-Login erstellen
2.	Mobile ID aktivieren
3.	Mobile ID als Zweitfaktor dem CH-Login hinzufügen
4.	Die Identität auf dem Zweitfaktor (Mobile ID oder FIDO2-Key) verifizieren
5.	Verknüpfen (Onboarding) des eingerichteten CH-Login mit eSOSTAT

Diese Schritte werden auf den folgenden Seiten erläutert. Wenn Sie bereits über einen CH-Login oder eine Mobile ID verfügen, müssen Sie keinen neuen erstellen und können den entsprechenden Schritt überspringen. Verifizieren Sie sich jedoch, dass Ihr CH-Login oder Ihre Mobile ID funktionieren.

Wir empfehlen Ihnen, zunächst diese Anleitungsseiten zu lesen, bevor Sie versuchen, Ihren neuen sicheren Zugang einzurichten.

## Funktionsweise von eIAM
eIAM ist ein zentrales Zugangs- und Autorisierungssystem der Bundesverwaltung für Webanwendungen. Vereinfacht gesagt ist eIAM die zentrale Zugangsinfrastruktur des Bundes. Sein Ziel ist es, die Einrichtung eines spezifischen Verfahrens für jede Anwendung zu vermeiden. Diese Zentralisierung ermöglicht Einsparungen und die Verwendung der gleichen Zugangsdaten für alle Anwendungen.

Jeder Benutzer, der sich in die SpiGes-Anwendung einloggt, wird automatisch zum eIAM-Portal für das Authentifizierungsverfahren weitergeleitet. Das System wird den Benutzer dann auffordern, seine Anmeldung auf seinem Mobiltelefon zu bestätigen, um sicherzustellen, dass es sich tatsächlich um die richtige Person handelt, die versucht, sich anzumelden.

{{<alert color="warning">}}
Da die Identität des Nutzers überprüft werden muss, sind die Konten in der Anwendung persönlich. Ein Konto kann nicht von mehreren Personen genutzt werden.
{{</alert>}}