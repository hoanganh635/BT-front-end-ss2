let array = [1,2,2,3,3,3,4,5,6,7];
let num = prompt("mời bạn nhập 1 số bất kỳ trong chuỗi");
let check = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] != num){
        console.log("số "+num+" không tồn tại trong chuỗi");
    } else if (num == array[i]){
        check += 1;
    }
}
console.log("số "+num+" xuất hiện "+check+" lần");