console.log("*****ARRAYS*****");
//! 1.Yöntem(Array Literal)
const isimler = ["ahmet", "ismet", "can", "canan"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

//! 2.yöntem (object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanli bos bir Array olusturdu
const numbers1 = new Array(10);
console.log(numbers1);

//! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veriler1 = Array.of(10);
console.log(veriler1);

//* Diziden veri okuma - yazma (indisleme ile yapılır)

console.log(diller[1]);
console.log(isimler[isimler.length - 1]);

console.log(isimler.at(-1));

//! Diziye veri yazma

// const isimler = ["ahmet", "ismet", "can", "canan"];

isimler[1] = "Saffet";
console.log(isimler);

// isimler = ["Ali", "Veli"]; CONST OLDUĞU İÇİN HATA VERİR

//number dizisinin son elementinin değerini 1 arttirin
numbers[numbers.length - 1]++;
console.log(numbers);
