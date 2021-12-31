const grid = document.getElementById('grid');
const startBtn = document.getElementById('start');
let score = document.getElementById('score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
width = 10;

function createGrid() {
  for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    squares.push(square);
  }
}
createGrid();

currentSnake.forEach((index) => squares[index].classList.add('snake'));

function move() {
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add('snake');
}
move();

let timerId = setInterval(move, 1000);

function control(e) {
  if (e.key === 'D' || e.key === 'd') {
    console.log('right pressed');
    direction = 1;
  } else if (e.key === 'W' || e.key === 'w') {
    console.log('up pressed');
    direction = -width;
  } else if (e.key === 'A' || e.key === 'a') {
    console.log('left pressed');
    direction = -1;
  } else if (e.key === 'Z' || e.key === 'z') {
    console.log('down pressed');
    direction = +width;
  }
}

document.addEventListener('keyup', control);
