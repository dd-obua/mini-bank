'use strict';

// Create selectors
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// Select elements
const btnScrollTo = select('.btn--scroll-to');
const section1 = select('#section--1');
const navLinks = select('.nav__links');
const nav = select('.nav');
const header = select('.header');
const allSections = selectAll('.section');
const imgTargets = selectAll('img[data-src]');

// Scroll smoothly to section 1 on clicking learn more button
btnScrollTo.addEventListener('click', function (event) {
  event.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Apply events delegation
navLinks.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    select(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Build tabbed components
const tabContainer = select('.operations__tab-container');
const tabs = selectAll('.operations__tab');
const tabContents = selectAll('.operations__content');

tabContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContents.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  select(`.operations__content--${clicked.dataset.tab}`).classList.add(
    'operations__content--active'
  );
});

// Fade navigation components
const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Create sticky navigation bar
const navHeight = nav.getBoundingClientRect().height;

const createFixedNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(createFixedNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  const currentSection = entry.target;
  if (!entry.isIntersecting) return;
  currentSection.classList.remove('section--hidden');
  sectionObserver.unobserve(currentSection);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Implement lazy loading images
const loadImage = function (entries, imgObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    return entry.target.classList.remove('lazy-img');
  });

  imgObserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Implement sliding functionality
const slides = selectAll('.slide');
const btnLeft = select('.slider__btn--left');
const btnRight = select('.slider__btn--right');

let curSlideNo = 0;
const lastSlideNo = slides.length - 1;

slides.forEach(
  (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
);

const goToSlide = function (slideNo) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - curSlideNo)}%)`)
  );
};

btnRight.addEventListener('click', function () {
  if (curSlideNo === lastSlideNo) curSlideNo = 0;
  else curSlideNo++;

  goToSlide(curSlideNo);
});
