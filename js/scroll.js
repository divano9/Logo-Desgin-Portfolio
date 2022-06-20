const nav = document.getElementsByClassName("navbar")[0];


window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        nav.style.opacity = 0.3;
    }
    else {
        nav.style.opacity = 1;
    }
},false);