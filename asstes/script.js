document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.querySelector(".slide-up");
    const scrollDownButton = document.querySelector(".slide-down");
  
    scrollUpButton.addEventListener("click", function() {
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    });
  
    scrollDownButton.addEventListener("click", function() {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    });
  });
  