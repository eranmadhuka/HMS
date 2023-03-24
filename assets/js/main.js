// Navbar ============================================================================
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Back to top button & Stiky Navbar window.onscroll function
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  myFunction();
};



// Back to top button ============================================================================
//Get the button
let mybutton = document.getElementById("top-btn");

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Stiky Navbar ============================================================================
// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky + 1) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


