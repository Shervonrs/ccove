const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: process.env.GOOGLEMAPS_KEY });
  }

  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 25.068822, lng: -77.428489 },
      zoom: 15
    });
  }
}




export { Map };
