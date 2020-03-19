
## Introduction

The project OpenSisma has been created for the exam Open Access and Digital Ethics as a Digital Humanities and Digital Knowlegde course at the University of Bologna. The two contributors of OpenSisma are:
- Milena Corbellini
- Anna Sofia Lippolis

In the context of the eartquake that happened the 20th of May, 2012, in Emilia-Romagna, OpenSisma aims to study and show the effects of such natural disaster in terms of progress of reconstruction works, level of education for primary, secondary and high schools, availability of safety certificates and/or environmental constraints and entrepreneurship drive. Although the aim was to make a comparison between 2012 and 2020 information, creating an "Emilia Romagna earthquake: 8 years later" study project, the unavailability of education data brought us to include less up-to-date data sources for that aspect, while the other thematic areas' data are updated in real time. 

With this perspective, we hypotesized a correlation between:
- total works and damage entity;
- amount of work that still has to be done and schools score;
- disaster effects and rise in an entrepreneurial mindset. 

We then wondered whether schools had the safety certificates they needed in the case such tragic event happened again, a necessity that could grow in relevance if environmental constraints were also registered.

The analysis is based on a collection of open datasets, which were studied from the legal and technical point of view and then processed in order to create mashed-up datasets that complied to the Linked Open Data principles, with an RDF model compliant to the DCAT-AP ontology. In this way, we were able to produce (5 stars?) Linked Open Data datasets and to show them through an interactive website that can be exploited by everyone. Our derived datasets and the code we created are distributed with an open license, so that our research results not only transparent, but also repeatable.

## Scenario

## Original datasets and mashed-up datasets
In order to carry out our analysis, we chose to used datasets that differed in provenance, size and content.  

### Datasets used
| ID | Link | Name |
| :---         |     :---     |          :--- |
| D1   | http://www.osservatoriopartecipazione.it/opendata     | Open data dell'Osservatorio Partecipazione per anno di avvio    |
| D2     | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA       | Autovalutazione della scuola sezione Esiti. Scuola statale (anno scolastico 2015-2016)      |
| D3 |https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA | Autovalutazione della scuola sezione Esiti. Scuola statale (anno scolastico 2016-2017) |
| D4        |     https://sed.istruzioneer.it/scumgnt/scu-istituzione      |         Anagrafe scuole dell'Emilia Romagna |
| D5   | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Edilizia%20Scolastica&datasetId=DS0280EDICONSICUREZZASTA     | Certificazioni e documenti relativi alla sicurezza (SICUREZZASCUOLE)    |
| D6     | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Edilizia%20Scolastica&datasetId=DS0250EDIVINCOLISTA       | Presenza di vincoli (idrogeologici, sismici)      |
| D7 | https://openricostruzione.regione.emilia-romagna.it/media/opendata/interventi_ricostruzionepubblica.csv | Open Ricostruzione - Interventi di ricostruzione pubblica |
| D8       |    http://www.ingv.it/quest/images/rilievimacrosismici/xlsx/INGV_QUEST_2012-05-29.xlsx      |          Rilievi macrosismici 2012-05-29 |
| D9  | https://opencoesione.gov.it/it/territori/emilia-romagna-regione/     | Progetti di OpenCoesione con tracciato esteso (Emilia-Romagna)    |
| D10    | http://startup.registroimprese.it/        | Elenco di startup and PMI innovative      |
| D11  | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR     | Autovalutazione della scuola sezione Esiti. Scuola paritaria (anno scolastico 2015-2016)    |
| D12    | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR     | Autovalutazione della scuola sezione Esiti. Scuola paritaria (anno scolastico 2016-2017)      |

### Mashed-up datasets

The datasets were then grouped and processed into three mashed-up datasets:

| Primary datasets | Mashed-up dataset | URI | 
| :---         |     :---:      |          ---: |
| D2, D3, D4, D5, D6, D11, D12   | Education dataset     | git status    |
| D7, D8   | Reconstruction works dataset      | git diff      |
| D1, D9, D10   | Entrepreneurship dataset      | git diff      |

Our mashed-up datasets are grouped in this page (pagina del catalogo).


## Informative quality analysis

