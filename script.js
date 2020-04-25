const container = document.querySelector('#container');
const steinmann = document.querySelector('#steinmann');
const topButton = document.querySelector('.top');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');
const frameHeight = container.offsetHeight;
const frameWidth = container.offsetWidth;
let a = 0.000981;
let isTouching = false;

topButton.addEventListener('click', () => {
  steinmann.style.top = parseFloat(steinmann.style.top) - 100 + 'px';
})

rightButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) + 100 + 'px';
})

leftButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) - 100 + 'px';
})


topButton.addEventListener('touchstart', () => {
  topButton.style.transform = 'scale(1.05) rotate(-90deg)';
  isTouching = true;
  a = - 0.000981;
})

topButton.addEventListener('touchend', () => {
  topButton.style.transform = 'scale(1.0) rotate(-90deg)';
  isTouching = false;
  a = 0.000981;
})

let lastTime = 0;
let lastVel = -0.5;
let lastVelX = 0.5;
let lastPosX = 0;
let lastPos = 0;
function loop(time) {
  const dt = time - lastTime;
  const v = lastVel + a*dt;
  const s = lastPos + v*dt;
  steinmann.style.top = s + 'px';
  
  if (!isTouching) {
    if (s > frameHeight - 400) {
      a = - 0.00981*v;
    } else {
      a = 0.000981;
    }
  }
  
  lastTime = time;
  lastVel = v;
  lastPos = s;
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);