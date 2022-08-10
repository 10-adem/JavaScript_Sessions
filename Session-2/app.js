console.log('App js Running')

// let a = 5;
// console.log(a);

// {
//     let a=4;
//     console.log(a);
// }
// a = 8;
// console.log(a);

// console.log(typeof 0);
// console.log(typeof 3.14);
// console.log(typeof 'hello');
// console.log(typeof (8 > 10));
// console.log((8 > 10));
// console.log(typeof ' ');
// console.log(typeof '');
// console.log(typeof 3,144);

// let b = prompt('Enter your name');

// console.log(b, typeof b)

// console.log(typeof typeof 42)

// let age;

// console.log(age);

// console.log(myAge);

// var myAge = 40;

// console.log('Hello');

// let l =null

// console.log(typeof l)

// let x;
// let q;

// do {
//     x = prompt('Enter a number: ');
//     q = prompt('Enter your number: ');
// }while ((isNaN(x)),(isNaN(q)));

// console.log('x*q =', x*q);
// console.log(x*x);
// console.log(x, )

// console.log('11' > 12)
// console.log('12' > 12)
// console.log('12' == 12)
// console.log('12' === 12)
// console.log(12 === 12)

// == Boolean mantıksal olarak bunlar farklı tipte olsa da aynı değer de diyerek karşılaştırdığında true veriyor.
// === Boolean ise tiplerine de bakarak karşılaştıdığı için false veya true veriyor.

// let xx = 1234565789012345

// let y = 12345657890123457777777

// let z = 0.127464746474748

// let zz = 0.12657484903039948585798989

// console.log(xx)

// console.log(y)

// console.log(z)

// console.log(zz)

// let g= 0.1 + 0.2
// console.log(g.toFixed(2));
// console.log(typeof(g.toFixed(2)));

// console.log(g.toFixed(2));

// console.log(typeof(+g.toFixed(2)));

// let h = 1_000_000_000
// console.log(h)

// let hH = 10_000_000_000
// console.log(hH)

// let i = 'This is a\' string';
// let j = "This is a string";
// let k = `This is a string`;

// console.log(i, typeof i)
// console.log(j, typeof j)
// console.log(k, typeof k)

// let userName = 'Adam';

// console.log(userName,length)

// console.log('Merhaba ', userName )

// console.log(`2 + 3 = ${userName}`)

// console.log(`2 + 3 = ${'2'+'3'}`)

// console.log(`3`-2)

// let t = Boolean("false");
//  console.log("t : " + t);

//  let m = ''

//  let n = ``

//  let p = 0

//  console.log(Boolean(m))
//  console.log(Boolean(n))
//  console.log(Boolean(p))
//  console.log(Boolean(3 > 5))
//  console.log(Boolean(3 > 2))
//  console.log(Boolean(3 == 2))
//  console.log(Boolean(3 == 3))
//  console.log(Boolean(3 == `3`))
//  console.log(Boolean(3 === `3`))
//  console.log(Boolean(3 === 3))

const myCar ={
    make : 'ford',
    model : 'Mustang',
    year: 1965,
    color: 'Black'
}

console.log(myCar)

// var myCar.make= 'merc'
myCar.color = 'green'
console.log(myCar)

myCar.model = 'frd'
console.log(myCar)

myCar.sunRoof = false;
console.log(myCar)

myCar.age = function(current){
    console.log(current - this.year)
}
console.log(myCar)

myCar.age(2022)

