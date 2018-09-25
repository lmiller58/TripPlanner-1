
const mapbox = require("mapbox-gl");


const restaurantMarker = document.createElement('div');

new mapboxgl.Marker(restaurantMarker).setLngLat([-87.633379,41.896602]).addTo(map);

restaurantMarker.style.width = "32px";
restaurantMarker.style.height = "39px";
restaurantMarker.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png"
