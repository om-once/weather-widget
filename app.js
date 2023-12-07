const inputCity = document.querySelector(".weather-widget__input");
const btnCity = document.querySelector(".weather-widget__btn");
const cityName = document.querySelector(".weather-widget__city");
const windSpeed = document.querySelector("#wind");
const humidityPer = document.querySelector("#humidity");
const weatherDesc = document.querySelector(".weather-widget__desc");
const preasureValue = document.querySelector("#pressure");
const iconWeatherWrapper = document.querySelector(".weather-widget__icon");
const windDeg = document.querySelector("#deg");
const tempValue = document.querySelector("#temp");
const dayName = document.querySelector(".weather-widget__day");
const todayDate = document.querySelector(".weather-widget__date");
const windDegDirrect = document.querySelector(".icon-wind");
let date = new Date();
let icon;
let iconUrl;
let cityValue;
btnCity.addEventListener("click", function () {
  iconWeatherWrapper.innerHTML = "";
  let weatherIcon;
  cityValue = inputCity.value.toUpperCase();
  cityName.textContent = cityValue;
  console.log(cityValue);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod != 200) {
        alert(data.message);
      } else {
        windSpeed.textContent = +data.wind.speed.toFixed(2);
        humidityPer.textContent = data.main.humidity + " %";
        weatherDesc.textContent = data.weather[0].description;
        preasureValue.textContent = data.main.pressure;
        windDeg.textContent = data.wind.deg;
        windDegDirrect.style.transform = `rotate(${data.wind.deg}deg)`;
        tempValue.textContent = Math.floor(+data.main.temp);
        icon = data.weather[0].icon;
        iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
        weatherIcon = document.createElement("img");
        weatherIcon.setAttribute("src", iconUrl);
        iconWeatherWrapper.append(weatherIcon);
        switch (date.getDay()) {
          case 0:
            dayName.textContent = "Sunday";
            break;
          case 1:
            dayName.textContent = "Monday";
            break;
          case 2:
            dayName.textContent = "Tuesday";
            break;
          case 3:
            dayName.textContent = "Wednesday";
            break;
          case 4:
            dayName.textContent = "Thursday";
            break;
          case 5:
            dayName.textContent = "Friday";
            break;
          case 6:
            dayName.textContent = "Saturday";
            break;
        }
        todayDate.textContent = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
      }
    });
});
