import pandas as pd
from pandas import read_excel
import numpy as np
pd.options.mode.chained_assignment = None  # default='warn'
pd.set_option('display.max_columns', None)
data = pd.read_excel("INGV_QUEST_2012-05-29.xlsx", skiprows=2, header=1)
#print(data.head())
comuni_danneggiati = ['CAVEZZO', 'CONCORDIA SULLA SECCHIA', 'MIRANDOLA', 'NOVI DI MODENA', 'FINALE EMILIA'
    , 'SAN FELICE SUL PANARO', 'MEDOLLA', 'CAMPO-SANTO', 'SAN PROSPERO', 'SAN POSSIDONIO',
                      'SANTAGOSTINO', 'MIRABELLO', 'BONDENO', 'CENTO', 'POGGIO RENATICO', 'VIGARANO MAINARDA',
                      'CREVALCORE', 'PIEVE DI CENTO', 'REGGIOLO']

data['Località'] = data['Località'].str.upper()
danni_comuni_terr = data.loc[data.Località.isin(comuni_danneggiati)]
danni_comuni_terr_fil = danni_comuni_terr[['Località', 'IntMCS']].copy()
danni_comuni_terr_fil = danni_comuni_terr_fil.reset_index(drop=True)

danni_comuni_terr_fil.rename(columns = {'Località':'NOME_COM'}, inplace = True)
danni_comuni_terr_fil.rename(columns = {'IntMCS':'DANNO'}, inplace = True)
danni_comuni_terr_fil['DANNO'] = danni_comuni_terr_fil['DANNO'].str.replace('+','').str.split('-', expand=True).astype(float).mean(axis=1)
print(danni_comuni_terr_fil)
danni_comuni_terr_fil.to_csv('points2.csv')