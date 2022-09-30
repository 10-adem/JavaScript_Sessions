//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
const book1 = {
  title: "The Kramazov Brothers",
  author: "Dostoevski",
  year: 1880,
  getSummary: function () {
    return `${this.title} was written by ${this.author} is ${this.year}`;
  },
};
console.log(book1);
console.log(book1.hasOwnProperty("author")); //?içerisinde author mı diye bakar varsa true döner aksi false
//! Object nesnesinden miras yoluyla geldi!

const book2 = {
  title: "The Lily of the valley",
  author: "Honere de Balzac",
  year: 1888,
  getSummary: function () {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  },
};
console.log(book2);
console.log(book2.getSummary());
