const INITIAL_SQUARE_COLOR = '#1d1d1d';
const INITIAL_SQUARE_SHADOW = '0 0 2px #000';
const INITIAL_CONTAINER_SHADOW = "0px 0px 50px -20px #111";
const container = document.querySelector('#board');

let randomColor;

buildSquareGrid(400);

container.addEventListener('mouseover', (event) => {
  let target =  event.target.closest('#board') ? event.target.closest('#board') : event.target
  let targetCoords = target.getBoundingClientRect();

  let xCoord = (event.clientX - targetCoords.left) - target.offsetWidth / 2;
  let yCoord = (event.clientY - targetCoords.top) - target.offsetHeight/2;

  container.style.boxShadow = `${ xCoord / 4 }px ${ yCoord / 4 }px 50px -20px #${randomColor}`;
});

container.addEventListener('mouseleave', () => {
  container.style.boxShadow = INITIAL_CONTAINER_SHADOW
});

function buildSquareGrid( squareCount ) {
  for(let i = 0; i < squareCount; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);

    square.addEventListener('mouseover', hover);
    square.addEventListener('mouseleave', hoverLeave);
  }
};

function hover({ target }) {
  randomColor = generateRandomColor();
  target.style.background =  `#${randomColor}`;
  target.style.boxShadow = `0 0 2px #${randomColor}`
};

function hoverLeave({ target }) {
  target.style.background = INITIAL_SQUARE_COLOR;
  target.style.boxShadow = INITIAL_SQUARE_SHADOW;
};

function generateRandomColor() {
  return Math.floor(Math.random() * 256 * 256 * 256 ).toString(16);
};