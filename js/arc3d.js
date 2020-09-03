require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/views/SceneView"
], function(
    Map, MapView, FeatureLayer, GraphicsLayer, Graphic, SceneView){
 let map = new Map({
     basemap: "topo-vector",
     ground: "world-elevation"//show elevation
 });
 let sql = "TRL_NAME like '%Canyon%'";
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

view.when(function(){
    queryFeatureLayerView(view.center, 1500,"intersects")
});
