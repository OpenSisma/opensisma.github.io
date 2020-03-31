
## Introduction

OpenSisma has been carried out for the exam Open Access and Digital Ethics as a Digital Humanities and Digital Knowlegde course at the University of Bologna. The two contributors of OpenSisma are:

- Milena Corbellini;
- Anna Sofia Lippolis.

In the context of the eartquakes that happened in May, 2012, in Emilia-Romagna, OpenSisma aims to study and show the effects of such natural disasters in terms of reconstruction works' progress, quality of education for primary, secondary and high schools, both public and paritary; availability of safety certificates and/or environmental constraints and entrepreneurship drive. Although the aim was to make a comparison between 2012 and 2020 information, creating an "Emilia Romagna earthquakes: 8 years later" study project, the unavailability of data related to education brought us to include less up-to-date data sources for that aspect, while the other thematic areas' data are up-to-date. 

With this perspective in mind, we hypothesized, for each municipality analysed, a correlation between:
- total number of reconstruction works and damage entity (detected by the Mercalli-Cancani-Sieberg, hereon MCS, microseismic scale);
- amount of reconstruction works that still have to be done and low schools score; in this context we also analyzed the score of both public and paritary schools, in order to study the differences between them;
- disaster effects and rise in the number of entrepreneurial processes.

We then wondered whether schools had the safety certificates they needed in the case such tragic event happened again, a necessity that could grow in relevance if environmental constraints were also registered.

