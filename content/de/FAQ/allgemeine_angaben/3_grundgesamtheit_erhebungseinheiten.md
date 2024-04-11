---
title: Grundgesamtheit und Erhebungseinheiten 
slug: grundgesamtheit_erhebungseinheiten
description: " "
weight: 30
type: docs
keywords: []
---

{{<alert color="info">}}
Die Dokumentation befindet sich im Aufbau.
{{</alert>}}

Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="GGH">}}

1. Wird bei der Einführung von SpiGes bzw. zum Zeitpunkt der Definition der Grundgesamtheit für die erste SpiGes-Erhebung noch mit den herkömmlichen «Spitallisten» oder bereits mit SpiReg gearbeitet?
{{<collapsibleBlock groupId="GGH">}}
<ul>
<li>	Bei der ersten SpiGes Erhebung (Daten 2024) im Jahre 2025 wird noch manuell die Grundgesamtheit KS in Form von Excellisten importiert. </li>
<li>	Die bisherige BUR wird BURGESV heissen und der Identifikator des Spitals bleiben. Die Standort-BUR heisst ab den Daten 2024 (Erhebung 2025) BUR. </li>
</ul>
{{</collapsibleBlock>}}

2. Was ist der Unterschied zwischen einem Spitalunternehmen, einem Spital und einem Spitalstandort?
{{<collapsibleBlock groupId="GGH">}}
<ul>
<li>	Ein Spitalunternehmen, ist ein Unternehmen mit dem NOGA-Code 861001 (Allgemeine Krankenhäuser), 861002 (Spezialkliniken) oder 869004 (Geburtshäuser). Es ist mit der Identifikationsnummer ENTID eindeutig bezeichnet. </li>
<li>	Das Spital ist in der SpiGes Erhebung eine Einheit, welche ein ITAR-K ausfüllt und nach der sich die Falldefinition der SwissDRG AG richtet. Ein Spital ist mit der BUR-Nr. GESV gekennzeichnet, welche nur auf der Datenbank von GESV geführt wird. </li>
<li>	Ein Spitalstandort ist mit der BUR-Nr. eindeutig gekennzeichnet und gehört immer zu genau einem Spitalunternehmen. </li>
</ul>
Folgende Tabelle zeigt als Beispiel ein Unternehmen (UID/ENTID) mit 12 Spitälern (BURGESV) und 14 Standorten (BUR) :
{{<insertImage image="tableauFAQ1.png"  class="taille">}}
{{</collapsibleBlock>}}

3. Welche Begriffe werden in der SpiGes Erhebung synonym für Spitalunternehmen, Spital und Spitalstandort verwendet?
{{<collapsibleBlock groupId="GGH">}}
<table style="width:100%">
  <tr>
    <th style="width:50%"> Ebene </div></th>
    <th> Begriffe synonym </th>
  </tr>
  <tr>
    <td> <b> Spitalunternehmen </b> <br /> 
	Juristische Einheit 
 	</td>
    <td> (Spital-)Unternehmen </td>
  </tr>
  <tr>
    <td> <b> Spital </b> (gemäss Angabe Kanton, Erhebung MS/KS, Falldefinition) </td>
    <td> Spital, Klinik, (Spital-)Betrieb </td>
  </tr>
  <tr>
    <td> <b> Spitalstandort </b> <br /> 
	lokale Einheit 
	</td>
    <td> (Spital-)Standort </td>
  </tr>
</table>
{{</collapsibleBlock>}}

4. Wie wird festgestellt, zu welchem Spital (burnr_gesv) ein Standort (burnr) gehört?
{{<collapsibleBlock groupId="GGH">}}
<ul>
<li>	Die Zuordnung der Standorte (BUR-Nummern) zu den Spitälern (BUR-GESV) erfragen wir bei der Erhebung der Grundgesamtheit. In diesem Prozess sind es die Kantone, die uns in Zusammenarbeit mit den Krankenhäusern die Informationen geben. </li>
<li>	Die burnr_gesv wird auf Wunsch unserer Partner auch erhoben. </li>
</ul>
{{</collapsibleBlock>}}

5. Was versteht man unter einer Hauptleistungsstelle (z.B. M000, M050)?
{{<collapsibleBlock groupId="GGH">}}
Eine Leistungsstelle ist eine organisatorische Einheit im Spital, in der u.a. medizinische, medizinisch-technische oder medizinisch-therapeutische Leistungen erbracht werden. In der SpiGes Erhebung wird angegeben, in welcher medizinischen Hauptleistungsstelle der Patient behandelt wird. 
{{</collapsibleBlock>}}

 