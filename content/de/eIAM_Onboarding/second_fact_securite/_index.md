---
title: Zweitfaktoren
slug: second_fact
description: "In diesem Kapitel finden Sie alle Möglichkeiten, die Sie als Zweitfaktor haben."
keywords: []
weight: 20
type: docs
---

eIAM bietet mehrere Zweitsicherheitsfaktoren an, aber nur zwei davon werden als stark eingestuft (Im Gegensatz zur Krankenhausstatistik benötigen Sie für die Verwendung von SpiGes einen starken Zweitsicherheitsfaktor):
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

Benutzer der Kantone, die **bereits einen verifizierten Vasco Digipass** (für SOMED/Spitex) haben, müssen diesen derzeit als Zweitfaktor für SpiGes verwenden.

Personen, **die keinen Vasco Digipass** haben, müssen einen FIDO Passkey oder Mobile ID verwenden.
