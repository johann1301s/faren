const steinmann = document.querySelector('#steinmann');
const topButton = document.querySelector('.top');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');


topButton.addEventListener('click', () => {
  steinmann.style.top = parseFloat(steinmann.style.top) - 10 + 'px';
})

rightButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) + 10 + 'px';
})

leftButton.addEventListener('click', () => {
  steinmann.style.left = parseFloat(steinmann.style.left) - 10 + 'px';
})

