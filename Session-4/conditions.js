//IF-ELSE

console.log("*****CONDITIONS*****")

//?GİRİLEN SAYI POZİTİF NEGATİF VEYA SIFIR OLDUĞU

const sayi = prompt("Bir sayı giriniz:")

if(sayi > 0 ){
    console.log(`${sayi} pozitiftir.`);
}else if(sayi == 0){
    console.log(`${sayi} 0'a esittir.`);
}else{
    console.log(`${sayi} negatiftir`);
}