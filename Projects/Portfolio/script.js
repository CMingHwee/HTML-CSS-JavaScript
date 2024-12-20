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

function toggleCode(codeId, button) {
  const codeBox = document.getElementById(codeId);
  //if display is "none" or ""
  if (codeBox.style.display === "none" || codeBox.style.display == "") {
               codeBox.style.display = "block"; //set display to "block"
button.innerHTML = "Click to Hide Code";//change text to "Click to Hide Code" when button is clicked
            } 
  else {
                codeBox.style.display = "none";
button.innerHTML = "Click to Show Code";//change text back to "Click to Show Code" when button is clicked again
            }
        }
        
function toggleAccordion(Id) {
  const content = document.getElementById(Id);
  //if display is "none" or ""
  if (content.style.display === "none" || content.style.display == "") {
               content.style.display = "block"; //set display to "block"
            } 
  else {
                content.style.display = "none"; //
 
            }
        }
