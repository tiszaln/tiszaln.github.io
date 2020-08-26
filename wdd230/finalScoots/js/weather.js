function getWeather(id) {
    /* Fetch API */
    const currentWeather='https://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=imperial&APPID=4d4b8d62ff140c04149814adecf51ed0';
    fetch(currentWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        /* console.log(jsObject); */
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });
    /* 5-day Forecast */
    const fiveDayWeather='https://api.openweathermap.org/data/2.5/forecast?id=' + id + '&units=imperial&APPID=4d4b8d62ff140c04149814adecf51ed0';
    fetch(fiveDayWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        /* console.log(jsObject); */
        var x = 0;
        for(var i=0; i <= 39; ++i) {
            if((jsObject.list[i].dt_txt).match(/12:00/g)) {
                document.getElementById('5dayicon' + x).setAttribute('src', 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x.png');
                document.getElementById('5dayicon' + x).setAttribute('alt', jsObject.list[i].weather[0].description);
                document.getElementById('5day' + x++).textContent = Math.round(jsObject.list[i].main.temp);

            }
            
        };
    });
}