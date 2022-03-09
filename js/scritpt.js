const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const counter = document.querySelector('.counter-n');


function decreaseNumber() {
  if (counter.innerHTML > 0) {
    counter.innerHTML--
  }
}

function increaseNumber() {
  if (counter.innerHTML < 9) {
    counter.innerHTML++
  }
}

decrease.addEventListener('click', decreaseNumber);
increase.addEventListener('click', increaseNumber);