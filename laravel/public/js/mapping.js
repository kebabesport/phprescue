var map;
var listUser = [];
var listColor = [];
function init(){
    map = new ol.Map({
        target:'map',
        renderer:'canvas',
        view: new ol.View({
            projection: 'EPSG:3857',
            center:[0,0],
            zoom:5
        })
    });

    var newLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        name: 'map'
    });

    map.addLayer(newLayer);
}

function addUser(coordinatesFromLocalisation, userName){

    colorNewUser = ol.color.asArray("rgb("+(Math.floor(Math.random()*255))+","+(Math.floor(Math.random()*255))+","+(Math.floor(Math.random()*255))+")");


    fillNewUser = new ol.style.Fill({
        color: colorNewUser
    });

    strokeNewUser = new ol.style.Stroke({
        color: colorNewUser,
        width: 1
    });

    styleNewUser = new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: fillNewUser,
            stroke: strokeNewUser,
            points: 4,
            radius: 10
        })
    });

    coordinatesNewUser = ol.proj.fromLonLat(coordinatesFromLocalisation,'EPSG:3857');

    geomNewUser = new ol.geom.Circle({
        coordinates: coordinatesNewUser,
        radius: 10
    });

    featureNewUser = new ol.Feature({
       geometry: geomNewUser
    });
    featureNewUser.setStyle(styleNewUser);

    sourceNewUser = new ol.source.Vector({
        features: featureNewUser
    });


    layerNewUser = new ol.layer.Vector({
        source: sourceNewUser,
        name: userName
    });

    layerNewUser.setVisible(true);

    var features = new Array(1);
    features[0] = new ol.Feature(new ol.geom.Point(coordinatesNewUser));
    features[0].setStyle(styleNewUser);

    var source = new ol.source.Vector({
        features: features
    });

    var vectorLayer = new ol.layer.Vector({
        source: source,
        name: userName
    });

    map.addLayer(vectorLayer);
    map.getView().setCenter(coordinatesNewUser);
    listColor.push(colorNewUser);
    listUser.push(userName);
}

function removeUser(userName) {
    for(var i = 0; i < map.getLayers().getLength(); ++i){
        layer = map.getLayers().getArray()[i];
        if(layer.get('name') == userName){
            map.removeLayer(layer);
        }
    }
}

function addPointForUser(coordinatesFromLocalisation, userName){

    colorUser = listColor[listUser.indexOf(userName)];


    fillNewUser = new ol.style.Fill({
        color: colorUser
    });

    strokeNewUser = new ol.style.Stroke({
        color: colorUser,
        width: 1
    });

    styleNewUser = new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: fillNewUser,
            stroke: strokeNewUser,
            points: 4,
            radius: 10
        })
    });

    coordinatesNewUser = ol.proj.fromLonLat(coordinatesFromLocalisation,'EPSG:3857');

    geomNewUser = new ol.geom.Circle({
        coordinates: coordinatesNewUser,
        radius: 10
    });

    featureNewUser = new ol.Feature({
        geometry: geomNewUser
    });
    featureNewUser.setStyle(styleNewUser);

    sourceNewUser = new ol.source.Vector({
        features: featureNewUser
    });


    layerNewUser = new ol.layer.Vector({
        source: sourceNewUser,
        name: userName
    });

    layerNewUser.setVisible(true);

    var features = new Array(1);
    features[0] = new ol.Feature(new ol.geom.Point(coordinatesNewUser));
    features[0].setStyle(styleNewUser);

    var source = new ol.source.Vector({
        features: features
    });

    var vectorLayer = new ol.layer.Vector({
        source: source
    });

    map.addLayer(vectorLayer);
    map.getView().setCenter(coordinatesNewUser);
}

