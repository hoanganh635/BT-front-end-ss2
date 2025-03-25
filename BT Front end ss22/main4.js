let num = prompt("mời bạn nhập 1 dãy số bất kỳ");
let array = num.split("");
let check = 1;

for (let i = 0 ;i < array.length; i++){
    if (isNaN(array[i])){
        check = 0;
        console.log("chuỗi của bạn nhập sai ký tự "+ array[i] + "\n mời bạn nhập lại");
    }
}

if (check == 1){
    let max = array[0];
    for ( let i = 1; i < array.length;i++){
        if (array[i] > max){
            max = array[i];
        }
    }    

console.log("giá trị lớn nhất là "+ max);
}