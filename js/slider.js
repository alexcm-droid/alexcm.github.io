/* IMAGE SLIDER */

// Revised for Case Project: replaced plain JavaScript selectors and display changes with jQuery selectors and methods.

let currentSlide = 0;

// const slides = document.querySelectorAll('.slide');
const slides = $('.slide');

/* SHOW SLIDE */

function showSlide(index) {
  // slides.forEach((slide) => {
  //   slide.style.display = 'none';
  // });
  slides.hide();

  // slides[index].style.display = 'block';
  slides.eq(index).show();
}

/* NEXT SLIDE */

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

/* BUTTON CONTROLS */

window.changeSlide = function(direction) {
  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
};

/* INITIALIZE SLIDER */

if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000);
}