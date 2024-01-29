
const range = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

range.addEventListener("input", function(event) {
    span.style.fontSize = this.value + "px";
});