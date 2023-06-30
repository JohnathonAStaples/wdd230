 function windChillCalculator() {
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

 windChillCalculator();
 

 let weather = {
    lat: "138.878445",
    lon: "-104.869789",
    apiKey:"ba11da35058f6814952f21a7b7a6a754",
    fetchWeather: function (lat, lon) {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.lat + "&lon=" + this.lon + "&units=imperial&appid=" + this.apiKey).then((response) => response.json())
        .then((data) => console.log(data));
       
    },
    displayWeather: function(data){
        const { name } = data;
        const {icon, description } = data.weather[0];
        const {temp, feels_like} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, feels_like, speed);
        document.querySelector(".city").innerHTML = "Weather in Garden of the Gods";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    }
 };