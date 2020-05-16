console.log(window);

//alert(1);

//single element
const form = console.log(document.getElementById('my-form'));
console.log(form);

//for selecting single elements use query selector
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//multiple element --- use querySelectorAll

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Sam';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

//events
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background = '#ccc';


});
