const container = document.querySelector('#container');

const steinmann = document.querySelector('#steinmann');
const topButton = document.querySelector('.top');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');

const frameHeight = container.offsetHeight;
const frameWidth = container.offsetWidth;

function addX(n) {
  steinmann.style.left = parseFloat(steinmann.style.top) + n + 'px';
}

function addY(n) {
  steinmann.style.top = parseFloat(steinmann.style.top) + n + 'px';
}

topButton.addEventListener('click', () => {
  addY(100);
})

rightButton.addEventListener('click', () => {
  addX(100);
})

leftButton.addEventListener('click', () => {
  addX(-100);
})

function loop() {
  
  
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);