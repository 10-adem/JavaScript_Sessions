//---------ARROW FUNCTİON-----------

//*ORNEK SILINDIR HACMİ

// const r = +prompt("yaricap giriniz:");
// const h = +prompt("yukseklik girniz:");

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toPrecision()}`);

//*ORNEK: YAS HESAPLAMA

const tarih = Number(prompt("Dogum tarihini giriniz:"));
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// console.log("Yasiniz:" + yasHesapla(tarih));

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

console.log("YASINIZ:" + yasHesaplaKisa(tarih));
