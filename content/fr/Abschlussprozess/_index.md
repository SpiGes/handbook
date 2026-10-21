---
title: Processus de clôture
slug: abschlussprozess
description: "Sur cette page, vous trouverez le processus de clôture du relevé de l'entreprise ainsi que les possibilités d'interrompre ou de forcer un processus de clôture."
weight: 75
type: docs
keywords: []
---

Detaillierte Anleitungen: [Unternehmensuser](unternehmensuser/index.md), [kantonale User](kantonale-user/index.md) und [BFS User](bfs-user/index.md).

## Déroulement du processus de clôture

{{<insertImage image="abschlussprozess-01.png" class="edge max-w-90">}}

## Interrompre le processus de clôture

{{<insertImage image="abschlussprozess-abbrechen.png" class="edge max-w-90">}}

Afin de corriger d'éventuelles erreurs de données, il peut arriver, dans de rares cas, que la clôture doive être interrompue pour réactiver le téléchargement. Chaque niveau peut interrompre la procédure tant qu'aucun utilisateur du niveau supérieur n'a encore clôturé la procédure. Si une entreprise doit effectuer un nouveau téléchargement et que le canton a déjà clôturé la procédure, celui-ci peut en être informé via le chat dédié à l'enquête. Ce chat reste ouvert, même pendant le processus de clôture. En revanche, la possibilité de commenter des cas particuliers est désactivée dès que le processus de clôture démarre.

L'annulation réinitialise l'ensemble du processus de clôture. Tous les commentaires déjà saisis et les éventuelles questions de benchmarking déjà remplies sont conservés.

## Forcer la clôture

{{<insertImage image="abschluss-erzwingen.png" class="edge max-w-90">}}

Le fait de forcer une clôture doit rester une exception et ne doit intervenir que si les personnes concernées ne réagissent pas aux demandes qui leur sont adressées pour qu’elles procèdent elles-mêmes à la clôture. Les trois types d’utilisateurs – utilisateur statistique cantonal, utilisateur administratif cantonal et utilisateur OFS – peuvent forcer une clôture. Le système définit alors le niveau sous-jacent sur « Accepté » et clôture le relevé conformément au processus décrit ci-dessus.

La clôture ne peut être lancée par l’utilisateur entreprise que lorsque celui-ci a fourni toutes les parties nécessaires du relevé et que le canton a terminé le contrôle de plausibilité. L’entreprise passe alors, dans la colonne « Clôture », de l’état « En cours » à « Prêt ».

Les protocoles de contrôle sont établis et acceptés pour chaque hôpital (BURGESV). Si une entreprise regroupe plusieurs hôpitaux, tous les protocoles de contrôle doivent d’abord être acceptés avant que l’ensemble de l’entreprise ne soit clôturé et puisse ainsi passer à l’étape suivante – canton ou OFS.

Les rôles `SP_ErhV_Unternehmen`, `KT_ErhV(stat_Abschlussuser)`, `KT_Admin_Abschlussuser` et `BFS_Superuser` participent activement au processus de clôture. Le `KT_Superuser` dispose uniquement d’un droit de lecture.
