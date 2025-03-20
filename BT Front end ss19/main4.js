let number = parseInt(prompt("mời bạn nhập vào một số nguyên"));
if (number%3 == 0 && number%5 == 0){
    console.log(number + " chia hết cho 3 và 5");
} else {
    console.log(number + " ko chia hết cho 3 và 5");
}