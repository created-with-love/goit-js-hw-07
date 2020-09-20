// Нахожу все нужные элементы
const refs = {
  controlsBoxEl: document.querySelector('#controls'),
  mainBoxEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('#controls input'),
  buttonEl: document.querySelector('button[data-action="render"]'),
  destroyButtonEl: document.querySelector('button[data-action="destroy"]'),
};

let sizes = 20;

// фунция, принимающие число и создающая массив
// соответствующей длины.Каждый элемент превращается в div со случайным цветом и рахмером на 10 больше
function createBoxes(amount) {
  const newArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newBoxEl = document.createElement('div');

    newBoxEl.style.width = sizes + 10 + 'px';
    newBoxEl.style.height = sizes + 10 + 'px';
    sizes += 10;
    newBoxEl.style.backgroundColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

    newArray.push(newBoxEl);
  }

  return refs.mainBoxEl.append(...newArray);
}

refs.inputEl.addEventListener('input', onInputNumber);
function onInputNumber(event) {
  refs.inputEl.value = event.currentTarget.value;
}

function onCreateBtnClick(event) {
  createBoxes(refs.inputEl.value);
}
refs.buttonEl.addEventListener('click', onCreateBtnClick);

// Функция очищения содержимого
function clearMainBox(event) {
  refs.mainBoxEl.innerHTML = '';
}

refs.destroyButtonEl.addEventListener('click', clearMainBox);
