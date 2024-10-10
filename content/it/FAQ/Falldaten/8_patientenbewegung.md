---
title: Trasferimento pazienti 
slug: patientenbewegung
description: " "
weight: 80
type: docs
keywords: []
---

{{<faqBlock>}}
Per aprire tutte le domande: {{<collapsibleGroupCommand groupId="patientenbewegung">}}

{{<numberedList>}}
{{<listItem>}}
Anche l’ammissione e la dimissione contano come un episodio?
{{<collapsibleBlock groupId="patientenbewegung">}}
L’ammissione e la dimissione sono indicate come prima nel campo «data di ammissione» e «data di dimissione». Se il caso non è stato trasferito, non viene registrato alcun episodio. Se però si dovesse arrivare a un trasferimento (ad es. una dimissione intermedia) quale episodio 1 varrebbe il periodo dalla data di ammissione a quella della dimissione intermedia. L’episodio 2 inizia con la dimissione intermedia e termina con la riammissione. L’episodio 3 inizia con la riammissione e termina con il trasferimento successivo (ad es. congedo). Così facendo, per uno stesso caso si possono avere diversi episodi (v. illustrazione). L’ultimo episodio (9) si conclude con la data di dimissione. Gli episodi sono gli intervalli temporali prima e dopo eventi riguardanti un caso, quali: cambio di sede, dimissioni intermedie / riammissioni, trattamenti ambulatoriali esterni, congedi e uscite di prova.
{{<insertImage image="Image3_it.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Un caso che cambia sede viene gestito in entrambe le sedi?
{{<collapsibleBlock groupId="patientenbewegung">}}
No, ogni caso viene gestito solo nella sede principale, anche se viene trasferito da una sede all’altra all’interno di un ospedale (BURGESV). Se un paziente viene trasferito in un altro ospedale (BURGESV), è necessario aprire un nuovo caso. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variabili "wiedereintritt_aufenthalt" e "grund_wiedereintritt": perché queste informazioni possono essere fornite solo per i casi A quando invece tutte le informazioni sugli episodi sono indicate per i casi ABC?
{{<collapsibleBlock groupId="patientenbewegung">}}
In seguito a chiarimenti con SwissDRG SA è emerso che le due variabili "wiedereintritt_aufenthalt" e "grund_wiedereintritt" possono essere effettivamente specificate per i casi statistici ABC. Aggiorneremo la descrizione delle variabili (versione 1.4) in tal senso.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
episode_id: Per la nostra sede ospedaliera, riteniamo che non sia necessario differenziare gli episodi dei casi stazionari, poiché non registriamo alcun cambiamento di sede all’interno dell’ospedale. Abbiamo capito bene?
{{<collapsibleBlock groupId="patientenbewegung">}}
Per quanto riguarda gli episodi dovuti a cambiamenti di sede in tal caso va bene non indicarli. Tuttavia, devono essere indicati gli episodi dovuti a dimissioni intermedie/riammissioni, congedi, uscita di prova  e trattamenti ambulatoriali esterni.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Abbiamo capito bene che ad esempio che il periodo dall’ammissione fino al trattamento ambulatoriale esterno (v. illustrazione sotto ) deve essere già considerato come un episodio? Quando si hanno congedi, uscite di prova e trattamenti ambulatoriali esterni dobbiamo quindi sempre indicare un episode-art="1"?
{{<collapsibleBlock groupId="patientenbewegung">}}
Esatto
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nell’esempio, non ci sono cambi di sede all’interno dello stesso ospedale. È giusto che in caso di episode_art="1" va indicato sempre il numero RIS della sede dell’ospedale?
{{<collapsibleBlock groupId="patientenbewegung">}}
Esatto
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Per quanto ne sappiamo, l’orario del rientro da un trattamento ambulatoriale esterno non è documentato. Tuttavia, questo potrebbe essere registrato nei sistemi informativi dell’ospedale. Tale informazione è obbligatoria?
{{<collapsibleBlock groupId="patientenbewegung">}}
Sì, la data e l’ora devono essere fornite per tutti gli episodi, sia per l’inizio che per la fine di questi ultimi. Se la fine di un trattamento ambulatoriale esterno finora non veniva registrata, si raccomanda di iniziare a farlo. Se ciò non fosse possibile (in tempi brevi), per i trattamenti ambulatoriali esterni si consiglia di considerare una durata standard.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
L’indicazione del BURNR dell’ospedale che ha fornito il trattamento ambulatoriale esterno è facoltativa, giusto? 
{{<collapsibleBlock groupId="patientenbewegung">}}
Sì, nel caso di trattamenti ambulatoriali esterni, è possibile indicare il numero RIS della sede che li ha forniti, qualora sia noto.
{{<insertImage image="Image4.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}
<!-- A traduire:new FAQ
{{<listItem>}}
Variable "wiedereintritt_aufenthalt" : nous ne savons pas encore très bien ce qui doit être exporté dans la variable wiedereintritt_aufenthalt pour le type d'épisode_1 (donc lorsque le patient est présent à l'hôpital).
{{<collapsibleBlock groupId="patientenbewegung">}}
wiedereintritt_aufenthalt n'est rempli que pour episode_art=2, pour tous les autres episode_types, cette variable n'est pas saisie.
{{</collapsibleBlock>}}
{{</listItem>}}
-->
{{</numberedList>}}
{{</faqBlock>}}