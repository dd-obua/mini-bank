'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  const horizontalOffset = window.pageXOffset;
  const verticalOffset = window.pageYOffset;

  // Scroll to section 1
  window.scrollTo(
    s1coords.left + horizontalOffset,
    s1coords.top + verticalOffset
  );
});
