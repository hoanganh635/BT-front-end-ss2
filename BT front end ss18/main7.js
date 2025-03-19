let a = parseFloat(prompt("mời bạn nhập số a"));
let b = parseFloat(prompt("mời bạn nhập số b"));
let pheptinh = prompt("mời bạn nhập phép tính");
let result;
switch(pheptinh){
    case "+":
        result = a + b;
        console.log(`${a}+${b}=${result}`);
    break;
    case "-":
        result = a - b;
        console.log(`${a}-${b}=${result}`);
    break;
    case "*":
        result = a*b;
        console.log(`${a}*${b}=${result}`);
    break;
    case "/":
        if (b !== 0){
            result = a / b;
            console.log(`${a}/${b}=${result}`);
        } else {
            console.log("phép tính không thể thực hiện");
        }
    break;       
    default:
        console.log("không xác  định");        



}
