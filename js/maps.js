let map;
let marker;

function initMap() {
  const myLatLng = { lat: 49.5895987590118, lng: 34.55115554199894 };
  map = new google.maps.Map(document.querySelector("#map"), {
    center: myLatLng,
    zoom: 14
  });
  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "./img/pin.PNG",
  });
}

