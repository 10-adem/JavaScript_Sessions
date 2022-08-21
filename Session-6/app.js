console.log("*****FUNC DECLARATION*****");
// yazdir();

// //!Fonksiyonun tanimlanmasi (declaration)
// function yazdir() {
//   console.log("merhaba");
// }

// yazdir(); //!invoke, call, cagirma
// yazdir();

//!Default Parametre
// function selamla(ad, soyad = "") {
//   console.log(`Merhaba ${ad} ${soyad}`);
// }

// selamla("Can", "Yilmaz");
// selamla("Canan", "Ozturk");
// selamla("Ayşe");

function yasHesapla(isim, dogumTarihi) {
  //   const sonuc = `${isim} in yası ${new Date().getFullYear() - dogumTarihi} dir`;
  //   return sonuc;
  return (sonuc = `${isim} in yası ${
    new Date().getFullYear() - dogumTarihi
  } dir`);
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980));

// function whichCentury(century) {
//   return (sonuc = Math.trunc(
//     century % 100 ? century / 100 + 1 : century / 100
//   ));
// }
// const century = whichCentury(+prompt("which year ? "));
// console.log(century);

//---------------tekcift-----------------

// function tekCift(sayi) {
//   return sayi % 2 ? ` ${sayi}"TEKTİR"` : ` ${sayi}"CİFTTİR"`;
// }

// console.log(tekCift(5));
// console.log(tekCift(2));

// function tekCift(sayi) {
//   return sayi % 2 ? ` ${sayi} "TEKTİR"` : ` ${sayi} "CİFTTİR"`;
// }
// // promp ile giriş
// const n = +prompt("Enter number");
// console.log(tekCift(n));

//-------------Function-Expression------------

// function tekCift(sayi) {
//   return sayi % 2 ? ` ${sayi}"TEKTİR"` : ` ${sayi}"CİFTTİR"`;
// }

const tekCift1 = function tekCift(sayi) {
  return sayi % 2 ? ` ${sayi}"TEKTİR"` : ` ${sayi}"CİFTTİR"`;
};
console.log(tekCift1(5));
console.log(tekCift1(2));
