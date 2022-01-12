var classname = 'mavu';
function toggleNavBar() {
    var navBar = document.getElementById("navbar-nav");
    navBar.classList.toggle("collapsed-nav");
    if(navBar.classList.contains("collapsed-nav")) {
        document.getElementById("navbar-nav").lastElementChild.childNodes[1].src = "./resources/pngfind.com-right-arrow-png-877089.png"
    }
    else {
        document.getElementById("navbar-nav").lastElementChild.childNodes[1].src = "./resources/SeekPng.com_north-arrow-architecture-png_572816 (1).png"
    }
}

function toggleView() {
    document.getElementById("card-view").classList.toggle("d-none");
    document.getElementById("list-view").classList.toggle("d-none");
    document.getElementById("card-section").classList.toggle("d-none");
    document.getElementById("list-section").classList.toggle("d-none");
}

function changeColor(event) {
    var elements = document.getElementsByClassName(this.classname);
    for(var i=0;i<elements.length;i++) {
        elements[i].style.backgroundImage = event.style.backgroundImage;
    }
}
function updateCard(classname) {
    this.classname = classname;
}

