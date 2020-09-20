const valueEl = document.querySelector('#value');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');

const increase = () => {
  valueEl.textContent = Number(valueEl.textContent) + 1;
};

const decrease = () => {
  valueEl.textContent = Number(valueEl.textContent) - 1;
};

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
