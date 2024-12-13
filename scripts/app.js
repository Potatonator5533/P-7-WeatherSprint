// navigator.geolocation.getCurrentPosition(success, errorFunc);

let weatherImg1 = document.getElementById("weatherImg1");
let weather = document.getElementById("weather");
let DOTW1 = document.getElementById("DOTW1");
let currentTemp1 = document.getElementById("currentTemp1");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let maxMinTemp1 = document.getElementById("max-minTemp1");
let city = document.getElementById("city");
let DOTW2 = document.getElementById("DOTW2");
let weatherImg2 = document.getElementById("weatherImg2");
let currentTemp2 = document.getElementById("currentTemp2");
let maxMinTemp2 = document.getElementById("max-minTemp2");
let DOTW3 = document.getElementById("DOTW3");
let weatherImg3 = document.getElementById("weatherImg3");
let currentTemp3 = document.getElementById("currentTemp3");
let maxMinTemp3 = document.getElementById("max-minTemp3");
let DOTW4 = document.getElementById("DOTW4");
let weatherImg4 = document.getElementById("weatherImg4");
let currentTemp4 = document.getElementById("currentTemp4");
let maxMinTemp4 = document.getElementById("max-minTemp4");
let DOTW5 = document.getElementById("DOTW5");
let weatherImg5 = document.getElementById("weatherImg5");
let currentTemp5 = document.getElementById("currentTemp5");
let maxMinTemp5 = document.getElementById("max-minTemp5");

// Btns
let fahrenheit = document.getElementById("fahrenheit");
let secondDay = document.getElementById("secondDay");
let celsius = document.getElementById("celsius");
let thirdDay = document.getElementById("thirdDay");
let fourthDay = document.getElementById("fourthDay");
let fifthDay = document.getElementById("fifthDay");
let isFavorite = document.getElementById("isFavorite");

// let degreeSetting = "f";
// let data1;

function test1() {
  return fetch("../test1.json")
    .then((response) => response.json())
    .then((data1) => {
      return data1;
    });
}

function test2() {
  return fetch("../test2.json")
    .then((response) => response.json())
    .then((data2) => {
      console.log(data2);
      return data2;
    });
}

LoadPage();
// test2();

async function LoadPage() {
  // const promise1 = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a');
  // data1 = await promise1.json();

//   const promise2 = await fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=38.5810606&lon=-121.493895&appid=2af1c812e6a78735121f5ae9d2d27f6a');
//   data2 = await promise2.json();

  test1().then((data1) => {
    console.log(data1);

    // Main Card
    weather.innerText = data1.weather[0].main;
    // DOTW1.innerText = data.
    currentTemp1.innerText = TempConverter(data1.main.temp);
    maxMinTemp1.innerText =
      TempConverter(data1.main.temp_max) +
      "°/" +
      TempConverter(data1.main.temp_min) +
      "°";
    wind.innerText = "Wind: " + data1.wind.speed;
    humidity.innerText = "Humidity " + data1.main.humidity;
    city.innerText = data1.name + ", " + data1.sys.country;
  });
//   test2.then((data2) => {
    // Next day's forecast
    for (let i = 0; i < 5; i++) {

    }
//   });
}

// alert("hi");

fahrenheit.addEventListener("click", () => {
  celsius.className = "unselected";
  fahrenheit.className = "";

  // Main Card
  currentTemp1.innerText = TempConverter(data1.main.temp);
  maxMinTemp1.innerText =
    TempConverter(data1.main.temp_max) +
    "°/" +
    TempConverter(data1.main.temp_min) +
    "°";
});

celsius.addEventListener("click", () => {
  celsius.className = "";
  fahrenheit.className = "unselected";

  // Main Card
  currentTemp1.innerText = CelsiusConverter(data1.main.temp);
  maxMinTemp1.innerText =
    CelsiusConverter(data1.main.temp_max) +
    "°/" +
    CelsiusConverter(data1.main.temp_min) +
    "°";
});

function TempConverter(kelvin) {
  return Math.floor(((kelvin - 273.15) * 9) / 5 + 32);
}

function CelsiusConverter(kelvin) {
  let fahrenheit = Math.floor(((kelvin - 273.15) * 9) / 5 + 32);
  return Math.floor(((fahrenheit - 32) * 5) / 9);
}
