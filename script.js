const container = document.querySelector('#container');

const steinmann = document.querySelector('#steinmann');
const topButton = document.querySelector('.top');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');

const frameHeight = container.offsetHeight;
const frameHeight = container.offsetWidth;

topButton.addEventListener('click', () => {
  steinmann.style.top = parseFloat(steinmann.style.top) - 100 + 'px';
})

rightButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) + 100 + 'px';
})

leftButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) - 100 + 'px';
})

function loop() {
  
  
  
  requestAnimationFrame(loop);
}

requestAnimationFrame()