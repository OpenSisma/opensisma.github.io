# opensisma


Dataset	Completeness	Accuracy	Coherence	Promptness
D1 (processi osservatorio partecipazione)
http://www.osservatoriopartecipazione.it/opendata
Not satisfied: -values of column “obiettivi” and “modalità di inclusione” have different degrees of specificity, if any;
-missing values in many columns	Not satisfied: -semantic ambiguity (columns “Si registra la presenza femminile” and “Riscontro per la prevalenza di genere tra i partecipanti”
-some columns have the same name (“Utente creazione”, “comune”, “regioni”, “utente modifica”, “certificati”;
-values of column “obiettivi” and “modalità di inclusione” have different degrees of specificity, if any	Not satisfied:
-arbitrary use of uppercase and lowercase
-arbitrary use of the accent (sì vs si)
-values “osservatorio partecipazione” and “redazione osservatorio partecipazione” in column “segnalato da persona” are not distinguishable;
-column “utente creazione” has sometimes a nickname, others a number as values
-arbitrary representation of thousands (“k”, dot or nothing)
-column “comitato di pilotaggio” has arbitrary values for the absence: null, no or “non è previsto”	Satisfied: in real time
D2 EDU (valutazione esiti 15-16)
https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA
Not satisfied
-features fields filled with sporadic full stops, whose meaning remains unclear, in place of explanations of self-evaluation results	Not satisfied
-lists school self-evaluation mark, but does not provide any information about the meaning of such marks
	Not satisfied
-arbitrary use of uppercase and lowercase
-arbitrary use of an indicator for the absence of information: dot, “motivazione non dichiarata” and “mancanza dati comparativi”
-arbitrary use of substitutes of accents	Satisfied: yearly update
D3 EDU (valutazione esiti 16-17)
https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Sistema%20Nazionale%20di%20Valutazione&datasetId=DS0500VALUTAZIONE_ESITI_STA
Not satisfied
-features fields filled with sporadic full stops, whose meaning remains unclear, in place of explanations of self-evaluation results	Not satisfied
-lists school self-evaluation mark, but does not provide any information about the meaning of such marks
	Not satisfied
-arbitrary use of uppercase and lowercase
-arbitrary use of an indicator for the absence of information: dot, “motivazione non dichiarata” and “mancanza dati comparativi”
-arbitrary use of substitutes of accents	Satisfied: yearly update
D4 EDU (anagrafe scuole emilia romagna)
https://sed.istruzioneer.it/scumgnt/scu-istituzione
Not satisfied
-many fundamental columns have empty fields (“codice fiscale”, “ente gestore”, “numero di telefono”, “CAP”, “Località”, “DS cognome”, “DS Nome”, “DS Tipo”)
-occasional use of the dash to replace null values	Not satisfied:
-occasional use of the dash to replace null values
-presence of syntactic inaccuracy
-nomenclature of the column “codice” is too general
	Not satisfied:
-arbitrary use of uppercase and lowercase;
-arbitrary use of quotes when defining the names of the schools;
-arbitrary naming of addresses;
-arbitrary presence of phone prefix (for IT?)
-update of the data is not coherent with the scholastic year of concern	Not satisfied: some schools data is not up to date.
D5 EDU (Certificazioni e documenti relativi alla sicurezza)
https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Edilizia%20Scolastica&datasetId=DS0280EDICONSICUREZZASTA
Not satisfied: some fields are lacking values; null values are replaced by a dash.	Not satisfied
- semantic inaccuracy due to null values replaced by a dash	Not satisfied
- there is no standard of defining null values, empty fields remain empty or are filled by a dash
- arbitrary use of uppercase and lowercase	Satisfied (note: there should be more years for this kind of dataset)
D6 EDU (presenza di vincoli)
https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Edilizia%20Scolastica&datasetId=DS0250EDIVINCOLISTA
Not satisfied: some fields are lacking values; null values are replaced by a dash.	Not satisfied
- semantic inaccuracy due to null values replaced by a dash	Not satisfied
- there is no standard of defining null values, empty fields remain empty or are filled by a dash
- arbitrary use of uppercase and lowercas	Satisfied (note: there should be more years for this kind of dataset)
D7 EDU/LAVORI(interventi di ricostruzione pubblica)
https://openricostruzione.regione.emilia-romagna.it/open-data
Not satisfied: there are many empty fields, especially in “latitudine”, “Longitudine”, “Stato cantiere”, “numero civico”.	Not satisfied because column “Indirizzo” contains city names.	Not satisfied: there seems not to be any guideline about the filling of the fields, e.i. there is no civic number in the “Numero civico” column, but we could find civic numbers in the “Indirizzo” column.
- arbitrary use of uppercase and lowercase. 	There is no specification of date, and the last update dates back to 31/12/2019.
D8 EDU/LAVORI (nome comune e danno)
http://www.ingv.it/quest/images/rilievimacrosismici/xlsx/INGV_QUEST_2012-05-29.xlsx da http://quest.ingv.it/ 
Not satisfied: there are some empty fields in the column “Comune”.	Satisfied	Satisfied	Satisfied
D9 (progetti di open coesione)
https://opencoesione.gov.it/it/territori/emilia-romagna-regione/
Not satisfied: there are some empty fields.	Not satisfied: 
-there is no clear meaning of the column names
-presence of colon instead of semicolon
- lack of a shared nomenclature for “no” values: at times they are represented by null, others by “no”.
	Not satisfied:
-internal nomenclature not coherent
-arbitrary use of uppercase and lowercase.
	Satisfied: in real time.
D10 (startup)	Satisfied	Satisfied, but there is no clear meaning of the column names.	Not satisfied
-there is different handling of the accents.
	Satisfied: in real time.
D11 EDU (valutazione esiti 15 16 scuole paritarie)
https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR
Satisfied	Not satisfied: -semantic inaccuracy due to zeros replacing null or “motivazione non dichiarata” values
-lists school self-evaluation mark, but does not provide any information about the meaning of such marks
	Not satisfied: lack of a shared nomenclature for null values 	Satisfied
D12 EDU (valutazione esiti 16 17 scuole paritarie)
https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR
Satisfied			
 


