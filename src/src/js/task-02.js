const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

liElements.forEach(element => {

  const liElement = document.createElement('li');
  liElement.textContent = element;
  liElement.classList.add('item');
});

const allLiElements = document.querySelector('.ingredients');
allLiElements.appendChild(liElements);