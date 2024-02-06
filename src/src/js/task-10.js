function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  
  const form = document.querySelector('#controls');
  const newBox = document.querySelector('#boxes');
  
  const inputEl = document.querySelector('[type="number"]');  
  // const creatButton = document.querySelector('button[data-creat]');
  const creatButton = form.children.item(1);
  const destroyButton = document.querySelector('button[data-destroy]');
  
  
function createBoxes(amount) {
  
  let sizeHeigth = 30;
  let sizeWeigth = 30;
  const newDivArray = [];
  for (let i = 0; i < amount; i += 1) {
    sizeHeigth += 30 * i;
    sizeWeigth += 30 * i;
    const creatDiv = document.createElement('div');
    creatDiv.style.backgroundColor = getRandomHexColor();
  }

}
  // evt.preventDefault();
  // const creatDiv = document.createElement('div');

  
  // creatDiv.classList.add('#boxes');
  // newBox.style.backgroundColor = getRandomHexColor;
  // creatDiv.style.width = '30';
  // creatDiv.style.height = '30';



  //   console.dir(creatDiv);
  //   console.log(inputEl.value);


function destroyBox(evt) {
  inputEl = '';
  }

creatButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBox);

