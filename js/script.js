'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  const horizontalOffset = window.pageXOffset;
  const verticalOffset = window.pageYOffset;

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Listen to and handle mouse enter events
const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('Get off me!');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
