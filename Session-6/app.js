console.log("*****FUNC DECLARATION*****");
// yazdir();

// //!Fonksiyonun tanimlanmasi (declaration)
// function yazdir() {
//   console.log("merhaba");
// }

// yazdir(); //!invoke, call, cagirma
// yazdir();

//!Default Parametre
function selamla(ad, soyad = "") {
  console.log(`Merhaba ${ad} ${soyad}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
selamla("Ayşe");
function yasHesapla(isim, dogumTarihi) {
  const sonuc = `${isim} in yası ${new Date().getFullYear() - dogumTarihi} dir`;
  return sonuc;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
