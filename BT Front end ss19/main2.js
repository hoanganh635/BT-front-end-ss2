let a = prompt("mời bạn nhập vào 1 ký tự");
let isletter = /^[a-zA-Z]$/.test(a);
console.log(a+" có phải là ký tự không : "+isletter);