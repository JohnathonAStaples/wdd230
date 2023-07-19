// Weather
// Select HTML elements in the document
let currentTemp = document.querySelector("#current-temp");
let weatherIcon = document.querySelector("#weather-icon");
let captionDesc = document.querySelector("#description");
let windSpeed = document.querySelector("#windSpeed");
let humidity = document.querySelector("#humidity");

const url =
 "https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&units=imperial&appid=ba11da35058f6814952f21a7b7a6a754";

 async function apiFetch() {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    1
  )}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = capitalize(desc);

  windSpeed.textContent = weatherData.wind.speed.toFixed(1);
  humidity.textContent = weatherData.main.humidity.toFixed(1);
}

function capitalize(str) {
  return str.replace(/^(.)|\s+(.)/g, function (match) {
    return match.toUpperCase();
  });
}



// 3 Day Weather Forecast
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&units=imperial&appid=ba11da35058f6814952f21a7b7a6a754")
.then(response => response.json())
.then(data => {
  for (i=0;i<3;i++){
    document.getElementById("day" +(i+1) +"Min").innerHTML ="Min:" + Number(data.list[i].main.temp_min).toFixed(1) + "°"
  }
  for (i=0;i<3;i++){
    document.getElementById("day" +(i+1) +"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max).toFixed(1) + "°"
  }
  for (i=0;i<3;i++){
    document.getElementById("day" +(i+1) + "Humidity").innerHTML ="Humidity" + Number(data.list[i].main.humidity).toFixed(1)
  }
  for (i=0;i<3;i++){
    document.getElementById("img" + (i+1)).src="https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
  }

})

.catch(err => alert("Something Went Wrong"))

const d =new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function CheckDay(day){
  if(day + d.getDay() > 6){
    return day +d.getDay()-7;
  }
  else{
    return day +d.getDay();
  }
}

for(i=0;i<3;i++){document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}