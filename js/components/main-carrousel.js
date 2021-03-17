const buttonRight = document.querySelector('.button-arrow._right');
const buttonLeft = document.querySelector('.button-arrow._left');
const elements = document.querySelector('.elements');
let pixels = 0;

buttonRight.addEventListener('click', function () {
  pixels += 100;
  elements.style = `transform: translateX(${pixels}px);`;
});

buttonLeft.addEventListener('click', function () {
  pixels -= 100;
  elements.style = `transform: translateX(${pixels}px);`;
});