console.log("********SCOPE*********");

let sayi = 5; //! Global Scope
console.log(sayi);
const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1); //!22
};
fonks1();

console.log(sayi1++); //!22
console.log(sayi1); //! 23

//-----------------------
let sayi2 = 7; //*Global Scope
console.log(sayi2);

const fonks2 = () => {
  let sayi2 = 11;
  console.log(sayi2); //*Function-scope
};
fonks2();
console.log(sayi2++); //*7
