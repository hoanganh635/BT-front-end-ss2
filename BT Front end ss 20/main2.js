let number;
do {
    let input = prompt("Mời bạn nhập số nguyên dương chia hết cho 5 (ví dụ: 5, 10, 15...)");
    number = Number(input); 

} while (number <= 0 || isNaN(number) || !Number.isInteger(number) || number % 5 !== 0);


for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}




