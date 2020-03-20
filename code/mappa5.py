import pandas as pd

import branca
import numpy as np
import matplotlib.pyplot as plt

import geopandas as gpd
from shapely.geometry import Point

pd.set_option('display.max_columns', None)

data = pd.read_csv("interventi_ricostruzionepubblica.csv", delimiter=";", decimal=",", header=0)
data['LATITUDINE'] = data['LATITUDINE'].astype(float)
data['LONGITUDINE'] = data['LONGITUDINE'].astype(float)



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

dataframe_uniti = lavori_pagamenti[['ID', 'COMUNE', 'LATITUDINE', 'LONGITUDINE', 'DESCRIZIONE_INTERVENTO', 'IMPORTO_ASSEGNATO', 'IMPORTO_PAGATO', 'Value']].copy()
dataframe_uniti['IMPORTO_ASSEGNATO'] = dataframe_uniti['IMPORTO_ASSEGNATO'].astype(float)
dataframe_uniti['IMPORTO_PAGATO'] = dataframe_uniti['IMPORTO_PAGATO'].astype(float)

dataframe_uniti.dropna(subset=['LATITUDINE', 'LONGITUDINE'], inplace=True)
#dataframe_uniti = dataframe_uniti.dropna(subset=['LONGITUDINE', 'LATITUDINE'])
print(dataframe_uniti)
## Make list of Points to use as geometry column
geom = [Point(xy) for xy in zip(dataframe_uniti['LONGITUDINE'], dataframe_uniti['LATITUDINE'])]

## create GeoDataFrame with incident data and list of Point geometries
mappa_gdf = gpd.GeoDataFrame(dataframe_uniti, geometry=geom)
mappa_gdf.plot(figsize=(12, 12))
# plt.show()

import folium
from folium import Map
from folium.map import Layer, FeatureGroup, LayerControl, Marker
from folium.plugins import MarkerCluster, FeatureGroupSubGroup, Fullscreen

f_map = folium.Map(location=[44.75, 11],
                     zoom_start=10,
                     tiles='OpenStreetMap',
                     control_scale=True,
                     prefer_canvas=True)

Fullscreen(
    title='Expand me',
    title_cancel='Exit fullscreen',
    force_separate_button=True
).add_to(f_map)

data = pd.read_csv('points1.csv')

folium.Choropleth(
    geo_data='map2.geojson',
    data = data,
columns=['NOME_COM', 'DANNO'],
name = 'Damaged areas (epicenter)',
fill_color='YlOrRd',
legend_name='Damage entity',
highlight=True,
    key_on='feature.properties.NOME_COM'
).add_to(f_map)



# Function to change the marker color
# according to the elevation of volcano
def color(value):
    if value == 1:
        col = 'green'
    elif value  == 2:
        col = 'blue'
    elif value == 3:
        col = 'orange'
    else:
        col='red'
    return col

incidents_accident = folium.map.FeatureGroup()
latitudes = list(mappa_gdf.LATITUDINE)
longitudes = list(mappa_gdf.LONGITUDINE)
labels = list(mappa_gdf.Value)
comune = list(mappa_gdf.COMUNE)
descrizione = list(mappa_gdf.DESCRIZIONE_INTERVENTO)
finanz = list(mappa_gdf.IMPORTO_PAGATO)
finanzass = list(mappa_gdf.IMPORTO_ASSEGNATO)

from folium import plugins
#fg = folium.FeatureGroup(name='Lavori mai iniziati')
mc = folium.plugins.MarkerCluster(control=False)
fg1 = folium.plugins.FeatureGroupSubGroup(mc, name='Works not started yet')
fg2 = plugins.FeatureGroupSubGroup(mc, name='Works in progress')
fg3 = plugins.FeatureGroupSubGroup(mc, name='Finished works')
f_map.add_child(mc)



for lat, lng, label, comune, descrizione, finanz, finanzass in zip(latitudes, longitudes, labels, comune, descrizione, finanz, finanzass):
    html = f"""<div style="font-family:helvetica">
                <h3> {descrizione} </h3><br>
                <b>Where:</b>  {comune} <br>
                <b>Amount allocated:</b>  {finanzass} euro<br>
                <b>Amount paid:</b>  {finanz} euro<br>
                <b> Work progress: {'Works not started yet' if label == 1 else 'Works in progress' if label == 2 else 'Finished works'}</b><br>
                </div>
          """

    iframe = branca.element.IFrame(html=html, width=300, height=200)
    popup = folium.Popup(iframe, max_width=2650)

    if label == 1:
        fg1.add_child(folium.Marker(
        location = [lat, lng],
        popup = popup,
        icon = folium.Icon(color='red', icon="dot-circle", prefix='fa')))
    elif label == 2:
        fg2.add_child(folium.Marker(
        location = [lat, lng],
        popup = popup,
        icon = folium.Icon(color='orange', icon="dot-circle", prefix='fa')))
    else:
        fg3.add_child(folium.Marker(
        location=[lat, lng],
        popup=popup,
        icon=folium.Icon(color='green', icon="dot-circle", prefix='fa')))

f_map.add_child(fg1)
fg2.add_to(f_map)
fg3.add_to(f_map)


folium.LayerControl().add_to(f_map)
#folium.map.LayerControl(collapsed=False).add_to(f_map)
f_map.save('./mappa_definitiva.html')
print(f_map)


