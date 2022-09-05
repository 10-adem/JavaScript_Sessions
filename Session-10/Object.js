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

const x = "marka";
console.log(arabalar[x]);

//? Object Constructure
function Personel(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
  //   console.log(this);
}

const kisi1 = new Personel("1234567890", "Mustafa", 15000);
const kisi2 = new Personel("1334567890", "Canan", 25000);
console.log(kisi1.ad);
console.log(kisi2.maas);
console.log(kisi2["id"]);

//? Global alanda window objesini gösterir.
console.log(this);
// window.alert("Merhaba");

//* Object literal (En cok tercih edilen yontem)

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Python", "Go"],
  salary: 140000,
};
console.log(worker);

console.log("job:", worker.job);
console.log("Lang:", worker["languages"]);

console.log(worker.languages[2]);

worker["languages"].forEach((l) => console.log(l));
worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

//? Object Copy
const person = worker; //! shallow (sığ) copying
console.log("PERSON:", person);

//Object.create(), Object.assign(), spread (....), slice()

person.dob = "2000";
console.log("PERSON:", person);

//! Deep Copy

let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
console.log("PERSON:", person);

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//! Object Metotlari

const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: 140000,
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
};

console.log(personal.calculateAge());

// Array.filter((x) => console.log(x));

//* Object Iteratıon

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: 140000,
    drivingLicense: true,
  },

  person2: {
    name: "John",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: 150000,
    drivingLicense: true,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "1990",
    job: "developer",
    salary: 160000,
    drivingLicense: true,
  },
};
console.log(people); //!{person1: {…}, person2: {…}}
console.log("salary ofp2:", people.person2.salary);

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

for (let key of Object.keys(people)) {
  console.log(key);
}

//? ARRAY METOTLARI İLE
Object.keys(people).forEach((p) => console.log(p));

Object.values(people).forEach((p) => console.log(p.surname));

// job = devoloper olanlarin dob degerlerini yazdiriniz.

Object.values(people)
  .filter((p) => p.job === "devoloper")
  .forEach((p) => console.log(p.dob));
