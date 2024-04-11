---
title: Behandlungen 
slug: behandlungen
description: " "
weight: 50
type: docs
keywords: []
---

Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="behandlungen">}}

1. Variable «behandlung_id»: Gibt es hier Empfehlungen für die umzusetzende Reihenfolge in der Psychiatrie? Gerade die HoNOS-Items, die als CHOPs geliefert werden, sind ja diagnose- bzw. behandlungsunspezifisch.
{{<collapsibleBlock groupId="behandlungen">}}
<ul>
<li> Gemäss Variablenbeschreibung gilt: <br />
Eindeutige, fortlaufende Nummer der Behandlung. <br />
1 = Behandlung 1 <br />
2 = Behandlung 2 <br />
3 = Behandlung 3 <br />
(…) etc. -> Unbegrenzt <br />
Für die Reihenfolge der Behandlungen sind die folgenden Kriterien empfohlen:
<ol>
<li> Prozeduren zur Behandlung der Hauptdiagnose </li>
<li> Prozeduren zur Behandlung der Nebendiagnosen </li>
<li> Prozeduren zur Bestimmung der Hauptdiagnose </li>
<li> Prozeduren zur Bestimmung der Nebendiagnosen </li>
<li> Weitere Prozeduren </li>
</ol>
</li>
<li>
Für die HoNOS-Items würden wir eine chronologische Nummerierung empfehlen (frühere HoNOS-Messungen = tiefere IDs, spätere HoNOS-Messungen = höhere IDs).
</li>
</ul>
{{</collapsibleBlock>}}

2. Wir sorgen uns etwas, dass insbesondere in der Anfangszeit diese Daten nicht vollständig erfasst werden und es zu vielen Nacharbeiten kommen könnte. Daher würden wir gern bei den betroffenen CHOP-Codes das Feld als Muss-Feld definieren. Gibt es für den CHOP-Katalog eine Zuordnung, welche Codes als Operativ bzw. interventionell gelten?
{{<collapsibleBlock groupId="behandlungen">}}
Das BFS ist sich bewusst, dass bei Einführung dieser neuen Angabe die Daten unvollständig sein werden. Nach der üblichen Konsolidierungsphase wird sich zeigen, welche Präzisierungen nötig sind. Es ist gar nicht möglich, für jeden CHOP-Kode eindeutig zu bestimmen, ob er eine Angabe der Zeit erfordert oder nicht. Es sind andere Merkmale, die hier massgeblich sind: ob die Behandlung in einem Zusammenhang mit der Benützung eines Operationssaals oder eines Herzkatheterlabors steht.
{{</collapsibleBlock>}}

3. Operierende: Hier haben wir ein Verständnisproblem bei der Interpretation der Vorgaben des XML-Files. In der Variablenbeschreibung steht, dass pro Operation maximal zwei Operierende angerechnet werden können. In der Übersicht ist beim Attribut aber nicht zu erkennen, ob dies mehrfach exportiert werden kann.
{{<insertImage image="Image1.jpg" class="bord taille">}}
{{<collapsibleBlock groupId="behandlungen">}}
Wie viele Operateure einer Operation angerechnet werden können, ist eine konzeptuelle Frage und kann von Kanton zu Kanton unterschiedlich sein (in der Regel 2 ist ein Richtwert!). Technisch lassen sich mehrere Operierende erfassen.
{{<insertImage image="Image2.png" class="bord taille">}}
{{</collapsibleBlock>}}
