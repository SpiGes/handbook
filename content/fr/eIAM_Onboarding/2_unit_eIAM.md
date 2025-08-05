---
title: Structure des Units eIAM
slug: ch_unit_eIAM
description: 'Sur cette page, nous vous expliquons comment est structurée la plateforme SpiGes.'
keywords: []
weight: 20
type: docs
---

Les différents utilisateurs de la plateforme SpiGes sont organisés comme suit:

- Canton
    - Entreprises
        - Sites hospitaliers

Un canton contient une ou plusieurs entreprises qui elles-même contiennent un ou plusieurs sites hospitaliers.

{{<alert color="warning">}}
Dans certains cas, le canton géographique d'un site et celui administratif de l'entreprise ne sont pas les mêmes.
{{</alert>}}

Exemple:

{{<layouts/grid>}}
{{<layouts/row>}}

{{<layouts/column width="50">}}
{{<markdown>}}

1. Dans cette colonne, vous voyez le EntID au niveau de l'entreprise et vous voyez le numéro Bur au niveau des sites hospitaliers.
2. Dans cette colonne, vous voyez le canton "administratif" de l'entreprise / du site hospitalier.
3. Dans cette colonne, vous voyez le canton géographique de l'entreprise / du site hospitalier.

Vous voyez ici que le canton administratif et le canton géographique du site 1 ne sont pas les mêmes.
{{</markdown>}}
{{</layouts/column>}}

{{<layouts/column>}}
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
{{</layouts/column>}}

{{</layouts/row>}}
{{</layouts/grid>}}