const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body');

slides.forEach( slide => {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    switchBodyColor(slide.dataset.background_color);
    slide.classList.add('active');
  });
});

function clearActiveClasses() {
  slides.forEach( slide => {
    slide.classList.remove('active');
  })
};

function switchBodyColor(color) {
  body.style.backgroundColor = color;
}