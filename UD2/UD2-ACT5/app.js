//Array con el que vamos a trabajar
const aparcamientos = [
  { nombre: "Alcazaba", libres: 120, lat: 36.72, lng: -4.42 },
  { nombre: "Cervantes", libres: 80, lat: 36.72, lng: -4.41 },
  { nombre: "Muelle uno", libres: 60, lat: 36.73, lng: -4.43 },
  { nombre: "Paseo del parque", libres: 40, lat: 36.71, lng: -4.44 },
  { nombre: "Ayuntamiento", libres: 20, lat: 36.74, lng: -4.40 },
];

//Gráfico de barras con Chart.js
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: aparcamientos.map(a => a.nombre),
    datasets: [
      {
        label: "Plazas libres",
        data: aparcamientos.map(a => a.libres),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
        beginAtZero: true,
    }
  }
});


//Mapa LeafLet
const map = L.map("map").setView([36.72, -4.42], 13); //Mapa en Málaga

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '© OpenStreetMap'
}).addTo(map);

//Recorremos el array y mostramos el mapa
aparcamientos.forEach(a => {
  const marker = L.marker([a.lat, a.lng]).addTo(map);
  marker.bindPopup(`<strong>${a.nombre}</strong><br>Plazas libres: ${a.libres}`);
});