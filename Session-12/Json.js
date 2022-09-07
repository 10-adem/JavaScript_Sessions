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
