var today = new Date();
var year = today.getFullYear();

var options = { weekday: 'long', day: 'numeric', month: 'long',  year: 'numeric'};

var current = today.toLocaleDateString('en-UK', options)

console.log(today.getDay());

function copyYear() {
/*     document.getElementById("copyright").innerHTML = year; */
    document.getElementById("today").innerHTML = current;
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

