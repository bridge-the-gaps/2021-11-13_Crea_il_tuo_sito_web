window.onscroll = function() {myFunction()};

const nav = document.getElementById("nav");

function myFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        nav.className = "scroll";
    }else {
        nav.className = "nav";
    }
}