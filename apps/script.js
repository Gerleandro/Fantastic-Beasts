const animals = document.getElementById('animals');
console.log(animals);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

const liFast = document.querySelector('li');
console.log(liFast);

const ulFast = document.querySelector('ul');
console.log(ulFast);

const internalLink = document.querySelector('[href^="#"]');
console.log(internalLink);

const animalsImg = document.querySelectorAll('.animals img');
console.log(animalsImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);