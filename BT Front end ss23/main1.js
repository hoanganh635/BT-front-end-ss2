let num = prompt("mời bạn nhập và một mảng số nguyên gồm 10 phần tử, mỗi phần tử bạn nhập cách nhau bằng space");
let array = num.split(" ");
console.log(array)
let check = 1;
for ( let i = 0; i < array.length; i ++){
    if (array[i] >= 10){
        check = 0;
        console.log(array[i]);
    } 
}
 if (check){
    console.log("không có số nào lớn hơn 10")
 }