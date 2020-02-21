const loadGoogleMapsApi = require('load-google-maps-api');
class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: process.env.GOOGLEMAPS_KEY });
  }

  static createMap(googleMaps, mapElement) {
    const blueSail = new google.maps.LatLng(25.077603, -77.429971);
    const twistedBar = new google.maps.LatLng(25.074535, -77.429387);
    const bon = new google.maps.LatLng(25.075770, -77.428400);
    const deck = new google.maps.LatLng(25.078430, -77.431071);
    const coconutcove = new google.maps.LatLng( 25.067724, -77.428569)
    // { lat: 25.067724, lng: -77.428569}
    let icons = {
      Dining: {
        icon: "M37 7h-28v27c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4v-5c6.076 0 11-4.925 11-11s-4.924-11-11-11zm0 17v-12c3.314 0 6 2.686 6 6 0 3.313-2.686 6-6 6zm-35 16v2.301c0 1.896 2.069 2.699 4.6 2.699h36.8c2.53 0 4.6-.803 4.6-2.699v-2.301h-46z"
      },
      CoconutCove: {
        icon: "M437.02,74.981C388.667,26.629,324.38,0,256.001,0C187.62,0,123.333,26.629,74.98,74.981 C26.629,123.333,0,187.62,0,255.999c0,68.381,26.629,132.668,74.98,181.02c48.353,48.353,112.64,74.98,181.021,74.98c68.379,0,132.666-26.628,181.018-74.98C485.372,388.667,512,324.38,512,255.999C512.001,187.62,485.372,123.333,437.02,74.981zM379.532,310.209c-21.578,49.383-70.336,81.291-124.217,81.291c-74.716,0-135.501-60.785-135.501-135.5 s60.785-135.5,135.501-135.5c53.572,0,102.217,31.654,123.928,80.642c3.357,7.573-0.063,16.435-7.636,19.791s-16.435-0.063-19.791-7.636C334.909,175.15,297.03,150.5,255.315,150.5c-58.174,0-105.501,47.327-105.501,105.5c0,58.174,47.327,105.5,105.501,105.5c41.956,0,79.924-24.848,96.727-63.303c3.317-7.592,12.16-11.058,19.752-7.74C379.385,293.774,382.85,302.617,379.532,310.209z"
      }
    };
    const features = [
      {
        position: coconutcove,
        type: 'coconut',
        title: 'CoconutCove'
      },
      {
        position: blueSail,
        type: 'Dining',
        title: "blueSail"
      },
      {
        position: twistedBar,
        type: 'Dining',
        title: "twistedBar"
      },
      {
        position: bon,
        type: 'Dining',
        title: "bon"
      },
      {
        position: deck,
        type: 'Dining',
        title: "deck"
      }
    ];
    const customStyled = [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];
    const maps = new googleMaps.Map(mapElement, {
      center: coconutcove,
      zoom: 15,
      disableDefaultUI: true,
      styles: customStyled
    });
    for(let i = 0; i < features.length; i++){
      if(features[i].type === 'Dining') {
        let marker = new google.maps.Marker({
          position: features[i].position,
          icon: {
            path: icons[features[i].type].icon,
            fillColor: '#dab08b',
            fillOpacity: 1,
            strokeColor: '',
            strokeWeight: 0,
            scale: 0.5
          },
          title: features[i].title,
          map: maps
        })

      }
      else {
        let marker = new google.maps.Marker({
          position: features[i].position,
          icon: {
            path: "M437.02,74.981C388.667,26.629,324.38,0,256.001,0C187.62,0,123.333,26.629,74.98,74.981 C26.629,123.333,0,187.62,0,255.999c0,68.381,26.629,132.668,74.98,181.02c48.353,48.353,112.64,74.98,181.021,74.98c68.379,0,132.666-26.628,181.018-74.98C485.372,388.667,512,324.38,512,255.999C512.001,187.62,485.372,123.333,437.02,74.981zM379.532,310.209c-21.578,49.383-70.336,81.291-124.217,81.291c-74.716,0-135.501-60.785-135.501-135.5 s60.785-135.5,135.501-135.5c53.572,0,102.217,31.654,123.928,80.642c3.357,7.573-0.063,16.435-7.636,19.791s-16.435-0.063-19.791-7.636C334.909,175.15,297.03,150.5,255.315,150.5c-58.174,0-105.501,47.327-105.501,105.5c0,58.174,47.327,105.5,105.501,105.5c41.956,0,79.924-24.848,96.727-63.303c3.317-7.592,12.16-11.058,19.752-7.74C379.385,293.774,382.85,302.617,379.532,310.209z",
            fillColor: '#F3AA6B',
            fillOpacity: 1,
            strokeColor: '',
            strokeWeight: 0,
            scale: .05
          },
          map: maps
        })
      }
    }
  }

    static changeMap(mouseText) {
      const customStyled = [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ]
      const mapElement = document.getElementById('map');
      const coconutcove = { lat: 25.067724, lng: -77.428569}
      const map = new google.maps.Map(mapElement,
      {
        center: new google.maps.LatLng(25.067724, -77.428569),
        zoom: 16,
        disableDefaultUI: true,
        styles: customStyled
      });
      let marker = new google.maps.Marker({
        position: coconutcove,
        icon: {
          path:"M437.02,74.981C388.667,26.629,324.38,0,256.001,0C187.62,0,123.333,26.629,74.98,74.981 C26.629,123.333,0,187.62,0,255.999c0,68.381,26.629,132.668,74.98,181.02c48.353,48.353,112.64,74.98,181.021,74.98c68.379,0,132.666-26.628,181.018-74.98C485.372,388.667,512,324.38,512,255.999C512.001,187.62,485.372,123.333,437.02,74.981zM379.532,310.209c-21.578,49.383-70.336,81.291-124.217,81.291c-74.716,0-135.501-60.785-135.501-135.5 s60.785-135.5,135.501-135.5c53.572,0,102.217,31.654,123.928,80.642c3.357,7.573-0.063,16.435-7.636,19.791s-16.435-0.063-19.791-7.636C334.909,175.15,297.03,150.5,255.315,150.5c-58.174,0-105.501,47.327-105.501,105.5c0,58.174,47.327,105.5,105.501,105.5c41.956,0,79.924-24.848,96.727-63.303c3.317-7.592,12.16-11.058,19.752-7.74C379.385,293.774,382.85,302.617,379.532,310.209z",
          fillColor: '#F3AA6B',
           // #FF5733
          fillOpacity: 1,
          strokeColor: '',
          strokeWeight: 0,
          scale: .05
        },
        title: 'coconutcove',
        map: map})
      marker.setMap(map);
      const blueSail = new google.maps.LatLng(25.077603, -77.429971);
      const twistedBar = new google.maps.LatLng(25.074535, -77.429387);
      const bon = new google.maps.LatLng(25.075770, -77.428400);
      const deck = new google.maps.LatLng(25.078430, -77.431071);
      const tambearly = new google.maps.LatLng(25.072245, -77.425098);
      const lyfordCay = new google.maps.LatLng(25.032837, -77.516610);
      const beach = new google.maps.LatLng(25.077353, -77.428701);
      const zoo = new google.maps.LatLng(25.075720, -77.361684);
      const breitling = new google.maps.LatLng(25.070668, -77.397346);
      const market = new google.maps.LatLng(25.074169, -77.422714);
      const oasis = new google.maps.LatLng(25.076529, -77.427624);
      const iconBase = '/src/assets/map-icons-master/src/icons/';
      let icons = {
        Dining: {
          icon: "M37 7h-28v27c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4v-5c6.076 0 11-4.925 11-11s-4.924-11-11-11zm0 17v-12c3.314 0 6 2.686 6 6 0 3.313-2.686 6-6 6zm-35 16v2.301c0 1.896 2.069 2.699 4.6 2.699h36.8c2.53 0 4.6-.803 4.6-2.699v-2.301h-46z"
        },
        Education: {
          icon: "M30 8v33h-24v-33h24m4-4h-32v42h32v-42zm-25 8h18v4h-18zm0 7h18v4h-18zm0 7h18v4h-18zm0 7h18v4h-18zm31-21h8v28h-8zm4.006-11c-2.194 0-4.006 1.765-4.006 3.937v4.063h8v-4.063c0-2.172-1.809-3.937-3.994-3.937zm-4.068 42l4.041 6.387 4.021-6.387z"
        },
        Recreation: {
          icon: "M11.462 1c-1.363 0-2.462 1.127-2.462 2.526v42.946c0 1.262 1.231 2.527 2.462 2.527 1.23 0 2.461-1.266 2.461-2.527v-25.894c.841-.367 1.659-.632 2.462-.632 4.923 0 12.185 6.317 17.231 6.317 2.151 0 5.231-.871 7.384-2.527v-17.684c-2.442 1.879-4.916 3.79-7.384 3.79-4.923 0-12.291-6.316-17.231-6.316-.83 0-1.64.152-2.462.316v-.316c0-1.399-1.099-2.526-2.461-2.526z"
        },
        Retail: {
          icon: "M25.562 2.966l-25.562 18.034h6v22h4v-15h8v15h27v-22h5l-24.438-18.034zm16.438 34.034h-19v-9h19v9zm0-12h-33v-8h33v8zm-2-6v4h-29v-4h29m1-1h-31v6h31v-6z"
        }
      };
      const features = [
        {
          position: blueSail,
          type: 'Dining',
          title: "blueSail"
        },
        {
          position: twistedBar,
          type: 'Dining',
          title: "twistedBar"
        },
        {
          position: bon,
          type: 'Dining',
          title: "bon"
        },
        {
          position: deck,
          type: 'Dining',
          title: "deck"
        },
        {
          position: tambearly,
          type: 'Education',
          title: "tambearly"
        },
        {
          position: lyfordCay,
          type: 'Education',
          title: "lyfordCay"
        },
        {
          position: beach,
          type: 'Recreation',
          title: "beach"

        },
        {
          position: zoo,
          type: 'Recreation',
          title: "zoo"
        },
        {
          position: breitling,
          type: 'Retail',
          title: "breitling"
        },
        {
          position: market,
          type: 'Retail',
          title: "market"
        },
        {
          position: oasis,
          type: 'Retail',
          title: "oasis"
        }
      ];
      for(let i = 0; i< features.length; i++){
        if(mouseText === features[i].type) {
          let marker = new google.maps.Marker({
            position: features[i].position,
            icon: {
              path: icons[features[i].type].icon,
              fillColor: '#dab08b',
              fillOpacity: 1,
              strokeColor: '',
              strokeWeight: 0,
              scale: 0.5
            },
            title: features[i].title,
            map: map,
            // 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          })
          if(mouseText === 'Dining') {
            map.setZoom(15);
          }
          else if(mouseText === 'Education') {
            map.setZoom(11.5);
          }
          else if(mouseText === 'Recreation') {
            map.setZoom(12);
            map.setCenter(new google.maps.LatLng(25.068212, -77.410171))
          }
          else if(mouseText === 'Retail') {
            map.setZoom(13);
          }
          marker.setMap(map);
        }
      }
    }
  }

export { Map };
