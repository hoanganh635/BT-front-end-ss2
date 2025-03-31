alert("mời bạn nhập vào mảng số nguyên gồm 10 phần tử");
let array = [];
for (let i = 0; i <10;i++){
    let element = Number(prompt("mời bạn nhập vào phần tử thứ "+ (i+1)));
    if (isNaN(element) || !Number.isInteger(element)){
      console.log("mời bạn nhập lại");
      i --;
    } else {
        array.push(element);
    }
}
if (array.length == 0){
    console.log("mảng rỗng");
}
function findMax (num){
    let max = array[0];
    let index = 0;
    for( let i = 1; i < array.length; i ++ ){
        if (array[i] > max){
            max = array[i];
            index = i;
        }
    }
    return {max , index}
}
let check = findMax();
console.log(check);
