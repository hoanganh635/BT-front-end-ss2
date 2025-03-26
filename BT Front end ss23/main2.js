let num = prompt("mời bạn nhập và một mảng số nguyên gồm 10 phần tử, mỗi phần tử bạn nhập cách nhau bằng space");
let array = num.split(" ").map(Number);
if (array.length === 0){
    console.log(" không có số lớn nhất");

} else {
    let max = array[0];
    let index = 0;
    for( let i = 1; i < array.length; i ++){
        if (array[i] > max){
            max = array[i];
            index = i;
        }
    }
    console.log("số lớn nhất bằng: "+ max+ "tại vị trí: "+ index);
}