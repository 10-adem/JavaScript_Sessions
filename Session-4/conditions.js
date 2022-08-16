//IF-ELSE

console.log("*****CONDITIONS*****")

//?GİRİLEN SAYI POZİTİF NEGATİF VEYA SIFIR OLDUĞU

const sayi = Number(prompt("Bir sayı giriniz:"));
// const sayi = Number(prompt("Bir sayı giriniz:"));
if(sayi > 0 ){
    console.log(`${sayi} pozitiftir.`);
}else if(sayi == 0){
    console.log(`${sayi} 0'a esittir.`);
}else{
    console.log(`${sayi} negatiftir`);
}

console.log(sayi, typeof sayi);//default olarak her girilen veri HTML tasarımı nedeniyle string olarak kabul edilir. promp önüne number veya + konularak sayı olarak nitelendirilir.