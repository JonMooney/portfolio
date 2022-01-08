// Sticky header scripting

var header = document.getElementsByTagName('header');

// Get position of header
var sticky = header.offsetTop;

// Call function on scroll
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.remove("sticky");
    } else {
    header.classList.add("sticky");
    }
};