let number = parseInt(prompt("mời bạn nhập vào một số "));
let sqrt = Math.sqrt(number);
let result = Number.isInteger(sqrt) ? number +"  là số chính phương" : number + "  ko phải là số chính phương";
document.write(result);
alert(result);