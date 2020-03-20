import pandas as pd
pd.set_option('display.max_columns', None)
import numpy as np



# creo una lista di province e comuni danneggiati
province_danneggiati = ['MODENA', 'FERRARA', 'BOLOGNA', 'REGGIO EMILIA']
comuni_danneggiati = ['CAVEZZO', 'CONCORDIA SULLA SECCHIA', 'MIRANDOLA', 'NOVI DI MODENA', 'FINALE EMILIA'
    , 'SAN FELICE SUL PANARO', 'MEDOLLA', 'CAMPO-SANTO', 'SAN PROSPERO', 'SAN POSSIDONIO',
                      'SANTAGOSTINO', 'MIRABELLO', 'BONDENO', 'CENTO', 'POGGIO RENATICO', 'VIGARANO MAINARDA',
                      'CREVALCORE', 'PIEVE DI CENTO', 'REGGIOLO']

# leggo i dataset e li modifico per poterli unire
#DATASET 1
data = pd.read_csv("interventi_ricostruzionepubblica.csv", delimiter=";", header=0)

# DATASET 2: PUNTEGGIO SCUOLE
data3 = pd.read_csv("VALUTAZIONE_ESITI_STA20160831.csv", delimiter=",", header= 0)
p1617 = pd.read_csv("1617.csv", delimiter=",", header= 0)
#lavori_scolastici = (lavori_mai_iniziati[lavori_mai_iniziati['TIPOLOGIA_INTERVENTO'].str.contains("EDILIZIA SCOLASTICA E UNIVERSITA'")])
 # DATASET 3: SICUREZZA SCUOLE
datascuole = pd.read_csv("sicurezzascuole.csv", header= 0)
nonagibili = (datascuole.loc[datascuole['CERTIFICATOAGIBILITAABITABILITA'] == 'NO']) #quali no questo certificato
nonagibili['CODICESCUOLA'] = nonagibili['CODICESCUOLA'].astype(str) #niente match se codice è una stringa! problema

# DATASET 4: ANAGRAFE SCUOLE PER POTER CAPIRE A QUALI SCUOLE CORRISPONDE IL PUNTEGGIO
anagrafescuolebologna = pd.read_csv("AnagrafeScuole_2017_2018.csv", header=0)
anagrafescuolebologna.rename(columns = {'Codice':' CODICEISTITUTO'}, inplace = True) #rinonimo per poter unire

#DATASET 3
danni = pd.read_csv('points1.csv')
danni.rename(columns = {'NOME_COM':'Comune'}, inplace = True) #per dopo
danni['Comune'] = danni['Comune'].str.upper() #per dopo

############################################################################

# 1): LAVORI MAI INIZIATI NEI COMUNI COLPITI DAL TERREMOTO
lavori_mai_iniziati = data[data['DATA_INIZIO_LAVORI'].isnull()]
# print(lavori_mai_iniziati)

comuni_terremoto_lavori_mai_iniziati = lavori_mai_iniziati.loc[lavori_mai_iniziati.COMUNE.isin(comuni_danneggiati)]
comuni_terremoto_lavori_mai_iniziati_filtrato = comuni_terremoto_lavori_mai_iniziati[
    ['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO']].copy()

# creo una colonna con un valore di default
comuni_terremoto_lavori_mai_iniziati_filtrato['Value'] = 1

# 2): LAVORI INIZIATI MA NON ANCORA TERMINATI NEI COMUNI COLPITI DAL TERREMOTO
filtered_data = data[data['DATA_INIZIO_LAVORI'].notnull()]
# print(filtered_data.head())

# dataframe con lavori non terminati
lavori_non_terminati = filtered_data[filtered_data['DATA_FINE_LAVORI'].isnull()]
comuni_terremoto_lavori_non_terminati = lavori_non_terminati.loc[lavori_non_terminati.COMUNE.isin(comuni_danneggiati)]
comuni_terremoto_lavori_non_terminati_filtrato = comuni_terremoto_lavori_non_terminati[
    ['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO']].copy()

comuni_terremoto_lavori_non_terminati_filtrato['Value'] = 2

# 3): LAVORI TERMINATI NEI COMUNI COLPITI DAL TERREMOTO
lavori_terminati = filtered_data[filtered_data['DATA_FINE_LAVORI'].notnull()]
comuni_terremoto_lavori_terminati = lavori_terminati.loc[lavori_terminati.COMUNE.isin(comuni_danneggiati)]
comuni_terremoto_lavori_terminati_filtrato = comuni_terremoto_lavori_terminati[
    ['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO']].copy()

