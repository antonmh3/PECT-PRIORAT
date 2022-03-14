<img src="./images/Logo.png" alt="HTML5 Icon" width="250" height="128"> <br>
# What is PECT-Priorat?
Aquest projecte finançat amb fons de desenvolupament Europeu i recolzat pel consell comarcal del Priorat i altres institucions, empreses i ens de renom en aquesta localitat, basa la seva tasca en potenciar el desenvolupament econòmic, fer una gestió sostenible del paisatge i preservar els valors agricoles i culturals de la comarca.<br>
En aquesta pàgina web s'exposen els objectius i les operacions realitzades pel projecte PECT Priorat.
## Motivation
Aquesta pàgina web s'ha creat com a treball final a partir de l'assignatura de *Producció, disseny cartografic i eines web* impartida al grau de *Geografia, anàlisi territorial i sostenibilitat* per la URV. <br>
Per aquest treball final s'ha decidit reelaborar parcialment la [Pàgina web original del projecte](http://pectpriorat.cat/) amb motiu principal de dotar-la d'una component geogràfica que actualment no disposa, tot afegint un mapa web dins l'apartat de banc de terres que permetrà localitzar informació de forma ràpida, mostrar l'iniciativa de cara al públic de forma més dinàmica i millorar la qualitat de la web amb aquest nou recurs. També cal fer esment en les mancançes o falta d'informació que contenen les fitxes de cada parcel·la cedida, sense referencia cadastral ni coordenades de localització, un fet que també es preten modificar.<br>

**Els objectius a assolir són:**
1. Remodelar la pàgina web amb elements i estructura propia tot mantenint continguts dicatats pel propi projecte
2. Elaborar una pàgina a la web sobre l'apartat del banc de terres on es mostrin en forma de fitxes imatges georeferenciades, referencia cadastral assignada i una breu descripció de cada parcel·la cedida
3. Crear un mapa web on es visualitzi cada aparcel·la cedida i una breu descripció amb imatge
## Data
Les dades utilitzades per a elaborar els continguts argumentals son en la gran majoria extretes de la pàgina web original amb la finalitat de no distorsionar el que el propi pojecte ha conclos en que el representa. <br>
Per a la cartografia, s'han extret les parcel·les del cadastre del IGN, agafant unicament aquelles que mostra l'apartat del banc de terres a la pàgina original. El mètode per a elaborar el mapa i extreure les geometries s'exposa en l'apartat *Qgis2web* d'aquest readme.md. En total s'han aconseguit X parcel·les amb les següents característques: <br>

|ID|X|Y|Mun|RefCad|Ha|Tipus|regadiu|Pendent|
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
|P01|	320959.2|	4557651.7|	Pradell de la Teixeta|	43117A01200016|	0,88|
|P02|	321717.0|	4558226.8|	Pradell de la Teixeta|	1784627CF2518D| 0,08|
|P03|	321697.0|	4558214.3|	Pradell de la Teixeta|	1784628CF2518D| 0,06|
|P04|	321624.0|	4558181.5|	Pradell de la Teixeta|	43117A01400116| 0,42|
|P05|	321286.0|	4556999.3|	Pradell de la Teixeta|	43117A01300012| 0,91|
|P06|	321268.0|	4556875.3|	Pradell de la Teixeta|	43117A01300058| 3,04|
|P07|	322845.0|	4559656.5|	Pradell de la Teixeta|	43117A00500222| 0,34|
|P08|	322875.0|	4559612.5|  Pradell de la Teixeta|	43117A00500009| 1,06|
|P09|	320623.5|	4559880.0|	Pradell de la Teixeta|	43117A00100003| 1,52|



## Web structure
g
## Qgis2web
u
## improvements, difficulties, modifications
Es podria fer una web dinàmica afegint l'apartat de post i notícies que tenen a l'original.