The analysis is based on a collection of open datasets, which were studied from the legal and technical point of view and then processed in order to create mashed-up datasets that met the priciples of the Linked Open Data, with an RDF model compliant to the DCAT-AP ontology. In this way, we were able to produce [5 stars Linked Open Data](https://www.w3.org/community/webize/2014/01/17/what-is-5-star-linked-data/) datasets, to show them and to make them freely downloadable, along with their metadata, through an interactive website that can be exploited by everyone. Our derived datasets, this documentation and the code we created are distributed with an open license, so that our research results not only transparent, but also repeatable.

## Scenario

We selected the 19 most damaged areas among those affected by the earthquakes of May 2012 (Bondeno, Camposanto, Cavezzo, Cento, Concordia sulla Secchia, Crevalcore, Finale Emilia, Mirandola, Novi di Modena, Pieve di Cento, Poggio Renatico, Reggiolo, San Felice sul Panaro, San Prospero, Medolla, Mirabello, San Possidonio,  Sant'Agostino,  Vigarano Mainarda). Many of them are still in state of emergency. In this struggling scenario, our study can be useful to have a deeper look at the effects of eartquakes on the population, not only in terms of damage and reconstruction, but also in terms of the impact on some aspects of day to day life. More specifically, we found it meaningful to analyze how the educational and entrepreneurial fields have been affected over the years.
</br>

OpenSisma's purpose is to involve citizens of sensitive areas to be aware of the changes and the effects determined by government measures and the way in which those affected the life of citizens themselves. Our research would not only be useful for this portion of population, but also for the researchers and the scholars that are interested in this topic. It is possible to conclude that the proliferation of projects like OpenSisma would improve the reuse of Italian open data and the overall quality of the available datasets through their adaptation to interoperability standards and a correct metadatation. The knowledge circulation that would derive from this process would bring an increase in the overall innovation of the country.


## Original datasets and mashed-up datasets
In order to carry out our analysis, we chose to use datasets that differed in provenance, size and content.  

### Datasets used
| ID | Dataset homepage link | Name |
| :---         |     :---     |          :--- |
| D1   | http://www.osservatoriopartecipazione.it/opendata     | Open data dell'Osservatorio Partecipazione per anno di avvio    |
| D2     | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA       | Autovalutazione della scuola sezione Esiti. Scuola statale (anno scolastico 2015-2016)      |
| D3 |https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA | Autovalutazione della scuola sezione Esiti. Scuola statale (anno scolastico 2016-2017) |
| D4        |     https://sed.istruzioneer.it/scumgnt/scu-istituzione      |         Anagrafe scuole dell'Emilia Romagna |
| D5   | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Edilizia%20Scolastica&datasetId=DS0280EDICONSICUREZZASTA     | Certificazioni e documenti relativi alla sicurezza (SICUREZZASCUOLE), 2018-2019    |
| D6     | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Edilizia%20Scolastica&datasetId=DS0250EDIVINCOLISTA       | Presenza di vincoli (idrogeologici, sismici)   , 2018-2019   |
| D7 | https://openricostruzione.regione.emilia-romagna.it/open-data | Open Ricostruzione - Interventi di ricostruzione pubblica |
| D8       |    http://quest.ingv.it/  |          Arcoraci L., Berardi M., Bernardini F., Brizuela B., Caracciolo C.H., Castellano C., Castelli V., Cavaliere A., Del Mese S., Ercolani E., Graziani L., Maramai A., Massucci A., Rossi A., Sbarra M., Tertulliani A., Vecchi M. and Vecchi S., 2012. *Rapporto macrosismico sui terremoti del 20 (ML 5.9) e del 29 maggio 2012 (ML 5.8 e 5.3) nella pianura padano-emiliana*. Rapporto tecnico QUEST, Istituto Nazionale di Geofisica e Vulcanologia (INGV), Roma, 15pp. https://doi.org/10.13127/QUEST/20120525 |
| D9  | https://opencoesione.gov.it/it/opendata/#!progetti_regione_section     | Progetti di OpenCoesione con tracciato esteso (Emilia-Romagna)    |
| D10    | http://startup.registroimprese.it/        | Elenco di startup and PMI innovative      |
| D11  | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR     | Autovalutazione della scuola sezione Esiti. Scuola paritaria (anno scolastico 2015-2016)    |
| D12    | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR     | Autovalutazione della scuola sezione Esiti. Scuola paritaria (anno scolastico 2016-2017)      |

### Mashed-up datasets

The datasets were then grouped and processed into three mashed-up datasets:

| Primary datasets | Mashed-up dataset | URL | 
| :---         |     :---:      |          ---: |
| D2, D3, D4, D5, D6, D11, D12   | OpenSisma dataset Education     | https://opensisma.github.io/metadata-dataset-education.html    |
| D7, D8   | OpenSisma dataset Reconstruction      | https://opensisma.github.io/metadata-dataset-reconstruction.html      |
| D1, D9, D10   | OpenSisma dataset Entrepreneurial Processes       | https://opensisma.github.io/metadata-dataset-entrepreneurial-processes.html      |

Our mashed-up datasets are grouped in this page: [Catalogue](https://opensisma.github.io/catalogue.html).


## Informative quality analysis

Our informative quality analysis follows the guidelines reported in ["Linee guida per la valorizzazione del patrimonio informativo publico" by AGID](https://docs.italia.it/italia/daf/lg-patrimonio-publico/it/stabile/aspettiorg.html#qualita-dei-dati), which takes into account standards ISO/IEC 25012 and ISO/IEC 25024.  As for what concerns completeness, our comments about empty values in the "Completeness" column refer, as does the aforementioned document, only to those fields that are necessary to be written in the dataset. Because we noticed empty fields were at times filled with dashes or dots instead of "null" values, we then decided to calculate the percentage of overall completeness with an algorithm ([see the "code" section](https://github.com/OpenSisma/opensisma.github.io/blob/master/code/completezza.py)). The results are reported below.

| Dataset          	| Completeness                                                                                                                                                                                                                                  	| Accuracy                                                                                                                                                                                                                                                                                                                                                                                	| Coherence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	| Promptness                                                                                      	|
|------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------	|
| D1               	| Not satisfied: <br> - values of column “obiettivi” and “modalità di inclusione” contain different degrees of specificity, if any;<br> - 61,19% empty fields, as detected by the completeness algorithm.                                                                      	| Not satisfied: <br>-semantic ambiguity (columns “Si registra la presenza femminile”<br>  and “Riscontro per la prevalenza di genere tra i partecipanti”);<br>-some columns have the same name (“Utente creazione”, “comune”, “regioni”, “utente modifica”, “certificati”);<br>-values of column “obiettivi” and “modalità di inclusione” have different degrees of specificity, if any. 	| Not satisfied:<br>-arbitrary use of uppercase and lowercase;<br>-arbitrary use of the accent (e.i. sì vs si);<br>-values “osservatorio partecipazione” and “redazione osservatorio partecipazione” in column “segnalato da persona” have no clear distinguishable meaning;<br>-column “utente creazione” contains sometimes a nickname, others a number as values;<br>-arbitrary representation of thousands (“k”, dot and nothing are used at the same time);<br>-column “comitato di pilotaggio” contains arbitrary values for the representation of absence: null, no or “non è previsto”. 	| Satisfied: updated in real time.                                                                	|
| D2, D3, D11, D12 	| Not satisfied:<br>-features fields filled with sporadic full stops, whose meaning remains unclear, in place of explanations of self-evaluation results.                                                                                 	| Not satisfied:<br>-lists school self-evaluation marks, but does not provide any information about the<br>meaning of such marks.                                                                                                                                                                                                                                                         	| Not satisfied:<br>-arbitrary use of uppercase and lowercase;<br>-arbitrary use of an indicator for the absence of information: dot, “motivazione non dichiarata” and “mancanza dati comparativi” are being used simultaneously.<br>-arbitrary use of substitutes of accents.                                                                                                                                                                                                                                                                                                                  	| Not satisfied for D2 and D3: reported as annual, but it hasn't been updated since 13/02/2018 [see webpage](http://web.archive.org/web/20200323082933/https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA); satisfied for D11 and D12.                                                                     	|
| D4               	| Not satisfied:<br>-many fundamental columns contain empty fields (“codice fiscale”, “ente gestore”,<br>“numero di telefono”, “CAP”, “Località”, “DS cognome”, “DS Nome”, “DS Tipo”);<br>-occasional use of the dash to replace "null" values. 	| Not satisfied:<br>-occasional use of the dash to replace "null" values;<br>-presence of syntactic inaccuracy;<br>-nomenclature of the column “codice” is too general.                                                                                                                                                                                                                   	| Not satisfied:<br>-arbitrary use of uppercase and lowercase;<br>-arbitrary use of quotes when defining the names of the schools;<br>-arbitrary naming of addresses;<br>-arbitrary presence of telephone number prefix;<br>-update of the data is not coherent with the scholastic year of concern.                                                                                                                                                                                                                                                                                            	| Not<br>satisfied: some schools data is reported as not up to date.                              	|
| D5, D6           	| Not satisfied: some fields are lacking values; "null" values are replaced by a dash.                                                                                                                                                          	| Not satisfied:<br>- semantic inaccuracy due to "null" values replaced by a dash.                                                                                                                                                                                                                                                                                                        	| Not satisfied:<br>- there is no standard of defining "null" values, empty fields remain empty or are<br>filled by a dash;<br>- arbitrary use of uppercase and lowercase.                                                                                                                                                                                                                                                                                                                                                                                                                      	| Satisfied.                                                                                      	|
| D7               	| Not satisfied: there are many empty fields, especially in columns “latitudine”, “longitudine”, “stato cantiere”, “numero civico”.                                                                                                             	| Not satisfied, as at times column “Indirizzo” contains city names instead of addresses.                                                                                                                                                                                                                                                                                                 	| Not satisfied: <br>- there seems not to be any guideline about the filling of the fields, e.i. there<br>is no civic number in the “Numero civico” column, but we could find civic numbers in the “Indirizzo” column;<br>- arbitrary use of uppercase and lowercase.                                                                                                                                                                                                                                                                                                                           	| Not satisfied: There is no specification of date, and the last update dates back to 31/12/2019. 	|
| D8               	| Not satisfied: there are some empty fields in the column “Comune”.                                                                                                                                                                            	| Satisfied.                                                                                                                                                                                                                                                                                                                                                                              	| Satisfied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    	| Satisfied.                                                                                      	|
| D9               	| Not satisfied: there are some empty fields.                                                                                                                                                                                                   	| Not satisfied: <br>-there is no clear meaning of the column names;<br>-presence of colon instead of semicolon;<br>- lack of a shared nomenclature for “no” values: at times they are represented by "null", others by “no”.                                                                                                                                                             	| Not satisfied:<br>-internal nomenclature not coherent;<br>-arbitrary use of uppercase and lowercase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          	| Satisfied: updated in real time.                                                                 	|
| D10              	| Satisfied                                                                                                                                                                                                                                     	| Satisfied.                                                                                                                                                                                                                                                                                                                           	| Not satisfied: differences in the handling of accents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        	| Satisfied: updated in real time.                                                                 	|
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
### Original Datasets
The original datasets used to cover the different themes of this project, as we said, are:
- D1 = Open data anno di avvio;
- D2 = Autovalutazione della scuola sezione Esiti. Scuola statale (1516);
- D3 = Autovalutazione della scuola sezione Esiti. Scuola statale (1617);
- D4 = Anagrafe scuole Emilia Romagna;
- D5 = Certificazioni e documenti relativi alla sicurezza (SICUREZZASCUOLE);
- D6 = Presenza di vincoli (idrogeologici, sismici);
- D7 = Interventi di ricostruzione publica;
- D8 = Rilievi Macrosismici;
- D9 = Progetti di OpenCoesione con tracciato esteso suddivisi per regione;
- D10 = Startup;
- D11 = Autovalutazione della scuola sezione Esiti. Scuola paritaria (1517);
- D12 = Autovalutazione della scuola sezione Esiti. Scuola paritaria (1617).

### Legal checklist

The fields with an asterisk have to be further explained in the notes below.

| | To check | D1|  D2, D3, D11, D12 | D4 | D5, D6| D7 | D8 | D9 | D10 | 
| ----------- | --------| ------|--------|-------|---------|---------|---------|---------|-----|
| **Privacy issues** | 1.1 Is the dataset free of any personal data as defined in the Regulation (EU) 2016/679? |yes*|no*| yes | yes| yes*| yes|yes|yes|
| | 1.2 Is the dataset free of any indirect personal data that could be used for identifying the natural person? If so, is there a law that authorizes the PA to release them? Or any other legal basis? Identify the legal basis. |yes |no, no*|yes  |yes | yes| yes|yes|yes|
| | 1.3 Is the dataset free of any particular personal data (art. 9 GDPR)? If so is there a law that authorizes the PA to release them? |yes, no|no, no*|yes  |yes | yes, no| yes|yes*|yes|
| | 1.4 Is the dataset free of any information that combined with common data available on the web, could identify the person? If so, is there a law that authorizes the PA to release them?  |yes |yes|yes  |yes | yes| yes|yes|yes|
| | 1.5 Is the dataset free of any information related to human rights (e.g. refugees, witness protection, etc.)? |yes |no*|yes  |yes | yes| yes|yes|yes|
| | 1.6 Do you use a tool for calculating the range of the risk of deanonymization? Do you anonymize the dataset? With which technique? Did you check the three mandatory parameters: singling out, linking out, inference out?  |no |no|no|no|no|no|no|no|
| | 1.7 Are you using geolocalization capabilities? Do you check that the geolocalization process can’t identify single individuals in some circumstances? | no, yes|no, yes|no, yes|no, yes|no, yes|no, yes|no, yes|no, yes|
| |1.8 Did you check that the open data platform respect all the privacy regulations (registration of the end-user, profiling, cookies, analytics, etc.)? | no*|yes|no*|yes|no*|no*|yes|yes|
| |1.9 Do you know who are in your open data platform the Controller and Processor of the privacy data of the system?  |yes, ERVET s.p.a. |yes, MIUR |yes, USR-ER*|yes, MIUR |yes, Agenzia Regionale per la Ricostruzione and Struttura del commissario per la ricostruzione |yes, INGV and Dr. Lucio Badiali |yes, Dipartimento per le politiche di Coesione|yes, Infocamere S.C.p.a. |
| |1.10 Where the datasets are physically stored (country and jurisdiction)? Do you have a cloud computing platform? Do you have checked the privacy regulation of the country where the dataset are physically stored? (territoriality) |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |Italy (Italian jurisdiction), no, yes |
| |1.11 Do you have non-personal data? Are you sure that are not "mixed data"? | there are mixed data*|there are mixed data*|there are no mixed data|there are no mixed data|there are mixed data*|there are no mixed data|there are no mixed data|there are no mixed data|
| **Intellectual Property Rights of the dataset** | | |
| | 2.1 Do you have created and generated the dataset ? | no| no| no|no|no| no| no|no|
| | 2.2 Are you the owner of the dataset? Who is the owner? |no, ERVET s.p.a.|no, MIUR|no, USR-ER|no, MIUR|no, Regione Emilia Romagna|no, INGV|no, Dipartimento per le politiche di coesione|no, Infocamere S.C.p.a.
| | 2.3 Are you sure to not use third party data without the proper authorization and license ? Are the dataset free from third party licenses or patents? | yes |yes| yes| yes|yes|yes|yes|yes|
| | 2.4 Do you have checked if there are some limitations in your national legal system for releasing some kind of datasets with an open license? | yes |yes| yes| yes|yes|yes|yes|yes|
| **License** | | |
| | 3.1 Do you release the dataset with an open data license? In case of the use of CC0 do you check that you have all the right necessary for this particular kind of license (e.g., jurisdiction)?| yes |yes| yes| yes|yes|yes| yes|no*|
| | 3.2 Do you include the clause: "In any case the dataset can’t be used for re-identifying the person" ?| no|no|no|no|no|no|no|no|
 | | 3.3 Do you release the API (in case you have) with an open source license|N/A|N/A|N/A|N/A|N/A|yes|N/A|N/A|
| | 3.4 Do you check that the open data/API platform licence regime is compliance with your IPR policy? Do you have all the licences related to the open data platform/API software?|yes|yes|yes|yes|yes|yes|yes|no*|
| **Limitations on public access** | | |
| | 4.1 Do you check that the dataset concerns your institutional competences, scope and finality? Do you check if the dataset concerns other public administration competences? |yes|yes|yes|yes|yes|yes|yes|yes|
| | 4.2 Do you check the limitations for the publication stated by your national legislation or by the EU directives ? |yes|yes|yes|yes|yes|yes|yes|yes|
| |4.3 Do you check if there are some limitations connected to the international relations, public security or national defence ?|yes|yes|yes|yes|yes|yes|yes|yes|
| |4.4 Do you check if there are some limitations concerning the public interest ?|yes|yes|yes|yes|yes|yes|yes|yes|
| |4.5 Do you check the international law limitations ?|yes|yes|yes|yes|yes|yes|yes|yes|
| |4.6 Do you check the INSPIRE law limitations for the spatial data?|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A
| **Economical Conditions** | | |
| | 5.1 Do you check that the dataset could be released for free ? |yes|yes|yes|yes|yes|yes|yes|yes|
| | 5.2 Do you check if there are some agreements with some other partners in order to release the dataset with a reasonable price ? |N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A|
| |5.3 Do you check if the open data platform terms of service include a clause of “non liability agreement” regarding the dataset and API provided ? |yes |yes |yes |yes |no |yes |yes|yes|
| |5.4 In case you decide to release the dataset to a reasonable price do you check if the limitation imposed by the new directive 2019/1024/EU are respected ? Are you able to calculate the “marginal cost”? Are you able to justify the “reasonable return on investment” limited to cover the costs of collection, production, reproduction, dissemination, preservation and rights clearance? There is a national law that justify your public administration to apply the “reasonable return of investment”?|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A|
| | 5.5 In case you decide to release the dataset to a reasonable price do you check the e-Commerce directive1 and regulation?|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A
| **Temporary aspects** | | |
| |6.1 Do you have a temporary policy for updating the dataset ? |yes|yes*|yes|yes|yes|yes|yes|no*
| | 6.2 Do you have some mechanism for informing the end-user that the dataset is updated at a given time to avoid mis-usage and so potential risk of damage ?|yes|yes*|yes|yes|yes|yes*|yes|yes|
| | 6.3 Did you check if the dataset for some reason can’t be indexed by the research engines (e.g. Google, Yahoo, etc.) ?|yes|yes|no|yes|yes|yes|yes|yes|
| |6.4 In case of personal data, do you have a reasonable technical mechanism for collecting request of deletion (e.g. right to be forgotten)?|yes|yes|yes|yes|yes|yes|yes|yes|




#### Notes

</br>

*D1*

The dataset is free of personal data according to the Article 6 of the Regulation 2016/679, in which processing is described as lawful when:</br> 

(c) processing is necessary for compliance with a legal obligation to which the controller is subject;</br>

(e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.

The presence of names and surnames in the column "Utente creazione" is therefore legit, even though not necessary, as the "principio di pertinenza e non eccedenza" is explained in [Linee guida in materia di trattamento di dati personali, contenuti anche in atti e documenti amministrativi, effettuato per finalità di pubblicità e trasparenza sul web da soggetti pubblici e da altri enti obbligati](https://www.garanteprivacy.it/documents/10160/0/La+trasparenza+sui+siti+web+della+PA+-+Linee+guida+del+Garante.pdf/0d55f7e1-4af4-4db0-b482-10d8791482c8?version=1.0). Such information exceeds the transparency purpose of the PA.

Finally, the fact that this kind of personal data exists doesn't mean that it can be freely reused by anyone. This is why the website redirects to a website containing information about transparent administration, where it wasn't possible to find the clause related to the reuse of the data "*solo alle condizioni previste dalla normativa vigente sul riuso dei dati pubblici (direttiva comunitaria 2003/98/CE e d. lgs. 36/2006 di rece pimento della stessa), in termini compatibili con gli scopi per i quali sono stati raccolti e registrati, e nel rispetto della normativa in materia di protezione dei dati personali*" even though it is required by d. lgs. n. 33/2013.

*D2, D3, D11, D12*

In these datasets, it is possible to find indirect personal data that could lead to the identification of individuals, in particular the dataset is not free of personal data as defined by article 9 of GDPR. There is no law nor legal basis to release these sensitive data, that can be released only if it is necessary. We found references to ethnichal groups (i.e. Rom) and data concerning health. For instance, we found these sentences: '*Le situazioni segnalate come abbandoni e trasferimenti in uscita in corso d'anno hanno riguardato in tutto due studenti e sono state dovute a cambiamenti professionali delle famiglie (trasferimenti per motivi di lavoro o rientro nei paesi d'origine).*', and '*Il tasso di dispersione del numero  degli allievi iscritti nella nostra scuola  negli ultimi tre anni scolastici e' quasi nullo:a.s.2014/15: numero complessivo degli alunni in elenco all'inizio dell'anno scolastico: 665 , tot. alunni alla fine dell'anno scolastico: 664, numero di alunni non ammessi alla classe successiva: 1 alunna disabile per fermo pedagogico,a.s. 2013/14: totale alunni all'inizio dell'a.s.: 726, totale alunni alla fine dell'a.s.:726, numero alunni non ammessi alla classe successiva: n. 3 disabili per fermo pedagogico,a.s. 2012/13: tot. alunni all'inizio dell'a.s.:784, tot. alunni alla fine dell'a.s.:784 , N.alunni non ammessi alla classe successiva:1 per fermo pedagogico.*'.

To avoid this problem, we suggest the authorities to change these references with more anonymized ones.</br>

Furthermore, although in the platform of the data there is a mechanism to inform about the update of the data, only in the case of D2 and D3 the last update (dated back to 31/08/2017) is not congruent with the periodicity that is reported (Annual).


*D4* 

The platform where this dataset is contained has no direct link to Legal Terms and Privacy regulation pages, along with contacts and information about the dataset, but they are included in the website of [Ufficio Scolastico Regionale per l'Emilia Romagna](http://istruzioneer.gov.it/) that is linked from the platform. We found those pieces of information there and assumed they belonged to D4 too. We suggest the interested authorities to create an explicit connection between the two websites or, better, to create specific webpages in the dataset's website for this kind of information.</br>


Furthermore, there are problems with the platform of [Ufficio Scolastico Regionale per l'Emilia Romagna](http://istruzioneer.gov.it/): in particular, there is no encryption on the website (therefore, there is no SSL certificate), so that the connection of the user to the website is not safe. We found this problem particularly compelling on the [contacts](http://istruzioneer.gov.it/contatti-urp/) page, where the form requires to be filled with personal data (First Name, Family Name, Address, etc.). This situation can lead to the modification of downloaded data and as a result, to the breach of personal data.


*D7* 

The dataset is free of personal data according to the Article 6 of the Regulation 2016/679, in which processing is described as lawful when:</br> 

(c) processing is necessary for compliance with a legal obligation to which the controller is subject;</br>

(e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.</br>

Therefore, the presence of names and surnames in columns "Progettista" and "Esecutore" of the dataset is legit. However, the fact that this kind of personal data exists doesn't mean that it can be freely reused by anyone. There is no clause about limits of the reuse of the data, even though it is required by d. lgs. n. 33/2013.


In addition, the [privacy page](https://web.archive.org/web/20190621170110/https:/openricostruzione.regione.emilia-romagna.it/privacy) of that dataset doesn’t have any content. As this page is empty we could not find any information about Privacy Regulation and Legal Terms, so we suggest to fill it with content, as it is a required element in the EU Regulation 2016/679.


*D8* 

From this dataset platform the links that lead to the privacy and legal pages are broken: we were then forced to access them from an external search engine (Google). Unfortunately, even when we found them, we noticed that the privacy regulation's page is not complete (it stops at 'Norme Trattamento Dati').</br>


Moreover, on the dataset's platform there aren't only technical cookies, because embedded YouTube videos can track the users visiting the page.


*D10* 

The dataset has no license and even if there is a reference to Law 221 of 2012, art.25 comma 11 ("*11. Le informazioni di cui al comma 12, per la start-up innovativa, e 13, per l'incubatore certificato, sono rese disponibili, assicurando la massima trasparenza e accessibilità, per via telematica o su supporto informatico in formato tabellare gestibile da motori di ricerca, con possibilità di elaborazione e ripubblicazione gratuita da parte di soggetti terzi. Le imprese start-up innovative e gli incubatori certificati assicurano l'accesso informatico alle suddette informazioni dalla home page del proprio sito Internet.*"), this is not enough to justify this absence, since an open license is required by the definition of Open Data according to the [Open Knowledge Foundation](https://okfn.org/opendata/) and the [Codice dell’Amministrazione digitale in articolo 1, comma , lettera l-ter](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/_rst/capo1_sezione1_art1.html).


There is no explicit reference to an updating periodicy, nor a system to inform the users about the update. Even if the comma 14 of article 25 of Legge 221/2012, referring to comma 12 and 13, explicits:

*'14. Le informazioni di cui ai commi 12 e 13 debbono essere aggiornate con cadenza non superiore a sei mesi e sono sottoposte al regime di pubblicità di cui al comma 10.*' </br>

Comma 12 and 13 state that: 

'*12. La start-up innovativa è automaticamente iscritta alla sezione speciale del registro delle imprese di cui al comma 8, a seguito della compilazione e presentazione della domanda in formato elettronico, contenente le seguenti informazioni:*
 
*a) data e luogo di costituzione, nome e indirizzo del notaio;
b) sede principale ed eventuali sedi periferiche;
c) oggetto sociale;
d) breve descrizione dell'attività svolta, comprese l'attività e le spese in ricerca e sviluppo;
e) elenco dei soci, con trasparenza rispetto a fiduciarie, holding, con autocertificazione di veridicità;
f) elenco delle società partecipate;
g) indicazione dei titoli di studio e delle esperienze professionali dei soci e del personale che lavora nella start-up innovativa, esclusi eventuali dati sensibili;
h) indicazione dell'esistenza di relazioni professionali, di collaborazione o commerciali con incubatori certificati, investitori istituzionali e professionali, università e centri di ricerca;
i) ultimo bilancio depositato, nello standard XBRL;
l) elenco dei diritti di privativa su proprietà industriale e intellettuale.* '


' *13. L'incubatore certificato è automaticamente iscritto alla sezione speciale del registro delle imprese di cui al comma 8, a seguito della compilazione e presentazione della domanda in formato elettronico, contenente le seguenti informazioni recanti i valori degli indicatori, di cui ai commi 6 e 7, conseguiti dall'incubatore certificato alla data di iscrizione:*



*a) data e luogo di costituzione, nome e indirizzo del notaio;
b) sede principale ed eventuali sedi periferiche;
c) oggetto sociale;
d) breve descrizione dell'attività svolta;
e) elenco delle strutture e attrezzature disponibili per lo svolgimento della propria attività;
f) indicazione delle esperienze professionali del personale che amministra e dirige l'incubatore certificato, esclusi eventuali dati sensibili;
g) indicazione dell'esistenza di collaborazioni con università e centri di ricerca, istituzioni pubbliche e partner finanziari;
h) indicazione dell'esperienza acquisita nell'attività di sostegno a start-up innovative.* '



