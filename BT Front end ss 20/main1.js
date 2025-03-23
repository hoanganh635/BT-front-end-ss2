let number;
do {
  number = parseInt(prompt("mời bạn nhập vào 1 số nguyên dương bất kỳ từ 1 đến N"));
}
while(number <=0 || isNaN(number) || !Number.isInteger(number));
let sum = 0;
for ( let i = 0;i <= number;i ++){
    sum += i;
}
console.log( " tổng là: " + sum);