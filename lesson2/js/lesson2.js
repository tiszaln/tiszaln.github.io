var today = new Date();
var year = today.getFullYear();

function copyYear() {
    document.getElementById("copyright").innerHTML = year;
    document.getElementById("lastUpdate").innerHTML = "Last Updated: " + document.lastModified;
};