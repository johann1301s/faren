const container = document.querySelector('#container');
const steinmann = document.querySelector('#steinmann');
const topButton = document.querySelector('.top');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');
const frameHeight = container.offsetHeight;
const frameWidth = container.offsetWidth;
let a = 0.000981;
let ax = 0;
let isTouching = false;

topButton.addEventListener('touchstart', () => {
  topButton.style.transform = 'scale(1.05) rotate(-90deg)';
  isTouching = true;
  a = - 0.000981;
});

topButton.addEventListener('touchend', () => {
  topButton.style.transform = 'scale(1.0) rotate(-90deg)';
  isTouching = false;
  a = 0.000981;
});

leftButton.addEventListener('touchstart', () => {
  leftButton.style.transform = 'scale(1.05) rotate(-180deg)';
  isTouching = true;
  ax = - 0.000981;
});

leftButton.addEventListener('touchend', () => {
  leftButton.style.transform = 'scale(1.0) rotate(-180deg)';
  isTouching = false;
  ax = 0;
});

rightButton.addEventListener('touchstart', () => {
  rightButton.style.transform = 'scale(1.05)';
  isTouching = true;
  ax = 0.000981;
});

rightButton.addEventListener('touchend', () => {
  rightButton.style.transform = 'scale(1.0)';
  isTouching = false;
  ax = 0;
});

let lastTime = 0;
let lastVel = -0.5;
let lastVelX = 0;
let lastPosX = 0;
let lastPos = 0;
function loop(time) {
  const dt = time - lastTime;
  const v = lastVel + a*dt;
  const vx = lastVelX + ax*dt;
  const s = lastPos + v*dt;
  const sx = lastPosX + vx*dt;
  
  steinmann.style.left = sx + 'px';
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
  lastVelX = vx;
  lastPosX = sx;
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);