let month = parseInt(prompt("mời bạn nhập vào 1 tháng trong năm"));
if (month > 13 || month == 13) {
    console.log("tháng không hợp lệ");
}else {
switch(month){
    case 2:
        console.log("tháng 2 có 28 hoặc 29 ngày năm nhuận");
    break;
    case 5:
        console.log("Tháng 5 có 31 ngày");
    break;
    case 9:
        console.log("tháng 9 có 30 ngày");
    break;
    default:
        console.log("tháng chưa thống kê :)))");
}
}