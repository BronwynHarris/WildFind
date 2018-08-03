const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYnJvbnd5bmgiLCJhIjoiY2ppbjliM3RoMDF2cTNwbHhhYWpxaDA4aSJ9.Ck-5IjFlQeo_sEhv1g70vA";

const BirdCoords = [-123.12073750000002, 49.2827291]

const map = new mapboxgl.Map({
  container: "map",
  center: BirdCoords, 
  zoom: 2, 
  style: "mapbox://styles/bronwynh/cjkd4eehc363l2ro2381a2ocj" 
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);
