let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

let autoSlide; // zmienna timera

function updateSlider(){
  slides.style.transform = "translateX(-" + (index * 100) + "%)";
}

function startAutoSlide(){
  autoSlide = setInterval(nextSlide, 4000);
}

function resetAutoSlide(){
  clearInterval(autoSlide);
  startAutoSlide();
}

function nextSlide(){
  index = (index + 1) % total;
  updateSlider();
}

function prevSlide(){
  index = (index - 1 + total) % total;
  updateSlider();
}

function nextSlideManual(){
  nextSlide();
  resetAutoSlide();
}

function prevSlideManual(){
  prevSlide();
  resetAutoSlide();
}

startAutoSlide();