### Mashed-up Datasets

 We created three mashed-up datasets:
 - OpenSisma dataset Education </br>
  Link:
 License: CC BY-SA 4.0
 - OpenSisma dataset Reconstruction</br>
  Link:
 License: CC BY-SA 4.0
 - OpenSisma dataset Entrepreneurial processes </br>
 Link:
 License: CC BY-SA 4.0

We structured them following all the normatives and the EU directives, and we found them to be completly congruent to the contents of the legal check list, so we decided to not rewrite it.


### Licenses
The licenses are an essential metadata in the description of a dataset. It must be always specified in -*human* readble form and in *-machine* readable form, specifing *name*, *version*, *link to description of the resource*.
</br>All the original datasets but D10, that has no license at all, respect these parameters. 
All the other datasets's licenses are Creative Commons Licenses or Italian Open Data Licenses as follows:

| Dataset                  	| License                                                                                                                                                                                                                                                                                                                                                                                   	|
|--------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| D1                       	| [CC BY 2.0 IT](https://creativecommons.org/licenses/by/2.0/it/)                                                                                                                                                                                                                                                                                                                           	|
| D2, D3, D5, D6, D11, D12 	| [IODL 2.0](https://www.dati.gov.it/content/italian-open-data-license-v20)                                                                                                                                                                                                                                                                                                                 	|
| D4                       	| [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/)                                                                                                                                                                                                                                                                                                                           	|
| D7                       	| [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/it/)<br>Although this is the license specified in the page where it is possible to download<br>the data, in the [license](https://openricostruzione.regione.emilia-romagna.it/licenze) page of the platform<br>there is CC BY-NC-SA 2.5, which is not an Open Data license compliant to the Codice dell'Amministrazione Digitale. 	|
| D8                       	| [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/)                                                                                                                                                                                                                                                                                                                           	|
| D9                       	| [CC BY_SA 3.0](https://www.creativecommons.org/licenses/by-sa/3.0/it/deed.it)                                                                                                                                                                                                                                                                                                             	|
| D10                      	| Unknown 



The Creative Commons licenses are:


- Creative Commons Attribution ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) - [CC BY 3.0 IT](https://creativecommons.org/licenses/by/3.0/it/) - [CC BY 2.0 IT](https://creativecommons.org/licenses/by/2.0/it/)) : </br>
*"You are free to:</br>
Share — copy and redistribute the material in any medium or format </br>
Adapt — remix, transform, and build upon the material 
for any purpose, even commercially.</br>
This license is acceptable for Free Cultural Works.</br>
The licensor cannot revoke these freedoms as long as you follow the license terms.</br>
Under the following terms:</br>
Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.</br>
No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits."*

- Creative Commons Attribution-ShareAlike, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/): </br>
 *"You are free to:</br>
Share — copy and redistribute the material in any medium or format </br>
Adapt — remix, transform, and build upon the material 
for any purpose, even commercially.</br>
This license is acceptable for Free Cultural Works.</br>
The licensor cannot revoke these freedoms as long as you follow the license terms.</br>
Under the following terms:</br>
Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.</br>
ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.</br>
No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits."*

The Italian Open Data Licenses are all versions of [IODL 2.0](https://www.dati.gov.it/content/italian-open-data-license-v20):</br>
*"You are free to:</br>
Reproduce, distribute to the public, lease, present and demonstrate in public, communicate to the public, including making available to the public, transmit and retransmit in any way, perform, act, represent, include in collective and / or published compositions, extract and reuse Information;</br>
Create a Derivative Work and exercise the rights referred to in the previous point on the Derivative Work, for example by combining it with other information (mashup).*

*Provided of:</br>
Indicate the source of the Information and the name of the Licensor, including, if possible, a copy of this license or a link (link) to it.
</br>
Not to reuse the Information in a way that suggests that it is official or that the Licensor approves the use you make of the Information;</br>
Take all reasonable measures so that the uses previously permitted do not mislead other subjects and the Information itself is not misrepresented."*
</br>

In this sense the original Datasets are of public domain through the waiver of some rights, in the terms we have desribed. In this scenario we have the efinition of *'copyleft'*.

</br>

For the mashed-up datasets, the metadata, the documentation and the website we decided to use the same license: the Creative Commons Attribution-ShareAlike, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
</br>

The license for the code is [GNU-GPL](https://www.gnu.org/licenses/gpl-3.0.html).
</br>

For the Libraries we used in Javascript, Python and HTML, the licenses are:

| Library   | License                                                                        |
|-----------|--------------------------------------------------------------------------------|
| pandas    | [New license BSD](https://opensource.org/licenses/BSD-3-Clause) |
| Jquery    | [MIT License](https://opensource.org/licenses/MIT)                             |
| Bootstrap 4 | [MIT License](https://opensource.org/licenses/MIT)                             |
| Leaflet   | [License FreeBSD ](https://opensource.org/licenses/BSD-2-Clause)   |
| Chartjs   | [MIT License](https://opensource.org/licenses/MIT)                             |
| Folium    | [MIT License](https://opensource.org/licenses/MIT)      |
</br>


Other licenses:

- The license of data distributed by OpenStreetMaps is [ODbL](https://opendatacommons.org/licenses/odbl/);
- The license for the cartography in OpenStreetMaps is [CC-BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/).
- The license of the DataNinja Github Repository is derived from that of ISTAT, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/it/).

### Purpose

#### Primary datasets

*D1*

The purpose of this dataset is to contain data about participative processes in Emilia-Romagna.

*D2, D3*

The purpose of these two datasets, respectively for the years 2015-2016 and 2016-2017, is to list self-evaluation scores of schools and related data (school codes, descriptive reason of the score) in terms of schools result for state schools. 

*D4*

The purpose of this dataset is to function as a registry for schools in Emilia-Romagna. It contains information like name and address, code, telephone number, e-mail, school director.

*D5*

The purpose of this dataset is to contain data about schools' safety certificates for the year 2018-2019.

*D6*

The purpose of this dataset is to contain data about presence of environmental bounds for schools for the year 2018-2019.

*D7*

The purpose of this dataset is to contain data about up-to-date interventions of public reconstruction in areas affected by the 2012 Emilia-Romagna earthquakes.


*D8*

<br>
The purpose of this dataset is to propose in Open Data format all the data and information about the microseismic reports of the earthquakes of May 2012 in Emilia Romagna.</br>
The dataset was created by INGV, in order to make available the information about the damages created by th earthquakes of 2012 in Emilia Romagna.

</br>

*D9*

</br>
The purpose of this dataset is to propose in Open Data format all the data and information about the Open Coesione processes in Italy. Open Coesione is the open government initiative on cohesion policies in Italy. Everyone can thus evaluate how resources are used with respect to the needs of the territories.</br>
The datasets are updated bimonthly and published approximately three months after the reference date.</br>
The dataset was created by the Dipartimento per le politiche di Open Coesione.

</br>

*D10*

</br>
The purpose of this dataset is to propose in Open Data format all the data and information about the entrepneuerial initiatives and startups in Italy, registered in Registro Imprese. THey are developed in trimestral reports divided for region.
This dataset was created by Info Camere, in order to make available the numbers and the statistics regarding the entrepreneurial initiative and sartups. 

#### Mashed-up Datasets
The purpose of the final datasets is to display the data relating to the earthquakes  themselves connecting them with data that are subsequent or indirectly influenced by them:


*OPENSISMA DATASET EDUCATION *



The purpose of this dataset is to propose in Open Data format all the data and information about the education system in Emilia Romagna, merging in a coerent and useful way the data taken from D2, D3, D4, D5, D6, D11, D12.</br>
This dataset was created by Milena Corbellini and Anna Sofia Lippolis, in order to confront and compare all the information connteied in the original datasets.



*OPENSISMA DATASET RECONSTRUCTION* 


The purpose of this dataset is to propose in Open Data format all the data and information about the reconstruction initiative taken by the in Emilia Romagna after the erthquakes, comparing them with thae damage caused by the earthquakes themselves. The data are taken from D8 and D7.
</br>
This dataset was created by Milena Corbellini and Anna Sofia Lippolis, in order to compare the damage entity with the works made to recontruct.



*OPENSISMA DATASET ENTREPRENEURIAL PROCESSES*


The purpose of this dataset is to propose in Open Data format all the data and information about the entrepreneurial processes taken after the earthquakes, merging in a coerent and useful way the data taken from D1, D9, D10.</br>
This dataset was created by Milena Corbellini and Anna Sofia Lippolis, in order to see the reaction to the earthquakes also in this field in Emilia Romagna.
</br>

### Ethical analysis

As we described in the previous points, our mashed-up datasets are completely free of data that could be considered unethical: we used only non personal data in a way in which no discrimination, prejudice, cognitive bias could be suspected.
</br>
In the original data instead in D2-D3 we detected cognitive bias: as you could see in D2, we found sentences like *"La scuola non perde studenti nel passaggio da un anno all'altro, tranne singoli casi giustificati ( alunni di etnia Rom che non sono ammessi alla classe successiva per numero di assenze superiore a quelle consentite o mancata frequenza) La distribuzione degli studenti per fasce di voto evidenzia una situazione di equilibrio"*, in which we could find a non positive reference to an ethnic group. In D2 we could reach 72 mentions of this ethnic group with possible references to cognitive bias and in D3 they are 84.
These mentions are completely against the normatives of GDPR 2016/769 and, moreover, we think that this information could be used to identify a student in an indirect way.

## Technical analysis

### Formats, metadata, provenance URI

#### Original datasets

Formats, metadata, provenance and URI of our original datasets can be resumed as follows:

**D1** </br>

*Format:*  XML, XML Schema, JSON, CSV, Excel CSV. </br>
*Metadata:* Availability of human-readable metadata. </br>


**D2, D3, D5, D6, D11, D12 (MIUR)**</br>

*Format:* CSV, JSON, RDF, XML

*Metadata:* Although there is available metadata in XML/RDF for the datasets, some namespaces have been declared even if they are not used. </br>

**D4**</br>

*Format:* HMTL, CSV, Txt, PDF; Excel 95+, Excel 2007+. The last two aren't open formats and thus clash with the guidelines provided by Codice dell'amministrazione digitale, that contains in [Art.1](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/_rst/capo1_sezione1_art1.html) the definition of an open format. Even if PDF has been standardized by ISO (ISO/IEC 32000-1:2008), with different formats according to scope, it is not suited for datatasets and it is highly recommended not to use it since it prevents the interoperability of the data. For what concerns Excel, it is a proprietary format whose non-proprietary counterpart is ODS (Open Document Spreadsheet).</br>

*Metadata:* No metadata. </br>

*Provenance:*https://sed.istruzioneer.it/scumgnt/scu-istituzione </br>

**D7**</br>

*Format:* CSV</br>

*Metadata:* Availability of human-readable metadata. </br>

**D8**</br>

*Format:* PDF and Excel, which clash with the guidelines provided by Codice dell'amministrazione digitale , that contains in [Art.1](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/_rst/capo1_sezione1_art1.html) the definition of an open format. Even if PDF has been standardized by ISO (ISO/IEC 32000-1:2008), with different formats according to scope, it is not suited for datatasets and it is highly recommended not to use it since it prevents the interoperability of the data. For what concerns Excel, it is a proprietary format whose non-proprietary counterpart is ODS (Open Document Spreadsheet)..</br>

*Metadata:* No metadata. </br>

**D9**</br>

*Format:* ZIP/CSV</br>

*Metadata:* Availability of metadata in XSD format.</br>

*Provenance:*http://www.rgs.mef.gov.it/VERSIONE-I/home.html </br>

**D10**</br>

*Format:* CSV, PDF, Excel. The last distribution clashes with the guidelines provided by Codice dell'amministrazione digitale , that contains in [Art.1](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/_rst/capo1_sezione1_art1.html) the definition of an open format. Even if PDF has been standardized by ISO (ISO/IEC 32000-1:2008), with different formats according to scope, it is not suited for datatasets and it is highly recommended not to use it since it prevents the interoperability of the data. For what concerns Excel, it is a proprietary format whose non-proprietary counterpart is ODS (Open Document Spreadsheet). </br>

*Metadata:* No metadata. </br>

*Provenance:*http://www.registroimprese.it/infocamere</br>


### URI

The analysis of the URIs has to be carried out separately. Their formulation, in fact, clashes with the fact URIs have to uniquely and permanently represent an object while remaining human-readable as stated in the [W3C best practices for URI design](https://www.w3.org/2011/gld/wiki/223_Best_Practices_URI_Construction#Design_principles). In particular:
- URI space should be limited as much as possible;
- It is highly recommended not to have the file extension specification (i.e. ".csv");
- It is highly recommended not to use uppercase, as it can cause some issues;
- It is highly recommended not to use the underscore, as text viewer applications can underline URIs to provide a cue that they are clickable, so that the character can result hidden by this underlining. 

As a result, our fixed URIs proposals focused on complying to the aforementioned specific design principles.

This analysis has been carried out for all the original datasets but D10, that has no URI as it is downloadable after an e-mail submission; such download link lasts four days. We suggest to add a page dedicated to the catalogue on the website, so that it would be possible to create a persistent link to the resources related to the datasets.




| Dataset 	| URI                                                                                                                                         	| Fixed URI                                                                                           	|
|---------	|---------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------	|
| D1      	| https://www.osservatoriopartecipazione.it/prisma/dashboard/OpenData.aspx?function=export&filterid=06f74e5de3c94d7f922e23d4e7c7f35d&type=csv 	| https://www.osservatoriopartecipazione.it/prisma/dashboard/OpenData/dati-per-anno-di-avvio          	|
| D2      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/VALUTAZIONE_ESITI_STA20160831.csv                                      	| https://dati.istruzione.it/opendata/catalogo-scuola/scuole/valutazione-esiti-sta-2015-2016            	|
| D3      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/VALUTAZIONE_ESITI_STA20161720170831.csv                                	| https://dati.istruzione.it/opendata/catalogo_scuola/scuole/valutazione-esiti-sta-2016-2017            	|
| D4      	| https://sed.istruzioneer.it/scumgnt/scu-istituzione                                                                                         	| https://sed.istruzioneer.it/scumgnt/scu-istituzione/anagrafe_scuole_bologna                         	|
| D5      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/EDICONSICUREZZASTA20181920190530.csv                                   	| https://dati.istruzione.it/opendata/catalogo-scuola/edilizia/sicurezza-2018-2019                      	|
| D6      	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/EDIVINCOLISTA20181920180901.csv                                        	| https://dati.istruzione.it/opendata/catalogo-scuola/edilizia/vincoli-2018-2019                        	|
| D7      	| https://openricostruzione.regione.emilia-romagna.it/media/opendata/interventi_ricostruzionepublica.csv                                     	| https://openricostruzione.regione.emilia-romagna.it/media/opendata/interventi-ricostruzionepublica 	|
| D8      	| http://www.ingv.it/quest/images/rilievimacrosismici/xlsx/INGV_QUEST_2012-05-29.xlsx                                                         	| http://www.ingv.it/quest/dataset/rilievimacrosismici/ingv-quest-rilievi-emilia-romafgna-2012-05-29  	|
| D9      	| https://opencoesione.gov.it/it/opendata/regioni/progetti_esteso_EMR.zip                                                                     	| https://opencoesione.gov.it/it/opendata/regioni/progetti-esteso-EMR                                 	|
| D10     	| No URI                                                                                                                                      	|                                                                                                     	|
| D11     	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/SCUANAGRAFEPAR20151620160831.csv                                       	| https://dati.istruzione.it/opendata/catalogo-scuola/scuole/valutazione-esiti-par-2015-2016            	|
| D12     	| https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/SCUANAGRAFEPAR20161720170831.csv                                       	| https://dati.istruzione.it/opendata/catalogo-scuola/scuole/valutazione-esiti-par-2016-2017            	|



#### Mashed-up datasets

We specified the datasets' encoding in each download page of the datasets. 

##### Format: 

We chose to distribute our mashed-up datasets in CSV:

[Page of the Reconstruction dataset](https://opensisma.github.io/metadata-dataset-reconstruction.html)

[Page of the Education dataset](https://opensisma.github.io/metadata-dataset-education.html)

[Page of the Entrepreneurial Processes dataset](https://opensisma.github.io/metadata-dataset-entrepreneurial-processes.html)

##### Provenance:

As documented in the metadata through the ontology PROV-O, the provenance of our mashed-up datasets is respectively: 

Works mashed-up dataset
- [D8 - INGV dataset about damage microseismic scale](http://www.ingv.it/quest/images/rilievimacrosismici/xlsx/INGV_QUEST_2012-05-29.xlsx)
- [D7 - Open ricostruzione dataset](https://openricostruzione.regione.emilia-romagna.it/media/opendata/interventi_ricostruzionepublica.csv)


Education mashed-up dataset
- MIUR datasets: [D2](https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/VALUTAZIONE_ESITI_STA20160831.csv), [D3](https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/VALUTAZIONE_ESITI_STA20161720170831.csv), [D5](https://dati.istruzione.it/opendata/opendata/catalogo/elements1/EDICONSICUREZZASTA20181920190530.csv), [D6](https://dati.istruzione.it/opendata/opendata/catalogo/elements1/EDIVINCOLISTA20181920180901.csv), [D11](https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/SCUANAGRAFEPAR20151620160831.csv), [D12](https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/SCUANAGRAFEPAR20161720170831.csv)
- Ufficio scolastico regionale per l'Emilia-Romagna dataset: [D4](https://sed.istruzioneer.it/scumgnt/scu-istituzione#)

Entrepreneurship mashed-up dataset
- [D1- Osservatorio partecipazione projects](https://www.osservatoriopartecipazione.it/prisma/dashboard/OpenData.aspx?function=export&filterid=06f74e5de3c94d7f922e23d4e7c7f35d&type=csv)
- [D9- OpenCoesione Emilia-Romagna projects](https://opencoesione.gov.it/it/opendata/regioni/progetti_esteso_EMR.zip)
- [D10- Startups](http://startup.registroimprese.it/isin/static/startup/index.html?slideJump=32)


##### Metadata

The metadata of our mashed-up datasets has been compiled accordingly to the FAIR principles. In this way, we were able to produce [5-stars Linked Open Data](https://www.w3.org/community/webize/2014/01/17/what-is-5-star-linked-data/), as our metadata points to other open datasets on the web.

##### URI

Each of our datasets has then been assigned a URI:

| Dataset                           	| URI                                                                         	|
|-----------------------------------	|-----------------------------------------------------------------------------	|
| Reconstruction Works dataset      	| https://opensisma.github.io/metadata-dataset-reconstruction-works.html      	|
| Education dataset                 	| https://opensisma.github.io/metadata-dataset-education.html                 	|
| Entrepreneurial processes dataset 	| https://opensisma.github.io/metadata-dataset-entrepreneurial-processes.html 	|

However, they still have the .html file extension, as deleting it would require a rewrite engine.


### Preprocessing issues 

The mashing-up of our datasets required some necessary preprocessing steps. Some of the issues we encountered were connected to what we discussed in the chapter about the Quality Analysis of our datasets. Initially, we had to choose which areas to include in our research. We therefore selected the 19 most affected areas of Emilia-Romagna. The first main issue connected to this choice consisted in the absence of a shared vocabulary for the geographical places, which can be problematic in the case their names contain apostrophes. This is why we needed to create our own vocabulary, containing all the possibilities for the names. As an example, for the town of Sant’Agostino, we included both SANTAGOSTINO and SANT’AGOSTINO.

None of the platforms containing the open datasets specified their encoding, even though in ["Linee guida per la valorizzazione del patrimonio informativo publico" published by AGID"](https://docs.italia.it/italia/daf/lg-patrimonio-publico/it/stabile/riepilogoazioni.html) it is specified they ought to, preferably UTF-8. The lack of encoding statements led us to guess which formatting engine was use. For this reason, in the case of D1, it was necessary to skip some badly-encoded lines in order to process the dataset.

All the mash-up datasets have been joined through the `pandas.merge` method.

#### Reconstruction mashed-up dataset

The first issue with the mashing up of datasets D7 and D8 is connected to the lack of rules regarding what the CSV delimiter should be. In each case, we had to find out what the delimiter was and specify it for the file to be properly read. 

| Dataset         | Delimiter                   | 
| ------------- | ----------------------- | 
| D7     | ; | 
| D8       | , | 

For what concerns D8, it also wasn’t released in an open format: Excel. We thus had to use the pandas `read_excel` Python method.

Finally, there is a different nomenclature of "comune" we had to make a decision about in order to guarantee our mash-ups could be working together:

| Dataset         | Nomenclature for comune                   | 
| ------------- | ----------------------- | 
| D7 | COMUNE | 
| D8  | Comune | 

To this regard, we chose to adopt the uppercase one.

Some columns of the original datasets have been dropped or modified according to our research purpose. More specifically:
- The list of reconstruction works has been filtered according to the geographical names of the municipalities we provided, in order to find only those we were interested in;
- The progress of reconstruction works has been divided into three types, according to an analysis of the start date and the end date of each intervention, e.i. if there was no start date and no end date, we assumed the reconstruction hasn't been started yet;
- The MCS microseismic scale contains at times values separated by a dash like "7-8". In order to make it computationally understandable, we transformed these values into floats, e.i. "7.5".

#### Education mashed-up dataset

The mashing-up of the Education mashed-up dataset is not favoured by the different types of Python objects the values of the dataframes belong to, which make it impossible to merge together two columns of different object types even if they have the same content. An example has been found when trying to join CODICESCUOLA, a string, of D6 with the corresponding column of D4, an object. Secondly, open datasets that contain the same informative data (schools code, for instance) name it arbitrarily, making it difficult to automatize the mash-up process.

| Dataset         | Name of Codice Fiscale Scolastico                   | 
| ------------- | ----------------------- | 
| D2, D3, D11, D12     | CODICEISTITUTO | 
| D4     | Codice | 
| D5, D6     | CODICESCUOLA | 

The same has been noticed with the nomenclature of “comune” of D4, which was lowercase and therefore had to be uniformed with the other two mash-ups.

Also, D2, D3, D11, D12 have a problem with dates (i.e. “201516”), that have been arbitrarily formatted without taking into account the current standards (specifically ISO_8601). In this way, dates are not computationally understandable unless manually processed.

The final issue with the datasets is that D2, D3, D11, D12 contain whitespace in the column headers that needs to be stripped in order for the document to be merged with other datasets. This is an important problem that proves how the publication of an open dataset does not only require an open format (CSV, in this case), but also a structure that complies to such format in order for it to be read and manipulated.

Some columns of the original datasets have been dropped or modified according to our research purpose. More specifically:
- We dropped the columns "ANNOSCOLASTICO", SEZIONE", "CODICECRITERIO", "MOTIVAZIONEPUNTEGGIOSCUOLA" in D2, D3, D11, D12; for D4 we just kept the school code.
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

Another issue arised when dealing with dates, which weren’t coded in the correct datetime format (ISO_8601), especially in D1 and D10. 

Some columns of the original datasets have been dropped or modified according to our research purpose. More specifically:
- Every project in D1, D9 and D10 has been counted and grouped according to geographic location;
- Column "Popolazione impattata" in D1 has been kept, while all the others have been dropped.

#### Preprocessing issues related to visualization

As for what concerns visualization, every decimal comma in every number had to be converted in the decimal dot in order to be processed by the Folium library; the same goes for the columns of latitude and longitude in D7, which moreover had to follow the ISO_6709 Standard representation of geographic point location by coordinates. However, it is necessary to specify for the first case that both commas and dots are currently generally recognized as a decimal marker, even though in the payments field (the same as our case), as ISO_20022 states, only dot is accepted as a decimal marker. 

#### Final remarks

The structure of both mashed-up datasets aimed to solve some issues we faced when analyzing the quality of our datasets:

| Issue of the original datasets         | Solution in the mashed-up datasets                  | 
| ------------- | ----------------------- | 
|No encoding statement | Encoding statement in the download page of the datasets | 
| No shared nomenclature for the CSV delimiter | Comma delimiter | 
| Arbitrary use of uppercase and lowercase | Use of uppercase only | 
| No coherence of internal nomenclature  | Renaming of the columns | 
| File distribution not in an open format     | Distribution of the mash-ups in an open format | 
| Arbitrary use of the decimal mark for numbers | Choice to use the decimal dot only | 
| Year format unclear  | Clear year format | 
| Absence of machine-readable metadata  | Creation of machine-readable metadata | 


## Sustainability of the update of the datasets over time

The Open Data's sustainability is defined by the updating regularity of the data in it, as it is one of the three key factors that define the utility of an Open Data: the *relevance*, the *updating* and the *accessibility*.  The sustanibility has to be supported by:

- the financing of the updating over time;

- an organisation already established in the Open Data Ecosystem;

- the reusing of the data by  the users interested in.

In an hypothetic organisational system of our project, we could base our sustanibility on the following elements:

-Provenance and Promptness: Our mashed-up Datasets use data taken from different sources. Only if the original sources respect the updating time, the timeliness requirement would be assured.

- the financial  support of established entities like the 'Agenzia per la Ricostruzione Emilia Romagna', or the entity 'Regione Emilia Romagna' itself, which could be interested in our analysis. However, we considered a structure in which the cost and the maintenance of the datasets would be around 0, even sustaining the quality of the data and the updating.

- we used the international license CC BY-SA 4.0: a copyleft-based license that allows the users to share and modify the content with the conditions of attribution and sharing under the same license.

- we included our e-mail addresses on the website, in order to give the possiibility to the user of contacting, easily and tempestively,to ask for clarification, make requests and so on.

- our goal would be to expand the project both in terms of geographical area and in terms of data from other datasets that we could connect with ours and involve in the analysis.

Until now we were able to implement the sustainability with the subsequent procedures:

- the integration of the data with metadata based on the DCAT-AP rules described in the EU normative of 2019, integrated with some other ontologies (PROV-O, FOAF, etc...).

- the integration of the original datasets's data with the same structure of metadata.


## Visualization

The visualization of the data was carried out through two main steps:

### 1) The creation of the map
For the creation of the map, we used the Folium library, which is connected to Leaflet. To draw the GEOJSON polygons of the areas we were interested in, we used this [DataNinja Github repository](https://github.com/Dataninja/geo-shapes/tree/master/italy/regions). Leaflet displays the map through OpenStreetMaps.

For usability purposes, the map can be navigated thrugh a layer control so that one can hide or see:

1) A choropleth layer map created accordingly to the MCS microseismic scale;
2) Feature groups with three types of reconstruction works progress:
  - Red markers for works that have never started;
  - Orange markers for works in progress;
  - Green markers for finished works.
  
 Additionally, clicking on each marker will provide information about the specific place and the financial aid assigned and paid for it.

### 2) Website and charts

To build the website, we used Bootstrap 4, while to build the charts we used the Javascript library Charts.js. To include our datasets in our code, we added them as Javascript variables after converting them in JSON (see the "code" section).

We chose to divide our chart in four main thematic groups: a generic one and one for each mashed-up dataset we created.

#### 1) The "general graphs" tab
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

#### 2) The works tab

In this tab, clicking on an area of the map will return data about the types of reconstruction works progress for that specific area.

#### 3) Education charts tab

This tab contains two charts:
One related to the total number of schools and the absence of certificates or presence of environmental constraints for each clicked area on the chart; another related to the comparison of the average school score between statal schools and paritary ones.

#### 4) Entrepreneurship charts

This tab contains one chart displaying the distribution of Osservatorio partecipazione projects, startups and OpenCoesione projects. Addiyionally, it is possible to see the impacted population for the Osservatorio partecipazione projects.

Finally, in each tab it is possible to find an "info" button in order to understand the displayed data better.

## RDF assertion of the data

For what concerns the metadatation, it was decided to follow the documentation of [DCAT-AP v. 2.0](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe). For the provenance of our mashed-up datasets, we used the ontology [PROV-O](https://www.w3.org/TR/prov-o/) as suggested in the aforementioned documentation.

## Final remarks
As we stated in our introduction, the aims of our analysis were: to study and show the effects of such natural disasters in terms of reconstruction works' progress, quality of education for primary, secondary and high schools, both public and paritary; availability of safety certificates and/or environmental constraints and entrepreneurship drive.

Those have been reached in their completeness, so that from what emerged from the research we can conclude that:
- there is a direct proportionality relationship between total works and damage entity;
- there is a direct proportionality between amount of reconstruction works that still have to be done and low schools score, even though we don't have enough data to further study the model, for the year 2015-2016. In the following year, the trend seems to start changing;
- in the very few data we had for paritary schools (only for the area of Cento), we could detect an average higher school score with respect to the public ones of that area;
- about the correlation between disaster effects and rise in an entrepreneurial processes, we could witness a positive attempt in that direction, but often it hasn't been continued over the years;
- about the safety certificates, we detected no correlation between damage entity and consequences in safety certificates and initiatives (e.i. antiseismic plan). This is a worrying phenomenon, because areas that have been more affected by the earthquakes should be more attentive to safety measures, in the case this kind of situation would be repeated in the future.





