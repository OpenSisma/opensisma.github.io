   
    
            var map_3a208fe2faed43e2b31a34c0d6b1dc93 = L.map(
                "map_3a208fe2faed43e2b31a34c0d6b1dc93",
                {
                    center: [44.75, 11.2],
                    crs: L.CRS.EPSG3857,
                    zoom: 10.25,
                    zoomControl: true,
                    preferCanvas: true,
                }
            );
            L.control.scale().addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);

            

        
    
            var tile_layer_799d6b8e777242b3b1adbaf817a5f93a = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
    
            L.control.fullscreen(
                {"forceSeparateButton": true, "position": "topleft", "title": "Expand me", "titleCancel": "Exit fullscreen"}
            ).addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
    
            var choropleth_449150b360634166a9bbeddb1d867c0c = L.featureGroup(
                {}
            ).addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
    
        function geo_json_7d80ebe586364b3595e9d7798aba6329_styler(feature) {
            switch(feature.properties.PRO_COM) {
                case 35032: case 36012: case 36037: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 36004: case 37024: case 38016: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 36009: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 36010: case 36022: case 36028: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 38022: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
            }
        }
        function geo_json_7d80ebe586364b3595e9d7798aba6329_highlighter(feature) {
            switch(feature.properties.PRO_COM) {
                default:
                    return {"fillOpacity": 0.8, "weight": 3};
            }
        }






        ////////// GRAFICO GENERALE /////////////////////////////



        
const datoa = myJSON
    .map(itm => ({
        x: (itm['LAVORI_NON_INIZIATI'] + itm['LAVORI_IN_CORSO']) / itm['SCUOLE_TOTALI'],
        y: itm['PUNTEGGIO_SCUOLE_STATALI_1516']
    }))
    .sort((a, b) => (a.x === b.x) ? a.y - b.y : a.x - b.x);

    datoa.splice(-1,1)

const datoa2 = myJSON
    .map(itm => ({
        x: (itm['LAVORI_NON_INIZIATI'] + itm['LAVORI_IN_CORSO']) / itm['SCUOLE_TOTALI'],
        y: itm['PUNTEGGIO_SCUOLE_STATALI_1617']
    }))
    .sort((a, b) => (a.x === b.x) ? a.y - b.y : a.x - b.x);

    //datoa2.splice(-1,1)

    const datoa23 = miavariabile
    .map(itm => ({
        x: itm['LAVORI_NON_INIZIATI'] + itm['LAVORI_IN_CORSO'] + itm['LAVORI_TERMINATI'],
        y: itm['MCS_DANNO']
    }))
    .sort((a, b) => (a.x === b.x) ? a.y - b.y : a.x - b.x);





  



    const clean_data = datoa
    .filter(({ x, y }) => {
      return (
        typeof x === typeof y &&  // filter out one string & one number
        !isNaN(x) &&              // filter out `NaN`
        !isNaN(y) &&
        Math.abs(x) !== Infinity && 
        Math.abs(y) !== Infinity
      );
    })
    .map(({ x, y }) => {
      return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
    });
    clean_data.pop()

        const clean_data2 = datoa2
    .filter(({ x, y }) => {
      return (
        typeof x === typeof y &&  // filter out one string & one number
        !isNaN(x) &&              // filter out `NaN`
        !isNaN(y) &&
        Math.abs(x) !== Infinity && 
        Math.abs(y) !== Infinity
      );
    })
    .map(({ x, y }) => {
      return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
    });
    clean_data2.pop()



    const my_regression = regression.linear(
  clean_data
);

    const my_regression2 = regression.linear(
  clean_data2
);


    const useful_points = my_regression.points.map(([x, y]) => {
    return {x, y};
    //y;    
    //{x, y}
    // or x&y for a 'scatterplot'
})

        const useful_points2 = my_regression2.points.map(([x, y]) => {
    return {x, y};
    //y;    
    //{x, y}
    // or x&y for a 'scatterplot'
})


$("a[href='#pills-contact']").on('shown.bs.tab', function(e) {
    if($.trim($("#pulsante2").html())=='') {
    $("#pulsante2").append('<div id="pulsante2"> <div class="row" id="pulsantino"><div class="col-lg-12"><form><label class="radio-inline btn btn-danger"><input type="radio" id="generale2" value="generale2" name="radiored2" autocomplete="off" checked> Trend school score- damage index (2015-2016) </label> <label class="radio-inline btn btn-danger"><input type="radio" id="dettaglio2" value="dettaglio2" name="radiored2" autocomplete="off"> Trend school score-damage index (2016-2017) </label><label class="radio-inline btn btn-danger"><input type="radio" id="dettaglio3" value="dettaglio3" name="radiored2" autocomplete="off"> Trend total works-damage entity </label></form></div>')}
    var ctx = document.getElementById('Chartline');

                                                             if(window.mixedChart2 && window.mixedChart2 !== null){
        window.mixedChart2.destroy();
    }

window.mixedChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: 'ok',
    datasets: [{
      type: 'line',
      label: 'Predicted',
      data: useful_points,
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }, {
      type: 'bubble',
      label: 'Real',
      data: datoa,
      backgroundColor: "rgba(76,78,80, .7)",
      borderColor: "transparent"
    }]
  },
  options: {

    scales: {
      xAxes: [{
        type: 'linear',
         
        //position: 'bottom',
        //ticks: {
            //min: 0,
          //autoSkip: true,
          beginAtZero: true
        //}
      
        
      }],
      yAxes: [{
        //type: 'linear',
        //position: 'bottom',
        ticks: {

            beginAtZero: true
          //autoSkip: true,
          //beginAtZero: true
        }
      
        
      }],

    }
  }
});




$('input[type=radio][name=radiored2]').change(function() {
                                                            switch ($(this).val()) {
                                                                case 'generale2':
                                                                $('#Chartline').html('')
                                                                var ctx = document.getElementById('Chartline');

                                                             if(window.mixedChart2 && window.mixedChart2 !== null){
        window.mixedChart2.destroy();
    }

window.mixedChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: 'ok',
    datasets: [{
      type: 'line',
      label: 'Predicted',
      data: useful_points,
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }, {
      type: 'bubble',
      label: 'Real',
      data: datoa,
      backgroundColor: "rgba(76,78,80, .7)",
      borderColor: "transparent"
    }]
  },
  options: {

    scales: {
      xAxes: [{
        type: 'linear',
         
        //position: 'bottom',
        //ticks: {
            //min: 0,
          //autoSkip: true,
          beginAtZero: true
        //}
      
        
      }],
      yAxes: [{
        //type: 'linear',
        //position: 'bottom',
        ticks: {

            beginAtZero: true
          //autoSkip: true,
          //beginAtZero: true
        }
      
        
      }],

    }
  }
});
                                                                    break
                                                                case 'dettaglio2':
                                                                var ctx = document.getElementById('Chartline');

                                                                if(window.mixedChart && window.mixedChart !== null){
        window.mixedChart.destroy();
    }
                                                                

window.mixedChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: 'ok',
    datasets: [{
      type: 'line',
      label: 'Predicted',
      data: useful_points2,
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }, {
      type: 'bubble',
      label: 'Real',
      data: datoa2,
      backgroundColor: "rgba(76,78,80, .7)",
      borderColor: "transparent"
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
         
        //position: 'bottom',
        //ticks: {
            //min: 0,
          //autoSkip: true,
          beginAtZero: true
        //}
      
        
      }],
      yAxes: [{
        //type: 'linear',
        //position: 'bottom',
        ticks: {

            beginAtZero: true
          //autoSkip: true,
          //beginAtZero: true
        }
      
        
      }],

    }
  }
});
break
case 'dettaglio3':
 var ctx = document.getElementById('Chartline');

                                                                if(window.chart && window.chart !== null){
        window.chart.destroy();
    }
window.chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: datoa23,
        datasets: [{
            label: 'ok',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: datoa23
        }]
    },

    // Configuration options go here
    options: {
      title: {
            display: true,
            text: 'Trend total works-damage entity'
        }
      }
});

                                                                

                                                                    
                                                            }
                                                        });
});

$('#chartContainer').append('<canvas id="Chartedu"><canvas>')


        function geo_json_7d80ebe586364b3595e9d7798aba6329_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    geo_json_7d80ebe586364b3595e9d7798aba6329.resetStyle(e.target);
                },
                mouseover: function(e) {
                    e.target.setStyle(geo_json_7d80ebe586364b3595e9d7798aba6329_highlighter(e.target.feature));
                },
                click: function(e) {
                    map_3a208fe2faed43e2b31a34c0d6b1dc93.fitBounds(e.target.getBounds());
miavariabile.forEach(function(arrayItem) {

            if (arrayItem["COMUNE"] == e.target.feature.properties.NOME_COM.toUpperCase()) {
                $('#workschartcontainer').append(('<canvas id="Chartworks"><canvas>'))
                $('#pulsantee').html('')
                $('#togliere').remove()
                
                



if(window.chart && window.chart !== null){
        window.chart.destroy();
    }

                var ctx = document.getElementById('Chartworks').getContext('2d');
window.chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Works not started', 'Works in progress', 'Finished works'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#D9534F', '#B83536', '#97111F'],
            data: [arrayItem['LAVORI_NON_INIZIATI'], arrayItem['LAVORI_IN_CORSO'], arrayItem['LAVORI_TERMINATI']]
        }]
    },

    // Configuration options go here
    options: {title: {
            display: true,
            text: 'Number and type of work progress'
        }}
}); // fine chart
        

    }
})// fine foreachfunction
///////////////////                    ///////// GRAFICO PROCESSI ///////////////

// qua filtra i valori che ci servono //
const findValues = (key) => {
  key = key.toUpperCase();
  return Object.keys(ProcessiJSON[0]).filter(item => item.indexOf(key) !=-1)

  //return Object.keys(ProcessiJSON[1]).filter(item => item.indexOf(key) !=-1)
}  

//creo un array vuoto
var arr = []
var arr2 = []
var arr3 = []
var arr4 = []
var arr5 = []
var arr6 = []
var arr7 = []
var arr8 = []
var arr9 = []
var arr10 = []
var arr11 = []


//creo una variabile con i nomi delle aree 
let clicked = e.target.feature.properties.NOME_COM.toUpperCase();
//questa invece trova i valori che combaciano
let match = findValues(clicked)
// per ogni match inseriamo la object property nell'array vuoto ( quindi ora sono solo numeri)
match.forEach(key => arr.push(ProcessiJSON[0][key]))
match.forEach(key => arr2.push(ProcessiJSON[1][key]))
match.forEach(key => arr3.push(ProcessiJSON[2][key]))
match.forEach(key => arr4.push(ProcessiJSON[3][key]))
match.forEach(key => arr5.push(ProcessiJSON[4][key]))
match.forEach(key => arr6.push(ProcessiJSON[5][key]))
match.forEach(key => arr7.push(ProcessiJSON[6][key]))
match.forEach(key => arr8.push(ProcessiJSON[7][key]))
match.forEach(key => arr9.push(ProcessiJSON[8][key]))
match.forEach(key => arr10.push(ProcessiJSON[9][key]))
match.forEach(key => arr11.push(ProcessiJSON[10][key]))


//
var array_pop_2010 = arr.filter(function(x) {
    return x > 100;
});
var array_pop_2011 = arr2.filter(function(x) {
    return x > 100;
});
var array_pop_2012 = arr3.filter(function(x) {
    return x > 100;
});
var array_pop_2013 = arr4.filter(function(x) {
    return x > 100;
});
var array_pop_2014 = arr5.filter(function(x) {
    return x > 100;
});
var array_pop_2015 = arr6.filter(function(x) {
    return x > 100;
});
var array_pop_2016 = arr7.filter(function(x) {
    return x > 100;
});
var array_pop_2017 = arr8.filter(function(x) {
    return x > 100;
});
var array_pop_2018 = arr9.filter(function(x) {
    return x > 100;
});
var array_pop_2019 = arr10.filter(function(x) {
    return x > 100;
});
var array_pop_2020 = arr11.filter(function(x) {
    return x > 100;
});

var yearArrays = [array_pop_2010, array_pop_2011, array_pop_2012, array_pop_2013, array_pop_2014, array_pop_2015, array_pop_2016, array_pop_2017, array_pop_2018, array_pop_2019, array_pop_2020]
// filtro array così da avere solo numeri minori di 100 e togliere la popolazione
var array2010 = arr.filter(function(x) {
    return x < 100;
});

var array2011 = arr2.filter(function(x) {
    return x < 100;
});
var array2012 = arr3.filter(function(x) {
    return x < 100;
});
var array2013 = arr4.filter(function(x) {
    return x < 100;
});
var array2014 = arr5.filter(function(x) {
    return x < 100;
});
var array2015 = arr6.filter(function(x) {
    return x < 100;
});
var array2016 = arr7.filter(function(x) {
    return x < 100;
});
var array2017 = arr8.filter(function(x) {
    return x < 100;
});
var array2018 = arr9.filter(function(x) {
    return x < 100;
});
var array2019 = arr10.filter(function(x) {
    return x < 100;
});
var array2020 = arr11.filter(function(x) {
    return x < 100;
});
//variabile grafico
var ctx2 = document.getElementById('Chartprocessi');

if(window.grafoprocessi && window.grafoprocessi !== null){
        window.grafoprocessi.destroy();
    }



// se chartprocessi è vuoto
if($.trim($("#Chartprocessi").html())=='') {
    $("#scrivoqua").html('')
// inserisco nel paragrafo con id "scrivo qua" l'array (così controlliamo)
   // $("#scrivoqua").append(array2010, array2011)
   $("#scrivoqua").append('<p>' + 'Popolazione impattata progetti Osservatorio 2010: ' + '</p>' + array_pop_2010 +
    '<p>' + 'Popolazione impattata progetti Osservatorio 2011: ' + '</p>' + array_pop_2011 + 
    '<p>' + 'Popolazione impattata progetti Osservatorio 2012: ' + '</p>' + array_pop_2012 +'<p>' + 'Popolazione impattata progetti Osservatorio 2013: ' + '</p>' + array_pop_2013 + '<p>' + 'Popolazione impattata progetti Osservatorio 2014: ' + '</p>'+ array_pop_2014 + '<p>' + 'Popolazione impattata progetti Osservatorio 2015: ' + '</p>' + array_pop_2015 + '<p>' + 'Popolazione impattata progetti Osservatorio 2016: ' + '</p>' + array_pop_2016 + '<p>' + 'Popolazione impattata progetti Osservatorio 2017: ' + '</p>'+ array_pop_2017 + '<p>' + 'Popolazione impattata progetti Osservatorio 2018: ' + '</p>' + array_pop_2018 + '<p>' + 'Popolazione impattata progetti Osservatorio 2019: ' + '</p>' +array_pop_2019 + '<p>' + 'Popolazione impattata progetti Osservatorio 2020: ' + '</p>'+ array_pop_2020)

// faccio partire il grafico
window.grafoprocessi = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Progetti Osservatorio Partecipazione', 'Startup', 'Progetti OpenCoesione'],
        datasets: [{
            label: '2010',
            backgroundColor: 'rgb(255, 230, 230)',
            borderColor: 'rgb(255, 230, 230)',
            data: array2010
        },
        {label:'2011',
        backgroundColor: 'rgb(255, 204, 204)',
            borderColor: 'rgb(255, 204, 204)',
            data: array2011
        },
        {label:'2012',
        backgroundColor: 'rgb(255, 179, 179)',
            borderColor: 'rgb(255, 179, 179)',
            data: array2012
        },
        {label:'2013',
        backgroundColor: 'rgb(255, 102, 102)',
            borderColor: 'rgb(255, 102, 102)',
            data: array2013
        },
        {label:'2014',
        backgroundColor: 'rgb(255, 26, 26)',
            borderColor: 'rgb(255, 26, 26)',
            data: array2014
        },
        {label:'2015',
        backgroundColor: 'rgb(204, 0, 0)',
            borderColor: 'rgb(204, 0, 0)',
            data: array2015
        },
        {label:'2016',
        backgroundColor: 'rgb(153, 0, 0)',
            borderColor: 'rgb(153, 0, 0)',
            data: array2016
        },
        {label:'2017',
        backgroundColor: 'rgb(153, 0, 51)',
            borderColor: 'rgb(153, 0, 51)',
            data: array2017
        },
        {label:'2018',
        backgroundColor: 'rgb(230, 0, 76)',
            borderColor: 'rgb(230, 0, 76)',
            data: array2018
        },
        {label:'2019',
        backgroundColor: 'rgb(255, 26, 102)',
            borderColor: 'rgb(255, 26, 102)',
            data: array2019
        },
        {label:'2020',
        backgroundColor: 'rgb(255, 128, 170)',
            borderColor: 'rgb(255, 128, 170)',
            data: array2020
        }]
    },

    // Configuration options go here
    options: { title: {
            display: true,
            text: 'Custom Chart Title'
        }}
});
// altrimenti

} else {
    // svuoto chartprocessi e lo ripopolo
    $('#scrivoqua').html('')
    $("#Chartprocessi").html('')
    if(window.grafoprocessi && window.grafoprocessi !== null){
        window.grafoprocessi.destroy();
    }
    window.grafoprocessi = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Progetti Osservatorio Partecipazione', 'Startup', 'Progetti OpenCoesione'],
        datasets: [{
            label: '2010',
            backgroundColor: 'rgb(255, 230, 230)',
            borderColor: 'rgb(255, 230, 230)',
            data: array2010
        },
        {label:'2011',
        backgroundColor: 'rgb(255, 204, 204)',
            borderColor: 'rgb(255, 204, 204)',
            data: array2011
        },
        {label:'2012',
        backgroundColor: 'rgb(255, 179, 179)',
            borderColor: 'rgb(255, 179, 179)',
            data: array2012
        },
        {label:'2013',
        backgroundColor: 'rgb(255, 102, 102)',
            borderColor: 'rgb(255, 102, 102)',
            data: array2013
        },
        {label:'2014',
        backgroundColor: 'rgb(255, 26, 26)',
            borderColor: 'rgb(255, 26, 26)',
            data: array2014
        },
        {label:'2015',
        backgroundColor: 'rgb(204, 0, 0)',
            borderColor: 'rgb(204, 0, 0)',
            data: array2015
        },
        {label:'2016',
        backgroundColor: 'rgb(153, 0, 0)',
            borderColor: 'rgb(153, 0, 0)',
            data: array2016
        },
        {label:'2017',
        backgroundColor: 'rgb(153, 0, 51)',
            borderColor: 'rgb(153, 0, 51)',
            data: array2017
        },
        {label:'2018',
        backgroundColor: 'rgb(230, 0, 76)',
            borderColor: 'rgb(230, 0, 76)',
            data: array2018
        },
        {label:'2019',
        backgroundColor: 'rgb(255, 26, 102)',
            borderColor: 'rgb(255, 26, 102)',
            data: array2019
        },
        {label:'2020',
        backgroundColor: 'rgb(255, 128, 170)',
            borderColor: 'rgb(255, 128, 170)',
            data: array2020
        }]
    },


    // Configuration options go here
    options: { title: {
            display: true,
            text: 'Custom Chart Title'
        }}
});
// questo sempre per check 
//$("#scrivoqua").append(array2010, array2011)
$("#scrivoqua").append(array_pop_2010, array_pop_2011, array_pop_2012, array_pop_2013, array_pop_2014, array_pop_2015, array_pop_2016, array_pop_2017, array_pop_2018, array_pop_2019, array_pop_2020)
}


                    /// FINEPROCESSI
                    //
//$("a[href='#pills-settings']").on('shown.bs.tab', function(e) {
    
    //$('#workschartcontainer').append('<canvas id="Chartworks"><canvas>')
    


    //})

                    //
                    /// INIZIO EDU
                   
                    
                
                 myJSON.forEach(function(arrayItem) {
                                            if (arrayItem["COMUNE"] == e.target.feature.properties.NOME_COM.toUpperCase()) {
                                                    
                                                    $('.lead').html('');
                                                    $('#togliere').remove()
                                                    $('.lead').html('Comune of ' + arrayItem.COMUNE + '<br> Damage entity: ' + arrayItem.MCS_DANNO  +  ' <br>Total number of works: '  + arrayItem['LAVORI_TOTALI'] );
                                                    $('#pulsante').html('')
                                                    $('#pulsante').append('<div id="emptyred"><span style="opacity:0;">FMVPAFSB</span></div>')
                                                    $('#pulsante').append('<div class="row" id="redditiButton"><div class="col-lg-12"><form><label class="radio-inline btn btn-danger"><input type="radio" id="dettaglio" value="dettaglio" name="radiored" autocomplete="off" checked> Safety certificates </label><label class="radio-inline btn btn-danger"><input type="radio" id="punteggi" value="punteggi" name="radiored" autocomplete="off"> Comparison between state schools scores and private ones </label></form></div>')
                                                    
                                                    
                                                  





                                                        var datiedu2 = {


                                                            "labels": ['Numero di scuole totali', 'Certificati di agibilità e abilità mancanti', 'Documenti valutazione rischio mancanti', 'Piano emergenza mancante', 'Vincoli paesaggio', 'Edificio vetusto', 'Progettazione antisismica mancante', 'Vincoli idrogeologici'],
                                                            "datasets": [{
                                                            label: 'Total',
                                                            data: [arrayItem['SCUOLE_TOTALI'], arrayItem['CERTIFICATOAGIBILITAABITABILITA_ASSENTE'], arrayItem['DOCUMENTOVALUTAZIONERISCHIO_ASSENTE'], arrayItem['PIANOEMERGENZA_ASSENTE'], arrayItem['VINCOLIPAESAGGIO'],  arrayItem['EDIFICIOVETUSTO'], arrayItem['PROGETTAZIONEANTISISMICA_ASSENTE'], arrayItem['VINCOLIIDROGEOLOGICI']],
                                                            backgroundColor: ['#D9534F', '#B83536', '#97111F', '#770007', '#590000', '#FFB9AD', '#D45B14', '#BC827C'],
                                                             borderWidth: 1}]
                                                        };

                                                        var datigenerici = {
                                                            "labels": ['Total works', 'Damage entity'],
                                                            "datasets": [{
                                                            label: ['Total'],
                                                            data: [arrayItem['LAVORI_TOTALI'], arrayItem['MCS_DANNO']],
                                                            backgroundColor: ['#D9534F', '#B83536', '#97111F'],
                                                             borderWidth: 1}]
                                                        };
                                                        
                                                        var daticonfr= {
                                                        "labels": ['SCUOLE PUBBLICHE 2015-2016', 'SCUOLE PARITARIE 2015-2016', 'SCUOLE PUBBLICHE 2016-2017', 'SCUOLE PARITARIE 2016-2017'],
                                                        "datasets": [{
                                                        label: 'Score',
                                                        data: [arrayItem['PUNTEGGIO_SCUOLE_STATALI_1516'], arrayItem['PUNTEGGIO_SCUOLE_PARITARIE_1516'], arrayItem['PUNTEGGIO_SCUOLE_STATALI_1617'], arrayItem['PUNTEGGIO_SCUOLE_PARITARIE_1617']],
                                                        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 51, 95)', 'rgb(255, 0, 55)'],
                                                        borderWidth: 1}]
                                                        };


                                                    
                                   function grafo(dati, opzioni) {
                                                            var grafobase = document.getElementById('Chartedu').getContext('2d');
                                                            if(window.grafobase && window.grafobase !== null){
        window.grafobase.destroy();
    }
                                                            window.grafobase = new Chart(grafobase, {
                                                                type: 'doughnut',
                                                                data: dati,
                                                                options: opzioni

                                                            });
                                                        };
grafo(datiedu2)
                                              
                                  
                                    

                                    $('input[type=radio][name=radiored]').change(function() {
                                                            switch ($(this).val()) {
                                                                case 'dettaglio':
                                                                    $('#Chartedu').remove();
                                                                    $('#chartContainer').append('<canvas id="Chartedu"><canvas>');
                                                                    grafo(datiedu2)
                                                                    break
                                                               
                                                                case 'punteggi':
                                                                    $('#Chartedu').remove();
                                                                    $('#chartContainer').append('<canvas id="Chartedu"><canvas>');
                                                                    grafo2(daticonfr);
                                                                    break

                                                                    
                                                            }
                                                        });





                                                }
                                            })
                

function grafo2(dati2, opzioni) {
                                                            var grafobase2 = document.getElementById('Chartedu').getContext('2d');
                                                            if(window.grafobase2 && window.grafobase2 !== null){
        window.grafobase2.destroy();
    }
                                                            window.grafobase2 = new Chart(grafobase2, {
                                                                type: 'bar',
                                                                data: dati2,
                                                                options: opzioni

                                                            });
                                                        };

                                    grafo2(datigenerici);
/// processi



                    // chiudi click function
                }


            });


        };


        //////



        //////

      
        var geo_json_7d80ebe586364b3595e9d7798aba6329 = L.geoJson(null, {
                onEachFeature: geo_json_7d80ebe586364b3595e9d7798aba6329_onEachFeature,
            
                style: geo_json_7d80ebe586364b3595e9d7798aba6329_styler,
        });
        function geo_json_7d80ebe586364b3595e9d7798aba6329_add (data) {
            geo_json_7d80ebe586364b3595e9d7798aba6329.addData(data)
                .addTo(choropleth_449150b360634166a9bbeddb1d867c0c);
        }
            geo_json_7d80ebe586364b3595e9d7798aba6329_add({"features": [{"geometry": {"coordinates": [[[10.822127594983577, 44.93665449647624], [10.793580300244304, 44.94013425306163], [10.770980358575713, 44.94361400964702], [10.749569887521258, 44.92273547013467], [10.750759358135394, 44.9099763626549], [10.749569887521258, 44.90765652493131], [10.738864651994028, 44.90765652493131], [10.724591004624392, 44.89025774200435], [10.728159416466802, 44.88677798541896], [10.730538357695075, 44.88677798541896], [10.742433063836437, 44.897217255175136], [10.768601417347439, 44.88097839110998], [10.788822417787758, 44.899537092898726], [10.813801300684622, 44.89489741745154], [10.823317065597713, 44.897217255175136], [10.83045388928253, 44.90301684948412], [10.866138007706624, 44.905336687207715], [10.873274831391441, 44.90765652493131], [10.869706419549033, 44.91577595696389], [10.876843243233852, 44.916935875825686], [10.874464302005578, 44.92157555127287], [10.869706419549033, 44.92041563241108], [10.864948537092488, 44.92389538899647], [10.86732747832076, 44.92853506444366], [10.864948537092488, 44.92969498330545], [10.85424330156526, 44.92737514558186], [10.83045388928253, 44.933174739890845], [10.822127594983577, 44.93665449647624]]], "type": "Polygon"}, "properties": {"COD_PRO": 35, "COD_REG": 8, "DANNO": 7, "NOME_COM": "Reggiolo", "PRO_COM": 35032, "SHAPE_Area": 42662318.7797, "SHAPE_Leng": 34196.5412159}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.178968779224498, 44.79746423306058], [11.212273956420319, 44.806743583954955], [11.218221309491, 44.81138325940215], [11.221789721333408, 44.812543178263944], [11.214652897648591, 44.826462204605505], [11.193242426594136, 44.82066261029652], [11.20156872089309, 44.81022334054035], [11.159937249398315, 44.80326382736956], [11.153989896327634, 44.804423746231365], [11.14209519018627, 44.806743583954955], [11.13495836650145, 44.804423746231365], [11.131389954659042, 44.81370309712574], [11.127821542816633, 44.816022934849336], [11.106411071762178, 44.826462204605505], [11.100463718691497, 44.824142366881915], [11.086190071321859, 44.806743583954955], [11.113547895446995, 44.80094398964597], [11.117116307289406, 44.796304314198785], [11.112358424832859, 44.787024963304404], [11.106411071762178, 44.78586504444261], [11.101653189305633, 44.78238528785722], [11.10284265991977, 44.77658569354823], [11.099274248077359, 44.77194601810104], [11.106411071762178, 44.770786099239245], [11.111168954218723, 44.77774561241003], [11.136147837115587, 44.78586504444261], [11.151610955099361, 44.78586504444261], [11.175400367382089, 44.7916646387516], [11.178968779224498, 44.79746423306058]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6.5, "NOME_COM": "Camposanto", "PRO_COM": 36004, "SHAPE_Area": 22822963.9258, "SHAPE_Leng": 34161.4395915}, "type": "Feature"}, {"geometry": {"coordinates": [[[10.999358716489901, 44.86473952704482], [10.995790304647493, 44.87285895907739], [10.992221892805084, 44.868219283630204], [10.97675877482131, 44.857780013874034], [10.970811421750629, 44.85546017615044], [10.970811421750629, 44.85314033842684], [10.960106186223399, 44.840381230947074], [10.955348303766854, 44.838061393223484], [10.955348303766854, 44.83458163663809], [10.960106186223399, 44.8287820423291], [10.970811421750629, 44.82530228574371], [10.974379833593037, 44.82530228574371], [10.979137716049582, 44.82762212346731], [10.98270612789199, 44.82762212346731], [10.992221892805084, 44.82066261029652], [11.012442893245403, 44.81370309712574], [11.016011305087812, 44.81022334054035], [11.021958658158493, 44.81370309712574], [11.027906011229174, 44.82298244802011], [11.03266389368572, 44.81950269143473], [11.037421776142267, 44.82298244802011], [11.037421776142267, 44.826462204605505], [11.046937541055357, 44.841541149808876], [11.031474423071584, 44.84734074411786], [11.027906011229174, 44.85082050070325], [11.029095481843312, 44.85430025728864], [11.027906011229174, 44.85893993273583], [11.023148128772629, 44.86125977045943], [11.012442893245403, 44.860099851597624], [10.999358716489901, 44.86473952704482]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 8, "NOME_COM": "Cavezzo", "PRO_COM": 36009, "SHAPE_Area": 26730021.0079, "SHAPE_Leng": 22773.8035825, "fill": "#555555", "fill-opacity": 0.5, "stroke": "#555555", "stroke-opacity": 1, "stroke-width": 2}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.030284952457448, 44.9517334416796], [11.008874481402993, 44.95521319826499], [10.996979775261629, 44.95521319826499], [10.991032422190948, 44.952893360541395], [10.966053539294082, 44.93433465875265], [10.95059042131031, 44.933174739890845], [10.951779891924446, 44.92737514558186], [10.9470220094679, 44.92273547013467], [10.951779891924446, 44.916935875825686], [10.957727244995127, 44.914616038102096], [10.96367459806581, 44.90881644379311], [10.955348303766854, 44.89605733631333], [10.949400950696173, 44.89489741745154], [10.945832538853763, 44.88793790428076], [10.961295656837535, 44.879818472248175], [10.962485127451671, 44.885618066557164], [10.975569304207173, 44.89257757972795], [10.985085069120265, 44.90185693062232], [11.001737657718174, 44.90881644379311], [11.025527070000901, 44.9099763626549], [11.030284952457448, 44.90417676834592], [11.035042834913995, 44.90417676834592], [11.043369129212948, 44.914616038102096], [11.063590129653267, 44.93549457761444], [11.060021717810859, 44.938974334199834], [11.060021717810859, 44.949413603956], [11.057642776582586, 44.950573522817805], [11.046937541055357, 44.9517334416796], [11.030284952457448, 44.9517334416796]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7.5, "NOME_COM": "Concordia sulla Secchia", "PRO_COM": 36010, "SHAPE_Area": 40634427.2961, "SHAPE_Leng": 31384.2016902}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.368094606872187, 44.84270106867067], [11.356199900730822, 44.86125977045943], [11.347873606431868, 44.869379202492006], [11.340736782747049, 44.87285895907739], [11.326463135377413, 44.87517879680099], [11.306242134937094, 44.88329822883357], [11.293157958181594, 44.885618066557164], [11.283642193268502, 44.89141766086615], [11.269368545898864, 44.89605733631333], [11.250337016072683, 44.90069701176053], [11.245579133616136, 44.89837717403693], [11.23487389808891, 44.90649660606951], [11.225358133175817, 44.88677798541896], [11.220600250719272, 44.885618066557164], [11.190863485365863, 44.86357960818302], [11.18134772045277, 44.8311018800527], [11.193242426594136, 44.82066261029652], [11.214652897648591, 44.826462204605505], [11.221789721333408, 44.812543178263944], [11.218221309491, 44.81138325940215], [11.212273956420319, 44.806743583954955], [11.178968779224498, 44.79746423306058], [11.177779308610361, 44.796304314198785], [11.18134772045277, 44.79398447647519], [11.208705544577908, 44.804423746231365], [11.217031838876864, 44.804423746231365], [11.22416866256168, 44.80210390850777], [11.236063368703046, 44.804423746231365], [11.293157958181594, 44.80326382736956], [11.301484252480549, 44.81022334054035], [11.312189488007775, 44.82762212346731], [11.322894723535004, 44.832261798914494], [11.347873606431868, 44.8299419611909], [11.351442018274277, 44.832261798914494], [11.352631488888413, 44.83574155549989], [11.366905136258051, 44.838061393223484], [11.368094606872187, 44.84270106867067]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7, "NOME_COM": "Finale Emilia", "PRO_COM": 36012, "SHAPE_Area": 104565857.61, "SHAPE_Leng": 50784.2071059}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.106411071762178, 44.826462204605505], [11.10284265991977, 44.82762212346731], [11.112358424832859, 44.83922131208528], [11.114737366061131, 44.84966058184145], [11.109979483604587, 44.85430025728864], [11.10284265991977, 44.85430025728864], [11.088569012550131, 44.85893993273583], [11.085000600707723, 44.86241968932122], [11.088569012550131, 44.87401887793919], [11.083811130093586, 44.87401887793919], [11.073105894566359, 44.86473952704482], [11.064779600267403, 44.86473952704482], [11.043369129212948, 44.84850066297965], [11.042179658598812, 44.843860987532466], [11.046937541055357, 44.841541149808876], [11.037421776142267, 44.826462204605505], [11.037421776142267, 44.82298244802011], [11.048127011669493, 44.81950269143473], [11.070726953338085, 44.80906342167855], [11.086190071321859, 44.806743583954955], [11.100463718691497, 44.824142366881915], [11.106411071762178, 44.826462204605505]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Medolla", "PRO_COM": 36021, "SHAPE_Area": 27018075.6498, "SHAPE_Leng": 22401.3319654}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.079053247637042, 44.95985287371218], [11.073105894566359, 44.96333263029757], [11.060021717810859, 44.949413603956], [11.060021717810859, 44.938974334199834], [11.063590129653267, 44.93549457761444], [11.038611246756403, 44.90881644379311], [11.035042834913995, 44.90417676834592], [11.037421776142267, 44.90185693062232], [11.030284952457448, 44.897217255175136], [11.024337599386765, 44.89605733631333], [11.016011305087812, 44.89141766086615], [11.01363236385954, 44.88677798541896], [11.016011305087812, 44.885618066557164], [11.014821834473675, 44.88097839110998], [11.007685010788856, 44.87865855338638], [11.001737657718174, 44.87865855338638], [10.995790304647493, 44.87285895907739], [10.999358716489901, 44.86473952704482], [11.004116598946446, 44.86241968932122], [11.012442893245403, 44.860099851597624], [11.023148128772629, 44.86125977045943], [11.027906011229174, 44.85893993273583], [11.029095481843312, 44.85430025728864], [11.027906011229174, 44.85082050070325], [11.031474423071584, 44.84734074411786], [11.042179658598812, 44.843860987532466], [11.043369129212948, 44.84850066297965], [11.055263835354312, 44.857780013874034], [11.067158541495676, 44.86473952704482], [11.073105894566359, 44.86473952704482], [11.083811130093586, 44.87401887793919], [11.098084777463223, 44.87517879680099], [11.106411071762178, 44.87285895907739], [11.119495248517678, 44.8705391213538], [11.130200484044906, 44.87401887793919], [11.132579425273178, 44.877498634524585], [11.13852677834386, 44.87865855338638], [11.156368837555906, 44.87285895907739], [11.174210896767953, 44.87633871566278], [11.178968779224498, 44.87865855338638], [11.190863485365863, 44.88213830997177], [11.22416866256168, 44.88677798541896], [11.236063368703046, 44.9099763626549], [11.243200192387864, 44.916935875825686], [11.25509489852923, 44.925055307858266], [11.259852780985774, 44.933174739890845], [11.246768604230272, 44.9517334416796], [11.242010721773728, 44.94593384737061], [11.238442309931319, 44.944773928508816], [11.213463427034455, 44.94361400964702], [11.20156872089309, 44.938974334199834], [11.157558308170042, 44.93665449647624], [11.151610955099361, 44.933174739890845], [11.143284660800406, 44.93781441533804], [11.118305777903542, 44.9540532794032], [11.104032130533906, 44.958692954850385], [11.09570583623495, 44.95753303598859], [11.079053247637042, 44.95985287371218]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7.5, "NOME_COM": "Mirandola", "PRO_COM": 36022, "SHAPE_Area": 136590701.295, "SHAPE_Leng": 59949.3941677}, "type": "Feature"}, {"geometry": {"coordinates": [[[10.961295656837535, 44.879818472248175], [10.945832538853763, 44.88793790428076], [10.949400950696173, 44.89489741745154], [10.955348303766854, 44.89605733631333], [10.96367459806581, 44.90881644379311], [10.957727244995127, 44.914616038102096], [10.951779891924446, 44.916935875825686], [10.9470220094679, 44.92273547013467], [10.951779891924446, 44.92737514558186], [10.941074656397218, 44.92157555127287], [10.917285244114488, 44.92389538899647], [10.889927419989352, 44.9122962003785], [10.88754847876108, 44.914616038102096], [10.876843243233852, 44.90185693062232], [10.876843243233852, 44.89025774200435], [10.879222184462124, 44.889097823142556], [10.878032713847988, 44.868219283630204], [10.880411655076262, 44.868219283630204], [10.899443184902443, 44.87401887793919], [10.919664185342763, 44.88329822883357], [10.929179950255854, 44.88213830997177], [10.932748362098263, 44.89025774200435], [10.937506244554807, 44.89025774200435], [10.929179950255854, 44.8705391213538], [10.919664185342763, 44.865899445906614], [10.918474714728625, 44.86241968932122], [10.917285244114488, 44.83342171777629], [10.929179950255854, 44.82182252915832], [10.936316773940671, 44.82066261029652], [10.936316773940671, 44.804423746231365], [10.951779891924446, 44.798624151922375], [10.96367459806581, 44.824142366881915], [10.967243009908218, 44.826462204605505], [10.95653777438099, 44.8311018800527], [10.955348303766854, 44.838061393223484], [10.960106186223399, 44.840381230947074], [10.970811421750629, 44.85430025728864], [10.969621951136492, 44.85662009501223], [10.964864068679946, 44.85662009501223], [10.961295656837535, 44.85546017615044], [10.958916715609263, 44.85662009501223], [10.958916715609263, 44.86125977045943], [10.966053539294082, 44.86357960818302], [10.958916715609263, 44.871699040215596], [10.961295656837535, 44.87517879680099], [10.961295656837535, 44.879818472248175]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7.5, "NOME_COM": "Novi di Modena", "PRO_COM": 36028, "SHAPE_Area": 52414847.1039, "SHAPE_Leng": 48457.0619661}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.22416866256168, 44.88677798541896], [11.190863485365863, 44.88213830997177], [11.178968779224498, 44.87865855338638], [11.174210896767953, 44.87633871566278], [11.156368837555906, 44.87285895907739], [11.13852677834386, 44.87865855338638], [11.132579425273178, 44.877498634524585], [11.130200484044906, 44.87401887793919], [11.119495248517678, 44.8705391213538], [11.106411071762178, 44.87285895907739], [11.099274248077359, 44.87517879680099], [11.088569012550131, 44.87401887793919], [11.085000600707723, 44.86241968932122], [11.088569012550131, 44.85893993273583], [11.10284265991977, 44.85430025728864], [11.109979483604587, 44.85430025728864], [11.114737366061131, 44.84966058184145], [11.112358424832859, 44.83922131208528], [11.10284265991977, 44.82762212346731], [11.127821542816633, 44.816022934849336], [11.131389954659042, 44.81370309712574], [11.13495836650145, 44.804423746231365], [11.14209519018627, 44.806743583954955], [11.153989896327634, 44.804423746231365], [11.159937249398315, 44.80326382736956], [11.20156872089309, 44.81022334054035], [11.19205295598, 44.82182252915832], [11.18134772045277, 44.8311018800527], [11.183726661681044, 44.841541149808876], [11.190863485365863, 44.86357960818302], [11.220600250719272, 44.885618066557164], [11.22416866256168, 44.88677798541896]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7, "NOME_COM": "San Felice sul Panaro", "PRO_COM": 36037, "SHAPE_Area": 51530971.8912, "SHAPE_Leng": 38095.39989}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.030284952457448, 44.90417676834592], [11.026716540615038, 44.9099763626549], [11.012442893245403, 44.9099763626549], [11.001737657718174, 44.90881644379311], [10.985085069120265, 44.90185693062232], [10.975569304207173, 44.89257757972795], [10.962485127451671, 44.885618066557164], [10.961295656837535, 44.87517879680099], [10.958916715609263, 44.871699040215596], [10.966053539294082, 44.86357960818302], [10.958916715609263, 44.86125977045943], [10.958916715609263, 44.85546017615044], [10.966053539294082, 44.85662009501223], [10.970811421750629, 44.85546017615044], [10.97675877482131, 44.857780013874034], [10.992221892805084, 44.868219283630204], [11.001737657718174, 44.87865855338638], [11.007685010788856, 44.87865855338638], [11.014821834473675, 44.88097839110998], [11.016011305087812, 44.885618066557164], [11.01363236385954, 44.88677798541896], [11.016011305087812, 44.89141766086615], [11.024337599386765, 44.89605733631333], [11.030284952457448, 44.897217255175136], [11.037421776142267, 44.90185693062232], [11.035042834913995, 44.90417676834592], [11.030284952457448, 44.90417676834592]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6, "NOME_COM": "San Possidonio", "PRO_COM": 36038, "SHAPE_Area": 17943972.1178, "SHAPE_Leng": 20392.9262185}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.086190071321859, 44.806743583954955], [11.070726953338085, 44.80906342167855], [11.048127011669493, 44.81950269143473], [11.037421776142267, 44.82298244802011], [11.03266389368572, 44.81950269143473], [11.027906011229174, 44.82298244802011], [11.021958658158493, 44.81370309712574], [11.016011305087812, 44.81022334054035], [11.012442893245403, 44.81370309712574], [11.004116598946446, 44.816022934849336], [11.007685010788856, 44.81022334054035], [11.000548187104037, 44.79978407078417], [11.00292712833231, 44.796304314198785], [11.001737657718174, 44.790504719889796], [10.994600834033356, 44.787024963304404], [10.994600834033356, 44.77194601810104], [10.992221892805084, 44.770786099239245], [10.995790304647493, 44.76382658606846], [10.98984295157681, 44.75570715403588], [10.98270612789199, 44.75222739745049], [10.98270612789199, 44.751067478588695], [10.985085069120265, 44.7487476408651], [10.99341136341922, 44.75222739745049], [11.001737657718174, 44.74990755972689], [11.005306069560582, 44.75686707289768], [11.01957971693022, 44.76730634265385], [11.033853364299857, 44.75686707289768], [11.046937541055357, 44.76614642379206], [11.048127011669493, 44.76962618037745], [11.061211188424995, 44.78122536899542], [11.074295365180495, 44.787024963304404], [11.086190071321859, 44.806743583954955]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6, "NOME_COM": "San Prospero", "PRO_COM": 36039, "SHAPE_Area": 34484217.75, "SHAPE_Leng": 29638.7663362}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.293157958181594, 44.80326382736956], [11.263421192828183, 44.804423746231365], [11.236063368703046, 44.804423746231365], [11.22416866256168, 44.80210390850777], [11.217031838876864, 44.804423746231365], [11.207516073963772, 44.804423746231365], [11.18134772045277, 44.79398447647519], [11.177779308610361, 44.796304314198785], [11.175400367382089, 44.7916646387516], [11.151610955099361, 44.78586504444261], [11.14209519018627, 44.787024963304404], [11.131389954659042, 44.784705125580814], [11.130200484044906, 44.78238528785722], [11.123063660360089, 44.74990755972689], [11.117116307289406, 44.71047031842579], [11.105221601148042, 44.69075169777524], [11.113547895446995, 44.68843186005165], [11.12187418974595, 44.69191161663704], [11.130200484044906, 44.69307153549884], [11.14209519018627, 44.689591778913446], [11.143284660800406, 44.69887112980782], [11.148042543256953, 44.70119096753142], [11.183726661681044, 44.68843186005165], [11.190863485365863, 44.69307153549884], [11.196810838436544, 44.697711210946025], [11.209895015192044, 44.71974966932017], [11.206326603349636, 44.73830837110893], [11.217031838876864, 44.7487476408651], [11.240821251159591, 44.74178812769432], [11.245579133616136, 44.75802699175948], [11.293157958181594, 44.80326382736956]]], "type": "Polygon"}, "properties": {"COD_PRO": 37, "COD_REG": 8, "DANNO": 6.5, "NOME_COM": "Crevalcore", "PRO_COM": 37024, "SHAPE_Area": 102775265.577, "SHAPE_Leng": 50114.4470939}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.388315607312506, 44.778905531271825], [11.382368254241824, 44.78006545013362], [11.374041959942868, 44.78006545013362], [11.359768312573232, 44.77426585582464], [11.340736782747049, 44.75454723517409], [11.320515782306732, 44.74526788427971], [11.30743160555123, 44.734828614523536], [11.301484252480549, 44.72670918249095], [11.289589546339183, 44.713950075011184], [11.28126325204023, 44.711630237287594], [11.277694840197821, 44.709310399563996], [11.312189488007775, 44.69887112980782], [11.313378958621911, 44.70003104866962], [11.319326311692594, 44.7081504807022], [11.325273664763277, 44.711630237287594], [11.331221017833958, 44.72206950704377], [11.33359995906223, 44.734828614523536], [11.332410488448094, 44.73946828997072], [11.33716837090464, 44.74526788427971], [11.345494665203596, 44.753387316312285], [11.35025254766014, 44.751067478588695], [11.351442018274277, 44.75222739745049], [11.377610371785277, 44.77426585582464], [11.388315607312506, 44.778905531271825]]], "type": "Polygon"}, "properties": {"COD_PRO": 37, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Pieve di Cento", "PRO_COM": 37048, "SHAPE_Area": 15965224.9157, "SHAPE_Leng": 26976.2573148}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.42637866696487, 44.950573522817805], [11.42637866696487, 44.9517334416796], [11.408536607752826, 44.950573522817805], [11.399020842839732, 44.95521319826499], [11.377610371785277, 44.95753303598859], [11.36333672441564, 44.95521319826499], [11.359768312573232, 44.950573522817805], [11.357389371344958, 44.950573522817805], [11.33716837090464, 44.95637311712679], [11.326463135377413, 44.96217271143578], [11.312189488007775, 44.958692954850385], [11.306242134937094, 44.96217271143578], [11.301484252480549, 44.96217271143578], [11.296726370024002, 44.95753303598859], [11.284831663882638, 44.95637311712679], [11.271747487127138, 44.93781441533804], [11.266989604670592, 44.94361400964702], [11.246768604230272, 44.9517334416796], [11.259852780985774, 44.933174739890845], [11.256284369143366, 44.92621522672006], [11.243200192387864, 44.916935875825686], [11.23487389808891, 44.90649660606951], [11.245579133616136, 44.89837717403693], [11.250337016072683, 44.90069701176053], [11.269368545898864, 44.89605733631333], [11.283642193268502, 44.89141766086615], [11.293157958181594, 44.885618066557164], [11.306242134937094, 44.88329822883357], [11.326463135377413, 44.87517879680099], [11.340736782747049, 44.87285895907739], [11.347873606431868, 44.869379202492006], [11.356199900730822, 44.86125977045943], [11.368094606872187, 44.84270106867067], [11.366905136258051, 44.83690147436168], [11.372852489328732, 44.83690147436168], [11.377610371785277, 44.83342171777629], [11.38712613669837, 44.8311018800527], [11.401399784068005, 44.83342171777629], [11.41686290205178, 44.841541149808876], [11.437083902492098, 44.83690147436168], [11.444220726176916, 44.83922131208528], [11.441841784948643, 44.85082050070325], [11.446599667405188, 44.860099851597624], [11.456115432318281, 44.865899445906614], [11.468010138459643, 44.86705936476841], [11.488231138899963, 44.86125977045943], [11.490610080128235, 44.86241968932122], [11.48585219767169, 44.87865855338638], [11.489420609514099, 44.89373749858974], [11.490610080128235, 44.897217255175136], [11.488231138899963, 44.897217255175136], [11.491799550742373, 44.913456119240294], [11.487041668285826, 44.91577595696389], [11.470389079687918, 44.916935875825686], [11.464441726617235, 44.93549457761444], [11.432326020035553, 44.92969498330545], [11.42637866696487, 44.92969498330545], [11.423999725736596, 44.93781441533804], [11.42637866696487, 44.950573522817805]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Bondeno", "PRO_COM": 38003, "SHAPE_Area": 175101877.308, "SHAPE_Leng": 66393.1494475}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.372852489328732, 44.83690147436168], [11.36333672441564, 44.838061393223484], [11.352631488888413, 44.83574155549989], [11.351442018274277, 44.832261798914494], [11.347873606431868, 44.8299419611909], [11.322894723535004, 44.832261798914494], [11.312189488007775, 44.82762212346731], [11.301484252480549, 44.81022334054035], [11.245579133616136, 44.75802699175948], [11.272936957741274, 44.74990755972689], [11.252715957300955, 44.71626991273478], [11.275315898969547, 44.705830642978604], [11.278884310811957, 44.71047031842579], [11.289589546339183, 44.713950075011184], [11.301484252480549, 44.72670918249095], [11.308621076165366, 44.73598853338533], [11.320515782306732, 44.74526788427971], [11.33359995906223, 44.751067478588695], [11.34430519458946, 44.759186910621274], [11.331221017833958, 44.762666667206666], [11.339547312132913, 44.778905531271825], [11.33716837090464, 44.784705125580814], [11.340736782747049, 44.787024963304404], [11.349063077046004, 44.788184882166206], [11.351442018274277, 44.79282455761339], [11.35382095950255, 44.816022934849336], [11.362147253801504, 44.81486301598754], [11.38712613669837, 44.8311018800527], [11.377610371785277, 44.83342171777629], [11.372852489328732, 44.83690147436168]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Cento", "PRO_COM": 38004, "SHAPE_Area": 65121310.19, "SHAPE_Leng": 44507.4592363}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.437083902492098, 44.83690147436168], [11.41686290205178, 44.841541149808876], [11.409726078366962, 44.838061393223484], [11.408536607752826, 44.83342171777629], [11.419241843280052, 44.824142366881915], [11.438273373106234, 44.816022934849336], [11.425189196350734, 44.80906342167855], [11.435894431877962, 44.798624151922375], [11.470389079687918, 44.80790350281676], [11.4763364327586, 44.80790350281676], [11.488231138899963, 44.81718285371113], [11.478715373986873, 44.82066261029652], [11.479904844601009, 44.824142366881915], [11.471578550302054, 44.832261798914494], [11.469199609073781, 44.8311018800527], [11.458494373546554, 44.83342171777629], [11.447789138019326, 44.83922131208528], [11.437083902492098, 44.83690147436168]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6.5, "NOME_COM": "Mirabello", "PRO_COM": 38016, "SHAPE_Area": 16268082.4207, "SHAPE_Leng": 18949.4642583}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.503694256883737, 44.81486301598754], [11.501315315655464, 44.81486301598754], [11.497746903813056, 44.816022934849336], [11.495367962584782, 44.82066261029652], [11.491799550742373, 44.81950269143473], [11.4763364327586, 44.80790350281676], [11.470389079687918, 44.80790350281676], [11.425189196350734, 44.79514439533698], [11.41686290205178, 44.7916646387516], [11.414483960823507, 44.787024963304404], [11.402589254682141, 44.78238528785722], [11.400210313453869, 44.77658569354823], [11.399020842839732, 44.768466261515655], [11.43351549064969, 44.76034682948307], [11.452547020475873, 44.76034682948307], [11.473957491530326, 44.74990755972689], [11.508452139340282, 44.73830837110893], [11.5155889630251, 44.733668695661734], [11.526294198552328, 44.731348857938144], [11.552462552063329, 44.72090958818197], [11.583388788030875, 44.7069905618404], [11.592904552943967, 44.711630237287594], [11.546515198992648, 44.75686707289768], [11.559599375748148, 44.787024963304404], [11.503694256883737, 44.81486301598754]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Poggio Renatico", "PRO_COM": 38018, "SHAPE_Area": 80243560.3414, "SHAPE_Leng": 43788.5822917}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.435894431877962, 44.798624151922375], [11.425189196350734, 44.80906342167855], [11.438273373106234, 44.816022934849336], [11.419241843280052, 44.824142366881915], [11.408536607752826, 44.83342171777629], [11.409726078366962, 44.838061393223484], [11.401399784068005, 44.83342171777629], [11.38712613669837, 44.8311018800527], [11.362147253801504, 44.81486301598754], [11.35382095950255, 44.816022934849336], [11.351442018274277, 44.79282455761339], [11.349063077046004, 44.788184882166206], [11.340736782747049, 44.787024963304404], [11.33716837090464, 44.784705125580814], [11.339547312132913, 44.778905531271825], [11.331221017833958, 44.762666667206666], [11.34430519458946, 44.759186910621274], [11.358578841959094, 44.77310593696284], [11.375231430557005, 44.78006545013362], [11.38355772485596, 44.78006545013362], [11.388315607312506, 44.778905531271825], [11.399020842839732, 44.768466261515655], [11.400210313453869, 44.77658569354823], [11.402589254682141, 44.78238528785722], [11.414483960823507, 44.787024963304404], [11.41686290205178, 44.7916646387516], [11.425189196350734, 44.79514439533698], [11.435894431877962, 44.798624151922375]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Sant\u0027Agostino", "PRO_COM": 38021, "SHAPE_Area": 34629193.9699, "SHAPE_Leng": 30790.65142}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.533431022237146, 44.80094398964597], [11.538188904693692, 44.80790350281676], [11.53580996346542, 44.81022334054035], [11.545325728378511, 44.82066261029652], [11.540567845921966, 44.82182252915832], [11.534620492851282, 44.82066261029652], [11.531052081008873, 44.816022934849336], [11.527483669166465, 44.81718285371113], [11.523915257324056, 44.81950269143473], [11.520346845481647, 44.826462204605505], [11.508452139340282, 44.83342171777629], [11.50607319811201, 44.840381230947074], [11.525104727938192, 44.84502090639426], [11.531052081008873, 44.85546017615044], [11.531052081008873, 44.85662009501223], [11.52272578670992, 44.85430025728864], [11.527483669166465, 44.87517879680099], [11.529862610394737, 44.877498634524585], [11.538188904693692, 44.879818472248175], [11.538188904693692, 44.88329822883357], [11.517967904253373, 44.89257757972795], [11.490610080128235, 44.9099763626549], [11.488231138899963, 44.897217255175136], [11.490610080128235, 44.897217255175136], [11.489420609514099, 44.89373749858974], [11.48585219767169, 44.87865855338638], [11.490610080128235, 44.86241968932122], [11.488231138899963, 44.86125977045943], [11.468010138459643, 44.86705936476841], [11.456115432318281, 44.865899445906614], [11.446599667405188, 44.860099851597624], [11.441841784948643, 44.85082050070325], [11.444220726176916, 44.83922131208528], [11.452547020475873, 44.838061393223484], [11.458494373546554, 44.83342171777629], [11.469199609073781, 44.8311018800527], [11.471578550302054, 44.832261798914494], [11.479904844601009, 44.824142366881915], [11.479904844601009, 44.82066261029652], [11.488231138899963, 44.81718285371113], [11.490610080128235, 44.81950269143473], [11.495367962584782, 44.82066261029652], [11.498936374427192, 44.81486301598754], [11.503694256883737, 44.81486301598754], [11.533431022237146, 44.80094398964597]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": null, "NOME_COM": "Vigarano Mainarda", "PRO_COM": 38022, "SHAPE_Area": 41789200.959, "SHAPE_Leng": 40891.9826294}, "type": "Feature"}], "type": "FeatureCollection"});
        
    
    var color_map_9c56513e431e4312babbf479e00869eb = {};

    
    color_map_9c56513e431e4312babbf479e00869eb.color = d3.scale.threshold()
              .domain([5.1, 5.105811623246493, 5.111623246492986, 5.117434869739479, 5.123246492985972, 5.129058116232464, 5.134869739478957, 5.14068136272545, 5.1464929859719435, 5.152304609218437, 5.15811623246493, 5.163927855711423, 5.169739478957916, 5.175551102204408, 5.181362725450901, 5.187174348697394, 5.192985971943887, 5.19879759519038, 5.2046092184368735, 5.210420841683367, 5.21623246492986, 5.222044088176353, 5.227855711422845, 5.233667334669338, 5.239478957915831, 5.245290581162324, 5.251102204408817, 5.2569138276553105, 5.2627254509018035, 5.268537074148297, 5.274348697394789, 5.280160320641282, 5.285971943887775, 5.291783567134268, 5.297595190380761, 5.303406813627254, 5.309218436873747, 5.3150300601202405, 5.320841683366734, 5.326653306613226, 5.332464929859719, 5.338276553106212, 5.344088176352705, 5.349899799599198, 5.355711422845691, 5.361523046092184, 5.367334669338677, 5.37314629258517, 5.378957915831663, 5.384769539078156, 5.390581162324649, 5.396392785571142, 5.402204408817635, 5.408016032064128, 5.413827655310621, 5.4196392785571135, 5.425450901803607, 5.4312625250501, 5.437074148296593, 5.442885771543086, 5.448697394789579, 5.454509018036072, 5.460320641282565, 5.466132264529058, 5.47194388777555, 5.4777555110220435, 5.483567134268537, 5.48937875751503, 5.495190380761523, 5.501002004008016, 5.506813627254509, 5.512625250501002, 5.518436873747494, 5.524248496993987, 5.53006012024048, 5.5358717434869735, 5.541683366733467, 5.54749498997996, 5.553306613226453, 5.559118236472946, 5.564929859719439, 5.570741482965931, 5.576553106212424, 5.582364729458917, 5.5881763527054105, 5.593987975951904, 5.599799599198397, 5.60561122244489, 5.611422845691383, 5.617234468937875, 5.623046092184368, 5.628857715430861, 5.634669338677354, 5.640480961923847, 5.6462925851703405, 5.652104208416834, 5.657915831663327, 5.66372745490982, 5.669539078156312, 5.675350701402805, 5.681162324649298, 5.686973947895791, 5.692785571142284, 5.698597194388777, 5.7044088176352705, 5.710220440881764, 5.716032064128257, 5.721843687374749, 5.727655310621242, 5.733466933867735, 5.739278557114228, 5.745090180360721, 5.750901803607214, 5.7567134268537075, 5.7625250501002, 5.768336673346694, 5.774148296593186, 5.779959919839679, 5.785771543086172, 5.791583166332665, 5.797394789579158, 5.803206412825651, 5.809018036072144, 5.814829659318637, 5.82064128256513, 5.826452905811623, 5.832264529058116, 5.838076152304609, 5.843887775551102, 5.849699398797595, 5.855511022044088, 5.861322645290581, 5.8671342685370735, 5.872945891783567, 5.87875751503006, 5.884569138276553, 5.890380761523046, 5.896192384769539, 5.902004008016032, 5.907815631262524, 5.913627254509018, 5.9194388777555105, 5.925250501002004, 5.931062124248497, 5.93687374749499, 5.942685370741483, 5.948496993987976, 5.954308617234469, 5.960120240480961, 5.965931863727455, 5.971743486973947, 5.9775551102204405, 5.983366733466934, 5.989178356713427, 5.99498997995992, 6.000801603206413, 6.006613226452906, 6.012424849699398, 6.018236472945891, 6.024048096192384, 6.029859719438877, 6.0356713426853705, 6.041482965931864, 6.047294589178357, 6.05310621242485, 6.058917835671343, 6.064729458917835, 6.070541082164328, 6.076352705410821, 6.082164328657314, 6.0879759519038075, 6.093787575150301, 6.099599198396794, 6.105410821643286, 6.11122244488978, 6.117034068136272, 6.122845691382765, 6.128657314629258, 6.134468937875751, 6.140280561122244, 6.1460921843687375, 6.151903807615231, 6.157715430861723, 6.163527054108216, 6.169338677354709, 6.175150300601202, 6.180961923847695, 6.186773547094188, 6.192585170340681, 6.1983967935871735, 6.2042084168336675, 6.21002004008016, 6.215831663326653, 6.221643286573146, 6.227454909819639, 6.233266533066132, 6.239078156312625, 6.244889779559118, 6.2507014028056105, 6.256513026052104, 6.262324649298597, 6.26813627254509, 6.273947895791583, 6.279759519038076, 6.285571142284569, 6.291382765531062, 6.297194388777555, 6.303006012024047, 6.3088176352705405, 6.314629258517034, 6.320440881763527, 6.32625250501002, 6.332064128256513, 6.337875751503006, 6.343687374749498, 6.349498997995992, 6.355310621242484, 6.3611222444889775, 6.3669338677354705, 6.372745490981964, 6.378557114228457, 6.38436873747495, 6.390180360721443, 6.395991983967935, 6.401803607214429, 6.407615230460921, 6.413426853707414, 6.4192384769539075, 6.425050100200401, 6.430861723446894, 6.436673346693387, 6.44248496993988, 6.448296593186372, 6.454108216432865, 6.459919839679358, 6.465731462925851, 6.471543086172344, 6.4773547094188375, 6.483166332665331, 6.488977955911824, 6.494789579158317, 6.500601202404809, 6.506412825651302, 6.512224448897795, 6.518036072144288, 6.523847695390781, 6.5296593186372744, 6.5354709418837675, 6.54128256513026, 6.547094188376754, 6.552905811623246, 6.558717434869739, 6.564529058116232, 6.570340681362725, 6.576152304609218, 6.581963927855711, 6.5877755511022045, 6.593587174348697, 6.599398797595191, 6.605210420841683, 6.611022044088176, 6.616833667334669, 6.622645290581162, 6.628456913827655, 6.634268537074148, 6.640080160320641, 6.645891783567134, 6.651703406813627, 6.65751503006012, 6.663326653306613, 6.669138276553106, 6.674949899799599, 6.680761523046092, 6.686573146292584, 6.692384769539078, 6.6981963927855706, 6.704008016032064, 6.709819639278557, 6.71563126252505, 6.721442885771543, 6.727254509018036, 6.733066132264529, 6.738877755511021, 6.744689378757515, 6.7505010020040075, 6.756312625250501, 6.762124248496994, 6.767935871743487, 6.77374749498998, 6.779559118236473, 6.785370741482966, 6.791182364729458, 6.796993987975952, 6.802805611222444, 6.8086172344689375, 6.814428857715431, 6.820240480961924, 6.826052104208417, 6.83186372745491, 6.837675350701403, 6.843486973947895, 6.849298597194388, 6.855110220440881, 6.8609218436873745, 6.8667334669338675, 6.872545090180361, 6.878356713426854, 6.884168336673346, 6.88997995991984, 6.895791583166332, 6.901603206412825, 6.907414829659318, 6.913226452905811, 6.9190380761523045, 6.924849699398798, 6.930661322645291, 6.936472945891783, 6.942284569138277, 6.948096192384769, 6.953907815631262, 6.959719438877755, 6.965531062124248, 6.971342685370741, 6.9771543086172345, 6.982965931863728, 6.98877755511022, 6.994589178356714, 7.000400801603206, 7.006212424849699, 7.012024048096192, 7.017835671342685, 7.023647294589178, 7.0294589178356714, 7.0352705410821645, 7.041082164328657, 7.046893787575151, 7.052705410821643, 7.058517034068136, 7.064328657314629, 7.070140280561122, 7.075951903807615, 7.0817635270541075, 7.0875751503006015, 7.093386773547094, 7.099198396793587, 7.10501002004008, 7.110821643286573, 7.116633266533066, 7.122444889779559, 7.128256513026052, 7.134068136272544, 7.139879759519038, 7.145691382765531, 7.151503006012025, 7.157314629258517, 7.163126252505011, 7.168937875751503, 7.174749498997996, 7.180561122244489, 7.186372745490981, 7.192184368737475, 7.197995991983968, 7.2038076152304615, 7.209619238476954, 7.215430861723447, 7.22124248496994, 7.227054108216432, 7.232865731462926, 7.238677354709418, 7.244488977955912, 7.2503006012024045, 7.256112224448898, 7.261923847695391, 7.267735470941883, 7.273547094188377, 7.27935871743487, 7.285170340681363, 7.290981963927855, 7.296793587174348, 7.302605210420841, 7.308416833667335, 7.314228456913828, 7.320040080160321, 7.325851703406814, 7.331663326653306, 7.3374749498998, 7.343286573146292, 7.349098196392786, 7.354909819639278, 7.3607214428857715, 7.3665330661322646, 7.372344689378757, 7.378156312625251, 7.383967935871743, 7.389779559118237, 7.395591182364729, 7.401402805611222, 7.407214428857715, 7.4130260521042075, 7.4188376753507015, 7.424649298597195, 7.430460921843688, 7.43627254509018, 7.442084168336673, 7.447895791583166, 7.45370741482966, 7.459519038076152, 7.465330661322645, 7.471142284569138, 7.476953907815631, 7.482765531062125, 7.488577154308617, 7.494388777555111, 7.500200400801603, 7.506012024048096, 7.511823647294589, 7.517635270541081, 7.523446893787575, 7.529258517034068, 7.5350701402805615, 7.540881763527054, 7.546693386773547, 7.55250501002004, 7.558316633266532, 7.564128256513026, 7.569939879759519, 7.575751503006012, 7.5815631262525045, 7.587374749498998, 7.593186372745491, 7.598997995991985, 7.604809619238477, 7.61062124248497, 7.616432865731463, 7.622244488977955, 7.628056112224449, 7.633867735470941, 7.639679358717435, 7.645490981963928, 7.651302605210421, 7.657114228456914, 7.662925851703406, 7.6687374749499, 7.674549098196392, 7.680360721442886, 7.686172344689378, 7.6919839679358715, 7.697795591182365, 7.7036072144288585, 7.709418837675351, 7.715230460921844, 7.721042084168337, 7.726853707414829, 7.732665330661323, 7.738476953907815, 7.744288577154309, 7.7501002004008015, 7.755911823647295, 7.761723446893788, 7.76753507014028, 7.773346693386774, 7.779158316633266, 7.78496993987976, 7.790781563126252, 7.796593186372745, 7.802404809619238, 7.808216432865731, 7.814028056112225, 7.819839679358718, 7.825651302605211, 7.831462925851703, 7.837274549098196, 7.843086172344689, 7.848897795591183, 7.854709418837675, 7.8605210420841685, 7.8663326653306616, 7.872144288577154, 7.877955911823648, 7.88376753507014, 7.889579158316634, 7.895390781563126, 7.901202404809619, 7.907014028056112, 7.9128256513026045, 7.9186372745490985, 7.924448897795591, 7.930260521042085, 7.936072144288577, 7.94188376753507, 7.947695390781563, 7.953507014028056, 7.959318637274549, 7.965130260521042, 7.970941883767535, 7.976753507014028, 7.982565130260521, 7.988376753507014, 7.994188376753508, 8.0])
              .range(['#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026']);
    

    color_map_9c56513e431e4312babbf479e00869eb.x = d3.scale.linear()
              .domain([5.1, 8.0])
              .range([0, 400]);

    color_map_9c56513e431e4312babbf479e00869eb.legend = L.control({position: 'topright'});
    color_map_9c56513e431e4312babbf479e00869eb.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_9c56513e431e4312babbf479e00869eb.legend.addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);

    color_map_9c56513e431e4312babbf479e00869eb.xAxis = d3.svg.axis()
        .scale(color_map_9c56513e431e4312babbf479e00869eb.x)
        .orient("top")
        .tickSize(1)
        .tickValues([5.1, 5.583333333333333, 6.066666666666666, 6.55, 7.033333333333333, 7.516666666666667, 8.0]);

    color_map_9c56513e431e4312babbf479e00869eb.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_9c56513e431e4312babbf479e00869eb.g = color_map_9c56513e431e4312babbf479e00869eb.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_9c56513e431e4312babbf479e00869eb.g.selectAll("rect")
        .data(color_map_9c56513e431e4312babbf479e00869eb.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_9c56513e431e4312babbf479e00869eb.x(color_map_9c56513e431e4312babbf479e00869eb.color.domain()[i - 1]) : color_map_9c56513e431e4312babbf479e00869eb.x.range()[0],
            x1: i < color_map_9c56513e431e4312babbf479e00869eb.color.domain().length ? color_map_9c56513e431e4312babbf479e00869eb.x(color_map_9c56513e431e4312babbf479e00869eb.color.domain()[i]) : color_map_9c56513e431e4312babbf479e00869eb.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_9c56513e431e4312babbf479e00869eb.g.call(color_map_9c56513e431e4312babbf479e00869eb.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('Damage entity');
    
            var marker_cluster_8edf1e1ed79e4e3ab4a8c788b9a7fa16 = L.markerClusterGroup(
                {}
            );
            map_3a208fe2faed43e2b31a34c0d6b1dc93.addLayer(marker_cluster_8edf1e1ed79e4e3ab4a8c788b9a7fa16);
        
    
            var feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9 = L.featureGroup.subGroup(
                marker_cluster_8edf1e1ed79e4e3ab4a8c788b9a7fa16
            );
            feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9.addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
    
            var marker_86fa7a07512c40e398fcf9e08c1fa8d4 = L.marker(
                [44.934598, 11.24119],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f0679f700bd1460cb61344cf950d30c2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_86fa7a07512c40e398fcf9e08c1fa8d4.setIcon(icon_f0679f700bd1460cb61344cf950d30c2);
        
    
        var popup_790f8605edf34c3b9cc664dc004b8791 = L.popup({"maxWidth": 2650});

        
            var i_frame_260ba0b757e3431892dae4ae124e9fa8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyBTb2NpbyBBc3Npc3RlbnppYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjk4ODcxLjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE2NTMwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_790f8605edf34c3b9cc664dc004b8791.setContent(i_frame_260ba0b757e3431892dae4ae124e9fa8);
        

        marker_86fa7a07512c40e398fcf9e08c1fa8d4.bindPopup(popup_790f8605edf34c3b9cc664dc004b8791)
        ;

        
    
    
            var marker_bb54993c9bba4c98b8312a887a079ca0 = L.marker(
                [44.877249, 11.132249],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_714f642af2af4a31a9d60f2f1c2b4aea = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bb54993c9bba4c98b8312a887a079ca0.setIcon(icon_714f642af2af4a31a9d60f2f1c2b4aea);
        
    
        var popup_b2f3178fcc9443abbb0054b51fac517d = L.popup({"maxWidth": 2650});

        
            var i_frame_bb94e5a073d945268f7250dd69e8ca17 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTk0OTMuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b2f3178fcc9443abbb0054b51fac517d.setContent(i_frame_bb94e5a073d945268f7250dd69e8ca17);
        

        marker_bb54993c9bba4c98b8312a887a079ca0.bindPopup(popup_b2f3178fcc9443abbb0054b51fac517d)
        ;

        
    
    
            var marker_d63e7c8d6e524bc1b316f7835d6a6c1c = L.marker(
                [44.896599, 11.45853],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5ac40013331d424a999f95419769a915 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d63e7c8d6e524bc1b316f7835d6a6c1c.setIcon(icon_5ac40013331d424a999f95419769a915);
        
    
        var popup_d6eb22f5b0eb4d9f9ef2e39b8afa8666 = L.popup({"maxWidth": 2650});

        
            var i_frame_d66b8bd463db4c609471cc6ac7a6af8f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBUZWF0cm8gLSBBdWRpdG9yaXVtIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d6eb22f5b0eb4d9f9ef2e39b8afa8666.setContent(i_frame_d66b8bd463db4c609471cc6ac7a6af8f);
        

        marker_d63e7c8d6e524bc1b316f7835d6a6c1c.bindPopup(popup_d6eb22f5b0eb4d9f9ef2e39b8afa8666)
        ;

        
    
    
            var marker_12ab0f5e225940838c450534f34a9ebe = L.marker(
                [44.841807, 10.950505],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e3264d789334415f981bf753ed34b771 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_12ab0f5e225940838c450534f34a9ebe.setIcon(icon_e3264d789334415f981bf753ed34b771);
        
    
        var popup_28c9ed5e89e14389bc94f3d73e2936a3 = L.popup({"maxWidth": 2650});

        
            var i_frame_d735da2cf7ad42f3a8089c0cfb7e450b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBpbnRlcnZlbnRvIGRpIHJpcXVhbGlmaWNhemlvbmUgZWQgYW1wbGlhbWVudG8gZGVsIHBvbG8gZGVsbCdpbmZhbnppYSBkaSBSb3ZlcmV0byBzdWxsYSBTZWNjaGlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE2NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_28c9ed5e89e14389bc94f3d73e2936a3.setContent(i_frame_d735da2cf7ad42f3a8089c0cfb7e450b);
        

        marker_12ab0f5e225940838c450534f34a9ebe.bindPopup(popup_28c9ed5e89e14389bc94f3d73e2936a3)
        ;

        
    
    
            var marker_ded99cd39db348a7b079fae6cf94f7e9 = L.marker(
                [44.890036, 10.898508],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5c3f5631030b452d8aa66bbf1f21befd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ded99cd39db348a7b079fae6cf94f7e9.setIcon(icon_5c3f5631030b452d8aa66bbf1f21befd);
        
    
        var popup_fe5516839c9042c98fa145eb62437c5f = L.popup({"maxWidth": 2650});

        
            var i_frame_405b513f8c6246029fdab1e053b1b29d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbnRlcnZlbnRvIGRpIGVmZmljZW50YW1lbnRvIGVuZXJnZXRpY28gY29uIGxhIHJlYWxpenphemlvbmUgZGkgdW4gbnVvdm8gaW1waWFudG8gZm90b3ZvbHRhaWNvIHN1bGxhIGNvcGVydHVyYSBkZWxsYSBwYWxlc3RyYSBkZWxsYSBTY3VvbGEgU2Vjb25kYXJpYSBkaSBQcmltbyBHcmFkbyBkaSBOb3ZpIGRpIE1vZGVuYSAnTW9uaWEgRnJhbmNpb3NpJyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI4NjI4My43IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNDMxNC4xOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fe5516839c9042c98fa145eb62437c5f.setContent(i_frame_405b513f8c6246029fdab1e053b1b29d);
        

        marker_ded99cd39db348a7b079fae6cf94f7e9.bindPopup(popup_fe5516839c9042c98fa145eb62437c5f)
        ;

        
    
    
            var marker_38cd0cac4ba4467c9d84cdc98dd1ed27 = L.marker(
                [44.724973999999996, 11.290364],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_809ae35779d44a559d0f604ae033394a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_38cd0cac4ba4467c9d84cdc98dd1ed27.setIcon(icon_809ae35779d44a559d0f604ae033394a);
        
    
        var popup_33d8cd628173471e862d6ae647eb5fab = L.popup({"maxWidth": 2650});

        
            var i_frame_6af239d32375426588af473eb975c18d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyBhZCB1c28gZGVwb3NpdG8tbGF2YW5kZXJpYS1zZXJ2aXppIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1ODk3OC4yNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzE3Ny4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_33d8cd628173471e862d6ae647eb5fab.setContent(i_frame_6af239d32375426588af473eb975c18d);
        

        marker_38cd0cac4ba4467c9d84cdc98dd1ed27.bindPopup(popup_33d8cd628173471e862d6ae647eb5fab)
        ;

        
    
    
            var marker_80fdc6968dd84e00ba487039625daf6e = L.marker(
                [44.892981, 11.423525999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_33e0846bdedf4419b2fa5a3bc7a317a8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_80fdc6968dd84e00ba487039625daf6e.setIcon(icon_33e0846bdedf4419b2fa5a3bc7a317a8);
        
    
        var popup_7736a626230a4b3cb6184d7510ddf0af = L.popup({"maxWidth": 2650});

        
            var i_frame_b18e0f4e92d84c61a8f29d6bb96f7d91 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNlcm1hIFZWLkZGLiA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7736a626230a4b3cb6184d7510ddf0af.setContent(i_frame_b18e0f4e92d84c61a8f29d6bb96f7d91);
        

        marker_80fdc6968dd84e00ba487039625daf6e.bindPopup(popup_7736a626230a4b3cb6184d7510ddf0af)
        ;

        
    
    
            var marker_783bfa5aa9284d848c855163f85907e9 = L.marker(
                [44.82114, 11.005901],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2b80842753f944bf9fdf440f5d3031b2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_783bfa5aa9284d848c855163f85907e9.setIcon(icon_2b80842753f944bf9fdf440f5d3031b2);
        
    
        var popup_e54c7b23756745109bedee6ef14b7d70 = L.popup({"maxWidth": 2650});

        
            var i_frame_3a06334497f24176890b042e2b3fe1ed = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2FldGFubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQwMTMuNzcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e54c7b23756745109bedee6ef14b7d70.setContent(i_frame_3a06334497f24176890b042e2b3fe1ed);
        

        marker_783bfa5aa9284d848c855163f85907e9.bindPopup(popup_e54c7b23756745109bedee6ef14b7d70)
        ;

        
    
    
            var marker_f2899a99a891472899a3aa063f1cdf7f = L.marker(
                [44.855565000000006, 11.214264],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c2f8217193cd447698081bc14b307492 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_f2899a99a891472899a3aa063f1cdf7f.setIcon(icon_c2f8217193cd447698081bc14b307492);
        
    
        var popup_14e025044fa84633ab3677cc7c30fd53 = L.popup({"maxWidth": 2650});

        
            var i_frame_9c66ef1168054005a71c8fc91c51e4bc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdXJvIGRlbCBDaW1pdGVybyBkaSBNYXNzYSBGaW5hbGVzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0NTU4MC40MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_14e025044fa84633ab3677cc7c30fd53.setContent(i_frame_9c66ef1168054005a71c8fc91c51e4bc);
        

        marker_f2899a99a891472899a3aa063f1cdf7f.bindPopup(popup_14e025044fa84633ab3677cc7c30fd53)
        ;

        
    
    
            var marker_beef43b91d234dd5aaa7824ca19956e9 = L.marker(
                [44.832153999999996, 11.294462],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_97c25aef7c53489bb847aa12e4d618f2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_beef43b91d234dd5aaa7824ca19956e9.setIcon(icon_97c25aef7c53489bb847aa12e4d618f2);
        
    
        var popup_135b36c36f644807b7d8d8a0d4498479 = L.popup({"maxWidth": 2650});

        
            var i_frame_96db0ced4b6e409ba08e5c5e95b17f7d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGb250YW5hIGRpIFBpYXp6YSBCYWNjYXJpbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_135b36c36f644807b7d8d8a0d4498479.setContent(i_frame_96db0ced4b6e409ba08e5c5e95b17f7d);
        

        marker_beef43b91d234dd5aaa7824ca19956e9.bindPopup(popup_135b36c36f644807b7d8d8a0d4498479)
        ;

        
    
    
            var marker_20418f821139499ea62994dcef634365 = L.marker(
                [44.833798, 11.297723],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_93606e527afd41939a80b6e24baf6520 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_20418f821139499ea62994dcef634365.setIcon(icon_93606e527afd41939a80b6e24baf6520);
        
    
        var popup_a4d8a73e3db24d418fa748fc18f0a39f = L.popup({"maxWidth": 2650});

        
            var i_frame_ac14a0bdef104fab8c478c68214e9795 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYXNzb2NvbW9kbyBCIC0gVmlsbGEgRmluZXR0aSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0ODUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a4d8a73e3db24d418fa748fc18f0a39f.setContent(i_frame_ac14a0bdef104fab8c478c68214e9795);
        

        marker_20418f821139499ea62994dcef634365.bindPopup(popup_a4d8a73e3db24d418fa748fc18f0a39f)
        ;

        
    
    
            var marker_711383a5f8534d8b84d6dbea5ab6b98a = L.marker(
                [44.833884000000005, 11.297898],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4b66c2c3b05d477cbd2c215f9dc5bb5e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_711383a5f8534d8b84d6dbea5ab6b98a.setIcon(icon_4b66c2c3b05d477cbd2c215f9dc5bb5e);
        
    
        var popup_1c8e133666734d79959298f2480cd197 = L.popup({"maxWidth": 2650});

        
            var i_frame_6db2725d18d947238f93779b40825bdd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYXNzb2NvbW9kbyBBIC0gVmlsbGEgRmluZXR0aSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0ODUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1c8e133666734d79959298f2480cd197.setContent(i_frame_6db2725d18d947238f93779b40825bdd);
        

        marker_711383a5f8534d8b84d6dbea5ab6b98a.bindPopup(popup_1c8e133666734d79959298f2480cd197)
        ;

        
    
    
            var marker_176ab5aceb6e43138fdf14e70a7a0010 = L.marker(
                [44.827571999999996, 11.329206],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d5f81fb2f28f4271a3f87acb6e03a23d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_176ab5aceb6e43138fdf14e70a7a0010.setIcon(icon_d5f81fb2f28f4271a3f87acb6e03a23d);
        
    
        var popup_5700293146e3411892dcc1fe8fb6e2f7 = L.popup({"maxWidth": 2650});

        
            var i_frame_993867b49d9a4cadbd1d2b507019aff5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFubmEgZSBjYW1wYW5pbGUgY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI3ODE0LjI0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5700293146e3411892dcc1fe8fb6e2f7.setContent(i_frame_993867b49d9a4cadbd1d2b507019aff5);
        

        marker_176ab5aceb6e43138fdf14e70a7a0010.bindPopup(popup_5700293146e3411892dcc1fe8fb6e2f7)
        ;

        
    
    
            var marker_edbcbfd682f041268445a16b0aa54738 = L.marker(
                [44.835913, 11.321213],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_93c3517fcd2d451489d79c61aaa38666 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_edbcbfd682f041268445a16b0aa54738.setIcon(icon_93c3517fcd2d451489d79c61aaa38666);
        
    
        var popup_3eea641314eb4b82be26deaee525ceb7 = L.popup({"maxWidth": 2650});

        
            var i_frame_82362df0167c4134bda3afe3c9bac8b6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZGkgUmVubyBGaW5hbGVzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3eea641314eb4b82be26deaee525ceb7.setContent(i_frame_82362df0167c4134bda3afe3c9bac8b6);
        

        marker_edbcbfd682f041268445a16b0aa54738.bindPopup(popup_3eea641314eb4b82be26deaee525ceb7)
        ;

        
    
    
            var marker_4be8a4c0a5ea41eab6359aa8cd8659e5 = L.marker(
                [44.836921999999994, 11.143741],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0530b0f3e9714f6ca2d800e614030cb7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4be8a4c0a5ea41eab6359aa8cd8659e5.setIcon(icon_0530b0f3e9714f6ca2d800e614030cb7);
        
    
        var popup_63851776adfd47fb9047323f8e4b9add = L.popup({"maxWidth": 2650});

        
            var i_frame_703a179f7e724911bede6d9bfb2f0e4e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgUHJpbWFyaWEgJ011cmF0b3JpJyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjM1NTMuNTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_63851776adfd47fb9047323f8e4b9add.setContent(i_frame_703a179f7e724911bede6d9bfb2f0e4e);
        

        marker_4be8a4c0a5ea41eab6359aa8cd8659e5.bindPopup(popup_63851776adfd47fb9047323f8e4b9add)
        ;

        
    
    
            var marker_be08e8ae7f674c8d8d1311430c76e533 = L.marker(
                [44.829384999999995, 11.287891],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_87cc4ae4ba44455e948dc52ca0572462 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_be08e8ae7f674c8d8d1311430c76e533.setIcon(icon_87cc4ae4ba44455e948dc52ca0572462);
        
    
        var popup_ef00a60149c646389e9105a69a073101 = L.popup({"maxWidth": 2650});

        
            var i_frame_8ad9fc2904e94d9d84a6c807a3091ac5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBDb211bmFsZSBNb251bWVudGFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ef00a60149c646389e9105a69a073101.setContent(i_frame_8ad9fc2904e94d9d84a6c807a3091ac5);
        

        marker_be08e8ae7f674c8d8d1311430c76e533.bindPopup(popup_ef00a60149c646389e9105a69a073101)
        ;

        
    
    
            var marker_12d9231f8ec24e21a1b3206588f305b4 = L.marker(
                [44.849996000000004, 11.074441],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_98285f08f8f64645b70e986be23b9c35 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_12d9231f8ec24e21a1b3206588f305b4.setIcon(icon_98285f08f8f64645b70e986be23b9c35);
        
    
        var popup_81244f6dd9db4c84805c39ca24b3955b = L.popup({"maxWidth": 2650});

        
            var i_frame_db97ee995eb64e3c9ffa230853ccceb7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaXJjb2xvIEFyY29iYWxlbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNDgzMjI0LjA5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_81244f6dd9db4c84805c39ca24b3955b.setContent(i_frame_db97ee995eb64e3c9ffa230853ccceb7);
        

        marker_12d9231f8ec24e21a1b3206588f305b4.bindPopup(popup_81244f6dd9db4c84805c39ca24b3955b)
        ;

        
    
    
            var marker_19c184fb6eb84dea8d25075a8c44960d = L.marker(
                [44.892801, 10.899709],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9efdbf8533954515a6ffc75bcbd36164 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_19c184fb6eb84dea8d25075a8c44960d.setIcon(icon_9efdbf8533954515a6ffc75bcbd36164);
        
    
        var popup_f1406be8ada04cce9bb5e2de11fddb1a = L.popup({"maxWidth": 2650});

        
            var i_frame_ca3b2457a48f42f394f68df6caf59829 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYXJjbyBkZWxsYSBSZXNpc3RlbnphIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzOTk0OS40NiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f1406be8ada04cce9bb5e2de11fddb1a.setContent(i_frame_ca3b2457a48f42f394f68df6caf59829);
        

        marker_19c184fb6eb84dea8d25075a8c44960d.bindPopup(popup_f1406be8ada04cce9bb5e2de11fddb1a)
        ;

        
    
    
            var marker_095e0f2ca2564f61bc84f42ce958a7f7 = L.marker(
                [44.893569, 10.901357],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0d0d7a3cda9a4a4ea1c79f7fe445c512 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_095e0f2ca2564f61bc84f42ce958a7f7.setIcon(icon_0d0d7a3cda9a4a4ea1c79f7fe445c512);
        
    
        var popup_0222e61154d94d2c8668430fdc9ad2f0 = L.popup({"maxWidth": 2650});

        
            var i_frame_e4fdf5ac23444ba2b71906ff62ea333f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjA4NTEzLjY4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0222e61154d94d2c8668430fdc9ad2f0.setContent(i_frame_e4fdf5ac23444ba2b71906ff62ea333f);
        

        marker_095e0f2ca2564f61bc84f42ce958a7f7.bindPopup(popup_0222e61154d94d2c8668430fdc9ad2f0)
        ;

        
    
    
            var marker_d93dd9388fbd4a31b1482874b02fb2ff = L.marker(
                [44.841954, 10.949167999999998],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4b3b4a7e815a422aa5dda5ad6b68c0ba = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d93dd9388fbd4a31b1482874b02fb2ff.setIcon(icon_4b3b4a7e815a422aa5dda5ad6b68c0ba);
        
    
        var popup_3abdf268425d4fe9804507d13bb95d2f = L.popup({"maxWidth": 2650});

        
            var i_frame_b126b35dc49e4c5eb3ccc6ffdf11f95f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdmkgZGkgUm92ZXJldG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDcwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzNTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3abdf268425d4fe9804507d13bb95d2f.setContent(i_frame_b126b35dc49e4c5eb3ccc6ffdf11f95f);
        

        marker_d93dd9388fbd4a31b1482874b02fb2ff.bindPopup(popup_3abdf268425d4fe9804507d13bb95d2f)
        ;

        
    
    
            var marker_84c2aad055364148a3a4609f2a9b6c8a = L.marker(
                [44.788233, 11.026955000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d2a904320784460dbb35639c674d90a4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_84c2aad055364148a3a4609f2a9b6c8a.setIcon(icon_d2a904320784460dbb35639c674d90a4);
        
    
        var popup_95558b3eca864f378db10c1a5dbb1b5d = L.popup({"maxWidth": 2650});

        
            var i_frame_861519cb91dc4282b30a86a361309287 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBOdW92YSBTY3VvbGEgTWVkaWEgc3RhdGFsZSBEYW50ZSBBbGlnaGllcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyMDcwNzE4LjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_95558b3eca864f378db10c1a5dbb1b5d.setContent(i_frame_861519cb91dc4282b30a86a361309287);
        

        marker_84c2aad055364148a3a4609f2a9b6c8a.bindPopup(popup_95558b3eca864f378db10c1a5dbb1b5d)
        ;

        
    
    
            var marker_85c1be588d73403ea6361f38232856a5 = L.marker(
                [44.789774, 11.024221],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_42df352035824dcfac101b1e3e0da9f7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_85c1be588d73403ea6361f38232856a5.setIcon(icon_42df352035824dcfac101b1e3e0da9f7);
        
    
        var popup_eaad0f2688c84987bb01a57120cbf8e9 = L.popup({"maxWidth": 2650});

        
            var i_frame_b24681c5a4f74fb88583798f4bb22523 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTZWRlIHB1YmJsaWNhIEFzc2lzdGVuemEgQ3JvY2UgQmx1IChjZW50cm8gZGl1cm5vKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI0OTU4NC4xMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjI0NjI1LjcxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_eaad0f2688c84987bb01a57120cbf8e9.setContent(i_frame_b24681c5a4f74fb88583798f4bb22523);
        

        marker_85c1be588d73403ea6361f38232856a5.bindPopup(popup_eaad0f2688c84987bb01a57120cbf8e9)
        ;

        
    
    
            var marker_9596afae72634715ae1b98691a33a18a = L.marker(
                [44.860842, 11.077182],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_660dc36c1d754de2bb2082127f43ed12 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9596afae72634715ae1b98691a33a18a.setIcon(icon_660dc36c1d754de2bb2082127f43ed12);
        
    
        var popup_63905015cb2d4ed3b49645d792a6a1af = L.popup({"maxWidth": 2650});

        
            var i_frame_fc9670f3b1d543659c2765053aa39397 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDYW11cmFuYSAgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMDUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_63905015cb2d4ed3b49645d792a6a1af.setContent(i_frame_fc9670f3b1d543659c2765053aa39397);
        

        marker_9596afae72634715ae1b98691a33a18a.bindPopup(popup_63905015cb2d4ed3b49645d792a6a1af)
        ;

        
    
    
            var marker_3c221a8bcfe24b3d9b643d286a89fa1e = L.marker(
                [44.849874, 11.074485000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9ba0437a39114f248103073c135831f4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3c221a8bcfe24b3d9b643d286a89fa1e.setIcon(icon_9ba0437a39114f248103073c135831f4);
        
    
        var popup_5eb55e11a33f4f98803556b348a39643 = L.popup({"maxWidth": 2650});

        
            var i_frame_42e88cc857ea4e19ae477957d8eadc70 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gRGl1cm5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUVET0xMQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjYxNDYuNDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5eb55e11a33f4f98803556b348a39643.setContent(i_frame_42e88cc857ea4e19ae477957d8eadc70);
        

        marker_3c221a8bcfe24b3d9b643d286a89fa1e.bindPopup(popup_5eb55e11a33f4f98803556b348a39643)
        ;

        
    
    
            var marker_b201c9000b254439b0d8d49eaa0c54ea = L.marker(
                [44.739057, 11.298458],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_dbf9a2c741ed48ee8c42f1ca439498d9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b201c9000b254439b0d8d49eaa0c54ea.setIcon(icon_dbf9a2c741ed48ee8c42f1ca439498d9);
        
    
        var popup_06dc3ef080f242739d4b2258e63e0f13 = L.popup({"maxWidth": 2650});

        
            var i_frame_8dfd296620a442369166ece7350ebb1c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gdmlhIEZhcmluaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_06dc3ef080f242739d4b2258e63e0f13.setContent(i_frame_8dfd296620a442369166ece7350ebb1c);
        

        marker_b201c9000b254439b0d8d49eaa0c54ea.bindPopup(popup_06dc3ef080f242739d4b2258e63e0f13)
        ;

        
    
    
            var marker_290c6e7dff234adca7afdd1cb87bb388 = L.marker(
                [44.73083, 11.291152],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1a8d738ce3ad401bb9e38a7071a826bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_290c6e7dff234adca7afdd1cb87bb388.setIcon(icon_1a8d738ce3ad401bb9e38a7071a826bb);
        
    
        var popup_d62929849e5747fda74646f555b2b066 = L.popup({"maxWidth": 2650});

        
            var i_frame_3808463af4fd41a19b0c058ddbe1e25b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCb2NjaW9maWxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDYwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d62929849e5747fda74646f555b2b066.setContent(i_frame_3808463af4fd41a19b0c058ddbe1e25b);
        

        marker_290c6e7dff234adca7afdd1cb87bb388.bindPopup(popup_d62929849e5747fda74646f555b2b066)
        ;

        
    
    
            var marker_a732158008e544bda018cd70d86532a0 = L.marker(
                [44.737503000000004, 11.299772],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8780d9ed943f4aca9de1035181abedfb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a732158008e544bda018cd70d86532a0.setIcon(icon_8780d9ed943f4aca9de1035181abedfb);
        
    
        var popup_821e22f356384efc8f0e6def4e3db996 = L.popup({"maxWidth": 2650});

        
            var i_frame_d79afd818a76476ba1d0faf997b5b75a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWdpbGkgZGVsIEZ1b2NvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMDU3MzMuNTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDExMTgxLjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_821e22f356384efc8f0e6def4e3db996.setContent(i_frame_d79afd818a76476ba1d0faf997b5b75a);
        

        marker_a732158008e544bda018cd70d86532a0.bindPopup(popup_821e22f356384efc8f0e6def4e3db996)
        ;

        
    
    
            var marker_0e44590b284148409eeb8c251e67bbb6 = L.marker(
                [44.714828999999995, 11.283083],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_af1330ea644d490d8215f8df20ebdd77 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0e44590b284148409eeb8c251e67bbb6.setIcon(icon_af1330ea644d490d8215f8df20ebdd77);
        
    
        var popup_6cca74de0af0485980e49aa02bd5a990 = L.popup({"maxWidth": 2650});

        
            var i_frame_cf45c8815131476d812a073604cd073b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gUHJvdGV6aW9uZSBDaXZpbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTMzOTEuNTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6cca74de0af0485980e49aa02bd5a990.setContent(i_frame_cf45c8815131476d812a073604cd073b);
        

        marker_0e44590b284148409eeb8c251e67bbb6.bindPopup(popup_6cca74de0af0485980e49aa02bd5a990)
        ;

        
    
    
            var marker_d1f51df2178445c49fd65352ad6f98fc = L.marker(
                [44.808519, 11.343558999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_58c5179f8e54434c8f77c2be594bdd0a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d1f51df2178445c49fd65352ad6f98fc.setIcon(icon_58c5179f8e54434c8f77c2be594bdd0a);
        
    
        var popup_1481586ed1ac42a9ae92c016bb2138c2 = L.popup({"maxWidth": 2650});

        
            var i_frame_be1694e5e6e3419ba6fb4a980681b3b3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgcHJpbWFyaWEgZGkgQnVvbmFjb21wcmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDEwNzcwNS40MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1481586ed1ac42a9ae92c016bb2138c2.setContent(i_frame_be1694e5e6e3419ba6fb4a980681b3b3);
        

        marker_d1f51df2178445c49fd65352ad6f98fc.bindPopup(popup_1481586ed1ac42a9ae92c016bb2138c2)
        ;

        
    
    
            var marker_c495fa22da174e7092f181b6a4ceebcc = L.marker(
                [44.837934999999995, 11.283987],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1a86784c12c84e1f8940e25178301e91 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c495fa22da174e7092f181b6a4ceebcc.setIcon(icon_1a86784c12c84e1f8940e25178301e91);
        
    
        var popup_09237f83ea784fd9b026c1a34696c4f7 = L.popup({"maxWidth": 2650});

        
            var i_frame_72ac2002c6f84ad6a593131375b6954d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTdXBlcmlvcmUgJ0lnbmF6aW8gQ2FsdmknIC0gTGljZW8gU2NpZW50aWZpY28gJ01vcmFuZGknIC0gcmlwYXJhemlvbmUgY2FwYW5ub25pIGUgY2FzYSBjdXN0b2RlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI5NzkwOS4yNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTgwMTYuODUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_09237f83ea784fd9b026c1a34696c4f7.setContent(i_frame_72ac2002c6f84ad6a593131375b6954d);
        

        marker_c495fa22da174e7092f181b6a4ceebcc.bindPopup(popup_09237f83ea784fd9b026c1a34696c4f7)
        ;

        
    
    
            var marker_23c539ddef8c43acb356a5529279284a = L.marker(
                [44.918034000000006, 10.812124],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_dc7f834bd70a403dbd8293e5c7d434c7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_23c539ddef8c43acb356a5529279284a.setIcon(icon_dc7f834bd70a403dbd8293e5c7d434c7);
        
    
        var popup_f3b7360d1979496eb22a3463abe24d53 = L.popup({"maxWidth": 2650});

        
            var i_frame_137772ebffcd460199a1a0777c3bda61 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgVmlhIENhcHBlbGxldHRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f3b7360d1979496eb22a3463abe24d53.setContent(i_frame_137772ebffcd460199a1a0777c3bda61);
        

        marker_23c539ddef8c43acb356a5529279284a.bindPopup(popup_f3b7360d1979496eb22a3463abe24d53)
        ;

        
    
    
            var marker_2fd484351f2a4971b164657fc05db60c = L.marker(
                [44.712031, 11.30787],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8d0edba9e4414bb69ae43f0abb0ddfed = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2fd484351f2a4971b164657fc05db60c.setIcon(icon_8d0edba9e4414bb69ae43f0abb0ddfed);
        
    
        var popup_dad528b6746142c683c9e1cf3fb05cce = L.popup({"maxWidth": 2650});

        
            var i_frame_2b84ed0adc8b4f2f801724e1f7656cea = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIE1hcnRpbmVsbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI2MTUyMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dad528b6746142c683c9e1cf3fb05cce.setContent(i_frame_2b84ed0adc8b4f2f801724e1f7656cea);
        

        marker_2fd484351f2a4971b164657fc05db60c.bindPopup(popup_dad528b6746142c683c9e1cf3fb05cce)
        ;

        
    
    
            var marker_b2fc9c10969140789de8510961c81379 = L.marker(
                [44.837737, 11.029549000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b2f1a459e40b4401bc31174571a55aec = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b2fc9c10969140789de8510961c81379.setIcon(icon_b2f1a459e40b4401bc31174571a55aec);
        
    
        var popup_bcbb59d919df421d965d5f088a6fe1c1 = L.popup({"maxWidth": 2650});

        
            var i_frame_94ee678457de4365ad3a18e3970bf212 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTZWRlIE11bmljaXBhbGUgIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQyNDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bcbb59d919df421d965d5f088a6fe1c1.setContent(i_frame_94ee678457de4365ad3a18e3970bf212);
        

        marker_b2fc9c10969140789de8510961c81379.bindPopup(popup_bcbb59d919df421d965d5f088a6fe1c1)
        ;

        
    
    
            var marker_99ec370b87a3495596630bcc9b27a95d = L.marker(
                [44.834666, 11.026834],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bec70381737d4127befedb3557b9d2ff = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_99ec370b87a3495596630bcc9b27a95d.setIcon(icon_bec70381737d4127befedb3557b9d2ff);
        
    
        var popup_6f69b0c0a75f47b496e698156bff49a8 = L.popup({"maxWidth": 2650});

        
            var i_frame_6c07bedd88e64f1e82264104ebfe7b85 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbmkgY29tdW5hbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNTEzNjEyLjEyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNjAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6f69b0c0a75f47b496e698156bff49a8.setContent(i_frame_6c07bedd88e64f1e82264104ebfe7b85);
        

        marker_99ec370b87a3495596630bcc9b27a95d.bindPopup(popup_6f69b0c0a75f47b496e698156bff49a8)
        ;

        
    
    
            var marker_c4f1f14803dc4ec68e27b9b89dfa46c1 = L.marker(
                [44.837428, 11.030076],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7e91edd8879248d381d3cbf84c86d64b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c4f1f14803dc4ec68e27b9b89dfa46c1.setIcon(icon_7e91edd8879248d381d3cbf84c86d64b);
        
    
        var popup_5a51a35b9fbe4a5a97977c2e7bc8e33e = L.popup({"maxWidth": 2650});

        
            var i_frame_8e3f32644f1f42d4b55f3ee8f57e5abf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb25kb21pbmlvICdHcmV0YScgKEJpYmxpb3RlY2EgQ29tdW5hbGUpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDYzNTI3Ny44MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5a51a35b9fbe4a5a97977c2e7bc8e33e.setContent(i_frame_8e3f32644f1f42d4b55f3ee8f57e5abf);
        

        marker_c4f1f14803dc4ec68e27b9b89dfa46c1.bindPopup(popup_5a51a35b9fbe4a5a97977c2e7bc8e33e)
        ;

        
    
    
            var marker_11084f0c563e48ca8874b15fd474d459 = L.marker(
                [44.838321, 11.032274000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_78f25ac0a40d45d3b39e5464bca2583a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_11084f0c563e48ca8874b15fd474d459.setIcon(icon_78f25ac0a40d45d3b39e5464bca2583a);
        
    
        var popup_9dbff4f5b83648a7b38c3371d424aacc = L.popup({"maxWidth": 2650});

        
            var i_frame_e5b6428379f04d8bb1e70844c14e1b91 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBjb25kb21pbmlvICdpIEdsaWNpbmknIC0gYXV0b3JpbWVzc2EgY29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNzAyNTIuMjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI0NTY4LjEzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9dbff4f5b83648a7b38c3371d424aacc.setContent(i_frame_e5b6428379f04d8bb1e70844c14e1b91);
        

        marker_11084f0c563e48ca8874b15fd474d459.bindPopup(popup_9dbff4f5b83648a7b38c3371d424aacc)
        ;

        
    
    
            var marker_86a8e6e0119b42fbb8be56d1fac744cd = L.marker(
                [44.791143, 11.290554],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_955f258c15874e05a45d1d5fc1c14cd5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_86a8e6e0119b42fbb8be56d1fac744cd.setIcon(icon_955f258c15874e05a45d1d5fc1c14cd5);
        
    
        var popup_933ad4d141cf46469df340ad793b212b = L.popup({"maxWidth": 2650});

        
            var i_frame_b1acb3a463d34f75a30165326e9a16eb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jaGlhbGUgU2FudGlzc2ltYSBUcmluaXTDoCBkaSBEb2RpY2kgTW9yZWxsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTgxNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTgxNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_933ad4d141cf46469df340ad793b212b.setContent(i_frame_b1acb3a463d34f75a30165326e9a16eb);
        

        marker_86a8e6e0119b42fbb8be56d1fac744cd.bindPopup(popup_933ad4d141cf46469df340ad793b212b)
        ;

        
    
    
            var marker_18a539e672184aafb3292da64889652d = L.marker(
                [44.723253, 11.282264999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_33885f6d14554175b7c142bf68c4b096 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_18a539e672184aafb3292da64889652d.setIcon(icon_33885f6d14554175b7c142bf68c4b096);
        
    
        var popup_8607da765b13476ea7b2e02a3bd1772f = L.popup({"maxWidth": 2650});

        
            var i_frame_2b5c6448bfae498c93bfa9a0725c8fca = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgU3Vzc2lkaWFyaWEgZGkgU2FuIEdpb3Zhbm5pIEJvc2NvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxOTUyMC41MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTk1MjAuNTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8607da765b13476ea7b2e02a3bd1772f.setContent(i_frame_2b5c6448bfae498c93bfa9a0725c8fca);
        

        marker_18a539e672184aafb3292da64889652d.bindPopup(popup_8607da765b13476ea7b2e02a3bd1772f)
        ;

        
    
    
            var marker_aac37c0455d64522b3b9facfe51800e9 = L.marker(
                [44.91769, 10.806254],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a2fda182949b4388b204c45505849853 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_aac37c0455d64522b3b9facfe51800e9.setIcon(icon_a2fda182949b4388b204c45505849853);
        
    
        var popup_ccbc93224e7745cdaa1c4e8d8b622ea3 = L.popup({"maxWidth": 2650});

        
            var i_frame_0581c1c71e654931bdd74f15a56b1352 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBMb2NhbGUgcGFycm9jY2hpYWxlIFNhbiBHaXVzZXBwZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTI5NDExMi4zMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ccbc93224e7745cdaa1c4e8d8b622ea3.setContent(i_frame_0581c1c71e654931bdd74f15a56b1352);
        

        marker_aac37c0455d64522b3b9facfe51800e9.bindPopup(popup_ccbc93224e7745cdaa1c4e8d8b622ea3)
        ;

        
    
    
            var marker_8d6d33fdd1a24bc0bd7698829079a760 = L.marker(
                [44.713722, 11.304195],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5600ee53267d469c91e370d5ab18115d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8d6d33fdd1a24bc0bd7698829079a760.setIcon(icon_5600ee53267d469c91e370d5ab18115d);
        
    
        var popup_d7a7c402fded4aa28e8edf2e9f795b03 = L.popup({"maxWidth": 2650});

        
            var i_frame_0b75b06a289b4efd98238dce08967e6e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyBkaSBzZXJ2aXppbyBleCBzdGF6aW9uZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTk1Mzc4LjcxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d7a7c402fded4aa28e8edf2e9f795b03.setContent(i_frame_0b75b06a289b4efd98238dce08967e6e);
        

        marker_8d6d33fdd1a24bc0bd7698829079a760.bindPopup(popup_d7a7c402fded4aa28e8edf2e9f795b03)
        ;

        
    
    
            var marker_e97dd0cbe4524648b2ac626487e25eb5 = L.marker(
                [44.726281, 11.292076],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_036830de3f86404892c153714daf15bc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e97dd0cbe4524648b2ac626487e25eb5.setIcon(icon_036830de3f86404892c153714daf15bc);
        
    
        var popup_721d4e33644649ccae0f126119f878cd = L.popup({"maxWidth": 2650});

        
            var i_frame_67565b879ccd4a96957f037c71c95fcb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUGlldHJvIEFwb3N0b2xvIGUgY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA4MDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_721d4e33644649ccae0f126119f878cd.setContent(i_frame_67565b879ccd4a96957f037c71c95fcb);
        

        marker_e97dd0cbe4524648b2ac626487e25eb5.bindPopup(popup_721d4e33644649ccae0f126119f878cd)
        ;

        
    
    
            var marker_358a1baa99b3480ba7bdacc742e492c9 = L.marker(
                [44.764676, 11.485528],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_20fdb2b874ae45e383daa804fa56ab3a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_358a1baa99b3480ba7bdacc742e492c9.setIcon(icon_20fdb2b874ae45e383daa804fa56ab3a);
        
    
        var popup_4a6fc0c757bb4458a002ab683964bc1e = L.popup({"maxWidth": 2650});

        
            var i_frame_63c35d3fa0d44909a03b699083a62153 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsbyBMYW1iZXJ0aW5pIChNdW5pY2lwaW8pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzU1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNzc1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4a6fc0c757bb4458a002ab683964bc1e.setContent(i_frame_63c35d3fa0d44909a03b699083a62153);
        

        marker_358a1baa99b3480ba7bdacc742e492c9.bindPopup(popup_4a6fc0c757bb4458a002ab683964bc1e)
        ;

        
    
    
            var marker_66172eb639db45d4a5b5d489a48be86b = L.marker(
                [44.725127, 11.286534],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e12559f2680a493b8dcf198c4b7469df = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_66172eb639db45d4a5b5d489a48be86b.setIcon(icon_e12559f2680a493b8dcf198c4b7469df);
        
    
        var popup_cd1aae39ce33410197a3d549bf9e1033 = L.popup({"maxWidth": 2650});

        
            var i_frame_0725fa235f9b46f1b32343a3b0ada6a8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgZWxlbWVudGFyZSBQYXNjb2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMTg5OTg1LjMxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2MjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cd1aae39ce33410197a3d549bf9e1033.setContent(i_frame_0725fa235f9b46f1b32343a3b0ada6a8);
        

        marker_66172eb639db45d4a5b5d489a48be86b.bindPopup(popup_cd1aae39ce33410197a3d549bf9e1033)
        ;

        
    
    
            var marker_6f37c9e2cfca401a8a0e14a778c73e90 = L.marker(
                [44.727647, 11.290741],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1f0f9b78f1c14273b11679e142e1539f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6f37c9e2cfca401a8a0e14a778c73e90.setIcon(icon_1f0f9b78f1c14273b11679e142e1539f);
        
    
        var popup_1f81d882c1fc4744bd5ed00eab24e3bf = L.popup({"maxWidth": 2650});

        
            var i_frame_54c7e8e0861441d287405d07318fe88c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGNvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE1NzI5Ny45MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1f81d882c1fc4744bd5ed00eab24e3bf.setContent(i_frame_54c7e8e0861441d287405d07318fe88c);
        

        marker_6f37c9e2cfca401a8a0e14a778c73e90.bindPopup(popup_1f81d882c1fc4744bd5ed00eab24e3bf)
        ;

        
    
    
            var marker_e173e4d5dbbd466d9137f7fd1f86f669 = L.marker(
                [44.835516, 11.36106],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_41a9b004b12442239ca7f7e35124ed69 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e173e4d5dbbd466d9137f7fd1f86f669.setIcon(icon_41a9b004b12442239ca7f7e35124ed69);
        
    
        var popup_566e59fbdcd64ecfae6f84db3af59d75 = L.popup({"maxWidth": 2650});

        
            var i_frame_6960a60caebc45aaaafc31c5151a0cf9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQaW5hY290ZWNhIGNpdmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMDE5MTAuMTggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_566e59fbdcd64ecfae6f84db3af59d75.setContent(i_frame_6960a60caebc45aaaafc31c5151a0cf9);
        

        marker_e173e4d5dbbd466d9137f7fd1f86f669.bindPopup(popup_566e59fbdcd64ecfae6f84db3af59d75)
        ;

        
    
    
            var marker_3680fbbf59614815995a1d77bd8edc92 = L.marker(
                [44.726574, 11.289748],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9daf2d6d7617493caa776535443003f9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3680fbbf59614815995a1d77bd8edc92.setIcon(icon_9daf2d6d7617493caa776535443003f9);
        
    
        var popup_6cd76ecf86b04855bb4d6f7a6c6ff12b = L.popup({"maxWidth": 2650});

        
            var i_frame_3bb8adbce64b4e83a673a4ca4e2488f7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gY29tdW5hbGUgQm9yZ2F0dGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTE3NDA4Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6cd76ecf86b04855bb4d6f7a6c6ff12b.setContent(i_frame_3bb8adbce64b4e83a673a4ca4e2488f7);
        

        marker_3680fbbf59614815995a1d77bd8edc92.bindPopup(popup_6cd76ecf86b04855bb4d6f7a6c6ff12b)
        ;

        
    
    
            var marker_567956b6708e45b089986c3cce5ff0c3 = L.marker(
                [44.7244, 11.290315],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d37d1804593f4d40873a86bb59da7254 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_567956b6708e45b089986c3cce5ff0c3.setIcon(icon_d37d1804593f4d40873a86bb59da7254);
        
    
        var popup_1f7035429e6a4d91ad2343de731c3587 = L.popup({"maxWidth": 2650});

        
            var i_frame_f8e4b415e85e446eace86111eedf52c6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTdHJ1dHR1cmEgT3NwZWRhbGllcmEgU1MuIEFubnVuemlhdGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgOTIzNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1f7035429e6a4d91ad2343de731c3587.setContent(i_frame_f8e4b415e85e446eace86111eedf52c6);
        

        marker_567956b6708e45b089986c3cce5ff0c3.bindPopup(popup_1f7035429e6a4d91ad2343de731c3587)
        ;

        
    
    
            var marker_2b3a46b8687c472cb99a15e1f056cb6f = L.marker(
                [44.723243, 11.285196000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_183ea957a06b47309c4ded53af041384 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2b3a46b8687c472cb99a15e1f056cb6f.setIcon(icon_183ea957a06b47309c4ded53af041384);
        
    
        var popup_b13f76fd123344faaa01e35ea7e8ca0c = L.popup({"maxWidth": 2650});

        
            var i_frame_f248f70796b34a4bb458fe2972a9fb28 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTdGFkaW8gQ29tdW5hbGUgJ0wuIEJ1bGdhcmVsbGknIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b13f76fd123344faaa01e35ea7e8ca0c.setContent(i_frame_f248f70796b34a4bb458fe2972a9fb28);
        

        marker_2b3a46b8687c472cb99a15e1f056cb6f.bindPopup(popup_b13f76fd123344faaa01e35ea7e8ca0c)
        ;

        
    
    
            var marker_078eb602145f4972b1176f078e7f4922 = L.marker(
                [44.728715, 11.288979],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_04f42e3f63774a768fe8023e78fed472 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_078eb602145f4972b1176f078e7f4922.setIcon(icon_04f42e3f63774a768fe8023e78fed472);
        
    
        var popup_74e61308aa894b23a31a0a051e3d9703 = L.popup({"maxWidth": 2650});

        
            var i_frame_8fe54961cb9345d5be1ce6fda74930d7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIEdhbGxlcmFuaSBGYWx6b25pIHBvaSBSdXNjb25pL1BhbGF6em8gU2NhcnNlbGxpL0JpYmxpb3RlY2EgY29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgODAzMTcuMTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_74e61308aa894b23a31a0a051e3d9703.setContent(i_frame_8fe54961cb9345d5be1ce6fda74930d7);
        

        marker_078eb602145f4972b1176f078e7f4922.bindPopup(popup_74e61308aa894b23a31a0a051e3d9703)
        ;

        
    
    
            var marker_0414f05aca5941388a6582339a8b68a3 = L.marker(
                [44.723701, 11.292634],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8f980ab8728548d28433b2f8e34d927d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0414f05aca5941388a6582339a8b68a3.setIcon(icon_8f980ab8728548d28433b2f8e34d927d);
        
    
        var popup_1827d4c38a104f32b1c69b74b4a72981 = L.popup({"maxWidth": 2650});

        
            var i_frame_459b755ffd1c4796902099759aee223e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb3J0YSBQaWV2ZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA1NzUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1827d4c38a104f32b1c69b74b4a72981.setContent(i_frame_459b755ffd1c4796902099759aee223e);
        

        marker_0414f05aca5941388a6582339a8b68a3.bindPopup(popup_1827d4c38a104f32b1c69b74b4a72981)
        ;

        
    
    
            var marker_7c33c18990174822874c6ffc0a604c2f = L.marker(
                [44.859024, 10.965409],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_25b568c0178d4c68a075025d822148d9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7c33c18990174822874c6ffc0a604c2f.setIcon(icon_25b568c0178d4c68a075025d822148d9);
        
    
        var popup_6abb79ce8dfc4fe096b7b0b4ab3a847f = L.popup({"maxWidth": 2650});

        
            var i_frame_8a9c14a7953b47caa1eea880fa96b0ae = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUG9udGUgUGlvcHBhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBPU1NJRE9OSU8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0OTY4MS45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6abb79ce8dfc4fe096b7b0b4ab3a847f.setContent(i_frame_8a9c14a7953b47caa1eea880fa96b0ae);
        

        marker_7c33c18990174822874c6ffc0a604c2f.bindPopup(popup_6abb79ce8dfc4fe096b7b0b4ab3a847f)
        ;

        
    
    
            var marker_b925aee8853f4fe9ada0141a01645ca0 = L.marker(
                [44.790911, 11.288662],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_fb48b60f8f3742d8865dcce48c5fdabb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b925aee8853f4fe9ada0141a01645ca0.setIcon(icon_fb48b60f8f3742d8865dcce48c5fdabb);
        
    
        var popup_bd13ea3eae124c528b96a6aabb922428 = L.popup({"maxWidth": 2650});

        
            var i_frame_5915383bfe2e40fc818af278b254b94f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaXJjb2xvIFhJSSBNb3JlbGxpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDM5MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bd13ea3eae124c528b96a6aabb922428.setContent(i_frame_5915383bfe2e40fc818af278b254b94f);
        

        marker_b925aee8853f4fe9ada0141a01645ca0.bindPopup(popup_bd13ea3eae124c528b96a6aabb922428)
        ;

        
    
    
            var marker_0e7b091d542d40bc9dbd434af5b3f6c5 = L.marker(
                [44.836285, 11.03093],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2e4d88d1e5f544ab8d06018e9c020608 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0e7b091d542d40bc9dbd434af5b3f6c5.setIcon(icon_2e4d88d1e5f544ab8d06018e9c020608);
        
    
        var popup_4c441a1cde9f47d788c0f88caffd7cf0 = L.popup({"maxWidth": 2650});

        
            var i_frame_205054c2ff584d21855231948a3892e2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW5lbWEgdGVhdHJvIEhlc3BlcmlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzA0OTEuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4c441a1cde9f47d788c0f88caffd7cf0.setContent(i_frame_205054c2ff584d21855231948a3892e2);
        

        marker_0e7b091d542d40bc9dbd434af5b3f6c5.bindPopup(popup_4c441a1cde9f47d788c0f88caffd7cf0)
        ;

        
    
    
            var marker_b3b594a1b64e4d009cf53c6a051c4217 = L.marker(
                [44.889744, 11.057908],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_47f270b8c9d44da5994df400f7e5b3df = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b3b594a1b64e4d009cf53c6a051c4217.setIcon(icon_47f270b8c9d44da5994df400f7e5b3df);
        
    
        var popup_7f88bc1a03fb4a17bef2b1b662ff33b7 = L.popup({"maxWidth": 2650});

        
            var i_frame_b7aa6c25e5c7412c9909ba8a4a97ce97 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYWxhIHBvbGl2YWxlbnRlIChwYXJyb2NjaGlhIGRpIFNhbiBCaWFnaW8gVmVzY292byBlIE1hcnRpcmUpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7f88bc1a03fb4a17bef2b1b662ff33b7.setContent(i_frame_b7aa6c25e5c7412c9909ba8a4a97ce97);
        

        marker_b3b594a1b64e4d009cf53c6a051c4217.bindPopup(popup_7f88bc1a03fb4a17bef2b1b662ff33b7)
        ;

        
    
    
            var marker_df02ebe2afdd4b719e2a1985611e16e2 = L.marker(
                [44.885667, 11.416259],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0f761c2485584449a2575d6701f11006 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_df02ebe2afdd4b719e2a1985611e16e2.setIcon(icon_0f761c2485584449a2575d6701f11006);
        
    
        var popup_a573279bdef44043b4c3afdc91fa5f32 = L.popup({"maxWidth": 2650});

        
            var i_frame_131953e014b94d7e89e5435f88bb96e6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbCdBc3N1bnppb25lIGRpIE1hcmlhIFNhbnRpc3NpbWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzU0NTA2LjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a573279bdef44043b4c3afdc91fa5f32.setContent(i_frame_131953e014b94d7e89e5435f88bb96e6);
        

        marker_df02ebe2afdd4b719e2a1985611e16e2.bindPopup(popup_a573279bdef44043b4c3afdc91fa5f32)
        ;

        
    
    
            var marker_2906dd47c555475d87645ba4aeb1b0f7 = L.marker(
                [44.859246999999996, 10.999778],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_28fbcb2b0c6d4abeb891e7c7460fdb1e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2906dd47c555475d87645ba4aeb1b0f7.setIcon(icon_28fbcb2b0c6d4abeb891e7c7460fdb1e);
        
    
        var popup_dc6a193ac4c6495bb5a99ecd6c1759d6 = L.popup({"maxWidth": 2650});

        
            var i_frame_899d85ff098f46609a976694a73e3137 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGUgZWxlbWVudGFyaSBkaSBEaXN2ZXRybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEwNDEwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dc6a193ac4c6495bb5a99ecd6c1759d6.setContent(i_frame_899d85ff098f46609a976694a73e3137);
        

        marker_2906dd47c555475d87645ba4aeb1b0f7.bindPopup(popup_dc6a193ac4c6495bb5a99ecd6c1759d6)
        ;

        
    
    
            var marker_4197632bf3624a8186d59b61fe96e660 = L.marker(
                [44.922503999999996, 11.390277000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_342d7149197c47f0b1ff19226362b863 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4197632bf3624a8186d59b61fe96e660.setIcon(icon_342d7149197c47f0b1ff19226362b863);
        
    
        var popup_d49097f61051404aabf4b19b4485a906 = L.popup({"maxWidth": 2650});

        
            var i_frame_82d93ab1c56b4151aed0189e932f0818 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRlbCBDdW9yZSBJbW1hY29sYXRvIGRpIE1hcmlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d49097f61051404aabf4b19b4485a906.setContent(i_frame_82d93ab1c56b4151aed0189e932f0818);
        

        marker_4197632bf3624a8186d59b61fe96e660.bindPopup(popup_d49097f61051404aabf4b19b4485a906)
        ;

        
    
    
            var marker_b49958b08ff442d88811e5a495ea8103 = L.marker(
                [44.879971999999995, 11.415921],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_673ddd01fd444065a5c8d66bbc20aeb9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b49958b08ff442d88811e5a495ea8103.setIcon(icon_673ddd01fd444065a5c8d66bbc20aeb9);
        
    
        var popup_7fecc82b0e9240f9b8e5b56cb7ae5d15 = L.popup({"maxWidth": 2650});

        
            var i_frame_6be0a6a7c6e54d02a3ad825f07fcd48c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPc3BlZGFsZSBGcmF0ZWxsaSBCb3JzZWxsaSAtIHNlY29uZGEgZmFzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDM2NTUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7fecc82b0e9240f9b8e5b56cb7ae5d15.setContent(i_frame_6be0a6a7c6e54d02a3ad825f07fcd48c);
        

        marker_b49958b08ff442d88811e5a495ea8103.bindPopup(popup_7fecc82b0e9240f9b8e5b56cb7ae5d15)
        ;

        
    
    
            var marker_ee69270fec5d48e888dd41732ed0296a = L.marker(
                [44.914831, 10.984392999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a658d977157f4faf94d241143143f987 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ee69270fec5d48e888dd41732ed0296a.setIcon(icon_a658d977157f4faf94d241143143f987);
        
    
        var popup_d2263019764f40caad1954fa9b2f439b = L.popup({"maxWidth": 2650});

        
            var i_frame_17b79e81cf564506a1eb6714677ed75f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBPc3BlZGFsZSAtIFBhZGlnbGlvbmUgTXVyYXRvcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDYwOTg3My44OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d2263019764f40caad1954fa9b2f439b.setContent(i_frame_17b79e81cf564506a1eb6714677ed75f);
        

        marker_ee69270fec5d48e888dd41732ed0296a.bindPopup(popup_d2263019764f40caad1954fa9b2f439b)
        ;

        
    
    
            var marker_0cd2c8ee3a9e4e98891f19bcc74020ee = L.marker(
                [44.886925, 11.068384],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a894cea92f6345e39797ed89a8debb3c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0cd2c8ee3a9e4e98891f19bcc74020ee.setIcon(icon_a894cea92f6345e39797ed89a8debb3c);
        
    
        var popup_c56637e3a3504d7699c320dc5e9fc981 = L.popup({"maxWidth": 2650});

        
            var i_frame_d7b785a4e7744e158892bff03b4ff13e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21taXNzYXJpYXRvIGRpIFBvbGl6aWEgLSBkaSBwdWJibGljYSBzaWN1cmV6emEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c56637e3a3504d7699c320dc5e9fc981.setContent(i_frame_d7b785a4e7744e158892bff03b4ff13e);
        

        marker_0cd2c8ee3a9e4e98891f19bcc74020ee.bindPopup(popup_c56637e3a3504d7699c320dc5e9fc981)
        ;

        
    
    
            var marker_50a3dbf9c7f644718a5d122ba51153cf = L.marker(
                [44.838734, 11.086913000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e3f9c961000a4c8c933e98cd669c7c9e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_50a3dbf9c7f644718a5d122ba51153cf.setIcon(icon_e3f9c961000a4c8c933e98cd669c7c9e);
        
    
        var popup_9be489291c65437bae307fd01495b507 = L.popup({"maxWidth": 2650});

        
            var i_frame_211a978b977449938255f297f9493f00 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc29saW5vIChPcmF0b3JpbykgZGkgUy4gR2ltaWduYW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUVET0xMQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9be489291c65437bae307fd01495b507.setContent(i_frame_211a978b977449938255f297f9493f00);
        

        marker_50a3dbf9c7f644718a5d122ba51153cf.bindPopup(popup_9be489291c65437bae307fd01495b507)
        ;

        
    
    
            var marker_d8e3045bee8842c681a32dfe6ccc20ef = L.marker(
                [44.833673, 11.294407000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_005fd039f2aa4cdcb0b8462642ad9ff6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d8e3045bee8842c681a32dfe6ccc20ef.setIcon(icon_005fd039f2aa4cdcb0b8462642ad9ff6);
        
    
        var popup_65223f6179974d3f921b7df8a018d9f2 = L.popup({"maxWidth": 2650});

        
            var i_frame_dabfe52d0e764c62a723d847ff3925d0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIFJvc2FyaW8vQ2hpZXNhIGRlbGxhIEIuVi4gZGVsIFJvc2FyaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTkyOTA3OC4xOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTA1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_65223f6179974d3f921b7df8a018d9f2.setContent(i_frame_dabfe52d0e764c62a723d847ff3925d0);
        

        marker_d8e3045bee8842c681a32dfe6ccc20ef.bindPopup(popup_65223f6179974d3f921b7df8a018d9f2)
        ;

        
    
    
            var marker_7ee26c387df34bdea5bc16f6cc5ff86a = L.marker(
                [44.798044, 11.276243],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f0a2441340e24c639d710b1da7917305 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7ee26c387df34bdea5bc16f6cc5ff86a.setIcon(icon_f0a2441340e24c639d710b1da7917305);
        
    
        var popup_8797ea994699486c80a8212ee9cc25b3 = L.popup({"maxWidth": 2650});

        
            var i_frame_29d07c9cb7f64d968024b89f67a24403 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGUgZGkgR2FsZWF6emEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8797ea994699486c80a8212ee9cc25b3.setContent(i_frame_29d07c9cb7f64d968024b89f67a24403);
        

        marker_7ee26c387df34bdea5bc16f6cc5ff86a.bindPopup(popup_8797ea994699486c80a8212ee9cc25b3)
        ;

        
    
    
            var marker_71a8028f7a5e46058a405d2c23954552 = L.marker(
                [44.788875, 11.020392],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_95b4577fd7ce46e0b866fde6cb389138 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_71a8028f7a5e46058a405d2c23954552.setIcon(icon_95b4577fd7ce46e0b866fde6cb389138);
        
    
        var popup_56d21c1b968b4e84bc139f6d84702722 = L.popup({"maxWidth": 2650});

        
            var i_frame_843d913fc7014da0b71b6400f768f448 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gVmlsbGEgVHVzaW5pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjkwODQzMy44NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_56d21c1b968b4e84bc139f6d84702722.setContent(i_frame_843d913fc7014da0b71b6400f768f448);
        

        marker_71a8028f7a5e46058a405d2c23954552.bindPopup(popup_56d21c1b968b4e84bc139f6d84702722)
        ;

        
    
    
            var marker_ae830f4449b144fe9155840fbbf3bb7f = L.marker(
                [44.887570000000004, 11.065749],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2b5c786f74f14882bf792742945557c5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ae830f4449b144fe9155840fbbf3bb7f.setIcon(icon_2b5c786f74f14882bf792742945557c5);
        
    
        var popup_7e4ab2661aa04fc8b92f72b5e06671bc = L.popup({"maxWidth": 2650});

        
            var i_frame_950fcbad906040ab82c1494610009c0f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU2Vydml6aSAtIENvcnBvIE85IDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNDQ3Njg2LjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7e4ab2661aa04fc8b92f72b5e06671bc.setContent(i_frame_950fcbad906040ab82c1494610009c0f);
        

        marker_ae830f4449b144fe9155840fbbf3bb7f.bindPopup(popup_7e4ab2661aa04fc8b92f72b5e06671bc)
        ;

        
    
    
            var marker_1dde5401486a425fbd0e66a0c01804ef = L.marker(
                [44.883133, 11.064533],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7ab7fc1aeeef46b689051018f6199cae = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_1dde5401486a425fbd0e66a0c01804ef.setIcon(icon_7ab7fc1aeeef46b689051018f6199cae);
        
    
        var popup_865022389c8a4ce181abb10c0530db43 = L.popup({"maxWidth": 2650});

        
            var i_frame_512e327084954483a2cb7a65f36d3eaa = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPc3BlZGFsZSBTYW50YSBNYXJpYSBCaWFuY2EgLSBDb3JwbyA4IDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_865022389c8a4ce181abb10c0530db43.setContent(i_frame_512e327084954483a2cb7a65f36d3eaa);
        

        marker_1dde5401486a425fbd0e66a0c01804ef.bindPopup(popup_865022389c8a4ce181abb10c0530db43)
        ;

        
    
    
            var marker_a28e7dcd7a6a4fb7961d499d3cd1cd95 = L.marker(
                [44.833975, 11.298052],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_fa4992ad8e094785b651f9c7766d52a1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a28e7dcd7a6a4fb7961d499d3cd1cd95.setIcon(icon_fa4992ad8e094785b651f9c7766d52a1);
        
    
        var popup_2b593bbcda0b4dc1b179ec97a0c971ab = L.popup({"maxWidth": 2650});

        
            var i_frame_149d80af3ed44174b2890d356d4fae25 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPc3BlZGFsZSBjaXZpbGUgZGVnbGkgSW5mZXJtaSAgLSBDb3JwbyAxIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQ2NjY5MTEuMjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2b593bbcda0b4dc1b179ec97a0c971ab.setContent(i_frame_149d80af3ed44174b2890d356d4fae25);
        

        marker_a28e7dcd7a6a4fb7961d499d3cd1cd95.bindPopup(popup_2b593bbcda0b4dc1b179ec97a0c971ab)
        ;

        
    
    
            var marker_3f5a265be83a4bccac3b95107d1cc312 = L.marker(
                [44.722846000000004, 11.147132000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_eea4af9094e54d71a74f7183c2caf36e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3f5a265be83a4bccac3b95107d1cc312.setIcon(icon_eea4af9094e54d71a74f7183c2caf36e);
        
    
        var popup_c04583b249894fc2a1c13dfa2aabb9c5 = L.popup({"maxWidth": 2650});

        
            var i_frame_8a5cb6ece33349b8aa73b39b3da56fb7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb250ZSBzdWwgY29sbGV0dG9yZSBhY3F1ZSBhbHRlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c04583b249894fc2a1c13dfa2aabb9c5.setContent(i_frame_8a5cb6ece33349b8aa73b39b3da56fb7);
        

        marker_3f5a265be83a4bccac3b95107d1cc312.bindPopup(popup_c04583b249894fc2a1c13dfa2aabb9c5)
        ;

        
    
    
            var marker_4e20c71c788b48da97f57e2be976ca67 = L.marker(
                [44.712368, 11.30304],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_97b7f6eef55a47ee89ed4918c0e5a695 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4e20c71c788b48da97f57e2be976ca67.setIcon(icon_97b7f6eef55a47ee89ed4918c0e5a695);
        
    
        var popup_80568930c30e44bc92d859f527394ef7 = L.popup({"maxWidth": 2650});

        
            var i_frame_48231f3a019240e8bb634f02fecc2eff = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIENhbnRvbmllcmEgIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA3MDEwMy4zIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_80568930c30e44bc92d859f527394ef7.setContent(i_frame_48231f3a019240e8bb634f02fecc2eff);
        

        marker_4e20c71c788b48da97f57e2be976ca67.bindPopup(popup_80568930c30e44bc92d859f527394ef7)
        ;

        
    
    
            var marker_7b515f63be2c451a909b1ca918f760af = L.marker(
                [44.88367, 11.427096],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e11f55b5349d48c9bfff2453508ebc90 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7b515f63be2c451a909b1ca918f760af.setIcon(icon_e11f55b5349d48c9bfff2453508ebc90);
        
    
        var popup_6b3bab5d37324938a9bf0c11d332b631 = L.popup({"maxWidth": 2650});

        
            var i_frame_523534652b424e2a909dfdd8c76d0594 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNlbGxvIGUgbWFnYXp6aW5vIGlkcmF1bGljbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA2MjI4My43NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzExNC4xOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6b3bab5d37324938a9bf0c11d332b631.setContent(i_frame_523534652b424e2a909dfdd8c76d0594);
        

        marker_7b515f63be2c451a909b1ca918f760af.bindPopup(popup_6b3bab5d37324938a9bf0c11d332b631)
        ;

        
    
    
            var marker_223f4d71b8dd4868bb88b2a6b8f3dece = L.marker(
                [44.820243, 11.193825],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_870791f0c61445769e6390bbba48af4b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_223f4d71b8dd4868bb88b2a6b8f3dece.setIcon(icon_870791f0c61445769e6390bbba48af4b);
        
    
        var popup_872ba8ae360f4a26bc82c416aeb23657 = L.popup({"maxWidth": 2650});

        
            var i_frame_9890d28eb12e4dda9585027d347b73f9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBEb2dhcm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA3MDcwMi43OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTcxODcuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_872ba8ae360f4a26bc82c416aeb23657.setContent(i_frame_9890d28eb12e4dda9585027d347b73f9);
        

        marker_223f4d71b8dd4868bb88b2a6b8f3dece.bindPopup(popup_872ba8ae360f4a26bc82c416aeb23657)
        ;

        
    
    
            var marker_76e1c940d98847dcaf7b456175f69fad = L.marker(
                [44.886052, 11.404853],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_665a57c53741443ab8e89a801a88bf94 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_76e1c940d98847dcaf7b456175f69fad.setIcon(icon_665a57c53741443ab8e89a801a88bf94);
        
    
        var popup_905698e452ab4ef0806820ee05995dc6 = L.popup({"maxWidth": 2650});

        
            var i_frame_860770e77a2845e7997ded82d479f6ee = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW1wbyBzcG9ydGl2byBCb25kZW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_905698e452ab4ef0806820ee05995dc6.setContent(i_frame_860770e77a2845e7997ded82d479f6ee);
        

        marker_76e1c940d98847dcaf7b456175f69fad.bindPopup(popup_905698e452ab4ef0806820ee05995dc6)
        ;

        
    
    
            var marker_15661f1782d34a3ba26f710dc7775652 = L.marker(
                [44.917542, 11.353169],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_95ce5fd0bcc045f5843c981d47fce139 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_15661f1782d34a3ba26f710dc7775652.setIcon(icon_95ce5fd0bcc045f5843c981d47fce139);
        
    
        var popup_4d886e21e74d4ef2be1f8394573cff8b = L.popup({"maxWidth": 2650});

        
            var i_frame_832df3e3812940808ed4d414419e64ac = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUcmlidW5hIGRlbCBDYW1wbyBzcG9ydGl2byBkaSBTY29ydGljaGlubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyMjk3MS4wMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4d886e21e74d4ef2be1f8394573cff8b.setContent(i_frame_832df3e3812940808ed4d414419e64ac);
        

        marker_15661f1782d34a3ba26f710dc7775652.bindPopup(popup_4d886e21e74d4ef2be1f8394573cff8b)
        ;

        
    
    
            var marker_6336f5c8f63640d9a46d20efc40ac16f = L.marker(
                [44.885245, 11.418781],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f3f65da24364465bb79c01fe2ffd9f71 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6336f5c8f63640d9a46d20efc40ac16f.setIcon(icon_f3f65da24364465bb79c01fe2ffd9f71);
        
    
        var popup_cfd9de81bef045819933b35cdd202bda = L.popup({"maxWidth": 2650});

        
            var i_frame_48230f4aef334304848aa1a9ee301028 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQLlQuIFNlZGUgQXZpcyAtIFAuMSBBcHBhcnRhbWVudG8gY3VzdG9kZSBtdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cfd9de81bef045819933b35cdd202bda.setContent(i_frame_48230f4aef334304848aa1a9ee301028);
        

        marker_6336f5c8f63640d9a46d20efc40ac16f.bindPopup(popup_cfd9de81bef045819933b35cdd202bda)
        ;

        
    
    
            var marker_192af97d3316435c9091145e111c47ed = L.marker(
                [44.841252000000004, 11.169108],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_de9552a1619a48f783f7ec1751d78365 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_192af97d3316435c9091145e111c47ed.setIcon(icon_de9552a1619a48f783f7ec1751d78365);
        
    
        var popup_e49275e1e66540e0ae35c7ee307621ff = L.popup({"maxWidth": 2650});

        
            var i_frame_874318621c0341e788d360a6dcbf5759 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5vbmljYSBwYXJyb2NjaGlhbGUgLSB1ZmZpY2kgLSBhcHBhcnRhbWVudGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxOTk2NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxOTk2NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e49275e1e66540e0ae35c7ee307621ff.setContent(i_frame_874318621c0341e788d360a6dcbf5759);
        

        marker_192af97d3316435c9091145e111c47ed.bindPopup(popup_e49275e1e66540e0ae35c7ee307621ff)
        ;

        
    
    
            var marker_4b6223dea0554e72b20df3a863fb234b = L.marker(
                [44.862572, 11.178912],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4768ede5a20a41f6b089044dca953b67 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4b6223dea0554e72b20df3a863fb234b.setIcon(icon_4768ede5a20a41f6b089044dca953b67);
        
    
        var popup_dd34485e16154bf39c5fae163ed495ed = L.popup({"maxWidth": 2650});

        
            var i_frame_be4f3e91ebf541d0833dd84437b56f36 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgU3BhbGxhbnphbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dd34485e16154bf39c5fae163ed495ed.setContent(i_frame_be4f3e91ebf541d0833dd84437b56f36);
        

        marker_4b6223dea0554e72b20df3a863fb234b.bindPopup(popup_dd34485e16154bf39c5fae163ed495ed)
        ;

        
    
    
            var marker_af0db4632c4a4bb683a22d796b18b2ee = L.marker(
                [44.833632, 11.302351],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0fd900e680014a6aa52c816e5e336b54 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_af0db4632c4a4bb683a22d796b18b2ee.setIcon(icon_0fd900e680014a6aa52c816e5e336b54);
        
    
        var popup_c77283bcf5ce4016b2cfe738b1da540d = L.popup({"maxWidth": 2650});

        
            var i_frame_859d260a26d2468ba1457199da3edca4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBEaXNwZW5zYXJpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c77283bcf5ce4016b2cfe738b1da540d.setContent(i_frame_859d260a26d2468ba1457199da3edca4);
        

        marker_af0db4632c4a4bb683a22d796b18b2ee.bindPopup(popup_c77283bcf5ce4016b2cfe738b1da540d)
        ;

        
    
    
            var marker_867a6b9930934cb593274b31d17bfb2b = L.marker(
                [44.852616999999995, 11.215296],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_350b6755759a49908b3696dafa98e096 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_867a6b9930934cb593274b31d17bfb2b.setIcon(icon_350b6755759a49908b3696dafa98e096);
        
    
        var popup_89241f352cac4ab899d87ae834a606ac = L.popup({"maxWidth": 2650});

        
            var i_frame_294c5513d34a497ba152ea3453659067 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgc2Vjb25kYXJpYSBMLiBQb2xldHRpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDIyNjcxOC4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTMzNzAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_89241f352cac4ab899d87ae834a606ac.setContent(i_frame_294c5513d34a497ba152ea3453659067);
        

        marker_867a6b9930934cb593274b31d17bfb2b.bindPopup(popup_89241f352cac4ab899d87ae834a606ac)
        ;

        
    
    
            var marker_04179de2244b4b19bc799d25410217d9 = L.marker(
                [44.829434, 11.295172],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a7b0e2dc30f54011a5c6e5d319d5047c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_04179de2244b4b19bc799d25410217d9.setIcon(icon_a7b0e2dc30f54011a5c6e5d319d5047c);
        
    
        var popup_9b1526c4b2824c3c8ddbef6b0aae64bd = L.popup({"maxWidth": 2650});

        
            var i_frame_9583ef39ddf64621bdd19500e6163089 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBQaWV6b21ldHJpY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9b1526c4b2824c3c8ddbef6b0aae64bd.setContent(i_frame_9583ef39ddf64621bdd19500e6163089);
        

        marker_04179de2244b4b19bc799d25410217d9.bindPopup(popup_9b1526c4b2824c3c8ddbef6b0aae64bd)
        ;

        
    
    
            var marker_00f72651266749f39474163a0682f50c = L.marker(
                [44.834099, 11.296689],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_38f5f4187c244f0c9f81c3def4dd65f5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_00f72651266749f39474163a0682f50c.setIcon(icon_38f5f4187c244f0c9f81c3def4dd65f5);
        
    
        var popup_deab1695a458469897ac2bb0d6d1cbad = L.popup({"maxWidth": 2650});

        
            var i_frame_5efd85d4072047a9aab37db3d3defa51 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gc29jaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE4MjYwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_deab1695a458469897ac2bb0d6d1cbad.setContent(i_frame_5efd85d4072047a9aab37db3d3defa51);
        

        marker_00f72651266749f39474163a0682f50c.bindPopup(popup_deab1695a458469897ac2bb0d6d1cbad)
        ;

        
    
    
            var marker_8060306434ce4fd08082a57fce1f5f56 = L.marker(
                [44.833242, 11.298236],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_371067177bb4492381dab2ef94b15ee3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8060306434ce4fd08082a57fce1f5f56.setIcon(icon_371067177bb4492381dab2ef94b15ee3);
        
    
        var popup_5d8522ed18b345ec872bba336d39571b = L.popup({"maxWidth": 2650});

        
            var i_frame_33ca78a3c0dc470e96bd9ffcd8b6ffa2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWxsYSBGaW5ldHRpIGUgU2N1ZGVyaWUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5d8522ed18b345ec872bba336d39571b.setContent(i_frame_33ca78a3c0dc470e96bd9ffcd8b6ffa2);
        

        marker_8060306434ce4fd08082a57fce1f5f56.bindPopup(popup_5d8522ed18b345ec872bba336d39571b)
        ;

        
    
    
            var marker_b5c3942e085d49e080885e9b669891a5 = L.marker(
                [44.83356, 11.293385],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_81fba2f7335445d3a0fd84025959ab68 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b5c3942e085d49e080885e9b669891a5.setIcon(icon_81fba2f7335445d3a0fd84025959ab68);
        
    
        var popup_0a3b546001f341a687fbdb81ad8ae19b = L.popup({"maxWidth": 2650});

        
            var i_frame_9cbfd64f67d342eeb34c81c6f7619920 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgRWxlbWVudGFyZSAnRS4gQ2FzdGVsZnJhbmNoaScgKGlzdC4gUHJvZmVzc2lvbmFsZSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0a3b546001f341a687fbdb81ad8ae19b.setContent(i_frame_9cbfd64f67d342eeb34c81c6f7619920);
        

        marker_b5c3942e085d49e080885e9b669891a5.bindPopup(popup_0a3b546001f341a687fbdb81ad8ae19b)
        ;

        
    
    
            var marker_3ba10d94a3ac46959502d14df3d5069e = L.marker(
                [44.853010999999995, 11.215347],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d97e441004e64dfdaa3e81bd4cf64516 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3ba10d94a3ac46959502d14df3d5069e.setIcon(icon_d97e441004e64dfdaa3e81bd4cf64516);
        
    
        var popup_cd2bf0a57d624da5ab8b3dfb1e319937 = L.popup({"maxWidth": 2650});

        
            var i_frame_190c145f506c4aa6be37f2640e9eea1c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgZGkgTXVzaWNhIE1hc3NhIEZpbmFsZXNlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTMxNjcuNTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cd2bf0a57d624da5ab8b3dfb1e319937.setContent(i_frame_190c145f506c4aa6be37f2640e9eea1c);
        

        marker_3ba10d94a3ac46959502d14df3d5069e.bindPopup(popup_cd2bf0a57d624da5ab8b3dfb1e319937)
        ;

        
    
    
            var marker_75067e54b1d34f1a9b29e2efe4ecafc9 = L.marker(
                [44.833853999999995, 11.294374000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9609dccbd26047dd81fc992625338a56 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_75067e54b1d34f1a9b29e2efe4ecafc9.setIcon(icon_9609dccbd26047dd81fc992625338a56);
        
    
        var popup_2e646ba515de411883978aada65046e6 = L.popup({"maxWidth": 2650});

        
            var i_frame_6a61b7200bf145e899d5678960039707 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIE1hcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2e646ba515de411883978aada65046e6.setContent(i_frame_6a61b7200bf145e899d5678960039707);
        

        marker_75067e54b1d34f1a9b29e2efe4ecafc9.bindPopup(popup_2e646ba515de411883978aada65046e6)
        ;

        
    
    
            var marker_95eb8cd5e9d34c4aa0fac2b2e6c430e6 = L.marker(
                [44.834487, 11.300936],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_406dd6b44ca949b485dd1d0ee07fae05 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_95eb8cd5e9d34c4aa0fac2b2e6c430e6.setIcon(icon_406dd6b44ca949b485dd1d0ee07fae05);
        
    
        var popup_eb151502b8de42f09cbc35bd0913c0bb = L.popup({"maxWidth": 2650});

        
            var i_frame_58d40c82f8c94cb9872b00f5279f9028 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIHByb3RldHRhIGUgYWxsb2dnaSBwb2xpZnVuemlvbmFsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_eb151502b8de42f09cbc35bd0913c0bb.setContent(i_frame_58d40c82f8c94cb9872b00f5279f9028);
        

        marker_95eb8cd5e9d34c4aa0fac2b2e6c430e6.bindPopup(popup_eb151502b8de42f09cbc35bd0913c0bb)
        ;

        
    
    
            var marker_a606682df6ca44038dab386c536e238a = L.marker(
                [44.855178, 11.214533],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_859adb8ab80948e78ddc24c10c21bb4a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a606682df6ca44038dab386c536e238a.setIcon(icon_859adb8ab80948e78ddc24c10c21bb4a);
        
    
        var popup_e9ab5958df104285a44e2a5d64e5a8de = L.popup({"maxWidth": 2650});

        
            var i_frame_9c6ba8699d9c4c0cbd0616502ced3740 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBNYXNzYSBGaWxhbmVzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e9ab5958df104285a44e2a5d64e5a8de.setContent(i_frame_9c6ba8699d9c4c0cbd0616502ced3740);
        

        marker_a606682df6ca44038dab386c536e238a.bindPopup(popup_e9ab5958df104285a44e2a5d64e5a8de)
        ;

        
    
    
            var marker_eadb534f08304df387bb3dcc40ecfa84 = L.marker(
                [44.833993, 11.296213],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_48469e4639de440b86497ea3a1ca4a35 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_eadb534f08304df387bb3dcc40ecfa84.setIcon(icon_48469e4639de440b86497ea3a1ca4a35);
        
    
        var popup_4b5e78d2016f462fa9b0443005b5ded8 = L.popup({"maxWidth": 2650});

        
            var i_frame_f7770424aa9046de81f14fe2e2d5a131 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGN1c3RvZGUgVGVhdHJvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4b5e78d2016f462fa9b0443005b5ded8.setContent(i_frame_f7770424aa9046de81f14fe2e2d5a131);
        

        marker_eadb534f08304df387bb3dcc40ecfa84.bindPopup(popup_4b5e78d2016f462fa9b0443005b5ded8)
        ;

        
    
    
            var marker_3e4b7b3abe63445fa57915f5cc229562 = L.marker(
                [44.830214, 11.2887],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e96b795f00014945810d98b208df3131 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3e4b7b3abe63445fa57915f5cc229562.setIcon(icon_e96b795f00014945810d98b208df3131);
        
    
        var popup_c89cf183549e4a4ba85afd905b3b6808 = L.popup({"maxWidth": 2650});

        
            var i_frame_23b7a8314a5b47e990163d4763e62101 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYml0YXppb25lIGUgY2FtZXJhIG1vcnR1YXJpYSBDaW1pdGVybyBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c89cf183549e4a4ba85afd905b3b6808.setContent(i_frame_23b7a8314a5b47e990163d4763e62101);
        

        marker_3e4b7b3abe63445fa57915f5cc229562.bindPopup(popup_c89cf183549e4a4ba85afd905b3b6808)
        ;

        
    
    
            var marker_f6944eaa3eea4b2bba7c54f965968f61 = L.marker(
                [44.848963, 11.07145],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_499bed40a8cc4c7980e2bab401ed1ec2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_f6944eaa3eea4b2bba7c54f965968f61.setIcon(icon_499bed40a8cc4c7980e2bab401ed1ec2);
        
    
        var popup_5a022ef397f84d32b3b55e9ca4539b6d = L.popup({"maxWidth": 2650});

        
            var i_frame_1f770c0849944306bd6eea5538ee9402 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCaWJsaW90ZWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUVET0xMQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNzAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5a022ef397f84d32b3b55e9ca4539b6d.setContent(i_frame_1f770c0849944306bd6eea5538ee9402);
        

        marker_f6944eaa3eea4b2bba7c54f965968f61.bindPopup(popup_5a022ef397f84d32b3b55e9ca4539b6d)
        ;

        
    
    
            var marker_7f27c65cc467413f8dea9390abcd1ad6 = L.marker(
                [44.831629, 11.28975],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_081b698d4f4e49f6820121306aad7e53 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7f27c65cc467413f8dea9390abcd1ad6.setIcon(icon_081b698d4f4e49f6820121306aad7e53);
        
    
        var popup_9437d71e3fa740589e5874474600d687 = L.popup({"maxWidth": 2650});

        
            var i_frame_b32cbd6d5b3c42b0b56d51763ce024ea = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTcG9nbGlhdG9pbyBDYW1wbyBTcG9ydGl2byBSb2JpbnNvbiA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9437d71e3fa740589e5874474600d687.setContent(i_frame_b32cbd6d5b3c42b0b56d51763ce024ea);
        

        marker_7f27c65cc467413f8dea9390abcd1ad6.bindPopup(popup_9437d71e3fa740589e5874474600d687)
        ;

        
    
    
            var marker_67e557c096964256bee2f96b866ae5a3 = L.marker(
                [44.836428000000005, 11.289553],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bbfb106ce2964682953a4b925a5571b2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_67e557c096964256bee2f96b866ae5a3.setIcon(icon_bbfb106ce2964682953a4b925a5571b2);
        
    
        var popup_0046026e71174a8690d770e75b943b88 = L.popup({"maxWidth": 2650});

        
            var i_frame_ecce8d9bd0e14ba1a7d9ec141e88a917 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW1wbyBTcG9ydGl2byBDYXBvbHVvZ28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMjUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0046026e71174a8690d770e75b943b88.setContent(i_frame_ecce8d9bd0e14ba1a7d9ec141e88a917);
        

        marker_67e557c096964256bee2f96b866ae5a3.bindPopup(popup_0046026e71174a8690d770e75b943b88)
        ;

        
    
    
            var marker_200f39d30f9941fda8f2db147643d010 = L.marker(
                [44.825549, 11.302816],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a19d2e312c3e4ff2897098804fe2a831 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_200f39d30f9941fda8f2db147643d010.setIcon(icon_a19d2e312c3e4ff2897098804fe2a831);
        
    
        var popup_329335f6dddc4083a2f08cbd96c53def = L.popup({"maxWidth": 2650});

        
            var i_frame_04094d2dd791499eb4b5a4a352081d74 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb25kb21pbmlvICdNaWFyaSAxNScgKENhcGFubm9uaSBkZWwgQ2FybmV2YWxlKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxNDYyNzYuMzIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEzMTY0OC42OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_329335f6dddc4083a2f08cbd96c53def.setContent(i_frame_04094d2dd791499eb4b5a4a352081d74);
        

        marker_200f39d30f9941fda8f2db147643d010.bindPopup(popup_329335f6dddc4083a2f08cbd96c53def)
        ;

        
    
    
            var marker_d909ac9cce7f4dd981d472cad2f6080c = L.marker(
                [44.833989, 11.300141],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3ae62aceb8b3409287ce21d6c52120db = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d909ac9cce7f4dd981d472cad2f6080c.setIcon(icon_3ae62aceb8b3409287ce21d6c52120db);
        
    
        var popup_99b9d0b41f9c4d4d99637442bf7b20b4 = L.popup({"maxWidth": 2650});

        
            var i_frame_1b973798fb604c6ab5ff7d3237573c2b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBQcmV0dXJhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_99b9d0b41f9c4d4d99637442bf7b20b4.setContent(i_frame_1b973798fb604c6ab5ff7d3237573c2b);
        

        marker_d909ac9cce7f4dd981d472cad2f6080c.bindPopup(popup_99b9d0b41f9c4d4d99637442bf7b20b4)
        ;

        
    
    
            var marker_aa037648757d46738577b974544bbec7 = L.marker(
                [44.834513, 11.296097],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7e96191acfd348e984b9f2ea45ec1a3e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_aa037648757d46738577b974544bbec7.setIcon(icon_7e96191acfd348e984b9f2ea45ec1a3e);
        
    
        var popup_581ba4ed3cae4078a49692f8e866e76e = L.popup({"maxWidth": 2650});

        
            var i_frame_a4488da9df7545c2a01caa22b50f2b1e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGEgbWF0ZXJuYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_581ba4ed3cae4078a49692f8e866e76e.setContent(i_frame_a4488da9df7545c2a01caa22b50f2b1e);
        

        marker_aa037648757d46738577b974544bbec7.bindPopup(popup_581ba4ed3cae4078a49692f8e866e76e)
        ;

        
    
    
            var marker_3098e31d43d349c0a969f819051ea63a = L.marker(
                [44.848861, 11.072024],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b566fa28b29b4655a6d349f09e917ea9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3098e31d43d349c0a969f819051ea63a.setIcon(icon_b566fa28b29b4655a6d349f09e917ea9);
        
    
        var popup_e23656cb240d4e7aaa2778b54e425f50 = L.popup({"maxWidth": 2650});

        
            var i_frame_2c255a72a2da42c9924b89c6a536d7eb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBNdW5pY2lwaW8gKHVyYmFuIENlbnRlcikgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNjkzODgwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDM1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e23656cb240d4e7aaa2778b54e425f50.setContent(i_frame_2c255a72a2da42c9924b89c6a536d7eb);
        

        marker_3098e31d43d349c0a969f819051ea63a.bindPopup(popup_e23656cb240d4e7aaa2778b54e425f50)
        ;

        
    
    
            var marker_bdf530dd3d3f425aa9e9af0852f2c680 = L.marker(
                [44.830870000000004, 11.29528],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_599ffe055c1e432cb87e812fb67f350a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bdf530dd3d3f425aa9e9af0852f2c680.setIcon(icon_599ffe055c1e432cb87e812fb67f350a);
        
    
        var popup_3a125a32eb1449f48908e24271b6c59c = L.popup({"maxWidth": 2650});

        
            var i_frame_a12b8b6c8a02494db5456db88396fa58 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYW5jYSBiaWJsaW90ZWNhIGUgdWZmaWNpIGNvbXVuYWxpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3a125a32eb1449f48908e24271b6c59c.setContent(i_frame_a12b8b6c8a02494db5456db88396fa58);
        

        marker_bdf530dd3d3f425aa9e9af0852f2c680.bindPopup(popup_3a125a32eb1449f48908e24271b6c59c)
        ;

        
    
    
            var marker_18c252ef05b64ff2a0e98df335ee1231 = L.marker(
                [44.832187, 11.295757],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c6e4b9b03f154f67a2b44e5e9b35be3c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_18c252ef05b64ff2a0e98df335ee1231.setIcon(icon_c6e4b9b03f154f67a2b44e5e9b35be3c);
        
    
        var popup_53a34079e38b4944b746c6171245066f = L.popup({"maxWidth": 2650});

        
            var i_frame_f76c26174a434ed6a31eab2b1b7e85cb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gLSBDYXNhIEdhbGVpIC0gUGFsYXp6byBCb3J0b2xhenppIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjUyNjQ0LjM3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_53a34079e38b4944b746c6171245066f.setContent(i_frame_f76c26174a434ed6a31eab2b1b7e85cb);
        

        marker_18c252ef05b64ff2a0e98df335ee1231.bindPopup(popup_53a34079e38b4944b746c6171245066f)
        ;

        
    
    
            var marker_c1a79b3b878949ec8401c93c2e509b39 = L.marker(
                [44.832060999999996, 11.295803999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_97b07c07493e4d9594a3f8dd0d0c8865 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c1a79b3b878949ec8401c93c2e509b39.setIcon(icon_97b07c07493e4d9594a3f8dd0d0c8865);
        
    
        var popup_cad2c0f1294e4290a1f37fd858bfb960 = L.popup({"maxWidth": 2650});

        
            var i_frame_bf25657e14a64c51a5e0106adba72f4b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIEJvcnRvbGF6emkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cad2c0f1294e4290a1f37fd858bfb960.setContent(i_frame_bf25657e14a64c51a5e0106adba72f4b);
        

        marker_c1a79b3b878949ec8401c93c2e509b39.bindPopup(popup_cad2c0f1294e4290a1f37fd858bfb960)
        ;

        
    
    
            var marker_58964cd62c9941739a7f052977ad90d6 = L.marker(
                [44.893629, 10.900725999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_382615613752411c86bb68880ee74178 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_58964cd62c9941739a7f052977ad90d6.setIcon(icon_382615613752411c86bb68880ee74178);
        
    
        var popup_30802110a6dd4e80b0ac227ad61000a0 = L.popup({"maxWidth": 2650});

        
            var i_frame_18090a0890104695836159c756f7dd71 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBDaXZpY2EgLSBUb3JyZSBkZWxsJ09yb2xvZ2lvICA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_30802110a6dd4e80b0ac227ad61000a0.setContent(i_frame_18090a0890104695836159c756f7dd71);
        

        marker_58964cd62c9941739a7f052977ad90d6.bindPopup(popup_30802110a6dd4e80b0ac227ad61000a0)
        ;

        
    
    
            var marker_c23884cc8c3148e8b74353a6b85c7233 = L.marker(
                [44.892353, 10.899925],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_47aec9e4e15547198cd1a3a0c200cc90 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c23884cc8c3148e8b74353a6b85c7233.setIcon(icon_47aec9e4e15547198cd1a3a0c200cc90);
        
    
        var popup_7069eb4033b6412d891fdf8d17ff26e1 = L.popup({"maxWidth": 2650});

        
            var i_frame_07c113132eae4252b533c51dbba4dde2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gc29jaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7069eb4033b6412d891fdf8d17ff26e1.setContent(i_frame_07c113132eae4252b533c51dbba4dde2);
        

        marker_c23884cc8c3148e8b74353a6b85c7233.bindPopup(popup_7069eb4033b6412d891fdf8d17ff26e1)
        ;

        
    
    
            var marker_a1a5e4d948d346e3a18405da4de895cb = L.marker(
                [44.840562, 10.954057],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_035bb62e6d6247eeb3022b36eaefed7d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a1a5e4d948d346e3a18405da4de895cb.setIcon(icon_035bb62e6d6247eeb3022b36eaefed7d);
        
    
        var popup_0d83bc92eae34a71b7644a597d8deeba = L.popup({"maxWidth": 2650});

        
            var i_frame_d8383a71b9a749cf8e972b76242290b2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTZWRlIGFzc29jaWF6aW9uaSAtIEFSQ0kgZGkgUm92ZXJldG8gLSAgZXggT01OSSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0d83bc92eae34a71b7644a597d8deeba.setContent(i_frame_d8383a71b9a749cf8e972b76242290b2);
        

        marker_a1a5e4d948d346e3a18405da4de895cb.bindPopup(popup_0d83bc92eae34a71b7644a597d8deeba)
        ;

        
    
    
            var marker_86b3f695cc224d57b764b27f181d7873 = L.marker(
                [44.840609, 10.954292],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bffbfbfbec9b469bb97846c3aab3cf09 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_86b3f695cc224d57b764b27f181d7873.setIcon(icon_bffbfbfbec9b469bb97846c3aab3cf09);
        
    
        var popup_b76849f33f7f4dfd817fd16acfb381d3 = L.popup({"maxWidth": 2650});

        
            var i_frame_456c9b8b97f64fbe96b6047ba9d7531e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgRWxlbWVudGFyZSBlIE1lZGlhIGRpIFJvdmVyZXRvIFMvUyBDZXNhcmUgQmF0dGlzdGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzEwNjg1LjgyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b76849f33f7f4dfd817fd16acfb381d3.setContent(i_frame_456c9b8b97f64fbe96b6047ba9d7531e);
        

        marker_86b3f695cc224d57b764b27f181d7873.bindPopup(popup_b76849f33f7f4dfd817fd16acfb381d3)
        ;

        
    
    
            var marker_9865727c7da8413682ad90e176b0d697 = L.marker(
                [44.882838, 10.896075],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_6ed5ab5199b04ca68c57d0ea036cdca0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9865727c7da8413682ad90e176b0d697.setIcon(icon_6ed5ab5199b04ca68c57d0ea036cdca0);
        
    
        var popup_b6043c76d54e48f79199e4a776979bb0 = L.popup({"maxWidth": 2650});

        
            var i_frame_d06ef26985264da8b8d4b1ab7c919c37 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYWxhIGRlbGxhIENvcnRlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyOTEwNS4xIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b6043c76d54e48f79199e4a776979bb0.setContent(i_frame_d06ef26985264da8b8d4b1ab7c919c37);
        

        marker_9865727c7da8413682ad90e176b0d697.bindPopup(popup_b6043c76d54e48f79199e4a776979bb0)
        ;

        
    
    
            var marker_f5e54065b2f74d18bb3fc0c6b73ce7b7 = L.marker(
                [44.885128, 11.418375],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_58691f5a55cc4a98ba607df1642c1a44 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_f5e54065b2f74d18bb3fc0c6b73ce7b7.setIcon(icon_58691f5a55cc4a98ba607df1642c1a44);
        
    
        var popup_3595888e8a844c18854567664142830b = L.popup({"maxWidth": 2650});

        
            var i_frame_6b786d5fd3b54464903f39a9326571a0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3595888e8a844c18854567664142830b.setContent(i_frame_6b786d5fd3b54464903f39a9326571a0);
        

        marker_f5e54065b2f74d18bb3fc0c6b73ce7b7.bindPopup(popup_3595888e8a844c18854567664142830b)
        ;

        
    
    
            var marker_013624d853124ac8b0de4dd186d54766 = L.marker(
                [44.88505, 11.41991],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c538c1f29d50408dbcf147e95b4ad3e9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_013624d853124ac8b0de4dd186d54766.setIcon(icon_c538c1f29d50408dbcf147e95b4ad3e9);
        
    
        var popup_46293c0bb47347a587aec5fdbc326cd0 = L.popup({"maxWidth": 2650});

        
            var i_frame_3de001fd986646bf918b3fdd2c77ef39 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIEJvdHRhenppL1BhbGF6em8gZGVsIHJpY292ZXJvIEJvdHRhenppIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_46293c0bb47347a587aec5fdbc326cd0.setContent(i_frame_3de001fd986646bf918b3fdd2c77ef39);
        

        marker_013624d853124ac8b0de4dd186d54766.bindPopup(popup_46293c0bb47347a587aec5fdbc326cd0)
        ;

        
    
    
            var marker_d1c2c1a4b0de402ebdccf5da4d837b1d = L.marker(
                [44.713795000000005, 11.306689],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_39968d5d81fe49b2b665a32c5ed0543f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d1c2c1a4b0de402ebdccf5da4d837b1d.setIcon(icon_39968d5d81fe49b2b665a32c5ed0543f);
        
    
        var popup_dd92ef66453944649fd64e13c1bfa112 = L.popup({"maxWidth": 2650});

        
            var i_frame_aa92acce1162447d8e125d3201e1a7f6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIE1hc3RlbGxhcmkgLSBQaW5hY290ZWNhIENvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxNDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTQwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dd92ef66453944649fd64e13c1bfa112.setContent(i_frame_aa92acce1162447d8e125d3201e1a7f6);
        

        marker_d1c2c1a4b0de402ebdccf5da4d837b1d.bindPopup(popup_dd92ef66453944649fd64e13c1bfa112)
        ;

        
    
    
            var marker_dea3d1473e7140ac86ef2609223c7347 = L.marker(
                [44.711348, 11.306886],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ab14a95831d3475ebda228c13da90129 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_dea3d1473e7140ac86ef2609223c7347.setIcon(icon_ab14a95831d3475ebda228c13da90129);
        
    
        var popup_0b92442e596d48e1803ee01ed048dad8 = L.popup({"maxWidth": 2650});

        
            var i_frame_4715c9b4195e4ec6aaf2569ec0ccbf75 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgRWxlbWVudGFyZSBEZSBBbWljaXMgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDU5OTU4My4xNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgODAyOTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0b92442e596d48e1803ee01ed048dad8.setContent(i_frame_4715c9b4195e4ec6aaf2569ec0ccbf75);
        

        marker_dea3d1473e7140ac86ef2609223c7347.bindPopup(popup_0b92442e596d48e1803ee01ed048dad8)
        ;

        
    
    
            var marker_7d83b0258eb84125a0ca45ffdd7475b5 = L.marker(
                [44.785075, 11.170657],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_386db3c4fa5243a6a9e7c785cda749c1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7d83b0258eb84125a0ca45ffdd7475b5.setIcon(icon_386db3c4fa5243a6a9e7c785cda749c1);
        
    
        var popup_16f39c71ebea4a93a22d1295e2075c89 = L.popup({"maxWidth": 2650});

        
            var i_frame_46624ce9eb2745f5ae5474c4f89bbc28 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDYXNlbGxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_16f39c71ebea4a93a22d1295e2075c89.setContent(i_frame_46624ce9eb2745f5ae5474c4f89bbc28);
        

        marker_7d83b0258eb84125a0ca45ffdd7475b5.bindPopup(popup_16f39c71ebea4a93a22d1295e2075c89)
        ;

        
    
    
            var marker_88134b7fe30b44d5b687df790cd64aca = L.marker(
                [44.7901, 11.235695],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9784d3995d744f0ab9ffd6eaaf458995 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_88134b7fe30b44d5b687df790cd64aca.setIcon(icon_9784d3995d744f0ab9ffd6eaaf458995);
        
    
        var popup_fb776d523aca4a4b983e1e76e0efee9f = L.popup({"maxWidth": 2650});

        
            var i_frame_d5e6a3e834de4c04bb894edfce8aef52 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBQYWxhdGEgUGVwb2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fb776d523aca4a4b983e1e76e0efee9f.setContent(i_frame_d5e6a3e834de4c04bb894edfce8aef52);
        

        marker_88134b7fe30b44d5b687df790cd64aca.bindPopup(popup_fb776d523aca4a4b983e1e76e0efee9f)
        ;

        
    
    
            var marker_b6f694a220cb4bf583513b7acca60042 = L.marker(
                [44.755973, 11.138436],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_358e2a3d095a4448ac78488d5fa0cdff = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b6f694a220cb4bf583513b7acca60042.setIcon(icon_358e2a3d095a4448ac78488d5fa0cdff);
        
    
        var popup_f4d46c214e614547bf97331501244b26 = L.popup({"maxWidth": 2650});

        
            var i_frame_8e8571f609f540de88808da7876508a3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIHJvY2NhL2Nhc3RlbGxvIC0gYWxhIG5vcmQgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f4d46c214e614547bf97331501244b26.setContent(i_frame_8e8571f609f540de88808da7876508a3);
        

        marker_b6f694a220cb4bf583513b7acca60042.bindPopup(popup_f4d46c214e614547bf97331501244b26)
        ;

        
    
    
            var marker_b018526efa0e4d698c6279ea329241b9 = L.marker(
                [44.755916, 11.138366],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_cf2cec7492f34604b3c5ef9ff519dda3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b018526efa0e4d698c6279ea329241b9.setIcon(icon_cf2cec7492f34604b3c5ef9ff519dda3);
        
    
        var popup_55368948263d49af8ebc3fda0f010be4 = L.popup({"maxWidth": 2650});

        
            var i_frame_66b8bcedb82c4025aa277210a1d290e2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIHJvY2NhL2Nhc3RlbGxvIC0gYWxhIHN1ZCA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_55368948263d49af8ebc3fda0f010be4.setContent(i_frame_66b8bcedb82c4025aa277210a1d290e2);
        

        marker_b018526efa0e4d698c6279ea329241b9.bindPopup(popup_55368948263d49af8ebc3fda0f010be4)
        ;

        
    
    
            var marker_73c304a4365943528d125d5ee2de981d = L.marker(
                [44.755911, 11.138419],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_985ccf5573854d4b8cc7638d383307c1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_73c304a4365943528d125d5ee2de981d.setIcon(icon_985ccf5573854d4b8cc7638d383307c1);
        
    
        var popup_266b24d210a842b6b954baf3047b383d = L.popup({"maxWidth": 2650});

        
            var i_frame_06c4713d75c64222a2b7cd359b8e988e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIHJvY2NhL2Nhc3RlbGxvIC0gdmlsbGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_266b24d210a842b6b954baf3047b383d.setContent(i_frame_06c4713d75c64222a2b7cd359b8e988e);
        

        marker_73c304a4365943528d125d5ee2de981d.bindPopup(popup_266b24d210a842b6b954baf3047b383d)
        ;

        
    
    
            var marker_46e8da1b0bcc40a9b8155b82e3276c9c = L.marker(
                [44.755872, 11.138309],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_21d1746e193c4e22976d9da91b96103f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_46e8da1b0bcc40a9b8155b82e3276c9c.setIcon(icon_21d1746e193c4e22976d9da91b96103f);
        
    
        var popup_fd8102b074cb49d6b66e35fd1d9dab57 = L.popup({"maxWidth": 2650});

        
            var i_frame_10a07333e0864879ae6b22f9921386ff = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fd8102b074cb49d6b66e35fd1d9dab57.setContent(i_frame_10a07333e0864879ae6b22f9921386ff);
        

        marker_46e8da1b0bcc40a9b8155b82e3276c9c.bindPopup(popup_fd8102b074cb49d6b66e35fd1d9dab57)
        ;

        
    
    
            var marker_367105390fa740a8a06c28fd97732d95 = L.marker(
                [44.795695, 11.276407],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_81cd2a076cc1488db7cbac0705fe2ac9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_367105390fa740a8a06c28fd97732d95.setIcon(icon_81cd2a076cc1488db7cbac0705fe2ac9);
        
    
        var popup_12b6a6d1f4264a29963088ccef5e111a = L.popup({"maxWidth": 2650});

        
            var i_frame_e8cd4fae4cd14c29a3cbe855253f8567 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBHYWxlYXp6YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_12b6a6d1f4264a29963088ccef5e111a.setContent(i_frame_e8cd4fae4cd14c29a3cbe855253f8567);
        

        marker_367105390fa740a8a06c28fd97732d95.bindPopup(popup_12b6a6d1f4264a29963088ccef5e111a)
        ;

        
    
    
            var marker_62a7cc20e325493d8470b827296af474 = L.marker(
                [44.715628, 11.149877],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8992e7f1f356481a939ce975f64e78c9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_62a7cc20e325493d8470b827296af474.setIcon(icon_8992e7f1f356481a939ce975f64e78c9);
        
    
        var popup_81201dd86b7c4b5fb8fceb54f1490476 = L.popup({"maxWidth": 2650});

        
            var i_frame_b7b7928a6768451ca804f01aaa84a70b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRlbCBNYWlhbGUvRmFiYnJpY2F0byBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_81201dd86b7c4b5fb8fceb54f1490476.setContent(i_frame_b7b7928a6768451ca804f01aaa84a70b);
        

        marker_62a7cc20e325493d8470b827296af474.bindPopup(popup_81201dd86b7c4b5fb8fceb54f1490476)
        ;

        
    
    
            var marker_5ae9b1b7941c4ddca978dfd26597839e = L.marker(
                [44.722532, 11.146998],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ae30aca0e28a4e65a82d036ae83cf038 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5ae9b1b7941c4ddca978dfd26597839e.setIcon(icon_ae30aca0e28a4e65a82d036ae83cf038);
        
    
        var popup_7405fe754b3e4d869820353a133dd6d8 = L.popup({"maxWidth": 2650});

        
            var i_frame_3b5defc3e1b644919c6b006dc28fa0f3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGNvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTczODg4LjczIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7405fe754b3e4d869820353a133dd6d8.setContent(i_frame_3b5defc3e1b644919c6b006dc28fa0f3);
        

        marker_5ae9b1b7941c4ddca978dfd26597839e.bindPopup(popup_7405fe754b3e4d869820353a133dd6d8)
        ;

        
    
    
            var marker_e2de34cc2c8d416ba20332dcffaf33f0 = L.marker(
                [44.722753000000004, 11.147406],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ab953d8d640a4e948ce43da90bd65ad1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e2de34cc2c8d416ba20332dcffaf33f0.setIcon(icon_ab953d8d640a4e948ce43da90bd65ad1);
        
    
        var popup_0c3098dbc75b46648d0fac4f692107b6 = L.popup({"maxWidth": 2650});

        
            var i_frame_65dff5856e0e47d0bee2f52a5546e396 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBjYW1wYW5hcmlhIChkZWxsYSBjaGllc2EgZGkgU2FuIFNpbHZlc3RybykgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0c3098dbc75b46648d0fac4f692107b6.setContent(i_frame_65dff5856e0e47d0bee2f52a5546e396);
        

        marker_e2de34cc2c8d416ba20332dcffaf33f0.bindPopup(popup_0c3098dbc75b46648d0fac4f692107b6)
        ;

        
    
    
            var marker_eab4f312253047a69677a9b6bca84312 = L.marker(
                [44.728111, 11.150314],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_91ba05d82dec4a8c966152cc8514b04a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_eab4f312253047a69677a9b6bca84312.setIcon(icon_91ba05d82dec4a8c966152cc8514b04a);
        
    
        var popup_8d27e54c9fe3403d9dfe131bfc8dabde = L.popup({"maxWidth": 2650});

        
            var i_frame_a0270f7bad55440abc88f93375130026 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBDb211bmFsZSAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI3ODE3NzAuMzggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDM3NTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8d27e54c9fe3403d9dfe131bfc8dabde.setContent(i_frame_a0270f7bad55440abc88f93375130026);
        

        marker_eab4f312253047a69677a9b6bca84312.bindPopup(popup_8d27e54c9fe3403d9dfe131bfc8dabde)
        ;

        
    
    
            var marker_09c628b8fa90479e86f383e9d36c6d31 = L.marker(
                [44.723477, 11.145621],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c04cae30eaeb4350a4638ed8c8ca2f60 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_09c628b8fa90479e86f383e9d36c6d31.setIcon(icon_c04cae30eaeb4350a4638ed8c8ca2f60);
        
    
        var popup_f622a874c77f4ac49543a69d63d2de2e = L.popup({"maxWidth": 2650});

        
            var i_frame_35c8aedc85304df687f37170cd9c2eda = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgU1MuIENvbmNlemlvbmUgZSBPcmF0b3JpbyBkZWxsYSBwaWV0w6AvQ2hpZXNhIGRlbGwnSW1tYWNvbGF0YSBDb25jZXppb25lIGUgdG9ycmUgY2FtcGFuYXJpYSBjaGllc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyODQyNC45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f622a874c77f4ac49543a69d63d2de2e.setContent(i_frame_35c8aedc85304df687f37170cd9c2eda);
        

        marker_09c628b8fa90479e86f383e9d36c6d31.bindPopup(popup_f622a874c77f4ac49543a69d63d2de2e)
        ;

        
    
    
            var marker_4dfdcebbc22c40c88478ae29698bf48e = L.marker(
                [44.702391999999996, 11.167147],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c6d379b7f1c84394b155ea9d684c8904 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4dfdcebbc22c40c88478ae29698bf48e.setIcon(icon_c6d379b7f1c84394b155ea9d684c8904);
        
    
        var popup_6af4e83611b642858872a163029384e3 = L.popup({"maxWidth": 2650});

        
            var i_frame_e2248ae4d0c94a4092bc433d6edbd169 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2l1c2VwcGUvQ2hpZXNhIGRlbGxhIEd1aXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDExODY0OS44MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6af4e83611b642858872a163029384e3.setContent(i_frame_e2248ae4d0c94a4092bc433d6edbd169);
        

        marker_4dfdcebbc22c40c88478ae29698bf48e.bindPopup(popup_6af4e83611b642858872a163029384e3)
        ;

        
    
    
            var marker_d8b7b929935d4e7c9f996d1f0b2d998d = L.marker(
                [44.762121, 11.472714999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_29456d3efceb4b5d8f10ca26af73f65b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d8b7b929935d4e7c9f996d1f0b2d998d.setIcon(icon_29456d3efceb4b5d8f10ca26af73f65b);
        
    
        var popup_201db1119e6d48d69150f5a3f8e159e9 = L.popup({"maxWidth": 2650});

        
            var i_frame_4de2ce41c4ea49639d7e8b754cf9590e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIChhYmJhemlhbGUpIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNDcwNDUuNTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_201db1119e6d48d69150f5a3f8e159e9.setContent(i_frame_4de2ce41c4ea49639d7e8b754cf9590e);
        

        marker_d8b7b929935d4e7c9f996d1f0b2d998d.bindPopup(popup_201db1119e6d48d69150f5a3f8e159e9)
        ;

        
    
    
            var marker_3854bc2e53a04e11a433540ef77617bc = L.marker(
                [44.777570000000004, 11.425892999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_23412f8eda6a400592caf138b405e26f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3854bc2e53a04e11a433540ef77617bc.setIcon(icon_23412f8eda6a400592caf138b405e26f);
        
    
        var popup_a8a071c65dd04638a24ccca3af526b86 = L.popup({"maxWidth": 2650});

        
            var i_frame_b77b6a35d26249f2965b668564b5f716 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIGRlY29sbGF0byBjaGllc2EgY29uIGNhbXBhbmlsZSBlIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMDY4Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a8a071c65dd04638a24ccca3af526b86.setContent(i_frame_b77b6a35d26249f2965b668564b5f716);
        

        marker_3854bc2e53a04e11a433540ef77617bc.bindPopup(popup_a8a071c65dd04638a24ccca3af526b86)
        ;

        
    
    
            var marker_fe09e0d9900a4eed8ec893e79f91ad51 = L.marker(
                [44.825458000000005, 11.461103],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7109cee2d32e44c0ad262eb483ea1490 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_fe09e0d9900a4eed8ec893e79f91ad51.setIcon(icon_7109cee2d32e44c0ad262eb483ea1490);
        
    
        var popup_de7513cbe7f64e349be7a5f92006c05c = L.popup({"maxWidth": 2650});

        
            var i_frame_926e65ba9fc04b47befe19619d133b74 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gZGVsbGEgQ2hpZXNhIFBhcnJvY2NoaWFsZSBkaSBTYW4gUGFvbG8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQUJFTExPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyODAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_de7513cbe7f64e349be7a5f92006c05c.setContent(i_frame_926e65ba9fc04b47befe19619d133b74);
        

        marker_fe09e0d9900a4eed8ec893e79f91ad51.bindPopup(popup_de7513cbe7f64e349be7a5f92006c05c)
        ;

        
    
    
            var marker_b713929f73e840ee82838e8a68a5b08b = L.marker(
                [44.763938, 11.288326],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0129cf1277504b66b08757e51a1a0acc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b713929f73e840ee82838e8a68a5b08b.setIcon(icon_0129cf1277504b66b08757e51a1a0acc);
        
    
        var popup_18927eec2c86420793d26c5f8b33d2e7 = L.popup({"maxWidth": 2650});

        
            var i_frame_e63600447e5841e7affdba1e6c7873ed = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBCZWF0YSBWZXJnaW5lIGRlbCBDYXJtaW5lL2RlbGxhIE1hZG9ubmEgZGVsIENhcm1pbmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDIyNTIxNy43NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTQ2ODcuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_18927eec2c86420793d26c5f8b33d2e7.setContent(i_frame_e63600447e5841e7affdba1e6c7873ed);
        

        marker_b713929f73e840ee82838e8a68a5b08b.bindPopup(popup_18927eec2c86420793d26c5f8b33d2e7)
        ;

        
    
    
            var marker_065394baac9f4ae89a8f4cd73b68a726 = L.marker(
                [44.814989000000004, 11.306716999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_6917698204b34fe0a6984e361bb45014 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_065394baac9f4ae89a8f4cd73b68a726.setIcon(icon_6917698204b34fe0a6984e361bb45014);
        
    
        var popup_f90a4c27ae7041569ec7bc57968fe26b = L.popup({"maxWidth": 2650});

        
            var i_frame_30d17011bbba412dac8e8624d1ce1482 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlbCBTYWxpY2UgZSBwZXJ0aW5lbnplIHBhbGF6em8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgOTE4Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f90a4c27ae7041569ec7bc57968fe26b.setContent(i_frame_30d17011bbba412dac8e8624d1ce1482);
        

        marker_065394baac9f4ae89a8f4cd73b68a726.bindPopup(popup_f90a4c27ae7041569ec7bc57968fe26b)
        ;

        
    
    
            var marker_9884762f32744ba68955ecd9fcc493c8 = L.marker(
                [44.814842999999996, 11.306874],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_689be87e2958484babeabcdfa5def254 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9884762f32744ba68955ecd9fcc493c8.setIcon(icon_689be87e2958484babeabcdfa5def254);
        
    
        var popup_d871565fcd4a42b48f138004233b24e1 = L.popup({"maxWidth": 2650});

        
            var i_frame_d92833b4502f4c8292a0d0c7b0e64282 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlbCBTYWxpY2UgZSBwZXJ0aW5lbnplIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI4NTYyLjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d871565fcd4a42b48f138004233b24e1.setContent(i_frame_d92833b4502f4c8292a0d0c7b0e64282);
        

        marker_9884762f32744ba68955ecd9fcc493c8.bindPopup(popup_d871565fcd4a42b48f138004233b24e1)
        ;

        
    
    
            var marker_c61c45e9d2564812880b79aec355ae92 = L.marker(
                [44.815426, 11.307553],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5a2576587e2147118190332a011243da = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c61c45e9d2564812880b79aec355ae92.setIcon(icon_5a2576587e2147118190332a011243da);
        
    
        var popup_3a7099a811b74accbf37d9168bb71c37 = L.popup({"maxWidth": 2650});

        
            var i_frame_cf5c4aed02764011b3c59ca08db6669c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZCdpbmZhbnppYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMDA0NjguNzUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3a7099a811b74accbf37d9168bb71c37.setContent(i_frame_cf5c4aed02764011b3c59ca08db6669c);
        

        marker_c61c45e9d2564812880b79aec355ae92.bindPopup(popup_3a7099a811b74accbf37d9168bb71c37)
        ;

        
    
    
            var marker_25bba82903e843d0a19816f0b720fc33 = L.marker(
                [44.729263, 11.290416],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_12e05ec5c5914e2fa7d152de7ae67d5b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_25bba82903e843d0a19816f0b720fc33.setIcon(icon_12e05ec5c5914e2fa7d152de7ae67d5b);
        
    
        var popup_3b4eca246f8544c5ada5ae5bddd5d1ef = L.popup({"maxWidth": 2650});

        
            var i_frame_ac8263f6587a4124bdddec6920f2422f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIFJvc2FyaW8vQ2hpZXNhIGRlbGxhIE1hZG9ubmEgZGVsIFJvc2FyaW8gZSBjYW1wYW5pbGUvQ2hpZXNhIGRlbCBHdWVyY2lubyBlIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA3NzgxMi41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3b4eca246f8544c5ada5ae5bddd5d1ef.setContent(i_frame_ac8263f6587a4124bdddec6920f2422f);
        

        marker_25bba82903e843d0a19816f0b720fc33.bindPopup(popup_3b4eca246f8544c5ada5ae5bddd5d1ef)
        ;

        
    
    
            var marker_1f2445277594453493f42ce638505351 = L.marker(
                [44.728196999999994, 11.286622999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_55491f0b01c740c98cce22198c6bc79e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_1f2445277594453493f42ce638505351.setIcon(icon_55491f0b01c740c98cce22198c6bc79e);
        
    
        var popup_5976624271ed442e96f5839545b9c973 = L.popup({"maxWidth": 2650});

        
            var i_frame_159699ac1cf042209b9d4e9a509af632 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgYWRkb2xvcmF0YSBkZXR0YSBEZWkgc2VydmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjEyNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5976624271ed442e96f5839545b9c973.setContent(i_frame_159699ac1cf042209b9d4e9a509af632);
        

        marker_1f2445277594453493f42ce638505351.bindPopup(popup_5976624271ed442e96f5839545b9c973)
        ;

        
    
    
            var marker_3845eae14ed149d6b73382a6cc408f74 = L.marker(
                [44.726064, 11.289144],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4b613fe65a224fada29264dee40222ee = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3845eae14ed149d6b73382a6cc408f74.setIcon(icon_4b613fe65a224fada29264dee40222ee);
        
    
        var popup_03754cca98b94002b45b903e5f0281b4 = L.popup({"maxWidth": 2650});

        
            var i_frame_386be10ac2d4495d9b793475d61c7378 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRmlsaXBwbyBOZXJpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA4NTQ4OTIuNzcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQxMjUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_03754cca98b94002b45b903e5f0281b4.setContent(i_frame_386be10ac2d4495d9b793475d61c7378);
        

        marker_3845eae14ed149d6b73382a6cc408f74.bindPopup(popup_03754cca98b94002b45b903e5f0281b4)
        ;

        
    
    
            var marker_2865028328284a76a7b93aff235eacc8 = L.marker(
                [44.728901, 11.289178999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b2ad91ee53e64897a5b511b5cd9084b0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2865028328284a76a7b93aff235eacc8.setIcon(icon_b2ad91ee53e64897a5b511b5cd9084b0);
        
    
        var popup_d8c745b509414662a7ddc996a2904486 = L.popup({"maxWidth": 2650});

        
            var i_frame_a65f75514dfe4a84a416fb7ca7570e71 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNb25hc3Rlcm8gZGVsIENvcnB1cyBEb21pbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzYyNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d8c745b509414662a7ddc996a2904486.setContent(i_frame_a65f75514dfe4a84a416fb7ca7570e71);
        

        marker_2865028328284a76a7b93aff235eacc8.bindPopup(popup_d8c745b509414662a7ddc996a2904486)
        ;

        
    
    
            var marker_a234c7c6c86f473192d2ed842d998cd7 = L.marker(
                [44.827622, 11.329044999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ed5795e6838d4f64852eb8a35edf4992 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a234c7c6c86f473192d2ed842d998cd7.setIcon(icon_ed5795e6838d4f64852eb8a35edf4992);
        
    
        var popup_0cd0043140f449fcb2e5d29a9e6401b3 = L.popup({"maxWidth": 2650});

        
            var i_frame_21617e1771f54a9da9c5cac088e1a3aa = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFubmEgZSBjYW1wYW5pbGUgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI1MDQ4My42NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTI2MDAuNTggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0cd0043140f449fcb2e5d29a9e6401b3.setContent(i_frame_21617e1771f54a9da9c5cac088e1a3aa);
        

        marker_a234c7c6c86f473192d2ed842d998cd7.bindPopup(popup_0cd0043140f449fcb2e5d29a9e6401b3)
        ;

        
    
    
            var marker_ef0f2c893a314941a1034adf51801c09 = L.marker(
                [44.763038, 11.269608999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c80d0747aff940809d20de5d66ca33d9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ef0f2c893a314941a1034adf51801c09.setIcon(icon_c80d0747aff940809d20de5d66ca33d9);
        
    
        var popup_d4a572a4aca24b2a8abb78e0376c6fd5 = L.popup({"maxWidth": 2650});

        
            var i_frame_8600a4cd437547309e5b65c1cf8e040b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2l1c2VwcGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDY0NzQ1LjUyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzNzUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d4a572a4aca24b2a8abb78e0376c6fd5.setContent(i_frame_8600a4cd437547309e5b65c1cf8e040b);
        

        marker_ef0f2c893a314941a1034adf51801c09.bindPopup(popup_d4a572a4aca24b2a8abb78e0376c6fd5)
        ;

        
    
    
            var marker_6b04d3ec2701468bab6fc8a218d92874 = L.marker(
                [44.795794, 11.322392],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8d6795890c9d485bbe95b4d323dbf8a1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6b04d3ec2701468bab6fc8a218d92874.setIcon(icon_8d6795890c9d485bbe95b4d323dbf8a1);
        
    
        var popup_20ed7a3273364dd0a9b1bc64ebb00e37 = L.popup({"maxWidth": 2650});

        
            var i_frame_1624b7d99c42434fa31dff1e040bc106 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgQmVhdGEgVmVyZ2luZSBBc3N1bnRhIC0gT3JhdG9yaW8gU2FudGEgTWFyaWEgZGVsIFBpbGFzdHJlbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMDE0MzMuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzQzNy41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_20ed7a3273364dd0a9b1bc64ebb00e37.setContent(i_frame_1624b7d99c42434fa31dff1e040bc106);
        

        marker_6b04d3ec2701468bab6fc8a218d92874.bindPopup(popup_20ed7a3273364dd0a9b1bc64ebb00e37)
        ;

        
    
    
            var marker_c4f1de25cbb548308035a071a47f9e1b = L.marker(
                [44.807524, 11.34399],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bd6edecb45944410a482141acf2edcd7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c4f1de25cbb548308035a071a47f9e1b.setIcon(icon_bd6edecb45944410a482141acf2edcd7);
        
    
        var popup_4fc145769d1040cd82b18fc83cb620fe = L.popup({"maxWidth": 2650});

        
            var i_frame_13ead13f799f459e9c7d3cffbc6b691f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gZGkgVG91cnMgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4fc145769d1040cd82b18fc83cb620fe.setContent(i_frame_13ead13f799f459e9c7d3cffbc6b691f);
        

        marker_c4f1de25cbb548308035a071a47f9e1b.bindPopup(popup_4fc145769d1040cd82b18fc83cb620fe)
        ;

        
    
    
            var marker_5f0f1d0ad84642bca668b613055658ba = L.marker(
                [44.807673, 11.344087],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2f3c87afa57c49508fbb4182bdbd653d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5f0f1d0ad84642bca668b613055658ba.setIcon(icon_2f3c87afa57c49508fbb4182bdbd653d);
        
    
        var popup_012e06425ebd45929299cfb13d9539b9 = L.popup({"maxWidth": 2650});

        
            var i_frame_8dd6cbc247d645a09e2daa80675edc62 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gZGkgVG91cnMgKmNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_012e06425ebd45929299cfb13d9539b9.setContent(i_frame_8dd6cbc247d645a09e2daa80675edc62);
        

        marker_5f0f1d0ad84642bca668b613055658ba.bindPopup(popup_012e06425ebd45929299cfb13d9539b9)
        ;

        
    
    
            var marker_34df251a1d164467803f09481aa51195 = L.marker(
                [44.772674, 11.048419],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bfce05ab2e654d26898874cf67b2dc3e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_34df251a1d164467803f09481aa51195.setIcon(icon_bfce05ab2e654d26898874cf67b2dc3e);
        
    
        var popup_7cd97365e2f142b5a7d4fd2be4138ef6 = L.popup({"maxWidth": 2650});

        
            var i_frame_285a991b69644a11ba8e2f6ba0585eee = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5vbmljYSBkZWxsYSBDaGllc2EgZGkgU2FuIFBpZXRybyBBcG9zdG9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTU2MjUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7cd97365e2f142b5a7d4fd2be4138ef6.setContent(i_frame_285a991b69644a11ba8e2f6ba0585eee);
        

        marker_34df251a1d164467803f09481aa51195.bindPopup(popup_7cd97365e2f142b5a7d4fd2be4138ef6)
        ;

        
    
    
            var marker_5bef4f1add7d4cddb5f17a8d0244e25b = L.marker(
                [44.802974, 11.052581],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9cf4871cc1c94f709d8aa7a70bdf1a71 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5bef4f1add7d4cddb5f17a8d0244e25b.setIcon(icon_9cf4871cc1c94f709d8aa7a70bdf1a71);
        
    
        var popup_bfd374346024434e9245b5bca1cde9d2 = L.popup({"maxWidth": 2650});

        
            var i_frame_0f825a6ac50d422f8c586e474014a2ef = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRlbCBTUy5tbyBOb21lIGRpIE1hcmlhIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTIxNjAyMC40NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDY2ODguNzIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bfd374346024434e9245b5bca1cde9d2.setContent(i_frame_0f825a6ac50d422f8c586e474014a2ef);
        

        marker_5bef4f1add7d4cddb5f17a8d0244e25b.bindPopup(popup_bfd374346024434e9245b5bca1cde9d2)
        ;

        
    
    
            var marker_7edf4eeec9c24b9a95cc1443200962fb = L.marker(
                [44.789828, 11.017455],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2b495495717e40bf9310691dbb2e89ac = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7edf4eeec9c24b9a95cc1443200962fb.setIcon(icon_2b495495717e40bf9310691dbb2e89ac);
        
    
        var popup_d7d2f1390a7a47399aa42a4e8e8a8538 = L.popup({"maxWidth": 2650});

        
            var i_frame_05ec8ccfdf5947f5b8ef218018f66778 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuUHJvc3Blcm8gVmVzY292byBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzQzNzUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d7d2f1390a7a47399aa42a4e8e8a8538.setContent(i_frame_05ec8ccfdf5947f5b8ef218018f66778);
        

        marker_7edf4eeec9c24b9a95cc1443200962fb.bindPopup(popup_d7d2f1390a7a47399aa42a4e8e8a8538)
        ;

        
    
    
            var marker_2ff0b97ee29943dfbd76e71a7fc146de = L.marker(
                [44.772689, 11.048685],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d0bb0ec7ab1b41899333c87a0ad603bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2ff0b97ee29943dfbd76e71a7fc146de.setIcon(icon_d0bb0ec7ab1b41899333c87a0ad603bb);
        
    
        var popup_032398c1e0844306998b16d707ae80d2 = L.popup({"maxWidth": 2650});

        
            var i_frame_e5171a55ced34c94af6109c186a01737 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBBcG9zdG9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDk4OTUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_032398c1e0844306998b16d707ae80d2.setContent(i_frame_e5171a55ced34c94af6109c186a01737);
        

        marker_2ff0b97ee29943dfbd76e71a7fc146de.bindPopup(popup_032398c1e0844306998b16d707ae80d2)
        ;

        
    
    
            var marker_f1e25777831f48ceb2276591d476c780 = L.marker(
                [44.843361, 11.144511],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9848a4582c8848fcbeb6b3053f7b7274 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_f1e25777831f48ceb2276591d476c780.setIcon(icon_9848a4582c8848fcbeb6b3053f7b7274);
        
    
        var popup_6972bb4c47b7465f92fa1ecd30a6d1ad = L.popup({"maxWidth": 2650});

        
            var i_frame_0a1a9247348649eaab4f11b89ea759f9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gR2l1c2VwcGUgbyBkZWxsYSBNYWRvbm5hIGRlbCBNdWxpbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6972bb4c47b7465f92fa1ecd30a6d1ad.setContent(i_frame_0a1a9247348649eaab4f11b89ea759f9);
        

        marker_f1e25777831f48ceb2276591d476c780.bindPopup(popup_6972bb4c47b7465f92fa1ecd30a6d1ad)
        ;

        
    
    
            var marker_216952ec91864301a315d69a03832257 = L.marker(
                [44.839465999999994, 11.140594],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_42b6a28e1f6645ddb1ef553eec6dc886 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_216952ec91864301a315d69a03832257.setIcon(icon_42b6a28e1f6645ddb1ef553eec6dc886);
        
    
        var popup_0c36a53630004274b5aac9a66b2305fb = L.popup({"maxWidth": 2650});

        
            var i_frame_23c63b9f1471415f9a6d3d2020ddfd8d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEZlbGljZSBWZXNjb3ZvIGUgTWFydGlyZS9DaGllc2EgZGkgUy4gRmVsaWNlIGUgUy4gR2VtaW5pYW5vL0R1b21vL0Nhbm9uaWNhIFZlY2NoaWEgKmNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0c36a53630004274b5aac9a66b2305fb.setContent(i_frame_23c63b9f1471415f9a6d3d2020ddfd8d);
        

        marker_216952ec91864301a315d69a03832257.bindPopup(popup_0c36a53630004274b5aac9a66b2305fb)
        ;

        
    
    
            var marker_46a84b49693647abaaf3130d4c4888fe = L.marker(
                [44.862082, 11.11777],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_27c3434ddb5f4afca69c247efa1c6cae = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_46a84b49693647abaaf3130d4c4888fe.setIcon(icon_27c3434ddb5f4afca69c247efa1c6cae);
        
    
        var popup_96cfaa536d954ac38a60572e4c786528 = L.popup({"maxWidth": 2650});

        
            var i_frame_b95a383c131d44d58454755dd9482a8d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBCaWFnaW8gVmVzY292by4gQ2hpZXNhIGRpIFNhbiBCaWFnaW8gKmNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_96cfaa536d954ac38a60572e4c786528.setContent(i_frame_b95a383c131d44d58454755dd9482a8d);
        

        marker_46a84b49693647abaaf3130d4c4888fe.bindPopup(popup_96cfaa536d954ac38a60572e4c786528)
        ;

        
    
    
            var marker_051e017389c443dfaf8f5333c86c1b90 = L.marker(
                [44.847821, 11.071196],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_949678be2dde48b498554ae3cbc74c14 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_051e017389c443dfaf8f5333c86c1b90.setIcon(icon_949678be2dde48b498554ae3cbc74c14);
        
    
        var popup_e9f2ee1d1ce94e638f8b67f5d58708c8 = L.popup({"maxWidth": 2650});

        
            var i_frame_125cd6c753954822a5cdc4d00a067ad7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlaSBTUy4gU2VuZXNpbyBlIFRlb3BvbXBvIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUVET0xMQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgODY4NzUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e9f2ee1d1ce94e638f8b67f5d58708c8.setContent(i_frame_125cd6c753954822a5cdc4d00a067ad7);
        

        marker_051e017389c443dfaf8f5333c86c1b90.bindPopup(popup_e9f2ee1d1ce94e638f8b67f5d58708c8)
        ;

        
    
    
            var marker_a7700669fc4f458388e3cabe23ddb758 = L.marker(
                [44.878912, 11.4101],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b51bf72a5c964f3f81781a09e7a87e8a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a7700669fc4f458388e3cabe23ddb758.setIcon(icon_b51bf72a5c964f3f81781a09e7a87e8a);
        
    
        var popup_d96b7a515dbe40cdacb52e5527a27f80 = L.popup({"maxWidth": 2650});

        
            var i_frame_7b1ad5d3ef9e4ee8b2a185fd95251da1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBFbWlzc2FyaWEgZGVsIGNhbmFsZSBlbWlzc2FyaW8gYWNxdWUgYmFzc2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNzY5MzkuMjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d96b7a515dbe40cdacb52e5527a27f80.setContent(i_frame_7b1ad5d3ef9e4ee8b2a185fd95251da1);
        

        marker_a7700669fc4f458388e3cabe23ddb758.bindPopup(popup_d96b7a515dbe40cdacb52e5527a27f80)
        ;

        
    
    
            var marker_d56f5d987d8544f98ce2572c44d0bf8b = L.marker(
                [44.872594, 11.049327],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7b2e0a5cee5d463795a3cd577c860cf8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d56f5d987d8544f98ce2572c44d0bf8b.setIcon(icon_7b2e0a5cee5d463795a3cd577c860cf8);
        
    
        var popup_b8bffa06343847468b9be19a4a24a745 = L.popup({"maxWidth": 2650});

        
            var i_frame_9a123924f2c3418aac8abb9b8bb4bf10 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBCZWF0YSBWZXJnaW5lIGRlbCBSb3NhcmlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b8bffa06343847468b9be19a4a24a745.setContent(i_frame_9a123924f2c3418aac8abb9b8bb4bf10);
        

        marker_d56f5d987d8544f98ce2572c44d0bf8b.bindPopup(popup_b8bffa06343847468b9be19a4a24a745)
        ;

        
    
    
            var marker_215963f863d740b7bf7f3961933e81e5 = L.marker(
                [44.756507, 11.310022],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bdc63c6353af4aa7b8dc71640867f2ab = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_215963f863d740b7bf7f3961933e81e5.setIcon(icon_bdc63c6353af4aa7b8dc71640867f2ab);
        
    
        var popup_b1bf60846b694852b307d8a3e48d3cee = L.popup({"maxWidth": 2650});

        
            var i_frame_b169ecf6c5cb4437a7f4e0299c960499 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsJ0ltbWFjb2xhdGEgQ29uY2V6aW9uZSBkaSBNYXJpYSBjaGllc2EgZSBjYW5vbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMTg3NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b1bf60846b694852b307d8a3e48d3cee.setContent(i_frame_b169ecf6c5cb4437a7f4e0299c960499);
        

        marker_215963f863d740b7bf7f3961933e81e5.bindPopup(popup_b1bf60846b694852b307d8a3e48d3cee)
        ;

        
    
    
            var marker_780e6d1a4d4d4e5eae44c722df34f488 = L.marker(
                [44.916534000000006, 10.857146],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d6239dc72e2e438488c742cfea956e42 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_780e6d1a4d4d4e5eae44c722df34f488.setIcon(icon_d6239dc72e2e438488c742cfea956e42);
        
    
        var popup_5304fb4696034405a355f21045390105 = L.popup({"maxWidth": 2650});

        
            var i_frame_40403966ab3d40d7a3d753ecbf5c75c4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgSXBzaWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5304fb4696034405a355f21045390105.setContent(i_frame_40403966ab3d40d7a3d753ecbf5c75c4);
        

        marker_780e6d1a4d4d4e5eae44c722df34f488.bindPopup(popup_5304fb4696034405a355f21045390105)
        ;

        
    
    
            var marker_f041bc53b9e44116a84d13d373bb90fa = L.marker(
                [44.919478999999995, 10.80363],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8861fab6c7a04e8ea4cacedeb21b5652 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_f041bc53b9e44116a84d13d373bb90fa.setIcon(icon_8861fab6c7a04e8ea4cacedeb21b5652);
        
    
        var popup_e7d26751fada49ef9dec6c0b48b25c51 = L.popup({"maxWidth": 2650});

        
            var i_frame_94309a432fc9405e91ac2342072901e8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gY29tdW5hbGUgUmluYWxkaSAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQ4Mjk4MC44OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjY1MDEuMjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e7d26751fada49ef9dec6c0b48b25c51.setContent(i_frame_94309a432fc9405e91ac2342072901e8);
        

        marker_f041bc53b9e44116a84d13d373bb90fa.bindPopup(popup_e7d26751fada49ef9dec6c0b48b25c51)
        ;

        
    
    
            var marker_30ceee5bbc114464b5734a027742beef = L.marker(
                [44.919938, 10.804646],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_41274bf5a5b04736bebb5f2aa2b0f66c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_30ceee5bbc114464b5734a027742beef.setIcon(icon_41274bf5a5b04736bebb5f2aa2b0f66c);
        
    
        var popup_82df7b1a9d1e4bd7804d8bc26571b77c = L.popup({"maxWidth": 2650});

        
            var i_frame_00c336134c3d4bebaf9b99affa0d296a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgbWVkaWEgJ0NhcmR1Y2NpJyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_82df7b1a9d1e4bd7804d8bc26571b77c.setContent(i_frame_00c336134c3d4bebaf9b99affa0d296a);
        

        marker_30ceee5bbc114464b5734a027742beef.bindPopup(popup_82df7b1a9d1e4bd7804d8bc26571b77c)
        ;

        
    
    
            var marker_ffec4204eea54ebab9e25e563a3ae37c = L.marker(
                [44.916701, 10.809804],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1bad621b75c44428ab5b9bb47aa3637d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ffec4204eea54ebab9e25e563a3ae37c.setIcon(icon_1bad621b75c44428ab5b9bb47aa3637d);
        
    
        var popup_d70db69e124d454190e15173e3207b55 = L.popup({"maxWidth": 2650});

        
            var i_frame_8ced139093194396aa905b96824dc804 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2V0dGEgYW5uZXNzYSBhbGxhIENhc2EgcHJvdGV0dGEgJ1ZpbGxhIEF1cm9yYScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d70db69e124d454190e15173e3207b55.setContent(i_frame_8ced139093194396aa905b96824dc804);
        

        marker_ffec4204eea54ebab9e25e563a3ae37c.bindPopup(popup_d70db69e124d454190e15173e3207b55)
        ;

        
    
    
            var marker_192305432e3c4135a85afe6f68ed27fe = L.marker(
                [44.917768, 10.803519],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5db13b2a119b4fa3a4715325ab15b8bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_192305432e3c4135a85afe6f68ed27fe.setIcon(icon_5db13b2a119b4fa3a4715325ab15b8bb);
        
    
        var popup_0e4aaf82975448c8847298e4ea076aa6 = L.popup({"maxWidth": 2650});

        
            var i_frame_7407f44ae2124564b2767e521d4b8b47 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsby9Sb2NjYSBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0e4aaf82975448c8847298e4ea076aa6.setContent(i_frame_7407f44ae2124564b2767e521d4b8b47);
        

        marker_192305432e3c4135a85afe6f68ed27fe.bindPopup(popup_0e4aaf82975448c8847298e4ea076aa6)
        ;

        
    
    
            var marker_00e20ff90b4a46ac8122bb1dcbf6a941 = L.marker(
                [44.869238, 11.388997999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_006e715d36c24d1e8f59dd59eb44bf68 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_00e20ff90b4a46ac8122bb1dcbf6a941.setIcon(icon_006e715d36c24d1e8f59dd59eb44bf68);
        
    
        var popup_0efad7383e8d4fc7b3303d86418f8d43 = L.popup({"maxWidth": 2650});

        
            var i_frame_50c7d6d2c0db4269839d23ca78ce8106 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb250cm9jaGlhdmljYSBJbXBpYW50byBTYW50YSBCaWFuY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTUwNTMxLjA3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0efad7383e8d4fc7b3303d86418f8d43.setContent(i_frame_50c7d6d2c0db4269839d23ca78ce8106);
        

        marker_00e20ff90b4a46ac8122bb1dcbf6a941.bindPopup(popup_0efad7383e8d4fc7b3303d86418f8d43)
        ;

        
    
    
            var marker_231340b9d37642d5a3fe50a5b8ea8126 = L.marker(
                [44.937606, 11.412397],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_58ac29d9bbeb4ccb842a797930014a09 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_231340b9d37642d5a3fe50a5b8ea8126.setIcon(icon_58ac29d9bbeb4ccb842a797930014a09);
        
    
        var popup_27f689cb827345509b28209adfd2fd99 = L.popup({"maxWidth": 2650});

        
            var i_frame_0c5f6d90dbb04316a707648e2e0e4093 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBRdWF0dHJvIENhc2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_27f689cb827345509b28209adfd2fd99.setContent(i_frame_0c5f6d90dbb04316a707648e2e0e4093);
        

        marker_231340b9d37642d5a3fe50a5b8ea8126.bindPopup(popup_27f689cb827345509b28209adfd2fd99)
        ;

        
    
    
            var marker_524d883aa53e4c0e86c9060991cb37c5 = L.marker(
                [44.889743, 11.064821],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_abd4715a24574f32a00aedac2c3dc16b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_524d883aa53e4c0e86c9060991cb37c5.setIcon(icon_abd4715a24574f32a00aedac2c3dc16b);
        
    
        var popup_9ac50ec28f2f48cba3bc64b8021464bd = L.popup({"maxWidth": 2650});

        
            var i_frame_7c64770cf7194d13b70f371786e092f5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjYXNhIGRlbCBmYXNjaW8gKGV4IEdpbCkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9ac50ec28f2f48cba3bc64b8021464bd.setContent(i_frame_7c64770cf7194d13b70f371786e092f5);
        

        marker_524d883aa53e4c0e86c9060991cb37c5.bindPopup(popup_9ac50ec28f2f48cba3bc64b8021464bd)
        ;

        
    
    
            var marker_0916505d87b0407faa173ccaccdc12fc = L.marker(
                [44.830147, 11.294767],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7f7a6efbb5db4b6787ff733999397c1e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0916505d87b0407faa173ccaccdc12fc.setIcon(icon_7f7a6efbb5db4b6787ff733999397c1e);
        
    
        var popup_deffb28f94bd4928b778b0d8ab33a925 = L.popup({"maxWidth": 2650});

        
            var i_frame_5c3d4fefa6cd45358fa1bd933350acf8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbCdBbm51bnppYXRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzI2NzEuNzggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_deffb28f94bd4928b778b0d8ab33a925.setContent(i_frame_5c3d4fefa6cd45358fa1bd933350acf8);
        

        marker_0916505d87b0407faa173ccaccdc12fc.bindPopup(popup_deffb28f94bd4928b778b0d8ab33a925)
        ;

        
    
    
            var marker_0d858b71f6924ca1aa7c97c8847a9f36 = L.marker(
                [44.830887, 11.295895],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_030c5af10f01499d9f7b33e7026bb40f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0d858b71f6924ca1aa7c97c8847a9f36.setIcon(icon_030c5af10f01499d9f7b33e7026bb40f);
        
    
        var popup_16531837a45142d6875e94583052df38 = L.popup({"maxWidth": 2650});

        
            var i_frame_2d0d5beec52940f9a869f7038bc5fe5f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgQ29uZnJhdGVybml0YSBkZWxsYSBCdW9uYSBNb3J0ZS9DaGllc2EgZGkgUy4gQmFydG9sb21lbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMTczMDc2LjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_16531837a45142d6875e94583052df38.setContent(i_frame_2d0d5beec52940f9a869f7038bc5fe5f);
        

        marker_0d858b71f6924ca1aa7c97c8847a9f36.bindPopup(popup_16531837a45142d6875e94583052df38)
        ;

        
    
    
            var marker_1a4fadc50ce84920a0a7bae256b818ad = L.marker(
                [44.888894, 11.064685],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ef59de1823de45a6b87a96664ede35f2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_1a4fadc50ce84920a0a7bae256b818ad.setIcon(icon_ef59de1823de45a6b87a96664ede35f2);
        
    
        var popup_ac19708aa73942b9a27c4a5af1879c59 = L.popup({"maxWidth": 2650});

        
            var i_frame_fda8e3f541db415c8d504ea384350140 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsbyBkZWkgUGljbyAocmVzdGkgVmVjY2hpbyBDYXN0ZWxsbyBQaWNvKSByb2NjYS9jYXN0ZWxsbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ac19708aa73942b9a27c4a5af1879c59.setContent(i_frame_fda8e3f541db415c8d504ea384350140);
        

        marker_1a4fadc50ce84920a0a7bae256b818ad.bindPopup(popup_ac19708aa73942b9a27c4a5af1879c59)
        ;

        
    
    
            var marker_7cce45b4366a48698aff266115077dbd = L.marker(
                [44.789532, 11.037818],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_29062102e5434c108e38c41b4c47ff29 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7cce45b4366a48698aff266115077dbd.setIcon(icon_29062102e5434c108e38c41b4c47ff29);
        
    
        var popup_38771bc015f04fba98ebb9be4855a504 = L.popup({"maxWidth": 2650});

        
            var i_frame_1ee2a79a69704b0cad3c45891c7146f8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTcGVyaW1lbnRhbGUgQWdyaWNvbHR1cmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzNDk5NTAuOTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE4NDE4Ljc1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_38771bc015f04fba98ebb9be4855a504.setContent(i_frame_1ee2a79a69704b0cad3c45891c7146f8);
        

        marker_7cce45b4366a48698aff266115077dbd.bindPopup(popup_38771bc015f04fba98ebb9be4855a504)
        ;

        
    
    
            var marker_83d6b1f158d54aa381a41e00271a893f = L.marker(
                [44.83874, 11.141031],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_af6c40fdbeaa4b5d9bf270ddc5d0d08d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_83d6b1f158d54aa381a41e00271a893f.setIcon(icon_af6c40fdbeaa4b5d9bf270ddc5d0d08d);
        
    
        var popup_9f5a03c17e6f47cba6665f4372eee240 = L.popup({"maxWidth": 2650});

        
            var i_frame_4584b22bac32449890692c5fa23f18d1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsby9Sb2NjYSBlc3RlbnNlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTA4Mzc5Mi4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTQxODkuNjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9f5a03c17e6f47cba6665f4372eee240.setContent(i_frame_4584b22bac32449890692c5fa23f18d1);
        

        marker_83d6b1f158d54aa381a41e00271a893f.bindPopup(popup_9f5a03c17e6f47cba6665f4372eee240)
        ;

        
    
    
            var marker_e9ceaaf728a94dc2a5d2d8b8698801e0 = L.marker(
                [44.839338, 11.141312],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_65e2202ba3d34147a7d8333e3269161d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e9ceaaf728a94dc2a5d2d8b8698801e0.setIcon(icon_65e2202ba3d34147a7d8333e3269161d);
        
    
        var popup_cb7a4e9b315041b2a43094cccbf4b5a7 = L.popup({"maxWidth": 2650});

        
            var i_frame_bfae8c40a8944babad2cb0b9882ab990 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE0MjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cb7a4e9b315041b2a43094cccbf4b5a7.setContent(i_frame_bfae8c40a8944babad2cb0b9882ab990);
        

        marker_e9ceaaf728a94dc2a5d2d8b8698801e0.bindPopup(popup_cb7a4e9b315041b2a43094cccbf4b5a7)
        ;

        
    
    
            var marker_181ed6cbf5204d609859fe726354b2c9 = L.marker(
                [44.839258, 11.143042],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9b91d737cb7c4a11a2a58666811727da = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_181ed6cbf5204d609859fe726354b2c9.setIcon(icon_9b91d737cb7c4a11a2a58666811727da);
        
    
        var popup_7f606fb4f70149b18137f76ad4bafc84 = L.popup({"maxWidth": 2650});

        
            var i_frame_e8a8bcce71c640f088559165a856fd3e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBkZWxs4oCZT3JvbG9naW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7f606fb4f70149b18137f76ad4bafc84.setContent(i_frame_e8a8bcce71c640f088559165a856fd3e);
        

        marker_181ed6cbf5204d609859fe726354b2c9.bindPopup(popup_7f606fb4f70149b18137f76ad4bafc84)
        ;

        
    
    
            var marker_fc5fa552439c46a58973221a89f1b7ba = L.marker(
                [44.837915, 11.144485000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_698d80fb279e425f8b1fef040e8862cd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_fc5fa552439c46a58973221a89f1b7ba.setIcon(icon_698d80fb279e425f8b1fef040e8862cd);
        
    
        var popup_798a867e37874cf79271755a74d1810b = L.popup({"maxWidth": 2650});

        
            var i_frame_ea8f8b1ff1e84fbf96f94cc8a4bf883d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNlcm1hIGRlaSBWaWdpbGkgZGVsIEZ1b2NvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_798a867e37874cf79271755a74d1810b.setContent(i_frame_ea8f8b1ff1e84fbf96f94cc8a4bf883d);
        

        marker_fc5fa552439c46a58973221a89f1b7ba.bindPopup(popup_798a867e37874cf79271755a74d1810b)
        ;

        
    
    
            var marker_32e070e1dced4c80b08a800b681e1645 = L.marker(
                [44.838784000000004, 11.141824],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_be4b6d8f8f9a4d3e9dc5de357ab18ed8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_32e070e1dced4c80b08a800b681e1645.setIcon(icon_be4b6d8f8f9a4d3e9dc5de357ab18ed8);
        
    
        var popup_9c9201ab1d584550b0deceadf566ad24 = L.popup({"maxWidth": 2650});

        
            var i_frame_e0f92377350d418ea81ad41eaf32e7b0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gY29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIyODUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9c9201ab1d584550b0deceadf566ad24.setContent(i_frame_e0f92377350d418ea81ad41eaf32e7b0);
        

        marker_32e070e1dced4c80b08a800b681e1645.bindPopup(popup_9c9201ab1d584550b0deceadf566ad24)
        ;

        
    
    
            var marker_d9f26356b7f94760aa057520b7fb4f4c = L.marker(
                [44.839524, 11.140191999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8eb780010750469da66307d7f99cc658 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d9f26356b7f94760aa057520b7fb4f4c.setIcon(icon_8eb780010750469da66307d7f99cc658);
        
    
        var popup_0bca24d491504b30a8fdcc46751e0727 = L.popup({"maxWidth": 2650});

        
            var i_frame_dde6476e6ccc46fb8a6a24398695f6d4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZXR0YSAvIFRvcnJlIEJvcmdvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0bca24d491504b30a8fdcc46751e0727.setContent(i_frame_dde6476e6ccc46fb8a6a24398695f6d4);
        

        marker_d9f26356b7f94760aa057520b7fb4f4c.bindPopup(popup_0bca24d491504b30a8fdcc46751e0727)
        ;

        
    
    
            var marker_5752144b136947e1a6979090f588a4c1 = L.marker(
                [44.828255, 10.947095],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b1b4ba155a4e49189e164fe236b84c03 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5752144b136947e1a6979090f588a4c1.setIcon(icon_b1b4ba155a4e49189e164fe236b84c03);
        
    
        var popup_164474566067451c8320fde65198c51b = L.popup({"maxWidth": 2650});

        
            var i_frame_1d94f87e3f3640758404f917c83fe308 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNhIE1hZ2lzdHJhdG8gZGVsIFBvIChFeCBzY3VvbGEgZWxlbWVudGFyZSBpbiBSb3ZlcmV0byBzL1MpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_164474566067451c8320fde65198c51b.setContent(i_frame_1d94f87e3f3640758404f917c83fe308);
        

        marker_5752144b136947e1a6979090f588a4c1.bindPopup(popup_164474566067451c8320fde65198c51b)
        ;

        
    
    
            var marker_8ce6876f4fb242f9bbca32ebcad200a7 = L.marker(
                [44.840872, 10.954243],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0803541506c147a18322aa640894a35d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8ce6876f4fb242f9bbca32ebcad200a7.setIcon(icon_0803541506c147a18322aa640894a35d);
        
    
        var popup_908ffd29382840c5a3972c8ab32d8a77 = L.popup({"maxWidth": 2650});

        
            var i_frame_8e8a5d436ead4acfa81a74ca200d4f65 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBEZWxlZ2F6aW9uZSBNdW5pY2lwYWxlIGluIFJvdmVyZXRvIHMvUyAgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDIzMDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTE1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_908ffd29382840c5a3972c8ab32d8a77.setContent(i_frame_8e8a5d436ead4acfa81a74ca200d4f65);
        

        marker_8ce6876f4fb242f9bbca32ebcad200a7.bindPopup(popup_908ffd29382840c5a3972c8ab32d8a77)
        ;

        
    
    
            var marker_0064e0fc9f5d42c994ed735ff5cb65b2 = L.marker(
                [44.877988, 11.41083],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3ed772e7741d4dc0aaef69d7d36b18af = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0064e0fc9f5d42c994ed735ff5cb65b2.setIcon(icon_3ed772e7741d4dc0aaef69d7d36b18af);
        
    
        var popup_a40bde34188e48c09ae30c7ea84c55b4 = L.popup({"maxWidth": 2650});

        
            var i_frame_14b485977cfe48bca2cdef782836bb48 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBCb25kZW5vLVBhbGF0YSBTYWxhIFBvbXBlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDczMjM4MC4wMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDE1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a40bde34188e48c09ae30c7ea84c55b4.setContent(i_frame_14b485977cfe48bca2cdef782836bb48);
        

        marker_0064e0fc9f5d42c994ed735ff5cb65b2.bindPopup(popup_a40bde34188e48c09ae30c7ea84c55b4)
        ;

        
    
    
            var marker_44c77f92e7cc4e5b9854ad47b0398702 = L.marker(
                [44.833205, 11.29684],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_fdf565d37ecf4a5aba6b08099fca63fd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_44c77f92e7cc4e5b9854ad47b0398702.setIcon(icon_fdf565d37ecf4a5aba6b08099fca63fd);
        
    
        var popup_5bf8e6fef8f14a1793ae39202fc90ee2 = L.popup({"maxWidth": 2650});

        
            var i_frame_8be8f9177a4a4b618bb580cf45aaf906 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBST0NDQS0gQ2FzdGVsbG8gZGVsbGUgUm9jY2hlLCBDYXN0ZWxsbyBlc3RlbnNlOyBDYXNhIFBpc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5bf8e6fef8f14a1793ae39202fc90ee2.setContent(i_frame_8be8f9177a4a4b618bb580cf45aaf906);
        

        marker_44c77f92e7cc4e5b9854ad47b0398702.bindPopup(popup_5bf8e6fef8f14a1793ae39202fc90ee2)
        ;

        
    
    
            var marker_e5df9c7151f24d448c299c9857a7d55c = L.marker(
                [44.83227, 11.293928999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d250bb1014784dbba094f02d8d5125e9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e5df9c7151f24d448c299c9857a7d55c.setIcon(icon_d250bb1014784dbba094f02d8d5125e9);
        
    
        var popup_4ab3457128f446b698f2e0542d2e153a = L.popup({"maxWidth": 2650});

        
            var i_frame_0b558eb151f3492bb2d75846eaec7de2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBkZWkgTW9kZW5lc2kgKG8gZGVsbCdPcm9sb2dpbykgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4ab3457128f446b698f2e0542d2e153a.setContent(i_frame_0b558eb151f3492bb2d75846eaec7de2);
        

        marker_e5df9c7151f24d448c299c9857a7d55c.bindPopup(popup_4ab3457128f446b698f2e0542d2e153a)
        ;

        
    
    
            var marker_2fe32410222c4a30a9c538c459e07fa8 = L.marker(
                [44.829197, 11.291825],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_236f8f998881435a869e510ed3f306c9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2fe32410222c4a30a9c538c459e07fa8.setIcon(icon_236f8f998881435a869e510ed3f306c9);
        
    
        var popup_0de2642ce9ef40de99887ac9648334ed = L.popup({"maxWidth": 2650});

        
            var i_frame_aff75991c6f1460195dd7f999c6f3e56 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBJc3JhZWxpdGljbyBlIHBlcnRpbmVuemUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0de2642ce9ef40de99887ac9648334ed.setContent(i_frame_aff75991c6f1460195dd7f999c6f3e56);
        

        marker_2fe32410222c4a30a9c538c459e07fa8.bindPopup(popup_0de2642ce9ef40de99887ac9648334ed)
        ;

        
    
    
            var marker_c0e9168e96c942f99ffda8f701fe45a9 = L.marker(
                [44.941998999999996, 11.006341],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c543c372160a44e3b29385fb4bcaa370 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c0e9168e96c942f99ffda8f701fe45a9.setIcon(icon_c543c372160a44e3b29385fb4bcaa370);
        
    
        var popup_e9a9ecb53e99442fba9cc6be581428fe = L.popup({"maxWidth": 2650});

        
            var i_frame_c9bcc4d389ad4c58a8215ae944df85f2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGEgZWxlbWVudGFyZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e9a9ecb53e99442fba9cc6be581428fe.setContent(i_frame_c9bcc4d389ad4c58a8215ae944df85f2);
        

        marker_c0e9168e96c942f99ffda8f701fe45a9.bindPopup(popup_e9a9ecb53e99442fba9cc6be581428fe)
        ;

        
    
    
            var marker_51ff420bf2df43acbb159f967de69c2c = L.marker(
                [44.821502, 11.007271000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a9f46ca83eb948e9b3e5b810f0e596a4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_51ff420bf2df43acbb159f967de69c2c.setIcon(icon_a9f46ca83eb948e9b3e5b810f0e596a4);
        
    
        var popup_897fd76941f348f8a37a98b3d64dcebd = L.popup({"maxWidth": 2650});

        
            var i_frame_0420844d6ee24cfeb92cdb7c925c55b8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGUgZGkgVWNjaXZlbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzQ0MzkuNjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_897fd76941f348f8a37a98b3d64dcebd.setContent(i_frame_0420844d6ee24cfeb92cdb7c925c55b8);
        

        marker_51ff420bf2df43acbb159f967de69c2c.bindPopup(popup_897fd76941f348f8a37a98b3d64dcebd)
        ;

        
    
    
            var marker_7d648922bb424e0cad229f33a33b5d2c = L.marker(
                [44.830763, 10.988649],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bbba14c3ba9c4542b32fa2df5453c562 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7d648922bb424e0cad229f33a33b5d2c.setIcon(icon_bbba14c3ba9c4542b32fa2df5453c562);
        
    
        var popup_05ae5f44260f4f109fe9dea157606f44 = L.popup({"maxWidth": 2650});

        
            var i_frame_21521bad25e54327b5a7fa5c6f03f715 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBNb3R0YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0NjM0NzEuMzkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIzMjg4LjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_05ae5f44260f4f109fe9dea157606f44.setContent(i_frame_21521bad25e54327b5a7fa5c6f03f715);
        

        marker_7d648922bb424e0cad229f33a33b5d2c.bindPopup(popup_05ae5f44260f4f109fe9dea157606f44)
        ;

        
    
    
            var marker_30d0759ef0904d99ac373f195db852dd = L.marker(
                [44.863144, 11.077029],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5269d14232ce403eb3aea1cbca969272 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_30d0759ef0904d99ac373f195db852dd.setIcon(icon_5269d14232ce403eb3aea1cbca969272);
        
    
        var popup_2410204eeffa4d6794f15a19302bf6c0 = L.popup({"maxWidth": 2650});

        
            var i_frame_a330c86a4c3b4bc381cc0b1024ca7009 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGUgY2Fub25pY2EgZGkgUy4gTHVjYSBFdmFuZ2VsaXN0YSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1FRE9MTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2410204eeffa4d6794f15a19302bf6c0.setContent(i_frame_a330c86a4c3b4bc381cc0b1024ca7009);
        

        marker_30d0759ef0904d99ac373f195db852dd.bindPopup(popup_2410204eeffa4d6794f15a19302bf6c0)
        ;

        
    
    
            var marker_7f2a73f9d0e24581a9b737015ebcff7c = L.marker(
                [44.834407, 11.061129],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_99c9c79757a84a508eb4a8a11f6ab33d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7f2a73f9d0e24581a9b737015ebcff7c.setIcon(icon_99c9c79757a84a508eb4a8a11f6ab33d);
        
    
        var popup_c6cd53fa6262447b9be0dcc09f01f78c = L.popup({"maxWidth": 2650});

        
            var i_frame_bcb9da6d13fa4657be3e89adb5a13818 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEJhcnRvbG9tZW8gQXBvc3RvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c6cd53fa6262447b9be0dcc09f01f78c.setContent(i_frame_bcb9da6d13fa4657be3e89adb5a13818);
        

        marker_7f2a73f9d0e24581a9b737015ebcff7c.bindPopup(popup_c6cd53fa6262447b9be0dcc09f01f78c)
        ;

        
    
    
            var marker_2dfd13184e174816aa25df278de5861d = L.marker(
                [44.83426, 11.295683],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_79a4bf7636f443519de9a14a4063212d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_2dfd13184e174816aa25df278de5861d.setIcon(icon_79a4bf7636f443519de9a14a4063212d);
        
    
        var popup_08f00578f88644f08cbfcdccf603042d = L.popup({"maxWidth": 2650});

        
            var i_frame_846695bbcb0448af9fb44dddadf89552 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIEJvcnNhcmkgZGkgRmluYWx2ZWNjaGlvIC0gRXggU2N1b2xhIG1hdGVybmEgU2Fjcm8gQ3VvcmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2MTA5My43IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_08f00578f88644f08cbfcdccf603042d.setContent(i_frame_846695bbcb0448af9fb44dddadf89552);
        

        marker_2dfd13184e174816aa25df278de5861d.bindPopup(popup_08f00578f88644f08cbfcdccf603042d)
        ;

        
    
    
            var marker_93a83cfe45b34a7b8a792153ad2e2661 = L.marker(
                [44.828121, 11.271633999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f97ce215fe404401983156a728c4df30 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_93a83cfe45b34a7b8a792153ad2e2661.setIcon(icon_f97ce215fe404401983156a728c4df30);
        
    
        var popup_990b3e9f265341ac8df2df33ca7900e1 = L.popup({"maxWidth": 2650});

        
            var i_frame_1496fe12630c484f84731038c14cb52c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBMb3JlbnpvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDIyMjYyLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_990b3e9f265341ac8df2df33ca7900e1.setContent(i_frame_1496fe12630c484f84731038c14cb52c);
        

        marker_93a83cfe45b34a7b8a792153ad2e2661.bindPopup(popup_990b3e9f265341ac8df2df33ca7900e1)
        ;

        
    
    
            var marker_c8966f2fbf274787bc273469464bda4f = L.marker(
                [44.83354, 11.318878],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_417e018f243e4b9584ec14a8a62fc958 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c8966f2fbf274787bc273469464bda4f.setIcon(icon_417e018f243e4b9584ec14a8a62fc958);
        
    
        var popup_9de6262e918146dd8096069453121e81 = L.popup({"maxWidth": 2650});

        
            var i_frame_f15cf1528bb64238b5c5bc641e4e3575 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIFZpc2l0YXppb25lIGRpIE1hcmlhIFNTLm1hIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE5MDI4NTAuMDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDk1NjI1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9de6262e918146dd8096069453121e81.setContent(i_frame_f15cf1528bb64238b5c5bc641e4e3575);
        

        marker_c8966f2fbf274787bc273469464bda4f.bindPopup(popup_9de6262e918146dd8096069453121e81)
        ;

        
    
    
            var marker_ae3a0e147a0b46ff9af272bd20865155 = L.marker(
                [44.834645, 11.297011999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d262b7e4c1e84be0a5c0c0b31c30f27d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ae3a0e147a0b46ff9af272bd20865155.setIcon(icon_d262b7e4c1e84be0a5c0c0b31c30f27d);
        
    
        var popup_f06468fcfe804190a53656828976b9ef = L.popup({"maxWidth": 2650});

        
            var i_frame_b8a07c2d79694bf0becae64aa95e6e69 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRnJhbmNlc2NvIGQnQXNzaXNpIGVkaWZpY2lvIHBhcnJvY2NoaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f06468fcfe804190a53656828976b9ef.setContent(i_frame_b8a07c2d79694bf0becae64aa95e6e69);
        

        marker_ae3a0e147a0b46ff9af272bd20865155.bindPopup(popup_f06468fcfe804190a53656828976b9ef)
        ;

        
    
    
            var marker_8bd37e0c9a154463ac56170b9f592721 = L.marker(
                [44.834631, 11.29683],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3b6c7cc3e2d141e98aea3c216aa6868e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8bd37e0c9a154463ac56170b9f592721.setIcon(icon_3b6c7cc3e2d141e98aea3c216aa6868e);
        
    
        var popup_9e765c1fa0b94a61b68ba4b24e47be9c = L.popup({"maxWidth": 2650});

        
            var i_frame_4a410ede349d4174a3595e0383baa6e6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRnJhbmNlc2NvIGQnQXNzaXNpIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9e765c1fa0b94a61b68ba4b24e47be9c.setContent(i_frame_4a410ede349d4174a3595e0383baa6e6);
        

        marker_8bd37e0c9a154463ac56170b9f592721.bindPopup(popup_9e765c1fa0b94a61b68ba4b24e47be9c)
        ;

        
    
    
            var marker_66aad007058441dfa620d9ac32773828 = L.marker(
                [44.834431, 11.302164],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_8f30f1b0703b41f6974af56a6fe60f03 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_66aad007058441dfa620d9ac32773828.setIcon(icon_8f30f1b0703b41f6974af56a6fe60f03);
        
    
        var popup_aafece9f35ef45b39e8d588e57544f79 = L.popup({"maxWidth": 2650});

        
            var i_frame_aea668765cd847fdaddc2349767902b2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gQWdvc3Rpbm8gZGVsIFNlbWluYXJpbyAoZ2nDoCBDaGllc2EgZGkgUy4gTmljb2xhIGRhIFRvbGVudGlubykgLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aafece9f35ef45b39e8d588e57544f79.setContent(i_frame_aea668765cd847fdaddc2349767902b2);
        

        marker_66aad007058441dfa620d9ac32773828.bindPopup(popup_aafece9f35ef45b39e8d588e57544f79)
        ;

        
    
    
            var marker_691218b07c464c4482075c3b810d6ed3 = L.marker(
                [44.830094, 11.288941000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_55b065d84b49485680cfc3e52a30558c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_691218b07c464c4482075c3b810d6ed3.setIcon(icon_55b065d84b49485680cfc3e52a30558c);
        
    
        var popup_5e613ce78c3f4fd7a591fc3f83bc634b = L.popup({"maxWidth": 2650});

        
            var i_frame_952e05b5afda4d248ba43c083ee7a223 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRnJhbmNlc2NvIGRpIFBhb2xhIChkZWwgQ2ltaXRlcm8pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTAwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5e613ce78c3f4fd7a591fc3f83bc634b.setContent(i_frame_952e05b5afda4d248ba43c083ee7a223);
        

        marker_691218b07c464c4482075c3b810d6ed3.bindPopup(popup_5e613ce78c3f4fd7a591fc3f83bc634b)
        ;

        
    
    
            var marker_8cda3576190941e8bbf61cc830212f35 = L.marker(
                [44.851465000000005, 11.211431],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_be6c5eecbe2f4e0a94ccc16615504c32 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8cda3576190941e8bbf61cc830212f35.setIcon(icon_be6c5eecbe2f4e0a94ccc16615504c32);
        
    
        var popup_8cc05776c2174254bb72383d6ea81b9a = L.popup({"maxWidth": 2650});

        
            var i_frame_e35713b50e7241ee8d9fb67b19a66bbc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHZW1pbmlhbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8cc05776c2174254bb72383d6ea81b9a.setContent(i_frame_e35713b50e7241ee8d9fb67b19a66bbc);
        

        marker_8cda3576190941e8bbf61cc830212f35.bindPopup(popup_8cc05776c2174254bb72383d6ea81b9a)
        ;

        
    
    
            var marker_947d55ead97249999aaaf88ed3a6f204 = L.marker(
                [44.832190000000004, 11.297184],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7571cc9f71914b9d9cacb2a027fb69d3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_947d55ead97249999aaaf88ed3a6f204.setIcon(icon_7571cc9f71914b9d9cacb2a027fb69d3);
        
    
        var popup_06ac5101666d48b9887dce896f375349 = L.popup({"maxWidth": 2650});

        
            var i_frame_a8c85b77c1f84d17a5a002bd74ba62a4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBwYXJyb2NjaGlhIFNTLiBGaWxpcHBvIGUgR2lhY29tbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_06ac5101666d48b9887dce896f375349.setContent(i_frame_a8c85b77c1f84d17a5a002bd74ba62a4);
        

        marker_947d55ead97249999aaaf88ed3a6f204.bindPopup(popup_06ac5101666d48b9887dce896f375349)
        ;

        
    
    
            var marker_786d2d775edb4214bd0ce9e98e41b188 = L.marker(
                [44.858683, 10.999447],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7b9ec93ed7ff48d5941af97687ca09b7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_786d2d775edb4214bd0ce9e98e41b188.setIcon(icon_7b9ec93ed7ff48d5941af97687ca09b7);
        
    
        var popup_e96f43a1580c43c8b80cf26a4f34ae7a = L.popup({"maxWidth": 2650});

        
            var i_frame_2e9baa88ff8741e1a8c2e1540a524d51 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e96f43a1580c43c8b80cf26a4f34ae7a.setContent(i_frame_2e9baa88ff8741e1a8c2e1540a524d51);
        

        marker_786d2d775edb4214bd0ce9e98e41b188.bindPopup(popup_e96f43a1580c43c8b80cf26a4f34ae7a)
        ;

        
    
    
            var marker_8d24c1e818ce4819a48ec4d5fe4e364d = L.marker(
                [44.828594, 10.986213000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_546cf1626a76453590ed8d2dd146574e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8d24c1e818ce4819a48ec4d5fe4e364d.setIcon(icon_546cf1626a76453590ed8d2dd146574e);
        
    
        var popup_b052a3e4ac7b4f23b4154c68a1cda463 = L.popup({"maxWidth": 2650});

        
            var i_frame_bdeb30f0d0454f96bc3d469e6163ae2e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjQzNzUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b052a3e4ac7b4f23b4154c68a1cda463.setContent(i_frame_bdeb30f0d0454f96bc3d469e6163ae2e);
        

        marker_8d24c1e818ce4819a48ec4d5fe4e364d.bindPopup(popup_b052a3e4ac7b4f23b4154c68a1cda463)
        ;

        
    
    
            var marker_9ae9693f9a6a465f8c200e7c1019e3cc = L.marker(
                [44.828469, 10.986044999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_99811d6d663e4c6b88accf30a6ed154c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9ae9693f9a6a465f8c200e7c1019e3cc.setIcon(icon_99811d6d663e4c6b88accf30a6ed154c);
        
    
        var popup_8dd82bfb05bb423b8649658d034cd291 = L.popup({"maxWidth": 2650});

        
            var i_frame_b1e0e75de22c439db8e511df5ab2eb6b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTEwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8dd82bfb05bb423b8649658d034cd291.setContent(i_frame_b1e0e75de22c439db8e511df5ab2eb6b);
        

        marker_9ae9693f9a6a465f8c200e7c1019e3cc.bindPopup(popup_8dd82bfb05bb423b8649658d034cd291)
        ;

        
    
    
            var marker_d0b514b9b0524eb2952fd959f91719c0 = L.marker(
                [44.842613, 11.499003],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7972235317f146b5a4868e4a0a735def = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d0b514b9b0524eb2952fd959f91719c0.setIcon(icon_7972235317f146b5a4868e4a0a735def);
        
    
        var popup_e94820bad3dd46fe9f6fe4594f219f47 = L.popup({"maxWidth": 2650});

        
            var i_frame_e7a253e0cdb2402c8272829f89077707 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIE5hdGl2aXTDoCBkZWxsYSBCZWF0YSBWZXJnaW5lIE1hcmlhIGNoaWVzYSBjb24gY2FtcGFuaWxlICsgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBWSUdBUkFOTyBNQUlOQVJEQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNjI1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e94820bad3dd46fe9f6fe4594f219f47.setContent(i_frame_e7a253e0cdb2402c8272829f89077707);
        

        marker_d0b514b9b0524eb2952fd959f91719c0.bindPopup(popup_e94820bad3dd46fe9f6fe4594f219f47)
        ;

        
    
    
            var marker_cff77547e63443ab8a66b05a0292c6f5 = L.marker(
                [44.876719, 11.325595],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_70a1e488f8294b2ca2ce2e37ea891e9c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_cff77547e63443ab8a66b05a0292c6f5.setIcon(icon_70a1e488f8294b2ca2ce2e37ea891e9c);
        
    
        var popup_5f24965c58494492bbd7c764b23fbef3 = L.popup({"maxWidth": 2650});

        
            var i_frame_df9fbce48d0d42a29558542a660d6d33 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbCdBbm51bmNpYXppb25lIGRlbGxhIEJlYXRhIFZlcmdpbmUgTWFyaWEgKGNoaWVzYSB2ZWNjaGlhKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5f24965c58494492bbd7c764b23fbef3.setContent(i_frame_df9fbce48d0d42a29558542a660d6d33);
        

        marker_cff77547e63443ab8a66b05a0292c6f5.bindPopup(popup_5f24965c58494492bbd7c764b23fbef3)
        ;

        
    
    
            var marker_d583a5e5233e4e5c90cbcb2bf969d010 = L.marker(
                [44.897240000000004, 11.460196],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_50648656e8ad43f482f53967fea896b5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d583a5e5233e4e5c90cbcb2bf969d010.setIcon(icon_50648656e8ad43f482f53967fea896b5);
        
    
        var popup_42a3ca84871849818f32e61484f9fbaa = L.popup({"maxWidth": 2650});

        
            var i_frame_e7e5f29de90640b8bee7c7cf484a7cc8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIE5hdGl2aXTDoCBkaSBNYXJpYSBWZXJnaW5lIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgOTY4Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_42a3ca84871849818f32e61484f9fbaa.setContent(i_frame_e7e5f29de90640b8bee7c7cf484a7cc8);
        

        marker_d583a5e5233e4e5c90cbcb2bf969d010.bindPopup(popup_42a3ca84871849818f32e61484f9fbaa)
        ;

        
    
    
            var marker_64a307352ec34325b522a8a1f64e8710 = L.marker(
                [44.947261, 11.421517999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_098b494634284960b9bc783ddc138d9d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_64a307352ec34325b522a8a1f64e8710.setIcon(icon_098b494634284960b9bc783ddc138d9d);
        
    
        var popup_f07810dccbb34a36956c18ac8990c711 = L.popup({"maxWidth": 2650});

        
            var i_frame_5402df1f8062497c8d6355d1b59aca28 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBGcmFuY2VzY28gLSBjaGllc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f07810dccbb34a36956c18ac8990c711.setContent(i_frame_5402df1f8062497c8d6355d1b59aca28);
        

        marker_64a307352ec34325b522a8a1f64e8710.bindPopup(popup_f07810dccbb34a36956c18ac8990c711)
        ;

        
    
    
            var marker_8edadc24f76e4aea9f5b3903371bda0a = L.marker(
                [44.947377, 11.422286],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_61d5f9b0292e45d5affed775103d6ace = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8edadc24f76e4aea9f5b3903371bda0a.setIcon(icon_61d5f9b0292e45d5affed775103d6ace);
        
    
        var popup_f3c4ea1b6b8048ee9ae9ecbf878b139d = L.popup({"maxWidth": 2650});

        
            var i_frame_eebf97d0c8b44296a4be1f877dfa332a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIE5hdGl2aXTDoCBkaSBNYXJpYSBWZXJnaW5lIGUgT3JhdG9yaW8gZGkgUy4gRG9tZW5pY28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTU0MjM0Ni45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNjc4MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f3c4ea1b6b8048ee9ae9ecbf878b139d.setContent(i_frame_eebf97d0c8b44296a4be1f877dfa332a);
        

        marker_8edadc24f76e4aea9f5b3903371bda0a.bindPopup(popup_f3c4ea1b6b8048ee9ae9ecbf878b139d)
        ;

        
    
    
            var marker_e822d2b6290e4ca7a0fcbb6ebcf80f4c = L.marker(
                [44.866164000000005, 11.391798],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c4358f38c68347c087bcb1f5f2168b5a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e822d2b6290e4ca7a0fcbb6ebcf80f4c.setIcon(icon_c4358f38c68347c087bcb1f5f2168b5a);
        
    
        var popup_95851bdcf058420c899bbe09914384b6 = L.popup({"maxWidth": 2650});

        
            var i_frame_0e560fdbf98645c38ee8ce545b674ad2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBhcG9zdG9sbyBjaGllc2EgY29uIGNhbXBhbmlsZSBlIGNhcHBlbGxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_95851bdcf058420c899bbe09914384b6.setContent(i_frame_0e560fdbf98645c38ee8ce545b674ad2);
        

        marker_e822d2b6290e4ca7a0fcbb6ebcf80f4c.bindPopup(popup_95851bdcf058420c899bbe09914384b6)
        ;

        
    
    
            var marker_cd570892f74e47dcad94b1360213528b = L.marker(
                [44.884858, 11.419295],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a22f9c2339184fd6ac342ba1ef990808 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_cd570892f74e47dcad94b1360213528b.setIcon(icon_a22f9c2339184fd6ac342ba1ef990808);
        
    
        var popup_d3c2600a72b74ddb96190467c36b73fc = L.popup({"maxWidth": 2650});

        
            var i_frame_f1a47a29291747508c2ee41f56897054 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgQmVhdGEgVmVyZ2luZSBBZGRvbG9yYXRhIC0gQ2hpZXNhIGRlbGwnQWRkb2xvcmF0YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEzMzc1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d3c2600a72b74ddb96190467c36b73fc.setContent(i_frame_f1a47a29291747508c2ee41f56897054);
        

        marker_cd570892f74e47dcad94b1360213528b.bindPopup(popup_d3c2600a72b74ddb96190467c36b73fc)
        ;

        
    
    
            var marker_341bc3dbb2de407cadbd7d54c28fab0b = L.marker(
                [44.885513, 11.417017],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3e74ce12697e4bcc942cb6fe819c3a8f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_341bc3dbb2de407cadbd7d54c28fab0b.setIcon(icon_3e74ce12697e4bcc942cb6fe819c3a8f);
        
    
        var popup_4c74245fa7f6422199268bbf41e8696c = L.popup({"maxWidth": 2650});

        
            var i_frame_85b00ea3b2d64885a1ba089eaec041c8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIFNhY3JvIEN1b3JlIC0gZGV0dGEgZGVsbGUgQ2F0ZW5lIC8gQ2hpZXNhIGRlbCBTYWNyYW1lbnRvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNzA2Mi41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4c74245fa7f6422199268bbf41e8696c.setContent(i_frame_85b00ea3b2d64885a1ba089eaec041c8);
        

        marker_341bc3dbb2de407cadbd7d54c28fab0b.bindPopup(popup_4c74245fa7f6422199268bbf41e8696c)
        ;

        
    
    
            var marker_14e75bb52616485a87fa2bf43a7cba0d = L.marker(
                [44.887158, 11.414407],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0243cd6726a84f6c992ee79253f902ad = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_14e75bb52616485a87fa2bf43a7cba0d.setIcon(icon_0243cd6726a84f6c992ee79253f902ad);
        
    
        var popup_8b7d8911f1c5493da8639e0b4dccac93 = L.popup({"maxWidth": 2650});

        
            var i_frame_e159b09213c44c6f9efa3a9e2bfbde13 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBCZWF0YSBWZXJnaW5lIGRpIExvdXJkZXMgLSBDaGllc2EgZGVsbGEgTWFkb25uYSBkZWxsZSBHcmF6aWUgKE9yYXRvcmlvIGRlbCBDcm9jaWZpc3NvOyBDaGllc2luYSBkZWxsZSBTdW9yZSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMDMxMi4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8b7d8911f1c5493da8639e0b4dccac93.setContent(i_frame_e159b09213c44c6f9efa3a9e2bfbde13);
        

        marker_14e75bb52616485a87fa2bf43a7cba0d.bindPopup(popup_8b7d8911f1c5493da8639e0b4dccac93)
        ;

        
    
    
            var marker_c081ef54811b4225bed3713cb0a755bc = L.marker(
                [44.857551, 11.375974000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_6be7186f341f41deb7350b22530e8e18 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c081ef54811b4225bed3713cb0a755bc.setIcon(icon_6be7186f341f41deb7350b22530e8e18);
        
    
        var popup_7a1655079e3e49a8a20a6eab7470438f = L.popup({"maxWidth": 2650});

        
            var i_frame_b7ccff541443461489a7242d73adeafe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2V0dGEgZGVsbGEgQ29yb25lbGxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQ5NDM0LjYzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7a1655079e3e49a8a20a6eab7470438f.setContent(i_frame_b7ccff541443461489a7242d73adeafe);
        

        marker_c081ef54811b4225bed3713cb0a755bc.bindPopup(popup_7a1655079e3e49a8a20a6eab7470438f)
        ;

        
    
    
            var marker_04209879100b439aa5cae4f83b6ed793 = L.marker(
                [44.884949, 11.424474],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d790b96a34fc4f3cb813c3c74076d879 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_04209879100b439aa5cae4f83b6ed793.setIcon(icon_d790b96a34fc4f3cb813c3c74076d879);
        
    
        var popup_cf69163f0ef64674b4c3d5a73f55ca31 = L.popup({"maxWidth": 2650});

        
            var i_frame_33ed690255a7433ebc4d0ddb02e0e39d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDg2MTgxMi44OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDMxMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cf69163f0ef64674b4c3d5a73f55ca31.setContent(i_frame_33ed690255a7433ebc4d0ddb02e0e39d);
        

        marker_04209879100b439aa5cae4f83b6ed793.bindPopup(popup_cf69163f0ef64674b4c3d5a73f55ca31)
        ;

        
    
    
            var marker_d8d94eec3be74741816416cbe8e4ad5b = L.marker(
                [44.889981, 11.066132000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_fe276539c2de4ed480ee71261bb73937 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d8d94eec3be74741816416cbe8e4ad5b.setIcon(icon_fe276539c2de4ed480ee71261bb73937);
        
    
        var popup_1a454904f3c44eb6875fcfedb550c4f5 = L.popup({"maxWidth": 2650});

        
            var i_frame_0d3e1862dfd24b1b927125fbdc1d5ab3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCB0cmF0dGEgZmVycm92aWEgTWlyYW5kb2xhLVJvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1a454904f3c44eb6875fcfedb550c4f5.setContent(i_frame_0d3e1862dfd24b1b927125fbdc1d5ab3);
        

        marker_d8d94eec3be74741816416cbe8e4ad5b.bindPopup(popup_1a454904f3c44eb6875fcfedb550c4f5)
        ;

        
    
    
            var marker_8376467d3be24854a03b1cdda1431265 = L.marker(
                [44.888201, 11.065586],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ce66b5d3aa184346a99d5b55b650ad7a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8376467d3be24854a03b1cdda1431265.setIcon(icon_ce66b5d3aa184346a99d5b55b650ad7a);
        
    
        var popup_48e1619be626474bbcf5cdd8436f2bfc = L.popup({"maxWidth": 2650});

        
            var i_frame_7cdf53081f7c4bd8ac57d5f56c6b815d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gTnVvdm8gLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQzODcwOTIuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjI4OTA4LjAzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_48e1619be626474bbcf5cdd8436f2bfc.setContent(i_frame_7cdf53081f7c4bd8ac57d5f56c6b815d);
        

        marker_8376467d3be24854a03b1cdda1431265.bindPopup(popup_48e1619be626474bbcf5cdd8436f2bfc)
        ;

        
    
    
            var marker_908ae68fa57f4d23a31abe5e73a9da55 = L.marker(
                [44.885277, 11.066573],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_01e2ea0eab774f68b957d5c823e736a4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_908ae68fa57f4d23a31abe5e73a9da55.setIcon(icon_01e2ea0eab774f68b957d5c823e736a4);
        
    
        var popup_cf1242baa8164ad1b77b31976407cb92 = L.popup({"maxWidth": 2650});

        
            var i_frame_7488806bb1a8472c81b7e1b98094d1c2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBNaWxpemlhIC0gRXggQ2FzZXJtYSBNVlNDIFZpYSBGZW5pY2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI3MTkxMS41MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cf1242baa8164ad1b77b31976407cb92.setContent(i_frame_7488806bb1a8472c81b7e1b98094d1c2);
        

        marker_908ae68fa57f4d23a31abe5e73a9da55.bindPopup(popup_cf1242baa8164ad1b77b31976407cb92)
        ;

        
    
    
            var marker_871752ddcb3643bf852f94eea3a57bd2 = L.marker(
                [44.888166999999996, 11.068152],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1dbf811e37be4dec8aa3cf24174184c1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_871752ddcb3643bf852f94eea3a57bd2.setIcon(icon_1dbf811e37be4dec8aa3cf24174184c1);
        
    
        var popup_288b8740ca6043d4afa343ee56f0f4b1 = L.popup({"maxWidth": 2650});

        
            var i_frame_5ae992f6ebe14e31bd8ef8897e72e373 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiAoZXggU2N1b2xhIE1lZGlhIFN0YXRhbGUgTGljZW8gUGljbykgQmlibGlvdGVjYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI4NzY5MTIuODMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE1MDI0OC41NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_288b8740ca6043d4afa343ee56f0f4b1.setContent(i_frame_5ae992f6ebe14e31bd8ef8897e72e373);
        

        marker_871752ddcb3643bf852f94eea3a57bd2.bindPopup(popup_288b8740ca6043d4afa343ee56f0f4b1)
        ;

        
    
    
            var marker_3bbcfb99aa2f40159222c8c0524be664 = L.marker(
                [44.919638, 10.804647000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_baa1537389dc49ac9f419caf6a1ea31c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3bbcfb99aa2f40159222c8c0524be664.setIcon(icon_baa1537389dc49ac9f419caf6a1ea31c);
        
    
        var popup_94e43f06b8d942408eb6eefa431b54e2 = L.popup({"maxWidth": 2650});

        
            var i_frame_49e73c3e7850407aba9ecee17a81cef1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBdWRpdG9yaXVtIGUgYmlibGlvdGVjYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_94e43f06b8d942408eb6eefa431b54e2.setContent(i_frame_49e73c3e7850407aba9ecee17a81cef1);
        

        marker_3bbcfb99aa2f40159222c8c0524be664.bindPopup(popup_94e43f06b8d942408eb6eefa431b54e2)
        ;

        
    
    
            var marker_b238bddd25c64c85bfa223603acf034f = L.marker(
                [44.916859, 10.859534],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4d68f86e16e74496b978a1d8cd6f2627 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b238bddd25c64c85bfa223603acf034f.setIcon(icon_4d68f86e16e74496b978a1d8cd6f2627);
        
    
        var popup_af5a77ccc35f482bbf409ba697e1e7a4 = L.popup({"maxWidth": 2650});

        
            var i_frame_87afb59d59274c7f9c44c097017f2c46 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIEFzc3VudGEgZSBwZXJ0aW5lbnplIC0gSUlJICBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA1MDE2OS4yNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_af5a77ccc35f482bbf409ba697e1e7a4.setContent(i_frame_87afb59d59274c7f9c44c097017f2c46);
        

        marker_b238bddd25c64c85bfa223603acf034f.bindPopup(popup_af5a77ccc35f482bbf409ba697e1e7a4)
        ;

        
    
    
            var marker_3b788044dfee4ba79c46a3c6b31ea089 = L.marker(
                [44.89685, 11.062337],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f233c3437b654edc87554dfc448d8cfa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3b788044dfee4ba79c46a3c6b31ea089.setIcon(icon_f233c3437b654edc87554dfc448d8cfa);
        
    
        var popup_9291a371652b4e3bba10286e981f88d4 = L.popup({"maxWidth": 2650});

        
            var i_frame_6d166af98d8d48ff8da8ffc29c0da127 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBVcmJhbm8gZGVsIENhcG9sdW9nbyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9291a371652b4e3bba10286e981f88d4.setContent(i_frame_6d166af98d8d48ff8da8ffc29c0da127);
        

        marker_3b788044dfee4ba79c46a3c6b31ea089.bindPopup(popup_9291a371652b4e3bba10286e981f88d4)
        ;

        
    
    
            var marker_ab074318f238401297609546d1d33e7d = L.marker(
                [44.890023, 10.898615],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a803af8af21e4b00b34fe3504756a2bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ab074318f238401297609546d1d33e7d.setIcon(icon_a803af8af21e4b00b34fe3504756a2bb);
        
    
        var popup_8bc2a32e7ed449caa54df476dbd0b4ed = L.popup({"maxWidth": 2650});

        
            var i_frame_97a51a1ff4ba454ea4e29bb003db7adf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbnRlcnZlbnRvIGRpIGVmZmljZW50YW1lbnRvIGVuZXJnZXRpY28gY29uIGxhIHJlYWxpenphemlvbmUgZGkgdW4gbnVvdm8gaW1waWFudG8gZm90b3ZvbHRhaWNvIHN1bGxhIGNvcGVydHVyYSBkZWxsYSBwYWxlc3RyYSBkZWxsYSBTY3VvbGEgU2Vjb25kYXJpYSBkaSBQcmltbyBHcmFkbyBkaSBOb3ZpIGRpIE1vZGVuYSAnbW9uaWEgRnJhbmNpb3NpJyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8bc2a32e7ed449caa54df476dbd0b4ed.setContent(i_frame_97a51a1ff4ba454ea4e29bb003db7adf);
        

        marker_ab074318f238401297609546d1d33e7d.bindPopup(popup_8bc2a32e7ed449caa54df476dbd0b4ed)
        ;

        
    
    
            var marker_b9e77c5c41b34545b5e7f68d60a0893e = L.marker(
                [44.887904999999996, 11.069417],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c2bd0403a9e740f1b023309cbdadf559 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b9e77c5c41b34545b5e7f68d60a0893e.setIcon(icon_c2bd0403a9e740f1b023309cbdadf559);
        
    
        var popup_a8e82facd90743098d5ceececc33cf50 = L.popup({"maxWidth": 2650});

        
            var i_frame_b7b2b9a149704471a21ec8dd5cb228cf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjb2xsZWdpbyBkZWkgR2VzdWl0aSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTAwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a8e82facd90743098d5ceececc33cf50.setContent(i_frame_b7b2b9a149704471a21ec8dd5cb228cf);
        

        marker_b9e77c5c41b34545b5e7f68d60a0893e.bindPopup(popup_a8e82facd90743098d5ceececc33cf50)
        ;

        
    
    
            var marker_629093a67c854b0ab19a82117cae630a = L.marker(
                [44.888542, 11.069375],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_baf960dfff184257b014969996aae491 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_629093a67c854b0ab19a82117cae630a.setIcon(icon_baf960dfff184257b014969996aae491);
        
    
        var popup_3ba5e9c1e98a4d80bee293ebad32fec0 = L.popup({"maxWidth": 2650});

        
            var i_frame_8f66a9ae04474826953cf8ab6f990673 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIEdlc8O5IDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyMjUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3ba5e9c1e98a4d80bee293ebad32fec0.setContent(i_frame_8f66a9ae04474826953cf8ab6f990673);
        

        marker_629093a67c854b0ab19a82117cae630a.bindPopup(popup_3ba5e9c1e98a4d80bee293ebad32fec0)
        ;

        
    
    
            var marker_4b8bcaa7a1a14249a0528eb8befee518 = L.marker(
                [44.887746, 11.068118],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5ba13f186e7649bfbb0ab4a8af51a8b9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4b8bcaa7a1a14249a0528eb8befee518.setIcon(icon_5ba13f186e7649bfbb0ab4a8af51a8b9);
        
    
        var popup_de2a19507bd345509356423ea8cb4884 = L.popup({"maxWidth": 2650});

        
            var i_frame_235c1b8e11614a41a2fd9c1d2bf6c65f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgU2FuIEZyYW5jZXNjbyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzOTQ1OTkuODMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDc1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_de2a19507bd345509356423ea8cb4884.setContent(i_frame_235c1b8e11614a41a2fd9c1d2bf6c65f);
        

        marker_4b8bcaa7a1a14249a0528eb8befee518.bindPopup(popup_de2a19507bd345509356423ea8cb4884)
        ;

        
    
    
            var marker_98315f9cf38b46e2b1712544d442383b = L.marker(
                [44.886984000000005, 11.06611],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3330495254be490d9fded73bb134d5ac = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_98315f9cf38b46e2b1712544d442383b.setIcon(icon_3330495254be490d9fded73bb134d5ac);
        
    
        var popup_e89b96e1d1184f998a2edb53866c5d56 = L.popup({"maxWidth": 2650});

        
            var i_frame_31289fbb5e8c49e383b9c263a8a93124 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIG11bmljaXBhbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA2MDcxMDE5LjY0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzNzI1MzUuNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e89b96e1d1184f998a2edb53866c5d56.setContent(i_frame_31289fbb5e8c49e383b9c263a8a93124);
        

        marker_98315f9cf38b46e2b1712544d442383b.bindPopup(popup_e89b96e1d1184f998a2edb53866c5d56)
        ;

        
    
    
            var marker_bfca2f1a44184726a6bd2913a0867463 = L.marker(
                [44.885596, 11.042849],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bb28d00533364ea2b19e9eae9e91da3a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bfca2f1a44184726a6bd2913a0867463.setIcon(icon_bb28d00533364ea2b19e9eae9e91da3a);
        
    
        var popup_b8a2942d75574377bd6e2a0b06077439 = L.popup({"maxWidth": 2650});

        
            var i_frame_bc56ec07bbef4f938717a7ab3a65ee71 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgU2FuIE1hcnRpbm8gQ2FyYW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b8a2942d75574377bd6e2a0b06077439.setContent(i_frame_bc56ec07bbef4f938717a7ab3a65ee71);
        

        marker_bfca2f1a44184726a6bd2913a0867463.bindPopup(popup_b8a2942d75574377bd6e2a0b06077439)
        ;

        
    
    
            var marker_cb1ffb27258c4348b7e278dd4497bbf8 = L.marker(
                [44.893028, 10.99509],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_82d36159134c4300b1ead5477344952d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_cb1ffb27258c4348b7e278dd4497bbf8.setIcon(icon_82d36159134c4300b1ead5477344952d);
        
    
        var popup_f01b0ab964b840549d7ccdbe84194166 = L.popup({"maxWidth": 2650});

        
            var i_frame_a9bc460a4f2747ea8e37483b13fb46cc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGYWJicmljYXRvIGFkIHVzbyBzYWxhIHBvbGl2YWxlbnRlICdUZWF0cm8gVmFyaW5pJyAoaW4gdXNvIGFsIENvbXVuZSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUE9TU0lET05JTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzY0NTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f01b0ab964b840549d7ccdbe84194166.setContent(i_frame_a9bc460a4f2747ea8e37483b13fb46cc);
        

        marker_cb1ffb27258c4348b7e278dd4497bbf8.bindPopup(popup_f01b0ab964b840549d7ccdbe84194166)
        ;

        
    
    
            var marker_d05577a4efec46178fd45d35b766d803 = L.marker(
                [44.893209999999996, 10.990614],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2aab2b1b9619441d9c12ac7eecf394c6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d05577a4efec46178fd45d35b766d803.setIcon(icon_2aab2b1b9619441d9c12ac7eecf394c6);
        
    
        var popup_309dbb8831bd46eb842c607d811fe4e4 = L.popup({"maxWidth": 2650});

        
            var i_frame_fd8a8d7c528142749236802d4f0d9d05 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBDb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQT1NTSURPTklPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_309dbb8831bd46eb842c607d811fe4e4.setContent(i_frame_fd8a8d7c528142749236802d4f0d9d05);
        

        marker_d05577a4efec46178fd45d35b766d803.bindPopup(popup_309dbb8831bd46eb842c607d811fe4e4)
        ;

        
    
    
            var marker_3ad03d7ca75247748c0358ec9d498987 = L.marker(
                [44.889456, 10.997364],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_bf8cfb566f4047748bd557e00b73b113 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3ad03d7ca75247748c0358ec9d498987.setIcon(icon_bf8cfb566f4047748bd557e00b73b113);
        
    
        var popup_f4ab018639a24583816884468c492bf1 = L.popup({"maxWidth": 2650});

        
            var i_frame_ffe7fdd6b4fd471a880f62b9e6e36e1b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGYWJicmljYXRvIGV4IHNlZGUgTXVuaWNpcGFsZSAtICBtaWNyb3Jlc2lkZW56YSBBU1AgVU5JT05FIENPTVVOSSBBUkVBIE5PUkQgKFVDTUFOKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQT1NTSURPTklPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgOTA4NDMyLjI1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f4ab018639a24583816884468c492bf1.setContent(i_frame_ffe7fdd6b4fd471a880f62b9e6e36e1b);
        

        marker_3ad03d7ca75247748c0358ec9d498987.bindPopup(popup_f4ab018639a24583816884468c492bf1)
        ;

        
    
    
            var marker_25b89c77824c4300ae85066867d9bca4 = L.marker(
                [44.94215, 11.006003],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b4b6d064336f4cd397fd84c514c9ae83 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_25b89c77824c4300ae85066867d9bca4.setIcon(icon_b4b6d064336f4cd397fd84c514c9ae83);
        
    
        var popup_8a3284b5289c453f8c16e7035418c22f = L.popup({"maxWidth": 2650});

        
            var i_frame_361c317c29e44488ad98891a74b60bec = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gZGVsIHBvcG9sbyBmcmF6aW9uZSBkaSBWYWxsYWx0YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNzk0NjA5Ljk4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzOTczMC41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8a3284b5289c453f8c16e7035418c22f.setContent(i_frame_361c317c29e44488ad98891a74b60bec);
        

        marker_25b89c77824c4300ae85066867d9bca4.bindPopup(popup_8a3284b5289c453f8c16e7035418c22f)
        ;

        
    
    
            var marker_34f22b2e43654641bd85a7fd9d063beb = L.marker(
                [44.915447, 10.981547],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_085ca5690265404482e7c9251d7d2e77 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_34f22b2e43654641bd85a7fd9d063beb.setIcon(icon_085ca5690265404482e7c9251d7d2e77);
        
    
        var popup_374fe30acd664685a5c4e19a8e8b3b72 = L.popup({"maxWidth": 2650});

        
            var i_frame_25fe027babbd48149efac058cf462932 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gZGVsIFBvcG9sbyBDYXBvbHVvZ28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTM3MjQyLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_374fe30acd664685a5c4e19a8e8b3b72.setContent(i_frame_25fe027babbd48149efac058cf462932);
        

        marker_34f22b2e43654641bd85a7fd9d063beb.bindPopup(popup_374fe30acd664685a5c4e19a8e8b3b72)
        ;

        
    
    
            var marker_42a923ab9d0b4da0824426baf387029a = L.marker(
                [44.912259000000006, 10.982788000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_c32056b832404de8915c0e1a0aef9f39 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_42a923ab9d0b4da0824426baf387029a.setIcon(icon_c32056b832404de8915c0e1a0aef9f39);
        
    
        var popup_eef6f815bae64b2a9fa4935343a84793 = L.popup({"maxWidth": 2650});

        
            var i_frame_238b361308d64a35b2809a28633c3c0e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gZXggUGFsYXp6byBDb3JiZWxsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNzUwODQuMDMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_eef6f815bae64b2a9fa4935343a84793.setContent(i_frame_238b361308d64a35b2809a28633c3c0e);
        

        marker_42a923ab9d0b4da0824426baf387029a.bindPopup(popup_eef6f815bae64b2a9fa4935343a84793)
        ;

        
    
    
            var marker_d32fccf9c5104ff38d83d5775e195587 = L.marker(
                [44.823345, 11.458105999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_614f39684e744d89a7e669b0b1ed0ea9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d32fccf9c5104ff38d83d5775e195587.setIcon(icon_614f39684e744d89a7e669b0b1ed0ea9);
        
    
        var popup_71d9603f9fc643c9b00b0c7e7e63647a = L.popup({"maxWidth": 2650});

        
            var i_frame_255d3782f9994a8ea6ebf97e0e087687 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgUHJpbWFyaWEgJ0cuR29uZWxsaScgZSBwYWxlc3RyYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFCRUxMTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTUyMzM4Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_71d9603f9fc643c9b00b0c7e7e63647a.setContent(i_frame_255d3782f9994a8ea6ebf97e0e087687);
        

        marker_d32fccf9c5104ff38d83d5775e195587.bindPopup(popup_71d9603f9fc643c9b00b0c7e7e63647a)
        ;

        
    
    
            var marker_8e01105c82a443f2977b2cdc400fb3d2 = L.marker(
                [44.937862, 11.420067999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7c0d33fec5204ac98d65218650cca11d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_8e01105c82a443f2977b2cdc400fb3d2.setIcon(icon_7c0d33fec5204ac98d65218650cca11d);
        
    
        var popup_b92ca01f88a341ac846063b075e5050d = L.popup({"maxWidth": 2650});

        
            var i_frame_3b985d00723b43089535527604b128bd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBOdW92YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b92ca01f88a341ac846063b075e5050d.setContent(i_frame_3b985d00723b43089535527604b128bd);
        

        marker_8e01105c82a443f2977b2cdc400fb3d2.bindPopup(popup_b92ca01f88a341ac846063b075e5050d)
        ;

        
    
    
            var marker_05366765dc4e418eb82c34acbe353ca6 = L.marker(
                [44.841096, 11.238195],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_17b873b341e6483f82e824e8bee227e6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_05366765dc4e418eb82c34acbe353ca6.setIcon(icon_17b873b341e6483f82e824e8bee227e6);
        
    
        var popup_56e08a748c414b4f914574006535547a = L.popup({"maxWidth": 2650});

        
            var i_frame_74ed18f634f04a169b479243be17033d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYml0YXppb25pIGUgbWFnYXp6aW5vIGRlbm9taW5hdGkgQ2FuYWxldHRvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI3MzI4NC4wNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_56e08a748c414b4f914574006535547a.setContent(i_frame_74ed18f634f04a169b479243be17033d);
        

        marker_05366765dc4e418eb82c34acbe353ca6.bindPopup(popup_56e08a748c414b4f914574006535547a)
        ;

        
    
    
            var marker_1073466bd9cf43a9a6ac87d042539663 = L.marker(
                [44.906418, 11.371762],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_afa24fafbb2d44bda0476789f2251ede = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_1073466bd9cf43a9a6ac87d042539663.setIcon(icon_afa24fafbb2d44bda0476789f2251ede);
        
    
        var popup_f96d1689ea764f45bf579527d5aeba4f = L.popup({"maxWidth": 2650});

        
            var i_frame_3aefc4f73449403790c0ee5247fc34d8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBGb2xsbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyNDk4My42MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjQ5ODMuNjMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f96d1689ea764f45bf579527d5aeba4f.setContent(i_frame_3aefc4f73449403790c0ee5247fc34d8);
        

        marker_1073466bd9cf43a9a6ac87d042539663.bindPopup(popup_f96d1689ea764f45bf579527d5aeba4f)
        ;

        
    
    
            var marker_43ff6f5baab04a3585ec27907b6a2640 = L.marker(
                [44.892302, 10.99566],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b4239dcfaa884ef19f1bc3ce9bef7606 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_43ff6f5baab04a3585ec27907b6a2640.setIcon(icon_b4239dcfaa884ef19f1bc3ce9bef7606);
        
    
        var popup_5e62087ab9fa4bd19a0aee9470af849e = L.popup({"maxWidth": 2650});

        
            var i_frame_b8831553fc2240c3a496988cce8f51ca = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBQb3NzaWRvbmlvIFZlc2Nvdm8gY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUE9TU0lET05JTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQ4NDMyLjE3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyODc1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5e62087ab9fa4bd19a0aee9470af849e.setContent(i_frame_b8831553fc2240c3a496988cce8f51ca);
        

        marker_43ff6f5baab04a3585ec27907b6a2640.bindPopup(popup_5e62087ab9fa4bd19a0aee9470af849e)
        ;

        
    
    
            var marker_ed8ffcbacdc44e4fb58e7aefa38fbba3 = L.marker(
                [44.892194, 10.995439],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f728d0a198e24702aa92a0f1b66646e8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ed8ffcbacdc44e4fb58e7aefa38fbba3.setIcon(icon_f728d0a198e24702aa92a0f1b66646e8);
        
    
        var popup_4305e9ef8a6c410ea3a5955c999f07ab = L.popup({"maxWidth": 2650});

        
            var i_frame_55ca5a8e086f495688a2b6baca29d779 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBQb3NzaWRvbmlvIFZlc2Nvdm8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUE9TU0lET05JTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTEyNTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4305e9ef8a6c410ea3a5955c999f07ab.setContent(i_frame_55ca5a8e086f495688a2b6baca29d779);
        

        marker_ed8ffcbacdc44e4fb58e7aefa38fbba3.bindPopup(popup_4305e9ef8a6c410ea3a5955c999f07ab)
        ;

        
    
    
            var marker_3b5813ca835f48dcbcf640f892a66021 = L.marker(
                [44.923466999999995, 10.944021000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_05ce3ed79a774b3b94ef951fc8561437 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3b5813ca835f48dcbcf640f892a66021.setIcon(icon_05ce3ed79a774b3b94ef951fc8561437);
        
    
        var popup_26f6ac502e3948e9a8e515dcb271faab = L.popup({"maxWidth": 2650});

        
            var i_frame_3b5f48f7bafa41109c2a37e7c7752a92 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTUy4gVHJpbml0w6AgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQ4NDc2LjYzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMDEyLjI2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_26f6ac502e3948e9a8e515dcb271faab.setContent(i_frame_3b5f48f7bafa41109c2a37e7c7752a92);
        

        marker_3b5813ca835f48dcbcf640f892a66021.bindPopup(popup_26f6ac502e3948e9a8e515dcb271faab)
        ;

        
    
    
            var marker_320848a86e70476d8511ac0cdf3f285a = L.marker(
                [44.894233, 10.901301],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_a58efd0207e8442c8c0c63d1b086e43e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_320848a86e70476d8511ac0cdf3f285a.setIcon(icon_a58efd0207e8442c8c0c63d1b086e43e);
        
    
        var popup_d45832c8b85441a1ae602d9105c57b20 = L.popup({"maxWidth": 2650});

        
            var i_frame_2ff535c95f5f41a18a4379d8f30e52be = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2FldGFubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzQ3MjEuMDEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d45832c8b85441a1ae602d9105c57b20.setContent(i_frame_2ff535c95f5f41a18a4379d8f30e52be);
        

        marker_320848a86e70476d8511ac0cdf3f285a.bindPopup(popup_d45832c8b85441a1ae602d9105c57b20)
        ;

        
    
    
            var marker_e65a310ba6994be09815aa2bc8669f1f = L.marker(
                [44.841147, 10.955977],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e6650f0274314febb64eea5b5ebb37b4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e65a310ba6994be09815aa2bc8669f1f.setIcon(icon_e6650f0274314febb64eea5b5ebb37b4);
        
    
        var popup_2cff47ec68d149318d8572f6f0564213 = L.popup({"maxWidth": 2650});

        
            var i_frame_84af364083464aa7ab694123081d4919 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYXJyb2NjaGlhIGRpIFNhbnRhIENhdGVyaW5hIGRpIEFsZXNzYW5kcmlhIGNvbiBjYW1wYW5pbGUgLyBDaGllc2EgZGkgU2FudGEgQ2F0ZXJpbmEgVk0gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2cff47ec68d149318d8572f6f0564213.setContent(i_frame_84af364083464aa7ab694123081d4919);
        

        marker_e65a310ba6994be09815aa2bc8669f1f.bindPopup(popup_2cff47ec68d149318d8572f6f0564213)
        ;

        
    
    
            var marker_4e3da6a687894194844843c2e3c1c459 = L.marker(
                [44.889926, 10.903286999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_5fb0d0c4964d445ba16355c86b9b9696 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4e3da6a687894194844843c2e3c1c459.setIcon(icon_5fb0d0c4964d445ba16355c86b9b9696);
        
    
        var popup_0eb846a3354d4cbebca09d0ea6f05a3f = L.popup({"maxWidth": 2650});

        
            var i_frame_ba84884cddce421cb68deb9f4c57efba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuTWljaGVsZSBBcmNhbmdlbG8gY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTU2MjUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0eb846a3354d4cbebca09d0ea6f05a3f.setContent(i_frame_ba84884cddce421cb68deb9f4c57efba);
        

        marker_4e3da6a687894194844843c2e3c1c459.bindPopup(popup_0eb846a3354d4cbebca09d0ea6f05a3f)
        ;

        
    
    
            var marker_930a10999e7f468d9c94812a9d01d3b3 = L.marker(
                [44.890054, 10.903578999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_622e8747f8d84a879a0fc6605bb3c66c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_930a10999e7f468d9c94812a9d01d3b3.setIcon(icon_622e8747f8d84a879a0fc6605bb3c66c);
        
    
        var popup_116e75d9323b4f43b0c745f6984444ae = L.popup({"maxWidth": 2650});

        
            var i_frame_b3c6bb99cc2344bfb8d5f30aaeb07b53 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuTWljaGVsZSBBcmNhbmdlbG8gY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE4NzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_116e75d9323b4f43b0c745f6984444ae.setContent(i_frame_b3c6bb99cc2344bfb8d5f30aaeb07b53);
        

        marker_930a10999e7f468d9c94812a9d01d3b3.bindPopup(popup_116e75d9323b4f43b0c745f6984444ae)
        ;

        
    
    
            var marker_540f23020de245278f0d1a2a375f4839 = L.marker(
                [44.958853999999995, 11.087971000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b7669052919a4fbe9f6746f8072f9fc0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_540f23020de245278f0d1a2a375f4839.setIcon(icon_b7669052919a4fbe9f6746f8072f9fc0);
        
    
        var popup_fd09306f091d463687e9d373000f8bb6 = L.popup({"maxWidth": 2650});

        
            var i_frame_0b73fd5f4f65434f9b35f167148c9b62 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIFZpc2l0YXppb25lIGRlbGxhIEJlYXRhIFZlcmdpbmUgTWFyaWEgLyBDaGllc2EgZGVsbGEgUHVyaWZpY2F6aW9uZSBkZWxsYSBTUy4gVmVyZ2luZSBNYXJpYSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTg3MjkuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fd09306f091d463687e9d373000f8bb6.setContent(i_frame_0b73fd5f4f65434f9b35f167148c9b62);
        

        marker_540f23020de245278f0d1a2a375f4839.bindPopup(popup_fd09306f091d463687e9d373000f8bb6)
        ;

        
    
    
            var marker_59f8010fa0b24cec954ae6cd27b93039 = L.marker(
                [44.889439, 11.066214],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1eae605413c94c6482274160519d223d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_59f8010fa0b24cec954ae6cd27b93039.setIcon(icon_1eae605413c94c6482274160519d223d);
        
    
        var popup_b39af0b3783c4f2e9ccb1d4b1cda98fc = L.popup({"maxWidth": 2650});

        
            var i_frame_3eb62c9614224581a398aedac6fa309f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBNYWRvbm5hIGRlbGxhIFBvcnRhIChMYSBNYWRvbm5pbmEpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b39af0b3783c4f2e9ccb1d4b1cda98fc.setContent(i_frame_3eb62c9614224581a398aedac6fa309f);
        

        marker_59f8010fa0b24cec954ae6cd27b93039.bindPopup(popup_b39af0b3783c4f2e9ccb1d4b1cda98fc)
        ;

        
    
    
            var marker_d0db65e07c1b42e2b571d40cc43f824f = L.marker(
                [44.936640000000004, 11.235173],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1dcd79d16b344f00a61fd41f5124d90a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d0db65e07c1b42e2b571d40cc43f824f.setIcon(icon_1dcd79d16b344f00a61fd41f5124d90a);
        
    
        var popup_39f59965085c4c41a59f6104a96e7ca5 = L.popup({"maxWidth": 2650});

        
            var i_frame_e582898c826145f3a021ac73e11f9c07 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gVmVzY292byBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzEwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_39f59965085c4c41a59f6104a96e7ca5.setContent(i_frame_e582898c826145f3a021ac73e11f9c07);
        

        marker_d0db65e07c1b42e2b571d40cc43f824f.bindPopup(popup_39f59965085c4c41a59f6104a96e7ca5)
        ;

        
    
    
            var marker_340418dffc3649249b9665cd5f3a0618 = L.marker(
                [44.862345, 11.026355],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b954c174e94b4b47a348fd2a3dccfacc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_340418dffc3649249b9665cd5f3a0618.setIcon(icon_b954c174e94b4b47a348fd2a3dccfacc);
        
    
        var popup_2604ae2fb785463484c3154e443870c7 = L.popup({"maxWidth": 2650});

        
            var i_frame_9620a96398c441729189ce5c2b6d1bc0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2lvdmFubmkgQmF0dGlzdGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2604ae2fb785463484c3154e443870c7.setContent(i_frame_9620a96398c441729189ce5c2b6d1bc0);
        

        marker_340418dffc3649249b9665cd5f3a0618.bindPopup(popup_2604ae2fb785463484c3154e443870c7)
        ;

        
    
    
            var marker_cd8d4873e3104d6e8254c71886cecf36 = L.marker(
                [44.884771, 11.066828999999998],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_74cac0641f25411cb1847d1e368df198 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_cd8d4873e3104d6e8254c71886cecf36.setIcon(icon_74cac0641f25411cb1847d1e368df198);
        
    
        var popup_5b84d482e5dd48b58e67c411a3a54fba = L.popup({"maxWidth": 2650});

        
            var i_frame_8bcd2659b98c49599dfee3660e97120c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW5lbWEgVGVhdHJvIEFzdG9yaWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5b84d482e5dd48b58e67c411a3a54fba.setContent(i_frame_8bcd2659b98c49599dfee3660e97120c);
        

        marker_cd8d4873e3104d6e8254c71886cecf36.bindPopup(popup_5b84d482e5dd48b58e67c411a3a54fba)
        ;

        
    
    
            var marker_74ee05f833d143abaaf05d9b2549a03e = L.marker(
                [44.860699, 11.058484],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_166f0a89757d49cdaead274b7230d601 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_74ee05f833d143abaaf05d9b2549a03e.setIcon(icon_166f0a89757d49cdaead274b7230d601);
        
    
        var popup_7cca49c4fb4d498888e570b2e0a3927e = L.popup({"maxWidth": 2650});

        
            var i_frame_9a030f281d4b4f8cb8f74a8260599c18 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlaSBTUy4gRmlsaXBwbyBlIEdpYWNvbW8gY29uIGNhbXBhbmlsZSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgOTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7cca49c4fb4d498888e570b2e0a3927e.setContent(i_frame_9a030f281d4b4f8cb8f74a8260599c18);
        

        marker_74ee05f833d143abaaf05d9b2549a03e.bindPopup(popup_7cca49c4fb4d498888e570b2e0a3927e)
        ;

        
    
    
            var marker_93227176c5e547f3b3023e22518f6d6d = L.marker(
                [44.923107, 11.095925999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_51ac1277b8cf443fa82e458cd515adbe = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_93227176c5e547f3b3023e22518f6d6d.setIcon(icon_51ac1277b8cf443fa82e458cd515adbe);
        
    
        var popup_878a4e5116a0436bacea6e139c23333d = L.popup({"maxWidth": 2650});

        
            var i_frame_f8666d093e7142ee8c03cfe3c46eb44e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIC8gQ2hpZXNhIE1hZG9ubmEgZGVsbGEgTmV2ZSBkaSBRdWFyYW50b2xpIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMjAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_878a4e5116a0436bacea6e139c23333d.setContent(i_frame_f8666d093e7142ee8c03cfe3c46eb44e);
        

        marker_93227176c5e547f3b3023e22518f6d6d.bindPopup(popup_878a4e5116a0436bacea6e139c23333d)
        ;

        
    
    
            var marker_345346e89a1d47a1948cf188157e94d5 = L.marker(
                [44.874864, 11.12937],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_08c0c1b351f84beea8e275fd9f318061 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_345346e89a1d47a1948cf188157e94d5.setIcon(icon_08c0c1b351f84beea8e275fd9f318061);
        
    
        var popup_e6b3762d82f9471f98e1746ecf7bb41b = L.popup({"maxWidth": 2650});

        
            var i_frame_e540910248d44db484777307b60e0001 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExlb25hcmRvIExpbW9zaW5vIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0Njg3NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e6b3762d82f9471f98e1746ecf7bb41b.setContent(i_frame_e540910248d44db484777307b60e0001);
        

        marker_345346e89a1d47a1948cf188157e94d5.bindPopup(popup_e6b3762d82f9471f98e1746ecf7bb41b)
        ;

        
    
    
            var marker_3b473deaa96b4cbdbe6bcde32aa535e6 = L.marker(
                [44.874891999999996, 11.129161999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ee33154ef7aa4443b3e2f81734eb6261 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3b473deaa96b4cbdbe6bcde32aa535e6.setIcon(icon_ee33154ef7aa4443b3e2f81734eb6261);
        
    
        var popup_5c0a457664ce460d9e431ec85e67133f = L.popup({"maxWidth": 2650});

        
            var i_frame_7ff889d51cf944d18ab578d448ec4226 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExlb25hcmRvIExpbW9zaW5vIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5c0a457664ce460d9e431ec85e67133f.setContent(i_frame_7ff889d51cf944d18ab578d448ec4226);
        

        marker_3b473deaa96b4cbdbe6bcde32aa535e6.bindPopup(popup_5c0a457664ce460d9e431ec85e67133f)
        ;

        
    
    
            var marker_3ba6f78c15fe461e9c69810da461012b = L.marker(
                [44.92416, 11.182017],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2c5f3fcc0c2f467da72a729785577ace = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3ba6f78c15fe461e9c69810da461012b.setIcon(icon_2c5f3fcc0c2f467da72a729785577ace);
        
    
        var popup_99c86d46ba364a99b0719b002b489ef5 = L.popup({"maxWidth": 2650});

        
            var i_frame_635591b3ddbf4c55bc46e99d87c85ed9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRpIFMuIEJpYWdpbyBWZXNjb3ZvIGUgTWFydGlyZSAtIGNoaWVzYSBjb24gY2FtcGFuaWxlIGUgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEwNTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_99c86d46ba364a99b0719b002b489ef5.setContent(i_frame_635591b3ddbf4c55bc46e99d87c85ed9);
        

        marker_3ba6f78c15fe461e9c69810da461012b.bindPopup(popup_99c86d46ba364a99b0719b002b489ef5)
        ;

        
    
    
            var marker_e1eb8b0352cc4080b7db169023ca7217 = L.marker(
                [44.906025, 10.970533],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d280a4a05b3d49f39efa46f089b2a324 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e1eb8b0352cc4080b7db169023ca7217.setIcon(icon_d280a4a05b3d49f39efa46f089b2a324);
        
    
        var popup_63bf3905e2b040c385ac12071958dea8 = L.popup({"maxWidth": 2650});

        
            var i_frame_72e5589148e9477496eae878786a007d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBCZWF0YSBWZXJnaW5lIGRlbGxvIFNwaW5vIC8gTWFkb25uYSBkZWxsbyBTcGlubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjQ3NTcuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_63bf3905e2b040c385ac12071958dea8.setContent(i_frame_72e5589148e9477496eae878786a007d);
        

        marker_e1eb8b0352cc4080b7db169023ca7217.bindPopup(popup_63bf3905e2b040c385ac12071958dea8)
        ;

        
    
    
            var marker_f80d7cc258d545489fd3fb83975545b0 = L.marker(
                [44.924465000000005, 10.97367],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_12d0dd5df40e48e28b8dc1e3a2c61eaa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_f80d7cc258d545489fd3fb83975545b0.setIcon(icon_12d0dd5df40e48e28b8dc1e3a2c61eaa);
        
    
        var popup_b3bbf47d76ce4aacaff0d857ec1492c2 = L.popup({"maxWidth": 2650});

        
            var i_frame_d51ce4788ab94a6fb4148654e55d90c1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGljb2xldHRhIGRlbGxlIEFiYnJpYW5lIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0MjU2NC43IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyODgyLjk5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b3bbf47d76ce4aacaff0d857ec1492c2.setContent(i_frame_d51ce4788ab94a6fb4148654e55d90c1);
        

        marker_f80d7cc258d545489fd3fb83975545b0.bindPopup(popup_b3bbf47d76ce4aacaff0d857ec1492c2)
        ;

        
    
    
            var marker_bf295eea761c451d9557863aec1ccccd = L.marker(
                [44.923048, 11.036610000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f5aa0a325ed84d4a9de2fce7b7a9ae68 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bf295eea761c451d9557863aec1ccccd.setIcon(icon_f5aa0a325ed84d4a9de2fce7b7a9ae68);
        
    
        var popup_27ffd87d8b6843d689b2f314ce3ce93f = L.popup({"maxWidth": 2650});

        
            var i_frame_62fcbda8c82c4b3b85b52ecc18c6eab5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBBcG9zdG9sbyBjb24gb3JhdG9yaW8gZSBjYW1wYW5pbGUgY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjEwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_27ffd87d8b6843d689b2f314ce3ce93f.setContent(i_frame_62fcbda8c82c4b3b85b52ecc18c6eab5);
        

        marker_bf295eea761c451d9557863aec1ccccd.bindPopup(popup_27ffd87d8b6843d689b2f314ce3ce93f)
        ;

        
    
    
            var marker_4e031e0b37a14e41ace9ad99d261688d = L.marker(
                [44.913271, 10.982124],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4d5e36d7ec344281bd985048f1de84f9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_4e031e0b37a14e41ace9ad99d261688d.setIcon(icon_4d5e36d7ec344281bd985048f1de84f9);
        
    
        var popup_2ff226fbf6dd4583ab048c7a3b9f4120 = L.popup({"maxWidth": 2650});

        
            var i_frame_e1f0ad7c361343cca8443e250dd0d3c5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUGFvbG8gQXBvc3RvbG8gZSBjYW1wYW5pbGUgLyBEdW9tbyAtIFBhcnJvY2NoaWEgZGVsbGEgQ29udmVyc2lvbmUgZGkgUy4gUGFvbG8gQXBvc3RvbG8gY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDMwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2ff226fbf6dd4583ab048c7a3b9f4120.setContent(i_frame_e1f0ad7c361343cca8443e250dd0d3c5);
        

        marker_4e031e0b37a14e41ace9ad99d261688d.bindPopup(popup_2ff226fbf6dd4583ab048c7a3b9f4120)
        ;

        
    
    
            var marker_9dfb186104cc4c679b7d347068a1bded = L.marker(
                [44.925151, 10.979494],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_74f66e9c4b4e4b80b3c6852181aa576b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9dfb186104cc4c679b7d347068a1bded.setIcon(icon_74f66e9c4b4e4b80b3c6852181aa576b);
        
    
        var popup_f537d15be53342a2bca225889d970c5d = L.popup({"maxWidth": 2650});

        
            var i_frame_253c3714619e46da82299de49b45e477 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIENhdGVyaW5hIC8gQ2F0ZXJpbmEgVmVyZ2luZSBlIE1hcnRpcmUgLyBDYXRlcmluYSBkJ0FsZXNzYW5kcmlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDkyNTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f537d15be53342a2bca225889d970c5d.setContent(i_frame_253c3714619e46da82299de49b45e477);
        

        marker_9dfb186104cc4c679b7d347068a1bded.bindPopup(popup_f537d15be53342a2bca225889d970c5d)
        ;

        
    
    
            var marker_5b7e70c3c4ca4121b16e4279fb5ecf40 = L.marker(
                [44.712455, 11.305703],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_97d0d8fd38ef4ea796bd851ed11d03e5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5b7e70c3c4ca4121b16e4279fb5ecf40.setIcon(icon_97d0d8fd38ef4ea796bd851ed11d03e5);
        
    
        var popup_7b78677d80af401f9f6b3e22e55744dc = L.popup({"maxWidth": 2650});

        
            var i_frame_b90a912629d24dadaa0a7131ece5a205 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBTZWJhc3RpYW5vIGUgUy4gUm9jY28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNzAzMTIuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7b78677d80af401f9f6b3e22e55744dc.setContent(i_frame_b90a912629d24dadaa0a7131ece5a205);
        

        marker_5b7e70c3c4ca4121b16e4279fb5ecf40.bindPopup(popup_7b78677d80af401f9f6b3e22e55744dc)
        ;

        
    
    
            var marker_1d4a112c398f4a2c874715e43befd0d2 = L.marker(
                [44.713118, 11.306996],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7f4949e6c7b14f3ba55b97b3c588a202 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_1d4a112c398f4a2c874715e43befd0d2.setIcon(icon_7f4949e6c7b14f3ba55b97b3c588a202);
        
    
        var popup_c36992100d9a4c5cb2ffe1569e8c2dbe = L.popup({"maxWidth": 2650});

        
            var i_frame_290f1b79d11843bf8ac4e4d335c9b4b1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5vbmljYSBkaSBTYW50YSBNYXJpYSBNYWdnaW9yZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c36992100d9a4c5cb2ffe1569e8c2dbe.setContent(i_frame_290f1b79d11843bf8ac4e4d335c9b4b1);
        

        marker_1d4a112c398f4a2c874715e43befd0d2.bindPopup(popup_c36992100d9a4c5cb2ffe1569e8c2dbe)
        ;

        
    
    
            var marker_e7e537df8e9e408c9ab6726af036a79e = L.marker(
                [44.76736, 11.255153],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d1dae7d9922e480da36d9d60511a3d5c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e7e537df8e9e408c9ab6726af036a79e.setIcon(icon_d1dae7d9922e480da36d9d60511a3d5c);
        
    
        var popup_d431b1e025c043d0ab60ce68aec772e6 = L.popup({"maxWidth": 2650});

        
            var i_frame_e2717997c5e5417fa3c9bb961f178cca = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHaWFjb21vIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjc1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d431b1e025c043d0ab60ce68aec772e6.setContent(i_frame_e2717997c5e5417fa3c9bb961f178cca);
        

        marker_e7e537df8e9e408c9ab6726af036a79e.bindPopup(popup_d431b1e025c043d0ab60ce68aec772e6)
        ;

        
    
    
            var marker_ace055678ed64cfab4f7dc72080eb37f = L.marker(
                [44.745956, 11.157319000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7d86fd3169674ac384d27f1217b48bf4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ace055678ed64cfab4f7dc72080eb37f.setIcon(icon_7d86fd3169674ac384d27f1217b48bf4);
        
    
        var popup_d16b016f2559407ebaebd451f05a973d = L.popup({"maxWidth": 2650});

        
            var i_frame_9f627f26cb664c06b858109f77a719c5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBOYXRpdml0w6AgZGVsbGEgQi4gVmVyZ2luZSBkZXR0byAnTGEgUm90b25kYScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d16b016f2559407ebaebd451f05a973d.setContent(i_frame_9f627f26cb664c06b858109f77a719c5);
        

        marker_ace055678ed64cfab4f7dc72080eb37f.bindPopup(popup_d16b016f2559407ebaebd451f05a973d)
        ;

        
    
    
            var marker_6980c0a520014cbdbf79646521ec7828 = L.marker(
                [44.887677000000004, 11.064516000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_1d10fe06438a48158052ad1136e5394e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6980c0a520014cbdbf79646521ec7828.setIcon(icon_1d10fe06438a48158052ad1136e5394e);
        
    
        var popup_4e2e76f39d354b58bf7af5272a35ed51 = L.popup({"maxWidth": 2650});

        
            var i_frame_bd80a6d02f3646f98919b2e8e5f56d50 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdXJvIGRpIENpbnRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4e2e76f39d354b58bf7af5272a35ed51.setContent(i_frame_bd80a6d02f3646f98919b2e8e5f56d50);
        

        marker_6980c0a520014cbdbf79646521ec7828.bindPopup(popup_4e2e76f39d354b58bf7af5272a35ed51)
        ;

        
    
    
            var marker_84172c590ffc41d285b593a6fd4115a5 = L.marker(
                [44.890613, 11.07719],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_09d9cdcd835d4225b86a506c615eec48 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_84172c590ffc41d285b593a6fd4115a5.setIcon(icon_09d9cdcd835d4225b86a506c615eec48);
        
    
        var popup_e24b55f1079a42c39490c55baed1821b = L.popup({"maxWidth": 2650});

        
            var i_frame_0915d451fdd842579266a12e1e81ba94 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBjYXNlcm1hIFZWLkZGLiA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQ2MTQxNy41NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e24b55f1079a42c39490c55baed1821b.setContent(i_frame_0915d451fdd842579266a12e1e81ba94);
        

        marker_84172c590ffc41d285b593a6fd4115a5.bindPopup(popup_e24b55f1079a42c39490c55baed1821b)
        ;

        
    
    
            var marker_c596747494a34847a5a7146afe2e0710 = L.marker(
                [44.887617999999996, 11.0679],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_4a71b2eeb9604327a1331ed340fdf171 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c596747494a34847a5a7146afe2e0710.setIcon(icon_4a71b2eeb9604327a1331ed340fdf171);
        
    
        var popup_80e5f6b5b47c425481d3bc843abac35b = L.popup({"maxWidth": 2650});

        
            var i_frame_b2c36415184542018f71d7454e2129f1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgc2FuIEZyYW5jZXNjbyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgOTk4NjE2LjUxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_80e5f6b5b47c425481d3bc843abac35b.setContent(i_frame_b2c36415184542018f71d7454e2129f1);
        

        marker_c596747494a34847a5a7146afe2e0710.bindPopup(popup_80e5f6b5b47c425481d3bc843abac35b)
        ;

        
    
    
            var marker_71edc186a13b48dfa90b86b1c3501675 = L.marker(
                [44.834216, 11.023396],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0b47b50912bd40119e41d4c09e8ce851 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_71edc186a13b48dfa90b86b1c3501675.setIcon(icon_0b47b50912bd40119e41d4c09e8ce851);
        
    
        var popup_bfe711218f294d7096ada9e612ff5918 = L.popup({"maxWidth": 2650});

        
            var i_frame_9bfa477fa5284eefbcbb307646bfb56a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bfe711218f294d7096ada9e612ff5918.setContent(i_frame_9bfa477fa5284eefbcbb307646bfb56a);
        

        marker_71edc186a13b48dfa90b86b1c3501675.bindPopup(popup_bfe711218f294d7096ada9e612ff5918)
        ;

        
    
    
            var marker_05f7c4d1a51a48cb8ec036b1e9f52049 = L.marker(
                [44.80238, 11.051994],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_26b856a6389c478b974376004eed3a97 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_05f7c4d1a51a48cb8ec036b1e9f52049.setIcon(icon_26b856a6389c478b974376004eed3a97);
        
    
        var popup_27db45d565af4503baf751d2e65c592d = L.popup({"maxWidth": 2650});

        
            var i_frame_8de7179f4ff849208e6a4f63e3ffbaa9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb3J0ZSBCb2NjaGkgZ2nDoCBUb3NhdHRpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_27db45d565af4503baf751d2e65c592d.setContent(i_frame_8de7179f4ff849208e6a4f63e3ffbaa9);
        

        marker_05f7c4d1a51a48cb8ec036b1e9f52049.bindPopup(popup_27db45d565af4503baf751d2e65c592d)
        ;

        
    
    
            var marker_c8501733520f477691976cf27bffc651 = L.marker(
                [44.83517, 11.292558999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e198d91af7cf40af876b228e3cfa037b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c8501733520f477691976cf27bffc651.setIcon(icon_e198d91af7cf40af876b228e3cfa037b);
        
    
        var popup_6c728cf0990e468995d2f813fac75554 = L.popup({"maxWidth": 2650});

        
            var i_frame_b3368fe0449b455ca0519ff43231701e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA5NDQwNC42IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6c728cf0990e468995d2f813fac75554.setContent(i_frame_b3368fe0449b455ca0519ff43231701e);
        

        marker_c8501733520f477691976cf27bffc651.bindPopup(popup_6c728cf0990e468995d2f813fac75554)
        ;

        
    
    
            var marker_64dc19420a8a4fcc94b3234bead6bfcf = L.marker(
                [44.835444, 11.292508999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ec545dd564f44c9aa479da86ee92f1dd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_64dc19420a8a4fcc94b3234bead6bfcf.setIcon(icon_ec545dd564f44c9aa479da86ee92f1dd);
        
    
        var popup_a64e9341d0864250b9e7a7e83e630ed1 = L.popup({"maxWidth": 2650});

        
            var i_frame_bc49fc87e3834b32a545437c384b88dc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gLSBwYWxlc3RyYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a64e9341d0864250b9e7a7e83e630ed1.setContent(i_frame_bc49fc87e3834b32a545437c384b88dc);
        

        marker_64dc19420a8a4fcc94b3234bead6bfcf.bindPopup(popup_a64e9341d0864250b9e7a7e83e630ed1)
        ;

        
    
    
            var marker_bc9262a464de4de9ac021a111c0ee7cd = L.marker(
                [44.727348, 11.290214],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_47420bc1b8bc41f294846055f4496e60 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bc9262a464de4de9ac021a111c0ee7cd.setIcon(icon_47420bc1b8bc41f294846055f4496e60);
        
    
        var popup_7536d49ddde84646bb6a9ec61a4cbe44 = L.popup({"maxWidth": 2650});

        
            var i_frame_b6b8104dfc18462ba621e5c3d8d00a26 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBVZmZpY2lvIGRlbCBSZWdpc3RybyAoRXggQ29udmVudG8gZGVpIEZpbGlwcGluaSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTM4NTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7536d49ddde84646bb6a9ec61a4cbe44.setContent(i_frame_b6b8104dfc18462ba621e5c3d8d00a26);
        

        marker_bc9262a464de4de9ac021a111c0ee7cd.bindPopup(popup_7536d49ddde84646bb6a9ec61a4cbe44)
        ;

        
    
    
            var marker_9bca48b7501346bdbb9223e94d89aa12 = L.marker(
                [44.838514, 11.13818],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_986ed93c63fd45069de9d8aa7d82b3b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9bca48b7501346bdbb9223e94d89aa12.setIcon(icon_986ed93c63fd45069de9d8aa7d82b3b8);
        
    
        var popup_12e80b16b0dd45f694dee485d5a1438f = L.popup({"maxWidth": 2650});

        
            var i_frame_63ed2618d3a84b17804eae3c551cc7d7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gQ29tdW5hbGUgLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE0MzQwMDMuMDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDcxNzAwLjE1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_12e80b16b0dd45f694dee485d5a1438f.setContent(i_frame_63ed2618d3a84b17804eae3c551cc7d7);
        

        marker_9bca48b7501346bdbb9223e94d89aa12.bindPopup(popup_12e80b16b0dd45f694dee485d5a1438f)
        ;

        
    
    
            var marker_e0a8e1997f0b4f139c5f86f0f7ca941a = L.marker(
                [44.729082, 11.299101],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_56002ffaab4440df93fc01393f10522d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_e0a8e1997f0b4f139c5f86f0f7ca941a.setIcon(icon_56002ffaab4440df93fc01393f10522d);
        
    
        var popup_9beaab33b98748459b5c14aa49265383 = L.popup({"maxWidth": 2650});

        
            var i_frame_5a24ac3aaee4437b8ae0151c109f37c7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gcGVyIGwnaW5mYW56aWEgJ0EuIFBhY2lub3R0aScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI2MzM5Ni40MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9beaab33b98748459b5c14aa49265383.setContent(i_frame_5a24ac3aaee4437b8ae0151c109f37c7);
        

        marker_e0a8e1997f0b4f139c5f86f0f7ca941a.bindPopup(popup_9beaab33b98748459b5c14aa49265383)
        ;

        
    
    
            var marker_6c86fbb790bc41ee99c3ef578e5911ab = L.marker(
                [44.769664, 11.490813000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_d1bb9e1d4c0849a6a48ef70e7a176620 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6c86fbb790bc41ee99c3ef578e5911ab.setIcon(icon_d1bb9e1d4c0849a6a48ef70e7a176620);
        
    
        var popup_bf0155e1bf13474cb1262b9663cc5452 = L.popup({"maxWidth": 2650});

        
            var i_frame_ae67f8a527644c2f9daaf427dc1486f0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gQ29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA4MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bf0155e1bf13474cb1262b9663cc5452.setContent(i_frame_ae67f8a527644c2f9daaf427dc1486f0);
        

        marker_6c86fbb790bc41ee99c3ef578e5911ab.bindPopup(popup_bf0155e1bf13474cb1262b9663cc5452)
        ;

        
    
    
            var marker_54a3506da9d74ea4b5bc003dad9382c4 = L.marker(
                [44.887375, 11.414402],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_cdf33c31dca2466ab8d503d2b918e2ba = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_54a3506da9d74ea4b5bc003dad9382c4.setIcon(icon_cdf33c31dca2466ab8d503d2b918e2ba);
        
    
        var popup_50974062a33d4883a40bd8e447db1c10 = L.popup({"maxWidth": 2650});

        
            var i_frame_c37e50b774fc41ac9646bf601fc03e58 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgUGFyaXRhcmlhIGRlbGwnaW5mYW56aWEgJ01hcmlhIEltbWFjb2xhdGEnIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQzMzA1NC41NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_50974062a33d4883a40bd8e447db1c10.setContent(i_frame_c37e50b774fc41ac9646bf601fc03e58);
        

        marker_54a3506da9d74ea4b5bc003dad9382c4.bindPopup(popup_50974062a33d4883a40bd8e447db1c10)
        ;

        
    
    
            var marker_689ba78a97e54f4ea2422c67b4b016df = L.marker(
                [44.803584, 11.053442],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ee64772920a044999677ad767011d4d9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_689ba78a97e54f4ea2422c67b4b016df.setIcon(icon_ee64772920a044999677ad767011d4d9);
        
    
        var popup_5ab0fbea70904867b7dc07b7b6996ba1 = L.popup({"maxWidth": 2650});

        
            var i_frame_79209675345f499292c75d4382264c72 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNlbGxpIEZlcnJvdmlhcmkgZGkgU2FuIFByb3NwZXJvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyMDUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5ab0fbea70904867b7dc07b7b6996ba1.setContent(i_frame_79209675345f499292c75d4382264c72);
        

        marker_689ba78a97e54f4ea2422c67b4b016df.bindPopup(popup_5ab0fbea70904867b7dc07b7b6996ba1)
        ;

        
    
    
            var marker_41918d5fdba14d6097306fd7caff742a = L.marker(
                [44.916859, 10.859534],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_ef35ca46679541d4a7774d3b7ff739ef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_41918d5fdba14d6097306fd7caff742a.setIcon(icon_ef35ca46679541d4a7774d3b7ff739ef);
        
    
        var popup_925d5063cee546838b2a057b1554b144 = L.popup({"maxWidth": 2650});

        
            var i_frame_5b470aa3b2554ca1bbe15baa6fe67d14 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIEFzc3VudGEgZSBwZXJ0aW5lbnplIC0gSUkgIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzNzcxMjQuNDUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE5MDY3Ljc5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_925d5063cee546838b2a057b1554b144.setContent(i_frame_5b470aa3b2554ca1bbe15baa6fe67d14);
        

        marker_41918d5fdba14d6097306fd7caff742a.bindPopup(popup_925d5063cee546838b2a057b1554b144)
        ;

        
    
    
            var marker_48d3e0b2692e4289acf97fad54ffb133 = L.marker(
                [44.840861, 10.95412],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_6e7e76bb23164f478b024bdaf0e4f4a5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_48d3e0b2692e4289acf97fad54ffb133.setIcon(icon_6e7e76bb23164f478b024bdaf0e4f4a5);
        
    
        var popup_cfeb21e6f9cd4a4a955ade74f43bb017 = L.popup({"maxWidth": 2650});

        
            var i_frame_8d8090bca9a04f6883d8ba72fa3acf41 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBEZWxlZ2F6aW9uZSBNdW5pY2lwYWxlIGluIFJvdmVyZXRvIHMvUyAgLSBmYWJicmljYXRpIHBlcnRpbmVuemlhbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTc0ODYuMzIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cfeb21e6f9cd4a4a955ade74f43bb017.setContent(i_frame_8d8090bca9a04f6883d8ba72fa3acf41);
        

        marker_48d3e0b2692e4289acf97fad54ffb133.bindPopup(popup_cfeb21e6f9cd4a4a955ade74f43bb017)
        ;

        
    
    
            var marker_444cc05c9cc64088849570f45204c1f1 = L.marker(
                [44.950520000000004, 11.422724],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_faa3676b062f4c559a31d1bec9f6b233 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_444cc05c9cc64088849570f45204c1f1.setIcon(icon_faa3676b062f4c559a31d1bec9f6b233);
        
    
        var popup_6299483946774f33ac4b64d5a998468a = L.popup({"maxWidth": 2650});

        
            var i_frame_166cbb439c7b4e21aebae6d2a1064869 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBSb2NjYSBQb3NzZW50ZSAtIHN0YWxjaW8gSUkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6299483946774f33ac4b64d5a998468a.setContent(i_frame_166cbb439c7b4e21aebae6d2a1064869);
        

        marker_444cc05c9cc64088849570f45204c1f1.bindPopup(popup_6299483946774f33ac4b64d5a998468a)
        ;

        
    
    
            var marker_3617cdbcb4db4e749b74a2d04fb901c7 = L.marker(
                [44.878498, 11.421831],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_6abc61b8907540998c6e1899c9e6b092 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3617cdbcb4db4e749b74a2d04fb901c7.setIcon(icon_6abc61b8907540998c6e1899c9e6b092);
        
    
        var popup_5f211ce1ea5d45818e5ab31364107466 = L.popup({"maxWidth": 2650});

        
            var i_frame_d2104ae1afaa485a92947569ee0fecbe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBjYXBvbHVvZ28gQm9uZGVubyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE2MjQwMTIuNzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDgyMzI1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5f211ce1ea5d45818e5ab31364107466.setContent(i_frame_d2104ae1afaa485a92947569ee0fecbe);
        

        marker_3617cdbcb4db4e749b74a2d04fb901c7.bindPopup(popup_5f211ce1ea5d45818e5ab31364107466)
        ;

        
    
    
            var marker_94e7740d21af49c98d04b730e081afca = L.marker(
                [44.889817, 10.903478999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_2b5591a5f6cf4183a359465e33fa5a0f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_94e7740d21af49c98d04b730e081afca.setIcon(icon_2b5591a5f6cf4183a359465e33fa5a0f);
        
    
        var popup_202428b936774f0b84acc74596caf7ce = L.popup({"maxWidth": 2650});

        
            var i_frame_d2e2eeaa93584aba893120c508134842 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuTWljaGVsZSBBcmNhbmdlbG8gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIyNTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_202428b936774f0b84acc74596caf7ce.setContent(i_frame_d2e2eeaa93584aba893120c508134842);
        

        marker_94e7740d21af49c98d04b730e081afca.bindPopup(popup_202428b936774f0b84acc74596caf7ce)
        ;

        
    
    
            var marker_a3bb6cecc08c4fab9f4cf7e5614d114e = L.marker(
                [44.913309999999996, 10.981861],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_351409160fdd4943a1af52d111a13d56 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a3bb6cecc08c4fab9f4cf7e5614d114e.setIcon(icon_351409160fdd4943a1af52d111a13d56);
        
    
        var popup_a46d6179620b42c9a18fb937fa893387 = L.popup({"maxWidth": 2650});

        
            var i_frame_03d86e41cb36473aa5eca1b5820c8d52 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUGFvbG8gQXBvc3RvbG8gZSBjYW1wYW5pbGUgLyBEdW9tbyAtIFBhcnJvY2NoaWEgZGVsbGEgQ29udmVyc2lvbmUgZGkgUy4gUGFvbG8gQXBvc3RvbG8gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a46d6179620b42c9a18fb937fa893387.setContent(i_frame_03d86e41cb36473aa5eca1b5820c8d52);
        

        marker_a3bb6cecc08c4fab9f4cf7e5614d114e.bindPopup(popup_a46d6179620b42c9a18fb937fa893387)
        ;

        
    
    
            var marker_0c69ac7e748e432dbd02a6c7c8b981cd = L.marker(
                [44.841221999999995, 10.955729],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_fcd3965ca7da4dcd8f8fcd38b98e2ddf = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_0c69ac7e748e432dbd02a6c7c8b981cd.setIcon(icon_fcd3965ca7da4dcd8f8fcd38b98e2ddf);
        
    
        var popup_7d4070a63de9499690f179f86ad1597d = L.popup({"maxWidth": 2650});

        
            var i_frame_c8e0676d9e0d475f82a7d369afdc1e5d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYXJyb2NjaGlhIGRpIFNhbnRhIENhdGVyaW5hIGRpIEFsZXNzYW5kcmlhIGNvbiBjYW1wYW5pbGUgLyBDYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjg2MTkuMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7d4070a63de9499690f179f86ad1597d.setContent(i_frame_c8e0676d9e0d475f82a7d369afdc1e5d);
        

        marker_0c69ac7e748e432dbd02a6c7c8b981cd.bindPopup(popup_7d4070a63de9499690f179f86ad1597d)
        ;

        
    
    
            var marker_ad90700997934ecf86dcc0b4184e9b5c = L.marker(
                [44.762147999999996, 11.472658000000001],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_32311e38ae7c414b860d63e11fdddae2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ad90700997934ecf86dcc0b4184e9b5c.setIcon(icon_32311e38ae7c414b860d63e11fdddae2);
        
    
        var popup_d3096a669f354c9a9d1fcf21539227ce = L.popup({"maxWidth": 2650});

        
            var i_frame_dffcb5d8a1b645beb0b79cdb716316bd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYmJhemlhIGRpIFMuIE1pY2hlbGUgLyBFeCBjaGllc2EgYWJiYXppYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d3096a669f354c9a9d1fcf21539227ce.setContent(i_frame_dffcb5d8a1b645beb0b79cdb716316bd);
        

        marker_ad90700997934ecf86dcc0b4184e9b5c.bindPopup(popup_d3096a669f354c9a9d1fcf21539227ce)
        ;

        
    
    
            var marker_45666d4a75a04ba9a36a9d65555b4681 = L.marker(
                [44.83283, 11.463131],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_32e3e79e5ca54812812dc7b79116c58b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_45666d4a75a04ba9a36a9d65555b4681.setIcon(icon_32e3e79e5ca54812812dc7b79116c58b);
        
    
        var popup_aa960b22db7248e48446a91714f5ec7d = L.popup({"maxWidth": 2650});

        
            var i_frame_07d1a81248eb4f7693c2be7d8cea10e9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXBwZWxsYSBkZWxsZSBCZWF0YSBWZXJnaW5lIGRpIFMuIEx1Y2EgKE9yYXRvcmlvKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFCRUxMTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aa960b22db7248e48446a91714f5ec7d.setContent(i_frame_07d1a81248eb4f7693c2be7d8cea10e9);
        

        marker_45666d4a75a04ba9a36a9d65555b4681.bindPopup(popup_aa960b22db7248e48446a91714f5ec7d)
        ;

        
    
    
            var marker_7db08c276bdc4e5aa3bc54ccadd85646 = L.marker(
                [44.865299, 11.391478999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_63a22f2f24f441eb868c6ac32988d7bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7db08c276bdc4e5aa3bc54ccadd85646.setIcon(icon_63a22f2f24f441eb868c6ac32988d7bb);
        
    
        var popup_77b3b7efd5944d7388dc62bdaa45cb6e = L.popup({"maxWidth": 2650});

        
            var i_frame_ac3bcd9bdb0e46c585cbf1a5f355382a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsbyBkaSBTYW50YSBCaWFuY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_77b3b7efd5944d7388dc62bdaa45cb6e.setContent(i_frame_ac3bcd9bdb0e46c585cbf1a5f355382a);
        

        marker_7db08c276bdc4e5aa3bc54ccadd85646.bindPopup(popup_77b3b7efd5944d7388dc62bdaa45cb6e)
        ;

        
    
    
            var marker_cba382e4e8d747f1a2b208ac1935604f = L.marker(
                [44.779004, 11.042415],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_fe432d15a19f4227a60d5484caf58710 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_cba382e4e8d747f1a2b208ac1935604f.setIcon(icon_fe432d15a19f4227a60d5484caf58710);
        
    
        var popup_38242d8a7e9d4eba9e2464c5329dd3ae = L.popup({"maxWidth": 2650});

        
            var i_frame_bba3213570da4aebba29f24370731f49 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlbGxlIFRvcnJpIC8gUGFsYXp6byBpIFRvcnJpb25pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_38242d8a7e9d4eba9e2464c5329dd3ae.setContent(i_frame_bba3213570da4aebba29f24370731f49);
        

        marker_cba382e4e8d747f1a2b208ac1935604f.bindPopup(popup_38242d8a7e9d4eba9e2464c5329dd3ae)
        ;

        
    
    
            var marker_54b4364337a548f89ecbc02bfecb4ad0 = L.marker(
                [44.837958, 11.142955],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_e8341afc7aef4001857f2cfc35a48ce5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_54b4364337a548f89ecbc02bfecb4ad0.setIcon(icon_e8341afc7aef4001857f2cfc35a48ce5);
        
    
        var popup_a1c4ea5e20fd4fbbb363d91ba1e63a79 = L.popup({"maxWidth": 2650});

        
            var i_frame_a5bc204e8af948dbb2856774ff10835e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWxsYSBleCBEdWNhbGUgZSBwYXJjbyAvIFZpbGxhIEZlcnJpIC8gQ2FzaW5vIGRlbCBEdWNhIC8gVmlsbGlubyBkdWNhbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a1c4ea5e20fd4fbbb363d91ba1e63a79.setContent(i_frame_a5bc204e8af948dbb2856774ff10835e);
        

        marker_54b4364337a548f89ecbc02bfecb4ad0.bindPopup(popup_a1c4ea5e20fd4fbbb363d91ba1e63a79)
        ;

        
    
    
            var marker_3ca4ab2613344ed384cc8e1b4d396e97 = L.marker(
                [44.783875, 10.884853999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f6f0466aa1044d9aade7700555b249be = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3ca4ab2613344ed384cc8e1b4d396e97.setIcon(icon_f6f0466aa1044d9aade7700555b249be);
        
    
        var popup_14118a76a9744707bc05ee81d38e6cec = L.popup({"maxWidth": 2650});

        
            var i_frame_16d2fae1049f495f9084a0b84e27abfe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBkaSB2aWEgVGVycmFwaWVuaSAvIFRvcnJlIER1w7IgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_14118a76a9744707bc05ee81d38e6cec.setContent(i_frame_16d2fae1049f495f9084a0b84e27abfe);
        

        marker_3ca4ab2613344ed384cc8e1b4d396e97.bindPopup(popup_14118a76a9744707bc05ee81d38e6cec)
        ;

        
    
    
            var marker_c94463db2c684ea19b1e7e3a9ddb69d4 = L.marker(
                [44.838551, 11.087088],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_dc7ca23746be477aa32cd0a4a5583974 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c94463db2c684ea19b1e7e3a9ddb69d4.setIcon(icon_dc7ca23746be477aa32cd0a4a5583974);
        
    
        var popup_e9caaad4edfe45f1acc0142ad9bee964 = L.popup({"maxWidth": 2650});

        
            var i_frame_84c3d59219d7466c9ead072113c0c7ed = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBNYWxjYW50b25lIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUVET0xMQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e9caaad4edfe45f1acc0142ad9bee964.setContent(i_frame_84c3d59219d7466c9ead072113c0c7ed);
        

        marker_c94463db2c684ea19b1e7e3a9ddb69d4.bindPopup(popup_e9caaad4edfe45f1acc0142ad9bee964)
        ;

        
    
    
            var marker_7269d75fe18f418487adf3066016f621 = L.marker(
                [44.794314, 11.235204],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_90851a27bf254f279e0c4e271551c218 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7269d75fe18f418487adf3066016f621.setIcon(icon_90851a27bf254f279e0c4e271551c218);
        
    
        var popup_b08a92d66e124ba8974225e46e3ea331 = L.popup({"maxWidth": 2650});

        
            var i_frame_d1a45a0da025446e9b59a2904d60839f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGdpw6AgUGVwb2xpIC8gQ2FzdGVsbG8gUGVwb2xpIC8gUGFsYXp6byBUb3Jsb25pYSBlIE9yYXRvcmlvIFZlcmdpbmUgQXNzdW50YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b08a92d66e124ba8974225e46e3ea331.setContent(i_frame_d1a45a0da025446e9b59a2904d60839f);
        

        marker_7269d75fe18f418487adf3066016f621.bindPopup(popup_b08a92d66e124ba8974225e46e3ea331)
        ;

        
    
    
            var marker_ffd51d43a1f34b818752be242859ed5f = L.marker(
                [44.728845, 11.287516],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3a5f382dd1474287996f698cea1622ee = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_ffd51d43a1f34b818752be242859ed5f.setIcon(icon_3a5f382dd1474287996f698cea1622ee);
        
    
        var popup_a1e1dcf7b1a44983b9cdb2d07c77c3a3 = L.popup({"maxWidth": 2650});

        
            var i_frame_f47e4d678d274c59bfe2c8fd34a9b7fe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgTWFkZGFsZW5hIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a1e1dcf7b1a44983b9cdb2d07c77c3a3.setContent(i_frame_f47e4d678d274c59bfe2c8fd34a9b7fe);
        

        marker_ffd51d43a1f34b818752be242859ed5f.bindPopup(popup_a1e1dcf7b1a44983b9cdb2d07c77c3a3)
        ;

        
    
    
            var marker_93aac641798e4d398468e065affb0e68 = L.marker(
                [44.919138000000004, 10.801507],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_dfab32747f074a96a036462b0fe0b99d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_93aac641798e4d398468e065affb0e68.setIcon(icon_dfab32747f074a96a036462b0fe0b99d);
        
    
        var popup_9cca377317f54b868f177de3c72b5741 = L.popup({"maxWidth": 2650});

        
            var i_frame_5a0e0b2df16b4be5aa8788c41221229e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWxsYSBGYXNzYXRpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9cca377317f54b868f177de3c72b5741.setContent(i_frame_5a0e0b2df16b4be5aa8788c41221229e);
        

        marker_93aac641798e4d398468e065affb0e68.bindPopup(popup_9cca377317f54b868f177de3c72b5741)
        ;

        
    
    
            var marker_a0e41f17ab2645b2814fed507c865e14 = L.marker(
                [44.913787, 10.801011],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7e6bfb5ecc0a4cf1ac198436930e968c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a0e41f17ab2645b2814fed507c865e14.setIcon(icon_7e6bfb5ecc0a4cf1ac198436930e968c);
        
    
        var popup_f175b0a611724eb48204a24184ae0489 = L.popup({"maxWidth": 2650});

        
            var i_frame_e46bd88498d545ca9b40c5daf82542ba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBWZW5lcmlvIGVkIGFubmVzc2Egem9uYSB2ZXJkZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f175b0a611724eb48204a24184ae0489.setContent(i_frame_e46bd88498d545ca9b40c5daf82542ba);
        

        marker_a0e41f17ab2645b2814fed507c865e14.bindPopup(popup_f175b0a611724eb48204a24184ae0489)
        ;

        
    
    
            var marker_cf59936f62ae428488b874b8fe152fd3 = L.marker(
                [44.917473, 10.9874],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_da171141d99e4084b2d893c516330af5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_cf59936f62ae428488b874b8fe152fd3.setIcon(icon_da171141d99e4084b2d893c516330af5);
        
    
        var popup_cd09353619e84173be4d65b14e1850b8 = L.popup({"maxWidth": 2650});

        
            var i_frame_986f258d72f14ec6bcb220b92d7537a5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBOdW92byBQb2xvIFNjb2xhc3RpY28gKG1lZGllIGUgcGFsZXN0cmEpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA3NTQyNTk5LjM1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cd09353619e84173be4d65b14e1850b8.setContent(i_frame_986f258d72f14ec6bcb220b92d7537a5);
        

        marker_cf59936f62ae428488b874b8fe152fd3.bindPopup(popup_cd09353619e84173be4d65b14e1850b8)
        ;

        
    
    
            var marker_477569bf460b46c8ba8fa2a227834e9f = L.marker(
                [44.894351, 11.078574],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3efeb3799548446ab177363e5dc78e8a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_477569bf460b46c8ba8fa2a227834e9f.setIcon(icon_3efeb3799548446ab177363e5dc78e8a);
        
    
        var popup_65b80a3d9cee47c5a7b08c5f4a3546f9 = L.popup({"maxWidth": 2650});

        
            var i_frame_5ceb308948474dc383df8f1678efaeac = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbmkgY29tdW5hbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI2NjMwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_65b80a3d9cee47c5a7b08c5f4a3546f9.setContent(i_frame_5ceb308948474dc383df8f1678efaeac);
        

        marker_477569bf460b46c8ba8fa2a227834e9f.bindPopup(popup_65b80a3d9cee47c5a7b08c5f4a3546f9)
        ;

        
    
    
            var marker_35137e70063c40d18b4dce1b509d989f = L.marker(
                [44.88097, 11.07726],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_f8ede9c0f0144827889c80e9ed8c6c6a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_35137e70063c40d18b4dce1b509d989f.setIcon(icon_f8ede9c0f0144827889c80e9ed8c6c6a);
        
    
        var popup_b94a4a86581248eaa18533f8f80abe57 = L.popup({"maxWidth": 2650});

        
            var i_frame_400c83d5d1224f6f9e3d82a417b2284c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gTnVvdG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEyMzUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b94a4a86581248eaa18533f8f80abe57.setContent(i_frame_400c83d5d1224f6f9e3d82a417b2284c);
        

        marker_35137e70063c40d18b4dce1b509d989f.bindPopup(popup_b94a4a86581248eaa18533f8f80abe57)
        ;

        
    
    
            var marker_85859230f1d74e7fa62be1a6bd3ed03b = L.marker(
                [44.888187, 11.06525],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_0c47208dc17e43f4bff19e2bd94b4cfd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_85859230f1d74e7fa62be1a6bd3ed03b.setIcon(icon_0c47208dc17e43f4bff19e2bd94b4cfd);
        
    
        var popup_4303e83193d64f49ac074d1e8a76aec4 = L.popup({"maxWidth": 2650});

        
            var i_frame_7b50cbaf0c6547dab25a2557e436b0b3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gTnVvdm8gLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTc5ODM5LjQyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA4OTkxLjk3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4303e83193d64f49ac074d1e8a76aec4.setContent(i_frame_7b50cbaf0c6547dab25a2557e436b0b3);
        

        marker_85859230f1d74e7fa62be1a6bd3ed03b.bindPopup(popup_4303e83193d64f49ac074d1e8a76aec4)
        ;

        
    
    
            var marker_5f432adb0b384682a9aa12de2f889dc3 = L.marker(
                [44.935553999999996, 11.233742],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_3a2ff5356cac42d8a9b59330509a89ef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5f432adb0b384682a9aa12de2f889dc3.setIcon(icon_3a2ff5356cac42d8a9b59330509a89ef);
        
    
        var popup_0e84588b5f2f4955863d9c40ea6edd0a = L.popup({"maxWidth": 2650});

        
            var i_frame_739b485e2b89409e9d11d9fb600158e5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNhIENvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxODAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0e84588b5f2f4955863d9c40ea6edd0a.setContent(i_frame_739b485e2b89409e9d11d9fb600158e5);
        

        marker_5f432adb0b384682a9aa12de2f889dc3.bindPopup(popup_0e84588b5f2f4955863d9c40ea6edd0a)
        ;

        
    
    
            var marker_83eddb35d8fe432aaa4eafe40f30d9e9 = L.marker(
                [44.863440000000004, 11.059493],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_9b59f6b351584f68a92a68a25a0edfaa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_83eddb35d8fe432aaa4eafe40f30d9e9.setIcon(icon_9b59f6b351584f68a92a68a25a0edfaa);
        
    
        var popup_1e9ce63e68a04f868034ef1c88ada46b = L.popup({"maxWidth": 2650});

        
            var i_frame_2662c5af467a40b2a3847f56a8363cda = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBTYW4gR2lhY29tbyBSb25jb2xlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1e9ce63e68a04f868034ef1c88ada46b.setContent(i_frame_2662c5af467a40b2a3847f56a8363cda);
        

        marker_83eddb35d8fe432aaa4eafe40f30d9e9.bindPopup(popup_1e9ce63e68a04f868034ef1c88ada46b)
        ;

        
    
    
            var marker_45af641e17624f95a30445f8b836d5d9 = L.marker(
                [44.875192, 11.128319],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_37673abb29724789989179219d4d03be = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_45af641e17624f95a30445f8b836d5d9.setIcon(icon_37673abb29724789989179219d4d03be);
        
    
        var popup_a02ed566a93c4d22886fd039951545e9 = L.popup({"maxWidth": 2650});

        
            var i_frame_929c02e011894d78a7aa083fb865c653 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBNb3J0aXp6dW9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQyODk4OS45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjMyNDAuMjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBub3Qgc3RhcnRlZCB5ZXQ8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a02ed566a93c4d22886fd039951545e9.setContent(i_frame_929c02e011894d78a7aa083fb865c653);
        

        marker_45af641e17624f95a30445f8b836d5d9.bindPopup(popup_a02ed566a93c4d22886fd039951545e9)
        ;

        
    
    
            var marker_9ef4e61f61784256ade50837890dd22f = L.marker(
                [44.924225, 11.179802],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_38a1a7c14494486da891c5309f62ce57 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9ef4e61f61784256ade50837890dd22f.setIcon(icon_38a1a7c14494486da891c5309f62ce57);
        
    
        var popup_c823f58052e249fc806047b65a96f056 = L.popup({"maxWidth": 2650});

        
            var i_frame_09c216524791400fbc7fb6d7e179d5e8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBHYXZlbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzU0NDYwLjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNjQ3My4xOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIG5vdCBzdGFydGVkIHlldDwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c823f58052e249fc806047b65a96f056.setContent(i_frame_09c216524791400fbc7fb6d7e179d5e8);
        

        marker_9ef4e61f61784256ade50837890dd22f.bindPopup(popup_c823f58052e249fc806047b65a96f056)
        ;

        
    
    
            var marker_5ff1de6b2dab44b687b087d43b062be5 = L.marker(
                [44.958257, 11.086097],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_b61feb786ef14496b3b4d8380968d1ff = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_5ff1de6b2dab44b687b087d43b062be5.setIcon(icon_b61feb786ef14496b3b4d8380968d1ff);
        
    
        var popup_09257d267350493ea38337aab375a3e9 = L.popup({"maxWidth": 2650});

        
            var i_frame_7c84108fe0a64c44bb52c61853961cf8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBUcmFtdXNjaGlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjIwOTc3LjQxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNDM4Mi4zIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_09257d267350493ea38337aab375a3e9.setContent(i_frame_7c84108fe0a64c44bb52c61853961cf8);
        

        marker_5ff1de6b2dab44b687b087d43b062be5.bindPopup(popup_09257d267350493ea38337aab375a3e9)
        ;

        
    
    
            var marker_b8b8a7aadc9442418760122f07bc0c4d = L.marker(
                [44.888414000000004, 11.070889999999999],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_eddca309fce94da2911b6f4e97a51623 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b8b8a7aadc9442418760122f07bc0c4d.setIcon(icon_eddca309fce94da2911b6f4e97a51623);
        
    
        var popup_ad7e0d98109e4ab7b7f65b7d0a677696 = L.popup({"maxWidth": 2650});

        
            var i_frame_c93e3a19e5994fc687575d185c7b26f0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTdGFkaW8gTG9sbGkgLSBUcmlidW5lIG11cm8gZGkgY2ludGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQxNzMxLjUxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ad7e0d98109e4ab7b7f65b7d0a677696.setContent(i_frame_c93e3a19e5994fc687575d185c7b26f0);
        

        marker_b8b8a7aadc9442418760122f07bc0c4d.bindPopup(popup_ad7e0d98109e4ab7b7f65b7d0a677696)
        ;

        
    
    
            var marker_3ccc1c75a85241458dc563a1c7a2fae1 = L.marker(
                [44.825285, 11.461107],
                {}
            ).addTo(feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9);
        
    
            var icon_7eb817db17db4604be27c0b1bb25f134 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3ccc1c75a85241458dc563a1c7a2fae1.setIcon(icon_7eb817db17db4604be27c0b1bb25f134);
        
    
        var popup_aca05067eae94659a139ab858faa1bb0 = L.popup({"maxWidth": 2650});

        
            var i_frame_97bcd6165936418eb201b3e747aa93f8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gZGVsbGEgQ2hpZXNhIFBhcnJvY2NoaWFsZSBkaSBTYW4gUGFvbG8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFCRUxMTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3Mgbm90IHN0YXJ0ZWQgeWV0PC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aca05067eae94659a139ab858faa1bb0.setContent(i_frame_97bcd6165936418eb201b3e747aa93f8);
        

        marker_3ccc1c75a85241458dc563a1c7a2fae1.bindPopup(popup_aca05067eae94659a139ab858faa1bb0)
        ;

        
    
    
            var feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702 = L.featureGroup.subGroup(
                marker_cluster_8edf1e1ed79e4e3ab4a8c788b9a7fa16
            );
            feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702.addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
    
            var marker_1698878e20c64b0a92e34f44d194fcfb = L.marker(
                [44.729456, 11.291151],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_b32d3c324c3e43e2870b18656eaa2b91 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_1698878e20c64b0a92e34f44d194fcfb.setIcon(icon_b32d3c324c3e43e2870b18656eaa2b91);
        
    
        var popup_305899ea843b4104bc1f7b442d1ff6ef = L.popup({"maxWidth": 2650});

        
            var i_frame_3240924315b444498e78ccb5ca6e2c37 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTY29sYXN0aWNvIFRhZGRpYSBjb3JwbyBwcmluY2lwYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxNjMzNjQuODkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDc2NDU2LjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_305899ea843b4104bc1f7b442d1ff6ef.setContent(i_frame_3240924315b444498e78ccb5ca6e2c37);
        

        marker_1698878e20c64b0a92e34f44d194fcfb.bindPopup(popup_305899ea843b4104bc1f7b442d1ff6ef)
        ;

        
    
    
            var marker_8366a831103f40ddbdff39cbaed02978 = L.marker(
                [44.894698, 10.89531],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_c30cd3a748ae4c9fa6d7ede4dda7a280 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_8366a831103f40ddbdff39cbaed02978.setIcon(icon_c30cd3a748ae4c9fa6d7ede4dda7a280);
        
    
        var popup_97b9c92818974e93872a593e7e62595c = L.popup({"maxWidth": 2650});

        
            var i_frame_e41d2e007412469daae04cd1b66fe08c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gY29tdW5hbGUgZSBzZWRlIGRlbGxhIEJhbmRhIENpdHRhZGluYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTM3NTQ5OC4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTEzNzc2Ny44MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_97b9c92818974e93872a593e7e62595c.setContent(i_frame_e41d2e007412469daae04cd1b66fe08c);
        

        marker_8366a831103f40ddbdff39cbaed02978.bindPopup(popup_97b9c92818974e93872a593e7e62595c)
        ;

        
    
    
            var marker_296b313bc3024dc38dd39e9008e486d6 = L.marker(
                [44.89454, 10.903153],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_85dd75058e324cadadbbbdd5a1040a72 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_296b313bc3024dc38dd39e9008e486d6.setIcon(icon_85dd75058e324cadadbbbdd5a1040a72);
        
    
        var popup_649b82547dd848e288c75123dd94ce7f = L.popup({"maxWidth": 2650});

        
            var i_frame_737af2476c1d416f92ae36758af64696 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIFByb3RldHRhIFJvYmVydG8gUm9zc2kgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE2MzE5MTYuOTkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEyMDk3OTguMTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_649b82547dd848e288c75123dd94ce7f.setContent(i_frame_737af2476c1d416f92ae36758af64696);
        

        marker_296b313bc3024dc38dd39e9008e486d6.bindPopup(popup_649b82547dd848e288c75123dd94ce7f)
        ;

        
    
    
            var marker_91b6b0e13bcf41099b5f164e45b6655e = L.marker(
                [44.766876, 11.486249],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_563b394557c54b32a940abc52736150b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_91b6b0e13bcf41099b5f164e45b6655e.setIcon(icon_563b394557c54b32a940abc52736150b);
        
    
        var popup_bf6dfad9287748bb91d5ef46237c94d5 = L.popup({"maxWidth": 2650});

        
            var i_frame_f01de020554247f383caa1c3070b967a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgRWxlbWVudGFyZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBPR0dJTyBSRU5BVElDTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE0MTUxODAuNTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDYyNzgxMC4zOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bf6dfad9287748bb91d5ef46237c94d5.setContent(i_frame_f01de020554247f383caa1c3070b967a);
        

        marker_91b6b0e13bcf41099b5f164e45b6655e.bindPopup(popup_bf6dfad9287748bb91d5ef46237c94d5)
        ;

        
    
    
            var marker_4a7f55ee168f4808b867b341ebd8f15c = L.marker(
                [44.736206, 11.301155],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_275c86498d9f487ab1a3c73faa9c9cb1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_4a7f55ee168f4808b867b341ebd8f15c.setIcon(icon_275c86498d9f487ab1a3c73faa9c9cb1);
        
    
        var popup_0b8a66f2e0bb4f0da59a7a144e8ea0dc = L.popup({"maxWidth": 2650});

        
            var i_frame_4543f949b70742f586b0b0184b5faf47 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gQ2FycmkgYWxsZWdvcmljaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTg1NzgxLjY1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxODI0NzMuNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0b8a66f2e0bb4f0da59a7a144e8ea0dc.setContent(i_frame_4543f949b70742f586b0b0184b5faf47);
        

        marker_4a7f55ee168f4808b867b341ebd8f15c.bindPopup(popup_0b8a66f2e0bb4f0da59a7a144e8ea0dc)
        ;

        
    
    
            var marker_324b72cb3b224733bbf34eb5515e90b3 = L.marker(
                [44.919484000000004, 10.804762],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_3e82b88a5f7e423f9d559dcc2138dac9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_324b72cb3b224733bbf34eb5515e90b3.setIcon(icon_3e82b88a5f7e423f9d559dcc2138dac9);
        
    
        var popup_859c278704624bb7964fc6eb2aee0504 = L.popup({"maxWidth": 2650});

        
            var i_frame_2f98410e1aaf4e288db8c17fa133197b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gZGlzYWJpbGkgZWRpZmljaW8gMzIgLSBjZW50cm8gZGlzYWJpbGkgZSBzZWRlIGFzc29jaWF6aW9uaSBkaSB2b2xvbnRhcmlhdG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE2NzgxNzMuODIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDU1MzgxMC45NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_859c278704624bb7964fc6eb2aee0504.setContent(i_frame_2f98410e1aaf4e288db8c17fa133197b);
        

        marker_324b72cb3b224733bbf34eb5515e90b3.bindPopup(popup_859c278704624bb7964fc6eb2aee0504)
        ;

        
    
    
            var marker_fb6e8fdcf63940c9a7be4443f7faaabb = L.marker(
                [44.875037, 11.129891],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_b2456d88659b42ada2bfce4e7aec447b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_fb6e8fdcf63940c9a7be4443f7faaabb.setIcon(icon_b2456d88659b42ada2bfce4e7aec447b);
        
    
        var popup_c077c06899dd4fad9c7e5eaedc94e3e9 = L.popup({"maxWidth": 2650});

        
            var i_frame_764396f4212b4881bed2a8037824451f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExlb25hcmRvIExpbW9zaW5vIGFzaWxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTYzMTMxLjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0ODY1MS42MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c077c06899dd4fad9c7e5eaedc94e3e9.setContent(i_frame_764396f4212b4881bed2a8037824451f);
        

        marker_fb6e8fdcf63940c9a7be4443f7faaabb.bindPopup(popup_c077c06899dd4fad9c7e5eaedc94e3e9)
        ;

        
    
    
            var marker_2a0fbfa6d19940e79c0eccc28c1c4183 = L.marker(
                [44.724041, 11.148241],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_67a9cf15aa0549c8953c8089aa9e5ce9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_2a0fbfa6d19940e79c0eccc28c1c4183.setIcon(icon_67a9cf15aa0549c8953c8089aa9e5ce9);
        
    
        var popup_21e3234a1839421183d7a0741174979e = L.popup({"maxWidth": 2650});

        
            var i_frame_567cad3362694ce5b437b2b3abb26909 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRlaSBHaW92YW5pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDY0NTExNi41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0NjM0OTEuNTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_21e3234a1839421183d7a0741174979e.setContent(i_frame_567cad3362694ce5b437b2b3abb26909);
        

        marker_2a0fbfa6d19940e79c0eccc28c1c4183.bindPopup(popup_21e3234a1839421183d7a0741174979e)
        ;

        
    
    
            var marker_eb2775f51f15467c88539dedc2f99960 = L.marker(
                [44.732544, 11.554053],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_1f0534e963584d88a5d51ea984edd236 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_eb2775f51f15467c88539dedc2f99960.setIcon(icon_1f0534e963584d88a5d51ea984edd236);
        
    
        var popup_e57a65fa61fe4eb3ab2783cafea4e48e = L.popup({"maxWidth": 2650});

        
            var i_frame_2d4445d9bcf84808be8884dd1dbcbfb1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRpIFNhbnRhIENhdGVyaW5hIGRpIEdhbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzkxOTQ0LjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMDQ5MjIuMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e57a65fa61fe4eb3ab2783cafea4e48e.setContent(i_frame_2d4445d9bcf84808be8884dd1dbcbfb1);
        

        marker_eb2775f51f15467c88539dedc2f99960.bindPopup(popup_e57a65fa61fe4eb3ab2783cafea4e48e)
        ;

        
    
    
            var marker_464be088521a4e9a92d7128205b013e9 = L.marker(
                [44.765886, 11.484209],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_62c0a2d3726d4a5894557c59aa6ed1d2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_464be088521a4e9a92d7128205b013e9.setIcon(icon_62c0a2d3726d4a5894557c59aa6ed1d2);
        
    
        var popup_9798e772e1194bf7a1c759aeb6bdec0f = L.popup({"maxWidth": 2650});

        
            var i_frame_9557da71ccc045e9afc29bfe8f86d341 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjYXNhIGRlbCBMaXR0b3JpbyAtIENlbnRybyBjaXZpY28gLyBDYXNhIGRlbCBwb3BvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzMDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjQ1MDI2LjA1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9798e772e1194bf7a1c759aeb6bdec0f.setContent(i_frame_9557da71ccc045e9afc29bfe8f86d341);
        

        marker_464be088521a4e9a92d7128205b013e9.bindPopup(popup_9798e772e1194bf7a1c759aeb6bdec0f)
        ;

        
    
    
            var marker_8a351f595ed94e13ac823dcf249cf8c2 = L.marker(
                [44.790925, 11.2966],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_659bc40989b2432d93e4849496f95ad9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_8a351f595ed94e13ac823dcf249cf8c2.setIcon(icon_659bc40989b2432d93e4849496f95ad9);
        
    
        var popup_b3456c96488241b88f1e174c7b59ff1d = L.popup({"maxWidth": 2650});

        
            var i_frame_d6a1d46e3edb4132b3a47d3dbac8702d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBYSUkgTW9yZWxsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjIxODYzLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE5MjU4NS4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b3456c96488241b88f1e174c7b59ff1d.setContent(i_frame_d6a1d46e3edb4132b3a47d3dbac8702d);
        

        marker_8a351f595ed94e13ac823dcf249cf8c2.bindPopup(popup_b3456c96488241b88f1e174c7b59ff1d)
        ;

        
    
    
            var marker_1bded8c5f2be43ef9426c001db5cf170 = L.marker(
                [44.8133, 11.305663000000001],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_57c739f60c764c5d9020ce3c4a4a6c76 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_1bded8c5f2be43ef9426c001db5cf170.setIcon(icon_57c739f60c764c5d9020ce3c4a4a6c76);
        
    
        var popup_58b34a4e186948d29f0f059efc77bd8c = L.popup({"maxWidth": 2650});

        
            var i_frame_b084205a876542c08a4767e28f0f63d2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBBbGJlcm9uZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjA5MzYyLjU0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA4OTk3NS45NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_58b34a4e186948d29f0f059efc77bd8c.setContent(i_frame_b084205a876542c08a4767e28f0f63d2);
        

        marker_1bded8c5f2be43ef9426c001db5cf170.bindPopup(popup_58b34a4e186948d29f0f059efc77bd8c)
        ;

        
    
    
            var marker_01ae3a3b929b4781baf9e8f85581a6c0 = L.marker(
                [44.826811, 11.329367],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_750715724e85466ba7f8863e641d116a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_01ae3a3b929b4781baf9e8f85581a6c0.setIcon(icon_750715724e85466ba7f8863e641d116a);
        
    
        var popup_d05b330bccab455ab34a8a86eb27d86b = L.popup({"maxWidth": 2650});

        
            var i_frame_0d63be5d44a949a988461c57fd03777f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBSZW5vIENlbnRlc2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI5ODk2NS45NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjkzNDY2LjU3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d05b330bccab455ab34a8a86eb27d86b.setContent(i_frame_0d63be5d44a949a988461c57fd03777f);
        

        marker_01ae3a3b929b4781baf9e8f85581a6c0.bindPopup(popup_d05b330bccab455ab34a8a86eb27d86b)
        ;

        
    
    
            var marker_b13b77db3844486789e7aa71e895b920 = L.marker(
                [44.765994, 11.28929],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_72288865b4c242c8aff203be85dee5d5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_b13b77db3844486789e7aa71e895b920.setIcon(icon_72288865b4c242c8aff203be85dee5d5);
        
    
        var popup_c69aa0335add47c5be6757f6b1a963ad = L.popup({"maxWidth": 2650});

        
            var i_frame_ffb231f3b6924c43ac664d7b7476153c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSByZW5henpvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0Njk1NzQuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQzNTU4MS43OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c69aa0335add47c5be6757f6b1a963ad.setContent(i_frame_ffb231f3b6924c43ac664d7b7476153c);
        

        marker_b13b77db3844486789e7aa71e895b920.bindPopup(popup_c69aa0335add47c5be6757f6b1a963ad)
        ;

        
    
    
            var marker_5f241b2dcd1c447ababf653f2078b2d1 = L.marker(
                [44.727096, 11.290417],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_9afdb63606394b4c9a308c4adef621d5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_5f241b2dcd1c447ababf653f2078b2d1.setIcon(icon_9afdb63606394b4c9a308c4adef621d5);
        
    
        var popup_57012e99a62d4c888ad7b7b76b6c9df8 = L.popup({"maxWidth": 2650});

        
            var i_frame_bc3785ab1b804239a51ba0169df8e5ec = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlbCBHb3Zlcm5hdG9yZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjU1MDIzLjY3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyMjk1MjEuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_57012e99a62d4c888ad7b7b76b6c9df8.setContent(i_frame_bc3785ab1b804239a51ba0169df8e5ec);
        

        marker_5f241b2dcd1c447ababf653f2078b2d1.bindPopup(popup_57012e99a62d4c888ad7b7b76b6c9df8)
        ;

        
    
    
            var marker_4794dffde58c4313ba0c904dac619580 = L.marker(
                [44.733482, 11.298119],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_eec7c83f4c9a451fab240fc79b8344db = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_4794dffde58c4313ba0c904dac619580.setIcon(icon_eec7c83f4c9a451fab240fc79b8344db);
        
    
        var popup_4388fca10cdc43b88ddf3371ef36abd6 = L.popup({"maxWidth": 2650});

        
            var i_frame_b02aa407daa544bb811d3d23329c26fa = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDZW50byBlIENhcHBlbGxhIGRlbCBDaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTI0MDQ1OC4zMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTAzNzEzNi40NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4388fca10cdc43b88ddf3371ef36abd6.setContent(i_frame_b02aa407daa544bb811d3d23329c26fa);
        

        marker_4794dffde58c4313ba0c904dac619580.bindPopup(popup_4388fca10cdc43b88ddf3371ef36abd6)
        ;

        
    
    
            var marker_a0f8ed70b5d74a6ba24ff786d257b254 = L.marker(
                [44.950457, 11.422736],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_b9836ca0b18c4a44a7aca3e861c2ad97 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_a0f8ed70b5d74a6ba24ff786d257b254.setIcon(icon_b9836ca0b18c4a44a7aca3e861c2ad97);
        
    
        var popup_d3a992ca3b624aeea529306da907ecbe = L.popup({"maxWidth": 2650});

        
            var i_frame_a3e70a572f764bb8b531b2e6fb560475 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBSb2NjYSBQb3NzZW50ZSAtIHN0cmFsY2lvIEkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgODIwNzQ0LjgzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNjYwNjUuOTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d3a992ca3b624aeea529306da907ecbe.setContent(i_frame_a3e70a572f764bb8b531b2e6fb560475);
        

        marker_a0f8ed70b5d74a6ba24ff786d257b254.bindPopup(popup_d3a992ca3b624aeea529306da907ecbe)
        ;

        
    
    
            var marker_24bc6b7c7b0b4c1e839ec0bb3474ba97 = L.marker(
                [44.87862, 11.421575],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_aa313716af944aa796e99307f40cfd87 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_24bc6b7c7b0b4c1e839ec0bb3474ba97.setIcon(icon_aa313716af944aa796e99307f40cfd87);
        
    
        var popup_e2713e6587f94a4b99654330238f6b60 = L.popup({"maxWidth": 2650});

        
            var i_frame_872afa23a04a44dc9eba63067359f7be = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBjYXBvbHVvZ28gQm9uZGVubyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTU0MzE5Mi4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTI3NTkyNy41OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e2713e6587f94a4b99654330238f6b60.setContent(i_frame_872afa23a04a44dc9eba63067359f7be);
        

        marker_24bc6b7c7b0b4c1e839ec0bb3474ba97.bindPopup(popup_e2713e6587f94a4b99654330238f6b60)
        ;

        
    
    
            var marker_ece687451f7e44f3ac9ac145ebfadc4a = L.marker(
                [44.914774, 10.981239],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_2442f1b689bc40cdad8c8e618ccaabb1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_ece687451f7e44f3ac9ac145ebfadc4a.setIcon(icon_2442f1b689bc40cdad8c8e618ccaabb1);
        
    
        var popup_9c60cc9fe0dd4fd4b42e7e938dda109e = L.popup({"maxWidth": 2650});

        
            var i_frame_81e0869fd65f438f8f4d4a149e7e3e79 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNlbGxvIGUgbWFnYXp6aW5vIGlkcmF1bGljbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjUzNjc5LjM0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA3OTc0MS4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9c60cc9fe0dd4fd4b42e7e938dda109e.setContent(i_frame_81e0869fd65f438f8f4d4a149e7e3e79);
        

        marker_ece687451f7e44f3ac9ac145ebfadc4a.bindPopup(popup_9c60cc9fe0dd4fd4b42e7e938dda109e)
        ;

        
    
    
            var marker_61c087f8c8c04d4c8bee5b656c72d4ac = L.marker(
                [44.848751, 11.070536],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_c10d4593120f466f82fed2e34424fe3a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_61c087f8c8c04d4c8bee5b656c72d4ac.setIcon(icon_c10d4593120f466f82fed2e34424fe3a);
        
    
        var popup_c4dea9e412cd433b9aa3c58bbc28a6d4 = L.popup({"maxWidth": 2650});

        
            var i_frame_541f08df7bd44b1a981ea0eb27fa4cfd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gQ29tdW5hbGUgRmFjY2hpbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjk5OTQzLjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIzNTQ4My40NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c4dea9e412cd433b9aa3c58bbc28a6d4.setContent(i_frame_541f08df7bd44b1a981ea0eb27fa4cfd);
        

        marker_61c087f8c8c04d4c8bee5b656c72d4ac.bindPopup(popup_c4dea9e412cd433b9aa3c58bbc28a6d4)
        ;

        
    
    
            var marker_4787e46b992e46189d6575d51c9e9bdc = L.marker(
                [44.946889, 11.286980999999999],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_9b8c526e28b047c0851cd074b843cc38 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_4787e46b992e46189d6575d51c9e9bdc.setIcon(icon_9b8c526e28b047c0851cd074b843cc38);
        
    
        var popup_0235f22ef2cb4693b6c3350a36e6490a = L.popup({"maxWidth": 2650});

        
            var i_frame_025db7c21095478a88718a913faeebf1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIE1vc3RpIChBbWJ1bGF0b3JpbyBwcmVsaWV2aSBlIGNlbnRybyByaWNyZWF0aXZvKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxOTEwMjkuNTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEzNzQwNS44OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0235f22ef2cb4693b6c3350a36e6490a.setContent(i_frame_025db7c21095478a88718a913faeebf1);
        

        marker_4787e46b992e46189d6575d51c9e9bdc.bindPopup(popup_0235f22ef2cb4693b6c3350a36e6490a)
        ;

        
    
    
            var marker_b21b402bd48743afa7a92c28dea54054 = L.marker(
                [44.713617, 11.307158],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_3abc06bac61d407693317a0b43dc1849 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_b21b402bd48743afa7a92c28dea54054.setIcon(icon_3abc06bac61d407693317a0b43dc1849);
        
    
        var popup_3ba0175cf128477d8b2def7f19164f7a = L.popup({"maxWidth": 2650});

        
            var i_frame_824341f4bc804c799a1ef182c7994a82 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb211bmUgZGkgUGlldmUgZGkgQ2VudG8gKFNlZGUgdWZmaWNpbyB0ZWNuaWNvKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNzQ5MDEuNDUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDY2NjI0LjQxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3ba0175cf128477d8b2def7f19164f7a.setContent(i_frame_824341f4bc804c799a1ef182c7994a82);
        

        marker_b21b402bd48743afa7a92c28dea54054.bindPopup(popup_3ba0175cf128477d8b2def7f19164f7a)
        ;

        
    
    
            var marker_f5101cebf0004d69a1dd8e1b4b43ca3c = L.marker(
                [44.918494, 10.807463],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_56a3b7094edf464b952c517e6a96afaa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_f5101cebf0004d69a1dd8e1b4b43ca3c.setIcon(icon_56a3b7094edf464b952c517e6a96afaa);
        
    
        var popup_cc4047d0e7f540a0b9cc19e24aeb8f63 = L.popup({"maxWidth": 2650});

        
            var i_frame_ad1f78f00b274a5ab035d4524871a53d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIEFzc3VudGEgZSBwZXJ0aW5lbnplIC0gSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTg3MzQwOS4wMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTU1MDA1Ni4yMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cc4047d0e7f540a0b9cc19e24aeb8f63.setContent(i_frame_ad1f78f00b274a5ab035d4524871a53d);
        

        marker_f5101cebf0004d69a1dd8e1b4b43ca3c.bindPopup(popup_cc4047d0e7f540a0b9cc19e24aeb8f63)
        ;

        
    
    
            var marker_bf6979c57a2241e98a6a9097958b6094 = L.marker(
                [44.759489, 11.171434],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_3790744c16c947f9a081920d30779aee = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_bf6979c57a2241e98a6a9097958b6094.setIcon(icon_3790744c16c947f9a081920d30779aee);
        
    
        var popup_c617bd2e4b55409ba30ffd3550d87067 = L.popup({"maxWidth": 2650});

        
            var i_frame_10ca6815866f4a1bbe986102686ff219 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVpIFNTLiBGcmFuY2VzY28gZSBDYXJsbyBPcGVyZSBwYXJyb2NjaGlhbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTg3MzI3LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMTU3NTQuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c617bd2e4b55409ba30ffd3550d87067.setContent(i_frame_10ca6815866f4a1bbe986102686ff219);
        

        marker_bf6979c57a2241e98a6a9097958b6094.bindPopup(popup_c617bd2e4b55409ba30ffd3550d87067)
        ;

        
    
    
            var marker_acaeea9c33c54ff5a88ca61ec893cf3a = L.marker(
                [44.759510999999996, 11.171363000000001],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_fdbe9b25142a494085a665c6181eb343 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_acaeea9c33c54ff5a88ca61ec893cf3a.setIcon(icon_fdbe9b25142a494085a665c6181eb343);
        
    
        var popup_82ce0507477b4f0dac690b917f6a3802 = L.popup({"maxWidth": 2650});

        
            var i_frame_4872f0de49574f9984d066abe280fb8b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVpIFNTLiBGcmFuY2VzY28gZSBDYXJsbyBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA3NjE2MjQuMjcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDU5ODc3NS40OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_82ce0507477b4f0dac690b917f6a3802.setContent(i_frame_4872f0de49574f9984d066abe280fb8b);
        

        marker_acaeea9c33c54ff5a88ca61ec893cf3a.bindPopup(popup_82ce0507477b4f0dac690b917f6a3802)
        ;

        
    
    
            var marker_38eada9e1b784c24be4603d8f98e9584 = L.marker(
                [44.787325, 11.171509],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_558fb5a61f2544bba42cdcc90dc3725c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_38eada9e1b784c24be4603d8f98e9584.setIcon(icon_558fb5a61f2544bba42cdcc90dc3725c);
        
    
        var popup_80c518d5b51542cab462912b8aab87eb = L.popup({"maxWidth": 2650});

        
            var i_frame_e87cc38623004fdaac1afec4a84a6d53 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gR2l1c2VwcGUgZGkgQ2FzZWxsZSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA2NDEwMDkuNDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQ4MjU4OC4xIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_80c518d5b51542cab462912b8aab87eb.setContent(i_frame_e87cc38623004fdaac1afec4a84a6d53);
        

        marker_38eada9e1b784c24be4603d8f98e9584.bindPopup(popup_80c518d5b51542cab462912b8aab87eb)
        ;

        
    
    
            var marker_837fb537626749bf90298f953f5ba6de = L.marker(
                [44.724643, 11.287723],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_7a38e94befc747799c217f4324282a4b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_837fb537626749bf90298f953f5ba6de.setIcon(icon_7a38e94befc747799c217f4324282a4b);
        
    
        var popup_b2ceacb779d94879af76ec5f88588c78 = L.popup({"maxWidth": 2650});

        
            var i_frame_9aecf41240bc4b7a9dda642cf26c8921 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYW50dWFyaW8gZGVsbGEgUm9jY2EgL0JlYXRhIHZlcmdpbmUgZGVsbGEgUm9jY2EgLyBnacOgIGRlbGxvIFNwaXJpdG8gU2FudG8gZSBjYW1wYW5pbGUgZSBwYXJ0ZSBkZWwgbW9uYXN0ZXJvIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxNzY1NTI2Ljc0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA3MTExMzEuMTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b2ceacb779d94879af76ec5f88588c78.setContent(i_frame_9aecf41240bc4b7a9dda642cf26c8921);
        

        marker_837fb537626749bf90298f953f5ba6de.bindPopup(popup_b2ceacb779d94879af76ec5f88588c78)
        ;

        
    
    
            var marker_0279af3fb98b407aa90df0e2d7389b3b = L.marker(
                [44.815104999999996, 11.306929],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_a2709c63df3b49bda9a75b2732e3a755 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_0279af3fb98b407aa90df0e2d7389b3b.setIcon(icon_a2709c63df3b49bda9a75b2732e3a755);
        
    
        var popup_42d30172b7ef4ebe881f7376aef0932a = L.popup({"maxWidth": 2650});

        
            var i_frame_61ef8a82609e422090675e530b69e753 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlbCBTYWxpY2UgZSBwZXJ0aW5lbnplIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMTY1OTQ2Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0NjQ5NjIuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_42d30172b7ef4ebe881f7376aef0932a.setContent(i_frame_61ef8a82609e422090675e530b69e753);
        

        marker_0279af3fb98b407aa90df0e2d7389b3b.bindPopup(popup_42d30172b7ef4ebe881f7376aef0932a)
        ;

        
    
    
            var marker_577847ebc22a4407be3541e719c0bfad = L.marker(
                [44.755717, 11.310580999999999],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_f77f1b85655c4db1a931a91f35f5689b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_577847ebc22a4407be3541e719c0bfad.setIcon(icon_f77f1b85655c4db1a931a91f35f5689b);
        
    
        var popup_02add1f6a0e94e04809a7d2bd3769d81 = L.popup({"maxWidth": 2650});

        
            var i_frame_c9ac469d91a84afaacbc8082cfcc2c6c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHaW9yZ2lvIGUgY2FtcGFuaWxlIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA2MDYzMDUuNzEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDUwODYxMC4wNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_02add1f6a0e94e04809a7d2bd3769d81.setContent(i_frame_c9ac469d91a84afaacbc8082cfcc2c6c);
        

        marker_577847ebc22a4407be3541e719c0bfad.bindPopup(popup_02add1f6a0e94e04809a7d2bd3769d81)
        ;

        
    
    
            var marker_3a6b04e063ec4fd8a18d2723b52e9a70 = L.marker(
                [44.838038, 11.362873],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_b79481ff2f404ed6942af07cab73ff64 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_3a6b04e063ec4fd8a18d2723b52e9a70.setIcon(icon_b79481ff2f404ed6942af07cab73ff64);
        
    
        var popup_53b6b8407c4d4f9a90083658196bda8d = L.popup({"maxWidth": 2650});

        
            var i_frame_7a0cc3425db54ad29d66bd8eb819c7eb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExvcmVuem8gZSBwZXJ0aW5lbnplIGNoaWVzYSBjb24gY2FtcGFuaWxlIGUgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDg0NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzNDI1NDUuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_53b6b8407c4d4f9a90083658196bda8d.setContent(i_frame_7a0cc3425db54ad29d66bd8eb819c7eb);
        

        marker_3a6b04e063ec4fd8a18d2723b52e9a70.bindPopup(popup_53b6b8407c4d4f9a90083658196bda8d)
        ;

        
    
    
            var marker_21d029d7596847198731865509efcd70 = L.marker(
                [44.827689, 11.329274],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_fa10e4a5d47c451cb84026dde2d28e4f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_21d029d7596847198731865509efcd70.setIcon(icon_fa10e4a5d47c451cb84026dde2d28e4f);
        
    
        var popup_e822567f70fe492391de1229e80c4c6c = L.popup({"maxWidth": 2650});

        
            var i_frame_b0b9317b72524b1d87fda8bddc1db5e9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFubmEgZSBjYW1wYW5pbGUgY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1NzA1MzguMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDU5NDE5LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e822567f70fe492391de1229e80c4c6c.setContent(i_frame_b0b9317b72524b1d87fda8bddc1db5e9);
        

        marker_21d029d7596847198731865509efcd70.bindPopup(popup_e822567f70fe492391de1229e80c4c6c)
        ;

        
    
    
            var marker_d7d7760487bf43c49eb4179fbb220624 = L.marker(
                [44.839478, 11.143597999999999],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_4fb28daee5bf49ec876147113f66865a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_d7d7760487bf43c49eb4179fbb220624.setIcon(icon_4fb28daee5bf49ec876147113f66865a);
        
    
        var popup_3d3f7d1aebea43d6b51e34dac3df288b = L.popup({"maxWidth": 2650});

        
            var i_frame_f913408cde384a0d818135d49a160bf6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gQ3JvY2UgLSBPcmF0b3JpbyBkaSBQaWF6emEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA5NjAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDIyNjcxLjA0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3d3f7d1aebea43d6b51e34dac3df288b.setContent(i_frame_f913408cde384a0d818135d49a160bf6);
        

        marker_d7d7760487bf43c49eb4179fbb220624.bindPopup(popup_3d3f7d1aebea43d6b51e34dac3df288b)
        ;

        
    
    
            var marker_a6095faf1b7f4b238aef47e8a14cf45a = L.marker(
                [44.917742, 10.803579],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_45c397d6fc464b9c9f6de0edf600289a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_a6095faf1b7f4b238aef47e8a14cf45a.setIcon(icon_45c397d6fc464b9c9f6de0edf600289a);
        
    
        var popup_ce8dae2d65474a4282a1c4c0565298ab = L.popup({"maxWidth": 2650});

        
            var i_frame_36a6b5f7ec1f4d798bbf1e314ce7e8a0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIFNhcnRvcmV0dGkgZSBwZXJ0aW5lbnplIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1NzkyMjAyLjczIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNDk3Mzc5LjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ce8dae2d65474a4282a1c4c0565298ab.setContent(i_frame_36a6b5f7ec1f4d798bbf1e314ce7e8a0);
        

        marker_a6095faf1b7f4b238aef47e8a14cf45a.bindPopup(popup_ce8dae2d65474a4282a1c4c0565298ab)
        ;

        
    
    
            var marker_34dbbbd60e6d43aabb2527071e7a896e = L.marker(
                [44.920339, 10.806936],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_83d6e678a18e413cb5b0224860dd2a6c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_34dbbbd60e6d43aabb2527071e7a896e.setIcon(icon_83d6e678a18e413cb5b0224860dd2a6c);
        
    
        var popup_a56ddbf4601b4ae08696ee05593eaed1 = L.popup({"maxWidth": 2650});

        
            var i_frame_c05083b78ec24a44a0f15a2c636b7e1f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBSZWdnaW9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNjA3OTgzLjA5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNTU5MDkuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a56ddbf4601b4ae08696ee05593eaed1.setContent(i_frame_c05083b78ec24a44a0f15a2c636b7e1f);
        

        marker_34dbbbd60e6d43aabb2527071e7a896e.bindPopup(popup_a56ddbf4601b4ae08696ee05593eaed1)
        ;

        
    
    
            var marker_d0e388527b5541de89ece7a13300e103 = L.marker(
                [44.790482, 11.017997],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_3a2bd8edbe2e467fb8f483b70c98803e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_d0e388527b5541de89ece7a13300e103.setIcon(icon_3a2bd8edbe2e467fb8f483b70c98803e);
        
    
        var popup_e97140e56aff441c8960c9bb3fadb336 = L.popup({"maxWidth": 2650});

        
            var i_frame_450bc95bf1d844d88190451b2612fa44 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBtb251bWVudGFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE2MjgyMC43OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTI3MDU4LjMzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e97140e56aff441c8960c9bb3fadb336.setContent(i_frame_450bc95bf1d844d88190451b2612fa44);
        

        marker_d0e388527b5541de89ece7a13300e103.bindPopup(popup_e97140e56aff441c8960c9bb3fadb336)
        ;

        
    
    
            var marker_d1cd94301cbd4c928a9ed863a9dde2a2 = L.marker(
                [44.913596000000005, 10.988977],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_a9a8224a531c4ebeb32d23904790cdaf = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_d1cd94301cbd4c928a9ed863a9dde2a2.setIcon(icon_a9a8224a531c4ebeb32d23904790cdaf);
        
    
        var popup_665794754bc8459b84893f9ed51f3c99 = L.popup({"maxWidth": 2650});

        
            var i_frame_15ec317ae53c47849e4d0c59d7a4db9a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBNb251bWVudGFsZSAgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE2ODEwOTguOTEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDc3MTIwMi42OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_665794754bc8459b84893f9ed51f3c99.setContent(i_frame_15ec317ae53c47849e4d0c59d7a4db9a);
        

        marker_d1cd94301cbd4c928a9ed863a9dde2a2.bindPopup(popup_665794754bc8459b84893f9ed51f3c99)
        ;

        
    
    
            var marker_5894ddcf6ff0431f9fa09f5951c4be17 = L.marker(
                [44.827037, 11.460897000000001],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_064352410a7943fdad7ffa43e3b3261f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_5894ddcf6ff0431f9fa09f5951c4be17.setIcon(icon_064352410a7943fdad7ffa43e3b3261f);
        
    
        var popup_5a2e29b7f0724867ac89d7860b71e1ac = L.popup({"maxWidth": 2650});

        
            var i_frame_aaff6e3bc56c48d5a8e1a0380074c504 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNlbGxvIEZlcnJvdmlhcmlvIC0gZGVwb3NpdG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBQkVMTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1MzU2OC41MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTQ0OTUuMjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5a2e29b7f0724867ac89d7860b71e1ac.setContent(i_frame_aaff6e3bc56c48d5a8e1a0380074c504);
        

        marker_5894ddcf6ff0431f9fa09f5951c4be17.bindPopup(popup_5a2e29b7f0724867ac89d7860b71e1ac)
        ;

        
    
    
            var marker_0cc14090d63d4b3aa98b65054c2b5422 = L.marker(
                [44.840496, 11.239993],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_5c0ec95e9a534cf98852d0420becf5d5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_0cc14090d63d4b3aa98b65054c2b5422.setIcon(icon_5c0ec95e9a534cf98852d0420becf5d5);
        
    
        var popup_0c10866b4c184b92939757b75123f18e = L.popup({"maxWidth": 2650});

        
            var i_frame_7ffcc4594a984e72a2f458100a881b44 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgZGVsbGUgR3JhemllIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDk3ODc3Ljg1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA1Mjc1OS42MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0c10866b4c184b92939757b75123f18e.setContent(i_frame_7ffcc4594a984e72a2f458100a881b44);
        

        marker_0cc14090d63d4b3aa98b65054c2b5422.bindPopup(popup_0c10866b4c184b92939757b75123f18e)
        ;

        
    
    
            var marker_b0dafefae1ab4fe18a4ed9f886beead8 = L.marker(
                [44.83238, 11.296317],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_91174fa858364cfd969598a4a72ce8ce = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_b0dafefae1ab4fe18a4ed9f886beead8.setIcon(icon_91174fa858364cfd969598a4a72ce8ce);
        
    
        var popup_b78ff74958d146fda39dd38fd2c90b9f = L.popup({"maxWidth": 2650});

        
            var i_frame_6cd7b0f9d5eb461383eb3d111008f3c9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBEdW9tbyAtIENoaWVzYSBwYXJyb2NjaGlhbGUgZGVpIFNTLiBGaWxpcHBvIGUgR2lhY29tbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0NzUwMDA2Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b78ff74958d146fda39dd38fd2c90b9f.setContent(i_frame_6cd7b0f9d5eb461383eb3d111008f3c9);
        

        marker_b0dafefae1ab4fe18a4ed9f886beead8.bindPopup(popup_b78ff74958d146fda39dd38fd2c90b9f)
        ;

        
    
    
            var marker_9c7c58fb605f48d08de0deb39ad53355 = L.marker(
                [44.836867, 11.031042],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_310ad8b576f44f33a53824f8e1922e39 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_9c7c58fb605f48d08de0deb39ad53355.setIcon(icon_310ad8b576f44f33a53824f8e1922e39);
        
    
        var popup_19c0b3c4e5074f7cbaa8d32a3dd6550c = L.popup({"maxWidth": 2650});

        
            var i_frame_593301f065484baa96662caa6fa1b6fb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEVnaWRpbyBBYmF0ZSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzMzEyMzUyLjIzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNzg5NDc1LjY3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_19c0b3c4e5074f7cbaa8d32a3dd6550c.setContent(i_frame_593301f065484baa96662caa6fa1b6fb);
        

        marker_9c7c58fb605f48d08de0deb39ad53355.bindPopup(popup_19c0b3c4e5074f7cbaa8d32a3dd6550c)
        ;

        
    
    
            var marker_0ddbea2509dc489c98910514584ec36d = L.marker(
                [44.863396, 11.511562],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_b4a3c19f607d488ea5508feb5c584194 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_0ddbea2509dc489c98910514584ec36d.setIcon(icon_b4a3c19f607d488ea5508feb5c584194);
        
    
        var popup_f3fbb3fc201648609371ee1d2ebfc77e = L.popup({"maxWidth": 2650});

        
            var i_frame_451dd675df6c4984a2773c1e265b7545 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlaSBTUy4gUGlldHJvIGUgUGFvbG8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBWSUdBUkFOTyBNQUlOQVJEQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDcwNzE2Mi42OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNjIzMjA3LjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f3fbb3fc201648609371ee1d2ebfc77e.setContent(i_frame_451dd675df6c4984a2773c1e265b7545);
        

        marker_0ddbea2509dc489c98910514584ec36d.bindPopup(popup_f3fbb3fc201648609371ee1d2ebfc77e)
        ;

        
    
    
            var marker_68a6c263e30f485b8e03a7fbf74d1234 = L.marker(
                [44.819552, 11.491938000000001],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_1c0d1193ca8f4db38acd6fdec9a27bb4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_68a6c263e30f485b8e03a7fbf74d1234.setIcon(icon_1c0d1193ca8f4db38acd6fdec9a27bb4);
        
    
        var popup_ee9c411b8e5148b49e2faca188da9dfc = L.popup({"maxWidth": 2650});

        
            var i_frame_4e4085fc25a445d0832f99bf9e554c4a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlaSBCb3NjaGkgY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1OTg3NjYuNDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI2MzI2My42MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ee9c411b8e5148b49e2faca188da9dfc.setContent(i_frame_4e4085fc25a445d0832f99bf9e554c4a);
        

        marker_68a6c263e30f485b8e03a7fbf74d1234.bindPopup(popup_ee9c411b8e5148b49e2faca188da9dfc)
        ;

        
    
    
            var marker_5bbc73ce4bbd4b78b3ccaad9c184175f = L.marker(
                [44.913402000000005, 11.29705],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_0a9c995c063e4f15b20819082b7e80af = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_5bbc73ce4bbd4b78b3ccaad9c184175f.setIcon(icon_0a9c995c063e4f15b20819082b7e80af);
        
    
        var popup_ea9e231025354eb4807d2ee1313e30e2 = L.popup({"maxWidth": 2650});

        
            var i_frame_c6c3482e3e394ce3877d5b3ddd207629 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFudG9uaW8gZGEgUGFkb3ZhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDM1NDA2NS40OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzAzNzA1LjYyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ea9e231025354eb4807d2ee1313e30e2.setContent(i_frame_c6c3482e3e394ce3877d5b3ddd207629);
        

        marker_5bbc73ce4bbd4b78b3ccaad9c184175f.bindPopup(popup_ea9e231025354eb4807d2ee1313e30e2)
        ;

        
    
    
            var marker_dc1b97cc1b5f42679d590e5f5e741606 = L.marker(
                [44.914532, 11.350634],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_9e300e5ac8d9478685c5a61286e746dd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_dc1b97cc1b5f42679d590e5f5e741606.setIcon(icon_9e300e5ac8d9478685c5a61286e746dd);
        
    
        var popup_30174ef9428b4cfb8cf6596f8068f665 = L.popup({"maxWidth": 2650});

        
            var i_frame_24476cd8706248e394d06be9d6a50fba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpYWNvbW8gTWFnZ2lvcmUgY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNjEzNTc3LjM4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNzAxNTcuNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_30174ef9428b4cfb8cf6596f8068f665.setContent(i_frame_24476cd8706248e394d06be9d6a50fba);
        

        marker_dc1b97cc1b5f42679d590e5f5e741606.bindPopup(popup_30174ef9428b4cfb8cf6596f8068f665)
        ;

        
    
    
            var marker_da8e4de0712d49f1afc8ce73c7c88219 = L.marker(
                [44.892821999999995, 11.440341],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_760abce6effa4a33b5a9642f669db33f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_da8e4de0712d49f1afc8ce73c7c88219.setIcon(icon_760abce6effa4a33b5a9642f669db33f);
        
    
        var popup_f6fd57f59cfd493e8612c3879e4627e6 = L.popup({"maxWidth": 2650});

        
            var i_frame_91468d16f826415a8887af007be3dc99 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYW50dWFyaW8gZGVsbGEgTWFkb25uYSBkZWxsYSBQaW9wcGEgLSBDaGllc2EgZGVsbGEgTWFkb25uYSBkZWxsYSBQaW9wcGEvU2FudHVhcmlvIGRlbGxhIFBpb3BwYSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzOTc1NjcuMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzUxMjQxLjcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f6fd57f59cfd493e8612c3879e4627e6.setContent(i_frame_91468d16f826415a8887af007be3dc99);
        

        marker_da8e4de0712d49f1afc8ce73c7c88219.bindPopup(popup_f6fd57f59cfd493e8612c3879e4627e6)
        ;

        
    
    
            var marker_1dcb20c1d73c4e5fa10eeb9b5a78d2c4 = L.marker(
                [44.918781, 11.431499],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_c0a05cbbb3cc468e8985b286de256631 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_1dcb20c1d73c4e5fa10eeb9b5a78d2c4.setIcon(icon_c0a05cbbb3cc468e8985b286de256631);
        
    
        var popup_b4301785585240eca41ddc23e59a0569 = L.popup({"maxWidth": 2650});

        
            var i_frame_c4c84051927f44da8d05637ce90a9d33 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEJpYWdpbyBWZXNjb3ZvIGUgTWFydGlyZSBjaGllc2EgY29uIGNhbXBhbmlsZSBlIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI5NjY4Ny4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMjcwODcuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b4301785585240eca41ddc23e59a0569.setContent(i_frame_c4c84051927f44da8d05637ce90a9d33);
        

        marker_1dcb20c1d73c4e5fa10eeb9b5a78d2c4.bindPopup(popup_b4301785585240eca41ddc23e59a0569)
        ;

        
    
    
            var marker_224acc12a07f48debd99e236b1bc87df = L.marker(
                [44.842665999999994, 11.494952],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_1293a28b858140f59b7d905abd909347 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_224acc12a07f48debd99e236b1bc87df.setIcon(icon_1293a28b858140f59b7d905abd909347);
        
    
        var popup_a7f1d6600b614c8a8356aaf6aae2ffe6 = L.popup({"maxWidth": 2650});

        
            var i_frame_87d0b89c0eaa439cbcd6faee806059ba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBWaWdhcmFubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFZJR0FSQU5PIE1BSU5BUkRBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNjk2MjIuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDYyMzI3LjAxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a7f1d6600b614c8a8356aaf6aae2ffe6.setContent(i_frame_87d0b89c0eaa439cbcd6faee806059ba);
        

        marker_224acc12a07f48debd99e236b1bc87df.bindPopup(popup_a7f1d6600b614c8a8356aaf6aae2ffe6)
        ;

        
    
    
            var marker_1c8115eb5b2e4e8ba5449533dba2acf2 = L.marker(
                [44.791078000000006, 11.020077],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_2ab84ecafd054c05a29690bc6e91ec95 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_1c8115eb5b2e4e8ba5449533dba2acf2.setIcon(icon_2ab84ecafd054c05a29690bc6e91ec95);
        
    
        var popup_81f68ab48e3047c0b344d6d1e37efd98 = L.popup({"maxWidth": 2650});

        
            var i_frame_25a31dbce3b34c868c46f0b2600064b9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBc2lsbyBOaWRvICdMZSBGYXJmYWxsZScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxODg4MDAuOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgODI4NDMuMTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_81f68ab48e3047c0b344d6d1e37efd98.setContent(i_frame_25a31dbce3b34c868c46f0b2600064b9);
        

        marker_1c8115eb5b2e4e8ba5449533dba2acf2.bindPopup(popup_81f68ab48e3047c0b344d6d1e37efd98)
        ;

        
    
    
            var marker_bcb1f3b2806d469bb82f7633b562b766 = L.marker(
                [44.905134000000004, 11.066955],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_168bd5a9626a488cae05a2cefbaee600 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_bcb1f3b2806d469bb82f7633b562b766.setIcon(icon_168bd5a9626a488cae05a2cefbaee600);
        
    
        var popup_74eb57d8213440c4b89f6a68b99d1b24 = L.popup({"maxWidth": 2650});

        
            var i_frame_0ad48388aa8b443cbb3fe4694b515178 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpdXN0aW5hIFZlcmdpbmUgZSBNYXJ0aXJlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNTM0ODQ3LjQzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzNTEwNjkuNjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_74eb57d8213440c4b89f6a68b99d1b24.setContent(i_frame_0ad48388aa8b443cbb3fe4694b515178);
        

        marker_bcb1f3b2806d469bb82f7633b562b766.bindPopup(popup_74eb57d8213440c4b89f6a68b99d1b24)
        ;

        
    
    
            var marker_eb2ac7addc714fe58be5262fa3a0d26e = L.marker(
                [44.936692, 11.235216000000001],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_c5f6b1a68e9948c5b42678fb2559e284 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_eb2ac7addc714fe58be5262fa3a0d26e.setIcon(icon_c5f6b1a68e9948c5b42678fb2559e284);
        
    
        var popup_9f5435def1774275b1931b8a66e83226 = L.popup({"maxWidth": 2650});

        
            var i_frame_b7ae12db3720473a9eb7426f4d730796 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gVmVzY292byBjYW5vbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI4OTcxOS4yMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjY1NTcxLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9f5435def1774275b1931b8a66e83226.setContent(i_frame_b7ae12db3720473a9eb7426f4d730796);
        

        marker_eb2ac7addc714fe58be5262fa3a0d26e.bindPopup(popup_9f5435def1774275b1931b8a66e83226)
        ;

        
    
    
            var marker_b28bd93d1f87497f9f44b466714ec7ce = L.marker(
                [44.923107, 11.095925999999999],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_536eb387651f496f98c8ccca5e3ad63a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_b28bd93d1f87497f9f44b466714ec7ce.setIcon(icon_536eb387651f496f98c8ccca5e3ad63a);
        
    
        var popup_ad2cf8ae8a9a48d1929313e61e25ea3f = L.popup({"maxWidth": 2650});

        
            var i_frame_6691031a04444464b345721c2da4c2d0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIC8gQ2hpZXNhIE1hZG9ubmEgZGVsbGEgTmV2ZSBkaSBRdWFyYW50b2xpIC0gYW5uZXNzbyBydXN0aWNvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjQyNTQ3LjU2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMDQ3MDMuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ad2cf8ae8a9a48d1929313e61e25ea3f.setContent(i_frame_6691031a04444464b345721c2da4c2d0);
        

        marker_b28bd93d1f87497f9f44b466714ec7ce.bindPopup(popup_ad2cf8ae8a9a48d1929313e61e25ea3f)
        ;

        
    
    
            var marker_9a9d3746444a407c9bf0b91b06f07740 = L.marker(
                [44.890675, 11.089202],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_fa850a363cec437a95aae5968b0d852f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_9a9d3746444a407c9bf0b91b06f07740.setIcon(icon_fa850a363cec437a95aae5968b0d852f);
        
    
        var popup_f6e83eb6a9eb4d71a9a99ff3a5cb782f = L.popup({"maxWidth": 2650});

        
            var i_frame_2a2669aef9b442b293263344f37a7c65 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIC0gVGVhdHJvIHBhcnJvY2NoaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDUzNDgyNC45MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDMwMzkzLjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f6e83eb6a9eb4d71a9a99ff3a5cb782f.setContent(i_frame_2a2669aef9b442b293263344f37a7c65);
        

        marker_9a9d3746444a407c9bf0b91b06f07740.bindPopup(popup_f6e83eb6a9eb4d71a9a99ff3a5cb782f)
        ;

        
    
    
            var marker_8bf26bce97434e188e3bfda20340ef0a = L.marker(
                [44.886055999999996, 11.066599],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_de410b9819ee406bb17883aa33514372 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_8bf26bce97434e188e3bfda20340ef0a.setIcon(icon_de410b9819ee406bb17883aa33514372);
        
    
        var popup_43840f849b004a83b38a4a6c96e92dd1 = L.popup({"maxWidth": 2650});

        
            var i_frame_c0b4065c57994d28b0c284c9257d3ce9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgQ2F0dGVkcmFsZSBkaSBTLiBNYXJpYSBNYWdnaW9yZS9EdW9tbyAtIENvbGxlZ2lhdGEgZGkgUy4gTWFyaWEgTWFnZ2lvcmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1Mzk3OTQyLjM2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0NzEwNTUxLjM4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_43840f849b004a83b38a4a6c96e92dd1.setContent(i_frame_c0b4065c57994d28b0c284c9257d3ce9);
        

        marker_8bf26bce97434e188e3bfda20340ef0a.bindPopup(popup_43840f849b004a83b38a4a6c96e92dd1)
        ;

        
    
    
            var marker_474f166cd6ee4a979d6474756f6aef12 = L.marker(
                [44.923048, 11.036610000000001],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_14625b0d0d3747238ccda0da2123e957 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_474f166cd6ee4a979d6474756f6aef12.setIcon(icon_14625b0d0d3747238ccda0da2123e957);
        
    
        var popup_2bc0ad43b58344549e8dd21d67d24533 = L.popup({"maxWidth": 2650});

        
            var i_frame_edbd6bd005084b5aaea344fcab34fb9d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBBcG9zdG9sbyBjb24gb3JhdG9yaW8gZSBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDM5NjIwOS4xNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzI4MjE0Ljc5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2bc0ad43b58344549e8dd21d67d24533.setContent(i_frame_edbd6bd005084b5aaea344fcab34fb9d);
        

        marker_474f166cd6ee4a979d6474756f6aef12.bindPopup(popup_2bc0ad43b58344549e8dd21d67d24533)
        ;

        
    
    
            var marker_0b8989ead133477a808de9bad94a2af1 = L.marker(
                [44.767209, 11.254988],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_e0d5752409fa49ddb9ef6df0667c4531 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_0b8989ead133477a808de9bad94a2af1.setIcon(icon_e0d5752409fa49ddb9ef6df0667c4531);
        
    
        var popup_759e9c24aa51421a8d70ebbdb050cdba = L.popup({"maxWidth": 2650});

        
            var i_frame_d73774ff52ad4930bff240b298803270 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHaWFjb21vIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDUwOTI3OC45OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTA0NTg3LjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_759e9c24aa51421a8d70ebbdb050cdba.setContent(i_frame_d73774ff52ad4930bff240b298803270);
        

        marker_0b8989ead133477a808de9bad94a2af1.bindPopup(popup_759e9c24aa51421a8d70ebbdb050cdba)
        ;

        
    
    
            var marker_30d76e76defb494494fcbcaf63c3f8c0 = L.marker(
                [44.723102000000004, 11.14738],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_8f5d56dff2f74d09ab99a195167155fa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_30d76e76defb494494fcbcaf63c3f8c0.setIcon(icon_8f5d56dff2f74d09ab99a195167155fa);
        
    
        var popup_3b7a54125a064e769d646672b82f39a9 = L.popup({"maxWidth": 2650});

        
            var i_frame_b565a1455a70449c9b593494ce3e1e5f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFNpbHZlc3RybyBjYW5vbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA5MDUxMi4zNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjk1NTUuMDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3b7a54125a064e769d646672b82f39a9.setContent(i_frame_b565a1455a70449c9b593494ce3e1e5f);
        

        marker_30d76e76defb494494fcbcaf63c3f8c0.bindPopup(popup_3b7a54125a064e769d646672b82f39a9)
        ;

        
    
    
            var marker_1001158ca04c4d3db4d467e82ab820e2 = L.marker(
                [44.723321999999996, 11.147503],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_df01cf959cb848598df1847bb1cea6c4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_1001158ca04c4d3db4d467e82ab820e2.setIcon(icon_df01cf959cb848598df1847bb1cea6c4);
        
    
        var popup_14a583b2aa2b437ca84038777f0c32d5 = L.popup({"maxWidth": 2650});

        
            var i_frame_370b3ea197cb4385820207811924b777 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFNpbHZlc3RybyBjaGllc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTA0Nzc0My4yNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNzQ2NzY1LjI0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_14a583b2aa2b437ca84038777f0c32d5.setContent(i_frame_370b3ea197cb4385820207811924b777);
        

        marker_1001158ca04c4d3db4d467e82ab820e2.bindPopup(popup_14a583b2aa2b437ca84038777f0c32d5)
        ;

        
    
    
            var marker_16b6a9b18cd441fd83089f3fe9605c89 = L.marker(
                [44.721877, 11.146676],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_3bee79eb77ba4ba38be8956f5dfb1677 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_16b6a9b18cd441fd83089f3fe9605c89.setIcon(icon_3bee79eb77ba4ba38be8956f5dfb1677);
        
    
        var popup_bd4635a13c40449eb9aae6922d89f1e9 = L.popup({"maxWidth": 2650});

        
            var i_frame_06cf8cd2c60c4be9953b50cece6dba72 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gQ3JvY2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNTg3Mjc0LjYxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyMzcxNjguNzMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bd4635a13c40449eb9aae6922d89f1e9.setContent(i_frame_06cf8cd2c60c4be9953b50cece6dba72);
        

        marker_16b6a9b18cd441fd83089f3fe9605c89.bindPopup(popup_bd4635a13c40449eb9aae6922d89f1e9)
        ;

        
    
    
            var marker_b7778d1c6b2f49488ecc1feba35dfd1f = L.marker(
                [44.83585, 11.029721],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_474c9bc9fc904690aa0b24af20d1dc99 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_b7778d1c6b2f49488ecc1feba35dfd1f.setIcon(icon_474c9bc9fc904690aa0b24af20d1dc99);
        
    
        var popup_d57cbb07d4554571bb1cad118cc1b9c2 = L.popup({"maxWidth": 2650});

        
            var i_frame_95bb2152b52c4b1687d022ecf152868a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZWxlbWVudGFyZSAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDY2ODYzNS41OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjcxNjcwLjc5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogV29ya3MgaW4gcHJvZ3Jlc3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d57cbb07d4554571bb1cad118cc1b9c2.setContent(i_frame_95bb2152b52c4b1687d022ecf152868a);
        

        marker_b7778d1c6b2f49488ecc1feba35dfd1f.bindPopup(popup_d57cbb07d4554571bb1cad118cc1b9c2)
        ;

        
    
    
            var marker_f509d139dfd6402385b2f67e0112b8fc = L.marker(
                [44.919484000000004, 10.804762],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_ac42de86c9e846c9bc3564e258b3956c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_f509d139dfd6402385b2f67e0112b8fc.setIcon(icon_ac42de86c9e846c9bc3564e258b3956c);
        
    
        var popup_99850bce0bc543c891b49649e823ba5f = L.popup({"maxWidth": 2650});

        
            var i_frame_08c49c96e9df4432bc7ca509b782ee6a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gZGlzYWJpbGkgZWRpZmljaW8gMzIgLSBhdWRpdG9yaXVtIGUgc2N1b2xhIGRpIG11c2ljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgODg1NjI1LjA1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMTM3NDEuNzUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_99850bce0bc543c891b49649e823ba5f.setContent(i_frame_08c49c96e9df4432bc7ca509b782ee6a);
        

        marker_f509d139dfd6402385b2f67e0112b8fc.bindPopup(popup_99850bce0bc543c891b49649e823ba5f)
        ;

        
    
    
            var marker_f516cf18ef3b438c87775192d978568d = L.marker(
                [44.714453999999996, 11.304567],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_3417b3ea87bc48e0aa17c9c5edd03f53 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_f516cf18ef3b438c87775192d978568d.setIcon(icon_3417b3ea87bc48e0aa17c9c5edd03f53);
        
    
        var popup_f220951e4d114f17a171e2aeaa2a6718 = L.popup({"maxWidth": 2650});

        
            var i_frame_ea33e920ddf142e98a16b88dbbf84626 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb3J0YSBDZW50byA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTM5MTU2LjAyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA5NTgxNy4wNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IFdvcmtzIGluIHByb2dyZXNzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f220951e4d114f17a171e2aeaa2a6718.setContent(i_frame_ea33e920ddf142e98a16b88dbbf84626);
        

        marker_f516cf18ef3b438c87775192d978568d.bindPopup(popup_f220951e4d114f17a171e2aeaa2a6718)
        ;

        
    
    
            var marker_d07e715645be4b93ac7f6a18c355b271 = L.marker(
                [44.919128, 11.224095],
                {}
            ).addTo(feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702);
        
    
            var icon_148a443014fb4cc985ae880a10f3831a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "orange", "prefix": "fa"}
            );
            marker_d07e715645be4b93ac7f6a18c355b271.setIcon(icon_148a443014fb4cc985ae880a10f3831a);
        
    
        var popup_354092b965c54411a0f208e9edcad8c7 = L.popup({"maxWidth": 2650});

        
            var i_frame_39d65502ccf94022a3e120c811a4bb56 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYXJjaGVzc29uZSBWZWNjaGlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNjA5MzQzLjg0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNTUyNjUuMTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBXb3JrcyBpbiBwcm9ncmVzczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_354092b965c54411a0f208e9edcad8c7.setContent(i_frame_39d65502ccf94022a3e120c811a4bb56);
        

        marker_d07e715645be4b93ac7f6a18c355b271.bindPopup(popup_354092b965c54411a0f208e9edcad8c7)
        ;

        
    
    
            var feature_group_sub_group_707c70b6246148e4a020f90edda18062 = L.featureGroup.subGroup(
                marker_cluster_8edf1e1ed79e4e3ab4a8c788b9a7fa16
            );
            feature_group_sub_group_707c70b6246148e4a020f90edda18062.addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
    
            var marker_471288c324524ba9af19bb5a6f13b463 = L.marker(
                [44.89283, 10.901029],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_39306ae0880447df9ecf2ed3e99d21a9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_471288c324524ba9af19bb5a6f13b463.setIcon(icon_39306ae0880447df9ecf2ed3e99d21a9);
        
    
        var popup_22389aca2ff64451972d26726f85ea6c = L.popup({"maxWidth": 2650});

        
            var i_frame_917e4fc92c53485a88d1b2c67522cfdf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBSZWFsaXp6YXppb25lIGltcGlhbnRvIGRpIHJhZmZyZXNjYW1lbnRvIGUgcmljYW1iaW8gZCdhcmlhIHByZXNzbyBsYSBTY3VvbGEgUHJpbWFyaWEgZGkgTm92aSBkaSBNb2RlbmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDgwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2NjgxOTYuNDUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_22389aca2ff64451972d26726f85ea6c.setContent(i_frame_917e4fc92c53485a88d1b2c67522cfdf);
        

        marker_471288c324524ba9af19bb5a6f13b463.bindPopup(popup_22389aca2ff64451972d26726f85ea6c)
        ;

        
    
    
            var marker_143b13743dba418da86b5daf6ce4c1f6 = L.marker(
                [44.918182, 10.808569],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_b6105dfec88a4f719888ccbc0d6d1604 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_143b13743dba418da86b5daf6ce4c1f6.setIcon(icon_b6105dfec88a4f719888ccbc0d6d1604);
        
    
        var popup_533f29fbf1af416e8219525460d226d6 = L.popup({"maxWidth": 2650});

        
            var i_frame_5c01d5a001a846f1a23e3a4d63d5f174 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBTY29sYXN0aWNhICdSLiBHaW9yZ2knIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxODM0NjMuMDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE4MzQ2My4wOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_533f29fbf1af416e8219525460d226d6.setContent(i_frame_5c01d5a001a846f1a23e3a4d63d5f174);
        

        marker_143b13743dba418da86b5daf6ce4c1f6.bindPopup(popup_533f29fbf1af416e8219525460d226d6)
        ;

        
    
    
            var marker_c3fce1c065e6427aa73aba44c726be72 = L.marker(
                [44.729547, 11.291255],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_5ee58532a9344227a3f0023bc2ad1712 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_c3fce1c065e6427aa73aba44c726be72.setIcon(icon_5ee58532a9344227a3f0023bc2ad1712);
        
    
        var popup_88cae4b5f9474cdb940b24c767d2d34d = L.popup({"maxWidth": 2650});

        
            var i_frame_935a2c92bd5b42dbae67e2b6b4ef1245 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTY29sYXN0aWNvIFRhZGRpYSAtIGNvcnBvIGxhYm9yYXRvcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDEyMzYwMi4xMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTIzNjAyLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_88cae4b5f9474cdb940b24c767d2d34d.setContent(i_frame_935a2c92bd5b42dbae67e2b6b4ef1245);
        

        marker_c3fce1c065e6427aa73aba44c726be72.bindPopup(popup_88cae4b5f9474cdb940b24c767d2d34d)
        ;

        
    
    
            var marker_f765a633062b432dbb5ec4683d8f5832 = L.marker(
                [44.889984999999996, 11.415875999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_a80bb9b3c97e415ab44c2faa44d56712 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_f765a633062b432dbb5ec4683d8f5832.setIcon(icon_a80bb9b3c97e415ab44c2faa44d56712);
        
    
        var popup_98ed00624d1240fbba59b329e9888230 = L.popup({"maxWidth": 2650});

        
            var i_frame_215ad3dec8764aa09d898187b7b55c81 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTY29sYXN0aWNvIFJpY2Npb2xpIE1vZGlnbGlhbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTkyMjg5LjQ1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNzkzODYuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_98ed00624d1240fbba59b329e9888230.setContent(i_frame_215ad3dec8764aa09d898187b7b55c81);
        

        marker_f765a633062b432dbb5ec4683d8f5832.bindPopup(popup_98ed00624d1240fbba59b329e9888230)
        ;

        
    
    
            var marker_42c72776faf94c0ab73519379aab9e24 = L.marker(
                [44.86612, 10.951413],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_18c8a2d9e7fe4358b61ae9d45c8e99e6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_42c72776faf94c0ab73519379aab9e24.setIcon(icon_18c8a2d9e7fe4358b61ae9d45c8e99e6);
        
    
        var popup_4f1fde0570d24154af5d944a49a9d633 = L.popup({"maxWidth": 2650});

        
            var i_frame_a6dde2503a7141ac99594a47e8d207a7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBVZmZpY2lvIFBvc3RhbGUgZGkgU2FudCdBbnRvbmlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1MTg0My4yOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTE4NDMuMjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4f1fde0570d24154af5d944a49a9d633.setContent(i_frame_a6dde2503a7141ac99594a47e8d207a7);
        

        marker_42c72776faf94c0ab73519379aab9e24.bindPopup(popup_4f1fde0570d24154af5d944a49a9d633)
        ;

        
    
    
            var marker_972b65ffda154b1a863c8ad0f10f2fe8 = L.marker(
                [44.819863, 11.492599],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_b2fa9e43c5a54bb39aaeb6f693e08506 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_972b65ffda154b1a863c8ad0f10f2fe8.setIcon(icon_b2fa9e43c5a54bb39aaeb6f693e08506);
        
    
        var popup_e77249f746e54967bb0f8939eee242f2 = L.popup({"maxWidth": 2650});

        
            var i_frame_905a08fdf7794255908c734a6323e1c5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgTWF0ZXJuYSAnU3BhemlvIEJhbWJpbm8nIC0gZXggc2N1b2xhIGVsZW1lbnRhcmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxODQzNTYuNDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE4NDM1Ni40OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e77249f746e54967bb0f8939eee242f2.setContent(i_frame_905a08fdf7794255908c734a6323e1c5);
        

        marker_972b65ffda154b1a863c8ad0f10f2fe8.bindPopup(popup_e77249f746e54967bb0f8939eee242f2)
        ;

        
    
    
            var marker_283ad021d1374c4cbd72f404a9ab91f1 = L.marker(
                [44.814695, 11.306792999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_e7db34dab0c04ecba64fb7e5c4745be9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_283ad021d1374c4cbd72f404a9ab91f1.setIcon(icon_e7db34dab0c04ecba64fb7e5c4745be9);
        
    
        var popup_a35476e990d342219a1e6e966e91bb6e = L.popup({"maxWidth": 2650});

        
            var i_frame_ab6fc5d7fde749bc9ba256d55f67330c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gLSBTUE9HTElBVE9JIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzNzUxNS4xMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzc1MTUuMTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a35476e990d342219a1e6e966e91bb6e.setContent(i_frame_ab6fc5d7fde749bc9ba256d55f67330c);
        

        marker_283ad021d1374c4cbd72f404a9ab91f1.bindPopup(popup_a35476e990d342219a1e6e966e91bb6e)
        ;

        
    
    
            var marker_9d41a05425fe4f7d897b46bd224ae0d2 = L.marker(
                [44.921058, 10.802508999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_996fce12af7b46b3aab604fedc714766 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_9d41a05425fe4f7d897b46bd224ae0d2.setIcon(icon_996fce12af7b46b3aab604fedc714766);
        
    
        var popup_13f488d2e4ae40e3a80265d594bcf252 = L.popup({"maxWidth": 2650});

        
            var i_frame_77c28cf2af8d4ac7a16d9e608ed73d68 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBNYWduYW5pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA2MDk2My40NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNjA5NjMuNDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_13f488d2e4ae40e3a80265d594bcf252.setContent(i_frame_77c28cf2af8d4ac7a16d9e608ed73d68);
        

        marker_9d41a05425fe4f7d897b46bd224ae0d2.bindPopup(popup_13f488d2e4ae40e3a80265d594bcf252)
        ;

        
    
    
            var marker_64baa0b3779941b69d66a1b32c8577cc = L.marker(
                [44.818487, 10.936681],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_3574394c4fa54d7aaf8ccd960eb549b0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_64baa0b3779941b69d66a1b32c8577cc.setIcon(icon_3574394c4fa54d7aaf8ccd960eb549b0);
        
    
        var popup_34c658cbe8664789a11c120683e2c2ed = L.popup({"maxWidth": 2650});

        
            var i_frame_394bee54785849eab4c93bcae1aa5816 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gY29tdW5hbGUgIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA2MjI1NC41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2MjI1NC41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_34c658cbe8664789a11c120683e2c2ed.setContent(i_frame_394bee54785849eab4c93bcae1aa5816);
        

        marker_64baa0b3779941b69d66a1b32c8577cc.bindPopup(popup_34c658cbe8664789a11c120683e2c2ed)
        ;

        
    
    
            var marker_e31105cf514d42c8a37fbdbaa45dbd87 = L.marker(
                [44.916306, 10.809573],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_8e900732c1ef4c8baaf7e43cc02d05de = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_e31105cf514d42c8a37fbdbaa45dbd87.setIcon(icon_8e900732c1ef4c8baaf7e43cc02d05de);
        
    
        var popup_169ef25a3057455e81413cbbc0fd4e9a = L.popup({"maxWidth": 2650});

        
            var i_frame_fa77a16b5367467080eaa5f8ab7a2fbf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIHByb3RldHRhIC0gSUkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE1MDY5NC45NiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTUwNjk0Ljk2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_169ef25a3057455e81413cbbc0fd4e9a.setContent(i_frame_fa77a16b5367467080eaa5f8ab7a2fbf);
        

        marker_e31105cf514d42c8a37fbdbaa45dbd87.bindPopup(popup_169ef25a3057455e81413cbbc0fd4e9a)
        ;

        
    
    
            var marker_04479e4561784432bd777326c2e2c327 = L.marker(
                [44.712983, 11.304952],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_99f39322db3c419b8d44332cafcc7827 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_04479e4561784432bd777326c2e2c327.setIcon(icon_99f39322db3c419b8d44332cafcc7827);
        
    
        var popup_edb0b78f9b694aba97ae7f9ef1e37f50 = L.popup({"maxWidth": 2650});

        
            var i_frame_ca3a793c818d45d99f422c092bb2a447 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBMb2NhbGkgYWNjZXNzb3JpIGNhc2VybWEgY2FyYWJpbmllcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDM4OTY0LjA2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzODk2NC4wNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_edb0b78f9b694aba97ae7f9ef1e37f50.setContent(i_frame_ca3a793c818d45d99f422c092bb2a447);
        

        marker_04479e4561784432bd777326c2e2c327.bindPopup(popup_edb0b78f9b694aba97ae7f9ef1e37f50)
        ;

        
    
    
            var marker_a1c16ced8e114994907912789d39386f = L.marker(
                [44.883185, 11.428484],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_7c57189c2aba40db96b96ff1b1074a35 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_a1c16ced8e114994907912789d39386f.setIcon(icon_7c57189c2aba40db96b96ff1b1074a35);
        
    
        var popup_d8c333f14fbf4143a425824d9b2185d3 = L.popup({"maxWidth": 2650});

        
            var i_frame_672c3904e6344fbb85936f51855781dc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCb2NjaW9maWxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDEyMzQ2My4zOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgOTM3MTkuNDggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d8c333f14fbf4143a425824d9b2185d3.setContent(i_frame_672c3904e6344fbb85936f51855781dc);
        

        marker_a1c16ced8e114994907912789d39386f.bindPopup(popup_d8c333f14fbf4143a425824d9b2185d3)
        ;

        
    
    
            var marker_38871ec5b21643adad7f90401f35e77e = L.marker(
                [44.890073, 10.903948],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_199fdbf8f1a54f72a88b706cb4912f5e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_38871ec5b21643adad7f90401f35e77e.setIcon(icon_199fdbf8f1a54f72a88b706cb4912f5e);
        
    
        var popup_e3099a6eff964aaabe242a57ea7d6bd4 = L.popup({"maxWidth": 2650});

        
            var i_frame_03abd4b5809e410eaf220ac5eea69a26 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvLCBDZW50cm8gRW1tYXVzIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMTM0MDguODMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDExMzQwOC44MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e3099a6eff964aaabe242a57ea7d6bd4.setContent(i_frame_03abd4b5809e410eaf220ac5eea69a26);
        

        marker_38871ec5b21643adad7f90401f35e77e.bindPopup(popup_e3099a6eff964aaabe242a57ea7d6bd4)
        ;

        
    
    
            var marker_e91a1dc0b689496f9a9a42a8e08e222b = L.marker(
                [44.858676, 10.997898],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_4161221b7174465d8b8c7619159a130d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_e91a1dc0b689496f9a9a42a8e08e222b.setIcon(icon_4161221b7174465d8b8c7619159a130d);
        
    
        var popup_438c6070d0554a8d8f966d1375feccbe = L.popup({"maxWidth": 2650});

        
            var i_frame_7bbc9809d9aa4614b3bede2b735cbf8d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBEaXN2ZXRybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxOTY5ODYuOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTU1ODMyLjU1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_438c6070d0554a8d8f966d1375feccbe.setContent(i_frame_7bbc9809d9aa4614b3bede2b735cbf8d);
        

        marker_e91a1dc0b689496f9a9a42a8e08e222b.bindPopup(popup_438c6070d0554a8d8f966d1375feccbe)
        ;

        
    
    
            var marker_a6327b28ae12482880f1f1f285f89a08 = L.marker(
                [44.865763, 11.274211],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_6d7550cdaa7342efaa569909b93afc65 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_a6327b28ae12482880f1f1f285f89a08.setIcon(icon_6d7550cdaa7342efaa569909b93afc65);
        
    
        var popup_24131a96e0614a5785e3eb41daebf4f5 = L.popup({"maxWidth": 2650});

        
            var i_frame_b07596cd75164204ab3b09dc4c3db292 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5hbGUgYWQgdXNvIHByb21pc2N1byA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzNzg0NS4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzc4NDUuMTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_24131a96e0614a5785e3eb41daebf4f5.setContent(i_frame_b07596cd75164204ab3b09dc4c3db292);
        

        marker_a6327b28ae12482880f1f1f285f89a08.bindPopup(popup_24131a96e0614a5785e3eb41daebf4f5)
        ;

        
    
    
            var marker_ad96155ae5a54dcc9547c1979fe4e0b2 = L.marker(
                [44.69773, 11.172527],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_b0635b23f89d40bb935dca271b80e5b4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_ad96155ae5a54dcc9547c1979fe4e0b2.setIcon(icon_b0635b23f89d40bb935dca271b80e5b4);
        
    
        var popup_0b85501515c34bf4afe978c6edb64d81 = L.popup({"maxWidth": 2650});

        
            var i_frame_fb53256b96f14eb7ac9e96731eb4d355 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBwZXIgaXJyaWdhemlvbmUgc2JvY2NvIFplbmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzY3OTAuMjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDM2NzkwLjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0b85501515c34bf4afe978c6edb64d81.setContent(i_frame_fb53256b96f14eb7ac9e96731eb4d355);
        

        marker_ad96155ae5a54dcc9547c1979fe4e0b2.bindPopup(popup_0b85501515c34bf4afe978c6edb64d81)
        ;

        
    
    
            var marker_88d53f573a8d42bb9de75d5abf5b622e = L.marker(
                [44.824515000000005, 11.287616],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_9062270467e542d19ce3dd393ee813ea = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_88d53f573a8d42bb9de75d5abf5b622e.setIcon(icon_9062270467e542d19ce3dd393ee813ea);
        
    
        var popup_fc01e450b85743b18d276662a91a2100 = L.popup({"maxWidth": 2650});

        
            var i_frame_a79893f996b64a2da5a983fc715f50fc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBlbWlzc2FyaWEgRm9zY2FnbGlhIGRlbCBDQ0FBIEFsdGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTg5MTcuNjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE4OTE3LjY2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fc01e450b85743b18d276662a91a2100.setContent(i_frame_a79893f996b64a2da5a983fc715f50fc);
        

        marker_88d53f573a8d42bb9de75d5abf5b622e.bindPopup(popup_fc01e450b85743b18d276662a91a2100)
        ;

        
    
    
            var marker_de8261458d0843c1a3a8200c90f744c8 = L.marker(
                [44.876575, 11.015544],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_b708b858455d4b7997c9c167d08efd09 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_de8261458d0843c1a3a8200c90f744c8.setIcon(icon_b708b858455d4b7997c9c167d08efd09);
        
    
        var popup_2e515417257747f596652398f21ad353 = L.popup({"maxWidth": 2650});

        
            var i_frame_dc0f434fc7b94386a9c8d39c0dee952e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBwbHV2aXJyaWd1byBDb25jb3JkaWEgc3VkICh0dWJhemlvbmkpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNDkyNzA0Ljk1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0OTI3MDQuOTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2e515417257747f596652398f21ad353.setContent(i_frame_dc0f434fc7b94386a9c8d39c0dee952e);
        

        marker_de8261458d0843c1a3a8200c90f744c8.bindPopup(popup_2e515417257747f596652398f21ad353)
        ;

        
    
    
            var marker_a797a68b52ab4a71b883b7f4989af1b9 = L.marker(
                [44.914814, 11.375616],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_5bb72c441f1e48cab965f292d5960a13 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_a797a68b52ab4a71b883b7f4989af1b9.setIcon(icon_5bb72c441f1e48cab965f292d5960a13);
        
    
        var popup_b26493e18da8417fa636eee6d123857c = L.popup({"maxWidth": 2650});

        
            var i_frame_1bdee0660ad64bfd9419bc8b0cba9aaf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb2xvIGlkcmF1bGljbyBDaXBvbGxldHRlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDEzODc4LjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMzg3OC4yOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b26493e18da8417fa636eee6d123857c.setContent(i_frame_1bdee0660ad64bfd9419bc8b0cba9aaf);
        

        marker_a797a68b52ab4a71b883b7f4989af1b9.bindPopup(popup_b26493e18da8417fa636eee6d123857c)
        ;

        
    
    
            var marker_cbec51706f594190ac5a47c841461cc8 = L.marker(
                [44.92078, 10.790525],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_bfbb3ea4197a4d678f9ddef879e53f61 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_cbec51706f594190ac5a47c841461cc8.setIcon(icon_bfbb3ea4197a4d678f9ddef879e53f61);
        
    
        var popup_5887d41c98e149399298d29ef3746530 = L.popup({"maxWidth": 2650});

        
            var i_frame_76f982319b1b405f99d058b439af0fc4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjYXNhIGRpIEd1YXJkaWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDY4Nzc5LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2ODc3OS4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5887d41c98e149399298d29ef3746530.setContent(i_frame_76f982319b1b405f99d058b439af0fc4);
        

        marker_cbec51706f594190ac5a47c841461cc8.bindPopup(popup_5887d41c98e149399298d29ef3746530)
        ;

        
    
    
            var marker_f1dbef4ad7a742b4be276e88fc8de156 = L.marker(
                [44.835871000000004, 11.36266],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_bb24602fb6284f6f87a83b6f851e3db0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_f1dbef4ad7a742b4be276e88fc8de156.setIcon(icon_bb24602fb6284f6f87a83b6f851e3db0);
        
    
        var popup_72e0b596a3754ef3b5fe65d5f9e12ebe = L.popup({"maxWidth": 2650});

        
            var i_frame_9c0d4014d39a4d248bc10420086e3b4d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDYXN1bWFybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNTExNDgyLjc1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA0NjkxNzIuMjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_72e0b596a3754ef3b5fe65d5f9e12ebe.setContent(i_frame_9c0d4014d39a4d248bc10420086e3b4d);
        

        marker_f1dbef4ad7a742b4be276e88fc8de156.bindPopup(popup_72e0b596a3754ef3b5fe65d5f9e12ebe)
        ;

        
    
    
            var marker_be7c946d73d14a2285b53ac3696693de = L.marker(
                [44.849722, 11.114869],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_0ce6f2b0df4b4cc084ff5e64a33d56ae = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_be7c946d73d14a2285b53ac3696693de.setIcon(icon_0ce6f2b0df4b4cc084ff5e64a33d56ae);
        
    
        var popup_8b332263d85b4692b7f835143b3f2be2 = L.popup({"maxWidth": 2650});

        
            var i_frame_c76afeec9a6a41d6af49352c02a2453d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRpIFZpYSBHYWxlYXp6YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDQwNTM1Ni4zNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNDA1MzU2LjM0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8b332263d85b4692b7f835143b3f2be2.setContent(i_frame_c76afeec9a6a41d6af49352c02a2453d);
        

        marker_be7c946d73d14a2285b53ac3696693de.bindPopup(popup_8b332263d85b4692b7f835143b3f2be2)
        ;

        
    
    
            var marker_e2278687e3f5496bbeb57a9b4979bf5b = L.marker(
                [44.713629, 11.310433999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_81c39b50a1fe4308a5e665811f9375a4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_e2278687e3f5496bbeb57a9b4979bf5b.setIcon(icon_81c39b50a1fe4308a5e665811f9375a4);
        
    
        var popup_074689ffe6a34cc59ad17b0fca626251 = L.popup({"maxWidth": 2650});

        
            var i_frame_d9340427ea1a4a07b76a4b18d32c62bd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBTUy4gVHJpbml0w6AgKGUgY2hpZXNhKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTcxNzM0LjQyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMzU0NDMuNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_074689ffe6a34cc59ad17b0fca626251.setContent(i_frame_d9340427ea1a4a07b76a4b18d32c62bd);
        

        marker_e2278687e3f5496bbeb57a9b4979bf5b.bindPopup(popup_074689ffe6a34cc59ad17b0fca626251)
        ;

        
    
    
            var marker_fc5cfa1cb0fa4f059ad7f011b59f1f42 = L.marker(
                [44.918867999999996, 11.099446],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_ea2258abdb574d40a3b461549cbd80e5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_fc5cfa1cb0fa4f059ad7f011b59f1f42.setIcon(icon_ea2258abdb574d40a3b461549cbd80e5);
        
    
        var popup_523b7722b6014d6d98c2b8e9242a5cf0 = L.popup({"maxWidth": 2650});

        
            var i_frame_4ac2321c3c104cde9ba4f6e271c7cce9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBRdWFyYW50b2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTQwMjUyLjMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE0MDI1Mi4zIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_523b7722b6014d6d98c2b8e9242a5cf0.setContent(i_frame_4ac2321c3c104cde9ba4f6e271c7cce9);
        

        marker_fc5cfa1cb0fa4f059ad7f011b59f1f42.bindPopup(popup_523b7722b6014d6d98c2b8e9242a5cf0)
        ;

        
    
    
            var marker_419c60c86c2740738c8ec94b82f1890f = L.marker(
                [44.836528, 11.140972999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_89c013df1ba8472690992689e883e5ea = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_419c60c86c2740738c8ec94b82f1890f.setIcon(icon_89c013df1ba8472690992689e883e5ea);
        
    
        var popup_bb30c2ba661f412e8ee3022ad08d1fa0 = L.popup({"maxWidth": 2650});

        
            var i_frame_dd2ef8cc15f6406d97a3046aec92fbf4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBbXBsaWFtZW50byBiaWJsaW90ZWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzIyMzYxLjA0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzMjIzNjEuMDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bb30c2ba661f412e8ee3022ad08d1fa0.setContent(i_frame_dd2ef8cc15f6406d97a3046aec92fbf4);
        

        marker_419c60c86c2740738c8ec94b82f1890f.bindPopup(popup_bb30c2ba661f412e8ee3022ad08d1fa0)
        ;

        
    
    
            var marker_8a6aef2a3f49494f8ed0ef75fadbb657 = L.marker(
                [44.838514, 11.13818],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_e8f1c08d9e5146cf9b9d2d8c9f73ffd1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_8a6aef2a3f49494f8ed0ef75fadbb657.setIcon(icon_e8f1c08d9e5146cf9b9d2d8c9f73ffd1);
        
    
        var popup_19d9383cd6e04971b3354bda97553426 = L.popup({"maxWidth": 2650});

        
            var i_frame_c64ac77aaadc4522aa8631910ba6a633 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gc3BvcnRpdm8gY29tdW5hbGUgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMzczMjI3Ljc2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAzNzMyMjcuNzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_19d9383cd6e04971b3354bda97553426.setContent(i_frame_c64ac77aaadc4522aa8631910ba6a633);
        

        marker_8a6aef2a3f49494f8ed0ef75fadbb657.bindPopup(popup_19d9383cd6e04971b3354bda97553426)
        ;

        
    
    
            var marker_f7546b8406884cbf96d455400b93dab6 = L.marker(
                [44.946104999999996, 11.280998],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_713ff817814a42f1921bb7fa19d848a9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_f7546b8406884cbf96d455400b93dab6.setIcon(icon_713ff817814a42f1921bb7fa19d848a9);
        
    
        var popup_9fd77bf63ff34d71b2cf5b3030fb32a9 = L.popup({"maxWidth": 2650});

        
            var i_frame_3ee956d1d9814c079f03795ebe9fdf88 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMjQ4NjcuNTEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEyNDg2Ny41MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9fd77bf63ff34d71b2cf5b3030fb32a9.setContent(i_frame_3ee956d1d9814c079f03795ebe9fdf88);
        

        marker_f7546b8406884cbf96d455400b93dab6.bindPopup(popup_9fd77bf63ff34d71b2cf5b3030fb32a9)
        ;

        
    
    
            var marker_e20b1db9c7db42bcaf7dd718e1487324 = L.marker(
                [44.888307, 11.318349000000001],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_5c2787cca2094eaea1d6281545a72ce5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_e20b1db9c7db42bcaf7dd718e1487324.setIcon(icon_5c2787cca2094eaea1d6281545a72ce5);
        
    
        var popup_cb20c9df491e4d74969989bd316cf7f2 = L.popup({"maxWidth": 2650});

        
            var i_frame_8e432742f96a4fa4a8a21e10b9b5b439 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBTY29ydGljaGlubyBjaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyMDQ4OTkuNjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIwNDg5OS42OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cb20c9df491e4d74969989bd316cf7f2.setContent(i_frame_8e432742f96a4fa4a8a21e10b9b5b439);
        

        marker_e20b1db9c7db42bcaf7dd718e1487324.bindPopup(popup_cb20c9df491e4d74969989bd316cf7f2)
        ;

        
    
    
            var marker_b491b647f94648a3ad8bc0788064ee41 = L.marker(
                [44.713848999999996, 11.307563],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_03d290e3be5c4e6bbcc3fd65f3d7b5bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_b491b647f94648a3ad8bc0788064ee41.setIcon(icon_03d290e3be5c4e6bbcc3fd65f3d7b5bb);
        
    
        var popup_b2bcd98c550445718d4f870765dede21 = L.popup({"maxWidth": 2650});

        
            var i_frame_9226753bcd2a49b0a404d66d50ec3d83 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBhcmNoaXZpbyBlIG1hZ2F6emlubyBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjY0ODYuMzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI2NDg2LjM2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b2bcd98c550445718d4f870765dede21.setContent(i_frame_9226753bcd2a49b0a404d66d50ec3d83);
        

        marker_b491b647f94648a3ad8bc0788064ee41.bindPopup(popup_b2bcd98c550445718d4f870765dede21)
        ;

        
    
    
            var marker_8d81bcd49fee4c29b1fa491aa0d1b2e9 = L.marker(
                [44.922876, 10.758725],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_3561046384e3460f8b75c6b7585f97ed = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_8d81bcd49fee4c29b1fa491aa0d1b2e9.setIcon(icon_3561046384e3460f8b75c6b7585f97ed);
        
    
        var popup_3dc9a2e33340451298a6bb8bf1e34310 = L.popup({"maxWidth": 2650});

        
            var i_frame_c5b332caf0a449bd95ed99d1b385d91b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbnRhIE1hcmlhIEFubnVuY2lhdGEgKE1hZG9ubmEgZGVsbG8gU3Bpbm8pIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA4Mzk0ODguNzQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDgzOTQ4OC43NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3dc9a2e33340451298a6bb8bf1e34310.setContent(i_frame_c5b332caf0a449bd95ed99d1b385d91b);
        

        marker_8d81bcd49fee4c29b1fa491aa0d1b2e9.bindPopup(popup_3dc9a2e33340451298a6bb8bf1e34310)
        ;

        
    
    
            var marker_b7c4db9af8bd4cf098bc9beb1d11bb12 = L.marker(
                [44.796991999999996, 11.277514],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_835e95f38a9c428daea06eecdc11ee4a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_b7c4db9af8bd4cf098bc9beb1d11bb12.setIcon(icon_835e95f38a9c428daea06eecdc11ee4a);
        
    
        var popup_1cc3209628de4a6d98667ef222c0f8ac = L.popup({"maxWidth": 2650});

        
            var i_frame_e1943d273e394b0fa768f1ced467729f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgZGkgR2FsZWF6emEgUGVwb2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDU0NDQ4OS4zOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTQ0NDg5LjM5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1cc3209628de4a6d98667ef222c0f8ac.setContent(i_frame_e1943d273e394b0fa768f1ced467729f);
        

        marker_b7c4db9af8bd4cf098bc9beb1d11bb12.bindPopup(popup_1cc3209628de4a6d98667ef222c0f8ac)
        ;

        
    
    
            var marker_b015aeda47f24b82901245c0eabf8057 = L.marker(
                [44.762227, 11.472827],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_bf09b3b6e78f46c2b32ce8457687ba56 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_b015aeda47f24b82901245c0eabf8057.setIcon(icon_bf09b3b6e78f46c2b32ce8457687ba56);
        
    
        var popup_65e83c6cba7a40b2b4e0462f6070bc34 = L.popup({"maxWidth": 2650});

        
            var i_frame_ca9e1f488879485689b7b5c844d0f1a7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIChhYmJhemlhbGUpIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgOTgwNDguOTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDk4MDQ4LjkyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_65e83c6cba7a40b2b4e0462f6070bc34.setContent(i_frame_ca9e1f488879485689b7b5c844d0f1a7);
        

        marker_b015aeda47f24b82901245c0eabf8057.bindPopup(popup_65e83c6cba7a40b2b4e0462f6070bc34)
        ;

        
    
    
            var marker_795b75570276429988425659f828d0b6 = L.marker(
                [44.763874, 11.288419000000001],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_0045a6fd555e4af2b4a57314b6fb8ef8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_795b75570276429988425659f828d0b6.setIcon(icon_0045a6fd555e4af2b4a57314b6fb8ef8);
        
    
        var popup_f93f115c805f489ab1d65323e31b640e = L.popup({"maxWidth": 2650});

        
            var i_frame_78ab909959484d89a5c32bb1f01915a7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFNlYmFzdGlhbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE0NzIwMTYuNzMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEzNTc0NjAuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f93f115c805f489ab1d65323e31b640e.setContent(i_frame_78ab909959484d89a5c32bb1f01915a7);
        

        marker_795b75570276429988425659f828d0b6.bindPopup(popup_f93f115c805f489ab1d65323e31b640e)
        ;

        
    
    
            var marker_8e9fca7cbd744cbe84de0a8dd8c1d435 = L.marker(
                [44.724905, 11.288076],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_40b9e5e9ea7946bcb6fa6ad54a940c6a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_8e9fca7cbd744cbe84de0a8dd8c1d435.setIcon(icon_40b9e5e9ea7946bcb6fa6ad54a940c6a);
        
    
        var popup_ea210f3213544718bce2af49a9a538a8 = L.popup({"maxWidth": 2650});

        
            var i_frame_429ce9ec71854a8e8d0c7fcf7d8220ad = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYW50dWFyaW8gZGVsbGEgUm9jY2EgL0JlYXRhIHZlcmdpbmUgZGVsbGEgUm9jY2EgLyBnacOgIGRlbGxvIFNwaXJpdG8gU2FudG8gZSBjYW1wYW5pbGUgZSBwYXJ0ZSBkZWwgbW9uYXN0ZXJvIGNvbnZlbnRvL21vbmFzdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjkwNDA3LjE4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyOTA0MDcuMTggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ea210f3213544718bce2af49a9a538a8.setContent(i_frame_429ce9ec71854a8e8d0c7fcf7d8220ad);
        

        marker_8e9fca7cbd744cbe84de0a8dd8c1d435.bindPopup(popup_ea210f3213544718bce2af49a9a538a8)
        ;

        
    
    
            var marker_85c4c710bc674ae6a8b2f981ac2d7ad0 = L.marker(
                [44.72779, 11.288696],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_8c530909691a4210909231730f272b29 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_85c4c710bc674ae6a8b2f981ac2d7ad0.setIcon(icon_8c530909691a4210909231730f272b29);
        
    
        var popup_32f89455de22462d8368642a3a27eb98 = L.popup({"maxWidth": 2650});

        
            var i_frame_faf43b49353f4050b5c60526f1d8e022 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb2xsZWdpYXRhIGRpIFMuIEJpYWdpbyBlIHBlcnRpbmVuemUgY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA4Nzg3OTQuMTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDg3ODc5NC4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_32f89455de22462d8368642a3a27eb98.setContent(i_frame_faf43b49353f4050b5c60526f1d8e022);
        

        marker_85c4c710bc674ae6a8b2f981ac2d7ad0.bindPopup(popup_32f89455de22462d8368642a3a27eb98)
        ;

        
    
    
            var marker_6d6086af8a37420c90e5fba0042cfafd = L.marker(
                [44.733824, 11.282005999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_a943d1ed436a4d5d9de04c74ab7a6a60 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_6d6086af8a37420c90e5fba0042cfafd.setIcon(icon_a943d1ed436a4d5d9de04c74ab7a6a60);
        
    
        var popup_0998ba3dd00c4017b0e5a7737f69ae71 = L.popup({"maxWidth": 2650});

        
            var i_frame_b7a7dd87be7149ce80eb4940f281cad4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbnRhIE1hcmlhIGUgU2FudCdJc2lkb3JvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1MzE2MTIuNTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDUzMTYxMi41NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0998ba3dd00c4017b0e5a7737f69ae71.setContent(i_frame_b7a7dd87be7149ce80eb4940f281cad4);
        

        marker_6d6086af8a37420c90e5fba0042cfafd.bindPopup(popup_0998ba3dd00c4017b0e5a7737f69ae71)
        ;

        
    
    
            var marker_c73238eee73249bf8d6291935c81b9b5 = L.marker(
                [44.725603, 11.290725],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_1af683b4982f4543920e11bdd4218945 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_c73238eee73249bf8d6291935c81b9b5.setIcon(icon_1af683b4982f4543920e11bdd4218945);
        
    
        var popup_416fc40a4d424ee6a82aa1f97d364f70 = L.popup({"maxWidth": 2650});

        
            var i_frame_0fdde6abf13548e99cf6dfe943fea142 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUm9jY28gZSBTZWJhc3RpYW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxNjk1NTUuODQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE2OTU1NS44NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_416fc40a4d424ee6a82aa1f97d364f70.setContent(i_frame_0fdde6abf13548e99cf6dfe943fea142);
        

        marker_c73238eee73249bf8d6291935c81b9b5.bindPopup(popup_416fc40a4d424ee6a82aa1f97d364f70)
        ;

        
    
    
            var marker_987ab0e6865b4e69b7252962434c33d0 = L.marker(
                [44.72635, 11.291952],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_bbbf3b6eb5cf4a159c8630934122b986 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_987ab0e6865b4e69b7252962434c33d0.setIcon(icon_bbbf3b6eb5cf4a159c8630934122b986);
        
    
        var popup_0f3a05241df54ce38c5cb3870df39f70 = L.popup({"maxWidth": 2650});

        
            var i_frame_08397af3efde4a2a8e4d1404e3bab26c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBQaWV0w6AgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAzNjk5MS40NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMzY5OTEuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0f3a05241df54ce38c5cb3870df39f70.setContent(i_frame_08397af3efde4a2a8e4d1404e3bab26c);
        

        marker_987ab0e6865b4e69b7252962434c33d0.bindPopup(popup_0f3a05241df54ce38c5cb3870df39f70)
        ;

        
    
    
            var marker_61ac1b6425664daa969876c3ca7731ff = L.marker(
                [44.807567, 11.343466000000001],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_849482283546437fb551cec2fda400c2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_61ac1b6425664daa969876c3ca7731ff.setIcon(icon_849482283546437fb551cec2fda400c2);
        
    
        var popup_3400e08d377546218b1f676eb8b80f1e = L.popup({"maxWidth": 2650});

        
            var i_frame_957317a252a24d2583c9935884a91336 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gZGkgVG91cnMgb3JhdG9yaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDgxODA1LjQzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA4MTgwNS40MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3400e08d377546218b1f676eb8b80f1e.setContent(i_frame_957317a252a24d2583c9935884a91336);
        

        marker_61ac1b6425664daa969876c3ca7731ff.bindPopup(popup_3400e08d377546218b1f676eb8b80f1e)
        ;

        
    
    
            var marker_d33ed9dba3af42dd91da2b5d80995787 = L.marker(
                [44.741316999999995, 11.28427],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_0b05cdb87ba042beb1e3fef25eb46dd2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_d33ed9dba3af42dd91da2b5d80995787.setIcon(icon_0b05cdb87ba042beb1e3fef25eb46dd2);
        
    
        var popup_4b8c9734c66f41f6b60bd22d3b64aed4 = L.popup({"maxWidth": 2650});

        
            var i_frame_159de37feac4419dbef702e51f1a2477 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBDcm9jZXR0YS9PcmF0b3JpbyBkaSBTLiBDcm9jZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTg3NTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTg3NTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4b8c9734c66f41f6b60bd22d3b64aed4.setContent(i_frame_159de37feac4419dbef702e51f1a2477);
        

        marker_d33ed9dba3af42dd91da2b5d80995787.bindPopup(popup_4b8c9734c66f41f6b60bd22d3b64aed4)
        ;

        
    
    
            var marker_e149c6898a0842d98b13a3ee76c6d6d5 = L.marker(
                [44.7616, 11.003832000000001],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_5274ee493e794275ab856a1401d76603 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_e149c6898a0842d98b13a3ee76c6d6d5.setIcon(icon_5274ee493e794275ab856a1401d76603);
        
    
        var popup_9d6b336c6b544c8e8c9eec90b8fe39d5 = L.popup({"maxWidth": 2650});

        
            var i_frame_a6a84919822c4d63b76dc6e0ee58c05f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExvcmVuem8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyMjQ0OTQuNzEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIyNDQ5NC43MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9d6b336c6b544c8e8c9eec90b8fe39d5.setContent(i_frame_a6a84919822c4d63b76dc6e0ee58c05f);
        

        marker_e149c6898a0842d98b13a3ee76c6d6d5.bindPopup(popup_9d6b336c6b544c8e8c9eec90b8fe39d5)
        ;

        
    
    
            var marker_4c131d0c52444601ba478880d8a766af = L.marker(
                [44.87795, 11.409168],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_36ba6738e70a4d72a61acf732c380fb4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_4c131d0c52444601ba478880d8a766af.setIcon(icon_36ba6738e70a4d72a61acf732c380fb4);
        
    
        var popup_cac7a94a4ca842d0bb357d9bd10d2141 = L.popup({"maxWidth": 2650});

        
            var i_frame_7f318cbbce8a4517b7a9bf3e47ed5d36 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGYWJicmljYXRvIGFiaXRhdGl2byBjL28gYWxsJ2ltcGlhbnRvIGlkcm92b3JvIEJvbmRlbm8tUGFsYXRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI1OTA1LjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI1OTA1LjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cac7a94a4ca842d0bb357d9bd10d2141.setContent(i_frame_7f318cbbce8a4517b7a9bf3e47ed5d36);
        

        marker_4c131d0c52444601ba478880d8a766af.bindPopup(popup_cac7a94a4ca842d0bb357d9bd10d2141)
        ;

        
    
    
            var marker_363a4020a48042ac8507f7a14692542a = L.marker(
                [44.922346999999995, 10.858755],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_3d7d97aa0b3e477aa78151096c0b9033 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_363a4020a48042ac8507f7a14692542a.setIcon(icon_3d7d97aa0b3e477aa78151096c0b9033);
        
    
        var popup_7d1b71dcbadf464992b67891be21a7c9 = L.popup({"maxWidth": 2650});

        
            var i_frame_79ea9c2f0b1b432bb3b5b0f9eb2603a3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTEyNTQwLjkzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxMTI1NDAuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7d1b71dcbadf464992b67891be21a7c9.setContent(i_frame_79ea9c2f0b1b432bb3b5b0f9eb2603a3);
        

        marker_363a4020a48042ac8507f7a14692542a.bindPopup(popup_7d1b71dcbadf464992b67891be21a7c9)
        ;

        
    
    
            var marker_c22fd4ac8f5045aa9fd0517da6ee6da1 = L.marker(
                [44.92242, 10.766716],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_0f08daf7e79d495494faf3324829d690 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_c22fd4ac8f5045aa9fd0517da6ee6da1.setIcon(icon_0f08daf7e79d495494faf3324829d690);
        
    
        var popup_95af7931ca964418b4415b15b1010ebc = L.popup({"maxWidth": 2650});

        
            var i_frame_d9c6861348d54f09b2bfb7867e46b6c7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gY2l2aWNvLW1lZGljbyBjb211bmFsZSAoZXggc2N1b2xlIGVsZW1lbnRhcmkpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0NzI4MTQuODggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQ3MjgxNC44OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_95af7931ca964418b4415b15b1010ebc.setContent(i_frame_d9c6861348d54f09b2bfb7867e46b6c7);
        

        marker_c22fd4ac8f5045aa9fd0517da6ee6da1.bindPopup(popup_95af7931ca964418b4415b15b1010ebc)
        ;

        
    
    
            var marker_fa940c26b02141539ebc763c09553a32 = L.marker(
                [44.877897, 11.410433],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_3e77bcc392544193aa9fbb1dfd19de41 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_fa940c26b02141539ebc763c09553a32.setIcon(icon_3e77bcc392544193aa9fbb1dfd19de41);
        
    
        var popup_5676c7300cff4dc1876fe6c356cb2726 = L.popup({"maxWidth": 2650});

        
            var i_frame_1bf1f8b5bc01438ab3dd64231125b55c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBCb25kZW5vLVBhbGF0YSAtIEJhY2lubyBkaSBjYWxtYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxOTgyOTIuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTk4MjkyLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5676c7300cff4dc1876fe6c356cb2726.setContent(i_frame_1bf1f8b5bc01438ab3dd64231125b55c);
        

        marker_fa940c26b02141539ebc763c09553a32.bindPopup(popup_5676c7300cff4dc1876fe6c356cb2726)
        ;

        
    
    
            var marker_a73d90d0bce04d23b138180cb5d2a899 = L.marker(
                [44.868506, 11.390478],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_3a505547b2c243e6b212c50b58ddcaae = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_a73d90d0bce04d23b138180cb5d2a899.setIcon(icon_3a505547b2c243e6b212c50b58ddcaae);
        
    
        var popup_14f0458e412c48a495e065bed54094ed = L.popup({"maxWidth": 2650});

        
            var i_frame_de1d9dae83244296be8e94186d935741 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYWNpbm8gZGkgY2FsbWEgSW1waWFudG8gU2FudGEgQmlhbmNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE1MzM4MC41OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTUzMzgwLjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_14f0458e412c48a495e065bed54094ed.setContent(i_frame_de1d9dae83244296be8e94186d935741);
        

        marker_a73d90d0bce04d23b138180cb5d2a899.bindPopup(popup_14f0458e412c48a495e065bed54094ed)
        ;

        
    
    
            var marker_740f80d2872d41a5948f0da2a4d2c8c5 = L.marker(
                [44.83911, 11.140396],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_69378bd268544bc7b61a772480a56641 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_740f80d2872d41a5948f0da2a4d2c8c5.setIcon(icon_69378bd268544bc7b61a772480a56641);
        
    
        var popup_aea8f57354424a0a9b08d33b9211248a = L.popup({"maxWidth": 2650});

        
            var i_frame_699294dd38db49eaa62334ba2106dcb2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNb251bWVudG8gYWkgY2FkdXRpIGRlbGxhIHByaW1hIGd1ZXJyYSBtb25kaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE0NjU0Ni4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMTQ2NTQ2LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aea8f57354424a0a9b08d33b9211248a.setContent(i_frame_699294dd38db49eaa62334ba2106dcb2);
        

        marker_740f80d2872d41a5948f0da2a4d2c8c5.bindPopup(popup_aea8f57354424a0a9b08d33b9211248a)
        ;

        
    
    
            var marker_ed3ba660af024434815b83b7d29b8605 = L.marker(
                [44.843136, 10.956078999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_476755907e094c5a8e087320c2ea56ce = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_ed3ba660af024434815b83b7d29b8605.setIcon(icon_476755907e094c5a8e087320c2ea56ce);
        
    
        var popup_1bf38e5158e748b593ae6a4dc8f8d945 = L.popup({"maxWidth": 2650});

        
            var i_frame_b6145175da884a2ba1de4b14a51ed538 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBsb2NhbGl0w6AgUm92ZXJldG8gKHBhcnRlIHN0b3JpY2EpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA0OTYzMTYuMDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDQ5NjMxNi4wOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1bf38e5158e748b593ae6a4dc8f8d945.setContent(i_frame_b6145175da884a2ba1de4b14a51ed538);
        

        marker_ed3ba660af024434815b83b7d29b8605.bindPopup(popup_1bf38e5158e748b593ae6a4dc8f8d945)
        ;

        
    
    
            var marker_cf36f284c9e24659aa5aa76c07ff312b = L.marker(
                [44.835865999999996, 11.030046],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_46d8875f2e7a49a7b8d00202c9cd6e34 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_cf36f284c9e24659aa5aa76c07ff312b.setIcon(icon_46d8875f2e7a49a7b8d00202c9cd6e34);
        
    
        var popup_001df2aee8424210a7ed5853ecfcfaef = L.popup({"maxWidth": 2650});

        
            var i_frame_d3f7bc4660244eab96fda2ea9f7a06a4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZWxlbWVudGFyZSAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNjcwMzAwLjkzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2NzAzMDAuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_001df2aee8424210a7ed5853ecfcfaef.setContent(i_frame_d3f7bc4660244eab96fda2ea9f7a06a4);
        

        marker_cf36f284c9e24659aa5aa76c07ff312b.bindPopup(popup_001df2aee8424210a7ed5853ecfcfaef)
        ;

        
    
    
            var marker_29d1b6b858574a9d9ac36dbc82177ec7 = L.marker(
                [44.834252, 11.034133],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_1e16a14218c54f6ea7bdc5dc2451c44d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_29d1b6b858574a9d9ac36dbc82177ec7.setIcon(icon_1e16a14218c54f6ea7bdc5dc2451c44d);
        
    
        var popup_018ec10c83844693842eccb385e911da = L.popup({"maxWidth": 2650});

        
            var i_frame_0c896f87a4114a20a33e2b862c065e9c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBjZW50cmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA1MDU5OS4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTA1OTkuMTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_018ec10c83844693842eccb385e911da.setContent(i_frame_0c896f87a4114a20a33e2b862c065e9c);
        

        marker_29d1b6b858574a9d9ac36dbc82177ec7.bindPopup(popup_018ec10c83844693842eccb385e911da)
        ;

        
    
    
            var marker_fc1bfafe2af34e38affd9f1ad13d8560 = L.marker(
                [44.846696, 11.019822],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_de531553e135443aabf437757b8f3f9f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_fc1bfafe2af34e38affd9f1ad13d8560.setIcon(icon_de531553e135443aabf437757b8f3f9f);
        
    
        var popup_cb66933bbdff4f05b8ddc63a6e28f4bb = L.popup({"maxWidth": 2650});

        
            var i_frame_868a9d5f00774c7e91ca2e9d49f0e177 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBHYXZpb2xhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI3OTg0LjYzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAyNzk4NC42MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cb66933bbdff4f05b8ddc63a6e28f4bb.setContent(i_frame_868a9d5f00774c7e91ca2e9d49f0e177);
        

        marker_fc1bfafe2af34e38affd9f1ad13d8560.bindPopup(popup_cb66933bbdff4f05b8ddc63a6e28f4bb)
        ;

        
    
    
            var marker_0822eba5a9154ac499a1752be69881b7 = L.marker(
                [44.713812, 11.307936],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_615ee265f04a4d60a43b3efa51169fec = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_0822eba5a9154ac499a1752be69881b7.setIcon(icon_615ee265f04a4d60a43b3efa51169fec);
        
    
        var popup_bf331b0d86cc412198b1755c1b239dab = L.popup({"maxWidth": 2650});

        
            var i_frame_d072d8cbf275485da4ac2c78599d11f6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb2xvIFNhbml0YXJpbyBkaSBQaWV2ZSBkaSBDZW50byAtIENoaWVzYSBTYW50YSBDaGlhcmEgLSBFeCBDb252ZW50byBjbGFyaXNzZSBjb24gbG9jYWxpIGEgZGVzdGluYXppb25lIGQndXNvIGN1bHR1cmFsZSBlIGZvcm1hdGl2byAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDkyODkzMi4xMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgOTI4OTMyLjEyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bf331b0d86cc412198b1755c1b239dab.setContent(i_frame_d072d8cbf275485da4ac2c78599d11f6);
        

        marker_0822eba5a9154ac499a1752be69881b7.bindPopup(popup_bf331b0d86cc412198b1755c1b239dab)
        ;

        
    
    
            var marker_620263c31ba0427fb1bbd2caed9cd34d = L.marker(
                [44.72177, 11.149208],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_e7be7f8683c349c9b8f8ca62bd896897 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_620263c31ba0427fb1bbd2caed9cd34d.setIcon(icon_e7be7f8683c349c9b8f8ca62bd896897);
        
    
        var popup_db8768a0ec8043f5a1610f324d5bba97 = L.popup({"maxWidth": 2650});

        
            var i_frame_b6de9891325c4c3fb795786b047b080f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb2xvIFNhbml0YXJpbyBkaSBDcmV2YWxjb3JlIC0gQ2FzYSBkZWxsYSBTYWx1dGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTcwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICAxNzAwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_db8768a0ec8043f5a1610f324d5bba97.setContent(i_frame_b6de9891325c4c3fb795786b047b080f);
        

        marker_620263c31ba0427fb1bbd2caed9cd34d.bindPopup(popup_db8768a0ec8043f5a1610f324d5bba97)
        ;

        
    
    
            var marker_c1740dd6767a4dbbaa43995d28f23be1 = L.marker(
                [44.919401, 11.100936],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_06cb9fb7843b4a50a915b984551f48e8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_c1740dd6767a4dbbaa43995d28f23be1.setIcon(icon_06cb9fb7843b4a50a915b984551f48e8);
        
    
        var popup_2d2afa89878f4d0fa7d4bcb569269c2d = L.popup({"maxWidth": 2650});

        
            var i_frame_7c79eef302b84988bfda20afab9c859e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGUgRWxlbWVudGFyaSBEZSBBbWljaXMgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxNjU5ODIuMzkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE2NTk4Mi4zOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2d2afa89878f4d0fa7d4bcb569269c2d.setContent(i_frame_7c79eef302b84988bfda20afab9c859e);
        

        marker_c1740dd6767a4dbbaa43995d28f23be1.bindPopup(popup_2d2afa89878f4d0fa7d4bcb569269c2d)
        ;

        
    
    
            var marker_3d4b57b7a2bd402dbf5be4cb727d100d = L.marker(
                [44.836627, 11.033096],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_a3dea19bef9b4a6ea8be609de656ced0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_3d4b57b7a2bd402dbf5be4cb727d100d.setIcon(icon_a3dea19bef9b4a6ea8be609de656ced0);
        
    
        var popup_8514084f60ed40829176d4cec4f30309 = L.popup({"maxWidth": 2650});

        
            var i_frame_fc501e18ee3448468f396df794d2368e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBTY29sYXN0aWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDgxODIzNy4xIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA4MTgyMzcuMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8514084f60ed40829176d4cec4f30309.setContent(i_frame_fc501e18ee3448468f396df794d2368e);
        

        marker_3d4b57b7a2bd402dbf5be4cb727d100d.bindPopup(popup_8514084f60ed40829176d4cec4f30309)
        ;

        
    
    
            var marker_f2c3defd639f4ba29049017818fcbc76 = L.marker(
                [44.788233, 11.026955000000001],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_6a0aa0cf53334dfaa55406d4f8d7b92c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_f2c3defd639f4ba29049017818fcbc76.setIcon(icon_6a0aa0cf53334dfaa55406d4f8d7b92c);
        
    
        var popup_d3eb9fd74af44c8a873179abeb9a7e5d = L.popup({"maxWidth": 2650});

        
            var i_frame_d699005fe4924bc0b447dbe093fed5e2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgRWxlbWVudGFyZSBlIE1lZGlhIHN0YXRhbGUgRGFudGUgQWxpZ2hpZXJpIC0gcGFsZXN0cmEgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjA3NTkxLjQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDIwNzU5MS40IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d3eb9fd74af44c8a873179abeb9a7e5d.setContent(i_frame_d699005fe4924bc0b447dbe093fed5e2);
        

        marker_f2c3defd639f4ba29049017818fcbc76.bindPopup(popup_d3eb9fd74af44c8a873179abeb9a7e5d)
        ;

        
    
    
            var marker_220d867c9d4f48fcbdab44e71d308004 = L.marker(
                [44.881469, 11.068949],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_349ccd1b6b3241ca96edd5b4ce3e4aaf = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_220d867c9d4f48fcbdab44e71d308004.setIcon(icon_349ccd1b6b3241ca96edd5b4ce3e4aaf);
        
    
        var popup_5804fc4b62e0460495653289322b9aee = L.popup({"maxWidth": 2650});

        
            var i_frame_0e9760e0a82b434f8ae798293274ca08 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjgyOTYuNzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI4Mjk2Ljc2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5804fc4b62e0460495653289322b9aee.setContent(i_frame_0e9760e0a82b434f8ae798293274ca08);
        

        marker_220d867c9d4f48fcbdab44e71d308004.bindPopup(popup_5804fc4b62e0460495653289322b9aee)
        ;

        
    
    
            var marker_2c2526873ed4414dbac02db0e251744d = L.marker(
                [44.819963, 11.184553999999999],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_618d9fcbb7cd45079925b886df0da733 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_2c2526873ed4414dbac02db0e251744d.setIcon(icon_618d9fcbb7cd45079925b886df0da733);
        
    
        var popup_47505e105bd247a0b5efd16d8572d981 = L.popup({"maxWidth": 2650});

        
            var i_frame_2c486b32b33d47648cae171569b4339f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYml0YXppb25lIC0gbWFnYXp6aW5vIC0gZmFiYnIuIHNlcnYuIC0gSW1waWFudG8gRG9nYXJvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMjcwMjYuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjcwMjYuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_47505e105bd247a0b5efd16d8572d981.setContent(i_frame_2c486b32b33d47648cae171569b4339f);
        

        marker_2c2526873ed4414dbac02db0e251744d.bindPopup(popup_47505e105bd247a0b5efd16d8572d981)
        ;

        
    
    
            var marker_0bf4adca23c6499ea2e732995f7b34b9 = L.marker(
                [44.882345, 11.414098],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_cd23da25348642ebbfe364b948b5ffac = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_0bf4adca23c6499ea2e732995f7b34b9.setIcon(icon_cd23da25348642ebbfe364b948b5ffac);
        
    
        var popup_5accb7eea91f4c329c663cf8fbdf1c90 = L.popup({"maxWidth": 2650});

        
            var i_frame_3036b57a71ed4ad895c43c530b17ee55 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCb3R0ZSBOYXBvbGVvbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICA3ODE1My4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNzgxNTMuMjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5accb7eea91f4c329c663cf8fbdf1c90.setContent(i_frame_3036b57a71ed4ad895c43c530b17ee55);
        

        marker_0bf4adca23c6499ea2e732995f7b34b9.bindPopup(popup_5accb7eea91f4c329c663cf8fbdf1c90)
        ;

        
    
    
            var marker_adc52980941641838a6adccb73f26172 = L.marker(
                [44.906395, 11.371867],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_308fb1047215409c8fde16c1190dea9f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_adc52980941641838a6adccb73f26172.setIcon(icon_308fb1047215409c8fde16c1190dea9f);
        
    
        var popup_cfb258cc9cfc4983a08f211937247b5d = L.popup({"maxWidth": 2650});

        
            var i_frame_1a3f07b1bea244239a093f740aab4482 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb250ZSBGb2xsbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAyNDk4My44MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgMjQ5ODMuODIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cfb258cc9cfc4983a08f211937247b5d.setContent(i_frame_1a3f07b1bea244239a093f740aab4482);
        

        marker_adc52980941641838a6adccb73f26172.bindPopup(popup_cfb258cc9cfc4983a08f211937247b5d)
        ;

        
    
    
            var marker_01070fb36f2a4fd68ede16b54e13ef3c = L.marker(
                [44.868506, 11.390478],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_38347cd48d134efda34f442f766ecec3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_01070fb36f2a4fd68ede16b54e13ef3c.setIcon(icon_38347cd48d134efda34f442f766ecec3);
        
    
        var popup_1ef108dc30b94b89a825297782b0b509 = L.popup({"maxWidth": 2650});

        
            var i_frame_3f6a8d4d52864714b7f8db4c8c806468 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRpIEd1YXJkaWEgZGVsbCdpbXBpYW50byBTYW50YSBCaWFuY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgMTc3NDMuNDggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDE3NzQzLjQ4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1ef108dc30b94b89a825297782b0b509.setContent(i_frame_3f6a8d4d52864714b7f8db4c8c806468);
        

        marker_01070fb36f2a4fd68ede16b54e13ef3c.bindPopup(popup_1ef108dc30b94b89a825297782b0b509)
        ;

        
    
    
            var marker_e9f601179dcc44efbefec7c5776b1d48 = L.marker(
                [44.713211, 11.307288],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_adafa86e39bc4cffb58e616edffaedb5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_e9f601179dcc44efbefec7c5776b1d48.setIcon(icon_adafa86e39bc4cffb58e616edffaedb5);
        
    
        var popup_18d0c13277ab4c13a3349b73c3b65a59 = L.popup({"maxWidth": 2650});

        
            var i_frame_a82fcf796f584dcba9edcfc9bd318268 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb2xsZWdpYXRhIGRpIFMuIE1hcmlhIG1hZ2dpb3JlIC0gRHVvbW8gZSBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDI2Mjg4NTcuNjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDI2Mjg4NTcuNjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_18d0c13277ab4c13a3349b73c3b65a59.setContent(i_frame_a82fcf796f584dcba9edcfc9bd318268);
        

        marker_e9f601179dcc44efbefec7c5776b1d48.bindPopup(popup_18d0c13277ab4c13a3349b73c3b65a59)
        ;

        
    
    
            var marker_32ad73566f234439af1105db6af08584 = L.marker(
                [44.792169, 11.234524],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_8013e74423724956b489acc189ac29d0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_32ad73566f234439af1105db6af08584.setIcon(icon_8013e74423724956b489acc189ac29d0);
        
    
        var popup_86b189588669476f81022ce3b7c623bc = L.popup({"maxWidth": 2650});

        
            var i_frame_6ed9942a68a8448ea5f2333b71145f2b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDU4ODc0Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA1ODg3NDcuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_86b189588669476f81022ce3b7c623bc.setContent(i_frame_6ed9942a68a8448ea5f2333b71145f2b);
        

        marker_32ad73566f234439af1105db6af08584.bindPopup(popup_86b189588669476f81022ce3b7c623bc)
        ;

        
    
    
            var marker_8b919a4fb6d1462d9c9caac5e5d718ac = L.marker(
                [44.916306, 10.809573],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_e929f2a9843449c5a7cf5b67a5d6ac39 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_8b919a4fb6d1462d9c9caac5e5d718ac.setIcon(icon_e929f2a9843449c5a7cf5b67a5d6ac39);
        
    
        var popup_87ebc78e5ca24ee1a1a3943d5b631735 = L.popup({"maxWidth": 2650});

        
            var i_frame_4f59a7eba0974cf3a27f628740040794 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIHByb3RldHRhIC0gSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgNzg3NjguODIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDc4NzY4LjgyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_87ebc78e5ca24ee1a1a3943d5b631735.setContent(i_frame_4f59a7eba0974cf3a27f628740040794);
        

        marker_8b919a4fb6d1462d9c9caac5e5d718ac.bindPopup(popup_87ebc78e5ca24ee1a1a3943d5b631735)
        ;

        
    
    
            var marker_bce1bb36570d46ebbe5c548f10bf8875 = L.marker(
                [44.880183, 11.077658],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_7847681f6eb1479ba1804fa6bfbe9557 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_bce1bb36570d46ebbe5c548f10bf8875.setIcon(icon_7847681f6eb1479ba1804fa6bfbe9557);
        
    
        var popup_4e687303a25140e78f928448836e00c6 = L.popup({"maxWidth": 2650});

        
            var i_frame_4b694822933c4cdda89e65f4bc58a679 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gc3BvcnRpdm8tc29jaWFsZSBwb2xpdmFsZW50ZSAoZXggYm9jY2lvZHJvbW8pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+V2hlcmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBhbGxvY2F0ZWQ6PC9iPiAgODkzNjQwLjczIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA4OTM2NDAuNzMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBXb3JrIHByb2dyZXNzOiBGaW5pc2hlZCB3b3JrczwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4e687303a25140e78f928448836e00c6.setContent(i_frame_4b694822933c4cdda89e65f4bc58a679);
        

        marker_bce1bb36570d46ebbe5c548f10bf8875.bindPopup(popup_4e687303a25140e78f928448836e00c6)
        ;

        
    
    
            var marker_8ff8d6e784bc452f8ebfb6aba7a274f2 = L.marker(
                [44.877385, 11.130422],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_8f72e25447aa44058544d3be12871a71 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_8ff8d6e784bc452f8ebfb6aba7a274f2.setIcon(icon_8f72e25447aa44058544d3be12871a71);
        
    
        var popup_0106e2a439d04de3933f9332c2462e1a = L.popup({"maxWidth": 2650});

        
            var i_frame_8463dd31905c449f8344def455315c5b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBhbWJ1bGF0b3JpbyBtZWRpY28gZGkgTW9ydGl6enVvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMDA4MDMuNjQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEwMDgwMy42NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0106e2a439d04de3933f9332c2462e1a.setContent(i_frame_8463dd31905c449f8344def455315c5b);
        

        marker_8ff8d6e784bc452f8ebfb6aba7a274f2.bindPopup(popup_0106e2a439d04de3933f9332c2462e1a)
        ;

        
    
    
            var marker_bca30653d235457c9b92cc8a573b904c = L.marker(
                [44.890501, 11.090152],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_5c73fa5da9174e94943b09d7f19ef9a2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_bca30653d235457c9b92cc8a573b904c.setIcon(icon_5c73fa5da9174e94943b09d7f19ef9a2);
        
    
        var popup_9d28d2e675ef489a9d60bc365989fee0 = L.popup({"maxWidth": 2650});

        
            var i_frame_400321f6238c4bd2a2e6ad30f29b7dee = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBDaXZpZGFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDUwMDYyNS43NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IHBhaWQ6PC9iPiAgNTAwNjI1Ljc1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9d28d2e675ef489a9d60bc365989fee0.setContent(i_frame_400321f6238c4bd2a2e6ad30f29b7dee);
        

        marker_bca30653d235457c9b92cc8a573b904c.bindPopup(popup_9d28d2e675ef489a9d60bc365989fee0)
        ;

        
    
    
            var marker_ddd86a3cd4244f8ca98ec047029a7029 = L.marker(
                [44.897034000000005, 11.061931],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_af01abd906a842578a7b45c8116c76fe = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_ddd86a3cd4244f8ca98ec047029a7029.setIcon(icon_af01abd906a842578a7b45c8116c76fe);
        
    
        var popup_ce0f9aa420e5443b86c329f71c91c3aa = L.popup({"maxWidth": 2650});

        
            var i_frame_fd0e793ddc37410fac516e0bd5e1d972 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBVcmJhbm8gZGVsIENhcG9sdW9nbyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5XaGVyZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+QW1vdW50IGFsbG9jYXRlZDo8L2I+ICAxMjk3MTY1LjMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkFtb3VudCBwYWlkOjwvYj4gIDEyOTcxNjUuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFdvcmsgcHJvZ3Jlc3M6IEZpbmlzaGVkIHdvcmtzPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ce0f9aa420e5443b86c329f71c91c3aa.setContent(i_frame_fd0e793ddc37410fac516e0bd5e1d972);
        

        marker_ddd86a3cd4244f8ca98ec047029a7029.bindPopup(popup_ce0f9aa420e5443b86c329f71c91c3aa)
        ;

        
    
    
            var marker_374e3fa7fa8a4866ada8a3875e259ae4 = L.marker(
                [44.926858, 11.181614],
                {}
            ).addTo(feature_group_sub_group_707c70b6246148e4a020f90edda18062);
        
    
            var icon_badd45485446412085fde75d9f628159 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "dot-circle", "iconColor": "white", "markerColor": "green", "prefix": "fa"}
            );
            marker_374e3fa7fa8a4866ada8a3875e259ae4.setIcon(icon_badd45485446412085fde75d9f628159);
        
    
        var popup_7b8cbbc066b2424795cf592ef80d081f = L.popup({"maxWidth": 2650});

        
            var i_frame_2b15a77d1b104deb9967edd7ad03ebb2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gY2l2aWNvIGZyYXppb25hbGUgLSBFeCBzY3VvbGUgZWxlbWVudGFyaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPldoZXJlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgYWxsb2NhdGVkOjwvYj4gIDE1NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5BbW91bnQgcGFpZDo8L2I+ICA2ODUxMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gV29yayBwcm9ncmVzczogRmluaXNoZWQgd29ya3M8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7b8cbbc066b2424795cf592ef80d081f.setContent(i_frame_2b15a77d1b104deb9967edd7ad03ebb2);
        

        marker_374e3fa7fa8a4866ada8a3875e259ae4.bindPopup(popup_7b8cbbc066b2424795cf592ef80d081f)
        ;

        
    
    
            var layer_control_79459fc6d56947b6a90740bfab4bfc82 = {
                base_layers : {
                    "openstreetmap" : tile_layer_799d6b8e777242b3b1adbaf817a5f93a,
                },
                overlays :  {
                    "Damaged areas (epicenter)" : choropleth_449150b360634166a9bbeddb1d867c0c,
                    "Works not started yet" : feature_group_sub_group_6b9755fda0b54a01904e02e5ae81ded9,
                    "Works in progress" : feature_group_sub_group_dd53f2af43c74c9baf39ab1f58229702,
                    "Finished works" : feature_group_sub_group_707c70b6246148e4a020f90edda18062,
                },
            };
            L.control.layers(
                layer_control_79459fc6d56947b6a90740bfab4bfc82.base_layers,
                layer_control_79459fc6d56947b6a90740bfab4bfc82.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_3a208fe2faed43e2b31a34c0d6b1dc93);
        
