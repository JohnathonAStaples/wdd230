// Select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const windSpeed = document.querySelector("#windSpeed");

const url =
 "https://api.openweathermap.org/data/2.5/weather?lat=38.8784&lon=-104.8697&units=imperial&appid=ba11da35058f6814952f21a7b7a6a754";

 async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
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
    0
  )}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = capitalize(desc);

  windSpeed.textContent = weatherData.wind.speed.toFixed(0);
}

function capitalize(str) {
  return str.replace(/^(.)|\s+(.)/g, function (match) {
    return match.toUpperCase();
  });
}

function calculateWindChill() {
  var temperatureElement = document.querySelector("#current-temp");
  var windSpeedElement = document.querySelector("#windSpeed");
  var windChillElement = document.querySelector("#windChill");

  // Extract the numerical values from the temperature and wind speed
  var temperature = parseFloat(temperatureElement.textContent);
  var windSpeed = parseFloat(windSpeedElement.textContent);

  if (temperature <= 50 && windSpeed > 3.0) {
    // Calculate the wind chill using the provided formula
    var windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);

    // Update the wind chill element with the calculated value
    windChillElement.textContent = windChill.toFixed(2) + " °F";
  } else {
    windChillElement.textContent = "N/A";
  }
}

calculateWindChill();

const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;