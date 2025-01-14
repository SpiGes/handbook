---
title: Formatprüfungen und Fehlermeldungen
slug: format_fehlermeldung
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="format_fehlermeldung">}}

{{<numberedList>}}
{{<listItem>}}
Generelle Begriffe, die in den Fehlermeldungen verwendet werden
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<markdown>}}

- Element = Erhebungsteil (z.B. Unternehmen, Standort, Fall usw)
- Attribut = Variable (z.B. ent_id, burnr usw)
{{</markdown>}}
{{<insertImage image="tf1.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Welche Fehler verursachen die Fehlermeldung «interner Serverfehler 500»?
{{<collapsibleBlock groupId="format_fehlermeldung">}}
Beim internen Serverfehler 500 gibt es verschiedene Ursachen, welche Sie hier aufgeführt finden:
{{<markdown>}}

1. Datei leer
2. Datei zu gross
3. Kopfzeile falsch
4. Nicht mit UTF 8 codiert
{{</markdown>}}
{{<lineBreak>}}
{{<markdown>}}
Kopfzeile:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Entreprise 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns="http://www.bfs.admin.ch/xmlns/gvs/spiges-data/1.3" 
    ent_id="xxxxxxx" 
    version="1.3"
>
```

Um zu testen, ob ihr file mit utf 8 codiert wurde, können sie dieses mit notepad oder text editor öffnen. Unten rechts wird das encoding angezeigt.
{{<insertImage image="tf2.png" class="edge max-w-90">}}
{{<lineBreak>}}
Wenn Sie nun das Textfile mit «Speichern unter» speichern wollen, können Sie die Codierung gleich mit ändern. Wählen Sie nun unter Codierung utf-8 aus und speichern Sie das File.
{{<insertImage image="tf3.png" class="edge max-w-90">}}
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Was bedeutet folgende Fehlermeldung?
{{<insertImage image="tf4.png" class="edge max-w-90">}}
{{<collapsibleBlock groupId="format_fehlermeldung">}}
Mit «not declared» ist gemeint, dass die Variable so nicht definiert vorliegt (z.B. Gross/Kleinschreibung bei «Kanton_Zusatzdaten» falsch; missbildung ist keine im Variablenbeschrieb vorkommende Variable usw.).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Fehlermeldungen die anzeigen, dass das Format oder die Ausprägung falsch sind:
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Fehlermeldungen wenn die Erhebungsteile (Elemente) bezüglich Struktur oder Reihenfolge durcheinandergeraten sind:
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf6.png" class="edge max-w-90">}}
{{<lineBreak>}}
Zum Beispiel wird hier das Element Operierende gleichwertig wie Behandlung unter den Fall gelegt.
{{<insertImage image="tf7.png" class="edge max-w-90">}}
{{<lineBreak>}}
Richtigerweise ist das Element Operierende ein child von Behandlung und sollte so strukturiert sein:
{{<insertImage image="tf8.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Formatfehler behandlung_beginn:
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf9.png" class="edge max-w-90">}}
{{<lineBreak>}}
Die Variable ist im XSD wie folgt definiert:
{{<lineBreak>}}
{{<insertImage image="tf10.png" class="edge max-w-90">}}
{{<lineBreak>}}
Bei behandlung_beginn kann zwar die Uhrzeit völlig fehlen, also nur das Datum stehen (z.B. 20230110) oder aber es steht auch die Uhrzeit (vierstellig) (z.B. 202301100000). In Ihrem Fall sind für die Uhrzeit drei Stellen aufgeführt, das wird nicht akzeptiert. Hinweis: die Uhrzeit 0000 steht für Mitternacht und sollte keinesfalls angegeben werden, wenn keine Uhrzeit gemeldet werden soll.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Formatfehler rech_menge:
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<insertImage image="tf11.png" class="edge max-w-90">}}
{{<lineBreak>}}
Die Variable ist im XSD wie folgt definiert:
{{<lineBreak>}}
{{<insertImage image="tf12.png" class="edge max-w-90">}}
{{<lineBreak>}}
Bei rech_menge sind gesamt 12 Stellen möglich, davon maximal 5 Nachkommastellen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
{{<markdown>}}
Wieso wird **grund_wiedereintritt=" "** als Formatfehler angezeigt? In der Variablenliste steht, dass diese Variable leer geliefert werden kann.
{{</markdown>}}
{{<insertImage image="grund_wiedereintritt_erreur.png" class="edge max-w-90">}}
{{<collapsibleBlock groupId="format_fehlermeldung">}}
{{<markdown>}}
Beim xml wird dieses Format nicht unterstützt. Wenn die Ausprägung in begründeten Fällen nicht vorkommt, wird die Variable nicht geliefert. 
{{<lineBreak>}}
Falsch:
{{<insertImage image="vide_faux.png" class="edge max-w-90">}}

{{<lineBreak>}}
Richtig: **grund_wiedereintritt** wird entführt.
{{<insertImage image="vide_correct.png" class="edge max-w-90">}}{{</collapsibleBlock>}}
{{</markdown>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
