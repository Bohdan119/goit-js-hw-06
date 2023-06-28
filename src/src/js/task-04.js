const buttonFirst = document.querySelector("[data-action = 'decrement']");
const span = document.querySelector('#value');
const buttonLast = document.querySelector("[data-action = 'increment']");


let counterValue = 0;
const decrement = (evt) => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
}

const increment = (evt) => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
}

buttonFirst.addEventListener('click', decrement);
buttonLast.addEventListener('click', increment);