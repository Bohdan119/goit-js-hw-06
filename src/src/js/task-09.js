const colorBody = document.querySelector("body");
const textSpan = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)
    .padStart(6, 0)
    }`;
  }
function handleChangeBackground(evt) {
  const color = getRandomHexColor();
  
    colorBody.style.background = color;

  textSpan.textContent = color;
  console.log(evt);
  }
changeButton.addEventListener("click", handleChangeBackground); 
  


// -------СПОСІБ_2--------- 

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function changeBackgroundColor() {
//   const color = getRandomHexColor();
//   document.body.style.background = color;
//   document.querySelector('.color').textContent = color;
// }
// const button = document.querySelector('.change-color');
// button.addEventListener('click', changeBackgroundColor);
