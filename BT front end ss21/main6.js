let num;
let number;
while(true){
    num = prompt("mời bạn nhập 1 số nguyên bất kỳ");
    number = parseInt(num);

    if(!isNaN(number)){
        break;
    } else {
        alert("đây không phải là sô");
    }
}

for ( let i= 1;i <number+1;i ++){
    if(number%i==0){
        document.writeln(i);
    }
}


