let date1 = prompt("mời bạn nhập vào ngày thứ nhất(YY-MM-DD)");
let date2 = prompt("mời bạn nhập vào ngày thứ hai(YY-MM-DD)");

let day1 = new Date(date1);
let day2 = new Date(date2);
let daytime = ((day2 - day1)/ (24*60*60*1000));
console.log("số ngày lệch là:" + daytime);
alert(daytime);
document.write("độ lệch ngày là :" + daytime);