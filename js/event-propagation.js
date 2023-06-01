'use strict';

const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const btnScrollTo = select('.btn--scroll-to');
const section1 = select('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  const horizontalOffset = window.pageXOffset;
  const verticalOffset = window.pageYOffset;

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Listen to and handle mouse enter events
const h1 = select('h1');

const alertH1 = function () {
  alert('Get off me!');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Implement event propagation (esp. event bubbling)
const rdmInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const rdmCol = () =>
  `rgb(${rdmInt(0, 255)},${rdmInt(0, 255)},${rdmInt(0, 255)})`;

select('.nav__link').addEventListener('click', function (e) {
  this.style.background = rdmCol();
  console.log('link', e.target, e.currentTarget);
  console.log(this === e.currentTarget);
});

select('.nav__links').addEventListener('click', function (e) {
  this.style.background = rdmCol();
  console.log('container', e.target, e.currentTarget);
  console.log(this === e.currentTarget);

  e.stopPropagation();
});

select('.nav').addEventListener('click', function (e) {
  this.style.background = rdmCol();
  console.log('nav', e.target, e.currentTarget);
  console.log(this === e.currentTarget);
});
