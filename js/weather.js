const city = document.querySelector("#city-span");
const weather = document.querySelector("#weather-span");
const API_KEY = "229265e41a4656409bced431068cf111";

function onGeoApi(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('lat', lat)
  console.log('lon', lon)
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log('url',url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}
function onGeoError() {
    weather.innerText = "위치를 찾을 수 없어요 ㅠㅠ";
}

navigator.geolocation.getCurrentPosition(onGeoApi, onGeoError);