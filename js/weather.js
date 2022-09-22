const API_KEY = "d4c73d0ca0583f7905f1e7a7c3cb143e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather")
        const weather_span = document.querySelector("#weather span");
        weather.style.top = "5%";
        weather.style.left = "6%";
        weather_span.innerText = `${data.weather[0].main} / ${data.main.temp} ℃\n ${data.name} `;
        
    }); 
}
function onGeoError() {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Location access is blocked',
        showConfirmButton: true,
      })
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
