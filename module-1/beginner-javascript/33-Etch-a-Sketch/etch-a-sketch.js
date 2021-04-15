// Select the elements on the page canvas. sake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shake = document.querySelector('.shake');
const MOVE_AMOUNT = 60; // SAID THAT WE DON'T HAVE TO CHANGE

// Setup our canvas for drawing
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Create ramdon values
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start drawing. New route
ctx.moveTo(x, y); // desde
ctx.lineTo(x, y); // hasta
ctx.stroke();

// write a draw function
// *Con más de 1 propiedad
//      function draw({ key, type }) {
//        console.log(key);
//        console.log(type);
//      }
function draw({ key }) {
  // increment hue
  hue += 2;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(hue);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  // x -= MOVE_AMOUNT;
  // y -= MOVE_AMOUNT;
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.match('Arrow')) {
    e.preventDefault();
    // draw({ key: e.key, type: e.type }); *Con más de 1 propiedad
    draw({ key: e.key });
  }
}
// clear /shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', () => {
    canvas.classList.remove('shake');
  }, { once: true });
}
// listen for arrows keys
window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);