comuni_terremoto_lavori_terminati_filtrato['Value'] = 3

dataframes = [comuni_terremoto_lavori_mai_iniziati_filtrato, comuni_terremoto_lavori_non_terminati_filtrato,
              comuni_terremoto_lavori_terminati_filtrato]

# UNISCO I TRE DATAFRAME: UNICO DF CON TUTTI I TIPI DI LAVORO NEI COMUNI DEL SISMA
lavori_uniti = pd.concat(
    [comuni_terremoto_lavori_mai_iniziati_filtrato, comuni_terremoto_lavori_non_terminati_filtrato,
     comuni_terremoto_lavori_terminati_filtrato])
lavori_uniti.rename(columns = {'COMUNE':'Comune'}, inplace = True)

uniti = pd.merge(data3, anagrafescuolebologna, how='inner', on=' CODICEISTITUTO')


#uniti1 = pd.merge(uniti, nonagibili, how='outer', on='CODICESCUOLA')

uniti1 = pd.merge(uniti, datascuole, how='inner', left_on=' CODICEISTITUTO', right_on='CODICESCUOLA')


punteggio_comuni_terremoto = uniti1.loc[uniti1.Comune.isin(comuni_danneggiati)]


#es = lavori_uniti.loc[(lavori_uniti['Value'] == 1) & (lavori_uniti['COMUNE'] == 'MIRANDOLA')]
agibilita = punteggio_comuni_terremoto[['Comune', 'CERTIFICATOAGIBILITAABITABILITA', 'CERTIFICATOCOLLAUDOSTATICO', 'DOCUMENTOVALUTAZIONERISCHIO', 'PIANOEMERGENZA']].copy()
ceraa = agibilita[(agibilita.CERTIFICATOAGIBILITAABITABILITA != 'SI') |
                  (agibilita.CERTIFICATOCOLLAUDOSTATICO != 'SI') |
                  (agibilita.DOCUMENTOVALUTAZIONERISCHIO != 'SI') |
                  (agibilita.PIANOEMERGENZA != 'SI')]

vincoli = pd.read_csv("vincoli.csv", delimiter=",", header= 0)
anagrafescuolebologna.rename(columns = {' CODICEISTITUTO':'CODICESCUOLA'}, inplace = True)
vincoliunito= pd.merge(vincoli, anagrafescuolebologna, how='inner', on='CODICESCUOLA')
vincoliunitocomuni = vincoliunito.loc[vincoliunito.Comune.isin(comuni_danneggiati)]

vincoliunitocomuni_fil = vincoliunitocomuni[(vincoliunitocomuni.VINCOLIIDROGEOLOGICI == 'SI') |
                                            (vincoliunitocomuni.VINCOLIPAESAGGIO == 'SI') |
                                            (vincoliunitocomuni.EDIFICIOVETUSTO == 'SI') |
                                            (vincoliunitocomuni.PROGETTAZIONEANTISISMICA == 'NO')]
vincoliunitocomuni_fil = vincoliunitocomuni_fil[['Comune','VINCOLIIDROGEOLOGICI', 'VINCOLIPAESAGGIO', 'EDIFICIOVETUSTO', 'PROGETTAZIONEANTISISMICA']].copy()
ok = vincoliunitocomuni_fil.groupby(['Comune'], as_index=False).VINCOLIPAESAGGIO.agg(lambda g: g.eq('SI').sum())
ok1 = vincoliunitocomuni_fil.groupby(['Comune'], as_index=False).EDIFICIOVETUSTO.agg(lambda g: g.eq('SI').sum())
ok2 = vincoliunitocomuni_fil.groupby(['Comune'], as_index=False).PROGETTAZIONEANTISISMICA.agg(lambda g: g.eq('NO').sum())
ok3= vincoliunitocomuni_fil.groupby(['Comune'], as_index=False).VINCOLIIDROGEOLOGICI.agg(lambda g: g.eq('SI').sum())

uno = pd.merge(pd.merge(pd.merge(ok, ok1, on='Comune'), ok2, on='Comune'), ok3, on='Comune')


#contoino = ceraa.groupby('Comune', as_index=False)['CERTIFICATOAGIBILITAABITABILITA', 'CERTIFICATOCOLLAUDOSTATICO', 'DOCUMENTOVALUTAZIONERISCHIO', 'PIANOEMERGENZA'].count()
#print(contoino) #SOLO 3 NON HANNO CERT AGIB ABIT, 2017

