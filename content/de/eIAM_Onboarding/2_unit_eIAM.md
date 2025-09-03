---
title: Struktur der eIAM Units
slug: ch_unit_eIAM
description: 'Auf dieser Seite erklären wir Ihnen, wie die SpiGes-Plattform aufgebaut ist.'
keywords: []
weight: 20
type: docs
---

Die verschiedenen Benutzer der SpiGes-Plattform sind wie folgt organisiert:

- Kanton
    - Unternehmen
        - Standorte

Ein Kanton enthält ein oder mehrere Unternehmen, die ihrerseits einen oder mehrere Standorte enthalten.

{{<alert color="warning">}}
In einigen Fällen sind der geografische Kanton eines Standorts und der administrative Kanton des Unternehmens nicht identisch.
{{</alert>}}

Beispiel:

{{<layouts/grid>}}
{{<layouts/row>}}
{{<layouts/column width="50">}}
{{<markdown>}}

1. In der Spalte 1 sehen Sie die EntID auf Ebene des Unternehmens und Sie sehen die Bur-Nummer auf Ebene der Standorte.
2. In der Spalte 2 sehen Sie den administrativen (zuständigen) Kanton des Unternehmens / des Krankenhausstandorts.
3. In der Spalte 3 sehen Sie den geografischen Kanton des Unternehmens / des Standorts.

Hier sehen Sie, dass der administrative und der geografische Kanton von Standort 1 nicht identisch sind.
{{</markdown>}}
{{</layouts/column>}}

{{<layouts/column>}}
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
{{</layouts/column>}}
{{</layouts/row>}}
{{</layouts/grid>}}