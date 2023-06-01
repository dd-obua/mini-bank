'use strict';

const select = (element, selector) => element.querySelector(selector);

const h1 = select(document, 'h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);