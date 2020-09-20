// Нахожу в ДОМ список Ul по айди
const categoriesEl = document.querySelector('#categories');

// Вывоуж в консоль количество элементво ли в этом списке
console.log(`В списке ${categoriesEl.children.length} категории.`);

// Создаю массив лишек с классом айтем
const itemEl = categoriesEl.querySelectorAll('.item');

// Создаю функцию для того, что бы вывести у каждого элемента списка
// в консоль заголовок и количество элементов подсписка
const itemConsoleLog = item => {
  const itemHeader = item.querySelector('h2');
  const itemElements = item.querySelectorAll('ul li');

  console.log(`Категория: ${itemHeader.textContent}.
Количество элементнов: ${itemElements.length}`);
};

// пользуюсь функцией выше для каждого обьекта массива itemEl
console.log(itemEl.forEach(item => itemConsoleLog(item)));
