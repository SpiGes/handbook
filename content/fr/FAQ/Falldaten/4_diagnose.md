---
title: Diagnostics
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

{{<collapsible title="POA-Variable: Könnten Sie uns bitte sagen, zu welchem Zweck die Variable diagnose_poa verwendet wird?  ">}}
Die Angabe «POA» kann unter anderem zur Verbesserung der Qualität und der Patientensicherheit verwendet werden. Siehe z. B. die Mitteilung des Kantons Zürich zu diesem Thema. <a href="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf"> Present on admission - Informationen zur Erfassung (zh.ch)</a>
{{</collapsible>}}

{{<collapsible title="Variable «diagnose_zusatz»: Welche Angaben müssen hier bei Stern-Kodes und Kodes mit Ausrufezeichen gemacht werden?">}}
<ul>
<li>	Bei Stern-Kodes wird hier der zugehörige Kreuz-Kode angegeben. Bei Kodes mit Ausrufezeichen, der zu präzisierende Kode. </li>
<li>	Stern-Kodes werden nicht als solche markiert, die Vergabe erfolgt gemäss ICD-10-GM. </li>
</ul>
<p>
<b>Beispiel 4</b> im Kodierhandbuch (Seite 38) <br />
HD E10.73† Diabetes mellitus, Typ 1, mit multiplen Komplikationen, als entgleist bezeichnet <br />
ND I79.2* Periphere Angiopathie bei anderenorts klassifizierten Krankheiten <br />
ND H36.0* Retinopathia diabetica <br />
ND N08.3* Glomeruläre Krankheiten bei Diabetes mellitus <br />
…wird wie folgt in <b>SpiGes</b> erfasst: <br />
<table style="width:100%">
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
<b>Beispiel 4</b> im Koderhandbuch (Seite 40) <br />
HD S37.03 Komplette Ruptur des Nierenparenchyms <br />
L 2 <br />
ND V99! Transportmittelunfall <br />
ND S36.03 Rissverletzung der Milz mit Beteiligung des Parenchyms <br />
ND S36.49 Verletzung sonstiger und mehrerer Teile des Dünndarmes <br />
ND S31.83! Offene Wunde (jeder Teil des Abdomens, der Lumbosakralgegend und des Beckens) mit Verbindung zu einer intraabdominalen Verletzung <br />
…wird wie folgt in SpiGes erfasst: <br />
<table style="width:100%">
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
{{</collapsible>}}
