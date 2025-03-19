let a = prompt("mời bạn nhập vào số năm làm việc");

let rank;
if (a < 1){
    rank = 1;
} else if ( a == 1 || a > 1 && a < 4){
    rank = 2;
} else if ( a == 4 || a > 4 && a< 6) {
    rank = 3;
} else {
    rank = 4;
}

switch (rank){
    case 1:
        console.log("mới vào nghề");
    break;
    case 2:
        console.log("Nhân viên có kinh nghiệm");
    break;
    case 3:
        console.log("Chuyên viên");
    break;
    case 4:
        console.log("Quản lý");
    break;
    default:
        console,log("không xác định");
}

