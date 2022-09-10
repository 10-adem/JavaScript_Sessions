console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------
const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");

button.style.background = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.border = "none";

button.style.borderRadius = "10px"; //*borderRadius şeklinde CamelCase olarak verilir ve de "" işareti içine yazılır.

button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName("li");
console.log(list); //? HTML Collection
list[2].style.color = "red";

const elementThree = list.item(3);
elementThree.style.color = "blue";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask";

console.log(list[1].textContent);
console.log(list[1].innerText);

//? HTML kodlarini calitirir.(Güvenlik acisindan problemlidir)
list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------
const myList = document.getElementsByClassName("list");
console.log(myList);
console.log(myList[0].innerText);

//?Dizi metıtlari dogrudan kullanilamaz.

//?Array.from()
const myListArray = Array.from(myList);
myListArray.forEach((item) => console.log(item.innerText));

//?spread
[...myList].forEach((item) => console.log(item.innerText));
[...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
const myLi = document.querySelector("li");
console.log(myLi.innerText);
myLi.style.color = "yellowgreen";

//? class seçme
const itemList = document.querySelector(".item-list");
itemList.style.background = "grey";

//? id seçme

const input = document.querySelector("#input");
console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";

const myBtn = document.querySelector("input[type ='button']");
console.log(myBtn);

const lists = document.querySelectorAll("ul li");
console.log(lists); //? nodelist

lists.forEach((li) => console.log(li.innerText));
console.log(document.querySelectorAll("section ul li:nth-child(3)").innerText);
