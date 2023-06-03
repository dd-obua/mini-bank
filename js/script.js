'use strict';

// Create selectors
const select = (el, sel) => el.querySelector(sel);
const selectAll = (el, sel) => el.querySelectorAll(sel);

// Select elements
const btnScrollTo = select(document, '.btn--scroll-to');
const section1 = select(document, '#section--1');
const navLinks = select(document, '.nav__links');
const nav = select(document, '.nav');

// Scroll smoothly to section 1 on clicking learn more button
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Apply events delegation
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    select(document, id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Build tabbed components
const tabContainer = select(document, '.operations__tab-container');
const tabs = selectAll(document, '.operations__tab');
const tabContents = selectAll(document, '.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContents.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );
  select(
    document,
    `.operations__content--${clicked.dataset.tab}`
  ).classList.add('operations__content--active');
});

// Fade navigation components
