// create map
const map = L.map("mapid").setView([-10.1853894, -48.3388782], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
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
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // pegar container de fotos #images
  const container = document.querySelector("#images");

  // pegar container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

// delete photo field
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");
  //console.log(fieldsContainer.length)

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  console.log("aqui");

  // deletar o campo
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // retirar a classe .active dos botões
  document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"));

  // adicionar a classe .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name = "open_on_weekends" ]');
  
  // verificar se SIM ou NÃO
  input.value = button.dataset.value;
}

/*
function validate(event) {
  // NO FORM onsubmit=validate(event)
  // validar se lat e lng estão preenchidos
  const needsLatAndLng = true;

  if(needsLatAndLng) {
  event.preventDefault()

  alert('Selecione ponto no mapa')
  }
}*/