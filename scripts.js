const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".reference");
const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");
let currentIndex = 0;

function showSlide(index) {
  const width = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(${-width * index}px)`;
}

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);
