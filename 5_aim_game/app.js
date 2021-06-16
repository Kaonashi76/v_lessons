const startGameBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const buttonList = document.querySelector('#button-list');
const timeL = document.querySelector('#time');
const board = document.querySelector('#board')
let time = 0;
let score = 0;
startGameBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  screens[0].classList.add('up')
})

buttonList.addEventListener('click',(event)=>{
  if(event.target.classList.contains('time-btn')){
    time = +event.target.getAttribute('data-time');
    screens[1].classList.add('up');
    startGame()
  }
})

board.addEventListener('click', (event) => {
  if(event.target.classList.contains('circle')){
    event.target.remove(event.target);
    score++;
    createRandomCircle();
  }
})

function startGame() {
  setTime(time)
  let interval = setInterval(()=>{decrTime(interval)},1000)
  createRandomCircle()

}

function decrTime(interval) {
  if( time === 0){
    finishGame()
    clearInterval(interval)
  } else{
    let current = --time;
    setTime(current)
  }
}

function finishGame() {
  timeL.parentElement.classList.add('hide');
  board.innerHTML = `<h1>Ваш счет: <span style="color:#${generateRandomColor()}">${score}<span></h1>`;
}

function createRandomCircle() {

  const size = getRandomNumber(15, 50);
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  const circle = document.createElement('div');

  circle.classList.add('circle');

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `#${generateRandomColor()}`;

  board.append(circle);
}

function generateRandomColor() {
  return Math.floor(Math.random() * 256 * 256 * 256 ).toString(16);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function setTime(time){
  timeL.innerHTML = `00 : ${time < 10? '0' + time: time}`
}