const userName = document.querySelector('#name-input');
const user = document.getElementById('name-output');

userName.addEventListener('input', onInput);

function onInput(evt) {
    user.textContent = evt.target.value;
}
