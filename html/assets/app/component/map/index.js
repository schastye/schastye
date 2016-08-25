export function map () {
  var styles = [{
    'featureType': 'all',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'all',
    'elementType': 'labels.icon',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'administrative',
    'elementType': 'labels.text.fill',
    'stylers': [{
      'color': '#444444'
    }]
  }, {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{
      'color': '#f2f2f2'
    }]
  }, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'lightness': 45
    }]
  }, {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [{
      'color': '#f3f3f3'
    }, {
      'visibility': 'on'
    }]
  }]

  var myLatLng = {
    lat: 59.929022,
    lng: 30.343714
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng,
    styles: styles
  })
  var image = {
    url: '/img/mapMarker.svg',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(60, 60),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(30, 70)
  }
  // let image = './img/mapMarker.png'
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  })
}
