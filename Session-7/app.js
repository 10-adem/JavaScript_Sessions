//---------ARROW FUNCTİON-----------

//*ORNEK SILINDIR HACMİ

// const r = +prompt("yaricap giriniz:");
// const h = +prompt("yukseklik girniz:");

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toPrecision()}`);

//*ORNEK: YAS HESAPLAMA

// const tarih = Number(prompt("Dogum tarihini giriniz:"));
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// console.log("Yasiniz:" + yasHesapla(tarih));

// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// console.log("YASINIZ:" + yasHesaplaKisa(tarih));

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

// let stringResult = "1,1";
//f(n) = f(n-1) + f(n-2) matematiksel yöntemlerle çözümü

// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let toplam = 0;

//   for (let i = 2; i < n; i++) {
//     toplam = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = toplam;
//     stringResult += "," + fib2;
//   }
//   return fib2;
// };

// const n = Number(prompt("n terimini giriniz:"));
// if (n <= 0) {
//   console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
// } else {
//   console.log(`FIBO(${n}) = ${fibo(n)} `);
//   console.log(stringResult);
// }

//* ----------RECURSION-----------
//*f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = Number(prompt("n terimini giriniz:"));

console.log(`FIBO(${n}) = ${fibo(n)} `);
//   console.log(stringResult);
