const listEl = document.querySelectorAll('.item');
console.log('listEl:', listEl.length);

listEl.forEach(element => {
    const titleListEl = element.firstElementChild;
    console.log('Category:', titleListEl.textContent);

    const listSubEl = titleListEl.nextElementSibling;

    const listItemEl = listSubEl.children;
    console.log('Element:', listItemEl.length);
});