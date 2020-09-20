const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

// Решение №1
// Создаю  функцию, которая будет принимать 2 параметра - массив элементов и
// список Ul, куда будут создаваться и вставляться новые элементы
// const listItemCreate = (arrayItem, inputList) => {
// const newListEl = document.createElement('li');
// newListEl.textContent = arrayItem;
// inputList.appendChild(newListEl);
// };

// ingredients.forEach(item => listItemCreate(item, ingredientsList));

// Решение №2
// Отличаяется тем, что добавление элементов в DOM проводиться одной операцией для улучшения продуктивности
// const newArray = [];

//  Функция, которая для каждого элемента создает и пушит в пустой массив новый элемент li с текстом аргумента
// const listItemCreate2 = (ingridient, ArrayToPush) => {
//   const newListEl = document.createElement('li');
//   newListEl.textContent = ingridient;
//   ArrayToPush.push(newListEl);
// };

// ingredients.forEach(ingridient => listItemCreate2(ingridient, newArray));
// ingredientsList.append(...newArray);

// Решение 3
// const ingridientsArray = ingredients.map(ingridient => {
//   const newListEl = document.createElement('li');
//   newListEl.textContent = ingridient;
//   return newListEl;
// });

// ingredientsList.append(...ingridientsArray);

// Решение 4 = решение 3 завернутое в функцию. Самое идеальное
const makeIngridients = arrayWithIngridients => {
  return arrayWithIngridients.map(ingridient => {
    const newListEl = document.createElement('li');
    newListEl.textContent = ingridient;
    return newListEl;
  });
};

const ingridientsArray = makeIngridients(ingredients);
ingredientsList.append(...ingridientsArray);
