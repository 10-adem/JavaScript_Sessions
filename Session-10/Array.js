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

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2023 - 1990, true, yaslar];
console.log(kisiler);

const yas55 = kisiler[5][2];
console.log(yas55);

kisiler[5][1]--;
console.log(kisiler);

console.log(yaslar);

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

/*pop()*/

const silinen = arabalar.pop();
console.log(arabalar, silinen);

const n = arabalar.push("Citroen");
console.log(arabalar, n);

const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

const audi = arabalar.shift();
console.log(arabalar, audi);

// 1.parametre eklenecek indis numarasi
// 2.parametre 0 ise araya ekleme, 1 ise üzerine yazma
// 3.parametre yeni eklenecek veri
arabalar.splice(1, 0, "passat");
console.log(arabalar);

arabalar.splice(1, 1, "Jaguar");
console.log(arabalar);

arabalar.reverse();
console.log(arabalar);
