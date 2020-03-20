import pandas as pd
import numpy as np
pd.options.mode.chained_assignment = None  # default='warn'
pd.set_option('display.max_columns', None)

######################################### DATASET

data = pd.read_csv("interventi_ricostruzionepubblica.csv", delimiter=";", decimal=",", header=0)

data['LATITUDINE'] = data['LATITUDINE'].astype(float)
data['LONGITUDINE'] = data['LONGITUDINE'].astype(float)

pagamenti = pd.read_csv("pagamenti.csv", delimiter=";", header=0, decimal=",")
pagamenti.rename(columns = {'ID_INTERVENTO':'ID'}, inplace = True) #rinonimo per poter unire

######################################### CODICE

comuni_danneggiati = ['CAVEZZO', 'CONCORDIA SULLA SECCHIA', 'MIRANDOLA', 'NOVI DI MODENA', 'FINALE EMILIA'
    , 'SAN FELICE SUL PANARO', 'MEDOLLA', 'CAMPO-SANTO', 'SAN PROSPERO', 'SAN POSSIDONIO',
                      'SANTAGOSTINO', 'MIRABELLO', 'BONDENO', 'CENTO', 'POGGIO RENATICO', 'VIGARANO MAINARDA',
                      'CREVALCORE', 'PIEVE DI CENTO', 'REGGIOLO']

# 1): LAVORI MAI INIZIATI NEI COMUNI COLPITI DAL TERREMOTO
lavori_mai_iniziati = data[data['DATA_INIZIO_LAVORI'].isnull()]
# print(lavori_mai_iniziati)

comuni_terremoto_lavori_mai_iniziati = lavori_mai_iniziati.loc[lavori_mai_iniziati.COMUNE.isin(comuni_danneggiati)]
comuni_terremoto_lavori_mai_iniziati_filtrato = comuni_terremoto_lavori_mai_iniziati[
    ['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO', 'IMPORTO_ASSEGNATO', 'IMPORTO_PAGATO']].copy()

# creo una colonna con un valore di default
comuni_terremoto_lavori_mai_iniziati_filtrato['Value'] = 1

# 2): LAVORI INIZIATI MA NON ANCORA TERMINATI NEI COMUNI COLPITI DAL TERREMOTO
filtered_data = data[data['DATA_INIZIO_LAVORI'].notnull()]
# print(filtered_data.head())

# dataframe con lavori non terminati
lavori_non_terminati = filtered_data[filtered_data['DATA_FINE_LAVORI'].isnull()]
comuni_terremoto_lavori_non_terminati = lavori_non_terminati.loc[lavori_non_terminati.COMUNE.isin(comuni_danneggiati)]
comuni_terremoto_lavori_non_terminati_filtrato = comuni_terremoto_lavori_non_terminati[
    ['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO', 'IMPORTO_ASSEGNATO', 'IMPORTO_PAGATO']].copy()

comuni_terremoto_lavori_non_terminati_filtrato['Value'] = 2

# 3): LAVORI TERMINATI NEI COMUNI COLPITI DAL TERREMOTO
lavori_terminati = filtered_data[filtered_data['DATA_FINE_LAVORI'].notnull()]
comuni_terremoto_lavori_terminati = lavori_terminati.loc[lavori_terminati.COMUNE.isin(comuni_danneggiati)]
comuni_terremoto_lavori_terminati_filtrato = comuni_terremoto_lavori_terminati[
    ['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO', 'IMPORTO_ASSEGNATO', 'IMPORTO_PAGATO']].copy()

comuni_terremoto_lavori_terminati_filtrato['Value'] = 3

lavori_merged = pd.concat(
    [comuni_terremoto_lavori_mai_iniziati_filtrato, comuni_terremoto_lavori_non_terminati_filtrato,
     comuni_terremoto_lavori_terminati_filtrato])

#istituti = lavori_merged[lavori_merged['DESCRIZIONE_INTERVENTO'].str.contains("scuola", "istituto")]
#print(istituti)


lavori_pagamenti = lavori_merged
#lavori_pagamenti.fillna('0', inplace=True)
#print(lavori_pagamenti.head())

lavori_pagamenti_filtrato = lavori_pagamenti[['ID', 'COMUNE', 'DESCRIZIONE_INTERVENTO', 'IMPORTO_ASSEGNATO', 'IMPORTO_PAGATO', 'Value']].copy()
lavori_pagamenti_filtrato['IMPORTO_ASSEGNATO'] = lavori_pagamenti_filtrato['IMPORTO_ASSEGNATO'].astype(float)
lavori_pagamenti_filtrato['IMPORTO_PAGATO'] = lavori_pagamenti_filtrato['IMPORTO_PAGATO'].astype(float)

comuni_lavori = lavori_pagamenti_filtrato[['COMUNE', 'Value']].copy()

comuni_lavori['count'] = 1
result = comuni_lavori.pivot_table(
    index=['COMUNE'], columns=['Value'], values='count',
    fill_value=0, aggfunc=np.sum)
result.columns = [f'Value {x}' for x in result.columns]
result = result.reset_index()
col_list= list(result)
result['SOMMA_LAVORI'] = result[col_list].sum(axis=1)
group = lavori_pagamenti_filtrato.groupby('COMUNE', sort=False, as_index=False)['IMPORTO_ASSEGNATO', 'IMPORTO_PAGATO'].sum()
dataset_completo = pd.merge(result, group, on='COMUNE', how='outer')
danni = pd.read_csv('points1.csv')
danni.rename(columns = {'NOME_COM':'COMUNE'}, inplace = True)
danni.rename(columns = {'DANNO':'MCS_DANNO'}, inplace = True) #per dopo
#per dopo
danni['COMUNE'] = danni['COMUNE'].str.upper() #per dopo
dataset_completo = pd.merge(dataset_completo, danni, on='COMUNE', how='outer')
dataset_completo.rename(columns = {'Value 1':'LAVORI_NON_INIZIATI', 'Value 2':'LAVORI_IN_CORSO', 'Value 3':'LAVORI_NON_TERMINATI'}, inplace = True)
#print(lavori_pagamenti_filtrato)
#del lavori_pagamenti_filtrato['IMPORTO']
#lavori_pagamenti_filtrato = lavori_pagamenti_filtrato.drop_duplicates(subset=['ID'])
#lavori_pagamenti_filtrato['totale'] = group['IMPORTO']
print(dataset_completo)
dataset_completo.to_csv('TABELLA_BASE_LAVORI_PAGAMENTI.csv')
