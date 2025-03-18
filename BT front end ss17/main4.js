let number =parseFloat(prompt("mời bạn nhập vào một số bất kỳ :"));
if (isNaN(number) || number < 0){
    document.write("number không hợp lệ, mời bạn nhập lại");
}
else{
    let a = Math.sqrt(number);
    document.write("căn bậc 2 của" + number +" là " + a);
    
}

