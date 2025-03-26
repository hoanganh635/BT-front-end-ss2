let array = [];
let num = prompt("mời bạn nhập vào số lượng phần tử trong mảng array");
if ( num < 0 || isNaN(num)){
    console.log("không hợp lệ")
}else if (num == 0 ){
    console.log("không có ký tự số");
} else {
    for (let i = 0;i < num;i++){
     let element = prompt("mời bạn nhập vào phần tử thứ " + (i+1) );
     array.push(element);
    }
    console.log("mảng array của bạn sau khi nhập là : " + array);
}
for (let i = 0; i < array.length; i++){
    if(!isNaN(array[i])){
        console.log(array[i]);
    }
}  