require([
    "esri/Map",
    "esri/views/SceneView"
], function(Map, SceneView){
 let map = new Map({
     basemap: "topo-vector",
     ground: "world-elevation"//show elevation
 });

 let view = new SceneView({
     container: "viewDiv",
     map: map,
     camera: {
         position: { //observation point
             x: -105.943737,
             y: 39.597223,
             z: 5000 //altitude in degrees
         }, 
         tilt: 75 //perspective in degrees
     }
 });
});