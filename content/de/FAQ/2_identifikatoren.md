---
title: Identifikatoren 
slug: identifikatoren
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="identifikatoren">}}

{{<numberedList>}}
{{<listItem>}}
Die AHVN ist ein Pflichtfeld. Trotzdem wird es Fälle ohne AHV-Nr. geben. Wo ist beschrieben was in diesem Fall in die Variable kommt?
{{<collapsibleBlock groupId="identifikatoren">}}
Bei unbekannter AHVN richten wir uns nach dem Forum Datenaustausch, welche den Dummy-Wert «7569999999991» verwenden. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Bei der Datenerhebung soll ja die AHVN genutzt werden. Wird die AHVN über die Tarifpartner auch an die Krankenkassen ersichtlich sein werden?
{{<collapsibleBlock groupId="identifikatoren">}}
Bei der Datenübermittlung werden Identifikatoren und Daten separat verschickt. Der Datenkanal ist verschlüsselt. Zur Überprüfung der AHVN wird der «BFS AHVN Validator» eingesetzt. Nachdem die AHVN verschlüsselt worden ist, wird diese auf der gesicherten Identifikatoren Datenbank gespeichert. Während der Bearbeitung der Daten auf der Plattform ist die AHVN somit pseudonymisiert und nicht zusammen mit dem Leistungsdatensatz abgelegt. Die AHVN kann nur verschlüsselt an die Datennutzer weitergegeben werden. Da diese Datennutzer den Schlüssel nicht kennen, ist für diese die AHVN anonymisiert. Ein Rückschluss auf den Originalwert ist nicht möglich.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Hat der Kanton Zugang zum ID-File der Lieferungen?
{{<collapsibleBlock groupId="identifikatoren">}}
Der Kanton kann während der Erhebung zu Plausibilisierungszwecken Daten exportieren, dabei wird die AHVN pseudonymisiert werden.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
