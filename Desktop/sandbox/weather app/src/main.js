import "../style.css";

const apiKey = "d7dbe4f3a99dc3739d115d7a65ed02f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity__value").innerHTML = data.main.humidity;
  document.querySelector(".wind__value").innerHTML = data.wind.speed;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
