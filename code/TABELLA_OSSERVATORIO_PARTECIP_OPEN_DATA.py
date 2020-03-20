import pandas as pd
import numpy as np
pd.options.mode.chained_assignment = None  # default='warn'

pd.set_option('display.max_columns', None)


osservatorio_data = pd.read_csv("Open_Data_Anno_di_Avvio.csv", delimiter = '","', header= 0, error_bad_lines=False, engine="python" )


# prendiamo solo i processi partecipativi attuati nei comuni considerati
comuni_danneggiati = ['CAVEZZO', 'CONCORDIA SULLA SECCHIA', 'MIRANDOLA', 'NOVI DI MODENA', 'FINALE EMILIA'
    , 'SAN FELICE SUL PANARO', 'MEDOLLA', 'CAMPO-SANTO', 'CAMPOSANTO', "SANT'AGOSTINO", 'SAN PROSPERO', 'SAN POSSIDONIO',
                      'SANTAGOSTINO', 'MIRABELLO', 'BONDENO', 'CENTO', 'POGGIO RENATICO', 'VIGARANO MAINARDA',
                      'CREVALCORE', 'PIEVE DI CENTO', 'REGGIOLO']

osservatorio_data['Comune'] = osservatorio_data['Comune'].str.upper()
processi_comuni_terremoto = osservatorio_data.loc[osservatorio_data.Comune.isin(comuni_danneggiati)]
#filtro il dataset perché le colonne sono troppe
processi_comuni_terremoto_rid = processi_comuni_terremoto[['Natura Processo', 'Stato di avanzamento', 'Processo in zone terremotate','Provincia','Comune', 'Anno di avvio', 'Popolazione Impattata']].copy()

#vogliamo i processi dopo il 2012, due anni prima perché fa bene al grafico

processi_comuni_terremoto_rid = processi_comuni_terremoto[processi_comuni_terremoto_rid['Anno di avvio'] >= 2010]

#tabella pivot in cui mettere il conto
processi_comuni_terremoto_rid['count'] = 1
processi_per_anni = processi_comuni_terremoto_rid.pivot_table(
    index=['Anno di avvio'], columns=['Comune'], values='count',
    fill_value=0, aggfunc=np.sum
)
processi_per_anni.columns = [f'Value {x}' for x in processi_per_anni.columns]
result = processi_per_anni.reset_index()
#print(processi_per_anni)

processi_comuni_terremoto_rid['count'] = 1
popolazione = processi_comuni_terremoto_rid.pivot_table(
    index=['Anno di avvio'], columns=['Comune'], values='Popolazione Impattata',
    fill_value=0
)
popolazione.columns = [f'Popolazione impattata {x}' for x in processi_per_anni.columns]

tutto = pd.merge(processi_per_anni, popolazione, on='Anno di avvio')
print(tutto)
tutto.to_csv('PROCESSI_PARTECIPATIVI_PER_ANNI_CON_POPOLAZIONE.csv')

#da fare così per ogni comune

