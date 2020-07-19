var today = new Date();
var year = today.getFullYear();

var options = { weekday: 'long', day: 'numeric', month: 'long',  year: 'numeric'};

var current = today.toLocaleDateString('en-UK', options)

function fiveDay() {
    var daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for(var i = 0; i < 5; ++i) {
        document.getElementById("day" + i).innerHTML = daysOfTheWeek[today.getDay() + i + 1];
    }
};