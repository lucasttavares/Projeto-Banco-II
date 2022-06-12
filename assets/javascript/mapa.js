let map;
let marker;

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
    mapTypeId: 'satellite'
  });

  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true,
      animation: google.maps.Animation.DROP
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });
}

function addMarker(evt){
    marker.setPosition(evt.latLng);
}

function salvar(){

    const obj = {
        nome: document.getElementById('nome').value,
        valor: document.getElementById('valor').value,
        org: document.getElementById('org').value,
        data: document.getElementById('data').value,
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    };

    fetch("http://localhost:3000/pontos",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(response =>{alert('Salvo com sucesso')})
    .catch(error => alert('Falha ao salvar!'));    

}

let map1;
let marker1;

let center1 = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center1: center1,
    zoom: 14,
    mapTypeId: 'satellite'
  });

  marker1 = new google.maps.Marker({
      map1: map,
      position: center1,
      draggable: true,
      animation: google.maps.Animation.DROP
  });
}

function addMarker(evt){
    marker1.setPosition(evt.latLng);
}