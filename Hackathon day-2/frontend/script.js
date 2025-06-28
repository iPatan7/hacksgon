let map;          // Global map object
let marker = null; // Global marker reference

function initMap() {
  const center = { lat: 28.6139, lng: 77.2090 }; // Default: Delhi
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center,
  });

  marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Default Location",
  });
}

function previewImage() {
  const input = document.getElementById("imageUpload");
  const preview = document.getElementById("preview");

  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.classList.remove("d-none");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function sendImage() {
  const fileInput = document.getElementById("imageUpload");
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;
  const resultBox = document.getElementById("result");
  const loading = document.getElementById("loading");

  if (!fileInput.files[0]) {
    alert("Please select an image.");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  if (lat) formData.append("lat", lat);
  if (lon) formData.append("lon", lon);

  resultBox.classList.add("d-none");
  loading.classList.remove("d-none");

  fetch("http://127.0.0.1:8000/predict/", {
    method: "POST",
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      loading.classList.add("d-none");
      resultBox.classList.remove("d-none");

      const { confidence, result, latitude, longitude } = data;

      resultBox.innerHTML = `
        <strong>✅ ${result}</strong><br/>
        Confidence: <span class="text-info">${(confidence * 100).toFixed(2)}%</span><br/>
        Latitude: <span>${latitude ?? 'Not provided'}</span><br/>
        Longitude: <span>${longitude ?? 'Not provided'}</span>
      `;
    })
    .catch((error) => {
      loading.classList.add("d-none");
      resultBox.classList.remove("d-none");
      resultBox.innerHTML = `<span class="text-danger">❌ Error: ${error.message}</span>`;
    });
}
