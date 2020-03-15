# OpenSisma

## Introduction

## Scenario

## Original datasets and mashed-up datasets
In order to carry out our analysis, we chose to used datasets that differed in sources, size and theme. 

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

The datasets were then grouped and processed into two mashed-up datasets:

| Primary datasets | Mashed-up dataset | URI | 
| :---         |     :---:      |          ---: |
| D2, D3, D4, D5, D6, D7, D8, D11, D12   | Education dataset     | git status    |
| D1, D9, D10   | Entrepreneurship dataset      | git diff      |

Our mashed-up datasets are grouped in this page (pagina del catalogo).


## Informative quality analysis

| Dataset | Completeness | Accuracy |Coherence|Promptness|
| :---         |     :---      |          :--- |:--- | :--- |
| D1   | Not satisfied: -values of column “obiettivi” and “modalità di inclusione” have different degrees of specificity, if any; <br>AND missing values in many columns | Not satisfied: semantic ambiguity (columns “Si registra la presenza femminile” and “Riscontro per la prevalenza di genere tra i partecipanti”) <br>
AND some columns have the same name (“Utente creazione”, “comune”, “regioni”, “utente modifica”, “certificati”;
AND values of column “obiettivi” and “modalità di inclusione” have different degrees of specificity, if any    | Not satisfied:
arbitrary use of uppercase and lowercase
arbitrary use of the accent (sì vs si)
values “osservatorio partecipazione” and “redazione osservatorio partecipazione” in column “segnalato da persona” are not distinguishable;
column “utente creazione” has sometimes a nickname, others a number as values
arbitrary representation of thousands (“k”, dot or nothing)
column “comitato di pilotaggio” has arbitrary values for the absence: null, no or “non è previsto”
 | cosa |
| D2, D3, D11, D12    | git diff       | git diff      | cosa | cosa |
| D4 | Center-aligned | Right-aligned |Coherence|Promptness|
| D5         |     :---      |          :--- |:--- | :--- |
| D6   | git status     | git status    | cosa | cosa |
| D7     | git diff       | git diff      | cosa | cosa |
| D8 | Center-aligned | Right-aligned |Coherence|Promptness|
| D9        |     :---      |          :--- |:--- | :--- |
| D10   | git status     | git status    | cosa | cosa |


## Legal analysis

## Ethical analysis

## Technical analysis

## Sustainability of the update of the datasets over time

## Visualization

## RDF assertion of the data

## Final remarks
