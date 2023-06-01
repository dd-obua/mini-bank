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
console.log();

// Select and manipulate parents
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));
h1.closest('.header').style.background = 'var(--gradient-primary)';
h1.closest('h1').style.background = 'var(--gradient-secondary)';
console.log();

// Select siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.8)';
});
