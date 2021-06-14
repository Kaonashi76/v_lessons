const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const containerHeight = document.querySelector('.container').clientHeight;
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let slideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let interval = sliderInterval()

function sliderInterval() {
 let interval = setInterval(() => {
    changeSlide(slideIndex += 1);
  }, 5000);

  return interval
}

upBtn.addEventListener('click', () => {
  changeSlide(slideIndex += 1)
})

downBtn.addEventListener('click', () => {
  changeSlide(slideIndex -= 1)
})

function changeSlide(activeSlideIndex){

  clearInterval(interval);

  if (activeSlideIndex === slidesCount) {
    slideIndex = 0;
  }
  if (activeSlideIndex < 0) {
    slideIndex = slidesCount - 1;
  }

  mainSlide.style.transform = `translateY(-${slideIndex * containerHeight}px)`;
  sidebar.style.transform= `translateY(${slideIndex * containerHeight}px)`;

  interval = sliderInterval()
}