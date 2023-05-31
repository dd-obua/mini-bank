'use strict';

// Select elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
