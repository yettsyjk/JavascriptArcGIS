
require([
    "esri/Map",
    "esri/views/MapView"
], function(Map, MapView){
    map = new Map( {
        basemap: "topo-vector"
    });

    let view = new MapView({
        container: "viewDiv",
        map: map,
        center: [
            -118.80500, 24.02700
        ],
        zoom: 200
    });
    view.ui.add(locate, "top-left");
});