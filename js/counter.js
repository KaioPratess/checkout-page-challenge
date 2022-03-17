export default function counter() {
const decrease1 = document.querySelector('.decrease_1');
const increase1 = document.querySelector('.increase_1');
const counter1 = document.querySelector('.counter_1');
const decrease2 = document.querySelector('.decrease_2');
const increase2 = document.querySelector('.increase_2');
const counter2 = document.querySelector('.counter_2');


function decreaseNumber() {
  if (counter1.innerHTML > 0) {
    counter1.innerHTML--
  }
}

function decreaseNumber2() {
  if (counter2.innerHTML > 0) {
    counter2.innerHTML--
  }
}

function increaseNumber() {
  if (counter1.innerHTML < 9) {
    counter1.innerHTML++
  }
}

function increaseNumber2() {
  if (counter2.innerHTML < 9) {
    counter2.innerHTML++
  }
}

decrease1.addEventListener('click', decreaseNumber);
increase1.addEventListener('click', increaseNumber);

decrease2.addEventListener('click', decreaseNumber2);
increase2.addEventListener('click', increaseNumber2);
}