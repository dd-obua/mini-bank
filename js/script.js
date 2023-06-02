'use strict';

// Create selectors
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// Select elements
const btnScrollTo = select('.btn--scroll-to');
const section1 = select('#section--1');
const navLinks = select('.nav__links');

// Scroll smoothly to section 1 on clicking learn more button
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Apply events delegation
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    select(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Build tabbed components
const tabContainer = select('.operations__tab-container');
const tabs = selectAll('.operations__tab');
const tabContents = selectAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
});
