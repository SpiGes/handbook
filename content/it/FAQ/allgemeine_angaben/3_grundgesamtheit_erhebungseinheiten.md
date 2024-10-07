---
title: Universo statistico e unità rilevazione
slug: grundgesamtheit_erhebungseinheiten
description: " "
weight: 30
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="GGH">}}

{{<numberedList>}}
{{<listItem>}}
In merito all’introduzione di SpiGes o al momento di definire l’universo statistico per la prima rilevazione SpiGes, si utilizzeranno ancora i vecchi «elenchi ospedalieri» o si lavorerà già con SpiReg?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- In occasione della prima rilevazione SpiGes nel 2025 (dati per il 2024), verrà ancora fatta un’importazione manuale dell’universo statistico KS sotto forma di elenchi Excel.
- Il precedente numero BUR (RIS) si chiamerà BURGESV e rimarrà l’identificatore dell’ospedale. A partire dai dati 2024 (per la rilevazione 2025) il BUR (RIS) sede del trattamento sarà chiamato BUR.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Che differenza c’è tra un’impresa ospedaliera, un ospedale e una sede ospedaliera?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- Un’impresa ospedaliera è un’impresa con il codice NOGA 861001 (ospedali generali), 861002 (cliniche specializzate) o 869004 (case di maternità). È designato in modo univoco attraverso il numero di identificazione ENTID.
- Nella rilevazione SpiGes, l’ospedale è un’unità che compila un ITAR_K® e su cui si basa la definizione dei casi secondo SwissDRG SA. Un ospedale è contrassegnato con il numero BURGESV, che è presente solo nella banca dati di GESV.
- Una sede ospedaliera è contrassegnata in modo univoco con il numero BUR (RIS) e fa sempre capo a un’impresa ospedaliera ben precisa.
La tabella seguente mostra un esempio di impresa (UID/ENTID) con 12 ospedali (BURGESV) e 14 sedi (BUR):
{{</markdown>}}
{{<insertImage image="tableauFAQ1_it.png"  class="max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quali termini sono usati come sinonimi nella rilevazione SpiGes per impresa ospedaliera, ospedale e sede?
{{<collapsibleBlock groupId="GGH">}}

{{<markdown>}}
|Livello|Sinonimo dei termini|
|-------|-------|
|**Impresa ospedaliera**<br>Entità giuridica|Impresa (ospedaliera)|
|**Ospedale** (secondo l’indicazione Cantone, indagine MS/KS, definizione del caso)|Ospedale, clinica, stabilimento (ospedalieri)|
|**Sede ospedaliera**<br>Unità locale|Sede (ospedaliera)|

{{</markdown>}}
<!--
<table class="w-100">
  <tr>
    <th style="width:50%"> Livello </div></th>
    <th> Sinonimo dei termini </th>
  </tr>
  <tr>
    <td> <b> Impresa ospedaliera </b> <br /> 
    Entità giuridica
 	</td>
    <td> Impresa (ospedaliera) </td>
  </tr>
  <tr>
    <td> <b> Ospedale </b> (secondo l’indicazione Cantone, indagine MS/KS, definizione del caso) </td>
    <td> Ospedale, clinica, stabilimento (ospedalieri) </td>
  </tr>
  <tr>
    <td> <b> Sede </b> <br /> 
    Unità locale
	</td>
    <td> Sede </td>
  </tr>
</table>-->
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come si determina a quale ospedale (burnr_gesv) appartiene una sede (burnr)? 
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- L’attribuzione delle sedi (numeri RIS) agli ospedali (RISGESV) viene chiesta nel quadro della rilevazione dell’universo statistico. In questo processo, sono i Cantoni a fornirci le informazioni in collaborazione con gli ospedali.
- Il burnr_gesv viene rilevato anche su richiesta dei nostri partner.

{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Cosa si intende per Centro di prestazione medica principale (ad es. M000, M050)?
{{<collapsibleBlock groupId="GGH">}}
Un centro di prestazione è un’unità organizzativa di un ospedale nella quale sono erogate prestazioni mediche, medico-tecniche o medico-terapeutiche. Nella rilevazione SpiGes viene richiesto il centro di prestazione medica principale in cui il paziente è in cura. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Se un ospedale ha più sedi, un caso viene sempre registrato in una sola sede anche se è stato trasferito da una sede a un’altra sede dello stesso ospedale?
{{<collapsibleBlock groupId="GGH">}}
Sì, un caso viene registrato solo in una sede, quella principale (v. variabile «burnr»). 
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}