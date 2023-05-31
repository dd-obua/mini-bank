'use strict';

// Select elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Create DOM elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Add elements to DOM
header.append(message);

// Delete DOM elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Apply styles
message.style.background = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 12 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Manipulate attributes
const logo = document.querySelector('.nav__logo');
console.log('alt:', logo.alt);
console.log('Absolute src:', logo.src);
console.log('Relative src:', logo.getAttribute('src'));
console.log('class:', logo.className);
console.log('id:', logo.id);
console.log('designer:', logo.designer);
console.log('designer:', logo.getAttribute('designer'));

logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');
console.log();

const link = document.querySelector('.nav__link');
console.log('Absolute href:', link.href);
console.log('Relative href:', link.getAttribute('href'));

// Data attributes
