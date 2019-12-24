// const loadGoogleMapsApi = require('load-google-maps-api')
//
// loadGoogleMapsApi().then(function (googleMaps) {
//   new googleMaps.Map(document.querySelector('.map'), {
//     center: {
//       lat: 40.7484405,
//       lng: -73.9944191
//     },
//     zoom: 12
//   })
// }).catch(function (error) {
//   console.error(error)
// })
const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: process.env.GOOGLEMAPS_KEY });
  }

  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 45.520562, lng: -122.677438 },
      zoom: 14
    });
  }
}

export { Map };
