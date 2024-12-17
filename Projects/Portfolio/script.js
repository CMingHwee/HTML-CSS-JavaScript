document.documentElement.style.scrollBehavior = 'smooth';

window.onscroll = function () { stickyNav() }; //triggers when scrolling

var navbar = document.querySelector('header');
var sticky = navbar.offsetTop; //diatance between top of page to header

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } //if scroll past this point, add sticky class to header
else {
 navbar.classList.remove("sticky");
  } //when scroll back up, remove sticky class from header
}
