var map;

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
        source: new ol.source.OSM()
    });

    map.addLayer(newLayer);
}

function addUser(coordinatesFromLocalisation, userName){

    colorNewUser = new ol.Color([Math.random()*255, Math.random()*255, Math.random()*255]);

    fillNewUser = new ol.style.Fill({
        color: colorNewUser
    });

    strokeNewUser = new ol.style.Stroke({
        color: colorNewUser
    });

    styleNewUser = new ol.style.Style({
        fill: fillNewUser,
        stroke: strokeNewUser
    });

    coordinatesNewUser = ol.proj.fromLonLat(coordinatesFromLocalisation,'EPSG:3857' );

    geomNewUser = new ol.geom.Point({
        coordinates: coordinatesNewUser
    });

    featureNewUser = new ol.Feature({
       geometry: geomNewUser
    });

    sourceNewUser = new ol.source.Vector({
        feature: featureNewUser
    });

    layerNewUser = new ol.layer.Vector({
        source: sourceNewUser,
        name: userName
    });
    map.addLayer(layerNewUser);
}

function removeUser(userName) {
    for (var layer in map.getLayers()) {
        if (layer.get(name) == userName) {
            map.removeLayer(layer);
            break;
        }
    }
}
