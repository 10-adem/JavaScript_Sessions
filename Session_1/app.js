console.log('app.js is running');
// alert('Hello World');
// alert('Hello World');
// alert('Hello World');
// window.alert('cw')

// let firstname = prompt('Enter your name:');
// alert(firstName + ' ' + firstName)

// let sonuc = confirm('are you legal?');
// console.log(sonuc);

// var myNumber1 = 15;
// console.log(myNumber1);

/*
var ile değer atandığında aynı nesneye tekrar 
başka değer atanırsa var o nesnenin yeni bellek 
adresi atanmasına izin verir.
*/

// var myNumber1 = 22 ;
// console.log(myNumber1);

// var myNumber1 = 11;
// console.log(myNumber1);
// let v1 = 55;
// console.log(v1);



// var myNumber1 = 11;
// console.log(myNumber1);
// let v1 = 88;
// console.log(v2);

// const

const student = {
    name: 'Adem',
    age: 30,
};

console.log(student);

const otherstudent = student;

otherstudent.name = 'Dan';
console.log(student);
console.log(otherstudent);