const sliderInput = document.getElementById("sliderInput");
const slidesContainer = document.querySelector(".slides");

sliderInput.addEventListener("input", function() {
  const value = parseInt(sliderInput.value);
  slidesContainer.style.transform = `translateX(-${value * 100}%)`;
});