Our informative quality analysis follows the guidelines reported in ["Linee guida per la valorizzazione del patrimonio informativo pubblico" by AGID](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/stabile/aspettiorg.html#qualita-dei-dati), which takes into account standards ISO/IEC 25012 and ISO/IEC 25024.  As for what concerns completeness, our comments about empty values in the "Completeness" column refer, as does the aforementioned document, only to those fields that are necessary to be written in the dataset. Because we noticed empty fields were at times filled with dashes or dots instead of "null" values, we then decided to calculate the percentage of overall completeness with an algorithm (link dell'alg). The results can be seen below.

| Dataset          	| Completeness                                                                                                                                                                                                                                  	| Accuracy                                                                                                                                                                                                                                                                                                                                                                                	| Coherence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	| Promptness                                                                                      	|
|------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------	|
| D1               	| Not satisfied: <br> - values of column “obiettivi” and “modalità di inclusione” contain different degrees of specificity, if any;<br> - missing values in many columns.                                                                      	| Not satisfied: <br>-semantic ambiguity (columns “Si registra la presenza femminile”<br>  and “Riscontro per la prevalenza di genere tra i partecipanti”);<br>-some columns have the same name (“Utente creazione”, “comune”, “regioni”, “utente modifica”, “certificati”);<br>-values of column “obiettivi” and “modalità di inclusione” have different degrees of specificity, if any. 	| Not satisfied:<br>-arbitrary use of uppercase and lowercase;<br>-arbitrary use of the accent (e.i. sì vs si);<br>-values “osservatorio partecipazione” and “redazione osservatorio partecipazione” in column “segnalato da persona” have no clear distinguishable meaning;<br>-column “utente creazione” contains sometimes a nickname, others a number as values;<br>-arbitrary representation of thousands (“k”, dot and nothing are used at the same time);<br>-column “comitato di pilotaggio” contains arbitrary values for the representation of absence: null, no or “non è previsto”. 	| Satisfied: updated in real time.                                                                	|
| D2, D3, D11, D12 	| Not satisfied:<br>-features fields filled with sporadic full stops, whose meaning remains unclear, in place of explanations of self-evaluation results.                                                                                 	| Not satisfied:<br>-lists school self-evaluation marks, but does not provide any information about the<br>meaning of such marks.                                                                                                                                                                                                                                                         	| Not satisfied:<br>-arbitrary use of uppercase and lowercase;<br>-arbitrary use of an indicator for the absence of information: dot, “motivazione non dichiarata” and “mancanza dati comparativi” are being used simultaneously.<br>-arbitrary use of substitutes of accents.                                                                                                                                                                                                                                                                                                                  	| Satisfied: yearly update.                                                                       	|
| D4               	| Not satisfied:<br>-many fundamental columns contain empty fields (“codice fiscale”, “ente gestore”,<br>“numero di telefono”, “CAP”, “Località”, “DS cognome”, “DS Nome”, “DS Tipo”);<br>-occasional use of the dash to replace "null" values. 	| Not satisfied:<br>-occasional use of the dash to replace "null" values;<br>-presence of syntactic inaccuracy;<br>-nomenclature of the column “codice” is too general.                                                                                                                                                                                                                   	| Not satisfied:<br>-arbitrary use of uppercase and lowercase;<br>-arbitrary use of quotes when defining the names of the schools;<br>-arbitrary naming of addresses;<br>-arbitrary presence of telephone number prefix;<br>-update of the data is not coherent with the scholastic year of concern.                                                                                                                                                                                                                                                                                            	| Not<br>satisfied: some schools data is reported as not up to date.                              	|
| D5, D6           	| Not satisfied: some fields are lacking values; "null" values are replaced by a dash.                                                                                                                                                          	| Not satisfied:<br>- semantic inaccuracy due to "null" values replaced by a dash.                                                                                                                                                                                                                                                                                                        	| Not satisfied:<br>- there is no standard of defining "null" values, empty fields remain empty or are<br>filled by a dash;<br>- arbitrary use of uppercase and lowercase.                                                                                                                                                                                                                                                                                                                                                                                                                      	| Satisfied.                                                                                      	|
| D7               	| Not satisfied: there are many empty fields, especially in columns “latitudine”, “longitudine”, “stato cantiere”, “numero civico”.                                                                                                             	| Not satisfied, as at times column “Indirizzo” contains city names instead of addresses.                                                                                                                                                                                                                                                                                                 	| Not satisfied: <br>- there seems not to be any guideline about the filling of the fields, e.i. there<br>is no civic number in the “Numero civico” column, but we could find civic numbers in the “Indirizzo” column;<br>- arbitrary use of uppercase and lowercase.                                                                                                                                                                                                                                                                                                                           	| Not satisfied: There is no specification of date, and the last update dates back to 31/12/2019. 	|
| D8               	| Not satisfied: there are some empty fields in the column “Comune”.                                                                                                                                                                            	| Satisfied.                                                                                                                                                                                                                                                                                                                                                                              	| Satisfied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    	| Satisfied.                                                                                      	|
| D9               	| Not satisfied: there are some empty fields.                                                                                                                                                                                                   	| Not satisfied: <br>-there is no clear meaning of the column names;<br>-presence of colon instead of semicolon;<br>- lack of a shared nomenclature for “no” values: at times they are represented by "null", others by “no”.                                                                                                                                                             	| Not satisfied:<br>-internal nomenclature not coherent;<br>-arbitrary use of uppercase and lowercase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          	| Satisfied: updated in real time.                                                                 	|
| D10              	| Satisfied                                                                                                                                                                                                                                     	| Satisfied, but there is no clear meaning of the column names.                                                                                                                                                                                                                                                                                                                           	| Not satisfied: differences in the handling of accents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        	| Satisfied: updated in real time.                                                                 	|
|                  	|                                                                                                                                                                                                                                               	|                                                                                                                                                                                                                                                                                                                                                                                         	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	|                                                                                                 	|
|                  	|                                                                                                                                                                                                                                               	|                                                                                                                                                                                                                                                                                                                                                                                         	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	|                                                                                                 	|
|                  	|                                                                                                                                                                                                                                               	|                                                                                                                                                                                                                                                                                                                                                                                         	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	|                                                                                                 	|                                                                     |


#### Completeness algorithm results

Here are the results of our completeness algorithm. Our null values include 0s, "null" and other puctuation marks used to fill an empty field.

| Dataset 	| Total values 	| Null values 	| Completeness 	|
|---------	|--------------	|-------------	|--------------	|
| D1      	| 113815       	| 44169       	| 61.19%       	|
| D2      	| 200544       	| 7           	| 100%         	|
| D3      	| 198276       	| 6           	| 100%         	|
| D4      	| 29127        	| 6715        	| 76.95%       	|
| D5      	| 642796       	| 22675       	| 96.47%       	|
| D6      	| 406432       	| 0           	| 100%         	|
| D7      	| 3646         	| 0           	| 100%         	|
| D8      	| 304          	| 0           	| 100%         	|
| D9      	| 88272        	| 0           	| 100%         	|
| D10     	| 18553        	| 0           	| 100%         	|
| D11     	| 40044        	| 0           	| 100%         	|
| D12     	| 41082        	| 7           	| 99.98%       	|

## Legal analysis

## Ethical analysis

## Technical analysis

### Formats, metadata, provenance URI

#### Original datasets

None of the platforms containing the open datasets specified their encoding, even though in ["Linee guida per la valorizzazione del patrimonio informativo pubblico" published by AGID"](https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/it/stabile/riepilogoazioni.html) it is specified they ought to, preferably UTF-8.

Formats, metadata, provenance and URI of our original datasets can be resumed as follows:

**D1** </br>

*Format:*  XML, XML Schema, JSON, CSV, Excel CSV </br>
*Metadata:* Availability of human-readable metadata </br>


**D2, D3, D5, D6, D11, D12 (MIUR)**</br>

*Format:* CSV, JSON, RDF, XML

*Metadata:* Although there is available metadata in XML/RDF for the datasets, some namespaces have been declared even if they are not used. </br>

**D4**</br>

*Format:* HMTL, CSV, Txt, PDF; Excel 95+, Excel 2007+. The last three aren't open formats and thus clash with the guidelines provided by Codice dell'amministrazione digitale , that contains in [Art.1](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/_rst/capo1_sezione1_art1.html) the definition of an open format. Even if PDF has been standardized by ISO (ISO/IEC 32000-1:2008), with different formats according to scope, it is not suited for datatasets and it is highly recommended not to use it since it prevents the interoperability of the data. For what concerns Excel, it is a proprietary format whose non-proprietary counterpart is ODS (Open Document Spreadsheet).</br>

*Metadata:* No metadata. </br>

*Provenance:*https://sed.istruzioneer.it/scumgnt/scu-istituzione </br>

**D7**</br>

*Format:* CSV</br>

*Metadata:* Availability of human-readable metadata. </br>

**D8**</br>

*Format:* XSLT, which is not an open format.</br>

*Metadata:* No metadata. </br>

**D9**</br>

*Format:* ZIP/CSV</br>

*Metadata:* Availability of metadata in XSD format.</br>

*Provenance:*http://www.rgs.mef.gov.it/VERSIONE-I/home.html </br>

**D10**</br>

*Format:* CSV, PDF, Excel. The last two distributions clash with the guidelines provided by Codice dell'amministrazione digitale , that contains in [Art.1](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/_rst/capo1_sezione1_art1.html) the definition of an open format. Even if PDF has been standardized by ISO (ISO/IEC 32000-1:2008), with different formats according to scope, it is not suited for datatasets and it is highly recommended not to use it since it prevents the interoperability of the data. For what concerns Excel, it is a proprietary format whose non-proprietary counterpart is ODS (Open Document Spreadsheet). </br>

*Metadata:* No metadata. </br>

*Provenance:* NON SO SE METTERLA</br>


### URI

The analysis of the URIs has to be carried out separately. Their formulation, in fact, clashes with the fact URIs have to be xx, xx, xy.

| Dataset 	| URI                                                                                                                                         	| Fixed URI                                                                                           	|
|---------	|---------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------	|
| D1      	| https://www.osservatoriopartecipazione.it/prisma/dashboard/OpenData.aspx?function=export&filterid=06f74e5de3c94d7f922e23d4e7c7f35d&type=csv 	| https://www.osservatoriopartecipazione.it/prisma/dashboard/OpenData/dati_per_anno_di_avvio          	|
| D2      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/VALUTAZIONE_ESITI_STA20160831.csv                                      	| https://dati.istruzione.it/opendata/catalogo_scuola/scuole/VALUTAZIONE_ESITI_STA20152016            	|
| D3      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/VALUTAZIONE_ESITI_STA20161720170831.csv                                	| https://dati.istruzione.it/opendata/catalogo_scuola/scuole/VALUTAZIONE_ESITI_STA20162017            	|
| D4      	| https://sed.istruzioneer.it/scumgnt/scu-istituzione                                                                                         	| https://sed.istruzioneer.it/scumgnt/scu-istituzione/anagrafe_scuole_bologna                         	|
| D5      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/EDICONSICUREZZASTA20171820180925.csv                                   	| https://dati.istruzione.it/opendata/catalogo_scuola/edilizia/SICUREZZA20172018                      	|
| D6      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/EDIVINCOLISTA20171820180925.csv                                        	| https://dati.istruzione.it/opendata/catalogo_scuola/edilizia/VINCOLI20172018                        	|
| D7      	| https://openricostruzione.regione.emilia-romagna.it/media/opendata/interventi_ricostruzionepubblica.csv                                     	| https://openricostruzione.regione.emilia-romagna.it/media/opendata/interventi_ricostruzionepubblica 	|
| D8      	| http://www.ingv.it/quest/images/rilievimacrosismici/xlsx/INGV_QUEST_2012-05-29.xlsx                                                         	| http://www.ingv.it/quest/dataset/rilievimacrosismici/INGV_QUEST_RILIEVI_EMILIA_ROMAGNA_2012-05-29   	|
| D9      	| https://opencoesione.gov.it/it/opendata/regioni/progetti_esteso_EMR.zip                                                                     	| https://opencoesione.gov.it/it/opendata/regioni/progetti_esteso_EMR                                 	|
| D10     	| No URI                                                                                                                                      	|                                                                                                     	|
| D11     	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/SCUANAGRAFEPAR20151620160831.csv                                       	| https://dati.istruzione.it/opendata/catalogo_scuola/scuole/VALUTAZIONE_ESITI_PAR20152016            	|
| D12     	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/SCUANAGRAFEPAR20161720170831.csv                                       	| https://dati.istruzione.it/opendata/catalogo_scuola/scuole/VALUTAZIONE_ESITI_PAR20162017            	|




#### Mashed-up datasets

We specified the datasets' encoding in ??

##### Format: 
We chose to distribute our mashed-up datasets in CSV.(link)

##### Provenance:
Works mashed-up dataset
Education mashed-up dataset
Entrepreneurship mashed-up dataset

##### Metadata and URI
The metadata of our mashed-up datasets has been compiled accordingly to the FAIR principles. 
Each of our datasets has been assigned a URI:
table
Moreover, they are accessible, interoperable and reusable. 



### Preprocessing issues 
The mashing-up of our datasets required some necessary preprocessing steps. Some of the issues we encountered were connected to what we discussed in discussed in (capitolo qualità). Initially, we had to choose which areas to include in our analysis. We therefore selected the 19 most affected areas of Emilia-Romagna. The first main issue connected to this choice consisted in the absence of a shared vocabulary for the geographical places, which can be problematic in the case their names contain apostrophes. This is why we needed to create our own vocabulary, containing all the possibilities for the names. As an example, for the town of Sant’Agostino, we included both SANTAGOSTINO and SANT’AGOSTINO.

Another common problem was the lack of encoding statements, that led us to guess which encoding was use. For this reason, in the case of D1(?), it was necessary to skip some badly-encoded lines in order to process the dataset.

#### Works mashed-up dataset
The first issue with the mashing up of datasets D7 and D8 is connected to the lack of rules regarding what the CSV delimiter should be. In each case, we had to find out what the delimiter was and specify it for the file to be properly read. 

| Dataset         | Delimiter                   | 
| ------------- | ----------------------- | 
| D7     | ; | 
| D8       | , | 

For what concerns D8, it also wasn’t released in an open format: Excel. We thus had to use the pandas read_excel Python method.

Finally, there is a different nomenclature of "comune" we had to make a decision about in order to guarantee our mash-ups could be working together:

| Dataset         | Nomenclature for comune                   | 
| ------------- | ----------------------- | 
| D7 | COMUNE | 
| D8  | Comune | 

To this regard, we chose to adopt the uppercase one.

#### Education mashed-up dataset

The mashing-up of the Education mashed-up dataset is not favoured by the different types of Python objects the values of the dataframes belong to, which make it impossible to merge together two columns of different object types even if they have the same content. An example has been found when trying to join CODICESCUOLA, a string, of D6 with the corresponding column of D4, an object. Secondly, open datasets that contain the same informative data (schools code, for instance) name it arbitrarily, making it difficult to automatize the mash-up process.

| Dataset         | Name of Codice Fiscale Scolastico                   | 
| ------------- | ----------------------- | 
| D2, D3, D11, D12     | CODICEISTITUTO | 
| D4     | Codice | 
| D5, D6     | CODICESCUOLA | 

The same has been noticed with the nomenclature of “comune” of D4, which was lowercase and therefore had to be uniformed with the other two mash-ups.

Also, D2, D3, D11, D12 have a problem with dates (i.e. “201516”), that have been arbitrarily formatted without taking into account CSV norms (specifically ISO_8601). In this way, dates are not computationally understandable unless manually processed.

The final issue with the datasets is that D2, D3, D11, D12 contain whitespace in the column headers that needs to be stripped in order for the document to be merged with other datasets. This is an important problem that proves how the publication of an open dataset does not only require an open format (CSV, in this case), but also a structure that complies to such format in order for it to be read and manipulated.

Some columns of the original datasets have been dropped or modified according to our research purpose. More specifically:
- We dropped the xxxx in D2, D3, D11, D12; for D4 we just kept the school code.
- We added the number of schools that have emerged from our data, using a pandas pivot table function;
- We modified the school score ("PUNTEGGIOSCUOLA" column) of D2, D3, D11, D12 according to the number of schools, so our final school score is an average;
- We kept the count of missing safety certificates only.

#### Entrepreneurship mashed-up dataset

The first issue that came up when preprocessing our datasets before cleaning them was, again, the delimiter:

| Dataset         | Delimiter                   | 
| ------------- | ----------------------- | 
| D1     | "," | 
| D9    | \| | 
| D10   | ; | 

D1 was more troublesome than the other datasets, since it included quotes for each field to fill in, even though sometimes such quotes weren’t even closed. This also created a problem with numbers, since they were encoded as strings and not as integers. As a result of this problem, along with the lack of an encoding declaration, it was necessary to skip a few lines that weren’t correctly formatted and use a workaround to correctly parse the document. 

Another issue arised when dealing with dates, which weren’t coded in the correct datetime format (metti ISO), especially in D1 and D10. 

#### Preprocessing issues related to visualization

As for what concerns visualization, every decimal comma in every number had to be converted in the decimal dot in order to be processed by the Folium library; the same goes for the columns of latitude and longitude in D7, which moreover had to follow the ISO 6709 Standard representation of geographic point location by coordinates. However, it is necessary to specify for the first case that both commas and dots are currently generally recognized as a decimal marker, even though in the payments field (the same as our case), as ISO_20022 states, only dot is accepted as a decimal marker. 

#### Final remarks
The structure of both mashed-up datasets aimed to solve some issues we faced when analyzing the quality of our datasets:

| Issue of the original datasets         | Solution in the mashed-up datasets                  | 
| ------------- | ----------------------- | 
| No shared nomenclature for the CSV delimiter | Comma delimiter as stated in xx | 
| Arbitrary use of uppercase and lowercase | Use of uppercase only | 
| No coherence of internal nomenclature  | Renaming of the columns | 
| File distribution not in an open format     | Distribution of the mash-ups in an open format | 
| Arbitrary use of the decimal mark for numbers | Choice to use the decimal dot only | 
| Year format unclear  | Clear year format | 
| Absence of machine-readable metadata  | Creation of machine-readable metadata | 
|No encoding statement | Encoding statement | 



## Sustainability of the update of the datasets over time

## Visualization

The visualization of the data was carried out through two main steps:

1) The creation of the map
For the creation of the map, we used the Folium library, which is connected to Leaflet. To draw the GEOJSON polygons of the areas we were interested in, we used a [Generatore di mappe comunali italiane](https://observablehq.com/@jenkin/generatore-di-mappe-comunali-italiane) - controlla licenzeee. Leaflet displays the map through OpenStreetMaps.

For usability purposes, the map can be navigated thrugh a layer control so that one can hide or see:
1) A choropleth layer map created accordingly to the Scala microsismica Mercalli-Cancani-Sieberg;
2) Feature groups with three types of reconstruction works progress:
  - Red markers for works that have never started;
  - Orange markers for works in progress;
  - Green markers for finished works.
  
 Additionally, clicking on each marker will provide information about the specific place and the financial aid assigned and paid for it.

