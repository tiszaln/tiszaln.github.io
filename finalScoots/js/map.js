var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.512432, lng: -86.9713825},
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: { lat: 20.47559,lng: -86.975799},
    map: map,
    title: 'Puerta Maya Cruise Ship Terminal'
  });
  var marker2 = new google.maps.Marker({
    position: { lat: 20.512058,lng: -86.9517232},
    map: map,
    title: 'Playa del Carmen-Cozumel Ferry Dock'
  });
}