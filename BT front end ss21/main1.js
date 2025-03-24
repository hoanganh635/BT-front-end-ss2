let sum = 0;
for (let i= 0;i < 5; i ++){
     let num = prompt("mời bạn nhập vào số nguyên thứ "+ (i+1));
     let number = parseInt(num);

     if(isNaN(number)){
        alert("số không hợp lệ , mời bạn nhập lại");
        i --;
        continue;
     }
     if(number%2 !== 0){
        sum += number;
     }
}
document.writeln("tổng các số lẻ là: "+ sum );