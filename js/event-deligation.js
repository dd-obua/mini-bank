'use strict';

// Create selectors
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// Select elements
const btnScrollTo = select('.btn--scroll-to');
const section1 = select('#section--1');

// Scroll smoothly to section 1 on clicking learn more button
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Scroll smoothly to different sections on clicking nav links
selectAll('.nav__link').forEach(function (el, i) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    select(id).scrollIntoView({ behavior: 'smooth' });
  });
});
