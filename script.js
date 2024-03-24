document.addEventListener('DOMContentLoaded', function() {
    var hero = document.getElementById('hero');
    var images = [
        'url(photos/free.jpg)',
        
    ];

    var currentImageIndex = 0;

    function changeBackgroundImage() {
        hero.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000);
    changeBackgroundImage();
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var header = document.getElementById("main-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the scrolled class to the header when you reach its scroll position. Remove "scrolled" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}


document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});
