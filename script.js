document.addEventListener('DOMContentLoaded', function() {
    var hero = document.getElementById('hero');
    var images = [
        'url(https://github.com/charlesliu04/Lumia/blob/main/photos/free.jpg?raw=true)',
        
        
    ];

    var currentImageIndex = 0;

    function changeBackgroundImage() {
        hero.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000);
    changeBackgroundImage();
});

//Scroll header animation
window.onscroll = function() { myFunction() };

var header = document.getElementById("main-header");

var sticky = header.offsetTop;

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



//Language Changer



  // Array of "Welcome to Lumia" in different languages
  const welcomeMessages = [
    "Welcome to Lumia",           // English
    "환영합니다 Lumia",           // Korean
    "欢迎光临 Lumia",             // Simplified Chinese
    "ようこそ Lumia",            // Japanese
    "Chào mừng bạn đến với Lumia", // Vietnamese
    "ยินดีต้อนรับสู่ Lumia",     // Thai
    // Add more languages as needed
  ];

  let currentLanguageIndex = 0;


  document.addEventListener('DOMContentLoaded', function() {
    const welcomeTextElement = document.getElementById('welcome-text');

    // Initially set the welcome message to English
    welcomeTextElement.textContent = welcomeMessages[currentLanguageIndex];
    // Increment the index for the next language, so it's ready for the next cycle
    currentLanguageIndex = (currentLanguageIndex + 1) % welcomeMessages.length;

    // Start the cycle of changing messages
    setInterval(changeWelcomeMessage, 5500); // Interval includes fade in/out time
});

function changeWelcomeMessage() {
    const welcomeTextElement = document.getElementById('welcome-text');
    
    // Fade out the text first
    welcomeTextElement.style.opacity = 0;

    // Wait for the fade out to complete before changing the text
    setTimeout(() => {
        // Change the text while it's invisible
        welcomeTextElement.textContent = welcomeMessages[currentLanguageIndex];
        
        // Fade in with new text
        welcomeTextElement.style.opacity = 1;

        // Increment the index for the next language
        currentLanguageIndex = (currentLanguageIndex + 1) % welcomeMessages.length;
    }, 500); // Match this with the CSS transition duration
}


document.addEventListener('DOMContentLoaded', function() {
  var serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
          var icon = item.querySelector('.service-icon');
          icon.classList.add('icon-hide');
      });

      item.addEventListener('mouseleave', function() {
          var icon = item.querySelector('.service-icon');
          icon.classList.remove('icon-hide');
      });
  });
});


function toggleDetails(id) {
  var element = document.getElementById(id);
  if (element.classList.contains('visible')) {
      element.classList.remove('visible');
  } else {
      element.classList.add('visible');
  }
}
