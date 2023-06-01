'use strict';

const select = (element, selector) => element.querySelector(selector);

const h1 = select(document, 'h1');

// Select and manipulate children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.firstChild);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
h1.firstElementChild.style.color = '#fff';
h1.lastElementChild.style.color = '#000';
