var today = new Date();
var year = today.getFullYear();

var options = { weekday: 'long', day: 'numeric', month: 'long',  year: 'numeric'};

var current = today.toLocaleDateString('en-UK', options)

console.log(today.getDay());

function copyYear() {
/*     document.getElementById("copyright").innerHTML = year; */
    document.getElementById("today").innerHTML = current;
    if(today.getDay() == 5) {
        document.getElementById("pancakeDay").style.display = "block";
    };
    var daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for(var i = 0; i < 5; ++i) {
        document.getElementById("day" + i).innerHTML = daysOfTheWeek[today.getDay() + i + 1];
    }
};

function responsiveMenu() {
    var menu = document.getElementById("toggleMenu");
    if (menu.innerHTML === "\u2630 Menu"){
        menu.innerHTML = "&#10803;";
        document.getElementById("menu").classList.toggle("hide");
    } else {
        menu.innerHTML = "&#9776; Menu";
        document.getElementById("menu").classList.toggle("hide");
    };
};

