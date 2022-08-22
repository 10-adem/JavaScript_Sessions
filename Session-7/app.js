//---------ARROW FUNCTİON-----------

//*ORNEK SILINDIR HACMİ

const r = +prompt("yaricap giriniz:");
const h = +prompt("yukseklik girniz:");

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toPrecision()}`);
