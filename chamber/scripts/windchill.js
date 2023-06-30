 /*function windChillCalculator() {
    const temperature = document.getElementById("temperature");
    const windSpeed = document.getElementById("windSpeed");
    const chill = document.getElementById("windChill");

    const temp = parseFloat(temperature.textContent);
    const wind = parseFloat(windSpeed.textContent);

    if (temp <= 50 && wind >= 3.0) {
        const windChill = 
        35.74+0.6214*temp-35.75*Math.pow(wind, 0.16)+0.4275*temp*Math.pow(wind, 0.16);
    chill.textContent = windChill.toFixed(2)
    } else {
        chill.textContent = "N/A";
    }
 }

 windChillCalculator();*/
 

 const url =
 "https://api.openweathermap.org/data/2.5/weather?lat=38.8784&lon=-104.8697&units=imperial&appid=ba11da35058f6814952f21a7b7a6a754";

let weather = {
  
  
  fetchWeather: function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=38.8784&lon=-104.8697&units=imperial&appid=ba11da35058f6814952f21a7b7a6a754" 
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
    const { name } = data;
    const {icon, description} =data.weather[0];
    const {temp, humidity} =data.main;
    const {speed} = data.wind;
    console.log (name,icon,description,temp,humidity, speed)
    document.querySelector(".icon").src = "https://openweathermap.org/img.wn/" + icon + "@2x.png"
  }
}