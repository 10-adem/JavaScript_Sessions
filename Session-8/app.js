console.log("*****STRING METHODS*****");

//!Klasik yöntem (String Literals) ile string tanimlanirsa bu string bir primitive degiskendir.
const str1 = "clarusway";

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