co =  ceraa.groupby(['Comune'], as_index=False).CERTIFICATOAGIBILITAABITABILITA.agg(lambda g: g.eq('NO').sum())
co1 =ceraa.groupby(['Comune'], as_index=False).DOCUMENTOVALUTAZIONERISCHIO.agg(lambda g: g.eq('NO').sum())
co2 = ceraa.groupby(['Comune'], as_index=False).PIANOEMERGENZA.agg(lambda g: g.eq('NO').sum())
contoino = pd.merge(pd.merge(co, co1, on='Comune'), co2, on='Comune')



#unisco_m = pd.merge(punteggio_comuni_terremoto, lavori_uniti, on='Comune', how='outer')
#contiamo = punteggio_comuni_terremoto.groupby(['Comune', ' CODICEISTITUTO'], as_index=False).count() #NUMERO DI SCUOLE
contiamo = punteggio_comuni_terremoto.groupby('Comune')[' CODICEISTITUTO'].nunique().reset_index()
contiamo.rename(columns = {' CODICEISTITUTO':'numero_scuole'}, inplace = True)
print(contiamo)


media = punteggio_comuni_terremoto.groupby('Comune', as_index=False)[' PUNTEGGIOSCUOLA'].mean() #media punteggio


comuni_lavori = lavori_uniti[['Comune', 'Value']].copy()



comuni_lavori['count'] = 1
result = comuni_lavori.pivot_table(
    index=['Comune'], columns=['Value'], values='count',
    fill_value=0, aggfunc=np.sum
)
result.columns = [f'Value {x}' for x in result.columns]
result = result.reset_index()
risultato_unito = pd.merge(media, result, on='Comune', how='outer')



dataset_completo = pd.merge(risultato_unito, danni, on='Comune', how='outer')
#print(dataset_completo)
col_list= list(dataset_completo)
col_list.remove(' PUNTEGGIOSCUOLA')
col_list.remove('DANNO')
dataset_completo['Somma valori'] = dataset_completo[col_list].sum(axis=1)
dataset_completo.rename(columns = {' PUNTEGGIOSCUOLA':'PUNTEGGIOSCUOLA1516'}, inplace = True) #rinonimo per poter unire
dataset_completo['numero_di_scuole'] = contiamo['numero_scuole']

dataset_completo = pd.merge(dataset_completo, contoino, on='Comune', how='outer')
dataset_completo_1617 = pd.merge(dataset_completo, p1617, on='Comune', how='outer')
dataset_completo_1617.rename(columns = {'PUNTEGGIOSCUOLA':'PUNTEGGIOSCUOLA1617'}, inplace = True)
#insert quii
del dataset_completo_1617['Unnamed: 0']



#dataset_completo_16172= pd.merge(dataset_completo_1617, uno, on='Comune', how='outer')
#dataset_completo_16172=  dataset_completo_1617.join(uno.set_index('Comune'), on='Comune', how='left')
dataset_completo_16172 = pd.merge(dataset_completo_1617, uno, how="outer")
puntparitarie = pd.read_csv("punteggioparitarie.csv", header=0)
dataset_completo_161723 = pd.merge(dataset_completo_16172, puntparitarie, how="outer")
del dataset_completo_161723['Unnamed: 0']
dataset_completo_161723 = dataset_completo_161723.replace(0, np.nan)
dataset_completo_161723.rename(columns = {'Comune':'COMUNE', 'Value 1':'LAVORI_NON_INIZIATI', 'Value 2':'LAVORI_IN_CORSO', 'Value 3':'LAVORI_TERMINATI',
       'DANNO':'MCS_DANNO', 'Somma valori':'LAVORI_TOTALI', 'numero_di_scuole':'SCUOLE_TOTALI',
       'PUNTEGGIOSCUOLA1617':'PUNTEGGIO_SCUOLE_STATALI_1617', 'PUNTEGGIOSCUOLA1516':'PUNTEGGIO_SCUOLE_STATALI_1516',
                                          'CERTIFICATOAGIBILITAABITABILITA':'CERTIFICATOAGIBILITAABITABILITA_ASSENTE',
                                          'DOCUMENTOVALUTAZIONERISCHIO':'DOCUMENTOVALUTAZIONERISCHIO_ASSENTE',
                                          'PIANOEMERGENZA':'PIANOEMERGENZA_ASSENTE', 'PROGETTAZIONEANTISISMICA':'PROGETTAZIONEANTISISMICA_ASSENTE'}, inplace = True)
print(dataset_completo_161723)
dataset_completo_161723.to_csv('TABELLA_EDU_DEFINITIVA.csv')





