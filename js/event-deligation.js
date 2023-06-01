'use strict';

// Create selectors
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// Select elements
const btnScrollTo = select('.btn--scroll-to');
const section1 = select('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});
