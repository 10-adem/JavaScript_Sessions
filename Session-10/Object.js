console.log("******Object*****");

const arabalar = new Object();

arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = "2022";
arabalar.lpg = true;

console.log(arabalar);

//! Read
console.log(arabalar.lpg); //?.notation
console.log("MODEL:", arabalar["model"]); //? Sguare bracket notation

const key = "marka";
console.log(arabalar[key]);

//? Object Constructure
function Personel(id, ad, maas) {
  this.perId = id;
  this.perAd = "Ad";
  this.maas = 15000;
  console.log(this);
}

const kisi1 = new Personel("1234567890", "Mustafa", 15000);
console.log(kisi1);
