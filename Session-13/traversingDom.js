//*TRAVERSING DOM

//* 1-Yukari Yonde traverse
//*------------------------

const list = document.querySelector(".list");
const ul = list.parentNode;

ul.style.border = "2px solid red";

const itemListSec = list.closest("section");
itemListSec.style.background = "grey";

//* Asagi Yonde Gitme
//*---------------------

const addItem = document.querySelector(".add-item");
console.log(addItem.children);
const h2 = addItem.children[0];
h2.style.color = "blue";

console.log(addItem.parentNode.parentNode.children[0]);

console.log(ul.firstChild);
console.log(ul.firstElementChild.innerText);

//*Yatay Yonde traverse

const myList = ul.children;
console.log(myList);
const javascript = myList[2];

const css = javascript.previousElementSibling;
console.log(css.innerText);
const react = javascript.nextSibling;
console.log(react.textContent);
