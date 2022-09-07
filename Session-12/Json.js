console.log("*****JSON*****");

const team = [
  {
    name: "Josh",
    surname: "Adams",
    job: "developer",
    age: "30",
  },
  {
    name: "Mary",
    surname: "Bary",
    job: "tester",
    age: "22",
  },
  {
    name: "Hazer",
    surname: "Nut",
    job: "developer",
    age: "20",
  },
]; //* JSON

console.log(team);
console.log(team[2]);

team.forEach((person) => console.log(person.job));

const ages = team.map((p) => p.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.
