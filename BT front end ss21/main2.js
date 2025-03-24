let even = 0;
let odd = 0;
for (let i= 0; i < 5; i ++){
    let num = prompt("mời bạn nhập vào số nguyên thứ "+ (i+1));
    let number = parseInt(num);
    
    if(isNaN(number)){
        alert("mời bạn nhập lại ");
        i --;
        continue;
    }
    if(number%2==0){
        even += 1;

    } else {
        odd += 1;
    }

}
document.writeln("số lượng số chẵn là "+ even +"<br>");

document.writeln("số lượng số lẻ là "+ odd);
