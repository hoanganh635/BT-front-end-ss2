let word = prompt("mời bạn nhập chuỗi ký tự");
let check = /\s/.test(word);
console.log("chuỗi " + word+ " có chứa khoảng trắng hay không :"+check);