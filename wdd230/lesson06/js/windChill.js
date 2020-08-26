function calcWindChill(){
    var temp = parseInt(document.getElementById('temp').innerHTML);
    var windSpeed = parseInt(document.getElementById('speed').innerHTML);
if(temp <= 50 && windSpeed > 3) {
    var windChill = Math.floor((35.74 + 0.6215 * temp - 35.74 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)) * 10) / 10;
    document.getElementById("windChill").innerHTML = windChill + "\u2109";
}
else {
    document.getElementById("windChill").innerHTML = "N/A";
}
}