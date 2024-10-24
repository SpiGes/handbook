---
title: Zweitsicherheitsfaktor
slug: second_fact
description: "In diesem Kapitel finden Sie alle Möglichkeiten, die Sie als Zweitsicherheitsfaktor haben."
keywords: []
weight: 20
type: docs
---

Loggen Sie sich mit Ihrem CH-LOGIN in {{<link url="https://www.myaccount.eiam.admin.ch/" newTab="true">}}MyAccount{{</link>}} ein und gehen Sie dann auf die Registerkarte "Login & Sicherheit". Unten auf dieser Registerkarte finden Sie den Abschnitt "Verwaltung der Zwei-Faktor-Authentifizierung".

{{<alert color="info">}}
{{<markdown>}}
Für die Verwendung von SpiGes ist es notwendig, einen zweiten Faktor einzustellen, der als stark eingestuft wird.

- Wenn Sie bereits einen nicht verifizierten zweiten Faktor auf Ihrem CH-LOGIN haben, können Sie diesen entfernen.
- Wenn Sie bereits einen zweiten Faktor haben, der bereits verifiziert ist, muss dieser zu den nächsten zweiten Faktoren gehören, ansonsten müssen Sie ihn entfernen:
    - Der Passkey FIDO
    - Die MobileID
    - Vasco Digipass
{{</markdown>}}
{{</alert>}}

eIAM bietet mehrere Zweitsicherheitsfaktoren an, aber nur zwei davon werden als stark eingestuft (im Gegensatz zur Krankenhausstatistik (KS) benötigen Sie für die Verwendung von SpiGes einen starken Zweitsicherheitsfaktor):

1. Der FIDO-Passkey
    - Windows Hello
    - Physischer Sicherheitsschlüssel (FIDO Token).
2. Die MobileID

{{<alert color="warning">}}
{{<markdown>}}
Sie dürfen **keinen** anderen Zweitfaktor als die oben genannten verifizieren. Wenn ein anderer Zweitfaktor verwendet wird, kann man sich nicht in die SpiGes-Anwendung einloggen.
{{</markdown>}}
{{</alert>}}

Idealerweise verwenden Sie Windows Hello auf dem Computer.
Wenn dies nicht möglich ist, verwenden Sie entweder die MobileID oder einen physischen Sicherheitsschlüssel.

**Jeder Zugriff auf die SpiGes-Plattform muss von einem Computer aus erfolgen**.

Benutzer der Kantone, die **bereits einen verifizierten Vasco Digipass** (für SOMED/Spitex) haben, können diesen derzeit als Zweitfaktor für SpiGes verwenden.

Personen, **die keinen Vasco Digipass** haben, müssen einen FIDO Passkey oder Mobile ID verwenden.
