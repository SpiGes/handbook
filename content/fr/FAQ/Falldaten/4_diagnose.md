---
title: Diagnostics 
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="diagnose">}}

1.	Variable POA : Pourriez-vous nous indiquer à quelle fin est utilisée la variable «diagnose_poa» ?  
{{<collapsibleBlock groupId="diagnose">}}
L'indication «POA» peut être utilisée, entre autres, pour améliorer la qualité et la sécurité des patients. Voir par exemple la communication du canton de Zurich à ce sujet. <a href="https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf"> Present on admission - Informationen zur Erfassung (zh.ch)</a>
{{</collapsibleBlock>}}

2. Variable «diagnose_zusatz» : quelles indications doivent être données ici pour les codes avec étoile et les codes avec point d'exclamation ?
{{<collapsibleBlock groupId="diagnose">}}
<ul>
<li>	Pour les codes étoile, le code dague associé est indiqué ici. Pour les codes avec points d’exclamation, le code est à préciser. </li>
<li>		Les codes étoile ne sont pas marqués comme tels, l’association se fait suivant CIM-10-GM. </li>
</ul>
<p>
<b>Exemple 4</b> dans le manuel du codage (page 38) : <br />
DP E10.73† Diabète sucré, type 1, avec complications multiples, désigné comme décompensé <br />
DS I79.2* Angiopathie périphérique au cours de maladies classées ailleurs <br />
DS H36.0* Rétinopathie diabétique <br />
DS N08.3* Glomérulopathie au cours du diabète sucré  <br />
…est saisi dans <b>SpiGes</b> comme suit : <br />
<table class="w-100"">
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
<b>Exemple 4</b> dans le manuel du codage (page 40) :  <br />
DP S37.03 Rupture totale du parenchyme rénal <br />
L 2  <br />
DS V99! Accident de transport <br />
DS S36.03 Déchirure de la rate, avec atteinte du parenchyme <br />
DS S36.49 Autres parties et parties multiples de l’intestin grêle <br />
DS S31.83! Plaie ouverte (toute partie de l’abdomen, de la région lombosacrée et du bassin) associée à une lésion intraabdominale <br />
…est saisi dans SpiGes comme suit : <br />
<table class="w-100"">
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
