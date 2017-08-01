var initialize = function() {
  // var center = {lat: -84.9949106, lng: -44.6544128};

  var center = {lat: 51.509865, lng: -0.118092};
  var mapDiv = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);
  var wimbledon = { lat: 51.4342911, lng: -0.2144883 };
  var wimbledonString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Wimbledon</h1>'+
              '<div id="bodyContent">'+
              '<p>Tennis here</p>'+
              '<p>Wimbledon <a href="http://www.wimbledon.com/">'+
              'http://www.wimbledon.com/</a></p> '+
              '</div>'+
              '</div>';
  mainMap.addMarker(wimbledon, wimbledonString);

  mainMap.addClickEvent();
  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var trinco = { lat: 8.587364, lng: 81.215212 };
  var trincoButton = document.querySelector('#button-center-on-trinco');
  trincoButton.addEventListener('click', mainMap.setCenter(trinco));
}

window.addEventListener('load', initialize);