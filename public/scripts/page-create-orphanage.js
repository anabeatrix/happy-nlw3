// create map
const map = L.map("mapid").setView([-10.1853894, -48.3388782], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;
    
    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

// add photo field
function addPhotoField() {
    // pegar container de fotos #images
    const container = document.querySelector('#images');
    // pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload");
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer);

}
