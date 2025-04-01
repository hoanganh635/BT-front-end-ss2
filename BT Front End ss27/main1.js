let choice = null;
let a = Number(prompt("mời bạn nhập số thứ 1"));
let b = Number(prompt("mời bạn nhập số thứ 2"));
let check = true;
do{
    console.log("========================================MENU========================================");
    console.log("1. Cộng hai số");
    console.log("2. trừ hai số");
    console.log("3. Nhân hai số");
    console.log("4. Chia hai số");
    console.log("5. Thoát");
    console.log("====================================================================================");
    
    choice = Number(prompt("mời bạn nhập lựa chọn"));
    switch(choice){
        case 1:
            console.log("1. Cộng hai số");
            
            console.log(sum(a,b));
        break;

        case 2:
            console.log("2. trừ hai số");
            console.log(hieu(a,b));
        break;

        case 3:
            console.log("3. Nhân hai số");
            console.log(tich(a,b));
        break;

        case 4:
            console.log("4. Chia hai số");
            console.log(thuong(a,b));
        break;
         
        case 5:
            console.log("5. Thoát");
            check = false;
        break;        
    }
    if (check == false){
        alert("chương trình thoát");
        break;
    }
}
while(true);

function sum (num1,num2){
    return num1 + num2;
};
function hieu(num1,num2){
    return num1 - num2;  
};
function tich (num1,num2){
    return num1 * num2;
};
function thuong(num1,num2){
    return num1 / num2;
};