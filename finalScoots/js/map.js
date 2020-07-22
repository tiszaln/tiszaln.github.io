var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.4230, lng: -86.9223 },
    zoom: 10
  });
}