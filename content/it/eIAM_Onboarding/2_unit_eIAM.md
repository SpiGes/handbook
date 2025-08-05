---
title: Struttura delle unità eIAM
slug: ch_unit_eIAM
description: 'Su questa pagina vi spieghiamo come è strutturata la piattaforma SpiGes.'
keywords: []
weight: 20
type: docs
---

I vari utenti della piattaforma SpiGes sono organizzati come segue:

- Cantone
    - Imprese <!--Aziende-->
        - Sedi

Un Cantone comprende una o più imprese, che a loro volta comprendono una o più sedi.

{{<alert color="warning">}}
In alcuni casi, il Cantone geografico di una sede e il Cantone amministrativo dell'impresa non coincidono.
{{</alert>}}

Esempio:

{{<layouts/grid>}}
{{<layouts/row>}}

{{<layouts/column width="50">}}
{{<markdown>}}

1. nella colonna 1 è indicato l'EntID a livello di impresa e il numero RIS a livello di sede;
2. nella colonna 2 è indicato il Cantone amministrativo (responsabile) dell'impresa o della sede dell'ospedale;
3. nella colonna 3 viene indicato il Cantone geografico dell'impresa / della sede.

In questo caso si può notare che il Cantone amministrativo e quello geografico della sede 1 sono diversi.
{{</markdown>}}
{{</layouts/column>}}

{{<layouts/column>}}
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
{{</layouts/column>}}

{{</layouts/row>}}
{{</layouts/grid>}}