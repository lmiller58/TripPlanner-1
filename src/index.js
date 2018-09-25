const buildMarker = require('./marker');
console.log('Hello from Javascript');

const mapboxgl = require('mapbox-gl');
let newElement = document.createElement('div');
newElement.style.width = '32px';
newElement.style.height = '39px';
newElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

//let body = document.getElementsByTagName('body')
//body.appendChild(newElement)

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnVsbHN0YWNrZXIiLCJhIjoiY2ptaTVkNHM0MDFmZzNybndhaGh0dDVmNSJ9.WTRPwsIO5eWtSqTIBAE91Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const newMarker = new mapboxgl.Marker(newElement)
  .setLngLat([-87.641, 41.895])
  .addTo(map);

const jimmyJohns = buildMarker('restaurant', [-87.633379, 41.896602]);
jimmyJohns.addTo(map);
