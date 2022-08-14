const apiKey = "45cbc5020ea786cbc04ea3f592967c73";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        ".weather span:first-child"
      );
      const cityContainer = document.querySelector(".weather span:last-child");
      cityContainer.innerText = `location:${data.name}`;
      weatherContainer.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}℃`;
    });
}
function onGeoError() {
  alert("i cant find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
