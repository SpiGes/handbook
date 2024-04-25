---
title: Diagnostics 
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

Aprire tutte le domande: {{<collapsibleGroupCommand groupId="diagnose">}}

1. Variabile POA: potrebbe dirci a quale scopo viene utilizzata la variabile diagnose_poa?  
{{<collapsibleBlock groupId="diagnose">}}
L’indicazione «POA» (present on admission) può essere utilizzata, tra l’altro, per migliorare la qualità e per la sicurezza dei pazienti. Si veda, ad esempio, la comunicazione del Cantone di Zurigo in merito (in tedesco). <a href="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf"> Present on admission – Informationen zur Erfassung (zh.ch) </a>
{{</collapsibleBlock>}}

2. Variabile «diagnose_zusatz»: quali informazioni devono essere inserite qui per i codici con asterisco e i codici con punto esclamativo?
{{<collapsibleBlock groupId="diagnose">}}
<ul>
<li>	Per i codici con asterisco, qui va inserito il corrispondente codice con croce. Per i codici con punto esclamativo, il codice da specificare. </li>
<li>	I codici con asterisco non sono contrassegnati come tali; sono assegnati secondo l’ICD-10-GM. </li>
</ul>
<p>
<b> Esempio 4 </b> nel Manuale di codifica (pag. 38) <br />
DP E10.73† Diabete mellito, tipo 1, con complicanze multipl, definito come scompensato <br />
DS I79.2* Angiopatia periferica in malattie classificate altrove <br />
DS H36.0* Retinopatia diabetica <br />
DS N08.3* Disturbi glomerulari in diabete mellito <br />
…va indicato in <b>SpiGes</b> come segue : <br />
<table class="w-100">
  <tr>
    <th style="width:35%"> diagnose_kode </div></th>
    <th> diagnose_id </th>
    <th style="width:35%"> diagnose_zusatz </th>
  </tr>
  <tr>
    <td> E10.73 </td>
    <td> 1 </td>
    <td>  </td>
  </tr>
  <tr>
    <td> I79.2 </td>
    <td> 2 </td>
    <td> E10.73 </td>
  </tr>
  <tr>
    <td> H36.0 </td>
    <td> 3 </td>
    <td> E10.73 </td>
  </tr>
  <tr>
    <td> N08.3 </td>
    <td> 4 </td>
    <td> E10.73 </td>
  </tr>
</table>
</p>

<p>
<b>Esempio 4</b> nel Manuale di codifica (pag. 40) <br />
DP S37.03 Rottura completa del parenchima renale <br />
L 2  <br />
DS V99! Incidente da trasporto non specificato <br />
DS S36.03 Lacerazione della milza con interessamento del parenchima <br />
DS S36.49 Traumatismo di altre e multiple parti dell’intestino tenue <br />
DS S31.83! Ferita aperta (qualsiasi parte dell’addome, dei lombi e della pelvi) in collegamento con traumatismo intraaddominale <br />
…va indicato in <b> SpiGes</b> come segue: <br />
<table class="w-100">
  <tr>
    <th style="width:35%"> diagnose_kode </div></th>
    <th> diagnose_id </th>
    <th style="width:35%"> diagnose_zusatz </th>
  </tr>
  <tr>
    <td> S37.03 </td>
    <td> 1 </td>
    <td>  </td>
  </tr>
  <tr>
    <td> V99 </td>
    <td> 2 </td>
    <td> S37.03 </td>
  </tr>
  <tr>
    <td> S36.03 </td>
    <td> 3 </td>
    <td> </td>
  </tr>
  <tr>
    <td> S36.49 </td>
    <td> 4 </td>
    <td> </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 5 </td>
    <td> S36.03 </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 6 </td>
    <td> S36.49 </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 7 </td>
    <td> S37.03 </td>
  </tr>
</table>
</p>
{{</collapsibleBlock>}}