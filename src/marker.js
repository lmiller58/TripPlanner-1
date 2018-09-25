const mapbox = require('mapbox-gl');

// const iconURLs = {
//   hotels: 'http://i.imgur.com/D9574Cu.png',
//   restaurants: 'http://i.imgur.com/cqR6pUI.png',
//   activities: 'http://i.imgur.com/WbMOfMl.png'
// };

const buildMarker = (type, coords) => {
  const newElementMarker = document.createElement('div');
  if (type === 'restaurant') {
    newElementMarker.style.backgroundImage =
      'url(http://i.imgur.com/cqR6pUI.png)';
  } else if (type === 'hotel') {
    newElementMarker.style.backgroundImage =
      'url(http://i.imgur.com/D9574Cu.png)';
  } else if (type === 'activity') {
    newElementMarker.style.backgroundImage =
      'url(http://i.imgur.com/WbMOfMl.png)';
  }
  newElementMarker.style.width = '32px';
  newElementMarker.style.height = '39px';

  let newMarker = new mapbox.Marker(newElementMarker).setLngLat(coords);
  return newMarker;
};

module.exports = buildMarker;
