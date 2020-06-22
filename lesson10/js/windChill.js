function calcWindChill() {
    /* Fetch API */
    const apiURL='http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4d4b8d62ff140c04149814adecf51ed0';

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = jsObject.main.temp_max;
        document.getElementById('condition').textContent = jsObject.weather[0].main;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;
    });

    /* Wind Chill Calculation */
    var temp = parseInt(document.getElementById('temp').innerHTML);
    var windSpeed = parseInt(document.getElementById('speed').innerHTML);
    if (temp <= 50 && windSpeed > 3) {
        var windChill = Math.floor((35.74 + 0.6215 * temp - 35.74 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)) * 10) / 10;
        document.getElementById("windChill").innerHTML = windChill + "\u2109";
    } else {
        document.getElementById("windChill").innerHTML = "N/A";
    }

    /* 5-day Forecast */
    const apiURL5='http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4d4b8d62ff140c04149814adecf51ed0';
    fetch(apiURL5)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });
}