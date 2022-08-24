console.log("*****STRING METHODS*****");

//!Klasik yöntem (String Literals) ile string tanimlanirsa bu string bir primitive degiskendir.
let str1 = "clarusway";

const str2 = "Hello";
const str3 = "Full Stack";

console.log(str1, typeof str1);

//! Non-primitive String tanımlama
const str4 = new String("Hello FS");
console.log(typeof str4);

const sayi = 5;
const str5 = str1 + str2 + str3; // Concatination
console.log(str5);

//* concat() - imutable
console.log(str1.concat(str2));
console.log(str1, str2);
str1 = str1.concat(str3);
console.log(str1);

//* toUpperCase(), toLowerCase()

const myName = "Adam Wolf";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let yourName = "ismet";
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

//* 2 string esit veya degil diye kiyaslayarak sonucu
//* donduren fonksiyonu yaziniz.

// const esitMi = (str1, str2) => {
//   return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
//     ? `${str1} ile ${str2} Eşittir.`
//     : `${str1} ile ${str2} Eşit Değildir.`;
// };

const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Eşittir.`
    : `${str1} ile ${str2} Eşit Değildir.`;

console.log(esitMi("MerHaba", "MERHABA"));
console.log("Hello", "Hell");

//*LocaleCompare();

const a = "reserve";
const b = "RESERVE";

console.log(a.localeCompare(b, "en", { sensitiy: "base" }));

//? 'BASE:'
//? 'ACCENT:'
//? 'CASE:'

//*-------------------
//* charAt()
//*-------------------
const str6 = "Full Stack Path";
console.log(str6.charAt(5)); //* S
console.log(str6.charAt(4)); //* ""
console.log(str6.charAt()); //* F (ilk indistekini dondurur)
console.log(str6.charAt(14)); //* h

//! Lenght bir property (objenin degiskenidir) dir ve strign' in
//! karakter sayisini tutar.
console.log(str6.length); //*27

//*String son harfini ogrenmek istersek
console.log(str6.charAt(str6.length - 1)); //* -26 => 27 eleman

//*-----------------------------------
//* includes() - case sensitive
//*-----------------------------------

const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true
console.log(word.includes("That")); //? False
console.log(word.includes("That")); //? False
console.log(word.includes("")); //? False

//* -----------------------------------------
//* indexOf(), lastIndexOf(), case se

//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------

const buyukHarf = /[A-Z]/;
const nokta = /[.]/;
const virgul = /[,]/;
console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //?  18
console.log(word.search(nokta)); //? -1

//*----------------------------------
//* startsWith ,endsWith - case sensitive

let word2 = "Sen gulunce guller acar gul pembe!";

console.log(word2.startsWith("Sen")); //?true
console.log(word2.startsWith("guluce")); //? false
console.log(word2.startsWith("gulunce", 4)); //? true
console.log(word2.endsWith("1")); //? true
console.log(word2.endsWith("acar", 23));

//*replace (searchFor, replaceWith) --immutable

let oku = "Oku Baban gibi, saf olma, saf olma";

console.log(oku.replace("saf olma", "akilli ol"));
oku = oku.replace("saf olma", "basarili ol");
console.log(oku);

oku = oku.replace(/BASARILI/i, "Zengin");
oku = oku.replace(/saf olma/gi, "Zengin ");
console.log(oku);

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------
// let degistir = "daglar daglar yol ver gecem..";
// degisti = degistir.replaceALL("daglar", "Daglar");
// console.log(degisti);

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));

const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33); //*devamını al
console.log(sliced, typeof sliced);

console.log(veysel.slice(17, 30));
console.log(veysel.substring(17, 30));
console.log(veysel.substring(-10));

const tarkan = "Gel gunduzle gece olalim";
const spited = tarkan.split("I");
console.log(splited, typeof splited);
