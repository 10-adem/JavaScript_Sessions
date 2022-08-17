console.log("*****FOR*****");

// const n = +prompt("Enter n:")
// let toplam = 0;
// for(let i = 1; i <= n; i++){
//     // toplam = toplam + i;
//     toplam += i;
//     console.log(toplam, i);
// }
// console.log("SONUC", toplam);

// 0-100 arasında 10 tane rastgele tam sayı üreten 10 tane sayı
//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

// for(let i = 1 ;i <= 10; i++){
//     const rastgele = Math.round(Math.random()*10);
//     console.log(rastgele);
// }

//Asal Sayı
//Bayrak Modeliyle Çözüldü

// const number = +prompt("Enter a number")
// let asal = true;

// if( number <= 1 ){
//     alert("Enter a number greater than 1");
// }else{
//     for(let i = 2 ; i< number ; i++){
//         if (number % i === 0){
//             asal = false;
//             break;
//         } 
//     }
//     const sonuc = asal === true ? "Asaldır" : "Asal Degıldır";
//     console.log(`${number} ${sonuc}`)
// }

//WHILE

let number = +prompt("Enter a number")

while( number < 0 || number > 100){
    console.log("number 0-100 should be between");
    number = +prompt("Please enter a number")
}
console.log("You entered number:", number);