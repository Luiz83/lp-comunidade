const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth+20;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth+20;
  slidesContainer.scrollLeft -= slideWidth;
});

const slidesContainerTwo = document.getElementById("slides-container-two");
const prevButtonTwo = document.getElementById("slide-arrow-prev-two");
const nextButtonTwo = document.getElementById("slide-arrow-next-two");
nextButtonTwo.addEventListener("click", () => {
  const slideWidth = slide.clientWidth+20;
  slidesContainerTwo.scrollLeft += slideWidth;
});
prevButtonTwo.addEventListener("click", () => {
  const slideWidth = slide.clientWidth+20;
  slidesContainerTwo.scrollLeft -= slideWidth;
});