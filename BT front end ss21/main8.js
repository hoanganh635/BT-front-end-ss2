let i;
let donvi;
let chuc;
let tram;
let sum = 0;
for ( i = 100;i <= 999;i++){
    tram = Math.floor(i/100);
    chuc = Math.floor((i%100)/10);
    donvi = i%10;

sum = Math.pow(tram,3) + Math.pow(chuc,3) + Math.pow(donvi,3);
if (sum === i ){
    document.writeln(i +" là số armstrong");
}
} 