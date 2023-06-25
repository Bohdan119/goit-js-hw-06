const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// ________________________________________________________________
// ________________________________________________________________
const ulElement = document.querySelector('#ingredients');
console.dir(ulElement);

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ulElement.append(li);
});

// const newLi = document.createElement('li');
// newLi = 
// newLi.classList.add('item');
// ulElement.appendChild(newLi);






// ---------------------------------------------------------
// ======== TRUE METHOD ============= NOT DELETED
// ---------------------------------------------------------
// ingredients.forEach((ingredient) => {
//   const itemEl = `<li class="item"> '${ingredient}' </li>`;
//   eatEl.insertAdjacentHTML('beforeend', itemEl);
// });
// ==========================================================

