//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

fetch("https://api.github.com/users")
  //   .then((res) => console.log(res))
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(() => console.log("Something went wrong"));

var v = 1;
var f1 = function () {
  console.log(v);
};
var f2 = function () {
  var v = 2;
  f1();
};
f2();
