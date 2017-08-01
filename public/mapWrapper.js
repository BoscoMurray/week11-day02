var MapWrapper = function(container, coords, zoom) {
  // var container = document.querySelector('#main-map');
  this.googleMap = new google.maps.Map(container, {
    // center: {lat: 40.712784, lng: -74.005941},
    center: coords,
    zoom: zoom
  });
  // console.log(container);
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords, contentString) {
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    })
    this.markers.push(marker);
  },
  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var position = { 
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
       };
       this.addMarker(position);
      // console.log(event);
      // console.log(event.latLng.lat());
    }.bind(this));
  },
  bounceMarkers: function() {
    this.markers.forEach( function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });
  },
  setCenter: function(coords) {
    this.googleMap.setCenter(coords);
  }
};