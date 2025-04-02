let check = true;
let dai = 5;
let rong = 3;
let bankinh = 2;
do{
    console.log("========================================MENU========================================");
    console.log("1. Tính diện tích hình tròn ");
    console.log("2. tính chu vi hình tròn");
    console.log("3. tính dien tich hinh chu nhat");
    console.log("4. tính chu vi hình chữ nhật");
    console.log("5. Thoát");
    console.log("====================================================================================");

    choice = Number(prompt("mời bạn nhập vào lựa chọn"));

    switch(choice){
        case 1:
            console.log("1. Tính diện tích hình tròn ");
            console.log("S hinh tron la:" + dientichtron(bankinh));
        break;

        case 2:
            console.log("2. tính chu vi hình tròn");
            console.log("chi vi hinh tron la :" + chuvitron(bankinh));

        break;

        case 3:
            console.log("3. tính dien tich hinh chu nhat");
            console.log("S hinh chu nhat la: " + dientichchunhat(dai,rong));
        break;

        case 4:
            console.log("4. tính chu vi hình chữ nhật");
            console.log("chu vi hinh chu nhat la: " +chuvichunhat(dai,rong));
        break;

        case 5:
            console.log("5. Thoát");
            alert("kết thúc chương trình");
            check = false;
        break;
    }
if(check == false)
    break;

}
while(true);

function dientichtron (r){
    let pi = 3.14;
    return pi*(r*r);
}

function chuvitron (r){
    let pi = 3.14;
    return 2*pi*r;
}

function dientichchunhat (a,b){
    return a*b;
}

function chuvichunhat (a,b){
    return 2*(a+b);
}