2) Website and charts
To build the website, we used Bootstrap 4, while to build the charts we used the Javascript library Charts.js.

We chose to divide our chart in four main thematic groups: a generic one and one for each mashed-up dataset we created.

1) The "general graphs" tab
Clicking on the generic tab will return two main types of graphs. 

The first one represents, on the X axis the "damage index", that is to say, for each Comune, the sum of the number of works that have never started and the number of works in progress, divided by the number of schools. Thus, for each school there is a number of incomplete works: an index of incompleteness. On the Y axis, instead, there is the school score, for each year respectively.

Here is the formula:

X axis: For each area, 
(Never started works + works in progress)/ total number of schools
This provides us an index of how many works to be finished there are for each school.

Y axis: For each area,
School score (A.Y. 2015-2016 or 2016-2017). Note that in our datasets the school score is an average.

The type of graph is a mixed one, as the scatterplot's coordinates are given by the two axes, while the line data is given by a regression equation calculated through a JS regression library. In this way, not only we can see how much the real data fits the model, but also what is the type of model that has emerged. We can conclude, in fact, that the descendent line more visible for the year 2016-2017 represents an inverse proportion relationship between damage index and school scores- the lower the damage index, the higher the average school score is.
Our line deliberately didn't take into account the outlier, which corresponds to the area of Bondeno, whose coordinates would damage the fitness parameters of the model. 

The other type of graph represents the trend of the total number of works related to damage.

2) The works tab

In this tab, clicking on an area of the map will return data about the types of reconstruction works progress for that specific area.

3) Education charts tab

This tab contains two charts:
One related to the total number of schools and the absence of certificates or presence of environmental constraints for each clicked area on the chart; another related to the comparison of the average school score between statal schools and paritary ones.

4) Entrepreneurship charts

Finally, in each tab it is possible to find an "info" button in order to understand the displayed data better.

## RDF assertion of the data

For what concerns the metadatation, it was decided to follow the documentation of [DCAT-AP v. 2.0](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe). For the provenance of our mashed-up datasets, we used the ontology [PROV-O](https://www.w3.org/TR/prov-o/) as suggested in the aforementioned documentation.

## Final remarks
