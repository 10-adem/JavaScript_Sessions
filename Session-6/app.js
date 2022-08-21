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

//! Cannot access 'tekCift1' before initialization
// console.log(tekCift1(9));

const tekCift1 = function tekCift(sayi) {
  return sayi % 2 ? ` ${sayi}"TEKTİR"` : ` ${sayi}"CİFTTİR"`;
};
console.log(tekCift1(5));
console.log(tekCift1(2));

//

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;

  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }

  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(`Girilen sayilerin en buyugu: ${buyukBul(n1, n2, n3)}`);
console.log(`Girilen sayilerin en buyugu: ${buyukBul(-8, -9, -1)}`);
console.log(`Girilen sayilerin en buyugu: ${buyukBul(-8, -9)}`);

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;

    case "-":
      sonuc = cıkar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = topla(s1, s2);
      break;
    default:
      break;
  }
  return sonuc;
};
// console.log(hesapla(3, 5, "+"));
// console.log(hesapla(4, 3, "/"));

console.log(hesapla(3, 5, "+"));
console.log(hesapla(4, 3, "/"));
