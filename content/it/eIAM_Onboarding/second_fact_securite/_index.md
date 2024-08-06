---
title: Secondo fattore di sicurezza
slug: second_fact
description: "In questo capitolo troverete tutte le possibilità che avete come secondo fattore di sicurezza."
keywords: []
weight: 20
type: docs
---

Accedere al proprio {{<link url="https://www.myaccount.eiam.admin.ch/" newTab="true">}}account eIAM{{</link>}} con il CH-LOGIN, quindi andare alla scheda "Accesso e sicurezza". In fondo a questa scheda si trova la sezione "Gestione dell'autenticazione a due fattori".

{{<alert color="info">}}
{{<markdown>}}
 Per utilizzare SpiGes, è necessario configurare un secondo fattore considerato forte.

- Se nel CH-LOGIN è presente un secondo fattore non verificato, è possibile eliminarlo.
- Se si dispone già di un secondo fattore verificato, deve essere uno dei seguenti, altrimenti deve essere eliminato:
    - FIDO Passkey
    - MobileID
    - Vasco Digipass
{{</markdown>}}
{{</alert>}}

eIAM offre diversi fattori di sicurezza secondari, ma solo due di essi sono considerati forti (condizione necessaria per l'uso di SpiGes):

1. La chiave d'accesso FIDO
    - Windows Hello
    - Chiave di sicurezza fisica (FIDO Token)
2. MobileID

{{<alert color="warning">}}
{{<markdown>}}
**Non** selezionare un secondo fattore diverso da quelli suggeriti sopra. Se si seleziona un altro secondo fattore, l'applicazione SpiGes non sarà accessibile.
{{</markdown>}}
{{</alert>}}

L'ideale sarebbe utilizzare Windows Hello sul computer di lavoro.
Se ciò non è possibile, utilizzare MobileID o una chiave di sicurezza fisica.

**Tutti gli accessi alla piattaforma SpiGes devono avvenire da un computer professionale.**

Gli utenti dei Cantoni **che hanno già un Vasco Digipass verificato** (per SOMED/Spitex) possono per il momento utilizzarlo come secondo fattore per gli SpiGes.

Le persone che **non hanno un Vasco Digipass** devono utilizzare i mezzi che presentiamo (Passkey FIDO o Mobile ID).