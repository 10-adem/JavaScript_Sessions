//IF-ELSE

console.log("*****CONDITIONS*****")

//?GİRİLEN SAYI POZİTİF NEGATİF VEYA SIFIR OLDUĞU

// const sayi = Number(prompt("Bir sayı giriniz:"));
// // const sayi = Number(prompt("Bir sayı giriniz:"));
// if(sayi > 0 ){
//     console.log(`${sayi} pozitiftir.`);
// }else if(sayi == 0){
//     console.log(`${sayi} 0'a esittir.`);
// }else{
//     console.log(`${sayi} negatiftir`);
// }

// console.log(sayi, typeof sayi);//default olarak her girilen veri HTML tasarımı nedeniyle string olarak kabul edilir. promp önüne number veya + konularak sayı olarak nitelendirilir.

//? console dan 3 tane tamsayi alarak en büyüğünü bulan

const n1 = +prompt("sayi1:");
const n2 = +prompt("sayi2:");
const n3 = +prompt("sayi3:");

// if(n1>=n2 && n1>=n3){
//     console.log(`${n1} en buyuk sayidir.`);
// }else if(n2>=n1 && n2>=n3){
//     console.log(`${n2} en buyuk sayidir.`);
// }else if(n3>=n1 && n3>=n2){
//     console.log(`${n3} en buyuk sayidir.`);
// }

//2.Yöntem
let enBuyuk = n1;
if (n2 >= enBuyuk) {
    enBuyuk = n2;
} 
if (n3 >= enBuyuk) {
    enBuyuk = n3;
}
console.log(`${enBuyuk} en buyuktur`);

const not = +prompt("Notunuzu giriniz:")
let sonuc = not >= 50 ? "Gecti"  : "Kaldi";
console.log(sonuc);

const not = +prompt("Notunuzu giriniz:")
console.log(not >= 50 ? "Gecti"  : "Kaldi");
