let number;
do {
    let text = prompt("mời bạn nhập vào một chuỗi số nguyên xem nó có đồi xừng hay không");
     number = Number(text);
}
while( number <= 0|| isNaN(number) || !Number.isInteger(number));

let numberfirst = number;
let numbersecond = 0;
while(number > 0){
    let box = number % 10 ;
    numbersecond = numbersecond * 10 + box ;
    number = Math.floor(number/10);
}

if (numbersecond ===  numberfirst){
    console.log(numbersecond + " là số đối xứng");
} else {
    console.log(numbersecond + " ko phải là số đối xứng");
}