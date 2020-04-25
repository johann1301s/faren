const container = document.querySelector('#container');
const steinmann = document.querySelector('#steinmann');
const topButton = document.querySelector('.top');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');
const frameHeight = container.offsetHeight;
const frameWidth = container.offsetWidth;

topButton.addEventListener('click', () => {
  steinmann.style.top = parseFloat(steinmann.style.top) - 100 + 'px';
})

rightButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) + 100 + 'px';
})

leftButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) - 100 + 'px';
})

let lastTime = 0;
let lastVel = -0.5;
let lastPos = 0;
let a = 0.000981;
function loop(time) {
  const dt = time - lastTime;
  const v = lastVel + a*dt;
  const s = lastPos + v*dt;
  if (s < frameHeight - 200) {
    steinmann.style.top = s + 'px';
  }
  
  lastTime = time;
  lastVel = v;
  lastPos = s;
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);