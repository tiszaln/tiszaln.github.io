function responsiveMenu() {
    var menu = document.getElementById("hamburger");
    if (menu.innerHTML === "\u2630"){
        menu.innerHTML = "&#10803;";
        document.getElementById("menu").classList.toggle("hide");
    } else {
        menu.innerHTML = "&#9776;";
        document.getElementById("menu").classList.toggle("hide");
    };
};