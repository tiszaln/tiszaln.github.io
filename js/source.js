function toggleSchoolContent() {
    var schoolProjects = document.getElementsByClassName('school');
    for (var i = 0; i < schoolProjects.length; i++) {
        schoolProjects[i].classList.toggle('hidden');
    }
}

function togglePersonalContent() {
    var personalProjects = document.getElementsByClassName('personal');
    for (var i = 0; i < personalProjects.length; i++) {
        personalProjects[i].classList.toggle('hidden');
    }
}