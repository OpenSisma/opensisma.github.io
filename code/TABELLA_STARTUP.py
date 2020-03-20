import pandas as pd
pd.set_option('display.max_columns', None)
import numpy as np
import matplotlib.pyplot as plt
import geopandas as gpd
from shapely.geometry import Point


# creo una lista di province e comuni danneggiati
province_danneggiati = ['MO', 'FE', 'BO', 'RE']
comuni_danneggiati = ['CAVEZZO', 'CONCORDIA SULLA SECCHIA', 'MIRANDOLA', 'NOVI DI MODENA', 'FINALE EMILIA',
                      'SAN FELICE SUL PANARO', 'MEDOLLA', 'CAMPO-SANTO', 'SAN PROSPERO', 'SAN POSSIDONIO',
                      'SANTAGOSTINO', 'MIRABELLO', 'BONDENO', 'CENTO', 'POGGIO RENATICO', 'VIGARANO MAINARDA',
                      'CREVALCORE', 'PIEVE DI CENTO', 'REGGIOLO'] #non va perché ci sono degli spaziii; ora va ma spazi grosso problema


# leggo i dataset e li modifico per poterli unire
#DATASET 1
#specificare engine o non va
startup = pd.read_csv("STARTUP_17022020.csv", delimiter="|", header=0, engine='python')
startup['comune'] = startup['comune'].str.strip()

#startup province che ci interessano

startup_comuni = startup.loc[startup.comune.isin(comuni_danneggiati)]

startup_comuni['data iscrizione alla sezione delle startup'] = pd.to_datetime(startup_comuni['data iscrizione alla sezione delle startup'], format='%d/%m/%Y')

startup_province_filtrato = startup_comuni[['pv', 'comune', 'data iscrizione alla sezione delle startup','settore']].copy()

prova =pd.pivot_table(startup_province_filtrato,index=startup_province_filtrato['data iscrizione alla sezione delle startup'].dt.year,columns=startup_province_filtrato['comune'],
               values='comune',aggfunc='count')
prova.to_csv('TABELLA_STARTUP.csv')