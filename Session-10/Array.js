console.log("*****ARRAYS*****");
//! 1.Yöntem(Array Literal)
const isimler = ["ahmet", "ismet", "can", "canan"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

//! 2.yöntem (object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1, 11);
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

/*pop()*/ /*Son elemanı siler ve sildiği sildiği elemanı döndürür*/

const silinen = arabalar.pop();
console.log(arabalar, silinen);

/*Push dizinin sonuna elaman ekler ve son eleman sayısı döndürür */
const n = arabalar.push("Citroen");
console.log(arabalar, n);

/*undshift dizinin 0.indeksine eleman ekler ve dizinin son eleman sayısını döndürür */
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

/*undshift dizinin 0.indeksindeki elemanı siler ve dizinin son eleman sayısını döndürür */
const audi = arabalar.shift();
console.log(arabalar, audi);

// 1.parametre: eklenecek indis numarasi
// 2.parametre: 0 ise araya ekleme, 1 ise üzerine yazma
// 3.parametre yeni eklenecek veri
arabalar.splice(1, 0, "passat");
console.log(arabalar);

arabalar.splice(1, 1, "Jaguar", "Toyota");
console.log(arabalar);

/*Dizinin tamamını ters çevirmek istendiğinde kullanılır */
arabalar.reverse();
console.log(arabalar);

//ascıı koda göre sıraladığından sayıları sıralamak doğru sonuçlar vermez
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const array1 = [1, 2, 3, 4];
console.log(array1);
array1.fill(-1, 1);
console.log(array1);

console.log(array1.includes(4));
const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];
console.log(sayilar1.indexOf(2));
console.log(sayilar1.lastIndexOf(2));

console.log(sayilar1.join(" "));
console.log(sayilar1.join());
console.log(sayilar1);

console.log(sayilar1.toString());

const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];

const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar, arabalar1);

const yeniArabalar1 = arabalar1.slice(1, 3);
console.log(yeniArabalar1, arabalar1);

const yazilar = ["Bugun", "hava", "çok", "guzel"];
const numberArr = [1, 2, 3, 4];
const conbineArr = yazilar.concat(numberArr, ["aslinda", "cok", "sıcak"]);
console.log(conbineArr);

const yasArray = [18, 22, 20, 78, 81, 12];

const check = yasArray.every((yas) => yas >= 18);
check
  ? console.log("Dizidekilerin yasi 18 den buyuktur")
  : console.log("Dizide 18 yaş altı var");

const buyuk80 = yasArray.some((yas) => yas >= 80);
console.log(buyuk80);

const names = ["Ahmet", "Can", "Mustafa", "Merve", "Can"];
const indis = yasArray.find((yas) => yas >= 30);
console.log(indis);

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex);

// salaries
//   .filter((s) => s < 9000)
//   .map((s) => Math.trunc(s * 1.1))
//   .forEach((s) => console.log(s));

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
const sumOfSalaries = salaries.reduce((acc, val) => acc + val, 0);

const sumOfRaisedSalaries = salaries
  .filter((sal) => sal <= 9000)
  .map((sal) => Math.trunc(sal * 1.1))
  .reduce((acc, salary) => acc + salary, 0);

console.log("sumOfRaisedSalarie:", sumOfRaisedSalaries);
