'use strict';

const select = (element, selector) => element.querySelector(selector);

const h1 = select(document, 'h1');

// Select and manipulate child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.firstChild);
console.log(h1.children);
