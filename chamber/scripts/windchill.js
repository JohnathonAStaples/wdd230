 function windChillCalculator() {
    var temperature = document.getElementById("temperature");
    var windSpeed = document.getElementById("windSpeed");
    var chill = document.getElementById("windChill");

    var temp = parseFloat(temperature.textContent);
    var wind = parseFloat(windSpeed.textContent);

    if (temp <= 50 && wind >= 3.0) {
        var windChill = 
        35.74+0.6214*temp-35.75*Math.pow(wind, 0.16)+0.4275*temp*Math.pow(wind, 0.16);
    chill.textContent = windChill.toFixed(2)
    } else {
        chill.textContent = "N/A";
    }
 }

 windChillCalculator();