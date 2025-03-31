let array = [];
alert("mời bạn nhập vào mảng 10 phần tử");
for (let i = 0; i < 10; i ++){
    let element = Number(prompt("mời bạn nhập vào phần tử thứ " +(i +1) ));
    if( isNaN(element) || !Number.isInteger(element)){
        console.log("ko hợp lệ, mời nhập lại");
        i --;
    } 
    else {
        array.push(element);
    }
}
if (array.length === 0){
    console.log("mảng ko có phần tử nào");
}
function filNumber (num){
    return num >= 10;
}
let Text = array.filter(filNumber);
console.log(Text);