console.log("*****JSON*****");

const team = [
  {
    name: "Josh",
    surname: "Adams",
    job: "developer",
    age: 30,
  },
  {
    name: "Mary",
    surname: "Bary",
    job: "tester",
    age: 22,
  },
  {
    name: "Hazer",
    surname: "Nut",
    job: "developer",
    age: 20,
  },
]; //* JSON

console.log(team);
console.log(team[2]);

team.forEach((person) => console.log(person.job));

const ages = team.map((p) => p.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }));

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

console.log(teamFullName);

//*Yasi 22 den küçük olanların adlarini

team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

const avgAges =
  team.reduce((sum, person) => (sum += person.age), 0) / team.length;
console.log(avgAges);

//? DESTRUCTURING(ARRAY)

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

// const { name, colors, model, engine } = car;
// console.log(name, model, engine, colors);

// const { car1, car2 } = car;
// console.log(car1);

//* function
const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone",
    price: 30000,
  };
};

console.log(getInfo());
const { productName, price } = getInfo();

console.log("Product Name:", productName);
console.log("Product Price:", price);

const names = ["Ahmet", "Mehmet", "İsmet", "Saffer"];

const mehmet = names[1]; //* indexing

const [p1, p2, p4] = names;
console.log(p1, p2, p4); //* names deki index sayısı ile eşdeğer olmalıdır. ve eşdeğer sayısını getirir.

//*REST(...) Array lerde object lerde geri kalanları alır. Sıra önemli olmakla beraber ayrılan alınan elemanlar sıralı olmalı ve rest operatörleri sonda olmalıdır.

//!1. Kullanım
const autos = ["reno", "anadol", "mercedes", "ferrari", "bmw"];

const [reno, anadol, ...restAutos] = autos;
console.log(reno, anadol);
console.log(restAutos);

const personel = {
  name: "Josh",
  surname: "Adams",
  job: "developer",
  age: 30,
};
const { name, job, ...ageSurname } = personel;
console.log(ageSurname);

//* SPRED (...)
