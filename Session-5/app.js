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

for(let i = 1 ;i <= 10; i++){
    const rastgele = Math.round(Math.random()*10);
    console.log(rastgele);
}