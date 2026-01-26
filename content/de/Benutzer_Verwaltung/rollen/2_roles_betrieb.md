---
title: Rollen Spitäler
slug: rollen_betriebe
description: "Auf dieser Seite erklären wir Ihnen die verschiedenen Rollen eines Betriebsbenutzer (Spital)."
weight: 30
type: docs
keywords: []
---


<table>
  <tr>
    <th><div style="width:155px"> Name </div></th>
    <th> Aufgaben </th>
    <th> <div style="width:110px"> Kompetenzen </div> </th>
    <th> <div style="width:120px"> Verantwortung </div> </th>
  </tr>
  <tr>
    <td>SP_ErhV_Unternehmen </td>
    <td> Jedes Unternehmen muss mindestens einen SP_ErhV_Unternehmen benennen. In der Initialisierungsphase liest er die Neuerungen bezüglich der Erhebung und setzt diese bei Bedarf um. Während der Erhebung sorgt er dafür, dass seine Spitalstandorte die Lieferfristen einhalten. Er ladet die Daten hoch, überprüft die Qualität der Daten mittels des automatischen Prüfregelwerks und kommentiert diese bei Bedarf. Am Ende des Erhebungsprozesses gibt er die Daten auf Spitalunternehmensebene frei (abschliessen), damit diese im Prozess weitergereicht werden können (Freigabe des Kantons). </td>
    <td> Er kann alle Daten seines Spitalunternehmen und dessen Standorte lesen, hochladen, kommentieren, zu Plausibiliserungszwecken exportieren und abschliessen. </td>
    <td> Er sorgt dafür, dass die Daten seines Spitalunternehmens innerhalb der vorgegebenen Frist und in guter Qualität vorliegen und gibt diese auf Ebene Spitalunternehmen frei. </td>
  </tr>
  <tr>
    <td>SP_ErhV_Standort</td>
    <td> Ein Standort kann einen SP_ErhV_Standort benennen. Er ladet die Daten seines Spitalstandortes hoch, überprüft die Qualität der Daten mittels des automatischen Prüfregelwerks und kommentiert diese bei Bedarf. Am Ende des Erhebungsprozesses gibt er die Daten auf Spitalstandortebene frei (abschliessen), damit diese im Prozess weitergereicht werden können (Freigabe des Spitalunternehmens). Diese Rolle ist besonders nützlich, wenn ein Benutzer nicht auf alle Standorte des Unternehmens zugreifen muss.</td>
    <td> Er kann alle Daten seines Spitalstandorts lesen, hochladen, kommentieren, zu Plausibiliserungszwecken exportieren und abschliessen. </td>
    <td> Er sorgt dafür, dass die Daten seines Spitalstandorts innerhalb der vorgegebenen Frist und in guter Qualität vorliegen und gibt diese auf Ebene Spitalstandort frei. Außerdem informiert er den KT_Superuser sofort, wenn sich die Benutzer seines Krankenhausstandorts ändern (z.B. ein Mitarbeiter kündigt, seine Funktion wechselt und seinen Zugang zur SpiGes-Plattform nicht mehr benötigt, ...). </td>
  </tr>
  <tr>
    <td> SP_User_Unternehmen </td>
    <td> Er führt die durch den SP_ErhV_Unternehmen delegierten Aufgaben durch. </td>
    <td> Er kann alle Daten seines Spitalunternehms und dessen Standorte lesen, hochladen, kommentieren und zu Plausibiliserungszwecken exportieren. </td>
    <td> Er unterstützt den SP_ErhV_Unternehmen in seinen Aufgaben. </td>
  </tr>
  <tr>
    <td> SP_User_Standort </td>
    <td> Er führt die durch den SP_ErhV_Standort delegierten Aufgaben durch. </td>
    <td> Er kann alle Daten seines Spitalstandorts lesen, hochladen, kommentieren und zu Plausibiliserungszwecken exportieren. </td>
    <td> Er unterstützt den SP_ErhV_Standort in seinen Aufgaben. </td>
  </tr>
  <tr>
    <td> SP_Read_Unternehmen </td>
    <td> Er kann bei Bedarf auf der Plattform den Stand der Erhebung einsehen. </td>
    <td> Er kann die Daten seines Spitalunternehmens lesen. </td>
    <td> Er unterliegt der Schweigepflicht und darf keine Information über gelesene Informationen auf der Plattform Unbefugten mitteilen. </td>
  </tr>
  <tr>
    <td> SP_Read_Standort </td>
    <td> Er kann bei Bedarf auf der Plattform den Stand der Erhebung einsehen. </td>
    <td> Er kann die Daten seines Spitalstandorts lesen. </td>
    <td> Er unterliegt der Schweigepflicht und darf keine Information über gelesene Informationen auf der Plattform Unbefugten mitteilen. </td>
  </tr>
</table>

<!-- 

  <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>

  -->
